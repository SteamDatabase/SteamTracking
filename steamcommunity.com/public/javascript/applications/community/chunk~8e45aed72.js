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
        s = r(26296),
        n = r(3088),
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
                      ? i.createElement(s.i, {
                          className: B().FAQImage,
                          src: l,
                        })
                      : ((l = l.replace("http://", "https://")),
                        i.createElement("img", {
                          className: B().FAQImage,
                          src: l,
                        })))
                  : i.createElement(n.c, {
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
            s = i.useRef(new m.B(f, a, o.TS.LANGUAGE));
          return i.createElement(
            "div",
            { className: B().FAQContainer },
            s.current.ParseBBCode(t, { showErrorInfo: r }),
          );
        };
    },
    54137: (e, t, r) => {
      "use strict";
      r.d(t, {
        pN: () => te,
        Wj: () => ae,
        CJ: () => ie,
        z5: () => ne,
        cf: () => oe,
        g5: () => le,
        W: () => me,
        Kv: () => se,
      });
      var i = r(34629),
        a = r(41735),
        s = r.n(a),
        n = r(38506),
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
            s = new Array();
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
                n = te
                  .Get()
                  .UpdateDraft(
                    null === (i = this.m_summary) || void 0 === i
                      ? void 0
                      : i.faq_id,
                    e,
                    t,
                    r,
                  );
              n
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
                s.push(n);
            }
          return await Promise.all(s), a;
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
          var r, i, a, s, n, l;
          const o = t == u.TU.k_ESteamRealmChina ? 6 : 0;
          return null !==
            (l =
              null !==
                (s =
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
                      : a.title) && void 0 !== s
                ? s
                : null === (n = this.m_mapStoredDrafts.get(o)) || void 0 === n
                  ? void 0
                  : n.title) && void 0 !== l
            ? l
            : "";
        }
        GetDraftContentWithFallback(e, t = u.TU.k_ESteamRealmGlobal) {
          var r, i, a, s, n, l;
          const o = t == u.TU.k_ESteamRealmChina ? 6 : 0;
          return null !==
            (l =
              null !==
                (s =
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
                      : a.content) && void 0 !== s
                ? s
                : null === (n = this.m_mapStoredDrafts.get(o)) || void 0 === n
                  ? void 0
                  : n.content) && void 0 !== l
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
      var f,
        p = r(96059),
        y = r(80613),
        b = r.n(y),
        S = r(89068);
      class M extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.faq_id || S.Sg(M.M()),
            y.Message.initialize(this, e, 0, -1, [6], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  faq_id: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  internal_name: {
                    n: 2,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  visible_in_global_realm: {
                    n: 3,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                  visible_in_china_realm: {
                    n: 4,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                  json_data: {
                    n: 5,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  per_language_info: { n: 6, c: h, r: !0, q: !0 },
                  url_code: { n: 7, br: S.qM.readString, bw: S.gp.writeString },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = S.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQSummary";
        }
      }
      class h extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.language || S.Sg(h.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  language: { n: 1, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  last_update_timestamp: {
                    n: 2,
                    br: S.qM.readFixed32,
                    bw: S.gp.writeFixed32,
                  },
                  last_publish_timestamp: {
                    n: 3,
                    br: S.qM.readFixed32,
                    bw: S.gp.writeFixed32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = S.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQSummary_CLanguageInfo";
        }
      }
      class w extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.faq_id || S.Sg(w.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  faq_id: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  language: { n: 2, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  version: {
                    n: 3,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  content: { n: 4, br: S.qM.readString, bw: S.gp.writeString },
                  title: { n: 5, br: S.qM.readString, bw: S.gp.writeString },
                  timestamp: {
                    n: 6,
                    br: S.qM.readFixed32,
                    bw: S.gp.writeFixed32,
                  },
                  author_account_id: {
                    n: 7,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  url_code: { n: 8, br: S.qM.readString, bw: S.gp.writeString },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = S.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQContent";
        }
      }
      class F extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.steamid || S.Sg(F.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  steamid: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  internal_name: {
                    n: 2,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  json_data: {
                    n: 3,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = S.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Create_Request";
        }
      }
      class z extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.faq_id || S.Sg(z.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  faq_id: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = S.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Create_Response";
        }
      }
      class v extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.steamid || S.Sg(v.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  steamid: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = S.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Delete_Request";
        }
      }
      class R extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new R();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Delete_Response";
        }
      }
      class A extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.steamid || S.Sg(A.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  steamid: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  internal_name: {
                    n: 3,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = S.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateInternalName_Request";
        }
      }
      class C extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (b().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateInternalName_Response";
        }
      }
      class q extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.steamid || S.Sg(q.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  steamid: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  json_data: {
                    n: 3,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = S.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateJsonData_Request";
        }
      }
      class U extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new U();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateJsonData_Response";
        }
      }
      class T extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.steamid || S.Sg(T.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  steamid: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  visible_in_global_realm: {
                    n: 3,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                  visible_in_china_realm: {
                    n: 4,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = S.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SetVisibility_Request";
        }
      }
      class j extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new j();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SetVisibility_Response";
        }
      }
      class W extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.steamid || S.Sg(W.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  steamid: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  language: { n: 3, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  content: { n: 4, br: S.qM.readString, bw: S.gp.writeString },
                  title: { n: 5, br: S.qM.readString, bw: S.gp.writeString },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = S.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateDraft_Request";
        }
      }
      class I extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.last_update_timestamp || S.Sg(I.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  last_update_timestamp: {
                    n: 1,
                    br: S.qM.readFixed32,
                    bw: S.gp.writeFixed32,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = S.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateDraft_Response";
        }
      }
      class Q extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.steamid || S.Sg(Q.M()),
            y.Message.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  steamid: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  language: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: S.qM.readUint32,
                    pbr: S.qM.readPackedUint32,
                    bw: S.gp.writeRepeatedUint32,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = S.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_PublishDraft_Request";
        }
      }
      class O extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.last_publish_timestamp || S.Sg(O.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  last_publish_timestamp: {
                    n: 1,
                    br: S.qM.readFixed32,
                    bw: S.gp.writeFixed32,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = S.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_PublishDraft_Response";
        }
      }
      class D extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.steamid || S.Sg(D.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  steamid: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  language: { n: 3, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = S.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_PreviewDraft_Request";
        }
      }
      class G extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.faq || S.Sg(G.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m || (G.sm_m = { proto: G, fields: { faq: { n: 1, c: w } } }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = S.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_PreviewDraft_Response";
        }
      }
      class E extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.faq_id || S.Sg(E.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  faq_id: {
                    n: 2,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  language: { n: 3, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = S.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetFAQ_Request";
        }
      }
      class N extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.faq || S.Sg(N.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  faq: { n: 1, c: w },
                  faq_exists: {
                    n: 2,
                    d: !1,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = S.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetFAQ_Response";
        }
      }
      class L extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.steamid || S.Sg(L.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  steamid: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  language: { n: 3, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  version: {
                    n: 4,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = S.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetFAQVersion_Request";
        }
      }
      class x extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.faq || S.Sg(x.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m || (x.sm_m = { proto: x, fields: { faq: { n: 1, c: w } } }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = S.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetFAQVersion_Response";
        }
      }
      class P extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.steamid || S.Sg(P.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  steamid: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = S.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllDrafts_Request";
        }
      }
      class V extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.summary || S.Sg(V.M()),
            y.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  summary: { n: 1, c: M },
                  draft: { n: 2, c: w, r: !0, q: !0 },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = S.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllDrafts_Response";
        }
      }
      class k extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.steamid || S.Sg(k.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  steamid: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = S.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllFAQsForClan_Request";
        }
      }
      class H extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.faq || S.Sg(H.M()),
            y.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: { faq: { n: 1, c: M, r: !0, q: !0 } },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = S.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllFAQsForClan_Response";
        }
      }
      class $ extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.steamid || S.Sg($.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  steamid: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = S.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT($.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Request";
        }
      }
      class J extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.faqs || S.Sg(J.M()),
            y.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: { faqs: { n: 1, c: w, r: !0, q: !0 } },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = S.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Response";
        }
      }
      class Y extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.steamid || S.Sg(Y.M()),
            y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  steamid: {
                    n: 1,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = S.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_CheckFAQPermissions_Request";
        }
      }
      class K extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new K();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_CheckFAQPermissions_Response";
        }
      }
      class Z extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.search_text || S.Sg(Z.M()),
            y.Message.initialize(this, e, 0, -1, [2, 5], null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  search_text: {
                    n: 1,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  elanguages: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: S.qM.readInt32,
                    pbr: S.qM.readPackedInt32,
                    bw: S.gp.writeRepeatedInt32,
                  },
                  count: { n: 3, br: S.qM.readInt32, bw: S.gp.writeInt32 },
                  cursor: { n: 4, br: S.qM.readString, bw: S.gp.writeString },
                  filter_clanids: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: S.qM.readUint32,
                    pbr: S.qM.readPackedUint32,
                    bw: S.gp.writeRepeatedUint32,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = S.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SearchFAQs_Request";
        }
      }
      class X extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.faqs || S.Sg(X.M()),
            y.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  faqs: { n: 1, c: ee, r: !0, q: !0 },
                  num_total_results: {
                    n: 2,
                    br: S.qM.readInt32,
                    bw: S.gp.writeInt32,
                  },
                  next_cursor: {
                    n: 3,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = S.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SearchFAQs_Response";
        }
      }
      class ee extends y.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.articleid || S.Sg(ee.M()),
            y.Message.initialize(this, e, 0, -1, [6], null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  articleid: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  name: { n: 2, br: S.qM.readString, bw: S.gp.writeString },
                  content: { n: 3, br: S.qM.readString, bw: S.gp.writeString },
                  clan_accountid: {
                    n: 4,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  url_code: { n: 5, br: S.qM.readString, bw: S.gp.writeString },
                  localized_names: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: S.qM.readString,
                    bw: S.gp.writeRepeatedString,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = S.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SearchFAQs_Response_CFAQSearchResult";
        }
      }
      !(function (e) {
        (e.Create = function (e, t) {
          return e.SendMsg("ClanFAQS.Create#1", (0, m.I8)(F, t), z, {
            ePrivilege: 1,
          });
        }),
          (e.Delete = function (e, t) {
            return e.SendMsg("ClanFAQS.Delete#1", (0, m.I8)(v, t), R, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateInternalName = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.UpdateInternalName#1",
              (0, m.I8)(A, t),
              C,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdateJsonData = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateJsonData#1", (0, m.I8)(q, t), U, {
              ePrivilege: 1,
            });
          }),
          (e.SetVisibility = function (e, t) {
            return e.SendMsg("ClanFAQS.SetVisibility#1", (0, m.I8)(T, t), j, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateDraft#1", (0, m.I8)(W, t), I, {
              ePrivilege: 1,
            });
          }),
          (e.PublishDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.PublishDraft#1", (0, m.I8)(Q, t), O, {
              ePrivilege: 1,
            });
          }),
          (e.PreviewDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.PreviewDraft#1", (0, m.I8)(D, t), G, {
              ePrivilege: 1,
            });
          }),
          (e.GetFAQ = function (e, t) {
            return e.SendMsg("ClanFAQS.GetFAQ#1", (0, m.I8)(E, t), N, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetFAQVersion = function (e, t) {
            return e.SendMsg("ClanFAQS.GetFAQVersion#1", (0, m.I8)(L, t), x, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllDrafts = function (e, t) {
            return e.SendMsg("ClanFAQS.GetAllDrafts#1", (0, m.I8)(P, t), V, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllFAQsForClan = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.GetAllFAQsForClan#1",
              (0, m.I8)(k, t),
              H,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAllLatestVersionPublishedFAQS = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.GetAllLatestVersionPublishedFAQS#1",
              (0, m.I8)($, t),
              J,
              { ePrivilege: 1 },
            );
          }),
          (e.CheckFAQPermissions = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.CheckFAQPermissions#1",
              (0, m.I8)(Y, t),
              K,
              { ePrivilege: 1 },
            );
          }),
          (e.SearchFAQs = function (e, t) {
            return e.SendMsg("ClanFAQS.SearchFAQs#1", (0, m.I8)(Z, t), X, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(f || (f = {}));
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
          this.m_steamInterface = new p.D(B.TS.WEBAPI_BASE_URL, t);
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
          const t = m.w.Init(F);
          t.Body().set_steamid(B.UF.CLANSTEAMID), t.Body().set_internal_name(e);
          let r,
            i = 2;
          try {
            const a = await f.Create(
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
          const a = m.w.Init(W);
          a.Body().set_steamid(B.UF.CLANSTEAMID),
            a.Body().set_faq_id(e),
            a.Body().set_language(t),
            a.Body().set_content(i),
            a.Body().set_title(r);
          let s = 2,
            n = 0;
          try {
            const e = await f.UpdateDraft(
              this.m_steamInterface.GetServiceTransport(),
              a,
            );
            (s = e.GetEResult()),
              1 != s
                ? console.error("FAQStore.UpdateDraft request failed:", s)
                : (n = e.Body().last_update_timestamp());
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(
              "FAQStore.UpdateDraft: caught error " + t.strErrorMsg,
              t,
            );
          }
          return { eResult: s, rtUpdateTime: n };
        }
        async UpdateJsonData(e, t) {
          const r = JSON.stringify(t),
            i = m.w.Init(q);
          i.Body().set_steamid(B.UF.CLANSTEAMID),
            i.Body().set_faq_id(e),
            i.Body().set_json_data(r);
          let a = 2;
          try {
            (a = (
              await f.UpdateJsonData(
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
          const i = m.w.Init(L);
          i.Body().set_steamid(B.UF.CLANSTEAMID),
            i.Body().set_faq_id(e),
            i.Body().set_version(t),
            i.Body().set_language(r);
          try {
            const e = await f.GetFAQVersion(
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
          const t = m.w.Init(v);
          t.Body().set_steamid(B.UF.CLANSTEAMID), t.Body().set_faq_id(e);
          let r = 2;
          try {
            (r = (
              await f.Delete(this.m_steamInterface.GetServiceTransport(), t)
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
          const t = m.w.Init(P);
          t.Body().set_steamid(B.UF.CLANSTEAMID), t.Body().set_faq_id(e);
          let r = 2;
          try {
            const i = await f.GetAllDrafts(
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
          const i = m.w.Init(T);
          i.Body().set_steamid(B.UF.CLANSTEAMID),
            i.Body().set_faq_id(e),
            i.Body().set_visible_in_global_realm(t),
            i.Body().set_visible_in_china_realm(r);
          let a = 2;
          try {
            if (
              ((a = (
                await f.SetVisibility(
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
          const r = m.w.Init(Q);
          r.Body().set_steamid(B.UF.CLANSTEAMID),
            r.Body().set_faq_id(e),
            t.forEach((e) => r.Body().add_language(e));
          let i = 2;
          try {
            const a = await f.PublishDraft(
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
                      const s = r.language;
                      if (t.indexOf(s) >= 0) {
                        r.last_publish_timestamp = Math.max(
                          r.last_publish_timestamp,
                          a.Body().last_publish_timestamp(),
                        );
                        const t =
                          null === (i = this.m_mapFAQDrafts.get(e)) ||
                          void 0 === i
                            ? void 0
                            : i.GetLastSavedDraftVersion(s);
                        this.m_mapFAQPublishedContent.get(e).set(s, t);
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
          const r = m.w.Init(A);
          r.Body().set_steamid(B.UF.CLANSTEAMID),
            r.Body().set_faq_id(e),
            r.Body().set_internal_name(t);
          let i = 2;
          try {
            (i = (
              await f.UpdateInternalName(
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
          await s().get(t);
        }
        async ImportNonEnglishDraftsFromCrowdin(e, t, r) {
          var i, a;
          const n =
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
            const t = await s().post(n, l, {
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
        return n.A.fromString(t, !0, 16).toString();
      }
      function ae(e) {
        const t = ("0000000000000000" + n.A.fromString(e, !0, 10).toString(16))
          .slice(-16)
          .toUpperCase();
        return `${t.slice(0, 4)}-${t.slice(4, 8)}-${t.slice(8, 12)}-${t.slice(12, 16)}`;
      }
      function se(e, t) {
        return [e && te.Get().GetFAQPublishedContent(e, t), !0];
      }
      function ne(e) {
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
          [s, n] = o.useState(!1);
        return (
          (0, o.useEffect)(() => {
            te.Get().BHasFAQEdit() &&
              te
                .Get()
                .GetFAQVersion(e, t, r)
                .then((e) => a(e))
                .finally(() => n(!0));
          }, [e, t, r]),
          [i, s]
        );
      }
    },
  },
]);
