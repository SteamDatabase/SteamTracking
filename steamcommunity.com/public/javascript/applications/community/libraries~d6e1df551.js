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
      o.d(t, { Ec: () => c, lW: () => r, bU: () => l, AX: () => a });
      class n {
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
      class a {
        m_fnAccumulatorFactory;
        m_dictComponents = void 0;
        constructor(e, t) {
          (this.m_dictComponents = e), (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, o = !1) {
          const a = (function (e, t) {
            const o = [];
            let a = new n(),
              r = !1,
              s = !1,
              c = !1;
            for (let n = 0; n < e.length; n++) {
              const l = e[n];
              switch (a.type) {
                case 0:
                  "[" == l
                    ? ((a.type = 2), (s = !0))
                    : ((a.type = 1), "\\" == l && t ? (r = !r) : (a.text += l));
                  break;
                case 2:
                case 3:
                  if ("/" == l && s) (a.type = 3), (a.text = ""), (s = !1);
                  else if ("[" != l || r)
                    if ("]" != l || r)
                      "\\" == l && t
                        ? ((a.text += l), (r = !r), (s = !1))
                        : ((a.text += l), (r = !1), (s = !1));
                    else {
                      const e =
                          2 == a.type &&
                          "noparse" == a.text.toLocaleLowerCase(),
                        t =
                          3 == a.type &&
                          "noparse" == a.text.toLocaleLowerCase();
                      s || (c && !t)
                        ? (a.ConvertMalformedNodeToText(), (a.text += l))
                        : e
                          ? (c = !0)
                          : t && (c = !1),
                        (a = i(o, a)),
                        (s = !1);
                    }
                  else
                    a.ConvertMalformedNodeToText(), (a = i(o, a, 2)), (s = !0);
                  break;
                case 1:
                  "[" != l || r
                    ? "\\" == l && t
                      ? (r && (a.text += l), (r = !r))
                      : ((a.text += l), (r = !1))
                    : ((a = i(o, a, 2)), (s = !0));
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
            c = !0;
          const l = (e, a, l) => {
            if (e && e.node.tag === a.text && r?.get(e.node.tag)) {
              const a = r.get(e.node.tag),
                l = n.map((e) => e.node.tag),
                i = { parentTags: l, tagname: e.node.tag, args: e.node.args },
                p = t(a.Constructor, i, ...o.GetElements());
              (o = e.accumulator),
                Array.isArray(p)
                  ? p.forEach((e) => o.AppendNode(e))
                  : o.AppendNode(p),
                (s = !!a.skipFollowingNewline),
                (c = e.bWrapTextForCopying);
            } else if (e) {
              const t = e.accumulator;
              t.AppendText("[" + e.node.text + "]", !1),
                o.GetElements().forEach((e) => t.AppendNode(e)),
                t.AppendText("[/" + a.text + "]", !1),
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
                const t = r?.get(e.tag);
                if (t) {
                  const i = a();
                  if (void 0 !== i) {
                    const t = r?.get(i.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === i.node.tag &&
                      l(n.pop(), i.node);
                  }
                  n.push({ accumulator: o, node: e, bWrapTextForCopying: c }),
                    (o = this.m_fnAccumulatorFactory(e)),
                    (s = !!t.skipInternalNewline),
                    (c = t.allowWrapTextForCopying ?? !1);
                } else o.AppendText("[" + e.text + "]", 0 == n.length);
              } else if (3 == e.type) {
                for (
                  ;
                  a() &&
                  a().node.tag !== e.text &&
                  r?.get(a().node.tag) &&
                  r?.get(a().node.tag)?.autocloses;

                ) {
                  const e = n.pop();
                  l(e, e.node);
                }
                if (a()?.node.tag == e.text) {
                  const t = n.pop();
                  l(t, e);
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
        t?.[""] && (o += `=${s(t[""])}`);
        for (const e in t)
          "" !== e &&
            (o += ` ${((n = e), n.replace(/(\\| |\])/g, "\\$1"))}=${s(t[e])}`);
        var n;
        return (o += "]"), o;
      }
      function s(e) {
        return `"${e.replace(/(\\|"|\])/g, "\\$1")}"`;
      }
      function c(e) {
        return `[/${e}]`;
      }
      function l(e) {
        return e.replace(/(\\|\[)/g, "\\$1");
      }
      function i(e, t, o = 0) {
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
                const c = e[r];
                let l = !0,
                  i = !1;
                switch (a) {
                  case 0:
                    if ("=" == c) return {};
                    if (" " == c) continue;
                    a = 1;
                    break;
                  case 1:
                    ("=" != c && " " != c) ||
                      s ||
                      (" " == c ? ((a = 0), (i = !0)) : (a = 2), (l = !1));
                    break;
                  case 2:
                    " " == c
                      ? ((a = 0), (l = !1), (i = !0))
                      : '"' == c
                        ? ((a = 4), (l = !1))
                        : (a = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == c && 4 != a && !s) ||
                      ('"' == c && 4 == a && !s)) &&
                      ((a = 0), (l = !1), (i = !0));
                }
                if (l)
                  if ("\\" != c || s)
                    if (((s = !1), 1 == a)) o += c;
                    else {
                      if (3 != a && 4 != a)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + a,
                        );
                      n += c;
                    }
                  else s = !0;
                i && ((t[o] = n), (o = ""), (n = ""));
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
      function a(e, t, ...o) {
        n(!1, t, ...o);
      }
      o.d(t, { X: () => n, Z: () => a });
    },
  },
]);
