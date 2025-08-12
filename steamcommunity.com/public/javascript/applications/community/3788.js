/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3788],
  {
    94621: (e, n, t) => {
      t.d(n, { Ej: () => v, UU: () => d, we: () => f });
      var r = t(8083),
        o = t(90626),
        u = t(72739),
        i = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
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
      function l(e) {
        if ("undefined" == typeof window) return 1;
        return (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function s(e, n) {
        const t = l(e);
        return Math.round(n * t) / t;
      }
      function a(e) {
        const n = o.useRef(e);
        return (
          i(() => {
            n.current = e;
          }),
          n
        );
      }
      function f(e) {
        void 0 === e && (e = {});
        const {
            placement: n = "bottom",
            strategy: t = "absolute",
            middleware: f = [],
            platform: d,
            elements: { reference: v, floating: p } = {},
            transform: m = !0,
            whileElementsMounted: g,
            open: h,
          } = e,
          [y, b] = o.useState({
            x: 0,
            y: 0,
            strategy: t,
            placement: n,
            middlewareData: {},
            isPositioned: !1,
          }),
          [w, E] = o.useState(f);
        c(w, f) || E(f);
        const [R, x] = o.useState(null),
          [k, I] = o.useState(null),
          S = o.useCallback((e) => {
            e !== A.current && ((A.current = e), x(e));
          }, []),
          M = o.useCallback((e) => {
            e !== N.current && ((N.current = e), I(e));
          }, []),
          C = v || R,
          O = p || k,
          A = o.useRef(null),
          N = o.useRef(null),
          T = o.useRef(y),
          P = null != g,
          L = a(g),
          D = a(d),
          q = a(h),
          K = o.useCallback(() => {
            if (!A.current || !N.current) return;
            const e = { placement: n, strategy: t, middleware: w };
            D.current && (e.platform = D.current),
              (0, r.rD)(A.current, N.current, e).then((e) => {
                const n = { ...e, isPositioned: !1 !== q.current };
                F.current &&
                  !c(T.current, n) &&
                  ((T.current = n),
                  u.flushSync(() => {
                    b(n);
                  }));
              });
          }, [w, n, t, D, q]);
        i(() => {
          !1 === h &&
            T.current.isPositioned &&
            ((T.current.isPositioned = !1),
            b((e) => ({ ...e, isPositioned: !1 })));
        }, [h]);
        const F = o.useRef(!1);
        i(
          () => (
            (F.current = !0),
            () => {
              F.current = !1;
            }
          ),
          [],
        ),
          i(() => {
            if ((C && (A.current = C), O && (N.current = O), C && O)) {
              if (L.current) return L.current(C, O, K);
              K();
            }
          }, [C, O, K, L, P]);
        const j = o.useMemo(
            () => ({
              reference: A,
              floating: N,
              setReference: S,
              setFloating: M,
            }),
            [S, M],
          ),
          U = o.useMemo(() => ({ reference: C, floating: O }), [C, O]),
          _ = o.useMemo(() => {
            const e = { position: t, left: 0, top: 0 };
            if (!U.floating) return e;
            const n = s(U.floating, y.x),
              r = s(U.floating, y.y);
            return m
              ? {
                  ...e,
                  transform: "translate(" + n + "px, " + r + "px)",
                  ...(l(U.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: t, left: n, top: r };
          }, [t, m, U.floating, y.x, y.y]);
        return o.useMemo(
          () => ({ ...y, update: K, refs: j, elements: U, floatingStyles: _ }),
          [y, K, j, U, _],
        );
      }
      const d = (e, n) => ({ ...(0, r.UU)(e), options: [e, n] }),
        v = (e, n) => ({ ...(0, r.Ej)(e), options: [e, n] });
    },
    73788: (e, n, t) => {
      t.d(n, {
        s3: () => tn,
        ph: () => de,
        kp: () => un,
        s9: () => an,
        we: () => fn,
        bv: () => mn,
        rm: () => ve,
        C1: () => Rn,
        SV: () => V,
        It: () => kn,
        lY: () => In,
      });
      var r = t(90626),
        o = t.t(r, 2),
        u = t(977);
      function i(e) {
        let n = e.activeElement;
        for (
          ;
          null !=
          (null == (t = n) || null == (t = t.shadowRoot)
            ? void 0
            : t.activeElement);
        ) {
          var t;
          n = n.shadowRoot.activeElement;
        }
        return n;
      }
      function c(e, n) {
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
      function l() {
        const e = navigator.userAgentData;
        return null != e && e.platform ? e.platform : navigator.platform;
      }
      function s() {
        const e = navigator.userAgentData;
        return e && Array.isArray(e.brands)
          ? e.brands
              .map((e) => {
                let { brand: n, version: t } = e;
                return n + "/" + t;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function a(e) {
        return (
          !(0 !== e.mozInputSource || !e.isTrusted) ||
          (d() && e.pointerType
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)
        );
      }
      function f(e) {
        return (
          !s().includes("jsdom/") &&
          ((!d() && 0 === e.width && 0 === e.height) ||
            (d() &&
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
        const e = /android/i;
        return e.test(l()) || e.test(s());
      }
      function v(e, n) {
        const t = ["mouse", "pen"];
        return n || t.push("", void 0), t.includes(e);
      }
      function p(e) {
        return (null == e ? void 0 : e.ownerDocument) || document;
      }
      function m(e, n) {
        if (null == n) return !1;
        if ("composedPath" in e) return e.composedPath().includes(n);
        const t = e;
        return null != t.target && n.contains(t.target);
      }
      function g(e) {
        return "composedPath" in e ? e.composedPath()[0] : e.target;
      }
      const h =
        "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
      function y(e) {
        return (0, u.sb)(e) && e.matches(h);
      }
      function b(e) {
        e.preventDefault(), e.stopPropagation();
      }
      function w(e) {
        return !!e && "combobox" === e.getAttribute("role") && y(e);
      }
      var E = t(58015),
        R = t(7850),
        x = [
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
        k = x.join(","),
        I = "undefined" == typeof Element,
        S = I
          ? function () {}
          : Element.prototype.matches ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector,
        M =
          !I && Element.prototype.getRootNode
            ? function (e) {
                var n;
                return null == e || null === (n = e.getRootNode) || void 0 === n
                  ? void 0
                  : n.call(e);
              }
            : function (e) {
                return null == e ? void 0 : e.ownerDocument;
              },
        C = function e(n, t) {
          var r;
          void 0 === t && (t = !0);
          var o =
            null == n || null === (r = n.getAttribute) || void 0 === r
              ? void 0
              : r.call(n, "inert");
          return "" === o || "true" === o || (t && n && e(n.parentNode));
        },
        O = function (e, n, t) {
          if (C(e)) return [];
          var r = Array.prototype.slice.apply(e.querySelectorAll(k));
          return n && S.call(e, k) && r.unshift(e), (r = r.filter(t));
        },
        A = function e(n, t, r) {
          for (var o = [], u = Array.from(n); u.length; ) {
            var i = u.shift();
            if (!C(i, !1))
              if ("SLOT" === i.tagName) {
                var c = i.assignedElements(),
                  l = e(c.length ? c : i.children, !0, r);
                r.flatten
                  ? o.push.apply(o, l)
                  : o.push({ scopeParent: i, candidates: l });
              } else {
                S.call(i, k) &&
                  r.filter(i) &&
                  (t || !n.includes(i)) &&
                  o.push(i);
                var s =
                    i.shadowRoot ||
                    ("function" == typeof r.getShadowRoot &&
                      r.getShadowRoot(i)),
                  a =
                    !C(s, !1) && (!r.shadowRootFilter || r.shadowRootFilter(i));
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
        N = function (e) {
          return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
        },
        T = function (e) {
          if (!e) throw new Error("No node provided");
          return e.tabIndex < 0 &&
            (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) ||
              (function (e) {
                var n,
                  t =
                    null == e || null === (n = e.getAttribute) || void 0 === n
                      ? void 0
                      : n.call(e, "contenteditable");
                return "" === t || "true" === t;
              })(e)) &&
            !N(e)
            ? 0
            : e.tabIndex;
        },
        P = function (e, n) {
          return e.tabIndex === n.tabIndex
            ? e.documentOrder - n.documentOrder
            : e.tabIndex - n.tabIndex;
        },
        L = function (e) {
          return "INPUT" === e.tagName;
        },
        D = function (e) {
          return (
            (function (e) {
              return L(e) && "radio" === e.type;
            })(e) &&
            !(function (e) {
              if (!e.name) return !0;
              var n,
                t = e.form || M(e),
                r = function (e) {
                  return t.querySelectorAll(
                    'input[type="radio"][name="' + e + '"]',
                  );
                };
              if (
                "undefined" != typeof window &&
                void 0 !== window.CSS &&
                "function" == typeof window.CSS.escape
              )
                n = r(window.CSS.escape(e.name));
              else
                try {
                  n = r(e.name);
                } catch (e) {
                  return (
                    console.error(
                      "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                      e.message,
                    ),
                    !1
                  );
                }
              var o = (function (e, n) {
                for (var t = 0; t < e.length; t++)
                  if (e[t].checked && e[t].form === n) return e[t];
              })(n, e.form);
              return !o || o === e;
            })(e)
          );
        },
        q = function (e) {
          var n = e.getBoundingClientRect(),
            t = n.width,
            r = n.height;
          return 0 === t && 0 === r;
        },
        K = function (e, n) {
          var t = n.displayCheck,
            r = n.getShadowRoot;
          if ("hidden" === getComputedStyle(e).visibility) return !0;
          var o = S.call(e, "details>summary:first-of-type")
            ? e.parentElement
            : e;
          if (S.call(o, "details:not([open]) *")) return !0;
          if (t && "full" !== t && "legacy-full" !== t) {
            if ("non-zero-area" === t) return q(e);
          } else {
            if ("function" == typeof r) {
              for (var u = e; e; ) {
                var i = e.parentElement,
                  c = M(e);
                if (i && !i.shadowRoot && !0 === r(i)) return q(e);
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
                var n,
                  t,
                  r,
                  o,
                  u = e && M(e),
                  i = null === (n = u) || void 0 === n ? void 0 : n.host,
                  c = !1;
                if (u && u !== e)
                  for (
                    c = !!(
                      (null !== (t = i) &&
                        void 0 !== t &&
                        null !== (r = t.ownerDocument) &&
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
                          null === (l = u = M(i)) || void 0 === l
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
            if ("legacy-full" !== t) return !0;
          }
          return !1;
        },
        F = function (e, n) {
          return !(
            n.disabled ||
            C(n) ||
            (function (e) {
              return L(e) && "hidden" === e.type;
            })(n) ||
            K(n, e) ||
            (function (e) {
              return (
                "DETAILS" === e.tagName &&
                Array.prototype.slice.apply(e.children).some(function (e) {
                  return "SUMMARY" === e.tagName;
                })
              );
            })(n) ||
            (function (e) {
              if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                for (var n = e.parentElement; n; ) {
                  if ("FIELDSET" === n.tagName && n.disabled) {
                    for (var t = 0; t < n.children.length; t++) {
                      var r = n.children.item(t);
                      if ("LEGEND" === r.tagName)
                        return (
                          !!S.call(n, "fieldset[disabled] *") || !r.contains(e)
                        );
                    }
                    return !0;
                  }
                  n = n.parentElement;
                }
              return !1;
            })(n)
          );
        },
        j = function (e, n) {
          return !(D(n) || T(n) < 0 || !F(e, n));
        },
        U = function (e) {
          var n = parseInt(e.getAttribute("tabindex"), 10);
          return !!(isNaN(n) || n >= 0);
        },
        _ = function e(n) {
          var t = [],
            r = [];
          return (
            n.forEach(function (n, o) {
              var u = !!n.scopeParent,
                i = u ? n.scopeParent : n,
                c = (function (e, n) {
                  var t = T(e);
                  return t < 0 && n && !N(e) ? 0 : t;
                })(i, u),
                l = u ? e(n.candidates) : i;
              0 === c
                ? u
                  ? t.push.apply(t, l)
                  : t.push(i)
                : r.push({
                    documentOrder: o,
                    tabIndex: c,
                    item: n,
                    isScope: u,
                    content: l,
                  });
            }),
            r
              .sort(P)
              .reduce(function (e, n) {
                return (
                  n.isScope ? e.push.apply(e, n.content) : e.push(n.content), e
                );
              }, [])
              .concat(t)
          );
        },
        W = function (e, n) {
          var t;
          return (
            (t = (n = n || {}).getShadowRoot
              ? A([e], n.includeContainer, {
                  filter: j.bind(null, n),
                  flatten: !1,
                  getShadowRoot: n.getShadowRoot,
                  shadowRootFilter: U,
                })
              : O(e, n.includeContainer, j.bind(null, n))),
            _(t)
          );
        },
        B = function (e, n) {
          if (((n = n || {}), !e)) throw new Error("No node provided");
          return !1 !== S.call(e, k) && j(n, e);
        },
        H = (t(72739), t(94621));
      function V(e) {
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
      const z = { ...o },
        Y = z.useInsertionEffect || ((e) => e());
      function $(e) {
        const n = r.useRef(() => {
          0;
        });
        return (
          Y(() => {
            n.current = e;
          }),
          r.useCallback(function () {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
            return null == n.current ? void 0 : n.current(...t);
          }, [])
        );
      }
      const X = "ArrowUp",
        G = "ArrowDown",
        J = "ArrowLeft",
        Q = "ArrowRight";
      function Z(e, n, t) {
        return Math.floor(e / n) !== t;
      }
      function ee(e, n) {
        return n < 0 || n >= e.current.length;
      }
      function ne(e, n) {
        return re(e, { disabledIndices: n });
      }
      function te(e, n) {
        return re(e, {
          decrement: !0,
          startingIndex: e.current.length,
          disabledIndices: n,
        });
      }
      function re(e, n) {
        let {
          startingIndex: t = -1,
          decrement: r = !1,
          disabledIndices: o,
          amount: u = 1,
        } = void 0 === n ? {} : n;
        const i = e.current;
        let c = t;
        do {
          c += r ? -u : u;
        } while (c >= 0 && c <= i.length - 1 && le(i, c, o));
        return c;
      }
      function oe(e, n) {
        let {
            event: t,
            orientation: r,
            loop: o,
            rtl: u,
            cols: i,
            disabledIndices: c,
            minIndex: l,
            maxIndex: s,
            prevIndex: a,
            stopEvent: f = !1,
          } = n,
          d = a;
        if (t.key === X) {
          if ((f && b(t), -1 === a)) d = s;
          else if (
            ((d = re(e, {
              startingIndex: d,
              amount: i,
              decrement: !0,
              disabledIndices: c,
            })),
            o && (a - i < l || d < 0))
          ) {
            const e = a % i,
              n = s % i,
              t = s - (n - e);
            d = n === e ? s : n > e ? t : t - i;
          }
          ee(e, d) && (d = a);
        }
        if (
          (t.key === G &&
            (f && b(t),
            -1 === a
              ? (d = l)
              : ((d = re(e, {
                  startingIndex: a,
                  amount: i,
                  disabledIndices: c,
                })),
                o &&
                  a + i > s &&
                  (d = re(e, {
                    startingIndex: (a % i) - i,
                    amount: i,
                    disabledIndices: c,
                  }))),
            ee(e, d) && (d = a)),
          "both" === r)
        ) {
          const n = (0, E.RI)(a / i);
          t.key === (u ? J : Q) &&
            (f && b(t),
            a % i != i - 1
              ? ((d = re(e, { startingIndex: a, disabledIndices: c })),
                o &&
                  Z(d, i, n) &&
                  (d = re(e, {
                    startingIndex: a - (a % i) - 1,
                    disabledIndices: c,
                  })))
              : o &&
                (d = re(e, {
                  startingIndex: a - (a % i) - 1,
                  disabledIndices: c,
                })),
            Z(d, i, n) && (d = a)),
            t.key === (u ? Q : J) &&
              (f && b(t),
              a % i != 0
                ? ((d = re(e, {
                    startingIndex: a,
                    decrement: !0,
                    disabledIndices: c,
                  })),
                  o &&
                    Z(d, i, n) &&
                    (d = re(e, {
                      startingIndex: a + (i - (a % i)),
                      decrement: !0,
                      disabledIndices: c,
                    })))
                : o &&
                  (d = re(e, {
                    startingIndex: a + (i - (a % i)),
                    decrement: !0,
                    disabledIndices: c,
                  })),
              Z(d, i, n) && (d = a));
          const r = (0, E.RI)(s / i) === n;
          ee(e, d) &&
            (d =
              o && r
                ? t.key === (u ? Q : J)
                  ? s
                  : re(e, {
                      startingIndex: a - (a % i) - 1,
                      disabledIndices: c,
                    })
                : a);
        }
        return d;
      }
      function ue(e, n, t) {
        const r = [];
        let o = 0;
        return (
          e.forEach((e, u) => {
            let { width: i, height: c } = e,
              l = !1;
            for (t && (o = 0); !l; ) {
              const e = [];
              for (let t = 0; t < i; t++)
                for (let r = 0; r < c; r++) e.push(o + t + r * n);
              (o % n) + i <= n && e.every((e) => null == r[e])
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
      function ie(e, n, t, r, o) {
        if (-1 === e) return -1;
        const u = t.indexOf(e),
          i = n[e];
        switch (o) {
          case "tl":
            return u;
          case "tr":
            return i ? u + i.width - 1 : u;
          case "bl":
            return i ? u + (i.height - 1) * r : u;
          case "br":
            return t.lastIndexOf(e);
        }
      }
      function ce(e, n) {
        return n.flatMap((n, t) => (e.includes(n) ? [t] : []));
      }
      function le(e, n, t) {
        if (t) return t.includes(n);
        const r = e[n];
        return (
          null == r ||
          r.hasAttribute("disabled") ||
          "true" === r.getAttribute("aria-disabled")
        );
      }
      var se = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function ae(e, n) {
        const t = e.compareDocumentPosition(n);
        return t & Node.DOCUMENT_POSITION_FOLLOWING ||
          t & Node.DOCUMENT_POSITION_CONTAINED_BY
          ? -1
          : t & Node.DOCUMENT_POSITION_PRECEDING ||
              t & Node.DOCUMENT_POSITION_CONTAINS
            ? 1
            : 0;
      }
      const fe = r.createContext({
        register: () => {},
        unregister: () => {},
        map: new Map(),
        elementsRef: { current: [] },
      });
      function de(e) {
        const { children: n, elementsRef: t, labelsRef: o } = e,
          [u, i] = r.useState(() => new Set()),
          c = r.useCallback((e) => {
            i((n) => new Set(n).add(e));
          }, []),
          l = r.useCallback((e) => {
            i((n) => {
              const t = new Set(n);
              return t.delete(e), t;
            });
          }, []),
          s = r.useMemo(() => {
            const e = new Map();
            return (
              Array.from(u.keys())
                .sort(ae)
                .forEach((n, t) => {
                  e.set(n, t);
                }),
              e
            );
          }, [u]);
        return (0, R.jsx)(fe.Provider, {
          value: r.useMemo(
            () => ({
              register: c,
              unregister: l,
              map: s,
              elementsRef: t,
              labelsRef: o,
            }),
            [c, l, s, t, o],
          ),
          children: n,
        });
      }
      function ve(e) {
        void 0 === e && (e = {});
        const { label: n } = e,
          {
            register: t,
            unregister: o,
            map: u,
            elementsRef: i,
            labelsRef: c,
          } = r.useContext(fe),
          [l, s] = r.useState(null),
          a = r.useRef(null),
          f = r.useCallback(
            (e) => {
              if (((a.current = e), null !== l && ((i.current[l] = e), c))) {
                var t;
                const r = void 0 !== n;
                c.current[l] = r
                  ? n
                  : null != (t = null == e ? void 0 : e.textContent)
                    ? t
                    : null;
              }
            },
            [l, i, c, n],
          );
        return (
          se(() => {
            const e = a.current;
            if (e)
              return (
                t(e),
                () => {
                  o(e);
                }
              );
          }, [t, o]),
          se(() => {
            const e = a.current ? u.get(a.current) : null;
            null != e && s(e);
          }, [u]),
          r.useMemo(() => ({ ref: f, index: null == l ? -1 : l }), [l, f])
        );
      }
      const pe = [J, Q],
        me = [X, G];
      let ge = !1,
        he = 0;
      const ye = () =>
        "floating-ui-" + Math.random().toString(36).slice(2, 6) + he++;
      const be =
        z.useId ||
        function () {
          const [e, n] = r.useState(() => (ge ? ye() : void 0));
          return (
            se(() => {
              null == e && n(ye());
            }, []),
            r.useEffect(() => {
              ge = !0;
            }, []),
            e
          );
        };
      function we() {
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
      const Ee = r.createContext(null),
        Re = r.createContext(null),
        xe = () => {
          var e;
          return (null == (e = r.useContext(Ee)) ? void 0 : e.id) || null;
        },
        ke = () => r.useContext(Re);
      function Ie(e) {
        return "data-floating-ui-" + e;
      }
      function Se(e) {
        -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
      }
      function Me(e) {
        const n = (0, r.useRef)(e);
        return (
          se(() => {
            n.current = e;
          }),
          n
        );
      }
      let Ce = 0;
      function Oe(e, n) {
        void 0 === n && (n = {});
        const {
          preventScroll: t = !1,
          cancelPrevious: r = !0,
          sync: o = !1,
        } = n;
        r && cancelAnimationFrame(Ce);
        const u = () => (null == e ? void 0 : e.focus({ preventScroll: t }));
        o ? u() : (Ce = requestAnimationFrame(u));
      }
      function Ae(e, n) {
        var t;
        let r = [],
          o = null == (t = e.find((e) => e.id === n)) ? void 0 : t.parentId;
        for (; o; ) {
          const n = e.find((e) => e.id === o);
          (o = null == n ? void 0 : n.parentId), n && (r = r.concat(n));
        }
        return r;
      }
      function Ne(e, n) {
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
      let Te = new WeakMap(),
        Pe = new WeakSet(),
        Le = {},
        De = 0;
      const qe = () =>
          "undefined" != typeof HTMLElement && "inert" in HTMLElement.prototype,
        Ke = (e) => e && (e.host || Ke(e.parentNode)),
        Fe = (e, n) =>
          n
            .map((n) => {
              if (e.contains(n)) return n;
              const t = Ke(n);
              return e.contains(t) ? t : null;
            })
            .filter((e) => null != e);
      function je(e, n, t) {
        void 0 === n && (n = !1), void 0 === t && (t = !1);
        const r = p(e[0]).body;
        return (function (e, n, t, r) {
          const o = "data-floating-ui-inert",
            i = r ? "inert" : t ? "aria-hidden" : null,
            c = Fe(n, e),
            l = new Set(),
            s = new Set(c),
            a = [];
          Le[o] || (Le[o] = new WeakMap());
          const f = Le[o];
          return (
            c.forEach(function e(n) {
              n && !l.has(n) && (l.add(n), n.parentNode && e(n.parentNode));
            }),
            (function e(n) {
              n &&
                !s.has(n) &&
                [].forEach.call(n.children, (n) => {
                  if ("script" !== (0, u.mq)(n))
                    if (l.has(n)) e(n);
                    else {
                      const e = i ? n.getAttribute(i) : null,
                        t = null !== e && "false" !== e,
                        r = Te.get(n) || 0,
                        u = i ? r + 1 : r,
                        c = (f.get(n) || 0) + 1;
                      Te.set(n, u),
                        f.set(n, c),
                        a.push(n),
                        1 === u && t && Pe.add(n),
                        1 === c && n.setAttribute(o, ""),
                        !t && i && n.setAttribute(i, "true");
                    }
                });
            })(n),
            l.clear(),
            De++,
            () => {
              a.forEach((e) => {
                const n = Te.get(e) || 0,
                  t = i ? n - 1 : n,
                  r = (f.get(e) || 0) - 1;
                Te.set(e, t),
                  f.set(e, r),
                  t || (!Pe.has(e) && i && e.removeAttribute(i), Pe.delete(e)),
                  r || e.removeAttribute(o);
              }),
                De--,
                De ||
                  ((Te = new WeakMap()),
                  (Te = new WeakMap()),
                  (Pe = new WeakSet()),
                  (Le = {}));
            }
          );
        })(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, n, t);
      }
      const Ue = () => ({
        getShadowRoot: !0,
        displayCheck:
          "function" == typeof ResizeObserver &&
          ResizeObserver.toString().includes("[native code]")
            ? "full"
            : "none",
      });
      function _e(e, n) {
        const t = W(e, Ue());
        "prev" === n && t.reverse();
        const r = t.indexOf(i(p(e)));
        return t.slice(r + 1)[0];
      }
      function We() {
        return _e(document.body, "next");
      }
      function Be() {
        return _e(document.body, "prev");
      }
      function He(e, n) {
        const t = n || e.currentTarget,
          r = e.relatedTarget;
        return !r || !c(t, r);
      }
      const Ve = {
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
        ze = r.forwardRef(function (e, n) {
          const [t, o] = r.useState();
          se(() => {
            /apple/i.test(navigator.vendor) && o("button");
          }, []);
          const u = {
            ref: n,
            tabIndex: 0,
            role: t,
            "aria-hidden": !t || void 0,
            [Ie("focus-guard")]: "",
            style: Ve,
          };
          return (0, R.jsx)("span", { ...e, ...u });
        }),
        Ye = r.createContext(null);
      const $e = () => r.useContext(Ye),
        Xe = "data-floating-ui-focusable";
      function Ge(e) {
        return e
          ? e.hasAttribute(Xe)
            ? e
            : e.querySelector("[" + Xe + "]") || e
          : null;
      }
      function Je(e) {
        return r.useMemo(
          () => (n) => {
            e.forEach((e) => {
              e && (e.current = n);
            });
          },
          e,
        );
      }
      const Qe = 20;
      let Ze = [];
      function en() {
        return Ze.slice()
          .reverse()
          .find((e) => e.isConnected);
      }
      const nn = r.forwardRef(function (e, n) {
        return (0, R.jsx)("button", {
          ...e,
          type: "button",
          ref: n,
          tabIndex: -1,
          style: Ve,
        });
      });
      function tn(e) {
        const {
            context: n,
            children: t,
            disabled: o = !1,
            order: l = ["content"],
            guards: s = !0,
            initialFocus: d = 0,
            returnFocus: v = !0,
            restoreFocus: m = !1,
            modal: h = !0,
            visuallyHiddenDismiss: y = !1,
            closeOnFocusOut: E = !0,
            outsideElementsInert: x = !1,
          } = e,
          {
            open: k,
            onOpenChange: I,
            events: S,
            dataRef: M,
            elements: { domReference: C, floating: O },
          } = n,
          A = $(() => {
            var e;
            return null == (e = M.current.floatingContext) ? void 0 : e.nodeId;
          }),
          N = "number" == typeof d && d < 0,
          T = w(C) && N,
          P = qe(),
          L = !P || s,
          D = !L || (P && x),
          q = Me(l),
          K = Me(d),
          F = Me(v),
          j = ke(),
          U = $e(),
          _ = r.useRef(null),
          H = r.useRef(null),
          V = r.useRef(!1),
          z = r.useRef(!1),
          Y = r.useRef(-1),
          X = null != U,
          G = Ge(O),
          J = $(function (e) {
            return void 0 === e && (e = G), e ? W(e, Ue()) : [];
          }),
          Q = $((e) => {
            const n = J(e);
            return q.current
              .map((e) =>
                C && "reference" === e ? C : G && "floating" === e ? G : n,
              )
              .filter(Boolean)
              .flat();
          });
        r.useEffect(() => {
          if (o) return;
          if (!h) return;
          function e(e) {
            if ("Tab" === e.key) {
              c(G, i(p(G))) && 0 === J().length && !T && b(e);
              const n = Q(),
                t = g(e);
              "reference" === q.current[0] &&
                t === C &&
                (b(e), e.shiftKey ? Oe(n[n.length - 1]) : Oe(n[1])),
                "floating" === q.current[1] &&
                  t === G &&
                  e.shiftKey &&
                  (b(e), Oe(n[0]));
            }
          }
          const n = p(G);
          return (
            n.addEventListener("keydown", e),
            () => {
              n.removeEventListener("keydown", e);
            }
          );
        }, [o, C, G, h, q, T, J, Q]),
          r.useEffect(() => {
            if (!o && O)
              return (
                O.addEventListener("focusin", e),
                () => {
                  O.removeEventListener("focusin", e);
                }
              );
            function e(e) {
              const n = g(e),
                t = J().indexOf(n);
              -1 !== t && (Y.current = t);
            }
          }, [o, O, J]),
          r.useEffect(() => {
            if (!o && E)
              return O && (0, u.sb)(C)
                ? (C.addEventListener("focusout", n),
                  C.addEventListener("pointerdown", e),
                  O.addEventListener("focusout", n),
                  () => {
                    C.removeEventListener("focusout", n),
                      C.removeEventListener("pointerdown", e),
                      O.removeEventListener("focusout", n);
                  })
                : void 0;
            function e() {
              (z.current = !0),
                setTimeout(() => {
                  z.current = !1;
                });
            }
            function n(e) {
              const n = e.relatedTarget;
              queueMicrotask(() => {
                const t = A(),
                  r = !(
                    c(C, n) ||
                    c(O, n) ||
                    c(n, O) ||
                    c(null == U ? void 0 : U.portalNode, n) ||
                    (null != n && n.hasAttribute(Ie("focus-guard"))) ||
                    (j &&
                      (Ne(j.nodesRef.current, t).find((e) => {
                        var t, r;
                        return (
                          c(
                            null == (t = e.context)
                              ? void 0
                              : t.elements.floating,
                            n,
                          ) ||
                          c(
                            null == (r = e.context)
                              ? void 0
                              : r.elements.domReference,
                            n,
                          )
                        );
                      }) ||
                        Ae(j.nodesRef.current, t).find((e) => {
                          var t, r, o;
                          return (
                            [
                              null == (t = e.context)
                                ? void 0
                                : t.elements.floating,
                              Ge(
                                null == (r = e.context)
                                  ? void 0
                                  : r.elements.floating,
                              ),
                            ].includes(n) ||
                            (null == (o = e.context)
                              ? void 0
                              : o.elements.domReference) === n
                          );
                        })))
                  );
                if (m && r && i(p(G)) === p(G).body) {
                  (0, u.sb)(G) && G.focus();
                  const e = Y.current,
                    n = J(),
                    t = n[e] || n[n.length - 1] || G;
                  (0, u.sb)(t) && t.focus();
                }
                (!T && h) ||
                  !n ||
                  !r ||
                  z.current ||
                  n === en() ||
                  ((V.current = !0), I(!1, e, "focus-out"));
              });
            }
          }, [o, C, O, G, h, j, U, I, E, m, J, T, A]);
        const Z = r.useRef(null),
          ee = r.useRef(null),
          ne = Je([Z, null == U ? void 0 : U.beforeInsideRef]),
          te = Je([ee, null == U ? void 0 : U.afterInsideRef]);
        function re(e) {
          return !o && y && h
            ? (0, R.jsx)(nn, {
                ref: "start" === e ? _ : H,
                onClick: (e) => I(!1, e.nativeEvent),
                children: "string" == typeof y ? y : "Dismiss",
              })
            : null;
        }
        r.useEffect(() => {
          var e;
          if (o) return;
          if (!O) return;
          const n = Array.from(
              (null == U || null == (e = U.portalNode)
                ? void 0
                : e.querySelectorAll("[" + Ie("portal") + "]")) || [],
            ),
            t =
              j && !h
                ? Ae(null == j ? void 0 : j.nodesRef.current, A()).map((e) => {
                    var n;
                    return null == (n = e.context)
                      ? void 0
                      : n.elements.floating;
                  })
                : [],
            r = [
              O,
              ...n,
              ...t,
              _.current,
              H.current,
              Z.current,
              ee.current,
              null == U ? void 0 : U.beforeOutsideRef.current,
              null == U ? void 0 : U.afterOutsideRef.current,
              q.current.includes("reference") || T ? C : null,
            ].filter((e) => null != e),
            u = h || T ? je(r, !D, D) : je(r);
          return () => {
            u();
          };
        }, [o, C, O, h, q, U, T, L, D, j, A]),
          se(() => {
            if (o || !(0, u.sb)(G)) return;
            const e = i(p(G));
            queueMicrotask(() => {
              const n = Q(G),
                t = K.current,
                r = ("number" == typeof t ? n[t] : t.current) || G,
                o = c(G, e);
              N || o || !k || Oe(r, { preventScroll: r === G });
            });
          }, [o, k, G, N, Q, K]),
          se(() => {
            if (o || !G) return;
            let e = !1,
              n = !1;
            const t = p(G),
              r = i(t);
            let l = M.current.openEvent;
            var s;
            function d(t) {
              let { open: r, reason: o, event: u, nested: i } = t;
              if (
                (r && (l = u),
                "escape-key" === o && (n = !0),
                ["hover", "safe-polygon"].includes(o) &&
                  "mouseleave" === u.type &&
                  (V.current = !0),
                "outside-press" === o)
              )
                if (i) (V.current = !1), (e = !0);
                else if (a(u) || f(u)) V.current = !1;
                else {
                  let n = !1;
                  document.createElement("div").focus({
                    get preventScroll() {
                      return (n = !0), !1;
                    },
                  }),
                    n ? ((V.current = !1), (e = !0)) : (V.current = !0);
                }
            }
            (s = r),
              (Ze = Ze.filter((e) => e.isConnected)),
              s &&
                "body" !== (0, u.mq)(s) &&
                (Ze.push(s), Ze.length > Qe && (Ze = Ze.slice(-Qe))),
              S.on("openchange", d);
            const v = t.createElement("span");
            return (
              v.setAttribute("tabindex", "-1"),
              v.setAttribute("aria-hidden", "true"),
              Object.assign(v.style, Ve),
              X && C && C.insertAdjacentElement("afterend", v),
              () => {
                S.off("openchange", d);
                const r = i(t),
                  o =
                    c(O, r) ||
                    (j &&
                      Ne(j.nodesRef.current, A()).some((e) => {
                        var n;
                        return c(
                          null == (n = e.context)
                            ? void 0
                            : n.elements.floating,
                          r,
                        );
                      }));
                (o || (l && ["click", "mousedown"].includes(l.type))) &&
                  (n = !0);
                const s =
                  "boolean" == typeof F.current
                    ? n && C
                      ? C
                      : en() || v
                    : F.current.current || v;
                queueMicrotask(() => {
                  const n = (function (e) {
                    const n = Ue();
                    return B(e, n) ? e : W(e, n)[0] || e;
                  })(s);
                  F.current &&
                    !V.current &&
                    (0, u.sb)(n) &&
                    (n === r || r === t.body || o) &&
                    n.focus({ preventScroll: e }),
                    v.remove();
                });
              }
            );
          }, [o, O, G, F, M, S, j, X, C, A]),
          r.useEffect(() => {
            queueMicrotask(() => {
              V.current = !1;
            });
          }, [o]),
          se(() => {
            if (!o && U)
              return (
                U.setFocusManagerState({
                  modal: h,
                  closeOnFocusOut: E,
                  open: k,
                  onOpenChange: I,
                  domReference: C,
                }),
                () => {
                  U.setFocusManagerState(null);
                }
              );
          }, [o, U, h, k, I, E, C]),
          se(() => {
            if (o) return;
            if (!G) return;
            if ("function" != typeof MutationObserver) return;
            if (N) return;
            const e = () => {
              const e = G.getAttribute("tabindex"),
                n = J(),
                t = i(p(O)),
                r = n.indexOf(t);
              -1 !== r && (Y.current = r),
                q.current.includes("floating") || (t !== C && 0 === n.length)
                  ? "0" !== e && G.setAttribute("tabindex", "0")
                  : "-1" !== e && G.setAttribute("tabindex", "-1");
            };
            e();
            const n = new MutationObserver(e);
            return (
              n.observe(G, { childList: !0, subtree: !0, attributes: !0 }),
              () => {
                n.disconnect();
              }
            );
          }, [o, O, G, C, q, J, N]);
        const oe = !o && L && (!h || !T) && (X || h);
        return (0, R.jsxs)(R.Fragment, {
          children: [
            oe &&
              (0, R.jsx)(ze, {
                "data-type": "inside",
                ref: ne,
                onFocus: (e) => {
                  if (h) {
                    const e = Q();
                    Oe("reference" === l[0] ? e[0] : e[e.length - 1]);
                  } else if (null != U && U.preserveTabOrder && U.portalNode)
                    if (((V.current = !1), He(e, U.portalNode))) {
                      const e = We() || C;
                      null == e || e.focus();
                    } else {
                      var n;
                      null == (n = U.beforeOutsideRef.current) || n.focus();
                    }
                },
              }),
            !T && re("start"),
            t,
            re("end"),
            oe &&
              (0, R.jsx)(ze, {
                "data-type": "inside",
                ref: te,
                onFocus: (e) => {
                  if (h) Oe(Q()[0]);
                  else if (null != U && U.preserveTabOrder && U.portalNode)
                    if ((E && (V.current = !0), He(e, U.portalNode))) {
                      const e = Be() || C;
                      null == e || e.focus();
                    } else {
                      var n;
                      null == (n = U.afterOutsideRef.current) || n.focus();
                    }
                },
              }),
          ],
        });
      }
      function rn(e) {
        return (0, u.sb)(e.target) && "BUTTON" === e.target.tagName;
      }
      function on(e) {
        return y(e);
      }
      function un(e, n) {
        void 0 === n && (n = {});
        const {
            open: t,
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
          } = n,
          p = r.useRef(),
          m = r.useRef(!1),
          g = r.useMemo(
            () => ({
              onPointerDown(e) {
                p.current = e.pointerType;
              },
              onMouseDown(e) {
                const n = p.current;
                0 === e.button &&
                  "click" !== l &&
                  ((v(n, !0) && a) ||
                    (!t ||
                    !s ||
                    (u.current.openEvent &&
                      d &&
                      "mousedown" !== u.current.openEvent.type)
                      ? (e.preventDefault(), o(!0, e.nativeEvent, "click"))
                      : o(!1, e.nativeEvent, "click")));
              },
              onClick(e) {
                const n = p.current;
                "mousedown" === l && p.current
                  ? (p.current = void 0)
                  : (v(n, !0) && a) ||
                    (!t ||
                    !s ||
                    (u.current.openEvent &&
                      d &&
                      "click" !== u.current.openEvent.type)
                      ? o(!0, e.nativeEvent, "click")
                      : o(!1, e.nativeEvent, "click"));
              },
              onKeyDown(e) {
                (p.current = void 0),
                  e.defaultPrevented ||
                    !f ||
                    rn(e) ||
                    (" " !== e.key ||
                      on(i) ||
                      (e.preventDefault(), (m.current = !0)),
                    "Enter" === e.key && o(!t || !s, e.nativeEvent, "click"));
              },
              onKeyUp(e) {
                e.defaultPrevented ||
                  !f ||
                  rn(e) ||
                  on(i) ||
                  (" " === e.key &&
                    m.current &&
                    ((m.current = !1), o(!t || !s, e.nativeEvent, "click")));
              },
            }),
            [u, i, l, a, f, o, t, d, s],
          );
        return r.useMemo(() => (c ? { reference: g } : {}), [c, g]);
      }
      const cn = {
          pointerdown: "onPointerDown",
          mousedown: "onMouseDown",
          click: "onClick",
        },
        ln = {
          pointerdown: "onPointerDownCapture",
          mousedown: "onMouseDownCapture",
          click: "onClickCapture",
        },
        sn = (e) => {
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
      function an(e, n) {
        void 0 === n && (n = {});
        const { open: t, onOpenChange: o, elements: i, dataRef: l } = e,
          {
            enabled: s = !0,
            escapeKey: a = !0,
            outsidePress: f = !0,
            outsidePressEvent: d = "pointerdown",
            referencePress: v = !1,
            referencePressEvent: h = "pointerdown",
            ancestorScroll: y = !1,
            bubbles: b,
            capture: w,
          } = n,
          E = ke(),
          R = $("function" == typeof f ? f : () => !1),
          x = "function" == typeof f ? R : f,
          k = r.useRef(!1),
          I = r.useRef(!1),
          { escapeKey: S, outsidePress: M } = sn(b),
          { escapeKey: C, outsidePress: O } = sn(w),
          A = r.useRef(!1),
          N = $((e) => {
            var n;
            if (!t || !s || !a || "Escape" !== e.key) return;
            if (A.current) return;
            const r =
                null == (n = l.current.floatingContext) ? void 0 : n.nodeId,
              u = E ? Ne(E.nodesRef.current, r) : [];
            if (!S && (e.stopPropagation(), u.length > 0)) {
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
          T = $((e) => {
            var n;
            const t = () => {
              var n;
              N(e), null == (n = g(e)) || n.removeEventListener("keydown", t);
            };
            null == (n = g(e)) || n.addEventListener("keydown", t);
          }),
          P = $((e) => {
            var n;
            const t = k.current;
            k.current = !1;
            const r = I.current;
            if (((I.current = !1), "click" === d && r)) return;
            if (t) return;
            if ("function" == typeof x && !x(e)) return;
            const s = g(e),
              a = "[" + Ie("inert") + "]",
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
              const n = (0, u.eu)(s),
                t = (0, u.L9)(s),
                r = /auto|scroll/,
                o = n || r.test(t.overflowX),
                i = n || r.test(t.overflowY),
                c = o && s.clientWidth > 0 && s.scrollWidth > s.clientWidth,
                l = i && s.clientHeight > 0 && s.scrollHeight > s.clientHeight,
                a = "rtl" === t.direction,
                f =
                  l &&
                  (a
                    ? e.offsetX <= s.offsetWidth - s.clientWidth
                    : e.offsetX > s.clientWidth),
                d = c && e.offsetY > s.clientHeight;
              if (f || d) return;
            }
            const h =
                null == (n = l.current.floatingContext) ? void 0 : n.nodeId,
              y =
                E &&
                Ne(E.nodesRef.current, h).some((n) => {
                  var t;
                  return m(
                    e,
                    null == (t = n.context) ? void 0 : t.elements.floating,
                  );
                });
            if (m(e, i.floating) || m(e, i.domReference) || y) return;
            const b = E ? Ne(E.nodesRef.current, h) : [];
            if (b.length > 0) {
              let e = !0;
              if (
                (b.forEach((n) => {
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
          L = $((e) => {
            var n;
            const t = () => {
              var n;
              P(e), null == (n = g(e)) || n.removeEventListener(d, t);
            };
            null == (n = g(e)) || n.addEventListener(d, t);
          });
        r.useEffect(() => {
          if (!t || !s) return;
          (l.current.__escapeKeyBubbles = S),
            (l.current.__outsidePressBubbles = M);
          let e = -1;
          function n(e) {
            o(!1, e, "ancestor-scroll");
          }
          function r() {
            window.clearTimeout(e), (A.current = !0);
          }
          function c() {
            e = window.setTimeout(
              () => {
                A.current = !1;
              },
              (0, u.Tc)() ? 5 : 0,
            );
          }
          const f = p(i.floating);
          a &&
            (f.addEventListener("keydown", C ? T : N, C),
            f.addEventListener("compositionstart", r),
            f.addEventListener("compositionend", c)),
            x && f.addEventListener(d, O ? L : P, O);
          let v = [];
          return (
            y &&
              ((0, u.vq)(i.domReference) && (v = (0, u.v9)(i.domReference)),
              (0, u.vq)(i.floating) && (v = v.concat((0, u.v9)(i.floating))),
              !(0, u.vq)(i.reference) &&
                i.reference &&
                i.reference.contextElement &&
                (v = v.concat((0, u.v9)(i.reference.contextElement)))),
            (v = v.filter((e) => {
              var n;
              return (
                e !== (null == (n = f.defaultView) ? void 0 : n.visualViewport)
              );
            })),
            v.forEach((e) => {
              e.addEventListener("scroll", n, { passive: !0 });
            }),
            () => {
              a &&
                (f.removeEventListener("keydown", C ? T : N, C),
                f.removeEventListener("compositionstart", r),
                f.removeEventListener("compositionend", c)),
                x && f.removeEventListener(d, O ? L : P, O),
                v.forEach((e) => {
                  e.removeEventListener("scroll", n);
                }),
                window.clearTimeout(e);
            }
          );
        }, [l, i, a, x, d, t, o, y, s, S, M, N, C, T, P, O, L]),
          r.useEffect(() => {
            k.current = !1;
          }, [x, d]);
        const D = r.useMemo(
            () => ({
              onKeyDown: N,
              ...(v && {
                [cn[h]]: (e) => {
                  o(!1, e.nativeEvent, "reference-press");
                },
                ...("click" !== h && {
                  onClick(e) {
                    o(!1, e.nativeEvent, "reference-press");
                  },
                }),
              }),
            }),
            [N, o, v, h],
          ),
          q = r.useMemo(
            () => ({
              onKeyDown: N,
              onMouseDown() {
                I.current = !0;
              },
              onMouseUp() {
                I.current = !0;
              },
              [ln[d]]: () => {
                k.current = !0;
              },
            }),
            [N, d],
          );
        return r.useMemo(
          () => (s ? { reference: D, floating: q } : {}),
          [s, D, q],
        );
      }
      function fn(e) {
        void 0 === e && (e = {});
        const { nodeId: n } = e,
          t = (function (e) {
            const { open: n = !1, onOpenChange: t, elements: o } = e,
              u = be(),
              i = r.useRef({}),
              [c] = r.useState(() => we()),
              l = null != xe(),
              [s, a] = r.useState(o.reference),
              f = $((e, n, r) => {
                (i.current.openEvent = e ? n : void 0),
                  c.emit("openchange", {
                    open: e,
                    event: n,
                    reason: r,
                    nested: l,
                  }),
                  null == t || t(e, n, r);
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
                open: n,
                onOpenChange: f,
                elements: v,
                events: c,
                floatingId: u,
                refs: d,
              }),
              [n, f, v, c, u, d],
            );
          })({
            ...e,
            elements: { reference: null, floating: null, ...e.elements },
          }),
          o = e.rootContext || t,
          i = o.elements,
          [c, l] = r.useState(null),
          [s, a] = r.useState(null),
          f = (null == i ? void 0 : i.domReference) || c,
          d = r.useRef(null),
          v = ke();
        se(() => {
          f && (d.current = f);
        }, [f]);
        const p = (0, H.we)({
            ...e,
            elements: { ...i, ...(s && { reference: s }) },
          }),
          m = r.useCallback(
            (e) => {
              const n = (0, u.vq)(e)
                ? {
                    getBoundingClientRect: () => e.getBoundingClientRect(),
                    contextElement: e,
                  }
                : e;
              a(n), p.refs.setReference(n);
            },
            [p.refs],
          ),
          g = r.useCallback(
            (e) => {
              ((0, u.vq)(e) || null === e) && ((d.current = e), l(e)),
                ((0, u.vq)(p.refs.reference.current) ||
                  null === p.refs.reference.current ||
                  (null !== e && !(0, u.vq)(e))) &&
                  p.refs.setReference(e);
            },
            [p.refs],
          ),
          h = r.useMemo(
            () => ({
              ...p.refs,
              setReference: g,
              setPositionReference: m,
              domReference: d,
            }),
            [p.refs, g, m],
          ),
          y = r.useMemo(
            () => ({ ...p.elements, domReference: f }),
            [p.elements, f],
          ),
          b = r.useMemo(
            () => ({ ...p, ...o, refs: h, elements: y, nodeId: n }),
            [p, h, y, n, o],
          );
        return (
          se(() => {
            o.dataRef.current.floatingContext = b;
            const e =
              null == v ? void 0 : v.nodesRef.current.find((e) => e.id === n);
            e && (e.context = b);
          }),
          r.useMemo(
            () => ({ ...p, context: b, refs: h, elements: y }),
            [p, h, y, b],
          )
        );
      }
      const dn = "active",
        vn = "selected";
      function pn(e, n, t) {
        const r = new Map(),
          o = "item" === t;
        let u = e;
        if (o && e) {
          const { [dn]: n, [vn]: t, ...r } = e;
          u = r;
        }
        return {
          ...("floating" === t && { tabIndex: -1, [Xe]: "" }),
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
                      var i;
                      (o && [dn, vn].includes(t)) ||
                        (0 === t.indexOf("on")
                          ? (r.has(t) || r.set(t, []),
                            "function" == typeof u &&
                              (null == (i = r.get(t)) || i.push(u),
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
      function mn(e) {
        void 0 === e && (e = []);
        const n = e.map((e) => (null == e ? void 0 : e.reference)),
          t = e.map((e) => (null == e ? void 0 : e.floating)),
          o = e.map((e) => (null == e ? void 0 : e.item)),
          u = r.useCallback((n) => pn(n, e, "reference"), n),
          i = r.useCallback((n) => pn(n, e, "floating"), t),
          c = r.useCallback((n) => pn(n, e, "item"), o);
        return r.useMemo(
          () => ({
            getReferenceProps: u,
            getFloatingProps: i,
            getItemProps: c,
          }),
          [u, i, c],
        );
      }
      const gn = "Escape";
      function hn(e, n, t) {
        switch (e) {
          case "vertical":
            return n;
          case "horizontal":
            return t;
          default:
            return n || t;
        }
      }
      function yn(e, n) {
        return hn(n, e === X || e === G, e === J || e === Q);
      }
      function bn(e, n, t) {
        return (
          hn(n, e === G, t ? e === J : e === Q) ||
          "Enter" === e ||
          " " === e ||
          "" === e
        );
      }
      function wn(e, n, t) {
        return hn(n, t ? e === J : e === Q, e === G);
      }
      function En(e, n, t, r) {
        return "both" === n || ("horizontal" === n && r && r > 1)
          ? e === gn
          : hn(n, t ? e === Q : e === J, e === X);
      }
      function Rn(e, n) {
        const { open: t, onOpenChange: o, elements: l } = e,
          {
            listRef: s,
            activeIndex: d,
            onNavigate: v = () => {},
            enabled: m = !0,
            selectedIndex: g = null,
            allowEscape: h = !1,
            loop: y = !1,
            nested: E = !1,
            rtl: R = !1,
            virtual: x = !1,
            focusItemOnOpen: k = "auto",
            focusItemOnHover: I = !0,
            openOnArrowKeyDown: S = !0,
            disabledIndices: M,
            orientation: C = "vertical",
            cols: O = 1,
            scrollItemIntoView: A = !0,
            virtualItemRef: N,
            itemSizes: T,
            dense: P = !1,
          } = n;
        const L = Me(Ge(l.floating)),
          D = xe(),
          q = ke();
        se(() => {
          e.dataRef.current.orientation = C;
        }, [e, C]);
        const K = $(() => {
            v(-1 === U.current ? null : U.current);
          }),
          F = w(l.domReference),
          j = r.useRef(k),
          U = r.useRef(null != g ? g : -1),
          _ = r.useRef(null),
          W = r.useRef(!0),
          B = r.useRef(K),
          H = r.useRef(!!l.floating),
          V = r.useRef(t),
          z = r.useRef(!1),
          Y = r.useRef(!1),
          X = Me(M),
          Z = Me(t),
          ae = Me(A),
          fe = Me(g),
          [de, ve] = r.useState(),
          [pe, me] = r.useState(),
          ge = $(() => {
            function e(e) {
              x
                ? (ve(e.id),
                  null == q || q.events.emit("virtualfocus", e),
                  N && (N.current = e))
                : Oe(e, { sync: z.current, preventScroll: !0 });
            }
            const n = s.current[U.current];
            n && e(n);
            (z.current ? (e) => e() : requestAnimationFrame)(() => {
              const t = s.current[U.current] || n;
              if (!t) return;
              n || e(t);
              const r = ae.current;
              r &&
                ye &&
                (Y.current || !W.current) &&
                (null == t.scrollIntoView ||
                  t.scrollIntoView(
                    "boolean" == typeof r
                      ? { block: "nearest", inline: "nearest" }
                      : r,
                  ));
            });
          });
        se(() => {
          m &&
            (t && l.floating
              ? j.current &&
                null != g &&
                ((Y.current = !0), (U.current = g), K())
              : H.current && ((U.current = -1), B.current()));
        }, [m, t, l.floating, g, K]),
          se(() => {
            if (m && t && l.floating)
              if (null == d) {
                if (((z.current = !1), null != fe.current)) return;
                if (
                  (H.current && ((U.current = -1), ge()),
                  (!V.current || !H.current) &&
                    j.current &&
                    (null != _.current ||
                      (!0 === j.current && null == _.current)))
                ) {
                  let e = 0;
                  const n = () => {
                    if (null == s.current[0]) {
                      if (e < 2) {
                        (e ? requestAnimationFrame : queueMicrotask)(n);
                      }
                      e++;
                    } else
                      (U.current =
                        null == _.current || bn(_.current, C, R) || E
                          ? ne(s, X.current)
                          : te(s, X.current)),
                        (_.current = null),
                        K();
                  };
                  n();
                }
              } else ee(s, d) || ((U.current = d), ge(), (Y.current = !1));
          }, [m, t, l.floating, d, fe, E, s, C, R, K, ge, X]),
          se(() => {
            var e;
            if (!m || l.floating || !q || x || !H.current) return;
            const n = q.nodesRef.current,
              t =
                null == (e = n.find((e) => e.id === D)) ||
                null == (e = e.context)
                  ? void 0
                  : e.elements.floating,
              r = i(p(l.floating)),
              o = n.some((e) => e.context && c(e.context.elements.floating, r));
            t && !o && W.current && t.focus({ preventScroll: !0 });
          }, [m, l.floating, q, D, x]),
          se(() => {
            if (m && q && x && !D)
              return (
                q.events.on("virtualfocus", e),
                () => {
                  q.events.off("virtualfocus", e);
                }
              );
            function e(e) {
              me(e.id), N && (N.current = e);
            }
          }, [m, q, x, D, N]),
          se(() => {
            (B.current = K), (V.current = t), (H.current = !!l.floating);
          }),
          se(() => {
            t || (_.current = null);
          }, [t]);
        const he = null != d,
          ye = r.useMemo(() => {
            function e(e) {
              if (!t) return;
              const n = s.current.indexOf(e);
              -1 !== n && U.current !== n && ((U.current = n), K());
            }
            return {
              onFocus(n) {
                let { currentTarget: t } = n;
                (z.current = !0), e(t);
              },
              onClick: (e) => {
                let { currentTarget: n } = e;
                return n.focus({ preventScroll: !0 });
              },
              ...(I && {
                onMouseMove(n) {
                  let { currentTarget: t } = n;
                  (z.current = !0), (Y.current = !1), e(t);
                },
                onPointerLeave(e) {
                  let { pointerType: n } = e;
                  var t;
                  W.current &&
                    "touch" !== n &&
                    ((z.current = !0),
                    (U.current = -1),
                    K(),
                    x ||
                      null == (t = L.current) ||
                      t.focus({ preventScroll: !0 }));
                },
              }),
            };
          }, [t, L, I, s, K, x]),
          be = $((e) => {
            if (((W.current = !1), (z.current = !0), 229 === e.which)) return;
            if (!Z.current && e.currentTarget === L.current) return;
            if (E && En(e.key, C, R, O))
              return (
                b(e),
                o(!1, e.nativeEvent, "list-navigation"),
                void (
                  (0, u.sb)(l.domReference) &&
                  (x
                    ? null == q || q.events.emit("virtualfocus", l.domReference)
                    : l.domReference.focus())
                )
              );
            const n = U.current,
              r = ne(s, M),
              c = te(s, M);
            if (
              (F ||
                ("Home" === e.key && (b(e), (U.current = r), K()),
                "End" === e.key && (b(e), (U.current = c), K())),
              O > 1)
            ) {
              const n =
                  T ||
                  Array.from({ length: s.current.length }, () => ({
                    width: 1,
                    height: 1,
                  })),
                t = ue(n, O, P),
                o = t.findIndex((e) => null != e && !le(s.current, e, M)),
                u = t.reduce(
                  (e, n, t) => (null == n || le(s.current, n, M) ? e : t),
                  -1,
                ),
                i =
                  t[
                    oe(
                      {
                        current: t.map((e) =>
                          null != e ? s.current[e] : null,
                        ),
                      },
                      {
                        event: e,
                        orientation: C,
                        loop: y,
                        rtl: R,
                        cols: O,
                        disabledIndices: ce(
                          [
                            ...(M ||
                              s.current.map((e, n) =>
                                le(s.current, n) ? n : void 0,
                              )),
                            void 0,
                          ],
                          t,
                        ),
                        minIndex: o,
                        maxIndex: u,
                        prevIndex: ie(
                          U.current > c ? r : U.current,
                          n,
                          t,
                          O,
                          e.key === G
                            ? "bl"
                            : e.key === (R ? J : Q)
                              ? "tr"
                              : "tl",
                        ),
                        stopEvent: !0,
                      },
                    )
                  ];
              if ((null != i && ((U.current = i), K()), "both" === C)) return;
            }
            if (yn(e.key, C)) {
              if (
                (b(e),
                t && !x && i(e.currentTarget.ownerDocument) === e.currentTarget)
              )
                return (U.current = bn(e.key, C, R) ? r : c), void K();
              bn(e.key, C, R)
                ? (U.current = y
                    ? n >= c
                      ? h && n !== s.current.length
                        ? -1
                        : r
                      : re(s, { startingIndex: n, disabledIndices: M })
                    : Math.min(
                        c,
                        re(s, { startingIndex: n, disabledIndices: M }),
                      ))
                : (U.current = y
                    ? n <= r
                      ? h && -1 !== n
                        ? s.current.length
                        : c
                      : re(s, {
                          startingIndex: n,
                          decrement: !0,
                          disabledIndices: M,
                        })
                    : Math.max(
                        r,
                        re(s, {
                          startingIndex: n,
                          decrement: !0,
                          disabledIndices: M,
                        }),
                      )),
                ee(s, U.current) && (U.current = -1),
                K();
            }
          }),
          we = r.useMemo(
            () => x && t && he && { "aria-activedescendant": pe || de },
            [x, t, he, pe, de],
          ),
          Ee = r.useMemo(
            () => ({
              "aria-orientation": "both" === C ? void 0 : C,
              ...(F ? {} : we),
              onKeyDown: be,
              onPointerMove() {
                W.current = !0;
              },
            }),
            [we, be, C, F],
          ),
          Re = r.useMemo(() => {
            function e(e) {
              "auto" === k && a(e.nativeEvent) && (j.current = !0);
            }
            function n(e) {
              (j.current = k),
                "auto" === k && f(e.nativeEvent) && (j.current = !0);
            }
            return {
              ...we,
              onKeyDown(e) {
                var n;
                W.current = !1;
                const r = e.key.startsWith("Arrow"),
                  u = ["Home", "End"].includes(e.key),
                  i = r || u,
                  c =
                    null == q ||
                    null == (n = q.nodesRef.current.find((e) => e.id === D)) ||
                    null == (n = n.context) ||
                    null == (n = n.dataRef)
                      ? void 0
                      : n.current.orientation,
                  l = wn(e.key, C, R),
                  a = En(e.key, C, R, O),
                  f = wn(e.key, c, R),
                  d = yn(e.key, C),
                  v = (E ? f : d) || "Enter" === e.key || "" === e.key.trim();
                if (x && t) {
                  const n =
                      null == q
                        ? void 0
                        : q.nodesRef.current.find((e) => null == e.parentId),
                    t =
                      q && n
                        ? (function (e, n) {
                            let t,
                              r = -1;
                            return (
                              (function n(o, u) {
                                u > r && ((t = o), (r = u)),
                                  Ne(e, o).forEach((e) => {
                                    n(e.id, u + 1);
                                  });
                              })(n, 0),
                              e.find((e) => e.id === t)
                            );
                          })(q.nodesRef.current, n.id)
                        : null;
                  if (i && t && N) {
                    const n = new KeyboardEvent("keydown", {
                      key: e.key,
                      bubbles: !0,
                    });
                    if (l || a) {
                      var p, m;
                      const r =
                          (null == (p = t.context)
                            ? void 0
                            : p.elements.domReference) === e.currentTarget,
                        o =
                          a && !r
                            ? null == (m = t.context)
                              ? void 0
                              : m.elements.domReference
                            : l
                              ? s.current.find(
                                  (e) => (null == e ? void 0 : e.id) === de,
                                )
                              : null;
                      o && (b(e), o.dispatchEvent(n), me(void 0));
                    }
                    var h;
                    if ((d || u) && t.context)
                      if (
                        t.context.open &&
                        t.parentId &&
                        e.currentTarget !== t.context.elements.domReference
                      )
                        return (
                          b(e),
                          void (
                            null == (h = t.context.elements.domReference) ||
                            h.dispatchEvent(n)
                          )
                        );
                  }
                  return be(e);
                }
                if (t || S || !r) {
                  if (v) {
                    const n = yn(e.key, c);
                    _.current = E && n ? null : e.key;
                  }
                  E
                    ? f &&
                      (b(e),
                      t
                        ? ((U.current = ne(s, X.current)), K())
                        : o(!0, e.nativeEvent, "list-navigation"))
                    : d &&
                      (null != g && (U.current = g),
                      b(e),
                      !t && S ? o(!0, e.nativeEvent, "list-navigation") : be(e),
                      t && K());
                }
              },
              onFocus() {
                t && !x && ((U.current = -1), K());
              },
              onPointerDown: n,
              onPointerEnter: n,
              onMouseDown: e,
              onClick: e,
            };
          }, [de, we, O, be, X, k, s, E, K, o, t, S, C, D, R, g, q, x, N]);
        return r.useMemo(
          () => (m ? { reference: Re, floating: Ee, item: ye } : {}),
          [m, Re, Ee, ye],
        );
      }
      const xn = new Map([
        ["select", "listbox"],
        ["combobox", "listbox"],
        ["label", !1],
      ]);
      function kn(e, n) {
        var t;
        void 0 === n && (n = {});
        const { open: o, floatingId: u } = e,
          { enabled: i = !0, role: c = "dialog" } = n,
          l = null != (t = xn.get(c)) ? t : c,
          s = be(),
          a = null != xe(),
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
              let { active: n, selected: t } = e;
              const r = { role: "option", ...(n && { id: u + "-option" }) };
              switch (c) {
                case "select":
                  return { ...r, "aria-selected": n && t };
                case "combobox":
                  return { ...r, ...(n && { "aria-selected": !0 }) };
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
      function In(e, n) {
        var t;
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
            selectedIndex: p = null,
          } = n,
          m = r.useRef(-1),
          g = r.useRef(""),
          h = r.useRef(null != (t = null != p ? p : c) ? t : -1),
          y = r.useRef(null),
          w = $(l),
          E = $(s),
          R = Me(f),
          x = Me(v);
        se(() => {
          o && (Se(m), (y.current = null), (g.current = ""));
        }, [o]),
          se(() => {
            var e;
            o &&
              "" === g.current &&
              (h.current = null != (e = null != p ? p : c) ? e : -1);
          }, [o, p, c]);
        const k = $((e) => {
            e
              ? u.current.typing || ((u.current.typing = e), E(e))
              : u.current.typing && ((u.current.typing = e), E(e));
          }),
          I = $((e) => {
            function n(e, n, t) {
              const r = R.current
                ? R.current(n, t)
                : n.find(
                    (e) =>
                      0 ===
                      (null == e
                        ? void 0
                        : e.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())),
                  );
              return r ? e.indexOf(r) : -1;
            }
            const t = i.current;
            if (
              (g.current.length > 0 &&
                " " !== g.current[0] &&
                (-1 === n(t, t, g.current) ? k(!1) : " " === e.key && b(e)),
              null == t ||
                x.current.includes(e.key) ||
                1 !== e.key.length ||
                e.ctrlKey ||
                e.metaKey ||
                e.altKey)
            )
              return;
            o && " " !== e.key && (b(e), k(!0));
            t.every((e) => {
              var n, t;
              return (
                !e ||
                (null == (n = e[0]) ? void 0 : n.toLocaleLowerCase()) !==
                  (null == (t = e[1]) ? void 0 : t.toLocaleLowerCase())
              );
            }) &&
              g.current === e.key &&
              ((g.current = ""), (h.current = y.current)),
              (g.current += e.key),
              Se(m),
              (m.current = window.setTimeout(() => {
                (g.current = ""), (h.current = y.current), k(!1);
              }, d));
            const r = h.current,
              u = n(
                t,
                [...t.slice((r || 0) + 1), ...t.slice(0, (r || 0) + 1)],
                g.current,
              );
            -1 !== u
              ? (w(u), (y.current = u))
              : " " !== e.key && ((g.current = ""), k(!1));
          }),
          S = r.useMemo(() => ({ onKeyDown: I }), [I]),
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
          () => (a ? { reference: S, floating: M } : {}),
          [a, S, M],
        );
      }
    },
  },
]);
