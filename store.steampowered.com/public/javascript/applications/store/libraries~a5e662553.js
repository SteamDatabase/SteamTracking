/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9754],
  {
    33559: (t, e, n) => {
      n.d(e, {
        BN: () => a,
        Ej: () => f,
        UU: () => c,
        cY: () => s,
        rD: () => r,
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
        switch ((0, o.Sg)(e)) {
          case "start":
            m[c] -= p * (n && f ? -1 : 1);
            break;
          case "end":
            m[c] += p * (n && f ? -1 : 1);
        }
        return m;
      }
      const r = async (t, e, n) => {
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
          p = o,
          m = {},
          h = 0;
        for (let n = 0; n < s.length; n++) {
          const { name: l, fn: g } = s[n],
            {
              x: y,
              y: x,
              data: w,
              reset: v,
            } = await g({
              x: u,
              y: d,
              initialPlacement: o,
              placement: p,
              strategy: r,
              middlewareData: m,
              rects: f,
              platform: c,
              elements: { reference: t, floating: e },
            });
          (u = null != y ? y : u),
            (d = null != x ? x : d),
            (m = { ...m, [l]: { ...m[l], ...w } }),
            v &&
              h <= 50 &&
              (h++,
              "object" == typeof v &&
                (v.placement && (p = v.placement),
                v.rects &&
                  (f =
                    !0 === v.rects
                      ? await c.getElementRects({
                          reference: t,
                          floating: e,
                          strategy: r,
                        })
                      : v.rects),
                ({ x: u, y: d } = i(f, p, a))),
              (n = -1));
        }
        return { x: u, y: d, placement: p, strategy: r, middlewareData: m };
      };
      async function l(t, e) {
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
          x = "floating" === d ? { ...c.floating, x: i, y: r } : c.reference,
          w = await (null == l.getOffsetParent
            ? void 0
            : l.getOffsetParent(s.floating)),
          v = ((await (null == l.isElement ? void 0 : l.isElement(w))) &&
            (await (null == l.getScale ? void 0 : l.getScale(w)))) || {
            x: 1,
            y: 1,
          },
          b = (0, o.B1)(
            l.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
                  rect: x,
                  offsetParent: w,
                  strategy: a,
                })
              : x,
          );
        return {
          top: (y.top - b.top + h.top) / v.y,
          bottom: (b.bottom - y.bottom + h.bottom) / v.y,
          left: (y.left - b.left + h.left) / v.x,
          right: (b.right - y.right + h.right) / v.x,
        };
      }
      const c = function (t) {
        return (
          void 0 === t && (t = {}),
          {
            name: "flip",
            options: t,
            async fn(e) {
              var n, i;
              const {
                  placement: r,
                  middlewareData: c,
                  rects: s,
                  initialPlacement: a,
                  platform: f,
                  elements: u,
                } = e,
                {
                  mainAxis: d = !0,
                  crossAxis: p = !0,
                  fallbackPlacements: m,
                  fallbackStrategy: h = "bestFit",
                  fallbackAxisSideDirection: g = "none",
                  flipAlignment: y = !0,
                  ...x
                } = (0, o._3)(t, e);
              if (null != (n = c.arrow) && n.alignmentOffset) return {};
              const w = (0, o.C0)(r),
                v = (0, o.C0)(a) === a,
                b = await (null == f.isRTL ? void 0 : f.isRTL(u.floating)),
                T = m || (v || !y ? [(0, o.bV)(a)] : (0, o.WJ)(a));
              m || "none" === g || T.push(...(0, o.lP)(a, y, g, b));
              const L = [a, ...T],
                R = await l(e, x),
                E = [];
              let k = (null == (i = c.flip) ? void 0 : i.overflows) || [];
              if ((d && E.push(R[w]), p)) {
                const t = (0, o.w7)(r, s, b);
                E.push(R[t[0]], R[t[1]]);
              }
              if (
                ((k = [...k, { placement: r, overflows: E }]),
                !E.every((t) => t <= 0))
              ) {
                var C, D;
                const t = ((null == (C = c.flip) ? void 0 : C.index) || 0) + 1,
                  e = L[t];
                if (e)
                  return {
                    data: { index: t, overflows: k },
                    reset: { placement: e },
                  };
                let n =
                  null ==
                  (D = k
                    .filter((t) => t.overflows[0] <= 0)
                    .sort((t, e) => t.overflows[1] - e.overflows[1])[0])
                    ? void 0
                    : D.placement;
                if (!n)
                  switch (h) {
                    case "bestFit": {
                      var P;
                      const t =
                        null ==
                        (P = k
                          .map((t) => [
                            t.placement,
                            t.overflows
                              .filter((t) => t > 0)
                              .reduce((t, e) => t + e, 0),
                          ])
                          .sort((t, e) => t[1] - e[1])[0])
                          ? void 0
                          : P[0];
                      t && (n = t);
                      break;
                    }
                    case "initialPlacement":
                      n = a;
                  }
                if (r !== n) return { reset: { placement: n } };
              }
              return {};
            },
          }
        );
      };
      const s = function (t) {
          return (
            void 0 === t && (t = 0),
            {
              name: "offset",
              options: t,
              async fn(e) {
                var n, i;
                const { x: r, y: l, placement: c, middlewareData: s } = e,
                  a = await (async function (t, e) {
                    const { placement: n, platform: i, elements: r } = t,
                      l = await (null == i.isRTL
                        ? void 0
                        : i.isRTL(r.floating)),
                      c = (0, o.C0)(n),
                      s = (0, o.Sg)(n),
                      a = "y" === (0, o.TV)(n),
                      f = ["left", "top"].includes(c) ? -1 : 1,
                      u = l && a ? -1 : 1,
                      d = (0, o._3)(e, t);
                    let {
                      mainAxis: p,
                      crossAxis: m,
                      alignmentAxis: h,
                    } = "number" == typeof d
                      ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
                      : {
                          mainAxis: 0,
                          crossAxis: 0,
                          alignmentAxis: null,
                          ...d,
                        };
                    return (
                      s &&
                        "number" == typeof h &&
                        (m = "end" === s ? -1 * h : h),
                      a ? { x: m * u, y: p * f } : { x: p * f, y: m * u }
                    );
                  })(e, t);
                return c === (null == (n = s.offset) ? void 0 : n.placement) &&
                  null != (i = s.arrow) &&
                  i.alignmentOffset
                  ? {}
                  : { x: r + a.x, y: l + a.y, data: { ...a, placement: c } };
              },
            }
          );
        },
        a = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "shift",
              options: t,
              async fn(e) {
                const { x: n, y: i, placement: r } = e,
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
                  d = await l(e, f),
                  p = (0, o.TV)((0, o.C0)(r)),
                  m = (0, o.PG)(p);
                let h = u[m],
                  g = u[p];
                if (c) {
                  const t = "y" === m ? "bottom" : "right",
                    e = h + d["y" === m ? "top" : "left"],
                    n = h - d[t];
                  h = (0, o.qE)(e, h, n);
                }
                if (s) {
                  const t = "y" === p ? "bottom" : "right",
                    e = g + d["y" === p ? "top" : "left"],
                    n = g - d[t];
                  g = (0, o.qE)(e, g, n);
                }
                const y = a.fn({ ...e, [m]: h, [p]: g });
                return { ...y, data: { x: y.x - n, y: y.y - i } };
              },
            }
          );
        },
        f = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "size",
              options: t,
              async fn(e) {
                const { placement: n, rects: i, platform: r, elements: c } = e,
                  { apply: s = () => {}, ...a } = (0, o._3)(t, e),
                  f = await l(e, a),
                  u = (0, o.C0)(n),
                  d = (0, o.Sg)(n),
                  p = "y" === (0, o.TV)(n),
                  { width: m, height: h } = i.floating;
                let g, y;
                "top" === u || "bottom" === u
                  ? ((g = u),
                    (y =
                      d ===
                      ((await (null == r.isRTL ? void 0 : r.isRTL(c.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((y = u), (g = "end" === d ? "top" : "bottom"));
                const x = h - f[g],
                  w = m - f[y],
                  v = !e.middlewareData.shift;
                let b = x,
                  T = w;
                if (p) {
                  const t = m - f.left - f.right;
                  T = d || v ? (0, o.jk)(w, t) : t;
                } else {
                  const t = h - f.top - f.bottom;
                  b = d || v ? (0, o.jk)(x, t) : t;
                }
                if (v && !d) {
                  const t = (0, o.T9)(f.left, 0),
                    e = (0, o.T9)(f.right, 0),
                    n = (0, o.T9)(f.top, 0),
                    i = (0, o.T9)(f.bottom, 0);
                  p
                    ? (T =
                        m -
                        2 *
                          (0 !== t || 0 !== e
                            ? t + e
                            : (0, o.T9)(f.left, f.right)))
                    : (b =
                        h -
                        2 *
                          (0 !== n || 0 !== i
                            ? n + i
                            : (0, o.T9)(f.top, f.bottom)));
                }
                await s({ ...e, availableWidth: T, availableHeight: b });
                const L = await r.getDimensions(c.floating);
                return m !== L.width || h !== L.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        };
    },
    28505: (t, e, n) => {
      n.d(e, {
        BN: () => v,
        Ej: () => T,
        UU: () => b,
        ll: () => w,
        rD: () => L,
      });
      var o = n(58015),
        i = n(33559),
        r = n(977);
      function l(t) {
        const e = (0, r.L9)(t);
        let n = parseFloat(e.width) || 0,
          i = parseFloat(e.height) || 0;
        const l = (0, r.sb)(t),
          c = l ? t.offsetWidth : n,
          s = l ? t.offsetHeight : i,
          a = (0, o.LI)(n) !== c || (0, o.LI)(i) !== s;
        return a && ((n = c), (i = s)), { width: n, height: i, $: a };
      }
      function c(t) {
        return (0, r.vq)(t) ? t : t.contextElement;
      }
      function s(t) {
        const e = c(t);
        if (!(0, r.sb)(e)) return (0, o.Jx)(1);
        const n = e.getBoundingClientRect(),
          { width: i, height: s, $: a } = l(e);
        let f = (a ? (0, o.LI)(n.width) : n.width) / i,
          u = (a ? (0, o.LI)(n.height) : n.height) / s;
        return (
          (f && Number.isFinite(f)) || (f = 1),
          (u && Number.isFinite(u)) || (u = 1),
          { x: f, y: u }
        );
      }
      const a = (0, o.Jx)(0);
      function f(t) {
        const e = (0, r.zk)(t);
        return (0, r.Tc)() && e.visualViewport
          ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop }
          : a;
      }
      function u(t, e, n, i) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const l = t.getBoundingClientRect(),
          a = c(t);
        let u = (0, o.Jx)(1);
        e && (i ? (0, r.vq)(i) && (u = s(i)) : (u = s(t)));
        const d = (function (t, e, n) {
          return (
            void 0 === e && (e = !1), !(!n || (e && n !== (0, r.zk)(t))) && e
          );
        })(a, n, i)
          ? f(a)
          : (0, o.Jx)(0);
        let p = (l.left + d.x) / u.x,
          m = (l.top + d.y) / u.y,
          h = l.width / u.x,
          g = l.height / u.y;
        if (a) {
          const t = (0, r.zk)(a),
            e = i && (0, r.vq)(i) ? (0, r.zk)(i) : i;
          let n = t.frameElement;
          for (; n && i && e !== t; ) {
            const t = s(n),
              e = n.getBoundingClientRect(),
              o = (0, r.L9)(n),
              i = e.left + (n.clientLeft + parseFloat(o.paddingLeft)) * t.x,
              l = e.top + (n.clientTop + parseFloat(o.paddingTop)) * t.y;
            (p *= t.x),
              (m *= t.y),
              (h *= t.x),
              (g *= t.y),
              (p += i),
              (m += l),
              (n = (0, r.zk)(n).frameElement);
          }
        }
        return (0, o.B1)({ width: h, height: g, x: p, y: m });
      }
      function d(t) {
        return u((0, r.ep)(t)).left + (0, r.CP)(t).scrollLeft;
      }
      function p(t, e, n) {
        let i;
        if ("viewport" === e)
          i = (function (t, e) {
            const n = (0, r.zk)(t),
              o = (0, r.ep)(t),
              i = n.visualViewport;
            let l = o.clientWidth,
              c = o.clientHeight,
              s = 0,
              a = 0;
            if (i) {
              (l = i.width), (c = i.height);
              const t = (0, r.Tc)();
              (!t || (t && "fixed" === e)) &&
                ((s = i.offsetLeft), (a = i.offsetTop));
            }
            return { width: l, height: c, x: s, y: a };
          })(t, n);
        else if ("document" === e)
          i = (function (t) {
            const e = (0, r.ep)(t),
              n = (0, r.CP)(t),
              i = t.ownerDocument.body,
              l = (0, o.T9)(
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
            let s = -n.scrollLeft + d(t);
            const a = -n.scrollTop;
            return (
              "rtl" === (0, r.L9)(i).direction &&
                (s += (0, o.T9)(e.clientWidth, i.clientWidth) - l),
              { width: l, height: c, x: s, y: a }
            );
          })((0, r.ep)(t));
        else if ((0, r.vq)(e))
          i = (function (t, e) {
            const n = u(t, !0, "fixed" === e),
              i = n.top + t.clientTop,
              l = n.left + t.clientLeft,
              c = (0, r.sb)(t) ? s(t) : (0, o.Jx)(1);
            return {
              width: t.clientWidth * c.x,
              height: t.clientHeight * c.y,
              x: l * c.x,
              y: i * c.y,
            };
          })(e, n);
        else {
          const n = f(t);
          i = { ...e, x: e.x - n.x, y: e.y - n.y };
        }
        return (0, o.B1)(i);
      }
      function m(t, e) {
        const n = (0, r.$4)(t);
        return (
          !(n === e || !(0, r.vq)(n) || (0, r.eu)(n)) &&
          ("fixed" === (0, r.L9)(n).position || m(n, e))
        );
      }
      function h(t, e, n) {
        const i = (0, r.sb)(e),
          l = (0, r.ep)(e),
          c = "fixed" === n,
          s = u(t, !0, c, e);
        let a = { scrollLeft: 0, scrollTop: 0 };
        const f = (0, o.Jx)(0);
        if (i || (!i && !c))
          if (
            (("body" !== (0, r.mq)(e) || (0, r.ZU)(l)) && (a = (0, r.CP)(e)), i)
          ) {
            const t = u(e, !0, c, e);
            (f.x = t.x + e.clientLeft), (f.y = t.y + e.clientTop);
          } else l && (f.x = d(l));
        return {
          x: s.left + a.scrollLeft - f.x,
          y: s.top + a.scrollTop - f.y,
          width: s.width,
          height: s.height,
        };
      }
      function g(t, e) {
        return (0, r.sb)(t) && "fixed" !== (0, r.L9)(t).position
          ? e
            ? e(t)
            : t.offsetParent
          : null;
      }
      function y(t, e) {
        const n = (0, r.zk)(t);
        if (!(0, r.sb)(t)) return n;
        let o = g(t, e);
        for (; o && (0, r.Lv)(o) && "static" === (0, r.L9)(o).position; )
          o = g(o, e);
        return o &&
          ("html" === (0, r.mq)(o) ||
            ("body" === (0, r.mq)(o) &&
              "static" === (0, r.L9)(o).position &&
              !(0, r.sQ)(o)))
          ? n
          : o || (0, r.gJ)(t) || n;
      }
      const x = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
          let { rect: e, offsetParent: n, strategy: i } = t;
          const l = (0, r.sb)(n),
            c = (0, r.ep)(n);
          if (n === c) return e;
          let a = { scrollLeft: 0, scrollTop: 0 },
            f = (0, o.Jx)(1);
          const d = (0, o.Jx)(0);
          if (
            (l || (!l && "fixed" !== i)) &&
            (("body" !== (0, r.mq)(n) || (0, r.ZU)(c)) && (a = (0, r.CP)(n)),
            (0, r.sb)(n))
          ) {
            const t = u(n);
            (f = s(n)), (d.x = t.x + n.clientLeft), (d.y = t.y + n.clientTop);
          }
          return {
            width: e.width * f.x,
            height: e.height * f.y,
            x: e.x * f.x - a.scrollLeft * f.x + d.x,
            y: e.y * f.y - a.scrollTop * f.y + d.y,
          };
        },
        getDocumentElement: r.ep,
        getClippingRect: function (t) {
          let { element: e, boundary: n, rootBoundary: i, strategy: l } = t;
          const c = [
              ...("clippingAncestors" === n
                ? (function (t, e) {
                    const n = e.get(t);
                    if (n) return n;
                    let o = (0, r.v9)(t, [], !1).filter(
                        (t) => (0, r.vq)(t) && "body" !== (0, r.mq)(t),
                      ),
                      i = null;
                    const l = "fixed" === (0, r.L9)(t).position;
                    let c = l ? (0, r.$4)(t) : t;
                    for (; (0, r.vq)(c) && !(0, r.eu)(c); ) {
                      const e = (0, r.L9)(c),
                        n = (0, r.sQ)(c);
                      n || "fixed" !== e.position || (i = null),
                        (
                          l
                            ? !n && !i
                            : (!n &&
                                "static" === e.position &&
                                i &&
                                ["absolute", "fixed"].includes(i.position)) ||
                              ((0, r.ZU)(c) && !n && m(t, c))
                        )
                          ? (o = o.filter((t) => t !== c))
                          : (i = e),
                        (c = (0, r.$4)(c));
                    }
                    return e.set(t, o), o;
                  })(e, this._c)
                : [].concat(n)),
              i,
            ],
            s = c[0],
            a = c.reduce(
              (t, n) => {
                const i = p(e, n, l);
                return (
                  (t.top = (0, o.T9)(i.top, t.top)),
                  (t.right = (0, o.jk)(i.right, t.right)),
                  (t.bottom = (0, o.jk)(i.bottom, t.bottom)),
                  (t.left = (0, o.T9)(i.left, t.left)),
                  t
                );
              },
              p(e, s, l),
            );
          return {
            width: a.right - a.left,
            height: a.bottom - a.top,
            x: a.left,
            y: a.top,
          };
        },
        getOffsetParent: y,
        getElementRects: async function (t) {
          let { reference: e, floating: n, strategy: o } = t;
          const i = this.getOffsetParent || y,
            r = this.getDimensions;
          return {
            reference: h(e, await i(n), o),
            floating: { x: 0, y: 0, ...(await r(n)) },
          };
        },
        getClientRects: function (t) {
          return Array.from(t.getClientRects());
        },
        getDimensions: function (t) {
          const { width: e, height: n } = l(t);
          return { width: e, height: n };
        },
        getScale: s,
        isElement: r.vq,
        isRTL: function (t) {
          return "rtl" === (0, r.L9)(t).direction;
        },
      };
      function w(t, e, n, i) {
        void 0 === i && (i = {});
        const {
            ancestorScroll: l = !0,
            ancestorResize: s = !0,
            elementResize: a = "function" == typeof ResizeObserver,
            layoutShift: f = "function" == typeof IntersectionObserver,
            animationFrame: d = !1,
          } = i,
          p = c(t),
          m = l || s ? [...(p ? (0, r.v9)(p) : []), ...(0, r.v9)(e)] : [];
        m.forEach((t) => {
          l && t.addEventListener("scroll", n, { passive: !0 }),
            s && t.addEventListener("resize", n);
        });
        const h =
          p && f
            ? (function (t, e) {
                let n,
                  i = null;
                const l = (0, r.ep)(t);
                function c() {
                  clearTimeout(n), i && i.disconnect(), (i = null);
                }
                return (
                  (function r(s, a) {
                    void 0 === s && (s = !1), void 0 === a && (a = 1), c();
                    const {
                      left: f,
                      top: u,
                      width: d,
                      height: p,
                    } = t.getBoundingClientRect();
                    if ((s || e(), !d || !p)) return;
                    const m = {
                      rootMargin:
                        -(0, o.RI)(u) +
                        "px " +
                        -(0, o.RI)(l.clientWidth - (f + d)) +
                        "px " +
                        -(0, o.RI)(l.clientHeight - (u + p)) +
                        "px " +
                        -(0, o.RI)(f) +
                        "px",
                      threshold: (0, o.T9)(0, (0, o.jk)(1, a)) || 1,
                    };
                    let h = !0;
                    function g(t) {
                      const e = t[0].intersectionRatio;
                      if (e !== a) {
                        if (!h) return r();
                        e
                          ? r(!1, e)
                          : (n = setTimeout(() => {
                              r(!1, 1e-7);
                            }, 100));
                      }
                      h = !1;
                    }
                    try {
                      i = new IntersectionObserver(g, {
                        ...m,
                        root: l.ownerDocument,
                      });
                    } catch (t) {
                      i = new IntersectionObserver(g, m);
                    }
                    i.observe(t);
                  })(!0),
                  c
                );
              })(p, n)
            : null;
        let g,
          y = -1,
          x = null;
        a &&
          ((x = new ResizeObserver((t) => {
            let [o] = t;
            o &&
              o.target === p &&
              x &&
              (x.unobserve(e),
              cancelAnimationFrame(y),
              (y = requestAnimationFrame(() => {
                x && x.observe(e);
              }))),
              n();
          })),
          p && !d && x.observe(p),
          x.observe(e));
        let w = d ? u(t) : null;
        return (
          d &&
            (function e() {
              const o = u(t);
              !w ||
                (o.x === w.x &&
                  o.y === w.y &&
                  o.width === w.width &&
                  o.height === w.height) ||
                n();
              (w = o), (g = requestAnimationFrame(e));
            })(),
          n(),
          () => {
            m.forEach((t) => {
              l && t.removeEventListener("scroll", n),
                s && t.removeEventListener("resize", n);
            }),
              h && h(),
              x && x.disconnect(),
              (x = null),
              d && cancelAnimationFrame(g);
          }
        );
      }
      const v = i.BN,
        b = i.UU,
        T = i.Ej,
        L = (t, e, n) => {
          const o = new Map(),
            r = { platform: x, ...n },
            l = { ...r.platform, _c: o };
          return (0, i.rD)(t, e, { ...r, platform: l });
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
        const { overflow: e, overflowX: n, overflowY: o, display: i } = x(t);
        return (
          /auto|scroll|overlay|hidden|clip/.test(e + o + n) &&
          !["inline", "contents"].includes(i)
        );
      }
      function d(t) {
        return ["table", "td", "th"].includes(i(t));
      }
      function p(t) {
        return [":popover-open", ":modal"].some((e) => {
          try {
            return t.matches(e);
          } catch (t) {
            return !1;
          }
        });
      }
      function m(t) {
        const e = g(),
          n = s(t) ? x(t) : t;
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
      function h(t) {
        let e = v(t);
        for (; a(e) && !y(e); ) {
          if (m(e)) return e;
          if (p(e)) return null;
          e = v(e);
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
      function x(t) {
        return r(t).getComputedStyle(t);
      }
      function w(t) {
        return s(t)
          ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
          : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
      }
      function v(t) {
        if ("html" === i(t)) return t;
        const e = t.assignedSlot || t.parentNode || (f(t) && t.host) || l(t);
        return f(e) ? e.host : e;
      }
      function b(t) {
        const e = v(t);
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
        $4: () => v,
        CP: () => w,
        L9: () => x,
        Lv: () => d,
        Ng: () => f,
        Tc: () => g,
        ZU: () => u,
        ep: () => l,
        eu: () => y,
        gJ: () => h,
        mq: () => i,
        sQ: () => m,
        sb: () => a,
        v9: () => T,
        vq: () => s,
        zk: () => r,
      });
    },
    58015: (t, e, n) => {
      n.d(e, {
        B1: () => R,
        C0: () => d,
        Dz: () => y,
        Jx: () => c,
        LI: () => r,
        PG: () => m,
        RI: () => l,
        Sg: () => p,
        T9: () => i,
        TV: () => g,
        WJ: () => w,
        _3: () => u,
        bV: () => T,
        jk: () => o,
        lP: () => b,
        nI: () => L,
        qE: () => f,
        sq: () => h,
        w7: () => x,
      });
      const o = Math.min,
        i = Math.max,
        r = Math.round,
        l = Math.floor,
        c = (t) => ({ x: t, y: t }),
        s = { left: "right", right: "left", bottom: "top", top: "bottom" },
        a = { start: "end", end: "start" };
      function f(t, e, n) {
        return i(t, o(e, n));
      }
      function u(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function d(t) {
        return t.split("-")[0];
      }
      function p(t) {
        return t.split("-")[1];
      }
      function m(t) {
        return "x" === t ? "y" : "x";
      }
      function h(t) {
        return "y" === t ? "height" : "width";
      }
      function g(t) {
        return ["top", "bottom"].includes(d(t)) ? "y" : "x";
      }
      function y(t) {
        return m(g(t));
      }
      function x(t, e, n) {
        void 0 === n && (n = !1);
        const o = p(t),
          i = y(t),
          r = h(i);
        let l =
          "x" === i
            ? o === (n ? "end" : "start")
              ? "right"
              : "left"
            : "start" === o
              ? "bottom"
              : "top";
        return e.reference[r] > e.floating[r] && (l = T(l)), [l, T(l)];
      }
      function w(t) {
        const e = T(t);
        return [v(t), e, v(e)];
      }
      function v(t) {
        return t.replace(/start|end/g, (t) => a[t]);
      }
      function b(t, e, n, o) {
        const i = p(t);
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
        })(d(t), "start" === n, o);
        return (
          i && ((r = r.map((t) => t + "-" + i)), e && (r = r.concat(r.map(v)))),
          r
        );
      }
      function T(t) {
        return t.replace(/left|right|bottom|top/g, (t) => s[t]);
      }
      function L(t) {
        return "number" != typeof t
          ? (function (t) {
              return { top: 0, right: 0, bottom: 0, left: 0, ...t };
            })(t)
          : { top: t, right: t, bottom: t, left: t };
      }
      function R(t) {
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
