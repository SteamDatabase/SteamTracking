/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5660],
  {
    42780: (e, t, n) => {
      n.d(t, { K0: () => a, OJ: () => c, R8: () => s });
      var r = n(81393),
        o = n(90626);
      class s {
        constructor() {
          this.reactNodes = [];
        }
        AppendText(e, t = !1) {
          e.length &&
            (t
              ? this.reactNodes.push(
                  o.createElement(
                    "span",
                    {
                      "data-copytext": "",
                      "data-copystyle": "merge-adjacent",
                      "bbcode-text": e,
                    },
                    e,
                  ),
                )
              : this.reactNodes.push(e));
        }
        AppendNode(e) {
          this.reactNodes.push(e);
        }
        GetElements() {
          return this.reactNodes;
        }
      }
      class a {
        constructor(e) {
          (0, r.wT)(e, "decorated accumulator cannot be null"),
            (this.m_decoratedAccumulator = e);
        }
        AppendText(e, t = !1) {
          this.m_decoratedAccumulator.AppendText(e, t);
        }
        AppendNode(e) {
          this.m_decoratedAccumulator.AppendNode(e);
        }
        GetElements() {
          return this.m_decoratedAccumulator.GetElements();
        }
      }
      class c extends a {
        constructor(e, t, n) {
          super(e),
            (this.m_nStartCursor = 1),
            (this.m_nStartCursor = void 0 !== t ? t : 1);
        }
        AppendText(e) {
          let t = e;
          const n = [];
          for (
            let e = t.indexOf("\n", this.m_nStartCursor);
            -1 !== e;
            e = t.indexOf("\n")
          )
            n.push(t.substr(0, e)),
              n.push(o.createElement("br")),
              (t = t.substr(e + 1));
          t.length && n.push(t),
            n.forEach((e) => {
              super.AppendNode(e);
            });
        }
      }
    },
    95742: (e, t, n) => {
      n.d(t, { Al: () => r, CS: () => o, op: () => a, vE: () => c });
      class r {
        constructor(e, t) {
          e instanceof Map
            ? (this.m_dictComponents = e)
            : (this.m_dictComponents = new Map(Object.entries(e))),
            (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, n = !0) {
          const r = (function (e, t) {
            var n, r, o;
            const s = [];
            let a = { type: 0, text: "" },
              c = !1,
              i = !1,
              p = !1;
            for (let o = 0; o < e.length; o++) {
              const d = e[o];
              switch (a.type) {
                case 0:
                  "[" == d
                    ? ((a.type = 2), (i = !0))
                    : ((a.type = 1), "\\" == d && t ? (c = !c) : (a.text += d));
                  break;
                case 2:
                case 3:
                  if ("/" == d && i) (a.type = 3), (a.text = ""), (i = !1);
                  else if ("[" != d || c)
                    if ("]" != d || c)
                      "\\" == d && t
                        ? ((a.text += d), (c = !c), (i = !1))
                        : ((a.text += d), (c = !1), (i = !1));
                    else {
                      const e =
                          2 == a.type &&
                          "noparse" ==
                            (null === (n = a.text) || void 0 === n
                              ? void 0
                              : n.toLocaleLowerCase()),
                        t =
                          3 == a.type &&
                          "noparse" ==
                            (null === (r = a.text) || void 0 === r
                              ? void 0
                              : r.toLocaleLowerCase());
                      i || (p && !t)
                        ? ((a = u(a)), (a.text += d))
                        : e
                          ? (p = !0)
                          : t && (p = !1),
                        (a = l(s, a)),
                        (i = !1);
                    }
                  else (a = l(s, u(a), 2)), (i = !0);
                  break;
                case 1:
                  "[" != d || c
                    ? "\\" == d && t
                      ? (c && (a.text += d), (c = !c))
                      : ((a.text += d), (c = !1))
                    : ((a = l(s, a, 2)), (i = !0));
              }
            }
            0 != a.type &&
              (2 == a.type || 3 == a.type
                ? s.push(u(a))
                : s.push({
                    type: a.type,
                    text: null !== (o = a.text) && void 0 !== o ? o : "",
                  }));
            return s;
          })(e || "", n);
          return this.Parse_BuildElements(r, t);
        }
        Parse_BuildElements(e, t) {
          let n = this.m_fnAccumulatorFactory(void 0);
          const r = [],
            o = () => (r.length < 1 ? void 0 : r[r.length - 1]),
            s = this.m_dictComponents,
            a = (e) => {
              var t;
              return !(
                !e.tag ||
                !(null === (t = s.get(e.tag)) || void 0 === t
                  ? void 0
                  : t.autocloses)
              );
            };
          let c = !1,
            l = !0;
          const u = (e, r) => {
            if (e && e.node.tag === r.text && s.get(e.node.tag)) {
              const r = s.get(e.node.tag),
                o = {
                  tagname: e.node.tag,
                  args: e.node.args,
                  rawargs: e.node.rawargs,
                },
                a = t(r.Constructor, o, ...n.GetElements());
              (n = e.accumulator),
                Array.isArray(a)
                  ? a.forEach((e) => n.AppendNode(e))
                  : n.AppendNode(a),
                (c = !!r.skipFollowingNewline),
                (l = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                n.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + r.text + "]", !1),
                (n = t),
                (l = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              var i, p;
              if (1 == e.type) {
                const t = c ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                n.AppendText(t, l), (c = !1);
              } else if (2 == e.type) {
                const t = s.get(e.tag);
                if (t) {
                  const a = o();
                  if (void 0 !== a) {
                    const t = s.get(a.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === a.node.tag &&
                      u(r.pop(), a.node);
                  }
                  r.push({ accumulator: n, node: e, bWrapTextForCopying: l }),
                    (n = this.m_fnAccumulatorFactory(e)),
                    (c = !!t.skipInternalNewline),
                    (l =
                      null !== (i = t.allowWrapTextForCopying) &&
                      void 0 !== i &&
                      i);
                } else n.AppendText("[" + e.text + "]", 0 == r.length);
              } else if (3 == e.type) {
                for (; o() && o().node.tag !== e.text && a(o().node); ) {
                  const e = r.pop();
                  u(e, e.node);
                }
                if (
                  (null === (p = o()) || void 0 === p ? void 0 : p.node.tag) ==
                  e.text
                ) {
                  const t = r.pop();
                  u(t, e);
                } else n.AppendText("[/" + e.text + "]", 0 == r.length);
              }
            });
            r.length > 0;
          ) {
            const e = r.pop();
            u(e, e.node);
          }
          return n.GetElements();
        }
      }
      function o(e, t) {
        let n = "[" + e;
        (null == t ? void 0 : t[""]) && (n += `=${s("" + t[""])}`);
        for (const e in t)
          "" !== e &&
            (n += ` ${((r = e), r.replace(/(\\| |\])/g, "\\$1"))}=${s("" + t[e])}`);
        var r;
        return (n += "]"), n;
      }
      function s(e) {
        return `"${e.replace(/(\\|"|\])/g, "\\$1")}"`;
      }
      function a(e) {
        return `[/${e}]`;
      }
      function c(e) {
        return e.replace(/(\\|\[)/g, "\\$1");
      }
      function l(e, t, n = 0) {
        const { type: r, text: o = "" } = t;
        if (2 == r) {
          let t = o.indexOf("=");
          const n = o.indexOf(" ");
          let s, a;
          -1 != n && (-1 == t || n < t) && (t = n);
          let c = "";
          t > 0
            ? ((s = o.substr(0, t).toLocaleLowerCase()),
              (c = o.substr(t)),
              (a = (function (e) {
                if (!e || e.length < 1) return {};
                const t = {};
                let n = "",
                  r = "",
                  o = 0,
                  s = 0;
                "=" == e[0] && (o = 2);
                let a = !1;
                for (s++; s < e.length; s++) {
                  const c = e[s];
                  let l = !0,
                    u = !1;
                  switch (o) {
                    case 0:
                      if ("=" == c) return {};
                      if (" " == c) continue;
                      o = 1;
                      break;
                    case 1:
                      ("=" != c && " " != c) ||
                        a ||
                        (" " == c ? ((o = 0), (u = !0)) : (o = 2), (l = !1));
                      break;
                    case 2:
                      " " == c
                        ? ((o = 0), (l = !1), (u = !0))
                        : '"' == c
                          ? ((o = 4), (l = !1))
                          : (o = 3);
                      break;
                    case 3:
                    case 4:
                      ((" " == c && 4 != o && !a) ||
                        ('"' == c && 4 == o && !a)) &&
                        ((o = 0), (l = !1), (u = !0));
                  }
                  if (l)
                    if ("\\" != c || a)
                      if (((a = !1), 1 == o)) n += c;
                      else {
                        if (3 != o && 4 != o)
                          throw new Error(
                            "Not expecting to accumulate buffer in state " + o,
                          );
                        r += c;
                      }
                    else a = !0;
                  u && ((t[n] = r), (n = ""), (r = ""));
                }
                0 != o && (t[n] = r);
                return t;
              })(c)))
            : ((a = {}), (s = o.toLocaleLowerCase())),
            e.push({ type: r, text: o, tag: s, args: a, rawargs: c });
        } else 0 != r && e.push({ type: r, text: o });
        return { type: n, text: "" };
      }
      function u(e) {
        var t;
        let n = "";
        return (
          3 == e.type ? (n = "[/") : 2 == e.type && (n = "["),
          {
            type: 1,
            text: n + (null !== (t = e.text) && void 0 !== t ? t : ""),
          }
        );
      }
    },
    52967: (e, t, n) => {
      n.d(t, { B: () => c });
      var r = n(22837),
        o = n(90626),
        s = n(42780),
        a = n(95742);
      class c extends a.Al {
        constructor(e, t, n) {
          super(e, null != t ? t : () => new s.R8()),
            (this.m_renderingLanguage =
              "string" == typeof n ? (0, r.sf)(n) : n);
        }
        UpdateOverrideLanguage(e) {
          this.m_renderingLanguage = e;
        }
        ParseBBCode(e, t, n = !0) {
          let r = 0;
          const s = this.Parse(
            e,
            (e, n, ...s) =>
              o.createElement(
                e,
                {
                  ...n,
                  context: t,
                  language: this.m_renderingLanguage,
                  key: "bbnode_" + r++,
                },
                ...s,
              ),
            n,
          );
          return s.length > 1
            ? o.createElement(o.Fragment, null, ...s)
            : 1 == s.length
              ? s[0]
              : null;
        }
      }
    },
    40236: (e, t, n) => {
      n.d(t, { OO: () => l, wY: () => c });
      var r = n(90626),
        o = n(8871),
        s = n(81393);
      function a(e, t) {
        return (0, o.QS)(
          (n) => {
            if (!n) return;
            const r = t(n.ownerDocument.defaultView, (t) => {
              e(t[0]);
            });
            return r.observe(n), () => r.unobserve(n);
          },
          [e, t],
        );
      }
      function c(e) {
        return a(
          e,
          r.useCallback(
            (e, t) =>
              e.ResizeObserver
                ? new e.ResizeObserver(t)
                : ((0, s.wT)(!1, "ResizeObserver is not available"),
                  {
                    observe: () => {},
                    unobserve: () => {},
                    disconnect: () => {},
                  }),
            [],
          ),
        );
      }
      function l(e, t) {
        const n = r.useRef(void 0);
        return (function (e, t) {
          return a(
            e,
            r.useCallback((e, n) => new e.IntersectionObserver(n, t), [t]),
          );
        })((t) => {
          var r, o, s;
          !n.current &&
            t.isIntersecting &&
            (null === (r = e.onEnter) || void 0 === r || r.call(e, t)),
            n.current &&
              !t.isIntersecting &&
              (null === (o = e.onLeave) || void 0 === o || o.call(e, t)),
            null === (s = e.onIntersectionChange) ||
              void 0 === s ||
              s.call(e, t),
            (n.current = t.isIntersecting);
        }, t);
      }
    },
  },
]);
