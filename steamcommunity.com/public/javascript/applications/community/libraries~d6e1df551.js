/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [823],
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
    20787: (e, t, o) => {
      "use strict";
      o.d(t, { Ec: () => l, lW: () => r, bU: () => i, AX: () => a });
      class n {
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
      class a {
        constructor(e, t) {
          (this.m_dictComponents = void 0),
            (this.m_dictComponents = e),
            (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, o = !1) {
          const a = (function (e, t) {
            const o = [];
            let a = new n(),
              r = !1,
              s = !1,
              l = !1;
            for (let n = 0; n < e.length; n++) {
              const i = e[n];
              switch (a.type) {
                case 0:
                  "[" == i
                    ? ((a.type = 2), (s = !0))
                    : ((a.type = 1), "\\" == i && t ? (r = !r) : (a.text += i));
                  break;
                case 2:
                case 3:
                  if ("/" == i && s) (a.type = 3), (a.text = ""), (s = !1);
                  else if ("[" != i || r)
                    if ("]" != i || r)
                      "\\" == i && t
                        ? ((a.text += i), (r = !r), (s = !1))
                        : ((a.text += i), (r = !1), (s = !1));
                    else {
                      const e =
                          2 == a.type &&
                          "noparse" == a.text.toLocaleLowerCase(),
                        t =
                          3 == a.type &&
                          "noparse" == a.text.toLocaleLowerCase();
                      s || (l && !t)
                        ? (a.ConvertMalformedNodeToText(), (a.text += i))
                        : e
                          ? (l = !0)
                          : t && (l = !1),
                        (a = c(o, a)),
                        (s = !1);
                    }
                  else
                    a.ConvertMalformedNodeToText(), (a = c(o, a, 2)), (s = !0);
                  break;
                case 1:
                  "[" != i || r
                    ? "\\" == i && t
                      ? (r && (a.text += i), (r = !r))
                      : ((a.text += i), (r = !1))
                    : ((a = c(o, a, 2)), (s = !0));
              }
            }
            0 != a.type &&
              ((2 != a.type && 3 != a.type) || a.ConvertMalformedNodeToText(),
              o.push(a));
            return o;
          })(e, o);
          return this.Parse_BuildElements(a, t);
        }
        Parse_BuildElements(e, t) {
          let o = this.m_fnAccumulatorFactory(void 0);
          const n = [],
            a = () => (n.length < 1 ? void 0 : n[n.length - 1]),
            r = this.m_dictComponents;
          let s = !1,
            l = !0;
          const i = (e, a, i) => {
            if (
              e &&
              e.node.tag === a.text &&
              (null == r ? void 0 : r.get(e.node.tag))
            ) {
              const a = r.get(e.node.tag),
                i = n.map((e) => e.node.tag),
                c = { parentTags: i, tagname: e.node.tag, args: e.node.args },
                d = t(a.Constructor, c, ...o.GetElements());
              (o = e.accumulator),
                Array.isArray(d)
                  ? d.forEach((e) => o.AppendNode(e))
                  : o.AppendNode(d),
                (s = !!a.skipFollowingNewline),
                (l = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                o.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + a.text + "]", !1),
                (o = t),
                (l = e.bWrapTextForCopying);
            }
          };
          for (
            e.forEach((e, t) => {
              var c, d, p;
              if (1 == e.type) {
                const t = s ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                o.AppendText(t, l), (s = !1);
              } else if (2 == e.type) {
                const t = null == r ? void 0 : r.get(e.tag);
                if (t) {
                  const d = a();
                  if (void 0 !== d) {
                    const t = null == r ? void 0 : r.get(d.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === d.node.tag &&
                      i(n.pop(), d.node);
                  }
                  n.push({ accumulator: o, node: e, bWrapTextForCopying: l }),
                    (o = this.m_fnAccumulatorFactory(e)),
                    (s = !!t.skipInternalNewline),
                    (l =
                      null !== (c = t.allowWrapTextForCopying) &&
                      void 0 !== c &&
                      c);
                } else o.AppendText("[" + e.text + "]", 0 == n.length);
              } else if (3 == e.type) {
                for (
                  ;
                  a() &&
                  a().node.tag !== e.text &&
                  (null == r ? void 0 : r.get(a().node.tag)) &&
                  (null === (d = null == r ? void 0 : r.get(a().node.tag)) ||
                  void 0 === d
                    ? void 0
                    : d.autocloses);

                ) {
                  const e = n.pop();
                  i(e, e.node);
                }
                if (
                  (null === (p = a()) || void 0 === p ? void 0 : p.node.tag) ==
                  e.text
                ) {
                  const t = n.pop();
                  i(t, e);
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
      function r(e, t) {
        let o = "[" + e;
        (null == t ? void 0 : t[""]) && (o += `=${s(t[""])}`);
        for (const e in t)
          "" !== e &&
            (o += ` ${((n = e), n.replace(/(\\| |\])/g, "\\$1"))}=${s(t[e])}`);
        var n;
        return (o += "]"), o;
      }
      function s(e) {
        return `"${e.replace(/(\\|"|\])/g, "\\$1")}"`;
      }
      function l(e) {
        return `[/${e}]`;
      }
      function i(e) {
        return e.replace(/(\\|\[)/g, "\\$1");
      }
      function c(e, t, o = 0) {
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
                a = 0,
                r = 0;
              "=" == e[0] && (a = 2);
              let s = !1;
              for (r++; r < e.length; r++) {
                const l = e[r];
                let i = !0,
                  c = !1;
                switch (a) {
                  case 0:
                    if ("=" == l) return {};
                    if (" " == l) continue;
                    a = 1;
                    break;
                  case 1:
                    ("=" != l && " " != l) ||
                      s ||
                      (" " == l ? ((a = 0), (c = !0)) : (a = 2), (i = !1));
                    break;
                  case 2:
                    " " == l
                      ? ((a = 0), (i = !1), (c = !0))
                      : '"' == l
                        ? ((a = 4), (i = !1))
                        : (a = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == l && 4 != a && !s) ||
                      ('"' == l && 4 == a && !s)) &&
                      ((a = 0), (i = !1), (c = !0));
                }
                if (i)
                  if ("\\" != l || s)
                    if (((s = !1), 1 == a)) o += l;
                    else {
                      if (3 != a && 4 != a)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + a,
                        );
                      n += l;
                    }
                  else s = !0;
                c && ((t[o] = n), (o = ""), (n = ""));
              }
              0 != a && (t[o] = n);
              return t;
            })(o);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        const a = new n();
        return (a.type = o), a;
      }
    },
    20020: (e, t, o) => {
      "use strict";
      function n(e, t, ...o) {
        console.assert
          ? 0 == o.length
            ? console.assert(!!e, t)
            : console.assert(!!e, t, ...o)
          : e || console.warn(t, ...o);
      }
      o.d(t, { X: () => n });
    },
  },
]);
