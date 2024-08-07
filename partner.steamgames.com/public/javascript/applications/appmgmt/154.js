/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [154],
  {
    7502: (e, t, n) => {
      n.d(t, { w: () => f });
      for (
        var o = {
            8: "Backspace",
            9: "Tab",
            10: "Enter",
            12: "NumLock",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            44: "PrintScreen",
            45: "Insert",
            46: "Delete",
            59: ";",
            61: "=",
            91: "Meta",
            92: "Meta",
            106: "*",
            107: "+",
            108: ",",
            109: "-",
            110: ".",
            111: "/",
            144: "NumLock",
            145: "ScrollLock",
            160: "Shift",
            161: "Shift",
            162: "Control",
            163: "Control",
            164: "Alt",
            165: "Alt",
            173: "-",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'",
          },
          i = {
            48: ")",
            49: "!",
            50: "@",
            51: "#",
            52: "$",
            53: "%",
            54: "^",
            55: "&",
            56: "*",
            57: "(",
            59: ":",
            61: "+",
            173: "_",
            186: ":",
            187: "+",
            188: "<",
            189: "_",
            190: ">",
            191: "?",
            192: "~",
            219: "{",
            220: "|",
            221: "}",
            222: '"',
          },
          r = "undefined" != typeof navigator && /Mac/.test(navigator.platform),
          s =
            "undefined" != typeof navigator &&
            /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(
              navigator.userAgent,
            ),
          l = 0;
        l < 10;
        l++
      )
        o[48 + l] = o[96 + l] = String(l);
      for (l = 1; l <= 24; l++) o[l + 111] = "F" + l;
      for (l = 65; l <= 90; l++)
        (o[l] = String.fromCharCode(l + 32)), (i[l] = String.fromCharCode(l));
      for (var d in o) i.hasOwnProperty(d) || (i[d] = o[d]);
      var a = n(52893);
      const c =
        "undefined" != typeof navigator &&
        /Mac|iP(hone|[oa]d)/.test(navigator.platform);
      function h(e) {
        let t,
          n,
          o,
          i,
          r = e.split(/-(?!$)/),
          s = r[r.length - 1];
        "Space" == s && (s = " ");
        for (let e = 0; e < r.length - 1; e++) {
          let s = r[e];
          if (/^(cmd|meta|m)$/i.test(s)) i = !0;
          else if (/^a(lt)?$/i.test(s)) t = !0;
          else if (/^(c|ctrl|control)$/i.test(s)) n = !0;
          else if (/^s(hift)?$/i.test(s)) o = !0;
          else {
            if (!/^mod$/i.test(s))
              throw new Error("Unrecognized modifier name: " + s);
            c ? (i = !0) : (n = !0);
          }
        }
        return (
          t && (s = "Alt-" + s),
          n && (s = "Ctrl-" + s),
          i && (s = "Meta-" + s),
          o && (s = "Shift-" + s),
          s
        );
      }
      function p(e, t, n = !0) {
        return (
          t.altKey && (e = "Alt-" + e),
          t.ctrlKey && (e = "Ctrl-" + e),
          t.metaKey && (e = "Meta-" + e),
          n && t.shiftKey && (e = "Shift-" + e),
          e
        );
      }
      function f(e) {
        return new a.k_({ props: { handleKeyDown: u(e) } });
      }
      function u(e) {
        let t = (function (e) {
          let t = Object.create(null);
          for (let n in e) t[h(n)] = e[n];
          return t;
        })(e);
        return function (e, n) {
          let l,
            d = (function (e) {
              var t =
                (!(
                  (r && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey) ||
                  (s && e.shiftKey && e.key && 1 == e.key.length) ||
                  "Unidentified" == e.key
                ) &&
                  e.key) ||
                (e.shiftKey ? i : o)[e.keyCode] ||
                e.key ||
                "Unidentified";
              return (
                "Esc" == t && (t = "Escape"),
                "Del" == t && (t = "Delete"),
                "Left" == t && (t = "ArrowLeft"),
                "Up" == t && (t = "ArrowUp"),
                "Right" == t && (t = "ArrowRight"),
                "Down" == t && (t = "ArrowDown"),
                t
              );
            })(n),
            a = t[p(d, n)];
          if (a && a(e.state, e.dispatch, e)) return !0;
          if (1 == d.length && " " != d) {
            if (n.shiftKey) {
              let o = t[p(d, n, !1)];
              if (o && o(e.state, e.dispatch, e)) return !0;
            }
            if (
              (n.shiftKey || n.altKey || n.metaKey || d.charCodeAt(0) > 127) &&
              (l = o[n.keyCode]) &&
              l != d
            ) {
              let o = t[p(l, n)];
              if (o && o(e.state, e.dispatch, e)) return !0;
            }
          }
          return !1;
        };
      }
    },
    4188: (e, t, n) => {
      n.d(t, {
        $B: () => m,
        Aw: () => h,
        Sd: () => p,
        T2: () => u,
        fF: () => c,
        o8: () => a,
        wn: () => f,
      });
      var o = n(63734),
        i = n(57053),
        r = n(52893);
      const s = ["ol", 0],
        l = ["ul", 0],
        d = ["li", 0],
        a = {
          attrs: { order: { default: 1 } },
          parseDOM: [
            {
              tag: "ol",
              getAttrs: (e) => ({
                order: e.hasAttribute("start") ? +e.getAttribute("start") : 1,
              }),
            },
          ],
          toDOM: (e) =>
            1 == e.attrs.order ? s : ["ol", { start: e.attrs.order }, 0],
        },
        c = { parseDOM: [{ tag: "ul" }], toDOM: () => l },
        h = { parseDOM: [{ tag: "li" }], toDOM: () => d, defining: !0 };
      function p(e, t = null) {
        return function (n, r) {
          let { $from: s, $to: l } = n.selection,
            d = s.blockRange(l),
            a = !1,
            c = d;
          if (!d) return !1;
          if (
            d.depth >= 2 &&
            s.node(d.depth - 1).type.compatibleContent(e) &&
            0 == d.startIndex
          ) {
            if (0 == s.index(d.depth - 1)) return !1;
            let e = n.doc.resolve(d.start - 2);
            (c = new i.u$(e, e, d.depth)),
              d.endIndex < d.parent.childCount &&
                (d = new i.u$(s, n.doc.resolve(l.end(d.depth)), d.depth)),
              (a = !0);
          }
          let h = (0, o.oM)(c, e, t, d);
          return (
            !!h &&
            (r &&
              r(
                (function (e, t, n, r, s) {
                  let l = i.FK.empty;
                  for (let e = n.length - 1; e >= 0; e--)
                    l = i.FK.from(n[e].type.create(n[e].attrs, l));
                  e.step(
                    new o.Wg(
                      t.start - (r ? 2 : 0),
                      t.end,
                      t.start,
                      t.end,
                      new i.Ji(l, 0, 0),
                      n.length,
                      !0,
                    ),
                  );
                  let d = 0;
                  for (let e = 0; e < n.length; e++)
                    n[e].type == s && (d = e + 1);
                  let a = n.length - d,
                    c = t.start + n.length - (r ? 2 : 0),
                    h = t.parent;
                  for (
                    let n = t.startIndex, i = t.endIndex, r = !0;
                    n < i;
                    n++, r = !1
                  )
                    !r &&
                      (0, o.zy)(e.doc, c, a) &&
                      (e.split(c, a), (c += 2 * a)),
                      (c += h.child(n).nodeSize);
                  return e;
                })(n.tr, d, h, a, e).scrollIntoView(),
              ),
            !0)
          );
        };
      }
      function f(e, t) {
        return function (n, s) {
          let { $from: l, $to: d, node: a } = n.selection;
          if ((a && a.isBlock) || l.depth < 2 || !l.sameParent(d)) return !1;
          let c = l.node(-1);
          if (c.type != e) return !1;
          if (
            0 == l.parent.content.size &&
            l.node(-1).childCount == l.indexAfter(-1)
          ) {
            if (
              3 == l.depth ||
              l.node(-3).type != e ||
              l.index(-2) != l.node(-2).childCount - 1
            )
              return !1;
            if (s) {
              let t = i.FK.empty,
                o = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
              for (let e = l.depth - o; e >= l.depth - 3; e--)
                t = i.FK.from(l.node(e).copy(t));
              let d =
                l.indexAfter(-1) < l.node(-2).childCount
                  ? 1
                  : l.indexAfter(-2) < l.node(-3).childCount
                    ? 2
                    : 3;
              t = t.append(i.FK.from(e.createAndFill()));
              let a = l.before(l.depth - (o - 1)),
                c = n.tr.replace(a, l.after(-d), new i.Ji(t, 4 - o, 0)),
                h = -1;
              c.doc.nodesBetween(a, c.doc.content.size, (e, t) => {
                if (h > -1) return !1;
                e.isTextblock && 0 == e.content.size && (h = t + 1);
              }),
                h > -1 && c.setSelection(r.LN.near(c.doc.resolve(h))),
                s(c.scrollIntoView());
            }
            return !0;
          }
          let h = d.pos == l.end() ? c.contentMatchAt(0).defaultType : null,
            p = n.tr.delete(l.pos, d.pos),
            f = h ? [t ? { type: e, attrs: t } : null, { type: h }] : void 0;
          return (
            !!(0, o.zy)(p.doc, l.pos, 2, f) &&
            (s && s(p.split(l.pos, 2, f).scrollIntoView()), !0)
          );
        };
      }
      function u(e) {
        return function (t, n) {
          let { $from: r, $to: s } = t.selection,
            l = r.blockRange(
              s,
              (t) => t.childCount > 0 && t.firstChild.type == e,
            );
          return (
            !!l &&
            (!n ||
              (r.node(l.depth - 1).type == e
                ? (function (e, t, n, r) {
                    let s = e.tr,
                      l = r.end,
                      d = r.$to.end(r.depth);
                    l < d &&
                      (s.step(
                        new o.Wg(
                          l - 1,
                          d,
                          l,
                          d,
                          new i.Ji(
                            i.FK.from(n.create(null, r.parent.copy())),
                            1,
                            0,
                          ),
                          1,
                          !0,
                        ),
                      ),
                      (r = new i.u$(
                        s.doc.resolve(r.$from.pos),
                        s.doc.resolve(d),
                        r.depth,
                      )));
                    const a = (0, o.jP)(r);
                    if (null == a) return !1;
                    s.lift(r, a);
                    let c = s.mapping.map(l, -1) - 1;
                    (0, o.n9)(s.doc, c) && s.join(c);
                    return t(s.scrollIntoView()), !0;
                  })(t, n, e, l)
                : (function (e, t, n) {
                    let r = e.tr,
                      s = n.parent;
                    for (
                      let e = n.end, t = n.endIndex - 1, o = n.startIndex;
                      t > o;
                      t--
                    )
                      (e -= s.child(t).nodeSize), r.delete(e - 1, e + 1);
                    let l = r.doc.resolve(n.start),
                      d = l.nodeAfter;
                    if (r.mapping.map(n.end) != n.start + l.nodeAfter.nodeSize)
                      return !1;
                    let a = 0 == n.startIndex,
                      c = n.endIndex == s.childCount,
                      h = l.node(-1),
                      p = l.index(-1);
                    if (
                      !h.canReplace(
                        p + (a ? 0 : 1),
                        p + 1,
                        d.content.append(c ? i.FK.empty : i.FK.from(s)),
                      )
                    )
                      return !1;
                    let f = l.pos,
                      u = f + d.nodeSize;
                    return (
                      r.step(
                        new o.Wg(
                          f - (a ? 1 : 0),
                          u + (c ? 1 : 0),
                          f + 1,
                          u - 1,
                          new i.Ji(
                            (a
                              ? i.FK.empty
                              : i.FK.from(s.copy(i.FK.empty))
                            ).append(
                              c ? i.FK.empty : i.FK.from(s.copy(i.FK.empty)),
                            ),
                            a ? 0 : 1,
                            c ? 0 : 1,
                          ),
                          a ? 0 : 1,
                        ),
                      ),
                      t(r.scrollIntoView()),
                      !0
                    );
                  })(t, n, l)))
          );
        };
      }
      function m(e) {
        return function (t, n) {
          let { $from: r, $to: s } = t.selection,
            l = r.blockRange(
              s,
              (t) => t.childCount > 0 && t.firstChild.type == e,
            );
          if (!l) return !1;
          let d = l.startIndex;
          if (0 == d) return !1;
          let a = l.parent,
            c = a.child(d - 1);
          if (c.type != e) return !1;
          if (n) {
            let r = c.lastChild && c.lastChild.type == a.type,
              s = i.FK.from(r ? e.create() : null),
              d = new i.Ji(
                i.FK.from(e.create(null, i.FK.from(a.type.create(null, s)))),
                r ? 3 : 1,
                0,
              ),
              h = l.start,
              p = l.end;
            n(
              t.tr
                .step(new o.Wg(h - (r ? 3 : 1), p, h, p, d, 1, !0))
                .scrollIntoView(),
            );
          }
          return !0;
        };
      }
    },
    29287: (e, t, n) => {
      n.d(t, { Lz: () => un });
      var o = n(52893),
        i = n(57053),
        r = n(63734);
      const s = function (e) {
          for (var t = 0; ; t++) if (!(e = e.previousSibling)) return t;
        },
        l = function (e) {
          let t = e.assignedSlot || e.parentNode;
          return t && 11 == t.nodeType ? t.host : t;
        };
      let d = null;
      const a = function (e, t, n) {
          let o = d || (d = document.createRange());
          return (
            o.setEnd(e, null == n ? e.nodeValue.length : n),
            o.setStart(e, t || 0),
            o
          );
        },
        c = function (e, t, n, o) {
          return n && (p(e, t, n, o, -1) || p(e, t, n, o, 1));
        },
        h = /^(img|br|input|textarea|hr)$/i;
      function p(e, t, n, o, i) {
        for (;;) {
          if (e == n && t == o) return !0;
          if (t == (i < 0 ? 0 : f(e))) {
            let n = e.parentNode;
            if (
              !n ||
              1 != n.nodeType ||
              u(e) ||
              h.test(e.nodeName) ||
              "false" == e.contentEditable
            )
              return !1;
            (t = s(e) + (i < 0 ? 0 : 1)), (e = n);
          } else {
            if (1 != e.nodeType) return !1;
            if (
              "false" ==
              (e = e.childNodes[t + (i < 0 ? -1 : 0)]).contentEditable
            )
              return !1;
            t = i < 0 ? f(e) : 0;
          }
        }
      }
      function f(e) {
        return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
      }
      function u(e) {
        let t;
        for (let n = e; n && !(t = n.pmViewDesc); n = n.parentNode);
        return (
          t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e)
        );
      }
      const m = function (e) {
        return (
          e.focusNode &&
          c(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)
        );
      };
      function g(e, t) {
        let n = document.createEvent("Event");
        return (
          n.initEvent("keydown", !0, !0),
          (n.keyCode = e),
          (n.key = n.code = t),
          n
        );
      }
      const y = "undefined" != typeof navigator ? navigator : null,
        v = "undefined" != typeof document ? document : null,
        b = (y && y.userAgent) || "",
        w = /Edge\/(\d+)/.exec(b),
        D = /MSIE \d/.exec(b),
        C = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(b),
        N = !!(D || C || w),
        S = D ? document.documentMode : C ? +C[1] : w ? +w[1] : 0,
        O = !N && /gecko\/(\d+)/i.test(b);
      O && (/Firefox\/(\d+)/.exec(b) || [0, 0])[1];
      const M = !N && /Chrome\/(\d+)/.exec(b),
        x = !!M,
        k = M ? +M[1] : 0,
        T = !N && !!y && /Apple Computer/.test(y.vendor),
        E = T && (/Mobile\/\w+/.test(b) || (!!y && y.maxTouchPoints > 2)),
        A = E || (!!y && /Mac/.test(y.platform)),
        P = !!y && /Win/.test(y.platform),
        V = /Android \d/.test(b),
        R = !!v && "webkitFontSmoothing" in v.documentElement.style,
        I = R
          ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
          : 0;
      function B(e) {
        let t = e.defaultView && e.defaultView.visualViewport;
        return t
          ? { left: 0, right: t.width, top: 0, bottom: t.height }
          : {
              left: 0,
              right: e.documentElement.clientWidth,
              top: 0,
              bottom: e.documentElement.clientHeight,
            };
      }
      function F(e, t) {
        return "number" == typeof e ? e : e[t];
      }
      function K(e) {
        let t = e.getBoundingClientRect(),
          n = t.width / e.offsetWidth || 1,
          o = t.height / e.offsetHeight || 1;
        return {
          left: t.left,
          right: t.left + e.clientWidth * n,
          top: t.top,
          bottom: t.top + e.clientHeight * o,
        };
      }
      function z(e, t, n) {
        let o = e.someProp("scrollThreshold") || 0,
          i = e.someProp("scrollMargin") || 5,
          r = e.dom.ownerDocument;
        for (let s = n || e.dom; s; s = l(s)) {
          if (1 != s.nodeType) continue;
          let e = s,
            n = e == r.body,
            l = n ? B(r) : K(e),
            d = 0,
            a = 0;
          if (
            (t.top < l.top + F(o, "top")
              ? (a = -(l.top - t.top + F(i, "top")))
              : t.bottom > l.bottom - F(o, "bottom") &&
                (a =
                  t.bottom - t.top > l.bottom - l.top
                    ? t.top + F(i, "top") - l.top
                    : t.bottom - l.bottom + F(i, "bottom")),
            t.left < l.left + F(o, "left")
              ? (d = -(l.left - t.left + F(i, "left")))
              : t.right > l.right - F(o, "right") &&
                (d = t.right - l.right + F(i, "right")),
            d || a)
          )
            if (n) r.defaultView.scrollBy(d, a);
            else {
              let n = e.scrollLeft,
                o = e.scrollTop;
              a && (e.scrollTop += a), d && (e.scrollLeft += d);
              let i = e.scrollLeft - n,
                r = e.scrollTop - o;
              t = {
                left: t.left - i,
                top: t.top - r,
                right: t.right - i,
                bottom: t.bottom - r,
              };
            }
          if (n || /^(fixed|sticky)$/.test(getComputedStyle(s).position)) break;
        }
      }
      function L(e) {
        let t = [],
          n = e.ownerDocument;
        for (
          let o = e;
          o &&
          (t.push({ dom: o, top: o.scrollTop, left: o.scrollLeft }), e != n);
          o = l(o)
        );
        return t;
      }
      function $(e, t) {
        for (let n = 0; n < e.length; n++) {
          let { dom: o, top: i, left: r } = e[n];
          o.scrollTop != i + t && (o.scrollTop = i + t),
            o.scrollLeft != r && (o.scrollLeft = r);
        }
      }
      let q = null;
      function W(e, t) {
        let n,
          o,
          i,
          r,
          s = 2e8,
          l = 0,
          d = t.top,
          c = t.top;
        for (let h = e.firstChild, p = 0; h; h = h.nextSibling, p++) {
          let e;
          if (1 == h.nodeType) e = h.getClientRects();
          else {
            if (3 != h.nodeType) continue;
            e = a(h).getClientRects();
          }
          for (let a = 0; a < e.length; a++) {
            let f = e[a];
            if (f.top <= d && f.bottom >= c) {
              (d = Math.max(f.bottom, d)), (c = Math.min(f.top, c));
              let e =
                f.left > t.left
                  ? f.left - t.left
                  : f.right < t.left
                    ? t.left - f.right
                    : 0;
              if (e < s) {
                (n = h),
                  (s = e),
                  (o =
                    e && 3 == n.nodeType
                      ? {
                          left: f.right < t.left ? f.right : f.left,
                          top: t.top,
                        }
                      : t),
                  1 == h.nodeType &&
                    e &&
                    (l = p + (t.left >= (f.left + f.right) / 2 ? 1 : 0));
                continue;
              }
            } else
              f.top > t.top &&
                !i &&
                f.left <= t.left &&
                f.right >= t.left &&
                ((i = h),
                (r = {
                  left: Math.max(f.left, Math.min(f.right, t.left)),
                  top: f.top,
                }));
            !n &&
              ((t.left >= f.right && t.top >= f.top) ||
                (t.left >= f.left && t.top >= f.bottom)) &&
              (l = p + 1);
          }
        }
        return (
          !n && i && ((n = i), (o = r), (s = 0)),
          n && 3 == n.nodeType
            ? (function (e, t) {
                let n = e.nodeValue.length,
                  o = document.createRange();
                for (let i = 0; i < n; i++) {
                  o.setEnd(e, i + 1), o.setStart(e, i);
                  let n = J(o, 1);
                  if (n.top != n.bottom && _(t, n))
                    return {
                      node: e,
                      offset: i + (t.left >= (n.left + n.right) / 2 ? 1 : 0),
                    };
                }
                return { node: e, offset: 0 };
              })(n, o)
            : !n || (s && 1 == n.nodeType)
              ? { node: e, offset: l }
              : W(n, o)
        );
      }
      function _(e, t) {
        return (
          e.left >= t.left - 1 &&
          e.left <= t.right + 1 &&
          e.top >= t.top - 1 &&
          e.top <= t.bottom + 1
        );
      }
      function U(e, t, n) {
        let o = e.childNodes.length;
        if (o && n.top < n.bottom)
          for (
            let i = Math.max(
                0,
                Math.min(
                  o - 1,
                  Math.floor((o * (t.top - n.top)) / (n.bottom - n.top)) - 2,
                ),
              ),
              r = i;
            ;

          ) {
            let n = e.childNodes[r];
            if (1 == n.nodeType) {
              let e = n.getClientRects();
              for (let o = 0; o < e.length; o++) {
                let i = e[o];
                if (_(t, i)) return U(n, t, i);
              }
            }
            if ((r = (r + 1) % o) == i) break;
          }
        return e;
      }
      function H(e, t) {
        let n,
          o = e.dom.ownerDocument,
          i = 0,
          r = (function (e, t, n) {
            if (e.caretPositionFromPoint)
              try {
                let o = e.caretPositionFromPoint(t, n);
                if (o) return { node: o.offsetNode, offset: o.offset };
              } catch (e) {}
            if (e.caretRangeFromPoint) {
              let o = e.caretRangeFromPoint(t, n);
              if (o) return { node: o.startContainer, offset: o.startOffset };
            }
          })(o, t.left, t.top);
        r && ({ node: n, offset: i } = r);
        let s,
          d = (e.root.elementFromPoint ? e.root : o).elementFromPoint(
            t.left,
            t.top,
          );
        if (!d || !e.dom.contains(1 != d.nodeType ? d.parentNode : d)) {
          let n = e.dom.getBoundingClientRect();
          if (!_(t, n)) return null;
          if (((d = U(e.dom, t, n)), !d)) return null;
        }
        if (T) for (let e = d; n && e; e = l(e)) e.draggable && (n = void 0);
        if (
          ((d = (function (e, t) {
            let n = e.parentNode;
            return n &&
              /^li$/i.test(n.nodeName) &&
              t.left < e.getBoundingClientRect().left
              ? n
              : e;
          })(d, t)),
          n)
        ) {
          if (
            O &&
            1 == n.nodeType &&
            ((i = Math.min(i, n.childNodes.length)), i < n.childNodes.length)
          ) {
            let e,
              o = n.childNodes[i];
            "IMG" == o.nodeName &&
              (e = o.getBoundingClientRect()).right <= t.left &&
              e.bottom > t.top &&
              i++;
          }
          let o;
          R &&
            i &&
            1 == n.nodeType &&
            1 == (o = n.childNodes[i - 1]).nodeType &&
            "false" == o.contentEditable &&
            o.getBoundingClientRect().top >= t.top &&
            i--,
            n == e.dom &&
            i == n.childNodes.length - 1 &&
            1 == n.lastChild.nodeType &&
            t.top > n.lastChild.getBoundingClientRect().bottom
              ? (s = e.state.doc.content.size)
              : (0 != i &&
                  1 == n.nodeType &&
                  "BR" == n.childNodes[i - 1].nodeName) ||
                (s = (function (e, t, n, o) {
                  let i = -1;
                  for (let n = t, r = !1; n != e.dom; ) {
                    let t = e.docView.nearestDesc(n, !0);
                    if (!t) return null;
                    if (
                      1 == t.dom.nodeType &&
                      ((t.node.isBlock && t.parent && !r) || !t.contentDOM)
                    ) {
                      let e = t.dom.getBoundingClientRect();
                      if (
                        (t.node.isBlock &&
                          t.parent &&
                          !r &&
                          ((r = !0),
                          e.left > o.left || e.top > o.top
                            ? (i = t.posBefore)
                            : (e.right < o.left || e.bottom < o.top) &&
                              (i = t.posAfter)),
                        !t.contentDOM && i < 0 && !t.node.isText)
                      )
                        return (
                          t.node.isBlock
                            ? o.top < (e.top + e.bottom) / 2
                            : o.left < (e.left + e.right) / 2
                        )
                          ? t.posBefore
                          : t.posAfter;
                    }
                    n = t.dom.parentNode;
                  }
                  return i > -1 ? i : e.docView.posFromDOM(t, n, -1);
                })(e, n, i, t));
        }
        null == s &&
          (s = (function (e, t, n) {
            let { node: o, offset: i } = W(t, n),
              r = -1;
            if (1 == o.nodeType && !o.firstChild) {
              let e = o.getBoundingClientRect();
              r = e.left != e.right && n.left > (e.left + e.right) / 2 ? 1 : -1;
            }
            return e.docView.posFromDOM(o, i, r);
          })(e, d, t));
        let a = e.docView.nearestDesc(d, !0);
        return { pos: s, inside: a ? a.posAtStart - a.border : -1 };
      }
      function G(e) {
        return e.top < e.bottom || e.left < e.right;
      }
      function J(e, t) {
        let n = e.getClientRects();
        if (n.length) {
          let e = n[t < 0 ? 0 : n.length - 1];
          if (G(e)) return e;
        }
        return Array.prototype.find.call(n, G) || e.getBoundingClientRect();
      }
      const j = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
      function X(e, t, n) {
        let {
            node: o,
            offset: i,
            atom: r,
          } = e.docView.domFromPos(t, n < 0 ? -1 : 1),
          s = R || O;
        if (3 == o.nodeType) {
          if (
            !s ||
            (!j.test(o.nodeValue) && (n < 0 ? i : i != o.nodeValue.length))
          ) {
            let e = i,
              t = i,
              r = n < 0 ? 1 : -1;
            return (
              n < 0 && !i
                ? (t++, (r = -1))
                : n >= 0 && i == o.nodeValue.length
                  ? (e--, (r = 1))
                  : n < 0
                    ? e--
                    : t++,
              Z(J(a(o, e, t), r), r < 0)
            );
          }
          {
            let e = J(a(o, i, i), n);
            if (
              O &&
              i &&
              /\s/.test(o.nodeValue[i - 1]) &&
              i < o.nodeValue.length
            ) {
              let t = J(a(o, i - 1, i - 1), -1);
              if (t.top == e.top) {
                let n = J(a(o, i, i + 1), -1);
                if (n.top != e.top) return Z(n, n.left < t.left);
              }
            }
            return e;
          }
        }
        if (!e.state.doc.resolve(t - (r || 0)).parent.inlineContent) {
          if (null == r && i && (n < 0 || i == f(o))) {
            let e = o.childNodes[i - 1];
            if (1 == e.nodeType) return Y(e.getBoundingClientRect(), !1);
          }
          if (null == r && i < f(o)) {
            let e = o.childNodes[i];
            if (1 == e.nodeType) return Y(e.getBoundingClientRect(), !0);
          }
          return Y(o.getBoundingClientRect(), n >= 0);
        }
        if (null == r && i && (n < 0 || i == f(o))) {
          let e = o.childNodes[i - 1],
            t =
              3 == e.nodeType
                ? a(e, f(e) - (s ? 0 : 1))
                : 1 != e.nodeType || ("BR" == e.nodeName && e.nextSibling)
                  ? null
                  : e;
          if (t) return Z(J(t, 1), !1);
        }
        if (null == r && i < f(o)) {
          let e = o.childNodes[i];
          for (; e.pmViewDesc && e.pmViewDesc.ignoreForCoords; )
            e = e.nextSibling;
          let t = e
            ? 3 == e.nodeType
              ? a(e, 0, s ? 0 : 1)
              : 1 == e.nodeType
                ? e
                : null
            : null;
          if (t) return Z(J(t, -1), !0);
        }
        return Z(J(3 == o.nodeType ? a(o) : o, -n), n >= 0);
      }
      function Z(e, t) {
        if (0 == e.width) return e;
        let n = t ? e.left : e.right;
        return { top: e.top, bottom: e.bottom, left: n, right: n };
      }
      function Y(e, t) {
        if (0 == e.height) return e;
        let n = t ? e.top : e.bottom;
        return { top: n, bottom: n, left: e.left, right: e.right };
      }
      function Q(e, t, n) {
        let o = e.state,
          i = e.root.activeElement;
        o != t && e.updateState(t), i != e.dom && e.focus();
        try {
          return n();
        } finally {
          o != t && e.updateState(o), i != e.dom && i && i.focus();
        }
      }
      const ee = /[\u0590-\u08ac]/;
      let te = null,
        ne = null,
        oe = !1;
      function ie(e, t, n) {
        return te == t && ne == n
          ? oe
          : ((te = t),
            (ne = n),
            (oe =
              "up" == n || "down" == n
                ? (function (e, t, n) {
                    let o = t.selection,
                      i = "up" == n ? o.$from : o.$to;
                    return Q(e, t, () => {
                      let { node: t } = e.docView.domFromPos(
                        i.pos,
                        "up" == n ? -1 : 1,
                      );
                      for (;;) {
                        let n = e.docView.nearestDesc(t, !0);
                        if (!n) break;
                        if (n.node.isBlock) {
                          t = n.contentDOM || n.dom;
                          break;
                        }
                        t = n.dom.parentNode;
                      }
                      let o = X(e, i.pos, 1);
                      for (let e = t.firstChild; e; e = e.nextSibling) {
                        let t;
                        if (1 == e.nodeType) t = e.getClientRects();
                        else {
                          if (3 != e.nodeType) continue;
                          t = a(e, 0, e.nodeValue.length).getClientRects();
                        }
                        for (let e = 0; e < t.length; e++) {
                          let i = t[e];
                          if (
                            i.bottom > i.top + 1 &&
                            ("up" == n
                              ? o.top - i.top > 2 * (i.bottom - o.top)
                              : i.bottom - o.bottom > 2 * (o.bottom - i.top))
                          )
                            return !1;
                        }
                      }
                      return !0;
                    });
                  })(e, t, n)
                : (function (e, t, n) {
                    let { $head: o } = t.selection;
                    if (!o.parent.isTextblock) return !1;
                    let i = o.parentOffset,
                      r = !i,
                      s = i == o.parent.content.size,
                      l = e.domSelection();
                    return ee.test(o.parent.textContent) && l.modify
                      ? Q(e, t, () => {
                          let {
                              focusNode: t,
                              focusOffset: i,
                              anchorNode: r,
                              anchorOffset: s,
                            } = e.domSelectionRange(),
                            d = l.caretBidiLevel;
                          l.modify("move", n, "character");
                          let a = o.depth
                              ? e.docView.domAfterPos(o.before())
                              : e.dom,
                            { focusNode: c, focusOffset: h } =
                              e.domSelectionRange(),
                            p =
                              (c &&
                                !a.contains(
                                  1 == c.nodeType ? c : c.parentNode,
                                )) ||
                              (t == c && i == h);
                          try {
                            l.collapse(r, s),
                              t &&
                                (t != r || i != s) &&
                                l.extend &&
                                l.extend(t, i);
                          } catch (e) {}
                          return null != d && (l.caretBidiLevel = d), p;
                        })
                      : "left" == n || "backward" == n
                        ? r
                        : s;
                  })(e, t, n)));
      }
      class re {
        constructor(e, t, n, o) {
          (this.parent = e),
            (this.children = t),
            (this.dom = n),
            (this.contentDOM = o),
            (this.dirty = 0),
            (n.pmViewDesc = this);
        }
        matchesWidget(e) {
          return !1;
        }
        matchesMark(e) {
          return !1;
        }
        matchesNode(e, t, n) {
          return !1;
        }
        matchesHack(e) {
          return !1;
        }
        parseRule() {
          return null;
        }
        stopEvent(e) {
          return !1;
        }
        get size() {
          let e = 0;
          for (let t = 0; t < this.children.length; t++)
            e += this.children[t].size;
          return e;
        }
        get border() {
          return 0;
        }
        destroy() {
          (this.parent = void 0),
            this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
          for (let e = 0; e < this.children.length; e++)
            this.children[e].destroy();
        }
        posBeforeChild(e) {
          for (let t = 0, n = this.posAtStart; ; t++) {
            let o = this.children[t];
            if (o == e) return n;
            n += o.size;
          }
        }
        get posBefore() {
          return this.parent.posBeforeChild(this);
        }
        get posAtStart() {
          return this.parent
            ? this.parent.posBeforeChild(this) + this.border
            : 0;
        }
        get posAfter() {
          return this.posBefore + this.size;
        }
        get posAtEnd() {
          return this.posAtStart + this.size - 2 * this.border;
        }
        localPosFromDOM(e, t, n) {
          if (
            this.contentDOM &&
            this.contentDOM.contains(1 == e.nodeType ? e : e.parentNode)
          ) {
            if (n < 0) {
              let n, o;
              if (e == this.contentDOM) n = e.childNodes[t - 1];
              else {
                for (; e.parentNode != this.contentDOM; ) e = e.parentNode;
                n = e.previousSibling;
              }
              for (; n && (!(o = n.pmViewDesc) || o.parent != this); )
                n = n.previousSibling;
              return n ? this.posBeforeChild(o) + o.size : this.posAtStart;
            }
            {
              let n, o;
              if (e == this.contentDOM) n = e.childNodes[t];
              else {
                for (; e.parentNode != this.contentDOM; ) e = e.parentNode;
                n = e.nextSibling;
              }
              for (; n && (!(o = n.pmViewDesc) || o.parent != this); )
                n = n.nextSibling;
              return n ? this.posBeforeChild(o) : this.posAtEnd;
            }
          }
          let o;
          if (e == this.dom && this.contentDOM) o = t > s(this.contentDOM);
          else if (
            this.contentDOM &&
            this.contentDOM != this.dom &&
            this.dom.contains(this.contentDOM)
          )
            o = 2 & e.compareDocumentPosition(this.contentDOM);
          else if (this.dom.firstChild) {
            if (0 == t)
              for (let t = e; ; t = t.parentNode) {
                if (t == this.dom) {
                  o = !1;
                  break;
                }
                if (t.previousSibling) break;
              }
            if (null == o && t == e.childNodes.length)
              for (let t = e; ; t = t.parentNode) {
                if (t == this.dom) {
                  o = !0;
                  break;
                }
                if (t.nextSibling) break;
              }
          }
          return (null == o ? n > 0 : o) ? this.posAtEnd : this.posAtStart;
        }
        nearestDesc(e, t = !1) {
          for (let n = !0, o = e; o; o = o.parentNode) {
            let i,
              r = this.getDesc(o);
            if (r && (!t || r.node)) {
              if (
                !n ||
                !(i = r.nodeDOM) ||
                (1 == i.nodeType
                  ? i.contains(1 == e.nodeType ? e : e.parentNode)
                  : i == e)
              )
                return r;
              n = !1;
            }
          }
        }
        getDesc(e) {
          let t = e.pmViewDesc;
          for (let e = t; e; e = e.parent) if (e == this) return t;
        }
        posFromDOM(e, t, n) {
          for (let o = e; o; o = o.parentNode) {
            let i = this.getDesc(o);
            if (i) return i.localPosFromDOM(e, t, n);
          }
          return -1;
        }
        descAt(e) {
          for (let t = 0, n = 0; t < this.children.length; t++) {
            let o = this.children[t],
              i = n + o.size;
            if (n == e && i != n) {
              for (; !o.border && o.children.length; ) o = o.children[0];
              return o;
            }
            if (e < i) return o.descAt(e - n - o.border);
            n = i;
          }
        }
        domFromPos(e, t) {
          if (!this.contentDOM)
            return { node: this.dom, offset: 0, atom: e + 1 };
          let n = 0,
            o = 0;
          for (let t = 0; n < this.children.length; n++) {
            let i = this.children[n],
              r = t + i.size;
            if (r > e || i instanceof pe) {
              o = e - t;
              break;
            }
            t = r;
          }
          if (o)
            return this.children[n].domFromPos(o - this.children[n].border, t);
          for (
            let e;
            n &&
            !(e = this.children[n - 1]).size &&
            e instanceof se &&
            e.side >= 0;
            n--
          );
          if (t <= 0) {
            let e,
              o = !0;
            for (
              ;
              (e = n ? this.children[n - 1] : null),
                e && e.dom.parentNode != this.contentDOM;
              n--, o = !1
            );
            return e && t && o && !e.border && !e.domAtom
              ? e.domFromPos(e.size, t)
              : { node: this.contentDOM, offset: e ? s(e.dom) + 1 : 0 };
          }
          {
            let e,
              o = !0;
            for (
              ;
              (e = n < this.children.length ? this.children[n] : null),
                e && e.dom.parentNode != this.contentDOM;
              n++, o = !1
            );
            return e && o && !e.border && !e.domAtom
              ? e.domFromPos(0, t)
              : {
                  node: this.contentDOM,
                  offset: e ? s(e.dom) : this.contentDOM.childNodes.length,
                };
          }
        }
        parseRange(e, t, n = 0) {
          if (0 == this.children.length)
            return {
              node: this.contentDOM,
              from: e,
              to: t,
              fromOffset: 0,
              toOffset: this.contentDOM.childNodes.length,
            };
          let o = -1,
            i = -1;
          for (let r = n, l = 0; ; l++) {
            let n = this.children[l],
              d = r + n.size;
            if (-1 == o && e <= d) {
              let i = r + n.border;
              if (
                e >= i &&
                t <= d - n.border &&
                n.node &&
                n.contentDOM &&
                this.contentDOM.contains(n.contentDOM)
              )
                return n.parseRange(e, t, i);
              e = r;
              for (let t = l; t > 0; t--) {
                let n = this.children[t - 1];
                if (
                  n.size &&
                  n.dom.parentNode == this.contentDOM &&
                  !n.emptyChildAt(1)
                ) {
                  o = s(n.dom) + 1;
                  break;
                }
                e -= n.size;
              }
              -1 == o && (o = 0);
            }
            if (o > -1 && (d > t || l == this.children.length - 1)) {
              t = d;
              for (let e = l + 1; e < this.children.length; e++) {
                let n = this.children[e];
                if (
                  n.size &&
                  n.dom.parentNode == this.contentDOM &&
                  !n.emptyChildAt(-1)
                ) {
                  i = s(n.dom);
                  break;
                }
                t += n.size;
              }
              -1 == i && (i = this.contentDOM.childNodes.length);
              break;
            }
            r = d;
          }
          return {
            node: this.contentDOM,
            from: e,
            to: t,
            fromOffset: o,
            toOffset: i,
          };
        }
        emptyChildAt(e) {
          if (this.border || !this.contentDOM || !this.children.length)
            return !1;
          let t = this.children[e < 0 ? 0 : this.children.length - 1];
          return 0 == t.size || t.emptyChildAt(e);
        }
        domAfterPos(e) {
          let { node: t, offset: n } = this.domFromPos(e, 0);
          if (1 != t.nodeType || n == t.childNodes.length)
            throw new RangeError("No node after pos " + e);
          return t.childNodes[n];
        }
        setSelection(e, t, n, o = !1) {
          let i = Math.min(e, t),
            r = Math.max(e, t);
          for (let s = 0, l = 0; s < this.children.length; s++) {
            let d = this.children[s],
              a = l + d.size;
            if (i > l && r < a)
              return d.setSelection(e - l - d.border, t - l - d.border, n, o);
            l = a;
          }
          let l = this.domFromPos(e, e ? -1 : 1),
            d = t == e ? l : this.domFromPos(t, t ? -1 : 1),
            a = n.getSelection(),
            h = !1;
          if ((O || T) && e == t) {
            let { node: e, offset: t } = l;
            if (3 == e.nodeType) {
              if (
                ((h = !(!t || "\n" != e.nodeValue[t - 1])),
                h && t == e.nodeValue.length)
              )
                for (let t, n = e; n; n = n.parentNode) {
                  if ((t = n.nextSibling)) {
                    "BR" == t.nodeName &&
                      (l = d = { node: t.parentNode, offset: s(t) + 1 });
                    break;
                  }
                  let e = n.pmViewDesc;
                  if (e && e.node && e.node.isBlock) break;
                }
            } else {
              let n = e.childNodes[t - 1];
              h = n && ("BR" == n.nodeName || "false" == n.contentEditable);
            }
          }
          if (
            O &&
            a.focusNode &&
            a.focusNode != d.node &&
            1 == a.focusNode.nodeType
          ) {
            let e = a.focusNode.childNodes[a.focusOffset];
            e && "false" == e.contentEditable && (o = !0);
          }
          if (
            !(o || (h && T)) &&
            c(l.node, l.offset, a.anchorNode, a.anchorOffset) &&
            c(d.node, d.offset, a.focusNode, a.focusOffset)
          )
            return;
          let p = !1;
          if ((a.extend || e == t) && !h) {
            a.collapse(l.node, l.offset);
            try {
              e != t && a.extend(d.node, d.offset), (p = !0);
            } catch (e) {}
          }
          if (!p) {
            if (e > t) {
              let e = l;
              (l = d), (d = e);
            }
            let n = document.createRange();
            n.setEnd(d.node, d.offset),
              n.setStart(l.node, l.offset),
              a.removeAllRanges(),
              a.addRange(n);
          }
        }
        ignoreMutation(e) {
          return !this.contentDOM && "selection" != e.type;
        }
        get contentLost() {
          return (
            this.contentDOM &&
            this.contentDOM != this.dom &&
            !this.dom.contains(this.contentDOM)
          );
        }
        markDirty(e, t) {
          for (let n = 0, o = 0; o < this.children.length; o++) {
            let i = this.children[o],
              r = n + i.size;
            if (n == r ? e <= r && t >= n : e < r && t > n) {
              let o = n + i.border,
                s = r - i.border;
              if (e >= o && t <= s)
                return (
                  (this.dirty = e == n || t == r ? 2 : 1),
                  void (e != o ||
                  t != s ||
                  (!i.contentLost && i.dom.parentNode == this.contentDOM)
                    ? i.markDirty(e - o, t - o)
                    : (i.dirty = 3))
                );
              i.dirty =
                i.dom != i.contentDOM ||
                i.dom.parentNode != this.contentDOM ||
                i.children.length
                  ? 3
                  : 2;
            }
            n = r;
          }
          this.dirty = 2;
        }
        markParentsDirty() {
          let e = 1;
          for (let t = this.parent; t; t = t.parent, e++) {
            let n = 1 == e ? 2 : 1;
            t.dirty < n && (t.dirty = n);
          }
        }
        get domAtom() {
          return !1;
        }
        get ignoreForCoords() {
          return !1;
        }
        isText(e) {
          return !1;
        }
      }
      class se extends re {
        constructor(e, t, n, o) {
          let i,
            r = t.type.toDOM;
          if (
            ("function" == typeof r &&
              (r = r(n, () =>
                i ? (i.parent ? i.parent.posBeforeChild(i) : void 0) : o,
              )),
            !t.type.spec.raw)
          ) {
            if (1 != r.nodeType) {
              let e = document.createElement("span");
              e.appendChild(r), (r = e);
            }
            (r.contentEditable = "false"),
              r.classList.add("ProseMirror-widget");
          }
          super(e, [], r, null),
            (this.widget = t),
            (this.widget = t),
            (i = this);
        }
        matchesWidget(e) {
          return 0 == this.dirty && e.type.eq(this.widget.type);
        }
        parseRule() {
          return { ignore: !0 };
        }
        stopEvent(e) {
          let t = this.widget.spec.stopEvent;
          return !!t && t(e);
        }
        ignoreMutation(e) {
          return "selection" != e.type || this.widget.spec.ignoreSelection;
        }
        destroy() {
          this.widget.type.destroy(this.dom), super.destroy();
        }
        get domAtom() {
          return !0;
        }
        get side() {
          return this.widget.type.side;
        }
      }
      class le extends re {
        constructor(e, t, n, o) {
          super(e, [], t, null), (this.textDOM = n), (this.text = o);
        }
        get size() {
          return this.text.length;
        }
        localPosFromDOM(e, t) {
          return e != this.textDOM
            ? this.posAtStart + (t ? this.size : 0)
            : this.posAtStart + t;
        }
        domFromPos(e) {
          return { node: this.textDOM, offset: e };
        }
        ignoreMutation(e) {
          return "characterData" === e.type && e.target.nodeValue == e.oldValue;
        }
      }
      class de extends re {
        constructor(e, t, n, o) {
          super(e, [], n, o), (this.mark = t);
        }
        static create(e, t, n, o) {
          let r = o.nodeViews[t.type.name],
            s = r && r(t, o, n);
          return (
            (s && s.dom) ||
              (s = i.ZF.renderSpec(document, t.type.spec.toDOM(t, n))),
            new de(e, t, s.dom, s.contentDOM || s.dom)
          );
        }
        parseRule() {
          return 3 & this.dirty || this.mark.type.spec.reparseInView
            ? null
            : {
                mark: this.mark.type.name,
                attrs: this.mark.attrs,
                contentElement: this.contentDOM,
              };
        }
        matchesMark(e) {
          return 3 != this.dirty && this.mark.eq(e);
        }
        markDirty(e, t) {
          if ((super.markDirty(e, t), 0 != this.dirty)) {
            let e = this.parent;
            for (; !e.node; ) e = e.parent;
            e.dirty < this.dirty && (e.dirty = this.dirty), (this.dirty = 0);
          }
        }
        slice(e, t, n) {
          let o = de.create(this.parent, this.mark, !0, n),
            i = this.children,
            r = this.size;
          t < r && (i = Oe(i, t, r, n)), e > 0 && (i = Oe(i, 0, e, n));
          for (let e = 0; e < i.length; e++) i[e].parent = o;
          return (o.children = i), o;
        }
      }
      class ae extends re {
        constructor(e, t, n, o, i, r, s, l, d) {
          super(e, [], i, r),
            (this.node = t),
            (this.outerDeco = n),
            (this.innerDeco = o),
            (this.nodeDOM = s);
        }
        static create(e, t, n, o, r, s) {
          let l,
            d = r.nodeViews[t.type.name],
            a =
              d &&
              d(
                t,
                r,
                () =>
                  l ? (l.parent ? l.parent.posBeforeChild(l) : void 0) : s,
                n,
                o,
              ),
            c = a && a.dom,
            h = a && a.contentDOM;
          if (t.isText)
            if (c) {
              if (3 != c.nodeType)
                throw new RangeError(
                  "Text must be rendered as a DOM text node",
                );
            } else c = document.createTextNode(t.text);
          else
            c ||
              ({ dom: c, contentDOM: h } = i.ZF.renderSpec(
                document,
                t.type.spec.toDOM(t),
              ));
          h ||
            t.isText ||
            "BR" == c.nodeName ||
            (c.hasAttribute("contenteditable") || (c.contentEditable = "false"),
            t.type.spec.draggable && (c.draggable = !0));
          let p = c;
          return (
            (c = we(c, n, t)),
            a
              ? (l = new fe(e, t, n, o, c, h || null, p, a, r, s + 1))
              : t.isText
                ? new he(e, t, n, o, c, p, r)
                : new ae(e, t, n, o, c, h || null, p, r, s + 1)
          );
        }
        parseRule() {
          if (this.node.type.spec.reparseInView) return null;
          let e = { node: this.node.type.name, attrs: this.node.attrs };
          if (
            ("pre" == this.node.type.whitespace &&
              (e.preserveWhitespace = "full"),
            this.contentDOM)
          )
            if (this.contentLost) {
              for (let t = this.children.length - 1; t >= 0; t--) {
                let n = this.children[t];
                if (this.dom.contains(n.dom.parentNode)) {
                  e.contentElement = n.dom.parentNode;
                  break;
                }
              }
              e.contentElement || (e.getContent = () => i.FK.empty);
            } else e.contentElement = this.contentDOM;
          else e.getContent = () => this.node.content;
          return e;
        }
        matchesNode(e, t, n) {
          return (
            0 == this.dirty &&
            e.eq(this.node) &&
            De(t, this.outerDeco) &&
            n.eq(this.innerDeco)
          );
        }
        get size() {
          return this.node.nodeSize;
        }
        get border() {
          return this.node.isLeaf ? 0 : 1;
        }
        updateChildren(e, t) {
          let n = this.node.inlineContent,
            o = t,
            r = e.composing ? this.localCompositionInfo(e, t) : null,
            s = r && r.pos > -1 ? r : null,
            l = r && r.pos < 0,
            d = new Ne(this, s && s.node, e);
          !(function (e, t, n, o) {
            let i = t.locals(e),
              r = 0;
            if (0 == i.length) {
              for (let n = 0; n < e.childCount; n++) {
                let s = e.child(n);
                o(s, i, t.forChild(r, s), n), (r += s.nodeSize);
              }
              return;
            }
            let s = 0,
              l = [],
              d = null;
            for (let a = 0; ; ) {
              let c, h, p, f;
              for (; s < i.length && i[s].to == r; ) {
                let e = i[s++];
                e.widget && (c ? (h || (h = [c])).push(e) : (c = e));
              }
              if (c)
                if (h) {
                  h.sort(Se);
                  for (let e = 0; e < h.length; e++) n(h[e], a, !!d);
                } else n(c, a, !!d);
              if (d) (f = -1), (p = d), (d = null);
              else {
                if (!(a < e.childCount)) break;
                (f = a), (p = e.child(a++));
              }
              for (let e = 0; e < l.length; e++)
                l[e].to <= r && l.splice(e--, 1);
              for (; s < i.length && i[s].from <= r && i[s].to > r; )
                l.push(i[s++]);
              let u = r + p.nodeSize;
              if (p.isText) {
                let e = u;
                s < i.length && i[s].from < e && (e = i[s].from);
                for (let t = 0; t < l.length; t++) l[t].to < e && (e = l[t].to);
                e < u &&
                  ((d = p.cut(e - r)),
                  (p = p.cut(0, e - r)),
                  (u = e),
                  (f = -1));
              } else for (; s < i.length && i[s].to < u; ) s++;
              o(
                p,
                p.isInline && !p.isLeaf
                  ? l.filter((e) => !e.inline)
                  : l.slice(),
                t.forChild(r, p),
                f,
              ),
                (r = u);
            }
          })(
            this.node,
            this.innerDeco,
            (t, r, s) => {
              t.spec.marks
                ? d.syncToMarks(t.spec.marks, n, e)
                : t.type.side >= 0 &&
                  !s &&
                  d.syncToMarks(
                    r == this.node.childCount
                      ? i.CU.none
                      : this.node.child(r).marks,
                    n,
                    e,
                  ),
                d.placeWidget(t, e, o);
            },
            (t, i, s, a) => {
              let c;
              d.syncToMarks(t.marks, n, e),
                d.findNodeMatch(t, i, s, a) ||
                  (l &&
                    e.state.selection.from > o &&
                    e.state.selection.to < o + t.nodeSize &&
                    (c = d.findIndexWithChild(r.node)) > -1 &&
                    d.updateNodeAt(t, i, s, c, e)) ||
                  d.updateNextNode(t, i, s, e, a, o) ||
                  d.addNode(t, i, s, e, o),
                (o += t.nodeSize);
            },
          ),
            d.syncToMarks([], n, e),
            this.node.isTextblock && d.addTextblockHacks(),
            d.destroyRest(),
            (d.changed || 2 == this.dirty) &&
              (s && this.protectLocalComposition(e, s),
              ue(this.contentDOM, this.children, e),
              E &&
                (function (e) {
                  if ("UL" == e.nodeName || "OL" == e.nodeName) {
                    let t = e.style.cssText;
                    (e.style.cssText = t + "; list-style: square !important"),
                      window.getComputedStyle(e).listStyle,
                      (e.style.cssText = t);
                  }
                })(this.dom));
        }
        localCompositionInfo(e, t) {
          let { from: n, to: i } = e.state.selection;
          if (
            !(e.state.selection instanceof o.U3) ||
            n < t ||
            i > t + this.node.content.size
          )
            return null;
          let r = e.input.compositionNode;
          if (!r || !this.dom.contains(r.parentNode)) return null;
          if (this.node.inlineContent) {
            let e = r.nodeValue,
              o = (function (e, t, n, o) {
                for (let i = 0, r = 0; i < e.childCount && r <= o; ) {
                  let s = e.child(i++),
                    l = r;
                  if (((r += s.nodeSize), !s.isText)) continue;
                  let d = s.text;
                  for (; i < e.childCount; ) {
                    let t = e.child(i++);
                    if (((r += t.nodeSize), !t.isText)) break;
                    d += t.text;
                  }
                  if (r >= n) {
                    if (r >= o && d.slice(o - t.length - l, o - l) == t)
                      return o - t.length;
                    let e = l < o ? d.lastIndexOf(t, o - l - 1) : -1;
                    if (e >= 0 && e + t.length + l >= n) return l + e;
                    if (
                      n == o &&
                      d.length >= o + t.length - l &&
                      d.slice(o - l, o - l + t.length) == t
                    )
                      return o;
                  }
                }
                return -1;
              })(this.node.content, e, n - t, i - t);
            return o < 0 ? null : { node: r, pos: o, text: e };
          }
          return { node: r, pos: -1, text: "" };
        }
        protectLocalComposition(e, { node: t, pos: n, text: o }) {
          if (this.getDesc(t)) return;
          let i = t;
          for (; i.parentNode != this.contentDOM; i = i.parentNode) {
            for (; i.previousSibling; )
              i.parentNode.removeChild(i.previousSibling);
            for (; i.nextSibling; ) i.parentNode.removeChild(i.nextSibling);
            i.pmViewDesc && (i.pmViewDesc = void 0);
          }
          let r = new le(this, i, t, o);
          e.input.compositionNodes.push(r),
            (this.children = Oe(this.children, n, n + o.length, e, r));
        }
        update(e, t, n, o) {
          return (
            !(3 == this.dirty || !e.sameMarkup(this.node)) &&
            (this.updateInner(e, t, n, o), !0)
          );
        }
        updateInner(e, t, n, o) {
          this.updateOuterDeco(t),
            (this.node = e),
            (this.innerDeco = n),
            this.contentDOM && this.updateChildren(o, this.posAtStart),
            (this.dirty = 0);
        }
        updateOuterDeco(e) {
          if (De(e, this.outerDeco)) return;
          let t = 1 != this.nodeDOM.nodeType,
            n = this.dom;
          (this.dom = ve(
            this.dom,
            this.nodeDOM,
            ye(this.outerDeco, this.node, t),
            ye(e, this.node, t),
          )),
            this.dom != n &&
              ((n.pmViewDesc = void 0), (this.dom.pmViewDesc = this)),
            (this.outerDeco = e);
        }
        selectNode() {
          1 == this.nodeDOM.nodeType &&
            this.nodeDOM.classList.add("ProseMirror-selectednode"),
            (!this.contentDOM && this.node.type.spec.draggable) ||
              (this.dom.draggable = !0);
        }
        deselectNode() {
          1 == this.nodeDOM.nodeType &&
            this.nodeDOM.classList.remove("ProseMirror-selectednode"),
            (!this.contentDOM && this.node.type.spec.draggable) ||
              this.dom.removeAttribute("draggable");
        }
        get domAtom() {
          return this.node.isAtom;
        }
      }
      function ce(e, t, n, o, i) {
        we(o, t, e);
        let r = new ae(void 0, e, t, n, o, o, o, i, 0);
        return r.contentDOM && r.updateChildren(i, 0), r;
      }
      class he extends ae {
        constructor(e, t, n, o, i, r, s) {
          super(e, t, n, o, i, null, r, s, 0);
        }
        parseRule() {
          let e = this.nodeDOM.parentNode;
          for (; e && e != this.dom && !e.pmIsDeco; ) e = e.parentNode;
          return { skip: e || !0 };
        }
        update(e, t, n, o) {
          return (
            !(
              3 == this.dirty ||
              (0 != this.dirty && !this.inParent()) ||
              !e.sameMarkup(this.node)
            ) &&
            (this.updateOuterDeco(t),
            (0 == this.dirty && e.text == this.node.text) ||
              e.text == this.nodeDOM.nodeValue ||
              ((this.nodeDOM.nodeValue = e.text),
              o.trackWrites == this.nodeDOM && (o.trackWrites = null)),
            (this.node = e),
            (this.dirty = 0),
            !0)
          );
        }
        inParent() {
          let e = this.parent.contentDOM;
          for (let t = this.nodeDOM; t; t = t.parentNode) if (t == e) return !0;
          return !1;
        }
        domFromPos(e) {
          return { node: this.nodeDOM, offset: e };
        }
        localPosFromDOM(e, t, n) {
          return e == this.nodeDOM
            ? this.posAtStart + Math.min(t, this.node.text.length)
            : super.localPosFromDOM(e, t, n);
        }
        ignoreMutation(e) {
          return "characterData" != e.type && "selection" != e.type;
        }
        slice(e, t, n) {
          let o = this.node.cut(e, t),
            i = document.createTextNode(o.text);
          return new he(
            this.parent,
            o,
            this.outerDeco,
            this.innerDeco,
            i,
            i,
            n,
          );
        }
        markDirty(e, t) {
          super.markDirty(e, t),
            this.dom == this.nodeDOM ||
              (0 != e && t != this.nodeDOM.nodeValue.length) ||
              (this.dirty = 3);
        }
        get domAtom() {
          return !1;
        }
        isText(e) {
          return this.node.text == e;
        }
      }
      class pe extends re {
        parseRule() {
          return { ignore: !0 };
        }
        matchesHack(e) {
          return 0 == this.dirty && this.dom.nodeName == e;
        }
        get domAtom() {
          return !0;
        }
        get ignoreForCoords() {
          return "IMG" == this.dom.nodeName;
        }
      }
      class fe extends ae {
        constructor(e, t, n, o, i, r, s, l, d, a) {
          super(e, t, n, o, i, r, s, d, a), (this.spec = l);
        }
        update(e, t, n, o) {
          if (3 == this.dirty) return !1;
          if (this.spec.update) {
            let i = this.spec.update(e, t, n);
            return i && this.updateInner(e, t, n, o), i;
          }
          return !(!this.contentDOM && !e.isLeaf) && super.update(e, t, n, o);
        }
        selectNode() {
          this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
        }
        deselectNode() {
          this.spec.deselectNode
            ? this.spec.deselectNode()
            : super.deselectNode();
        }
        setSelection(e, t, n, o) {
          this.spec.setSelection
            ? this.spec.setSelection(e, t, n)
            : super.setSelection(e, t, n, o);
        }
        destroy() {
          this.spec.destroy && this.spec.destroy(), super.destroy();
        }
        stopEvent(e) {
          return !!this.spec.stopEvent && this.spec.stopEvent(e);
        }
        ignoreMutation(e) {
          return this.spec.ignoreMutation
            ? this.spec.ignoreMutation(e)
            : super.ignoreMutation(e);
        }
      }
      function ue(e, t, n) {
        let o = e.firstChild,
          i = !1;
        for (let r = 0; r < t.length; r++) {
          let s = t[r],
            l = s.dom;
          if (l.parentNode == e) {
            for (; l != o; ) (o = Ce(o)), (i = !0);
            o = o.nextSibling;
          } else (i = !0), e.insertBefore(l, o);
          if (s instanceof de) {
            let t = o ? o.previousSibling : e.lastChild;
            ue(s.contentDOM, s.children, n),
              (o = t ? t.nextSibling : e.firstChild);
          }
        }
        for (; o; ) (o = Ce(o)), (i = !0);
        i && n.trackWrites == e && (n.trackWrites = null);
      }
      const me = function (e) {
        e && (this.nodeName = e);
      };
      me.prototype = Object.create(null);
      const ge = [new me()];
      function ye(e, t, n) {
        if (0 == e.length) return ge;
        let o = n ? ge[0] : new me(),
          i = [o];
        for (let r = 0; r < e.length; r++) {
          let s = e[r].type.attrs;
          if (s) {
            s.nodeName && i.push((o = new me(s.nodeName)));
            for (let e in s) {
              let r = s[e];
              null != r &&
                (n &&
                  1 == i.length &&
                  i.push((o = new me(t.isInline ? "span" : "div"))),
                "class" == e
                  ? (o.class = (o.class ? o.class + " " : "") + r)
                  : "style" == e
                    ? (o.style = (o.style ? o.style + ";" : "") + r)
                    : "nodeName" != e && (o[e] = r));
            }
          }
        }
        return i;
      }
      function ve(e, t, n, o) {
        if (n == ge && o == ge) return t;
        let i = t;
        for (let t = 0; t < o.length; t++) {
          let r = o[t],
            s = n[t];
          if (t) {
            let t;
            (s &&
              s.nodeName == r.nodeName &&
              i != e &&
              (t = i.parentNode) &&
              t.nodeName.toLowerCase() == r.nodeName) ||
              ((t = document.createElement(r.nodeName)),
              (t.pmIsDeco = !0),
              t.appendChild(i),
              (s = ge[0])),
              (i = t);
          }
          be(i, s || ge[0], r);
        }
        return i;
      }
      function be(e, t, n) {
        for (let o in t)
          "class" == o ||
            "style" == o ||
            "nodeName" == o ||
            o in n ||
            e.removeAttribute(o);
        for (let o in n)
          "class" != o &&
            "style" != o &&
            "nodeName" != o &&
            n[o] != t[o] &&
            e.setAttribute(o, n[o]);
        if (t.class != n.class) {
          let o = t.class ? t.class.split(" ").filter(Boolean) : [],
            i = n.class ? n.class.split(" ").filter(Boolean) : [];
          for (let t = 0; t < o.length; t++)
            -1 == i.indexOf(o[t]) && e.classList.remove(o[t]);
          for (let t = 0; t < i.length; t++)
            -1 == o.indexOf(i[t]) && e.classList.add(i[t]);
          0 == e.classList.length && e.removeAttribute("class");
        }
        if (t.style != n.style) {
          if (t.style) {
            let n,
              o =
                /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g;
            for (; (n = o.exec(t.style)); ) e.style.removeProperty(n[1]);
          }
          n.style && (e.style.cssText += n.style);
        }
      }
      function we(e, t, n) {
        return ve(e, e, ge, ye(t, n, 1 != e.nodeType));
      }
      function De(e, t) {
        if (e.length != t.length) return !1;
        for (let n = 0; n < e.length; n++)
          if (!e[n].type.eq(t[n].type)) return !1;
        return !0;
      }
      function Ce(e) {
        let t = e.nextSibling;
        return e.parentNode.removeChild(e), t;
      }
      class Ne {
        constructor(e, t, n) {
          (this.lock = t),
            (this.view = n),
            (this.index = 0),
            (this.stack = []),
            (this.changed = !1),
            (this.top = e),
            (this.preMatch = (function (e, t) {
              let n = t,
                o = n.children.length,
                i = e.childCount,
                r = new Map(),
                s = [];
              e: for (; i > 0; ) {
                let l;
                for (;;)
                  if (o) {
                    let e = n.children[o - 1];
                    if (!(e instanceof de)) {
                      (l = e), o--;
                      break;
                    }
                    (n = e), (o = e.children.length);
                  } else {
                    if (n == t) break e;
                    (o = n.parent.children.indexOf(n)), (n = n.parent);
                  }
                let d = l.node;
                if (d) {
                  if (d != e.child(i - 1)) break;
                  --i, r.set(l, i), s.push(l);
                }
              }
              return { index: i, matched: r, matches: s.reverse() };
            })(e.node.content, e));
        }
        destroyBetween(e, t) {
          if (e != t) {
            for (let n = e; n < t; n++) this.top.children[n].destroy();
            this.top.children.splice(e, t - e), (this.changed = !0);
          }
        }
        destroyRest() {
          this.destroyBetween(this.index, this.top.children.length);
        }
        syncToMarks(e, t, n) {
          let o = 0,
            i = this.stack.length >> 1,
            r = Math.min(i, e.length);
          for (
            ;
            o < r &&
            (o == i - 1 ? this.top : this.stack[(o + 1) << 1]).matchesMark(
              e[o],
            ) &&
            !1 !== e[o].type.spec.spanning;

          )
            o++;
          for (; o < i; )
            this.destroyRest(),
              (this.top.dirty = 0),
              (this.index = this.stack.pop()),
              (this.top = this.stack.pop()),
              i--;
          for (; i < e.length; ) {
            this.stack.push(this.top, this.index + 1);
            let o = -1;
            for (
              let t = this.index;
              t < Math.min(this.index + 3, this.top.children.length);
              t++
            ) {
              let n = this.top.children[t];
              if (n.matchesMark(e[i]) && !this.isLocked(n.dom)) {
                o = t;
                break;
              }
            }
            if (o > -1)
              o > this.index &&
                ((this.changed = !0), this.destroyBetween(this.index, o)),
                (this.top = this.top.children[this.index]);
            else {
              let o = de.create(this.top, e[i], t, n);
              this.top.children.splice(this.index, 0, o),
                (this.top = o),
                (this.changed = !0);
            }
            (this.index = 0), i++;
          }
        }
        findNodeMatch(e, t, n, o) {
          let i,
            r = -1;
          if (
            o >= this.preMatch.index &&
            (i = this.preMatch.matches[o - this.preMatch.index]).parent ==
              this.top &&
            i.matchesNode(e, t, n)
          )
            r = this.top.children.indexOf(i, this.index);
          else
            for (
              let o = this.index, i = Math.min(this.top.children.length, o + 5);
              o < i;
              o++
            ) {
              let i = this.top.children[o];
              if (i.matchesNode(e, t, n) && !this.preMatch.matched.has(i)) {
                r = o;
                break;
              }
            }
          return (
            !(r < 0) && (this.destroyBetween(this.index, r), this.index++, !0)
          );
        }
        updateNodeAt(e, t, n, o, i) {
          let r = this.top.children[o];
          return (
            3 == r.dirty && r.dom == r.contentDOM && (r.dirty = 2),
            !!r.update(e, t, n, i) &&
              (this.destroyBetween(this.index, o), this.index++, !0)
          );
        }
        findIndexWithChild(e) {
          for (;;) {
            let t = e.parentNode;
            if (!t) return -1;
            if (t == this.top.contentDOM) {
              let t = e.pmViewDesc;
              if (t)
                for (let e = this.index; e < this.top.children.length; e++)
                  if (this.top.children[e] == t) return e;
              return -1;
            }
            e = t;
          }
        }
        updateNextNode(e, t, n, o, i, r) {
          for (let s = this.index; s < this.top.children.length; s++) {
            let l = this.top.children[s];
            if (l instanceof ae) {
              let d = this.preMatch.matched.get(l);
              if (null != d && d != i) return !1;
              let a,
                c = l.dom,
                h =
                  this.isLocked(c) &&
                  !(
                    e.isText &&
                    l.node &&
                    l.node.isText &&
                    l.nodeDOM.nodeValue == e.text &&
                    3 != l.dirty &&
                    De(t, l.outerDeco)
                  );
              if (!h && l.update(e, t, n, o))
                return (
                  this.destroyBetween(this.index, s),
                  l.dom != c && (this.changed = !0),
                  this.index++,
                  !0
                );
              if (!h && (a = this.recreateWrapper(l, e, t, n, o, r)))
                return (
                  (this.top.children[this.index] = a),
                  a.contentDOM &&
                    ((a.dirty = 2), a.updateChildren(o, r + 1), (a.dirty = 0)),
                  (this.changed = !0),
                  this.index++,
                  !0
                );
              break;
            }
          }
          return !1;
        }
        recreateWrapper(e, t, n, o, i, r) {
          if (
            e.dirty ||
            t.isAtom ||
            !e.children.length ||
            !e.node.content.eq(t.content)
          )
            return null;
          let s = ae.create(this.top, t, n, o, i, r);
          if (s.contentDOM) {
            (s.children = e.children), (e.children = []);
            for (let e of s.children) e.parent = s;
          }
          return e.destroy(), s;
        }
        addNode(e, t, n, o, i) {
          let r = ae.create(this.top, e, t, n, o, i);
          r.contentDOM && r.updateChildren(o, i + 1),
            this.top.children.splice(this.index++, 0, r),
            (this.changed = !0);
        }
        placeWidget(e, t, n) {
          let o =
            this.index < this.top.children.length
              ? this.top.children[this.index]
              : null;
          if (
            !o ||
            !o.matchesWidget(e) ||
            (e != o.widget && o.widget.type.toDOM.parentNode)
          ) {
            let o = new se(this.top, e, t, n);
            this.top.children.splice(this.index++, 0, o), (this.changed = !0);
          } else this.index++;
        }
        addTextblockHacks() {
          let e = this.top.children[this.index - 1],
            t = this.top;
          for (; e instanceof de; )
            (t = e), (e = t.children[t.children.length - 1]);
          (!e ||
            !(e instanceof he) ||
            /\n$/.test(e.node.text) ||
            (this.view.requiresGeckoHackNode && /\s$/.test(e.node.text))) &&
            ((T || x) &&
              e &&
              "false" == e.dom.contentEditable &&
              this.addHackNode("IMG", t),
            this.addHackNode("BR", this.top));
        }
        addHackNode(e, t) {
          if (
            t == this.top &&
            this.index < t.children.length &&
            t.children[this.index].matchesHack(e)
          )
            this.index++;
          else {
            let n = document.createElement(e);
            "IMG" == e &&
              ((n.className = "ProseMirror-separator"), (n.alt = "")),
              "BR" == e && (n.className = "ProseMirror-trailingBreak");
            let o = new pe(this.top, [], n, null);
            t != this.top
              ? t.children.push(o)
              : t.children.splice(this.index++, 0, o),
              (this.changed = !0);
          }
        }
        isLocked(e) {
          return (
            this.lock &&
            (e == this.lock ||
              (1 == e.nodeType && e.contains(this.lock.parentNode)))
          );
        }
      }
      function Se(e, t) {
        return e.type.side - t.type.side;
      }
      function Oe(e, t, n, o, i) {
        let r = [];
        for (let s = 0, l = 0; s < e.length; s++) {
          let d = e[s],
            a = l,
            c = (l += d.size);
          a >= n || c <= t
            ? r.push(d)
            : (a < t && r.push(d.slice(0, t - a, o)),
              i && (r.push(i), (i = void 0)),
              c > n && r.push(d.slice(n - a, d.size, o)));
        }
        return r;
      }
      function Me(e, t = null) {
        let n = e.domSelectionRange(),
          i = e.state.doc;
        if (!n.focusNode) return null;
        let r = e.docView.nearestDesc(n.focusNode),
          l = r && 0 == r.size,
          d = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
        if (d < 0) return null;
        let a,
          c,
          h = i.resolve(d);
        if (m(n)) {
          for (a = h; r && !r.node; ) r = r.parent;
          let e = r.node;
          if (
            r &&
            e.isAtom &&
            o.nh.isSelectable(e) &&
            r.parent &&
            (!e.isInline ||
              !(function (e, t, n) {
                for (let o = 0 == t, i = t == f(e); o || i; ) {
                  if (e == n) return !0;
                  let t = s(e);
                  if (!(e = e.parentNode)) return !1;
                  (o = o && 0 == t), (i = i && t == f(e));
                }
              })(n.focusNode, n.focusOffset, r.dom))
          ) {
            let e = r.posBefore;
            c = new o.nh(d == e ? h : i.resolve(e));
          }
        } else {
          let t = e.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
          if (t < 0) return null;
          a = i.resolve(t);
        }
        if (!c) {
          c = Ie(
            e,
            a,
            h,
            "pointer" == t || (e.state.selection.head < h.pos && !l) ? 1 : -1,
          );
        }
        return c;
      }
      function xe(e) {
        return e.editable
          ? e.hasFocus()
          : Fe(e) &&
              document.activeElement &&
              document.activeElement.contains(e.dom);
      }
      function ke(e, t = !1) {
        let n = e.state.selection;
        if ((Ve(e, n), xe(e))) {
          if (!t && e.input.mouseDown && e.input.mouseDown.allowDefault && x) {
            let t = e.domSelectionRange(),
              n = e.domObserver.currentSelection;
            if (
              t.anchorNode &&
              n.anchorNode &&
              c(t.anchorNode, t.anchorOffset, n.anchorNode, n.anchorOffset)
            )
              return (
                (e.input.mouseDown.delayedSelectionSync = !0),
                void e.domObserver.setCurSelection()
              );
          }
          if ((e.domObserver.disconnectSelection(), e.cursorWrapper))
            !(function (e) {
              let t = e.domSelection(),
                n = document.createRange(),
                o = e.cursorWrapper.dom,
                i = "IMG" == o.nodeName;
              i ? n.setEnd(o.parentNode, s(o) + 1) : n.setEnd(o, 0);
              n.collapse(!1),
                t.removeAllRanges(),
                t.addRange(n),
                !i &&
                  !e.state.selection.visible &&
                  N &&
                  S <= 11 &&
                  ((o.disabled = !0), (o.disabled = !1));
            })(e);
          else {
            let i,
              r,
              { anchor: s, head: l } = n;
            !Te ||
              n instanceof o.U3 ||
              (n.$from.parent.inlineContent || (i = Ee(e, n.from)),
              n.empty || n.$from.parent.inlineContent || (r = Ee(e, n.to))),
              e.docView.setSelection(s, l, e.root, t),
              Te && (i && Pe(i), r && Pe(r)),
              n.visible
                ? e.dom.classList.remove("ProseMirror-hideselection")
                : (e.dom.classList.add("ProseMirror-hideselection"),
                  "onselectionchange" in document &&
                    (function (e) {
                      let t = e.dom.ownerDocument;
                      t.removeEventListener(
                        "selectionchange",
                        e.input.hideSelectionGuard,
                      );
                      let n = e.domSelectionRange(),
                        o = n.anchorNode,
                        i = n.anchorOffset;
                      t.addEventListener(
                        "selectionchange",
                        (e.input.hideSelectionGuard = () => {
                          (n.anchorNode == o && n.anchorOffset == i) ||
                            (t.removeEventListener(
                              "selectionchange",
                              e.input.hideSelectionGuard,
                            ),
                            setTimeout(() => {
                              (xe(e) && !e.state.selection.visible) ||
                                e.dom.classList.remove(
                                  "ProseMirror-hideselection",
                                );
                            }, 20));
                        }),
                      );
                    })(e));
          }
          e.domObserver.setCurSelection(), e.domObserver.connectSelection();
        }
      }
      const Te = T || (x && k < 63);
      function Ee(e, t) {
        let { node: n, offset: o } = e.docView.domFromPos(t, 0),
          i = o < n.childNodes.length ? n.childNodes[o] : null,
          r = o ? n.childNodes[o - 1] : null;
        if (T && i && "false" == i.contentEditable) return Ae(i);
        if (
          !(
            (i && "false" != i.contentEditable) ||
            (r && "false" != r.contentEditable)
          )
        ) {
          if (i) return Ae(i);
          if (r) return Ae(r);
        }
      }
      function Ae(e) {
        return (
          (e.contentEditable = "true"),
          T && e.draggable && ((e.draggable = !1), (e.wasDraggable = !0)),
          e
        );
      }
      function Pe(e) {
        (e.contentEditable = "false"),
          e.wasDraggable && ((e.draggable = !0), (e.wasDraggable = null));
      }
      function Ve(e, t) {
        if (t instanceof o.nh) {
          let n = e.docView.descAt(t.from);
          n != e.lastSelectedViewDesc &&
            (Re(e), n && n.selectNode(), (e.lastSelectedViewDesc = n));
        } else Re(e);
      }
      function Re(e) {
        e.lastSelectedViewDesc &&
          (e.lastSelectedViewDesc.parent &&
            e.lastSelectedViewDesc.deselectNode(),
          (e.lastSelectedViewDesc = void 0));
      }
      function Ie(e, t, n, i) {
        return (
          e.someProp("createSelectionBetween", (o) => o(e, t, n)) ||
          o.U3.between(t, n, i)
        );
      }
      function Be(e) {
        return !(e.editable && !e.hasFocus()) && Fe(e);
      }
      function Fe(e) {
        let t = e.domSelectionRange();
        if (!t.anchorNode) return !1;
        try {
          return (
            e.dom.contains(
              3 == t.anchorNode.nodeType
                ? t.anchorNode.parentNode
                : t.anchorNode,
            ) &&
            (e.editable ||
              e.dom.contains(
                3 == t.focusNode.nodeType
                  ? t.focusNode.parentNode
                  : t.focusNode,
              ))
          );
        } catch (e) {
          return !1;
        }
      }
      function Ke(e, t) {
        let { $anchor: n, $head: i } = e.selection,
          r = t > 0 ? n.max(i) : n.min(i),
          s = r.parent.inlineContent
            ? r.depth
              ? e.doc.resolve(t > 0 ? r.after() : r.before())
              : null
            : r;
        return s && o.LN.findFrom(s, t);
      }
      function ze(e, t) {
        return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()), !0;
      }
      function Le(e, t, n) {
        let i = e.state.selection;
        if (!(i instanceof o.U3)) {
          if (i instanceof o.nh && i.node.isInline)
            return ze(e, new o.U3(t > 0 ? i.$to : i.$from));
          {
            let n = Ke(e.state, t);
            return !!n && ze(e, n);
          }
        }
        if (n.indexOf("s") > -1) {
          let { $head: n } = i,
            r = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter;
          if (!r || r.isText || !r.isLeaf) return !1;
          let s = e.state.doc.resolve(n.pos + r.nodeSize * (t < 0 ? -1 : 1));
          return ze(e, new o.U3(i.$anchor, s));
        }
        if (!i.empty) return !1;
        if (e.endOfTextblock(t > 0 ? "forward" : "backward")) {
          let n = Ke(e.state, t);
          return !!(n && n instanceof o.nh) && ze(e, n);
        }
        if (!(A && n.indexOf("m") > -1)) {
          let n,
            r = i.$head,
            s = r.textOffset ? null : t < 0 ? r.nodeBefore : r.nodeAfter;
          if (!s || s.isText) return !1;
          let l = t < 0 ? r.pos - s.nodeSize : r.pos;
          return (
            !!(s.isAtom || ((n = e.docView.descAt(l)) && !n.contentDOM)) &&
            (o.nh.isSelectable(s)
              ? ze(
                  e,
                  new o.nh(t < 0 ? e.state.doc.resolve(r.pos - s.nodeSize) : r),
                )
              : !!R &&
                ze(
                  e,
                  new o.U3(e.state.doc.resolve(t < 0 ? l : l + s.nodeSize)),
                ))
          );
        }
      }
      function $e(e) {
        return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
      }
      function qe(e, t) {
        let n = e.pmViewDesc;
        return (
          n && 0 == n.size && (t < 0 || e.nextSibling || "BR" != e.nodeName)
        );
      }
      function We(e, t) {
        return t < 0
          ? (function (e) {
              let t = e.domSelectionRange(),
                n = t.focusNode,
                o = t.focusOffset;
              if (!n) return;
              let i,
                r,
                l = !1;
              O &&
                1 == n.nodeType &&
                o < $e(n) &&
                qe(n.childNodes[o], -1) &&
                (l = !0);
              for (;;)
                if (o > 0) {
                  if (1 != n.nodeType) break;
                  {
                    let e = n.childNodes[o - 1];
                    if (qe(e, -1)) (i = n), (r = --o);
                    else {
                      if (3 != e.nodeType) break;
                      (n = e), (o = n.nodeValue.length);
                    }
                  }
                } else {
                  if (_e(n)) break;
                  {
                    let t = n.previousSibling;
                    for (; t && qe(t, -1); )
                      (i = n.parentNode), (r = s(t)), (t = t.previousSibling);
                    if (t) (n = t), (o = $e(n));
                    else {
                      if (((n = n.parentNode), n == e.dom)) break;
                      o = 0;
                    }
                  }
                }
              l ? Ue(e, n, o) : i && Ue(e, i, r);
            })(e)
          : (function (e) {
              let t = e.domSelectionRange(),
                n = t.focusNode,
                o = t.focusOffset;
              if (!n) return;
              let i,
                r,
                l = $e(n);
              for (;;)
                if (o < l) {
                  if (1 != n.nodeType) break;
                  if (!qe(n.childNodes[o], 1)) break;
                  (i = n), (r = ++o);
                } else {
                  if (_e(n)) break;
                  {
                    let t = n.nextSibling;
                    for (; t && qe(t, 1); )
                      (i = t.parentNode), (r = s(t) + 1), (t = t.nextSibling);
                    if (t) (n = t), (o = 0), (l = $e(n));
                    else {
                      if (((n = n.parentNode), n == e.dom)) break;
                      o = l = 0;
                    }
                  }
                }
              i && Ue(e, i, r);
            })(e);
      }
      function _e(e) {
        let t = e.pmViewDesc;
        return t && t.node && t.node.isBlock;
      }
      function Ue(e, t, n) {
        if (3 != t.nodeType) {
          let e, o;
          (o = (function (e, t) {
            for (; e && t == e.childNodes.length && !u(e); )
              (t = s(e) + 1), (e = e.parentNode);
            for (; e && t < e.childNodes.length; ) {
              let n = e.childNodes[t];
              if (3 == n.nodeType) return n;
              if (1 == n.nodeType && "false" == n.contentEditable) break;
              (e = n), (t = 0);
            }
          })(t, n))
            ? ((t = o), (n = 0))
            : (e = (function (e, t) {
                for (; e && !t && !u(e); ) (t = s(e)), (e = e.parentNode);
                for (; e && t; ) {
                  let n = e.childNodes[t - 1];
                  if (3 == n.nodeType) return n;
                  if (1 == n.nodeType && "false" == n.contentEditable) break;
                  t = (e = n).childNodes.length;
                }
              })(t, n)) && ((t = e), (n = e.nodeValue.length));
        }
        let o = e.domSelection();
        if (m(o)) {
          let e = document.createRange();
          e.setEnd(t, n), e.setStart(t, n), o.removeAllRanges(), o.addRange(e);
        } else o.extend && o.extend(t, n);
        e.domObserver.setCurSelection();
        let { state: i } = e;
        setTimeout(() => {
          e.state == i && ke(e);
        }, 50);
      }
      function He(e, t) {
        let n = e.state.doc.resolve(t);
        if (!x && !P && n.parent.inlineContent) {
          let o = e.coordsAtPos(t);
          if (t > n.start()) {
            let n = e.coordsAtPos(t - 1),
              i = (n.top + n.bottom) / 2;
            if (i > o.top && i < o.bottom && Math.abs(n.left - o.left) > 1)
              return n.left < o.left ? "ltr" : "rtl";
          }
          if (t < n.end()) {
            let n = e.coordsAtPos(t + 1),
              i = (n.top + n.bottom) / 2;
            if (i > o.top && i < o.bottom && Math.abs(n.left - o.left) > 1)
              return n.left > o.left ? "ltr" : "rtl";
          }
        }
        return "rtl" == getComputedStyle(e.dom).direction ? "rtl" : "ltr";
      }
      function Ge(e, t, n) {
        let i = e.state.selection;
        if ((i instanceof o.U3 && !i.empty) || n.indexOf("s") > -1) return !1;
        if (A && n.indexOf("m") > -1) return !1;
        let { $from: r, $to: s } = i;
        if (
          !r.parent.inlineContent ||
          e.endOfTextblock(t < 0 ? "up" : "down")
        ) {
          let n = Ke(e.state, t);
          if (n && n instanceof o.nh) return ze(e, n);
        }
        if (!r.parent.inlineContent) {
          let n = t < 0 ? r : s,
            l = i instanceof o.i5 ? o.LN.near(n, t) : o.LN.findFrom(n, t);
          return !!l && ze(e, l);
        }
        return !1;
      }
      function Je(e, t) {
        if (!(e.state.selection instanceof o.U3)) return !0;
        let { $head: n, $anchor: i, empty: r } = e.state.selection;
        if (!n.sameParent(i)) return !0;
        if (!r) return !1;
        if (e.endOfTextblock(t > 0 ? "forward" : "backward")) return !0;
        let s = !n.textOffset && (t < 0 ? n.nodeBefore : n.nodeAfter);
        if (s && !s.isText) {
          let o = e.state.tr;
          return (
            t < 0
              ? o.delete(n.pos - s.nodeSize, n.pos)
              : o.delete(n.pos, n.pos + s.nodeSize),
            e.dispatch(o),
            !0
          );
        }
        return !1;
      }
      function je(e, t, n) {
        e.domObserver.stop(), (t.contentEditable = n), e.domObserver.start();
      }
      function Xe(e, t) {
        let n = t.keyCode,
          o = (function (e) {
            let t = "";
            return (
              e.ctrlKey && (t += "c"),
              e.metaKey && (t += "m"),
              e.altKey && (t += "a"),
              e.shiftKey && (t += "s"),
              t
            );
          })(t);
        if (8 == n || (A && 72 == n && "c" == o)) return Je(e, -1) || We(e, -1);
        if ((46 == n && !t.shiftKey) || (A && 68 == n && "c" == o))
          return Je(e, 1) || We(e, 1);
        if (13 == n || 27 == n) return !0;
        if (37 == n || (A && 66 == n && "c" == o)) {
          let t =
            37 == n ? ("ltr" == He(e, e.state.selection.from) ? -1 : 1) : -1;
          return Le(e, t, o) || We(e, t);
        }
        if (39 == n || (A && 70 == n && "c" == o)) {
          let t =
            39 == n ? ("ltr" == He(e, e.state.selection.from) ? 1 : -1) : 1;
          return Le(e, t, o) || We(e, t);
        }
        return 38 == n || (A && 80 == n && "c" == o)
          ? Ge(e, -1, o) || We(e, -1)
          : 40 == n || (A && 78 == n && "c" == o)
            ? (function (e) {
                if (!T || e.state.selection.$head.parentOffset > 0) return !1;
                let { focusNode: t, focusOffset: n } = e.domSelectionRange();
                if (
                  t &&
                  1 == t.nodeType &&
                  0 == n &&
                  t.firstChild &&
                  "false" == t.firstChild.contentEditable
                ) {
                  let n = t.firstChild;
                  je(e, n, "true"), setTimeout(() => je(e, n, "false"), 20);
                }
                return !1;
              })(e) ||
              Ge(e, 1, o) ||
              We(e, 1)
            : o == (A ? "m" : "c") &&
              (66 == n || 73 == n || 89 == n || 90 == n);
      }
      function Ze(e, t) {
        e.someProp("transformCopied", (n) => {
          t = n(t, e);
        });
        let n = [],
          { content: o, openStart: r, openEnd: s } = t;
        for (
          ;
          r > 1 && s > 1 && 1 == o.childCount && 1 == o.firstChild.childCount;

        ) {
          r--, s--;
          let e = o.firstChild;
          n.push(e.type.name, e.attrs != e.type.defaultAttrs ? e.attrs : null),
            (o = e.content);
        }
        let l =
            e.someProp("clipboardSerializer") ||
            i.ZF.fromSchema(e.state.schema),
          d = lt(),
          a = d.createElement("div");
        a.appendChild(l.serializeFragment(o, { document: d }));
        let c,
          h = a.firstChild,
          p = 0;
        for (; h && 1 == h.nodeType && (c = rt[h.nodeName.toLowerCase()]); ) {
          for (let e = c.length - 1; e >= 0; e--) {
            let t = d.createElement(c[e]);
            for (; a.firstChild; ) t.appendChild(a.firstChild);
            a.appendChild(t), p++;
          }
          h = a.firstChild;
        }
        return (
          h &&
            1 == h.nodeType &&
            h.setAttribute(
              "data-pm-slice",
              `${r} ${s}${p ? ` -${p}` : ""} ${JSON.stringify(n)}`,
            ),
          {
            dom: a,
            text:
              e.someProp("clipboardTextSerializer", (n) => n(t, e)) ||
              t.content.textBetween(0, t.content.size, "\n\n"),
            slice: t,
          }
        );
      }
      function Ye(e, t, n, o, r) {
        let s,
          l,
          d = r.parent.type.spec.code;
        if (!n && !t) return null;
        let a = t && (o || d || !n);
        if (a) {
          if (
            (e.someProp("transformPastedText", (n) => {
              t = n(t, d || o, e);
            }),
            d)
          )
            return t
              ? new i.Ji(
                  i.FK.from(e.state.schema.text(t.replace(/\r\n?/g, "\n"))),
                  0,
                  0,
                )
              : i.Ji.empty;
          let n = e.someProp("clipboardTextParser", (n) => n(t, r, o, e));
          if (n) l = n;
          else {
            let n = r.marks(),
              { schema: o } = e.state,
              l = i.ZF.fromSchema(o);
            (s = document.createElement("div")),
              t.split(/(?:\r\n?|\n)+/).forEach((e) => {
                let t = s.appendChild(document.createElement("p"));
                e && t.appendChild(l.serializeNode(o.text(e, n)));
              });
          }
        } else
          e.someProp("transformPastedHTML", (t) => {
            n = t(n, e);
          }),
            (s = (function (e) {
              let t = /^(\s*<meta [^>]*>)*/.exec(e);
              t && (e = e.slice(t[0].length));
              let n,
                o = lt().createElement("div"),
                i = /<([a-z][^>\s]+)/i.exec(e);
              (n = i && rt[i[1].toLowerCase()]) &&
                (e =
                  n.map((e) => "<" + e + ">").join("") +
                  e +
                  n
                    .map((e) => "</" + e + ">")
                    .reverse()
                    .join(""));
              if (((o.innerHTML = e), n))
                for (let e = 0; e < n.length; e++)
                  o = o.querySelector(n[e]) || o;
              return o;
            })(n)),
            R &&
              (function (e) {
                let t = e.querySelectorAll(
                  x
                    ? "span:not([class]):not([style])"
                    : "span.Apple-converted-space",
                );
                for (let n = 0; n < t.length; n++) {
                  let o = t[n];
                  1 == o.childNodes.length &&
                    " " == o.textContent &&
                    o.parentNode &&
                    o.parentNode.replaceChild(
                      e.ownerDocument.createTextNode(" "),
                      o,
                    );
                }
              })(s);
        let c = s && s.querySelector("[data-pm-slice]"),
          h =
            c &&
            /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(
              c.getAttribute("data-pm-slice") || "",
            );
        if (h && h[3])
          for (let e = +h[3]; e > 0; e--) {
            let e = s.firstChild;
            for (; e && 1 != e.nodeType; ) e = e.nextSibling;
            if (!e) break;
            s = e;
          }
        if (!l) {
          let t =
            e.someProp("clipboardParser") ||
            e.someProp("domParser") ||
            i.S4.fromSchema(e.state.schema);
          l = t.parseSlice(s, {
            preserveWhitespace: !(!a && !h),
            context: r,
            ruleFromNode: (e) =>
              "BR" != e.nodeName ||
              e.nextSibling ||
              !e.parentNode ||
              Qe.test(e.parentNode.nodeName)
                ? null
                : { ignore: !0 },
          });
        }
        if (h)
          l = (function (e, t) {
            if (!e.size) return e;
            let n,
              o = e.content.firstChild.type.schema;
            try {
              n = JSON.parse(t);
            } catch (t) {
              return e;
            }
            let { content: r, openStart: s, openEnd: l } = e;
            for (let e = n.length - 2; e >= 0; e -= 2) {
              let t = o.nodes[n[e]];
              if (!t || t.hasRequiredAttrs()) break;
              (r = i.FK.from(t.create(n[e + 1], r))), s++, l++;
            }
            return new i.Ji(r, s, l);
          })(it(l, +h[1], +h[2]), h[4]);
        else if (
          ((l = i.Ji.maxOpen(
            (function (e, t) {
              if (e.childCount < 2) return e;
              for (let n = t.depth; n >= 0; n--) {
                let o,
                  r = t.node(n).contentMatchAt(t.index(n)),
                  s = [];
                if (
                  (e.forEach((e) => {
                    if (!s) return;
                    let t,
                      n = r.findWrapping(e.type);
                    if (!n) return (s = null);
                    if (
                      (t =
                        s.length && o.length && tt(n, o, e, s[s.length - 1], 0))
                    )
                      s[s.length - 1] = t;
                    else {
                      s.length &&
                        (s[s.length - 1] = nt(s[s.length - 1], o.length));
                      let t = et(e, n);
                      s.push(t), (r = r.matchType(t.type)), (o = n);
                    }
                  }),
                  s)
                )
                  return i.FK.from(s);
              }
              return e;
            })(l.content, r),
            !0,
          )),
          l.openStart || l.openEnd)
        ) {
          let e = 0,
            t = 0;
          for (
            let t = l.content.firstChild;
            e < l.openStart && !t.type.spec.isolating;
            e++, t = t.firstChild
          );
          for (
            let e = l.content.lastChild;
            t < l.openEnd && !e.type.spec.isolating;
            t++, e = e.lastChild
          );
          l = it(l, e, t);
        }
        return (
          e.someProp("transformPasted", (t) => {
            l = t(l, e);
          }),
          l
        );
      }
      const Qe =
        /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
      function et(e, t, n = 0) {
        for (let o = t.length - 1; o >= n; o--)
          e = t[o].create(null, i.FK.from(e));
        return e;
      }
      function tt(e, t, n, o, r) {
        if (r < e.length && r < t.length && e[r] == t[r]) {
          let s = tt(e, t, n, o.lastChild, r + 1);
          if (s) return o.copy(o.content.replaceChild(o.childCount - 1, s));
          if (
            o
              .contentMatchAt(o.childCount)
              .matchType(r == e.length - 1 ? n.type : e[r + 1])
          )
            return o.copy(o.content.append(i.FK.from(et(n, e, r + 1))));
        }
      }
      function nt(e, t) {
        if (0 == t) return e;
        let n = e.content.replaceChild(
            e.childCount - 1,
            nt(e.lastChild, t - 1),
          ),
          o = e.contentMatchAt(e.childCount).fillBefore(i.FK.empty, !0);
        return e.copy(n.append(o));
      }
      function ot(e, t, n, o, r, s) {
        let l = t < 0 ? e.firstChild : e.lastChild,
          d = l.content;
        return (
          e.childCount > 1 && (s = 0),
          r < o - 1 && (d = ot(d, t, n, o, r + 1, s)),
          r >= n &&
            (d =
              t < 0
                ? l
                    .contentMatchAt(0)
                    .fillBefore(d, s <= r)
                    .append(d)
                : d.append(
                    l.contentMatchAt(l.childCount).fillBefore(i.FK.empty, !0),
                  )),
          e.replaceChild(t < 0 ? 0 : e.childCount - 1, l.copy(d))
        );
      }
      function it(e, t, n) {
        return (
          t < e.openStart &&
            (e = new i.Ji(
              ot(e.content, -1, t, e.openStart, 0, e.openEnd),
              t,
              e.openEnd,
            )),
          n < e.openEnd &&
            (e = new i.Ji(
              ot(e.content, 1, n, e.openEnd, 0, 0),
              e.openStart,
              n,
            )),
          e
        );
      }
      const rt = {
        thead: ["table"],
        tbody: ["table"],
        tfoot: ["table"],
        caption: ["table"],
        colgroup: ["table"],
        col: ["table", "colgroup"],
        tr: ["table", "tbody"],
        td: ["table", "tbody", "tr"],
        th: ["table", "tbody", "tr"],
      };
      let st = null;
      function lt() {
        return st || (st = document.implementation.createHTMLDocument("title"));
      }
      const dt = {},
        at = {},
        ct = { touchstart: !0, touchmove: !0 };
      class ht {
        constructor() {
          (this.shiftKey = !1),
            (this.mouseDown = null),
            (this.lastKeyCode = null),
            (this.lastKeyCodeTime = 0),
            (this.lastClick = { time: 0, x: 0, y: 0, type: "" }),
            (this.lastSelectionOrigin = null),
            (this.lastSelectionTime = 0),
            (this.lastIOSEnter = 0),
            (this.lastIOSEnterFallbackTimeout = -1),
            (this.lastFocus = 0),
            (this.lastTouch = 0),
            (this.lastAndroidDelete = 0),
            (this.composing = !1),
            (this.compositionNode = null),
            (this.composingTimeout = -1),
            (this.compositionNodes = []),
            (this.compositionEndedAt = -2e8),
            (this.compositionID = 1),
            (this.compositionPendingChanges = 0),
            (this.domChangeCount = 0),
            (this.eventHandlers = Object.create(null)),
            (this.hideSelectionGuard = null);
        }
      }
      function pt(e, t) {
        (e.input.lastSelectionOrigin = t),
          (e.input.lastSelectionTime = Date.now());
      }
      function ft(e) {
        e.someProp("handleDOMEvents", (t) => {
          for (let n in t)
            e.input.eventHandlers[n] ||
              e.dom.addEventListener(
                n,
                (e.input.eventHandlers[n] = (t) => ut(e, t)),
              );
        });
      }
      function ut(e, t) {
        return e.someProp("handleDOMEvents", (n) => {
          let o = n[t.type];
          return !!o && (o(e, t) || t.defaultPrevented);
        });
      }
      function mt(e, t) {
        if (!t.bubbles) return !0;
        if (t.defaultPrevented) return !1;
        for (let n = t.target; n != e.dom; n = n.parentNode)
          if (
            !n ||
            11 == n.nodeType ||
            (n.pmViewDesc && n.pmViewDesc.stopEvent(t))
          )
            return !1;
        return !0;
      }
      function gt(e) {
        return { left: e.clientX, top: e.clientY };
      }
      function yt(e, t, n, o, i) {
        if (-1 == o) return !1;
        let r = e.state.doc.resolve(o);
        for (let o = r.depth + 1; o > 0; o--)
          if (
            e.someProp(t, (t) =>
              o > r.depth
                ? t(e, n, r.nodeAfter, r.before(o), i, !0)
                : t(e, n, r.node(o), r.before(o), i, !1),
            )
          )
            return !0;
        return !1;
      }
      function vt(e, t, n) {
        e.focused || e.focus();
        let o = e.state.tr.setSelection(t);
        "pointer" == n && o.setMeta("pointer", !0), e.dispatch(o);
      }
      function bt(e, t, n, i, r) {
        return (
          yt(e, "handleClickOn", t, n, i) ||
          e.someProp("handleClick", (n) => n(e, t, i)) ||
          (r
            ? (function (e, t) {
                if (-1 == t) return !1;
                let n,
                  i,
                  r = e.state.selection;
                r instanceof o.nh && (n = r.node);
                let s = e.state.doc.resolve(t);
                for (let e = s.depth + 1; e > 0; e--) {
                  let t = e > s.depth ? s.nodeAfter : s.node(e);
                  if (o.nh.isSelectable(t)) {
                    i =
                      n &&
                      r.$from.depth > 0 &&
                      e >= r.$from.depth &&
                      s.before(r.$from.depth + 1) == r.$from.pos
                        ? s.before(r.$from.depth)
                        : s.before(e);
                    break;
                  }
                }
                return (
                  null != i &&
                  (vt(e, o.nh.create(e.state.doc, i), "pointer"), !0)
                );
              })(e, n)
            : (function (e, t) {
                if (-1 == t) return !1;
                let n = e.state.doc.resolve(t),
                  i = n.nodeAfter;
                return (
                  !!(i && i.isAtom && o.nh.isSelectable(i)) &&
                  (vt(e, new o.nh(n), "pointer"), !0)
                );
              })(e, n))
        );
      }
      function wt(e, t, n, o) {
        return (
          yt(e, "handleDoubleClickOn", t, n, o) ||
          e.someProp("handleDoubleClick", (n) => n(e, t, o))
        );
      }
      function Dt(e, t, n, i) {
        return (
          yt(e, "handleTripleClickOn", t, n, i) ||
          e.someProp("handleTripleClick", (n) => n(e, t, i)) ||
          (function (e, t, n) {
            if (0 != n.button) return !1;
            let i = e.state.doc;
            if (-1 == t)
              return (
                !!i.inlineContent &&
                (vt(e, o.U3.create(i, 0, i.content.size), "pointer"), !0)
              );
            let r = i.resolve(t);
            for (let t = r.depth + 1; t > 0; t--) {
              let n = t > r.depth ? r.nodeAfter : r.node(t),
                s = r.before(t);
              if (n.inlineContent)
                vt(e, o.U3.create(i, s + 1, s + 1 + n.content.size), "pointer");
              else {
                if (!o.nh.isSelectable(n)) continue;
                vt(e, o.nh.create(i, s), "pointer");
              }
              return !0;
            }
          })(e, n, i)
        );
      }
      function Ct(e) {
        return Et(e);
      }
      (at.keydown = (e, t) => {
        let n = t;
        if (
          ((e.input.shiftKey = 16 == n.keyCode || n.shiftKey),
          !Ot(e, n) &&
            ((e.input.lastKeyCode = n.keyCode),
            (e.input.lastKeyCodeTime = Date.now()),
            !V || !x || 13 != n.keyCode))
        )
          if (
            (229 != n.keyCode && e.domObserver.forceFlush(),
            !E || 13 != n.keyCode || n.ctrlKey || n.altKey || n.metaKey)
          )
            e.someProp("handleKeyDown", (t) => t(e, n)) || Xe(e, n)
              ? n.preventDefault()
              : pt(e, "key");
          else {
            let t = Date.now();
            (e.input.lastIOSEnter = t),
              (e.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
                e.input.lastIOSEnter == t &&
                  (e.someProp("handleKeyDown", (t) => t(e, g(13, "Enter"))),
                  (e.input.lastIOSEnter = 0));
              }, 200));
          }
      }),
        (at.keyup = (e, t) => {
          16 == t.keyCode && (e.input.shiftKey = !1);
        }),
        (at.keypress = (e, t) => {
          let n = t;
          if (
            Ot(e, n) ||
            !n.charCode ||
            (n.ctrlKey && !n.altKey) ||
            (A && n.metaKey)
          )
            return;
          if (e.someProp("handleKeyPress", (t) => t(e, n)))
            return void n.preventDefault();
          let i = e.state.selection;
          if (!(i instanceof o.U3 && i.$from.sameParent(i.$to))) {
            let t = String.fromCharCode(n.charCode);
            /[\r\n]/.test(t) ||
              e.someProp("handleTextInput", (n) =>
                n(e, i.$from.pos, i.$to.pos, t),
              ) ||
              e.dispatch(e.state.tr.insertText(t).scrollIntoView()),
              n.preventDefault();
          }
        });
      const Nt = A ? "metaKey" : "ctrlKey";
      dt.mousedown = (e, t) => {
        let n = t;
        e.input.shiftKey = n.shiftKey;
        let o = Ct(e),
          i = Date.now(),
          r = "singleClick";
        i - e.input.lastClick.time < 500 &&
          (function (e, t) {
            let n = t.x - e.clientX,
              o = t.y - e.clientY;
            return n * n + o * o < 100;
          })(n, e.input.lastClick) &&
          !n[Nt] &&
          ("singleClick" == e.input.lastClick.type
            ? (r = "doubleClick")
            : "doubleClick" == e.input.lastClick.type && (r = "tripleClick")),
          (e.input.lastClick = {
            time: i,
            x: n.clientX,
            y: n.clientY,
            type: r,
          });
        let s = e.posAtCoords(gt(n));
        s &&
          ("singleClick" == r
            ? (e.input.mouseDown && e.input.mouseDown.done(),
              (e.input.mouseDown = new St(e, s, n, !!o)))
            : ("doubleClick" == r ? wt : Dt)(e, s.pos, s.inside, n)
              ? n.preventDefault()
              : pt(e, "pointer"));
      };
      class St {
        constructor(e, t, n, i) {
          let r, s;
          if (
            ((this.view = e),
            (this.pos = t),
            (this.event = n),
            (this.flushed = i),
            (this.delayedSelectionSync = !1),
            (this.mightDrag = null),
            (this.startDoc = e.state.doc),
            (this.selectNode = !!n[Nt]),
            (this.allowDefault = n.shiftKey),
            t.inside > -1)
          )
            (r = e.state.doc.nodeAt(t.inside)), (s = t.inside);
          else {
            let n = e.state.doc.resolve(t.pos);
            (r = n.parent), (s = n.depth ? n.before() : 0);
          }
          const l = i ? null : n.target,
            d = l ? e.docView.nearestDesc(l, !0) : null;
          this.target = d ? d.dom : null;
          let { selection: a } = e.state;
          ((0 == n.button &&
            r.type.spec.draggable &&
            !1 !== r.type.spec.selectable) ||
            (a instanceof o.nh && a.from <= s && a.to > s)) &&
            (this.mightDrag = {
              node: r,
              pos: s,
              addAttr: !(!this.target || this.target.draggable),
              setUneditable: !(
                !this.target ||
                !O ||
                this.target.hasAttribute("contentEditable")
              ),
            }),
            this.target &&
              this.mightDrag &&
              (this.mightDrag.addAttr || this.mightDrag.setUneditable) &&
              (this.view.domObserver.stop(),
              this.mightDrag.addAttr && (this.target.draggable = !0),
              this.mightDrag.setUneditable &&
                setTimeout(() => {
                  this.view.input.mouseDown == this &&
                    this.target.setAttribute("contentEditable", "false");
                }, 20),
              this.view.domObserver.start()),
            e.root.addEventListener("mouseup", (this.up = this.up.bind(this))),
            e.root.addEventListener(
              "mousemove",
              (this.move = this.move.bind(this)),
            ),
            pt(e, "pointer");
        }
        done() {
          this.view.root.removeEventListener("mouseup", this.up),
            this.view.root.removeEventListener("mousemove", this.move),
            this.mightDrag &&
              this.target &&
              (this.view.domObserver.stop(),
              this.mightDrag.addAttr &&
                this.target.removeAttribute("draggable"),
              this.mightDrag.setUneditable &&
                this.target.removeAttribute("contentEditable"),
              this.view.domObserver.start()),
            this.delayedSelectionSync && setTimeout(() => ke(this.view)),
            (this.view.input.mouseDown = null);
        }
        up(e) {
          if ((this.done(), !this.view.dom.contains(e.target))) return;
          let t = this.pos;
          this.view.state.doc != this.startDoc &&
            (t = this.view.posAtCoords(gt(e))),
            this.updateAllowDefault(e),
            this.allowDefault || !t
              ? pt(this.view, "pointer")
              : bt(this.view, t.pos, t.inside, e, this.selectNode)
                ? e.preventDefault()
                : 0 == e.button &&
                    (this.flushed ||
                      (T && this.mightDrag && !this.mightDrag.node.isAtom) ||
                      (x &&
                        !this.view.state.selection.visible &&
                        Math.min(
                          Math.abs(t.pos - this.view.state.selection.from),
                          Math.abs(t.pos - this.view.state.selection.to),
                        ) <= 2))
                  ? (vt(
                      this.view,
                      o.LN.near(this.view.state.doc.resolve(t.pos)),
                      "pointer",
                    ),
                    e.preventDefault())
                  : pt(this.view, "pointer");
        }
        move(e) {
          this.updateAllowDefault(e),
            pt(this.view, "pointer"),
            0 == e.buttons && this.done();
        }
        updateAllowDefault(e) {
          !this.allowDefault &&
            (Math.abs(this.event.x - e.clientX) > 4 ||
              Math.abs(this.event.y - e.clientY) > 4) &&
            (this.allowDefault = !0);
        }
      }
      function Ot(e, t) {
        return (
          !!e.composing ||
          (!!(T && Math.abs(t.timeStamp - e.input.compositionEndedAt) < 500) &&
            ((e.input.compositionEndedAt = -2e8), !0))
        );
      }
      (dt.touchstart = (e) => {
        (e.input.lastTouch = Date.now()), Ct(e), pt(e, "pointer");
      }),
        (dt.touchmove = (e) => {
          (e.input.lastTouch = Date.now()), pt(e, "pointer");
        }),
        (dt.contextmenu = (e) => Ct(e));
      const Mt = V ? 5e3 : -1;
      function xt(e, t) {
        clearTimeout(e.input.composingTimeout),
          t > -1 && (e.input.composingTimeout = setTimeout(() => Et(e), t));
      }
      function kt(e) {
        for (
          e.composing &&
          ((e.input.composing = !1),
          (e.input.compositionEndedAt = (function () {
            let e = document.createEvent("Event");
            return e.initEvent("event", !0, !0), e.timeStamp;
          })()));
          e.input.compositionNodes.length > 0;

        )
          e.input.compositionNodes.pop().markParentsDirty();
      }
      function Tt(e) {
        let t = e.domSelectionRange();
        if (!t.focusNode) return null;
        let n = (function (e, t) {
            for (;;) {
              if (3 == e.nodeType && t) return e;
              if (1 == e.nodeType && t > 0) {
                if ("false" == e.contentEditable) return null;
                t = f((e = e.childNodes[t - 1]));
              } else {
                if (!e.parentNode || u(e)) return null;
                (t = s(e)), (e = e.parentNode);
              }
            }
          })(t.focusNode, t.focusOffset),
          o = (function (e, t) {
            for (;;) {
              if (3 == e.nodeType && t < e.nodeValue.length) return e;
              if (1 == e.nodeType && t < e.childNodes.length) {
                if ("false" == e.contentEditable) return null;
                (e = e.childNodes[t]), (t = 0);
              } else {
                if (!e.parentNode || u(e)) return null;
                (t = s(e) + 1), (e = e.parentNode);
              }
            }
          })(t.focusNode, t.focusOffset);
        if (n && o && n != o) {
          let t = o.pmViewDesc;
          if (!t || !t.isText(o.nodeValue)) return o;
          if (e.input.compositionNode == o) {
            let e = n.pmViewDesc;
            if (e && e.isText(n.nodeValue)) return o;
          }
        }
        return n || o;
      }
      function Et(e, t = !1) {
        if (!(V && e.domObserver.flushingSoon >= 0)) {
          if (
            (e.domObserver.forceFlush(),
            kt(e),
            t || (e.docView && e.docView.dirty))
          ) {
            let t = Me(e);
            return (
              t && !t.eq(e.state.selection)
                ? e.dispatch(e.state.tr.setSelection(t))
                : e.updateState(e.state),
              !0
            );
          }
          return !1;
        }
      }
      (at.compositionstart = at.compositionupdate =
        (e) => {
          if (!e.composing) {
            e.domObserver.flush();
            let { state: t } = e,
              n = t.selection.$from;
            if (
              t.selection.empty &&
              (t.storedMarks ||
                (!n.textOffset &&
                  n.parentOffset &&
                  n.nodeBefore.marks.some((e) => !1 === e.type.spec.inclusive)))
            )
              (e.markCursor = e.state.storedMarks || n.marks()),
                Et(e, !0),
                (e.markCursor = null);
            else if (
              (Et(e),
              O &&
                t.selection.empty &&
                n.parentOffset &&
                !n.textOffset &&
                n.nodeBefore.marks.length)
            ) {
              let t = e.domSelectionRange();
              for (
                let n = t.focusNode, o = t.focusOffset;
                n && 1 == n.nodeType && 0 != o;

              ) {
                let t = o < 0 ? n.lastChild : n.childNodes[o - 1];
                if (!t) break;
                if (3 == t.nodeType) {
                  e.domSelection().collapse(t, t.nodeValue.length);
                  break;
                }
                (n = t), (o = -1);
              }
            }
            e.input.composing = !0;
          }
          xt(e, Mt);
        }),
        (at.compositionend = (e, t) => {
          e.composing &&
            ((e.input.composing = !1),
            (e.input.compositionEndedAt = t.timeStamp),
            (e.input.compositionPendingChanges = e.domObserver.pendingRecords()
              .length
              ? e.input.compositionID
              : 0),
            (e.input.compositionNode = null),
            e.input.compositionPendingChanges &&
              Promise.resolve().then(() => e.domObserver.flush()),
            e.input.compositionID++,
            xt(e, 20));
        });
      const At = (N && S < 15) || (E && I < 604);
      function Pt(e, t, n, o, r) {
        let s = Ye(e, t, n, o, e.state.selection.$from);
        if (e.someProp("handlePaste", (t) => t(e, r, s || i.Ji.empty)))
          return !0;
        if (!s) return !1;
        let l = (function (e) {
            return 0 == e.openStart &&
              0 == e.openEnd &&
              1 == e.content.childCount
              ? e.content.firstChild
              : null;
          })(s),
          d = l
            ? e.state.tr.replaceSelectionWith(l, o)
            : e.state.tr.replaceSelection(s);
        return (
          e.dispatch(
            d.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste"),
          ),
          !0
        );
      }
      function Vt(e) {
        let t = e.getData("text/plain") || e.getData("Text");
        if (t) return t;
        let n = e.getData("text/uri-list");
        return n ? n.replace(/\r?\n/g, " ") : "";
      }
      (dt.copy = at.cut =
        (e, t) => {
          let n = t,
            o = e.state.selection,
            i = "cut" == n.type;
          if (o.empty) return;
          let r = At ? null : n.clipboardData,
            s = o.content(),
            { dom: l, text: d } = Ze(e, s);
          r
            ? (n.preventDefault(),
              r.clearData(),
              r.setData("text/html", l.innerHTML),
              r.setData("text/plain", d))
            : (function (e, t) {
                if (!e.dom.parentNode) return;
                let n = e.dom.parentNode.appendChild(
                  document.createElement("div"),
                );
                n.appendChild(t),
                  (n.style.cssText =
                    "position: fixed; left: -10000px; top: 10px");
                let o = getSelection(),
                  i = document.createRange();
                i.selectNodeContents(t),
                  e.dom.blur(),
                  o.removeAllRanges(),
                  o.addRange(i),
                  setTimeout(() => {
                    n.parentNode && n.parentNode.removeChild(n), e.focus();
                  }, 50);
              })(e, l),
            i &&
              e.dispatch(
                e.state.tr
                  .deleteSelection()
                  .scrollIntoView()
                  .setMeta("uiEvent", "cut"),
              );
        }),
        (at.paste = (e, t) => {
          let n = t;
          if (e.composing && !V) return;
          let o = At ? null : n.clipboardData,
            i = e.input.shiftKey && 45 != e.input.lastKeyCode;
          o && Pt(e, Vt(o), o.getData("text/html"), i, n)
            ? n.preventDefault()
            : (function (e, t) {
                if (!e.dom.parentNode) return;
                let n =
                    e.input.shiftKey ||
                    e.state.selection.$from.parent.type.spec.code,
                  o = e.dom.parentNode.appendChild(
                    document.createElement(n ? "textarea" : "div"),
                  );
                n || (o.contentEditable = "true"),
                  (o.style.cssText =
                    "position: fixed; left: -10000px; top: 10px"),
                  o.focus();
                let i = e.input.shiftKey && 45 != e.input.lastKeyCode;
                setTimeout(() => {
                  e.focus(),
                    o.parentNode && o.parentNode.removeChild(o),
                    n
                      ? Pt(e, o.value, null, i, t)
                      : Pt(e, o.textContent, o.innerHTML, i, t);
                }, 50);
              })(e, n);
        });
      class Rt {
        constructor(e, t, n) {
          (this.slice = e), (this.move = t), (this.node = n);
        }
      }
      const It = A ? "altKey" : "ctrlKey";
      (dt.dragstart = (e, t) => {
        let n = t,
          i = e.input.mouseDown;
        if ((i && i.done(), !n.dataTransfer)) return;
        let r,
          s = e.state.selection,
          l = s.empty ? null : e.posAtCoords(gt(n));
        if (
          l &&
          l.pos >= s.from &&
          l.pos <= (s instanceof o.nh ? s.to - 1 : s.to)
        );
        else if (i && i.mightDrag)
          r = o.nh.create(e.state.doc, i.mightDrag.pos);
        else if (n.target && 1 == n.target.nodeType) {
          let t = e.docView.nearestDesc(n.target, !0);
          t &&
            t.node.type.spec.draggable &&
            t != e.docView &&
            (r = o.nh.create(e.state.doc, t.posBefore));
        }
        let d = (r || e.state.selection).content(),
          { dom: a, text: c, slice: h } = Ze(e, d);
        n.dataTransfer.clearData(),
          n.dataTransfer.setData(At ? "Text" : "text/html", a.innerHTML),
          (n.dataTransfer.effectAllowed = "copyMove"),
          At || n.dataTransfer.setData("text/plain", c),
          (e.dragging = new Rt(h, !n[It], r));
      }),
        (dt.dragend = (e) => {
          let t = e.dragging;
          window.setTimeout(() => {
            e.dragging == t && (e.dragging = null);
          }, 50);
        }),
        (at.dragover = at.dragenter = (e, t) => t.preventDefault()),
        (at.drop = (e, t) => {
          let n = t,
            s = e.dragging;
          if (((e.dragging = null), !n.dataTransfer)) return;
          let l = e.posAtCoords(gt(n));
          if (!l) return;
          let d = e.state.doc.resolve(l.pos),
            a = s && s.slice;
          a
            ? e.someProp("transformPasted", (t) => {
                a = t(a, e);
              })
            : (a = Ye(
                e,
                Vt(n.dataTransfer),
                At ? null : n.dataTransfer.getData("text/html"),
                !1,
                d,
              ));
          let c = !(!s || n[It]);
          if (e.someProp("handleDrop", (t) => t(e, n, a || i.Ji.empty, c)))
            return void n.preventDefault();
          if (!a) return;
          n.preventDefault();
          let h = a ? (0, r.Um)(e.state.doc, d.pos, a) : d.pos;
          null == h && (h = d.pos);
          let p = e.state.tr;
          if (c) {
            let { node: e } = s;
            e ? e.replace(p) : p.deleteSelection();
          }
          let f = p.mapping.map(h),
            u = 0 == a.openStart && 0 == a.openEnd && 1 == a.content.childCount,
            m = p.doc;
          if (
            (u
              ? p.replaceRangeWith(f, f, a.content.firstChild)
              : p.replaceRange(f, f, a),
            p.doc.eq(m))
          )
            return;
          let g = p.doc.resolve(f);
          if (
            u &&
            o.nh.isSelectable(a.content.firstChild) &&
            g.nodeAfter &&
            g.nodeAfter.sameMarkup(a.content.firstChild)
          )
            p.setSelection(new o.nh(g));
          else {
            let t = p.mapping.map(h);
            p.mapping.maps[p.mapping.maps.length - 1].forEach(
              (e, n, o, i) => (t = i),
            ),
              p.setSelection(Ie(e, g, p.doc.resolve(t)));
          }
          e.focus(), e.dispatch(p.setMeta("uiEvent", "drop"));
        }),
        (dt.focus = (e) => {
          (e.input.lastFocus = Date.now()),
            e.focused ||
              (e.domObserver.stop(),
              e.dom.classList.add("ProseMirror-focused"),
              e.domObserver.start(),
              (e.focused = !0),
              setTimeout(() => {
                e.docView &&
                  e.hasFocus() &&
                  !e.domObserver.currentSelection.eq(e.domSelectionRange()) &&
                  ke(e);
              }, 20));
        }),
        (dt.blur = (e, t) => {
          let n = t;
          e.focused &&
            (e.domObserver.stop(),
            e.dom.classList.remove("ProseMirror-focused"),
            e.domObserver.start(),
            n.relatedTarget &&
              e.dom.contains(n.relatedTarget) &&
              e.domObserver.currentSelection.clear(),
            (e.focused = !1));
        }),
        (dt.beforeinput = (e, t) => {
          if (x && V && "deleteContentBackward" == t.inputType) {
            e.domObserver.flushSoon();
            let { domChangeCount: t } = e.input;
            setTimeout(() => {
              if (e.input.domChangeCount != t) return;
              if (
                (e.dom.blur(),
                e.focus(),
                e.someProp("handleKeyDown", (t) => t(e, g(8, "Backspace"))))
              )
                return;
              let { $cursor: n } = e.state.selection;
              n &&
                n.pos > 0 &&
                e.dispatch(
                  e.state.tr.delete(n.pos - 1, n.pos).scrollIntoView(),
                );
            }, 50);
          }
        });
      for (let e in at) dt[e] = at[e];
      function Bt(e, t) {
        if (e == t) return !0;
        for (let n in e) if (e[n] !== t[n]) return !1;
        for (let n in t) if (!(n in e)) return !1;
        return !0;
      }
      class Ft {
        constructor(e, t) {
          (this.toDOM = e),
            (this.spec = t || qt),
            (this.side = this.spec.side || 0);
        }
        map(e, t, n, o) {
          let { pos: i, deleted: r } = e.mapResult(
            t.from + o,
            this.side < 0 ? -1 : 1,
          );
          return r ? null : new Lt(i - n, i - n, this);
        }
        valid() {
          return !0;
        }
        eq(e) {
          return (
            this == e ||
            (e instanceof Ft &&
              ((this.spec.key && this.spec.key == e.spec.key) ||
                (this.toDOM == e.toDOM && Bt(this.spec, e.spec))))
          );
        }
        destroy(e) {
          this.spec.destroy && this.spec.destroy(e);
        }
      }
      class Kt {
        constructor(e, t) {
          (this.attrs = e), (this.spec = t || qt);
        }
        map(e, t, n, o) {
          let i = e.map(t.from + o, this.spec.inclusiveStart ? -1 : 1) - n,
            r = e.map(t.to + o, this.spec.inclusiveEnd ? 1 : -1) - n;
          return i >= r ? null : new Lt(i, r, this);
        }
        valid(e, t) {
          return t.from < t.to;
        }
        eq(e) {
          return (
            this == e ||
            (e instanceof Kt &&
              Bt(this.attrs, e.attrs) &&
              Bt(this.spec, e.spec))
          );
        }
        static is(e) {
          return e.type instanceof Kt;
        }
        destroy() {}
      }
      class zt {
        constructor(e, t) {
          (this.attrs = e), (this.spec = t || qt);
        }
        map(e, t, n, o) {
          let i = e.mapResult(t.from + o, 1);
          if (i.deleted) return null;
          let r = e.mapResult(t.to + o, -1);
          return r.deleted || r.pos <= i.pos
            ? null
            : new Lt(i.pos - n, r.pos - n, this);
        }
        valid(e, t) {
          let n,
            { index: o, offset: i } = e.content.findIndex(t.from);
          return (
            i == t.from && !(n = e.child(o)).isText && i + n.nodeSize == t.to
          );
        }
        eq(e) {
          return (
            this == e ||
            (e instanceof zt &&
              Bt(this.attrs, e.attrs) &&
              Bt(this.spec, e.spec))
          );
        }
        destroy() {}
      }
      class Lt {
        constructor(e, t, n) {
          (this.from = e), (this.to = t), (this.type = n);
        }
        copy(e, t) {
          return new Lt(e, t, this.type);
        }
        eq(e, t = 0) {
          return (
            this.type.eq(e.type) &&
            this.from + t == e.from &&
            this.to + t == e.to
          );
        }
        map(e, t, n) {
          return this.type.map(e, this, t, n);
        }
        static widget(e, t, n) {
          return new Lt(e, e, new Ft(t, n));
        }
        static inline(e, t, n, o) {
          return new Lt(e, t, new Kt(n, o));
        }
        static node(e, t, n, o) {
          return new Lt(e, t, new zt(n, o));
        }
        get spec() {
          return this.type.spec;
        }
        get inline() {
          return this.type instanceof Kt;
        }
        get widget() {
          return this.type instanceof Ft;
        }
      }
      const $t = [],
        qt = {};
      class Wt {
        constructor(e, t) {
          (this.local = e.length ? e : $t), (this.children = t.length ? t : $t);
        }
        static create(e, t) {
          return t.length ? jt(t, e, 0, qt) : _t;
        }
        find(e, t, n) {
          let o = [];
          return (
            this.findInner(null == e ? 0 : e, null == t ? 1e9 : t, o, 0, n), o
          );
        }
        findInner(e, t, n, o, i) {
          for (let r = 0; r < this.local.length; r++) {
            let s = this.local[r];
            s.from <= t &&
              s.to >= e &&
              (!i || i(s.spec)) &&
              n.push(s.copy(s.from + o, s.to + o));
          }
          for (let r = 0; r < this.children.length; r += 3)
            if (this.children[r] < t && this.children[r + 1] > e) {
              let s = this.children[r] + 1;
              this.children[r + 2].findInner(e - s, t - s, n, o + s, i);
            }
        }
        map(e, t, n) {
          return this == _t || 0 == e.maps.length
            ? this
            : this.mapInner(e, t, 0, 0, n || qt);
        }
        mapInner(e, t, n, o, i) {
          let r;
          for (let s = 0; s < this.local.length; s++) {
            let l = this.local[s].map(e, n, o);
            l && l.type.valid(t, l)
              ? (r || (r = [])).push(l)
              : i.onRemove && i.onRemove(this.local[s].spec);
          }
          return this.children.length
            ? (function (e, t, n, o, i, r, s) {
                let l = e.slice();
                for (let e = 0, t = r; e < n.maps.length; e++) {
                  let o = 0;
                  n.maps[e].forEach((e, n, i, r) => {
                    let s = r - i - (n - e);
                    for (let i = 0; i < l.length; i += 3) {
                      let r = l[i + 1];
                      if (r < 0 || e > r + t - o) continue;
                      let d = l[i] + t - o;
                      n >= d
                        ? (l[i + 1] = e <= d ? -2 : -1)
                        : e >= t && s && ((l[i] += s), (l[i + 1] += s));
                    }
                    o += s;
                  }),
                    (t = n.maps[e].map(t, -1));
                }
                let d = !1;
                for (let t = 0; t < l.length; t += 3)
                  if (l[t + 1] < 0) {
                    if (-2 == l[t + 1]) {
                      (d = !0), (l[t + 1] = -1);
                      continue;
                    }
                    let a = n.map(e[t] + r),
                      c = a - i;
                    if (c < 0 || c >= o.content.size) {
                      d = !0;
                      continue;
                    }
                    let h = n.map(e[t + 1] + r, -1) - i,
                      { index: p, offset: f } = o.content.findIndex(c),
                      u = o.maybeChild(p);
                    if (u && f == c && f + u.nodeSize == h) {
                      let o = l[t + 2].mapInner(n, u, a + 1, e[t] + r + 1, s);
                      o != _t
                        ? ((l[t] = c), (l[t + 1] = h), (l[t + 2] = o))
                        : ((l[t + 1] = -2), (d = !0));
                    } else d = !0;
                  }
                if (d) {
                  let d = (function (e, t, n, o, i, r, s) {
                      function l(e, t) {
                        for (let r = 0; r < e.local.length; r++) {
                          let l = e.local[r].map(o, i, t);
                          l
                            ? n.push(l)
                            : s.onRemove && s.onRemove(e.local[r].spec);
                        }
                        for (let n = 0; n < e.children.length; n += 3)
                          l(e.children[n + 2], e.children[n] + t + 1);
                      }
                      for (let n = 0; n < e.length; n += 3)
                        -1 == e[n + 1] && l(e[n + 2], t[n] + r + 1);
                      return n;
                    })(l, e, t, n, i, r, s),
                    a = jt(d, o, 0, s);
                  t = a.local;
                  for (let e = 0; e < l.length; e += 3)
                    l[e + 1] < 0 && (l.splice(e, 3), (e -= 3));
                  for (let e = 0, t = 0; e < a.children.length; e += 3) {
                    let n = a.children[e];
                    for (; t < l.length && l[t] < n; ) t += 3;
                    l.splice(
                      t,
                      0,
                      a.children[e],
                      a.children[e + 1],
                      a.children[e + 2],
                    );
                  }
                }
                return new Wt(t.sort(Xt), l);
              })(this.children, r || [], e, t, n, o, i)
            : r
              ? new Wt(r.sort(Xt), $t)
              : _t;
        }
        add(e, t) {
          return t.length
            ? this == _t
              ? Wt.create(e, t)
              : this.addInner(e, t, 0)
            : this;
        }
        addInner(e, t, n) {
          let o,
            i = 0;
          e.forEach((e, r) => {
            let s,
              l = r + n;
            if ((s = Gt(t, e, l))) {
              for (o || (o = this.children.slice()); i < o.length && o[i] < r; )
                i += 3;
              o[i] == r
                ? (o[i + 2] = o[i + 2].addInner(e, s, l + 1))
                : o.splice(i, 0, r, r + e.nodeSize, jt(s, e, l + 1, qt)),
                (i += 3);
            }
          });
          let r = Ht(i ? Jt(t) : t, -n);
          for (let t = 0; t < r.length; t++)
            r[t].type.valid(e, r[t]) || r.splice(t--, 1);
          return new Wt(
            r.length ? this.local.concat(r).sort(Xt) : this.local,
            o || this.children,
          );
        }
        remove(e) {
          return 0 == e.length || this == _t ? this : this.removeInner(e, 0);
        }
        removeInner(e, t) {
          let n = this.children,
            o = this.local;
          for (let o = 0; o < n.length; o += 3) {
            let i,
              r = n[o] + t,
              s = n[o + 1] + t;
            for (let t, n = 0; n < e.length; n++)
              (t = e[n]) &&
                t.from > r &&
                t.to < s &&
                ((e[n] = null), (i || (i = [])).push(t));
            if (!i) continue;
            n == this.children && (n = this.children.slice());
            let l = n[o + 2].removeInner(i, r + 1);
            l != _t ? (n[o + 2] = l) : (n.splice(o, 3), (o -= 3));
          }
          if (o.length)
            for (let n, i = 0; i < e.length; i++)
              if ((n = e[i]))
                for (let e = 0; e < o.length; e++)
                  o[e].eq(n, t) &&
                    (o == this.local && (o = this.local.slice()),
                    o.splice(e--, 1));
          return n == this.children && o == this.local
            ? this
            : o.length || n.length
              ? new Wt(o, n)
              : _t;
        }
        forChild(e, t) {
          if (this == _t) return this;
          if (t.isLeaf) return Wt.empty;
          let n, o;
          for (let t = 0; t < this.children.length; t += 3)
            if (this.children[t] >= e) {
              this.children[t] == e && (n = this.children[t + 2]);
              break;
            }
          let i = e + 1,
            r = i + t.content.size;
          for (let e = 0; e < this.local.length; e++) {
            let t = this.local[e];
            if (t.from < r && t.to > i && t.type instanceof Kt) {
              let e = Math.max(i, t.from) - i,
                n = Math.min(r, t.to) - i;
              e < n && (o || (o = [])).push(t.copy(e, n));
            }
          }
          if (o) {
            let e = new Wt(o.sort(Xt), $t);
            return n ? new Ut([e, n]) : e;
          }
          return n || _t;
        }
        eq(e) {
          if (this == e) return !0;
          if (
            !(e instanceof Wt) ||
            this.local.length != e.local.length ||
            this.children.length != e.children.length
          )
            return !1;
          for (let t = 0; t < this.local.length; t++)
            if (!this.local[t].eq(e.local[t])) return !1;
          for (let t = 0; t < this.children.length; t += 3)
            if (
              this.children[t] != e.children[t] ||
              this.children[t + 1] != e.children[t + 1] ||
              !this.children[t + 2].eq(e.children[t + 2])
            )
              return !1;
          return !0;
        }
        locals(e) {
          return Zt(this.localsInner(e));
        }
        localsInner(e) {
          if (this == _t) return $t;
          if (e.inlineContent || !this.local.some(Kt.is)) return this.local;
          let t = [];
          for (let e = 0; e < this.local.length; e++)
            this.local[e].type instanceof Kt || t.push(this.local[e]);
          return t;
        }
      }
      (Wt.empty = new Wt([], [])), (Wt.removeOverlap = Zt);
      const _t = Wt.empty;
      class Ut {
        constructor(e) {
          this.members = e;
        }
        map(e, t) {
          const n = this.members.map((n) => n.map(e, t, qt));
          return Ut.from(n);
        }
        forChild(e, t) {
          if (t.isLeaf) return Wt.empty;
          let n = [];
          for (let o = 0; o < this.members.length; o++) {
            let i = this.members[o].forChild(e, t);
            i != _t &&
              (i instanceof Ut ? (n = n.concat(i.members)) : n.push(i));
          }
          return Ut.from(n);
        }
        eq(e) {
          if (!(e instanceof Ut) || e.members.length != this.members.length)
            return !1;
          for (let t = 0; t < this.members.length; t++)
            if (!this.members[t].eq(e.members[t])) return !1;
          return !0;
        }
        locals(e) {
          let t,
            n = !0;
          for (let o = 0; o < this.members.length; o++) {
            let i = this.members[o].localsInner(e);
            if (i.length)
              if (t) {
                n && ((t = t.slice()), (n = !1));
                for (let e = 0; e < i.length; e++) t.push(i[e]);
              } else t = i;
          }
          return t ? Zt(n ? t : t.sort(Xt)) : $t;
        }
        static from(e) {
          switch (e.length) {
            case 0:
              return _t;
            case 1:
              return e[0];
            default:
              return new Ut(
                e.every((e) => e instanceof Wt)
                  ? e
                  : e.reduce(
                      (e, t) => e.concat(t instanceof Wt ? t : t.members),
                      [],
                    ),
              );
          }
        }
      }
      function Ht(e, t) {
        if (!t || !e.length) return e;
        let n = [];
        for (let o = 0; o < e.length; o++) {
          let i = e[o];
          n.push(new Lt(i.from + t, i.to + t, i.type));
        }
        return n;
      }
      function Gt(e, t, n) {
        if (t.isLeaf) return null;
        let o = n + t.nodeSize,
          i = null;
        for (let t, r = 0; r < e.length; r++)
          (t = e[r]) &&
            t.from > n &&
            t.to < o &&
            ((i || (i = [])).push(t), (e[r] = null));
        return i;
      }
      function Jt(e) {
        let t = [];
        for (let n = 0; n < e.length; n++) null != e[n] && t.push(e[n]);
        return t;
      }
      function jt(e, t, n, o) {
        let i = [],
          r = !1;
        t.forEach((t, s) => {
          let l = Gt(e, t, s + n);
          if (l) {
            r = !0;
            let e = jt(l, t, n + s + 1, o);
            e != _t && i.push(s, s + t.nodeSize, e);
          }
        });
        let s = Ht(r ? Jt(e) : e, -n).sort(Xt);
        for (let e = 0; e < s.length; e++)
          s[e].type.valid(t, s[e]) ||
            (o.onRemove && o.onRemove(s[e].spec), s.splice(e--, 1));
        return s.length || i.length ? new Wt(s, i) : _t;
      }
      function Xt(e, t) {
        return e.from - t.from || e.to - t.to;
      }
      function Zt(e) {
        let t = e;
        for (let n = 0; n < t.length - 1; n++) {
          let o = t[n];
          if (o.from != o.to)
            for (let i = n + 1; i < t.length; i++) {
              let r = t[i];
              if (r.from != o.from) {
                r.from < o.to &&
                  (t == e && (t = e.slice()),
                  (t[n] = o.copy(o.from, r.from)),
                  Yt(t, i, o.copy(r.from, o.to)));
                break;
              }
              r.to != o.to &&
                (t == e && (t = e.slice()),
                (t[i] = r.copy(r.from, o.to)),
                Yt(t, i + 1, r.copy(o.to, r.to)));
            }
        }
        return t;
      }
      function Yt(e, t, n) {
        for (; t < e.length && Xt(n, e[t]) > 0; ) t++;
        e.splice(t, 0, n);
      }
      function Qt(e) {
        let t = [];
        return (
          e.someProp("decorations", (n) => {
            let o = n(e.state);
            o && o != _t && t.push(o);
          }),
          e.cursorWrapper &&
            t.push(Wt.create(e.state.doc, [e.cursorWrapper.deco])),
          Ut.from(t)
        );
      }
      const en = {
          childList: !0,
          characterData: !0,
          characterDataOldValue: !0,
          attributes: !0,
          attributeOldValue: !0,
          subtree: !0,
        },
        tn = N && S <= 11;
      class nn {
        constructor() {
          (this.anchorNode = null),
            (this.anchorOffset = 0),
            (this.focusNode = null),
            (this.focusOffset = 0);
        }
        set(e) {
          (this.anchorNode = e.anchorNode),
            (this.anchorOffset = e.anchorOffset),
            (this.focusNode = e.focusNode),
            (this.focusOffset = e.focusOffset);
        }
        clear() {
          this.anchorNode = this.focusNode = null;
        }
        eq(e) {
          return (
            e.anchorNode == this.anchorNode &&
            e.anchorOffset == this.anchorOffset &&
            e.focusNode == this.focusNode &&
            e.focusOffset == this.focusOffset
          );
        }
      }
      class on {
        constructor(e, t) {
          (this.view = e),
            (this.handleDOMChange = t),
            (this.queue = []),
            (this.flushingSoon = -1),
            (this.observer = null),
            (this.currentSelection = new nn()),
            (this.onCharData = null),
            (this.suppressingSelectionUpdates = !1),
            (this.observer =
              window.MutationObserver &&
              new window.MutationObserver((e) => {
                for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
                N &&
                S <= 11 &&
                e.some(
                  (e) =>
                    ("childList" == e.type && e.removedNodes.length) ||
                    ("characterData" == e.type &&
                      e.oldValue.length > e.target.nodeValue.length),
                )
                  ? this.flushSoon()
                  : this.flush();
              })),
            tn &&
              (this.onCharData = (e) => {
                this.queue.push({
                  target: e.target,
                  type: "characterData",
                  oldValue: e.prevValue,
                }),
                  this.flushSoon();
              }),
            (this.onSelectionChange = this.onSelectionChange.bind(this));
        }
        flushSoon() {
          this.flushingSoon < 0 &&
            (this.flushingSoon = window.setTimeout(() => {
              (this.flushingSoon = -1), this.flush();
            }, 20));
        }
        forceFlush() {
          this.flushingSoon > -1 &&
            (window.clearTimeout(this.flushingSoon),
            (this.flushingSoon = -1),
            this.flush());
        }
        start() {
          this.observer &&
            (this.observer.takeRecords(),
            this.observer.observe(this.view.dom, en)),
            this.onCharData &&
              this.view.dom.addEventListener(
                "DOMCharacterDataModified",
                this.onCharData,
              ),
            this.connectSelection();
        }
        stop() {
          if (this.observer) {
            let e = this.observer.takeRecords();
            if (e.length) {
              for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
              window.setTimeout(() => this.flush(), 20);
            }
            this.observer.disconnect();
          }
          this.onCharData &&
            this.view.dom.removeEventListener(
              "DOMCharacterDataModified",
              this.onCharData,
            ),
            this.disconnectSelection();
        }
        connectSelection() {
          this.view.dom.ownerDocument.addEventListener(
            "selectionchange",
            this.onSelectionChange,
          );
        }
        disconnectSelection() {
          this.view.dom.ownerDocument.removeEventListener(
            "selectionchange",
            this.onSelectionChange,
          );
        }
        suppressSelectionUpdates() {
          (this.suppressingSelectionUpdates = !0),
            setTimeout(() => (this.suppressingSelectionUpdates = !1), 50);
        }
        onSelectionChange() {
          if (Be(this.view)) {
            if (this.suppressingSelectionUpdates) return ke(this.view);
            if (N && S <= 11 && !this.view.state.selection.empty) {
              let e = this.view.domSelectionRange();
              if (
                e.focusNode &&
                c(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)
              )
                return this.flushSoon();
            }
            this.flush();
          }
        }
        setCurSelection() {
          this.currentSelection.set(this.view.domSelectionRange());
        }
        ignoreSelectionChange(e) {
          if (!e.focusNode) return !0;
          let t,
            n = new Set();
          for (let t = e.focusNode; t; t = l(t)) n.add(t);
          for (let o = e.anchorNode; o; o = l(o))
            if (n.has(o)) {
              t = o;
              break;
            }
          let o = t && this.view.docView.nearestDesc(t);
          return o &&
            o.ignoreMutation({
              type: "selection",
              target: 3 == t.nodeType ? t.parentNode : t,
            })
            ? (this.setCurSelection(), !0)
            : void 0;
        }
        pendingRecords() {
          if (this.observer)
            for (let e of this.observer.takeRecords()) this.queue.push(e);
          return this.queue;
        }
        flush() {
          let { view: e } = this;
          if (!e.docView || this.flushingSoon > -1) return;
          let t = this.pendingRecords();
          t.length && (this.queue = []);
          let n = e.domSelectionRange(),
            i =
              !this.suppressingSelectionUpdates &&
              !this.currentSelection.eq(n) &&
              Be(e) &&
              !this.ignoreSelectionChange(n),
            r = -1,
            s = -1,
            l = !1,
            d = [];
          if (e.editable)
            for (let e = 0; e < t.length; e++) {
              let n = this.registerMutation(t[e], d);
              n &&
                ((r = r < 0 ? n.from : Math.min(n.from, r)),
                (s = s < 0 ? n.to : Math.max(n.to, s)),
                n.typeOver && (l = !0));
            }
          if (O && d.length > 1) {
            let e = d.filter((e) => "BR" == e.nodeName);
            if (2 == e.length) {
              let t = e[0],
                n = e[1];
              t.parentNode && t.parentNode.parentNode == n.parentNode
                ? n.remove()
                : t.remove();
            }
          }
          let a = null;
          r < 0 &&
          i &&
          e.input.lastFocus > Date.now() - 200 &&
          Math.max(e.input.lastTouch, e.input.lastClick.time) <
            Date.now() - 300 &&
          m(n) &&
          (a = Me(e)) &&
          a.eq(o.LN.near(e.state.doc.resolve(0), 1))
            ? ((e.input.lastFocus = 0),
              ke(e),
              this.currentSelection.set(n),
              e.scrollToSelection())
            : (r > -1 || i) &&
              (r > -1 &&
                (e.docView.markDirty(r, s),
                (function (e) {
                  if (rn.has(e)) return;
                  if (
                    (rn.set(e, null),
                    -1 !==
                      ["normal", "nowrap", "pre-line"].indexOf(
                        getComputedStyle(e.dom).whiteSpace,
                      ))
                  ) {
                    if (((e.requiresGeckoHackNode = O), sn)) return;
                    console.warn(
                      "ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.",
                    ),
                      (sn = !0);
                  }
                })(e)),
              this.handleDOMChange(r, s, l, d),
              e.docView && e.docView.dirty
                ? e.updateState(e.state)
                : this.currentSelection.eq(n) || ke(e),
              this.currentSelection.set(n));
        }
        registerMutation(e, t) {
          if (t.indexOf(e.target) > -1) return null;
          let n = this.view.docView.nearestDesc(e.target);
          if (
            "attributes" == e.type &&
            (n == this.view.docView ||
              "contenteditable" == e.attributeName ||
              ("style" == e.attributeName &&
                !e.oldValue &&
                !e.target.getAttribute("style")))
          )
            return null;
          if (!n || n.ignoreMutation(e)) return null;
          if ("childList" == e.type) {
            for (let n = 0; n < e.addedNodes.length; n++)
              t.push(e.addedNodes[n]);
            if (
              n.contentDOM &&
              n.contentDOM != n.dom &&
              !n.contentDOM.contains(e.target)
            )
              return { from: n.posBefore, to: n.posAfter };
            let o = e.previousSibling,
              i = e.nextSibling;
            if (N && S <= 11 && e.addedNodes.length)
              for (let t = 0; t < e.addedNodes.length; t++) {
                let { previousSibling: n, nextSibling: r } = e.addedNodes[t];
                (!n || Array.prototype.indexOf.call(e.addedNodes, n) < 0) &&
                  (o = n),
                  (!r || Array.prototype.indexOf.call(e.addedNodes, r) < 0) &&
                    (i = r);
              }
            let r = o && o.parentNode == e.target ? s(o) + 1 : 0,
              l = n.localPosFromDOM(e.target, r, -1),
              d =
                i && i.parentNode == e.target
                  ? s(i)
                  : e.target.childNodes.length;
            return { from: l, to: n.localPosFromDOM(e.target, d, 1) };
          }
          return "attributes" == e.type
            ? { from: n.posAtStart - n.border, to: n.posAtEnd + n.border }
            : {
                from: n.posAtStart,
                to: n.posAtEnd,
                typeOver: e.target.nodeValue == e.oldValue,
              };
        }
      }
      let rn = new WeakMap(),
        sn = !1;
      function ln(e, t) {
        let n = t.startContainer,
          o = t.startOffset,
          i = t.endContainer,
          r = t.endOffset,
          s = e.domAtPos(e.state.selection.anchor);
        return (
          c(s.node, s.offset, i, r) && ([n, o, i, r] = [i, r, n, o]),
          { anchorNode: n, anchorOffset: o, focusNode: i, focusOffset: r }
        );
      }
      function dn(e) {
        let t = e.pmViewDesc;
        if (t) return t.parseRule();
        if ("BR" == e.nodeName && e.parentNode) {
          if (T && /^(ul|ol)$/i.test(e.parentNode.nodeName)) {
            let e = document.createElement("div");
            return e.appendChild(document.createElement("li")), { skip: e };
          }
          if (
            e.parentNode.lastChild == e ||
            (T && /^(tr|table)$/i.test(e.parentNode.nodeName))
          )
            return { ignore: !0 };
        } else if ("IMG" == e.nodeName && e.getAttribute("mark-placeholder"))
          return { ignore: !0 };
        return null;
      }
      const an =
        /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
      function cn(e, t, n, r, s) {
        let l =
          e.input.compositionPendingChanges ||
          (e.composing ? e.input.compositionID : 0);
        if (((e.input.compositionPendingChanges = 0), t < 0)) {
          let t =
              e.input.lastSelectionTime > Date.now() - 50
                ? e.input.lastSelectionOrigin
                : null,
            n = Me(e, t);
          if (n && !e.state.selection.eq(n)) {
            if (
              x &&
              V &&
              13 === e.input.lastKeyCode &&
              Date.now() - 100 < e.input.lastKeyCodeTime &&
              e.someProp("handleKeyDown", (t) => t(e, g(13, "Enter")))
            )
              return;
            let o = e.state.tr.setSelection(n);
            "pointer" == t
              ? o.setMeta("pointer", !0)
              : "key" == t && o.scrollIntoView(),
              l && o.setMeta("composition", l),
              e.dispatch(o);
          }
          return;
        }
        let d = e.state.doc.resolve(t),
          a = d.sharedDepth(n);
        (t = d.before(a + 1)), (n = e.state.doc.resolve(n).after(a + 1));
        let c,
          h,
          p = e.state.selection,
          f = (function (e, t, n) {
            let o,
              {
                node: r,
                fromOffset: s,
                toOffset: l,
                from: d,
                to: a,
              } = e.docView.parseRange(t, n),
              c = e.domSelectionRange(),
              h = c.anchorNode;
            if (
              (h &&
                e.dom.contains(1 == h.nodeType ? h : h.parentNode) &&
                ((o = [{ node: h, offset: c.anchorOffset }]),
                m(c) || o.push({ node: c.focusNode, offset: c.focusOffset })),
              x && 8 === e.input.lastKeyCode)
            )
              for (let e = l; e > s; e--) {
                let t = r.childNodes[e - 1],
                  n = t.pmViewDesc;
                if ("BR" == t.nodeName && !n) {
                  l = e;
                  break;
                }
                if (!n || n.size) break;
              }
            let p = e.state.doc,
              f = e.someProp("domParser") || i.S4.fromSchema(e.state.schema),
              u = p.resolve(d),
              g = null,
              y = f.parse(r, {
                topNode: u.parent,
                topMatch: u.parent.contentMatchAt(u.index()),
                topOpen: !0,
                from: s,
                to: l,
                preserveWhitespace: "pre" != u.parent.type.whitespace || "full",
                findPositions: o,
                ruleFromNode: dn,
                context: u,
              });
            if (o && null != o[0].pos) {
              let e = o[0].pos,
                t = o[1] && o[1].pos;
              null == t && (t = e), (g = { anchor: e + d, head: t + d });
            }
            return { doc: y, sel: g, from: d, to: a };
          })(e, t, n),
          u = e.state.doc,
          y = u.slice(f.from, f.to);
        8 === e.input.lastKeyCode && Date.now() - 100 < e.input.lastKeyCodeTime
          ? ((c = e.state.selection.to), (h = "end"))
          : ((c = e.state.selection.from), (h = "start")),
          (e.input.lastKeyCode = null);
        let v = (function (e, t, n, o, i) {
          let r = e.findDiffStart(t, n);
          if (null == r) return null;
          let { a: s, b: l } = e.findDiffEnd(t, n + e.size, n + t.size);
          if ("end" == i) {
            o -= s + Math.max(0, r - Math.min(s, l)) - r;
          }
          if (s < r && e.size < t.size) {
            let e = o <= r && o >= s ? r - o : 0;
            (r -= e),
              r &&
                r < t.size &&
                fn(t.textBetween(r - 1, r + 1)) &&
                (r += e ? 1 : -1),
              (l = r + (l - s)),
              (s = r);
          } else if (l < r) {
            let t = o <= r && o >= l ? r - o : 0;
            (r -= t),
              r &&
                r < e.size &&
                fn(e.textBetween(r - 1, r + 1)) &&
                (r += t ? 1 : -1),
              (s = r + (s - l)),
              (l = r);
          }
          return { start: r, endA: s, endB: l };
        })(y.content, f.doc.content, f.from, c, h);
        if (
          ((E && e.input.lastIOSEnter > Date.now() - 225) || V) &&
          s.some((e) => 1 == e.nodeType && !an.test(e.nodeName)) &&
          (!v || v.endA >= v.endB) &&
          e.someProp("handleKeyDown", (t) => t(e, g(13, "Enter")))
        )
          return void (e.input.lastIOSEnter = 0);
        if (!v) {
          if (
            !(
              r &&
              p instanceof o.U3 &&
              !p.empty &&
              p.$head.sameParent(p.$anchor)
            ) ||
            e.composing ||
            (f.sel && f.sel.anchor != f.sel.head)
          ) {
            if (f.sel) {
              let t = hn(e, e.state.doc, f.sel);
              if (t && !t.eq(e.state.selection)) {
                let n = e.state.tr.setSelection(t);
                l && n.setMeta("composition", l), e.dispatch(n);
              }
            }
            return;
          }
          v = { start: p.from, endA: p.to, endB: p.to };
        }
        e.input.domChangeCount++,
          e.state.selection.from < e.state.selection.to &&
            v.start == v.endB &&
            e.state.selection instanceof o.U3 &&
            (v.start > e.state.selection.from &&
            v.start <= e.state.selection.from + 2 &&
            e.state.selection.from >= f.from
              ? (v.start = e.state.selection.from)
              : v.endA < e.state.selection.to &&
                v.endA >= e.state.selection.to - 2 &&
                e.state.selection.to <= f.to &&
                ((v.endB += e.state.selection.to - v.endA),
                (v.endA = e.state.selection.to))),
          N &&
            S <= 11 &&
            v.endB == v.start + 1 &&
            v.endA == v.start &&
            v.start > f.from &&
            "  " ==
              f.doc.textBetween(v.start - f.from - 1, v.start - f.from + 1) &&
            (v.start--, v.endA--, v.endB--);
        let b,
          w = f.doc.resolveNoCache(v.start - f.from),
          D = f.doc.resolveNoCache(v.endB - f.from),
          C = u.resolve(v.start),
          O = w.sameParent(D) && w.parent.inlineContent && C.end() >= v.endA;
        if (
          ((E &&
            e.input.lastIOSEnter > Date.now() - 225 &&
            (!O || s.some((e) => "DIV" == e.nodeName || "P" == e.nodeName))) ||
            (!O &&
              w.pos < f.doc.content.size &&
              !w.sameParent(D) &&
              (b = o.LN.findFrom(f.doc.resolve(w.pos + 1), 1, !0)) &&
              b.head == D.pos)) &&
          e.someProp("handleKeyDown", (t) => t(e, g(13, "Enter")))
        )
          return void (e.input.lastIOSEnter = 0);
        if (
          e.state.selection.anchor > v.start &&
          (function (e, t, n, o, i) {
            if (n - t <= i.pos - o.pos || pn(o, !0, !1) < i.pos) return !1;
            let r = e.resolve(t);
            if (!o.parent.isTextblock) {
              let e = r.nodeAfter;
              return null != e && n == t + e.nodeSize;
            }
            if (r.parentOffset < r.parent.content.size || !r.parent.isTextblock)
              return !1;
            let s = e.resolve(pn(r, !0, !0));
            return (
              !(!s.parent.isTextblock || s.pos > n || pn(s, !0, !1) < n) &&
              o.parent.content.cut(o.parentOffset).eq(s.parent.content)
            );
          })(u, v.start, v.endA, w, D) &&
          e.someProp("handleKeyDown", (t) => t(e, g(8, "Backspace")))
        )
          return void (V && x && e.domObserver.suppressSelectionUpdates());
        x && V && v.endB == v.start && (e.input.lastAndroidDelete = Date.now()),
          V &&
            !O &&
            w.start() != D.start() &&
            0 == D.parentOffset &&
            w.depth == D.depth &&
            f.sel &&
            f.sel.anchor == f.sel.head &&
            f.sel.head == v.endA &&
            ((v.endB -= 2),
            (D = f.doc.resolveNoCache(v.endB - f.from)),
            setTimeout(() => {
              e.someProp("handleKeyDown", function (t) {
                return t(e, g(13, "Enter"));
              });
            }, 20));
        let M,
          k,
          T,
          A = v.start,
          P = v.endA;
        if (O)
          if (w.pos == D.pos)
            N &&
              S <= 11 &&
              0 == w.parentOffset &&
              (e.domObserver.suppressSelectionUpdates(),
              setTimeout(() => ke(e), 20)),
              (M = e.state.tr.delete(A, P)),
              (k = u.resolve(v.start).marksAcross(u.resolve(v.endA)));
          else if (
            v.endA == v.endB &&
            (T = (function (e, t) {
              let n,
                o,
                r,
                s = e.firstChild.marks,
                l = t.firstChild.marks,
                d = s,
                a = l;
              for (let e = 0; e < l.length; e++) d = l[e].removeFromSet(d);
              for (let e = 0; e < s.length; e++) a = s[e].removeFromSet(a);
              if (1 == d.length && 0 == a.length)
                (o = d[0]),
                  (n = "add"),
                  (r = (e) => e.mark(o.addToSet(e.marks)));
              else {
                if (0 != d.length || 1 != a.length) return null;
                (o = a[0]),
                  (n = "remove"),
                  (r = (e) => e.mark(o.removeFromSet(e.marks)));
              }
              let c = [];
              for (let e = 0; e < t.childCount; e++) c.push(r(t.child(e)));
              if (i.FK.from(c).eq(e)) return { mark: o, type: n };
            })(
              w.parent.content.cut(w.parentOffset, D.parentOffset),
              C.parent.content.cut(C.parentOffset, v.endA - C.start()),
            ))
          )
            (M = e.state.tr),
              "add" == T.type
                ? M.addMark(A, P, T.mark)
                : M.removeMark(A, P, T.mark);
          else if (
            w.parent.child(w.index()).isText &&
            w.index() == D.index() - (D.textOffset ? 0 : 1)
          ) {
            let t = w.parent.textBetween(w.parentOffset, D.parentOffset);
            if (e.someProp("handleTextInput", (n) => n(e, A, P, t))) return;
            M = e.state.tr.insertText(t, A, P);
          }
        if (
          (M ||
            (M = e.state.tr.replace(
              A,
              P,
              f.doc.slice(v.start - f.from, v.endB - f.from),
            )),
          f.sel)
        ) {
          let t = hn(e, M.doc, f.sel);
          t &&
            !(
              (x &&
                V &&
                e.composing &&
                t.empty &&
                (v.start != v.endB ||
                  e.input.lastAndroidDelete < Date.now() - 100) &&
                (t.head == A || t.head == M.mapping.map(P) - 1)) ||
              (N && t.empty && t.head == A)
            ) &&
            M.setSelection(t);
        }
        k && M.ensureMarks(k),
          l && M.setMeta("composition", l),
          e.dispatch(M.scrollIntoView());
      }
      function hn(e, t, n) {
        return Math.max(n.anchor, n.head) > t.content.size
          ? null
          : Ie(e, t.resolve(n.anchor), t.resolve(n.head));
      }
      function pn(e, t, n) {
        let o = e.depth,
          i = t ? e.end() : e.pos;
        for (; o > 0 && (t || e.indexAfter(o) == e.node(o).childCount); )
          o--, i++, (t = !1);
        if (n) {
          let t = e.node(o).maybeChild(e.indexAfter(o));
          for (; t && !t.isLeaf; ) (t = t.firstChild), i++;
        }
        return i;
      }
      function fn(e) {
        if (2 != e.length) return !1;
        let t = e.charCodeAt(0),
          n = e.charCodeAt(1);
        return t >= 56320 && t <= 57343 && n >= 55296 && n <= 56319;
      }
      class un {
        constructor(e, t) {
          (this._root = null),
            (this.focused = !1),
            (this.trackWrites = null),
            (this.mounted = !1),
            (this.markCursor = null),
            (this.cursorWrapper = null),
            (this.lastSelectedViewDesc = void 0),
            (this.input = new ht()),
            (this.prevDirectPlugins = []),
            (this.pluginViews = []),
            (this.requiresGeckoHackNode = !1),
            (this.dragging = null),
            (this._props = t),
            (this.state = t.state),
            (this.directPlugins = t.plugins || []),
            this.directPlugins.forEach(bn),
            (this.dispatch = this.dispatch.bind(this)),
            (this.dom = (e && e.mount) || document.createElement("div")),
            e &&
              (e.appendChild
                ? e.appendChild(this.dom)
                : "function" == typeof e
                  ? e(this.dom)
                  : e.mount && (this.mounted = !0)),
            (this.editable = yn(this)),
            gn(this),
            (this.nodeViews = vn(this)),
            (this.docView = ce(
              this.state.doc,
              mn(this),
              Qt(this),
              this.dom,
              this,
            )),
            (this.domObserver = new on(this, (e, t, n, o) =>
              cn(this, e, t, n, o),
            )),
            this.domObserver.start(),
            (function (e) {
              for (let t in dt) {
                let n = dt[t];
                e.dom.addEventListener(
                  t,
                  (e.input.eventHandlers[t] = (t) => {
                    !mt(e, t) ||
                      ut(e, t) ||
                      (!e.editable && t.type in at) ||
                      n(e, t);
                  }),
                  ct[t] ? { passive: !0 } : void 0,
                );
              }
              T && e.dom.addEventListener("input", () => null), ft(e);
            })(this),
            this.updatePluginViews();
        }
        get composing() {
          return this.input.composing;
        }
        get props() {
          if (this._props.state != this.state) {
            let e = this._props;
            this._props = {};
            for (let t in e) this._props[t] = e[t];
            this._props.state = this.state;
          }
          return this._props;
        }
        update(e) {
          e.handleDOMEvents != this._props.handleDOMEvents && ft(this);
          let t = this._props;
          (this._props = e),
            e.plugins &&
              (e.plugins.forEach(bn), (this.directPlugins = e.plugins)),
            this.updateStateInner(e.state, t);
        }
        setProps(e) {
          let t = {};
          for (let e in this._props) t[e] = this._props[e];
          t.state = this.state;
          for (let n in e) t[n] = e[n];
          this.update(t);
        }
        updateState(e) {
          this.updateStateInner(e, this._props);
        }
        updateStateInner(e, t) {
          var n;
          let o = this.state,
            i = !1,
            r = !1;
          e.storedMarks && this.composing && (kt(this), (r = !0)),
            (this.state = e);
          let s = o.plugins != e.plugins || this._props.plugins != t.plugins;
          if (
            s ||
            this._props.plugins != t.plugins ||
            this._props.nodeViews != t.nodeViews
          ) {
            let e = vn(this);
            (function (e, t) {
              let n = 0,
                o = 0;
              for (let o in e) {
                if (e[o] != t[o]) return !0;
                n++;
              }
              for (let e in t) o++;
              return n != o;
            })(e, this.nodeViews) && ((this.nodeViews = e), (i = !0));
          }
          (s || t.handleDOMEvents != this._props.handleDOMEvents) && ft(this),
            (this.editable = yn(this)),
            gn(this);
          let l = Qt(this),
            d = mn(this),
            a =
              o.plugins == e.plugins || o.doc.eq(e.doc)
                ? e.scrollToSelection > o.scrollToSelection
                  ? "to selection"
                  : "preserve"
                : "reset",
            h = i || !this.docView.matchesNode(e.doc, d, l);
          (!h && e.selection.eq(o.selection)) || (r = !0);
          let p =
            "preserve" == a &&
            r &&
            null == this.dom.style.overflowAnchor &&
            (function (e) {
              let t,
                n,
                o = e.dom.getBoundingClientRect(),
                i = Math.max(0, o.top);
              for (
                let r = (o.left + o.right) / 2, s = i + 1;
                s < Math.min(innerHeight, o.bottom);
                s += 5
              ) {
                let o = e.root.elementFromPoint(r, s);
                if (!o || o == e.dom || !e.dom.contains(o)) continue;
                let l = o.getBoundingClientRect();
                if (l.top >= i - 20) {
                  (t = o), (n = l.top);
                  break;
                }
              }
              return { refDOM: t, refTop: n, stack: L(e.dom) };
            })(this);
          if (r) {
            this.domObserver.stop();
            let t =
              h &&
              (N || x) &&
              !this.composing &&
              !o.selection.empty &&
              !e.selection.empty &&
              (function (e, t) {
                let n = Math.min(
                  e.$anchor.sharedDepth(e.head),
                  t.$anchor.sharedDepth(t.head),
                );
                return e.$anchor.start(n) != t.$anchor.start(n);
              })(o.selection, e.selection);
            if (h) {
              let n = x
                ? (this.trackWrites = this.domSelectionRange().focusNode)
                : null;
              this.composing && (this.input.compositionNode = Tt(this)),
                (!i && this.docView.update(e.doc, d, l, this)) ||
                  (this.docView.updateOuterDeco(d),
                  this.docView.destroy(),
                  (this.docView = ce(e.doc, d, l, this.dom, this))),
                n && !this.trackWrites && (t = !0);
            }
            t ||
            !(
              this.input.mouseDown &&
              this.domObserver.currentSelection.eq(this.domSelectionRange()) &&
              (function (e) {
                let t = e.docView.domFromPos(e.state.selection.anchor, 0),
                  n = e.domSelectionRange();
                return c(t.node, t.offset, n.anchorNode, n.anchorOffset);
              })(this)
            )
              ? ke(this, t)
              : (Ve(this, e.selection), this.domObserver.setCurSelection()),
              this.domObserver.start();
          }
          this.updatePluginViews(o),
            (null === (n = this.dragging) || void 0 === n ? void 0 : n.node) &&
              !o.doc.eq(e.doc) &&
              this.updateDraggedNode(this.dragging, o),
            "reset" == a
              ? (this.dom.scrollTop = 0)
              : "to selection" == a
                ? this.scrollToSelection()
                : p &&
                  (function ({ refDOM: e, refTop: t, stack: n }) {
                    let o = e ? e.getBoundingClientRect().top : 0;
                    $(n, 0 == o ? 0 : o - t);
                  })(p);
        }
        scrollToSelection() {
          let e = this.domSelectionRange().focusNode;
          if (this.someProp("handleScrollToSelection", (e) => e(this)));
          else if (this.state.selection instanceof o.nh) {
            let t = this.docView.domAfterPos(this.state.selection.from);
            1 == t.nodeType && z(this, t.getBoundingClientRect(), e);
          } else z(this, this.coordsAtPos(this.state.selection.head, 1), e);
        }
        destroyPluginViews() {
          let e;
          for (; (e = this.pluginViews.pop()); ) e.destroy && e.destroy();
        }
        updatePluginViews(e) {
          if (
            e &&
            e.plugins == this.state.plugins &&
            this.directPlugins == this.prevDirectPlugins
          )
            for (let t = 0; t < this.pluginViews.length; t++) {
              let n = this.pluginViews[t];
              n.update && n.update(this, e);
            }
          else {
            (this.prevDirectPlugins = this.directPlugins),
              this.destroyPluginViews();
            for (let e = 0; e < this.directPlugins.length; e++) {
              let t = this.directPlugins[e];
              t.spec.view && this.pluginViews.push(t.spec.view(this));
            }
            for (let e = 0; e < this.state.plugins.length; e++) {
              let t = this.state.plugins[e];
              t.spec.view && this.pluginViews.push(t.spec.view(this));
            }
          }
        }
        updateDraggedNode(e, t) {
          let n = e.node,
            i = -1;
          if (this.state.doc.nodeAt(n.from) == n.node) i = n.from;
          else {
            let e = n.from + (this.state.doc.content.size - t.doc.content.size);
            (e > 0 && this.state.doc.nodeAt(e)) == n.node && (i = e);
          }
          this.dragging = new Rt(
            e.slice,
            e.move,
            i < 0 ? void 0 : o.nh.create(this.state.doc, i),
          );
        }
        someProp(e, t) {
          let n,
            o = this._props && this._props[e];
          if (null != o && (n = t ? t(o) : o)) return n;
          for (let o = 0; o < this.directPlugins.length; o++) {
            let i = this.directPlugins[o].props[e];
            if (null != i && (n = t ? t(i) : i)) return n;
          }
          let i = this.state.plugins;
          if (i)
            for (let o = 0; o < i.length; o++) {
              let r = i[o].props[e];
              if (null != r && (n = t ? t(r) : r)) return n;
            }
        }
        hasFocus() {
          if (N) {
            let e = this.root.activeElement;
            if (e == this.dom) return !0;
            if (!e || !this.dom.contains(e)) return !1;
            for (; e && this.dom != e && this.dom.contains(e); ) {
              if ("false" == e.contentEditable) return !1;
              e = e.parentElement;
            }
            return !0;
          }
          return this.root.activeElement == this.dom;
        }
        focus() {
          this.domObserver.stop(),
            this.editable &&
              (function (e) {
                if (e.setActive) return e.setActive();
                if (q) return e.focus(q);
                let t = L(e);
                e.focus(
                  null == q
                    ? {
                        get preventScroll() {
                          return (q = { preventScroll: !0 }), !0;
                        },
                      }
                    : void 0,
                ),
                  q || ((q = !1), $(t, 0));
              })(this.dom),
            ke(this),
            this.domObserver.start();
        }
        get root() {
          let e = this._root;
          if (null == e)
            for (let e = this.dom.parentNode; e; e = e.parentNode)
              if (9 == e.nodeType || (11 == e.nodeType && e.host))
                return (
                  e.getSelection ||
                    (Object.getPrototypeOf(e).getSelection = () =>
                      e.ownerDocument.getSelection()),
                  (this._root = e)
                );
          return e || document;
        }
        updateRoot() {
          this._root = null;
        }
        posAtCoords(e) {
          return H(this, e);
        }
        coordsAtPos(e, t = 1) {
          return X(this, e, t);
        }
        domAtPos(e, t = 0) {
          return this.docView.domFromPos(e, t);
        }
        nodeDOM(e) {
          let t = this.docView.descAt(e);
          return t ? t.nodeDOM : null;
        }
        posAtDOM(e, t, n = -1) {
          let o = this.docView.posFromDOM(e, t, n);
          if (null == o)
            throw new RangeError("DOM position not inside the editor");
          return o;
        }
        endOfTextblock(e, t) {
          return ie(this, t || this.state, e);
        }
        pasteHTML(e, t) {
          return Pt(this, "", e, !1, t || new ClipboardEvent("paste"));
        }
        pasteText(e, t) {
          return Pt(this, e, null, !0, t || new ClipboardEvent("paste"));
        }
        destroy() {
          this.docView &&
            (!(function (e) {
              e.domObserver.stop();
              for (let t in e.input.eventHandlers)
                e.dom.removeEventListener(t, e.input.eventHandlers[t]);
              clearTimeout(e.input.composingTimeout),
                clearTimeout(e.input.lastIOSEnterFallbackTimeout);
            })(this),
            this.destroyPluginViews(),
            this.mounted
              ? (this.docView.update(this.state.doc, [], Qt(this), this),
                (this.dom.textContent = ""))
              : this.dom.parentNode &&
                this.dom.parentNode.removeChild(this.dom),
            this.docView.destroy(),
            (this.docView = null),
            (d = null));
        }
        get isDestroyed() {
          return null == this.docView;
        }
        dispatchEvent(e) {
          return (function (e, t) {
            ut(e, t) ||
              !dt[t.type] ||
              (!e.editable && t.type in at) ||
              dt[t.type](e, t);
          })(this, e);
        }
        dispatch(e) {
          let t = this._props.dispatchTransaction;
          t ? t.call(this, e) : this.updateState(this.state.apply(e));
        }
        domSelectionRange() {
          let e = this.domSelection();
          return (
            (T &&
              11 === this.root.nodeType &&
              (function (e) {
                let t = e.activeElement;
                for (; t && t.shadowRoot; ) t = t.shadowRoot.activeElement;
                return t;
              })(this.dom.ownerDocument) == this.dom &&
              (function (e, t) {
                if (t.getComposedRanges) {
                  let n = t.getComposedRanges(e.root)[0];
                  if (n) return ln(e, n);
                }
                let n;
                function o(e) {
                  e.preventDefault(),
                    e.stopImmediatePropagation(),
                    (n = e.getTargetRanges()[0]);
                }
                return (
                  e.dom.addEventListener("beforeinput", o, !0),
                  document.execCommand("indent"),
                  e.dom.removeEventListener("beforeinput", o, !0),
                  n ? ln(e, n) : null
                );
              })(this, e)) ||
            e
          );
        }
        domSelection() {
          return this.root.getSelection();
        }
      }
      function mn(e) {
        let t = Object.create(null);
        return (
          (t.class = "ProseMirror"),
          (t.contenteditable = String(e.editable)),
          e.someProp("attributes", (n) => {
            if (("function" == typeof n && (n = n(e.state)), n))
              for (let e in n)
                "class" == e
                  ? (t.class += " " + n[e])
                  : "style" == e
                    ? (t.style = (t.style ? t.style + ";" : "") + n[e])
                    : t[e] ||
                      "contenteditable" == e ||
                      "nodeName" == e ||
                      (t[e] = String(n[e]));
          }),
          t.translate || (t.translate = "no"),
          [Lt.node(0, e.state.doc.content.size, t)]
        );
      }
      function gn(e) {
        if (e.markCursor) {
          let t = document.createElement("img");
          (t.className = "ProseMirror-separator"),
            t.setAttribute("mark-placeholder", "true"),
            t.setAttribute("alt", ""),
            (e.cursorWrapper = {
              dom: t,
              deco: Lt.widget(e.state.selection.head, t, {
                raw: !0,
                marks: e.markCursor,
              }),
            });
        } else e.cursorWrapper = null;
      }
      function yn(e) {
        return !e.someProp("editable", (t) => !1 === t(e.state));
      }
      function vn(e) {
        let t = Object.create(null);
        function n(e) {
          for (let n in e)
            Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n]);
        }
        return e.someProp("nodeViews", n), e.someProp("markViews", n), t;
      }
      function bn(e) {
        if (
          e.spec.state ||
          e.spec.filterTransaction ||
          e.spec.appendTransaction
        )
          throw new RangeError(
            "Plugins passed directly to the view must not have a state component",
          );
      }
    },
    98724: (e, t, n) => {
      n.d(t, {
        b6: () => D,
        ZS: () => S,
        mL: () => M,
        tN: () => N,
        mk: () => O,
      });
      var o = 200,
        i = function () {};
      (i.prototype.append = function (e) {
        return e.length
          ? ((e = i.from(e)),
            (!this.length && e) ||
              (e.length < o && this.leafAppend(e)) ||
              (this.length < o && e.leafPrepend(this)) ||
              this.appendInner(e))
          : this;
      }),
        (i.prototype.prepend = function (e) {
          return e.length ? i.from(e).append(this) : this;
        }),
        (i.prototype.appendInner = function (e) {
          return new s(this, e);
        }),
        (i.prototype.slice = function (e, t) {
          return (
            void 0 === e && (e = 0),
            void 0 === t && (t = this.length),
            e >= t
              ? i.empty
              : this.sliceInner(Math.max(0, e), Math.min(this.length, t))
          );
        }),
        (i.prototype.get = function (e) {
          if (!(e < 0 || e >= this.length)) return this.getInner(e);
        }),
        (i.prototype.forEach = function (e, t, n) {
          void 0 === t && (t = 0),
            void 0 === n && (n = this.length),
            t <= n
              ? this.forEachInner(e, t, n, 0)
              : this.forEachInvertedInner(e, t, n, 0);
        }),
        (i.prototype.map = function (e, t, n) {
          void 0 === t && (t = 0), void 0 === n && (n = this.length);
          var o = [];
          return (
            this.forEach(
              function (t, n) {
                return o.push(e(t, n));
              },
              t,
              n,
            ),
            o
          );
        }),
        (i.from = function (e) {
          return e instanceof i ? e : e && e.length ? new r(e) : i.empty;
        });
      var r = (function (e) {
        function t(t) {
          e.call(this), (this.values = t);
        }
        e && (t.__proto__ = e),
          (t.prototype = Object.create(e && e.prototype)),
          (t.prototype.constructor = t);
        var n = { length: { configurable: !0 }, depth: { configurable: !0 } };
        return (
          (t.prototype.flatten = function () {
            return this.values;
          }),
          (t.prototype.sliceInner = function (e, n) {
            return 0 == e && n == this.length
              ? this
              : new t(this.values.slice(e, n));
          }),
          (t.prototype.getInner = function (e) {
            return this.values[e];
          }),
          (t.prototype.forEachInner = function (e, t, n, o) {
            for (var i = t; i < n; i++)
              if (!1 === e(this.values[i], o + i)) return !1;
          }),
          (t.prototype.forEachInvertedInner = function (e, t, n, o) {
            for (var i = t - 1; i >= n; i--)
              if (!1 === e(this.values[i], o + i)) return !1;
          }),
          (t.prototype.leafAppend = function (e) {
            if (this.length + e.length <= o)
              return new t(this.values.concat(e.flatten()));
          }),
          (t.prototype.leafPrepend = function (e) {
            if (this.length + e.length <= o)
              return new t(e.flatten().concat(this.values));
          }),
          (n.length.get = function () {
            return this.values.length;
          }),
          (n.depth.get = function () {
            return 0;
          }),
          Object.defineProperties(t.prototype, n),
          t
        );
      })(i);
      i.empty = new r([]);
      var s = (function (e) {
        function t(t, n) {
          e.call(this),
            (this.left = t),
            (this.right = n),
            (this.length = t.length + n.length),
            (this.depth = Math.max(t.depth, n.depth) + 1);
        }
        return (
          e && (t.__proto__ = e),
          (t.prototype = Object.create(e && e.prototype)),
          (t.prototype.constructor = t),
          (t.prototype.flatten = function () {
            return this.left.flatten().concat(this.right.flatten());
          }),
          (t.prototype.getInner = function (e) {
            return e < this.left.length
              ? this.left.get(e)
              : this.right.get(e - this.left.length);
          }),
          (t.prototype.forEachInner = function (e, t, n, o) {
            var i = this.left.length;
            return (
              !(
                t < i && !1 === this.left.forEachInner(e, t, Math.min(n, i), o)
              ) &&
              !(
                n > i &&
                !1 ===
                  this.right.forEachInner(
                    e,
                    Math.max(t - i, 0),
                    Math.min(this.length, n) - i,
                    o + i,
                  )
              ) &&
              void 0
            );
          }),
          (t.prototype.forEachInvertedInner = function (e, t, n, o) {
            var i = this.left.length;
            return (
              !(
                t > i &&
                !1 ===
                  this.right.forEachInvertedInner(
                    e,
                    t - i,
                    Math.max(n, i) - i,
                    o + i,
                  )
              ) &&
              !(
                n < i &&
                !1 === this.left.forEachInvertedInner(e, Math.min(t, i), n, o)
              ) &&
              void 0
            );
          }),
          (t.prototype.sliceInner = function (e, t) {
            if (0 == e && t == this.length) return this;
            var n = this.left.length;
            return t <= n
              ? this.left.slice(e, t)
              : e >= n
                ? this.right.slice(e - n, t - n)
                : this.left.slice(e, n).append(this.right.slice(0, t - n));
          }),
          (t.prototype.leafAppend = function (e) {
            var n = this.right.leafAppend(e);
            if (n) return new t(this.left, n);
          }),
          (t.prototype.leafPrepend = function (e) {
            var n = this.left.leafPrepend(e);
            if (n) return new t(n, this.right);
          }),
          (t.prototype.appendInner = function (e) {
            return this.left.depth >= Math.max(this.right.depth, e.depth) + 1
              ? new t(this.left, new t(this.right, e))
              : new t(this, e);
          }),
          t
        );
      })(i);
      const l = i;
      var d = n(63734),
        a = n(52893);
      class c {
        constructor(e, t) {
          (this.items = e), (this.eventCount = t);
        }
        popEvent(e, t) {
          if (0 == this.eventCount) return null;
          let n,
            o,
            i = this.items.length;
          for (; ; i--) {
            if (this.items.get(i - 1).selection) {
              --i;
              break;
            }
          }
          t &&
            ((n = this.remapping(i, this.items.length)), (o = n.maps.length));
          let r,
            s,
            l = e.tr,
            d = [],
            a = [];
          return (
            this.items.forEach(
              (e, t) => {
                if (!e.step)
                  return (
                    n || ((n = this.remapping(i, t + 1)), (o = n.maps.length)),
                    o--,
                    void a.push(e)
                  );
                if (n) {
                  a.push(new h(e.map));
                  let t,
                    i = e.step.map(n.slice(o));
                  i &&
                    l.maybeStep(i).doc &&
                    ((t = l.mapping.maps[l.mapping.maps.length - 1]),
                    d.push(new h(t, void 0, void 0, d.length + a.length))),
                    o--,
                    t && n.appendMap(t, o);
                } else l.maybeStep(e.step);
                return e.selection
                  ? ((r = n ? e.selection.map(n.slice(o)) : e.selection),
                    (s = new c(
                      this.items.slice(0, i).append(a.reverse().concat(d)),
                      this.eventCount - 1,
                    )),
                    !1)
                  : void 0;
              },
              this.items.length,
              0,
            ),
            { remaining: s, transform: l, selection: r }
          );
        }
        addTransform(e, t, n, o) {
          let i = [],
            r = this.eventCount,
            s = this.items,
            l = !o && s.length ? s.get(s.length - 1) : null;
          for (let n = 0; n < e.steps.length; n++) {
            let d,
              a = e.steps[n].invert(e.docs[n]),
              c = new h(e.mapping.maps[n], a, t);
            (d = l && l.merge(c)) &&
              ((c = d), n ? i.pop() : (s = s.slice(0, s.length - 1))),
              i.push(c),
              t && (r++, (t = void 0)),
              o || (l = c);
          }
          let d = r - n.depth;
          return (
            d > f &&
              ((s = (function (e, t) {
                let n;
                return (
                  e.forEach((e, o) => {
                    if (e.selection && 0 == t--) return (n = o), !1;
                  }),
                  e.slice(n)
                );
              })(s, d)),
              (r -= d)),
            new c(s.append(i), r)
          );
        }
        remapping(e, t) {
          let n = new d.X9();
          return (
            this.items.forEach(
              (t, o) => {
                let i =
                  null != t.mirrorOffset && o - t.mirrorOffset >= e
                    ? n.maps.length - t.mirrorOffset
                    : void 0;
                n.appendMap(t.map, i);
              },
              e,
              t,
            ),
            n
          );
        }
        addMaps(e) {
          return 0 == this.eventCount
            ? this
            : new c(this.items.append(e.map((e) => new h(e))), this.eventCount);
        }
        rebased(e, t) {
          if (!this.eventCount) return this;
          let n = [],
            o = Math.max(0, this.items.length - t),
            i = e.mapping,
            r = e.steps.length,
            s = this.eventCount;
          this.items.forEach((e) => {
            e.selection && s--;
          }, o);
          let l = t;
          this.items.forEach((t) => {
            let o = i.getMirror(--l);
            if (null == o) return;
            r = Math.min(r, o);
            let d = i.maps[o];
            if (t.step) {
              let r = e.steps[o].invert(e.docs[o]),
                a = t.selection && t.selection.map(i.slice(l + 1, o));
              a && s++, n.push(new h(d, r, a));
            } else n.push(new h(d));
          }, o);
          let d = [];
          for (let e = t; e < r; e++) d.push(new h(i.maps[e]));
          let a = this.items.slice(0, o).append(d).append(n),
            p = new c(a, s);
          return (
            p.emptyItemCount() > 500 &&
              (p = p.compress(this.items.length - n.length)),
            p
          );
        }
        emptyItemCount() {
          let e = 0;
          return (
            this.items.forEach((t) => {
              t.step || e++;
            }),
            e
          );
        }
        compress(e = this.items.length) {
          let t = this.remapping(0, e),
            n = t.maps.length,
            o = [],
            i = 0;
          return (
            this.items.forEach(
              (r, s) => {
                if (s >= e) o.push(r), r.selection && i++;
                else if (r.step) {
                  let e = r.step.map(t.slice(n)),
                    s = e && e.getMap();
                  if ((n--, s && t.appendMap(s, n), e)) {
                    let l = r.selection && r.selection.map(t.slice(n));
                    l && i++;
                    let d,
                      a = new h(s.invert(), e, l),
                      c = o.length - 1;
                    (d = o.length && o[c].merge(a)) ? (o[c] = d) : o.push(a);
                  }
                } else r.map && n--;
              },
              this.items.length,
              0,
            ),
            new c(l.from(o.reverse()), i)
          );
        }
      }
      c.empty = new c(l.empty, 0);
      class h {
        constructor(e, t, n, o) {
          (this.map = e),
            (this.step = t),
            (this.selection = n),
            (this.mirrorOffset = o);
        }
        merge(e) {
          if (this.step && e.step && !e.selection) {
            let t = e.step.merge(this.step);
            if (t) return new h(t.getMap().invert(), t, this.selection);
          }
        }
      }
      class p {
        constructor(e, t, n, o, i) {
          (this.done = e),
            (this.undone = t),
            (this.prevRanges = n),
            (this.prevTime = o),
            (this.prevComposition = i);
        }
      }
      const f = 20;
      function u(e) {
        let t = [];
        return e.forEach((e, n, o, i) => t.push(o, i)), t;
      }
      function m(e, t) {
        if (!e) return null;
        let n = [];
        for (let o = 0; o < e.length; o += 2) {
          let i = t.map(e[o], 1),
            r = t.map(e[o + 1], -1);
          i <= r && n.push(i, r);
        }
        return n;
      }
      let g = !1,
        y = null;
      function v(e) {
        let t = e.plugins;
        if (y != t) {
          (g = !1), (y = t);
          for (let e = 0; e < t.length; e++)
            if (t[e].spec.historyPreserveItems) {
              g = !0;
              break;
            }
        }
        return g;
      }
      const b = new a.hs("history"),
        w = new a.hs("closeHistory");
      function D(e = {}) {
        return (
          (e = {
            depth: e.depth || 100,
            newGroupDelay: e.newGroupDelay || 500,
          }),
          new a.k_({
            key: b,
            state: {
              init: () => new p(c.empty, c.empty, null, 0, -1),
              apply: (t, n, o) =>
                (function (e, t, n, o) {
                  let i,
                    r = n.getMeta(b);
                  if (r) return r.historyState;
                  n.getMeta(w) && (e = new p(e.done, e.undone, null, 0, -1));
                  let s = n.getMeta("appendedTransaction");
                  if (0 == n.steps.length) return e;
                  if (s && s.getMeta(b))
                    return s.getMeta(b).redo
                      ? new p(
                          e.done.addTransform(n, void 0, o, v(t)),
                          e.undone,
                          u(n.mapping.maps[n.steps.length - 1]),
                          e.prevTime,
                          e.prevComposition,
                        )
                      : new p(
                          e.done,
                          e.undone.addTransform(n, void 0, o, v(t)),
                          null,
                          e.prevTime,
                          e.prevComposition,
                        );
                  if (
                    !1 === n.getMeta("addToHistory") ||
                    (s && !1 === s.getMeta("addToHistory"))
                  )
                    return (i = n.getMeta("rebased"))
                      ? new p(
                          e.done.rebased(n, i),
                          e.undone.rebased(n, i),
                          m(e.prevRanges, n.mapping),
                          e.prevTime,
                          e.prevComposition,
                        )
                      : new p(
                          e.done.addMaps(n.mapping.maps),
                          e.undone.addMaps(n.mapping.maps),
                          m(e.prevRanges, n.mapping),
                          e.prevTime,
                          e.prevComposition,
                        );
                  {
                    let i = n.getMeta("composition"),
                      r =
                        0 == e.prevTime ||
                        (!s &&
                          e.prevComposition != i &&
                          (e.prevTime < (n.time || 0) - o.newGroupDelay ||
                            !(function (e, t) {
                              if (!t) return !1;
                              if (!e.docChanged) return !0;
                              let n = !1;
                              return (
                                e.mapping.maps[0].forEach((e, o) => {
                                  for (let i = 0; i < t.length; i += 2)
                                    e <= t[i + 1] && o >= t[i] && (n = !0);
                                }),
                                n
                              );
                            })(n, e.prevRanges))),
                      l = s
                        ? m(e.prevRanges, n.mapping)
                        : u(n.mapping.maps[n.steps.length - 1]);
                    return new p(
                      e.done.addTransform(
                        n,
                        r ? t.selection.getBookmark() : void 0,
                        o,
                        v(t),
                      ),
                      c.empty,
                      l,
                      n.time,
                      null == i ? e.prevComposition : i,
                    );
                  }
                })(n, o, t, e),
            },
            config: e,
            props: {
              handleDOMEvents: {
                beforeinput(e, t) {
                  let n = t.inputType,
                    o = "historyUndo" == n ? N : "historyRedo" == n ? S : null;
                  return !!o && (t.preventDefault(), o(e.state, e.dispatch));
                },
              },
            },
          })
        );
      }
      function C(e, t) {
        return (n, o) => {
          let i = b.getState(n);
          if (!i || 0 == (e ? i.undone : i.done).eventCount) return !1;
          if (o) {
            let r = (function (e, t, n) {
              let o = v(t),
                i = b.get(t).spec.config,
                r = (n ? e.undone : e.done).popEvent(t, o);
              if (!r) return null;
              let s = r.selection.resolve(r.transform.doc),
                l = (n ? e.done : e.undone).addTransform(
                  r.transform,
                  t.selection.getBookmark(),
                  i,
                  o,
                ),
                d = new p(
                  n ? l : r.remaining,
                  n ? r.remaining : l,
                  null,
                  0,
                  -1,
                );
              return r.transform
                .setSelection(s)
                .setMeta(b, { redo: n, historyState: d });
            })(i, n, e);
            r && o(t ? r.scrollIntoView() : r);
          }
          return !0;
        };
      }
      const N = C(!1, !0),
        S = C(!0, !0);
      C(!1, !1), C(!0, !1);
      function O(e) {
        let t = b.getState(e);
        return t ? t.done.eventCount : 0;
      }
      function M(e) {
        let t = b.getState(e);
        return t ? t.undone.eventCount : 0;
      }
    },
  },
]);
