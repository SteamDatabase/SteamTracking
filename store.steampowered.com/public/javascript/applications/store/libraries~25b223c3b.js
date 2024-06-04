/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8429],
  {
    42090: (e) => {
      e.exports = {
        Bold: "_3EEX5EnE5jX6ALuM17j9P9",
        Italic: "_11Vop5hqkb4UtuyOIHmAdt",
        Paragraph: "_2FUh_-TukJdDdc0WMKZ1gm",
        Header1: "Gb7desIN53-Tq3RNnS8NP",
        Header2: "_38QhZsth3kKUCQTUQsFJcx",
        Header3: "R4hvAPxshacgyDjDRc_p5",
        Header4: "aJiJWQ5iAzMffpkSoB-yJ",
        Header5: "_38x7ldP9M8Rf7rQaqUVLfM",
        CenterSpan: "MttOCrrSwmhv9aQaMVBe1",
        SmallText: "Bb6joyZTFqJZhcGgJwXyd",
        Underline: "_2k5K3JFG1tDNGhq_6GiFh2",
        Strike: "fJgIlppkEgmGzQBaDbcZj",
        Spoiler: "_2ryuQAR8BQoRfoKwHm-vl9",
        Revealed: "oRqGupf1izj8Ws6uOvXg0",
        SpoilerText: "aQ6hNhlEF50vu4loiTC0V",
        DisabledMouseEvents: "_2AdwsAXyBH_Fudd3hW-W0_",
        BlockQuote: "dX9uPtpXTpsQ6E9MU_mrd",
        QuoteAuthor: "_2tLpXbXpVHSR40fCq24HYy",
        PullQuote: "_2y6UNP642sY8x2xTq7Ijwq",
        Code: "oSbvKh0hMd_ENH--14u3V",
        CodeBlock: "i0sWzeV_GhUXTzNzAGJQw",
        List: "nmeSItAiqW02bZXrkfBer",
        OrderedList: "_2jFzCx9cShHXQV9-sWfwbi",
        ListItem: "_2N4P1EX3AkI1h6742C3zdf",
        HR: "_2d7JDIPrrkaITdAN0iAmbF",
        Table: "_30O6lKJbGWKCud5qwx0fv3",
        NoBorder: "_1-l2r8gud2gmV1I06mYFhr",
        TableRow: "_2_Lln79hte5b2h4xJYGMCC",
        TableData: "_3jQbzLZnG7oBptlSXqa4DS",
        TableHeader: "_12e8opfGLqPahTm2Hzgp8U",
        EqualCells: "_1e3scOwP4GTtHQTzNa5Fke",
        ExpandSectionBlock: "_6v6nAxJoW7dpvNFs_tHZp",
        ExpandSectionHeader: "_2jik5tSRvnaAxAM7yeFVB",
        EmbedArrow: "_1gQdBaiSRmitMK_g_3dmDz",
        ExpandSectionBody: "_3M8uIxRzxJRiuBJ6r_hquy",
        ExpandSection_WithTitle: "OlsNqV8NA_Oa__IHvlSGY",
        LinkButton: "_1GJ9e2VDlWlg-WoefQUvDa",
        Image: "_2zddcyJ-rclpH2Qqq1WTgV",
      };
    },
    49119: (e, t) => {
      "use strict";
      var o = Symbol.for("react.element"),
        r = Symbol.for("react.portal"),
        n = Symbol.for("react.fragment"),
        s = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        c = Symbol.for("react.provider"),
        l = Symbol.for("react.context"),
        u = Symbol.for("react.forward_ref"),
        i = Symbol.for("react.suspense"),
        p = Symbol.for("react.memo"),
        d = Symbol.for("react.lazy"),
        f = Symbol.iterator;
      /**
       * @license React
       * react.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var h = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        y = Object.assign,
        m = {};
      function g(e, t, o) {
        (this.props = e),
          (this.context = t),
          (this.refs = m),
          (this.updater = o || h);
      }
      function _() {}
      function x(e, t, o) {
        (this.props = e),
          (this.context = t),
          (this.refs = m),
          (this.updater = o || h);
      }
      (g.prototype.isReactComponent = {}),
        (g.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (g.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (_.prototype = g.prototype);
      var b = (x.prototype = new _());
      (b.constructor = x), y(b, g.prototype), (b.isPureReactComponent = !0);
      var v = Array.isArray,
        A = Object.prototype.hasOwnProperty,
        S = { current: null },
        w = { key: !0, ref: !0, __self: !0, __source: !0 };
      function T(e, t, r) {
        var n,
          s = {},
          a = null,
          c = null;
        if (null != t)
          for (n in (void 0 !== t.ref && (c = t.ref),
          void 0 !== t.key && (a = "" + t.key),
          t))
            A.call(t, n) && !w.hasOwnProperty(n) && (s[n] = t[n]);
        var l = arguments.length - 2;
        if (1 === l) s.children = r;
        else if (1 < l) {
          for (var u = Array(l), i = 0; i < l; i++) u[i] = arguments[i + 2];
          s.children = u;
        }
        if (e && e.defaultProps)
          for (n in (l = e.defaultProps)) void 0 === s[n] && (s[n] = l[n]);
        return {
          $$typeof: o,
          type: e,
          key: a,
          ref: c,
          props: s,
          _owner: S.current,
        };
      }
      function k(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o;
      }
      var C = /\/+/g;
      function E(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })("" + e.key)
          : t.toString(36);
      }
      function N(e, t, n, s, a) {
        var c = typeof e;
        ("undefined" !== c && "boolean" !== c) || (e = null);
        var l = !1;
        if (null === e) l = !0;
        else
          switch (c) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case o:
                case r:
                  l = !0;
              }
          }
        if (l)
          return (
            (a = a((l = e))),
            (e = "" === s ? "." + E(l, 0) : s),
            v(a)
              ? ((n = ""),
                null != e && (n = e.replace(C, "$&/") + "/"),
                N(a, t, n, "", function (e) {
                  return e;
                }))
              : null != a &&
                (k(a) &&
                  (a = (function (e, t) {
                    return {
                      $$typeof: o,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    a,
                    n +
                      (!a.key || (l && l.key === a.key)
                        ? ""
                        : ("" + a.key).replace(C, "$&/") + "/") +
                      e,
                  )),
                t.push(a)),
            1
          );
        if (((l = 0), (s = "" === s ? "." : s + ":"), v(e)))
          for (var u = 0; u < e.length; u++) {
            var i = s + E((c = e[u]), u);
            l += N(c, t, n, i, a);
          }
        else if (
          ((i = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (f && e[f]) || e["@@iterator"])
                ? e
                : null;
          })(e)),
          "function" == typeof i)
        )
          for (e = i.call(e), u = 0; !(c = e.next()).done; )
            l += N((c = c.value), t, n, (i = s + E(c, u++)), a);
        else if ("object" === c)
          throw (
            ((t = String(e)),
            Error(
              "Objects are not valid as a React child (found: " +
                ("[object Object]" === t
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t) +
                "). If you meant to render a collection of children, use an array instead.",
            ))
          );
        return l;
      }
      function j(e, t, o) {
        if (null == e) return e;
        var r = [],
          n = 0;
        return (
          N(e, r, "", "", function (e) {
            return t.call(o, e, n++);
          }),
          r
        );
      }
      function F(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()).then(
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 2), (e._result = t));
            },
          ),
            -1 === e._status && ((e._status = 0), (e._result = t));
        }
        if (1 === e._status) return e._result.default;
        throw e._result;
      }
      var L = { current: null },
        q = { transition: null },
        B = {
          ReactCurrentDispatcher: L,
          ReactCurrentBatchConfig: q,
          ReactCurrentOwner: S,
        };
      function G() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      (t.Fragment = n), (t.createElement = T);
    },
    29624: (e, t, o) => {
      "use strict";
      e.exports = o(49119);
    },
    20142: (e, t, o) => {
      "use strict";
      o.d(t, { DX: () => a, LT: () => s, So: () => c });
      var r = o(20020),
        n = o(29624);
      class s {
        constructor() {
          this.reactNodes = [];
        }
        AppendText(e, t = !1) {
          e.length &&
            (t
              ? this.reactNodes.push(
                  n.createElement(
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
          (0, r.X)(e, "decorated accumulator cannot be null"),
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
        constructor(e, t, o) {
          super(e),
            (this.m_nStartCursor = 1),
            (this.m_nStartCursor = void 0 !== t ? t : 1);
        }
        AppendText(e) {
          let t = e;
          const o = [];
          for (
            let e = t.indexOf("\n", this.m_nStartCursor);
            -1 !== e;
            e = t.indexOf("\n")
          )
            o.push(t.substr(0, e)),
              o.push(n.createElement("br")),
              (t = t.substr(e + 1));
          t.length && o.push(t),
            o.forEach((e) => {
              super.AppendNode(e);
            });
        }
      }
    },
    31932: (e, t, o) => {
      "use strict";
      o.d(t, { Z: () => u });
      var r = o(77936),
        n = o(29624),
        s = o(20142);
      class a {
        constructor() {
          (this.type = 0), (this.text = "");
        }
        ConvertMalformedNodeToText() {
          3 == this.type
            ? (this.text = "[/" + this.text)
            : 2 == this.type && (this.text = "[" + this.text),
            (this.type = 1);
        }
      }
      class c {
        constructor(e, t) {
          (this.m_dictComponents = void 0),
            (this.m_dictComponents = e),
            (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, o = !1) {
          const r = (function (e, t) {
            const o = [];
            let r = new a(),
              n = !1,
              s = !1,
              c = !1;
            for (let a = 0; a < e.length; a++) {
              const u = e[a];
              switch (r.type) {
                case 0:
                  "[" == u
                    ? ((r.type = 2), (s = !0))
                    : ((r.type = 1), "\\" == u && t ? (n = !n) : (r.text += u));
                  break;
                case 2:
                case 3:
                  if ("/" == u && s) (r.type = 3), (r.text = ""), (s = !1);
                  else if ("[" != u || n)
                    if ("]" != u || n)
                      "\\" == u && t
                        ? ((r.text += u), (n = !n), (s = !1))
                        : ((r.text += u), (n = !1), (s = !1));
                    else {
                      const e =
                          2 == r.type &&
                          "noparse" == r.text.toLocaleLowerCase(),
                        t =
                          3 == r.type &&
                          "noparse" == r.text.toLocaleLowerCase();
                      s || (c && !t)
                        ? (r.ConvertMalformedNodeToText(), (r.text += u))
                        : e
                          ? (c = !0)
                          : t && (c = !1),
                        (r = l(o, r)),
                        (s = !1);
                    }
                  else
                    r.ConvertMalformedNodeToText(), (r = l(o, r, 2)), (s = !0);
                  break;
                case 1:
                  "[" != u || n
                    ? "\\" == u && t
                      ? (n && (r.text += u), (n = !n))
                      : ((r.text += u), (n = !1))
                    : ((r = l(o, r, 2)), (s = !0));
              }
            }
            0 != r.type &&
              ((2 != r.type && 3 != r.type) || r.ConvertMalformedNodeToText(),
              o.push(r));
            return o;
          })(e, o);
          return this.Parse_BuildElements(r, t);
        }
        Parse_BuildElements(e, t) {
          let o = this.m_fnAccumulatorFactory(void 0);
          const r = [],
            n = () => (r.length < 1 ? void 0 : r[r.length - 1]),
            s = this.m_dictComponents;
          let a = !1,
            c = !0;
          const l = (e, n, l) => {
            if (
              e &&
              e.node.tag === n.text &&
              (null == s ? void 0 : s.get(e.node.tag))
            ) {
              const n = s.get(e.node.tag),
                l = r.map((e) => e.node.tag),
                u = { parentTags: l, tagname: e.node.tag, args: e.node.args },
                i = t(n.Constructor, u, ...o.GetElements());
              (o = e.accumulator),
                Array.isArray(i)
                  ? i.forEach((e) => o.AppendNode(e))
                  : o.AppendNode(i),
                (a = !!n.skipFollowingNewline),
                (c = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                o.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + n.text + "]", !1),
                (o = t),
                (c = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              var u, i, p;
              if (1 == e.type) {
                const t = a ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                o.AppendText(t, c), (a = !1);
              } else if (2 == e.type) {
                const t = null == s ? void 0 : s.get(e.tag);
                if (t) {
                  const i = n();
                  if (void 0 !== i) {
                    const t = null == s ? void 0 : s.get(i.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === i.node.tag &&
                      l(r.pop(), i.node);
                  }
                  r.push({ accumulator: o, node: e, bWrapTextForCopying: c }),
                    (o = this.m_fnAccumulatorFactory(e)),
                    (a = !!t.skipInternalNewline),
                    (c =
                      null !== (u = t.allowWrapTextForCopying) &&
                      void 0 !== u &&
                      u);
                } else o.AppendText("[" + e.text + "]", 0 == r.length);
              } else if (3 == e.type) {
                for (
                  ;
                  n() &&
                  n().node.tag !== e.text &&
                  (null == s ? void 0 : s.get(n().node.tag)) &&
                  (null === (i = null == s ? void 0 : s.get(n().node.tag)) ||
                  void 0 === i
                    ? void 0
                    : i.autocloses);

                ) {
                  const e = r.pop();
                  l(e, e.node);
                }
                if (
                  (null === (p = n()) || void 0 === p ? void 0 : p.node.tag) ==
                  e.text
                ) {
                  const t = r.pop();
                  l(t, e);
                } else o.AppendText("[/" + e.text + "]", 0 == r.length);
              }
            });
            r.length > 0;

          ) {
            const e = r.pop(),
              t = e.accumulator;
            t.AppendText("[" + e.node.text + "]", !1),
              o.GetElements().forEach((e) => t.AppendNode(e)),
              (o = t);
          }
          return o.GetElements();
        }
      }
      function l(e, t, o = 0) {
        if (2 == t.type) {
          let e = t.text.indexOf("=");
          const o = t.text.indexOf(" ");
          if ((-1 != o && (-1 == e || o < e) && (e = o), e > 0)) {
            t.tag = t.text.substr(0, e).toLocaleLowerCase();
            const o = t.text.substr(e);
            t.args = (function (e) {
              if (!e || e.length < 1) return {};
              const t = {};
              let o = "",
                r = "",
                n = 0,
                s = 0;
              "=" == e[0] && (n = 2);
              let a = !1;
              for (s++; s < e.length; s++) {
                const c = e[s];
                let l = !0,
                  u = !1;
                switch (n) {
                  case 0:
                    if ("=" == c) return {};
                    if (" " == c) continue;
                    n = 1;
                    break;
                  case 1:
                    ("=" != c && " " != c) ||
                      a ||
                      (" " == c ? ((n = 0), (u = !0)) : (n = 2), (l = !1));
                    break;
                  case 2:
                    " " == c
                      ? ((n = 0), (l = !1), (u = !0))
                      : '"' == c
                        ? ((n = 4), (l = !1))
                        : (n = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == c && 4 != n && !a) ||
                      ('"' == c && 4 == n && !a)) &&
                      ((n = 0), (l = !1), (u = !0));
                }
                if (l)
                  if ("\\" != c || a)
                    if (((a = !1), 1 == n)) o += c;
                    else {
                      if (3 != n && 4 != n)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + n,
                        );
                      r += c;
                    }
                  else a = !0;
                u && ((t[o] = r), (o = ""), (r = ""));
              }
              0 != n && (t[o] = r);
              return t;
            })(o);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        const r = new a();
        return (r.type = o), r;
      }
      class u extends c {
        constructor(e, t, o) {
          super(e, null != t ? t : () => new s.LT()),
            (this.m_renderingLanguage =
              "string" == typeof o ? (0, r.jM)(o) : o);
        }
        UpdateOverrideLanguage(e) {
          this.m_renderingLanguage = e;
        }
        ParseBBCode(e, t, o = !1) {
          let r = 0;
          const s = this.Parse(
            e,
            (e, o, ...s) =>
              n.createElement(
                e,
                Object.assign(Object.assign({}, o), {
                  context: t,
                  language: this.m_renderingLanguage,
                  key: "bbnode_" + r++,
                }),
                ...s,
              ),
            o,
          );
          return s.length > 1
            ? n.createElement(n.Fragment, null, ...s)
            : 1 == s.length
              ? s[0]
              : null;
        }
      }
    },
    20020: (e, t, o) => {
      "use strict";
      function r(e, t, ...o) {
        console.assert
          ? 0 == o.length
            ? console.assert(!!e, t)
            : console.assert(!!e, t, ...o)
          : e || console.warn(t, ...o);
      }
      function n(e, t, ...o) {
        r(!1, t, ...o);
      }
      o.d(t, { X: () => r, Z: () => n });
    },
  },
]);
