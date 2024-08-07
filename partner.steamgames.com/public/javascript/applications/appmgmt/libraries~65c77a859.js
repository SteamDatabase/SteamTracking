/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6995],
  {
    12362: (t, e, n) => {
      n.d(e, {
        I$: () => d,
        RV: () => T,
        st: () => v,
        wh: () => S,
        y_: () => x,
      });
      var r = n(63734),
        i = n(57053),
        s = n(52893);
      const o = (t, e) =>
        !t.selection.empty &&
        (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
      function l(t, e) {
        let { $cursor: n } = t.selection;
        return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0)
          ? null
          : n;
      }
      function h(t, e, n = !1) {
        for (let r = t; r; r = "start" == e ? r.firstChild : r.lastChild) {
          if (r.isTextblock) return !0;
          if (n && 1 != r.childCount) return !1;
        }
        return !1;
      }
      function a(t) {
        if (!t.parent.type.spec.isolating)
          for (let e = t.depth - 1; e >= 0; e--) {
            if (t.index(e) > 0) return t.doc.resolve(t.before(e + 1));
            if (t.node(e).type.spec.isolating) break;
          }
        return null;
      }
      function c(t, e) {
        let { $cursor: n } = t.selection;
        return !n ||
          (e
            ? !e.endOfTextblock("forward", t)
            : n.parentOffset < n.parent.content.size)
          ? null
          : n;
      }
      function p(t) {
        if (!t.parent.type.spec.isolating)
          for (let e = t.depth - 1; e >= 0; e--) {
            let n = t.node(e);
            if (t.index(e) + 1 < n.childCount)
              return t.doc.resolve(t.after(e + 1));
            if (n.type.spec.isolating) break;
          }
        return null;
      }
      function f(t) {
        for (let e = 0; e < t.edgeCount; e++) {
          let { type: n } = t.edge(e);
          if (n.isTextblock && !n.hasRequiredAttrs()) return n;
        }
        return null;
      }
      const d = (t, e) => {
        let { $head: n, $anchor: r } = t.selection;
        if (!n.parent.type.spec.code || !n.sameParent(r)) return !1;
        let i = n.node(-1),
          o = n.indexAfter(-1),
          l = f(i.contentMatchAt(o));
        if (!l || !i.canReplaceWith(o, o, l)) return !1;
        if (e) {
          let r = n.after(),
            i = t.tr.replaceWith(r, r, l.createAndFill());
          i.setSelection(s.LN.near(i.doc.resolve(r), 1)), e(i.scrollIntoView());
        }
        return !0;
      };
      const u = (t, e) => {
        let { $from: n, $to: i } = t.selection;
        if (t.selection instanceof s.nh && t.selection.node.isBlock)
          return !(
            !n.parentOffset ||
            !(0, r.zy)(t.doc, n.pos) ||
            (e && e(t.tr.split(n.pos).scrollIntoView()), 0)
          );
        if (!n.parent.isBlock) return !1;
        if (e) {
          let o = i.parentOffset == i.parent.content.size,
            l = t.tr;
          (t.selection instanceof s.U3 || t.selection instanceof s.i5) &&
            l.deleteSelection();
          let h =
              0 == n.depth
                ? null
                : f(n.node(-1).contentMatchAt(n.indexAfter(-1))),
            a = m && m(i.parent, o),
            c = a ? [a] : o && h ? [{ type: h }] : void 0,
            p = (0, r.zy)(l.doc, l.mapping.map(n.pos), 1, c);
          if (
            (c ||
              p ||
              !(0, r.zy)(
                l.doc,
                l.mapping.map(n.pos),
                1,
                h ? [{ type: h }] : void 0,
              ) ||
              (h && (c = [{ type: h }]), (p = !0)),
            p &&
              (l.split(l.mapping.map(n.pos), 1, c),
              !o && !n.parentOffset && n.parent.type != h))
          ) {
            let t = l.mapping.map(n.before()),
              e = l.doc.resolve(t);
            h &&
              n.node(-1).canReplaceWith(e.index(), e.index() + 1, h) &&
              l.setNodeMarkup(l.mapping.map(n.before()), h);
          }
          e(l.scrollIntoView());
        }
        return !0;
      };
      var m;
      function g(t, e, n) {
        let o,
          l,
          a = e.nodeBefore,
          c = e.nodeAfter;
        if (a.type.spec.isolating || c.type.spec.isolating) return !1;
        if (
          (function (t, e, n) {
            let i = e.nodeBefore,
              s = e.nodeAfter,
              o = e.index();
            return !(
              !(i && s && i.type.compatibleContent(s.type)) ||
              (!i.content.size && e.parent.canReplace(o - 1, o)
                ? (n &&
                    n(t.tr.delete(e.pos - i.nodeSize, e.pos).scrollIntoView()),
                  0)
                : !e.parent.canReplace(o, o + 1) ||
                  (!s.isTextblock && !(0, r.n9)(t.doc, e.pos)) ||
                  (n &&
                    n(
                      t.tr
                        .clearIncompatible(
                          e.pos,
                          i.type,
                          i.contentMatchAt(i.childCount),
                        )
                        .join(e.pos)
                        .scrollIntoView(),
                    ),
                  0))
            );
          })(t, e, n)
        )
          return !0;
        let p = e.parent.canReplace(e.index(), e.index() + 1);
        if (
          p &&
          (o = (l = a.contentMatchAt(a.childCount)).findWrapping(c.type)) &&
          l.matchType(o[0] || c.type).validEnd
        ) {
          if (n) {
            let s = e.pos + c.nodeSize,
              l = i.FK.empty;
            for (let t = o.length - 1; t >= 0; t--)
              l = i.FK.from(o[t].create(null, l));
            l = i.FK.from(a.copy(l));
            let h = t.tr.step(
                new r.Wg(
                  e.pos - 1,
                  s,
                  e.pos,
                  s,
                  new i.Ji(l, 1, 0),
                  o.length,
                  !0,
                ),
              ),
              p = s + 2 * o.length;
            (0, r.n9)(h.doc, p) && h.join(p), n(h.scrollIntoView());
          }
          return !0;
        }
        let f = s.LN.findFrom(e, 1),
          d = f && f.$from.blockRange(f.$to),
          u = d && (0, r.jP)(d);
        if (null != u && u >= e.depth)
          return n && n(t.tr.lift(d, u).scrollIntoView()), !0;
        if (p && h(c, "start", !0) && h(a, "end")) {
          let s = a,
            o = [];
          for (; o.push(s), !s.isTextblock; ) s = s.lastChild;
          let l = c,
            h = 1;
          for (; !l.isTextblock; l = l.firstChild) h++;
          if (s.canReplace(s.childCount, s.childCount, l.content)) {
            if (n) {
              let s = i.FK.empty;
              for (let t = o.length - 1; t >= 0; t--)
                s = i.FK.from(o[t].copy(s));
              n(
                t.tr
                  .step(
                    new r.Wg(
                      e.pos - o.length,
                      e.pos + c.nodeSize,
                      e.pos + h,
                      e.pos + c.nodeSize - h,
                      new i.Ji(s, o.length, 0),
                      0,
                      !0,
                    ),
                  )
                  .scrollIntoView(),
              );
            }
            return !0;
          }
        }
        return !1;
      }
      function y(t) {
        return function (e, n) {
          let r = e.selection,
            i = t < 0 ? r.$from : r.$to,
            o = i.depth;
          for (; i.node(o).isInline; ) {
            if (!o) return !1;
            o--;
          }
          return (
            !!i.node(o).isTextblock &&
            (n &&
              n(
                e.tr.setSelection(
                  s.U3.create(e.doc, t < 0 ? i.start(o) : i.end(o)),
                ),
              ),
            !0)
          );
        };
      }
      const k = y(-1),
        w = y(1);
      function x(t, e = null) {
        return function (n, r) {
          let i = !1;
          for (let r = 0; r < n.selection.ranges.length && !i; r++) {
            let {
              $from: { pos: s },
              $to: { pos: o },
            } = n.selection.ranges[r];
            n.doc.nodesBetween(s, o, (r, s) => {
              if (i) return !1;
              if (r.isTextblock && !r.hasMarkup(t, e))
                if (r.type == t) i = !0;
                else {
                  let e = n.doc.resolve(s),
                    r = e.index();
                  i = e.parent.canReplaceWith(r, r + 1, t);
                }
            });
          }
          if (!i) return !1;
          if (r) {
            let i = n.tr;
            for (let r = 0; r < n.selection.ranges.length; r++) {
              let {
                $from: { pos: s },
                $to: { pos: o },
              } = n.selection.ranges[r];
              i.setBlockType(s, o, t, e);
            }
            r(i.scrollIntoView());
          }
          return !0;
        };
      }
      function S(t, e = null) {
        return function (n, r) {
          let { empty: i, $cursor: s, ranges: o } = n.selection;
          if (
            (i && !s) ||
            !(function (t, e, n) {
              for (let r = 0; r < e.length; r++) {
                let { $from: i, $to: s } = e[r],
                  o =
                    0 == i.depth && t.inlineContent && t.type.allowsMarkType(n);
                if (
                  (t.nodesBetween(i.pos, s.pos, (t) => {
                    if (o) return !1;
                    o = t.inlineContent && t.type.allowsMarkType(n);
                  }),
                  o)
                )
                  return !0;
              }
              return !1;
            })(n.doc, o, t)
          )
            return !1;
          if (r)
            if (s)
              t.isInSet(n.storedMarks || s.marks())
                ? r(n.tr.removeStoredMark(t))
                : r(n.tr.addStoredMark(t.create(e)));
            else {
              let i = !1,
                s = n.tr;
              for (let e = 0; !i && e < o.length; e++) {
                let { $from: r, $to: s } = o[e];
                i = n.doc.rangeHasMark(r.pos, s.pos, t);
              }
              for (let n = 0; n < o.length; n++) {
                let { $from: r, $to: l } = o[n];
                if (i) s.removeMark(r.pos, l.pos, t);
                else {
                  let n = r.pos,
                    i = l.pos,
                    o = r.nodeAfter,
                    h = l.nodeBefore,
                    a = o && o.isText ? /^\s*/.exec(o.text)[0].length : 0,
                    c = h && h.isText ? /\s*$/.exec(h.text)[0].length : 0;
                  n + a < i && ((n += a), (i -= c)),
                    s.addMark(n, i, t.create(e));
                }
              }
              r(s.scrollIntoView());
            }
          return !0;
        };
      }
      function v(...t) {
        return function (e, n, r) {
          for (let i = 0; i < t.length; i++) if (t[i](e, n, r)) return !0;
          return !1;
        };
      }
      let M = v(
          o,
          (t, e, n) => {
            let o = l(t, n);
            if (!o) return !1;
            let c = a(o);
            if (!c) {
              let n = o.blockRange(),
                i = n && (0, r.jP)(n);
              return (
                null != i && (e && e(t.tr.lift(n, i).scrollIntoView()), !0)
              );
            }
            let p = c.nodeBefore;
            if (!p.type.spec.isolating && g(t, c, e)) return !0;
            if (
              0 == o.parent.content.size &&
              (h(p, "end") || s.nh.isSelectable(p))
            ) {
              let n = (0, r.$L)(t.doc, o.before(), o.after(), i.Ji.empty);
              if (n && n.slice.size < n.to - n.from) {
                if (e) {
                  let r = t.tr.step(n);
                  r.setSelection(
                    h(p, "end")
                      ? s.LN.findFrom(
                          r.doc.resolve(r.mapping.map(c.pos, -1)),
                          -1,
                        )
                      : s.nh.create(r.doc, c.pos - p.nodeSize),
                  ),
                    e(r.scrollIntoView());
                }
                return !0;
              }
            }
            return (
              !(!p.isAtom || c.depth != o.depth - 1) &&
              (e && e(t.tr.delete(c.pos - p.nodeSize, c.pos).scrollIntoView()),
              !0)
            );
          },
          (t, e, n) => {
            let { $head: r, empty: i } = t.selection,
              o = r;
            if (!i) return !1;
            if (r.parent.isTextblock) {
              if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0)
                return !1;
              o = a(r);
            }
            let l = o && o.nodeBefore;
            return (
              !(!l || !s.nh.isSelectable(l)) &&
              (e &&
                e(
                  t.tr
                    .setSelection(s.nh.create(t.doc, o.pos - l.nodeSize))
                    .scrollIntoView(),
                ),
              !0)
            );
          },
        ),
        b = v(
          o,
          (t, e, n) => {
            let o = c(t, n);
            if (!o) return !1;
            let l = p(o);
            if (!l) return !1;
            let a = l.nodeAfter;
            if (g(t, l, e)) return !0;
            if (
              0 == o.parent.content.size &&
              (h(a, "start") || s.nh.isSelectable(a))
            ) {
              let n = (0, r.$L)(t.doc, o.before(), o.after(), i.Ji.empty);
              if (n && n.slice.size < n.to - n.from) {
                if (e) {
                  let r = t.tr.step(n);
                  r.setSelection(
                    h(a, "start")
                      ? s.LN.findFrom(r.doc.resolve(r.mapping.map(l.pos)), 1)
                      : s.nh.create(r.doc, r.mapping.map(l.pos)),
                  ),
                    e(r.scrollIntoView());
                }
                return !0;
              }
            }
            return (
              !(!a.isAtom || l.depth != o.depth - 1) &&
              (e && e(t.tr.delete(l.pos, l.pos + a.nodeSize).scrollIntoView()),
              !0)
            );
          },
          (t, e, n) => {
            let { $head: r, empty: i } = t.selection,
              o = r;
            if (!i) return !1;
            if (r.parent.isTextblock) {
              if (
                n
                  ? !n.endOfTextblock("forward", t)
                  : r.parentOffset < r.parent.content.size
              )
                return !1;
              o = p(r);
            }
            let l = o && o.nodeAfter;
            return (
              !(!l || !s.nh.isSelectable(l)) &&
              (e &&
                e(
                  t.tr.setSelection(s.nh.create(t.doc, o.pos)).scrollIntoView(),
                ),
              !0)
            );
          },
        );
      const C = {
          Enter: v(
            (t, e) => {
              let { $head: n, $anchor: r } = t.selection;
              return (
                !(!n.parent.type.spec.code || !n.sameParent(r)) &&
                (e && e(t.tr.insertText("\n").scrollIntoView()), !0)
              );
            },
            (t, e) => {
              let n = t.selection,
                { $from: r, $to: i } = n;
              if (
                n instanceof s.i5 ||
                r.parent.inlineContent ||
                i.parent.inlineContent
              )
                return !1;
              let o = f(i.parent.contentMatchAt(i.indexAfter()));
              if (!o || !o.isTextblock) return !1;
              if (e) {
                let n = (
                    !r.parentOffset && i.index() < i.parent.childCount ? r : i
                  ).pos,
                  l = t.tr.insert(n, o.createAndFill());
                l.setSelection(s.U3.create(l.doc, n + 1)),
                  e(l.scrollIntoView());
              }
              return !0;
            },
            (t, e) => {
              let { $cursor: n } = t.selection;
              if (!n || n.parent.content.size) return !1;
              if (n.depth > 1 && n.after() != n.end(-1)) {
                let i = n.before();
                if ((0, r.zy)(t.doc, i))
                  return e && e(t.tr.split(i).scrollIntoView()), !0;
              }
              let i = n.blockRange(),
                s = i && (0, r.jP)(i);
              return (
                null != s && (e && e(t.tr.lift(i, s).scrollIntoView()), !0)
              );
            },
            u,
          ),
          "Mod-Enter": d,
          Backspace: M,
          "Mod-Backspace": M,
          "Shift-Backspace": M,
          Delete: b,
          "Mod-Delete": b,
          "Mod-a": (t, e) => (e && e(t.tr.setSelection(new s.i5(t.doc))), !0),
        },
        O = {
          "Ctrl-h": C.Backspace,
          "Alt-Backspace": C["Mod-Backspace"],
          "Ctrl-d": C.Delete,
          "Ctrl-Alt-Backspace": C["Mod-Delete"],
          "Alt-Delete": C["Mod-Delete"],
          "Alt-d": C["Mod-Delete"],
          "Ctrl-a": k,
          "Ctrl-e": w,
        };
      for (let t in C) O[t] = C[t];
      const T = (
        "undefined" != typeof navigator
          ? /Mac|iP(hone|[oa]d)/.test(navigator.platform)
          : !("undefined" == typeof os || !os.platform) &&
            "darwin" == os.platform()
      )
        ? O
        : C;
    },
    57053: (t, e, n) => {
      function r(t) {
        this.content = t;
      }
      n.d(e, {
        S4: () => Z,
        ZF: () => lt,
        FK: () => l,
        CU: () => p,
        sX: () => G,
        bP: () => R,
        u$: () => E,
        vI: () => f,
        Sj: () => X,
        Ji: () => d,
      }),
        (r.prototype = {
          constructor: r,
          find: function (t) {
            for (var e = 0; e < this.content.length; e += 2)
              if (this.content[e] === t) return e;
            return -1;
          },
          get: function (t) {
            var e = this.find(t);
            return -1 == e ? void 0 : this.content[e + 1];
          },
          update: function (t, e, n) {
            var i = n && n != t ? this.remove(n) : this,
              s = i.find(t),
              o = i.content.slice();
            return (
              -1 == s ? o.push(n || t, e) : ((o[s + 1] = e), n && (o[s] = n)),
              new r(o)
            );
          },
          remove: function (t) {
            var e = this.find(t);
            if (-1 == e) return this;
            var n = this.content.slice();
            return n.splice(e, 2), new r(n);
          },
          addToStart: function (t, e) {
            return new r([t, e].concat(this.remove(t).content));
          },
          addToEnd: function (t, e) {
            var n = this.remove(t).content.slice();
            return n.push(t, e), new r(n);
          },
          addBefore: function (t, e, n) {
            var i = this.remove(e),
              s = i.content.slice(),
              o = i.find(t);
            return s.splice(-1 == o ? s.length : o, 0, e, n), new r(s);
          },
          forEach: function (t) {
            for (var e = 0; e < this.content.length; e += 2)
              t(this.content[e], this.content[e + 1]);
          },
          prepend: function (t) {
            return (t = r.from(t)).size
              ? new r(t.content.concat(this.subtract(t).content))
              : this;
          },
          append: function (t) {
            return (t = r.from(t)).size
              ? new r(this.subtract(t).content.concat(t.content))
              : this;
          },
          subtract: function (t) {
            var e = this;
            t = r.from(t);
            for (var n = 0; n < t.content.length; n += 2)
              e = e.remove(t.content[n]);
            return e;
          },
          toObject: function () {
            var t = {};
            return (
              this.forEach(function (e, n) {
                t[e] = n;
              }),
              t
            );
          },
          get size() {
            return this.content.length >> 1;
          },
        }),
        (r.from = function (t) {
          if (t instanceof r) return t;
          var e = [];
          if (t) for (var n in t) e.push(n, t[n]);
          return new r(e);
        });
      const i = r;
      function s(t, e, n) {
        for (let r = 0; ; r++) {
          if (r == t.childCount || r == e.childCount)
            return t.childCount == e.childCount ? null : n;
          let i = t.child(r),
            o = e.child(r);
          if (i != o) {
            if (!i.sameMarkup(o)) return n;
            if (i.isText && i.text != o.text) {
              for (let t = 0; i.text[t] == o.text[t]; t++) n++;
              return n;
            }
            if (i.content.size || o.content.size) {
              let t = s(i.content, o.content, n + 1);
              if (null != t) return t;
            }
            n += i.nodeSize;
          } else n += i.nodeSize;
        }
      }
      function o(t, e, n, r) {
        for (let i = t.childCount, s = e.childCount; ; ) {
          if (0 == i || 0 == s) return i == s ? null : { a: n, b: r };
          let l = t.child(--i),
            h = e.child(--s),
            a = l.nodeSize;
          if (l != h) {
            if (!l.sameMarkup(h)) return { a: n, b: r };
            if (l.isText && l.text != h.text) {
              let t = 0,
                e = Math.min(l.text.length, h.text.length);
              for (
                ;
                t < e &&
                l.text[l.text.length - t - 1] == h.text[h.text.length - t - 1];

              )
                t++, n--, r--;
              return { a: n, b: r };
            }
            if (l.content.size || h.content.size) {
              let t = o(l.content, h.content, n - 1, r - 1);
              if (t) return t;
            }
            (n -= a), (r -= a);
          } else (n -= a), (r -= a);
        }
      }
      class l {
        constructor(t, e) {
          if (((this.content = t), (this.size = e || 0), null == e))
            for (let e = 0; e < t.length; e++) this.size += t[e].nodeSize;
        }
        nodesBetween(t, e, n, r = 0, i) {
          for (let s = 0, o = 0; o < e; s++) {
            let l = this.content[s],
              h = o + l.nodeSize;
            if (h > t && !1 !== n(l, r + o, i || null, s) && l.content.size) {
              let i = o + 1;
              l.nodesBetween(
                Math.max(0, t - i),
                Math.min(l.content.size, e - i),
                n,
                r + i,
              );
            }
            o = h;
          }
        }
        descendants(t) {
          this.nodesBetween(0, this.size, t);
        }
        textBetween(t, e, n, r) {
          let i = "",
            s = !0;
          return (
            this.nodesBetween(
              t,
              e,
              (o, l) => {
                let h = o.isText
                  ? o.text.slice(Math.max(t, l) - l, e - l)
                  : o.isLeaf
                    ? r
                      ? "function" == typeof r
                        ? r(o)
                        : r
                      : o.type.spec.leafText
                        ? o.type.spec.leafText(o)
                        : ""
                    : "";
                o.isBlock &&
                  ((o.isLeaf && h) || o.isTextblock) &&
                  n &&
                  (s ? (s = !1) : (i += n)),
                  (i += h);
              },
              0,
            ),
            i
          );
        }
        append(t) {
          if (!t.size) return this;
          if (!this.size) return t;
          let e = this.lastChild,
            n = t.firstChild,
            r = this.content.slice(),
            i = 0;
          for (
            e.isText &&
            e.sameMarkup(n) &&
            ((r[r.length - 1] = e.withText(e.text + n.text)), (i = 1));
            i < t.content.length;
            i++
          )
            r.push(t.content[i]);
          return new l(r, this.size + t.size);
        }
        cut(t, e = this.size) {
          if (0 == t && e == this.size) return this;
          let n = [],
            r = 0;
          if (e > t)
            for (let i = 0, s = 0; s < e; i++) {
              let o = this.content[i],
                l = s + o.nodeSize;
              l > t &&
                ((s < t || l > e) &&
                  (o = o.isText
                    ? o.cut(Math.max(0, t - s), Math.min(o.text.length, e - s))
                    : o.cut(
                        Math.max(0, t - s - 1),
                        Math.min(o.content.size, e - s - 1),
                      )),
                n.push(o),
                (r += o.nodeSize)),
                (s = l);
            }
          return new l(n, r);
        }
        cutByIndex(t, e) {
          return t == e
            ? l.empty
            : 0 == t && e == this.content.length
              ? this
              : new l(this.content.slice(t, e));
        }
        replaceChild(t, e) {
          let n = this.content[t];
          if (n == e) return this;
          let r = this.content.slice(),
            i = this.size + e.nodeSize - n.nodeSize;
          return (r[t] = e), new l(r, i);
        }
        addToStart(t) {
          return new l([t].concat(this.content), this.size + t.nodeSize);
        }
        addToEnd(t) {
          return new l(this.content.concat(t), this.size + t.nodeSize);
        }
        eq(t) {
          if (this.content.length != t.content.length) return !1;
          for (let e = 0; e < this.content.length; e++)
            if (!this.content[e].eq(t.content[e])) return !1;
          return !0;
        }
        get firstChild() {
          return this.content.length ? this.content[0] : null;
        }
        get lastChild() {
          return this.content.length
            ? this.content[this.content.length - 1]
            : null;
        }
        get childCount() {
          return this.content.length;
        }
        child(t) {
          let e = this.content[t];
          if (!e)
            throw new RangeError("Index " + t + " out of range for " + this);
          return e;
        }
        maybeChild(t) {
          return this.content[t] || null;
        }
        forEach(t) {
          for (let e = 0, n = 0; e < this.content.length; e++) {
            let r = this.content[e];
            t(r, n, e), (n += r.nodeSize);
          }
        }
        findDiffStart(t, e = 0) {
          return s(this, t, e);
        }
        findDiffEnd(t, e = this.size, n = t.size) {
          return o(this, t, e, n);
        }
        findIndex(t, e = -1) {
          if (0 == t) return a(0, t);
          if (t == this.size) return a(this.content.length, t);
          if (t > this.size || t < 0)
            throw new RangeError(`Position ${t} outside of fragment (${this})`);
          for (let n = 0, r = 0; ; n++) {
            let i = r + this.child(n).nodeSize;
            if (i >= t) return i == t || e > 0 ? a(n + 1, i) : a(n, r);
            r = i;
          }
        }
        toString() {
          return "<" + this.toStringInner() + ">";
        }
        toStringInner() {
          return this.content.join(", ");
        }
        toJSON() {
          return this.content.length
            ? this.content.map((t) => t.toJSON())
            : null;
        }
        static fromJSON(t, e) {
          if (!e) return l.empty;
          if (!Array.isArray(e))
            throw new RangeError("Invalid input for Fragment.fromJSON");
          return new l(e.map(t.nodeFromJSON));
        }
        static fromArray(t) {
          if (!t.length) return l.empty;
          let e,
            n = 0;
          for (let r = 0; r < t.length; r++) {
            let i = t[r];
            (n += i.nodeSize),
              r && i.isText && t[r - 1].sameMarkup(i)
                ? (e || (e = t.slice(0, r)),
                  (e[e.length - 1] = i.withText(e[e.length - 1].text + i.text)))
                : e && e.push(i);
          }
          return new l(e || t, n);
        }
        static from(t) {
          if (!t) return l.empty;
          if (t instanceof l) return t;
          if (Array.isArray(t)) return this.fromArray(t);
          if (t.attrs) return new l([t], t.nodeSize);
          throw new RangeError(
            "Can not convert " +
              t +
              " to a Fragment" +
              (t.nodesBetween
                ? " (looks like multiple versions of prosemirror-model were loaded)"
                : ""),
          );
        }
      }
      l.empty = new l([], 0);
      const h = { index: 0, offset: 0 };
      function a(t, e) {
        return (h.index = t), (h.offset = e), h;
      }
      function c(t, e) {
        if (t === e) return !0;
        if (!t || "object" != typeof t || !e || "object" != typeof e) return !1;
        let n = Array.isArray(t);
        if (Array.isArray(e) != n) return !1;
        if (n) {
          if (t.length != e.length) return !1;
          for (let n = 0; n < t.length; n++) if (!c(t[n], e[n])) return !1;
        } else {
          for (let n in t) if (!(n in e) || !c(t[n], e[n])) return !1;
          for (let n in e) if (!(n in t)) return !1;
        }
        return !0;
      }
      class p {
        constructor(t, e) {
          (this.type = t), (this.attrs = e);
        }
        addToSet(t) {
          let e,
            n = !1;
          for (let r = 0; r < t.length; r++) {
            let i = t[r];
            if (this.eq(i)) return t;
            if (this.type.excludes(i.type)) e || (e = t.slice(0, r));
            else {
              if (i.type.excludes(this.type)) return t;
              !n &&
                i.type.rank > this.type.rank &&
                (e || (e = t.slice(0, r)), e.push(this), (n = !0)),
                e && e.push(i);
            }
          }
          return e || (e = t.slice()), n || e.push(this), e;
        }
        removeFromSet(t) {
          for (let e = 0; e < t.length; e++)
            if (this.eq(t[e])) return t.slice(0, e).concat(t.slice(e + 1));
          return t;
        }
        isInSet(t) {
          for (let e = 0; e < t.length; e++) if (this.eq(t[e])) return !0;
          return !1;
        }
        eq(t) {
          return this == t || (this.type == t.type && c(this.attrs, t.attrs));
        }
        toJSON() {
          let t = { type: this.type.name };
          for (let e in this.attrs) {
            t.attrs = this.attrs;
            break;
          }
          return t;
        }
        static fromJSON(t, e) {
          if (!e) throw new RangeError("Invalid input for Mark.fromJSON");
          let n = t.marks[e.type];
          if (!n)
            throw new RangeError(
              `There is no mark type ${e.type} in this schema`,
            );
          return n.create(e.attrs);
        }
        static sameSet(t, e) {
          if (t == e) return !0;
          if (t.length != e.length) return !1;
          for (let n = 0; n < t.length; n++) if (!t[n].eq(e[n])) return !1;
          return !0;
        }
        static setFrom(t) {
          if (!t || (Array.isArray(t) && 0 == t.length)) return p.none;
          if (t instanceof p) return [t];
          let e = t.slice();
          return e.sort((t, e) => t.type.rank - e.type.rank), e;
        }
      }
      p.none = [];
      class f extends Error {}
      class d {
        constructor(t, e, n) {
          (this.content = t), (this.openStart = e), (this.openEnd = n);
        }
        get size() {
          return this.content.size - this.openStart - this.openEnd;
        }
        insertAt(t, e) {
          let n = m(this.content, t + this.openStart, e);
          return n && new d(n, this.openStart, this.openEnd);
        }
        removeBetween(t, e) {
          return new d(
            u(this.content, t + this.openStart, e + this.openStart),
            this.openStart,
            this.openEnd,
          );
        }
        eq(t) {
          return (
            this.content.eq(t.content) &&
            this.openStart == t.openStart &&
            this.openEnd == t.openEnd
          );
        }
        toString() {
          return this.content + "(" + this.openStart + "," + this.openEnd + ")";
        }
        toJSON() {
          if (!this.content.size) return null;
          let t = { content: this.content.toJSON() };
          return (
            this.openStart > 0 && (t.openStart = this.openStart),
            this.openEnd > 0 && (t.openEnd = this.openEnd),
            t
          );
        }
        static fromJSON(t, e) {
          if (!e) return d.empty;
          let n = e.openStart || 0,
            r = e.openEnd || 0;
          if ("number" != typeof n || "number" != typeof r)
            throw new RangeError("Invalid input for Slice.fromJSON");
          return new d(l.fromJSON(t, e.content), n, r);
        }
        static maxOpen(t, e = !0) {
          let n = 0,
            r = 0;
          for (
            let r = t.firstChild;
            r && !r.isLeaf && (e || !r.type.spec.isolating);
            r = r.firstChild
          )
            n++;
          for (
            let n = t.lastChild;
            n && !n.isLeaf && (e || !n.type.spec.isolating);
            n = n.lastChild
          )
            r++;
          return new d(t, n, r);
        }
      }
      function u(t, e, n) {
        let { index: r, offset: i } = t.findIndex(e),
          s = t.maybeChild(r),
          { index: o, offset: l } = t.findIndex(n);
        if (i == e || s.isText) {
          if (l != n && !t.child(o).isText)
            throw new RangeError("Removing non-flat range");
          return t.cut(0, e).append(t.cut(n));
        }
        if (r != o) throw new RangeError("Removing non-flat range");
        return t.replaceChild(r, s.copy(u(s.content, e - i - 1, n - i - 1)));
      }
      function m(t, e, n, r) {
        let { index: i, offset: s } = t.findIndex(e),
          o = t.maybeChild(i);
        if (s == e || o.isText)
          return r && !r.canReplace(i, i, n)
            ? null
            : t.cut(0, e).append(n).append(t.cut(e));
        let l = m(o.content, e - s - 1, n);
        return l && t.replaceChild(i, o.copy(l));
      }
      function g(t, e, n) {
        if (n.openStart > t.depth)
          throw new f("Inserted content deeper than insertion position");
        if (t.depth - n.openStart != e.depth - n.openEnd)
          throw new f("Inconsistent open depths");
        return y(t, e, n, 0);
      }
      function y(t, e, n, r) {
        let i = t.index(r),
          s = t.node(r);
        if (i == e.index(r) && r < t.depth - n.openStart) {
          let o = y(t, e, n, r + 1);
          return s.copy(s.content.replaceChild(i, o));
        }
        if (n.content.size) {
          if (n.openStart || n.openEnd || t.depth != r || e.depth != r) {
            let { start: i, end: o } = (function (t, e) {
              let n = e.depth - t.openStart,
                r = e.node(n).copy(t.content);
              for (let t = n - 1; t >= 0; t--) r = e.node(t).copy(l.from(r));
              return {
                start: r.resolveNoCache(t.openStart + n),
                end: r.resolveNoCache(r.content.size - t.openEnd - n),
              };
            })(n, t);
            return v(s, M(t, i, o, e, r));
          }
          {
            let r = t.parent,
              i = r.content;
            return v(
              r,
              i
                .cut(0, t.parentOffset)
                .append(n.content)
                .append(i.cut(e.parentOffset)),
            );
          }
        }
        return v(s, b(t, e, r));
      }
      function k(t, e) {
        if (!e.type.compatibleContent(t.type))
          throw new f("Cannot join " + e.type.name + " onto " + t.type.name);
      }
      function w(t, e, n) {
        let r = t.node(n);
        return k(r, e.node(n)), r;
      }
      function x(t, e) {
        let n = e.length - 1;
        n >= 0 && t.isText && t.sameMarkup(e[n])
          ? (e[n] = t.withText(e[n].text + t.text))
          : e.push(t);
      }
      function S(t, e, n, r) {
        let i = (e || t).node(n),
          s = 0,
          o = e ? e.index(n) : i.childCount;
        t &&
          ((s = t.index(n)),
          t.depth > n ? s++ : t.textOffset && (x(t.nodeAfter, r), s++));
        for (let t = s; t < o; t++) x(i.child(t), r);
        e && e.depth == n && e.textOffset && x(e.nodeBefore, r);
      }
      function v(t, e) {
        return t.type.checkContent(e), t.copy(e);
      }
      function M(t, e, n, r, i) {
        let s = t.depth > i && w(t, e, i + 1),
          o = r.depth > i && w(n, r, i + 1),
          h = [];
        return (
          S(null, t, i, h),
          s && o && e.index(i) == n.index(i)
            ? (k(s, o), x(v(s, M(t, e, n, r, i + 1)), h))
            : (s && x(v(s, b(t, e, i + 1)), h),
              S(e, n, i, h),
              o && x(v(o, b(n, r, i + 1)), h)),
          S(r, null, i, h),
          new l(h)
        );
      }
      function b(t, e, n) {
        let r = [];
        if ((S(null, t, n, r), t.depth > n)) {
          x(v(w(t, e, n + 1), b(t, e, n + 1)), r);
        }
        return S(e, null, n, r), new l(r);
      }
      d.empty = new d(l.empty, 0, 0);
      class C {
        constructor(t, e, n) {
          (this.pos = t),
            (this.path = e),
            (this.parentOffset = n),
            (this.depth = e.length / 3 - 1);
        }
        resolveDepth(t) {
          return null == t ? this.depth : t < 0 ? this.depth + t : t;
        }
        get parent() {
          return this.node(this.depth);
        }
        get doc() {
          return this.node(0);
        }
        node(t) {
          return this.path[3 * this.resolveDepth(t)];
        }
        index(t) {
          return this.path[3 * this.resolveDepth(t) + 1];
        }
        indexAfter(t) {
          return (
            (t = this.resolveDepth(t)),
            this.index(t) + (t != this.depth || this.textOffset ? 1 : 0)
          );
        }
        start(t) {
          return 0 == (t = this.resolveDepth(t)) ? 0 : this.path[3 * t - 1] + 1;
        }
        end(t) {
          return (
            (t = this.resolveDepth(t)),
            this.start(t) + this.node(t).content.size
          );
        }
        before(t) {
          if (!(t = this.resolveDepth(t)))
            throw new RangeError(
              "There is no position before the top-level node",
            );
          return t == this.depth + 1 ? this.pos : this.path[3 * t - 1];
        }
        after(t) {
          if (!(t = this.resolveDepth(t)))
            throw new RangeError(
              "There is no position after the top-level node",
            );
          return t == this.depth + 1
            ? this.pos
            : this.path[3 * t - 1] + this.path[3 * t].nodeSize;
        }
        get textOffset() {
          return this.pos - this.path[this.path.length - 1];
        }
        get nodeAfter() {
          let t = this.parent,
            e = this.index(this.depth);
          if (e == t.childCount) return null;
          let n = this.pos - this.path[this.path.length - 1],
            r = t.child(e);
          return n ? t.child(e).cut(n) : r;
        }
        get nodeBefore() {
          let t = this.index(this.depth),
            e = this.pos - this.path[this.path.length - 1];
          return e
            ? this.parent.child(t).cut(0, e)
            : 0 == t
              ? null
              : this.parent.child(t - 1);
        }
        posAtIndex(t, e) {
          e = this.resolveDepth(e);
          let n = this.path[3 * e],
            r = 0 == e ? 0 : this.path[3 * e - 1] + 1;
          for (let e = 0; e < t; e++) r += n.child(e).nodeSize;
          return r;
        }
        marks() {
          let t = this.parent,
            e = this.index();
          if (0 == t.content.size) return p.none;
          if (this.textOffset) return t.child(e).marks;
          let n = t.maybeChild(e - 1),
            r = t.maybeChild(e);
          if (!n) {
            let t = n;
            (n = r), (r = t);
          }
          let i = n.marks;
          for (var s = 0; s < i.length; s++)
            !1 !== i[s].type.spec.inclusive ||
              (r && i[s].isInSet(r.marks)) ||
              (i = i[s--].removeFromSet(i));
          return i;
        }
        marksAcross(t) {
          let e = this.parent.maybeChild(this.index());
          if (!e || !e.isInline) return null;
          let n = e.marks,
            r = t.parent.maybeChild(t.index());
          for (var i = 0; i < n.length; i++)
            !1 !== n[i].type.spec.inclusive ||
              (r && n[i].isInSet(r.marks)) ||
              (n = n[i--].removeFromSet(n));
          return n;
        }
        sharedDepth(t) {
          for (let e = this.depth; e > 0; e--)
            if (this.start(e) <= t && this.end(e) >= t) return e;
          return 0;
        }
        blockRange(t = this, e) {
          if (t.pos < this.pos) return t.blockRange(this);
          for (
            let n =
              this.depth -
              (this.parent.inlineContent || this.pos == t.pos ? 1 : 0);
            n >= 0;
            n--
          )
            if (t.pos <= this.end(n) && (!e || e(this.node(n))))
              return new E(this, t, n);
          return null;
        }
        sameParent(t) {
          return this.pos - this.parentOffset == t.pos - t.parentOffset;
        }
        max(t) {
          return t.pos > this.pos ? t : this;
        }
        min(t) {
          return t.pos < this.pos ? t : this;
        }
        toString() {
          let t = "";
          for (let e = 1; e <= this.depth; e++)
            t +=
              (t ? "/" : "") + this.node(e).type.name + "_" + this.index(e - 1);
          return t + ":" + this.parentOffset;
        }
        static resolve(t, e) {
          if (!(e >= 0 && e <= t.content.size))
            throw new RangeError("Position " + e + " out of range");
          let n = [],
            r = 0,
            i = e;
          for (let e = t; ; ) {
            let { index: t, offset: s } = e.content.findIndex(i),
              o = i - s;
            if ((n.push(e, t, r + s), !o)) break;
            if (((e = e.child(t)), e.isText)) break;
            (i = o - 1), (r += s + 1);
          }
          return new C(e, n, i);
        }
        static resolveCached(t, e) {
          for (let n = 0; n < O.length; n++) {
            let r = O[n];
            if (r.pos == e && r.doc == t) return r;
          }
          let n = (O[T] = C.resolve(t, e));
          return (T = (T + 1) % N), n;
        }
      }
      let O = [],
        T = 0,
        N = 12;
      class E {
        constructor(t, e, n) {
          (this.$from = t), (this.$to = e), (this.depth = n);
        }
        get start() {
          return this.$from.before(this.depth + 1);
        }
        get end() {
          return this.$to.after(this.depth + 1);
        }
        get parent() {
          return this.$from.node(this.depth);
        }
        get startIndex() {
          return this.$from.index(this.depth);
        }
        get endIndex() {
          return this.$to.indexAfter(this.depth);
        }
      }
      const I = Object.create(null);
      class R {
        constructor(t, e, n, r = p.none) {
          (this.type = t),
            (this.attrs = e),
            (this.marks = r),
            (this.content = n || l.empty);
        }
        get nodeSize() {
          return this.isLeaf ? 1 : 2 + this.content.size;
        }
        get childCount() {
          return this.content.childCount;
        }
        child(t) {
          return this.content.child(t);
        }
        maybeChild(t) {
          return this.content.maybeChild(t);
        }
        forEach(t) {
          this.content.forEach(t);
        }
        nodesBetween(t, e, n, r = 0) {
          this.content.nodesBetween(t, e, n, r, this);
        }
        descendants(t) {
          this.nodesBetween(0, this.content.size, t);
        }
        get textContent() {
          return this.isLeaf && this.type.spec.leafText
            ? this.type.spec.leafText(this)
            : this.textBetween(0, this.content.size, "");
        }
        textBetween(t, e, n, r) {
          return this.content.textBetween(t, e, n, r);
        }
        get firstChild() {
          return this.content.firstChild;
        }
        get lastChild() {
          return this.content.lastChild;
        }
        eq(t) {
          return (
            this == t || (this.sameMarkup(t) && this.content.eq(t.content))
          );
        }
        sameMarkup(t) {
          return this.hasMarkup(t.type, t.attrs, t.marks);
        }
        hasMarkup(t, e, n) {
          return (
            this.type == t &&
            c(this.attrs, e || t.defaultAttrs || I) &&
            p.sameSet(this.marks, n || p.none)
          );
        }
        copy(t = null) {
          return t == this.content
            ? this
            : new R(this.type, this.attrs, t, this.marks);
        }
        mark(t) {
          return t == this.marks
            ? this
            : new R(this.type, this.attrs, this.content, t);
        }
        cut(t, e = this.content.size) {
          return 0 == t && e == this.content.size
            ? this
            : this.copy(this.content.cut(t, e));
        }
        slice(t, e = this.content.size, n = !1) {
          if (t == e) return d.empty;
          let r = this.resolve(t),
            i = this.resolve(e),
            s = n ? 0 : r.sharedDepth(e),
            o = r.start(s),
            l = r.node(s).content.cut(r.pos - o, i.pos - o);
          return new d(l, r.depth - s, i.depth - s);
        }
        replace(t, e, n) {
          return g(this.resolve(t), this.resolve(e), n);
        }
        nodeAt(t) {
          for (let e = this; ; ) {
            let { index: n, offset: r } = e.content.findIndex(t);
            if (((e = e.maybeChild(n)), !e)) return null;
            if (r == t || e.isText) return e;
            t -= r + 1;
          }
        }
        childAfter(t) {
          let { index: e, offset: n } = this.content.findIndex(t);
          return { node: this.content.maybeChild(e), index: e, offset: n };
        }
        childBefore(t) {
          if (0 == t) return { node: null, index: 0, offset: 0 };
          let { index: e, offset: n } = this.content.findIndex(t);
          if (n < t)
            return { node: this.content.child(e), index: e, offset: n };
          let r = this.content.child(e - 1);
          return { node: r, index: e - 1, offset: n - r.nodeSize };
        }
        resolve(t) {
          return C.resolveCached(this, t);
        }
        resolveNoCache(t) {
          return C.resolve(this, t);
        }
        rangeHasMark(t, e, n) {
          let r = !1;
          return (
            e > t &&
              this.nodesBetween(
                t,
                e,
                (t) => (n.isInSet(t.marks) && (r = !0), !r),
              ),
            r
          );
        }
        get isBlock() {
          return this.type.isBlock;
        }
        get isTextblock() {
          return this.type.isTextblock;
        }
        get inlineContent() {
          return this.type.inlineContent;
        }
        get isInline() {
          return this.type.isInline;
        }
        get isText() {
          return this.type.isText;
        }
        get isLeaf() {
          return this.type.isLeaf;
        }
        get isAtom() {
          return this.type.isAtom;
        }
        toString() {
          if (this.type.spec.toDebugString)
            return this.type.spec.toDebugString(this);
          let t = this.type.name;
          return (
            this.content.size &&
              (t += "(" + this.content.toStringInner() + ")"),
            J(this.marks, t)
          );
        }
        contentMatchAt(t) {
          let e = this.type.contentMatch.matchFragment(this.content, 0, t);
          if (!e)
            throw new Error(
              "Called contentMatchAt on a node with invalid content",
            );
          return e;
        }
        canReplace(t, e, n = l.empty, r = 0, i = n.childCount) {
          let s = this.contentMatchAt(t).matchFragment(n, r, i),
            o = s && s.matchFragment(this.content, e);
          if (!o || !o.validEnd) return !1;
          for (let t = r; t < i; t++)
            if (!this.type.allowsMarks(n.child(t).marks)) return !1;
          return !0;
        }
        canReplaceWith(t, e, n, r) {
          if (r && !this.type.allowsMarks(r)) return !1;
          let i = this.contentMatchAt(t).matchType(n),
            s = i && i.matchFragment(this.content, e);
          return !!s && s.validEnd;
        }
        canAppend(t) {
          return t.content.size
            ? this.canReplace(this.childCount, this.childCount, t.content)
            : this.type.compatibleContent(t.type);
        }
        check() {
          this.type.checkContent(this.content);
          let t = p.none;
          for (let e = 0; e < this.marks.length; e++)
            t = this.marks[e].addToSet(t);
          if (!p.sameSet(t, this.marks))
            throw new RangeError(
              `Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`,
            );
          this.content.forEach((t) => t.check());
        }
        toJSON() {
          let t = { type: this.type.name };
          for (let e in this.attrs) {
            t.attrs = this.attrs;
            break;
          }
          return (
            this.content.size && (t.content = this.content.toJSON()),
            this.marks.length && (t.marks = this.marks.map((t) => t.toJSON())),
            t
          );
        }
        static fromJSON(t, e) {
          if (!e) throw new RangeError("Invalid input for Node.fromJSON");
          let n = null;
          if (e.marks) {
            if (!Array.isArray(e.marks))
              throw new RangeError("Invalid mark data for Node.fromJSON");
            n = e.marks.map(t.markFromJSON);
          }
          if ("text" == e.type) {
            if ("string" != typeof e.text)
              throw new RangeError("Invalid text node in JSON");
            return t.text(e.text, n);
          }
          let r = l.fromJSON(t, e.content);
          return t.nodeType(e.type).create(e.attrs, r, n);
        }
      }
      R.prototype.text = void 0;
      class A extends R {
        constructor(t, e, n, r) {
          if ((super(t, e, null, r), !n))
            throw new RangeError("Empty text nodes are not allowed");
          this.text = n;
        }
        toString() {
          return this.type.spec.toDebugString
            ? this.type.spec.toDebugString(this)
            : J(this.marks, JSON.stringify(this.text));
        }
        get textContent() {
          return this.text;
        }
        textBetween(t, e) {
          return this.text.slice(t, e);
        }
        get nodeSize() {
          return this.text.length;
        }
        mark(t) {
          return t == this.marks
            ? this
            : new A(this.type, this.attrs, this.text, t);
        }
        withText(t) {
          return t == this.text
            ? this
            : new A(this.type, this.attrs, t, this.marks);
        }
        cut(t = 0, e = this.text.length) {
          return 0 == t && e == this.text.length
            ? this
            : this.withText(this.text.slice(t, e));
        }
        eq(t) {
          return this.sameMarkup(t) && this.text == t.text;
        }
        toJSON() {
          let t = super.toJSON();
          return (t.text = this.text), t;
        }
      }
      function J(t, e) {
        for (let n = t.length - 1; n >= 0; n--)
          e = t[n].type.name + "(" + e + ")";
        return e;
      }
      class z {
        constructor(t) {
          (this.validEnd = t), (this.next = []), (this.wrapCache = []);
        }
        static parse(t, e) {
          let n = new F(t, e);
          if (null == n.next) return z.empty;
          let r = $(n);
          n.next && n.err("Unexpected trailing text");
          let i = (function (t) {
            let e = Object.create(null);
            return n(L(t, 0));
            function n(r) {
              let i = [];
              r.forEach((e) => {
                t[e].forEach(({ term: e, to: n }) => {
                  if (!e) return;
                  let r;
                  for (let t = 0; t < i.length; t++)
                    i[t][0] == e && (r = i[t][1]);
                  L(t, n).forEach((t) => {
                    r || i.push([e, (r = [])]), -1 == r.indexOf(t) && r.push(t);
                  });
                });
              });
              let s = (e[r.join(",")] = new z(r.indexOf(t.length - 1) > -1));
              for (let t = 0; t < i.length; t++) {
                let r = i[t][1].sort(W);
                s.next.push({ type: i[t][0], next: e[r.join(",")] || n(r) });
              }
              return s;
            }
          })(
            (function (t) {
              let e = [[]];
              return i(s(t, 0), n()), e;
              function n() {
                return e.push([]) - 1;
              }
              function r(t, n, r) {
                let i = { term: r, to: n };
                return e[t].push(i), i;
              }
              function i(t, e) {
                t.forEach((t) => (t.to = e));
              }
              function s(t, e) {
                if ("choice" == t.type)
                  return t.exprs.reduce((t, n) => t.concat(s(n, e)), []);
                if ("seq" != t.type) {
                  if ("star" == t.type) {
                    let o = n();
                    return r(e, o), i(s(t.expr, o), o), [r(o)];
                  }
                  if ("plus" == t.type) {
                    let o = n();
                    return i(s(t.expr, e), o), i(s(t.expr, o), o), [r(o)];
                  }
                  if ("opt" == t.type) return [r(e)].concat(s(t.expr, e));
                  if ("range" == t.type) {
                    let o = e;
                    for (let e = 0; e < t.min; e++) {
                      let e = n();
                      i(s(t.expr, o), e), (o = e);
                    }
                    if (-1 == t.max) i(s(t.expr, o), o);
                    else
                      for (let e = t.min; e < t.max; e++) {
                        let e = n();
                        r(o, e), i(s(t.expr, o), e), (o = e);
                      }
                    return [r(o)];
                  }
                  if ("name" == t.type) return [r(e, void 0, t.value)];
                  throw new Error("Unknown expr type");
                }
                for (let r = 0; ; r++) {
                  let o = s(t.exprs[r], e);
                  if (r == t.exprs.length - 1) return o;
                  i(o, (e = n()));
                }
              }
            })(r),
          );
          return (
            (function (t, e) {
              for (let n = 0, r = [t]; n < r.length; n++) {
                let t = r[n],
                  i = !t.validEnd,
                  s = [];
                for (let e = 0; e < t.next.length; e++) {
                  let { type: n, next: o } = t.next[e];
                  s.push(n.name),
                    !i || n.isText || n.hasRequiredAttrs() || (i = !1),
                    -1 == r.indexOf(o) && r.push(o);
                }
                i &&
                  e.err(
                    "Only non-generatable nodes (" +
                      s.join(", ") +
                      ") in a required position (see https://prosemirror.net/docs/guide/#generatable)",
                  );
              }
            })(i, n),
            i
          );
        }
        matchType(t) {
          for (let e = 0; e < this.next.length; e++)
            if (this.next[e].type == t) return this.next[e].next;
          return null;
        }
        matchFragment(t, e = 0, n = t.childCount) {
          let r = this;
          for (let i = e; r && i < n; i++) r = r.matchType(t.child(i).type);
          return r;
        }
        get inlineContent() {
          return 0 != this.next.length && this.next[0].type.isInline;
        }
        get defaultType() {
          for (let t = 0; t < this.next.length; t++) {
            let { type: e } = this.next[t];
            if (!e.isText && !e.hasRequiredAttrs()) return e;
          }
          return null;
        }
        compatible(t) {
          for (let e = 0; e < this.next.length; e++)
            for (let n = 0; n < t.next.length; n++)
              if (this.next[e].type == t.next[n].type) return !0;
          return !1;
        }
        fillBefore(t, e = !1, n = 0) {
          let r = [this];
          return (function i(s, o) {
            let h = s.matchFragment(t, n);
            if (h && (!e || h.validEnd))
              return l.from(o.map((t) => t.createAndFill()));
            for (let t = 0; t < s.next.length; t++) {
              let { type: e, next: n } = s.next[t];
              if (!e.isText && !e.hasRequiredAttrs() && -1 == r.indexOf(n)) {
                r.push(n);
                let t = i(n, o.concat(e));
                if (t) return t;
              }
            }
            return null;
          })(this, []);
        }
        findWrapping(t) {
          for (let e = 0; e < this.wrapCache.length; e += 2)
            if (this.wrapCache[e] == t) return this.wrapCache[e + 1];
          let e = this.computeWrapping(t);
          return this.wrapCache.push(t, e), e;
        }
        computeWrapping(t) {
          let e = Object.create(null),
            n = [{ match: this, type: null, via: null }];
          for (; n.length; ) {
            let r = n.shift(),
              i = r.match;
            if (i.matchType(t)) {
              let t = [];
              for (let e = r; e.type; e = e.via) t.push(e.type);
              return t.reverse();
            }
            for (let t = 0; t < i.next.length; t++) {
              let { type: s, next: o } = i.next[t];
              s.isLeaf ||
                s.hasRequiredAttrs() ||
                s.name in e ||
                (r.type && !o.validEnd) ||
                (n.push({ match: s.contentMatch, type: s, via: r }),
                (e[s.name] = !0));
            }
          }
          return null;
        }
        get edgeCount() {
          return this.next.length;
        }
        edge(t) {
          if (t >= this.next.length)
            throw new RangeError(
              `There's no ${t}th edge in this content match`,
            );
          return this.next[t];
        }
        toString() {
          let t = [];
          return (
            (function e(n) {
              t.push(n);
              for (let r = 0; r < n.next.length; r++)
                -1 == t.indexOf(n.next[r].next) && e(n.next[r].next);
            })(this),
            t
              .map((e, n) => {
                let r = n + (e.validEnd ? "*" : " ") + " ";
                for (let n = 0; n < e.next.length; n++)
                  r +=
                    (n ? ", " : "") +
                    e.next[n].type.name +
                    "->" +
                    t.indexOf(e.next[n].next);
                return r;
              })
              .join("\n")
          );
        }
      }
      z.empty = new z(!0);
      class F {
        constructor(t, e) {
          (this.string = t),
            (this.nodeTypes = e),
            (this.inline = null),
            (this.pos = 0),
            (this.tokens = t.split(/\s*(?=\b|\W|$)/)),
            "" == this.tokens[this.tokens.length - 1] && this.tokens.pop(),
            "" == this.tokens[0] && this.tokens.shift();
        }
        get next() {
          return this.tokens[this.pos];
        }
        eat(t) {
          return this.next == t && (this.pos++ || !0);
        }
        err(t) {
          throw new SyntaxError(
            t + " (in content expression '" + this.string + "')",
          );
        }
      }
      function $(t) {
        let e = [];
        do {
          e.push(B(t));
        } while (t.eat("|"));
        return 1 == e.length ? e[0] : { type: "choice", exprs: e };
      }
      function B(t) {
        let e = [];
        do {
          e.push(D(t));
        } while (t.next && ")" != t.next && "|" != t.next);
        return 1 == e.length ? e[0] : { type: "seq", exprs: e };
      }
      function D(t) {
        let e = (function (t) {
          if (t.eat("(")) {
            let e = $(t);
            return t.eat(")") || t.err("Missing closing paren"), e;
          }
          if (!/\W/.test(t.next)) {
            let e = (function (t, e) {
              let n = t.nodeTypes,
                r = n[e];
              if (r) return [r];
              let i = [];
              for (let t in n) {
                let r = n[t];
                r.groups.indexOf(e) > -1 && i.push(r);
              }
              0 == i.length && t.err("No node type or group '" + e + "' found");
              return i;
            })(t, t.next).map(
              (e) => (
                null == t.inline
                  ? (t.inline = e.isInline)
                  : t.inline != e.isInline &&
                    t.err("Mixing inline and block content"),
                { type: "name", value: e }
              ),
            );
            return t.pos++, 1 == e.length ? e[0] : { type: "choice", exprs: e };
          }
          t.err("Unexpected token '" + t.next + "'");
        })(t);
        for (;;)
          if (t.eat("+")) e = { type: "plus", expr: e };
          else if (t.eat("*")) e = { type: "star", expr: e };
          else if (t.eat("?")) e = { type: "opt", expr: e };
          else {
            if (!t.eat("{")) break;
            e = P(t, e);
          }
        return e;
      }
      function j(t) {
        /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
        let e = Number(t.next);
        return t.pos++, e;
      }
      function P(t, e) {
        let n = j(t),
          r = n;
        return (
          t.eat(",") && (r = "}" != t.next ? j(t) : -1),
          t.eat("}") || t.err("Unclosed braced range"),
          { type: "range", min: n, max: r, expr: e }
        );
      }
      function W(t, e) {
        return e - t;
      }
      function L(t, e) {
        let n = [];
        return (
          (function e(r) {
            let i = t[r];
            if (1 == i.length && !i[0].term) return e(i[0].to);
            n.push(r);
            for (let t = 0; t < i.length; t++) {
              let { term: r, to: s } = i[t];
              r || -1 != n.indexOf(s) || e(s);
            }
          })(e),
          n.sort(W)
        );
      }
      function K(t) {
        let e = Object.create(null);
        for (let n in t) {
          let r = t[n];
          if (!r.hasDefault) return null;
          e[n] = r.default;
        }
        return e;
      }
      function q(t, e) {
        let n = Object.create(null);
        for (let r in t) {
          let i = e && e[r];
          if (void 0 === i) {
            let e = t[r];
            if (!e.hasDefault)
              throw new RangeError("No value supplied for attribute " + r);
            i = e.default;
          }
          n[r] = i;
        }
        return n;
      }
      function V(t) {
        let e = Object.create(null);
        if (t) for (let n in t) e[n] = new U(t[n]);
        return e;
      }
      class _ {
        constructor(t, e, n) {
          (this.name = t),
            (this.schema = e),
            (this.spec = n),
            (this.markSet = null),
            (this.groups = n.group ? n.group.split(" ") : []),
            (this.attrs = V(n.attrs)),
            (this.defaultAttrs = K(this.attrs)),
            (this.contentMatch = null),
            (this.inlineContent = null),
            (this.isBlock = !(n.inline || "text" == t)),
            (this.isText = "text" == t);
        }
        get isInline() {
          return !this.isBlock;
        }
        get isTextblock() {
          return this.isBlock && this.inlineContent;
        }
        get isLeaf() {
          return this.contentMatch == z.empty;
        }
        get isAtom() {
          return this.isLeaf || !!this.spec.atom;
        }
        get whitespace() {
          return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
        }
        hasRequiredAttrs() {
          for (let t in this.attrs) if (this.attrs[t].isRequired) return !0;
          return !1;
        }
        compatibleContent(t) {
          return this == t || this.contentMatch.compatible(t.contentMatch);
        }
        computeAttrs(t) {
          return !t && this.defaultAttrs ? this.defaultAttrs : q(this.attrs, t);
        }
        create(t = null, e, n) {
          if (this.isText)
            throw new Error("NodeType.create can't construct text nodes");
          return new R(this, this.computeAttrs(t), l.from(e), p.setFrom(n));
        }
        createChecked(t = null, e, n) {
          return (
            (e = l.from(e)),
            this.checkContent(e),
            new R(this, this.computeAttrs(t), e, p.setFrom(n))
          );
        }
        createAndFill(t = null, e, n) {
          if (((t = this.computeAttrs(t)), (e = l.from(e)).size)) {
            let t = this.contentMatch.fillBefore(e);
            if (!t) return null;
            e = t.append(e);
          }
          let r = this.contentMatch.matchFragment(e),
            i = r && r.fillBefore(l.empty, !0);
          return i ? new R(this, t, e.append(i), p.setFrom(n)) : null;
        }
        validContent(t) {
          let e = this.contentMatch.matchFragment(t);
          if (!e || !e.validEnd) return !1;
          for (let e = 0; e < t.childCount; e++)
            if (!this.allowsMarks(t.child(e).marks)) return !1;
          return !0;
        }
        checkContent(t) {
          if (!this.validContent(t))
            throw new RangeError(
              `Invalid content for node ${this.name}: ${t.toString().slice(0, 50)}`,
            );
        }
        allowsMarkType(t) {
          return null == this.markSet || this.markSet.indexOf(t) > -1;
        }
        allowsMarks(t) {
          if (null == this.markSet) return !0;
          for (let e = 0; e < t.length; e++)
            if (!this.allowsMarkType(t[e].type)) return !1;
          return !0;
        }
        allowedMarks(t) {
          if (null == this.markSet) return t;
          let e;
          for (let n = 0; n < t.length; n++)
            this.allowsMarkType(t[n].type)
              ? e && e.push(t[n])
              : e || (e = t.slice(0, n));
          return e ? (e.length ? e : p.none) : t;
        }
        static compile(t, e) {
          let n = Object.create(null);
          t.forEach((t, r) => (n[t] = new _(t, e, r)));
          let r = e.spec.topNode || "doc";
          if (!n[r])
            throw new RangeError(
              "Schema is missing its top node type ('" + r + "')",
            );
          if (!n.text) throw new RangeError("Every schema needs a 'text' type");
          for (let t in n.text.attrs)
            throw new RangeError(
              "The text node type should not have attributes",
            );
          return n;
        }
      }
      class U {
        constructor(t) {
          (this.hasDefault = Object.prototype.hasOwnProperty.call(
            t,
            "default",
          )),
            (this.default = t.default);
        }
        get isRequired() {
          return !this.hasDefault;
        }
      }
      class G {
        constructor(t, e, n, r) {
          (this.name = t),
            (this.rank = e),
            (this.schema = n),
            (this.spec = r),
            (this.attrs = V(r.attrs)),
            (this.excluded = null);
          let i = K(this.attrs);
          this.instance = i ? new p(this, i) : null;
        }
        create(t = null) {
          return !t && this.instance
            ? this.instance
            : new p(this, q(this.attrs, t));
        }
        static compile(t, e) {
          let n = Object.create(null),
            r = 0;
          return t.forEach((t, i) => (n[t] = new G(t, r++, e, i))), n;
        }
        removeFromSet(t) {
          for (var e = 0; e < t.length; e++)
            t[e].type == this &&
              ((t = t.slice(0, e).concat(t.slice(e + 1))), e--);
          return t;
        }
        isInSet(t) {
          for (let e = 0; e < t.length; e++) if (t[e].type == this) return t[e];
        }
        excludes(t) {
          return this.excluded.indexOf(t) > -1;
        }
      }
      class X {
        constructor(t) {
          (this.linebreakReplacement = null),
            (this.cached = Object.create(null));
          let e = (this.spec = {});
          for (let n in t) e[n] = t[n];
          (e.nodes = i.from(t.nodes)),
            (e.marks = i.from(t.marks || {})),
            (this.nodes = _.compile(this.spec.nodes, this)),
            (this.marks = G.compile(this.spec.marks, this));
          let n = Object.create(null);
          for (let t in this.nodes) {
            if (t in this.marks)
              throw new RangeError(t + " can not be both a node and a mark");
            let e = this.nodes[t],
              r = e.spec.content || "",
              i = e.spec.marks;
            if (
              ((e.contentMatch = n[r] || (n[r] = z.parse(r, this.nodes))),
              (e.inlineContent = e.contentMatch.inlineContent),
              e.spec.linebreakReplacement)
            ) {
              if (this.linebreakReplacement)
                throw new RangeError("Multiple linebreak nodes defined");
              if (!e.isInline || !e.isLeaf)
                throw new RangeError(
                  "Linebreak replacement nodes must be inline leaf nodes",
                );
              this.linebreakReplacement = e;
            }
            e.markSet =
              "_" == i
                ? null
                : i
                  ? H(this, i.split(" "))
                  : "" != i && e.inlineContent
                    ? null
                    : [];
          }
          for (let t in this.marks) {
            let e = this.marks[t],
              n = e.spec.excludes;
            e.excluded = null == n ? [e] : "" == n ? [] : H(this, n.split(" "));
          }
          (this.nodeFromJSON = this.nodeFromJSON.bind(this)),
            (this.markFromJSON = this.markFromJSON.bind(this)),
            (this.topNodeType = this.nodes[this.spec.topNode || "doc"]),
            (this.cached.wrappings = Object.create(null));
        }
        node(t, e = null, n, r) {
          if ("string" == typeof t) t = this.nodeType(t);
          else {
            if (!(t instanceof _))
              throw new RangeError("Invalid node type: " + t);
            if (t.schema != this)
              throw new RangeError(
                "Node type from different schema used (" + t.name + ")",
              );
          }
          return t.createChecked(e, n, r);
        }
        text(t, e) {
          let n = this.nodes.text;
          return new A(n, n.defaultAttrs, t, p.setFrom(e));
        }
        mark(t, e) {
          return "string" == typeof t && (t = this.marks[t]), t.create(e);
        }
        nodeFromJSON(t) {
          return R.fromJSON(this, t);
        }
        markFromJSON(t) {
          return p.fromJSON(this, t);
        }
        nodeType(t) {
          let e = this.nodes[t];
          if (!e) throw new RangeError("Unknown node type: " + t);
          return e;
        }
      }
      function H(t, e) {
        let n = [];
        for (let r = 0; r < e.length; r++) {
          let i = e[r],
            s = t.marks[i],
            o = s;
          if (s) n.push(s);
          else
            for (let e in t.marks) {
              let r = t.marks[e];
              ("_" == i ||
                (r.spec.group && r.spec.group.split(" ").indexOf(i) > -1)) &&
                n.push((o = r));
            }
          if (!o) throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
        }
        return n;
      }
      class Z {
        constructor(t, e) {
          (this.schema = t),
            (this.rules = e),
            (this.tags = []),
            (this.styles = []),
            e.forEach((t) => {
              !(function (t) {
                return null != t.tag;
              })(t)
                ? (function (t) {
                    return null != t.style;
                  })(t) && this.styles.push(t)
                : this.tags.push(t);
            }),
            (this.normalizeLists = !this.tags.some((e) => {
              if (!/^(ul|ol)\b/.test(e.tag) || !e.node) return !1;
              let n = t.nodes[e.node];
              return n.contentMatch.matchType(n);
            }));
        }
        parse(t, e = {}) {
          let n = new rt(this, e, !1);
          return n.addAll(t, e.from, e.to), n.finish();
        }
        parseSlice(t, e = {}) {
          let n = new rt(this, e, !0);
          return n.addAll(t, e.from, e.to), d.maxOpen(n.finish());
        }
        matchTag(t, e, n) {
          for (
            let r = n ? this.tags.indexOf(n) + 1 : 0;
            r < this.tags.length;
            r++
          ) {
            let n = this.tags[r];
            if (
              it(t, n.tag) &&
              (void 0 === n.namespace || t.namespaceURI == n.namespace) &&
              (!n.context || e.matchesContext(n.context))
            ) {
              if (n.getAttrs) {
                let e = n.getAttrs(t);
                if (!1 === e) continue;
                n.attrs = e || void 0;
              }
              return n;
            }
          }
        }
        matchStyle(t, e, n, r) {
          for (
            let i = r ? this.styles.indexOf(r) + 1 : 0;
            i < this.styles.length;
            i++
          ) {
            let r = this.styles[i],
              s = r.style;
            if (
              !(
                0 != s.indexOf(t) ||
                (r.context && !n.matchesContext(r.context)) ||
                (s.length > t.length &&
                  (61 != s.charCodeAt(t.length) || s.slice(t.length + 1) != e))
              )
            ) {
              if (r.getAttrs) {
                let t = r.getAttrs(e);
                if (!1 === t) continue;
                r.attrs = t || void 0;
              }
              return r;
            }
          }
        }
        static schemaRules(t) {
          let e = [];
          function n(t) {
            let n = null == t.priority ? 50 : t.priority,
              r = 0;
            for (; r < e.length; r++) {
              let t = e[r];
              if ((null == t.priority ? 50 : t.priority) < n) break;
            }
            e.splice(r, 0, t);
          }
          for (let e in t.marks) {
            let r = t.marks[e].spec.parseDOM;
            r &&
              r.forEach((t) => {
                n((t = st(t))),
                  t.mark || t.ignore || t.clearMark || (t.mark = e);
              });
          }
          for (let e in t.nodes) {
            let r = t.nodes[e].spec.parseDOM;
            r &&
              r.forEach((t) => {
                n((t = st(t))), t.node || t.ignore || t.mark || (t.node = e);
              });
          }
          return e;
        }
        static fromSchema(t) {
          return (
            t.cached.domParser ||
            (t.cached.domParser = new Z(t, Z.schemaRules(t)))
          );
        }
      }
      const Q = {
          address: !0,
          article: !0,
          aside: !0,
          blockquote: !0,
          canvas: !0,
          dd: !0,
          div: !0,
          dl: !0,
          fieldset: !0,
          figcaption: !0,
          figure: !0,
          footer: !0,
          form: !0,
          h1: !0,
          h2: !0,
          h3: !0,
          h4: !0,
          h5: !0,
          h6: !0,
          header: !0,
          hgroup: !0,
          hr: !0,
          li: !0,
          noscript: !0,
          ol: !0,
          output: !0,
          p: !0,
          pre: !0,
          section: !0,
          table: !0,
          tfoot: !0,
          ul: !0,
        },
        Y = {
          head: !0,
          noscript: !0,
          object: !0,
          script: !0,
          style: !0,
          title: !0,
        },
        tt = { ol: !0, ul: !0 };
      function et(t, e, n) {
        return null != e
          ? (e ? 1 : 0) | ("full" === e ? 2 : 0)
          : t && "pre" == t.whitespace
            ? 3
            : -5 & n;
      }
      class nt {
        constructor(t, e, n, r, i, s, o) {
          (this.type = t),
            (this.attrs = e),
            (this.marks = n),
            (this.pendingMarks = r),
            (this.solid = i),
            (this.options = o),
            (this.content = []),
            (this.activeMarks = p.none),
            (this.stashMarks = []),
            (this.match = s || (4 & o ? null : t.contentMatch));
        }
        findWrapping(t) {
          if (!this.match) {
            if (!this.type) return [];
            let e = this.type.contentMatch.fillBefore(l.from(t));
            if (!e) {
              let e,
                n = this.type.contentMatch;
              return (e = n.findWrapping(t.type))
                ? ((this.match = n), e)
                : null;
            }
            this.match = this.type.contentMatch.matchFragment(e);
          }
          return this.match.findWrapping(t.type);
        }
        finish(t) {
          if (!(1 & this.options)) {
            let t,
              e = this.content[this.content.length - 1];
            if (e && e.isText && (t = /[ \t\r\n\u000c]+$/.exec(e.text))) {
              let n = e;
              e.text.length == t[0].length
                ? this.content.pop()
                : (this.content[this.content.length - 1] = n.withText(
                    n.text.slice(0, n.text.length - t[0].length),
                  ));
            }
          }
          let e = l.from(this.content);
          return (
            !t &&
              this.match &&
              (e = e.append(this.match.fillBefore(l.empty, !0))),
            this.type ? this.type.create(this.attrs, e, this.marks) : e
          );
        }
        popFromStashMark(t) {
          for (let e = this.stashMarks.length - 1; e >= 0; e--)
            if (t.eq(this.stashMarks[e]))
              return this.stashMarks.splice(e, 1)[0];
        }
        applyPending(t) {
          for (let e = 0, n = this.pendingMarks; e < n.length; e++) {
            let r = n[e];
            (this.type ? this.type.allowsMarkType(r.type) : ot(r.type, t)) &&
              !r.isInSet(this.activeMarks) &&
              ((this.activeMarks = r.addToSet(this.activeMarks)),
              (this.pendingMarks = r.removeFromSet(this.pendingMarks)));
          }
        }
        inlineContext(t) {
          return this.type
            ? this.type.inlineContent
            : this.content.length
              ? this.content[0].isInline
              : t.parentNode &&
                !Q.hasOwnProperty(t.parentNode.nodeName.toLowerCase());
        }
      }
      class rt {
        constructor(t, e, n) {
          (this.parser = t),
            (this.options = e),
            (this.isOpen = n),
            (this.open = 0);
          let r,
            i = e.topNode,
            s = et(null, e.preserveWhitespace, 0) | (n ? 4 : 0);
          (r = i
            ? new nt(
                i.type,
                i.attrs,
                p.none,
                p.none,
                !0,
                e.topMatch || i.type.contentMatch,
                s,
              )
            : new nt(
                n ? null : t.schema.topNodeType,
                null,
                p.none,
                p.none,
                !0,
                null,
                s,
              )),
            (this.nodes = [r]),
            (this.find = e.findPositions),
            (this.needsBlock = !1);
        }
        get top() {
          return this.nodes[this.open];
        }
        addDOM(t) {
          3 == t.nodeType
            ? this.addTextNode(t)
            : 1 == t.nodeType && this.addElement(t);
        }
        withStyleRules(t, e) {
          let n = t.getAttribute("style");
          if (!n) return e();
          let r = this.readStyles(
            (function (t) {
              let e,
                n = /\s*([\w-]+)\s*:\s*([^;]+)/g,
                r = [];
              for (; (e = n.exec(t)); ) r.push(e[1], e[2].trim());
              return r;
            })(n),
          );
          if (!r) return;
          let [i, s] = r,
            o = this.top;
          for (let t = 0; t < s.length; t++) this.removePendingMark(s[t], o);
          for (let t = 0; t < i.length; t++) this.addPendingMark(i[t]);
          e();
          for (let t = 0; t < i.length; t++) this.removePendingMark(i[t], o);
          for (let t = 0; t < s.length; t++) this.addPendingMark(s[t]);
        }
        addTextNode(t) {
          let e = t.nodeValue,
            n = this.top;
          if (
            2 & n.options ||
            n.inlineContext(t) ||
            /[^ \t\r\n\u000c]/.test(e)
          ) {
            if (1 & n.options)
              e =
                2 & n.options
                  ? e.replace(/\r\n?/g, "\n")
                  : e.replace(/\r?\n|\r/g, " ");
            else if (
              ((e = e.replace(/[ \t\r\n\u000c]+/g, " ")),
              /^[ \t\r\n\u000c]/.test(e) && this.open == this.nodes.length - 1)
            ) {
              let r = n.content[n.content.length - 1],
                i = t.previousSibling;
              (!r ||
                (i && "BR" == i.nodeName) ||
                (r.isText && /[ \t\r\n\u000c]$/.test(r.text))) &&
                (e = e.slice(1));
            }
            e && this.insertNode(this.parser.schema.text(e)),
              this.findInText(t);
          } else this.findInside(t);
        }
        addElement(t, e) {
          let n,
            r = t.nodeName.toLowerCase();
          tt.hasOwnProperty(r) &&
            this.parser.normalizeLists &&
            (function (t) {
              for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
                let t = 1 == e.nodeType ? e.nodeName.toLowerCase() : null;
                t && tt.hasOwnProperty(t) && n
                  ? (n.appendChild(e), (e = n))
                  : "li" == t
                    ? (n = e)
                    : t && (n = null);
              }
            })(t);
          let i =
            (this.options.ruleFromNode && this.options.ruleFromNode(t)) ||
            (n = this.parser.matchTag(t, this, e));
          if (i ? i.ignore : Y.hasOwnProperty(r))
            this.findInside(t), this.ignoreFallback(t);
          else if (!i || i.skip || i.closeParent) {
            i && i.closeParent
              ? (this.open = Math.max(0, this.open - 1))
              : i && i.skip.nodeType && (t = i.skip);
            let e,
              n = this.top,
              s = this.needsBlock;
            if (Q.hasOwnProperty(r))
              n.content.length &&
                n.content[0].isInline &&
                this.open &&
                (this.open--, (n = this.top)),
                (e = !0),
                n.type || (this.needsBlock = !0);
            else if (!t.firstChild) return void this.leafFallback(t);
            i && i.skip
              ? this.addAll(t)
              : this.withStyleRules(t, () => this.addAll(t)),
              e && this.sync(n),
              (this.needsBlock = s);
          } else
            this.withStyleRules(t, () => {
              this.addElementByRule(t, i, !1 === i.consuming ? n : void 0);
            });
        }
        leafFallback(t) {
          "BR" == t.nodeName &&
            this.top.type &&
            this.top.type.inlineContent &&
            this.addTextNode(t.ownerDocument.createTextNode("\n"));
        }
        ignoreFallback(t) {
          "BR" != t.nodeName ||
            (this.top.type && this.top.type.inlineContent) ||
            this.findPlace(this.parser.schema.text("-"));
        }
        readStyles(t) {
          let e = p.none,
            n = p.none;
          for (let r = 0; r < t.length; r += 2)
            for (let i; ; ) {
              let s = this.parser.matchStyle(t[r], t[r + 1], this, i);
              if (!s) break;
              if (s.ignore) return null;
              if (
                (s.clearMark
                  ? this.top.pendingMarks
                      .concat(this.top.activeMarks)
                      .forEach((t) => {
                        s.clearMark(t) && (n = t.addToSet(n));
                      })
                  : (e = this.parser.schema.marks[s.mark]
                      .create(s.attrs)
                      .addToSet(e)),
                !1 !== s.consuming)
              )
                break;
              i = s;
            }
          return [e, n];
        }
        addElementByRule(t, e, n) {
          let r, i, s;
          if (e.node)
            (i = this.parser.schema.nodes[e.node]),
              i.isLeaf
                ? this.insertNode(i.create(e.attrs)) || this.leafFallback(t)
                : (r = this.enter(i, e.attrs || null, e.preserveWhitespace));
          else {
            (s = this.parser.schema.marks[e.mark].create(e.attrs)),
              this.addPendingMark(s);
          }
          let o = this.top;
          if (i && i.isLeaf) this.findInside(t);
          else if (n) this.addElement(t, n);
          else if (e.getContent)
            this.findInside(t),
              e
                .getContent(t, this.parser.schema)
                .forEach((t) => this.insertNode(t));
          else {
            let n = t;
            "string" == typeof e.contentElement
              ? (n = t.querySelector(e.contentElement))
              : "function" == typeof e.contentElement
                ? (n = e.contentElement(t))
                : e.contentElement && (n = e.contentElement),
              this.findAround(t, n, !0),
              this.addAll(n);
          }
          r && this.sync(o) && this.open--, s && this.removePendingMark(s, o);
        }
        addAll(t, e, n) {
          let r = e || 0;
          for (
            let i = e ? t.childNodes[e] : t.firstChild,
              s = null == n ? null : t.childNodes[n];
            i != s;
            i = i.nextSibling, ++r
          )
            this.findAtPoint(t, r), this.addDOM(i);
          this.findAtPoint(t, r);
        }
        findPlace(t) {
          let e, n;
          for (let r = this.open; r >= 0; r--) {
            let i = this.nodes[r],
              s = i.findWrapping(t);
            if (
              s &&
              (!e || e.length > s.length) &&
              ((e = s), (n = i), !s.length)
            )
              break;
            if (i.solid) break;
          }
          if (!e) return !1;
          this.sync(n);
          for (let t = 0; t < e.length; t++) this.enterInner(e[t], null, !1);
          return !0;
        }
        insertNode(t) {
          if (t.isInline && this.needsBlock && !this.top.type) {
            let t = this.textblockFromContext();
            t && this.enterInner(t);
          }
          if (this.findPlace(t)) {
            this.closeExtra();
            let e = this.top;
            e.applyPending(t.type),
              e.match && (e.match = e.match.matchType(t.type));
            let n = e.activeMarks;
            for (let r = 0; r < t.marks.length; r++)
              (e.type && !e.type.allowsMarkType(t.marks[r].type)) ||
                (n = t.marks[r].addToSet(n));
            return e.content.push(t.mark(n)), !0;
          }
          return !1;
        }
        enter(t, e, n) {
          let r = this.findPlace(t.create(e));
          return r && this.enterInner(t, e, !0, n), r;
        }
        enterInner(t, e = null, n = !1, r) {
          this.closeExtra();
          let i = this.top;
          i.applyPending(t), (i.match = i.match && i.match.matchType(t));
          let s = et(t, r, i.options);
          4 & i.options && 0 == i.content.length && (s |= 4),
            this.nodes.push(
              new nt(t, e, i.activeMarks, i.pendingMarks, n, null, s),
            ),
            this.open++;
        }
        closeExtra(t = !1) {
          let e = this.nodes.length - 1;
          if (e > this.open) {
            for (; e > this.open; e--)
              this.nodes[e - 1].content.push(this.nodes[e].finish(t));
            this.nodes.length = this.open + 1;
          }
        }
        finish() {
          return (
            (this.open = 0),
            this.closeExtra(this.isOpen),
            this.nodes[0].finish(this.isOpen || this.options.topOpen)
          );
        }
        sync(t) {
          for (let e = this.open; e >= 0; e--)
            if (this.nodes[e] == t) return (this.open = e), !0;
          return !1;
        }
        get currentPos() {
          this.closeExtra();
          let t = 0;
          for (let e = this.open; e >= 0; e--) {
            let n = this.nodes[e].content;
            for (let e = n.length - 1; e >= 0; e--) t += n[e].nodeSize;
            e && t++;
          }
          return t;
        }
        findAtPoint(t, e) {
          if (this.find)
            for (let n = 0; n < this.find.length; n++)
              this.find[n].node == t &&
                this.find[n].offset == e &&
                (this.find[n].pos = this.currentPos);
        }
        findInside(t) {
          if (this.find)
            for (let e = 0; e < this.find.length; e++)
              null == this.find[e].pos &&
                1 == t.nodeType &&
                t.contains(this.find[e].node) &&
                (this.find[e].pos = this.currentPos);
        }
        findAround(t, e, n) {
          if (t != e && this.find)
            for (let r = 0; r < this.find.length; r++)
              if (
                null == this.find[r].pos &&
                1 == t.nodeType &&
                t.contains(this.find[r].node)
              ) {
                e.compareDocumentPosition(this.find[r].node) & (n ? 2 : 4) &&
                  (this.find[r].pos = this.currentPos);
              }
        }
        findInText(t) {
          if (this.find)
            for (let e = 0; e < this.find.length; e++)
              this.find[e].node == t &&
                (this.find[e].pos =
                  this.currentPos - (t.nodeValue.length - this.find[e].offset));
        }
        matchesContext(t) {
          if (t.indexOf("|") > -1)
            return t.split(/\s*\|\s*/).some(this.matchesContext, this);
          let e = t.split("/"),
            n = this.options.context,
            r = !(this.isOpen || (n && n.parent.type != this.nodes[0].type)),
            i = -(n ? n.depth + 1 : 0) + (r ? 0 : 1),
            s = (t, o) => {
              for (; t >= 0; t--) {
                let l = e[t];
                if ("" == l) {
                  if (t == e.length - 1 || 0 == t) continue;
                  for (; o >= i; o--) if (s(t - 1, o)) return !0;
                  return !1;
                }
                {
                  let t =
                    o > 0 || (0 == o && r)
                      ? this.nodes[o].type
                      : n && o >= i
                        ? n.node(o - i).type
                        : null;
                  if (!t || (t.name != l && -1 == t.groups.indexOf(l)))
                    return !1;
                  o--;
                }
              }
              return !0;
            };
          return s(e.length - 1, this.open);
        }
        textblockFromContext() {
          let t = this.options.context;
          if (t)
            for (let e = t.depth; e >= 0; e--) {
              let n = t.node(e).contentMatchAt(t.indexAfter(e)).defaultType;
              if (n && n.isTextblock && n.defaultAttrs) return n;
            }
          for (let t in this.parser.schema.nodes) {
            let e = this.parser.schema.nodes[t];
            if (e.isTextblock && e.defaultAttrs) return e;
          }
        }
        addPendingMark(t) {
          let e = (function (t, e) {
            for (let n = 0; n < e.length; n++) if (t.eq(e[n])) return e[n];
          })(t, this.top.pendingMarks);
          e && this.top.stashMarks.push(e),
            (this.top.pendingMarks = t.addToSet(this.top.pendingMarks));
        }
        removePendingMark(t, e) {
          for (let n = this.open; n >= 0; n--) {
            let r = this.nodes[n];
            if (r.pendingMarks.lastIndexOf(t) > -1)
              r.pendingMarks = t.removeFromSet(r.pendingMarks);
            else {
              r.activeMarks = t.removeFromSet(r.activeMarks);
              let e = r.popFromStashMark(t);
              e &&
                r.type &&
                r.type.allowsMarkType(e.type) &&
                (r.activeMarks = e.addToSet(r.activeMarks));
            }
            if (r == e) break;
          }
        }
      }
      function it(t, e) {
        return (
          t.matches ||
          t.msMatchesSelector ||
          t.webkitMatchesSelector ||
          t.mozMatchesSelector
        ).call(t, e);
      }
      function st(t) {
        let e = {};
        for (let n in t) e[n] = t[n];
        return e;
      }
      function ot(t, e) {
        let n = e.schema.nodes;
        for (let r in n) {
          let i = n[r];
          if (!i.allowsMarkType(t)) continue;
          let s = [],
            o = (t) => {
              s.push(t);
              for (let n = 0; n < t.edgeCount; n++) {
                let { type: r, next: i } = t.edge(n);
                if (r == e) return !0;
                if (s.indexOf(i) < 0 && o(i)) return !0;
              }
            };
          if (o(i.contentMatch)) return !0;
        }
      }
      class lt {
        constructor(t, e) {
          (this.nodes = t), (this.marks = e);
        }
        serializeFragment(t, e = {}, n) {
          n || (n = at(e).createDocumentFragment());
          let r = n,
            i = [];
          return (
            t.forEach((t) => {
              if (i.length || t.marks.length) {
                let n = 0,
                  s = 0;
                for (; n < i.length && s < t.marks.length; ) {
                  let e = t.marks[s];
                  if (this.marks[e.type.name]) {
                    if (!e.eq(i[n][0]) || !1 === e.type.spec.spanning) break;
                    n++, s++;
                  } else s++;
                }
                for (; n < i.length; ) r = i.pop()[1];
                for (; s < t.marks.length; ) {
                  let n = t.marks[s++],
                    o = this.serializeMark(n, t.isInline, e);
                  o &&
                    (i.push([n, r]),
                    r.appendChild(o.dom),
                    (r = o.contentDOM || o.dom));
                }
              }
              r.appendChild(this.serializeNodeInner(t, e));
            }),
            n
          );
        }
        serializeNodeInner(t, e) {
          let { dom: n, contentDOM: r } = lt.renderSpec(
            at(e),
            this.nodes[t.type.name](t),
          );
          if (r) {
            if (t.isLeaf)
              throw new RangeError(
                "Content hole not allowed in a leaf node spec",
              );
            this.serializeFragment(t.content, e, r);
          }
          return n;
        }
        serializeNode(t, e = {}) {
          let n = this.serializeNodeInner(t, e);
          for (let r = t.marks.length - 1; r >= 0; r--) {
            let i = this.serializeMark(t.marks[r], t.isInline, e);
            i && ((i.contentDOM || i.dom).appendChild(n), (n = i.dom));
          }
          return n;
        }
        serializeMark(t, e, n = {}) {
          let r = this.marks[t.type.name];
          return r && lt.renderSpec(at(n), r(t, e));
        }
        static renderSpec(t, e, n = null) {
          if ("string" == typeof e) return { dom: t.createTextNode(e) };
          if (null != e.nodeType) return { dom: e };
          if (e.dom && null != e.dom.nodeType) return e;
          let r,
            i = e[0],
            s = i.indexOf(" ");
          s > 0 && ((n = i.slice(0, s)), (i = i.slice(s + 1)));
          let o = n ? t.createElementNS(n, i) : t.createElement(i),
            l = e[1],
            h = 1;
          if (
            l &&
            "object" == typeof l &&
            null == l.nodeType &&
            !Array.isArray(l)
          ) {
            h = 2;
            for (let t in l)
              if (null != l[t]) {
                let e = t.indexOf(" ");
                e > 0
                  ? o.setAttributeNS(t.slice(0, e), t.slice(e + 1), l[t])
                  : o.setAttribute(t, l[t]);
              }
          }
          for (let i = h; i < e.length; i++) {
            let s = e[i];
            if (0 === s) {
              if (i < e.length - 1 || i > h)
                throw new RangeError(
                  "Content hole must be the only child of its parent node",
                );
              return { dom: o, contentDOM: o };
            }
            {
              let { dom: e, contentDOM: i } = lt.renderSpec(t, s, n);
              if ((o.appendChild(e), i)) {
                if (r) throw new RangeError("Multiple content holes");
                r = i;
              }
            }
          }
          return { dom: o, contentDOM: r };
        }
        static fromSchema(t) {
          return (
            t.cached.domSerializer ||
            (t.cached.domSerializer = new lt(
              this.nodesFromSchema(t),
              this.marksFromSchema(t),
            ))
          );
        }
        static nodesFromSchema(t) {
          let e = ht(t.nodes);
          return e.text || (e.text = (t) => t.text), e;
        }
        static marksFromSchema(t) {
          return ht(t.marks);
        }
      }
      function ht(t) {
        let e = {};
        for (let n in t) {
          let r = t[n].spec.toDOM;
          r && (e[n] = r);
        }
        return e;
      }
      function at(t) {
        return t.document || window.document;
      }
    },
    52893: (t, e, n) => {
      n.d(e, {
        $t: () => M,
        LN: () => o,
        U3: () => c,
        hs: () => N,
        i5: () => u,
        k_: () => C,
        nh: () => f,
      });
      var r = n(57053),
        i = n(63734);
      const s = Object.create(null);
      class o {
        constructor(t, e, n) {
          (this.$anchor = t),
            (this.$head = e),
            (this.ranges = n || [new l(t.min(e), t.max(e))]);
        }
        get anchor() {
          return this.$anchor.pos;
        }
        get head() {
          return this.$head.pos;
        }
        get from() {
          return this.$from.pos;
        }
        get to() {
          return this.$to.pos;
        }
        get $from() {
          return this.ranges[0].$from;
        }
        get $to() {
          return this.ranges[0].$to;
        }
        get empty() {
          let t = this.ranges;
          for (let e = 0; e < t.length; e++)
            if (t[e].$from.pos != t[e].$to.pos) return !1;
          return !0;
        }
        content() {
          return this.$from.doc.slice(this.from, this.to, !0);
        }
        replace(t, e = r.Ji.empty) {
          let n = e.content.lastChild,
            i = null;
          for (let t = 0; t < e.openEnd; t++) (i = n), (n = n.lastChild);
          let s = t.steps.length,
            o = this.ranges;
          for (let l = 0; l < o.length; l++) {
            let { $from: h, $to: a } = o[l],
              c = t.mapping.slice(s);
            t.replaceRange(c.map(h.pos), c.map(a.pos), l ? r.Ji.empty : e),
              0 == l && y(t, s, (n ? n.isInline : i && i.isTextblock) ? -1 : 1);
          }
        }
        replaceWith(t, e) {
          let n = t.steps.length,
            r = this.ranges;
          for (let i = 0; i < r.length; i++) {
            let { $from: s, $to: o } = r[i],
              l = t.mapping.slice(n),
              h = l.map(s.pos),
              a = l.map(o.pos);
            i
              ? t.deleteRange(h, a)
              : (t.replaceRangeWith(h, a, e), y(t, n, e.isInline ? -1 : 1));
          }
        }
        static findFrom(t, e, n = !1) {
          let r = t.parent.inlineContent
            ? new c(t)
            : g(t.node(0), t.parent, t.pos, t.index(), e, n);
          if (r) return r;
          for (let r = t.depth - 1; r >= 0; r--) {
            let i =
              e < 0
                ? g(t.node(0), t.node(r), t.before(r + 1), t.index(r), e, n)
                : g(t.node(0), t.node(r), t.after(r + 1), t.index(r) + 1, e, n);
            if (i) return i;
          }
          return null;
        }
        static near(t, e = 1) {
          return (
            this.findFrom(t, e) || this.findFrom(t, -e) || new u(t.node(0))
          );
        }
        static atStart(t) {
          return g(t, t, 0, 0, 1) || new u(t);
        }
        static atEnd(t) {
          return g(t, t, t.content.size, t.childCount, -1) || new u(t);
        }
        static fromJSON(t, e) {
          if (!e || !e.type)
            throw new RangeError("Invalid input for Selection.fromJSON");
          let n = s[e.type];
          if (!n) throw new RangeError(`No selection type ${e.type} defined`);
          return n.fromJSON(t, e);
        }
        static jsonID(t, e) {
          if (t in s)
            throw new RangeError("Duplicate use of selection JSON ID " + t);
          return (s[t] = e), (e.prototype.jsonID = t), e;
        }
        getBookmark() {
          return c.between(this.$anchor, this.$head).getBookmark();
        }
      }
      o.prototype.visible = !0;
      class l {
        constructor(t, e) {
          (this.$from = t), (this.$to = e);
        }
      }
      let h = !1;
      function a(t) {
        h ||
          t.parent.inlineContent ||
          ((h = !0),
          console.warn(
            "TextSelection endpoint not pointing into a node with inline content (" +
              t.parent.type.name +
              ")",
          ));
      }
      class c extends o {
        constructor(t, e = t) {
          a(t), a(e), super(t, e);
        }
        get $cursor() {
          return this.$anchor.pos == this.$head.pos ? this.$head : null;
        }
        map(t, e) {
          let n = t.resolve(e.map(this.head));
          if (!n.parent.inlineContent) return o.near(n);
          let r = t.resolve(e.map(this.anchor));
          return new c(r.parent.inlineContent ? r : n, n);
        }
        replace(t, e = r.Ji.empty) {
          if ((super.replace(t, e), e == r.Ji.empty)) {
            let e = this.$from.marksAcross(this.$to);
            e && t.ensureMarks(e);
          }
        }
        eq(t) {
          return (
            t instanceof c && t.anchor == this.anchor && t.head == this.head
          );
        }
        getBookmark() {
          return new p(this.anchor, this.head);
        }
        toJSON() {
          return { type: "text", anchor: this.anchor, head: this.head };
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.anchor || "number" != typeof e.head)
            throw new RangeError("Invalid input for TextSelection.fromJSON");
          return new c(t.resolve(e.anchor), t.resolve(e.head));
        }
        static create(t, e, n = e) {
          let r = t.resolve(e);
          return new this(r, n == e ? r : t.resolve(n));
        }
        static between(t, e, n) {
          let r = t.pos - e.pos;
          if (((n && !r) || (n = r >= 0 ? 1 : -1), !e.parent.inlineContent)) {
            let t = o.findFrom(e, n, !0) || o.findFrom(e, -n, !0);
            if (!t) return o.near(e, n);
            e = t.$head;
          }
          return (
            t.parent.inlineContent ||
              ((0 == r ||
                (t = (o.findFrom(t, -n, !0) || o.findFrom(t, n, !0)).$anchor)
                  .pos <
                  e.pos !=
                  r < 0) &&
                (t = e)),
            new c(t, e)
          );
        }
      }
      o.jsonID("text", c);
      class p {
        constructor(t, e) {
          (this.anchor = t), (this.head = e);
        }
        map(t) {
          return new p(t.map(this.anchor), t.map(this.head));
        }
        resolve(t) {
          return c.between(t.resolve(this.anchor), t.resolve(this.head));
        }
      }
      class f extends o {
        constructor(t) {
          let e = t.nodeAfter,
            n = t.node(0).resolve(t.pos + e.nodeSize);
          super(t, n), (this.node = e);
        }
        map(t, e) {
          let { deleted: n, pos: r } = e.mapResult(this.anchor),
            i = t.resolve(r);
          return n ? o.near(i) : new f(i);
        }
        content() {
          return new r.Ji(r.FK.from(this.node), 0, 0);
        }
        eq(t) {
          return t instanceof f && t.anchor == this.anchor;
        }
        toJSON() {
          return { type: "node", anchor: this.anchor };
        }
        getBookmark() {
          return new d(this.anchor);
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.anchor)
            throw new RangeError("Invalid input for NodeSelection.fromJSON");
          return new f(t.resolve(e.anchor));
        }
        static create(t, e) {
          return new f(t.resolve(e));
        }
        static isSelectable(t) {
          return !t.isText && !1 !== t.type.spec.selectable;
        }
      }
      (f.prototype.visible = !1), o.jsonID("node", f);
      class d {
        constructor(t) {
          this.anchor = t;
        }
        map(t) {
          let { deleted: e, pos: n } = t.mapResult(this.anchor);
          return e ? new p(n, n) : new d(n);
        }
        resolve(t) {
          let e = t.resolve(this.anchor),
            n = e.nodeAfter;
          return n && f.isSelectable(n) ? new f(e) : o.near(e);
        }
      }
      class u extends o {
        constructor(t) {
          super(t.resolve(0), t.resolve(t.content.size));
        }
        replace(t, e = r.Ji.empty) {
          if (e == r.Ji.empty) {
            t.delete(0, t.doc.content.size);
            let e = o.atStart(t.doc);
            e.eq(t.selection) || t.setSelection(e);
          } else super.replace(t, e);
        }
        toJSON() {
          return { type: "all" };
        }
        static fromJSON(t) {
          return new u(t);
        }
        map(t) {
          return new u(t);
        }
        eq(t) {
          return t instanceof u;
        }
        getBookmark() {
          return m;
        }
      }
      o.jsonID("all", u);
      const m = {
        map() {
          return this;
        },
        resolve: (t) => new u(t),
      };
      function g(t, e, n, r, i, s = !1) {
        if (e.inlineContent) return c.create(t, n);
        for (
          let o = r - (i > 0 ? 0 : 1);
          i > 0 ? o < e.childCount : o >= 0;
          o += i
        ) {
          let r = e.child(o);
          if (r.isAtom) {
            if (!s && f.isSelectable(r))
              return f.create(t, n - (i < 0 ? r.nodeSize : 0));
          } else {
            let e = g(t, r, n + i, i < 0 ? r.childCount : 0, i, s);
            if (e) return e;
          }
          n += r.nodeSize * i;
        }
        return null;
      }
      function y(t, e, n) {
        let r = t.steps.length - 1;
        if (r < e) return;
        let s,
          l = t.steps[r];
        (l instanceof i.Ln || l instanceof i.Wg) &&
          (t.mapping.maps[r].forEach((t, e, n, r) => {
            null == s && (s = r);
          }),
          t.setSelection(o.near(t.doc.resolve(s), n)));
      }
      class k extends i.dL {
        constructor(t) {
          super(t.doc),
            (this.curSelectionFor = 0),
            (this.updated = 0),
            (this.meta = Object.create(null)),
            (this.time = Date.now()),
            (this.curSelection = t.selection),
            (this.storedMarks = t.storedMarks);
        }
        get selection() {
          return (
            this.curSelectionFor < this.steps.length &&
              ((this.curSelection = this.curSelection.map(
                this.doc,
                this.mapping.slice(this.curSelectionFor),
              )),
              (this.curSelectionFor = this.steps.length)),
            this.curSelection
          );
        }
        setSelection(t) {
          if (t.$from.doc != this.doc)
            throw new RangeError(
              "Selection passed to setSelection must point at the current document",
            );
          return (
            (this.curSelection = t),
            (this.curSelectionFor = this.steps.length),
            (this.updated = -3 & (1 | this.updated)),
            (this.storedMarks = null),
            this
          );
        }
        get selectionSet() {
          return (1 & this.updated) > 0;
        }
        setStoredMarks(t) {
          return (this.storedMarks = t), (this.updated |= 2), this;
        }
        ensureMarks(t) {
          return (
            r.CU.sameSet(this.storedMarks || this.selection.$from.marks(), t) ||
              this.setStoredMarks(t),
            this
          );
        }
        addStoredMark(t) {
          return this.ensureMarks(
            t.addToSet(this.storedMarks || this.selection.$head.marks()),
          );
        }
        removeStoredMark(t) {
          return this.ensureMarks(
            t.removeFromSet(this.storedMarks || this.selection.$head.marks()),
          );
        }
        get storedMarksSet() {
          return (2 & this.updated) > 0;
        }
        addStep(t, e) {
          super.addStep(t, e),
            (this.updated = -3 & this.updated),
            (this.storedMarks = null);
        }
        setTime(t) {
          return (this.time = t), this;
        }
        replaceSelection(t) {
          return this.selection.replace(this, t), this;
        }
        replaceSelectionWith(t, e = !0) {
          let n = this.selection;
          return (
            e &&
              (t = t.mark(
                this.storedMarks ||
                  (n.empty
                    ? n.$from.marks()
                    : n.$from.marksAcross(n.$to) || r.CU.none),
              )),
            n.replaceWith(this, t),
            this
          );
        }
        deleteSelection() {
          return this.selection.replace(this), this;
        }
        insertText(t, e, n) {
          let r = this.doc.type.schema;
          if (null == e)
            return t
              ? this.replaceSelectionWith(r.text(t), !0)
              : this.deleteSelection();
          {
            if ((null == n && (n = e), (n = null == n ? e : n), !t))
              return this.deleteRange(e, n);
            let i = this.storedMarks;
            if (!i) {
              let t = this.doc.resolve(e);
              i = n == e ? t.marks() : t.marksAcross(this.doc.resolve(n));
            }
            return (
              this.replaceRangeWith(e, n, r.text(t, i)),
              this.selection.empty ||
                this.setSelection(o.near(this.selection.$to)),
              this
            );
          }
        }
        setMeta(t, e) {
          return (this.meta["string" == typeof t ? t : t.key] = e), this;
        }
        getMeta(t) {
          return this.meta["string" == typeof t ? t : t.key];
        }
        get isGeneric() {
          for (let t in this.meta) return !1;
          return !0;
        }
        scrollIntoView() {
          return (this.updated |= 4), this;
        }
        get scrolledIntoView() {
          return (4 & this.updated) > 0;
        }
      }
      function w(t, e) {
        return e && t ? t.bind(e) : t;
      }
      class x {
        constructor(t, e, n) {
          (this.name = t),
            (this.init = w(e.init, n)),
            (this.apply = w(e.apply, n));
        }
      }
      const S = [
        new x("doc", {
          init: (t) => t.doc || t.schema.topNodeType.createAndFill(),
          apply: (t) => t.doc,
        }),
        new x("selection", {
          init: (t, e) => t.selection || o.atStart(e.doc),
          apply: (t) => t.selection,
        }),
        new x("storedMarks", {
          init: (t) => t.storedMarks || null,
          apply: (t, e, n, r) => (r.selection.$cursor ? t.storedMarks : null),
        }),
        new x("scrollToSelection", {
          init: () => 0,
          apply: (t, e) => (t.scrolledIntoView ? e + 1 : e),
        }),
      ];
      class v {
        constructor(t, e) {
          (this.schema = t),
            (this.plugins = []),
            (this.pluginsByKey = Object.create(null)),
            (this.fields = S.slice()),
            e &&
              e.forEach((t) => {
                if (this.pluginsByKey[t.key])
                  throw new RangeError(
                    "Adding different instances of a keyed plugin (" +
                      t.key +
                      ")",
                  );
                this.plugins.push(t),
                  (this.pluginsByKey[t.key] = t),
                  t.spec.state &&
                    this.fields.push(new x(t.key, t.spec.state, t));
              });
        }
      }
      class M {
        constructor(t) {
          this.config = t;
        }
        get schema() {
          return this.config.schema;
        }
        get plugins() {
          return this.config.plugins;
        }
        apply(t) {
          return this.applyTransaction(t).state;
        }
        filterTransaction(t, e = -1) {
          for (let n = 0; n < this.config.plugins.length; n++)
            if (n != e) {
              let e = this.config.plugins[n];
              if (
                e.spec.filterTransaction &&
                !e.spec.filterTransaction.call(e, t, this)
              )
                return !1;
            }
          return !0;
        }
        applyTransaction(t) {
          if (!this.filterTransaction(t))
            return { state: this, transactions: [] };
          let e = [t],
            n = this.applyInner(t),
            r = null;
          for (;;) {
            let i = !1;
            for (let s = 0; s < this.config.plugins.length; s++) {
              let o = this.config.plugins[s];
              if (o.spec.appendTransaction) {
                let l = r ? r[s].n : 0,
                  h = r ? r[s].state : this,
                  a =
                    l < e.length &&
                    o.spec.appendTransaction.call(o, l ? e.slice(l) : e, h, n);
                if (a && n.filterTransaction(a, s)) {
                  if ((a.setMeta("appendedTransaction", t), !r)) {
                    r = [];
                    for (let t = 0; t < this.config.plugins.length; t++)
                      r.push(
                        t < s
                          ? { state: n, n: e.length }
                          : { state: this, n: 0 },
                      );
                  }
                  e.push(a), (n = n.applyInner(a)), (i = !0);
                }
                r && (r[s] = { state: n, n: e.length });
              }
            }
            if (!i) return { state: n, transactions: e };
          }
        }
        applyInner(t) {
          if (!t.before.eq(this.doc))
            throw new RangeError("Applying a mismatched transaction");
          let e = new M(this.config),
            n = this.config.fields;
          for (let r = 0; r < n.length; r++) {
            let i = n[r];
            e[i.name] = i.apply(t, this[i.name], this, e);
          }
          return e;
        }
        get tr() {
          return new k(this);
        }
        static create(t) {
          let e = new v(t.doc ? t.doc.type.schema : t.schema, t.plugins),
            n = new M(e);
          for (let r = 0; r < e.fields.length; r++)
            n[e.fields[r].name] = e.fields[r].init(t, n);
          return n;
        }
        reconfigure(t) {
          let e = new v(this.schema, t.plugins),
            n = e.fields,
            r = new M(e);
          for (let e = 0; e < n.length; e++) {
            let i = n[e].name;
            r[i] = this.hasOwnProperty(i) ? this[i] : n[e].init(t, r);
          }
          return r;
        }
        toJSON(t) {
          let e = {
            doc: this.doc.toJSON(),
            selection: this.selection.toJSON(),
          };
          if (
            (this.storedMarks &&
              (e.storedMarks = this.storedMarks.map((t) => t.toJSON())),
            t && "object" == typeof t)
          )
            for (let n in t) {
              if ("doc" == n || "selection" == n)
                throw new RangeError(
                  "The JSON fields `doc` and `selection` are reserved",
                );
              let r = t[n],
                i = r.spec.state;
              i && i.toJSON && (e[n] = i.toJSON.call(r, this[r.key]));
            }
          return e;
        }
        static fromJSON(t, e, n) {
          if (!e)
            throw new RangeError("Invalid input for EditorState.fromJSON");
          if (!t.schema)
            throw new RangeError("Required config field 'schema' missing");
          let i = new v(t.schema, t.plugins),
            s = new M(i);
          return (
            i.fields.forEach((i) => {
              if ("doc" == i.name) s.doc = r.bP.fromJSON(t.schema, e.doc);
              else if ("selection" == i.name)
                s.selection = o.fromJSON(s.doc, e.selection);
              else if ("storedMarks" == i.name)
                e.storedMarks &&
                  (s.storedMarks = e.storedMarks.map(t.schema.markFromJSON));
              else {
                if (n)
                  for (let r in n) {
                    let o = n[r],
                      l = o.spec.state;
                    if (
                      o.key == i.name &&
                      l &&
                      l.fromJSON &&
                      Object.prototype.hasOwnProperty.call(e, r)
                    )
                      return void (s[i.name] = l.fromJSON.call(o, t, e[r], s));
                  }
                s[i.name] = i.init(t, s);
              }
            }),
            s
          );
        }
      }
      function b(t, e, n) {
        for (let r in t) {
          let i = t[r];
          i instanceof Function
            ? (i = i.bind(e))
            : "handleDOMEvents" == r && (i = b(i, e, {})),
            (n[r] = i);
        }
        return n;
      }
      class C {
        constructor(t) {
          (this.spec = t),
            (this.props = {}),
            t.props && b(t.props, this, this.props),
            (this.key = t.key ? t.key.key : T("plugin"));
        }
        getState(t) {
          return t[this.key];
        }
      }
      const O = Object.create(null);
      function T(t) {
        return t in O ? t + "$" + ++O[t] : ((O[t] = 0), t + "$");
      }
      class N {
        constructor(t = "key") {
          this.key = T(t);
        }
        get(t) {
          return t.config.pluginsByKey[this.key];
        }
        getState(t) {
          return t[this.key];
        }
      }
    },
    63734: (t, e, n) => {
      n.d(e, {
        $L: () => E,
        Ln: () => y,
        Um: () => N,
        Wg: () => k,
        X9: () => h,
        dL: () => L,
        jP: () => v,
        n9: () => O,
        oM: () => M,
        zy: () => C,
      });
      var r = n(57053);
      const i = Math.pow(2, 16);
      function s(t) {
        return 65535 & t;
      }
      class o {
        constructor(t, e, n) {
          (this.pos = t), (this.delInfo = e), (this.recover = n);
        }
        get deleted() {
          return (8 & this.delInfo) > 0;
        }
        get deletedBefore() {
          return (5 & this.delInfo) > 0;
        }
        get deletedAfter() {
          return (6 & this.delInfo) > 0;
        }
        get deletedAcross() {
          return (4 & this.delInfo) > 0;
        }
      }
      class l {
        constructor(t, e = !1) {
          if (((this.ranges = t), (this.inverted = e), !t.length && l.empty))
            return l.empty;
        }
        recover(t) {
          let e = 0,
            n = s(t);
          if (!this.inverted)
            for (let t = 0; t < n; t++)
              e += this.ranges[3 * t + 2] - this.ranges[3 * t + 1];
          return (
            this.ranges[3 * n] +
            e +
            (function (t) {
              return (t - (65535 & t)) / i;
            })(t)
          );
        }
        mapResult(t, e = 1) {
          return this._map(t, e, !1);
        }
        map(t, e = 1) {
          return this._map(t, e, !0);
        }
        _map(t, e, n) {
          let r = 0,
            s = this.inverted ? 2 : 1,
            l = this.inverted ? 1 : 2;
          for (let h = 0; h < this.ranges.length; h += 3) {
            let a = this.ranges[h] - (this.inverted ? r : 0);
            if (a > t) break;
            let c = this.ranges[h + s],
              p = this.ranges[h + l],
              f = a + c;
            if (t <= f) {
              let s =
                a + r + ((c ? (t == a ? -1 : t == f ? 1 : e) : e) < 0 ? 0 : p);
              if (n) return s;
              let l = t == (e < 0 ? a : f) ? null : h / 3 + (t - a) * i,
                d = t == a ? 2 : t == f ? 1 : 4;
              return (e < 0 ? t != a : t != f) && (d |= 8), new o(s, d, l);
            }
            r += p - c;
          }
          return n ? t + r : new o(t + r, 0, null);
        }
        touches(t, e) {
          let n = 0,
            r = s(e),
            i = this.inverted ? 2 : 1,
            o = this.inverted ? 1 : 2;
          for (let e = 0; e < this.ranges.length; e += 3) {
            let s = this.ranges[e] - (this.inverted ? n : 0);
            if (s > t) break;
            let l = this.ranges[e + i];
            if (t <= s + l && e == 3 * r) return !0;
            n += this.ranges[e + o] - l;
          }
          return !1;
        }
        forEach(t) {
          let e = this.inverted ? 2 : 1,
            n = this.inverted ? 1 : 2;
          for (let r = 0, i = 0; r < this.ranges.length; r += 3) {
            let s = this.ranges[r],
              o = s - (this.inverted ? i : 0),
              l = s + (this.inverted ? 0 : i),
              h = this.ranges[r + e],
              a = this.ranges[r + n];
            t(o, o + h, l, l + a), (i += a - h);
          }
        }
        invert() {
          return new l(this.ranges, !this.inverted);
        }
        toString() {
          return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
        }
        static offset(t) {
          return 0 == t ? l.empty : new l(t < 0 ? [0, -t, 0] : [0, 0, t]);
        }
      }
      l.empty = new l([]);
      class h {
        constructor(t = [], e, n = 0, r = t.length) {
          (this.maps = t), (this.mirror = e), (this.from = n), (this.to = r);
        }
        slice(t = 0, e = this.maps.length) {
          return new h(this.maps, this.mirror, t, e);
        }
        copy() {
          return new h(
            this.maps.slice(),
            this.mirror && this.mirror.slice(),
            this.from,
            this.to,
          );
        }
        appendMap(t, e) {
          (this.to = this.maps.push(t)),
            null != e && this.setMirror(this.maps.length - 1, e);
        }
        appendMapping(t) {
          for (let e = 0, n = this.maps.length; e < t.maps.length; e++) {
            let r = t.getMirror(e);
            this.appendMap(t.maps[e], null != r && r < e ? n + r : void 0);
          }
        }
        getMirror(t) {
          if (this.mirror)
            for (let e = 0; e < this.mirror.length; e++)
              if (this.mirror[e] == t) return this.mirror[e + (e % 2 ? -1 : 1)];
        }
        setMirror(t, e) {
          this.mirror || (this.mirror = []), this.mirror.push(t, e);
        }
        appendMappingInverted(t) {
          for (
            let e = t.maps.length - 1, n = this.maps.length + t.maps.length;
            e >= 0;
            e--
          ) {
            let r = t.getMirror(e);
            this.appendMap(
              t.maps[e].invert(),
              null != r && r > e ? n - r - 1 : void 0,
            );
          }
        }
        invert() {
          let t = new h();
          return t.appendMappingInverted(this), t;
        }
        map(t, e = 1) {
          if (this.mirror) return this._map(t, e, !0);
          for (let n = this.from; n < this.to; n++) t = this.maps[n].map(t, e);
          return t;
        }
        mapResult(t, e = 1) {
          return this._map(t, e, !1);
        }
        _map(t, e, n) {
          let r = 0;
          for (let n = this.from; n < this.to; n++) {
            let i = this.maps[n].mapResult(t, e);
            if (null != i.recover) {
              let e = this.getMirror(n);
              if (null != e && e > n && e < this.to) {
                (n = e), (t = this.maps[e].recover(i.recover));
                continue;
              }
            }
            (r |= i.delInfo), (t = i.pos);
          }
          return n ? t : new o(t, r, null);
        }
      }
      const a = Object.create(null);
      class c {
        getMap() {
          return l.empty;
        }
        merge(t) {
          return null;
        }
        static fromJSON(t, e) {
          if (!e || !e.stepType)
            throw new RangeError("Invalid input for Step.fromJSON");
          let n = a[e.stepType];
          if (!n) throw new RangeError(`No step type ${e.stepType} defined`);
          return n.fromJSON(t, e);
        }
        static jsonID(t, e) {
          if (t in a)
            throw new RangeError("Duplicate use of step JSON ID " + t);
          return (a[t] = e), (e.prototype.jsonID = t), e;
        }
      }
      class p {
        constructor(t, e) {
          (this.doc = t), (this.failed = e);
        }
        static ok(t) {
          return new p(t, null);
        }
        static fail(t) {
          return new p(null, t);
        }
        static fromReplace(t, e, n, i) {
          try {
            return p.ok(t.replace(e, n, i));
          } catch (t) {
            if (t instanceof r.vI) return p.fail(t.message);
            throw t;
          }
        }
      }
      function f(t, e, n) {
        let i = [];
        for (let r = 0; r < t.childCount; r++) {
          let s = t.child(r);
          s.content.size && (s = s.copy(f(s.content, e, s))),
            s.isInline && (s = e(s, n, r)),
            i.push(s);
        }
        return r.FK.fromArray(i);
      }
      class d extends c {
        constructor(t, e, n) {
          super(), (this.from = t), (this.to = e), (this.mark = n);
        }
        apply(t) {
          let e = t.slice(this.from, this.to),
            n = t.resolve(this.from),
            i = n.node(n.sharedDepth(this.to)),
            s = new r.Ji(
              f(
                e.content,
                (t, e) =>
                  t.isAtom && e.type.allowsMarkType(this.mark.type)
                    ? t.mark(this.mark.addToSet(t.marks))
                    : t,
                i,
              ),
              e.openStart,
              e.openEnd,
            );
          return p.fromReplace(t, this.from, this.to, s);
        }
        invert() {
          return new u(this.from, this.to, this.mark);
        }
        map(t) {
          let e = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1);
          return (e.deleted && n.deleted) || e.pos >= n.pos
            ? null
            : new d(e.pos, n.pos, this.mark);
        }
        merge(t) {
          return t instanceof d &&
            t.mark.eq(this.mark) &&
            this.from <= t.to &&
            this.to >= t.from
            ? new d(
                Math.min(this.from, t.from),
                Math.max(this.to, t.to),
                this.mark,
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.from || "number" != typeof e.to)
            throw new RangeError("Invalid input for AddMarkStep.fromJSON");
          return new d(e.from, e.to, t.markFromJSON(e.mark));
        }
      }
      c.jsonID("addMark", d);
      class u extends c {
        constructor(t, e, n) {
          super(), (this.from = t), (this.to = e), (this.mark = n);
        }
        apply(t) {
          let e = t.slice(this.from, this.to),
            n = new r.Ji(
              f(e.content, (t) => t.mark(this.mark.removeFromSet(t.marks)), t),
              e.openStart,
              e.openEnd,
            );
          return p.fromReplace(t, this.from, this.to, n);
        }
        invert() {
          return new d(this.from, this.to, this.mark);
        }
        map(t) {
          let e = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1);
          return (e.deleted && n.deleted) || e.pos >= n.pos
            ? null
            : new u(e.pos, n.pos, this.mark);
        }
        merge(t) {
          return t instanceof u &&
            t.mark.eq(this.mark) &&
            this.from <= t.to &&
            this.to >= t.from
            ? new u(
                Math.min(this.from, t.from),
                Math.max(this.to, t.to),
                this.mark,
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.from || "number" != typeof e.to)
            throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
          return new u(e.from, e.to, t.markFromJSON(e.mark));
        }
      }
      c.jsonID("removeMark", u);
      class m extends c {
        constructor(t, e) {
          super(), (this.pos = t), (this.mark = e);
        }
        apply(t) {
          let e = t.nodeAt(this.pos);
          if (!e) return p.fail("No node at mark step's position");
          let n = e.type.create(e.attrs, null, this.mark.addToSet(e.marks));
          return p.fromReplace(
            t,
            this.pos,
            this.pos + 1,
            new r.Ji(r.FK.from(n), 0, e.isLeaf ? 0 : 1),
          );
        }
        invert(t) {
          let e = t.nodeAt(this.pos);
          if (e) {
            let t = this.mark.addToSet(e.marks);
            if (t.length == e.marks.length) {
              for (let n = 0; n < e.marks.length; n++)
                if (!e.marks[n].isInSet(t)) return new m(this.pos, e.marks[n]);
              return new m(this.pos, this.mark);
            }
          }
          return new g(this.pos, this.mark);
        }
        map(t) {
          let e = t.mapResult(this.pos, 1);
          return e.deletedAfter ? null : new m(e.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.pos)
            throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
          return new m(e.pos, t.markFromJSON(e.mark));
        }
      }
      c.jsonID("addNodeMark", m);
      class g extends c {
        constructor(t, e) {
          super(), (this.pos = t), (this.mark = e);
        }
        apply(t) {
          let e = t.nodeAt(this.pos);
          if (!e) return p.fail("No node at mark step's position");
          let n = e.type.create(
            e.attrs,
            null,
            this.mark.removeFromSet(e.marks),
          );
          return p.fromReplace(
            t,
            this.pos,
            this.pos + 1,
            new r.Ji(r.FK.from(n), 0, e.isLeaf ? 0 : 1),
          );
        }
        invert(t) {
          let e = t.nodeAt(this.pos);
          return e && this.mark.isInSet(e.marks)
            ? new m(this.pos, this.mark)
            : this;
        }
        map(t) {
          let e = t.mapResult(this.pos, 1);
          return e.deletedAfter ? null : new g(e.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.pos)
            throw new RangeError(
              "Invalid input for RemoveNodeMarkStep.fromJSON",
            );
          return new g(e.pos, t.markFromJSON(e.mark));
        }
      }
      c.jsonID("removeNodeMark", g);
      class y extends c {
        constructor(t, e, n, r = !1) {
          super(),
            (this.from = t),
            (this.to = e),
            (this.slice = n),
            (this.structure = r);
        }
        apply(t) {
          return this.structure && w(t, this.from, this.to)
            ? p.fail("Structure replace would overwrite content")
            : p.fromReplace(t, this.from, this.to, this.slice);
        }
        getMap() {
          return new l([this.from, this.to - this.from, this.slice.size]);
        }
        invert(t) {
          return new y(
            this.from,
            this.from + this.slice.size,
            t.slice(this.from, this.to),
          );
        }
        map(t) {
          let e = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1);
          return e.deletedAcross && n.deletedAcross
            ? null
            : new y(e.pos, Math.max(e.pos, n.pos), this.slice);
        }
        merge(t) {
          if (!(t instanceof y) || t.structure || this.structure) return null;
          if (
            this.from + this.slice.size != t.from ||
            this.slice.openEnd ||
            t.slice.openStart
          ) {
            if (t.to != this.from || this.slice.openStart || t.slice.openEnd)
              return null;
            {
              let e =
                this.slice.size + t.slice.size == 0
                  ? r.Ji.empty
                  : new r.Ji(
                      t.slice.content.append(this.slice.content),
                      t.slice.openStart,
                      this.slice.openEnd,
                    );
              return new y(t.from, this.to, e, this.structure);
            }
          }
          {
            let e =
              this.slice.size + t.slice.size == 0
                ? r.Ji.empty
                : new r.Ji(
                    this.slice.content.append(t.slice.content),
                    this.slice.openStart,
                    t.slice.openEnd,
                  );
            return new y(
              this.from,
              this.to + (t.to - t.from),
              e,
              this.structure,
            );
          }
        }
        toJSON() {
          let t = { stepType: "replace", from: this.from, to: this.to };
          return (
            this.slice.size && (t.slice = this.slice.toJSON()),
            this.structure && (t.structure = !0),
            t
          );
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.from || "number" != typeof e.to)
            throw new RangeError("Invalid input for ReplaceStep.fromJSON");
          return new y(e.from, e.to, r.Ji.fromJSON(t, e.slice), !!e.structure);
        }
      }
      c.jsonID("replace", y);
      class k extends c {
        constructor(t, e, n, r, i, s, o = !1) {
          super(),
            (this.from = t),
            (this.to = e),
            (this.gapFrom = n),
            (this.gapTo = r),
            (this.slice = i),
            (this.insert = s),
            (this.structure = o);
        }
        apply(t) {
          if (
            this.structure &&
            (w(t, this.from, this.gapFrom) || w(t, this.gapTo, this.to))
          )
            return p.fail("Structure gap-replace would overwrite content");
          let e = t.slice(this.gapFrom, this.gapTo);
          if (e.openStart || e.openEnd)
            return p.fail("Gap is not a flat range");
          let n = this.slice.insertAt(this.insert, e.content);
          return n
            ? p.fromReplace(t, this.from, this.to, n)
            : p.fail("Content does not fit in gap");
        }
        getMap() {
          return new l([
            this.from,
            this.gapFrom - this.from,
            this.insert,
            this.gapTo,
            this.to - this.gapTo,
            this.slice.size - this.insert,
          ]);
        }
        invert(t) {
          let e = this.gapTo - this.gapFrom;
          return new k(
            this.from,
            this.from + this.slice.size + e,
            this.from + this.insert,
            this.from + this.insert + e,
            t
              .slice(this.from, this.to)
              .removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
            this.gapFrom - this.from,
            this.structure,
          );
        }
        map(t) {
          let e = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1),
            r = this.from == this.gapFrom ? e.pos : t.map(this.gapFrom, -1),
            i = this.to == this.gapTo ? n.pos : t.map(this.gapTo, 1);
          return (e.deletedAcross && n.deletedAcross) || r < e.pos || i > n.pos
            ? null
            : new k(
                e.pos,
                n.pos,
                r,
                i,
                this.slice,
                this.insert,
                this.structure,
              );
        }
        toJSON() {
          let t = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert,
          };
          return (
            this.slice.size && (t.slice = this.slice.toJSON()),
            this.structure && (t.structure = !0),
            t
          );
        }
        static fromJSON(t, e) {
          if (
            "number" != typeof e.from ||
            "number" != typeof e.to ||
            "number" != typeof e.gapFrom ||
            "number" != typeof e.gapTo ||
            "number" != typeof e.insert
          )
            throw new RangeError(
              "Invalid input for ReplaceAroundStep.fromJSON",
            );
          return new k(
            e.from,
            e.to,
            e.gapFrom,
            e.gapTo,
            r.Ji.fromJSON(t, e.slice),
            e.insert,
            !!e.structure,
          );
        }
      }
      function w(t, e, n) {
        let r = t.resolve(e),
          i = n - e,
          s = r.depth;
        for (; i > 0 && s > 0 && r.indexAfter(s) == r.node(s).childCount; )
          s--, i--;
        if (i > 0) {
          let t = r.node(s).maybeChild(r.indexAfter(s));
          for (; i > 0; ) {
            if (!t || t.isLeaf) return !0;
            (t = t.firstChild), i--;
          }
        }
        return !1;
      }
      function x(t, e, n, i = n.contentMatch, s = !0) {
        let o = t.doc.nodeAt(e),
          l = [],
          h = e + 1;
        for (let e = 0; e < o.childCount; e++) {
          let a = o.child(e),
            c = h + a.nodeSize,
            p = i.matchType(a.type);
          if (p) {
            i = p;
            for (let e = 0; e < a.marks.length; e++)
              n.allowsMarkType(a.marks[e].type) ||
                t.step(new u(h, c, a.marks[e]));
            if (s && a.isText && "pre" != n.whitespace) {
              let t,
                e,
                i = /\r?\n|\r/g;
              for (; (t = i.exec(a.text)); )
                e ||
                  (e = new r.Ji(
                    r.FK.from(n.schema.text(" ", n.allowedMarks(a.marks))),
                    0,
                    0,
                  )),
                  l.push(new y(h + t.index, h + t.index + t[0].length, e));
            }
          } else l.push(new y(h, c, r.Ji.empty));
          h = c;
        }
        if (!i.validEnd) {
          let e = i.fillBefore(r.FK.empty, !0);
          t.replace(h, h, new r.Ji(e, 0, 0));
        }
        for (let e = l.length - 1; e >= 0; e--) t.step(l[e]);
      }
      function S(t, e, n) {
        return (
          (0 == e || t.canReplace(e, t.childCount)) &&
          (n == t.childCount || t.canReplace(0, n))
        );
      }
      function v(t) {
        let e = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
        for (let n = t.depth; ; --n) {
          let r = t.$from.node(n),
            i = t.$from.index(n),
            s = t.$to.indexAfter(n);
          if (n < t.depth && r.canReplace(i, s, e)) return n;
          if (0 == n || r.type.spec.isolating || !S(r, i, s)) break;
        }
        return null;
      }
      function M(t, e, n = null, r = t) {
        let i = (function (t, e) {
            let { parent: n, startIndex: r, endIndex: i } = t,
              s = n.contentMatchAt(r).findWrapping(e);
            if (!s) return null;
            let o = s.length ? s[0] : e;
            return n.canReplaceWith(r, i, o) ? s : null;
          })(t, e),
          s =
            i &&
            (function (t, e) {
              let { parent: n, startIndex: r, endIndex: i } = t,
                s = n.child(r),
                o = e.contentMatch.findWrapping(s.type);
              if (!o) return null;
              let l = (o.length ? o[o.length - 1] : e).contentMatch;
              for (let t = r; l && t < i; t++) l = l.matchType(n.child(t).type);
              return l && l.validEnd ? o : null;
            })(r, e);
        return s
          ? i.map(b).concat({ type: e, attrs: n }).concat(s.map(b))
          : null;
      }
      function b(t) {
        return { type: t, attrs: null };
      }
      function C(t, e, n = 1, r) {
        let i = t.resolve(e),
          s = i.depth - n,
          o = (r && r[r.length - 1]) || i.parent;
        if (
          s < 0 ||
          i.parent.type.spec.isolating ||
          !i.parent.canReplace(i.index(), i.parent.childCount) ||
          !o.type.validContent(
            i.parent.content.cutByIndex(i.index(), i.parent.childCount),
          )
        )
          return !1;
        for (let t = i.depth - 1, e = n - 2; t > s; t--, e--) {
          let n = i.node(t),
            s = i.index(t);
          if (n.type.spec.isolating) return !1;
          let o = n.content.cutByIndex(s, n.childCount),
            l = r && r[e + 1];
          l && (o = o.replaceChild(0, l.type.create(l.attrs)));
          let h = (r && r[e]) || n;
          if (!n.canReplace(s + 1, n.childCount) || !h.type.validContent(o))
            return !1;
        }
        let l = i.indexAfter(s),
          h = r && r[0];
        return i.node(s).canReplaceWith(l, l, h ? h.type : i.node(s + 1).type);
      }
      function O(t, e) {
        let n = t.resolve(e),
          r = n.index();
        return T(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
      }
      function T(t, e) {
        return !(!t || !e || t.isLeaf || !t.canAppend(e));
      }
      function N(t, e, n) {
        let r = t.resolve(e);
        if (!n.content.size) return e;
        let i = n.content;
        for (let t = 0; t < n.openStart; t++) i = i.firstChild.content;
        for (let t = 1; t <= (0 == n.openStart && n.size ? 2 : 1); t++)
          for (let e = r.depth; e >= 0; e--) {
            let n =
                e == r.depth
                  ? 0
                  : r.pos <= (r.start(e + 1) + r.end(e + 1)) / 2
                    ? -1
                    : 1,
              s = r.index(e) + (n > 0 ? 1 : 0),
              o = r.node(e),
              l = !1;
            if (1 == t) l = o.canReplace(s, s, i);
            else {
              let t = o.contentMatchAt(s).findWrapping(i.firstChild.type);
              l = t && o.canReplaceWith(s, s, t[0]);
            }
            if (l)
              return 0 == n ? r.pos : n < 0 ? r.before(e + 1) : r.after(e + 1);
          }
        return null;
      }
      function E(t, e, n = e, i = r.Ji.empty) {
        if (e == n && !i.size) return null;
        let s = t.resolve(e),
          o = t.resolve(n);
        return I(s, o, i) ? new y(e, n, i) : new R(s, o, i).fit();
      }
      function I(t, e, n) {
        return (
          !n.openStart &&
          !n.openEnd &&
          t.start() == e.start() &&
          t.parent.canReplace(t.index(), e.index(), n.content)
        );
      }
      c.jsonID("replaceAround", k);
      class R {
        constructor(t, e, n) {
          (this.$from = t),
            (this.$to = e),
            (this.unplaced = n),
            (this.frontier = []),
            (this.placed = r.FK.empty);
          for (let e = 0; e <= t.depth; e++) {
            let n = t.node(e);
            this.frontier.push({
              type: n.type,
              match: n.contentMatchAt(t.indexAfter(e)),
            });
          }
          for (let e = t.depth; e > 0; e--)
            this.placed = r.FK.from(t.node(e).copy(this.placed));
        }
        get depth() {
          return this.frontier.length - 1;
        }
        fit() {
          for (; this.unplaced.size; ) {
            let t = this.findFittable();
            t ? this.placeNodes(t) : this.openMore() || this.dropNode();
          }
          let t = this.mustMoveInline(),
            e = this.placed.size - this.depth - this.$from.depth,
            n = this.$from,
            i = this.close(t < 0 ? this.$to : n.doc.resolve(t));
          if (!i) return null;
          let s = this.placed,
            o = n.depth,
            l = i.depth;
          for (; o && l && 1 == s.childCount; )
            (s = s.firstChild.content), o--, l--;
          let h = new r.Ji(s, o, l);
          return t > -1
            ? new k(n.pos, t, this.$to.pos, this.$to.end(), h, e)
            : h.size || n.pos != this.$to.pos
              ? new y(n.pos, i.pos, h)
              : null;
        }
        findFittable() {
          let t = this.unplaced.openStart;
          for (
            let e = this.unplaced.content, n = 0, r = this.unplaced.openEnd;
            n < t;
            n++
          ) {
            let i = e.firstChild;
            if (
              (e.childCount > 1 && (r = 0), i.type.spec.isolating && r <= n)
            ) {
              t = n;
              break;
            }
            e = i.content;
          }
          for (let e = 1; e <= 2; e++)
            for (let n = 1 == e ? t : this.unplaced.openStart; n >= 0; n--) {
              let t,
                i = null;
              n
                ? ((i = z(this.unplaced.content, n - 1).firstChild),
                  (t = i.content))
                : (t = this.unplaced.content);
              let s = t.firstChild;
              for (let t = this.depth; t >= 0; t--) {
                let o,
                  { type: l, match: h } = this.frontier[t],
                  a = null;
                if (
                  1 == e &&
                  (s
                    ? h.matchType(s.type) ||
                      (a = h.fillBefore(r.FK.from(s), !1))
                    : i && l.compatibleContent(i.type))
                )
                  return {
                    sliceDepth: n,
                    frontierDepth: t,
                    parent: i,
                    inject: a,
                  };
                if (2 == e && s && (o = h.findWrapping(s.type)))
                  return {
                    sliceDepth: n,
                    frontierDepth: t,
                    parent: i,
                    wrap: o,
                  };
                if (i && h.matchType(i.type)) break;
              }
            }
        }
        openMore() {
          let { content: t, openStart: e, openEnd: n } = this.unplaced,
            i = z(t, e);
          return (
            !(!i.childCount || i.firstChild.isLeaf) &&
            ((this.unplaced = new r.Ji(
              t,
              e + 1,
              Math.max(n, i.size + e >= t.size - n ? e + 1 : 0),
            )),
            !0)
          );
        }
        dropNode() {
          let { content: t, openStart: e, openEnd: n } = this.unplaced,
            i = z(t, e);
          if (i.childCount <= 1 && e > 0) {
            let s = t.size - e <= e + i.size;
            this.unplaced = new r.Ji(A(t, e - 1, 1), e - 1, s ? e - 1 : n);
          } else this.unplaced = new r.Ji(A(t, e, 1), e, n);
        }
        placeNodes({
          sliceDepth: t,
          frontierDepth: e,
          parent: n,
          inject: i,
          wrap: s,
        }) {
          for (; this.depth > e; ) this.closeFrontierNode();
          if (s) for (let t = 0; t < s.length; t++) this.openFrontierNode(s[t]);
          let o = this.unplaced,
            l = n ? n.content : o.content,
            h = o.openStart - t,
            a = 0,
            c = [],
            { match: p, type: f } = this.frontier[e];
          if (i) {
            for (let t = 0; t < i.childCount; t++) c.push(i.child(t));
            p = p.matchFragment(i);
          }
          let d = l.size + t - (o.content.size - o.openEnd);
          for (; a < l.childCount; ) {
            let t = l.child(a),
              e = p.matchType(t.type);
            if (!e) break;
            a++,
              (a > 1 || 0 == h || t.content.size) &&
                ((p = e),
                c.push(
                  F(
                    t.mark(f.allowedMarks(t.marks)),
                    1 == a ? h : 0,
                    a == l.childCount ? d : -1,
                  ),
                ));
          }
          let u = a == l.childCount;
          u || (d = -1),
            (this.placed = J(this.placed, e, r.FK.from(c))),
            (this.frontier[e].match = p),
            u &&
              d < 0 &&
              n &&
              n.type == this.frontier[this.depth].type &&
              this.frontier.length > 1 &&
              this.closeFrontierNode();
          for (let t = 0, e = l; t < d; t++) {
            let t = e.lastChild;
            this.frontier.push({
              type: t.type,
              match: t.contentMatchAt(t.childCount),
            }),
              (e = t.content);
          }
          this.unplaced = u
            ? 0 == t
              ? r.Ji.empty
              : new r.Ji(
                  A(o.content, t - 1, 1),
                  t - 1,
                  d < 0 ? o.openEnd : t - 1,
                )
            : new r.Ji(A(o.content, t, a), o.openStart, o.openEnd);
        }
        mustMoveInline() {
          if (!this.$to.parent.isTextblock) return -1;
          let t,
            e = this.frontier[this.depth];
          if (
            !e.type.isTextblock ||
            !$(this.$to, this.$to.depth, e.type, e.match, !1) ||
            (this.$to.depth == this.depth &&
              (t = this.findCloseLevel(this.$to)) &&
              t.depth == this.depth)
          )
            return -1;
          let { depth: n } = this.$to,
            r = this.$to.after(n);
          for (; n > 1 && r == this.$to.end(--n); ) ++r;
          return r;
        }
        findCloseLevel(t) {
          t: for (let e = Math.min(this.depth, t.depth); e >= 0; e--) {
            let { match: n, type: r } = this.frontier[e],
              i = e < t.depth && t.end(e + 1) == t.pos + (t.depth - (e + 1)),
              s = $(t, e, r, n, i);
            if (s) {
              for (let n = e - 1; n >= 0; n--) {
                let { match: e, type: r } = this.frontier[n],
                  i = $(t, n, r, e, !0);
                if (!i || i.childCount) continue t;
              }
              return {
                depth: e,
                fit: s,
                move: i ? t.doc.resolve(t.after(e + 1)) : t,
              };
            }
          }
        }
        close(t) {
          let e = this.findCloseLevel(t);
          if (!e) return null;
          for (; this.depth > e.depth; ) this.closeFrontierNode();
          e.fit.childCount && (this.placed = J(this.placed, e.depth, e.fit)),
            (t = e.move);
          for (let n = e.depth + 1; n <= t.depth; n++) {
            let e = t.node(n),
              r = e.type.contentMatch.fillBefore(e.content, !0, t.index(n));
            this.openFrontierNode(e.type, e.attrs, r);
          }
          return t;
        }
        openFrontierNode(t, e = null, n) {
          let i = this.frontier[this.depth];
          (i.match = i.match.matchType(t)),
            (this.placed = J(
              this.placed,
              this.depth,
              r.FK.from(t.create(e, n)),
            )),
            this.frontier.push({ type: t, match: t.contentMatch });
        }
        closeFrontierNode() {
          let t = this.frontier.pop().match.fillBefore(r.FK.empty, !0);
          t.childCount &&
            (this.placed = J(this.placed, this.frontier.length, t));
        }
      }
      function A(t, e, n) {
        return 0 == e
          ? t.cutByIndex(n, t.childCount)
          : t.replaceChild(
              0,
              t.firstChild.copy(A(t.firstChild.content, e - 1, n)),
            );
      }
      function J(t, e, n) {
        return 0 == e
          ? t.append(n)
          : t.replaceChild(
              t.childCount - 1,
              t.lastChild.copy(J(t.lastChild.content, e - 1, n)),
            );
      }
      function z(t, e) {
        for (let n = 0; n < e; n++) t = t.firstChild.content;
        return t;
      }
      function F(t, e, n) {
        if (e <= 0) return t;
        let i = t.content;
        return (
          e > 1 &&
            (i = i.replaceChild(
              0,
              F(i.firstChild, e - 1, 1 == i.childCount ? n - 1 : 0),
            )),
          e > 0 &&
            ((i = t.type.contentMatch.fillBefore(i).append(i)),
            n <= 0 &&
              (i = i.append(
                t.type.contentMatch.matchFragment(i).fillBefore(r.FK.empty, !0),
              ))),
          t.copy(i)
        );
      }
      function $(t, e, n, r, i) {
        let s = t.node(e),
          o = i ? t.indexAfter(e) : t.index(e);
        if (o == s.childCount && !n.compatibleContent(s.type)) return null;
        let l = r.fillBefore(s.content, !0, o);
        return l &&
          !(function (t, e, n) {
            for (let r = n; r < e.childCount; r++)
              if (!t.allowsMarks(e.child(r).marks)) return !0;
            return !1;
          })(n, s.content, o)
          ? l
          : null;
      }
      function B(t, e, n, i, s) {
        if (e < n) {
          let r = t.firstChild;
          t = t.replaceChild(0, r.copy(B(r.content, e + 1, n, i, r)));
        }
        if (e > i) {
          let e = s.contentMatchAt(0),
            n = e.fillBefore(t).append(t);
          t = n.append(e.matchFragment(n).fillBefore(r.FK.empty, !0));
        }
        return t;
      }
      function D(t, e) {
        let n = [];
        for (let r = Math.min(t.depth, e.depth); r >= 0; r--) {
          let i = t.start(r);
          if (
            i < t.pos - (t.depth - r) ||
            e.end(r) > e.pos + (e.depth - r) ||
            t.node(r).type.spec.isolating ||
            e.node(r).type.spec.isolating
          )
            break;
          (i == e.start(r) ||
            (r == t.depth &&
              r == e.depth &&
              t.parent.inlineContent &&
              e.parent.inlineContent &&
              r &&
              e.start(r - 1) == i - 1)) &&
            n.push(r);
        }
        return n;
      }
      class j extends c {
        constructor(t, e, n) {
          super(), (this.pos = t), (this.attr = e), (this.value = n);
        }
        apply(t) {
          let e = t.nodeAt(this.pos);
          if (!e) return p.fail("No node at attribute step's position");
          let n = Object.create(null);
          for (let t in e.attrs) n[t] = e.attrs[t];
          n[this.attr] = this.value;
          let i = e.type.create(n, null, e.marks);
          return p.fromReplace(
            t,
            this.pos,
            this.pos + 1,
            new r.Ji(r.FK.from(i), 0, e.isLeaf ? 0 : 1),
          );
        }
        getMap() {
          return l.empty;
        }
        invert(t) {
          return new j(
            this.pos,
            this.attr,
            t.nodeAt(this.pos).attrs[this.attr],
          );
        }
        map(t) {
          let e = t.mapResult(this.pos, 1);
          return e.deletedAfter ? null : new j(e.pos, this.attr, this.value);
        }
        toJSON() {
          return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value,
          };
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.pos || "string" != typeof e.attr)
            throw new RangeError("Invalid input for AttrStep.fromJSON");
          return new j(e.pos, e.attr, e.value);
        }
      }
      c.jsonID("attr", j);
      class P extends c {
        constructor(t, e) {
          super(), (this.attr = t), (this.value = e);
        }
        apply(t) {
          let e = Object.create(null);
          for (let n in t.attrs) e[n] = t.attrs[n];
          e[this.attr] = this.value;
          let n = t.type.create(e, t.content, t.marks);
          return p.ok(n);
        }
        getMap() {
          return l.empty;
        }
        invert(t) {
          return new P(this.attr, t.attrs[this.attr]);
        }
        map(t) {
          return this;
        }
        toJSON() {
          return { stepType: "docAttr", attr: this.attr, value: this.value };
        }
        static fromJSON(t, e) {
          if ("string" != typeof e.attr)
            throw new RangeError("Invalid input for DocAttrStep.fromJSON");
          return new P(e.attr, e.value);
        }
      }
      c.jsonID("docAttr", P);
      let W = class extends Error {};
      (W = function t(e) {
        let n = Error.call(this, e);
        return (n.__proto__ = t.prototype), n;
      }),
        ((W.prototype = Object.create(Error.prototype)).constructor = W),
        (W.prototype.name = "TransformError");
      class L {
        constructor(t) {
          (this.doc = t),
            (this.steps = []),
            (this.docs = []),
            (this.mapping = new h());
        }
        get before() {
          return this.docs.length ? this.docs[0] : this.doc;
        }
        step(t) {
          let e = this.maybeStep(t);
          if (e.failed) throw new W(e.failed);
          return this;
        }
        maybeStep(t) {
          let e = t.apply(this.doc);
          return e.failed || this.addStep(t, e.doc), e;
        }
        get docChanged() {
          return this.steps.length > 0;
        }
        addStep(t, e) {
          this.docs.push(this.doc),
            this.steps.push(t),
            this.mapping.appendMap(t.getMap()),
            (this.doc = e);
        }
        replace(t, e = t, n = r.Ji.empty) {
          let i = E(this.doc, t, e, n);
          return i && this.step(i), this;
        }
        replaceWith(t, e, n) {
          return this.replace(t, e, new r.Ji(r.FK.from(n), 0, 0));
        }
        delete(t, e) {
          return this.replace(t, e, r.Ji.empty);
        }
        insert(t, e) {
          return this.replaceWith(t, t, e);
        }
        replaceRange(t, e, n) {
          return (
            (function (t, e, n, i) {
              if (!i.size) return t.deleteRange(e, n);
              let s = t.doc.resolve(e),
                o = t.doc.resolve(n);
              if (I(s, o, i)) return t.step(new y(e, n, i));
              let l = D(s, t.doc.resolve(n));
              0 == l[l.length - 1] && l.pop();
              let h = -(s.depth + 1);
              l.unshift(h);
              for (let t = s.depth, e = s.pos - 1; t > 0; t--, e--) {
                let n = s.node(t).type.spec;
                if (n.defining || n.definingAsContext || n.isolating) break;
                l.indexOf(t) > -1
                  ? (h = t)
                  : s.before(t) == e && l.splice(1, 0, -t);
              }
              let a = l.indexOf(h),
                c = [],
                p = i.openStart;
              for (let t = i.content, e = 0; ; e++) {
                let n = t.firstChild;
                if ((c.push(n), e == i.openStart)) break;
                t = n.content;
              }
              for (let t = p - 1; t >= 0; t--) {
                let e = c[t],
                  n = (f = e.type).spec.defining || f.spec.definingForContent;
                if (n && !e.sameMarkup(s.node(Math.abs(h) - 1))) p = t;
                else if (n || !e.type.isTextblock) break;
              }
              var f;
              for (let e = i.openStart; e >= 0; e--) {
                let h = (e + p + 1) % (i.openStart + 1),
                  f = c[h];
                if (f)
                  for (let e = 0; e < l.length; e++) {
                    let c = l[(e + a) % l.length],
                      p = !0;
                    c < 0 && ((p = !1), (c = -c));
                    let d = s.node(c - 1),
                      u = s.index(c - 1);
                    if (d.canReplaceWith(u, u, f.type, f.marks))
                      return t.replace(
                        s.before(c),
                        p ? o.after(c) : n,
                        new r.Ji(B(i.content, 0, i.openStart, h), h, i.openEnd),
                      );
                  }
              }
              let d = t.steps.length;
              for (
                let r = l.length - 1;
                r >= 0 && (t.replace(e, n, i), !(t.steps.length > d));
                r--
              ) {
                let t = l[r];
                t < 0 || ((e = s.before(t)), (n = o.after(t)));
              }
            })(this, t, e, n),
            this
          );
        }
        replaceRangeWith(t, e, n) {
          return (
            (function (t, e, n, i) {
              if (
                !i.isInline &&
                e == n &&
                t.doc.resolve(e).parent.content.size
              ) {
                let r = (function (t, e, n) {
                  let r = t.resolve(e);
                  if (r.parent.canReplaceWith(r.index(), r.index(), n))
                    return e;
                  if (0 == r.parentOffset)
                    for (let t = r.depth - 1; t >= 0; t--) {
                      let e = r.index(t);
                      if (r.node(t).canReplaceWith(e, e, n))
                        return r.before(t + 1);
                      if (e > 0) return null;
                    }
                  if (r.parentOffset == r.parent.content.size)
                    for (let t = r.depth - 1; t >= 0; t--) {
                      let e = r.indexAfter(t);
                      if (r.node(t).canReplaceWith(e, e, n))
                        return r.after(t + 1);
                      if (e < r.node(t).childCount) return null;
                    }
                  return null;
                })(t.doc, e, i.type);
                null != r && (e = n = r);
              }
              t.replaceRange(e, n, new r.Ji(r.FK.from(i), 0, 0));
            })(this, t, e, n),
            this
          );
        }
        deleteRange(t, e) {
          return (
            (function (t, e, n) {
              let r = t.doc.resolve(e),
                i = t.doc.resolve(n),
                s = D(r, i);
              for (let e = 0; e < s.length; e++) {
                let n = s[e],
                  o = e == s.length - 1;
                if ((o && 0 == n) || r.node(n).type.contentMatch.validEnd)
                  return t.delete(r.start(n), i.end(n));
                if (
                  n > 0 &&
                  (o ||
                    r
                      .node(n - 1)
                      .canReplace(r.index(n - 1), i.indexAfter(n - 1)))
                )
                  return t.delete(r.before(n), i.after(n));
              }
              for (let s = 1; s <= r.depth && s <= i.depth; s++)
                if (
                  e - r.start(s) == r.depth - s &&
                  n > r.end(s) &&
                  i.end(s) - n != i.depth - s
                )
                  return t.delete(r.before(s), n);
              t.delete(e, n);
            })(this, t, e),
            this
          );
        }
        lift(t, e) {
          return (
            (function (t, e, n) {
              let { $from: i, $to: s, depth: o } = e,
                l = i.before(o + 1),
                h = s.after(o + 1),
                a = l,
                c = h,
                p = r.FK.empty,
                f = 0;
              for (let t = o, e = !1; t > n; t--)
                e || i.index(t) > 0
                  ? ((e = !0), (p = r.FK.from(i.node(t).copy(p))), f++)
                  : a--;
              let d = r.FK.empty,
                u = 0;
              for (let t = o, e = !1; t > n; t--)
                e || s.after(t + 1) < s.end(t)
                  ? ((e = !0), (d = r.FK.from(s.node(t).copy(d))), u++)
                  : c++;
              t.step(
                new k(a, c, l, h, new r.Ji(p.append(d), f, u), p.size - f, !0),
              );
            })(this, t, e),
            this
          );
        }
        join(t, e = 1) {
          return (
            (function (t, e, n) {
              let i = new y(e - n, e + n, r.Ji.empty, !0);
              t.step(i);
            })(this, t, e),
            this
          );
        }
        wrap(t, e) {
          return (
            (function (t, e, n) {
              let i = r.FK.empty;
              for (let t = n.length - 1; t >= 0; t--) {
                if (i.size) {
                  let e = n[t].type.contentMatch.matchFragment(i);
                  if (!e || !e.validEnd)
                    throw new RangeError(
                      "Wrapper type given to Transform.wrap does not form valid content of its parent wrapper",
                    );
                }
                i = r.FK.from(n[t].type.create(n[t].attrs, i));
              }
              let s = e.start,
                o = e.end;
              t.step(new k(s, o, s, o, new r.Ji(i, 0, 0), n.length, !0));
            })(this, t, e),
            this
          );
        }
        setBlockType(t, e = t, n, i = null) {
          return (
            (function (t, e, n, i, s) {
              if (!i.isTextblock)
                throw new RangeError(
                  "Type given to setBlockType should be a textblock",
                );
              let o = t.steps.length;
              t.doc.nodesBetween(e, n, (e, n) => {
                if (
                  e.isTextblock &&
                  !e.hasMarkup(i, s) &&
                  (function (t, e, n) {
                    let r = t.resolve(e),
                      i = r.index();
                    return r.parent.canReplaceWith(i, i + 1, n);
                  })(t.doc, t.mapping.slice(o).map(n), i)
                ) {
                  let l = null;
                  if (i.schema.linebreakReplacement) {
                    let t = "pre" == i.whitespace,
                      e = !!i.contentMatch.matchType(
                        i.schema.linebreakReplacement,
                      );
                    t && !e ? (l = !1) : !t && e && (l = !0);
                  }
                  !1 === l &&
                    (function (t, e, n, r) {
                      e.forEach((i, s) => {
                        if (i.type == i.type.schema.linebreakReplacement) {
                          let i = t.mapping.slice(r).map(n + 1 + s);
                          t.replaceWith(i, i + 1, e.type.schema.text("\n"));
                        }
                      });
                    })(t, e, n, o),
                    x(t, t.mapping.slice(o).map(n, 1), i, void 0, null === l);
                  let h = t.mapping.slice(o),
                    a = h.map(n, 1),
                    c = h.map(n + e.nodeSize, 1);
                  return (
                    t.step(
                      new k(
                        a,
                        c,
                        a + 1,
                        c - 1,
                        new r.Ji(r.FK.from(i.create(s, null, e.marks)), 0, 0),
                        1,
                        !0,
                      ),
                    ),
                    !0 === l &&
                      (function (t, e, n, r) {
                        e.forEach((i, s) => {
                          if (i.isText) {
                            let o,
                              l = /\r?\n|\r/g;
                            for (; (o = l.exec(i.text)); ) {
                              let i = t.mapping
                                .slice(r)
                                .map(n + 1 + s + o.index);
                              t.replaceWith(
                                i,
                                i + 1,
                                e.type.schema.linebreakReplacement.create(),
                              );
                            }
                          }
                        });
                      })(t, e, n, o),
                    !1
                  );
                }
              });
            })(this, t, e, n, i),
            this
          );
        }
        setNodeMarkup(t, e, n = null, i) {
          return (
            (function (t, e, n, i, s) {
              let o = t.doc.nodeAt(e);
              if (!o) throw new RangeError("No node at given position");
              n || (n = o.type);
              let l = n.create(i, null, s || o.marks);
              if (o.isLeaf) return t.replaceWith(e, e + o.nodeSize, l);
              if (!n.validContent(o.content))
                throw new RangeError("Invalid content for node type " + n.name);
              t.step(
                new k(
                  e,
                  e + o.nodeSize,
                  e + 1,
                  e + o.nodeSize - 1,
                  new r.Ji(r.FK.from(l), 0, 0),
                  1,
                  !0,
                ),
              );
            })(this, t, e, n, i),
            this
          );
        }
        setNodeAttribute(t, e, n) {
          return this.step(new j(t, e, n)), this;
        }
        setDocAttribute(t, e) {
          return this.step(new P(t, e)), this;
        }
        addNodeMark(t, e) {
          return this.step(new m(t, e)), this;
        }
        removeNodeMark(t, e) {
          if (!(e instanceof r.CU)) {
            let n = this.doc.nodeAt(t);
            if (!n) throw new RangeError("No node at position " + t);
            if (!(e = e.isInSet(n.marks))) return this;
          }
          return this.step(new g(t, e)), this;
        }
        split(t, e = 1, n) {
          return (
            (function (t, e, n = 1, i) {
              let s = t.doc.resolve(e),
                o = r.FK.empty,
                l = r.FK.empty;
              for (
                let t = s.depth, e = s.depth - n, h = n - 1;
                t > e;
                t--, h--
              ) {
                o = r.FK.from(s.node(t).copy(o));
                let e = i && i[h];
                l = r.FK.from(
                  e ? e.type.create(e.attrs, l) : s.node(t).copy(l),
                );
              }
              t.step(new y(e, e, new r.Ji(o.append(l), n, n), !0));
            })(this, t, e, n),
            this
          );
        }
        addMark(t, e, n) {
          return (
            (function (t, e, n, r) {
              let i,
                s,
                o = [],
                l = [];
              t.doc.nodesBetween(e, n, (t, h, a) => {
                if (!t.isInline) return;
                let c = t.marks;
                if (!r.isInSet(c) && a.type.allowsMarkType(r.type)) {
                  let a = Math.max(h, e),
                    p = Math.min(h + t.nodeSize, n),
                    f = r.addToSet(c);
                  for (let t = 0; t < c.length; t++)
                    c[t].isInSet(f) ||
                      (i && i.to == a && i.mark.eq(c[t])
                        ? (i.to = p)
                        : o.push((i = new u(a, p, c[t]))));
                  s && s.to == a ? (s.to = p) : l.push((s = new d(a, p, r)));
                }
              }),
                o.forEach((e) => t.step(e)),
                l.forEach((e) => t.step(e));
            })(this, t, e, n),
            this
          );
        }
        removeMark(t, e, n) {
          return (
            (function (t, e, n, i) {
              let s = [],
                o = 0;
              t.doc.nodesBetween(e, n, (t, l) => {
                if (!t.isInline) return;
                o++;
                let h = null;
                if (i instanceof r.sX) {
                  let e,
                    n = t.marks;
                  for (; (e = i.isInSet(n)); )
                    (h || (h = [])).push(e), (n = e.removeFromSet(n));
                } else i ? i.isInSet(t.marks) && (h = [i]) : (h = t.marks);
                if (h && h.length) {
                  let r = Math.min(l + t.nodeSize, n);
                  for (let t = 0; t < h.length; t++) {
                    let n,
                      i = h[t];
                    for (let t = 0; t < s.length; t++) {
                      let e = s[t];
                      e.step == o - 1 && i.eq(s[t].style) && (n = e);
                    }
                    n
                      ? ((n.to = r), (n.step = o))
                      : s.push({
                          style: i,
                          from: Math.max(l, e),
                          to: r,
                          step: o,
                        });
                  }
                }
              }),
                s.forEach((e) => t.step(new u(e.from, e.to, e.style)));
            })(this, t, e, n),
            this
          );
        }
        clearIncompatible(t, e, n) {
          return x(this, t, e, n), this;
        }
      }
    },
    79216: (t, e, n) => {
      n.d(e, {
        JJ: () => p,
        dv: () => a,
        fV: () => s,
        sM: () => l,
        tG: () => c,
      });
      var r = n(52893),
        i = n(63734);
      class s {
        constructor(t, e, n = {}) {
          var r;
          (this.match = t),
            (this.match = t),
            (this.handler =
              "string" == typeof e
                ? ((r = e),
                  function (t, e, n, i) {
                    let s = r;
                    if (e[1]) {
                      let t = e[0].lastIndexOf(e[1]);
                      s += e[0].slice(t + e[1].length);
                      let r = (n += t) - i;
                      r > 0 && ((s = e[0].slice(t - r, t) + s), (n = i));
                    }
                    return t.tr.insertText(s, n, i);
                  })
                : e),
            (this.undoable = !1 !== n.undoable),
            (this.inCode = n.inCode || !1);
        }
      }
      const o = 500;
      function l({ rules: t }) {
        let e = new r.k_({
          state: {
            init: () => null,
            apply(t, e) {
              let n = t.getMeta(this);
              return n || (t.selectionSet || t.docChanged ? null : e);
            },
          },
          props: {
            handleTextInput: (n, r, i, s) => h(n, r, i, s, t, e),
            handleDOMEvents: {
              compositionend: (n) => {
                setTimeout(() => {
                  let { $cursor: r } = n.state.selection;
                  r && h(n, r.pos, r.pos, "", t, e);
                });
              },
            },
          },
          isInputRules: !0,
        });
        return e;
      }
      function h(t, e, n, r, i, s) {
        if (t.composing) return !1;
        let l = t.state,
          h = l.doc.resolve(e),
          a =
            h.parent.textBetween(
              Math.max(0, h.parentOffset - o),
              h.parentOffset,
              null,
              "￼",
            ) + r;
        for (let o = 0; o < i.length; o++) {
          let c = i[o];
          if (h.parent.type.spec.code) {
            if (!c.inCode) continue;
          } else if ("only" === c.inCode) continue;
          let p = c.match.exec(a),
            f = p && c.handler(l, p, e - (p[0].length - r.length), n);
          if (f)
            return (
              c.undoable &&
                f.setMeta(s, { transform: f, from: e, to: n, text: r }),
              t.dispatch(f),
              !0
            );
        }
        return !1;
      }
      const a = (t, e) => {
        let n = t.plugins;
        for (let r = 0; r < n.length; r++) {
          let i,
            s = n[r];
          if (s.spec.isInputRules && (i = s.getState(t))) {
            if (e) {
              let n = t.tr,
                r = i.transform;
              for (let t = r.steps.length - 1; t >= 0; t--)
                n.step(r.steps[t].invert(r.docs[t]));
              if (i.text) {
                let e = n.doc.resolve(i.from).marks();
                n.replaceWith(i.from, i.to, t.schema.text(i.text, e));
              } else n.delete(i.from, i.to);
              e(n);
            }
            return !0;
          }
        }
        return !1;
      };
      new s(/--$/, "—"),
        new s(/\.\.\.$/, "…"),
        new s(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/, "“"),
        new s(/"$/, "”"),
        new s(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/, "‘"),
        new s(/'$/, "’");
      function c(t, e, n = null, r) {
        return new s(t, (t, s, o, l) => {
          let h = n instanceof Function ? n(s) : n,
            a = t.tr.delete(o, l),
            c = a.doc.resolve(o).blockRange(),
            p = c && (0, i.oM)(c, e, h);
          if (!p) return null;
          a.wrap(c, p);
          let f = a.doc.resolve(o - 1).nodeBefore;
          return (
            f &&
              f.type == e &&
              (0, i.n9)(a.doc, o - 1) &&
              (!r || r(s, f)) &&
              a.join(o - 1),
            a
          );
        });
      }
      function p(t, e, n = null) {
        return new s(t, (t, r, i, s) => {
          let o = t.doc.resolve(i),
            l = n instanceof Function ? n(r) : n;
          return o.node(-1).canReplaceWith(o.index(-1), o.indexAfter(-1), e)
            ? t.tr.delete(i, s).setBlockType(i, i, e, l)
            : null;
        });
      }
    },
  },
]);
