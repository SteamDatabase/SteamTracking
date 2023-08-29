/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8120],
  {
    45811: (e) => {
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
      r.d(t, { R: () => g });
      var i = r(89526),
        a = r(36611),
        n = r(54297),
        s = r(87178),
        l = r(19304),
        o = r(32765),
        m = r(24174),
        c = r(4116),
        u = r(14288),
        d = r(29667),
        B = r(45811),
        _ = r.n(B);
      const f = new Map([
          ...Array.from(u.Be.entries()),
          ...Array.from(u.YY.entries()),
          [
            "section",
            {
              Constructor: function (e) {
                let t = (0, u.im)(e.args, "id");
                t &&
                  "string" == typeof t &&
                  t.length > 0 &&
                  "#" === t[0] &&
                  (t = t.substring(1));
                const r = (0, u.im)(e.args, "style"),
                  a = (0, l.Z)(
                    _().Section,
                    "note" == r && _().Note,
                    "important" == r && _().Important,
                    "warning" == r && _().Warning,
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
                const o = (0, u.vZ)(l, e.language);
                return "string" == typeof o
                  ? ((l = o),
                    a
                      ? i.createElement(n.e, {
                          className: _().FAQImage,
                          src: l,
                        })
                      : ((l = l.replace("http://", "https://")),
                        i.createElement("img", {
                          className: _().FAQImage,
                          src: l,
                        })))
                  : i.createElement(s.j, {
                      className: _().FAQImage,
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
                const t = (0, u.im)(e.args);
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
        g = (e) => {
          const { text: t, bShowErrorInfo: r } = e,
            a = i.useCallback(
              (e) =>
                new d.Ax(
                  new d.qL(
                    new c.So(new c.LT(), 0),
                    e,
                    [
                      {
                        urlRegExp: /youtu.be|youtube.com/i,
                        fnBBComponent: u.V2,
                      },
                    ],
                    {},
                  ),
                  e,
                ),
              [],
            ),
            n = i.useRef(new m.Z6(f, a));
          return i.createElement(
            "div",
            { className: _().FAQContainer },
            n.current.ParseBBCode(t, { showErrorInfo: r }),
          );
        };
    },
    98150: (e, t, r) => {
      "use strict";
      r.d(t, {
        xP: () => re,
        hS: () => ne,
        cJ: () => ae,
        wl: () => le,
        SP: () => me,
        EH: () => oe,
        Ky: () => ce,
        NV: () => se,
      });
      var i = r(33940),
        a = r(52868),
        n = r.n(a),
        s = r(38072),
        l = r.n(s),
        o = r(50265),
        m = r(89526),
        c = r(54856),
        u = r(36611),
        d = r(23801),
        B = r(26464),
        _ = r(23217),
        f = r(32765);
      class g {
        constructor(e, t) {
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
        SaveDrafts() {
          var e, t, r, a;
          return (0, i.mG)(this, void 0, void 0, function* () {
            (0, d.X)(
              Boolean(
                null === (e = this.m_summary) || void 0 === e
                  ? void 0
                  : e.faq_id,
              ),
              "Attempting to save when we lack a FaqID in the summary object",
            );
            let i = 1,
              n = new Array();
            for (let e = 0; e < 31; ++e)
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
                  s = re
                    .Get()
                    .UpdateDraft(
                      null === (a = this.m_summary) || void 0 === a
                        ? void 0
                        : a.faq_id,
                      e,
                      t,
                      r,
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
                              f.L7.accountid.toString()),
                            (this.m_mapLocalUpdates.get(e).strTitle = null),
                            (this.m_mapLocalUpdates.get(e).strContent = null);
                          let i = !1;
                          this.m_summary.per_language_info.forEach((t) => {
                            e == t.language &&
                              ((i = !0),
                              (t.last_update_timestamp = Math.max(
                                t.last_update_timestamp,
                                a.rtUpdateTime,
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
                          a,
                        ),
                        (i = a.eResult));
                  })
                  .catch((e) => {
                    console.error(
                      "FAQModel.SaveDrafts: Hit error " +
                        (0, _.l)(e).strErrorMsg,
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
        GetDraftTitleWithFallback(e, t = u.IN.k_ESteamRealmGlobal) {
          var r, i, a, n, s, l;
          const o = t == u.IN.k_ESteamRealmChina ? 6 : 0;
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
        GetDraftContentWithFallback(e, t = u.IN.k_ESteamRealmGlobal) {
          var r, i, a, n, s, l;
          const o = t == u.IN.k_ESteamRealmChina ? 6 : 0;
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
              e.push(u.IN.k_ESteamRealmGlobal),
            this.m_summary.visible_in_global_realm &&
              e.push(u.IN.k_ESteamRealmChina),
            0 == e.length && e.push(u.IN.k_ESteamRealmGlobal),
            (0, d.X)(
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
      (0, i.gn)([o.LO], g.prototype, "m_mapLocalUpdates", void 0),
        (0, i.gn)([B.a], g.prototype, "BHasSomeTextForLanguage", null),
        (0, i.gn)([B.a], g.prototype, "GetLastTimeLanguageUpdated", null);
      var y = r(19094),
        b = r(45878),
        p = r(29063);
      const F = b.Message;
      class h extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.faq_id || p.aR(h.M()),
            F.initialize(this, e, 0, -1, [6], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
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
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = p.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQSummary";
        }
      }
      class S extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.language || p.aR(S.M()),
            F.initialize(this, e, 0, -1, void 0, null);
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
      class w extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.faq_id || p.aR(w.M()),
            F.initialize(this, e, 0, -1, void 0, null);
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
      class z extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.steamid || p.aR(z.M()),
            F.initialize(this, e, 0, -1, void 0, null);
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
          return "CClanFAQS_Create_Request";
        }
      }
      class M extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.faq_id || p.aR(M.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  faq_id: {
                    n: 1,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = p.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Create_Response";
        }
      }
      class A extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.steamid || p.aR(A.M()),
            F.initialize(this, e, 0, -1, void 0, null);
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
                  faq_id: {
                    n: 2,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
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
          return "CClanFAQS_Delete_Request";
        }
      }
      class R extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), F.initialize(this, e, 0, -1, void 0, null);
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
          let t = new b.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Delete_Response";
        }
      }
      class v extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.steamid || p.aR(v.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
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
          return "CClanFAQS_UpdateInternalName_Request";
        }
      }
      class C extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), F.initialize(this, e, 0, -1, void 0, null);
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
      class W extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.steamid || p.aR(W.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
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
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = p.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateJsonData_Request";
        }
      }
      class T extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), F.initialize(this, e, 0, -1, void 0, null);
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
      class D extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.steamid || p.aR(D.M()),
            F.initialize(this, e, 0, -1, void 0, null);
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
      class Q extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), F.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Q();
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SetVisibility_Response";
        }
      }
      class I extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.steamid || p.aR(I.M()),
            F.initialize(this, e, 0, -1, void 0, null);
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
                  content: { n: 4, br: p.FE.readString, bw: p.Xc.writeString },
                  title: { n: 5, br: p.FE.readString, bw: p.Xc.writeString },
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
          return "CClanFAQS_UpdateDraft_Request";
        }
      }
      class E extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.last_update_timestamp || p.aR(E.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  last_update_timestamp: {
                    n: 1,
                    br: p.FE.readFixed32,
                    bw: p.Xc.writeFixed32,
                  },
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
          return "CClanFAQS_UpdateDraft_Response";
        }
      }
      class j extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.steamid || p.aR(j.M()),
            F.initialize(this, e, 0, -1, [3], null);
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
      class U extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.last_publish_timestamp || p.aR(U.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  last_publish_timestamp: {
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
          return "CClanFAQS_PublishDraft_Response";
        }
      }
      class O extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.steamid || p.aR(O.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
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
          return "CClanFAQS_PreviewDraft_Request";
        }
      }
      class q extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.faq || p.aR(q.M()),
            F.initialize(this, e, 0, -1, void 0, null);
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
      class G extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.faq_id || p.aR(G.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  faq_id: {
                    n: 2,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                  language: { n: 3, br: p.FE.readUint32, bw: p.Xc.writeUint32 },
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
          return "CClanFAQS_GetFAQ_Request";
        }
      }
      class N extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.faq || p.aR(N.M()),
            F.initialize(this, e, 0, -1, void 0, null);
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
                    br: p.FE.readBool,
                    bw: p.Xc.writeBool,
                  },
                },
              }),
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
          return "CClanFAQS_GetFAQ_Response";
        }
      }
      class X extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.steamid || p.aR(X.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
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
          return "CClanFAQS_GetFAQVersion_Request";
        }
      }
      class L extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.faq || p.aR(L.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m || (L.sm_m = { proto: L, fields: { faq: { n: 1, c: w } } }),
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
          return "CClanFAQS_GetFAQVersion_Response";
        }
      }
      class x extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.steamid || p.aR(x.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
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
          return "CClanFAQS_GetAllDrafts_Request";
        }
      }
      class P extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.summary || p.aR(P.M()),
            F.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  summary: { n: 1, c: h },
                  draft: { n: 2, c: w, r: !0, q: !0 },
                },
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
          return "CClanFAQS_GetAllDrafts_Response";
        }
      }
      class V extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.steamid || p.aR(V.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  steamid: {
                    n: 1,
                    br: p.FE.readUint64String,
                    bw: p.Xc.writeUint64String,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = p.Bh(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(V.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllFAQsForClan_Request";
        }
      }
      class k extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.faq || p.aR(k.M()),
            F.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: { faq: { n: 1, c: h, r: !0, q: !0 } },
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
          return "CClanFAQS_GetAllFAQsForClan_Response";
        }
      }
      class J extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.steamid || p.aR(J.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
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
          return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Request";
        }
      }
      class H extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.faqs || p.aR(H.M()),
            F.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: { faqs: { n: 1, c: w, r: !0, q: !0 } },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = p.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(H.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Response";
        }
      }
      class $ extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.steamid || p.aR($.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  steamid: {
                    n: 1,
                    br: p.FE.readFixed64String,
                    bw: p.Xc.writeFixed64String,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = p.Bh($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA($.M(), e, t);
        }
        static fromObject(e) {
          return p.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2($.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_CheckFAQPermissions_Request";
        }
      }
      class Y extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), F.initialize(this, e, 0, -1, void 0, null);
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
          let t = new b.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_CheckFAQPermissions_Response";
        }
      }
      class K extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.search_text || p.aR(K.M()),
            F.initialize(this, e, 0, -1, [2, 5], null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  search_text: {
                    n: 1,
                    br: p.FE.readString,
                    bw: p.Xc.writeString,
                  },
                  elanguages: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: p.FE.readInt32,
                    pbr: p.FE.readPackedInt32,
                    bw: p.Xc.writeRepeatedInt32,
                  },
                  count: { n: 3, br: p.FE.readInt32, bw: p.Xc.writeInt32 },
                  cursor: { n: 4, br: p.FE.readString, bw: p.Xc.writeString },
                  filter_clanids: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: p.FE.readUint32,
                    pbr: p.FE.readPackedUint32,
                    bw: p.Xc.writeRepeatedUint32,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = p.Bh(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(K.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SearchFAQs_Request";
        }
      }
      class Z extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.faqs || p.aR(Z.M()),
            F.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  faqs: { n: 1, c: ee, r: !0, q: !0 },
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
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = p.Bh(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(Z.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SearchFAQs_Response";
        }
      }
      class ee extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.articleid || p.aR(ee.M()),
            F.initialize(this, e, 0, -1, [6], null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
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
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = p.Bh(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return p.TA(ee.M(), e, t);
        }
        static fromObject(e) {
          return p.aD(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new b.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.F(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.l2(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SearchFAQs_Response_CFAQSearchResult";
        }
      }
      var te;
      !(function (e) {
        (e.Create = function (e, t) {
          return e.SendMsg("ClanFAQS.Create#1", (0, c.MD)(z, t), M, {
            ePrivilege: 1,
          });
        }),
          (e.Delete = function (e, t) {
            return e.SendMsg("ClanFAQS.Delete#1", (0, c.MD)(A, t), R, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateInternalName = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.UpdateInternalName#1",
              (0, c.MD)(v, t),
              C,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdateJsonData = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateJsonData#1", (0, c.MD)(W, t), T, {
              ePrivilege: 1,
            });
          }),
          (e.SetVisibility = function (e, t) {
            return e.SendMsg("ClanFAQS.SetVisibility#1", (0, c.MD)(D, t), Q, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateDraft#1", (0, c.MD)(I, t), E, {
              ePrivilege: 1,
            });
          }),
          (e.PublishDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.PublishDraft#1", (0, c.MD)(j, t), U, {
              ePrivilege: 1,
            });
          }),
          (e.PreviewDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.PreviewDraft#1", (0, c.MD)(O, t), q, {
              ePrivilege: 1,
            });
          }),
          (e.GetFAQ = function (e, t) {
            return e.SendMsg("ClanFAQS.GetFAQ#1", (0, c.MD)(G, t), N, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetFAQVersion = function (e, t) {
            return e.SendMsg("ClanFAQS.GetFAQVersion#1", (0, c.MD)(X, t), L, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllDrafts = function (e, t) {
            return e.SendMsg("ClanFAQS.GetAllDrafts#1", (0, c.MD)(x, t), P, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllFAQsForClan = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.GetAllFAQsForClan#1",
              (0, c.MD)(V, t),
              k,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAllLatestVersionPublishedFAQS = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.GetAllLatestVersionPublishedFAQS#1",
              (0, c.MD)(J, t),
              H,
              { ePrivilege: 1 },
            );
          }),
          (e.CheckFAQPermissions = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.CheckFAQPermissions#1",
              (0, c.MD)($, t),
              Y,
              { ePrivilege: 1 },
            );
          }),
          (e.SearchFAQs = function (e, t) {
            return e.SendMsg("ClanFAQS.SearchFAQs#1", (0, c.MD)(K, t), Z, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(te || (te = {}));
      class re {
        static Get() {
          return re.s_Singleton || (re.s_Singleton = new re()), re.s_Singleton;
        }
        static Init(e) {
          re.Get().m_steamInterface = e;
        }
        constructor() {
          (this.m_mapFAQSummaries = new Map()),
            (this.m_mapFAQPublishedContent = new Map()),
            (this.m_mapFAQDrafts = new Map()),
            (this.m_bHasFAQEdit = !1),
            (this.m_steamInterface = null),
            "dev" == f.De.WEB_UNIVERSE && (window.g_FAQStore = this),
            f.De.IN_STEAMUI ||
              (this.ReadInitialPayload(), this.SetUpWebAPIInterface());
        }
        SetUpWebAPIInterface() {
          const e = (0, f.kQ)("faqstore", "application_config"),
            t = null == e ? void 0 : e.webapi_token;
          this.m_steamInterface = new y.J(f.De.WEBAPI_BASE_URL, t);
        }
        ReadInitialPayload() {
          const e = (0, f.kQ)("faqstore", "application_config");
          if (
            (("dev" != f.De.WEB_UNIVERSE && "beta" != f.De.WEB_UNIVERSE) ||
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
                  new g(this.m_mapFAQSummaries.get(t), i),
                );
              }
            if (e.allfaqs)
              for (const t of e.allfaqs)
                t.faq_id &&
                  (this.m_mapFAQSummaries.has(t.faq_id) ||
                    this.m_mapFAQSummaries.set(t.faq_id, t));
            this.m_bHasFAQEdit = Boolean(e.has_faq_edit);
          } else
            "dev" == f.De.WEB_UNIVERSE &&
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
            const t = c.gA.Init(z);
            t.Body().set_steamid(f.JA.CLANSTEAMID),
              t.Body().set_internal_name(e);
            let r,
              i = 2;
            try {
              const a = yield te.Create(
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
              const t = (0, _.l)(e);
              console.error(
                "FAQStore.CreateFAQ: caught error " + t.strErrorMsg,
                t,
              );
            }
            return { eResult: i, strFaqId: r };
          });
        }
        UpdateDraft(e, t, r, a) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = c.gA.Init(I);
            i.Body().set_steamid(f.JA.CLANSTEAMID),
              i.Body().set_faq_id(e),
              i.Body().set_language(t),
              i.Body().set_content(a),
              i.Body().set_title(r);
            let n = 2,
              s = 0;
            try {
              const e = yield te.UpdateDraft(
                this.m_steamInterface.GetServiceTransport(),
                i,
              );
              (n = e.GetEResult()),
                1 != n
                  ? console.error("FAQStore.UpdateDraft request failed:", n)
                  : (s = e.Body().last_update_timestamp());
            } catch (e) {
              const t = (0, _.l)(e);
              console.error(
                "FAQStore.UpdateDraft: caught error " + t.strErrorMsg,
                t,
              );
            }
            return { eResult: n, rtUpdateTime: s };
          });
        }
        UpdateJsonData(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const r = JSON.stringify(t),
              i = c.gA.Init(W);
            i.Body().set_steamid(f.JA.CLANSTEAMID),
              i.Body().set_faq_id(e),
              i.Body().set_json_data(r);
            let a = 2;
            try {
              (a = (yield te.UpdateJsonData(
                this.m_steamInterface.GetServiceTransport(),
                i,
              )).GetEResult()),
                1 != a
                  ? console.error("FAQStore.UpdateJsonData request failed:", a)
                  : (this.m_mapFAQSummaries.get(e).json_data = r);
            } catch (e) {
              const t = (0, _.l)(e);
              console.error(
                "FAQStore.UpdateJsonData: caught error " + t.strErrorMsg,
                t,
              );
            }
            return a;
          });
        }
        GetFAQVersion(e, t, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = c.gA.Init(X);
            i.Body().set_steamid(f.JA.CLANSTEAMID),
              i.Body().set_faq_id(e),
              i.Body().set_version(t),
              i.Body().set_language(r);
            try {
              const e = yield te.GetFAQVersion(
                  this.m_steamInterface.GetServiceTransport(),
                  i,
                ),
                t = e.GetEResult();
              if (1 == t) return e.Body().faq().toObject();
              console.error("FAQStore.GetFAQVersion request failed:", t);
            } catch (e) {
              const t = (0, _.l)(e);
              console.error(
                "FAQStore.GetFAQVersion: caught error " + t.strErrorMsg,
                t,
              );
            }
            return null;
          });
        }
        DeleteFAQ(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const t = c.gA.Init(A);
            t.Body().set_steamid(f.JA.CLANSTEAMID), t.Body().set_faq_id(e);
            let r = 2;
            try {
              (r = (yield te.Delete(
                this.m_steamInterface.GetServiceTransport(),
                t,
              )).GetEResult()),
                1 != r
                  ? console.error("FAQStore.DeleteFAQ request failed:", r)
                  : (this.m_mapFAQDrafts.delete(e),
                    this.m_mapFAQPublishedContent.delete(e),
                    this.m_mapFAQSummaries.delete(e));
            } catch (e) {
              const t = (0, _.l)(e);
              console.error(
                "FAQStore.DeleteFAQ: caught error " + t.strErrorMsg,
                t,
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
              re.sm_mapFallbackLanguages.has(t) &&
              (i = r.get(re.sm_mapFallbackLanguages.get(t))),
            i || 0 == t || (0, f.h4)() || (i = r.get(0)),
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
            const t = c.gA.Init(x);
            t.Body().set_steamid(f.JA.CLANSTEAMID), t.Body().set_faq_id(e);
            let r = 2;
            try {
              const i = yield te.GetAllDrafts(
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
                const a = new g(this.m_mapFAQSummaries.get(e), r);
                return this.m_mapFAQDrafts.set(e, a), a;
              }
            } catch (e) {
              const t = (0, _.l)(e);
              console.error(
                "FaqStore.LoadFAQDraftContent: exception " + t.strErrorMsg,
                t,
              );
            }
            return null;
          });
        }
        UpdateVisibility(e, t, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = c.gA.Init(D);
            i.Body().set_steamid(f.JA.CLANSTEAMID),
              i.Body().set_faq_id(e),
              i.Body().set_visible_in_global_realm(t),
              i.Body().set_visible_in_china_realm(r);
            let a = 2;
            try {
              if (
                ((a = (yield te.SetVisibility(
                  this.m_steamInterface.GetServiceTransport(),
                  i,
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
              const t = (0, _.l)(e);
              console.error(
                "FaqStore.UpdateVisibility: exception " + t.strErrorMsg,
                t,
              );
            }
            return a;
          });
        }
        PublishDraftByLanguage(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!t || 0 == t.length) return 1;
            const r = c.gA.Init(j);
            r.Body().set_steamid(f.JA.CLANSTEAMID),
              r.Body().set_faq_id(e),
              t.forEach((e) => r.Body().add_language(e));
            let i = 2;
            try {
              const a = yield te.PublishDraft(
                this.m_steamInterface.GetServiceTransport(),
                r,
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
              const t = (0, _.l)(e);
              console.error(
                "FaqStore.PublishDraftByLanguage: exception " + t.strErrorMsg,
                t,
              );
            }
            return i;
          });
        }
        UpdateInternalName(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const r = c.gA.Init(v);
            r.Body().set_steamid(f.JA.CLANSTEAMID),
              r.Body().set_faq_id(e),
              r.Body().set_internal_name(t);
            let i = 2;
            try {
              (i = (yield te.UpdateInternalName(
                this.m_steamInterface.GetServiceTransport(),
                r,
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
              const t = (0, _.l)(e);
              console.error(
                "FaqStore.UpdateInternalName: exception " + t.strErrorMsg,
                t,
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
              f.De.COMMUNITY_BASE_URL +
              "faqs/" +
              f.JA.VANITY_ID +
              "/ajaxpushtocrowdin/" +
              ne(e);
            yield n().get(t);
          });
        }
        ImportNonEnglishDraftsFromCrowdin(e, t, r) {
          var a, s;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i =
                f.De.COMMUNITY_BASE_URL +
                "faqs/" +
                f.JA.VANITY_ID +
                "/ajaxpullfromcrowdin/" +
                ne(e),
              l = new FormData();
            l.append("sessionid", f.De.SESSIONID),
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
            const m = (0, _.l)(o);
            return (
              console.error(
                "Could not import from crowdin",
                e,
                m.strErrorMsg,
                m,
              ),
              []
            );
          });
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
      (re.sm_mapFallbackLanguages = new Map([
        [5, 27],
        [27, 5],
        [29, 6],
      ])),
        (0, i.gn)([o.LO], re.prototype, "m_mapFAQSummaries", void 0),
        (0, i.gn)([o.aD], re.prototype, "RemoveAllDirtyDrafts", null);
      const ie = /^[0-9a-fA-F]+$/;
      function ae(e) {
        const t = null == e ? void 0 : e.replace(/-/g, "");
        if (16 != (null == t ? void 0 : t.length) || !ie.test(t)) return null;
        return l().fromString(t, !0, 16).toString();
      }
      function ne(e) {
        const t = ("0000000000000000" + l().fromString(e, !0, 10).toString(16))
          .slice(-16)
          .toUpperCase();
        return `${t.slice(0, 4)}-${t.slice(4, 8)}-${t.slice(8, 12)}-${t.slice(
          12,
          16,
        )}`;
      }
      function se(e, t) {
        return [e && re.Get().GetFAQPublishedContent(e, t), !0];
      }
      function le(e) {
        const [t, r] = m.useState(re.Get().GetFAQDraftContent(e)),
          [i, a] = m.useState(!!t);
        return (
          (0, m.useEffect)(() => {
            re.Get()
              .LoadFAQDraftContent(e)
              .then((e) => r(e))
              .finally(() => a(!0));
          }, [e]),
          [t, i]
        );
      }
      function oe(e) {
        return [re.Get().GetFAQArticleSummary(e), !0];
      }
      function me() {
        const e = re.Get().GetAllFAQSummaries();
        return m.useRef([e, !0]).current;
      }
      function ce(e, t, r) {
        const [i, a] = m.useState(null),
          [n, s] = m.useState(!1);
        return (
          (0, m.useEffect)(() => {
            re.Get().BHasFAQEdit() &&
              re
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
