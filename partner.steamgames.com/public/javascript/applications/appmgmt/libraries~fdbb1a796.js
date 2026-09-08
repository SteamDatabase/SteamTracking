/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [616],
  {
    8083: (t, e, n) => {
      n.d(e, {
        ll: () => L,
        rD: () => P,
        UU: () => S,
        cY: () => R,
        iD: () => b,
        BN: () => O,
        Ej: () => C,
      });
      var o = n(58015);
      function i(t, e, n) {
        let { reference: i, floating: r } = t;
        const l = (0, o.TV)(e),
          c = (0, o.Dz)(e),
          s = (0, o.sq)(c),
          a = (0, o.C0)(e),
          f = "y" === l,
          u = i.x + i.width / 2 - r.width / 2,
          d = i.y + i.height / 2 - r.height / 2,
          p = i[s] / 2 - r[s] / 2;
        let m;
        switch (a) {
          case "top":
            m = { x: u, y: i.y - r.height };
            break;
          case "bottom":
            m = { x: u, y: i.y + i.height };
            break;
          case "right":
            m = { x: i.x + i.width, y: d };
            break;
          case "left":
            m = { x: i.x - r.width, y: d };
            break;
          default:
            m = { x: i.x, y: i.y };
        }
        const h = (0, o.Sg)(e);
        return h && (m[c] += p * ("end" === h ? 1 : -1) * (n && f ? -1 : 1)), m;
      }
      async function r(t, e) {
        var n;
        void 0 === e && (e = {});
        const {
            x: i,
            y: r,
            platform: l,
            rects: c,
            elements: s,
            strategy: a,
          } = t,
          {
            boundary: f = "clippingAncestors",
            rootBoundary: u = "viewport",
            elementContext: d = "floating",
            altBoundary: p = !1,
            padding: m = 0,
          } = (0, o._3)(e, t),
          h = (0, o.nI)(m),
          g = s[p ? ("floating" === d ? "reference" : "floating") : d],
          y = (0, o.B1)(
            await l.getClippingRect({
              element:
                null ==
                  (n = await (null == l.isElement ? void 0 : l.isElement(g))) ||
                n
                  ? g
                  : g.contextElement ||
                    (await (null == l.getDocumentElement
                      ? void 0
                      : l.getDocumentElement(s.floating))),
              boundary: f,
              rootBoundary: u,
              strategy: a,
            }),
          ),
          v =
            "floating" === d
              ? {
                  x: i,
                  y: r,
                  width: c.floating.width,
                  height: c.floating.height,
                }
              : c.reference,
          w = await (null == l.getOffsetParent
            ? void 0
            : l.getOffsetParent(s.floating)),
          x = ((await (null == l.isElement ? void 0 : l.isElement(w))) &&
            (await (null == l.getScale ? void 0 : l.getScale(w)))) || {
            x: 1,
            y: 1,
          },
          b = (0, o.B1)(
            l.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: s,
                  rect: v,
                  offsetParent: w,
                  strategy: a,
                })
              : v,
          );
        return {
          top: (y.top - b.top + h.top) / x.y,
          bottom: (b.bottom - y.bottom + h.bottom) / x.y,
          left: (y.left - b.left + h.left) / x.x,
          right: (b.right - y.right + h.right) / x.x,
        };
      }
      const l = new Set(["left", "top"]);
      var c = n(977);
      function s(t) {
        const e = (0, c.L9)(t);
        let n = parseFloat(e.width) || 0,
          i = parseFloat(e.height) || 0;
        const r = (0, c.sb)(t),
          l = r ? t.offsetWidth : n,
          s = r ? t.offsetHeight : i,
          a = (0, o.LI)(n) !== l || (0, o.LI)(i) !== s;
        return a && ((n = l), (i = s)), { width: n, height: i, $: a };
      }
      function a(t) {
        return (0, c.vq)(t) ? t : t.contextElement;
      }
      function f(t) {
        const e = a(t);
        if (!(0, c.sb)(e)) return (0, o.Jx)(1);
        const n = e.getBoundingClientRect(),
          { width: i, height: r, $: l } = s(e);
        let f = (l ? (0, o.LI)(n.width) : n.width) / i,
          u = (l ? (0, o.LI)(n.height) : n.height) / r;
        return (
          (f && Number.isFinite(f)) || (f = 1),
          (u && Number.isFinite(u)) || (u = 1),
          { x: f, y: u }
        );
      }
      const u = (0, o.Jx)(0);
      function d(t) {
        const e = (0, c.zk)(t);
        return (0, c.Tc)() && e.visualViewport
          ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop }
          : u;
      }
      function p(t, e, n, i) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const r = t.getBoundingClientRect(),
          l = a(t);
        let s = (0, o.Jx)(1);
        e && (i ? (0, c.vq)(i) && (s = f(i)) : (s = f(t)));
        const u = (function (t, e, n) {
          return void 0 === e && (e = !1), !!n && e && n === (0, c.zk)(t);
        })(l, n, i)
          ? d(l)
          : (0, o.Jx)(0);
        let p = (r.left + u.x) / s.x,
          m = (r.top + u.y) / s.y,
          h = r.width / s.x,
          g = r.height / s.y;
        if (l && i) {
          const t = (0, c.zk)(l),
            e = (0, c.vq)(i) ? (0, c.zk)(i) : i;
          let n = t,
            o = (0, c._m)(n);
          for (; o && e !== n; ) {
            const t = f(o),
              e = o.getBoundingClientRect(),
              i = (0, c.L9)(o),
              r = e.left + (o.clientLeft + parseFloat(i.paddingLeft)) * t.x,
              l = e.top + (o.clientTop + parseFloat(i.paddingTop)) * t.y;
            (p *= t.x),
              (m *= t.y),
              (h *= t.x),
              (g *= t.y),
              (p += r),
              (m += l),
              (n = (0, c.zk)(o)),
              (o = (0, c._m)(n));
          }
        }
        return (0, o.B1)({ width: h, height: g, x: p, y: m });
      }
      function m(t, e) {
        const n = (0, c.CP)(t).scrollLeft;
        return e ? e.left + n : p((0, c.ep)(t)).left + n;
      }
      function h(t, e) {
        const n = t.getBoundingClientRect();
        return { x: n.left + e.scrollLeft - m(t, n), y: n.top + e.scrollTop };
      }
      function g(t, e, n) {
        let i;
        if ("viewport" === e || "layoutViewport" === e)
          i = (function (t, e, n) {
            void 0 === n && (n = "viewport");
            const o = "layoutViewport" === n,
              i = (0, c.zk)(t),
              r = (0, c.ep)(t),
              l = i.visualViewport;
            let s = r.clientWidth,
              a = r.clientHeight,
              f = 0,
              u = 0;
            if (l) {
              const t = !(0, c.Tc)() || "fixed" === e;
              o
                ? t || ((f = -l.offsetLeft), (u = -l.offsetTop))
                : ((s = l.width),
                  (a = l.height),
                  t && ((f = l.offsetLeft), (u = l.offsetTop)));
            }
            if (m(r) <= 0) {
              const t = r.ownerDocument,
                e = t.body,
                n = getComputedStyle(e),
                o =
                  ("CSS1Compat" === t.compatMode &&
                    parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
                  0,
                i = Math.abs(r.clientWidth - e.clientWidth - o),
                l =
                  "stable both-edges" === getComputedStyle(r).scrollbarGutter
                    ? i / 2
                    : i;
              l <= 25 && (s -= l);
            }
            return { width: s, height: a, x: f, y: u };
          })(t, n, e);
        else if ("document" === e)
          i = (function (t) {
            const e = (0, c.CP)(t),
              n = t.ownerDocument.body,
              i = (0, o.T9)(
                t.scrollWidth,
                t.clientWidth,
                n.scrollWidth,
                n.clientWidth,
              ),
              r = (0, o.T9)(
                t.scrollHeight,
                t.clientHeight,
                n.scrollHeight,
                n.clientHeight,
              );
            let l = -e.scrollLeft + m(t);
            const s = -e.scrollTop;
            return (
              "rtl" === (0, c.L9)(n).direction &&
                (l += (0, o.T9)(t.clientWidth, n.clientWidth) - i),
              { width: i, height: r, x: l, y: s }
            );
          })((0, c.ep)(t));
        else if ((0, c.vq)(e))
          i = (function (t, e) {
            const n = p(t, !0, "fixed" === e),
              o = n.top + t.clientTop,
              i = n.left + t.clientLeft,
              r = f(t);
            return {
              width: t.clientWidth * r.x,
              height: t.clientHeight * r.y,
              x: i * r.x,
              y: o * r.y,
            };
          })(e, n);
        else {
          const n = d(t);
          i = { x: e.x - n.x, y: e.y - n.y, width: e.width, height: e.height };
        }
        return (0, o.B1)(i);
      }
      function y(t, e, n) {
        const i = (0, c.sb)(e),
          r = (0, c.ep)(e),
          l = "fixed" === n,
          s = p(t, !0, l, e);
        let a = { scrollLeft: 0, scrollTop: 0 };
        const f = (0, o.Jx)(0);
        if (
          (i || !l) &&
          (("body" !== (0, c.mq)(e) || (0, c.ZU)(r)) && (a = (0, c.CP)(e)), i)
        ) {
          const t = p(e, !0, l, e);
          (f.x = t.x + e.clientLeft), (f.y = t.y + e.clientTop);
        }
        !i && r && (f.x = m(r));
        const u = !r || i || l ? (0, o.Jx)(0) : h(r, a);
        return {
          x: s.left + a.scrollLeft - f.x - u.x,
          y: s.top + a.scrollTop - f.y - u.y,
          width: s.width,
          height: s.height,
        };
      }
      function v(t) {
        return "static" === (0, c.L9)(t).position;
      }
      function w(t, e) {
        if (!(0, c.sb)(t) || "fixed" === (0, c.L9)(t).position) return null;
        if (e) return e(t);
        let n = t.offsetParent;
        return (0, c.ep)(t) === n && (n = n.ownerDocument.body), n;
      }
      function x(t, e) {
        const n = (0, c.zk)(t);
        if ((0, c.Tf)(t)) return n;
        if (!(0, c.sb)(t)) {
          let e = (0, c.$4)(t);
          for (; e && !(0, c.eu)(e); ) {
            if ((0, c.vq)(e) && !v(e)) return e;
            e = (0, c.$4)(e);
          }
          return n;
        }
        let o = w(t, e);
        for (; o && (0, c.Lv)(o) && v(o); ) o = w(o, e);
        return o && (0, c.eu)(o) && v(o) && !(0, c.sQ)(o)
          ? n
          : o || (0, c.gJ)(t) || n;
      }
      const b = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
          let { elements: e, rect: n, offsetParent: i, strategy: r } = t;
          const l = "fixed" === r,
            s = (0, c.ep)(i),
            a = !!e && (0, c.Tf)(e.floating);
          if (i === s || (a && l)) return n;
          let u = { scrollLeft: 0, scrollTop: 0 },
            d = (0, o.Jx)(1);
          const m = (0, o.Jx)(0),
            g = (0, c.sb)(i);
          if (
            (g || !l) &&
            (("body" !== (0, c.mq)(i) || (0, c.ZU)(s)) && (u = (0, c.CP)(i)), g)
          ) {
            const t = p(i);
            (d = f(i)), (m.x = t.x + i.clientLeft), (m.y = t.y + i.clientTop);
          }
          const y = !s || g || l ? (0, o.Jx)(0) : h(s, u);
          return {
            width: n.width * d.x,
            height: n.height * d.y,
            x: n.x * d.x - u.scrollLeft * d.x + m.x + y.x,
            y: n.y * d.y - u.scrollTop * d.y + m.y + y.y,
          };
        },
        getDocumentElement: c.ep,
        getClippingRect: function (t) {
          let { element: e, boundary: n, rootBoundary: i, strategy: r } = t;
          const l = [
              ...("clippingAncestors" === n
                ? (0, c.Tf)(e)
                  ? []
                  : (function (t, e) {
                      const n = e.get(t);
                      if (n) return n;
                      let o = (0, c.v9)(t, [], !1).filter(
                          (t) => (0, c.vq)(t) && "body" !== (0, c.mq)(t),
                        ),
                        i = null;
                      const r = "fixed" === (0, c.L9)(t).position;
                      let l = r ? (0, c.$4)(t) : t;
                      for (; (0, c.vq)(l) && !(0, c.eu)(l); ) {
                        const t = (0, c.L9)(l),
                          e = (0, c.sQ)(l),
                          n = i ? i.position : r ? "fixed" : "";
                        e ||
                        ("fixed" !== n &&
                          ("absolute" !== n || "static" !== t.position))
                          ? (i = t)
                          : (o = o.filter((t) => t !== l)),
                          (l = (0, c.$4)(l));
                      }
                      return e.set(t, o), o;
                    })(e, this._c)
                : [].concat(n)),
              i,
            ],
            s = g(e, l[0], r);
          let a = s.top,
            f = s.right,
            u = s.bottom,
            d = s.left;
          for (let t = 1; t < l.length; t++) {
            const n = g(e, l[t], r);
            (a = (0, o.T9)(n.top, a)),
              (f = (0, o.jk)(n.right, f)),
              (u = (0, o.jk)(n.bottom, u)),
              (d = (0, o.T9)(n.left, d));
          }
          return { width: f - d, height: u - a, x: d, y: a };
        },
        getOffsetParent: x,
        getElementRects: async function (t) {
          const e = this.getOffsetParent || x,
            n = this.getDimensions,
            o = await n(t.floating);
          return {
            reference: y(t.reference, await e(t.floating), t.strategy),
            floating: { x: 0, y: 0, width: o.width, height: o.height },
          };
        },
        getClientRects: function (t) {
          return t.getClientRects ? Array.from(t.getClientRects()) : [];
        },
        getDimensions: function (t) {
          const { width: e, height: n } = s(t);
          return { width: e, height: n };
        },
        getScale: f,
        isElement: c.vq,
        isRTL: function (t) {
          return "rtl" === (0, c.L9)(t).direction;
        },
      };
      function T(t, e) {
        return (
          t.x === e.x &&
          t.y === e.y &&
          t.width === e.width &&
          t.height === e.height
        );
      }
      function L(t, e, n, i) {
        void 0 === i && (i = {});
        const {
            ancestorScroll: r = !0,
            ancestorResize: l = !0,
            elementResize: s = "function" == typeof ResizeObserver,
            layoutShift: f = "function" == typeof IntersectionObserver,
            animationFrame: u = !1,
          } = i,
          d = a(t),
          m =
            r || l
              ? [...(d ? (0, c.v9)(d) : []), ...(e ? (0, c.v9)(e) : [])]
              : [];
        m.forEach((t) => {
          r && t.addEventListener("scroll", n),
            l && t.addEventListener("resize", n);
        });
        const h =
          d && f
            ? (function (t, e, n) {
                let i,
                  r = null;
                const l = (0, c.ep)(t);
                function s() {
                  var t;
                  clearTimeout(i),
                    null == (t = r) || t.disconnect(),
                    (r = null);
                }
                function a(n, c) {
                  void 0 === n && (n = !1), void 0 === c && (c = 1), s();
                  const f = t.getBoundingClientRect(),
                    { left: u, top: d, width: p, height: m } = f;
                  if ((n || e(), !p || !m)) return;
                  const h = {
                    rootMargin:
                      -(0, o.RI)(d) +
                      "px " +
                      -(0, o.RI)(l.clientWidth - (u + p)) +
                      "px " +
                      -(0, o.RI)(l.clientHeight - (d + m)) +
                      "px " +
                      -(0, o.RI)(u) +
                      "px",
                    threshold: (0, o.T9)(0, (0, o.jk)(1, c)) || 1,
                  };
                  let g = !0;
                  function y(e) {
                    const n = e[0].intersectionRatio;
                    if (!T(f, t.getBoundingClientRect())) return a();
                    if (n !== c) {
                      if (!g) return a();
                      n
                        ? a(!1, n)
                        : (i = setTimeout(() => {
                            a(!1, 1e-7);
                          }, 1e3));
                    }
                    g = !1;
                  }
                  try {
                    r = new IntersectionObserver(y, {
                      ...h,
                      root: l.ownerDocument,
                    });
                  } catch (t) {
                    r = new IntersectionObserver(y, h);
                  }
                  r.observe(t);
                }
                const f = (0, c.zk)(t),
                  u = () => a(n);
                return (
                  f.addEventListener("resize", u),
                  a(!0),
                  () => {
                    f.removeEventListener("resize", u), s();
                  }
                );
              })(d, n, l)
            : null;
        let g,
          y = -1,
          v = null;
        s &&
          ((v = new ResizeObserver((t) => {
            let [o] = t;
            o &&
              o.target === d &&
              v &&
              e &&
              (v.unobserve(e),
              cancelAnimationFrame(y),
              (y = requestAnimationFrame(() => {
                var t;
                null == (t = v) || t.observe(e);
              }))),
              n();
          })),
          d && !u && v.observe(d),
          e && v.observe(e));
        let w = u ? p(t) : null;
        return (
          u &&
            (function e() {
              const o = p(t);
              w && !T(w, o) && n();
              (w = o), (g = requestAnimationFrame(e));
            })(),
          n(),
          () => {
            var t;
            m.forEach((t) => {
              r && t.removeEventListener("scroll", n),
                l && t.removeEventListener("resize", n);
            }),
              null == h || h(),
              null == (t = v) || t.disconnect(),
              (v = null),
              u && cancelAnimationFrame(g);
          }
        );
      }
      const R = function (t) {
          return (
            void 0 === t && (t = 0),
            {
              name: "offset",
              options: t,
              async fn(e) {
                var n, i;
                const { x: r, y: c, placement: s, middlewareData: a } = e,
                  f = await (async function (t, e) {
                    const { placement: n, platform: i, elements: r } = t,
                      c = await (null == i.isRTL
                        ? void 0
                        : i.isRTL(r.floating)),
                      s = (0, o.C0)(n),
                      a = (0, o.Sg)(n),
                      f = "y" === (0, o.TV)(n),
                      u = l.has(s) ? -1 : 1,
                      d = c && f ? -1 : 1,
                      p = (0, o._3)(e, t);
                    let {
                      mainAxis: m,
                      crossAxis: h,
                      alignmentAxis: g,
                    } = "number" == typeof p
                      ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
                      : {
                          mainAxis: p.mainAxis || 0,
                          crossAxis: p.crossAxis || 0,
                          alignmentAxis: p.alignmentAxis,
                        };
                    return (
                      a &&
                        "number" == typeof g &&
                        (h = "end" === a ? -1 * g : g),
                      f ? { x: h * d, y: m * u } : { x: m * u, y: h * d }
                    );
                  })(e, t);
                return s === (null == (n = a.offset) ? void 0 : n.placement) &&
                  null != (i = a.arrow) &&
                  i.alignmentOffset
                  ? {}
                  : { x: r + f.x, y: c + f.y, data: { ...f, placement: s } };
              },
            }
          );
        },
        O = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "shift",
              options: t,
              async fn(e) {
                const { x: n, y: i, placement: r, platform: l } = e,
                  {
                    mainAxis: c = !0,
                    crossAxis: s = !1,
                    limiter: a = {
                      fn: (t) => {
                        let { x: e, y: n } = t;
                        return { x: e, y: n };
                      },
                    },
                    ...f
                  } = (0, o._3)(t, e),
                  u = { x: n, y: i },
                  d = await l.detectOverflow(e, f),
                  p = (0, o.TV)(r),
                  m = (0, o.PG)(p);
                let h = u[m],
                  g = u[p];
                const y = (t, e) =>
                  (0, o.qE)(
                    e + d["y" === t ? "top" : "left"],
                    e,
                    e - d["y" === t ? "bottom" : "right"],
                  );
                c && (h = y(m, h)), s && (g = y(p, g));
                const v = a.fn({ ...e, [m]: h, [p]: g });
                return {
                  ...v,
                  data: { x: v.x - n, y: v.y - i, enabled: { [m]: c, [p]: s } },
                };
              },
            }
          );
        },
        S = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "flip",
              options: t,
              async fn(e) {
                var n, i;
                const {
                    placement: r,
                    middlewareData: l,
                    rects: c,
                    initialPlacement: s,
                    platform: a,
                    elements: f,
                  } = e,
                  {
                    mainAxis: u = !0,
                    crossAxis: d = !0,
                    fallbackPlacements: p,
                    fallbackStrategy: m = "bestFit",
                    fallbackAxisSideDirection: h = "none",
                    flipAlignment: g = !0,
                    ...y
                  } = (0, o._3)(t, e);
                if (null != (n = l.arrow) && n.alignmentOffset) return {};
                const v = (0, o.C0)(r),
                  w = (0, o.TV)(s),
                  x = (0, o.C0)(s) === s,
                  b = await (null == a.isRTL ? void 0 : a.isRTL(f.floating)),
                  T = p || (x || !g ? [(0, o.bV)(s)] : (0, o.WJ)(s)),
                  L = "none" !== h;
                !p && L && T.push(...(0, o.lP)(s, g, h, b));
                const R = [s, ...T],
                  O = await a.detectOverflow(e, y),
                  S = [];
                let C = (null == (i = l.flip) ? void 0 : i.overflows) || [];
                if ((u && S.push(O[v]), d)) {
                  const t = (0, o.w7)(r, c, b);
                  S.push(O[t[0]], O[t[1]]);
                }
                if (
                  ((C = [...C, { placement: r, overflows: S }]),
                  !S.every((t) => t <= 0))
                ) {
                  var P, A;
                  const t =
                      ((null == (P = l.flip) ? void 0 : P.index) || 0) + 1,
                    e = R[t];
                  if (e) {
                    if (
                      !("alignment" === d && w !== (0, o.TV)(e)) ||
                      C.every(
                        (t) =>
                          (0, o.TV)(t.placement) !== w || t.overflows[0] > 0,
                      )
                    )
                      return {
                        data: { index: t, overflows: C },
                        reset: { placement: e },
                      };
                  }
                  let n =
                    null ==
                    (A = C.filter((t) => t.overflows[0] <= 0).sort(
                      (t, e) => t.overflows[1] - e.overflows[1],
                    )[0])
                      ? void 0
                      : A.placement;
                  if (!n)
                    switch (m) {
                      case "bestFit": {
                        var E;
                        const t =
                          null ==
                          (E = C.filter((t) => {
                            if (L) {
                              const e = (0, o.TV)(t.placement);
                              return e === w || "y" === e;
                            }
                            return !0;
                          })
                            .map((t) => [
                              t.placement,
                              t.overflows
                                .filter((t) => t > 0)
                                .reduce((t, e) => t + e, 0),
                            ])
                            .sort((t, e) => t[1] - e[1])[0])
                            ? void 0
                            : E[0];
                        t && (n = t);
                        break;
                      }
                      case "initialPlacement":
                        n = s;
                    }
                  if (r !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }
          );
        },
        C = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "size",
              options: t,
              async fn(e) {
                const { placement: n, rects: i, platform: r, elements: l } = e,
                  { apply: c = () => {}, ...s } = (0, o._3)(t, e),
                  a = await r.detectOverflow(e, s),
                  f = (0, o.C0)(n),
                  u = (0, o.Sg)(n),
                  d = "y" === (0, o.TV)(n),
                  { width: p, height: m } = i.floating;
                let h, g;
                "top" === f || "bottom" === f
                  ? ((h = f),
                    (g =
                      u ===
                      ((await (null == r.isRTL ? void 0 : r.isRTL(l.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((g = f), (h = "end" === u ? "top" : "bottom"));
                const y = m - a.top - a.bottom,
                  v = p - a.left - a.right,
                  w = (0, o.jk)(m - a[h], y),
                  x = (0, o.jk)(p - a[g], v),
                  b = e.middlewareData.shift,
                  T = !b;
                let L = w,
                  R = x;
                null != b && b.enabled.x && (R = v),
                  null != b && b.enabled.y && (L = y),
                  T &&
                    !u &&
                    (d
                      ? (R = p - 2 * (0, o.T9)(a.left, a.right))
                      : (L = m - 2 * (0, o.T9)(a.top, a.bottom))),
                  await c({ ...e, availableWidth: R, availableHeight: L });
                const O = await r.getDimensions(l.floating);
                return p !== O.width || m !== O.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        },
        P = (t, e, n) => {
          const o = new Map(),
            l = null != n ? n : {},
            c = { ...b, ...l.platform, _c: o };
          return (async (t, e, n) => {
            const {
                placement: o = "bottom",
                strategy: l = "absolute",
                middleware: c = [],
                platform: s,
              } = n,
              a = s.detectOverflow ? s : { ...s, detectOverflow: r },
              f = await (null == s.isRTL ? void 0 : s.isRTL(e));
            let u = await s.getElementRects({
                reference: t,
                floating: e,
                strategy: l,
              }),
              { x: d, y: p } = i(u, o, f),
              m = o,
              h = 0;
            const g = {};
            for (let n = 0; n < c.length; n++) {
              const r = c[n];
              if (!r) continue;
              const { name: y, fn: v } = r,
                {
                  x: w,
                  y: x,
                  data: b,
                  reset: T,
                } = await v({
                  x: d,
                  y: p,
                  initialPlacement: o,
                  placement: m,
                  strategy: l,
                  middlewareData: g,
                  rects: u,
                  platform: a,
                  elements: { reference: t, floating: e },
                });
              (d = null != w ? w : d),
                (p = null != x ? x : p),
                (g[y] = { ...g[y], ...b }),
                T &&
                  h < 50 &&
                  (h++,
                  "object" == typeof T &&
                    (T.placement && (m = T.placement),
                    T.rects &&
                      (u =
                        !0 === T.rects
                          ? await s.getElementRects({
                              reference: t,
                              floating: e,
                              strategy: l,
                            })
                          : T.rects),
                    ({ x: d, y: p } = i(u, m, f))),
                  (n = -1));
            }
            return { x: d, y: p, placement: m, strategy: l, middlewareData: g };
          })(t, e, { ...l, platform: c });
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
        const { overflow: e, overflowX: n, overflowY: o, display: i } = T(t);
        return (
          /auto|scroll|overlay|hidden|clip/.test(e + o + n) &&
          "inline" !== i &&
          "contents" !== i
        );
      }
      function d(t) {
        return /^(table|td|th)$/.test(i(t));
      }
      function p(t) {
        try {
          if (t.matches(":popover-open")) return !0;
        } catch (t) {}
        try {
          return t.matches(":modal");
        } catch (t) {
          return !1;
        }
      }
      n.d(e, {
        $4: () => R,
        CP: () => L,
        L9: () => T,
        Lv: () => d,
        Ng: () => f,
        Tc: () => x,
        Tf: () => p,
        ZU: () => u,
        _m: () => C,
        ep: () => l,
        eu: () => b,
        gJ: () => w,
        mq: () => i,
        sQ: () => v,
        sb: () => a,
        v9: () => S,
        vq: () => s,
        zk: () => r,
      });
      const m = /transform|translate|scale|rotate|perspective|filter/,
        h = /paint|layout|strict|content/,
        g = (t) => !!t && "none" !== t;
      let y;
      function v(t) {
        const e = s(t) ? T(t) : t;
        return (
          g(e.transform) ||
          g(e.translate) ||
          g(e.scale) ||
          g(e.rotate) ||
          g(e.perspective) ||
          (!x() && (g(e.backdropFilter) || g(e.filter))) ||
          m.test(e.willChange || "") ||
          h.test(e.contain || "")
        );
      }
      function w(t) {
        let e = R(t);
        for (; a(e) && !b(e); ) {
          if (v(e)) return e;
          if (p(e)) return null;
          e = R(e);
        }
        return null;
      }
      function x() {
        return (
          null == y &&
            (y =
              "undefined" != typeof CSS &&
              CSS.supports &&
              CSS.supports("-webkit-backdrop-filter", "none")),
          y
        );
      }
      function b(t) {
        return /^(html|body|#document)$/.test(i(t));
      }
      function T(t) {
        return r(t).getComputedStyle(t);
      }
      function L(t) {
        return s(t)
          ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
          : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
      }
      function R(t) {
        if ("html" === i(t)) return t;
        const e = t.assignedSlot || t.parentNode || (f(t) && t.host) || l(t);
        return f(e) ? e.host : e;
      }
      function O(t) {
        const e = R(t);
        return b(e) ? (t.ownerDocument || t).body : a(e) && u(e) ? e : O(e);
      }
      function S(t, e, n) {
        var o;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const i = O(t),
          l = i === (null == (o = t.ownerDocument) ? void 0 : o.body),
          c = r(i);
        if (l) {
          const t = C(c);
          return e.concat(
            c,
            c.visualViewport || [],
            u(i) ? i : [],
            t && n ? S(t) : [],
          );
        }
        return e.concat(i, S(i, [], n));
      }
      function C(t) {
        return t.parent && Object.getPrototypeOf(t.parent)
          ? t.frameElement
          : null;
      }
    },
    58015: (t, e, n) => {
      n.d(e, {
        B1: () => C,
        C0: () => u,
        Dz: () => g,
        Jx: () => c,
        LI: () => r,
        PG: () => p,
        RI: () => l,
        Sg: () => d,
        T9: () => i,
        TV: () => h,
        WJ: () => v,
        _3: () => f,
        bV: () => O,
        jk: () => o,
        lP: () => R,
        nI: () => S,
        qE: () => a,
        sq: () => m,
        w7: () => y,
      });
      const o = Math.min,
        i = Math.max,
        r = Math.round,
        l = Math.floor,
        c = (t) => ({ x: t, y: t }),
        s = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function a(t, e, n) {
        return i(t, o(e, n));
      }
      function f(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function u(t) {
        return t.split("-")[0];
      }
      function d(t) {
        return t.split("-")[1];
      }
      function p(t) {
        return "x" === t ? "y" : "x";
      }
      function m(t) {
        return "y" === t ? "height" : "width";
      }
      function h(t) {
        const e = t[0];
        return "t" === e || "b" === e ? "y" : "x";
      }
      function g(t) {
        return p(h(t));
      }
      function y(t, e, n) {
        void 0 === n && (n = !1);
        const o = d(t),
          i = g(t),
          r = m(i);
        let l =
          "x" === i
            ? o === (n ? "end" : "start")
              ? "right"
              : "left"
            : "start" === o
              ? "bottom"
              : "top";
        return e.reference[r] > e.floating[r] && (l = O(l)), [l, O(l)];
      }
      function v(t) {
        const e = O(t);
        return [w(t), e, w(e)];
      }
      function w(t) {
        return t.includes("start")
          ? t.replace("start", "end")
          : t.replace("end", "start");
      }
      const x = ["left", "right"],
        b = ["right", "left"],
        T = ["top", "bottom"],
        L = ["bottom", "top"];
      function R(t, e, n, o) {
        const i = d(t);
        let r = (function (t, e, n) {
          switch (t) {
            case "top":
            case "bottom":
              return n ? (e ? b : x) : e ? x : b;
            case "left":
            case "right":
              return e ? T : L;
            default:
              return [];
          }
        })(u(t), "start" === n, o);
        return (
          i && ((r = r.map((t) => t + "-" + i)), e && (r = r.concat(r.map(w)))),
          r
        );
      }
      function O(t) {
        const e = u(t);
        return s[e] + t.slice(e.length);
      }
      function S(t) {
        return "number" != typeof t
          ? (function (t) {
              var e, n, o, i;
              return {
                top: null != (e = t.top) ? e : 0,
                right: null != (n = t.right) ? n : 0,
                bottom: null != (o = t.bottom) ? o : 0,
                left: null != (i = t.left) ? i : 0,
              };
            })(t)
          : { top: t, right: t, bottom: t, left: t };
      }
      function C(t) {
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
    },
    55635: (t, e, n) => {
      n.d(e, { A: () => i });
      var o = n(53144);
      function i(t, e, n) {
        return (
          (e = (0, o.A)(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
    },
    54883: (t, e, n) => {
      n.d(e, { A: () => r });
      var o = n(55635);
      function i(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function r(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? i(Object(n), !0).forEach(function (e) {
                (0, o.A)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : i(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
    },
    53144: (t, e, n) => {
      n.d(e, { A: () => i });
      var o = n(11052);
      function i(t) {
        var e = (function (t, e) {
          if ("object" != (0, o.A)(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, e || "default");
            if ("object" != (0, o.A)(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == (0, o.A)(e) ? e : e + "";
      }
    },
    11052: (t, e, n) => {
      function o(t) {
        return (
          (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          o(t)
        );
      }
      n.d(e, { A: () => o });
    },
  },
]);
