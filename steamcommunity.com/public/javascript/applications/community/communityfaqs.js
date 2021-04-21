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
          return Rt;
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
                                c = x
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
        h = r("kLLr"),
        E = r("hRO2"),
        g = r("OS8t"),
        y = E.Message,
        F = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.faq_id || g.a(t.M()),
              y.initialize(a, r, 0, -1, void 0, null),
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
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = g.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return g.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return g.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return g.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              g.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQSummary";
            }),
            t
          );
        })(y),
        A = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.faq_id || g.a(t.M()),
              y.initialize(a, r, 0, -1, void 0, null),
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
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = g.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return g.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return g.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return g.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              g.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQContent";
            }),
            t
          );
        })(y),
        S = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.steamid || g.a(t.M()),
              y.initialize(a, r, 0, -1, void 0, null),
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
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = g.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return g.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return g.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return g.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              g.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_Create_Request";
            }),
            t
          );
        })(y),
        B = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.faq_id || g.a(t.M()),
              y.initialize(a, r, 0, -1, void 0, null),
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
                        br: g.d.readUint64String,
                        bw: g.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = g.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return g.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return g.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return g.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              g.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_Create_Response";
            }),
            t
          );
        })(y),
        O = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.steamid || g.a(t.M()),
              y.initialize(a, r, 0, -1, void 0, null),
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
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = g.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return g.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return g.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return g.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              g.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_Delete_Request";
            }),
            t
          );
        })(y),
        j = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return y.initialize(r, t, 0, -1, void 0, null), r;
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
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_Delete_Response";
            }),
            t
          );
        })(y),
        C = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.steamid || g.a(t.M()),
              y.initialize(a, r, 0, -1, void 0, null),
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
                        br: g.d.readUint64String,
                        bw: g.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: g.d.readUint64String,
                        bw: g.h.writeUint64String,
                      },
                      internal_name: {
                        n: 3,
                        br: g.d.readString,
                        bw: g.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = g.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return g.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return g.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return g.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              g.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_UpdateInternalName_Request";
            }),
            t
          );
        })(y),
        Q = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return y.initialize(r, t, 0, -1, void 0, null), r;
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
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_UpdateInternalName_Response";
            }),
            t
          );
        })(y),
        w = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.steamid || g.a(t.M()),
              y.initialize(a, r, 0, -1, void 0, null),
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
                        br: g.d.readUint64String,
                        bw: g.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: g.d.readUint64String,
                        bw: g.h.writeUint64String,
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
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = g.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return g.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return g.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return g.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              g.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_SetVisibility_Request";
            }),
            t
          );
        })(y),
        D = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return y.initialize(r, t, 0, -1, void 0, null), r;
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
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_SetVisibility_Response";
            }),
            t
          );
        })(y),
        M = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.steamid || g.a(t.M()),
              y.initialize(a, r, 0, -1, void 0, null),
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
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = g.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return g.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return g.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return g.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              g.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_UpdateDraft_Request";
            }),
            t
          );
        })(y),
        L = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.steamid || g.a(t.M()),
              y.initialize(a, r, 0, -1, void 0, null),
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
                      last_update_timestamp: {
                        n: 5,
                        br: g.d.readFixed32,
                        bw: g.h.writeFixed32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = g.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return g.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return g.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return g.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              g.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_UpdateDraft_Response";
            }),
            t
          );
        })(y),
        N = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.steamid || g.a(t.M()),
              y.initialize(a, r, 0, -1, [3], null),
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
                        r: !0,
                        q: !0,
                        br: g.d.readUint32,
                        bw: g.h.writeRepeatedUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = g.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return g.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return g.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return g.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              g.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_PublishDraft_Request";
            }),
            t
          );
        })(y),
        R = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.steamid || g.a(t.M()),
              y.initialize(a, r, 0, -1, [3, 6], null),
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
                        r: !0,
                        q: !0,
                        br: g.d.readUint32,
                        bw: g.h.writeRepeatedUint32,
                      },
                      last_publish_timestamp: {
                        n: 6,
                        r: !0,
                        q: !0,
                        br: g.d.readFixed32,
                        bw: g.h.writeRepeatedFixed32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = g.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return g.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return g.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return g.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              g.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_PublishDraft_Response";
            }),
            t
          );
        })(y),
        q = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.faq || g.a(t.M()),
              y.initialize(a, r, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = { proto: t, fields: { faq: { n: 1, c: A } } }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = g.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return g.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return g.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return g.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              g.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_PreviewDraft_Response";
            }),
            t
          );
        })(y),
        T = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.faq || g.a(t.M()),
              y.initialize(a, r, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = { proto: t, fields: { faq: { n: 1, c: A } } }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = g.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return g.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return g.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return g.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              g.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetFAQ_Response";
            }),
            t
          );
        })(y),
        I = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.faq || g.a(t.M()),
              y.initialize(a, r, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = { proto: t, fields: { faq: { n: 1, c: A } } }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = g.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return g.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return g.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return g.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              g.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetFAQVersion_Response";
            }),
            t
          );
        })(y),
        z = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.steamid || g.a(t.M()),
              y.initialize(a, r, 0, -1, void 0, null),
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
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = g.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return g.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return g.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return g.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              g.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetAllDrafts_Request";
            }),
            t
          );
        })(y),
        G = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.summary || g.a(t.M()),
              y.initialize(a, r, 0, -1, [2], null),
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
                      summary: { n: 1, c: F },
                      draft: { n: 2, c: A, r: !0, q: !0 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = g.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return g.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return g.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return g.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              g.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetAllDrafts_Response";
            }),
            t
          );
        })(y),
        P = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.faq || g.a(t.M()),
              y.initialize(a, r, 0, -1, [1], null),
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
                    fields: { faq: { n: 1, c: F, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = g.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return g.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return g.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return g.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              g.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetAllFAQsForClan_Response";
            }),
            t
          );
        })(y),
        U = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.steamid || g.a(t.M()),
              y.initialize(a, r, 0, -1, void 0, null),
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
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = g.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return g.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return g.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return g.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              g.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Request";
            }),
            t
          );
        })(y),
        V = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.faqs || g.a(t.M()),
              y.initialize(a, r, 0, -1, [1], null),
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
                    fields: { faqs: { n: 1, c: A, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = g.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return g.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return g.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return g.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              g.f(t.M(), e, r);
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Response";
            }),
            t
          );
        })(y),
        W = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return y.initialize(r, t, 0, -1, void 0, null), r;
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
              var r = new E.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new E.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_CheckFAQPermissions_Response";
            }),
            t
          );
        })(y);
      !(function (e) {
        (e.Create = function (e, t) {
          return e.SendMsg("ClanFAQS.Create#1", t, B, { ePrivilege: 1 });
        }),
          (e.Delete = function (e, t) {
            return e.SendMsg("ClanFAQS.Delete#1", t, j, { ePrivilege: 1 });
          }),
          (e.UpdateInternalName = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateInternalName#1", t, Q, {
              ePrivilege: 1,
            });
          }),
          (e.SetVisibility = function (e, t) {
            return e.SendMsg("ClanFAQS.SetVisibility#1", t, D, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateDraft#1", t, L, { ePrivilege: 1 });
          }),
          (e.PublishDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.PublishDraft#1", t, R, {
              ePrivilege: 1,
            });
          }),
          (e.PreviewDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.PreviewDraft#1", t, q, {
              ePrivilege: 1,
            });
          }),
          (e.GetFAQ = function (e, t) {
            return e.SendMsg("ClanFAQS.GetFAQ#1", t, T, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetFAQVersion = function (e, t) {
            return e.SendMsg("ClanFAQS.GetFAQVersion#1", t, I, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllDrafts = function (e, t) {
            return e.SendMsg("ClanFAQS.GetAllDrafts#1", t, G, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllFAQsForClan = function (e, t) {
            return e.SendMsg("ClanFAQS.GetAllFAQsForClan#1", t, P, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllLatestVersionPublishedFAQS = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.GetAllLatestVersionPublishedFAQS#1",
              t,
              V,
              { ePrivilege: 1 }
            );
          }),
          (e.CheckFAQPermissions = function (e, t) {
            return e.SendMsg("ClanFAQS.CheckFAQPermissions#1", t, W, {
              ePrivilege: 1,
            });
          });
      })(a || (a = {}));
      var k = r("lkRc"),
        x = (function () {
          function e() {
            (this.m_mapFAQSummaries = new Map()),
              (this.m_mapFAQPublishedContent = new Map()),
              (this.m_setFAQLoadedAllLatestVersions = new Set()),
              (this.m_mapFAQDrafts = new Map()),
              (this.m_bHasFAQEdit = !1),
              (this.m_steamInterface = null),
              "dev" == k.c.WEB_UNIVERSE && (window.g_FAQStore = this),
              k.c.IN_CLIENT ||
                (this.ReadInitialPayload(), this.SetUpWebAPIInterface()),
              k.c.IN_LIBRARY || (this.m_clanSteamID = new h.a(k.b.CLANSTEAMID));
          }
          return (
            (e.Get = function () {
              return e.s_Singleton || (e.s_Singleton = new e()), e.s_Singleton;
            }),
            (e.Init = function (t) {
              e.Get().m_steamInterface = t;
            }),
            (e.prototype.SetUpWebAPIInterface = function () {
              var e = Object(k.g)("faqstore", "application_config"),
                t = null == e ? void 0 : e.webapi_token;
              this.m_steamInterface = new v.a(k.c.WEBAPI_BASE_URL, t);
            }),
            (e.prototype.ReadInitialPayload = function () {
              var e = Object(k.g)("faqstore", "application_config");
              if (
                (("dev" != k.c.WEB_UNIVERSE && "beta" != k.c.WEB_UNIVERSE) ||
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
                "dev" == k.c.WEB_UNIVERSE && console.error("Invalid payload");
            }),
            (e.prototype.InternalLoadLatestVersionPublishedFAQ = function (
              e,
              t
            ) {
              var r = this;
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
                var t, r, i, o, l, s, c;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      (t = d.b.Init(S)).Body().set_steamid(k.b.CLANSTEAMID),
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
                        1 == (o = i.GetEResult())
                          ? ((l = {
                              faq_id: i.Body().faq_id(),
                              internal_name: e,
                            }),
                            this.m_mapFAQSummaries.set(l.faq_id, l))
                          : console.error(
                              "FAQStore.CreateFAQ: Create request failed:",
                              o
                            ),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (s = n.sent()),
                        (c = Object(b.a)(s)),
                        console.error(
                          "FAQStore.CreateFAQ: caught error " + c.strErrorMsg,
                          c
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
                      (o = d.b.Init(M)).Body().set_steamid(k.b.CLANSTEAMID),
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
                      (t = d.b.Init(O)).Body().set_steamid(k.b.CLANSTEAMID),
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
            (e.prototype.GetClanSteamID = function () {
              return this.m_clanSteamID;
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
                      (t = d.b.Init(z)).Body().set_steamid(k.b.CLANSTEAMID),
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
                      (i = d.b.Init(w)).Body().set_steamid(k.b.CLANSTEAMID),
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
                      (r = d.b.Init(N)).Body().set_steamid(k.b.CLANSTEAMID),
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
                      (r = d.b.Init(C)).Body().set_steamid(k.b.CLANSTEAMID),
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
                      (t = d.b.Init(U)).Body().set_steamid(k.b.CLANSTEAMID),
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
        H = /^[0-9a-fA-F]+$/;
      function K(e) {
        var t = null == e ? void 0 : e.replace(/-/g, "");
        return 16 == (null == t ? void 0 : t.length) && H.test(t)
          ? c.a.fromString(t, !0, 16).toString()
          : null;
      }
      function Y(e) {
        var t = l.a.useState(x.Get().GetFAQDraftContent(e)),
          r = t[0],
          a = t[1],
          n = l.a.useState(x.Get().BHasFAQDraftContent(e)),
          i = n[0],
          s = n[1];
        return (
          Object(o.useEffect)(
            function () {
              x.Get()
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
      function J(e) {
        var t = l.a.useState(
            x.Get().BHasLoadedAllLatestVersionPublishedFAQS(e)
          ),
          r = t[0],
          a = t[1];
        return (
          Object(o.useEffect)(
            function () {
              x.Get().BHasLoadedAllLatestVersionPublishedFAQS(e) ||
                x
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
      var X,
        Z = r("Mgs7"),
        $ = r("YLyR"),
        ee = r("Ee63"),
        te = r.n(ee),
        re = r("Jqb/"),
        ae = r("ka0M"),
        ne = r("6Y59"),
        ie = r("0OaU"),
        oe = r("exH9"),
        le = r("TLQK"),
        se = r("bS9Q"),
        ce = r("Lcls"),
        ue = r.n(ce),
        de = r("Ty5D"),
        me = r("55Ip");
      function fe(e) {
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
      })(X || (X = {}));
      var be = function (e) {
        var t = (function (e, t) {
          var r = "/faqs/" + k.b.VANITY_ID + "/";
          switch (e) {
            case X.k_eView:
            case X.k_eCommunityView:
              r += "view/" + fe(t);
              break;
            case X.k_eCommunityEdit:
              r += "edit/" + fe(t);
              break;
            case X.k_eCommunityDashboard:
              r += "dashboard";
              break;
            case X.k_eCommunityPreview:
              r += "preview/" + fe(t);
          }
          return r;
        })(e.route, e.faqid);
        return e.bForceRedirect
          ? o.createElement(de.b, { push: !0, to: t })
          : e.bForceAnchor
          ? o.createElement(
              "a",
              {
                href: k.c.COMMUNITY_BASE_URL.slice(0, -1) + t,
                className: e.className,
              },
              e.children
            )
          : o.createElement(
              me.b,
              { to: t, className: e.className },
              e.children
            );
      };
      var _e = Object(i.a)(function (e) {
          var t = [x.Get().GetAllFAQSummaries(), !0],
            r = t[0],
            a = t[1],
            n = l.a.useState(1),
            i = n[0],
            s = n[1],
            c = r.sort(function (e, t) {
              return 1 == i
                ? Object(se.f)(e.internal_name, t.internal_name)
                : t.last_update_timestamp - e.last_update_timestamp;
            });
          return (
            Object(o.useEffect)(function () {
              x.Get().RemoveAllDirtyDrafts();
            }, []),
            l.a.createElement(
              "div",
              { className: ue.a.FAQDashboardPage },
              l.a.createElement(
                "div",
                { className: ue.a.FAQDashboard },
                l.a.createElement(pe, null),
                l.a.createElement(
                  "div",
                  { className: ue.a.DashboardListHeaderRow },
                  l.a.createElement(
                    "div",
                    {
                      className: Object(oe.a)(
                        ue.a.EntryColumn,
                        ue.a.ClickableHeader,
                        ue.a.NameCol,
                        1 == i && ue.a.Selected
                      ),
                      onClick: function () {
                        return s(1);
                      },
                    },
                    Object(le.f)("#FAQDashboard_NameColumn"),
                    l.a.createElement(
                      "div",
                      { className: ue.a.DownArrow },
                      l.a.createElement(ne.q, null)
                    )
                  ),
                  l.a.createElement(
                    "div",
                    {
                      className: Object(oe.a)(
                        ue.a.EntryColumn,
                        ue.a.ClickableHeader,
                        ue.a.RightAligned,
                        ue.a.TimeCol,
                        2 == i && ue.a.Selected
                      ),
                      onClick: function () {
                        return s(2);
                      },
                    },
                    Object(le.f)("#FAQDashboard_DatesColumn"),
                    l.a.createElement(
                      "div",
                      { className: ue.a.DownArrow },
                      l.a.createElement(ne.q, null)
                    )
                  ),
                  l.a.createElement(
                    "div",
                    {
                      className: Object(oe.a)(
                        ue.a.EntryColumn,
                        ue.a.RightAligned,
                        ue.a.VisCol
                      ),
                    },
                    Object(le.f)("#FAQDashboard_VisibilityColumn")
                  )
                ),
                0 == r.length &&
                  l.a.createElement(
                    "div",
                    { className: ue.a.ErrorMsg },
                    Object(le.f)("#FAQDashboard_Empty")
                  ),
                c.map(function (e) {
                  return l.a.createElement(ge, { key: e.faq_id, summary: e });
                }),
                !a &&
                  l.a.createElement(ie.a, {
                    position: "center",
                    size: "xlarge",
                  })
              )
            )
          );
        }),
        pe = function (e) {
          var t = l.a.useCallback(function () {
            return Object(ae.b)(l.a.createElement(ve, null), window, {
              strTitle: Object(le.f)("#FAQDashboard_CreateFAQButton"),
            });
          }, []);
          return l.a.createElement(
            "div",
            { className: ue.a.DashboardHeader },
            l.a.createElement(
              "div",
              { className: ue.a.DashboardHeaderTitle },
              Object(le.f)("#FAQDashboard_Header")
            ),
            l.a.createElement(
              "div",
              { className: ue.a.DashboardCreateFAQButtonCtn },
              l.a.createElement(
                Z.r,
                { onClick: t },
                Object(le.f)("#FAQDashboard_CreateFAQButton")
              )
            )
          );
        },
        ve = function (e) {
          var t = l.a.useState(""),
            r = t[0],
            a = t[1];
          return l.a.createElement(
            re.d,
            {
              onOK: function () {
                return x.Get().CreateFAQ(r);
              },
              bOKDisabled: 0 == r.length,
              closeModal: e.closeModal,
              className: ue.a.CreateFAQDialog,
            },
            l.a.createElement(
              Z.l,
              null,
              Object(le.f)("#FAQDashboard_CreateFAQButton")
            ),
            l.a.createElement(
              Z.b,
              null,
              l.a.createElement(
                Z.c,
                null,
                Object(le.f)("#FAQDashboard_CreateFAQInstructions"),
                l.a.createElement("input", {
                  type: "text",
                  className: ue.a.NameInput,
                  value: r,
                  placeholder: Object(le.f)("#FAQDashboard_NamePlaceHolder"),
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
            a = Object(oe.a)(
              ue.a.SmallData,
              !t && ue.a.Never,
              r && ue.a.Warning
            ),
            n = Object(le.f)("#FAQDashboard_TimeNever");
          if (t) {
            var i = Date.now() / 1e3 - t;
            n = i < 86400 ? Object(le.q)(i, !1, !0) : Object(le.o)(t);
          }
          return l.a.createElement(
            $.f,
            { className: a, rtFullDate: t, stylesmodule: te.a },
            n
          );
        },
        Ee = function (e) {
          var t = e.bIsVisible;
          return l.a.createElement(
            "div",
            {
              className: Object(oe.a)(
                ue.a.SmallData,
                ue.a.State,
                t ? ue.a.Visible : ue.a.Hidden
              ),
            },
            Object(le.f)(
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
            be,
            {
              route: X.k_eCommunityEdit,
              faqid: r,
              className: ue.a.DashboardEntry,
            },
            l.a.createElement(
              "div",
              { className: Object(oe.a)(ue.a.EntryColumn, ue.a.NameCol) },
              l.a.createElement("div", { className: ue.a.EntryInternalName }, a)
            ),
            l.a.createElement(
              "div",
              { className: Object(oe.a)(ue.a.EntryColumn, ue.a.TimeCol) },
              l.a.createElement(
                "div",
                { className: ue.a.EntryRow },
                l.a.createElement(
                  "div",
                  { className: ue.a.SmallLabel },
                  Object(le.f)("#FAQDashboard_UpdateTimestampLabel")
                ),
                l.a.createElement(he, { rtTimestamp: i })
              ),
              l.a.createElement(
                "div",
                { className: ue.a.EntryRow },
                l.a.createElement(
                  "div",
                  { className: ue.a.SmallLabel },
                  Object(le.f)("#FAQDashboard_PublishTimestampLabel")
                ),
                l.a.createElement(he, {
                  rtTimestamp: n,
                  bTimestampWarning: n < i,
                })
              )
            ),
            l.a.createElement(
              "div",
              { className: Object(oe.a)(ue.a.EntryColumn, ue.a.VisCol) },
              l.a.createElement(
                "div",
                { className: ue.a.EntryRow },
                l.a.createElement(
                  "div",
                  { className: ue.a.SmallLabel },
                  Object(le.f)("#FAQDashboard_VisibleInGlobalRealmLabel")
                ),
                l.a.createElement(Ee, { bIsVisible: s })
              ),
              l.a.createElement(
                "div",
                { className: ue.a.EntryRow },
                l.a.createElement(
                  "div",
                  { className: ue.a.SmallLabel },
                  Object(le.f)("#FAQDashboard_VisibleInChinaRealmLabel")
                ),
                l.a.createElement(Ee, { bIsVisible: o })
              )
            )
          );
        },
        ye = function (e) {
          return o.createElement(de.a, {
            message: function (e) {
              var t,
                r,
                a = x.Get().GetLoadedDraftObjs();
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
                (e.pathname != Rt.DashboardFAQ(k.b.VANITY_ID) &&
                  !(null === (r = e.pathname) || void 0 === r
                    ? void 0
                    : r.startsWith(
                        Rt.ViewFAQ(k.b.VANITY_ID, "").slice(0, -1)
                      ))) ||
                Object(le.f)("#EventEditor_UnsavedChanges")
              );
            },
          });
        },
        Fe = r("Yamg"),
        Ae = r("I/R6"),
        Se = r("4P4B"),
        Be = r("IjL/"),
        Oe = r("fpVW"),
        je = r.n(Oe),
        Ce = r("NrWE"),
        Qe = r("BXmN"),
        we = r.n(Qe),
        De = r("mgoM"),
        Me = r("Qcoi"),
        Le = r("ggIn"),
        Ne = r("yKSN"),
        Re = r("5E+2"),
        qe = r("X3Ds"),
        Te = r("P2lf"),
        Ie = "title",
        ze = "content";
      var Ge = function (e) {
          var t = e.draft,
            r = e.eLanguage;
          return o.createElement(
            "div",
            { className: Oe.FlexRowContainer },
            o.createElement(Pe, { draft: t, eLanguage: r }),
            o.createElement(Ne.b, {
              strToolTip: Object(le.f)("#FAQEditor_Loc_Import_ttip"),
              strLabel: Object(le.f)("#EventEditor_Loc_Import_Short"),
              fnOnImportLocData: function (e, r) {
                return (function (e, t, r) {
                  var a = new Set(),
                    n = t.GetSortedTokenList();
                  return (
                    Object(u.G)(function () {
                      r.forEach(function (r) {
                        n.forEach(function (a) {
                          var n = t.GetLocalization(a, r) || "";
                          if (a === Ie) {
                            var i = e.GetDraftTitle(r);
                            (n || (i && i.length > 0)) && e.SetDraftTitle(r, n);
                          }
                          if (a === ze) {
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
        Pe = function (e) {
          var t = e.draft,
            r = e.eLanguage;
          return o.createElement(
            Re.a,
            { toolTipContent: Object(le.f)("#FAQEditor_Loc_Export_ttip") },
            o.createElement(
              "div",
              {
                className: Oe.EditPreviewButton,
                onClick: function (e) {
                  Object(ae.d)(
                    o.createElement(
                      re.d,
                      {
                        strTitle: Object(le.f)("#EventEditor_Loc_Export"),
                        bAlertDialog: !0,
                      },
                      o.createElement(Ne.a, {
                        fnGetLocData: function () {
                          return (function (e, t) {
                            for (var r, a, n = new Te.b(), i = 0; i < 30; ++i)
                              (e.BHasSomeTextForLanguage(i) || 0 == t) &&
                                (n.SetLocalization(
                                  Ie,
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
                    Object(qe.m)(e)
                  );
                },
              },
              Object(le.f)("#EventEditor_Loc_Export_Short")
            )
          );
        },
        Ue = function (e) {
          return l.a.createElement(
            Re.a,
            { toolTipContent: Object(le.f)("#FAQEditor_DeleteAction_ttip") },
            l.a.createElement(
              "div",
              {
                className: Object(oe.a)(Oe.EditPreviewButton, Oe.Delete),
                onClick: function (t) {
                  Object(ae.d)(
                    l.a.createElement(Ve, { draft: e.draft }),
                    Object(qe.m)(t)
                  );
                },
              },
              Object(le.f)("#FAQEditor_DeleteAction")
            )
          );
        },
        Ve = function (e) {
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
              Object(le.f)("#FAQEditor_DeleteDesc")
            );
          if (i)
            h = l.a.createElement(ie.a, {
              position: "center",
              size: "medium",
              string: Object(le.f)("#FAQEditor_DeletingInProgress"),
            });
          else if (c)
            h = l.a.createElement(
              "div",
              null,
              Object(le.f)("#FAQEditor_DeleteSuccess")
            );
          else if (m)
            h = l.a.createElement(
              "div",
              null,
              Object(le.f)(
                "Error_Description",
                m,
                Object(le.f)("#Error_GenericFailureDescription")
              )
            );
          else if (p)
            return l.a.createElement(be, { route: X.k_eCommunityDashboard });
          return l.a.createElement(
            Be.a,
            null,
            l.a.createElement(
              re.h,
              { onEscKeypress: r },
              l.a.createElement(
                Z.f,
                null,
                l.a.createElement(
                  Z.l,
                  null,
                  Object(le.f)("#FAQEditor_DeleteAction")
                ),
                l.a.createElement(Z.b, null, l.a.createElement(Z.c, null, h)),
                l.a.createElement(
                  Z.k,
                  null,
                  l.a.createElement(Z.o, {
                    onCancel: c
                      ? function () {
                          return v(!0);
                        }
                      : r,
                    bOKDisabled: Boolean(i || c || m),
                    strOKText: Object(le.f)("#FAQEditor_DeleteAction"),
                    strCancelText: Boolean(i || c || m)
                      ? Object(le.f)("#Button_OK")
                      : void 0,
                    onOK: function () {
                      return Object(n.b)(void 0, void 0, void 0, function () {
                        return Object(n.e)(this, function (e) {
                          return (
                            o(!0),
                            x
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
        We = function (e) {
          return l.a.createElement(
            Re.a,
            { toolTipContent: Object(le.f)("#FAQEditor_ChangeVisible_ttip") },
            l.a.createElement(
              "div",
              {
                className: Oe.EditPreviewButton,
                onClick: function (t) {
                  Object(ae.d)(
                    l.a.createElement(ke, { draft: e.draft }),
                    Object(qe.m)(t)
                  );
                },
              },
              Object(le.f)("#FAQEditor_EditVisible")
            )
          );
        },
        ke = function (e) {
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
            _ = x.Get().GetFAQArticleSummary(t.GetFAQID()),
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
                Object(le.f)("#FAQEditor_ChangeVisible_Desc")
              ),
              l.a.createElement(Z.e, {
                label: Object(le.f)("#FAQEditor_VisibleInGlobal"),
                checked: v,
                onChange: function (e) {
                  return h(e);
                },
              }),
              l.a.createElement(Z.e, {
                label: Object(le.f)("#FAQEditor_VisibleInChina"),
                checked: g,
                tooltip: Object(le.f)("#FAQEditor_VisibleInChina_ttip"),
                onChange: function (e) {
                  return y(e);
                },
              })
            );
          return (
            i
              ? (F = l.a.createElement(ie.a, {
                  position: "center",
                  size: "medium",
                  string: Object(le.f)("#FAQEditor_ChangeVisible_InProgress"),
                }))
              : c
              ? (F = l.a.createElement(
                  "div",
                  null,
                  Object(le.f)("#FAQEditor_ChangeVisible_Success")
                ))
              : m &&
                (F = l.a.createElement(
                  "div",
                  null,
                  Object(le.f)(
                    "Error_Description",
                    m,
                    Object(le.f)("#Error_GenericFailureDescription")
                  )
                )),
            l.a.createElement(
              Be.a,
              null,
              l.a.createElement(
                re.h,
                { onEscKeypress: r },
                l.a.createElement(
                  Z.f,
                  null,
                  l.a.createElement(
                    Z.l,
                    null,
                    Object(le.f)("#FAQEditor_ChangeVisible")
                  ),
                  l.a.createElement(Z.b, null, l.a.createElement(Z.c, null, F)),
                  l.a.createElement(
                    Z.k,
                    null,
                    l.a.createElement(Z.o, {
                      onCancel: r,
                      bOKDisabled: Boolean(i || c || m),
                      strOKText: Object(le.f)("#FAQEditor_ChangeVisible"),
                      strCancelText: Boolean(i || c || m)
                        ? Object(le.f)("#Button_OK")
                        : void 0,
                      onOK: function () {
                        return Object(n.b)(void 0, void 0, void 0, function () {
                          return Object(n.e)(this, function (e) {
                            return (
                              o(!0),
                              x
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
        xe = Object(i.a)(function (e) {
          var t = e.draft.BNeedsSaving();
          return l.a.createElement(
            Re.a,
            {
              toolTipContent: Object(le.f)(
                t ? "#FAQPublish_SaveRequire_ttip" : "#FAQPublish_Publish_ttip"
              ),
            },
            l.a.createElement(
              "div",
              {
                className: Oe.EditPreviewButton,
                onClick: function (r) {
                  Object(ae.d)(
                    t
                      ? l.a.createElement(re.f, {
                          strDescription: Object(le.f)(
                            "#FAQPublish_SaveRequire_ttip"
                          ),
                        })
                      : l.a.createElement(He, { draft: e.draft }),
                    Object(qe.m)(r)
                  );
                },
              },
              Object(le.f)("#FAQPublish_Publish")
            )
          );
        }),
        He = function (e) {
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
            p = J(r.GetFAQID())[0],
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
            y = x.Get().GetFAQArticleSummary(r.GetFAQID()),
            F = null;
          return (
            (F = p
              ? o
                ? l.a.createElement(ie.a, {
                    position: "center",
                    size: "medium",
                    string: Object(le.f)("#FAQPublish_Publishing"),
                  })
                : u
                ? l.a.createElement(
                    "div",
                    null,
                    Object(le.f)("#FAQPublish_Success")
                  )
                : f
                ? l.a.createElement(
                    "div",
                    null,
                    Object(le.f)(
                      "#Error_Description",
                      f,
                      Object(le.f)("#Error_GenericFailureDescription")
                    )
                  )
                : y
                ? l.a.createElement(
                    "div",
                    null,
                    l.a.createElement(
                      "div",
                      null,
                      Object(le.f)("#FAQPublish_Desc")
                    ),
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    l.a.createElement(
                      "div",
                      null,
                      Object(le.f)("#FAQPublish_Desc2")
                    ),
                    l.a.createElement("br", null),
                    null !==
                      (t = x
                        .Get()
                        .GetDraftWithUnpublishedChanges(r)
                        .map(function (e) {
                          return l.a.createElement(Ke, {
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
                          Object(le.f)("#FAQPublish_None")
                        )
                  )
                : l.a.createElement(
                    "div",
                    null,
                    Object(le.f)("#FAQPublish_LoadError")
                  )
              : l.a.createElement(ie.a, {
                  size: "small",
                  position: "center",
                  string: Object(le.f)("#FAQPublish_PublishWait"),
                })),
            l.a.createElement(
              Be.a,
              null,
              l.a.createElement(
                re.h,
                { onEscKeypress: a },
                l.a.createElement(
                  Z.f,
                  null,
                  l.a.createElement(
                    Z.l,
                    null,
                    Object(le.f)("#FAQPublish_Publish")
                  ),
                  l.a.createElement(Z.b, null, l.a.createElement(Z.c, null, F)),
                  l.a.createElement(
                    Z.k,
                    null,
                    l.a.createElement(Z.o, {
                      onCancel: a,
                      bOKDisabled: Boolean(o || u || f || 0 == h.length),
                      strOKText: Object(le.f)("#FAQPublish_Publish"),
                      strCancelText: Boolean(o || u || f)
                        ? Object(le.f)("#Button_OK")
                        : void 0,
                      onOK: function () {
                        return Object(n.b)(void 0, void 0, void 0, function () {
                          return Object(n.e)(this, function (e) {
                            return (
                              s(!0),
                              x
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
        Ke = function (e) {
          var t,
            r = e.draft,
            a = e.eLang,
            n = e.fnOnChecked,
            i = r.GetLastSaveMetaData(a),
            o = h.a.InitFromAccountID(Number.parseInt(i.author_account_id)),
            s = Object(Me.b)(o.ConvertTo64BitString()),
            c = (s[0], s[1]),
            u = Object(le.f)(
              "#FAQPublish_DraftInfo",
              Object(le.f)("Language_" + Object(De.a)(a)),
              Object(le.k)(i.timestamp) + " @ " + Object(le.m)(i.timestamp),
              null !== (t = null == c ? void 0 : c.persona_name) && void 0 !== t
                ? t
                : i.author_account_id
            );
          return l.a.createElement(Z.e, {
            label: u,
            onChange: function (e) {
              return n(e, a);
            },
          });
        },
        Ye = Object(i.a)(function (e) {
          var t = e.draft,
            r = e.eLanguage,
            a = new Array(),
            n = new Array(),
            i = x.Get().GetFAQArticleSummary(t.GetFAQID()),
            o = Boolean(i.last_publish_timestamp);
          if (o) {
            var s = x.Get().GetAllLatestPublishedForFAQ(t.GetFAQID());
            if (s)
              for (var c = 0; c < 30; c++) {
                var u = s.get(c);
                u &&
                  n.push(
                    l.a.createElement(Je, {
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
                l.a.createElement(Je, {
                  key: "draft_" + t.GetFAQID() + "_" + d,
                  metadata: m,
                })
              );
          }
          return l.a.createElement(
            Be.a,
            null,
            l.a.createElement(
              "div",
              { className: Le.LeftMenu },
              l.a.createElement(
                "div",
                { className: Le.Section },
                l.a.createElement(
                  "div",
                  { className: Le.SectionTitle },
                  Object(le.f)("#FAQDashboard_VisibilityColumn"),
                  " "
                ),
                l.a.createElement(
                  "div",
                  { className: Le.SectionContents },
                  l.a.createElement(
                    "div",
                    { className: Le.VisibilityCtn },
                    l.a.createElement(
                      "div",
                      { className: Object(oe.a)(Le.StatusRow, Le.Global) },
                      Object(le.f)("#FAQDashboard_VisibleInGlobalRealmLabel"),
                      " ",
                      l.a.createElement(Ee, {
                        bIsVisible: i.visible_in_global_realm,
                      })
                    ),
                    l.a.createElement(
                      "div",
                      { className: Object(oe.a)(Le.StatusRow, Le.China) },
                      Object(le.f)("#FAQDashboard_VisibleInChinaRealmLabel"),
                      " ",
                      l.a.createElement(Ee, {
                        bIsVisible: i.visible_in_china_realm,
                      })
                    ),
                    l.a.createElement(
                      "div",
                      { className: Le.StatusBtnCtn },
                      l.a.createElement(We, { draft: t })
                    )
                  ),
                  l.a.createElement(
                    "div",
                    { className: Le.PublishCtn },
                    l.a.createElement(
                      "div",
                      { className: Le.PublishStatus },
                      Object(le.f)("#FAQStatus_DraftVersionsDesc")
                    ),
                    l.a.createElement(
                      "div",
                      { className: Le.PublishBtn },
                      l.a.createElement(xe, { draft: t })
                    )
                  )
                )
              ),
              l.a.createElement(
                "div",
                { className: Le.Section },
                l.a.createElement(
                  "div",
                  { className: Le.SectionTitle },
                  Object(le.f)("#FAQDashboard_LocalizationSection"),
                  " "
                ),
                l.a.createElement(
                  "div",
                  { className: Le.SectionContents },
                  Object(le.f)("#FAQDashboard_LocalizationSectionDesc"),
                  l.a.createElement("br", null),
                  l.a.createElement(Ge, { draft: t, eLanguage: r })
                )
              ),
              l.a.createElement(
                "div",
                { className: Le.Section },
                l.a.createElement(
                  "div",
                  { className: Le.SectionTitle },
                  Object(le.f)("#FAQStatus_LiveVersionHeader")
                ),
                o
                  ? l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        "table",
                        { className: Le.FaqStatusTable },
                        l.a.createElement(
                          "thead",
                          null,
                          l.a.createElement(
                            "tr",
                            null,
                            l.a.createElement(
                              "th",
                              null,
                              Object(le.f)("#LanguageTitle")
                            ),
                            l.a.createElement("th", null, "V"),
                            l.a.createElement(
                              "th",
                              null,
                              Object(le.f)("#EventEditor_Visibility_Published")
                            ),
                            l.a.createElement(
                              "th",
                              null,
                              Object(le.f)("#FAQStatus_Editor")
                            )
                          )
                        ),
                        l.a.createElement("tbody", null, n)
                      )
                    )
                  : l.a.createElement(
                      "div",
                      null,
                      Object(le.f)("#FAQStatus_NotVisible")
                    )
              ),
              l.a.createElement(
                "div",
                { className: Le.Section },
                l.a.createElement(
                  "div",
                  { className: Le.SectionTitle },
                  Object(le.f)("#FAQStatus_DraftVersions")
                ),
                l.a.createElement(
                  "div",
                  null,
                  l.a.createElement(
                    "table",
                    { className: Le.FaqStatusTable },
                    l.a.createElement(
                      "thead",
                      null,
                      l.a.createElement(
                        "tr",
                        null,
                        l.a.createElement(
                          "th",
                          null,
                          Object(le.f)("#LanguageTitle")
                        ),
                        l.a.createElement(
                          "th",
                          null,
                          Object(le.f)("#FAQStatus_LastUpdated")
                        ),
                        l.a.createElement(
                          "th",
                          null,
                          Object(le.f)("#FAQStatus_Editor")
                        )
                      )
                    ),
                    l.a.createElement("tbody", null, a)
                  )
                )
              ),
              l.a.createElement(
                "div",
                { className: Le.Section },
                l.a.createElement(Ue, { draft: t })
              )
            )
          );
        }),
        Je = function (e) {
          var t,
            r = e.metadata,
            a = h.a.InitFromAccountID(Number.parseInt(r.author_account_id)),
            n = Object(Me.b)(a.ConvertTo64BitString()),
            i = (n[0], n[1]);
          return l.a.createElement(
            "tr",
            null,
            l.a.createElement(
              "td",
              null,
              Object(le.f)("#Language_" + Object(De.a)(r.language))
            ),
            Boolean(Number.parseInt(r.version) > 0) &&
              l.a.createElement("td", null, r.version),
            l.a.createElement(
              "td",
              null,
              Object(le.k)(r.timestamp),
              " @ ",
              Object(le.m)(r.timestamp)
            ),
            l.a.createElement(
              "td",
              null,
              l.a.createElement(
                "a",
                {
                  href:
                    k.c.COMMUNITY_BASE_URL +
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
        Xe = r("vBFs"),
        Ze = (r("jZUi"), r("wst7")),
        $e = r("eYkW"),
        et = r.n($e),
        tt = r("hvYe"),
        rt = r.n(tt),
        at = r("aXcg"),
        nt = Object(i.a)(function (e) {
          var t = e.draft.BNeedsSaving();
          return l.a.createElement(
            "div",
            {
              className: "btn_green_steamui btn_medium",
              onClick: function (t) {
                return Object(ae.d)(
                  l.a.createElement(it, { draft: e.draft }),
                  Object(qe.m)(t)
                );
              },
            },
            l.a.createElement(
              "span",
              null,
              !t &&
                l.a.createElement("img", {
                  className: at.SavedImage,
                  src: rt.a,
                }),
              Object(le.f)(t ? "#Button_Save" : "#Button_Saved")
            )
          );
        }),
        it = function (e) {
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
              re.e,
              { bAllowFullSize: !0, onCancel: r, closeModal: r },
              l.a.createElement(
                Z.l,
                null,
                i
                  ? l.a.createElement(
                      "div",
                      null,
                      Object(le.f)("#FAQSave_Saving")
                    )
                  : l.a.createElement(
                      "div",
                      null,
                      Object(le.f)(
                        Boolean(1 == c)
                          ? "#FAQSave_SaveSuccess"
                          : "#FAQSave_Error"
                      ),
                      " "
                    )
              ),
              l.a.createElement(
                Z.b,
                null,
                i
                  ? l.a.createElement(ie.a, {
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
                            Object(le.f)("#FAQSave_SaveSuccess_desc")
                          )
                        : l.a.createElement(
                            "div",
                            null,
                            Object(le.f)(
                              "#Error_Description",
                              c,
                              Object(le.f)("#Error_GenericFailureDescription")
                            )
                          )
                    )
              ),
              l.a.createElement(
                Z.k,
                null,
                !i &&
                  l.a.createElement(
                    Z.r,
                    { onClick: r },
                    Object(le.f)("#Button_OK")
                  )
              )
            )
          );
        },
        ot = r("6h0J"),
        lt = r.n(ot),
        st = Object(i.a)(function (e) {
          var t,
            r = e.draft,
            a = e.bPreview,
            n = r.BHasPublished();
          return l.a.createElement(
            Be.a,
            null,
            l.a.createElement(
              "div",
              {
                className: Object(oe.a)(
                  ((t = {}),
                  (t[Ze.EventEditorTopBarContainer] = !0),
                  (t[Ze.EventUnPublished] = !a && !n),
                  (t[Ze.EventPublished] = !a && n),
                  (t[et.a.FAQPreview] = a),
                  t)
                ),
              },
              l.a.createElement(
                be,
                {
                  route: a ? X.k_eCommunityEdit : X.k_eCommunityDashboard,
                  faqid: r.GetFAQID(),
                  className: je.a.EditPreviewButton,
                },
                Object(le.f)(
                  a ? "#FAQEditor_EditFAQ" : "#EventDisplay_EventsDashBtn"
                )
              ),
              l.a.createElement(
                "div",
                null,
                l.a.createElement(
                  "div",
                  { className: et.a.EditorInternalNameLabel },
                  Object(le.f)(
                    a
                      ? "#FAQEditor_InternalName_Preview"
                      : "#FAQEditor_InternalName"
                  )
                ),
                l.a.createElement(
                  "div",
                  { className: et.a.EditorInternalName },
                  r.GetFAQInternalName(),
                  l.a.createElement("img", {
                    src: lt.a,
                    onClick: function (e) {
                      return Object(ae.d)(
                        l.a.createElement(ct, { draft: r }),
                        Object(qe.m)(e)
                      );
                    },
                  })
                )
              ),
              l.a.createElement(
                "div",
                { className: je.a.EventOptions },
                l.a.createElement(Xe.a, {
                  selectedLang: Ae.a.Get().GetCurEditLanguage(),
                  fnOnLanguageChanged: Ae.a.Get().SetCurEditLanguage,
                  fnLangHasData: r.BHasSomeTextForLanguage,
                  fnIsLangSupported: function (e) {
                    return !0;
                  },
                  fnLastUpdateRTime: r.GetLastTimeLanguageUpdated,
                }),
                !a &&
                  l.a.createElement(
                    be,
                    {
                      route: X.k_eCommunityPreview,
                      faqid: r.GetFAQID(),
                      className: je.a.EditPreviewButton,
                    },
                    Object(le.f)("#Button_Preview")
                  )
              )
            )
          );
        }),
        ct = function (e) {
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
            re.e,
            { bAllowFullSize: !0, onCancel: t, closeModal: t },
            l.a.createElement(
              Z.l,
              null,
              Object(le.f)("#FAQEditor_ChangeInternalName")
            ),
            l.a.createElement(
              Z.b,
              null,
              l.a.createElement(
                "div",
                null,
                Object(le.f)("#FAQEditor_ChangeInternalName_desc")
              ),
              l.a.createElement("input", {
                type: "text",
                value: i,
                placeholder: Object(le.f)("#FAQEditor_ChangeInternalName"),
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
                l.a.createElement(ie.a, {
                  string: Object(le.f)("#Updating"),
                  position: "center",
                  size: "medium",
                }),
              _ &&
                l.a.createElement(
                  "span",
                  null,
                  1 == m
                    ? Object(le.f)("#EventDisplay_Share_Success")
                    : Object(le.f)(
                        "#Error_Description",
                        m,
                        Object(le.f)("#Error_GenericFailureDescription")
                      )
                )
            ),
            l.a.createElement(
              Z.k,
              null,
              l.a.createElement(Z.o, {
                bOKDisabled: 0 == i.trim().length || c,
                onCancel: t,
                strCancelText: _
                  ? Object(le.f)("#Button_Close")
                  : Object(le.f)("#Button_Cancel"),
                onOK: function () {
                  return Object(n.b)(void 0, void 0, void 0, function () {
                    return Object(n.e)(this, function (e) {
                      return (
                        u(!0),
                        x
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
        ut = Object(i.a)(function (e) {
          var t = e.draft,
            r = (e.eLanguage, t.GetFAQID()),
            a = J(r)[0],
            n = x.Get().GetFAQArticleSummary(r),
            i =
              a &&
              n.visible_in_global_realm &&
              x.Get().BHasPublishedInGlobalRealm(r),
            o =
              a &&
              n.visible_in_china_realm &&
              x.Get().BHasPublishedInSteamChinaRealm(r);
          return l.a.createElement(
            Be.a,
            null,
            l.a.createElement(
              "div",
              { className: Object(oe.a)(je.a.SaveBackground) },
              l.a.createElement(
                "div",
                {
                  className: je.a.FlexRowWrapFlexStartContainer,
                  style: { width: "unset", justifyContent: "center" },
                },
                l.a.createElement(nt, { draft: t }),
                Boolean(i || o) &&
                  l.a.createElement(
                    "div",
                    { className: je.a.EditPreviewButton },
                    l.a.createElement(
                      be,
                      { faqid: r, route: X.k_eCommunityView },
                      Object(le.f)("#FAQEditir_ViewLiveFAQ")
                    )
                  )
              )
            )
          );
        }),
        dt = Object(i.a)(function (e) {
          var t = Y(e.faqid),
            r = t[0],
            a = t[1],
            n = l.a.useRef();
          if (!a)
            return l.a.createElement(ie.a, {
              position: "center",
              size: "xlarge",
              string: Object(le.f)("#Loading"),
            });
          if (!r)
            return l.a.createElement(_t, {
              strError: Object(le.f)("#FAQEditor_NoFAQFound"),
            });
          var i = Ae.a.Get().GetCurEditLanguage();
          return l.a.createElement(
            "div",
            null,
            l.a.createElement(st, { draft: r }),
            l.a.createElement(
              "div",
              { className: we.a.FAQEditPage },
              l.a.createElement(
                "div",
                { className: we.a.FAQMenuCtn },
                l.a.createElement(Ye, { draft: r, eLanguage: i })
              ),
              l.a.createElement(
                "div",
                { className: we.a.FAQEditorCtn },
                l.a.createElement(
                  "div",
                  { className: we.a.FAQEditor },
                  l.a.createElement(
                    "div",
                    { className: je.a.Columns },
                    l.a.createElement(
                      "div",
                      { className: Object(oe.a)(je.a.LeftCol) },
                      l.a.createElement(ft, { draft: r, eLanguage: i }),
                      l.a.createElement(bt, {
                        bbcodeEditorRef: n,
                        draft: r,
                        eLanguage: i,
                      })
                    ),
                    l.a.createElement(mt, {
                      draft: r,
                      bbcodeEditorRef: n,
                      className: je.a.RightCol,
                    })
                  )
                )
              )
            ),
            l.a.createElement(ut, { draft: r, eLanguage: i })
          );
        }),
        mt = function (e) {
          if (!Boolean(k.b.CAN_UPLOAD_IMAGES)) return null;
          var t = x.Get().GetClanSteamID(),
            r = e.draft,
            a = e.bbcodeEditorRef;
          return l.a.createElement(
            Be.a,
            null,
            l.a.createElement(
              "div",
              { className: e.className },
              l.a.createElement(
                "div",
                null,
                Object(le.f)("#FAQEditor_ImageTitle")
              ),
              l.a.createElement(Ce.a, {
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
        ft = Object(i.a)(function (e) {
          var t = e.draft,
            r = e.eLanguage;
          return l.a.createElement(
            "div",
            { className: we.a.EditorTitleField },
            l.a.createElement(
              "div",
              { className: we.a.EditorLabel },
              Object(le.f)("#FAQEditor_TitleLabel")
            ),
            l.a.createElement("input", {
              type: "text",
              className: we.a.EditorTitleFieldInput,
              value: t.GetDraftTitle(r) || "",
              placeholder: Object(le.f)("#FAQEditor_TitlePlaceHolder"),
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
        bt = Object(i.a)(function (e) {
          var t = e.draft,
            r = e.eLanguage,
            a = e.bbcodeEditorRef;
          return l.a.createElement(
            "div",
            { className: we.a.EditorPane },
            l.a.createElement(
              "div",
              { className: we.a.EditorLabel },
              Object(le.f)("#FAQEditor_ContentLabel")
            ),
            l.a.createElement(Se.a, {
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
              strPlaceholder: Object(le.f)("#FAQEditor_ContentPlaceHolder"),
              bSupportHTMLImport: !0,
              showFormatHelp: "PartnerEvents",
              classNameForTextArea: we.a.EditorPaneTextArea,
            })
          );
        }),
        _t = function (e) {
          return l.a.createElement(
            "div",
            { className: we.a.ErrorCtn },
            l.a.createElement("div", { className: we.a.ErrorMsg }, e.strError),
            l.a.createElement(
              be,
              { route: X.k_eCommunityDashboard, className: we.a.EscapeLink },
              Object(le.f)("#FAQEditor_GoToDashboard")
            )
          );
        },
        pt = r("ZeAL"),
        vt = r("nrKv"),
        ht = r("rcjX"),
        Et = function (e) {
          var t = o.useCallback(function () {
              return new vt.c(new vt.b(), 0);
            }, []),
            r = o.useRef(new pt.a(ht.c, t));
          return o.createElement(
            o.Fragment,
            null,
            r.current.ParseBBCode(e.text, {})
          );
        },
        gt = r("orBq"),
        yt = function (e) {
          var t = e.title,
            r = e.content,
            a = e.elSideBars;
          return l.a.createElement(
            "div",
            { className: gt.FAQViewPage },
            l.a.createElement(
              "div",
              { className: Oe.Columns },
              l.a.createElement(
                "div",
                { className: Object(oe.a)(Oe.LeftCol) },
                l.a.createElement("div", { className: gt.FAQTitle }, t),
                l.a.createElement(
                  "div",
                  { className: gt.FAQContent },
                  l.a.createElement(Et, { text: r })
                )
              ),
              l.a.createElement("div", { className: Oe.RightCol }, a)
            )
          );
        },
        Ft = function (e) {
          return l.a.createElement(
            "div",
            { className: gt.FAQViewPage },
            e.children
          );
        },
        At = r("3tbG"),
        St = function (e) {
          var t = e.faqContent;
          return x.Get().BHasFAQEdit()
            ? l.a.createElement(
                "div",
                null,
                l.a.createElement(
                  "div",
                  null,
                  Object(le.f)("#FAQViewer_AdminLinks")
                ),
                l.a.createElement(
                  "div",
                  null,
                  Object(le.n)(
                    "#FAQViewer_Admin_LastUpdate",
                    t.author_account_id
                      ? l.a.createElement(Bt, {
                          authorAccountID: Number.parseInt(t.author_account_id),
                        })
                      : Object(le.f)("#Sale_Debug_Unknown"),
                    l.a.createElement(
                      "span",
                      null,
                      Object(le.k)(t.timestamp) +
                        "@" +
                        Object(le.m)(t.timestamp)
                    )
                  )
                ),
                l.a.createElement(Ot, { faqContent: t }),
                l.a.createElement(
                  be,
                  {
                    faqid: t.faq_id,
                    route: X.k_eCommunityEdit,
                    bForceAnchor: !0,
                  },
                  Object(le.f)("#FAQViewer_GotoEditor")
                )
              )
            : null;
        },
        Bt = function (e) {
          var t = h.a.InitFromAccountID(e.authorAccountID),
            r = Object(Me.b)(t.ConvertTo64BitString()),
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
                    className: At.SmallAvatar,
                    src: n.avatar_url,
                    "data-miniprofile": "s" + t.ConvertTo64BitString(),
                  }),
                  l.a.createElement("span", null, n.persona_name)
                )
          );
        },
        Ot = function (e) {
          var t = e.faqContent,
            r = Y(t.faq_id),
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
            Object(le.n)(
              "#FAQViewer_DraftNewer",
              l.a.createElement(Bt, {
                authorAccountID: Number.parseInt(i.author_account_id),
              }),
              l.a.createElement(
                "span",
                null,
                Object(le.k)(i.timestamp) + "@" + Object(le.m)(i.timestamp)
              )
            )
          );
        },
        jt = r("rTBr"),
        Ct = r.n(jt),
        Qt = function (e) {
          return l.a.createElement(
            "div",
            null,
            l.a.createElement(
              "div",
              null,
              l.a.createElement(
                "div",
                null,
                Object(le.f)("#FAQViewer_SideBar_ProblemWithSteam_Title")
              ),
              l.a.createElement(
                "a",
                { href: k.c.HELP_BASE_URL },
                Object(le.f)("#FAQViewer_SideBar_ProblemWithSteam_Desc")
              )
            ),
            l.a.createElement(
              "div",
              null,
              l.a.createElement(
                "div",
                null,
                Object(le.f)("#FAQViewer_SideBar_CommunityHelp_Title")
              ),
              l.a.createElement(
                "div",
                null,
                Object(le.f)("#FAQViewer_SideBar_CommunityHelp_Desc")
              ),
              l.a.createElement(
                "a",
                { href: k.c.COMMUNITY_BASE_URL + "discussions" },
                Object(le.f)("#FAQViewer_SideBar_CommunityHelp_Link")
              )
            )
          );
        },
        wt = function (e) {
          var t = (function (e, t) {
              return [e && x.Get().GetFAQPublishedContent(e, t), !0];
            })(e.faqid, Object(De.d)(k.c.LANGUAGE)),
            r = t[0];
          return t[1]
            ? r
              ? l.a.createElement(yt, {
                  title: r.title,
                  content: r.content,
                  elSideBars: [
                    l.a.createElement(Qt, { key: "sidebar", faqContent: r }),
                    l.a.createElement(St, { key: "adminbar", faqContent: r }),
                  ],
                })
              : l.a.createElement(
                  Ft,
                  null,
                  l.a.createElement(Dt, {
                    strError: Object(le.f)("#FAQViewer_NoFAQFound"),
                  })
                )
            : l.a.createElement(
                Ft,
                null,
                l.a.createElement(ie.a, {
                  position: "center",
                  size: "xlarge",
                  string: Object(le.f)("#Loading"),
                })
              );
        },
        Dt = function (e) {
          var t,
            r =
              k.c.COMMUNITY_BASE_URL +
              (k.b.APPID
                ? "app/" +
                  (null !== (t = k.b.VANITY_ID) && void 0 !== t ? t : k.b.APPID)
                : "gid/" + k.b.CLANSTEAMID);
          return l.a.createElement(
            "div",
            { className: Ct.a.ErrorCtn },
            l.a.createElement("div", { className: Ct.a.ErrorMsg }, e.strError),
            l.a.createElement(
              "a",
              { className: Ct.a.EscapeLink, href: r },
              Object(le.f)("#FAQViewer_GoToHomepage")
            )
          );
        },
        Mt = Object(i.a)(function (e) {
          var t = Y(e.faqid),
            r = t[0],
            a = t[1],
            n = Ae.a.Get().GetCurEditLanguage();
          return a
            ? r
              ? l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(st, { draft: r, bPreview: !0 }),
                  l.a.createElement(yt, {
                    title: r.GetDraftTitleWithFallback(n, k.c.EREALM),
                    content: r.GetDraftContentWithFallback(n, k.c.EREALM),
                  }),
                  l.a.createElement(ut, { draft: r, eLanguage: n })
                )
              : l.a.createElement(
                  Ft,
                  null,
                  l.a.createElement(Dt, {
                    strError: Object(le.f)("#FAQViewer_NoFAQFound"),
                  })
                )
            : l.a.createElement(
                Ft,
                null,
                l.a.createElement(ie.a, {
                  position: "center",
                  size: "xlarge",
                  string: Object(le.f)("#Loading"),
                })
              );
        }),
        Lt = r("9w6b"),
        Nt = r("WplJ"),
        Rt = {
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
        qt = Object(i.a)(function (e) {
          var t = l.a.useState(!0),
            r = t[0],
            a = t[1];
          return (
            l.a.useEffect(function () {
              Object(n.b)(void 0, void 0, void 0, function () {
                return Object(n.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, Lt.a.InitGlobal()];
                    case 1:
                      return e.sent(), a(!1), [2];
                  }
                });
              });
            }, []),
            r
              ? l.a.createElement(ie.a, {
                  position: "center",
                  size: "medium",
                  string: Object(le.f)("#Loading"),
                })
              : l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(ye, null),
                  l.a.createElement(
                    de.e,
                    null,
                    l.a.createElement(de.c, {
                      path: Rt.ViewFAQ(":vanity_str", ":faqid"),
                      render: function (e) {
                        return l.a.createElement(Nt.a, {
                          config: {
                            "faqs-root": function () {
                              var t = K(e.match.params.faqid);
                              return l.a.createElement(wt, { faqid: t });
                            },
                          },
                        });
                      },
                    }),
                    l.a.createElement(de.c, {
                      path: Rt.EditFAQ(":vanity_str", ":faqid"),
                      render: function (e) {
                        return l.a.createElement(Nt.a, {
                          config: {
                            "faqs-root": function () {
                              var t = e.match.params.faqid;
                              if (t) {
                                var r = K(t);
                                return r
                                  ? l.a.createElement(dt, { faqid: r })
                                  : l.a.createElement(be, {
                                      route: X.k_eCommunityDashboard,
                                    });
                              }
                              return l.a.createElement(_e, null);
                            },
                          },
                        });
                      },
                    }),
                    l.a.createElement(de.c, {
                      path: Rt.DashboardFAQ(":vanity_str"),
                      render: function (e) {
                        return l.a.createElement(Nt.a, {
                          config: {
                            "faqs-root": function () {
                              return l.a.createElement(_e, null);
                            },
                          },
                        });
                      },
                    }),
                    l.a.createElement(de.c, {
                      path: Rt.PreviewFAQ(":vanity_str", ":faqid"),
                      render: function (e) {
                        return l.a.createElement(Nt.a, {
                          config: {
                            "faqs-root": function () {
                              var t = K(e.match.params.faqid);
                              return l.a.createElement(Mt, { faqid: t });
                            },
                          },
                        });
                      },
                    }),
                    l.a.createElement(de.c, { component: Tt })
                  )
                )
          );
        });
      t.default = qt;
      function Tt(e) {
        return "dev" !== k.c.WEB_UNIVERSE
          ? l.a.createElement(de.b, { to: "/" })
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
