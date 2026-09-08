/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2421],
  {
    8083: (e, t, n) => {
      n.d(t, {
        ll: () => E,
        rD: () => L,
        UU: () => I,
        cY: () => k,
        iD: () => x,
        BN: () => C,
        Ej: () => T,
      });
      var r = n(58015);
      function o(e, t, n) {
        let { reference: o, floating: i } = e;
        const u = (0, r.TV)(t),
          c = (0, r.Dz)(t),
          l = (0, r.sq)(c),
          s = (0, r.C0)(t),
          a = "y" === u,
          f = o.x + o.width / 2 - i.width / 2,
          d = o.y + o.height / 2 - i.height / 2,
          v = o[l] / 2 - i[l] / 2;
        let m;
        switch (s) {
          case "top":
            m = { x: f, y: o.y - i.height };
            break;
          case "bottom":
            m = { x: f, y: o.y + o.height };
            break;
          case "right":
            m = { x: o.x + o.width, y: d };
            break;
          case "left":
            m = { x: o.x - i.width, y: d };
            break;
          default:
            m = { x: o.x, y: o.y };
        }
        const p = (0, r.Sg)(t);
        return p && (m[c] += v * ("end" === p ? 1 : -1) * (n && a ? -1 : 1)), m;
      }
      async function i(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
            x: o,
            y: i,
            platform: u,
            rects: c,
            elements: l,
            strategy: s,
          } = e,
          {
            boundary: a = "clippingAncestors",
            rootBoundary: f = "viewport",
            elementContext: d = "floating",
            altBoundary: v = !1,
            padding: m = 0,
          } = (0, r._3)(t, e),
          p = (0, r.nI)(m),
          g = l[v ? ("floating" === d ? "reference" : "floating") : d],
          h = (0, r.B1)(
            await u.getClippingRect({
              element:
                null ==
                  (n = await (null == u.isElement ? void 0 : u.isElement(g))) ||
                n
                  ? g
                  : g.contextElement ||
                    (await (null == u.getDocumentElement
                      ? void 0
                      : u.getDocumentElement(l.floating))),
              boundary: a,
              rootBoundary: f,
              strategy: s,
            }),
          ),
          y =
            "floating" === d
              ? {
                  x: o,
                  y: i,
                  width: c.floating.width,
                  height: c.floating.height,
                }
              : c.reference,
          b = await (null == u.getOffsetParent
            ? void 0
            : u.getOffsetParent(l.floating)),
          w = ((await (null == u.isElement ? void 0 : u.isElement(b))) &&
            (await (null == u.getScale ? void 0 : u.getScale(b)))) || {
            x: 1,
            y: 1,
          },
          x = (0, r.B1)(
            u.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: l,
                  rect: y,
                  offsetParent: b,
                  strategy: s,
                })
              : y,
          );
        return {
          top: (h.top - x.top + p.top) / w.y,
          bottom: (x.bottom - h.bottom + p.bottom) / w.y,
          left: (h.left - x.left + p.left) / w.x,
          right: (x.right - h.right + p.right) / w.x,
        };
      }
      const u = new Set(["left", "top"]);
      var c = n(977);
      function l(e) {
        const t = (0, c.L9)(e);
        let n = parseFloat(t.width) || 0,
          o = parseFloat(t.height) || 0;
        const i = (0, c.sb)(e),
          u = i ? e.offsetWidth : n,
          l = i ? e.offsetHeight : o,
          s = (0, r.LI)(n) !== u || (0, r.LI)(o) !== l;
        return s && ((n = u), (o = l)), { width: n, height: o, $: s };
      }
      function s(e) {
        return (0, c.vq)(e) ? e : e.contextElement;
      }
      function a(e) {
        const t = s(e);
        if (!(0, c.sb)(t)) return (0, r.Jx)(1);
        const n = t.getBoundingClientRect(),
          { width: o, height: i, $: u } = l(t);
        let a = (u ? (0, r.LI)(n.width) : n.width) / o,
          f = (u ? (0, r.LI)(n.height) : n.height) / i;
        return (
          (a && Number.isFinite(a)) || (a = 1),
          (f && Number.isFinite(f)) || (f = 1),
          { x: a, y: f }
        );
      }
      const f = (0, r.Jx)(0);
      function d(e) {
        const t = (0, c.zk)(e);
        return (0, c.Tc)() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : f;
      }
      function v(e, t, n, o) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const i = e.getBoundingClientRect(),
          u = s(e);
        let l = (0, r.Jx)(1);
        t && (o ? (0, c.vq)(o) && (l = a(o)) : (l = a(e)));
        const f = (function (e, t, n) {
          return void 0 === t && (t = !1), !!n && t && n === (0, c.zk)(e);
        })(u, n, o)
          ? d(u)
          : (0, r.Jx)(0);
        let v = (i.left + f.x) / l.x,
          m = (i.top + f.y) / l.y,
          p = i.width / l.x,
          g = i.height / l.y;
        if (u && o) {
          const e = (0, c.zk)(u),
            t = (0, c.vq)(o) ? (0, c.zk)(o) : o;
          let n = e,
            r = (0, c._m)(n);
          for (; r && t !== n; ) {
            const e = a(r),
              t = r.getBoundingClientRect(),
              o = (0, c.L9)(r),
              i = t.left + (r.clientLeft + parseFloat(o.paddingLeft)) * e.x,
              u = t.top + (r.clientTop + parseFloat(o.paddingTop)) * e.y;
            (v *= e.x),
              (m *= e.y),
              (p *= e.x),
              (g *= e.y),
              (v += i),
              (m += u),
              (n = (0, c.zk)(r)),
              (r = (0, c._m)(n));
          }
        }
        return (0, r.B1)({ width: p, height: g, x: v, y: m });
      }
      function m(e, t) {
        const n = (0, c.CP)(e).scrollLeft;
        return t ? t.left + n : v((0, c.ep)(e)).left + n;
      }
      function p(e, t) {
        const n = e.getBoundingClientRect();
        return { x: n.left + t.scrollLeft - m(e, n), y: n.top + t.scrollTop };
      }
      function g(e, t, n) {
        let o;
        if ("viewport" === t || "layoutViewport" === t)
          o = (function (e, t, n) {
            void 0 === n && (n = "viewport");
            const r = "layoutViewport" === n,
              o = (0, c.zk)(e),
              i = (0, c.ep)(e),
              u = o.visualViewport;
            let l = i.clientWidth,
              s = i.clientHeight,
              a = 0,
              f = 0;
            if (u) {
              const e = !(0, c.Tc)() || "fixed" === t;
              r
                ? e || ((a = -u.offsetLeft), (f = -u.offsetTop))
                : ((l = u.width),
                  (s = u.height),
                  e && ((a = u.offsetLeft), (f = u.offsetTop)));
            }
            if (m(i) <= 0) {
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
              u <= 25 && (l -= u);
            }
            return { width: l, height: s, x: a, y: f };
          })(e, n, t);
        else if ("document" === t)
          o = (function (e) {
            const t = (0, c.CP)(e),
              n = e.ownerDocument.body,
              o = (0, r.T9)(
                e.scrollWidth,
                e.clientWidth,
                n.scrollWidth,
                n.clientWidth,
              ),
              i = (0, r.T9)(
                e.scrollHeight,
                e.clientHeight,
                n.scrollHeight,
                n.clientHeight,
              );
            let u = -t.scrollLeft + m(e);
            const l = -t.scrollTop;
            return (
              "rtl" === (0, c.L9)(n).direction &&
                (u += (0, r.T9)(e.clientWidth, n.clientWidth) - o),
              { width: o, height: i, x: u, y: l }
            );
          })((0, c.ep)(e));
        else if ((0, c.vq)(t))
          o = (function (e, t) {
            const n = v(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = a(e);
            return {
              width: e.clientWidth * i.x,
              height: e.clientHeight * i.y,
              x: o * i.x,
              y: r * i.y,
            };
          })(t, n);
        else {
          const n = d(e);
          o = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
        }
        return (0, r.B1)(o);
      }
      function h(e, t, n) {
        const o = (0, c.sb)(t),
          i = (0, c.ep)(t),
          u = "fixed" === n,
          l = v(e, !0, u, t);
        let s = { scrollLeft: 0, scrollTop: 0 };
        const a = (0, r.Jx)(0);
        if (
          (o || !u) &&
          (("body" !== (0, c.mq)(t) || (0, c.ZU)(i)) && (s = (0, c.CP)(t)), o)
        ) {
          const e = v(t, !0, u, t);
          (a.x = e.x + t.clientLeft), (a.y = e.y + t.clientTop);
        }
        !o && i && (a.x = m(i));
        const f = !i || o || u ? (0, r.Jx)(0) : p(i, s);
        return {
          x: l.left + s.scrollLeft - a.x - f.x,
          y: l.top + s.scrollTop - a.y - f.y,
          width: l.width,
          height: l.height,
        };
      }
      function y(e) {
        return "static" === (0, c.L9)(e).position;
      }
      function b(e, t) {
        if (!(0, c.sb)(e) || "fixed" === (0, c.L9)(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return (0, c.ep)(e) === n && (n = n.ownerDocument.body), n;
      }
      function w(e, t) {
        const n = (0, c.zk)(e);
        if ((0, c.Tf)(e)) return n;
        if (!(0, c.sb)(e)) {
          let t = (0, c.$4)(e);
          for (; t && !(0, c.eu)(t); ) {
            if ((0, c.vq)(t) && !y(t)) return t;
            t = (0, c.$4)(t);
          }
          return n;
        }
        let r = b(e, t);
        for (; r && (0, c.Lv)(r) && y(r); ) r = b(r, t);
        return r && (0, c.eu)(r) && y(r) && !(0, c.sQ)(r)
          ? n
          : r || (0, c.gJ)(e) || n;
      }
      const x = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
          let { elements: t, rect: n, offsetParent: o, strategy: i } = e;
          const u = "fixed" === i,
            l = (0, c.ep)(o),
            s = !!t && (0, c.Tf)(t.floating);
          if (o === l || (s && u)) return n;
          let f = { scrollLeft: 0, scrollTop: 0 },
            d = (0, r.Jx)(1);
          const m = (0, r.Jx)(0),
            g = (0, c.sb)(o);
          if (
            (g || !u) &&
            (("body" !== (0, c.mq)(o) || (0, c.ZU)(l)) && (f = (0, c.CP)(o)), g)
          ) {
            const e = v(o);
            (d = a(o)), (m.x = e.x + o.clientLeft), (m.y = e.y + o.clientTop);
          }
          const h = !l || g || u ? (0, r.Jx)(0) : p(l, f);
          return {
            width: n.width * d.x,
            height: n.height * d.y,
            x: n.x * d.x - f.scrollLeft * d.x + m.x + h.x,
            y: n.y * d.y - f.scrollTop * d.y + m.y + h.y,
          };
        },
        getDocumentElement: c.ep,
        getClippingRect: function (e) {
          let { element: t, boundary: n, rootBoundary: o, strategy: i } = e;
          const u = [
              ...("clippingAncestors" === n
                ? (0, c.Tf)(t)
                  ? []
                  : (function (e, t) {
                      const n = t.get(e);
                      if (n) return n;
                      let r = (0, c.v9)(e, [], !1).filter(
                          (e) => (0, c.vq)(e) && "body" !== (0, c.mq)(e),
                        ),
                        o = null;
                      const i = "fixed" === (0, c.L9)(e).position;
                      let u = i ? (0, c.$4)(e) : e;
                      for (; (0, c.vq)(u) && !(0, c.eu)(u); ) {
                        const e = (0, c.L9)(u),
                          t = (0, c.sQ)(u),
                          n = o ? o.position : i ? "fixed" : "";
                        t ||
                        ("fixed" !== n &&
                          ("absolute" !== n || "static" !== e.position))
                          ? (o = e)
                          : (r = r.filter((e) => e !== u)),
                          (u = (0, c.$4)(u));
                      }
                      return t.set(e, r), r;
                    })(t, this._c)
                : [].concat(n)),
              o,
            ],
            l = g(t, u[0], i);
          let s = l.top,
            a = l.right,
            f = l.bottom,
            d = l.left;
          for (let e = 1; e < u.length; e++) {
            const n = g(t, u[e], i);
            (s = (0, r.T9)(n.top, s)),
              (a = (0, r.jk)(n.right, a)),
              (f = (0, r.jk)(n.bottom, f)),
              (d = (0, r.T9)(n.left, d));
          }
          return { width: a - d, height: f - s, x: d, y: s };
        },
        getOffsetParent: w,
        getElementRects: async function (e) {
          const t = this.getOffsetParent || w,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: h(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        getClientRects: function (e) {
          return e.getClientRects ? Array.from(e.getClientRects()) : [];
        },
        getDimensions: function (e) {
          const { width: t, height: n } = l(e);
          return { width: t, height: n };
        },
        getScale: a,
        isElement: c.vq,
        isRTL: function (e) {
          return "rtl" === (0, c.L9)(e).direction;
        },
      };
      function R(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      function E(e, t, n, o) {
        void 0 === o && (o = {});
        const {
            ancestorScroll: i = !0,
            ancestorResize: u = !0,
            elementResize: l = "function" == typeof ResizeObserver,
            layoutShift: a = "function" == typeof IntersectionObserver,
            animationFrame: f = !1,
          } = o,
          d = s(e),
          m =
            i || u
              ? [...(d ? (0, c.v9)(d) : []), ...(t ? (0, c.v9)(t) : [])]
              : [];
        m.forEach((e) => {
          i && e.addEventListener("scroll", n),
            u && e.addEventListener("resize", n);
        });
        const p =
          d && a
            ? (function (e, t, n) {
                let o,
                  i = null;
                const u = (0, c.ep)(e);
                function l() {
                  var e;
                  clearTimeout(o),
                    null == (e = i) || e.disconnect(),
                    (i = null);
                }
                function s(n, c) {
                  void 0 === n && (n = !1), void 0 === c && (c = 1), l();
                  const a = e.getBoundingClientRect(),
                    { left: f, top: d, width: v, height: m } = a;
                  if ((n || t(), !v || !m)) return;
                  const p = {
                    rootMargin:
                      -(0, r.RI)(d) +
                      "px " +
                      -(0, r.RI)(u.clientWidth - (f + v)) +
                      "px " +
                      -(0, r.RI)(u.clientHeight - (d + m)) +
                      "px " +
                      -(0, r.RI)(f) +
                      "px",
                    threshold: (0, r.T9)(0, (0, r.jk)(1, c)) || 1,
                  };
                  let g = !0;
                  function h(t) {
                    const n = t[0].intersectionRatio;
                    if (!R(a, e.getBoundingClientRect())) return s();
                    if (n !== c) {
                      if (!g) return s();
                      n
                        ? s(!1, n)
                        : (o = setTimeout(() => {
                            s(!1, 1e-7);
                          }, 1e3));
                    }
                    g = !1;
                  }
                  try {
                    i = new IntersectionObserver(h, {
                      ...p,
                      root: u.ownerDocument,
                    });
                  } catch (e) {
                    i = new IntersectionObserver(h, p);
                  }
                  i.observe(e);
                }
                const a = (0, c.zk)(e),
                  f = () => s(n);
                return (
                  a.addEventListener("resize", f),
                  s(!0),
                  () => {
                    a.removeEventListener("resize", f), l();
                  }
                );
              })(d, n, u)
            : null;
        let g,
          h = -1,
          y = null;
        l &&
          ((y = new ResizeObserver((e) => {
            let [r] = e;
            r &&
              r.target === d &&
              y &&
              t &&
              (y.unobserve(t),
              cancelAnimationFrame(h),
              (h = requestAnimationFrame(() => {
                var e;
                null == (e = y) || e.observe(t);
              }))),
              n();
          })),
          d && !f && y.observe(d),
          t && y.observe(t));
        let b = f ? v(e) : null;
        return (
          f &&
            (function t() {
              const r = v(e);
              b && !R(b, r) && n();
              (b = r), (g = requestAnimationFrame(t));
            })(),
          n(),
          () => {
            var e;
            m.forEach((e) => {
              i && e.removeEventListener("scroll", n),
                u && e.removeEventListener("resize", n);
            }),
              null == p || p(),
              null == (e = y) || e.disconnect(),
              (y = null),
              f && cancelAnimationFrame(g);
          }
        );
      }
      const k = function (e) {
          return (
            void 0 === e && (e = 0),
            {
              name: "offset",
              options: e,
              async fn(t) {
                var n, o;
                const { x: i, y: c, placement: l, middlewareData: s } = t,
                  a = await (async function (e, t) {
                    const { placement: n, platform: o, elements: i } = e,
                      c = await (null == o.isRTL
                        ? void 0
                        : o.isRTL(i.floating)),
                      l = (0, r.C0)(n),
                      s = (0, r.Sg)(n),
                      a = "y" === (0, r.TV)(n),
                      f = u.has(l) ? -1 : 1,
                      d = c && a ? -1 : 1,
                      v = (0, r._3)(t, e);
                    let {
                      mainAxis: m,
                      crossAxis: p,
                      alignmentAxis: g,
                    } = "number" == typeof v
                      ? { mainAxis: v, crossAxis: 0, alignmentAxis: null }
                      : {
                          mainAxis: v.mainAxis || 0,
                          crossAxis: v.crossAxis || 0,
                          alignmentAxis: v.alignmentAxis,
                        };
                    return (
                      s &&
                        "number" == typeof g &&
                        (p = "end" === s ? -1 * g : g),
                      a ? { x: p * d, y: m * f } : { x: m * f, y: p * d }
                    );
                  })(t, e);
                return l === (null == (n = s.offset) ? void 0 : n.placement) &&
                  null != (o = s.arrow) &&
                  o.alignmentOffset
                  ? {}
                  : { x: i + a.x, y: c + a.y, data: { ...a, placement: l } };
              },
            }
          );
        },
        C = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "shift",
              options: e,
              async fn(t) {
                const { x: n, y: o, placement: i, platform: u } = t,
                  {
                    mainAxis: c = !0,
                    crossAxis: l = !1,
                    limiter: s = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...a
                  } = (0, r._3)(e, t),
                  f = { x: n, y: o },
                  d = await u.detectOverflow(t, a),
                  v = (0, r.TV)(i),
                  m = (0, r.PG)(v);
                let p = f[m],
                  g = f[v];
                const h = (e, t) =>
                  (0, r.qE)(
                    t + d["y" === e ? "top" : "left"],
                    t,
                    t - d["y" === e ? "bottom" : "right"],
                  );
                c && (p = h(m, p)), l && (g = h(v, g));
                const y = s.fn({ ...t, [m]: p, [v]: g });
                return {
                  ...y,
                  data: { x: y.x - n, y: y.y - o, enabled: { [m]: c, [v]: l } },
                };
              },
            }
          );
        },
        I = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "flip",
              options: e,
              async fn(t) {
                var n, o;
                const {
                    placement: i,
                    middlewareData: u,
                    rects: c,
                    initialPlacement: l,
                    platform: s,
                    elements: a,
                  } = t,
                  {
                    mainAxis: f = !0,
                    crossAxis: d = !0,
                    fallbackPlacements: v,
                    fallbackStrategy: m = "bestFit",
                    fallbackAxisSideDirection: p = "none",
                    flipAlignment: g = !0,
                    ...h
                  } = (0, r._3)(e, t);
                if (null != (n = u.arrow) && n.alignmentOffset) return {};
                const y = (0, r.C0)(i),
                  b = (0, r.TV)(l),
                  w = (0, r.C0)(l) === l,
                  x = await (null == s.isRTL ? void 0 : s.isRTL(a.floating)),
                  R = v || (w || !g ? [(0, r.bV)(l)] : (0, r.WJ)(l)),
                  E = "none" !== p;
                !v && E && R.push(...(0, r.lP)(l, g, p, x));
                const k = [l, ...R],
                  C = await s.detectOverflow(t, h),
                  I = [];
                let T = (null == (o = u.flip) ? void 0 : o.overflows) || [];
                if ((f && I.push(C[y]), d)) {
                  const e = (0, r.w7)(i, c, x);
                  I.push(C[e[0]], C[e[1]]);
                }
                if (
                  ((T = [...T, { placement: i, overflows: I }]),
                  !I.every((e) => e <= 0))
                ) {
                  var L, S;
                  const e =
                      ((null == (L = u.flip) ? void 0 : L.index) || 0) + 1,
                    t = k[e];
                  if (t) {
                    if (
                      !("alignment" === d && b !== (0, r.TV)(t)) ||
                      T.every(
                        (e) =>
                          (0, r.TV)(e.placement) !== b || e.overflows[0] > 0,
                      )
                    )
                      return {
                        data: { index: e, overflows: T },
                        reset: { placement: t },
                      };
                  }
                  let n =
                    null ==
                    (S = T.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1],
                    )[0])
                      ? void 0
                      : S.placement;
                  if (!n)
                    switch (m) {
                      case "bestFit": {
                        var M;
                        const e =
                          null ==
                          (M = T.filter((e) => {
                            if (E) {
                              const t = (0, r.TV)(e.placement);
                              return t === b || "y" === t;
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
                            : M[0];
                        e && (n = e);
                        break;
                      }
                      case "initialPlacement":
                        n = l;
                    }
                  if (i !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }
          );
        },
        T = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "size",
              options: e,
              async fn(t) {
                const { placement: n, rects: o, platform: i, elements: u } = t,
                  { apply: c = () => {}, ...l } = (0, r._3)(e, t),
                  s = await i.detectOverflow(t, l),
                  a = (0, r.C0)(n),
                  f = (0, r.Sg)(n),
                  d = "y" === (0, r.TV)(n),
                  { width: v, height: m } = o.floating;
                let p, g;
                "top" === a || "bottom" === a
                  ? ((p = a),
                    (g =
                      f ===
                      ((await (null == i.isRTL ? void 0 : i.isRTL(u.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((g = a), (p = "end" === f ? "top" : "bottom"));
                const h = m - s.top - s.bottom,
                  y = v - s.left - s.right,
                  b = (0, r.jk)(m - s[p], h),
                  w = (0, r.jk)(v - s[g], y),
                  x = t.middlewareData.shift,
                  R = !x;
                let E = b,
                  k = w;
                null != x && x.enabled.x && (k = y),
                  null != x && x.enabled.y && (E = h),
                  R &&
                    !f &&
                    (d
                      ? (k = v - 2 * (0, r.T9)(s.left, s.right))
                      : (E = m - 2 * (0, r.T9)(s.top, s.bottom))),
                  await c({ ...t, availableWidth: k, availableHeight: E });
                const C = await i.getDimensions(u.floating);
                return v !== C.width || m !== C.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        },
        L = (e, t, n) => {
          const r = new Map(),
            u = null != n ? n : {},
            c = { ...x, ...u.platform, _c: r };
          return (async (e, t, n) => {
            const {
                placement: r = "bottom",
                strategy: u = "absolute",
                middleware: c = [],
                platform: l,
              } = n,
              s = l.detectOverflow ? l : { ...l, detectOverflow: i },
              a = await (null == l.isRTL ? void 0 : l.isRTL(t));
            let f = await l.getElementRects({
                reference: e,
                floating: t,
                strategy: u,
              }),
              { x: d, y: v } = o(f, r, a),
              m = r,
              p = 0;
            const g = {};
            for (let n = 0; n < c.length; n++) {
              const i = c[n];
              if (!i) continue;
              const { name: h, fn: y } = i,
                {
                  x: b,
                  y: w,
                  data: x,
                  reset: R,
                } = await y({
                  x: d,
                  y: v,
                  initialPlacement: r,
                  placement: m,
                  strategy: u,
                  middlewareData: g,
                  rects: f,
                  platform: s,
                  elements: { reference: e, floating: t },
                });
              (d = null != b ? b : d),
                (v = null != w ? w : v),
                (g[h] = { ...g[h], ...x }),
                R &&
                  p < 50 &&
                  (p++,
                  "object" == typeof R &&
                    (R.placement && (m = R.placement),
                    R.rects &&
                      (f =
                        !0 === R.rects
                          ? await l.getElementRects({
                              reference: e,
                              floating: t,
                              strategy: u,
                            })
                          : R.rects),
                    ({ x: d, y: v } = o(f, m, a))),
                  (n = -1));
            }
            return { x: d, y: v, placement: m, strategy: u, middlewareData: g };
          })(e, t, { ...u, platform: c });
        };
    },
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
        i = n(72739),
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
            elements: { reference: v, floating: m } = {},
            transform: p = !0,
            whileElementsMounted: g,
            open: h,
          } = e,
          [y, b] = o.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
          }),
          [w, x] = o.useState(f);
        c(w, f) || x(f);
        const [R, E] = o.useState(null),
          [k, C] = o.useState(null),
          I = o.useCallback((e) => {
            e !== M.current && ((M.current = e), E(e));
          }, []),
          T = o.useCallback((e) => {
            e !== A.current && ((A.current = e), C(e));
          }, []),
          L = v || R,
          S = m || k,
          M = o.useRef(null),
          A = o.useRef(null),
          O = o.useRef(y),
          P = null != g,
          D = a(g),
          N = a(d),
          q = a(h),
          F = o.useCallback(() => {
            if (!M.current || !A.current) return;
            const e = { placement: t, strategy: n, middleware: w };
            N.current && (e.platform = N.current),
              (0, r.rD)(M.current, A.current, e).then((e) => {
                const t = { ...e, isPositioned: !1 !== q.current };
                B.current &&
                  !c(O.current, t) &&
                  ((O.current = t),
                  i.flushSync(() => {
                    b(t);
                  }));
              });
          }, [w, t, n, N, q]);
        u(() => {
          !1 === h &&
            O.current.isPositioned &&
            ((O.current.isPositioned = !1),
            b((e) => ({ ...e, isPositioned: !1 })));
        }, [h]);
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
            if ((L && (M.current = L), S && (A.current = S), L && S)) {
              if (D.current) return D.current(L, S, F);
              F();
            }
          }, [L, S, F, D, P]);
        const _ = o.useMemo(
            () => ({
              reference: M,
              floating: A,
              setReference: I,
              setFloating: T,
            }),
            [I, T],
          ),
          V = o.useMemo(() => ({ reference: L, floating: S }), [L, S]),
          W = o.useMemo(() => {
            const e = { position: n, left: 0, top: 0 };
            if (!V.floating) return e;
            const t = s(V.floating, y.x),
              r = s(V.floating, y.y);
            return p
              ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...(l(V.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: n, left: t, top: r };
          }, [n, p, V.floating, y.x, y.y]);
        return o.useMemo(
          () => ({ ...y, update: F, refs: _, elements: V, floatingStyles: W }),
          [y, F, _, V, W],
        );
      }
      const d = (e, t) => ({ ...(0, r.cY)(e), options: [e, t] }),
        v = (e, t) => ({ ...(0, r.BN)(e), options: [e, t] }),
        m = (e, t) => ({ ...(0, r.UU)(e), options: [e, t] }),
        p = (e, t) => ({ ...(0, r.Ej)(e), options: [e, t] });
    },
    73788: (e, t, n) => {
      n.d(t, {
        s3: () => ut,
        ph: () => ve,
        iB: () => At,
        kp: () => st,
        s9: () => vt,
        we: () => mt,
        iQ: () => pt,
        Mk: () => Ae,
        bv: () => bt,
        rm: () => me,
        C1: () => It,
        SV: () => H,
        It: () => Lt,
        lY: () => St,
      });
      var r = n(90626),
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
      const y =
        "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
      function b(e) {
        return (0, i.sb)(e) && e.matches(y);
      }
      function w(e) {
        e.preventDefault(), e.stopPropagation();
      }
      function x(e) {
        return !!e && "combobox" === e.getAttribute("role") && b(e);
      }
      var R = n(58015),
        E = n(7850),
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
        C = k.join(","),
        I = "undefined" == typeof Element,
        T = I
          ? function () {}
          : Element.prototype.matches ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector,
        L =
          !I && Element.prototype.getRootNode
            ? function (e) {
                var t;
                return null == e || null === (t = e.getRootNode) || void 0 === t
                  ? void 0
                  : t.call(e);
              }
            : function (e) {
                return null == e ? void 0 : e.ownerDocument;
              },
        S = function e(t, n) {
          var r;
          void 0 === n && (n = !0);
          var o =
            null == t || null === (r = t.getAttribute) || void 0 === r
              ? void 0
              : r.call(t, "inert");
          return "" === o || "true" === o || (n && t && e(t.parentNode));
        },
        M = function (e, t, n) {
          if (S(e)) return [];
          var r = Array.prototype.slice.apply(e.querySelectorAll(C));
          return t && T.call(e, C) && r.unshift(e), (r = r.filter(n));
        },
        A = function e(t, n, r) {
          for (var o = [], i = Array.from(t); i.length; ) {
            var u = i.shift();
            if (!S(u, !1))
              if ("SLOT" === u.tagName) {
                var c = u.assignedElements(),
                  l = e(c.length ? c : u.children, !0, r);
                r.flatten
                  ? o.push.apply(o, l)
                  : o.push({ scopeParent: u, candidates: l });
              } else {
                T.call(u, C) &&
                  r.filter(u) &&
                  (n || !t.includes(u)) &&
                  o.push(u);
                var s =
                    u.shadowRoot ||
                    ("function" == typeof r.getShadowRoot &&
                      r.getShadowRoot(u)),
                  a =
                    !S(s, !1) && (!r.shadowRootFilter || r.shadowRootFilter(u));
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
        O = function (e) {
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
            !O(e)
            ? 0
            : e.tabIndex;
        },
        D = function (e, t) {
          return e.tabIndex === t.tabIndex
            ? e.documentOrder - t.documentOrder
            : e.tabIndex - t.tabIndex;
        },
        N = function (e) {
          return "INPUT" === e.tagName;
        },
        q = function (e) {
          return (
            (function (e) {
              return N(e) && "radio" === e.type;
            })(e) &&
            !(function (e) {
              if (!e.name) return !0;
              var t,
                n = e.form || L(e),
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
        B = function (e, t) {
          var n = t.displayCheck,
            r = t.getShadowRoot;
          if ("hidden" === getComputedStyle(e).visibility) return !0;
          var o = T.call(e, "details>summary:first-of-type")
            ? e.parentElement
            : e;
          if (T.call(o, "details:not([open]) *")) return !0;
          if (n && "full" !== n && "legacy-full" !== n) {
            if ("non-zero-area" === n) return F(e);
          } else {
            if ("function" == typeof r) {
              for (var i = e; e; ) {
                var u = e.parentElement,
                  c = L(e);
                if (u && !u.shadowRoot && !0 === r(u)) return F(e);
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
                  i = e && L(e),
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
                          null === (l = i = L(u)) || void 0 === l
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
        _ = function (e, t) {
          return !(
            t.disabled ||
            S(t) ||
            (function (e) {
              return N(e) && "hidden" === e.type;
            })(t) ||
            B(t, e) ||
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
                          !!T.call(t, "fieldset[disabled] *") || !r.contains(e)
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
        V = function (e, t) {
          return !(q(t) || P(t) < 0 || !_(e, t));
        },
        W = function (e) {
          var t = parseInt(e.getAttribute("tabindex"), 10);
          return !!(isNaN(t) || t >= 0);
        },
        z = function e(t) {
          var n = [],
            r = [];
          return (
            t.forEach(function (t, o) {
              var i = !!t.scopeParent,
                u = i ? t.scopeParent : t,
                c = (function (e, t) {
                  var n = P(e);
                  return n < 0 && t && !O(e) ? 0 : n;
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
              .sort(D)
              .reduce(function (e, t) {
                return (
                  t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
                );
              }, [])
              .concat(n)
          );
        },
        j = function (e, t) {
          var n;
          return (
            (n = (t = t || {}).getShadowRoot
              ? A([e], t.includeContainer, {
                  filter: V.bind(null, t),
                  flatten: !1,
                  getShadowRoot: t.getShadowRoot,
                  shadowRootFilter: W,
                })
              : M(e, t.includeContainer, V.bind(null, t))),
            z(n)
          );
        },
        K = function (e, t) {
          if (((t = t || {}), !e)) throw new Error("No node provided");
          return !1 !== T.call(e, C) && V(t, e);
        },
        U = (n(72739), n(94621));
      function H(e) {
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
      const Y = { ...o },
        J = Y.useInsertionEffect || ((e) => e());
      function $(e) {
        const t = r.useRef(() => {
          0;
        });
        return (
          J(() => {
            t.current = e;
          }),
          r.useCallback(function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return null == t.current ? void 0 : t.current(...n);
          }, [])
        );
      }
      const X = "ArrowUp",
        G = "ArrowDown",
        Q = "ArrowLeft",
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
        const u = e.current;
        let c = n;
        do {
          c += r ? -i : i;
        } while (c >= 0 && c <= u.length - 1 && se(u, c, o));
        return c;
      }
      function ie(e, t) {
        let {
            event: n,
            orientation: r,
            loop: o,
            rtl: i,
            cols: u,
            disabledIndices: c,
            minIndex: l,
            maxIndex: s,
            prevIndex: a,
            stopEvent: f = !1,
          } = t,
          d = a;
        if (n.key === X) {
          if ((f && w(n), -1 === a)) d = s;
          else if (
            ((d = oe(e, {
              startingIndex: d,
              amount: u,
              decrement: !0,
              disabledIndices: c,
            })),
            o && (a - u < l || d < 0))
          ) {
            const e = a % u,
              t = s % u,
              n = s - (t - e);
            d = t === e ? s : t > e ? n : n - u;
          }
          te(e, d) && (d = a);
        }
        if (
          (n.key === G &&
            (f && w(n),
            -1 === a
              ? (d = l)
              : ((d = oe(e, {
                  startingIndex: a,
                  amount: u,
                  disabledIndices: c,
                })),
                o &&
                  a + u > s &&
                  (d = oe(e, {
                    startingIndex: (a % u) - u,
                    amount: u,
                    disabledIndices: c,
                  }))),
            te(e, d) && (d = a)),
          "both" === r)
        ) {
          const t = (0, R.RI)(a / u);
          n.key === (i ? Q : Z) &&
            (f && w(n),
            a % u !== u - 1
              ? ((d = oe(e, { startingIndex: a, disabledIndices: c })),
                o &&
                  ee(d, u, t) &&
                  (d = oe(e, {
                    startingIndex: a - (a % u) - 1,
                    disabledIndices: c,
                  })))
              : o &&
                (d = oe(e, {
                  startingIndex: a - (a % u) - 1,
                  disabledIndices: c,
                })),
            ee(d, u, t) && (d = a)),
            n.key === (i ? Z : Q) &&
              (f && w(n),
              a % u !== 0
                ? ((d = oe(e, {
                    startingIndex: a,
                    decrement: !0,
                    disabledIndices: c,
                  })),
                  o &&
                    ee(d, u, t) &&
                    (d = oe(e, {
                      startingIndex: a + (u - (a % u)),
                      decrement: !0,
                      disabledIndices: c,
                    })))
                : o &&
                  (d = oe(e, {
                    startingIndex: a + (u - (a % u)),
                    decrement: !0,
                    disabledIndices: c,
                  })),
              ee(d, u, t) && (d = a));
          const r = (0, R.RI)(s / u) === t;
          te(e, d) &&
            (d =
              o && r
                ? n.key === (i ? Z : Q)
                  ? s
                  : oe(e, {
                      startingIndex: a - (a % u) - 1,
                      disabledIndices: c,
                    })
                : a);
        }
        return d;
      }
      function ue(e, t, n) {
        const r = [];
        let o = 0;
        return (
          e.forEach((e, i) => {
            let { width: u, height: c } = e,
              l = !1;
            for (n && (o = 0); !l; ) {
              const e = [];
              for (let n = 0; n < u; n++)
                for (let r = 0; r < c; r++) e.push(o + n + r * t);
              (o % t) + u <= t && e.every((e) => null == r[e])
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
      function ce(e, t, n, r, o) {
        if (-1 === e) return -1;
        const i = n.indexOf(e),
          u = t[e];
        switch (o) {
          case "tl":
            return i;
          case "tr":
            return u ? i + u.width - 1 : i;
          case "bl":
            return u ? i + (u.height - 1) * r : i;
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
          [i, u] = r.useState(() => new Set()),
          c = r.useCallback((e) => {
            u((t) => new Set(t).add(e));
          }, []),
          l = r.useCallback((e) => {
            u((t) => {
              const n = new Set(t);
              return n.delete(e), n;
            });
          }, []),
          s = r.useMemo(() => {
            const e = new Map();
            return (
              Array.from(i.keys())
                .sort(fe)
                .forEach((t, n) => {
                  e.set(t, n);
                }),
              e
            );
          }, [i]);
        return (0, E.jsx)(de.Provider, {
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
            map: i,
            elementsRef: u,
            labelsRef: c,
          } = r.useContext(de),
          [l, s] = r.useState(null),
          a = r.useRef(null),
          f = r.useCallback(
            (e) => {
              if (((a.current = e), null !== l && ((u.current[l] = e), c))) {
                var n;
                const r = void 0 !== t;
                c.current[l] = r
                  ? t
                  : null != (n = null == e ? void 0 : e.textContent)
                    ? n
                    : null;
              }
            },
            [l, u, c, t],
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
            null != e && s(e);
          }, [i]),
          r.useMemo(() => ({ ref: f, index: null == l ? -1 : l }), [l, f])
        );
      }
      const pe = [Q, Z],
        ge = [X, G];
      let he = !1,
        ye = 0;
      const be = () =>
        "floating-ui-" + Math.random().toString(36).slice(2, 6) + ye++;
      const we =
        Y.useId ||
        function () {
          const [e, t] = r.useState(() => (he ? be() : void 0));
          return (
            ae(() => {
              null == e && t(be());
            }, []),
            r.useEffect(() => {
              he = !0;
            }, []),
            e
          );
        };
      function xe() {
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
        Ee = r.createContext(null),
        ke = () => {
          var e;
          return (null == (e = r.useContext(Re)) ? void 0 : e.id) || null;
        },
        Ce = () => r.useContext(Ee);
      function Ie(e) {
        return "data-floating-ui-" + e;
      }
      function Te(e) {
        -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
      }
      function Le(e) {
        const t = (0, r.useRef)(e);
        return (
          ae(() => {
            t.current = e;
          }),
          t
        );
      }
      const Se = Ie("safe-polygon");
      function Me(e, t, n) {
        return n && !m(n)
          ? 0
          : "number" == typeof e
            ? e
            : null == e
              ? void 0
              : e[t];
      }
      function Ae(e, t) {
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
            mouseOnly: v = !1,
            restMs: g = 0,
            move: h = !0,
          } = t,
          y = Ce(),
          b = ke(),
          w = Le(d),
          x = Le(f),
          R = Le(n),
          E = r.useRef(),
          k = r.useRef(-1),
          C = r.useRef(),
          I = r.useRef(-1),
          T = r.useRef(!0),
          L = r.useRef(!1),
          S = r.useRef(() => {}),
          M = r.useRef(!1),
          A = r.useCallback(() => {
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
            t || (Te(k), Te(I), (T.current = !0), (M.current = !1));
          }
        }, [a, l]),
          r.useEffect(() => {
            if (!a) return;
            if (!w.current) return;
            if (!n) return;
            function e(e) {
              A() && o(!1, e, "hover");
            }
            const t = p(s.floating).documentElement;
            return (
              t.addEventListener("mouseleave", e),
              () => {
                t.removeEventListener("mouseleave", e);
              }
            );
          }, [s.floating, n, o, a, w, A]);
        const O = r.useCallback(
            function (e, t, n) {
              void 0 === t && (t = !0), void 0 === n && (n = "hover");
              const r = Me(x.current, "close", E.current);
              r && !C.current
                ? (Te(k), (k.current = window.setTimeout(() => o(!1, e, n), r)))
                : t && (Te(k), o(!1, e, n));
            },
            [x, o],
          ),
          P = $(() => {
            S.current(), (C.current = void 0);
          }),
          D = $(() => {
            if (L.current) {
              const e = p(s.floating).body;
              (e.style.pointerEvents = ""),
                e.removeAttribute(Se),
                (L.current = !1);
            }
          }),
          N = $(
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
              (Te(k),
              (T.current = !1),
              (v && !m(E.current)) || (g > 0 && !Me(x.current, "open")))
            )
              return;
            const t = Me(x.current, "open", E.current);
            t
              ? (k.current = window.setTimeout(() => {
                  R.current || o(!0, e, "hover");
                }, t))
              : n || o(!0, e, "hover");
          }
          function r(e) {
            if (N()) return;
            S.current();
            const t = p(s.floating);
            if (
              (Te(I), (M.current = !1), w.current && u.current.floatingContext)
            ) {
              n || Te(k),
                (C.current = w.current({
                  ...u.current.floatingContext,
                  tree: y,
                  x: e.clientX,
                  y: e.clientY,
                  onClose() {
                    D(), P(), N() || O(e, !0, "safe-polygon");
                  },
                }));
              const r = C.current;
              return (
                t.addEventListener("mousemove", r),
                void (S.current = () => {
                  t.removeEventListener("mousemove", r);
                })
              );
            }
            ("touch" !== E.current || !c(s.floating, e.relatedTarget)) && O(e);
          }
          function l(e) {
            N() ||
              (u.current.floatingContext &&
                (null == w.current ||
                  w.current({
                    ...u.current.floatingContext,
                    tree: y,
                    x: e.clientX,
                    y: e.clientY,
                    onClose() {
                      D(), P(), N() || O(e);
                    },
                  })(e)));
          }
        }, [s, a, e, v, g, h, O, P, D, o, n, R, y, x, w, u, N]),
          ae(() => {
            var e;
            if (
              a &&
              n &&
              null != (e = w.current) &&
              e.__options.blockPointerEvents &&
              A()
            ) {
              L.current = !0;
              const e = s.floating;
              if ((0, i.vq)(s.domReference) && e) {
                var t;
                const n = p(s.floating).body;
                n.setAttribute(Se, "");
                const r = s.domReference,
                  o =
                    null == y ||
                    null == (t = y.nodesRef.current.find((e) => e.id === b)) ||
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
          }, [a, n, b, s, y, w, A]),
          ae(() => {
            n || ((E.current = void 0), (M.current = !1), P(), D());
          }, [n, P, D]),
          r.useEffect(
            () => () => {
              P(), Te(k), Te(I), D();
            },
            [a, s.domReference, P, D],
          );
        const q = r.useMemo(() => {
            function e(e) {
              E.current = e.pointerType;
            }
            return {
              onPointerDown: e,
              onPointerEnter: e,
              onMouseMove(e) {
                const { nativeEvent: t } = e;
                function r() {
                  T.current || R.current || o(!0, t, "hover");
                }
                (v && !m(E.current)) ||
                  n ||
                  0 === g ||
                  (M.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
                  (Te(I),
                  "touch" === E.current
                    ? r()
                    : ((M.current = !0),
                      (I.current = window.setTimeout(r, g))));
              },
            };
          }, [v, o, n, R, g]),
          F = r.useMemo(
            () => ({
              onMouseEnter() {
                Te(k);
              },
              onMouseLeave(e) {
                N() || O(e.nativeEvent, !1);
              },
            }),
            [O, N],
          );
        return r.useMemo(
          () => (a ? { reference: q, floating: F } : {}),
          [a, q, F],
        );
      }
      let Oe = 0;
      function Pe(e, t) {
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
      function De(e, t) {
        var n;
        let r = [],
          o = null == (n = e.find((e) => e.id === t)) ? void 0 : n.parentId;
        for (; o; ) {
          const t = e.find((e) => e.id === o);
          (o = null == t ? void 0 : t.parentId), t && (r = r.concat(t));
        }
        return r;
      }
      function Ne(e, t) {
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
        Be = {},
        _e = 0;
      const Ve = () =>
          "undefined" != typeof HTMLElement && "inert" in HTMLElement.prototype,
        We = (e) => e && (e.host || We(e.parentNode)),
        ze = (e, t) =>
          t
            .map((t) => {
              if (e.contains(t)) return t;
              const n = We(t);
              return e.contains(n) ? n : null;
            })
            .filter((e) => null != e);
      function je(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const r = p(e[0]).body;
        return (function (e, t, n, r) {
          const o = "data-floating-ui-inert",
            u = r ? "inert" : n ? "aria-hidden" : null,
            c = ze(t, e),
            l = new Set(),
            s = new Set(c),
            a = [];
          Be[o] || (Be[o] = new WeakMap());
          const f = Be[o];
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
                        r = qe.get(t) || 0,
                        i = u ? r + 1 : r,
                        c = (f.get(t) || 0) + 1;
                      qe.set(t, i),
                        f.set(t, c),
                        a.push(t),
                        1 === i && n && Fe.add(t),
                        1 === c && t.setAttribute(o, ""),
                        !n && u && t.setAttribute(u, "true");
                    }
                });
            })(t),
            l.clear(),
            _e++,
            () => {
              a.forEach((e) => {
                const t = qe.get(e) || 0,
                  n = u ? t - 1 : t,
                  r = (f.get(e) || 0) - 1;
                qe.set(e, n),
                  f.set(e, r),
                  n || (!Fe.has(e) && u && e.removeAttribute(u), Fe.delete(e)),
                  r || e.removeAttribute(o);
              }),
                _e--,
                _e ||
                  ((qe = new WeakMap()),
                  (qe = new WeakMap()),
                  (Fe = new WeakSet()),
                  (Be = {}));
            }
          );
        })(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n);
      }
      const Ke = () => ({
        getShadowRoot: !0,
        displayCheck:
          "function" == typeof ResizeObserver &&
          ResizeObserver.toString().includes("[native code]")
            ? "full"
            : "none",
      });
      function Ue(e, t) {
        const n = j(e, Ke());
        "prev" === t && n.reverse();
        const r = n.indexOf(u(p(e)));
        return n.slice(r + 1)[0];
      }
      function He() {
        return Ue(document.body, "next");
      }
      function Ye() {
        return Ue(document.body, "prev");
      }
      function Je(e, t) {
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
        Xe = r.forwardRef(function (e, t) {
          const [n, o] = r.useState();
          ae(() => {
            d() && o("button");
          }, []);
          const i = {
            ref: t,
            tabIndex: 0,
            role: n,
            "aria-hidden": !n || void 0,
            [Ie("focus-guard")]: "",
            style: $e,
          };
          return (0, E.jsx)("span", { ...e, ...i });
        }),
        Ge = r.createContext(null);
      const Qe = () => r.useContext(Ge),
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
      const it = r.forwardRef(function (e, t) {
        return (0, E.jsx)("button", {
          ...e,
          type: "button",
          ref: t,
          tabIndex: -1,
          style: $e,
        });
      });
      function ut(e) {
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
            visuallyHiddenDismiss: y = !1,
            closeOnFocusOut: b = !0,
            outsideElementsInert: R = !1,
          } = e,
          {
            open: k,
            onOpenChange: C,
            events: I,
            dataRef: T,
            elements: { domReference: L, floating: S },
          } = t,
          M = $(() => {
            var e;
            return null == (e = T.current.floatingContext) ? void 0 : e.nodeId;
          }),
          A = "number" == typeof d && d < 0,
          O = x(L) && A,
          P = Ve(),
          D = !P || s,
          N = !D || (P && R),
          q = Le(l),
          F = Le(d),
          B = Le(v),
          _ = Ce(),
          V = Qe(),
          W = r.useRef(null),
          z = r.useRef(null),
          U = r.useRef(!1),
          H = r.useRef(!1),
          Y = r.useRef(-1),
          J = null != V,
          X = et(S),
          G = $(function (e) {
            return void 0 === e && (e = X), e ? j(e, Ke()) : [];
          }),
          Q = $((e) => {
            const t = G(e);
            return q.current
              .map((e) =>
                L && "reference" === e ? L : X && "floating" === e ? X : t,
              )
              .filter(Boolean)
              .flat();
          });
        r.useEffect(() => {
          if (o) return;
          if (!g) return;
          function e(e) {
            if ("Tab" === e.key) {
              c(X, u(p(X))) && 0 === G().length && !O && w(e);
              const t = Q(),
                n = h(e);
              "reference" === q.current[0] &&
                n === L &&
                (w(e), e.shiftKey ? Pe(t[t.length - 1]) : Pe(t[1])),
                "floating" === q.current[1] &&
                  n === X &&
                  e.shiftKey &&
                  (w(e), Pe(t[0]));
            }
          }
          const t = p(X);
          return (
            t.addEventListener("keydown", e),
            () => {
              t.removeEventListener("keydown", e);
            }
          );
        }, [o, L, X, g, q, O, G, Q]),
          r.useEffect(() => {
            if (!o && S)
              return (
                S.addEventListener("focusin", e),
                () => {
                  S.removeEventListener("focusin", e);
                }
              );
            function e(e) {
              const t = h(e),
                n = G().indexOf(t);
              -1 !== n && (Y.current = n);
            }
          }, [o, S, G]),
          r.useEffect(() => {
            if (!o && b)
              return S && (0, i.sb)(L)
                ? (L.addEventListener("focusout", t),
                  L.addEventListener("pointerdown", e),
                  S.addEventListener("focusout", t),
                  () => {
                    L.removeEventListener("focusout", t),
                      L.removeEventListener("pointerdown", e),
                      S.removeEventListener("focusout", t);
                  })
                : void 0;
            function e() {
              (H.current = !0),
                setTimeout(() => {
                  H.current = !1;
                });
            }
            function t(e) {
              const t = e.relatedTarget;
              queueMicrotask(() => {
                const n = M(),
                  r = !(
                    c(L, t) ||
                    c(S, t) ||
                    c(t, S) ||
                    c(null == V ? void 0 : V.portalNode, t) ||
                    (null != t && t.hasAttribute(Ie("focus-guard"))) ||
                    (_ &&
                      (Ne(_.nodesRef.current, n).find((e) => {
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
                        De(_.nodesRef.current, n).find((e) => {
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
                if (m && r && u(p(X)) === p(X).body) {
                  (0, i.sb)(X) && X.focus();
                  const e = Y.current,
                    t = G(),
                    n = t[e] || t[t.length - 1] || X;
                  (0, i.sb)(n) && n.focus();
                }
                (!O && g) ||
                  !t ||
                  !r ||
                  H.current ||
                  t === ot() ||
                  ((U.current = !0), C(!1, e, "focus-out"));
              });
            }
          }, [o, L, S, X, g, _, V, C, b, m, G, O, M]);
        const Z = r.useRef(null),
          ee = r.useRef(null),
          te = tt([Z, null == V ? void 0 : V.beforeInsideRef]),
          ne = tt([ee, null == V ? void 0 : V.afterInsideRef]);
        function re(e) {
          return !o && y && g
            ? (0, E.jsx)(it, {
                ref: "start" === e ? W : z,
                onClick: (e) => C(!1, e.nativeEvent),
                children: "string" == typeof y ? y : "Dismiss",
              })
            : null;
        }
        r.useEffect(() => {
          var e;
          if (o) return;
          if (!S) return;
          const t = Array.from(
              (null == V || null == (e = V.portalNode)
                ? void 0
                : e.querySelectorAll("[" + Ie("portal") + "]")) || [],
            ),
            n =
              _ && !g
                ? De(null == _ ? void 0 : _.nodesRef.current, M()).map((e) => {
                    var t;
                    return null == (t = e.context)
                      ? void 0
                      : t.elements.floating;
                  })
                : [],
            r = [
              S,
              ...t,
              ...n,
              W.current,
              z.current,
              Z.current,
              ee.current,
              null == V ? void 0 : V.beforeOutsideRef.current,
              null == V ? void 0 : V.afterOutsideRef.current,
              q.current.includes("reference") || O ? L : null,
            ].filter((e) => null != e),
            i = g || O ? je(r, !N, N) : je(r);
          return () => {
            i();
          };
        }, [o, L, S, g, q, V, O, D, N, _, M]),
          ae(() => {
            if (o || !(0, i.sb)(X)) return;
            const e = u(p(X));
            queueMicrotask(() => {
              const t = Q(X),
                n = F.current,
                r = ("number" == typeof n ? t[n] : n.current) || X,
                o = c(X, e);
              A || o || !k || Pe(r, { preventScroll: r === X });
            });
          }, [o, k, X, A, Q, F]),
          ae(() => {
            if (o || !X) return;
            let e = !1,
              t = !1;
            const n = p(X),
              r = u(n);
            let l = T.current.openEvent;
            var s;
            function d(n) {
              let { open: r, reason: o, event: i, nested: u } = n;
              if (
                (r && (l = i),
                "escape-key" === o && (t = !0),
                ["hover", "safe-polygon"].includes(o) &&
                  "mouseleave" === i.type &&
                  (U.current = !0),
                "outside-press" === o)
              )
                if (u) (U.current = !1), (e = !0);
                else if (a(i) || f(i)) U.current = !1;
                else {
                  let t = !1;
                  document.createElement("div").focus({
                    get preventScroll() {
                      return (t = !0), !1;
                    },
                  }),
                    t ? ((U.current = !1), (e = !0)) : (U.current = !0);
                }
            }
            (s = r),
              (rt = rt.filter((e) => e.isConnected)),
              s &&
                "body" !== (0, i.mq)(s) &&
                (rt.push(s), rt.length > nt && (rt = rt.slice(-nt))),
              I.on("openchange", d);
            const v = n.createElement("span");
            return (
              v.setAttribute("tabindex", "-1"),
              v.setAttribute("aria-hidden", "true"),
              Object.assign(v.style, $e),
              J && L && L.insertAdjacentElement("afterend", v),
              () => {
                I.off("openchange", d);
                const r = u(n),
                  o =
                    c(S, r) ||
                    (_ &&
                      Ne(_.nodesRef.current, M()).some((e) => {
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
                  "boolean" == typeof B.current
                    ? t && L
                      ? L
                      : ot() || v
                    : B.current.current || v;
                queueMicrotask(() => {
                  const t = (function (e) {
                    const t = Ke();
                    return K(e, t) ? e : j(e, t)[0] || e;
                  })(s);
                  B.current &&
                    !U.current &&
                    (0, i.sb)(t) &&
                    (t === r || r === n.body || o) &&
                    t.focus({ preventScroll: e }),
                    v.remove();
                });
              }
            );
          }, [o, S, X, B, T, I, _, J, L, M]),
          r.useEffect(() => {
            queueMicrotask(() => {
              U.current = !1;
            });
          }, [o]),
          ae(() => {
            if (!o && V)
              return (
                V.setFocusManagerState({
                  modal: g,
                  closeOnFocusOut: b,
                  open: k,
                  onOpenChange: C,
                  domReference: L,
                }),
                () => {
                  V.setFocusManagerState(null);
                }
              );
          }, [o, V, g, k, C, b, L]),
          ae(() => {
            if (o) return;
            if (!X) return;
            if ("function" != typeof MutationObserver) return;
            if (A) return;
            const e = () => {
              const e = X.getAttribute("tabindex"),
                t = G(),
                n = u(p(S)),
                r = t.indexOf(n);
              -1 !== r && (Y.current = r),
                q.current.includes("floating") || (n !== L && 0 === t.length)
                  ? "0" !== e && X.setAttribute("tabindex", "0")
                  : "-1" !== e && X.setAttribute("tabindex", "-1");
            };
            e();
            const t = new MutationObserver(e);
            return (
              t.observe(X, { childList: !0, subtree: !0, attributes: !0 }),
              () => {
                t.disconnect();
              }
            );
          }, [o, S, X, L, q, G, A]);
        const oe = !o && D && (!g || !O) && (J || g);
        return (0, E.jsxs)(E.Fragment, {
          children: [
            oe &&
              (0, E.jsx)(Xe, {
                "data-type": "inside",
                ref: te,
                onFocus: (e) => {
                  if (g) {
                    const e = Q();
                    Pe("reference" === l[0] ? e[0] : e[e.length - 1]);
                  } else if (null != V && V.preserveTabOrder && V.portalNode)
                    if (((U.current = !1), Je(e, V.portalNode))) {
                      const e = He() || L;
                      null == e || e.focus();
                    } else {
                      var t;
                      null == (t = V.beforeOutsideRef.current) || t.focus();
                    }
                },
              }),
            !O && re("start"),
            n,
            re("end"),
            oe &&
              (0, E.jsx)(Xe, {
                "data-type": "inside",
                ref: ne,
                onFocus: (e) => {
                  if (g) Pe(Q()[0]);
                  else if (null != V && V.preserveTabOrder && V.portalNode)
                    if ((b && (U.current = !0), Je(e, V.portalNode))) {
                      const e = Ye() || L;
                      null == e || e.focus();
                    } else {
                      var t;
                      null == (t = V.afterOutsideRef.current) || t.focus();
                    }
                },
              }),
          ],
        });
      }
      function ct(e) {
        return (0, i.sb)(e.target) && "BUTTON" === e.target.tagName;
      }
      function lt(e) {
        return b(e);
      }
      function st(e, t) {
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
                  : (m(t, !0) && a) ||
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
                    ct(e) ||
                    (" " !== e.key ||
                      lt(u) ||
                      (e.preventDefault(), (p.current = !0)),
                    "Enter" === e.key && o(!n || !s, e.nativeEvent, "click"));
              },
              onKeyUp(e) {
                e.defaultPrevented ||
                  !f ||
                  ct(e) ||
                  lt(u) ||
                  (" " === e.key &&
                    p.current &&
                    ((p.current = !1), o(!n || !s, e.nativeEvent, "click")));
              },
            }),
            [i, u, l, a, f, o, n, d, s],
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
        const { open: n, onOpenChange: o, elements: u, dataRef: l } = e,
          {
            enabled: s = !0,
            escapeKey: a = !0,
            outsidePress: f = !0,
            outsidePressEvent: d = "pointerdown",
            referencePress: v = !1,
            referencePressEvent: m = "pointerdown",
            ancestorScroll: y = !1,
            bubbles: b,
            capture: w,
          } = t,
          x = Ce(),
          R = $("function" == typeof f ? f : () => !1),
          E = "function" == typeof f ? R : f,
          k = r.useRef(!1),
          C = r.useRef(!1),
          { escapeKey: I, outsidePress: T } = dt(b),
          { escapeKey: L, outsidePress: S } = dt(w),
          M = r.useRef(!1),
          A = $((e) => {
            var t;
            if (!n || !s || !a || "Escape" !== e.key) return;
            if (M.current) return;
            const r =
                null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
              i = x ? Ne(x.nodesRef.current, r) : [];
            if (!I && (e.stopPropagation(), i.length > 0)) {
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
              A(e), null == (t = h(e)) || t.removeEventListener("keydown", n);
            };
            null == (t = h(e)) || t.addEventListener("keydown", n);
          }),
          P = $((e) => {
            var t;
            const n = k.current;
            k.current = !1;
            const r = C.current;
            if (((C.current = !1), "click" === d && r)) return;
            if (n) return;
            if ("function" == typeof E && !E(e)) return;
            const s = h(e),
              a = "[" + Ie("inert") + "]",
              f = p(u.floating).querySelectorAll(a);
            let v = (0, i.vq)(s) ? s : null;
            for (; v && !(0, i.eu)(v); ) {
              const e = (0, i.$4)(v);
              if ((0, i.eu)(e) || !(0, i.vq)(e)) break;
              v = e;
            }
            if (
              f.length &&
              (0, i.vq)(s) &&
              !s.matches("html,body") &&
              !c(s, u.floating) &&
              Array.from(f).every((e) => !c(v, e))
            )
              return;
            if ((0, i.sb)(s) && q) {
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
            const m =
                null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
              y =
                x &&
                Ne(x.nodesRef.current, m).some((t) => {
                  var n;
                  return g(
                    e,
                    null == (n = t.context) ? void 0 : n.elements.floating,
                  );
                });
            if (g(e, u.floating) || g(e, u.domReference) || y) return;
            const b = x ? Ne(x.nodesRef.current, m) : [];
            if (b.length > 0) {
              let e = !0;
              if (
                (b.forEach((t) => {
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
          D = $((e) => {
            var t;
            const n = () => {
              var t;
              P(e), null == (t = h(e)) || t.removeEventListener(d, n);
            };
            null == (t = h(e)) || t.addEventListener(d, n);
          });
        r.useEffect(() => {
          if (!n || !s) return;
          (l.current.__escapeKeyBubbles = I),
            (l.current.__outsidePressBubbles = T);
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
          const f = p(u.floating);
          a &&
            (f.addEventListener("keydown", L ? O : A, L),
            f.addEventListener("compositionstart", r),
            f.addEventListener("compositionend", c)),
            E && f.addEventListener(d, S ? D : P, S);
          let v = [];
          return (
            y &&
              ((0, i.vq)(u.domReference) && (v = (0, i.v9)(u.domReference)),
              (0, i.vq)(u.floating) && (v = v.concat((0, i.v9)(u.floating))),
              !(0, i.vq)(u.reference) &&
                u.reference &&
                u.reference.contextElement &&
                (v = v.concat((0, i.v9)(u.reference.contextElement)))),
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
                (f.removeEventListener("keydown", L ? O : A, L),
                f.removeEventListener("compositionstart", r),
                f.removeEventListener("compositionend", c)),
                E && f.removeEventListener(d, S ? D : P, S),
                v.forEach((e) => {
                  e.removeEventListener("scroll", t);
                }),
                window.clearTimeout(e);
            }
          );
        }, [l, u, a, E, d, n, o, y, s, I, T, A, L, O, P, S, D]),
          r.useEffect(() => {
            k.current = !1;
          }, [E, d]);
        const N = r.useMemo(
            () => ({
              onKeyDown: A,
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
            [A, o, v, m],
          ),
          q = r.useMemo(
            () => ({
              onKeyDown: A,
              onMouseDown() {
                C.current = !0;
              },
              onMouseUp() {
                C.current = !0;
              },
              [ft[d]]: () => {
                k.current = !0;
              },
            }),
            [A, d],
          );
        return r.useMemo(
          () => (s ? { reference: N, floating: q } : {}),
          [s, N, q],
        );
      }
      function mt(e) {
        void 0 === e && (e = {});
        const { nodeId: t } = e,
          n = (function (e) {
            const { open: t = !1, onOpenChange: n, elements: o } = e,
              i = we(),
              u = r.useRef({}),
              [c] = r.useState(() => xe()),
              l = null != ke(),
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
                dataRef: u,
                open: t,
                onOpenChange: f,
                elements: v,
                events: c,
                floatingId: i,
                refs: d,
              }),
              [t, f, v, c, i, d],
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
          v = Ce();
        ae(() => {
          f && (d.current = f);
        }, [f]);
        const m = (0, U.we)({
            ...e,
            elements: { ...u, ...(s && { reference: s }) },
          }),
          p = r.useCallback(
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
          g = r.useCallback(
            (e) => {
              ((0, i.vq)(e) || null === e) && ((d.current = e), l(e)),
                ((0, i.vq)(m.refs.reference.current) ||
                  null === m.refs.reference.current ||
                  (null !== e && !(0, i.vq)(e))) &&
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
          y = r.useMemo(
            () => ({ ...m.elements, domReference: f }),
            [m.elements, f],
          ),
          b = r.useMemo(
            () => ({ ...m, ...o, refs: h, elements: y, nodeId: t }),
            [m, h, y, t, o],
          );
        return (
          ae(() => {
            o.dataRef.current.floatingContext = b;
            const e =
              null == v ? void 0 : v.nodesRef.current.find((e) => e.id === t);
            e && (e.context = b);
          }),
          r.useMemo(
            () => ({ ...m, context: b, refs: h, elements: y }),
            [m, h, y, b],
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
          y = r.useRef(!1),
          w = r.useRef(-1),
          x = r.useRef(!0);
        r.useEffect(() => {
          if (!m) return;
          const e = (0, i.zk)(v.domReference);
          function t() {
            !n &&
              (0, i.sb)(v.domReference) &&
              v.domReference === u(p(v.domReference)) &&
              (y.current = !0);
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
                (y.current = !0);
            }
          }, [s, m]),
          r.useEffect(
            () => () => {
              Te(w);
            },
            [],
          );
        const R = r.useMemo(
          () => ({
            onPointerDown(e) {
              f(e.nativeEvent) || (x.current = !1);
            },
            onMouseLeave() {
              y.current = !1;
            },
            onFocus(e) {
              if (y.current) return;
              const t = h(e.nativeEvent);
              if (g && (0, i.vq)(t))
                try {
                  if (
                    d() &&
                    l().toLowerCase().startsWith("mac") &&
                    !navigator.maxTouchPoints
                  )
                    throw Error();
                  if (!t.matches(":focus-visible")) return;
                } catch (e) {
                  if (!x.current && !b(t)) return;
                }
              o(!0, e.nativeEvent, "focus");
            },
            onBlur(e) {
              y.current = !1;
              const t = e.relatedTarget,
                n = e.nativeEvent,
                r =
                  (0, i.vq)(t) &&
                  t.hasAttribute(Ie("focus-guard")) &&
                  "outside" === t.getAttribute("data-type");
              w.current = window.setTimeout(() => {
                var e;
                const i = u(
                  v.domReference ? v.domReference.ownerDocument : document,
                );
                (t || i !== v.domReference) &&
                  (c(
                    null == (e = a.current.floatingContext)
                      ? void 0
                      : e.refs.floating.current,
                    i,
                  ) ||
                    c(v.domReference, i) ||
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
      function yt(e, t, n) {
        const r = new Map(),
          o = "item" === n;
        let i = e;
        if (o && e) {
          const { [gt]: t, [ht]: n, ...r } = e;
          i = r;
        }
        return {
          ...("floating" === n && { tabIndex: -1, [Ze]: "" }),
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
                      (o && [gt, ht].includes(n)) ||
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
      function bt(e) {
        void 0 === e && (e = []);
        const t = e.map((e) => (null == e ? void 0 : e.reference)),
          n = e.map((e) => (null == e ? void 0 : e.floating)),
          o = e.map((e) => (null == e ? void 0 : e.item)),
          i = r.useCallback((t) => yt(t, e, "reference"), t),
          u = r.useCallback((t) => yt(t, e, "floating"), n),
          c = r.useCallback((t) => yt(t, e, "item"), o);
        return r.useMemo(
          () => ({
            getReferenceProps: i,
            getFloatingProps: u,
            getItemProps: c,
          }),
          [i, u, c],
        );
      }
      const wt = "Escape";
      function xt(e, t, n) {
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
        return xt(t, e === X || e === G, e === Q || e === Z);
      }
      function Et(e, t, n) {
        return (
          xt(t, e === G, n ? e === Q : e === Z) ||
          "Enter" === e ||
          " " === e ||
          "" === e
        );
      }
      function kt(e, t, n) {
        return xt(t, n ? e === Q : e === Z, e === G);
      }
      function Ct(e, t, n, r) {
        return "both" === t || ("horizontal" === t && r && r > 1)
          ? e === wt
          : xt(t, n ? e === Z : e === Q, e === X);
      }
      function It(e, t) {
        const { open: n, onOpenChange: o, elements: l } = e,
          {
            listRef: s,
            activeIndex: d,
            onNavigate: v = () => {},
            enabled: m = !0,
            selectedIndex: g = null,
            allowEscape: h = !1,
            loop: y = !1,
            nested: b = !1,
            rtl: R = !1,
            virtual: E = !1,
            focusItemOnOpen: k = "auto",
            focusItemOnHover: C = !0,
            openOnArrowKeyDown: I = !0,
            disabledIndices: T,
            orientation: L = "vertical",
            cols: S = 1,
            scrollItemIntoView: M = !0,
            virtualItemRef: A,
            itemSizes: O,
            dense: P = !1,
          } = t;
        const D = Le(et(l.floating)),
          N = ke(),
          q = Ce();
        ae(() => {
          e.dataRef.current.orientation = L;
        }, [e, L]);
        const F = $(() => {
            v(-1 === V.current ? null : V.current);
          }),
          B = x(l.domReference),
          _ = r.useRef(k),
          V = r.useRef(null != g ? g : -1),
          W = r.useRef(null),
          z = r.useRef(!0),
          j = r.useRef(F),
          K = r.useRef(!!l.floating),
          U = r.useRef(n),
          H = r.useRef(!1),
          Y = r.useRef(!1),
          J = Le(T),
          X = Le(n),
          ee = Le(M),
          fe = Le(g),
          [de, ve] = r.useState(),
          [me, pe] = r.useState(),
          ge = $(() => {
            function e(e) {
              E
                ? (ve(e.id),
                  null == q || q.events.emit("virtualfocus", e),
                  A && (A.current = e))
                : Pe(e, { sync: H.current, preventScroll: !0 });
            }
            const t = s.current[V.current];
            t && e(t);
            (H.current ? (e) => e() : requestAnimationFrame)(() => {
              const n = s.current[V.current] || t;
              if (!n) return;
              t || e(n);
              const r = ee.current;
              r &&
                ye &&
                (Y.current || !z.current) &&
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
                ((Y.current = !0), (V.current = g), F())
              : K.current && ((V.current = -1), j.current()));
        }, [m, n, l.floating, g, F]),
          ae(() => {
            if (m && n && l.floating)
              if (null == d) {
                if (((H.current = !1), null != fe.current)) return;
                if (
                  (K.current && ((V.current = -1), ge()),
                  (!U.current || !K.current) &&
                    _.current &&
                    (null != W.current ||
                      (!0 === _.current && null == W.current)))
                ) {
                  let e = 0;
                  const t = () => {
                    if (null == s.current[0]) {
                      if (e < 2) {
                        (e ? requestAnimationFrame : queueMicrotask)(t);
                      }
                      e++;
                    } else
                      (V.current =
                        null == W.current || Et(W.current, L, R) || b
                          ? ne(s, J.current)
                          : re(s, J.current)),
                        (W.current = null),
                        F();
                  };
                  t();
                }
              } else te(s, d) || ((V.current = d), ge(), (Y.current = !1));
          }, [m, n, l.floating, d, fe, b, s, L, R, F, ge, J]),
          ae(() => {
            var e;
            if (!m || l.floating || !q || E || !K.current) return;
            const t = q.nodesRef.current,
              n =
                null == (e = t.find((e) => e.id === N)) ||
                null == (e = e.context)
                  ? void 0
                  : e.elements.floating,
              r = u(p(l.floating)),
              o = t.some((e) => e.context && c(e.context.elements.floating, r));
            n && !o && z.current && n.focus({ preventScroll: !0 });
          }, [m, l.floating, q, N, E]),
          ae(() => {
            if (m && q && E && !N)
              return (
                q.events.on("virtualfocus", e),
                () => {
                  q.events.off("virtualfocus", e);
                }
              );
            function e(e) {
              pe(e.id), A && (A.current = e);
            }
          }, [m, q, E, N, A]),
          ae(() => {
            (j.current = F), (U.current = n), (K.current = !!l.floating);
          }),
          ae(() => {
            n || (W.current = null);
          }, [n]);
        const he = null != d,
          ye = r.useMemo(() => {
            function e(e) {
              if (!n) return;
              const t = s.current.indexOf(e);
              -1 !== t && V.current !== t && ((V.current = t), F());
            }
            return {
              onFocus(t) {
                let { currentTarget: n } = t;
                (H.current = !0), e(n);
              },
              onClick: (e) => {
                let { currentTarget: t } = e;
                return t.focus({ preventScroll: !0 });
              },
              ...(C && {
                onMouseMove(t) {
                  let { currentTarget: n } = t;
                  (H.current = !0), (Y.current = !1), e(n);
                },
                onPointerLeave(e) {
                  let { pointerType: t } = e;
                  var n;
                  z.current &&
                    "touch" !== t &&
                    ((H.current = !0),
                    (V.current = -1),
                    F(),
                    E ||
                      null == (n = D.current) ||
                      n.focus({ preventScroll: !0 }));
                },
              }),
            };
          }, [n, D, C, s, F, E]),
          be = $((e) => {
            if (((z.current = !1), (H.current = !0), 229 === e.which)) return;
            if (!X.current && e.currentTarget === D.current) return;
            if (b && Ct(e.key, L, R, S))
              return (
                w(e),
                o(!1, e.nativeEvent, "list-navigation"),
                void (
                  (0, i.sb)(l.domReference) &&
                  (E
                    ? null == q || q.events.emit("virtualfocus", l.domReference)
                    : l.domReference.focus())
                )
              );
            const t = V.current,
              r = ne(s, T),
              c = re(s, T);
            if (
              (B ||
                ("Home" === e.key && (w(e), (V.current = r), F()),
                "End" === e.key && (w(e), (V.current = c), F())),
              S > 1)
            ) {
              const t =
                  O ||
                  Array.from({ length: s.current.length }, () => ({
                    width: 1,
                    height: 1,
                  })),
                n = ue(t, S, P),
                o = n.findIndex((e) => null != e && !se(s.current, e, T)),
                i = n.reduce(
                  (e, t, n) => (null == t || se(s.current, t, T) ? e : n),
                  -1,
                ),
                u =
                  n[
                    ie(
                      {
                        current: n.map((e) =>
                          null != e ? s.current[e] : null,
                        ),
                      },
                      {
                        event: e,
                        orientation: L,
                        loop: y,
                        rtl: R,
                        cols: S,
                        disabledIndices: le(
                          [
                            ...(T ||
                              s.current.map((e, t) =>
                                se(s.current, t) ? t : void 0,
                              )),
                            void 0,
                          ],
                          n,
                        ),
                        minIndex: o,
                        maxIndex: i,
                        prevIndex: ce(
                          V.current > c ? r : V.current,
                          t,
                          n,
                          S,
                          e.key === G
                            ? "bl"
                            : e.key === (R ? Q : Z)
                              ? "tr"
                              : "tl",
                        ),
                        stopEvent: !0,
                      },
                    )
                  ];
              if ((null != u && ((V.current = u), F()), "both" === L)) return;
            }
            if (Rt(e.key, L)) {
              if (
                (w(e),
                n && !E && u(e.currentTarget.ownerDocument) === e.currentTarget)
              )
                return (V.current = Et(e.key, L, R) ? r : c), void F();
              Et(e.key, L, R)
                ? (V.current = y
                    ? t >= c
                      ? h && t !== s.current.length
                        ? -1
                        : r
                      : oe(s, { startingIndex: t, disabledIndices: T })
                    : Math.min(
                        c,
                        oe(s, { startingIndex: t, disabledIndices: T }),
                      ))
                : (V.current = y
                    ? t <= r
                      ? h && -1 !== t
                        ? s.current.length
                        : c
                      : oe(s, {
                          startingIndex: t,
                          decrement: !0,
                          disabledIndices: T,
                        })
                    : Math.max(
                        r,
                        oe(s, {
                          startingIndex: t,
                          decrement: !0,
                          disabledIndices: T,
                        }),
                      )),
                te(s, V.current) && (V.current = -1),
                F();
            }
          }),
          we = r.useMemo(
            () => E && n && he && { "aria-activedescendant": me || de },
            [E, n, he, me, de],
          ),
          xe = r.useMemo(
            () => ({
              "aria-orientation": "both" === L ? void 0 : L,
              ...(B ? {} : we),
              onKeyDown: be,
              onPointerMove() {
                z.current = !0;
              },
            }),
            [we, be, L, B],
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
              ...we,
              onKeyDown(e) {
                var t;
                z.current = !1;
                const r = e.key.startsWith("Arrow"),
                  i = ["Home", "End"].includes(e.key),
                  u = r || i,
                  c =
                    null == q ||
                    null == (t = q.nodesRef.current.find((e) => e.id === N)) ||
                    null == (t = t.context) ||
                    null == (t = t.dataRef)
                      ? void 0
                      : t.current.orientation,
                  l = kt(e.key, L, R),
                  a = Ct(e.key, L, R, S),
                  f = kt(e.key, c, R),
                  d = Rt(e.key, L),
                  v = (b ? f : d) || "Enter" === e.key || "" === e.key.trim();
                if (E && n) {
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
                              (function t(o, i) {
                                i > r && ((n = o), (r = i)),
                                  Ne(e, o).forEach((e) => {
                                    t(e.id, i + 1);
                                  });
                              })(t, 0),
                              e.find((e) => e.id === n)
                            );
                          })(q.nodesRef.current, t.id)
                        : null;
                  if (u && n && A) {
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
                      o && (w(e), o.dispatchEvent(t), pe(void 0));
                    }
                    var h;
                    if ((d || i) && n.context)
                      if (
                        n.context.open &&
                        n.parentId &&
                        e.currentTarget !== n.context.elements.domReference
                      )
                        return (
                          w(e),
                          void (
                            null == (h = n.context.elements.domReference) ||
                            h.dispatchEvent(t)
                          )
                        );
                  }
                  return be(e);
                }
                if (n || I || !r) {
                  if (v) {
                    const t = Rt(e.key, c);
                    W.current = b && t ? null : e.key;
                  }
                  b
                    ? f &&
                      (w(e),
                      n
                        ? ((V.current = ne(s, J.current)), F())
                        : o(!0, e.nativeEvent, "list-navigation"))
                    : d &&
                      (null != g && (V.current = g),
                      w(e),
                      !n && I ? o(!0, e.nativeEvent, "list-navigation") : be(e),
                      n && F());
                }
              },
              onFocus() {
                n && !E && ((V.current = -1), F());
              },
              onPointerDown: t,
              onPointerEnter: t,
              onMouseDown: e,
              onClick: e,
            };
          }, [de, we, S, be, J, k, s, b, F, o, n, I, L, N, R, g, q, E, A]);
        return r.useMemo(
          () => (m ? { reference: Re, floating: xe, item: ye } : {}),
          [m, Re, xe, ye],
        );
      }
      const Tt = new Map([
        ["select", "listbox"],
        ["combobox", "listbox"],
        ["label", !1],
      ]);
      function Lt(e, t) {
        var n;
        void 0 === t && (t = {});
        const { open: o, floatingId: i } = e,
          { enabled: u = !0, role: c = "dialog" } = t,
          l = null != (n = Tt.get(c)) ? n : c,
          s = we(),
          a = null != ke(),
          f = r.useMemo(
            () =>
              "tooltip" === l || "label" === c
                ? {
                    ["aria-" + ("label" === c ? "labelledby" : "describedby")]:
                      o ? i : void 0,
                  }
                : {
                    "aria-expanded": o ? "true" : "false",
                    "aria-haspopup": "alertdialog" === l ? "dialog" : l,
                    "aria-controls": o ? i : void 0,
                    ...("listbox" === l && { role: "combobox" }),
                    ...("menu" === l && { id: s }),
                    ...("menu" === l && a && { role: "menuitem" }),
                    ...("select" === c && { "aria-autocomplete": "none" }),
                    ...("combobox" === c && { "aria-autocomplete": "list" }),
                  },
            [l, i, a, o, s, c],
          ),
          d = r.useMemo(() => {
            const e = { id: i, ...(l && { role: l }) };
            return "tooltip" === l || "label" === c
              ? e
              : { ...e, ...("menu" === l && { "aria-labelledby": s }) };
          }, [l, i, s, c]),
          v = r.useCallback(
            (e) => {
              let { active: t, selected: n } = e;
              const r = { role: "option", ...(t && { id: i + "-option" }) };
              switch (c) {
                case "select":
                  return { ...r, "aria-selected": t && n };
                case "combobox":
                  return { ...r, ...(t && { "aria-selected": !0 }) };
              }
              return {};
            },
            [i, c],
          );
        return r.useMemo(
          () => (u ? { reference: f, floating: d, item: v } : {}),
          [u, f, d, v],
        );
      }
      function St(e, t) {
        var n;
        const { open: o, dataRef: i } = e,
          {
            listRef: u,
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
          y = r.useRef(null),
          b = $(l),
          x = $(s),
          R = Le(f),
          E = Le(v);
        ae(() => {
          o && (Te(p), (y.current = null), (g.current = ""));
        }, [o]),
          ae(() => {
            var e;
            o &&
              "" === g.current &&
              (h.current = null != (e = null != m ? m : c) ? e : -1);
          }, [o, m, c]);
        const k = $((e) => {
            e
              ? i.current.typing || ((i.current.typing = e), x(e))
              : i.current.typing && ((i.current.typing = e), x(e));
          }),
          C = $((e) => {
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
            const n = u.current;
            if (
              (g.current.length > 0 &&
                " " !== g.current[0] &&
                (-1 === t(n, n, g.current) ? k(!1) : " " === e.key && w(e)),
              null == n ||
                E.current.includes(e.key) ||
                1 !== e.key.length ||
                e.ctrlKey ||
                e.metaKey ||
                e.altKey)
            )
              return;
            o && " " !== e.key && (w(e), k(!0));
            n.every((e) => {
              var t, n;
              return (
                !e ||
                (null == (t = e[0]) ? void 0 : t.toLocaleLowerCase()) !==
                  (null == (n = e[1]) ? void 0 : n.toLocaleLowerCase())
              );
            }) &&
              g.current === e.key &&
              ((g.current = ""), (h.current = y.current)),
              (g.current += e.key),
              Te(p),
              (p.current = window.setTimeout(() => {
                (g.current = ""), (h.current = y.current), k(!1);
              }, d));
            const r = h.current,
              i = t(
                n,
                [...n.slice((r || 0) + 1), ...n.slice(0, (r || 0) + 1)],
                g.current,
              );
            -1 !== i
              ? (b(i), (y.current = i))
              : " " !== e.key && ((g.current = ""), k(!1));
          }),
          I = r.useMemo(() => ({ onKeyDown: C }), [C]),
          T = r.useMemo(
            () => ({
              onKeyDown: C,
              onKeyUp(e) {
                " " === e.key && k(!1);
              },
            }),
            [C, k],
          );
        return r.useMemo(
          () => (a ? { reference: I, floating: T } : {}),
          [a, I, T],
        );
      }
      function Mt(e, t) {
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
      function At(e) {
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
            elements: v,
            onClose: m,
            nodeId: p,
            tree: g,
          } = e;
          return function (e) {
            function y() {
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
            const { clientX: b, clientY: w } = e,
              x = [b, w],
              R = h(e),
              E = "mouseleave" === e.type,
              k = c(v.floating, R),
              C = c(v.domReference, R),
              I = v.domReference.getBoundingClientRect(),
              T = v.floating.getBoundingClientRect(),
              L = d.split("-")[0],
              S = n > T.right - T.width / 2,
              M = f > T.bottom - T.height / 2,
              A = (function (e, t) {
                return (
                  e[0] >= t.x &&
                  e[0] <= t.x + t.width &&
                  e[1] >= t.y &&
                  e[1] <= t.y + t.height
                );
              })(x, I),
              O = T.width > I.width,
              P = T.height > I.height,
              D = (O ? I : T).left,
              N = (O ? I : T).right,
              q = (P ? I : T).top,
              F = (P ? I : T).bottom;
            if (k && ((u = !0), !E)) return;
            if ((C && (u = !1), C && !E)) return void (u = !0);
            if (
              E &&
              (0, i.vq)(e.relatedTarget) &&
              c(v.floating, e.relatedTarget)
            )
              return;
            if (
              g &&
              Ne(g.nodesRef.current, p).some((e) => {
                let { context: t } = e;
                return null == t ? void 0 : t.open;
              })
            )
              return;
            if (
              ("top" === L && f >= I.bottom - 1) ||
              ("bottom" === L && f <= I.top + 1) ||
              ("left" === L && n >= I.right - 1) ||
              ("right" === L && n <= I.left + 1)
            )
              return y();
            let B = [];
            switch (L) {
              case "top":
                B = [
                  [D, I.top + 1],
                  [D, T.bottom - 1],
                  [N, T.bottom - 1],
                  [N, I.top + 1],
                ];
                break;
              case "bottom":
                B = [
                  [D, T.top + 1],
                  [D, I.bottom - 1],
                  [N, I.bottom - 1],
                  [N, T.top + 1],
                ];
                break;
              case "left":
                B = [
                  [T.right - 1, F],
                  [T.right - 1, q],
                  [I.left + 1, q],
                  [I.left + 1, F],
                ];
                break;
              case "right":
                B = [
                  [I.right - 1, F],
                  [I.right - 1, q],
                  [T.left + 1, q],
                  [T.left + 1, F],
                ];
            }
            if (!Mt([b, w], B)) {
              if (u && !A) return y();
              if (!E && r) {
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
              Mt(
                [b, w],
                (function (e) {
                  let [n, r] = e;
                  switch (L) {
                    case "top":
                      return [
                        [O ? n + t / 2 : S ? n + 4 * t : n - 4 * t, r + t + 1],
                        [O ? n - t / 2 : S ? n + 4 * t : n - 4 * t, r + t + 1],
                        ...[
                          [T.left, S || O ? T.bottom - t : T.top],
                          [
                            T.right,
                            S ? (O ? T.bottom - t : T.top) : T.bottom - t,
                          ],
                        ],
                      ];
                    case "bottom":
                      return [
                        [O ? n + t / 2 : S ? n + 4 * t : n - 4 * t, r - t],
                        [O ? n - t / 2 : S ? n + 4 * t : n - 4 * t, r - t],
                        ...[
                          [T.left, S || O ? T.top + t : T.bottom],
                          [T.right, S ? (O ? T.top + t : T.bottom) : T.top + t],
                        ],
                      ];
                    case "left": {
                      const e = [
                          n + t + 1,
                          P ? r + t / 2 : M ? r + 4 * t : r - 4 * t,
                        ],
                        o = [
                          n + t + 1,
                          P ? r - t / 2 : M ? r + 4 * t : r - 4 * t,
                        ];
                      return [
                        ...[
                          [M || P ? T.right - t : T.left, T.top],
                          [
                            M ? (P ? T.right - t : T.left) : T.right - t,
                            T.bottom,
                          ],
                        ],
                        e,
                        o,
                      ];
                    }
                    case "right":
                      return [
                        [n - t, P ? r + t / 2 : M ? r + 4 * t : r - 4 * t],
                        [n - t, P ? r - t / 2 : M ? r + 4 * t : r - 4 * t],
                        ...[
                          [M || P ? T.left + t : T.right, T.top],
                          [
                            M ? (P ? T.left + t : T.right) : T.left + t,
                            T.bottom,
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
        const { overflow: t, overflowX: n, overflowY: r, display: o } = R(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          "inline" !== o &&
          "contents" !== o
        );
      }
      function d(e) {
        return /^(table|td|th)$/.test(o(e));
      }
      function v(e) {
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
        $4: () => k,
        CP: () => E,
        L9: () => R,
        Lv: () => d,
        Ng: () => a,
        Tc: () => w,
        Tf: () => v,
        ZU: () => f,
        _m: () => T,
        ep: () => u,
        eu: () => x,
        gJ: () => b,
        mq: () => o,
        sQ: () => y,
        sb: () => s,
        v9: () => I,
        vq: () => l,
        zk: () => i,
      });
      const m = /transform|translate|scale|rotate|perspective|filter/,
        p = /paint|layout|strict|content/,
        g = (e) => !!e && "none" !== e;
      let h;
      function y(e) {
        const t = l(e) ? R(e) : e;
        return (
          g(t.transform) ||
          g(t.translate) ||
          g(t.scale) ||
          g(t.rotate) ||
          g(t.perspective) ||
          (!w() && (g(t.backdropFilter) || g(t.filter))) ||
          m.test(t.willChange || "") ||
          p.test(t.contain || "")
        );
      }
      function b(e) {
        let t = k(e);
        for (; s(t) && !x(t); ) {
          if (y(t)) return t;
          if (v(t)) return null;
          t = k(t);
        }
        return null;
      }
      function w() {
        return (
          null == h &&
            (h =
              "undefined" != typeof CSS &&
              CSS.supports &&
              CSS.supports("-webkit-backdrop-filter", "none")),
          h
        );
      }
      function x(e) {
        return /^(html|body|#document)$/.test(o(e));
      }
      function R(e) {
        return i(e).getComputedStyle(e);
      }
      function E(e) {
        return l(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function k(e) {
        if ("html" === o(e)) return e;
        const t = e.assignedSlot || e.parentNode || (a(e) && e.host) || u(e);
        return a(t) ? t.host : t;
      }
      function C(e) {
        const t = k(e);
        return x(t) ? (e.ownerDocument || e).body : s(t) && f(t) ? t : C(t);
      }
      function I(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = C(e),
          u = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          c = i(o);
        if (u) {
          const e = T(c);
          return t.concat(
            c,
            c.visualViewport || [],
            f(o) ? o : [],
            e && n ? I(e) : [],
          );
        }
        return t.concat(o, I(o, [], n));
      }
      function T(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
    },
    58015: (e, t, n) => {
      n.d(t, {
        B1: () => T,
        C0: () => f,
        Dz: () => g,
        Jx: () => c,
        LI: () => i,
        PG: () => v,
        RI: () => u,
        Sg: () => d,
        T9: () => o,
        TV: () => p,
        WJ: () => y,
        _3: () => a,
        bV: () => C,
        jk: () => r,
        lP: () => k,
        nI: () => I,
        qE: () => s,
        sq: () => m,
        w7: () => h,
      });
      const r = Math.min,
        o = Math.max,
        i = Math.round,
        u = Math.floor,
        c = (e) => ({ x: e, y: e }),
        l = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function s(e, t, n) {
        return o(e, r(t, n));
      }
      function a(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function f(e) {
        return e.split("-")[0];
      }
      function d(e) {
        return e.split("-")[1];
      }
      function v(e) {
        return "x" === e ? "y" : "x";
      }
      function m(e) {
        return "y" === e ? "height" : "width";
      }
      function p(e) {
        const t = e[0];
        return "t" === t || "b" === t ? "y" : "x";
      }
      function g(e) {
        return v(p(e));
      }
      function h(e, t, n) {
        void 0 === n && (n = !1);
        const r = d(e),
          o = g(e),
          i = m(o);
        let u =
          "x" === o
            ? r === (n ? "end" : "start")
              ? "right"
              : "left"
            : "start" === r
              ? "bottom"
              : "top";
        return t.reference[i] > t.floating[i] && (u = C(u)), [u, C(u)];
      }
      function y(e) {
        const t = C(e);
        return [b(e), t, b(t)];
      }
      function b(e) {
        return e.includes("start")
          ? e.replace("start", "end")
          : e.replace("end", "start");
      }
      const w = ["left", "right"],
        x = ["right", "left"],
        R = ["top", "bottom"],
        E = ["bottom", "top"];
      function k(e, t, n, r) {
        const o = d(e);
        let i = (function (e, t, n) {
          switch (e) {
            case "top":
            case "bottom":
              return n ? (t ? x : w) : t ? w : x;
            case "left":
            case "right":
              return t ? R : E;
            default:
              return [];
          }
        })(f(e), "start" === n, r);
        return (
          o && ((i = i.map((e) => e + "-" + o)), t && (i = i.concat(i.map(b)))),
          i
        );
      }
      function C(e) {
        const t = f(e);
        return l[t] + e.slice(t.length);
      }
      function I(e) {
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
      }
      function T(e) {
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
    },
  },
]);
