/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8453],
  {
    16516: (e) => {
      e.exports = {
        FAQContainer: "_2PQsW53YUsH-Z6TICGEF3K",
        Section: "bjwwIcPcDhqU8vTIhRti3",
        Note: "XjQ8ghCC1Ncl0mZyQ3iDM",
        Important: "mRx2Io-gR5pz0gqZnF4e7",
        Warning: "_3Hvtr6roA7ZUH4Vmi-YiYS",
        FAQImage: "_3EebtYBetncFupzjwjtJ8k",
      };
    },
    17909: (e, t, r) => {
      "use strict";
      r.d(t, { u: () => p });
      var i = r(90626),
        a = r(2160),
        n = r(26296),
        s = r(3088),
        l = r(52038),
        o = r(78327),
        m = r(52967),
        u = r(42780),
        c = r(59952),
        d = r(87540),
        g = r(16516),
        B = r.n(g),
        _ = r(74410);
      const f = new Map([
          ...Array.from(c.W4.entries()),
          ...Array.from(c.N2.entries()),
          [
            "section",
            {
              Constructor: function (e) {
                let t = (0, c.j$)(e.args, "id");
                t &&
                  "string" == typeof t &&
                  t.length > 0 &&
                  "#" === t[0] &&
                  (t = t.substring(1));
                const r = (0, c.j$)(e.args, "style"),
                  a = (0, l.A)(
                    B().Section,
                    "note" == r && B().Note,
                    "important" == r && B().Important,
                    "warning" == r && B().Warning,
                  );
                return i.createElement(
                  "div",
                  { id: t || void 0, className: a },
                  e.children,
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
                const o = (0, c._D)(l, e.language);
                return "string" == typeof o
                  ? ((l = o),
                    a
                      ? i.createElement(n.i, {
                          className: B().FAQImage,
                          src: l,
                        })
                      : ((l = l.replace("http://", "https://")),
                        i.createElement("img", {
                          className: B().FAQImage,
                          src: l,
                        })))
                  : i.createElement(s.c, {
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
                const t = (0, c.j$)(e.args);
                return ("global" == t &&
                  o.TS.EREALM == a.TU.k_ESteamRealmGlobal) ||
                  ("china" == t && (0, o.Y2)())
                  ? null
                  : i.createElement(i.Fragment, null, e.children);
              },
              autocloses: !1,
            },
          ],
        ]),
        p = (e) => {
          const { text: t, bShowErrorInfo: r } = e,
            a = i.useCallback(
              (e) =>
                new d.gL(
                  new d.pH(
                    new u.OJ(new u.R8(), 0),
                    e,
                    [
                      {
                        urlRegExp: /youtu.be|youtube.com/i,
                        fnBBComponent: _.j6,
                      },
                    ],
                    {},
                  ),
                  e,
                ),
              [],
            ),
            n = i.useRef(new m.B(f, a, o.TS.LANGUAGE));
          return i.createElement(
            "div",
            { className: B().FAQContainer },
            n.current.ParseBBCode(t, { showErrorInfo: r }),
          );
        };
    },
    54137: (e, t, r) => {
      "use strict";
      r.d(t, {
        pN: () => te,
        Wj: () => ae,
        CJ: () => ie,
        z5: () => se,
        cf: () => oe,
        g5: () => le,
        W: () => me,
        Kv: () => ne,
      });
      var i = r(34629),
        a = r(41735),
        n = r.n(a),
        s = r(38506),
        l = r(14947),
        o = r(90626),
        m = r(56545),
        u = r(2160),
        c = r(44332),
        d = r(6419),
        g = r(68797),
        B = r(78327);
      class _ {
        constructor(e, t) {
          (this.m_mapLocalUpdates = new Map()),
            (0, l.Gn)(this),
            (this.m_summary = e),
            (this.m_mapStoredDrafts = t),
            (this.m_mapLocalUpdates = new Map());
          for (let e = 0; e < 31; e++) this.m_mapLocalUpdates.set(e, {});
        }
        BNeedsSaving(e) {
          if (void 0 !== e) {
            const t = this.m_mapLocalUpdates.get(e);
            return !!t.strTitle || !!t.strContent;
          }
          return Array.from(this.m_mapLocalUpdates.values()).some(
            (e) => !!e.strTitle || !!e.strContent,
          );
        }
        async SaveDrafts() {
          var e, t, r, i;
          (0, c.w)(
            Boolean(
              null === (e = this.m_summary) || void 0 === e ? void 0 : e.faq_id,
            ),
            "Attempting to save when we lack a FaqID in the summary object",
          );
          let a = 1,
            n = new Array();
          for (let e = 0; e < 31; ++e)
            if (
              (this.m_mapLocalUpdates.get(e).strTitle &&
                this.m_mapLocalUpdates.get(e).strTitle !==
                  (null === (t = this.m_mapStoredDrafts.get(e)) || void 0 === t
                    ? void 0
                    : t.title)) ||
              (this.m_mapLocalUpdates.get(e).strContent &&
                this.m_mapLocalUpdates.get(e).strContent !==
                  (null === (r = this.m_mapStoredDrafts.get(e)) || void 0 === r
                    ? void 0
                    : r.content))
            ) {
              const t = this.GetDraftTitle(e),
                r = this.GetDraftContent(e),
                s = te
                  .Get()
                  .UpdateDraft(
                    null === (i = this.m_summary) || void 0 === i
                      ? void 0
                      : i.faq_id,
                    e,
                    t,
                    r,
                  );
              s
                .then((i) => {
                  1 == i.eResult
                    ? (0, l.h5)(() => {
                        this.m_mapStoredDrafts.has(e) ||
                          this.m_mapStoredDrafts.set(e, {}),
                          (this.m_mapStoredDrafts.get(e).title = t),
                          (this.m_mapStoredDrafts.get(e).content = r),
                          (this.m_mapStoredDrafts.get(e).timestamp =
                            i.rtUpdateTime),
                          (this.m_mapStoredDrafts.get(e).author_account_id =
                            B.iA.accountid.toString()),
                          (this.m_mapLocalUpdates.get(e).strTitle = null),
                          (this.m_mapLocalUpdates.get(e).strContent = null);
                        let a = !1;
                        this.m_summary.per_language_info.forEach((t) => {
                          e == t.language &&
                            ((a = !0),
                            (t.last_update_timestamp = Math.max(
                              t.last_update_timestamp,
                              i.rtUpdateTime,
                            )));
                        }),
                          a ||
                            this.m_summary.per_language_info.push({
                              language: e,
                              last_update_timestamp: i.rtUpdateTime,
                            });
                      })
                    : 1 == a &&
                      (console.error(
                        "FAQModel.SaveDraft: Response not ok " + i.eResult,
                        i,
                      ),
                      (a = i.eResult));
                })
                .catch((e) => {
                  console.error(
                    "FAQModel.SaveDrafts: Hit error " + (0, g.H)(e).strErrorMsg,
                  ),
                    1 == a && (a = 2);
                }),
                n.push(s);
            }
          return await Promise.all(n), a;
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
        GetDraftTitleWithFallback(e, t = u.TU.k_ESteamRealmGlobal) {
          var r, i, a, n, s, l;
          const o = t == u.TU.k_ESteamRealmChina ? 6 : 0;
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
        GetDraftContentWithFallback(e, t = u.TU.k_ESteamRealmGlobal) {
          var r, i, a, n, s, l;
          const o = t == u.TU.k_ESteamRealmChina ? 6 : 0;
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
              e.push(u.TU.k_ESteamRealmGlobal),
            this.m_summary.visible_in_global_realm &&
              e.push(u.TU.k_ESteamRealmChina),
            0 == e.length && e.push(u.TU.k_ESteamRealmGlobal),
            (0, c.w)(
              e.length > 0,
              `FAQ ${this.m_summary.faq_id} is currently configured so that no realms are valid for display.`,
            ),
            e
          );
        }
        BHasPublished() {
          return Boolean(
            this.m_summary.per_language_info.some(
              (e) => !!e.last_publish_timestamp,
            ),
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
      (0, i.Cg)([l.sH], _.prototype, "m_mapLocalUpdates", void 0),
        (0, i.Cg)([d.o], _.prototype, "BHasSomeTextForLanguage", null),
        (0, i.Cg)([d.o], _.prototype, "GetLastTimeLanguageUpdated", null);
      var f = r(96059),
        p = r(80613),
        y = r(89068);
      const b = p.Message;
      class S extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.faq_id || y.Sg(S.M()),
            b.initialize(this, e, 0, -1, [6], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  faq_id: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  internal_name: {
                    n: 2,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  visible_in_global_realm: {
                    n: 3,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  visible_in_china_realm: {
                    n: 4,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  json_data: {
                    n: 5,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  per_language_info: { n: 6, c: h, r: !0, q: !0 },
                  url_code: { n: 7, br: y.qM.readString, bw: y.gp.writeString },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = y.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQSummary";
        }
      }
      class h extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.language || y.Sg(h.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  language: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  last_update_timestamp: {
                    n: 2,
                    br: y.qM.readFixed32,
                    bw: y.gp.writeFixed32,
                  },
                  last_publish_timestamp: {
                    n: 3,
                    br: y.qM.readFixed32,
                    bw: y.gp.writeFixed32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = y.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQSummary_CLanguageInfo";
        }
      }
      class w extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.faq_id || y.Sg(w.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  faq_id: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  language: { n: 2, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  version: {
                    n: 3,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  content: { n: 4, br: y.qM.readString, bw: y.gp.writeString },
                  title: { n: 5, br: y.qM.readString, bw: y.gp.writeString },
                  timestamp: {
                    n: 6,
                    br: y.qM.readFixed32,
                    bw: y.gp.writeFixed32,
                  },
                  author_account_id: {
                    n: 7,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  url_code: { n: 8, br: y.qM.readString, bw: y.gp.writeString },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = y.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQContent";
        }
      }
      class M extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.steamid || y.Sg(M.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  internal_name: {
                    n: 2,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  json_data: {
                    n: 3,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = y.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Create_Request";
        }
      }
      class F extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.faq_id || y.Sg(F.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  faq_id: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = y.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Create_Response";
        }
      }
      class z extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.steamid || y.Sg(z.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = y.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Delete_Request";
        }
      }
      class v extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), b.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new v();
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Delete_Response";
        }
      }
      class R extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.steamid || y.Sg(R.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  internal_name: {
                    n: 3,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = y.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateInternalName_Request";
        }
      }
      class A extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), b.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new A();
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateInternalName_Response";
        }
      }
      class C extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.steamid || y.Sg(C.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  json_data: {
                    n: 3,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = y.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateJsonData_Request";
        }
      }
      class q extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), b.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new q();
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateJsonData_Response";
        }
      }
      class U extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.steamid || y.Sg(U.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  visible_in_global_realm: {
                    n: 3,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                  visible_in_china_realm: {
                    n: 4,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = y.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SetVisibility_Request";
        }
      }
      class T extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), b.initialize(this, e, 0, -1, void 0, null);
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
          let t = new p.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SetVisibility_Response";
        }
      }
      class j extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.steamid || y.Sg(j.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  language: { n: 3, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  content: { n: 4, br: y.qM.readString, bw: y.gp.writeString },
                  title: { n: 5, br: y.qM.readString, bw: y.gp.writeString },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = y.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateDraft_Request";
        }
      }
      class W extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.last_update_timestamp || y.Sg(W.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  last_update_timestamp: {
                    n: 1,
                    br: y.qM.readFixed32,
                    bw: y.gp.writeFixed32,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = y.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateDraft_Response";
        }
      }
      class I extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.steamid || y.Sg(I.M()),
            b.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  language: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: y.qM.readUint32,
                    pbr: y.qM.readPackedUint32,
                    bw: y.gp.writeRepeatedUint32,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = y.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_PublishDraft_Request";
        }
      }
      class Q extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.last_publish_timestamp || y.Sg(Q.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  last_publish_timestamp: {
                    n: 1,
                    br: y.qM.readFixed32,
                    bw: y.gp.writeFixed32,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = y.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_PublishDraft_Response";
        }
      }
      class O extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.steamid || y.Sg(O.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  language: { n: 3, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = y.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_PreviewDraft_Request";
        }
      }
      class D extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.faq || y.Sg(D.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m || (D.sm_m = { proto: D, fields: { faq: { n: 1, c: w } } }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = y.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_PreviewDraft_Response";
        }
      }
      class G extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.faq_id || y.Sg(G.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  faq_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  language: { n: 3, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = y.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetFAQ_Request";
        }
      }
      class E extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.faq || y.Sg(E.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  faq: { n: 1, c: w },
                  faq_exists: {
                    n: 2,
                    d: !1,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = y.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetFAQ_Response";
        }
      }
      class N extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.steamid || y.Sg(N.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  language: { n: 3, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                  version: {
                    n: 4,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = y.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetFAQVersion_Request";
        }
      }
      class L extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.faq || y.Sg(L.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m || (L.sm_m = { proto: L, fields: { faq: { n: 1, c: w } } }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = y.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetFAQVersion_Response";
        }
      }
      class x extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.steamid || y.Sg(x.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = y.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllDrafts_Request";
        }
      }
      class P extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.summary || y.Sg(P.M()),
            b.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  summary: { n: 1, c: S },
                  draft: { n: 2, c: w, r: !0, q: !0 },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = y.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllDrafts_Response";
        }
      }
      class V extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.steamid || y.Sg(V.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = y.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllFAQsForClan_Request";
        }
      }
      class k extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.faq || y.Sg(k.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: { faq: { n: 1, c: S, r: !0, q: !0 } },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = y.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllFAQsForClan_Response";
        }
      }
      class H extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.steamid || y.Sg(H.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = y.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Request";
        }
      }
      class $ extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.faqs || y.Sg($.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: { faqs: { n: 1, c: w, r: !0, q: !0 } },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = y.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT($.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Response";
        }
      }
      class J extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.steamid || y.Sg(J.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.qM.readFixed64String,
                    bw: y.gp.writeFixed64String,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = y.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_CheckFAQPermissions_Request";
        }
      }
      class Y extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), b.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Y();
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_CheckFAQPermissions_Response";
        }
      }
      class K extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.search_text || y.Sg(K.M()),
            b.initialize(this, e, 0, -1, [2, 5], null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  search_text: {
                    n: 1,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  elanguages: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: y.qM.readInt32,
                    pbr: y.qM.readPackedInt32,
                    bw: y.gp.writeRepeatedInt32,
                  },
                  count: { n: 3, br: y.qM.readInt32, bw: y.gp.writeInt32 },
                  cursor: { n: 4, br: y.qM.readString, bw: y.gp.writeString },
                  filter_clanids: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: y.qM.readUint32,
                    pbr: y.qM.readPackedUint32,
                    bw: y.gp.writeRepeatedUint32,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = y.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SearchFAQs_Request";
        }
      }
      class Z extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.faqs || y.Sg(Z.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  faqs: { n: 1, c: X, r: !0, q: !0 },
                  num_total_results: {
                    n: 2,
                    br: y.qM.readInt32,
                    bw: y.gp.writeInt32,
                  },
                  next_cursor: {
                    n: 3,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = y.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SearchFAQs_Response";
        }
      }
      class X extends b {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.articleid || y.Sg(X.M()),
            b.initialize(this, e, 0, -1, [6], null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  articleid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  name: { n: 2, br: y.qM.readString, bw: y.gp.writeString },
                  content: { n: 3, br: y.qM.readString, bw: y.gp.writeString },
                  clan_accountid: {
                    n: 4,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                  url_code: { n: 5, br: y.qM.readString, bw: y.gp.writeString },
                  localized_names: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: y.qM.readString,
                    bw: y.gp.writeRepeatedString,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = y.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SearchFAQs_Response_CFAQSearchResult";
        }
      }
      var ee;
      !(function (e) {
        (e.Create = function (e, t) {
          return e.SendMsg("ClanFAQS.Create#1", (0, m.I8)(M, t), F, {
            ePrivilege: 1,
          });
        }),
          (e.Delete = function (e, t) {
            return e.SendMsg("ClanFAQS.Delete#1", (0, m.I8)(z, t), v, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateInternalName = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.UpdateInternalName#1",
              (0, m.I8)(R, t),
              A,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdateJsonData = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateJsonData#1", (0, m.I8)(C, t), q, {
              ePrivilege: 1,
            });
          }),
          (e.SetVisibility = function (e, t) {
            return e.SendMsg("ClanFAQS.SetVisibility#1", (0, m.I8)(U, t), T, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateDraft#1", (0, m.I8)(j, t), W, {
              ePrivilege: 1,
            });
          }),
          (e.PublishDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.PublishDraft#1", (0, m.I8)(I, t), Q, {
              ePrivilege: 1,
            });
          }),
          (e.PreviewDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.PreviewDraft#1", (0, m.I8)(O, t), D, {
              ePrivilege: 1,
            });
          }),
          (e.GetFAQ = function (e, t) {
            return e.SendMsg("ClanFAQS.GetFAQ#1", (0, m.I8)(G, t), E, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetFAQVersion = function (e, t) {
            return e.SendMsg("ClanFAQS.GetFAQVersion#1", (0, m.I8)(N, t), L, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllDrafts = function (e, t) {
            return e.SendMsg("ClanFAQS.GetAllDrafts#1", (0, m.I8)(x, t), P, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllFAQsForClan = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.GetAllFAQsForClan#1",
              (0, m.I8)(V, t),
              k,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAllLatestVersionPublishedFAQS = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.GetAllLatestVersionPublishedFAQS#1",
              (0, m.I8)(H, t),
              $,
              { ePrivilege: 1 },
            );
          }),
          (e.CheckFAQPermissions = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.CheckFAQPermissions#1",
              (0, m.I8)(J, t),
              Y,
              { ePrivilege: 1 },
            );
          }),
          (e.SearchFAQs = function (e, t) {
            return e.SendMsg("ClanFAQS.SearchFAQs#1", (0, m.I8)(K, t), Z, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(ee || (ee = {}));
      class te {
        static Get() {
          return te.s_Singleton || (te.s_Singleton = new te()), te.s_Singleton;
        }
        static Init(e) {
          te.Get().m_steamInterface = e;
        }
        constructor() {
          (this.m_mapFAQSummaries = new Map()),
            (this.m_mapFAQPublishedContent = new Map()),
            (this.m_mapFAQDrafts = new Map()),
            (this.m_bHasFAQEdit = !1),
            (this.m_steamInterface = null),
            (0, l.Gn)(this),
            "dev" == B.TS.WEB_UNIVERSE && (window.g_FAQStore = this),
            B.TS.IN_STEAMUI ||
              (this.ReadInitialPayload(), this.SetUpWebAPIInterface());
        }
        SetUpWebAPIInterface() {
          const e = (0, B.Tc)("faqstore", "application_config"),
            t = null == e ? void 0 : e.webapi_token;
          this.m_steamInterface = new f.D(B.TS.WEBAPI_BASE_URL, t);
        }
        ReadInitialPayload() {
          const e = (0, B.Tc)("faqstore", "application_config");
          if (
            (("dev" != B.TS.WEB_UNIVERSE && "beta" != B.TS.WEB_UNIVERSE) ||
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
                  new _(this.m_mapFAQSummaries.get(t), i),
                );
              }
            if (e.allfaqs)
              for (const t of e.allfaqs)
                t.faq_id &&
                  (this.m_mapFAQSummaries.has(t.faq_id) ||
                    this.m_mapFAQSummaries.set(t.faq_id, t));
            this.m_bHasFAQEdit = Boolean(e.has_faq_edit);
          } else
            "dev" == B.TS.WEB_UNIVERSE &&
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
        async CreateFAQ(e) {
          const t = m.w.Init(M);
          t.Body().set_steamid(B.UF.CLANSTEAMID), t.Body().set_internal_name(e);
          let r,
            i = 2;
          try {
            const a = await ee.Create(
              this.m_steamInterface.GetServiceTransport(),
              t,
            );
            if (((i = a.GetEResult()), 1 == i)) {
              r = a.Body().faq_id();
              const t = { faq_id: r, internal_name: e };
              this.m_mapFAQSummaries.set(r, t);
            } else
              console.error("FAQStore.CreateFAQ: Create request failed:", i);
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(
              "FAQStore.CreateFAQ: caught error " + t.strErrorMsg,
              t,
            );
          }
          return { eResult: i, strFaqId: r };
        }
        async UpdateDraft(e, t, r, i) {
          const a = m.w.Init(j);
          a.Body().set_steamid(B.UF.CLANSTEAMID),
            a.Body().set_faq_id(e),
            a.Body().set_language(t),
            a.Body().set_content(i),
            a.Body().set_title(r);
          let n = 2,
            s = 0;
          try {
            const e = await ee.UpdateDraft(
              this.m_steamInterface.GetServiceTransport(),
              a,
            );
            (n = e.GetEResult()),
              1 != n
                ? console.error("FAQStore.UpdateDraft request failed:", n)
                : (s = e.Body().last_update_timestamp());
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(
              "FAQStore.UpdateDraft: caught error " + t.strErrorMsg,
              t,
            );
          }
          return { eResult: n, rtUpdateTime: s };
        }
        async UpdateJsonData(e, t) {
          const r = JSON.stringify(t),
            i = m.w.Init(C);
          i.Body().set_steamid(B.UF.CLANSTEAMID),
            i.Body().set_faq_id(e),
            i.Body().set_json_data(r);
          let a = 2;
          try {
            (a = (
              await ee.UpdateJsonData(
                this.m_steamInterface.GetServiceTransport(),
                i,
              )
            ).GetEResult()),
              1 != a
                ? console.error("FAQStore.UpdateJsonData request failed:", a)
                : (this.m_mapFAQSummaries.get(e).json_data = r);
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(
              "FAQStore.UpdateJsonData: caught error " + t.strErrorMsg,
              t,
            );
          }
          return a;
        }
        async GetFAQVersion(e, t, r) {
          const i = m.w.Init(N);
          i.Body().set_steamid(B.UF.CLANSTEAMID),
            i.Body().set_faq_id(e),
            i.Body().set_version(t),
            i.Body().set_language(r);
          try {
            const e = await ee.GetFAQVersion(
                this.m_steamInterface.GetServiceTransport(),
                i,
              ),
              t = e.GetEResult();
            if (1 == t) return e.Body().faq().toObject();
            console.error("FAQStore.GetFAQVersion request failed:", t);
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(
              "FAQStore.GetFAQVersion: caught error " + t.strErrorMsg,
              t,
            );
          }
          return null;
        }
        async DeleteFAQ(e) {
          const t = m.w.Init(z);
          t.Body().set_steamid(B.UF.CLANSTEAMID), t.Body().set_faq_id(e);
          let r = 2;
          try {
            (r = (
              await ee.Delete(this.m_steamInterface.GetServiceTransport(), t)
            ).GetEResult()),
              1 != r
                ? console.error("FAQStore.DeleteFAQ request failed:", r)
                : (this.m_mapFAQDrafts.delete(e),
                  this.m_mapFAQPublishedContent.delete(e),
                  this.m_mapFAQSummaries.delete(e));
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(
              "FAQStore.DeleteFAQ: caught error " + t.strErrorMsg,
              t,
            );
          }
          return r;
        }
        GetFAQPublishedContent(e, t) {
          const r = this.m_mapFAQPublishedContent.get(e);
          if (!r) return null;
          let i = r.get(t);
          return (
            !i &&
              te.sm_mapFallbackLanguages.has(t) &&
              (i = r.get(te.sm_mapFallbackLanguages.get(t))),
            i || 0 == t || (0, B.Y2)() || (i = r.get(0)),
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
        async LoadFAQDraftContent(e) {
          if (this.m_mapFAQDrafts.has(e)) return this.m_mapFAQDrafts.get(e);
          const t = m.w.Init(x);
          t.Body().set_steamid(B.UF.CLANSTEAMID), t.Body().set_faq_id(e);
          let r = 2;
          try {
            const i = await ee.GetAllDrafts(
              this.m_steamInterface.GetServiceTransport(),
              t,
            );
            if (((r = i.GetEResult()), 1 != r))
              return (
                console.error(
                  "FaqStore.LoadFAQDraftContent request failed:",
                  r,
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
              const a = new _(this.m_mapFAQSummaries.get(e), r);
              return this.m_mapFAQDrafts.set(e, a), a;
            }
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(
              "FaqStore.LoadFAQDraftContent: exception " + t.strErrorMsg,
              t,
            );
          }
          return null;
        }
        async UpdateVisibility(e, t, r) {
          const i = m.w.Init(U);
          i.Body().set_steamid(B.UF.CLANSTEAMID),
            i.Body().set_faq_id(e),
            i.Body().set_visible_in_global_realm(t),
            i.Body().set_visible_in_china_realm(r);
          let a = 2;
          try {
            if (
              ((a = (
                await ee.SetVisibility(
                  this.m_steamInterface.GetServiceTransport(),
                  i,
                )
              ).GetEResult()),
              1 === a)
            ) {
              const i = this.m_mapFAQSummaries.get(e);
              i &&
                ((i.visible_in_global_realm = t),
                (i.visible_in_china_realm = r),
                this.m_mapFAQSummaries.set(e, i));
            } else console.error("FaqStore.UpdateVisibility: Failed " + a);
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(
              "FaqStore.UpdateVisibility: exception " + t.strErrorMsg,
              t,
            );
          }
          return a;
        }
        async PublishDraftByLanguage(e, t) {
          if (!t || 0 == t.length) return 1;
          const r = m.w.Init(I);
          r.Body().set_steamid(B.UF.CLANSTEAMID),
            r.Body().set_faq_id(e),
            t.forEach((e) => r.Body().add_language(e));
          let i = 2;
          try {
            const a = await ee.PublishDraft(
              this.m_steamInterface.GetServiceTransport(),
              r,
            );
            if (((i = a.GetEResult()), 1 === i)) {
              const r = this.m_mapFAQSummaries.get(e);
              r &&
                (0, l.h5)(() => {
                  this.m_mapFAQPublishedContent.has(e) ||
                    this.m_mapFAQPublishedContent.set(e, new Map()),
                    r.per_language_info.forEach((r) => {
                      var i;
                      const n = r.language;
                      if (t.indexOf(n) >= 0) {
                        r.last_publish_timestamp = Math.max(
                          r.last_publish_timestamp,
                          a.Body().last_publish_timestamp(),
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
            } else
              console.error("FaqStore.PublishDraftByLanguage: Failed " + i);
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(
              "FaqStore.PublishDraftByLanguage: exception " + t.strErrorMsg,
              t,
            );
          }
          return i;
        }
        async UpdateInternalName(e, t) {
          const r = m.w.Init(R);
          r.Body().set_steamid(B.UF.CLANSTEAMID),
            r.Body().set_faq_id(e),
            r.Body().set_internal_name(t);
          let i = 2;
          try {
            (i = (
              await ee.UpdateInternalName(
                this.m_steamInterface.GetServiceTransport(),
                r,
              )
            ).GetEResult()),
              1 === i
                ? (0, l.h5)(() => {
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
                        (this.m_mapFAQDrafts.get(e).GetSummary().internal_name =
                          t);
                  })
                : console.error("FaqStore.UpdateInternalName: Failed " + i);
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(
              "FaqStore.UpdateInternalName: exception " + t.strErrorMsg,
              t,
            );
          }
          return i;
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
        async ExportEnglishDraftToCrowdin(e) {
          const t =
            B.TS.COMMUNITY_BASE_URL +
            "faqs/" +
            B.UF.VANITY_ID +
            "/ajaxpushtocrowdin/" +
            ae(e);
          await n().get(t);
        }
        async ImportNonEnglishDraftsFromCrowdin(e, t, r) {
          var i, a;
          const s =
              B.TS.COMMUNITY_BASE_URL +
              "faqs/" +
              B.UF.VANITY_ID +
              "/ajaxpullfromcrowdin/" +
              ae(e),
            l = new FormData();
          l.append("sessionid", B.TS.SESSIONID),
            l.append("languages", t.join(","));
          let o = null;
          try {
            const t = await n().post(s, l, {
              withCredentials: !0,
              cancelToken: null == r ? void 0 : r.token,
            });
            if (
              200 == (null == t ? void 0 : t.status) &&
              1 == (null === (i = t.data) || void 0 === i ? void 0 : i.success)
            ) {
              const r = t.data.updated,
                i =
                  null !== (a = null == r ? void 0 : r[e]) && void 0 !== a
                    ? a
                    : [];
              return (
                i.length > 0 &&
                  (this.m_mapFAQSummaries.has(e) ||
                    this.m_mapFAQDrafts.has(e)) &&
                  (this.m_mapFAQDrafts.delete(e),
                  await this.LoadFAQDraftContent(e)),
                i
              );
            }
            o = { response: t };
          } catch (e) {
            o = e;
          }
          const m = (0, g.H)(o);
          return (
            console.error("Could not import from crowdin", e, m.strErrorMsg, m),
            []
          );
        }
        BHasLiveEnglishVersion(e) {
          return this.m_mapFAQSummaries
            .get(e)
            .per_language_info.some(
              (e) => 0 == e.language && e.last_publish_timestamp > 0,
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
      (te.sm_mapFallbackLanguages = new Map([
        [5, 27],
        [27, 5],
        [29, 6],
      ])),
        (0, i.Cg)([l.sH], te.prototype, "m_mapFAQSummaries", void 0),
        (0, i.Cg)([l.XI], te.prototype, "RemoveAllDirtyDrafts", null);
      const re = /^[0-9a-fA-F]+$/;
      function ie(e) {
        const t = null == e ? void 0 : e.replace(/-/g, "");
        if (16 != (null == t ? void 0 : t.length) || !re.test(t)) return null;
        return s.A.fromString(t, !0, 16).toString();
      }
      function ae(e) {
        const t = ("0000000000000000" + s.A.fromString(e, !0, 10).toString(16))
          .slice(-16)
          .toUpperCase();
        return `${t.slice(0, 4)}-${t.slice(4, 8)}-${t.slice(8, 12)}-${t.slice(12, 16)}`;
      }
      function ne(e, t) {
        return [e && te.Get().GetFAQPublishedContent(e, t), !0];
      }
      function se(e) {
        const [t, r] = o.useState(te.Get().GetFAQDraftContent(e)),
          [i, a] = o.useState(!!t);
        return (
          (0, o.useEffect)(() => {
            te.Get()
              .LoadFAQDraftContent(e)
              .then((e) => r(e))
              .finally(() => a(!0));
          }, [e]),
          [t, i]
        );
      }
      function le(e) {
        return [te.Get().GetFAQArticleSummary(e), !0];
      }
      function oe() {
        const e = te.Get().GetAllFAQSummaries();
        return o.useRef([e, !0]).current;
      }
      function me(e, t, r) {
        const [i, a] = o.useState(null),
          [n, s] = o.useState(!1);
        return (
          (0, o.useEffect)(() => {
            te.Get().BHasFAQEdit() &&
              te
                .Get()
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
