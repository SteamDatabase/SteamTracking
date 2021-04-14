/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    "3tbG": function (e, t, r) {
      e.exports = { SmallAvatar: "faqviewadmin_SmallAvatar_1FpSi" };
    },
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
      var m,
        a,
        g = r("mrSG"),
        n = r("TyAF"),
        s = r("q1tI"),
        y = r.n(s),
        i = r("2lpH"),
        o = r.n(i),
        d = r("2vnA"),
        f = r("bxBv"),
        u = r("kyHq"),
        b = r("r64O"),
        F = r("bDQf"),
        l = r("bxiW"),
        _ = (function () {
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
              var a, s, u, c;
              return Object(g.b)(this, void 0, void 0, function () {
                var n,
                  i,
                  t,
                  o,
                  r,
                  l = this;
                return Object(g.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      for (
                        Object(b.a)(
                          Boolean(
                            null === (a = this.m_summary) || void 0 === a
                              ? void 0
                              : a.faq_id
                          ),
                          "Attempting to save when we lack a FaqID in the summary object"
                        ),
                          n = 1,
                          i = new Array(),
                          t = function (e) {
                            var r, a, t;
                            (o.m_mapLocalUpdates.get(e).strTitle ===
                              (null === (s = o.m_mapStoredDrafts.get(e)) ||
                              void 0 === s
                                ? void 0
                                : s.title) &&
                              o.m_mapLocalUpdates.get(e).strContent ===
                                (null === (u = o.m_mapStoredDrafts.get(e)) ||
                                void 0 === u
                                  ? void 0
                                  : u.content)) ||
                              ((r = o.GetDraftTitle(e)),
                              (a = o.GetDraftContent(e)),
                              (t = W.Get().UpdateDraft(
                                null === (c = o.m_summary) || void 0 === c
                                  ? void 0
                                  : c.faq_id,
                                e,
                                r,
                                a
                              ))
                                .then(function (t) {
                                  1 == t.eResult
                                    ? Object(d.G)(function () {
                                        var e = t.eLanguage;
                                        l.m_mapStoredDrafts.has(e)
                                          ? ((l.m_mapStoredDrafts.get(
                                              e
                                            ).title = r),
                                            (l.m_mapStoredDrafts.get(
                                              e
                                            ).content = a),
                                            (l.m_mapStoredDrafts.get(
                                              e
                                            ).timestamp = t.rtUpdateTime))
                                          : l.m_mapStoredDrafts.set(e, {
                                              title: r,
                                              content: a,
                                              timestamp: t.rtUpdateTime,
                                            }),
                                          (l.m_mapLocalUpdates.get(
                                            e
                                          ).strTitle = null),
                                          (l.m_mapLocalUpdates.get(
                                            e
                                          ).strContent = null),
                                          l.m_summary.last_update_timestamp <
                                            t.rtUpdateTime &&
                                            (l.m_summary.last_update_timestamp =
                                              t.rtUpdateTime);
                                      })
                                    : 1 == n &&
                                      (console.error(
                                        "FAQModel.SaveDraft: Response not ok " +
                                          t.eResult,
                                        t
                                      ),
                                      (n = t.eResult));
                                })
                                .catch(function (e) {
                                  console.error(
                                    "FAQModel.SaveDrafts: Hit error " +
                                      Object(F.a)(e).strErrorMsg
                                  ),
                                    1 == n && (n = 2);
                                }),
                              i.push(t));
                          },
                          o = this,
                          r = 0;
                        r < 30;
                        ++r
                      )
                        t(r);
                      return [4, Promise.all(i)];
                    case 1:
                      return e.sent(), [2, n];
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
              void 0 === t && (t = u.d.k_ESteamRealmGlobal);
              var s = t == u.d.k_ESteamRealmChina ? 6 : 0;
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
              void 0 === t && (t = u.d.k_ESteamRealmGlobal);
              var s = t == u.d.k_ESteamRealmChina ? 6 : 0;
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
                  e.push(u.d.k_ESteamRealmGlobal),
                this.m_summary.visible_in_global_realm &&
                  e.push(u.d.k_ESteamRealmChina),
                0 == e.length && e.push(u.d.k_ESteamRealmGlobal),
                Object(b.a)(
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
            Object(g.c)([d.C], e.prototype, "m_mapLocalUpdates", void 0),
            Object(g.c)([l.a], e.prototype, "BHasSomeTextForLanguage", null),
            Object(g.c)([l.a], e.prototype, "GetLastTimeLanguageUpdated", null),
            e
          );
        })(),
        c = r("WBba"),
        p = r("kLLr"),
        v = r("hRO2"),
        h = r("OS8t"),
        E = v.Message,
        A = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.faq_id || h.a(a.M()),
              E.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(g.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: {
                      faq_id: {
                        n: 1,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      internal_name: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      visible_in_global_realm: {
                        n: 3,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      visible_in_china_realm: {
                        n: 4,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      last_update_timestamp: {
                        n: 5,
                        br: h.d.readFixed32,
                        bw: h.h.writeFixed32,
                      },
                      last_publish_timestamp: {
                        n: 6,
                        br: h.d.readFixed32,
                        bw: h.h.writeFixed32,
                      },
                    },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = h.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return h.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return h.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new v.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return h.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new v.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              h.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQSummary";
            }),
            a
          );
        })(E),
        B = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.faq_id || h.a(a.M()),
              E.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(g.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: {
                      faq_id: {
                        n: 1,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      language: {
                        n: 2,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      version: {
                        n: 3,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      content: {
                        n: 4,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      title: { n: 5, br: h.d.readString, bw: h.h.writeString },
                      timestamp: {
                        n: 6,
                        br: h.d.readFixed32,
                        bw: h.h.writeFixed32,
                      },
                      author_account_id: {
                        n: 7,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                    },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = h.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return h.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return h.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new v.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return h.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new v.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              h.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQContent";
            }),
            a
          );
        })(E),
        S = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.steamid || h.a(a.M()),
              E.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(g.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: {
                      steamid: {
                        n: 1,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      internal_name: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = h.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return h.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return h.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new v.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return h.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new v.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              h.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_Create_Request";
            }),
            a
          );
        })(E),
        O = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.faq_id || h.a(a.M()),
              E.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(g.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: {
                      faq_id: {
                        n: 1,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                    },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = h.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return h.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return h.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new v.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return h.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new v.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              h.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_Create_Response";
            }),
            a
          );
        })(E),
        j = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.steamid || h.a(a.M()),
              E.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(g.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: {
                      steamid: {
                        n: 1,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                    },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = h.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return h.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return h.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new v.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return h.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new v.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              h.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_Delete_Request";
            }),
            a
          );
        })(E),
        Q = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return E.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(g.d)(a, r),
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
              var t = new v.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (a.prototype.serializeBinary = function () {
              var e = new v.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {}),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_Delete_Response";
            }),
            a
          );
        })(E),
        C = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.steamid || h.a(a.M()),
              E.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(g.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: {
                      steamid: {
                        n: 1,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      visible_in_global_realm: {
                        n: 3,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      visible_in_china_realm: {
                        n: 4,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                    },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = h.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return h.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return h.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new v.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return h.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new v.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              h.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_SetVisibility_Request";
            }),
            a
          );
        })(E),
        w = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return E.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(g.d)(a, r),
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
              var t = new v.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (a.prototype.serializeBinary = function () {
              var e = new v.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {}),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_SetVisibility_Response";
            }),
            a
          );
        })(E),
        D = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.steamid || h.a(a.M()),
              E.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(g.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: {
                      steamid: {
                        n: 1,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      language: {
                        n: 3,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      content: {
                        n: 4,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      title: { n: 5, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = h.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return h.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return h.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new v.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return h.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new v.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              h.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_UpdateDraft_Request";
            }),
            a
          );
        })(E),
        M = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.steamid || h.a(a.M()),
              E.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(g.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: {
                      steamid: {
                        n: 1,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      language: {
                        n: 3,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      last_update_timestamp: {
                        n: 5,
                        br: h.d.readFixed32,
                        bw: h.h.writeFixed32,
                      },
                    },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = h.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return h.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return h.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new v.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return h.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new v.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              h.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_UpdateDraft_Response";
            }),
            a
          );
        })(E),
        L = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.steamid || h.a(a.M()),
              E.initialize(t, e, 0, -1, [3], null),
              t
            );
          }
          return (
            Object(g.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: {
                      steamid: {
                        n: 1,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      language: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: h.d.readUint32,
                        bw: h.h.writeRepeatedUint32,
                      },
                    },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = h.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return h.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return h.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new v.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return h.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new v.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              h.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_PublishDraft_Request";
            }),
            a
          );
        })(E),
        R = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.steamid || h.a(a.M()),
              E.initialize(t, e, 0, -1, [3, 6], null),
              t
            );
          }
          return (
            Object(g.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: {
                      steamid: {
                        n: 1,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      language: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: h.d.readUint32,
                        bw: h.h.writeRepeatedUint32,
                      },
                      last_publish_timestamp: {
                        n: 6,
                        r: !0,
                        q: !0,
                        br: h.d.readFixed32,
                        bw: h.h.writeRepeatedFixed32,
                      },
                    },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = h.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return h.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return h.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new v.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return h.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new v.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              h.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_PublishDraft_Response";
            }),
            a
          );
        })(E),
        q = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.faq || h.a(a.M()),
              E.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(g.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = { proto: a, fields: { faq: { n: 1, c: B } } }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = h.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return h.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return h.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new v.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return h.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new v.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              h.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_PreviewDraft_Response";
            }),
            a
          );
        })(E),
        N = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.faq || h.a(a.M()),
              E.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(g.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = { proto: a, fields: { faq: { n: 1, c: B } } }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = h.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return h.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return h.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new v.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return h.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new v.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              h.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_GetFAQ_Response";
            }),
            a
          );
        })(E),
        T = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.faq || h.a(a.M()),
              E.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(g.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = { proto: a, fields: { faq: { n: 1, c: B } } }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = h.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return h.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return h.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new v.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return h.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new v.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              h.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_GetFAQVersion_Response";
            }),
            a
          );
        })(E),
        G = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.steamid || h.a(a.M()),
              E.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(g.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: {
                      steamid: {
                        n: 1,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                    },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = h.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return h.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return h.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new v.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return h.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new v.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              h.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_GetAllDrafts_Request";
            }),
            a
          );
        })(E),
        I = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.summary || h.a(a.M()),
              E.initialize(t, e, 0, -1, [2], null),
              t
            );
          }
          return (
            Object(g.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: {
                      summary: { n: 1, c: A },
                      draft: { n: 2, c: B, r: !0, q: !0 },
                    },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = h.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return h.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return h.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new v.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return h.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new v.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              h.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_GetAllDrafts_Response";
            }),
            a
          );
        })(E),
        z = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.faq || h.a(a.M()),
              E.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(g.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: { faq: { n: 1, c: A, r: !0, q: !0 } },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = h.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return h.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return h.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new v.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return h.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new v.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              h.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_GetAllFAQsForClan_Response";
            }),
            a
          );
        })(E),
        P = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.steamid || h.a(a.M()),
              E.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(g.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: {
                      steamid: {
                        n: 1,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                    },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = h.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return h.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return h.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new v.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return h.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new v.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              h.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Request";
            }),
            a
          );
        })(E),
        U = (function (r) {
          function a(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              a.prototype.faqs || h.a(a.M()),
              E.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(g.d)(a, r),
            (a.M = function () {
              return (
                a.sm_m ||
                  (a.sm_m = {
                    proto: a,
                    fields: { faqs: { n: 1, c: B, r: !0, q: !0 } },
                  }),
                a.sm_m
              );
            }),
            (a.MBF = function () {
              return a.sm_mbf || (a.sm_mbf = h.e(a.M())), a.sm_mbf;
            }),
            (a.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), a.toObject(e, this);
            }),
            (a.toObject = function (e, t) {
              return h.g(a.M(), e, t);
            }),
            (a.fromObject = function (e) {
              return h.c(a.M(), e);
            }),
            (a.deserializeBinary = function (e) {
              var t = new v.BinaryReader(e),
                r = new a();
              return a.deserializeBinaryFromReader(r, t);
            }),
            (a.deserializeBinaryFromReader = function (e, t) {
              return h.b(a.MBF(), e, t);
            }),
            (a.prototype.serializeBinary = function () {
              var e = new v.BinaryWriter();
              return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (a.serializeBinaryToWriter = function (e, t) {
              h.f(a.M(), e, t);
            }),
            (a.prototype.getClassName = function () {
              return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Response";
            }),
            a
          );
        })(E);
      ((a = m = m || {}).Create = function (e, t) {
        return e.SendMsg("ClanFAQS.Create#1", t, O, { ePrivilege: 1 });
      }),
        (a.Delete = function (e, t) {
          return e.SendMsg("ClanFAQS.Delete#1", t, Q, { ePrivilege: 1 });
        }),
        (a.SetVisibility = function (e, t) {
          return e.SendMsg("ClanFAQS.SetVisibility#1", t, w, { ePrivilege: 1 });
        }),
        (a.UpdateDraft = function (e, t) {
          return e.SendMsg("ClanFAQS.UpdateDraft#1", t, M, { ePrivilege: 1 });
        }),
        (a.PublishDraft = function (e, t) {
          return e.SendMsg("ClanFAQS.PublishDraft#1", t, R, { ePrivilege: 1 });
        }),
        (a.PreviewDraft = function (e, t) {
          return e.SendMsg("ClanFAQS.PreviewDraft#1", t, q, { ePrivilege: 1 });
        }),
        (a.GetFAQ = function (e, t) {
          return e.SendMsg("ClanFAQS.GetFAQ#1", t, N, {
            bConstMethod: !0,
            ePrivilege: 0,
            eWebAPIKeyRequirement: 1,
          });
        }),
        (a.GetFAQVersion = function (e, t) {
          return e.SendMsg("ClanFAQS.GetFAQVersion#1", t, T, { ePrivilege: 1 });
        }),
        (a.GetAllDrafts = function (e, t) {
          return e.SendMsg("ClanFAQS.GetAllDrafts#1", t, I, { ePrivilege: 1 });
        }),
        (a.GetAllFAQsForClan = function (e, t) {
          return e.SendMsg("ClanFAQS.GetAllFAQsForClan#1", t, z, {
            ePrivilege: 1,
          });
        }),
        (a.GetAllLatestVersionPublishedFAQS = function (e, t) {
          return e.SendMsg(
            "ClanFAQS.GetAllLatestVersionPublishedFAQS#1",
            t,
            U,
            { ePrivilege: 1 }
          );
        });
      var V = r("lkRc"),
        W = (function () {
          function l() {
            (this.m_mapFAQSummaries = new Map()),
              (this.m_mapFAQPublishedContent = new Map()),
              (this.m_setFAQLoadedAllLatestVersions = new Set()),
              (this.m_mapFAQDrafts = new Map()),
              (this.m_bHasFAQEdit = !1),
              (this.m_steamInterface = null),
              "dev" == V.c.WEB_UNIVERSE && (window.g_FAQStore = this),
              V.c.IN_CLIENT ||
                (this.ReadInitialPayload(), this.SetUpWebAPIInterface()),
              V.c.IN_LIBRARY || (this.m_clanSteamID = new p.a(V.b.CLANSTEAMID));
          }
          return (
            (l.Get = function () {
              return l.s_Singleton || (l.s_Singleton = new l()), l.s_Singleton;
            }),
            (l.Init = function (e) {
              l.Get().m_steamInterface = e;
            }),
            (l.prototype.SetUpWebAPIInterface = function () {
              var e = Object(V.g)("faqstore", "application_config"),
                t = null == e ? void 0 : e.webapi_token;
              this.m_steamInterface = new c.a(V.c.WEBAPI_BASE_URL, t);
            }),
            (l.prototype.ReadInitialPayload = function () {
              var e = Object(V.g)("faqstore", "application_config");
              if (
                (("dev" != V.c.WEB_UNIVERSE && "beta" != V.c.WEB_UNIVERSE) ||
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
                      this.m_mapFAQDrafts.set(t, new _(a.summary, n));
                    }
                  }
                if (e.allfaqs)
                  for (var s = 0, u = e.allfaqs; s < u.length; s++) {
                    var c = u[s];
                    c.faq_id && this.m_mapFAQSummaries.set(c.faq_id, c);
                  }
                if (e.latestpublished)
                  for (var t in e.latestpublished)
                    this.InternalLoadLatestVersionPublishedFAQ(
                      t,
                      e.latestpublished[t]
                    );
                this.m_bHasFAQEdit = Boolean(e.has_faq_edit);
              } else
                "dev" == V.c.WEB_UNIVERSE && console.error("Invalid payload");
            }),
            (l.prototype.InternalLoadLatestVersionPublishedFAQ = function (
              t,
              e
            ) {
              var r = this;
              e.forEach(function (e) {
                (null == e ? void 0 : e.faq_id) != t ||
                  void 0 === (null == e ? void 0 : e.language) ||
                  (r.m_setFAQLoadedAllLatestVersions.add(t),
                  r.m_mapFAQPublishedContent.has(t) ||
                    r.m_mapFAQPublishedContent.set(t, new Map()),
                  r.m_mapFAQPublishedContent.get(t).set(e.language, e));
              });
            }),
            (l.prototype.BIsConfigValid = function (e) {
              var t = e;
              return !!(
                (t && t.faqs && "object" == typeof t.faqs) ||
                (t.alldrafts && "object" == typeof t.alldrafts) ||
                (t.allfaqs && Array.isArray(t.allfaqs)) ||
                (t.latestpublished && Array.isArray(t.latestpublished))
              );
            }),
            (l.prototype.CreateFAQ = function (s) {
              return Object(g.b)(this, void 0, void 0, function () {
                var t, r, a, n, i, o, l;
                return Object(g.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t = f.b.Init(S)).Body().set_steamid(V.b.CLANSTEAMID),
                        t.Body().set_internal_name(s),
                        (r = 2),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          m.Create(
                            this.m_steamInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (a = e.sent()),
                        1 == (n = a.GetEResult())
                          ? ((i = {
                              faq_id: a.Body().faq_id(),
                              internal_name: s,
                            }),
                            this.m_mapFAQSummaries.set(i.faq_id, i))
                          : console.error(
                              "FAQStore.CreateFAQ: Create request failed:",
                              n
                            ),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (o = e.sent()),
                        (l = Object(F.a)(o)),
                        console.error(
                          "FAQStore.CreateFAQ: caught error " + l.strErrorMsg,
                          l
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, r];
                  }
                });
              });
            }),
            (l.prototype.UpdateDraft = function (s, u, c, d) {
              return Object(g.b)(this, void 0, void 0, function () {
                var t, r, a, n, i, o, l;
                return Object(g.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t = f.b.Init(D)).Body().set_steamid(V.b.CLANSTEAMID),
                        t.Body().set_faq_id(s),
                        t.Body().set_language(u),
                        t.Body().set_content(d),
                        t.Body().set_title(c),
                        (r = 2),
                        (a = 0),
                        (n = -1),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          m.UpdateDraft(
                            this.m_steamInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (i = e.sent()),
                        1 != (r = i.GetEResult())
                          ? console.error(
                              "FAQStore.UpdateDraft request failed:",
                              r
                            )
                          : ((a = i.Body().last_update_timestamp()),
                            (n = i.Body().language()),
                            Object(b.a)(
                              n == u,
                              "CFAQStore.UpdateDraft: eLanaguage not equals " +
                                u +
                                " != " +
                                n
                            )),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (o = e.sent()),
                        (l = Object(F.a)(o)),
                        console.error(
                          "FAQStore.UpdateDraft: caught error " + l.strErrorMsg,
                          l
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, { eResult: r, rtUpdateTime: a, eLanguage: n }];
                  }
                });
              });
            }),
            (l.prototype.DeleteFAQ = function (o) {
              return Object(g.b)(this, void 0, void 0, function () {
                var t, r, a, n, i;
                return Object(g.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t = f.b.Init(j)).Body().set_steamid(V.b.CLANSTEAMID),
                        t.Body().set_faq_id(o),
                        (r = 2),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          m.Delete(
                            this.m_steamInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (a = e.sent()),
                        1 != (r = a.GetEResult())
                          ? console.error(
                              "FAQStore.DeleteFAQ request failed:",
                              r
                            )
                          : (this.m_mapFAQDrafts.delete(o),
                            this.m_mapFAQPublishedContent.delete(o),
                            this.m_mapFAQSummaries.delete(o)),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (n = e.sent()),
                        (i = Object(F.a)(n)),
                        console.error(
                          "FAQStore.DeleteFAQ: caught error " + i.strErrorMsg,
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
            (l.prototype.GetFAQPublishedContent = function (e, t) {
              var r;
              return null === (r = this.m_mapFAQPublishedContent.get(e)) ||
                void 0 === r
                ? void 0
                : r.get(t);
            }),
            (l.prototype.GetFAQDraftContent = function (e) {
              return this.m_mapFAQDrafts.get(e);
            }),
            (l.prototype.GetAllFAQSummaries = function () {
              return Array.from(this.m_mapFAQSummaries.values());
            }),
            (l.prototype.GetFAQArticleSummary = function (e) {
              return this.m_mapFAQSummaries.get(e) || {};
            }),
            (l.prototype.GetClanSteamID = function () {
              return this.m_clanSteamID;
            }),
            (l.prototype.BHasFAQDraftContent = function (e) {
              return Boolean(this.GetFAQDraftContent(e));
            }),
            (l.prototype.LoadFAQDraftContent = function (u) {
              return Object(g.b)(this, void 0, void 0, function () {
                var t, r, a, n, i, o, l, s;
                return Object(g.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (this.m_mapFAQDrafts.has(u))
                        return [2, this.m_mapFAQDrafts.get(u)];
                      (t = f.b.Init(G)).Body().set_steamid(V.b.CLANSTEAMID),
                        t.Body().set_faq_id(u),
                        (r = 2),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          m.GetAllDrafts(
                            this.m_steamInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (a = e.sent()),
                        1 != (r = a.GetEResult())
                          ? (console.error(
                              "FaqStore.LoadFAQDraftContent request failed:",
                              r
                            ),
                            [2, null])
                          : ((n = a.Body().summary().toObject()),
                            (i = new Map()),
                            a
                              .Body()
                              .draft()
                              .forEach(function (e) {
                                return i.set(e.language(), e.toObject());
                              }),
                            (o = new _(n, i)),
                            this.m_mapFAQDrafts.set(u, o),
                            [2, o])
                      );
                    case 3:
                      return (
                        (l = e.sent()),
                        (s = Object(F.a)(l)),
                        console.error(
                          "FaqStore.LoadFAQDraftContent: exception " +
                            s.strErrorMsg,
                          s
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, null];
                  }
                });
              });
            }),
            (l.prototype.GetAllLatestPublishedForFAQ = function (e) {
              return this.m_mapFAQPublishedContent.get(e);
            }),
            (l.prototype.UpdateVisibility = function (l, s, u) {
              return Object(g.b)(this, void 0, void 0, function () {
                var t, r, a, n, i, o;
                return Object(g.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t = f.b.Init(C)).Body().set_steamid(V.b.CLANSTEAMID),
                        t.Body().set_faq_id(l),
                        t.Body().set_visible_in_global_realm(s),
                        t.Body().set_visible_in_china_realm(u),
                        (r = 2),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          m.SetVisibility(
                            this.m_steamInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (a = e.sent()),
                        1 === (r = a.GetEResult())
                          ? (n = this.m_mapFAQSummaries.get(l)) &&
                            ((n.visible_in_global_realm = s),
                            (n.visible_in_china_realm = u),
                            this.m_mapFAQSummaries.set(l, n))
                          : console.error(
                              "FaqStore.UpdateVisibility: Failed " + r
                            ),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (i = e.sent()),
                        (o = Object(F.a)(i)),
                        console.error(
                          "FaqStore.UpdateVisibility: exception " +
                            o.strErrorMsg,
                          o
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, r];
                  }
                });
              });
            }),
            (l.prototype.PublishDraftByLanguage = function (s, u) {
              return Object(g.b)(this, void 0, void 0, function () {
                var t,
                  r,
                  a,
                  n,
                  i,
                  o,
                  l = this;
                return Object(g.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (!u || 0 == u.length) return [2, 1];
                      (t = f.b.Init(L)).Body().set_steamid(V.b.CLANSTEAMID),
                        t.Body().set_faq_id(s),
                        u.forEach(function (e) {
                          return t.Body().add_language(e);
                        }),
                        (r = 2),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 7, , 8]),
                        [
                          4,
                          m.PublishDraft(
                            this.m_steamInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 2:
                      return ((a = e.sent()), 1 !== (r = a.GetEResult()))
                        ? [3, 5]
                        : (n = this.m_mapFAQSummaries.get(s))
                        ? ((n.last_publish_timestamp = Math.floor(
                            Date.now() / 1e3
                          )),
                          Object(d.G)(function () {
                            l.m_mapFAQSummaries.set(s, n),
                              l.m_mapFAQPublishedContent.delete(s),
                              l.m_setFAQLoadedAllLatestVersions.delete(s);
                          }),
                          [4, this.ReloadLatestVersionPublishedFAQS(s)])
                        : [3, 4];
                    case 3:
                      (r = e.sent()), (e.label = 4);
                    case 4:
                      return [3, 6];
                    case 5:
                      console.error(
                        "FaqStore.PublishDraftByLanguage: Failed " + r
                      ),
                        (e.label = 6);
                    case 6:
                      return [3, 8];
                    case 7:
                      return (
                        (i = e.sent()),
                        (o = Object(F.a)(i)),
                        console.error(
                          "FaqStore.PublishDraftByLanguage: exception " +
                            o.strErrorMsg,
                          o
                        ),
                        [3, 8]
                      );
                    case 8:
                      return [2, r];
                  }
                });
              });
            }),
            (l.prototype.GetDraftWithUnpublishedChanges = function (e) {
              for (var t, r, a = new Array(), n = 0; n < 30; ++n) {
                var i = e.GetLastTimeLanguageUpdated(n),
                  o =
                    null ===
                      (r =
                        null ===
                          (t = l
                            .Get()
                            .GetAllLatestPublishedForFAQ(e.GetFAQID())) ||
                        void 0 === t
                          ? void 0
                          : t.get(n)) || void 0 === r
                      ? void 0
                      : r.timestamp;
                0 < i && (!o || o < i) && a.push(n);
              }
              return a;
            }),
            (l.prototype.ReloadLatestVersionPublishedFAQS = function (o) {
              return Object(g.b)(this, void 0, void 0, function () {
                var t, r, a, n, i;
                return Object(g.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t = f.b.Init(P)).Body().set_steamid(V.b.CLANSTEAMID),
                        t.Body().set_faq_id(o),
                        (r = 2),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          m.GetAllLatestVersionPublishedFAQS(
                            this.m_steamInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (a = e.sent()),
                        1 === (r = a.GetEResult())
                          ? this.InternalLoadLatestVersionPublishedFAQ(
                              o,
                              a
                                .Body()
                                .faqs()
                                .map(function (e) {
                                  return e.toObject();
                                })
                            )
                          : console.error(
                              "FaqStore.ReloadLatestVersionPublishedFAQS: Failed " +
                                r
                            ),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (n = e.sent()),
                        (i = Object(F.a)(n)),
                        console.error(
                          "FaqStore.ReloadLatestVersionPublishedFAQS: exception " +
                            i.strErrorMsg,
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
            (l.prototype.BHasLoadedAllLatestVersionPublishedFAQS = function (
              e
            ) {
              return this.m_setFAQLoadedAllLatestVersions.has(e);
            }),
            (l.prototype.GetLoadedDraftObjs = function () {
              return Array.from(this.m_mapFAQDrafts.values());
            }),
            (l.prototype.RemoveAllDirtyDrafts = function () {
              var e,
                t,
                r = this,
                a =
                  null ===
                    (t =
                      null === (e = this.GetLoadedDraftObjs()) || void 0 === e
                        ? void 0
                        : e.filter(function (e) {
                            return e.BNeedsSaving();
                          })) || void 0 === t
                    ? void 0
                    : t.map(function (e) {
                        return e.GetFAQID();
                      });
              null != a &&
                a.forEach(function (e) {
                  return r.m_mapFAQDrafts.delete(e);
                });
            }),
            (l.prototype.BHasPublishedInGlobalRealm = function (e) {
              for (
                var t, r, a = this.m_mapFAQPublishedContent.get(e), n = 0;
                n < 30;
                ++n
              )
                if (
                  29 != n &&
                  0 <
                    Number.parseInt(
                      null !==
                        (r =
                          null === (t = null == a ? void 0 : a.get(n)) ||
                          void 0 === t
                            ? void 0
                            : t.version) && void 0 !== r
                        ? r
                        : "0"
                    )
                )
                  return !0;
              return !1;
            }),
            (l.prototype.BHasPublishedInSteamChinaRealm = function (e) {
              var t,
                r,
                a,
                n,
                i = this.m_mapFAQPublishedContent.get(e);
              return (
                0 <
                  Number.parseInt(
                    null !==
                      (r =
                        null === (t = null == i ? void 0 : i.get(6)) ||
                        void 0 === t
                          ? void 0
                          : t.version) && void 0 !== r
                      ? r
                      : "0"
                  ) ||
                0 <
                  Number.parseInt(
                    null !==
                      (n =
                        null === (a = null == i ? void 0 : i.get(29)) ||
                        void 0 === a
                          ? void 0
                          : a.version) && void 0 !== n
                      ? n
                      : "0"
                  )
              );
            }),
            (l.prototype.BHasFAQEdit = function () {
              return this.m_bHasFAQEdit;
            }),
            Object(g.c)([d.C], l.prototype, "m_mapFAQSummaries", void 0),
            Object(g.c)([d.k], l.prototype, "RemoveAllDirtyDrafts", null),
            l
          );
        })(),
        k = /^[0-9a-fA-F]+$/;
      function x(e) {
        var t = null == e ? void 0 : e.replace(/-/g, "");
        return 16 == (null == t ? void 0 : t.length) && k.test(t)
          ? o.a.fromString(t, !0, 16).toString()
          : null;
      }
      function H(e) {
        var t = y.a.useState(W.Get().GetFAQDraftContent(e)),
          r = t[0],
          a = t[1],
          n = y.a.useState(W.Get().BHasFAQDraftContent(e)),
          i = n[0],
          o = n[1];
        return (
          Object(s.useEffect)(
            function () {
              W.Get()
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
      function K(e) {
        var t = y.a.useState(
            W.Get().BHasLoadedAllLatestVersionPublishedFAQS(e)
          ),
          r = t[0],
          a = t[1];
        return (
          Object(s.useEffect)(
            function () {
              W.Get().BHasLoadedAllLatestVersionPublishedFAQS(e) ||
                W.Get()
                  .ReloadLatestVersionPublishedFAQS(e)
                  .then(function () {
                    return a(!0);
                  });
            },
            [e]
          ),
          [r]
        );
      }
      var Y,
        X,
        J = r("Mgs7"),
        Z = r("YLyR"),
        $ = r("Ee63"),
        ee = r.n($),
        te = r("Jqb/"),
        re = r("ka0M"),
        ae = r("6Y59"),
        ne = r("0OaU"),
        ie = r("exH9"),
        oe = r("TLQK"),
        le = r("bS9Q"),
        se = r("Lcls"),
        ue = r.n(se),
        ce = r("Ty5D"),
        de = r("55Ip");
      function me(e) {
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
      ((X = Y = Y || {}).k_eView = "view"),
        (X.k_eCommunityView = "communityview"),
        (X.k_eCommunityEdit = "edit"),
        (X.k_eCommunityDashboard = "dashboard"),
        (X.k_eCommunityPreview = "preview");
      function fe(e) {
        var t = (function (e, t) {
          var r = "/faqs/" + V.b.VANITY_ID + "/";
          switch (e) {
            case Y.k_eView:
            case Y.k_eCommunityView:
              r += "view/" + me(t);
              break;
            case Y.k_eCommunityEdit:
              r += "edit/" + me(t);
              break;
            case Y.k_eCommunityDashboard:
              r += "dashboard";
              break;
            case Y.k_eCommunityPreview:
              r += "preview/" + me(t);
          }
          return r;
        })(e.route, e.faqid);
        return e.bForceRedirect
          ? s.createElement(ce.b, { push: !0, to: t })
          : e.bForceAnchor
          ? s.createElement(
              "a",
              {
                href: V.c.COMMUNITY_BASE_URL.slice(0, -1) + t,
                className: e.className,
              },
              e.children
            )
          : s.createElement(
              de.b,
              { to: t, className: e.className },
              e.children
            );
      }
      function be(e) {
        var t,
          r = e.rtTimestamp,
          a = e.bTimestampWarning,
          n = Object(ie.a)(ue.a.SmallData, !r && ue.a.Never, a && ue.a.Warning),
          i = Object(oe.f)("#FAQDashboard_TimeNever");
        return (
          r &&
            (i =
              (t = Date.now() / 1e3 - r) < 86400
                ? Object(oe.q)(t, !1, !0)
                : Object(oe.o)(r)),
          y.a.createElement(
            Z.f,
            { className: n, rtFullDate: r, stylesmodule: ee.a },
            i
          )
        );
      }
      function _e(e) {
        var t = e.bIsVisible;
        return y.a.createElement(
          "div",
          {
            className: Object(ie.a)(
              ue.a.SmallData,
              t ? ue.a.Visible : ue.a.Hidden
            ),
          },
          Object(oe.f)(t ? "#FAQDashboard_Visible" : "#FAQDashboard_Invisible")
        );
      }
      function pe(e) {
        return s.createElement(ce.a, {
          message: function (e) {
            var t,
              r,
              a = W.Get().GetLoadedDraftObjs();
            return (
              !Boolean(
                0 <
                  (null ===
                    (t =
                      null == a
                        ? void 0
                        : a.filter(function (e) {
                            return e.BNeedsSaving();
                          })) || void 0 === t
                    ? void 0
                    : t.length)
              ) ||
              !(
                e.pathname == Ot.DashboardFAQ(V.b.VANITY_ID) ||
                (null !== (r = e.pathname) &&
                  void 0 !== r &&
                  r.startsWith(Ot.ViewFAQ(V.b.VANITY_ID, "").slice(0, -1)))
              ) ||
              Object(oe.f)("#EventEditor_UnsavedChanges")
            );
          },
        });
      }
      var ve = Object(n.a)(function (e) {
          var t = [W.Get().GetAllFAQSummaries(), !0],
            r = t[0],
            a = t[1],
            n = y.a.useState(1),
            i = n[0],
            o = n[1],
            l = r.sort(function (e, t) {
              return 1 == i
                ? Object(le.f)(e.internal_name, t.internal_name)
                : t.last_update_timestamp - e.last_update_timestamp;
            });
          return (
            Object(s.useEffect)(function () {
              W.Get().RemoveAllDirtyDrafts();
            }, []),
            y.a.createElement(
              "div",
              { className: ue.a.FAQDashboardPage },
              y.a.createElement(
                "div",
                { className: ue.a.FAQDashboard },
                y.a.createElement(he, null),
                y.a.createElement(
                  "div",
                  { className: ue.a.DashboardListHeaderRow },
                  y.a.createElement(
                    "div",
                    {
                      className: Object(ie.a)(
                        ue.a.EntryColumn,
                        ue.a.ClickableHeader,
                        1 == i && ue.a.Selected
                      ),
                      onClick: function () {
                        return o(1);
                      },
                    },
                    Object(oe.f)("#FAQDashboard_NameColumn"),
                    y.a.createElement(
                      "div",
                      { className: ue.a.DownArrow },
                      y.a.createElement(ae.q, null)
                    )
                  ),
                  y.a.createElement(
                    "div",
                    {
                      className: Object(ie.a)(
                        ue.a.EntryColumn,
                        ue.a.ClickableHeader,
                        2 == i && ue.a.Selected
                      ),
                      onClick: function () {
                        return o(2);
                      },
                    },
                    Object(oe.f)("#FAQDashboard_DatesColumn"),
                    y.a.createElement(
                      "div",
                      { className: ue.a.DownArrow },
                      y.a.createElement(ae.q, null)
                    )
                  ),
                  y.a.createElement(
                    "div",
                    { className: ue.a.EntryColumn },
                    Object(oe.f)("#FAQDashboard_VisibilityColumn")
                  )
                ),
                0 == r.length &&
                  y.a.createElement(
                    "div",
                    { className: ue.a.ErrorMsg },
                    Object(oe.f)("#FAQDashboard_Empty")
                  ),
                l.map(function (e) {
                  return y.a.createElement(ge, { key: e.faq_id, summary: e });
                }),
                !a &&
                  y.a.createElement(ne.a, {
                    position: "center",
                    size: "xlarge",
                  })
              )
            )
          );
        }),
        he = function (e) {
          var t = y.a.useCallback(function () {
            return Object(re.b)(y.a.createElement(Ee, null), window, {
              strTitle: Object(oe.f)("#FAQDashboard_CreateFAQButton"),
            });
          }, []);
          return y.a.createElement(
            "div",
            { className: ue.a.DashboardHeader },
            y.a.createElement(
              "div",
              { className: ue.a.DashboardHeaderTitle },
              Object(oe.f)("#FAQDashboard_Header")
            ),
            y.a.createElement(
              "div",
              { className: ue.a.DashboardCreateFAQButtonCtn },
              y.a.createElement(
                J.d,
                { className: ue.a.DashboardCreateFAQButton, onClick: t },
                Object(oe.f)("#FAQDashboard_CreateFAQButton")
              )
            )
          );
        },
        Ee = function (e) {
          var t = y.a.useState(""),
            r = t[0],
            a = t[1];
          return y.a.createElement(
            te.d,
            {
              onOK: function () {
                return W.Get().CreateFAQ(r);
              },
              bOKDisabled: 0 == r.length,
              closeModal: e.closeModal,
              className: ue.a.CreateFAQDialog,
            },
            y.a.createElement(
              J.l,
              null,
              Object(oe.f)("#FAQDashboard_CreateFAQButton")
            ),
            y.a.createElement(
              J.b,
              null,
              y.a.createElement(
                J.c,
                null,
                Object(oe.f)("#FAQDashboard_CreateFAQInstructions"),
                y.a.createElement("input", {
                  type: "text",
                  className: ue.a.NameInput,
                  value: r,
                  placeholder: Object(oe.f)("#FAQDashboard_NamePlaceHolder"),
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
        ge = function (e) {
          var t = e.summary,
            r = t.faq_id,
            a = t.internal_name,
            n = t.last_publish_timestamp,
            i = t.last_update_timestamp,
            o = t.visible_in_china_realm,
            l = t.visible_in_global_realm;
          return y.a.createElement(
            fe,
            {
              route: Y.k_eCommunityEdit,
              faqid: r,
              className: ue.a.DashboardEntry,
            },
            y.a.createElement(
              "div",
              { className: ue.a.EntryColumn },
              y.a.createElement("div", { className: ue.a.EntryInternalName }, a)
            ),
            y.a.createElement(
              "div",
              { className: ue.a.EntryColumn },
              y.a.createElement(
                "div",
                { className: ue.a.EntryRow },
                y.a.createElement(
                  "div",
                  { className: ue.a.SmallLabel },
                  Object(oe.f)("#FAQDashboard_UpdateTimestampLabel")
                ),
                y.a.createElement(be, { rtTimestamp: i })
              ),
              y.a.createElement(
                "div",
                { className: ue.a.EntryRow },
                y.a.createElement(
                  "div",
                  { className: ue.a.SmallLabel },
                  Object(oe.f)("#FAQDashboard_PublishTimestampLabel")
                ),
                y.a.createElement(be, {
                  rtTimestamp: n,
                  bTimestampWarning: n < i,
                })
              )
            ),
            y.a.createElement(
              "div",
              { className: ue.a.EntryColumn },
              y.a.createElement(
                "div",
                { className: ue.a.EntryRow },
                y.a.createElement(
                  "div",
                  { className: ue.a.SmallLabel },
                  Object(oe.f)("#FAQDashboard_VisibleInGlobalRealmLabel")
                ),
                y.a.createElement(_e, { bIsVisible: l })
              ),
              y.a.createElement(
                "div",
                { className: ue.a.EntryRow },
                y.a.createElement(
                  "div",
                  { className: ue.a.SmallLabel },
                  Object(oe.f)("#FAQDashboard_VisibleInChinaRealmLabel")
                ),
                y.a.createElement(_e, { bIsVisible: o })
              )
            )
          );
        },
        ye = r("Yamg"),
        Fe = r("I/R6"),
        Ae = r("4P4B"),
        Be = r("IjL/"),
        Se = r("fpVW"),
        Oe = r.n(Se),
        je = r("NrWE"),
        Qe = r("BXmN"),
        Ce = r.n(Qe),
        we = r("mgoM"),
        De = r("Qcoi"),
        Me = r("ggIn"),
        Le = Object(n.a)(function (e) {
          var t = e.draft,
            r = new Array(),
            a = new Array(),
            n = W.Get().GetFAQArticleSummary(t.GetFAQID()),
            i = Boolean(n.last_publish_timestamp);
          if (i) {
            var o = W.Get().GetAllLatestPublishedForFAQ(t.GetFAQID());
            if (o)
              for (var l = 0; l < 30; l++) {
                var s = o.get(l);
                s &&
                  a.push(
                    y.a.createElement(Re, {
                      key: t.GetFAQID() + "_" + l,
                      metadata: s,
                    })
                  );
              }
          }
          for (l = 0; l < 30; l++) {
            var u = t.GetLastSaveMetaData(l);
            u &&
              r.push(
                y.a.createElement(Re, {
                  key: "draft_" + t.GetFAQID() + "_" + l,
                  metadata: u,
                })
              );
          }
          return y.a.createElement(
            Be.a,
            null,
            y.a.createElement(
              "div",
              null,
              Object(oe.f)("#FAQDashboard_VisibilityColumn"),
              " "
            ),
            y.a.createElement(
              "div",
              { className: Me.StatusRow },
              Object(oe.f)("#FAQDashboard_VisibleInGlobalRealmLabel"),
              " ",
              y.a.createElement(_e, { bIsVisible: n.visible_in_global_realm })
            ),
            y.a.createElement(
              "div",
              { className: Me.StatusRow },
              Object(oe.f)("#FAQDashboard_VisibleInChinaRealmLabel"),
              " ",
              y.a.createElement(_e, { bIsVisible: n.visible_in_china_realm })
            ),
            y.a.createElement(
              "div",
              null,
              Object(oe.f)("#FAQStatus_LiveVersionHeader")
            ),
            i
              ? y.a.createElement(
                  "div",
                  null,
                  y.a.createElement(
                    "table",
                    null,
                    y.a.createElement(
                      "thead",
                      null,
                      y.a.createElement(
                        "tr",
                        null,
                        y.a.createElement(
                          "th",
                          null,
                          Object(oe.f)("#LanguageTitle")
                        ),
                        y.a.createElement("th", null, "V"),
                        y.a.createElement(
                          "th",
                          null,
                          Object(oe.f)("#EventEditor_Visibility_Published")
                        ),
                        y.a.createElement(
                          "th",
                          null,
                          Object(oe.f)("#FAQStatus_Editor")
                        )
                      )
                    ),
                    y.a.createElement("tbody", null, a)
                  )
                )
              : y.a.createElement(
                  "div",
                  null,
                  Object(oe.f)("#FAQStatus_NotVisible")
                ),
            y.a.createElement(
              "div",
              null,
              Object(oe.f)("#FAQStatus_DraftVersions")
            ),
            y.a.createElement(
              "div",
              null,
              y.a.createElement(
                "table",
                null,
                y.a.createElement(
                  "thead",
                  null,
                  y.a.createElement(
                    "tr",
                    null,
                    y.a.createElement(
                      "th",
                      null,
                      Object(oe.f)("#LanguageTitle")
                    ),
                    y.a.createElement(
                      "th",
                      null,
                      Object(oe.f)("#FAQStatus_LastUpdated")
                    ),
                    y.a.createElement(
                      "th",
                      null,
                      Object(oe.f)("#FAQStatus_Editor")
                    )
                  )
                ),
                y.a.createElement("tbody", null, r)
              )
            )
          );
        }),
        Re = function (e) {
          var t,
            r = e.metadata,
            a = p.a.InitFromAccountID(Number.parseInt(r.author_account_id)),
            n = Object(De.b)(a.ConvertTo64BitString()),
            i = (n[0], n[1]);
          return y.a.createElement(
            "tr",
            null,
            y.a.createElement(
              "td",
              null,
              Object(oe.f)("#Language_" + Object(we.a)(r.language))
            ),
            Boolean(0 < Number.parseInt(r.version)) &&
              y.a.createElement("td", null, r.version),
            y.a.createElement(
              "td",
              null,
              Object(oe.k)(r.timestamp),
              " @ ",
              Object(oe.m)(r.timestamp)
            ),
            y.a.createElement(
              "td",
              null,
              y.a.createElement(
                "a",
                {
                  href:
                    V.c.COMMUNITY_BASE_URL +
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
        qe = r("vBFs"),
        Ne = r("yKSN"),
        Te = r("5E+2"),
        Ge = r("X3Ds"),
        Ie = r("P2lf"),
        ze = "content";
      function Pe(e) {
        var n = e.draft,
          t = e.eLanguage;
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(Ke, { draft: n, eLanguage: t }),
          s.createElement(Ne.b, {
            strToolTip: Object(oe.f)("#FAQEditor_Loc_Import_ttip"),
            strLabel: Object(oe.f)("#EventEditor_Loc_Import"),
            fnOnImportLocData: function (e, t) {
              return (
                (i = n),
                (o = e),
                (r = t),
                (a = new Set()),
                (l = o.GetSortedTokenList()),
                Object(d.G)(function () {
                  r.forEach(function (n) {
                    l.forEach(function (e) {
                      var t,
                        r,
                        a = o.GetLocalization(e, n) || "";
                      "title" === e &&
                        ((t = i.GetDraftTitle(n)),
                        (a || (t && 0 < t.length)) && i.SetDraftTitle(n, a)),
                        e === ze &&
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
      function Ue(t) {
        return y.a.createElement(
          Te.a,
          { toolTipContent: Object(oe.f)("#FAQEditor_DeleteAction_ttip") },
          y.a.createElement(
            "div",
            {
              className: Se.EditPreviewButton,
              onClick: function (e) {
                Object(re.d)(
                  y.a.createElement(Je, { draft: t.draft }),
                  Object(Ge.l)(e)
                );
              },
            },
            Object(oe.f)("#FAQEditor_DeleteAction")
          )
        );
      }
      function Ve(t) {
        return y.a.createElement(
          Te.a,
          { toolTipContent: Object(oe.f)("#FAQEditor_ChangeVisible_ttip") },
          y.a.createElement(
            "div",
            {
              className: Se.EditPreviewButton,
              onClick: function (e) {
                Object(re.d)(
                  y.a.createElement(Ze, { draft: t.draft }),
                  Object(Ge.l)(e)
                );
              },
            },
            Object(oe.f)("#FAQEditor_ChangeVisible")
          )
        );
      }
      function We(e) {
        var t = s.useCallback(function () {
            return new _t.c(new _t.b(), 0);
          }, []),
          r = s.useRef(new bt.a(pt.c, t));
        return s.createElement(
          s.Fragment,
          null,
          r.current.ParseBBCode(e.text, {})
        );
      }
      function ke(e) {
        var t = e.faqContent;
        return W.Get().BHasFAQEdit()
          ? y.a.createElement(
              "div",
              null,
              y.a.createElement(
                "div",
                null,
                Object(oe.f)("#FAQViewer_AdminLinks")
              ),
              y.a.createElement(
                "div",
                null,
                Object(oe.n)(
                  "#FAQViewer_Admin_LastUpdate",
                  t.author_account_id
                    ? y.a.createElement(ht, {
                        authorAccountID: Number.parseInt(t.author_account_id),
                      })
                    : Object(oe.f)("#Sale_Debug_Unknown"),
                  y.a.createElement(
                    "span",
                    null,
                    Object(oe.k)(t.timestamp) + "@" + Object(oe.m)(t.timestamp)
                  )
                )
              ),
              y.a.createElement(Et, { faqContent: t }),
              y.a.createElement(
                fe,
                {
                  faqid: t.faq_id,
                  route: Y.k_eCommunityEdit,
                  bForceAnchor: !0,
                },
                Object(oe.f)("#FAQViewer_GotoEditor")
              )
            )
          : null;
      }
      function xe(e) {
        return y.a.createElement(
          "div",
          null,
          y.a.createElement(
            "div",
            null,
            y.a.createElement(
              "div",
              null,
              Object(oe.f)("#FAQViewer_SideBar_ProblemWithSteam_Title")
            ),
            y.a.createElement(
              "a",
              { href: V.c.HELP_BASE_URL },
              Object(oe.f)("#FAQViewer_SideBar_ProblemWithSteam_Desc")
            )
          ),
          y.a.createElement(
            "div",
            null,
            y.a.createElement(
              "div",
              null,
              Object(oe.f)("#FAQViewer_SideBar_CommunityHelp_Title")
            ),
            y.a.createElement(
              "div",
              null,
              Object(oe.f)("#FAQViewer_SideBar_CommunityHelp_Desc")
            ),
            y.a.createElement(
              "a",
              { href: V.c.COMMUNITY_BASE_URL + "discussions" },
              Object(oe.f)("#FAQViewer_SideBar_CommunityHelp_Link")
            )
          )
        );
      }
      function He(e) {
        var t,
          r,
          a = e.faqid,
          n =
            ((t = a),
            (r = Object(we.d)(V.c.LANGUAGE)),
            [t && W.Get().GetFAQPublishedContent(t, r), !0]),
          i = n[0];
        return n[1]
          ? i
            ? y.a.createElement(
                "div",
                { className: yt.a.FAQViewPage },
                y.a.createElement(
                  "div",
                  { className: Oe.a.Columns },
                  y.a.createElement(
                    "div",
                    { className: Object(ie.a)(Oe.a.LeftCol) },
                    y.a.createElement(
                      "div",
                      { className: yt.a.FAQTitle },
                      i.title
                    ),
                    y.a.createElement(
                      "div",
                      { className: yt.a.FAQContent },
                      y.a.createElement(We, { text: i.content })
                    )
                  ),
                  y.a.createElement(
                    "div",
                    { className: Oe.a.RightCol },
                    y.a.createElement(xe, { faqContent: i }),
                    y.a.createElement(ke, { faqContent: i })
                  )
                )
              )
            : y.a.createElement(Ft, {
                strError: Object(oe.f)("#FAQViewer_NoFAQFound"),
              })
          : y.a.createElement(ne.a, {
              position: "center",
              size: "xlarge",
              string: Object(oe.f)("#Loading"),
            });
      }
      var Ke = function (e) {
          var t = e.draft,
            r = e.eLanguage;
          return s.createElement(
            Te.a,
            { toolTipContent: Object(oe.f)("#FAQEditor_Loc_Export_ttip") },
            s.createElement(
              "div",
              {
                className: Se.EditPreviewButton,
                onClick: function (e) {
                  Object(re.d)(
                    s.createElement(
                      te.d,
                      {
                        strTitle: Object(oe.f)("#EventEditor_Loc_Export"),
                        bAlertDialog: !0,
                      },
                      s.createElement(Ne.a, {
                        fnGetLocData: function () {
                          return (function (e, t) {
                            for (var r, a, n = new Ie.b(), i = 0; i < 30; ++i)
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
                                  ze,
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
                    Object(Ge.l)(e)
                  );
                },
              },
              Object(oe.f)("#EventEditor_Loc_Export")
            )
          );
        },
        Ye = r("eYkW"),
        Xe = r.n(Ye),
        Je = function (e) {
          function t() {
            return e.closeModal && e.closeModal();
          }
          var r = e.draft,
            a = y.a.useState(!1),
            n = a[0],
            i = a[1],
            o = y.a.useState(void 0),
            l = o[0],
            s = o[1],
            u = y.a.useState(void 0),
            c = u[0],
            d = u[1],
            m = y.a.useState(!1),
            f = m[0],
            b = m[1],
            _ = y.a.createElement(
              "div",
              null,
              Object(oe.f)("#FAQEditor_DeleteDesc")
            );
          if (n)
            _ = y.a.createElement(ne.a, {
              position: "center",
              size: "medium",
              string: Object(oe.f)("#FAQEditor_DeletingInProgress"),
            });
          else if (l)
            _ = y.a.createElement(
              "div",
              null,
              Object(oe.f)("#FAQEditor_DeleteSuccess")
            );
          else if (c)
            _ = y.a.createElement(
              "div",
              null,
              Object(oe.f)(
                "Error_Description",
                c,
                Object(oe.f)("#Error_GenericFailureDescription")
              )
            );
          else if (f)
            return y.a.createElement(fe, { route: Y.k_eCommunityDashboard });
          return y.a.createElement(
            Be.a,
            null,
            y.a.createElement(
              te.h,
              { onEscKeypress: t },
              y.a.createElement(
                J.f,
                null,
                y.a.createElement(
                  J.l,
                  null,
                  Object(oe.f)("#FAQEditor_DeleteAction")
                ),
                y.a.createElement(J.b, null, y.a.createElement(J.c, null, _)),
                y.a.createElement(
                  J.k,
                  null,
                  y.a.createElement(J.o, {
                    onCancel: l
                      ? function () {
                          return b(!0);
                        }
                      : t,
                    bOKDisabled: Boolean(n || l || c),
                    strOKText: Object(oe.f)("#FAQEditor_DeleteAction"),
                    strCancelText: Boolean(n || l || c)
                      ? Object(oe.f)("#Button_OK")
                      : void 0,
                    onOK: function () {
                      return Object(g.b)(void 0, void 0, void 0, function () {
                        return Object(g.e)(this, function (e) {
                          return (
                            i(!0),
                            W.Get()
                              .DeleteFAQ(r.GetFAQID())
                              .then(function (e) {
                                1 == e && s(!0), d(e);
                              })
                              .catch(function (e) {
                                var t = Object(F.a)(e);
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
          );
        },
        Ze = function (e) {
          function t() {
            return e.closeModal && e.closeModal();
          }
          var r = e.draft,
            a = y.a.useState(!1),
            n = a[0],
            i = a[1],
            o = y.a.useState(void 0),
            l = o[0],
            s = o[1],
            u = y.a.useState(void 0),
            c = u[0],
            d = u[1],
            m = W.Get().GetFAQArticleSummary(r.GetFAQID()),
            f = y.a.useState(m.visible_in_global_realm),
            b = f[0],
            _ = f[1],
            p = y.a.useState(m.visible_in_china_realm),
            v = p[0],
            h = p[1],
            E = y.a.createElement(
              y.a.Fragment,
              null,
              y.a.createElement(
                "div",
                null,
                Object(oe.f)("#FAQEditor_ChangeVisible_Desc")
              ),
              y.a.createElement(J.e, {
                label: Object(oe.f)("#FAQEditor_VisibleInGlobal"),
                checked: b,
                onChange: function (e) {
                  return _(e);
                },
              }),
              y.a.createElement(J.e, {
                label: Object(oe.f)("#FAQEditor_VisibleInChina"),
                checked: v,
                tooltip: Object(oe.f)("#FAQEditor_VisibleInChina_ttip"),
                onChange: function (e) {
                  return h(e);
                },
              })
            );
          return (
            n
              ? (E = y.a.createElement(ne.a, {
                  position: "center",
                  size: "medium",
                  string: Object(oe.f)("#FAQEditor_ChangeVisible_InProgress"),
                }))
              : l
              ? (E = y.a.createElement(
                  "div",
                  null,
                  Object(oe.f)("#FAQEditor_ChangeVisible_Success")
                ))
              : c &&
                (E = y.a.createElement(
                  "div",
                  null,
                  Object(oe.f)(
                    "Error_Description",
                    c,
                    Object(oe.f)("#Error_GenericFailureDescription")
                  )
                )),
            y.a.createElement(
              Be.a,
              null,
              y.a.createElement(
                te.h,
                { onEscKeypress: t },
                y.a.createElement(
                  J.f,
                  null,
                  y.a.createElement(
                    J.l,
                    null,
                    Object(oe.f)("#FAQEditor_ChangeVisible")
                  ),
                  y.a.createElement(J.b, null, y.a.createElement(J.c, null, E)),
                  y.a.createElement(
                    J.k,
                    null,
                    y.a.createElement(J.o, {
                      onCancel: t,
                      bOKDisabled: Boolean(n || l || c),
                      strOKText: Object(oe.f)("#FAQEditor_ChangeVisible"),
                      strCancelText: Boolean(n || l || c)
                        ? Object(oe.f)("#Button_OK")
                        : void 0,
                      onOK: function () {
                        return Object(g.b)(void 0, void 0, void 0, function () {
                          return Object(g.e)(this, function (e) {
                            return (
                              i(!0),
                              W.Get()
                                .UpdateVisibility(r.GetFAQID(), b, v)
                                .then(function (e) {
                                  1 == e && s(!0), d(e);
                                })
                                .catch(function (e) {
                                  var t = Object(F.a)(e);
                                  console.error(
                                    "FAQChangeVisibilityDialog: hit error: " +
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
        $e = Object(n.a)(function (t) {
          var r = t.draft.BNeedsSaving();
          return y.a.createElement(
            Te.a,
            {
              toolTipContent: Object(oe.f)(
                r ? "#FAQPublish_SaveRequire_ttip" : "#FAQPublish_Publish_ttip"
              ),
            },
            y.a.createElement(
              "div",
              {
                className: Se.EditPreviewButton,
                onClick: function (e) {
                  Object(re.d)(
                    r
                      ? y.a.createElement(te.f, {
                          strDescription: Object(oe.f)(
                            "#FAQPublish_SaveRequire_ttip"
                          ),
                        })
                      : y.a.createElement(et, { draft: t.draft }),
                    Object(Ge.l)(e)
                  );
                },
              },
              Object(oe.f)("#FAQPublish_Publish")
            )
          );
        }),
        et = function (e) {
          function t() {
            return e.closeModal && e.closeModal();
          }
          function r(e, t) {
            var r,
              a = p.includes(t);
            e && !a
              ? ((r = p.filter(function (e) {
                  return !0;
                })).push(t),
                v(r))
              : !e &&
                a &&
                ((r = p.filter(function (e) {
                  return e !== t;
                })),
                v(r));
          }
          var a,
            n = e.draft,
            i = y.a.useState(!1),
            o = i[0],
            l = i[1],
            s = y.a.useState(void 0),
            u = s[0],
            c = s[1],
            d = y.a.useState(void 0),
            m = d[0],
            f = d[1],
            b = K(n.GetFAQID())[0],
            _ = y.a.useState(new Array()),
            p = _[0],
            v = _[1],
            h = W.Get().GetFAQArticleSummary(n.GetFAQID()),
            E = null,
            E = b
              ? o
                ? y.a.createElement(ne.a, {
                    position: "center",
                    size: "medium",
                    string: Object(oe.f)("#FAQPublish_Publishing"),
                  })
                : u
                ? y.a.createElement(
                    "div",
                    null,
                    Object(oe.f)("#FAQPublish_Success")
                  )
                : m
                ? y.a.createElement(
                    "div",
                    null,
                    Object(oe.f)(
                      "#Error_Description",
                      m,
                      Object(oe.f)("#Error_GenericFailureDescription")
                    )
                  )
                : h
                ? y.a.createElement(
                    "div",
                    null,
                    y.a.createElement(
                      "div",
                      null,
                      Object(oe.f)("#FAQPublish_Desc")
                    ),
                    y.a.createElement("br", null),
                    y.a.createElement("br", null),
                    y.a.createElement(
                      "div",
                      null,
                      Object(oe.f)("#FAQPublish_Desc2")
                    ),
                    y.a.createElement("br", null),
                    null !==
                      (a = W.Get()
                        .GetDraftWithUnpublishedChanges(n)
                        .map(function (e) {
                          return y.a.createElement(tt, {
                            key: "selrow" + e + n.GetFAQID(),
                            draft: n,
                            eLang: e,
                            fnOnChecked: r,
                          });
                        })) && void 0 !== a
                      ? a
                      : y.a.createElement(
                          "div",
                          null,
                          Object(oe.f)("#FAQPublish_None")
                        )
                  )
                : y.a.createElement(
                    "div",
                    null,
                    Object(oe.f)("#FAQPublish_LoadError")
                  )
              : y.a.createElement(ne.a, {
                  size: "small",
                  position: "center",
                  string: Object(oe.f)("#FAQPublish_PublishWait"),
                });
          return y.a.createElement(
            Be.a,
            null,
            y.a.createElement(
              te.h,
              { onEscKeypress: t },
              y.a.createElement(
                J.f,
                null,
                y.a.createElement(
                  J.l,
                  null,
                  Object(oe.f)("#FAQPublish_Publish")
                ),
                y.a.createElement(J.b, null, y.a.createElement(J.c, null, E)),
                y.a.createElement(
                  J.k,
                  null,
                  y.a.createElement(J.o, {
                    onCancel: t,
                    bOKDisabled: Boolean(o || u || m || 0 == p.length),
                    strOKText: Object(oe.f)("#FAQPublish_Publish"),
                    strCancelText: Boolean(o || u || m)
                      ? Object(oe.f)("#Button_OK")
                      : void 0,
                    onOK: function () {
                      return Object(g.b)(void 0, void 0, void 0, function () {
                        return Object(g.e)(this, function (e) {
                          return (
                            l(!0),
                            W.Get()
                              .PublishDraftByLanguage(n.GetFAQID(), p)
                              .then(function (e) {
                                1 == e && c(!0), f(e);
                              })
                              .catch(function (e) {
                                var t = Object(F.a)(e);
                                console.error(
                                  "FAQPublishDialog: hit error: " +
                                    t.strErrorMsg,
                                  t
                                ),
                                  f(2);
                              })
                              .finally(function () {
                                return l(!1);
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
          );
        },
        tt = function (e) {
          var t,
            r = e.draft,
            a = e.eLang,
            n = e.fnOnChecked,
            i = r.GetLastSaveMetaData(a),
            o = p.a.InitFromAccountID(Number.parseInt(i.author_account_id)),
            l = Object(De.b)(o.ConvertTo64BitString()),
            s = (l[0], l[1]),
            u = Object(oe.f)(
              "#FAQPublish_DraftInfo",
              Object(oe.f)("Language_" + Object(we.a)(a)),
              Object(oe.k)(i.timestamp) + " @ " + Object(oe.m)(i.timestamp),
              null !== (t = null == s ? void 0 : s.persona_name) && void 0 !== t
                ? t
                : i.author_account_id
            );
          return y.a.createElement(J.e, {
            label: u,
            onChange: function (e) {
              return n(e, a);
            },
          });
        },
        rt = r("hvYe"),
        at = r.n(rt),
        nt = r("aXcg"),
        it = Object(n.a)(function (t) {
          var e = t.draft.BNeedsSaving();
          return y.a.createElement(
            "div",
            {
              className: Se.EditPreviewButton,
              onClick: function (e) {
                return Object(re.d)(
                  y.a.createElement(ot, { draft: t.draft }),
                  Object(Ge.l)(e)
                );
              },
            },
            y.a.createElement(
              "span",
              null,
              !e &&
                y.a.createElement("img", {
                  className: nt.SavedImage,
                  src: at.a,
                }),
              Object(oe.f)(e ? "#Button_Save" : "#Button_Saved")
            )
          );
        }),
        ot = function (e) {
          var a = e.draft,
            t = e.closeModal,
            r = y.a.useState(!0),
            n = r[0],
            i = r[1],
            o = y.a.useState(void 0),
            l = o[0],
            s = o[1];
          return (
            y.a.useEffect(
              function () {
                Object(g.b)(void 0, void 0, void 0, function () {
                  var t, r;
                  return Object(g.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        i(!0), (e.label = 1);
                      case 1:
                        return e.trys.push([1, 3, 4, 5]), [4, a.SaveDrafts()];
                      case 2:
                        return (t = e.sent()), s(t), [3, 5];
                      case 3:
                        return (
                          (r = e.sent()),
                          s(2),
                          console.log(
                            "FAQSaveProgressDialog hit exception " +
                              Object(F.a)(r).strErrorMsg
                          ),
                          [3, 5]
                        );
                      case 4:
                        return i(!1), [7];
                      case 5:
                        return [2];
                    }
                  });
                });
              },
              [a]
            ),
            y.a.createElement(
              te.e,
              { bAllowFullSize: !0, onCancel: t, closeModal: t },
              y.a.createElement(
                J.l,
                null,
                n
                  ? y.a.createElement(
                      "div",
                      null,
                      Object(oe.f)("#FAQSave_Saving")
                    )
                  : y.a.createElement(
                      "div",
                      null,
                      Object(oe.f)(
                        Boolean(1 == l)
                          ? "#FAQSave_SaveSuccess"
                          : "#FAQSave_Error"
                      ),
                      " "
                    )
              ),
              y.a.createElement(
                J.b,
                null,
                n
                  ? y.a.createElement(ne.a, {
                      size: "medium",
                      position: "center",
                    })
                  : y.a.createElement(
                      "div",
                      null,
                      Boolean(1 == l)
                        ? y.a.createElement(
                            "div",
                            null,
                            Object(oe.f)("#FAQSave_SaveSuccess_desc")
                          )
                        : y.a.createElement(
                            "div",
                            null,
                            Object(oe.f)(
                              "#Error_Description",
                              l,
                              Object(oe.f)("#Error_GenericFailureDescription")
                            )
                          )
                    )
              ),
              y.a.createElement(
                J.k,
                null,
                !n &&
                  y.a.createElement(
                    J.r,
                    { onClick: t },
                    Object(oe.f)("#Button_OK")
                  )
              )
            )
          );
        },
        lt = Object(n.a)(function (e) {
          var t,
            r = e.draft,
            a = e.bPreview,
            n = r.BHasPublished();
          return y.a.createElement(
            Be.a,
            null,
            y.a.createElement(
              "div",
              {
                className: Object(ie.a)(
                  (((t = {})[Xe.a.TopBarContainer] = !0),
                  (t[Xe.a.FAQUnPublished] = !a && !n),
                  (t[Xe.a.FAQPublished] = !a && n),
                  (t[Xe.a.FAQPreview] = a),
                  t)
                ),
              },
              y.a.createElement(
                fe,
                {
                  route: a ? Y.k_eCommunityEdit : Y.k_eCommunityDashboard,
                  faqid: r.GetFAQID(),
                },
                Object(oe.f)(
                  a ? "#FAQEditor_EditFAQ" : "#EventDisplay_EventsDashBtn"
                )
              ),
              y.a.createElement(
                "div",
                null,
                y.a.createElement(
                  "div",
                  { className: Xe.a.EditorInternalNameLabel },
                  Object(oe.f)(
                    a
                      ? "#FAQEditor_InternalName_Preview"
                      : "#FAQEditor_InternalName"
                  )
                ),
                y.a.createElement(
                  "div",
                  { className: Xe.a.EditorInternalName },
                  r.GetFAQInternalName()
                )
              ),
              y.a.createElement(
                "div",
                { className: Xe.a.LangSelCtn },
                y.a.createElement(qe.a, {
                  selectedLang: Fe.a.Get().GetCurEditLanguage(),
                  fnOnLanguageChanged: Fe.a.Get().SetCurEditLanguage,
                  fnLangHasData: r.BHasSomeTextForLanguage,
                  fnIsLangSupported: function (e) {
                    return !0;
                  },
                  fnLastUpdateRTime: r.GetLastTimeLanguageUpdated,
                })
              ),
              !a &&
                y.a.createElement(
                  fe,
                  { route: Y.k_eCommunityPreview, faqid: r.GetFAQID() },
                  Object(oe.f)("#Button_Preview")
                )
            )
          );
        }),
        st = Object(n.a)(function (e) {
          var t = e.draft,
            r = e.eLanguage,
            a = t.GetFAQID(),
            n = K(a)[0],
            i = W.Get().GetFAQArticleSummary(a),
            o =
              n &&
              i.visible_in_global_realm &&
              W.Get().BHasPublishedInGlobalRealm(a),
            l =
              n &&
              i.visible_in_china_realm &&
              W.Get().BHasPublishedInSteamChinaRealm(a);
          return y.a.createElement(
            Be.a,
            null,
            y.a.createElement(
              "div",
              { className: Object(ie.a)(Oe.a.SaveBackground) },
              y.a.createElement(
                "div",
                {
                  className: Oe.a.FlexRowWrapFlexStartContainer,
                  style: { width: "unset", justifyContent: "center" },
                },
                y.a.createElement(it, { draft: t }),
                y.a.createElement(Pe, { draft: t, eLanguage: r }),
                y.a.createElement(Ue, { draft: t }),
                y.a.createElement(Ve, { draft: t }),
                y.a.createElement($e, { draft: t }),
                Boolean(o || l) &&
                  y.a.createElement(
                    "div",
                    { className: Oe.a.EditPreviewButton },
                    y.a.createElement(
                      fe,
                      { faqid: a, route: Y.k_eCommunityView },
                      Object(oe.f)("#FAQEditir_ViewLiveFAQ")
                    )
                  )
              )
            )
          );
        }),
        ut = Object(n.a)(function (e) {
          var t = H(e.faqid),
            r = t[0],
            a = t[1],
            n = y.a.useRef();
          if (!a)
            return y.a.createElement(ne.a, {
              position: "center",
              size: "xlarge",
              string: Object(oe.f)("#Loading"),
            });
          if (!r)
            return y.a.createElement(ft, {
              strError: Object(oe.f)("#FAQEditor_NoFAQFound"),
            });
          var i = Fe.a.Get().GetCurEditLanguage();
          return y.a.createElement(
            "div",
            null,
            y.a.createElement(lt, { draft: r }),
            y.a.createElement(
              "div",
              { className: Ce.a.FAQEditPage },
              y.a.createElement(
                "div",
                { className: Ce.a.FAQEditor },
                y.a.createElement(
                  "div",
                  { className: Oe.a.Columns },
                  y.a.createElement(
                    "div",
                    { className: Object(ie.a)(Oe.a.LeftCol) },
                    y.a.createElement(dt, { draft: r, eLanguage: i }),
                    y.a.createElement(mt, {
                      bbcodeEditorRef: n,
                      draft: r,
                      eLanguage: i,
                    })
                  ),
                  y.a.createElement(ct, {
                    draft: r,
                    bbcodeEditorRef: n,
                    className: Oe.a.RightCol,
                  })
                )
              ),
              y.a.createElement(Le, { draft: r })
            ),
            y.a.createElement(st, { draft: r, eLanguage: i })
          );
        }),
        ct = function (e) {
          if (!Boolean(V.b.CAN_UPLOAD_IMAGES)) return null;
          var t = W.Get().GetClanSteamID(),
            r = e.draft,
            a = e.bbcodeEditorRef;
          return y.a.createElement(
            Be.a,
            null,
            y.a.createElement(
              "div",
              { className: e.className },
              y.a.createElement(
                "div",
                null,
                Object(oe.f)("#FAQEditor_ImageTitle")
              ),
              y.a.createElement(je.a, {
                bShowLightBox: !1,
                clanSteamID: t,
                imageInsertCallBack: function (e, t) {
                  return (
                    a.current &&
                    Object(ye.b)(null == a ? void 0 : a.current, e, t)
                  );
                },
                fnSetImageURL: function () {},
                rgRealmList: r.GetIncludedRealmList(),
              })
            )
          );
        },
        dt = Object(n.a)(function (e) {
          var t = e.draft,
            r = e.eLanguage;
          return y.a.createElement(
            "div",
            { className: Ce.a.EditorTitleField },
            y.a.createElement(
              "div",
              { className: Ce.a.EditorLabel },
              Object(oe.f)("#FAQEditor_TitleLabel")
            ),
            y.a.createElement("input", {
              type: "text",
              className: Ce.a.EditorTitleFieldInput,
              value: t.GetDraftTitle(r) || "",
              placeholder: Object(oe.f)("#FAQEditor_TitlePlaceHolder"),
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
        mt = Object(n.a)(function (e) {
          var t = e.draft,
            r = e.eLanguage,
            a = e.bbcodeEditorRef;
          return y.a.createElement(
            "div",
            { className: Ce.a.EditorPane },
            y.a.createElement(
              "div",
              { className: Ce.a.EditorLabel },
              Object(oe.f)("#FAQEditor_ContentLabel")
            ),
            y.a.createElement(Ae.a, {
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
              strPlaceholder: Object(oe.f)("#FAQEditor_ContentPlaceHolder"),
              bSupportHTMLImport: !0,
              showFormatHelp: "PartnerEvents",
              classNameForTextArea: Ce.a.EditorPaneTextArea,
            })
          );
        }),
        ft = function (e) {
          return y.a.createElement(
            "div",
            { className: Ce.a.ErrorCtn },
            y.a.createElement("div", { className: Ce.a.ErrorMsg }, e.strError),
            y.a.createElement(
              fe,
              { route: Y.k_eCommunityDashboard, className: Ce.a.EscapeLink },
              Object(oe.f)("#FAQEditor_GoToDashboard")
            )
          );
        },
        bt = r("ZeAL"),
        _t = r("nrKv"),
        pt = r("rcjX"),
        vt = r("3tbG"),
        ht = function (e) {
          var t = p.a.InitFromAccountID(e.authorAccountID),
            r = Object(De.b)(t.ConvertTo64BitString()),
            a = r[0],
            n = r[1];
          return y.a.createElement(
            y.a.Fragment,
            null,
            Boolean(a || !n)
              ? y.a.createElement("span", null, e.authorAccountID)
              : y.a.createElement(
                  y.a.Fragment,
                  null,
                  y.a.createElement("img", {
                    className: vt.SmallAvatar,
                    src: n.avatar_url,
                    "data-miniprofile": "s" + t.ConvertTo64BitString(),
                  }),
                  y.a.createElement("span", null, n.persona_name)
                )
          );
        },
        Et = function (e) {
          var t = e.faqContent,
            r = H(t.faq_id),
            a = r[0],
            n = r[1];
          if (
            !a ||
            !n ||
            a.GetLastTimeLanguageUpdated(t.language) <= t.timestamp
          )
            return null;
          var i = a.GetLastSaveMetaData(t.language);
          return y.a.createElement(
            "div",
            null,
            Object(oe.n)(
              "#FAQViewer_DraftNewer",
              y.a.createElement(ht, {
                authorAccountID: Number.parseInt(i.author_account_id),
              }),
              y.a.createElement(
                "span",
                null,
                Object(oe.k)(i.timestamp) + "@" + Object(oe.m)(i.timestamp)
              )
            )
          );
        },
        gt = r("rTBr"),
        yt = r.n(gt),
        Ft = function (e) {
          var t,
            r =
              V.c.COMMUNITY_BASE_URL +
              (V.b.APPID
                ? "app/" +
                  (null !== (t = V.b.VANITY_ID) && void 0 !== t ? t : V.b.APPID)
                : "gid/" + V.b.CLANSTEAMID);
          return y.a.createElement(
            "div",
            { className: yt.a.ErrorCtn },
            y.a.createElement("div", { className: yt.a.ErrorMsg }, e.strError),
            y.a.createElement(
              "a",
              { className: yt.a.EscapeLink, href: r },
              Object(oe.f)("#FAQViewer_GoToHomepage")
            )
          );
        },
        At = Object(n.a)(function (e) {
          var t = H(e.faqid),
            r = t[0],
            a = t[1],
            n = Fe.a.Get().GetCurEditLanguage();
          return a
            ? r
              ? y.a.createElement(
                  y.a.Fragment,
                  null,
                  y.a.createElement(lt, { draft: r, bPreview: !0 }),
                  y.a.createElement(
                    "div",
                    { className: yt.a.FAQViewPage },
                    y.a.createElement(
                      "div",
                      { className: yt.a.FAQTitle },
                      r.GetDraftTitleWithFallback(n, V.c.EREALM)
                    ),
                    y.a.createElement(
                      "div",
                      { className: yt.a.FAQContent },
                      y.a.createElement(We, {
                        text: r.GetDraftContentWithFallback(n, V.c.EREALM),
                      })
                    )
                  ),
                  y.a.createElement(st, { draft: r, eLanguage: n })
                )
              : y.a.createElement(Ft, {
                  strError: Object(oe.f)("#FAQViewer_NoFAQFound"),
                })
            : y.a.createElement(ne.a, {
                position: "center",
                size: "xlarge",
                string: Object(oe.f)("#Loading"),
              });
        }),
        Bt = r("9w6b"),
        St = r("WplJ");
      r.d(t, "FAQRoutes", function () {
        return Ot;
      });
      var Ot = {
          ViewFAQ: function (e, t) {
            return "/faqs/" + e + "/view/" + t + "*";
          },
          EditFAQ: function (e, t) {
            return "/faqs/" + e + "/edit/" + t + "*";
          },
          DashboardFAQ: function (e) {
            return "/faqs/" + e + "/dashboard";
          },
          PreviewFAQ: function (e, t) {
            return "/faqs/" + e + "/preview/" + t + "*";
          },
        },
        jt = Object(n.a)(function (e) {
          var t = y.a.useState(!0),
            r = t[0],
            a = t[1];
          return (
            y.a.useEffect(function () {
              Object(g.b)(void 0, void 0, void 0, function () {
                return Object(g.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, Bt.a.InitGlobal()];
                    case 1:
                      return e.sent(), a(!1), [2];
                  }
                });
              });
            }, []),
            r
              ? y.a.createElement(ne.a, {
                  position: "center",
                  size: "medium",
                  string: Object(oe.f)("#Loading"),
                })
              : y.a.createElement(
                  y.a.Fragment,
                  null,
                  y.a.createElement(pe, null),
                  y.a.createElement(
                    ce.e,
                    null,
                    y.a.createElement(ce.c, {
                      path: Ot.ViewFAQ(":vanity_str", ":faqid"),
                      render: function (t) {
                        return y.a.createElement(St.a, {
                          config: {
                            "faqs-root": function () {
                              var e = x(t.match.params.faqid);
                              return y.a.createElement(He, { faqid: e });
                            },
                          },
                        });
                      },
                    }),
                    y.a.createElement(ce.c, {
                      path: Ot.EditFAQ(":vanity_str", ":faqid"),
                      render: function (r) {
                        return y.a.createElement(St.a, {
                          config: {
                            "faqs-root": function () {
                              var e = r.match.params.faqid;
                              if (e) {
                                var t = x(e);
                                return t
                                  ? y.a.createElement(ut, { faqid: t })
                                  : y.a.createElement(fe, {
                                      route: Y.k_eCommunityDashboard,
                                    });
                              }
                              return y.a.createElement(ve, null);
                            },
                          },
                        });
                      },
                    }),
                    y.a.createElement(ce.c, {
                      path: Ot.DashboardFAQ(":vanity_str"),
                      render: function (e) {
                        return y.a.createElement(St.a, {
                          config: {
                            "faqs-root": function () {
                              return y.a.createElement(ve, null);
                            },
                          },
                        });
                      },
                    }),
                    y.a.createElement(ce.c, {
                      path: Ot.PreviewFAQ(":vanity_str", ":faqid"),
                      render: function (t) {
                        return y.a.createElement(St.a, {
                          config: {
                            "faqs-root": function () {
                              var e = x(t.match.params.faqid);
                              return y.a.createElement(At, { faqid: e });
                            },
                          },
                        });
                      },
                    }),
                    y.a.createElement(ce.c, { component: Qt })
                  )
                )
          );
        });
      t.default = jt;
      function Qt(e) {
        return "dev" !== V.c.WEB_UNIVERSE
          ? y.a.createElement(ce.b, { to: "/" })
          : y.a.createElement(
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
