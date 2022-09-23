/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9920],
  {
    49727: (e, t, r) => {
      r.d(t, {
        A1: () => d,
        NO: () => h,
        UC: () => m,
        Z6: () => p,
        iP: () => l,
        p8: () => _,
        pA: () => c,
        yp: () => o,
      });
      var s = r(67294),
        i = r(26149),
        n = r(90666),
        a = r(99663);
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
        ],
        c = o.filter((e) => -1 == u.indexOf(e)),
        d = "{STEAM_CLAN_IMAGE}",
        m = "{STEAM_CLAN_LOC_IMAGE}";
      function _(e, t = null, r = " ") {
        let s = null == t ? void 0 : t.join("|");
        s || (s = o.join("|") + "|\\*");
        let i = new RegExp("\\[(" + s + ")\\b[^\\]]*\\].*?\\[/\\1\\]", "gi");
        return e.replace(i, r);
      }
      function h(e, t = null, r = "") {
        let s = null == t ? void 0 : t.join("|");
        s || (s = o.join("|") + "|\\*");
        let i = "\\[\\/?(?:" + s + "){1,}.*?]";
        return e.replace(new RegExp(i, "gi"), r);
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
                s = "",
                i = 0,
                n = 0;
              "=" == e[0] && (i = 2);
              let a = !1;
              for (n++; n < e.length; n++) {
                let o = e[n],
                  l = !0,
                  u = !1;
                switch (i) {
                  case 0:
                    if ("=" == o) return {};
                    if (" " == o) continue;
                    i = 1;
                    break;
                  case 1:
                    ("=" != o && " " != o) ||
                      a ||
                      (" " == o ? ((i = 0), (u = !0)) : (i = 2), (l = !1));
                    break;
                  case 2:
                    " " == o
                      ? ((i = 0), (l = !1), (u = !0))
                      : '"' == o
                      ? ((i = 4), (l = !1))
                      : (i = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == o && 4 != i && !a) ||
                      ('"' == o && 4 == i && !a)) &&
                      ((i = 0), (l = !1), (u = !0));
                }
                if (l)
                  if ("\\" != o || a)
                    if (((a = !1), 1 == i)) r += o;
                    else {
                      if (3 != i && 4 != i)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + i
                        );
                      s += o;
                    }
                  else a = !0;
                u && ((t[r] = s), (r = ""), (s = ""));
              }
              0 != i && (t[r] = s);
              return t;
            })(r);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        let s = new B();
        return (s.type = r), s;
      }
      class p {
        constructor(e, t = () => new a.LT(), r) {
          (this.m_dictComponents = void 0),
            (this.m_dictComponents = e),
            (this.m_fnAccumulatorFactory = t),
            (this.m_renderingLanguage = r || (0, i.jM)(n.De.LANGUAGE));
        }
        UpdateOverrideLanguage(e) {
          this.m_renderingLanguage = e || (0, i.jM)(n.De.LANGUAGE);
        }
        ParseBBCode(e, t, r = !1) {
          const s = (function (e, t) {
            const r = [];
            let s = new B(),
              i = !1,
              n = !1,
              a = !1;
            for (let o = 0; o < e.length; o++) {
              let l = e[o];
              switch (s.type) {
                case 0:
                  "[" == l
                    ? ((s.type = 2), (n = !0))
                    : ((s.type = 1), "\\" == l && t ? (i = !i) : (s.text += l));
                  break;
                case 2:
                case 3:
                  if ("/" == l && n) (s.type = 3), (s.text = ""), (n = !1);
                  else if ("[" != l || i)
                    if ("]" != l || i)
                      "\\" == l && t
                        ? ((s.text += l), (i = !i), (n = !1))
                        : ((s.text += l), (i = !1), (n = !1));
                    else {
                      const e =
                          2 == s.type &&
                          "noparse" == s.text.toLocaleLowerCase(),
                        t =
                          3 == s.type &&
                          "noparse" == s.text.toLocaleLowerCase();
                      n || (a && !t)
                        ? (s.ConvertMalformedNodeToText(), (s.text += l))
                        : e
                        ? (a = !0)
                        : t && (a = !1),
                        (s = g(r, s)),
                        (n = !1);
                    }
                  else
                    s.ConvertMalformedNodeToText(), (s = g(r, s, 2)), (n = !0);
                  break;
                case 1:
                  "[" != l || i
                    ? "\\" == l && t
                      ? (i && (s.text += l), (i = !i))
                      : (i && ((s.text += "\\"), (i = !1)), (s.text += l))
                    : ((s = g(r, s, 2)), (n = !0));
              }
            }
            return (
              0 != s.type &&
                ((2 != s.type && 3 != s.type) || s.ConvertMalformedNodeToText(),
                r.push(s)),
              r
            );
          })(e, r);
          return this.Parse_BuildReactComponents(s, t);
        }
        Parse_BuildReactComponents(e, t) {
          let r = this.m_fnAccumulatorFactory(void 0),
            i = [],
            n = function () {
              return i.length < 1 ? void 0 : i[i.length - 1];
            },
            a = this.m_dictComponents,
            o = this.m_renderingLanguage,
            l = !1,
            u = !0,
            c = function (e, n, c) {
              if (e && e.node.tag === n.text && a.get(e.node.tag)) {
                const n = a.get(e.node.tag),
                  d = i.map((e) => e.node.tag),
                  m = {
                    context: t,
                    parentTags: d,
                    tagname: e.node.tag,
                    args: e.node.args,
                    language: o,
                    key: `${e.node.tag}_${c}`,
                  },
                  _ = s.createElement(n.Constructor, m, ...r.GetElements());
                (r = e.accumulator),
                  r.AppendNode(_),
                  (l = n.skipFollowingNewline),
                  (u = e.bWrapTextForCopying);
              } else if (e) {
                let t = e.accumulator;
                t.AppendText("[" + e.node.text + "]", !1),
                  r.GetElements().forEach((e) => t.AppendNode(e)),
                  t.AppendText("[/" + n.text + "]", !1),
                  (r = t),
                  (u = e.bWrapTextForCopying);
              }
            };
          for (
            e.forEach((e, t) => {
              var s, o;
              if (1 == e.type) {
                const t = l ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                r.AppendText(t, u), (l = !1);
              } else if (2 == e.type) {
                const o = a.get(e.tag);
                if (o) {
                  const d = n();
                  if (void 0 !== d) {
                    const r = a.get(d.node.tag);
                    r &&
                      r.autocloses &&
                      e.tag === d.node.tag &&
                      c(i.pop(), d.node, t);
                  }
                  i.push({ accumulator: r, node: e, bWrapTextForCopying: u }),
                    (r = this.m_fnAccumulatorFactory(e)),
                    (l = o.skipInternalNewline),
                    (u =
                      null !== (s = o.allowWrapTextForCopying) &&
                      void 0 !== s &&
                      s);
                } else r.AppendText("[" + e.text + "]", 0 == i.length);
              } else if (3 == e.type) {
                for (
                  ;
                  n() &&
                  n().node.tag !== e.text &&
                  a.get(n().node.tag) &&
                  a.get(n().node.tag).autocloses;

                ) {
                  const e = i.pop();
                  c(e, e.node, t);
                }
                if (
                  (null === (o = n()) || void 0 === o ? void 0 : o.node.tag) ==
                  e.text
                ) {
                  const r = i.pop();
                  c(r, e, t);
                } else r.AppendText("[/" + e.text + "]", 0 == i.length);
              }
            });
            i.length > 0;

          ) {
            let e = i.pop(),
              t = e.accumulator;
            t.AppendText("[" + e.node.text + "]", !1),
              r.GetElements().forEach((e) => t.AppendNode(e)),
              (r = t);
          }
          let d = r.GetElements();
          return d.length > 1
            ? s.createElement(s.Fragment, null, ...d)
            : 1 == d.length
            ? d[0]
            : null;
        }
      }
      class B {
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
      r.d(t, { DX: () => a, LT: () => n, So: () => o });
      var s = r(67294),
        i = r(77520);
      r(49727);
      class n {
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
          (0, i.X)(e, "decorated accumulator cannot be null"),
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
      class o extends a {
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
              r.push(s.createElement("br")),
              (t = t.substr(e + 1));
          t.length && r.push(t),
            r.forEach((e) => {
              super.AppendNode(e);
            });
        }
      }
    },
    87931: (e, t, r) => {
      r.d(t, { $2: () => c, Ax: () => p, e8: () => _ });
      var s = r(33019),
        i = r(40110),
        n = (r(13328), r(990));
      const a = s.Message;
      class o extends a {
        constructor(e = null) {
          super(),
            o.prototype.released_only || i.aR(o.M()),
            a.initialize(this, e, 0, -1, [10, 11, 15, 16], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  released_only: {
                    n: 1,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  coming_soon_only: {
                    n: 2,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  type_filters: { n: 3, c: l },
                  tagids_must_match: { n: 10, c: u, r: !0, q: !0 },
                  tagids_exclude: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: i.FE.readInt32,
                    bw: i.Xc.writeRepeatedInt32,
                  },
                  content_descriptors_must_match: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeRepeatedEnum,
                  },
                  content_descriptors_excluded: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeRepeatedEnum,
                  },
                  regional_top_n_sellers: {
                    n: 40,
                    br: i.FE.readInt32,
                    bw: i.Xc.writeInt32,
                  },
                  global_top_n_sellers: {
                    n: 41,
                    br: i.FE.readInt32,
                    bw: i.Xc.writeInt32,
                  },
                  regional_long_term_top_n_sellers: {
                    n: 42,
                    br: i.FE.readInt32,
                    bw: i.Xc.writeInt32,
                  },
                  global_long_term_top_n_sellers: {
                    n: 43,
                    br: i.FE.readInt32,
                    bw: i.Xc.writeInt32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = i.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters";
        }
      }
      class l extends a {
        constructor(e = null) {
          super(),
            l.prototype.include_apps || i.aR(l.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  include_apps: { n: 1, br: i.FE.readBool, bw: i.Xc.writeBool },
                  include_packages: {
                    n: 2,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  include_bundles: {
                    n: 3,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  include_games: {
                    n: 10,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  include_demos: {
                    n: 11,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  include_mods: {
                    n: 12,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  include_dlc: { n: 13, br: i.FE.readBool, bw: i.Xc.writeBool },
                  include_software: {
                    n: 14,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  include_video: {
                    n: 15,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  include_hardware: {
                    n: 16,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  include_series: {
                    n: 17,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  include_music: {
                    n: 18,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = i.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters_TypeFilters";
        }
      }
      class u extends a {
        constructor(e = null) {
          super(),
            u.prototype.tagids || i.aR(u.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  tagids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: i.FE.readInt32,
                    bw: i.Xc.writeRepeatedInt32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = i.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters_TagFilter";
        }
      }
      class c extends a {
        constructor(e = null) {
          super(),
            c.prototype.start || i.aR(c.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  start: {
                    n: 1,
                    d: 0,
                    br: i.FE.readInt32,
                    bw: i.Xc.writeInt32,
                  },
                  count: {
                    n: 2,
                    d: 10,
                    br: i.FE.readInt32,
                    bw: i.Xc.writeInt32,
                  },
                  sort: { n: 10, d: 0, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  filters: { n: 20, c: o },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = i.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryParams";
        }
      }
      class d extends a {
        constructor(e = null) {
          super(),
            d.prototype.id || i.aR(d.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  id: { n: 1, c: n.oY },
                  score: { n: 2, br: i.FE.readDouble, bw: i.Xc.writeDouble },
                  spellcheck_generated_result: {
                    n: 3,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = i.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryPerResultMetadata";
        }
      }
      class m extends a {
        constructor(e = null) {
          super(),
            m.prototype.total_matching_records || i.aR(m.M()),
            a.initialize(this, e, 0, -1, [4, 5], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  total_matching_records: {
                    n: 1,
                    br: i.FE.readInt32,
                    bw: i.Xc.writeInt32,
                  },
                  start: { n: 2, br: i.FE.readInt32, bw: i.Xc.writeInt32 },
                  count: { n: 3, br: i.FE.readInt32, bw: i.Xc.writeInt32 },
                  per_result_metadata: { n: 4, c: d, r: !0, q: !0 },
                  spellcheck_suggestions: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: i.FE.readString,
                    bw: i.Xc.writeRepeatedString,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = i.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryResultMetadata";
        }
      }
      class _ extends a {
        constructor(e = null) {
          super(),
            _.prototype.query_name || i.aR(_.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  query_name: {
                    n: 1,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  query: { n: 2, c },
                  context: { n: 3, c: n.WJ },
                  data_request: { n: 4, c: n.Qn },
                  override_country_code: {
                    n: 5,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = i.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_Query_Request";
        }
      }
      class h extends a {
        constructor(e = null) {
          super(),
            h.prototype.metadata || i.aR(h.M()),
            a.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  metadata: { n: 1, c: m },
                  ids: { n: 2, c: n.oY, r: !0, q: !0 },
                  store_items: { n: 3, c: n.VL, r: !0, q: !0 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = i.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_Query_Response";
        }
      }
      class g extends a {
        constructor(e = null) {
          super(),
            g.prototype.metadata || i.aR(g.M()),
            a.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  metadata: { n: 1, c: m },
                  ids: { n: 2, c: n.oY, r: !0, q: !0 },
                  store_items: { n: 3, c: n.VL, r: !0, q: !0 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = i.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_SearchSuggestions_Response";
        }
      }
      var p;
      !(function (e) {
        (e.Query = function (e, t) {
          return e.SendMsg("StoreQuery.Query#1", t, h, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.SearchSuggestions = function (e, t) {
            return e.SendMsg("StoreQuery.SearchSuggestions#1", t, g, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(p || (p = {}));
    },
    32367: (e, t, r) => {
      r.d(t, { De: () => l, Fq: () => o, pA: () => a });
      var s = r(990),
        i = r(90666),
        n = (r(33019), r(58114), r(54698));
      r(87931);
      function a(e, t) {
        e.Body().set_context(o(t));
      }
      function o(e) {
        let t = new s.WJ();
        return (
          e || t.set_country_code(i.De.COUNTRY),
          t.set_language(i.De.LANGUAGE),
          i.De.EREALM != n.IN.k_ESteamRealmUnknown &&
            t.set_steam_realm(i.De.EREALM),
          t
        );
      }
      function l(e, t) {
        e.Body().set_data_request(s.Qn.fromObject(t));
      }
    },
    14146: (e, t, r) => {
      r.d(t, { Z: () => c });
      var s = r(22188),
        i = (r(26149), r(54698), r(13328), r(990), r(73285)),
        n = r(77520),
        a = r(41311),
        o = r(74891),
        l = r(90666);
      function u(e) {
        return (function (e, t, r) {
          switch (e) {
            case "date_full":
              return (0, a.vX)(t);
            case "date_month":
              return (0, o.LO)(new Date(1e3 * t));
            case "date_quarter":
              return (0, o.Kb)(new Date(1e3 * t));
            case "date_year":
              return (0, o.Np)(new Date(1e3 * t));
            case "text_comingsoon":
              return r || (0, a.Xx)("#Store_ComingSoon_ComingSoon");
            case "text_tba":
              return r || (0, a.Xx)("#Store_ComingSoon_TBA");
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
          var r, s, i;
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
              null === (s = e.best_purchase_option()) || void 0 === s
                ? void 0
                : s.toObject()),
            (this.m_strStoreURLPathOverride = e.store_url_path_override()),
            (this.m_freeWeekend =
              null === (i = e.free_weekend()) || void 0 === i
                ? void 0
                : i.toObject()),
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
            (0, n.X)(
              this.BContainDataRequest(e),
              `Requested data without for ${(0, i.qE)(this.m_eItemType)} @ ${
                this.m_unID
              }`,
              (0, s.ZN)(e),
              (0, s.ZN)(this.m_DataRequested)
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
          var e, t, r, s;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null !==
              (s =
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
            void 0 !== s
              ? s
              : []
          );
        }
        GetFranchiseNames() {
          var e, t, r, s;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null !==
              (s =
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
            void 0 !== s
              ? s
              : []
          );
        }
        GetPublisherNames() {
          var e, t, r, s;
          this.BCheckDataRequestIncluded({ include_basic_info: !0 });
          const i =
            null !==
              (s =
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
            void 0 !== s
              ? s
              : [];
          return (null == i ? void 0 : i.length) > 0
            ? i
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
          let s =
            null === (t = this.m_ReleaseInfo) || void 0 === t
              ? void 0
              : t.steam_release_date;
          return (
            s ||
              (s =
                null === (r = this.m_ReleaseInfo) || void 0 === r
                  ? void 0
                  : r.original_release_date),
            s
          );
        }
        GetFormattedSteamReleaseDate() {
          var e;
          if (
            (this.BCheckDataRequestIncluded({ include_release: !0 }),
            this.m_ReleaseInfo.is_coming_soon &&
              this.m_ReleaseInfo.coming_soon_display)
          )
            return u(this.m_ReleaseInfo);
          const t = this.GetReleaseDateRTime();
          return (
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.is_abridged_release_date
          )
            ? t
              ? (0, o.LO)(new Date(1e3 * t))
              : ""
            : t
            ? (0, a.vX)(t)
            : "";
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
          return (
            this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
            this.m_rgSupportedLanguages.some(
              (t) =>
                t.elanguage == e && (t.supported || t.subtitles || t.full_audio)
            )
          );
        }
        GetAllLanguagesWithSomeSupport() {
          return (
            this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
            this.m_rgSupportedLanguages
              .filter((e) => e.supported || e.subtitles || e.full_audio)
              .map((e) => e.elanguage)
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
                let t = new h(e);
                this.m_mapTrailer.set(t.GetTrailerID(), t),
                  this.m_higherTrailers.push(t);
              }),
            e.other_trailers() &&
              e.other_trailers().forEach((e) => {
                let t = new h(e);
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
      class h {
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
          const s = e.all_ages_screenshots() || [],
            i = e.mature_content_screenshots() || [];
          for (; t < s.length || r < i.length; ) {
            let e = t < s.length;
            if (t < s.length && r < i.length) {
              e = s[t].ordinal() < i[r].ordinal();
            }
            if (e) {
              const e = l.De.MEDIA_CDN_URL + s[t].filename();
              this.m_rgAllScreenshots.push(e),
                this.m_rgOnlyAllAgesScreenshots.push(e),
                (t += 1);
            } else {
              const e = l.De.MEDIA_CDN_URL + i[r].filename();
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
      r.d(t, { Z: () => y });
      var s = r(70655),
        i = r(22188),
        n = (r(26149), r(54698), r(58114)),
        a = r(65902),
        o = r(33019),
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
        h = r(93976),
        g = r(90666),
        p = r(32367),
        B = r(14146);
      function f(e, t) {
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
          include_tag_count: Math.max(
            e.include_tag_count || 0,
            t.include_tag_count || 0
          ),
          include_reviews: e.include_reviews || t.include_reviews,
          include_basic_info: e.include_basic_info || t.include_basic_info,
          include_supported_languages:
            e.include_supported_languages || t.include_supported_languages,
        };
      }
      function b(e, t) {
        return (0, s.mG)(this, void 0, void 0, function* () {
          const r = yield e,
            s = yield t;
          return 1 != r ? r : s;
        });
      }
      class y {
        constructor() {
          (this.k_QueueWaitUntilRequestMS = 5),
            (this.k_nMaxBatchSize = 250),
            (this.m_mapApps = new Map()),
            (this.m_mapPackages = new Map()),
            (this.m_mapBundles = new Map()),
            (this.m_setUnavailableApps = new Set()),
            (this.m_setUnavailablePackages = new Set()),
            (this.m_setUnavailableBundles = new Set()),
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
            y.sm_instance ||
              ((y.sm_instance = new y()),
              (window.StoreItemCache = y.sm_instance)),
            y.sm_instance
          );
        }
        static Initialize(e, t) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            (0, _.X)(
              !y.Get().m_bInitialized,
              "CStoreItemCache was already initialized; initialize it only once."
            ),
              (y.Get().m_SteamInterface = e),
              (y.Get().m_bUsePartnerAPI = !!t),
              (y.Get().m_bInitialized = !0);
          });
        }
        GetSteamInterface() {
          return this.m_SteamInterface;
        }
        SetSteamInterface(e) {
          this.m_SteamInterface = e;
        }
        ResetCache() {
          return (0, s.mG)(this, void 0, void 0, function* () {
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
          return y.Get().m_bInitialized;
        }
        QueueAppRequest(e, t) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 0, t);
          });
        }
        QueuePackageRequest(e, t) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 1, t);
          });
        }
        QueueBundleRequest(e, t) {
          return (0, s.mG)(this, void 0, void 0, function* () {
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
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const r = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 0, t))
            )).filter((e) => 1 != e);
            return r.length > 0 ? r[0] : 1;
          });
        }
        QueueMultiplePackageRequests(e, t) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const r = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 1, t))
            )).filter((e) => 1 != e);
            return r.length > 0 ? r[0] : 1;
          });
        }
        QueueMultipleBundleRequests(e, t) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const r = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 2, t))
            )).filter((e) => 1 != e);
            return r.length > 0 ? r[0] : 1;
          });
        }
        QueueMultipleStoreItemRequests(e, t, r) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const s = (yield Promise.all(
              e.map((e, s) => this.QueueStoreItemRequest(e, t[s], r))
            )).filter((e) => 1 != e);
            return s.length > 0 ? s[0] : 1;
          });
        }
        QueueStoreItemRequest(e, t, r) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (
              ((0, _.X)(
                y.ValidateDataRequest(r),
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
            const s = this.GetPreviousSupersetLoadPromise(e, t, r);
            if (s) return s;
            switch (
              (this.m_PendingInfoPromise ||
                ((this.m_PendingInfoPromise = new Promise(
                  (e) => (this.m_PendingInfoResolve = e)
                )),
                (this.m_PendingTimer = window.setTimeout(
                  () => this.FlushPendingInfo(),
                  this.k_QueueWaitUntilRequestMS
                ))),
              (this.m_setPendingDataRequest = f(
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
            const i = this.m_PendingInfoPromise;
            return (
              this.m_setPendingAppInfo.size +
                this.m_setPendingPackageInfo.size +
                this.m_setPendingBundleInfo.size >=
                this.k_nMaxBatchSize &&
                (this.m_PendingTimer &&
                  window.clearTimeout(this.m_PendingTimer),
                this.FlushPendingInfo()),
              i
            );
          });
        }
        FlushPendingInfo() {
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (void 0 === this.m_PendingInfoResolve) return;
            const e = this.m_PendingInfoResolve,
              t = Array.from(this.m_setPendingAppInfo),
              r = Array.from(this.m_setPendingPackageInfo),
              s = Array.from(this.m_setPendingBundleInfo),
              i = this.m_setPendingDataRequest;
            (this.m_PendingInfoPromise = void 0),
              (this.m_PendingInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              this.m_setPendingBundleInfo.clear(),
              this.m_setPendingPackageInfo.clear(),
              (this.m_setPendingDataRequest = {}),
              (this.m_PendingTimer = void 0),
              this.HintLoadStoreItems(void 0, t, r, s, i).then((t) => e(t));
          });
        }
        HintLoadStoreApps(e, t) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(null, e, null, null, t);
          });
        }
        HintLoadStorePackages(e, t) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(null, null, e, null, t);
          });
        }
        HintLoadStoreBundles(e, t) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(null, null, null, e, t);
          });
        }
        GetPreviousSupersetLoadPromise(e, t, r) {
          if (this.BHasStoreItem(e, t, r) || this.BIsStoreItemMissing(e, t))
            return this.k_AlreadyResolvedOK;
          let s = null;
          switch (t) {
            case 0:
              s = this.m_mapAppsInFlight.get(e);
              break;
            case 1:
              s = this.m_mapPackageInFlight.get(e);
              break;
            case 2:
              s = this.m_mapBundleInFlight.get(e);
          }
          return s && B.Z.BDataRequestContainsOtherDataRequest(s.dataRequest, r)
            ? s.promise
            : null;
        }
        HintLoadStoreItems(e, t, r, i, n) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            let s = null;
            const a = new Promise((e) => (s = e));
            let o = [],
              l = [];
            (t || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, 0, n);
              if (t) l.push(t);
              else {
                o.push(u.oY.fromObject({ appid: e }));
                let t = f(this.GetStoreItemDataRequest(e, 0), n);
                const r = this.m_mapAppsInFlight.get(e);
                (t = f(null == r ? void 0 : r.dataRequest, t)),
                  r && l.push(r.promise),
                  this.m_mapAppsInFlight.set(e, {
                    promise: r ? b(r.promise, a) : a,
                    dataRequest: t,
                  });
              }
            }),
              (r || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(e, 1, n);
                if (t) l.push(t);
                else {
                  o.push(u.oY.fromObject({ packageid: e }));
                  let t = f(this.GetStoreItemDataRequest(e, 1), n);
                  const r = this.m_mapPackageInFlight.get(e);
                  (t = f(null == r ? void 0 : r.dataRequest, t)),
                    r && l.push(r.promise),
                    this.m_mapPackageInFlight.set(e, {
                      promise: r ? b(r.promise, a) : a,
                      dataRequest: t,
                    });
                }
              }),
              (i || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(e, 2, n);
                if (t) l.push(t);
                else {
                  o.push(u.oY.fromObject({ bundleid: e }));
                  let t = f(this.GetStoreItemDataRequest(e, 2), n);
                  const r = this.m_mapBundleInFlight.get(e);
                  (t = f(null == r ? void 0 : r.dataRequest, t)),
                    r && l.push(r.promise),
                    this.m_mapBundleInFlight.set(e, {
                      promise: r ? b(r.promise, a) : a,
                      dataRequest: t,
                    });
                }
              });
            let c = 1;
            if (
              (o.length > 0 &&
                (c = yield this.InternalHandleLoadStoreItems(e, o, n)),
              s(c),
              l.length > 0)
            ) {
              const e = yield Promise.all(l);
              for (const t of e) 1 != t && 1 == c && (c = t);
            }
            return (
              (t || []).forEach((e) => this.m_mapAppsInFlight.delete(e)),
              (r || []).forEach((e) => this.m_mapPackageInFlight.delete(e)),
              (i || []).forEach((e) => this.m_mapBundleInFlight.delete(e)),
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
              var r, s, i, n, a, o;
              let l = null !== (r = e.appid()) && void 0 !== r ? r : 0,
                u = null !== (s = t.appid()) && void 0 !== s ? s : 0;
              if (l != u) return l - u;
              let c = null !== (i = e.packageid()) && void 0 !== i ? i : 0,
                d = null !== (n = t.packageid()) && void 0 !== n ? n : 0;
              if (c != d) return c - d;
              let m = null !== (a = e.bundleid()) && void 0 !== a ? a : 0,
                _ = null !== (o = t.bundleid()) && void 0 !== o ? o : 0;
              return m != _ ? m - _ : 0;
            }),
            t
          );
        }
        InternalHandleLoadStoreItems(e, t, r) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            let s = 1;
            e ||
              (this.GetSteamInterface() ||
                this.SetSteamInterface(new a.J(g.De.WEBAPI_BASE_URL)),
              (e = this.GetSteamInterface())),
              (t = this.SortStoreItems(t));
            const o = new Array();
            try {
              const a = [];
              for (; t.length > 0; ) {
                const s = t.splice(0, this.k_nMaxBatchSize);
                if ((o.push(s), this.m_bUsePartnerAPI)) {
                  const t = n.gA.Init(d);
                  t.Body().set_include_unpublished(!1);
                  const i = t.Body().request(!0);
                  i.set_context((0, p.Fq)(this.m_bUsePartnerAPI)),
                    i.set_data_request(u.Qn.fromObject(r)),
                    i.set_ids(s),
                    a.push(m.GetItems(e.GetServiceTransport(), t));
                } else {
                  const t = n.gA.Init(u.eK);
                  (0, p.pA)(t, this.m_bUsePartnerAPI),
                    (0, p.De)(t, r),
                    t.Body().set_ids(s),
                    a.push(u.VJ.GetItems(e.GetAnonymousServiceTransport(), t));
                }
              }
              (yield Promise.all(a)).forEach((e, n) => {
                1 == e.GetEResult()
                  ? e
                      .Body()
                      .store_items()
                      .forEach((e) => {
                        const t = e.id(),
                          s = e.item_type();
                        if (1 != e.success() || this.BIsStoreItemMissing(t, s))
                          switch (
                            ("dev" == g.De.WEB_UNIVERSE &&
                              console.warn(
                                `Failed to load ${t} type ${s} with error ${e.success()}`,
                                e
                              ),
                            s)
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
                                  s +
                                  " " +
                                  t
                              );
                          }
                        else this.ReadItem(e, r);
                      })
                  : (console.error(
                      "CStoreItemCache::InternalHandleLoadStoreItems failed with eResult: " +
                        e.GetEResult() +
                        " message: " +
                        e.Hdr().error_message(),
                      (0, i.ZN)(t)
                    ),
                    (1 == e.Hdr().transport_error() || g.De.FROM_WEB) &&
                      this.MarkStoreItemIDUnavailable(o[n]),
                    1 == s && (s = e.GetEResult()));
              });
            } catch (e) {
              const t = (0, h.l)(e);
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
            return s;
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
          let s = this.GetMapForType(t);
          return Boolean(
            s && s.has(e) && (!r || s.get(e).BContainDataRequest(r))
          );
        }
        GetStoreItem(e, t) {
          if (-1 == t || 3 == t) return;
          const r = this.GetMapForType(t);
          return null == r ? void 0 : r.get(e);
        }
        GetStoreItemDataRequest(e, t) {
          var r, s;
          return (
            (null ===
              (s =
                null === (r = this.GetMapForType(t)) || void 0 === r
                  ? void 0
                  : r.get(e)) || void 0 === s
              ? void 0
              : s.GetDataRequest()) || null
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
        ReadResults(e, t) {
          let r = [];
          for (const s of e) r.push(this.ReadItem(s, t));
          return r;
        }
        ReadItem(e, t) {
          const r = e.item_type();
          let s = null;
          switch (r) {
            case 0:
              s = this.m_mapApps;
              break;
            case 1:
              s = this.m_mapPackages;
              break;
            case 2:
              s = this.m_mapBundles;
              break;
            default:
              return console.error(`Invalid item type: ${r}`), null;
          }
          let i = s.get(e.id());
          return (
            i ? i.MergeData(e, t) : ((i = new B.Z(e, t)), s.set(e.id(), i)), i
          );
        }
      }
      (y.k_DataRequest_CommonOnly = {}),
        (y.k_DataRequest_BasicInfo = { include_basic_info: !0 }),
        (y.k_DataRequest_Assets = { include_assets: !0 }),
        (y.k_DataRequest_IncludeAll = {
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
        Ds: () => I,
        Hy: () => w,
        qE: () => v,
        TM: () => M,
        GV: () => R,
        $k: () => y,
      });
      r(54698);
      var s = r(33019),
        i = r(40110),
        n = r(990);
      const a = s.Message;
      class o extends a {
        constructor(e = null) {
          super(),
            o.prototype.gid || i.aR(o.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  gid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  title: { n: 2, br: i.FE.readString, bw: i.Xc.writeString },
                  type: { n: 3, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  visibility: { n: 4, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  priority: { n: 5, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  association_type: {
                    n: 6,
                    br: i.FE.readEnum,
                    bw: i.Xc.writeEnum,
                  },
                  associated_id: {
                    n: 7,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  associated_name: {
                    n: 8,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  start_date: {
                    n: 9,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  end_date: {
                    n: 10,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  country_allow: {
                    n: 11,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  country_deny: {
                    n: 12,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  ownership_restrictions_overridden: {
                    n: 13,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  must_own_appid: {
                    n: 14,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  must_not_own_appid: {
                    n: 15,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  must_own_packageid: {
                    n: 16,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  must_not_own_packageid: {
                    n: 17,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  must_have_launched_appid: {
                    n: 18,
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                  additional_restrictions: {
                    n: 19,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  template_type: {
                    n: 20,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  template_vars: {
                    n: 21,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  flags: { n: 22, br: i.FE.readUint32, bw: i.Xc.writeUint32 },
                  creator_name: {
                    n: 23,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = i.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessageProto";
        }
      }
      class l extends a {
        constructor(e = null) {
          super(),
            l.prototype.gid || i.aR(l.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  gid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                  title: { n: 2, br: i.FE.readString, bw: i.Xc.writeString },
                  type: { n: 3, br: i.FE.readEnum, bw: i.Xc.writeEnum },
                  associated_item_id: { n: 4, c: n.oY },
                  associated_item: { n: 5, c: n.VL },
                  associated_name: {
                    n: 6,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  template_type: {
                    n: 10,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                  template_vars_json: {
                    n: 11,
                    br: i.FE.readString,
                    bw: i.Xc.writeString,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = i.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDisplayMarketingMessage";
        }
      }
      class u extends a {
        constructor(e = null) {
          super(),
            u.prototype.messages || i.aR(u.M()),
            a.initialize(this, e, 0, -1, [1], null);
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
                    br: i.FE.readUint32,
                    bw: i.Xc.writeUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = i.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetActiveMarketingMessages_Response";
        }
      }
      class c extends a {
        constructor(e = null) {
          super(),
            c.prototype.messages || i.aR(c.M()),
            a.initialize(this, e, 0, -1, [1], null);
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
          return c.sm_mbf || (c.sm_mbf = i.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Response";
        }
      }
      class d extends a {
        constructor(e = null) {
          super(),
            d.prototype.already_seen || i.aR(d.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  already_seen: { n: 1, br: i.FE.readBool, bw: i.Xc.writeBool },
                  message: { n: 2, c: l },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = i.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser";
        }
      }
      class m extends a {
        constructor(e = null) {
          super(),
            m.prototype.has_pending_messages || i.aR(m.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  has_pending_messages: {
                    n: 1,
                    br: i.FE.readBool,
                    bw: i.Xc.writeBool,
                  },
                  pending_message_count: {
                    n: 2,
                    br: i.FE.readInt32,
                    bw: i.Xc.writeInt32,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = i.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Response";
        }
      }
      class _ extends a {
        constructor(e = null) {
          super(),
            _.prototype.message || i.aR(_.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = { proto: _, fields: { message: { n: 1, c: l } } }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = i.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetDisplayMarketingMessage_Response";
        }
      }
      class h extends a {
        constructor(e = null) {
          super(),
            h.prototype.message || i.aR(h.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = { proto: h, fields: { message: { n: 1, c: o } } }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = i.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessage_Response";
        }
      }
      class g extends a {
        constructor(e = null) {
          super(),
            g.prototype.messages || i.aR(g.M()),
            a.initialize(this, e, 0, -1, [1], null);
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
          return g.sm_mbf || (g.sm_mbf = i.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_FindMarketingMessages_Response";
        }
      }
      class p extends a {
        constructor(e = null) {
          super(),
            p.prototype.gid || i.aR(p.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  gid: {
                    n: 1,
                    br: i.FE.readFixed64String,
                    bw: i.Xc.writeFixed64String,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = i.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return i.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return i.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_CreateMarketingMessage_Response";
        }
      }
      class B extends a {
        constructor(e = null) {
          super(), a.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new B();
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_UpdateMarketingMessage_Response";
        }
      }
      class f extends a {
        constructor(e = null) {
          super(), a.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new f();
        }
        static deserializeBinary(e) {
          let t = new s.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new s.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new s.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DeleteMarketingMessage_Response";
        }
      }
      var b, y;
      function R(e) {
        return "app" == e ? 0 : "sub" == e ? 1 : 2;
      }
      function v(e) {
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
      function I(e, t) {
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
      function w(e) {
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
          (e.MarkMessageSeen = function (e, t) {
            return e.SendNotification(
              "MarketingMessages.MarkMessageSeen#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.GetMarketingMessage = function (e, t) {
            return e.SendMsg("MarketingMessages.GetMarketingMessage#1", t, h, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.CreateMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.CreateMarketingMessage#1",
              t,
              p,
              { ePrivilege: 4 }
            );
          }),
          (e.UpdateMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.UpdateMarketingMessage#1",
              t,
              B,
              { ePrivilege: 4 }
            );
          }),
          (e.DeleteMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.DeleteMarketingMessage#1",
              t,
              f,
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
      })(b || (b = {})),
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
        })(y || (y = {}));
    },
    52114: (e, t, r) => {
      r.d(t, {
        Vm: () => d,
        ie: () => c,
        jk: () => l,
        vs: () => u,
        wZ: () => _,
      });
      var s = r(9669),
        i = r.n(s),
        n = r(67294),
        a = (r(49727), r(54698), r(990), r(22975)),
        o = (r(14146), r(159));
      function l(e, t, r, s) {
        const a = (0, n.useRef)(),
          l = (0, n.useRef)(void 0);
        a.current = e;
        const [u, c] = (0, n.useState)(void 0),
          {
            include_assets: d,
            include_release: m,
            include_platforms: _,
            include_all_purchase_options: h,
            include_screenshots: g,
            include_trailers: p,
            include_ratings: B,
            include_tag_count: f,
            include_reviews: b,
            include_basic_info: y,
            include_supported_languages: R,
          } = r;
        if (
          ((0, n.useEffect)(() => {
            const r = {
              include_assets: d,
              include_release: m,
              include_platforms: _,
              include_all_purchase_options: h,
              include_screenshots: g,
              include_trailers: p,
              include_ratings: B,
              include_tag_count: f,
              include_reviews: b,
              include_basic_info: y,
              include_supported_languages: R,
            };
            if (
              !e ||
              o.Z.Get().BHasStoreItem(e, t, r) ||
              (void 0 !== u && s == l.current)
            )
              return;
            l.current = s;
            const n = i().CancelToken.source();
            return (
              o.Z.Get()
                .QueueStoreItemRequest(e, t, r)
                .then((t) => {
                  n.token.reason || a.current !== e || c(1 == t);
                }),
              () => n.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, s, u, d, m, _, h, g, p, B, f, b, y, R]),
          !e)
        )
          return [null, 2];
        if (!1 === u) return [void 0, 2];
        if (o.Z.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!o.Z.Get().BHasStoreItem(e, t, r)) return [void 0, 1];
        const v = o.Z.Get().GetStoreItem(e, t);
        return (null == v ? void 0 : v.BIsVisible()) ? [v, 3] : [null, 2];
      }
      function u(e, t, r) {
        return l(e, 0, t, r);
      }
      function c(e, t, r) {
        return l(e, 1, t, r);
      }
      function d(e, t, r) {
        const [s, a] = l(e, t, r),
          [o, c] = (0, n.useState)(null),
          [d, m] = u(o, r);
        return (
          (0, n.useEffect)(() => {
            var e;
            const t = i().CancelToken.source();
            if (
              1 == (null == s ? void 0 : s.GetStoreItemType()) &&
              1 == (null == s ? void 0 : s.GetIncludedAppIDs().length)
            ) {
              const r = s.GetIncludedAppIDs()[0];
              o != r &&
                ((null === (e = null == t ? void 0 : t.token) || void 0 === e
                  ? void 0
                  : e.reason) ||
                  c(r));
            }
            return () =>
              t.cancel("useStoreItemCacheOrPackageSingleApp: unmounting");
          }, [o, s]),
          o ? [d, m] : [s, a]
        );
      }
      function m(e, t, r, s) {
        const l = (0, a.NW)(),
          {
            include_assets: u,
            include_release: c,
            include_platforms: d,
            include_all_purchase_options: m,
            include_screenshots: _,
            include_trailers: h,
            include_ratings: g,
            include_tag_count: p,
            include_reviews: B,
            include_basic_info: f,
            include_supported_languages: b,
          } = r;
        if (
          ((0, n.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const r = {
                include_assets: u,
                include_release: c,
                include_platforms: d,
                include_all_purchase_options: m,
                include_screenshots: _,
                include_trailers: h,
                include_ratings: g,
                include_tag_count: p,
                include_reviews: B,
                include_basic_info: f,
                include_supported_languages: b,
              },
              s = e.filter(
                (e) =>
                  !(
                    o.Z.Get().BHasStoreItem(e, t) ||
                    o.Z.Get().BIsStoreItemMissing(e, t)
                  )
              );
            if (0 == s.length) return;
            const n = i().CancelToken.source(),
              a = s.map((e) => o.Z.Get().QueueStoreItemRequest(e, t, r));
            return (
              Promise.all(a).then(() => {
                n.token.reason || l();
              }),
              () => n.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, s, l, u, c, d, m, _, h, g, p, B, f, b]),
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
        return e.every((e) => {
          var r;
          return null === (r = o.Z.Get().GetStoreItem(e, t)) || void 0 === r
            ? void 0
            : r.BIsVisible();
        })
          ? 3
          : 2;
      }
      function _(e, t, r) {
        return m(e, 0, t, r);
      }
    },
    93976: (e, t, r) => {
      r.d(t, { l: () => a });
      r(26149);
      var s = r(9669),
        i = r.n(s),
        n = r(58114);
      function a(e) {
        if (i().isCancel(e))
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
            if ("object" == typeof e && e instanceof n.gA)
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
