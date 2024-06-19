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
    20142: (e, t, o) => {
      "use strict";
      o.d(t, { DX: () => a, LT: () => r, So: () => l });
      var n = o(20020),
        s = o(47427);
      class r {
        constructor() {
          this.reactNodes = [];
        }
        AppendText(e, t = !1) {
          e.length &&
            (t
              ? this.reactNodes.push(
                  s.createElement(
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
          (0, n.X)(e, "decorated accumulator cannot be null"),
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
      class l extends a {
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
              o.push(s.createElement("br")),
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
      o.d(t, { Z: () => c });
      var n = o(77936),
        s = o(47427),
        r = o(20142);
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
      class l {
        constructor(e, t) {
          (this.m_dictComponents = void 0),
            (this.m_dictComponents = e),
            (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, o = !1) {
          const n = (function (e, t) {
            const o = [];
            let n = new a(),
              s = !1,
              r = !1,
              l = !1;
            for (let a = 0; a < e.length; a++) {
              const c = e[a];
              switch (n.type) {
                case 0:
                  "[" == c
                    ? ((n.type = 2), (r = !0))
                    : ((n.type = 1), "\\" == c && t ? (s = !s) : (n.text += c));
                  break;
                case 2:
                case 3:
                  if ("/" == c && r) (n.type = 3), (n.text = ""), (r = !1);
                  else if ("[" != c || s)
                    if ("]" != c || s)
                      "\\" == c && t
                        ? ((n.text += c), (s = !s), (r = !1))
                        : ((n.text += c), (s = !1), (r = !1));
                    else {
                      const e =
                          2 == n.type &&
                          "noparse" == n.text.toLocaleLowerCase(),
                        t =
                          3 == n.type &&
                          "noparse" == n.text.toLocaleLowerCase();
                      r || (l && !t)
                        ? (n.ConvertMalformedNodeToText(), (n.text += c))
                        : e
                          ? (l = !0)
                          : t && (l = !1),
                        (n = d(o, n)),
                        (r = !1);
                    }
                  else
                    n.ConvertMalformedNodeToText(), (n = d(o, n, 2)), (r = !0);
                  break;
                case 1:
                  "[" != c || s
                    ? "\\" == c && t
                      ? (s && (n.text += c), (s = !s))
                      : ((n.text += c), (s = !1))
                    : ((n = d(o, n, 2)), (r = !0));
              }
            }
            0 != n.type &&
              ((2 != n.type && 3 != n.type) || n.ConvertMalformedNodeToText(),
              o.push(n));
            return o;
          })(e, o);
          return this.Parse_BuildElements(n, t);
        }
        Parse_BuildElements(e, t) {
          let o = this.m_fnAccumulatorFactory(void 0);
          const n = [],
            s = () => (n.length < 1 ? void 0 : n[n.length - 1]),
            r = this.m_dictComponents;
          let a = !1,
            l = !0;
          const d = (e, s, d) => {
            if (
              e &&
              e.node.tag === s.text &&
              (null == r ? void 0 : r.get(e.node.tag))
            ) {
              const s = r.get(e.node.tag),
                d = n.map((e) => e.node.tag),
                c = { parentTags: d, tagname: e.node.tag, args: e.node.args },
                i = t(s.Constructor, c, ...o.GetElements());
              (o = e.accumulator),
                Array.isArray(i)
                  ? i.forEach((e) => o.AppendNode(e))
                  : o.AppendNode(i),
                (a = !!s.skipFollowingNewline),
                (l = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                o.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + s.text + "]", !1),
                (o = t),
                (l = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              var c, i, p;
              if (1 == e.type) {
                const t = a ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                o.AppendText(t, l), (a = !1);
              } else if (2 == e.type) {
                const t = null == r ? void 0 : r.get(e.tag);
                if (t) {
                  const i = s();
                  if (void 0 !== i) {
                    const t = null == r ? void 0 : r.get(i.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === i.node.tag &&
                      d(n.pop(), i.node);
                  }
                  n.push({ accumulator: o, node: e, bWrapTextForCopying: l }),
                    (o = this.m_fnAccumulatorFactory(e)),
                    (a = !!t.skipInternalNewline),
                    (l =
                      null !== (c = t.allowWrapTextForCopying) &&
                      void 0 !== c &&
                      c);
                } else o.AppendText("[" + e.text + "]", 0 == n.length);
              } else if (3 == e.type) {
                for (
                  ;
                  s() &&
                  s().node.tag !== e.text &&
                  (null == r ? void 0 : r.get(s().node.tag)) &&
                  (null === (i = null == r ? void 0 : r.get(s().node.tag)) ||
                  void 0 === i
                    ? void 0
                    : i.autocloses);

                ) {
                  const e = n.pop();
                  d(e, e.node);
                }
                if (
                  (null === (p = s()) || void 0 === p ? void 0 : p.node.tag) ==
                  e.text
                ) {
                  const t = n.pop();
                  d(t, e);
                } else o.AppendText("[/" + e.text + "]", 0 == n.length);
              }
            });
            n.length > 0;

          ) {
            const e = n.pop(),
              t = e.accumulator;
            t.AppendText("[" + e.node.text + "]", !1),
              o.GetElements().forEach((e) => t.AppendNode(e)),
              (o = t);
          }
          return o.GetElements();
        }
      }
      function d(e, t, o = 0) {
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
                n = "",
                s = 0,
                r = 0;
              "=" == e[0] && (s = 2);
              let a = !1;
              for (r++; r < e.length; r++) {
                const l = e[r];
                let d = !0,
                  c = !1;
                switch (s) {
                  case 0:
                    if ("=" == l) return {};
                    if (" " == l) continue;
                    s = 1;
                    break;
                  case 1:
                    ("=" != l && " " != l) ||
                      a ||
                      (" " == l ? ((s = 0), (c = !0)) : (s = 2), (d = !1));
                    break;
                  case 2:
                    " " == l
                      ? ((s = 0), (d = !1), (c = !0))
                      : '"' == l
                        ? ((s = 4), (d = !1))
                        : (s = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == l && 4 != s && !a) ||
                      ('"' == l && 4 == s && !a)) &&
                      ((s = 0), (d = !1), (c = !0));
                }
                if (d)
                  if ("\\" != l || a)
                    if (((a = !1), 1 == s)) o += l;
                    else {
                      if (3 != s && 4 != s)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + s,
                        );
                      n += l;
                    }
                  else a = !0;
                c && ((t[o] = n), (o = ""), (n = ""));
              }
              0 != s && (t[o] = n);
              return t;
            })(o);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        const n = new a();
        return (n.type = o), n;
      }
      class c extends l {
        constructor(e, t, o) {
          super(e, null != t ? t : () => new r.LT()),
            (this.m_renderingLanguage =
              "string" == typeof o ? (0, n.jM)(o) : o);
        }
        UpdateOverrideLanguage(e) {
          this.m_renderingLanguage = e;
        }
        ParseBBCode(e, t, o = !1) {
          let n = 0;
          const r = this.Parse(
            e,
            (e, o, ...r) =>
              s.createElement(
                e,
                Object.assign(Object.assign({}, o), {
                  context: t,
                  language: this.m_renderingLanguage,
                  key: "bbnode_" + n++,
                }),
                ...r,
              ),
            o,
          );
          return r.length > 1
            ? s.createElement(s.Fragment, null, ...r)
            : 1 == r.length
              ? r[0]
              : null;
        }
      }
    },
  },
]);
