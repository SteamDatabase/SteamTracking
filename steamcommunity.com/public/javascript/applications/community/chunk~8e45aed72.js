/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8120],
  {
    17962: (e) => {
      e.exports = {
        FAQContainer: "faqbbcode_FAQContainer_1BWX4",
        Section: "faqbbcode_Section_NWJUH",
        Note: "faqbbcode_Note_1Er-4",
        Important: "faqbbcode_Important_2LRZH",
        Warning: "faqbbcode_Warning_3G4C2",
        FAQImage: "faqbbcode_FAQImage_1sKwB",
      };
    },
    40993: (e, t, r) => {
      "use strict";
      r.d(t, { R: () => f });
      var i = r(89526),
        a = r(86283),
        n = r(54297),
        s = r(87178),
        l = r(19304),
        o = r(32765),
        m = r(24174),
        u = r(4116),
        c = r(14288),
        d = r(29667),
        _ = r(17962),
        B = r.n(_);
      const g = new Map([
          ...Array.from(c.Be.entries()),
          ...Array.from(c.YY.entries()),
          [
            "section",
            {
              Constructor: function (e) {
                let t = (0, c.im)(e.args, "id");
                t &&
                  "string" == typeof t &&
                  t.length > 0 &&
                  "#" === t[0] &&
                  (t = t.substring(1));
                const r = (0, c.im)(e.args, "style"),
                  a = (0, l.Z)(
                    B().Section,
                    "note" == r && B().Note,
                    "important" == r && B().Important,
                    "warning" == r && B().Warning
                  );
                return i.createElement(
                  "div",
                  { id: t || void 0, className: a },
                  e.children
                );
              },
              autocloses: !1,
            },
          ],
          [
            "img",
            {
              Constructor: function (e) {
                var t, r;
                const { showErrorInfo: a } = e.context;
                let l =
                  null === (t = null == e ? void 0 : e.children) || void 0 === t
                    ? void 0
                    : t.toString();
                if (
                  (null == l || null == l || 0 == l.length) &&
                  ((l =
                    null === (r = null == e ? void 0 : e.args) || void 0 === r
                      ? void 0
                      : r[""]),
                  null == l || null == l || 0 == l.length)
                )
                  return "";
                const o = (0, c.vZ)(l, e.language);
                return "string" == typeof o
                  ? ((l = o),
                    a
                      ? i.createElement(n.e, {
                          className: B().FAQImage,
                          src: l,
                        })
                      : ((l = l.replace("http://", "https://")),
                        i.createElement("img", {
                          className: B().FAQImage,
                          src: l,
                        })))
                  : i.createElement(s.j, {
                      className: B().FAQImage,
                      rgSources: o,
                    });
              },
              autocloses: !1,
            },
          ],
          [
            "exclude_realm",
            {
              Constructor: function (e) {
                const t = (0, c.im)(e.args);
                return ("global" == t &&
                  o.De.EREALM == a.IN.k_ESteamRealmGlobal) ||
                  ("china" == t && (0, o.h4)())
                  ? null
                  : i.createElement(i.Fragment, null, e.children);
              },
              autocloses: !1,
            },
          ],
        ]),
        f = (e) => {
          const { text: t, bShowErrorInfo: r } = e,
            a = i.useCallback(
              (e) =>
                new d.Ax(
                  new d.qL(
                    new u.So(new u.LT(), 0),
                    e,
                    [
                      {
                        urlRegExp: /youtu.be|youtube.com/i,
                        fnBBComponent: c.V2,
                      },
                    ],
                    {}
                  ),
                  e
                ),
              []
            ),
            n = i.useRef(new m.Z6(g, a));
          return i.createElement(
            "div",
            { className: B().FAQContainer },
            n.current.ParseBBCode(t, { showErrorInfo: r })
          );
        };
    },
    98150: (e, t, r) => {
      "use strict";
      r.d(t, {
        xP: () => $,
        hS: () => Z,
        cJ: () => K,
        wl: () => te,
        SP: () => ie,
        EH: () => re,
        Ky: () => ae,
        NV: () => ee,
      });
      var i = r(33940),
        a = r(52868),
        n = r.n(a),
        s = r(38072),
        l = r.n(s),
        o = r(50265),
        m = r(89526),
        u = r(46875),
        c = r(86283),
        d = r(23801),
        _ = r(26464),
        B = r(23217),
        g = r(32765);
      class f {
        constructor(e, t) {
          (this.m_summary = e),
            (this.m_mapStoredDrafts = t),
            (this.m_mapLocalUpdates = new Map());
          for (let e = 0; e < 30; e++) this.m_mapLocalUpdates.set(e, {});
        }
        BNeedsSaving(e) {
          if (void 0 !== e) {
            const t = this.m_mapLocalUpdates.get(e);
            return !!t.strTitle || !!t.strContent;
          }
          return Array.from(this.m_mapLocalUpdates.values()).some(
            (e) => !!e.strTitle || !!e.strContent
          );
        }
        SaveDrafts() {
          var e, t, r, a;
          return (0, i.mG)(this, void 0, void 0, function* () {
            (0,
            d.X)(Boolean(null === (e = this.m_summary) || void 0 === e ? void 0 : e.faq_id), "Attempting to save when we lack a FaqID in the summary object");
            let i = 1,
              n = new Array();
            for (let e = 0; e < 30; ++e)
              if (
                (this.m_mapLocalUpdates.get(e).strTitle &&
                  this.m_mapLocalUpdates.get(e).strTitle !==
                    (null === (t = this.m_mapStoredDrafts.get(e)) ||
                    void 0 === t
                      ? void 0
                      : t.title)) ||
                (this.m_mapLocalUpdates.get(e).strContent &&
                  this.m_mapLocalUpdates.get(e).strContent !==
                    (null === (r = this.m_mapStoredDrafts.get(e)) ||
                    void 0 === r
                      ? void 0
                      : r.content))
              ) {
                const t = this.GetDraftTitle(e),
                  r = this.GetDraftContent(e),
                  s = $.Get().UpdateDraft(
                    null === (a = this.m_summary) || void 0 === a
                      ? void 0
                      : a.faq_id,
                    e,
                    t,
                    r
                  );
                s
                  .then((a) => {
                    1 == a.eResult
                      ? (0, o.z)(() => {
                          this.m_mapStoredDrafts.has(e) ||
                            this.m_mapStoredDrafts.set(e, {}),
                            (this.m_mapStoredDrafts.get(e).title = t),
                            (this.m_mapStoredDrafts.get(e).content = r),
                            (this.m_mapStoredDrafts.get(e).timestamp =
                              a.rtUpdateTime),
                            (this.m_mapStoredDrafts.get(e).author_account_id =
                              g.L7.accountid.toString()),
                            (this.m_mapLocalUpdates.get(e).strTitle = null),
                            (this.m_mapLocalUpdates.get(e).strContent = null);
                          let i = !1;
                          this.m_summary.per_language_info.forEach((t) => {
                            e == t.language &&
                              ((i = !0),
                              (t.last_update_timestamp = Math.max(
                                t.last_update_timestamp,
                                a.rtUpdateTime
                              )));
                          }),
                            i ||
                              this.m_summary.per_language_info.push({
                                language: e,
                                last_update_timestamp: a.rtUpdateTime,
                              });
                        })
                      : 1 == i &&
                        (console.error(
                          "FAQModel.SaveDraft: Response not ok " + a.eResult,
                          a
                        ),
                        (i = a.eResult));
                  })
                  .catch((e) => {
                    console.error(
                      "FAQModel.SaveDrafts: Hit error " +
                        (0, B.l)(e).strErrorMsg
                    ),
                      1 == i && (i = 2);
                  }),
                  n.push(s);
              }
            return yield Promise.all(n), i;
          });
        }
        GetFAQInternalName() {
          var e;
          return null === (e = this.m_summary) || void 0 === e
            ? void 0
            : e.internal_name;
        }
        GetDraftTitle(e) {
          var t;
          return null !== this.m_mapLocalUpdates.get(e).strTitle &&
            void 0 !== this.m_mapLocalUpdates.get(e).strTitle
            ? this.m_mapLocalUpdates.get(e).strTitle
            : null === (t = this.m_mapStoredDrafts.get(e)) || void 0 === t
            ? void 0
            : t.title;
        }
        GetDraftContent(e) {
          var t;
          return null !== this.m_mapLocalUpdates.get(e).strContent &&
            void 0 !== this.m_mapLocalUpdates.get(e).strContent
            ? this.m_mapLocalUpdates.get(e).strContent
            : null === (t = this.m_mapStoredDrafts.get(e)) || void 0 === t
            ? void 0
            : t.content;
        }
        GetDraftTitleWithFallback(e, t = c.IN.k_ESteamRealmGlobal) {
          var r, i, a, n, s, l;
          const o = t == c.IN.k_ESteamRealmChina ? 6 : 0;
          return null !==
            (l =
              null !==
                (n =
                  null !==
                    (i =
                      null !== (r = this.m_mapLocalUpdates.get(e).strTitle) &&
                      void 0 !== r
                        ? r
                        : this.m_mapLocalUpdates.get(o).strTitle) &&
                  void 0 !== i
                    ? i
                    : null === (a = this.m_mapStoredDrafts.get(e)) ||
                      void 0 === a
                    ? void 0
                    : a.title) && void 0 !== n
                ? n
                : null === (s = this.m_mapStoredDrafts.get(o)) || void 0 === s
                ? void 0
                : s.title) && void 0 !== l
            ? l
            : "";
        }
        GetDraftContentWithFallback(e, t = c.IN.k_ESteamRealmGlobal) {
          var r, i, a, n, s, l;
          const o = t == c.IN.k_ESteamRealmChina ? 6 : 0;
          return null !==
            (l =
              null !==
                (n =
                  null !==
                    (i =
                      null !== (r = this.m_mapLocalUpdates.get(e).strContent) &&
                      void 0 !== r
                        ? r
                        : this.m_mapLocalUpdates.get(o).strContent) &&
                  void 0 !== i
                    ? i
                    : null === (a = this.m_mapStoredDrafts.get(e)) ||
                      void 0 === a
                    ? void 0
                    : a.content) && void 0 !== n
                ? n
                : null === (s = this.m_mapStoredDrafts.get(o)) || void 0 === s
                ? void 0
                : s.content) && void 0 !== l
            ? l
            : "";
        }
        GetLastSavedDraftVersion(e) {
          return this.m_mapStoredDrafts.get(e);
        }
        BHasSomeTextForLanguage(e) {
          return Boolean(this.GetDraftContent(e) || this.GetDraftTitle(e));
        }
        SetDraftTitle(e, t) {
          var r;
          t ===
          (null === (r = this.m_mapStoredDrafts.get(e)) || void 0 === r
            ? void 0
            : r.title)
            ? (this.m_mapLocalUpdates.get(e).strTitle = null)
            : (this.m_mapLocalUpdates.get(e).strTitle = t);
        }
        SetDraftContent(e, t) {
          var r;
          t ===
          (null === (r = this.m_mapStoredDrafts.get(e)) || void 0 === r
            ? void 0
            : r.content)
            ? (this.m_mapLocalUpdates.get(e).strContent = null)
            : (this.m_mapLocalUpdates.get(e).strContent = t);
        }
        GetIncludedRealmList() {
          const e = new Array();
          return (
            this.m_summary.visible_in_global_realm &&
              e.push(c.IN.k_ESteamRealmGlobal),
            this.m_summary.visible_in_global_realm &&
              e.push(c.IN.k_ESteamRealmChina),
            0 == e.length && e.push(c.IN.k_ESteamRealmGlobal),
            (0, d.X)(
              e.length > 0,
              `FAQ ${this.m_summary.faq_id} is currently configured so that no realms are valid for display.`
            ),
            e
          );
        }
        BHasPublished() {
          return Boolean(
            this.m_summary.per_language_info.some(
              (e) => !!e.last_publish_timestamp
            )
          );
        }
        GetLastTimeLanguageUpdated(e) {
          var t, r;
          return null !==
            (r =
              null === (t = this.GetLastSavedDraftVersion(e)) || void 0 === t
                ? void 0
                : t.timestamp) && void 0 !== r
            ? r
            : 0;
        }
        GetFAQID() {
          return this.m_summary.faq_id;
        }
        GetSummary() {
          return this.m_summary;
        }
      }
      (0, i.gn)([o.LO], f.prototype, "m_mapLocalUpdates", void 0),
        (0, i.gn)([_.a], f.prototype, "BHasSomeTextForLanguage", null),
        (0, i.gn)([_.a], f.prototype, "GetLastTimeLanguageUpdated", null);
      var y = r(19094),
        b = r(45878),
        p = r(29063);
      const h = b.Message;
      class F extends h {
        constructor(e = null) {
          super(),
            F.prototype.faq_id || p.aR(F.M()),
            h.initialize(this, e, 0, -1, [6], null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  faq_id: {
                    n: 1,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                  internal_name: {
                    n: 2,
                    br: p.FE.readString,
                    bw: p.Xc.writeString,
                  },
                  visible_in_global_realm: {
                    n: 3,
                    br: p.FE.readBool,
                    bw: p.Xc.writeBool,
                  },
                  visible_in_china_realm: {
                    n: 4,
                    br: p.FE.readBool,
                    bw: p.Xc.writeBool,
                  },
                  json_data: {
                    n: 5,
                    br: p.FE.readString,
                    bw: p.Xc.writeString,
                  },
                  per_language_info: { n: 6, c: S, r: !0, q: !0 },
                  url_code: { n: 7, br: p.FE.readString, bw: p.Xc.writeString },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = p.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQSummary";
        }
      }
      class S extends h {
        constructor(e = null) {
          super(),
            S.prototype.language || p.aR(S.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  language: { n: 1, br: p.FE.readUint32, bw: p.Xc.writeUint32 },
                  last_update_timestamp: {
                    n: 2,
                    br: p.FE.readFixed32,
                    bw: p.Xc.writeFixed32,
                  },
                  last_publish_timestamp: {
                    n: 3,
                    br: p.FE.readFixed32,
                    bw: p.Xc.writeFixed32,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = p.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQSummary_CLanguageInfo";
        }
      }
      class w extends h {
        constructor(e = null) {
          super(),
            w.prototype.faq_id || p.aR(w.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  faq_id: {
                    n: 1,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                  language: { n: 2, br: p.FE.readUint32, bw: p.Xc.writeUint32 },
                  version: {
                    n: 3,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                  content: { n: 4, br: p.FE.readString, bw: p.Xc.writeString },
                  title: { n: 5, br: p.FE.readString, bw: p.Xc.writeString },
                  timestamp: {
                    n: 6,
                    br: p.FE.readFixed32,
                    bw: p.Xc.writeFixed32,
                  },
                  author_account_id: {
                    n: 7,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                  url_code: { n: 8, br: p.FE.readString, bw: p.Xc.writeString },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = p.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQContent";
        }
      }
      class A extends h {
        constructor(e = null) {
          super(),
            A.prototype.steamid || p.aR(A.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  steamid: {
                    n: 1,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                  internal_name: {
                    n: 2,
                    br: p.FE.readString,
                    bw: p.Xc.writeString,
                  },
                  json_data: {
                    n: 3,
                    br: p.FE.readString,
                    bw: p.Xc.writeString,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = p.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(A.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Create_Request";
        }
      }
      class v extends h {
        constructor(e = null) {
          super(),
            v.prototype.faq_id || p.aR(v.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  faq_id: {
                    n: 1,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = p.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Create_Response";
        }
      }
      class z extends h {
        constructor(e = null) {
          super(),
            z.prototype.steamid || p.aR(z.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  steamid: {
                    n: 1,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = p.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Delete_Request";
        }
      }
      class M extends h {
        constructor(e = null) {
          super(), h.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new M();
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Delete_Response";
        }
      }
      class R extends h {
        constructor(e = null) {
          super(),
            R.prototype.steamid || p.aR(R.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  steamid: {
                    n: 1,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                  internal_name: {
                    n: 3,
                    br: p.FE.readString,
                    bw: p.Xc.writeString,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = p.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateInternalName_Request";
        }
      }
      class C extends h {
        constructor(e = null) {
          super(), h.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new C();
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateInternalName_Response";
        }
      }
      class Q extends h {
        constructor(e = null) {
          super(),
            Q.prototype.steamid || p.aR(Q.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  steamid: {
                    n: 1,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                  json_data: {
                    n: 3,
                    br: p.FE.readString,
                    bw: p.Xc.writeString,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = p.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(Q.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateJsonData_Request";
        }
      }
      class T extends h {
        constructor(e = null) {
          super(), h.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new T();
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateJsonData_Response";
        }
      }
      class D extends h {
        constructor(e = null) {
          super(),
            D.prototype.steamid || p.aR(D.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  steamid: {
                    n: 1,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                  visible_in_global_realm: {
                    n: 3,
                    br: p.FE.readBool,
                    bw: p.Xc.writeBool,
                  },
                  visible_in_china_realm: {
                    n: 4,
                    br: p.FE.readBool,
                    bw: p.Xc.writeBool,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = p.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(D.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SetVisibility_Request";
        }
      }
      class W extends h {
        constructor(e = null) {
          super(), h.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new W();
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SetVisibility_Response";
        }
      }
      class E extends h {
        constructor(e = null) {
          super(),
            E.prototype.steamid || p.aR(E.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  steamid: {
                    n: 1,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                  language: { n: 3, br: p.FE.readUint32, bw: p.Xc.writeUint32 },
                  content: { n: 4, br: p.FE.readString, bw: p.Xc.writeString },
                  title: { n: 5, br: p.FE.readString, bw: p.Xc.writeString },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = p.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateDraft_Request";
        }
      }
      class U extends h {
        constructor(e = null) {
          super(),
            U.prototype.last_update_timestamp || p.aR(U.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  last_update_timestamp: {
                    n: 1,
                    br: p.FE.readFixed32,
                    bw: p.Xc.writeFixed32,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = p.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateDraft_Response";
        }
      }
      class j extends h {
        constructor(e = null) {
          super(),
            j.prototype.steamid || p.aR(j.M()),
            h.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  steamid: {
                    n: 1,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                  language: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: p.FE.readUint32,
                    pbr: p.FE.readPackedUint32,
                    bw: p.Xc.writeRepeatedUint32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = p.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_PublishDraft_Request";
        }
      }
      class O extends h {
        constructor(e = null) {
          super(),
            O.prototype.last_publish_timestamp || p.aR(O.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  last_publish_timestamp: {
                    n: 1,
                    br: p.FE.readFixed32,
                    bw: p.Xc.writeFixed32,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = p.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(O.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_PublishDraft_Response";
        }
      }
      class q extends h {
        constructor(e = null) {
          super(),
            q.prototype.faq || p.aR(q.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m || (q.sm_m = { proto: q, fields: { faq: { n: 1, c: w } } }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = p.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(q.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_PreviewDraft_Response";
        }
      }
      class G extends h {
        constructor(e = null) {
          super(),
            G.prototype.faq || p.aR(G.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  faq: { n: 1, c: w },
                  faq_exists: {
                    n: 2,
                    d: !1,
                    br: p.FE.readBool,
                    bw: p.Xc.writeBool,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = p.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(G.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetFAQ_Response";
        }
      }
      class I extends h {
        constructor(e = null) {
          super(),
            I.prototype.steamid || p.aR(I.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  steamid: {
                    n: 1,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                  language: { n: 3, br: p.FE.readUint32, bw: p.Xc.writeUint32 },
                  version: {
                    n: 4,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = p.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetFAQVersion_Request";
        }
      }
      class N extends h {
        constructor(e = null) {
          super(),
            N.prototype.faq || p.aR(N.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m || (N.sm_m = { proto: N, fields: { faq: { n: 1, c: w } } }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = p.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(N.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetFAQVersion_Response";
        }
      }
      class L extends h {
        constructor(e = null) {
          super(),
            L.prototype.steamid || p.aR(L.M()),
            h.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  steamid: {
                    n: 1,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = p.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(L.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllDrafts_Request";
        }
      }
      class X extends h {
        constructor(e = null) {
          super(),
            X.prototype.summary || p.aR(X.M()),
            h.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  summary: { n: 1, c: F },
                  draft: { n: 2, c: w, r: !0, q: !0 },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = p.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(X.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllDrafts_Response";
        }
      }
      class x extends h {
        constructor(e = null) {
          super(),
            x.prototype.faq || p.aR(x.M()),
            h.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: { faq: { n: 1, c: F, r: !0, q: !0 } },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = p.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(x.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllFAQsForClan_Response";
        }
      }
      class P extends h {
        constructor(e = null) {
          super(),
            P.prototype.faqs || p.aR(P.M()),
            h.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: { faqs: { n: 1, c: w, r: !0, q: !0 } },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = p.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(P.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Response";
        }
      }
      class V extends h {
        constructor(e = null) {
          super(), h.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new V();
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_CheckFAQPermissions_Response";
        }
      }
      class k extends h {
        constructor(e = null) {
          super(),
            k.prototype.faqs || p.aR(k.M()),
            h.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  faqs: { n: 1, c: J, r: !0, q: !0 },
                  num_total_results: {
                    n: 2,
                    br: p.FE.readInt32,
                    bw: p.Xc.writeInt32,
                  },
                  next_cursor: {
                    n: 3,
                    br: p.FE.readString,
                    bw: p.Xc.writeString,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = p.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(k.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SearchFAQs_Response";
        }
      }
      class J extends h {
        constructor(e = null) {
          super(),
            J.prototype.articleid || p.aR(J.M()),
            h.initialize(this, e, 0, -1, [6], null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  articleid: {
                    n: 1,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                  name: { n: 2, br: p.FE.readString, bw: p.Xc.writeString },
                  content: { n: 3, br: p.FE.readString, bw: p.Xc.writeString },
                  clan_accountid: {
                    n: 4,
                    br: p.FE.readUint32,
                    bw: p.Xc.writeUint32,
                  },
                  url_code: { n: 5, br: p.FE.readString, bw: p.Xc.writeString },
                  localized_names: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: p.FE.readString,
                    bw: p.Xc.writeRepeatedString,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = p.Bh(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(J.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SearchFAQs_Response_CFAQSearchResult";
        }
      }
      var H;
      !(function (e) {
        (e.Create = function (e, t) {
          return e.SendMsg("ClanFAQS.Create#1", t, v, { ePrivilege: 1 });
        }),
          (e.Delete = function (e, t) {
            return e.SendMsg("ClanFAQS.Delete#1", t, M, { ePrivilege: 1 });
          }),
          (e.UpdateInternalName = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateInternalName#1", t, C, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateJsonData = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateJsonData#1", t, T, {
              ePrivilege: 1,
            });
          }),
          (e.SetVisibility = function (e, t) {
            return e.SendMsg("ClanFAQS.SetVisibility#1", t, W, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateDraft#1", t, U, { ePrivilege: 1 });
          }),
          (e.PublishDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.PublishDraft#1", t, O, {
              ePrivilege: 1,
            });
          }),
          (e.PreviewDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.PreviewDraft#1", t, q, {
              ePrivilege: 1,
            });
          }),
          (e.GetFAQ = function (e, t) {
            return e.SendMsg("ClanFAQS.GetFAQ#1", t, G, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetFAQVersion = function (e, t) {
            return e.SendMsg("ClanFAQS.GetFAQVersion#1", t, N, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllDrafts = function (e, t) {
            return e.SendMsg("ClanFAQS.GetAllDrafts#1", t, X, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllFAQsForClan = function (e, t) {
            return e.SendMsg("ClanFAQS.GetAllFAQsForClan#1", t, x, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllLatestVersionPublishedFAQS = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.GetAllLatestVersionPublishedFAQS#1",
              t,
              P,
              { ePrivilege: 1 }
            );
          }),
          (e.CheckFAQPermissions = function (e, t) {
            return e.SendMsg("ClanFAQS.CheckFAQPermissions#1", t, V, {
              ePrivilege: 1,
            });
          }),
          (e.SearchFAQs = function (e, t) {
            return e.SendMsg("ClanFAQS.SearchFAQs#1", t, k, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(H || (H = {}));
      class $ {
        static Get() {
          return $.s_Singleton || ($.s_Singleton = new $()), $.s_Singleton;
        }
        static Init(e) {
          $.Get().m_steamInterface = e;
        }
        constructor() {
          (this.m_mapFAQSummaries = new Map()),
            (this.m_mapFAQPublishedContent = new Map()),
            (this.m_mapFAQDrafts = new Map()),
            (this.m_bHasFAQEdit = !1),
            (this.m_steamInterface = null),
            "dev" == g.De.WEB_UNIVERSE && (window.g_FAQStore = this),
            g.De.IN_STEAMUI ||
              (this.ReadInitialPayload(), this.SetUpWebAPIInterface());
        }
        SetUpWebAPIInterface() {
          const e = (0, g.kQ)("faqstore", "application_config"),
            t = null == e ? void 0 : e.webapi_token;
          this.m_steamInterface = new y.J(g.De.WEBAPI_BASE_URL, t);
        }
        ReadInitialPayload() {
          const e = (0, g.kQ)("faqstore", "application_config");
          if (
            (("dev" != g.De.WEB_UNIVERSE && "beta" != g.De.WEB_UNIVERSE) ||
              console.log("DEV_DEBUG: CFAQStore loading payload: ", e),
            this.BIsConfigValid(e))
          ) {
            if (e.faqs)
              for (const t in e.faqs) {
                const r = e.faqs[t];
                (null == r ? void 0 : r.faq_id) == t &&
                  void 0 !== (null == r ? void 0 : r.language) &&
                  (this.m_mapFAQPublishedContent.has(t) ||
                    this.m_mapFAQPublishedContent.set(t, new Map()),
                  this.m_mapFAQPublishedContent.get(t).set(r.language, r));
              }
            if (e.alldrafts)
              for (const t in e.alldrafts) {
                const r = e.alldrafts[t];
                if (!(null == r ? void 0 : r.summary) || !r.draft) continue;
                this.m_mapFAQSummaries.set(t, r.summary);
                const i = new Map();
                for (const e of r.draft) i.set(e.language, e);
                this.m_mapFAQDrafts.set(
                  t,
                  new f(this.m_mapFAQSummaries.get(t), i)
                );
              }
            if (e.allfaqs)
              for (const t of e.allfaqs)
                t.faq_id &&
                  (this.m_mapFAQSummaries.has(t.faq_id) ||
                    this.m_mapFAQSummaries.set(t.faq_id, t));
            this.m_bHasFAQEdit = Boolean(e.has_faq_edit);
          } else
            "dev" == g.De.WEB_UNIVERSE &&
              console.error("CFAQStore Invalid payload");
        }
        BIsConfigValid(e) {
          const t = e;
          return !!(
            (t && t.faqs && "object" == typeof t.faqs) ||
            (t.alldrafts && "object" == typeof t.alldrafts) ||
            (t.allfaqs && Array.isArray(t.allfaqs))
          );
        }
        CreateFAQ(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const t = u.gA.Init(A);
            t.Body().set_steamid(g.JA.CLANSTEAMID),
              t.Body().set_internal_name(e);
            let r,
              i = 2;
            try {
              const a = yield H.Create(
                this.m_steamInterface.GetServiceTransport(),
                t
              );
              if (((i = a.GetEResult()), 1 == i)) {
                r = a.Body().faq_id();
                const t = { faq_id: r, internal_name: e };
                this.m_mapFAQSummaries.set(r, t);
              } else console.error("FAQStore.CreateFAQ: Create request failed:", i);
            } catch (e) {
              const t = (0, B.l)(e);
              console.error(
                "FAQStore.CreateFAQ: caught error " + t.strErrorMsg,
                t
              );
            }
            return { eResult: i, strFaqId: r };
          });
        }
        UpdateDraft(e, t, r, a) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = u.gA.Init(E);
            i.Body().set_steamid(g.JA.CLANSTEAMID),
              i.Body().set_faq_id(e),
              i.Body().set_language(t),
              i.Body().set_content(a),
              i.Body().set_title(r);
            let n = 2,
              s = 0;
            try {
              const e = yield H.UpdateDraft(
                this.m_steamInterface.GetServiceTransport(),
                i
              );
              (n = e.GetEResult()),
                1 != n
                  ? console.error("FAQStore.UpdateDraft request failed:", n)
                  : (s = e.Body().last_update_timestamp());
            } catch (e) {
              const t = (0, B.l)(e);
              console.error(
                "FAQStore.UpdateDraft: caught error " + t.strErrorMsg,
                t
              );
            }
            return { eResult: n, rtUpdateTime: s };
          });
        }
        UpdateJsonData(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const r = JSON.stringify(t),
              i = u.gA.Init(Q);
            i.Body().set_steamid(g.JA.CLANSTEAMID),
              i.Body().set_faq_id(e),
              i.Body().set_json_data(r);
            let a = 2;
            try {
              (a = (yield H.UpdateJsonData(
                this.m_steamInterface.GetServiceTransport(),
                i
              )).GetEResult()),
                1 != a
                  ? console.error("FAQStore.UpdateJsonData request failed:", a)
                  : (this.m_mapFAQSummaries.get(e).json_data = r);
            } catch (e) {
              const t = (0, B.l)(e);
              console.error(
                "FAQStore.UpdateJsonData: caught error " + t.strErrorMsg,
                t
              );
            }
            return a;
          });
        }
        GetFAQVersion(e, t, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = u.gA.Init(I);
            i.Body().set_steamid(g.JA.CLANSTEAMID),
              i.Body().set_faq_id(e),
              i.Body().set_version(t),
              i.Body().set_language(r);
            try {
              const e = yield H.GetFAQVersion(
                  this.m_steamInterface.GetServiceTransport(),
                  i
                ),
                t = e.GetEResult();
              if (1 == t) return e.Body().faq().toObject();
              console.error("FAQStore.GetFAQVersion request failed:", t);
            } catch (e) {
              const t = (0, B.l)(e);
              console.error(
                "FAQStore.GetFAQVersion: caught error " + t.strErrorMsg,
                t
              );
            }
            return null;
          });
        }
        DeleteFAQ(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const t = u.gA.Init(z);
            t.Body().set_steamid(g.JA.CLANSTEAMID), t.Body().set_faq_id(e);
            let r = 2;
            try {
              (r = (yield H.Delete(
                this.m_steamInterface.GetServiceTransport(),
                t
              )).GetEResult()),
                1 != r
                  ? console.error("FAQStore.DeleteFAQ request failed:", r)
                  : (this.m_mapFAQDrafts.delete(e),
                    this.m_mapFAQPublishedContent.delete(e),
                    this.m_mapFAQSummaries.delete(e));
            } catch (e) {
              const t = (0, B.l)(e);
              console.error(
                "FAQStore.DeleteFAQ: caught error " + t.strErrorMsg,
                t
              );
            }
            return r;
          });
        }
        GetFAQPublishedContent(e, t) {
          const r = this.m_mapFAQPublishedContent.get(e);
          if (!r) return null;
          let i = r.get(t);
          return (
            !i &&
              $.sm_mapFallbackLanguages.has(t) &&
              (i = r.get($.sm_mapFallbackLanguages.get(t))),
            i || 0 == t || (0, g.h4)() || (i = r.get(0)),
            i
          );
        }
        GetFAQDraftContent(e) {
          return this.m_mapFAQDrafts.get(e);
        }
        GetAllFAQSummaries() {
          return Array.from(this.m_mapFAQSummaries.values());
        }
        GetFAQArticleSummary(e) {
          return this.m_mapFAQSummaries.get(e) || {};
        }
        LoadFAQDraftContent(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (this.m_mapFAQDrafts.has(e)) return this.m_mapFAQDrafts.get(e);
            const t = u.gA.Init(L);
            t.Body().set_steamid(g.JA.CLANSTEAMID), t.Body().set_faq_id(e);
            let r = 2;
            try {
              const i = yield H.GetAllDrafts(
                this.m_steamInterface.GetServiceTransport(),
                t
              );
              if (((r = i.GetEResult()), 1 != r))
                return (
                  console.error(
                    "FaqStore.LoadFAQDraftContent request failed:",
                    r
                  ),
                  null
                );
              {
                const t = i.Body().summary().toObject();
                this.m_mapFAQSummaries.set(e, t);
                const r = new Map();
                i.Body()
                  .draft()
                  .forEach((e) => r.set(e.language(), e.toObject()));
                const a = new f(this.m_mapFAQSummaries.get(e), r);
                return this.m_mapFAQDrafts.set(e, a), a;
              }
            } catch (e) {
              const t = (0, B.l)(e);
              console.error(
                "FaqStore.LoadFAQDraftContent: exception " + t.strErrorMsg,
                t
              );
            }
            return null;
          });
        }
        UpdateVisibility(e, t, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = u.gA.Init(D);
            i.Body().set_steamid(g.JA.CLANSTEAMID),
              i.Body().set_faq_id(e),
              i.Body().set_visible_in_global_realm(t),
              i.Body().set_visible_in_china_realm(r);
            let a = 2;
            try {
              if (
                ((a = (yield H.SetVisibility(
                  this.m_steamInterface.GetServiceTransport(),
                  i
                )).GetEResult()),
                1 === a)
              ) {
                const i = this.m_mapFAQSummaries.get(e);
                i &&
                  ((i.visible_in_global_realm = t),
                  (i.visible_in_china_realm = r),
                  this.m_mapFAQSummaries.set(e, i));
              } else console.error("FaqStore.UpdateVisibility: Failed " + a);
            } catch (e) {
              const t = (0, B.l)(e);
              console.error(
                "FaqStore.UpdateVisibility: exception " + t.strErrorMsg,
                t
              );
            }
            return a;
          });
        }
        PublishDraftByLanguage(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!t || 0 == t.length) return 1;
            const r = u.gA.Init(j);
            r.Body().set_steamid(g.JA.CLANSTEAMID),
              r.Body().set_faq_id(e),
              t.forEach((e) => r.Body().add_language(e));
            let i = 2;
            try {
              const a = yield H.PublishDraft(
                this.m_steamInterface.GetServiceTransport(),
                r
              );
              if (((i = a.GetEResult()), 1 === i)) {
                const r = this.m_mapFAQSummaries.get(e);
                r &&
                  (0, o.z)(() => {
                    this.m_mapFAQPublishedContent.has(e) ||
                      this.m_mapFAQPublishedContent.set(e, new Map()),
                      r.per_language_info.forEach((r) => {
                        var i;
                        const n = r.language;
                        if (t.indexOf(n) >= 0) {
                          r.last_publish_timestamp = Math.max(
                            r.last_publish_timestamp,
                            a.Body().last_publish_timestamp()
                          );
                          const t =
                            null === (i = this.m_mapFAQDrafts.get(e)) ||
                            void 0 === i
                              ? void 0
                              : i.GetLastSavedDraftVersion(n);
                          this.m_mapFAQPublishedContent.get(e).set(n, t);
                        }
                      });
                  });
              } else console.error("FaqStore.PublishDraftByLanguage: Failed " + i);
            } catch (e) {
              const t = (0, B.l)(e);
              console.error(
                "FaqStore.PublishDraftByLanguage: exception " + t.strErrorMsg,
                t
              );
            }
            return i;
          });
        }
        UpdateInternalName(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const r = u.gA.Init(R);
            r.Body().set_steamid(g.JA.CLANSTEAMID),
              r.Body().set_faq_id(e),
              r.Body().set_internal_name(t);
            let i = 2;
            try {
              (i = (yield H.UpdateInternalName(
                this.m_steamInterface.GetServiceTransport(),
                r
              )).GetEResult()),
                1 === i
                  ? (0, o.z)(() => {
                      var r, i, a;
                      (null === (r = this.m_mapFAQSummaries.get(e)) ||
                      void 0 === r
                        ? void 0
                        : r.internal_name) &&
                        (this.m_mapFAQSummaries.get(e).internal_name = t),
                        (null ===
                          (a =
                            null === (i = this.m_mapFAQDrafts.get(e)) ||
                            void 0 === i
                              ? void 0
                              : i.GetSummary()) || void 0 === a
                          ? void 0
                          : a.internal_name) &&
                          (this.m_mapFAQDrafts
                            .get(e)
                            .GetSummary().internal_name = t);
                    })
                  : console.error("FaqStore.UpdateInternalName: Failed " + i);
            } catch (e) {
              const t = (0, B.l)(e);
              console.error(
                "FaqStore.UpdateInternalName: exception " + t.strErrorMsg,
                t
              );
            }
            return i;
          });
        }
        GetLoadedDraftObjs() {
          return Array.from(this.m_mapFAQDrafts.values());
        }
        RemoveAllDirtyDrafts() {
          var e, t;
          const r =
            null ===
              (t =
                null === (e = this.GetLoadedDraftObjs()) || void 0 === e
                  ? void 0
                  : e.filter((e) => e.BNeedsSaving())) || void 0 === t
              ? void 0
              : t.map((e) => e.GetFAQID());
          null == r || r.forEach((e) => this.m_mapFAQDrafts.delete(e));
        }
        BHasFAQEdit() {
          return this.m_bHasFAQEdit;
        }
        ExportEnglishDraftToCrowdin(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const t =
              g.De.COMMUNITY_BASE_URL +
              "faqs/" +
              g.JA.VANITY_ID +
              "/ajaxpushtocrowdin/" +
              Z(e);
            yield n().get(t);
          });
        }
        ImportNonEnglishDraftsFromCrowdin(e, t, r) {
          var a, s;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i =
                g.De.COMMUNITY_BASE_URL +
                "faqs/" +
                g.JA.VANITY_ID +
                "/ajaxpullfromcrowdin/" +
                Z(e),
              l = new FormData();
            l.append("sessionid", g.De.SESSIONID),
              l.append("languages", t.join(","));
            let o = null;
            try {
              const t = yield n().post(i, l, {
                withCredentials: !0,
                cancelToken: null == r ? void 0 : r.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                1 ==
                  (null === (a = t.data) || void 0 === a ? void 0 : a.success)
              ) {
                const r = t.data.updated,
                  i =
                    null !== (s = null == r ? void 0 : r[e]) && void 0 !== s
                      ? s
                      : [];
                return (
                  i.length > 0 &&
                    (this.m_mapFAQSummaries.has(e) ||
                      this.m_mapFAQDrafts.has(e)) &&
                    (this.m_mapFAQDrafts.delete(e),
                    yield this.LoadFAQDraftContent(e)),
                  i
                );
              }
              o = { response: t };
            } catch (e) {
              o = e;
            }
            const m = (0, B.l)(o);
            return (
              console.error(
                "Could not import from crowdin",
                e,
                m.strErrorMsg,
                m
              ),
              []
            );
          });
        }
        BHasLiveEnglishVersion(e) {
          return this.m_mapFAQSummaries
            .get(e)
            .per_language_info.some(
              (e) => 0 == e.language && e.last_publish_timestamp > 0
            );
        }
        GetNonEnglishDraftsToPublish(e) {
          return this.m_mapFAQSummaries
            .get(e)
            .per_language_info.filter((e) => {
              var t;
              return (
                0 != e.language &&
                e.last_update_timestamp >
                  (null !== (t = e.last_publish_timestamp) && void 0 !== t
                    ? t
                    : 0)
              );
            })
            .map((e) => e.language);
        }
      }
      ($.sm_mapFallbackLanguages = new Map([
        [5, 27],
        [27, 5],
        [29, 6],
      ])),
        (0, i.gn)([o.LO], $.prototype, "m_mapFAQSummaries", void 0),
        (0, i.gn)([o.aD], $.prototype, "RemoveAllDirtyDrafts", null);
      const Y = /^[0-9a-fA-F]+$/;
      function K(e) {
        const t = null == e ? void 0 : e.replace(/-/g, "");
        if (16 != (null == t ? void 0 : t.length) || !Y.test(t)) return null;
        return l().fromString(t, !0, 16).toString();
      }
      function Z(e) {
        const t = ("0000000000000000" + l().fromString(e, !0, 10).toString(16))
          .slice(-16)
          .toUpperCase();
        return `${t.slice(0, 4)}-${t.slice(4, 8)}-${t.slice(8, 12)}-${t.slice(
          12,
          16
        )}`;
      }
      function ee(e, t) {
        return [e && $.Get().GetFAQPublishedContent(e, t), !0];
      }
      function te(e) {
        const [t, r] = m.useState($.Get().GetFAQDraftContent(e)),
          [i, a] = m.useState(!!t);
        return (
          (0, m.useEffect)(() => {
            $.Get()
              .LoadFAQDraftContent(e)
              .then((e) => r(e))
              .finally(() => a(!0));
          }, [e]),
          [t, i]
        );
      }
      function re(e) {
        return [$.Get().GetFAQArticleSummary(e), !0];
      }
      function ie() {
        const e = $.Get().GetAllFAQSummaries();
        return m.useRef([e, !0]).current;
      }
      function ae(e, t, r) {
        const [i, a] = m.useState(null),
          [n, s] = m.useState(!1);
        return (
          (0, m.useEffect)(() => {
            $.Get().BHasFAQEdit() &&
              $.Get()
                .GetFAQVersion(e, t, r)
                .then((e) => a(e))
                .finally(() => s(!0));
          }, [e, t, r]),
          [i, n]
        );
      }
    },
  },
]);
