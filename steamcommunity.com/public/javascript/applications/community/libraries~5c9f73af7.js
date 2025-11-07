/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3359],
  {
    94621: (e, t, n) => {
      n.d(t, {
        BN: () => m,
        Ej: () => p,
        UU: () => v,
        cY: () => h,
        we: () => f,
      });
      var r = n(28505),
        o = n(33559),
        i = n(90626),
        s = n(72739),
        u = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;
      function l(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; 0 != r--; ) if (!l(e[r], t[r])) return !1;
            return !0;
          }
          if (
            ((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)
          )
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            const n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !l(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function c(e) {
        if ("undefined" == typeof window) return 1;
        return (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function a(e, t) {
        const n = c(e);
        return Math.round(t * n) / n;
      }
      function d(e) {
        const t = i.useRef(e);
        return (
          u(() => {
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
            middleware: o = [],
            platform: f,
            elements: { reference: h, floating: m } = {},
            transform: v = !0,
            whileElementsMounted: p,
            open: g,
          } = e,
          [b, y] = i.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
          }),
          [w, E] = i.useState(o);
        l(w, o) || E(o);
        const [x, R] = i.useState(null),
          [I, S] = i.useState(null),
          M = i.useCallback((e) => {
            e !== T.current && ((T.current = e), R(e));
          }, []),
          k = i.useCallback((e) => {
            e !== A.current && ((A.current = e), S(e));
          }, []),
          C = h || x,
          O = m || I,
          T = i.useRef(null),
          A = i.useRef(null),
          D = i.useRef(b),
          L = null != p,
          N = d(p),
          P = d(f),
          z = d(g),
          F = i.useCallback(() => {
            if (!T.current || !A.current) return;
            const e = { placement: t, strategy: n, middleware: w };
            P.current && (e.platform = P.current),
              (0, r.rD)(T.current, A.current, e).then((e) => {
                const t = { ...e, isPositioned: !1 !== z.current };
                j.current &&
                  !l(D.current, t) &&
                  ((D.current = t),
                  s.flushSync(() => {
                    y(t);
                  }));
              });
          }, [w, t, n, P, z]);
        u(() => {
          !1 === g &&
            D.current.isPositioned &&
            ((D.current.isPositioned = !1),
            y((e) => ({ ...e, isPositioned: !1 })));
        }, [g]);
        const j = i.useRef(!1);
        u(
          () => (
            (j.current = !0),
            () => {
              j.current = !1;
            }
          ),
          [],
        ),
          u(() => {
            if ((C && (T.current = C), O && (A.current = O), C && O)) {
              if (N.current) return N.current(C, O, F);
              F();
            }
          }, [C, O, F, N, L]);
        const _ = i.useMemo(
            () => ({
              reference: T,
              floating: A,
              setReference: M,
              setFloating: k,
            }),
            [M, k],
          ),
          K = i.useMemo(() => ({ reference: C, floating: O }), [C, O]),
          W = i.useMemo(() => {
            const e = { position: n, left: 0, top: 0 };
            if (!K.floating) return e;
            const t = a(K.floating, b.x),
              r = a(K.floating, b.y);
            return v
              ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...(c(K.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: n, left: t, top: r };
          }, [n, v, K.floating, b.x, b.y]);
        return i.useMemo(
          () => ({ ...b, update: F, refs: _, elements: K, floatingStyles: W }),
          [b, F, _, K, W],
        );
      }
      const h = (e, t) => ({ ...(0, o.cY)(e), options: [e, t] }),
        m = (e, t) => ({ ...(0, r.BN)(e), options: [e, t] }),
        v = (e, t) => ({ ...(0, r.UU)(e), options: [e, t] }),
        p = (e, t) => ({ ...(0, r.Ej)(e), options: [e, t] });
    },
    73788: (e, t, n) => {
      n.d(t, {
        s3: () => rt,
        ph: () => he,
        kp: () => st,
        s9: () => at,
        we: () => dt,
        iQ: () => ft,
        bv: () => pt,
        rm: () => me,
        C1: () => Rt,
        SV: () => V,
        It: () => St,
        lY: () => Mt,
      });
      var r = n(90626),
        o = n.t(r, 2),
        i = n(977);
      function s(e) {
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
      function u(e, t) {
        if (!e || !t) return !1;
        const n = null == t.getRootNode ? void 0 : t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && (0, i.Ng)(n)) {
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
      function c() {
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
          (h() && e.pointerType
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)
        );
      }
      function d(e) {
        return (
          !c().includes("jsdom/") &&
          ((!h() && 0 === e.width && 0 === e.height) ||
            (h() &&
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
      function f() {
        return /apple/i.test(navigator.vendor);
      }
      function h() {
        const e = /android/i;
        return e.test(l()) || e.test(c());
      }
      function m(e, t) {
        const n = ["mouse", "pen"];
        return t || n.push("", void 0), n.includes(e);
      }
      function v(e) {
        return (null == e ? void 0 : e.ownerDocument) || document;
      }
      function p(e, t) {
        if (null == t) return !1;
        if ("composedPath" in e) return e.composedPath().includes(t);
        const n = e;
        return null != n.target && t.contains(n.target);
      }
      function g(e) {
        return "composedPath" in e ? e.composedPath()[0] : e.target;
      }
      const b =
        "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
      function y(e) {
        return (0, i.sb)(e) && e.matches(b);
      }
      function w(e) {
        e.preventDefault(), e.stopPropagation();
      }
      function E(e) {
        return !!e && "combobox" === e.getAttribute("role") && y(e);
      }
      var x = n(58015),
        R = n(7850),
        I = [
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
        S = I.join(","),
        M = "undefined" == typeof Element,
        k = M
          ? function () {}
          : Element.prototype.matches ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector,
        C =
          !M && Element.prototype.getRootNode
            ? function (e) {
                var t;
                return null == e || null === (t = e.getRootNode) || void 0 === t
                  ? void 0
                  : t.call(e);
              }
            : function (e) {
                return null == e ? void 0 : e.ownerDocument;
              },
        O = function e(t, n) {
          var r;
          void 0 === n && (n = !0);
          var o =
            null == t || null === (r = t.getAttribute) || void 0 === r
              ? void 0
              : r.call(t, "inert");
          return "" === o || "true" === o || (n && t && e(t.parentNode));
        },
        T = function (e, t, n) {
          if (O(e)) return [];
          var r = Array.prototype.slice.apply(e.querySelectorAll(S));
          return t && k.call(e, S) && r.unshift(e), (r = r.filter(n));
        },
        A = function e(t, n, r) {
          for (var o = [], i = Array.from(t); i.length; ) {
            var s = i.shift();
            if (!O(s, !1))
              if ("SLOT" === s.tagName) {
                var u = s.assignedElements(),
                  l = e(u.length ? u : s.children, !0, r);
                r.flatten
                  ? o.push.apply(o, l)
                  : o.push({ scopeParent: s, candidates: l });
              } else {
                k.call(s, S) &&
                  r.filter(s) &&
                  (n || !t.includes(s)) &&
                  o.push(s);
                var c =
                    s.shadowRoot ||
                    ("function" == typeof r.getShadowRoot &&
                      r.getShadowRoot(s)),
                  a =
                    !O(c, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
                if (c && a) {
                  var d = e(!0 === c ? s.children : c.children, !0, r);
                  r.flatten
                    ? o.push.apply(o, d)
                    : o.push({ scopeParent: s, candidates: d });
                } else i.unshift.apply(i, s.children);
              }
          }
          return o;
        },
        D = function (e) {
          return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
        },
        L = function (e) {
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
            !D(e)
            ? 0
            : e.tabIndex;
        },
        N = function (e, t) {
          return e.tabIndex === t.tabIndex
            ? e.documentOrder - t.documentOrder
            : e.tabIndex - t.tabIndex;
        },
        P = function (e) {
          return "INPUT" === e.tagName;
        },
        z = function (e) {
          return (
            (function (e) {
              return P(e) && "radio" === e.type;
            })(e) &&
            !(function (e) {
              if (!e.name) return !0;
              var t,
                n = e.form || C(e),
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
        j = function (e, t) {
          var n = t.displayCheck,
            r = t.getShadowRoot;
          if ("hidden" === getComputedStyle(e).visibility) return !0;
          var o = k.call(e, "details>summary:first-of-type")
            ? e.parentElement
            : e;
          if (k.call(o, "details:not([open]) *")) return !0;
          if (n && "full" !== n && "legacy-full" !== n) {
            if ("non-zero-area" === n) return F(e);
          } else {
            if ("function" == typeof r) {
              for (var i = e; e; ) {
                var s = e.parentElement,
                  u = C(e);
                if (s && !s.shadowRoot && !0 === r(s)) return F(e);
                e = e.assignedSlot
                  ? e.assignedSlot
                  : s || u === e.ownerDocument
                    ? s
                    : u.host;
              }
              e = i;
            }
            if (
              (function (e) {
                var t,
                  n,
                  r,
                  o,
                  i = e && C(e),
                  s = null === (t = i) || void 0 === t ? void 0 : t.host,
                  u = !1;
                if (i && i !== e)
                  for (
                    u = !!(
                      (null !== (n = s) &&
                        void 0 !== n &&
                        null !== (r = n.ownerDocument) &&
                        void 0 !== r &&
                        r.contains(s)) ||
                      (null != e &&
                        null !== (o = e.ownerDocument) &&
                        void 0 !== o &&
                        o.contains(e))
                    );
                    !u && s;
                  ) {
                    var l, c, a;
                    u = !(
                      null ===
                        (c = s =
                          null === (l = i = C(s)) || void 0 === l
                            ? void 0
                            : l.host) ||
                      void 0 === c ||
                      null === (a = c.ownerDocument) ||
                      void 0 === a ||
                      !a.contains(s)
                    );
                  }
                return u;
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
            O(t) ||
            (function (e) {
              return P(e) && "hidden" === e.type;
            })(t) ||
            j(t, e) ||
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
                          !!k.call(t, "fieldset[disabled] *") || !r.contains(e)
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
        K = function (e, t) {
          return !(z(t) || L(t) < 0 || !_(e, t));
        },
        W = function (e) {
          var t = parseInt(e.getAttribute("tabindex"), 10);
          return !!(isNaN(t) || t >= 0);
        },
        q = function e(t) {
          var n = [],
            r = [];
          return (
            t.forEach(function (t, o) {
              var i = !!t.scopeParent,
                s = i ? t.scopeParent : t,
                u = (function (e, t) {
                  var n = L(e);
                  return n < 0 && t && !D(e) ? 0 : n;
                })(s, i),
                l = i ? e(t.candidates) : s;
              0 === u
                ? i
                  ? n.push.apply(n, l)
                  : n.push(s)
                : r.push({
                    documentOrder: o,
                    tabIndex: u,
                    item: t,
                    isScope: i,
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
        B = function (e, t) {
          var n;
          return (
            (n = (t = t || {}).getShadowRoot
              ? A([e], t.includeContainer, {
                  filter: K.bind(null, t),
                  flatten: !1,
                  getShadowRoot: t.getShadowRoot,
                  shadowRootFilter: W,
                })
              : T(e, t.includeContainer, K.bind(null, t))),
            q(n)
          );
        },
        U = function (e, t) {
          if (((t = t || {}), !e)) throw new Error("No node provided");
          return !1 !== k.call(e, S) && K(t, e);
        },
        H = (n(72739), n(94621));
      function V(e) {
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
      const $ = { ...o },
        Y = $.useInsertionEffect || ((e) => e());
      function X(e) {
        const t = r.useRef(() => {
          0;
        });
        return (
          Y(() => {
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
          amount: i = 1,
        } = void 0 === t ? {} : t;
        const s = e.current;
        let u = n;
        do {
          u += r ? -i : i;
        } while (u >= 0 && u <= s.length - 1 && ce(s, u, o));
        return u;
      }
      function ie(e, t) {
        let {
            event: n,
            orientation: r,
            loop: o,
            rtl: i,
            cols: s,
            disabledIndices: u,
            minIndex: l,
            maxIndex: c,
            prevIndex: a,
            stopEvent: d = !1,
          } = t,
          f = a;
        if (n.key === G) {
          if ((d && w(n), -1 === a)) f = c;
          else if (
            ((f = oe(e, {
              startingIndex: f,
              amount: s,
              decrement: !0,
              disabledIndices: u,
            })),
            o && (a - s < l || f < 0))
          ) {
            const e = a % s,
              t = c % s,
              n = c - (t - e);
            f = t === e ? c : t > e ? n : n - s;
          }
          te(e, f) && (f = a);
        }
        if (
          (n.key === Q &&
            (d && w(n),
            -1 === a
              ? (f = l)
              : ((f = oe(e, {
                  startingIndex: a,
                  amount: s,
                  disabledIndices: u,
                })),
                o &&
                  a + s > c &&
                  (f = oe(e, {
                    startingIndex: (a % s) - s,
                    amount: s,
                    disabledIndices: u,
                  }))),
            te(e, f) && (f = a)),
          "both" === r)
        ) {
          const t = (0, x.RI)(a / s);
          n.key === (i ? J : Z) &&
            (d && w(n),
            a % s != s - 1
              ? ((f = oe(e, { startingIndex: a, disabledIndices: u })),
                o &&
                  ee(f, s, t) &&
                  (f = oe(e, {
                    startingIndex: a - (a % s) - 1,
                    disabledIndices: u,
                  })))
              : o &&
                (f = oe(e, {
                  startingIndex: a - (a % s) - 1,
                  disabledIndices: u,
                })),
            ee(f, s, t) && (f = a)),
            n.key === (i ? Z : J) &&
              (d && w(n),
              a % s != 0
                ? ((f = oe(e, {
                    startingIndex: a,
                    decrement: !0,
                    disabledIndices: u,
                  })),
                  o &&
                    ee(f, s, t) &&
                    (f = oe(e, {
                      startingIndex: a + (s - (a % s)),
                      decrement: !0,
                      disabledIndices: u,
                    })))
                : o &&
                  (f = oe(e, {
                    startingIndex: a + (s - (a % s)),
                    decrement: !0,
                    disabledIndices: u,
                  })),
              ee(f, s, t) && (f = a));
          const r = (0, x.RI)(c / s) === t;
          te(e, f) &&
            (f =
              o && r
                ? n.key === (i ? Z : J)
                  ? c
                  : oe(e, {
                      startingIndex: a - (a % s) - 1,
                      disabledIndices: u,
                    })
                : a);
        }
        return f;
      }
      function se(e, t, n) {
        const r = [];
        let o = 0;
        return (
          e.forEach((e, i) => {
            let { width: s, height: u } = e,
              l = !1;
            for (n && (o = 0); !l; ) {
              const e = [];
              for (let n = 0; n < s; n++)
                for (let r = 0; r < u; r++) e.push(o + n + r * t);
              (o % t) + s <= t && e.every((e) => null == r[e])
                ? (e.forEach((e) => {
                    r[e] = i;
                  }),
                  (l = !0))
                : o++;
            }
          }),
          [...r]
        );
      }
      function ue(e, t, n, r, o) {
        if (-1 === e) return -1;
        const i = n.indexOf(e),
          s = t[e];
        switch (o) {
          case "tl":
            return i;
          case "tr":
            return s ? i + s.width - 1 : i;
          case "bl":
            return s ? i + (s.height - 1) * r : i;
          case "br":
            return n.lastIndexOf(e);
        }
      }
      function le(e, t) {
        return t.flatMap((t, n) => (e.includes(t) ? [n] : []));
      }
      function ce(e, t, n) {
        if (n) return n.includes(t);
        const r = e[t];
        return (
          null == r ||
          r.hasAttribute("disabled") ||
          "true" === r.getAttribute("aria-disabled")
        );
      }
      var ae = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function de(e, t) {
        const n = e.compareDocumentPosition(t);
        return n & Node.DOCUMENT_POSITION_FOLLOWING ||
          n & Node.DOCUMENT_POSITION_CONTAINED_BY
          ? -1
          : n & Node.DOCUMENT_POSITION_PRECEDING ||
              n & Node.DOCUMENT_POSITION_CONTAINS
            ? 1
            : 0;
      }
      const fe = r.createContext({
        register: () => {},
        unregister: () => {},
        map: new Map(),
        elementsRef: { current: [] },
      });
      function he(e) {
        const { children: t, elementsRef: n, labelsRef: o } = e,
          [i, s] = r.useState(() => new Set()),
          u = r.useCallback((e) => {
            s((t) => new Set(t).add(e));
          }, []),
          l = r.useCallback((e) => {
            s((t) => {
              const n = new Set(t);
              return n.delete(e), n;
            });
          }, []),
          c = r.useMemo(() => {
            const e = new Map();
            return (
              Array.from(i.keys())
                .sort(de)
                .forEach((t, n) => {
                  e.set(t, n);
                }),
              e
            );
          }, [i]);
        return (0, R.jsx)(fe.Provider, {
          value: r.useMemo(
            () => ({
              register: u,
              unregister: l,
              map: c,
              elementsRef: n,
              labelsRef: o,
            }),
            [u, l, c, n, o],
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
            map: i,
            elementsRef: s,
            labelsRef: u,
          } = r.useContext(fe),
          [l, c] = r.useState(null),
          a = r.useRef(null),
          d = r.useCallback(
            (e) => {
              if (((a.current = e), null !== l && ((s.current[l] = e), u))) {
                var n;
                const r = void 0 !== t;
                u.current[l] = r
                  ? t
                  : null != (n = null == e ? void 0 : e.textContent)
                    ? n
                    : null;
              }
            },
            [l, s, u, t],
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
            const e = a.current ? i.get(a.current) : null;
            null != e && c(e);
          }, [i]),
          r.useMemo(() => ({ ref: d, index: null == l ? -1 : l }), [l, d])
        );
      }
      const ve = [J, Z],
        pe = [G, Q];
      let ge = !1,
        be = 0;
      const ye = () =>
        "floating-ui-" + Math.random().toString(36).slice(2, 6) + be++;
      const we =
        $.useId ||
        function () {
          const [e, t] = r.useState(() => (ge ? ye() : void 0));
          return (
            ae(() => {
              null == e && t(ye());
            }, []),
            r.useEffect(() => {
              ge = !0;
            }, []),
            e
          );
        };
      function Ee() {
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
      const xe = r.createContext(null),
        Re = r.createContext(null),
        Ie = () => {
          var e;
          return (null == (e = r.useContext(xe)) ? void 0 : e.id) || null;
        },
        Se = () => r.useContext(Re);
      function Me(e) {
        return "data-floating-ui-" + e;
      }
      function ke(e) {
        -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
      }
      function Ce(e) {
        const t = (0, r.useRef)(e);
        return (
          ae(() => {
            t.current = e;
          }),
          t
        );
      }
      let Oe = 0;
      function Te(e, t) {
        void 0 === t && (t = {});
        const {
          preventScroll: n = !1,
          cancelPrevious: r = !0,
          sync: o = !1,
        } = t;
        r && cancelAnimationFrame(Oe);
        const i = () => (null == e ? void 0 : e.focus({ preventScroll: n }));
        o ? i() : (Oe = requestAnimationFrame(i));
      }
      function Ae(e, t) {
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
      let Le = new WeakMap(),
        Ne = new WeakSet(),
        Pe = {},
        ze = 0;
      const Fe = () =>
          "undefined" != typeof HTMLElement && "inert" in HTMLElement.prototype,
        je = (e) => e && (e.host || je(e.parentNode)),
        _e = (e, t) =>
          t
            .map((t) => {
              if (e.contains(t)) return t;
              const n = je(t);
              return e.contains(n) ? n : null;
            })
            .filter((e) => null != e);
      function Ke(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const r = v(e[0]).body;
        return (function (e, t, n, r) {
          const o = "data-floating-ui-inert",
            s = r ? "inert" : n ? "aria-hidden" : null,
            u = _e(t, e),
            l = new Set(),
            c = new Set(u),
            a = [];
          Pe[o] || (Pe[o] = new WeakMap());
          const d = Pe[o];
          return (
            u.forEach(function e(t) {
              t && !l.has(t) && (l.add(t), t.parentNode && e(t.parentNode));
            }),
            (function e(t) {
              t &&
                !c.has(t) &&
                [].forEach.call(t.children, (t) => {
                  if ("script" !== (0, i.mq)(t))
                    if (l.has(t)) e(t);
                    else {
                      const e = s ? t.getAttribute(s) : null,
                        n = null !== e && "false" !== e,
                        r = Le.get(t) || 0,
                        i = s ? r + 1 : r,
                        u = (d.get(t) || 0) + 1;
                      Le.set(t, i),
                        d.set(t, u),
                        a.push(t),
                        1 === i && n && Ne.add(t),
                        1 === u && t.setAttribute(o, ""),
                        !n && s && t.setAttribute(s, "true");
                    }
                });
            })(t),
            l.clear(),
            ze++,
            () => {
              a.forEach((e) => {
                const t = Le.get(e) || 0,
                  n = s ? t - 1 : t,
                  r = (d.get(e) || 0) - 1;
                Le.set(e, n),
                  d.set(e, r),
                  n || (!Ne.has(e) && s && e.removeAttribute(s), Ne.delete(e)),
                  r || e.removeAttribute(o);
              }),
                ze--,
                ze ||
                  ((Le = new WeakMap()),
                  (Le = new WeakMap()),
                  (Ne = new WeakSet()),
                  (Pe = {}));
            }
          );
        })(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n);
      }
      const We = () => ({
        getShadowRoot: !0,
        displayCheck:
          "function" == typeof ResizeObserver &&
          ResizeObserver.toString().includes("[native code]")
            ? "full"
            : "none",
      });
      function qe(e, t) {
        const n = B(e, We());
        "prev" === t && n.reverse();
        const r = n.indexOf(s(v(e)));
        return n.slice(r + 1)[0];
      }
      function Be() {
        return qe(document.body, "next");
      }
      function Ue() {
        return qe(document.body, "prev");
      }
      function He(e, t) {
        const n = t || e.currentTarget,
          r = e.relatedTarget;
        return !r || !u(n, r);
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
        $e = r.forwardRef(function (e, t) {
          const [n, o] = r.useState();
          ae(() => {
            f() && o("button");
          }, []);
          const i = {
            ref: t,
            tabIndex: 0,
            role: n,
            "aria-hidden": !n || void 0,
            [Me("focus-guard")]: "",
            style: Ve,
          };
          return (0, R.jsx)("span", { ...e, ...i });
        }),
        Ye = r.createContext(null);
      const Xe = () => r.useContext(Ye),
        Ge = "data-floating-ui-focusable";
      function Qe(e) {
        return e
          ? e.hasAttribute(Ge)
            ? e
            : e.querySelector("[" + Ge + "]") || e
          : null;
      }
      function Je(e) {
        return r.useMemo(
          () => (t) => {
            e.forEach((e) => {
              e && (e.current = t);
            });
          },
          e,
        );
      }
      const Ze = 20;
      let et = [];
      function tt() {
        return et
          .slice()
          .reverse()
          .find((e) => e.isConnected);
      }
      const nt = r.forwardRef(function (e, t) {
        return (0, R.jsx)("button", {
          ...e,
          type: "button",
          ref: t,
          tabIndex: -1,
          style: Ve,
        });
      });
      function rt(e) {
        const {
            context: t,
            children: n,
            disabled: o = !1,
            order: l = ["content"],
            guards: c = !0,
            initialFocus: f = 0,
            returnFocus: h = !0,
            restoreFocus: m = !1,
            modal: p = !0,
            visuallyHiddenDismiss: b = !1,
            closeOnFocusOut: y = !0,
            outsideElementsInert: x = !1,
          } = e,
          {
            open: I,
            onOpenChange: S,
            events: M,
            dataRef: k,
            elements: { domReference: C, floating: O },
          } = t,
          T = X(() => {
            var e;
            return null == (e = k.current.floatingContext) ? void 0 : e.nodeId;
          }),
          A = "number" == typeof f && f < 0,
          D = E(C) && A,
          L = Fe(),
          N = !L || c,
          P = !N || (L && x),
          z = Ce(l),
          F = Ce(f),
          j = Ce(h),
          _ = Se(),
          K = Xe(),
          W = r.useRef(null),
          q = r.useRef(null),
          H = r.useRef(!1),
          V = r.useRef(!1),
          $ = r.useRef(-1),
          Y = null != K,
          G = Qe(O),
          Q = X(function (e) {
            return void 0 === e && (e = G), e ? B(e, We()) : [];
          }),
          J = X((e) => {
            const t = Q(e);
            return z.current
              .map((e) =>
                C && "reference" === e ? C : G && "floating" === e ? G : t,
              )
              .filter(Boolean)
              .flat();
          });
        r.useEffect(() => {
          if (o) return;
          if (!p) return;
          function e(e) {
            if ("Tab" === e.key) {
              u(G, s(v(G))) && 0 === Q().length && !D && w(e);
              const t = J(),
                n = g(e);
              "reference" === z.current[0] &&
                n === C &&
                (w(e), e.shiftKey ? Te(t[t.length - 1]) : Te(t[1])),
                "floating" === z.current[1] &&
                  n === G &&
                  e.shiftKey &&
                  (w(e), Te(t[0]));
            }
          }
          const t = v(G);
          return (
            t.addEventListener("keydown", e),
            () => {
              t.removeEventListener("keydown", e);
            }
          );
        }, [o, C, G, p, z, D, Q, J]),
          r.useEffect(() => {
            if (!o && O)
              return (
                O.addEventListener("focusin", e),
                () => {
                  O.removeEventListener("focusin", e);
                }
              );
            function e(e) {
              const t = g(e),
                n = Q().indexOf(t);
              -1 !== n && ($.current = n);
            }
          }, [o, O, Q]),
          r.useEffect(() => {
            if (!o && y)
              return O && (0, i.sb)(C)
                ? (C.addEventListener("focusout", t),
                  C.addEventListener("pointerdown", e),
                  O.addEventListener("focusout", t),
                  () => {
                    C.removeEventListener("focusout", t),
                      C.removeEventListener("pointerdown", e),
                      O.removeEventListener("focusout", t);
                  })
                : void 0;
            function e() {
              (V.current = !0),
                setTimeout(() => {
                  V.current = !1;
                });
            }
            function t(e) {
              const t = e.relatedTarget;
              queueMicrotask(() => {
                const n = T(),
                  r = !(
                    u(C, t) ||
                    u(O, t) ||
                    u(t, O) ||
                    u(null == K ? void 0 : K.portalNode, t) ||
                    (null != t && t.hasAttribute(Me("focus-guard"))) ||
                    (_ &&
                      (De(_.nodesRef.current, n).find((e) => {
                        var n, r;
                        return (
                          u(
                            null == (n = e.context)
                              ? void 0
                              : n.elements.floating,
                            t,
                          ) ||
                          u(
                            null == (r = e.context)
                              ? void 0
                              : r.elements.domReference,
                            t,
                          )
                        );
                      }) ||
                        Ae(_.nodesRef.current, n).find((e) => {
                          var n, r, o;
                          return (
                            [
                              null == (n = e.context)
                                ? void 0
                                : n.elements.floating,
                              Qe(
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
                if (m && r && s(v(G)) === v(G).body) {
                  (0, i.sb)(G) && G.focus();
                  const e = $.current,
                    t = Q(),
                    n = t[e] || t[t.length - 1] || G;
                  (0, i.sb)(n) && n.focus();
                }
                (!D && p) ||
                  !t ||
                  !r ||
                  V.current ||
                  t === tt() ||
                  ((H.current = !0), S(!1, e, "focus-out"));
              });
            }
          }, [o, C, O, G, p, _, K, S, y, m, Q, D, T]);
        const Z = r.useRef(null),
          ee = r.useRef(null),
          te = Je([Z, null == K ? void 0 : K.beforeInsideRef]),
          ne = Je([ee, null == K ? void 0 : K.afterInsideRef]);
        function re(e) {
          return !o && b && p
            ? (0, R.jsx)(nt, {
                ref: "start" === e ? W : q,
                onClick: (e) => S(!1, e.nativeEvent),
                children: "string" == typeof b ? b : "Dismiss",
              })
            : null;
        }
        r.useEffect(() => {
          var e;
          if (o) return;
          if (!O) return;
          const t = Array.from(
              (null == K || null == (e = K.portalNode)
                ? void 0
                : e.querySelectorAll("[" + Me("portal") + "]")) || [],
            ),
            n =
              _ && !p
                ? Ae(null == _ ? void 0 : _.nodesRef.current, T()).map((e) => {
                    var t;
                    return null == (t = e.context)
                      ? void 0
                      : t.elements.floating;
                  })
                : [],
            r = [
              O,
              ...t,
              ...n,
              W.current,
              q.current,
              Z.current,
              ee.current,
              null == K ? void 0 : K.beforeOutsideRef.current,
              null == K ? void 0 : K.afterOutsideRef.current,
              z.current.includes("reference") || D ? C : null,
            ].filter((e) => null != e),
            i = p || D ? Ke(r, !P, P) : Ke(r);
          return () => {
            i();
          };
        }, [o, C, O, p, z, K, D, N, P, _, T]),
          ae(() => {
            if (o || !(0, i.sb)(G)) return;
            const e = s(v(G));
            queueMicrotask(() => {
              const t = J(G),
                n = F.current,
                r = ("number" == typeof n ? t[n] : n.current) || G,
                o = u(G, e);
              A || o || !I || Te(r, { preventScroll: r === G });
            });
          }, [o, I, G, A, J, F]),
          ae(() => {
            if (o || !G) return;
            let e = !1,
              t = !1;
            const n = v(G),
              r = s(n);
            let l = k.current.openEvent;
            var c;
            function f(n) {
              let { open: r, reason: o, event: i, nested: s } = n;
              if (
                (r && (l = i),
                "escape-key" === o && (t = !0),
                ["hover", "safe-polygon"].includes(o) &&
                  "mouseleave" === i.type &&
                  (H.current = !0),
                "outside-press" === o)
              )
                if (s) (H.current = !1), (e = !0);
                else if (a(i) || d(i)) H.current = !1;
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
            (c = r),
              (et = et.filter((e) => e.isConnected)),
              c &&
                "body" !== (0, i.mq)(c) &&
                (et.push(c), et.length > Ze && (et = et.slice(-Ze))),
              M.on("openchange", f);
            const h = n.createElement("span");
            return (
              h.setAttribute("tabindex", "-1"),
              h.setAttribute("aria-hidden", "true"),
              Object.assign(h.style, Ve),
              Y && C && C.insertAdjacentElement("afterend", h),
              () => {
                M.off("openchange", f);
                const r = s(n),
                  o =
                    u(O, r) ||
                    (_ &&
                      De(_.nodesRef.current, T()).some((e) => {
                        var t;
                        return u(
                          null == (t = e.context)
                            ? void 0
                            : t.elements.floating,
                          r,
                        );
                      }));
                (o || (l && ["click", "mousedown"].includes(l.type))) &&
                  (t = !0);
                const c =
                  "boolean" == typeof j.current
                    ? t && C
                      ? C
                      : tt() || h
                    : j.current.current || h;
                queueMicrotask(() => {
                  const t = (function (e) {
                    const t = We();
                    return U(e, t) ? e : B(e, t)[0] || e;
                  })(c);
                  j.current &&
                    !H.current &&
                    (0, i.sb)(t) &&
                    (t === r || r === n.body || o) &&
                    t.focus({ preventScroll: e }),
                    h.remove();
                });
              }
            );
          }, [o, O, G, j, k, M, _, Y, C, T]),
          r.useEffect(() => {
            queueMicrotask(() => {
              H.current = !1;
            });
          }, [o]),
          ae(() => {
            if (!o && K)
              return (
                K.setFocusManagerState({
                  modal: p,
                  closeOnFocusOut: y,
                  open: I,
                  onOpenChange: S,
                  domReference: C,
                }),
                () => {
                  K.setFocusManagerState(null);
                }
              );
          }, [o, K, p, I, S, y, C]),
          ae(() => {
            if (o) return;
            if (!G) return;
            if ("function" != typeof MutationObserver) return;
            if (A) return;
            const e = () => {
              const e = G.getAttribute("tabindex"),
                t = Q(),
                n = s(v(O)),
                r = t.indexOf(n);
              -1 !== r && ($.current = r),
                z.current.includes("floating") || (n !== C && 0 === t.length)
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
          }, [o, O, G, C, z, Q, A]);
        const oe = !o && N && (!p || !D) && (Y || p);
        return (0, R.jsxs)(R.Fragment, {
          children: [
            oe &&
              (0, R.jsx)($e, {
                "data-type": "inside",
                ref: te,
                onFocus: (e) => {
                  if (p) {
                    const e = J();
                    Te("reference" === l[0] ? e[0] : e[e.length - 1]);
                  } else if (null != K && K.preserveTabOrder && K.portalNode)
                    if (((H.current = !1), He(e, K.portalNode))) {
                      const e = Be() || C;
                      null == e || e.focus();
                    } else {
                      var t;
                      null == (t = K.beforeOutsideRef.current) || t.focus();
                    }
                },
              }),
            !D && re("start"),
            n,
            re("end"),
            oe &&
              (0, R.jsx)($e, {
                "data-type": "inside",
                ref: ne,
                onFocus: (e) => {
                  if (p) Te(J()[0]);
                  else if (null != K && K.preserveTabOrder && K.portalNode)
                    if ((y && (H.current = !0), He(e, K.portalNode))) {
                      const e = Ue() || C;
                      null == e || e.focus();
                    } else {
                      var t;
                      null == (t = K.afterOutsideRef.current) || t.focus();
                    }
                },
              }),
          ],
        });
      }
      function ot(e) {
        return (0, i.sb)(e.target) && "BUTTON" === e.target.tagName;
      }
      function it(e) {
        return y(e);
      }
      function st(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            dataRef: i,
            elements: { domReference: s },
          } = e,
          {
            enabled: u = !0,
            event: l = "click",
            toggle: c = !0,
            ignoreMouse: a = !1,
            keyboardHandlers: d = !0,
            stickIfOpen: f = !0,
          } = t,
          h = r.useRef(),
          v = r.useRef(!1),
          p = r.useMemo(
            () => ({
              onPointerDown(e) {
                h.current = e.pointerType;
              },
              onMouseDown(e) {
                const t = h.current;
                0 === e.button &&
                  "click" !== l &&
                  ((m(t, !0) && a) ||
                    (!n ||
                    !c ||
                    (i.current.openEvent &&
                      f &&
                      "mousedown" !== i.current.openEvent.type)
                      ? (e.preventDefault(), o(!0, e.nativeEvent, "click"))
                      : o(!1, e.nativeEvent, "click")));
              },
              onClick(e) {
                const t = h.current;
                "mousedown" === l && h.current
                  ? (h.current = void 0)
                  : (m(t, !0) && a) ||
                    (!n ||
                    !c ||
                    (i.current.openEvent &&
                      f &&
                      "click" !== i.current.openEvent.type)
                      ? o(!0, e.nativeEvent, "click")
                      : o(!1, e.nativeEvent, "click"));
              },
              onKeyDown(e) {
                (h.current = void 0),
                  e.defaultPrevented ||
                    !d ||
                    ot(e) ||
                    (" " !== e.key ||
                      it(s) ||
                      (e.preventDefault(), (v.current = !0)),
                    "Enter" === e.key && o(!n || !c, e.nativeEvent, "click"));
              },
              onKeyUp(e) {
                e.defaultPrevented ||
                  !d ||
                  ot(e) ||
                  it(s) ||
                  (" " === e.key &&
                    v.current &&
                    ((v.current = !1), o(!n || !c, e.nativeEvent, "click")));
              },
            }),
            [i, s, l, a, d, o, n, f, c],
          );
        return r.useMemo(() => (u ? { reference: p } : {}), [u, p]);
      }
      const ut = {
          pointerdown: "onPointerDown",
          mousedown: "onMouseDown",
          click: "onClick",
        },
        lt = {
          pointerdown: "onPointerDownCapture",
          mousedown: "onMouseDownCapture",
          click: "onClickCapture",
        },
        ct = (e) => {
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
      function at(e, t) {
        void 0 === t && (t = {});
        const { open: n, onOpenChange: o, elements: s, dataRef: l } = e,
          {
            enabled: c = !0,
            escapeKey: a = !0,
            outsidePress: d = !0,
            outsidePressEvent: f = "pointerdown",
            referencePress: h = !1,
            referencePressEvent: m = "pointerdown",
            ancestorScroll: b = !1,
            bubbles: y,
            capture: w,
          } = t,
          E = Se(),
          x = X("function" == typeof d ? d : () => !1),
          R = "function" == typeof d ? x : d,
          I = r.useRef(!1),
          S = r.useRef(!1),
          { escapeKey: M, outsidePress: k } = ct(y),
          { escapeKey: C, outsidePress: O } = ct(w),
          T = r.useRef(!1),
          A = X((e) => {
            var t;
            if (!n || !c || !a || "Escape" !== e.key) return;
            if (T.current) return;
            const r =
                null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
              i = E ? De(E.nodesRef.current, r) : [];
            if (!M && (e.stopPropagation(), i.length > 0)) {
              let e = !0;
              if (
                (i.forEach((t) => {
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
          D = X((e) => {
            var t;
            const n = () => {
              var t;
              A(e), null == (t = g(e)) || t.removeEventListener("keydown", n);
            };
            null == (t = g(e)) || t.addEventListener("keydown", n);
          }),
          L = X((e) => {
            var t;
            const n = I.current;
            I.current = !1;
            const r = S.current;
            if (((S.current = !1), "click" === f && r)) return;
            if (n) return;
            if ("function" == typeof R && !R(e)) return;
            const c = g(e),
              a = "[" + Me("inert") + "]",
              d = v(s.floating).querySelectorAll(a);
            let h = (0, i.vq)(c) ? c : null;
            for (; h && !(0, i.eu)(h); ) {
              const e = (0, i.$4)(h);
              if ((0, i.eu)(e) || !(0, i.vq)(e)) break;
              h = e;
            }
            if (
              d.length &&
              (0, i.vq)(c) &&
              !c.matches("html,body") &&
              !u(c, s.floating) &&
              Array.from(d).every((e) => !u(h, e))
            )
              return;
            if ((0, i.sb)(c) && z) {
              const t = (0, i.eu)(c),
                n = (0, i.L9)(c),
                r = /auto|scroll/,
                o = t || r.test(n.overflowX),
                s = t || r.test(n.overflowY),
                u = o && c.clientWidth > 0 && c.scrollWidth > c.clientWidth,
                l = s && c.clientHeight > 0 && c.scrollHeight > c.clientHeight,
                a = "rtl" === n.direction,
                d =
                  l &&
                  (a
                    ? e.offsetX <= c.offsetWidth - c.clientWidth
                    : e.offsetX > c.clientWidth),
                f = u && e.offsetY > c.clientHeight;
              if (d || f) return;
            }
            const m =
                null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
              b =
                E &&
                De(E.nodesRef.current, m).some((t) => {
                  var n;
                  return p(
                    e,
                    null == (n = t.context) ? void 0 : n.elements.floating,
                  );
                });
            if (p(e, s.floating) || p(e, s.domReference) || b) return;
            const y = E ? De(E.nodesRef.current, m) : [];
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
          N = X((e) => {
            var t;
            const n = () => {
              var t;
              L(e), null == (t = g(e)) || t.removeEventListener(f, n);
            };
            null == (t = g(e)) || t.addEventListener(f, n);
          });
        r.useEffect(() => {
          if (!n || !c) return;
          (l.current.__escapeKeyBubbles = M),
            (l.current.__outsidePressBubbles = k);
          let e = -1;
          function t(e) {
            o(!1, e, "ancestor-scroll");
          }
          function r() {
            window.clearTimeout(e), (T.current = !0);
          }
          function u() {
            e = window.setTimeout(
              () => {
                T.current = !1;
              },
              (0, i.Tc)() ? 5 : 0,
            );
          }
          const d = v(s.floating);
          a &&
            (d.addEventListener("keydown", C ? D : A, C),
            d.addEventListener("compositionstart", r),
            d.addEventListener("compositionend", u)),
            R && d.addEventListener(f, O ? N : L, O);
          let h = [];
          return (
            b &&
              ((0, i.vq)(s.domReference) && (h = (0, i.v9)(s.domReference)),
              (0, i.vq)(s.floating) && (h = h.concat((0, i.v9)(s.floating))),
              !(0, i.vq)(s.reference) &&
                s.reference &&
                s.reference.contextElement &&
                (h = h.concat((0, i.v9)(s.reference.contextElement)))),
            (h = h.filter((e) => {
              var t;
              return (
                e !== (null == (t = d.defaultView) ? void 0 : t.visualViewport)
              );
            })),
            h.forEach((e) => {
              e.addEventListener("scroll", t, { passive: !0 });
            }),
            () => {
              a &&
                (d.removeEventListener("keydown", C ? D : A, C),
                d.removeEventListener("compositionstart", r),
                d.removeEventListener("compositionend", u)),
                R && d.removeEventListener(f, O ? N : L, O),
                h.forEach((e) => {
                  e.removeEventListener("scroll", t);
                }),
                window.clearTimeout(e);
            }
          );
        }, [l, s, a, R, f, n, o, b, c, M, k, A, C, D, L, O, N]),
          r.useEffect(() => {
            I.current = !1;
          }, [R, f]);
        const P = r.useMemo(
            () => ({
              onKeyDown: A,
              ...(h && {
                [ut[m]]: (e) => {
                  o(!1, e.nativeEvent, "reference-press");
                },
                ...("click" !== m && {
                  onClick(e) {
                    o(!1, e.nativeEvent, "reference-press");
                  },
                }),
              }),
            }),
            [A, o, h, m],
          ),
          z = r.useMemo(
            () => ({
              onKeyDown: A,
              onMouseDown() {
                S.current = !0;
              },
              onMouseUp() {
                S.current = !0;
              },
              [lt[f]]: () => {
                I.current = !0;
              },
            }),
            [A, f],
          );
        return r.useMemo(
          () => (c ? { reference: P, floating: z } : {}),
          [c, P, z],
        );
      }
      function dt(e) {
        void 0 === e && (e = {});
        const { nodeId: t } = e,
          n = (function (e) {
            const { open: t = !1, onOpenChange: n, elements: o } = e,
              i = we(),
              s = r.useRef({}),
              [u] = r.useState(() => Ee()),
              l = null != Ie(),
              [c, a] = r.useState(o.reference),
              d = X((e, t, r) => {
                (s.current.openEvent = e ? t : void 0),
                  u.emit("openchange", {
                    open: e,
                    event: t,
                    reason: r,
                    nested: l,
                  }),
                  null == n || n(e, t, r);
              }),
              f = r.useMemo(() => ({ setPositionReference: a }), []),
              h = r.useMemo(
                () => ({
                  reference: c || o.reference || null,
                  floating: o.floating || null,
                  domReference: o.reference,
                }),
                [c, o.reference, o.floating],
              );
            return r.useMemo(
              () => ({
                dataRef: s,
                open: t,
                onOpenChange: d,
                elements: h,
                events: u,
                floatingId: i,
                refs: f,
              }),
              [t, d, h, u, i, f],
            );
          })({
            ...e,
            elements: { reference: null, floating: null, ...e.elements },
          }),
          o = e.rootContext || n,
          s = o.elements,
          [u, l] = r.useState(null),
          [c, a] = r.useState(null),
          d = (null == s ? void 0 : s.domReference) || u,
          f = r.useRef(null),
          h = Se();
        ae(() => {
          d && (f.current = d);
        }, [d]);
        const m = (0, H.we)({
            ...e,
            elements: { ...s, ...(c && { reference: c }) },
          }),
          v = r.useCallback(
            (e) => {
              const t = (0, i.vq)(e)
                ? {
                    getBoundingClientRect: () => e.getBoundingClientRect(),
                    contextElement: e,
                  }
                : e;
              a(t), m.refs.setReference(t);
            },
            [m.refs],
          ),
          p = r.useCallback(
            (e) => {
              ((0, i.vq)(e) || null === e) && ((f.current = e), l(e)),
                ((0, i.vq)(m.refs.reference.current) ||
                  null === m.refs.reference.current ||
                  (null !== e && !(0, i.vq)(e))) &&
                  m.refs.setReference(e);
            },
            [m.refs],
          ),
          g = r.useMemo(
            () => ({
              ...m.refs,
              setReference: p,
              setPositionReference: v,
              domReference: f,
            }),
            [m.refs, p, v],
          ),
          b = r.useMemo(
            () => ({ ...m.elements, domReference: d }),
            [m.elements, d],
          ),
          y = r.useMemo(
            () => ({ ...m, ...o, refs: g, elements: b, nodeId: t }),
            [m, g, b, t, o],
          );
        return (
          ae(() => {
            o.dataRef.current.floatingContext = y;
            const e =
              null == h ? void 0 : h.nodesRef.current.find((e) => e.id === t);
            e && (e.context = y);
          }),
          r.useMemo(
            () => ({ ...m, context: y, refs: g, elements: b }),
            [m, g, b, y],
          )
        );
      }
      function ft(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            events: c,
            dataRef: a,
            elements: h,
          } = e,
          { enabled: m = !0, visibleOnly: p = !0 } = t,
          b = r.useRef(!1),
          w = r.useRef(-1),
          E = r.useRef(!0);
        r.useEffect(() => {
          if (!m) return;
          const e = (0, i.zk)(h.domReference);
          function t() {
            !n &&
              (0, i.sb)(h.domReference) &&
              h.domReference === s(v(h.domReference)) &&
              (b.current = !0);
          }
          function r() {
            E.current = !0;
          }
          return (
            e.addEventListener("blur", t),
            e.addEventListener("keydown", r, !0),
            () => {
              e.removeEventListener("blur", t),
                e.removeEventListener("keydown", r, !0);
            }
          );
        }, [h.domReference, n, m]),
          r.useEffect(() => {
            if (m)
              return (
                c.on("openchange", e),
                () => {
                  c.off("openchange", e);
                }
              );
            function e(e) {
              let { reason: t } = e;
              ("reference-press" !== t && "escape-key" !== t) ||
                (b.current = !0);
            }
          }, [c, m]),
          r.useEffect(
            () => () => {
              ke(w);
            },
            [],
          );
        const x = r.useMemo(
          () => ({
            onPointerDown(e) {
              d(e.nativeEvent) || (E.current = !1);
            },
            onMouseLeave() {
              b.current = !1;
            },
            onFocus(e) {
              if (b.current) return;
              const t = g(e.nativeEvent);
              if (p && (0, i.vq)(t))
                try {
                  if (
                    f() &&
                    l().toLowerCase().startsWith("mac") &&
                    !navigator.maxTouchPoints
                  )
                    throw Error();
                  if (!t.matches(":focus-visible")) return;
                } catch (e) {
                  if (!E.current && !y(t)) return;
                }
              o(!0, e.nativeEvent, "focus");
            },
            onBlur(e) {
              b.current = !1;
              const t = e.relatedTarget,
                n = e.nativeEvent,
                r =
                  (0, i.vq)(t) &&
                  t.hasAttribute(Me("focus-guard")) &&
                  "outside" === t.getAttribute("data-type");
              w.current = window.setTimeout(() => {
                var e;
                const i = s(
                  h.domReference ? h.domReference.ownerDocument : document,
                );
                (t || i !== h.domReference) &&
                  (u(
                    null == (e = a.current.floatingContext)
                      ? void 0
                      : e.refs.floating.current,
                    i,
                  ) ||
                    u(h.domReference, i) ||
                    r ||
                    o(!1, n, "focus"));
              });
            },
          }),
          [a, h.domReference, o, p],
        );
        return r.useMemo(() => (m ? { reference: x } : {}), [m, x]);
      }
      const ht = "active",
        mt = "selected";
      function vt(e, t, n) {
        const r = new Map(),
          o = "item" === n;
        let i = e;
        if (o && e) {
          const { [ht]: t, [mt]: n, ...r } = e;
          i = r;
        }
        return {
          ...("floating" === n && { tabIndex: -1, [Ge]: "" }),
          ...i,
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
                      let [n, i] = t;
                      var s;
                      (o && [ht, mt].includes(n)) ||
                        (0 === n.indexOf("on")
                          ? (r.has(n) || r.set(n, []),
                            "function" == typeof i &&
                              (null == (s = r.get(n)) || s.push(i),
                              (e[n] = function () {
                                for (
                                  var e,
                                    t = arguments.length,
                                    o = new Array(t),
                                    i = 0;
                                  i < t;
                                  i++
                                )
                                  o[i] = arguments[i];
                                return null == (e = r.get(n))
                                  ? void 0
                                  : e
                                      .map((e) => e(...o))
                                      .find((e) => void 0 !== e);
                              })))
                          : (e[n] = i));
                    }),
                    e)
                  : e,
              {},
            ),
        };
      }
      function pt(e) {
        void 0 === e && (e = []);
        const t = e.map((e) => (null == e ? void 0 : e.reference)),
          n = e.map((e) => (null == e ? void 0 : e.floating)),
          o = e.map((e) => (null == e ? void 0 : e.item)),
          i = r.useCallback((t) => vt(t, e, "reference"), t),
          s = r.useCallback((t) => vt(t, e, "floating"), n),
          u = r.useCallback((t) => vt(t, e, "item"), o);
        return r.useMemo(
          () => ({
            getReferenceProps: i,
            getFloatingProps: s,
            getItemProps: u,
          }),
          [i, s, u],
        );
      }
      const gt = "Escape";
      function bt(e, t, n) {
        switch (e) {
          case "vertical":
            return t;
          case "horizontal":
            return n;
          default:
            return t || n;
        }
      }
      function yt(e, t) {
        return bt(t, e === G || e === Q, e === J || e === Z);
      }
      function wt(e, t, n) {
        return (
          bt(t, e === Q, n ? e === J : e === Z) ||
          "Enter" === e ||
          " " === e ||
          "" === e
        );
      }
      function Et(e, t, n) {
        return bt(t, n ? e === J : e === Z, e === Q);
      }
      function xt(e, t, n, r) {
        return "both" === t || ("horizontal" === t && r && r > 1)
          ? e === gt
          : bt(t, n ? e === Z : e === J, e === G);
      }
      function Rt(e, t) {
        const { open: n, onOpenChange: o, elements: l } = e,
          {
            listRef: c,
            activeIndex: f,
            onNavigate: h = () => {},
            enabled: m = !0,
            selectedIndex: p = null,
            allowEscape: g = !1,
            loop: b = !1,
            nested: y = !1,
            rtl: x = !1,
            virtual: R = !1,
            focusItemOnOpen: I = "auto",
            focusItemOnHover: S = !0,
            openOnArrowKeyDown: M = !0,
            disabledIndices: k,
            orientation: C = "vertical",
            cols: O = 1,
            scrollItemIntoView: T = !0,
            virtualItemRef: A,
            itemSizes: D,
            dense: L = !1,
          } = t;
        const N = Ce(Qe(l.floating)),
          P = Ie(),
          z = Se();
        ae(() => {
          e.dataRef.current.orientation = C;
        }, [e, C]);
        const F = X(() => {
            h(-1 === K.current ? null : K.current);
          }),
          j = E(l.domReference),
          _ = r.useRef(I),
          K = r.useRef(null != p ? p : -1),
          W = r.useRef(null),
          q = r.useRef(!0),
          B = r.useRef(F),
          U = r.useRef(!!l.floating),
          H = r.useRef(n),
          V = r.useRef(!1),
          $ = r.useRef(!1),
          Y = Ce(k),
          G = Ce(n),
          ee = Ce(T),
          de = Ce(p),
          [fe, he] = r.useState(),
          [me, ve] = r.useState(),
          pe = X(() => {
            function e(e) {
              R
                ? (he(e.id),
                  null == z || z.events.emit("virtualfocus", e),
                  A && (A.current = e))
                : Te(e, { sync: V.current, preventScroll: !0 });
            }
            const t = c.current[K.current];
            t && e(t);
            (V.current ? (e) => e() : requestAnimationFrame)(() => {
              const n = c.current[K.current] || t;
              if (!n) return;
              t || e(n);
              const r = ee.current;
              r &&
                be &&
                ($.current || !q.current) &&
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
                null != p &&
                (($.current = !0), (K.current = p), F())
              : U.current && ((K.current = -1), B.current()));
        }, [m, n, l.floating, p, F]),
          ae(() => {
            if (m && n && l.floating)
              if (null == f) {
                if (((V.current = !1), null != de.current)) return;
                if (
                  (U.current && ((K.current = -1), pe()),
                  (!H.current || !U.current) &&
                    _.current &&
                    (null != W.current ||
                      (!0 === _.current && null == W.current)))
                ) {
                  let e = 0;
                  const t = () => {
                    if (null == c.current[0]) {
                      if (e < 2) {
                        (e ? requestAnimationFrame : queueMicrotask)(t);
                      }
                      e++;
                    } else
                      (K.current =
                        null == W.current || wt(W.current, C, x) || y
                          ? ne(c, Y.current)
                          : re(c, Y.current)),
                        (W.current = null),
                        F();
                  };
                  t();
                }
              } else te(c, f) || ((K.current = f), pe(), ($.current = !1));
          }, [m, n, l.floating, f, de, y, c, C, x, F, pe, Y]),
          ae(() => {
            var e;
            if (!m || l.floating || !z || R || !U.current) return;
            const t = z.nodesRef.current,
              n =
                null == (e = t.find((e) => e.id === P)) ||
                null == (e = e.context)
                  ? void 0
                  : e.elements.floating,
              r = s(v(l.floating)),
              o = t.some((e) => e.context && u(e.context.elements.floating, r));
            n && !o && q.current && n.focus({ preventScroll: !0 });
          }, [m, l.floating, z, P, R]),
          ae(() => {
            if (m && z && R && !P)
              return (
                z.events.on("virtualfocus", e),
                () => {
                  z.events.off("virtualfocus", e);
                }
              );
            function e(e) {
              ve(e.id), A && (A.current = e);
            }
          }, [m, z, R, P, A]),
          ae(() => {
            (B.current = F), (H.current = n), (U.current = !!l.floating);
          }),
          ae(() => {
            n || (W.current = null);
          }, [n]);
        const ge = null != f,
          be = r.useMemo(() => {
            function e(e) {
              if (!n) return;
              const t = c.current.indexOf(e);
              -1 !== t && K.current !== t && ((K.current = t), F());
            }
            return {
              onFocus(t) {
                let { currentTarget: n } = t;
                (V.current = !0), e(n);
              },
              onClick: (e) => {
                let { currentTarget: t } = e;
                return t.focus({ preventScroll: !0 });
              },
              ...(S && {
                onMouseMove(t) {
                  let { currentTarget: n } = t;
                  (V.current = !0), ($.current = !1), e(n);
                },
                onPointerLeave(e) {
                  let { pointerType: t } = e;
                  var n;
                  q.current &&
                    "touch" !== t &&
                    ((V.current = !0),
                    (K.current = -1),
                    F(),
                    R ||
                      null == (n = N.current) ||
                      n.focus({ preventScroll: !0 }));
                },
              }),
            };
          }, [n, N, S, c, F, R]),
          ye = X((e) => {
            if (((q.current = !1), (V.current = !0), 229 === e.which)) return;
            if (!G.current && e.currentTarget === N.current) return;
            if (y && xt(e.key, C, x, O))
              return (
                w(e),
                o(!1, e.nativeEvent, "list-navigation"),
                void (
                  (0, i.sb)(l.domReference) &&
                  (R
                    ? null == z || z.events.emit("virtualfocus", l.domReference)
                    : l.domReference.focus())
                )
              );
            const t = K.current,
              r = ne(c, k),
              u = re(c, k);
            if (
              (j ||
                ("Home" === e.key && (w(e), (K.current = r), F()),
                "End" === e.key && (w(e), (K.current = u), F())),
              O > 1)
            ) {
              const t =
                  D ||
                  Array.from({ length: c.current.length }, () => ({
                    width: 1,
                    height: 1,
                  })),
                n = se(t, O, L),
                o = n.findIndex((e) => null != e && !ce(c.current, e, k)),
                i = n.reduce(
                  (e, t, n) => (null == t || ce(c.current, t, k) ? e : n),
                  -1,
                ),
                s =
                  n[
                    ie(
                      {
                        current: n.map((e) =>
                          null != e ? c.current[e] : null,
                        ),
                      },
                      {
                        event: e,
                        orientation: C,
                        loop: b,
                        rtl: x,
                        cols: O,
                        disabledIndices: le(
                          [
                            ...(k ||
                              c.current.map((e, t) =>
                                ce(c.current, t) ? t : void 0,
                              )),
                            void 0,
                          ],
                          n,
                        ),
                        minIndex: o,
                        maxIndex: i,
                        prevIndex: ue(
                          K.current > u ? r : K.current,
                          t,
                          n,
                          O,
                          e.key === Q
                            ? "bl"
                            : e.key === (x ? J : Z)
                              ? "tr"
                              : "tl",
                        ),
                        stopEvent: !0,
                      },
                    )
                  ];
              if ((null != s && ((K.current = s), F()), "both" === C)) return;
            }
            if (yt(e.key, C)) {
              if (
                (w(e),
                n && !R && s(e.currentTarget.ownerDocument) === e.currentTarget)
              )
                return (K.current = wt(e.key, C, x) ? r : u), void F();
              wt(e.key, C, x)
                ? (K.current = b
                    ? t >= u
                      ? g && t !== c.current.length
                        ? -1
                        : r
                      : oe(c, { startingIndex: t, disabledIndices: k })
                    : Math.min(
                        u,
                        oe(c, { startingIndex: t, disabledIndices: k }),
                      ))
                : (K.current = b
                    ? t <= r
                      ? g && -1 !== t
                        ? c.current.length
                        : u
                      : oe(c, {
                          startingIndex: t,
                          decrement: !0,
                          disabledIndices: k,
                        })
                    : Math.max(
                        r,
                        oe(c, {
                          startingIndex: t,
                          decrement: !0,
                          disabledIndices: k,
                        }),
                      )),
                te(c, K.current) && (K.current = -1),
                F();
            }
          }),
          we = r.useMemo(
            () => R && n && ge && { "aria-activedescendant": me || fe },
            [R, n, ge, me, fe],
          ),
          Ee = r.useMemo(
            () => ({
              "aria-orientation": "both" === C ? void 0 : C,
              ...(j ? {} : we),
              onKeyDown: ye,
              onPointerMove() {
                q.current = !0;
              },
            }),
            [we, ye, C, j],
          ),
          xe = r.useMemo(() => {
            function e(e) {
              "auto" === I && a(e.nativeEvent) && (_.current = !0);
            }
            function t(e) {
              (_.current = I),
                "auto" === I && d(e.nativeEvent) && (_.current = !0);
            }
            return {
              ...we,
              onKeyDown(e) {
                var t;
                q.current = !1;
                const r = e.key.startsWith("Arrow"),
                  i = ["Home", "End"].includes(e.key),
                  s = r || i,
                  u =
                    null == z ||
                    null == (t = z.nodesRef.current.find((e) => e.id === P)) ||
                    null == (t = t.context) ||
                    null == (t = t.dataRef)
                      ? void 0
                      : t.current.orientation,
                  l = Et(e.key, C, x),
                  a = xt(e.key, C, x, O),
                  d = Et(e.key, u, x),
                  f = yt(e.key, C),
                  h = (y ? d : f) || "Enter" === e.key || "" === e.key.trim();
                if (R && n) {
                  const t =
                      null == z
                        ? void 0
                        : z.nodesRef.current.find((e) => null == e.parentId),
                    n =
                      z && t
                        ? (function (e, t) {
                            let n,
                              r = -1;
                            return (
                              (function t(o, i) {
                                i > r && ((n = o), (r = i)),
                                  De(e, o).forEach((e) => {
                                    t(e.id, i + 1);
                                  });
                              })(t, 0),
                              e.find((e) => e.id === n)
                            );
                          })(z.nodesRef.current, t.id)
                        : null;
                  if (s && n && A) {
                    const t = new KeyboardEvent("keydown", {
                      key: e.key,
                      bubbles: !0,
                    });
                    if (l || a) {
                      var m, v;
                      const r =
                          (null == (m = n.context)
                            ? void 0
                            : m.elements.domReference) === e.currentTarget,
                        o =
                          a && !r
                            ? null == (v = n.context)
                              ? void 0
                              : v.elements.domReference
                            : l
                              ? c.current.find(
                                  (e) => (null == e ? void 0 : e.id) === fe,
                                )
                              : null;
                      o && (w(e), o.dispatchEvent(t), ve(void 0));
                    }
                    var g;
                    if ((f || i) && n.context)
                      if (
                        n.context.open &&
                        n.parentId &&
                        e.currentTarget !== n.context.elements.domReference
                      )
                        return (
                          w(e),
                          void (
                            null == (g = n.context.elements.domReference) ||
                            g.dispatchEvent(t)
                          )
                        );
                  }
                  return ye(e);
                }
                if (n || M || !r) {
                  if (h) {
                    const t = yt(e.key, u);
                    W.current = y && t ? null : e.key;
                  }
                  y
                    ? d &&
                      (w(e),
                      n
                        ? ((K.current = ne(c, Y.current)), F())
                        : o(!0, e.nativeEvent, "list-navigation"))
                    : f &&
                      (null != p && (K.current = p),
                      w(e),
                      !n && M ? o(!0, e.nativeEvent, "list-navigation") : ye(e),
                      n && F());
                }
              },
              onFocus() {
                n && !R && ((K.current = -1), F());
              },
              onPointerDown: t,
              onPointerEnter: t,
              onMouseDown: e,
              onClick: e,
            };
          }, [fe, we, O, ye, Y, I, c, y, F, o, n, M, C, P, x, p, z, R, A]);
        return r.useMemo(
          () => (m ? { reference: xe, floating: Ee, item: be } : {}),
          [m, xe, Ee, be],
        );
      }
      const It = new Map([
        ["select", "listbox"],
        ["combobox", "listbox"],
        ["label", !1],
      ]);
      function St(e, t) {
        var n;
        void 0 === t && (t = {});
        const { open: o, floatingId: i } = e,
          { enabled: s = !0, role: u = "dialog" } = t,
          l = null != (n = It.get(u)) ? n : u,
          c = we(),
          a = null != Ie(),
          d = r.useMemo(
            () =>
              "tooltip" === l || "label" === u
                ? {
                    ["aria-" + ("label" === u ? "labelledby" : "describedby")]:
                      o ? i : void 0,
                  }
                : {
                    "aria-expanded": o ? "true" : "false",
                    "aria-haspopup": "alertdialog" === l ? "dialog" : l,
                    "aria-controls": o ? i : void 0,
                    ...("listbox" === l && { role: "combobox" }),
                    ...("menu" === l && { id: c }),
                    ...("menu" === l && a && { role: "menuitem" }),
                    ...("select" === u && { "aria-autocomplete": "none" }),
                    ...("combobox" === u && { "aria-autocomplete": "list" }),
                  },
            [l, i, a, o, c, u],
          ),
          f = r.useMemo(() => {
            const e = { id: i, ...(l && { role: l }) };
            return "tooltip" === l || "label" === u
              ? e
              : { ...e, ...("menu" === l && { "aria-labelledby": c }) };
          }, [l, i, c, u]),
          h = r.useCallback(
            (e) => {
              let { active: t, selected: n } = e;
              const r = { role: "option", ...(t && { id: i + "-option" }) };
              switch (u) {
                case "select":
                  return { ...r, "aria-selected": t && n };
                case "combobox":
                  return { ...r, ...(t && { "aria-selected": !0 }) };
              }
              return {};
            },
            [i, u],
          );
        return r.useMemo(
          () => (s ? { reference: d, floating: f, item: h } : {}),
          [s, d, f, h],
        );
      }
      function Mt(e, t) {
        var n;
        const { open: o, dataRef: i } = e,
          {
            listRef: s,
            activeIndex: u,
            onMatch: l,
            onTypingChange: c,
            enabled: a = !0,
            findMatch: d = null,
            resetMs: f = 750,
            ignoreKeys: h = [],
            selectedIndex: m = null,
          } = t,
          v = r.useRef(-1),
          p = r.useRef(""),
          g = r.useRef(null != (n = null != m ? m : u) ? n : -1),
          b = r.useRef(null),
          y = X(l),
          E = X(c),
          x = Ce(d),
          R = Ce(h);
        ae(() => {
          o && (ke(v), (b.current = null), (p.current = ""));
        }, [o]),
          ae(() => {
            var e;
            o &&
              "" === p.current &&
              (g.current = null != (e = null != m ? m : u) ? e : -1);
          }, [o, m, u]);
        const I = X((e) => {
            e
              ? i.current.typing || ((i.current.typing = e), E(e))
              : i.current.typing && ((i.current.typing = e), E(e));
          }),
          S = X((e) => {
            function t(e, t, n) {
              const r = x.current
                ? x.current(t, n)
                : t.find(
                    (e) =>
                      0 ===
                      (null == e
                        ? void 0
                        : e.toLocaleLowerCase().indexOf(n.toLocaleLowerCase())),
                  );
              return r ? e.indexOf(r) : -1;
            }
            const n = s.current;
            if (
              (p.current.length > 0 &&
                " " !== p.current[0] &&
                (-1 === t(n, n, p.current) ? I(!1) : " " === e.key && w(e)),
              null == n ||
                R.current.includes(e.key) ||
                1 !== e.key.length ||
                e.ctrlKey ||
                e.metaKey ||
                e.altKey)
            )
              return;
            o && " " !== e.key && (w(e), I(!0));
            n.every((e) => {
              var t, n;
              return (
                !e ||
                (null == (t = e[0]) ? void 0 : t.toLocaleLowerCase()) !==
                  (null == (n = e[1]) ? void 0 : n.toLocaleLowerCase())
              );
            }) &&
              p.current === e.key &&
              ((p.current = ""), (g.current = b.current)),
              (p.current += e.key),
              ke(v),
              (v.current = window.setTimeout(() => {
                (p.current = ""), (g.current = b.current), I(!1);
              }, f));
            const r = g.current,
              i = t(
                n,
                [...n.slice((r || 0) + 1), ...n.slice(0, (r || 0) + 1)],
                p.current,
              );
            -1 !== i
              ? (y(i), (b.current = i))
              : " " !== e.key && ((p.current = ""), I(!1));
          }),
          M = r.useMemo(() => ({ onKeyDown: S }), [S]),
          k = r.useMemo(
            () => ({
              onKeyDown: S,
              onKeyUp(e) {
                " " === e.key && I(!1);
              },
            }),
            [S, I],
          );
        return r.useMemo(
          () => (a ? { reference: M, floating: k } : {}),
          [a, M, k],
        );
      }
    },
    88268: (e, t, n) => {
      n.d(t, { Te: () => w });
      var r = n(90626),
        o = n(72739);
      function i(e, t, n) {
        let r,
          o = n.initialDeps ?? [];
        return () => {
          var i, s, u, l;
          let c;
          n.key &&
            (null == (i = n.debug) ? void 0 : i.call(n)) &&
            (c = Date.now());
          const a = e();
          if (!(a.length !== o.length || a.some((e, t) => o[t] !== e)))
            return r;
          let d;
          if (
            ((o = a),
            n.key &&
              (null == (s = n.debug) ? void 0 : s.call(n)) &&
              (d = Date.now()),
            (r = t(...a)),
            n.key && (null == (u = n.debug) ? void 0 : u.call(n)))
          ) {
            const e = Math.round(100 * (Date.now() - c)) / 100,
              t = Math.round(100 * (Date.now() - d)) / 100,
              r = t / 16,
              o = (e, t) => {
                for (e = String(e); e.length < t; ) e = " " + e;
                return e;
              };
            console.info(
              `%c⏱ ${o(t, 5)} /${o(e, 5)} ms`,
              `\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(${Math.max(0, Math.min(120 - 120 * r, 120))}deg 100% 31%);`,
              null == n ? void 0 : n.key,
            );
          }
          return (
            null == (l = null == n ? void 0 : n.onChange) || l.call(n, r), r
          );
        };
      }
      function s(e, t) {
        if (void 0 === e)
          throw new Error("Unexpected undefined" + (t ? `: ${t}` : ""));
        return e;
      }
      const u = (e, t, n) => {
          let r;
          return function (...o) {
            e.clearTimeout(r), (r = e.setTimeout(() => t.apply(this, o), n));
          };
        },
        l = (e) => e,
        c = (e) => {
          const t = Math.max(e.startIndex - e.overscan, 0),
            n = Math.min(e.endIndex + e.overscan, e.count - 1),
            r = [];
          for (let e = t; e <= n; e++) r.push(e);
          return r;
        },
        a = (e, t) => {
          const n = e.scrollElement;
          if (!n) return;
          const r = e.targetWindow;
          if (!r) return;
          const o = (e) => {
            const { width: n, height: r } = e;
            t({ width: Math.round(n), height: Math.round(r) });
          };
          if ((o(n.getBoundingClientRect()), !r.ResizeObserver))
            return () => {};
          const i = new r.ResizeObserver((e) => {
            const t = e[0];
            if (null == t ? void 0 : t.borderBoxSize) {
              const e = t.borderBoxSize[0];
              if (e)
                return void o({ width: e.inlineSize, height: e.blockSize });
            }
            o(n.getBoundingClientRect());
          });
          return (
            i.observe(n, { box: "border-box" }),
            () => {
              i.unobserve(n);
            }
          );
        },
        d = { passive: !0 },
        f = "undefined" == typeof window || "onscrollend" in window,
        h = (e, t) => {
          const n = e.scrollElement;
          if (!n) return;
          const r = e.targetWindow;
          if (!r) return;
          let o = 0;
          const i = f
              ? () => {}
              : u(
                  r,
                  () => {
                    t(o, !1);
                  },
                  e.options.isScrollingResetDelay,
                ),
            s = (r) => () => {
              const { horizontal: s, isRtl: u } = e.options;
              (o = s ? n.scrollLeft * (u ? -1 : 1) : n.scrollTop), i(), t(o, r);
            },
            l = s(!0),
            c = s(!1);
          return (
            c(),
            n.addEventListener("scroll", l, d),
            n.addEventListener("scrollend", c, d),
            () => {
              n.removeEventListener("scroll", l),
                n.removeEventListener("scrollend", c);
            }
          );
        },
        m = (e, t, n) => {
          if (null == t ? void 0 : t.borderBoxSize) {
            const e = t.borderBoxSize[0];
            if (e) {
              return Math.round(
                e[n.options.horizontal ? "inlineSize" : "blockSize"],
              );
            }
          }
          return Math.round(
            e.getBoundingClientRect()[
              n.options.horizontal ? "width" : "height"
            ],
          );
        },
        v = (e, { adjustments: t = 0, behavior: n }, r) => {
          var o, i;
          const s = e + t;
          null == (i = null == (o = r.scrollElement) ? void 0 : o.scrollTo) ||
            i.call(o, {
              [r.options.horizontal ? "left" : "top"]: s,
              behavior: n,
            });
        };
      class p {
        constructor(e) {
          (this.unsubs = []),
            (this.scrollElement = null),
            (this.targetWindow = null),
            (this.isScrolling = !1),
            (this.scrollToIndexTimeoutId = null),
            (this.measurementsCache = []),
            (this.itemSizeCache = new Map()),
            (this.pendingMeasuredCacheIndexes = []),
            (this.scrollRect = null),
            (this.scrollOffset = null),
            (this.scrollDirection = null),
            (this.scrollAdjustments = 0),
            (this.elementsCache = new Map()),
            (this.observer = (() => {
              let e = null;
              const t = () =>
                e ||
                (this.targetWindow && this.targetWindow.ResizeObserver
                  ? (e = new this.targetWindow.ResizeObserver((e) => {
                      e.forEach((e) => {
                        this._measureElement(e.target, e);
                      });
                    }))
                  : null);
              return {
                disconnect: () => {
                  var e;
                  return null == (e = t()) ? void 0 : e.disconnect();
                },
                observe: (e) => {
                  var n;
                  return null == (n = t())
                    ? void 0
                    : n.observe(e, { box: "border-box" });
                },
                unobserve: (e) => {
                  var n;
                  return null == (n = t()) ? void 0 : n.unobserve(e);
                },
              };
            })()),
            (this.range = null),
            (this.setOptions = (e) => {
              Object.entries(e).forEach(([t, n]) => {
                void 0 === n && delete e[t];
              }),
                (this.options = {
                  debug: !1,
                  initialOffset: 0,
                  overscan: 1,
                  paddingStart: 0,
                  paddingEnd: 0,
                  scrollPaddingStart: 0,
                  scrollPaddingEnd: 0,
                  horizontal: !1,
                  getItemKey: l,
                  rangeExtractor: c,
                  onChange: () => {},
                  measureElement: m,
                  initialRect: { width: 0, height: 0 },
                  scrollMargin: 0,
                  gap: 0,
                  indexAttribute: "data-index",
                  initialMeasurementsCache: [],
                  lanes: 1,
                  isScrollingResetDelay: 150,
                  enabled: !0,
                  isRtl: !1,
                  ...e,
                });
            }),
            (this.notify = (e) => {
              var t, n;
              null == (n = (t = this.options).onChange) || n.call(t, this, e);
            }),
            (this.maybeNotify = i(
              () => (
                this.calculateRange(),
                [
                  this.isScrolling,
                  this.range ? this.range.startIndex : null,
                  this.range ? this.range.endIndex : null,
                ]
              ),
              (e) => {
                this.notify(e);
              },
              {
                key: !1,
                debug: () => this.options.debug,
                initialDeps: [
                  this.isScrolling,
                  this.range ? this.range.startIndex : null,
                  this.range ? this.range.endIndex : null,
                ],
              },
            )),
            (this.cleanup = () => {
              this.unsubs.filter(Boolean).forEach((e) => e()),
                (this.unsubs = []),
                (this.scrollElement = null),
                (this.targetWindow = null),
                this.observer.disconnect(),
                this.elementsCache.clear();
            }),
            (this._didMount = () => () => {
              this.cleanup();
            }),
            (this._willUpdate = () => {
              var e;
              const t = this.options.enabled
                ? this.options.getScrollElement()
                : null;
              if (this.scrollElement !== t) {
                if ((this.cleanup(), !t)) return void this.maybeNotify();
                (this.scrollElement = t),
                  this.scrollElement && "ownerDocument" in this.scrollElement
                    ? (this.targetWindow =
                        this.scrollElement.ownerDocument.defaultView)
                    : (this.targetWindow =
                        (null == (e = this.scrollElement)
                          ? void 0
                          : e.window) ?? null),
                  this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: void 0,
                    behavior: void 0,
                  }),
                  this.unsubs.push(
                    this.options.observeElementRect(this, (e) => {
                      (this.scrollRect = e), this.maybeNotify();
                    }),
                  ),
                  this.unsubs.push(
                    this.options.observeElementOffset(this, (e, t) => {
                      (this.scrollAdjustments = 0),
                        (this.scrollDirection = t
                          ? this.getScrollOffset() < e
                            ? "forward"
                            : "backward"
                          : null),
                        (this.scrollOffset = e),
                        (this.isScrolling = t),
                        this.maybeNotify();
                    }),
                  );
              }
            }),
            (this.getSize = () =>
              this.options.enabled
                ? ((this.scrollRect =
                    this.scrollRect ?? this.options.initialRect),
                  this.scrollRect[this.options.horizontal ? "width" : "height"])
                : ((this.scrollRect = null), 0)),
            (this.getScrollOffset = () =>
              this.options.enabled
                ? ((this.scrollOffset =
                    this.scrollOffset ??
                    ("function" == typeof this.options.initialOffset
                      ? this.options.initialOffset()
                      : this.options.initialOffset)),
                  this.scrollOffset)
                : ((this.scrollOffset = null), 0)),
            (this.getFurthestMeasurement = (e, t) => {
              const n = new Map(),
                r = new Map();
              for (let o = t - 1; o >= 0; o--) {
                const t = e[o];
                if (n.has(t.lane)) continue;
                const i = r.get(t.lane);
                if (
                  (null == i || t.end > i.end
                    ? r.set(t.lane, t)
                    : t.end < i.end && n.set(t.lane, !0),
                  n.size === this.options.lanes)
                )
                  break;
              }
              return r.size === this.options.lanes
                ? Array.from(r.values()).sort((e, t) =>
                    e.end === t.end ? e.index - t.index : e.end - t.end,
                  )[0]
                : void 0;
            }),
            (this.getMeasurementOptions = i(
              () => [
                this.options.count,
                this.options.paddingStart,
                this.options.scrollMargin,
                this.options.getItemKey,
                this.options.enabled,
              ],
              (e, t, n, r, o) => (
                (this.pendingMeasuredCacheIndexes = []),
                {
                  count: e,
                  paddingStart: t,
                  scrollMargin: n,
                  getItemKey: r,
                  enabled: o,
                }
              ),
              { key: !1 },
            )),
            (this.getMeasurements = i(
              () => [this.getMeasurementOptions(), this.itemSizeCache],
              (
                {
                  count: e,
                  paddingStart: t,
                  scrollMargin: n,
                  getItemKey: r,
                  enabled: o,
                },
                i,
              ) => {
                if (!o)
                  return (
                    (this.measurementsCache = []),
                    this.itemSizeCache.clear(),
                    []
                  );
                0 === this.measurementsCache.length &&
                  ((this.measurementsCache =
                    this.options.initialMeasurementsCache),
                  this.measurementsCache.forEach((e) => {
                    this.itemSizeCache.set(e.key, e.size);
                  }));
                const s =
                  this.pendingMeasuredCacheIndexes.length > 0
                    ? Math.min(...this.pendingMeasuredCacheIndexes)
                    : 0;
                this.pendingMeasuredCacheIndexes = [];
                const u = this.measurementsCache.slice(0, s);
                for (let o = s; o < e; o++) {
                  const e = r(o),
                    s =
                      1 === this.options.lanes
                        ? u[o - 1]
                        : this.getFurthestMeasurement(u, o),
                    l = s ? s.end + this.options.gap : t + n,
                    c = i.get(e),
                    a = "number" == typeof c ? c : this.options.estimateSize(o),
                    d = l + a,
                    f = s ? s.lane : o % this.options.lanes;
                  u[o] = {
                    index: o,
                    start: l,
                    size: a,
                    end: d,
                    key: e,
                    lane: f,
                  };
                }
                return (this.measurementsCache = u), u;
              },
              { key: !1, debug: () => this.options.debug },
            )),
            (this.calculateRange = i(
              () => [
                this.getMeasurements(),
                this.getSize(),
                this.getScrollOffset(),
              ],
              (e, t, n) =>
                (this.range =
                  e.length > 0 && t > 0
                    ? (function ({
                        measurements: e,
                        outerSize: t,
                        scrollOffset: n,
                      }) {
                        const r = e.length - 1,
                          o = (t) => e[t].start,
                          i = g(0, r, o, n);
                        let s = i;
                        for (; s < r && e[s].end < n + t; ) s++;
                        return { startIndex: i, endIndex: s };
                      })({ measurements: e, outerSize: t, scrollOffset: n })
                    : null),
              { key: !1, debug: () => this.options.debug },
            )),
            (this.getIndexes = i(
              () => [
                this.options.rangeExtractor,
                this.calculateRange(),
                this.options.overscan,
                this.options.count,
              ],
              (e, t, n, r) =>
                null === t
                  ? []
                  : e({
                      startIndex: t.startIndex,
                      endIndex: t.endIndex,
                      overscan: n,
                      count: r,
                    }),
              { key: !1, debug: () => this.options.debug },
            )),
            (this.indexFromElement = (e) => {
              const t = this.options.indexAttribute,
                n = e.getAttribute(t);
              return n
                ? parseInt(n, 10)
                : (console.warn(
                    `Missing attribute name '${t}={index}' on measured element.`,
                  ),
                  -1);
            }),
            (this._measureElement = (e, t) => {
              const n = this.indexFromElement(e),
                r = this.measurementsCache[n];
              if (!r) return;
              const o = r.key,
                i = this.elementsCache.get(o);
              i !== e &&
                (i && this.observer.unobserve(i),
                this.observer.observe(e),
                this.elementsCache.set(o, e)),
                e.isConnected &&
                  this.resizeItem(n, this.options.measureElement(e, t, this));
            }),
            (this.resizeItem = (e, t) => {
              const n = this.measurementsCache[e];
              if (!n) return;
              const r = t - (this.itemSizeCache.get(n.key) ?? n.size);
              0 !== r &&
                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                  ? this.shouldAdjustScrollPositionOnItemSizeChange(n, r, this)
                  : n.start <
                    this.getScrollOffset() + this.scrollAdjustments) &&
                  this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: (this.scrollAdjustments += r),
                    behavior: void 0,
                  }),
                this.pendingMeasuredCacheIndexes.push(n.index),
                (this.itemSizeCache = new Map(
                  this.itemSizeCache.set(n.key, t),
                )),
                this.notify(!1));
            }),
            (this.measureElement = (e) => {
              e
                ? this._measureElement(e, void 0)
                : this.elementsCache.forEach((e, t) => {
                    e.isConnected ||
                      (this.observer.unobserve(e),
                      this.elementsCache.delete(t));
                  });
            }),
            (this.getVirtualItems = i(
              () => [this.getIndexes(), this.getMeasurements()],
              (e, t) => {
                const n = [];
                for (let r = 0, o = e.length; r < o; r++) {
                  const o = t[e[r]];
                  n.push(o);
                }
                return n;
              },
              { key: !1, debug: () => this.options.debug },
            )),
            (this.getVirtualItemForOffset = (e) => {
              const t = this.getMeasurements();
              if (0 !== t.length)
                return s(t[g(0, t.length - 1, (e) => s(t[e]).start, e)]);
            }),
            (this.getOffsetForAlignment = (e, t) => {
              const n = this.getSize(),
                r = this.getScrollOffset();
              "auto" === t &&
                (t = e <= r ? "start" : e >= r + n ? "end" : "start"),
                "start" === t ||
                  ("end" === t ? (e -= n) : "center" === t && (e -= n / 2));
              const o = this.options.horizontal
                  ? "scrollWidth"
                  : "scrollHeight",
                i =
                  (this.scrollElement
                    ? "document" in this.scrollElement
                      ? this.scrollElement.document.documentElement[o]
                      : this.scrollElement[o]
                    : 0) - n;
              return Math.max(Math.min(i, e), 0);
            }),
            (this.getOffsetForIndex = (e, t = "auto") => {
              e = Math.max(0, Math.min(e, this.options.count - 1));
              const n = this.measurementsCache[e];
              if (!n) return;
              const r = this.getSize(),
                o = this.getScrollOffset();
              if ("auto" === t)
                if (n.end >= o + r - this.options.scrollPaddingEnd) t = "end";
                else {
                  if (!(n.start <= o + this.options.scrollPaddingStart))
                    return [o, t];
                  t = "start";
                }
              const i =
                "end" === t
                  ? n.end + this.options.scrollPaddingEnd
                  : n.start - this.options.scrollPaddingStart;
              return [this.getOffsetForAlignment(i, t), t];
            }),
            (this.isDynamicMode = () => this.elementsCache.size > 0),
            (this.cancelScrollToIndex = () => {
              null !== this.scrollToIndexTimeoutId &&
                this.targetWindow &&
                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),
                (this.scrollToIndexTimeoutId = null));
            }),
            (this.scrollToOffset = (
              e,
              { align: t = "start", behavior: n } = {},
            ) => {
              this.cancelScrollToIndex(),
                "smooth" === n &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  ),
                this._scrollToOffset(this.getOffsetForAlignment(e, t), {
                  adjustments: void 0,
                  behavior: n,
                });
            }),
            (this.scrollToIndex = (
              e,
              { align: t = "auto", behavior: n } = {},
            ) => {
              (e = Math.max(0, Math.min(e, this.options.count - 1))),
                this.cancelScrollToIndex(),
                "smooth" === n &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  );
              const r = this.getOffsetForIndex(e, t);
              if (!r) return;
              const [o, i] = r;
              this._scrollToOffset(o, { adjustments: void 0, behavior: n }),
                "smooth" !== n &&
                  this.isDynamicMode() &&
                  this.targetWindow &&
                  (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(
                    () => {
                      this.scrollToIndexTimeoutId = null;
                      if (this.elementsCache.has(this.options.getItemKey(e))) {
                        const [o] = s(this.getOffsetForIndex(e, i));
                        (t = o),
                          (r = this.getScrollOffset()),
                          Math.abs(t - r) < 1 ||
                            this.scrollToIndex(e, { align: i, behavior: n });
                      } else this.scrollToIndex(e, { align: i, behavior: n });
                      var t, r;
                    },
                  ));
            }),
            (this.scrollBy = (e, { behavior: t } = {}) => {
              this.cancelScrollToIndex(),
                "smooth" === t &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size.",
                  ),
                this._scrollToOffset(this.getScrollOffset() + e, {
                  adjustments: void 0,
                  behavior: t,
                });
            }),
            (this.getTotalSize = () => {
              var e;
              const t = this.getMeasurements();
              let n;
              return (
                (n =
                  0 === t.length
                    ? this.options.paddingStart
                    : 1 === this.options.lanes
                      ? ((null == (e = t[t.length - 1]) ? void 0 : e.end) ?? 0)
                      : Math.max(
                          ...t.slice(-this.options.lanes).map((e) => e.end),
                        )),
                n - this.options.scrollMargin + this.options.paddingEnd
              );
            }),
            (this._scrollToOffset = (e, { adjustments: t, behavior: n }) => {
              this.options.scrollToFn(e, { behavior: n, adjustments: t }, this);
            }),
            (this.measure = () => {
              (this.itemSizeCache = new Map()), this.notify(!1);
            }),
            this.setOptions(e);
        }
      }
      const g = (e, t, n, r) => {
        for (; e <= t; ) {
          const o = ((e + t) / 2) | 0,
            i = n(o);
          if (i < r) e = o + 1;
          else {
            if (!(i > r)) return o;
            t = o - 1;
          }
        }
        return e > 0 ? e - 1 : 0;
      };
      const b =
        "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      function y(e) {
        const t = r.useReducer(() => ({}), {})[1],
          n = {
            ...e,
            onChange: (n, r) => {
              var i;
              r ? (0, o.flushSync)(t) : t(),
                null == (i = e.onChange) || i.call(e, n, r);
            },
          },
          [i] = r.useState(() => new p(n));
        return (
          i.setOptions(n),
          r.useEffect(() => i._didMount(), []),
          b(() => i._willUpdate()),
          i
        );
      }
      function w(e) {
        return y({
          observeElementRect: a,
          observeElementOffset: h,
          scrollToFn: v,
          ...e,
        });
      }
    },
  },
]);
