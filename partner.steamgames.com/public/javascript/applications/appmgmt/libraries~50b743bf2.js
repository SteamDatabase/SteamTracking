/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3239],
  {
    94621: (e, t, n) => {
      n.d(t, {
        BN: () => v,
        Ej: () => p,
        UU: () => m,
        cY: () => d,
        we: () => f,
      });
      var r = n(8083),
        o = n(90626),
        u = n(72739),
        i = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
      function c(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; 0 !== r--; ) if (!c(e[r], t[r])) return !1;
            return !0;
          }
          if (
            ((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)
          )
            return !1;
          for (r = n; 0 !== r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 !== r--; ) {
            const n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !c(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function l(e) {
        if ("undefined" == typeof window) return 1;
        return (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function s(e, t) {
        const n = l(e);
        return Math.round(t * n) / n;
      }
      function a(e) {
        const t = o.useRef(e);
        return (
          i(() => {
            t.current = e;
          }),
          t
        );
      }
      function f(e) {
        void 0 === e && (e = {});
        const {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: f = [],
            platform: d,
            elements: { reference: v, floating: m } = {},
            transform: p = !0,
            whileElementsMounted: g,
            open: h,
          } = e,
          [b, y] = o.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
          }),
          [E, w] = o.useState(f);
        c(E, f) || w(f);
        const [R, x] = o.useState(null),
          [k, I] = o.useState(null),
          C = o.useCallback((e) => {
            e !== O.current && ((O.current = e), x(e));
          }, []),
          M = o.useCallback((e) => {
            e !== T.current && ((T.current = e), I(e));
          }, []),
          S = v || R,
          L = m || k,
          O = o.useRef(null),
          T = o.useRef(null),
          A = o.useRef(b),
          P = null != g,
          N = a(g),
          D = a(d),
          q = a(h),
          F = o.useCallback(() => {
            if (!O.current || !T.current) return;
            const e = { placement: t, strategy: n, middleware: E };
            D.current && (e.platform = D.current),
              (0, r.rD)(O.current, T.current, e).then((e) => {
                const t = { ...e, isPositioned: !1 !== q.current };
                K.current &&
                  !c(A.current, t) &&
                  ((A.current = t),
                  u.flushSync(() => {
                    y(t);
                  }));
              });
          }, [E, t, n, D, q]);
        i(() => {
          !1 === h &&
            A.current.isPositioned &&
            ((A.current.isPositioned = !1),
            y((e) => ({ ...e, isPositioned: !1 })));
        }, [h]);
        const K = o.useRef(!1);
        i(
          () => (
            (K.current = !0),
            () => {
              K.current = !1;
            }
          ),
          [],
        ),
          i(() => {
            if ((S && (O.current = S), L && (T.current = L), S && L)) {
              if (N.current) return N.current(S, L, F);
              F();
            }
          }, [S, L, F, N, P]);
        const _ = o.useMemo(
            () => ({
              reference: O,
              floating: T,
              setReference: C,
              setFloating: M,
            }),
            [C, M],
          ),
          j = o.useMemo(() => ({ reference: S, floating: L }), [S, L]),
          U = o.useMemo(() => {
            const e = { position: n, left: 0, top: 0 };
            if (!j.floating) return e;
            const t = s(j.floating, b.x),
              r = s(j.floating, b.y);
            return p
              ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...(l(j.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: n, left: t, top: r };
          }, [n, p, j.floating, b.x, b.y]);
        return o.useMemo(
          () => ({ ...b, update: F, refs: _, elements: j, floatingStyles: U }),
          [b, F, _, j, U],
        );
      }
      const d = (e, t) => ({ ...(0, r.cY)(e), options: [e, t] }),
        v = (e, t) => ({ ...(0, r.BN)(e), options: [e, t] }),
        m = (e, t) => ({ ...(0, r.UU)(e), options: [e, t] }),
        p = (e, t) => ({ ...(0, r.Ej)(e), options: [e, t] });
    },
    73788: (e, t, n) => {
      n.d(t, {
        s3: () => it,
        ph: () => ve,
        iB: () => Tt,
        kp: () => st,
        s9: () => vt,
        we: () => mt,
        iQ: () => pt,
        Mk: () => Te,
        bv: () => yt,
        rm: () => me,
        C1: () => Ct,
        SV: () => X,
        It: () => St,
        lY: () => Lt,
      });
      var r = n(90626),
        o = n.t(r, 2),
        u = n(977);
      function i(e) {
        let t = e.activeElement;
        for (
          ;
          null !=
          (null == (n = t) || null == (n = n.shadowRoot)
            ? void 0
            : n.activeElement);
        ) {
          var n;
          t = t.shadowRoot.activeElement;
        }
        return t;
      }
      function c(e, t) {
        if (!e || !t) return !1;
        const n = null == t.getRootNode ? void 0 : t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && (0, u.Ng)(n)) {
          let n = t;
          for (; n; ) {
            if (e === n) return !0;
            n = n.parentNode || n.host;
          }
        }
        return !1;
      }
      function l() {
        const e = navigator.userAgentData;
        return null != e && e.platform ? e.platform : navigator.platform;
      }
      function s() {
        const e = navigator.userAgentData;
        return e && Array.isArray(e.brands)
          ? e.brands
              .map((e) => {
                let { brand: t, version: n } = e;
                return t + "/" + n;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function a(e) {
        return (
          !(0 !== e.mozInputSource || !e.isTrusted) ||
          (v() && e.pointerType
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)
        );
      }
      function f(e) {
        return (
          !s().includes("jsdom/") &&
          ((!v() && 0 === e.width && 0 === e.height) ||
            (v() &&
              1 === e.width &&
              1 === e.height &&
              0 === e.pressure &&
              0 === e.detail &&
              "mouse" === e.pointerType) ||
            (e.width < 1 &&
              e.height < 1 &&
              0 === e.pressure &&
              0 === e.detail &&
              "touch" === e.pointerType))
        );
      }
      function d() {
        return /apple/i.test(navigator.vendor);
      }
      function v() {
        const e = /android/i;
        return e.test(l()) || e.test(s());
      }
      function m(e, t) {
        const n = ["mouse", "pen"];
        return t || n.push("", void 0), n.includes(e);
      }
      function p(e) {
        return (null == e ? void 0 : e.ownerDocument) || document;
      }
      function g(e, t) {
        if (null == t) return !1;
        if ("composedPath" in e) return e.composedPath().includes(t);
        const n = e;
        return null != n.target && t.contains(n.target);
      }
      function h(e) {
        return "composedPath" in e ? e.composedPath()[0] : e.target;
      }
      const b =
        "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
      function y(e) {
        return (0, u.sb)(e) && e.matches(b);
      }
      function E(e) {
        e.preventDefault(), e.stopPropagation();
      }
      function w(e) {
        return !!e && "combobox" === e.getAttribute("role") && y(e);
      }
      var R = n(58015),
        x = n(7850),
        k = [
          "input:not([inert])",
          "select:not([inert])",
          "textarea:not([inert])",
          "a[href]:not([inert])",
          "button:not([inert])",
          "[tabindex]:not(slot):not([inert])",
          "audio[controls]:not([inert])",
          "video[controls]:not([inert])",
          '[contenteditable]:not([contenteditable="false"]):not([inert])',
          "details>summary:first-of-type:not([inert])",
          "details:not([inert])",
        ],
        I = k.join(","),
        C = "undefined" == typeof Element,
        M = C
          ? function () {}
          : Element.prototype.matches ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector,
        S =
          !C && Element.prototype.getRootNode
            ? function (e) {
                var t;
                return null == e || null === (t = e.getRootNode) || void 0 === t
                  ? void 0
                  : t.call(e);
              }
            : function (e) {
                return null == e ? void 0 : e.ownerDocument;
              },
        L = function e(t, n) {
          var r;
          void 0 === n && (n = !0);
          var o =
            null == t || null === (r = t.getAttribute) || void 0 === r
              ? void 0
              : r.call(t, "inert");
          return "" === o || "true" === o || (n && t && e(t.parentNode));
        },
        O = function (e, t, n) {
          if (L(e)) return [];
          var r = Array.prototype.slice.apply(e.querySelectorAll(I));
          return t && M.call(e, I) && r.unshift(e), (r = r.filter(n));
        },
        T = function e(t, n, r) {
          for (var o = [], u = Array.from(t); u.length; ) {
            var i = u.shift();
            if (!L(i, !1))
              if ("SLOT" === i.tagName) {
                var c = i.assignedElements(),
                  l = e(c.length ? c : i.children, !0, r);
                r.flatten
                  ? o.push.apply(o, l)
                  : o.push({ scopeParent: i, candidates: l });
              } else {
                M.call(i, I) &&
                  r.filter(i) &&
                  (n || !t.includes(i)) &&
                  o.push(i);
                var s =
                    i.shadowRoot ||
                    ("function" == typeof r.getShadowRoot &&
                      r.getShadowRoot(i)),
                  a =
                    !L(s, !1) && (!r.shadowRootFilter || r.shadowRootFilter(i));
                if (s && a) {
                  var f = e(!0 === s ? i.children : s.children, !0, r);
                  r.flatten
                    ? o.push.apply(o, f)
                    : o.push({ scopeParent: i, candidates: f });
                } else u.unshift.apply(u, i.children);
              }
          }
          return o;
        },
        A = function (e) {
          return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
        },
        P = function (e) {
          if (!e) throw new Error("No node provided");
          return e.tabIndex < 0 &&
            (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) ||
              (function (e) {
                var t,
                  n =
                    null == e || null === (t = e.getAttribute) || void 0 === t
                      ? void 0
                      : t.call(e, "contenteditable");
                return "" === n || "true" === n;
              })(e)) &&
            !A(e)
            ? 0
            : e.tabIndex;
        },
        N = function (e, t) {
          return e.tabIndex === t.tabIndex
            ? e.documentOrder - t.documentOrder
            : e.tabIndex - t.tabIndex;
        },
        D = function (e) {
          return "INPUT" === e.tagName;
        },
        q = function (e) {
          return (
            (function (e) {
              return D(e) && "radio" === e.type;
            })(e) &&
            !(function (e) {
              if (!e.name) return !0;
              var t,
                n = e.form || S(e),
                r = function (e) {
                  return n.querySelectorAll(
                    'input[type="radio"][name="' + e + '"]',
                  );
                };
              if (
                "undefined" != typeof window &&
                void 0 !== window.CSS &&
                "function" == typeof window.CSS.escape
              )
                t = r(window.CSS.escape(e.name));
              else
                try {
                  t = r(e.name);
                } catch (e) {
                  return (
                    console.error(
                      "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                      e.message,
                    ),
                    !1
                  );
                }
              var o = (function (e, t) {
                for (var n = 0; n < e.length; n++)
                  if (e[n].checked && e[n].form === t) return e[n];
              })(t, e.form);
              return !o || o === e;
            })(e)
          );
        },
        F = function (e) {
          var t = e.getBoundingClientRect(),
            n = t.width,
            r = t.height;
          return 0 === n && 0 === r;
        },
        K = function (e, t) {
          var n = t.displayCheck,
            r = t.getShadowRoot;
          if ("hidden" === getComputedStyle(e).visibility) return !0;
          var o = M.call(e, "details>summary:first-of-type")
            ? e.parentElement
            : e;
          if (M.call(o, "details:not([open]) *")) return !0;
          if (n && "full" !== n && "legacy-full" !== n) {
            if ("non-zero-area" === n) return F(e);
          } else {
            if ("function" == typeof r) {
              for (var u = e; e; ) {
                var i = e.parentElement,
                  c = S(e);
                if (i && !i.shadowRoot && !0 === r(i)) return F(e);
                e = e.assignedSlot
                  ? e.assignedSlot
                  : i || c === e.ownerDocument
                    ? i
                    : c.host;
              }
              e = u;
            }
            if (
              (function (e) {
                var t,
                  n,
                  r,
                  o,
                  u = e && S(e),
                  i = null === (t = u) || void 0 === t ? void 0 : t.host,
                  c = !1;
                if (u && u !== e)
                  for (
                    c = !!(
                      (null !== (n = i) &&
                        void 0 !== n &&
                        null !== (r = n.ownerDocument) &&
                        void 0 !== r &&
                        r.contains(i)) ||
                      (null != e &&
                        null !== (o = e.ownerDocument) &&
                        void 0 !== o &&
                        o.contains(e))
                    );
                    !c && i;
                  ) {
                    var l, s, a;
                    c = !(
                      null ===
                        (s = i =
                          null === (l = u = S(i)) || void 0 === l
                            ? void 0
                            : l.host) ||
                      void 0 === s ||
                      null === (a = s.ownerDocument) ||
                      void 0 === a ||
                      !a.contains(i)
                    );
                  }
                return c;
              })(e)
            )
              return !e.getClientRects().length;
            if ("legacy-full" !== n) return !0;
          }
          return !1;
        },
        _ = function (e, t) {
          return !(
            t.disabled ||
            L(t) ||
            (function (e) {
              return D(e) && "hidden" === e.type;
            })(t) ||
            K(t, e) ||
            (function (e) {
              return (
                "DETAILS" === e.tagName &&
                Array.prototype.slice.apply(e.children).some(function (e) {
                  return "SUMMARY" === e.tagName;
                })
              );
            })(t) ||
            (function (e) {
              if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                for (var t = e.parentElement; t; ) {
                  if ("FIELDSET" === t.tagName && t.disabled) {
                    for (var n = 0; n < t.children.length; n++) {
                      var r = t.children.item(n);
                      if ("LEGEND" === r.tagName)
                        return (
                          !!M.call(t, "fieldset[disabled] *") || !r.contains(e)
                        );
                    }
                    return !0;
                  }
                  t = t.parentElement;
                }
              return !1;
            })(t)
          );
        },
        j = function (e, t) {
          return !(q(t) || P(t) < 0 || !_(e, t));
        },
        U = function (e) {
          var t = parseInt(e.getAttribute("tabindex"), 10);
          return !!(isNaN(t) || t >= 0);
        },
        B = function e(t) {
          var n = [],
            r = [];
          return (
            t.forEach(function (t, o) {
              var u = !!t.scopeParent,
                i = u ? t.scopeParent : t,
                c = (function (e, t) {
                  var n = P(e);
                  return n < 0 && t && !A(e) ? 0 : n;
                })(i, u),
                l = u ? e(t.candidates) : i;
              0 === c
                ? u
                  ? n.push.apply(n, l)
                  : n.push(i)
                : r.push({
                    documentOrder: o,
                    tabIndex: c,
                    item: t,
                    isScope: u,
                    content: l,
                  });
            }),
            r
              .sort(N)
              .reduce(function (e, t) {
                return (
                  t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
                );
              }, [])
              .concat(n)
          );
        },
        W = function (e, t) {
          var n;
          return (
            (n = (t = t || {}).getShadowRoot
              ? T([e], t.includeContainer, {
                  filter: j.bind(null, t),
                  flatten: !1,
                  getShadowRoot: t.getShadowRoot,
                  shadowRootFilter: U,
                })
              : O(e, t.includeContainer, j.bind(null, t))),
            B(n)
          );
        },
        Y = function (e, t) {
          if (((t = t || {}), !e)) throw new Error("No node provided");
          return !1 !== M.call(e, I) && j(t, e);
        },
        H = (n(72739), n(94621));
      function X(e) {
        const t = r.useRef(void 0),
          n = r.useCallback((t) => {
            const n = e.map((e) => {
              if (null != e) {
                if ("function" == typeof e) {
                  const n = e,
                    r = n(t);
                  return "function" == typeof r
                    ? r
                    : () => {
                        n(null);
                      };
                }
                return (
                  (e.current = t),
                  () => {
                    e.current = null;
                  }
                );
              }
            });
            return () => {
              n.forEach((e) => (null == e ? void 0 : e()));
            };
          }, e);
        return r.useMemo(
          () =>
            e.every((e) => null == e)
              ? null
              : (e) => {
                  t.current && (t.current(), (t.current = void 0)),
                    null != e && (t.current = n(e));
                },
          e,
        );
      }
      const z = { ...o },
        V = z.useInsertionEffect || ((e) => e());
      function $(e) {
        const t = r.useRef(() => {
          0;
        });
        return (
          V(() => {
            t.current = e;
          }),
          r.useCallback(function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return null == t.current ? void 0 : t.current(...n);
          }, [])
        );
      }
      const G = "ArrowUp",
        Q = "ArrowDown",
        J = "ArrowLeft",
        Z = "ArrowRight";
      function ee(e, t, n) {
        return Math.floor(e / t) !== n;
      }
      function te(e, t) {
        return t < 0 || t >= e.current.length;
      }
      function ne(e, t) {
        return oe(e, { disabledIndices: t });
      }
      function re(e, t) {
        return oe(e, {
          decrement: !0,
          startingIndex: e.current.length,
          disabledIndices: t,
        });
      }
      function oe(e, t) {
        let {
          startingIndex: n = -1,
          decrement: r = !1,
          disabledIndices: o,
          amount: u = 1,
        } = void 0 === t ? {} : t;
        const i = e.current;
        let c = n;
        do {
          c += r ? -u : u;
        } while (c >= 0 && c <= i.length - 1 && se(i, c, o));
        return c;
      }
      function ue(e, t) {
        let {
            event: n,
            orientation: r,
            loop: o,
            rtl: u,
            cols: i,
            disabledIndices: c,
            minIndex: l,
            maxIndex: s,
            prevIndex: a,
            stopEvent: f = !1,
          } = t,
          d = a;
        if (n.key === G) {
          if ((f && E(n), -1 === a)) d = s;
          else if (
            ((d = oe(e, {
              startingIndex: d,
              amount: i,
              decrement: !0,
              disabledIndices: c,
            })),
            o && (a - i < l || d < 0))
          ) {
            const e = a % i,
              t = s % i,
              n = s - (t - e);
            d = t === e ? s : t > e ? n : n - i;
          }
          te(e, d) && (d = a);
        }
        if (
          (n.key === Q &&
            (f && E(n),
            -1 === a
              ? (d = l)
              : ((d = oe(e, {
                  startingIndex: a,
                  amount: i,
                  disabledIndices: c,
                })),
                o &&
                  a + i > s &&
                  (d = oe(e, {
                    startingIndex: (a % i) - i,
                    amount: i,
                    disabledIndices: c,
                  }))),
            te(e, d) && (d = a)),
          "both" === r)
        ) {
          const t = (0, R.RI)(a / i);
          n.key === (u ? J : Z) &&
            (f && E(n),
            a % i !== i - 1
              ? ((d = oe(e, { startingIndex: a, disabledIndices: c })),
                o &&
                  ee(d, i, t) &&
                  (d = oe(e, {
                    startingIndex: a - (a % i) - 1,
                    disabledIndices: c,
                  })))
              : o &&
                (d = oe(e, {
                  startingIndex: a - (a % i) - 1,
                  disabledIndices: c,
                })),
            ee(d, i, t) && (d = a)),
            n.key === (u ? Z : J) &&
              (f && E(n),
              a % i !== 0
                ? ((d = oe(e, {
                    startingIndex: a,
                    decrement: !0,
                    disabledIndices: c,
                  })),
                  o &&
                    ee(d, i, t) &&
                    (d = oe(e, {
                      startingIndex: a + (i - (a % i)),
                      decrement: !0,
                      disabledIndices: c,
                    })))
                : o &&
                  (d = oe(e, {
                    startingIndex: a + (i - (a % i)),
                    decrement: !0,
                    disabledIndices: c,
                  })),
              ee(d, i, t) && (d = a));
          const r = (0, R.RI)(s / i) === t;
          te(e, d) &&
            (d =
              o && r
                ? n.key === (u ? Z : J)
                  ? s
                  : oe(e, {
                      startingIndex: a - (a % i) - 1,
                      disabledIndices: c,
                    })
                : a);
        }
        return d;
      }
      function ie(e, t, n) {
        const r = [];
        let o = 0;
        return (
          e.forEach((e, u) => {
            let { width: i, height: c } = e,
              l = !1;
            for (n && (o = 0); !l; ) {
              const e = [];
              for (let n = 0; n < i; n++)
                for (let r = 0; r < c; r++) e.push(o + n + r * t);
              (o % t) + i <= t && e.every((e) => null == r[e])
                ? (e.forEach((e) => {
                    r[e] = u;
                  }),
                  (l = !0))
                : o++;
            }
          }),
          [...r]
        );
      }
      function ce(e, t, n, r, o) {
        if (-1 === e) return -1;
        const u = n.indexOf(e),
          i = t[e];
        switch (o) {
          case "tl":
            return u;
          case "tr":
            return i ? u + i.width - 1 : u;
          case "bl":
            return i ? u + (i.height - 1) * r : u;
          case "br":
            return n.lastIndexOf(e);
        }
      }
      function le(e, t) {
        return t.flatMap((t, n) => (e.includes(t) ? [n] : []));
      }
      function se(e, t, n) {
        if (n) return n.includes(t);
        const r = e[t];
        return (
          null == r ||
          r.hasAttribute("disabled") ||
          "true" === r.getAttribute("aria-disabled")
        );
      }
      var ae = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function fe(e, t) {
        const n = e.compareDocumentPosition(t);
        return n & Node.DOCUMENT_POSITION_FOLLOWING ||
          n & Node.DOCUMENT_POSITION_CONTAINED_BY
          ? -1
          : n & Node.DOCUMENT_POSITION_PRECEDING ||
              n & Node.DOCUMENT_POSITION_CONTAINS
            ? 1
            : 0;
      }
      const de = r.createContext({
        register: () => {},
        unregister: () => {},
        map: new Map(),
        elementsRef: { current: [] },
      });
      function ve(e) {
        const { children: t, elementsRef: n, labelsRef: o } = e,
          [u, i] = r.useState(() => new Set()),
          c = r.useCallback((e) => {
            i((t) => new Set(t).add(e));
          }, []),
          l = r.useCallback((e) => {
            i((t) => {
              const n = new Set(t);
              return n.delete(e), n;
            });
          }, []),
          s = r.useMemo(() => {
            const e = new Map();
            return (
              Array.from(u.keys())
                .sort(fe)
                .forEach((t, n) => {
                  e.set(t, n);
                }),
              e
            );
          }, [u]);
        return (0, x.jsx)(de.Provider, {
          value: r.useMemo(
            () => ({
              register: c,
              unregister: l,
              map: s,
              elementsRef: n,
              labelsRef: o,
            }),
            [c, l, s, n, o],
          ),
          children: t,
        });
      }
      function me(e) {
        void 0 === e && (e = {});
        const { label: t } = e,
          {
            register: n,
            unregister: o,
            map: u,
            elementsRef: i,
            labelsRef: c,
          } = r.useContext(de),
          [l, s] = r.useState(null),
          a = r.useRef(null),
          f = r.useCallback(
            (e) => {
              if (((a.current = e), null !== l && ((i.current[l] = e), c))) {
                var n;
                const r = void 0 !== t;
                c.current[l] = r
                  ? t
                  : null != (n = null == e ? void 0 : e.textContent)
                    ? n
                    : null;
              }
            },
            [l, i, c, t],
          );
        return (
          ae(() => {
            const e = a.current;
            if (e)
              return (
                n(e),
                () => {
                  o(e);
                }
              );
          }, [n, o]),
          ae(() => {
            const e = a.current ? u.get(a.current) : null;
            null != e && s(e);
          }, [u]),
          r.useMemo(() => ({ ref: f, index: null == l ? -1 : l }), [l, f])
        );
      }
      const pe = [J, Z],
        ge = [G, Q];
      let he = !1,
        be = 0;
      const ye = () =>
        "floating-ui-" + Math.random().toString(36).slice(2, 6) + be++;
      const Ee =
        z.useId ||
        function () {
          const [e, t] = r.useState(() => (he ? ye() : void 0));
          return (
            ae(() => {
              null == e && t(ye());
            }, []),
            r.useEffect(() => {
              he = !0;
            }, []),
            e
          );
        };
      function we() {
        const e = new Map();
        return {
          emit(t, n) {
            var r;
            null == (r = e.get(t)) || r.forEach((e) => e(n));
          },
          on(t, n) {
            e.set(t, [...(e.get(t) || []), n]);
          },
          off(t, n) {
            var r;
            e.set(
              t,
              (null == (r = e.get(t)) ? void 0 : r.filter((e) => e !== n)) ||
                [],
            );
          },
        };
      }
      const Re = r.createContext(null),
        xe = r.createContext(null),
        ke = () => {
          var e;
          return (null == (e = r.useContext(Re)) ? void 0 : e.id) || null;
        },
        Ie = () => r.useContext(xe);
      function Ce(e) {
        return "data-floating-ui-" + e;
      }
      function Me(e) {
        -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
      }
      function Se(e) {
        const t = (0, r.useRef)(e);
        return (
          ae(() => {
            t.current = e;
          }),
          t
        );
      }
      const Le = Ce("safe-polygon");
      function Oe(e, t, n) {
        return n && !m(n)
          ? 0
          : "number" == typeof e
            ? e
            : null == e
              ? void 0
              : e[t];
      }
      function Te(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            dataRef: i,
            events: l,
            elements: s,
          } = e,
          {
            enabled: a = !0,
            delay: f = 0,
            handleClose: d = null,
            mouseOnly: v = !1,
            restMs: g = 0,
            move: h = !0,
          } = t,
          b = Ie(),
          y = ke(),
          E = Se(d),
          w = Se(f),
          R = Se(n),
          x = r.useRef(),
          k = r.useRef(-1),
          I = r.useRef(),
          C = r.useRef(-1),
          M = r.useRef(!0),
          S = r.useRef(!1),
          L = r.useRef(() => {}),
          O = r.useRef(!1),
          T = r.useCallback(() => {
            var e;
            const t = null == (e = i.current.openEvent) ? void 0 : e.type;
            return (
              (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t
            );
          }, [i]);
        r.useEffect(() => {
          if (a)
            return (
              l.on("openchange", e),
              () => {
                l.off("openchange", e);
              }
            );
          function e(e) {
            let { open: t } = e;
            t || (Me(k), Me(C), (M.current = !0), (O.current = !1));
          }
        }, [a, l]),
          r.useEffect(() => {
            if (!a) return;
            if (!E.current) return;
            if (!n) return;
            function e(e) {
              T() && o(!1, e, "hover");
            }
            const t = p(s.floating).documentElement;
            return (
              t.addEventListener("mouseleave", e),
              () => {
                t.removeEventListener("mouseleave", e);
              }
            );
          }, [s.floating, n, o, a, E, T]);
        const A = r.useCallback(
            function (e, t, n) {
              void 0 === t && (t = !0), void 0 === n && (n = "hover");
              const r = Oe(w.current, "close", x.current);
              r && !I.current
                ? (Me(k), (k.current = window.setTimeout(() => o(!1, e, n), r)))
                : t && (Me(k), o(!1, e, n));
            },
            [w, o],
          ),
          P = $(() => {
            L.current(), (I.current = void 0);
          }),
          N = $(() => {
            if (S.current) {
              const e = p(s.floating).body;
              (e.style.pointerEvents = ""),
                e.removeAttribute(Le),
                (S.current = !1);
            }
          }),
          D = $(
            () =>
              !!i.current.openEvent &&
              ["click", "mousedown"].includes(i.current.openEvent.type),
          );
        r.useEffect(() => {
          if (a && (0, u.vq)(s.domReference)) {
            var e;
            const o = s.domReference;
            return (
              n && o.addEventListener("mouseleave", l),
              null == (e = s.floating) || e.addEventListener("mouseleave", l),
              h && o.addEventListener("mousemove", t, { once: !0 }),
              o.addEventListener("mouseenter", t),
              o.addEventListener("mouseleave", r),
              () => {
                var e;
                n && o.removeEventListener("mouseleave", l),
                  null == (e = s.floating) ||
                    e.removeEventListener("mouseleave", l),
                  h && o.removeEventListener("mousemove", t),
                  o.removeEventListener("mouseenter", t),
                  o.removeEventListener("mouseleave", r);
              }
            );
          }
          function t(e) {
            if (
              (Me(k),
              (M.current = !1),
              (v && !m(x.current)) || (g > 0 && !Oe(w.current, "open")))
            )
              return;
            const t = Oe(w.current, "open", x.current);
            t
              ? (k.current = window.setTimeout(() => {
                  R.current || o(!0, e, "hover");
                }, t))
              : n || o(!0, e, "hover");
          }
          function r(e) {
            if (D()) return;
            L.current();
            const t = p(s.floating);
            if (
              (Me(C), (O.current = !1), E.current && i.current.floatingContext)
            ) {
              n || Me(k),
                (I.current = E.current({
                  ...i.current.floatingContext,
                  tree: b,
                  x: e.clientX,
                  y: e.clientY,
                  onClose() {
                    N(), P(), D() || A(e, !0, "safe-polygon");
                  },
                }));
              const r = I.current;
              return (
                t.addEventListener("mousemove", r),
                void (L.current = () => {
                  t.removeEventListener("mousemove", r);
                })
              );
            }
            ("touch" !== x.current || !c(s.floating, e.relatedTarget)) && A(e);
          }
          function l(e) {
            D() ||
              (i.current.floatingContext &&
                (null == E.current ||
                  E.current({
                    ...i.current.floatingContext,
                    tree: b,
                    x: e.clientX,
                    y: e.clientY,
                    onClose() {
                      N(), P(), D() || A(e);
                    },
                  })(e)));
          }
        }, [s, a, e, v, g, h, A, P, N, o, n, R, b, w, E, i, D]),
          ae(() => {
            var e;
            if (
              a &&
              n &&
              null != (e = E.current) &&
              e.__options.blockPointerEvents &&
              T()
            ) {
              S.current = !0;
              const e = s.floating;
              if ((0, u.vq)(s.domReference) && e) {
                var t;
                const n = p(s.floating).body;
                n.setAttribute(Le, "");
                const r = s.domReference,
                  o =
                    null == b ||
                    null == (t = b.nodesRef.current.find((e) => e.id === y)) ||
                    null == (t = t.context)
                      ? void 0
                      : t.elements.floating;
                return (
                  o && (o.style.pointerEvents = ""),
                  (n.style.pointerEvents = "none"),
                  (r.style.pointerEvents = "auto"),
                  (e.style.pointerEvents = "auto"),
                  () => {
                    (n.style.pointerEvents = ""),
                      (r.style.pointerEvents = ""),
                      (e.style.pointerEvents = "");
                  }
                );
              }
            }
          }, [a, n, y, s, b, E, T]),
          ae(() => {
            n || ((x.current = void 0), (O.current = !1), P(), N());
          }, [n, P, N]),
          r.useEffect(
            () => () => {
              P(), Me(k), Me(C), N();
            },
            [a, s.domReference, P, N],
          );
        const q = r.useMemo(() => {
            function e(e) {
              x.current = e.pointerType;
            }
            return {
              onPointerDown: e,
              onPointerEnter: e,
              onMouseMove(e) {
                const { nativeEvent: t } = e;
                function r() {
                  M.current || R.current || o(!0, t, "hover");
                }
                (v && !m(x.current)) ||
                  n ||
                  0 === g ||
                  (O.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
                  (Me(C),
                  "touch" === x.current
                    ? r()
                    : ((O.current = !0),
                      (C.current = window.setTimeout(r, g))));
              },
            };
          }, [v, o, n, R, g]),
          F = r.useMemo(
            () => ({
              onMouseEnter() {
                Me(k);
              },
              onMouseLeave(e) {
                D() || A(e.nativeEvent, !1);
              },
            }),
            [A, D],
          );
        return r.useMemo(
          () => (a ? { reference: q, floating: F } : {}),
          [a, q, F],
        );
      }
      let Ae = 0;
      function Pe(e, t) {
        void 0 === t && (t = {});
        const {
          preventScroll: n = !1,
          cancelPrevious: r = !0,
          sync: o = !1,
        } = t;
        r && cancelAnimationFrame(Ae);
        const u = () => (null == e ? void 0 : e.focus({ preventScroll: n }));
        o ? u() : (Ae = requestAnimationFrame(u));
      }
      function Ne(e, t) {
        var n;
        let r = [],
          o = null == (n = e.find((e) => e.id === t)) ? void 0 : n.parentId;
        for (; o; ) {
          const t = e.find((e) => e.id === o);
          (o = null == t ? void 0 : t.parentId), t && (r = r.concat(t));
        }
        return r;
      }
      function De(e, t) {
        let n = e.filter((e) => {
            var n;
            return (
              e.parentId === t && (null == (n = e.context) ? void 0 : n.open)
            );
          }),
          r = n;
        for (; r.length; )
          (r = e.filter((e) => {
            var t;
            return null == (t = r)
              ? void 0
              : t.some((t) => {
                  var n;
                  return (
                    e.parentId === t.id &&
                    (null == (n = e.context) ? void 0 : n.open)
                  );
                });
          })),
            (n = n.concat(r));
        return n;
      }
      let qe = new WeakMap(),
        Fe = new WeakSet(),
        Ke = {},
        _e = 0;
      const je = () =>
          "undefined" != typeof HTMLElement && "inert" in HTMLElement.prototype,
        Ue = (e) => e && (e.host || Ue(e.parentNode)),
        Be = (e, t) =>
          t
            .map((t) => {
              if (e.contains(t)) return t;
              const n = Ue(t);
              return e.contains(n) ? n : null;
            })
            .filter((e) => null != e);
      function We(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const r = p(e[0]).body;
        return (function (e, t, n, r) {
          const o = "data-floating-ui-inert",
            i = r ? "inert" : n ? "aria-hidden" : null,
            c = Be(t, e),
            l = new Set(),
            s = new Set(c),
            a = [];
          Ke[o] || (Ke[o] = new WeakMap());
          const f = Ke[o];
          return (
            c.forEach(function e(t) {
              t && !l.has(t) && (l.add(t), t.parentNode && e(t.parentNode));
            }),
            (function e(t) {
              t &&
                !s.has(t) &&
                [].forEach.call(t.children, (t) => {
                  if ("script" !== (0, u.mq)(t))
                    if (l.has(t)) e(t);
                    else {
                      const e = i ? t.getAttribute(i) : null,
                        n = null !== e && "false" !== e,
                        r = qe.get(t) || 0,
                        u = i ? r + 1 : r,
                        c = (f.get(t) || 0) + 1;
                      qe.set(t, u),
                        f.set(t, c),
                        a.push(t),
                        1 === u && n && Fe.add(t),
                        1 === c && t.setAttribute(o, ""),
                        !n && i && t.setAttribute(i, "true");
                    }
                });
            })(t),
            l.clear(),
            _e++,
            () => {
              a.forEach((e) => {
                const t = qe.get(e) || 0,
                  n = i ? t - 1 : t,
                  r = (f.get(e) || 0) - 1;
                qe.set(e, n),
                  f.set(e, r),
                  n || (!Fe.has(e) && i && e.removeAttribute(i), Fe.delete(e)),
                  r || e.removeAttribute(o);
              }),
                _e--,
                _e ||
                  ((qe = new WeakMap()),
                  (qe = new WeakMap()),
                  (Fe = new WeakSet()),
                  (Ke = {}));
            }
          );
        })(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n);
      }
      const Ye = () => ({
        getShadowRoot: !0,
        displayCheck:
          "function" == typeof ResizeObserver &&
          ResizeObserver.toString().includes("[native code]")
            ? "full"
            : "none",
      });
      function He(e, t) {
        const n = W(e, Ye());
        "prev" === t && n.reverse();
        const r = n.indexOf(i(p(e)));
        return n.slice(r + 1)[0];
      }
      function Xe() {
        return He(document.body, "next");
      }
      function ze() {
        return He(document.body, "prev");
      }
      function Ve(e, t) {
        const n = t || e.currentTarget,
          r = e.relatedTarget;
        return !r || !c(n, r);
      }
      const $e = {
          border: 0,
          clip: "rect(0 0 0 0)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: 0,
          position: "fixed",
          whiteSpace: "nowrap",
          width: "1px",
          top: 0,
          left: 0,
        },
        Ge = r.forwardRef(function (e, t) {
          const [n, o] = r.useState();
          ae(() => {
            d() && o("button");
          }, []);
          const u = {
            ref: t,
            tabIndex: 0,
            role: n,
            "aria-hidden": !n || void 0,
            [Ce("focus-guard")]: "",
            style: $e,
          };
          return (0, x.jsx)("span", { ...e, ...u });
        }),
        Qe = r.createContext(null);
      const Je = () => r.useContext(Qe),
        Ze = "data-floating-ui-focusable";
      function et(e) {
        return e
          ? e.hasAttribute(Ze)
            ? e
            : e.querySelector("[" + Ze + "]") || e
          : null;
      }
      function tt(e) {
        return r.useMemo(
          () => (t) => {
            e.forEach((e) => {
              e && (e.current = t);
            });
          },
          e,
        );
      }
      const nt = 20;
      let rt = [];
      function ot() {
        return rt
          .slice()
          .reverse()
          .find((e) => e.isConnected);
      }
      const ut = r.forwardRef(function (e, t) {
        return (0, x.jsx)("button", {
          ...e,
          type: "button",
          ref: t,
          tabIndex: -1,
          style: $e,
        });
      });
      function it(e) {
        const {
            context: t,
            children: n,
            disabled: o = !1,
            order: l = ["content"],
            guards: s = !0,
            initialFocus: d = 0,
            returnFocus: v = !0,
            restoreFocus: m = !1,
            modal: g = !0,
            visuallyHiddenDismiss: b = !1,
            closeOnFocusOut: y = !0,
            outsideElementsInert: R = !1,
          } = e,
          {
            open: k,
            onOpenChange: I,
            events: C,
            dataRef: M,
            elements: { domReference: S, floating: L },
          } = t,
          O = $(() => {
            var e;
            return null == (e = M.current.floatingContext) ? void 0 : e.nodeId;
          }),
          T = "number" == typeof d && d < 0,
          A = w(S) && T,
          P = je(),
          N = !P || s,
          D = !N || (P && R),
          q = Se(l),
          F = Se(d),
          K = Se(v),
          _ = Ie(),
          j = Je(),
          U = r.useRef(null),
          B = r.useRef(null),
          H = r.useRef(!1),
          X = r.useRef(!1),
          z = r.useRef(-1),
          V = null != j,
          G = et(L),
          Q = $(function (e) {
            return void 0 === e && (e = G), e ? W(e, Ye()) : [];
          }),
          J = $((e) => {
            const t = Q(e);
            return q.current
              .map((e) =>
                S && "reference" === e ? S : G && "floating" === e ? G : t,
              )
              .filter(Boolean)
              .flat();
          });
        r.useEffect(() => {
          if (o) return;
          if (!g) return;
          function e(e) {
            if ("Tab" === e.key) {
              c(G, i(p(G))) && 0 === Q().length && !A && E(e);
              const t = J(),
                n = h(e);
              "reference" === q.current[0] &&
                n === S &&
                (E(e), e.shiftKey ? Pe(t[t.length - 1]) : Pe(t[1])),
                "floating" === q.current[1] &&
                  n === G &&
                  e.shiftKey &&
                  (E(e), Pe(t[0]));
            }
          }
          const t = p(G);
          return (
            t.addEventListener("keydown", e),
            () => {
              t.removeEventListener("keydown", e);
            }
          );
        }, [o, S, G, g, q, A, Q, J]),
          r.useEffect(() => {
            if (!o && L)
              return (
                L.addEventListener("focusin", e),
                () => {
                  L.removeEventListener("focusin", e);
                }
              );
            function e(e) {
              const t = h(e),
                n = Q().indexOf(t);
              -1 !== n && (z.current = n);
            }
          }, [o, L, Q]),
          r.useEffect(() => {
            if (!o && y)
              return L && (0, u.sb)(S)
                ? (S.addEventListener("focusout", t),
                  S.addEventListener("pointerdown", e),
                  L.addEventListener("focusout", t),
                  () => {
                    S.removeEventListener("focusout", t),
                      S.removeEventListener("pointerdown", e),
                      L.removeEventListener("focusout", t);
                  })
                : void 0;
            function e() {
              (X.current = !0),
                setTimeout(() => {
                  X.current = !1;
                });
            }
            function t(e) {
              const t = e.relatedTarget;
              queueMicrotask(() => {
                const n = O(),
                  r = !(
                    c(S, t) ||
                    c(L, t) ||
                    c(t, L) ||
                    c(null == j ? void 0 : j.portalNode, t) ||
                    (null != t && t.hasAttribute(Ce("focus-guard"))) ||
                    (_ &&
                      (De(_.nodesRef.current, n).find((e) => {
                        var n, r;
                        return (
                          c(
                            null == (n = e.context)
                              ? void 0
                              : n.elements.floating,
                            t,
                          ) ||
                          c(
                            null == (r = e.context)
                              ? void 0
                              : r.elements.domReference,
                            t,
                          )
                        );
                      }) ||
                        Ne(_.nodesRef.current, n).find((e) => {
                          var n, r, o;
                          return (
                            [
                              null == (n = e.context)
                                ? void 0
                                : n.elements.floating,
                              et(
                                null == (r = e.context)
                                  ? void 0
                                  : r.elements.floating,
                              ),
                            ].includes(t) ||
                            (null == (o = e.context)
                              ? void 0
                              : o.elements.domReference) === t
                          );
                        })))
                  );
                if (m && r && i(p(G)) === p(G).body) {
                  (0, u.sb)(G) && G.focus();
                  const e = z.current,
                    t = Q(),
                    n = t[e] || t[t.length - 1] || G;
                  (0, u.sb)(n) && n.focus();
                }
                (!A && g) ||
                  !t ||
                  !r ||
                  X.current ||
                  t === ot() ||
                  ((H.current = !0), I(!1, e, "focus-out"));
              });
            }
          }, [o, S, L, G, g, _, j, I, y, m, Q, A, O]);
        const Z = r.useRef(null),
          ee = r.useRef(null),
          te = tt([Z, null == j ? void 0 : j.beforeInsideRef]),
          ne = tt([ee, null == j ? void 0 : j.afterInsideRef]);
        function re(e) {
          return !o && b && g
            ? (0, x.jsx)(ut, {
                ref: "start" === e ? U : B,
                onClick: (e) => I(!1, e.nativeEvent),
                children: "string" == typeof b ? b : "Dismiss",
              })
            : null;
        }
        r.useEffect(() => {
          var e;
          if (o) return;
          if (!L) return;
          const t = Array.from(
              (null == j || null == (e = j.portalNode)
                ? void 0
                : e.querySelectorAll("[" + Ce("portal") + "]")) || [],
            ),
            n =
              _ && !g
                ? Ne(null == _ ? void 0 : _.nodesRef.current, O()).map((e) => {
                    var t;
                    return null == (t = e.context)
                      ? void 0
                      : t.elements.floating;
                  })
                : [],
            r = [
              L,
              ...t,
              ...n,
              U.current,
              B.current,
              Z.current,
              ee.current,
              null == j ? void 0 : j.beforeOutsideRef.current,
              null == j ? void 0 : j.afterOutsideRef.current,
              q.current.includes("reference") || A ? S : null,
            ].filter((e) => null != e),
            u = g || A ? We(r, !D, D) : We(r);
          return () => {
            u();
          };
        }, [o, S, L, g, q, j, A, N, D, _, O]),
          ae(() => {
            if (o || !(0, u.sb)(G)) return;
            const e = i(p(G));
            queueMicrotask(() => {
              const t = J(G),
                n = F.current,
                r = ("number" == typeof n ? t[n] : n.current) || G,
                o = c(G, e);
              T || o || !k || Pe(r, { preventScroll: r === G });
            });
          }, [o, k, G, T, J, F]),
          ae(() => {
            if (o || !G) return;
            let e = !1,
              t = !1;
            const n = p(G),
              r = i(n);
            let l = M.current.openEvent;
            var s;
            function d(n) {
              let { open: r, reason: o, event: u, nested: i } = n;
              if (
                (r && (l = u),
                "escape-key" === o && (t = !0),
                ["hover", "safe-polygon"].includes(o) &&
                  "mouseleave" === u.type &&
                  (H.current = !0),
                "outside-press" === o)
              )
                if (i) (H.current = !1), (e = !0);
                else if (a(u) || f(u)) H.current = !1;
                else {
                  let t = !1;
                  document.createElement("div").focus({
                    get preventScroll() {
                      return (t = !0), !1;
                    },
                  }),
                    t ? ((H.current = !1), (e = !0)) : (H.current = !0);
                }
            }
            (s = r),
              (rt = rt.filter((e) => e.isConnected)),
              s &&
                "body" !== (0, u.mq)(s) &&
                (rt.push(s), rt.length > nt && (rt = rt.slice(-nt))),
              C.on("openchange", d);
            const v = n.createElement("span");
            return (
              v.setAttribute("tabindex", "-1"),
              v.setAttribute("aria-hidden", "true"),
              Object.assign(v.style, $e),
              V && S && S.insertAdjacentElement("afterend", v),
              () => {
                C.off("openchange", d);
                const r = i(n),
                  o =
                    c(L, r) ||
                    (_ &&
                      De(_.nodesRef.current, O()).some((e) => {
                        var t;
                        return c(
                          null == (t = e.context)
                            ? void 0
                            : t.elements.floating,
                          r,
                        );
                      }));
                (o || (l && ["click", "mousedown"].includes(l.type))) &&
                  (t = !0);
                const s =
                  "boolean" == typeof K.current
                    ? t && S
                      ? S
                      : ot() || v
                    : K.current.current || v;
                queueMicrotask(() => {
                  const t = (function (e) {
                    const t = Ye();
                    return Y(e, t) ? e : W(e, t)[0] || e;
                  })(s);
                  K.current &&
                    !H.current &&
                    (0, u.sb)(t) &&
                    (t === r || r === n.body || o) &&
                    t.focus({ preventScroll: e }),
                    v.remove();
                });
              }
            );
          }, [o, L, G, K, M, C, _, V, S, O]),
          r.useEffect(() => {
            queueMicrotask(() => {
              H.current = !1;
            });
          }, [o]),
          ae(() => {
            if (!o && j)
              return (
                j.setFocusManagerState({
                  modal: g,
                  closeOnFocusOut: y,
                  open: k,
                  onOpenChange: I,
                  domReference: S,
                }),
                () => {
                  j.setFocusManagerState(null);
                }
              );
          }, [o, j, g, k, I, y, S]),
          ae(() => {
            if (o) return;
            if (!G) return;
            if ("function" != typeof MutationObserver) return;
            if (T) return;
            const e = () => {
              const e = G.getAttribute("tabindex"),
                t = Q(),
                n = i(p(L)),
                r = t.indexOf(n);
              -1 !== r && (z.current = r),
                q.current.includes("floating") || (n !== S && 0 === t.length)
                  ? "0" !== e && G.setAttribute("tabindex", "0")
                  : "-1" !== e && G.setAttribute("tabindex", "-1");
            };
            e();
            const t = new MutationObserver(e);
            return (
              t.observe(G, { childList: !0, subtree: !0, attributes: !0 }),
              () => {
                t.disconnect();
              }
            );
          }, [o, L, G, S, q, Q, T]);
        const oe = !o && N && (!g || !A) && (V || g);
        return (0, x.jsxs)(x.Fragment, {
          children: [
            oe &&
              (0, x.jsx)(Ge, {
                "data-type": "inside",
                ref: te,
                onFocus: (e) => {
                  if (g) {
                    const e = J();
                    Pe("reference" === l[0] ? e[0] : e[e.length - 1]);
                  } else if (null != j && j.preserveTabOrder && j.portalNode)
                    if (((H.current = !1), Ve(e, j.portalNode))) {
                      const e = Xe() || S;
                      null == e || e.focus();
                    } else {
                      var t;
                      null == (t = j.beforeOutsideRef.current) || t.focus();
                    }
                },
              }),
            !A && re("start"),
            n,
            re("end"),
            oe &&
              (0, x.jsx)(Ge, {
                "data-type": "inside",
                ref: ne,
                onFocus: (e) => {
                  if (g) Pe(J()[0]);
                  else if (null != j && j.preserveTabOrder && j.portalNode)
                    if ((y && (H.current = !0), Ve(e, j.portalNode))) {
                      const e = ze() || S;
                      null == e || e.focus();
                    } else {
                      var t;
                      null == (t = j.afterOutsideRef.current) || t.focus();
                    }
                },
              }),
          ],
        });
      }
      function ct(e) {
        return (0, u.sb)(e.target) && "BUTTON" === e.target.tagName;
      }
      function lt(e) {
        return y(e);
      }
      function st(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            dataRef: u,
            elements: { domReference: i },
          } = e,
          {
            enabled: c = !0,
            event: l = "click",
            toggle: s = !0,
            ignoreMouse: a = !1,
            keyboardHandlers: f = !0,
            stickIfOpen: d = !0,
          } = t,
          v = r.useRef(),
          p = r.useRef(!1),
          g = r.useMemo(
            () => ({
              onPointerDown(e) {
                v.current = e.pointerType;
              },
              onMouseDown(e) {
                const t = v.current;
                0 === e.button &&
                  "click" !== l &&
                  ((m(t, !0) && a) ||
                    (!n ||
                    !s ||
                    (u.current.openEvent &&
                      d &&
                      "mousedown" !== u.current.openEvent.type)
                      ? (e.preventDefault(), o(!0, e.nativeEvent, "click"))
                      : o(!1, e.nativeEvent, "click")));
              },
              onClick(e) {
                const t = v.current;
                "mousedown" === l && v.current
                  ? (v.current = void 0)
                  : (m(t, !0) && a) ||
                    (!n ||
                    !s ||
                    (u.current.openEvent &&
                      d &&
                      "click" !== u.current.openEvent.type)
                      ? o(!0, e.nativeEvent, "click")
                      : o(!1, e.nativeEvent, "click"));
              },
              onKeyDown(e) {
                (v.current = void 0),
                  e.defaultPrevented ||
                    !f ||
                    ct(e) ||
                    (" " !== e.key ||
                      lt(i) ||
                      (e.preventDefault(), (p.current = !0)),
                    "Enter" === e.key && o(!n || !s, e.nativeEvent, "click"));
              },
              onKeyUp(e) {
                e.defaultPrevented ||
                  !f ||
                  ct(e) ||
                  lt(i) ||
                  (" " === e.key &&
                    p.current &&
                    ((p.current = !1), o(!n || !s, e.nativeEvent, "click")));
              },
            }),
            [u, i, l, a, f, o, n, d, s],
          );
        return r.useMemo(() => (c ? { reference: g } : {}), [c, g]);
      }
      const at = {
          pointerdown: "onPointerDown",
          mousedown: "onMouseDown",
          click: "onClick",
        },
        ft = {
          pointerdown: "onPointerDownCapture",
          mousedown: "onMouseDownCapture",
          click: "onClickCapture",
        },
        dt = (e) => {
          var t, n;
          return {
            escapeKey:
              "boolean" == typeof e
                ? e
                : null != (t = null == e ? void 0 : e.escapeKey) && t,
            outsidePress:
              "boolean" == typeof e
                ? e
                : null == (n = null == e ? void 0 : e.outsidePress) || n,
          };
        };
      function vt(e, t) {
        void 0 === t && (t = {});
        const { open: n, onOpenChange: o, elements: i, dataRef: l } = e,
          {
            enabled: s = !0,
            escapeKey: a = !0,
            outsidePress: f = !0,
            outsidePressEvent: d = "pointerdown",
            referencePress: v = !1,
            referencePressEvent: m = "pointerdown",
            ancestorScroll: b = !1,
            bubbles: y,
            capture: E,
          } = t,
          w = Ie(),
          R = $("function" == typeof f ? f : () => !1),
          x = "function" == typeof f ? R : f,
          k = r.useRef(!1),
          I = r.useRef(!1),
          { escapeKey: C, outsidePress: M } = dt(y),
          { escapeKey: S, outsidePress: L } = dt(E),
          O = r.useRef(!1),
          T = $((e) => {
            var t;
            if (!n || !s || !a || "Escape" !== e.key) return;
            if (O.current) return;
            const r =
                null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
              u = w ? De(w.nodesRef.current, r) : [];
            if (!C && (e.stopPropagation(), u.length > 0)) {
              let e = !0;
              if (
                (u.forEach((t) => {
                  var n;
                  null == (n = t.context) ||
                    !n.open ||
                    t.context.dataRef.current.__escapeKeyBubbles ||
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
          A = $((e) => {
            var t;
            const n = () => {
              var t;
              T(e), null == (t = h(e)) || t.removeEventListener("keydown", n);
            };
            null == (t = h(e)) || t.addEventListener("keydown", n);
          }),
          P = $((e) => {
            var t;
            const n = k.current;
            k.current = !1;
            const r = I.current;
            if (((I.current = !1), "click" === d && r)) return;
            if (n) return;
            if ("function" == typeof x && !x(e)) return;
            const s = h(e),
              a = "[" + Ce("inert") + "]",
              f = p(i.floating).querySelectorAll(a);
            let v = (0, u.vq)(s) ? s : null;
            for (; v && !(0, u.eu)(v); ) {
              const e = (0, u.$4)(v);
              if ((0, u.eu)(e) || !(0, u.vq)(e)) break;
              v = e;
            }
            if (
              f.length &&
              (0, u.vq)(s) &&
              !s.matches("html,body") &&
              !c(s, i.floating) &&
              Array.from(f).every((e) => !c(v, e))
            )
              return;
            if ((0, u.sb)(s) && q) {
              const t = (0, u.eu)(s),
                n = (0, u.L9)(s),
                r = /auto|scroll/,
                o = t || r.test(n.overflowX),
                i = t || r.test(n.overflowY),
                c = o && s.clientWidth > 0 && s.scrollWidth > s.clientWidth,
                l = i && s.clientHeight > 0 && s.scrollHeight > s.clientHeight,
                a = "rtl" === n.direction,
                f =
                  l &&
                  (a
                    ? e.offsetX <= s.offsetWidth - s.clientWidth
                    : e.offsetX > s.clientWidth),
                d = c && e.offsetY > s.clientHeight;
              if (f || d) return;
            }
            const m =
                null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
              b =
                w &&
                De(w.nodesRef.current, m).some((t) => {
                  var n;
                  return g(
                    e,
                    null == (n = t.context) ? void 0 : n.elements.floating,
                  );
                });
            if (g(e, i.floating) || g(e, i.domReference) || b) return;
            const y = w ? De(w.nodesRef.current, m) : [];
            if (y.length > 0) {
              let e = !0;
              if (
                (y.forEach((t) => {
                  var n;
                  null == (n = t.context) ||
                    !n.open ||
                    t.context.dataRef.current.__outsidePressBubbles ||
                    (e = !1);
                }),
                !e)
              )
                return;
            }
            o(!1, e, "outside-press");
          }),
          N = $((e) => {
            var t;
            const n = () => {
              var t;
              P(e), null == (t = h(e)) || t.removeEventListener(d, n);
            };
            null == (t = h(e)) || t.addEventListener(d, n);
          });
        r.useEffect(() => {
          if (!n || !s) return;
          (l.current.__escapeKeyBubbles = C),
            (l.current.__outsidePressBubbles = M);
          let e = -1;
          function t(e) {
            o(!1, e, "ancestor-scroll");
          }
          function r() {
            window.clearTimeout(e), (O.current = !0);
          }
          function c() {
            e = window.setTimeout(
              () => {
                O.current = !1;
              },
              (0, u.Tc)() ? 5 : 0,
            );
          }
          const f = p(i.floating);
          a &&
            (f.addEventListener("keydown", S ? A : T, S),
            f.addEventListener("compositionstart", r),
            f.addEventListener("compositionend", c)),
            x && f.addEventListener(d, L ? N : P, L);
          let v = [];
          return (
            b &&
              ((0, u.vq)(i.domReference) && (v = (0, u.v9)(i.domReference)),
              (0, u.vq)(i.floating) && (v = v.concat((0, u.v9)(i.floating))),
              !(0, u.vq)(i.reference) &&
                i.reference &&
                i.reference.contextElement &&
                (v = v.concat((0, u.v9)(i.reference.contextElement)))),
            (v = v.filter((e) => {
              var t;
              return (
                e !== (null == (t = f.defaultView) ? void 0 : t.visualViewport)
              );
            })),
            v.forEach((e) => {
              e.addEventListener("scroll", t, { passive: !0 });
            }),
            () => {
              a &&
                (f.removeEventListener("keydown", S ? A : T, S),
                f.removeEventListener("compositionstart", r),
                f.removeEventListener("compositionend", c)),
                x && f.removeEventListener(d, L ? N : P, L),
                v.forEach((e) => {
                  e.removeEventListener("scroll", t);
                }),
                window.clearTimeout(e);
            }
          );
        }, [l, i, a, x, d, n, o, b, s, C, M, T, S, A, P, L, N]),
          r.useEffect(() => {
            k.current = !1;
          }, [x, d]);
        const D = r.useMemo(
            () => ({
              onKeyDown: T,
              ...(v && {
                [at[m]]: (e) => {
                  o(!1, e.nativeEvent, "reference-press");
                },
                ...("click" !== m && {
                  onClick(e) {
                    o(!1, e.nativeEvent, "reference-press");
                  },
                }),
              }),
            }),
            [T, o, v, m],
          ),
          q = r.useMemo(
            () => ({
              onKeyDown: T,
              onMouseDown() {
                I.current = !0;
              },
              onMouseUp() {
                I.current = !0;
              },
              [ft[d]]: () => {
                k.current = !0;
              },
            }),
            [T, d],
          );
        return r.useMemo(
          () => (s ? { reference: D, floating: q } : {}),
          [s, D, q],
        );
      }
      function mt(e) {
        void 0 === e && (e = {});
        const { nodeId: t } = e,
          n = (function (e) {
            const { open: t = !1, onOpenChange: n, elements: o } = e,
              u = Ee(),
              i = r.useRef({}),
              [c] = r.useState(() => we()),
              l = null != ke(),
              [s, a] = r.useState(o.reference),
              f = $((e, t, r) => {
                (i.current.openEvent = e ? t : void 0),
                  c.emit("openchange", {
                    open: e,
                    event: t,
                    reason: r,
                    nested: l,
                  }),
                  null == n || n(e, t, r);
              }),
              d = r.useMemo(() => ({ setPositionReference: a }), []),
              v = r.useMemo(
                () => ({
                  reference: s || o.reference || null,
                  floating: o.floating || null,
                  domReference: o.reference,
                }),
                [s, o.reference, o.floating],
              );
            return r.useMemo(
              () => ({
                dataRef: i,
                open: t,
                onOpenChange: f,
                elements: v,
                events: c,
                floatingId: u,
                refs: d,
              }),
              [t, f, v, c, u, d],
            );
          })({
            ...e,
            elements: { reference: null, floating: null, ...e.elements },
          }),
          o = e.rootContext || n,
          i = o.elements,
          [c, l] = r.useState(null),
          [s, a] = r.useState(null),
          f = (null == i ? void 0 : i.domReference) || c,
          d = r.useRef(null),
          v = Ie();
        ae(() => {
          f && (d.current = f);
        }, [f]);
        const m = (0, H.we)({
            ...e,
            elements: { ...i, ...(s && { reference: s }) },
          }),
          p = r.useCallback(
            (e) => {
              const t = (0, u.vq)(e)
                ? {
                    getBoundingClientRect: () => e.getBoundingClientRect(),
                    contextElement: e,
                  }
                : e;
              a(t), m.refs.setReference(t);
            },
            [m.refs],
          ),
          g = r.useCallback(
            (e) => {
              ((0, u.vq)(e) || null === e) && ((d.current = e), l(e)),
                ((0, u.vq)(m.refs.reference.current) ||
                  null === m.refs.reference.current ||
                  (null !== e && !(0, u.vq)(e))) &&
                  m.refs.setReference(e);
            },
            [m.refs],
          ),
          h = r.useMemo(
            () => ({
              ...m.refs,
              setReference: g,
              setPositionReference: p,
              domReference: d,
            }),
            [m.refs, g, p],
          ),
          b = r.useMemo(
            () => ({ ...m.elements, domReference: f }),
            [m.elements, f],
          ),
          y = r.useMemo(
            () => ({ ...m, ...o, refs: h, elements: b, nodeId: t }),
            [m, h, b, t, o],
          );
        return (
          ae(() => {
            o.dataRef.current.floatingContext = y;
            const e =
              null == v ? void 0 : v.nodesRef.current.find((e) => e.id === t);
            e && (e.context = y);
          }),
          r.useMemo(
            () => ({ ...m, context: y, refs: h, elements: b }),
            [m, h, b, y],
          )
        );
      }
      function pt(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            events: s,
            dataRef: a,
            elements: v,
          } = e,
          { enabled: m = !0, visibleOnly: g = !0 } = t,
          b = r.useRef(!1),
          E = r.useRef(-1),
          w = r.useRef(!0);
        r.useEffect(() => {
          if (!m) return;
          const e = (0, u.zk)(v.domReference);
          function t() {
            !n &&
              (0, u.sb)(v.domReference) &&
              v.domReference === i(p(v.domReference)) &&
              (b.current = !0);
          }
          function r() {
            w.current = !0;
          }
          return (
            e.addEventListener("blur", t),
            e.addEventListener("keydown", r, !0),
            () => {
              e.removeEventListener("blur", t),
                e.removeEventListener("keydown", r, !0);
            }
          );
        }, [v.domReference, n, m]),
          r.useEffect(() => {
            if (m)
              return (
                s.on("openchange", e),
                () => {
                  s.off("openchange", e);
                }
              );
            function e(e) {
              let { reason: t } = e;
              ("reference-press" !== t && "escape-key" !== t) ||
                (b.current = !0);
            }
          }, [s, m]),
          r.useEffect(
            () => () => {
              Me(E);
            },
            [],
          );
        const R = r.useMemo(
          () => ({
            onPointerDown(e) {
              f(e.nativeEvent) || (w.current = !1);
            },
            onMouseLeave() {
              b.current = !1;
            },
            onFocus(e) {
              if (b.current) return;
              const t = h(e.nativeEvent);
              if (g && (0, u.vq)(t))
                try {
                  if (
                    d() &&
                    l().toLowerCase().startsWith("mac") &&
                    !navigator.maxTouchPoints
                  )
                    throw Error();
                  if (!t.matches(":focus-visible")) return;
                } catch (e) {
                  if (!w.current && !y(t)) return;
                }
              o(!0, e.nativeEvent, "focus");
            },
            onBlur(e) {
              b.current = !1;
              const t = e.relatedTarget,
                n = e.nativeEvent,
                r =
                  (0, u.vq)(t) &&
                  t.hasAttribute(Ce("focus-guard")) &&
                  "outside" === t.getAttribute("data-type");
              E.current = window.setTimeout(() => {
                var e;
                const u = i(
                  v.domReference ? v.domReference.ownerDocument : document,
                );
                (t || u !== v.domReference) &&
                  (c(
                    null == (e = a.current.floatingContext)
                      ? void 0
                      : e.refs.floating.current,
                    u,
                  ) ||
                    c(v.domReference, u) ||
                    r ||
                    o(!1, n, "focus"));
              });
            },
          }),
          [a, v.domReference, o, g],
        );
        return r.useMemo(() => (m ? { reference: R } : {}), [m, R]);
      }
      const gt = "active",
        ht = "selected";
      function bt(e, t, n) {
        const r = new Map(),
          o = "item" === n;
        let u = e;
        if (o && e) {
          const { [gt]: t, [ht]: n, ...r } = e;
          u = r;
        }
        return {
          ...("floating" === n && { tabIndex: -1, [Ze]: "" }),
          ...u,
          ...t
            .map((t) => {
              const r = t ? t[n] : null;
              return "function" == typeof r ? (e ? r(e) : null) : r;
            })
            .concat(e)
            .reduce(
              (e, t) =>
                t
                  ? (Object.entries(t).forEach((t) => {
                      let [n, u] = t;
                      var i;
                      (o && [gt, ht].includes(n)) ||
                        (0 === n.indexOf("on")
                          ? (r.has(n) || r.set(n, []),
                            "function" == typeof u &&
                              (null == (i = r.get(n)) || i.push(u),
                              (e[n] = function () {
                                for (
                                  var e,
                                    t = arguments.length,
                                    o = new Array(t),
                                    u = 0;
                                  u < t;
                                  u++
                                )
                                  o[u] = arguments[u];
                                return null == (e = r.get(n))
                                  ? void 0
                                  : e
                                      .map((e) => e(...o))
                                      .find((e) => void 0 !== e);
                              })))
                          : (e[n] = u));
                    }),
                    e)
                  : e,
              {},
            ),
        };
      }
      function yt(e) {
        void 0 === e && (e = []);
        const t = e.map((e) => (null == e ? void 0 : e.reference)),
          n = e.map((e) => (null == e ? void 0 : e.floating)),
          o = e.map((e) => (null == e ? void 0 : e.item)),
          u = r.useCallback((t) => bt(t, e, "reference"), t),
          i = r.useCallback((t) => bt(t, e, "floating"), n),
          c = r.useCallback((t) => bt(t, e, "item"), o);
        return r.useMemo(
          () => ({
            getReferenceProps: u,
            getFloatingProps: i,
            getItemProps: c,
          }),
          [u, i, c],
        );
      }
      const Et = "Escape";
      function wt(e, t, n) {
        switch (e) {
          case "vertical":
            return t;
          case "horizontal":
            return n;
          default:
            return t || n;
        }
      }
      function Rt(e, t) {
        return wt(t, e === G || e === Q, e === J || e === Z);
      }
      function xt(e, t, n) {
        return (
          wt(t, e === Q, n ? e === J : e === Z) ||
          "Enter" === e ||
          " " === e ||
          "" === e
        );
      }
      function kt(e, t, n) {
        return wt(t, n ? e === J : e === Z, e === Q);
      }
      function It(e, t, n, r) {
        return "both" === t || ("horizontal" === t && r && r > 1)
          ? e === Et
          : wt(t, n ? e === Z : e === J, e === G);
      }
      function Ct(e, t) {
        const { open: n, onOpenChange: o, elements: l } = e,
          {
            listRef: s,
            activeIndex: d,
            onNavigate: v = () => {},
            enabled: m = !0,
            selectedIndex: g = null,
            allowEscape: h = !1,
            loop: b = !1,
            nested: y = !1,
            rtl: R = !1,
            virtual: x = !1,
            focusItemOnOpen: k = "auto",
            focusItemOnHover: I = !0,
            openOnArrowKeyDown: C = !0,
            disabledIndices: M,
            orientation: S = "vertical",
            cols: L = 1,
            scrollItemIntoView: O = !0,
            virtualItemRef: T,
            itemSizes: A,
            dense: P = !1,
          } = t;
        const N = Se(et(l.floating)),
          D = ke(),
          q = Ie();
        ae(() => {
          e.dataRef.current.orientation = S;
        }, [e, S]);
        const F = $(() => {
            v(-1 === j.current ? null : j.current);
          }),
          K = w(l.domReference),
          _ = r.useRef(k),
          j = r.useRef(null != g ? g : -1),
          U = r.useRef(null),
          B = r.useRef(!0),
          W = r.useRef(F),
          Y = r.useRef(!!l.floating),
          H = r.useRef(n),
          X = r.useRef(!1),
          z = r.useRef(!1),
          V = Se(M),
          G = Se(n),
          ee = Se(O),
          fe = Se(g),
          [de, ve] = r.useState(),
          [me, pe] = r.useState(),
          ge = $(() => {
            function e(e) {
              x
                ? (ve(e.id),
                  null == q || q.events.emit("virtualfocus", e),
                  T && (T.current = e))
                : Pe(e, { sync: X.current, preventScroll: !0 });
            }
            const t = s.current[j.current];
            t && e(t);
            (X.current ? (e) => e() : requestAnimationFrame)(() => {
              const n = s.current[j.current] || t;
              if (!n) return;
              t || e(n);
              const r = ee.current;
              r &&
                be &&
                (z.current || !B.current) &&
                (null == n.scrollIntoView ||
                  n.scrollIntoView(
                    "boolean" == typeof r
                      ? { block: "nearest", inline: "nearest" }
                      : r,
                  ));
            });
          });
        ae(() => {
          m &&
            (n && l.floating
              ? _.current &&
                null != g &&
                ((z.current = !0), (j.current = g), F())
              : Y.current && ((j.current = -1), W.current()));
        }, [m, n, l.floating, g, F]),
          ae(() => {
            if (m && n && l.floating)
              if (null == d) {
                if (((X.current = !1), null != fe.current)) return;
                if (
                  (Y.current && ((j.current = -1), ge()),
                  (!H.current || !Y.current) &&
                    _.current &&
                    (null != U.current ||
                      (!0 === _.current && null == U.current)))
                ) {
                  let e = 0;
                  const t = () => {
                    if (null == s.current[0]) {
                      if (e < 2) {
                        (e ? requestAnimationFrame : queueMicrotask)(t);
                      }
                      e++;
                    } else
                      (j.current =
                        null == U.current || xt(U.current, S, R) || y
                          ? ne(s, V.current)
                          : re(s, V.current)),
                        (U.current = null),
                        F();
                  };
                  t();
                }
              } else te(s, d) || ((j.current = d), ge(), (z.current = !1));
          }, [m, n, l.floating, d, fe, y, s, S, R, F, ge, V]),
          ae(() => {
            var e;
            if (!m || l.floating || !q || x || !Y.current) return;
            const t = q.nodesRef.current,
              n =
                null == (e = t.find((e) => e.id === D)) ||
                null == (e = e.context)
                  ? void 0
                  : e.elements.floating,
              r = i(p(l.floating)),
              o = t.some((e) => e.context && c(e.context.elements.floating, r));
            n && !o && B.current && n.focus({ preventScroll: !0 });
          }, [m, l.floating, q, D, x]),
          ae(() => {
            if (m && q && x && !D)
              return (
                q.events.on("virtualfocus", e),
                () => {
                  q.events.off("virtualfocus", e);
                }
              );
            function e(e) {
              pe(e.id), T && (T.current = e);
            }
          }, [m, q, x, D, T]),
          ae(() => {
            (W.current = F), (H.current = n), (Y.current = !!l.floating);
          }),
          ae(() => {
            n || (U.current = null);
          }, [n]);
        const he = null != d,
          be = r.useMemo(() => {
            function e(e) {
              if (!n) return;
              const t = s.current.indexOf(e);
              -1 !== t && j.current !== t && ((j.current = t), F());
            }
            return {
              onFocus(t) {
                let { currentTarget: n } = t;
                (X.current = !0), e(n);
              },
              onClick: (e) => {
                let { currentTarget: t } = e;
                return t.focus({ preventScroll: !0 });
              },
              ...(I && {
                onMouseMove(t) {
                  let { currentTarget: n } = t;
                  (X.current = !0), (z.current = !1), e(n);
                },
                onPointerLeave(e) {
                  let { pointerType: t } = e;
                  var n;
                  B.current &&
                    "touch" !== t &&
                    ((X.current = !0),
                    (j.current = -1),
                    F(),
                    x ||
                      null == (n = N.current) ||
                      n.focus({ preventScroll: !0 }));
                },
              }),
            };
          }, [n, N, I, s, F, x]),
          ye = $((e) => {
            if (((B.current = !1), (X.current = !0), 229 === e.which)) return;
            if (!G.current && e.currentTarget === N.current) return;
            if (y && It(e.key, S, R, L))
              return (
                E(e),
                o(!1, e.nativeEvent, "list-navigation"),
                void (
                  (0, u.sb)(l.domReference) &&
                  (x
                    ? null == q || q.events.emit("virtualfocus", l.domReference)
                    : l.domReference.focus())
                )
              );
            const t = j.current,
              r = ne(s, M),
              c = re(s, M);
            if (
              (K ||
                ("Home" === e.key && (E(e), (j.current = r), F()),
                "End" === e.key && (E(e), (j.current = c), F())),
              L > 1)
            ) {
              const t =
                  A ||
                  Array.from({ length: s.current.length }, () => ({
                    width: 1,
                    height: 1,
                  })),
                n = ie(t, L, P),
                o = n.findIndex((e) => null != e && !se(s.current, e, M)),
                u = n.reduce(
                  (e, t, n) => (null == t || se(s.current, t, M) ? e : n),
                  -1,
                ),
                i =
                  n[
                    ue(
                      {
                        current: n.map((e) =>
                          null != e ? s.current[e] : null,
                        ),
                      },
                      {
                        event: e,
                        orientation: S,
                        loop: b,
                        rtl: R,
                        cols: L,
                        disabledIndices: le(
                          [
                            ...(M ||
                              s.current.map((e, t) =>
                                se(s.current, t) ? t : void 0,
                              )),
                            void 0,
                          ],
                          n,
                        ),
                        minIndex: o,
                        maxIndex: u,
                        prevIndex: ce(
                          j.current > c ? r : j.current,
                          t,
                          n,
                          L,
                          e.key === Q
                            ? "bl"
                            : e.key === (R ? J : Z)
                              ? "tr"
                              : "tl",
                        ),
                        stopEvent: !0,
                      },
                    )
                  ];
              if ((null != i && ((j.current = i), F()), "both" === S)) return;
            }
            if (Rt(e.key, S)) {
              if (
                (E(e),
                n && !x && i(e.currentTarget.ownerDocument) === e.currentTarget)
              )
                return (j.current = xt(e.key, S, R) ? r : c), void F();
              xt(e.key, S, R)
                ? (j.current = b
                    ? t >= c
                      ? h && t !== s.current.length
                        ? -1
                        : r
                      : oe(s, { startingIndex: t, disabledIndices: M })
                    : Math.min(
                        c,
                        oe(s, { startingIndex: t, disabledIndices: M }),
                      ))
                : (j.current = b
                    ? t <= r
                      ? h && -1 !== t
                        ? s.current.length
                        : c
                      : oe(s, {
                          startingIndex: t,
                          decrement: !0,
                          disabledIndices: M,
                        })
                    : Math.max(
                        r,
                        oe(s, {
                          startingIndex: t,
                          decrement: !0,
                          disabledIndices: M,
                        }),
                      )),
                te(s, j.current) && (j.current = -1),
                F();
            }
          }),
          Ee = r.useMemo(
            () => x && n && he && { "aria-activedescendant": me || de },
            [x, n, he, me, de],
          ),
          we = r.useMemo(
            () => ({
              "aria-orientation": "both" === S ? void 0 : S,
              ...(K ? {} : Ee),
              onKeyDown: ye,
              onPointerMove() {
                B.current = !0;
              },
            }),
            [Ee, ye, S, K],
          ),
          Re = r.useMemo(() => {
            function e(e) {
              "auto" === k && a(e.nativeEvent) && (_.current = !0);
            }
            function t(e) {
              (_.current = k),
                "auto" === k && f(e.nativeEvent) && (_.current = !0);
            }
            return {
              ...Ee,
              onKeyDown(e) {
                var t;
                B.current = !1;
                const r = e.key.startsWith("Arrow"),
                  u = ["Home", "End"].includes(e.key),
                  i = r || u,
                  c =
                    null == q ||
                    null == (t = q.nodesRef.current.find((e) => e.id === D)) ||
                    null == (t = t.context) ||
                    null == (t = t.dataRef)
                      ? void 0
                      : t.current.orientation,
                  l = kt(e.key, S, R),
                  a = It(e.key, S, R, L),
                  f = kt(e.key, c, R),
                  d = Rt(e.key, S),
                  v = (y ? f : d) || "Enter" === e.key || "" === e.key.trim();
                if (x && n) {
                  const t =
                      null == q
                        ? void 0
                        : q.nodesRef.current.find((e) => null == e.parentId),
                    n =
                      q && t
                        ? (function (e, t) {
                            let n,
                              r = -1;
                            return (
                              (function t(o, u) {
                                u > r && ((n = o), (r = u)),
                                  De(e, o).forEach((e) => {
                                    t(e.id, u + 1);
                                  });
                              })(t, 0),
                              e.find((e) => e.id === n)
                            );
                          })(q.nodesRef.current, t.id)
                        : null;
                  if (i && n && T) {
                    const t = new KeyboardEvent("keydown", {
                      key: e.key,
                      bubbles: !0,
                    });
                    if (l || a) {
                      var m, p;
                      const r =
                          (null == (m = n.context)
                            ? void 0
                            : m.elements.domReference) === e.currentTarget,
                        o =
                          a && !r
                            ? null == (p = n.context)
                              ? void 0
                              : p.elements.domReference
                            : l
                              ? s.current.find(
                                  (e) => (null == e ? void 0 : e.id) === de,
                                )
                              : null;
                      o && (E(e), o.dispatchEvent(t), pe(void 0));
                    }
                    var h;
                    if ((d || u) && n.context)
                      if (
                        n.context.open &&
                        n.parentId &&
                        e.currentTarget !== n.context.elements.domReference
                      )
                        return (
                          E(e),
                          void (
                            null == (h = n.context.elements.domReference) ||
                            h.dispatchEvent(t)
                          )
                        );
                  }
                  return ye(e);
                }
                if (n || C || !r) {
                  if (v) {
                    const t = Rt(e.key, c);
                    U.current = y && t ? null : e.key;
                  }
                  y
                    ? f &&
                      (E(e),
                      n
                        ? ((j.current = ne(s, V.current)), F())
                        : o(!0, e.nativeEvent, "list-navigation"))
                    : d &&
                      (null != g && (j.current = g),
                      E(e),
                      !n && C ? o(!0, e.nativeEvent, "list-navigation") : ye(e),
                      n && F());
                }
              },
              onFocus() {
                n && !x && ((j.current = -1), F());
              },
              onPointerDown: t,
              onPointerEnter: t,
              onMouseDown: e,
              onClick: e,
            };
          }, [de, Ee, L, ye, V, k, s, y, F, o, n, C, S, D, R, g, q, x, T]);
        return r.useMemo(
          () => (m ? { reference: Re, floating: we, item: be } : {}),
          [m, Re, we, be],
        );
      }
      const Mt = new Map([
        ["select", "listbox"],
        ["combobox", "listbox"],
        ["label", !1],
      ]);
      function St(e, t) {
        var n;
        void 0 === t && (t = {});
        const { open: o, floatingId: u } = e,
          { enabled: i = !0, role: c = "dialog" } = t,
          l = null != (n = Mt.get(c)) ? n : c,
          s = Ee(),
          a = null != ke(),
          f = r.useMemo(
            () =>
              "tooltip" === l || "label" === c
                ? {
                    ["aria-" + ("label" === c ? "labelledby" : "describedby")]:
                      o ? u : void 0,
                  }
                : {
                    "aria-expanded": o ? "true" : "false",
                    "aria-haspopup": "alertdialog" === l ? "dialog" : l,
                    "aria-controls": o ? u : void 0,
                    ...("listbox" === l && { role: "combobox" }),
                    ...("menu" === l && { id: s }),
                    ...("menu" === l && a && { role: "menuitem" }),
                    ...("select" === c && { "aria-autocomplete": "none" }),
                    ...("combobox" === c && { "aria-autocomplete": "list" }),
                  },
            [l, u, a, o, s, c],
          ),
          d = r.useMemo(() => {
            const e = { id: u, ...(l && { role: l }) };
            return "tooltip" === l || "label" === c
              ? e
              : { ...e, ...("menu" === l && { "aria-labelledby": s }) };
          }, [l, u, s, c]),
          v = r.useCallback(
            (e) => {
              let { active: t, selected: n } = e;
              const r = { role: "option", ...(t && { id: u + "-option" }) };
              switch (c) {
                case "select":
                  return { ...r, "aria-selected": t && n };
                case "combobox":
                  return { ...r, ...(t && { "aria-selected": !0 }) };
              }
              return {};
            },
            [u, c],
          );
        return r.useMemo(
          () => (i ? { reference: f, floating: d, item: v } : {}),
          [i, f, d, v],
        );
      }
      function Lt(e, t) {
        var n;
        const { open: o, dataRef: u } = e,
          {
            listRef: i,
            activeIndex: c,
            onMatch: l,
            onTypingChange: s,
            enabled: a = !0,
            findMatch: f = null,
            resetMs: d = 750,
            ignoreKeys: v = [],
            selectedIndex: m = null,
          } = t,
          p = r.useRef(-1),
          g = r.useRef(""),
          h = r.useRef(null != (n = null != m ? m : c) ? n : -1),
          b = r.useRef(null),
          y = $(l),
          w = $(s),
          R = Se(f),
          x = Se(v);
        ae(() => {
          o && (Me(p), (b.current = null), (g.current = ""));
        }, [o]),
          ae(() => {
            var e;
            o &&
              "" === g.current &&
              (h.current = null != (e = null != m ? m : c) ? e : -1);
          }, [o, m, c]);
        const k = $((e) => {
            e
              ? u.current.typing || ((u.current.typing = e), w(e))
              : u.current.typing && ((u.current.typing = e), w(e));
          }),
          I = $((e) => {
            function t(e, t, n) {
              const r = R.current
                ? R.current(t, n)
                : t.find(
                    (e) =>
                      0 ===
                      (null == e
                        ? void 0
                        : e.toLocaleLowerCase().indexOf(n.toLocaleLowerCase())),
                  );
              return r ? e.indexOf(r) : -1;
            }
            const n = i.current;
            if (
              (g.current.length > 0 &&
                " " !== g.current[0] &&
                (-1 === t(n, n, g.current) ? k(!1) : " " === e.key && E(e)),
              null == n ||
                x.current.includes(e.key) ||
                1 !== e.key.length ||
                e.ctrlKey ||
                e.metaKey ||
                e.altKey)
            )
              return;
            o && " " !== e.key && (E(e), k(!0));
            n.every((e) => {
              var t, n;
              return (
                !e ||
                (null == (t = e[0]) ? void 0 : t.toLocaleLowerCase()) !==
                  (null == (n = e[1]) ? void 0 : n.toLocaleLowerCase())
              );
            }) &&
              g.current === e.key &&
              ((g.current = ""), (h.current = b.current)),
              (g.current += e.key),
              Me(p),
              (p.current = window.setTimeout(() => {
                (g.current = ""), (h.current = b.current), k(!1);
              }, d));
            const r = h.current,
              u = t(
                n,
                [...n.slice((r || 0) + 1), ...n.slice(0, (r || 0) + 1)],
                g.current,
              );
            -1 !== u
              ? (y(u), (b.current = u))
              : " " !== e.key && ((g.current = ""), k(!1));
          }),
          C = r.useMemo(() => ({ onKeyDown: I }), [I]),
          M = r.useMemo(
            () => ({
              onKeyDown: I,
              onKeyUp(e) {
                " " === e.key && k(!1);
              },
            }),
            [I, k],
          );
        return r.useMemo(
          () => (a ? { reference: C, floating: M } : {}),
          [a, C, M],
        );
      }
      function Ot(e, t) {
        const [n, r] = e;
        let o = !1;
        const u = t.length;
        for (let e = 0, i = u - 1; e < u; i = e++) {
          const [u, c] = t[e] || [0, 0],
            [l, s] = t[i] || [0, 0];
          c >= r != s >= r &&
            n <= ((l - u) * (r - c)) / (s - c) + u &&
            (o = !o);
        }
        return o;
      }
      function Tt(e) {
        void 0 === e && (e = {});
        const {
          buffer: t = 0.5,
          blockPointerEvents: n = !1,
          requireIntent: r = !0,
        } = e;
        let o,
          i = !1,
          l = null,
          s = null,
          a = performance.now();
        const f = (e) => {
          let {
            x: n,
            y: f,
            placement: d,
            elements: v,
            onClose: m,
            nodeId: p,
            tree: g,
          } = e;
          return function (e) {
            function b() {
              clearTimeout(o), m();
            }
            if (
              (clearTimeout(o),
              !v.domReference ||
                !v.floating ||
                null == d ||
                null == n ||
                null == f)
            )
              return;
            const { clientX: y, clientY: E } = e,
              w = [y, E],
              R = h(e),
              x = "mouseleave" === e.type,
              k = c(v.floating, R),
              I = c(v.domReference, R),
              C = v.domReference.getBoundingClientRect(),
              M = v.floating.getBoundingClientRect(),
              S = d.split("-")[0],
              L = n > M.right - M.width / 2,
              O = f > M.bottom - M.height / 2,
              T = (function (e, t) {
                return (
                  e[0] >= t.x &&
                  e[0] <= t.x + t.width &&
                  e[1] >= t.y &&
                  e[1] <= t.y + t.height
                );
              })(w, C),
              A = M.width > C.width,
              P = M.height > C.height,
              N = (A ? C : M).left,
              D = (A ? C : M).right,
              q = (P ? C : M).top,
              F = (P ? C : M).bottom;
            if (k && ((i = !0), !x)) return;
            if ((I && (i = !1), I && !x)) return void (i = !0);
            if (
              x &&
              (0, u.vq)(e.relatedTarget) &&
              c(v.floating, e.relatedTarget)
            )
              return;
            if (
              g &&
              De(g.nodesRef.current, p).some((e) => {
                let { context: t } = e;
                return null == t ? void 0 : t.open;
              })
            )
              return;
            if (
              ("top" === S && f >= C.bottom - 1) ||
              ("bottom" === S && f <= C.top + 1) ||
              ("left" === S && n >= C.right - 1) ||
              ("right" === S && n <= C.left + 1)
            )
              return b();
            let K = [];
            switch (S) {
              case "top":
                K = [
                  [N, C.top + 1],
                  [N, M.bottom - 1],
                  [D, M.bottom - 1],
                  [D, C.top + 1],
                ];
                break;
              case "bottom":
                K = [
                  [N, M.top + 1],
                  [N, C.bottom - 1],
                  [D, C.bottom - 1],
                  [D, M.top + 1],
                ];
                break;
              case "left":
                K = [
                  [M.right - 1, F],
                  [M.right - 1, q],
                  [C.left + 1, q],
                  [C.left + 1, F],
                ];
                break;
              case "right":
                K = [
                  [C.right - 1, F],
                  [C.right - 1, q],
                  [M.left + 1, q],
                  [M.left + 1, F],
                ];
            }
            if (!Ot([y, E], K)) {
              if (i && !T) return b();
              if (!x && r) {
                const t = (function (e, t) {
                  const n = performance.now(),
                    r = n - a;
                  if (null === l || null === s || 0 === r)
                    return (l = e), (s = t), (a = n), null;
                  const o = e - l,
                    u = t - s,
                    i = Math.sqrt(o * o + u * u);
                  return (l = e), (s = t), (a = n), i / r;
                })(e.clientX, e.clientY);
                if (null !== t && t < 0.1) return b();
              }
              Ot(
                [y, E],
                (function (e) {
                  let [n, r] = e;
                  switch (S) {
                    case "top":
                      return [
                        [A ? n + t / 2 : L ? n + 4 * t : n - 4 * t, r + t + 1],
                        [A ? n - t / 2 : L ? n + 4 * t : n - 4 * t, r + t + 1],
                        ...[
                          [M.left, L || A ? M.bottom - t : M.top],
                          [
                            M.right,
                            L ? (A ? M.bottom - t : M.top) : M.bottom - t,
                          ],
                        ],
                      ];
                    case "bottom":
                      return [
                        [A ? n + t / 2 : L ? n + 4 * t : n - 4 * t, r - t],
                        [A ? n - t / 2 : L ? n + 4 * t : n - 4 * t, r - t],
                        ...[
                          [M.left, L || A ? M.top + t : M.bottom],
                          [M.right, L ? (A ? M.top + t : M.bottom) : M.top + t],
                        ],
                      ];
                    case "left": {
                      const e = [
                          n + t + 1,
                          P ? r + t / 2 : O ? r + 4 * t : r - 4 * t,
                        ],
                        o = [
                          n + t + 1,
                          P ? r - t / 2 : O ? r + 4 * t : r - 4 * t,
                        ];
                      return [
                        ...[
                          [O || P ? M.right - t : M.left, M.top],
                          [
                            O ? (P ? M.right - t : M.left) : M.right - t,
                            M.bottom,
                          ],
                        ],
                        e,
                        o,
                      ];
                    }
                    case "right":
                      return [
                        [n - t, P ? r + t / 2 : O ? r + 4 * t : r - 4 * t],
                        [n - t, P ? r - t / 2 : O ? r + 4 * t : r - 4 * t],
                        ...[
                          [O || P ? M.left + t : M.right, M.top],
                          [
                            O ? (P ? M.left + t : M.right) : M.left + t,
                            M.bottom,
                          ],
                        ],
                      ];
                  }
                })([n, f]),
              )
                ? !i && r && (o = window.setTimeout(b, 40))
                : b();
            }
          };
        };
        return (f.__options = { blockPointerEvents: n }), f;
      }
    },
  },
]);
