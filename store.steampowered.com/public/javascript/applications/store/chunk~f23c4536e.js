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
        NO: () => f,
        UC: () => p,
        A1: () => h,
        yp: () => d,
        iP: () => m,
      });
      var i = r(89526),
        n = r(6960),
        s = r(70983),
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
              n = !1,
              s = !1,
              a = !1;
            for (let o = 0; o < e.length; o++) {
              let l = e[o];
              switch (i.type) {
                case 0:
                  "[" == l
                    ? ((i.type = 2), (s = !0))
                    : ((i.type = 1), "\\" == l && t ? (n = !n) : (i.text += l));
                  break;
                case 2:
                case 3:
                  if ("/" == l && s) (i.type = 3), (i.text = ""), (s = !1);
                  else if ("[" != l || n)
                    if ("]" != l || n)
                      "\\" == l && t
                        ? ((i.text += l), (n = !n), (s = !1))
                        : ((i.text += l), (n = !1), (s = !1));
                    else {
                      const e =
                          2 == i.type &&
                          "noparse" == i.text.toLocaleLowerCase(),
                        t =
                          3 == i.type &&
                          "noparse" == i.text.toLocaleLowerCase();
                      s || (a && !t)
                        ? (i.ConvertMalformedNodeToText(), (i.text += l))
                        : e
                        ? (a = !0)
                        : t && (a = !1),
                        (i = u(r, i)),
                        (s = !1);
                    }
                  else
                    i.ConvertMalformedNodeToText(), (i = u(r, i, 2)), (s = !0);
                  break;
                case 1:
                  "[" != l || n
                    ? "\\" == l && t
                      ? (n && (i.text += l), (n = !n))
                      : ((i.text += l), (n = !1))
                    : ((i = u(r, i, 2)), (s = !0));
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
            n = function () {
              return i.length < 1 ? void 0 : i[i.length - 1];
            },
            s = this.m_dictComponents,
            a = !1,
            o = !0,
            l = function (e, n, l) {
              if (e && e.node.tag === n.text && s.get(e.node.tag)) {
                const n = s.get(e.node.tag),
                  l = i.map((e) => e.node.tag),
                  u = { parentTags: l, tagname: e.node.tag, args: e.node.args },
                  c = t(n.Constructor, u, ...r.GetElements());
                (r = e.accumulator),
                  r.AppendNode(c),
                  (a = n.skipFollowingNewline),
                  (o = e.bWrapTextForCopying);
              } else if (e) {
                let t = e.accumulator;
                t.AppendText("[" + e.node.text + "]", !1),
                  r.GetElements().forEach((e) => t.AppendNode(e)),
                  t.AppendText("[/" + n.text + "]", !1),
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
                const t = s.get(e.tag);
                if (t) {
                  const c = n();
                  if (void 0 !== c) {
                    const t = s.get(c.node.tag);
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
                  n() &&
                  n().node.tag !== e.text &&
                  s.get(n().node.tag) &&
                  s.get(n().node.tag).autocloses;

                ) {
                  const e = i.pop();
                  l(e, e.node);
                }
                if (
                  (null === (c = n()) || void 0 === c ? void 0 : c.node.tag) ==
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
                n = 0,
                s = 0;
              "=" == e[0] && (n = 2);
              let a = !1;
              for (s++; s < e.length; s++) {
                let o = e[s],
                  l = !0,
                  u = !1;
                switch (n) {
                  case 0:
                    if ("=" == o) return {};
                    if (" " == o) continue;
                    n = 1;
                    break;
                  case 1:
                    ("=" != o && " " != o) ||
                      a ||
                      (" " == o ? ((n = 0), (u = !0)) : (n = 2), (l = !1));
                    break;
                  case 2:
                    " " == o
                      ? ((n = 0), (l = !1), (u = !0))
                      : '"' == o
                      ? ((n = 4), (l = !1))
                      : (n = 3);
                    break;
                  case 3:
                  case 4:
                    ((" " == o && 4 != n && !a) ||
                      ('"' == o && 4 == n && !a)) &&
                      ((n = 0), (l = !1), (u = !0));
                }
                if (l)
                  if ("\\" != o || a)
                    if (((a = !1), 1 == n)) r += o;
                    else {
                      if (3 != n && 4 != n)
                        throw new Error(
                          "Not expecting to accumulate buffer in state " + n
                        );
                      i += o;
                    }
                  else a = !0;
                u && ((t[r] = i), (r = ""), (i = ""));
              }
              0 != n && (t[r] = i);
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
            (this.m_renderingLanguage = r || (0, n.jM)(s.De.LANGUAGE));
        }
        UpdateOverrideLanguage(e) {
          this.m_renderingLanguage = e || (0, n.jM)(s.De.LANGUAGE);
        }
        ParseBBCode(e, t, r = !1) {
          let n = 0;
          const s = this.Parse(
            e,
            (e, r, ...s) =>
              i.createElement(
                e,
                Object.assign(Object.assign({}, r), {
                  context: t,
                  language: this.m_renderingLanguage,
                  key: "bbnode_" + n++,
                }),
                ...s
              ),
            r
          );
          return s.length > 1
            ? i.createElement(i.Fragment, null, ...s)
            : 1 == s.length
            ? s[0]
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
        _ = [
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
        h = (d.filter((e) => -1 == _.indexOf(e)), "{STEAM_CLAN_IMAGE}"),
        p = "{STEAM_CLAN_LOC_IMAGE}";
      function g(e, t = null, r = " ") {
        let i = null == t ? void 0 : t.join("|");
        i || (i = d.join("|") + "|\\*");
        let n = new RegExp("\\[(" + i + ")\\b[^\\]]*\\].*?\\[/\\1\\]", "gi");
        return e.replace(n, r);
      }
      function f(e, t = null, r = "") {
        let i = null == t ? void 0 : t.join("|");
        i || (i = d.join("|") + "|\\*");
        let n = "\\[\\/?(?:" + i + "){1,}.*?]";
        return e.replace(new RegExp(n, "gi"), r);
      }
    },
    26371: (e, t, r) => {
      r.d(t, { DX: () => a, LT: () => s, So: () => o });
      var i = r(89526),
        n = r(32338);
      class s {
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
      r.d(t, { $2: () => d, Ax: () => f, e8: () => h });
      var i = r(45878),
        n = r(19320),
        s = (r(11643), r(17169)),
        a = r(82702);
      const o = i.Message;
      class l extends o {
        constructor(e = null) {
          super(),
            l.prototype.released_only || n.aR(l.M()),
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
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  coming_soon_only: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  type_filters: { n: 3, c: u },
                  tagids_must_match: { n: 10, c, r: !0, q: !0 },
                  tagids_exclude: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: n.FE.readInt32,
                    pbr: n.FE.readPackedInt32,
                    bw: n.Xc.writeRepeatedInt32,
                  },
                  content_descriptors_must_match: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: n.FE.readEnum,
                    pbr: n.FE.readPackedEnum,
                    bw: n.Xc.writeRepeatedEnum,
                  },
                  content_descriptors_excluded: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: n.FE.readEnum,
                    pbr: n.FE.readPackedEnum,
                    bw: n.Xc.writeRepeatedEnum,
                  },
                  regional_top_n_sellers: {
                    n: 40,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  global_top_n_sellers: {
                    n: 41,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  regional_long_term_top_n_sellers: {
                    n: 42,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  global_long_term_top_n_sellers: {
                    n: 43,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  store_page_filter: { n: 44, c: s._v },
                  parent_appids: {
                    n: 45,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(l.M(), e, t);
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
            u.prototype.include_apps || n.aR(u.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  include_apps: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  include_packages: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  include_bundles: {
                    n: 3,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  include_games: {
                    n: 10,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  include_demos: {
                    n: 11,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  include_mods: {
                    n: 12,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  include_dlc: { n: 13, br: n.FE.readBool, bw: n.Xc.writeBool },
                  include_software: {
                    n: 14,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  include_video: {
                    n: 15,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  include_hardware: {
                    n: 16,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  include_series: {
                    n: 17,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  include_music: {
                    n: 18,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(u.M(), e, t);
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
            c.prototype.tagids || n.aR(c.M()),
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
                    br: n.FE.readInt32,
                    pbr: n.FE.readPackedInt32,
                    bw: n.Xc.writeRepeatedInt32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(c.M(), e, t);
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
            d.prototype.start || n.aR(d.M()),
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
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  count: {
                    n: 2,
                    d: 10,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  sort: { n: 10, d: 0, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  filters: { n: 20, c: l },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(d.M(), e, t);
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
            m.prototype.id || n.aR(m.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  id: { n: 1, c: a.oY },
                  score: { n: 2, br: n.FE.readDouble, bw: n.Xc.writeDouble },
                  spellcheck_generated_result: {
                    n: 3,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(m.M(), e, t);
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
            _.prototype.total_matching_records || n.aR(_.M()),
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
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  start: { n: 2, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  count: { n: 3, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  per_result_metadata: { n: 4, c: m, r: !0, q: !0 },
                  spellcheck_suggestions: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: n.FE.readString,
                    bw: n.Xc.writeRepeatedString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryResultMetadata";
        }
      }
      class h extends o {
        constructor(e = null) {
          super(),
            h.prototype.query_name || n.aR(h.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  query_name: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  query: { n: 2, c: d },
                  context: { n: 3, c: a.WJ },
                  data_request: { n: 4, c: a.Qn },
                  override_country_code: {
                    n: 5,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_Query_Request";
        }
      }
      class p extends o {
        constructor(e = null) {
          super(),
            p.prototype.metadata || n.aR(p.M()),
            o.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  metadata: { n: 1, c: _ },
                  ids: { n: 2, c: a.oY, r: !0, q: !0 },
                  store_items: { n: 3, c: a.VL, r: !0, q: !0 },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(p.M(), e, t);
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
            g.prototype.metadata || n.aR(g.M()),
            o.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  metadata: { n: 1, c: _ },
                  ids: { n: 2, c: a.oY, r: !0, q: !0 },
                  store_items: { n: 3, c: a.VL, r: !0, q: !0 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_SearchSuggestions_Response";
        }
      }
      var f;
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
      })(f || (f = {}));
    },
    79983: (e, t, r) => {
      r.d(t, { De: () => l, Fq: () => o, pA: () => a });
      var i = r(82702),
        n = r(70983),
        s = (r(45878), r(17922), r(38800));
      r(40632);
      function a(e, t) {
        e.Body().set_context(o(t));
      }
      function o(e) {
        let t = new i.WJ();
        return (
          e || t.set_country_code(n.De.COUNTRY),
          t.set_language(n.De.LANGUAGE),
          n.De.EREALM != s.IN.k_ESteamRealmUnknown &&
            t.set_steam_realm(n.De.EREALM),
          t
        );
      }
      function l(e, t) {
        e.Body().set_data_request(i.Qn.fromObject(t));
      }
    },
    63154: (e, t, r) => {
      r.d(t, { Z: () => y });
      var i = r(33940),
        n = r(50265),
        s = (r(6960), r(38800), r(17922)),
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
      var _ = r(32338),
        h = r(47330),
        p = r(70983),
        g = r(79983),
        f = r(55449);
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
      function B(e, t) {
        return (0, i.mG)(this, void 0, void 0, function* () {
          const r = yield e,
            i = yield t;
          return 1 != r ? r : i;
        });
      }
      class y {
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
            y.sm_instance ||
              ((y.sm_instance = new y()),
              (window.StoreItemCache = y.sm_instance)),
            y.sm_instance
          );
        }
        static Initialize(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
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
          return y.Get().m_bInitialized;
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
            const n = this.m_PendingInfoPromise;
            return (
              this.m_setPendingAppInfo.size +
                this.m_setPendingPackageInfo.size +
                this.m_setPendingBundleInfo.size >=
                this.k_nMaxBatchSize &&
                (this.m_PendingTimer &&
                  window.clearTimeout(this.m_PendingTimer),
                this.FlushPendingInfo()),
              n
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
              n = this.m_setPendingDataRequest;
            (this.m_PendingInfoPromise = void 0),
              (this.m_PendingInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              this.m_setPendingBundleInfo.clear(),
              this.m_setPendingPackageInfo.clear(),
              (this.m_setPendingDataRequest = {}),
              (this.m_PendingTimer = void 0),
              this.HintLoadStoreItems(void 0, t, r, i, n).then((t) => e(t));
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
          return i && f.Z.BDataRequestContainsOtherDataRequest(i.dataRequest, r)
            ? i.promise
            : null;
        }
        HintLoadStoreItems(e, t, r, n, s) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            const a = new Promise((e) => (i = e));
            let o = [],
              l = [];
            (t || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, 0, s);
              if (t) l.push(t);
              else {
                o.push(u.oY.fromObject({ appid: e }));
                let t = b(this.GetStoreItemDataRequest(e, 0), s);
                const r = this.m_mapAppsInFlight.get(e);
                (t = b(null == r ? void 0 : r.dataRequest, t)),
                  r && l.push(r.promise),
                  this.m_mapAppsInFlight.set(e, {
                    promise: r ? B(r.promise, a) : a,
                    dataRequest: t,
                  });
              }
            }),
              (r || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(e, 1, s);
                if (t) l.push(t);
                else {
                  o.push(u.oY.fromObject({ packageid: e }));
                  let t = b(this.GetStoreItemDataRequest(e, 1), s);
                  const r = this.m_mapPackageInFlight.get(e);
                  (t = b(null == r ? void 0 : r.dataRequest, t)),
                    r && l.push(r.promise),
                    this.m_mapPackageInFlight.set(e, {
                      promise: r ? B(r.promise, a) : a,
                      dataRequest: t,
                    });
                }
              }),
              (n || []).forEach((e) => {
                const t = this.GetPreviousSupersetLoadPromise(e, 2, s);
                if (t) l.push(t);
                else {
                  o.push(u.oY.fromObject({ bundleid: e }));
                  let t = b(this.GetStoreItemDataRequest(e, 2), s);
                  const r = this.m_mapBundleInFlight.get(e);
                  (t = b(null == r ? void 0 : r.dataRequest, t)),
                    r && l.push(r.promise),
                    this.m_mapBundleInFlight.set(e, {
                      promise: r ? B(r.promise, a) : a,
                      dataRequest: t,
                    });
                }
              });
            let c = 1;
            if (
              (o.length > 0 &&
                (c = yield this.InternalHandleLoadStoreItems(e, o, s)),
              i(c),
              l.length > 0)
            ) {
              const e = yield Promise.all(l);
              for (const t of e) 1 != t && 1 == c && (c = t);
            }
            return (
              (t || []).forEach((e) => this.m_mapAppsInFlight.delete(e)),
              (r || []).forEach((e) => this.m_mapPackageInFlight.delete(e)),
              (n || []).forEach((e) => this.m_mapBundleInFlight.delete(e)),
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
              var r, i, n, s, a, o;
              let l = null !== (r = e.appid()) && void 0 !== r ? r : 0,
                u = null !== (i = t.appid()) && void 0 !== i ? i : 0;
              if (l != u) return l - u;
              let c = null !== (n = e.packageid()) && void 0 !== n ? n : 0,
                d = null !== (s = t.packageid()) && void 0 !== s ? s : 0;
              if (c != d) return c - d;
              let m = null !== (a = e.bundleid()) && void 0 !== a ? a : 0,
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
                this.SetSteamInterface(new a.J(p.De.WEBAPI_BASE_URL)),
              (e = this.GetSteamInterface())),
              (t = this.SortStoreItems(t));
            const o = new Array();
            try {
              const a = [];
              for (; t.length > 0; ) {
                const i = t.splice(0, this.k_nMaxBatchSize);
                if ((o.push(i), this.m_bUsePartnerAPI)) {
                  const t = s.gA.Init(d);
                  t.Body().set_include_unpublished(!1);
                  const n = t.Body().request(!0);
                  n.set_context((0, g.Fq)(this.m_bUsePartnerAPI)),
                    n.set_data_request(u.Qn.fromObject(r)),
                    n.set_ids(i),
                    a.push(m.GetItems(e.GetServiceTransport(), t));
                } else {
                  const t = s.gA.Init(u.eK);
                  (0, g.pA)(t, this.m_bUsePartnerAPI),
                    (0, g.De)(t, r),
                    t.Body().set_ids(i),
                    a.push(u.VJ.GetItems(e.GetAnonymousServiceTransport(), t));
                }
              }
              (yield Promise.all(a)).forEach((e, s) => {
                1 == e.GetEResult()
                  ? e
                      .Body()
                      .store_items()
                      .forEach((e) => {
                        const t = e.id(),
                          i = e.item_type();
                        let n =
                            this.m_bReturnUnavailableItems && 15 == e.success(),
                          s =
                            1 == e.success() && !this.BIsStoreItemMissing(t, i);
                        if (n || s) this.ReadItem(e, r);
                        else {
                          switch (
                            ("dev" == p.De.WEB_UNIVERSE &&
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
                      (0, n.ZN)(t)
                    ),
                    (1 == e.Hdr().transport_error() || p.De.FROM_WEB) &&
                      this.MarkStoreItemIDUnavailable(o[s]),
                    1 == i && (i = e.GetEResult()));
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
          let n = i.get(e.id());
          return (
            n ? n.MergeData(e, t) : ((n = new f.Z(e, t)), i.set(e.id(), n)), n
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
    23708: (e, t, r) => {
      r.d(t, {
        Vm: () => d,
        ie: () => c,
        jk: () => l,
        oA: () => h,
        vs: () => u,
        wZ: () => _,
      });
      var i = r(52868),
        n = r.n(i),
        s = r(89526),
        a = (r(44229), r(38800), r(82702), r(31621)),
        o = (r(55449), r(63154));
      function l(e, t, r, i) {
        const a = (0, s.useRef)(),
          l = (0, s.useRef)(void 0);
        a.current = e;
        const [u, c] = (0, s.useState)(void 0),
          {
            include_assets: d,
            include_release: m,
            include_platforms: _,
            include_all_purchase_options: h,
            include_screenshots: p,
            include_trailers: g,
            include_ratings: f,
            include_tag_count: b,
            include_reviews: B,
            include_basic_info: y,
            include_supported_languages: v,
          } = r;
        if (
          ((0, s.useEffect)(() => {
            const r = {
              include_assets: d,
              include_release: m,
              include_platforms: _,
              include_all_purchase_options: h,
              include_screenshots: p,
              include_trailers: g,
              include_ratings: f,
              include_tag_count: b,
              include_reviews: B,
              include_basic_info: y,
              include_supported_languages: v,
            };
            let s = null;
            return (
              !e ||
                o.Z.Get().BHasStoreItem(e, t, r) ||
                (void 0 !== u && i && i == l.current) ||
                (i !== l.current && (c(void 0), (l.current = i)),
                (s = n().CancelToken.source()),
                o.Z.Get()
                  .QueueStoreItemRequest(e, t, r)
                  .then((t) => {
                    s.token.reason || a.current !== e || c(1 == t);
                  })),
              () => s && s.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, i, u, d, m, _, h, p, g, f, b, B, y, v]),
          !e)
        )
          return [null, 2];
        if (!1 === u) return [void 0, 2];
        if (o.Z.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!o.Z.Get().BHasStoreItem(e, t, r)) return [void 0, 1];
        const I = o.Z.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return I ? [I, 3] : [null, 2];
      }
      function u(e, t, r) {
        return l(e, 0, t, r);
      }
      function c(e, t, r) {
        return l(e, 1, t, r);
      }
      function d(e, t, r) {
        const [i, a] = l(e, t, r),
          [o, c] = (0, s.useState)(null),
          [d, m] = u(o, r);
        return (
          (0, s.useEffect)(() => {
            var e;
            const t = n().CancelToken.source();
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
            include_screenshots: _,
            include_trailers: h,
            include_ratings: p,
            include_tag_count: g,
            include_reviews: f,
            include_basic_info: b,
            include_supported_languages: B,
          } = r;
        if (
          ((0, s.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const r = {
                include_assets: u,
                include_release: c,
                include_platforms: d,
                include_all_purchase_options: m,
                include_screenshots: _,
                include_trailers: h,
                include_ratings: p,
                include_tag_count: g,
                include_reviews: f,
                include_basic_info: b,
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
            const s = n().CancelToken.source(),
              a = i.map((e) => o.Z.Get().QueueStoreItemRequest(e, t, r));
            return (
              Promise.all(a).then(() => {
                s.token.reason || l();
              }),
              () => s.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, i, l, u, c, d, m, _, h, p, g, f, b, B]),
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
      function h() {
        s.useEffect(
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
