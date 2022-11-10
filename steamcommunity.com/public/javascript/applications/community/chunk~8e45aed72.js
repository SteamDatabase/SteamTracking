/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8120],
  {
    56438: (e) => {
      e.exports = {
        FAQContainer: "faqbbcode_FAQContainer_1BWX4",
        Section: "faqbbcode_Section_NWJUH",
        Note: "faqbbcode_Note_1Er-4",
        Important: "faqbbcode_Important_2LRZH",
        Warning: "faqbbcode_Warning_3G4C2",
        FAQImage: "faqbbcode_FAQImage_1sKwB",
      };
    },
    68130: (e, t, r) => {
      "use strict";
      r.d(t, { R: () => f });
      var i = r(67294),
        a = r(92398),
        n = r(96187),
        s = r(60501),
        l = r(7573),
        o = r(90666),
        m = r(49727),
        u = r(99663),
        c = r(63473),
        d = r(22517),
        _ = r(56438),
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
                  ("china" == t && o.De.EREALM == a.IN.k_ESteamRealmChina)
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
    27394: (e, t, r) => {
      "use strict";
      r.d(t, { s: () => c });
      var i = r(70655),
        a = r(22188),
        n = (r(26149), r(92398)),
        s = (r(35093), r(84047)),
        l = r(77520),
        o = r(81130),
        m = r(93976),
        u = r(90666);
      class c {
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
          var e, t, r, n;
          return (0, i.mG)(this, void 0, void 0, function* () {
            (0,
            l.X)(Boolean(null === (e = this.m_summary) || void 0 === e ? void 0 : e.faq_id), "Attempting to save when we lack a FaqID in the summary object");
            let i = 1,
              o = new Array();
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
                  l = s.xP
                    .Get()
                    .UpdateDraft(
                      null === (n = this.m_summary) || void 0 === n
                        ? void 0
                        : n.faq_id,
                      e,
                      t,
                      r
                    );
                l
                  .then((n) => {
                    1 == n.eResult
                      ? (0, a.z)(() => {
                          this.m_mapStoredDrafts.has(e) ||
                            this.m_mapStoredDrafts.set(e, {}),
                            (this.m_mapStoredDrafts.get(e).title = t),
                            (this.m_mapStoredDrafts.get(e).content = r),
                            (this.m_mapStoredDrafts.get(e).timestamp =
                              n.rtUpdateTime),
                            (this.m_mapStoredDrafts.get(e).author_account_id =
                              u.L7.accountid.toString()),
                            (this.m_mapLocalUpdates.get(e).strTitle = null),
                            (this.m_mapLocalUpdates.get(e).strContent = null);
                          let i = !1;
                          this.m_summary.per_language_info.forEach((t) => {
                            e == t.language &&
                              ((i = !0),
                              (t.last_update_timestamp = Math.max(
                                t.last_update_timestamp,
                                n.rtUpdateTime
                              )));
                          }),
                            i ||
                              this.m_summary.per_language_info.push({
                                language: e,
                                last_update_timestamp: n.rtUpdateTime,
                              });
                        })
                      : 1 == i &&
                        (console.error(
                          "FAQModel.SaveDraft: Response not ok " + n.eResult,
                          n
                        ),
                        (i = n.eResult));
                  })
                  .catch((e) => {
                    console.error(
                      "FAQModel.SaveDrafts: Hit error " +
                        (0, m.l)(e).strErrorMsg
                    ),
                      1 == i && (i = 2);
                  }),
                  o.push(l);
              }
            return yield Promise.all(o), i;
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
        GetDraftTitleWithFallback(e, t = n.IN.k_ESteamRealmGlobal) {
          var r, i, a, s, l, o;
          const m = t == n.IN.k_ESteamRealmChina ? 6 : 0;
          return null !==
            (o =
              null !==
                (s =
                  null !==
                    (i =
                      null !== (r = this.m_mapLocalUpdates.get(e).strTitle) &&
                      void 0 !== r
                        ? r
                        : this.m_mapLocalUpdates.get(m).strTitle) &&
                  void 0 !== i
                    ? i
                    : null === (a = this.m_mapStoredDrafts.get(e)) ||
                      void 0 === a
                    ? void 0
                    : a.title) && void 0 !== s
                ? s
                : null === (l = this.m_mapStoredDrafts.get(m)) || void 0 === l
                ? void 0
                : l.title) && void 0 !== o
            ? o
            : "";
        }
        GetDraftContentWithFallback(e, t = n.IN.k_ESteamRealmGlobal) {
          var r, i, a, s, l, o;
          const m = t == n.IN.k_ESteamRealmChina ? 6 : 0;
          return null !==
            (o =
              null !==
                (s =
                  null !==
                    (i =
                      null !== (r = this.m_mapLocalUpdates.get(e).strContent) &&
                      void 0 !== r
                        ? r
                        : this.m_mapLocalUpdates.get(m).strContent) &&
                  void 0 !== i
                    ? i
                    : null === (a = this.m_mapStoredDrafts.get(e)) ||
                      void 0 === a
                    ? void 0
                    : a.content) && void 0 !== s
                ? s
                : null === (l = this.m_mapStoredDrafts.get(m)) || void 0 === l
                ? void 0
                : l.content) && void 0 !== o
            ? o
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
              e.push(n.IN.k_ESteamRealmGlobal),
            this.m_summary.visible_in_global_realm &&
              e.push(n.IN.k_ESteamRealmChina),
            0 == e.length && e.push(n.IN.k_ESteamRealmGlobal),
            (0, l.X)(
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
      (0, i.gn)([a.LO], c.prototype, "m_mapLocalUpdates", void 0),
        (0, i.gn)([o.a], c.prototype, "BHasSomeTextForLanguage", null),
        (0, i.gn)([o.a], c.prototype, "GetLastTimeLanguageUpdated", null);
    },
    35093: (e, t, r) => {
      "use strict";
      r.d(t, {
        $H: () => c,
        F2: () => g,
        Go: () => p,
        KF: () => E,
        SU: () => F,
        dp: () => v,
        hU: () => M,
        jV: () => m,
        sL: () => _,
        tv: () => y,
      });
      var i = r(33019),
        a = r(40110);
      const n = i.Message;
      class s extends n {
        constructor(e = null) {
          super(),
            s.prototype.faq_id || a.aR(s.M()),
            n.initialize(this, e, 0, -1, [6], null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  faq_id: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  internal_name: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  visible_in_global_realm: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  visible_in_china_realm: {
                    n: 4,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  json_data: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  per_language_info: { n: 6, c: l, r: !0, q: !0 },
                  url_code: { n: 7, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = a.Bh(s.M())), s.sm_mbf;
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(s.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(s.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new s();
          return s.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(s.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(s.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQSummary";
        }
      }
      class l extends n {
        constructor(e = null) {
          super(),
            l.prototype.language || a.aR(l.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  language: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  last_update_timestamp: {
                    n: 2,
                    br: a.FE.readFixed32,
                    bw: a.Xc.writeFixed32,
                  },
                  last_publish_timestamp: {
                    n: 3,
                    br: a.FE.readFixed32,
                    bw: a.Xc.writeFixed32,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQSummary_CLanguageInfo";
        }
      }
      class o extends n {
        constructor(e = null) {
          super(),
            o.prototype.faq_id || a.aR(o.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  faq_id: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  language: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  version: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  content: { n: 4, br: a.FE.readString, bw: a.Xc.writeString },
                  title: { n: 5, br: a.FE.readString, bw: a.Xc.writeString },
                  timestamp: {
                    n: 6,
                    br: a.FE.readFixed32,
                    bw: a.Xc.writeFixed32,
                  },
                  author_account_id: {
                    n: 7,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQContent";
        }
      }
      class m extends n {
        constructor(e = null) {
          super(),
            m.prototype.steamid || a.aR(m.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  internal_name: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  json_data: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Create_Request";
        }
      }
      class u extends n {
        constructor(e = null) {
          super(),
            u.prototype.faq_id || a.aR(u.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  faq_id: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = a.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Create_Response";
        }
      }
      class c extends n {
        constructor(e = null) {
          super(),
            c.prototype.steamid || a.aR(c.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Delete_Request";
        }
      }
      class d extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new d();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Delete_Response";
        }
      }
      class _ extends n {
        constructor(e = null) {
          super(),
            _.prototype.steamid || a.aR(_.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  internal_name: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateInternalName_Request";
        }
      }
      class B extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
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
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateInternalName_Response";
        }
      }
      class g extends n {
        constructor(e = null) {
          super(),
            g.prototype.steamid || a.aR(g.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  json_data: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = a.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateJsonData_Request";
        }
      }
      class f extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
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
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateJsonData_Response";
        }
      }
      class y extends n {
        constructor(e = null) {
          super(),
            y.prototype.steamid || a.aR(y.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  visible_in_global_realm: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  visible_in_china_realm: {
                    n: 4,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SetVisibility_Request";
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
          return "CClanFAQS_SetVisibility_Response";
        }
      }
      class p extends n {
        constructor(e = null) {
          super(),
            p.prototype.steamid || a.aR(p.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  language: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  content: { n: 4, br: a.FE.readString, bw: a.Xc.writeString },
                  title: { n: 5, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateDraft_Request";
        }
      }
      class h extends n {
        constructor(e = null) {
          super(),
            h.prototype.last_update_timestamp || a.aR(h.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  last_update_timestamp: {
                    n: 1,
                    br: a.FE.readFixed32,
                    bw: a.Xc.writeFixed32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = a.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateDraft_Response";
        }
      }
      class F extends n {
        constructor(e = null) {
          super(),
            F.prototype.steamid || a.aR(F.M()),
            n.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  language: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = a.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(F.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_PublishDraft_Request";
        }
      }
      class S extends n {
        constructor(e = null) {
          super(),
            S.prototype.last_publish_timestamp || a.aR(S.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  last_publish_timestamp: {
                    n: 1,
                    br: a.FE.readFixed32,
                    bw: a.Xc.writeFixed32,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = a.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_PublishDraft_Response";
        }
      }
      class w extends n {
        constructor(e = null) {
          super(),
            w.prototype.faq || a.aR(w.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m || (w.sm_m = { proto: w, fields: { faq: { n: 1, c: o } } }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_PreviewDraft_Response";
        }
      }
      class A extends n {
        constructor(e = null) {
          super(),
            A.prototype.faq || a.aR(A.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  faq: { n: 1, c: o },
                  faq_exists: {
                    n: 2,
                    d: !1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = a.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(A.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetFAQ_Response";
        }
      }
      class v extends n {
        constructor(e = null) {
          super(),
            v.prototype.steamid || a.aR(v.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  language: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  version: {
                    n: 4,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = a.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetFAQVersion_Request";
        }
      }
      class z extends n {
        constructor(e = null) {
          super(),
            z.prototype.faq || a.aR(z.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m || (z.sm_m = { proto: z, fields: { faq: { n: 1, c: o } } }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = a.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetFAQVersion_Response";
        }
      }
      class M extends n {
        constructor(e = null) {
          super(),
            M.prototype.steamid || a.aR(M.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  faq_id: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = a.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(M.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllDrafts_Request";
        }
      }
      class R extends n {
        constructor(e = null) {
          super(),
            R.prototype.summary || a.aR(R.M()),
            n.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  summary: { n: 1, c: s },
                  draft: { n: 2, c: o, r: !0, q: !0 },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = a.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(R.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllDrafts_Response";
        }
      }
      class C extends n {
        constructor(e = null) {
          super(),
            C.prototype.faq || a.aR(C.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: { faq: { n: 1, c: s, r: !0, q: !0 } },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = a.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(C.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllFAQsForClan_Response";
        }
      }
      class Q extends n {
        constructor(e = null) {
          super(),
            Q.prototype.faqs || a.aR(Q.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: { faqs: { n: 1, c: o, r: !0, q: !0 } },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = a.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(Q.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Response";
        }
      }
      class D extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new D();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_CheckFAQPermissions_Response";
        }
      }
      class T extends n {
        constructor(e = null) {
          super(),
            T.prototype.faqs || a.aR(T.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  faqs: { n: 1, c: W, r: !0, q: !0 },
                  num_total_results: {
                    n: 2,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  next_cursor: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = a.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SearchFAQs_Response";
        }
      }
      class W extends n {
        constructor(e = null) {
          super(),
            W.prototype.articleid || a.aR(W.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  articleid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  name: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  content: { n: 3, br: a.FE.readString, bw: a.Xc.writeString },
                  clan_accountid: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  url_code: { n: 5, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = a.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return a.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SearchFAQs_Response_CFAQSearchResult";
        }
      }
      var E;
      !(function (e) {
        (e.Create = function (e, t) {
          return e.SendMsg("ClanFAQS.Create#1", t, u, { ePrivilege: 1 });
        }),
          (e.Delete = function (e, t) {
            return e.SendMsg("ClanFAQS.Delete#1", t, d, { ePrivilege: 1 });
          }),
          (e.UpdateInternalName = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateInternalName#1", t, B, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateJsonData = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateJsonData#1", t, f, {
              ePrivilege: 1,
            });
          }),
          (e.SetVisibility = function (e, t) {
            return e.SendMsg("ClanFAQS.SetVisibility#1", t, b, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateDraft#1", t, h, { ePrivilege: 1 });
          }),
          (e.PublishDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.PublishDraft#1", t, S, {
              ePrivilege: 1,
            });
          }),
          (e.PreviewDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.PreviewDraft#1", t, w, {
              ePrivilege: 1,
            });
          }),
          (e.GetFAQ = function (e, t) {
            return e.SendMsg("ClanFAQS.GetFAQ#1", t, A, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetFAQVersion = function (e, t) {
            return e.SendMsg("ClanFAQS.GetFAQVersion#1", t, z, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllDrafts = function (e, t) {
            return e.SendMsg("ClanFAQS.GetAllDrafts#1", t, R, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllFAQsForClan = function (e, t) {
            return e.SendMsg("ClanFAQS.GetAllFAQsForClan#1", t, C, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllLatestVersionPublishedFAQS = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.GetAllLatestVersionPublishedFAQS#1",
              t,
              Q,
              { ePrivilege: 1 }
            );
          }),
          (e.CheckFAQPermissions = function (e, t) {
            return e.SendMsg("ClanFAQS.CheckFAQPermissions#1", t, D, {
              ePrivilege: 1,
            });
          }),
          (e.SearchFAQs = function (e, t) {
            return e.SendMsg("ClanFAQS.SearchFAQs#1", t, T, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(E || (E = {}));
    },
    84047: (e, t, r) => {
      "use strict";
      r.d(t, {
        EH: () => w,
        Ky: () => v,
        NV: () => F,
        SP: () => A,
        cJ: () => p,
        hS: () => h,
        wl: () => S,
        xP: () => y,
      });
      var i = r(70655),
        a = r(9669),
        n = r.n(a),
        s = r(43720),
        l = r.n(s),
        o = r(22188),
        m = r(67294),
        u = (r(26149), r(92398)),
        c = r(58114),
        d = r(27394),
        _ = r(65902),
        B = (r(46321), r(35093)),
        g = (r(82946), r(93976)),
        f = r(90666);
      class y {
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
        static Get() {
          return y.s_Singleton || (y.s_Singleton = new y()), y.s_Singleton;
        }
        static Init(e) {
          y.Get().m_steamInterface = e;
        }
        SetUpWebAPIInterface() {
          const e = (0, f.kQ)("faqstore", "application_config"),
            t = null == e ? void 0 : e.webapi_token;
          this.m_steamInterface = new _.J(f.De.WEBAPI_BASE_URL, t);
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
                  new d.s(this.m_mapFAQSummaries.get(t), i)
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
            const t = c.gA.Init(B.jV);
            t.Body().set_steamid(f.JA.CLANSTEAMID),
              t.Body().set_internal_name(e);
            let r,
              i = 2;
            try {
              const a = yield B.KF.Create(
                this.m_steamInterface.GetServiceTransport(),
                t
              );
              if (((i = a.GetEResult()), 1 == i)) {
                r = a.Body().faq_id();
                const t = { faq_id: r, internal_name: e };
                this.m_mapFAQSummaries.set(r, t);
              } else console.error("FAQStore.CreateFAQ: Create request failed:", i);
            } catch (e) {
              const t = (0, g.l)(e);
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
            const i = c.gA.Init(B.Go);
            i.Body().set_steamid(f.JA.CLANSTEAMID),
              i.Body().set_faq_id(e),
              i.Body().set_language(t),
              i.Body().set_content(a),
              i.Body().set_title(r);
            let n = 2,
              s = 0;
            try {
              const e = yield B.KF.UpdateDraft(
                this.m_steamInterface.GetServiceTransport(),
                i
              );
              (n = e.GetEResult()),
                1 != n
                  ? console.error("FAQStore.UpdateDraft request failed:", n)
                  : (s = e.Body().last_update_timestamp());
            } catch (e) {
              const t = (0, g.l)(e);
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
              i = c.gA.Init(B.F2);
            i.Body().set_steamid(f.JA.CLANSTEAMID),
              i.Body().set_faq_id(e),
              i.Body().set_json_data(r);
            let a = 2;
            try {
              (a = (yield B.KF.UpdateJsonData(
                this.m_steamInterface.GetServiceTransport(),
                i
              )).GetEResult()),
                1 != a
                  ? console.error("FAQStore.UpdateJsonData request failed:", a)
                  : (this.m_mapFAQSummaries.get(e).json_data = r);
            } catch (e) {
              const t = (0, g.l)(e);
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
            const i = c.gA.Init(B.dp);
            i.Body().set_steamid(f.JA.CLANSTEAMID),
              i.Body().set_faq_id(e),
              i.Body().set_version(t),
              i.Body().set_language(r);
            try {
              const e = yield B.KF.GetFAQVersion(
                  this.m_steamInterface.GetServiceTransport(),
                  i
                ),
                t = e.GetEResult();
              if (1 == t) return e.Body().faq().toObject();
              console.error("FAQStore.GetFAQVersion request failed:", t);
            } catch (e) {
              const t = (0, g.l)(e);
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
            const t = c.gA.Init(B.$H);
            t.Body().set_steamid(f.JA.CLANSTEAMID), t.Body().set_faq_id(e);
            let r = 2;
            try {
              (r = (yield B.KF.Delete(
                this.m_steamInterface.GetServiceTransport(),
                t
              )).GetEResult()),
                1 != r
                  ? console.error("FAQStore.DeleteFAQ request failed:", r)
                  : (this.m_mapFAQDrafts.delete(e),
                    this.m_mapFAQPublishedContent.delete(e),
                    this.m_mapFAQSummaries.delete(e));
            } catch (e) {
              const t = (0, g.l)(e);
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
              y.sm_mapFallbackLanguages.has(t) &&
              (i = r.get(y.sm_mapFallbackLanguages.get(t))),
            i || 0 == t || (0, u.e7)(f.De.EREALM) || (i = r.get(0)),
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
            const t = c.gA.Init(B.hU);
            t.Body().set_steamid(f.JA.CLANSTEAMID), t.Body().set_faq_id(e);
            let r = 2;
            try {
              const i = yield B.KF.GetAllDrafts(
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
                const a = new d.s(this.m_mapFAQSummaries.get(e), r);
                return this.m_mapFAQDrafts.set(e, a), a;
              }
            } catch (e) {
              const t = (0, g.l)(e);
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
            const i = c.gA.Init(B.tv);
            i.Body().set_steamid(f.JA.CLANSTEAMID),
              i.Body().set_faq_id(e),
              i.Body().set_visible_in_global_realm(t),
              i.Body().set_visible_in_china_realm(r);
            let a = 2;
            try {
              if (
                ((a = (yield B.KF.SetVisibility(
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
              const t = (0, g.l)(e);
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
            const r = c.gA.Init(B.SU);
            r.Body().set_steamid(f.JA.CLANSTEAMID),
              r.Body().set_faq_id(e),
              t.forEach((e) => r.Body().add_language(e));
            let i = 2;
            try {
              const a = yield B.KF.PublishDraft(
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
              const t = (0, g.l)(e);
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
            const r = c.gA.Init(B.sL);
            r.Body().set_steamid(f.JA.CLANSTEAMID),
              r.Body().set_faq_id(e),
              r.Body().set_internal_name(t);
            let i = 2;
            try {
              (i = (yield B.KF.UpdateInternalName(
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
              const t = (0, g.l)(e);
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
              f.De.COMMUNITY_BASE_URL +
              "faqs/" +
              f.JA.VANITY_ID +
              "/ajaxpushtocrowdin/" +
              h(e);
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
                h(e),
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
            const m = (0, g.l)(o);
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
      (y.sm_mapFallbackLanguages = new Map([
        [5, 27],
        [27, 5],
        [29, 6],
      ])),
        (0, i.gn)([o.LO], y.prototype, "m_mapFAQSummaries", void 0),
        (0, i.gn)([o.aD], y.prototype, "RemoveAllDirtyDrafts", null);
      const b = /^[0-9a-fA-F]+$/;
      function p(e) {
        const t = null == e ? void 0 : e.replace(/-/g, "");
        if (16 != (null == t ? void 0 : t.length) || !b.test(t)) return null;
        return l().fromString(t, !0, 16).toString();
      }
      function h(e) {
        const t = ("0000000000000000" + l().fromString(e, !0, 10).toString(16))
          .slice(-16)
          .toUpperCase();
        return `${t.slice(0, 4)}-${t.slice(4, 8)}-${t.slice(8, 12)}-${t.slice(
          12,
          16
        )}`;
      }
      function F(e, t) {
        return [e && y.Get().GetFAQPublishedContent(e, t), !0];
      }
      function S(e) {
        const [t, r] = m.useState(y.Get().GetFAQDraftContent(e)),
          [i, a] = m.useState(!!t);
        return (
          (0, m.useEffect)(() => {
            y.Get()
              .LoadFAQDraftContent(e)
              .then((e) => r(e))
              .finally(() => a(!0));
          }, [e]),
          [t, i]
        );
      }
      function w(e) {
        return [y.Get().GetFAQArticleSummary(e), !0];
      }
      function A() {
        const e = y.Get().GetAllFAQSummaries();
        return m.useRef([e, !0]).current;
      }
      function v(e, t, r) {
        const [i, a] = m.useState(null),
          [n, s] = m.useState(!1);
        return (
          (0, m.useEffect)(() => {
            y.Get().BHasFAQEdit() &&
              y
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
