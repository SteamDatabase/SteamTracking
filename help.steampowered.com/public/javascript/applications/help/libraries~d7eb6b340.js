/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkHelp = self.webpackChunkHelp || []).push([
  [7767],
  {
    8889: (e, t, n) => {
      n.d(t, {
        ll: () => U,
        rD: () => Y,
        UU: () => $,
        cY: () => _,
        iD: () => H,
        BN: () => V,
        Ej: () => K,
      });
      const r = Math.min,
        o = Math.max,
        i = Math.round,
        u = Math.floor,
        c = (e) => ({ x: e, y: e }),
        l = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function s(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function a(e) {
        return e.split("-")[0];
      }
      function f(e) {
        return e.split("-")[1];
      }
      function d(e) {
        return "x" === e ? "y" : "x";
      }
      function p(e) {
        return "y" === e ? "height" : "width";
      }
      function v(e) {
        const t = e[0];
        return "t" === t || "b" === t ? "y" : "x";
      }
      function m(e) {
        return d(v(e));
      }
      function h(e) {
        return e.includes("start")
          ? e.replace("start", "end")
          : e.replace("end", "start");
      }
      const g = ["left", "right"],
        y = ["right", "left"],
        w = ["top", "bottom"],
        b = ["bottom", "top"];
      function x(e, t, n, r) {
        const o = f(e);
        let i = (function (e, t, n) {
          switch (e) {
            case "top":
            case "bottom":
              return n ? (t ? y : g) : t ? g : y;
            case "left":
            case "right":
              return t ? w : b;
            default:
              return [];
          }
        })(a(e), "start" === n, r);
        return (
          o && ((i = i.map((e) => e + "-" + o)), t && (i = i.concat(i.map(h)))),
          i
        );
      }
      function E(e) {
        const t = a(e);
        return l[t] + e.slice(t.length);
      }
      function R(e) {
        const { x: t, y: n, width: r, height: o } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        };
      }
      function L(e, t, n) {
        let { reference: r, floating: o } = e;
        const i = v(t),
          u = m(t),
          c = p(u),
          l = a(t),
          s = "y" === i,
          d = r.x + r.width / 2 - o.width / 2,
          h = r.y + r.height / 2 - o.height / 2,
          g = r[c] / 2 - o[c] / 2;
        let y;
        switch (l) {
          case "top":
            y = { x: d, y: r.y - o.height };
            break;
          case "bottom":
            y = { x: d, y: r.y + r.height };
            break;
          case "right":
            y = { x: r.x + r.width, y: h };
            break;
          case "left":
            y = { x: r.x - o.width, y: h };
            break;
          default:
            y = { x: r.x, y: r.y };
        }
        const w = f(t);
        return w && (y[u] += g * ("end" === w ? 1 : -1) * (n && s ? -1 : 1)), y;
      }
      async function k(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
            x: r,
            y: o,
            platform: i,
            rects: u,
            elements: c,
            strategy: l,
          } = e,
          {
            boundary: a = "clippingAncestors",
            rootBoundary: f = "viewport",
            elementContext: d = "floating",
            altBoundary: p = !1,
            padding: v = 0,
          } = s(t, e),
          m = (function (e) {
            return "number" != typeof e
              ? (function (e) {
                  var t, n, r, o;
                  return {
                    top: null != (t = e.top) ? t : 0,
                    right: null != (n = e.right) ? n : 0,
                    bottom: null != (r = e.bottom) ? r : 0,
                    left: null != (o = e.left) ? o : 0,
                  };
                })(e)
              : { top: e, right: e, bottom: e, left: e };
          })(v),
          h = c[p ? ("floating" === d ? "reference" : "floating") : d],
          g = R(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(h))) ||
                n
                  ? h
                  : h.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(c.floating))),
              boundary: a,
              rootBoundary: f,
              strategy: l,
            }),
          ),
          y =
            "floating" === d
              ? {
                  x: r,
                  y: o,
                  width: u.floating.width,
                  height: u.floating.height,
                }
              : u.reference,
          w = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(c.floating)),
          b = ((await (null == i.isElement ? void 0 : i.isElement(w))) &&
            (await (null == i.getScale ? void 0 : i.getScale(w)))) || {
            x: 1,
            y: 1,
          },
          x = R(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: c,
                  rect: y,
                  offsetParent: w,
                  strategy: l,
                })
              : y,
          );
        return {
          top: (g.top - x.top + m.top) / b.y,
          bottom: (x.bottom - g.bottom + m.bottom) / b.y,
          left: (g.left - x.left + m.left) / b.x,
          right: (x.right - g.right + m.right) / b.x,
        };
      }
      const C = new Set(["left", "top"]);
      var S = n(977);
      function T(e) {
        const t = (0, S.L9)(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = (0, S.sb)(e),
          u = o ? e.offsetWidth : n,
          c = o ? e.offsetHeight : r,
          l = i(n) !== u || i(r) !== c;
        return l && ((n = u), (r = c)), { width: n, height: r, $: l };
      }
      function A(e) {
        return (0, S.vq)(e) ? e : e.contextElement;
      }
      function M(e) {
        const t = A(e);
        if (!(0, S.sb)(t)) return c(1);
        const n = t.getBoundingClientRect(),
          { width: r, height: o, $: u } = T(t);
        let l = (u ? i(n.width) : n.width) / r,
          s = (u ? i(n.height) : n.height) / o;
        return (
          (l && Number.isFinite(l)) || (l = 1),
          (s && Number.isFinite(s)) || (s = 1),
          { x: l, y: s }
        );
      }
      const P = c(0);
      function O(e) {
        const t = (0, S.zk)(e);
        return (0, S.Tc)() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : P;
      }
      function D(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          i = A(e);
        let u = c(1);
        t && (r ? (0, S.vq)(r) && (u = M(r)) : (u = M(e)));
        const l = (function (e, t, n) {
          return void 0 === t && (t = !1), !!n && t && n === (0, S.zk)(e);
        })(i, n, r)
          ? O(i)
          : c(0);
        let s = (o.left + l.x) / u.x,
          a = (o.top + l.y) / u.y,
          f = o.width / u.x,
          d = o.height / u.y;
        if (i && r) {
          const e = (0, S.zk)(i),
            t = (0, S.vq)(r) ? (0, S.zk)(r) : r;
          let n = e,
            o = (0, S._m)(n);
          for (; o && t !== n; ) {
            const e = M(o),
              t = o.getBoundingClientRect(),
              r = (0, S.L9)(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              u = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (s *= e.x),
              (a *= e.y),
              (f *= e.x),
              (d *= e.y),
              (s += i),
              (a += u),
              (n = (0, S.zk)(o)),
              (o = (0, S._m)(n));
          }
        }
        return R({ width: f, height: d, x: s, y: a });
      }
      function N(e, t) {
        const n = (0, S.CP)(e).scrollLeft;
        return t ? t.left + n : D((0, S.ep)(e)).left + n;
      }
      function q(e, t) {
        const n = e.getBoundingClientRect();
        return { x: n.left + t.scrollLeft - N(e, n), y: n.top + t.scrollTop };
      }
      function I(e, t, n) {
        let r;
        if ("viewport" === t || "layoutViewport" === t)
          r = (function (e, t, n) {
            void 0 === n && (n = "viewport");
            const r = "layoutViewport" === n,
              o = (0, S.zk)(e),
              i = (0, S.ep)(e),
              u = o.visualViewport;
            let c = i.clientWidth,
              l = i.clientHeight,
              s = 0,
              a = 0;
            if (u) {
              const e = !(0, S.Tc)() || "fixed" === t;
              r
                ? e || ((s = -u.offsetLeft), (a = -u.offsetTop))
                : ((c = u.width),
                  (l = u.height),
                  e && ((s = u.offsetLeft), (a = u.offsetTop)));
            }
            if (N(i) <= 0) {
              const e = i.ownerDocument,
                t = e.body,
                n = getComputedStyle(t),
                r =
                  ("CSS1Compat" === e.compatMode &&
                    parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
                  0,
                o = Math.abs(i.clientWidth - t.clientWidth - r),
                u =
                  "stable both-edges" === getComputedStyle(i).scrollbarGutter
                    ? o / 2
                    : o;
              u <= 25 && (c -= u);
            }
            return { width: c, height: l, x: s, y: a };
          })(e, n, t);
        else if ("document" === t)
          r = (function (e) {
            const t = (0, S.CP)(e),
              n = e.ownerDocument.body,
              r = o(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
              i = o(
                e.scrollHeight,
                e.clientHeight,
                n.scrollHeight,
                n.clientHeight,
              );
            let u = -t.scrollLeft + N(e);
            const c = -t.scrollTop;
            return (
              "rtl" === (0, S.L9)(n).direction &&
                (u += o(e.clientWidth, n.clientWidth) - r),
              { width: r, height: i, x: u, y: c }
            );
          })((0, S.ep)(e));
        else if ((0, S.vq)(t))
          r = (function (e, t) {
            const n = D(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = M(e);
            return {
              width: e.clientWidth * i.x,
              height: e.clientHeight * i.y,
              x: o * i.x,
              y: r * i.y,
            };
          })(t, n);
        else {
          const n = O(e);
          r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
        }
        return R(r);
      }
      function F(e, t, n) {
        const r = (0, S.sb)(t),
          o = (0, S.ep)(t),
          i = "fixed" === n,
          u = D(e, !0, i, t);
        let l = { scrollLeft: 0, scrollTop: 0 };
        const s = c(0);
        if (
          (r || !i) &&
          (("body" !== (0, S.mq)(t) || (0, S.ZU)(o)) && (l = (0, S.CP)(t)), r)
        ) {
          const e = D(t, !0, i, t);
          (s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop);
        }
        !r && o && (s.x = N(o));
        const a = !o || r || i ? c(0) : q(o, l);
        return {
          x: u.left + l.scrollLeft - s.x - a.x,
          y: u.top + l.scrollTop - s.y - a.y,
          width: u.width,
          height: u.height,
        };
      }
      function B(e) {
        return "static" === (0, S.L9)(e).position;
      }
      function W(e, t) {
        if (!(0, S.sb)(e) || "fixed" === (0, S.L9)(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return (0, S.ep)(e) === n && (n = n.ownerDocument.body), n;
      }
      function z(e, t) {
        const n = (0, S.zk)(e);
        if ((0, S.Tf)(e)) return n;
        if (!(0, S.sb)(e)) {
          let t = (0, S.$4)(e);
          for (; t && !(0, S.eu)(t); ) {
            if ((0, S.vq)(t) && !B(t)) return t;
            t = (0, S.$4)(t);
          }
          return n;
        }
        let r = W(e, t);
        for (; r && (0, S.Lv)(r) && B(r); ) r = W(r, t);
        return r && (0, S.eu)(r) && B(r) && !(0, S.sQ)(r)
          ? n
          : r || (0, S.gJ)(e) || n;
      }
      const H = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
          let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
          const i = "fixed" === o,
            u = (0, S.ep)(r),
            l = !!t && (0, S.Tf)(t.floating);
          if (r === u || (l && i)) return n;
          let s = { scrollLeft: 0, scrollTop: 0 },
            a = c(1);
          const f = c(0),
            d = (0, S.sb)(r);
          if (
            (d || !i) &&
            (("body" !== (0, S.mq)(r) || (0, S.ZU)(u)) && (s = (0, S.CP)(r)), d)
          ) {
            const e = D(r);
            (a = M(r)), (f.x = e.x + r.clientLeft), (f.y = e.y + r.clientTop);
          }
          const p = !u || d || i ? c(0) : q(u, s);
          return {
            width: n.width * a.x,
            height: n.height * a.y,
            x: n.x * a.x - s.scrollLeft * a.x + f.x + p.x,
            y: n.y * a.y - s.scrollTop * a.y + f.y + p.y,
          };
        },
        getDocumentElement: S.ep,
        getClippingRect: function (e) {
          let { element: t, boundary: n, rootBoundary: i, strategy: u } = e;
          const c = [
              ...("clippingAncestors" === n
                ? (0, S.Tf)(t)
                  ? []
                  : (function (e, t) {
                      const n = t.get(e);
                      if (n) return n;
                      let r = (0, S.v9)(e, [], !1).filter(
                          (e) => (0, S.vq)(e) && "body" !== (0, S.mq)(e),
                        ),
                        o = null;
                      const i = "fixed" === (0, S.L9)(e).position;
                      let u = i ? (0, S.$4)(e) : e;
                      for (; (0, S.vq)(u) && !(0, S.eu)(u); ) {
                        const e = (0, S.L9)(u),
                          t = (0, S.sQ)(u),
                          n = o ? o.position : i ? "fixed" : "";
                        t ||
                        ("fixed" !== n &&
                          ("absolute" !== n || "static" !== e.position))
                          ? (o = e)
                          : (r = r.filter((e) => e !== u)),
                          (u = (0, S.$4)(u));
                      }
                      return t.set(e, r), r;
                    })(t, this._c)
                : [].concat(n)),
              i,
            ],
            l = I(t, c[0], u);
          let s = l.top,
            a = l.right,
            f = l.bottom,
            d = l.left;
          for (let e = 1; e < c.length; e++) {
            const n = I(t, c[e], u);
            (s = o(n.top, s)),
              (a = r(n.right, a)),
              (f = r(n.bottom, f)),
              (d = o(n.left, d));
          }
          return { width: a - d, height: f - s, x: d, y: s };
        },
        getOffsetParent: z,
        getElementRects: async function (e) {
          const t = this.getOffsetParent || z,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: F(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        getClientRects: function (e) {
          return e.getClientRects ? Array.from(e.getClientRects()) : [];
        },
        getDimensions: function (e) {
          const { width: t, height: n } = T(e);
          return { width: t, height: n };
        },
        getScale: M,
        isElement: S.vq,
        isRTL: function (e) {
          return "rtl" === (0, S.L9)(e).direction;
        },
      };
      function j(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      function U(e, t, n, i) {
        void 0 === i && (i = {});
        const {
            ancestorScroll: c = !0,
            ancestorResize: l = !0,
            elementResize: s = "function" == typeof ResizeObserver,
            layoutShift: a = "function" == typeof IntersectionObserver,
            animationFrame: f = !1,
          } = i,
          d = A(e),
          p =
            c || l
              ? [...(d ? (0, S.v9)(d) : []), ...(t ? (0, S.v9)(t) : [])]
              : [];
        p.forEach((e) => {
          c && e.addEventListener("scroll", n),
            l && e.addEventListener("resize", n);
        });
        const v =
          d && a
            ? (function (e, t, n) {
                let i,
                  c = null;
                const l = (0, S.ep)(e);
                function s() {
                  var e;
                  clearTimeout(i),
                    null == (e = c) || e.disconnect(),
                    (c = null);
                }
                function a(n, f) {
                  void 0 === n && (n = !1), void 0 === f && (f = 1), s();
                  const d = e.getBoundingClientRect(),
                    { left: p, top: v, width: m, height: h } = d;
                  if ((n || t(), !m || !h)) return;
                  const g = {
                    rootMargin:
                      -u(v) +
                      "px " +
                      -u(l.clientWidth - (p + m)) +
                      "px " +
                      -u(l.clientHeight - (v + h)) +
                      "px " +
                      -u(p) +
                      "px",
                    threshold: o(0, r(1, f)) || 1,
                  };
                  let y = !0;
                  function w(t) {
                    const n = t[0].intersectionRatio;
                    if (!j(d, e.getBoundingClientRect())) return a();
                    if (n !== f) {
                      if (!y) return a();
                      n
                        ? a(!1, n)
                        : (i = setTimeout(() => {
                            a(!1, 1e-7);
                          }, 1e3));
                    }
                    y = !1;
                  }
                  try {
                    c = new IntersectionObserver(w, {
                      ...g,
                      root: l.ownerDocument,
                    });
                  } catch (e) {
                    c = new IntersectionObserver(w, g);
                  }
                  c.observe(e);
                }
                const f = (0, S.zk)(e),
                  d = () => a(n);
                return (
                  f.addEventListener("resize", d),
                  a(!0),
                  () => {
                    f.removeEventListener("resize", d), s();
                  }
                );
              })(d, n, l)
            : null;
        let m,
          h = -1,
          g = null;
        s &&
          ((g = new ResizeObserver((e) => {
            let [r] = e;
            r &&
              r.target === d &&
              g &&
              t &&
              (g.unobserve(t),
              cancelAnimationFrame(h),
              (h = requestAnimationFrame(() => {
                var e;
                null == (e = g) || e.observe(t);
              }))),
              n();
          })),
          d && !f && g.observe(d),
          t && g.observe(t));
        let y = f ? D(e) : null;
        return (
          f &&
            (function t() {
              const r = D(e);
              y && !j(y, r) && n();
              (y = r), (m = requestAnimationFrame(t));
            })(),
          n(),
          () => {
            var e;
            p.forEach((e) => {
              c && e.removeEventListener("scroll", n),
                l && e.removeEventListener("resize", n);
            }),
              null == v || v(),
              null == (e = g) || e.disconnect(),
              (g = null),
              f && cancelAnimationFrame(m);
          }
        );
      }
      const _ = function (e) {
          return (
            void 0 === e && (e = 0),
            {
              name: "offset",
              options: e,
              async fn(t) {
                var n, r;
                const { x: o, y: i, placement: u, middlewareData: c } = t,
                  l = await (async function (e, t) {
                    const { placement: n, platform: r, elements: o } = e,
                      i = await (null == r.isRTL
                        ? void 0
                        : r.isRTL(o.floating)),
                      u = a(n),
                      c = f(n),
                      l = "y" === v(n),
                      d = C.has(u) ? -1 : 1,
                      p = i && l ? -1 : 1,
                      m = s(t, e);
                    let {
                      mainAxis: h,
                      crossAxis: g,
                      alignmentAxis: y,
                    } = "number" == typeof m
                      ? { mainAxis: m, crossAxis: 0, alignmentAxis: null }
                      : {
                          mainAxis: m.mainAxis || 0,
                          crossAxis: m.crossAxis || 0,
                          alignmentAxis: m.alignmentAxis,
                        };
                    return (
                      c &&
                        "number" == typeof y &&
                        (g = "end" === c ? -1 * y : y),
                      l ? { x: g * p, y: h * d } : { x: h * d, y: g * p }
                    );
                  })(t, e);
                return u === (null == (n = c.offset) ? void 0 : n.placement) &&
                  null != (r = c.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: o + l.x, y: i + l.y, data: { ...l, placement: u } };
              },
            }
          );
        },
        V = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "shift",
              options: e,
              async fn(t) {
                const { x: n, y: i, placement: u, platform: c } = t,
                  {
                    mainAxis: l = !0,
                    crossAxis: a = !1,
                    limiter: f = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...p
                  } = s(e, t),
                  m = { x: n, y: i },
                  h = await c.detectOverflow(t, p),
                  g = v(u),
                  y = d(g);
                let w = m[y],
                  b = m[g];
                const x = (e, t) => {
                  return (
                    (n = t + h["y" === e ? "top" : "left"]),
                    (i = t),
                    (u = t - h["y" === e ? "bottom" : "right"]),
                    o(n, r(i, u))
                  );
                  var n, i, u;
                };
                l && (w = x(y, w)), a && (b = x(g, b));
                const E = f.fn({ ...t, [y]: w, [g]: b });
                return {
                  ...E,
                  data: { x: E.x - n, y: E.y - i, enabled: { [y]: l, [g]: a } },
                };
              },
            }
          );
        },
        $ = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "flip",
              options: e,
              async fn(t) {
                var n, r;
                const {
                    placement: o,
                    middlewareData: i,
                    rects: u,
                    initialPlacement: c,
                    platform: l,
                    elements: d,
                  } = t,
                  {
                    mainAxis: g = !0,
                    crossAxis: y = !0,
                    fallbackPlacements: w,
                    fallbackStrategy: b = "bestFit",
                    fallbackAxisSideDirection: R = "none",
                    flipAlignment: L = !0,
                    ...k
                  } = s(e, t);
                if (null != (n = i.arrow) && n.alignmentOffset) return {};
                const C = a(o),
                  S = v(c),
                  T = a(c) === c,
                  A = await (null == l.isRTL ? void 0 : l.isRTL(d.floating)),
                  M =
                    w ||
                    (T || !L
                      ? [E(c)]
                      : (function (e) {
                          const t = E(e);
                          return [h(e), t, h(t)];
                        })(c)),
                  P = "none" !== R;
                !w && P && M.push(...x(c, L, R, A));
                const O = [c, ...M],
                  D = await l.detectOverflow(t, k),
                  N = [];
                let q = (null == (r = i.flip) ? void 0 : r.overflows) || [];
                if ((g && N.push(D[C]), y)) {
                  const e = (function (e, t, n) {
                    void 0 === n && (n = !1);
                    const r = f(e),
                      o = m(e),
                      i = p(o);
                    let u =
                      "x" === o
                        ? r === (n ? "end" : "start")
                          ? "right"
                          : "left"
                        : "start" === r
                          ? "bottom"
                          : "top";
                    return (
                      t.reference[i] > t.floating[i] && (u = E(u)), [u, E(u)]
                    );
                  })(o, u, A);
                  N.push(D[e[0]], D[e[1]]);
                }
                if (
                  ((q = [...q, { placement: o, overflows: N }]),
                  !N.every((e) => e <= 0))
                ) {
                  var I, F;
                  const e =
                      ((null == (I = i.flip) ? void 0 : I.index) || 0) + 1,
                    t = O[e];
                  if (t) {
                    if (
                      !("alignment" === y && S !== v(t)) ||
                      q.every((e) => v(e.placement) !== S || e.overflows[0] > 0)
                    )
                      return {
                        data: { index: e, overflows: q },
                        reset: { placement: t },
                      };
                  }
                  let n =
                    null ==
                    (F = q
                      .filter((e) => e.overflows[0] <= 0)
                      .sort((e, t) => e.overflows[1] - t.overflows[1])[0])
                      ? void 0
                      : F.placement;
                  if (!n)
                    switch (b) {
                      case "bestFit": {
                        var B;
                        const e =
                          null ==
                          (B = q
                            .filter((e) => {
                              if (P) {
                                const t = v(e.placement);
                                return t === S || "y" === t;
                              }
                              return !0;
                            })
                            .map((e) => [
                              e.placement,
                              e.overflows
                                .filter((e) => e > 0)
                                .reduce((e, t) => e + t, 0),
                            ])
                            .sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : B[0];
                        e && (n = e);
                        break;
                      }
                      case "initialPlacement":
                        n = c;
                    }
                  if (o !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }
          );
        },
        K = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "size",
              options: e,
              async fn(t) {
                const { placement: n, rects: i, platform: u, elements: c } = t,
                  { apply: l = () => {}, ...d } = s(e, t),
                  p = await u.detectOverflow(t, d),
                  m = a(n),
                  h = f(n),
                  g = "y" === v(n),
                  { width: y, height: w } = i.floating;
                let b, x;
                "top" === m || "bottom" === m
                  ? ((b = m),
                    (x =
                      h ===
                      ((await (null == u.isRTL ? void 0 : u.isRTL(c.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((x = m), (b = "end" === h ? "top" : "bottom"));
                const E = w - p.top - p.bottom,
                  R = y - p.left - p.right,
                  L = r(w - p[b], E),
                  k = r(y - p[x], R),
                  C = t.middlewareData.shift,
                  S = !C;
                let T = L,
                  A = k;
                null != C && C.enabled.x && (A = R),
                  null != C && C.enabled.y && (T = E),
                  S &&
                    !h &&
                    (g
                      ? (A = y - 2 * o(p.left, p.right))
                      : (T = w - 2 * o(p.top, p.bottom))),
                  await l({ ...t, availableWidth: A, availableHeight: T });
                const M = await u.getDimensions(c.floating);
                return y !== M.width || w !== M.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        },
        Y = (e, t, n) => {
          const r = new Map(),
            o = null != n ? n : {},
            i = { ...H, ...o.platform, _c: r };
          return (async (e, t, n) => {
            const {
                placement: r = "bottom",
                strategy: o = "absolute",
                middleware: i = [],
                platform: u,
              } = n,
              c = u.detectOverflow ? u : { ...u, detectOverflow: k },
              l = await (null == u.isRTL ? void 0 : u.isRTL(t));
            let s = await u.getElementRects({
                reference: e,
                floating: t,
                strategy: o,
              }),
              { x: a, y: f } = L(s, r, l),
              d = r,
              p = 0;
            const v = {};
            for (let n = 0; n < i.length; n++) {
              const m = i[n];
              if (!m) continue;
              const { name: h, fn: g } = m,
                {
                  x: y,
                  y: w,
                  data: b,
                  reset: x,
                } = await g({
                  x: a,
                  y: f,
                  initialPlacement: r,
                  placement: d,
                  strategy: o,
                  middlewareData: v,
                  rects: s,
                  platform: c,
                  elements: { reference: e, floating: t },
                });
              (a = null != y ? y : a),
                (f = null != w ? w : f),
                (v[h] = { ...v[h], ...b }),
                x &&
                  p < 50 &&
                  (p++,
                  "object" == typeof x &&
                    (x.placement && (d = x.placement),
                    x.rects &&
                      (s =
                        !0 === x.rects
                          ? await u.getElementRects({
                              reference: e,
                              floating: t,
                              strategy: o,
                            })
                          : x.rects),
                    ({ x: a, y: f } = L(s, d, l))),
                  (n = -1));
            }
            return { x: a, y: f, placement: d, strategy: o, middlewareData: v };
          })(e, t, { ...o, platform: i });
        };
    },
    4621: (e, t, n) => {
      n.d(t, {
        BN: () => p,
        Ej: () => m,
        UU: () => v,
        cY: () => d,
        we: () => f,
      });
      var r = n(8889),
        o = n(626),
        i = n(2739),
        u = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
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
            middleware: f = [],
            platform: d,
            elements: { reference: p, floating: v } = {},
            transform: m = !0,
            whileElementsMounted: h,
            open: g,
          } = e,
          [y, w] = o.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
          }),
          [b, x] = o.useState(f);
        c(b, f) || x(f);
        const [E, R] = o.useState(null),
          [L, k] = o.useState(null),
          C = o.useCallback((e) => {
            e !== M.current && ((M.current = e), R(e));
          }, []),
          S = o.useCallback((e) => {
            e !== P.current && ((P.current = e), k(e));
          }, []),
          T = p || E,
          A = v || L,
          M = o.useRef(null),
          P = o.useRef(null),
          O = o.useRef(y),
          D = null != h,
          N = a(h),
          q = a(d),
          I = a(g),
          F = o.useCallback(() => {
            if (!M.current || !P.current) return;
            const e = { placement: t, strategy: n, middleware: b };
            q.current && (e.platform = q.current),
              (0, r.rD)(M.current, P.current, e).then((e) => {
                const t = { ...e, isPositioned: !1 !== I.current };
                B.current &&
                  !c(O.current, t) &&
                  ((O.current = t),
                  i.flushSync(() => {
                    w(t);
                  }));
              });
          }, [b, t, n, q, I]);
        u(() => {
          !1 === g &&
            O.current.isPositioned &&
            ((O.current.isPositioned = !1),
            w((e) => ({ ...e, isPositioned: !1 })));
        }, [g]);
        const B = o.useRef(!1);
        u(
          () => (
            (B.current = !0),
            () => {
              B.current = !1;
            }
          ),
          [],
        ),
          u(() => {
            if ((T && (M.current = T), A && (P.current = A), T && A)) {
              if (N.current) return N.current(T, A, F);
              F();
            }
          }, [T, A, F, N, D]);
        const W = o.useMemo(
            () => ({
              reference: M,
              floating: P,
              setReference: C,
              setFloating: S,
            }),
            [C, S],
          ),
          z = o.useMemo(() => ({ reference: T, floating: A }), [T, A]),
          H = o.useMemo(() => {
            const e = { position: n, left: 0, top: 0 };
            if (!z.floating) return e;
            const t = s(z.floating, y.x),
              r = s(z.floating, y.y);
            return m
              ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...(l(z.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: n, left: t, top: r };
          }, [n, m, z.floating, y.x, y.y]);
        return o.useMemo(
          () => ({ ...y, update: F, refs: W, elements: z, floatingStyles: H }),
          [y, F, W, z, H],
        );
      }
      const d = (e, t) => ({ ...(0, r.cY)(e), options: [e, t] }),
        p = (e, t) => ({ ...(0, r.BN)(e), options: [e, t] }),
        v = (e, t) => ({ ...(0, r.UU)(e), options: [e, t] }),
        m = (e, t) => ({ ...(0, r.Ej)(e), options: [e, t] });
    },
    3788: (e, t, n) => {
      n.d(t, {
        s3: () => Ue,
        iB: () => ot,
        kp: () => $e,
        s9: () => Qe,
        we: () => Ze,
        iQ: () => Ge,
        Mk: () => ve,
        bv: () => nt,
        SV: () => U,
      });
      var r = n(626),
        o = n.t(r, 2),
        i = n(977);
      function u(e) {
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
      function f() {
        return /apple/i.test(navigator.vendor);
      }
      function d() {
        const e = /android/i;
        return e.test(l()) || e.test(s());
      }
      function p(e, t) {
        const n = ["mouse", "pen"];
        return t || n.push("", void 0), n.includes(e);
      }
      function v(e) {
        return (null == e ? void 0 : e.ownerDocument) || document;
      }
      function m(e, t) {
        if (null == t) return !1;
        if ("composedPath" in e) return e.composedPath().includes(t);
        const n = e;
        return null != n.target && t.contains(n.target);
      }
      function h(e) {
        return "composedPath" in e ? e.composedPath()[0] : e.target;
      }
      const g =
        "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
      function y(e) {
        return (0, i.sb)(e) && e.matches(g);
      }
      function w(e) {
        e.preventDefault(), e.stopPropagation();
      }
      var b = n(7850),
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
        E = x.join(","),
        R = "undefined" == typeof Element,
        L = R
          ? function () {}
          : Element.prototype.matches ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector,
        k =
          !R && Element.prototype.getRootNode
            ? function (e) {
                var t;
                return null == e || null === (t = e.getRootNode) || void 0 === t
                  ? void 0
                  : t.call(e);
              }
            : function (e) {
                return null == e ? void 0 : e.ownerDocument;
              },
        C = function e(t, n) {
          var r;
          void 0 === n && (n = !0);
          var o =
            null == t || null === (r = t.getAttribute) || void 0 === r
              ? void 0
              : r.call(t, "inert");
          return "" === o || "true" === o || (n && t && e(t.parentNode));
        },
        S = function (e, t, n) {
          if (C(e)) return [];
          var r = Array.prototype.slice.apply(e.querySelectorAll(E));
          return t && L.call(e, E) && r.unshift(e), (r = r.filter(n));
        },
        T = function e(t, n, r) {
          for (var o = [], i = Array.from(t); i.length; ) {
            var u = i.shift();
            if (!C(u, !1))
              if ("SLOT" === u.tagName) {
                var c = u.assignedElements(),
                  l = e(c.length ? c : u.children, !0, r);
                r.flatten
                  ? o.push.apply(o, l)
                  : o.push({ scopeParent: u, candidates: l });
              } else {
                L.call(u, E) &&
                  r.filter(u) &&
                  (n || !t.includes(u)) &&
                  o.push(u);
                var s =
                    u.shadowRoot ||
                    ("function" == typeof r.getShadowRoot &&
                      r.getShadowRoot(u)),
                  a =
                    !C(s, !1) && (!r.shadowRootFilter || r.shadowRootFilter(u));
                if (s && a) {
                  var f = e(!0 === s ? u.children : s.children, !0, r);
                  r.flatten
                    ? o.push.apply(o, f)
                    : o.push({ scopeParent: u, candidates: f });
                } else i.unshift.apply(i, u.children);
              }
          }
          return o;
        },
        A = function (e) {
          return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
        },
        M = function (e) {
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
        P = function (e, t) {
          return e.tabIndex === t.tabIndex
            ? e.documentOrder - t.documentOrder
            : e.tabIndex - t.tabIndex;
        },
        O = function (e) {
          return "INPUT" === e.tagName;
        },
        D = function (e) {
          return (
            (function (e) {
              return O(e) && "radio" === e.type;
            })(e) &&
            !(function (e) {
              if (!e.name) return !0;
              var t,
                n = e.form || k(e),
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
        N = function (e) {
          var t = e.getBoundingClientRect(),
            n = t.width,
            r = t.height;
          return 0 === n && 0 === r;
        },
        q = function (e, t) {
          var n = t.displayCheck,
            r = t.getShadowRoot;
          if ("hidden" === getComputedStyle(e).visibility) return !0;
          var o = L.call(e, "details>summary:first-of-type")
            ? e.parentElement
            : e;
          if (L.call(o, "details:not([open]) *")) return !0;
          if (n && "full" !== n && "legacy-full" !== n) {
            if ("non-zero-area" === n) return N(e);
          } else {
            if ("function" == typeof r) {
              for (var i = e; e; ) {
                var u = e.parentElement,
                  c = k(e);
                if (u && !u.shadowRoot && !0 === r(u)) return N(e);
                e = e.assignedSlot
                  ? e.assignedSlot
                  : u || c === e.ownerDocument
                    ? u
                    : c.host;
              }
              e = i;
            }
            if (
              (function (e) {
                var t,
                  n,
                  r,
                  o,
                  i = e && k(e),
                  u = null === (t = i) || void 0 === t ? void 0 : t.host,
                  c = !1;
                if (i && i !== e)
                  for (
                    c = !!(
                      (null !== (n = u) &&
                        void 0 !== n &&
                        null !== (r = n.ownerDocument) &&
                        void 0 !== r &&
                        r.contains(u)) ||
                      (null != e &&
                        null !== (o = e.ownerDocument) &&
                        void 0 !== o &&
                        o.contains(e))
                    );
                    !c && u;
                  ) {
                    var l, s, a;
                    c = !(
                      null ===
                        (s = u =
                          null === (l = i = k(u)) || void 0 === l
                            ? void 0
                            : l.host) ||
                      void 0 === s ||
                      null === (a = s.ownerDocument) ||
                      void 0 === a ||
                      !a.contains(u)
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
        I = function (e, t) {
          return !(
            t.disabled ||
            C(t) ||
            (function (e) {
              return O(e) && "hidden" === e.type;
            })(t) ||
            q(t, e) ||
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
                          !!L.call(t, "fieldset[disabled] *") || !r.contains(e)
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
        F = function (e, t) {
          return !(D(t) || M(t) < 0 || !I(e, t));
        },
        B = function (e) {
          var t = parseInt(e.getAttribute("tabindex"), 10);
          return !!(isNaN(t) || t >= 0);
        },
        W = function e(t) {
          var n = [],
            r = [];
          return (
            t.forEach(function (t, o) {
              var i = !!t.scopeParent,
                u = i ? t.scopeParent : t,
                c = (function (e, t) {
                  var n = M(e);
                  return n < 0 && t && !A(e) ? 0 : n;
                })(u, i),
                l = i ? e(t.candidates) : u;
              0 === c
                ? i
                  ? n.push.apply(n, l)
                  : n.push(u)
                : r.push({
                    documentOrder: o,
                    tabIndex: c,
                    item: t,
                    isScope: i,
                    content: l,
                  });
            }),
            r
              .sort(P)
              .reduce(function (e, t) {
                return (
                  t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
                );
              }, [])
              .concat(n)
          );
        },
        z = function (e, t) {
          var n;
          return (
            (n = (t = t || {}).getShadowRoot
              ? T([e], t.includeContainer, {
                  filter: F.bind(null, t),
                  flatten: !1,
                  getShadowRoot: t.getShadowRoot,
                  shadowRootFilter: B,
                })
              : S(e, t.includeContainer, F.bind(null, t))),
            W(n)
          );
        },
        H = function (e, t) {
          if (((t = t || {}), !e)) throw new Error("No node provided");
          return !1 !== L.call(e, E) && F(t, e);
        },
        j = (n(2739), n(4621));
      function U(e) {
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
      const _ = { ...o },
        V = _.useInsertionEffect || ((e) => e());
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
      const K = "ArrowUp",
        Y = "ArrowDown",
        X = "ArrowLeft",
        Q = "ArrowRight";
      var Z = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      const G = [X, Q],
        J = [K, Y];
      let ee = !1,
        te = 0;
      const ne = () =>
        "floating-ui-" + Math.random().toString(36).slice(2, 6) + te++;
      const re =
        _.useId ||
        function () {
          const [e, t] = r.useState(() => (ee ? ne() : void 0));
          return (
            Z(() => {
              null == e && t(ne());
            }, []),
            r.useEffect(() => {
              ee = !0;
            }, []),
            e
          );
        };
      function oe() {
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
      const ie = r.createContext(null),
        ue = r.createContext(null),
        ce = () => {
          var e;
          return (null == (e = r.useContext(ie)) ? void 0 : e.id) || null;
        },
        le = () => r.useContext(ue);
      function se(e) {
        return "data-floating-ui-" + e;
      }
      function ae(e) {
        -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
      }
      function fe(e) {
        const t = (0, r.useRef)(e);
        return (
          Z(() => {
            t.current = e;
          }),
          t
        );
      }
      const de = se("safe-polygon");
      function pe(e, t, n) {
        return n && !p(n)
          ? 0
          : "number" == typeof e
            ? e
            : null == e
              ? void 0
              : e[t];
      }
      function ve(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            dataRef: u,
            events: l,
            elements: s,
          } = e,
          {
            enabled: a = !0,
            delay: f = 0,
            handleClose: d = null,
            mouseOnly: m = !1,
            restMs: h = 0,
            move: g = !0,
          } = t,
          y = le(),
          w = ce(),
          b = fe(d),
          x = fe(f),
          E = fe(n),
          R = r.useRef(),
          L = r.useRef(-1),
          k = r.useRef(),
          C = r.useRef(-1),
          S = r.useRef(!0),
          T = r.useRef(!1),
          A = r.useRef(() => {}),
          M = r.useRef(!1),
          P = r.useCallback(() => {
            var e;
            const t = null == (e = u.current.openEvent) ? void 0 : e.type;
            return (
              (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t
            );
          }, [u]);
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
            t || (ae(L), ae(C), (S.current = !0), (M.current = !1));
          }
        }, [a, l]),
          r.useEffect(() => {
            if (!a) return;
            if (!b.current) return;
            if (!n) return;
            function e(e) {
              P() && o(!1, e, "hover");
            }
            const t = v(s.floating).documentElement;
            return (
              t.addEventListener("mouseleave", e),
              () => {
                t.removeEventListener("mouseleave", e);
              }
            );
          }, [s.floating, n, o, a, b, P]);
        const O = r.useCallback(
            function (e, t, n) {
              void 0 === t && (t = !0), void 0 === n && (n = "hover");
              const r = pe(x.current, "close", R.current);
              r && !k.current
                ? (ae(L), (L.current = window.setTimeout(() => o(!1, e, n), r)))
                : t && (ae(L), o(!1, e, n));
            },
            [x, o],
          ),
          D = $(() => {
            A.current(), (k.current = void 0);
          }),
          N = $(() => {
            if (T.current) {
              const e = v(s.floating).body;
              (e.style.pointerEvents = ""),
                e.removeAttribute(de),
                (T.current = !1);
            }
          }),
          q = $(
            () =>
              !!u.current.openEvent &&
              ["click", "mousedown"].includes(u.current.openEvent.type),
          );
        r.useEffect(() => {
          if (a && (0, i.vq)(s.domReference)) {
            var e;
            const o = s.domReference;
            return (
              n && o.addEventListener("mouseleave", l),
              null == (e = s.floating) || e.addEventListener("mouseleave", l),
              g && o.addEventListener("mousemove", t, { once: !0 }),
              o.addEventListener("mouseenter", t),
              o.addEventListener("mouseleave", r),
              () => {
                var e;
                n && o.removeEventListener("mouseleave", l),
                  null == (e = s.floating) ||
                    e.removeEventListener("mouseleave", l),
                  g && o.removeEventListener("mousemove", t),
                  o.removeEventListener("mouseenter", t),
                  o.removeEventListener("mouseleave", r);
              }
            );
          }
          function t(e) {
            if (
              (ae(L),
              (S.current = !1),
              (m && !p(R.current)) || (h > 0 && !pe(x.current, "open")))
            )
              return;
            const t = pe(x.current, "open", R.current);
            t
              ? (L.current = window.setTimeout(() => {
                  E.current || o(!0, e, "hover");
                }, t))
              : n || o(!0, e, "hover");
          }
          function r(e) {
            if (q()) return;
            A.current();
            const t = v(s.floating);
            if (
              (ae(C), (M.current = !1), b.current && u.current.floatingContext)
            ) {
              n || ae(L),
                (k.current = b.current({
                  ...u.current.floatingContext,
                  tree: y,
                  x: e.clientX,
                  y: e.clientY,
                  onClose() {
                    N(), D(), q() || O(e, !0, "safe-polygon");
                  },
                }));
              const r = k.current;
              return (
                t.addEventListener("mousemove", r),
                void (A.current = () => {
                  t.removeEventListener("mousemove", r);
                })
              );
            }
            ("touch" !== R.current || !c(s.floating, e.relatedTarget)) && O(e);
          }
          function l(e) {
            q() ||
              (u.current.floatingContext &&
                (null == b.current ||
                  b.current({
                    ...u.current.floatingContext,
                    tree: y,
                    x: e.clientX,
                    y: e.clientY,
                    onClose() {
                      N(), D(), q() || O(e);
                    },
                  })(e)));
          }
        }, [s, a, e, m, h, g, O, D, N, o, n, E, y, x, b, u, q]),
          Z(() => {
            var e;
            if (
              a &&
              n &&
              null != (e = b.current) &&
              e.__options.blockPointerEvents &&
              P()
            ) {
              T.current = !0;
              const e = s.floating;
              if ((0, i.vq)(s.domReference) && e) {
                var t;
                const n = v(s.floating).body;
                n.setAttribute(de, "");
                const r = s.domReference,
                  o =
                    null == y ||
                    null == (t = y.nodesRef.current.find((e) => e.id === w)) ||
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
          }, [a, n, w, s, y, b, P]),
          Z(() => {
            n || ((R.current = void 0), (M.current = !1), D(), N());
          }, [n, D, N]),
          r.useEffect(
            () => () => {
              D(), ae(L), ae(C), N();
            },
            [a, s.domReference, D, N],
          );
        const I = r.useMemo(() => {
            function e(e) {
              R.current = e.pointerType;
            }
            return {
              onPointerDown: e,
              onPointerEnter: e,
              onMouseMove(e) {
                const { nativeEvent: t } = e;
                function r() {
                  S.current || E.current || o(!0, t, "hover");
                }
                (m && !p(R.current)) ||
                  n ||
                  0 === h ||
                  (M.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
                  (ae(C),
                  "touch" === R.current
                    ? r()
                    : ((M.current = !0),
                      (C.current = window.setTimeout(r, h))));
              },
            };
          }, [m, o, n, E, h]),
          F = r.useMemo(
            () => ({
              onMouseEnter() {
                ae(L);
              },
              onMouseLeave(e) {
                q() || O(e.nativeEvent, !1);
              },
            }),
            [O, q],
          );
        return r.useMemo(
          () => (a ? { reference: I, floating: F } : {}),
          [a, I, F],
        );
      }
      let me = 0;
      function he(e, t) {
        void 0 === t && (t = {});
        const {
          preventScroll: n = !1,
          cancelPrevious: r = !0,
          sync: o = !1,
        } = t;
        r && cancelAnimationFrame(me);
        const i = () => (null == e ? void 0 : e.focus({ preventScroll: n }));
        o ? i() : (me = requestAnimationFrame(i));
      }
      function ge(e, t) {
        var n;
        let r = [],
          o = null == (n = e.find((e) => e.id === t)) ? void 0 : n.parentId;
        for (; o; ) {
          const t = e.find((e) => e.id === o);
          (o = null == t ? void 0 : t.parentId), t && (r = r.concat(t));
        }
        return r;
      }
      function ye(e, t) {
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
      let we = new WeakMap(),
        be = new WeakSet(),
        xe = {},
        Ee = 0;
      const Re = () =>
          "undefined" != typeof HTMLElement && "inert" in HTMLElement.prototype,
        Le = (e) => e && (e.host || Le(e.parentNode)),
        ke = (e, t) =>
          t
            .map((t) => {
              if (e.contains(t)) return t;
              const n = Le(t);
              return e.contains(n) ? n : null;
            })
            .filter((e) => null != e);
      function Ce(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const r = v(e[0]).body;
        return (function (e, t, n, r) {
          const o = "data-floating-ui-inert",
            u = r ? "inert" : n ? "aria-hidden" : null,
            c = ke(t, e),
            l = new Set(),
            s = new Set(c),
            a = [];
          xe[o] || (xe[o] = new WeakMap());
          const f = xe[o];
          return (
            c.forEach(function e(t) {
              t && !l.has(t) && (l.add(t), t.parentNode && e(t.parentNode));
            }),
            (function e(t) {
              t &&
                !s.has(t) &&
                [].forEach.call(t.children, (t) => {
                  if ("script" !== (0, i.mq)(t))
                    if (l.has(t)) e(t);
                    else {
                      const e = u ? t.getAttribute(u) : null,
                        n = null !== e && "false" !== e,
                        r = we.get(t) || 0,
                        i = u ? r + 1 : r,
                        c = (f.get(t) || 0) + 1;
                      we.set(t, i),
                        f.set(t, c),
                        a.push(t),
                        1 === i && n && be.add(t),
                        1 === c && t.setAttribute(o, ""),
                        !n && u && t.setAttribute(u, "true");
                    }
                });
            })(t),
            l.clear(),
            Ee++,
            () => {
              a.forEach((e) => {
                const t = we.get(e) || 0,
                  n = u ? t - 1 : t,
                  r = (f.get(e) || 0) - 1;
                we.set(e, n),
                  f.set(e, r),
                  n || (!be.has(e) && u && e.removeAttribute(u), be.delete(e)),
                  r || e.removeAttribute(o);
              }),
                Ee--,
                Ee ||
                  ((we = new WeakMap()),
                  (we = new WeakMap()),
                  (be = new WeakSet()),
                  (xe = {}));
            }
          );
        })(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n);
      }
      const Se = () => ({
        getShadowRoot: !0,
        displayCheck:
          "function" == typeof ResizeObserver &&
          ResizeObserver.toString().includes("[native code]")
            ? "full"
            : "none",
      });
      function Te(e, t) {
        const n = z(e, Se());
        "prev" === t && n.reverse();
        const r = n.indexOf(u(v(e)));
        return n.slice(r + 1)[0];
      }
      function Ae() {
        return Te(document.body, "next");
      }
      function Me() {
        return Te(document.body, "prev");
      }
      function Pe(e, t) {
        const n = t || e.currentTarget,
          r = e.relatedTarget;
        return !r || !c(n, r);
      }
      const Oe = {
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
        De = r.forwardRef(function (e, t) {
          const [n, o] = r.useState();
          Z(() => {
            f() && o("button");
          }, []);
          const i = {
            ref: t,
            tabIndex: 0,
            role: n,
            "aria-hidden": !n || void 0,
            [se("focus-guard")]: "",
            style: Oe,
          };
          return (0, b.jsx)("span", { ...e, ...i });
        }),
        Ne = r.createContext(null);
      const qe = () => r.useContext(Ne),
        Ie = "data-floating-ui-focusable";
      function Fe(e) {
        return e
          ? e.hasAttribute(Ie)
            ? e
            : e.querySelector("[" + Ie + "]") || e
          : null;
      }
      function Be(e) {
        return r.useMemo(
          () => (t) => {
            e.forEach((e) => {
              e && (e.current = t);
            });
          },
          e,
        );
      }
      const We = 20;
      let ze = [];
      function He() {
        return ze
          .slice()
          .reverse()
          .find((e) => e.isConnected);
      }
      const je = r.forwardRef(function (e, t) {
        return (0, b.jsx)("button", {
          ...e,
          type: "button",
          ref: t,
          tabIndex: -1,
          style: Oe,
        });
      });
      function Ue(e) {
        const {
            context: t,
            children: n,
            disabled: o = !1,
            order: l = ["content"],
            guards: s = !0,
            initialFocus: f = 0,
            returnFocus: p = !0,
            restoreFocus: m = !1,
            modal: g = !0,
            visuallyHiddenDismiss: x = !1,
            closeOnFocusOut: E = !0,
            outsideElementsInert: R = !1,
          } = e,
          {
            open: L,
            onOpenChange: k,
            events: C,
            dataRef: S,
            elements: { domReference: T, floating: A },
          } = t,
          M = $(() => {
            var e;
            return null == (e = S.current.floatingContext) ? void 0 : e.nodeId;
          }),
          P = "number" == typeof f && f < 0,
          O = !!(D = T) && "combobox" === D.getAttribute("role") && y(D) && P;
        var D;
        const N = Re(),
          q = !N || s,
          I = !q || (N && R),
          F = fe(l),
          B = fe(f),
          W = fe(p),
          j = le(),
          U = qe(),
          _ = r.useRef(null),
          V = r.useRef(null),
          K = r.useRef(!1),
          Y = r.useRef(!1),
          X = r.useRef(-1),
          Q = null != U,
          G = Fe(A),
          J = $(function (e) {
            return void 0 === e && (e = G), e ? z(e, Se()) : [];
          }),
          ee = $((e) => {
            const t = J(e);
            return F.current
              .map((e) =>
                T && "reference" === e ? T : G && "floating" === e ? G : t,
              )
              .filter(Boolean)
              .flat();
          });
        r.useEffect(() => {
          if (o) return;
          if (!g) return;
          function e(e) {
            if ("Tab" === e.key) {
              c(G, u(v(G))) && 0 === J().length && !O && w(e);
              const t = ee(),
                n = h(e);
              "reference" === F.current[0] &&
                n === T &&
                (w(e), e.shiftKey ? he(t[t.length - 1]) : he(t[1])),
                "floating" === F.current[1] &&
                  n === G &&
                  e.shiftKey &&
                  (w(e), he(t[0]));
            }
          }
          const t = v(G);
          return (
            t.addEventListener("keydown", e),
            () => {
              t.removeEventListener("keydown", e);
            }
          );
        }, [o, T, G, g, F, O, J, ee]),
          r.useEffect(() => {
            if (!o && A)
              return (
                A.addEventListener("focusin", e),
                () => {
                  A.removeEventListener("focusin", e);
                }
              );
            function e(e) {
              const t = h(e),
                n = J().indexOf(t);
              -1 !== n && (X.current = n);
            }
          }, [o, A, J]),
          r.useEffect(() => {
            if (!o && E)
              return A && (0, i.sb)(T)
                ? (T.addEventListener("focusout", t),
                  T.addEventListener("pointerdown", e),
                  A.addEventListener("focusout", t),
                  () => {
                    T.removeEventListener("focusout", t),
                      T.removeEventListener("pointerdown", e),
                      A.removeEventListener("focusout", t);
                  })
                : void 0;
            function e() {
              (Y.current = !0),
                setTimeout(() => {
                  Y.current = !1;
                });
            }
            function t(e) {
              const t = e.relatedTarget;
              queueMicrotask(() => {
                const n = M(),
                  r = !(
                    c(T, t) ||
                    c(A, t) ||
                    c(t, A) ||
                    c(null == U ? void 0 : U.portalNode, t) ||
                    (null != t && t.hasAttribute(se("focus-guard"))) ||
                    (j &&
                      (ye(j.nodesRef.current, n).find((e) => {
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
                        ge(j.nodesRef.current, n).find((e) => {
                          var n, r, o;
                          return (
                            [
                              null == (n = e.context)
                                ? void 0
                                : n.elements.floating,
                              Fe(
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
                if (m && r && u(v(G)) === v(G).body) {
                  (0, i.sb)(G) && G.focus();
                  const e = X.current,
                    t = J(),
                    n = t[e] || t[t.length - 1] || G;
                  (0, i.sb)(n) && n.focus();
                }
                (!O && g) ||
                  !t ||
                  !r ||
                  Y.current ||
                  t === He() ||
                  ((K.current = !0), k(!1, e, "focus-out"));
              });
            }
          }, [o, T, A, G, g, j, U, k, E, m, J, O, M]);
        const te = r.useRef(null),
          ne = r.useRef(null),
          re = Be([te, null == U ? void 0 : U.beforeInsideRef]),
          oe = Be([ne, null == U ? void 0 : U.afterInsideRef]);
        function ie(e) {
          return !o && x && g
            ? (0, b.jsx)(je, {
                ref: "start" === e ? _ : V,
                onClick: (e) => k(!1, e.nativeEvent),
                children: "string" == typeof x ? x : "Dismiss",
              })
            : null;
        }
        r.useEffect(() => {
          var e;
          if (o) return;
          if (!A) return;
          const t = Array.from(
              (null == U || null == (e = U.portalNode)
                ? void 0
                : e.querySelectorAll("[" + se("portal") + "]")) || [],
            ),
            n =
              j && !g
                ? ge(null == j ? void 0 : j.nodesRef.current, M()).map((e) => {
                    var t;
                    return null == (t = e.context)
                      ? void 0
                      : t.elements.floating;
                  })
                : [],
            r = [
              A,
              ...t,
              ...n,
              _.current,
              V.current,
              te.current,
              ne.current,
              null == U ? void 0 : U.beforeOutsideRef.current,
              null == U ? void 0 : U.afterOutsideRef.current,
              F.current.includes("reference") || O ? T : null,
            ].filter((e) => null != e),
            i = g || O ? Ce(r, !I, I) : Ce(r);
          return () => {
            i();
          };
        }, [o, T, A, g, F, U, O, q, I, j, M]),
          Z(() => {
            if (o || !(0, i.sb)(G)) return;
            const e = u(v(G));
            queueMicrotask(() => {
              const t = ee(G),
                n = B.current,
                r = ("number" == typeof n ? t[n] : n.current) || G,
                o = c(G, e);
              P || o || !L || he(r, { preventScroll: r === G });
            });
          }, [o, L, G, P, ee, B]),
          Z(() => {
            if (o || !G) return;
            let e = !1,
              t = !1;
            const n = v(G),
              r = u(n);
            let l = S.current.openEvent;
            function s(n) {
              let { open: r, reason: o, event: i, nested: u } = n;
              if (
                (r && (l = i),
                "escape-key" === o && (t = !0),
                ["hover", "safe-polygon"].includes(o) &&
                  "mouseleave" === i.type &&
                  (K.current = !0),
                "outside-press" === o)
              )
                if (u) (K.current = !1), (e = !0);
                else if (
                  (function (e) {
                    return (
                      !(0 !== e.mozInputSource || !e.isTrusted) ||
                      (d() && e.pointerType
                        ? "click" === e.type && 1 === e.buttons
                        : 0 === e.detail && !e.pointerType)
                    );
                  })(i) ||
                  a(i)
                )
                  K.current = !1;
                else {
                  let t = !1;
                  document.createElement("div").focus({
                    get preventScroll() {
                      return (t = !0), !1;
                    },
                  }),
                    t ? ((K.current = !1), (e = !0)) : (K.current = !0);
                }
            }
            !(function (e) {
              (ze = ze.filter((e) => e.isConnected)),
                e &&
                  "body" !== (0, i.mq)(e) &&
                  (ze.push(e), ze.length > We && (ze = ze.slice(-We)));
            })(r),
              C.on("openchange", s);
            const f = n.createElement("span");
            return (
              f.setAttribute("tabindex", "-1"),
              f.setAttribute("aria-hidden", "true"),
              Object.assign(f.style, Oe),
              Q && T && T.insertAdjacentElement("afterend", f),
              () => {
                C.off("openchange", s);
                const r = u(n),
                  o =
                    c(A, r) ||
                    (j &&
                      ye(j.nodesRef.current, M()).some((e) => {
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
                const a =
                  "boolean" == typeof W.current
                    ? t && T
                      ? T
                      : He() || f
                    : W.current.current || f;
                queueMicrotask(() => {
                  const t = (function (e) {
                    const t = Se();
                    return H(e, t) ? e : z(e, t)[0] || e;
                  })(a);
                  W.current &&
                    !K.current &&
                    (0, i.sb)(t) &&
                    (t === r || r === n.body || o) &&
                    t.focus({ preventScroll: e }),
                    f.remove();
                });
              }
            );
          }, [o, A, G, W, S, C, j, Q, T, M]),
          r.useEffect(() => {
            queueMicrotask(() => {
              K.current = !1;
            });
          }, [o]),
          Z(() => {
            if (!o && U)
              return (
                U.setFocusManagerState({
                  modal: g,
                  closeOnFocusOut: E,
                  open: L,
                  onOpenChange: k,
                  domReference: T,
                }),
                () => {
                  U.setFocusManagerState(null);
                }
              );
          }, [o, U, g, L, k, E, T]),
          Z(() => {
            if (o) return;
            if (!G) return;
            if ("function" != typeof MutationObserver) return;
            if (P) return;
            const e = () => {
              const e = G.getAttribute("tabindex"),
                t = J(),
                n = u(v(A)),
                r = t.indexOf(n);
              -1 !== r && (X.current = r),
                F.current.includes("floating") || (n !== T && 0 === t.length)
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
          }, [o, A, G, T, F, J, P]);
        const ue = !o && q && (!g || !O) && (Q || g);
        return (0, b.jsxs)(b.Fragment, {
          children: [
            ue &&
              (0, b.jsx)(De, {
                "data-type": "inside",
                ref: re,
                onFocus: (e) => {
                  if (g) {
                    const e = ee();
                    he("reference" === l[0] ? e[0] : e[e.length - 1]);
                  } else if (null != U && U.preserveTabOrder && U.portalNode)
                    if (((K.current = !1), Pe(e, U.portalNode))) {
                      const e = Ae() || T;
                      null == e || e.focus();
                    } else {
                      var t;
                      null == (t = U.beforeOutsideRef.current) || t.focus();
                    }
                },
              }),
            !O && ie("start"),
            n,
            ie("end"),
            ue &&
              (0, b.jsx)(De, {
                "data-type": "inside",
                ref: oe,
                onFocus: (e) => {
                  if (g) he(ee()[0]);
                  else if (null != U && U.preserveTabOrder && U.portalNode)
                    if ((E && (K.current = !0), Pe(e, U.portalNode))) {
                      const e = Me() || T;
                      null == e || e.focus();
                    } else {
                      var t;
                      null == (t = U.afterOutsideRef.current) || t.focus();
                    }
                },
              }),
          ],
        });
      }
      function _e(e) {
        return (0, i.sb)(e.target) && "BUTTON" === e.target.tagName;
      }
      function Ve(e) {
        return y(e);
      }
      function $e(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            dataRef: i,
            elements: { domReference: u },
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
          m = r.useRef(!1),
          h = r.useMemo(
            () => ({
              onPointerDown(e) {
                v.current = e.pointerType;
              },
              onMouseDown(e) {
                const t = v.current;
                0 === e.button &&
                  "click" !== l &&
                  ((p(t, !0) && a) ||
                    (!n ||
                    !s ||
                    (i.current.openEvent &&
                      d &&
                      "mousedown" !== i.current.openEvent.type)
                      ? (e.preventDefault(), o(!0, e.nativeEvent, "click"))
                      : o(!1, e.nativeEvent, "click")));
              },
              onClick(e) {
                const t = v.current;
                "mousedown" === l && v.current
                  ? (v.current = void 0)
                  : (p(t, !0) && a) ||
                    (!n ||
                    !s ||
                    (i.current.openEvent &&
                      d &&
                      "click" !== i.current.openEvent.type)
                      ? o(!0, e.nativeEvent, "click")
                      : o(!1, e.nativeEvent, "click"));
              },
              onKeyDown(e) {
                (v.current = void 0),
                  e.defaultPrevented ||
                    !f ||
                    _e(e) ||
                    (" " !== e.key ||
                      Ve(u) ||
                      (e.preventDefault(), (m.current = !0)),
                    "Enter" === e.key && o(!n || !s, e.nativeEvent, "click"));
              },
              onKeyUp(e) {
                e.defaultPrevented ||
                  !f ||
                  _e(e) ||
                  Ve(u) ||
                  (" " === e.key &&
                    m.current &&
                    ((m.current = !1), o(!n || !s, e.nativeEvent, "click")));
              },
            }),
            [i, u, l, a, f, o, n, d, s],
          );
        return r.useMemo(() => (c ? { reference: h } : {}), [c, h]);
      }
      const Ke = {
          pointerdown: "onPointerDown",
          mousedown: "onMouseDown",
          click: "onClick",
        },
        Ye = {
          pointerdown: "onPointerDownCapture",
          mousedown: "onMouseDownCapture",
          click: "onClickCapture",
        },
        Xe = (e) => {
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
      function Qe(e, t) {
        void 0 === t && (t = {});
        const { open: n, onOpenChange: o, elements: u, dataRef: l } = e,
          {
            enabled: s = !0,
            escapeKey: a = !0,
            outsidePress: f = !0,
            outsidePressEvent: d = "pointerdown",
            referencePress: p = !1,
            referencePressEvent: g = "pointerdown",
            ancestorScroll: y = !1,
            bubbles: w,
            capture: b,
          } = t,
          x = le(),
          E = $("function" == typeof f ? f : () => !1),
          R = "function" == typeof f ? E : f,
          L = r.useRef(!1),
          k = r.useRef(!1),
          { escapeKey: C, outsidePress: S } = Xe(w),
          { escapeKey: T, outsidePress: A } = Xe(b),
          M = r.useRef(!1),
          P = $((e) => {
            var t;
            if (!n || !s || !a || "Escape" !== e.key) return;
            if (M.current) return;
            const r =
                null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
              i = x ? ye(x.nodesRef.current, r) : [];
            if (!C && (e.stopPropagation(), i.length > 0)) {
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
          O = $((e) => {
            var t;
            const n = () => {
              var t;
              P(e), null == (t = h(e)) || t.removeEventListener("keydown", n);
            };
            null == (t = h(e)) || t.addEventListener("keydown", n);
          }),
          D = $((e) => {
            var t;
            const n = L.current;
            L.current = !1;
            const r = k.current;
            if (((k.current = !1), "click" === d && r)) return;
            if (n) return;
            if ("function" == typeof R && !R(e)) return;
            const s = h(e),
              a = "[" + se("inert") + "]",
              f = v(u.floating).querySelectorAll(a);
            let p = (0, i.vq)(s) ? s : null;
            for (; p && !(0, i.eu)(p); ) {
              const e = (0, i.$4)(p);
              if ((0, i.eu)(e) || !(0, i.vq)(e)) break;
              p = e;
            }
            if (
              f.length &&
              (0, i.vq)(s) &&
              !s.matches("html,body") &&
              !c(s, u.floating) &&
              Array.from(f).every((e) => !c(p, e))
            )
              return;
            if ((0, i.sb)(s) && I) {
              const t = (0, i.eu)(s),
                n = (0, i.L9)(s),
                r = /auto|scroll/,
                o = t || r.test(n.overflowX),
                u = t || r.test(n.overflowY),
                c = o && s.clientWidth > 0 && s.scrollWidth > s.clientWidth,
                l = u && s.clientHeight > 0 && s.scrollHeight > s.clientHeight,
                a = "rtl" === n.direction,
                f =
                  l &&
                  (a
                    ? e.offsetX <= s.offsetWidth - s.clientWidth
                    : e.offsetX > s.clientWidth),
                d = c && e.offsetY > s.clientHeight;
              if (f || d) return;
            }
            const g =
                null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
              y =
                x &&
                ye(x.nodesRef.current, g).some((t) => {
                  var n;
                  return m(
                    e,
                    null == (n = t.context) ? void 0 : n.elements.floating,
                  );
                });
            if (m(e, u.floating) || m(e, u.domReference) || y) return;
            const w = x ? ye(x.nodesRef.current, g) : [];
            if (w.length > 0) {
              let e = !0;
              if (
                (w.forEach((t) => {
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
              D(e), null == (t = h(e)) || t.removeEventListener(d, n);
            };
            null == (t = h(e)) || t.addEventListener(d, n);
          });
        r.useEffect(() => {
          if (!n || !s) return;
          (l.current.__escapeKeyBubbles = C),
            (l.current.__outsidePressBubbles = S);
          let e = -1;
          function t(e) {
            o(!1, e, "ancestor-scroll");
          }
          function r() {
            window.clearTimeout(e), (M.current = !0);
          }
          function c() {
            e = window.setTimeout(
              () => {
                M.current = !1;
              },
              (0, i.Tc)() ? 5 : 0,
            );
          }
          const f = v(u.floating);
          a &&
            (f.addEventListener("keydown", T ? O : P, T),
            f.addEventListener("compositionstart", r),
            f.addEventListener("compositionend", c)),
            R && f.addEventListener(d, A ? N : D, A);
          let p = [];
          return (
            y &&
              ((0, i.vq)(u.domReference) && (p = (0, i.v9)(u.domReference)),
              (0, i.vq)(u.floating) && (p = p.concat((0, i.v9)(u.floating))),
              !(0, i.vq)(u.reference) &&
                u.reference &&
                u.reference.contextElement &&
                (p = p.concat((0, i.v9)(u.reference.contextElement)))),
            (p = p.filter((e) => {
              var t;
              return (
                e !== (null == (t = f.defaultView) ? void 0 : t.visualViewport)
              );
            })),
            p.forEach((e) => {
              e.addEventListener("scroll", t, { passive: !0 });
            }),
            () => {
              a &&
                (f.removeEventListener("keydown", T ? O : P, T),
                f.removeEventListener("compositionstart", r),
                f.removeEventListener("compositionend", c)),
                R && f.removeEventListener(d, A ? N : D, A),
                p.forEach((e) => {
                  e.removeEventListener("scroll", t);
                }),
                window.clearTimeout(e);
            }
          );
        }, [l, u, a, R, d, n, o, y, s, C, S, P, T, O, D, A, N]),
          r.useEffect(() => {
            L.current = !1;
          }, [R, d]);
        const q = r.useMemo(
            () => ({
              onKeyDown: P,
              ...(p && {
                [Ke[g]]: (e) => {
                  o(!1, e.nativeEvent, "reference-press");
                },
                ...("click" !== g && {
                  onClick(e) {
                    o(!1, e.nativeEvent, "reference-press");
                  },
                }),
              }),
            }),
            [P, o, p, g],
          ),
          I = r.useMemo(
            () => ({
              onKeyDown: P,
              onMouseDown() {
                k.current = !0;
              },
              onMouseUp() {
                k.current = !0;
              },
              [Ye[d]]: () => {
                L.current = !0;
              },
            }),
            [P, d],
          );
        return r.useMemo(
          () => (s ? { reference: q, floating: I } : {}),
          [s, q, I],
        );
      }
      function Ze(e) {
        void 0 === e && (e = {});
        const { nodeId: t } = e,
          n = (function (e) {
            const { open: t = !1, onOpenChange: n, elements: o } = e,
              i = re(),
              u = r.useRef({}),
              [c] = r.useState(() => oe()),
              l = null != ce(),
              [s, a] = r.useState(o.reference),
              f = $((e, t, r) => {
                (u.current.openEvent = e ? t : void 0),
                  c.emit("openchange", {
                    open: e,
                    event: t,
                    reason: r,
                    nested: l,
                  }),
                  null == n || n(e, t, r);
              }),
              d = r.useMemo(() => ({ setPositionReference: a }), []),
              p = r.useMemo(
                () => ({
                  reference: s || o.reference || null,
                  floating: o.floating || null,
                  domReference: o.reference,
                }),
                [s, o.reference, o.floating],
              );
            return r.useMemo(
              () => ({
                dataRef: u,
                open: t,
                onOpenChange: f,
                elements: p,
                events: c,
                floatingId: i,
                refs: d,
              }),
              [t, f, p, c, i, d],
            );
          })({
            ...e,
            elements: { reference: null, floating: null, ...e.elements },
          }),
          o = e.rootContext || n,
          u = o.elements,
          [c, l] = r.useState(null),
          [s, a] = r.useState(null),
          f = (null == u ? void 0 : u.domReference) || c,
          d = r.useRef(null),
          p = le();
        Z(() => {
          f && (d.current = f);
        }, [f]);
        const v = (0, j.we)({
            ...e,
            elements: { ...u, ...(s && { reference: s }) },
          }),
          m = r.useCallback(
            (e) => {
              const t = (0, i.vq)(e)
                ? {
                    getBoundingClientRect: () => e.getBoundingClientRect(),
                    contextElement: e,
                  }
                : e;
              a(t), v.refs.setReference(t);
            },
            [v.refs],
          ),
          h = r.useCallback(
            (e) => {
              ((0, i.vq)(e) || null === e) && ((d.current = e), l(e)),
                ((0, i.vq)(v.refs.reference.current) ||
                  null === v.refs.reference.current ||
                  (null !== e && !(0, i.vq)(e))) &&
                  v.refs.setReference(e);
            },
            [v.refs],
          ),
          g = r.useMemo(
            () => ({
              ...v.refs,
              setReference: h,
              setPositionReference: m,
              domReference: d,
            }),
            [v.refs, h, m],
          ),
          y = r.useMemo(
            () => ({ ...v.elements, domReference: f }),
            [v.elements, f],
          ),
          w = r.useMemo(
            () => ({ ...v, ...o, refs: g, elements: y, nodeId: t }),
            [v, g, y, t, o],
          );
        return (
          Z(() => {
            o.dataRef.current.floatingContext = w;
            const e =
              null == p ? void 0 : p.nodesRef.current.find((e) => e.id === t);
            e && (e.context = w);
          }),
          r.useMemo(
            () => ({ ...v, context: w, refs: g, elements: y }),
            [v, g, y, w],
          )
        );
      }
      function Ge(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            events: s,
            dataRef: d,
            elements: p,
          } = e,
          { enabled: m = !0, visibleOnly: g = !0 } = t,
          w = r.useRef(!1),
          b = r.useRef(-1),
          x = r.useRef(!0);
        r.useEffect(() => {
          if (!m) return;
          const e = (0, i.zk)(p.domReference);
          function t() {
            !n &&
              (0, i.sb)(p.domReference) &&
              p.domReference === u(v(p.domReference)) &&
              (w.current = !0);
          }
          function r() {
            x.current = !0;
          }
          return (
            e.addEventListener("blur", t),
            e.addEventListener("keydown", r, !0),
            () => {
              e.removeEventListener("blur", t),
                e.removeEventListener("keydown", r, !0);
            }
          );
        }, [p.domReference, n, m]),
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
                (w.current = !0);
            }
          }, [s, m]),
          r.useEffect(
            () => () => {
              ae(b);
            },
            [],
          );
        const E = r.useMemo(
          () => ({
            onPointerDown(e) {
              a(e.nativeEvent) || (x.current = !1);
            },
            onMouseLeave() {
              w.current = !1;
            },
            onFocus(e) {
              if (w.current) return;
              const t = h(e.nativeEvent);
              if (g && (0, i.vq)(t))
                try {
                  if (
                    f() &&
                    l().toLowerCase().startsWith("mac") &&
                    !navigator.maxTouchPoints
                  )
                    throw Error();
                  if (!t.matches(":focus-visible")) return;
                } catch (e) {
                  if (!x.current && !y(t)) return;
                }
              o(!0, e.nativeEvent, "focus");
            },
            onBlur(e) {
              w.current = !1;
              const t = e.relatedTarget,
                n = e.nativeEvent,
                r =
                  (0, i.vq)(t) &&
                  t.hasAttribute(se("focus-guard")) &&
                  "outside" === t.getAttribute("data-type");
              b.current = window.setTimeout(() => {
                var e;
                const i = u(
                  p.domReference ? p.domReference.ownerDocument : document,
                );
                (t || i !== p.domReference) &&
                  (c(
                    null == (e = d.current.floatingContext)
                      ? void 0
                      : e.refs.floating.current,
                    i,
                  ) ||
                    c(p.domReference, i) ||
                    r ||
                    o(!1, n, "focus"));
              });
            },
          }),
          [d, p.domReference, o, g],
        );
        return r.useMemo(() => (m ? { reference: E } : {}), [m, E]);
      }
      const Je = "active",
        et = "selected";
      function tt(e, t, n) {
        const r = new Map(),
          o = "item" === n;
        let i = e;
        if (o && e) {
          const { [Je]: t, [et]: n, ...r } = e;
          i = r;
        }
        return {
          ...("floating" === n && { tabIndex: -1, [Ie]: "" }),
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
                      var u;
                      (o && [Je, et].includes(n)) ||
                        (0 === n.indexOf("on")
                          ? (r.has(n) || r.set(n, []),
                            "function" == typeof i &&
                              (null == (u = r.get(n)) || u.push(i),
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
      function nt(e) {
        void 0 === e && (e = []);
        const t = e.map((e) => (null == e ? void 0 : e.reference)),
          n = e.map((e) => (null == e ? void 0 : e.floating)),
          o = e.map((e) => (null == e ? void 0 : e.item)),
          i = r.useCallback((t) => tt(t, e, "reference"), t),
          u = r.useCallback((t) => tt(t, e, "floating"), n),
          c = r.useCallback((t) => tt(t, e, "item"), o);
        return r.useMemo(
          () => ({
            getReferenceProps: i,
            getFloatingProps: u,
            getItemProps: c,
          }),
          [i, u, c],
        );
      }
      function rt(e, t) {
        const [n, r] = e;
        let o = !1;
        const i = t.length;
        for (let e = 0, u = i - 1; e < i; u = e++) {
          const [i, c] = t[e] || [0, 0],
            [l, s] = t[u] || [0, 0];
          c >= r != s >= r &&
            n <= ((l - i) * (r - c)) / (s - c) + i &&
            (o = !o);
        }
        return o;
      }
      function ot(e) {
        void 0 === e && (e = {});
        const {
          buffer: t = 0.5,
          blockPointerEvents: n = !1,
          requireIntent: r = !0,
        } = e;
        let o,
          u = !1,
          l = null,
          s = null,
          a = performance.now();
        const f = (e) => {
          let {
            x: n,
            y: f,
            placement: d,
            elements: p,
            onClose: v,
            nodeId: m,
            tree: g,
          } = e;
          return function (e) {
            function y() {
              clearTimeout(o), v();
            }
            if (
              (clearTimeout(o),
              !p.domReference ||
                !p.floating ||
                null == d ||
                null == n ||
                null == f)
            )
              return;
            const { clientX: w, clientY: b } = e,
              x = [w, b],
              E = h(e),
              R = "mouseleave" === e.type,
              L = c(p.floating, E),
              k = c(p.domReference, E),
              C = p.domReference.getBoundingClientRect(),
              S = p.floating.getBoundingClientRect(),
              T = d.split("-")[0],
              A = n > S.right - S.width / 2,
              M = f > S.bottom - S.height / 2,
              P = (function (e, t) {
                return (
                  e[0] >= t.x &&
                  e[0] <= t.x + t.width &&
                  e[1] >= t.y &&
                  e[1] <= t.y + t.height
                );
              })(x, C),
              O = S.width > C.width,
              D = S.height > C.height,
              N = (O ? C : S).left,
              q = (O ? C : S).right,
              I = (D ? C : S).top,
              F = (D ? C : S).bottom;
            if (L && ((u = !0), !R)) return;
            if ((k && (u = !1), k && !R)) return void (u = !0);
            if (
              R &&
              (0, i.vq)(e.relatedTarget) &&
              c(p.floating, e.relatedTarget)
            )
              return;
            if (
              g &&
              ye(g.nodesRef.current, m).some((e) => {
                let { context: t } = e;
                return null == t ? void 0 : t.open;
              })
            )
              return;
            if (
              ("top" === T && f >= C.bottom - 1) ||
              ("bottom" === T && f <= C.top + 1) ||
              ("left" === T && n >= C.right - 1) ||
              ("right" === T && n <= C.left + 1)
            )
              return y();
            let B = [];
            switch (T) {
              case "top":
                B = [
                  [N, C.top + 1],
                  [N, S.bottom - 1],
                  [q, S.bottom - 1],
                  [q, C.top + 1],
                ];
                break;
              case "bottom":
                B = [
                  [N, S.top + 1],
                  [N, C.bottom - 1],
                  [q, C.bottom - 1],
                  [q, S.top + 1],
                ];
                break;
              case "left":
                B = [
                  [S.right - 1, F],
                  [S.right - 1, I],
                  [C.left + 1, I],
                  [C.left + 1, F],
                ];
                break;
              case "right":
                B = [
                  [C.right - 1, F],
                  [C.right - 1, I],
                  [S.left + 1, I],
                  [S.left + 1, F],
                ];
            }
            if (!rt([w, b], B)) {
              if (u && !P) return y();
              if (!R && r) {
                const t = (function (e, t) {
                  const n = performance.now(),
                    r = n - a;
                  if (null === l || null === s || 0 === r)
                    return (l = e), (s = t), (a = n), null;
                  const o = e - l,
                    i = t - s,
                    u = Math.sqrt(o * o + i * i);
                  return (l = e), (s = t), (a = n), u / r;
                })(e.clientX, e.clientY);
                if (null !== t && t < 0.1) return y();
              }
              rt(
                [w, b],
                (function (e) {
                  let [n, r] = e;
                  switch (T) {
                    case "top":
                      return [
                        [O ? n + t / 2 : A ? n + 4 * t : n - 4 * t, r + t + 1],
                        [O ? n - t / 2 : A ? n + 4 * t : n - 4 * t, r + t + 1],
                        ...[
                          [S.left, A || O ? S.bottom - t : S.top],
                          [
                            S.right,
                            A ? (O ? S.bottom - t : S.top) : S.bottom - t,
                          ],
                        ],
                      ];
                    case "bottom":
                      return [
                        [O ? n + t / 2 : A ? n + 4 * t : n - 4 * t, r - t],
                        [O ? n - t / 2 : A ? n + 4 * t : n - 4 * t, r - t],
                        ...[
                          [S.left, A || O ? S.top + t : S.bottom],
                          [S.right, A ? (O ? S.top + t : S.bottom) : S.top + t],
                        ],
                      ];
                    case "left": {
                      const e = [
                          n + t + 1,
                          D ? r + t / 2 : M ? r + 4 * t : r - 4 * t,
                        ],
                        o = [
                          n + t + 1,
                          D ? r - t / 2 : M ? r + 4 * t : r - 4 * t,
                        ];
                      return [
                        ...[
                          [M || D ? S.right - t : S.left, S.top],
                          [
                            M ? (D ? S.right - t : S.left) : S.right - t,
                            S.bottom,
                          ],
                        ],
                        e,
                        o,
                      ];
                    }
                    case "right":
                      return [
                        [n - t, D ? r + t / 2 : M ? r + 4 * t : r - 4 * t],
                        [n - t, D ? r - t / 2 : M ? r + 4 * t : r - 4 * t],
                        ...[
                          [M || D ? S.left + t : S.right, S.top],
                          [
                            M ? (D ? S.left + t : S.right) : S.left + t,
                            S.bottom,
                          ],
                        ],
                      ];
                  }
                })([n, f]),
              )
                ? !u && r && (o = window.setTimeout(y, 40))
                : y();
            }
          };
        };
        return (f.__options = { blockPointerEvents: n }), f;
      }
    },
    977: (e, t, n) => {
      function r() {
        return "undefined" != typeof window;
      }
      function o(e) {
        return c(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function i(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function u(e) {
        var t;
        return null ==
          (t = (c(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function c(e) {
        return !!r() && (e instanceof Node || e instanceof i(e).Node);
      }
      function l(e) {
        return !!r() && (e instanceof Element || e instanceof i(e).Element);
      }
      function s(e) {
        return (
          !!r() && (e instanceof HTMLElement || e instanceof i(e).HTMLElement)
        );
      }
      function a(e) {
        return (
          !(!r() || "undefined" == typeof ShadowRoot) &&
          (e instanceof ShadowRoot || e instanceof i(e).ShadowRoot)
        );
      }
      function f(e) {
        const { overflow: t, overflowX: n, overflowY: r, display: o } = E(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          "inline" !== o &&
          "contents" !== o
        );
      }
      function d(e) {
        return /^(table|td|th)$/.test(o(e));
      }
      function p(e) {
        try {
          if (e.matches(":popover-open")) return !0;
        } catch (e) {}
        try {
          return e.matches(":modal");
        } catch (e) {
          return !1;
        }
      }
      n.d(t, {
        $4: () => L,
        CP: () => R,
        L9: () => E,
        Lv: () => d,
        Ng: () => a,
        Tc: () => b,
        Tf: () => p,
        ZU: () => f,
        _m: () => S,
        ep: () => u,
        eu: () => x,
        gJ: () => w,
        mq: () => o,
        sQ: () => y,
        sb: () => s,
        v9: () => C,
        vq: () => l,
        zk: () => i,
      });
      const v = /transform|translate|scale|rotate|perspective|filter/,
        m = /paint|layout|strict|content/,
        h = (e) => !!e && "none" !== e;
      let g;
      function y(e) {
        const t = l(e) ? E(e) : e;
        return (
          h(t.transform) ||
          h(t.translate) ||
          h(t.scale) ||
          h(t.rotate) ||
          h(t.perspective) ||
          (!b() && (h(t.backdropFilter) || h(t.filter))) ||
          v.test(t.willChange || "") ||
          m.test(t.contain || "")
        );
      }
      function w(e) {
        let t = L(e);
        for (; s(t) && !x(t); ) {
          if (y(t)) return t;
          if (p(t)) return null;
          t = L(t);
        }
        return null;
      }
      function b() {
        return (
          null == g &&
            (g =
              "undefined" != typeof CSS &&
              CSS.supports &&
              CSS.supports("-webkit-backdrop-filter", "none")),
          g
        );
      }
      function x(e) {
        return /^(html|body|#document)$/.test(o(e));
      }
      function E(e) {
        return i(e).getComputedStyle(e);
      }
      function R(e) {
        return l(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function L(e) {
        if ("html" === o(e)) return e;
        const t = e.assignedSlot || e.parentNode || (a(e) && e.host) || u(e);
        return a(t) ? t.host : t;
      }
      function k(e) {
        const t = L(e);
        return x(t) ? (e.ownerDocument || e).body : s(t) && f(t) ? t : k(t);
      }
      function C(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = k(e),
          u = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          c = i(o);
        if (u) {
          const e = S(c);
          return t.concat(
            c,
            c.visualViewport || [],
            f(o) ? o : [],
            e && n ? C(e) : [],
          );
        }
        return t.concat(o, C(o, [], n));
      }
      function S(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
    },
  },
]);
