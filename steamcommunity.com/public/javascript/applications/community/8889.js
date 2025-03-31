/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8889],
  {
    38889: (t, e, n) => {
      n.d(e, { ll: () => A, rD: () => B, UU: () => H, Ej: () => W });
      const o = Math.min,
        i = Math.max,
        r = Math.round,
        l = Math.floor,
        c = (t) => ({ x: t, y: t }),
        s = { left: "right", right: "left", bottom: "top", top: "bottom" },
        a = { start: "end", end: "start" };
      function f(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function u(t) {
        return t.split("-")[0];
      }
      function d(t) {
        return t.split("-")[1];
      }
      function h(t) {
        return "y" === t ? "height" : "width";
      }
      function p(t) {
        return ["top", "bottom"].includes(u(t)) ? "y" : "x";
      }
      function m(t) {
        return "x" === p(t) ? "y" : "x";
      }
      function g(t) {
        return t.replace(/start|end/g, (t) => a[t]);
      }
      function y(t) {
        return t.replace(/left|right|bottom|top/g, (t) => s[t]);
      }
      function w(t) {
        const { x: e, y: n, width: o, height: i } = t;
        return {
          width: o,
          height: i,
          top: n,
          left: e,
          right: e + o,
          bottom: n + i,
          x: e,
          y: n,
        };
      }
      function v(t, e, n) {
        let { reference: o, floating: i } = t;
        const r = p(e),
          l = m(e),
          c = h(l),
          s = u(e),
          a = "y" === r,
          f = o.x + o.width / 2 - i.width / 2,
          g = o.y + o.height / 2 - i.height / 2,
          y = o[c] / 2 - i[c] / 2;
        let w;
        switch (s) {
          case "top":
            w = { x: f, y: o.y - i.height };
            break;
          case "bottom":
            w = { x: f, y: o.y + o.height };
            break;
          case "right":
            w = { x: o.x + o.width, y: g };
            break;
          case "left":
            w = { x: o.x - i.width, y: g };
            break;
          default:
            w = { x: o.x, y: o.y };
        }
        switch (d(e)) {
          case "start":
            w[l] -= y * (n && a ? -1 : 1);
            break;
          case "end":
            w[l] += y * (n && a ? -1 : 1);
        }
        return w;
      }
      async function b(t, e) {
        var n;
        void 0 === e && (e = {});
        const {
            x: o,
            y: i,
            platform: r,
            rects: l,
            elements: c,
            strategy: s,
          } = t,
          {
            boundary: a = "clippingAncestors",
            rootBoundary: u = "viewport",
            elementContext: d = "floating",
            altBoundary: h = !1,
            padding: p = 0,
          } = f(e, t),
          m = (function (t) {
            return "number" != typeof t
              ? (function (t) {
                  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
                })(t)
              : { top: t, right: t, bottom: t, left: t };
          })(p),
          g = c[h ? ("floating" === d ? "reference" : "floating") : d],
          y = w(
            await r.getClippingRect({
              element:
                null ==
                  (n = await (null == r.isElement ? void 0 : r.isElement(g))) ||
                n
                  ? g
                  : g.contextElement ||
                    (await (null == r.getDocumentElement
                      ? void 0
                      : r.getDocumentElement(c.floating))),
              boundary: a,
              rootBoundary: u,
              strategy: s,
            }),
          ),
          v = "floating" === d ? { ...l.floating, x: o, y: i } : l.reference,
          b = await (null == r.getOffsetParent
            ? void 0
            : r.getOffsetParent(c.floating)),
          x = ((await (null == r.isElement ? void 0 : r.isElement(b))) &&
            (await (null == r.getScale ? void 0 : r.getScale(b)))) || {
            x: 1,
            y: 1,
          },
          L = w(
            r.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
                  rect: v,
                  offsetParent: b,
                  strategy: s,
                })
              : v,
          );
        return {
          top: (y.top - L.top + m.top) / x.y,
          bottom: (L.bottom - y.bottom + m.bottom) / x.y,
          left: (y.left - L.left + m.left) / x.x,
          right: (L.right - y.right + m.right) / x.x,
        };
      }
      var x = n(977);
      function L(t) {
        const e = (0, x.L9)(t);
        let n = parseFloat(e.width) || 0,
          o = parseFloat(e.height) || 0;
        const i = (0, x.sb)(t),
          l = i ? t.offsetWidth : n,
          c = i ? t.offsetHeight : o,
          s = r(n) !== l || r(o) !== c;
        return s && ((n = l), (o = c)), { width: n, height: o, $: s };
      }
      function R(t) {
        return (0, x.vq)(t) ? t : t.contextElement;
      }
      function T(t) {
        const e = R(t);
        if (!(0, x.sb)(e)) return c(1);
        const n = e.getBoundingClientRect(),
          { width: o, height: i, $: l } = L(e);
        let s = (l ? r(n.width) : n.width) / o,
          a = (l ? r(n.height) : n.height) / i;
        return (
          (s && Number.isFinite(s)) || (s = 1),
          (a && Number.isFinite(a)) || (a = 1),
          { x: s, y: a }
        );
      }
      const E = c(0);
      function k(t) {
        const e = (0, x.zk)(t);
        return (0, x.Tc)() && e.visualViewport
          ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop }
          : E;
      }
      function C(t, e, n, o) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const i = t.getBoundingClientRect(),
          r = R(t);
        let l = c(1);
        e && (o ? (0, x.vq)(o) && (l = T(o)) : (l = T(t)));
        const s = (function (t, e, n) {
          return (
            void 0 === e && (e = !1), !(!n || (e && n !== (0, x.zk)(t))) && e
          );
        })(r, n, o)
          ? k(r)
          : c(0);
        let a = (i.left + s.x) / l.x,
          f = (i.top + s.y) / l.y,
          u = i.width / l.x,
          d = i.height / l.y;
        if (r) {
          const t = (0, x.zk)(r),
            e = o && (0, x.vq)(o) ? (0, x.zk)(o) : o;
          let n = t.frameElement;
          for (; n && o && e !== t; ) {
            const t = T(n),
              e = n.getBoundingClientRect(),
              o = (0, x.L9)(n),
              i = e.left + (n.clientLeft + parseFloat(o.paddingLeft)) * t.x,
              r = e.top + (n.clientTop + parseFloat(o.paddingTop)) * t.y;
            (a *= t.x),
              (f *= t.y),
              (u *= t.x),
              (d *= t.y),
              (a += i),
              (f += r),
              (n = (0, x.zk)(n).frameElement);
          }
        }
        return w({ width: u, height: d, x: a, y: f });
      }
      function P(t) {
        return C((0, x.ep)(t)).left + (0, x.CP)(t).scrollLeft;
      }
      function D(t, e, n) {
        let o;
        if ("viewport" === e)
          o = (function (t, e) {
            const n = (0, x.zk)(t),
              o = (0, x.ep)(t),
              i = n.visualViewport;
            let r = o.clientWidth,
              l = o.clientHeight,
              c = 0,
              s = 0;
            if (i) {
              (r = i.width), (l = i.height);
              const t = (0, x.Tc)();
              (!t || (t && "fixed" === e)) &&
                ((c = i.offsetLeft), (s = i.offsetTop));
            }
            return { width: r, height: l, x: c, y: s };
          })(t, n);
        else if ("document" === e)
          o = (function (t) {
            const e = (0, x.ep)(t),
              n = (0, x.CP)(t),
              o = t.ownerDocument.body,
              r = i(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
              l = i(
                e.scrollHeight,
                e.clientHeight,
                o.scrollHeight,
                o.clientHeight,
              );
            let c = -n.scrollLeft + P(t);
            const s = -n.scrollTop;
            return (
              "rtl" === (0, x.L9)(o).direction &&
                (c += i(e.clientWidth, o.clientWidth) - r),
              { width: r, height: l, x: c, y: s }
            );
          })((0, x.ep)(t));
        else if ((0, x.vq)(e))
          o = (function (t, e) {
            const n = C(t, !0, "fixed" === e),
              o = n.top + t.clientTop,
              i = n.left + t.clientLeft,
              r = (0, x.sb)(t) ? T(t) : c(1);
            return {
              width: t.clientWidth * r.x,
              height: t.clientHeight * r.y,
              x: i * r.x,
              y: o * r.y,
            };
          })(e, n);
        else {
          const n = k(t);
          o = { ...e, x: e.x - n.x, y: e.y - n.y };
        }
        return w(o);
      }
      function S(t, e) {
        const n = (0, x.$4)(t);
        return (
          !(n === e || !(0, x.vq)(n) || (0, x.eu)(n)) &&
          ("fixed" === (0, x.L9)(n).position || S(n, e))
        );
      }
      function q(t, e, n) {
        const o = (0, x.sb)(e),
          i = (0, x.ep)(e),
          r = "fixed" === n,
          l = C(t, !0, r, e);
        let s = { scrollLeft: 0, scrollTop: 0 };
        const a = c(0);
        if (o || (!o && !r))
          if (
            (("body" !== (0, x.mq)(e) || (0, x.ZU)(i)) && (s = (0, x.CP)(e)), o)
          ) {
            const t = C(e, !0, r, e);
            (a.x = t.x + e.clientLeft), (a.y = t.y + e.clientTop);
          } else i && (a.x = P(i));
        return {
          x: l.left + s.scrollLeft - a.x,
          y: l.top + s.scrollTop - a.y,
          width: l.width,
          height: l.height,
        };
      }
      function z(t, e) {
        return (0, x.sb)(t) && "fixed" !== (0, x.L9)(t).position
          ? e
            ? e(t)
            : t.offsetParent
          : null;
      }
      function F(t, e) {
        const n = (0, x.zk)(t);
        if (!(0, x.sb)(t)) return n;
        let o = z(t, e);
        for (; o && (0, x.Lv)(o) && "static" === (0, x.L9)(o).position; )
          o = z(o, e);
        return o &&
          ("html" === (0, x.mq)(o) ||
            ("body" === (0, x.mq)(o) &&
              "static" === (0, x.L9)(o).position &&
              !(0, x.sQ)(o)))
          ? n
          : o || (0, x.gJ)(t) || n;
      }
      const O = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
          let { rect: e, offsetParent: n, strategy: o } = t;
          const i = (0, x.sb)(n),
            r = (0, x.ep)(n);
          if (n === r) return e;
          let l = { scrollLeft: 0, scrollTop: 0 },
            s = c(1);
          const a = c(0);
          if (
            (i || (!i && "fixed" !== o)) &&
            (("body" !== (0, x.mq)(n) || (0, x.ZU)(r)) && (l = (0, x.CP)(n)),
            (0, x.sb)(n))
          ) {
            const t = C(n);
            (s = T(n)), (a.x = t.x + n.clientLeft), (a.y = t.y + n.clientTop);
          }
          return {
            width: e.width * s.x,
            height: e.height * s.y,
            x: e.x * s.x - l.scrollLeft * s.x + a.x,
            y: e.y * s.y - l.scrollTop * s.y + a.y,
          };
        },
        getDocumentElement: x.ep,
        getClippingRect: function (t) {
          let { element: e, boundary: n, rootBoundary: r, strategy: l } = t;
          const c = [
              ...("clippingAncestors" === n
                ? (function (t, e) {
                    const n = e.get(t);
                    if (n) return n;
                    let o = (0, x.v9)(t, [], !1).filter(
                        (t) => (0, x.vq)(t) && "body" !== (0, x.mq)(t),
                      ),
                      i = null;
                    const r = "fixed" === (0, x.L9)(t).position;
                    let l = r ? (0, x.$4)(t) : t;
                    for (; (0, x.vq)(l) && !(0, x.eu)(l); ) {
                      const e = (0, x.L9)(l),
                        n = (0, x.sQ)(l);
                      n || "fixed" !== e.position || (i = null),
                        (
                          r
                            ? !n && !i
                            : (!n &&
                                "static" === e.position &&
                                i &&
                                ["absolute", "fixed"].includes(i.position)) ||
                              ((0, x.ZU)(l) && !n && S(t, l))
                        )
                          ? (o = o.filter((t) => t !== l))
                          : (i = e),
                        (l = (0, x.$4)(l));
                    }
                    return e.set(t, o), o;
                  })(e, this._c)
                : [].concat(n)),
              r,
            ],
            s = c[0],
            a = c.reduce(
              (t, n) => {
                const r = D(e, n, l);
                return (
                  (t.top = i(r.top, t.top)),
                  (t.right = o(r.right, t.right)),
                  (t.bottom = o(r.bottom, t.bottom)),
                  (t.left = i(r.left, t.left)),
                  t
                );
              },
              D(e, s, l),
            );
          return {
            width: a.right - a.left,
            height: a.bottom - a.top,
            x: a.left,
            y: a.top,
          };
        },
        getOffsetParent: F,
        getElementRects: async function (t) {
          let { reference: e, floating: n, strategy: o } = t;
          const i = this.getOffsetParent || F,
            r = this.getDimensions;
          return {
            reference: q(e, await i(n), o),
            floating: { x: 0, y: 0, ...(await r(n)) },
          };
        },
        getClientRects: function (t) {
          return Array.from(t.getClientRects());
        },
        getDimensions: function (t) {
          const { width: e, height: n } = L(t);
          return { width: e, height: n };
        },
        getScale: T,
        isElement: x.vq,
        isRTL: function (t) {
          return "rtl" === (0, x.L9)(t).direction;
        },
      };
      function A(t, e, n, r) {
        void 0 === r && (r = {});
        const {
            ancestorScroll: c = !0,
            ancestorResize: s = !0,
            elementResize: a = "function" == typeof ResizeObserver,
            layoutShift: f = "function" == typeof IntersectionObserver,
            animationFrame: u = !1,
          } = r,
          d = R(t),
          h = c || s ? [...(d ? (0, x.v9)(d) : []), ...(0, x.v9)(e)] : [];
        h.forEach((t) => {
          c && t.addEventListener("scroll", n, { passive: !0 }),
            s && t.addEventListener("resize", n);
        });
        const p =
          d && f
            ? (function (t, e) {
                let n,
                  r = null;
                const c = (0, x.ep)(t);
                function s() {
                  clearTimeout(n), r && r.disconnect(), (r = null);
                }
                return (
                  (function a(f, u) {
                    void 0 === f && (f = !1), void 0 === u && (u = 1), s();
                    const {
                      left: d,
                      top: h,
                      width: p,
                      height: m,
                    } = t.getBoundingClientRect();
                    if ((f || e(), !p || !m)) return;
                    const g = {
                      rootMargin:
                        -l(h) +
                        "px " +
                        -l(c.clientWidth - (d + p)) +
                        "px " +
                        -l(c.clientHeight - (h + m)) +
                        "px " +
                        -l(d) +
                        "px",
                      threshold: i(0, o(1, u)) || 1,
                    };
                    let y = !0;
                    function w(t) {
                      const e = t[0].intersectionRatio;
                      if (e !== u) {
                        if (!y) return a();
                        e
                          ? a(!1, e)
                          : (n = setTimeout(() => {
                              a(!1, 1e-7);
                            }, 100));
                      }
                      y = !1;
                    }
                    try {
                      r = new IntersectionObserver(w, {
                        ...g,
                        root: c.ownerDocument,
                      });
                    } catch (t) {
                      r = new IntersectionObserver(w, g);
                    }
                    r.observe(t);
                  })(!0),
                  s
                );
              })(d, n)
            : null;
        let m,
          g = -1,
          y = null;
        a &&
          ((y = new ResizeObserver((t) => {
            let [o] = t;
            o &&
              o.target === d &&
              y &&
              (y.unobserve(e),
              cancelAnimationFrame(g),
              (g = requestAnimationFrame(() => {
                y && y.observe(e);
              }))),
              n();
          })),
          d && !u && y.observe(d),
          y.observe(e));
        let w = u ? C(t) : null;
        return (
          u &&
            (function e() {
              const o = C(t);
              !w ||
                (o.x === w.x &&
                  o.y === w.y &&
                  o.width === w.width &&
                  o.height === w.height) ||
                n();
              (w = o), (m = requestAnimationFrame(e));
            })(),
          n(),
          () => {
            h.forEach((t) => {
              c && t.removeEventListener("scroll", n),
                s && t.removeEventListener("resize", n);
            }),
              p && p(),
              y && y.disconnect(),
              (y = null),
              u && cancelAnimationFrame(m);
          }
        );
      }
      const H = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "flip",
              options: t,
              async fn(e) {
                var n, o;
                const {
                    placement: i,
                    middlewareData: r,
                    rects: l,
                    initialPlacement: c,
                    platform: s,
                    elements: a,
                  } = e,
                  {
                    mainAxis: p = !0,
                    crossAxis: w = !0,
                    fallbackPlacements: v,
                    fallbackStrategy: x = "bestFit",
                    fallbackAxisSideDirection: L = "none",
                    flipAlignment: R = !0,
                    ...T
                  } = f(t, e);
                if (null != (n = r.arrow) && n.alignmentOffset) return {};
                const E = u(i),
                  k = u(c) === c,
                  C = await (null == s.isRTL ? void 0 : s.isRTL(a.floating)),
                  P =
                    v ||
                    (k || !R
                      ? [y(c)]
                      : (function (t) {
                          const e = y(t);
                          return [g(t), e, g(e)];
                        })(c));
                v ||
                  "none" === L ||
                  P.push(
                    ...(function (t, e, n, o) {
                      const i = d(t);
                      let r = (function (t, e, n) {
                        const o = ["left", "right"],
                          i = ["right", "left"],
                          r = ["top", "bottom"],
                          l = ["bottom", "top"];
                        switch (t) {
                          case "top":
                          case "bottom":
                            return n ? (e ? i : o) : e ? o : i;
                          case "left":
                          case "right":
                            return e ? r : l;
                          default:
                            return [];
                        }
                      })(u(t), "start" === n, o);
                      return (
                        i &&
                          ((r = r.map((t) => t + "-" + i)),
                          e && (r = r.concat(r.map(g)))),
                        r
                      );
                    })(c, R, L, C),
                  );
                const D = [c, ...P],
                  S = await b(e, T),
                  q = [];
                let z = (null == (o = r.flip) ? void 0 : o.overflows) || [];
                if ((p && q.push(S[E]), w)) {
                  const t = (function (t, e, n) {
                    void 0 === n && (n = !1);
                    const o = d(t),
                      i = m(t),
                      r = h(i);
                    let l =
                      "x" === i
                        ? o === (n ? "end" : "start")
                          ? "right"
                          : "left"
                        : "start" === o
                          ? "bottom"
                          : "top";
                    return (
                      e.reference[r] > e.floating[r] && (l = y(l)), [l, y(l)]
                    );
                  })(i, l, C);
                  q.push(S[t[0]], S[t[1]]);
                }
                if (
                  ((z = [...z, { placement: i, overflows: q }]),
                  !q.every((t) => t <= 0))
                ) {
                  var F, O;
                  const t =
                      ((null == (F = r.flip) ? void 0 : F.index) || 0) + 1,
                    e = D[t];
                  if (e)
                    return {
                      data: { index: t, overflows: z },
                      reset: { placement: e },
                    };
                  let n =
                    null ==
                    (O = z
                      .filter((t) => t.overflows[0] <= 0)
                      .sort((t, e) => t.overflows[1] - e.overflows[1])[0])
                      ? void 0
                      : O.placement;
                  if (!n)
                    switch (x) {
                      case "bestFit": {
                        var A;
                        const t =
                          null ==
                          (A = z
                            .map((t) => [
                              t.placement,
                              t.overflows
                                .filter((t) => t > 0)
                                .reduce((t, e) => t + e, 0),
                            ])
                            .sort((t, e) => t[1] - e[1])[0])
                            ? void 0
                            : A[0];
                        t && (n = t);
                        break;
                      }
                      case "initialPlacement":
                        n = c;
                    }
                  if (i !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }
          );
        },
        W = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "size",
              options: t,
              async fn(e) {
                const { placement: n, rects: r, platform: l, elements: c } = e,
                  { apply: s = () => {}, ...a } = f(t, e),
                  h = await b(e, a),
                  m = u(n),
                  g = d(n),
                  y = "y" === p(n),
                  { width: w, height: v } = r.floating;
                let x, L;
                "top" === m || "bottom" === m
                  ? ((x = m),
                    (L =
                      g ===
                      ((await (null == l.isRTL ? void 0 : l.isRTL(c.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((L = m), (x = "end" === g ? "top" : "bottom"));
                const R = v - h[x],
                  T = w - h[L],
                  E = !e.middlewareData.shift;
                let k = R,
                  C = T;
                if (y) {
                  const t = w - h.left - h.right;
                  C = g || E ? o(T, t) : t;
                } else {
                  const t = v - h.top - h.bottom;
                  k = g || E ? o(R, t) : t;
                }
                if (E && !g) {
                  const t = i(h.left, 0),
                    e = i(h.right, 0),
                    n = i(h.top, 0),
                    o = i(h.bottom, 0);
                  y
                    ? (C =
                        w -
                        2 * (0 !== t || 0 !== e ? t + e : i(h.left, h.right)))
                    : (k =
                        v -
                        2 * (0 !== n || 0 !== o ? n + o : i(h.top, h.bottom)));
                }
                await s({ ...e, availableWidth: C, availableHeight: k });
                const P = await l.getDimensions(c.floating);
                return w !== P.width || v !== P.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        },
        B = (t, e, n) => {
          const o = new Map(),
            i = { platform: O, ...n },
            r = { ...i.platform, _c: o };
          return (async (t, e, n) => {
            const {
                placement: o = "bottom",
                strategy: i = "absolute",
                middleware: r = [],
                platform: l,
              } = n,
              c = r.filter(Boolean),
              s = await (null == l.isRTL ? void 0 : l.isRTL(e));
            let a = await l.getElementRects({
                reference: t,
                floating: e,
                strategy: i,
              }),
              { x: f, y: u } = v(a, o, s),
              d = o,
              h = {},
              p = 0;
            for (let n = 0; n < c.length; n++) {
              const { name: r, fn: m } = c[n],
                {
                  x: g,
                  y,
                  data: w,
                  reset: b,
                } = await m({
                  x: f,
                  y: u,
                  initialPlacement: o,
                  placement: d,
                  strategy: i,
                  middlewareData: h,
                  rects: a,
                  platform: l,
                  elements: { reference: t, floating: e },
                });
              (f = null != g ? g : f),
                (u = null != y ? y : u),
                (h = { ...h, [r]: { ...h[r], ...w } }),
                b &&
                  p <= 50 &&
                  (p++,
                  "object" == typeof b &&
                    (b.placement && (d = b.placement),
                    b.rects &&
                      (a =
                        !0 === b.rects
                          ? await l.getElementRects({
                              reference: t,
                              floating: e,
                              strategy: i,
                            })
                          : b.rects),
                    ({ x: f, y: u } = v(a, d, s))),
                  (n = -1));
            }
            return { x: f, y: u, placement: d, strategy: i, middlewareData: h };
          })(t, e, { ...i, platform: r });
        };
    },
    977: (t, e, n) => {
      function o() {
        return "undefined" != typeof window;
      }
      function i(t) {
        return c(t) ? (t.nodeName || "").toLowerCase() : "#document";
      }
      function r(t) {
        var e;
        return (
          (null == t || null == (e = t.ownerDocument)
            ? void 0
            : e.defaultView) || window
        );
      }
      function l(t) {
        var e;
        return null ==
          (e = (c(t) ? t.ownerDocument : t.document) || window.document)
          ? void 0
          : e.documentElement;
      }
      function c(t) {
        return !!o() && (t instanceof Node || t instanceof r(t).Node);
      }
      function s(t) {
        return !!o() && (t instanceof Element || t instanceof r(t).Element);
      }
      function a(t) {
        return (
          !!o() && (t instanceof HTMLElement || t instanceof r(t).HTMLElement)
        );
      }
      function f(t) {
        return (
          !(!o() || "undefined" == typeof ShadowRoot) &&
          (t instanceof ShadowRoot || t instanceof r(t).ShadowRoot)
        );
      }
      function u(t) {
        const { overflow: e, overflowX: n, overflowY: o, display: i } = w(t);
        return (
          /auto|scroll|overlay|hidden|clip/.test(e + o + n) &&
          !["inline", "contents"].includes(i)
        );
      }
      function d(t) {
        return ["table", "td", "th"].includes(i(t));
      }
      function h(t) {
        return [":popover-open", ":modal"].some((e) => {
          try {
            return t.matches(e);
          } catch (t) {
            return !1;
          }
        });
      }
      function p(t) {
        const e = g(),
          n = s(t) ? w(t) : t;
        return (
          ["transform", "translate", "scale", "rotate", "perspective"].some(
            (t) => !!n[t] && "none" !== n[t],
          ) ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!e && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!e && !!n.filter && "none" !== n.filter) ||
          [
            "transform",
            "translate",
            "scale",
            "rotate",
            "perspective",
            "filter",
          ].some((t) => (n.willChange || "").includes(t)) ||
          ["paint", "layout", "strict", "content"].some((t) =>
            (n.contain || "").includes(t),
          )
        );
      }
      function m(t) {
        let e = b(t);
        for (; a(e) && !y(e); ) {
          if (p(e)) return e;
          if (h(e)) return null;
          e = b(e);
        }
        return null;
      }
      function g() {
        return (
          !("undefined" == typeof CSS || !CSS.supports) &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function y(t) {
        return ["html", "body", "#document"].includes(i(t));
      }
      function w(t) {
        return r(t).getComputedStyle(t);
      }
      function v(t) {
        return s(t)
          ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
          : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
      }
      function b(t) {
        if ("html" === i(t)) return t;
        const e = t.assignedSlot || t.parentNode || (f(t) && t.host) || l(t);
        return f(e) ? e.host : e;
      }
      function x(t) {
        const e = b(t);
        return y(e)
          ? t.ownerDocument
            ? t.ownerDocument.body
            : t.body
          : a(e) && u(e)
            ? e
            : x(e);
      }
      function L(t, e, n) {
        var o;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const i = x(t),
          l = i === (null == (o = t.ownerDocument) ? void 0 : o.body),
          c = r(i);
        if (l) {
          const t = (function (t) {
            return t.parent && Object.getPrototypeOf(t.parent)
              ? t.frameElement
              : null;
          })(c);
          return e.concat(
            c,
            c.visualViewport || [],
            u(i) ? i : [],
            t && n ? L(t) : [],
          );
        }
        return e.concat(i, L(i, [], n));
      }
      n.d(e, {
        $4: () => b,
        CP: () => v,
        L9: () => w,
        Lv: () => d,
        Ng: () => f,
        Tc: () => g,
        ZU: () => u,
        ep: () => l,
        eu: () => y,
        gJ: () => m,
        mq: () => i,
        sQ: () => p,
        sb: () => a,
        v9: () => L,
        vq: () => s,
        zk: () => r,
      });
    },
  },
]);
