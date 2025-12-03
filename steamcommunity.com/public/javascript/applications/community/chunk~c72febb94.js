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
    49693: (e, t, n) => {
      var r;
      n.d(t, { op: () => c, CS: () => s, vE: () => l, Al: () => o }),
        (function (e) {
          (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
            (e[(e.TEXT = 1)] = "TEXT"),
            (e[(e.OPENTAG = 2)] = "OPENTAG"),
            (e[(e.CLOSETAG = 3)] = "CLOSETAG");
        })(r || (r = {}));
      class o {
        constructor(e, t) {
          e instanceof Map
            ? (this.m_dictComponents = e)
            : (this.m_dictComponents = new Map(Object.entries(e))),
            (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, n = !0) {
          const o = (function (e, t) {
            var n, o, s;
            const a = [];
            let c = { type: r.UNKNOWN, text: "" },
              l = !1,
              p = !1,
              d = !1;
            for (let s = 0; s < e.length; s++) {
              const E = e[s];
              switch (c.type) {
                case r.UNKNOWN:
                  "[" == E
                    ? ((c.type = r.OPENTAG), (p = !0))
                    : ((c.type = r.TEXT),
                      "\\" == E && t ? (l = !l) : (c.text += E));
                  break;
                case r.OPENTAG:
                case r.CLOSETAG:
                  if ("/" == E && p)
                    (c.type = r.CLOSETAG), (c.text = ""), (p = !1);
                  else if ("[" != E || l)
                    if ("]" != E || l)
                      "\\" == E && t
                        ? ((c.text += E), (l = !l), (p = !1))
                        : ((c.text += E), (l = !1), (p = !1));
                    else {
                      const e =
                          c.type == r.OPENTAG &&
                          "noparse" ==
                            (null === (n = c.text) || void 0 === n
                              ? void 0
                              : n.toLocaleLowerCase()),
                        t =
                          c.type == r.CLOSETAG &&
                          "noparse" ==
                            (null === (o = c.text) || void 0 === o
                              ? void 0
                              : o.toLocaleLowerCase());
                      p || (d && !t)
                        ? ((c = i(c)), (c.text += E))
                        : e
                          ? (d = !0)
                          : t && (d = !1),
                        (c = u(a, c)),
                        (p = !1);
                    }
                  else (c = u(a, i(c), r.OPENTAG)), (p = !0);
                  break;
                case r.TEXT:
                  "[" != E || l
                    ? "\\" == E && t
                      ? (l && (c.text += E), (l = !l))
                      : ((c.text += E), (l = !1))
                    : ((c = u(a, c, r.OPENTAG)), (p = !0));
              }
            }
            c.type != r.UNKNOWN &&
              (c.type == r.OPENTAG || c.type == r.CLOSETAG
                ? a.push(i(c))
                : a.push({
                    type: c.type,
                    text: null !== (s = c.text) && void 0 !== s ? s : "",
                  }));
            return a;
          })(e || "", n);
          return this.Parse_BuildElements(o, t);
        }
        Parse_BuildElements(e, t) {
          let n = this.m_fnAccumulatorFactory(void 0);
          const o = [],
            s = () => (o.length < 1 ? void 0 : o[o.length - 1]),
            a = this.m_dictComponents,
            c = (e) => {
              var t;
              return !(
                !e.tag ||
                !(null === (t = a.get(e.tag)) || void 0 === t
                  ? void 0
                  : t.autocloses)
              );
            };
          let l = !1,
            u = !0;
          const i = (e, r) => {
            if (e && e.node.tag === r.text && a.get(e.node.tag)) {
              const r = a.get(e.node.tag),
                o = {
                  tagname: e.node.tag,
                  args: e.node.args,
                  rawargs: e.node.rawargs,
                },
                s = t(r.Constructor, o, ...n.GetElements());
              (n = e.accumulator),
                Array.isArray(s)
                  ? s.forEach((e) => n.AppendNode(e))
                  : n.AppendNode(s),
                (l = !!r.skipFollowingNewline),
                (u = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                n.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + r.text + "]", !1),
                (n = t),
                (u = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              var p, d;
              if (e.type == r.TEXT) {
                const t = l ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                n.AppendText(t, u), (l = !1);
              } else if (e.type == r.OPENTAG) {
                const t = a.get(e.tag);
                if (t) {
                  const r = s();
                  if (void 0 !== r) {
                    const t = a.get(r.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === r.node.tag &&
                      i(o.pop(), r.node);
                  }
                  o.push({ accumulator: n, node: e, bWrapTextForCopying: u }),
                    (n = this.m_fnAccumulatorFactory(e)),
                    (l = !!t.skipInternalNewline),
                    (u =
                      null !== (p = t.allowWrapTextForCopying) &&
                      void 0 !== p &&
                      p);
                } else n.AppendText("[" + e.text + "]", 0 == o.length);
              } else if (e.type == r.CLOSETAG) {
                for (; s() && s().node.tag !== e.text && c(s().node); ) {
                  const e = o.pop();
                  i(e, e.node);
                }
                if (
                  (null === (d = s()) || void 0 === d ? void 0 : d.node.tag) ==
                  e.text
                ) {
                  const t = o.pop();
                  i(t, e);
                } else n.AppendText("[/" + e.text + "]", 0 == o.length);
              }
            });
            o.length > 0;
          ) {
            const e = o.pop();
            i(e, e.node);
          }
          return n.GetElements();
        }
      }
      function s(e, t) {
        let n = "[" + e;
        (null == t ? void 0 : t[""]) && (n += `=${a("" + t[""])}`);
        for (const e in t)
          "" !== e &&
            (n += ` ${((r = e), r.replace(/(\\| |\])/g, "\\$1"))}=${a("" + t[e])}`);
        var r;
        return (n += "]"), n;
      }
      function a(e) {
        return `"${e.replace(/(\\|"|\])/g, "\\$1")}"`;
      }
      function c(e) {
        return `[/${e}]`;
      }
      function l(e) {
        return e.replace(/(\\|\[)/g, "\\$1");
      }
      function u(e, t, n = r.UNKNOWN) {
        const { type: o, text: s = "" } = t;
        if (o == r.OPENTAG) {
          let t = s.indexOf("=");
          const n = s.indexOf(" ");
          let r, a;
          -1 != n && (-1 == t || n < t) && (t = n);
          let c = "";
          t > 0
            ? ((r = s.substr(0, t).toLocaleLowerCase()),
              (c = s.substr(t)),
              (a = (function (e) {
                if (!e || e.length < 1) return {};
                const t = {};
                let n,
                  r = "",
                  o = "";
                !(function (e) {
                  (e[(e.PRE_NAME = 0)] = "PRE_NAME"),
                    (e[(e.IN_NAME = 1)] = "IN_NAME"),
                    (e[(e.POST_NAME = 2)] = "POST_NAME"),
                    (e[(e.IN_VALUE = 3)] = "IN_VALUE"),
                    (e[(e.IN_QUOTED_VALUE = 4)] = "IN_QUOTED_VALUE");
                })(n || (n = {}));
                let s = n.PRE_NAME,
                  a = 0;
                "=" == e[0] && (s = n.POST_NAME);
                let c = !1;
                for (a++; a < e.length; a++) {
                  const l = e[a];
                  let u = !0,
                    i = !1;
                  switch (s) {
                    case n.PRE_NAME:
                      if ("=" == l) return {};
                      if (" " == l) continue;
                      s = n.IN_NAME;
                      break;
                    case n.IN_NAME:
                      ("=" != l && " " != l) ||
                        c ||
                        (" " == l
                          ? ((s = n.PRE_NAME), (i = !0))
                          : (s = n.POST_NAME),
                        (u = !1));
                      break;
                    case n.POST_NAME:
                      " " == l
                        ? ((s = n.PRE_NAME), (u = !1), (i = !0))
                        : '"' == l
                          ? ((s = n.IN_QUOTED_VALUE), (u = !1))
                          : (s = n.IN_VALUE);
                      break;
                    case n.IN_VALUE:
                    case n.IN_QUOTED_VALUE:
                      ((" " == l && s != n.IN_QUOTED_VALUE && !c) ||
                        ('"' == l && s == n.IN_QUOTED_VALUE && !c)) &&
                        ((s = n.PRE_NAME), (u = !1), (i = !0));
                  }
                  if (u)
                    if ("\\" != l || c)
                      if (((c = !1), s == n.IN_NAME)) r += l;
                      else {
                        if (s != n.IN_VALUE && s != n.IN_QUOTED_VALUE)
                          throw new Error(
                            "Not expecting to accumulate buffer in state " + s,
                          );
                        o += l;
                      }
                    else c = !0;
                  i && ((t[r] = o), (r = ""), (o = ""));
                }
                s != n.PRE_NAME && (t[r] = o);
                return t;
              })(c)))
            : ((a = {}), (r = s.toLocaleLowerCase())),
            e.push({ type: o, text: s, tag: r, args: a, rawargs: c });
        } else o != r.UNKNOWN && e.push({ type: o, text: s });
        return { type: n, text: "" };
      }
      function i(e) {
        var t;
        let n = "";
        return (
          e.type == r.CLOSETAG ? (n = "[/") : e.type == r.OPENTAG && (n = "["),
          {
            type: r.TEXT,
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
        a = n(49693);
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
