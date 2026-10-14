/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [78310],
    {
      89558: ($t, Ne, H) => {
        "use strict";
        H.d(Ne, { JY: () => Po, sx: () => Fu, gL: () => fs });
        var _ = H(90626),
          we = H(72739),
          T = H(3998),
          xe = H(61702),
          ve = H(72648);
        function ue(n) {
          n();
        }
        let le = ue;
        const U = (n) => (le = n),
          re = () => le,
          ee = Symbol.for("react-redux-context"),
          de = typeof globalThis < "u" ? globalThis : {};
        function Se() {
          var n;
          if (!_.createContext) return {};
          const i = (n = de[ee]) != null ? n : (de[ee] = new Map());
          let c = i.get(_.createContext);
          return (
            c || ((c = _.createContext(null)), i.set(_.createContext, c)), c
          );
        }
        const $e = Se(),
          Ce = null;
        function Ae(n = ReactReduxContext) {
          return function () {
            return useContext(n);
          };
        }
        const fe = null;
        let K = null;
        const _e = (n) => {
            K = n;
          },
          st = (n, i) => n === i;
        function tt(n = ReactReduxContext) {
          const i =
            n === ReactReduxContext
              ? useDefaultReduxContext
              : createReduxContextHook(n);
          return function (f, m = {}) {
            const {
                equalityFn: v = st,
                stabilityCheck: y = void 0,
                noopCheck: x = void 0,
              } = typeof m == "function" ? { equalityFn: m } : m,
              {
                store: S,
                subscription: k,
                getServerState: P,
                stabilityCheck: w,
                noopCheck: E,
              } = i(),
              j = useRef(!0),
              M = useCallback(
                {
                  [f.name](W) {
                    return f(W);
                  },
                }[f.name],
                [f, w, y],
              ),
              J = K(k.addNestedSub, S.getState, P || S.getState, M, v);
            return useDebugValue(J), J;
          };
        }
        const ut = null;
        var Le = H(58584),
          Me = H(81115),
          Ve = H(904),
          pt = H.n(Ve),
          wt = H(98193);
        const fn = [
          "initMapStateToProps",
          "initMapDispatchToProps",
          "initMergeProps",
        ];
        function _t(
          n,
          i,
          c,
          f,
          { areStatesEqual: m, areOwnPropsEqual: v, areStatePropsEqual: y },
        ) {
          let x = !1,
            S,
            k,
            P,
            w,
            E;
          function j(oe, me) {
            return (
              (S = oe),
              (k = me),
              (P = n(S, k)),
              (w = i(f, k)),
              (E = c(P, w, k)),
              (x = !0),
              E
            );
          }
          function M() {
            return (
              (P = n(S, k)),
              i.dependsOnOwnProps && (w = i(f, k)),
              (E = c(P, w, k)),
              E
            );
          }
          function J() {
            return (
              n.dependsOnOwnProps && (P = n(S, k)),
              i.dependsOnOwnProps && (w = i(f, k)),
              (E = c(P, w, k)),
              E
            );
          }
          function W() {
            const oe = n(S, k),
              me = !y(oe, P);
            return (P = oe), me && (E = c(P, w, k)), E;
          }
          function te(oe, me) {
            const ce = !v(me, k),
              he = !m(oe, S, me, k);
            return (S = oe), (k = me), ce && he ? M() : ce ? J() : he ? W() : E;
          }
          return function (me, ce) {
            return x ? te(me, ce) : j(me, ce);
          };
        }
        function Bt(n, i) {
          let {
              initMapStateToProps: c,
              initMapDispatchToProps: f,
              initMergeProps: m,
            } = i,
            v = (0, Me.A)(i, fn);
          const y = c(n, v),
            x = f(n, v),
            S = m(n, v);
          return _t(y, x, S, n, v);
        }
        function Qt(n, i) {
          const c = {};
          for (const f in n) {
            const m = n[f];
            typeof m == "function" && (c[f] = (...v) => i(m(...v)));
          }
          return c;
        }
        function It(n) {
          return function (c) {
            const f = n(c);
            function m() {
              return f;
            }
            return (m.dependsOnOwnProps = !1), m;
          };
        }
        function Zt(n) {
          return n.dependsOnOwnProps ? !!n.dependsOnOwnProps : n.length !== 1;
        }
        function pn(n, i) {
          return function (f, { displayName: m }) {
            const v = function (x, S) {
              return v.dependsOnOwnProps
                ? v.mapToProps(x, S)
                : v.mapToProps(x, void 0);
            };
            return (
              (v.dependsOnOwnProps = !0),
              (v.mapToProps = function (x, S) {
                (v.mapToProps = n), (v.dependsOnOwnProps = Zt(n));
                let k = v(x, S);
                return (
                  typeof k == "function" &&
                    ((v.mapToProps = k),
                    (v.dependsOnOwnProps = Zt(k)),
                    (k = v(x, S))),
                  k
                );
              }),
              v
            );
          };
        }
        function St(n, i) {
          return (c, f) => {
            throw new Error(
              `Invalid value of type ${typeof n} for ${i} argument when connecting component ${f.wrappedComponentName}.`,
            );
          };
        }
        function qe(n) {
          return n && typeof n == "object"
            ? It((i) => Qt(n, i))
            : n
              ? typeof n == "function"
                ? pn(n, "mapDispatchToProps")
                : St(n, "mapDispatchToProps")
              : It((i) => ({ dispatch: i }));
        }
        function Ft(n) {
          return n
            ? typeof n == "function"
              ? pn(n, "mapStateToProps")
              : St(n, "mapStateToProps")
            : It(() => ({}));
        }
        function en(n, i, c) {
          return (0, Le.A)({}, c, n, i);
        }
        function De(n) {
          return function (c, { displayName: f, areMergedPropsEqual: m }) {
            let v = !1,
              y;
            return function (S, k, P) {
              const w = n(S, k, P);
              return v ? m(w, y) || (y = w) : ((v = !0), (y = w)), y;
            };
          };
        }
        function Ze(n) {
          return n
            ? typeof n == "function"
              ? De(n)
              : St(n, "mergeProps")
            : () => en;
        }
        function kt() {
          const n = re();
          let i = null,
            c = null;
          return {
            clear() {
              (i = null), (c = null);
            },
            notify() {
              n(() => {
                let f = i;
                for (; f; ) f.callback(), (f = f.next);
              });
            },
            get() {
              let f = [],
                m = i;
              for (; m; ) f.push(m), (m = m.next);
              return f;
            },
            subscribe(f) {
              let m = !0,
                v = (c = { callback: f, next: null, prev: c });
              return (
                v.prev ? (v.prev.next = v) : (i = v),
                function () {
                  !m ||
                    i === null ||
                    ((m = !1),
                    v.next ? (v.next.prev = v.prev) : (c = v.prev),
                    v.prev ? (v.prev.next = v.next) : (i = v.next));
                }
              );
            },
          };
        }
        const nt = { notify() {}, get: () => [] };
        function zt(n, i) {
          let c,
            f = nt,
            m = 0,
            v = !1;
          function y(J) {
            P();
            const W = f.subscribe(J);
            let te = !1;
            return () => {
              te || ((te = !0), W(), w());
            };
          }
          function x() {
            f.notify();
          }
          function S() {
            M.onStateChange && M.onStateChange();
          }
          function k() {
            return v;
          }
          function P() {
            m++,
              c || ((c = i ? i.addNestedSub(S) : n.subscribe(S)), (f = kt()));
          }
          function w() {
            m--, c && m === 0 && (c(), (c = void 0), f.clear(), (f = nt));
          }
          function E() {
            v || ((v = !0), P());
          }
          function j() {
            v && ((v = !1), w());
          }
          const M = {
            addNestedSub: y,
            notifyNestedSubs: x,
            handleChangeWrapper: S,
            isSubscribed: k,
            trySubscribe: E,
            tryUnsubscribe: j,
            getListeners: () => f,
          };
          return M;
        }
        const mt =
          typeof window < "u" &&
          typeof window.document < "u" &&
          typeof window.document.createElement < "u"
            ? _.useLayoutEffect
            : _.useEffect;
        function rt(n, i) {
          return n === i
            ? n !== 0 || i !== 0 || 1 / n === 1 / i
            : n !== n && i !== i;
        }
        function Dt(n, i) {
          if (rt(n, i)) return !0;
          if (
            typeof n != "object" ||
            n === null ||
            typeof i != "object" ||
            i === null
          )
            return !1;
          const c = Object.keys(n),
            f = Object.keys(i);
          if (c.length !== f.length) return !1;
          for (let m = 0; m < c.length; m++)
            if (
              !Object.prototype.hasOwnProperty.call(i, c[m]) ||
              !rt(n[c[m]], i[c[m]])
            )
              return !1;
          return !0;
        }
        const tn = () => {
            throw new Error("uSES not initialized!");
          },
          Mt = ["reactReduxForwardedRef"];
        let Et = tn;
        const xt = (n) => {
            Et = n;
          },
          Pt = null,
          Nt = [null, null],
          Dn = (n) => {
            try {
              return JSON.stringify(n);
            } catch {
              return String(n);
            }
          };
        function nn(n, i, c) {
          mt(() => n(...i), c);
        }
        function rn(n, i, c, f, m, v) {
          (n.current = f),
            (c.current = !1),
            m.current && ((m.current = null), v());
        }
        function mn(n, i, c, f, m, v, y, x, S, k, P) {
          if (!n) return () => {};
          let w = !1,
            E = null;
          const j = () => {
            if (w || !x.current) return;
            const J = i.getState();
            let W, te;
            try {
              W = f(J, m.current);
            } catch (oe) {
              (te = oe), (E = oe);
            }
            te || (E = null),
              W === v.current
                ? y.current || k()
                : ((v.current = W), (S.current = W), (y.current = !0), P());
          };
          return (
            (c.onStateChange = j),
            c.trySubscribe(),
            j(),
            () => {
              if (((w = !0), c.tryUnsubscribe(), (c.onStateChange = null), E))
                throw E;
            }
          );
        }
        const gn = () => Pt;
        function Gt(n, i) {
          return n === i;
        }
        let Je = !1;
        function At(
          n,
          i,
          c,
          {
            pure: f,
            areStatesEqual: m = Gt,
            areOwnPropsEqual: v = Dt,
            areStatePropsEqual: y = Dt,
            areMergedPropsEqual: x = Dt,
            forwardRef: S = !1,
            context: k = $e,
          } = {},
        ) {
          const P = k,
            w = Ft(n),
            E = qe(i),
            j = Ze(c),
            M = !!n;
          return (W) => {
            const te = W.displayName || W.name || "Component",
              oe = `Connect(${te})`,
              me = {
                shouldHandleStateChanges: M,
                displayName: oe,
                wrappedComponentName: te,
                WrappedComponent: W,
                initMapStateToProps: w,
                initMapDispatchToProps: E,
                initMergeProps: j,
                areStatesEqual: m,
                areStatePropsEqual: y,
                areOwnPropsEqual: v,
                areMergedPropsEqual: x,
              };
            function ce(Ee) {
              const [ze, ft, Pe] = _.useMemo(() => {
                  const { reactReduxForwardedRef: Rt } = Ee,
                    dn = (0, Me.A)(Ee, Mt);
                  return [Ee.context, Rt, dn];
                }, [Ee]),
                bt = _.useMemo(
                  () =>
                    ze &&
                    ze.Consumer &&
                    (0, wt.isContextConsumer)(
                      _.createElement(ze.Consumer, null),
                    )
                      ? ze
                      : P,
                  [ze, P],
                ),
                We = _.useContext(bt),
                qt = !!Ee.store && !!Ee.store.getState && !!Ee.store.dispatch,
                Qn = !!We && !!We.store,
                Ut = qt ? Ee.store : We.store,
                br = Qn ? We.getServerState : Ut.getState,
                Ko = _.useMemo(() => Bt(Ut.dispatch, me), [Ut]),
                [zn, _i] = _.useMemo(() => {
                  if (!M) return Nt;
                  const Rt = zt(Ut, qt ? void 0 : We.subscription),
                    dn = Rt.notifyNestedSubs.bind(Rt);
                  return [Rt, dn];
                }, [Ut, qt, We]),
                $r = _.useMemo(
                  () => (qt ? We : (0, Le.A)({}, We, { subscription: zn })),
                  [qt, We, zn],
                ),
                Ii = _.useRef(),
                Ho = _.useRef(Pe),
                er = _.useRef(),
                qo = _.useRef(!1),
                Qu = _.useRef(!1),
                xi = _.useRef(!1),
                Xo = _.useRef();
              mt(
                () => (
                  (xi.current = !0),
                  () => {
                    xi.current = !1;
                  }
                ),
                [],
              );
              const Yo = _.useMemo(
                  () => () =>
                    er.current && Pe === Ho.current
                      ? er.current
                      : Ko(Ut.getState(), Pe),
                  [Ut, Pe],
                ),
                ps = _.useMemo(
                  () => (dn) =>
                    zn
                      ? mn(M, Ut, zn, Ko, Ho, Ii, qo, xi, er, _i, dn)
                      : () => {},
                  [zn],
                );
              nn(rn, [Ho, Ii, qo, Pe, er, _i]);
              let _r;
              try {
                _r = Et(ps, Yo, br ? () => Ko(br(), Pe) : Yo);
              } catch (Rt) {
                throw (
                  (Xo.current &&
                    (Rt.message += `
The error may be correlated with this previous error:
${Xo.current.stack}

`),
                  Rt)
                );
              }
              mt(() => {
                (Xo.current = void 0), (er.current = void 0), (Ii.current = _r);
              });
              const Qo = _.useMemo(
                () => _.createElement(W, (0, Le.A)({}, _r, { ref: ft })),
                [ft, W, _r],
              );
              return _.useMemo(
                () =>
                  M ? _.createElement(bt.Provider, { value: $r }, Qo) : Qo,
                [bt, Qo, $r],
              );
            }
            const ge = _.memo(ce);
            if (
              ((ge.WrappedComponent = W),
              (ge.displayName = ce.displayName = oe),
              S)
            ) {
              const ze = _.forwardRef(function (Pe, bt) {
                return _.createElement(
                  ge,
                  (0, Le.A)({}, Pe, { reactReduxForwardedRef: bt }),
                );
              });
              return (
                (ze.displayName = oe), (ze.WrappedComponent = W), pt()(ze, W)
              );
            }
            return pt()(ge, W);
          };
        }
        const vn = At;
        function gt({
          store: n,
          context: i,
          children: c,
          serverState: f,
          stabilityCheck: m = "once",
          noopCheck: v = "once",
        }) {
          const y = _.useMemo(() => {
              const k = zt(n);
              return {
                store: n,
                subscription: k,
                getServerState: f ? () => f : void 0,
                stabilityCheck: m,
                noopCheck: v,
              };
            }, [n, f, m, v]),
            x = _.useMemo(() => n.getState(), [n]);
          mt(() => {
            const { subscription: k } = y;
            return (
              (k.onStateChange = k.notifyNestedSubs),
              k.trySubscribe(),
              x !== n.getState() && k.notifyNestedSubs(),
              () => {
                k.tryUnsubscribe(), (k.onStateChange = void 0);
              }
            );
          }, [y, x]);
          const S = i || $e;
          return _.createElement(S.Provider, { value: y }, c);
        }
        const En = gt;
        function b(n = ReactReduxContext) {
          const i =
            n === ReactReduxContext
              ? useDefaultReduxContext
              : createReduxContextHook(n);
          return function () {
            const { store: f } = i();
            return f;
          };
        }
        const l = null;
        function u(n = ReactReduxContext) {
          const i =
            n === ReactReduxContext ? useDefaultStore : createStoreHook(n);
          return function () {
            return i().dispatch;
          };
        }
        const h = null;
        _e(ve.useSyncExternalStoreWithSelector),
          xt(xe.useSyncExternalStore),
          U(we.unstable_batchedUpdates);
        var p = H(46311),
          D = H(48046),
          R =
            Number.isNaN ||
            function (i) {
              return typeof i == "number" && i !== i;
            };
        function Y(n, i) {
          return !!(n === i || (R(n) && R(i)));
        }
        function ae(n, i) {
          if (n.length !== i.length) return !1;
          for (var c = 0; c < n.length; c++) if (!Y(n[c], i[c])) return !1;
          return !0;
        }
        function X(n, i) {
          i === void 0 && (i = ae);
          var c = null;
          function f() {
            for (var m = [], v = 0; v < arguments.length; v++)
              m[v] = arguments[v];
            if (c && c.lastThis === this && i(m, c.lastArgs))
              return c.lastResult;
            var y = n.apply(this, m);
            return (c = { lastResult: y, lastArgs: m, lastThis: this }), y;
          }
          return (
            (f.clear = function () {
              c = null;
            }),
            f
          );
        }
        var be = H(18651);
        const pe = !0,
          wi = /[ \t]{2,}/g,
          Si = /^[ \t]*/gm,
          Ir = (n) => n.replace(wi, " ").replace(Si, "").trim(),
          xr = (n) =>
            Ir(`
  %c@hello-pangea/dnd

  %c${Ir(n)}

  %c\u{1F477}\u200D This is a development only message. It will be removed in production builds.
`),
          wr = (n) => [
            xr(n),
            "color: #00C584; font-size: 1.2em; font-weight: bold;",
            "line-height: 1.5",
            "color: #723874;",
          ],
          tr = "__@hello-pangea/dnd-disable-dev-warnings";
        function on(n, i) {
          pe || (typeof window < "u" && window[tr]) || console[n](...wr(i));
        }
        const ki = on.bind(null, "warn"),
          Sr = on.bind(null, "error");
        function Ot() {}
        function kr(n, i) {
          return { ...n, ...i };
        }
        function it(n, i, c) {
          const f = i.map((m) => {
            const v = kr(c, m.options);
            return (
              n.addEventListener(m.eventName, m.fn, v),
              function () {
                n.removeEventListener(m.eventName, m.fn, v);
              }
            );
          });
          return function () {
            f.forEach((v) => {
              v();
            });
          };
        }
        const zr = !0,
          Dr = "Invariant failed";
        class hn extends Error {}
        hn.prototype.toString = function () {
          return this.message;
        };
        function G(n, i) {
          if (!n) throw zr ? new hn(Dr) : new hn(`${Dr}: ${i || ""}`);
        }
        class Er extends _.Component {
          constructor(...i) {
            super(...i),
              (this.callbacks = null),
              (this.unbind = Ot),
              (this.onWindowError = (c) => {
                const f = this.getCallbacks();
                f.isDragging() && f.tryAbort(),
                  c.error instanceof hn && c.preventDefault();
              }),
              (this.getCallbacks = () => {
                if (!this.callbacks)
                  throw new Error(
                    "Unable to find AppCallbacks in <ErrorBoundary/>",
                  );
                return this.callbacks;
              }),
              (this.setCallbacks = (c) => {
                this.callbacks = c;
              });
          }
          componentDidMount() {
            this.unbind = it(window, [
              { eventName: "error", fn: this.onWindowError },
            ]);
          }
          componentDidCatch(i) {
            if (i instanceof hn) {
              this.setState({});
              return;
            }
            throw i;
          }
          componentWillUnmount() {
            this.unbind();
          }
          render() {
            return this.props.children(this.setCallbacks);
          }
        }
        const Pr = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
          an = (n) => n + 1,
          Pn = (n) => `
  You have lifted an item in position ${an(n.source.index)}
`,
          Xe = (n, i) => {
            const c = n.droppableId === i.droppableId,
              f = an(n.index),
              m = an(i.index);
            return c
              ? `
      You have moved the item from position ${f}
      to position ${m}
    `
              : `
    You have moved the item from position ${f}
    in list ${n.droppableId}
    to list ${i.droppableId}
    in position ${m}
  `;
          },
          nr = (n, i, c) =>
            i.droppableId === c.droppableId
              ? `
      The item ${n}
      has been combined with ${c.draggableId}`
              : `
      The item ${n}
      in list ${i.droppableId}
      has been combined with ${c.draggableId}
      in list ${c.droppableId}
    `,
          Or = (n) => {
            const i = n.destination;
            if (i) return Xe(n.source, i);
            const c = n.combine;
            return c
              ? nr(n.draggableId, n.source, c)
              : "You are over an area that cannot be dropped on";
          },
          Ur = (n) => `
  The item has returned to its starting position
  of ${an(n.index)}
`;
        var jt = {
          dragHandleUsageInstructions: Pr,
          onDragStart: Pn,
          onDragUpdate: Or,
          onDragEnd: (n) => {
            if (n.reason === "CANCEL")
              return `
      Movement cancelled.
      ${Ur(n.source)}
    `;
            const i = n.destination,
              c = n.combine;
            return i
              ? `
      You have dropped the item.
      ${Xe(n.source, i)}
    `
              : c
                ? `
      You have dropped the item.
      ${nr(n.draggableId, n.source, c)}
    `
                : `
    The item has been dropped while not over a drop area.
    ${Ur(n.source)}
  `;
          },
        };
        const Ge = { x: 0, y: 0 },
          Be = (n, i) => ({ x: n.x + i.x, y: n.y + i.y }),
          ot = (n, i) => ({ x: n.x - i.x, y: n.y - i.y }),
          lt = (n, i) => n.x === i.x && n.y === i.y,
          Wt = (n) => ({ x: n.x !== 0 ? -n.x : 0, y: n.y !== 0 ? -n.y : 0 }),
          vt = (n, i, c = 0) => (n === "x" ? { x: i, y: c } : { x: c, y: i }),
          Z = (n, i) => Math.sqrt((i.x - n.x) ** 2 + (i.y - n.y) ** 2),
          C = (n, i) => Math.min(...i.map((c) => Z(n, c))),
          F = (n) => (i) => ({ x: n(i.x), y: n(i.y) });
        var A = (n, i) => {
          const c = (0, D.l)({
            top: Math.max(i.top, n.top),
            right: Math.min(i.right, n.right),
            bottom: Math.min(i.bottom, n.bottom),
            left: Math.max(i.left, n.left),
          });
          return c.width <= 0 || c.height <= 0 ? null : c;
        };
        const t = (n, i) => ({
            top: n.top + i.y,
            left: n.left + i.x,
            bottom: n.bottom + i.y,
            right: n.right + i.x,
          }),
          o = (n) => [
            { x: n.left, y: n.top },
            { x: n.right, y: n.top },
            { x: n.left, y: n.bottom },
            { x: n.right, y: n.bottom },
          ],
          g = { top: 0, right: 0, bottom: 0, left: 0 },
          O = (n, i) => (i ? t(n, i.scroll.diff.displacement) : n),
          je = (n, i, c) =>
            c && c.increasedBy
              ? { ...n, [i.end]: n[i.end] + c.increasedBy[i.line] }
              : n,
          q = (n, i) =>
            i && i.shouldClipSubject ? A(i.pageMarginBox, n) : (0, D.l)(n);
        var se = ({ page: n, withPlaceholder: i, axis: c, frame: f }) => {
            const m = O(n.marginBox, f),
              v = je(m, c, i),
              y = q(v, f);
            return { page: n, withPlaceholder: i, active: y };
          },
          Oe = (n, i) => {
            n.frame || G(!1);
            const c = n.frame,
              f = ot(i, c.scroll.initial),
              m = Wt(f),
              v = {
                ...c,
                scroll: {
                  initial: c.scroll.initial,
                  current: i,
                  diff: { value: f, displacement: m },
                  max: c.scroll.max,
                },
              },
              y = se({
                page: n.subject.page,
                withPlaceholder: n.subject.withPlaceholder,
                axis: n.axis,
                frame: v,
              });
            return { ...n, frame: v, subject: y };
          };
        const at = X((n) =>
            n.reduce((i, c) => ((i[c.descriptor.id] = c), i), {}),
          ),
          Ye = X((n) => n.reduce((i, c) => ((i[c.descriptor.id] = c), i), {})),
          ct = X((n) => Object.values(n)),
          yn = X((n) => Object.values(n));
        var cn = X((n, i) =>
          yn(i)
            .filter((f) => n === f.descriptor.droppableId)
            .sort((f, m) => f.descriptor.index - m.descriptor.index),
        );
        function Nr(n) {
          return n.at && n.at.type === "REORDER" ? n.at.destination : null;
        }
        function ke(n) {
          return n.at && n.at.type === "COMBINE" ? n.at.combine : null;
        }
        var sn = X((n, i) =>
            i.filter((c) => c.descriptor.id !== n.descriptor.id),
          ),
          Te = ({
            isMovingForward: n,
            draggable: i,
            destination: c,
            insideDestination: f,
            previousImpact: m,
          }) => {
            if (!c.isCombineEnabled || !Nr(m)) return null;
            function y(j) {
              const M = {
                type: "COMBINE",
                combine: { draggableId: j, droppableId: c.descriptor.id },
              };
              return { ...m, at: M };
            }
            const x = m.displaced.all,
              S = x.length ? x[0] : null;
            if (n) return S ? y(S) : null;
            const k = sn(i, f);
            if (!S) {
              if (!k.length) return null;
              const j = k[k.length - 1];
              return y(j.descriptor.id);
            }
            const P = k.findIndex((j) => j.descriptor.id === S);
            P === -1 && G(!1);
            const w = P - 1;
            if (w < 0) return null;
            const E = k[w];
            return y(E.descriptor.id);
          },
          bn = (n, i) => n.descriptor.droppableId === i.descriptor.id;
        const Di = { point: Ge, value: 0 },
          On = { invisible: {}, visible: {}, all: [] };
        var ta = { displaced: On, displacedBy: Di, at: null },
          ht = (n, i) => (c) => n <= c && c <= i,
          Ei = (n) => {
            const i = ht(n.top, n.bottom),
              c = ht(n.left, n.right);
            return (f) => {
              if (i(f.top) && i(f.bottom) && c(f.left) && c(f.right)) return !0;
              const v = i(f.top) || i(f.bottom),
                y = c(f.left) || c(f.right);
              if (v && y) return !0;
              const S = f.top < n.top && f.bottom > n.bottom,
                k = f.left < n.left && f.right > n.right;
              return S && k ? !0 : (S && y) || (k && v);
            };
          },
          na = (n) => {
            const i = ht(n.top, n.bottom),
              c = ht(n.left, n.right);
            return (f) => i(f.top) && i(f.bottom) && c(f.left) && c(f.right);
          };
        const Ar = {
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
          Pi = {
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
        var ra = (n) => (i) => {
          const c = ht(i.top, i.bottom),
            f = ht(i.left, i.right);
          return (m) =>
            n === Ar ? c(m.top) && c(m.bottom) : f(m.left) && f(m.right);
        };
        const ia = (n, i) => {
            const c = i.frame ? i.frame.scroll.diff.displacement : Ge;
            return t(n, c);
          },
          oa = (n, i, c) => (i.subject.active ? c(i.subject.active)(n) : !1),
          aa = (n, i, c) => c(i)(n),
          jr = ({
            target: n,
            destination: i,
            viewport: c,
            withDroppableDisplacement: f,
            isVisibleThroughFrameFn: m,
          }) => {
            const v = f ? ia(n, i) : n;
            return oa(v, i, m) && aa(v, c, m);
          },
          ca = (n) => jr({ ...n, isVisibleThroughFrameFn: Ei }),
          Oi = (n) => jr({ ...n, isVisibleThroughFrameFn: na }),
          vs = (n) =>
            jr({ ...n, isVisibleThroughFrameFn: ra(n.destination.axis) }),
          sa = (n, i, c) => {
            if (typeof c == "boolean") return c;
            if (!i) return !0;
            const { invisible: f, visible: m } = i;
            if (f[n]) return !1;
            const v = m[n];
            return v ? v.shouldAnimate : !0;
          };
        function ua(n, i) {
          const c = n.page.marginBox,
            f = { top: i.point.y, right: 0, bottom: 0, left: i.point.x };
          return (0, D.l)((0, D.fT)(c, f));
        }
        function $n({
          afterDragging: n,
          destination: i,
          displacedBy: c,
          viewport: f,
          forceShouldAnimate: m,
          last: v,
        }) {
          return n.reduce(
            function (x, S) {
              const k = ua(S, c),
                P = S.descriptor.id;
              if (
                (x.all.push(P),
                !ca({
                  target: k,
                  destination: i,
                  viewport: f,
                  withDroppableDisplacement: !0,
                }))
              )
                return (x.invisible[S.descriptor.id] = !0), x;
              const E = sa(P, v, m),
                j = { draggableId: P, shouldAnimate: E };
              return (x.visible[P] = j), x;
            },
            { all: [], visible: {}, invisible: {} },
          );
        }
        function la(n, i) {
          if (!n.length) return 0;
          const c = n[n.length - 1].descriptor.index;
          return i.inHomeList ? c : c + 1;
        }
        function Ui({
          insideDestination: n,
          inHomeList: i,
          displacedBy: c,
          destination: f,
        }) {
          const m = la(n, { inHomeList: i });
          return {
            displaced: On,
            displacedBy: c,
            at: {
              type: "REORDER",
              destination: { droppableId: f.descriptor.id, index: m },
            },
          };
        }
        function rr({
          draggable: n,
          insideDestination: i,
          destination: c,
          viewport: f,
          displacedBy: m,
          last: v,
          index: y,
          forceShouldAnimate: x,
        }) {
          const S = bn(n, c);
          if (y == null)
            return Ui({
              insideDestination: i,
              inHomeList: S,
              displacedBy: m,
              destination: c,
            });
          const k = i.find((M) => M.descriptor.index === y);
          if (!k)
            return Ui({
              insideDestination: i,
              inHomeList: S,
              displacedBy: m,
              destination: c,
            });
          const P = sn(n, i),
            w = i.indexOf(k),
            E = P.slice(w);
          return {
            displaced: $n({
              afterDragging: E,
              destination: c,
              displacedBy: m,
              last: v,
              viewport: f.frame,
              forceShouldAnimate: x,
            }),
            displacedBy: m,
            at: {
              type: "REORDER",
              destination: { droppableId: c.descriptor.id, index: y },
            },
          };
        }
        function Jt(n, i) {
          return !!i.effected[n];
        }
        var da = ({
            isMovingForward: n,
            destination: i,
            draggables: c,
            combine: f,
            afterCritical: m,
          }) => {
            if (!i.isCombineEnabled) return null;
            const v = f.draggableId,
              x = c[v].descriptor.index;
            return Jt(v, m) ? (n ? x : x - 1) : n ? x + 1 : x;
          },
          fa = ({
            isMovingForward: n,
            isInHomeList: i,
            insideDestination: c,
            location: f,
          }) => {
            if (!c.length) return null;
            const m = f.index,
              v = n ? m + 1 : m - 1,
              y = c[0].descriptor.index,
              x = c[c.length - 1].descriptor.index,
              S = i ? x : x + 1;
            return v < y || v > S ? null : v;
          },
          hs = ({
            isMovingForward: n,
            isInHomeList: i,
            draggable: c,
            draggables: f,
            destination: m,
            insideDestination: v,
            previousImpact: y,
            viewport: x,
            afterCritical: S,
          }) => {
            const k = y.at;
            if ((k || G(!1), k.type === "REORDER")) {
              const w = fa({
                isMovingForward: n,
                isInHomeList: i,
                location: k.destination,
                insideDestination: v,
              });
              return w == null
                ? null
                : rr({
                    draggable: c,
                    insideDestination: v,
                    destination: m,
                    viewport: x,
                    last: y.displaced,
                    displacedBy: y.displacedBy,
                    index: w,
                  });
            }
            const P = da({
              isMovingForward: n,
              destination: m,
              displaced: y.displaced,
              draggables: f,
              combine: k.combine,
              afterCritical: S,
            });
            return P == null
              ? null
              : rr({
                  draggable: c,
                  insideDestination: v,
                  destination: m,
                  viewport: x,
                  last: y.displaced,
                  displacedBy: y.displacedBy,
                  index: P,
                });
          },
          Ni = ({
            displaced: n,
            afterCritical: i,
            combineWith: c,
            displacedBy: f,
          }) => {
            const m = !!(n.visible[c] || n.invisible[c]);
            return Jt(c, i) ? (m ? Ge : Wt(f.point)) : m ? f.point : Ge;
          },
          pa = ({ afterCritical: n, impact: i, draggables: c }) => {
            const f = ke(i);
            f || G(!1);
            const m = f.draggableId,
              v = c[m].page.borderBox.center,
              y = Ni({
                displaced: i.displaced,
                afterCritical: n,
                combineWith: m,
                displacedBy: i.displacedBy,
              });
            return Be(v, y);
          };
        const Tr = (n, i) => i.margin[n.start] + i.borderBox[n.size] / 2,
          ma = (n, i) => i.margin[n.end] + i.borderBox[n.size] / 2,
          Ai = (n, i, c) =>
            i[n.crossAxisStart] +
            c.margin[n.crossAxisStart] +
            c.borderBox[n.crossAxisSize] / 2,
          ga = ({ axis: n, moveRelativeTo: i, isMoving: c }) =>
            vt(n.line, i.marginBox[n.end] + Tr(n, c), Ai(n, i.marginBox, c)),
          va = ({ axis: n, moveRelativeTo: i, isMoving: c }) =>
            vt(n.line, i.marginBox[n.start] - ma(n, c), Ai(n, i.marginBox, c)),
          ys = ({ axis: n, moveInto: i, isMoving: c }) =>
            vt(
              n.line,
              i.contentBox[n.start] + Tr(n, c),
              Ai(n, i.contentBox, c),
            );
        var bs = ({
            impact: n,
            draggable: i,
            draggables: c,
            droppable: f,
            afterCritical: m,
          }) => {
            const v = cn(f.descriptor.id, c),
              y = i.page,
              x = f.axis;
            if (!v.length)
              return ys({ axis: x, moveInto: f.page, isMoving: y });
            const { displaced: S, displacedBy: k } = n,
              P = S.all[0];
            if (P) {
              const E = c[P];
              if (Jt(P, m))
                return va({ axis: x, moveRelativeTo: E.page, isMoving: y });
              const j = (0, D.cY)(E.page, k.point);
              return va({ axis: x, moveRelativeTo: j, isMoving: y });
            }
            const w = v[v.length - 1];
            if (w.descriptor.id === i.descriptor.id) return y.borderBox.center;
            if (Jt(w.descriptor.id, m)) {
              const E = (0, D.cY)(w.page, Wt(m.displacedBy.point));
              return ga({ axis: x, moveRelativeTo: E, isMoving: y });
            }
            return ga({ axis: x, moveRelativeTo: w.page, isMoving: y });
          },
          Cr = (n, i) => {
            const c = n.frame;
            return c ? Be(i, c.scroll.diff.displacement) : i;
          };
        const ha = ({
          impact: n,
          draggable: i,
          droppable: c,
          draggables: f,
          afterCritical: m,
        }) => {
          const v = i.page.borderBox.center,
            y = n.at;
          return !c || !y
            ? v
            : y.type === "REORDER"
              ? bs({
                  impact: n,
                  draggable: i,
                  draggables: f,
                  droppable: c,
                  afterCritical: m,
                })
              : pa({ impact: n, draggables: f, afterCritical: m });
        };
        var Rr = (n) => {
            const i = ha(n),
              c = n.droppable;
            return c ? Cr(c, i) : i;
          },
          ji = (n, i) => {
            const c = ot(i, n.scroll.initial),
              f = Wt(c);
            return {
              frame: (0, D.l)({
                top: i.y,
                bottom: i.y + n.frame.height,
                left: i.x,
                right: i.x + n.frame.width,
              }),
              scroll: {
                initial: n.scroll.initial,
                max: n.scroll.max,
                current: i,
                diff: { value: c, displacement: f },
              },
            };
          };
        function Br(n, i) {
          return n.map((c) => i[c]);
        }
        function ya(n, i) {
          for (let c = 0; c < i.length; c++) {
            const f = i[c].visible[n];
            if (f) return f;
          }
          return null;
        }
        var ir = ({
            impact: n,
            viewport: i,
            destination: c,
            draggables: f,
            maxScrollChange: m,
          }) => {
            const v = ji(i, Be(i.scroll.current, m)),
              y = c.frame ? Oe(c, Be(c.frame.scroll.current, m)) : c,
              x = n.displaced,
              S = $n({
                afterDragging: Br(x.all, f),
                destination: c,
                displacedBy: n.displacedBy,
                viewport: v.frame,
                last: x,
                forceShouldAnimate: !1,
              }),
              k = $n({
                afterDragging: Br(x.all, f),
                destination: y,
                displacedBy: n.displacedBy,
                viewport: i.frame,
                last: x,
                forceShouldAnimate: !1,
              }),
              P = {},
              w = {},
              E = [x, S, k];
            return (
              x.all.forEach((M) => {
                const J = ya(M, E);
                if (J) {
                  w[M] = J;
                  return;
                }
                P[M] = !0;
              }),
              { ...n, displaced: { all: x.all, invisible: P, visible: w } }
            );
          },
          Ti = (n, i) => Be(n.scroll.diff.displacement, i),
          or = ({ pageBorderBoxCenter: n, draggable: i, viewport: c }) => {
            const f = Ti(c, n),
              m = ot(f, i.page.borderBox.center);
            return Be(i.client.borderBox.center, m);
          },
          Ci = ({
            draggable: n,
            destination: i,
            newPageBorderBoxCenter: c,
            viewport: f,
            withDroppableDisplacement: m,
            onlyOnMainAxis: v = !1,
          }) => {
            const y = ot(c, n.page.borderBox.center),
              S = {
                target: t(n.page.borderBox, y),
                destination: i,
                withDroppableDisplacement: m,
                viewport: f,
              };
            return v ? vs(S) : Oi(S);
          },
          ba = ({
            isMovingForward: n,
            draggable: i,
            destination: c,
            draggables: f,
            previousImpact: m,
            viewport: v,
            previousPageBorderBoxCenter: y,
            previousClientSelection: x,
            afterCritical: S,
          }) => {
            if (!c.isEnabled) return null;
            const k = cn(c.descriptor.id, f),
              P = bn(i, c),
              w =
                Te({
                  isMovingForward: n,
                  draggable: i,
                  destination: c,
                  insideDestination: k,
                  previousImpact: m,
                }) ||
                hs({
                  isMovingForward: n,
                  isInHomeList: P,
                  draggable: i,
                  draggables: f,
                  destination: c,
                  insideDestination: k,
                  previousImpact: m,
                  viewport: v,
                  afterCritical: S,
                });
            if (!w) return null;
            const E = Rr({
              impact: w,
              draggable: i,
              droppable: c,
              draggables: f,
              afterCritical: S,
            });
            if (
              Ci({
                draggable: i,
                destination: c,
                newPageBorderBoxCenter: E,
                viewport: v.frame,
                withDroppableDisplacement: !1,
                onlyOnMainAxis: !0,
              })
            )
              return {
                clientSelection: or({
                  pageBorderBoxCenter: E,
                  draggable: i,
                  viewport: v,
                }),
                impact: w,
                scrollJumpRequest: null,
              };
            const M = ot(E, y),
              J = ir({
                impact: w,
                viewport: v,
                destination: c,
                draggables: f,
                maxScrollChange: M,
              });
            return { clientSelection: x, impact: J, scrollJumpRequest: M };
          };
        const Ke = (n) => {
          const i = n.subject.active;
          return i || G(!1), i;
        };
        var $a = ({
          isMovingForward: n,
          pageBorderBoxCenter: i,
          source: c,
          droppables: f,
          viewport: m,
        }) => {
          const v = c.subject.active;
          if (!v) return null;
          const y = c.axis,
            x = ht(v[y.start], v[y.end]),
            S = ct(f)
              .filter((P) => P !== c)
              .filter((P) => P.isEnabled)
              .filter((P) => !!P.subject.active)
              .filter((P) => Ei(m.frame)(Ke(P)))
              .filter((P) => {
                const w = Ke(P);
                return n
                  ? v[y.crossAxisEnd] < w[y.crossAxisEnd]
                  : w[y.crossAxisStart] < v[y.crossAxisStart];
              })
              .filter((P) => {
                const w = Ke(P),
                  E = ht(w[y.start], w[y.end]);
                return (
                  x(w[y.start]) || x(w[y.end]) || E(v[y.start]) || E(v[y.end])
                );
              })
              .sort((P, w) => {
                const E = Ke(P)[y.crossAxisStart],
                  j = Ke(w)[y.crossAxisStart];
                return n ? E - j : j - E;
              })
              .filter(
                (P, w, E) =>
                  Ke(P)[y.crossAxisStart] === Ke(E[0])[y.crossAxisStart],
              );
          if (!S.length) return null;
          if (S.length === 1) return S[0];
          const k = S.filter((P) =>
            ht(Ke(P)[y.start], Ke(P)[y.end])(i[y.line]),
          );
          return k.length === 1
            ? k[0]
            : k.length > 1
              ? k.sort((P, w) => Ke(P)[y.start] - Ke(w)[y.start])[0]
              : S.sort((P, w) => {
                  const E = C(i, o(Ke(P))),
                    j = C(i, o(Ke(w)));
                  return E !== j ? E - j : Ke(P)[y.start] - Ke(w)[y.start];
                })[0];
        };
        const _a = (n, i) => {
            const c = n.page.borderBox.center;
            return Jt(n.descriptor.id, i) ? ot(c, i.displacedBy.point) : c;
          },
          $s = (n, i) => {
            const c = n.page.borderBox;
            return Jt(n.descriptor.id, i) ? t(c, Wt(i.displacedBy.point)) : c;
          };
        var _s = ({
            pageBorderBoxCenter: n,
            viewport: i,
            destination: c,
            insideDestination: f,
            afterCritical: m,
          }) =>
            f
              .filter((y) =>
                Oi({
                  target: $s(y, m),
                  destination: c,
                  viewport: i.frame,
                  withDroppableDisplacement: !0,
                }),
              )
              .sort((y, x) => {
                const S = Z(n, Cr(c, _a(y, m))),
                  k = Z(n, Cr(c, _a(x, m)));
                return S < k
                  ? -1
                  : k < S
                    ? 1
                    : y.descriptor.index - x.descriptor.index;
              })[0] || null,
          Un = X(function (i, c) {
            const f = c[i.line];
            return { value: f, point: vt(i.line, f) };
          });
        const Zr = (n, i, c) => {
            const f = n.axis;
            if (n.descriptor.mode === "virtual") return vt(f.line, i[f.line]);
            const m = n.subject.page.contentBox[f.size],
              S =
                cn(n.descriptor.id, c).reduce(
                  (k, P) => k + P.client.marginBox[f.size],
                  0,
                ) +
                i[f.line] -
                m;
            return S <= 0 ? null : vt(f.line, S);
          },
          Fr = (n, i) => ({ ...n, scroll: { ...n.scroll, max: i } }),
          Ia = (n, i, c) => {
            const f = n.frame;
            bn(i, n) && G(!1), n.subject.withPlaceholder && G(!1);
            const m = Un(n.axis, i.displaceBy).point,
              v = Zr(n, m, c),
              y = {
                placeholderSize: m,
                increasedBy: v,
                oldFrameMaxScroll: n.frame ? n.frame.scroll.max : null,
              };
            if (!f) {
              const P = se({
                page: n.subject.page,
                withPlaceholder: y,
                axis: n.axis,
                frame: n.frame,
              });
              return { ...n, subject: P };
            }
            const x = v ? Be(f.scroll.max, v) : f.scroll.max,
              S = Fr(f, x),
              k = se({
                page: n.subject.page,
                withPlaceholder: y,
                axis: n.axis,
                frame: S,
              });
            return { ...n, subject: k, frame: S };
          },
          Is = (n) => {
            const i = n.subject.withPlaceholder;
            i || G(!1);
            const c = n.frame;
            if (!c) {
              const y = se({
                page: n.subject.page,
                axis: n.axis,
                frame: null,
                withPlaceholder: null,
              });
              return { ...n, subject: y };
            }
            const f = i.oldFrameMaxScroll;
            f || G(!1);
            const m = Fr(c, f),
              v = se({
                page: n.subject.page,
                axis: n.axis,
                frame: m,
                withPlaceholder: null,
              });
            return { ...n, subject: v, frame: m };
          };
        var xs = ({
            previousPageBorderBoxCenter: n,
            moveRelativeTo: i,
            insideDestination: c,
            draggable: f,
            draggables: m,
            destination: v,
            viewport: y,
            afterCritical: x,
          }) => {
            if (!i) {
              if (c.length) return null;
              const w = {
                  displaced: On,
                  displacedBy: Di,
                  at: {
                    type: "REORDER",
                    destination: { droppableId: v.descriptor.id, index: 0 },
                  },
                },
                E = Rr({
                  impact: w,
                  draggable: f,
                  droppable: v,
                  draggables: m,
                  afterCritical: x,
                }),
                j = bn(f, v) ? v : Ia(v, f, m);
              return Ci({
                draggable: f,
                destination: j,
                newPageBorderBoxCenter: E,
                viewport: y.frame,
                withDroppableDisplacement: !1,
                onlyOnMainAxis: !0,
              })
                ? w
                : null;
            }
            const S = n[v.axis.line] <= i.page.borderBox.center[v.axis.line],
              k = (() => {
                const w = i.descriptor.index;
                return i.descriptor.id === f.descriptor.id || S ? w : w + 1;
              })(),
              P = Un(v.axis, f.displaceBy);
            return rr({
              draggable: f,
              insideDestination: c,
              destination: v,
              viewport: y,
              displacedBy: P,
              last: On,
              index: k,
            });
          },
          ws = ({
            isMovingForward: n,
            previousPageBorderBoxCenter: i,
            draggable: c,
            isOver: f,
            draggables: m,
            droppables: v,
            viewport: y,
            afterCritical: x,
          }) => {
            const S = $a({
              isMovingForward: n,
              pageBorderBoxCenter: i,
              source: f,
              droppables: v,
              viewport: y,
            });
            if (!S) return null;
            const k = cn(S.descriptor.id, m),
              P = _s({
                pageBorderBoxCenter: i,
                viewport: y,
                destination: S,
                insideDestination: k,
                afterCritical: x,
              }),
              w = xs({
                previousPageBorderBoxCenter: i,
                destination: S,
                draggable: c,
                draggables: m,
                moveRelativeTo: P,
                insideDestination: k,
                viewport: y,
                afterCritical: x,
              });
            if (!w) return null;
            const E = Rr({
              impact: w,
              draggable: c,
              droppable: S,
              draggables: m,
              afterCritical: x,
            });
            return {
              clientSelection: or({
                pageBorderBoxCenter: E,
                draggable: c,
                viewport: y,
              }),
              impact: w,
              scrollJumpRequest: null,
            };
          },
          yt = (n) => {
            const i = n.at;
            return i
              ? i.type === "REORDER"
                ? i.destination.droppableId
                : i.combine.droppableId
              : null;
          };
        const Ss = (n, i) => {
          const c = yt(n);
          return c ? i[c] : null;
        };
        var ks = ({ state: n, type: i }) => {
          const c = Ss(n.impact, n.dimensions.droppables),
            f = !!c,
            m = n.dimensions.droppables[n.critical.droppable.id],
            v = c || m,
            y = v.axis.direction,
            x =
              (y === "vertical" && (i === "MOVE_UP" || i === "MOVE_DOWN")) ||
              (y === "horizontal" && (i === "MOVE_LEFT" || i === "MOVE_RIGHT"));
          if (x && !f) return null;
          const S = i === "MOVE_DOWN" || i === "MOVE_RIGHT",
            k = n.dimensions.draggables[n.critical.draggable.id],
            P = n.current.page.borderBoxCenter,
            { draggables: w, droppables: E } = n.dimensions;
          return x
            ? ba({
                isMovingForward: S,
                previousPageBorderBoxCenter: P,
                draggable: k,
                destination: v,
                draggables: w,
                viewport: n.viewport,
                previousClientSelection: n.current.client.selection,
                previousImpact: n.impact,
                afterCritical: n.afterCritical,
              })
            : ws({
                isMovingForward: S,
                previousPageBorderBoxCenter: P,
                draggable: k,
                isOver: v,
                draggables: w,
                droppables: E,
                viewport: n.viewport,
                afterCritical: n.afterCritical,
              });
        };
        function _n(n) {
          return n.phase === "DRAGGING" || n.phase === "COLLECTING";
        }
        function xa(n) {
          const i = ht(n.top, n.bottom),
            c = ht(n.left, n.right);
          return function (m) {
            return i(m.y) && c(m.x);
          };
        }
        function wa(n, i) {
          return (
            n.left < i.right &&
            n.right > i.left &&
            n.top < i.bottom &&
            n.bottom > i.top
          );
        }
        function Sa({ pageBorderBox: n, draggable: i, candidates: c }) {
          const f = i.page.borderBox.center,
            m = c
              .map((v) => {
                const y = v.axis,
                  x = vt(
                    v.axis.line,
                    n.center[y.line],
                    v.page.borderBox.center[y.crossAxisLine],
                  );
                return { id: v.descriptor.id, distance: Z(f, x) };
              })
              .sort((v, y) => y.distance - v.distance);
          return m[0] ? m[0].id : null;
        }
        function zs({ pageBorderBox: n, draggable: i, droppables: c }) {
          const f = ct(c).filter((m) => {
            if (!m.isEnabled) return !1;
            const v = m.subject.active;
            if (!v || !wa(n, v)) return !1;
            if (xa(v)(n.center)) return !0;
            const y = m.axis,
              x = v.center[y.crossAxisLine],
              S = n[y.crossAxisStart],
              k = n[y.crossAxisEnd],
              P = ht(v[y.crossAxisStart], v[y.crossAxisEnd]),
              w = P(S),
              E = P(k);
            return !w && !E ? !0 : w ? S < x : k > x;
          });
          return f.length
            ? f.length === 1
              ? f[0].descriptor.id
              : Sa({ pageBorderBox: n, draggable: i, candidates: f })
            : null;
        }
        const Ri = (n, i) => (0, D.l)(t(n, i));
        var Bi = (n, i) => {
          const c = n.frame;
          return c ? Ri(i, c.scroll.diff.value) : i;
        };
        function Lr({ displaced: n, id: i }) {
          return !!(n.visible[i] || n.invisible[i]);
        }
        function ka({ draggable: n, closest: i, inHomeList: c }) {
          return i
            ? c && i.descriptor.index > n.descriptor.index
              ? i.descriptor.index - 1
              : i.descriptor.index
            : null;
        }
        var za = ({
          pageBorderBoxWithDroppableScroll: n,
          draggable: i,
          destination: c,
          insideDestination: f,
          last: m,
          viewport: v,
          afterCritical: y,
        }) => {
          const x = c.axis,
            S = Un(c.axis, i.displaceBy),
            k = S.value,
            P = n[x.start],
            w = n[x.end],
            j =
              sn(i, f).find((J) => {
                const W = J.descriptor.id,
                  te = J.page.borderBox.center[x.line],
                  oe = Jt(W, y),
                  me = Lr({ displaced: m, id: W });
                return oe
                  ? me
                    ? w <= te
                    : P < te - k
                  : me
                    ? w <= te + k
                    : P < te;
              }) || null,
            M = ka({ draggable: i, closest: j, inHomeList: bn(i, c) });
          return rr({
            draggable: i,
            insideDestination: f,
            destination: c,
            viewport: v,
            last: m,
            displacedBy: S,
            index: M,
          });
        };
        const Da = 4;
        var Zi = ({
            draggable: n,
            pageBorderBoxWithDroppableScroll: i,
            previousImpact: c,
            destination: f,
            insideDestination: m,
            afterCritical: v,
          }) => {
            if (!f.isCombineEnabled) return null;
            const y = f.axis,
              x = Un(f.axis, n.displaceBy),
              S = x.value,
              k = i[y.start],
              P = i[y.end],
              E = sn(n, m).find((M) => {
                const J = M.descriptor.id,
                  W = M.page.borderBox,
                  oe = W[y.size] / Da,
                  me = Jt(J, v),
                  ce = Lr({ displaced: c.displaced, id: J });
                return me
                  ? ce
                    ? P > W[y.start] + oe && P < W[y.end] - oe
                    : k > W[y.start] - S + oe && k < W[y.end] - S - oe
                  : ce
                    ? P > W[y.start] + S + oe && P < W[y.end] + S - oe
                    : k > W[y.start] + oe && k < W[y.end] - oe;
              });
            return E
              ? {
                  displacedBy: x,
                  displaced: c.displaced,
                  at: {
                    type: "COMBINE",
                    combine: {
                      draggableId: E.descriptor.id,
                      droppableId: f.descriptor.id,
                    },
                  },
                }
              : null;
          },
          Fi = ({
            pageOffset: n,
            draggable: i,
            draggables: c,
            droppables: f,
            previousImpact: m,
            viewport: v,
            afterCritical: y,
          }) => {
            const x = Ri(i.page.borderBox, n),
              S = zs({ pageBorderBox: x, draggable: i, droppables: f });
            if (!S) return ta;
            const k = f[S],
              P = cn(k.descriptor.id, c),
              w = Bi(k, x);
            return (
              Zi({
                pageBorderBoxWithDroppableScroll: w,
                draggable: i,
                previousImpact: m,
                destination: k,
                insideDestination: P,
                afterCritical: y,
              }) ||
              za({
                pageBorderBoxWithDroppableScroll: w,
                draggable: i,
                destination: k,
                insideDestination: P,
                last: m.displaced,
                viewport: v,
                afterCritical: y,
              })
            );
          },
          Mr = (n, i) => ({ ...n, [i.descriptor.id]: i });
        const Li = ({ previousImpact: n, impact: i, droppables: c }) => {
          const f = yt(n),
            m = yt(i);
          if (!f || f === m) return c;
          const v = c[f];
          if (!v.subject.withPlaceholder) return c;
          const y = Is(v);
          return Mr(c, y);
        };
        var Ds = ({
            draggable: n,
            draggables: i,
            droppables: c,
            previousImpact: f,
            impact: m,
          }) => {
            const v = Li({ previousImpact: f, impact: m, droppables: c }),
              y = yt(m);
            if (!y) return v;
            const x = c[y];
            if (bn(n, x) || x.subject.withPlaceholder) return v;
            const S = Ia(x, n, i);
            return Mr(v, S);
          },
          Nn = ({
            state: n,
            clientSelection: i,
            dimensions: c,
            viewport: f,
            impact: m,
            scrollJumpRequest: v,
          }) => {
            const y = f || n.viewport,
              x = c || n.dimensions,
              S = i || n.current.client.selection,
              k = ot(S, n.initial.client.selection),
              P = {
                offset: k,
                selection: S,
                borderBoxCenter: Be(n.initial.client.borderBoxCenter, k),
              },
              w = {
                selection: Be(P.selection, y.scroll.current),
                borderBoxCenter: Be(P.borderBoxCenter, y.scroll.current),
                offset: Be(P.offset, y.scroll.diff.value),
              },
              E = { client: P, page: w };
            if (n.phase === "COLLECTING")
              return { ...n, dimensions: x, viewport: y, current: E };
            const j = x.draggables[n.critical.draggable.id],
              M =
                m ||
                Fi({
                  pageOffset: w.offset,
                  draggable: j,
                  draggables: x.draggables,
                  droppables: x.droppables,
                  previousImpact: n.impact,
                  viewport: y,
                  afterCritical: n.afterCritical,
                }),
              J = Ds({
                draggable: j,
                impact: M,
                previousImpact: n.impact,
                draggables: x.draggables,
                droppables: x.droppables,
              });
            return {
              ...n,
              current: E,
              dimensions: { draggables: x.draggables, droppables: J },
              impact: M,
              viewport: y,
              scrollJumpRequest: v || null,
              forceShouldAnimate: v ? !1 : null,
            };
          };
        function Es(n, i) {
          return n.map((c) => i[c]);
        }
        var Mi = ({
            impact: n,
            viewport: i,
            draggables: c,
            destination: f,
            forceShouldAnimate: m,
          }) => {
            const v = n.displaced,
              y = Es(v.all, c),
              x = $n({
                afterDragging: y,
                destination: f,
                displacedBy: n.displacedBy,
                viewport: i.frame,
                forceShouldAnimate: m,
                last: v,
              });
            return { ...n, displaced: x };
          },
          An = ({
            impact: n,
            draggable: i,
            droppable: c,
            draggables: f,
            viewport: m,
            afterCritical: v,
          }) => {
            const y = Rr({
              impact: n,
              draggable: i,
              draggables: f,
              droppable: c,
              afterCritical: v,
            });
            return or({ pageBorderBoxCenter: y, draggable: i, viewport: m });
          },
          Gr = ({ state: n, dimensions: i, viewport: c }) => {
            n.movementMode !== "SNAP" && G(!1);
            const f = n.impact,
              m = c || n.viewport,
              v = i || n.dimensions,
              { draggables: y, droppables: x } = v,
              S = y[n.critical.draggable.id],
              k = yt(f);
            k || G(!1);
            const P = x[k],
              w = Mi({ impact: f, viewport: m, destination: P, draggables: y }),
              E = An({
                impact: w,
                draggable: S,
                droppable: P,
                draggables: y,
                viewport: m,
                afterCritical: n.afterCritical,
              });
            return Nn({
              impact: w,
              clientSelection: E,
              state: n,
              dimensions: v,
              viewport: m,
            });
          },
          ar = (n) => ({ index: n.index, droppableId: n.droppableId }),
          jn = ({ draggable: n, home: i, draggables: c, viewport: f }) => {
            const m = Un(i.axis, n.displaceBy),
              v = cn(i.descriptor.id, c),
              y = v.indexOf(n);
            y === -1 && G(!1);
            const x = v.slice(y + 1),
              S = x.reduce((E, j) => ((E[j.descriptor.id] = !0), E), {}),
              k = {
                inVirtualList: i.descriptor.mode === "virtual",
                displacedBy: m,
                effected: S,
              };
            return {
              impact: {
                displaced: $n({
                  afterDragging: x,
                  destination: i,
                  displacedBy: m,
                  last: null,
                  viewport: f.frame,
                  forceShouldAnimate: !1,
                }),
                displacedBy: m,
                at: { type: "REORDER", destination: ar(n.descriptor) },
              },
              afterCritical: k,
            };
          },
          Ps = (n, i) => ({
            draggables: n.draggables,
            droppables: Mr(n.droppables, i),
          });
        const Tn = (n) => {},
          In = (n) => {};
        var Os = ({ draggable: n, offset: i, initialWindowScroll: c }) => {
            const f = (0, D.cY)(n.client, i),
              m = (0, D.SQ)(f, c);
            return {
              ...n,
              placeholder: { ...n.placeholder, client: f },
              client: f,
              page: m,
            };
          },
          Us = (n) => {
            const i = n.frame;
            return i || G(!1), i;
          },
          Ns = ({ additions: n, updatedDroppables: i, viewport: c }) => {
            const f = c.scroll.diff.value;
            return n.map((m) => {
              const v = m.descriptor.droppableId,
                y = i[v],
                S = Us(y).scroll.diff.value,
                k = Be(f, S);
              return Os({
                draggable: m,
                offset: k,
                initialWindowScroll: c.scroll.initial,
              });
            });
          };
        const As = "Processing dynamic changes";
        var Ea = ({ state: n, published: i }) => {
          Tn();
          const c = i.modified.map((te) => {
              const oe = n.dimensions.droppables[te.droppableId];
              return Oe(oe, te.scroll);
            }),
            f = { ...n.dimensions.droppables, ...at(c) },
            m = Ye(
              Ns({
                additions: i.additions,
                updatedDroppables: f,
                viewport: n.viewport,
              }),
            ),
            v = { ...n.dimensions.draggables, ...m };
          i.removals.forEach((te) => {
            delete v[te];
          });
          const y = { droppables: f, draggables: v },
            x = yt(n.impact),
            S = x ? y.droppables[x] : null,
            k = y.draggables[n.critical.draggable.id],
            P = y.droppables[n.critical.droppable.id],
            { impact: w, afterCritical: E } = jn({
              draggable: k,
              home: P,
              draggables: v,
              viewport: n.viewport,
            }),
            j = S && S.isCombineEnabled ? n.impact : w,
            M = Fi({
              pageOffset: n.current.page.offset,
              draggable: y.draggables[n.critical.draggable.id],
              draggables: y.draggables,
              droppables: y.droppables,
              previousImpact: j,
              viewport: n.viewport,
              afterCritical: E,
            });
          In(As);
          const J = {
            ...n,
            phase: "DRAGGING",
            impact: M,
            onLiftImpact: w,
            dimensions: y,
            afterCritical: E,
            forceShouldAnimate: !1,
          };
          return n.phase === "COLLECTING"
            ? J
            : { ...J, phase: "DROP_PENDING", reason: n.reason, isWaiting: !1 };
        };
        const cr = (n) => n.movementMode === "SNAP",
          sr = (n, i, c) => {
            const f = Ps(n.dimensions, i);
            return !cr(n) || c
              ? Nn({ state: n, dimensions: f })
              : Gr({ state: n, dimensions: f });
          };
        function Gi(n) {
          return n.isDragging && n.movementMode === "SNAP"
            ? { ...n, scrollJumpRequest: null }
            : n;
        }
        const Pa = { phase: "IDLE", completed: null, shouldFlush: !1 };
        var Oa = (n = Pa, i) => {
          if (i.type === "FLUSH") return { ...Pa, shouldFlush: !0 };
          if (i.type === "INITIAL_PUBLISH") {
            n.phase !== "IDLE" && G(!1);
            const {
                critical: c,
                clientSelection: f,
                viewport: m,
                dimensions: v,
                movementMode: y,
              } = i.payload,
              x = v.draggables[c.draggable.id],
              S = v.droppables[c.droppable.id],
              k = {
                selection: f,
                borderBoxCenter: x.client.borderBox.center,
                offset: Ge,
              },
              P = {
                client: k,
                page: {
                  selection: Be(k.selection, m.scroll.initial),
                  borderBoxCenter: Be(k.selection, m.scroll.initial),
                  offset: Be(k.selection, m.scroll.diff.value),
                },
              },
              w = ct(v.droppables).every((J) => !J.isFixedOnPage),
              { impact: E, afterCritical: j } = jn({
                draggable: x,
                home: S,
                draggables: v.draggables,
                viewport: m,
              });
            return {
              phase: "DRAGGING",
              isDragging: !0,
              critical: c,
              movementMode: y,
              dimensions: v,
              initial: P,
              current: P,
              isWindowScrollAllowed: w,
              impact: E,
              afterCritical: j,
              onLiftImpact: E,
              viewport: m,
              scrollJumpRequest: null,
              forceShouldAnimate: null,
            };
          }
          if (i.type === "COLLECTION_STARTING")
            return n.phase === "COLLECTING" || n.phase === "DROP_PENDING"
              ? n
              : (n.phase !== "DRAGGING" && G(!1),
                { ...n, phase: "COLLECTING" });
          if (i.type === "PUBLISH_WHILE_DRAGGING")
            return (
              n.phase === "COLLECTING" || n.phase === "DROP_PENDING" || G(!1),
              Ea({ state: n, published: i.payload })
            );
          if (i.type === "MOVE") {
            if (n.phase === "DROP_PENDING") return n;
            _n(n) || G(!1);
            const { client: c } = i.payload;
            return lt(c, n.current.client.selection)
              ? n
              : Nn({
                  state: n,
                  clientSelection: c,
                  impact: cr(n) ? n.impact : null,
                });
          }
          if (i.type === "UPDATE_DROPPABLE_SCROLL") {
            if (n.phase === "DROP_PENDING" || n.phase === "COLLECTING")
              return Gi(n);
            _n(n) || G(!1);
            const { id: c, newScroll: f } = i.payload,
              m = n.dimensions.droppables[c];
            if (!m) return n;
            const v = Oe(m, f);
            return sr(n, v, !1);
          }
          if (i.type === "UPDATE_DROPPABLE_IS_ENABLED") {
            if (n.phase === "DROP_PENDING") return n;
            _n(n) || G(!1);
            const { id: c, isEnabled: f } = i.payload,
              m = n.dimensions.droppables[c];
            m || G(!1), m.isEnabled === f && G(!1);
            const v = { ...m, isEnabled: f };
            return sr(n, v, !0);
          }
          if (i.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
            if (n.phase === "DROP_PENDING") return n;
            _n(n) || G(!1);
            const { id: c, isCombineEnabled: f } = i.payload,
              m = n.dimensions.droppables[c];
            m || G(!1), m.isCombineEnabled === f && G(!1);
            const v = { ...m, isCombineEnabled: f };
            return sr(n, v, !0);
          }
          if (i.type === "MOVE_BY_WINDOW_SCROLL") {
            if (n.phase === "DROP_PENDING" || n.phase === "DROP_ANIMATING")
              return n;
            _n(n) || G(!1), n.isWindowScrollAllowed || G(!1);
            const c = i.payload.newScroll;
            if (lt(n.viewport.scroll.current, c)) return Gi(n);
            const f = ji(n.viewport, c);
            return cr(n)
              ? Gr({ state: n, viewport: f })
              : Nn({ state: n, viewport: f });
          }
          if (i.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
            if (!_n(n)) return n;
            const c = i.payload.maxScroll;
            if (lt(c, n.viewport.scroll.max)) return n;
            const f = {
              ...n.viewport,
              scroll: { ...n.viewport.scroll, max: c },
            };
            return { ...n, viewport: f };
          }
          if (
            i.type === "MOVE_UP" ||
            i.type === "MOVE_DOWN" ||
            i.type === "MOVE_LEFT" ||
            i.type === "MOVE_RIGHT"
          ) {
            if (n.phase === "COLLECTING" || n.phase === "DROP_PENDING")
              return n;
            n.phase !== "DRAGGING" && G(!1);
            const c = ks({ state: n, type: i.type });
            return c
              ? Nn({
                  state: n,
                  impact: c.impact,
                  clientSelection: c.clientSelection,
                  scrollJumpRequest: c.scrollJumpRequest,
                })
              : n;
          }
          if (i.type === "DROP_PENDING") {
            const c = i.payload.reason;
            return (
              n.phase !== "COLLECTING" && G(!1),
              { ...n, phase: "DROP_PENDING", isWaiting: !0, reason: c }
            );
          }
          if (i.type === "DROP_ANIMATE") {
            const {
              completed: c,
              dropDuration: f,
              newHomeClientOffset: m,
            } = i.payload;
            return (
              n.phase === "DRAGGING" || n.phase === "DROP_PENDING" || G(!1),
              {
                phase: "DROP_ANIMATING",
                completed: c,
                dropDuration: f,
                newHomeClientOffset: m,
                dimensions: n.dimensions,
              }
            );
          }
          if (i.type === "DROP_COMPLETE") {
            const { completed: c } = i.payload;
            return { phase: "IDLE", completed: c, shouldFlush: !1 };
          }
          return n;
        };
        const Ua = (n) => ({ type: "BEFORE_INITIAL_CAPTURE", payload: n }),
          Tt = (n) => ({ type: "LIFT", payload: n }),
          Na = (n) => ({ type: "INITIAL_PUBLISH", payload: n }),
          Aa = (n) => ({ type: "PUBLISH_WHILE_DRAGGING", payload: n }),
          ja = () => ({ type: "COLLECTION_STARTING", payload: null }),
          Wi = (n) => ({ type: "UPDATE_DROPPABLE_SCROLL", payload: n }),
          Ta = (n) => ({ type: "UPDATE_DROPPABLE_IS_ENABLED", payload: n }),
          Ca = (n) => ({
            type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
            payload: n,
          }),
          Ji = (n) => ({ type: "MOVE", payload: n }),
          Ra = (n) => ({ type: "MOVE_BY_WINDOW_SCROLL", payload: n }),
          Ba = (n) => ({ type: "UPDATE_VIEWPORT_MAX_SCROLL", payload: n }),
          Za = () => ({ type: "MOVE_UP", payload: null }),
          Fa = () => ({ type: "MOVE_DOWN", payload: null }),
          La = () => ({ type: "MOVE_RIGHT", payload: null }),
          Ma = () => ({ type: "MOVE_LEFT", payload: null }),
          Wr = () => ({ type: "FLUSH", payload: null }),
          Ga = (n) => ({ type: "DROP_ANIMATE", payload: n }),
          Jr = (n) => ({ type: "DROP_COMPLETE", payload: n }),
          Vi = (n) => ({ type: "DROP", payload: n }),
          Wa = (n) => ({ type: "DROP_PENDING", payload: n }),
          Ja = () => ({ type: "DROP_ANIMATION_FINISHED", payload: null });
        function js(n) {
          if (n.length <= 1) return;
          const i = n.map((m) => m.descriptor.index),
            c = {};
          for (let m = 1; m < i.length; m++) {
            const v = i[m],
              y = i[m - 1];
            v !== y + 1 && (c[v] = !0);
          }
          if (!Object.keys(c).length) return;
          const f = i
            .map((m) => (!!c[m] ? `[\u{1F525}${m}]` : `${m}`))
            .join(", ");
        }
        function Ts(n, i) {}
        var Va =
            (n) =>
            ({ getState: i, dispatch: c }) =>
            (f) =>
            (m) => {
              if (m.type !== "LIFT") {
                f(m);
                return;
              }
              const { id: v, clientSelection: y, movementMode: x } = m.payload,
                S = i();
              S.phase === "DROP_ANIMATING" && c(Jr({ completed: S.completed })),
                i().phase !== "IDLE" && G(!1),
                c(Wr()),
                c(Ua({ draggableId: v, movementMode: x }));
              const P = {
                  draggableId: v,
                  scrollOptions: { shouldPublishImmediately: x === "SNAP" },
                },
                {
                  critical: w,
                  dimensions: E,
                  viewport: j,
                } = n.startPublishing(P);
              c(
                Na({
                  critical: w,
                  dimensions: E,
                  clientSelection: y,
                  movementMode: x,
                  viewport: j,
                }),
              );
            },
          Ka = (n) => () => (i) => (c) => {
            c.type === "INITIAL_PUBLISH" && n.dragging(),
              c.type === "DROP_ANIMATE" &&
                n.dropping(c.payload.completed.result.reason),
              (c.type === "FLUSH" || c.type === "DROP_COMPLETE") && n.resting(),
              i(c);
          };
        const Vr = {
            outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
            drop: "cubic-bezier(.2,1,.1,1)",
          },
          Cn = { opacity: { drop: 0, combining: 0.7 }, scale: { drop: 0.75 } },
          Ha = { outOfTheWay: 0.2, minDropTime: 0.33, maxDropTime: 0.55 },
          un = `${Ha.outOfTheWay}s ${Vr.outOfTheWay}`,
          Rn = {
            fluid: `opacity ${un}`,
            snap: `transform ${un}, opacity ${un}`,
            drop: (n) => {
              const i = `${n}s ${Vr.drop}`;
              return `transform ${i}, opacity ${i}`;
            },
            outOfTheWay: `transform ${un}`,
            placeholder: `height ${un}, width ${un}, margin ${un}`,
          },
          Ki = (n) => (lt(n, Ge) ? void 0 : `translate(${n.x}px, ${n.y}px)`),
          Kr = {
            moveTo: Ki,
            drop: (n, i) => {
              const c = Ki(n);
              if (c) return i ? `${c} scale(${Cn.scale.drop})` : c;
            },
          },
          { minDropTime: Hr, maxDropTime: Hi } = Ha,
          qa = Hi - Hr,
          Xa = 1500,
          Cs = 0.6;
        var Rs = ({ current: n, destination: i, reason: c }) => {
            const f = Z(n, i);
            if (f <= 0) return Hr;
            if (f >= Xa) return Hi;
            const m = f / Xa,
              v = Hr + qa * m,
              y = c === "CANCEL" ? v * Cs : v;
            return Number(y.toFixed(2));
          },
          Bs = ({
            impact: n,
            draggable: i,
            dimensions: c,
            viewport: f,
            afterCritical: m,
          }) => {
            const { draggables: v, droppables: y } = c,
              x = yt(n),
              S = x ? y[x] : null,
              k = y[i.descriptor.droppableId],
              P = An({
                impact: n,
                draggable: i,
                draggables: v,
                afterCritical: m,
                droppable: S || k,
                viewport: f,
              });
            return ot(P, i.client.borderBox.center);
          },
          Zs = ({
            draggables: n,
            reason: i,
            lastImpact: c,
            home: f,
            viewport: m,
            onLiftImpact: v,
          }) =>
            !c.at || i !== "DROP"
              ? {
                  impact: Mi({
                    draggables: n,
                    impact: v,
                    destination: f,
                    viewport: m,
                    forceShouldAnimate: !0,
                  }),
                  didDropInsideDroppable: !1,
                }
              : c.at.type === "REORDER"
                ? { impact: c, didDropInsideDroppable: !0 }
                : {
                    impact: { ...c, displaced: On },
                    didDropInsideDroppable: !0,
                  },
          Ls =
            ({ getState: n, dispatch: i }) =>
            (c) =>
            (f) => {
              if (f.type !== "DROP") {
                c(f);
                return;
              }
              const m = n(),
                v = f.payload.reason;
              if (m.phase === "COLLECTING") {
                i(Wa({ reason: v }));
                return;
              }
              if (m.phase === "IDLE") return;
              m.phase === "DROP_PENDING" && m.isWaiting && G(!1),
                m.phase === "DRAGGING" || m.phase === "DROP_PENDING" || G(!1);
              const x = m.critical,
                S = m.dimensions,
                k = S.draggables[m.critical.draggable.id],
                { impact: P, didDropInsideDroppable: w } = Zs({
                  reason: v,
                  lastImpact: m.impact,
                  afterCritical: m.afterCritical,
                  onLiftImpact: m.onLiftImpact,
                  home: m.dimensions.droppables[m.critical.droppable.id],
                  viewport: m.viewport,
                  draggables: m.dimensions.draggables,
                }),
                E = w ? Nr(P) : null,
                j = w ? ke(P) : null,
                M = { index: x.draggable.index, droppableId: x.droppable.id },
                J = {
                  draggableId: k.descriptor.id,
                  type: k.descriptor.type,
                  source: M,
                  reason: v,
                  mode: m.movementMode,
                  destination: E,
                  combine: j,
                },
                W = Bs({
                  impact: P,
                  draggable: k,
                  dimensions: S,
                  viewport: m.viewport,
                  afterCritical: m.afterCritical,
                }),
                te = {
                  critical: m.critical,
                  afterCritical: m.afterCritical,
                  result: J,
                  impact: P,
                };
              if (!(!lt(m.current.client.offset, W) || !!J.combine)) {
                i(Jr({ completed: te }));
                return;
              }
              const me = Rs({
                current: m.current.client.offset,
                destination: W,
                reason: v,
              });
              i(
                Ga({ newHomeClientOffset: W, dropDuration: me, completed: te }),
              );
            },
          qi = () => ({ x: window.pageXOffset, y: window.pageYOffset });
        function Ms(n) {
          return {
            eventName: "scroll",
            options: { passive: !0, capture: !1 },
            fn: (i) => {
              (i.target !== window && i.target !== window.document) || n();
            },
          };
        }
        function Gs({ onWindowScroll: n }) {
          function i() {
            n(qi());
          }
          const c = (0, be.A)(i),
            f = Ms(c);
          let m = Ot;
          function v() {
            return m !== Ot;
          }
          function y() {
            v() && G(!1), (m = it(window, [f]));
          }
          function x() {
            v() || G(!1), c.cancel(), m(), (m = Ot);
          }
          return { start: y, stop: x, isActive: v };
        }
        const Ws = (n) =>
          n.type === "DROP_COMPLETE" ||
          n.type === "DROP_ANIMATE" ||
          n.type === "FLUSH";
        var Js = (n) => {
            const i = Gs({
              onWindowScroll: (c) => {
                n.dispatch(Ra({ newScroll: c }));
              },
            });
            return (c) => (f) => {
              !i.isActive() && f.type === "INITIAL_PUBLISH" && i.start(),
                i.isActive() && Ws(f) && i.stop(),
                c(f);
            };
          },
          Vs = (n) => {
            let i = !1,
              c = !1;
            const f = setTimeout(() => {
                c = !0;
              }),
              m = (v) => {
                i || c || ((i = !0), n(v), clearTimeout(f));
              };
            return (m.wasCalled = () => i), m;
          },
          Ya = () => {
            const n = [],
              i = (m) => {
                const v = n.findIndex((x) => x.timerId === m);
                v === -1 && G(!1);
                const [y] = n.splice(v, 1);
                y.callback();
              };
            return {
              add: (m) => {
                const v = setTimeout(() => i(v)),
                  y = { timerId: v, callback: m };
                n.push(y);
              },
              flush: () => {
                if (!n.length) return;
                const m = [...n];
                (n.length = 0),
                  m.forEach((v) => {
                    clearTimeout(v.timerId), v.callback();
                  });
              },
            };
          };
        const Qa = (n, i) =>
            n == null && i == null
              ? !0
              : n == null || i == null
                ? !1
                : n.droppableId === i.droppableId && n.index === i.index,
          Ks = (n, i) =>
            n == null && i == null
              ? !0
              : n == null || i == null
                ? !1
                : n.draggableId === i.draggableId &&
                  n.droppableId === i.droppableId,
          Hs = (n, i) => {
            if (n === i) return !0;
            const c =
                n.draggable.id === i.draggable.id &&
                n.draggable.droppableId === i.draggable.droppableId &&
                n.draggable.type === i.draggable.type &&
                n.draggable.index === i.draggable.index,
              f =
                n.droppable.id === i.droppable.id &&
                n.droppable.type === i.droppable.type;
            return c && f;
          },
          Bn = (n, i) => {
            Tn(), i(), In();
          },
          qr = (n, i) => ({
            draggableId: n.draggable.id,
            type: n.droppable.type,
            source: { droppableId: n.droppable.id, index: n.draggable.index },
            mode: i,
          });
        function ln(n, i, c, f) {
          if (!n) {
            c(f(i));
            return;
          }
          const m = Vs(c);
          n(i, { announce: m }), m.wasCalled() || c(f(i));
        }
        var Vt = (n, i) => {
            const c = Ya();
            let f = null;
            const m = (w, E) => {
                f && G(!1),
                  Bn("onBeforeCapture", () => {
                    const j = n().onBeforeCapture;
                    j && j({ draggableId: w, mode: E });
                  });
              },
              v = (w, E) => {
                f && G(!1),
                  Bn("onBeforeDragStart", () => {
                    const j = n().onBeforeDragStart;
                    j && j(qr(w, E));
                  });
              },
              y = (w, E) => {
                f && G(!1);
                const j = qr(w, E);
                (f = {
                  mode: E,
                  lastCritical: w,
                  lastLocation: j.source,
                  lastCombine: null,
                }),
                  c.add(() => {
                    Bn("onDragStart", () =>
                      ln(n().onDragStart, j, i, jt.onDragStart),
                    );
                  });
              },
              x = (w, E) => {
                const j = Nr(E),
                  M = ke(E);
                f || G(!1);
                const J = !Hs(w, f.lastCritical);
                J && (f.lastCritical = w);
                const W = !Qa(f.lastLocation, j);
                W && (f.lastLocation = j);
                const te = !Ks(f.lastCombine, M);
                if ((te && (f.lastCombine = M), !J && !W && !te)) return;
                const oe = { ...qr(w, f.mode), combine: M, destination: j };
                c.add(() => {
                  Bn("onDragUpdate", () =>
                    ln(n().onDragUpdate, oe, i, jt.onDragUpdate),
                  );
                });
              },
              S = () => {
                f || G(!1), c.flush();
              },
              k = (w) => {
                f || G(!1),
                  (f = null),
                  Bn("onDragEnd", () => ln(n().onDragEnd, w, i, jt.onDragEnd));
              };
            return {
              beforeCapture: m,
              beforeStart: v,
              start: y,
              update: x,
              flush: S,
              drop: k,
              abort: () => {
                if (!f) return;
                const w = {
                  ...qr(f.lastCritical, f.mode),
                  combine: null,
                  destination: null,
                  reason: "CANCEL",
                };
                k(w);
              },
            };
          },
          Zn = (n, i) => {
            const c = Vt(n, i);
            return (f) => (m) => (v) => {
              if (v.type === "BEFORE_INITIAL_CAPTURE") {
                c.beforeCapture(v.payload.draggableId, v.payload.movementMode);
                return;
              }
              if (v.type === "INITIAL_PUBLISH") {
                const x = v.payload.critical;
                c.beforeStart(x, v.payload.movementMode),
                  m(v),
                  c.start(x, v.payload.movementMode);
                return;
              }
              if (v.type === "DROP_COMPLETE") {
                const x = v.payload.completed.result;
                c.flush(), m(v), c.drop(x);
                return;
              }
              if ((m(v), v.type === "FLUSH")) {
                c.abort();
                return;
              }
              const y = f.getState();
              y.phase === "DRAGGING" && c.update(y.critical, y.impact);
            };
          },
          qs = (n) => (i) => (c) => {
            if (c.type !== "DROP_ANIMATION_FINISHED") {
              i(c);
              return;
            }
            const f = n.getState();
            f.phase !== "DROP_ANIMATING" && G(!1),
              n.dispatch(Jr({ completed: f.completed }));
          },
          Xs = (n) => {
            let i = null,
              c = null;
            function f() {
              c && (cancelAnimationFrame(c), (c = null)),
                i && (i(), (i = null));
            }
            return (m) => (v) => {
              if (
                ((v.type === "FLUSH" ||
                  v.type === "DROP_COMPLETE" ||
                  v.type === "DROP_ANIMATION_FINISHED") &&
                  f(),
                m(v),
                v.type !== "DROP_ANIMATE")
              )
                return;
              const y = {
                eventName: "scroll",
                options: { capture: !0, passive: !1, once: !0 },
                fn: function () {
                  n.getState().phase === "DROP_ANIMATING" && n.dispatch(Ja());
                },
              };
              c = requestAnimationFrame(() => {
                (c = null), (i = it(window, [y]));
              });
            };
          },
          Ys = (n) => () => (i) => (c) => {
            (c.type === "DROP_COMPLETE" ||
              c.type === "FLUSH" ||
              c.type === "DROP_ANIMATE") &&
              n.stopPublishing(),
              i(c);
          },
          Xr = (n) => {
            let i = !1;
            return () => (c) => (f) => {
              if (f.type === "INITIAL_PUBLISH") {
                (i = !0),
                  n.tryRecordFocus(f.payload.critical.draggable.id),
                  c(f),
                  n.tryRestoreFocusRecorded();
                return;
              }
              if ((c(f), !!i)) {
                if (f.type === "FLUSH") {
                  (i = !1), n.tryRestoreFocusRecorded();
                  return;
                }
                if (f.type === "DROP_COMPLETE") {
                  i = !1;
                  const m = f.payload.completed.result;
                  m.combine &&
                    n.tryShiftRecord(m.draggableId, m.combine.draggableId),
                    n.tryRestoreFocusRecorded();
                }
              }
            };
          };
        const Qs = (n) =>
          n.type === "DROP_COMPLETE" ||
          n.type === "DROP_ANIMATE" ||
          n.type === "FLUSH";
        var eu = (n) => (i) => (c) => (f) => {
            if (Qs(f)) {
              n.stop(), c(f);
              return;
            }
            if (f.type === "INITIAL_PUBLISH") {
              c(f);
              const m = i.getState();
              m.phase !== "DRAGGING" && G(!1), n.start(m);
              return;
            }
            c(f), n.scroll(i.getState());
          },
          Xi = (n) => (i) => (c) => {
            if ((i(c), c.type !== "PUBLISH_WHILE_DRAGGING")) return;
            const f = n.getState();
            f.phase === "DROP_PENDING" &&
              (f.isWaiting || n.dispatch(Vi({ reason: f.reason })));
          };
        const ur = T.Zz;
        var Yi = ({
          dimensionMarshal: n,
          focusMarshal: i,
          styleMarshal: c,
          getResponders: f,
          announce: m,
          autoScroller: v,
        }) =>
          (0, T.y$)(
            Oa,
            ur(
              (0, T.Tw)(
                Ka(c),
                Ys(n),
                Va(n),
                Ls,
                qs,
                Xs,
                Xi,
                eu(v),
                Js,
                Xr(i),
                Zn(f, m),
              ),
            ),
          );
        const Yr = () => ({ additions: {}, removals: {}, modified: {} });
        function ec({ registry: n, callbacks: i }) {
          let c = Yr(),
            f = null;
          const m = () => {
            f ||
              (i.collectionStarting(),
              (f = requestAnimationFrame(() => {
                (f = null), Tn();
                const { additions: S, removals: k, modified: P } = c,
                  w = Object.keys(S)
                    .map((M) => n.draggable.getById(M).getDimension(Ge))
                    .sort((M, J) => M.descriptor.index - J.descriptor.index),
                  E = Object.keys(P).map((M) => {
                    const W = n.droppable
                      .getById(M)
                      .callbacks.getScrollWhileDragging();
                    return { droppableId: M, scroll: W };
                  }),
                  j = { additions: w, removals: Object.keys(k), modified: E };
                (c = Yr()), In(), i.publish(j);
              })));
          };
          return {
            add: (S) => {
              const k = S.descriptor.id;
              (c.additions[k] = S),
                (c.modified[S.descriptor.droppableId] = !0),
                c.removals[k] && delete c.removals[k],
                m();
            },
            remove: (S) => {
              const k = S.descriptor;
              (c.removals[k.id] = !0),
                (c.modified[k.droppableId] = !0),
                c.additions[k.id] && delete c.additions[k.id],
                m();
            },
            stop: () => {
              f && (cancelAnimationFrame(f), (f = null), (c = Yr()));
            },
          };
        }
        var Qi = ({ scrollHeight: n, scrollWidth: i, height: c, width: f }) => {
            const m = ot({ x: i, y: n }, { x: f, y: c });
            return { x: Math.max(0, m.x), y: Math.max(0, m.y) };
          },
          eo = () => {
            const n = document.documentElement;
            return n || G(!1), n;
          },
          to = () => {
            const n = eo();
            return Qi({
              scrollHeight: n.scrollHeight,
              scrollWidth: n.scrollWidth,
              width: n.clientWidth,
              height: n.clientHeight,
            });
          },
          tc = () => {
            const n = qi(),
              i = to(),
              c = n.y,
              f = n.x,
              m = eo(),
              v = m.clientWidth,
              y = m.clientHeight,
              x = f + v,
              S = c + y;
            return {
              frame: (0, D.l)({ top: c, left: f, right: x, bottom: S }),
              scroll: {
                initial: n,
                current: n,
                max: i,
                diff: { value: Ge, displacement: Ge },
              },
            };
          },
          tu = ({ critical: n, scrollOptions: i, registry: c }) => {
            Tn();
            const f = tc(),
              m = f.scroll.current,
              v = n.droppable,
              y = c.droppable
                .getAllByType(v.type)
                .map((P) => P.callbacks.getDimensionAndWatchScroll(m, i)),
              x = c.draggable
                .getAllByType(n.draggable.type)
                .map((P) => P.getDimension(m)),
              S = { draggables: Ye(x), droppables: at(y) };
            return In(), { dimensions: S, critical: n, viewport: f };
          };
        function nc(n, i, c) {
          return !(
            c.descriptor.id === i.id ||
            c.descriptor.type !== i.type ||
            n.droppable.getById(c.descriptor.droppableId).descriptor.mode !==
              "virtual"
          );
        }
        var xn = (n, i) => {
            let c = null;
            const f = ec({
                callbacks: {
                  publish: i.publishWhileDragging,
                  collectionStarting: i.collectionStarting,
                },
                registry: n,
              }),
              m = (E, j) => {
                n.droppable.exists(E) || G(!1),
                  c && i.updateDroppableIsEnabled({ id: E, isEnabled: j });
              },
              v = (E, j) => {
                c &&
                  (n.droppable.exists(E) || G(!1),
                  i.updateDroppableIsCombineEnabled({
                    id: E,
                    isCombineEnabled: j,
                  }));
              },
              y = (E, j) => {
                c &&
                  (n.droppable.exists(E) || G(!1),
                  i.updateDroppableScroll({ id: E, newScroll: j }));
              },
              x = (E, j) => {
                c && n.droppable.getById(E).callbacks.scroll(j);
              },
              S = () => {
                if (!c) return;
                f.stop();
                const E = c.critical.droppable;
                n.droppable
                  .getAllByType(E.type)
                  .forEach((j) => j.callbacks.dragStopped()),
                  c.unsubscribe(),
                  (c = null);
              },
              k = (E) => {
                c || G(!1);
                const j = c.critical.draggable;
                E.type === "ADDITION" && nc(n, j, E.value) && f.add(E.value),
                  E.type === "REMOVAL" &&
                    nc(n, j, E.value) &&
                    f.remove(E.value);
              };
            return {
              updateDroppableIsEnabled: m,
              updateDroppableIsCombineEnabled: v,
              scrollDroppable: x,
              updateDroppableScroll: y,
              startPublishing: (E) => {
                c && G(!1);
                const j = n.draggable.getById(E.draggableId),
                  M = n.droppable.getById(j.descriptor.droppableId),
                  J = { draggable: j.descriptor, droppable: M.descriptor },
                  W = n.subscribe(k);
                return (
                  (c = { critical: J, unsubscribe: W }),
                  tu({
                    critical: J,
                    registry: n,
                    scrollOptions: E.scrollOptions,
                  })
                );
              },
              stopPublishing: S,
            };
          },
          no = (n, i) =>
            n.phase === "IDLE"
              ? !0
              : n.phase !== "DROP_ANIMATING" ||
                  n.completed.result.draggableId === i
                ? !1
                : n.completed.result.reason === "DROP",
          rc = (n) => {
            window.scrollBy(n.x, n.y);
          };
        const ic = X((n) => ct(n).filter((i) => !(!i.isEnabled || !i.frame))),
          oc = (n, i) =>
            ic(i).find(
              (f) => (f.frame || G(!1), xa(f.frame.pageMarginBox)(n)),
            ) || null;
        var ac = ({ center: n, destination: i, droppables: c }) => {
          if (i) {
            const m = c[i];
            return m.frame ? m : null;
          }
          return oc(n, c);
        };
        const Fn = {
          startFromPercentage: 0.25,
          maxScrollAtPercentage: 0.05,
          maxPixelScroll: 28,
          ease: (n) => n ** 2,
          durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
          disabled: !1,
        };
        var nu = (n, i, c = () => Fn) => {
            const f = c(),
              m = n[i.size] * f.startFromPercentage,
              v = n[i.size] * f.maxScrollAtPercentage;
            return { startScrollingFrom: m, maxScrollValueAt: v };
          },
          cc = ({ startOfRange: n, endOfRange: i, current: c }) => {
            const f = i - n;
            return f === 0 ? 0 : (c - n) / f;
          },
          ro = 1,
          ru = (n, i, c = () => Fn) => {
            const f = c();
            if (n > i.startScrollingFrom) return 0;
            if (n <= i.maxScrollValueAt) return f.maxPixelScroll;
            if (n === i.startScrollingFrom) return ro;
            const v =
                1 -
                cc({
                  startOfRange: i.maxScrollValueAt,
                  endOfRange: i.startScrollingFrom,
                  current: n,
                }),
              y = f.maxPixelScroll * f.ease(v);
            return Math.ceil(y);
          },
          iu = (n, i, c) => {
            const f = c(),
              m = f.durationDampening.accelerateAt,
              v = f.durationDampening.stopDampeningAt,
              y = i,
              x = v,
              k = Date.now() - y;
            if (k >= v) return n;
            if (k < m) return ro;
            const P = cc({ startOfRange: m, endOfRange: x, current: k }),
              w = n * f.ease(P);
            return Math.ceil(w);
          },
          sc = ({
            distanceToEdge: n,
            thresholds: i,
            dragStartTime: c,
            shouldUseTimeDampening: f,
            getAutoScrollerOptions: m,
          }) => {
            const v = ru(n, i, m);
            return v === 0 ? 0 : f ? Math.max(iu(v, c, m), ro) : v;
          },
          uc = ({
            container: n,
            distanceToEdges: i,
            dragStartTime: c,
            axis: f,
            shouldUseTimeDampening: m,
            getAutoScrollerOptions: v,
          }) => {
            const y = nu(n, f, v);
            return i[f.end] < i[f.start]
              ? sc({
                  distanceToEdge: i[f.end],
                  thresholds: y,
                  dragStartTime: c,
                  shouldUseTimeDampening: m,
                  getAutoScrollerOptions: v,
                })
              : -1 *
                  sc({
                    distanceToEdge: i[f.start],
                    thresholds: y,
                    dragStartTime: c,
                    shouldUseTimeDampening: m,
                    getAutoScrollerOptions: v,
                  });
          },
          ou = ({ container: n, subject: i, proposedScroll: c }) => {
            const f = i.height > n.height,
              m = i.width > n.width;
            return !m && !f
              ? c
              : m && f
                ? null
                : { x: m ? 0 : c.x, y: f ? 0 : c.y };
          };
        const au = F((n) => (n === 0 ? 0 : n));
        var lc = ({
          dragStartTime: n,
          container: i,
          subject: c,
          center: f,
          shouldUseTimeDampening: m,
          getAutoScrollerOptions: v,
        }) => {
          const y = {
              top: f.y - i.top,
              right: i.right - f.x,
              bottom: i.bottom - f.y,
              left: f.x - i.left,
            },
            x = uc({
              container: i,
              distanceToEdges: y,
              dragStartTime: n,
              axis: Ar,
              shouldUseTimeDampening: m,
              getAutoScrollerOptions: v,
            }),
            S = uc({
              container: i,
              distanceToEdges: y,
              dragStartTime: n,
              axis: Pi,
              shouldUseTimeDampening: m,
              getAutoScrollerOptions: v,
            }),
            k = au({ x: S, y: x });
          if (lt(k, Ge)) return null;
          const P = ou({ container: i, subject: c, proposedScroll: k });
          return P ? (lt(P, Ge) ? null : P) : null;
        };
        const cu = F((n) => (n === 0 ? 0 : n > 0 ? 1 : -1)),
          io = (() => {
            const n = (i, c) => (i < 0 ? i : i > c ? i - c : 0);
            return ({ current: i, max: c, change: f }) => {
              const m = Be(i, f),
                v = { x: n(m.x, c.x), y: n(m.y, c.y) };
              return lt(v, Ge) ? null : v;
            };
          })(),
          dc = ({ max: n, current: i, change: c }) => {
            const f = { x: Math.max(i.x, n.x), y: Math.max(i.y, n.y) },
              m = cu(c),
              v = io({ max: f, current: i, change: m });
            return !v || (m.x !== 0 && v.x === 0) || (m.y !== 0 && v.y === 0);
          },
          oo = (n, i) =>
            dc({ current: n.scroll.current, max: n.scroll.max, change: i }),
          su = (n, i) => {
            if (!oo(n, i)) return null;
            const c = n.scroll.max,
              f = n.scroll.current;
            return io({ current: f, max: c, change: i });
          },
          ao = (n, i) => {
            const c = n.frame;
            return c
              ? dc({ current: c.scroll.current, max: c.scroll.max, change: i })
              : !1;
          },
          uu = (n, i) => {
            const c = n.frame;
            return !c || !ao(n, i)
              ? null
              : io({ current: c.scroll.current, max: c.scroll.max, change: i });
          };
        var lu = ({
            viewport: n,
            subject: i,
            center: c,
            dragStartTime: f,
            shouldUseTimeDampening: m,
            getAutoScrollerOptions: v,
          }) => {
            const y = lc({
              dragStartTime: f,
              container: n.frame,
              subject: i,
              center: c,
              shouldUseTimeDampening: m,
              getAutoScrollerOptions: v,
            });
            return y && oo(n, y) ? y : null;
          },
          du = ({
            droppable: n,
            subject: i,
            center: c,
            dragStartTime: f,
            shouldUseTimeDampening: m,
            getAutoScrollerOptions: v,
          }) => {
            const y = n.frame;
            if (!y) return null;
            const x = lc({
              dragStartTime: f,
              container: y.pageMarginBox,
              subject: i,
              center: c,
              shouldUseTimeDampening: m,
              getAutoScrollerOptions: v,
            });
            return x && ao(n, x) ? x : null;
          },
          fc = ({
            state: n,
            dragStartTime: i,
            shouldUseTimeDampening: c,
            scrollWindow: f,
            scrollDroppable: m,
            getAutoScrollerOptions: v,
          }) => {
            const y = n.current.page.borderBoxCenter,
              S =
                n.dimensions.draggables[n.critical.draggable.id].page.marginBox;
            if (n.isWindowScrollAllowed) {
              const w = n.viewport,
                E = lu({
                  dragStartTime: i,
                  viewport: w,
                  subject: S,
                  center: y,
                  shouldUseTimeDampening: c,
                  getAutoScrollerOptions: v,
                });
              if (E) {
                f(E);
                return;
              }
            }
            const k = ac({
              center: y,
              destination: yt(n.impact),
              droppables: n.dimensions.droppables,
            });
            if (!k) return;
            const P = du({
              dragStartTime: i,
              droppable: k,
              subject: S,
              center: y,
              shouldUseTimeDampening: c,
              getAutoScrollerOptions: v,
            });
            P && m(k.descriptor.id, P);
          },
          fu = ({
            scrollWindow: n,
            scrollDroppable: i,
            getAutoScrollerOptions: c = () => Fn,
          }) => {
            const f = (0, be.A)(n),
              m = (0, be.A)(i);
            let v = null;
            const y = (k) => {
              v || G(!1);
              const { shouldUseTimeDampening: P, dragStartTime: w } = v;
              fc({
                state: k,
                scrollWindow: f,
                scrollDroppable: m,
                dragStartTime: w,
                shouldUseTimeDampening: P,
                getAutoScrollerOptions: c,
              });
            };
            return {
              start: (k) => {
                Tn(), v && G(!1);
                const P = Date.now();
                let w = !1;
                const E = () => {
                  w = !0;
                };
                fc({
                  state: k,
                  dragStartTime: 0,
                  shouldUseTimeDampening: !1,
                  scrollWindow: E,
                  scrollDroppable: E,
                  getAutoScrollerOptions: c,
                }),
                  (v = { dragStartTime: P, shouldUseTimeDampening: w }),
                  In(),
                  w && y(k);
              },
              stop: () => {
                v && (f.cancel(), m.cancel(), (v = null));
              },
              scroll: y,
            };
          },
          pu = ({ move: n, scrollDroppable: i, scrollWindow: c }) => {
            const f = (x, S) => {
                const k = Be(x.current.client.selection, S);
                n({ client: k });
              },
              m = (x, S) => {
                if (!ao(x, S)) return S;
                const k = uu(x, S);
                if (!k) return i(x.descriptor.id, S), null;
                const P = ot(S, k);
                return i(x.descriptor.id, P), ot(S, P);
              },
              v = (x, S, k) => {
                if (!x || !oo(S, k)) return k;
                const P = su(S, k);
                if (!P) return c(k), null;
                const w = ot(k, P);
                return c(w), ot(k, w);
              };
            return (x) => {
              const S = x.scrollJumpRequest;
              if (!S) return;
              const k = yt(x.impact);
              k || G(!1);
              const P = m(x.dimensions.droppables[k], S);
              if (!P) return;
              const w = x.viewport,
                E = v(x.isWindowScrollAllowed, w, P);
              E && f(x, E);
            };
          },
          mu = ({
            scrollDroppable: n,
            scrollWindow: i,
            move: c,
            getAutoScrollerOptions: f,
          }) => {
            const m = fu({
                scrollWindow: i,
                scrollDroppable: n,
                getAutoScrollerOptions: f,
              }),
              v = pu({ move: c, scrollWindow: i, scrollDroppable: n });
            return {
              scroll: (S) => {
                if (!(f().disabled || S.phase !== "DRAGGING")) {
                  if (S.movementMode === "FLUID") {
                    m.scroll(S);
                    return;
                  }
                  S.scrollJumpRequest && v(S);
                }
              },
              start: m.start,
              stop: m.stop,
            };
          };
        const Ln = "data-rfd",
          Mn = (() => {
            const n = `${Ln}-drag-handle`;
            return {
              base: n,
              draggableId: `${n}-draggable-id`,
              contextId: `${n}-context-id`,
            };
          })(),
          Qr = (() => {
            const n = `${Ln}-draggable`;
            return { base: n, contextId: `${n}-context-id`, id: `${n}-id` };
          })(),
          pc = (() => {
            const n = `${Ln}-droppable`;
            return { base: n, contextId: `${n}-context-id`, id: `${n}-id` };
          })(),
          co = { contextId: `${Ln}-scroll-container-context-id` },
          mc = (n) => (i) => `[${i}="${n}"]`,
          Gn = (n, i) =>
            n
              .map((c) => {
                const f = c.styles[i];
                return f ? `${c.selector} { ${f} }` : "";
              })
              .join(" "),
          gc = "pointer-events: none;";
        var gu = (n) => {
            const i = mc(n),
              c = (() => {
                const x = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
                return {
                  selector: i(Mn.contextId),
                  styles: {
                    always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
                    resting: x,
                    dragging: gc,
                    dropAnimating: x,
                  },
                };
              })(),
              f = (() => {
                const x = `
      transition: ${Rn.outOfTheWay};
    `;
                return {
                  selector: i(Qr.contextId),
                  styles: { dragging: x, dropAnimating: x, userCancel: x },
                };
              })(),
              m = {
                selector: i(pc.contextId),
                styles: { always: "overflow-anchor: none;" },
              },
              y = [
                f,
                c,
                m,
                {
                  selector: "body",
                  styles: {
                    dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `,
                  },
                },
              ];
            return {
              always: Gn(y, "always"),
              resting: Gn(y, "resting"),
              dragging: Gn(y, "dragging"),
              dropAnimating: Gn(y, "dropAnimating"),
              userCancel: Gn(y, "userCancel"),
            };
          },
          ye =
            typeof window < "u" &&
            typeof window.document < "u" &&
            typeof window.document.createElement < "u"
              ? _.useLayoutEffect
              : _.useEffect;
        const lr = () => {
            const n = document.querySelector("head");
            return n || G(!1), n;
          },
          ei = (n) => {
            const i = document.createElement("style");
            return n && i.setAttribute("nonce", n), (i.type = "text/css"), i;
          };
        function Qe(n, i) {
          const c = (0, p.Kr)(() => gu(n), [n]),
            f = (0, _.useRef)(null),
            m = (0, _.useRef)(null),
            v = (0, p.hb)(
              X((w) => {
                const E = m.current;
                E || G(!1), (E.textContent = w);
              }),
              [],
            ),
            y = (0, p.hb)((w) => {
              const E = f.current;
              E || G(!1), (E.textContent = w);
            }, []);
          ye(() => {
            (!f.current && !m.current) || G(!1);
            const w = ei(i),
              E = ei(i);
            return (
              (f.current = w),
              (m.current = E),
              w.setAttribute(`${Ln}-always`, n),
              E.setAttribute(`${Ln}-dynamic`, n),
              lr().appendChild(w),
              lr().appendChild(E),
              y(c.always),
              v(c.resting),
              () => {
                const j = (M) => {
                  const J = M.current;
                  J || G(!1), lr().removeChild(J), (M.current = null);
                };
                j(f), j(m);
              }
            );
          }, [i, y, v, c.always, c.resting, n]);
          const x = (0, p.hb)(() => v(c.dragging), [v, c.dragging]),
            S = (0, p.hb)(
              (w) => {
                if (w === "DROP") {
                  v(c.dropAnimating);
                  return;
                }
                v(c.userCancel);
              },
              [v, c.dropAnimating, c.userCancel],
            ),
            k = (0, p.hb)(() => {
              m.current && v(c.resting);
            }, [v, c.resting]);
          return (0, p.Kr)(
            () => ({ dragging: x, dropping: S, resting: k }),
            [x, S, k],
          );
        }
        function so(n, i) {
          return Array.from(n.querySelectorAll(i));
        }
        var Wn = (n) =>
          n && n.ownerDocument && n.ownerDocument.defaultView
            ? n.ownerDocument.defaultView
            : window;
        function Jn(n) {
          return n instanceof Wn(n).HTMLElement;
        }
        function ti(n, i) {
          const c = `[${Mn.contextId}="${n}"]`,
            f = so(document, c);
          if (!f.length) return null;
          const m = f.find((v) => v.getAttribute(Mn.draggableId) === i);
          return !m || !Jn(m) ? null : m;
        }
        function uo(n) {
          const i = (0, _.useRef)({}),
            c = (0, _.useRef)(null),
            f = (0, _.useRef)(null),
            m = (0, _.useRef)(!1),
            v = (0, p.hb)(function (E, j) {
              const M = { id: E, focus: j };
              return (
                (i.current[E] = M),
                function () {
                  const W = i.current;
                  W[E] !== M && delete W[E];
                }
              );
            }, []),
            y = (0, p.hb)(
              function (E) {
                const j = ti(n, E);
                j && j !== document.activeElement && j.focus();
              },
              [n],
            ),
            x = (0, p.hb)(function (E, j) {
              c.current === E && (c.current = j);
            }, []),
            S = (0, p.hb)(
              function () {
                f.current ||
                  (m.current &&
                    (f.current = requestAnimationFrame(() => {
                      f.current = null;
                      const E = c.current;
                      E && y(E);
                    })));
              },
              [y],
            ),
            k = (0, p.hb)(function (E) {
              c.current = null;
              const j = document.activeElement;
              j && j.getAttribute(Mn.draggableId) === E && (c.current = E);
            }, []);
          return (
            ye(
              () => (
                (m.current = !0),
                function () {
                  m.current = !1;
                  const E = f.current;
                  E && cancelAnimationFrame(E);
                }
              ),
              [],
            ),
            (0, p.Kr)(
              () => ({
                register: v,
                tryRecordFocus: k,
                tryRestoreFocusRecorded: S,
                tryShiftRecord: x,
              }),
              [v, k, S, x],
            )
          );
        }
        function lo() {
          const n = { draggables: {}, droppables: {} },
            i = [];
          function c(w) {
            return (
              i.push(w),
              function () {
                const j = i.indexOf(w);
                j !== -1 && i.splice(j, 1);
              }
            );
          }
          function f(w) {
            i.length && i.forEach((E) => E(w));
          }
          function m(w) {
            return n.draggables[w] || null;
          }
          function v(w) {
            const E = m(w);
            return E || G(!1), E;
          }
          const y = {
            register: (w) => {
              (n.draggables[w.descriptor.id] = w),
                f({ type: "ADDITION", value: w });
            },
            update: (w, E) => {
              const j = n.draggables[E.descriptor.id];
              j &&
                j.uniqueId === w.uniqueId &&
                (delete n.draggables[E.descriptor.id],
                (n.draggables[w.descriptor.id] = w));
            },
            unregister: (w) => {
              const E = w.descriptor.id,
                j = m(E);
              j &&
                w.uniqueId === j.uniqueId &&
                (delete n.draggables[E],
                n.droppables[w.descriptor.droppableId] &&
                  f({ type: "REMOVAL", value: w }));
            },
            getById: v,
            findById: m,
            exists: (w) => !!m(w),
            getAllByType: (w) =>
              Object.values(n.draggables).filter(
                (E) => E.descriptor.type === w,
              ),
          };
          function x(w) {
            return n.droppables[w] || null;
          }
          function S(w) {
            const E = x(w);
            return E || G(!1), E;
          }
          const k = {
            register: (w) => {
              n.droppables[w.descriptor.id] = w;
            },
            unregister: (w) => {
              const E = x(w.descriptor.id);
              E &&
                w.uniqueId === E.uniqueId &&
                delete n.droppables[w.descriptor.id];
            },
            getById: S,
            findById: x,
            exists: (w) => !!x(w),
            getAllByType: (w) =>
              Object.values(n.droppables).filter(
                (E) => E.descriptor.type === w,
              ),
          };
          function P() {
            (n.draggables = {}), (n.droppables = {}), (i.length = 0);
          }
          return { draggable: y, droppable: k, subscribe: c, clean: P };
        }
        function fo() {
          const n = (0, p.Kr)(lo, []);
          return (
            (0, _.useEffect)(
              () =>
                function () {
                  _.version.startsWith("16") || _.version.startsWith("17")
                    ? requestAnimationFrame(n.clean)
                    : n.clean();
                },
              [n],
            ),
            n
          );
        }
        var ni = _.createContext(null),
          Vn = () => {
            const n = document.body;
            return n || G(!1), n;
          },
          hc = {
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
        const po = (n) => `rfd-announcement-${n}`;
        function yc(n) {
          const i = (0, p.Kr)(() => po(n), [n]),
            c = (0, _.useRef)(null);
          return (
            (0, _.useEffect)(
              function () {
                const v = document.createElement("div");
                return (
                  (c.current = v),
                  (v.id = i),
                  v.setAttribute("aria-live", "assertive"),
                  v.setAttribute("aria-atomic", "true"),
                  (0, Le.A)(v.style, hc),
                  Vn().appendChild(v),
                  function () {
                    setTimeout(function () {
                      const S = Vn();
                      S.contains(v) && S.removeChild(v),
                        v === c.current && (c.current = null);
                    });
                  }
                );
              },
              [i],
            ),
            (0, p.hb)((m) => {
              const v = c.current;
              if (v) {
                v.textContent = m;
                return;
              }
            }, [])
          );
        }
        let ri = 0;
        const ii = { separator: "::" };
        function mo() {
          ri = 0;
        }
        function bc(n, i = ii) {
          return (0, p.Kr)(() => `${n}${i.separator}${ri++}`, [i.separator, n]);
        }
        function $c(n, i = ii) {
          const c = _.useId();
          return (0, p.Kr)(() => `${n}${i.separator}${c}`, [i.separator, n, c]);
        }
        var oi = $c;
        function _c({ contextId: n, uniqueId: i }) {
          return `rfd-hidden-text-${n}-${i}`;
        }
        function Ic({ contextId: n, text: i }) {
          const c = oi("hidden-text", { separator: "-" }),
            f = (0, p.Kr)(() => _c({ contextId: n, uniqueId: c }), [c, n]);
          return (
            (0, _.useEffect)(
              function () {
                const v = document.createElement("div");
                return (
                  (v.id = f),
                  (v.textContent = i),
                  (v.style.display = "none"),
                  Vn().appendChild(v),
                  function () {
                    const x = Vn();
                    x.contains(v) && x.removeChild(v);
                  }
                );
              },
              [f, i],
            ),
            f
          );
        }
        var Kn = _.createContext(null),
          xc = {
            react: "^16.8.5 || ^17.0.0 || ^18.0.0",
            "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0",
          };
        const go = /(\d+)\.(\d+)\.(\d+)/,
          vo = (n) => {
            const i = go.exec(n);
            i == null && G(!1);
            const c = Number(i[1]),
              f = Number(i[2]),
              m = Number(i[3]);
            return { major: c, minor: f, patch: m, raw: n };
          },
          wc = (n, i) =>
            i.major > n.major
              ? !0
              : i.major < n.major
                ? !1
                : i.minor > n.minor
                  ? !0
                  : i.minor < n.minor
                    ? !1
                    : i.patch >= n.patch;
        var ho = (n, i) => {
          const c = vo(n),
            f = vo(i);
          wc(c, f);
        };
        const Sc = null;
        var yo = (n) => {
          const i = n.doctype;
          i && (i.name.toLowerCase(), i.publicId);
        };
        function kc(n) {}
        function Hn(n, i) {}
        function zc() {
          Hn(() => {
            ho(xc.react, _.version), yo(document);
          }, []);
        }
        function dr(n) {
          const i = (0, _.useRef)(n);
          return (
            (0, _.useEffect)(() => {
              i.current = n;
            }),
            i
          );
        }
        function bo() {
          let n = null;
          function i() {
            return !!n;
          }
          function c(y) {
            return y === n;
          }
          function f(y) {
            n && G(!1);
            const x = { abandon: y };
            return (n = x), x;
          }
          function m() {
            n || G(!1), (n = null);
          }
          function v() {
            n && (n.abandon(), m());
          }
          return {
            isClaimed: i,
            isActive: c,
            claim: f,
            release: m,
            tryAbandon: v,
          };
        }
        function wn(n) {
          return n.phase === "IDLE" || n.phase === "DROP_ANIMATING"
            ? !1
            : n.isDragging;
        }
        const $o = 9,
          _o = 13,
          fr = 27,
          ai = 32,
          Dc = 33,
          ci = 34,
          hu = 35,
          Io = 36,
          yu = 37,
          Ec = 38,
          Pc = 39,
          Oc = 40,
          Uc = { [_o]: !0, [$o]: !0 };
        var xo = (n) => {
            Uc[n.keyCode] && n.preventDefault();
          },
          pr = (() => {
            const n = "visibilitychange";
            return typeof document > "u"
              ? n
              : [n, `ms${n}`, `webkit${n}`, `moz${n}`, `o${n}`].find(
                  (f) => `on${f}` in document,
                ) || n;
          })();
        const wo = 0,
          So = 5;
        function $u(n, i) {
          return Math.abs(i.x - n.x) >= So || Math.abs(i.y - n.y) >= So;
        }
        const dt = { type: "IDLE" };
        function Nc({ cancel: n, completed: i, getPhase: c, setPhase: f }) {
          return [
            {
              eventName: "mousemove",
              fn: (m) => {
                const { button: v, clientX: y, clientY: x } = m;
                if (v !== wo) return;
                const S = { x: y, y: x },
                  k = c();
                if (k.type === "DRAGGING") {
                  m.preventDefault(), k.actions.move(S);
                  return;
                }
                k.type !== "PENDING" && G(!1);
                const P = k.point;
                if (!$u(P, S)) return;
                m.preventDefault();
                const w = k.actions.fluidLift(S);
                f({ type: "DRAGGING", actions: w });
              },
            },
            {
              eventName: "mouseup",
              fn: (m) => {
                const v = c();
                if (v.type !== "DRAGGING") {
                  n();
                  return;
                }
                m.preventDefault(),
                  v.actions.drop({ shouldBlockNextClick: !0 }),
                  i();
              },
            },
            {
              eventName: "mousedown",
              fn: (m) => {
                c().type === "DRAGGING" && m.preventDefault(), n();
              },
            },
            {
              eventName: "keydown",
              fn: (m) => {
                if (c().type === "PENDING") {
                  n();
                  return;
                }
                if (m.keyCode === fr) {
                  m.preventDefault(), n();
                  return;
                }
                xo(m);
              },
            },
            { eventName: "resize", fn: n },
            {
              eventName: "scroll",
              options: { passive: !0, capture: !1 },
              fn: () => {
                c().type === "PENDING" && n();
              },
            },
            {
              eventName: "webkitmouseforcedown",
              fn: (m) => {
                const v = c();
                if (
                  (v.type === "IDLE" && G(!1),
                  v.actions.shouldRespectForcePress())
                ) {
                  n();
                  return;
                }
                m.preventDefault();
              },
            },
            { eventName: pr, fn: n },
          ];
        }
        function Ac(n) {
          const i = (0, _.useRef)(dt),
            c = (0, _.useRef)(Ot),
            f = (0, p.Kr)(
              () => ({
                eventName: "mousedown",
                fn: function (w) {
                  if (
                    w.defaultPrevented ||
                    w.button !== wo ||
                    w.ctrlKey ||
                    w.metaKey ||
                    w.shiftKey ||
                    w.altKey
                  )
                    return;
                  const E = n.findClosestDraggableId(w);
                  if (!E) return;
                  const j = n.tryGetLock(E, y, { sourceEvent: w });
                  if (!j) return;
                  w.preventDefault();
                  const M = { x: w.clientX, y: w.clientY };
                  c.current(), k(j, M);
                },
              }),
              [n],
            ),
            m = (0, p.Kr)(
              () => ({
                eventName: "webkitmouseforcewillbegin",
                fn: (P) => {
                  if (P.defaultPrevented) return;
                  const w = n.findClosestDraggableId(P);
                  if (!w) return;
                  const E = n.findOptionsForDraggable(w);
                  E &&
                    (E.shouldRespectForcePress ||
                      (n.canGetLock(w) && P.preventDefault()));
                },
              }),
              [n],
            ),
            v = (0, p.hb)(
              function () {
                const w = { passive: !1, capture: !0 };
                c.current = it(window, [m, f], w);
              },
              [m, f],
            ),
            y = (0, p.hb)(() => {
              i.current.type !== "IDLE" && ((i.current = dt), c.current(), v());
            }, [v]),
            x = (0, p.hb)(() => {
              const P = i.current;
              y(),
                P.type === "DRAGGING" &&
                  P.actions.cancel({ shouldBlockNextClick: !0 }),
                P.type === "PENDING" && P.actions.abort();
            }, [y]),
            S = (0, p.hb)(
              function () {
                const w = { capture: !0, passive: !1 },
                  E = Nc({
                    cancel: x,
                    completed: y,
                    getPhase: () => i.current,
                    setPhase: (j) => {
                      i.current = j;
                    },
                  });
                c.current = it(window, E, w);
              },
              [x, y],
            ),
            k = (0, p.hb)(
              function (w, E) {
                i.current.type !== "IDLE" && G(!1),
                  (i.current = { type: "PENDING", point: E, actions: w }),
                  S();
              },
              [S],
            );
          ye(
            function () {
              return (
                v(),
                function () {
                  c.current();
                }
              );
            },
            [v],
          );
        }
        function jc() {}
        const Tc = { [ci]: !0, [Dc]: !0, [Io]: !0, [hu]: !0 };
        function Cc(n, i) {
          function c() {
            i(), n.cancel();
          }
          function f() {
            i(), n.drop();
          }
          return [
            {
              eventName: "keydown",
              fn: (m) => {
                if (m.keyCode === fr) {
                  m.preventDefault(), c();
                  return;
                }
                if (m.keyCode === ai) {
                  m.preventDefault(), f();
                  return;
                }
                if (m.keyCode === Oc) {
                  m.preventDefault(), n.moveDown();
                  return;
                }
                if (m.keyCode === Ec) {
                  m.preventDefault(), n.moveUp();
                  return;
                }
                if (m.keyCode === Pc) {
                  m.preventDefault(), n.moveRight();
                  return;
                }
                if (m.keyCode === yu) {
                  m.preventDefault(), n.moveLeft();
                  return;
                }
                if (Tc[m.keyCode]) {
                  m.preventDefault();
                  return;
                }
                xo(m);
              },
            },
            { eventName: "mousedown", fn: c },
            { eventName: "mouseup", fn: c },
            { eventName: "click", fn: c },
            { eventName: "touchstart", fn: c },
            { eventName: "resize", fn: c },
            { eventName: "wheel", fn: c, options: { passive: !0 } },
            { eventName: pr, fn: c },
          ];
        }
        function Rc(n) {
          const i = (0, _.useRef)(jc),
            c = (0, p.Kr)(
              () => ({
                eventName: "keydown",
                fn: function (v) {
                  if (v.defaultPrevented || v.keyCode !== ai) return;
                  const y = n.findClosestDraggableId(v);
                  if (!y) return;
                  const x = n.tryGetLock(y, P, { sourceEvent: v });
                  if (!x) return;
                  v.preventDefault();
                  let S = !0;
                  const k = x.snapLift();
                  i.current();
                  function P() {
                    S || G(!1), (S = !1), i.current(), f();
                  }
                  i.current = it(window, Cc(k, P), {
                    capture: !0,
                    passive: !1,
                  });
                },
              }),
              [n],
            ),
            f = (0, p.hb)(
              function () {
                const v = { passive: !1, capture: !0 };
                i.current = it(window, [c], v);
              },
              [c],
            );
          ye(
            function () {
              return (
                f(),
                function () {
                  i.current();
                }
              );
            },
            [f],
          );
        }
        const si = { type: "IDLE" },
          Bc = 120,
          Zc = 0.15;
        function Fc({ cancel: n, getPhase: i }) {
          return [
            { eventName: "orientationchange", fn: n },
            { eventName: "resize", fn: n },
            {
              eventName: "contextmenu",
              fn: (c) => {
                c.preventDefault();
              },
            },
            {
              eventName: "keydown",
              fn: (c) => {
                if (i().type !== "DRAGGING") {
                  n();
                  return;
                }
                c.keyCode === fr && c.preventDefault(), n();
              },
            },
            { eventName: pr, fn: n },
          ];
        }
        function Lc({ cancel: n, completed: i, getPhase: c }) {
          return [
            {
              eventName: "touchmove",
              options: { capture: !1 },
              fn: (f) => {
                const m = c();
                if (m.type !== "DRAGGING") {
                  n();
                  return;
                }
                m.hasMoved = !0;
                const { clientX: v, clientY: y } = f.touches[0],
                  x = { x: v, y };
                f.preventDefault(), m.actions.move(x);
              },
            },
            {
              eventName: "touchend",
              fn: (f) => {
                const m = c();
                if (m.type !== "DRAGGING") {
                  n();
                  return;
                }
                f.preventDefault(),
                  m.actions.drop({ shouldBlockNextClick: !0 }),
                  i();
              },
            },
            {
              eventName: "touchcancel",
              fn: (f) => {
                if (c().type !== "DRAGGING") {
                  n();
                  return;
                }
                f.preventDefault(), n();
              },
            },
            {
              eventName: "touchforcechange",
              fn: (f) => {
                const m = c();
                m.type === "IDLE" && G(!1);
                const v = f.touches[0];
                if (!v || !(v.force >= Zc)) return;
                const x = m.actions.shouldRespectForcePress();
                if (m.type === "PENDING") {
                  x && n();
                  return;
                }
                if (x) {
                  if (m.hasMoved) {
                    f.preventDefault();
                    return;
                  }
                  n();
                  return;
                }
                f.preventDefault();
              },
            },
            { eventName: pr, fn: n },
          ];
        }
        function Mc(n) {
          const i = (0, _.useRef)(si),
            c = (0, _.useRef)(Ot),
            f = (0, p.hb)(function () {
              return i.current;
            }, []),
            m = (0, p.hb)(function (j) {
              i.current = j;
            }, []),
            v = (0, p.Kr)(
              () => ({
                eventName: "touchstart",
                fn: function (j) {
                  if (j.defaultPrevented) return;
                  const M = n.findClosestDraggableId(j);
                  if (!M) return;
                  const J = n.tryGetLock(M, x, { sourceEvent: j });
                  if (!J) return;
                  const W = j.touches[0],
                    { clientX: te, clientY: oe } = W,
                    me = { x: te, y: oe };
                  c.current(), w(J, me);
                },
              }),
              [n],
            ),
            y = (0, p.hb)(
              function () {
                const j = { capture: !0, passive: !1 };
                c.current = it(window, [v], j);
              },
              [v],
            ),
            x = (0, p.hb)(() => {
              const E = i.current;
              E.type !== "IDLE" &&
                (E.type === "PENDING" && clearTimeout(E.longPressTimerId),
                m(si),
                c.current(),
                y());
            }, [y, m]),
            S = (0, p.hb)(() => {
              const E = i.current;
              x(),
                E.type === "DRAGGING" &&
                  E.actions.cancel({ shouldBlockNextClick: !0 }),
                E.type === "PENDING" && E.actions.abort();
            }, [x]),
            k = (0, p.hb)(
              function () {
                const j = { capture: !0, passive: !1 },
                  M = { cancel: S, completed: x, getPhase: f },
                  J = it(window, Lc(M), j),
                  W = it(window, Fc(M), j);
                c.current = function () {
                  J(), W();
                };
              },
              [S, f, x],
            ),
            P = (0, p.hb)(
              function () {
                const j = f();
                j.type !== "PENDING" && G(!1);
                const M = j.actions.fluidLift(j.point);
                m({ type: "DRAGGING", actions: M, hasMoved: !1 });
              },
              [f, m],
            ),
            w = (0, p.hb)(
              function (j, M) {
                f().type !== "IDLE" && G(!1);
                const J = setTimeout(P, Bc);
                m({
                  type: "PENDING",
                  point: M,
                  actions: j,
                  longPressTimerId: J,
                }),
                  k();
              },
              [k, f, m, P],
            );
          ye(
            function () {
              return (
                y(),
                function () {
                  c.current();
                  const M = f();
                  M.type === "PENDING" &&
                    (clearTimeout(M.longPressTimerId), m(si));
                }
              );
            },
            [f, y, m],
          ),
            ye(function () {
              return it(window, [
                {
                  eventName: "touchmove",
                  fn: () => {},
                  options: { capture: !1, passive: !1 },
                },
              ]);
            }, []);
        }
        function ko(n) {}
        const qn = [
          "input",
          "button",
          "textarea",
          "select",
          "option",
          "optgroup",
          "video",
          "audio",
        ];
        function Ue(n, i) {
          if (i == null) return !1;
          if (qn.includes(i.tagName.toLowerCase())) return !0;
          const f = i.getAttribute("contenteditable");
          return f === "true" || f === ""
            ? !0
            : i === n
              ? !1
              : Ue(n, i.parentElement);
        }
        function zo(n, i) {
          const c = i.target;
          return Jn(c) ? Ue(n, c) : !1;
        }
        var ui = (n) => (0, D.l)(n.getBoundingClientRect()).center;
        function mr(n) {
          return n instanceof Wn(n).Element;
        }
        const Re = (() => {
          const n = "matches";
          return typeof document > "u"
            ? n
            : [n, "msMatchesSelector", "webkitMatchesSelector"].find(
                (f) => f in Element.prototype,
              ) || n;
        })();
        function li(n, i) {
          return n == null ? null : n[Re](i) ? n : li(n.parentElement, i);
        }
        function _u(n, i) {
          return n.closest ? n.closest(i) : li(n, i);
        }
        function di(n) {
          return `[${Mn.contextId}="${n}"]`;
        }
        function Iu(n, i) {
          const c = i.target;
          if (!mr(c)) return null;
          const f = di(n),
            m = _u(c, f);
          return !m || !Jn(m) ? null : m;
        }
        function Kt(n, i) {
          const c = Iu(n, i);
          return c ? c.getAttribute(Mn.draggableId) : null;
        }
        function xu(n, i) {
          const c = `[${Qr.contextId}="${n}"]`,
            m = so(document, c).find((v) => v.getAttribute(Qr.id) === i);
          return !m || !Jn(m) ? null : m;
        }
        function wu(n) {
          n.preventDefault();
        }
        function fi({ expected: n, phase: i, isLockActive: c, shouldWarn: f }) {
          return !(!c() || n !== i);
        }
        function Gc({ lockAPI: n, store: i, registry: c, draggableId: f }) {
          if (n.isClaimed()) return !1;
          const m = c.draggable.findById(f);
          return !(!m || !m.options.isEnabled || !no(i.getState(), f));
        }
        function pi({
          lockAPI: n,
          contextId: i,
          store: c,
          registry: f,
          draggableId: m,
          forceSensorStop: v,
          sourceEvent: y,
        }) {
          if (!Gc({ lockAPI: n, store: c, registry: f, draggableId: m }))
            return null;
          const S = f.draggable.getById(m),
            k = xu(i, S.descriptor.id);
          if (!k || (y && !S.options.canDragInteractiveElements && zo(k, y)))
            return null;
          const P = n.claim(v || Ot);
          let w = "PRE_DRAG";
          function E() {
            return S.options.shouldRespectForcePress;
          }
          function j() {
            return n.isActive(P);
          }
          function M(he, ge) {
            fi({ expected: he, phase: w, isLockActive: j, shouldWarn: !0 }) &&
              c.dispatch(ge());
          }
          const J = M.bind(null, "DRAGGING");
          function W(he) {
            function ge() {
              n.release(), (w = "COMPLETED");
            }
            w !== "PRE_DRAG" && (ge(), G(!1)),
              c.dispatch(Tt(he.liftActionArgs)),
              (w = "DRAGGING");
            function Ee(ze, ft = { shouldBlockNextClick: !1 }) {
              if ((he.cleanup(), ft.shouldBlockNextClick)) {
                const Pe = it(window, [
                  {
                    eventName: "click",
                    fn: wu,
                    options: { once: !0, passive: !1, capture: !0 },
                  },
                ]);
                setTimeout(Pe);
              }
              ge(), c.dispatch(Vi({ reason: ze }));
            }
            return {
              isActive: () =>
                fi({
                  expected: "DRAGGING",
                  phase: w,
                  isLockActive: j,
                  shouldWarn: !1,
                }),
              shouldRespectForcePress: E,
              drop: (ze) => Ee("DROP", ze),
              cancel: (ze) => Ee("CANCEL", ze),
              ...he.actions,
            };
          }
          function te(he) {
            const ge = (0, be.A)((ze) => {
              J(() => Ji({ client: ze }));
            });
            return {
              ...W({
                liftActionArgs: {
                  id: m,
                  clientSelection: he,
                  movementMode: "FLUID",
                },
                cleanup: () => ge.cancel(),
                actions: { move: ge },
              }),
              move: ge,
            };
          }
          function oe() {
            const he = {
              moveUp: () => J(Za),
              moveRight: () => J(La),
              moveDown: () => J(Fa),
              moveLeft: () => J(Ma),
            };
            return W({
              liftActionArgs: {
                id: m,
                clientSelection: ui(k),
                movementMode: "SNAP",
              },
              cleanup: Ot,
              actions: he,
            });
          }
          function me() {
            fi({
              expected: "PRE_DRAG",
              phase: w,
              isLockActive: j,
              shouldWarn: !0,
            }) && n.release();
          }
          return {
            isActive: () =>
              fi({
                expected: "PRE_DRAG",
                phase: w,
                isLockActive: j,
                shouldWarn: !1,
              }),
            shouldRespectForcePress: E,
            fluidLift: te,
            snapLift: oe,
            abort: me,
          };
        }
        const Su = [Ac, Rc, Mc];
        function ku({
          contextId: n,
          store: i,
          registry: c,
          customSensors: f,
          enableDefaultSensors: m,
        }) {
          const v = [...(m ? Su : []), ...(f || [])],
            y = (0, _.useState)(() => bo())[0],
            x = (0, p.hb)(
              function (W, te) {
                wn(W) && !wn(te) && y.tryAbandon();
              },
              [y],
            );
          ye(
            function () {
              let W = i.getState();
              return i.subscribe(() => {
                const oe = i.getState();
                x(W, oe), (W = oe);
              });
            },
            [y, i, x],
          ),
            ye(() => y.tryAbandon, [y.tryAbandon]);
          const S = (0, p.hb)(
              (J) => Gc({ lockAPI: y, registry: c, store: i, draggableId: J }),
              [y, c, i],
            ),
            k = (0, p.hb)(
              (J, W, te) =>
                pi({
                  lockAPI: y,
                  registry: c,
                  contextId: n,
                  store: i,
                  draggableId: J,
                  forceSensorStop: W || null,
                  sourceEvent: te && te.sourceEvent ? te.sourceEvent : null,
                }),
              [n, y, c, i],
            ),
            P = (0, p.hb)((J) => Kt(n, J), [n]),
            w = (0, p.hb)(
              (J) => {
                const W = c.draggable.findById(J);
                return W ? W.options : null;
              },
              [c.draggable],
            ),
            E = (0, p.hb)(
              function () {
                y.isClaimed() &&
                  (y.tryAbandon(),
                  i.getState().phase !== "IDLE" && i.dispatch(Wr()));
              },
              [y, i],
            ),
            j = (0, p.hb)(() => y.isClaimed(), [y]),
            M = (0, p.Kr)(
              () => ({
                canGetLock: S,
                tryGetLock: k,
                findClosestDraggableId: P,
                findOptionsForDraggable: w,
                tryReleaseLock: E,
                isLockClaimed: j,
              }),
              [S, k, P, w, E, j],
            );
          ko(v);
          for (let J = 0; J < v.length; J++) v[J](M);
        }
        const Do = (n) => ({
            onBeforeCapture: (i) => {
              const c = () => {
                n.onBeforeCapture && n.onBeforeCapture(i);
              };
              _.version.startsWith("16") || _.version.startsWith("17")
                ? c()
                : (0, we.flushSync)(c);
            },
            onBeforeDragStart: n.onBeforeDragStart,
            onDragStart: n.onDragStart,
            onDragEnd: n.onDragEnd,
            onDragUpdate: n.onDragUpdate,
          }),
          zu = (n) => ({
            ...Fn,
            ...n.autoScrollerOptions,
            durationDampening: {
              ...Fn.durationDampening,
              ...n.autoScrollerOptions,
            },
          });
        function Sn(n) {
          return n.current || G(!1), n.current;
        }
        function Du(n) {
          const {
              contextId: i,
              setCallbacks: c,
              sensors: f,
              nonce: m,
              dragHandleUsageInstructions: v,
            } = n,
            y = (0, _.useRef)(null);
          zc();
          const x = dr(n),
            S = (0, p.hb)(() => Do(x.current), [x]),
            k = (0, p.hb)(() => zu(x.current), [x]),
            P = yc(i),
            w = Ic({ contextId: i, text: v }),
            E = Qe(i, m),
            j = (0, p.hb)((Pe) => {
              Sn(y).dispatch(Pe);
            }, []),
            M = (0, p.Kr)(
              () =>
                (0, T.zH)(
                  {
                    publishWhileDragging: Aa,
                    updateDroppableScroll: Wi,
                    updateDroppableIsEnabled: Ta,
                    updateDroppableIsCombineEnabled: Ca,
                    collectionStarting: ja,
                  },
                  j,
                ),
              [j],
            ),
            J = fo(),
            W = (0, p.Kr)(() => xn(J, M), [J, M]),
            te = (0, p.Kr)(
              () =>
                mu({
                  scrollWindow: rc,
                  scrollDroppable: W.scrollDroppable,
                  getAutoScrollerOptions: k,
                  ...(0, T.zH)({ move: Ji }, j),
                }),
              [W.scrollDroppable, j, k],
            ),
            oe = uo(i),
            me = (0, p.Kr)(
              () =>
                Yi({
                  announce: P,
                  autoScroller: te,
                  dimensionMarshal: W,
                  focusMarshal: oe,
                  getResponders: S,
                  styleMarshal: E,
                }),
              [P, te, W, oe, S, E],
            );
          y.current = me;
          const ce = (0, p.hb)(() => {
              const Pe = Sn(y);
              Pe.getState().phase !== "IDLE" && Pe.dispatch(Wr());
            }, []),
            he = (0, p.hb)(() => {
              const Pe = Sn(y).getState();
              return Pe.phase === "DROP_ANIMATING"
                ? !0
                : Pe.phase === "IDLE"
                  ? !1
                  : Pe.isDragging;
            }, []),
            ge = (0, p.Kr)(() => ({ isDragging: he, tryAbort: ce }), [he, ce]);
          c(ge);
          const Ee = (0, p.hb)((Pe) => no(Sn(y).getState(), Pe), []),
            ze = (0, p.hb)(() => _n(Sn(y).getState()), []),
            ft = (0, p.Kr)(
              () => ({
                marshal: W,
                focus: oe,
                contextId: i,
                canLift: Ee,
                isMovementAllowed: ze,
                dragHandleUsageInstructionsId: w,
                registry: J,
              }),
              [i, W, w, oe, Ee, ze, J],
            );
          return (
            ku({
              contextId: i,
              store: me,
              registry: J,
              customSensors: f || null,
              enableDefaultSensors: n.enableDefaultSensors !== !1,
            }),
            (0, _.useEffect)(() => ce, [ce]),
            _.createElement(
              Kn.Provider,
              { value: ft },
              _.createElement(En, { context: ni, store: me }, n.children),
            )
          );
        }
        let mi = 0;
        function Eu() {
          mi = 0;
        }
        function Wc() {
          return (0, p.Kr)(() => `${mi++}`, []);
        }
        function Pu() {
          return _.useId();
        }
        var Eo = Pu;
        function al() {
          "useId" in React || (Eu(), mo());
        }
        function Po(n) {
          const i = Eo(),
            c = n.dragHandleUsageInstructions || jt.dragHandleUsageInstructions;
          return _.createElement(Er, null, (f) =>
            _.createElement(
              Du,
              {
                nonce: n.nonce,
                contextId: i,
                setCallbacks: f,
                dragHandleUsageInstructions: c,
                enableDefaultSensors: n.enableDefaultSensors,
                sensors: n.sensors,
                onBeforeCapture: n.onBeforeCapture,
                onBeforeDragStart: n.onBeforeDragStart,
                onDragStart: n.onDragStart,
                onDragUpdate: n.onDragUpdate,
                onDragEnd: n.onDragEnd,
                autoScrollerOptions: n.autoScrollerOptions,
              },
              n.children,
            ),
          );
        }
        const Jc = { dragging: 5e3, dropAnimating: 4500 },
          Oo = (n, i) => (i ? Rn.drop(i.duration) : n ? Rn.snap : Rn.fluid),
          Ou = (n, i) => {
            if (n) return i ? Cn.opacity.drop : Cn.opacity.combining;
          },
          Uo = (n) =>
            n.forceShouldAnimate != null
              ? n.forceShouldAnimate
              : n.mode === "SNAP";
        function Uu(n) {
          const c = n.dimension.client,
            { offset: f, combineWith: m, dropping: v } = n,
            y = !!m,
            x = Uo(n),
            S = !!v,
            k = S ? Kr.drop(f, y) : Kr.moveTo(f);
          return {
            position: "fixed",
            top: c.marginBox.top,
            left: c.marginBox.left,
            boxSizing: "border-box",
            width: c.borderBox.width,
            height: c.borderBox.height,
            transition: Oo(x, v),
            transform: k,
            opacity: Ou(y, S),
            zIndex: S ? Jc.dropAnimating : Jc.dragging,
            pointerEvents: "none",
          };
        }
        function Vc(n) {
          return {
            transform: Kr.moveTo(n.offset),
            transition: n.shouldAnimateDisplacement ? void 0 : "none",
          };
        }
        function Nu(n) {
          return n.type === "DRAGGING" ? Uu(n) : Vc(n);
        }
        function No(n, i, c = Ge) {
          const f = window.getComputedStyle(i),
            m = i.getBoundingClientRect(),
            v = (0, D.a)(m, f),
            y = (0, D.SQ)(v, c),
            x = {
              client: v,
              tagName: i.tagName.toLowerCase(),
              display: f.display,
            },
            S = { x: v.marginBox.width, y: v.marginBox.height };
          return {
            descriptor: n,
            placeholder: x,
            displaceBy: S,
            client: v,
            page: y,
          };
        }
        function Au(n) {
          const i = oi("draggable"),
            {
              descriptor: c,
              registry: f,
              getDraggableRef: m,
              canDragInteractiveElements: v,
              shouldRespectForcePress: y,
              isEnabled: x,
            } = n,
            S = (0, p.Kr)(
              () => ({
                canDragInteractiveElements: v,
                shouldRespectForcePress: y,
                isEnabled: x,
              }),
              [v, x, y],
            ),
            k = (0, p.hb)(
              (j) => {
                const M = m();
                return M || G(!1), No(c, M, j);
              },
              [c, m],
            ),
            P = (0, p.Kr)(
              () => ({
                uniqueId: i,
                descriptor: c,
                options: S,
                getDimension: k,
              }),
              [c, k, S, i],
            ),
            w = (0, _.useRef)(P),
            E = (0, _.useRef)(!0);
          ye(
            () => (
              f.draggable.register(w.current),
              () => f.draggable.unregister(w.current)
            ),
            [f.draggable],
          ),
            ye(() => {
              if (E.current) {
                E.current = !1;
                return;
              }
              const j = w.current;
              (w.current = P), f.draggable.update(P, j);
            }, [P, f.draggable]);
        }
        var gr = _.createContext(null);
        function Kc(n) {
          (n && Jn(n)) || G(!1);
        }
        function Ao(n, i, c) {
          Hn(() => {
            function f(v) {
              return `Draggable[id: ${v}]: `;
            }
            const m = n.draggableId;
            m || G(!1),
              typeof m != "string" && G(!1),
              Number.isInteger(n.index) || G(!1),
              n.mapped.type !== "DRAGGING" &&
                (Kc(c()), n.isEnabled && (ti(i, m) || G(!1)));
          });
        }
        function ju(n) {}
        function Xn(n) {
          const i = (0, _.useContext)(n);
          return i || G(!1), i;
        }
        function Tu(n) {
          n.preventDefault();
        }
        var Cu = (n) => {
            const i = (0, _.useRef)(null),
              c = (0, p.hb)((ge = null) => {
                i.current = ge;
              }, []),
              f = (0, p.hb)(() => i.current, []),
              {
                contextId: m,
                dragHandleUsageInstructionsId: v,
                registry: y,
              } = Xn(Kn),
              { type: x, droppableId: S } = Xn(gr),
              k = (0, p.Kr)(
                () => ({
                  id: n.draggableId,
                  index: n.index,
                  type: x,
                  droppableId: S,
                }),
                [n.draggableId, n.index, x, S],
              ),
              {
                children: P,
                draggableId: w,
                isEnabled: E,
                shouldRespectForcePress: j,
                canDragInteractiveElements: M,
                isClone: J,
                mapped: W,
                dropAnimationFinished: te,
              } = n;
            if ((Ao(n, m, f), ju(J), !J)) {
              const ge = (0, p.Kr)(
                () => ({
                  descriptor: k,
                  registry: y,
                  getDraggableRef: f,
                  canDragInteractiveElements: M,
                  shouldRespectForcePress: j,
                  isEnabled: E,
                }),
                [k, y, f, M, j, E],
              );
              Au(ge);
            }
            const oe = (0, p.Kr)(
                () =>
                  E
                    ? {
                        tabIndex: 0,
                        role: "button",
                        "aria-describedby": v,
                        "data-rfd-drag-handle-draggable-id": w,
                        "data-rfd-drag-handle-context-id": m,
                        draggable: !1,
                        onDragStart: Tu,
                      }
                    : null,
                [m, v, w, E],
              ),
              me = (0, p.hb)(
                (ge) => {
                  W.type === "DRAGGING" &&
                    W.dropping &&
                    ge.propertyName === "transform" &&
                    (_.version.startsWith("16") || _.version.startsWith("17")
                      ? te()
                      : (0, we.flushSync)(te));
                },
                [te, W],
              ),
              ce = (0, p.Kr)(() => {
                const ge = Nu(W),
                  Ee = W.type === "DRAGGING" && W.dropping ? me : void 0;
                return {
                  innerRef: c,
                  draggableProps: {
                    "data-rfd-draggable-context-id": m,
                    "data-rfd-draggable-id": w,
                    style: ge,
                    onTransitionEnd: Ee,
                  },
                  dragHandleProps: oe,
                };
              }, [m, oe, w, W, me, c]),
              he = (0, p.Kr)(
                () => ({
                  draggableId: k.id,
                  type: k.type,
                  source: { index: k.index, droppableId: k.droppableId },
                }),
                [k.droppableId, k.id, k.index, k.type],
              );
            return _.createElement(_.Fragment, null, P(ce, W.snapshot, he));
          },
          gi = (n, i) => n === i,
          qc = (n) => {
            const { combine: i, destination: c } = n;
            return c ? c.droppableId : i ? i.droppableId : null;
          };
        const jo = (n) => (n.combine ? n.combine.draggableId : null),
          Ru = (n) =>
            n.at && n.at.type === "COMBINE" ? n.at.combine.draggableId : null;
        function vr() {
          const n = X((m, v) => ({ x: m, y: v })),
            i = X((m, v, y = null, x = null, S = null) => ({
              isDragging: !0,
              isClone: v,
              isDropAnimating: !!S,
              dropAnimation: S,
              mode: m,
              draggingOver: y,
              combineWith: x,
              combineTargetFor: null,
            })),
            c = X((m, v, y, x, S = null, k = null, P = null) => ({
              mapped: {
                type: "DRAGGING",
                dropping: null,
                draggingOver: S,
                combineWith: k,
                mode: v,
                offset: m,
                dimension: y,
                forceShouldAnimate: P,
                snapshot: i(v, x, S, k, null),
              },
            }));
          return (m, v) => {
            if (wn(m)) {
              if (m.critical.draggable.id !== v.draggableId) return null;
              const y = m.current.client.offset,
                x = m.dimensions.draggables[v.draggableId],
                S = yt(m.impact),
                k = Ru(m.impact),
                P = m.forceShouldAnimate;
              return c(n(y.x, y.y), m.movementMode, x, v.isClone, S, k, P);
            }
            if (m.phase === "DROP_ANIMATING") {
              const y = m.completed;
              if (y.result.draggableId !== v.draggableId) return null;
              const x = v.isClone,
                S = m.dimensions.draggables[v.draggableId],
                k = y.result,
                P = k.mode,
                w = qc(k),
                E = jo(k),
                M = {
                  duration: m.dropDuration,
                  curve: Vr.drop,
                  moveTo: m.newHomeClientOffset,
                  opacity: E ? Cn.opacity.drop : null,
                  scale: E ? Cn.scale.drop : null,
                };
              return {
                mapped: {
                  type: "DRAGGING",
                  offset: m.newHomeClientOffset,
                  dimension: S,
                  dropping: M,
                  draggingOver: w,
                  combineWith: E,
                  mode: P,
                  forceShouldAnimate: null,
                  snapshot: i(P, x, w, E, M),
                },
              };
            }
            return null;
          };
        }
        function Xc(n = null) {
          return {
            isDragging: !1,
            isDropAnimating: !1,
            isClone: !1,
            dropAnimation: null,
            mode: null,
            draggingOver: null,
            combineTargetFor: n,
            combineWith: null,
          };
        }
        const Bu = {
          mapped: {
            type: "SECONDARY",
            offset: Ge,
            combineTargetFor: null,
            shouldAnimateDisplacement: !0,
            snapshot: Xc(null),
          },
        };
        function Zu() {
          const n = X((y, x) => ({ x: y, y: x })),
            i = X(Xc),
            c = X((y, x = null, S) => ({
              mapped: {
                type: "SECONDARY",
                offset: y,
                combineTargetFor: x,
                shouldAnimateDisplacement: S,
                snapshot: i(x),
              },
            })),
            f = (y) => (y ? c(Ge, y, !0) : null),
            m = (y, x, S, k) => {
              const P = S.displaced.visible[y],
                w = !!(k.inVirtualList && k.effected[y]),
                E = ke(S),
                j = E && E.draggableId === y ? x : null;
              if (!P) {
                if (!w) return f(j);
                if (S.displaced.invisible[y]) return null;
                const W = Wt(k.displacedBy.point),
                  te = n(W.x, W.y);
                return c(te, j, !0);
              }
              if (w) return f(j);
              const M = S.displacedBy.point,
                J = n(M.x, M.y);
              return c(J, j, P.shouldAnimate);
            };
          return (y, x) => {
            if (wn(y))
              return y.critical.draggable.id === x.draggableId
                ? null
                : m(
                    x.draggableId,
                    y.critical.draggable.id,
                    y.impact,
                    y.afterCritical,
                  );
            if (y.phase === "DROP_ANIMATING") {
              const S = y.completed;
              return S.result.draggableId === x.draggableId
                ? null
                : m(
                    x.draggableId,
                    S.result.draggableId,
                    S.impact,
                    S.afterCritical,
                  );
            }
            return null;
          };
        }
        var Yn = vn(
          () => {
            const n = vr(),
              i = Zu();
            return (f, m) => n(f, m) || i(f, m) || Bu;
          },
          { dropAnimationFinished: Ja },
          null,
          { context: ni, areStatePropsEqual: gi },
        )(Cu);
        function hr(n) {
          return Xn(gr).isUsingCloneFor === n.draggableId && !n.isClone
            ? null
            : _.createElement(Yn, n);
        }
        function Fu(n) {
          const i =
              typeof n.isDragDisabled == "boolean" ? !n.isDragDisabled : !0,
            c = !!n.disableInteractiveElementBlocking,
            f = !!n.shouldRespectForcePress;
          return _.createElement(
            hr,
            (0, Le.A)({}, n, {
              isClone: !1,
              isEnabled: i,
              canDragInteractiveElements: c,
              shouldRespectForcePress: f,
            }),
          );
        }
        const Co = (n) => (i) => n === i,
          Lu = Co("scroll"),
          Mu = Co("auto"),
          vi = Co("visible"),
          Ro = (n, i) => i(n.overflowX) || i(n.overflowY),
          Bo = (n, i) => i(n.overflowX) && i(n.overflowY),
          Qc = (n) => {
            const i = window.getComputedStyle(n),
              c = { overflowX: i.overflowX, overflowY: i.overflowY };
            return Ro(c, Lu) || Ro(c, Mu);
          },
          Zo = () => !1,
          Fo = (n) =>
            n == null
              ? null
              : n === document.body
                ? Zo()
                  ? n
                  : null
                : n === document.documentElement
                  ? null
                  : Qc(n)
                    ? n
                    : Fo(n.parentElement);
        var sl = (n) => {
            !n || Fo(n.parentElement);
          },
          hi = (n) => ({ x: n.scrollLeft, y: n.scrollTop });
        const es = (n) =>
          n
            ? window.getComputedStyle(n).position === "fixed"
              ? !0
              : es(n.parentElement)
            : !1;
        var ts = (n) => {
            const i = Fo(n),
              c = es(n);
            return { closestScrollable: i, isFixedOnPage: c };
          },
          Gu = ({
            descriptor: n,
            isEnabled: i,
            isCombineEnabled: c,
            isFixedOnPage: f,
            direction: m,
            client: v,
            page: y,
            closest: x,
          }) => {
            const S = (() => {
                if (!x) return null;
                const { scrollSize: E, client: j } = x,
                  M = Qi({
                    scrollHeight: E.scrollHeight,
                    scrollWidth: E.scrollWidth,
                    height: j.paddingBox.height,
                    width: j.paddingBox.width,
                  });
                return {
                  pageMarginBox: x.page.marginBox,
                  frameClient: j,
                  scrollSize: E,
                  shouldClipSubject: x.shouldClipSubject,
                  scroll: {
                    initial: x.scroll,
                    current: x.scroll,
                    max: M,
                    diff: { value: Ge, displacement: Ge },
                  },
                };
              })(),
              k = m === "vertical" ? Ar : Pi,
              P = se({ page: y, withPlaceholder: null, axis: k, frame: S });
            return {
              descriptor: n,
              isCombineEnabled: c,
              isFixedOnPage: f,
              axis: k,
              isEnabled: i,
              client: v,
              page: y,
              frame: S,
              subject: P,
            };
          };
        const ns = (n, i) => {
          const c = (0, D.YH)(n);
          if (!i || n !== i) return c;
          const f = c.paddingBox.top - i.scrollTop,
            m = c.paddingBox.left - i.scrollLeft,
            v = f + i.scrollHeight,
            y = m + i.scrollWidth,
            x = { top: f, right: y, bottom: v, left: m },
            S = (0, D.fT)(x, c.border);
          return (0, D.ge)({
            borderBox: S,
            margin: c.margin,
            border: c.border,
            padding: c.padding,
          });
        };
        var rs = ({
          ref: n,
          descriptor: i,
          env: c,
          windowScroll: f,
          direction: m,
          isDropDisabled: v,
          isCombineEnabled: y,
          shouldClipSubject: x,
        }) => {
          const S = c.closestScrollable,
            k = ns(n, S),
            P = (0, D.SQ)(k, f),
            w = (() => {
              if (!S) return null;
              const j = (0, D.YH)(S),
                M = {
                  scrollHeight: S.scrollHeight,
                  scrollWidth: S.scrollWidth,
                };
              return {
                client: j,
                page: (0, D.SQ)(j, f),
                scroll: hi(S),
                scrollSize: M,
                shouldClipSubject: x,
              };
            })();
          return Gu({
            descriptor: i,
            isEnabled: !v,
            isCombineEnabled: y,
            isFixedOnPage: c.isFixedOnPage,
            direction: m,
            client: k,
            page: P,
            closest: w,
          });
        };
        const is = { passive: !1 },
          Wu = { passive: !0 };
        var Lo = (n) => (n.shouldPublishImmediately ? is : Wu);
        const Ht = (n) => (n && n.env.closestScrollable) || null;
        function os(n) {
          const i = (0, _.useRef)(null),
            c = Xn(Kn),
            f = oi("droppable"),
            { registry: m, marshal: v } = c,
            y = dr(n),
            x = (0, p.Kr)(
              () => ({ id: n.droppableId, type: n.type, mode: n.mode }),
              [n.droppableId, n.mode, n.type],
            ),
            S = (0, _.useRef)(x),
            k = (0, p.Kr)(
              () =>
                X((ce, he) => {
                  i.current || G(!1);
                  const ge = { x: ce, y: he };
                  v.updateDroppableScroll(x.id, ge);
                }),
              [x.id, v],
            ),
            P = (0, p.hb)(() => {
              const ce = i.current;
              return !ce || !ce.env.closestScrollable
                ? Ge
                : hi(ce.env.closestScrollable);
            }, []),
            w = (0, p.hb)(() => {
              const ce = P();
              k(ce.x, ce.y);
            }, [P, k]),
            E = (0, p.Kr)(() => (0, be.A)(w), [w]),
            j = (0, p.hb)(() => {
              const ce = i.current,
                he = Ht(ce);
              if (
                ((ce && he) || G(!1), ce.scrollOptions.shouldPublishImmediately)
              ) {
                w();
                return;
              }
              E();
            }, [E, w]),
            M = (0, p.hb)(
              (ce, he) => {
                i.current && G(!1);
                const ge = y.current,
                  Ee = ge.getDroppableRef();
                Ee || G(!1);
                const ze = ts(Ee),
                  ft = { ref: Ee, descriptor: x, env: ze, scrollOptions: he };
                i.current = ft;
                const Pe = rs({
                    ref: Ee,
                    descriptor: x,
                    env: ze,
                    windowScroll: ce,
                    direction: ge.direction,
                    isDropDisabled: ge.isDropDisabled,
                    isCombineEnabled: ge.isCombineEnabled,
                    shouldClipSubject: !ge.ignoreContainerClipping,
                  }),
                  bt = ze.closestScrollable;
                return (
                  bt &&
                    (bt.setAttribute(co.contextId, c.contextId),
                    bt.addEventListener("scroll", j, Lo(ft.scrollOptions))),
                  Pe
                );
              },
              [c.contextId, x, j, y],
            ),
            J = (0, p.hb)(() => {
              const ce = i.current,
                he = Ht(ce);
              return (ce && he) || G(!1), hi(he);
            }, []),
            W = (0, p.hb)(() => {
              const ce = i.current;
              ce || G(!1);
              const he = Ht(ce);
              (i.current = null),
                he &&
                  (E.cancel(),
                  he.removeAttribute(co.contextId),
                  he.removeEventListener("scroll", j, Lo(ce.scrollOptions)));
            }, [j, E]),
            te = (0, p.hb)((ce) => {
              const he = i.current;
              he || G(!1);
              const ge = Ht(he);
              ge || G(!1), (ge.scrollTop += ce.y), (ge.scrollLeft += ce.x);
            }, []),
            oe = (0, p.Kr)(
              () => ({
                getDimensionAndWatchScroll: M,
                getScrollWhileDragging: J,
                dragStopped: W,
                scroll: te,
              }),
              [W, M, J, te],
            ),
            me = (0, p.Kr)(
              () => ({ uniqueId: f, descriptor: x, callbacks: oe }),
              [oe, x, f],
            );
          ye(
            () => (
              (S.current = me.descriptor),
              m.droppable.register(me),
              () => {
                i.current && W(), m.droppable.unregister(me);
              }
            ),
            [oe, x, W, me, v, m.droppable],
          ),
            ye(() => {
              i.current &&
                v.updateDroppableIsEnabled(S.current.id, !n.isDropDisabled);
            }, [n.isDropDisabled, v]),
            ye(() => {
              i.current &&
                v.updateDroppableIsCombineEnabled(
                  S.current.id,
                  n.isCombineEnabled,
                );
            }, [n.isCombineEnabled, v]);
        }
        function yr() {}
        const Mo = { width: 0, height: 0, margin: g },
          Ju = ({ isAnimatingOpenOnMount: n, placeholder: i, animate: c }) =>
            n || c === "close"
              ? Mo
              : {
                  height: i.client.borderBox.height,
                  width: i.client.borderBox.width,
                  margin: i.client.margin,
                },
          Go = ({ isAnimatingOpenOnMount: n, placeholder: i, animate: c }) => {
            const f = Ju({
              isAnimatingOpenOnMount: n,
              placeholder: i,
              animate: c,
            });
            return {
              display: i.display,
              boxSizing: "border-box",
              width: f.width,
              height: f.height,
              marginTop: f.margin.top,
              marginRight: f.margin.right,
              marginBottom: f.margin.bottom,
              marginLeft: f.margin.left,
              flexShrink: "0",
              flexGrow: "0",
              pointerEvents: "none",
              transition: c !== "none" ? Rn.placeholder : null,
            };
          },
          Vu = (n) => {
            const i = (0, _.useRef)(null),
              c = (0, p.hb)(() => {
                i.current && (clearTimeout(i.current), (i.current = null));
              }, []),
              { animate: f, onTransitionEnd: m, onClose: v, contextId: y } = n,
              [x, S] = (0, _.useState)(n.animate === "open");
            (0, _.useEffect)(
              () =>
                x
                  ? f !== "open"
                    ? (c(), S(!1), yr)
                    : i.current
                      ? yr
                      : ((i.current = setTimeout(() => {
                          (i.current = null), S(!1);
                        })),
                        c)
                  : yr,
              [f, x, c],
            );
            const k = (0, p.hb)(
                (w) => {
                  w.propertyName === "height" && (m(), f === "close" && v());
                },
                [f, v, m],
              ),
              P = Go({
                isAnimatingOpenOnMount: x,
                animate: n.animate,
                placeholder: n.placeholder,
              });
            return _.createElement(n.placeholder.tagName, {
              style: P,
              "data-rfd-placeholder-context-id": y,
              onTransitionEnd: k,
              ref: n.innerRef,
            });
          };
        var as = _.memo(Vu);
        function kn(n) {
          return typeof n == "boolean";
        }
        function Wo(n, i) {
          i.forEach((c) => c(n));
        }
        const yi = [
            function ({ props: i }) {
              i.droppableId || G(!1), typeof i.droppableId != "string" && G(!1);
            },
            function ({ props: i }) {
              kn(i.isDropDisabled) || G(!1),
                kn(i.isCombineEnabled) || G(!1),
                kn(i.ignoreContainerClipping) || G(!1);
            },
            function ({ getDroppableRef: i }) {
              Kc(i());
            },
          ],
          cs = [
            function ({ props: i, getPlaceholderRef: c }) {
              !i.placeholder || c();
            },
          ],
          Ku = [
            function ({ props: i }) {
              i.renderClone || G(!1);
            },
            function ({ getPlaceholderRef: i }) {
              i() && G(!1);
            },
          ];
        function Hu(n) {
          Hn(() => {
            Wo(n, yi),
              n.props.mode === "standard" && Wo(n, cs),
              n.props.mode === "virtual" && Wo(n, Ku);
          });
        }
        class ss extends _.PureComponent {
          constructor(...i) {
            super(...i),
              (this.state = {
                isVisible: !!this.props.on,
                data: this.props.on,
                animate:
                  this.props.shouldAnimate && this.props.on ? "open" : "none",
              }),
              (this.onClose = () => {
                this.state.animate === "close" &&
                  this.setState({ isVisible: !1 });
              });
          }
          static getDerivedStateFromProps(i, c) {
            return i.shouldAnimate
              ? i.on
                ? { isVisible: !0, data: i.on, animate: "open" }
                : c.isVisible
                  ? { isVisible: !0, data: c.data, animate: "close" }
                  : { isVisible: !1, animate: "close", data: null }
              : { isVisible: !!i.on, data: i.on, animate: "none" };
          }
          render() {
            if (!this.state.isVisible) return null;
            const i = {
              onClose: this.onClose,
              data: this.state.data,
              animate: this.state.animate,
            };
            return this.props.children(i);
          }
        }
        var ls = (n) => {
          const i = (0, _.useContext)(Kn);
          i || G(!1);
          const { contextId: c, isMovementAllowed: f } = i,
            m = (0, _.useRef)(null),
            v = (0, _.useRef)(null),
            {
              children: y,
              droppableId: x,
              type: S,
              mode: k,
              direction: P,
              ignoreContainerClipping: w,
              isDropDisabled: E,
              isCombineEnabled: j,
              snapshot: M,
              useClone: J,
              updateViewportMaxScroll: W,
              getContainerForClone: te,
            } = n,
            oe = (0, p.hb)(() => m.current, []),
            me = (0, p.hb)((We = null) => {
              m.current = We;
            }, []),
            ce = (0, p.hb)(() => v.current, []),
            he = (0, p.hb)((We = null) => {
              v.current = We;
            }, []);
          Hu({ props: n, getDroppableRef: oe, getPlaceholderRef: ce });
          const ge = (0, p.hb)(() => {
            f() && W({ maxScroll: to() });
          }, [f, W]);
          os({
            droppableId: x,
            type: S,
            mode: k,
            direction: P,
            isDropDisabled: E,
            isCombineEnabled: j,
            ignoreContainerClipping: w,
            getDroppableRef: oe,
          });
          const Ee = (0, p.Kr)(
              () =>
                _.createElement(
                  ss,
                  {
                    on: n.placeholder,
                    shouldAnimate: n.shouldAnimatePlaceholder,
                  },
                  ({ onClose: We, data: qt, animate: Qn }) =>
                    _.createElement(as, {
                      placeholder: qt,
                      onClose: We,
                      innerRef: he,
                      animate: Qn,
                      contextId: c,
                      onTransitionEnd: ge,
                    }),
                ),
              [c, ge, n.placeholder, n.shouldAnimatePlaceholder, he],
            ),
            ze = (0, p.Kr)(
              () => ({
                innerRef: me,
                placeholder: Ee,
                droppableProps: {
                  "data-rfd-droppable-id": x,
                  "data-rfd-droppable-context-id": c,
                },
              }),
              [c, x, Ee, me],
            ),
            ft = J ? J.dragging.draggableId : null,
            Pe = (0, p.Kr)(
              () => ({ droppableId: x, type: S, isUsingCloneFor: ft }),
              [x, ft, S],
            );
          function bt() {
            if (!J) return null;
            const { dragging: We, render: qt } = J,
              Qn = _.createElement(
                hr,
                {
                  draggableId: We.draggableId,
                  index: We.source.index,
                  isClone: !0,
                  isEnabled: !0,
                  shouldRespectForcePress: !1,
                  canDragInteractiveElements: !0,
                },
                (Ut, br) => qt(Ut, br, We),
              );
            return we.createPortal(Qn, te());
          }
          return _.createElement(gr.Provider, { value: Pe }, y(ze, M), bt());
        };
        function qu() {
          return document.body || G(!1), document.body;
        }
        const Jo = {
            mode: "standard",
            type: "DEFAULT",
            direction: "vertical",
            isDropDisabled: !1,
            isCombineEnabled: !1,
            ignoreContainerClipping: !1,
            renderClone: null,
            getContainerForClone: qu,
          },
          ds = (n) => {
            let i = { ...n },
              c;
            for (c in Jo) n[c] === void 0 && (i = { ...i, [c]: Jo[c] });
            return i;
          },
          bi = (n, i) => n === i.droppable.type,
          Vo = (n, i) => i.draggables[n.draggable.id];
        var fs = vn(
          () => {
            const n = {
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
              i = { ...n, shouldAnimatePlaceholder: !1 },
              c = X((v) => ({
                draggableId: v.id,
                type: v.type,
                source: { index: v.index, droppableId: v.droppableId },
              })),
              f = X((v, y, x, S, k, P) => {
                const w = k.descriptor.id;
                if (k.descriptor.droppableId === v) {
                  const M = P ? { render: P, dragging: c(k.descriptor) } : null,
                    J = {
                      isDraggingOver: x,
                      draggingOverWith: x ? w : null,
                      draggingFromThisWith: w,
                      isUsingPlaceholder: !0,
                    };
                  return {
                    placeholder: k.placeholder,
                    shouldAnimatePlaceholder: !1,
                    snapshot: J,
                    useClone: M,
                  };
                }
                if (!y) return i;
                if (!S) return n;
                const j = {
                  isDraggingOver: x,
                  draggingOverWith: w,
                  draggingFromThisWith: null,
                  isUsingPlaceholder: !0,
                };
                return {
                  placeholder: k.placeholder,
                  shouldAnimatePlaceholder: !0,
                  snapshot: j,
                  useClone: null,
                };
              });
            return (v, y) => {
              const x = ds(y),
                S = x.droppableId,
                k = x.type,
                P = !x.isDropDisabled,
                w = x.renderClone;
              if (wn(v)) {
                const E = v.critical;
                if (!bi(k, E)) return i;
                const j = Vo(E, v.dimensions),
                  M = yt(v.impact) === S;
                return f(S, P, M, M, j, w);
              }
              if (v.phase === "DROP_ANIMATING") {
                const E = v.completed;
                if (!bi(k, E.critical)) return i;
                const j = Vo(E.critical, v.dimensions);
                return f(S, P, qc(E.result) === S, yt(E.impact) === S, j, w);
              }
              if (v.phase === "IDLE" && v.completed && !v.shouldFlush) {
                const E = v.completed;
                if (!bi(k, E.critical)) return i;
                const j = yt(E.impact) === S,
                  M = !!(E.impact.at && E.impact.at.type === "COMBINE"),
                  J = E.critical.droppable.id === S;
                return j ? (M ? n : i) : J ? n : i;
              }
              return i;
            };
          },
          { updateViewportMaxScroll: Ba },
          (n, i, c) => ({ ...ds(c), ...n, ...i }),
          { context: ni, areStatePropsEqual: gi },
        )(ls);
      },
      74761: ($t, Ne, H) => {
        "use strict";
        var _; /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        const we = H(71944),
          T = H(61621),
          xe =
            typeof Symbol == "function" && typeof Symbol.for == "function"
              ? Symbol.for("nodejs.util.inspect.custom")
              : null;
        (Ne.hp = U), (_ = st), (Ne.IS = 50);
        const ve = 2147483647;
        (_ = ve),
          (U.TYPED_ARRAY_SUPPORT = ue()),
          !U.TYPED_ARRAY_SUPPORT &&
            typeof console < "u" &&
            typeof console.error == "function" &&
            console.error(
              "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
            );
        function ue() {
          try {
            const b = new Uint8Array(1),
              l = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(l, Uint8Array.prototype),
              Object.setPrototypeOf(b, l),
              b.foo() === 42
            );
          } catch {
            return !1;
          }
        }
        Object.defineProperty(U.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (U.isBuffer(this)) return this.buffer;
          },
        }),
          Object.defineProperty(U.prototype, "offset", {
            enumerable: !0,
            get: function () {
              if (U.isBuffer(this)) return this.byteOffset;
            },
          });
        function le(b) {
          if (b > ve)
            throw new RangeError(
              'The value "' + b + '" is invalid for option "size"',
            );
          const l = new Uint8Array(b);
          return Object.setPrototypeOf(l, U.prototype), l;
        }
        function U(b, l, u) {
          if (typeof b == "number") {
            if (typeof l == "string")
              throw new TypeError(
                'The "string" argument must be of type string. Received type number',
              );
            return Se(b);
          }
          return re(b, l, u);
        }
        U.poolSize = 8192;
        function re(b, l, u) {
          if (typeof b == "string") return $e(b, l);
          if (ArrayBuffer.isView(b)) return Ae(b);
          if (b == null)
            throw new TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof b,
            );
          if (
            Je(b, ArrayBuffer) ||
            (b && Je(b.buffer, ArrayBuffer)) ||
            (typeof SharedArrayBuffer < "u" &&
              (Je(b, SharedArrayBuffer) ||
                (b && Je(b.buffer, SharedArrayBuffer))))
          )
            return fe(b, l, u);
          if (typeof b == "number")
            throw new TypeError(
              'The "value" argument must not be of type number. Received type number',
            );
          const h = b.valueOf && b.valueOf();
          if (h != null && h !== b) return U.from(h, l, u);
          const p = K(b);
          if (p) return p;
          if (
            typeof Symbol < "u" &&
            Symbol.toPrimitive != null &&
            typeof b[Symbol.toPrimitive] == "function"
          )
            return U.from(b[Symbol.toPrimitive]("string"), l, u);
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof b,
          );
        }
        (U.from = function (b, l, u) {
          return re(b, l, u);
        }),
          Object.setPrototypeOf(U.prototype, Uint8Array.prototype),
          Object.setPrototypeOf(U, Uint8Array);
        function ee(b) {
          if (typeof b != "number")
            throw new TypeError('"size" argument must be of type number');
          if (b < 0)
            throw new RangeError(
              'The value "' + b + '" is invalid for option "size"',
            );
        }
        function de(b, l, u) {
          return (
            ee(b),
            b <= 0
              ? le(b)
              : l !== void 0
                ? typeof u == "string"
                  ? le(b).fill(l, u)
                  : le(b).fill(l)
                : le(b)
          );
        }
        U.alloc = function (b, l, u) {
          return de(b, l, u);
        };
        function Se(b) {
          return ee(b), le(b < 0 ? 0 : _e(b) | 0);
        }
        (U.allocUnsafe = function (b) {
          return Se(b);
        }),
          (U.allocUnsafeSlow = function (b) {
            return Se(b);
          });
        function $e(b, l) {
          if (
            ((typeof l != "string" || l === "") && (l = "utf8"),
            !U.isEncoding(l))
          )
            throw new TypeError("Unknown encoding: " + l);
          const u = tt(b, l) | 0;
          let h = le(u);
          const p = h.write(b, l);
          return p !== u && (h = h.slice(0, p)), h;
        }
        function Ce(b) {
          const l = b.length < 0 ? 0 : _e(b.length) | 0,
            u = le(l);
          for (let h = 0; h < l; h += 1) u[h] = b[h] & 255;
          return u;
        }
        function Ae(b) {
          if (Je(b, Uint8Array)) {
            const l = new Uint8Array(b);
            return fe(l.buffer, l.byteOffset, l.byteLength);
          }
          return Ce(b);
        }
        function fe(b, l, u) {
          if (l < 0 || b.byteLength < l)
            throw new RangeError('"offset" is outside of buffer bounds');
          if (b.byteLength < l + (u || 0))
            throw new RangeError('"length" is outside of buffer bounds');
          let h;
          return (
            l === void 0 && u === void 0
              ? (h = new Uint8Array(b))
              : u === void 0
                ? (h = new Uint8Array(b, l))
                : (h = new Uint8Array(b, l, u)),
            Object.setPrototypeOf(h, U.prototype),
            h
          );
        }
        function K(b) {
          if (U.isBuffer(b)) {
            const l = _e(b.length) | 0,
              u = le(l);
            return u.length === 0 || b.copy(u, 0, 0, l), u;
          }
          if (b.length !== void 0)
            return typeof b.length != "number" || At(b.length) ? le(0) : Ce(b);
          if (b.type === "Buffer" && Array.isArray(b.data)) return Ce(b.data);
        }
        function _e(b) {
          if (b >= ve)
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                ve.toString(16) +
                " bytes",
            );
          return b | 0;
        }
        function st(b) {
          return +b != b && (b = 0), U.alloc(+b);
        }
        (U.isBuffer = function (l) {
          return l != null && l._isBuffer === !0 && l !== U.prototype;
        }),
          (U.compare = function (l, u) {
            if (
              (Je(l, Uint8Array) && (l = U.from(l, l.offset, l.byteLength)),
              Je(u, Uint8Array) && (u = U.from(u, u.offset, u.byteLength)),
              !U.isBuffer(l) || !U.isBuffer(u))
            )
              throw new TypeError(
                'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
              );
            if (l === u) return 0;
            let h = l.length,
              p = u.length;
            for (let D = 0, R = Math.min(h, p); D < R; ++D)
              if (l[D] !== u[D]) {
                (h = l[D]), (p = u[D]);
                break;
              }
            return h < p ? -1 : p < h ? 1 : 0;
          }),
          (U.isEncoding = function (l) {
            switch (String(l).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (U.concat = function (l, u) {
            if (!Array.isArray(l))
              throw new TypeError(
                '"list" argument must be an Array of Buffers',
              );
            if (l.length === 0) return U.alloc(0);
            let h;
            if (u === void 0)
              for (u = 0, h = 0; h < l.length; ++h) u += l[h].length;
            const p = U.allocUnsafe(u);
            let D = 0;
            for (h = 0; h < l.length; ++h) {
              let R = l[h];
              if (Je(R, Uint8Array))
                D + R.length > p.length
                  ? (U.isBuffer(R) || (R = U.from(R)), R.copy(p, D))
                  : Uint8Array.prototype.set.call(p, R, D);
              else if (U.isBuffer(R)) R.copy(p, D);
              else
                throw new TypeError(
                  '"list" argument must be an Array of Buffers',
                );
              D += R.length;
            }
            return p;
          });
        function tt(b, l) {
          if (U.isBuffer(b)) return b.length;
          if (ArrayBuffer.isView(b) || Je(b, ArrayBuffer)) return b.byteLength;
          if (typeof b != "string")
            throw new TypeError(
              'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                typeof b,
            );
          const u = b.length,
            h = arguments.length > 2 && arguments[2] === !0;
          if (!h && u === 0) return 0;
          let p = !1;
          for (;;)
            switch (l) {
              case "ascii":
              case "latin1":
              case "binary":
                return u;
              case "utf8":
              case "utf-8":
                return nn(b).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return u * 2;
              case "hex":
                return u >>> 1;
              case "base64":
                return gn(b).length;
              default:
                if (p) return h ? -1 : nn(b).length;
                (l = ("" + l).toLowerCase()), (p = !0);
            }
        }
        U.byteLength = tt;
        function ut(b, l, u) {
          let h = !1;
          if (
            ((l === void 0 || l < 0) && (l = 0),
            l > this.length ||
              ((u === void 0 || u > this.length) && (u = this.length),
              u <= 0) ||
              ((u >>>= 0), (l >>>= 0), u <= l))
          )
            return "";
          for (b || (b = "utf8"); ; )
            switch (b) {
              case "hex":
                return Ft(this, l, u);
              case "utf8":
              case "utf-8":
                return It(this, l, u);
              case "ascii":
                return St(this, l, u);
              case "latin1":
              case "binary":
                return qe(this, l, u);
              case "base64":
                return Qt(this, l, u);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return en(this, l, u);
              default:
                if (h) throw new TypeError("Unknown encoding: " + b);
                (b = (b + "").toLowerCase()), (h = !0);
            }
        }
        U.prototype._isBuffer = !0;
        function Le(b, l, u) {
          const h = b[l];
          (b[l] = b[u]), (b[u] = h);
        }
        (U.prototype.swap16 = function () {
          const l = this.length;
          if (l % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (let u = 0; u < l; u += 2) Le(this, u, u + 1);
          return this;
        }),
          (U.prototype.swap32 = function () {
            const l = this.length;
            if (l % 4 !== 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (let u = 0; u < l; u += 4)
              Le(this, u, u + 3), Le(this, u + 1, u + 2);
            return this;
          }),
          (U.prototype.swap64 = function () {
            const l = this.length;
            if (l % 8 !== 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (let u = 0; u < l; u += 8)
              Le(this, u, u + 7),
                Le(this, u + 1, u + 6),
                Le(this, u + 2, u + 5),
                Le(this, u + 3, u + 4);
            return this;
          }),
          (U.prototype.toString = function () {
            const l = this.length;
            return l === 0
              ? ""
              : arguments.length === 0
                ? It(this, 0, l)
                : ut.apply(this, arguments);
          }),
          (U.prototype.toLocaleString = U.prototype.toString),
          (U.prototype.equals = function (l) {
            if (!U.isBuffer(l))
              throw new TypeError("Argument must be a Buffer");
            return this === l ? !0 : U.compare(this, l) === 0;
          }),
          (U.prototype.inspect = function () {
            let l = "";
            const u = Ne.IS;
            return (
              (l = this.toString("hex", 0, u)
                .replace(/(.{2})/g, "$1 ")
                .trim()),
              this.length > u && (l += " ... "),
              "<Buffer " + l + ">"
            );
          }),
          xe && (U.prototype[xe] = U.prototype.inspect),
          (U.prototype.compare = function (l, u, h, p, D) {
            if (
              (Je(l, Uint8Array) && (l = U.from(l, l.offset, l.byteLength)),
              !U.isBuffer(l))
            )
              throw new TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                  typeof l,
              );
            if (
              (u === void 0 && (u = 0),
              h === void 0 && (h = l ? l.length : 0),
              p === void 0 && (p = 0),
              D === void 0 && (D = this.length),
              u < 0 || h > l.length || p < 0 || D > this.length)
            )
              throw new RangeError("out of range index");
            if (p >= D && u >= h) return 0;
            if (p >= D) return -1;
            if (u >= h) return 1;
            if (((u >>>= 0), (h >>>= 0), (p >>>= 0), (D >>>= 0), this === l))
              return 0;
            let R = D - p,
              Y = h - u;
            const ae = Math.min(R, Y),
              X = this.slice(p, D),
              be = l.slice(u, h);
            for (let pe = 0; pe < ae; ++pe)
              if (X[pe] !== be[pe]) {
                (R = X[pe]), (Y = be[pe]);
                break;
              }
            return R < Y ? -1 : Y < R ? 1 : 0;
          });
        function Me(b, l, u, h, p) {
          if (b.length === 0) return -1;
          if (
            (typeof u == "string"
              ? ((h = u), (u = 0))
              : u > 2147483647
                ? (u = 2147483647)
                : u < -2147483648 && (u = -2147483648),
            (u = +u),
            At(u) && (u = p ? 0 : b.length - 1),
            u < 0 && (u = b.length + u),
            u >= b.length)
          ) {
            if (p) return -1;
            u = b.length - 1;
          } else if (u < 0)
            if (p) u = 0;
            else return -1;
          if ((typeof l == "string" && (l = U.from(l, h)), U.isBuffer(l)))
            return l.length === 0 ? -1 : Ve(b, l, u, h, p);
          if (typeof l == "number")
            return (
              (l = l & 255),
              typeof Uint8Array.prototype.indexOf == "function"
                ? p
                  ? Uint8Array.prototype.indexOf.call(b, l, u)
                  : Uint8Array.prototype.lastIndexOf.call(b, l, u)
                : Ve(b, [l], u, h, p)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function Ve(b, l, u, h, p) {
          let D = 1,
            R = b.length,
            Y = l.length;
          if (
            h !== void 0 &&
            ((h = String(h).toLowerCase()),
            h === "ucs2" ||
              h === "ucs-2" ||
              h === "utf16le" ||
              h === "utf-16le")
          ) {
            if (b.length < 2 || l.length < 2) return -1;
            (D = 2), (R /= 2), (Y /= 2), (u /= 2);
          }
          function ae(be, pe) {
            return D === 1 ? be[pe] : be.readUInt16BE(pe * D);
          }
          let X;
          if (p) {
            let be = -1;
            for (X = u; X < R; X++)
              if (ae(b, X) === ae(l, be === -1 ? 0 : X - be)) {
                if ((be === -1 && (be = X), X - be + 1 === Y)) return be * D;
              } else be !== -1 && (X -= X - be), (be = -1);
          } else
            for (u + Y > R && (u = R - Y), X = u; X >= 0; X--) {
              let be = !0;
              for (let pe = 0; pe < Y; pe++)
                if (ae(b, X + pe) !== ae(l, pe)) {
                  be = !1;
                  break;
                }
              if (be) return X;
            }
          return -1;
        }
        (U.prototype.includes = function (l, u, h) {
          return this.indexOf(l, u, h) !== -1;
        }),
          (U.prototype.indexOf = function (l, u, h) {
            return Me(this, l, u, h, !0);
          }),
          (U.prototype.lastIndexOf = function (l, u, h) {
            return Me(this, l, u, h, !1);
          });
        function pt(b, l, u, h) {
          u = Number(u) || 0;
          const p = b.length - u;
          h ? ((h = Number(h)), h > p && (h = p)) : (h = p);
          const D = l.length;
          h > D / 2 && (h = D / 2);
          let R;
          for (R = 0; R < h; ++R) {
            const Y = parseInt(l.substr(R * 2, 2), 16);
            if (At(Y)) return R;
            b[u + R] = Y;
          }
          return R;
        }
        function wt(b, l, u, h) {
          return Gt(nn(l, b.length - u), b, u, h);
        }
        function fn(b, l, u, h) {
          return Gt(rn(l), b, u, h);
        }
        function _t(b, l, u, h) {
          return Gt(gn(l), b, u, h);
        }
        function Bt(b, l, u, h) {
          return Gt(mn(l, b.length - u), b, u, h);
        }
        (U.prototype.write = function (l, u, h, p) {
          if (u === void 0) (p = "utf8"), (h = this.length), (u = 0);
          else if (h === void 0 && typeof u == "string")
            (p = u), (h = this.length), (u = 0);
          else if (isFinite(u))
            (u = u >>> 0),
              isFinite(h)
                ? ((h = h >>> 0), p === void 0 && (p = "utf8"))
                : ((p = h), (h = void 0));
          else
            throw new Error(
              "Buffer.write(string, encoding, offset[, length]) is no longer supported",
            );
          const D = this.length - u;
          if (
            ((h === void 0 || h > D) && (h = D),
            (l.length > 0 && (h < 0 || u < 0)) || u > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          p || (p = "utf8");
          let R = !1;
          for (;;)
            switch (p) {
              case "hex":
                return pt(this, l, u, h);
              case "utf8":
              case "utf-8":
                return wt(this, l, u, h);
              case "ascii":
              case "latin1":
              case "binary":
                return fn(this, l, u, h);
              case "base64":
                return _t(this, l, u, h);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return Bt(this, l, u, h);
              default:
                if (R) throw new TypeError("Unknown encoding: " + p);
                (p = ("" + p).toLowerCase()), (R = !0);
            }
        }),
          (U.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        function Qt(b, l, u) {
          return l === 0 && u === b.length
            ? we.fromByteArray(b)
            : we.fromByteArray(b.slice(l, u));
        }
        function It(b, l, u) {
          u = Math.min(b.length, u);
          const h = [];
          let p = l;
          for (; p < u; ) {
            const D = b[p];
            let R = null,
              Y = D > 239 ? 4 : D > 223 ? 3 : D > 191 ? 2 : 1;
            if (p + Y <= u) {
              let ae, X, be, pe;
              switch (Y) {
                case 1:
                  D < 128 && (R = D);
                  break;
                case 2:
                  (ae = b[p + 1]),
                    (ae & 192) === 128 &&
                      ((pe = ((D & 31) << 6) | (ae & 63)),
                      pe > 127 && (R = pe));
                  break;
                case 3:
                  (ae = b[p + 1]),
                    (X = b[p + 2]),
                    (ae & 192) === 128 &&
                      (X & 192) === 128 &&
                      ((pe = ((D & 15) << 12) | ((ae & 63) << 6) | (X & 63)),
                      pe > 2047 && (pe < 55296 || pe > 57343) && (R = pe));
                  break;
                case 4:
                  (ae = b[p + 1]),
                    (X = b[p + 2]),
                    (be = b[p + 3]),
                    (ae & 192) === 128 &&
                      (X & 192) === 128 &&
                      (be & 192) === 128 &&
                      ((pe =
                        ((D & 15) << 18) |
                        ((ae & 63) << 12) |
                        ((X & 63) << 6) |
                        (be & 63)),
                      pe > 65535 && pe < 1114112 && (R = pe));
              }
            }
            R === null
              ? ((R = 65533), (Y = 1))
              : R > 65535 &&
                ((R -= 65536),
                h.push(((R >>> 10) & 1023) | 55296),
                (R = 56320 | (R & 1023))),
              h.push(R),
              (p += Y);
          }
          return pn(h);
        }
        const Zt = 4096;
        function pn(b) {
          const l = b.length;
          if (l <= Zt) return String.fromCharCode.apply(String, b);
          let u = "",
            h = 0;
          for (; h < l; )
            u += String.fromCharCode.apply(String, b.slice(h, (h += Zt)));
          return u;
        }
        function St(b, l, u) {
          let h = "";
          u = Math.min(b.length, u);
          for (let p = l; p < u; ++p) h += String.fromCharCode(b[p] & 127);
          return h;
        }
        function qe(b, l, u) {
          let h = "";
          u = Math.min(b.length, u);
          for (let p = l; p < u; ++p) h += String.fromCharCode(b[p]);
          return h;
        }
        function Ft(b, l, u) {
          const h = b.length;
          (!l || l < 0) && (l = 0), (!u || u < 0 || u > h) && (u = h);
          let p = "";
          for (let D = l; D < u; ++D) p += vn[b[D]];
          return p;
        }
        function en(b, l, u) {
          const h = b.slice(l, u);
          let p = "";
          for (let D = 0; D < h.length - 1; D += 2)
            p += String.fromCharCode(h[D] + h[D + 1] * 256);
          return p;
        }
        U.prototype.slice = function (l, u) {
          const h = this.length;
          (l = ~~l),
            (u = u === void 0 ? h : ~~u),
            l < 0 ? ((l += h), l < 0 && (l = 0)) : l > h && (l = h),
            u < 0 ? ((u += h), u < 0 && (u = 0)) : u > h && (u = h),
            u < l && (u = l);
          const p = this.subarray(l, u);
          return Object.setPrototypeOf(p, U.prototype), p;
        };
        function De(b, l, u) {
          if (b % 1 !== 0 || b < 0) throw new RangeError("offset is not uint");
          if (b + l > u)
            throw new RangeError("Trying to access beyond buffer length");
        }
        (U.prototype.readUintLE = U.prototype.readUIntLE =
          function (l, u, h) {
            (l = l >>> 0), (u = u >>> 0), h || De(l, u, this.length);
            let p = this[l],
              D = 1,
              R = 0;
            for (; ++R < u && (D *= 256); ) p += this[l + R] * D;
            return p;
          }),
          (U.prototype.readUintBE = U.prototype.readUIntBE =
            function (l, u, h) {
              (l = l >>> 0), (u = u >>> 0), h || De(l, u, this.length);
              let p = this[l + --u],
                D = 1;
              for (; u > 0 && (D *= 256); ) p += this[l + --u] * D;
              return p;
            }),
          (U.prototype.readUint8 = U.prototype.readUInt8 =
            function (l, u) {
              return (l = l >>> 0), u || De(l, 1, this.length), this[l];
            }),
          (U.prototype.readUint16LE = U.prototype.readUInt16LE =
            function (l, u) {
              return (
                (l = l >>> 0),
                u || De(l, 2, this.length),
                this[l] | (this[l + 1] << 8)
              );
            }),
          (U.prototype.readUint16BE = U.prototype.readUInt16BE =
            function (l, u) {
              return (
                (l = l >>> 0),
                u || De(l, 2, this.length),
                (this[l] << 8) | this[l + 1]
              );
            }),
          (U.prototype.readUint32LE = U.prototype.readUInt32LE =
            function (l, u) {
              return (
                (l = l >>> 0),
                u || De(l, 4, this.length),
                (this[l] | (this[l + 1] << 8) | (this[l + 2] << 16)) +
                  this[l + 3] * 16777216
              );
            }),
          (U.prototype.readUint32BE = U.prototype.readUInt32BE =
            function (l, u) {
              return (
                (l = l >>> 0),
                u || De(l, 4, this.length),
                this[l] * 16777216 +
                  ((this[l + 1] << 16) | (this[l + 2] << 8) | this[l + 3])
              );
            }),
          (U.prototype.readBigUInt64LE = gt(function (l) {
            (l = l >>> 0), xt(l, "offset");
            const u = this[l],
              h = this[l + 7];
            (u === void 0 || h === void 0) && Pt(l, this.length - 8);
            const p =
                u +
                this[++l] * 2 ** 8 +
                this[++l] * 2 ** 16 +
                this[++l] * 2 ** 24,
              D =
                this[++l] +
                this[++l] * 2 ** 8 +
                this[++l] * 2 ** 16 +
                h * 2 ** 24;
            return BigInt(p) + (BigInt(D) << BigInt(32));
          })),
          (U.prototype.readBigUInt64BE = gt(function (l) {
            (l = l >>> 0), xt(l, "offset");
            const u = this[l],
              h = this[l + 7];
            (u === void 0 || h === void 0) && Pt(l, this.length - 8);
            const p =
                u * 2 ** 24 +
                this[++l] * 2 ** 16 +
                this[++l] * 2 ** 8 +
                this[++l],
              D =
                this[++l] * 2 ** 24 +
                this[++l] * 2 ** 16 +
                this[++l] * 2 ** 8 +
                h;
            return (BigInt(p) << BigInt(32)) + BigInt(D);
          })),
          (U.prototype.readIntLE = function (l, u, h) {
            (l = l >>> 0), (u = u >>> 0), h || De(l, u, this.length);
            let p = this[l],
              D = 1,
              R = 0;
            for (; ++R < u && (D *= 256); ) p += this[l + R] * D;
            return (D *= 128), p >= D && (p -= Math.pow(2, 8 * u)), p;
          }),
          (U.prototype.readIntBE = function (l, u, h) {
            (l = l >>> 0), (u = u >>> 0), h || De(l, u, this.length);
            let p = u,
              D = 1,
              R = this[l + --p];
            for (; p > 0 && (D *= 256); ) R += this[l + --p] * D;
            return (D *= 128), R >= D && (R -= Math.pow(2, 8 * u)), R;
          }),
          (U.prototype.readInt8 = function (l, u) {
            return (
              (l = l >>> 0),
              u || De(l, 1, this.length),
              this[l] & 128 ? (255 - this[l] + 1) * -1 : this[l]
            );
          }),
          (U.prototype.readInt16LE = function (l, u) {
            (l = l >>> 0), u || De(l, 2, this.length);
            const h = this[l] | (this[l + 1] << 8);
            return h & 32768 ? h | 4294901760 : h;
          }),
          (U.prototype.readInt16BE = function (l, u) {
            (l = l >>> 0), u || De(l, 2, this.length);
            const h = this[l + 1] | (this[l] << 8);
            return h & 32768 ? h | 4294901760 : h;
          }),
          (U.prototype.readInt32LE = function (l, u) {
            return (
              (l = l >>> 0),
              u || De(l, 4, this.length),
              this[l] |
                (this[l + 1] << 8) |
                (this[l + 2] << 16) |
                (this[l + 3] << 24)
            );
          }),
          (U.prototype.readInt32BE = function (l, u) {
            return (
              (l = l >>> 0),
              u || De(l, 4, this.length),
              (this[l] << 24) |
                (this[l + 1] << 16) |
                (this[l + 2] << 8) |
                this[l + 3]
            );
          }),
          (U.prototype.readBigInt64LE = gt(function (l) {
            (l = l >>> 0), xt(l, "offset");
            const u = this[l],
              h = this[l + 7];
            (u === void 0 || h === void 0) && Pt(l, this.length - 8);
            const p =
              this[l + 4] +
              this[l + 5] * 2 ** 8 +
              this[l + 6] * 2 ** 16 +
              (h << 24);
            return (
              (BigInt(p) << BigInt(32)) +
              BigInt(
                u +
                  this[++l] * 2 ** 8 +
                  this[++l] * 2 ** 16 +
                  this[++l] * 2 ** 24,
              )
            );
          })),
          (U.prototype.readBigInt64BE = gt(function (l) {
            (l = l >>> 0), xt(l, "offset");
            const u = this[l],
              h = this[l + 7];
            (u === void 0 || h === void 0) && Pt(l, this.length - 8);
            const p =
              (u << 24) + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l];
            return (
              (BigInt(p) << BigInt(32)) +
              BigInt(
                this[++l] * 2 ** 24 +
                  this[++l] * 2 ** 16 +
                  this[++l] * 2 ** 8 +
                  h,
              )
            );
          })),
          (U.prototype.readFloatLE = function (l, u) {
            return (
              (l = l >>> 0),
              u || De(l, 4, this.length),
              T.read(this, l, !0, 23, 4)
            );
          }),
          (U.prototype.readFloatBE = function (l, u) {
            return (
              (l = l >>> 0),
              u || De(l, 4, this.length),
              T.read(this, l, !1, 23, 4)
            );
          }),
          (U.prototype.readDoubleLE = function (l, u) {
            return (
              (l = l >>> 0),
              u || De(l, 8, this.length),
              T.read(this, l, !0, 52, 8)
            );
          }),
          (U.prototype.readDoubleBE = function (l, u) {
            return (
              (l = l >>> 0),
              u || De(l, 8, this.length),
              T.read(this, l, !1, 52, 8)
            );
          });
        function Ze(b, l, u, h, p, D) {
          if (!U.isBuffer(b))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (l > p || l < D)
            throw new RangeError('"value" argument is out of bounds');
          if (u + h > b.length) throw new RangeError("Index out of range");
        }
        (U.prototype.writeUintLE = U.prototype.writeUIntLE =
          function (l, u, h, p) {
            if (((l = +l), (u = u >>> 0), (h = h >>> 0), !p)) {
              const Y = Math.pow(2, 8 * h) - 1;
              Ze(this, l, u, h, Y, 0);
            }
            let D = 1,
              R = 0;
            for (this[u] = l & 255; ++R < h && (D *= 256); )
              this[u + R] = (l / D) & 255;
            return u + h;
          }),
          (U.prototype.writeUintBE = U.prototype.writeUIntBE =
            function (l, u, h, p) {
              if (((l = +l), (u = u >>> 0), (h = h >>> 0), !p)) {
                const Y = Math.pow(2, 8 * h) - 1;
                Ze(this, l, u, h, Y, 0);
              }
              let D = h - 1,
                R = 1;
              for (this[u + D] = l & 255; --D >= 0 && (R *= 256); )
                this[u + D] = (l / R) & 255;
              return u + h;
            }),
          (U.prototype.writeUint8 = U.prototype.writeUInt8 =
            function (l, u, h) {
              return (
                (l = +l),
                (u = u >>> 0),
                h || Ze(this, l, u, 1, 255, 0),
                (this[u] = l & 255),
                u + 1
              );
            }),
          (U.prototype.writeUint16LE = U.prototype.writeUInt16LE =
            function (l, u, h) {
              return (
                (l = +l),
                (u = u >>> 0),
                h || Ze(this, l, u, 2, 65535, 0),
                (this[u] = l & 255),
                (this[u + 1] = l >>> 8),
                u + 2
              );
            }),
          (U.prototype.writeUint16BE = U.prototype.writeUInt16BE =
            function (l, u, h) {
              return (
                (l = +l),
                (u = u >>> 0),
                h || Ze(this, l, u, 2, 65535, 0),
                (this[u] = l >>> 8),
                (this[u + 1] = l & 255),
                u + 2
              );
            }),
          (U.prototype.writeUint32LE = U.prototype.writeUInt32LE =
            function (l, u, h) {
              return (
                (l = +l),
                (u = u >>> 0),
                h || Ze(this, l, u, 4, 4294967295, 0),
                (this[u + 3] = l >>> 24),
                (this[u + 2] = l >>> 16),
                (this[u + 1] = l >>> 8),
                (this[u] = l & 255),
                u + 4
              );
            }),
          (U.prototype.writeUint32BE = U.prototype.writeUInt32BE =
            function (l, u, h) {
              return (
                (l = +l),
                (u = u >>> 0),
                h || Ze(this, l, u, 4, 4294967295, 0),
                (this[u] = l >>> 24),
                (this[u + 1] = l >>> 16),
                (this[u + 2] = l >>> 8),
                (this[u + 3] = l & 255),
                u + 4
              );
            });
        function kt(b, l, u, h, p) {
          Et(l, h, p, b, u, 7);
          let D = Number(l & BigInt(4294967295));
          (b[u++] = D),
            (D = D >> 8),
            (b[u++] = D),
            (D = D >> 8),
            (b[u++] = D),
            (D = D >> 8),
            (b[u++] = D);
          let R = Number((l >> BigInt(32)) & BigInt(4294967295));
          return (
            (b[u++] = R),
            (R = R >> 8),
            (b[u++] = R),
            (R = R >> 8),
            (b[u++] = R),
            (R = R >> 8),
            (b[u++] = R),
            u
          );
        }
        function nt(b, l, u, h, p) {
          Et(l, h, p, b, u, 7);
          let D = Number(l & BigInt(4294967295));
          (b[u + 7] = D),
            (D = D >> 8),
            (b[u + 6] = D),
            (D = D >> 8),
            (b[u + 5] = D),
            (D = D >> 8),
            (b[u + 4] = D);
          let R = Number((l >> BigInt(32)) & BigInt(4294967295));
          return (
            (b[u + 3] = R),
            (R = R >> 8),
            (b[u + 2] = R),
            (R = R >> 8),
            (b[u + 1] = R),
            (R = R >> 8),
            (b[u] = R),
            u + 8
          );
        }
        (U.prototype.writeBigUInt64LE = gt(function (l, u = 0) {
          return kt(this, l, u, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
          (U.prototype.writeBigUInt64BE = gt(function (l, u = 0) {
            return nt(this, l, u, BigInt(0), BigInt("0xffffffffffffffff"));
          })),
          (U.prototype.writeIntLE = function (l, u, h, p) {
            if (((l = +l), (u = u >>> 0), !p)) {
              const ae = Math.pow(2, 8 * h - 1);
              Ze(this, l, u, h, ae - 1, -ae);
            }
            let D = 0,
              R = 1,
              Y = 0;
            for (this[u] = l & 255; ++D < h && (R *= 256); )
              l < 0 && Y === 0 && this[u + D - 1] !== 0 && (Y = 1),
                (this[u + D] = (((l / R) >> 0) - Y) & 255);
            return u + h;
          }),
          (U.prototype.writeIntBE = function (l, u, h, p) {
            if (((l = +l), (u = u >>> 0), !p)) {
              const ae = Math.pow(2, 8 * h - 1);
              Ze(this, l, u, h, ae - 1, -ae);
            }
            let D = h - 1,
              R = 1,
              Y = 0;
            for (this[u + D] = l & 255; --D >= 0 && (R *= 256); )
              l < 0 && Y === 0 && this[u + D + 1] !== 0 && (Y = 1),
                (this[u + D] = (((l / R) >> 0) - Y) & 255);
            return u + h;
          }),
          (U.prototype.writeInt8 = function (l, u, h) {
            return (
              (l = +l),
              (u = u >>> 0),
              h || Ze(this, l, u, 1, 127, -128),
              l < 0 && (l = 255 + l + 1),
              (this[u] = l & 255),
              u + 1
            );
          }),
          (U.prototype.writeInt16LE = function (l, u, h) {
            return (
              (l = +l),
              (u = u >>> 0),
              h || Ze(this, l, u, 2, 32767, -32768),
              (this[u] = l & 255),
              (this[u + 1] = l >>> 8),
              u + 2
            );
          }),
          (U.prototype.writeInt16BE = function (l, u, h) {
            return (
              (l = +l),
              (u = u >>> 0),
              h || Ze(this, l, u, 2, 32767, -32768),
              (this[u] = l >>> 8),
              (this[u + 1] = l & 255),
              u + 2
            );
          }),
          (U.prototype.writeInt32LE = function (l, u, h) {
            return (
              (l = +l),
              (u = u >>> 0),
              h || Ze(this, l, u, 4, 2147483647, -2147483648),
              (this[u] = l & 255),
              (this[u + 1] = l >>> 8),
              (this[u + 2] = l >>> 16),
              (this[u + 3] = l >>> 24),
              u + 4
            );
          }),
          (U.prototype.writeInt32BE = function (l, u, h) {
            return (
              (l = +l),
              (u = u >>> 0),
              h || Ze(this, l, u, 4, 2147483647, -2147483648),
              l < 0 && (l = 4294967295 + l + 1),
              (this[u] = l >>> 24),
              (this[u + 1] = l >>> 16),
              (this[u + 2] = l >>> 8),
              (this[u + 3] = l & 255),
              u + 4
            );
          }),
          (U.prototype.writeBigInt64LE = gt(function (l, u = 0) {
            return kt(
              this,
              l,
              u,
              -BigInt("0x8000000000000000"),
              BigInt("0x7fffffffffffffff"),
            );
          })),
          (U.prototype.writeBigInt64BE = gt(function (l, u = 0) {
            return nt(
              this,
              l,
              u,
              -BigInt("0x8000000000000000"),
              BigInt("0x7fffffffffffffff"),
            );
          }));
        function zt(b, l, u, h, p, D) {
          if (u + h > b.length) throw new RangeError("Index out of range");
          if (u < 0) throw new RangeError("Index out of range");
        }
        function Lt(b, l, u, h, p) {
          return (
            (l = +l),
            (u = u >>> 0),
            p || zt(b, l, u, 4, 34028234663852886e22, -34028234663852886e22),
            T.write(b, l, u, h, 23, 4),
            u + 4
          );
        }
        (U.prototype.writeFloatLE = function (l, u, h) {
          return Lt(this, l, u, !0, h);
        }),
          (U.prototype.writeFloatBE = function (l, u, h) {
            return Lt(this, l, u, !1, h);
          });
        function mt(b, l, u, h, p) {
          return (
            (l = +l),
            (u = u >>> 0),
            p || zt(b, l, u, 8, 17976931348623157e292, -17976931348623157e292),
            T.write(b, l, u, h, 52, 8),
            u + 8
          );
        }
        (U.prototype.writeDoubleLE = function (l, u, h) {
          return mt(this, l, u, !0, h);
        }),
          (U.prototype.writeDoubleBE = function (l, u, h) {
            return mt(this, l, u, !1, h);
          }),
          (U.prototype.copy = function (l, u, h, p) {
            if (!U.isBuffer(l))
              throw new TypeError("argument should be a Buffer");
            if (
              (h || (h = 0),
              !p && p !== 0 && (p = this.length),
              u >= l.length && (u = l.length),
              u || (u = 0),
              p > 0 && p < h && (p = h),
              p === h || l.length === 0 || this.length === 0)
            )
              return 0;
            if (u < 0) throw new RangeError("targetStart out of bounds");
            if (h < 0 || h >= this.length)
              throw new RangeError("Index out of range");
            if (p < 0) throw new RangeError("sourceEnd out of bounds");
            p > this.length && (p = this.length),
              l.length - u < p - h && (p = l.length - u + h);
            const D = p - h;
            return (
              this === l && typeof Uint8Array.prototype.copyWithin == "function"
                ? this.copyWithin(u, h, p)
                : Uint8Array.prototype.set.call(l, this.subarray(h, p), u),
              D
            );
          }),
          (U.prototype.fill = function (l, u, h, p) {
            if (typeof l == "string") {
              if (
                (typeof u == "string"
                  ? ((p = u), (u = 0), (h = this.length))
                  : typeof h == "string" && ((p = h), (h = this.length)),
                p !== void 0 && typeof p != "string")
              )
                throw new TypeError("encoding must be a string");
              if (typeof p == "string" && !U.isEncoding(p))
                throw new TypeError("Unknown encoding: " + p);
              if (l.length === 1) {
                const R = l.charCodeAt(0);
                ((p === "utf8" && R < 128) || p === "latin1") && (l = R);
              }
            } else
              typeof l == "number"
                ? (l = l & 255)
                : typeof l == "boolean" && (l = Number(l));
            if (u < 0 || this.length < u || this.length < h)
              throw new RangeError("Out of range index");
            if (h <= u) return this;
            (u = u >>> 0),
              (h = h === void 0 ? this.length : h >>> 0),
              l || (l = 0);
            let D;
            if (typeof l == "number") for (D = u; D < h; ++D) this[D] = l;
            else {
              const R = U.isBuffer(l) ? l : U.from(l, p),
                Y = R.length;
              if (Y === 0)
                throw new TypeError(
                  'The value "' + l + '" is invalid for argument "value"',
                );
              for (D = 0; D < h - u; ++D) this[D + u] = R[D % Y];
            }
            return this;
          });
        const rt = {};
        function Dt(b, l, u) {
          rt[b] = class extends u {
            constructor() {
              super(),
                Object.defineProperty(this, "message", {
                  value: l.apply(this, arguments),
                  writable: !0,
                  configurable: !0,
                }),
                (this.name = `${this.name} [${b}]`),
                this.stack,
                delete this.name;
            }
            get code() {
              return b;
            }
            set code(p) {
              Object.defineProperty(this, "code", {
                configurable: !0,
                enumerable: !0,
                value: p,
                writable: !0,
              });
            }
            toString() {
              return `${this.name} [${b}]: ${this.message}`;
            }
          };
        }
        Dt(
          "ERR_BUFFER_OUT_OF_BOUNDS",
          function (b) {
            return b
              ? `${b} is outside of buffer bounds`
              : "Attempt to access memory outside buffer bounds";
          },
          RangeError,
        ),
          Dt(
            "ERR_INVALID_ARG_TYPE",
            function (b, l) {
              return `The "${b}" argument must be of type number. Received type ${typeof l}`;
            },
            TypeError,
          ),
          Dt(
            "ERR_OUT_OF_RANGE",
            function (b, l, u) {
              let h = `The value of "${b}" is out of range.`,
                p = u;
              return (
                Number.isInteger(u) && Math.abs(u) > 2 ** 32
                  ? (p = tn(String(u)))
                  : typeof u == "bigint" &&
                    ((p = String(u)),
                    (u > BigInt(2) ** BigInt(32) ||
                      u < -(BigInt(2) ** BigInt(32))) &&
                      (p = tn(p)),
                    (p += "n")),
                (h += ` It must be ${l}. Received ${p}`),
                h
              );
            },
            RangeError,
          );
        function tn(b) {
          let l = "",
            u = b.length;
          const h = b[0] === "-" ? 1 : 0;
          for (; u >= h + 4; u -= 3) l = `_${b.slice(u - 3, u)}${l}`;
          return `${b.slice(0, u)}${l}`;
        }
        function Mt(b, l, u) {
          xt(l, "offset"),
            (b[l] === void 0 || b[l + u] === void 0) &&
              Pt(l, b.length - (u + 1));
        }
        function Et(b, l, u, h, p, D) {
          if (b > u || b < l) {
            const R = typeof l == "bigint" ? "n" : "";
            let Y;
            throw (
              (D > 3
                ? l === 0 || l === BigInt(0)
                  ? (Y = `>= 0${R} and < 2${R} ** ${(D + 1) * 8}${R}`)
                  : (Y = `>= -(2${R} ** ${(D + 1) * 8 - 1}${R}) and < 2 ** ${(D + 1) * 8 - 1}${R}`)
                : (Y = `>= ${l}${R} and <= ${u}${R}`),
              new rt.ERR_OUT_OF_RANGE("value", Y, b))
            );
          }
          Mt(h, p, D);
        }
        function xt(b, l) {
          if (typeof b != "number")
            throw new rt.ERR_INVALID_ARG_TYPE(l, "number", b);
        }
        function Pt(b, l, u) {
          throw Math.floor(b) !== b
            ? (xt(b, u),
              new rt.ERR_OUT_OF_RANGE(u || "offset", "an integer", b))
            : l < 0
              ? new rt.ERR_BUFFER_OUT_OF_BOUNDS()
              : new rt.ERR_OUT_OF_RANGE(
                  u || "offset",
                  `>= ${u ? 1 : 0} and <= ${l}`,
                  b,
                );
        }
        const Nt = /[^+/0-9A-Za-z-_]/g;
        function Dn(b) {
          if (
            ((b = b.split("=")[0]),
            (b = b.trim().replace(Nt, "")),
            b.length < 2)
          )
            return "";
          for (; b.length % 4 !== 0; ) b = b + "=";
          return b;
        }
        function nn(b, l) {
          l = l || 1 / 0;
          let u;
          const h = b.length;
          let p = null;
          const D = [];
          for (let R = 0; R < h; ++R) {
            if (((u = b.charCodeAt(R)), u > 55295 && u < 57344)) {
              if (!p) {
                if (u > 56319) {
                  (l -= 3) > -1 && D.push(239, 191, 189);
                  continue;
                } else if (R + 1 === h) {
                  (l -= 3) > -1 && D.push(239, 191, 189);
                  continue;
                }
                p = u;
                continue;
              }
              if (u < 56320) {
                (l -= 3) > -1 && D.push(239, 191, 189), (p = u);
                continue;
              }
              u = (((p - 55296) << 10) | (u - 56320)) + 65536;
            } else p && (l -= 3) > -1 && D.push(239, 191, 189);
            if (((p = null), u < 128)) {
              if ((l -= 1) < 0) break;
              D.push(u);
            } else if (u < 2048) {
              if ((l -= 2) < 0) break;
              D.push((u >> 6) | 192, (u & 63) | 128);
            } else if (u < 65536) {
              if ((l -= 3) < 0) break;
              D.push((u >> 12) | 224, ((u >> 6) & 63) | 128, (u & 63) | 128);
            } else if (u < 1114112) {
              if ((l -= 4) < 0) break;
              D.push(
                (u >> 18) | 240,
                ((u >> 12) & 63) | 128,
                ((u >> 6) & 63) | 128,
                (u & 63) | 128,
              );
            } else throw new Error("Invalid code point");
          }
          return D;
        }
        function rn(b) {
          const l = [];
          for (let u = 0; u < b.length; ++u) l.push(b.charCodeAt(u) & 255);
          return l;
        }
        function mn(b, l) {
          let u, h, p;
          const D = [];
          for (let R = 0; R < b.length && !((l -= 2) < 0); ++R)
            (u = b.charCodeAt(R)),
              (h = u >> 8),
              (p = u % 256),
              D.push(p),
              D.push(h);
          return D;
        }
        function gn(b) {
          return we.toByteArray(Dn(b));
        }
        function Gt(b, l, u, h) {
          let p;
          for (p = 0; p < h && !(p + u >= l.length || p >= b.length); ++p)
            l[p + u] = b[p];
          return p;
        }
        function Je(b, l) {
          return (
            b instanceof l ||
            (b != null &&
              b.constructor != null &&
              b.constructor.name != null &&
              b.constructor.name === l.name)
          );
        }
        function At(b) {
          return b !== b;
        }
        const vn = (function () {
          const b = "0123456789abcdef",
            l = new Array(256);
          for (let u = 0; u < 16; ++u) {
            const h = u * 16;
            for (let p = 0; p < 16; ++p) l[h + p] = b[u] + b[p];
          }
          return l;
        })();
        function gt(b) {
          return typeof BigInt > "u" ? En : b;
        }
        function En() {
          throw new Error("BigInt not supported");
        }
      },
      61621: ($t, Ne) => {
        /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ (Ne.read =
          function (H, _, we, T, xe) {
            var ve,
              ue,
              le = xe * 8 - T - 1,
              U = (1 << le) - 1,
              re = U >> 1,
              ee = -7,
              de = we ? xe - 1 : 0,
              Se = we ? -1 : 1,
              $e = H[_ + de];
            for (
              de += Se, ve = $e & ((1 << -ee) - 1), $e >>= -ee, ee += le;
              ee > 0;
              ve = ve * 256 + H[_ + de], de += Se, ee -= 8
            );
            for (
              ue = ve & ((1 << -ee) - 1), ve >>= -ee, ee += T;
              ee > 0;
              ue = ue * 256 + H[_ + de], de += Se, ee -= 8
            );
            if (ve === 0) ve = 1 - re;
            else {
              if (ve === U) return ue ? NaN : ($e ? -1 : 1) * (1 / 0);
              (ue = ue + Math.pow(2, T)), (ve = ve - re);
            }
            return ($e ? -1 : 1) * ue * Math.pow(2, ve - T);
          }),
          (Ne.write = function (H, _, we, T, xe, ve) {
            var ue,
              le,
              U,
              re = ve * 8 - xe - 1,
              ee = (1 << re) - 1,
              de = ee >> 1,
              Se = xe === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              $e = T ? 0 : ve - 1,
              Ce = T ? 1 : -1,
              Ae = _ < 0 || (_ === 0 && 1 / _ < 0) ? 1 : 0;
            for (
              _ = Math.abs(_),
                isNaN(_) || _ === 1 / 0
                  ? ((le = isNaN(_) ? 1 : 0), (ue = ee))
                  : ((ue = Math.floor(Math.log(_) / Math.LN2)),
                    _ * (U = Math.pow(2, -ue)) < 1 && (ue--, (U *= 2)),
                    ue + de >= 1
                      ? (_ += Se / U)
                      : (_ += Se * Math.pow(2, 1 - de)),
                    _ * U >= 2 && (ue++, (U /= 2)),
                    ue + de >= ee
                      ? ((le = 0), (ue = ee))
                      : ue + de >= 1
                        ? ((le = (_ * U - 1) * Math.pow(2, xe)), (ue = ue + de))
                        : ((le = _ * Math.pow(2, de - 1) * Math.pow(2, xe)),
                          (ue = 0)));
              xe >= 8;
              H[we + $e] = le & 255, $e += Ce, le /= 256, xe -= 8
            );
            for (
              ue = (ue << xe) | le, re += xe;
              re > 0;
              H[we + $e] = ue & 255, $e += Ce, ue /= 256, re -= 8
            );
            H[we + $e - Ce] |= Ae * 128;
          });
      },
      38877: ($t, Ne) => {
        "use strict";
        var H; /**
         * @license React
         * react-is.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var _ = Symbol.for("react.element"),
          we = Symbol.for("react.portal"),
          T = Symbol.for("react.fragment"),
          xe = Symbol.for("react.strict_mode"),
          ve = Symbol.for("react.profiler"),
          ue = Symbol.for("react.provider"),
          le = Symbol.for("react.context"),
          U = Symbol.for("react.server_context"),
          re = Symbol.for("react.forward_ref"),
          ee = Symbol.for("react.suspense"),
          de = Symbol.for("react.suspense_list"),
          Se = Symbol.for("react.memo"),
          $e = Symbol.for("react.lazy"),
          Ce = Symbol.for("react.offscreen"),
          Ae;
        Ae = Symbol.for("react.module.reference");
        function fe(K) {
          if (typeof K == "object" && K !== null) {
            var _e = K.$$typeof;
            switch (_e) {
              case _:
                switch (((K = K.type), K)) {
                  case T:
                  case ve:
                  case xe:
                  case ee:
                  case de:
                    return K;
                  default:
                    switch (((K = K && K.$$typeof), K)) {
                      case U:
                      case le:
                      case re:
                      case $e:
                      case Se:
                      case ue:
                        return K;
                      default:
                        return _e;
                    }
                }
              case we:
                return _e;
            }
          }
        }
        (H = le),
          (H = ue),
          (H = _),
          (H = re),
          (H = T),
          (H = $e),
          (H = Se),
          (H = we),
          (H = ve),
          (H = xe),
          (H = ee),
          (H = de),
          (H = function () {
            return !1;
          }),
          (H = function () {
            return !1;
          }),
          (Ne.isContextConsumer = function (K) {
            return fe(K) === le;
          }),
          (H = function (K) {
            return fe(K) === ue;
          }),
          (H = function (K) {
            return typeof K == "object" && K !== null && K.$$typeof === _;
          }),
          (H = function (K) {
            return fe(K) === re;
          }),
          (Ne.isFragment = function (K) {
            return fe(K) === T;
          }),
          (H = function (K) {
            return fe(K) === $e;
          }),
          (H = function (K) {
            return fe(K) === Se;
          }),
          (H = function (K) {
            return fe(K) === we;
          }),
          (H = function (K) {
            return fe(K) === ve;
          }),
          (H = function (K) {
            return fe(K) === xe;
          }),
          (H = function (K) {
            return fe(K) === ee;
          }),
          (H = function (K) {
            return fe(K) === de;
          }),
          (H = function (K) {
            return (
              typeof K == "string" ||
              typeof K == "function" ||
              K === T ||
              K === ve ||
              K === xe ||
              K === ee ||
              K === de ||
              K === Ce ||
              (typeof K == "object" &&
                K !== null &&
                (K.$$typeof === $e ||
                  K.$$typeof === Se ||
                  K.$$typeof === ue ||
                  K.$$typeof === le ||
                  K.$$typeof === re ||
                  K.$$typeof === Ae ||
                  K.getModuleId !== void 0))
            );
          }),
          (H = fe);
      },
      98193: ($t, Ne, H) => {
        "use strict";
        $t.exports = H(38877);
      },
      50104: ($t, Ne, H) => {
        "use strict"; /**
         * @license React
         * use-sync-external-store-shim/with-selector.production.js
         *
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var _ = H(90626),
          we = H(61702);
        function T(ee, de) {
          return (
            (ee === de && (ee !== 0 || 1 / ee === 1 / de)) ||
            (ee !== ee && de !== de)
          );
        }
        var xe = typeof Object.is == "function" ? Object.is : T,
          ve = we.useSyncExternalStore,
          ue = _.useRef,
          le = _.useEffect,
          U = _.useMemo,
          re = _.useDebugValue;
        Ne.useSyncExternalStoreWithSelector = function (ee, de, Se, $e, Ce) {
          var Ae = ue(null);
          if (Ae.current === null) {
            var fe = { hasValue: !1, value: null };
            Ae.current = fe;
          } else fe = Ae.current;
          Ae = U(
            function () {
              function _e(Me) {
                if (!st) {
                  if (
                    ((st = !0),
                    (tt = Me),
                    (Me = $e(Me)),
                    Ce !== void 0 && fe.hasValue)
                  ) {
                    var Ve = fe.value;
                    if (Ce(Ve, Me)) return (ut = Ve);
                  }
                  return (ut = Me);
                }
                if (((Ve = ut), xe(tt, Me))) return Ve;
                var pt = $e(Me);
                return Ce !== void 0 && Ce(Ve, pt)
                  ? ((tt = Me), Ve)
                  : ((tt = Me), (ut = pt));
              }
              var st = !1,
                tt,
                ut,
                Le = Se === void 0 ? null : Se;
              return [
                function () {
                  return _e(de());
                },
                Le === null
                  ? void 0
                  : function () {
                      return _e(Le());
                    },
              ];
            },
            [de, Se, $e, Ce],
          );
          var K = ve(ee, Ae[0], Ae[1]);
          return (
            le(
              function () {
                (fe.hasValue = !0), (fe.value = K);
              },
              [K],
            ),
            re(K),
            K
          );
        };
      },
      72648: ($t, Ne, H) => {
        "use strict";
        $t.exports = H(50104);
      },
      68980: ($t, Ne, H) => {
        "use strict";
        H.d(Ne, {
          YOg: () => kn,
          rLB: () => Ii,
          auy: () => we,
          k5n: () => x,
          Whr: () => hr,
          euz: () => P,
          aig: () => Yc,
          Ikc: () => cs,
          A$I: () => _,
          YjP: () => mr,
          uEf: () => dl,
          ZSL: () => p,
        });
        var _ = {};
        H.r(_),
          H.d(_, {
            K3: () => Qt,
            r0: () => It,
            o: () => zt,
            zM: () => rt,
            zr: () => _t,
            l7: () => Bt,
            gF: () => xe,
            Gl: () => ve,
            p6: () => en,
            w$: () => kt,
            p0: () => ee,
            hQ: () => qe,
            Rp: () => K,
            Zg: () => Ve,
            Os: () => Se,
            F: () => St,
            nd: () => Lt,
            uX: () => pt,
            ug: () => wt,
            fO: () => U,
            AC: () => Mt,
            Ak: () => re,
            ai: () => mt,
            Yj: () => nt,
            kB: () => Ze,
            Z0: () => ue,
            Zv: () => Et,
            uR: () => $e,
            kM: () => le,
          });
        var we = {};
        H.r(we),
          H.d(we, {
            bigint: () => vl,
            boolean: () => gl,
            date: () => hl,
            number: () => ml,
            string: () => pl,
          });
        var T = H(62617);
        const xe = /^[cC][0-9a-z]{6,}$/,
          ve = /^[0-9a-z]+$/,
          ue = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
          le = /^[0-9a-vA-V]{20}$/,
          U = /^[A-Za-z0-9]{27}$/,
          re = /^[a-zA-Z0-9_-]{21}$/,
          ee =
            /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
          de =
            /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
          Se =
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
          $e = (e) =>
            e
              ? new RegExp(
                  `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
                )
              : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
          Ce = null,
          Ae = null,
          fe = null,
          K =
            /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
          _e =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          st =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          tt = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
          ut = null,
          Le =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          Me = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
        function Ve() {
          return new RegExp(Me, "u");
        }
        const pt =
            /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
          wt =
            /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
          fn = (e) => {
            const r = util.escapeRegex(e ?? ":");
            return new RegExp(
              `^(?:[0-9A-F]{2}${r}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${r}){5}[0-9a-f]{2}$`,
            );
          },
          _t =
            /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
          Bt =
            /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
          Qt =
            /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
          It = /^[A-Za-z0-9_-]*$/,
          Zt =
            /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,
          pn =
            /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
          St = /^https?$/,
          qe = /^\+[1-9]\d{6,14}$/,
          Ft =
            "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
          en = new RegExp(`^${Ft}$`);
        function De(e) {
          const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
          return typeof e.precision == "number"
            ? e.precision === -1
              ? `${r}`
              : e.precision === 0
                ? `${r}:[0-5]\\d`
                : `${r}:[0-5]\\d\\.\\d{${e.precision}}`
            : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
        }
        function Ze(e) {
          return new RegExp(`^${De(e)}$`);
        }
        function kt(e) {
          const r = De({ precision: e.precision }),
            a = ["Z"];
          e.local && a.push(""),
            e.offset && a.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
          const s = `${r}(?:${a.join("|")})`;
          return new RegExp(`^${Ft}T(?:${s})$`);
        }
        const nt = (e) => {
            const r = e
              ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}`
              : "[\\s\\S]*";
            return new RegExp(`^${r}$`);
          },
          zt = /^-?\d+n?$/,
          Lt = /^-?\d+$/,
          mt = /^-?\d+(?:\.\d+)?$/,
          rt = /^(?:true|false)$/i,
          Dt = /^null$/i,
          tn = /^undefined$/i,
          Mt = /^[^A-Z]*$/,
          Et = /^[^a-z]*$/,
          xt = /^[0-9a-fA-F]*$/;
        function Pt(e, r) {
          return new RegExp(`^[A-Za-z0-9+/]{${e}}${r}$`);
        }
        function Nt(e) {
          return new RegExp(`^[A-Za-z0-9_-]{${e}}$`);
        }
        const Dn = /^[0-9a-fA-F]{32}$/,
          nn = null,
          rn = null,
          mn = /^[0-9a-fA-F]{40}$/,
          gn = null,
          Gt = null,
          Je = /^[0-9a-fA-F]{64}$/,
          At = null,
          vn = null,
          gt = /^[0-9a-fA-F]{96}$/,
          En = null,
          b = null,
          l = /^[0-9a-fA-F]{128}$/,
          u = null,
          h = null;
        var p = H(99482);
        const D = T.xI("$ZodCheck", (e, r) => {
            var a;
            e._zod ?? (e._zod = {}),
              (e._zod.def = r),
              (a = e._zod).onattach ?? (a.onattach = []);
          }),
          R = { number: "number", bigint: "bigint", object: "date" },
          Y = T.xI("$ZodCheckLessThan", (e, r) => {
            D.init(e, r);
            const a = R[typeof r.value];
            e._zod.onattach.push((s) => {
              const d = s._zod.bag,
                $ =
                  (r.inclusive ? d.maximum : d.exclusiveMaximum) ??
                  Number.POSITIVE_INFINITY;
              r.value < $ &&
                (r.inclusive
                  ? (d.maximum = r.value)
                  : (d.exclusiveMaximum = r.value));
            }),
              (e._zod.check = (s) => {
                (r.inclusive ? s.value <= r.value : s.value < r.value) ||
                  s.issues.push({
                    origin: a,
                    code: "too_big",
                    maximum:
                      typeof r.value == "object" ? r.value.getTime() : r.value,
                    input: s.value,
                    inclusive: r.inclusive,
                    inst: e,
                    continue: !r.abort,
                  });
              });
          }),
          ae = T.xI("$ZodCheckGreaterThan", (e, r) => {
            D.init(e, r);
            const a = R[typeof r.value];
            e._zod.onattach.push((s) => {
              const d = s._zod.bag,
                $ =
                  (r.inclusive ? d.minimum : d.exclusiveMinimum) ??
                  Number.NEGATIVE_INFINITY;
              r.value > $ &&
                (r.inclusive
                  ? (d.minimum = r.value)
                  : (d.exclusiveMinimum = r.value));
            }),
              (e._zod.check = (s) => {
                (r.inclusive ? s.value >= r.value : s.value > r.value) ||
                  s.issues.push({
                    origin: a,
                    code: "too_small",
                    minimum:
                      typeof r.value == "object" ? r.value.getTime() : r.value,
                    input: s.value,
                    inclusive: r.inclusive,
                    inst: e,
                    continue: !r.abort,
                  });
              });
          }),
          X = T.xI("$ZodCheckMultipleOf", (e, r) => {
            D.init(e, r),
              e._zod.onattach.push((a) => {
                var s;
                (s = a._zod.bag).multipleOf ?? (s.multipleOf = r.value);
              }),
              (e._zod.check = (a) => {
                if (typeof a.value != typeof r.value)
                  throw new Error(
                    "Cannot mix number and bigint in multiple_of check.",
                  );
                (typeof a.value == "bigint"
                  ? a.value % r.value === BigInt(0)
                  : p.LG(a.value, r.value) === 0) ||
                  a.issues.push({
                    origin: typeof a.value,
                    code: "not_multiple_of",
                    divisor: r.value,
                    input: a.value,
                    inst: e,
                    continue: !r.abort,
                  });
              });
          }),
          be = T.xI("$ZodCheckNumberFormat", (e, r) => {
            D.init(e, r), (r.format = r.format || "float64");
            const a = r.format?.includes("int"),
              s = a ? "int" : "number",
              [d, $] = p.zH[r.format];
            e._zod.onattach.push((I) => {
              const N = I._zod.bag;
              (N.format = r.format),
                (N.minimum = d),
                (N.maximum = $),
                a && (N.pattern = Lt);
            }),
              (e._zod.check = (I) => {
                const N = I.value;
                if (a) {
                  if (!Number.isInteger(N)) {
                    I.issues.push({
                      expected: s,
                      format: r.format,
                      code: "invalid_type",
                      continue: !1,
                      input: N,
                      inst: e,
                    });
                    return;
                  }
                  if (!Number.isSafeInteger(N)) {
                    N > 0
                      ? I.issues.push({
                          input: N,
                          code: "too_big",
                          maximum: Number.MAX_SAFE_INTEGER,
                          note: "Integers must be within the safe integer range.",
                          inst: e,
                          origin: s,
                          inclusive: !0,
                          continue: !r.abort,
                        })
                      : I.issues.push({
                          input: N,
                          code: "too_small",
                          minimum: Number.MIN_SAFE_INTEGER,
                          note: "Integers must be within the safe integer range.",
                          inst: e,
                          origin: s,
                          inclusive: !0,
                          continue: !r.abort,
                        });
                    return;
                  }
                }
                N < d &&
                  I.issues.push({
                    origin: "number",
                    input: N,
                    code: "too_small",
                    minimum: d,
                    inclusive: !0,
                    inst: e,
                    continue: !r.abort,
                  }),
                  N > $ &&
                    I.issues.push({
                      origin: "number",
                      input: N,
                      code: "too_big",
                      maximum: $,
                      inclusive: !0,
                      inst: e,
                      continue: !r.abort,
                    });
              });
          }),
          pe = null,
          wi = null,
          Si = null,
          Ir = null,
          xr = T.xI("$ZodCheckMaxLength", (e, r) => {
            var a;
            D.init(e, r),
              (a = e._zod.def).when ??
                (a.when = (s) => {
                  const d = s.value;
                  return !p.cl(d) && d.length !== void 0;
                }),
              e._zod.onattach.push((s) => {
                const d = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
                r.maximum < d && (s._zod.bag.maximum = r.maximum);
              }),
              (e._zod.check = (s) => {
                const d = s.value;
                if (d.length <= r.maximum) return;
                const I = p.Rc(d);
                s.issues.push({
                  origin: I,
                  code: "too_big",
                  maximum: r.maximum,
                  inclusive: !0,
                  input: d,
                  inst: e,
                  continue: !r.abort,
                });
              });
          }),
          wr = T.xI("$ZodCheckMinLength", (e, r) => {
            var a;
            D.init(e, r),
              (a = e._zod.def).when ??
                (a.when = (s) => {
                  const d = s.value;
                  return !p.cl(d) && d.length !== void 0;
                }),
              e._zod.onattach.push((s) => {
                const d = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
                r.minimum > d && (s._zod.bag.minimum = r.minimum);
              }),
              (e._zod.check = (s) => {
                const d = s.value;
                if (d.length >= r.minimum) return;
                const I = p.Rc(d);
                s.issues.push({
                  origin: I,
                  code: "too_small",
                  minimum: r.minimum,
                  inclusive: !0,
                  input: d,
                  inst: e,
                  continue: !r.abort,
                });
              });
          }),
          tr = T.xI("$ZodCheckLengthEquals", (e, r) => {
            var a;
            D.init(e, r),
              (a = e._zod.def).when ??
                (a.when = (s) => {
                  const d = s.value;
                  return !p.cl(d) && d.length !== void 0;
                }),
              e._zod.onattach.push((s) => {
                const d = s._zod.bag;
                (d.minimum = r.length),
                  (d.maximum = r.length),
                  (d.length = r.length);
              }),
              (e._zod.check = (s) => {
                const d = s.value,
                  $ = d.length;
                if ($ === r.length) return;
                const I = p.Rc(d),
                  N = $ > r.length;
                s.issues.push({
                  origin: I,
                  ...(N
                    ? { code: "too_big", maximum: r.length }
                    : { code: "too_small", minimum: r.length }),
                  inclusive: !0,
                  exact: !0,
                  input: s.value,
                  inst: e,
                  continue: !r.abort,
                });
              });
          }),
          on = T.xI("$ZodCheckStringFormat", (e, r) => {
            var a, s;
            D.init(e, r),
              e._zod.onattach.push((d) => {
                const $ = d._zod.bag;
                ($.format = r.format),
                  r.pattern &&
                    ($.patterns ?? ($.patterns = new Set()),
                    $.patterns.add(r.pattern));
              }),
              r.pattern
                ? ((a = e._zod).check ??
                  (a.check = (d) => {
                    (r.pattern.lastIndex = 0),
                      !r.pattern.test(d.value) &&
                        d.issues.push({
                          origin: "string",
                          code: "invalid_format",
                          format: r.format,
                          input: d.value,
                          ...(r.pattern
                            ? { pattern: r.pattern.toString() }
                            : {}),
                          inst: e,
                          continue: !r.abort,
                        });
                  }))
                : ((s = e._zod).check ?? (s.check = () => {}));
          }),
          ki = T.xI("$ZodCheckRegex", (e, r) => {
            on.init(e, r),
              (e._zod.check = (a) => {
                (r.pattern.lastIndex = 0),
                  !r.pattern.test(a.value) &&
                    a.issues.push({
                      origin: "string",
                      code: "invalid_format",
                      format: "regex",
                      input: a.value,
                      pattern: r.pattern.toString(),
                      inst: e,
                      continue: !r.abort,
                    });
              });
          }),
          Sr = T.xI("$ZodCheckLowerCase", (e, r) => {
            r.pattern ?? (r.pattern = Mt), on.init(e, r);
          }),
          Ot = T.xI("$ZodCheckUpperCase", (e, r) => {
            r.pattern ?? (r.pattern = Et), on.init(e, r);
          }),
          kr = T.xI("$ZodCheckIncludes", (e, r) => {
            D.init(e, r);
            const a = p.$f(r.includes),
              s = new RegExp(
                typeof r.position == "number" ? `^.{${r.position}}${a}` : a,
              );
            (r.pattern = s),
              e._zod.onattach.push((d) => {
                const $ = d._zod.bag;
                $.patterns ?? ($.patterns = new Set()), $.patterns.add(s);
              }),
              (e._zod.check = (d) => {
                d.value.includes(r.includes, r.position) ||
                  d.issues.push({
                    origin: "string",
                    code: "invalid_format",
                    format: "includes",
                    includes: r.includes,
                    input: d.value,
                    inst: e,
                    continue: !r.abort,
                  });
              });
          }),
          it = T.xI("$ZodCheckStartsWith", (e, r) => {
            D.init(e, r);
            const a = new RegExp(`^${p.$f(r.prefix)}.*`);
            r.pattern ?? (r.pattern = a),
              e._zod.onattach.push((s) => {
                const d = s._zod.bag;
                d.patterns ?? (d.patterns = new Set()), d.patterns.add(a);
              }),
              (e._zod.check = (s) => {
                s.value.startsWith(r.prefix) ||
                  s.issues.push({
                    origin: "string",
                    code: "invalid_format",
                    format: "starts_with",
                    prefix: r.prefix,
                    input: s.value,
                    inst: e,
                    continue: !r.abort,
                  });
              });
          }),
          zr = T.xI("$ZodCheckEndsWith", (e, r) => {
            D.init(e, r);
            const a = new RegExp(`.*${p.$f(r.suffix)}$`);
            r.pattern ?? (r.pattern = a),
              e._zod.onattach.push((s) => {
                const d = s._zod.bag;
                d.patterns ?? (d.patterns = new Set()), d.patterns.add(a);
              }),
              (e._zod.check = (s) => {
                s.value.endsWith(r.suffix) ||
                  s.issues.push({
                    origin: "string",
                    code: "invalid_format",
                    format: "ends_with",
                    suffix: r.suffix,
                    input: s.value,
                    inst: e,
                    continue: !r.abort,
                  });
              });
          });
        function Dr(e, r, a) {
          e.issues.length && r.issues.push(...util.prefixIssues(a, e.issues));
        }
        const hn = null,
          G = null,
          Er = T.xI("$ZodCheckOverwrite", (e, r) => {
            D.init(e, r),
              (e._zod.check = (a) => {
                a.value = r.tx(a.value);
              });
          });
        class Pr {
          constructor(r = []) {
            (this.content = []), (this.indent = 0), this && (this.args = r);
          }
          indented(r) {
            (this.indent += 1), r(this), (this.indent -= 1);
          }
          write(r) {
            if (typeof r == "function") {
              r(this, { execution: "sync" }), r(this, { execution: "async" });
              return;
            }
            const s = r
                .split(`
`)
                .filter((I) => I),
              d = Math.min(...s.map((I) => I.length - I.trimStart().length)),
              $ = s
                .map((I) => I.slice(d))
                .map((I) => " ".repeat(this.indent * 2) + I);
            for (const I of $) this.content.push(I);
          }
          compile() {
            const r = Function,
              a = this?.args,
              d = [...(this?.content ?? [""]).map(($) => `  ${$}`)];
            return new r(
              ...a,
              d.join(`
`),
            );
          }
        }
        const an = (e, r) => {
            (e.name = "$ZodError"),
              Object.defineProperty(e, "_zod", {
                value: e._zod,
                enumerable: !1,
              }),
              Object.defineProperty(e, "issues", { value: r, enumerable: !1 }),
              (e.message = JSON.stringify(r, p.k8, 2)),
              Object.defineProperty(e, "toString", {
                value: () => e.message,
                enumerable: !1,
              });
          },
          Pn = (0, T.xI)("$ZodError", an),
          Xe = (0, T.xI)("$ZodError", an, { Parent: Error });
        function nr(e, r = (a) => a.message) {
          const a = {},
            s = [];
          for (const d of e.issues)
            d.path.length > 0
              ? ((a[d.path[0]] = a[d.path[0]] || []), a[d.path[0]].push(r(d)))
              : s.push(r(d));
          return { formErrors: s, fieldErrors: a };
        }
        function Or(e, r = (a) => a.message) {
          const a = { _errors: [] },
            s = (d, $ = []) => {
              for (const I of d.issues)
                if (I.code === "invalid_union" && I.errors.length)
                  I.errors.map((N) => s({ issues: N }, [...$, ...I.path]));
                else if (I.code === "invalid_key")
                  s({ issues: I.issues }, [...$, ...I.path]);
                else if (I.code === "invalid_element")
                  s({ issues: I.issues }, [...$, ...I.path]);
                else {
                  const N = [...$, ...I.path];
                  if (N.length === 0) a._errors.push(r(I));
                  else {
                    let B = a,
                      L = 0;
                    for (; L < N.length; ) {
                      const V = N[L];
                      L === N.length - 1
                        ? ((B[V] = B[V] || { _errors: [] }),
                          B[V]._errors.push(r(I)))
                        : (B[V] = B[V] || { _errors: [] }),
                        (B = B[V]),
                        L++;
                    }
                  }
                }
            };
          return s(e), a;
        }
        function Ur(e, r = (a) => a.message) {
          const a = { errors: [] },
            s = (d, $ = []) => {
              var I, N;
              for (const B of d.issues)
                if (B.code === "invalid_union" && B.errors.length)
                  B.errors.map((L) => s({ issues: L }, [...$, ...B.path]));
                else if (B.code === "invalid_key")
                  s({ issues: B.issues }, [...$, ...B.path]);
                else if (B.code === "invalid_element")
                  s({ issues: B.issues }, [...$, ...B.path]);
                else {
                  const L = [...$, ...B.path];
                  if (L.length === 0) {
                    a.errors.push(r(B));
                    continue;
                  }
                  let V = a,
                    ne = 0;
                  for (; ne < L.length; ) {
                    const ie = L[ne],
                      Q = ne === L.length - 1;
                    typeof ie == "string"
                      ? (V.properties ?? (V.properties = {}),
                        (I = V.properties)[ie] ?? (I[ie] = { errors: [] }),
                        (V = V.properties[ie]))
                      : (V.items ?? (V.items = []),
                        (N = V.items)[ie] ?? (N[ie] = { errors: [] }),
                        (V = V.items[ie])),
                      Q && V.errors.push(r(B)),
                      ne++;
                  }
                }
            };
          return s(e), a;
        }
        function zi(e) {
          const r = [],
            a = e.map((s) => (typeof s == "object" ? s.key : s));
          for (const s of a)
            typeof s == "number"
              ? r.push(`[${s}]`)
              : typeof s == "symbol"
                ? r.push(`[${JSON.stringify(String(s))}]`)
                : /[^\w$]/.test(s)
                  ? r.push(`[${JSON.stringify(s)}]`)
                  : (r.length && r.push("."), r.push(s));
          return r.join("");
        }
        function ea(e) {
          const r = [],
            a = [...e.issues].sort(
              (s, d) => (s.path ?? []).length - (d.path ?? []).length,
            );
          for (const s of a)
            r.push(`\u2716 ${s.message}`),
              s.path?.length && r.push(`  \u2192 at ${zi(s.path)}`);
          return r.join(`
`);
        }
        const jt = (e) => (r, a, s, d) => {
            const $ = s ? { ...s, async: !1 } : { async: !1 },
              I = r._zod.run({ value: a, issues: [] }, $);
            if (I instanceof Promise) throw new T.GT();
            if (I.issues.length) {
              const N = new (d?.Err ?? e)(
                I.issues.map((B) => p.iR(B, $, T.$W())),
              );
              throw (p.gx(N, d?.callee), N);
            }
            return I.value;
          },
          Ge = jt(Xe),
          Be = (e) => async (r, a, s, d) => {
            const $ = s ? { ...s, async: !0 } : { async: !0 };
            let I = r._zod.run({ value: a, issues: [] }, $);
            if ((I instanceof Promise && (I = await I), I.issues.length)) {
              const N = new (d?.Err ?? e)(
                I.issues.map((B) => p.iR(B, $, T.$W())),
              );
              throw (p.gx(N, d?.callee), N);
            }
            return I.value;
          },
          ot = Be(Xe),
          lt = (e) => (r, a, s) => {
            const d = s ? { ...s, async: !1 } : { async: !1 },
              $ = r._zod.run({ value: a, issues: [] }, d);
            if ($ instanceof Promise) throw new T.GT();
            return $.issues.length
              ? {
                  success: !1,
                  error: new (e ?? Pn)($.issues.map((I) => p.iR(I, d, T.$W()))),
                }
              : { success: !0, data: $.value };
          },
          Wt = lt(Xe),
          vt = (e) => async (r, a, s) => {
            const d = s ? { ...s, async: !0 } : { async: !0 };
            let $ = r._zod.run({ value: a, issues: [] }, d);
            return (
              $ instanceof Promise && ($ = await $),
              $.issues.length
                ? {
                    success: !1,
                    error: new e($.issues.map((I) => p.iR(I, d, T.$W()))),
                  }
                : { success: !0, data: $.value }
            );
          },
          Z = vt(Xe),
          C = (e) => (r, a, s) => {
            const d = s
              ? { ...s, direction: "backward" }
              : { direction: "backward" };
            return jt(e)(r, a, d);
          },
          F = C(Xe),
          A = (e) => (r, a, s) => jt(e)(r, a, s),
          t = A(Xe),
          o = (e) => async (r, a, s) => {
            const d = s
              ? { ...s, direction: "backward" }
              : { direction: "backward" };
            return Be(e)(r, a, d);
          },
          g = o(Xe),
          O = (e) => async (r, a, s) => Be(e)(r, a, s),
          je = O(Xe),
          q = (e) => (r, a, s) => {
            const d = s
              ? { ...s, direction: "backward" }
              : { direction: "backward" };
            return lt(e)(r, a, d);
          },
          se = q(Xe),
          Oe = (e) => (r, a, s) => lt(e)(r, a, s),
          at = Oe(Xe),
          Ye = (e) => async (r, a, s) => {
            const d = s
              ? { ...s, direction: "backward" }
              : { direction: "backward" };
            return vt(e)(r, a, d);
          },
          ct = Ye(Xe),
          yn = (e) => async (r, a, s) => vt(e)(r, a, s),
          cn = yn(Xe),
          Nr = { major: 4, minor: 4, patch: 3 },
          ke = T.xI("$ZodType", (e, r) => {
            var a;
            e ?? (e = {}),
              (e._zod.def = r),
              (e._zod.bag = e._zod.bag || {}),
              (e._zod.version = Nr);
            const s = [...(e._zod.def.checks ?? [])];
            e._zod.traits.has("$ZodCheck") && s.unshift(e);
            for (const d of s) for (const $ of d._zod.onattach) $(e);
            if (s.length === 0)
              (a = e._zod).deferred ?? (a.deferred = []),
                e._zod.deferred?.push(() => {
                  e._zod.run = e._zod.parse;
                });
            else {
              const d = (I, N, B) => {
                  let L = p.QH(I),
                    V;
                  for (const ne of N) {
                    if (ne._zod.def.when) {
                      if (p.rL(I) || !ne._zod.def.when(I)) continue;
                    } else if (L) continue;
                    const ie = I.issues.length,
                      Q = ne._zod.check(I);
                    if (Q instanceof Promise && B?.async === !1)
                      throw new T.GT();
                    if (V || Q instanceof Promise)
                      V = (V ?? Promise.resolve()).then(async () => {
                        await Q,
                          I.issues.length !== ie && (L || (L = p.QH(I, ie)));
                      });
                    else {
                      if (I.issues.length === ie) continue;
                      L || (L = p.QH(I, ie));
                    }
                  }
                  return V ? V.then(() => I) : I;
                },
                $ = (I, N, B) => {
                  if (p.QH(I)) return (I.aborted = !0), I;
                  const L = d(N, s, B);
                  if (L instanceof Promise) {
                    if (B.async === !1) throw new T.GT();
                    return L.then((V) => e._zod.parse(V, B));
                  }
                  return e._zod.parse(L, B);
                };
              e._zod.run = (I, N) => {
                if (N.skipChecks) return e._zod.parse(I, N);
                if (N.direction === "backward") {
                  const L = e._zod.parse(
                    { value: I.value, issues: [] },
                    { ...N, skipChecks: !0 },
                  );
                  return L instanceof Promise
                    ? L.then((V) => $(V, I, N))
                    : $(L, I, N);
                }
                const B = e._zod.parse(I, N);
                if (B instanceof Promise) {
                  if (N.async === !1) throw new T.GT();
                  return B.then((L) => d(L, s, N));
                }
                return d(B, s, N);
              };
            }
            p.gJ(e, "~standard", () => ({
              validate: (d) => {
                try {
                  const $ = Wt(e, d);
                  return $.success
                    ? { value: $.data }
                    : { issues: $.error?.issues };
                } catch {
                  return Z(e, d).then((I) =>
                    I.success ? { value: I.data } : { issues: I.error?.issues },
                  );
                }
              },
              vendor: "zod",
              version: 1,
            }));
          }),
          sn = T.xI("$ZodString", (e, r) => {
            ke.init(e, r),
              (e._zod.pattern =
                [...(e?._zod.bag?.patterns ?? [])].pop() ?? nt(e._zod.bag)),
              (e._zod.parse = (a, s) => {
                if (r.coerce)
                  try {
                    a.value = String(a.value);
                  } catch {}
                return (
                  typeof a.value == "string" ||
                    a.issues.push({
                      expected: "string",
                      code: "invalid_type",
                      input: a.value,
                      inst: e,
                    }),
                  a
                );
              });
          }),
          Te = T.xI("$ZodStringFormat", (e, r) => {
            on.init(e, r), sn.init(e, r);
          }),
          bn = T.xI("$ZodGUID", (e, r) => {
            r.pattern ?? (r.pattern = Se), Te.init(e, r);
          }),
          Di = T.xI("$ZodUUID", (e, r) => {
            if (r.version) {
              const s = {
                v1: 1,
                v2: 2,
                v3: 3,
                v4: 4,
                v5: 5,
                v6: 6,
                v7: 7,
                v8: 8,
              }[r.version];
              if (s === void 0)
                throw new Error(`Invalid UUID version: "${r.version}"`);
              r.pattern ?? (r.pattern = $e(s));
            } else r.pattern ?? (r.pattern = $e());
            Te.init(e, r);
          }),
          On = T.xI("$ZodEmail", (e, r) => {
            r.pattern ?? (r.pattern = K), Te.init(e, r);
          }),
          gs = T.xI("$ZodURL", (e, r) => {
            Te.init(e, r),
              (e._zod.check = (a) => {
                try {
                  const s = a.value.trim();
                  if (
                    !r.normalize &&
                    r.protocol?.source === St.source &&
                    !/^https?:\/\//i.test(s)
                  ) {
                    a.issues.push({
                      code: "invalid_format",
                      format: "url",
                      note: "Invalid URL format",
                      input: a.value,
                      inst: e,
                      continue: !r.abort,
                    });
                    return;
                  }
                  const d = new URL(s);
                  r.hostname &&
                    ((r.hostname.lastIndex = 0),
                    r.hostname.test(d.hostname) ||
                      a.issues.push({
                        code: "invalid_format",
                        format: "url",
                        note: "Invalid hostname",
                        pattern: r.hostname.source,
                        input: a.value,
                        inst: e,
                        continue: !r.abort,
                      })),
                    r.protocol &&
                      ((r.protocol.lastIndex = 0),
                      r.protocol.test(
                        d.protocol.endsWith(":")
                          ? d.protocol.slice(0, -1)
                          : d.protocol,
                      ) ||
                        a.issues.push({
                          code: "invalid_format",
                          format: "url",
                          note: "Invalid protocol",
                          pattern: r.protocol.source,
                          input: a.value,
                          inst: e,
                          continue: !r.abort,
                        })),
                    r.normalize ? (a.value = d.href) : (a.value = s);
                  return;
                } catch {
                  a.issues.push({
                    code: "invalid_format",
                    format: "url",
                    input: a.value,
                    inst: e,
                    continue: !r.abort,
                  });
                }
              });
          }),
          ta = T.xI("$ZodEmoji", (e, r) => {
            r.pattern ?? (r.pattern = Ve()), Te.init(e, r);
          }),
          ht = T.xI("$ZodNanoID", (e, r) => {
            r.pattern ?? (r.pattern = re), Te.init(e, r);
          }),
          Ei = T.xI("$ZodCUID", (e, r) => {
            r.pattern ?? (r.pattern = xe), Te.init(e, r);
          }),
          na = T.xI("$ZodCUID2", (e, r) => {
            r.pattern ?? (r.pattern = ve), Te.init(e, r);
          }),
          Ar = T.xI("$ZodULID", (e, r) => {
            r.pattern ?? (r.pattern = ue), Te.init(e, r);
          }),
          Pi = T.xI("$ZodXID", (e, r) => {
            r.pattern ?? (r.pattern = le), Te.init(e, r);
          }),
          ra = T.xI("$ZodKSUID", (e, r) => {
            r.pattern ?? (r.pattern = U), Te.init(e, r);
          }),
          ia = T.xI("$ZodISODateTime", (e, r) => {
            r.pattern ?? (r.pattern = kt(r)), Te.init(e, r);
          }),
          oa = T.xI("$ZodISODate", (e, r) => {
            r.pattern ?? (r.pattern = en), Te.init(e, r);
          }),
          aa = T.xI("$ZodISOTime", (e, r) => {
            r.pattern ?? (r.pattern = Ze(r)), Te.init(e, r);
          }),
          jr = T.xI("$ZodISODuration", (e, r) => {
            r.pattern ?? (r.pattern = ee), Te.init(e, r);
          }),
          ca = T.xI("$ZodIPv4", (e, r) => {
            r.pattern ?? (r.pattern = pt),
              Te.init(e, r),
              (e._zod.bag.format = "ipv4");
          }),
          Oi = T.xI("$ZodIPv6", (e, r) => {
            r.pattern ?? (r.pattern = wt),
              Te.init(e, r),
              (e._zod.bag.format = "ipv6"),
              (e._zod.check = (a) => {
                try {
                  new URL(`http://[${a.value}]`);
                } catch {
                  a.issues.push({
                    code: "invalid_format",
                    format: "ipv6",
                    input: a.value,
                    inst: e,
                    continue: !r.abort,
                  });
                }
              });
          }),
          vs = null,
          sa = T.xI("$ZodCIDRv4", (e, r) => {
            r.pattern ?? (r.pattern = _t), Te.init(e, r);
          }),
          ua = T.xI("$ZodCIDRv6", (e, r) => {
            r.pattern ?? (r.pattern = Bt),
              Te.init(e, r),
              (e._zod.check = (a) => {
                const s = a.value.split("/");
                try {
                  if (s.length !== 2) throw new Error();
                  const [d, $] = s;
                  if (!$) throw new Error();
                  const I = Number($);
                  if (`${I}` !== $) throw new Error();
                  if (I < 0 || I > 128) throw new Error();
                  new URL(`http://[${d}]`);
                } catch {
                  a.issues.push({
                    code: "invalid_format",
                    format: "cidrv6",
                    input: a.value,
                    inst: e,
                    continue: !r.abort,
                  });
                }
              });
          });
        function $n(e) {
          if (e === "") return !0;
          if (/\s/.test(e) || e.length % 4 !== 0) return !1;
          try {
            return atob(e), !0;
          } catch {
            return !1;
          }
        }
        const la = T.xI("$ZodBase64", (e, r) => {
          r.pattern ?? (r.pattern = Qt),
            Te.init(e, r),
            (e._zod.bag.contentEncoding = "base64"),
            (e._zod.check = (a) => {
              $n(a.value) ||
                a.issues.push({
                  code: "invalid_format",
                  format: "base64",
                  input: a.value,
                  inst: e,
                  continue: !r.abort,
                });
            });
        });
        function Ui(e) {
          if (!It.test(e)) return !1;
          const r = e.replace(/[-_]/g, (s) => (s === "-" ? "+" : "/")),
            a = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
          return $n(a);
        }
        const rr = T.xI("$ZodBase64URL", (e, r) => {
            r.pattern ?? (r.pattern = It),
              Te.init(e, r),
              (e._zod.bag.contentEncoding = "base64url"),
              (e._zod.check = (a) => {
                Ui(a.value) ||
                  a.issues.push({
                    code: "invalid_format",
                    format: "base64url",
                    input: a.value,
                    inst: e,
                    continue: !r.abort,
                  });
              });
          }),
          Jt = T.xI("$ZodE164", (e, r) => {
            r.pattern ?? (r.pattern = qe), Te.init(e, r);
          });
        function da(e, r = null) {
          try {
            const a = e.split(".");
            if (a.length !== 3) return !1;
            const [s] = a;
            if (!s) return !1;
            const d = JSON.parse(atob(s));
            return !(
              ("typ" in d && d?.typ !== "JWT") ||
              !d.alg ||
              (r && (!("alg" in d) || d.alg !== r))
            );
          } catch {
            return !1;
          }
        }
        const fa = T.xI("$ZodJWT", (e, r) => {
            Te.init(e, r),
              (e._zod.check = (a) => {
                da(a.value, r.alg) ||
                  a.issues.push({
                    code: "invalid_format",
                    format: "jwt",
                    input: a.value,
                    inst: e,
                    continue: !r.abort,
                  });
              });
          }),
          hs = null,
          Ni = T.xI("$ZodNumber", (e, r) => {
            ke.init(e, r),
              (e._zod.pattern = e._zod.bag.pattern ?? mt),
              (e._zod.parse = (a, s) => {
                if (r.coerce)
                  try {
                    a.value = Number(a.value);
                  } catch {}
                const d = a.value;
                if (
                  typeof d == "number" &&
                  !Number.isNaN(d) &&
                  Number.isFinite(d)
                )
                  return a;
                const $ =
                  typeof d == "number"
                    ? Number.isNaN(d)
                      ? "NaN"
                      : Number.isFinite(d)
                        ? void 0
                        : "Infinity"
                    : void 0;
                return (
                  a.issues.push({
                    expected: "number",
                    code: "invalid_type",
                    input: d,
                    inst: e,
                    ...($ ? { received: $ } : {}),
                  }),
                  a
                );
              });
          }),
          pa = T.xI("$ZodNumberFormat", (e, r) => {
            be.init(e, r), Ni.init(e, r);
          }),
          Tr = T.xI("$ZodBoolean", (e, r) => {
            ke.init(e, r),
              (e._zod.pattern = rt),
              (e._zod.parse = (a, s) => {
                if (r.coerce)
                  try {
                    a.value = !!a.value;
                  } catch {}
                const d = a.value;
                return (
                  typeof d == "boolean" ||
                    a.issues.push({
                      expected: "boolean",
                      code: "invalid_type",
                      input: d,
                      inst: e,
                    }),
                  a
                );
              });
          }),
          ma = T.xI("$ZodBigInt", (e, r) => {
            ke.init(e, r),
              (e._zod.pattern = zt),
              (e._zod.parse = (a, s) => {
                if (r.coerce)
                  try {
                    a.value = BigInt(a.value);
                  } catch {}
                return (
                  typeof a.value == "bigint" ||
                    a.issues.push({
                      expected: "bigint",
                      code: "invalid_type",
                      input: a.value,
                      inst: e,
                    }),
                  a
                );
              });
          }),
          Ai = null,
          ga = null,
          va = null,
          ys = null,
          bs = null,
          Cr = T.xI("$ZodUnknown", (e, r) => {
            ke.init(e, r), (e._zod.parse = (a) => a);
          }),
          ha = T.xI("$ZodNever", (e, r) => {
            ke.init(e, r),
              (e._zod.parse = (a, s) => (
                a.issues.push({
                  expected: "never",
                  code: "invalid_type",
                  input: a.value,
                  inst: e,
                }),
                a
              ));
          }),
          Rr = null,
          ji = T.xI("$ZodDate", (e, r) => {
            ke.init(e, r),
              (e._zod.parse = (a, s) => {
                if (r.coerce)
                  try {
                    a.value = new Date(a.value);
                  } catch {}
                const d = a.value,
                  $ = d instanceof Date;
                return (
                  ($ && !Number.isNaN(d.getTime())) ||
                    a.issues.push({
                      expected: "date",
                      code: "invalid_type",
                      input: d,
                      ...($ ? { received: "Invalid Date" } : {}),
                      inst: e,
                    }),
                  a
                );
              });
          });
        function Br(e, r, a) {
          e.issues.length && r.issues.push(...p.lQ(a, e.issues)),
            (r.value[a] = e.value);
        }
        const ya = T.xI("$ZodArray", (e, r) => {
          ke.init(e, r),
            (e._zod.parse = (a, s) => {
              const d = a.value;
              if (!Array.isArray(d))
                return (
                  a.issues.push({
                    expected: "array",
                    code: "invalid_type",
                    input: d,
                    inst: e,
                  }),
                  a
                );
              a.value = Array(d.length);
              const $ = [];
              for (let I = 0; I < d.length; I++) {
                const N = d[I],
                  B = r.element._zod.run({ value: N, issues: [] }, s);
                B instanceof Promise
                  ? $.push(B.then((L) => Br(L, a, I)))
                  : Br(B, a, I);
              }
              return $.length ? Promise.all($).then(() => a) : a;
            });
        });
        function ir(e, r, a, s, d, $) {
          const I = a in s;
          if (e.issues.length) {
            if (d && $ && !I) return;
            r.issues.push(...p.lQ(a, e.issues));
          }
          if (!I && !d) {
            e.issues.length ||
              r.issues.push({
                code: "invalid_type",
                expected: "nonoptional",
                input: void 0,
                path: [a],
              });
            return;
          }
          e.value === void 0
            ? I && (r.value[a] = void 0)
            : (r.value[a] = e.value);
        }
        function Ti(e) {
          const r = Object.keys(e.shape);
          for (const s of r)
            if (!e.shape?.[s]?._zod?.traits?.has("$ZodType"))
              throw new Error(
                `Invalid element at key "${s}": expected a Zod schema`,
              );
          const a = p.NM(e.shape);
          return {
            ...e,
            keys: r,
            keySet: new Set(r),
            numKeys: r.length,
            optionalKeys: new Set(a),
          };
        }
        function or(e, r, a, s, d, $) {
          const I = [],
            N = d.keySet,
            B = d.catchall._zod,
            L = B.def.type,
            V = B.optin === "optional",
            ne = B.optout === "optional";
          for (const ie in r) {
            if (ie === "__proto__" || N.has(ie)) continue;
            if (L === "never") {
              I.push(ie);
              continue;
            }
            const Q = B.run({ value: r[ie], issues: [] }, s);
            Q instanceof Promise
              ? e.push(Q.then((Ie) => ir(Ie, a, ie, r, V, ne)))
              : ir(Q, a, ie, r, V, ne);
          }
          return (
            I.length &&
              a.issues.push({
                code: "unrecognized_keys",
                keys: I,
                input: r,
                inst: $,
              }),
            e.length ? Promise.all(e).then(() => a) : a
          );
        }
        const Ci = T.xI("$ZodObject", (e, r) => {
            if (
              (ke.init(e, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get)
            ) {
              const N = r.shape;
              Object.defineProperty(r, "shape", {
                get: () => {
                  const B = { ...N };
                  return Object.defineProperty(r, "shape", { value: B }), B;
                },
              });
            }
            const s = p.PO(() => Ti(r));
            p.gJ(e._zod, "propValues", () => {
              const N = r.shape,
                B = {};
              for (const L in N) {
                const V = N[L]._zod;
                if (V.values) {
                  B[L] ?? (B[L] = new Set());
                  for (const ne of V.values) B[L].add(ne);
                }
              }
              return B;
            });
            const d = p.Gv,
              $ = r.catchall;
            let I;
            e._zod.parse = (N, B) => {
              I ?? (I = s.value);
              const L = N.value;
              if (!d(L))
                return (
                  N.issues.push({
                    expected: "object",
                    code: "invalid_type",
                    input: L,
                    inst: e,
                  }),
                  N
                );
              N.value = {};
              const V = [],
                ne = I.shape;
              for (const ie of I.keys) {
                const Q = ne[ie],
                  Ie = Q._zod.optin === "optional",
                  Xt = Q._zod.optout === "optional",
                  He = Q._zod.run({ value: L[ie], issues: [] }, B);
                He instanceof Promise
                  ? V.push(He.then((ms) => ir(ms, N, ie, L, Ie, Xt)))
                  : ir(He, N, ie, L, Ie, Xt);
              }
              return $
                ? or(V, L, N, B, s.value, e)
                : V.length
                  ? Promise.all(V).then(() => N)
                  : N;
            };
          }),
          ba = T.xI("$ZodObjectJIT", (e, r) => {
            Ci.init(e, r);
            const a = e._zod.parse,
              s = p.PO(() => Ti(r)),
              d = (ie) => {
                const Q = new Pr(["shape", "payload", "ctx"]),
                  Ie = s.value,
                  Xt = (Yt) => {
                    const Fe = p.UQ(Yt);
                    return `shape[${Fe}]._zod.run({ value: input[${Fe}], issues: [] }, ctx)`;
                  };
                Q.write("const input = payload.value;");
                const He = Object.create(null);
                let ms = 0;
                for (const Yt of Ie.keys) He[Yt] = `key_${ms++}`;
                Q.write("const newResult = {};");
                for (const Yt of Ie.keys) {
                  const Fe = He[Yt],
                    et = p.UQ(Yt),
                    tl = ie[Yt],
                    nl = tl?._zod?.optin === "optional",
                    bl = tl?._zod?.optout === "optional";
                  Q.write(`const ${Fe} = ${Xt(Yt)};`),
                    nl && bl
                      ? Q.write(`
        if (${Fe}.issues.length) {
          if (${et} in input) {
            payload.issues = payload.issues.concat(${Fe}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${et}, ...iss.path] : [${et}]
            })));
          }
        }
        
        if (${Fe}.value === undefined) {
          if (${et} in input) {
            newResult[${et}] = undefined;
          }
        } else {
          newResult[${et}] = ${Fe}.value;
        }
        
      `)
                      : nl
                        ? Q.write(`
        if (${Fe}.issues.length) {
          payload.issues = payload.issues.concat(${Fe}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${et}, ...iss.path] : [${et}]
          })));
        }
        
        if (${Fe}.value === undefined) {
          if (${et} in input) {
            newResult[${et}] = undefined;
          }
        } else {
          newResult[${et}] = ${Fe}.value;
        }
        
      `)
                        : Q.write(`
        const ${Fe}_present = ${et} in input;
        if (${Fe}.issues.length) {
          payload.issues = payload.issues.concat(${Fe}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${et}, ...iss.path] : [${et}]
          })));
        }
        if (!${Fe}_present && !${Fe}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${et}]
          });
        }

        if (${Fe}_present) {
          if (${Fe}.value === undefined) {
            newResult[${et}] = undefined;
          } else {
            newResult[${et}] = ${Fe}.value;
          }
        }

      `);
                }
                Q.write("payload.value = newResult;"),
                  Q.write("return payload;");
                const yl = Q.compile();
                return (Yt, Fe) => yl(ie, Yt, Fe);
              };
            let $;
            const I = p.Gv,
              N = !T.cr.jitless,
              B = p.hI,
              L = N && B.value,
              V = r.catchall;
            let ne;
            e._zod.parse = (ie, Q) => {
              ne ?? (ne = s.value);
              const Ie = ie.value;
              return I(Ie)
                ? N && L && Q?.async === !1 && Q.jitless !== !0
                  ? ($ || ($ = d(r.shape)),
                    (ie = $(ie, Q)),
                    V ? or([], Ie, ie, Q, ne, e) : ie)
                  : a(ie, Q)
                : (ie.issues.push({
                    expected: "object",
                    code: "invalid_type",
                    input: Ie,
                    inst: e,
                  }),
                  ie);
            };
          });
        function Ke(e, r, a, s) {
          for (const $ of e)
            if ($.issues.length === 0) return (r.value = $.value), r;
          const d = e.filter(($) => !p.QH($));
          return d.length === 1
            ? ((r.value = d[0].value), d[0])
            : (r.issues.push({
                code: "invalid_union",
                input: r.value,
                inst: a,
                errors: e.map(($) => $.issues.map((I) => p.iR(I, s, T.$W()))),
              }),
              r);
        }
        const $a = T.xI("$ZodUnion", (e, r) => {
          ke.init(e, r),
            p.gJ(e._zod, "optin", () =>
              r.options.some((s) => s._zod.optin === "optional")
                ? "optional"
                : void 0,
            ),
            p.gJ(e._zod, "optout", () =>
              r.options.some((s) => s._zod.optout === "optional")
                ? "optional"
                : void 0,
            ),
            p.gJ(e._zod, "values", () => {
              if (r.options.every((s) => s._zod.values))
                return new Set(
                  r.options.flatMap((s) => Array.from(s._zod.values)),
                );
            }),
            p.gJ(e._zod, "pattern", () => {
              if (r.options.every((s) => s._zod.pattern)) {
                const s = r.options.map((d) => d._zod.pattern);
                return new RegExp(
                  `^(${s.map((d) => p.p6(d.source)).join("|")})$`,
                );
              }
            });
          const a = r.options.length === 1 ? r.options[0]._zod.run : null;
          e._zod.parse = (s, d) => {
            if (a) return a(s, d);
            let $ = !1;
            const I = [];
            for (const N of r.options) {
              const B = N._zod.run({ value: s.value, issues: [] }, d);
              if (B instanceof Promise) I.push(B), ($ = !0);
              else {
                if (B.issues.length === 0) return B;
                I.push(B);
              }
            }
            return $
              ? Promise.all(I).then((N) => Ke(N, s, e, d))
              : Ke(I, s, e, d);
          };
        });
        function _a(e, r, a, s) {
          const d = e.filter(($) => $.issues.length === 0);
          return d.length === 1
            ? ((r.value = d[0].value), r)
            : (d.length === 0
                ? r.issues.push({
                    code: "invalid_union",
                    input: r.value,
                    inst: a,
                    errors: e.map(($) =>
                      $.issues.map((I) =>
                        util.finalizeIssue(I, s, core.config()),
                      ),
                    ),
                  })
                : r.issues.push({
                    code: "invalid_union",
                    input: r.value,
                    inst: a,
                    errors: [],
                    inclusive: !1,
                  }),
              r);
        }
        const $s = null,
          _s = null,
          Un = T.xI("$ZodIntersection", (e, r) => {
            ke.init(e, r),
              (e._zod.parse = (a, s) => {
                const d = a.value,
                  $ = r.left._zod.run({ value: d, issues: [] }, s),
                  I = r.right._zod.run({ value: d, issues: [] }, s);
                return $ instanceof Promise || I instanceof Promise
                  ? Promise.all([$, I]).then(([B, L]) => Fr(a, B, L))
                  : Fr(a, $, I);
              });
          });
        function Zr(e, r) {
          if (e === r) return { valid: !0, data: e };
          if (e instanceof Date && r instanceof Date && +e == +r)
            return { valid: !0, data: e };
          if (p.Qd(e) && p.Qd(r)) {
            const a = Object.keys(r),
              s = Object.keys(e).filter(($) => a.indexOf($) !== -1),
              d = { ...e, ...r };
            for (const $ of s) {
              const I = Zr(e[$], r[$]);
              if (!I.valid)
                return { valid: !1, mergeErrorPath: [$, ...I.mergeErrorPath] };
              d[$] = I.data;
            }
            return { valid: !0, data: d };
          }
          if (Array.isArray(e) && Array.isArray(r)) {
            if (e.length !== r.length) return { valid: !1, mergeErrorPath: [] };
            const a = [];
            for (let s = 0; s < e.length; s++) {
              const d = e[s],
                $ = r[s],
                I = Zr(d, $);
              if (!I.valid)
                return { valid: !1, mergeErrorPath: [s, ...I.mergeErrorPath] };
              a.push(I.data);
            }
            return { valid: !0, data: a };
          }
          return { valid: !1, mergeErrorPath: [] };
        }
        function Fr(e, r, a) {
          const s = new Map();
          let d;
          for (const N of r.issues)
            if (N.code === "unrecognized_keys") {
              d ?? (d = N);
              for (const B of N.keys)
                s.has(B) || s.set(B, {}), (s.get(B).l = !0);
            } else e.issues.push(N);
          for (const N of a.issues)
            if (N.code === "unrecognized_keys")
              for (const B of N.keys)
                s.has(B) || s.set(B, {}), (s.get(B).r = !0);
            else e.issues.push(N);
          const $ = [...s].filter(([, N]) => N.l && N.r).map(([N]) => N);
          if (($.length && d && e.issues.push({ ...d, keys: $ }), p.QH(e)))
            return e;
          const I = Zr(r.value, a.value);
          if (!I.valid)
            throw new Error(
              `Unmergable intersection. Error path: ${JSON.stringify(I.mergeErrorPath)}`,
            );
          return (e.value = I.data), e;
        }
        const Ia = null;
        function Is(e, r) {
          for (let a = e.length - 1; a >= 0; a--)
            if (e[a]._zod[r] !== "optional") return a + 1;
          return 0;
        }
        function xs(e, r, a) {
          e.issues.length && r.issues.push(...util.prefixIssues(a, e.issues)),
            (r.value[a] = e.value);
        }
        function ws(e, r, a, s, d) {
          for (let $ = 0; $ < a.length; $++) {
            const I = e[$],
              N = $ < s.length;
            if (I.issues.length) {
              if (!N && $ >= d) {
                r.value.length = $;
                break;
              }
              r.issues.push(...util.prefixIssues($, I.issues));
            }
            r.value[$] = I.value;
          }
          for (
            let $ = r.value.length - 1;
            $ >= s.length &&
            a[$]._zod.optout === "optional" &&
            r.value[$] === void 0;
            $--
          )
            r.value.length = $;
          return r;
        }
        const yt = null,
          Ss = null;
        function ks(e, r, a, s, d, $, I) {
          e.issues.length &&
            (util.propertyKeyTypes.has(typeof s)
              ? a.issues.push(...util.prefixIssues(s, e.issues))
              : a.issues.push({
                  code: "invalid_key",
                  origin: "map",
                  input: d,
                  inst: $,
                  issues: e.issues.map((N) =>
                    util.finalizeIssue(N, I, core.config()),
                  ),
                })),
            r.issues.length &&
              (util.propertyKeyTypes.has(typeof s)
                ? a.issues.push(...util.prefixIssues(s, r.issues))
                : a.issues.push({
                    origin: "map",
                    code: "invalid_element",
                    input: d,
                    inst: $,
                    key: s,
                    issues: r.issues.map((N) =>
                      util.finalizeIssue(N, I, core.config()),
                    ),
                  })),
            a.value.set(e.value, r.value);
        }
        const _n = null;
        function xa(e, r) {
          e.issues.length && r.issues.push(...e.issues), r.value.add(e.value);
        }
        const wa = T.xI("$ZodEnum", (e, r) => {
            ke.init(e, r);
            const a = p.w5(r.entries),
              s = new Set(a);
            (e._zod.values = s),
              (e._zod.pattern = new RegExp(
                `^(${a
                  .filter((d) => p.qQ.has(typeof d))
                  .map((d) => (typeof d == "string" ? p.$f(d) : d.toString()))
                  .join("|")})$`,
              )),
              (e._zod.parse = (d, $) => {
                const I = d.value;
                return (
                  s.has(I) ||
                    d.issues.push({
                      code: "invalid_value",
                      values: a,
                      input: I,
                      inst: e,
                    }),
                  d
                );
              });
          }),
          Sa = T.xI("$ZodLiteral", (e, r) => {
            if ((ke.init(e, r), r.values.length === 0))
              throw new Error(
                "Cannot create literal schema with no valid values",
              );
            const a = new Set(r.values);
            (e._zod.values = a),
              (e._zod.pattern = new RegExp(
                `^(${r.values.map((s) => (typeof s == "string" ? p.$f(s) : s ? p.$f(s.toString()) : String(s))).join("|")})$`,
              )),
              (e._zod.parse = (s, d) => {
                const $ = s.value;
                return (
                  a.has($) ||
                    s.issues.push({
                      code: "invalid_value",
                      values: r.values,
                      input: $,
                      inst: e,
                    }),
                  s
                );
              });
          }),
          zs = null,
          Ri = T.xI("$ZodTransform", (e, r) => {
            ke.init(e, r),
              (e._zod.optin = "optional"),
              (e._zod.parse = (a, s) => {
                if (s.direction === "backward")
                  throw new T.cV(e.constructor.name);
                const d = r.transform(a.value, a);
                if (s.async)
                  return (d instanceof Promise ? d : Promise.resolve(d)).then(
                    (I) => ((a.value = I), (a.fallback = !0), a),
                  );
                if (d instanceof Promise) throw new T.GT();
                return (a.value = d), (a.fallback = !0), a;
              });
          });
        function Bi(e, r) {
          return r === void 0 && (e.issues.length || e.fallback)
            ? { issues: [], value: void 0 }
            : e;
        }
        const Lr = T.xI("$ZodOptional", (e, r) => {
            ke.init(e, r),
              (e._zod.optin = "optional"),
              (e._zod.optout = "optional"),
              p.gJ(e._zod, "values", () =>
                r.innerType._zod.values
                  ? new Set([...r.innerType._zod.values, void 0])
                  : void 0,
              ),
              p.gJ(e._zod, "pattern", () => {
                const a = r.innerType._zod.pattern;
                return a ? new RegExp(`^(${p.p6(a.source)})?$`) : void 0;
              }),
              (e._zod.parse = (a, s) => {
                if (r.innerType._zod.optin === "optional") {
                  const d = a.value,
                    $ = r.innerType._zod.run(a, s);
                  return $ instanceof Promise
                    ? $.then((I) => Bi(I, d))
                    : Bi($, d);
                }
                return a.value === void 0 ? a : r.innerType._zod.run(a, s);
              });
          }),
          ka = T.xI("$ZodExactOptional", (e, r) => {
            Lr.init(e, r),
              p.gJ(e._zod, "values", () => r.innerType._zod.values),
              p.gJ(e._zod, "pattern", () => r.innerType._zod.pattern),
              (e._zod.parse = (a, s) => r.innerType._zod.run(a, s));
          }),
          za = T.xI("$ZodNullable", (e, r) => {
            ke.init(e, r),
              p.gJ(e._zod, "optin", () => r.innerType._zod.optin),
              p.gJ(e._zod, "optout", () => r.innerType._zod.optout),
              p.gJ(e._zod, "pattern", () => {
                const a = r.innerType._zod.pattern;
                return a ? new RegExp(`^(${p.p6(a.source)}|null)$`) : void 0;
              }),
              p.gJ(e._zod, "values", () =>
                r.innerType._zod.values
                  ? new Set([...r.innerType._zod.values, null])
                  : void 0,
              ),
              (e._zod.parse = (a, s) =>
                a.value === null ? a : r.innerType._zod.run(a, s));
          }),
          Da = T.xI("$ZodDefault", (e, r) => {
            ke.init(e, r),
              (e._zod.optin = "optional"),
              p.gJ(e._zod, "values", () => r.innerType._zod.values),
              (e._zod.parse = (a, s) => {
                if (s.direction === "backward")
                  return r.innerType._zod.run(a, s);
                if (a.value === void 0) return (a.value = r.defaultValue), a;
                const d = r.innerType._zod.run(a, s);
                return d instanceof Promise
                  ? d.then(($) => Zi($, r))
                  : Zi(d, r);
              });
          });
        function Zi(e, r) {
          return e.value === void 0 && (e.value = r.defaultValue), e;
        }
        const Fi = T.xI("$ZodPrefault", (e, r) => {
            ke.init(e, r),
              (e._zod.optin = "optional"),
              p.gJ(e._zod, "values", () => r.innerType._zod.values),
              (e._zod.parse = (a, s) => (
                s.direction === "backward" ||
                  (a.value === void 0 && (a.value = r.defaultValue)),
                r.innerType._zod.run(a, s)
              ));
          }),
          Mr = T.xI("$ZodNonOptional", (e, r) => {
            ke.init(e, r),
              p.gJ(e._zod, "values", () => {
                const a = r.innerType._zod.values;
                return a ? new Set([...a].filter((s) => s !== void 0)) : void 0;
              }),
              (e._zod.parse = (a, s) => {
                const d = r.innerType._zod.run(a, s);
                return d instanceof Promise
                  ? d.then(($) => Li($, e))
                  : Li(d, e);
              });
          });
        function Li(e, r) {
          return (
            !e.issues.length &&
              e.value === void 0 &&
              e.issues.push({
                code: "invalid_type",
                expected: "nonoptional",
                input: e.value,
                inst: r,
              }),
            e
          );
        }
        const Ds = null,
          Nn = T.xI("$ZodCatch", (e, r) => {
            ke.init(e, r),
              (e._zod.optin = "optional"),
              p.gJ(e._zod, "optout", () => r.innerType._zod.optout),
              p.gJ(e._zod, "values", () => r.innerType._zod.values),
              (e._zod.parse = (a, s) => {
                if (s.direction === "backward")
                  return r.innerType._zod.run(a, s);
                const d = r.innerType._zod.run(a, s);
                return d instanceof Promise
                  ? d.then(
                      ($) => (
                        (a.value = $.value),
                        $.issues.length &&
                          ((a.value = r.catchValue({
                            ...a,
                            error: {
                              issues: $.issues.map((I) => p.iR(I, s, T.$W())),
                            },
                            input: a.value,
                          })),
                          (a.issues = []),
                          (a.fallback = !0)),
                        a
                      ),
                    )
                  : ((a.value = d.value),
                    d.issues.length &&
                      ((a.value = r.catchValue({
                        ...a,
                        error: {
                          issues: d.issues.map(($) => p.iR($, s, T.$W())),
                        },
                        input: a.value,
                      })),
                      (a.issues = []),
                      (a.fallback = !0)),
                    a);
              });
          }),
          Es = null,
          Mi = T.xI("$ZodPipe", (e, r) => {
            ke.init(e, r),
              p.gJ(e._zod, "values", () => r.in._zod.values),
              p.gJ(e._zod, "optin", () => r.in._zod.optin),
              p.gJ(e._zod, "optout", () => r.out._zod.optout),
              p.gJ(e._zod, "propValues", () => r.in._zod.propValues),
              (e._zod.parse = (a, s) => {
                if (s.direction === "backward") {
                  const $ = r.out._zod.run(a, s);
                  return $ instanceof Promise
                    ? $.then((I) => An(I, r.in, s))
                    : An($, r.in, s);
                }
                const d = r.in._zod.run(a, s);
                return d instanceof Promise
                  ? d.then(($) => An($, r.out, s))
                  : An(d, r.out, s);
              });
          });
        function An(e, r, a) {
          return e.issues.length
            ? ((e.aborted = !0), e)
            : r._zod.run(
                { value: e.value, issues: e.issues, fallback: e.fallback },
                a,
              );
        }
        const Gr = T.xI("$ZodCodec", (e, r) => {
          ke.init(e, r),
            p.gJ(e._zod, "values", () => r.in._zod.values),
            p.gJ(e._zod, "optin", () => r.in._zod.optin),
            p.gJ(e._zod, "optout", () => r.out._zod.optout),
            p.gJ(e._zod, "propValues", () => r.in._zod.propValues),
            (e._zod.parse = (a, s) => {
              if ((s.direction || "forward") === "forward") {
                const $ = r.in._zod.run(a, s);
                return $ instanceof Promise
                  ? $.then((I) => ar(I, r, s))
                  : ar($, r, s);
              } else {
                const $ = r.out._zod.run(a, s);
                return $ instanceof Promise
                  ? $.then((I) => ar(I, r, s))
                  : ar($, r, s);
              }
            });
        });
        function ar(e, r, a) {
          if (e.issues.length) return (e.aborted = !0), e;
          if ((a.direction || "forward") === "forward") {
            const d = r.transform(e.value, e);
            return d instanceof Promise
              ? d.then(($) => jn(e, $, r.out, a))
              : jn(e, d, r.out, a);
          } else {
            const d = r.reverseTransform(e.value, e);
            return d instanceof Promise
              ? d.then(($) => jn(e, $, r.in, a))
              : jn(e, d, r.in, a);
          }
        }
        function jn(e, r, a, s) {
          return e.issues.length
            ? ((e.aborted = !0), e)
            : a._zod.run({ value: r, issues: e.issues }, s);
        }
        const Ps = null,
          Tn = T.xI("$ZodReadonly", (e, r) => {
            ke.init(e, r),
              p.gJ(e._zod, "propValues", () => r.innerType._zod.propValues),
              p.gJ(e._zod, "values", () => r.innerType._zod.values),
              p.gJ(e._zod, "optin", () => r.innerType?._zod?.optin),
              p.gJ(e._zod, "optout", () => r.innerType?._zod?.optout),
              (e._zod.parse = (a, s) => {
                if (s.direction === "backward")
                  return r.innerType._zod.run(a, s);
                const d = r.innerType._zod.run(a, s);
                return d instanceof Promise ? d.then(In) : In(d);
              });
          });
        function In(e) {
          return (e.value = Object.freeze(e.value)), e;
        }
        const Os = null,
          Us = null,
          Ns = null,
          As = null,
          Ea = T.xI("$ZodCustom", (e, r) => {
            D.init(e, r),
              ke.init(e, r),
              (e._zod.parse = (a, s) => a),
              (e._zod.check = (a) => {
                const s = a.value,
                  d = r.fn(s);
                if (d instanceof Promise) return d.then(($) => cr($, a, s, e));
                cr(d, a, s, e);
              });
          });
        function cr(e, r, a, s) {
          if (!e) {
            const d = {
              code: "custom",
              input: a,
              inst: s,
              path: [...(s._zod.def.path ?? [])],
              continue: !s._zod.def.abort,
            };
            s._zod.def.params && (d.params = s._zod.def.params),
              r.issues.push(p.sn(d));
          }
        }
        var sr;
        const Gi = Symbol("ZodOutput"),
          Pa = Symbol("ZodInput");
        class Oa {
          constructor() {
            (this._map = new WeakMap()), (this._idmap = new Map());
          }
          add(r, ...a) {
            const s = a[0];
            return (
              this._map.set(r, s),
              s &&
                typeof s == "object" &&
                "id" in s &&
                this._idmap.set(s.id, r),
              this
            );
          }
          clear() {
            return (this._map = new WeakMap()), (this._idmap = new Map()), this;
          }
          remove(r) {
            const a = this._map.get(r);
            return (
              a &&
                typeof a == "object" &&
                "id" in a &&
                this._idmap.delete(a.id),
              this._map.delete(r),
              this
            );
          }
          get(r) {
            const a = r._zod.parent;
            if (a) {
              const s = { ...(this.get(a) ?? {}) };
              delete s.id;
              const d = { ...s, ...this._map.get(r) };
              return Object.keys(d).length ? d : void 0;
            }
            return this._map.get(r);
          }
          has(r) {
            return this._map.has(r);
          }
        }
        function Ua() {
          return new Oa();
        }
        (sr = globalThis).__zod_globalRegistry ??
          (sr.__zod_globalRegistry = Ua());
        const Tt = globalThis.__zod_globalRegistry;
        function Na(e, r) {
          return new e({ type: "string", ...p.A2(r) });
        }
        function Aa(e, r) {
          return new e({ type: "string", coerce: !0, ...p.A2(r) });
        }
        function ja(e, r) {
          return new e({
            type: "string",
            format: "email",
            check: "string_format",
            abort: !1,
            ...p.A2(r),
          });
        }
        function Wi(e, r) {
          return new e({
            type: "string",
            format: "guid",
            check: "string_format",
            abort: !1,
            ...p.A2(r),
          });
        }
        function Ta(e, r) {
          return new e({
            type: "string",
            format: "uuid",
            check: "string_format",
            abort: !1,
            ...p.A2(r),
          });
        }
        function Ca(e, r) {
          return new e({
            type: "string",
            format: "uuid",
            check: "string_format",
            abort: !1,
            version: "v4",
            ...p.A2(r),
          });
        }
        function Ji(e, r) {
          return new e({
            type: "string",
            format: "uuid",
            check: "string_format",
            abort: !1,
            version: "v6",
            ...p.A2(r),
          });
        }
        function Ra(e, r) {
          return new e({
            type: "string",
            format: "uuid",
            check: "string_format",
            abort: !1,
            version: "v7",
            ...p.A2(r),
          });
        }
        function Ba(e, r) {
          return new e({
            type: "string",
            format: "url",
            check: "string_format",
            abort: !1,
            ...p.A2(r),
          });
        }
        function Za(e, r) {
          return new e({
            type: "string",
            format: "emoji",
            check: "string_format",
            abort: !1,
            ...p.A2(r),
          });
        }
        function Fa(e, r) {
          return new e({
            type: "string",
            format: "nanoid",
            check: "string_format",
            abort: !1,
            ...p.A2(r),
          });
        }
        function La(e, r) {
          return new e({
            type: "string",
            format: "cuid",
            check: "string_format",
            abort: !1,
            ...p.A2(r),
          });
        }
        function Ma(e, r) {
          return new e({
            type: "string",
            format: "cuid2",
            check: "string_format",
            abort: !1,
            ...p.A2(r),
          });
        }
        function Wr(e, r) {
          return new e({
            type: "string",
            format: "ulid",
            check: "string_format",
            abort: !1,
            ...p.A2(r),
          });
        }
        function Ga(e, r) {
          return new e({
            type: "string",
            format: "xid",
            check: "string_format",
            abort: !1,
            ...p.A2(r),
          });
        }
        function Jr(e, r) {
          return new e({
            type: "string",
            format: "ksuid",
            check: "string_format",
            abort: !1,
            ...p.A2(r),
          });
        }
        function Vi(e, r) {
          return new e({
            type: "string",
            format: "ipv4",
            check: "string_format",
            abort: !1,
            ...p.A2(r),
          });
        }
        function Wa(e, r) {
          return new e({
            type: "string",
            format: "ipv6",
            check: "string_format",
            abort: !1,
            ...p.A2(r),
          });
        }
        function Ja(e, r) {
          return new e({
            type: "string",
            format: "mac",
            check: "string_format",
            abort: !1,
            ...util.normalizeParams(r),
          });
        }
        function js(e, r) {
          return new e({
            type: "string",
            format: "cidrv4",
            check: "string_format",
            abort: !1,
            ...p.A2(r),
          });
        }
        function Ts(e, r) {
          return new e({
            type: "string",
            format: "cidrv6",
            check: "string_format",
            abort: !1,
            ...p.A2(r),
          });
        }
        function Va(e, r) {
          return new e({
            type: "string",
            format: "base64",
            check: "string_format",
            abort: !1,
            ...p.A2(r),
          });
        }
        function Ka(e, r) {
          return new e({
            type: "string",
            format: "base64url",
            check: "string_format",
            abort: !1,
            ...p.A2(r),
          });
        }
        function Vr(e, r) {
          return new e({
            type: "string",
            format: "e164",
            check: "string_format",
            abort: !1,
            ...p.A2(r),
          });
        }
        function Cn(e, r) {
          return new e({
            type: "string",
            format: "jwt",
            check: "string_format",
            abort: !1,
            ...p.A2(r),
          });
        }
        const Ha = {
          Any: null,
          Minute: -1,
          Second: 0,
          Millisecond: 3,
          Microsecond: 6,
        };
        function un(e, r) {
          return new e({
            type: "string",
            format: "datetime",
            check: "string_format",
            offset: !1,
            local: !1,
            precision: null,
            ...p.A2(r),
          });
        }
        function Rn(e, r) {
          return new e({
            type: "string",
            format: "date",
            check: "string_format",
            ...p.A2(r),
          });
        }
        function Ki(e, r) {
          return new e({
            type: "string",
            format: "time",
            check: "string_format",
            precision: null,
            ...p.A2(r),
          });
        }
        function Kr(e, r) {
          return new e({
            type: "string",
            format: "duration",
            check: "string_format",
            ...p.A2(r),
          });
        }
        function Hr(e, r) {
          return new e({ type: "number", checks: [], ...p.A2(r) });
        }
        function Hi(e, r) {
          return new e({ type: "number", coerce: !0, checks: [], ...p.A2(r) });
        }
        function qa(e, r) {
          return new e({
            type: "number",
            check: "number_format",
            abort: !1,
            format: "safeint",
            ...p.A2(r),
          });
        }
        function Xa(e, r) {
          return new e({
            type: "number",
            check: "number_format",
            abort: !1,
            format: "float32",
            ...util.normalizeParams(r),
          });
        }
        function Cs(e, r) {
          return new e({
            type: "number",
            check: "number_format",
            abort: !1,
            format: "float64",
            ...util.normalizeParams(r),
          });
        }
        function Rs(e, r) {
          return new e({
            type: "number",
            check: "number_format",
            abort: !1,
            format: "int32",
            ...util.normalizeParams(r),
          });
        }
        function Bs(e, r) {
          return new e({
            type: "number",
            check: "number_format",
            abort: !1,
            format: "uint32",
            ...util.normalizeParams(r),
          });
        }
        function Zs(e, r) {
          return new e({ type: "boolean", ...util.normalizeParams(r) });
        }
        function Fs(e, r) {
          return new e({ type: "boolean", coerce: !0, ...p.A2(r) });
        }
        function Ls(e, r) {
          return new e({ type: "bigint", ...util.normalizeParams(r) });
        }
        function qi(e, r) {
          return new e({ type: "bigint", coerce: !0, ...p.A2(r) });
        }
        function Ms(e, r) {
          return new e({
            type: "bigint",
            check: "bigint_format",
            abort: !1,
            format: "int64",
            ...util.normalizeParams(r),
          });
        }
        function Gs(e, r) {
          return new e({
            type: "bigint",
            check: "bigint_format",
            abort: !1,
            format: "uint64",
            ...util.normalizeParams(r),
          });
        }
        function Ws(e, r) {
          return new e({ type: "symbol", ...util.normalizeParams(r) });
        }
        function rl(e, r) {
          return new e({ type: "undefined", ...util.normalizeParams(r) });
        }
        function Js(e, r) {
          return new e({ type: "null", ...util.normalizeParams(r) });
        }
        function Vs(e) {
          return new e({ type: "any" });
        }
        function Ya(e) {
          return new e({ type: "unknown" });
        }
        function Qa(e, r) {
          return new e({ type: "never", ...p.A2(r) });
        }
        function Ks(e, r) {
          return new e({ type: "void", ...util.normalizeParams(r) });
        }
        function Hs(e, r) {
          return new e({ type: "date", ...util.normalizeParams(r) });
        }
        function Bn(e, r) {
          return new e({ type: "date", coerce: !0, ...p.A2(r) });
        }
        function qr(e, r) {
          return new e({ type: "nan", ...util.normalizeParams(r) });
        }
        function ln(e, r) {
          return new Y({
            check: "less_than",
            ...p.A2(r),
            value: e,
            inclusive: !1,
          });
        }
        function Vt(e, r) {
          return new Y({
            check: "less_than",
            ...p.A2(r),
            value: e,
            inclusive: !0,
          });
        }
        function Zn(e, r) {
          return new ae({
            check: "greater_than",
            ...p.A2(r),
            value: e,
            inclusive: !1,
          });
        }
        function Ct(e, r) {
          return new ae({
            check: "greater_than",
            ...p.A2(r),
            value: e,
            inclusive: !0,
          });
        }
        function qs(e) {
          return Zn(0, e);
        }
        function il(e) {
          return ln(0, e);
        }
        function Xs(e) {
          return Vt(0, e);
        }
        function Ys(e) {
          return Ct(0, e);
        }
        function Xr(e, r) {
          return new X({ check: "multiple_of", ...p.A2(r), value: e });
        }
        function Qs(e, r) {
          return new checks.$ZodCheckMaxSize({
            check: "max_size",
            ...util.normalizeParams(r),
            maximum: e,
          });
        }
        function eu(e, r) {
          return new checks.$ZodCheckMinSize({
            check: "min_size",
            ...util.normalizeParams(r),
            minimum: e,
          });
        }
        function ol(e, r) {
          return new checks.$ZodCheckSizeEquals({
            check: "size_equals",
            ...util.normalizeParams(r),
            size: e,
          });
        }
        function Xi(e, r) {
          return new xr({ check: "max_length", ...p.A2(r), maximum: e });
        }
        function ur(e, r) {
          return new wr({ check: "min_length", ...p.A2(r), minimum: e });
        }
        function Yi(e, r) {
          return new tr({ check: "length_equals", ...p.A2(r), length: e });
        }
        function Yr(e, r) {
          return new ki({
            check: "string_format",
            format: "regex",
            ...p.A2(r),
            pattern: e,
          });
        }
        function ec(e) {
          return new Sr({
            check: "string_format",
            format: "lowercase",
            ...p.A2(e),
          });
        }
        function Qi(e) {
          return new Ot({
            check: "string_format",
            format: "uppercase",
            ...p.A2(e),
          });
        }
        function eo(e, r) {
          return new kr({
            check: "string_format",
            format: "includes",
            ...p.A2(r),
            includes: e,
          });
        }
        function to(e, r) {
          return new it({
            check: "string_format",
            format: "starts_with",
            ...p.A2(r),
            prefix: e,
          });
        }
        function tc(e, r) {
          return new zr({
            check: "string_format",
            format: "ends_with",
            ...p.A2(r),
            suffix: e,
          });
        }
        function tu(e, r, a) {
          return new checks.$ZodCheckProperty({
            check: "property",
            property: e,
            schema: r,
            ...util.normalizeParams(a),
          });
        }
        function nc(e, r) {
          return new checks.$ZodCheckMimeType({
            check: "mime_type",
            mime: e,
            ...util.normalizeParams(r),
          });
        }
        function xn(e) {
          return new Er({ check: "overwrite", tx: e });
        }
        function no(e) {
          return xn((r) => r.normalize(e));
        }
        function rc() {
          return xn((e) => e.trim());
        }
        function ic() {
          return xn((e) => e.toLowerCase());
        }
        function oc() {
          return xn((e) => e.toUpperCase());
        }
        function ac() {
          return xn((e) => p.Yv(e));
        }
        function Fn(e, r, a) {
          return new e({ type: "array", element: r, ...p.A2(a) });
        }
        function nu(e, r, a) {
          return new e({
            type: "union",
            options: r,
            ...util.normalizeParams(a),
          });
        }
        function cc(e, r, a) {
          return new e({
            type: "union",
            options: r,
            inclusive: !1,
            ...util.normalizeParams(a),
          });
        }
        function ro(e, r, a, s) {
          return new e({
            type: "union",
            options: a,
            discriminator: r,
            ...util.normalizeParams(s),
          });
        }
        function ru(e, r, a) {
          return new e({ type: "intersection", left: r, right: a });
        }
        function iu(e, r, a, s) {
          const d = a instanceof schemas.$ZodType,
            $ = d ? s : a,
            I = d ? a : null;
          return new e({
            type: "tuple",
            items: r,
            rest: I,
            ...util.normalizeParams($),
          });
        }
        function sc(e, r, a, s) {
          return new e({
            type: "record",
            keyType: r,
            valueType: a,
            ...util.normalizeParams(s),
          });
        }
        function uc(e, r, a, s) {
          return new e({
            type: "map",
            keyType: r,
            valueType: a,
            ...util.normalizeParams(s),
          });
        }
        function ou(e, r, a) {
          return new e({
            type: "set",
            valueType: r,
            ...util.normalizeParams(a),
          });
        }
        function au(e, r, a) {
          const s = Array.isArray(r)
            ? Object.fromEntries(r.map((d) => [d, d]))
            : r;
          return new e({
            type: "enum",
            entries: s,
            ...util.normalizeParams(a),
          });
        }
        function lc(e, r, a) {
          return new e({
            type: "enum",
            entries: r,
            ...util.normalizeParams(a),
          });
        }
        function cu(e, r, a) {
          return new e({
            type: "literal",
            values: Array.isArray(r) ? r : [r],
            ...util.normalizeParams(a),
          });
        }
        function io(e, r) {
          return new e({ type: "file", ...util.normalizeParams(r) });
        }
        function dc(e, r) {
          return new e({ type: "transform", transform: r });
        }
        function oo(e, r) {
          return new e({ type: "optional", innerType: r });
        }
        function su(e, r) {
          return new e({ type: "nullable", innerType: r });
        }
        function ao(e, r, a) {
          return new e({
            type: "default",
            innerType: r,
            get defaultValue() {
              return typeof a == "function" ? a() : util.shallowClone(a);
            },
          });
        }
        function uu(e, r, a) {
          return new e({
            type: "nonoptional",
            innerType: r,
            ...util.normalizeParams(a),
          });
        }
        function lu(e, r) {
          return new e({ type: "success", innerType: r });
        }
        function du(e, r, a) {
          return new e({
            type: "catch",
            innerType: r,
            catchValue: typeof a == "function" ? a : () => a,
          });
        }
        function fc(e, r, a) {
          return new e({ type: "pipe", in: r, out: a });
        }
        function fu(e, r) {
          return new e({ type: "readonly", innerType: r });
        }
        function pu(e, r, a) {
          return new e({
            type: "template_literal",
            parts: r,
            ...util.normalizeParams(a),
          });
        }
        function mu(e, r) {
          return new e({ type: "lazy", getter: r });
        }
        function Ln(e, r) {
          return new e({ type: "promise", innerType: r });
        }
        function Mn(e, r, a) {
          const s = util.normalizeParams(a);
          return (
            s.abort ?? (s.abort = !0),
            new e({ type: "custom", check: "custom", fn: r, ...s })
          );
        }
        function Qr(e, r, a) {
          return new e({ type: "custom", check: "custom", fn: r, ...p.A2(a) });
        }
        function pc(e, r) {
          const a = co(
            (s) => (
              (s.addIssue = (d) => {
                if (typeof d == "string")
                  s.issues.push(p.sn(d, s.value, a._zod.def));
                else {
                  const $ = d;
                  $.fatal && ($.continue = !1),
                    $.code ?? ($.code = "custom"),
                    $.input ?? ($.input = s.value),
                    $.inst ?? ($.inst = a),
                    $.continue ?? ($.continue = !a._zod.def.abort),
                    s.issues.push(p.sn($));
                }
              }),
              e(s.value, s)
            ),
            r,
          );
          return a;
        }
        function co(e, r) {
          const a = new D({ check: "custom", ...p.A2(r) });
          return (a._zod.check = e), a;
        }
        function mc(e) {
          const r = new D({ check: "describe" });
          return (
            (r._zod.onattach = [
              (a) => {
                const s = Tt.get(a) ?? {};
                Tt.add(a, { ...s, description: e });
              },
            ]),
            (r._zod.check = () => {}),
            r
          );
        }
        function Gn(e) {
          const r = new D({ check: "meta" });
          return (
            (r._zod.onattach = [
              (a) => {
                const s = Tt.get(a) ?? {};
                Tt.add(a, { ...s, ...e });
              },
            ]),
            (r._zod.check = () => {}),
            r
          );
        }
        function gc(e, r) {
          const a = p.A2(r);
          let s = a.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
            d = a.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
          a.case !== "sensitive" &&
            ((s = s.map((Q) => (typeof Q == "string" ? Q.toLowerCase() : Q))),
            (d = d.map((Q) => (typeof Q == "string" ? Q.toLowerCase() : Q))));
          const $ = new Set(s),
            I = new Set(d),
            N = e.Codec ?? Gr,
            B = e.Boolean ?? Tr,
            L = e.String ?? sn,
            V = new L({ type: "string", error: a.error }),
            ne = new B({ type: "boolean", error: a.error }),
            ie = new N({
              type: "pipe",
              in: V,
              out: ne,
              transform: (Q, Ie) => {
                let Xt = Q;
                return (
                  a.case !== "sensitive" && (Xt = Xt.toLowerCase()),
                  $.has(Xt)
                    ? !0
                    : I.has(Xt)
                      ? !1
                      : (Ie.issues.push({
                          code: "invalid_value",
                          expected: "stringbool",
                          values: [...$, ...I],
                          input: Ie.value,
                          inst: ie,
                          continue: !1,
                        }),
                        {})
                );
              },
              reverseTransform: (Q, Ie) =>
                Q === !0 ? s[0] || "true" : d[0] || "false",
              error: a.error,
            });
          return ie;
        }
        function gu(e, r, a, s = {}) {
          const d = util.normalizeParams(s),
            $ = {
              ...util.normalizeParams(s),
              check: "string_format",
              type: "string",
              format: r,
              fn: typeof a == "function" ? a : (N) => a.test(N),
              ...d,
            };
          return a instanceof RegExp && ($.pattern = a), new e($);
        }
        function vc(e) {
          let r = e?.target ?? "draft-2020-12";
          return (
            r === "draft-4" && (r = "draft-04"),
            r === "draft-7" && (r = "draft-07"),
            {
              processors: e.processors ?? {},
              metadataRegistry: e?.metadata ?? Tt,
              target: r,
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
        function ye(e, r, a = { path: [], schemaPath: [] }) {
          var s;
          const d = e._zod.def,
            $ = r.seen.get(e);
          if ($)
            return (
              $.count++,
              a.schemaPath.includes(e) && ($.cycle = a.path),
              $.schema
            );
          const I = { schema: {}, count: 1, cycle: void 0, path: a.path };
          r.seen.set(e, I);
          const N = e._zod.toJSONSchema?.();
          if (N) I.schema = N;
          else {
            const V = { ...a, schemaPath: [...a.schemaPath, e], path: a.path };
            if (e._zod.processJSONSchema)
              e._zod.processJSONSchema(r, I.schema, V);
            else {
              const ie = I.schema,
                Q = r.processors[d.type];
              if (!Q)
                throw new Error(
                  `[toJSONSchema]: Non-representable type encountered: ${d.type}`,
                );
              Q(e, r, ie, V);
            }
            const ne = e._zod.parent;
            ne &&
              (I.ref || (I.ref = ne),
              ye(ne, r, V),
              (r.seen.get(ne).isParent = !0));
          }
          const B = r.metadataRegistry.get(e);
          return (
            B && Object.assign(I.schema, B),
            r.io === "input" &&
              Qe(e) &&
              (delete I.schema.examples, delete I.schema.default),
            r.io === "input" &&
              "_prefault" in I.schema &&
              ((s = I.schema).default ?? (s.default = I.schema._prefault)),
            delete I.schema._prefault,
            r.seen.get(e).schema
          );
        }
        function lr(e, r) {
          const a = e.seen.get(r);
          if (!a) throw new Error("Unprocessed schema. This is a bug in Zod.");
          const s = new Map();
          for (const I of e.seen.entries()) {
            const N = e.metadataRegistry.get(I[0])?.id;
            if (N) {
              const B = s.get(N);
              if (B && B !== I[0])
                throw new Error(
                  `Duplicate schema id "${N}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
                );
              s.set(N, I[0]);
            }
          }
          const d = (I) => {
              const N = e.target === "draft-2020-12" ? "$defs" : "definitions";
              if (e.external) {
                const ne = e.external.registry.get(I[0])?.id,
                  ie = e.external.uri ?? ((Ie) => Ie);
                if (ne) return { ref: ie(ne) };
                const Q =
                  I[1].defId ?? I[1].schema.id ?? `schema${e.counter++}`;
                return (
                  (I[1].defId = Q),
                  { defId: Q, ref: `${ie("__shared")}#/${N}/${Q}` }
                );
              }
              if (I[1] === a) return { ref: "#" };
              const L = `#/${N}/`,
                V = I[1].schema.id ?? `__schema${e.counter++}`;
              return { defId: V, ref: L + V };
            },
            $ = (I) => {
              if (I[1].schema.$ref) return;
              const N = I[1],
                { ref: B, defId: L } = d(I);
              (N.def = { ...N.schema }), L && (N.defId = L);
              const V = N.schema;
              for (const ne in V) delete V[ne];
              V.$ref = B;
            };
          if (e.cycles === "throw")
            for (const I of e.seen.entries()) {
              const N = I[1];
              if (N.cycle)
                throw new Error(`Cycle detected: #/${N.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
            }
          for (const I of e.seen.entries()) {
            const N = I[1];
            if (r === I[0]) {
              $(I);
              continue;
            }
            if (e.external) {
              const L = e.external.registry.get(I[0])?.id;
              if (r !== I[0] && L) {
                $(I);
                continue;
              }
            }
            if (e.metadataRegistry.get(I[0])?.id) {
              $(I);
              continue;
            }
            if (N.cycle) {
              $(I);
              continue;
            }
            if (N.count > 1 && e.reused === "ref") {
              $(I);
              continue;
            }
          }
        }
        function ei(e, r) {
          const a = e.seen.get(r);
          if (!a) throw new Error("Unprocessed schema. This is a bug in Zod.");
          const s = (N) => {
            const B = e.seen.get(N);
            if (B.ref === null) return;
            const L = B.def ?? B.schema,
              V = { ...L },
              ne = B.ref;
            if (((B.ref = null), ne)) {
              s(ne);
              const Q = e.seen.get(ne),
                Ie = Q.schema;
              if (
                (Ie.$ref &&
                (e.target === "draft-07" ||
                  e.target === "draft-04" ||
                  e.target === "openapi-3.0")
                  ? ((L.allOf = L.allOf ?? []), L.allOf.push(Ie))
                  : Object.assign(L, Ie),
                Object.assign(L, V),
                N._zod.parent === ne)
              )
                for (const He in L)
                  He === "$ref" || He === "allOf" || He in V || delete L[He];
              if (Ie.$ref && Q.def)
                for (const He in L)
                  He === "$ref" ||
                    He === "allOf" ||
                    (He in Q.def &&
                      JSON.stringify(L[He]) === JSON.stringify(Q.def[He]) &&
                      delete L[He]);
            }
            const ie = N._zod.parent;
            if (ie && ie !== ne) {
              s(ie);
              const Q = e.seen.get(ie);
              if (Q?.schema.$ref && ((L.$ref = Q.schema.$ref), Q.def))
                for (const Ie in L)
                  Ie === "$ref" ||
                    Ie === "allOf" ||
                    (Ie in Q.def &&
                      JSON.stringify(L[Ie]) === JSON.stringify(Q.def[Ie]) &&
                      delete L[Ie]);
            }
            e.override({ zodSchema: N, jsonSchema: L, path: B.path ?? [] });
          };
          for (const N of [...e.seen.entries()].reverse()) s(N[0]);
          const d = {};
          if (
            (e.target === "draft-2020-12"
              ? (d.$schema = "https://json-schema.org/draft/2020-12/schema")
              : e.target === "draft-07"
                ? (d.$schema = "http://json-schema.org/draft-07/schema#")
                : e.target === "draft-04"
                  ? (d.$schema = "http://json-schema.org/draft-04/schema#")
                  : e.target,
            e.external?.uri)
          ) {
            const N = e.external.registry.get(r)?.id;
            if (!N) throw new Error("Schema is missing an `id` property");
            d.$id = e.external.uri(N);
          }
          Object.assign(d, a.def ?? a.schema);
          const $ = e.metadataRegistry.get(r)?.id;
          $ !== void 0 && d.id === $ && delete d.id;
          const I = e.external?.defs ?? {};
          for (const N of e.seen.entries()) {
            const B = N[1];
            B.def &&
              B.defId &&
              (B.def.id === B.defId && delete B.def.id, (I[B.defId] = B.def));
          }
          e.external ||
            (Object.keys(I).length > 0 &&
              (e.target === "draft-2020-12"
                ? (d.$defs = I)
                : (d.definitions = I)));
          try {
            const N = JSON.parse(JSON.stringify(d));
            return (
              Object.defineProperty(N, "~standard", {
                value: {
                  ...r["~standard"],
                  jsonSchema: {
                    input: Wn(r, "input", e.processors),
                    output: Wn(r, "output", e.processors),
                  },
                },
                enumerable: !1,
                writable: !1,
              }),
              N
            );
          } catch {
            throw new Error("Error converting schema to JSON.");
          }
        }
        function Qe(e, r) {
          const a = r ?? { seen: new Set() };
          if (a.seen.has(e)) return !1;
          a.seen.add(e);
          const s = e._zod.def;
          if (s.type === "transform") return !0;
          if (s.type === "array") return Qe(s.element, a);
          if (s.type === "set") return Qe(s.valueType, a);
          if (s.type === "lazy") return Qe(s.getter(), a);
          if (
            s.type === "promise" ||
            s.type === "optional" ||
            s.type === "nonoptional" ||
            s.type === "nullable" ||
            s.type === "readonly" ||
            s.type === "default" ||
            s.type === "prefault"
          )
            return Qe(s.innerType, a);
          if (s.type === "intersection") return Qe(s.left, a) || Qe(s.right, a);
          if (s.type === "record" || s.type === "map")
            return Qe(s.keyType, a) || Qe(s.valueType, a);
          if (s.type === "pipe")
            return e._zod.traits.has("$ZodCodec")
              ? !0
              : Qe(s.in, a) || Qe(s.out, a);
          if (s.type === "object") {
            for (const d in s.shape) if (Qe(s.shape[d], a)) return !0;
            return !1;
          }
          if (s.type === "union") {
            for (const d of s.options) if (Qe(d, a)) return !0;
            return !1;
          }
          if (s.type === "tuple") {
            for (const d of s.items) if (Qe(d, a)) return !0;
            return !!(s.rest && Qe(s.rest, a));
          }
          return !1;
        }
        const so =
            (e, r = {}) =>
            (a) => {
              const s = vc({ ...a, processors: r });
              return ye(e, s), lr(s, e), ei(s, e);
            },
          Wn =
            (e, r, a = {}) =>
            (s) => {
              const { libraryOptions: d, target: $ } = s ?? {},
                I = vc({ ...(d ?? {}), target: $, io: r, processors: a });
              return ye(e, I), lr(I, e), ei(I, e);
            },
          Jn = {
            guid: "uuid",
            url: "uri",
            datetime: "date-time",
            json_string: "json-string",
            regex: "",
          },
          ti = (e, r, a, s) => {
            const d = a;
            d.type = "string";
            const {
              minimum: $,
              maximum: I,
              format: N,
              patterns: B,
              contentEncoding: L,
            } = e._zod.bag;
            if (
              (typeof $ == "number" && (d.minLength = $),
              typeof I == "number" && (d.maxLength = I),
              N &&
                ((d.format = Jn[N] ?? N),
                d.format === "" && delete d.format,
                N === "time" && delete d.format),
              L && (d.contentEncoding = L),
              B && B.size > 0)
            ) {
              const V = [...B];
              V.length === 1
                ? (d.pattern = V[0].source)
                : V.length > 1 &&
                  (d.allOf = [
                    ...V.map((ne) => ({
                      ...(r.target === "draft-07" ||
                      r.target === "draft-04" ||
                      r.target === "openapi-3.0"
                        ? { type: "string" }
                        : {}),
                      pattern: ne.source,
                    })),
                  ]);
            }
          },
          uo = (e, r, a, s) => {
            const d = a,
              {
                minimum: $,
                maximum: I,
                format: N,
                multipleOf: B,
                exclusiveMaximum: L,
                exclusiveMinimum: V,
              } = e._zod.bag;
            typeof N == "string" && N.includes("int")
              ? (d.type = "integer")
              : (d.type = "number");
            const ne =
                typeof V == "number" && V >= ($ ?? Number.NEGATIVE_INFINITY),
              ie = typeof L == "number" && L <= (I ?? Number.POSITIVE_INFINITY),
              Q = r.target === "draft-04" || r.target === "openapi-3.0";
            ne
              ? Q
                ? ((d.minimum = V), (d.exclusiveMinimum = !0))
                : (d.exclusiveMinimum = V)
              : typeof $ == "number" && (d.minimum = $),
              ie
                ? Q
                  ? ((d.maximum = L), (d.exclusiveMaximum = !0))
                  : (d.exclusiveMaximum = L)
                : typeof I == "number" && (d.maximum = I),
              typeof B == "number" && (d.multipleOf = B);
          },
          lo = (e, r, a, s) => {
            a.type = "boolean";
          },
          fo = (e, r, a, s) => {
            if (r.unrepresentable === "throw")
              throw new Error("BigInt cannot be represented in JSON Schema");
          },
          ni = (e, r, a, s) => {
            if (r.unrepresentable === "throw")
              throw new Error("Symbols cannot be represented in JSON Schema");
          },
          Vn = (e, r, a, s) => {
            r.target === "openapi-3.0"
              ? ((a.type = "string"), (a.nullable = !0), (a.enum = [null]))
              : (a.type = "null");
          },
          vu = (e, r, a, s) => {
            if (r.unrepresentable === "throw")
              throw new Error("Undefined cannot be represented in JSON Schema");
          },
          hc = (e, r, a, s) => {
            if (r.unrepresentable === "throw")
              throw new Error("Void cannot be represented in JSON Schema");
          },
          po = (e, r, a, s) => {
            a.not = {};
          },
          yc = (e, r, a, s) => {},
          ri = (e, r, a, s) => {},
          ii = (e, r, a, s) => {
            if (r.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
          },
          mo = (e, r, a, s) => {
            const d = e._zod.def,
              $ = (0, p.w5)(d.entries);
            $.every((I) => typeof I == "number") && (a.type = "number"),
              $.every((I) => typeof I == "string") && (a.type = "string"),
              (a.enum = $);
          },
          bc = (e, r, a, s) => {
            const d = e._zod.def,
              $ = [];
            for (const I of d.values)
              if (I === void 0) {
                if (r.unrepresentable === "throw")
                  throw new Error(
                    "Literal `undefined` cannot be represented in JSON Schema",
                  );
              } else if (typeof I == "bigint") {
                if (r.unrepresentable === "throw")
                  throw new Error(
                    "BigInt literals cannot be represented in JSON Schema",
                  );
                $.push(Number(I));
              } else $.push(I);
            if ($.length !== 0)
              if ($.length === 1) {
                const I = $[0];
                (a.type = I === null ? "null" : typeof I),
                  r.target === "draft-04" || r.target === "openapi-3.0"
                    ? (a.enum = [I])
                    : (a.const = I);
              } else
                $.every((I) => typeof I == "number") && (a.type = "number"),
                  $.every((I) => typeof I == "string") && (a.type = "string"),
                  $.every((I) => typeof I == "boolean") && (a.type = "boolean"),
                  $.every((I) => I === null) && (a.type = "null"),
                  (a.enum = $);
          },
          $c = (e, r, a, s) => {
            if (r.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
          },
          oi = (e, r, a, s) => {
            const d = a,
              $ = e._zod.pattern;
            if (!$) throw new Error("Pattern not found in template literal");
            (d.type = "string"), (d.pattern = $.source);
          },
          _c = (e, r, a, s) => {
            const d = a,
              $ = {
                type: "string",
                format: "binary",
                contentEncoding: "binary",
              },
              { minimum: I, maximum: N, mime: B } = e._zod.bag;
            I !== void 0 && ($.minLength = I),
              N !== void 0 && ($.maxLength = N),
              B
                ? B.length === 1
                  ? (($.contentMediaType = B[0]), Object.assign(d, $))
                  : (Object.assign(d, $),
                    (d.anyOf = B.map((L) => ({ contentMediaType: L }))))
                : Object.assign(d, $);
          },
          Ic = (e, r, a, s) => {
            a.type = "boolean";
          },
          Kn = (e, r, a, s) => {
            if (r.unrepresentable === "throw")
              throw new Error(
                "Custom types cannot be represented in JSON Schema",
              );
          },
          xc = (e, r, a, s) => {
            if (r.unrepresentable === "throw")
              throw new Error(
                "Function types cannot be represented in JSON Schema",
              );
          },
          go = (e, r, a, s) => {
            if (r.unrepresentable === "throw")
              throw new Error(
                "Transforms cannot be represented in JSON Schema",
              );
          },
          vo = (e, r, a, s) => {
            if (r.unrepresentable === "throw")
              throw new Error("Map cannot be represented in JSON Schema");
          },
          wc = (e, r, a, s) => {
            if (r.unrepresentable === "throw")
              throw new Error("Set cannot be represented in JSON Schema");
          },
          ho = (e, r, a, s) => {
            const d = a,
              $ = e._zod.def,
              { minimum: I, maximum: N } = e._zod.bag;
            typeof I == "number" && (d.minItems = I),
              typeof N == "number" && (d.maxItems = N),
              (d.type = "array"),
              (d.items = ye($.element, r, {
                ...s,
                path: [...s.path, "items"],
              }));
          },
          Sc = (e, r, a, s) => {
            const d = a,
              $ = e._zod.def;
            (d.type = "object"), (d.properties = {});
            const I = $.shape;
            for (const L in I)
              d.properties[L] = ye(I[L], r, {
                ...s,
                path: [...s.path, "properties", L],
              });
            const N = new Set(Object.keys(I)),
              B = new Set(
                [...N].filter((L) => {
                  const V = $.shape[L]._zod;
                  return r.io === "input"
                    ? V.optin === void 0
                    : V.optout === void 0;
                }),
              );
            B.size > 0 && (d.required = Array.from(B)),
              $.catchall?._zod.def.type === "never"
                ? (d.additionalProperties = !1)
                : $.catchall
                  ? $.catchall &&
                    (d.additionalProperties = ye($.catchall, r, {
                      ...s,
                      path: [...s.path, "additionalProperties"],
                    }))
                  : r.io === "output" && (d.additionalProperties = !1);
          },
          yo = (e, r, a, s) => {
            const d = e._zod.def,
              $ = d.inclusive === !1,
              I = d.options.map((N, B) =>
                ye(N, r, { ...s, path: [...s.path, $ ? "oneOf" : "anyOf", B] }),
              );
            $ ? (a.oneOf = I) : (a.anyOf = I);
          },
          kc = (e, r, a, s) => {
            const d = e._zod.def,
              $ = ye(d.left, r, { ...s, path: [...s.path, "allOf", 0] }),
              I = ye(d.right, r, { ...s, path: [...s.path, "allOf", 1] }),
              N = (L) => "allOf" in L && Object.keys(L).length === 1,
              B = [...(N($) ? $.allOf : [$]), ...(N(I) ? I.allOf : [I])];
            a.allOf = B;
          },
          Hn = (e, r, a, s) => {
            const d = a,
              $ = e._zod.def;
            d.type = "array";
            const I = r.target === "draft-2020-12" ? "prefixItems" : "items",
              N =
                r.target === "draft-2020-12" || r.target === "openapi-3.0"
                  ? "items"
                  : "additionalItems",
              B = $.items.map((ie, Q) =>
                ye(ie, r, { ...s, path: [...s.path, I, Q] }),
              ),
              L = $.rest
                ? ye($.rest, r, {
                    ...s,
                    path: [
                      ...s.path,
                      N,
                      ...(r.target === "openapi-3.0" ? [$.items.length] : []),
                    ],
                  })
                : null;
            r.target === "draft-2020-12"
              ? ((d.prefixItems = B), L && (d.items = L))
              : r.target === "openapi-3.0"
                ? ((d.items = { anyOf: B }),
                  L && d.items.anyOf.push(L),
                  (d.minItems = B.length),
                  L || (d.maxItems = B.length))
                : ((d.items = B), L && (d.additionalItems = L));
            const { minimum: V, maximum: ne } = e._zod.bag;
            typeof V == "number" && (d.minItems = V),
              typeof ne == "number" && (d.maxItems = ne);
          },
          zc = (e, r, a, s) => {
            const d = a,
              $ = e._zod.def;
            d.type = "object";
            const I = $.keyType,
              B = I._zod.bag?.patterns;
            if ($.mode === "loose" && B && B.size > 0) {
              const V = ye($.valueType, r, {
                ...s,
                path: [...s.path, "patternProperties", "*"],
              });
              d.patternProperties = {};
              for (const ne of B) d.patternProperties[ne.source] = V;
            } else
              (r.target === "draft-07" || r.target === "draft-2020-12") &&
                (d.propertyNames = ye($.keyType, r, {
                  ...s,
                  path: [...s.path, "propertyNames"],
                })),
                (d.additionalProperties = ye($.valueType, r, {
                  ...s,
                  path: [...s.path, "additionalProperties"],
                }));
            const L = I._zod.values;
            if (L) {
              const V = [...L].filter(
                (ne) => typeof ne == "string" || typeof ne == "number",
              );
              V.length > 0 && (d.required = V);
            }
          },
          dr = (e, r, a, s) => {
            const d = e._zod.def,
              $ = ye(d.innerType, r, s),
              I = r.seen.get(e);
            r.target === "openapi-3.0"
              ? ((I.ref = d.innerType), (a.nullable = !0))
              : (a.anyOf = [$, { type: "null" }]);
          },
          bo = (e, r, a, s) => {
            const d = e._zod.def;
            ye(d.innerType, r, s);
            const $ = r.seen.get(e);
            $.ref = d.innerType;
          },
          wn = (e, r, a, s) => {
            const d = e._zod.def;
            ye(d.innerType, r, s);
            const $ = r.seen.get(e);
            ($.ref = d.innerType),
              (a.default = JSON.parse(JSON.stringify(d.defaultValue)));
          },
          $o = (e, r, a, s) => {
            const d = e._zod.def;
            ye(d.innerType, r, s);
            const $ = r.seen.get(e);
            ($.ref = d.innerType),
              r.io === "input" &&
                (a._prefault = JSON.parse(JSON.stringify(d.defaultValue)));
          },
          _o = (e, r, a, s) => {
            const d = e._zod.def;
            ye(d.innerType, r, s);
            const $ = r.seen.get(e);
            $.ref = d.innerType;
            let I;
            try {
              I = d.catchValue(void 0);
            } catch {
              throw new Error(
                "Dynamic catch values are not supported in JSON Schema",
              );
            }
            a.default = I;
          },
          fr = (e, r, a, s) => {
            const d = e._zod.def,
              $ = d.in._zod.traits.has("$ZodTransform"),
              I = r.io === "input" ? ($ ? d.out : d.in) : d.out;
            ye(I, r, s);
            const N = r.seen.get(e);
            N.ref = I;
          },
          ai = (e, r, a, s) => {
            const d = e._zod.def;
            ye(d.innerType, r, s);
            const $ = r.seen.get(e);
            ($.ref = d.innerType), (a.readOnly = !0);
          },
          Dc = (e, r, a, s) => {
            const d = e._zod.def;
            ye(d.innerType, r, s);
            const $ = r.seen.get(e);
            $.ref = d.innerType;
          },
          ci = (e, r, a, s) => {
            const d = e._zod.def;
            ye(d.innerType, r, s);
            const $ = r.seen.get(e);
            $.ref = d.innerType;
          },
          Io = {
            string: ti,
            number: uo,
            boolean: lo,
            bigint: fo,
            symbol: ni,
            null: Vn,
            undefined: vu,
            void: hc,
            never: po,
            any: yc,
            unknown: ri,
            date: ii,
            enum: mo,
            literal: bc,
            nan: $c,
            template_literal: oi,
            file: _c,
            success: Ic,
            custom: Kn,
            function: xc,
            transform: go,
            map: vo,
            set: wc,
            array: ho,
            object: Sc,
            union: yo,
            intersection: kc,
            tuple: Hn,
            record: zc,
            nullable: dr,
            nonoptional: bo,
            default: wn,
            prefault: $o,
            catch: _o,
            pipe: fr,
            readonly: ai,
            promise: Dc,
            optional: ci,
            lazy: (e, r, a, s) => {
              const d = e._zod.innerType;
              ye(d, r, s);
              const $ = r.seen.get(e);
              $.ref = d;
            },
          };
        function yu(e, r) {
          if ("_idmap" in e) {
            const s = e,
              d = initializeContext({ ...r, processors: Io }),
              $ = {};
            for (const B of s._idmap.entries()) {
              const [L, V] = B;
              process(V, d);
            }
            const I = {},
              N = { registry: s, uri: r?.uri, defs: $ };
            d.external = N;
            for (const B of s._idmap.entries()) {
              const [L, V] = B;
              extractDefs(d, V), (I[L] = finalize(d, V));
            }
            if (Object.keys($).length > 0) {
              const B = d.target === "draft-2020-12" ? "$defs" : "definitions";
              I.__shared = { [B]: $ };
            }
            return { schemas: I };
          }
          const a = initializeContext({ ...r, processors: Io });
          return process(e, a), extractDefs(a, e), finalize(a, e);
        }
        const Ec = T.xI("ZodISODateTime", (e, r) => {
          ia.init(e, r), Re.init(e, r);
        });
        function Pc(e) {
          return un(Ec, e);
        }
        const Oc = T.xI("ZodISODate", (e, r) => {
          oa.init(e, r), Re.init(e, r);
        });
        function Uc(e) {
          return Rn(Oc, e);
        }
        const xo = T.xI("ZodISOTime", (e, r) => {
          aa.init(e, r), Re.init(e, r);
        });
        function bu(e) {
          return Ki(xo, e);
        }
        const pr = T.xI("ZodISODuration", (e, r) => {
          jr.init(e, r), Re.init(e, r);
        });
        function wo(e) {
          return Kr(pr, e);
        }
        const So = (e, r) => {
            Pn.init(e, r),
              (e.name = "ZodError"),
              Object.defineProperties(e, {
                format: { value: (a) => Or(e, a) },
                flatten: { value: (a) => nr(e, a) },
                addIssue: {
                  value: (a) => {
                    e.issues.push(a),
                      (e.message = JSON.stringify(e.issues, p.k8, 2));
                  },
                },
                addIssues: {
                  value: (a) => {
                    e.issues.push(...a),
                      (e.message = JSON.stringify(e.issues, p.k8, 2));
                  },
                },
                isEmpty: {
                  get() {
                    return e.issues.length === 0;
                  },
                },
              });
          },
          $u = null,
          dt = T.xI("ZodError", So, { Parent: Error }),
          Nc = jt(dt),
          Ac = Be(dt),
          jc = lt(dt),
          Tc = vt(dt),
          Cc = C(dt),
          Rc = A(dt),
          si = o(dt),
          Bc = O(dt),
          Zc = q(dt),
          Fc = Oe(dt),
          Lc = Ye(dt),
          Mc = yn(dt),
          ko = new WeakMap();
        function qn(e, r, a) {
          const s = Object.getPrototypeOf(e);
          let d = ko.get(s);
          if ((d || ((d = new Set()), ko.set(s, d)), !d.has(r))) {
            d.add(r);
            for (const $ in a) {
              const I = a[$];
              Object.defineProperty(s, $, {
                configurable: !0,
                enumerable: !1,
                get() {
                  const N = I.bind(this);
                  return (
                    Object.defineProperty(this, $, {
                      configurable: !0,
                      writable: !0,
                      enumerable: !0,
                      value: N,
                    }),
                    N
                  );
                },
                set(N) {
                  Object.defineProperty(this, $, {
                    configurable: !0,
                    writable: !0,
                    enumerable: !0,
                    value: N,
                  });
                },
              });
            }
          }
        }
        const Ue = T.xI(
            "ZodType",
            (e, r) => (
              ke.init(e, r),
              Object.assign(e["~standard"], {
                jsonSchema: { input: Wn(e, "input"), output: Wn(e, "output") },
              }),
              (e.toJSONSchema = so(e, {})),
              (e.def = r),
              (e.type = r.type),
              Object.defineProperty(e, "_def", { value: r }),
              (e.parse = (a, s) => Nc(e, a, s, { callee: e.parse })),
              (e.safeParse = (a, s) => jc(e, a, s)),
              (e.parseAsync = async (a, s) =>
                Ac(e, a, s, { callee: e.parseAsync })),
              (e.safeParseAsync = async (a, s) => Tc(e, a, s)),
              (e.spa = e.safeParseAsync),
              (e.encode = (a, s) => Cc(e, a, s)),
              (e.decode = (a, s) => Rc(e, a, s)),
              (e.encodeAsync = async (a, s) => si(e, a, s)),
              (e.decodeAsync = async (a, s) => Bc(e, a, s)),
              (e.safeEncode = (a, s) => Zc(e, a, s)),
              (e.safeDecode = (a, s) => Fc(e, a, s)),
              (e.safeEncodeAsync = async (a, s) => Lc(e, a, s)),
              (e.safeDecodeAsync = async (a, s) => Mc(e, a, s)),
              qn(e, "ZodType", {
                check(...a) {
                  const s = this.def;
                  return this.clone(
                    p.zM(s, {
                      checks: [
                        ...(s.checks ?? []),
                        ...a.map((d) =>
                          typeof d == "function"
                            ? {
                                _zod: {
                                  check: d,
                                  def: { check: "custom" },
                                  onattach: [],
                                },
                              }
                            : d,
                        ),
                      ],
                    }),
                    { parent: !0 },
                  );
                },
                with(...a) {
                  return this.check(...a);
                },
                clone(a, s) {
                  return p.o8(this, a, s);
                },
                brand() {
                  return this;
                },
                register(a, s) {
                  return a.add(this, s), this;
                },
                refine(a, s) {
                  return this.check(ul(a, s));
                },
                superRefine(a, s) {
                  return this.check(ll(a, s));
                },
                overwrite(a) {
                  return this.check(xn(a));
                },
                optional() {
                  return W(this);
                },
                exactOptional() {
                  return oe(this);
                },
                nullable() {
                  return ce(this);
                },
                nullish() {
                  return W(ce(this));
                },
                nonoptional(a) {
                  return bt(this, a);
                },
                array() {
                  return kn(this);
                },
                or(a) {
                  return us([this, a]);
                },
                and(a) {
                  return Vo(this, a);
                },
                transform(a) {
                  return _i(this, M(a));
                },
                default(a) {
                  return Ee(this, a);
                },
                prefault(a) {
                  return ft(this, a);
                },
                catch(a) {
                  return Ut(this, a);
                },
                pipe(a) {
                  return _i(this, a);
                },
                readonly() {
                  return Qu(this);
                },
                describe(a) {
                  const s = this.clone();
                  return Tt.add(s, { description: a }), s;
                },
                meta(...a) {
                  if (a.length === 0) return Tt.get(this);
                  const s = this.clone();
                  return Tt.add(s, a[0]), s;
                },
                isOptional() {
                  return this.safeParse(void 0).success;
                },
                isNullable() {
                  return this.safeParse(null).success;
                },
                apply(a) {
                  return a(this);
                },
              }),
              Object.defineProperty(e, "description", {
                get() {
                  return Tt.get(e)?.description;
                },
                configurable: !0,
              }),
              e
            ),
          ),
          zo = T.xI("_ZodString", (e, r) => {
            sn.init(e, r),
              Ue.init(e, r),
              (e._zod.processJSONSchema = (s, d, $) => ti(e, s, d, $));
            const a = e._zod.bag;
            (e.format = a.format ?? null),
              (e.minLength = a.minimum ?? null),
              (e.maxLength = a.maximum ?? null),
              qn(e, "_ZodString", {
                regex(...s) {
                  return this.check(Yr(...s));
                },
                includes(...s) {
                  return this.check(eo(...s));
                },
                startsWith(...s) {
                  return this.check(to(...s));
                },
                endsWith(...s) {
                  return this.check(tc(...s));
                },
                min(...s) {
                  return this.check(ur(...s));
                },
                max(...s) {
                  return this.check(Xi(...s));
                },
                length(...s) {
                  return this.check(Yi(...s));
                },
                nonempty(...s) {
                  return this.check(ur(1, ...s));
                },
                lowercase(s) {
                  return this.check(ec(s));
                },
                uppercase(s) {
                  return this.check(Qi(s));
                },
                trim() {
                  return this.check(rc());
                },
                normalize(...s) {
                  return this.check(no(...s));
                },
                toLowerCase() {
                  return this.check(ic());
                },
                toUpperCase() {
                  return this.check(oc());
                },
                slugify() {
                  return this.check(ac());
                },
              });
          }),
          ui = T.xI("ZodString", (e, r) => {
            sn.init(e, r),
              zo.init(e, r),
              (e.email = (a) => e.check(ja(li, a))),
              (e.url = (a) => e.check(Ba(pi, a))),
              (e.jwt = (a) => e.check(Cn(jo, a))),
              (e.emoji = (a) => e.check(Za(Do, a))),
              (e.guid = (a) => e.check(Wi(di, a))),
              (e.uuid = (a) => e.check(Ta(Kt, a))),
              (e.uuidv4 = (a) => e.check(Ca(Kt, a))),
              (e.uuidv6 = (a) => e.check(Ji(Kt, a))),
              (e.uuidv7 = (a) => e.check(Ra(Kt, a))),
              (e.nanoid = (a) => e.check(Fa(Sn, a))),
              (e.guid = (a) => e.check(Wi(di, a))),
              (e.cuid = (a) => e.check(La(mi, a))),
              (e.cuid2 = (a) => e.check(Ma(Wc, a))),
              (e.ulid = (a) => e.check(Wr(Eo, a))),
              (e.base64 = (a) => e.check(Va(Xn, a))),
              (e.base64url = (a) => e.check(Ka(Hc, a))),
              (e.xid = (a) => e.check(Ga(Po, a))),
              (e.ksuid = (a) => e.check(Jr(Oo, a))),
              (e.ipv4 = (a) => e.check(Vi(Uo, a))),
              (e.ipv6 = (a) => e.check(Wa(No, a))),
              (e.cidrv4 = (a) => e.check(js(gr, a))),
              (e.cidrv6 = (a) => e.check(Ts(Ao, a))),
              (e.e164 = (a) => e.check(Vr(gi, a))),
              (e.datetime = (a) => e.check(Pc(a))),
              (e.date = (a) => e.check(Uc(a))),
              (e.time = (a) => e.check(bu(a))),
              (e.duration = (a) => e.check(wo(a)));
          });
        function mr(e) {
          return Na(ui, e);
        }
        const Re = T.xI("ZodStringFormat", (e, r) => {
            Te.init(e, r), zo.init(e, r);
          }),
          li = T.xI("ZodEmail", (e, r) => {
            On.init(e, r), Re.init(e, r);
          });
        function _u(e) {
          return core._email(li, e);
        }
        const di = T.xI("ZodGUID", (e, r) => {
          bn.init(e, r), Re.init(e, r);
        });
        function Iu(e) {
          return core._guid(di, e);
        }
        const Kt = T.xI("ZodUUID", (e, r) => {
          Di.init(e, r), Re.init(e, r);
        });
        function xu(e) {
          return core._uuid(Kt, e);
        }
        function wu(e) {
          return core._uuidv4(Kt, e);
        }
        function fi(e) {
          return core._uuidv6(Kt, e);
        }
        function Gc(e) {
          return core._uuidv7(Kt, e);
        }
        const pi = T.xI("ZodURL", (e, r) => {
          gs.init(e, r), Re.init(e, r);
        });
        function Su(e) {
          return core._url(pi, e);
        }
        function ku(e) {
          return core._url(pi, {
            protocol: core.regexes.httpProtocol,
            hostname: core.regexes.domain,
            ...util.normalizeParams(e),
          });
        }
        const Do = T.xI("ZodEmoji", (e, r) => {
          ta.init(e, r), Re.init(e, r);
        });
        function zu(e) {
          return core._emoji(Do, e);
        }
        const Sn = T.xI("ZodNanoID", (e, r) => {
          ht.init(e, r), Re.init(e, r);
        });
        function Du(e) {
          return core._nanoid(Sn, e);
        }
        const mi = T.xI("ZodCUID", (e, r) => {
          Ei.init(e, r), Re.init(e, r);
        });
        function Eu(e) {
          return core._cuid(mi, e);
        }
        const Wc = T.xI("ZodCUID2", (e, r) => {
          na.init(e, r), Re.init(e, r);
        });
        function Pu(e) {
          return core._cuid2(Wc, e);
        }
        const Eo = T.xI("ZodULID", (e, r) => {
          Ar.init(e, r), Re.init(e, r);
        });
        function al(e) {
          return core._ulid(Eo, e);
        }
        const Po = T.xI("ZodXID", (e, r) => {
          Pi.init(e, r), Re.init(e, r);
        });
        function Jc(e) {
          return core._xid(Po, e);
        }
        const Oo = T.xI("ZodKSUID", (e, r) => {
          ra.init(e, r), Re.init(e, r);
        });
        function Ou(e) {
          return core._ksuid(Oo, e);
        }
        const Uo = T.xI("ZodIPv4", (e, r) => {
          ca.init(e, r), Re.init(e, r);
        });
        function Uu(e) {
          return core._ipv4(Uo, e);
        }
        const Vc = null;
        function Nu(e) {
          return core._mac(Vc, e);
        }
        const No = T.xI("ZodIPv6", (e, r) => {
          Oi.init(e, r), Re.init(e, r);
        });
        function Au(e) {
          return core._ipv6(No, e);
        }
        const gr = T.xI("ZodCIDRv4", (e, r) => {
          sa.init(e, r), Re.init(e, r);
        });
        function Kc(e) {
          return core._cidrv4(gr, e);
        }
        const Ao = T.xI("ZodCIDRv6", (e, r) => {
          ua.init(e, r), Re.init(e, r);
        });
        function ju(e) {
          return core._cidrv6(Ao, e);
        }
        const Xn = T.xI("ZodBase64", (e, r) => {
          la.init(e, r), Re.init(e, r);
        });
        function Tu(e) {
          return core._base64(Xn, e);
        }
        const Hc = T.xI("ZodBase64URL", (e, r) => {
          rr.init(e, r), Re.init(e, r);
        });
        function Cu(e) {
          return core._base64url(Hc, e);
        }
        const gi = T.xI("ZodE164", (e, r) => {
          Jt.init(e, r), Re.init(e, r);
        });
        function qc(e) {
          return core._e164(gi, e);
        }
        const jo = T.xI("ZodJWT", (e, r) => {
          fa.init(e, r), Re.init(e, r);
        });
        function Ru(e) {
          return core._jwt(jo, e);
        }
        const vr = null;
        function Xc(e, r, a = {}) {
          return core._stringFormat(vr, e, r, a);
        }
        function Bu(e) {
          return core._stringFormat(vr, "hostname", core.regexes.hostname, e);
        }
        function Zu(e) {
          return core._stringFormat(vr, "hex", core.regexes.hex, e);
        }
        function cl(e, r) {
          const a = r?.enc ?? "hex",
            s = `${e}_${a}`,
            d = core.regexes[s];
          if (!d) throw new Error(`Unrecognized hash format: ${s}`);
          return core._stringFormat(vr, s, d, r);
        }
        const To = T.xI("ZodNumber", (e, r) => {
          Ni.init(e, r),
            Ue.init(e, r),
            (e._zod.processJSONSchema = (s, d, $) => uo(e, s, d, $)),
            qn(e, "ZodNumber", {
              gt(s, d) {
                return this.check(Zn(s, d));
              },
              gte(s, d) {
                return this.check(Ct(s, d));
              },
              min(s, d) {
                return this.check(Ct(s, d));
              },
              lt(s, d) {
                return this.check(ln(s, d));
              },
              lte(s, d) {
                return this.check(Vt(s, d));
              },
              max(s, d) {
                return this.check(Vt(s, d));
              },
              int(s) {
                return this.check(hr(s));
              },
              safe(s) {
                return this.check(hr(s));
              },
              positive(s) {
                return this.check(Zn(0, s));
              },
              nonnegative(s) {
                return this.check(Ct(0, s));
              },
              negative(s) {
                return this.check(ln(0, s));
              },
              nonpositive(s) {
                return this.check(Vt(0, s));
              },
              multipleOf(s, d) {
                return this.check(Xr(s, d));
              },
              step(s, d) {
                return this.check(Xr(s, d));
              },
              finite() {
                return this;
              },
            });
          const a = e._zod.bag;
          (e.minValue =
            Math.max(
              a.minimum ?? Number.NEGATIVE_INFINITY,
              a.exclusiveMinimum ?? Number.NEGATIVE_INFINITY,
            ) ?? null),
            (e.maxValue =
              Math.min(
                a.maximum ?? Number.POSITIVE_INFINITY,
                a.exclusiveMaximum ?? Number.POSITIVE_INFINITY,
              ) ?? null),
            (e.isInt =
              (a.format ?? "").includes("int") ||
              Number.isSafeInteger(a.multipleOf ?? 0.5)),
            (e.isFinite = !0),
            (e.format = a.format ?? null);
        });
        function Yc(e) {
          return Hr(To, e);
        }
        const Yn = T.xI("ZodNumberFormat", (e, r) => {
          pa.init(e, r), To.init(e, r);
        });
        function hr(e) {
          return qa(Yn, e);
        }
        function Fu(e) {
          return core._float32(Yn, e);
        }
        function Co(e) {
          return core._float64(Yn, e);
        }
        function Lu(e) {
          return core._int32(Yn, e);
        }
        function Mu(e) {
          return core._uint32(Yn, e);
        }
        const vi = T.xI("ZodBoolean", (e, r) => {
          Tr.init(e, r),
            Ue.init(e, r),
            (e._zod.processJSONSchema = (a, s, d) => lo(e, a, s, d));
        });
        function Ro(e) {
          return core._boolean(vi, e);
        }
        const Bo = T.xI("ZodBigInt", (e, r) => {
          ma.init(e, r),
            Ue.init(e, r),
            (e._zod.processJSONSchema = (s, d, $) => fo(e, s, d, $)),
            (e.gte = (s, d) => e.check(Ct(s, d))),
            (e.min = (s, d) => e.check(Ct(s, d))),
            (e.gt = (s, d) => e.check(Zn(s, d))),
            (e.gte = (s, d) => e.check(Ct(s, d))),
            (e.min = (s, d) => e.check(Ct(s, d))),
            (e.lt = (s, d) => e.check(ln(s, d))),
            (e.lte = (s, d) => e.check(Vt(s, d))),
            (e.max = (s, d) => e.check(Vt(s, d))),
            (e.positive = (s) => e.check(Zn(BigInt(0), s))),
            (e.negative = (s) => e.check(ln(BigInt(0), s))),
            (e.nonpositive = (s) => e.check(Vt(BigInt(0), s))),
            (e.nonnegative = (s) => e.check(Ct(BigInt(0), s))),
            (e.multipleOf = (s, d) => e.check(Xr(s, d)));
          const a = e._zod.bag;
          (e.minValue = a.minimum ?? null),
            (e.maxValue = a.maximum ?? null),
            (e.format = a.format ?? null);
        });
        function Qc(e) {
          return core._bigint(Bo, e);
        }
        const Zo = null;
        function Fo(e) {
          return core._int64(Zo, e);
        }
        function sl(e) {
          return core._uint64(Zo, e);
        }
        const hi = null;
        function es(e) {
          return core._symbol(hi, e);
        }
        const ts = null;
        function Gu(e) {
          return core._undefined(ts, e);
        }
        const ns = null;
        function rs(e) {
          return core._null(ns, e);
        }
        const is = null;
        function Wu() {
          return core._any(is);
        }
        const Lo = T.xI("ZodUnknown", (e, r) => {
          Cr.init(e, r),
            Ue.init(e, r),
            (e._zod.processJSONSchema = (a, s, d) => ri(e, a, s, d));
        });
        function Ht() {
          return Ya(Lo);
        }
        const os = T.xI("ZodNever", (e, r) => {
          ha.init(e, r),
            Ue.init(e, r),
            (e._zod.processJSONSchema = (a, s, d) => po(e, a, s, d));
        });
        function yr(e) {
          return Qa(os, e);
        }
        const Mo = null;
        function Ju(e) {
          return core._void(Mo, e);
        }
        const Go = T.xI("ZodDate", (e, r) => {
          ji.init(e, r),
            Ue.init(e, r),
            (e._zod.processJSONSchema = (s, d, $) => ii(e, s, d, $)),
            (e.min = (s, d) => e.check(Ct(s, d))),
            (e.max = (s, d) => e.check(Vt(s, d)));
          const a = e._zod.bag;
          (e.minDate = a.minimum ? new Date(a.minimum) : null),
            (e.maxDate = a.maximum ? new Date(a.maximum) : null);
        });
        function Vu(e) {
          return core._date(Go, e);
        }
        const as = T.xI("ZodArray", (e, r) => {
          ya.init(e, r),
            Ue.init(e, r),
            (e._zod.processJSONSchema = (a, s, d) => ho(e, a, s, d)),
            (e.element = r.element),
            qn(e, "ZodArray", {
              min(a, s) {
                return this.check(ur(a, s));
              },
              nonempty(a) {
                return this.check(ur(1, a));
              },
              max(a, s) {
                return this.check(Xi(a, s));
              },
              length(a, s) {
                return this.check(Yi(a, s));
              },
              unwrap() {
                return this.element;
              },
            });
        });
        function kn(e, r) {
          return Fn(as, e, r);
        }
        function Wo(e) {
          const r = e._zod.def.shape;
          return x(Object.keys(r));
        }
        const yi = T.xI("ZodObject", (e, r) => {
          ba.init(e, r),
            Ue.init(e, r),
            (e._zod.processJSONSchema = (a, s, d) => Sc(e, a, s, d)),
            p.gJ(e, "shape", () => r.shape),
            qn(e, "ZodObject", {
              keyof() {
                return x(Object.keys(this._zod.def.shape));
              },
              catchall(a) {
                return this.clone({ ...this._zod.def, catchall: a });
              },
              passthrough() {
                return this.clone({ ...this._zod.def, catchall: Ht() });
              },
              loose() {
                return this.clone({ ...this._zod.def, catchall: Ht() });
              },
              strict() {
                return this.clone({ ...this._zod.def, catchall: yr() });
              },
              strip() {
                return this.clone({ ...this._zod.def, catchall: void 0 });
              },
              extend(a) {
                return p.X$(this, a);
              },
              safeExtend(a) {
                return p.W0(this, a);
              },
              merge(a) {
                return p.h1(this, a);
              },
              pick(a) {
                return p.Up(this, a);
              },
              omit(a) {
                return p.cJ(this, a);
              },
              partial(...a) {
                return p.OH(J, this, a[0]);
              },
              required(...a) {
                return p.mw(Pe, this, a[0]);
              },
            });
        });
        function cs(e, r) {
          const a = { type: "object", shape: e ?? {}, ...p.A2(r) };
          return new yi(a);
        }
        function Ku(e, r) {
          return new yi({
            type: "object",
            shape: e,
            catchall: yr(),
            ...util.normalizeParams(r),
          });
        }
        function Hu(e, r) {
          return new yi({
            type: "object",
            shape: e,
            catchall: Ht(),
            ...util.normalizeParams(r),
          });
        }
        const ss = T.xI("ZodUnion", (e, r) => {
          $a.init(e, r),
            Ue.init(e, r),
            (e._zod.processJSONSchema = (a, s, d) => yo(e, a, s, d)),
            (e.options = r.options);
        });
        function us(e, r) {
          return new ss({ type: "union", options: e, ...p.A2(r) });
        }
        const ls = null;
        function qu(e, r) {
          return new ls({
            type: "union",
            options: e,
            inclusive: !1,
            ...util.normalizeParams(r),
          });
        }
        const Jo = null;
        function ds(e, r, a) {
          return new Jo({
            type: "union",
            options: r,
            discriminator: e,
            ...util.normalizeParams(a),
          });
        }
        const bi = T.xI("ZodIntersection", (e, r) => {
          Un.init(e, r),
            Ue.init(e, r),
            (e._zod.processJSONSchema = (a, s, d) => kc(e, a, s, d));
        });
        function Vo(e, r) {
          return new bi({ type: "intersection", left: e, right: r });
        }
        const Xu = null;
        function Yu(e, r, a) {
          const s = r instanceof core.$ZodType,
            d = s ? a : r,
            $ = s ? r : null;
          return new Xu({
            type: "tuple",
            items: e,
            rest: $,
            ...util.normalizeParams(d),
          });
        }
        const $i = null;
        function fs(e, r, a) {
          return !r || !r._zod
            ? new $i({
                type: "record",
                keyType: mr(),
                valueType: e,
                ...util.normalizeParams(r),
              })
            : new $i({
                type: "record",
                keyType: e,
                valueType: r,
                ...util.normalizeParams(a),
              });
        }
        function n(e, r, a) {
          const s = core.clone(e);
          return (
            (s._zod.values = void 0),
            new $i({
              type: "record",
              keyType: s,
              valueType: r,
              ...util.normalizeParams(a),
            })
          );
        }
        function i(e, r, a) {
          return new $i({
            type: "record",
            keyType: e,
            valueType: r,
            mode: "loose",
            ...util.normalizeParams(a),
          });
        }
        const c = null;
        function f(e, r, a) {
          return new c({
            type: "map",
            keyType: e,
            valueType: r,
            ...util.normalizeParams(a),
          });
        }
        const m = null;
        function v(e, r) {
          return new m({
            type: "set",
            valueType: e,
            ...util.normalizeParams(r),
          });
        }
        const y = T.xI("ZodEnum", (e, r) => {
          wa.init(e, r),
            Ue.init(e, r),
            (e._zod.processJSONSchema = (s, d, $) => mo(e, s, d, $)),
            (e.enum = r.entries),
            (e.options = Object.values(r.entries));
          const a = new Set(Object.keys(r.entries));
          (e.extract = (s, d) => {
            const $ = {};
            for (const I of s)
              if (a.has(I)) $[I] = r.entries[I];
              else throw new Error(`Key ${I} not found in enum`);
            return new y({ ...r, checks: [], ...p.A2(d), entries: $ });
          }),
            (e.exclude = (s, d) => {
              const $ = { ...r.entries };
              for (const I of s)
                if (a.has(I)) delete $[I];
                else throw new Error(`Key ${I} not found in enum`);
              return new y({ ...r, checks: [], ...p.A2(d), entries: $ });
            });
        });
        function x(e, r) {
          const a = Array.isArray(e)
            ? Object.fromEntries(e.map((s) => [s, s]))
            : e;
          return new y({ type: "enum", entries: a, ...p.A2(r) });
        }
        function S(e, r) {
          return new y({
            type: "enum",
            entries: e,
            ...util.normalizeParams(r),
          });
        }
        const k = T.xI("ZodLiteral", (e, r) => {
          Sa.init(e, r),
            Ue.init(e, r),
            (e._zod.processJSONSchema = (a, s, d) => bc(e, a, s, d)),
            (e.values = new Set(r.values)),
            Object.defineProperty(e, "value", {
              get() {
                if (r.values.length > 1)
                  throw new Error(
                    "This schema contains multiple valid literal values. Use `.values` instead.",
                  );
                return r.values[0];
              },
            });
        });
        function P(e, r) {
          return new k({
            type: "literal",
            values: Array.isArray(e) ? e : [e],
            ...p.A2(r),
          });
        }
        const w = null;
        function E(e) {
          return core._file(w, e);
        }
        const j = T.xI("ZodTransform", (e, r) => {
          Ri.init(e, r),
            Ue.init(e, r),
            (e._zod.processJSONSchema = (a, s, d) => go(e, a, s, d)),
            (e._zod.parse = (a, s) => {
              if (s.direction === "backward")
                throw new T.cV(e.constructor.name);
              a.addIssue = ($) => {
                if (typeof $ == "string") a.issues.push(p.sn($, a.value, r));
                else {
                  const I = $;
                  I.fatal && (I.continue = !1),
                    I.code ?? (I.code = "custom"),
                    I.input ?? (I.input = a.value),
                    I.inst ?? (I.inst = e),
                    a.issues.push(p.sn(I));
                }
              };
              const d = r.transform(a.value, a);
              return d instanceof Promise
                ? d.then(($) => ((a.value = $), (a.fallback = !0), a))
                : ((a.value = d), (a.fallback = !0), a);
            });
        });
        function M(e) {
          return new j({ type: "transform", transform: e });
        }
        const J = T.xI("ZodOptional", (e, r) => {
          Lr.init(e, r),
            Ue.init(e, r),
            (e._zod.processJSONSchema = (a, s, d) => ci(e, a, s, d)),
            (e.unwrap = () => e._zod.def.innerType);
        });
        function W(e) {
          return new J({ type: "optional", innerType: e });
        }
        const te = T.xI("ZodExactOptional", (e, r) => {
          ka.init(e, r),
            Ue.init(e, r),
            (e._zod.processJSONSchema = (a, s, d) => ci(e, a, s, d)),
            (e.unwrap = () => e._zod.def.innerType);
        });
        function oe(e) {
          return new te({ type: "optional", innerType: e });
        }
        const me = T.xI("ZodNullable", (e, r) => {
          za.init(e, r),
            Ue.init(e, r),
            (e._zod.processJSONSchema = (a, s, d) => dr(e, a, s, d)),
            (e.unwrap = () => e._zod.def.innerType);
        });
        function ce(e) {
          return new me({ type: "nullable", innerType: e });
        }
        function he(e) {
          return W(ce(e));
        }
        const ge = T.xI("ZodDefault", (e, r) => {
          Da.init(e, r),
            Ue.init(e, r),
            (e._zod.processJSONSchema = (a, s, d) => wn(e, a, s, d)),
            (e.unwrap = () => e._zod.def.innerType),
            (e.removeDefault = e.unwrap);
        });
        function Ee(e, r) {
          return new ge({
            type: "default",
            innerType: e,
            get defaultValue() {
              return typeof r == "function" ? r() : p.yG(r);
            },
          });
        }
        const ze = T.xI("ZodPrefault", (e, r) => {
          Fi.init(e, r),
            Ue.init(e, r),
            (e._zod.processJSONSchema = (a, s, d) => $o(e, a, s, d)),
            (e.unwrap = () => e._zod.def.innerType);
        });
        function ft(e, r) {
          return new ze({
            type: "prefault",
            innerType: e,
            get defaultValue() {
              return typeof r == "function" ? r() : p.yG(r);
            },
          });
        }
        const Pe = T.xI("ZodNonOptional", (e, r) => {
          Mr.init(e, r),
            Ue.init(e, r),
            (e._zod.processJSONSchema = (a, s, d) => bo(e, a, s, d)),
            (e.unwrap = () => e._zod.def.innerType);
        });
        function bt(e, r) {
          return new Pe({ type: "nonoptional", innerType: e, ...p.A2(r) });
        }
        const We = null;
        function qt(e) {
          return new We({ type: "success", innerType: e });
        }
        const Qn = T.xI("ZodCatch", (e, r) => {
          Nn.init(e, r),
            Ue.init(e, r),
            (e._zod.processJSONSchema = (a, s, d) => _o(e, a, s, d)),
            (e.unwrap = () => e._zod.def.innerType),
            (e.removeCatch = e.unwrap);
        });
        function Ut(e, r) {
          return new Qn({
            type: "catch",
            innerType: e,
            catchValue: typeof r == "function" ? r : () => r,
          });
        }
        const br = null;
        function Ko(e) {
          return core._nan(br, e);
        }
        const zn = T.xI("ZodPipe", (e, r) => {
          Mi.init(e, r),
            Ue.init(e, r),
            (e._zod.processJSONSchema = (a, s, d) => fr(e, a, s, d)),
            (e.in = r.in),
            (e.out = r.out);
        });
        function _i(e, r) {
          return new zn({ type: "pipe", in: e, out: r });
        }
        const $r = T.xI("ZodCodec", (e, r) => {
          zn.init(e, r), Gr.init(e, r);
        });
        function Ii(e, r, a) {
          return new $r({
            type: "pipe",
            in: e,
            out: r,
            transform: a.decode,
            reverseTransform: a.encode,
          });
        }
        function Ho(e) {
          const r = e._zod.def;
          return new $r({
            type: "pipe",
            in: r.out,
            out: r.in,
            transform: r.reverseTransform,
            reverseTransform: r.transform,
          });
        }
        const er = null,
          qo = T.xI("ZodReadonly", (e, r) => {
            Tn.init(e, r),
              Ue.init(e, r),
              (e._zod.processJSONSchema = (a, s, d) => ai(e, a, s, d)),
              (e.unwrap = () => e._zod.def.innerType);
          });
        function Qu(e) {
          return new qo({ type: "readonly", innerType: e });
        }
        const xi = null;
        function Xo(e, r) {
          return new xi({
            type: "template_literal",
            parts: e,
            ...util.normalizeParams(r),
          });
        }
        const Yo = null;
        function ps(e) {
          return new Yo({ type: "lazy", getter: e });
        }
        const _r = null;
        function Qo(e) {
          return new _r({ type: "promise", innerType: e });
        }
        const el = null;
        function Rt(e) {
          return new el({
            type: "function",
            input: Array.isArray(e?.input)
              ? Yu(e?.input)
              : (e?.input ?? kn(Ht())),
            output: e?.output ?? Ht(),
          });
        }
        const dn = T.xI("ZodCustom", (e, r) => {
          Ea.init(e, r),
            Ue.init(e, r),
            (e._zod.processJSONSchema = (a, s, d) => Kn(e, a, s, d));
        });
        function $l(e) {
          const r = new core.$ZodCheck({ check: "custom" });
          return (r._zod.check = e), r;
        }
        function _l(e, r) {
          return core._custom(dn, e ?? (() => !0), r);
        }
        function ul(e, r = {}) {
          return Qr(dn, e, r);
        }
        function ll(e, r) {
          return pc(e, r);
        }
        const Il = mc,
          xl = Gn;
        function wl(e, r = {}) {
          const a = new dn({
            type: "custom",
            check: "custom",
            fn: (s) => s instanceof e,
            abort: !0,
            ...util.normalizeParams(r),
          });
          return (
            (a._zod.bag.Class = e),
            (a._zod.check = (s) => {
              s.value instanceof e ||
                s.issues.push({
                  code: "invalid_type",
                  expected: e.name,
                  input: s.value,
                  inst: a,
                  path: [...(a._zod.def.path ?? [])],
                });
            }),
            a
          );
        }
        const dl = (...e) => gc({ Codec: $r, Boolean: vi, String: ui }, ...e);
        function Sl(e) {
          const r = ps(() => us([mr(e), Yc(), Ro(), rs(), kn(r), fs(mr(), r)]));
          return r;
        }
        function kl(e, r) {
          return new er({ type: "pipe", in: M(e), out: r });
        }
        var fl = H(84847);
        function pl(e) {
          return Aa(ui, e);
        }
        function ml(e) {
          return Hi(To, e);
        }
        function gl(e) {
          return Fs(vi, e);
        }
        function vl(e) {
          return qi(Bo, e);
        }
        function hl(e) {
          return Bn(Go, e);
        }
        (0, T.$W)((0, fl.A)());
        const zl = null;
      },
      62617: ($t, Ne, H) => {
        "use strict";
        H.d(Ne, {
          $W: () => U,
          GT: () => ve,
          cV: () => ue,
          cr: () => le,
          xI: () => T,
        });
        var _;
        const we = Object.freeze({ status: "aborted" });
        function T(re, ee, de) {
          function Se(fe, K) {
            if (
              (fe._zod ||
                Object.defineProperty(fe, "_zod", {
                  value: { def: K, constr: Ae, traits: new Set() },
                  enumerable: !1,
                }),
              fe._zod.traits.has(re))
            )
              return;
            fe._zod.traits.add(re), ee(fe, K);
            const _e = Ae.prototype,
              st = Object.keys(_e);
            for (let tt = 0; tt < st.length; tt++) {
              const ut = st[tt];
              ut in fe || (fe[ut] = _e[ut].bind(fe));
            }
          }
          const $e = de?.Parent ?? Object;
          class Ce extends $e {}
          Object.defineProperty(Ce, "name", { value: re });
          function Ae(fe) {
            var K;
            const _e = de?.Parent ? new Ce() : this;
            Se(_e, fe), (K = _e._zod).deferred ?? (K.deferred = []);
            for (const st of _e._zod.deferred) st();
            return _e;
          }
          return (
            Object.defineProperty(Ae, "init", { value: Se }),
            Object.defineProperty(Ae, Symbol.hasInstance, {
              value: (fe) =>
                de?.Parent && fe instanceof de.Parent
                  ? !0
                  : fe?._zod?.traits?.has(re),
            }),
            Object.defineProperty(Ae, "name", { value: re }),
            Ae
          );
        }
        const xe = Symbol("zod_brand");
        class ve extends Error {
          constructor() {
            super(
              "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
            );
          }
        }
        class ue extends Error {
          constructor(ee) {
            super(`Encountered unidirectional transform during encode: ${ee}`),
              (this.name = "ZodEncodeError");
          }
        }
        (_ = globalThis).__zod_globalConfig ?? (_.__zod_globalConfig = {});
        const le = globalThis.__zod_globalConfig;
        function U(re) {
          return re && Object.assign(le, re), le;
        }
      },
      99482: ($t, Ne, H) => {
        "use strict";
        H.d(Ne, {
          $f: () => St,
          A2: () => Ft,
          B7: () => De,
          GW: () => mn,
          Gv: () => wt,
          LG: () => $e,
          NM: () => Ze,
          OH: () => tn,
          PO: () => ee,
          QH: () => Et,
          Qd: () => _t,
          Rc: () => rn,
          UQ: () => Me,
          Up: () => zt,
          W0: () => rt,
          X$: () => mt,
          Yv: () => Ve,
          cJ: () => Lt,
          cl: () => de,
          gJ: () => Ae,
          gx: () => pt,
          h1: () => Dt,
          hI: () => fn,
          iR: () => Dn,
          jw: () => U,
          k8: () => re,
          lQ: () => Pt,
          mw: () => Mt,
          o8: () => qe,
          p6: () => Se,
          qQ: () => Zt,
          rL: () => xt,
          sn: () => gn,
          w5: () => le,
          yG: () => Bt,
          zH: () => kt,
          zM: () => _e,
        });
        var _ = H(62617);
        function we(u) {
          return u;
        }
        function T(u) {
          return u;
        }
        function xe(u) {}
        function ve(u) {
          throw new Error("Unexpected value in exhaustive check");
        }
        function ue(u) {}
        function le(u) {
          const h = Object.values(u).filter((D) => typeof D == "number");
          return Object.entries(u)
            .filter(([D, R]) => h.indexOf(+D) === -1)
            .map(([D, R]) => R);
        }
        function U(u, h = "|") {
          return u.map((p) => De(p)).join(h);
        }
        function re(u, h) {
          return typeof h == "bigint" ? h.toString() : h;
        }
        function ee(u) {
          return {
            get value() {
              {
                const p = u();
                return Object.defineProperty(this, "value", { value: p }), p;
              }
              throw new Error("cached value already set");
            },
          };
        }
        function de(u) {
          return u == null;
        }
        function Se(u) {
          const h = u.startsWith("^") ? 1 : 0,
            p = u.endsWith("$") ? u.length - 1 : u.length;
          return u.slice(h, p);
        }
        function $e(u, h) {
          const p = u / h,
            D = Math.round(p),
            R = Number.EPSILON * Math.max(Math.abs(p), 1);
          return Math.abs(p - D) < R ? 0 : p - D;
        }
        const Ce = Symbol("evaluating");
        function Ae(u, h, p) {
          let D;
          Object.defineProperty(u, h, {
            get() {
              if (D !== Ce) return D === void 0 && ((D = Ce), (D = p())), D;
            },
            set(R) {
              Object.defineProperty(u, h, { value: R });
            },
            configurable: !0,
          });
        }
        function fe(u) {
          return Object.create(
            Object.getPrototypeOf(u),
            Object.getOwnPropertyDescriptors(u),
          );
        }
        function K(u, h, p) {
          Object.defineProperty(u, h, {
            value: p,
            writable: !0,
            enumerable: !0,
            configurable: !0,
          });
        }
        function _e(...u) {
          const h = {};
          for (const p of u) {
            const D = Object.getOwnPropertyDescriptors(p);
            Object.assign(h, D);
          }
          return Object.defineProperties({}, h);
        }
        function st(u) {
          return _e(u._zod.def);
        }
        function tt(u, h) {
          return h ? h.reduce((p, D) => p?.[D], u) : u;
        }
        function ut(u) {
          const h = Object.keys(u),
            p = h.map((D) => u[D]);
          return Promise.all(p).then((D) => {
            const R = {};
            for (let Y = 0; Y < h.length; Y++) R[h[Y]] = D[Y];
            return R;
          });
        }
        function Le(u = 10) {
          const h = "abcdefghijklmnopqrstuvwxyz";
          let p = "";
          for (let D = 0; D < u; D++)
            p += h[Math.floor(Math.random() * h.length)];
          return p;
        }
        function Me(u) {
          return JSON.stringify(u);
        }
        function Ve(u) {
          return u
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");
        }
        const pt =
          "captureStackTrace" in Error ? Error.captureStackTrace : (...u) => {};
        function wt(u) {
          return typeof u == "object" && u !== null && !Array.isArray(u);
        }
        const fn = ee(() => {
          if (
            _.cr.jitless ||
            (typeof navigator < "u" &&
              navigator?.userAgent?.includes("Cloudflare"))
          )
            return !1;
          try {
            const u = Function;
            return new u(""), !0;
          } catch {
            return !1;
          }
        });
        function _t(u) {
          if (wt(u) === !1) return !1;
          const h = u.constructor;
          if (h === void 0 || typeof h != "function") return !0;
          const p = h.prototype;
          return !(
            wt(p) === !1 ||
            Object.prototype.hasOwnProperty.call(p, "isPrototypeOf") === !1
          );
        }
        function Bt(u) {
          return _t(u)
            ? { ...u }
            : Array.isArray(u)
              ? [...u]
              : u instanceof Map
                ? new Map(u)
                : u instanceof Set
                  ? new Set(u)
                  : u;
        }
        function Qt(u) {
          let h = 0;
          for (const p in u) Object.prototype.hasOwnProperty.call(u, p) && h++;
          return h;
        }
        const It = (u) => {
            const h = typeof u;
            switch (h) {
              case "undefined":
                return "undefined";
              case "string":
                return "string";
              case "number":
                return Number.isNaN(u) ? "nan" : "number";
              case "boolean":
                return "boolean";
              case "function":
                return "function";
              case "bigint":
                return "bigint";
              case "symbol":
                return "symbol";
              case "object":
                return Array.isArray(u)
                  ? "array"
                  : u === null
                    ? "null"
                    : u.then &&
                        typeof u.then == "function" &&
                        u.catch &&
                        typeof u.catch == "function"
                      ? "promise"
                      : typeof Map < "u" && u instanceof Map
                        ? "map"
                        : typeof Set < "u" && u instanceof Set
                          ? "set"
                          : typeof Date < "u" && u instanceof Date
                            ? "date"
                            : typeof File < "u" && u instanceof File
                              ? "file"
                              : "object";
              default:
                throw new Error(`Unknown data type: ${h}`);
            }
          },
          Zt = new Set(["string", "number", "symbol"]),
          pn = new Set([
            "string",
            "number",
            "bigint",
            "boolean",
            "symbol",
            "undefined",
          ]);
        function St(u) {
          return u.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }
        function qe(u, h, p) {
          const D = new u._zod.constr(h ?? u._zod.def);
          return (!h || p?.parent) && (D._zod.parent = u), D;
        }
        function Ft(u) {
          const h = u;
          if (!h) return {};
          if (typeof h == "string") return { error: () => h };
          if (h?.message !== void 0) {
            if (h?.error !== void 0)
              throw new Error(
                "Cannot specify both `message` and `error` params",
              );
            h.error = h.message;
          }
          return (
            delete h.message,
            typeof h.error == "string" ? { ...h, error: () => h.error } : h
          );
        }
        function en(u) {
          let h;
          return new Proxy(
            {},
            {
              get(p, D, R) {
                return h ?? (h = u()), Reflect.get(h, D, R);
              },
              set(p, D, R, Y) {
                return h ?? (h = u()), Reflect.set(h, D, R, Y);
              },
              has(p, D) {
                return h ?? (h = u()), Reflect.has(h, D);
              },
              deleteProperty(p, D) {
                return h ?? (h = u()), Reflect.deleteProperty(h, D);
              },
              ownKeys(p) {
                return h ?? (h = u()), Reflect.ownKeys(h);
              },
              getOwnPropertyDescriptor(p, D) {
                return h ?? (h = u()), Reflect.getOwnPropertyDescriptor(h, D);
              },
              defineProperty(p, D, R) {
                return h ?? (h = u()), Reflect.defineProperty(h, D, R);
              },
            },
          );
        }
        function De(u) {
          return typeof u == "bigint"
            ? u.toString() + "n"
            : typeof u == "string"
              ? `"${u}"`
              : `${u}`;
        }
        function Ze(u) {
          return Object.keys(u).filter(
            (h) =>
              u[h]._zod.optin === "optional" && u[h]._zod.optout === "optional",
          );
        }
        const kt = {
            safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
            int32: [-2147483648, 2147483647],
            uint32: [0, 4294967295],
            float32: [-34028234663852886e22, 34028234663852886e22],
            float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
          },
          nt = {
            int64: [
              BigInt("-9223372036854775808"),
              BigInt("9223372036854775807"),
            ],
            uint64: [BigInt(0), BigInt("18446744073709551615")],
          };
        function zt(u, h) {
          const p = u._zod.def,
            D = p.checks;
          if (D && D.length > 0)
            throw new Error(
              ".pick() cannot be used on object schemas containing refinements",
            );
          const Y = _e(u._zod.def, {
            get shape() {
              const ae = {};
              for (const X in h) {
                if (!(X in p.shape))
                  throw new Error(`Unrecognized key: "${X}"`);
                h[X] && (ae[X] = p.shape[X]);
              }
              return K(this, "shape", ae), ae;
            },
            checks: [],
          });
          return qe(u, Y);
        }
        function Lt(u, h) {
          const p = u._zod.def,
            D = p.checks;
          if (D && D.length > 0)
            throw new Error(
              ".omit() cannot be used on object schemas containing refinements",
            );
          const Y = _e(u._zod.def, {
            get shape() {
              const ae = { ...u._zod.def.shape };
              for (const X in h) {
                if (!(X in p.shape))
                  throw new Error(`Unrecognized key: "${X}"`);
                h[X] && delete ae[X];
              }
              return K(this, "shape", ae), ae;
            },
            checks: [],
          });
          return qe(u, Y);
        }
        function mt(u, h) {
          if (!_t(h))
            throw new Error("Invalid input to extend: expected a plain object");
          const p = u._zod.def.checks;
          if (p && p.length > 0) {
            const Y = u._zod.def.shape;
            for (const ae in h)
              if (Object.getOwnPropertyDescriptor(Y, ae) !== void 0)
                throw new Error(
                  "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
                );
          }
          const R = _e(u._zod.def, {
            get shape() {
              const Y = { ...u._zod.def.shape, ...h };
              return K(this, "shape", Y), Y;
            },
          });
          return qe(u, R);
        }
        function rt(u, h) {
          if (!_t(h))
            throw new Error(
              "Invalid input to safeExtend: expected a plain object",
            );
          const p = _e(u._zod.def, {
            get shape() {
              const D = { ...u._zod.def.shape, ...h };
              return K(this, "shape", D), D;
            },
          });
          return qe(u, p);
        }
        function Dt(u, h) {
          if (u._zod.def.checks?.length)
            throw new Error(
              ".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.",
            );
          const p = _e(u._zod.def, {
            get shape() {
              const D = { ...u._zod.def.shape, ...h._zod.def.shape };
              return K(this, "shape", D), D;
            },
            get catchall() {
              return h._zod.def.catchall;
            },
            checks: h._zod.def.checks ?? [],
          });
          return qe(u, p);
        }
        function tn(u, h, p) {
          const R = h._zod.def.checks;
          if (R && R.length > 0)
            throw new Error(
              ".partial() cannot be used on object schemas containing refinements",
            );
          const ae = _e(h._zod.def, {
            get shape() {
              const X = h._zod.def.shape,
                be = { ...X };
              if (p)
                for (const pe in p) {
                  if (!(pe in X)) throw new Error(`Unrecognized key: "${pe}"`);
                  p[pe] &&
                    (be[pe] = u
                      ? new u({ type: "optional", innerType: X[pe] })
                      : X[pe]);
                }
              else
                for (const pe in X)
                  be[pe] = u
                    ? new u({ type: "optional", innerType: X[pe] })
                    : X[pe];
              return K(this, "shape", be), be;
            },
            checks: [],
          });
          return qe(h, ae);
        }
        function Mt(u, h, p) {
          const D = _e(h._zod.def, {
            get shape() {
              const R = h._zod.def.shape,
                Y = { ...R };
              if (p)
                for (const ae in p) {
                  if (!(ae in Y)) throw new Error(`Unrecognized key: "${ae}"`);
                  p[ae] &&
                    (Y[ae] = new u({ type: "nonoptional", innerType: R[ae] }));
                }
              else
                for (const ae in R)
                  Y[ae] = new u({ type: "nonoptional", innerType: R[ae] });
              return K(this, "shape", Y), Y;
            },
          });
          return qe(h, D);
        }
        function Et(u, h = 0) {
          if (u.aborted === !0) return !0;
          for (let p = h; p < u.issues.length; p++)
            if (u.issues[p]?.continue !== !0) return !0;
          return !1;
        }
        function xt(u, h = 0) {
          if (u.aborted === !0) return !0;
          for (let p = h; p < u.issues.length; p++)
            if (u.issues[p]?.continue === !1) return !0;
          return !1;
        }
        function Pt(u, h) {
          return h.map((p) => {
            var D;
            return (D = p).path ?? (D.path = []), p.path.unshift(u), p;
          });
        }
        function Nt(u) {
          return typeof u == "string" ? u : u?.message;
        }
        function Dn(u, h, p) {
          const D = u.message
              ? u.message
              : (Nt(u.inst?._zod.def?.error?.(u)) ??
                Nt(h?.error?.(u)) ??
                Nt(p.customError?.(u)) ??
                Nt(p.localeError?.(u)) ??
                "Invalid input"),
            { inst: R, continue: Y, input: ae, ...X } = u;
          return (
            X.path ?? (X.path = []),
            (X.message = D),
            h?.reportInput && (X.input = ae),
            X
          );
        }
        function nn(u) {
          return u instanceof Set
            ? "set"
            : u instanceof Map
              ? "map"
              : u instanceof File
                ? "file"
                : "unknown";
        }
        function rn(u) {
          return Array.isArray(u)
            ? "array"
            : typeof u == "string"
              ? "string"
              : "unknown";
        }
        function mn(u) {
          const h = typeof u;
          switch (h) {
            case "number":
              return Number.isNaN(u) ? "nan" : "number";
            case "object": {
              if (u === null) return "null";
              if (Array.isArray(u)) return "array";
              const p = u;
              if (
                p &&
                Object.getPrototypeOf(p) !== Object.prototype &&
                "constructor" in p &&
                p.constructor
              )
                return p.constructor.name;
            }
          }
          return h;
        }
        function gn(...u) {
          const [h, p, D] = u;
          return typeof h == "string"
            ? { message: h, code: "custom", input: p, inst: D }
            : { ...h };
        }
        function Gt(u) {
          return Object.entries(u)
            .filter(([h, p]) => Number.isNaN(Number.parseInt(h, 10)))
            .map((h) => h[1]);
        }
        function Je(u) {
          const h = atob(u),
            p = new Uint8Array(h.length);
          for (let D = 0; D < h.length; D++) p[D] = h.charCodeAt(D);
          return p;
        }
        function At(u) {
          let h = "";
          for (let p = 0; p < u.length; p++) h += String.fromCharCode(u[p]);
          return btoa(h);
        }
        function vn(u) {
          const h = u.replace(/-/g, "+").replace(/_/g, "/"),
            p = "=".repeat((4 - (h.length % 4)) % 4);
          return Je(h + p);
        }
        function gt(u) {
          return At(u)
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=/g, "");
        }
        function En(u) {
          const h = u.replace(/^0x/, "");
          if (h.length % 2 !== 0) throw new Error("Invalid hex string length");
          const p = new Uint8Array(h.length / 2);
          for (let D = 0; D < h.length; D += 2)
            p[D / 2] = Number.parseInt(h.slice(D, D + 2), 16);
          return p;
        }
        function b(u) {
          return Array.from(u)
            .map((h) => h.toString(16).padStart(2, "0"))
            .join("");
        }
        class l {
          constructor(...h) {}
        }
      },
      84847: ($t, Ne, H) => {
        "use strict";
        H.d(Ne, { A: () => T });
        var _ = H(99482);
        const we = () => {
          const xe = {
            string: { unit: "characters", verb: "to have" },
            file: { unit: "bytes", verb: "to have" },
            array: { unit: "items", verb: "to have" },
            set: { unit: "items", verb: "to have" },
            map: { unit: "entries", verb: "to have" },
          };
          function ve(U) {
            return xe[U] ?? null;
          }
          const ue = {
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
            le = { nan: "NaN" };
          return (U) => {
            switch (U.code) {
              case "invalid_type": {
                const re = le[U.expected] ?? U.expected,
                  ee = _.GW(U.input),
                  de = le[ee] ?? ee;
                return `Invalid input: expected ${re}, received ${de}`;
              }
              case "invalid_value":
                return U.values.length === 1
                  ? `Invalid input: expected ${_.B7(U.values[0])}`
                  : `Invalid option: expected one of ${_.jw(U.values, "|")}`;
              case "too_big": {
                const re = U.inclusive ? "<=" : "<",
                  ee = ve(U.origin);
                return ee
                  ? `Too big: expected ${U.origin ?? "value"} to have ${re}${U.maximum.toString()} ${ee.unit ?? "elements"}`
                  : `Too big: expected ${U.origin ?? "value"} to be ${re}${U.maximum.toString()}`;
              }
              case "too_small": {
                const re = U.inclusive ? ">=" : ">",
                  ee = ve(U.origin);
                return ee
                  ? `Too small: expected ${U.origin} to have ${re}${U.minimum.toString()} ${ee.unit}`
                  : `Too small: expected ${U.origin} to be ${re}${U.minimum.toString()}`;
              }
              case "invalid_format": {
                const re = U;
                return re.format === "starts_with"
                  ? `Invalid string: must start with "${re.prefix}"`
                  : re.format === "ends_with"
                    ? `Invalid string: must end with "${re.suffix}"`
                    : re.format === "includes"
                      ? `Invalid string: must include "${re.includes}"`
                      : re.format === "regex"
                        ? `Invalid string: must match pattern ${re.pattern}`
                        : `Invalid ${ue[re.format] ?? U.format}`;
              }
              case "not_multiple_of":
                return `Invalid number: must be a multiple of ${U.divisor}`;
              case "unrecognized_keys":
                return `Unrecognized key${U.keys.length > 1 ? "s" : ""}: ${_.jw(U.keys, ", ")}`;
              case "invalid_key":
                return `Invalid key in ${U.origin}`;
              case "invalid_union":
                return U.options &&
                  Array.isArray(U.options) &&
                  U.options.length > 0
                  ? `Invalid discriminator value. Expected ${U.options.map((ee) => `'${ee}'`).join(" | ")}`
                  : "Invalid input";
              case "invalid_element":
                return `Invalid value in ${U.origin}`;
              default:
                return "Invalid input";
            }
          };
        };
        function T() {
          return { localeError: we() };
        }
      },
      10410: ($t, Ne, H) => {
        "use strict";
        H.r(Ne),
          H.d(Ne, {
            ar: () => T,
            az: () => ve,
            be: () => U,
            bg: () => ee,
            ca: () => Se,
            cs: () => Ce,
            da: () => fe,
            de: () => _e,
            el: () => tt,
            en: () => ut.A,
            eo: () => Me,
            es: () => pt,
            fa: () => fn,
            fi: () => Bt,
            fr: () => It,
            frCA: () => pn,
            he: () => qe,
            hr: () => en,
            hu: () => Ze,
            hy: () => Lt,
            id: () => rt,
            is: () => tn,
            it: () => Et,
            ja: () => Pt,
            ka: () => Dn,
            kh: () => mn,
            km: () => rn,
            ko: () => Gt,
            lt: () => gt,
            mk: () => b,
            ms: () => u,
            nl: () => p,
            no: () => R,
            ota: () => ae,
            pl: () => wi,
            ps: () => be,
            pt: () => Ir,
            ro: () => wr,
            ru: () => ki,
            sl: () => Ot,
            sv: () => it,
            ta: () => Dr,
            th: () => G,
            tr: () => Pr,
            ua: () => Xe,
            uk: () => Pn,
            ur: () => Or,
            uz: () => zi,
            vi: () => jt,
            yo: () => vt,
            zhCN: () => Be,
            zhTW: () => lt,
          });
        var _ = H(99482);
        const we = () => {
          const Z = {
            string: {
              unit: "\u062D\u0631\u0641",
              verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
            },
            file: {
              unit: "\u0628\u0627\u064A\u062A",
              verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
            },
            array: {
              unit: "\u0639\u0646\u0635\u0631",
              verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
            },
            set: {
              unit: "\u0639\u0646\u0635\u0631",
              verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
            },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "\u0645\u062F\u062E\u0644",
              email:
                "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
              url: "\u0631\u0627\u0628\u0637",
              emoji: "\u0625\u064A\u0645\u0648\u062C\u064A",
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
              datetime:
                "\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
              date: "\u062A\u0627\u0631\u064A\u062E \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
              time: "\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
              duration:
                "\u0645\u062F\u0629 \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
              ipv4: "\u0639\u0646\u0648\u0627\u0646 IPv4",
              ipv6: "\u0639\u0646\u0648\u0627\u0646 IPv6",
              cidrv4:
                "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv4",
              cidrv6:
                "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv6",
              base64:
                "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64-encoded",
              base64url:
                "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64url-encoded",
              json_string:
                "\u0646\u064E\u0635 \u0639\u0644\u0649 \u0647\u064A\u0626\u0629 JSON",
              e164: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0628\u0645\u0639\u064A\u0627\u0631 E.164",
              jwt: "JWT",
              template_literal: "\u0645\u062F\u062E\u0644",
            },
            A = { nan: "NaN" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 instanceof ${t.expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${O}`
                  : `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${o}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${_.B7(t.values[0])}`
                  : `\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? ` \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${t.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${o} ${t.maximum.toString()} ${g.unit ?? "\u0639\u0646\u0635\u0631"}`
                  : `\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${t.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${o} ${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${t.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${o} ${t.minimum.toString()} ${g.unit}`
                  : `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${t.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${o} ${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 "${t.prefix}"`
                  : o.format === "ends_with"
                    ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0628\u0640 "${o.suffix}"`
                    : o.format === "includes"
                      ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0636\u0645\u0651\u064E\u0646 "${o.includes}"`
                      : o.format === "regex"
                        ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 ${o.pattern}`
                        : `${F[o.format] ?? t.format} \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644`;
              }
              case "not_multiple_of":
                return `\u0631\u0642\u0645 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0645\u0636\u0627\u0639\u0641\u0627\u062A ${t.divisor}`;
              case "unrecognized_keys":
                return `\u0645\u0639\u0631\u0641${t.keys.length > 1 ? "\u0627\u062A" : ""} \u063A\u0631\u064A\u0628${t.keys.length > 1 ? "\u0629" : ""}: ${_.jw(t.keys, "\u060C ")}`;
              case "invalid_key":
                return `\u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${t.origin}`;
              case "invalid_union":
                return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
              case "invalid_element":
                return `\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${t.origin}`;
              default:
                return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
            }
          };
        };
        function T() {
          return { localeError: we() };
        }
        const xe = () => {
          const Z = {
            string: { unit: "simvol", verb: "olmal\u0131d\u0131r" },
            file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
            array: { unit: "element", verb: "olmal\u0131d\u0131r" },
            set: { unit: "element", verb: "olmal\u0131d\u0131r" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
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
            A = { nan: "NaN" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n instanceof ${t.expected}, daxil olan ${O}`
                  : `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${o}, daxil olan ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${_.B7(t.values[0])}`
                  : `Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${t.origin ?? "d\u0259y\u0259r"} ${o}${t.maximum.toString()} ${g.unit ?? "element"}`
                  : `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${t.origin ?? "d\u0259y\u0259r"} ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${t.origin} ${o}${t.minimum.toString()} ${g.unit}`
                  : `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${t.origin} ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Yanl\u0131\u015F m\u0259tn: "${o.prefix}" il\u0259 ba\u015Flamal\u0131d\u0131r`
                  : o.format === "ends_with"
                    ? `Yanl\u0131\u015F m\u0259tn: "${o.suffix}" il\u0259 bitm\u0259lidir`
                    : o.format === "includes"
                      ? `Yanl\u0131\u015F m\u0259tn: "${o.includes}" daxil olmal\u0131d\u0131r`
                      : o.format === "regex"
                        ? `Yanl\u0131\u015F m\u0259tn: ${o.pattern} \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r`
                        : `Yanl\u0131\u015F ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Yanl\u0131\u015F \u0259d\u0259d: ${t.divisor} il\u0259 b\xF6l\xFCn\u0259 bil\u0259n olmal\u0131d\u0131r`;
              case "unrecognized_keys":
                return `Tan\u0131nmayan a\xE7ar${t.keys.length > 1 ? "lar" : ""}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `${t.origin} daxilind\u0259 yanl\u0131\u015F a\xE7ar`;
              case "invalid_union":
                return "Yanl\u0131\u015F d\u0259y\u0259r";
              case "invalid_element":
                return `${t.origin} daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r`;
              default:
                return "Yanl\u0131\u015F d\u0259y\u0259r";
            }
          };
        };
        function ve() {
          return { localeError: xe() };
        }
        function ue(Z, C, F, A) {
          const t = Math.abs(Z),
            o = t % 10,
            g = t % 100;
          return g >= 11 && g <= 19
            ? A
            : o === 1
              ? C
              : o >= 2 && o <= 4
                ? F
                : A;
        }
        const le = () => {
          const Z = {
            string: {
              unit: {
                one: "\u0441\u0456\u043C\u0432\u0430\u043B",
                few: "\u0441\u0456\u043C\u0432\u0430\u043B\u044B",
                many: "\u0441\u0456\u043C\u0432\u0430\u043B\u0430\u045E",
              },
              verb: "\u043C\u0435\u0446\u044C",
            },
            array: {
              unit: {
                one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
                few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E",
              },
              verb: "\u043C\u0435\u0446\u044C",
            },
            set: {
              unit: {
                one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
                few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E",
              },
              verb: "\u043C\u0435\u0446\u044C",
            },
            file: {
              unit: {
                one: "\u0431\u0430\u0439\u0442",
                few: "\u0431\u0430\u0439\u0442\u044B",
                many: "\u0431\u0430\u0439\u0442\u0430\u045E",
              },
              verb: "\u043C\u0435\u0446\u044C",
            },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "\u0443\u0432\u043E\u0434",
              email: "email \u0430\u0434\u0440\u0430\u0441",
              url: "URL",
              emoji: "\u044D\u043C\u043E\u0434\u0437\u0456",
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
              datetime:
                "ISO \u0434\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441",
              date: "ISO \u0434\u0430\u0442\u0430",
              time: "ISO \u0447\u0430\u0441",
              duration:
                "ISO \u043F\u0440\u0430\u0446\u044F\u0433\u043B\u0430\u0441\u0446\u044C",
              ipv4: "IPv4 \u0430\u0434\u0440\u0430\u0441",
              ipv6: "IPv6 \u0430\u0434\u0440\u0430\u0441",
              cidrv4: "IPv4 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
              cidrv6: "IPv6 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
              base64:
                "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64",
              base64url:
                "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64url",
              json_string: "JSON \u0440\u0430\u0434\u043E\u043A",
              e164: "\u043D\u0443\u043C\u0430\u0440 E.164",
              jwt: "JWT",
              template_literal: "\u0443\u0432\u043E\u0434",
            },
            A = {
              nan: "NaN",
              number: "\u043B\u0456\u043A",
              array: "\u043C\u0430\u0441\u0456\u045E",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F instanceof ${t.expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${O}`
                  : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F ${o}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ${_.B7(t.values[0])}`
                  : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                if (g) {
                  const O = Number(t.maximum),
                    je = ue(O, g.unit.one, g.unit.few, g.unit.many);
                  return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${g.verb} ${o}${t.maximum.toString()} ${je}`;
                }
                return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                if (g) {
                  const O = Number(t.minimum),
                    je = ue(O, g.unit.one, g.unit.few, g.unit.many);
                  return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${g.verb} ${o}${t.minimum.toString()} ${je}`;
                }
                return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u043F\u0430\u0447\u044B\u043D\u0430\u0446\u0446\u0430 \u0437 "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u0430\u043A\u0430\u043D\u0447\u0432\u0430\u0446\u0446\u0430 \u043D\u0430 "${o.suffix}"`
                    : o.format === "includes"
                      ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u043C\u044F\u0448\u0447\u0430\u0446\u044C "${o.includes}"`
                      : o.format === "regex"
                        ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0430\u0434\u043F\u0430\u0432\u044F\u0434\u0430\u0446\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${o.pattern}`
                        : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043B\u0456\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0431\u044B\u0446\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${t.divisor}`;
              case "unrecognized_keys":
                return `\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ${t.keys.length > 1 ? "\u043A\u043B\u044E\u0447\u044B" : "\u043A\u043B\u044E\u0447"}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043A\u043B\u044E\u0447 \u0443 ${t.origin}`;
              case "invalid_union":
                return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
              case "invalid_element":
                return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435 \u045E ${t.origin}`;
              default:
                return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
            }
          };
        };
        function U() {
          return { localeError: le() };
        }
        const re = () => {
          const Z = {
            string: {
              unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
              verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
            },
            file: {
              unit: "\u0431\u0430\u0439\u0442\u0430",
              verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
            },
            array: {
              unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
              verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
            },
            set: {
              unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
              verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
            },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "\u0432\u0445\u043E\u0434",
              email:
                "\u0438\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441",
              url: "URL",
              emoji: "\u0435\u043C\u043E\u0434\u0436\u0438",
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
              datetime: "ISO \u0432\u0440\u0435\u043C\u0435",
              date: "ISO \u0434\u0430\u0442\u0430",
              time: "ISO \u0432\u0440\u0435\u043C\u0435",
              duration:
                "ISO \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442",
              ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
              ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
              cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
              cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
              base64:
                "base64-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
              base64url:
                "base64url-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
              json_string: "JSON \u043D\u0438\u0437",
              e164: "E.164 \u043D\u043E\u043C\u0435\u0440",
              jwt: "JWT",
              template_literal: "\u0432\u0445\u043E\u0434",
            },
            A = {
              nan: "NaN",
              number: "\u0447\u0438\u0441\u043B\u043E",
              array: "\u043C\u0430\u0441\u0438\u0432",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D instanceof ${t.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${O}`
                  : `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${o}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${_.B7(t.values[0])}`
                  : `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u043E\u043F\u0446\u0438\u044F: \u043E\u0447\u0430\u043A\u0432\u0430\u043D\u043E \u0435\u0434\u043D\u043E \u043E\u0442 ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${t.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${o}${t.maximum.toString()} ${g.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430"}`
                  : `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${t.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0431\u044A\u0434\u0435 ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${t.origin} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${o}${t.minimum.toString()} ${g.unit}`
                  : `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${t.origin} \u0434\u0430 \u0431\u044A\u0434\u0435 ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                if (o.format === "starts_with")
                  return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u0432\u0430 \u0441 "${o.prefix}"`;
                if (o.format === "ends_with")
                  return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u0432\u044A\u0440\u0448\u0432\u0430 \u0441 "${o.suffix}"`;
                if (o.format === "includes")
                  return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0432\u0430 "${o.includes}"`;
                if (o.format === "regex")
                  return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0432\u043F\u0430\u0434\u0430 \u0441 ${o.pattern}`;
                let g =
                  "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D";
                return (
                  o.format === "emoji" &&
                    (g =
                      "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"),
                  o.format === "datetime" &&
                    (g =
                      "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"),
                  o.format === "date" &&
                    (g =
                      "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430"),
                  o.format === "time" &&
                    (g =
                      "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"),
                  o.format === "duration" &&
                    (g =
                      "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430"),
                  `${g} ${F[o.format] ?? t.format}`
                );
              }
              case "not_multiple_of":
                return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E \u0447\u0438\u0441\u043B\u043E: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043A\u0440\u0430\u0442\u043D\u043E \u043D\u0430 ${t.divisor}`;
              case "unrecognized_keys":
                return `\u041D\u0435\u0440\u0430\u0437\u043F\u043E\u0437\u043D\u0430\u0442${t.keys.length > 1 ? "\u0438" : ""} \u043A\u043B\u044E\u0447${t.keys.length > 1 ? "\u043E\u0432\u0435" : ""}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043A\u043B\u044E\u0447 \u0432 ${t.origin}`;
              case "invalid_union":
                return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
              case "invalid_element":
                return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 \u0432 ${t.origin}`;
              default:
                return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
            }
          };
        };
        function ee() {
          return { localeError: re() };
        }
        const de = () => {
          const Z = {
            string: { unit: "car\xE0cters", verb: "contenir" },
            file: { unit: "bytes", verb: "contenir" },
            array: { unit: "elements", verb: "contenir" },
            set: { unit: "elements", verb: "contenir" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "entrada",
              email: "adre\xE7a electr\xF2nica",
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
              ipv4: "adre\xE7a IPv4",
              ipv6: "adre\xE7a IPv6",
              cidrv4: "rang IPv4",
              cidrv6: "rang IPv6",
              base64: "cadena codificada en base64",
              base64url: "cadena codificada en base64url",
              json_string: "cadena JSON",
              e164: "n\xFAmero E.164",
              jwt: "JWT",
              template_literal: "entrada",
            },
            A = { nan: "NaN" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Tipus inv\xE0lid: s'esperava instanceof ${t.expected}, s'ha rebut ${O}`
                  : `Tipus inv\xE0lid: s'esperava ${o}, s'ha rebut ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Valor inv\xE0lid: s'esperava ${_.B7(t.values[0])}`
                  : `Opci\xF3 inv\xE0lida: s'esperava una de ${_.jw(t.values, " o ")}`;
              case "too_big": {
                const o = t.inclusive ? "com a m\xE0xim" : "menys de",
                  g = C(t.origin);
                return g
                  ? `Massa gran: s'esperava que ${t.origin ?? "el valor"} contingu\xE9s ${o} ${t.maximum.toString()} ${g.unit ?? "elements"}`
                  : `Massa gran: s'esperava que ${t.origin ?? "el valor"} fos ${o} ${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? "com a m\xEDnim" : "m\xE9s de",
                  g = C(t.origin);
                return g
                  ? `Massa petit: s'esperava que ${t.origin} contingu\xE9s ${o} ${t.minimum.toString()} ${g.unit}`
                  : `Massa petit: s'esperava que ${t.origin} fos ${o} ${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Format inv\xE0lid: ha de comen\xE7ar amb "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Format inv\xE0lid: ha d'acabar amb "${o.suffix}"`
                    : o.format === "includes"
                      ? `Format inv\xE0lid: ha d'incloure "${o.includes}"`
                      : o.format === "regex"
                        ? `Format inv\xE0lid: ha de coincidir amb el patr\xF3 ${o.pattern}`
                        : `Format inv\xE0lid per a ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `N\xFAmero inv\xE0lid: ha de ser m\xFAltiple de ${t.divisor}`;
              case "unrecognized_keys":
                return `Clau${t.keys.length > 1 ? "s" : ""} no reconeguda${t.keys.length > 1 ? "s" : ""}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Clau inv\xE0lida a ${t.origin}`;
              case "invalid_union":
                return "Entrada inv\xE0lida";
              case "invalid_element":
                return `Element inv\xE0lid a ${t.origin}`;
              default:
                return "Entrada inv\xE0lida";
            }
          };
        };
        function Se() {
          return { localeError: de() };
        }
        const $e = () => {
          const Z = {
            string: { unit: "znak\u016F", verb: "m\xEDt" },
            file: { unit: "bajt\u016F", verb: "m\xEDt" },
            array: { unit: "prvk\u016F", verb: "m\xEDt" },
            set: { unit: "prvk\u016F", verb: "m\xEDt" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "regul\xE1rn\xED v\xFDraz",
              email: "e-mailov\xE1 adresa",
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
              datetime: "datum a \u010Das ve form\xE1tu ISO",
              date: "datum ve form\xE1tu ISO",
              time: "\u010Das ve form\xE1tu ISO",
              duration: "doba trv\xE1n\xED ISO",
              ipv4: "IPv4 adresa",
              ipv6: "IPv6 adresa",
              cidrv4: "rozsah IPv4",
              cidrv6: "rozsah IPv6",
              base64: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64",
              base64url:
                "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64url",
              json_string: "\u0159et\u011Bzec ve form\xE1tu JSON",
              e164: "\u010D\xEDslo E.164",
              jwt: "JWT",
              template_literal: "vstup",
            },
            A = {
              nan: "NaN",
              number: "\u010D\xEDslo",
              string: "\u0159et\u011Bzec",
              function: "funkce",
              array: "pole",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no instanceof ${t.expected}, obdr\u017Eeno ${O}`
                  : `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${o}, obdr\u017Eeno ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${_.B7(t.values[0])}`
                  : `Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${t.origin ?? "hodnota"} mus\xED m\xEDt ${o}${t.maximum.toString()} ${g.unit ?? "prvk\u016F"}`
                  : `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${t.origin ?? "hodnota"} mus\xED b\xFDt ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${t.origin ?? "hodnota"} mus\xED m\xEDt ${o}${t.minimum.toString()} ${g.unit ?? "prvk\u016F"}`
                  : `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${t.origin ?? "hodnota"} mus\xED b\xFDt ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED za\u010D\xEDnat na "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED kon\u010Dit na "${o.suffix}"`
                    : o.format === "includes"
                      ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED obsahovat "${o.includes}"`
                      : o.format === "regex"
                        ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED odpov\xEDdat vzoru ${o.pattern}`
                        : `Neplatn\xFD form\xE1t ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Neplatn\xE9 \u010D\xEDslo: mus\xED b\xFDt n\xE1sobkem ${t.divisor}`;
              case "unrecognized_keys":
                return `Nezn\xE1m\xE9 kl\xED\u010De: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Neplatn\xFD kl\xED\u010D v ${t.origin}`;
              case "invalid_union":
                return "Neplatn\xFD vstup";
              case "invalid_element":
                return `Neplatn\xE1 hodnota v ${t.origin}`;
              default:
                return "Neplatn\xFD vstup";
            }
          };
        };
        function Ce() {
          return { localeError: $e() };
        }
        const Ae = () => {
          const Z = {
            string: { unit: "tegn", verb: "havde" },
            file: { unit: "bytes", verb: "havde" },
            array: { unit: "elementer", verb: "indeholdt" },
            set: { unit: "elementer", verb: "indeholdt" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
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
              datetime: "ISO dato- og klokkesl\xE6t",
              date: "ISO-dato",
              time: "ISO-klokkesl\xE6t",
              duration: "ISO-varighed",
              ipv4: "IPv4-omr\xE5de",
              ipv6: "IPv6-omr\xE5de",
              cidrv4: "IPv4-spektrum",
              cidrv6: "IPv6-spektrum",
              base64: "base64-kodet streng",
              base64url: "base64url-kodet streng",
              json_string: "JSON-streng",
              e164: "E.164-nummer",
              jwt: "JWT",
              template_literal: "input",
            },
            A = {
              nan: "NaN",
              string: "streng",
              number: "tal",
              boolean: "boolean",
              array: "liste",
              object: "objekt",
              set: "s\xE6t",
              file: "fil",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Ugyldigt input: forventede instanceof ${t.expected}, fik ${O}`
                  : `Ugyldigt input: forventede ${o}, fik ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Ugyldig v\xE6rdi: forventede ${_.B7(t.values[0])}`
                  : `Ugyldigt valg: forventede en af f\xF8lgende ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin),
                  O = A[t.origin] ?? t.origin;
                return g
                  ? `For stor: forventede ${O ?? "value"} ${g.verb} ${o} ${t.maximum.toString()} ${g.unit ?? "elementer"}`
                  : `For stor: forventede ${O ?? "value"} havde ${o} ${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin),
                  O = A[t.origin] ?? t.origin;
                return g
                  ? `For lille: forventede ${O} ${g.verb} ${o} ${t.minimum.toString()} ${g.unit}`
                  : `For lille: forventede ${O} havde ${o} ${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Ugyldig streng: skal starte med "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Ugyldig streng: skal ende med "${o.suffix}"`
                    : o.format === "includes"
                      ? `Ugyldig streng: skal indeholde "${o.includes}"`
                      : o.format === "regex"
                        ? `Ugyldig streng: skal matche m\xF8nsteret ${o.pattern}`
                        : `Ugyldig ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Ugyldigt tal: skal v\xE6re deleligt med ${t.divisor}`;
              case "unrecognized_keys":
                return `${t.keys.length > 1 ? "Ukendte n\xF8gler" : "Ukendt n\xF8gle"}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Ugyldig n\xF8gle i ${t.origin}`;
              case "invalid_union":
                return "Ugyldigt input: matcher ingen af de tilladte typer";
              case "invalid_element":
                return `Ugyldig v\xE6rdi i ${t.origin}`;
              default:
                return "Ugyldigt input";
            }
          };
        };
        function fe() {
          return { localeError: Ae() };
        }
        const K = () => {
          const Z = {
            string: { unit: "Zeichen", verb: "zu haben" },
            file: { unit: "Bytes", verb: "zu haben" },
            array: { unit: "Elemente", verb: "zu haben" },
            set: { unit: "Elemente", verb: "zu haben" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
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
            A = { nan: "NaN", number: "Zahl", array: "Array" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Ung\xFCltige Eingabe: erwartet instanceof ${t.expected}, erhalten ${O}`
                  : `Ung\xFCltige Eingabe: erwartet ${o}, erhalten ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Ung\xFCltige Eingabe: erwartet ${_.B7(t.values[0])}`
                  : `Ung\xFCltige Option: erwartet eine von ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `Zu gro\xDF: erwartet, dass ${t.origin ?? "Wert"} ${o}${t.maximum.toString()} ${g.unit ?? "Elemente"} hat`
                  : `Zu gro\xDF: erwartet, dass ${t.origin ?? "Wert"} ${o}${t.maximum.toString()} ist`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `Zu klein: erwartet, dass ${t.origin} ${o}${t.minimum.toString()} ${g.unit} hat`
                  : `Zu klein: erwartet, dass ${t.origin} ${o}${t.minimum.toString()} ist`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Ung\xFCltiger String: muss mit "${o.prefix}" beginnen`
                  : o.format === "ends_with"
                    ? `Ung\xFCltiger String: muss mit "${o.suffix}" enden`
                    : o.format === "includes"
                      ? `Ung\xFCltiger String: muss "${o.includes}" enthalten`
                      : o.format === "regex"
                        ? `Ung\xFCltiger String: muss dem Muster ${o.pattern} entsprechen`
                        : `Ung\xFCltig: ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Ung\xFCltige Zahl: muss ein Vielfaches von ${t.divisor} sein`;
              case "unrecognized_keys":
                return `${t.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel"}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Ung\xFCltiger Schl\xFCssel in ${t.origin}`;
              case "invalid_union":
                return "Ung\xFCltige Eingabe";
              case "invalid_element":
                return `Ung\xFCltiger Wert in ${t.origin}`;
              default:
                return "Ung\xFCltige Eingabe";
            }
          };
        };
        function _e() {
          return { localeError: K() };
        }
        const st = () => {
          const Z = {
            string: {
              unit: "\u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03B5\u03C2",
              verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9",
            },
            file: {
              unit: "bytes",
              verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9",
            },
            array: {
              unit: "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1",
              verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9",
            },
            set: {
              unit: "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1",
              verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9",
            },
            map: {
              unit: "\u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03B9\u03C2",
              verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9",
            },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "\u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2",
              email:
                "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 email",
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
              datetime:
                "ISO \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03BA\u03B1\u03B9 \u03CE\u03C1\u03B1",
              date: "ISO \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1",
              time: "ISO \u03CE\u03C1\u03B1",
              duration: "ISO \u03B4\u03B9\u03AC\u03C1\u03BA\u03B5\u03B9\u03B1",
              ipv4: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 IPv4",
              ipv6: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 IPv6",
              mac: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 MAC",
              cidrv4: "\u03B5\u03CD\u03C1\u03BF\u03C2 IPv4",
              cidrv6: "\u03B5\u03CD\u03C1\u03BF\u03C2 IPv6",
              base64:
                "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03B7 \u03C3\u03B5 base64",
              base64url:
                "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03B7 \u03C3\u03B5 base64url",
              json_string:
                "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC JSON",
              e164: "\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 E.164",
              jwt: "JWT",
              template_literal: "\u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2",
            },
            A = { nan: "NaN" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return typeof t.expected == "string" &&
                  /^[A-Z]/.test(t.expected)
                  ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD instanceof ${t.expected}, \u03BB\u03AE\u03C6\u03B8\u03B7\u03BA\u03B5 ${O}`
                  : `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${o}, \u03BB\u03AE\u03C6\u03B8\u03B7\u03BA\u03B5 ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${_.B7(t.values[0])}`
                  : `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD \u03AD\u03BD\u03B1 \u03B1\u03C0\u03CC ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B5\u03B3\u03AC\u03BB\u03BF: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${t.origin ?? "\u03C4\u03B9\u03BC\u03AE"} \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 ${o}${t.maximum.toString()} ${g.unit ?? "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1"}`
                  : `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B5\u03B3\u03AC\u03BB\u03BF: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${t.origin ?? "\u03C4\u03B9\u03BC\u03AE"} \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B9\u03BA\u03C1\u03CC: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${t.origin} \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 ${o}${t.minimum.toString()} ${g.unit}`
                  : `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B9\u03BA\u03C1\u03CC: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${t.origin} \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03BE\u03B5\u03BA\u03B9\u03BD\u03AC \u03BC\u03B5 "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B5\u03BB\u03B5\u03B9\u03CE\u03BD\u03B5\u03B9 \u03BC\u03B5 "${o.suffix}"`
                    : o.format === "includes"
                      ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C0\u03B5\u03C1\u03B9\u03AD\u03C7\u03B5\u03B9 "${o.includes}"`
                      : o.format === "regex"
                        ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03B5\u03B9 \u03BC\u03B5 \u03C4\u03BF \u03BC\u03BF\u03C4\u03AF\u03B2\u03BF ${o.pattern}`
                        : `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF: ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF\u03C2 \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AC\u03C3\u03B9\u03BF \u03C4\u03BF\u03C5 ${t.divisor}`;
              case "unrecognized_keys":
                return `\u0386\u03B3\u03BD\u03C9\u03C3\u03C4${t.keys.length > 1 ? "\u03B1" : "\u03BF"} \u03BA\u03BB\u03B5\u03B9\u03B4${t.keys.length > 1 ? "\u03B9\u03AC" : "\u03AF"}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF \u03BA\u03BB\u03B5\u03B9\u03B4\u03AF \u03C3\u03C4\u03BF ${t.origin}`;
              case "invalid_union":
                return "\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2";
              case "invalid_element":
                return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C4\u03B9\u03BC\u03AE \u03C3\u03C4\u03BF ${t.origin}`;
              default:
                return "\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2";
            }
          };
        };
        function tt() {
          return { localeError: st() };
        }
        var ut = H(84847);
        const Le = () => {
          const Z = {
            string: { unit: "karaktrojn", verb: "havi" },
            file: { unit: "bajtojn", verb: "havi" },
            array: { unit: "elementojn", verb: "havi" },
            set: { unit: "elementojn", verb: "havi" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "enigo",
              email: "retadreso",
              url: "URL",
              emoji: "emo\u011Dio",
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
              duration: "ISO-da\u016Dro",
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
            A = {
              nan: "NaN",
              number: "nombro",
              array: "tabelo",
              null: "senvalora",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Nevalida enigo: atendi\u011Dis instanceof ${t.expected}, ricevi\u011Dis ${O}`
                  : `Nevalida enigo: atendi\u011Dis ${o}, ricevi\u011Dis ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Nevalida enigo: atendi\u011Dis ${_.B7(t.values[0])}`
                  : `Nevalida opcio: atendi\u011Dis unu el ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `Tro granda: atendi\u011Dis ke ${t.origin ?? "valoro"} havu ${o}${t.maximum.toString()} ${g.unit ?? "elementojn"}`
                  : `Tro granda: atendi\u011Dis ke ${t.origin ?? "valoro"} havu ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `Tro malgranda: atendi\u011Dis ke ${t.origin} havu ${o}${t.minimum.toString()} ${g.unit}`
                  : `Tro malgranda: atendi\u011Dis ke ${t.origin} estu ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Nevalida karaktraro: devas komenci\u011Di per "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Nevalida karaktraro: devas fini\u011Di per "${o.suffix}"`
                    : o.format === "includes"
                      ? `Nevalida karaktraro: devas inkluzivi "${o.includes}"`
                      : o.format === "regex"
                        ? `Nevalida karaktraro: devas kongrui kun la modelo ${o.pattern}`
                        : `Nevalida ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Nevalida nombro: devas esti oblo de ${t.divisor}`;
              case "unrecognized_keys":
                return `Nekonata${t.keys.length > 1 ? "j" : ""} \u015Dlosilo${t.keys.length > 1 ? "j" : ""}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Nevalida \u015Dlosilo en ${t.origin}`;
              case "invalid_union":
                return "Nevalida enigo";
              case "invalid_element":
                return `Nevalida valoro en ${t.origin}`;
              default:
                return "Nevalida enigo";
            }
          };
        };
        function Me() {
          return { localeError: Le() };
        }
        const Ve = () => {
          const Z = {
            string: { unit: "caracteres", verb: "tener" },
            file: { unit: "bytes", verb: "tener" },
            array: { unit: "elementos", verb: "tener" },
            set: { unit: "elementos", verb: "tener" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "entrada",
              email: "direcci\xF3n de correo electr\xF3nico",
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
              duration: "duraci\xF3n ISO",
              ipv4: "direcci\xF3n IPv4",
              ipv6: "direcci\xF3n IPv6",
              cidrv4: "rango IPv4",
              cidrv6: "rango IPv6",
              base64: "cadena codificada en base64",
              base64url: "URL codificada en base64",
              json_string: "cadena JSON",
              e164: "n\xFAmero E.164",
              jwt: "JWT",
              template_literal: "entrada",
            },
            A = {
              nan: "NaN",
              string: "texto",
              number: "n\xFAmero",
              boolean: "booleano",
              array: "arreglo",
              object: "objeto",
              set: "conjunto",
              file: "archivo",
              date: "fecha",
              bigint: "n\xFAmero grande",
              symbol: "s\xEDmbolo",
              undefined: "indefinido",
              null: "nulo",
              function: "funci\xF3n",
              map: "mapa",
              record: "registro",
              tuple: "tupla",
              enum: "enumeraci\xF3n",
              union: "uni\xF3n",
              literal: "literal",
              promise: "promesa",
              void: "vac\xEDo",
              never: "nunca",
              unknown: "desconocido",
              any: "cualquiera",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Entrada inv\xE1lida: se esperaba instanceof ${t.expected}, recibido ${O}`
                  : `Entrada inv\xE1lida: se esperaba ${o}, recibido ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Entrada inv\xE1lida: se esperaba ${_.B7(t.values[0])}`
                  : `Opci\xF3n inv\xE1lida: se esperaba una de ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin),
                  O = A[t.origin] ?? t.origin;
                return g
                  ? `Demasiado grande: se esperaba que ${O ?? "valor"} tuviera ${o}${t.maximum.toString()} ${g.unit ?? "elementos"}`
                  : `Demasiado grande: se esperaba que ${O ?? "valor"} fuera ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin),
                  O = A[t.origin] ?? t.origin;
                return g
                  ? `Demasiado peque\xF1o: se esperaba que ${O} tuviera ${o}${t.minimum.toString()} ${g.unit}`
                  : `Demasiado peque\xF1o: se esperaba que ${O} fuera ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Cadena inv\xE1lida: debe comenzar con "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Cadena inv\xE1lida: debe terminar en "${o.suffix}"`
                    : o.format === "includes"
                      ? `Cadena inv\xE1lida: debe incluir "${o.includes}"`
                      : o.format === "regex"
                        ? `Cadena inv\xE1lida: debe coincidir con el patr\xF3n ${o.pattern}`
                        : `Inv\xE1lido ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `N\xFAmero inv\xE1lido: debe ser m\xFAltiplo de ${t.divisor}`;
              case "unrecognized_keys":
                return `Llave${t.keys.length > 1 ? "s" : ""} desconocida${t.keys.length > 1 ? "s" : ""}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Llave inv\xE1lida en ${A[t.origin] ?? t.origin}`;
              case "invalid_union":
                return "Entrada inv\xE1lida";
              case "invalid_element":
                return `Valor inv\xE1lido en ${A[t.origin] ?? t.origin}`;
              default:
                return "Entrada inv\xE1lida";
            }
          };
        };
        function pt() {
          return { localeError: Ve() };
        }
        const wt = () => {
          const Z = {
            string: {
              unit: "\u06A9\u0627\u0631\u0627\u06A9\u062A\u0631",
              verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
            },
            file: {
              unit: "\u0628\u0627\u06CC\u062A",
              verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
            },
            array: {
              unit: "\u0622\u06CC\u062A\u0645",
              verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
            },
            set: {
              unit: "\u0622\u06CC\u062A\u0645",
              verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
            },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "\u0648\u0631\u0648\u062F\u06CC",
              email: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
              url: "URL",
              emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
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
              datetime:
                "\u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
              date: "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0632\u0648",
              time: "\u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
              duration:
                "\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
              ipv4: "IPv4 \u0622\u062F\u0631\u0633",
              ipv6: "IPv6 \u0622\u062F\u0631\u0633",
              cidrv4: "IPv4 \u062F\u0627\u0645\u0646\u0647",
              cidrv6: "IPv6 \u062F\u0627\u0645\u0646\u0647",
              base64: "base64-encoded \u0631\u0634\u062A\u0647",
              base64url: "base64url-encoded \u0631\u0634\u062A\u0647",
              json_string: "JSON \u0631\u0634\u062A\u0647",
              e164: "E.164 \u0639\u062F\u062F",
              jwt: "JWT",
              template_literal: "\u0648\u0631\u0648\u062F\u06CC",
            },
            A = {
              nan: "NaN",
              number: "\u0639\u062F\u062F",
              array: "\u0622\u0631\u0627\u06CC\u0647",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A instanceof ${t.expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${O} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`
                  : `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${o} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${O} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${_.B7(t.values[0])} \u0645\u06CC\u200C\u0628\u0648\u062F`
                  : `\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 ${_.jw(t.values, "|")} \u0645\u06CC\u200C\u0628\u0648\u062F`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${t.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${o}${t.maximum.toString()} ${g.unit ?? "\u0639\u0646\u0635\u0631"} \u0628\u0627\u0634\u062F`
                  : `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${t.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${o}${t.maximum.toString()} \u0628\u0627\u0634\u062F`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${t.origin} \u0628\u0627\u06CC\u062F ${o}${t.minimum.toString()} ${g.unit} \u0628\u0627\u0634\u062F`
                  : `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${t.origin} \u0628\u0627\u06CC\u062F ${o}${t.minimum.toString()} \u0628\u0627\u0634\u062F`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${o.prefix}" \u0634\u0631\u0648\u0639 \u0634\u0648\u062F`
                  : o.format === "ends_with"
                    ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${o.suffix}" \u062A\u0645\u0627\u0645 \u0634\u0648\u062F`
                    : o.format === "includes"
                      ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 "${o.includes}" \u0628\u0627\u0634\u062F`
                      : o.format === "regex"
                        ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0644\u06AF\u0648\u06CC ${o.pattern} \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F`
                        : `${F[o.format] ?? t.format} \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
              }
              case "not_multiple_of":
                return `\u0639\u062F\u062F \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0645\u0636\u0631\u0628 ${t.divisor} \u0628\u0627\u0634\u062F`;
              case "unrecognized_keys":
                return `\u06A9\u0644\u06CC\u062F${t.keys.length > 1 ? "\u0647\u0627\u06CC" : ""} \u0646\u0627\u0634\u0646\u0627\u0633: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u06A9\u0644\u06CC\u062F \u0646\u0627\u0634\u0646\u0627\u0633 \u062F\u0631 ${t.origin}`;
              case "invalid_union":
                return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
              case "invalid_element":
                return `\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 ${t.origin}`;
              default:
                return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
            }
          };
        };
        function fn() {
          return { localeError: wt() };
        }
        const _t = () => {
          const Z = {
            string: { unit: "merkki\xE4", subject: "merkkijonon" },
            file: { unit: "tavua", subject: "tiedoston" },
            array: { unit: "alkiota", subject: "listan" },
            set: { unit: "alkiota", subject: "joukon" },
            number: { unit: "", subject: "luvun" },
            bigint: { unit: "", subject: "suuren kokonaisluvun" },
            int: { unit: "", subject: "kokonaisluvun" },
            date: { unit: "", subject: "p\xE4iv\xE4m\xE4\xE4r\xE4n" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "s\xE4\xE4nn\xF6llinen lauseke",
              email: "s\xE4hk\xF6postiosoite",
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
              date: "ISO-p\xE4iv\xE4m\xE4\xE4r\xE4",
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
            A = { nan: "NaN" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Virheellinen tyyppi: odotettiin instanceof ${t.expected}, oli ${O}`
                  : `Virheellinen tyyppi: odotettiin ${o}, oli ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Virheellinen sy\xF6te: t\xE4ytyy olla ${_.B7(t.values[0])}`
                  : `Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `Liian suuri: ${g.subject} t\xE4ytyy olla ${o}${t.maximum.toString()} ${g.unit}`.trim()
                  : `Liian suuri: arvon t\xE4ytyy olla ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `Liian pieni: ${g.subject} t\xE4ytyy olla ${o}${t.minimum.toString()} ${g.unit}`.trim()
                  : `Liian pieni: arvon t\xE4ytyy olla ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Virheellinen sy\xF6te: t\xE4ytyy alkaa "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Virheellinen sy\xF6te: t\xE4ytyy loppua "${o.suffix}"`
                    : o.format === "includes"
                      ? `Virheellinen sy\xF6te: t\xE4ytyy sis\xE4lt\xE4\xE4 "${o.includes}"`
                      : o.format === "regex"
                        ? `Virheellinen sy\xF6te: t\xE4ytyy vastata s\xE4\xE4nn\xF6llist\xE4 lauseketta ${o.pattern}`
                        : `Virheellinen ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Virheellinen luku: t\xE4ytyy olla luvun ${t.divisor} monikerta`;
              case "unrecognized_keys":
                return `${t.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return "Virheellinen avain tietueessa";
              case "invalid_union":
                return "Virheellinen unioni";
              case "invalid_element":
                return "Virheellinen arvo joukossa";
              default:
                return "Virheellinen sy\xF6te";
            }
          };
        };
        function Bt() {
          return { localeError: _t() };
        }
        const Qt = () => {
          const Z = {
            string: { unit: "caract\xE8res", verb: "avoir" },
            file: { unit: "octets", verb: "avoir" },
            array: { unit: "\xE9l\xE9ments", verb: "avoir" },
            set: { unit: "\xE9l\xE9ments", verb: "avoir" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "entr\xE9e",
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
              duration: "dur\xE9e ISO",
              ipv4: "adresse IPv4",
              ipv6: "adresse IPv6",
              cidrv4: "plage IPv4",
              cidrv6: "plage IPv6",
              base64: "cha\xEEne encod\xE9e en base64",
              base64url: "cha\xEEne encod\xE9e en base64url",
              json_string: "cha\xEEne JSON",
              e164: "num\xE9ro E.164",
              jwt: "JWT",
              template_literal: "entr\xE9e",
            },
            A = {
              string: "cha\xEEne",
              number: "nombre",
              int: "entier",
              boolean: "bool\xE9en",
              bigint: "grand entier",
              symbol: "symbole",
              undefined: "ind\xE9fini",
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
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Entr\xE9e invalide : instanceof ${t.expected} attendu, ${O} re\xE7u`
                  : `Entr\xE9e invalide : ${o} attendu, ${O} re\xE7u`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Entr\xE9e invalide : ${_.B7(t.values[0])} attendu`
                  : `Option invalide : une valeur parmi ${_.jw(t.values, "|")} attendue`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `Trop grand : ${A[t.origin] ?? "valeur"} doit ${g.verb} ${o}${t.maximum.toString()} ${g.unit ?? "\xE9l\xE9ment(s)"}`
                  : `Trop grand : ${A[t.origin] ?? "valeur"} doit \xEAtre ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `Trop petit : ${A[t.origin] ?? "valeur"} doit ${g.verb} ${o}${t.minimum.toString()} ${g.unit}`
                  : `Trop petit : ${A[t.origin] ?? "valeur"} doit \xEAtre ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Cha\xEEne invalide : doit commencer par "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Cha\xEEne invalide : doit se terminer par "${o.suffix}"`
                    : o.format === "includes"
                      ? `Cha\xEEne invalide : doit inclure "${o.includes}"`
                      : o.format === "regex"
                        ? `Cha\xEEne invalide : doit correspondre au mod\xE8le ${o.pattern}`
                        : `${F[o.format] ?? t.format} invalide`;
              }
              case "not_multiple_of":
                return `Nombre invalide : doit \xEAtre un multiple de ${t.divisor}`;
              case "unrecognized_keys":
                return `Cl\xE9${t.keys.length > 1 ? "s" : ""} non reconnue${t.keys.length > 1 ? "s" : ""} : ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Cl\xE9 invalide dans ${t.origin}`;
              case "invalid_union":
                return "Entr\xE9e invalide";
              case "invalid_element":
                return `Valeur invalide dans ${t.origin}`;
              default:
                return "Entr\xE9e invalide";
            }
          };
        };
        function It() {
          return { localeError: Qt() };
        }
        const Zt = () => {
          const Z = {
            string: { unit: "caract\xE8res", verb: "avoir" },
            file: { unit: "octets", verb: "avoir" },
            array: { unit: "\xE9l\xE9ments", verb: "avoir" },
            set: { unit: "\xE9l\xE9ments", verb: "avoir" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "entr\xE9e",
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
              duration: "dur\xE9e ISO",
              ipv4: "adresse IPv4",
              ipv6: "adresse IPv6",
              cidrv4: "plage IPv4",
              cidrv6: "plage IPv6",
              base64: "cha\xEEne encod\xE9e en base64",
              base64url: "cha\xEEne encod\xE9e en base64url",
              json_string: "cha\xEEne JSON",
              e164: "num\xE9ro E.164",
              jwt: "JWT",
              template_literal: "entr\xE9e",
            },
            A = { nan: "NaN" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Entr\xE9e invalide : attendu instanceof ${t.expected}, re\xE7u ${O}`
                  : `Entr\xE9e invalide : attendu ${o}, re\xE7u ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Entr\xE9e invalide : attendu ${_.B7(t.values[0])}`
                  : `Option invalide : attendu l'une des valeurs suivantes ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "\u2264" : "<",
                  g = C(t.origin);
                return g
                  ? `Trop grand : attendu que ${t.origin ?? "la valeur"} ait ${o}${t.maximum.toString()} ${g.unit}`
                  : `Trop grand : attendu que ${t.origin ?? "la valeur"} soit ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? "\u2265" : ">",
                  g = C(t.origin);
                return g
                  ? `Trop petit : attendu que ${t.origin} ait ${o}${t.minimum.toString()} ${g.unit}`
                  : `Trop petit : attendu que ${t.origin} soit ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Cha\xEEne invalide : doit commencer par "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Cha\xEEne invalide : doit se terminer par "${o.suffix}"`
                    : o.format === "includes"
                      ? `Cha\xEEne invalide : doit inclure "${o.includes}"`
                      : o.format === "regex"
                        ? `Cha\xEEne invalide : doit correspondre au motif ${o.pattern}`
                        : `${F[o.format] ?? t.format} invalide`;
              }
              case "not_multiple_of":
                return `Nombre invalide : doit \xEAtre un multiple de ${t.divisor}`;
              case "unrecognized_keys":
                return `Cl\xE9${t.keys.length > 1 ? "s" : ""} non reconnue${t.keys.length > 1 ? "s" : ""} : ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Cl\xE9 invalide dans ${t.origin}`;
              case "invalid_union":
                return "Entr\xE9e invalide";
              case "invalid_element":
                return `Valeur invalide dans ${t.origin}`;
              default:
                return "Entr\xE9e invalide";
            }
          };
        };
        function pn() {
          return { localeError: Zt() };
        }
        const St = () => {
          const Z = {
              string: {
                label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA",
                gender: "f",
              },
              number: { label: "\u05DE\u05E1\u05E4\u05E8", gender: "m" },
              boolean: {
                label:
                  "\u05E2\u05E8\u05DA \u05D1\u05D5\u05DC\u05D9\u05D0\u05E0\u05D9",
                gender: "m",
              },
              bigint: { label: "BigInt", gender: "m" },
              date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", gender: "m" },
              array: { label: "\u05DE\u05E2\u05E8\u05DA", gender: "m" },
              object: {
                label: "\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8",
                gender: "m",
              },
              null: {
                label: "\u05E2\u05E8\u05DA \u05E8\u05D9\u05E7 (null)",
                gender: "m",
              },
              undefined: {
                label:
                  "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05DE\u05D5\u05D2\u05D3\u05E8 (undefined)",
                gender: "m",
              },
              symbol: {
                label: "\u05E1\u05D9\u05DE\u05D1\u05D5\u05DC (Symbol)",
                gender: "m",
              },
              function: {
                label: "\u05E4\u05D5\u05E0\u05E7\u05E6\u05D9\u05D4",
                gender: "f",
              },
              map: { label: "\u05DE\u05E4\u05D4 (Map)", gender: "f" },
              set: {
                label: "\u05E7\u05D1\u05D5\u05E6\u05D4 (Set)",
                gender: "f",
              },
              file: { label: "\u05E7\u05D5\u05D1\u05E5", gender: "m" },
              promise: { label: "Promise", gender: "m" },
              NaN: { label: "NaN", gender: "m" },
              unknown: {
                label:
                  "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2",
                gender: "m",
              },
              value: { label: "\u05E2\u05E8\u05DA", gender: "m" },
            },
            C = {
              string: {
                unit: "\u05EA\u05D5\u05D5\u05D9\u05DD",
                shortLabel: "\u05E7\u05E6\u05E8",
                longLabel: "\u05D0\u05E8\u05D5\u05DA",
              },
              file: {
                unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD",
                shortLabel: "\u05E7\u05D8\u05DF",
                longLabel: "\u05D2\u05D3\u05D5\u05DC",
              },
              array: {
                unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
                shortLabel: "\u05E7\u05D8\u05DF",
                longLabel: "\u05D2\u05D3\u05D5\u05DC",
              },
              set: {
                unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
                shortLabel: "\u05E7\u05D8\u05DF",
                longLabel: "\u05D2\u05D3\u05D5\u05DC",
              },
              number: {
                unit: "",
                shortLabel: "\u05E7\u05D8\u05DF",
                longLabel: "\u05D2\u05D3\u05D5\u05DC",
              },
            },
            F = (q) => (q ? Z[q] : void 0),
            A = (q) => {
              const se = F(q);
              return se ? se.label : (q ?? Z.unknown.label);
            },
            t = (q) => `\u05D4${A(q)}`,
            o = (q) =>
              (F(q)?.gender ?? "m") === "f"
                ? "\u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA"
                : "\u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA",
            g = (q) => (q ? (C[q] ?? null) : null),
            O = {
              regex: { label: "\u05E7\u05DC\u05D8", gender: "m" },
              email: {
                label:
                  "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC",
                gender: "f",
              },
              url: {
                label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA",
                gender: "f",
              },
              emoji: {
                label: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9",
                gender: "m",
              },
              uuid: { label: "UUID", gender: "m" },
              nanoid: { label: "nanoid", gender: "m" },
              guid: { label: "GUID", gender: "m" },
              cuid: { label: "cuid", gender: "m" },
              cuid2: { label: "cuid2", gender: "m" },
              ulid: { label: "ULID", gender: "m" },
              xid: { label: "XID", gender: "m" },
              ksuid: { label: "KSUID", gender: "m" },
              datetime: {
                label:
                  "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO",
                gender: "m",
              },
              date: {
                label: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO",
                gender: "m",
              },
              time: { label: "\u05D6\u05DE\u05DF ISO", gender: "m" },
              duration: {
                label: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO",
                gender: "m",
              },
              ipv4: {
                label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4",
                gender: "f",
              },
              ipv6: {
                label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6",
                gender: "f",
              },
              cidrv4: { label: "\u05D8\u05D5\u05D5\u05D7 IPv4", gender: "m" },
              cidrv6: { label: "\u05D8\u05D5\u05D5\u05D7 IPv6", gender: "m" },
              base64: {
                label:
                  "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64",
                gender: "f",
              },
              base64url: {
                label:
                  "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA",
                gender: "f",
              },
              json_string: {
                label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON",
                gender: "f",
              },
              e164: { label: "\u05DE\u05E1\u05E4\u05E8 E.164", gender: "m" },
              jwt: { label: "JWT", gender: "m" },
              ends_with: { label: "\u05E7\u05DC\u05D8", gender: "m" },
              includes: { label: "\u05E7\u05DC\u05D8", gender: "m" },
              lowercase: { label: "\u05E7\u05DC\u05D8", gender: "m" },
              starts_with: { label: "\u05E7\u05DC\u05D8", gender: "m" },
              uppercase: { label: "\u05E7\u05DC\u05D8", gender: "m" },
            },
            je = { nan: "NaN" };
          return (q) => {
            switch (q.code) {
              case "invalid_type": {
                const se = q.expected,
                  Oe = je[se ?? ""] ?? A(se),
                  at = _.GW(q.input),
                  Ye = je[at] ?? Z[at]?.label ?? at;
                return /^[A-Z]/.test(q.expected)
                  ? `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA instanceof ${q.expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${Ye}`
                  : `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${Oe}, \u05D4\u05EA\u05E7\u05D1\u05DC ${Ye}`;
              }
              case "invalid_value": {
                if (q.values.length === 1)
                  return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05E2\u05E8\u05DA \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA ${_.B7(q.values[0])}`;
                const se = q.values.map((Ye) => _.B7(Ye));
                if (q.values.length === 2)
                  return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${se[0]} \u05D0\u05D5 ${se[1]}`;
                const Oe = se[se.length - 1];
                return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${se.slice(0, -1).join(", ")} \u05D0\u05D5 ${Oe}`;
              }
              case "too_big": {
                const se = g(q.origin),
                  Oe = t(q.origin ?? "value");
                if (q.origin === "string")
                  return `${se?.longLabel ?? "\u05D0\u05E8\u05D5\u05DA"} \u05DE\u05D3\u05D9: ${Oe} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${q.maximum.toString()} ${se?.unit ?? ""} ${q.inclusive ? "\u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA" : "\u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8"}`.trim();
                if (q.origin === "number") {
                  const ct = q.inclusive
                    ? `\u05E7\u05D8\u05DF \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${q.maximum}`
                    : `\u05E7\u05D8\u05DF \u05DE-${q.maximum}`;
                  return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${Oe} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${ct}`;
                }
                if (q.origin === "array" || q.origin === "set") {
                  const ct =
                      q.origin === "set"
                        ? "\u05E6\u05E8\u05D9\u05DB\u05D4"
                        : "\u05E6\u05E8\u05D9\u05DA",
                    yn = q.inclusive
                      ? `${q.maximum} ${se?.unit ?? ""} \u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA`
                      : `\u05E4\u05D7\u05D5\u05EA \u05DE-${q.maximum} ${se?.unit ?? ""}`;
                  return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${Oe} ${ct} \u05DC\u05D4\u05DB\u05D9\u05DC ${yn}`.trim();
                }
                const at = q.inclusive ? "<=" : "<",
                  Ye = o(q.origin ?? "value");
                return se?.unit
                  ? `${se.longLabel} \u05DE\u05D3\u05D9: ${Oe} ${Ye} ${at}${q.maximum.toString()} ${se.unit}`
                  : `${se?.longLabel ?? "\u05D2\u05D3\u05D5\u05DC"} \u05DE\u05D3\u05D9: ${Oe} ${Ye} ${at}${q.maximum.toString()}`;
              }
              case "too_small": {
                const se = g(q.origin),
                  Oe = t(q.origin ?? "value");
                if (q.origin === "string")
                  return `${se?.shortLabel ?? "\u05E7\u05E6\u05E8"} \u05DE\u05D3\u05D9: ${Oe} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${q.minimum.toString()} ${se?.unit ?? ""} ${q.inclusive ? "\u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8" : "\u05DC\u05E4\u05D7\u05D5\u05EA"}`.trim();
                if (q.origin === "number") {
                  const ct = q.inclusive
                    ? `\u05D2\u05D3\u05D5\u05DC \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${q.minimum}`
                    : `\u05D2\u05D3\u05D5\u05DC \u05DE-${q.minimum}`;
                  return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${Oe} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${ct}`;
                }
                if (q.origin === "array" || q.origin === "set") {
                  const ct =
                    q.origin === "set"
                      ? "\u05E6\u05E8\u05D9\u05DB\u05D4"
                      : "\u05E6\u05E8\u05D9\u05DA";
                  if (q.minimum === 1 && q.inclusive) {
                    const cn =
                      (q.origin === "set",
                      "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3");
                    return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${Oe} ${ct} \u05DC\u05D4\u05DB\u05D9\u05DC ${cn}`;
                  }
                  const yn = q.inclusive
                    ? `${q.minimum} ${se?.unit ?? ""} \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8`
                    : `\u05D9\u05D5\u05EA\u05E8 \u05DE-${q.minimum} ${se?.unit ?? ""}`;
                  return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${Oe} ${ct} \u05DC\u05D4\u05DB\u05D9\u05DC ${yn}`.trim();
                }
                const at = q.inclusive ? ">=" : ">",
                  Ye = o(q.origin ?? "value");
                return se?.unit
                  ? `${se.shortLabel} \u05DE\u05D3\u05D9: ${Oe} ${Ye} ${at}${q.minimum.toString()} ${se.unit}`
                  : `${se?.shortLabel ?? "\u05E7\u05D8\u05DF"} \u05DE\u05D3\u05D9: ${Oe} ${Ye} ${at}${q.minimum.toString()}`;
              }
              case "invalid_format": {
                const se = q;
                if (se.format === "starts_with")
                  return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1 "${se.prefix}"`;
                if (se.format === "ends_with")
                  return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 "${se.suffix}"`;
                if (se.format === "includes")
                  return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC "${se.includes}"`;
                if (se.format === "regex")
                  return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA ${se.pattern}`;
                const Oe = O[se.format],
                  at = Oe?.label ?? se.format,
                  ct =
                    (Oe?.gender ?? "m") === "f"
                      ? "\u05EA\u05E7\u05D9\u05E0\u05D4"
                      : "\u05EA\u05E7\u05D9\u05DF";
                return `${at} \u05DC\u05D0 ${ct}`;
              }
              case "not_multiple_of":
                return `\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC ${q.divisor}`;
              case "unrecognized_keys":
                return `\u05DE\u05E4\u05EA\u05D7${q.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${q.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${_.jw(q.keys, ", ")}`;
              case "invalid_key":
                return "\u05E9\u05D3\u05D4 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8";
              case "invalid_union":
                return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
              case "invalid_element":
                return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${t(q.origin ?? "array")}`;
              default:
                return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
            }
          };
        };
        function qe() {
          return { localeError: St() };
        }
        const Ft = () => {
          const Z = {
            string: { unit: "znakova", verb: "imati" },
            file: { unit: "bajtova", verb: "imati" },
            array: { unit: "stavki", verb: "imati" },
            set: { unit: "stavki", verb: "imati" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
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
            A = {
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
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Neispravan unos: o\u010Dekuje se instanceof ${t.expected}, a primljeno je ${O}`
                  : `Neispravan unos: o\u010Dekuje se ${o}, a primljeno je ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Neispravna vrijednost: o\u010Dekivano ${_.B7(t.values[0])}`
                  : `Neispravna opcija: o\u010Dekivano jedno od ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin),
                  O = A[t.origin] ?? t.origin;
                return g
                  ? `Preveliko: o\u010Dekivano da ${O ?? "vrijednost"} ima ${o}${t.maximum.toString()} ${g.unit ?? "elemenata"}`
                  : `Preveliko: o\u010Dekivano da ${O ?? "vrijednost"} bude ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin),
                  O = A[t.origin] ?? t.origin;
                return g
                  ? `Premalo: o\u010Dekivano da ${O} ima ${o}${t.minimum.toString()} ${g.unit}`
                  : `Premalo: o\u010Dekivano da ${O} bude ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Neispravan tekst: mora zapo\u010Dinjati s "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Neispravan tekst: mora zavr\u0161avati s "${o.suffix}"`
                    : o.format === "includes"
                      ? `Neispravan tekst: mora sadr\u017Eavati "${o.includes}"`
                      : o.format === "regex"
                        ? `Neispravan tekst: mora odgovarati uzorku ${o.pattern}`
                        : `Neispravna ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Neispravan broj: mora biti vi\u0161ekratnik od ${t.divisor}`;
              case "unrecognized_keys":
                return `Neprepoznat${t.keys.length > 1 ? "i klju\u010Devi" : " klju\u010D"}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Neispravan klju\u010D u ${A[t.origin] ?? t.origin}`;
              case "invalid_union":
                return "Neispravan unos";
              case "invalid_element":
                return `Neispravna vrijednost u ${A[t.origin] ?? t.origin}`;
              default:
                return "Neispravan unos";
            }
          };
        };
        function en() {
          return { localeError: Ft() };
        }
        const De = () => {
          const Z = {
            string: { unit: "karakter", verb: "legyen" },
            file: { unit: "byte", verb: "legyen" },
            array: { unit: "elem", verb: "legyen" },
            set: { unit: "elem", verb: "legyen" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "bemenet",
              email: "email c\xEDm",
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
              datetime: "ISO id\u0151b\xE9lyeg",
              date: "ISO d\xE1tum",
              time: "ISO id\u0151",
              duration: "ISO id\u0151intervallum",
              ipv4: "IPv4 c\xEDm",
              ipv6: "IPv6 c\xEDm",
              cidrv4: "IPv4 tartom\xE1ny",
              cidrv6: "IPv6 tartom\xE1ny",
              base64: "base64-k\xF3dolt string",
              base64url: "base64url-k\xF3dolt string",
              json_string: "JSON string",
              e164: "E.164 sz\xE1m",
              jwt: "JWT",
              template_literal: "bemenet",
            },
            A = { nan: "NaN", number: "sz\xE1m", array: "t\xF6mb" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k instanceof ${t.expected}, a kapott \xE9rt\xE9k ${O}`
                  : `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${o}, a kapott \xE9rt\xE9k ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${_.B7(t.values[0])}`
                  : `\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `T\xFAl nagy: ${t.origin ?? "\xE9rt\xE9k"} m\xE9rete t\xFAl nagy ${o}${t.maximum.toString()} ${g.unit ?? "elem"}`
                  : `T\xFAl nagy: a bemeneti \xE9rt\xE9k ${t.origin ?? "\xE9rt\xE9k"} t\xFAl nagy: ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${t.origin} m\xE9rete t\xFAl kicsi ${o}${t.minimum.toString()} ${g.unit}`
                  : `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${t.origin} t\xFAl kicsi ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\xC9rv\xE9nytelen string: "${o.prefix}" \xE9rt\xE9kkel kell kezd\u0151dnie`
                  : o.format === "ends_with"
                    ? `\xC9rv\xE9nytelen string: "${o.suffix}" \xE9rt\xE9kkel kell v\xE9gz\u0151dnie`
                    : o.format === "includes"
                      ? `\xC9rv\xE9nytelen string: "${o.includes}" \xE9rt\xE9ket kell tartalmaznia`
                      : o.format === "regex"
                        ? `\xC9rv\xE9nytelen string: ${o.pattern} mint\xE1nak kell megfelelnie`
                        : `\xC9rv\xE9nytelen ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\xC9rv\xE9nytelen sz\xE1m: ${t.divisor} t\xF6bbsz\xF6r\xF6s\xE9nek kell lennie`;
              case "unrecognized_keys":
                return `Ismeretlen kulcs${t.keys.length > 1 ? "s" : ""}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\xC9rv\xE9nytelen kulcs ${t.origin}`;
              case "invalid_union":
                return "\xC9rv\xE9nytelen bemenet";
              case "invalid_element":
                return `\xC9rv\xE9nytelen \xE9rt\xE9k: ${t.origin}`;
              default:
                return "\xC9rv\xE9nytelen bemenet";
            }
          };
        };
        function Ze() {
          return { localeError: De() };
        }
        function kt(Z, C, F) {
          return Math.abs(Z) === 1 ? C : F;
        }
        function nt(Z) {
          if (!Z) return "";
          const C = [
              "\u0561",
              "\u0565",
              "\u0568",
              "\u056B",
              "\u0578",
              "\u0578\u0582",
              "\u0585",
            ],
            F = Z[Z.length - 1];
          return Z + (C.includes(F) ? "\u0576" : "\u0568");
        }
        const zt = () => {
          const Z = {
            string: {
              unit: {
                one: "\u0576\u0577\u0561\u0576",
                many: "\u0576\u0577\u0561\u0576\u0576\u0565\u0580",
              },
              verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
            },
            file: {
              unit: {
                one: "\u0562\u0561\u0575\u0569",
                many: "\u0562\u0561\u0575\u0569\u0565\u0580",
              },
              verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
            },
            array: {
              unit: {
                one: "\u057F\u0561\u0580\u0580",
                many: "\u057F\u0561\u0580\u0580\u0565\u0580",
              },
              verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
            },
            set: {
              unit: {
                one: "\u057F\u0561\u0580\u0580",
                many: "\u057F\u0561\u0580\u0580\u0565\u0580",
              },
              verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
            },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "\u0574\u0578\u0582\u057F\u0584",
              email: "\u0567\u056C. \u0570\u0561\u057D\u0581\u0565",
              url: "URL",
              emoji: "\u0567\u0574\u0578\u057B\u056B",
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
              datetime:
                "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E \u0587 \u056A\u0561\u0574",
              date: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E",
              time: "ISO \u056A\u0561\u0574",
              duration:
                "ISO \u057F\u0587\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576",
              ipv4: "IPv4 \u0570\u0561\u057D\u0581\u0565",
              ipv6: "IPv6 \u0570\u0561\u057D\u0581\u0565",
              cidrv4: "IPv4 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
              cidrv6: "IPv6 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
              base64:
                "base64 \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
              base64url:
                "base64url \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
              json_string: "JSON \u057F\u0578\u0572",
              e164: "E.164 \u0570\u0561\u0574\u0561\u0580",
              jwt: "JWT",
              template_literal: "\u0574\u0578\u0582\u057F\u0584",
            },
            A = {
              nan: "NaN",
              number: "\u0569\u056B\u057E",
              array: "\u0566\u0561\u0576\u0563\u057E\u0561\u056E",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 instanceof ${t.expected}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${O}`
                  : `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${o}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${_.B7(t.values[1])}`
                  : `\u054D\u056D\u0561\u056C \u057F\u0561\u0580\u0562\u0565\u0580\u0561\u056F\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 \u0570\u0565\u057F\u0587\u0575\u0561\u056C\u0576\u0565\u0580\u056B\u0581 \u0574\u0565\u056F\u0568\u055D ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                if (g) {
                  const O = Number(t.maximum),
                    je = kt(O, g.unit.one, g.unit.many);
                  return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${nt(t.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${o}${t.maximum.toString()} ${je}`;
                }
                return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${nt(t.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056C\u056B\u0576\u056B ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                if (g) {
                  const O = Number(t.minimum),
                    je = kt(O, g.unit.one, g.unit.many);
                  return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${nt(t.origin)} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${o}${t.minimum.toString()} ${je}`;
                }
                return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${nt(t.origin)} \u056C\u056B\u0576\u056B ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057D\u056F\u057D\u057E\u056B "${o.prefix}"-\u0578\u057E`
                  : o.format === "ends_with"
                    ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0561\u057E\u0561\u0580\u057F\u057E\u056B "${o.suffix}"-\u0578\u057E`
                    : o.format === "includes"
                      ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057A\u0561\u0580\u0578\u0582\u0576\u0561\u056F\u056B "${o.includes}"`
                      : o.format === "regex"
                        ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0570\u0561\u0574\u0561\u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576\u056B ${o.pattern} \u0571\u0587\u0561\u0579\u0561\u0583\u056B\u0576`
                        : `\u054D\u056D\u0561\u056C ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u054D\u056D\u0561\u056C \u0569\u056B\u057E\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0562\u0561\u0566\u0574\u0561\u057A\u0561\u057F\u056B\u056F \u056C\u056B\u0576\u056B ${t.divisor}-\u056B`;
              case "unrecognized_keys":
                return `\u0549\u0573\u0561\u0576\u0561\u0579\u057E\u0561\u056E \u0562\u0561\u0576\u0561\u056C\u056B${t.keys.length > 1 ? "\u0576\u0565\u0580" : ""}. ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u054D\u056D\u0561\u056C \u0562\u0561\u0576\u0561\u056C\u056B ${nt(t.origin)}-\u0578\u0582\u0574`;
              case "invalid_union":
                return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
              case "invalid_element":
                return `\u054D\u056D\u0561\u056C \u0561\u0580\u056A\u0565\u0584 ${nt(t.origin)}-\u0578\u0582\u0574`;
              default:
                return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
            }
          };
        };
        function Lt() {
          return { localeError: zt() };
        }
        const mt = () => {
          const Z = {
            string: { unit: "karakter", verb: "memiliki" },
            file: { unit: "byte", verb: "memiliki" },
            array: { unit: "item", verb: "memiliki" },
            set: { unit: "item", verb: "memiliki" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
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
            A = { nan: "NaN" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Input tidak valid: diharapkan instanceof ${t.expected}, diterima ${O}`
                  : `Input tidak valid: diharapkan ${o}, diterima ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Input tidak valid: diharapkan ${_.B7(t.values[0])}`
                  : `Pilihan tidak valid: diharapkan salah satu dari ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `Terlalu besar: diharapkan ${t.origin ?? "value"} memiliki ${o}${t.maximum.toString()} ${g.unit ?? "elemen"}`
                  : `Terlalu besar: diharapkan ${t.origin ?? "value"} menjadi ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `Terlalu kecil: diharapkan ${t.origin} memiliki ${o}${t.minimum.toString()} ${g.unit}`
                  : `Terlalu kecil: diharapkan ${t.origin} menjadi ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `String tidak valid: harus dimulai dengan "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `String tidak valid: harus berakhir dengan "${o.suffix}"`
                    : o.format === "includes"
                      ? `String tidak valid: harus menyertakan "${o.includes}"`
                      : o.format === "regex"
                        ? `String tidak valid: harus sesuai pola ${o.pattern}`
                        : `${F[o.format] ?? t.format} tidak valid`;
              }
              case "not_multiple_of":
                return `Angka tidak valid: harus kelipatan dari ${t.divisor}`;
              case "unrecognized_keys":
                return `Kunci tidak dikenali ${t.keys.length > 1 ? "s" : ""}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Kunci tidak valid di ${t.origin}`;
              case "invalid_union":
                return "Input tidak valid";
              case "invalid_element":
                return `Nilai tidak valid di ${t.origin}`;
              default:
                return "Input tidak valid";
            }
          };
        };
        function rt() {
          return { localeError: mt() };
        }
        const Dt = () => {
          const Z = {
            string: { unit: "stafi", verb: "a\xF0 hafa" },
            file: { unit: "b\xE6ti", verb: "a\xF0 hafa" },
            array: { unit: "hluti", verb: "a\xF0 hafa" },
            set: { unit: "hluti", verb: "a\xF0 hafa" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "gildi",
              email: "netfang",
              url: "vefsl\xF3\xF0",
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
              datetime: "ISO dagsetning og t\xEDmi",
              date: "ISO dagsetning",
              time: "ISO t\xEDmi",
              duration: "ISO t\xEDmalengd",
              ipv4: "IPv4 address",
              ipv6: "IPv6 address",
              cidrv4: "IPv4 range",
              cidrv6: "IPv6 range",
              base64: "base64-encoded strengur",
              base64url: "base64url-encoded strengur",
              json_string: "JSON strengur",
              e164: "E.164 t\xF6lugildi",
              jwt: "JWT",
              template_literal: "gildi",
            },
            A = { nan: "NaN", number: "n\xFAmer", array: "fylki" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Rangt gildi: \xDE\xFA sl\xF3st inn ${O} \xFEar sem \xE1 a\xF0 vera instanceof ${t.expected}`
                  : `Rangt gildi: \xDE\xFA sl\xF3st inn ${O} \xFEar sem \xE1 a\xF0 vera ${o}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Rangt gildi: gert r\xE1\xF0 fyrir ${_.B7(t.values[0])}`
                  : `\xD3gilt val: m\xE1 vera eitt af eftirfarandi ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${t.origin ?? "gildi"} hafi ${o}${t.maximum.toString()} ${g.unit ?? "hluti"}`
                  : `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${t.origin ?? "gildi"} s\xE9 ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${t.origin} hafi ${o}${t.minimum.toString()} ${g.unit}`
                  : `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${t.origin} s\xE9 ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\xD3gildur strengur: ver\xF0ur a\xF0 byrja \xE1 "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `\xD3gildur strengur: ver\xF0ur a\xF0 enda \xE1 "${o.suffix}"`
                    : o.format === "includes"
                      ? `\xD3gildur strengur: ver\xF0ur a\xF0 innihalda "${o.includes}"`
                      : o.format === "regex"
                        ? `\xD3gildur strengur: ver\xF0ur a\xF0 fylgja mynstri ${o.pattern}`
                        : `Rangt ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `R\xF6ng tala: ver\xF0ur a\xF0 vera margfeldi af ${t.divisor}`;
              case "unrecognized_keys":
                return `\xD3\xFEekkt ${t.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Rangur lykill \xED ${t.origin}`;
              case "invalid_union":
                return "Rangt gildi";
              case "invalid_element":
                return `Rangt gildi \xED ${t.origin}`;
              default:
                return "Rangt gildi";
            }
          };
        };
        function tn() {
          return { localeError: Dt() };
        }
        const Mt = () => {
          const Z = {
            string: { unit: "caratteri", verb: "avere" },
            file: { unit: "byte", verb: "avere" },
            array: { unit: "elementi", verb: "avere" },
            set: { unit: "elementi", verb: "avere" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
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
            A = { nan: "NaN", number: "numero", array: "vettore" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Input non valido: atteso instanceof ${t.expected}, ricevuto ${O}`
                  : `Input non valido: atteso ${o}, ricevuto ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Input non valido: atteso ${_.B7(t.values[0])}`
                  : `Opzione non valida: atteso uno tra ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `Troppo grande: ${t.origin ?? "valore"} deve avere ${o}${t.maximum.toString()} ${g.unit ?? "elementi"}`
                  : `Troppo grande: ${t.origin ?? "valore"} deve essere ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `Troppo piccolo: ${t.origin} deve avere ${o}${t.minimum.toString()} ${g.unit}`
                  : `Troppo piccolo: ${t.origin} deve essere ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Stringa non valida: deve iniziare con "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Stringa non valida: deve terminare con "${o.suffix}"`
                    : o.format === "includes"
                      ? `Stringa non valida: deve includere "${o.includes}"`
                      : o.format === "regex"
                        ? `Stringa non valida: deve corrispondere al pattern ${o.pattern}`
                        : `Input non valido: ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Numero non valido: deve essere un multiplo di ${t.divisor}`;
              case "unrecognized_keys":
                return `Chiav${t.keys.length > 1 ? "i" : "e"} non riconosciut${t.keys.length > 1 ? "e" : "a"}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Chiave non valida in ${t.origin}`;
              case "invalid_union":
                return "Input non valido";
              case "invalid_element":
                return `Valore non valido in ${t.origin}`;
              default:
                return "Input non valido";
            }
          };
        };
        function Et() {
          return { localeError: Mt() };
        }
        const xt = () => {
          const Z = {
            string: { unit: "\u6587\u5B57", verb: "\u3067\u3042\u308B" },
            file: { unit: "\u30D0\u30A4\u30C8", verb: "\u3067\u3042\u308B" },
            array: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
            set: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "\u5165\u529B\u5024",
              email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
              url: "URL",
              emoji: "\u7D75\u6587\u5B57",
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
              datetime: "ISO\u65E5\u6642",
              date: "ISO\u65E5\u4ED8",
              time: "ISO\u6642\u523B",
              duration: "ISO\u671F\u9593",
              ipv4: "IPv4\u30A2\u30C9\u30EC\u30B9",
              ipv6: "IPv6\u30A2\u30C9\u30EC\u30B9",
              cidrv4: "IPv4\u7BC4\u56F2",
              cidrv6: "IPv6\u7BC4\u56F2",
              base64: "base64\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
              base64url:
                "base64url\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
              json_string: "JSON\u6587\u5B57\u5217",
              e164: "E.164\u756A\u53F7",
              jwt: "JWT",
              template_literal: "\u5165\u529B\u5024",
            },
            A = { nan: "NaN", number: "\u6570\u5024", array: "\u914D\u5217" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `\u7121\u52B9\u306A\u5165\u529B: instanceof ${t.expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${O}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`
                  : `\u7121\u52B9\u306A\u5165\u529B: ${o}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${O}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u7121\u52B9\u306A\u5165\u529B: ${_.B7(t.values[0])}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F`
                  : `\u7121\u52B9\u306A\u9078\u629E: ${_.jw(t.values, "\u3001")}\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
              case "too_big": {
                const o = t.inclusive
                    ? "\u4EE5\u4E0B\u3067\u3042\u308B"
                    : "\u3088\u308A\u5C0F\u3055\u3044",
                  g = C(t.origin);
                return g
                  ? `\u5927\u304D\u3059\u304E\u308B\u5024: ${t.origin ?? "\u5024"}\u306F${t.maximum.toString()}${g.unit ?? "\u8981\u7D20"}${o}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                  : `\u5927\u304D\u3059\u304E\u308B\u5024: ${t.origin ?? "\u5024"}\u306F${t.maximum.toString()}${o}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
              }
              case "too_small": {
                const o = t.inclusive
                    ? "\u4EE5\u4E0A\u3067\u3042\u308B"
                    : "\u3088\u308A\u5927\u304D\u3044",
                  g = C(t.origin);
                return g
                  ? `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${t.origin}\u306F${t.minimum.toString()}${g.unit}${o}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                  : `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${t.origin}\u306F${t.minimum.toString()}${o}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${o.prefix}"\u3067\u59CB\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                  : o.format === "ends_with"
                    ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${o.suffix}"\u3067\u7D42\u308F\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                    : o.format === "includes"
                      ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${o.includes}"\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                      : o.format === "regex"
                        ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: \u30D1\u30BF\u30FC\u30F3${o.pattern}\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                        : `\u7121\u52B9\u306A${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u7121\u52B9\u306A\u6570\u5024: ${t.divisor}\u306E\u500D\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
              case "unrecognized_keys":
                return `\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC${t.keys.length > 1 ? "\u7FA4" : ""}: ${_.jw(t.keys, "\u3001")}`;
              case "invalid_key":
                return `${t.origin}\u5185\u306E\u7121\u52B9\u306A\u30AD\u30FC`;
              case "invalid_union":
                return "\u7121\u52B9\u306A\u5165\u529B";
              case "invalid_element":
                return `${t.origin}\u5185\u306E\u7121\u52B9\u306A\u5024`;
              default:
                return "\u7121\u52B9\u306A\u5165\u529B";
            }
          };
        };
        function Pt() {
          return { localeError: xt() };
        }
        const Nt = () => {
          const Z = {
            string: {
              unit: "\u10E1\u10D8\u10DB\u10D1\u10DD\u10DA\u10DD",
              verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
            },
            file: {
              unit: "\u10D1\u10D0\u10D8\u10E2\u10D8",
              verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
            },
            array: {
              unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8",
              verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
            },
            set: {
              unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8",
              verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
            },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0",
              email:
                "\u10D4\u10DA-\u10E4\u10DD\u10E1\u10E2\u10D8\u10E1 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
              url: "URL",
              emoji: "\u10D4\u10DB\u10DD\u10EF\u10D8",
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
              datetime:
                "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8-\u10D3\u10E0\u10DD",
              date: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8",
              time: "\u10D3\u10E0\u10DD",
              duration:
                "\u10EE\u10D0\u10DC\u10D2\u10E0\u10EB\u10DA\u10D8\u10D5\u10DD\u10D1\u10D0",
              ipv4: "IPv4 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
              ipv6: "IPv6 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
              cidrv4:
                "IPv4 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
              cidrv6:
                "IPv6 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
              base64:
                "base64-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D5\u10D4\u10DA\u10D8",
              base64url:
                "base64url-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D5\u10D4\u10DA\u10D8",
              json_string: "JSON \u10D5\u10D4\u10DA\u10D8",
              e164: "E.164 \u10DC\u10DD\u10DB\u10D4\u10E0\u10D8",
              jwt: "JWT",
              template_literal: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0",
            },
            A = {
              nan: "NaN",
              number: "\u10E0\u10D8\u10EA\u10EE\u10D5\u10D8",
              string: "\u10D5\u10D4\u10DA\u10D8",
              boolean: "\u10D1\u10E3\u10DA\u10D4\u10D0\u10DC\u10D8",
              function: "\u10E4\u10E3\u10DC\u10E5\u10EA\u10D8\u10D0",
              array: "\u10DB\u10D0\u10E1\u10D8\u10D5\u10D8",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 instanceof ${t.expected}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${O}`
                  : `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${o}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${_.B7(t.values[0])}`
                  : `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D0\u10E0\u10D8\u10D0\u10DC\u10E2\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8\u10D0 \u10D4\u10E0\u10D7-\u10D4\u10E0\u10D7\u10D8 ${_.jw(t.values, "|")}-\u10D3\u10D0\u10DC`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${t.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} ${g.verb} ${o}${t.maximum.toString()} ${g.unit}`
                  : `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${t.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} \u10D8\u10E7\u10DD\u10E1 ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${t.origin} ${g.verb} ${o}${t.minimum.toString()} ${g.unit}`
                  : `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${t.origin} \u10D8\u10E7\u10DD\u10E1 ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10EC\u10E7\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${o.prefix}"-\u10D8\u10D7`
                  : o.format === "ends_with"
                    ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10DB\u10D7\u10D0\u10D5\u10E0\u10D3\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${o.suffix}"-\u10D8\u10D7`
                    : o.format === "includes"
                      ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1 "${o.includes}"-\u10E1`
                      : o.format === "regex"
                        ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D4\u10E1\u10D0\u10D1\u10D0\u10DB\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 \u10E8\u10D0\u10D1\u10DA\u10DD\u10DC\u10E1 ${o.pattern}`
                        : `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E0\u10D8\u10EA\u10EE\u10D5\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10E7\u10DD\u10E1 ${t.divisor}-\u10D8\u10E1 \u10EF\u10D4\u10E0\u10D0\u10D3\u10D8`;
              case "unrecognized_keys":
                return `\u10E3\u10EA\u10DC\u10DD\u10D1\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1${t.keys.length > 1 ? "\u10D4\u10D1\u10D8" : "\u10D8"}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1\u10D8 ${t.origin}-\u10E8\u10D8`;
              case "invalid_union":
                return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0";
              case "invalid_element":
                return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0 ${t.origin}-\u10E8\u10D8`;
              default:
                return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0";
            }
          };
        };
        function Dn() {
          return { localeError: Nt() };
        }
        const nn = () => {
          const Z = {
            string: {
              unit: "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A",
              verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
            },
            file: {
              unit: "\u1794\u17C3",
              verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
            },
            array: {
              unit: "\u1792\u17B6\u178F\u17BB",
              verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
            },
            set: {
              unit: "\u1792\u17B6\u178F\u17BB",
              verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
            },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex:
                "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
              email:
                "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u17A2\u17CA\u17B8\u1798\u17C2\u179B",
              url: "URL",
              emoji:
                "\u179F\u1789\u17D2\u1789\u17B6\u17A2\u17B6\u179A\u1798\u17D2\u1798\u178E\u17CD",
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
              datetime:
                "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 \u1793\u17B7\u1784\u1798\u17C9\u17C4\u1784 ISO",
              date: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 ISO",
              time: "\u1798\u17C9\u17C4\u1784 ISO",
              duration: "\u179A\u1799\u17C8\u1796\u17C1\u179B ISO",
              ipv4: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
              ipv6: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
              cidrv4:
                "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
              cidrv6:
                "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
              base64:
                "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64",
              base64url:
                "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64url",
              json_string:
                "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A JSON",
              e164: "\u179B\u17C1\u1781 E.164",
              jwt: "JWT",
              template_literal:
                "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
            },
            A = {
              nan: "NaN",
              number: "\u179B\u17C1\u1781",
              array: "\u17A2\u17B6\u179A\u17C1 (Array)",
              null: "\u1782\u17D2\u1798\u17B6\u1793\u178F\u1798\u17D2\u179B\u17C3 (null)",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A instanceof ${t.expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${O}`
                  : `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${o} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${_.B7(t.values[0])}`
                  : `\u1787\u1798\u17D2\u179A\u17BE\u179F\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u1793\u17BB\u1784\u1785\u17C6\u178E\u17C4\u1798 ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${o} ${t.maximum.toString()} ${g.unit ?? "\u1792\u17B6\u178F\u17BB"}`
                  : `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${o} ${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.origin} ${o} ${t.minimum.toString()} ${g.unit}`
                  : `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.origin} ${o} ${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u178A\u17C4\u1799 "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1794\u1789\u17D2\u1785\u1794\u17CB\u178A\u17C4\u1799 "${o.suffix}"`
                    : o.format === "includes"
                      ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793 "${o.includes}"`
                      : o.format === "regex"
                        ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1795\u17D2\u1782\u17BC\u1795\u17D2\u1782\u1784\u1793\u17B9\u1784\u1791\u1798\u17D2\u179A\u1784\u17CB\u178A\u17C2\u179B\u1794\u17B6\u1793\u1780\u17C6\u178E\u178F\u17CB ${o.pattern}`
                        : `\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u179B\u17C1\u1781\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1787\u17B6\u1796\u17A0\u17BB\u1782\u17BB\u178E\u1793\u17C3 ${t.divisor}`;
              case "unrecognized_keys":
                return `\u179A\u1780\u1783\u17BE\u1789\u179F\u17C4\u1798\u17B7\u1793\u179F\u17D2\u1782\u17B6\u179B\u17CB\u17D6 ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u179F\u17C4\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${t.origin}`;
              case "invalid_union":
                return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
              case "invalid_element":
                return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${t.origin}`;
              default:
                return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
            }
          };
        };
        function rn() {
          return { localeError: nn() };
        }
        function mn() {
          return rn();
        }
        const gn = () => {
          const Z = {
            string: { unit: "\uBB38\uC790", verb: "to have" },
            file: { unit: "\uBC14\uC774\uD2B8", verb: "to have" },
            array: { unit: "\uAC1C", verb: "to have" },
            set: { unit: "\uAC1C", verb: "to have" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "\uC785\uB825",
              email: "\uC774\uBA54\uC77C \uC8FC\uC18C",
              url: "URL",
              emoji: "\uC774\uBAA8\uC9C0",
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
              datetime: "ISO \uB0A0\uC9DC\uC2DC\uAC04",
              date: "ISO \uB0A0\uC9DC",
              time: "ISO \uC2DC\uAC04",
              duration: "ISO \uAE30\uAC04",
              ipv4: "IPv4 \uC8FC\uC18C",
              ipv6: "IPv6 \uC8FC\uC18C",
              cidrv4: "IPv4 \uBC94\uC704",
              cidrv6: "IPv6 \uBC94\uC704",
              base64: "base64 \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
              base64url: "base64url \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
              json_string: "JSON \uBB38\uC790\uC5F4",
              e164: "E.164 \uBC88\uD638",
              jwt: "JWT",
              template_literal: "\uC785\uB825",
            },
            A = { nan: "NaN" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 instanceof ${t.expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${O}\uC785\uB2C8\uB2E4`
                  : `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 ${o}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${O}\uC785\uB2C8\uB2E4`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ${_.B7(t.values[0])} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4`
                  : `\uC798\uBABB\uB41C \uC635\uC158: ${_.jw(t.values, "\uB610\uB294 ")} \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
              case "too_big": {
                const o = t.inclusive ? "\uC774\uD558" : "\uBBF8\uB9CC",
                  g =
                    o === "\uBBF8\uB9CC"
                      ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"
                      : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
                  O = C(t.origin),
                  je = O?.unit ?? "\uC694\uC18C";
                return O
                  ? `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${t.maximum.toString()}${je} ${o}${g}`
                  : `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${t.maximum.toString()} ${o}${g}`;
              }
              case "too_small": {
                const o = t.inclusive ? "\uC774\uC0C1" : "\uCD08\uACFC",
                  g =
                    o === "\uC774\uC0C1"
                      ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"
                      : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
                  O = C(t.origin),
                  je = O?.unit ?? "\uC694\uC18C";
                return O
                  ? `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${t.minimum.toString()}${je} ${o}${g}`
                  : `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${t.minimum.toString()} ${o}${g}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${o.prefix}"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4`
                  : o.format === "ends_with"
                    ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${o.suffix}"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4`
                    : o.format === "includes"
                      ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${o.includes}"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4`
                      : o.format === "regex"
                        ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD ${o.pattern} \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4`
                        : `\uC798\uBABB\uB41C ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\uC798\uBABB\uB41C \uC22B\uC790: ${t.divisor}\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
              case "unrecognized_keys":
                return `\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\uC798\uBABB\uB41C \uD0A4: ${t.origin}`;
              case "invalid_union":
                return "\uC798\uBABB\uB41C \uC785\uB825";
              case "invalid_element":
                return `\uC798\uBABB\uB41C \uAC12: ${t.origin}`;
              default:
                return "\uC798\uBABB\uB41C \uC785\uB825";
            }
          };
        };
        function Gt() {
          return { localeError: gn() };
        }
        const Je = (Z) => Z.charAt(0).toUpperCase() + Z.slice(1);
        function At(Z) {
          const C = Math.abs(Z),
            F = C % 10,
            A = C % 100;
          return (A >= 11 && A <= 19) || F === 0
            ? "many"
            : F === 1
              ? "one"
              : "few";
        }
        const vn = () => {
          const Z = {
            string: {
              unit: {
                one: "simbolis",
                few: "simboliai",
                many: "simboli\u0173",
              },
              verb: {
                smaller: {
                  inclusive: "turi b\u016Bti ne ilgesn\u0117 kaip",
                  notInclusive: "turi b\u016Bti trumpesn\u0117 kaip",
                },
                bigger: {
                  inclusive: "turi b\u016Bti ne trumpesn\u0117 kaip",
                  notInclusive: "turi b\u016Bti ilgesn\u0117 kaip",
                },
              },
            },
            file: {
              unit: { one: "baitas", few: "baitai", many: "bait\u0173" },
              verb: {
                smaller: {
                  inclusive: "turi b\u016Bti ne didesnis kaip",
                  notInclusive: "turi b\u016Bti ma\u017Eesnis kaip",
                },
                bigger: {
                  inclusive: "turi b\u016Bti ne ma\u017Eesnis kaip",
                  notInclusive: "turi b\u016Bti didesnis kaip",
                },
              },
            },
            array: {
              unit: {
                one: "element\u0105",
                few: "elementus",
                many: "element\u0173",
              },
              verb: {
                smaller: {
                  inclusive: "turi tur\u0117ti ne daugiau kaip",
                  notInclusive: "turi tur\u0117ti ma\u017Eiau kaip",
                },
                bigger: {
                  inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
                  notInclusive: "turi tur\u0117ti daugiau kaip",
                },
              },
            },
            set: {
              unit: {
                one: "element\u0105",
                few: "elementus",
                many: "element\u0173",
              },
              verb: {
                smaller: {
                  inclusive: "turi tur\u0117ti ne daugiau kaip",
                  notInclusive: "turi tur\u0117ti ma\u017Eiau kaip",
                },
                bigger: {
                  inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
                  notInclusive: "turi tur\u0117ti daugiau kaip",
                },
              },
            },
          };
          function C(t, o, g, O) {
            const je = Z[t] ?? null;
            return je === null
              ? je
              : {
                  unit: je.unit[o],
                  verb: je.verb[O][g ? "inclusive" : "notInclusive"],
                };
          }
          const F = {
              regex: "\u012Fvestis",
              email: "el. pa\u0161to adresas",
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
              duration: "ISO trukm\u0117",
              ipv4: "IPv4 adresas",
              ipv6: "IPv6 adresas",
              cidrv4: "IPv4 tinklo prefiksas (CIDR)",
              cidrv6: "IPv6 tinklo prefiksas (CIDR)",
              base64: "base64 u\u017Ekoduota eilut\u0117",
              base64url: "base64url u\u017Ekoduota eilut\u0117",
              json_string: "JSON eilut\u0117",
              e164: "E.164 numeris",
              jwt: "JWT",
              template_literal: "\u012Fvestis",
            },
            A = {
              nan: "NaN",
              number: "skai\u010Dius",
              bigint: "sveikasis skai\u010Dius",
              string: "eilut\u0117",
              boolean: "login\u0117 reik\u0161m\u0117",
              undefined: "neapibr\u0117\u017Eta reik\u0161m\u0117",
              function: "funkcija",
              symbol: "simbolis",
              array: "masyvas",
              object: "objektas",
              null: "nulin\u0117 reik\u0161m\u0117",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Gautas tipas ${O}, o tik\u0117tasi - instanceof ${t.expected}`
                  : `Gautas tipas ${O}, o tik\u0117tasi - ${o}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Privalo b\u016Bti ${_.B7(t.values[0])}`
                  : `Privalo b\u016Bti vienas i\u0161 ${_.jw(t.values, "|")} pasirinkim\u0173`;
              case "too_big": {
                const o = A[t.origin] ?? t.origin,
                  g = C(
                    t.origin,
                    At(Number(t.maximum)),
                    t.inclusive ?? !1,
                    "smaller",
                  );
                if (g?.verb)
                  return `${Je(o ?? t.origin ?? "reik\u0161m\u0117")} ${g.verb} ${t.maximum.toString()} ${g.unit ?? "element\u0173"}`;
                const O = t.inclusive
                  ? "ne didesnis kaip"
                  : "ma\u017Eesnis kaip";
                return `${Je(o ?? t.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${O} ${t.maximum.toString()} ${g?.unit}`;
              }
              case "too_small": {
                const o = A[t.origin] ?? t.origin,
                  g = C(
                    t.origin,
                    At(Number(t.minimum)),
                    t.inclusive ?? !1,
                    "bigger",
                  );
                if (g?.verb)
                  return `${Je(o ?? t.origin ?? "reik\u0161m\u0117")} ${g.verb} ${t.minimum.toString()} ${g.unit ?? "element\u0173"}`;
                const O = t.inclusive
                  ? "ne ma\u017Eesnis kaip"
                  : "didesnis kaip";
                return `${Je(o ?? t.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${O} ${t.minimum.toString()} ${g?.unit}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Eilut\u0117 privalo prasid\u0117ti "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Eilut\u0117 privalo pasibaigti "${o.suffix}"`
                    : o.format === "includes"
                      ? `Eilut\u0117 privalo \u012Ftraukti "${o.includes}"`
                      : o.format === "regex"
                        ? `Eilut\u0117 privalo atitikti ${o.pattern}`
                        : `Neteisingas ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Skai\u010Dius privalo b\u016Bti ${t.divisor} kartotinis.`;
              case "unrecognized_keys":
                return `Neatpa\u017Eint${t.keys.length > 1 ? "i" : "as"} rakt${t.keys.length > 1 ? "ai" : "as"}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return "Rastas klaidingas raktas";
              case "invalid_union":
                return "Klaidinga \u012Fvestis";
              case "invalid_element": {
                const o = A[t.origin] ?? t.origin;
                return `${Je(o ?? t.origin ?? "reik\u0161m\u0117")} turi klaiding\u0105 \u012Fvest\u012F`;
              }
              default:
                return "Klaidinga \u012Fvestis";
            }
          };
        };
        function gt() {
          return { localeError: vn() };
        }
        const En = () => {
          const Z = {
            string: {
              unit: "\u0437\u043D\u0430\u0446\u0438",
              verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
            },
            file: {
              unit: "\u0431\u0430\u0458\u0442\u0438",
              verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
            },
            array: {
              unit: "\u0441\u0442\u0430\u0432\u043A\u0438",
              verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
            },
            set: {
              unit: "\u0441\u0442\u0430\u0432\u043A\u0438",
              verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
            },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "\u0432\u043D\u0435\u0441",
              email:
                "\u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 \u0435-\u043F\u043E\u0448\u0442\u0430",
              url: "URL",
              emoji: "\u0435\u043C\u043E\u045F\u0438",
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
              datetime:
                "ISO \u0434\u0430\u0442\u0443\u043C \u0438 \u0432\u0440\u0435\u043C\u0435",
              date: "ISO \u0434\u0430\u0442\u0443\u043C",
              time: "ISO \u0432\u0440\u0435\u043C\u0435",
              duration:
                "ISO \u0432\u0440\u0435\u043C\u0435\u0442\u0440\u0430\u0435\u045A\u0435",
              ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441\u0430",
              ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441\u0430",
              cidrv4: "IPv4 \u043E\u043F\u0441\u0435\u0433",
              cidrv6: "IPv6 \u043E\u043F\u0441\u0435\u0433",
              base64:
                "base64-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
              base64url:
                "base64url-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
              json_string: "JSON \u043D\u0438\u0437\u0430",
              e164: "E.164 \u0431\u0440\u043E\u0458",
              jwt: "JWT",
              template_literal: "\u0432\u043D\u0435\u0441",
            },
            A = {
              nan: "NaN",
              number: "\u0431\u0440\u043E\u0458",
              array: "\u043D\u0438\u0437\u0430",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 instanceof ${t.expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${O}`
                  : `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${o}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Invalid input: expected ${_.B7(t.values[0])}`
                  : `\u0413\u0440\u0435\u0448\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u0458\u0430: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 \u0435\u0434\u043D\u0430 ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0438\u043C\u0430 ${o}${t.maximum.toString()} ${g.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438"}`
                  : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0431\u0438\u0434\u0435 ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.origin} \u0434\u0430 \u0438\u043C\u0430 ${o}${t.minimum.toString()} ${g.unit}`
                  : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.origin} \u0434\u0430 \u0431\u0438\u0434\u0435 ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0443\u0432\u0430 \u0441\u043E "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u0432\u0440\u0448\u0443\u0432\u0430 \u0441\u043E "${o.suffix}"`
                    : o.format === "includes"
                      ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0432\u043A\u043B\u0443\u0447\u0443\u0432\u0430 "${o.includes}"`
                      : o.format === "regex"
                        ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u043E\u0434\u0433\u043E\u0430\u0440\u0430 \u043D\u0430 \u043F\u0430\u0442\u0435\u0440\u043D\u043E\u0442 ${o.pattern}`
                        : `Invalid ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u0413\u0440\u0435\u0448\u0435\u043D \u0431\u0440\u043E\u0458: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0431\u0438\u0434\u0435 \u0434\u0435\u043B\u0438\u0432 \u0441\u043E ${t.divisor}`;
              case "unrecognized_keys":
                return `${t.keys.length > 1 ? "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D\u0438 \u043A\u043B\u0443\u0447\u0435\u0432\u0438" : "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D \u043A\u043B\u0443\u0447"}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u0413\u0440\u0435\u0448\u0435\u043D \u043A\u043B\u0443\u0447 \u0432\u043E ${t.origin}`;
              case "invalid_union":
                return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
              case "invalid_element":
                return `\u0413\u0440\u0435\u0448\u043D\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u043E ${t.origin}`;
              default:
                return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
            }
          };
        };
        function b() {
          return { localeError: En() };
        }
        const l = () => {
          const Z = {
            string: { unit: "aksara", verb: "mempunyai" },
            file: { unit: "bait", verb: "mempunyai" },
            array: { unit: "elemen", verb: "mempunyai" },
            set: { unit: "elemen", verb: "mempunyai" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
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
            A = { nan: "NaN", number: "nombor" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Input tidak sah: dijangka instanceof ${t.expected}, diterima ${O}`
                  : `Input tidak sah: dijangka ${o}, diterima ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Input tidak sah: dijangka ${_.B7(t.values[0])}`
                  : `Pilihan tidak sah: dijangka salah satu daripada ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `Terlalu besar: dijangka ${t.origin ?? "nilai"} ${g.verb} ${o}${t.maximum.toString()} ${g.unit ?? "elemen"}`
                  : `Terlalu besar: dijangka ${t.origin ?? "nilai"} adalah ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `Terlalu kecil: dijangka ${t.origin} ${g.verb} ${o}${t.minimum.toString()} ${g.unit}`
                  : `Terlalu kecil: dijangka ${t.origin} adalah ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `String tidak sah: mesti bermula dengan "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `String tidak sah: mesti berakhir dengan "${o.suffix}"`
                    : o.format === "includes"
                      ? `String tidak sah: mesti mengandungi "${o.includes}"`
                      : o.format === "regex"
                        ? `String tidak sah: mesti sepadan dengan corak ${o.pattern}`
                        : `${F[o.format] ?? t.format} tidak sah`;
              }
              case "not_multiple_of":
                return `Nombor tidak sah: perlu gandaan ${t.divisor}`;
              case "unrecognized_keys":
                return `Kunci tidak dikenali: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Kunci tidak sah dalam ${t.origin}`;
              case "invalid_union":
                return "Input tidak sah";
              case "invalid_element":
                return `Nilai tidak sah dalam ${t.origin}`;
              default:
                return "Input tidak sah";
            }
          };
        };
        function u() {
          return { localeError: l() };
        }
        const h = () => {
          const Z = {
            string: { unit: "tekens", verb: "heeft" },
            file: { unit: "bytes", verb: "heeft" },
            array: { unit: "elementen", verb: "heeft" },
            set: { unit: "elementen", verb: "heeft" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
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
            A = { nan: "NaN", number: "getal" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Ongeldige invoer: verwacht instanceof ${t.expected}, ontving ${O}`
                  : `Ongeldige invoer: verwacht ${o}, ontving ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Ongeldige invoer: verwacht ${_.B7(t.values[0])}`
                  : `Ongeldige optie: verwacht \xE9\xE9n van ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin),
                  O =
                    t.origin === "date"
                      ? "laat"
                      : t.origin === "string"
                        ? "lang"
                        : "groot";
                return g
                  ? `Te ${O}: verwacht dat ${t.origin ?? "waarde"} ${o}${t.maximum.toString()} ${g.unit ?? "elementen"} ${g.verb}`
                  : `Te ${O}: verwacht dat ${t.origin ?? "waarde"} ${o}${t.maximum.toString()} is`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin),
                  O =
                    t.origin === "date"
                      ? "vroeg"
                      : t.origin === "string"
                        ? "kort"
                        : "klein";
                return g
                  ? `Te ${O}: verwacht dat ${t.origin} ${o}${t.minimum.toString()} ${g.unit} ${g.verb}`
                  : `Te ${O}: verwacht dat ${t.origin} ${o}${t.minimum.toString()} is`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Ongeldige tekst: moet met "${o.prefix}" beginnen`
                  : o.format === "ends_with"
                    ? `Ongeldige tekst: moet op "${o.suffix}" eindigen`
                    : o.format === "includes"
                      ? `Ongeldige tekst: moet "${o.includes}" bevatten`
                      : o.format === "regex"
                        ? `Ongeldige tekst: moet overeenkomen met patroon ${o.pattern}`
                        : `Ongeldig: ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Ongeldig getal: moet een veelvoud van ${t.divisor} zijn`;
              case "unrecognized_keys":
                return `Onbekende key${t.keys.length > 1 ? "s" : ""}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Ongeldige key in ${t.origin}`;
              case "invalid_union":
                return "Ongeldige invoer";
              case "invalid_element":
                return `Ongeldige waarde in ${t.origin}`;
              default:
                return "Ongeldige invoer";
            }
          };
        };
        function p() {
          return { localeError: h() };
        }
        const D = () => {
          const Z = {
            string: { unit: "tegn", verb: "\xE5 ha" },
            file: { unit: "bytes", verb: "\xE5 ha" },
            array: { unit: "elementer", verb: "\xE5 inneholde" },
            set: { unit: "elementer", verb: "\xE5 inneholde" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
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
              ipv4: "IPv4-omr\xE5de",
              ipv6: "IPv6-omr\xE5de",
              cidrv4: "IPv4-spekter",
              cidrv6: "IPv6-spekter",
              base64: "base64-enkodet streng",
              base64url: "base64url-enkodet streng",
              json_string: "JSON-streng",
              e164: "E.164-nummer",
              jwt: "JWT",
              template_literal: "input",
            },
            A = { nan: "NaN", number: "tall", array: "liste" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Ugyldig input: forventet instanceof ${t.expected}, fikk ${O}`
                  : `Ugyldig input: forventet ${o}, fikk ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Ugyldig verdi: forventet ${_.B7(t.values[0])}`
                  : `Ugyldig valg: forventet en av ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `For stor(t): forventet ${t.origin ?? "value"} til \xE5 ha ${o}${t.maximum.toString()} ${g.unit ?? "elementer"}`
                  : `For stor(t): forventet ${t.origin ?? "value"} til \xE5 ha ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `For lite(n): forventet ${t.origin} til \xE5 ha ${o}${t.minimum.toString()} ${g.unit}`
                  : `For lite(n): forventet ${t.origin} til \xE5 ha ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Ugyldig streng: m\xE5 starte med "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Ugyldig streng: m\xE5 ende med "${o.suffix}"`
                    : o.format === "includes"
                      ? `Ugyldig streng: m\xE5 inneholde "${o.includes}"`
                      : o.format === "regex"
                        ? `Ugyldig streng: m\xE5 matche m\xF8nsteret ${o.pattern}`
                        : `Ugyldig ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Ugyldig tall: m\xE5 v\xE6re et multiplum av ${t.divisor}`;
              case "unrecognized_keys":
                return `${t.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel"}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Ugyldig n\xF8kkel i ${t.origin}`;
              case "invalid_union":
                return "Ugyldig input";
              case "invalid_element":
                return `Ugyldig verdi i ${t.origin}`;
              default:
                return "Ugyldig input";
            }
          };
        };
        function R() {
          return { localeError: D() };
        }
        const Y = () => {
          const Z = {
            string: { unit: "harf", verb: "olmal\u0131d\u0131r" },
            file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
            array: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
            set: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "giren",
              email: "epostag\xE2h",
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
              datetime: "ISO heng\xE2m\u0131",
              date: "ISO tarihi",
              time: "ISO zaman\u0131",
              duration: "ISO m\xFCddeti",
              ipv4: "IPv4 ni\u015F\xE2n\u0131",
              ipv6: "IPv6 ni\u015F\xE2n\u0131",
              cidrv4: "IPv4 menzili",
              cidrv6: "IPv6 menzili",
              base64: "base64-\u015Fifreli metin",
              base64url: "base64url-\u015Fifreli metin",
              json_string: "JSON metin",
              e164: "E.164 say\u0131s\u0131",
              jwt: "JWT",
              template_literal: "giren",
            },
            A = { nan: "NaN", number: "numara", array: "saf", null: "gayb" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `F\xE2sit giren: umulan instanceof ${t.expected}, al\u0131nan ${O}`
                  : `F\xE2sit giren: umulan ${o}, al\u0131nan ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `F\xE2sit giren: umulan ${_.B7(t.values[0])}`
                  : `F\xE2sit tercih: m\xFBteberler ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `Fazla b\xFCy\xFCk: ${t.origin ?? "value"}, ${o}${t.maximum.toString()} ${g.unit ?? "elements"} sahip olmal\u0131yd\u0131.`
                  : `Fazla b\xFCy\xFCk: ${t.origin ?? "value"}, ${o}${t.maximum.toString()} olmal\u0131yd\u0131.`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `Fazla k\xFC\xE7\xFCk: ${t.origin}, ${o}${t.minimum.toString()} ${g.unit} sahip olmal\u0131yd\u0131.`
                  : `Fazla k\xFC\xE7\xFCk: ${t.origin}, ${o}${t.minimum.toString()} olmal\u0131yd\u0131.`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `F\xE2sit metin: "${o.prefix}" ile ba\u015Flamal\u0131.`
                  : o.format === "ends_with"
                    ? `F\xE2sit metin: "${o.suffix}" ile bitmeli.`
                    : o.format === "includes"
                      ? `F\xE2sit metin: "${o.includes}" ihtiv\xE2 etmeli.`
                      : o.format === "regex"
                        ? `F\xE2sit metin: ${o.pattern} nak\u015F\u0131na uymal\u0131.`
                        : `F\xE2sit ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `F\xE2sit say\u0131: ${t.divisor} kat\u0131 olmal\u0131yd\u0131.`;
              case "unrecognized_keys":
                return `Tan\u0131nmayan anahtar ${t.keys.length > 1 ? "s" : ""}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `${t.origin} i\xE7in tan\u0131nmayan anahtar var.`;
              case "invalid_union":
                return "Giren tan\u0131namad\u0131.";
              case "invalid_element":
                return `${t.origin} i\xE7in tan\u0131nmayan k\u0131ymet var.`;
              default:
                return "K\u0131ymet tan\u0131namad\u0131.";
            }
          };
        };
        function ae() {
          return { localeError: Y() };
        }
        const X = () => {
          const Z = {
            string: {
              unit: "\u062A\u0648\u06A9\u064A",
              verb: "\u0648\u0644\u0631\u064A",
            },
            file: {
              unit: "\u0628\u0627\u06CC\u067C\u0633",
              verb: "\u0648\u0644\u0631\u064A",
            },
            array: {
              unit: "\u062A\u0648\u06A9\u064A",
              verb: "\u0648\u0644\u0631\u064A",
            },
            set: {
              unit: "\u062A\u0648\u06A9\u064A",
              verb: "\u0648\u0644\u0631\u064A",
            },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "\u0648\u0631\u0648\u062F\u064A",
              email: "\u0628\u0631\u06CC\u069A\u0646\u0627\u0644\u06CC\u06A9",
              url: "\u06CC\u0648 \u0622\u0631 \u0627\u0644",
              emoji: "\u0627\u06CC\u0645\u0648\u062C\u064A",
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
              datetime:
                "\u0646\u06CC\u067C\u0647 \u0627\u0648 \u0648\u062E\u062A",
              date: "\u0646\u06D0\u067C\u0647",
              time: "\u0648\u062E\u062A",
              duration: "\u0645\u0648\u062F\u0647",
              ipv4: "\u062F IPv4 \u067E\u062A\u0647",
              ipv6: "\u062F IPv6 \u067E\u062A\u0647",
              cidrv4: "\u062F IPv4 \u0633\u0627\u062D\u0647",
              cidrv6: "\u062F IPv6 \u0633\u0627\u062D\u0647",
              base64: "base64-encoded \u0645\u062A\u0646",
              base64url: "base64url-encoded \u0645\u062A\u0646",
              json_string: "JSON \u0645\u062A\u0646",
              e164: "\u062F E.164 \u0634\u0645\u06D0\u0631\u0647",
              jwt: "JWT",
              template_literal: "\u0648\u0631\u0648\u062F\u064A",
            },
            A = {
              nan: "NaN",
              number: "\u0639\u062F\u062F",
              array: "\u0627\u0631\u06D0",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F instanceof ${t.expected} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${O} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`
                  : `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${o} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${O} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${_.B7(t.values[0])} \u0648\u0627\u06CC`
                  : `\u0646\u0627\u0633\u0645 \u0627\u0646\u062A\u062E\u0627\u0628: \u0628\u0627\u06CC\u062F \u06CC\u0648 \u0644\u0647 ${_.jw(t.values, "|")} \u0685\u062E\u0647 \u0648\u0627\u06CC`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${t.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${o}${t.maximum.toString()} ${g.unit ?? "\u0639\u0646\u0635\u0631\u0648\u0646\u0647"} \u0648\u0644\u0631\u064A`
                  : `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${t.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${o}${t.maximum.toString()} \u0648\u064A`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${t.origin} \u0628\u0627\u06CC\u062F ${o}${t.minimum.toString()} ${g.unit} \u0648\u0644\u0631\u064A`
                  : `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${t.origin} \u0628\u0627\u06CC\u062F ${o}${t.minimum.toString()} \u0648\u064A`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${o.prefix}" \u0633\u0631\u0647 \u067E\u06CC\u0644 \u0634\u064A`
                  : o.format === "ends_with"
                    ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${o.suffix}" \u0633\u0631\u0647 \u067E\u0627\u06CC \u062A\u0647 \u0648\u0631\u0633\u064A\u0696\u064A`
                    : o.format === "includes"
                      ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F "${o.includes}" \u0648\u0644\u0631\u064A`
                      : o.format === "regex"
                        ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F ${o.pattern} \u0633\u0631\u0647 \u0645\u0637\u0627\u0628\u0642\u062A \u0648\u0644\u0631\u064A`
                        : `${F[o.format] ?? t.format} \u0646\u0627\u0633\u0645 \u062F\u06CC`;
              }
              case "not_multiple_of":
                return `\u0646\u0627\u0633\u0645 \u0639\u062F\u062F: \u0628\u0627\u06CC\u062F \u062F ${t.divisor} \u0645\u0636\u0631\u0628 \u0648\u064A`;
              case "unrecognized_keys":
                return `\u0646\u0627\u0633\u0645 ${t.keys.length > 1 ? "\u06A9\u0644\u06CC\u0689\u0648\u0646\u0647" : "\u06A9\u0644\u06CC\u0689"}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u0646\u0627\u0633\u0645 \u06A9\u0644\u06CC\u0689 \u067E\u0647 ${t.origin} \u06A9\u06D0`;
              case "invalid_union":
                return "\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A";
              case "invalid_element":
                return `\u0646\u0627\u0633\u0645 \u0639\u0646\u0635\u0631 \u067E\u0647 ${t.origin} \u06A9\u06D0`;
              default:
                return "\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A";
            }
          };
        };
        function be() {
          return { localeError: X() };
        }
        const pe = () => {
          const Z = {
            string: { unit: "znak\xF3w", verb: "mie\u0107" },
            file: { unit: "bajt\xF3w", verb: "mie\u0107" },
            array: { unit: "element\xF3w", verb: "mie\u0107" },
            set: { unit: "element\xF3w", verb: "mie\u0107" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "wyra\u017Cenie",
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
              base64: "ci\u0105g znak\xF3w zakodowany w formacie base64",
              base64url: "ci\u0105g znak\xF3w zakodowany w formacie base64url",
              json_string: "ci\u0105g znak\xF3w w formacie JSON",
              e164: "liczba E.164",
              jwt: "JWT",
              template_literal: "wej\u015Bcie",
            },
            A = { nan: "NaN", number: "liczba", array: "tablica" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano instanceof ${t.expected}, otrzymano ${O}`
                  : `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${o}, otrzymano ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${_.B7(t.values[0])}`
                  : `Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce ${t.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${o}${t.maximum.toString()} ${g.unit ?? "element\xF3w"}`
                  : `Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce ${t.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce ${t.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${o}${t.minimum.toString()} ${g.unit ?? "element\xF3w"}`
                  : `Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce ${t.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zaczyna\u0107 si\u0119 od "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi ko\u0144czy\u0107 si\u0119 na "${o.suffix}"`
                    : o.format === "includes"
                      ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zawiera\u0107 "${o.includes}"`
                      : o.format === "regex"
                        ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi odpowiada\u0107 wzorcowi ${o.pattern}`
                        : `Nieprawid\u0142ow(y/a/e) ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 ${t.divisor}`;
              case "unrecognized_keys":
                return `Nierozpoznane klucze${t.keys.length > 1 ? "s" : ""}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Nieprawid\u0142owy klucz w ${t.origin}`;
              case "invalid_union":
                return "Nieprawid\u0142owe dane wej\u015Bciowe";
              case "invalid_element":
                return `Nieprawid\u0142owa warto\u015B\u0107 w ${t.origin}`;
              default:
                return "Nieprawid\u0142owe dane wej\u015Bciowe";
            }
          };
        };
        function wi() {
          return { localeError: pe() };
        }
        const Si = () => {
          const Z = {
            string: { unit: "caracteres", verb: "ter" },
            file: { unit: "bytes", verb: "ter" },
            array: { unit: "itens", verb: "ter" },
            set: { unit: "itens", verb: "ter" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "padr\xE3o",
              email: "endere\xE7o de e-mail",
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
              duration: "dura\xE7\xE3o ISO",
              ipv4: "endere\xE7o IPv4",
              ipv6: "endere\xE7o IPv6",
              cidrv4: "faixa de IPv4",
              cidrv6: "faixa de IPv6",
              base64: "texto codificado em base64",
              base64url: "URL codificada em base64",
              json_string: "texto JSON",
              e164: "n\xFAmero E.164",
              jwt: "JWT",
              template_literal: "entrada",
            },
            A = { nan: "NaN", number: "n\xFAmero", null: "nulo" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Tipo inv\xE1lido: esperado instanceof ${t.expected}, recebido ${O}`
                  : `Tipo inv\xE1lido: esperado ${o}, recebido ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Entrada inv\xE1lida: esperado ${_.B7(t.values[0])}`
                  : `Op\xE7\xE3o inv\xE1lida: esperada uma das ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `Muito grande: esperado que ${t.origin ?? "valor"} tivesse ${o}${t.maximum.toString()} ${g.unit ?? "elementos"}`
                  : `Muito grande: esperado que ${t.origin ?? "valor"} fosse ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `Muito pequeno: esperado que ${t.origin} tivesse ${o}${t.minimum.toString()} ${g.unit}`
                  : `Muito pequeno: esperado que ${t.origin} fosse ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Texto inv\xE1lido: deve come\xE7ar com "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Texto inv\xE1lido: deve terminar com "${o.suffix}"`
                    : o.format === "includes"
                      ? `Texto inv\xE1lido: deve incluir "${o.includes}"`
                      : o.format === "regex"
                        ? `Texto inv\xE1lido: deve corresponder ao padr\xE3o ${o.pattern}`
                        : `${F[o.format] ?? t.format} inv\xE1lido`;
              }
              case "not_multiple_of":
                return `N\xFAmero inv\xE1lido: deve ser m\xFAltiplo de ${t.divisor}`;
              case "unrecognized_keys":
                return `Chave${t.keys.length > 1 ? "s" : ""} desconhecida${t.keys.length > 1 ? "s" : ""}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Chave inv\xE1lida em ${t.origin}`;
              case "invalid_union":
                return "Entrada inv\xE1lida";
              case "invalid_element":
                return `Valor inv\xE1lido em ${t.origin}`;
              default:
                return "Campo inv\xE1lido";
            }
          };
        };
        function Ir() {
          return { localeError: Si() };
        }
        const xr = () => {
          const Z = {
            string: { unit: "caractere", verb: "s\u0103 aib\u0103" },
            file: { unit: "octe\u021Bi", verb: "s\u0103 aib\u0103" },
            array: { unit: "elemente", verb: "s\u0103 aib\u0103" },
            set: { unit: "elemente", verb: "s\u0103 aib\u0103" },
            map: { unit: "intr\u0103ri", verb: "s\u0103 aib\u0103" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "intrare",
              email: "adres\u0103 de email",
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
              datetime: "dat\u0103 \u0219i or\u0103 ISO",
              date: "dat\u0103 ISO",
              time: "or\u0103 ISO",
              duration: "durat\u0103 ISO",
              ipv4: "adres\u0103 IPv4",
              ipv6: "adres\u0103 IPv6",
              mac: "adres\u0103 MAC",
              cidrv4: "interval IPv4",
              cidrv6: "interval IPv6",
              base64: "\u0219ir codat base64",
              base64url: "\u0219ir codat base64url",
              json_string: "\u0219ir JSON",
              e164: "num\u0103r E.164",
              jwt: "JWT",
              template_literal: "intrare",
            },
            A = {
              nan: "NaN",
              string: "\u0219ir",
              number: "num\u0103r",
              boolean: "boolean",
              function: "func\u021Bie",
              array: "matrice",
              object: "obiect",
              undefined: "nedefinit",
              symbol: "simbol",
              bigint: "num\u0103r mare",
              void: "void",
              never: "never",
              map: "hart\u0103",
              set: "set",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return `Intrare invalid\u0103: a\u0219teptat ${o}, primit ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Intrare invalid\u0103: a\u0219teptat ${_.B7(t.values[0])}`
                  : `Op\u021Biune invalid\u0103: a\u0219teptat una dintre ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `Prea mare: a\u0219teptat ca ${t.origin ?? "valoarea"} ${g.verb} ${o}${t.maximum.toString()} ${g.unit ?? "elemente"}`
                  : `Prea mare: a\u0219teptat ca ${t.origin ?? "valoarea"} s\u0103 fie ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `Prea mic: a\u0219teptat ca ${t.origin} ${g.verb} ${o}${t.minimum.toString()} ${g.unit}`
                  : `Prea mic: a\u0219teptat ca ${t.origin} s\u0103 fie ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u0218ir invalid: trebuie s\u0103 \xEEnceap\u0103 cu "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `\u0218ir invalid: trebuie s\u0103 se termine cu "${o.suffix}"`
                    : o.format === "includes"
                      ? `\u0218ir invalid: trebuie s\u0103 includ\u0103 "${o.includes}"`
                      : o.format === "regex"
                        ? `\u0218ir invalid: trebuie s\u0103 se potriveasc\u0103 cu modelul ${o.pattern}`
                        : `Format invalid: ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Num\u0103r invalid: trebuie s\u0103 fie multiplu de ${t.divisor}`;
              case "unrecognized_keys":
                return `Chei nerecunoscute: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Cheie invalid\u0103 \xEEn ${t.origin}`;
              case "invalid_union":
                return "Intrare invalid\u0103";
              case "invalid_element":
                return `Valoare invalid\u0103 \xEEn ${t.origin}`;
              default:
                return "Intrare invalid\u0103";
            }
          };
        };
        function wr() {
          return { localeError: xr() };
        }
        function tr(Z, C, F, A) {
          const t = Math.abs(Z),
            o = t % 10,
            g = t % 100;
          return g >= 11 && g <= 19
            ? A
            : o === 1
              ? C
              : o >= 2 && o <= 4
                ? F
                : A;
        }
        const on = () => {
          const Z = {
            string: {
              unit: {
                one: "\u0441\u0438\u043C\u0432\u043E\u043B",
                few: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
                many: "\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
              },
              verb: "\u0438\u043C\u0435\u0442\u044C",
            },
            file: {
              unit: {
                one: "\u0431\u0430\u0439\u0442",
                few: "\u0431\u0430\u0439\u0442\u0430",
                many: "\u0431\u0430\u0439\u0442",
              },
              verb: "\u0438\u043C\u0435\u0442\u044C",
            },
            array: {
              unit: {
                one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
                few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
                many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
              },
              verb: "\u0438\u043C\u0435\u0442\u044C",
            },
            set: {
              unit: {
                one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
                few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
                many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
              },
              verb: "\u0438\u043C\u0435\u0442\u044C",
            },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "\u0432\u0432\u043E\u0434",
              email: "email \u0430\u0434\u0440\u0435\u0441",
              url: "URL",
              emoji: "\u044D\u043C\u043E\u0434\u0437\u0438",
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
              datetime:
                "ISO \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
              date: "ISO \u0434\u0430\u0442\u0430",
              time: "ISO \u0432\u0440\u0435\u043C\u044F",
              duration:
                "ISO \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
              ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
              ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
              cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
              cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
              base64:
                "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64",
              base64url:
                "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64url",
              json_string: "JSON \u0441\u0442\u0440\u043E\u043A\u0430",
              e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
              jwt: "JWT",
              template_literal: "\u0432\u0432\u043E\u0434",
            },
            A = {
              nan: "NaN",
              number: "\u0447\u0438\u0441\u043B\u043E",
              array: "\u043C\u0430\u0441\u0441\u0438\u0432",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C instanceof ${t.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${O}`
                  : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${o}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${_.B7(t.values[0])}`
                  : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                if (g) {
                  const O = Number(t.maximum),
                    je = tr(O, g.unit.one, g.unit.few, g.unit.many);
                  return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${o}${t.maximum.toString()} ${je}`;
                }
                return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                if (g) {
                  const O = Number(t.minimum),
                    je = tr(O, g.unit.one, g.unit.few, g.unit.many);
                  return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${o}${t.minimum.toString()} ${je}`;
                }
                return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin} \u0431\u0443\u0434\u0435\u0442 ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 "${o.suffix}"`
                    : o.format === "includes"
                      ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C "${o.includes}"`
                      : o.format === "regex"
                        ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${o.pattern}`
                        : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${t.divisor}`;
              case "unrecognized_keys":
                return `\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D${t.keys.length > 1 ? "\u044B\u0435" : "\u044B\u0439"} \u043A\u043B\u044E\u0447${t.keys.length > 1 ? "\u0438" : ""}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0432 ${t.origin}`;
              case "invalid_union":
                return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
              case "invalid_element":
                return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 ${t.origin}`;
              default:
                return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
            }
          };
        };
        function ki() {
          return { localeError: on() };
        }
        const Sr = () => {
          const Z = {
            string: { unit: "znakov", verb: "imeti" },
            file: { unit: "bajtov", verb: "imeti" },
            array: { unit: "elementov", verb: "imeti" },
            set: { unit: "elementov", verb: "imeti" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "vnos",
              email: "e-po\u0161tni naslov",
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
              datetime: "ISO datum in \u010Das",
              date: "ISO datum",
              time: "ISO \u010Das",
              duration: "ISO trajanje",
              ipv4: "IPv4 naslov",
              ipv6: "IPv6 naslov",
              cidrv4: "obseg IPv4",
              cidrv6: "obseg IPv6",
              base64: "base64 kodiran niz",
              base64url: "base64url kodiran niz",
              json_string: "JSON niz",
              e164: "E.164 \u0161tevilka",
              jwt: "JWT",
              template_literal: "vnos",
            },
            A = { nan: "NaN", number: "\u0161tevilo", array: "tabela" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Neveljaven vnos: pri\u010Dakovano instanceof ${t.expected}, prejeto ${O}`
                  : `Neveljaven vnos: pri\u010Dakovano ${o}, prejeto ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Neveljaven vnos: pri\u010Dakovano ${_.B7(t.values[0])}`
                  : `Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `Preveliko: pri\u010Dakovano, da bo ${t.origin ?? "vrednost"} imelo ${o}${t.maximum.toString()} ${g.unit ?? "elementov"}`
                  : `Preveliko: pri\u010Dakovano, da bo ${t.origin ?? "vrednost"} ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `Premajhno: pri\u010Dakovano, da bo ${t.origin} imelo ${o}${t.minimum.toString()} ${g.unit}`
                  : `Premajhno: pri\u010Dakovano, da bo ${t.origin} ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Neveljaven niz: mora se za\u010Deti z "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Neveljaven niz: mora se kon\u010Dati z "${o.suffix}"`
                    : o.format === "includes"
                      ? `Neveljaven niz: mora vsebovati "${o.includes}"`
                      : o.format === "regex"
                        ? `Neveljaven niz: mora ustrezati vzorcu ${o.pattern}`
                        : `Neveljaven ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik ${t.divisor}`;
              case "unrecognized_keys":
                return `Neprepoznan${t.keys.length > 1 ? "i klju\u010Di" : " klju\u010D"}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Neveljaven klju\u010D v ${t.origin}`;
              case "invalid_union":
                return "Neveljaven vnos";
              case "invalid_element":
                return `Neveljavna vrednost v ${t.origin}`;
              default:
                return "Neveljaven vnos";
            }
          };
        };
        function Ot() {
          return { localeError: Sr() };
        }
        const kr = () => {
          const Z = {
            string: { unit: "tecken", verb: "att ha" },
            file: { unit: "bytes", verb: "att ha" },
            array: { unit: "objekt", verb: "att inneh\xE5lla" },
            set: { unit: "objekt", verb: "att inneh\xE5lla" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "regulj\xE4rt uttryck",
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
              base64: "base64-kodad str\xE4ng",
              base64url: "base64url-kodad str\xE4ng",
              json_string: "JSON-str\xE4ng",
              e164: "E.164-nummer",
              jwt: "JWT",
              template_literal: "mall-literal",
            },
            A = { nan: "NaN", number: "antal", array: "lista" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Ogiltig inmatning: f\xF6rv\xE4ntat instanceof ${t.expected}, fick ${O}`
                  : `Ogiltig inmatning: f\xF6rv\xE4ntat ${o}, fick ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Ogiltig inmatning: f\xF6rv\xE4ntat ${_.B7(t.values[0])}`
                  : `Ogiltigt val: f\xF6rv\xE4ntade en av ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `F\xF6r stor(t): f\xF6rv\xE4ntade ${t.origin ?? "v\xE4rdet"} att ha ${o}${t.maximum.toString()} ${g.unit ?? "element"}`
                  : `F\xF6r stor(t): f\xF6rv\xE4ntat ${t.origin ?? "v\xE4rdet"} att ha ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `F\xF6r lite(t): f\xF6rv\xE4ntade ${t.origin ?? "v\xE4rdet"} att ha ${o}${t.minimum.toString()} ${g.unit}`
                  : `F\xF6r lite(t): f\xF6rv\xE4ntade ${t.origin ?? "v\xE4rdet"} att ha ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Ogiltig str\xE4ng: m\xE5ste b\xF6rja med "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Ogiltig str\xE4ng: m\xE5ste sluta med "${o.suffix}"`
                    : o.format === "includes"
                      ? `Ogiltig str\xE4ng: m\xE5ste inneh\xE5lla "${o.includes}"`
                      : o.format === "regex"
                        ? `Ogiltig str\xE4ng: m\xE5ste matcha m\xF6nstret "${o.pattern}"`
                        : `Ogiltig(t) ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Ogiltigt tal: m\xE5ste vara en multipel av ${t.divisor}`;
              case "unrecognized_keys":
                return `${t.keys.length > 1 ? "Ok\xE4nda nycklar" : "Ok\xE4nd nyckel"}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Ogiltig nyckel i ${t.origin ?? "v\xE4rdet"}`;
              case "invalid_union":
                return "Ogiltig input";
              case "invalid_element":
                return `Ogiltigt v\xE4rde i ${t.origin ?? "v\xE4rdet"}`;
              default:
                return "Ogiltig input";
            }
          };
        };
        function it() {
          return { localeError: kr() };
        }
        const zr = () => {
          const Z = {
            string: {
              unit: "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BCD",
              verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
            },
            file: {
              unit: "\u0BAA\u0BC8\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD",
              verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
            },
            array: {
              unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
              verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
            },
            set: {
              unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
              verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
            },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "\u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1",
              email:
                "\u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
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
              datetime:
                "ISO \u0BA4\u0BC7\u0BA4\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
              date: "ISO \u0BA4\u0BC7\u0BA4\u0BBF",
              time: "ISO \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
              duration: "ISO \u0B95\u0BBE\u0BB2 \u0B85\u0BB3\u0BB5\u0BC1",
              ipv4: "IPv4 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
              ipv6: "IPv6 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
              cidrv4: "IPv4 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
              cidrv6: "IPv6 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
              base64: "base64-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
              base64url: "base64url-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
              json_string: "JSON \u0B9A\u0BB0\u0BAE\u0BCD",
              e164: "E.164 \u0B8E\u0BA3\u0BCD",
              jwt: "JWT",
              template_literal: "input",
            },
            A = {
              nan: "NaN",
              number: "\u0B8E\u0BA3\u0BCD",
              array: "\u0B85\u0BA3\u0BBF",
              null: "\u0BB5\u0BC6\u0BB1\u0BC1\u0BAE\u0BC8",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 instanceof ${t.expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${O}`
                  : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${o}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${_.B7(t.values[0])}`
                  : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${_.jw(t.values, "|")} \u0B87\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BC1`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${o}${t.maximum.toString()} ${g.unit ?? "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD"} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                  : `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${o}${t.maximum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.origin} ${o}${t.minimum.toString()} ${g.unit} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                  : `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.origin} ${o}${t.minimum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${o.prefix}" \u0B87\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                  : o.format === "ends_with"
                    ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${o.suffix}" \u0B87\u0BB2\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0B9F\u0BC8\u0BAF \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                    : o.format === "includes"
                      ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${o.includes}" \u0B90 \u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                      : o.format === "regex"
                        ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: ${o.pattern} \u0BAE\u0BC1\u0BB1\u0BC8\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B9F\u0BA9\u0BCD \u0BAA\u0BCA\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                        : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B8E\u0BA3\u0BCD: ${t.divisor} \u0B87\u0BA9\u0BCD \u0BAA\u0BB2\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
              case "unrecognized_keys":
                return `\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BAF\u0BBE\u0BA4 \u0BB5\u0BBF\u0B9A\u0BC8${t.keys.length > 1 ? "\u0B95\u0BB3\u0BCD" : ""}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `${t.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0B9A\u0BC8`;
              case "invalid_union":
                return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
              case "invalid_element":
                return `${t.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1`;
              default:
                return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
            }
          };
        };
        function Dr() {
          return { localeError: zr() };
        }
        const hn = () => {
          const Z = {
            string: {
              unit: "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
              verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
            },
            file: {
              unit: "\u0E44\u0E1A\u0E15\u0E4C",
              verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
            },
            array: {
              unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",
              verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
            },
            set: {
              unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",
              verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
            },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex:
                "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
              email:
                "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25",
              url: "URL",
              emoji: "\u0E2D\u0E34\u0E42\u0E21\u0E08\u0E34",
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
              datetime:
                "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
              date: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E1A\u0E1A ISO",
              time: "\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
              duration:
                "\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
              ipv4: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv4",
              ipv6: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv6",
              cidrv4: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv4",
              cidrv6: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv6",
              base64:
                "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64",
              base64url:
                "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A URL",
              json_string:
                "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A JSON",
              e164: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 (E.164)",
              jwt: "\u0E42\u0E17\u0E40\u0E04\u0E19 JWT",
              template_literal:
                "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
            },
            A = {
              nan: "NaN",
              number: "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02",
              array: "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E23\u0E22\u0E4C (Array)",
              null: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32 (null)",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 instanceof ${t.expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${O}`
                  : `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${o} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u0E04\u0E48\u0E32\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${_.B7(t.values[0])}`
                  : `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19 ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive
                    ? "\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19"
                    : "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32",
                  g = C(t.origin);
                return g
                  ? `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${t.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${t.maximum.toString()} ${g.unit ?? "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"}`
                  : `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${t.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive
                    ? "\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22"
                    : "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32",
                  g = C(t.origin);
                return g
                  ? `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${t.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${t.minimum.toString()} ${g.unit}`
                  : `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${t.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E02\u0E36\u0E49\u0E19\u0E15\u0E49\u0E19\u0E14\u0E49\u0E27\u0E22 "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E07\u0E17\u0E49\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22 "${o.suffix}"`
                    : o.format === "includes"
                      ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 "${o.includes}" \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21`
                      : o.format === "regex"
                        ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 ${o.pattern}`
                        : `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E32\u0E23\u0E14\u0E49\u0E27\u0E22 ${t.divisor} \u0E44\u0E14\u0E49\u0E25\u0E07\u0E15\u0E31\u0E27`;
              case "unrecognized_keys":
                return `\u0E1E\u0E1A\u0E04\u0E35\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u0E04\u0E35\u0E22\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${t.origin}`;
              case "invalid_union":
                return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E22\u0E39\u0E40\u0E19\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49";
              case "invalid_element":
                return `\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${t.origin}`;
              default:
                return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07";
            }
          };
        };
        function G() {
          return { localeError: hn() };
        }
        const Er = () => {
          const Z = {
            string: { unit: "karakter", verb: "olmal\u0131" },
            file: { unit: "bayt", verb: "olmal\u0131" },
            array: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
            set: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
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
              duration: "ISO s\xFCre",
              ipv4: "IPv4 adresi",
              ipv6: "IPv6 adresi",
              cidrv4: "IPv4 aral\u0131\u011F\u0131",
              cidrv6: "IPv6 aral\u0131\u011F\u0131",
              base64: "base64 ile \u015Fifrelenmi\u015F metin",
              base64url: "base64url ile \u015Fifrelenmi\u015F metin",
              json_string: "JSON dizesi",
              e164: "E.164 say\u0131s\u0131",
              jwt: "JWT",
              template_literal: "\u015Eablon dizesi",
            },
            A = { nan: "NaN" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Ge\xE7ersiz de\u011Fer: beklenen instanceof ${t.expected}, al\u0131nan ${O}`
                  : `Ge\xE7ersiz de\u011Fer: beklenen ${o}, al\u0131nan ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Ge\xE7ersiz de\u011Fer: beklenen ${_.B7(t.values[0])}`
                  : `Ge\xE7ersiz se\xE7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `\xC7ok b\xFCy\xFCk: beklenen ${t.origin ?? "de\u011Fer"} ${o}${t.maximum.toString()} ${g.unit ?? "\xF6\u011Fe"}`
                  : `\xC7ok b\xFCy\xFCk: beklenen ${t.origin ?? "de\u011Fer"} ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `\xC7ok k\xFC\xE7\xFCk: beklenen ${t.origin} ${o}${t.minimum.toString()} ${g.unit}`
                  : `\xC7ok k\xFC\xE7\xFCk: beklenen ${t.origin} ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Ge\xE7ersiz metin: "${o.prefix}" ile ba\u015Flamal\u0131`
                  : o.format === "ends_with"
                    ? `Ge\xE7ersiz metin: "${o.suffix}" ile bitmeli`
                    : o.format === "includes"
                      ? `Ge\xE7ersiz metin: "${o.includes}" i\xE7ermeli`
                      : o.format === "regex"
                        ? `Ge\xE7ersiz metin: ${o.pattern} desenine uymal\u0131`
                        : `Ge\xE7ersiz ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Ge\xE7ersiz say\u0131: ${t.divisor} ile tam b\xF6l\xFCnebilmeli`;
              case "unrecognized_keys":
                return `Tan\u0131nmayan anahtar${t.keys.length > 1 ? "lar" : ""}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `${t.origin} i\xE7inde ge\xE7ersiz anahtar`;
              case "invalid_union":
                return "Ge\xE7ersiz de\u011Fer";
              case "invalid_element":
                return `${t.origin} i\xE7inde ge\xE7ersiz de\u011Fer`;
              default:
                return "Ge\xE7ersiz de\u011Fer";
            }
          };
        };
        function Pr() {
          return { localeError: Er() };
        }
        const an = () => {
          const Z = {
            string: {
              unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432",
              verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
            },
            file: {
              unit: "\u0431\u0430\u0439\u0442\u0456\u0432",
              verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
            },
            array: {
              unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
              verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
            },
            set: {
              unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
              verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
            },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex:
                "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
              email:
                "\u0430\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438",
              url: "URL",
              emoji: "\u0435\u043C\u043E\u0434\u0437\u0456",
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
              datetime:
                "\u0434\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441 ISO",
              date: "\u0434\u0430\u0442\u0430 ISO",
              time: "\u0447\u0430\u0441 ISO",
              duration:
                "\u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C ISO",
              ipv4: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv4",
              ipv6: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv6",
              cidrv4: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv4",
              cidrv6: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv6",
              base64:
                "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64",
              base64url:
                "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64url",
              json_string: "\u0440\u044F\u0434\u043E\u043A JSON",
              e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
              jwt: "JWT",
              template_literal:
                "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
            },
            A = {
              nan: "NaN",
              number: "\u0447\u0438\u0441\u043B\u043E",
              array: "\u043C\u0430\u0441\u0438\u0432",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F instanceof ${t.expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${O}`
                  : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${o}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${_.B7(t.values[0])}`
                  : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043E\u043F\u0446\u0456\u044F: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u0435 \u0437 ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} ${g.verb} ${o}${t.maximum.toString()} ${g.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432"}`
                  : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} \u0431\u0443\u0434\u0435 ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${t.origin} ${g.verb} ${o}${t.minimum.toString()} ${g.unit}`
                  : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${t.origin} \u0431\u0443\u0434\u0435 ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 "${o.suffix}"`
                    : o.format === "includes"
                      ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043C\u0456\u0441\u0442\u0438\u0442\u0438 "${o.includes}"`
                      : o.format === "regex"
                        ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${o.pattern}`
                        : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0431\u0443\u0442\u0438 \u043A\u0440\u0430\u0442\u043D\u0438\u043C ${t.divisor}`;
              case "unrecognized_keys":
                return `\u041D\u0435\u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0438\u0439 \u043A\u043B\u044E\u0447${t.keys.length > 1 ? "\u0456" : ""}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043A\u043B\u044E\u0447 \u0443 ${t.origin}`;
              case "invalid_union":
                return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
              case "invalid_element":
                return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0443 ${t.origin}`;
              default:
                return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
            }
          };
        };
        function Pn() {
          return { localeError: an() };
        }
        function Xe() {
          return Pn();
        }
        const nr = () => {
          const Z = {
            string: {
              unit: "\u062D\u0631\u0648\u0641",
              verb: "\u06C1\u0648\u0646\u0627",
            },
            file: {
              unit: "\u0628\u0627\u0626\u0679\u0633",
              verb: "\u06C1\u0648\u0646\u0627",
            },
            array: {
              unit: "\u0622\u0626\u0679\u0645\u0632",
              verb: "\u06C1\u0648\u0646\u0627",
            },
            set: {
              unit: "\u0622\u0626\u0679\u0645\u0632",
              verb: "\u06C1\u0648\u0646\u0627",
            },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "\u0627\u0646 \u067E\u0679",
              email:
                "\u0627\u06CC \u0645\u06CC\u0644 \u0627\u06CC\u0688\u0631\u06CC\u0633",
              url: "\u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644",
              emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
              uuid: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
              uuidv4:
                "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 4",
              uuidv6:
                "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 6",
              nanoid:
                "\u0646\u06CC\u0646\u0648 \u0622\u0626\u06CC \u0688\u06CC",
              guid: "\u062C\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
              cuid: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
              cuid2:
                "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC 2",
              ulid: "\u06CC\u0648 \u0627\u06CC\u0644 \u0622\u0626\u06CC \u0688\u06CC",
              xid: "\u0627\u06CC\u06A9\u0633 \u0622\u0626\u06CC \u0688\u06CC",
              ksuid:
                "\u06A9\u06D2 \u0627\u06CC\u0633 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
              datetime:
                "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0688\u06CC\u0679 \u0679\u0627\u0626\u0645",
              date: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u062A\u0627\u0631\u06CC\u062E",
              time: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0648\u0642\u062A",
              duration:
                "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0645\u062F\u062A",
              ipv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0627\u06CC\u0688\u0631\u06CC\u0633",
              ipv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0627\u06CC\u0688\u0631\u06CC\u0633",
              cidrv4:
                "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0631\u06CC\u0646\u062C",
              cidrv6:
                "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0631\u06CC\u0646\u062C",
              base64:
                "\u0628\u06CC\u0633 64 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
              base64url:
                "\u0628\u06CC\u0633 64 \u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
              json_string:
                "\u062C\u06D2 \u0627\u06CC\u0633 \u0627\u0648 \u0627\u06CC\u0646 \u0633\u0679\u0631\u0646\u06AF",
              e164: "\u0627\u06CC 164 \u0646\u0645\u0628\u0631",
              jwt: "\u062C\u06D2 \u0688\u0628\u0644\u06CC\u0648 \u0679\u06CC",
              template_literal: "\u0627\u0646 \u067E\u0679",
            },
            A = {
              nan: "NaN",
              number: "\u0646\u0645\u0628\u0631",
              array: "\u0622\u0631\u06D2",
              null: "\u0646\u0644",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: instanceof ${t.expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${O} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`
                  : `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${o} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${O} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${_.B7(t.values[0])} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`
                  : `\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: ${_.jw(t.values, "|")} \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `\u0628\u06C1\u062A \u0628\u0691\u0627: ${t.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u06D2 ${o}${t.maximum.toString()} ${g.unit ?? "\u0639\u0646\u0627\u0635\u0631"} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`
                  : `\u0628\u06C1\u062A \u0628\u0691\u0627: ${t.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u0627 ${o}${t.maximum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${t.origin} \u06A9\u06D2 ${o}${t.minimum.toString()} ${g.unit} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`
                  : `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${t.origin} \u06A9\u0627 ${o}${t.minimum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${o.prefix}" \u0633\u06D2 \u0634\u0631\u0648\u0639 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
                  : o.format === "ends_with"
                    ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${o.suffix}" \u067E\u0631 \u062E\u062A\u0645 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
                    : o.format === "includes"
                      ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${o.includes}" \u0634\u0627\u0645\u0644 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
                      : o.format === "regex"
                        ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \u067E\u06CC\u0679\u0631\u0646 ${o.pattern} \u0633\u06D2 \u0645\u06CC\u0686 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
                        : `\u063A\u0644\u0637 ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u063A\u0644\u0637 \u0646\u0645\u0628\u0631: ${t.divisor} \u06A9\u0627 \u0645\u0636\u0627\u0639\u0641 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
              case "unrecognized_keys":
                return `\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC${t.keys.length > 1 ? "\u0632" : ""}: ${_.jw(t.keys, "\u060C ")}`;
              case "invalid_key":
                return `${t.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u06A9\u06CC`;
              case "invalid_union":
                return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
              case "invalid_element":
                return `${t.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u0648\u06CC\u0644\u06CC\u0648`;
              default:
                return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
            }
          };
        };
        function Or() {
          return { localeError: nr() };
        }
        const Ur = () => {
          const Z = {
            string: { unit: "belgi", verb: "bo\u2018lishi kerak" },
            file: { unit: "bayt", verb: "bo\u2018lishi kerak" },
            array: { unit: "element", verb: "bo\u2018lishi kerak" },
            set: { unit: "element", verb: "bo\u2018lishi kerak" },
            map: { unit: "yozuv", verb: "bo\u2018lishi kerak" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
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
            A = { nan: "NaN", number: "raqam", array: "massiv" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `Noto\u2018g\u2018ri kirish: kutilgan instanceof ${t.expected}, qabul qilingan ${O}`
                  : `Noto\u2018g\u2018ri kirish: kutilgan ${o}, qabul qilingan ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Noto\u2018g\u2018ri kirish: kutilgan ${_.B7(t.values[0])}`
                  : `Noto\u2018g\u2018ri variant: quyidagilardan biri kutilgan ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `Juda katta: kutilgan ${t.origin ?? "qiymat"} ${o}${t.maximum.toString()} ${g.unit} ${g.verb}`
                  : `Juda katta: kutilgan ${t.origin ?? "qiymat"} ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `Juda kichik: kutilgan ${t.origin} ${o}${t.minimum.toString()} ${g.unit} ${g.verb}`
                  : `Juda kichik: kutilgan ${t.origin} ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Noto\u2018g\u2018ri satr: "${o.prefix}" bilan boshlanishi kerak`
                  : o.format === "ends_with"
                    ? `Noto\u2018g\u2018ri satr: "${o.suffix}" bilan tugashi kerak`
                    : o.format === "includes"
                      ? `Noto\u2018g\u2018ri satr: "${o.includes}" ni o\u2018z ichiga olishi kerak`
                      : o.format === "regex"
                        ? `Noto\u2018g\u2018ri satr: ${o.pattern} shabloniga mos kelishi kerak`
                        : `Noto\u2018g\u2018ri ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Noto\u2018g\u2018ri raqam: ${t.divisor} ning karralisi bo\u2018lishi kerak`;
              case "unrecognized_keys":
                return `Noma\u2019lum kalit${t.keys.length > 1 ? "lar" : ""}: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `${t.origin} dagi kalit noto\u2018g\u2018ri`;
              case "invalid_union":
                return "Noto\u2018g\u2018ri kirish";
              case "invalid_element":
                return `${t.origin} da noto\u2018g\u2018ri qiymat`;
              default:
                return "Noto\u2018g\u2018ri kirish";
            }
          };
        };
        function zi() {
          return { localeError: Ur() };
        }
        const ea = () => {
          const Z = {
            string: { unit: "k\xFD t\u1EF1", verb: "c\xF3" },
            file: { unit: "byte", verb: "c\xF3" },
            array: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
            set: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "\u0111\u1EA7u v\xE0o",
              email: "\u0111\u1ECBa ch\u1EC9 email",
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
              datetime: "ng\xE0y gi\u1EDD ISO",
              date: "ng\xE0y ISO",
              time: "gi\u1EDD ISO",
              duration: "kho\u1EA3ng th\u1EDDi gian ISO",
              ipv4: "\u0111\u1ECBa ch\u1EC9 IPv4",
              ipv6: "\u0111\u1ECBa ch\u1EC9 IPv6",
              cidrv4: "d\u1EA3i IPv4",
              cidrv6: "d\u1EA3i IPv6",
              base64: "chu\u1ED7i m\xE3 h\xF3a base64",
              base64url: "chu\u1ED7i m\xE3 h\xF3a base64url",
              json_string: "chu\u1ED7i JSON",
              e164: "s\u1ED1 E.164",
              jwt: "JWT",
              template_literal: "\u0111\u1EA7u v\xE0o",
            },
            A = { nan: "NaN", number: "s\u1ED1", array: "m\u1EA3ng" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i instanceof ${t.expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${O}`
                  : `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${o}, nh\u1EADn \u0111\u01B0\u1EE3c ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${_.B7(t.values[0])}`
                  : `T\xF9y ch\u1ECDn kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\xE1c gi\xE1 tr\u1ECB ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${t.origin ?? "gi\xE1 tr\u1ECB"} ${g.verb} ${o}${t.maximum.toString()} ${g.unit ?? "ph\u1EA7n t\u1EED"}`
                  : `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${t.origin ?? "gi\xE1 tr\u1ECB"} ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${t.origin} ${g.verb} ${o}${t.minimum.toString()} ${g.unit}`
                  : `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${t.origin} ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\xFAc b\u1EB1ng "${o.suffix}"`
                    : o.format === "includes"
                      ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m "${o.includes}"`
                      : o.format === "regex"
                        ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu ${o.pattern}`
                        : `${F[o.format] ?? t.format} kh\xF4ng h\u1EE3p l\u1EC7`;
              }
              case "not_multiple_of":
                return `S\u1ED1 kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\xE0 b\u1ED9i s\u1ED1 c\u1EE7a ${t.divisor}`;
              case "unrecognized_keys":
                return `Kh\xF3a kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Kh\xF3a kh\xF4ng h\u1EE3p l\u1EC7 trong ${t.origin}`;
              case "invalid_union":
                return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
              case "invalid_element":
                return `Gi\xE1 tr\u1ECB kh\xF4ng h\u1EE3p l\u1EC7 trong ${t.origin}`;
              default:
                return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
            }
          };
        };
        function jt() {
          return { localeError: ea() };
        }
        const Ge = () => {
          const Z = {
            string: { unit: "\u5B57\u7B26", verb: "\u5305\u542B" },
            file: { unit: "\u5B57\u8282", verb: "\u5305\u542B" },
            array: { unit: "\u9879", verb: "\u5305\u542B" },
            set: { unit: "\u9879", verb: "\u5305\u542B" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "\u8F93\u5165",
              email: "\u7535\u5B50\u90AE\u4EF6",
              url: "URL",
              emoji: "\u8868\u60C5\u7B26\u53F7",
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
              datetime: "ISO\u65E5\u671F\u65F6\u95F4",
              date: "ISO\u65E5\u671F",
              time: "ISO\u65F6\u95F4",
              duration: "ISO\u65F6\u957F",
              ipv4: "IPv4\u5730\u5740",
              ipv6: "IPv6\u5730\u5740",
              cidrv4: "IPv4\u7F51\u6BB5",
              cidrv6: "IPv6\u7F51\u6BB5",
              base64: "base64\u7F16\u7801\u5B57\u7B26\u4E32",
              base64url: "base64url\u7F16\u7801\u5B57\u7B26\u4E32",
              json_string: "JSON\u5B57\u7B26\u4E32",
              e164: "E.164\u53F7\u7801",
              jwt: "JWT",
              template_literal: "\u8F93\u5165",
            },
            A = {
              nan: "NaN",
              number: "\u6570\u5B57",
              array: "\u6570\u7EC4",
              null: "\u7A7A\u503C(null)",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B instanceof ${t.expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${O}`
                  : `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${o}\uFF0C\u5B9E\u9645\u63A5\u6536 ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${_.B7(t.values[0])}`
                  : `\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${t.origin ?? "\u503C"} ${o}${t.maximum.toString()} ${g.unit ?? "\u4E2A\u5143\u7D20"}`
                  : `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${t.origin ?? "\u503C"} ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${t.origin} ${o}${t.minimum.toString()} ${g.unit}`
                  : `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${t.origin} ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${o.prefix}" \u5F00\u5934`
                  : o.format === "ends_with"
                    ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${o.suffix}" \u7ED3\u5C3E`
                    : o.format === "includes"
                      ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u5305\u542B "${o.includes}"`
                      : o.format === "regex"
                        ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u6EE1\u8DB3\u6B63\u5219\u8868\u8FBE\u5F0F ${o.pattern}`
                        : `\u65E0\u6548${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u65E0\u6548\u6570\u5B57\uFF1A\u5FC5\u987B\u662F ${t.divisor} \u7684\u500D\u6570`;
              case "unrecognized_keys":
                return `\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `${t.origin} \u4E2D\u7684\u952E(key)\u65E0\u6548`;
              case "invalid_union":
                return "\u65E0\u6548\u8F93\u5165";
              case "invalid_element":
                return `${t.origin} \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)`;
              default:
                return "\u65E0\u6548\u8F93\u5165";
            }
          };
        };
        function Be() {
          return { localeError: Ge() };
        }
        const ot = () => {
          const Z = {
            string: { unit: "\u5B57\u5143", verb: "\u64C1\u6709" },
            file: { unit: "\u4F4D\u5143\u7D44", verb: "\u64C1\u6709" },
            array: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
            set: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "\u8F38\u5165",
              email: "\u90F5\u4EF6\u5730\u5740",
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
              datetime: "ISO \u65E5\u671F\u6642\u9593",
              date: "ISO \u65E5\u671F",
              time: "ISO \u6642\u9593",
              duration: "ISO \u671F\u9593",
              ipv4: "IPv4 \u4F4D\u5740",
              ipv6: "IPv6 \u4F4D\u5740",
              cidrv4: "IPv4 \u7BC4\u570D",
              cidrv6: "IPv6 \u7BC4\u570D",
              base64: "base64 \u7DE8\u78BC\u5B57\u4E32",
              base64url: "base64url \u7DE8\u78BC\u5B57\u4E32",
              json_string: "JSON \u5B57\u4E32",
              e164: "E.164 \u6578\u503C",
              jwt: "JWT",
              template_literal: "\u8F38\u5165",
            },
            A = { nan: "NaN" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA instanceof ${t.expected}\uFF0C\u4F46\u6536\u5230 ${O}`
                  : `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${o}\uFF0C\u4F46\u6536\u5230 ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${_.B7(t.values[0])}`
                  : `\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${t.origin ?? "\u503C"} \u61C9\u70BA ${o}${t.maximum.toString()} ${g.unit ?? "\u500B\u5143\u7D20"}`
                  : `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${t.origin ?? "\u503C"} \u61C9\u70BA ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${t.origin} \u61C9\u70BA ${o}${t.minimum.toString()} ${g.unit}`
                  : `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${t.origin} \u61C9\u70BA ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${o.prefix}" \u958B\u982D`
                  : o.format === "ends_with"
                    ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${o.suffix}" \u7D50\u5C3E`
                    : o.format === "includes"
                      ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u5305\u542B "${o.includes}"`
                      : o.format === "regex"
                        ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u7B26\u5408\u683C\u5F0F ${o.pattern}`
                        : `\u7121\u6548\u7684 ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u7121\u6548\u7684\u6578\u5B57\uFF1A\u5FC5\u9808\u70BA ${t.divisor} \u7684\u500D\u6578`;
              case "unrecognized_keys":
                return `\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C${t.keys.length > 1 ? "\u5011" : ""}\uFF1A${_.jw(t.keys, "\u3001")}`;
              case "invalid_key":
                return `${t.origin} \u4E2D\u6709\u7121\u6548\u7684\u9375\u503C`;
              case "invalid_union":
                return "\u7121\u6548\u7684\u8F38\u5165\u503C";
              case "invalid_element":
                return `${t.origin} \u4E2D\u6709\u7121\u6548\u7684\u503C`;
              default:
                return "\u7121\u6548\u7684\u8F38\u5165\u503C";
            }
          };
        };
        function lt() {
          return { localeError: ot() };
        }
        const Wt = () => {
          const Z = {
            string: { unit: "\xE0mi", verb: "n\xED" },
            file: { unit: "bytes", verb: "n\xED" },
            array: { unit: "nkan", verb: "n\xED" },
            set: { unit: "nkan", verb: "n\xED" },
          };
          function C(t) {
            return Z[t] ?? null;
          }
          const F = {
              regex: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9",
              email: "\xE0d\xEDr\u1EB9\u0301s\xEC \xECm\u1EB9\u0301l\xEC",
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
              datetime: "\xE0k\xF3k\xF2 ISO",
              date: "\u1ECDj\u1ECD\u0301 ISO",
              time: "\xE0k\xF3k\xF2 ISO",
              duration: "\xE0k\xF3k\xF2 t\xF3 p\xE9 ISO",
              ipv4: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv4",
              ipv6: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv6",
              cidrv4: "\xE0gb\xE8gb\xE8 IPv4",
              cidrv6: "\xE0gb\xE8gb\xE8 IPv6",
              base64:
                "\u1ECD\u0300r\u1ECD\u0300 t\xED a k\u1ECD\u0301 n\xED base64",
              base64url: "\u1ECD\u0300r\u1ECD\u0300 base64url",
              json_string: "\u1ECD\u0300r\u1ECD\u0300 JSON",
              e164: "n\u1ECD\u0301mb\xE0 E.164",
              jwt: "JWT",
              template_literal: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9",
            },
            A = {
              nan: "NaN",
              number: "n\u1ECD\u0301mb\xE0",
              array: "akop\u1ECD",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = A[t.expected] ?? t.expected,
                  g = _.GW(t.input),
                  O = A[g] ?? g;
                return /^[A-Z]/.test(t.expected)
                  ? `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi instanceof ${t.expected}, \xE0m\u1ECD\u0300 a r\xED ${O}`
                  : `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${o}, \xE0m\u1ECD\u0300 a r\xED ${O}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${_.B7(t.values[0])}`
                  : `\xC0\u1E63\xE0y\xE0n a\u1E63\xEC\u1E63e: yan \u1ECD\u0300kan l\xE1ra ${_.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  g = C(t.origin);
                return g
                  ? `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${t.origin ?? "iye"} ${g.verb} ${o}${t.maximum} ${g.unit}`
                  : `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 ${o}${t.maximum}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  g = C(t.origin);
                return g
                  ? `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${t.origin} ${g.verb} ${o}${t.minimum} ${g.unit}`
                  : `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 ${o}${t.minimum}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\u1EB9\u0300r\u1EB9\u0300 p\u1EB9\u0300l\xFA "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 par\xED p\u1EB9\u0300l\xFA "${o.suffix}"`
                    : o.format === "includes"
                      ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 n\xED "${o.includes}"`
                      : o.format === "regex"
                        ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\xE1 \xE0p\u1EB9\u1EB9r\u1EB9 mu ${o.pattern}`
                        : `A\u1E63\xEC\u1E63e: ${F[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `N\u1ECD\u0301mb\xE0 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 j\u1EB9\u0301 \xE8y\xE0 p\xEDp\xEDn ti ${t.divisor}`;
              case "unrecognized_keys":
                return `B\u1ECDt\xECn\xEC \xE0\xECm\u1ECD\u0300: ${_.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `B\u1ECDt\xECn\xEC a\u1E63\xEC\u1E63e n\xEDn\xFA ${t.origin}`;
              case "invalid_union":
                return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
              case "invalid_element":
                return `Iye a\u1E63\xEC\u1E63e n\xEDn\xFA ${t.origin}`;
              default:
                return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
            }
          };
        };
        function vt() {
          return { localeError: Wt() };
        }
      },
    },
  ]);
})();
