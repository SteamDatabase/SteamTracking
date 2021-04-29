/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    "0zs6": function (e, t, r) {
      e.exports = {
        Section: "faqviewsidebar_Section_nmn4X",
        TopicHeader: "faqviewsidebar_TopicHeader_3AxoX",
        CenterButtonCtn: "faqviewsidebar_CenterButtonCtn_2Lnit",
      };
    },
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
          return It;
        });
      var a,
        n = r("mrSG"),
        i = r("TyAF"),
        o = r("q1tI"),
        l = r.n(o),
        s = r("2lpH"),
        c = r.n(s),
        u = r("2vnA"),
        m = r("bxBv"),
        d = r("kyHq"),
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
                  m = this;
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
                                c = H.Get().UpdateDraft(
                                  null === (a = s.m_summary) || void 0 === a
                                    ? void 0
                                    : a.faq_id,
                                  e,
                                  n,
                                  l
                                );
                              c
                                .then(function (t) {
                                  1 == t.eResult
                                    ? Object(u.G)(function () {
                                        m.m_mapStoredDrafts.has(e)
                                          ? ((m.m_mapStoredDrafts.get(
                                              e
                                            ).title = n),
                                            (m.m_mapStoredDrafts.get(
                                              e
                                            ).content = l),
                                            (m.m_mapStoredDrafts.get(
                                              e
                                            ).timestamp = t.rtUpdateTime))
                                          : m.m_mapStoredDrafts.set(e, {
                                              title: n,
                                              content: l,
                                              timestamp: t.rtUpdateTime,
                                            }),
                                          (m.m_mapLocalUpdates.get(
                                            e
                                          ).strTitle = null),
                                          (m.m_mapLocalUpdates.get(
                                            e
                                          ).strContent = null),
                                          m.m_summary.per_language_info.forEach(
                                            function (r) {
                                              e == r.language &&
                                                (r.last_publish_timestamp = Math.max(
                                                  r.last_publish_timestamp,
                                                  t.rtUpdateTime
                                                ));
                                            }
                                          );
                                      })
                                    : 1 == i &&
                                      (console.error(
                                        "FAQModel.SaveDraft: Response not ok " +
                                          t.eResult,
                                        t
                                      ),
                                      (i = t.eResult));
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
              void 0 === t && (t = d.d.k_ESteamRealmGlobal);
              var s = t == d.d.k_ESteamRealmChina ? 6 : 0;
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
              void 0 === t && (t = d.d.k_ESteamRealmGlobal);
              var s = t == d.d.k_ESteamRealmChina ? 6 : 0;
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
                  e.push(d.d.k_ESteamRealmGlobal),
                this.m_summary.visible_in_global_realm &&
                  e.push(d.d.k_ESteamRealmChina),
                0 == e.length && e.push(d.d.k_ESteamRealmGlobal),
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
              return Boolean(
                this.m_summary.per_language_info.some(function (e) {
                  return !!e.last_publish_timestamp;
                })
              );
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
              g.initialize(a, r, 0, -1, [6], null),
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
                      json_data: {
                        n: 5,
                        br: E.d.readString,
                        bw: E.h.writeString,
                      },
                      per_language_info: { n: 6, c: F, r: !0, q: !0 },
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
              t.prototype.language || E.a(t.M()),
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
                      language: {
                        n: 1,
                        br: E.d.readUint32,
                        bw: E.h.writeUint32,
                      },
                      last_update_timestamp: {
                        n: 2,
                        br: E.d.readFixed32,
                        bw: E.h.writeFixed32,
                      },
                      last_publish_timestamp: {
                        n: 3,
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
              return "CClanFAQSummary_CLanguageInfo";
            }),
            t
          );
        })(g),
        A = (function (e) {
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
                      internal_name: {
                        n: 2,
                        br: E.d.readString,
                        bw: E.h.writeString,
                      },
                      json_data: {
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
        O = (function (e) {
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
        j = (function (e) {
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
        C = (function (e) {
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
        Q = (function (e) {
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
              return "CClanFAQS_UpdateJsonData_Response";
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
        M = (function (e) {
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
        N = (function (e) {
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
        R = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.last_update_timestamp || E.a(t.M()),
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
                      last_update_timestamp: {
                        n: 1,
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
        q = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.last_publish_timestamp || E.a(t.M()),
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
                      last_publish_timestamp: {
                        n: 1,
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
              return "CClanFAQS_PublishDraft_Response";
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
                  (t.sm_m = { proto: t, fields: { faq: { n: 1, c: A } } }),
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
        z = (function (e) {
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
                  (t.sm_m = { proto: t, fields: { faq: { n: 1, c: A } } }),
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
        I = (function (e) {
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
                  (t.sm_m = { proto: t, fields: { faq: { n: 1, c: A } } }),
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
        G = (function (e) {
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
        P = (function (e) {
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
                      draft: { n: 2, c: A, r: !0, q: !0 },
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
        U = (function (e) {
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
        V = (function (e) {
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
        W = (function (e) {
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
                    fields: { faqs: { n: 1, c: A, r: !0, q: !0 } },
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
        k = (function (e) {
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
            return e.SendMsg("ClanFAQS.Delete#1", t, j, { ePrivilege: 1 });
          }),
          (e.UpdateInternalName = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateInternalName#1", t, Q, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateJsonData = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateJsonData#1", t, w, {
              ePrivilege: 1,
            });
          }),
          (e.SetVisibility = function (e, t) {
            return e.SendMsg("ClanFAQS.SetVisibility#1", t, M, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateDraft#1", t, R, { ePrivilege: 1 });
          }),
          (e.PublishDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.PublishDraft#1", t, q, {
              ePrivilege: 1,
            });
          }),
          (e.PreviewDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.PreviewDraft#1", t, T, {
              ePrivilege: 1,
            });
          }),
          (e.GetFAQ = function (e, t) {
            return e.SendMsg("ClanFAQS.GetFAQ#1", t, z, {
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
            return e.SendMsg("ClanFAQS.GetAllDrafts#1", t, P, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllFAQsForClan = function (e, t) {
            return e.SendMsg("ClanFAQS.GetAllFAQsForClan#1", t, U, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllLatestVersionPublishedFAQS = function (e, t) {
            return e.SendMsg(
              "ClanFAQS.GetAllLatestVersionPublishedFAQS#1",
              t,
              W,
              { ePrivilege: 1 }
            );
          }),
          (e.CheckFAQPermissions = function (e, t) {
            return e.SendMsg("ClanFAQS.CheckFAQPermissions#1", t, k, {
              ePrivilege: 1,
            });
          });
      })(a || (a = {}));
      var x = r("lkRc"),
        H = (function () {
          function e() {
            (this.m_mapFAQSummaries = new Map()),
              (this.m_mapFAQPublishedContent = new Map()),
              (this.m_setFAQLoadedAllLatestVersions = new Set()),
              (this.m_mapFAQDrafts = new Map()),
              (this.m_bHasFAQEdit = !1),
              (this.m_steamInterface = null),
              "dev" == x.c.WEB_UNIVERSE && (window.g_FAQStore = this),
              x.c.IN_LIBRARY ||
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
              var e = Object(x.g)("faqstore", "application_config"),
                t = null == e ? void 0 : e.webapi_token;
              this.m_steamInterface = new v.a(x.c.WEBAPI_BASE_URL, t);
            }),
            (e.prototype.ReadInitialPayload = function () {
              var e = Object(x.g)("faqstore", "application_config");
              if (
                (("dev" != x.c.WEB_UNIVERSE && "beta" != x.c.WEB_UNIVERSE) ||
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
                "dev" == x.c.WEB_UNIVERSE && console.error("Invalid payload");
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
                      (t = m.b.Init(B)).Body().set_steamid(x.b.CLANSTEAMID),
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
                var o, l, s, c, u, d;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      (o = m.b.Init(N)).Body().set_steamid(x.b.CLANSTEAMID),
                        o.Body().set_faq_id(e),
                        o.Body().set_language(t),
                        o.Body().set_content(i),
                        o.Body().set_title(r),
                        (l = 2),
                        (s = 0),
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
                        (c = n.sent()),
                        1 != (l = c.GetEResult())
                          ? console.error(
                              "FAQStore.UpdateDraft request failed:",
                              l
                            )
                          : (s = c.Body().last_update_timestamp()),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (u = n.sent()),
                        (d = Object(b.a)(u)),
                        console.error(
                          "FAQStore.UpdateDraft: caught error " + d.strErrorMsg,
                          d
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, { eResult: l, rtUpdateTime: s }];
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
                      (t = m.b.Init(O)).Body().set_steamid(x.b.CLANSTEAMID),
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
                      (t = m.b.Init(G)).Body().set_steamid(x.b.CLANSTEAMID),
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
                      (i = m.b.Init(D)).Body().set_steamid(x.b.CLANSTEAMID),
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
                  d = this;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (!t || 0 == t.length) return [2, 1];
                      (r = m.b.Init(L)).Body().set_steamid(x.b.CLANSTEAMID),
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
                          ? (Object(u.G)(function () {
                              l.per_language_info.forEach(function (e) {
                                t.indexOf(e.language) >= 0 &&
                                  (e.last_publish_timestamp = Math.max(
                                    e.last_publish_timestamp,
                                    o.Body().last_publish_timestamp()
                                  ));
                              }),
                                d.m_mapFAQPublishedContent.delete(e),
                                d.m_setFAQLoadedAllLatestVersions.delete(e);
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
                      (r = m.b.Init(C)).Body().set_steamid(x.b.CLANSTEAMID),
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
                      (t = m.b.Init(V)).Body().set_steamid(x.b.CLANSTEAMID),
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
        K = /^[0-9a-fA-F]+$/;
      function Y(e) {
        var t = null == e ? void 0 : e.replace(/-/g, "");
        return 16 == (null == t ? void 0 : t.length) && K.test(t)
          ? c.a.fromString(t, !0, 16).toString()
          : null;
      }
      function J(e) {
        var t = l.a.useState(H.Get().GetFAQDraftContent(e)),
          r = t[0],
          a = t[1],
          n = l.a.useState(H.Get().BHasFAQDraftContent(e)),
          i = n[0],
          s = n[1];
        return (
          Object(o.useEffect)(
            function () {
              H.Get()
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
      function X(e) {
        var t = l.a.useState(
            H.Get().BHasLoadedAllLatestVersionPublishedFAQS(e)
          ),
          r = t[0],
          a = t[1];
        return (
          Object(o.useEffect)(
            function () {
              H.Get().BHasLoadedAllLatestVersionPublishedFAQS(e) ||
                H.Get()
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
      var $,
        Z = r("Mgs7"),
        ee = r("YLyR"),
        te = r("Ee63"),
        re = r.n(te),
        ae = r("Jqb/"),
        ne = r("ka0M"),
        ie = r("6Y59"),
        oe = r("0OaU"),
        le = r("exH9"),
        se = r("TLQK"),
        ce = r("bS9Q"),
        ue = r("Lcls"),
        me = r.n(ue),
        de = r("Ty5D"),
        fe = r("55Ip");
      function be(e) {
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
      })($ || ($ = {}));
      var _e = function (e) {
        var t = pe(e.route, e.faqid);
        return e.bForceRedirect
          ? o.createElement(de.b, { push: !0, to: t })
          : e.bForceAnchor
          ? o.createElement(
              "a",
              {
                href: x.c.COMMUNITY_BASE_URL.slice(0, -1) + t,
                className: e.className,
              },
              e.children
            )
          : o.createElement(
              fe.b,
              { to: t, className: e.className },
              e.children
            );
      };
      function pe(e, t) {
        var r = "/faqs/" + x.b.VANITY_ID + "/";
        switch (e) {
          case $.k_eView:
          case $.k_eCommunityView:
            r += "view/" + be(t);
            break;
          case $.k_eCommunityEdit:
            r += "edit/" + be(t);
            break;
          case $.k_eCommunityDashboard:
            r += "dashboard";
            break;
          case $.k_eCommunityPreview:
            r += "preview/" + be(t);
        }
        return r;
      }
      var ve = Object(i.a)(function (e) {
          var t = [H.Get().GetAllFAQSummaries(), !0],
            r = t[0],
            a = t[1],
            n = l.a.useState(1),
            i = n[0],
            s = n[1],
            c = r.sort(function (e, t) {
              return Object(ce.f)(e.internal_name, t.internal_name);
            });
          return (
            Object(o.useEffect)(function () {
              H.Get().RemoveAllDirtyDrafts();
            }, []),
            l.a.createElement(
              "div",
              { className: me.a.FAQDashboardPage },
              l.a.createElement(
                "div",
                { className: me.a.FAQDashboard },
                l.a.createElement(he, null),
                l.a.createElement(
                  "div",
                  { className: me.a.DashboardListHeaderRow },
                  l.a.createElement(
                    "div",
                    {
                      className: Object(le.a)(
                        me.a.EntryColumn,
                        me.a.ClickableHeader,
                        me.a.NameCol,
                        1 == i && me.a.Selected
                      ),
                      onClick: function () {
                        return s(1);
                      },
                    },
                    Object(se.f)("#FAQDashboard_NameColumn"),
                    l.a.createElement(
                      "div",
                      { className: me.a.DownArrow },
                      l.a.createElement(ie.q, null)
                    )
                  ),
                  l.a.createElement(
                    "div",
                    {
                      className: Object(le.a)(
                        me.a.EntryColumn,
                        me.a.ClickableHeader,
                        me.a.RightAligned,
                        me.a.TimeCol,
                        2 == i && me.a.Selected
                      ),
                      onClick: function () {
                        return s(2);
                      },
                    },
                    Object(se.f)("#FAQDashboard_DatesColumn"),
                    l.a.createElement(
                      "div",
                      { className: me.a.DownArrow },
                      l.a.createElement(ie.q, null)
                    )
                  ),
                  l.a.createElement(
                    "div",
                    {
                      className: Object(le.a)(
                        me.a.EntryColumn,
                        me.a.RightAligned,
                        me.a.VisCol
                      ),
                    },
                    Object(se.f)("#FAQDashboard_VisibilityColumn")
                  )
                ),
                0 == r.length &&
                  l.a.createElement(
                    "div",
                    { className: me.a.ErrorMsg },
                    Object(se.f)("#FAQDashboard_Empty")
                  ),
                c.map(function (e) {
                  return l.a.createElement(Fe, { key: e.faq_id, summary: e });
                }),
                !a &&
                  l.a.createElement(oe.a, {
                    position: "center",
                    size: "xlarge",
                  })
              )
            )
          );
        }),
        he = function (e) {
          var t = l.a.useCallback(function () {
            return Object(ne.b)(l.a.createElement(Ee, null), window, {
              strTitle: Object(se.f)("#FAQDashboard_CreateFAQButton"),
            });
          }, []);
          return l.a.createElement(
            "div",
            { className: me.a.DashboardHeader },
            l.a.createElement(
              "div",
              { className: me.a.DashboardHeaderTitle },
              Object(se.f)("#FAQDashboard_Header")
            ),
            l.a.createElement(
              "div",
              { className: me.a.DashboardCreateFAQButtonCtn },
              l.a.createElement(
                Z.r,
                { onClick: t },
                Object(se.f)("#FAQDashboard_CreateFAQButton")
              )
            )
          );
        },
        Ee = function (e) {
          var t = l.a.useState(""),
            r = t[0],
            a = t[1];
          return l.a.createElement(
            ae.d,
            {
              onOK: function () {
                return H.Get().CreateFAQ(r);
              },
              bOKDisabled: 0 == r.length,
              closeModal: e.closeModal,
              className: me.a.CreateFAQDialog,
            },
            l.a.createElement(
              Z.l,
              null,
              Object(se.f)("#FAQDashboard_CreateFAQButton")
            ),
            l.a.createElement(
              Z.b,
              null,
              l.a.createElement(
                Z.c,
                null,
                Object(se.f)("#FAQDashboard_CreateFAQInstructions"),
                l.a.createElement("input", {
                  type: "text",
                  className: me.a.NameInput,
                  value: r,
                  placeholder: Object(se.f)("#FAQDashboard_NamePlaceHolder"),
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
          var t = e.rtTimestamp,
            r = e.bTimestampWarning,
            a = Object(le.a)(
              me.a.SmallData,
              !t && me.a.Never,
              r && me.a.Warning
            ),
            n = Object(se.f)("#FAQDashboard_TimeNever");
          if (t) {
            var i = Date.now() / 1e3 - t;
            n = i < 86400 ? Object(se.q)(i, !1, !0) : Object(se.o)(t);
          }
          return l.a.createElement(
            ee.f,
            { className: a, rtFullDate: t, stylesmodule: re.a },
            n
          );
        },
        ye = function (e) {
          var t = e.bIsVisible;
          return l.a.createElement(
            "div",
            {
              className: Object(le.a)(
                me.a.SmallData,
                me.a.State,
                t ? me.a.Visible : me.a.Hidden
              ),
            },
            Object(se.f)(
              t ? "#FAQDashboard_Visible" : "#FAQDashboard_Invisible"
            )
          );
        },
        Fe = function (e) {
          var t = e.summary,
            r = t.faq_id,
            a = t.internal_name,
            n = t.visible_in_china_realm,
            i = t.visible_in_global_realm,
            o = t.per_language_info,
            s = Math.max.apply(
              Math,
              o.map(function (e) {
                return e.last_update_timestamp;
              })
            ),
            c = Math.max.apply(
              Math,
              o.map(function (e) {
                return e.last_publish_timestamp;
              })
            );
          return l.a.createElement(
            _e,
            {
              route: $.k_eCommunityEdit,
              faqid: r,
              className: me.a.DashboardEntry,
            },
            l.a.createElement(
              "div",
              { className: Object(le.a)(me.a.EntryColumn, me.a.NameCol) },
              l.a.createElement("div", { className: me.a.EntryInternalName }, a)
            ),
            l.a.createElement(
              "div",
              { className: Object(le.a)(me.a.EntryColumn, me.a.TimeCol) },
              l.a.createElement(
                "div",
                { className: me.a.EntryRow },
                l.a.createElement(
                  "div",
                  { className: me.a.SmallLabel },
                  Object(se.f)("#FAQDashboard_UpdateTimestampLabel")
                ),
                l.a.createElement(ge, { rtTimestamp: s })
              ),
              l.a.createElement(
                "div",
                { className: me.a.EntryRow },
                l.a.createElement(
                  "div",
                  { className: me.a.SmallLabel },
                  Object(se.f)("#FAQDashboard_PublishTimestampLabel")
                ),
                l.a.createElement(ge, {
                  rtTimestamp: c,
                  bTimestampWarning: c < s,
                })
              )
            ),
            l.a.createElement(
              "div",
              { className: Object(le.a)(me.a.EntryColumn, me.a.VisCol) },
              l.a.createElement(
                "div",
                { className: me.a.EntryRow },
                l.a.createElement(
                  "div",
                  { className: me.a.SmallLabel },
                  Object(se.f)("#FAQDashboard_VisibleInGlobalRealmLabel")
                ),
                l.a.createElement(ye, { bIsVisible: i })
              ),
              l.a.createElement(
                "div",
                { className: me.a.EntryRow },
                l.a.createElement(
                  "div",
                  { className: me.a.SmallLabel },
                  Object(se.f)("#FAQDashboard_VisibleInChinaRealmLabel")
                ),
                l.a.createElement(ye, { bIsVisible: n })
              )
            )
          );
        },
        Ae = function (e) {
          return o.createElement(de.a, {
            message: function (e) {
              var t,
                r,
                a = H.Get().GetLoadedDraftObjs();
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
                (e.pathname != It.DashboardFAQ(x.b.VANITY_ID) &&
                  !(null === (r = e.pathname) || void 0 === r
                    ? void 0
                    : r.startsWith(
                        It.ViewFAQ(x.b.VANITY_ID, "").slice(0, -1)
                      ))) ||
                Object(se.f)("#EventEditor_UnsavedChanges")
              );
            },
          });
        },
        Be = r("Yamg"),
        Se = r("kLLr"),
        Oe = r("I/R6"),
        je = r("4P4B"),
        Ce = r("IjL/"),
        Qe = r("fpVW"),
        we = r.n(Qe),
        De = r("NrWE"),
        Me = r("BXmN"),
        Ne = r.n(Me),
        Re = r("mgoM"),
        Le = r("Qcoi"),
        qe = r("ggIn"),
        Te = r("yKSN"),
        ze = r("5E+2"),
        Ie = r("X3Ds"),
        Ge = r("P2lf"),
        Pe = "title",
        Ue = "content";
      var Ve = function (e) {
          var t = e.draft,
            r = e.eLanguage;
          return o.createElement(
            "div",
            { className: Qe.FlexRowContainer },
            o.createElement(We, { draft: t, eLanguage: r }),
            o.createElement(Te.b, {
              strToolTip: Object(se.f)("#FAQEditor_Loc_Import_ttip"),
              strLabel: Object(se.f)("#EventEditor_Loc_Import_Short"),
              fnOnImportLocData: function (e, r) {
                return (function (e, t, r) {
                  var a = new Set(),
                    n = t.GetSortedTokenList();
                  return (
                    Object(u.G)(function () {
                      r.forEach(function (r) {
                        n.forEach(function (a) {
                          var n = t.GetLocalization(a, r) || "";
                          if (a === Pe) {
                            var i = e.GetDraftTitle(r);
                            (n || (i && i.length > 0)) && e.SetDraftTitle(r, n);
                          }
                          if (a === Ue) {
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
        We = function (e) {
          var t = e.draft,
            r = e.eLanguage;
          return o.createElement(
            ze.a,
            { toolTipContent: Object(se.f)("#FAQEditor_Loc_Export_ttip") },
            o.createElement(
              "div",
              {
                className: Qe.EditPreviewButton,
                onClick: function (e) {
                  Object(ne.d)(
                    o.createElement(
                      ae.d,
                      {
                        strTitle: Object(se.f)("#EventEditor_Loc_Export"),
                        bAlertDialog: !0,
                      },
                      o.createElement(Te.a, {
                        fnGetLocData: function () {
                          return (function (e, t) {
                            for (var r, a, n = new Ge.b(), i = 0; i < 30; ++i)
                              (e.BHasSomeTextForLanguage(i) || 0 == t) &&
                                (n.SetLocalization(
                                  Pe,
                                  i,
                                  null !== (r = e.GetDraftTitle(i)) &&
                                    void 0 !== r
                                    ? r
                                    : ""
                                ),
                                n.SetLocalization(
                                  Ue,
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
                    Object(Ie.m)(e)
                  );
                },
              },
              Object(se.f)("#EventEditor_Loc_Export_Short")
            )
          );
        },
        ke = function (e) {
          return l.a.createElement(
            ze.a,
            { toolTipContent: Object(se.f)("#FAQEditor_DeleteAction_ttip") },
            l.a.createElement(
              "div",
              {
                className: Object(le.a)(Qe.EditPreviewButton, Qe.Delete),
                onClick: function (t) {
                  Object(ne.d)(
                    l.a.createElement(xe, { draft: e.draft }),
                    Object(Ie.m)(t)
                  );
                },
              },
              Object(se.f)("#FAQEditor_DeleteAction")
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
            m = l.a.useState(void 0),
            d = m[0],
            f = m[1],
            _ = l.a.useState(!1),
            p = _[0],
            v = _[1],
            h = l.a.createElement(
              "div",
              null,
              Object(se.f)("#FAQEditor_DeleteDesc")
            );
          if (i)
            h = l.a.createElement(oe.a, {
              position: "center",
              size: "medium",
              string: Object(se.f)("#FAQEditor_DeletingInProgress"),
            });
          else if (c)
            h = l.a.createElement(
              "div",
              null,
              Object(se.f)("#FAQEditor_DeleteSuccess")
            );
          else if (d)
            h = l.a.createElement(
              "div",
              null,
              Object(se.f)(
                "Error_Description",
                d,
                Object(se.f)("#Error_GenericFailureDescription")
              )
            );
          else if (p)
            return l.a.createElement(de.b, {
              push: !0,
              to: pe($.k_eCommunityDashboard),
            });
          return l.a.createElement(
            Ce.a,
            null,
            l.a.createElement(
              ae.h,
              { onEscKeypress: r },
              l.a.createElement(
                Z.f,
                null,
                l.a.createElement(
                  Z.l,
                  null,
                  Object(se.f)("#FAQEditor_DeleteAction")
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
                    bOKDisabled: Boolean(i || c || d),
                    strOKText: Object(se.f)("#FAQEditor_DeleteAction"),
                    strCancelText: Boolean(i || c || d)
                      ? Object(se.f)("#Button_OK")
                      : void 0,
                    onOK: function () {
                      return Object(n.b)(void 0, void 0, void 0, function () {
                        return Object(n.e)(this, function (e) {
                          return (
                            o(!0),
                            H.Get()
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
        He = function (e) {
          return l.a.createElement(
            ze.a,
            { toolTipContent: Object(se.f)("#FAQEditor_ChangeVisible_ttip") },
            l.a.createElement(
              "div",
              {
                className: Qe.EditPreviewButton,
                onClick: function (t) {
                  Object(ne.d)(
                    l.a.createElement(Ke, { draft: e.draft }),
                    Object(Ie.m)(t)
                  );
                },
              },
              Object(se.f)("#FAQEditor_EditVisible")
            )
          );
        },
        Ke = function (e) {
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
            m = l.a.useState(void 0),
            d = m[0],
            f = m[1],
            _ = H.Get().GetFAQArticleSummary(t.GetFAQID()),
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
                Object(se.f)("#FAQEditor_ChangeVisible_Desc")
              ),
              l.a.createElement(Z.e, {
                label: Object(se.f)("#FAQEditor_VisibleInGlobal"),
                checked: v,
                onChange: function (e) {
                  return h(e);
                },
              }),
              l.a.createElement(Z.e, {
                label: Object(se.f)("#FAQEditor_VisibleInChina"),
                checked: g,
                tooltip: Object(se.f)("#FAQEditor_VisibleInChina_ttip"),
                onChange: function (e) {
                  return y(e);
                },
              })
            );
          return (
            i
              ? (F = l.a.createElement(oe.a, {
                  position: "center",
                  size: "medium",
                  string: Object(se.f)("#FAQEditor_ChangeVisible_InProgress"),
                }))
              : c
              ? (F = l.a.createElement(
                  "div",
                  null,
                  Object(se.f)("#FAQEditor_ChangeVisible_Success")
                ))
              : d &&
                (F = l.a.createElement(
                  "div",
                  null,
                  Object(se.f)(
                    "Error_Description",
                    d,
                    Object(se.f)("#Error_GenericFailureDescription")
                  )
                )),
            l.a.createElement(
              Ce.a,
              null,
              l.a.createElement(
                ae.h,
                { onEscKeypress: r },
                l.a.createElement(
                  Z.f,
                  null,
                  l.a.createElement(
                    Z.l,
                    null,
                    Object(se.f)("#FAQEditor_ChangeVisible")
                  ),
                  l.a.createElement(Z.b, null, l.a.createElement(Z.c, null, F)),
                  l.a.createElement(
                    Z.k,
                    null,
                    l.a.createElement(Z.o, {
                      onCancel: r,
                      bOKDisabled: Boolean(i || c || d),
                      strOKText: Object(se.f)("#FAQEditor_ChangeVisible"),
                      strCancelText: Boolean(i || c || d)
                        ? Object(se.f)("#Button_OK")
                        : void 0,
                      onOK: function () {
                        return Object(n.b)(void 0, void 0, void 0, function () {
                          return Object(n.e)(this, function (e) {
                            return (
                              o(!0),
                              H.Get()
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
        Ye = Object(i.a)(function (e) {
          var t = e.draft.BNeedsSaving();
          return l.a.createElement(
            ze.a,
            {
              toolTipContent: Object(se.f)(
                t ? "#FAQPublish_SaveRequire_ttip" : "#FAQPublish_Publish_ttip"
              ),
            },
            l.a.createElement(
              "div",
              {
                className: Qe.EditPreviewButton,
                onClick: function (r) {
                  Object(ne.d)(
                    t
                      ? l.a.createElement(ae.f, {
                          strDescription: Object(se.f)(
                            "#FAQPublish_SaveRequire_ttip"
                          ),
                        })
                      : l.a.createElement(Je, { draft: e.draft }),
                    Object(Ie.m)(r)
                  );
                },
              },
              Object(se.f)("#FAQPublish_Publish")
            )
          );
        }),
        Je = function (e) {
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
            m = c[1],
            d = l.a.useState(void 0),
            f = d[0],
            _ = d[1],
            p = X(r.GetFAQID())[0],
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
            y = H.Get().GetFAQArticleSummary(r.GetFAQID()),
            F = null;
          return (
            (F = p
              ? o
                ? l.a.createElement(oe.a, {
                    position: "center",
                    size: "medium",
                    string: Object(se.f)("#FAQPublish_Publishing"),
                  })
                : u
                ? l.a.createElement(
                    "div",
                    null,
                    Object(se.f)("#FAQPublish_Success")
                  )
                : f
                ? l.a.createElement(
                    "div",
                    null,
                    Object(se.f)(
                      "#Error_Description",
                      f,
                      Object(se.f)("#Error_GenericFailureDescription")
                    )
                  )
                : y
                ? l.a.createElement(
                    "div",
                    null,
                    l.a.createElement(
                      "div",
                      null,
                      Object(se.f)("#FAQPublish_Desc")
                    ),
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    l.a.createElement(
                      "div",
                      null,
                      Object(se.f)("#FAQPublish_Desc2")
                    ),
                    l.a.createElement("br", null),
                    null !==
                      (t = H.Get()
                        .GetDraftWithUnpublishedChanges(r)
                        .map(function (e) {
                          return l.a.createElement(Xe, {
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
                          Object(se.f)("#FAQPublish_None")
                        )
                  )
                : l.a.createElement(
                    "div",
                    null,
                    Object(se.f)("#FAQPublish_LoadError")
                  )
              : l.a.createElement(oe.a, {
                  size: "small",
                  position: "center",
                  string: Object(se.f)("#FAQPublish_PublishWait"),
                })),
            l.a.createElement(
              Ce.a,
              null,
              l.a.createElement(
                ae.h,
                { onEscKeypress: a },
                l.a.createElement(
                  Z.f,
                  null,
                  l.a.createElement(
                    Z.l,
                    null,
                    Object(se.f)("#FAQPublish_Publish")
                  ),
                  l.a.createElement(Z.b, null, l.a.createElement(Z.c, null, F)),
                  l.a.createElement(
                    Z.k,
                    null,
                    l.a.createElement(Z.o, {
                      onCancel: a,
                      bOKDisabled: Boolean(o || u || f || 0 == h.length),
                      strOKText: Object(se.f)("#FAQPublish_Publish"),
                      strCancelText: Boolean(o || u || f)
                        ? Object(se.f)("#Button_OK")
                        : void 0,
                      onOK: function () {
                        return Object(n.b)(void 0, void 0, void 0, function () {
                          return Object(n.e)(this, function (e) {
                            return (
                              s(!0),
                              H.Get()
                                .PublishDraftByLanguage(r.GetFAQID(), h)
                                .then(function (e) {
                                  1 == e && m(!0), _(e);
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
        Xe = function (e) {
          var t,
            r = e.draft,
            a = e.eLang,
            n = e.fnOnChecked,
            i = r.GetLastSaveMetaData(a),
            o = Se.a.InitFromAccountID(Number.parseInt(i.author_account_id)),
            s = Object(Le.b)(o.ConvertTo64BitString()),
            c = (s[0], s[1]),
            u = Object(se.f)(
              "#FAQPublish_DraftInfo",
              Object(se.f)("Language_" + Object(Re.a)(a)),
              Object(se.k)(i.timestamp) + " @ " + Object(se.m)(i.timestamp),
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
        $e = Object(i.a)(function (e) {
          var t = e.draft,
            r = e.eLanguage,
            a = new Array(),
            n = new Array(),
            i = H.Get().GetFAQArticleSummary(t.GetFAQID()),
            o = Boolean(
              i.per_language_info.some(function (e) {
                return !!e.last_publish_timestamp;
              })
            );
          if (o) {
            var s = H.Get().GetAllLatestPublishedForFAQ(t.GetFAQID());
            if (s)
              for (var c = 0; c < 30; c++) {
                var u = s.get(c);
                u &&
                  n.push(
                    l.a.createElement(Ze, {
                      key: t.GetFAQID() + "_" + c,
                      metadata: u,
                    })
                  );
              }
          }
          for (var m = 0; m < 30; m++) {
            var d = t.GetLastSaveMetaData(m);
            d &&
              a.push(
                l.a.createElement(Ze, {
                  key: "draft_" + t.GetFAQID() + "_" + m,
                  metadata: d,
                })
              );
          }
          return l.a.createElement(
            Ce.a,
            null,
            l.a.createElement(
              "div",
              { className: qe.LeftMenu },
              l.a.createElement(
                "div",
                { className: qe.Section },
                l.a.createElement(
                  "div",
                  { className: qe.SectionTitle },
                  Object(se.f)("#FAQDashboard_VisibilityColumn"),
                  " "
                ),
                l.a.createElement(
                  "div",
                  { className: qe.SectionContents },
                  l.a.createElement(
                    "div",
                    { className: qe.VisibilityCtn },
                    l.a.createElement(
                      "div",
                      { className: Object(le.a)(qe.StatusRow, qe.Global) },
                      Object(se.f)("#FAQDashboard_VisibleInGlobalRealmLabel"),
                      " ",
                      l.a.createElement(ye, {
                        bIsVisible: i.visible_in_global_realm,
                      })
                    ),
                    l.a.createElement(
                      "div",
                      { className: Object(le.a)(qe.StatusRow, qe.China) },
                      Object(se.f)("#FAQDashboard_VisibleInChinaRealmLabel"),
                      " ",
                      l.a.createElement(ye, {
                        bIsVisible: i.visible_in_china_realm,
                      })
                    ),
                    l.a.createElement(
                      "div",
                      { className: qe.StatusBtnCtn },
                      l.a.createElement(He, { draft: t })
                    )
                  ),
                  l.a.createElement(
                    "div",
                    { className: qe.PublishCtn },
                    l.a.createElement(
                      "div",
                      { className: qe.PublishStatus },
                      Object(se.f)("#FAQStatus_DraftVersionsDesc")
                    ),
                    l.a.createElement(
                      "div",
                      { className: qe.PublishBtn },
                      l.a.createElement(Ye, { draft: t })
                    )
                  )
                )
              ),
              l.a.createElement(
                "div",
                { className: qe.Section },
                l.a.createElement(
                  "div",
                  { className: qe.SectionTitle },
                  Object(se.f)("#FAQDashboard_LocalizationSection"),
                  " "
                ),
                l.a.createElement(
                  "div",
                  { className: qe.SectionContents },
                  Object(se.f)("#FAQDashboard_LocalizationSectionDesc"),
                  l.a.createElement("br", null),
                  l.a.createElement(Ve, { draft: t, eLanguage: r })
                )
              ),
              l.a.createElement(
                "div",
                { className: qe.Section },
                l.a.createElement(
                  "div",
                  { className: qe.SectionTitle },
                  Object(se.f)("#FAQStatus_LiveVersionHeader")
                ),
                o
                  ? l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        "table",
                        { className: qe.FaqStatusTable },
                        l.a.createElement(
                          "thead",
                          null,
                          l.a.createElement(
                            "tr",
                            null,
                            l.a.createElement(
                              "th",
                              null,
                              Object(se.f)("#LanguageTitle")
                            ),
                            l.a.createElement("th", null, "V"),
                            l.a.createElement(
                              "th",
                              null,
                              Object(se.f)("#EventEditor_Visibility_Published")
                            ),
                            l.a.createElement(
                              "th",
                              null,
                              Object(se.f)("#FAQStatus_Editor")
                            )
                          )
                        ),
                        l.a.createElement("tbody", null, n)
                      )
                    )
                  : l.a.createElement(
                      "div",
                      null,
                      Object(se.f)("#FAQStatus_NotVisible")
                    )
              ),
              l.a.createElement(
                "div",
                { className: qe.Section },
                l.a.createElement(
                  "div",
                  { className: qe.SectionTitle },
                  Object(se.f)("#FAQStatus_DraftVersions")
                ),
                l.a.createElement(
                  "div",
                  null,
                  l.a.createElement(
                    "table",
                    { className: qe.FaqStatusTable },
                    l.a.createElement(
                      "thead",
                      null,
                      l.a.createElement(
                        "tr",
                        null,
                        l.a.createElement(
                          "th",
                          null,
                          Object(se.f)("#LanguageTitle")
                        ),
                        l.a.createElement(
                          "th",
                          null,
                          Object(se.f)("#FAQStatus_LastUpdated")
                        ),
                        l.a.createElement(
                          "th",
                          null,
                          Object(se.f)("#FAQStatus_Editor")
                        )
                      )
                    ),
                    l.a.createElement("tbody", null, a)
                  )
                )
              ),
              l.a.createElement(
                "div",
                { className: qe.Section },
                l.a.createElement(ke, { draft: t })
              )
            )
          );
        }),
        Ze = function (e) {
          var t,
            r = e.metadata,
            a = Se.a.InitFromAccountID(Number.parseInt(r.author_account_id)),
            n = Object(Le.b)(a.ConvertTo64BitString()),
            i = (n[0], n[1]);
          return l.a.createElement(
            "tr",
            null,
            l.a.createElement(
              "td",
              null,
              Object(se.f)("#Language_" + Object(Re.a)(r.language))
            ),
            Boolean(Number.parseInt(r.version) > 0) &&
              l.a.createElement("td", null, r.version),
            l.a.createElement(
              "td",
              null,
              Object(se.k)(r.timestamp),
              " @ ",
              Object(se.m)(r.timestamp)
            ),
            l.a.createElement(
              "td",
              null,
              l.a.createElement(
                "a",
                {
                  href:
                    x.c.COMMUNITY_BASE_URL +
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
        et = r("vBFs"),
        tt = (r("jZUi"), r("wst7")),
        rt = r("eYkW"),
        at = r.n(rt),
        nt = r("hvYe"),
        it = r.n(nt),
        ot = r("aXcg"),
        lt = Object(i.a)(function (e) {
          var t = e.draft.BNeedsSaving();
          return l.a.createElement(
            "div",
            {
              className: "btn_green_steamui btn_medium",
              onClick: function (t) {
                return Object(ne.d)(
                  l.a.createElement(st, { draft: e.draft }),
                  Object(Ie.m)(t)
                );
              },
            },
            l.a.createElement(
              "span",
              null,
              !t &&
                l.a.createElement("img", {
                  className: ot.SavedImage,
                  src: it.a,
                }),
              Object(se.f)(t ? "#Button_Save" : "#Button_Saved")
            )
          );
        }),
        st = function (e) {
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
              ae.e,
              { bAllowFullSize: !0, onCancel: r, closeModal: r },
              l.a.createElement(
                Z.l,
                null,
                i
                  ? l.a.createElement(
                      "div",
                      null,
                      Object(se.f)("#FAQSave_Saving")
                    )
                  : l.a.createElement(
                      "div",
                      null,
                      Object(se.f)(
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
                  ? l.a.createElement(oe.a, {
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
                            Object(se.f)("#FAQSave_SaveSuccess_desc")
                          )
                        : l.a.createElement(
                            "div",
                            null,
                            Object(se.f)(
                              "#Error_Description",
                              c,
                              Object(se.f)("#Error_GenericFailureDescription")
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
                    Object(se.f)("#Button_OK")
                  )
              )
            )
          );
        },
        ct = r("6h0J"),
        ut = r.n(ct),
        mt = Object(i.a)(function (e) {
          var t,
            r = e.draft,
            a = e.bPreview,
            n = r.BHasPublished();
          return l.a.createElement(
            Ce.a,
            null,
            l.a.createElement(
              "div",
              {
                className: Object(le.a)(
                  ((t = {}),
                  (t[tt.EventEditorTopBarContainer] = !0),
                  (t[tt.EventUnPublished] = !a && !n),
                  (t[tt.EventPublished] = !a && n),
                  (t[at.a.FAQPreview] = a),
                  t)
                ),
              },
              l.a.createElement(
                _e,
                {
                  route: a ? $.k_eCommunityEdit : $.k_eCommunityDashboard,
                  faqid: r.GetFAQID(),
                  className: we.a.EditPreviewButton,
                },
                Object(se.f)(
                  a ? "#FAQEditor_EditFAQ" : "#EventDisplay_EventsDashBtn"
                )
              ),
              l.a.createElement(
                "div",
                null,
                l.a.createElement(
                  "div",
                  { className: at.a.EditorInternalNameLabel },
                  Object(se.f)(
                    a
                      ? "#FAQEditor_InternalName_Preview"
                      : "#FAQEditor_InternalName"
                  )
                ),
                l.a.createElement(
                  "div",
                  { className: at.a.EditorInternalName },
                  r.GetFAQInternalName(),
                  l.a.createElement("img", {
                    src: ut.a,
                    onClick: function (e) {
                      return Object(ne.d)(
                        l.a.createElement(dt, { draft: r }),
                        Object(Ie.m)(e)
                      );
                    },
                  })
                )
              ),
              l.a.createElement(
                "div",
                { className: we.a.EventOptions },
                l.a.createElement(et.a, {
                  selectedLang: Oe.a.Get().GetCurEditLanguage(),
                  fnOnLanguageChanged: Oe.a.Get().SetCurEditLanguage,
                  fnLangHasData: r.BHasSomeTextForLanguage,
                  fnIsLangSupported: function (e) {
                    return !0;
                  },
                  fnLastUpdateRTime: r.GetLastTimeLanguageUpdated,
                }),
                !a &&
                  l.a.createElement(
                    _e,
                    {
                      route: $.k_eCommunityPreview,
                      faqid: r.GetFAQID(),
                      className: we.a.EditPreviewButton,
                    },
                    Object(se.f)("#Button_Preview")
                  )
              )
            )
          );
        }),
        dt = function (e) {
          var t = e.closeModal,
            r = e.draft,
            a = l.a.useState(r.GetFAQInternalName() || ""),
            i = a[0],
            o = a[1],
            s = l.a.useState(!1),
            c = s[0],
            u = s[1],
            m = l.a.useState(1),
            d = m[0],
            f = m[1],
            b = l.a.useState(!1),
            _ = b[0],
            p = b[1];
          return l.a.createElement(
            ae.e,
            { bAllowFullSize: !0, onCancel: t, closeModal: t },
            l.a.createElement(
              Z.l,
              null,
              Object(se.f)("#FAQEditor_ChangeInternalName")
            ),
            l.a.createElement(
              Z.b,
              null,
              l.a.createElement(
                "div",
                null,
                Object(se.f)("#FAQEditor_ChangeInternalName_desc")
              ),
              l.a.createElement("input", {
                type: "text",
                value: i,
                placeholder: Object(se.f)("#FAQEditor_ChangeInternalName"),
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
                l.a.createElement(oe.a, {
                  string: Object(se.f)("#Updating"),
                  position: "center",
                  size: "medium",
                }),
              _ &&
                l.a.createElement(
                  "span",
                  null,
                  1 == d
                    ? Object(se.f)("#EventDisplay_Share_Success")
                    : Object(se.f)(
                        "#Error_Description",
                        d,
                        Object(se.f)("#Error_GenericFailureDescription")
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
                  ? Object(se.f)("#Button_Close")
                  : Object(se.f)("#Button_Cancel"),
                onOK: function () {
                  return Object(n.b)(void 0, void 0, void 0, function () {
                    return Object(n.e)(this, function (e) {
                      return (
                        u(!0),
                        H.Get()
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
        ft = Object(i.a)(function (e) {
          var t = e.draft,
            r = (e.eLanguage, t.GetFAQID()),
            a = X(r)[0],
            n = H.Get().GetFAQArticleSummary(r),
            i =
              a &&
              n.visible_in_global_realm &&
              H.Get().BHasPublishedInGlobalRealm(r),
            o =
              a &&
              n.visible_in_china_realm &&
              H.Get().BHasPublishedInSteamChinaRealm(r);
          return l.a.createElement(
            Ce.a,
            null,
            l.a.createElement(
              "div",
              { className: Object(le.a)(we.a.SaveBackground) },
              l.a.createElement(
                "div",
                {
                  className: we.a.FlexRowWrapFlexStartContainer,
                  style: { width: "unset", justifyContent: "center" },
                },
                l.a.createElement(lt, { draft: t }),
                Boolean(i || o) &&
                  l.a.createElement(
                    "div",
                    { className: we.a.EditPreviewButton },
                    l.a.createElement(
                      _e,
                      { faqid: r, route: $.k_eCommunityView },
                      Object(se.f)("#FAQEditir_ViewLiveFAQ")
                    )
                  )
              )
            )
          );
        }),
        bt = Object(i.a)(function (e) {
          var t = J(e.faqid),
            r = t[0],
            a = t[1],
            n = l.a.useRef();
          if (!a)
            return l.a.createElement(oe.a, {
              position: "center",
              size: "xlarge",
              string: Object(se.f)("#Loading"),
            });
          if (!r)
            return l.a.createElement(ht, {
              strError: Object(se.f)("#FAQEditor_NoFAQFound"),
            });
          var i = Oe.a.Get().GetCurEditLanguage();
          return l.a.createElement(
            "div",
            null,
            l.a.createElement(mt, { draft: r }),
            l.a.createElement(
              "div",
              { className: Ne.a.FAQEditPage },
              l.a.createElement(
                "div",
                { className: Ne.a.FAQMenuCtn },
                l.a.createElement($e, { draft: r, eLanguage: i })
              ),
              l.a.createElement(
                "div",
                { className: Ne.a.FAQEditorCtn },
                l.a.createElement(
                  "div",
                  { className: Ne.a.FAQEditor },
                  l.a.createElement(
                    "div",
                    { className: we.a.Columns },
                    l.a.createElement(
                      "div",
                      { className: Object(le.a)(we.a.LeftCol) },
                      l.a.createElement(pt, { draft: r, eLanguage: i }),
                      l.a.createElement(vt, {
                        bbcodeEditorRef: n,
                        draft: r,
                        eLanguage: i,
                      })
                    ),
                    l.a.createElement(_t, {
                      draft: r,
                      bbcodeEditorRef: n,
                      className: we.a.RightCol,
                    })
                  )
                )
              )
            ),
            l.a.createElement(ft, { draft: r, eLanguage: i })
          );
        }),
        _t = function (e) {
          if (!Boolean(x.b.CAN_UPLOAD_IMAGES)) return null;
          var t = new Se.a(x.b.CLANSTEAMID),
            r = e.draft,
            a = e.bbcodeEditorRef;
          return l.a.createElement(
            Ce.a,
            null,
            l.a.createElement(
              "div",
              { className: e.className },
              l.a.createElement(
                "div",
                null,
                Object(se.f)("#FAQEditor_ImageTitle")
              ),
              l.a.createElement(De.a, {
                bShowLightBox: !1,
                clanSteamID: t,
                imageInsertCallBack: function (e, t) {
                  return (
                    a.current &&
                    Object(Be.b)(null == a ? void 0 : a.current, e, t)
                  );
                },
                fnSetImageURL: function () {},
                rgRealmList: r.GetIncludedRealmList(),
              })
            )
          );
        },
        pt = Object(i.a)(function (e) {
          var t = e.draft,
            r = e.eLanguage;
          return l.a.createElement(
            "div",
            { className: Ne.a.EditorTitleField },
            l.a.createElement(
              "div",
              { className: Ne.a.EditorLabel },
              Object(se.f)("#FAQEditor_TitleLabel")
            ),
            l.a.createElement("input", {
              type: "text",
              className: Ne.a.EditorTitleFieldInput,
              value: t.GetDraftTitle(r) || "",
              placeholder: Object(se.f)("#FAQEditor_TitlePlaceHolder"),
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
        vt = Object(i.a)(function (e) {
          var t = e.draft,
            r = e.eLanguage,
            a = e.bbcodeEditorRef;
          return l.a.createElement(
            "div",
            { className: Ne.a.EditorPane },
            l.a.createElement(
              "div",
              { className: Ne.a.EditorLabel },
              Object(se.f)("#FAQEditor_ContentLabel")
            ),
            l.a.createElement(je.a, {
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
              strPlaceholder: Object(se.f)("#FAQEditor_ContentPlaceHolder"),
              bSupportHTMLImport: !0,
              showFormatHelp: "PartnerEvents",
              classNameForTextArea: Ne.a.EditorPaneTextArea,
            })
          );
        }),
        ht = function (e) {
          return l.a.createElement(
            "div",
            { className: Ne.a.ErrorCtn },
            l.a.createElement("div", { className: Ne.a.ErrorMsg }, e.strError),
            l.a.createElement(
              _e,
              { route: $.k_eCommunityDashboard, className: Ne.a.EscapeLink },
              Object(se.f)("#FAQEditor_GoToDashboard")
            )
          );
        },
        Et = r("ZeAL"),
        gt = r("nrKv"),
        yt = r("rcjX"),
        Ft = function (e) {
          var t = o.useCallback(function () {
              return new gt.c(new gt.b(), 0);
            }, []),
            r = o.useRef(new Et.a(yt.c, t));
          return o.createElement(
            o.Fragment,
            null,
            r.current.ParseBBCode(e.text, {})
          );
        },
        At = r("orBq"),
        Bt = function (e) {
          var t = e.title,
            r = e.content,
            a = e.elSideBars;
          return l.a.createElement(
            "div",
            { className: At.FAQViewPage },
            l.a.createElement(
              "a",
              { className: At.SupportTitle, href: "" + x.c.HELP_BASE_URL },
              Object(se.f)("#FAQViewer_SteamSupport")
            ),
            l.a.createElement(
              "div",
              { className: At.Columns },
              l.a.createElement(
                "div",
                { className: Object(le.a)(At.LeftCol) },
                l.a.createElement(
                  "div",
                  { className: At.FAQTopicCtn },
                  l.a.createElement("div", { className: At.FAQTitle }, t),
                  l.a.createElement(
                    "div",
                    { className: At.FAQContent },
                    l.a.createElement(Ft, { text: r })
                  )
                )
              ),
              l.a.createElement(
                "div",
                { className: At.RightCol },
                l.a.createElement("div", { className: At.SectionCtn }, a)
              )
            )
          );
        },
        St = function (e) {
          return l.a.createElement(
            "div",
            { className: At.FAQViewPage },
            e.children
          );
        },
        Ot = r("3tbG"),
        jt = r("0zs6"),
        Ct = function (e) {
          var t = e.faqContent;
          return H.Get().BHasFAQEdit()
            ? l.a.createElement(
                "div",
                { className: Object(le.a)(jt.Section, Qe.ValveOnlyBackground) },
                l.a.createElement(
                  "div",
                  { className: jt.TopicHeader },
                  Object(se.f)("#FAQViewer_AdminLinks")
                ),
                l.a.createElement(
                  "div",
                  null,
                  Object(se.n)(
                    "#FAQViewer_Admin_LastUpdate",
                    t.author_account_id
                      ? l.a.createElement(Qt, {
                          authorAccountID: Number.parseInt(t.author_account_id),
                        })
                      : Object(se.f)("#Sale_Debug_Unknown"),
                    l.a.createElement(
                      "span",
                      null,
                      Object(se.k)(t.timestamp) +
                        "@" +
                        Object(se.m)(t.timestamp)
                    )
                  )
                ),
                l.a.createElement(wt, { faqContent: t }),
                l.a.createElement(
                  _e,
                  {
                    faqid: t.faq_id,
                    route: $.k_eCommunityEdit,
                    bForceAnchor: !0,
                  },
                  Object(se.f)("#FAQViewer_GotoEditor")
                )
              )
            : null;
        },
        Qt = function (e) {
          var t = Se.a.InitFromAccountID(e.authorAccountID),
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
                    className: Ot.SmallAvatar,
                    src: n.avatar_url,
                    "data-miniprofile": "s" + t.ConvertTo64BitString(),
                  }),
                  l.a.createElement("span", null, n.persona_name)
                )
          );
        },
        wt = function (e) {
          var t = e.faqContent,
            r = J(t.faq_id),
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
            Object(se.n)(
              "#FAQViewer_DraftNewer",
              l.a.createElement(Qt, {
                authorAccountID: Number.parseInt(i.author_account_id),
              }),
              l.a.createElement(
                "span",
                null,
                Object(se.k)(i.timestamp) + "@" + Object(se.m)(i.timestamp)
              )
            )
          );
        },
        Dt = r("rTBr"),
        Mt = r.n(Dt),
        Nt = function (e) {
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              "div",
              { className: jt.Section },
              l.a.createElement(
                "div",
                { className: jt.TopicHeader },
                Object(se.f)("#FAQViewer_SideBar_ProblemWithSteam_Title")
              ),
              l.a.createElement(
                "div",
                null,
                Object(se.f)("#FAQViewer_SideBar_ProblemWithSteam_Desc")
              ),
              l.a.createElement(
                "div",
                { className: jt.CenterButtonCtn },
                l.a.createElement(
                  "a",
                  { href: x.c.HELP_BASE_URL, className: Qe.EditPreviewButton },
                  Object(se.f)("#FAQViewer_SideBar_ProblemWithSteam_Link")
                )
              )
            ),
            l.a.createElement(
              "div",
              { className: jt.Section },
              l.a.createElement(
                "div",
                { className: jt.TopicHeader },
                Object(se.f)("#FAQViewer_SideBar_CommunityHelp_Title")
              ),
              l.a.createElement(
                "div",
                null,
                Object(se.f)("#FAQViewer_SideBar_CommunityHelp_Desc")
              ),
              l.a.createElement(
                "div",
                { className: jt.CenterButtonCtn },
                l.a.createElement(
                  "a",
                  {
                    href: x.c.COMMUNITY_BASE_URL + "discussions",
                    className: Qe.EditPreviewButton,
                  },
                  Object(se.f)("#FAQViewer_SideBar_CommunityHelp_Link")
                )
              )
            )
          );
        },
        Rt = function (e) {
          var t = (function (e, t) {
              return [e && H.Get().GetFAQPublishedContent(e, t), !0];
            })(e.faqid, Object(Re.d)(x.c.LANGUAGE)),
            r = t[0];
          return t[1]
            ? r
              ? l.a.createElement(Bt, {
                  title: r.title,
                  content: r.content,
                  elSideBars: [
                    l.a.createElement(Nt, { key: "sidebar", faqContent: r }),
                    l.a.createElement(Ct, { key: "adminbar", faqContent: r }),
                  ],
                })
              : l.a.createElement(
                  St,
                  null,
                  l.a.createElement(Lt, {
                    strError: Object(se.f)("#FAQViewer_NoFAQFound"),
                  })
                )
            : l.a.createElement(
                St,
                null,
                l.a.createElement(oe.a, {
                  position: "center",
                  size: "xlarge",
                  string: Object(se.f)("#Loading"),
                })
              );
        },
        Lt = function (e) {
          var t,
            r =
              x.c.COMMUNITY_BASE_URL +
              (x.b.APPID
                ? "app/" +
                  (null !== (t = x.b.VANITY_ID) && void 0 !== t ? t : x.b.APPID)
                : "gid/" + x.b.CLANSTEAMID);
          return l.a.createElement(
            "div",
            { className: Mt.a.ErrorCtn },
            l.a.createElement("div", { className: Mt.a.ErrorMsg }, e.strError),
            l.a.createElement(
              "a",
              { className: Mt.a.EscapeLink, href: r },
              Object(se.f)("#FAQViewer_GoToHomepage")
            )
          );
        },
        qt = Object(i.a)(function (e) {
          var t = J(e.faqid),
            r = t[0],
            a = t[1],
            n = Oe.a.Get().GetCurEditLanguage();
          return a
            ? r
              ? l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(mt, { draft: r, bPreview: !0 }),
                  l.a.createElement(Bt, {
                    title: r.GetDraftTitleWithFallback(n, x.c.EREALM),
                    content: r.GetDraftContentWithFallback(n, x.c.EREALM),
                  }),
                  l.a.createElement(ft, { draft: r, eLanguage: n })
                )
              : l.a.createElement(
                  St,
                  null,
                  l.a.createElement(Lt, {
                    strError: Object(se.f)("#FAQViewer_NoFAQFound"),
                  })
                )
            : l.a.createElement(
                St,
                null,
                l.a.createElement(oe.a, {
                  position: "center",
                  size: "xlarge",
                  string: Object(se.f)("#Loading"),
                })
              );
        }),
        Tt = r("9w6b"),
        zt = r("WplJ"),
        It = {
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
        Gt = Object(i.a)(function (e) {
          var t = l.a.useState(!0),
            r = t[0],
            a = t[1];
          return (
            l.a.useEffect(function () {
              Object(n.b)(void 0, void 0, void 0, function () {
                return Object(n.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, Tt.a.InitGlobal()];
                    case 1:
                      return e.sent(), a(!1), [2];
                  }
                });
              });
            }, []),
            r
              ? l.a.createElement(oe.a, {
                  position: "center",
                  size: "medium",
                  string: Object(se.f)("#Loading"),
                })
              : l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(Ae, null),
                  l.a.createElement(
                    de.e,
                    null,
                    l.a.createElement(de.c, {
                      path: It.ViewFAQ(":vanity_str", ":faqid"),
                      render: function (e) {
                        return l.a.createElement(zt.a, {
                          config: {
                            "faqs-root": function () {
                              var t = Y(e.match.params.faqid);
                              return l.a.createElement(Rt, { faqid: t });
                            },
                          },
                        });
                      },
                    }),
                    l.a.createElement(de.c, {
                      path: It.EditFAQ(":vanity_str", ":faqid"),
                      render: function (e) {
                        return l.a.createElement(zt.a, {
                          config: {
                            "faqs-root": function () {
                              var t = e.match.params.faqid;
                              if (t) {
                                var r = Y(t);
                                return r
                                  ? l.a.createElement(bt, { faqid: r })
                                  : l.a.createElement(de.b, {
                                      push: !0,
                                      to: pe($.k_eCommunityDashboard),
                                    });
                              }
                              return l.a.createElement(ve, null);
                            },
                          },
                        });
                      },
                    }),
                    l.a.createElement(de.c, {
                      path: It.DashboardFAQ(":vanity_str"),
                      render: function (e) {
                        return l.a.createElement(zt.a, {
                          config: {
                            "faqs-root": function () {
                              return l.a.createElement(ve, null);
                            },
                          },
                        });
                      },
                    }),
                    l.a.createElement(de.c, {
                      path: It.PreviewFAQ(":vanity_str", ":faqid"),
                      render: function (e) {
                        return l.a.createElement(zt.a, {
                          config: {
                            "faqs-root": function () {
                              var t = Y(e.match.params.faqid);
                              return l.a.createElement(qt, { faqid: t });
                            },
                          },
                        });
                      },
                    }),
                    l.a.createElement(de.c, { component: Pt })
                  )
                )
          );
        });
      t.default = Gt;
      function Pt(e) {
        return "dev" !== x.c.WEB_UNIVERSE
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
        SupportTitle: "faqsharedviewpage_SupportTitle_2BcDf",
        Columns: "faqsharedviewpage_Columns_HGDD2",
        LeftCol: "faqsharedviewpage_LeftCol_o2y9U",
        RightCol: "faqsharedviewpage_RightCol_2Ta3c",
        SectionCtn: "faqsharedviewpage_SectionCtn_2wa31",
        FAQTopicCtn: "faqsharedviewpage_FAQTopicCtn_38QJo",
        FAQTitle: "faqsharedviewpage_FAQTitle_3aInU",
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
