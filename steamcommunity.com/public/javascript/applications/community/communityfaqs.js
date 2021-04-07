/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    BXmN: function (e, t, r) {
      e.exports = {
        FAQEditPage: "faqeditor_FAQEditPage_2QALa",
        FAQEditor: "faqeditor_FAQEditor_3YIwj",
        EditorSaveButton: "faqeditor_EditorSaveButton_22iwd",
        EditorLabel: "faqeditor_EditorLabel_3jk92",
        EditorTitleField: "faqeditor_EditorTitleField_37R-2",
        EditorTitleFieldInput: "faqeditor_EditorTitleFieldInput_2A5OE",
        EditorPane: "faqeditor_EditorPane_B4ngK",
        EditorPaneTextArea: "faqeditor_EditorPaneTextArea_1g6vo",
        ErrorCtn: "faqeditor_ErrorCtn_1l94e",
        ErrorMsg: "faqeditor_ErrorMsg_1LIvQ",
        EscapeLink: "faqeditor_EscapeLink_3tlrR",
      };
    },
    JZ7q: function (e, t, r) {
      "use strict";
      r.r(t);
      var u,
        a,
        f = r("mrSG"),
        n = r("TyAF"),
        l = r("q1tI"),
        b = r.n(l),
        i = r("2lpH"),
        o = r.n(i),
        s = r("2vnA"),
        d = r("bxBv"),
        c = r("kyHq"),
        m = r("r64O"),
        _ = r("bxiW"),
        p = (function () {
          function e(e, t) {
            (this.m_summary = e),
              (this.m_mapStoredDrafts = t),
              (this.m_mapLocalUpdates = new Map());
            for (var r = 0; r < 30; r++) this.m_mapLocalUpdates.set(r, {});
          }
          return (
            (e.prototype.BNeedsSaving = function (e) {
              if (void 0 === e)
                return Array.from(this.m_mapLocalUpdates.values()).some(
                  function (e) {
                    return !!e.strTitle || !!e.strContent;
                  }
                );
              var t = this.m_mapLocalUpdates.get(e);
              return !!t.strTitle || !!t.strContent;
            }),
            (e.prototype.SaveDrafts = function () {
              var a, c, u, d;
              return Object(f.b)(this, void 0, void 0, function () {
                var i,
                  o,
                  t,
                  l,
                  r,
                  s = this;
                return Object(f.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      for (
                        Object(m.a)(
                          Boolean(
                            null === (a = this.m_summary) || void 0 === a
                              ? void 0
                              : a.faq_id
                          ),
                          "Attempting to save when we lack a FaqID in the summary object"
                        ),
                          i = 1,
                          o = new Array(),
                          t = function (e) {
                            var t, r, a, n;
                            (l.m_mapLocalUpdates.get(e).strTitle ===
                              (null === (c = l.m_mapStoredDrafts.get(e)) ||
                              void 0 === c
                                ? void 0
                                : c.title) &&
                              l.m_mapLocalUpdates.get(e).strContent ===
                                (null === (u = l.m_mapStoredDrafts.get(e)) ||
                                void 0 === u
                                  ? void 0
                                  : u.content)) ||
                              ((t = l.GetDraftTitle(e)),
                              (r = l.GetDraftContent(e)),
                              (a = z
                                .Get()
                                .UpdateDraft(
                                  null === (d = l.m_summary) || void 0 === d
                                    ? void 0
                                    : d.faq_id,
                                  e,
                                  t,
                                  r
                                )),
                              (n = e),
                              a
                                .then(function (e) {
                                  1 == e
                                    ? ((s.m_mapStoredDrafts.get(n).title = t),
                                      (s.m_mapStoredDrafts.get(n).content = r),
                                      (s.m_mapLocalUpdates.get(
                                        n
                                      ).strTitle = null),
                                      (s.m_mapLocalUpdates.get(
                                        n
                                      ).strContent = null))
                                    : 1 == i && (i = e);
                                })
                                .catch(function (e) {
                                  1 == i && (i = 2);
                                }),
                              o.push(a));
                          },
                          l = this,
                          r = 0;
                        r < 30;
                        ++r
                      )
                        t(r);
                      return [4, Promise.all(o)];
                    case 1:
                      return e.sent(), [2, i];
                  }
                });
              });
            }),
            (e.prototype.GetFAQInternalName = function () {
              var e;
              return null === (e = this.m_summary) || void 0 === e
                ? void 0
                : e.internal_name;
            }),
            (e.prototype.GetDraftTitle = function (e) {
              var t;
              return (
                this.m_mapLocalUpdates.get(e).strTitle ||
                (null === (t = this.m_mapStoredDrafts.get(e)) || void 0 === t
                  ? void 0
                  : t.title)
              );
            }),
            (e.prototype.GetDraftContent = function (e) {
              var t;
              return (
                this.m_mapLocalUpdates.get(e).strContent ||
                (null === (t = this.m_mapStoredDrafts.get(e)) || void 0 === t
                  ? void 0
                  : t.content)
              );
            }),
            (e.prototype.GetDraftTitleWithFallback = function (e, t) {
              var r, a, n, i, o, l;
              void 0 === t && (t = c.d.k_ESteamRealmGlobal);
              var s = t == c.d.k_ESteamRealmChina ? 6 : 0;
              return null !==
                (l =
                  null !==
                    (i =
                      null !==
                        (a =
                          null !==
                            (r = this.m_mapLocalUpdates.get(e).strTitle) &&
                          void 0 !== r
                            ? r
                            : this.m_mapLocalUpdates.get(s).strTitle) &&
                      void 0 !== a
                        ? a
                        : null === (n = this.m_mapStoredDrafts.get(e)) ||
                          void 0 === n
                        ? void 0
                        : n.title) && void 0 !== i
                    ? i
                    : null === (o = this.m_mapStoredDrafts.get(s)) ||
                      void 0 === o
                    ? void 0
                    : o.title) && void 0 !== l
                ? l
                : "";
            }),
            (e.prototype.GetDraftContentWithFallback = function (e, t) {
              var r, a, n, i, o, l;
              void 0 === t && (t = c.d.k_ESteamRealmGlobal);
              var s = t == c.d.k_ESteamRealmChina ? 6 : 0;
              return null !==
                (l =
                  null !==
                    (i =
                      null !==
                        (a =
                          null !==
                            (r = this.m_mapLocalUpdates.get(e).strContent) &&
                          void 0 !== r
                            ? r
                            : this.m_mapLocalUpdates.get(s).strContent) &&
                      void 0 !== a
                        ? a
                        : null === (n = this.m_mapStoredDrafts.get(e)) ||
                          void 0 === n
                        ? void 0
                        : n.content) && void 0 !== i
                    ? i
                    : null === (o = this.m_mapStoredDrafts.get(s)) ||
                      void 0 === o
                    ? void 0
                    : o.content) && void 0 !== l
                ? l
                : "";
            }),
            (e.prototype.GetLastSaveMetaData = function (e) {
              return this.m_mapStoredDrafts.get(e);
            }),
            (e.prototype.BHasSomeTextForLanguage = function (e) {
              return Boolean(this.GetDraftContent(e) || this.GetDraftTitle(e));
            }),
            (e.prototype.SetDraftTitle = function (e, t) {
              var r;
              t ===
              (null === (r = this.m_mapStoredDrafts.get(e)) || void 0 === r
                ? void 0
                : r.title)
                ? (this.m_mapLocalUpdates.get(e).strTitle = null)
                : (this.m_mapLocalUpdates.get(e).strTitle = t);
            }),
            (e.prototype.SetDraftContent = function (e, t) {
              var r;
              t ===
              (null === (r = this.m_mapStoredDrafts.get(e)) || void 0 === r
                ? void 0
                : r.content)
                ? (this.m_mapLocalUpdates.get(e).strContent = null)
                : (this.m_mapLocalUpdates.get(e).strContent = t);
            }),
            (e.prototype.GetIncludedRealmList = function () {
              var e = new Array();
              return (
                this.m_summary.visible_in_global_realm &&
                  e.push(c.d.k_ESteamRealmGlobal),
                this.m_summary.visible_in_global_realm &&
                  e.push(c.d.k_ESteamRealmChina),
                0 == e.length && e.push(c.d.k_ESteamRealmGlobal),
                Object(m.a)(
                  0 < e.length,
                  "FAQ " +
                    this.m_summary.faq_id +
                    " is currently configured so that no realms are valid for display."
                ),
                e
              );
            }),
            (e.prototype.BHasPublished = function () {
              return Boolean(this.m_summary.last_publish_timestamp);
            }),
            (e.prototype.GetLastTimeLanguageUpdated = function (e) {
              var t, r;
              return null !==
                (r =
                  null === (t = this.GetLastSaveMetaData(e)) || void 0 === t
                    ? void 0
                    : t.timestamp) && void 0 !== r
                ? r
                : 0;
            }),
            (e.prototype.GetFAQID = function () {
              return this.m_summary.faq_id;
            }),
            (e.prototype.GetSummary = function () {
              return this.m_summary;
            }),
            Object(f.c)([s.C], e.prototype, "m_mapLocalUpdates", void 0),
            Object(f.c)([_.a], e.prototype, "BHasSomeTextForLanguage", null),
            Object(f.c)([_.a], e.prototype, "GetLastTimeLanguageUpdated", null),
            e
          );
        })(),
        v = r("WBba"),
        h = r("kLLr"),
        E = r("hRO2"),
        g = r("OS8t"),
        y = E.Message,
        F = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.faq_id || g.a(a.M()),
              y.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(f.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: {
                      faq_id: {
                        n: 1,
                        br: g.d.readUint64String,
                        bw: g.h.writeUint64String,
                      },
                      internal_name: {
                        n: 2,
                        br: g.d.readString,
                        bw: g.h.writeString,
                      },
                      visible_in_global_realm: {
                        n: 3,
                        br: g.d.readBool,
                        bw: g.h.writeBool,
                      },
                      visible_in_china_realm: {
                        n: 4,
                        br: g.d.readBool,
                        bw: g.h.writeBool,
                      },
                      last_update_timestamp: {
                        n: 5,
                        br: g.d.readFixed32,
                        bw: g.h.writeFixed32,
                      },
                      last_publish_timestamp: {
                        n: 6,
                        br: g.d.readFixed32,
                        bw: g.h.writeFixed32,
                      },
                    },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = g.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return g.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return g.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new E.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return g.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              g.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQSummary";
            }),
            a
          );
        })(y),
        A = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.faq_id || g.a(a.M()),
              y.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(f.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: {
                      faq_id: {
                        n: 1,
                        br: g.d.readUint64String,
                        bw: g.h.writeUint64String,
                      },
                      language: {
                        n: 2,
                        br: g.d.readUint32,
                        bw: g.h.writeUint32,
                      },
                      version: {
                        n: 3,
                        br: g.d.readUint64String,
                        bw: g.h.writeUint64String,
                      },
                      content: {
                        n: 4,
                        br: g.d.readString,
                        bw: g.h.writeString,
                      },
                      title: { n: 5, br: g.d.readString, bw: g.h.writeString },
                      timestamp: {
                        n: 6,
                        br: g.d.readFixed32,
                        bw: g.h.writeFixed32,
                      },
                      author_account_id: {
                        n: 7,
                        br: g.d.readUint64String,
                        bw: g.h.writeUint64String,
                      },
                    },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = g.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return g.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return g.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new E.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return g.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              g.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQContent";
            }),
            a
          );
        })(y),
        B = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.steamid || g.a(a.M()),
              y.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(f.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: {
                      steamid: {
                        n: 1,
                        br: g.d.readUint64String,
                        bw: g.h.writeUint64String,
                      },
                      internal_name: {
                        n: 2,
                        br: g.d.readString,
                        bw: g.h.writeString,
                      },
                    },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = g.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return g.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return g.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new E.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return g.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              g.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_Create_Request";
            }),
            a
          );
        })(y),
        C = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.faq_id || g.a(a.M()),
              y.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(f.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: {
                      faq_id: {
                        n: 1,
                        br: g.d.readUint64String,
                        bw: g.h.writeUint64String,
                      },
                    },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = g.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return g.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return g.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new E.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return g.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              g.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_Create_Response";
            }),
            a
          );
        })(y),
        S = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.steamid || g.a(a.M()),
              y.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(f.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: {
                      steamid: {
                        n: 1,
                        br: g.d.readUint64String,
                        bw: g.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: g.d.readUint64String,
                        bw: g.h.writeUint64String,
                      },
                    },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = g.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return g.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return g.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new E.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return g.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              g.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_Delete_Request";
            }),
            a
          );
        })(y),
        w = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return y.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(f.d)(a, r),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (a.fromObject = function (e) {
              return new a();
            }),
            (a.deserializeBinary = function (e) {
              var t = new E.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (a.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {}),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_Delete_Response";
            }),
            a
          );
        })(y),
        O = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return y.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(f.d)(a, r),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (a.fromObject = function (e) {
              return new a();
            }),
            (a.deserializeBinary = function (e) {
              var t = new E.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (a.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {}),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_SetVisibility_Response";
            }),
            a
          );
        })(y),
        D = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.steamid || g.a(a.M()),
              y.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(f.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: {
                      steamid: {
                        n: 1,
                        br: g.d.readUint64String,
                        bw: g.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: g.d.readUint64String,
                        bw: g.h.writeUint64String,
                      },
                      language: {
                        n: 3,
                        br: g.d.readUint32,
                        bw: g.h.writeUint32,
                      },
                      content: {
                        n: 4,
                        br: g.d.readString,
                        bw: g.h.writeString,
                      },
                      title: { n: 5, br: g.d.readString, bw: g.h.writeString },
                    },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = g.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return g.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return g.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new E.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return g.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              g.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_UpdateDraft_Request";
            }),
            a
          );
        })(y),
        j = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return y.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(f.d)(a, r),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (a.fromObject = function (e) {
              return new a();
            }),
            (a.deserializeBinary = function (e) {
              var t = new E.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (a.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {}),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_UpdateDraft_Response";
            }),
            a
          );
        })(y),
        Q = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return y.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(f.d)(a, r),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (a.fromObject = function (e) {
              return new a();
            }),
            (a.deserializeBinary = function (e) {
              var t = new E.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (a.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {}),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_PublishDraft_Response";
            }),
            a
          );
        })(y),
        M = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.faq || g.a(a.M()),
              y.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(f.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = { proto: a, fields: { faq: { n: 1, c: A } } }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = g.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return g.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return g.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new E.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return g.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              g.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_PreviewDraft_Response";
            }),
            a
          );
        })(y),
        L = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.faq || g.a(a.M()),
              y.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(f.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = { proto: a, fields: { faq: { n: 1, c: A } } }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = g.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return g.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return g.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new E.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return g.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              g.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_GetFAQ_Response";
            }),
            a
          );
        })(y),
        q = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.steamid || g.a(a.M()),
              y.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(f.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: {
                      steamid: {
                        n: 1,
                        br: g.d.readUint64String,
                        bw: g.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: g.d.readUint64String,
                        bw: g.h.writeUint64String,
                      },
                    },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = g.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return g.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return g.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new E.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return g.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              g.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_GetAllDrafts_Request";
            }),
            a
          );
        })(y),
        N = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.summary || g.a(a.M()),
              y.initialize(t, e, 0, -1, [2], null),
              t
            );
          }
          return (
            Object(f.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: {
                      summary: { n: 1, c: F },
                      draft: { n: 2, c: A, r: !0, q: !0 },
                    },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = g.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return g.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return g.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new E.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return g.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              g.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_GetAllDrafts_Response";
            }),
            a
          );
        })(y),
        R = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.faq || g.a(a.M()),
              y.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(f.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: { faq: { n: 1, c: F, r: !0, q: !0 } },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = g.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return g.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return g.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new E.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return g.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              g.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_GetAllFAQsForClan_Response";
            }),
            a
          );
        })(y);
      ((a = u = u || {}).Create = function (e, t) {
        return e.SendMsg("ClanFAQS.Create#1", t, C, { ePrivilege: 1 });
      }),
        (a.Delete = function (e, t) {
          return e.SendMsg("ClanFAQS.Delete#1", t, w, { ePrivilege: 1 });
        }),
        (a.SetVisibility = function (e, t) {
          return e.SendMsg("ClanFAQS.SetVisibility#1", t, O, { ePrivilege: 1 });
        }),
        (a.UpdateDraft = function (e, t) {
          return e.SendMsg("ClanFAQS.UpdateDraft#1", t, j, { ePrivilege: 1 });
        }),
        (a.PublishDraft = function (e, t) {
          return e.SendMsg("ClanFAQS.PublishDraft#1", t, Q, { ePrivilege: 1 });
        }),
        (a.PreviewDraft = function (e, t) {
          return e.SendMsg("ClanFAQS.PreviewDraft#1", t, M, { ePrivilege: 1 });
        }),
        (a.GetFAQ = function (e, t) {
          return e.SendMsg("ClanFAQS.GetFAQ#1", t, L, {
            bConstMethod: !0,
            ePrivilege: 0,
            eWebAPIKeyRequirement: 1,
          });
        }),
        (a.GetAllDrafts = function (e, t) {
          return e.SendMsg("ClanFAQS.GetAllDrafts#1", t, N, { ePrivilege: 1 });
        }),
        (a.GetAllFAQsForClan = function (e, t) {
          return e.SendMsg("ClanFAQS.GetAllFAQsForClan#1", t, R, {
            ePrivilege: 1,
          });
        });
      var T = r("bDQf"),
        I = r("lkRc"),
        z = (function () {
          function t() {
            (this.m_mapFAQSummaries = new Map()),
              (this.m_mapFAQPublishedContent = new Map()),
              (this.m_mapFAQDrafts = new Map()),
              (this.m_steamInterface = null),
              "dev" == I.c.WEB_UNIVERSE && (window.g_FAQStore = this),
              I.c.IN_CLIENT ||
                (this.ReadInitialPayload(), this.SetUpWebAPIInterface()),
              I.c.IN_LIBRARY || (this.m_clanSteamID = new h.a(I.b.CLANSTEAMID));
          }
          return (
            (t.Get = function () {
              return t.s_Singleton || (t.s_Singleton = new t()), t.s_Singleton;
            }),
            (t.Init = function (e) {
              t.Get().m_steamInterface = e;
            }),
            (t.prototype.SetUpWebAPIInterface = function () {
              var e = Object(I.g)("faqstore", "application_config"),
                t = null == e ? void 0 : e.webapi_token;
              this.m_steamInterface = new v.a(I.c.WEBAPI_BASE_URL, t);
            }),
            (t.prototype.ReadInitialPayload = function () {
              var e = Object(I.g)("faqstore", "application_config");
              if (
                (("dev" != I.c.WEB_UNIVERSE && "beta" != I.c.WEB_UNIVERSE) ||
                  console.log("DEV_DEBUG: CFAQStore loading payload: ", e),
                this.BIsConfigValid(e))
              ) {
                if (e.faqs)
                  for (var t in e.faqs) {
                    var r = e.faqs[t];
                    (null == r ? void 0 : r.faq_id) == t &&
                      void 0 !== (null == r ? void 0 : r.language) &&
                      (this.m_mapFAQPublishedContent.has(t) ||
                        this.m_mapFAQPublishedContent.set(t, new Map()),
                      this.m_mapFAQPublishedContent.get(t).set(r.language, r));
                  }
                if (e.alldrafts)
                  for (var t in e.alldrafts) {
                    var a = e.alldrafts[t];
                    if (null != a && a.summary && a.draft) {
                      this.m_mapFAQSummaries.set(t, a.summary);
                      for (
                        var n = new Map(), i = 0, o = a.draft;
                        i < o.length;
                        i++
                      ) {
                        var l = o[i];
                        n.set(l.language, l);
                      }
                      this.m_mapFAQDrafts.set(t, new p(a.summary, n));
                    }
                  }
                if (e.allfaqs)
                  for (var s = 0, c = e.allfaqs; s < c.length; s++) {
                    var u = c[s];
                    u.faq_id && this.m_mapFAQSummaries.set(u.faq_id, u);
                  }
              } else
                "dev" == I.c.WEB_UNIVERSE && console.error("Invalid payload");
            }),
            (t.prototype.BIsConfigValid = function (e) {
              return !!(
                (e && e.faqs && "object" == typeof e.faqs) ||
                (e.alldrafts && "object" == typeof e.alldrafts) ||
                (e.allfaqs && Array.isArray(e.allfaqs))
              );
            }),
            (t.prototype.CreateFAQ = function (i) {
              return Object(f.b)(this, void 0, void 0, function () {
                var t, r, a, n;
                return Object(f.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = d.b.Init(B)).Body().set_steamid(I.b.CLANSTEAMID),
                        t.Body().set_internal_name(i),
                        [
                          4,
                          u.Create(
                            this.m_steamInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 1:
                      return (
                        (r = e.sent()),
                        1 == (a = r.GetEResult())
                          ? ((n = {
                              faq_id: r.Body().faq_id(),
                              internal_name: i,
                            }),
                            this.m_mapFAQSummaries.set(n.faq_id, n))
                          : console.error("Create request failed:", a),
                        [2, a]
                      );
                  }
                });
              });
            }),
            (t.prototype.UpdateDraft = function (o, l, s, c) {
              return Object(f.b)(this, void 0, void 0, function () {
                var t, r, a, n, i;
                return Object(f.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t = d.b.Init(D)).Body().set_steamid(I.b.CLANSTEAMID),
                        t.Body().set_faq_id(o),
                        t.Body().set_language(l),
                        t.Body().set_content(c),
                        t.Body().set_title(s),
                        (r = 2),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          u.UpdateDraft(
                            this.m_steamInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (a = e.sent()),
                        1 != (r = a.GetEResult()) &&
                          console.error("UpdateDraft request failed:", r),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (n = e.sent()),
                        (i = Object(T.a)(n)),
                        console.error(
                          "UpdateDraft: caught error " + i.strErrorMsg,
                          i
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, r];
                  }
                });
              });
            }),
            (t.prototype.DeleteFAQ = function (n) {
              return Object(f.b)(this, void 0, void 0, function () {
                var t, r, a;
                return Object(f.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = d.b.Init(S)).Body().set_steamid(I.b.CLANSTEAMID),
                        t.Body().set_faq_id(n),
                        [
                          4,
                          u.Delete(
                            this.m_steamInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 1:
                      return (
                        (r = e.sent()),
                        1 != (a = r.GetEResult())
                          ? console.error("DeleteFAQ request failed:", a)
                          : (this.m_mapFAQDrafts.delete(n),
                            this.m_mapFAQPublishedContent.delete(n),
                            this.m_mapFAQSummaries.delete(n)),
                        [2, a]
                      );
                  }
                });
              });
            }),
            (t.prototype.GetFAQPublishedContent = function (e, t) {
              var r;
              return null === (r = this.m_mapFAQPublishedContent.get(e)) ||
                void 0 === r
                ? void 0
                : r.get(t);
            }),
            (t.prototype.GetFAQDraftContent = function (e) {
              return this.m_mapFAQDrafts.get(e);
            }),
            (t.prototype.GetAllFAQSummaries = function () {
              return Array.from(this.m_mapFAQSummaries.values());
            }),
            (t.prototype.GetFAQArticleSummary = function (e) {
              return this.m_mapFAQSummaries.get(e) || {};
            }),
            (t.prototype.GetClanSteamID = function () {
              return this.m_clanSteamID;
            }),
            (t.prototype.BHasFAQDraftContent = function (e) {
              return Boolean(this.GetFAQDraftContent(e));
            }),
            (t.prototype.LoadFAQDraftContent = function (l) {
              return Object(f.b)(this, void 0, void 0, function () {
                var t, r, a, n, i, o;
                return Object(f.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return this.m_mapFAQDrafts.has(l)
                        ? [2, this.m_mapFAQDrafts.get(l)]
                        : ((t = d.b.Init(q))
                            .Body()
                            .set_steamid(I.b.CLANSTEAMID),
                          t.Body().set_faq_id(l),
                          [
                            4,
                            u.GetAllDrafts(
                              this.m_steamInterface.GetServiceTransport(),
                              t
                            ),
                          ]);
                    case 1:
                      return ((r = e.sent()), 1 != (a = r.GetEResult()))
                        ? (console.error(
                            "LoadFAQDraftContent request failed:",
                            a
                          ),
                          [2, null])
                        : ((n = r.Body().summary().toObject()),
                          (i = new Map()),
                          r
                            .Body()
                            .draft()
                            .forEach(function (e) {
                              return i.set(e.language(), e.toObject());
                            }),
                          (o = new p(n, i)),
                          this.m_mapFAQDrafts.set(l, o),
                          [2, o]);
                  }
                });
              });
            }),
            Object(f.c)([s.C], t.prototype, "m_mapFAQSummaries", void 0),
            t
          );
        })(),
        G = /^[0-9a-fA-F]+$/;
      function U(e) {
        var t = null == e ? void 0 : e.replace(/-/g, "");
        return 16 == (null == t ? void 0 : t.length) && G.test(t)
          ? o.a.fromString(t, !0, 16).toString()
          : null;
      }
      function P(e) {
        var t = b.a.useState(z.Get().GetFAQDraftContent(e)),
          r = t[0],
          a = t[1],
          n = b.a.useState(z.Get().BHasFAQDraftContent(e)),
          i = n[0],
          o = n[1];
        return (
          Object(l.useEffect)(
            function () {
              z.Get()
                .LoadFAQDraftContent(e)
                .then(function (e) {
                  return a(e);
                })
                .finally(function () {
                  return o(!0);
                });
            },
            [e]
          ),
          [r, i]
        );
      }
      var W,
        k,
        V = r("Mgs7"),
        x = r("YLyR"),
        H = r("Ee63"),
        K = r.n(H),
        Y = r("Jqb/"),
        X = r("ka0M"),
        J = r("6Y59"),
        $ = r("0OaU"),
        Z = r("exH9"),
        ee = r("TLQK"),
        te = r("bS9Q"),
        re = r("Lcls"),
        ae = r.n(re),
        ne = r("Ty5D"),
        ie = r("55Ip");
      function oe(e) {
        var t = ("0000000000000000" + o.a.fromString(e, !0, 10).toString(16))
          .slice(-16)
          .toUpperCase();
        return (
          t.slice(0, 4) +
          "-" +
          t.slice(4, 8) +
          "-" +
          t.slice(8, 12) +
          "-" +
          t.slice(12, 16)
        );
      }
      ((k = W = W || {}).k_eView = "view"),
        (k.k_eCommunityView = "communityview"),
        (k.k_eCommunityEdit = "edit"),
        (k.k_eCommunityDashboard = "dashboard"),
        (k.k_eCommunityPreview = "preview");
      function le(e) {
        var t = e.route,
          r = e.faqid,
          a = "/faqs/" + I.b.VANITY_ID + "/";
        switch (t) {
          case W.k_eView:
          case W.k_eCommunityView:
            a += "view/" + oe(r);
            break;
          case W.k_eCommunityEdit:
            a += "edit/" + oe(r);
            break;
          case W.k_eCommunityDashboard:
            a += "edit";
            break;
          case W.k_eCommunityPreview:
            a += "preview/" + oe(r);
        }
        return e.bForceRedirect
          ? l.createElement(ne.b, { push: !0, to: a })
          : l.createElement(
              ie.b,
              { to: a, className: e.className },
              e.children
            );
      }
      function se(e) {
        var t,
          r = e.rtTimestamp,
          a = e.bTimestampWarning,
          n = Object(Z.a)(ae.a.SmallData, !r && ae.a.Never, a && ae.a.Warning),
          i = Object(ee.f)("#FAQDashboard_TimeNever");
        return (
          r &&
            (i =
              (t = Date.now() / 1e3 - r) < 86400
                ? Object(ee.q)(t, !1, !0)
                : Object(ee.o)(r)),
          b.a.createElement(
            x.f,
            { className: n, rtFullDate: r, stylesmodule: K.a },
            i
          )
        );
      }
      function ce(e) {
        var t = e.bIsVisible;
        return b.a.createElement(
          "div",
          {
            className: Object(Z.a)(
              ae.a.SmallData,
              t ? ae.a.Visible : ae.a.Hidden
            ),
          },
          Object(ee.f)(t ? "#FAQDashboard_Visible" : "#FAQDashboard_Invisible")
        );
      }
      var ue = Object(n.a)(function (e) {
          var t = [z.Get().GetAllFAQSummaries(), !0],
            r = t[0],
            a = t[1],
            n = b.a.useState(1),
            i = n[0],
            o = n[1],
            l = r.sort(function (e, t) {
              return 1 == i
                ? Object(te.f)(e.internal_name, t.internal_name)
                : t.last_update_timestamp - e.last_update_timestamp;
            });
          return b.a.createElement(
            "div",
            { className: ae.a.FAQDashboardPage },
            b.a.createElement(
              "div",
              { className: ae.a.FAQDashboard },
              b.a.createElement(de, null),
              b.a.createElement(
                "div",
                { className: ae.a.DashboardListHeaderRow },
                b.a.createElement(
                  "div",
                  {
                    className: Object(Z.a)(
                      ae.a.EntryColumn,
                      ae.a.ClickableHeader,
                      1 == i && ae.a.Selected
                    ),
                    onClick: function () {
                      return o(1);
                    },
                  },
                  Object(ee.f)("#FAQDashboard_NameColumn"),
                  b.a.createElement(
                    "div",
                    { className: ae.a.DownArrow },
                    b.a.createElement(J.q, null)
                  )
                ),
                b.a.createElement(
                  "div",
                  {
                    className: Object(Z.a)(
                      ae.a.EntryColumn,
                      ae.a.ClickableHeader,
                      2 == i && ae.a.Selected
                    ),
                    onClick: function () {
                      return o(2);
                    },
                  },
                  Object(ee.f)("#FAQDashboard_DatesColumn"),
                  b.a.createElement(
                    "div",
                    { className: ae.a.DownArrow },
                    b.a.createElement(J.q, null)
                  )
                ),
                b.a.createElement(
                  "div",
                  { className: ae.a.EntryColumn },
                  Object(ee.f)("#FAQDashboard_VisibilityColumn")
                )
              ),
              0 == r.length &&
                b.a.createElement(
                  "div",
                  { className: ae.a.ErrorMsg },
                  Object(ee.f)("#FAQDashboard_Empty")
                ),
              l.map(function (e) {
                return b.a.createElement(fe, { key: e.faq_id, summary: e });
              }),
              !a &&
                b.a.createElement($.a, { position: "center", size: "xlarge" })
            )
          );
        }),
        de = function (e) {
          var t = b.a.useCallback(function () {
            return Object(X.b)(b.a.createElement(me, null), window, {
              strTitle: Object(ee.f)("#FAQDashboard_CreateFAQButton"),
            });
          }, []);
          return b.a.createElement(
            "div",
            { className: ae.a.DashboardHeader },
            b.a.createElement(
              "div",
              { className: ae.a.DashboardHeaderTitle },
              Object(ee.f)("#FAQDashboard_Header")
            ),
            b.a.createElement(
              "div",
              { className: ae.a.DashboardCreateFAQButtonCtn },
              b.a.createElement(
                V.d,
                { className: ae.a.DashboardCreateFAQButton, onClick: t },
                Object(ee.f)("#FAQDashboard_CreateFAQButton")
              )
            )
          );
        },
        me = function (e) {
          var t = b.a.useState(""),
            r = t[0],
            a = t[1];
          return b.a.createElement(
            Y.c,
            {
              onOK: function () {
                return z.Get().CreateFAQ(r);
              },
              bOKDisabled: 0 == r.length,
              closeModal: e.closeModal,
              className: ae.a.CreateFAQDialog,
            },
            b.a.createElement(
              V.k,
              null,
              Object(ee.f)("#FAQDashboard_CreateFAQButton")
            ),
            b.a.createElement(
              V.b,
              null,
              b.a.createElement(
                V.c,
                null,
                Object(ee.f)("#FAQDashboard_CreateFAQInstructions"),
                b.a.createElement("input", {
                  type: "text",
                  className: ae.a.NameInput,
                  value: r,
                  placeholder: Object(ee.f)("#FAQDashboard_NamePlaceHolder"),
                  onFocus: function (e) {
                    return e.target.select();
                  },
                  onChange: function (e) {
                    return a(e.currentTarget.value);
                  },
                  maxLength: 120,
                })
              )
            )
          );
        },
        fe = function (e) {
          var t = e.summary,
            r = t.faq_id,
            a = t.internal_name,
            n = t.last_publish_timestamp,
            i = t.last_update_timestamp,
            o = t.visible_in_china_realm,
            l = t.visible_in_global_realm;
          return b.a.createElement(
            le,
            {
              route: W.k_eCommunityEdit,
              faqid: r,
              className: ae.a.DashboardEntry,
            },
            b.a.createElement(
              "div",
              { className: ae.a.EntryColumn },
              b.a.createElement("div", { className: ae.a.EntryInternalName }, a)
            ),
            b.a.createElement(
              "div",
              { className: ae.a.EntryColumn },
              b.a.createElement(
                "div",
                { className: ae.a.EntryRow },
                b.a.createElement(
                  "div",
                  { className: ae.a.SmallLabel },
                  Object(ee.f)("#FAQDashboard_UpdateTimestampLabel")
                ),
                b.a.createElement(se, { rtTimestamp: i })
              ),
              b.a.createElement(
                "div",
                { className: ae.a.EntryRow },
                b.a.createElement(
                  "div",
                  { className: ae.a.SmallLabel },
                  Object(ee.f)("#FAQDashboard_PublishTimestampLabel")
                ),
                b.a.createElement(se, {
                  rtTimestamp: n,
                  bTimestampWarning: n < i,
                })
              )
            ),
            b.a.createElement(
              "div",
              { className: ae.a.EntryColumn },
              b.a.createElement(
                "div",
                { className: ae.a.EntryRow },
                b.a.createElement(
                  "div",
                  { className: ae.a.SmallLabel },
                  Object(ee.f)("#FAQDashboard_VisibleInGlobalRealmLabel")
                ),
                b.a.createElement(ce, { bIsVisible: l })
              ),
              b.a.createElement(
                "div",
                { className: ae.a.EntryRow },
                b.a.createElement(
                  "div",
                  { className: ae.a.SmallLabel },
                  Object(ee.f)("#FAQDashboard_VisibleInChinaRealmLabel")
                ),
                b.a.createElement(ce, { bIsVisible: o })
              )
            )
          );
        },
        be = r("4P4B"),
        _e = r("IjL/"),
        pe = r("fpVW"),
        ve = r.n(pe),
        he = r("NrWE"),
        Ee = r("BXmN"),
        ge = r.n(Ee),
        ye = r("I/R6"),
        Fe = r("vBFs"),
        Ae = r("yKSN"),
        Be = r("5E+2"),
        Ce = r("X3Ds"),
        Se = r("P2lf"),
        we = "content";
      function Oe(e) {
        var n = e.draft,
          t = e.eLanguage;
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(Le, { draft: n, eLanguage: t }),
          l.createElement(Ae.b, {
            strToolTip: Object(ee.f)("#FAQEditor_Loc_Import_ttip"),
            strLabel: Object(ee.f)("#EventEditor_Loc_Import"),
            fnOnImportLocData: function (e, t) {
              return (
                (i = n),
                (o = e),
                (r = t),
                (a = new Set()),
                (l = o.GetSortedTokenList()),
                Object(s.G)(function () {
                  r.forEach(function (n) {
                    l.forEach(function (e) {
                      var t,
                        r,
                        a = o.GetLocalization(e, n) || "";
                      "title" === e &&
                        ((t = i.GetDraftTitle(n)),
                        (a || (t && 0 < t.length)) && i.SetDraftTitle(n, a)),
                        e === we &&
                          ((r = i.GetDraftContent(n)),
                          (a || (r && 0 < r.length)) &&
                            i.SetDraftContent(n, a));
                    }),
                      a.add(n);
                  });
                }),
                Array.from(a)
              );
              var i, o, r, a, l;
            },
          })
        );
      }
      function De(t) {
        return b.a.createElement(
          Be.a,
          { toolTipContent: Object(ee.f)("#FAQEditor_DeleteAction_ttip") },
          b.a.createElement(
            "div",
            {
              className: pe.EditPreviewButton,
              onClick: function (e) {
                Object(X.d)(
                  b.a.createElement(Re, { draft: t.draft }),
                  Object(Ce.n)(e)
                );
              },
            },
            Object(ee.f)("#FAQEditor_DeleteAction")
          )
        );
      }
      function je(e) {
        var t = e.draft,
          r = new Array(),
          a = z.Get().GetFAQArticleSummary(t.GetFAQID()),
          n = Boolean(a.last_publish_timestamp);
        if (n)
          for (var i = 0; i < 30; i++) {
            var o = t.GetLastSaveMetaData(i);
            o &&
              r.push(
                b.a.createElement(We, {
                  key: t.GetFAQID() + "_" + i,
                  metadata: o,
                })
              );
          }
        return b.a.createElement(
          _e.a,
          null,
          b.a.createElement(
            "div",
            null,
            Object(ee.f)("#FAQDashboard_VisibilityColumn"),
            " "
          ),
          b.a.createElement(
            "div",
            { className: Pe.StatusRow },
            Object(ee.f)("#FAQDashboard_VisibleInGlobalRealmLabel"),
            " ",
            b.a.createElement(ce, { bIsVisible: a.visible_in_global_realm })
          ),
          b.a.createElement(
            "div",
            { className: Pe.StatusRow },
            Object(ee.f)("#FAQDashboard_VisibleInChinaRealmLabel"),
            " ",
            b.a.createElement(ce, { bIsVisible: a.visible_in_china_realm })
          ),
          b.a.createElement(
            "div",
            null,
            Object(ee.f)("#FAQStatus_LiveVersionHeader")
          ),
          n
            ? b.a.createElement(
                "div",
                null,
                b.a.createElement(
                  "table",
                  null,
                  b.a.createElement(
                    "thead",
                    null,
                    b.a.createElement(
                      "tr",
                      null,
                      b.a.createElement(
                        "th",
                        null,
                        Object(ee.f)("#LanguageTitle")
                      ),
                      b.a.createElement("th", null, "V"),
                      b.a.createElement(
                        "th",
                        null,
                        Object(ee.f)("#EventEditor_Visibility_Published")
                      ),
                      b.a.createElement(
                        "th",
                        null,
                        Object(ee.f)("#FAQStatus_Editor")
                      )
                    )
                  ),
                  b.a.createElement("tbody", null, r)
                )
              )
            : b.a.createElement(
                "div",
                null,
                Object(ee.f)("#FAQStatus_NotVisible")
              )
        );
      }
      function Qe(e) {
        var t = l.useCallback(function () {
            return new Xe.c(new Xe.b(), 0);
          }, []),
          r = l.useRef(new Ye.a(Je.c, t));
        return l.createElement(
          l.Fragment,
          null,
          r.current.ParseBBCode(e.text, {})
        );
      }
      function Me(e) {
        var t,
          r,
          a = e.faqid,
          n =
            ((t = a),
            (r = Object(Ge.d)(I.c.LANGUAGE)),
            [t && z.Get().GetFAQPublishedContent(t, r), !0]),
          i = n[0],
          o = n[1];
        return b.a.createElement(
          "div",
          { className: Ze.a.FAQViewPage },
          b.a.createElement(
            "div",
            { className: Ze.a.FAQContent },
            o && !!i && b.a.createElement(Qe, { text: i.content }),
            o &&
              !i &&
              b.a.createElement(et, {
                strError: Object(ee.f)("#FAQViewer_NoFAQFound"),
              }),
            !o && b.a.createElement($.a, { position: "center", size: "xlarge" })
          )
        );
      }
      var Le = function (e) {
          var t = e.draft,
            r = e.eLanguage;
          return l.createElement(
            Be.a,
            { toolTipContent: Object(ee.f)("#FAQEditor_Loc_Export_ttip") },
            l.createElement(
              "div",
              {
                className: pe.EditPreviewButton,
                onClick: function (e) {
                  Object(X.d)(
                    l.createElement(
                      Y.c,
                      {
                        strTitle: Object(ee.f)("#EventEditor_Loc_Export"),
                        bAlertDialog: !0,
                      },
                      l.createElement(Ae.a, {
                        fnGetLocData: function () {
                          return (function (e, t) {
                            for (var r, a, n = new Se.b(), i = 0; i < 30; ++i)
                              (!e.BHasSomeTextForLanguage(i) && 0 != t) ||
                                (n.SetLocalization(
                                  "title",
                                  i,
                                  null !== (r = e.GetDraftTitle(i)) &&
                                    void 0 !== r
                                    ? r
                                    : ""
                                ),
                                n.SetLocalization(
                                  we,
                                  i,
                                  null !== (a = e.GetDraftContent(i)) &&
                                    void 0 !== a
                                    ? a
                                    : ""
                                ));
                            return n;
                          })(t, r);
                        },
                        bShowXML: !0,
                        bShowCSV: !0,
                        strFileNamePrefix: "faq",
                        lang: r,
                      })
                    ),
                    Object(Ce.n)(e)
                  );
                },
              },
              Object(ee.f)("#EventEditor_Loc_Export")
            )
          );
        },
        qe = r("eYkW"),
        Ne = r.n(qe),
        Re = function (e) {
          function t() {
            return e.closeModal && e.closeModal();
          }
          var r = e.draft,
            a = b.a.useState(!1),
            n = a[0],
            i = a[1],
            o = b.a.useState(void 0),
            l = o[0],
            s = o[1],
            c = b.a.useState(void 0),
            u = c[0],
            d = c[1],
            m = b.a.createElement(
              "div",
              null,
              Object(ee.f)("#FAQEditor_DeleteDesc")
            );
          return (
            n
              ? (m = b.a.createElement($.a, {
                  position: "center",
                  size: "medium",
                  string: Object(ee.f)("#FAQEditor_DeletingInProgress"),
                }))
              : l
              ? (m = b.a.createElement(
                  "div",
                  null,
                  Object(ee.f)("#FAQEditor_DeleteSuccess")
                ))
              : u &&
                (m = b.a.createElement(
                  "div",
                  null,
                  Object(ee.f)(
                    "Error_Description",
                    u,
                    Object(ee.f)("#Error_GenericFailureDescription")
                  )
                )),
            b.a.createElement(
              _e.a,
              null,
              b.a.createElement(
                Y.g,
                { onEscKeypress: t },
                b.a.createElement(
                  V.f,
                  null,
                  b.a.createElement(
                    V.k,
                    null,
                    Object(ee.f)("#FAQEditor_DeleteAction")
                  ),
                  b.a.createElement(V.b, null, b.a.createElement(V.c, null, m)),
                  b.a.createElement(
                    V.j,
                    null,
                    b.a.createElement(V.n, {
                      onCancel: t,
                      bOKDisabled: Boolean(n || l || u),
                      strOKText: Object(ee.f)("#FAQEditor_DeleteAction"),
                      strCancelText: Boolean(n || l || u)
                        ? Object(ee.f)("#Button_OK")
                        : void 0,
                      onOK: function () {
                        return Object(f.b)(void 0, void 0, void 0, function () {
                          return Object(f.e)(this, function (e) {
                            return (
                              i(!0),
                              z
                                .Get()
                                .DeleteFAQ(r.GetFAQID())
                                .then(function (e) {
                                  1 == e && s(!0), d(e);
                                })
                                .catch(function (e) {
                                  var t = Object(T.a)(e);
                                  console.error(
                                    "FAQDeleteDialog: hit error: " +
                                      t.strErrorMsg,
                                    t
                                  ),
                                    d(2);
                                })
                                .finally(function () {
                                  return i(!1);
                                }),
                              [2]
                            );
                          });
                        });
                      },
                    })
                  )
                )
              )
            )
          );
        },
        Te = Object(n.a)(function (e) {
          var t,
            r = e.draft,
            a = e.bPreview,
            n = r.BHasPublished();
          return b.a.createElement(
            _e.a,
            null,
            b.a.createElement(
              "div",
              {
                className: Object(Z.a)(
                  (((t = {})[Ne.a.TopBarContainer] = !0),
                  (t[Ne.a.FAQUnPublished] = !a && !n),
                  (t[Ne.a.FAQPublished] = !a && n),
                  (t[Ne.a.FAQPreview] = a),
                  t)
                ),
              },
              b.a.createElement(
                le,
                {
                  route: a ? W.k_eCommunityEdit : W.k_eCommunityDashboard,
                  faqid: r.GetFAQID(),
                },
                Object(ee.f)(
                  a ? "#FAQEditor_EditFAQ" : "#EventDisplay_EventsDashBtn"
                )
              ),
              b.a.createElement(
                "div",
                null,
                b.a.createElement(
                  "div",
                  { className: Ne.a.EditorInternalNameLabel },
                  Object(ee.f)(
                    a
                      ? "#FAQEditor_InternalName_Preview"
                      : "#FAQEditor_InternalName"
                  )
                ),
                b.a.createElement(
                  "div",
                  { className: Ne.a.EditorInternalName },
                  r.GetFAQInternalName()
                )
              ),
              b.a.createElement(
                "div",
                { className: Ne.a.LangSelCtn },
                b.a.createElement(Fe.a, {
                  selectedLang: ye.a.Get().GetCurEditLanguage(),
                  fnOnLanguageChanged: ye.a.Get().SetCurEditLanguage,
                  fnLangHasData: r.BHasSomeTextForLanguage,
                  fnIsLangSupported: function (e) {
                    return !0;
                  },
                  fnLastUpdateRTime: r.GetLastTimeLanguageUpdated,
                })
              ),
              !a &&
                b.a.createElement(
                  le,
                  { route: W.k_eCommunityPreview, faqid: r.GetFAQID() },
                  Object(ee.f)("#Button_Preview")
                )
            )
          );
        }),
        Ie = Object(n.a)(function (e) {
          var t = e.draft,
            r = e.eLanguage;
          return b.a.createElement(
            _e.a,
            null,
            b.a.createElement(
              "div",
              { className: Object(Z.a)(ve.a.SaveBackground) },
              b.a.createElement(
                "div",
                { className: ve.a.FlexRowWrapFlexStartContainer },
                b.a.createElement(
                  "div",
                  null,
                  b.a.createElement(
                    V.q,
                    {
                      disabled: !t.BNeedsSaving(),
                      onClick: function () {
                        return t.SaveDrafts();
                      },
                    },
                    Object(ee.f)("#Button_Save")
                  )
                ),
                b.a.createElement(Oe, { draft: t, eLanguage: r }),
                b.a.createElement(De, { draft: t })
              )
            )
          );
        }),
        ze = r("Yamg"),
        Ge = r("mgoM"),
        Ue = r("Qcoi"),
        Pe = r("ggIn"),
        We = function (e) {
          var t,
            r = e.metadata,
            a = h.a.InitFromAccountID(Number.parseInt(r.author_account_id)),
            n = Object(Ue.b)(a.ConvertTo64BitString()),
            i = (n[0], n[1]);
          return b.a.createElement(
            "tr",
            null,
            b.a.createElement(
              "td",
              null,
              Object(ee.f)("#Language_" + Object(Ge.a)(r.language))
            ),
            b.a.createElement("td", null, r.version),
            b.a.createElement("td", null, Object(ee.k)(r.timestamp)),
            b.a.createElement(
              "td",
              null,
              b.a.createElement(
                "a",
                {
                  href:
                    I.c.COMMUNITY_BASE_URL +
                    "profiles/" +
                    a.ConvertTo64BitString(),
                },
                null !== (t = null == i ? void 0 : i.persona_name) &&
                  void 0 !== t
                  ? t
                  : r.author_account_id
              )
            )
          );
        },
        ke = Object(n.a)(function (e) {
          var t = P(e.faqid),
            r = t[0],
            a = t[1],
            n = b.a.useRef();
          if (!a)
            return b.a.createElement($.a, {
              position: "center",
              size: "xlarge",
              string: Object(ee.f)("#Loading"),
            });
          if (!r)
            return b.a.createElement(Ke, {
              strError: Object(ee.f)("#FAQEditor_NoFAQFound"),
            });
          var i = ye.a.Get().GetCurEditLanguage();
          return b.a.createElement(
            "div",
            null,
            b.a.createElement(Te, { draft: r }),
            b.a.createElement(
              "div",
              { className: ge.a.FAQEditPage },
              b.a.createElement(
                "div",
                { className: ge.a.FAQEditor },
                b.a.createElement(
                  "div",
                  { className: ve.a.Columns },
                  b.a.createElement(
                    "div",
                    { className: Object(Z.a)(ve.a.LeftCol) },
                    b.a.createElement(xe, { draft: r, eLanguage: i }),
                    b.a.createElement(He, {
                      bbcodeEditorRef: n,
                      draft: r,
                      eLanguage: i,
                    })
                  ),
                  b.a.createElement(Ve, {
                    draft: r,
                    bbcodeEditorRef: n,
                    className: ve.a.RightCol,
                  })
                )
              ),
              b.a.createElement(je, { draft: r })
            ),
            b.a.createElement(Ie, { draft: r, eLanguage: i })
          );
        }),
        Ve = function (e) {
          if (!Boolean(I.b.CAN_UPLOAD_IMAGES)) return null;
          var t = z.Get().GetClanSteamID(),
            r = e.draft,
            a = e.bbcodeEditorRef;
          return b.a.createElement(
            _e.a,
            null,
            b.a.createElement(
              "div",
              { className: e.className },
              b.a.createElement(
                "div",
                null,
                Object(ee.f)("#FAQEditor_ImageTitle")
              ),
              b.a.createElement(he.a, {
                bShowLightBox: !1,
                clanSteamID: t,
                imageInsertCallBack: function (e, t) {
                  return (
                    a.current &&
                    Object(ze.b)(null == a ? void 0 : a.current, e, t)
                  );
                },
                fnSetImageURL: function () {},
                rgRealmList: r.GetIncludedRealmList(),
              })
            )
          );
        },
        xe = Object(n.a)(function (e) {
          var t = e.draft,
            r = e.eLanguage;
          return b.a.createElement(
            "div",
            { className: ge.a.EditorTitleField },
            b.a.createElement(
              "div",
              { className: ge.a.EditorLabel },
              Object(ee.f)("#FAQEditor_TitleLabel")
            ),
            b.a.createElement("input", {
              type: "text",
              className: ge.a.EditorTitleFieldInput,
              value: t.GetDraftTitle(r) || "",
              placeholder: Object(ee.f)("#FAQEditor_TitlePlaceHolder"),
              onFocus: function (e) {
                return e.target.select();
              },
              onChange: function (e) {
                return t.SetDraftTitle(r, e.currentTarget.value);
              },
              maxLength: 120,
            })
          );
        }),
        He = Object(n.a)(function (e) {
          var t = e.draft,
            r = e.eLanguage,
            a = e.bbcodeEditorRef;
          return b.a.createElement(
            "div",
            { className: ge.a.EditorPane },
            b.a.createElement(
              "div",
              { className: ge.a.EditorLabel },
              Object(ee.f)("#FAQEditor_ContentLabel")
            ),
            b.a.createElement(be.a, {
              ref: a,
              fnGetCurText: function () {
                return t.GetDraftContent(r) || "";
              },
              fnOnTextChange: function (e) {
                return t.SetDraftContent(r, e.currentTarget.value);
              },
              fnSetText: function (e) {
                return t.SetDraftContent(r, e);
              },
              strPlaceholder: Object(ee.f)("#FAQEditor_ContentPlaceHolder"),
              bSupportHTMLImport: !0,
              showFormatHelp: "PartnerEvents",
              classNameForTextArea: ge.a.EditorPaneTextArea,
            })
          );
        }),
        Ke = function (e) {
          return b.a.createElement(
            "div",
            { className: ge.a.ErrorCtn },
            b.a.createElement("div", { className: ge.a.ErrorMsg }, e.strError),
            b.a.createElement(
              le,
              { route: W.k_eCommunityDashboard, className: ge.a.EscapeLink },
              Object(ee.f)("#FAQEditor_GoToDashboard")
            )
          );
        },
        Ye = r("ZeAL"),
        Xe = r("nrKv"),
        Je = r("rcjX"),
        $e = r("rTBr"),
        Ze = r.n($e),
        et = function (e) {
          var t,
            r =
              I.c.COMMUNITY_BASE_URL +
              (I.b.APPID
                ? "app/" +
                  (null !== (t = I.b.VANITY_ID) && void 0 !== t ? t : I.b.APPID)
                : "gid/" + I.b.CLANSTEAMID);
          return b.a.createElement(
            "div",
            { className: Ze.a.ErrorCtn },
            b.a.createElement("div", { className: Ze.a.ErrorMsg }, e.strError),
            b.a.createElement(
              "a",
              { className: Ze.a.EscapeLink, href: r },
              Object(ee.f)("#FAQViewer_GoToHomepage")
            )
          );
        },
        tt = Object(n.a)(function (e) {
          var t = P(e.faqid),
            r = t[0],
            a = t[1],
            n = a && !!r,
            i = ye.a.Get().GetCurEditLanguage();
          return b.a.createElement(
            b.a.Fragment,
            null,
            n && b.a.createElement(Te, { draft: r, bPreview: !0 }),
            b.a.createElement(
              "div",
              { className: Ze.a.FAQViewPage },
              b.a.createElement(
                "div",
                { className: Ze.a.FAQContent },
                n &&
                  b.a.createElement(Qe, {
                    text: r.GetDraftContentWithFallback(i, I.c.EREALM),
                  }),
                a &&
                  !r &&
                  b.a.createElement(et, {
                    strError: Object(ee.f)("#FAQViewer_NoFAQFound"),
                  }),
                !a &&
                  b.a.createElement($.a, { position: "center", size: "xlarge" })
              )
            ),
            n && b.a.createElement(Ie, { draft: r, eLanguage: i })
          );
        }),
        rt = r("9w6b"),
        at = r("WplJ"),
        nt = function () {
          return "/faqs/:vanity_str/view/:faqid*";
        },
        it = function () {
          return "/faqs/:vanity_str/edit/:faqid*";
        },
        ot = function () {
          return "/faqs/:vanity_str/dashboard/";
        },
        lt = function () {
          return "/faqs/:vanity_str/preview/:faqid*";
        },
        st = Object(n.a)(function (e) {
          var t = b.a.useState(!0),
            r = t[0],
            a = t[1];
          return (
            b.a.useEffect(function () {
              Object(f.b)(void 0, void 0, void 0, function () {
                return Object(f.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, rt.a.InitGlobal()];
                    case 1:
                      return e.sent(), a(!1), [2];
                  }
                });
              });
            }, []),
            r
              ? b.a.createElement($.a, {
                  position: "center",
                  size: "medium",
                  string: Object(ee.f)("#Loading"),
                })
              : b.a.createElement(
                  ne.e,
                  null,
                  b.a.createElement(ne.c, {
                    path: nt(),
                    render: function (t) {
                      return b.a.createElement(at.a, {
                        config: {
                          "faqs-root": function () {
                            var e = U(t.match.params.faqid);
                            return b.a.createElement(Me, { faqid: e });
                          },
                        },
                      });
                    },
                  }),
                  b.a.createElement(ne.c, {
                    path: it(),
                    render: function (r) {
                      return b.a.createElement(at.a, {
                        config: {
                          "faqs-root": function () {
                            var e = r.match.params.faqid;
                            if (e) {
                              var t = U(e);
                              return t
                                ? b.a.createElement(ke, { faqid: t })
                                : b.a.createElement(le, {
                                    route: W.k_eCommunityDashboard,
                                  });
                            }
                            return b.a.createElement(ue, null);
                          },
                        },
                      });
                    },
                  }),
                  b.a.createElement(ne.c, {
                    path: ot(),
                    render: function (e) {
                      return b.a.createElement(at.a, {
                        config: {
                          "faqs-root": function () {
                            return b.a.createElement(ue, null);
                          },
                        },
                      });
                    },
                  }),
                  b.a.createElement(ne.c, {
                    path: lt(),
                    render: function (t) {
                      return b.a.createElement(at.a, {
                        config: {
                          "faqs-root": function () {
                            var e = U(t.match.params.faqid);
                            return b.a.createElement(tt, { faqid: e });
                          },
                        },
                      });
                    },
                  }),
                  b.a.createElement(ne.c, { component: ct })
                )
          );
        });
      t.default = st;
      function ct(e) {
        return "dev" !== I.c.WEB_UNIVERSE
          ? b.a.createElement(ne.b, { to: "/" })
          : b.a.createElement(
              "div",
              null,
              "Unknown Route - Check routes/faqs.tsx to see if this page has been added to the list of routes."
            );
      }
    },
    Lcls: function (e, t, r) {
      e.exports = {
        FAQDashboardPage: "faqdashboard_FAQDashboardPage_59oO6",
        FAQDashboard: "faqdashboard_FAQDashboard_tIxuP",
        DashboardHeader: "faqdashboard_DashboardHeader_1fVLw",
        DashboardHeaderTitle: "faqdashboard_DashboardHeaderTitle_14k5N",
        DashboardCreateFAQButtonCtn:
          "faqdashboard_DashboardCreateFAQButtonCtn_2pjqN",
        DashboardCreateFAQButton: "faqdashboard_DashboardCreateFAQButton_3VW3j",
        CreateFAQDialog: "faqdashboard_CreateFAQDialog_2053e",
        NameInput: "faqdashboard_NameInput_3qsK9",
        ErrorMsg: "faqdashboard_ErrorMsg_1MkpM",
        DashboardListHeaderRow: "faqdashboard_DashboardListHeaderRow_1m9z-",
        EntryColumn: "faqdashboard_EntryColumn_29Dif",
        ClickableHeader: "faqdashboard_ClickableHeader_2dUdD",
        DownArrow: "faqdashboard_DownArrow_30b5I",
        Selected: "faqdashboard_Selected_3_SL2",
        EntryRow: "faqdashboard_EntryRow_1XVhG",
        SmallLabel: "faqdashboard_SmallLabel_2hoVL",
        SmallData: "faqdashboard_SmallData_2wFUB",
        Never: "faqdashboard_Never_36m0d",
        Warning: "faqdashboard_Warning_6rM4e",
        Visible: "faqdashboard_Visible_pbhW7",
        Hidden: "faqdashboard_Hidden_2sNUo",
        DateToolTip: "faqdashboard_DateToolTip_Q8C5p",
        DashboardEntry: "faqdashboard_DashboardEntry_kcPTy",
        EntryInternalName: "faqdashboard_EntryInternalName_1sL5y",
      };
    },
    eYkW: function (e, t, r) {
      e.exports = {
        TopBarContainer: "faqtoolbar_TopBarContainer_1EG8X",
        FAQPublished: "faqtoolbar_FAQPublished_13Wz0",
        FAQUnPublished: "faqtoolbar_FAQUnPublished_erZyI",
        FAQPreview: "faqtoolbar_FAQPreview_1U6Ks",
        EditorInternalNameLabel: "faqtoolbar_EditorInternalNameLabel_3fAcX",
        EditorInternalName: "faqtoolbar_EditorInternalName_3A9ci",
        LangSelCtn: "faqtoolbar_LangSelCtn_1JD0V",
      };
    },
    ggIn: function (e, t, r) {
      e.exports = { StatusRow: "faqstatus_StatusRow_272D2" };
    },
    rTBr: function (e, t, r) {
      e.exports = {
        FAQViewPage: "faqviewpage_FAQViewPage_36eUb",
        FAQContent: "faqviewpage_FAQContent_xtd6H",
        ErrorCtn: "faqviewpage_ErrorCtn_2Dpwh",
        ErrorMsg: "faqviewpage_ErrorMsg_2dTNx",
        EscapeLink: "faqviewpage_EscapeLink_19Bjj",
      };
    },
  },
]);
