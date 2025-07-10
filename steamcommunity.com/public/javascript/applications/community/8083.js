/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8083],
  {
    8083: (t, e, n) => {
      n.d(e, { ll: () => x, rD: () => L, UU: () => b, Ej: () => T });
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
          h = i[s] / 2 - r[s] / 2;
        let p;
        switch (a) {
          case "top":
            p = { x: u, y: i.y - r.height };
            break;
          case "bottom":
            p = { x: u, y: i.y + i.height };
            break;
          case "right":
            p = { x: i.x + i.width, y: d };
            break;
          case "left":
            p = { x: i.x - r.width, y: d };
            break;
          default:
            p = { x: i.x, y: i.y };
        }
        switch ((0, o.Sg)(e)) {
          case "start":
            p[c] -= h * (n && f ? -1 : 1);
            break;
          case "end":
            p[c] += h * (n && f ? -1 : 1);
        }
        return p;
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
            altBoundary: h = !1,
            padding: p = 0,
          } = (0, o._3)(e, t),
          m = (0, o.nI)(p),
          g = s[h ? ("floating" === d ? "reference" : "floating") : d],
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
          w = "floating" === d ? { ...c.floating, x: i, y: r } : c.reference,
          v = await (null == l.getOffsetParent
            ? void 0
            : l.getOffsetParent(s.floating)),
          x = ((await (null == l.isElement ? void 0 : l.isElement(v))) &&
            (await (null == l.getScale ? void 0 : l.getScale(v)))) || {
            x: 1,
            y: 1,
          },
          b = (0, o.B1)(
            l.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
                  rect: w,
                  offsetParent: v,
                  strategy: a,
                })
              : w,
          );
        return {
          top: (y.top - b.top + m.top) / x.y,
          bottom: (b.bottom - y.bottom + m.bottom) / x.y,
          left: (y.left - b.left + m.left) / x.x,
          right: (b.right - y.right + m.right) / x.x,
        };
      }
      var l = n(977);
      function c(t) {
        const e = (0, l.L9)(t);
        let n = parseFloat(e.width) || 0,
          i = parseFloat(e.height) || 0;
        const r = (0, l.sb)(t),
          c = r ? t.offsetWidth : n,
          s = r ? t.offsetHeight : i,
          a = (0, o.LI)(n) !== c || (0, o.LI)(i) !== s;
        return a && ((n = c), (i = s)), { width: n, height: i, $: a };
      }
      function s(t) {
        return (0, l.vq)(t) ? t : t.contextElement;
      }
      function a(t) {
        const e = s(t);
        if (!(0, l.sb)(e)) return (0, o.Jx)(1);
        const n = e.getBoundingClientRect(),
          { width: i, height: r, $: a } = c(e);
        let f = (a ? (0, o.LI)(n.width) : n.width) / i,
          u = (a ? (0, o.LI)(n.height) : n.height) / r;
        return (
          (f && Number.isFinite(f)) || (f = 1),
          (u && Number.isFinite(u)) || (u = 1),
          { x: f, y: u }
        );
      }
      const f = (0, o.Jx)(0);
      function u(t) {
        const e = (0, l.zk)(t);
        return (0, l.Tc)() && e.visualViewport
          ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop }
          : f;
      }
      function d(t, e, n, i) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const r = t.getBoundingClientRect(),
          c = s(t);
        let f = (0, o.Jx)(1);
        e && (i ? (0, l.vq)(i) && (f = a(i)) : (f = a(t)));
        const d = (function (t, e, n) {
          return (
            void 0 === e && (e = !1), !(!n || (e && n !== (0, l.zk)(t))) && e
          );
        })(c, n, i)
          ? u(c)
          : (0, o.Jx)(0);
        let h = (r.left + d.x) / f.x,
          p = (r.top + d.y) / f.y,
          m = r.width / f.x,
          g = r.height / f.y;
        if (c) {
          const t = (0, l.zk)(c),
            e = i && (0, l.vq)(i) ? (0, l.zk)(i) : i;
          let n = t.frameElement;
          for (; n && i && e !== t; ) {
            const t = a(n),
              e = n.getBoundingClientRect(),
              o = (0, l.L9)(n),
              i = e.left + (n.clientLeft + parseFloat(o.paddingLeft)) * t.x,
              r = e.top + (n.clientTop + parseFloat(o.paddingTop)) * t.y;
            (h *= t.x),
              (p *= t.y),
              (m *= t.x),
              (g *= t.y),
              (h += i),
              (p += r),
              (n = (0, l.zk)(n).frameElement);
          }
        }
        return (0, o.B1)({ width: m, height: g, x: h, y: p });
      }
      function h(t) {
        return d((0, l.ep)(t)).left + (0, l.CP)(t).scrollLeft;
      }
      function p(t, e, n) {
        let i;
        if ("viewport" === e)
          i = (function (t, e) {
            const n = (0, l.zk)(t),
              o = (0, l.ep)(t),
              i = n.visualViewport;
            let r = o.clientWidth,
              c = o.clientHeight,
              s = 0,
              a = 0;
            if (i) {
              (r = i.width), (c = i.height);
              const t = (0, l.Tc)();
              (!t || (t && "fixed" === e)) &&
                ((s = i.offsetLeft), (a = i.offsetTop));
            }
            return { width: r, height: c, x: s, y: a };
          })(t, n);
        else if ("document" === e)
          i = (function (t) {
            const e = (0, l.ep)(t),
              n = (0, l.CP)(t),
              i = t.ownerDocument.body,
              r = (0, o.T9)(
                e.scrollWidth,
                e.clientWidth,
                i.scrollWidth,
                i.clientWidth,
              ),
              c = (0, o.T9)(
                e.scrollHeight,
                e.clientHeight,
                i.scrollHeight,
                i.clientHeight,
              );
            let s = -n.scrollLeft + h(t);
            const a = -n.scrollTop;
            return (
              "rtl" === (0, l.L9)(i).direction &&
                (s += (0, o.T9)(e.clientWidth, i.clientWidth) - r),
              { width: r, height: c, x: s, y: a }
            );
          })((0, l.ep)(t));
        else if ((0, l.vq)(e))
          i = (function (t, e) {
            const n = d(t, !0, "fixed" === e),
              i = n.top + t.clientTop,
              r = n.left + t.clientLeft,
              c = (0, l.sb)(t) ? a(t) : (0, o.Jx)(1);
            return {
              width: t.clientWidth * c.x,
              height: t.clientHeight * c.y,
              x: r * c.x,
              y: i * c.y,
            };
          })(e, n);
        else {
          const n = u(t);
          i = { ...e, x: e.x - n.x, y: e.y - n.y };
        }
        return (0, o.B1)(i);
      }
      function m(t, e) {
        const n = (0, l.$4)(t);
        return (
          !(n === e || !(0, l.vq)(n) || (0, l.eu)(n)) &&
          ("fixed" === (0, l.L9)(n).position || m(n, e))
        );
      }
      function g(t, e, n) {
        const i = (0, l.sb)(e),
          r = (0, l.ep)(e),
          c = "fixed" === n,
          s = d(t, !0, c, e);
        let a = { scrollLeft: 0, scrollTop: 0 };
        const f = (0, o.Jx)(0);
        if (i || (!i && !c))
          if (
            (("body" !== (0, l.mq)(e) || (0, l.ZU)(r)) && (a = (0, l.CP)(e)), i)
          ) {
            const t = d(e, !0, c, e);
            (f.x = t.x + e.clientLeft), (f.y = t.y + e.clientTop);
          } else r && (f.x = h(r));
        return {
          x: s.left + a.scrollLeft - f.x,
          y: s.top + a.scrollTop - f.y,
          width: s.width,
          height: s.height,
        };
      }
      function y(t, e) {
        return (0, l.sb)(t) && "fixed" !== (0, l.L9)(t).position
          ? e
            ? e(t)
            : t.offsetParent
          : null;
      }
      function w(t, e) {
        const n = (0, l.zk)(t);
        if (!(0, l.sb)(t)) return n;
        let o = y(t, e);
        for (; o && (0, l.Lv)(o) && "static" === (0, l.L9)(o).position; )
          o = y(o, e);
        return o &&
          ("html" === (0, l.mq)(o) ||
            ("body" === (0, l.mq)(o) &&
              "static" === (0, l.L9)(o).position &&
              !(0, l.sQ)(o)))
          ? n
          : o || (0, l.gJ)(t) || n;
      }
      const v = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
          let { rect: e, offsetParent: n, strategy: i } = t;
          const r = (0, l.sb)(n),
            c = (0, l.ep)(n);
          if (n === c) return e;
          let s = { scrollLeft: 0, scrollTop: 0 },
            f = (0, o.Jx)(1);
          const u = (0, o.Jx)(0);
          if (
            (r || (!r && "fixed" !== i)) &&
            (("body" !== (0, l.mq)(n) || (0, l.ZU)(c)) && (s = (0, l.CP)(n)),
            (0, l.sb)(n))
          ) {
            const t = d(n);
            (f = a(n)), (u.x = t.x + n.clientLeft), (u.y = t.y + n.clientTop);
          }
          return {
            width: e.width * f.x,
            height: e.height * f.y,
            x: e.x * f.x - s.scrollLeft * f.x + u.x,
            y: e.y * f.y - s.scrollTop * f.y + u.y,
          };
        },
        getDocumentElement: l.ep,
        getClippingRect: function (t) {
          let { element: e, boundary: n, rootBoundary: i, strategy: r } = t;
          const c = [
              ...("clippingAncestors" === n
                ? (function (t, e) {
                    const n = e.get(t);
                    if (n) return n;
                    let o = (0, l.v9)(t, [], !1).filter(
                        (t) => (0, l.vq)(t) && "body" !== (0, l.mq)(t),
                      ),
                      i = null;
                    const r = "fixed" === (0, l.L9)(t).position;
                    let c = r ? (0, l.$4)(t) : t;
                    for (; (0, l.vq)(c) && !(0, l.eu)(c); ) {
                      const e = (0, l.L9)(c),
                        n = (0, l.sQ)(c);
                      n || "fixed" !== e.position || (i = null),
                        (
                          r
                            ? !n && !i
                            : (!n &&
                                "static" === e.position &&
                                i &&
                                ["absolute", "fixed"].includes(i.position)) ||
                              ((0, l.ZU)(c) && !n && m(t, c))
                        )
                          ? (o = o.filter((t) => t !== c))
                          : (i = e),
                        (c = (0, l.$4)(c));
                    }
                    return e.set(t, o), o;
                  })(e, this._c)
                : [].concat(n)),
              i,
            ],
            s = c[0],
            a = c.reduce(
              (t, n) => {
                const i = p(e, n, r);
                return (
                  (t.top = (0, o.T9)(i.top, t.top)),
                  (t.right = (0, o.jk)(i.right, t.right)),
                  (t.bottom = (0, o.jk)(i.bottom, t.bottom)),
                  (t.left = (0, o.T9)(i.left, t.left)),
                  t
                );
              },
              p(e, s, r),
            );
          return {
            width: a.right - a.left,
            height: a.bottom - a.top,
            x: a.left,
            y: a.top,
          };
        },
        getOffsetParent: w,
        getElementRects: async function (t) {
          let { reference: e, floating: n, strategy: o } = t;
          const i = this.getOffsetParent || w,
            r = this.getDimensions;
          return {
            reference: g(e, await i(n), o),
            floating: { x: 0, y: 0, ...(await r(n)) },
          };
        },
        getClientRects: function (t) {
          return Array.from(t.getClientRects());
        },
        getDimensions: function (t) {
          const { width: e, height: n } = c(t);
          return { width: e, height: n };
        },
        getScale: a,
        isElement: l.vq,
        isRTL: function (t) {
          return "rtl" === (0, l.L9)(t).direction;
        },
      };
      function x(t, e, n, i) {
        void 0 === i && (i = {});
        const {
            ancestorScroll: r = !0,
            ancestorResize: c = !0,
            elementResize: a = "function" == typeof ResizeObserver,
            layoutShift: f = "function" == typeof IntersectionObserver,
            animationFrame: u = !1,
          } = i,
          h = s(t),
          p = r || c ? [...(h ? (0, l.v9)(h) : []), ...(0, l.v9)(e)] : [];
        p.forEach((t) => {
          r && t.addEventListener("scroll", n, { passive: !0 }),
            c && t.addEventListener("resize", n);
        });
        const m =
          h && f
            ? (function (t, e) {
                let n,
                  i = null;
                const r = (0, l.ep)(t);
                function c() {
                  clearTimeout(n), i && i.disconnect(), (i = null);
                }
                return (
                  (function l(s, a) {
                    void 0 === s && (s = !1), void 0 === a && (a = 1), c();
                    const {
                      left: f,
                      top: u,
                      width: d,
                      height: h,
                    } = t.getBoundingClientRect();
                    if ((s || e(), !d || !h)) return;
                    const p = {
                      rootMargin:
                        -(0, o.RI)(u) +
                        "px " +
                        -(0, o.RI)(r.clientWidth - (f + d)) +
                        "px " +
                        -(0, o.RI)(r.clientHeight - (u + h)) +
                        "px " +
                        -(0, o.RI)(f) +
                        "px",
                      threshold: (0, o.T9)(0, (0, o.jk)(1, a)) || 1,
                    };
                    let m = !0;
                    function g(t) {
                      const e = t[0].intersectionRatio;
                      if (e !== a) {
                        if (!m) return l();
                        e
                          ? l(!1, e)
                          : (n = setTimeout(() => {
                              l(!1, 1e-7);
                            }, 100));
                      }
                      m = !1;
                    }
                    try {
                      i = new IntersectionObserver(g, {
                        ...p,
                        root: r.ownerDocument,
                      });
                    } catch (t) {
                      i = new IntersectionObserver(g, p);
                    }
                    i.observe(t);
                  })(!0),
                  c
                );
              })(h, n)
            : null;
        let g,
          y = -1,
          w = null;
        a &&
          ((w = new ResizeObserver((t) => {
            let [o] = t;
            o &&
              o.target === h &&
              w &&
              (w.unobserve(e),
              cancelAnimationFrame(y),
              (y = requestAnimationFrame(() => {
                w && w.observe(e);
              }))),
              n();
          })),
          h && !u && w.observe(h),
          w.observe(e));
        let v = u ? d(t) : null;
        return (
          u &&
            (function e() {
              const o = d(t);
              !v ||
                (o.x === v.x &&
                  o.y === v.y &&
                  o.width === v.width &&
                  o.height === v.height) ||
                n();
              (v = o), (g = requestAnimationFrame(e));
            })(),
          n(),
          () => {
            p.forEach((t) => {
              r && t.removeEventListener("scroll", n),
                c && t.removeEventListener("resize", n);
            }),
              m && m(),
              w && w.disconnect(),
              (w = null),
              u && cancelAnimationFrame(g);
          }
        );
      }
      const b = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "flip",
              options: t,
              async fn(e) {
                var n, i;
                const {
                    placement: l,
                    middlewareData: c,
                    rects: s,
                    initialPlacement: a,
                    platform: f,
                    elements: u,
                  } = e,
                  {
                    mainAxis: d = !0,
                    crossAxis: h = !0,
                    fallbackPlacements: p,
                    fallbackStrategy: m = "bestFit",
                    fallbackAxisSideDirection: g = "none",
                    flipAlignment: y = !0,
                    ...w
                  } = (0, o._3)(t, e);
                if (null != (n = c.arrow) && n.alignmentOffset) return {};
                const v = (0, o.C0)(l),
                  x = (0, o.C0)(a) === a,
                  b = await (null == f.isRTL ? void 0 : f.isRTL(u.floating)),
                  T = p || (x || !y ? [(0, o.bV)(a)] : (0, o.WJ)(a));
                p || "none" === g || T.push(...(0, o.lP)(a, y, g, b));
                const L = [a, ...T],
                  R = await r(e, w),
                  k = [];
                let E = (null == (i = c.flip) ? void 0 : i.overflows) || [];
                if ((d && k.push(R[v]), h)) {
                  const t = (0, o.w7)(l, s, b);
                  k.push(R[t[0]], R[t[1]]);
                }
                if (
                  ((E = [...E, { placement: l, overflows: k }]),
                  !k.every((t) => t <= 0))
                ) {
                  var C, P;
                  const t =
                      ((null == (C = c.flip) ? void 0 : C.index) || 0) + 1,
                    e = L[t];
                  if (e)
                    return {
                      data: { index: t, overflows: E },
                      reset: { placement: e },
                    };
                  let n =
                    null ==
                    (P = E.filter((t) => t.overflows[0] <= 0).sort(
                      (t, e) => t.overflows[1] - e.overflows[1],
                    )[0])
                      ? void 0
                      : P.placement;
                  if (!n)
                    switch (m) {
                      case "bestFit": {
                        var D;
                        const t =
                          null ==
                          (D = E.map((t) => [
                            t.placement,
                            t.overflows
                              .filter((t) => t > 0)
                              .reduce((t, e) => t + e, 0),
                          ]).sort((t, e) => t[1] - e[1])[0])
                            ? void 0
                            : D[0];
                        t && (n = t);
                        break;
                      }
                      case "initialPlacement":
                        n = a;
                    }
                  if (l !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }
          );
        },
        T = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "size",
              options: t,
              async fn(e) {
                const { placement: n, rects: i, platform: l, elements: c } = e,
                  { apply: s = () => {}, ...a } = (0, o._3)(t, e),
                  f = await r(e, a),
                  u = (0, o.C0)(n),
                  d = (0, o.Sg)(n),
                  h = "y" === (0, o.TV)(n),
                  { width: p, height: m } = i.floating;
                let g, y;
                "top" === u || "bottom" === u
                  ? ((g = u),
                    (y =
                      d ===
                      ((await (null == l.isRTL ? void 0 : l.isRTL(c.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((y = u), (g = "end" === d ? "top" : "bottom"));
                const w = m - f[g],
                  v = p - f[y],
                  x = !e.middlewareData.shift;
                let b = w,
                  T = v;
                if (h) {
                  const t = p - f.left - f.right;
                  T = d || x ? (0, o.jk)(v, t) : t;
                } else {
                  const t = m - f.top - f.bottom;
                  b = d || x ? (0, o.jk)(w, t) : t;
                }
                if (x && !d) {
                  const t = (0, o.T9)(f.left, 0),
                    e = (0, o.T9)(f.right, 0),
                    n = (0, o.T9)(f.top, 0),
                    i = (0, o.T9)(f.bottom, 0);
                  h
                    ? (T =
                        p -
                        2 *
                          (0 !== t || 0 !== e
                            ? t + e
                            : (0, o.T9)(f.left, f.right)))
                    : (b =
                        m -
                        2 *
                          (0 !== n || 0 !== i
                            ? n + i
                            : (0, o.T9)(f.top, f.bottom)));
                }
                await s({ ...e, availableWidth: T, availableHeight: b });
                const L = await l.getDimensions(c.floating);
                return p !== L.width || m !== L.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        },
        L = (t, e, n) => {
          const o = new Map(),
            r = { platform: v, ...n },
            l = { ...r.platform, _c: o };
          return (async (t, e, n) => {
            const {
                placement: o = "bottom",
                strategy: r = "absolute",
                middleware: l = [],
                platform: c,
              } = n,
              s = l.filter(Boolean),
              a = await (null == c.isRTL ? void 0 : c.isRTL(e));
            let f = await c.getElementRects({
                reference: t,
                floating: e,
                strategy: r,
              }),
              { x: u, y: d } = i(f, o, a),
              h = o,
              p = {},
              m = 0;
            for (let n = 0; n < s.length; n++) {
              const { name: l, fn: g } = s[n],
                {
                  x: y,
                  y: w,
                  data: v,
                  reset: x,
                } = await g({
                  x: u,
                  y: d,
                  initialPlacement: o,
                  placement: h,
                  strategy: r,
                  middlewareData: p,
                  rects: f,
                  platform: c,
                  elements: { reference: t, floating: e },
                });
              (u = null != y ? y : u),
                (d = null != w ? w : d),
                (p = { ...p, [l]: { ...p[l], ...v } }),
                x &&
                  m <= 50 &&
                  (m++,
                  "object" == typeof x &&
                    (x.placement && (h = x.placement),
                    x.rects &&
                      (f =
                        !0 === x.rects
                          ? await c.getElementRects({
                              reference: t,
                              floating: e,
                              strategy: r,
                            })
                          : x.rects),
                    ({ x: u, y: d } = i(f, h, a))),
                  (n = -1));
            }
            return { x: u, y: d, placement: h, strategy: r, middlewareData: p };
          })(t, e, { ...r, platform: l });
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
        let e = x(t);
        for (; a(e) && !y(e); ) {
          if (p(e)) return e;
          if (h(e)) return null;
          e = x(e);
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
      function x(t) {
        if ("html" === i(t)) return t;
        const e = t.assignedSlot || t.parentNode || (f(t) && t.host) || l(t);
        return f(e) ? e.host : e;
      }
      function b(t) {
        const e = x(t);
        return y(e)
          ? t.ownerDocument
            ? t.ownerDocument.body
            : t.body
          : a(e) && u(e)
            ? e
            : b(e);
      }
      function T(t, e, n) {
        var o;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const i = b(t),
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
            t && n ? T(t) : [],
          );
        }
        return e.concat(i, T(i, [], n));
      }
      n.d(e, {
        $4: () => x,
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
        v9: () => T,
        vq: () => s,
        zk: () => r,
      });
    },
    58015: (t, e, n) => {
      n.d(e, {
        B1: () => T,
        C0: () => u,
        Dz: () => m,
        Jx: () => c,
        LI: () => r,
        RI: () => l,
        Sg: () => d,
        T9: () => i,
        TV: () => p,
        WJ: () => y,
        _3: () => f,
        bV: () => x,
        jk: () => o,
        lP: () => v,
        nI: () => b,
        sq: () => h,
        w7: () => g,
      });
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
      function g(t, e, n) {
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
        return e.reference[r] > e.floating[r] && (l = x(l)), [l, x(l)];
      }
      function y(t) {
        const e = x(t);
        return [w(t), e, w(e)];
      }
      function w(t) {
        return t.replace(/start|end/g, (t) => a[t]);
      }
      function v(t, e, n, o) {
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
          i && ((r = r.map((t) => t + "-" + i)), e && (r = r.concat(r.map(w)))),
          r
        );
      }
      function x(t) {
        return t.replace(/left|right|bottom|top/g, (t) => s[t]);
      }
      function b(t) {
        return "number" != typeof t
          ? (function (t) {
              return { top: 0, right: 0, bottom: 0, left: 0, ...t };
            })(t)
          : { top: t, right: t, bottom: t, left: t };
      }
      function T(t) {
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
  },
]);
