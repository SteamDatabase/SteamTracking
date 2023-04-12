/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2529],
  {
    44229: (e, t, r) => {
      r.d(t, {
        Z6: () => c,
        p8: () => g,
        NO: () => b,
        UC: () => p,
        A1: () => _,
        yp: () => d,
        iP: () => m,
      });
      var i = r(89526),
        s = r(6960),
        n = r(70983),
        a = r(26371);
      class o {
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
        Parse(e, t, r = !1) {
          const i = (function (e, t) {
            const r = [];
            let i = new o(),
              s = !1,
              n = !1,
              a = !1;
            for (let o = 0; o < e.length; o++) {
              let l = e[o];
              switch (i.type) {
                case 0:
                  "[" == l
                    ? ((i.type = 2), (n = !0))
                    : ((i.type = 1), "\\" == l && t ? (s = !s) : (i.text += l));
                  break;
                case 2:
                case 3:
                  if ("/" == l && n) (i.type = 3), (i.text = ""), (n = !1);
                  else if ("[" != l || s)
                    if ("]" != l || s)
                      "\\" == l && t
                        ? ((i.text += l), (s = !s), (n = !1))
                        : ((i.text += l), (s = !1), (n = !1));
                    else {
                      const e =
                          2 == i.type &&
                          "noparse" == i.text.toLocaleLowerCase(),
                        t =
                          3 == i.type &&
                          "noparse" == i.text.toLocaleLowerCase();
                      n || (a && !t)
                        ? (i.ConvertMalformedNodeToText(), (i.text += l))
                        : e
                        ? (a = !0)
                        : t && (a = !1),
                        (i = u(r, i)),
                        (n = !1);
                    }
                  else
                    i.ConvertMalformedNodeToText(), (i = u(r, i, 2)), (n = !0);
                  break;
                case 1:
                  "[" != l || s
                    ? "\\" == l && t
                      ? (s && (i.text += l), (s = !s))
                      : ((i.text += l), (s = !1))
                    : ((i = u(r, i, 2)), (n = !0));
              }
            }
            0 != i.type &&
              ((2 != i.type && 3 != i.type) || i.ConvertMalformedNodeToText(),
              r.push(i));
            return r;
          })(e, r);
          return this.Parse_BuildElements(i, t);
        }
        Parse_BuildElements(e, t) {
          let r = this.m_fnAccumulatorFactory(void 0),
            i = [],
            s = function () {
              return i.length < 1 ? void 0 : i[i.length - 1];
            },
            n = this.m_dictComponents,
            a = !1,
            o = !0,
            l = function (e, s, l) {
              if (e && e.node.tag === s.text && n.get(e.node.tag)) {
                const s = n.get(e.node.tag),
                  l = i.map((e) => e.node.tag),
                  u = { parentTags: l, tagname: e.node.tag, args: e.node.args },
                  c = t(s.Constructor, u, ...r.GetElements());
                (r = e.accumulator),
                  r.AppendNode(c),
                  (a = s.skipFollowingNewline),
                  (o = e.bWrapTextForCopying);
              } else if (e) {
                let t = e.accumulator;
                t.AppendText("[" + e.node.text + "]", !1),
                  r.GetElements().forEach((e) => t.AppendNode(e)),
                  t.AppendText("[/" + s.text + "]", !1),
                  (r = t),
                  (o = e.bWrapTextForCopying);
              }
            };
          for (
            e.forEach((e, t) => {
              var u, c;
              if (1 == e.type) {
                const t = a ? e.text.replace(/^[\t\r ]*\n/g, "") : e.text;
                r.AppendText(t, o), (a = !1);
              } else if (2 == e.type) {
                const t = n.get(e.tag);
                if (t) {
                  const c = s();
                  if (void 0 !== c) {
                    const t = n.get(c.node.tag);
                    t &&
                      t.autocloses &&
                      e.tag === c.node.tag &&
                      l(i.pop(), c.node);
                  }
                  i.push({ accumulator: r, node: e, bWrapTextForCopying: o }),
                    (r = this.m_fnAccumulatorFactory(e)),
                    (a = t.skipInternalNewline),
                    (o =
                      null !== (u = t.allowWrapTextForCopying) &&
                      void 0 !== u &&
                      u);
                } else r.AppendText("[" + e.text + "]", 0 == i.length);
              } else if (3 == e.type) {
                for (
                  ;
                  s() &&
                  s().node.tag !== e.text &&
                  n.get(s().node.tag) &&
                  n.get(s().node.tag).autocloses;

                ) {
                  const e = i.pop();
                  l(e, e.node);
                }
                if (
                  (null === (c = s()) || void 0 === c ? void 0 : c.node.tag) ==
                  e.text
                ) {
                  const t = i.pop();
                  l(t, e);
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
          return r.GetElements();
        }
      }
      function u(e, t, r = 0) {
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
                n = 0;
              "=" == e[0] && (s = 2);
              let a = !1;
              for (n++; n < e.length; n++) {
                let o = e[n],
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
                      a ||
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
                    ((" " == o && 4 != s && !a) ||
                      ('"' == o && 4 == s && !a)) &&
                      ((s = 0), (l = !1), (u = !0));
                }
                if (l)
                  if ("\\" != o || a)
                    if (((a = !1), 1 == s)) r += o;
                    else {
                      if (3 != s && 4 != s)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + s
                        );
                      i += o;
                    }
                  else a = !0;
                u && ((t[r] = i), (r = ""), (i = ""));
              }
              0 != s && (t[r] = i);
              return t;
            })(r);
          } else (t.args = {}), (t.tag = t.text.toLocaleLowerCase());
        }
        e.push(t);
        let i = new o();
        return (i.type = r), i;
      }
      class c extends l {
        constructor(e, t, r) {
          super(e, null != t ? t : () => new a.LT()),
            (this.m_renderingLanguage = r || (0, s.jM)(n.De.LANGUAGE));
        }
        UpdateOverrideLanguage(e) {
          this.m_renderingLanguage = e || (0, s.jM)(n.De.LANGUAGE);
        }
        ParseBBCode(e, t, r = !1) {
          let s = 0;
          const n = this.Parse(
            e,
            (e, r, ...n) =>
              i.createElement(
                e,
                Object.assign(Object.assign({}, r), {
                  context: t,
                  language: this.m_renderingLanguage,
                  key: "bbnode_" + s++,
                }),
                ...n
              ),
            r
          );
          return n.length > 1
            ? i.createElement(i.Fragment, null, ...n)
            : 1 == n.length
            ? n[0]
            : null;
        }
      }
      const d = [
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
        m = [
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
        h = [
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
        _ = (d.filter((e) => -1 == h.indexOf(e)), "{STEAM_CLAN_IMAGE}"),
        p = "{STEAM_CLAN_LOC_IMAGE}";
      function g(e, t = null, r = " ") {
        let i = null == t ? void 0 : t.join("|");
        i || (i = d.join("|") + "|\\*");
        let s = new RegExp("\\[(" + i + ")\\b[^\\]]*\\].*?\\[/\\1\\]", "gi");
        return e.replace(s, r);
      }
      function b(e, t = null, r = "") {
        let i = null == t ? void 0 : t.join("|");
        i || (i = d.join("|") + "|\\*");
        let s = "\\[\\/?(?:" + i + "){1,}.*?]";
        return e.replace(new RegExp(s, "gi"), r);
      }
    },
    26371: (e, t, r) => {
      r.d(t, { DX: () => a, LT: () => n, So: () => o });
      var i = r(89526),
        s = r(32338);
      class n {
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
      class a {
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
              r.push(i.createElement("br")),
              (t = t.substr(e + 1));
          t.length && r.push(t),
            r.forEach((e) => {
              super.AppendNode(e);
            });
        }
      }
    },
    40632: (e, t, r) => {
      r.d(t, { $2: () => d, Ax: () => b, e8: () => _ });
      var i = r(45878),
        s = r(19320),
        n = (r(11643), r(17169)),
        a = r(82702);
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
                  store_page_filter: { n: 44, c: n._v },
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
                  id: { n: 1, c: a.oY },
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
      class h extends o {
        constructor(e = null) {
          super(),
            h.prototype.total_matching_records || s.aR(h.M()),
            o.initialize(this, e, 0, -1, [4, 5], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
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
          return "CStoreQueryResultMetadata";
        }
      }
      class _ extends o {
        constructor(e = null) {
          super(),
            _.prototype.query_name || s.aR(_.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  query_name: {
                    n: 1,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  query: { n: 2, c: d },
                  context: { n: 3, c: a.WJ },
                  data_request: { n: 4, c: a.Qn },
                  override_country_code: {
                    n: 5,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
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
          return "CStoreQuery_Query_Request";
        }
      }
      class p extends o {
        constructor(e = null) {
          super(),
            p.prototype.metadata || s.aR(p.M()),
            o.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  metadata: { n: 1, c: h },
                  ids: { n: 2, c: a.oY, r: !0, q: !0 },
                  store_items: { n: 3, c: a.VL, r: !0, q: !0 },
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
          return "CStoreQuery_Query_Response";
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
                  metadata: { n: 1, c: h },
                  ids: { n: 2, c: a.oY, r: !0, q: !0 },
                  store_items: { n: 3, c: a.VL, r: !0, q: !0 },
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
          return "CStoreQuery_SearchSuggestions_Response";
        }
      }
      var b;
      !(function (e) {
        (e.Query = function (e, t) {
          return e.SendMsg("StoreQuery.Query#1", t, p, {
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
      })(b || (b = {}));
    },
    79983: (e, t, r) => {
      r.d(t, { De: () => l, Fq: () => o, pA: () => a });
      var i = r(82702),
        s = r(70983),
        n = (r(45878), r(17922), r(45797));
      r(40632);
      function a(e, t) {
        e.Body().set_context(o(t));
      }
      function o(e) {
        let t = new i.WJ();
        return (
          e || t.set_country_code(s.De.COUNTRY),
          t.set_language(s.De.LANGUAGE),
          s.De.EREALM != n.IN.k_ESteamRealmUnknown &&
            t.set_steam_realm(s.De.EREALM),
          t
        );
      }
      function l(e, t) {
        e.Body().set_data_request(i.Qn.fromObject(t));
      }
    },
    63154: (e, t, r) => {
      r.d(t, { Z: () => I });
      var i = r(33940),
        s = r(50265),
        n = (r(6960), r(45797), r(17922)),
        a = r(70657),
        o = (r(89252), r(45878)),
        l = r(19320),
        u = r(82702);
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
      var h = r(32338),
        _ = r(47330),
        p = r(70983),
        g = r(79983),
        b = r(55449);
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
          include_tag_count:
            Math.max(e.include_tag_count || 0, t.include_tag_count || 0) ||
            void 0,
          include_reviews: e.include_reviews || t.include_reviews,
          include_basic_info: e.include_basic_info || t.include_basic_info,
          include_supported_languages:
            e.include_supported_languages || t.include_supported_languages,
        };
      }
      function B(e, t) {
        return (0, i.mG)(this, void 0, void 0, function* () {
          const r = yield e,
            i = yield t;
          return 1 != r ? r : i;
        });
      }
      class I {
        constructor() {
          (this.k_QueueWaitUntilRequestMS = 5),
            (this.k_nMaxBatchSize = 250),
            (this.m_bReturnUnavailableItems = !1),
            (this.m_mapApps = new Map()),
            (this.m_mapPackages = new Map()),
            (this.m_mapBundles = new Map()),
            (this.m_mapTags = new Map()),
            (this.m_mapCreators = new Map()),
            (this.m_mapHubCategories = new Map()),
            (this.m_setUnavailableApps = new Set()),
            (this.m_setUnavailablePackages = new Set()),
            (this.m_setUnavailableBundles = new Set()),
            (this.m_setUnavailableTags = new Set()),
            (this.m_setUnavailableCreators = new Set()),
            (this.m_setUnavailableHubCategories = new Set()),
            (this.m_setUnavailableDueToCountryRestrictionApps = new Set()),
            (this.m_setUnavailableDueToCountryRestrictionPackages = new Set()),
            (this.m_setUnavailableDueToCountryRestrictionBundles = new Set()),
            (this.m_mapAppsInFlight = new Map()),
            (this.m_mapPackageInFlight = new Map()),
            (this.m_mapBundleInFlight = new Map()),
            (this.m_mapTagsInFlight = new Map()),
            (this.m_mapCreatorsInFlight = new Map()),
            (this.m_mapHubCategoriesInFlight = new Map()),
            (this.m_SteamInterface = null),
            (this.m_bUsePartnerAPI = !1),
            (this.m_bInitialized = !1),
            (this.m_bActivelyResettingCache = !1),
            (this.m_setPendingAppInfo = new Set()),
            (this.m_setPendingBundleInfo = new Set()),
            (this.m_setPendingPackageInfo = new Set()),
            (this.m_setPendingTagInfo = new Set()),
            (this.m_setPendingCreatorInfo = new Set()),
            (this.m_setPendingHubCategoryInfo = new Set()),
            (this.m_setPendingDataRequest = {}),
            (this.m_PendingInfoResolve = void 0),
            (this.m_PendingTimer = void 0),
            (this.k_AlreadyResolvedOK = Promise.resolve(1)),
            (this.k_AlreadyResolvedInvalid = Promise.resolve(8)),
            (this.k_AlreadyResolvedBusy = Promise.resolve(10));
        }
        static Get() {
          return (
            I.sm_instance ||
              ((I.sm_instance = new I()),
              (window.StoreItemCache = I.sm_instance)),
            I.sm_instance
          );
        }
        static Initialize(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (0, h.X)(
              !I.Get().m_bInitialized,
              "CStoreItemCache was already initialized; initialize it only once."
            ),
              (I.Get().m_SteamInterface = e),
              (I.Get().m_bUsePartnerAPI = !!t),
              (I.Get().m_bInitialized = !0);
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
              this.m_mapTagsInFlight.forEach((t) => {
                e.push(t.promise);
              }),
              this.m_mapCreatorsInFlight.forEach((t) => {
                e.push(t.promise);
              }),
              this.m_mapHubCategoriesInFlight.forEach((t) => {
                e.push(t.promise);
              }),
              yield Promise.all(e),
              this.m_mapApps.clear(),
              this.m_mapBundles.clear(),
              this.m_mapPackages.clear(),
              this.m_mapTagsInFlight.clear(),
              this.m_mapCreatorsInFlight.clear(),
              this.m_mapHubCategoriesInFlight.clear(),
              (this.m_bActivelyResettingCache = !1);
          });
        }
        static BIsInitialized() {
          return I.Get().m_bInitialized;
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
        QueueTagRequest(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 4, t);
          });
        }
        QueueCreatorRequest(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 5, t);
          });
        }
        QueueHubCategoryRequest(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 6, t);
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
        QueueMultipleTagRequests(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const r = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 4, t))
            )).filter((e) => 1 != e);
            return r.length > 0 ? r[0] : 1;
          });
        }
        QueueMultipleCreatorRequests(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const r = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 5, t))
            )).filter((e) => 1 != e);
            return r.length > 0 ? r[0] : 1;
          });
        }
        QueueMultipleHubCategoryRequests(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const r = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 6, t))
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
              ((0, h.X)(
                I.ValidateDataRequest(r),
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
                (0, h.X)(
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
              case 4:
                this.m_setPendingTagInfo.add(e);
                break;
              case 5:
                this.m_setPendingCreatorInfo.add(e);
                break;
              case 6:
                this.m_setPendingHubCategoryInfo.add(e);
                break;
              default:
                (0, h.X)(!1, `Unexpected Type ${t}`);
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
              s = Array.from(this.m_setPendingTagInfo),
              n = Array.from(this.m_setPendingCreatorInfo),
              a = Array.from(this.m_setPendingHubCategoryInfo),
              o = this.m_setPendingDataRequest;
            (this.m_PendingInfoPromise = void 0),
              (this.m_PendingInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              this.m_setPendingBundleInfo.clear(),
              this.m_setPendingPackageInfo.clear(),
              this.m_setPendingTagInfo.clear(),
              this.m_setPendingCreatorInfo.clear(),
              this.m_setPendingHubCategoryInfo.clear(),
              (this.m_setPendingDataRequest = {}),
              (this.m_PendingTimer = void 0),
              this.HintLoadStoreItems(void 0, t, r, i, s, n, a, o).then((t) =>
                e(t)
              );
          });
        }
        HintLoadStoreApps(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(
              null,
              e,
              null,
              null,
              null,
              null,
              null,
              t
            );
          });
        }
        HintLoadStorePackages(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(
              null,
              null,
              e,
              null,
              null,
              null,
              null,
              t
            );
          });
        }
        HintLoadStoreBundles(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(
              null,
              null,
              null,
              e,
              null,
              null,
              null,
              t
            );
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
              break;
            case 4:
              i = this.m_mapTagsInFlight.get(e);
              break;
            case 5:
              i = this.m_mapCreatorsInFlight.get(e);
              break;
            case 6:
              i = this.m_mapHubCategoriesInFlight.get(e);
          }
          return i && b.Z.BDataRequestContainsOtherDataRequest(i.dataRequest, r)
            ? i.promise
            : null;
        }
        HintLoadStoreItems(e, t, r, s, n, a, o, l) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            const c = new Promise((e) => (i = e));
            let d = [],
              m = [];
            (t || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, 0, l);
              if (t) m.push(t);
              else {
                d.push(u.oY.fromObject({ appid: e }));
                let t = f(this.GetStoreItemDataRequest(e, 0), l);
                const r = this.m_mapAppsInFlight.get(e);
                (t = f(null == r ? void 0 : r.dataRequest, t)),
                  r && m.push(r.promise),
                  this.m_mapAppsInFlight.set(e, {
                    promise: r ? B(r.promise, c) : c,
                    dataRequest: t,
                  });
              }
            }),
              (r || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(e, 1, l);
                if (t) m.push(t);
                else {
                  d.push(u.oY.fromObject({ packageid: e }));
                  let t = f(this.GetStoreItemDataRequest(e, 1), l);
                  const r = this.m_mapPackageInFlight.get(e);
                  (t = f(null == r ? void 0 : r.dataRequest, t)),
                    r && m.push(r.promise),
                    this.m_mapPackageInFlight.set(e, {
                      promise: r ? B(r.promise, c) : c,
                      dataRequest: t,
                    });
                }
              }),
              (s || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(e, 2, l);
                if (t) m.push(t);
                else {
                  d.push(u.oY.fromObject({ bundleid: e }));
                  let t = f(this.GetStoreItemDataRequest(e, 2), l);
                  const r = this.m_mapBundleInFlight.get(e);
                  (t = f(null == r ? void 0 : r.dataRequest, t)),
                    r && m.push(r.promise),
                    this.m_mapBundleInFlight.set(e, {
                      promise: r ? B(r.promise, c) : c,
                      dataRequest: t,
                    });
                }
              }),
              (n || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(e, 4, l);
                if (t) m.push(t);
                else {
                  d.push(u.oY.fromObject({ tagid: e }));
                  let t = f(this.GetStoreItemDataRequest(e, 4), l);
                  const r = this.m_mapTagsInFlight.get(e);
                  (t = f(null == r ? void 0 : r.dataRequest, t)),
                    r && m.push(r.promise),
                    this.m_mapTagsInFlight.set(e, {
                      promise: r ? B(r.promise, c) : c,
                      dataRequest: t,
                    });
                }
              }),
              (a || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(e, 5, l);
                if (t) m.push(t);
                else {
                  d.push(u.oY.fromObject({ creatorid: e }));
                  let t = f(this.GetStoreItemDataRequest(e, 5), l);
                  const r = this.m_mapCreatorsInFlight.get(e);
                  (t = f(null == r ? void 0 : r.dataRequest, t)),
                    r && m.push(r.promise),
                    this.m_mapCreatorsInFlight.set(e, {
                      promise: r ? B(r.promise, c) : c,
                      dataRequest: t,
                    });
                }
              }),
              (o || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(e, 6, l);
                if (t) m.push(t);
                else {
                  d.push(u.oY.fromObject({ hubcategoryid: e }));
                  let t = f(this.GetStoreItemDataRequest(e, 6), l);
                  const r = this.m_mapHubCategoriesInFlight.get(e);
                  (t = f(null == r ? void 0 : r.dataRequest, t)),
                    r && m.push(r.promise),
                    this.m_mapHubCategoriesInFlight.set(e, {
                      promise: r ? B(r.promise, c) : c,
                      dataRequest: t,
                    });
                }
              });
            let h = 1;
            if (
              (d.length > 0 &&
                (h = yield this.InternalHandleLoadStoreItems(e, d, l)),
              i(h),
              m.length > 0)
            ) {
              const e = yield Promise.all(m);
              for (const t of e) 1 != t && 1 == h && (h = t);
            }
            return (
              (t || []).forEach((e) => this.m_mapAppsInFlight.delete(e)),
              (r || []).forEach((e) => this.m_mapPackageInFlight.delete(e)),
              (s || []).forEach((e) => this.m_mapBundleInFlight.delete(e)),
              (n || []).forEach((e) => this.m_mapTagsInFlight.delete(e)),
              (a || []).forEach((e) => this.m_mapCreatorsInFlight.delete(e)),
              (o || []).forEach((e) =>
                this.m_mapHubCategoriesInFlight.delete(e)
              ),
              h
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
              : e.bundleid()
              ? (this.m_setUnavailableBundles.add(e.bundleid()),
                this.m_mapBundles.delete(e.bundleid()))
              : e.tagid()
              ? (this.m_setUnavailableTags.add(e.tagid()),
                this.m_mapTags.delete(e.tagid()))
              : e.creatorid()
              ? (this.m_setUnavailableCreators.add(e.creatorid()),
                this.m_mapCreators.delete(e.creatorid()))
              : e.hubcategoryid() &&
                (this.m_setUnavailableHubCategories.add(e.hubcategoryid()),
                this.m_mapHubCategories.delete(e.hubcategoryid()));
          });
        }
        SortStoreItems(e) {
          let t = e.slice();
          return (
            t.sort((e, t) => {
              var r, i, s, n, a, o, l, u, c, d, m, h;
              let _ = null !== (r = e.appid()) && void 0 !== r ? r : 0,
                p = null !== (i = t.appid()) && void 0 !== i ? i : 0;
              if (_ != p) return _ - p;
              let g = null !== (s = e.packageid()) && void 0 !== s ? s : 0,
                b = null !== (n = t.packageid()) && void 0 !== n ? n : 0;
              if (g != b) return g - b;
              let f = null !== (a = e.bundleid()) && void 0 !== a ? a : 0,
                B = null !== (o = t.bundleid()) && void 0 !== o ? o : 0;
              if (f != B) return f - B;
              let I = null !== (l = e.tagid()) && void 0 !== l ? l : 0,
                y = null !== (u = t.tagid()) && void 0 !== u ? u : 0;
              if (I != y) return I - y;
              let v = null !== (c = e.creatorid()) && void 0 !== c ? c : 0,
                R = null !== (d = t.creatorid()) && void 0 !== d ? d : 0;
              if (v != R) return v - R;
              let w = null !== (m = e.hubcategoryid()) && void 0 !== m ? m : 0,
                S = null !== (h = t.hubcategoryid()) && void 0 !== h ? h : 0;
              return w != S ? w - S : 0;
            }),
            t
          );
        }
        InternalHandleLoadStoreItems(e, t, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = 1;
            e ||
              (this.GetSteamInterface() ||
                this.SetSteamInterface(new a.J(p.De.WEBAPI_BASE_URL)),
              (e = this.GetSteamInterface())),
              (t = this.SortStoreItems(t));
            const o = new Array();
            try {
              const a = [];
              for (; t.length > 0; ) {
                const i = t.splice(0, this.k_nMaxBatchSize);
                if ((o.push(i), this.m_bUsePartnerAPI)) {
                  const t = n.gA.Init(d);
                  t.Body().set_include_unpublished(!1);
                  const s = t.Body().request(!0);
                  s.set_context((0, g.Fq)(this.m_bUsePartnerAPI)),
                    s.set_data_request(u.Qn.fromObject(r)),
                    s.set_ids(i),
                    a.push(m.GetItems(e.GetServiceTransport(), t));
                } else {
                  const t = n.gA.Init(u.eK);
                  (0, g.pA)(t, this.m_bUsePartnerAPI),
                    (0, g.De)(t, r),
                    t.Body().set_ids(i),
                    a.push(u.VJ.GetItems(e.GetAnonymousServiceTransport(), t));
                }
              }
              (yield Promise.all(a)).forEach((e, n) => {
                1 == e.GetEResult()
                  ? e
                      .Body()
                      .store_items()
                      .forEach((i) => {
                        const n = i.id(),
                          a = i.item_type();
                        let o =
                            this.m_bReturnUnavailableItems && 15 == i.success(),
                          l =
                            1 == i.success() && !this.BIsStoreItemMissing(n, a);
                        if (o || l) this.ReadItem(i, r);
                        else {
                          switch (
                            ("dev" == p.De.WEB_UNIVERSE &&
                              console.warn(
                                `Failed to load ${n} type ${a} with error ${i.success()}`,
                                i
                              ),
                            a)
                          ) {
                            case 0:
                              this.m_setUnavailableApps.add(n),
                                this.m_mapApps.delete(n);
                              break;
                            case 1:
                              this.m_setUnavailablePackages.add(n),
                                this.m_mapPackages.delete(n);
                              break;
                            case 2:
                              this.m_setUnavailableBundles.add(n),
                                this.m_mapBundles.delete(n);
                              break;
                            case 4:
                              this.m_setUnavailableTags.add(n),
                                this.m_mapTags.delete(n);
                              break;
                            case 5:
                              this.m_setUnavailableCreators.add(n),
                                this.m_mapCreators.delete(n);
                              break;
                            case 6:
                              this.m_setUnavailableHubCategories.add(n),
                                this.m_mapHubCategories.delete(n);
                              break;
                            default:
                              console.error(
                                "CStoreItemCache.InternalHandleLoadStoreItems unexpected item_type in response " +
                                  a +
                                  " " +
                                  n
                              );
                          }
                          if (i.unvailable_for_country_restriction())
                            switch (a) {
                              case 0:
                                this.m_setUnavailableDueToCountryRestrictionApps.add(
                                  n
                                );
                                break;
                              case 1:
                                this.m_setUnavailableDueToCountryRestrictionPackages.add(
                                  n
                                );
                                break;
                              case 2:
                                this.m_setUnavailableDueToCountryRestrictionBundles.add(
                                  n
                                );
                                break;
                              case 4:
                              case 5:
                              case 6:
                                console.error(
                                  "CStoreItemCache::InternalHandleLoadStoreItems - tags, creators or categories don't have country restrictions. eResult: " +
                                    e.GetEResult() +
                                    " message: " +
                                    e.Hdr().error_message(),
                                  (0, s.ZN)(t)
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
                    (1 == e.Hdr().transport_error() || p.De.FROM_WEB) &&
                      this.MarkStoreItemIDUnavailable(o[n]),
                    1 == i && (i = e.GetEResult()));
              });
            } catch (e) {
              const t = (0, _.l)(e);
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
            case 4:
              t = this.m_mapTags;
              break;
            case 5:
              t = this.m_mapCreators;
              break;
            case 6:
              t = this.m_mapHubCategories;
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
        BHasTag(e, t) {
          return this.BHasStoreItem(e, 4, t);
        }
        GetTag(e) {
          return this.GetStoreItem(e, 4);
        }
        BHasCreator(e, t) {
          return this.BHasStoreItem(e, 5, t);
        }
        GetCreator(e) {
          return this.GetStoreItem(e, 5);
        }
        BHasHubCategory(e, t) {
          return this.BHasStoreItem(e, 6, t);
        }
        GetHubCategory(e) {
          return this.GetStoreItem(e, 6);
        }
        BIsStoreItemMissing(e, t) {
          switch (t) {
            case 0:
              return this.BIsAppMissing(e);
            case 1:
              return this.BIsPackageMissing(e);
            case 2:
              return this.BIsBundleMissing(e);
            case 4:
              return this.BIsTagMissing(e);
            case 5:
              return this.BIsCreatorMissing(e);
            case 6:
              return this.BIsHubCategoryMissing(e);
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
        BIsTagMissing(e) {
          return this.m_setUnavailableTags.has(e);
        }
        BIsCreatorMissing(e) {
          return this.m_setUnavailableCreators.has(e);
        }
        BIsHubCategoryMissing(e) {
          return this.m_setUnavailableHubCategories.has(e);
        }
        BIsStoreItemUnavailableDueToCountryRestriction(e, t) {
          switch (t) {
            case 0:
              return this.BIsAppUnavailableDueToCountryRestriction(e);
            case 1:
              return this.BIsPackageUnavailableDueToCountryRestriction(e);
            case 2:
              return this.BIsBundleUnavailableDueToCountryRestriction(e);
            case 4:
            case 5:
            case 6:
              return (
                console.error(
                  "BIsStoreItemUnavailableDueToCountryRestriction - tags, creators or categories don't have country restrictions. type: ",
                  t
                ),
                !0
              );
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
            case 4:
              i = this.m_mapTags;
              break;
            case 5:
              i = this.m_mapCreators;
              break;
            case 6:
              i = this.m_mapHubCategories;
              break;
            default:
              return console.error(`Invalid item type: ${r}`), null;
          }
          let s = i.get(e.id());
          return (
            s ? s.MergeData(e, t) : ((s = new b.Z(e, t)), i.set(e.id(), s)), s
          );
        }
      }
      (I.k_DataRequest_CommonOnly = {}),
        (I.k_DataRequest_BasicInfo = { include_basic_info: !0 }),
        (I.k_DataRequest_Assets = { include_assets: !0 }),
        (I.k_DataRequest_IncludeAll = {
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
    23708: (e, t, r) => {
      r.d(t, {
        Vm: () => d,
        ie: () => c,
        jk: () => l,
        oA: () => _,
        vs: () => u,
        wZ: () => h,
      });
      var i = r(52868),
        s = r.n(i),
        n = r(89526),
        a = (r(44229), r(45797), r(82702), r(31621)),
        o = (r(55449), r(63154));
      function l(e, t, r, i) {
        const l = (0, n.useRef)(),
          u = (0, n.useRef)(void 0),
          c = (0, a.NW)();
        l.current = e;
        const [d, m] = (0, n.useState)(void 0),
          {
            include_assets: h,
            include_release: _,
            include_platforms: p,
            include_all_purchase_options: g,
            include_screenshots: b,
            include_trailers: f,
            include_ratings: B,
            include_tag_count: I,
            include_reviews: y,
            include_basic_info: v,
            include_supported_languages: R,
          } = r;
        if (
          ((0, n.useEffect)(() => {
            const r = {
              include_assets: h,
              include_release: _,
              include_platforms: p,
              include_all_purchase_options: g,
              include_screenshots: b,
              include_trailers: f,
              include_ratings: B,
              include_tag_count: I,
              include_reviews: y,
              include_basic_info: v,
              include_supported_languages: R,
            };
            let n = null;
            return (
              !e ||
                o.Z.Get().BHasStoreItem(e, t, r) ||
                (void 0 !== d && i && i == u.current) ||
                (i !== u.current && (m(void 0), (u.current = i)),
                (n = s().CancelToken.source()),
                o.Z.Get()
                  .QueueStoreItemRequest(e, t, r)
                  .then((t) => {
                    n.token.reason || l.current !== e || m(1 == t), c();
                  })),
              () => n && n.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, i, d, h, _, p, g, b, f, B, I, y, v, R, c]),
          !e)
        )
          return [null, 2];
        if (!1 === d) return [void 0, 2];
        if (o.Z.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!o.Z.Get().BHasStoreItem(e, t, r)) return [void 0, 1];
        const w = o.Z.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return w ? [w, 3] : [null, 2];
      }
      function u(e, t, r) {
        return l(e, 0, t, r);
      }
      function c(e, t, r) {
        return l(e, 1, t, r);
      }
      function d(e, t, r) {
        const [i, a] = l(e, t, r),
          [o, c] = (0, n.useState)(null),
          [d, m] = u(o, r);
        return (
          (0, n.useEffect)(() => {
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
          o ? [d, m] : [i, a]
        );
      }
      function m(e, t, r, i) {
        const l = (0, a.NW)(),
          {
            include_assets: u,
            include_release: c,
            include_platforms: d,
            include_all_purchase_options: m,
            include_screenshots: h,
            include_trailers: _,
            include_ratings: p,
            include_tag_count: g,
            include_reviews: b,
            include_basic_info: f,
            include_supported_languages: B,
          } = r;
        if (
          ((0, n.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const r = {
                include_assets: u,
                include_release: c,
                include_platforms: d,
                include_all_purchase_options: m,
                include_screenshots: h,
                include_trailers: _,
                include_ratings: p,
                include_tag_count: g,
                include_reviews: b,
                include_basic_info: f,
                include_supported_languages: B,
              },
              i = e.filter(
                (e) =>
                  !(
                    o.Z.Get().BHasStoreItem(e, t, r) ||
                    o.Z.Get().BIsStoreItemMissing(e, t)
                  )
              );
            if (0 == i.length) return;
            const n = s().CancelToken.source(),
              a = i.map((e) => o.Z.Get().QueueStoreItemRequest(e, t, r));
            return (
              Promise.all(a).then(() => {
                n.token.reason || l();
              }),
              () => n.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, i, l, u, c, d, m, h, _, p, g, b, f, B]),
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
      function h(e, t, r) {
        return m(e, 0, t, r);
      }
      function _() {
        n.useEffect(
          () => (
            o.Z.Get().SetReturnUnavailableItems(!0),
            () => o.Z.Get().SetReturnUnavailableItems(!1)
          ),
          []
        );
      }
    },
  },
]);
