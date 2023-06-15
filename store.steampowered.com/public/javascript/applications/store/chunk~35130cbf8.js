/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5394],
  {
    24174: (e, t, o) => {
      o.d(t, {
        Z6: () => p,
        p8: () => f,
        NO: () => x,
        UC: () => m,
        A1: () => h,
        yp: () => u,
        iP: () => d,
      });
      var n = o(89526),
        r = o(46132),
        s = o(32765),
        a = o(4116);
      class l {
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
      class i {
        constructor(e, t) {
          (this.m_dictComponents = void 0),
            (this.m_dictComponents = e),
            (this.m_fnAccumulatorFactory = t);
        }
        Parse(e, t, o = !1) {
          const n = (function (e, t) {
            const o = [];
            let n = new l(),
              r = !1,
              s = !1,
              a = !1;
            for (let l = 0; l < e.length; l++) {
              let i = e[l];
              switch (n.type) {
                case 0:
                  "[" == i
                    ? ((n.type = 2), (s = !0))
                    : ((n.type = 1), "\\" == i && t ? (r = !r) : (n.text += i));
                  break;
                case 2:
                case 3:
                  if ("/" == i && s) (n.type = 3), (n.text = ""), (s = !1);
                  else if ("[" != i || r)
                    if ("]" != i || r)
                      "\\" == i && t
                        ? ((n.text += i), (r = !r), (s = !1))
                        : ((n.text += i), (r = !1), (s = !1));
                    else {
                      const e =
                          2 == n.type &&
                          "noparse" == n.text.toLocaleLowerCase(),
                        t =
                          3 == n.type &&
                          "noparse" == n.text.toLocaleLowerCase();
                      s || (a && !t)
                        ? (n.ConvertMalformedNodeToText(), (n.text += i))
                        : e
                        ? (a = !0)
                        : t && (a = !1),
                        (n = c(o, n)),
                        (s = !1);
                    }
                  else
                    n.ConvertMalformedNodeToText(), (n = c(o, n, 2)), (s = !0);
                  break;
                case 1:
                  "[" != i || r
                    ? "\\" == i && t
                      ? (r && (n.text += i), (r = !r))
                      : ((n.text += i), (r = !1))
                    : ((n = c(o, n, 2)), (s = !0));
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
          let o = this.m_fnAccumulatorFactory(void 0),
            n = [],
            r = function () {
              return n.length < 1 ? void 0 : n[n.length - 1];
            },
            s = this.m_dictComponents,
            a = !1,
            l = !0,
            i = function (e, r, i) {
              if (e && e.node.tag === r.text && s.get(e.node.tag)) {
                const r = s.get(e.node.tag),
                  i = n.map((e) => e.node.tag),
                  c = { parentTags: i, tagname: e.node.tag, args: e.node.args },
                  p = t(r.Constructor, c, ...o.GetElements());
                (o = e.accumulator),
                  o.AppendNode(p),
                  (a = r.skipFollowingNewline),
                  (l = e.bWrapTextForCopying);
              } else if (e) {
                let t = e.accumulator;
                t.AppendText("[" + e.node.text + "]", !1),
                  o.GetElements().forEach((e) => t.AppendNode(e)),
                  t.AppendText("[/" + r.text + "]", !1),
                  (o = t),
                  (l = e.bWrapTextForCopying);
              }
            };
          for (
            e.forEach((e, t) => {
              var c, p;
              if (1 == e.type) {
                const t = a ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                o.AppendText(t, l), (a = !1);
              } else if (2 == e.type) {
                const t = s.get(e.tag);
                if (t) {
                  const p = r();
                  if (void 0 !== p) {
                    const t = s.get(p.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === p.node.tag &&
                      i(n.pop(), p.node);
                  }
                  n.push({ accumulator: o, node: e, bWrapTextForCopying: l }),
                    (o = this.m_fnAccumulatorFactory(e)),
                    (a = t.skipInternalNewline),
                    (l =
                      null !== (c = t.allowWrapTextForCopying) &&
                      void 0 !== c &&
                      c);
                } else o.AppendText("[" + e.text + "]", 0 == n.length);
              } else if (3 == e.type) {
                for (
                  ;
                  r() &&
                  r().node.tag !== e.text &&
                  s.get(r().node.tag) &&
                  s.get(r().node.tag).autocloses;

                ) {
                  const e = n.pop();
                  i(e, e.node);
                }
                if (
                  (null === (p = r()) || void 0 === p ? void 0 : p.node.tag) ==
                  e.text
                ) {
                  const t = n.pop();
                  i(t, e);
                } else o.AppendText("[/" + e.text + "]", 0 == n.length);
              }
            });
            n.length > 0;

          ) {
            let e = n.pop(),
              t = e.accumulator;
            t.AppendText("[" + e.node.text + "]", !1),
              o.GetElements().forEach((e) => t.AppendNode(e)),
              (o = t);
          }
          return o.GetElements();
        }
      }
      function c(e, t, o = 0) {
        if (2 == t.type) {
          let e = t.text.indexOf("="),
            o = t.text.indexOf(" ");
          if ((-1 != o && (-1 == e || o < e) && (e = o), e > 0)) {
            t.tag = t.text.substr(0, e).toLocaleLowerCase();
            let o = t.text.substr(e);
            t.args = (function (e) {
              if (!e || e.length < 1) return {};
              let t = {},
                o = "",
                n = "",
                r = 0,
                s = 0;
              "=" == e[0] && (r = 2);
              let a = !1;
              for (s++; s < e.length; s++) {
                let l = e[s],
                  i = !0,
                  c = !1;
                switch (r) {
                  case 0:
                    if ("=" == l) return {};
                    if (" " == l) continue;
                    r = 1;
                    break;
                  case 1:
                    ("=" != l && " " != l) ||
                      a ||
                      (" " == l ? ((r = 0), (c = !0)) : (r = 2), (i = !1));
                    break;
                  case 2:
                    " " == l
                      ? ((r = 0), (i = !1), (c = !0))
                      : '"' == l
                      ? ((r = 4), (i = !1))
                      : (r = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == l && 4 != r && !a) ||
                      ('"' == l && 4 == r && !a)) &&
                      ((r = 0), (i = !1), (c = !0));
                }
                if (i)
                  if ("\\" != l || a)
                    if (((a = !1), 1 == r)) o += l;
                    else {
                      if (3 != r && 4 != r)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + r
                        );
                      n += l;
                    }
                  else a = !0;
                c && ((t[o] = n), (o = ""), (n = ""));
              }
              0 != r && (t[o] = n);
              return t;
            })(o);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        let n = new l();
        return (n.type = o), n;
      }
      class p extends i {
        constructor(e, t, o) {
          super(e, null != t ? t : () => new a.LT()),
            (this.m_renderingLanguage = o || (0, r.jM)(s.De.LANGUAGE));
        }
        UpdateOverrideLanguage(e) {
          this.m_renderingLanguage = e || (0, r.jM)(s.De.LANGUAGE);
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
                ...s
              ),
            o
          );
          return s.length > 1
            ? n.createElement(n.Fragment, null, ...s)
            : 1 == s.length
            ? s[0]
            : null;
        }
      }
      const u = [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "smalltext",
          "b",
          "u",
          "hr",
          "i",
          "img",
          "strike",
          "spoiler",
          "noparse",
          "url",
          "list",
          "olist",
          "quote",
          "pullquote",
          "code",
          "table",
          "tr",
          "td",
          "th",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "sticker",
          "price",
          "pricesavings",
          "trailer",
          "speaker",
          "doclink",
          "video",
          "vod",
          "youtubeorvideo",
          "giveawayeligible",
          "claimitem",
          "packagepurchaseable",
          "actiondialog",
          "uploadfilebutton",
          "docimg",
        ],
        d = [
          "h1",
          "h2",
          "h3",
          "b",
          "u",
          "i",
          "strike",
          "spoiler",
          "noparse",
          "url",
        ],
        g = [
          "img",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "video",
          "vod",
          "trailer",
          "youtubeorvideo",
          "docimg",
        ],
        h = (u.filter((e) => -1 == g.indexOf(e)), "{STEAM_CLAN_IMAGE}"),
        m = "{STEAM_CLAN_LOC_IMAGE}";
      function f(e, t = null, o = " ") {
        let n = null == t ? void 0 : t.join("|");
        n || (n = u.join("|") + "|\\*");
        let r = new RegExp("\\[(" + n + ")\\b[^\\]]*\\].*?\\[/\\1\\]", "gi");
        return e.replace(r, o);
      }
      function x(e, t = null, o = "") {
        let n = null == t ? void 0 : t.join("|");
        n || (n = u.join("|") + "|\\*");
        let r = "\\[\\/?(?:" + n + "){1,}.*?]";
        return e.replace(new RegExp(r, "gi"), o);
      }
    },
    4116: (e, t, o) => {
      o.d(t, { DX: () => a, LT: () => s, So: () => l });
      var n = o(89526),
        r = o(23801);
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
                    e
                  )
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
      class l extends a {
        constructor(e, t, o) {
          super(e),
            (this.m_nStartCursor = 1),
            (this.m_nStartCursor = void 0 !== t ? t : 1);
        }
        AppendText(e) {
          let t = e,
            o = [];
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
    4556: (e, t, o) => {
      o.d(t, { U: () => s, W: () => r });
      var n = o(32765);
      const r = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function s(e, t) {
        let o = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = r),
          44 == e.length && ((o = e.substr(-4)), (e = e.substr(0, 40)));
        let s = n.De.AVATAR_BASE_URL;
        return (
          s ||
            ((s = n.De.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (s += e.substr(0, 2) + "/")),
          (s += e),
          t && "small" != t && (s += "_" + t),
          (s += o),
          s
        );
      }
    },
  },
]);
