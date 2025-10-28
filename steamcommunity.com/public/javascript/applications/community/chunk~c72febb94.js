/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5660],
  {
    42780: (e, t, n) => {
      n.d(t, { K0: () => a, OJ: () => c, R8: () => s });
      var o = n(81393),
        r = n(90626);
      class s {
        constructor() {
          this.reactNodes = [];
        }
        AppendText(e, t = !1) {
          e.length &&
            (t
              ? this.reactNodes.push(
                  r.createElement(
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
          (0, o.wT)(e, "decorated accumulator cannot be null"),
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
              n.push(r.createElement("br")),
              (t = t.substr(e + 1));
          t.length && n.push(t),
            n.forEach((e) => {
              super.AppendNode(e);
            });
        }
      }
    },
    95742: (e, t, n) => {
      n.d(t, { Al: () => o, CS: () => r, op: () => a, vE: () => c });
      class o {
        constructor(e, t) {
          e instanceof Map
            ? (this.m_dictComponents = e)
            : (this.m_dictComponents = new Map(Object.entries(e))),
            (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, n = !0) {
          const o = (function (e, t) {
            var n, o, r;
            const s = [];
            let a = { type: 0, text: "" },
              c = !1,
              u = !1,
              i = !1;
            for (let r = 0; r < e.length; r++) {
              const d = e[r];
              switch (a.type) {
                case 0:
                  "[" == d
                    ? ((a.type = 2), (u = !0))
                    : ((a.type = 1), "\\" == d && t ? (c = !c) : (a.text += d));
                  break;
                case 2:
                case 3:
                  if ("/" == d && u) (a.type = 3), (a.text = ""), (u = !1);
                  else if ("[" != d || c)
                    if ("]" != d || c)
                      "\\" == d && t
                        ? ((a.text += d), (c = !c), (u = !1))
                        : ((a.text += d), (c = !1), (u = !1));
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
                            (null === (o = a.text) || void 0 === o
                              ? void 0
                              : o.toLocaleLowerCase());
                      u || (i && !t)
                        ? ((a = p(a)), (a.text += d))
                        : e
                          ? (i = !0)
                          : t && (i = !1),
                        (a = l(s, a)),
                        (u = !1);
                    }
                  else (a = l(s, p(a), 2)), (u = !0);
                  break;
                case 1:
                  "[" != d || c
                    ? "\\" == d && t
                      ? (c && (a.text += d), (c = !c))
                      : ((a.text += d), (c = !1))
                    : ((a = l(s, a, 2)), (u = !0));
              }
            }
            0 != a.type &&
              (2 == a.type || 3 == a.type
                ? s.push(p(a))
                : s.push({
                    type: a.type,
                    text: null !== (r = a.text) && void 0 !== r ? r : "",
                  }));
            return s;
          })(e || "", n);
          return this.Parse_BuildElements(o, t);
        }
        Parse_BuildElements(e, t) {
          let n = this.m_fnAccumulatorFactory(void 0);
          const o = [],
            r = () => (o.length < 1 ? void 0 : o[o.length - 1]),
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
          const p = (e, o) => {
            if (e && e.node.tag === o.text && s.get(e.node.tag)) {
              const o = s.get(e.node.tag),
                r = {
                  tagname: e.node.tag,
                  args: e.node.args,
                  rawargs: e.node.rawargs,
                },
                a = t(o.Constructor, r, ...n.GetElements());
              (n = e.accumulator),
                Array.isArray(a)
                  ? a.forEach((e) => n.AppendNode(e))
                  : n.AppendNode(a),
                (c = !!o.skipFollowingNewline),
                (l = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                n.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + o.text + "]", !1),
                (n = t),
                (l = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              var u, i;
              if (1 == e.type) {
                const t = c ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                n.AppendText(t, l), (c = !1);
              } else if (2 == e.type) {
                const t = s.get(e.tag);
                if (t) {
                  const a = r();
                  if (void 0 !== a) {
                    const t = s.get(a.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === a.node.tag &&
                      p(o.pop(), a.node);
                  }
                  o.push({ accumulator: n, node: e, bWrapTextForCopying: l }),
                    (n = this.m_fnAccumulatorFactory(e)),
                    (c = !!t.skipInternalNewline),
                    (l =
                      null !== (u = t.allowWrapTextForCopying) &&
                      void 0 !== u &&
                      u);
                } else n.AppendText("[" + e.text + "]", 0 == o.length);
              } else if (3 == e.type) {
                for (; r() && r().node.tag !== e.text && a(r().node); ) {
                  const e = o.pop();
                  p(e, e.node);
                }
                if (
                  (null === (i = r()) || void 0 === i ? void 0 : i.node.tag) ==
                  e.text
                ) {
                  const t = o.pop();
                  p(t, e);
                } else n.AppendText("[/" + e.text + "]", 0 == o.length);
              }
            });
            o.length > 0;
          ) {
            const e = o.pop();
            p(e, e.node);
          }
          return n.GetElements();
        }
      }
      function r(e, t) {
        let n = "[" + e;
        (null == t ? void 0 : t[""]) && (n += `=${s("" + t[""])}`);
        for (const e in t)
          "" !== e &&
            (n += ` ${((o = e), o.replace(/(\\| |\])/g, "\\$1"))}=${s("" + t[e])}`);
        var o;
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
        const { type: o, text: r = "" } = t;
        if (2 == o) {
          let t = r.indexOf("=");
          const n = r.indexOf(" ");
          let s, a;
          -1 != n && (-1 == t || n < t) && (t = n);
          let c = "";
          t > 0
            ? ((s = r.substr(0, t).toLocaleLowerCase()),
              (c = r.substr(t)),
              (a = (function (e) {
                if (!e || e.length < 1) return {};
                const t = {};
                let n = "",
                  o = "",
                  r = 0,
                  s = 0;
                "=" == e[0] && (r = 2);
                let a = !1;
                for (s++; s < e.length; s++) {
                  const c = e[s];
                  let l = !0,
                    p = !1;
                  switch (r) {
                    case 0:
                      if ("=" == c) return {};
                      if (" " == c) continue;
                      r = 1;
                      break;
                    case 1:
                      ("=" != c && " " != c) ||
                        a ||
                        (" " == c ? ((r = 0), (p = !0)) : (r = 2), (l = !1));
                      break;
                    case 2:
                      " " == c
                        ? ((r = 0), (l = !1), (p = !0))
                        : '"' == c
                          ? ((r = 4), (l = !1))
                          : (r = 3);
                      break;
                    case 3:
                    case 4:
                      ((" " == c && 4 != r && !a) ||
                        ('"' == c && 4 == r && !a)) &&
                        ((r = 0), (l = !1), (p = !0));
                  }
                  if (l)
                    if ("\\" != c || a)
                      if (((a = !1), 1 == r)) n += c;
                      else {
                        if (3 != r && 4 != r)
                          throw new Error(
                            "Not expecting to accumulate buffer in state " + r,
                          );
                        o += c;
                      }
                    else a = !0;
                  p && ((t[n] = o), (n = ""), (o = ""));
                }
                0 != r && (t[n] = o);
                return t;
              })(c)))
            : ((a = {}), (s = r.toLocaleLowerCase())),
            e.push({ type: o, text: r, tag: s, args: a, rawargs: c });
        } else 0 != o && e.push({ type: o, text: r });
        return { type: n, text: "" };
      }
      function p(e) {
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
      var o = n(22837),
        r = n(90626),
        s = n(42780),
        a = n(95742);
      class c extends a.Al {
        constructor(e, t, n) {
          super(e, null != t ? t : () => new s.R8()),
            (this.m_renderingLanguage =
              "string" == typeof n ? (0, o.sf)(n) : n);
        }
        UpdateOverrideLanguage(e) {
          this.m_renderingLanguage = e;
        }
        ParseBBCode(e, t, n = !0) {
          let o = 0;
          const s = this.Parse(
            e,
            (e, n, ...s) =>
              r.createElement(
                e,
                {
                  ...n,
                  context: t,
                  language: this.m_renderingLanguage,
                  key: "bbnode_" + o++,
                },
                ...s,
              ),
            n,
          );
          return s.length > 1
            ? r.createElement(r.Fragment, null, ...s)
            : 1 == s.length
              ? s[0]
              : null;
        }
      }
    },
  },
]);
