/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1338],
  {
    49727: (e, t, r) => {
      r.d(t, {
        A1: () => d,
        NO: () => B,
        UC: () => m,
        Z6: () => h,
        iP: () => l,
        p8: () => _,
        pA: () => c,
        yp: () => o,
      });
      var i = r(67294),
        s = r(26149),
        a = r(90666),
        n = r(99663);
      const o = [
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
        ],
        l = [
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
        u = [
          "img",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "video",
          "vod",
          "trailer",
          "youtubeorvideo",
        ],
        c = o.filter((e) => -1 == u.indexOf(e)),
        d = "{STEAM_CLAN_IMAGE}",
        m = "{STEAM_CLAN_LOC_IMAGE}";
      function _(e, t = null, r = " ") {
        let i = null == t ? void 0 : t.join("|");
        i || (i = o.join("|") + "|\\*");
        let s = new RegExp("\\[(" + i + ")\\b[^\\]]*\\].*?\\[/\\1\\]", "gi");
        return e.replace(s, r);
      }
      function B(e, t = null, r = "") {
        let i = null == t ? void 0 : t.join("|");
        i || (i = o.join("|") + "|\\*");
        let s = "\\[\\/?(?:" + i + "){1,}.*?]";
        return e.replace(new RegExp(s, "gi"), r);
      }
      function g(e, t, r = 0) {
        if (2 == t.type) {
          let e = t.text.indexOf("="),
            r = t.text.indexOf(" ");
          if ((-1 != r && (-1 == e || r < e) && (e = r), e > 0)) {
            t.tag = t.text.substr(0, e).toLocaleLowerCase();
            let r = t.text.substr(e);
            t.args = (function (e) {
              if (!e || e.length < 1) return {};
              let t = {},
                r = "",
                i = "",
                s = 0,
                a = 0;
              "=" == e[0] && (s = 2);
              let n = !1;
              for (a++; a < e.length; a++) {
                let o = e[a],
                  l = !0,
                  u = !1;
                switch (s) {
                  case 0:
                    if ("=" == o) return {};
                    if (" " == o) continue;
                    s = 1;
                    break;
                  case 1:
                    ("=" != o && " " != o) ||
                      n ||
                      (" " == o ? ((s = 0), (u = !0)) : (s = 2), (l = !1));
                    break;
                  case 2:
                    " " == o
                      ? ((s = 0), (l = !1), (u = !0))
                      : '"' == o
                      ? ((s = 4), (l = !1))
                      : (s = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == o && 4 != s && !n) ||
                      ('"' == o && 4 == s && !n)) &&
                      ((s = 0), (l = !1), (u = !0));
                }
                if (l)
                  if ("\\" != o || n)
                    if (((n = !1), 1 == s)) r += o;
                    else {
                      if (3 != s && 4 != s)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + s
                        );
                      i += o;
                    }
                  else n = !0;
                u && ((t[r] = i), (r = ""), (i = ""));
              }
              0 != s && (t[r] = i);
              return t;
            })(r);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        let i = new p();
        return (i.type = r), i;
      }
      class h {
        constructor(e, t = () => new n.LT(), r) {
          (this.m_dictComponents = void 0),
            (this.m_dictComponents = e),
            (this.m_fnAccumulatorFactory = t),
            (this.m_renderingLanguage = r || (0, s.jM)(a.De.LANGUAGE));
        }
        UpdateOverrideLanguage(e) {
          this.m_renderingLanguage = e || (0, s.jM)(a.De.LANGUAGE);
        }
        ParseBBCode(e, t, r = !1) {
          const i = (function (e, t) {
            const r = [];
            let i = new p(),
              s = !1,
              a = !1,
              n = !1;
            for (let o = 0; o < e.length; o++) {
              let l = e[o];
              switch (i.type) {
                case 0:
                  "[" == l
                    ? ((i.type = 2), (a = !0))
                    : ((i.type = 1), "\\" == l && t ? (s = !s) : (i.text += l));
                  break;
                case 2:
                case 3:
                  if ("/" == l && a) (i.type = 3), (i.text = ""), (a = !1);
                  else if ("[" != l || s)
                    if ("]" != l || s)
                      "\\" == l && t
                        ? ((i.text += l), (s = !s), (a = !1))
                        : ((i.text += l), (s = !1), (a = !1));
                    else {
                      const e =
                          2 == i.type &&
                          "noparse" == i.text.toLocaleLowerCase(),
                        t =
                          3 == i.type &&
                          "noparse" == i.text.toLocaleLowerCase();
                      a || (n && !t)
                        ? (i.ConvertMalformedNodeToText(), (i.text += l))
                        : e
                        ? (n = !0)
                        : t && (n = !1),
                        (i = g(r, i)),
                        (a = !1);
                    }
                  else
                    i.ConvertMalformedNodeToText(), (i = g(r, i, 2)), (a = !0);
                  break;
                case 1:
                  "[" != l || s
                    ? "\\" == l && t
                      ? (s && (i.text += l), (s = !s))
                      : (s && ((i.text += "\\"), (s = !1)), (i.text += l))
                    : ((i = g(r, i, 2)), (a = !0));
              }
            }
            return (
              0 != i.type &&
                ((2 != i.type && 3 != i.type) || i.ConvertMalformedNodeToText(),
                r.push(i)),
              r
            );
          })(e, r);
          return this.Parse_BuildReactComponents(i, t);
        }
        Parse_BuildReactComponents(e, t) {
          let r = this.m_fnAccumulatorFactory(void 0),
            s = [],
            a = function () {
              return s.length < 1 ? void 0 : s[s.length - 1];
            },
            n = this.m_dictComponents,
            o = this.m_renderingLanguage,
            l = !1,
            u = !0,
            c = function (e, a, c) {
              if (e && e.node.tag === a.text && n.get(e.node.tag)) {
                const a = n.get(e.node.tag),
                  d = s.map((e) => e.node.tag),
                  m = {
                    context: t,
                    parentTags: d,
                    tagname: e.node.tag,
                    args: e.node.args,
                    language: o,
                    key: `${e.node.tag}_${c}`,
                  },
                  _ = i.createElement(a.Constructor, m, ...r.GetElements());
                (r = e.accumulator),
                  r.AppendNode(_),
                  (l = a.skipFollowingNewline),
                  (u = e.bWrapTextForCopying);
              } else if (e) {
                let t = e.accumulator;
                t.AppendText("[" + e.node.text + "]", !1),
                  r.GetElements().forEach((e) => t.AppendNode(e)),
                  t.AppendText("[/" + a.text + "]", !1),
                  (r = t),
                  (u = e.bWrapTextForCopying);
              }
            };
          for (
            e.forEach((e, t) => {
              var i, o;
              if (1 == e.type) {
                const t = l ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                r.AppendText(t, u), (l = !1);
              } else if (2 == e.type) {
                const o = n.get(e.tag);
                if (o) {
                  const d = a();
                  if (void 0 !== d) {
                    const r = n.get(d.node.tag);
                    r &&
                      r.autocloses &&
                      e.tag === d.node.tag &&
                      c(s.pop(), d.node, t);
                  }
                  s.push({ accumulator: r, node: e, bWrapTextForCopying: u }),
                    (r = this.m_fnAccumulatorFactory(e)),
                    (l = o.skipInternalNewline),
                    (u =
                      null !== (i = o.allowWrapTextForCopying) &&
                      void 0 !== i &&
                      i);
                } else r.AppendText("[" + e.text + "]", 0 == s.length);
              } else if (3 == e.type) {
                for (
                  ;
                  a() &&
                  a().node.tag !== e.text &&
                  n.get(a().node.tag) &&
                  n.get(a().node.tag).autocloses;

                ) {
                  const e = s.pop();
                  c(e, e.node, t);
                }
                if (
                  (null === (o = a()) || void 0 === o ? void 0 : o.node.tag) ==
                  e.text
                ) {
                  const r = s.pop();
                  c(r, e, t);
                } else r.AppendText("[/" + e.text + "]", 0 == s.length);
              }
            });
            s.length > 0;

          ) {
            let e = s.pop(),
              t = e.accumulator;
            t.AppendText("[" + e.node.text + "]", !1),
              r.GetElements().forEach((e) => t.AppendNode(e)),
              (r = t);
          }
          let d = r.GetElements();
          return d.length > 1
            ? i.createElement(i.Fragment, null, ...d)
            : 1 == d.length
            ? d[0]
            : null;
        }
      }
      class p {
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
    },
    99663: (e, t, r) => {
      r.d(t, { DX: () => n, LT: () => a, So: () => o });
      var i = r(67294),
        s = r(77520);
      r(49727);
      class a {
        constructor() {
          this.reactNodes = [];
        }
        AppendText(e, t = !1) {
          e.length &&
            (t
              ? this.reactNodes.push(
                  i.createElement(
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
      class n {
        constructor(e) {
          (0, s.X)(e, "decorated accumulator cannot be null"),
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
      class o extends n {
        constructor(e, t, r) {
          super(e),
            (this.m_nStartCursor = 1),
            (this.m_nStartCursor = void 0 !== t ? t : 1);
        }
        AppendText(e) {
          let t = e,
            r = [];
          for (
            let e = t.indexOf("\n", this.m_nStartCursor);
            -1 !== e;
            e = t.indexOf("\n")
          )
            r.push(t.substr(0, e)),
              r.push(i.createElement("br")),
              (t = t.substr(e + 1));
          t.length && r.push(t),
            r.forEach((e) => {
              super.AppendNode(e);
            });
        }
      }
    },
    5194: (e, t, r) => {
      r.d(t, { AY: () => l, KQ: () => o, _v: () => n, q8: () => u });
      var i = r(33019),
        s = r(40110);
      const a = i.Message;
      class n extends a {
        constructor(e = null) {
          super(),
            n.prototype.sale_filter || s.aR(n.M()),
            a.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            n.sm_m ||
              (n.sm_m = {
                proto: n,
                fields: {
                  sale_filter: { n: 1, c: o },
                  content_hub_filter: { n: 2, c: l },
                  store_filters: { n: 3, c, r: !0, q: !0 },
                },
              }),
            n.sm_m
          );
        }
        static MBF() {
          return n.sm_mbf || (n.sm_mbf = s.Bh(n.M())), n.sm_mbf;
        }
        toObject(e = !1) {
          return n.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(n.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(n.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new n();
          return n.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(n.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(n.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return n.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter";
        }
      }
      class o extends a {
        constructor(e = null) {
          super(),
            o.prototype.sale_tagid || s.aR(o.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  sale_tagid: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = s.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_SalePageFilter";
        }
      }
      class l extends a {
        constructor(e = null) {
          super(),
            l.prototype.hub_type || s.aR(l.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  hub_type: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  hub_category: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  hub_tagid: {
                    n: 3,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  discount_filter: {
                    n: 4,
                    br: s.FE.readEnum,
                    bw: s.Xc.writeEnum,
                  },
                  optin: { n: 5, c: u },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = s.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_ContentHubFilter";
        }
      }
      class u extends a {
        constructor(e = null) {
          super(),
            u.prototype.name || s.aR(u.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  name: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  optin_tagid: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  prune_tagid: {
                    n: 3,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  optin_only: { n: 4, br: s.FE.readBool, bw: s.Xc.writeBool },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_ContentHubFilter_OptInInfo";
        }
      }
      class c extends a {
        constructor(e = null) {
          super(),
            c.prototype.filter_json || s.aR(c.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  filter_json: {
                    n: 1,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  cache_key: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_StoreFilter";
        }
      }
    },
    13328: (e, t, r) => {
      var i = r(33019);
      r(40110);
      i.Message;
    },
    990: (e, t, r) => {
      r.d(t, {
        Qn: () => I,
        VJ: () => P,
        VL: () => o,
        WJ: () => T,
        cR: () => W,
        eK: () => C,
        oY: () => E,
      });
      var i = r(33019),
        s = r(40110);
      r(13328), r(21205), r(5194);
      const a = i.Message;
      class n extends a {
        constructor(e = null) {
          super(),
            n.prototype.type || s.aR(n.M()),
            a.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            n.sm_m ||
              (n.sm_m = {
                proto: n,
                fields: {
                  type: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  rating: { n: 2, br: s.FE.readString, bw: s.Xc.writeString },
                  descriptors: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: s.FE.readString,
                    bw: s.Xc.writeRepeatedString,
                  },
                  interactive_elements: {
                    n: 4,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  required_age: {
                    n: 10,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  use_age_gate: {
                    n: 11,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  image_url: {
                    n: 20,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  image_target: {
                    n: 21,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            n.sm_m
          );
        }
        static MBF() {
          return n.sm_mbf || (n.sm_mbf = s.Bh(n.M())), n.sm_mbf;
        }
        toObject(e = !1) {
          return n.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(n.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(n.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new n();
          return n.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(n.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(n.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return n.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreGameRating";
        }
      }
      class o extends a {
        constructor(e = null) {
          super(),
            o.prototype.item_type || s.aR(o.M()),
            a.initialize(
              this,
              e,
              0,
              -1,
              [11, 12, 20, 21, 25, 41, 42, 52],
              null
            );
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  item_type: { n: 1, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  id: { n: 2, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  success: { n: 3, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  visible: { n: 4, br: s.FE.readBool, bw: s.Xc.writeBool },
                  unvailable_for_country_restriction: {
                    n: 5,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  name: { n: 6, br: s.FE.readString, bw: s.Xc.writeString },
                  store_url_path: {
                    n: 7,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  appid: { n: 9, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  type: { n: 10, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  included_types: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: s.FE.readEnum,
                    pbr: s.FE.readPackedEnum,
                    bw: s.Xc.writeRepeatedEnum,
                  },
                  included_appids: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                  is_free: { n: 13, br: s.FE.readBool, bw: s.Xc.writeBool },
                  is_early_access: {
                    n: 14,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  related_items: { n: 15, c: l },
                  content_descriptorids: {
                    n: 20,
                    r: !0,
                    q: !0,
                    br: s.FE.readEnum,
                    pbr: s.FE.readPackedEnum,
                    bw: s.Xc.writeRepeatedEnum,
                  },
                  tagids: {
                    n: 21,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                  categories: { n: 22, c: u },
                  reviews: { n: 23, c },
                  basic_info: { n: 24, c: m },
                  tags: { n: 25, c: B, r: !0, q: !0 },
                  assets: { n: 30, c: g },
                  release: { n: 31, c: h },
                  platforms: { n: 32, c: p },
                  game_rating: { n: 33, c: n },
                  best_purchase_option: { n: 40, c: y },
                  purchase_options: { n: 41, c: y, r: !0, q: !0 },
                  accessories: { n: 42, c: y, r: !0, q: !0 },
                  screenshots: { n: 50, c: w },
                  trailers: { n: 51, c: M },
                  supported_languages: { n: 52, c: S, r: !0, q: !0 },
                  store_url_path_override: {
                    n: 53,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  free_weekend: { n: 54, c: z },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = s.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem";
        }
      }
      class l extends a {
        constructor(e = null) {
          super(),
            l.prototype.parent_appid || s.aR(l.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  parent_appid: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = s.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_RelatedItems";
        }
      }
      class u extends a {
        constructor(e = null) {
          super(),
            u.prototype.supported_player_categoryids || s.aR(u.M()),
            a.initialize(this, e, 0, -1, [2, 3, 4], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  supported_player_categoryids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                  feature_categoryids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                  controller_categoryids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Categories";
        }
      }
      class c extends a {
        constructor(e = null) {
          super(),
            c.prototype.summary_filtered || s.aR(c.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  summary_filtered: { n: 1, c: d },
                  summary_unfiltered: { n: 2, c: d },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Reviews";
        }
      }
      class d extends a {
        constructor(e = null) {
          super(),
            d.prototype.review_count || s.aR(d.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  review_count: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  percent_positive: {
                    n: 2,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  review_score: { n: 3, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  review_score_label: {
                    n: 4,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = s.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Reviews_StoreReviewSummary";
        }
      }
      class m extends a {
        constructor(e = null) {
          super(),
            m.prototype.short_description || s.aR(m.M()),
            a.initialize(this, e, 0, -1, [2, 3, 4], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  short_description: {
                    n: 1,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  publishers: { n: 2, c: _, r: !0, q: !0 },
                  developers: { n: 3, c: _, r: !0, q: !0 },
                  franchises: { n: 4, c: _, r: !0, q: !0 },
                  capsule_headline: {
                    n: 5,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = s.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_BasicInfo";
        }
      }
      class _ extends a {
        constructor(e = null) {
          super(),
            _.prototype.name || s.aR(_.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  name: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  creator_clan_account_id: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = s.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_BasicInfo_CreatorHomeLink";
        }
      }
      class B extends a {
        constructor(e = null) {
          super(),
            B.prototype.tagid || s.aR(B.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  tagid: { n: 1, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  weight: { n: 2, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = s.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Tag";
        }
      }
      class g extends a {
        constructor(e = null) {
          super(),
            g.prototype.asset_url_format || s.aR(g.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  asset_url_format: {
                    n: 1,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  main_capsule: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  small_capsule: {
                    n: 3,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  header: { n: 4, br: s.FE.readString, bw: s.Xc.writeString },
                  package_header: {
                    n: 5,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  page_background: {
                    n: 6,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  hero_capsule: {
                    n: 7,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  hero_capsule_2x: {
                    n: 8,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  library_capsule: {
                    n: 9,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  library_capsule_2x: {
                    n: 10,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  library_hero: {
                    n: 11,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  library_hero_2x: {
                    n: 12,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  community_icon: {
                    n: 13,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = s.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Assets";
        }
      }
      class h extends a {
        constructor(e = null) {
          super(),
            h.prototype.steam_release_date || s.aR(h.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  steam_release_date: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  original_release_date: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  original_steam_release_date: {
                    n: 3,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  is_coming_soon: {
                    n: 4,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  is_preload: { n: 5, br: s.FE.readBool, bw: s.Xc.writeBool },
                  custom_release_date_message: {
                    n: 6,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  is_abridged_release_date: {
                    n: 7,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  coming_soon_display: {
                    n: 8,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  is_early_access: {
                    n: 10,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  mac_release_date: {
                    n: 20,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  linux_release_date: {
                    n: 21,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = s.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_ReleaseInfo";
        }
      }
      class p extends a {
        constructor(e = null) {
          super(),
            p.prototype.windows || s.aR(p.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  windows: { n: 1, br: s.FE.readBool, bw: s.Xc.writeBool },
                  mac: { n: 2, br: s.FE.readBool, bw: s.Xc.writeBool },
                  steamos_linux: {
                    n: 3,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  vr_support: { n: 10, c: b },
                  steam_deck_compat_category: {
                    n: 11,
                    br: s.FE.readEnum,
                    bw: s.Xc.writeEnum,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = s.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Platforms";
        }
      }
      class b extends a {
        constructor(e = null) {
          super(),
            b.prototype.vrhmd || s.aR(b.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  vrhmd: { n: 1, br: s.FE.readBool, bw: s.Xc.writeBool },
                  vrhmd_only: { n: 2, br: s.FE.readBool, bw: s.Xc.writeBool },
                  htc_vive: { n: 40, br: s.FE.readBool, bw: s.Xc.writeBool },
                  oculus_rift: { n: 41, br: s.FE.readBool, bw: s.Xc.writeBool },
                  windows_mr: { n: 42, br: s.FE.readBool, bw: s.Xc.writeBool },
                  valve_index: { n: 43, br: s.FE.readBool, bw: s.Xc.writeBool },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = s.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Platforms_VRSupport";
        }
      }
      class y extends a {
        constructor(e = null) {
          super(),
            y.prototype.packageid || s.aR(y.M()),
            a.initialize(this, e, 0, -1, [20, 21, 22], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  packageid: { n: 1, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  bundleid: { n: 2, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  purchase_option_name: {
                    n: 3,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  final_price_in_cents: {
                    n: 5,
                    br: s.FE.readInt64String,
                    bw: s.Xc.writeInt64String,
                  },
                  original_price_in_cents: {
                    n: 6,
                    br: s.FE.readInt64String,
                    bw: s.Xc.writeInt64String,
                  },
                  user_final_price_in_cents: {
                    n: 7,
                    br: s.FE.readInt64String,
                    bw: s.Xc.writeInt64String,
                  },
                  formatted_final_price: {
                    n: 8,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  formatted_original_price: {
                    n: 9,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  discount_pct: {
                    n: 10,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  user_discount_pct: {
                    n: 11,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  bundle_discount_pct: {
                    n: 12,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  active_discounts: { n: 20, c: f, r: !0, q: !0 },
                  user_active_discounts: { n: 21, c: f, r: !0, q: !0 },
                  inactive_discounts: { n: 22, c: f, r: !0, q: !0 },
                  user_can_purchase: {
                    n: 30,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  user_can_purchase_as_gift: {
                    n: 31,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  is_commercial_license: {
                    n: 40,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  should_suppress_discount_pct: {
                    n: 41,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = s.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_PurchaseOption";
        }
      }
      class f extends a {
        constructor(e = null) {
          super(),
            f.prototype.discount_amount || s.aR(f.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  discount_amount: {
                    n: 1,
                    br: s.FE.readInt64String,
                    bw: s.Xc.writeInt64String,
                  },
                  discount_description: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  discount_end_date: {
                    n: 3,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = s.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_PurchaseOption_Discount";
        }
      }
      class w extends a {
        constructor(e = null) {
          super(),
            w.prototype.all_ages_screenshots || s.aR(w.M()),
            a.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  all_ages_screenshots: { n: 2, c: R, r: !0, q: !0 },
                  mature_content_screenshots: { n: 3, c: R, r: !0, q: !0 },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = s.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Screenshots";
        }
      }
      class R extends a {
        constructor(e = null) {
          super(),
            R.prototype.filename || s.aR(R.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  filename: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  ordinal: { n: 2, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = s.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Screenshots_Screenshot";
        }
      }
      class M extends a {
        constructor(e = null) {
          super(),
            M.prototype.highlights || s.aR(M.M()),
            a.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  highlights: { n: 1, c: v, r: !0, q: !0 },
                  other_trailers: { n: 2, c: v, r: !0, q: !0 },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = s.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers";
        }
      }
      class F extends a {
        constructor(e = null) {
          super(),
            F.prototype.filename || s.aR(F.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  filename: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  type: { n: 2, br: s.FE.readString, bw: s.Xc.writeString },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = s.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers_VideoSource";
        }
      }
      class v extends a {
        constructor(e = null) {
          super(),
            v.prototype.trailer_name || s.aR(v.M()),
            a.initialize(this, e, 0, -1, [3, 4, 5], null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  trailer_name: {
                    n: 1,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  trailer_url_format: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  trailer_480p: { n: 3, c: F, r: !0, q: !0 },
                  trailer_max: { n: 4, c: F, r: !0, q: !0 },
                  microtrailer: { n: 5, c: F, r: !0, q: !0 },
                  screenshot_medium: {
                    n: 10,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  screenshot_full: {
                    n: 11,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  trailer_base_id: {
                    n: 12,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = s.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers_Trailer";
        }
      }
      class S extends a {
        constructor(e = null) {
          super(),
            S.prototype.elanguage || s.aR(S.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  elanguage: { n: 1, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  supported: { n: 2, br: s.FE.readBool, bw: s.Xc.writeBool },
                  full_audio: { n: 3, br: s.FE.readBool, bw: s.Xc.writeBool },
                  subtitles: { n: 4, br: s.FE.readBool, bw: s.Xc.writeBool },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = s.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_SupportedLanguage";
        }
      }
      class z extends a {
        constructor(e = null) {
          super(),
            z.prototype.start_time || s.aR(z.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  start_time: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  end_time: { n: 2, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  text: { n: 3, br: s.FE.readString, bw: s.Xc.writeString },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = s.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_FreeWeekend";
        }
      }
      class I extends a {
        constructor(e = null) {
          super(),
            I.prototype.include_assets || s.aR(I.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  include_assets: {
                    n: 1,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_release: {
                    n: 2,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_platforms: {
                    n: 3,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_all_purchase_options: {
                    n: 4,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_screenshots: {
                    n: 5,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_trailers: {
                    n: 6,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_ratings: {
                    n: 7,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_tag_count: {
                    n: 8,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  include_reviews: {
                    n: 9,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_basic_info: {
                    n: 10,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_supported_languages: {
                    n: 11,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = s.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreBrowseItemDataRequest";
        }
      }
      class T extends a {
        constructor(e = null) {
          super(),
            T.prototype.language || s.aR(T.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  language: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  elanguage: { n: 2, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  country_code: {
                    n: 3,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  steam_realm: {
                    n: 4,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = s.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreBrowseContext";
        }
      }
      class E extends a {
        constructor(e = null) {
          super(),
            E.prototype.appid || s.aR(E.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  appid: { n: 1, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  packageid: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  bundleid: { n: 3, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = s.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItemID";
        }
      }
      class C extends a {
        constructor(e = null) {
          super(),
            C.prototype.ids || s.aR(C.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  ids: { n: 1, c: E, r: !0, q: !0 },
                  context: { n: 2, c: T },
                  data_request: { n: 3, c: I },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = s.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(C.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetItems_Request";
        }
      }
      class W extends a {
        constructor(e = null) {
          super(),
            W.prototype.store_items || s.aR(W.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: { store_items: { n: 1, c: o, r: !0, q: !0 } },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = s.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetItems_Response";
        }
      }
      class O extends a {
        constructor(e = null) {
          super(),
            O.prototype.categories || s.aR(O.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: { categories: { n: 1, c: j, r: !0, q: !0 } },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = s.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetStoreCategories_Response";
        }
      }
      class j extends a {
        constructor(e = null) {
          super(),
            j.prototype.categoryid || s.aR(j.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  categoryid: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  type: { n: 2, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  internal_name: {
                    n: 3,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  display_name: {
                    n: 4,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  image_url: {
                    n: 5,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  show_in_search: {
                    n: 6,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = s.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetStoreCategories_Response_Category";
        }
      }
      class A extends a {
        constructor(e = null) {
          super(),
            A.prototype.dlc_data || s.aR(A.M()),
            a.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  dlc_data: { n: 1, c: D, r: !0, q: !0 },
                  playtime: { n: 2, c: k, r: !0, q: !0 },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = s.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(A.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForApps_Response";
        }
      }
      class D extends a {
        constructor(e = null) {
          super(),
            D.prototype.appid || s.aR(D.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  appid: { n: 1, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  parentappid: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  release_date: {
                    n: 3,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  coming_soon: { n: 4, br: s.FE.readBool, bw: s.Xc.writeBool },
                  price: {
                    n: 5,
                    br: s.FE.readInt64String,
                    bw: s.Xc.writeInt64String,
                  },
                  discount: { n: 6, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  free: { n: 7, br: s.FE.readBool, bw: s.Xc.writeBool },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = s.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(D.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForApps_Response_DLCData";
        }
      }
      class k extends a {
        constructor(e = null) {
          super(),
            k.prototype.appid || s.aR(k.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  appid: { n: 1, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  playtime: { n: 2, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  last_played: {
                    n: 3,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = s.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(k.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForApps_Response_PlaytimeForApp";
        }
      }
      class U extends a {
        constructor(e = null) {
          super(),
            U.prototype.dlc_lists || s.aR(U.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: { dlc_lists: { n: 1, c: G, r: !0, q: !0 } },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = s.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForAppsSolr_Response";
        }
      }
      class G extends a {
        constructor(e = null) {
          super(),
            G.prototype.parent_appid || s.aR(G.M()),
            a.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  parent_appid: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  dlc_appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = s.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(G.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForAppsSolr_Response_DLCList";
        }
      }
      var P;
      !(function (e) {
        (e.GetItems = function (e, t) {
          return e.SendMsg("StoreBrowse.GetItems#1", t, W, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetStoreCategories = function (e, t) {
            return e.SendMsg("StoreBrowse.GetStoreCategories#1", t, O, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetDLCForApps = function (e, t) {
            return e.SendMsg("StoreBrowse.GetDLCForApps#1", t, A, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetDLCForAppsSolr = function (e, t) {
            return e.SendMsg("StoreBrowse.GetDLCForAppsSolr#1", t, U, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          });
      })(P || (P = {}));
    },
    87931: (e, t, r) => {
      r.d(t, { $2: () => d, Ax: () => p, e8: () => B });
      var i = r(33019),
        s = r(40110),
        a = (r(13328), r(5194)),
        n = r(990);
      const o = i.Message;
      class l extends o {
        constructor(e = null) {
          super(),
            l.prototype.released_only || s.aR(l.M()),
            o.initialize(this, e, 0, -1, [10, 11, 15, 16, 45], null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  released_only: {
                    n: 1,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  coming_soon_only: {
                    n: 2,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  type_filters: { n: 3, c: u },
                  tagids_must_match: { n: 10, c, r: !0, q: !0 },
                  tagids_exclude: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: s.FE.readInt32,
                    pbr: s.FE.readPackedInt32,
                    bw: s.Xc.writeRepeatedInt32,
                  },
                  content_descriptors_must_match: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: s.FE.readEnum,
                    pbr: s.FE.readPackedEnum,
                    bw: s.Xc.writeRepeatedEnum,
                  },
                  content_descriptors_excluded: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: s.FE.readEnum,
                    pbr: s.FE.readPackedEnum,
                    bw: s.Xc.writeRepeatedEnum,
                  },
                  regional_top_n_sellers: {
                    n: 40,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  global_top_n_sellers: {
                    n: 41,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  regional_long_term_top_n_sellers: {
                    n: 42,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  global_long_term_top_n_sellers: {
                    n: 43,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  store_page_filter: { n: 44, c: a._v },
                  parent_appids: {
                    n: 45,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = s.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters";
        }
      }
      class u extends o {
        constructor(e = null) {
          super(),
            u.prototype.include_apps || s.aR(u.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  include_apps: { n: 1, br: s.FE.readBool, bw: s.Xc.writeBool },
                  include_packages: {
                    n: 2,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_bundles: {
                    n: 3,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_games: {
                    n: 10,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_demos: {
                    n: 11,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_mods: {
                    n: 12,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_dlc: { n: 13, br: s.FE.readBool, bw: s.Xc.writeBool },
                  include_software: {
                    n: 14,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_video: {
                    n: 15,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_hardware: {
                    n: 16,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_series: {
                    n: 17,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_music: {
                    n: 18,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters_TypeFilters";
        }
      }
      class c extends o {
        constructor(e = null) {
          super(),
            c.prototype.tagids || s.aR(c.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  tagids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: s.FE.readInt32,
                    pbr: s.FE.readPackedInt32,
                    bw: s.Xc.writeRepeatedInt32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters_TagFilter";
        }
      }
      class d extends o {
        constructor(e = null) {
          super(),
            d.prototype.start || s.aR(d.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  start: {
                    n: 1,
                    d: 0,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  count: {
                    n: 2,
                    d: 10,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  sort: { n: 10, d: 0, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  filters: { n: 20, c: l },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = s.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryParams";
        }
      }
      class m extends o {
        constructor(e = null) {
          super(),
            m.prototype.id || s.aR(m.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  id: { n: 1, c: n.oY },
                  score: { n: 2, br: s.FE.readDouble, bw: s.Xc.writeDouble },
                  spellcheck_generated_result: {
                    n: 3,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = s.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryPerResultMetadata";
        }
      }
      class _ extends o {
        constructor(e = null) {
          super(),
            _.prototype.total_matching_records || s.aR(_.M()),
            o.initialize(this, e, 0, -1, [4, 5], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  total_matching_records: {
                    n: 1,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  start: { n: 2, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  count: { n: 3, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  per_result_metadata: { n: 4, c: m, r: !0, q: !0 },
                  spellcheck_suggestions: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: s.FE.readString,
                    bw: s.Xc.writeRepeatedString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = s.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryResultMetadata";
        }
      }
      class B extends o {
        constructor(e = null) {
          super(),
            B.prototype.query_name || s.aR(B.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  query_name: {
                    n: 1,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  query: { n: 2, c: d },
                  context: { n: 3, c: n.WJ },
                  data_request: { n: 4, c: n.Qn },
                  override_country_code: {
                    n: 5,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = s.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_Query_Request";
        }
      }
      class g extends o {
        constructor(e = null) {
          super(),
            g.prototype.metadata || s.aR(g.M()),
            o.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  metadata: { n: 1, c: _ },
                  ids: { n: 2, c: n.oY, r: !0, q: !0 },
                  store_items: { n: 3, c: n.VL, r: !0, q: !0 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = s.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_Query_Response";
        }
      }
      class h extends o {
        constructor(e = null) {
          super(),
            h.prototype.metadata || s.aR(h.M()),
            o.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  metadata: { n: 1, c: _ },
                  ids: { n: 2, c: n.oY, r: !0, q: !0 },
                  store_items: { n: 3, c: n.VL, r: !0, q: !0 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = s.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_SearchSuggestions_Response";
        }
      }
      var p;
      !(function (e) {
        (e.Query = function (e, t) {
          return e.SendMsg("StoreQuery.Query#1", t, g, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.SearchSuggestions = function (e, t) {
            return e.SendMsg("StoreQuery.SearchSuggestions#1", t, h, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(p || (p = {}));
    },
    32367: (e, t, r) => {
      r.d(t, { De: () => l, Fq: () => o, pA: () => n });
      var i = r(990),
        s = r(90666),
        a = (r(33019), r(58114), r(92398));
      r(87931);
      function n(e, t) {
        e.Body().set_context(o(t));
      }
      function o(e) {
        let t = new i.WJ();
        return (
          e || t.set_country_code(s.De.COUNTRY),
          t.set_language(s.De.LANGUAGE),
          s.De.EREALM != a.IN.k_ESteamRealmUnknown &&
            t.set_steam_realm(s.De.EREALM),
          t
        );
      }
      function l(e, t) {
        e.Body().set_data_request(i.Qn.fromObject(t));
      }
    },
    14146: (e, t, r) => {
      r.d(t, { Z: () => c });
      var i = r(22188),
        s = (r(26149), r(92398), r(13328), r(990), r(73285)),
        a = r(77520),
        n = r(41311),
        o = r(74891),
        l = r(90666);
      function u(e) {
        return (function (e, t, r) {
          switch (e) {
            case "date_full":
              return (0, n.vX)(t);
            case "date_month":
              return (0, o.LO)(new Date(1e3 * t));
            case "date_quarter":
              return (0, o.Kb)(new Date(1e3 * t));
            case "date_year":
              return (0, o.Np)(new Date(1e3 * t));
            case "text_comingsoon":
              return r || (0, n.Xx)("#Store_ComingSoon_ComingSoon");
            case "text_tba":
              return r || (0, n.Xx)("#Store_ComingSoon_TBA");
            default:
              return "";
          }
        })(
          e.coming_soon_display,
          e.steam_release_date,
          e.custom_release_date_message
        );
      }
      class c {
        constructor(e, t) {
          var r, i, s;
          (this.m_bVisible = !1),
            (this.m_rgStoreTags = []),
            (this.m_rgStoreTagIDs = []),
            (this.m_DataRequested = { include_tag_count: 0 }),
            (this.k_regexSalePage =
              /^https?:\/\/[^\/]*(?:valvesoftware|steampowered).com\/(?:(curator|dev|developer|pub|publisher|franchise)\/[0-9a-zA-Z\-_]+\/)?sale\//),
            (this.m_eItemType = e.item_type()),
            (this.m_unID = e.id()),
            (this.m_bVisible = e.visible()),
            (this.m_strName = e.name()),
            (this.m_strStoreURLPath = e.store_url_path()),
            (this.m_unAppID = e.appid()),
            (this.m_eAppType = e.type()),
            (this.m_rgIncludedAppTypes = e.included_types()),
            (this.m_rgIncludedAppIDs = e.included_appids()),
            (this.m_bIsFree = e.is_free()),
            (this.m_bIsEarlyAccess = e.is_early_access()),
            (this.m_RelatedItems =
              null === (r = e.related_items()) || void 0 === r
                ? void 0
                : r.toObject()),
            (this.m_ContentDescriptorIDs = e.content_descriptorids()),
            (this.m_StoreCategories = e.categories().toObject()),
            (this.m_BestPurchaseOption =
              null === (i = e.best_purchase_option()) || void 0 === i
                ? void 0
                : i.toObject()),
            (this.m_strStoreURLPathOverride = e.store_url_path_override()),
            (this.m_freeWeekend =
              null === (s = e.free_weekend()) || void 0 === s
                ? void 0
                : s.toObject()),
            this.MergeData(e, t);
        }
        MergeData(e, t) {
          t.include_assets &&
            !this.m_Assets &&
            ((this.m_Assets = new m(e.assets(), e.id())),
            (this.m_DataRequested.include_assets = !0)),
            t.include_release &&
              !this.m_ReleaseInfo &&
              ((this.m_ReleaseInfo = e.release().toObject()),
              (this.m_DataRequested.include_release = !0)),
            t.include_platforms &&
              !this.m_Platforms &&
              ((this.m_Platforms = e.platforms().toObject()),
              (this.m_DataRequested.include_platforms = !0)),
            t.include_all_purchase_options &&
              !this.m_rgPurchaseOptions &&
              ((this.m_rgPurchaseOptions = e
                .purchase_options()
                .map((e) => e.toObject())),
              (this.m_DataRequested.include_all_purchase_options = !0)),
            t.include_screenshots &&
              !this.m_Screenshots &&
              ((this.m_Screenshots = new g(e.screenshots())),
              (this.m_DataRequested.include_screenshots = !0)),
            t.include_trailers &&
              !this.m_Trailers &&
              ((this.m_Trailers = new _(e.trailers())),
              (this.m_DataRequested.include_trailers = !0)),
            t.include_tag_count > this.m_rgStoreTags.length &&
              this.m_DataRequested.include_tag_count < t.include_tag_count &&
              ((this.m_rgStoreTags = e.tags().map((e) => e.toObject())),
              (this.m_rgStoreTagIDs = this.m_rgStoreTags.map((e) => e.tagid)),
              (this.m_DataRequested.include_tag_count = Math.max(
                t.include_tag_count,
                this.m_rgStoreTags.length || 0
              ))),
            t.include_reviews &&
              !this.m_ReviewInfo &&
              ((this.m_ReviewInfo = e.reviews().toObject()),
              (this.m_DataRequested.include_reviews = !0)),
            t.include_basic_info &&
              !this.m_BasicInfo &&
              ((this.m_BasicInfo = e.basic_info().toObject()),
              (this.m_DataRequested.include_basic_info = !0)),
            t.include_supported_languages &&
              !this.m_rgSupportedLanguages &&
              ((this.m_rgSupportedLanguages = e
                .supported_languages()
                .map((e) => e.toObject())),
              (this.m_DataRequested.include_supported_languages = !0));
        }
        static BDataRequestContainsOtherDataRequest(e, t) {
          return Boolean(
            (!t.include_assets || e.include_assets) &&
              (!t.include_release || e.include_release) &&
              (!t.include_platforms || e.include_platforms) &&
              (!t.include_all_purchase_options ||
                e.include_all_purchase_options) &&
              (!t.include_screenshots || e.include_screenshots) &&
              (!t.include_trailers || e.include_trailers) &&
              (!t.include_ratings || e.include_ratings) &&
              (!t.include_tag_count ||
                (e.include_tag_count || 0) >= t.include_tag_count) &&
              (!t.include_reviews || e.include_reviews) &&
              (!t.include_basic_info || e.include_basic_info) &&
              (!t.include_supported_languages || e.include_supported_languages)
          );
        }
        BContainDataRequest(e) {
          return c.BDataRequestContainsOtherDataRequest(
            this.m_DataRequested,
            e
          );
        }
        BCheckDataRequestIncluded(e) {
          ("dev" != l.De.WEB_UNIVERSE && "beta" != l.De.WEB_UNIVERSE) ||
            (0, a.X)(
              this.BContainDataRequest(e),
              `Requested data without for ${(0, s.qE)(this.m_eItemType)} @ ${
                this.m_unID
              }`,
              (0, i.ZN)(e),
              (0, i.ZN)(this.m_DataRequested)
            );
        }
        GetStoreItemType() {
          return this.m_eItemType;
        }
        GetID() {
          return this.m_unID;
        }
        GetUniqueID() {
          return this.m_eItemType + "_" + this.m_unID;
        }
        BIsVisible() {
          return this.m_bVisible;
        }
        GetName() {
          return this.m_strName;
        }
        GetStorePageURL() {
          return l.De.STORE_BASE_URL + this.m_strStoreURLPath;
        }
        GetStorePageURLWithOverride() {
          var e;
          return (null === (e = this.m_strStoreURLPathOverride) || void 0 === e
            ? void 0
            : e.length) > 0
            ? this.GetStorePageURLOverride()
            : this.GetStorePageURL();
        }
        GetStorePageURLOverride() {
          return this.m_strStoreURLPathOverride;
        }
        GetCommunityPageURL() {
          return this.GetAppID()
            ? l.De.COMMUNITY_BASE_URL + "app/" + this.GetAppID()
            : null;
        }
        GetCommunityDiscussionForumsURL() {
          return this.GetAppID()
            ? l.De.COMMUNITY_BASE_URL +
                "app/" +
                this.GetAppID() +
                "/discussions/"
            : null;
        }
        GetAppID() {
          return this.m_unAppID;
        }
        GetAppIDToRun() {
          const e = this.GetParentAppID();
          return e && 11 != this.m_eAppType ? e : this.GetAppID();
        }
        GetAppType() {
          return this.m_eAppType;
        }
        BIsApplicationOrTool() {
          return 6 == this.GetAppType() || 13 == this.GetAppType();
        }
        BIsSalePage() {
          return (
            0 === this.GetStoreItemType() &&
            this.k_regexSalePage.test(this.GetStorePageURLWithOverride())
          );
        }
        GetSalePageVanityURL() {
          let e = this.GetStorePageURLWithOverride();
          return (
            0 === this.GetStoreItemType() &&
              ((e = this.GetStorePageURLWithOverride().replace(
                this.k_regexSalePage,
                ""
              )),
              e.endsWith("/") && (e = e.replace("/", ""))),
            e
          );
        }
        GetIncludedAppTypes() {
          return this.m_rgIncludedAppTypes;
        }
        GetIncludedAppIDs() {
          return this.m_rgIncludedAppIDs;
        }
        GetIncludedAppIDsOrSelf() {
          return 0 == this.GetStoreItemType()
            ? [this.GetID()]
            : this.GetIncludedAppIDs();
        }
        BIsFree() {
          return this.m_bIsFree;
        }
        BIsFreeWeekend() {
          const e = Date.now() / 1e3;
          return (
            Boolean(this.m_freeWeekend) &&
            this.m_freeWeekend.start_time <= e &&
            e <= this.m_freeWeekend.end_time
          );
        }
        GetFreeWeekendEnd() {
          var e;
          return null === (e = this.m_freeWeekend) || void 0 === e
            ? void 0
            : e.end_time;
        }
        GetFreeWeekendPlayTextOverride() {
          var e;
          return null === (e = this.m_freeWeekend) || void 0 === e
            ? void 0
            : e.text;
        }
        BIsEarlyAccess() {
          return this.m_bIsEarlyAccess;
        }
        GetParentAppID() {
          var e;
          return null === (e = this.m_RelatedItems) || void 0 === e
            ? void 0
            : e.parent_appid;
        }
        GetContentDescriptorIDs() {
          return this.m_ContentDescriptorIDs;
        }
        HasContentDescriptorID(e) {
          var t;
          return null === (t = this.m_ContentDescriptorIDs) || void 0 === t
            ? void 0
            : t.includes(e);
        }
        GetStoreCategories_SupportedPlayers() {
          var e;
          return (
            (null === (e = this.m_StoreCategories) || void 0 === e
              ? void 0
              : e.supported_player_categoryids) || []
          );
        }
        GetStoreCategories_Features() {
          var e;
          return (
            (null === (e = this.m_StoreCategories) || void 0 === e
              ? void 0
              : e.feature_categoryids) || []
          );
        }
        GetStoreCategories_Controller() {
          var e;
          return (
            (null === (e = this.m_StoreCategories) || void 0 === e
              ? void 0
              : e.controller_categoryids) || []
          );
        }
        BHasStoreCategory(e) {
          return Boolean(
            this.GetStoreCategories_SupportedPlayers().find((t) => e === t) ||
              this.GetStoreCategories_Features().find((t) => e === t) ||
              this.GetStoreCategories_Controller().find((t) => e === t)
          );
        }
        GetFilteredReviewSummary() {
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            this.m_ReviewInfo.summary_filtered
          );
        }
        GetUnfilteredReviewSummary() {
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            this.m_ReviewInfo.summary_unfiltered ||
              this.m_ReviewInfo.summary_filtered
          );
        }
        GetShortDescription() {
          var e, t;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null !==
              (t =
                null === (e = this.m_BasicInfo) || void 0 === e
                  ? void 0
                  : e.short_description) && void 0 !== t
              ? t
              : ""
          );
        }
        GetDeveloperNames() {
          var e, t, r, i;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null !==
              (i =
                null ===
                  (r =
                    null ===
                      (t =
                        null === (e = this.m_BasicInfo) || void 0 === e
                          ? void 0
                          : e.developers) || void 0 === t
                      ? void 0
                      : t.map((e) => e.name.trim())) || void 0 === r
                  ? void 0
                  : r.filter((e) => (null == e ? void 0 : e.length) > 0)) &&
            void 0 !== i
              ? i
              : []
          );
        }
        GetFranchiseNames() {
          var e, t, r, i;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null !==
              (i =
                null ===
                  (r =
                    null ===
                      (t =
                        null === (e = this.m_BasicInfo) || void 0 === e
                          ? void 0
                          : e.franchises) || void 0 === t
                      ? void 0
                      : t.map((e) => e.name.trim())) || void 0 === r
                  ? void 0
                  : r.filter((e) => (null == e ? void 0 : e.length) > 0)) &&
            void 0 !== i
              ? i
              : []
          );
        }
        GetPublisherNames() {
          var e, t, r, i;
          this.BCheckDataRequestIncluded({ include_basic_info: !0 });
          const s =
            null !==
              (i =
                null ===
                  (r =
                    null ===
                      (t =
                        null === (e = this.m_BasicInfo) || void 0 === e
                          ? void 0
                          : e.publishers) || void 0 === t
                      ? void 0
                      : t.map((e) => e.name.trim())) || void 0 === r
                  ? void 0
                  : r.filter((e) => (null == e ? void 0 : e.length) > 0)) &&
            void 0 !== i
              ? i
              : [];
          return (null == s ? void 0 : s.length) > 0
            ? s
            : this.GetDeveloperNames();
        }
        GetAllCreatorClanIDs() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo
              ? d([
                  ...this.m_BasicInfo.developers,
                  ...this.m_BasicInfo.publishers,
                  ...this.m_BasicInfo.franchises,
                ])
              : []
          );
        }
        GetAllPublisherCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? d(this.m_BasicInfo.publishers) : []
          );
        }
        GetAllDeveloperCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? d(this.m_BasicInfo.developers) : []
          );
        }
        GetAllFranchiseCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? d(this.m_BasicInfo.franchises) : []
          );
        }
        GetCapsuleHeadline() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null === (e = this.m_BasicInfo) || void 0 === e
              ? void 0
              : e.capsule_headline
          );
        }
        GetTags() {
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            this.m_rgStoreTags
          );
        }
        GetTagIDs() {
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            this.m_rgStoreTagIDs
          );
        }
        BHasTags() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            (null === (e = this.m_rgStoreTagIDs) || void 0 === e
              ? void 0
              : e.length) > 0
          );
        }
        GetAssets() {
          return (
            this.BCheckDataRequestIncluded({ include_assets: !0 }),
            this.m_Assets
          );
        }
        GetOriginalReleaseDateRTime() {
          var e;
          this.BCheckDataRequestIncluded({ include_release: !0 });
          let t =
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.original_steam_release_date;
          return t || (t = this.GetReleaseDateRTime()), t;
        }
        GetReleaseDateRTime() {
          var e, t, r;
          if (
            (this.BCheckDataRequestIncluded({ include_release: !0 }),
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.is_coming_soon)
          )
            return 0;
          let i =
            null === (t = this.m_ReleaseInfo) || void 0 === t
              ? void 0
              : t.steam_release_date;
          return (
            i ||
              (i =
                null === (r = this.m_ReleaseInfo) || void 0 === r
                  ? void 0
                  : r.original_release_date),
            i
          );
        }
        GetFormattedSteamReleaseDate() {
          var e, t, r, i, s;
          if (
            (this.BCheckDataRequestIncluded({ include_release: !0 }),
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.is_coming_soon)
          ) {
            if (
              null === (t = this.m_ReleaseInfo) || void 0 === t
                ? void 0
                : t.coming_soon_display
            )
              return u(this.m_ReleaseInfo);
            if (
              null === (r = this.m_ReleaseInfo) || void 0 === r
                ? void 0
                : r.custom_release_date_message
            )
              return this.m_ReleaseInfo.custom_release_date_message;
            const e =
              null === (i = this.m_ReleaseInfo) || void 0 === i
                ? void 0
                : i.steam_release_date;
            return e
              ? (
                  null === (s = this.m_ReleaseInfo) || void 0 === s
                    ? void 0
                    : s.is_abridged_release_date
                )
                ? (0, o.LO)(new Date(1e3 * e))
                : (0, n.vX)(e)
              : "";
          }
          const a = this.GetReleaseDateRTime();
          return a ? (0, n.vX)(a) : "";
        }
        BIsComingSoon() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_release: !0 }),
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.is_coming_soon
          );
        }
        BIsCustomComingSoonDisplay() {
          var e;
          return (
            !!this.BIsComingSoon() &&
            ((
              null === (e = this.m_ReleaseInfo) || void 0 === e
                ? void 0
                : e.coming_soon_display
            )
              ? ["text_tba", "text_comingsoon"].includes(
                  this.m_ReleaseInfo.coming_soon_display
                )
              : !!this.m_ReleaseInfo.custom_release_date_message)
          );
        }
        BIsPrePurchase() {
          var e;
          return (
            this.BIsComingSoon() &&
            Boolean(
              null === (e = this.GetBestPurchaseOption()) || void 0 === e
                ? void 0
                : e.packageid
            )
          );
        }
        BIsReleased() {
          return !this.BIsComingSoon();
        }
        GetPlatforms() {
          return (
            this.BCheckDataRequestIncluded({ include_platforms: !0 }),
            this.m_Platforms
          );
        }
        GetBestPurchaseOption() {
          return this.m_BestPurchaseOption;
        }
        GetBestPurchasePriceInCents() {
          var e;
          if (
            null === (e = this.m_BestPurchaseOption) || void 0 === e
              ? void 0
              : e.final_price_in_cents
          )
            return Number.parseInt(
              this.m_BestPurchaseOption.final_price_in_cents
            );
        }
        GetBestPurchasePriceFormatted() {
          var e;
          return null === (e = this.m_BestPurchaseOption) || void 0 === e
            ? void 0
            : e.formatted_final_price;
        }
        GetBestPurchaseOriginalPriceInCents() {
          var e;
          return (
            null === (e = this.m_BestPurchaseOption) || void 0 === e
              ? void 0
              : e.original_price_in_cents
          )
            ? Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents)
            : this.GetBestPurchasePriceInCents();
        }
        GetBestPurchaseOriginalPriceFormatted() {
          var e, t, r;
          return null !==
            (t =
              null === (e = this.m_BestPurchaseOption) || void 0 === e
                ? void 0
                : e.formatted_original_price) && void 0 !== t
            ? t
            : null === (r = this.m_BestPurchaseOption) || void 0 === r
            ? void 0
            : r.formatted_final_price;
        }
        GetAllPurchaseOptions() {
          return (
            this.BCheckDataRequestIncluded({
              include_all_purchase_options: !0,
            }),
            this.m_rgPurchaseOptions
          );
        }
        BHasAgeSafeScreenshots() {
          return this.GetOnlyAllAgesSafeScreenshots().length > 0;
        }
        GetOnlyAllAgesSafeScreenshots() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_screenshots: !0 }),
            (null === (e = this.m_Screenshots) || void 0 === e
              ? void 0
              : e.GetOnlyAllAgesScreenshots()) || []
          );
        }
        GetBothAllAgesSafeAndMatureScreenshots() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_screenshots: !0 }),
            (null === (e = this.m_Screenshots) || void 0 === e
              ? void 0
              : e.GetAllAgesAndMatureScreenshots()) || []
          );
        }
        BHasTrailers() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            null === (e = this.m_Trailers) || void 0 === e
              ? void 0
              : e.BHasTrailers()
          );
        }
        BHasHighlightTrailers() {
          var e, t;
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            (null ===
              (t =
                null === (e = this.m_Trailers) || void 0 === e
                  ? void 0
                  : e.GetHighlightTrailers()) || void 0 === t
              ? void 0
              : t.length) > 0
          );
        }
        GetAllTrailers() {
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            this.m_Trailers
          );
        }
        BHasSomeLanguageSupport(e) {
          var t;
          return (
            this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
            (null === (t = this.m_rgSupportedLanguages) || void 0 === t
              ? void 0
              : t.some(
                  (t) =>
                    t.elanguage == e &&
                    (t.supported || t.subtitles || t.full_audio)
                )) || !1
          );
        }
        GetAllLanguagesWithSomeSupport() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
            (null === (e = this.m_rgSupportedLanguages) || void 0 === e
              ? void 0
              : e
                  .filter((e) => e.supported || e.subtitles || e.full_audio)
                  .map((e) => e.elanguage)) || []
          );
        }
        GetDataRequest() {
          return this.m_DataRequested;
        }
        GetMicroTrailer() {
          this.BCheckDataRequestIncluded({ include_trailers: !0 });
          let e = null;
          return (
            this.m_Trailers &&
              (this.m_Trailers.GetHighlightTrailers().forEach((t) => {
                !e && t.GetMicroTrailer() && (e = t.GetMicroTrailer());
              }),
              e ||
                this.m_Trailers.GetOtherTrailers().forEach((t) => {
                  !e && t.GetMicroTrailer() && (e = t.GetMicroTrailer());
                })),
            e
          );
        }
        ReplaceBestPurchaseOption(e) {
          this.m_BestPurchaseOption = e;
        }
      }
      function d(e) {
        if (!(null == e ? void 0 : e.length)) return [];
        const t = e.map((e) => e.creator_clan_account_id).filter((e) => !!e);
        return Array.from(new Set(t));
      }
      class m {
        constructor(e, t) {
          const r = e.asset_url_format();
          r &&
            (e.main_capsule() &&
              (this.m_strMainCapsuleURL = this.ConstructAssetURL(
                r,
                e.main_capsule()
              )),
            e.small_capsule() &&
              (this.m_strSmallCapsuleURL = this.ConstructAssetURL(
                r,
                e.small_capsule()
              )),
            e.header() &&
              (this.m_strHeaderURL = this.ConstructAssetURL(r, e.header())),
            e.package_header() &&
              (this.m_strPackageHeaderURL = this.ConstructAssetURL(
                r,
                e.package_header()
              )),
            e.page_background() &&
              (this.m_strPageBackgroundURL = this.ConstructAssetURL(
                r,
                e.page_background()
              )),
            e.hero_capsule() &&
              (this.m_strHeroCapsuleURL = this.ConstructAssetURL(
                r,
                e.hero_capsule()
              )),
            e.hero_capsule_2x() &&
              (this.m_strHeroCapsuleURL_2x = this.ConstructAssetURL(
                r,
                e.hero_capsule_2x()
              )),
            e.library_capsule() &&
              (this.m_strLibraryCapsuleURL = this.ConstructAssetURL(
                r,
                e.library_capsule()
              )),
            e.library_capsule_2x() &&
              (this.m_strLibraryCapsuleURL_2x = this.ConstructAssetURL(
                r,
                e.library_capsule_2x()
              )),
            e.library_hero() &&
              (this.m_strLibraryHeroURL = this.ConstructAssetURL(
                r,
                e.library_hero()
              )),
            e.library_hero_2x() &&
              (this.m_strLibraryHeroURL_2x = this.ConstructAssetURL(
                r,
                e.library_hero_2x()
              ))),
            e.community_icon() &&
              (this.m_strCommunityIcon = `${
                l.De.MEDIA_CDN_COMMUNITY_URL
              }images/apps/${t}/${e.community_icon()}.jpg`);
        }
        GetMainCapsuleURL() {
          return this.m_strMainCapsuleURL;
        }
        GetSmallCapsuleURL() {
          return this.m_strSmallCapsuleURL;
        }
        GetHeaderURL() {
          return this.m_strHeaderURL;
        }
        GetPackageHeaderURL() {
          return this.m_strPackageHeaderURL;
        }
        GetPageBackgroundURL() {
          return this.m_strPageBackgroundURL;
        }
        GetHeroCapsuleURL() {
          return this.m_strHeroCapsuleURL;
        }
        GetHeroCapsuleURL_2x() {
          return this.m_strHeroCapsuleURL_2x;
        }
        GetLibraryCapsuleURL() {
          return this.m_strLibraryCapsuleURL;
        }
        GetLibraryCapsuleURL_2x() {
          return this.m_strLibraryCapsuleURL_2x;
        }
        GetLibraryHeroURL() {
          return this.m_strLibraryHeroURL;
        }
        GetLibraryHeroURL_2x() {
          return this.m_strLibraryHeroURL_2x;
        }
        ConstructAssetURL(e, t) {
          return l.De.MEDIA_CDN_URL + e.replace("${FILENAME}", t);
        }
        GetCommunityIconURL() {
          return this.m_strCommunityIcon;
        }
      }
      class _ {
        constructor(e) {
          (this.m_mapTrailer = new Map()),
            (this.m_higherTrailers = new Array()),
            (this.m_otherTrailers = new Array()),
            e.highlights() &&
              e.highlights().forEach((e) => {
                let t = new B(e);
                this.m_mapTrailer.set(t.GetTrailerID(), t),
                  this.m_higherTrailers.push(t);
              }),
            e.other_trailers() &&
              e.other_trailers().forEach((e) => {
                let t = new B(e);
                this.m_mapTrailer.set(t.GetTrailerID(), t),
                  this.m_otherTrailers.push(t);
              });
        }
        BHasTrailers() {
          return (
            this.m_higherTrailers.length > 0 || this.m_otherTrailers.length > 0
          );
        }
        GetHighlightTrailers() {
          return this.m_higherTrailers;
        }
        GetOtherTrailers() {
          return this.m_otherTrailers;
        }
        GetTrailerByID(e) {
          return this.m_mapTrailer.get(e);
        }
      }
      class B {
        constructor(e) {
          (this.m_strTrailerName = e.trailer_name()),
            (this.m_nBaseID = e.trailer_base_id());
          const t = e.trailer_url_format();
          t &&
            (e.trailer_480p() &&
              (this.m_Trailer480p = this.ExtractTrailerFormats(
                t,
                e.trailer_480p()
              )),
            e.trailer_max() &&
              (this.m_TrailerMax = this.ExtractTrailerFormats(
                t,
                e.trailer_max()
              )),
            e.microtrailer() &&
              (this.m_MicroTrailer = this.ExtractTrailerFormats(
                t,
                e.microtrailer()
              )),
            e.screenshot_medium() &&
              (this.m_strScreenshotMedium = this.ConstructAssetURL(
                t,
                e.screenshot_medium()
              )),
            e.screenshot_full() &&
              (this.m_strScreenshotFull = this.ConstructAssetURL(
                t,
                e.screenshot_full()
              )));
        }
        GetName() {
          return this.m_strTrailerName;
        }
        GetTrailerID() {
          return this.m_nBaseID;
        }
        GetTrailer480p() {
          return this.m_Trailer480p;
        }
        GetTrailerMax() {
          return this.m_TrailerMax;
        }
        GetMicroTrailer() {
          return this.m_MicroTrailer;
        }
        GetScreenshot() {
          return this.m_strScreenshotFull
            ? this.m_strScreenshotFull
            : this.m_strScreenshotMedium;
        }
        ExtractTrailerFormats(e, t) {
          let r = {};
          return (
            t.forEach((t) => {
              "video/mp4" == t.type()
                ? (r.strMP4URL = this.ConstructAssetURL(e, t.filename()))
                : "video/webm" == t.type() &&
                  (r.strWebMURL = this.ConstructAssetURL(e, t.filename()));
            }),
            r
          );
        }
        ConstructAssetURL(e, t) {
          return l.De.MEDIA_CDN_URL + e.replace("${FILENAME}", t);
        }
      }
      class g {
        constructor(e) {
          (this.m_rgAllScreenshots = new Array()),
            (this.m_rgOnlyAllAgesScreenshots = new Array());
          let t = 0,
            r = 0;
          const i = e.all_ages_screenshots() || [],
            s = e.mature_content_screenshots() || [];
          for (; t < i.length || r < s.length; ) {
            let e = t < i.length;
            if (t < i.length && r < s.length) {
              e = i[t].ordinal() < s[r].ordinal();
            }
            if (e) {
              const e = l.De.MEDIA_CDN_URL + i[t].filename();
              this.m_rgAllScreenshots.push(e),
                this.m_rgOnlyAllAgesScreenshots.push(e),
                (t += 1);
            } else {
              const e = l.De.MEDIA_CDN_URL + s[r].filename();
              this.m_rgAllScreenshots.push(e), (r += 1);
            }
          }
        }
        GetAllAgesAndMatureScreenshots() {
          return this.m_rgAllScreenshots;
        }
        GetOnlyAllAgesScreenshots() {
          return this.m_rgOnlyAllAgesScreenshots;
        }
      }
    },
    159: (e, t, r) => {
      r.d(t, { Z: () => f });
      var i = r(70655),
        s = r(22188),
        a = (r(26149), r(92398), r(58114)),
        n = r(65902),
        o = (r(46321), r(33019)),
        l = r(40110),
        u = r(990);
      const c = o.Message;
      class d extends c {
        constructor(e = null) {
          super(),
            d.prototype.request || l.aR(d.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  request: { n: 1, c: u.eK },
                  include_unpublished: {
                    n: 2,
                    br: l.FE.readBool,
                    bw: l.Xc.writeBool,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = l.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return l.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return l.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new o.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerStoreBrowse_GetItems_Request";
        }
      }
      var m;
      !(function (e) {
        e.GetItems = function (e, t) {
          return e.SendMsg("PartnerStoreBrowse.GetItems#1", t, u.cR, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        };
      })(m || (m = {}));
      var _ = r(77520),
        B = r(93976),
        g = r(90666),
        h = r(32367),
        p = r(14146);
      function b(e, t) {
        if (!e) return t;
        if (!t) return e;
        return {
          include_assets: e.include_assets || t.include_assets,
          include_release: e.include_release || t.include_release,
          include_platforms: e.include_platforms || t.include_platforms,
          include_all_purchase_options:
            e.include_all_purchase_options || t.include_all_purchase_options,
          include_screenshots: e.include_screenshots || t.include_screenshots,
          include_trailers: e.include_trailers || t.include_trailers,
          include_ratings: e.include_ratings || t.include_ratings,
          include_tag_count:
            Math.max(e.include_tag_count || 0, t.include_tag_count || 0) ||
            void 0,
          include_reviews: e.include_reviews || t.include_reviews,
          include_basic_info: e.include_basic_info || t.include_basic_info,
          include_supported_languages:
            e.include_supported_languages || t.include_supported_languages,
        };
      }
      function y(e, t) {
        return (0, i.mG)(this, void 0, void 0, function* () {
          const r = yield e,
            i = yield t;
          return 1 != r ? r : i;
        });
      }
      class f {
        constructor() {
          (this.k_QueueWaitUntilRequestMS = 5),
            (this.k_nMaxBatchSize = 250),
            (this.m_bReturnUnavailableItems = !1),
            (this.m_mapApps = new Map()),
            (this.m_mapPackages = new Map()),
            (this.m_mapBundles = new Map()),
            (this.m_setUnavailableApps = new Set()),
            (this.m_setUnavailablePackages = new Set()),
            (this.m_setUnavailableBundles = new Set()),
            (this.m_setUnavailableDueToCountryRestrictionApps = new Set()),
            (this.m_setUnavailableDueToCountryRestrictionPackages = new Set()),
            (this.m_setUnavailableDueToCountryRestrictionBundles = new Set()),
            (this.m_mapAppsInFlight = new Map()),
            (this.m_mapPackageInFlight = new Map()),
            (this.m_mapBundleInFlight = new Map()),
            (this.m_SteamInterface = null),
            (this.m_bUsePartnerAPI = !1),
            (this.m_bInitialized = !1),
            (this.m_bActivelyResettingCache = !1),
            (this.m_setPendingAppInfo = new Set()),
            (this.m_setPendingBundleInfo = new Set()),
            (this.m_setPendingPackageInfo = new Set()),
            (this.m_setPendingDataRequest = {}),
            (this.m_PendingInfoResolve = void 0),
            (this.m_PendingTimer = void 0),
            (this.k_AlreadyResolvedOK = Promise.resolve(1)),
            (this.k_AlreadyResolvedInvalid = Promise.resolve(8)),
            (this.k_AlreadyResolvedBusy = Promise.resolve(10));
        }
        static Get() {
          return (
            f.sm_instance ||
              ((f.sm_instance = new f()),
              (window.StoreItemCache = f.sm_instance)),
            f.sm_instance
          );
        }
        static Initialize(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (0, _.X)(
              !f.Get().m_bInitialized,
              "CStoreItemCache was already initialized; initialize it only once."
            ),
              (f.Get().m_SteamInterface = e),
              (f.Get().m_bUsePartnerAPI = !!t),
              (f.Get().m_bInitialized = !0);
          });
        }
        GetSteamInterface() {
          return this.m_SteamInterface;
        }
        SetSteamInterface(e) {
          this.m_SteamInterface = e;
        }
        SetReturnUnavailableItems(e) {
          this.m_bReturnUnavailableItems = e;
        }
        GetReturnUnavailableItems() {
          return this.m_bReturnUnavailableItems;
        }
        ResetCache() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (this.m_bActivelyResettingCache = !0), this.FlushPendingInfo();
            let e = [];
            this.m_mapAppsInFlight.forEach((t) => {
              e.push(t.promise);
            }),
              this.m_mapBundleInFlight.forEach((t) => {
                e.push(t.promise);
              }),
              this.m_mapPackageInFlight.forEach((t) => {
                e.push(t.promise);
              }),
              yield Promise.all(e),
              this.m_mapApps.clear(),
              this.m_mapBundles.clear(),
              this.m_mapPackages.clear(),
              (this.m_bActivelyResettingCache = !1);
          });
        }
        static BIsInitialized() {
          return f.Get().m_bInitialized;
        }
        QueueAppRequest(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 0, t);
          });
        }
        QueuePackageRequest(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 1, t);
          });
        }
        QueueBundleRequest(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 2, t);
          });
        }
        static ValidateDataRequest(e) {
          const t = [
            e.include_assets,
            e.include_release,
            e.include_platforms,
            e.include_all_purchase_options,
            e.include_screenshots,
            e.include_trailers,
            e.include_ratings,
            e.include_reviews,
            e.include_basic_info,
            e.include_supported_languages,
          ];
          for (const e of t) if (!0 !== e && void 0 !== e) return !1;
          return !0;
        }
        QueueMultipleAppRequests(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const r = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 0, t))
            )).filter((e) => 1 != e);
            return r.length > 0 ? r[0] : 1;
          });
        }
        QueueMultiplePackageRequests(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const r = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 1, t))
            )).filter((e) => 1 != e);
            return r.length > 0 ? r[0] : 1;
          });
        }
        QueueMultipleBundleRequests(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const r = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 2, t))
            )).filter((e) => 1 != e);
            return r.length > 0 ? r[0] : 1;
          });
        }
        QueueMultipleStoreItemRequests(e, t, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const i = (yield Promise.all(
              e.map((e, i) => this.QueueStoreItemRequest(e, t[i], r))
            )).filter((e) => 1 != e);
            return i.length > 0 ? i[0] : 1;
          });
        }
        QueueStoreItemRequest(e, t, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (
              ((0, _.X)(
                f.ValidateDataRequest(r),
                "Invalid Data Request: " + JSON.stringify(r)
              ),
              this.m_bActivelyResettingCache)
            )
              return (
                console.log(
                  "Rejecting store item request due to currently clearing the cache"
                ),
                this.k_AlreadyResolvedBusy
              );
            if (!e)
              return (
                (0, _.X)(
                  !e,
                  `unexpected id ${e} of zero or undefined for type ${t}`
                ),
                this.k_AlreadyResolvedInvalid
              );
            const i = this.GetPreviousSupersetLoadPromise(e, t, r);
            if (i) return i;
            switch (
              (this.m_PendingInfoPromise ||
                ((this.m_PendingInfoPromise = new Promise(
                  (e) => (this.m_PendingInfoResolve = e)
                )),
                (this.m_PendingTimer = window.setTimeout(
                  () => this.FlushPendingInfo(),
                  this.k_QueueWaitUntilRequestMS
                ))),
              (this.m_setPendingDataRequest = b(
                this.m_setPendingDataRequest,
                r
              )),
              t)
            ) {
              case 0:
                this.m_setPendingAppInfo.add(e);
                break;
              case 2:
                this.m_setPendingBundleInfo.add(e);
                break;
              case 1:
                this.m_setPendingPackageInfo.add(e);
                break;
              default:
                (0, _.X)(!1, `Unexpected Type ${t}`);
            }
            const s = this.m_PendingInfoPromise;
            return (
              this.m_setPendingAppInfo.size +
                this.m_setPendingPackageInfo.size +
                this.m_setPendingBundleInfo.size >=
                this.k_nMaxBatchSize &&
                (this.m_PendingTimer &&
                  window.clearTimeout(this.m_PendingTimer),
                this.FlushPendingInfo()),
              s
            );
          });
        }
        FlushPendingInfo() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (void 0 === this.m_PendingInfoResolve) return;
            const e = this.m_PendingInfoResolve,
              t = Array.from(this.m_setPendingAppInfo),
              r = Array.from(this.m_setPendingPackageInfo),
              i = Array.from(this.m_setPendingBundleInfo),
              s = this.m_setPendingDataRequest;
            (this.m_PendingInfoPromise = void 0),
              (this.m_PendingInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              this.m_setPendingBundleInfo.clear(),
              this.m_setPendingPackageInfo.clear(),
              (this.m_setPendingDataRequest = {}),
              (this.m_PendingTimer = void 0),
              this.HintLoadStoreItems(void 0, t, r, i, s).then((t) => e(t));
          });
        }
        HintLoadStoreApps(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(null, e, null, null, t);
          });
        }
        HintLoadStorePackages(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(null, null, e, null, t);
          });
        }
        HintLoadStoreBundles(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(null, null, null, e, t);
          });
        }
        GetPreviousSupersetLoadPromise(e, t, r) {
          if (this.BHasStoreItem(e, t, r) || this.BIsStoreItemMissing(e, t))
            return this.k_AlreadyResolvedOK;
          let i = null;
          switch (t) {
            case 0:
              i = this.m_mapAppsInFlight.get(e);
              break;
            case 1:
              i = this.m_mapPackageInFlight.get(e);
              break;
            case 2:
              i = this.m_mapBundleInFlight.get(e);
          }
          return i && p.Z.BDataRequestContainsOtherDataRequest(i.dataRequest, r)
            ? i.promise
            : null;
        }
        HintLoadStoreItems(e, t, r, s, a) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            const n = new Promise((e) => (i = e));
            let o = [],
              l = [];
            (t || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, 0, a);
              if (t) l.push(t);
              else {
                o.push(u.oY.fromObject({ appid: e }));
                let t = b(this.GetStoreItemDataRequest(e, 0), a);
                const r = this.m_mapAppsInFlight.get(e);
                (t = b(null == r ? void 0 : r.dataRequest, t)),
                  r && l.push(r.promise),
                  this.m_mapAppsInFlight.set(e, {
                    promise: r ? y(r.promise, n) : n,
                    dataRequest: t,
                  });
              }
            }),
              (r || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(e, 1, a);
                if (t) l.push(t);
                else {
                  o.push(u.oY.fromObject({ packageid: e }));
                  let t = b(this.GetStoreItemDataRequest(e, 1), a);
                  const r = this.m_mapPackageInFlight.get(e);
                  (t = b(null == r ? void 0 : r.dataRequest, t)),
                    r && l.push(r.promise),
                    this.m_mapPackageInFlight.set(e, {
                      promise: r ? y(r.promise, n) : n,
                      dataRequest: t,
                    });
                }
              }),
              (s || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(e, 2, a);
                if (t) l.push(t);
                else {
                  o.push(u.oY.fromObject({ bundleid: e }));
                  let t = b(this.GetStoreItemDataRequest(e, 2), a);
                  const r = this.m_mapBundleInFlight.get(e);
                  (t = b(null == r ? void 0 : r.dataRequest, t)),
                    r && l.push(r.promise),
                    this.m_mapBundleInFlight.set(e, {
                      promise: r ? y(r.promise, n) : n,
                      dataRequest: t,
                    });
                }
              });
            let c = 1;
            if (
              (o.length > 0 &&
                (c = yield this.InternalHandleLoadStoreItems(e, o, a)),
              i(c),
              l.length > 0)
            ) {
              const e = yield Promise.all(l);
              for (const t of e) 1 != t && 1 == c && (c = t);
            }
            return (
              (t || []).forEach((e) => this.m_mapAppsInFlight.delete(e)),
              (r || []).forEach((e) => this.m_mapPackageInFlight.delete(e)),
              (s || []).forEach((e) => this.m_mapBundleInFlight.delete(e)),
              c
            );
          });
        }
        MarkStoreItemIDUnavailable(e) {
          (e || []).forEach((e) => {
            e.appid()
              ? (this.m_setUnavailableApps.add(e.appid()),
                this.m_mapApps.delete(e.appid()))
              : e.packageid()
              ? (this.m_setUnavailablePackages.add(e.packageid()),
                this.m_mapPackages.delete(e.packageid()))
              : e.bundleid() &&
                (this.m_setUnavailableBundles.add(e.bundleid()),
                this.m_mapBundles.delete(e.bundleid()));
          });
        }
        SortStoreItems(e) {
          let t = e.slice();
          return (
            t.sort((e, t) => {
              var r, i, s, a, n, o;
              let l = null !== (r = e.appid()) && void 0 !== r ? r : 0,
                u = null !== (i = t.appid()) && void 0 !== i ? i : 0;
              if (l != u) return l - u;
              let c = null !== (s = e.packageid()) && void 0 !== s ? s : 0,
                d = null !== (a = t.packageid()) && void 0 !== a ? a : 0;
              if (c != d) return c - d;
              let m = null !== (n = e.bundleid()) && void 0 !== n ? n : 0,
                _ = null !== (o = t.bundleid()) && void 0 !== o ? o : 0;
              return m != _ ? m - _ : 0;
            }),
            t
          );
        }
        InternalHandleLoadStoreItems(e, t, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = 1;
            e ||
              (this.GetSteamInterface() ||
                this.SetSteamInterface(new n.J(g.De.WEBAPI_BASE_URL)),
              (e = this.GetSteamInterface())),
              (t = this.SortStoreItems(t));
            const o = new Array();
            try {
              const n = [];
              for (; t.length > 0; ) {
                const i = t.splice(0, this.k_nMaxBatchSize);
                if ((o.push(i), this.m_bUsePartnerAPI)) {
                  const t = a.gA.Init(d);
                  t.Body().set_include_unpublished(!1);
                  const s = t.Body().request(!0);
                  s.set_context((0, h.Fq)(this.m_bUsePartnerAPI)),
                    s.set_data_request(u.Qn.fromObject(r)),
                    s.set_ids(i),
                    n.push(m.GetItems(e.GetServiceTransport(), t));
                } else {
                  const t = a.gA.Init(u.eK);
                  (0, h.pA)(t, this.m_bUsePartnerAPI),
                    (0, h.De)(t, r),
                    t.Body().set_ids(i),
                    n.push(u.VJ.GetItems(e.GetAnonymousServiceTransport(), t));
                }
              }
              (yield Promise.all(n)).forEach((e, a) => {
                1 == e.GetEResult()
                  ? e
                      .Body()
                      .store_items()
                      .forEach((e) => {
                        const t = e.id(),
                          i = e.item_type();
                        let s =
                            this.m_bReturnUnavailableItems && 15 == e.success(),
                          a =
                            1 == e.success() && !this.BIsStoreItemMissing(t, i);
                        if (s || a) this.ReadItem(e, r);
                        else {
                          switch (
                            ("dev" == g.De.WEB_UNIVERSE &&
                              console.warn(
                                `Failed to load ${t} type ${i} with error ${e.success()}`,
                                e
                              ),
                            i)
                          ) {
                            case 0:
                              this.m_setUnavailableApps.add(t),
                                this.m_mapApps.delete(t);
                              break;
                            case 1:
                              this.m_setUnavailablePackages.add(t),
                                this.m_mapPackages.delete(t);
                              break;
                            case 2:
                              this.m_setUnavailableBundles.add(t),
                                this.m_mapBundles.delete(t);
                              break;
                            default:
                              console.error(
                                "CStoreItemCache.InternalHandleLoadStoreItems unexpected item_type in response " +
                                  i +
                                  " " +
                                  t
                              );
                          }
                          if (e.unvailable_for_country_restriction())
                            switch (i) {
                              case 0:
                                this.m_setUnavailableDueToCountryRestrictionApps.add(
                                  t
                                );
                                break;
                              case 1:
                                this.m_setUnavailableDueToCountryRestrictionPackages.add(
                                  t
                                );
                                break;
                              case 2:
                                this.m_setUnavailableDueToCountryRestrictionBundles.add(
                                  t
                                );
                            }
                        }
                      })
                  : (console.error(
                      "CStoreItemCache::InternalHandleLoadStoreItems failed with eResult: " +
                        e.GetEResult() +
                        " message: " +
                        e.Hdr().error_message(),
                      (0, s.ZN)(t)
                    ),
                    (1 == e.Hdr().transport_error() || g.De.FROM_WEB) &&
                      this.MarkStoreItemIDUnavailable(o[a]),
                    1 == i && (i = e.GetEResult()));
              });
            } catch (e) {
              const t = (0, B.l)(e);
              return (
                console.error(
                  "CStoreItemCache::InternalHandleLoadStoreItems failed: " +
                    t.strErrorMsg,
                  t
                ),
                o.forEach((e) => this.MarkStoreItemIDUnavailable(e)),
                79
              );
            }
            return i;
          });
        }
        GetMapForType(e) {
          let t;
          switch (e) {
            case 0:
              t = this.m_mapApps;
              break;
            case 2:
              t = this.m_mapBundles;
              break;
            case 1:
              t = this.m_mapPackages;
              break;
            default:
              console.error("Invalid map type requested", e);
          }
          return t;
        }
        BHasStoreItem(e, t, r) {
          let i = this.GetMapForType(t);
          return Boolean(
            i && i.has(e) && (!r || i.get(e).BContainDataRequest(r))
          );
        }
        GetStoreItem(e, t) {
          if (-1 == t || 3 == t) return;
          const r = this.GetMapForType(t);
          return null == r ? void 0 : r.get(e);
        }
        GetStoreItemWithLegacyVisibilityCheck(e, t) {
          const r = this.GetStoreItem(e, t);
          return r && (this.m_bReturnUnavailableItems || r.BIsVisible())
            ? r
            : void 0;
        }
        GetStoreItemDataRequest(e, t) {
          var r, i;
          return (
            (null ===
              (i =
                null === (r = this.GetMapForType(t)) || void 0 === r
                  ? void 0
                  : r.get(e)) || void 0 === i
              ? void 0
              : i.GetDataRequest()) || null
          );
        }
        BHasApp(e, t) {
          return this.BHasStoreItem(e, 0, t);
        }
        GetApp(e) {
          return this.GetStoreItem(e, 0);
        }
        BHasPackage(e, t) {
          return this.BHasStoreItem(e, 1, t);
        }
        GetPackage(e) {
          return this.GetStoreItem(e, 1);
        }
        BHasBundle(e, t) {
          return this.BHasStoreItem(e, 2, t);
        }
        GetBundle(e) {
          return this.GetStoreItem(e, 2);
        }
        BIsStoreItemMissing(e, t) {
          switch (t) {
            case 0:
              return this.BIsAppMissing(e);
            case 1:
              return this.BIsPackageMissing(e);
            case 2:
              return this.BIsBundleMissing(e);
            default:
              return console.error("BStoreItemMissing invalid type", t), !0;
          }
        }
        BIsAppMissing(e) {
          return this.m_setUnavailableApps.has(e);
        }
        BIsPackageMissing(e) {
          return this.m_setUnavailablePackages.has(e);
        }
        BIsBundleMissing(e) {
          return this.m_setUnavailableBundles.has(e);
        }
        BIsStoreItemUnavailableDueToCountryRestriction(e, t) {
          switch (t) {
            case 0:
              return this.BIsAppUnavailableDueToCountryRestriction(e);
            case 1:
              return this.BIsPackageUnavailableDueToCountryRestriction(e);
            case 2:
              return this.BIsBundleUnavailableDueToCountryRestriction(e);
            default:
              return console.error("BStoreItemMissing invalid type", t), !0;
          }
        }
        BIsAppUnavailableDueToCountryRestriction(e) {
          return this.m_setUnavailableDueToCountryRestrictionApps.has(e);
        }
        BIsPackageUnavailableDueToCountryRestriction(e) {
          return this.m_setUnavailableDueToCountryRestrictionPackages.has(e);
        }
        BIsBundleUnavailableDueToCountryRestriction(e) {
          return this.m_setUnavailableDueToCountryRestrictionBundles.has(e);
        }
        ReadResults(e, t) {
          let r = [];
          for (const i of e) r.push(this.ReadItem(i, t));
          return r;
        }
        ReadItem(e, t) {
          const r = e.item_type();
          let i = null;
          switch (r) {
            case 0:
              i = this.m_mapApps;
              break;
            case 1:
              i = this.m_mapPackages;
              break;
            case 2:
              i = this.m_mapBundles;
              break;
            default:
              return console.error(`Invalid item type: ${r}`), null;
          }
          let s = i.get(e.id());
          return (
            s ? s.MergeData(e, t) : ((s = new p.Z(e, t)), i.set(e.id(), s)), s
          );
        }
      }
      (f.k_DataRequest_CommonOnly = {}),
        (f.k_DataRequest_BasicInfo = { include_basic_info: !0 }),
        (f.k_DataRequest_Assets = { include_assets: !0 }),
        (f.k_DataRequest_IncludeAll = {
          include_assets: !0,
          include_release: !0,
          include_platforms: !0,
          include_all_purchase_options: !0,
          include_screenshots: !0,
          include_trailers: !0,
          include_ratings: !0,
          include_tag_count: 20,
          include_reviews: !0,
          include_basic_info: !0,
          include_supported_languages: !0,
        });
    },
    73285: (e, t, r) => {
      r.d(t, {
        Ds: () => F,
        Hy: () => v,
        qE: () => R,
        TM: () => M,
        GV: () => w,
        $k: () => f,
      });
      r(92398);
      var i = r(33019),
        s = r(40110),
        a = r(990);
      const n = i.Message;
      class o extends n {
        constructor(e = null) {
          super(),
            o.prototype.gid || s.aR(o.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  gid: {
                    n: 1,
                    br: s.FE.readFixed64String,
                    bw: s.Xc.writeFixed64String,
                  },
                  title: { n: 2, br: s.FE.readString, bw: s.Xc.writeString },
                  type: { n: 3, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  visibility: { n: 4, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  priority: { n: 5, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  association_type: {
                    n: 6,
                    br: s.FE.readEnum,
                    bw: s.Xc.writeEnum,
                  },
                  associated_id: {
                    n: 7,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  associated_name: {
                    n: 8,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  start_date: {
                    n: 9,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  end_date: {
                    n: 10,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  country_allow: {
                    n: 11,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  country_deny: {
                    n: 12,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  ownership_restrictions_overridden: {
                    n: 13,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  must_own_appid: {
                    n: 14,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  must_not_own_appid: {
                    n: 15,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  must_own_packageid: {
                    n: 16,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  must_not_own_packageid: {
                    n: 17,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  must_have_launched_appid: {
                    n: 18,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  additional_restrictions: {
                    n: 19,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  template_type: {
                    n: 20,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  template_vars: {
                    n: 21,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  flags: { n: 22, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  creator_name: {
                    n: 23,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = s.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessageProto";
        }
      }
      class l extends n {
        constructor(e = null) {
          super(),
            l.prototype.gid || s.aR(l.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  gid: {
                    n: 1,
                    br: s.FE.readFixed64String,
                    bw: s.Xc.writeFixed64String,
                  },
                  title: { n: 2, br: s.FE.readString, bw: s.Xc.writeString },
                  type: { n: 3, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  associated_item_id: { n: 4, c: a.oY },
                  associated_item: { n: 5, c: a.VL },
                  associated_name: {
                    n: 6,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  template_type: {
                    n: 10,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  template_vars_json: {
                    n: 11,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = s.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDisplayMarketingMessage";
        }
      }
      class u extends n {
        constructor(e = null) {
          super(),
            u.prototype.messages || s.aR(u.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  messages: { n: 1, c: o, r: !0, q: !0 },
                  time_next_message_age: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetActiveMarketingMessages_Response";
        }
      }
      class c extends n {
        constructor(e = null) {
          super(),
            c.prototype.messages || s.aR(c.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: { messages: { n: 1, c: d, r: !0, q: !0 } },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Response";
        }
      }
      class d extends n {
        constructor(e = null) {
          super(),
            d.prototype.already_seen || s.aR(d.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  already_seen: { n: 1, br: s.FE.readBool, bw: s.Xc.writeBool },
                  message: { n: 2, c: l },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = s.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser";
        }
      }
      class m extends n {
        constructor(e = null) {
          super(),
            m.prototype.has_pending_messages || s.aR(m.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  has_pending_messages: {
                    n: 1,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  pending_message_count: {
                    n: 2,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = s.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Response";
        }
      }
      class _ extends n {
        constructor(e = null) {
          super(),
            _.prototype.message || s.aR(_.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = { proto: _, fields: { message: { n: 1, c: l } } }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = s.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetDisplayMarketingMessage_Response";
        }
      }
      class B extends n {
        constructor(e = null) {
          super(),
            B.prototype.message || s.aR(B.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = { proto: B, fields: { message: { n: 1, c: o } } }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = s.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessage_Response";
        }
      }
      class g extends n {
        constructor(e = null) {
          super(),
            g.prototype.messages || s.aR(g.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: { messages: { n: 1, c: o, r: !0, q: !0 } },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = s.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_FindMarketingMessages_Response";
        }
      }
      class h extends n {
        constructor(e = null) {
          super(),
            h.prototype.gid || s.aR(h.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  gid: {
                    n: 1,
                    br: s.FE.readFixed64String,
                    bw: s.Xc.writeFixed64String,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = s.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return s.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return s.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_CreateMarketingMessage_Response";
        }
      }
      class p extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new p();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_UpdateMarketingMessage_Response";
        }
      }
      class b extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new b();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DeleteMarketingMessage_Response";
        }
      }
      var y, f;
      function w(e) {
        return "app" == e ? 0 : "sub" == e ? 1 : 2;
      }
      function R(e) {
        switch (e) {
          case 0:
            return "app";
          case 2:
            return "bundle";
          case 1:
            return "package";
          case 3:
            return "mtx";
        }
        return "invalid";
      }
      function M(e) {
        switch (e) {
          case "sub":
            return 1;
          case "bundle":
            return 2;
          default:
            return 0;
        }
      }
      function F(e, t) {
        switch (e) {
          case 2:
            return "bundle";
          case 1:
            return "sub";
          default:
            switch (t) {
              case 0:
              default:
                return "game";
              case 12:
                return "beta";
              case 4:
                return "dlc";
              case 1:
                return "demo";
              case 6:
                return "software";
              case 7:
              case 3:
                return "video";
              case 10:
                return "hardware";
              case 11:
                return "music";
              case 13:
                return "tool";
              case 2:
                return "mod";
              case 9:
                return "episode";
              case 8:
                return "series";
            }
        }
      }
      function v(e) {
        switch (e) {
          case 2:
            return "bundle";
          case 1:
            return "sub";
          default:
            return "app";
        }
      }
      !(function (e) {
        (e.GetActiveMarketingMessages = function (e, t) {
          return e.SendMsg(
            "MarketingMessages.GetActiveMarketingMessages#1",
            t,
            u,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 }
          );
        }),
          (e.GetMarketingMessagesForUser = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessagesForUser#1",
              t,
              c,
              { bConstMethod: !0, ePrivilege: 1 }
            );
          }),
          (e.DoesUserHavePendingMarketingMessages = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.DoesUserHavePendingMarketingMessages#1",
              t,
              m,
              { bConstMethod: !0, ePrivilege: 1 }
            );
          }),
          (e.GetDisplayMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessage#1",
              t,
              _,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.GetDisplayMarketingMessageAdmin = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessageAdmin#1",
              t,
              _,
              { bConstMethod: !0, ePrivilege: 4 }
            );
          }),
          (e.MarkMessageSeen = function (e, t) {
            return e.SendNotification(
              "MarketingMessages.MarkMessageSeen#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.GetMarketingMessage = function (e, t) {
            return e.SendMsg("MarketingMessages.GetMarketingMessage#1", t, B, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.CreateMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.CreateMarketingMessage#1",
              t,
              h,
              { ePrivilege: 4 }
            );
          }),
          (e.UpdateMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.UpdateMarketingMessage#1",
              t,
              p,
              { ePrivilege: 4 }
            );
          }),
          (e.DeleteMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.DeleteMarketingMessage#1",
              t,
              b,
              { ePrivilege: 4 }
            );
          }),
          (e.FindMarketingMessages = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.FindMarketingMessages#1",
              t,
              g,
              { ePrivilege: 4 }
            );
          });
      })(y || (y = {})),
        (function (e) {
          (e[(e.k_NotRejected = -1)] = "k_NotRejected"),
            (e[(e.k_RejectNoMainCap = 0)] = "k_RejectNoMainCap"),
            (e[(e.k_RejectWrongPlatform = 1)] = "k_RejectWrongPlatform"),
            (e[(e.k_RejectNoComingSoon = 2)] = "k_RejectNoComingSoon"),
            (e[(e.k_RejectNoVR = 3)] = "k_RejectNoVR"),
            (e[(e.k_RejectCreatorClan = 4)] = "k_RejectCreatorClan"),
            (e[(e.k_RejectIgnoredGame = 5)] = "k_RejectIgnoredGame"),
            (e[(e.k_RejectSupportedLanguage = 6)] =
              "k_RejectSupportedLanguage"),
            (e[(e.k_RejectNotLoaded = 7)] = "k_RejectNotLoaded"),
            (e[(e.k_RejectIgnoreGameTags = 8)] = "k_RejectIgnoreGameTags"),
            (e[(e.k_RejectIgnoreContentDescriptors = 9)] =
              "k_RejectIgnoreContentDescriptors"),
            (e[(e.k_RejectEarlyAccess = 10)] = "k_RejectEarlyAccess"),
            (e[(e.k_RejectSoftware = 11)] = "k_RejectSoftware"),
            (e[(e.k_RejectDLC = 12)] = "k_RejectDLC"),
            (e[(e.k_RejectInLibrary = 13)] = "k_RejectInLibrary"),
            (e[(e.k_RejectNotInLibrary = 14)] = "k_RejectNotInLibrary"),
            (e[(e.k_RejectVideo = 15)] = "k_RejectVideo"),
            (e[(e.k_RejectNoDiscount = 16)] = "k_RejectNoDiscount"),
            (e[(e.k_RejectAlreadyDisplayed = 17)] = "k_RejectAlreadyDisplayed");
        })(f || (f = {}));
    },
    52114: (e, t, r) => {
      r.d(t, {
        Vm: () => d,
        ie: () => c,
        jk: () => l,
        vs: () => u,
        wZ: () => _,
      });
      var i = r(9669),
        s = r.n(i),
        a = r(67294),
        n = (r(49727), r(92398), r(990), r(64839)),
        o = (r(14146), r(159));
      function l(e, t, r, i) {
        const n = (0, a.useRef)(),
          l = (0, a.useRef)(void 0);
        n.current = e;
        const [u, c] = (0, a.useState)(void 0),
          {
            include_assets: d,
            include_release: m,
            include_platforms: _,
            include_all_purchase_options: B,
            include_screenshots: g,
            include_trailers: h,
            include_ratings: p,
            include_tag_count: b,
            include_reviews: y,
            include_basic_info: f,
            include_supported_languages: w,
          } = r;
        if (
          ((0, a.useEffect)(() => {
            const r = {
              include_assets: d,
              include_release: m,
              include_platforms: _,
              include_all_purchase_options: B,
              include_screenshots: g,
              include_trailers: h,
              include_ratings: p,
              include_tag_count: b,
              include_reviews: y,
              include_basic_info: f,
              include_supported_languages: w,
            };
            if (
              !e ||
              o.Z.Get().BHasStoreItem(e, t, r) ||
              (void 0 !== u && i == l.current)
            )
              return;
            i !== l.current && (c(void 0), (l.current = i));
            const a = s().CancelToken.source();
            return (
              o.Z.Get()
                .QueueStoreItemRequest(e, t, r)
                .then((t) => {
                  a.token.reason || n.current !== e || c(1 == t);
                }),
              () => a.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, i, u, d, m, _, B, g, h, p, b, y, f, w]),
          !e)
        )
          return [null, 2];
        if (!1 === u) return [void 0, 2];
        if (o.Z.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!o.Z.Get().BHasStoreItem(e, t, r)) return [void 0, 1];
        const R = o.Z.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return R ? [R, 3] : [null, 2];
      }
      function u(e, t, r) {
        return l(e, 0, t, r);
      }
      function c(e, t, r) {
        return l(e, 1, t, r);
      }
      function d(e, t, r) {
        const [i, n] = l(e, t, r),
          [o, c] = (0, a.useState)(null),
          [d, m] = u(o, r);
        return (
          (0, a.useEffect)(() => {
            var e;
            const t = s().CancelToken.source();
            if (
              1 == (null == i ? void 0 : i.GetStoreItemType()) &&
              1 == (null == i ? void 0 : i.GetIncludedAppIDs().length)
            ) {
              const r = i.GetIncludedAppIDs()[0];
              o != r &&
                ((null === (e = null == t ? void 0 : t.token) || void 0 === e
                  ? void 0
                  : e.reason) ||
                  c(r));
            }
            return () =>
              t.cancel("useStoreItemCacheOrPackageSingleApp: unmounting");
          }, [o, i]),
          o ? [d, m] : [i, n]
        );
      }
      function m(e, t, r, i) {
        const l = (0, n.NW)(),
          {
            include_assets: u,
            include_release: c,
            include_platforms: d,
            include_all_purchase_options: m,
            include_screenshots: _,
            include_trailers: B,
            include_ratings: g,
            include_tag_count: h,
            include_reviews: p,
            include_basic_info: b,
            include_supported_languages: y,
          } = r;
        if (
          ((0, a.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const r = {
                include_assets: u,
                include_release: c,
                include_platforms: d,
                include_all_purchase_options: m,
                include_screenshots: _,
                include_trailers: B,
                include_ratings: g,
                include_tag_count: h,
                include_reviews: p,
                include_basic_info: b,
                include_supported_languages: y,
              },
              i = e.filter(
                (e) =>
                  !(
                    o.Z.Get().BHasStoreItem(e, t, r) ||
                    o.Z.Get().BIsStoreItemMissing(e, t)
                  )
              );
            if (0 == i.length) return;
            const a = s().CancelToken.source(),
              n = i.map((e) => o.Z.Get().QueueStoreItemRequest(e, t, r));
            return (
              Promise.all(n).then(() => {
                a.token.reason || l();
              }),
              () => a.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, i, l, u, c, d, m, _, B, g, h, p, b, y]),
          !e)
        )
          return 2;
        if (
          !e.every(
            (e) =>
              o.Z.Get().BHasStoreItem(e, t, r) ||
              o.Z.Get().BIsStoreItemMissing(e, t)
          )
        )
          return 1;
        return e.every((e) =>
          o.Z.Get().GetStoreItemWithLegacyVisibilityCheck(e, t)
        )
          ? 3
          : 2;
      }
      function _(e, t, r) {
        return m(e, 0, t, r);
      }
    },
    93976: (e, t, r) => {
      r.d(t, { l: () => n });
      r(26149);
      var i = r(9669),
        s = r.n(i),
        a = r(58114);
      function n(e) {
        if (s().isCancel(e))
          return { strErrorMsg: "Action Cancelled:" + e, errorCode: 52 };
        if (
          void 0 !== e.response &&
          e.response.data &&
          "object" == typeof e.response.data
        ) {
          if ("msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.msg,
              errorCode: e.response.data.success,
            };
          if ("err_msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.err_msg,
              errorCode: e.response.data.success,
            };
          if ("message" in e.response.data)
            return {
              strErrorMsg: e.response.data.message,
              errorCode: e.response.data.success,
            };
        } else if ("object" == typeof e.data) {
          if ("msg" in e.data)
            return { strErrorMsg: e.data.msg, errorCode: e.data.success };
          if ("err_msg" in e.data)
            return { strErrorMsg: e.data.err_msg, errorCode: e.data.success };
          if ("message" in e.response.data)
            return { strErrorMsg: e.data.message, errorCode: e.data.success };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: "
            ),
              console.error(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof a.gA)
              return {
                strErrorMsg: "" + e.GetEResult(),
                errorCode: e.GetEResult(),
              };
            console.error("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
          }
        }
        return "object" == typeof e && "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: 2,
            }
          : { strErrorMsg: "Unknown Error: " + e, errorCode: 2 };
      }
    },
  },
]);
