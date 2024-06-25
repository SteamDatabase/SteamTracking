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
      o.d(t, { DX: () => s, LT: () => a, So: () => c });
      var n = o(20020),
        r = o(47427);
      class a {
        reactNodes = [];
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
      class s {
        m_decoratedAccumulator;
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
      class c extends s {
        m_nStartCursor = 1;
        constructor(e, t, o) {
          super(e), (this.m_nStartCursor = void 0 !== t ? t : 1);
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
              o.push(r.createElement("br")),
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
      o.d(t, { Z: () => l });
      var n = o(77936),
        r = o(47427),
        a = o(20142);
      class s {
        type = 0;
        text = "";
        tag;
        args;
        ConvertMalformedNodeToText() {
          3 == this.type
            ? (this.text = "[/" + this.text)
            : 2 == this.type && (this.text = "[" + this.text),
            (this.type = 1);
        }
      }
      class c {
        m_fnAccumulatorFactory;
        m_dictComponents = void 0;
        constructor(e, t) {
          (this.m_dictComponents = e), (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, o = !1) {
          const n = (function (e, t) {
            const o = [];
            let n = new s(),
              r = !1,
              a = !1,
              c = !1;
            for (let s = 0; s < e.length; s++) {
              const l = e[s];
              switch (n.type) {
                case 0:
                  "[" == l
                    ? ((n.type = 2), (a = !0))
                    : ((n.type = 1), "\\" == l && t ? (r = !r) : (n.text += l));
                  break;
                case 2:
                case 3:
                  if ("/" == l && a) (n.type = 3), (n.text = ""), (a = !1);
                  else if ("[" != l || r)
                    if ("]" != l || r)
                      "\\" == l && t
                        ? ((n.text += l), (r = !r), (a = !1))
                        : ((n.text += l), (r = !1), (a = !1));
                    else {
                      const e =
                          2 == n.type &&
                          "noparse" == n.text.toLocaleLowerCase(),
                        t =
                          3 == n.type &&
                          "noparse" == n.text.toLocaleLowerCase();
                      a || (c && !t)
                        ? (n.ConvertMalformedNodeToText(), (n.text += l))
                        : e
                          ? (c = !0)
                          : t && (c = !1),
                        (n = d(o, n)),
                        (a = !1);
                    }
                  else
                    n.ConvertMalformedNodeToText(), (n = d(o, n, 2)), (a = !0);
                  break;
                case 1:
                  "[" != l || r
                    ? "\\" == l && t
                      ? (r && (n.text += l), (r = !r))
                      : ((n.text += l), (r = !1))
                    : ((n = d(o, n, 2)), (a = !0));
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
            r = () => (n.length < 1 ? void 0 : n[n.length - 1]),
            a = this.m_dictComponents;
          let s = !1,
            c = !0;
          const d = (e, r, d) => {
            if (e && e.node.tag === r.text && a?.get(e.node.tag)) {
              const r = a.get(e.node.tag),
                d = n.map((e) => e.node.tag),
                l = { parentTags: d, tagname: e.node.tag, args: e.node.args },
                p = t(r.Constructor, l, ...o.GetElements());
              (o = e.accumulator),
                Array.isArray(p)
                  ? p.forEach((e) => o.AppendNode(e))
                  : o.AppendNode(p),
                (s = !!r.skipFollowingNewline),
                (c = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                o.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + r.text + "]", !1),
                (o = t),
                (c = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              if (1 == e.type) {
                const t = s ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                o.AppendText(t, c), (s = !1);
              } else if (2 == e.type) {
                const t = a?.get(e.tag);
                if (t) {
                  const l = r();
                  if (void 0 !== l) {
                    const t = a?.get(l.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === l.node.tag &&
                      d(n.pop(), l.node);
                  }
                  n.push({ accumulator: o, node: e, bWrapTextForCopying: c }),
                    (o = this.m_fnAccumulatorFactory(e)),
                    (s = !!t.skipInternalNewline),
                    (c = t.allowWrapTextForCopying ?? !1);
                } else o.AppendText("[" + e.text + "]", 0 == n.length);
              } else if (3 == e.type) {
                for (
                  ;
                  r() &&
                  r().node.tag !== e.text &&
                  a?.get(r().node.tag) &&
                  a?.get(r().node.tag)?.autocloses;

                ) {
                  const e = n.pop();
                  d(e, e.node);
                }
                if (r()?.node.tag == e.text) {
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
                r = 0,
                a = 0;
              "=" == e[0] && (r = 2);
              let s = !1;
              for (a++; a < e.length; a++) {
                const c = e[a];
                let d = !0,
                  l = !1;
                switch (r) {
                  case 0:
                    if ("=" == c) return {};
                    if (" " == c) continue;
                    r = 1;
                    break;
                  case 1:
                    ("=" != c && " " != c) ||
                      s ||
                      (" " == c ? ((r = 0), (l = !0)) : (r = 2), (d = !1));
                    break;
                  case 2:
                    " " == c
                      ? ((r = 0), (d = !1), (l = !0))
                      : '"' == c
                        ? ((r = 4), (d = !1))
                        : (r = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == c && 4 != r && !s) ||
                      ('"' == c && 4 == r && !s)) &&
                      ((r = 0), (d = !1), (l = !0));
                }
                if (d)
                  if ("\\" != c || s)
                    if (((s = !1), 1 == r)) o += c;
                    else {
                      if (3 != r && 4 != r)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + r,
                        );
                      n += c;
                    }
                  else s = !0;
                l && ((t[o] = n), (o = ""), (n = ""));
              }
              0 != r && (t[o] = n);
              return t;
            })(o);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        const n = new s();
        return (n.type = o), n;
      }
      class l extends c {
        m_renderingLanguage;
        constructor(e, t, o) {
          super(e, t ?? (() => new a.LT())),
            (this.m_renderingLanguage =
              "string" == typeof o ? (0, n.jM)(o) : o);
        }
        UpdateOverrideLanguage(e) {
          this.m_renderingLanguage = e;
        }
        ParseBBCode(e, t, o = !1) {
          let n = 0;
          const a = this.Parse(
            e,
            (e, o, ...a) =>
              r.createElement(
                e,
                {
                  ...o,
                  context: t,
                  language: this.m_renderingLanguage,
                  key: "bbnode_" + n++,
                },
                ...a,
              ),
            o,
          );
          return a.length > 1
            ? r.createElement(r.Fragment, null, ...a)
            : 1 == a.length
              ? a[0]
              : null;
        }
      }
    },
  },
]);
