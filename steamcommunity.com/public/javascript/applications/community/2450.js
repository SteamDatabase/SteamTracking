/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2450],
  {
    90068: (e, n) => {
      var t;
      !(function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function o() {
          for (var e = [], n = 0; n < arguments.length; n++) {
            var t = arguments[n];
            if (t) {
              var u = typeof t;
              if ("string" === u || "number" === u) e.push(t);
              else if (Array.isArray(t)) {
                if (t.length) {
                  var s = o.apply(null, t);
                  s && e.push(s);
                }
              } else if ("object" === u) {
                if (
                  t.toString !== Object.prototype.toString &&
                  !t.toString.toString().includes("[native code]")
                ) {
                  e.push(t.toString());
                  continue;
                }
                for (var c in t) r.call(t, c) && t[c] && e.push(c);
              }
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 ===
              (t = function () {
                return o;
              }.apply(n, [])) || (e.exports = t);
      })();
    },
    94621: (e, n, t) => {
      "use strict";
      t.d(n, { Ej: () => v, UU: () => d, we: () => a });
      var r = t(38889),
        o = t(90626),
        u = t(72739),
        s = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
      function c(e, n) {
        if (e === n) return !0;
        if (typeof e != typeof n) return !1;
        if ("function" == typeof e && e.toString() === n.toString()) return !0;
        let t, r, o;
        if (e && n && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (((t = e.length), t !== n.length)) return !1;
            for (r = t; 0 != r--; ) if (!c(e[r], n[r])) return !1;
            return !0;
          }
          if (
            ((o = Object.keys(e)), (t = o.length), t !== Object.keys(n).length)
          )
            return !1;
          for (r = t; 0 != r--; )
            if (!{}.hasOwnProperty.call(n, o[r])) return !1;
          for (r = t; 0 != r--; ) {
            const t = o[r];
            if (("_owner" !== t || !e.$$typeof) && !c(e[t], n[t])) return !1;
          }
          return !0;
        }
        return e != e && n != n;
      }
      function i(e) {
        if ("undefined" == typeof window) return 1;
        return (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function l(e, n) {
        const t = i(e);
        return Math.round(n * t) / t;
      }
      function f(e) {
        const n = o.useRef(e);
        return (
          s(() => {
            n.current = e;
          }),
          n
        );
      }
      function a(e) {
        void 0 === e && (e = {});
        const {
            placement: n = "bottom",
            strategy: t = "absolute",
            middleware: a = [],
            platform: d,
            elements: { reference: v, floating: p } = {},
            transform: m = !0,
            whileElementsMounted: g,
            open: y,
          } = e,
          [h, w] = o.useState({
            x: 0,
            y: 0,
            strategy: t,
            placement: n,
            middlewareData: {},
            isPositioned: !1,
          }),
          [E, b] = o.useState(a);
        c(E, a) || b(a);
        const [R, C] = o.useState(null),
          [x, k] = o.useState(null),
          P = o.useCallback((e) => {
            e !== A.current && ((A.current = e), C(e));
          }, []),
          M = o.useCallback((e) => {
            e !== D.current && ((D.current = e), k(e));
          }, []),
          S = v || R,
          L = p || x,
          A = o.useRef(null),
          D = o.useRef(null),
          q = o.useRef(h),
          I = null != g,
          O = f(g),
          j = f(d),
          K = f(y),
          _ = o.useCallback(() => {
            if (!A.current || !D.current) return;
            const e = { placement: n, strategy: t, middleware: E };
            j.current && (e.platform = j.current),
              (0, r.rD)(A.current, D.current, e).then((e) => {
                const n = { ...e, isPositioned: !1 !== K.current };
                B.current &&
                  !c(q.current, n) &&
                  ((q.current = n),
                  u.flushSync(() => {
                    w(n);
                  }));
              });
          }, [E, n, t, j, K]);
        s(() => {
          !1 === y &&
            q.current.isPositioned &&
            ((q.current.isPositioned = !1),
            w((e) => ({ ...e, isPositioned: !1 })));
        }, [y]);
        const B = o.useRef(!1);
        s(
          () => (
            (B.current = !0),
            () => {
              B.current = !1;
            }
          ),
          [],
        ),
          s(() => {
            if ((S && (A.current = S), L && (D.current = L), S && L)) {
              if (O.current) return O.current(S, L, _);
              _();
            }
          }, [S, L, _, O, I]);
        const U = o.useMemo(
            () => ({
              reference: A,
              floating: D,
              setReference: P,
              setFloating: M,
            }),
            [P, M],
          ),
          W = o.useMemo(() => ({ reference: S, floating: L }), [S, L]),
          H = o.useMemo(() => {
            const e = { position: t, left: 0, top: 0 };
            if (!W.floating) return e;
            const n = l(W.floating, h.x),
              r = l(W.floating, h.y);
            return m
              ? {
                  ...e,
                  transform: "translate(" + n + "px, " + r + "px)",
                  ...(i(W.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: t, left: n, top: r };
          }, [t, m, W.floating, h.x, h.y]);
        return o.useMemo(
          () => ({ ...h, update: _, refs: U, elements: W, floatingStyles: H }),
          [h, _, U, W, H],
        );
      }
      const d = (e, n) => ({ ...(0, r.UU)(e), options: [e, n] }),
        v = (e, n) => ({ ...(0, r.Ej)(e), options: [e, n] });
    },
    43407: (e, n, t) => {
      "use strict";
      t.d(n, { s9: () => _, we: () => B, bv: () => N, SV: () => a });
      var r = t(90626),
        o = t.t(r, 2),
        u = t(977);
      function s(e, n) {
        if (!e || !n) return !1;
        const t = null == n.getRootNode ? void 0 : n.getRootNode();
        if (e.contains(n)) return !0;
        if (t && (0, u.Ng)(t)) {
          let t = n;
          for (; t; ) {
            if (e === t) return !0;
            t = t.parentNode || t.host;
          }
        }
        return !1;
      }
      function c(e) {
        return (null == e ? void 0 : e.ownerDocument) || document;
      }
      function i(e, n) {
        if (null == n) return !1;
        if ("composedPath" in e) return e.composedPath().includes(n);
        const t = e;
        return null != t.target && n.contains(t.target);
      }
      function l(e) {
        return "composedPath" in e ? e.composedPath()[0] : e.target;
      }
      t(7850), t(72739);
      var f = t(94621);
      function a(e) {
        const n = r.useRef(void 0),
          t = r.useCallback((n) => {
            const t = e.map((e) => {
              if (null != e) {
                if ("function" == typeof e) {
                  const t = e,
                    r = t(n);
                  return "function" == typeof r
                    ? r
                    : () => {
                        t(null);
                      };
                }
                return (
                  (e.current = n),
                  () => {
                    e.current = null;
                  }
                );
              }
            });
            return () => {
              t.forEach((e) => (null == e ? void 0 : e()));
            };
          }, e);
        return r.useMemo(
          () =>
            e.every((e) => null == e)
              ? null
              : (e) => {
                  n.current && (n.current(), (n.current = void 0)),
                    null != e && (n.current = t(e));
                },
          e,
        );
      }
      const d = { ...o },
        v = d.useInsertionEffect || ((e) => e());
      function p(e) {
        const n = r.useRef(() => {
          0;
        });
        return (
          v(() => {
            n.current = e;
          }),
          r.useCallback(function () {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
            return null == n.current ? void 0 : n.current(...t);
          }, [])
        );
      }
      const m = "ArrowUp",
        g = "ArrowDown",
        y = "ArrowLeft",
        h = "ArrowRight";
      var w = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      const E = [y, h],
        b = [m, g];
      let R = !1,
        C = 0;
      const x = () =>
        "floating-ui-" + Math.random().toString(36).slice(2, 6) + C++;
      const k =
        d.useId ||
        function () {
          const [e, n] = r.useState(() => (R ? x() : void 0));
          return (
            w(() => {
              null == e && n(x());
            }, []),
            r.useEffect(() => {
              R = !0;
            }, []),
            e
          );
        };
      function P() {
        const e = new Map();
        return {
          emit(n, t) {
            var r;
            null == (r = e.get(n)) || r.forEach((e) => e(t));
          },
          on(n, t) {
            e.set(n, [...(e.get(n) || []), t]);
          },
          off(n, t) {
            var r;
            e.set(
              n,
              (null == (r = e.get(n)) ? void 0 : r.filter((e) => e !== t)) ||
                [],
            );
          },
        };
      }
      const M = r.createContext(null),
        S = r.createContext(null),
        L = () => {
          var e;
          return (null == (e = r.useContext(M)) ? void 0 : e.id) || null;
        },
        A = () => r.useContext(S);
      function D(e) {
        return "data-floating-ui-" + e;
      }
      function q(e, n) {
        let t = e.filter((e) => {
            var t;
            return (
              e.parentId === n && (null == (t = e.context) ? void 0 : t.open)
            );
          }),
          r = t;
        for (; r.length; )
          (r = e.filter((e) => {
            var n;
            return null == (n = r)
              ? void 0
              : n.some((n) => {
                  var t;
                  return (
                    e.parentId === n.id &&
                    (null == (t = e.context) ? void 0 : t.open)
                  );
                });
          })),
            (t = t.concat(r));
        return t;
      }
      const I = "data-floating-ui-focusable";
      const O = {
          pointerdown: "onPointerDown",
          mousedown: "onMouseDown",
          click: "onClick",
        },
        j = {
          pointerdown: "onPointerDownCapture",
          mousedown: "onMouseDownCapture",
          click: "onClickCapture",
        },
        K = (e) => {
          var n, t;
          return {
            escapeKey:
              "boolean" == typeof e
                ? e
                : null != (n = null == e ? void 0 : e.escapeKey) && n,
            outsidePress:
              "boolean" == typeof e
                ? e
                : null == (t = null == e ? void 0 : e.outsidePress) || t,
          };
        };
      function _(e, n) {
        void 0 === n && (n = {});
        const { open: t, onOpenChange: o, elements: f, dataRef: a } = e,
          {
            enabled: d = !0,
            escapeKey: v = !0,
            outsidePress: m = !0,
            outsidePressEvent: g = "pointerdown",
            referencePress: y = !1,
            referencePressEvent: h = "pointerdown",
            ancestorScroll: w = !1,
            bubbles: E,
            capture: b,
          } = n,
          R = A(),
          C = p("function" == typeof m ? m : () => !1),
          x = "function" == typeof m ? C : m,
          k = r.useRef(!1),
          P = r.useRef(!1),
          { escapeKey: M, outsidePress: S } = K(E),
          { escapeKey: L, outsidePress: I } = K(b),
          _ = r.useRef(!1),
          B = p((e) => {
            var n;
            if (!t || !d || !v || "Escape" !== e.key) return;
            if (_.current) return;
            const r =
                null == (n = a.current.floatingContext) ? void 0 : n.nodeId,
              u = R ? q(R.nodesRef.current, r) : [];
            if (!M && (e.stopPropagation(), u.length > 0)) {
              let e = !0;
              if (
                (u.forEach((n) => {
                  var t;
                  null == (t = n.context) ||
                    !t.open ||
                    n.context.dataRef.current.__escapeKeyBubbles ||
                    (e = !1);
                }),
                !e)
              )
                return;
            }
            o(
              !1,
              (function (e) {
                return "nativeEvent" in e;
              })(e)
                ? e.nativeEvent
                : e,
              "escape-key",
            );
          }),
          U = p((e) => {
            var n;
            const t = () => {
              var n;
              B(e), null == (n = l(e)) || n.removeEventListener("keydown", t);
            };
            null == (n = l(e)) || n.addEventListener("keydown", t);
          }),
          W = p((e) => {
            var n;
            const t = k.current;
            k.current = !1;
            const r = P.current;
            if (((P.current = !1), "click" === g && r)) return;
            if (t) return;
            if ("function" == typeof x && !x(e)) return;
            const d = l(e),
              v = "[" + D("inert") + "]",
              p = c(f.floating).querySelectorAll(v);
            let m = (0, u.vq)(d) ? d : null;
            for (; m && !(0, u.eu)(m); ) {
              const e = (0, u.$4)(m);
              if ((0, u.eu)(e) || !(0, u.vq)(e)) break;
              m = e;
            }
            if (
              p.length &&
              (0, u.vq)(d) &&
              !d.matches("html,body") &&
              !s(d, f.floating) &&
              Array.from(p).every((e) => !s(m, e))
            )
              return;
            if ((0, u.sb)(d) && T) {
              const n = (0, u.eu)(d),
                t = (0, u.L9)(d),
                r = /auto|scroll/,
                o = n || r.test(t.overflowX),
                s = n || r.test(t.overflowY),
                c = o && d.clientWidth > 0 && d.scrollWidth > d.clientWidth,
                i = s && d.clientHeight > 0 && d.scrollHeight > d.clientHeight,
                l = "rtl" === t.direction,
                f =
                  i &&
                  (l
                    ? e.offsetX <= d.offsetWidth - d.clientWidth
                    : e.offsetX > d.clientWidth),
                a = c && e.offsetY > d.clientHeight;
              if (f || a) return;
            }
            const y =
                null == (n = a.current.floatingContext) ? void 0 : n.nodeId,
              h =
                R &&
                q(R.nodesRef.current, y).some((n) => {
                  var t;
                  return i(
                    e,
                    null == (t = n.context) ? void 0 : t.elements.floating,
                  );
                });
            if (i(e, f.floating) || i(e, f.domReference) || h) return;
            const w = R ? q(R.nodesRef.current, y) : [];
            if (w.length > 0) {
              let e = !0;
              if (
                (w.forEach((n) => {
                  var t;
                  null == (t = n.context) ||
                    !t.open ||
                    n.context.dataRef.current.__outsidePressBubbles ||
                    (e = !1);
                }),
                !e)
              )
                return;
            }
            o(!1, e, "outside-press");
          }),
          H = p((e) => {
            var n;
            const t = () => {
              var n;
              W(e), null == (n = l(e)) || n.removeEventListener(g, t);
            };
            null == (n = l(e)) || n.addEventListener(g, t);
          });
        r.useEffect(() => {
          if (!t || !d) return;
          (a.current.__escapeKeyBubbles = M),
            (a.current.__outsidePressBubbles = S);
          let e = -1;
          function n(e) {
            o(!1, e, "ancestor-scroll");
          }
          function r() {
            window.clearTimeout(e), (_.current = !0);
          }
          function s() {
            e = window.setTimeout(
              () => {
                _.current = !1;
              },
              (0, u.Tc)() ? 5 : 0,
            );
          }
          const i = c(f.floating);
          v &&
            (i.addEventListener("keydown", L ? U : B, L),
            i.addEventListener("compositionstart", r),
            i.addEventListener("compositionend", s)),
            x && i.addEventListener(g, I ? H : W, I);
          let l = [];
          return (
            w &&
              ((0, u.vq)(f.domReference) && (l = (0, u.v9)(f.domReference)),
              (0, u.vq)(f.floating) && (l = l.concat((0, u.v9)(f.floating))),
              !(0, u.vq)(f.reference) &&
                f.reference &&
                f.reference.contextElement &&
                (l = l.concat((0, u.v9)(f.reference.contextElement)))),
            (l = l.filter((e) => {
              var n;
              return (
                e !== (null == (n = i.defaultView) ? void 0 : n.visualViewport)
              );
            })),
            l.forEach((e) => {
              e.addEventListener("scroll", n, { passive: !0 });
            }),
            () => {
              v &&
                (i.removeEventListener("keydown", L ? U : B, L),
                i.removeEventListener("compositionstart", r),
                i.removeEventListener("compositionend", s)),
                x && i.removeEventListener(g, I ? H : W, I),
                l.forEach((e) => {
                  e.removeEventListener("scroll", n);
                }),
                window.clearTimeout(e);
            }
          );
        }, [a, f, v, x, g, t, o, w, d, M, S, B, L, U, W, I, H]),
          r.useEffect(() => {
            k.current = !1;
          }, [x, g]);
        const N = r.useMemo(
            () => ({
              onKeyDown: B,
              ...(y && {
                [O[h]]: (e) => {
                  o(!1, e.nativeEvent, "reference-press");
                },
                ...("click" !== h && {
                  onClick(e) {
                    o(!1, e.nativeEvent, "reference-press");
                  },
                }),
              }),
            }),
            [B, o, y, h],
          ),
          T = r.useMemo(
            () => ({
              onKeyDown: B,
              onMouseDown() {
                P.current = !0;
              },
              onMouseUp() {
                P.current = !0;
              },
              [j[g]]: () => {
                k.current = !0;
              },
            }),
            [B, g],
          );
        return r.useMemo(
          () => (d ? { reference: N, floating: T } : {}),
          [d, N, T],
        );
      }
      function B(e) {
        void 0 === e && (e = {});
        const { nodeId: n } = e,
          t = (function (e) {
            const { open: n = !1, onOpenChange: t, elements: o } = e,
              u = k(),
              s = r.useRef({}),
              [c] = r.useState(() => P()),
              i = null != L(),
              [l, f] = r.useState(o.reference),
              a = p((e, n, r) => {
                (s.current.openEvent = e ? n : void 0),
                  c.emit("openchange", {
                    open: e,
                    event: n,
                    reason: r,
                    nested: i,
                  }),
                  null == t || t(e, n, r);
              }),
              d = r.useMemo(() => ({ setPositionReference: f }), []),
              v = r.useMemo(
                () => ({
                  reference: l || o.reference || null,
                  floating: o.floating || null,
                  domReference: o.reference,
                }),
                [l, o.reference, o.floating],
              );
            return r.useMemo(
              () => ({
                dataRef: s,
                open: n,
                onOpenChange: a,
                elements: v,
                events: c,
                floatingId: u,
                refs: d,
              }),
              [n, a, v, c, u, d],
            );
          })({
            ...e,
            elements: { reference: null, floating: null, ...e.elements },
          }),
          o = e.rootContext || t,
          s = o.elements,
          [c, i] = r.useState(null),
          [l, a] = r.useState(null),
          d = (null == s ? void 0 : s.domReference) || c,
          v = r.useRef(null),
          m = A();
        w(() => {
          d && (v.current = d);
        }, [d]);
        const g = (0, f.we)({
            ...e,
            elements: { ...s, ...(l && { reference: l }) },
          }),
          y = r.useCallback(
            (e) => {
              const n = (0, u.vq)(e)
                ? {
                    getBoundingClientRect: () => e.getBoundingClientRect(),
                    contextElement: e,
                  }
                : e;
              a(n), g.refs.setReference(n);
            },
            [g.refs],
          ),
          h = r.useCallback(
            (e) => {
              ((0, u.vq)(e) || null === e) && ((v.current = e), i(e)),
                ((0, u.vq)(g.refs.reference.current) ||
                  null === g.refs.reference.current ||
                  (null !== e && !(0, u.vq)(e))) &&
                  g.refs.setReference(e);
            },
            [g.refs],
          ),
          E = r.useMemo(
            () => ({
              ...g.refs,
              setReference: h,
              setPositionReference: y,
              domReference: v,
            }),
            [g.refs, h, y],
          ),
          b = r.useMemo(
            () => ({ ...g.elements, domReference: d }),
            [g.elements, d],
          ),
          R = r.useMemo(
            () => ({ ...g, ...o, refs: E, elements: b, nodeId: n }),
            [g, E, b, n, o],
          );
        return (
          w(() => {
            o.dataRef.current.floatingContext = R;
            const e =
              null == m ? void 0 : m.nodesRef.current.find((e) => e.id === n);
            e && (e.context = R);
          }),
          r.useMemo(
            () => ({ ...g, context: R, refs: E, elements: b }),
            [g, E, b, R],
          )
        );
      }
      const U = "active",
        W = "selected";
      function H(e, n, t) {
        const r = new Map(),
          o = "item" === t;
        let u = e;
        if (o && e) {
          const { [U]: n, [W]: t, ...r } = e;
          u = r;
        }
        return {
          ...("floating" === t && { tabIndex: -1, [I]: "" }),
          ...u,
          ...n
            .map((n) => {
              const r = n ? n[t] : null;
              return "function" == typeof r ? (e ? r(e) : null) : r;
            })
            .concat(e)
            .reduce(
              (e, n) =>
                n
                  ? (Object.entries(n).forEach((n) => {
                      let [t, u] = n;
                      var s;
                      (o && [U, W].includes(t)) ||
                        (0 === t.indexOf("on")
                          ? (r.has(t) || r.set(t, []),
                            "function" == typeof u &&
                              (null == (s = r.get(t)) || s.push(u),
                              (e[t] = function () {
                                for (
                                  var e,
                                    n = arguments.length,
                                    o = new Array(n),
                                    u = 0;
                                  u < n;
                                  u++
                                )
                                  o[u] = arguments[u];
                                return null == (e = r.get(t))
                                  ? void 0
                                  : e
                                      .map((e) => e(...o))
                                      .find((e) => void 0 !== e);
                              })))
                          : (e[t] = u));
                    }),
                    e)
                  : e,
              {},
            ),
        };
      }
      function N(e) {
        void 0 === e && (e = []);
        const n = e.map((e) => (null == e ? void 0 : e.reference)),
          t = e.map((e) => (null == e ? void 0 : e.floating)),
          o = e.map((e) => (null == e ? void 0 : e.item)),
          u = r.useCallback((n) => H(n, e, "reference"), n),
          s = r.useCallback((n) => H(n, e, "floating"), t),
          c = r.useCallback((n) => H(n, e, "item"), o);
        return r.useMemo(
          () => ({
            getReferenceProps: u,
            getFloatingProps: s,
            getItemProps: c,
          }),
          [u, s, c],
        );
      }
    },
  },
]);
