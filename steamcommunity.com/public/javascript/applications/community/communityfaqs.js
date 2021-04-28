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
        FAQMenuCtn: "faqeditor_FAQMenuCtn_1DISv",
        FAQEditorCtn: "faqeditor_FAQEditorCtn_sjpl-",
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
      r.r(t),
        r.d(t, "FAQRoutes", function () {
          return qt;
        });
      var a,
        n = r("mrSG"),
        i = r("TyAF"),
        o = r("q1tI"),
        l = r.n(o),
        s = r("2lpH"),
        c = r.n(s),
        u = r("2vnA"),
        d = r("bxBv"),
        m = r("kyHq"),
        f = r("r64O"),
        b = r("bDQf"),
        _ = r("XxJJ"),
        p = (function () {
          function e(e, t) {
            (this.m_summary = e),
              (this.m_mapStoredDrafts = t),
              (this.m_mapLocalUpdates = new Map());
            for (var r = 0; r < 30; r++) this.m_mapLocalUpdates.set(r, {});
          }
          return (
            (e.prototype.BNeedsSaving = function (e) {
              if (void 0 !== e) {
                var t = this.m_mapLocalUpdates.get(e);
                return !!t.strTitle || !!t.strContent;
              }
              return Array.from(this.m_mapLocalUpdates.values()).some(function (
                e
              ) {
                return !!e.strTitle || !!e.strContent;
              });
            }),
            (e.prototype.SaveDrafts = function () {
              var e, t, r, a;
              return Object(n.b)(this, void 0, void 0, function () {
                var i,
                  o,
                  l,
                  s,
                  c,
                  d = this;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      for (
                        Object(f.a)(
                          Boolean(
                            null === (e = this.m_summary) || void 0 === e
                              ? void 0
                              : e.faq_id
                          ),
                          "Attempting to save when we lack a FaqID in the summary object"
                        ),
                          i = 1,
                          o = new Array(),
                          l = function (e) {
                            if (
                              s.m_mapLocalUpdates.get(e).strTitle !==
                                (null === (t = s.m_mapStoredDrafts.get(e)) ||
                                void 0 === t
                                  ? void 0
                                  : t.title) ||
                              s.m_mapLocalUpdates.get(e).strContent !==
                                (null === (r = s.m_mapStoredDrafts.get(e)) ||
                                void 0 === r
                                  ? void 0
                                  : r.content)
                            ) {
                              var n = s.GetDraftTitle(e),
                                l = s.GetDraftContent(e),
                                c = k
                                  .Get()
                                  .UpdateDraft(
                                    null === (a = s.m_summary) || void 0 === a
                                      ? void 0
                                      : a.faq_id,
                                    e,
                                    n,
                                    l
                                  );
                              c
                                .then(function (e) {
                                  1 == e.eResult
                                    ? Object(u.G)(function () {
                                        var t = e.eLanguage;
                                        d.m_mapStoredDrafts.has(t)
                                          ? ((d.m_mapStoredDrafts.get(
                                              t
                                            ).title = n),
                                            (d.m_mapStoredDrafts.get(
                                              t
                                            ).content = l),
                                            (d.m_mapStoredDrafts.get(
                                              t
                                            ).timestamp = e.rtUpdateTime))
                                          : d.m_mapStoredDrafts.set(t, {
                                              title: n,
                                              content: l,
                                              timestamp: e.rtUpdateTime,
                                            }),
                                          (d.m_mapLocalUpdates.get(
                                            t
                                          ).strTitle = null),
                                          (d.m_mapLocalUpdates.get(
                                            t
                                          ).strContent = null),
                                          d.m_summary.last_update_timestamp <
                                            e.rtUpdateTime &&
                                            (d.m_summary.last_update_timestamp =
                                              e.rtUpdateTime);
                                      })
                                    : 1 == i &&
                                      (console.error(
                                        "FAQModel.SaveDraft: Response not ok " +
                                          e.eResult,
                                        e
                                      ),
                                      (i = e.eResult));
                                })
                                .catch(function (e) {
                                  console.error(
                                    "FAQModel.SaveDrafts: Hit error " +
                                      Object(b.a)(e).strErrorMsg
                                  ),
                                    1 == i && (i = 2);
                                }),
                                o.push(c);
                            }
                          },
                          s = this,
                          c = 0;
                        c < 30;
                        ++c
                      )
                        l(c);
                      return [4, Promise.all(o)];
                    case 1:
                      return n.sent(), [2, i];
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
              void 0 === t && (t = m.d.k_ESteamRealmGlobal);
              var s = t == m.d.k_ESteamRealmChina ? 6 : 0;
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
              void 0 === t && (t = m.d.k_ESteamRealmGlobal);
              var s = t == m.d.k_ESteamRealmChina ? 6 : 0;
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
                  e.push(m.d.k_ESteamRealmGlobal),
                this.m_summary.visible_in_global_realm &&
                  e.push(m.d.k_ESteamRealmChina),
                0 == e.length && e.push(m.d.k_ESteamRealmGlobal),
                Object(f.a)(
                  e.length > 0,
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
            Object(n.c)([u.C], e.prototype, "m_mapLocalUpdates", void 0),
            Object(n.c)([_.a], e.prototype, "BHasSomeTextForLanguage", null),
            Object(n.c)([_.a], e.prototype, "GetLastTimeLanguageUpdated", null),
            e
          );
        })(),
        v = r("WBba"),
        h = r("hRO2"),
        E = r("OS8t"),
        g = h.Message,
        y = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.faq_id || E.a(t.M()),
              g.initialize(a, r, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      faq_id: {
                        n: 1,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                      internal_name: {
                        n: 2,
                        br: E.d.readString,
                        bw: E.h.writeString,
                      },
                      visible_in_global_realm: {
                        n: 3,
                        br: E.d.readBool,
                        bw: E.h.writeBool,
                      },
                      visible_in_china_realm: {
                        n: 4,
                        br: E.d.readBool,
                        bw: E.h.writeBool,
                      },
                      last_update_timestamp: {
                        n: 5,
                        br: E.d.readFixed32,
                        bw: E.h.writeFixed32,
                      },
                      last_publish_timestamp: {
                        n: 6,
                        br: E.d.readFixed32,
                        bw: E.h.writeFixed32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = E.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return E.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return E.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return E.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              E.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQSummary";
            }),
            t
          );
        })(g),
        F = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.faq_id || E.a(t.M()),
              g.initialize(a, r, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      faq_id: {
                        n: 1,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                      language: {
                        n: 2,
                        br: E.d.readUint32,
                        bw: E.h.writeUint32,
                      },
                      version: {
                        n: 3,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                      content: {
                        n: 4,
                        br: E.d.readString,
                        bw: E.h.writeString,
                      },
                      title: { n: 5, br: E.d.readString, bw: E.h.writeString },
                      timestamp: {
                        n: 6,
                        br: E.d.readFixed32,
                        bw: E.h.writeFixed32,
                      },
                      author_account_id: {
                        n: 7,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = E.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return E.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return E.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return E.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              E.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQContent";
            }),
            t
          );
        })(g),
        A = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.steamid || E.a(t.M()),
              g.initialize(a, r, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                      internal_name: {
                        n: 2,
                        br: E.d.readString,
                        bw: E.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = E.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return E.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return E.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return E.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              E.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_Create_Request";
            }),
            t
          );
        })(g),
        S = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.faq_id || E.a(t.M()),
              g.initialize(a, r, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      faq_id: {
                        n: 1,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = E.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return E.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return E.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return E.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              E.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_Create_Response";
            }),
            t
          );
        })(g),
        B = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.steamid || E.a(t.M()),
              g.initialize(a, r, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = E.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return E.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return E.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return E.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              E.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_Delete_Request";
            }),
            t
          );
        })(g),
        O = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return g.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_Delete_Response";
            }),
            t
          );
        })(g),
        j = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.steamid || E.a(t.M()),
              g.initialize(a, r, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                      internal_name: {
                        n: 3,
                        br: E.d.readString,
                        bw: E.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = E.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return E.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return E.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return E.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              E.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_UpdateInternalName_Request";
            }),
            t
          );
        })(g),
        C = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return g.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_UpdateInternalName_Response";
            }),
            t
          );
        })(g),
        Q = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.steamid || E.a(t.M()),
              g.initialize(a, r, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                      visible_in_global_realm: {
                        n: 3,
                        br: E.d.readBool,
                        bw: E.h.writeBool,
                      },
                      visible_in_china_realm: {
                        n: 4,
                        br: E.d.readBool,
                        bw: E.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = E.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return E.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return E.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return E.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              E.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_SetVisibility_Request";
            }),
            t
          );
        })(g),
        w = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return g.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_SetVisibility_Response";
            }),
            t
          );
        })(g),
        D = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.steamid || E.a(t.M()),
              g.initialize(a, r, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                      language: {
                        n: 3,
                        br: E.d.readUint32,
                        bw: E.h.writeUint32,
                      },
                      content: {
                        n: 4,
                        br: E.d.readString,
                        bw: E.h.writeString,
                      },
                      title: { n: 5, br: E.d.readString, bw: E.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = E.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return E.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return E.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return E.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              E.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_UpdateDraft_Request";
            }),
            t
          );
        })(g),
        M = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.steamid || E.a(t.M()),
              g.initialize(a, r, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                      language: {
                        n: 3,
                        br: E.d.readUint32,
                        bw: E.h.writeUint32,
                      },
                      last_update_timestamp: {
                        n: 5,
                        br: E.d.readFixed32,
                        bw: E.h.writeFixed32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = E.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return E.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return E.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return E.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              E.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_UpdateDraft_Response";
            }),
            t
          );
        })(g),
        L = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.steamid || E.a(t.M()),
              g.initialize(a, r, 0, -1, [3], null),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                      language: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: E.d.readUint32,
                        bw: E.h.writeRepeatedUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = E.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return E.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return E.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return E.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              E.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_PublishDraft_Request";
            }),
            t
          );
        })(g),
        N = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.steamid || E.a(t.M()),
              g.initialize(a, r, 0, -1, [3, 6], null),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                      language: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: E.d.readUint32,
                        bw: E.h.writeRepeatedUint32,
                      },
                      last_publish_timestamp: {
                        n: 6,
                        r: !0,
                        q: !0,
                        br: E.d.readFixed32,
                        bw: E.h.writeRepeatedFixed32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = E.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return E.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return E.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return E.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              E.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_PublishDraft_Response";
            }),
            t
          );
        })(g),
        R = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.faq || E.a(t.M()),
              g.initialize(a, r, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = { proto: t, fields: { faq: { n: 1, c: F } } }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = E.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return E.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return E.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return E.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              E.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_PreviewDraft_Response";
            }),
            t
          );
        })(g),
        q = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.faq || E.a(t.M()),
              g.initialize(a, r, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = { proto: t, fields: { faq: { n: 1, c: F } } }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = E.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return E.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return E.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return E.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              E.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetFAQ_Response";
            }),
            t
          );
        })(g),
        T = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.faq || E.a(t.M()),
              g.initialize(a, r, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = { proto: t, fields: { faq: { n: 1, c: F } } }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = E.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return E.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return E.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return E.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              E.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetFAQVersion_Response";
            }),
            t
          );
        })(g),
        I = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.steamid || E.a(t.M()),
              g.initialize(a, r, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = E.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return E.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return E.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return E.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              E.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetAllDrafts_Request";
            }),
            t
          );
        })(g),
        z = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.summary || E.a(t.M()),
              g.initialize(a, r, 0, -1, [2], null),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      summary: { n: 1, c: y },
                      draft: { n: 2, c: F, r: !0, q: !0 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = E.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return E.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return E.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return E.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              E.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetAllDrafts_Response";
            }),
            t
          );
        })(g),
        G = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.faq || E.a(t.M()),
              g.initialize(a, r, 0, -1, [1], null),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { faq: { n: 1, c: y, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = E.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return E.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return E.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return E.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              E.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetAllFAQsForClan_Response";
            }),
            t
          );
        })(g),
        P = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.steamid || E.a(t.M()),
              g.initialize(a, r, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: E.d.readUint64String,
                        bw: E.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = E.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return E.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return E.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return E.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              E.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Request";
            }),
            t
          );
        })(g),
        U = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.faqs || E.a(t.M()),
              g.initialize(a, r, 0, -1, [1], null),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { faqs: { n: 1, c: F, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = E.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return E.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return E.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return E.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              E.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Response";
            }),
            t
          );
        })(g),
        V = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return g.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_CheckFAQPermissions_Response";
            }),
            t
          );
        })(g);
      !(function (e) {
        (e.Create = function (e, t) {
          return e.SendMsg("ClanFAQS.Create#1", t, S, { ePrivilege: 1 });
        }),
          (e.Delete = function (e, t) {
            return e.SendMsg("ClanFAQS.Delete#1", t, O, { ePrivilege: 1 });
          }),
          (e.UpdateInternalName = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateInternalName#1", t, C, {
              ePrivilege: 1,
            });
          }),
          (e.SetVisibility = function (e, t) {
            return e.SendMsg("ClanFAQS.SetVisibility#1", t, w, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateDraft#1", t, M, { ePrivilege: 1 });
          }),
          (e.PublishDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.PublishDraft#1", t, N, {
              ePrivilege: 1,
            });
          }),
          (e.PreviewDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.PreviewDraft#1", t, R, {
              ePrivilege: 1,
            });
          }),
          (e.GetFAQ = function (e, t) {
            return e.SendMsg("ClanFAQS.GetFAQ#1", t, q, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetFAQVersion = function (e, t) {
            return e.SendMsg("ClanFAQS.GetFAQVersion#1", t, T, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllDrafts = function (e, t) {
            return e.SendMsg("ClanFAQS.GetAllDrafts#1", t, z, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllFAQsForClan = function (e, t) {
            return e.SendMsg("ClanFAQS.GetAllFAQsForClan#1", t, G, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllLatestVersionPublishedFAQS = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.GetAllLatestVersionPublishedFAQS#1",
              t,
              U,
              { ePrivilege: 1 }
            );
          }),
          (e.CheckFAQPermissions = function (e, t) {
            return e.SendMsg("ClanFAQS.CheckFAQPermissions#1", t, V, {
              ePrivilege: 1,
            });
          });
      })(a || (a = {}));
      var W = r("lkRc"),
        k = (function () {
          function e() {
            (this.m_mapFAQSummaries = new Map()),
              (this.m_mapFAQPublishedContent = new Map()),
              (this.m_setFAQLoadedAllLatestVersions = new Set()),
              (this.m_mapFAQDrafts = new Map()),
              (this.m_bHasFAQEdit = !1),
              (this.m_steamInterface = null),
              "dev" == W.c.WEB_UNIVERSE && (window.g_FAQStore = this),
              W.c.IN_LIBRARY ||
                (this.ReadInitialPayload(), this.SetUpWebAPIInterface());
          }
          return (
            (e.Get = function () {
              return e.s_Singleton || (e.s_Singleton = new e()), e.s_Singleton;
            }),
            (e.Init = function (t) {
              e.Get().m_steamInterface = t;
            }),
            (e.prototype.SetUpWebAPIInterface = function () {
              var e = Object(W.g)("faqstore", "application_config"),
                t = null == e ? void 0 : e.webapi_token;
              this.m_steamInterface = new v.a(W.c.WEBAPI_BASE_URL, t);
            }),
            (e.prototype.ReadInitialPayload = function () {
              var e = Object(W.g)("faqstore", "application_config");
              if (
                (("dev" != W.c.WEB_UNIVERSE && "beta" != W.c.WEB_UNIVERSE) ||
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
                    if ((null == a ? void 0 : a.summary) && a.draft) {
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
                if (e.latestpublished)
                  for (var t in e.latestpublished)
                    this.InternalLoadLatestVersionPublishedFAQ(
                      t,
                      e.latestpublished[t]
                    );
                this.m_bHasFAQEdit = Boolean(e.has_faq_edit);
              } else
                "dev" == W.c.WEB_UNIVERSE && console.error("Invalid payload");
            }),
            (e.prototype.InternalLoadLatestVersionPublishedFAQ = function (
              e,
              t
            ) {
              var r = this;
              null == t ||
                t.forEach(function (t) {
                  (null == t ? void 0 : t.faq_id) != e ||
                    void 0 === (null == t ? void 0 : t.language) ||
                    (r.m_setFAQLoadedAllLatestVersions.add(e),
                    r.m_mapFAQPublishedContent.has(e) ||
                      r.m_mapFAQPublishedContent.set(e, new Map()),
                    r.m_mapFAQPublishedContent.get(e).set(t.language, t));
                });
            }),
            (e.prototype.BIsConfigValid = function (e) {
              var t = e;
              return !!(
                (t && t.faqs && "object" == typeof t.faqs) ||
                (t.alldrafts && "object" == typeof t.alldrafts) ||
                (t.allfaqs && Array.isArray(t.allfaqs)) ||
                (t.latestpublished && Array.isArray(t.latestpublished))
              );
            }),
            (e.prototype.CreateFAQ = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t, r, i, o, l, s;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      (t = d.b.Init(A)).Body().set_steamid(W.b.CLANSTEAMID),
                        t.Body().set_internal_name(e),
                        (r = 2),
                        (n.label = 1);
                    case 1:
                      return (
                        n.trys.push([1, 3, , 4]),
                        [
                          4,
                          a.Create(
                            this.m_steamInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (i = n.sent()),
                        1 == (r = i.GetEResult())
                          ? ((o = {
                              faq_id: i.Body().faq_id(),
                              internal_name: e,
                            }),
                            this.m_mapFAQSummaries.set(o.faq_id, o))
                          : console.error(
                              "FAQStore.CreateFAQ: Create request failed:",
                              r
                            ),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (l = n.sent()),
                        (s = Object(b.a)(l)),
                        console.error(
                          "FAQStore.CreateFAQ: caught error " + s.strErrorMsg,
                          s
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, r];
                  }
                });
              });
            }),
            (e.prototype.UpdateDraft = function (e, t, r, i) {
              return Object(n.b)(this, void 0, void 0, function () {
                var o, l, s, c, u, m, _;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      (o = d.b.Init(D)).Body().set_steamid(W.b.CLANSTEAMID),
                        o.Body().set_faq_id(e),
                        o.Body().set_language(t),
                        o.Body().set_content(i),
                        o.Body().set_title(r),
                        (l = 2),
                        (s = 0),
                        (c = -1),
                        (n.label = 1);
                    case 1:
                      return (
                        n.trys.push([1, 3, , 4]),
                        [
                          4,
                          a.UpdateDraft(
                            this.m_steamInterface.GetServiceTransport(),
                            o
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (u = n.sent()),
                        1 != (l = u.GetEResult())
                          ? console.error(
                              "FAQStore.UpdateDraft request failed:",
                              l
                            )
                          : ((s = u.Body().last_update_timestamp()),
                            (c = u.Body().language()),
                            Object(f.a)(
                              c == t,
                              "CFAQStore.UpdateDraft: eLanaguage not equals " +
                                t +
                                " != " +
                                c
                            )),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (m = n.sent()),
                        (_ = Object(b.a)(m)),
                        console.error(
                          "FAQStore.UpdateDraft: caught error " + _.strErrorMsg,
                          _
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, { eResult: l, rtUpdateTime: s, eLanguage: c }];
                  }
                });
              });
            }),
            (e.prototype.DeleteFAQ = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t, r, i, o, l;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      (t = d.b.Init(B)).Body().set_steamid(W.b.CLANSTEAMID),
                        t.Body().set_faq_id(e),
                        (r = 2),
                        (n.label = 1);
                    case 1:
                      return (
                        n.trys.push([1, 3, , 4]),
                        [
                          4,
                          a.Delete(
                            this.m_steamInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (i = n.sent()),
                        1 != (r = i.GetEResult())
                          ? console.error(
                              "FAQStore.DeleteFAQ request failed:",
                              r
                            )
                          : (this.m_mapFAQDrafts.delete(e),
                            this.m_mapFAQPublishedContent.delete(e),
                            this.m_mapFAQSummaries.delete(e)),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (o = n.sent()),
                        (l = Object(b.a)(o)),
                        console.error(
                          "FAQStore.DeleteFAQ: caught error " + l.strErrorMsg,
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
            (e.prototype.GetFAQPublishedContent = function (e, t) {
              var r;
              return null === (r = this.m_mapFAQPublishedContent.get(e)) ||
                void 0 === r
                ? void 0
                : r.get(t);
            }),
            (e.prototype.GetFAQDraftContent = function (e) {
              return this.m_mapFAQDrafts.get(e);
            }),
            (e.prototype.GetAllFAQSummaries = function () {
              return Array.from(this.m_mapFAQSummaries.values());
            }),
            (e.prototype.GetFAQArticleSummary = function (e) {
              return this.m_mapFAQSummaries.get(e) || {};
            }),
            (e.prototype.BHasFAQDraftContent = function (e) {
              return Boolean(this.GetFAQDraftContent(e));
            }),
            (e.prototype.LoadFAQDraftContent = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t, r, i, o, l, s, c, u;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (this.m_mapFAQDrafts.has(e))
                        return [2, this.m_mapFAQDrafts.get(e)];
                      (t = d.b.Init(I)).Body().set_steamid(W.b.CLANSTEAMID),
                        t.Body().set_faq_id(e),
                        (r = 2),
                        (n.label = 1);
                    case 1:
                      return (
                        n.trys.push([1, 3, , 4]),
                        [
                          4,
                          a.GetAllDrafts(
                            this.m_steamInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (i = n.sent()),
                        1 != (r = i.GetEResult())
                          ? (console.error(
                              "FaqStore.LoadFAQDraftContent request failed:",
                              r
                            ),
                            [2, null])
                          : ((o = i.Body().summary().toObject()),
                            (l = new Map()),
                            i
                              .Body()
                              .draft()
                              .forEach(function (e) {
                                return l.set(e.language(), e.toObject());
                              }),
                            (s = new p(o, l)),
                            this.m_mapFAQDrafts.set(e, s),
                            [2, s])
                      );
                    case 3:
                      return (
                        (c = n.sent()),
                        (u = Object(b.a)(c)),
                        console.error(
                          "FaqStore.LoadFAQDraftContent: exception " +
                            u.strErrorMsg,
                          u
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, null];
                  }
                });
              });
            }),
            (e.prototype.GetAllLatestPublishedForFAQ = function (e) {
              return this.m_mapFAQPublishedContent.get(e);
            }),
            (e.prototype.UpdateVisibility = function (e, t, r) {
              return Object(n.b)(this, void 0, void 0, function () {
                var i, o, l, s, c, u;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      (i = d.b.Init(Q)).Body().set_steamid(W.b.CLANSTEAMID),
                        i.Body().set_faq_id(e),
                        i.Body().set_visible_in_global_realm(t),
                        i.Body().set_visible_in_china_realm(r),
                        (o = 2),
                        (n.label = 1);
                    case 1:
                      return (
                        n.trys.push([1, 3, , 4]),
                        [
                          4,
                          a.SetVisibility(
                            this.m_steamInterface.GetServiceTransport(),
                            i
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (l = n.sent()),
                        1 === (o = l.GetEResult())
                          ? (s = this.m_mapFAQSummaries.get(e)) &&
                            ((s.visible_in_global_realm = t),
                            (s.visible_in_china_realm = r),
                            this.m_mapFAQSummaries.set(e, s))
                          : console.error(
                              "FaqStore.UpdateVisibility: Failed " + o
                            ),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (c = n.sent()),
                        (u = Object(b.a)(c)),
                        console.error(
                          "FaqStore.UpdateVisibility: exception " +
                            u.strErrorMsg,
                          u
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, o];
                  }
                });
              });
            }),
            (e.prototype.PublishDraftByLanguage = function (e, t) {
              return Object(n.b)(this, void 0, void 0, function () {
                var r,
                  i,
                  o,
                  l,
                  s,
                  c,
                  m = this;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (!t || 0 == t.length) return [2, 1];
                      (r = d.b.Init(L)).Body().set_steamid(W.b.CLANSTEAMID),
                        r.Body().set_faq_id(e),
                        t.forEach(function (e) {
                          return r.Body().add_language(e);
                        }),
                        (i = 2),
                        (n.label = 1);
                    case 1:
                      return (
                        n.trys.push([1, 7, , 8]),
                        [
                          4,
                          a.PublishDraft(
                            this.m_steamInterface.GetServiceTransport(),
                            r
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (o = n.sent()),
                        1 !== (i = o.GetEResult())
                          ? [3, 5]
                          : (l = this.m_mapFAQSummaries.get(e))
                          ? ((l.last_publish_timestamp = Math.floor(
                              Date.now() / 1e3
                            )),
                            Object(u.G)(function () {
                              m.m_mapFAQSummaries.set(e, l),
                                m.m_mapFAQPublishedContent.delete(e),
                                m.m_setFAQLoadedAllLatestVersions.delete(e);
                            }),
                            [4, this.ReloadLatestVersionPublishedFAQS(e)])
                          : [3, 4]
                      );
                    case 3:
                      (i = n.sent()), (n.label = 4);
                    case 4:
                      return [3, 6];
                    case 5:
                      console.error(
                        "FaqStore.PublishDraftByLanguage: Failed " + i
                      ),
                        (n.label = 6);
                    case 6:
                      return [3, 8];
                    case 7:
                      return (
                        (s = n.sent()),
                        (c = Object(b.a)(s)),
                        console.error(
                          "FaqStore.PublishDraftByLanguage: exception " +
                            c.strErrorMsg,
                          c
                        ),
                        [3, 8]
                      );
                    case 8:
                      return [2, i];
                  }
                });
              });
            }),
            (e.prototype.GetDraftWithUnpublishedChanges = function (t) {
              for (var r, a, n = new Array(), i = 0; i < 30; ++i) {
                var o = t.GetLastTimeLanguageUpdated(i),
                  l =
                    null ===
                      (a =
                        null ===
                          (r = e
                            .Get()
                            .GetAllLatestPublishedForFAQ(t.GetFAQID())) ||
                        void 0 === r
                          ? void 0
                          : r.get(i)) || void 0 === a
                      ? void 0
                      : a.timestamp;
                o > 0 && (!l || o > l) && n.push(i);
              }
              return n;
            }),
            (e.prototype.UpdateInternalName = function (e, t) {
              return Object(n.b)(this, void 0, void 0, function () {
                var r,
                  i,
                  o,
                  l,
                  s,
                  c = this;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      (r = d.b.Init(j)).Body().set_steamid(W.b.CLANSTEAMID),
                        r.Body().set_faq_id(e),
                        r.Body().set_internal_name(t),
                        (i = 2),
                        (n.label = 1);
                    case 1:
                      return (
                        n.trys.push([1, 3, , 4]),
                        [
                          4,
                          a.UpdateInternalName(
                            this.m_steamInterface.GetServiceTransport(),
                            r
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (o = n.sent()),
                        1 === (i = o.GetEResult())
                          ? Object(u.G)(function () {
                              var r, a, n;
                              (null === (r = c.m_mapFAQSummaries.get(e)) ||
                              void 0 === r
                                ? void 0
                                : r.internal_name) &&
                                (c.m_mapFAQSummaries.get(e).internal_name = t),
                                (null ===
                                  (n =
                                    null === (a = c.m_mapFAQDrafts.get(e)) ||
                                    void 0 === a
                                      ? void 0
                                      : a.GetSummary()) || void 0 === n
                                  ? void 0
                                  : n.internal_name) &&
                                  (c.m_mapFAQDrafts
                                    .get(e)
                                    .GetSummary().internal_name = t);
                            })
                          : console.error(
                              "FaqStore.UpdateInternalName: Failed " + i
                            ),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (l = n.sent()),
                        (s = Object(b.a)(l)),
                        console.error(
                          "FaqStore.UpdateInternalName: exception " +
                            s.strErrorMsg,
                          s
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, i];
                  }
                });
              });
            }),
            (e.prototype.ReloadLatestVersionPublishedFAQS = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t, r, i, o, l;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      (t = d.b.Init(P)).Body().set_steamid(W.b.CLANSTEAMID),
                        t.Body().set_faq_id(e),
                        (r = 2),
                        (n.label = 1);
                    case 1:
                      return (
                        n.trys.push([1, 3, , 4]),
                        [
                          4,
                          a.GetAllLatestVersionPublishedFAQS(
                            this.m_steamInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (i = n.sent()),
                        1 === (r = i.GetEResult())
                          ? this.InternalLoadLatestVersionPublishedFAQ(
                              e,
                              i
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
                        (o = n.sent()),
                        (l = Object(b.a)(o)),
                        console.error(
                          "FaqStore.ReloadLatestVersionPublishedFAQS: exception " +
                            l.strErrorMsg,
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
            (e.prototype.BHasLoadedAllLatestVersionPublishedFAQS = function (
              e
            ) {
              return this.m_setFAQLoadedAllLatestVersions.has(e);
            }),
            (e.prototype.GetLoadedDraftObjs = function () {
              return Array.from(this.m_mapFAQDrafts.values());
            }),
            (e.prototype.RemoveAllDirtyDrafts = function () {
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
              null == a ||
                a.forEach(function (e) {
                  return r.m_mapFAQDrafts.delete(e);
                });
            }),
            (e.prototype.BHasPublishedInGlobalRealm = function (e) {
              for (
                var t, r, a = this.m_mapFAQPublishedContent.get(e), n = 0;
                n < 30;
                ++n
              )
                if (
                  29 != n &&
                  Number.parseInt(
                    null !==
                      (r =
                        null === (t = null == a ? void 0 : a.get(n)) ||
                        void 0 === t
                          ? void 0
                          : t.version) && void 0 !== r
                      ? r
                      : "0"
                  ) > 0
                )
                  return !0;
              return !1;
            }),
            (e.prototype.BHasPublishedInSteamChinaRealm = function (e) {
              var t,
                r,
                a,
                n,
                i = this.m_mapFAQPublishedContent.get(e);
              return (
                Number.parseInt(
                  null !==
                    (r =
                      null === (t = null == i ? void 0 : i.get(6)) ||
                      void 0 === t
                        ? void 0
                        : t.version) && void 0 !== r
                    ? r
                    : "0"
                ) > 0 ||
                Number.parseInt(
                  null !==
                    (n =
                      null === (a = null == i ? void 0 : i.get(29)) ||
                      void 0 === a
                        ? void 0
                        : a.version) && void 0 !== n
                    ? n
                    : "0"
                ) > 0
              );
            }),
            (e.prototype.BHasFAQEdit = function () {
              return this.m_bHasFAQEdit;
            }),
            Object(n.c)([u.C], e.prototype, "m_mapFAQSummaries", void 0),
            Object(n.c)([u.k], e.prototype, "RemoveAllDirtyDrafts", null),
            e
          );
        })(),
        x = /^[0-9a-fA-F]+$/;
      function H(e) {
        var t = null == e ? void 0 : e.replace(/-/g, "");
        return 16 == (null == t ? void 0 : t.length) && x.test(t)
          ? c.a.fromString(t, !0, 16).toString()
          : null;
      }
      function K(e) {
        var t = l.a.useState(k.Get().GetFAQDraftContent(e)),
          r = t[0],
          a = t[1],
          n = l.a.useState(k.Get().BHasFAQDraftContent(e)),
          i = n[0],
          s = n[1];
        return (
          Object(o.useEffect)(
            function () {
              k.Get()
                .LoadFAQDraftContent(e)
                .then(function (e) {
                  return a(e);
                })
                .finally(function () {
                  return s(!0);
                });
            },
            [e]
          ),
          [r, i]
        );
      }
      function Y(e) {
        var t = l.a.useState(
            k.Get().BHasLoadedAllLatestVersionPublishedFAQS(e)
          ),
          r = t[0],
          a = t[1];
        return (
          Object(o.useEffect)(
            function () {
              k.Get().BHasLoadedAllLatestVersionPublishedFAQS(e) ||
                k
                  .Get()
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
      var J,
        X = r("Mgs7"),
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
        ce = r.n(se),
        ue = r("Ty5D"),
        de = r("55Ip");
      function me(e) {
        var t = ("0000000000000000" + c.a.fromString(e, !0, 10).toString(16))
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
      !(function (e) {
        (e.k_eView = "view"),
          (e.k_eCommunityView = "communityview"),
          (e.k_eCommunityEdit = "edit"),
          (e.k_eCommunityDashboard = "dashboard"),
          (e.k_eCommunityPreview = "preview");
      })(J || (J = {}));
      var fe = function (e) {
        var t = be(e.route, e.faqid);
        return e.bForceRedirect
          ? o.createElement(ue.b, { push: !0, to: t })
          : e.bForceAnchor
          ? o.createElement(
              "a",
              {
                href: W.c.COMMUNITY_BASE_URL.slice(0, -1) + t,
                className: e.className,
              },
              e.children
            )
          : o.createElement(
              de.b,
              { to: t, className: e.className },
              e.children
            );
      };
      function be(e, t) {
        var r = "/faqs/" + W.b.VANITY_ID + "/";
        switch (e) {
          case J.k_eView:
          case J.k_eCommunityView:
            r += "view/" + me(t);
            break;
          case J.k_eCommunityEdit:
            r += "edit/" + me(t);
            break;
          case J.k_eCommunityDashboard:
            r += "dashboard";
            break;
          case J.k_eCommunityPreview:
            r += "preview/" + me(t);
        }
        return r;
      }
      var _e = Object(i.a)(function (e) {
          var t = [k.Get().GetAllFAQSummaries(), !0],
            r = t[0],
            a = t[1],
            n = l.a.useState(1),
            i = n[0],
            s = n[1],
            c = r.sort(function (e, t) {
              return 1 == i
                ? Object(le.f)(e.internal_name, t.internal_name)
                : t.last_update_timestamp - e.last_update_timestamp;
            });
          return (
            Object(o.useEffect)(function () {
              k.Get().RemoveAllDirtyDrafts();
            }, []),
            l.a.createElement(
              "div",
              { className: ce.a.FAQDashboardPage },
              l.a.createElement(
                "div",
                { className: ce.a.FAQDashboard },
                l.a.createElement(pe, null),
                l.a.createElement(
                  "div",
                  { className: ce.a.DashboardListHeaderRow },
                  l.a.createElement(
                    "div",
                    {
                      className: Object(ie.a)(
                        ce.a.EntryColumn,
                        ce.a.ClickableHeader,
                        ce.a.NameCol,
                        1 == i && ce.a.Selected
                      ),
                      onClick: function () {
                        return s(1);
                      },
                    },
                    Object(oe.f)("#FAQDashboard_NameColumn"),
                    l.a.createElement(
                      "div",
                      { className: ce.a.DownArrow },
                      l.a.createElement(ae.q, null)
                    )
                  ),
                  l.a.createElement(
                    "div",
                    {
                      className: Object(ie.a)(
                        ce.a.EntryColumn,
                        ce.a.ClickableHeader,
                        ce.a.RightAligned,
                        ce.a.TimeCol,
                        2 == i && ce.a.Selected
                      ),
                      onClick: function () {
                        return s(2);
                      },
                    },
                    Object(oe.f)("#FAQDashboard_DatesColumn"),
                    l.a.createElement(
                      "div",
                      { className: ce.a.DownArrow },
                      l.a.createElement(ae.q, null)
                    )
                  ),
                  l.a.createElement(
                    "div",
                    {
                      className: Object(ie.a)(
                        ce.a.EntryColumn,
                        ce.a.RightAligned,
                        ce.a.VisCol
                      ),
                    },
                    Object(oe.f)("#FAQDashboard_VisibilityColumn")
                  )
                ),
                0 == r.length &&
                  l.a.createElement(
                    "div",
                    { className: ce.a.ErrorMsg },
                    Object(oe.f)("#FAQDashboard_Empty")
                  ),
                c.map(function (e) {
                  return l.a.createElement(ge, { key: e.faq_id, summary: e });
                }),
                !a &&
                  l.a.createElement(ne.a, {
                    position: "center",
                    size: "xlarge",
                  })
              )
            )
          );
        }),
        pe = function (e) {
          var t = l.a.useCallback(function () {
            return Object(re.b)(l.a.createElement(ve, null), window, {
              strTitle: Object(oe.f)("#FAQDashboard_CreateFAQButton"),
            });
          }, []);
          return l.a.createElement(
            "div",
            { className: ce.a.DashboardHeader },
            l.a.createElement(
              "div",
              { className: ce.a.DashboardHeaderTitle },
              Object(oe.f)("#FAQDashboard_Header")
            ),
            l.a.createElement(
              "div",
              { className: ce.a.DashboardCreateFAQButtonCtn },
              l.a.createElement(
                X.r,
                { onClick: t },
                Object(oe.f)("#FAQDashboard_CreateFAQButton")
              )
            )
          );
        },
        ve = function (e) {
          var t = l.a.useState(""),
            r = t[0],
            a = t[1];
          return l.a.createElement(
            te.d,
            {
              onOK: function () {
                return k.Get().CreateFAQ(r);
              },
              bOKDisabled: 0 == r.length,
              closeModal: e.closeModal,
              className: ce.a.CreateFAQDialog,
            },
            l.a.createElement(
              X.l,
              null,
              Object(oe.f)("#FAQDashboard_CreateFAQButton")
            ),
            l.a.createElement(
              X.b,
              null,
              l.a.createElement(
                X.c,
                null,
                Object(oe.f)("#FAQDashboard_CreateFAQInstructions"),
                l.a.createElement("input", {
                  type: "text",
                  className: ce.a.NameInput,
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
        he = function (e) {
          var t = e.rtTimestamp,
            r = e.bTimestampWarning,
            a = Object(ie.a)(
              ce.a.SmallData,
              !t && ce.a.Never,
              r && ce.a.Warning
            ),
            n = Object(oe.f)("#FAQDashboard_TimeNever");
          if (t) {
            var i = Date.now() / 1e3 - t;
            n = i < 86400 ? Object(oe.q)(i, !1, !0) : Object(oe.o)(t);
          }
          return l.a.createElement(
            Z.f,
            { className: a, rtFullDate: t, stylesmodule: ee.a },
            n
          );
        },
        Ee = function (e) {
          var t = e.bIsVisible;
          return l.a.createElement(
            "div",
            {
              className: Object(ie.a)(
                ce.a.SmallData,
                ce.a.State,
                t ? ce.a.Visible : ce.a.Hidden
              ),
            },
            Object(oe.f)(
              t ? "#FAQDashboard_Visible" : "#FAQDashboard_Invisible"
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
            s = t.visible_in_global_realm;
          return l.a.createElement(
            fe,
            {
              route: J.k_eCommunityEdit,
              faqid: r,
              className: ce.a.DashboardEntry,
            },
            l.a.createElement(
              "div",
              { className: Object(ie.a)(ce.a.EntryColumn, ce.a.NameCol) },
              l.a.createElement("div", { className: ce.a.EntryInternalName }, a)
            ),
            l.a.createElement(
              "div",
              { className: Object(ie.a)(ce.a.EntryColumn, ce.a.TimeCol) },
              l.a.createElement(
                "div",
                { className: ce.a.EntryRow },
                l.a.createElement(
                  "div",
                  { className: ce.a.SmallLabel },
                  Object(oe.f)("#FAQDashboard_UpdateTimestampLabel")
                ),
                l.a.createElement(he, { rtTimestamp: i })
              ),
              l.a.createElement(
                "div",
                { className: ce.a.EntryRow },
                l.a.createElement(
                  "div",
                  { className: ce.a.SmallLabel },
                  Object(oe.f)("#FAQDashboard_PublishTimestampLabel")
                ),
                l.a.createElement(he, {
                  rtTimestamp: n,
                  bTimestampWarning: n < i,
                })
              )
            ),
            l.a.createElement(
              "div",
              { className: Object(ie.a)(ce.a.EntryColumn, ce.a.VisCol) },
              l.a.createElement(
                "div",
                { className: ce.a.EntryRow },
                l.a.createElement(
                  "div",
                  { className: ce.a.SmallLabel },
                  Object(oe.f)("#FAQDashboard_VisibleInGlobalRealmLabel")
                ),
                l.a.createElement(Ee, { bIsVisible: s })
              ),
              l.a.createElement(
                "div",
                { className: ce.a.EntryRow },
                l.a.createElement(
                  "div",
                  { className: ce.a.SmallLabel },
                  Object(oe.f)("#FAQDashboard_VisibleInChinaRealmLabel")
                ),
                l.a.createElement(Ee, { bIsVisible: o })
              )
            )
          );
        },
        ye = function (e) {
          return o.createElement(ue.a, {
            message: function (e) {
              var t,
                r,
                a = k.Get().GetLoadedDraftObjs();
              return (
                !Boolean(
                  (null ===
                    (t =
                      null == a
                        ? void 0
                        : a.filter(function (e) {
                            return e.BNeedsSaving();
                          })) || void 0 === t
                    ? void 0
                    : t.length) > 0
                ) ||
                (e.pathname != qt.DashboardFAQ(W.b.VANITY_ID) &&
                  !(null === (r = e.pathname) || void 0 === r
                    ? void 0
                    : r.startsWith(
                        qt.ViewFAQ(W.b.VANITY_ID, "").slice(0, -1)
                      ))) ||
                Object(oe.f)("#EventEditor_UnsavedChanges")
              );
            },
          });
        },
        Fe = r("Yamg"),
        Ae = r("kLLr"),
        Se = r("I/R6"),
        Be = r("4P4B"),
        Oe = r("IjL/"),
        je = r("fpVW"),
        Ce = r.n(je),
        Qe = r("NrWE"),
        we = r("BXmN"),
        De = r.n(we),
        Me = r("mgoM"),
        Le = r("Qcoi"),
        Ne = r("ggIn"),
        Re = r("yKSN"),
        qe = r("5E+2"),
        Te = r("X3Ds"),
        Ie = r("P2lf"),
        ze = "title",
        Ge = "content";
      var Pe = function (e) {
          var t = e.draft,
            r = e.eLanguage;
          return o.createElement(
            "div",
            { className: je.FlexRowContainer },
            o.createElement(Ue, { draft: t, eLanguage: r }),
            o.createElement(Re.b, {
              strToolTip: Object(oe.f)("#FAQEditor_Loc_Import_ttip"),
              strLabel: Object(oe.f)("#EventEditor_Loc_Import_Short"),
              fnOnImportLocData: function (e, r) {
                return (function (e, t, r) {
                  var a = new Set(),
                    n = t.GetSortedTokenList();
                  return (
                    Object(u.G)(function () {
                      r.forEach(function (r) {
                        n.forEach(function (a) {
                          var n = t.GetLocalization(a, r) || "";
                          if (a === ze) {
                            var i = e.GetDraftTitle(r);
                            (n || (i && i.length > 0)) && e.SetDraftTitle(r, n);
                          }
                          if (a === Ge) {
                            var o = e.GetDraftContent(r);
                            (n || (o && o.length > 0)) &&
                              e.SetDraftContent(r, n);
                          }
                        }),
                          a.add(r);
                      });
                    }),
                    Array.from(a)
                  );
                })(t, e, r);
              },
            })
          );
        },
        Ue = function (e) {
          var t = e.draft,
            r = e.eLanguage;
          return o.createElement(
            qe.a,
            { toolTipContent: Object(oe.f)("#FAQEditor_Loc_Export_ttip") },
            o.createElement(
              "div",
              {
                className: je.EditPreviewButton,
                onClick: function (e) {
                  Object(re.d)(
                    o.createElement(
                      te.d,
                      {
                        strTitle: Object(oe.f)("#EventEditor_Loc_Export"),
                        bAlertDialog: !0,
                      },
                      o.createElement(Re.a, {
                        fnGetLocData: function () {
                          return (function (e, t) {
                            for (var r, a, n = new Ie.b(), i = 0; i < 30; ++i)
                              (e.BHasSomeTextForLanguage(i) || 0 == t) &&
                                (n.SetLocalization(
                                  ze,
                                  i,
                                  null !== (r = e.GetDraftTitle(i)) &&
                                    void 0 !== r
                                    ? r
                                    : ""
                                ),
                                n.SetLocalization(
                                  Ge,
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
                    Object(Te.m)(e)
                  );
                },
              },
              Object(oe.f)("#EventEditor_Loc_Export_Short")
            )
          );
        },
        Ve = function (e) {
          return l.a.createElement(
            qe.a,
            { toolTipContent: Object(oe.f)("#FAQEditor_DeleteAction_ttip") },
            l.a.createElement(
              "div",
              {
                className: Object(ie.a)(je.EditPreviewButton, je.Delete),
                onClick: function (t) {
                  Object(re.d)(
                    l.a.createElement(We, { draft: e.draft }),
                    Object(Te.m)(t)
                  );
                },
              },
              Object(oe.f)("#FAQEditor_DeleteAction")
            )
          );
        },
        We = function (e) {
          var t = e.draft,
            r = function () {
              return e.closeModal && e.closeModal();
            },
            a = l.a.useState(!1),
            i = a[0],
            o = a[1],
            s = l.a.useState(void 0),
            c = s[0],
            u = s[1],
            d = l.a.useState(void 0),
            m = d[0],
            f = d[1],
            _ = l.a.useState(!1),
            p = _[0],
            v = _[1],
            h = l.a.createElement(
              "div",
              null,
              Object(oe.f)("#FAQEditor_DeleteDesc")
            );
          if (i)
            h = l.a.createElement(ne.a, {
              position: "center",
              size: "medium",
              string: Object(oe.f)("#FAQEditor_DeletingInProgress"),
            });
          else if (c)
            h = l.a.createElement(
              "div",
              null,
              Object(oe.f)("#FAQEditor_DeleteSuccess")
            );
          else if (m)
            h = l.a.createElement(
              "div",
              null,
              Object(oe.f)(
                "Error_Description",
                m,
                Object(oe.f)("#Error_GenericFailureDescription")
              )
            );
          else if (p)
            return l.a.createElement(ue.b, {
              push: !0,
              to: be(J.k_eCommunityDashboard),
            });
          return l.a.createElement(
            Oe.a,
            null,
            l.a.createElement(
              te.h,
              { onEscKeypress: r },
              l.a.createElement(
                X.f,
                null,
                l.a.createElement(
                  X.l,
                  null,
                  Object(oe.f)("#FAQEditor_DeleteAction")
                ),
                l.a.createElement(X.b, null, l.a.createElement(X.c, null, h)),
                l.a.createElement(
                  X.k,
                  null,
                  l.a.createElement(X.o, {
                    onCancel: c
                      ? function () {
                          return v(!0);
                        }
                      : r,
                    bOKDisabled: Boolean(i || c || m),
                    strOKText: Object(oe.f)("#FAQEditor_DeleteAction"),
                    strCancelText: Boolean(i || c || m)
                      ? Object(oe.f)("#Button_OK")
                      : void 0,
                    onOK: function () {
                      return Object(n.b)(void 0, void 0, void 0, function () {
                        return Object(n.e)(this, function (e) {
                          return (
                            o(!0),
                            k
                              .Get()
                              .DeleteFAQ(t.GetFAQID())
                              .then(function (e) {
                                1 == e && u(!0), f(e);
                              })
                              .catch(function (e) {
                                var t = Object(b.a)(e);
                                console.error(
                                  "FAQDeleteDialog: hit error: " +
                                    t.strErrorMsg,
                                  t
                                ),
                                  f(2);
                              })
                              .finally(function () {
                                return o(!1);
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
        ke = function (e) {
          return l.a.createElement(
            qe.a,
            { toolTipContent: Object(oe.f)("#FAQEditor_ChangeVisible_ttip") },
            l.a.createElement(
              "div",
              {
                className: je.EditPreviewButton,
                onClick: function (t) {
                  Object(re.d)(
                    l.a.createElement(xe, { draft: e.draft }),
                    Object(Te.m)(t)
                  );
                },
              },
              Object(oe.f)("#FAQEditor_EditVisible")
            )
          );
        },
        xe = function (e) {
          var t = e.draft,
            r = function () {
              return e.closeModal && e.closeModal();
            },
            a = l.a.useState(!1),
            i = a[0],
            o = a[1],
            s = l.a.useState(void 0),
            c = s[0],
            u = s[1],
            d = l.a.useState(void 0),
            m = d[0],
            f = d[1],
            _ = k.Get().GetFAQArticleSummary(t.GetFAQID()),
            p = l.a.useState(_.visible_in_global_realm),
            v = p[0],
            h = p[1],
            E = l.a.useState(_.visible_in_china_realm),
            g = E[0],
            y = E[1],
            F = l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(
                "div",
                null,
                Object(oe.f)("#FAQEditor_ChangeVisible_Desc")
              ),
              l.a.createElement(X.e, {
                label: Object(oe.f)("#FAQEditor_VisibleInGlobal"),
                checked: v,
                onChange: function (e) {
                  return h(e);
                },
              }),
              l.a.createElement(X.e, {
                label: Object(oe.f)("#FAQEditor_VisibleInChina"),
                checked: g,
                tooltip: Object(oe.f)("#FAQEditor_VisibleInChina_ttip"),
                onChange: function (e) {
                  return y(e);
                },
              })
            );
          return (
            i
              ? (F = l.a.createElement(ne.a, {
                  position: "center",
                  size: "medium",
                  string: Object(oe.f)("#FAQEditor_ChangeVisible_InProgress"),
                }))
              : c
              ? (F = l.a.createElement(
                  "div",
                  null,
                  Object(oe.f)("#FAQEditor_ChangeVisible_Success")
                ))
              : m &&
                (F = l.a.createElement(
                  "div",
                  null,
                  Object(oe.f)(
                    "Error_Description",
                    m,
                    Object(oe.f)("#Error_GenericFailureDescription")
                  )
                )),
            l.a.createElement(
              Oe.a,
              null,
              l.a.createElement(
                te.h,
                { onEscKeypress: r },
                l.a.createElement(
                  X.f,
                  null,
                  l.a.createElement(
                    X.l,
                    null,
                    Object(oe.f)("#FAQEditor_ChangeVisible")
                  ),
                  l.a.createElement(X.b, null, l.a.createElement(X.c, null, F)),
                  l.a.createElement(
                    X.k,
                    null,
                    l.a.createElement(X.o, {
                      onCancel: r,
                      bOKDisabled: Boolean(i || c || m),
                      strOKText: Object(oe.f)("#FAQEditor_ChangeVisible"),
                      strCancelText: Boolean(i || c || m)
                        ? Object(oe.f)("#Button_OK")
                        : void 0,
                      onOK: function () {
                        return Object(n.b)(void 0, void 0, void 0, function () {
                          return Object(n.e)(this, function (e) {
                            return (
                              o(!0),
                              k
                                .Get()
                                .UpdateVisibility(t.GetFAQID(), v, g)
                                .then(function (e) {
                                  1 == e && u(!0), f(e);
                                })
                                .catch(function (e) {
                                  var t = Object(b.a)(e);
                                  console.error(
                                    "FAQChangeVisibilityDialog: hit error: " +
                                      t.strErrorMsg,
                                    t
                                  ),
                                    f(2);
                                })
                                .finally(function () {
                                  return o(!1);
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
        He = Object(i.a)(function (e) {
          var t = e.draft.BNeedsSaving();
          return l.a.createElement(
            qe.a,
            {
              toolTipContent: Object(oe.f)(
                t ? "#FAQPublish_SaveRequire_ttip" : "#FAQPublish_Publish_ttip"
              ),
            },
            l.a.createElement(
              "div",
              {
                className: je.EditPreviewButton,
                onClick: function (r) {
                  Object(re.d)(
                    t
                      ? l.a.createElement(te.f, {
                          strDescription: Object(oe.f)(
                            "#FAQPublish_SaveRequire_ttip"
                          ),
                        })
                      : l.a.createElement(Ke, { draft: e.draft }),
                    Object(Te.m)(r)
                  );
                },
              },
              Object(oe.f)("#FAQPublish_Publish")
            )
          );
        }),
        Ke = function (e) {
          var t,
            r = e.draft,
            a = function () {
              return e.closeModal && e.closeModal();
            },
            i = l.a.useState(!1),
            o = i[0],
            s = i[1],
            c = l.a.useState(void 0),
            u = c[0],
            d = c[1],
            m = l.a.useState(void 0),
            f = m[0],
            _ = m[1],
            p = Y(r.GetFAQID())[0],
            v = l.a.useState(new Array()),
            h = v[0],
            E = v[1],
            g = function (e, t) {
              var r = h.includes(t);
              if (e && !r)
                (a = h.filter(function (e) {
                  return !0;
                })).push(t),
                  E(a);
              else if (!e && r) {
                var a = h.filter(function (e) {
                  return e !== t;
                });
                E(a);
              }
            },
            y = k.Get().GetFAQArticleSummary(r.GetFAQID()),
            F = null;
          return (
            (F = p
              ? o
                ? l.a.createElement(ne.a, {
                    position: "center",
                    size: "medium",
                    string: Object(oe.f)("#FAQPublish_Publishing"),
                  })
                : u
                ? l.a.createElement(
                    "div",
                    null,
                    Object(oe.f)("#FAQPublish_Success")
                  )
                : f
                ? l.a.createElement(
                    "div",
                    null,
                    Object(oe.f)(
                      "#Error_Description",
                      f,
                      Object(oe.f)("#Error_GenericFailureDescription")
                    )
                  )
                : y
                ? l.a.createElement(
                    "div",
                    null,
                    l.a.createElement(
                      "div",
                      null,
                      Object(oe.f)("#FAQPublish_Desc")
                    ),
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    l.a.createElement(
                      "div",
                      null,
                      Object(oe.f)("#FAQPublish_Desc2")
                    ),
                    l.a.createElement("br", null),
                    null !==
                      (t = k
                        .Get()
                        .GetDraftWithUnpublishedChanges(r)
                        .map(function (e) {
                          return l.a.createElement(Ye, {
                            key: "selrow" + e + r.GetFAQID(),
                            draft: r,
                            eLang: e,
                            fnOnChecked: g,
                          });
                        })) && void 0 !== t
                      ? t
                      : l.a.createElement(
                          "div",
                          null,
                          Object(oe.f)("#FAQPublish_None")
                        )
                  )
                : l.a.createElement(
                    "div",
                    null,
                    Object(oe.f)("#FAQPublish_LoadError")
                  )
              : l.a.createElement(ne.a, {
                  size: "small",
                  position: "center",
                  string: Object(oe.f)("#FAQPublish_PublishWait"),
                })),
            l.a.createElement(
              Oe.a,
              null,
              l.a.createElement(
                te.h,
                { onEscKeypress: a },
                l.a.createElement(
                  X.f,
                  null,
                  l.a.createElement(
                    X.l,
                    null,
                    Object(oe.f)("#FAQPublish_Publish")
                  ),
                  l.a.createElement(X.b, null, l.a.createElement(X.c, null, F)),
                  l.a.createElement(
                    X.k,
                    null,
                    l.a.createElement(X.o, {
                      onCancel: a,
                      bOKDisabled: Boolean(o || u || f || 0 == h.length),
                      strOKText: Object(oe.f)("#FAQPublish_Publish"),
                      strCancelText: Boolean(o || u || f)
                        ? Object(oe.f)("#Button_OK")
                        : void 0,
                      onOK: function () {
                        return Object(n.b)(void 0, void 0, void 0, function () {
                          return Object(n.e)(this, function (e) {
                            return (
                              s(!0),
                              k
                                .Get()
                                .PublishDraftByLanguage(r.GetFAQID(), h)
                                .then(function (e) {
                                  1 == e && d(!0), _(e);
                                })
                                .catch(function (e) {
                                  var t = Object(b.a)(e);
                                  console.error(
                                    "FAQPublishDialog: hit error: " +
                                      t.strErrorMsg,
                                    t
                                  ),
                                    _(2);
                                })
                                .finally(function () {
                                  return s(!1);
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
        Ye = function (e) {
          var t,
            r = e.draft,
            a = e.eLang,
            n = e.fnOnChecked,
            i = r.GetLastSaveMetaData(a),
            o = Ae.a.InitFromAccountID(Number.parseInt(i.author_account_id)),
            s = Object(Le.b)(o.ConvertTo64BitString()),
            c = (s[0], s[1]),
            u = Object(oe.f)(
              "#FAQPublish_DraftInfo",
              Object(oe.f)("Language_" + Object(Me.a)(a)),
              Object(oe.k)(i.timestamp) + " @ " + Object(oe.m)(i.timestamp),
              null !== (t = null == c ? void 0 : c.persona_name) && void 0 !== t
                ? t
                : i.author_account_id
            );
          return l.a.createElement(X.e, {
            label: u,
            onChange: function (e) {
              return n(e, a);
            },
          });
        },
        Je = Object(i.a)(function (e) {
          var t = e.draft,
            r = e.eLanguage,
            a = new Array(),
            n = new Array(),
            i = k.Get().GetFAQArticleSummary(t.GetFAQID()),
            o = Boolean(i.last_publish_timestamp);
          if (o) {
            var s = k.Get().GetAllLatestPublishedForFAQ(t.GetFAQID());
            if (s)
              for (var c = 0; c < 30; c++) {
                var u = s.get(c);
                u &&
                  n.push(
                    l.a.createElement(Xe, {
                      key: t.GetFAQID() + "_" + c,
                      metadata: u,
                    })
                  );
              }
          }
          for (var d = 0; d < 30; d++) {
            var m = t.GetLastSaveMetaData(d);
            m &&
              a.push(
                l.a.createElement(Xe, {
                  key: "draft_" + t.GetFAQID() + "_" + d,
                  metadata: m,
                })
              );
          }
          return l.a.createElement(
            Oe.a,
            null,
            l.a.createElement(
              "div",
              { className: Ne.LeftMenu },
              l.a.createElement(
                "div",
                { className: Ne.Section },
                l.a.createElement(
                  "div",
                  { className: Ne.SectionTitle },
                  Object(oe.f)("#FAQDashboard_VisibilityColumn"),
                  " "
                ),
                l.a.createElement(
                  "div",
                  { className: Ne.SectionContents },
                  l.a.createElement(
                    "div",
                    { className: Ne.VisibilityCtn },
                    l.a.createElement(
                      "div",
                      { className: Object(ie.a)(Ne.StatusRow, Ne.Global) },
                      Object(oe.f)("#FAQDashboard_VisibleInGlobalRealmLabel"),
                      " ",
                      l.a.createElement(Ee, {
                        bIsVisible: i.visible_in_global_realm,
                      })
                    ),
                    l.a.createElement(
                      "div",
                      { className: Object(ie.a)(Ne.StatusRow, Ne.China) },
                      Object(oe.f)("#FAQDashboard_VisibleInChinaRealmLabel"),
                      " ",
                      l.a.createElement(Ee, {
                        bIsVisible: i.visible_in_china_realm,
                      })
                    ),
                    l.a.createElement(
                      "div",
                      { className: Ne.StatusBtnCtn },
                      l.a.createElement(ke, { draft: t })
                    )
                  ),
                  l.a.createElement(
                    "div",
                    { className: Ne.PublishCtn },
                    l.a.createElement(
                      "div",
                      { className: Ne.PublishStatus },
                      Object(oe.f)("#FAQStatus_DraftVersionsDesc")
                    ),
                    l.a.createElement(
                      "div",
                      { className: Ne.PublishBtn },
                      l.a.createElement(He, { draft: t })
                    )
                  )
                )
              ),
              l.a.createElement(
                "div",
                { className: Ne.Section },
                l.a.createElement(
                  "div",
                  { className: Ne.SectionTitle },
                  Object(oe.f)("#FAQDashboard_LocalizationSection"),
                  " "
                ),
                l.a.createElement(
                  "div",
                  { className: Ne.SectionContents },
                  Object(oe.f)("#FAQDashboard_LocalizationSectionDesc"),
                  l.a.createElement("br", null),
                  l.a.createElement(Pe, { draft: t, eLanguage: r })
                )
              ),
              l.a.createElement(
                "div",
                { className: Ne.Section },
                l.a.createElement(
                  "div",
                  { className: Ne.SectionTitle },
                  Object(oe.f)("#FAQStatus_LiveVersionHeader")
                ),
                o
                  ? l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        "table",
                        { className: Ne.FaqStatusTable },
                        l.a.createElement(
                          "thead",
                          null,
                          l.a.createElement(
                            "tr",
                            null,
                            l.a.createElement(
                              "th",
                              null,
                              Object(oe.f)("#LanguageTitle")
                            ),
                            l.a.createElement("th", null, "V"),
                            l.a.createElement(
                              "th",
                              null,
                              Object(oe.f)("#EventEditor_Visibility_Published")
                            ),
                            l.a.createElement(
                              "th",
                              null,
                              Object(oe.f)("#FAQStatus_Editor")
                            )
                          )
                        ),
                        l.a.createElement("tbody", null, n)
                      )
                    )
                  : l.a.createElement(
                      "div",
                      null,
                      Object(oe.f)("#FAQStatus_NotVisible")
                    )
              ),
              l.a.createElement(
                "div",
                { className: Ne.Section },
                l.a.createElement(
                  "div",
                  { className: Ne.SectionTitle },
                  Object(oe.f)("#FAQStatus_DraftVersions")
                ),
                l.a.createElement(
                  "div",
                  null,
                  l.a.createElement(
                    "table",
                    { className: Ne.FaqStatusTable },
                    l.a.createElement(
                      "thead",
                      null,
                      l.a.createElement(
                        "tr",
                        null,
                        l.a.createElement(
                          "th",
                          null,
                          Object(oe.f)("#LanguageTitle")
                        ),
                        l.a.createElement(
                          "th",
                          null,
                          Object(oe.f)("#FAQStatus_LastUpdated")
                        ),
                        l.a.createElement(
                          "th",
                          null,
                          Object(oe.f)("#FAQStatus_Editor")
                        )
                      )
                    ),
                    l.a.createElement("tbody", null, a)
                  )
                )
              ),
              l.a.createElement(
                "div",
                { className: Ne.Section },
                l.a.createElement(Ve, { draft: t })
              )
            )
          );
        }),
        Xe = function (e) {
          var t,
            r = e.metadata,
            a = Ae.a.InitFromAccountID(Number.parseInt(r.author_account_id)),
            n = Object(Le.b)(a.ConvertTo64BitString()),
            i = (n[0], n[1]);
          return l.a.createElement(
            "tr",
            null,
            l.a.createElement(
              "td",
              null,
              Object(oe.f)("#Language_" + Object(Me.a)(r.language))
            ),
            Boolean(Number.parseInt(r.version) > 0) &&
              l.a.createElement("td", null, r.version),
            l.a.createElement(
              "td",
              null,
              Object(oe.k)(r.timestamp),
              " @ ",
              Object(oe.m)(r.timestamp)
            ),
            l.a.createElement(
              "td",
              null,
              l.a.createElement(
                "a",
                {
                  href:
                    W.c.COMMUNITY_BASE_URL +
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
        Ze = r("vBFs"),
        $e = (r("jZUi"), r("wst7")),
        et = r("eYkW"),
        tt = r.n(et),
        rt = r("hvYe"),
        at = r.n(rt),
        nt = r("aXcg"),
        it = Object(i.a)(function (e) {
          var t = e.draft.BNeedsSaving();
          return l.a.createElement(
            "div",
            {
              className: "btn_green_steamui btn_medium",
              onClick: function (t) {
                return Object(re.d)(
                  l.a.createElement(ot, { draft: e.draft }),
                  Object(Te.m)(t)
                );
              },
            },
            l.a.createElement(
              "span",
              null,
              !t &&
                l.a.createElement("img", {
                  className: nt.SavedImage,
                  src: at.a,
                }),
              Object(oe.f)(t ? "#Button_Save" : "#Button_Saved")
            )
          );
        }),
        ot = function (e) {
          var t = e.draft,
            r = e.closeModal,
            a = l.a.useState(!0),
            i = a[0],
            o = a[1],
            s = l.a.useState(void 0),
            c = s[0],
            u = s[1];
          return (
            l.a.useEffect(
              function () {
                Object(n.b)(void 0, void 0, void 0, function () {
                  var e, r;
                  return Object(n.e)(this, function (a) {
                    switch (a.label) {
                      case 0:
                        o(!0), (a.label = 1);
                      case 1:
                        return a.trys.push([1, 3, 4, 5]), [4, t.SaveDrafts()];
                      case 2:
                        return (e = a.sent()), u(e), [3, 5];
                      case 3:
                        return (
                          (r = a.sent()),
                          u(2),
                          console.log(
                            "FAQSaveProgressDialog hit exception " +
                              Object(b.a)(r).strErrorMsg
                          ),
                          [3, 5]
                        );
                      case 4:
                        return o(!1), [7];
                      case 5:
                        return [2];
                    }
                  });
                });
              },
              [t]
            ),
            l.a.createElement(
              te.e,
              { bAllowFullSize: !0, onCancel: r, closeModal: r },
              l.a.createElement(
                X.l,
                null,
                i
                  ? l.a.createElement(
                      "div",
                      null,
                      Object(oe.f)("#FAQSave_Saving")
                    )
                  : l.a.createElement(
                      "div",
                      null,
                      Object(oe.f)(
                        Boolean(1 == c)
                          ? "#FAQSave_SaveSuccess"
                          : "#FAQSave_Error"
                      ),
                      " "
                    )
              ),
              l.a.createElement(
                X.b,
                null,
                i
                  ? l.a.createElement(ne.a, {
                      size: "medium",
                      position: "center",
                    })
                  : l.a.createElement(
                      "div",
                      null,
                      Boolean(1 == c)
                        ? l.a.createElement(
                            "div",
                            null,
                            Object(oe.f)("#FAQSave_SaveSuccess_desc")
                          )
                        : l.a.createElement(
                            "div",
                            null,
                            Object(oe.f)(
                              "#Error_Description",
                              c,
                              Object(oe.f)("#Error_GenericFailureDescription")
                            )
                          )
                    )
              ),
              l.a.createElement(
                X.k,
                null,
                !i &&
                  l.a.createElement(
                    X.r,
                    { onClick: r },
                    Object(oe.f)("#Button_OK")
                  )
              )
            )
          );
        },
        lt = r("6h0J"),
        st = r.n(lt),
        ct = Object(i.a)(function (e) {
          var t,
            r = e.draft,
            a = e.bPreview,
            n = r.BHasPublished();
          return l.a.createElement(
            Oe.a,
            null,
            l.a.createElement(
              "div",
              {
                className: Object(ie.a)(
                  ((t = {}),
                  (t[$e.EventEditorTopBarContainer] = !0),
                  (t[$e.EventUnPublished] = !a && !n),
                  (t[$e.EventPublished] = !a && n),
                  (t[tt.a.FAQPreview] = a),
                  t)
                ),
              },
              l.a.createElement(
                fe,
                {
                  route: a ? J.k_eCommunityEdit : J.k_eCommunityDashboard,
                  faqid: r.GetFAQID(),
                  className: Ce.a.EditPreviewButton,
                },
                Object(oe.f)(
                  a ? "#FAQEditor_EditFAQ" : "#EventDisplay_EventsDashBtn"
                )
              ),
              l.a.createElement(
                "div",
                null,
                l.a.createElement(
                  "div",
                  { className: tt.a.EditorInternalNameLabel },
                  Object(oe.f)(
                    a
                      ? "#FAQEditor_InternalName_Preview"
                      : "#FAQEditor_InternalName"
                  )
                ),
                l.a.createElement(
                  "div",
                  { className: tt.a.EditorInternalName },
                  r.GetFAQInternalName(),
                  l.a.createElement("img", {
                    src: st.a,
                    onClick: function (e) {
                      return Object(re.d)(
                        l.a.createElement(ut, { draft: r }),
                        Object(Te.m)(e)
                      );
                    },
                  })
                )
              ),
              l.a.createElement(
                "div",
                { className: Ce.a.EventOptions },
                l.a.createElement(Ze.a, {
                  selectedLang: Se.a.Get().GetCurEditLanguage(),
                  fnOnLanguageChanged: Se.a.Get().SetCurEditLanguage,
                  fnLangHasData: r.BHasSomeTextForLanguage,
                  fnIsLangSupported: function (e) {
                    return !0;
                  },
                  fnLastUpdateRTime: r.GetLastTimeLanguageUpdated,
                }),
                !a &&
                  l.a.createElement(
                    fe,
                    {
                      route: J.k_eCommunityPreview,
                      faqid: r.GetFAQID(),
                      className: Ce.a.EditPreviewButton,
                    },
                    Object(oe.f)("#Button_Preview")
                  )
              )
            )
          );
        }),
        ut = function (e) {
          var t = e.closeModal,
            r = e.draft,
            a = l.a.useState(r.GetFAQInternalName() || ""),
            i = a[0],
            o = a[1],
            s = l.a.useState(!1),
            c = s[0],
            u = s[1],
            d = l.a.useState(1),
            m = d[0],
            f = d[1],
            b = l.a.useState(!1),
            _ = b[0],
            p = b[1];
          return l.a.createElement(
            te.e,
            { bAllowFullSize: !0, onCancel: t, closeModal: t },
            l.a.createElement(
              X.l,
              null,
              Object(oe.f)("#FAQEditor_ChangeInternalName")
            ),
            l.a.createElement(
              X.b,
              null,
              l.a.createElement(
                "div",
                null,
                Object(oe.f)("#FAQEditor_ChangeInternalName_desc")
              ),
              l.a.createElement("input", {
                type: "text",
                value: i,
                placeholder: Object(oe.f)("#FAQEditor_ChangeInternalName"),
                onFocus: function (e) {
                  return e.target.select();
                },
                onChange: function (e) {
                  return o(e.currentTarget.value);
                },
                maxLength: 240,
                disabled: c,
              }),
              Boolean(c && !_) &&
                l.a.createElement(ne.a, {
                  string: Object(oe.f)("#Updating"),
                  position: "center",
                  size: "medium",
                }),
              _ &&
                l.a.createElement(
                  "span",
                  null,
                  1 == m
                    ? Object(oe.f)("#EventDisplay_Share_Success")
                    : Object(oe.f)(
                        "#Error_Description",
                        m,
                        Object(oe.f)("#Error_GenericFailureDescription")
                      )
                )
            ),
            l.a.createElement(
              X.k,
              null,
              l.a.createElement(X.o, {
                bOKDisabled: 0 == i.trim().length || c,
                onCancel: t,
                strCancelText: _
                  ? Object(oe.f)("#Button_Close")
                  : Object(oe.f)("#Button_Cancel"),
                onOK: function () {
                  return Object(n.b)(void 0, void 0, void 0, function () {
                    return Object(n.e)(this, function (e) {
                      return (
                        u(!0),
                        k
                          .Get()
                          .UpdateInternalName(r.GetFAQID(), i)
                          .then(function (e) {
                            return f(e);
                          })
                          .finally(function () {
                            p(!0);
                          }),
                        [2]
                      );
                    });
                  });
                },
              })
            )
          );
        },
        dt = Object(i.a)(function (e) {
          var t = e.draft,
            r = (e.eLanguage, t.GetFAQID()),
            a = Y(r)[0],
            n = k.Get().GetFAQArticleSummary(r),
            i =
              a &&
              n.visible_in_global_realm &&
              k.Get().BHasPublishedInGlobalRealm(r),
            o =
              a &&
              n.visible_in_china_realm &&
              k.Get().BHasPublishedInSteamChinaRealm(r);
          return l.a.createElement(
            Oe.a,
            null,
            l.a.createElement(
              "div",
              { className: Object(ie.a)(Ce.a.SaveBackground) },
              l.a.createElement(
                "div",
                {
                  className: Ce.a.FlexRowWrapFlexStartContainer,
                  style: { width: "unset", justifyContent: "center" },
                },
                l.a.createElement(it, { draft: t }),
                Boolean(i || o) &&
                  l.a.createElement(
                    "div",
                    { className: Ce.a.EditPreviewButton },
                    l.a.createElement(
                      fe,
                      { faqid: r, route: J.k_eCommunityView },
                      Object(oe.f)("#FAQEditir_ViewLiveFAQ")
                    )
                  )
              )
            )
          );
        }),
        mt = Object(i.a)(function (e) {
          var t = K(e.faqid),
            r = t[0],
            a = t[1],
            n = l.a.useRef();
          if (!a)
            return l.a.createElement(ne.a, {
              position: "center",
              size: "xlarge",
              string: Object(oe.f)("#Loading"),
            });
          if (!r)
            return l.a.createElement(pt, {
              strError: Object(oe.f)("#FAQEditor_NoFAQFound"),
            });
          var i = Se.a.Get().GetCurEditLanguage();
          return l.a.createElement(
            "div",
            null,
            l.a.createElement(ct, { draft: r }),
            l.a.createElement(
              "div",
              { className: De.a.FAQEditPage },
              l.a.createElement(
                "div",
                { className: De.a.FAQMenuCtn },
                l.a.createElement(Je, { draft: r, eLanguage: i })
              ),
              l.a.createElement(
                "div",
                { className: De.a.FAQEditorCtn },
                l.a.createElement(
                  "div",
                  { className: De.a.FAQEditor },
                  l.a.createElement(
                    "div",
                    { className: Ce.a.Columns },
                    l.a.createElement(
                      "div",
                      { className: Object(ie.a)(Ce.a.LeftCol) },
                      l.a.createElement(bt, { draft: r, eLanguage: i }),
                      l.a.createElement(_t, {
                        bbcodeEditorRef: n,
                        draft: r,
                        eLanguage: i,
                      })
                    ),
                    l.a.createElement(ft, {
                      draft: r,
                      bbcodeEditorRef: n,
                      className: Ce.a.RightCol,
                    })
                  )
                )
              )
            ),
            l.a.createElement(dt, { draft: r, eLanguage: i })
          );
        }),
        ft = function (e) {
          if (!Boolean(W.b.CAN_UPLOAD_IMAGES)) return null;
          var t = new Ae.a(W.b.CLANSTEAMID),
            r = e.draft,
            a = e.bbcodeEditorRef;
          return l.a.createElement(
            Oe.a,
            null,
            l.a.createElement(
              "div",
              { className: e.className },
              l.a.createElement(
                "div",
                null,
                Object(oe.f)("#FAQEditor_ImageTitle")
              ),
              l.a.createElement(Qe.a, {
                bShowLightBox: !1,
                clanSteamID: t,
                imageInsertCallBack: function (e, t) {
                  return (
                    a.current &&
                    Object(Fe.b)(null == a ? void 0 : a.current, e, t)
                  );
                },
                fnSetImageURL: function () {},
                rgRealmList: r.GetIncludedRealmList(),
              })
            )
          );
        },
        bt = Object(i.a)(function (e) {
          var t = e.draft,
            r = e.eLanguage;
          return l.a.createElement(
            "div",
            { className: De.a.EditorTitleField },
            l.a.createElement(
              "div",
              { className: De.a.EditorLabel },
              Object(oe.f)("#FAQEditor_TitleLabel")
            ),
            l.a.createElement("input", {
              type: "text",
              className: De.a.EditorTitleFieldInput,
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
        _t = Object(i.a)(function (e) {
          var t = e.draft,
            r = e.eLanguage,
            a = e.bbcodeEditorRef;
          return l.a.createElement(
            "div",
            { className: De.a.EditorPane },
            l.a.createElement(
              "div",
              { className: De.a.EditorLabel },
              Object(oe.f)("#FAQEditor_ContentLabel")
            ),
            l.a.createElement(Be.a, {
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
              classNameForTextArea: De.a.EditorPaneTextArea,
            })
          );
        }),
        pt = function (e) {
          return l.a.createElement(
            "div",
            { className: De.a.ErrorCtn },
            l.a.createElement("div", { className: De.a.ErrorMsg }, e.strError),
            l.a.createElement(
              fe,
              { route: J.k_eCommunityDashboard, className: De.a.EscapeLink },
              Object(oe.f)("#FAQEditor_GoToDashboard")
            )
          );
        },
        vt = r("ZeAL"),
        ht = r("nrKv"),
        Et = r("rcjX"),
        gt = function (e) {
          var t = o.useCallback(function () {
              return new ht.c(new ht.b(), 0);
            }, []),
            r = o.useRef(new vt.a(Et.c, t));
          return o.createElement(
            o.Fragment,
            null,
            r.current.ParseBBCode(e.text, {})
          );
        },
        yt = r("orBq"),
        Ft = function (e) {
          var t = e.title,
            r = e.content,
            a = e.elSideBars;
          return l.a.createElement(
            "div",
            { className: yt.FAQViewPage },
            l.a.createElement(
              "div",
              { className: je.Columns },
              l.a.createElement(
                "div",
                { className: Object(ie.a)(je.LeftCol) },
                l.a.createElement("div", { className: yt.FAQTitle }, t),
                l.a.createElement(
                  "div",
                  { className: yt.FAQContent },
                  l.a.createElement(gt, { text: r })
                )
              ),
              l.a.createElement("div", { className: je.RightCol }, a)
            )
          );
        },
        At = function (e) {
          return l.a.createElement(
            "div",
            { className: yt.FAQViewPage },
            e.children
          );
        },
        St = r("3tbG"),
        Bt = function (e) {
          var t = e.faqContent;
          return k.Get().BHasFAQEdit()
            ? l.a.createElement(
                "div",
                null,
                l.a.createElement(
                  "div",
                  null,
                  Object(oe.f)("#FAQViewer_AdminLinks")
                ),
                l.a.createElement(
                  "div",
                  null,
                  Object(oe.n)(
                    "#FAQViewer_Admin_LastUpdate",
                    t.author_account_id
                      ? l.a.createElement(Ot, {
                          authorAccountID: Number.parseInt(t.author_account_id),
                        })
                      : Object(oe.f)("#Sale_Debug_Unknown"),
                    l.a.createElement(
                      "span",
                      null,
                      Object(oe.k)(t.timestamp) +
                        "@" +
                        Object(oe.m)(t.timestamp)
                    )
                  )
                ),
                l.a.createElement(jt, { faqContent: t }),
                l.a.createElement(
                  fe,
                  {
                    faqid: t.faq_id,
                    route: J.k_eCommunityEdit,
                    bForceAnchor: !0,
                  },
                  Object(oe.f)("#FAQViewer_GotoEditor")
                )
              )
            : null;
        },
        Ot = function (e) {
          var t = Ae.a.InitFromAccountID(e.authorAccountID),
            r = Object(Le.b)(t.ConvertTo64BitString()),
            a = r[0],
            n = r[1];
          return l.a.createElement(
            l.a.Fragment,
            null,
            Boolean(a || !n)
              ? l.a.createElement("span", null, e.authorAccountID)
              : l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement("img", {
                    className: St.SmallAvatar,
                    src: n.avatar_url,
                    "data-miniprofile": "s" + t.ConvertTo64BitString(),
                  }),
                  l.a.createElement("span", null, n.persona_name)
                )
          );
        },
        jt = function (e) {
          var t = e.faqContent,
            r = K(t.faq_id),
            a = r[0],
            n = r[1];
          if (
            !a ||
            !n ||
            a.GetLastTimeLanguageUpdated(t.language) <= t.timestamp
          )
            return null;
          var i = a.GetLastSaveMetaData(t.language);
          return l.a.createElement(
            "div",
            null,
            Object(oe.n)(
              "#FAQViewer_DraftNewer",
              l.a.createElement(Ot, {
                authorAccountID: Number.parseInt(i.author_account_id),
              }),
              l.a.createElement(
                "span",
                null,
                Object(oe.k)(i.timestamp) + "@" + Object(oe.m)(i.timestamp)
              )
            )
          );
        },
        Ct = r("rTBr"),
        Qt = r.n(Ct),
        wt = function (e) {
          return l.a.createElement(
            "div",
            null,
            l.a.createElement(
              "div",
              null,
              l.a.createElement(
                "div",
                null,
                Object(oe.f)("#FAQViewer_SideBar_ProblemWithSteam_Title")
              ),
              l.a.createElement(
                "a",
                { href: W.c.HELP_BASE_URL },
                Object(oe.f)("#FAQViewer_SideBar_ProblemWithSteam_Desc")
              )
            ),
            l.a.createElement(
              "div",
              null,
              l.a.createElement(
                "div",
                null,
                Object(oe.f)("#FAQViewer_SideBar_CommunityHelp_Title")
              ),
              l.a.createElement(
                "div",
                null,
                Object(oe.f)("#FAQViewer_SideBar_CommunityHelp_Desc")
              ),
              l.a.createElement(
                "a",
                { href: W.c.COMMUNITY_BASE_URL + "discussions" },
                Object(oe.f)("#FAQViewer_SideBar_CommunityHelp_Link")
              )
            )
          );
        },
        Dt = function (e) {
          var t = (function (e, t) {
              return [e && k.Get().GetFAQPublishedContent(e, t), !0];
            })(e.faqid, Object(Me.d)(W.c.LANGUAGE)),
            r = t[0];
          return t[1]
            ? r
              ? l.a.createElement(Ft, {
                  title: r.title,
                  content: r.content,
                  elSideBars: [
                    l.a.createElement(wt, { key: "sidebar", faqContent: r }),
                    l.a.createElement(Bt, { key: "adminbar", faqContent: r }),
                  ],
                })
              : l.a.createElement(
                  At,
                  null,
                  l.a.createElement(Mt, {
                    strError: Object(oe.f)("#FAQViewer_NoFAQFound"),
                  })
                )
            : l.a.createElement(
                At,
                null,
                l.a.createElement(ne.a, {
                  position: "center",
                  size: "xlarge",
                  string: Object(oe.f)("#Loading"),
                })
              );
        },
        Mt = function (e) {
          var t,
            r =
              W.c.COMMUNITY_BASE_URL +
              (W.b.APPID
                ? "app/" +
                  (null !== (t = W.b.VANITY_ID) && void 0 !== t ? t : W.b.APPID)
                : "gid/" + W.b.CLANSTEAMID);
          return l.a.createElement(
            "div",
            { className: Qt.a.ErrorCtn },
            l.a.createElement("div", { className: Qt.a.ErrorMsg }, e.strError),
            l.a.createElement(
              "a",
              { className: Qt.a.EscapeLink, href: r },
              Object(oe.f)("#FAQViewer_GoToHomepage")
            )
          );
        },
        Lt = Object(i.a)(function (e) {
          var t = K(e.faqid),
            r = t[0],
            a = t[1],
            n = Se.a.Get().GetCurEditLanguage();
          return a
            ? r
              ? l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(ct, { draft: r, bPreview: !0 }),
                  l.a.createElement(Ft, {
                    title: r.GetDraftTitleWithFallback(n, W.c.EREALM),
                    content: r.GetDraftContentWithFallback(n, W.c.EREALM),
                  }),
                  l.a.createElement(dt, { draft: r, eLanguage: n })
                )
              : l.a.createElement(
                  At,
                  null,
                  l.a.createElement(Mt, {
                    strError: Object(oe.f)("#FAQViewer_NoFAQFound"),
                  })
                )
            : l.a.createElement(
                At,
                null,
                l.a.createElement(ne.a, {
                  position: "center",
                  size: "xlarge",
                  string: Object(oe.f)("#Loading"),
                })
              );
        }),
        Nt = r("9w6b"),
        Rt = r("WplJ"),
        qt = {
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
        Tt = Object(i.a)(function (e) {
          var t = l.a.useState(!0),
            r = t[0],
            a = t[1];
          return (
            l.a.useEffect(function () {
              Object(n.b)(void 0, void 0, void 0, function () {
                return Object(n.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, Nt.a.InitGlobal()];
                    case 1:
                      return e.sent(), a(!1), [2];
                  }
                });
              });
            }, []),
            r
              ? l.a.createElement(ne.a, {
                  position: "center",
                  size: "medium",
                  string: Object(oe.f)("#Loading"),
                })
              : l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(ye, null),
                  l.a.createElement(
                    ue.e,
                    null,
                    l.a.createElement(ue.c, {
                      path: qt.ViewFAQ(":vanity_str", ":faqid"),
                      render: function (e) {
                        return l.a.createElement(Rt.a, {
                          config: {
                            "faqs-root": function () {
                              var t = H(e.match.params.faqid);
                              return l.a.createElement(Dt, { faqid: t });
                            },
                          },
                        });
                      },
                    }),
                    l.a.createElement(ue.c, {
                      path: qt.EditFAQ(":vanity_str", ":faqid"),
                      render: function (e) {
                        return l.a.createElement(Rt.a, {
                          config: {
                            "faqs-root": function () {
                              var t = e.match.params.faqid;
                              if (t) {
                                var r = H(t);
                                return r
                                  ? l.a.createElement(mt, { faqid: r })
                                  : l.a.createElement(ue.b, {
                                      push: !0,
                                      to: be(J.k_eCommunityDashboard),
                                    });
                              }
                              return l.a.createElement(_e, null);
                            },
                          },
                        });
                      },
                    }),
                    l.a.createElement(ue.c, {
                      path: qt.DashboardFAQ(":vanity_str"),
                      render: function (e) {
                        return l.a.createElement(Rt.a, {
                          config: {
                            "faqs-root": function () {
                              return l.a.createElement(_e, null);
                            },
                          },
                        });
                      },
                    }),
                    l.a.createElement(ue.c, {
                      path: qt.PreviewFAQ(":vanity_str", ":faqid"),
                      render: function (e) {
                        return l.a.createElement(Rt.a, {
                          config: {
                            "faqs-root": function () {
                              var t = H(e.match.params.faqid);
                              return l.a.createElement(Lt, { faqid: t });
                            },
                          },
                        });
                      },
                    }),
                    l.a.createElement(ue.c, { component: It })
                  )
                )
          );
        });
      t.default = Tt;
      function It(e) {
        return "dev" !== W.c.WEB_UNIVERSE
          ? l.a.createElement(ue.b, { to: "/" })
          : l.a.createElement(
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
        NameCol: "faqdashboard_NameCol_1fuCl",
        TimeCol: "faqdashboard_TimeCol_3V2JE",
        VisCol: "faqdashboard_VisCol_1k550",
        ClickableHeader: "faqdashboard_ClickableHeader_2dUdD",
        RightAligned: "faqdashboard_RightAligned_3aRrw",
        DownArrow: "faqdashboard_DownArrow_30b5I",
        Selected: "faqdashboard_Selected_3_SL2",
        EntryRow: "faqdashboard_EntryRow_1XVhG",
        SmallLabel: "faqdashboard_SmallLabel_2hoVL",
        SmallData: "faqdashboard_SmallData_2wFUB",
        State: "faqdashboard_State_2DKYg",
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
        FAQUnPublished: "faqtoolbar_FAQUnPublished_erZyI",
        FAQPublished: "faqtoolbar_FAQPublished_13Wz0",
        EditorInternalNameLabel: "faqtoolbar_EditorInternalNameLabel_3fAcX",
        EditorInternalName: "faqtoolbar_EditorInternalName_3A9ci",
      };
    },
    ggIn: function (e, t, r) {
      e.exports = {
        LeftMenu: "faqstatus_LeftMenu_1txme",
        Section: "faqstatus_Section_2j-hh",
        SectionContents: "faqstatus_SectionContents_3lz4J",
        SectionTitle: "faqstatus_SectionTitle_23FTZ",
        VisibilityCtn: "faqstatus_VisibilityCtn_16zch",
        StatusRow: "faqstatus_StatusRow_272D2",
        Global: "faqstatus_Global_1DcbV",
        China: "faqstatus_China_2cUtB",
        StatusBtnCtn: "faqstatus_StatusBtnCtn_HJUHT",
        PublishCtn: "faqstatus_PublishCtn_2syC3",
        PublishStatus: "faqstatus_PublishStatus_uvzu3",
        PublishBtn: "faqstatus_PublishBtn_3P52v",
        FaqStatusTable: "faqstatus_FaqStatusTable_pCBfT",
      };
    },
    orBq: function (e, t, r) {
      e.exports = {
        FAQViewPage: "faqsharedviewpage_FAQViewPage_Ya530",
        FAQContent: "faqsharedviewpage_FAQContent_2dSVn",
      };
    },
    rTBr: function (e, t, r) {
      e.exports = {
        ErrorCtn: "faqviewpage_ErrorCtn_2Dpwh",
        ErrorMsg: "faqviewpage_ErrorMsg_2dTNx",
        EscapeLink: "faqviewpage_EscapeLink_19Bjj",
      };
    },
  },
]);
