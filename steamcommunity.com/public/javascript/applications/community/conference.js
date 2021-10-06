/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    "5STL": function (e, t, n) {
      e.exports = {
        SessionCtn: "conferencepages_SessionCtn_1UP6V",
        LeftCol: "conferencepages_LeftCol_19xFd",
        MainCol: "conferencepages_MainCol_1qlkn",
        InteractionCtn: "conferencepages_InteractionCtn_39uHL",
        BroadcastCtn: "conferencepages_BroadcastCtn_240cu",
        videoContainerSizer: "conferencepages_videoContainerSizer_twsjQ",
        ChatColumn: "conferencepages_ChatColumn_2ldId",
        ChatTitle: "conferencepages_ChatTitle_3CjWm",
        QAColumn: "conferencepages_QAColumn_1RCLw",
        TabControlsCtn: "conferencepages_TabControlsCtn_1HJDD",
        Close: "conferencepages_Close_3cKbt",
        ShowBothTabs: "conferencepages_ShowBothTabs_fZBE8",
        InnerChatTabs: "conferencepages_InnerChatTabs_2hj0C",
        InnerChatTab: "conferencepages_InnerChatTab_1g3oa",
        Active: "conferencepages_Active_3PSCm",
        ChatStack: "conferencepages_ChatStack_1ogmv",
      };
    },
    Cksw: function (e, t, n) {
      e.exports = {
        GraphicalAssetsTabs: "tabbar_GraphicalAssetsTabs_3oSHT",
        GraphicalAssetsTab: "tabbar_GraphicalAssetsTab_3lJb_",
        Active: "tabbar_Active_8XjrT",
        GraphicalAssetStatus: "tabbar_GraphicalAssetStatus_25U4F",
        VOWarning: "tabbar_VOWarning_3LaJy",
        StatusSuccess: "tabbar_StatusSuccess_1iIRV",
        StatusDanger: "tabbar_StatusDanger_UxdQK",
        StatusCaution: "tabbar_StatusCaution_E9t9j",
      };
    },
    JsZI: function (e, t, n) {
      e.exports = {
        UpcomingEventsCtn: "conferenceevents_UpcomingEventsCtn_2bWup",
        SectionTitle: "conferenceevents_SectionTitle_7MpRs",
        EventSchedCtn: "conferenceevents_EventSchedCtn_Tn2Ur",
        EventItemCtn: "conferenceevents_EventItemCtn_z6qIM",
        Title: "conferenceevents_Title_2EqgH",
        ConferenceEventTime: "conferenceevents_ConferenceEventTime_2KGVS",
        ActiveEventCtn: "conferenceevents_ActiveEventCtn_2lP0C",
        EventDescription: "conferenceevents_EventDescription_3hKDo",
        ReminderContainer: "conferenceevents_ReminderContainer_2vLZT",
        OnlyIcon: "conferenceevents_OnlyIcon_3fZIS",
        PastEventsCtn: "conferenceevents_PastEventsCtn_3pfjF",
      };
    },
    Lfwj: function (e, t, n) {
      e.exports = {
        BroadcastChatCtn: "conferencebroadcast_BroadcastChatCtn_28b1v",
      };
    },
    N2vu: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return X;
      }),
        n.d(t, "c", function () {
          return $;
        }),
        n.d(t, "b", function () {
          return ee;
        }),
        n.d(t, "h", function () {
          return te;
        }),
        n.d(t, "d", function () {
          return ne;
        }),
        n.d(t, "f", function () {
          return re;
        }),
        n.d(t, "e", function () {
          return ie;
        }),
        n.d(t, "g", function () {
          return ae;
        });
      var r,
        i = n("mrSG"),
        a = n("vDqi"),
        o = n.n(a),
        s = n("2lpH"),
        u = n.n(s),
        c = n("2vnA"),
        l = n("q1tI"),
        d = n.n(l),
        m = n("kyHq"),
        f = n("bxBv"),
        p = n("r64O"),
        b = n("XxJJ"),
        _ = n("OS6B"),
        v = n("lkRc"),
        g = (function () {
          function e(e, t) {
            (this.m_summary = e),
              (this.m_mapStoredDrafts = t),
              (this.m_mapLocalUpdates = new Map());
            for (var n = 0; n < 30; n++) this.m_mapLocalUpdates.set(n, {});
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
              var e, t, n, r;
              return Object(i.b)(this, void 0, void 0, function () {
                var a,
                  o,
                  s,
                  u,
                  l,
                  d = this;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      for (
                        Object(p.a)(
                          Boolean(
                            null === (e = this.m_summary) || void 0 === e
                              ? void 0
                              : e.faq_id
                          ),
                          "Attempting to save when we lack a FaqID in the summary object"
                        ),
                          a = 1,
                          o = new Array(),
                          s = function (e) {
                            if (
                              (u.m_mapLocalUpdates.get(e).strTitle &&
                                u.m_mapLocalUpdates.get(e).strTitle !==
                                  (null === (t = u.m_mapStoredDrafts.get(e)) ||
                                  void 0 === t
                                    ? void 0
                                    : t.title)) ||
                              (u.m_mapLocalUpdates.get(e).strContent &&
                                u.m_mapLocalUpdates.get(e).strContent !==
                                  (null === (n = u.m_mapStoredDrafts.get(e)) ||
                                  void 0 === n
                                    ? void 0
                                    : n.content))
                            ) {
                              var i = u.GetDraftTitle(e),
                                s = u.GetDraftContent(e),
                                l = X.Get().UpdateDraft(
                                  null === (r = u.m_summary) || void 0 === r
                                    ? void 0
                                    : r.faq_id,
                                  e,
                                  i,
                                  s
                                );
                              l
                                .then(function (t) {
                                  1 == t.eResult
                                    ? Object(c.G)(function () {
                                        d.m_mapStoredDrafts.has(e) ||
                                          d.m_mapStoredDrafts.set(e, {}),
                                          (d.m_mapStoredDrafts.get(
                                            e
                                          ).title = i),
                                          (d.m_mapStoredDrafts.get(
                                            e
                                          ).content = s),
                                          (d.m_mapStoredDrafts.get(
                                            e
                                          ).timestamp = t.rtUpdateTime),
                                          (d.m_mapStoredDrafts.get(
                                            e
                                          ).author_account_id = v.i.accountid.toString()),
                                          (d.m_mapLocalUpdates.get(
                                            e
                                          ).strTitle = null),
                                          (d.m_mapLocalUpdates.get(
                                            e
                                          ).strContent = null);
                                        var n = !1;
                                        d.m_summary.per_language_info.forEach(
                                          function (r) {
                                            e == r.language &&
                                              ((n = !0),
                                              (r.last_update_timestamp = Math.max(
                                                r.last_update_timestamp,
                                                t.rtUpdateTime
                                              )));
                                          }
                                        ),
                                          n ||
                                            d.m_summary.per_language_info.push({
                                              language: e,
                                              last_update_timestamp:
                                                t.rtUpdateTime,
                                            });
                                      })
                                    : 1 == a &&
                                      (console.error(
                                        "FAQModel.SaveDraft: Response not ok " +
                                          t.eResult,
                                        t
                                      ),
                                      (a = t.eResult));
                                })
                                .catch(function (e) {
                                  console.error(
                                    "FAQModel.SaveDrafts: Hit error " +
                                      Object(_.a)(e).strErrorMsg
                                  ),
                                    1 == a && (a = 2);
                                }),
                                o.push(l);
                            }
                          },
                          u = this,
                          l = 0;
                        l < 30;
                        ++l
                      )
                        s(l);
                      return [4, Promise.all(o)];
                    case 1:
                      return i.sent(), [2, a];
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
              return null !== this.m_mapLocalUpdates.get(e).strTitle &&
                void 0 !== this.m_mapLocalUpdates.get(e).strTitle
                ? this.m_mapLocalUpdates.get(e).strTitle
                : null === (t = this.m_mapStoredDrafts.get(e)) || void 0 === t
                ? void 0
                : t.title;
            }),
            (e.prototype.GetDraftContent = function (e) {
              var t;
              return null !== this.m_mapLocalUpdates.get(e).strContent &&
                void 0 !== this.m_mapLocalUpdates.get(e).strContent
                ? this.m_mapLocalUpdates.get(e).strContent
                : null === (t = this.m_mapStoredDrafts.get(e)) || void 0 === t
                ? void 0
                : t.content;
            }),
            (e.prototype.GetDraftTitleWithFallback = function (e, t) {
              var n, r, i, a, o, s;
              void 0 === t && (t = m.f.k_ESteamRealmGlobal);
              var u = t == m.f.k_ESteamRealmChina ? 6 : 0;
              return null !==
                (s =
                  null !==
                    (a =
                      null !==
                        (r =
                          null !==
                            (n = this.m_mapLocalUpdates.get(e).strTitle) &&
                          void 0 !== n
                            ? n
                            : this.m_mapLocalUpdates.get(u).strTitle) &&
                      void 0 !== r
                        ? r
                        : null === (i = this.m_mapStoredDrafts.get(e)) ||
                          void 0 === i
                        ? void 0
                        : i.title) && void 0 !== a
                    ? a
                    : null === (o = this.m_mapStoredDrafts.get(u)) ||
                      void 0 === o
                    ? void 0
                    : o.title) && void 0 !== s
                ? s
                : "";
            }),
            (e.prototype.GetDraftContentWithFallback = function (e, t) {
              var n, r, i, a, o, s;
              void 0 === t && (t = m.f.k_ESteamRealmGlobal);
              var u = t == m.f.k_ESteamRealmChina ? 6 : 0;
              return null !==
                (s =
                  null !==
                    (a =
                      null !==
                        (r =
                          null !==
                            (n = this.m_mapLocalUpdates.get(e).strContent) &&
                          void 0 !== n
                            ? n
                            : this.m_mapLocalUpdates.get(u).strContent) &&
                      void 0 !== r
                        ? r
                        : null === (i = this.m_mapStoredDrafts.get(e)) ||
                          void 0 === i
                        ? void 0
                        : i.content) && void 0 !== a
                    ? a
                    : null === (o = this.m_mapStoredDrafts.get(u)) ||
                      void 0 === o
                    ? void 0
                    : o.content) && void 0 !== s
                ? s
                : "";
            }),
            (e.prototype.GetLastSavedDraftVersion = function (e) {
              return this.m_mapStoredDrafts.get(e);
            }),
            (e.prototype.BHasSomeTextForLanguage = function (e) {
              return Boolean(this.GetDraftContent(e) || this.GetDraftTitle(e));
            }),
            (e.prototype.SetDraftTitle = function (e, t) {
              var n;
              t ===
              (null === (n = this.m_mapStoredDrafts.get(e)) || void 0 === n
                ? void 0
                : n.title)
                ? (this.m_mapLocalUpdates.get(e).strTitle = null)
                : (this.m_mapLocalUpdates.get(e).strTitle = t);
            }),
            (e.prototype.SetDraftContent = function (e, t) {
              var n;
              t ===
              (null === (n = this.m_mapStoredDrafts.get(e)) || void 0 === n
                ? void 0
                : n.content)
                ? (this.m_mapLocalUpdates.get(e).strContent = null)
                : (this.m_mapLocalUpdates.get(e).strContent = t);
            }),
            (e.prototype.GetIncludedRealmList = function () {
              var e = new Array();
              return (
                this.m_summary.visible_in_global_realm &&
                  e.push(m.f.k_ESteamRealmGlobal),
                this.m_summary.visible_in_global_realm &&
                  e.push(m.f.k_ESteamRealmChina),
                0 == e.length && e.push(m.f.k_ESteamRealmGlobal),
                Object(p.a)(
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
              var t, n;
              return null !==
                (n =
                  null === (t = this.GetLastSavedDraftVersion(e)) ||
                  void 0 === t
                    ? void 0
                    : t.timestamp) && void 0 !== n
                ? n
                : 0;
            }),
            (e.prototype.GetFAQID = function () {
              return this.m_summary.faq_id;
            }),
            (e.prototype.GetSummary = function () {
              return this.m_summary;
            }),
            Object(i.c)([c.C], e.prototype, "m_mapLocalUpdates", void 0),
            Object(i.c)([b.a], e.prototype, "BHasSomeTextForLanguage", null),
            Object(i.c)([b.a], e.prototype, "GetLastTimeLanguageUpdated", null),
            e
          );
        })(),
        h = n("WBba"),
        y = n("hRO2"),
        S = n("OS8t"),
        B = y.Message,
        C = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.faq_id || S.a(t.M()),
              B.initialize(r, n, 0, -1, [6], null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      faq_id: {
                        n: 1,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                      internal_name: {
                        n: 2,
                        br: S.d.readString,
                        bw: S.h.writeString,
                      },
                      visible_in_global_realm: {
                        n: 3,
                        br: S.d.readBool,
                        bw: S.h.writeBool,
                      },
                      visible_in_china_realm: {
                        n: 4,
                        br: S.d.readBool,
                        bw: S.h.writeBool,
                      },
                      json_data: {
                        n: 5,
                        br: S.d.readString,
                        bw: S.h.writeString,
                      },
                      per_language_info: { n: 6, c: A, r: !0, q: !0 },
                      url_code: {
                        n: 7,
                        br: S.d.readString,
                        bw: S.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQSummary";
            }),
            t
          );
        })(B),
        A = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.language || S.a(t.M()),
              B.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      language: {
                        n: 1,
                        br: S.d.readUint32,
                        bw: S.h.writeUint32,
                      },
                      last_update_timestamp: {
                        n: 2,
                        br: S.d.readFixed32,
                        bw: S.h.writeFixed32,
                      },
                      last_publish_timestamp: {
                        n: 3,
                        br: S.d.readFixed32,
                        bw: S.h.writeFixed32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQSummary_CLanguageInfo";
            }),
            t
          );
        })(B),
        w = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.faq_id || S.a(t.M()),
              B.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      faq_id: {
                        n: 1,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                      language: {
                        n: 2,
                        br: S.d.readUint32,
                        bw: S.h.writeUint32,
                      },
                      version: {
                        n: 3,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                      content: {
                        n: 4,
                        br: S.d.readString,
                        bw: S.h.writeString,
                      },
                      title: { n: 5, br: S.d.readString, bw: S.h.writeString },
                      timestamp: {
                        n: 6,
                        br: S.d.readFixed32,
                        bw: S.h.writeFixed32,
                      },
                      author_account_id: {
                        n: 7,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQContent";
            }),
            t
          );
        })(B),
        j = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.steamid || S.a(t.M()),
              B.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                      internal_name: {
                        n: 2,
                        br: S.d.readString,
                        bw: S.h.writeString,
                      },
                      json_data: {
                        n: 3,
                        br: S.d.readString,
                        bw: S.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_Create_Request";
            }),
            t
          );
        })(B),
        O = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.faq_id || S.a(t.M()),
              B.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      faq_id: {
                        n: 1,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_Create_Response";
            }),
            t
          );
        })(B),
        E = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.steamid || S.a(t.M()),
              B.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_Delete_Request";
            }),
            t
          );
        })(B),
        F = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var n = e.call(this) || this;
            return B.initialize(n, t, 0, -1, void 0, null), n;
          }
          return (
            Object(i.d)(t, e),
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
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_Delete_Response";
            }),
            t
          );
        })(B),
        M = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.steamid || S.a(t.M()),
              B.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                      internal_name: {
                        n: 3,
                        br: S.d.readString,
                        bw: S.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_UpdateInternalName_Request";
            }),
            t
          );
        })(B),
        Q = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var n = e.call(this) || this;
            return B.initialize(n, t, 0, -1, void 0, null), n;
          }
          return (
            Object(i.d)(t, e),
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
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_UpdateInternalName_Response";
            }),
            t
          );
        })(B),
        T = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.steamid || S.a(t.M()),
              B.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                      json_data: {
                        n: 3,
                        br: S.d.readString,
                        bw: S.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_UpdateJsonData_Request";
            }),
            t
          );
        })(B),
        I = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var n = e.call(this) || this;
            return B.initialize(n, t, 0, -1, void 0, null), n;
          }
          return (
            Object(i.d)(t, e),
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
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_UpdateJsonData_Response";
            }),
            t
          );
        })(B),
        z = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.steamid || S.a(t.M()),
              B.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                      visible_in_global_realm: {
                        n: 3,
                        br: S.d.readBool,
                        bw: S.h.writeBool,
                      },
                      visible_in_china_realm: {
                        n: 4,
                        br: S.d.readBool,
                        bw: S.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_SetVisibility_Request";
            }),
            t
          );
        })(B),
        R = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var n = e.call(this) || this;
            return B.initialize(n, t, 0, -1, void 0, null), n;
          }
          return (
            Object(i.d)(t, e),
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
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_SetVisibility_Response";
            }),
            t
          );
        })(B),
        D = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.steamid || S.a(t.M()),
              B.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                      language: {
                        n: 3,
                        br: S.d.readUint32,
                        bw: S.h.writeUint32,
                      },
                      content: {
                        n: 4,
                        br: S.d.readString,
                        bw: S.h.writeString,
                      },
                      title: { n: 5, br: S.d.readString, bw: S.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_UpdateDraft_Request";
            }),
            t
          );
        })(B),
        U = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.last_update_timestamp || S.a(t.M()),
              B.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      last_update_timestamp: {
                        n: 1,
                        br: S.d.readFixed32,
                        bw: S.h.writeFixed32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_UpdateDraft_Response";
            }),
            t
          );
        })(B),
        N = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.steamid || S.a(t.M()),
              B.initialize(r, n, 0, -1, [3], null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                      language: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: S.d.readUint32,
                        bw: S.h.writeRepeatedUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_PublishDraft_Request";
            }),
            t
          );
        })(B),
        q = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.last_publish_timestamp || S.a(t.M()),
              B.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      last_publish_timestamp: {
                        n: 1,
                        br: S.d.readFixed32,
                        bw: S.h.writeFixed32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_PublishDraft_Response";
            }),
            t
          );
        })(B),
        W = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.faq || S.a(t.M()),
              B.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = { proto: t, fields: { faq: { n: 1, c: w } } }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_PreviewDraft_Response";
            }),
            t
          );
        })(B),
        G = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.faq || S.a(t.M()),
              B.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = { proto: t, fields: { faq: { n: 1, c: w } } }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetFAQ_Response";
            }),
            t
          );
        })(B),
        L = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.steamid || S.a(t.M()),
              B.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                      language: {
                        n: 3,
                        br: S.d.readUint32,
                        bw: S.h.writeUint32,
                      },
                      version: {
                        n: 4,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetFAQVersion_Request";
            }),
            t
          );
        })(B),
        k = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.faq || S.a(t.M()),
              B.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = { proto: t, fields: { faq: { n: 1, c: w } } }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetFAQVersion_Response";
            }),
            t
          );
        })(B),
        P = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.steamid || S.a(t.M()),
              B.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                      faq_id: {
                        n: 2,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetAllDrafts_Request";
            }),
            t
          );
        })(B),
        V = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.summary || S.a(t.M()),
              B.initialize(r, n, 0, -1, [2], null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      summary: { n: 1, c: C },
                      draft: { n: 2, c: w, r: !0, q: !0 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetAllDrafts_Response";
            }),
            t
          );
        })(B),
        x = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.faq || S.a(t.M()),
              B.initialize(r, n, 0, -1, [1], null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { faq: { n: 1, c: C, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetAllFAQsForClan_Response";
            }),
            t
          );
        })(B),
        H = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.faqs || S.a(t.M()),
              B.initialize(r, n, 0, -1, [1], null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { faqs: { n: 1, c: w, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Response";
            }),
            t
          );
        })(B),
        J = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var n = e.call(this) || this;
            return B.initialize(n, t, 0, -1, void 0, null), n;
          }
          return (
            Object(i.d)(t, e),
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
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_CheckFAQPermissions_Response";
            }),
            t
          );
        })(B),
        Y = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.faqs || S.a(t.M()),
              B.initialize(r, n, 0, -1, [1], null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      faqs: { n: 1, c: K, r: !0, q: !0 },
                      num_total_results: {
                        n: 2,
                        br: S.d.readInt32,
                        bw: S.h.writeInt32,
                      },
                      next_cursor: {
                        n: 3,
                        br: S.d.readString,
                        bw: S.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_SearchFAQs_Response";
            }),
            t
          );
        })(B),
        K = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.articleid || S.a(t.M()),
              B.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      articleid: {
                        n: 1,
                        br: S.d.readUint64String,
                        bw: S.h.writeUint64String,
                      },
                      name: { n: 2, br: S.d.readString, bw: S.h.writeString },
                      content: {
                        n: 3,
                        br: S.d.readString,
                        bw: S.h.writeString,
                      },
                      clan_accountid: {
                        n: 4,
                        br: S.d.readUint32,
                        bw: S.h.writeUint32,
                      },
                      url_code: {
                        n: 5,
                        br: S.d.readString,
                        bw: S.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = S.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return S.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return S.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new y.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return S.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new y.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              S.f(t.M(), e, n);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new y.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CClanFAQS_SearchFAQs_Response_CFAQSearchResult";
            }),
            t
          );
        })(B);
      !(function (e) {
        (e.Create = function (e, t) {
          return e.SendMsg("ClanFAQS.Create#1", t, O, { ePrivilege: 1 });
        }),
          (e.Delete = function (e, t) {
            return e.SendMsg("ClanFAQS.Delete#1", t, F, { ePrivilege: 1 });
          }),
          (e.UpdateInternalName = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateInternalName#1", t, Q, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateJsonData = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateJsonData#1", t, I, {
              ePrivilege: 1,
            });
          }),
          (e.SetVisibility = function (e, t) {
            return e.SendMsg("ClanFAQS.SetVisibility#1", t, R, {
              ePrivilege: 1,
            });
          }),
          (e.UpdateDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.UpdateDraft#1", t, U, { ePrivilege: 1 });
          }),
          (e.PublishDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.PublishDraft#1", t, q, {
              ePrivilege: 1,
            });
          }),
          (e.PreviewDraft = function (e, t) {
            return e.SendMsg("ClanFAQS.PreviewDraft#1", t, W, {
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
            return e.SendMsg("ClanFAQS.GetFAQVersion#1", t, k, {
              ePrivilege: 1,
            });
          }),
          (e.GetAllDrafts = function (e, t) {
            return e.SendMsg("ClanFAQS.GetAllDrafts#1", t, V, {
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
              H,
              { ePrivilege: 1 }
            );
          }),
          (e.CheckFAQPermissions = function (e, t) {
            return e.SendMsg("ClanFAQS.CheckFAQPermissions#1", t, J, {
              ePrivilege: 1,
            });
          }),
          (e.SearchFAQs = function (e, t) {
            return e.SendMsg("ClanFAQS.SearchFAQs#1", t, Y, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(r || (r = {}));
      var X = (function () {
          function e() {
            (this.m_mapFAQSummaries = new Map()),
              (this.m_mapFAQPublishedContent = new Map()),
              (this.m_mapFAQDrafts = new Map()),
              (this.m_bHasFAQEdit = !1),
              (this.m_steamInterface = null),
              "dev" == v.c.WEB_UNIVERSE && (window.g_FAQStore = this),
              v.c.IN_LIBRARY ||
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
              var e = Object(v.g)("faqstore", "application_config"),
                t = null == e ? void 0 : e.webapi_token;
              this.m_steamInterface = new h.a(v.c.WEBAPI_BASE_URL, t);
            }),
            (e.prototype.ReadInitialPayload = function () {
              var e = Object(v.g)("faqstore", "application_config");
              if (
                (("dev" != v.c.WEB_UNIVERSE && "beta" != v.c.WEB_UNIVERSE) ||
                  console.log("DEV_DEBUG: CFAQStore loading payload: ", e),
                this.BIsConfigValid(e))
              ) {
                if (e.faqs)
                  for (var t in e.faqs) {
                    var n = e.faqs[t];
                    (null == n ? void 0 : n.faq_id) == t &&
                      void 0 !== (null == n ? void 0 : n.language) &&
                      (this.m_mapFAQPublishedContent.has(t) ||
                        this.m_mapFAQPublishedContent.set(t, new Map()),
                      this.m_mapFAQPublishedContent.get(t).set(n.language, n));
                  }
                if (e.alldrafts)
                  for (var t in e.alldrafts) {
                    var r = e.alldrafts[t];
                    if ((null == r ? void 0 : r.summary) && r.draft) {
                      this.m_mapFAQSummaries.set(t, r.summary);
                      for (
                        var i = new Map(), a = 0, o = r.draft;
                        a < o.length;
                        a++
                      ) {
                        var s = o[a];
                        i.set(s.language, s);
                      }
                      this.m_mapFAQDrafts.set(
                        t,
                        new g(this.m_mapFAQSummaries.get(t), i)
                      );
                    }
                  }
                if (e.allfaqs)
                  for (var u = 0, c = e.allfaqs; u < c.length; u++) {
                    var l = c[u];
                    l.faq_id &&
                      (this.m_mapFAQSummaries.has(l.faq_id) ||
                        this.m_mapFAQSummaries.set(l.faq_id, l));
                  }
                this.m_bHasFAQEdit = Boolean(e.has_faq_edit);
              } else
                "dev" == v.c.WEB_UNIVERSE && console.error("Invalid payload");
            }),
            (e.prototype.BIsConfigValid = function (e) {
              var t = e;
              return !!(
                (t && t.faqs && "object" == typeof t.faqs) ||
                (t.alldrafts && "object" == typeof t.alldrafts) ||
                (t.allfaqs && Array.isArray(t.allfaqs))
              );
            }),
            (e.prototype.CreateFAQ = function (e) {
              return Object(i.b)(this, void 0, void 0, function () {
                var t, n, a, o, s, u, c;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (t = f.b.Init(j)).Body().set_steamid(v.b.CLANSTEAMID),
                        t.Body().set_internal_name(e),
                        (n = 2),
                        (a = void 0),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          r.Create(
                            this.m_steamInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (o = i.sent()),
                        1 == (n = o.GetEResult())
                          ? ((a = o.Body().faq_id()),
                            (s = { faq_id: a, internal_name: e }),
                            this.m_mapFAQSummaries.set(a, s))
                          : console.error(
                              "FAQStore.CreateFAQ: Create request failed:",
                              n
                            ),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (u = i.sent()),
                        (c = Object(_.a)(u)),
                        console.error(
                          "FAQStore.CreateFAQ: caught error " + c.strErrorMsg,
                          c
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, { eResult: n, strFaqId: a }];
                  }
                });
              });
            }),
            (e.prototype.UpdateDraft = function (e, t, n, a) {
              return Object(i.b)(this, void 0, void 0, function () {
                var o, s, u, c, l, d;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (o = f.b.Init(D)).Body().set_steamid(v.b.CLANSTEAMID),
                        o.Body().set_faq_id(e),
                        o.Body().set_language(t),
                        o.Body().set_content(a),
                        o.Body().set_title(n),
                        (s = 2),
                        (u = 0),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          r.UpdateDraft(
                            this.m_steamInterface.GetServiceTransport(),
                            o
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (c = i.sent()),
                        1 != (s = c.GetEResult())
                          ? console.error(
                              "FAQStore.UpdateDraft request failed:",
                              s
                            )
                          : (u = c.Body().last_update_timestamp()),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (l = i.sent()),
                        (d = Object(_.a)(l)),
                        console.error(
                          "FAQStore.UpdateDraft: caught error " + d.strErrorMsg,
                          d
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, { eResult: s, rtUpdateTime: u }];
                  }
                });
              });
            }),
            (e.prototype.UpdateJsonData = function (e, t) {
              return Object(i.b)(this, void 0, void 0, function () {
                var n, a, o, s, u, c;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (n = JSON.stringify(t)),
                        (a = f.b.Init(T)).Body().set_steamid(v.b.CLANSTEAMID),
                        a.Body().set_faq_id(e),
                        a.Body().set_json_data(n),
                        (o = 2),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          r.UpdateJsonData(
                            this.m_steamInterface.GetServiceTransport(),
                            a
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (s = i.sent()),
                        1 != (o = s.GetEResult())
                          ? console.error(
                              "FAQStore.UpdateJsonData request failed:",
                              o
                            )
                          : (this.m_mapFAQSummaries.get(e).json_data = n),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (u = i.sent()),
                        (c = Object(_.a)(u)),
                        console.error(
                          "FAQStore.UpdateJsonData: caught error " +
                            c.strErrorMsg,
                          c
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, o];
                  }
                });
              });
            }),
            (e.prototype.GetFAQVersion = function (e, t, n) {
              return Object(i.b)(this, void 0, void 0, function () {
                var a, o, s, u, c;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (a = f.b.Init(L)).Body().set_steamid(v.b.CLANSTEAMID),
                        a.Body().set_faq_id(e),
                        a.Body().set_version(t),
                        a.Body().set_language(n),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          r.GetFAQVersion(
                            this.m_steamInterface.GetServiceTransport(),
                            a
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (o = i.sent()),
                        1 == (s = o.GetEResult())
                          ? [2, o.Body().faq().toObject()]
                          : (console.error(
                              "FAQStore.GetFAQVersion request failed:",
                              s
                            ),
                            [3, 4])
                      );
                    case 3:
                      return (
                        (u = i.sent()),
                        (c = Object(_.a)(u)),
                        console.error(
                          "FAQStore.GetFAQVersion: caught error " +
                            c.strErrorMsg,
                          c
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, null];
                  }
                });
              });
            }),
            (e.prototype.DeleteFAQ = function (e) {
              return Object(i.b)(this, void 0, void 0, function () {
                var t, n, a, o, s;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (t = f.b.Init(E)).Body().set_steamid(v.b.CLANSTEAMID),
                        t.Body().set_faq_id(e),
                        (n = 2),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          r.Delete(
                            this.m_steamInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (a = i.sent()),
                        1 != (n = a.GetEResult())
                          ? console.error(
                              "FAQStore.DeleteFAQ request failed:",
                              n
                            )
                          : (this.m_mapFAQDrafts.delete(e),
                            this.m_mapFAQPublishedContent.delete(e),
                            this.m_mapFAQSummaries.delete(e)),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (o = i.sent()),
                        (s = Object(_.a)(o)),
                        console.error(
                          "FAQStore.DeleteFAQ: caught error " + s.strErrorMsg,
                          s
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, n];
                  }
                });
              });
            }),
            (e.prototype.GetFAQPublishedContent = function (t, n) {
              var r = this.m_mapFAQPublishedContent.get(t);
              if (!r) return null;
              var i = r.get(n);
              return (
                !i &&
                  e.sm_mapFallbackLanguages.has(n) &&
                  (i = r.get(e.sm_mapFallbackLanguages.get(n))),
                i || 0 == n || Object(m.a)(v.c.EREALM) || (i = r.get(0)),
                i
              );
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
            (e.prototype.LoadFAQDraftContent = function (e) {
              return Object(i.b)(this, void 0, void 0, function () {
                var t, n, a, o, s, u, c, l;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (this.m_mapFAQDrafts.has(e))
                        return [2, this.m_mapFAQDrafts.get(e)];
                      (t = f.b.Init(P)).Body().set_steamid(v.b.CLANSTEAMID),
                        t.Body().set_faq_id(e),
                        (n = 2),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          r.GetAllDrafts(
                            this.m_steamInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (a = i.sent()),
                        1 != (n = a.GetEResult())
                          ? (console.error(
                              "FaqStore.LoadFAQDraftContent request failed:",
                              n
                            ),
                            [2, null])
                          : ((o = a.Body().summary().toObject()),
                            this.m_mapFAQSummaries.set(e, o),
                            (s = new Map()),
                            a
                              .Body()
                              .draft()
                              .forEach(function (e) {
                                return s.set(e.language(), e.toObject());
                              }),
                            (u = new g(this.m_mapFAQSummaries.get(e), s)),
                            this.m_mapFAQDrafts.set(e, u),
                            [2, u])
                      );
                    case 3:
                      return (
                        (c = i.sent()),
                        (l = Object(_.a)(c)),
                        console.error(
                          "FaqStore.LoadFAQDraftContent: exception " +
                            l.strErrorMsg,
                          l
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, null];
                  }
                });
              });
            }),
            (e.prototype.UpdateVisibility = function (e, t, n) {
              return Object(i.b)(this, void 0, void 0, function () {
                var a, o, s, u, c, l;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (a = f.b.Init(z)).Body().set_steamid(v.b.CLANSTEAMID),
                        a.Body().set_faq_id(e),
                        a.Body().set_visible_in_global_realm(t),
                        a.Body().set_visible_in_china_realm(n),
                        (o = 2),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          r.SetVisibility(
                            this.m_steamInterface.GetServiceTransport(),
                            a
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (s = i.sent()),
                        1 === (o = s.GetEResult())
                          ? (u = this.m_mapFAQSummaries.get(e)) &&
                            ((u.visible_in_global_realm = t),
                            (u.visible_in_china_realm = n),
                            this.m_mapFAQSummaries.set(e, u))
                          : console.error(
                              "FaqStore.UpdateVisibility: Failed " + o
                            ),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (c = i.sent()),
                        (l = Object(_.a)(c)),
                        console.error(
                          "FaqStore.UpdateVisibility: exception " +
                            l.strErrorMsg,
                          l
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
              return Object(i.b)(this, void 0, void 0, function () {
                var n,
                  a,
                  o,
                  s,
                  u,
                  l,
                  d = this;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (!t || 0 == t.length) return [2, 1];
                      (n = f.b.Init(N)).Body().set_steamid(v.b.CLANSTEAMID),
                        n.Body().set_faq_id(e),
                        t.forEach(function (e) {
                          return n.Body().add_language(e);
                        }),
                        (a = 2),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          r.PublishDraft(
                            this.m_steamInterface.GetServiceTransport(),
                            n
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (o = i.sent()),
                        1 === (a = o.GetEResult())
                          ? (s = this.m_mapFAQSummaries.get(e)) &&
                            Object(c.G)(function () {
                              d.m_mapFAQPublishedContent.has(e) ||
                                d.m_mapFAQPublishedContent.set(e, new Map()),
                                s.per_language_info.forEach(function (n) {
                                  var r,
                                    i = n.language;
                                  if (t.indexOf(i) >= 0) {
                                    n.last_publish_timestamp = Math.max(
                                      n.last_publish_timestamp,
                                      o.Body().last_publish_timestamp()
                                    );
                                    var a =
                                      null === (r = d.m_mapFAQDrafts.get(e)) ||
                                      void 0 === r
                                        ? void 0
                                        : r.GetLastSavedDraftVersion(i);
                                    d.m_mapFAQPublishedContent.get(e).set(i, a);
                                  }
                                });
                            })
                          : console.error(
                              "FaqStore.PublishDraftByLanguage: Failed " + a
                            ),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (u = i.sent()),
                        (l = Object(_.a)(u)),
                        console.error(
                          "FaqStore.PublishDraftByLanguage: exception " +
                            l.strErrorMsg,
                          l
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, a];
                  }
                });
              });
            }),
            (e.prototype.UpdateInternalName = function (e, t) {
              return Object(i.b)(this, void 0, void 0, function () {
                var n,
                  a,
                  o,
                  s,
                  u,
                  l = this;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (n = f.b.Init(M)).Body().set_steamid(v.b.CLANSTEAMID),
                        n.Body().set_faq_id(e),
                        n.Body().set_internal_name(t),
                        (a = 2),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          r.UpdateInternalName(
                            this.m_steamInterface.GetServiceTransport(),
                            n
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (o = i.sent()),
                        1 === (a = o.GetEResult())
                          ? Object(c.G)(function () {
                              var n, r, i;
                              (null === (n = l.m_mapFAQSummaries.get(e)) ||
                              void 0 === n
                                ? void 0
                                : n.internal_name) &&
                                (l.m_mapFAQSummaries.get(e).internal_name = t),
                                (null ===
                                  (i =
                                    null === (r = l.m_mapFAQDrafts.get(e)) ||
                                    void 0 === r
                                      ? void 0
                                      : r.GetSummary()) || void 0 === i
                                  ? void 0
                                  : i.internal_name) &&
                                  (l.m_mapFAQDrafts
                                    .get(e)
                                    .GetSummary().internal_name = t);
                            })
                          : console.error(
                              "FaqStore.UpdateInternalName: Failed " + a
                            ),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (s = i.sent()),
                        (u = Object(_.a)(s)),
                        console.error(
                          "FaqStore.UpdateInternalName: exception " +
                            u.strErrorMsg,
                          u
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, a];
                  }
                });
              });
            }),
            (e.prototype.GetLoadedDraftObjs = function () {
              return Array.from(this.m_mapFAQDrafts.values());
            }),
            (e.prototype.RemoveAllDirtyDrafts = function () {
              var e,
                t,
                n = this,
                r =
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
              null == r ||
                r.forEach(function (e) {
                  return n.m_mapFAQDrafts.delete(e);
                });
            }),
            (e.prototype.BHasFAQEdit = function () {
              return this.m_bHasFAQEdit;
            }),
            (e.prototype.ExportEnglishDraftToCrowdin = function (e) {
              return Object(i.b)(this, void 0, void 0, function () {
                var t;
                return Object(i.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (t =
                          v.c.COMMUNITY_BASE_URL +
                          "faqs/" +
                          v.b.VANITY_ID +
                          "/ajaxpushtocrowdin/" +
                          ee(e)),
                        [4, o.a.get(t)]
                      );
                    case 1:
                      return n.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.ImportNonEnglishDraftsFromCrowdin = function (
              e,
              t,
              n
            ) {
              var r;
              return Object(i.b)(this, void 0, void 0, function () {
                var a, s, u, c, l, d;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (a =
                        v.c.COMMUNITY_BASE_URL +
                        "faqs/" +
                        v.b.VANITY_ID +
                        "/ajaxpullfromcrowdin/" +
                        ee(e)),
                        (s = new FormData()).append("sessionid", v.c.SESSIONID),
                        s.append("languages", t.join(",")),
                        (u = null),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          o.a.post(a, s, {
                            withCredentials: !0,
                            cancelToken: null == n ? void 0 : n.token,
                          }),
                        ]
                      );
                    case 2:
                      return 200 ==
                        (null == (c = i.sent()) ? void 0 : c.status) &&
                        1 ==
                          (null === (r = c.data) || void 0 === r
                            ? void 0
                            : r.success)
                        ? [2, c.data.updated[e]]
                        : ((u = { response: c }), [3, 4]);
                    case 3:
                      return (l = i.sent()), (u = l), [3, 4];
                    case 4:
                      return (
                        (d = Object(_.a)(u)),
                        console.error(
                          "Could not import from crowdin",
                          e,
                          d.strErrorMsg,
                          d
                        ),
                        [2, []]
                      );
                  }
                });
              });
            }),
            (e.sm_mapFallbackLanguages = new Map([
              [5, 27],
              [27, 5],
              [29, 6],
            ])),
            Object(i.c)([c.C], e.prototype, "m_mapFAQSummaries", void 0),
            Object(i.c)([c.k], e.prototype, "RemoveAllDirtyDrafts", null),
            e
          );
        })(),
        Z = /^[0-9a-fA-F]+$/;
      function $(e) {
        var t = null == e ? void 0 : e.replace(/-/g, "");
        return 16 == (null == t ? void 0 : t.length) && Z.test(t)
          ? u.a.fromString(t, !0, 16).toString()
          : null;
      }
      function ee(e) {
        var t = ("0000000000000000" + u.a.fromString(e, !0, 10).toString(16))
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
      function te(e, t) {
        return [e && X.Get().GetFAQPublishedContent(e, t), !0];
      }
      function ne(e) {
        var t = d.a.useState(X.Get().GetFAQDraftContent(e)),
          n = t[0],
          r = t[1],
          i = d.a.useState(!!n),
          a = i[0],
          o = i[1];
        return (
          Object(l.useEffect)(
            function () {
              X.Get()
                .LoadFAQDraftContent(e)
                .then(function (e) {
                  return r(e);
                })
                .finally(function () {
                  return o(!0);
                });
            },
            [e]
          ),
          [n, a]
        );
      }
      function re(e) {
        return [X.Get().GetFAQArticleSummary(e), !0];
      }
      function ie() {
        var e = X.Get().GetAllFAQSummaries();
        return d.a.useRef([e, !0]).current;
      }
      function ae(e, t, n) {
        var r = d.a.useState(null),
          i = r[0],
          a = r[1],
          o = d.a.useState(!1),
          s = o[0],
          u = o[1];
        return (
          Object(l.useEffect)(
            function () {
              X.Get().BHasFAQEdit() &&
                X.Get()
                  .GetFAQVersion(e, t, n)
                  .then(function (e) {
                    return a(e);
                  })
                  .finally(function () {
                    return u(!0);
                  });
            },
            [e, t, n]
          ),
          [i, s]
        );
      }
    },
    PpkI: function (e, t, n) {
      e.exports = {
        ConferencePageCtn: "landing_ConferencePageCtn_oP_SP",
        ConferenceContentsCtn: "landing_ConferenceContentsCtn_1HPPR",
        ConferenceHeaderCtn: "landing_ConferenceHeaderCtn_1AbLq",
        LogoImage: "landing_LogoImage_3i2i5",
      };
    },
    WcT4: function (e, t, n) {
      e.exports = {
        FAQContainer: "faqbbcode_FAQContainer_2PQsW",
        Section: "faqbbcode_Section_bjwwI",
        Note: "faqbbcode_Note_XjQ8g",
        Important: "faqbbcode_Important_mRx2I",
        Warning: "faqbbcode_Warning_3Hvtr",
        FAQImage: "faqbbcode_FAQImage_3Eebt",
      };
    },
    X2UP: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var r = n("vDqi"),
        i = n.n(r),
        a = n("q1tI"),
        o = n.n(a);
      function s(e) {
        var t = o.a.useRef(i.a.CancelToken.source());
        return (
          o.a.useEffect(
            function () {
              var n = t.current;
              return function () {
                return n.cancel(e ? e + ": unmounting" : "unmounting");
              };
            },
            [e]
          ),
          t.current
        );
      }
    },
    erIC: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "ConferenceRoutes", function () {
          return Oe;
        });
      var r = n("q1tI"),
        i = n.n(r),
        a = n("EC67"),
        o = n("WplJ"),
        s = n("rcjX"),
        u = n("mgoM"),
        c = n("kLLr"),
        l = n("N2vu"),
        d = n("lkRc"),
        m = (function () {
          function e() {
            (this.m_mapConferences = new Map()),
              (this.m_mapConferenceCallback = new Map());
          }
          return (
            (e.prototype.GetConferenceInfo = function (e) {
              return this.m_mapConferences.get(e);
            }),
            (e.Get = function () {
              return (
                e.s_Singleton ||
                  ((e.s_Singleton = new e()),
                  e.s_Singleton.Init(),
                  "dev" == d.c.WEB_UNIVERSE &&
                    (window.g_ConferenceStore = e.s_Singleton)),
                e.s_Singleton
              );
            }),
            (e.prototype.Init = function () {
              var e = Object(d.g)("conferenceinfo", "application_config");
              if (this.ValidateStoreDefault(e)) {
                var t = Object(u.d)(d.c.LANGUAGE),
                  n = Object(l.c)(e.clan_faq_about_page),
                  r = l.a.Get().GetFAQPublishedContent(n, t),
                  i = Object(s.d)(e.localized_logo, t, r.timestamp),
                  a = {
                    strConferenceID: e.vanity,
                    rtStartTime: e.start_rtime,
                    rtEndTime: e.end_rtime,
                    clanSteamID: new c.a(e.event_group_steamid),
                    broadcastSteamID: new c.a(e.broadcast_steamid),
                    bPartnerOnly: e.partner_only,
                    faqAboutPage: r,
                    strLocalizedLogos: "string" == typeof i ? [i] : i,
                    globalQandASessionID: e.global_qanda_session_id,
                  };
                this.m_mapConferences.set(e.vanity, a);
              }
            }),
            (e.prototype.ValidateStoreDefault = function (e) {
              var t = e;
              return (
                !(!t || "object" != typeof t) &&
                "string" == typeof t.event_group_steamid &&
                "number" == typeof t.start_rtime &&
                "number" == typeof t.end_rtime
              );
            }),
            e
          );
        })(),
        f = n("IjL/"),
        p = n("YLyR"),
        b = n("UxvL"),
        _ = n("fbnN"),
        v = n("TLQK");
      function g(e) {
        e.conferenceInfo;
        return "dev" != d.c.WEB_UNIVERSE ? null : r.createElement("div", null);
      }
      var h = n("mrSG"),
        y = n("WF3T"),
        S = n("9w6b"),
        B = (function () {
          function e() {
            this.m_inFlight = null;
          }
          return (
            (e.prototype.LoadInitialCalendarData = function (e, t) {
              return Object(h.b)(this, void 0, void 0, function () {
                return Object(h.e)(this, function (n) {
                  return (
                    this.m_inFlight ||
                      (this.m_inFlight = this.InternalLoadInitialCalendarData(
                        e,
                        t
                      )),
                    [2, this.m_inFlight]
                  );
                });
              });
            }),
            (e.prototype.InternalLoadInitialCalendarData = function (e, t) {
              return Object(h.b)(this, void 0, void 0, function () {
                var n, r;
                return Object(h.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        S.a.IsInitialized() || S.a.InitGlobal(),
                        Object(y.c)({
                          collectionid: t,
                          bSectionByDay: !0,
                          rtCalendarEnd: e,
                        }),
                        (n = Object(y.b)()),
                        (r = Object(d.g)(
                          "conference_calendar",
                          "application_config"
                        ))
                          ? ("dev" == d.c.WEB_UNIVERSE &&
                              console.log(
                                "Conference LandingPage loading initial events: " +
                                  r.length,
                                r
                              ),
                            [4, n.RegisterCalendarEventsAndModels(r)])
                          : [3, 2]
                      );
                    case 1:
                      i.sent(), (i.label = 2);
                    case 2:
                      return (
                        n.SetFilteredView(function (e) {
                          return !0;
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.Get = function () {
              return e.m_singleton || (e.m_singleton = new e()), e.m_singleton;
            }),
            e
          );
        })(),
        C = n("1BdX"),
        A = n("5izx"),
        w = n("6oCP"),
        j = n("fA8f"),
        O = n("cGQe"),
        E = n("r3N9"),
        F = n("GiuM"),
        M = n("opsS");
      function Q(e) {
        var t = e.displayLocation,
          n = e.fnChangeModalEvent,
          i = r.useState(null),
          a = i[0],
          o = i[1],
          s = Object(F.d)("emgid", null),
          u = s[0],
          l = s[1],
          d = Object(F.d)("emclan", null),
          m = d[0],
          f = d[1];
        return (
          Object(M.d)(n, function (e, t) {
            l(e), f(c.a.InitFromClanID(t).ConvertTo64BitString());
          }),
          r.useEffect(
            function () {
              if (null != u && null != m) {
                var e = new c.a(m);
                w.d
                  .LoadPartnerEventFromClanEventGIDAndClanSteamID(e, u, 0)
                  .then(o);
              }
            },
            [u, m]
          ),
          a
            ? r.createElement(E.a, {
                appid: a.appid,
                trackingLocation: t,
                announcementGID: a.GetAnnouncementGID(),
                partnerEventStore: w.d,
                eventModel: a,
                showAppHeader: !0,
                closeModal: function () {
                  o(null), f(null), l(null);
                },
              })
            : null
        );
      }
      var T = n("gPCo"),
        I = n("0OaU"),
        z = n("r64O"),
        R = n("qiKp"),
        D = n("exH9"),
        U = n("Z1oF"),
        N = n("CdLH"),
        q = n("JsZI");
      function W(e) {
        var t = Object(y.b)(),
          n = Object(A.b)(),
          i = t.GetActiveEventsAt(n) || [],
          a = r.useState(new R.a())[0];
        return 0 == t.GetNumEventsLoaded()
          ? r.createElement(
              "div",
              null,
              Object(v.f)("#Conference_No_Schedule_Yet")
            )
          : r.createElement(
              "div",
              { className: q.UpcomingEventsCtn },
              r.createElement(Q, { displayLocation: 6, fnChangeModalEvent: a }),
              r.createElement(P, { rgActiveEvents: i }),
              r.createElement(L, {
                rgActiveEvents: i,
                fnDisplayModalEvent: function (e, t) {
                  return a.Dispatch(e, t);
                },
              })
            );
      }
      function G(e) {
        return r.createElement(
          H,
          Object(h.a)({}, e),
          r.createElement(W, Object(h.a)({}, e))
        );
      }
      function L(e) {
        var t = e.rgActiveEvents,
          n = Object(y.b)(),
          i = Object(A.b)(),
          a = n
            .GetCalendarItemsInTimeRange(i + 1)
            .rgCalendarItems.filter(function (e) {
              return !t.some(function (t) {
                return t.GID == e.unique_id;
              });
            })
            .sort(function (e, t) {
              return e.start_time - t.start_time;
            });
        return 0 == a.length
          ? r.createElement(
              "div",
              null,
              Object(v.f)("#Conference_No_More_Schedule")
            )
          : r.createElement(
              "div",
              { className: q.UpcomingEventsCtn },
              r.createElement(
                "div",
                { className: q.SectionTitle },
                Object(v.f)("#Conference_ScheduleNext")
              ),
              r.createElement(
                "div",
                { className: q.EventSchedCtn },
                a.map(function (n, i) {
                  return r.createElement(k, {
                    key: n.unique_id,
                    bDisplayAsUpNext: Boolean(0 == i && t.length >= 1),
                    calendarItem: n,
                    fnDisplayModalEvent: e.fnDisplayModalEvent,
                  });
                })
              )
            );
      }
      function k(e) {
        var t = e.calendarItem,
          n = e.bDisplayAsUpNext,
          i = e.fnDisplayModalEvent,
          a = w.d.GetClanEventModel(t.unique_id),
          o = Object(u.d)(d.c.LANGUAGE),
          s = Object(A.b)(),
          c = a.GetStartTimeAndDateUnixSeconds(),
          l = Object(N.b)(new Date(1e3 * s), new Date(1e3 * c));
        return r.createElement(
          "div",
          {
            className: q.EventItemCtn,
            onClick: function () {
              return i(a.GID, a.clanSteamID.GetAccountID());
            },
          },
          r.createElement(
            "div",
            { className: q.Title },
            a.GetNameWithFallback(o)
          ),
          r.createElement(
            "div",
            null,
            !l && r.createElement("div", null, Object(v.k)(c, !0)),
            r.createElement(
              "div",
              null,
              Boolean(n && l)
                ? Object(v.f)(
                    "#Conference_StartInMin",
                    Math.max(1, Math.floor((c - s) / 60))
                  )
                : Object(v.f)("#Conference_StartsAt", Object(U.h)(c))
            )
          ),
          r.createElement(
            "div",
            { className: Object(D.a)(q.ReminderContainer, q.OnlyIcon) },
            r.createElement(O.a, {
              eventModel: a,
              eventGID: a.GID,
              lang: o,
              bOnlyShowIcon: !0,
              bExpandLeft: !0,
              bShowStartTime: !1,
            })
          )
        );
      }
      function P(e) {
        var t = e.rgActiveEvents;
        if (!t || 0 == t.length) return null;
        Object(z.a)(
          1 == t.length,
          "Unexpected number of active events in the conference tool"
        );
        var n = t[0],
          i = Object(u.d)(d.c.LANGUAGE),
          a = C.a.ParseEventModelPresenters(n, i);
        return r.createElement(
          "div",
          { className: q.ActiveEventCtn },
          r.createElement(
            "div",
            { className: q.Title },
            n.GetNameWithFallback(i)
          ),
          Boolean(a) &&
            a.map(function (e) {
              return r.createElement(
                T.b,
                {
                  key: "presenter_" + e.name,
                  name: e.name,
                  title: e.title,
                  photo: e.photo,
                  company: e.company,
                  bioString: e.bio,
                },
                r.createElement("div", null, e.name)
              );
            }),
          r.createElement(
            "div",
            { className: q.EventDescription },
            n.GetSummaryWithFallback(i)
          )
        );
      }
      function V(e) {
        var t = e.conferenceInfo,
          n = Object(y.b)(),
          i = Object(A.b)(),
          a = n.GetActiveEventsAt(i) || [],
          o = r.useState(new R.a())[0],
          s = n
            .GetCalendarItemsInTimeRange(t.rtStartTime - 1, i)
            .rgCalendarItems.filter(function (e) {
              return !a.some(function (t) {
                return t.GID == e.unique_id;
              });
            })
            .sort(function (e, t) {
              return e.start_time - t.start_time;
            });
        return 0 == s.length
          ? r.createElement(
              "div",
              null,
              Object(v.f)("#Conference_NoPastEvents")
            )
          : r.createElement(
              "div",
              { className: q.PastEventsCtn },
              r.createElement(Q, { displayLocation: 6, fnChangeModalEvent: o }),
              s.map(function (e) {
                var t = w.d.GetClanEventModel(e.unique_id);
                return r.createElement(j.a, {
                  key: "row" + e.unique_id,
                  eventModel: t,
                  calendarEvent: e,
                  bSuppressHoverEffects: !1,
                  mode: "wide",
                  fnOnClicked: function () {
                    return o.Dispatch(t.GID, t.clanSteamID.GetAccountID());
                  },
                });
              })
            );
      }
      function x(e) {
        return r.createElement(
          H,
          Object(h.a)({}, e),
          r.createElement(V, Object(h.a)({}, e))
        );
      }
      function H(e) {
        var t = e.conferenceInfo,
          n = Object(r.useState)(!0),
          i = n[0],
          a = n[1];
        return (
          Object(r.useEffect)(
            function () {
              B.Get()
                .LoadInitialCalendarData(t.rtEndTime, t.strConferenceID)
                .finally(function () {
                  return a(!1);
                });
            },
            [t.rtEndTime, t.strConferenceID]
          ),
          i
            ? r.createElement(I.a, null)
            : r.createElement(r.Fragment, null, e.children)
        );
      }
      var J = n("knQc"),
        Y = n("Lfwj"),
        K = n("eN6m"),
        X = n("trWU"),
        Z = n("nWbB"),
        $ = n("boaH");
      function ee(e) {
        var t = e.conferenceInfo.broadcastSteamID.ConvertTo64BitString();
        return r.createElement(
          f.a,
          null,
          r.createElement(X.a, {
            steamIDBroadcast: t,
            watchLocation: 5,
            bStartMuted: !0,
          })
        );
      }
      function te(e) {
        var t = e.conferenceInfo.broadcastSteamID.ConvertTo64BitString(),
          n = $.a.GetBroadcast(t);
        return r.createElement(
          "div",
          {
            className: Object(D.a)(
              Y.BroadcastChatCtn,
              e.className ? "" + e.className : ""
            ),
          },
          r.createElement(
            f.a,
            null,
            r.createElement(K.a, {
              emoticonStore: Z.g,
              watchLocation: 5,
              steamID: t,
              broadcastID: n ? n.m_ulBroadcastID : void 0,
            })
          )
        );
      }
      var ne = n("6Y59"),
        re = n("5STL"),
        ie = n("vDqi"),
        ae = n.n(ie),
        oe = n("X2UP"),
        se = n("OS6B"),
        ue = (function () {
          function e() {
            (this.m_mapQAndASessions = new Map()),
              (this.m_mapQAndAChangeCallbackList = new Map()),
              (this.m_mapQuestions = new Map()),
              (this.m_mapQuestionCallbackList = new Map()),
              "dev" == d.c.WEB_UNIVERSE && (window.g_FAQStore = this);
          }
          return (
            (e.Get = function () {
              return e.s_Singleton || (e.s_Singleton = new e()), e.s_Singleton;
            }),
            (e.prototype.GetQAndACallbackList = function (e) {
              return (
                this.m_mapQAndAChangeCallbackList.has(e) ||
                  this.m_mapQAndAChangeCallbackList.set(e, new R.a()),
                this.m_mapQAndAChangeCallbackList.get(e)
              );
            }),
            (e.prototype.GetQuestionCallbackList = function (e) {
              return (
                this.m_mapQuestionCallbackList.has(e) ||
                  this.m_mapQuestionCallbackList.set(e, new R.a()),
                this.m_mapQuestionCallbackList.get(e)
              );
            }),
            (e.prototype.GetSession = function (e) {
              return this.m_mapQAndASessions.get(e);
            }),
            (e.prototype.GetQuestion = function (e) {
              return this.m_mapQuestions.get(e);
            }),
            (e.prototype.LoadSession = function (e, t, n) {
              var r, i, a, o, s, u, c, l, m, f, p, b;
              return Object(h.b)(this, void 0, void 0, function () {
                var _, v, g, y, S, B, C, A, w, j, O, E, F, M, Q, T, I, z;
                return Object(h.e)(this, function (R) {
                  switch (R.label) {
                    case 0:
                      (_ =
                        d.i.logged_in &&
                        (t ||
                          !this.m_mapQAndASessions.has(e) ||
                          this.m_mapQAndASessions.get(e).bUserCanModerate)),
                        (v = _
                          ? "/ajaxgetqandasessionforuser/"
                          : "/ajaxgetqandasession/"),
                        (g =
                          d.c.COMMUNITY_BASE_URL +
                          "questions/" +
                          d.b.VANITY_ID +
                          v +
                          e),
                        (y = {}),
                        (S = null),
                        (R.label = 1);
                    case 1:
                      return (
                        R.trys.push([1, 3, , 4]),
                        [
                          4,
                          ae.a.get(g, {
                            params: y,
                            cancelToken: null == n ? void 0 : n.token,
                          }),
                        ]
                      );
                    case 2:
                      if (
                        200 == (null == (B = R.sent()) ? void 0 : B.status) &&
                        1 ==
                          (null === (r = B.data) || void 0 === r
                            ? void 0
                            : r.success) &&
                        B.data.qanda &&
                        B.data.questions
                      ) {
                        for (C = 0, A = B.data.questions; C < A.length; C++)
                          (w = A[C]),
                            (j = w.gidQuestion),
                            (O =
                              null !==
                                (a =
                                  null === (i = this.m_mapQuestions.get(j)) ||
                                  void 0 === i
                                    ? void 0
                                    : i.bUserUpVoted) && void 0 !== a
                                ? a
                                : w.bUserUpVoted),
                            (E =
                              null !==
                                (s =
                                  null === (o = this.m_mapQuestions.get(j)) ||
                                  void 0 === o
                                    ? void 0
                                    : o.bHidden) && void 0 !== s
                                ? s
                                : w.bHidden),
                            (F = Object(h.a)(Object(h.a)({}, w), {
                              bUserUpVoted: O,
                              bHidden: E,
                            })),
                            this.m_mapQuestions.set(j, F),
                            this.GetQuestionCallbackList(j).Dispatch(F);
                        return (
                          (M =
                            null !==
                              (c =
                                null === (u = this.m_mapQAndASessions.get(e)) ||
                                void 0 === u
                                  ? void 0
                                  : u.bUserCanModerate) && void 0 !== c
                              ? c
                              : B.data.qanda.bUserCanModerate),
                          (Q =
                            null !==
                              (m =
                                null === (l = this.m_mapQAndASessions.get(e)) ||
                                void 0 === l
                                  ? void 0
                                  : l.bUserCanAskQuestions) && void 0 !== m
                              ? m
                              : B.data.qanda.bUserCanAskQuestions),
                          (T = Object(h.a)(Object(h.a)({}, B.data.qanda), {
                            bUserCanModerate: M,
                            bUserCanAskQuestions: Q,
                          })),
                          this.m_mapQAndASessions.set(e, T),
                          this.GetQAndACallbackList(e).Dispatch(T),
                          [2, 1]
                        );
                      }
                      return (S = { response: B }), [3, 4];
                    case 3:
                      return (I = R.sent()), (S = I), [3, 4];
                    case 4:
                      return (
                        (z = Object(se.a)(S)),
                        console.error(
                          "Could not load Q&A",
                          e,
                          z.strErrorMsg,
                          z
                        ),
                        [
                          2,
                          null !==
                            (b =
                              null ===
                                (p =
                                  null ===
                                    (f = null == S ? void 0 : S.response) ||
                                  void 0 === f
                                    ? void 0
                                    : f.data) || void 0 === p
                                ? void 0
                                : p.success) && void 0 !== b
                            ? b
                            : 2,
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.AskNewQuestion = function (e, t, n) {
              var r, i, a, o, s;
              return Object(h.b)(this, void 0, void 0, function () {
                var u, c, l, m, f, p;
                return Object(h.e)(this, function (b) {
                  switch (b.label) {
                    case 0:
                      if (
                        !d.i.logged_in ||
                        !d.c.SESSIONID ||
                        !(null === (r = this.m_mapQAndASessions.get(e)) ||
                        void 0 === r
                          ? void 0
                          : r.bUserCanAskQuestions)
                      )
                        return [2, 15];
                      (u =
                        d.c.COMMUNITY_BASE_URL +
                        "questions/" +
                        d.b.VANITY_ID +
                        "/ajaxaskquestion/" +
                        e),
                        (c = new FormData()).append("sessionid", d.c.SESSIONID),
                        c.append("question", t),
                        (l = null),
                        (b.label = 1);
                    case 1:
                      return (
                        b.trys.push([1, 3, , 4]),
                        [
                          4,
                          ae.a.post(u, c, {
                            withCredentials: !0,
                            cancelToken: null == n ? void 0 : n.token,
                          }),
                        ]
                      );
                    case 2:
                      return 200 ==
                        (null == (m = b.sent()) ? void 0 : m.status) &&
                        1 ==
                          (null === (i = m.data) || void 0 === i
                            ? void 0
                            : i.success)
                        ? (!0, this.LoadSession(e, true, n), [2, 1])
                        : ((l = { response: m }), [3, 4]);
                    case 3:
                      return (f = b.sent()), (l = f), [3, 4];
                    case 4:
                      return (
                        (p = Object(se.a)(l)),
                        console.error(
                          "Could not upload question",
                          e,
                          t,
                          p.strErrorMsg,
                          p
                        ),
                        [
                          2,
                          null !==
                            (s =
                              null ===
                                (o =
                                  null ===
                                    (a = null == l ? void 0 : l.response) ||
                                  void 0 === a
                                    ? void 0
                                    : a.data) || void 0 === o
                                ? void 0
                                : o.success) && void 0 !== s
                            ? s
                            : 2,
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.ModerateQuestion = function (e, t, n, r) {
              var i, a, o, s, u;
              return Object(h.b)(this, void 0, void 0, function () {
                var c, l, m, f, p, b, _, v;
                return Object(h.e)(this, function (g) {
                  switch (g.label) {
                    case 0:
                      if (
                        !d.i.logged_in ||
                        !d.c.SESSIONID ||
                        !(null === (i = this.m_mapQAndASessions.get(e)) ||
                        void 0 === i
                          ? void 0
                          : i.bUserCanModerate)
                      )
                        return [2, 15];
                      if (1 != n && 3 != n) return [2, 8];
                      if (
                        ((c = this.m_mapQuestions.get(t)),
                        (l = 3 == n) === c.bHidden)
                      )
                        return [2, 1];
                      (c = Object(h.a)(Object(h.a)({}, c), { bHidden: l })),
                        this.m_mapQuestions.set(t, c),
                        this.GetQuestionCallbackList(t).Dispatch(c),
                        (m =
                          d.c.COMMUNITY_BASE_URL +
                          "questions/" +
                          d.b.VANITY_ID +
                          "/ajaxmoderatequestion/" +
                          e),
                        (f = new FormData()).append("sessionid", d.c.SESSIONID),
                        f.append("gidquestion", t),
                        f.append("action", l ? "hide" : "show"),
                        (p = null),
                        (g.label = 1);
                    case 1:
                      return (
                        g.trys.push([1, 3, , 4]),
                        [
                          4,
                          ae.a.post(m, f, {
                            withCredentials: !0,
                            cancelToken: null == r ? void 0 : r.token,
                          }),
                        ]
                      );
                    case 2:
                      return 200 ==
                        (null == (b = g.sent()) ? void 0 : b.status) &&
                        1 ==
                          (null === (a = b.data) || void 0 === a
                            ? void 0
                            : a.success)
                        ? (!0, this.LoadSession(e, true, r), [2, 1])
                        : ((p = { response: b }), [3, 4]);
                    case 3:
                      return (_ = g.sent()), (p = _), [3, 4];
                    case 4:
                      return (
                        (v = Object(se.a)(p)),
                        console.error(
                          "Could not moderate question",
                          e,
                          t,
                          n,
                          v.strErrorMsg,
                          v
                        ),
                        [
                          2,
                          null !==
                            (u =
                              null ===
                                (s =
                                  null ===
                                    (o = null == p ? void 0 : p.response) ||
                                  void 0 === o
                                    ? void 0
                                    : o.data) || void 0 === s
                                ? void 0
                                : s.success) && void 0 !== u
                            ? u
                            : 2,
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.AnswerQuestion = function (e, t, n, r) {
              var i, a, o, s, u;
              return Object(h.b)(this, void 0, void 0, function () {
                var c, l, m, f, p, b;
                return Object(h.e)(this, function (_) {
                  switch (_.label) {
                    case 0:
                      if (
                        !d.i.logged_in ||
                        !d.c.SESSIONID ||
                        !(null === (i = this.m_mapQAndASessions.get(e)) ||
                        void 0 === i
                          ? void 0
                          : i.bUserCanModerate)
                      )
                        return [2, 15];
                      (c =
                        d.c.COMMUNITY_BASE_URL +
                        "questions/" +
                        d.b.VANITY_ID +
                        "/ajaxanswerquestion/" +
                        e),
                        (l = new FormData()).append("sessionid", d.c.SESSIONID),
                        l.append("gidquestion", t),
                        l.append("answer", n),
                        (m = null),
                        (_.label = 1);
                    case 1:
                      return (
                        _.trys.push([1, 3, , 4]),
                        [
                          4,
                          ae.a.post(c, l, {
                            withCredentials: !0,
                            cancelToken: null == r ? void 0 : r.token,
                          }),
                        ]
                      );
                    case 2:
                      return 200 ==
                        (null == (f = _.sent()) ? void 0 : f.status) &&
                        1 ==
                          (null === (a = f.data) || void 0 === a
                            ? void 0
                            : a.success)
                        ? (!0, this.LoadSession(e, true, r), [2, 1])
                        : ((m = { response: f }), [3, 4]);
                    case 3:
                      return (p = _.sent()), (m = p), [3, 4];
                    case 4:
                      return (
                        (b = Object(se.a)(m)),
                        console.error(
                          "Could not upload answer",
                          e,
                          t,
                          n,
                          b.strErrorMsg,
                          b
                        ),
                        [
                          2,
                          null !==
                            (u =
                              null ===
                                (s =
                                  null ===
                                    (o = null == m ? void 0 : m.response) ||
                                  void 0 === o
                                    ? void 0
                                    : o.data) || void 0 === s
                                ? void 0
                                : s.success) && void 0 !== u
                            ? u
                            : 2,
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.VoteOnQuestion = function (e, t, n, r) {
              var i, a, o, s, u;
              return Object(h.b)(this, void 0, void 0, function () {
                var c, l, m, f, p, b, _, v;
                return Object(h.e)(this, function (g) {
                  switch (g.label) {
                    case 0:
                      if (
                        !d.i.logged_in ||
                        !d.c.SESSIONID ||
                        !(null === (i = this.m_mapQAndASessions.get(e)) ||
                        void 0 === i
                          ? void 0
                          : i.bUserCanAskQuestions)
                      )
                        return [2, 15];
                      if (n === this.m_mapQuestions.get(t).bUserUpVoted)
                        return [2, 1];
                      (c = this.m_mapQuestions.get(t)),
                        (l = c.nVoteCount + (n ? 1 : -1)),
                        (c = Object(h.a)(Object(h.a)({}, c), {
                          nVoteCount: l,
                          bUserUpVoted: n,
                        })),
                        this.m_mapQuestions.set(t, c),
                        this.GetQuestionCallbackList(t).Dispatch(c),
                        (m =
                          d.c.COMMUNITY_BASE_URL +
                          "questions/" +
                          d.b.VANITY_ID +
                          "/ajaxvoteforquestion/" +
                          e),
                        (f = new FormData()).append("sessionid", d.c.SESSIONID),
                        f.append("gidquestion", t),
                        f.append("up", n ? "1" : "0"),
                        (p = null),
                        (g.label = 1);
                    case 1:
                      return (
                        g.trys.push([1, 3, , 4]),
                        [
                          4,
                          ae.a.post(m, f, {
                            withCredentials: !0,
                            cancelToken: null == r ? void 0 : r.token,
                          }),
                        ]
                      );
                    case 2:
                      return 200 ==
                        (null == (b = g.sent()) ? void 0 : b.status) &&
                        1 ==
                          (null === (a = b.data) || void 0 === a
                            ? void 0
                            : a.success)
                        ? (!0, this.LoadSession(e, true, r), [2, 1])
                        : ((p = { response: b }), [3, 4]);
                    case 3:
                      return (_ = g.sent()), (p = _), [3, 4];
                    case 4:
                      return (
                        (v = Object(se.a)(p)),
                        console.error(
                          "Could not upload vote",
                          e,
                          t,
                          n,
                          v.strErrorMsg,
                          v
                        ),
                        [
                          2,
                          null !==
                            (u =
                              null ===
                                (s =
                                  null ===
                                    (o = null == p ? void 0 : p.response) ||
                                  void 0 === o
                                    ? void 0
                                    : o.data) || void 0 === s
                                ? void 0
                                : s.success) && void 0 !== u
                            ? u
                            : 2,
                        ]
                      );
                  }
                });
              });
            }),
            e
          );
        })();
      var ce = n("Mgs7"),
        le = n("BFsE"),
        de = n("5E+2"),
        me = n("hII0"),
        fe = n.n(me);
      function pe(e) {
        var t = e.gidSession,
          n = e.gidQuestion,
          r = e.bUserCanModerate,
          a = e.bUserCanVote,
          o = (function (e) {
            var t = i.a.useState(ue.Get().GetQuestion(e)),
              n = t[0],
              r = t[1];
            Object(M.d)(ue.Get().GetQuestionCallbackList(e), r);
            var a = i.a.useState(!!n),
              o = a[0];
            return a[1], [n, !!n || o];
          })(n),
          s = o[0],
          u =
            (o[1],
            (function (e, t) {
              var n,
                r = i.a.useCallback(
                  function (n) {
                    return ue.Get().VoteOnQuestion(e, t, n);
                  },
                  [e, t]
                );
              return (
                (null === (n = ue.Get().GetSession(e)) || void 0 === n
                  ? void 0
                  : n.bUserCanAskQuestions) && r
              );
            })(t, n)),
          c = a
            ? function () {
                return u(!s.bUserUpVoted);
              }
            : null,
          l = a
            ? s.bUserUpVoted
              ? fe.a.Vote_Positive
              : fe.a.Vote_Ready
            : fe.a.Vote_CannotVote,
          d = Date.now() / 1e3 - s.rtPostTime,
          m = d < 86400 ? Object(v.q)(d, !1, !0) : Object(v.p)(s.rtPostTime);
        return !s || ((null == s ? void 0 : s.bHidden) && !r)
          ? null
          : i.a.createElement(
              "div",
              {
                className: Object(D.a)(fe.a.Question, s.bHidden && fe.a.Hidden),
              },
              i.a.createElement(
                "div",
                { className: fe.a.QuestionCtn },
                i.a.createElement("div", { className: fe.a.UserAvatar }),
                i.a.createElement(
                  "div",
                  { className: fe.a.QuestionText },
                  i.a.createElement(
                    "div",
                    { className: fe.a.QuestionTitle },
                    s.strQuestionText
                  ),
                  i.a.createElement(
                    "div",
                    { className: fe.a.QuestionStats },
                    i.a.createElement(
                      "div",
                      { className: fe.a.PostTime },
                      i.a.createElement(
                        p.g,
                        {
                          rtFullDate: s.rtPostTime,
                          className: fe.a.PostTime,
                          stylesmodule: fe.a,
                        },
                        m
                      )
                    ),
                    i.a.createElement(
                      de.a,
                      {
                        toolTipContent: s.bUserUpVoted
                          ? Object(v.f)("#QAndA_VoteRemoveTooltip")
                          : Object(v.f)("#QAndA_VoteTooltip"),
                      },
                      i.a.createElement(
                        "div",
                        { className: Object(D.a)(l, fe.a.Votes), onClick: c },
                        i.a.createElement(ne.db, { className: fe.a.RateIcon }),
                        i.a.createElement(
                          "div",
                          { className: fe.a.VoteCount },
                          Number(s.nVoteCount).toLocaleString()
                        )
                      )
                    )
                  )
                )
              ),
              2 == s.eState &&
                !!s.rtAnswerTime &&
                i.a.createElement(
                  "div",
                  { className: fe.a.Answer },
                  i.a.createElement(
                    "div",
                    { className: fe.a.AnswerText },
                    " ",
                    s.strAnswerText,
                    " "
                  ),
                  i.a.createElement(
                    "div",
                    { className: fe.a.QuestionStats },
                    i.a.createElement(
                      p.g,
                      {
                        rtFullDate: s.rtAnswerTime,
                        className: fe.a.PostTime,
                        stylesmodule: fe.a,
                      },
                      m
                    )
                  )
                ),
              r &&
                i.a.createElement(be, {
                  gidSession: t,
                  gidQuestion: n,
                  bHidden: s.bHidden,
                })
            );
      }
      function be(e) {
        var t = e.gidSession,
          n = e.gidQuestion,
          r = e.bHidden,
          a = (function (e, t) {
            var n,
              r = this,
              a = Object(oe.a)("useQAndASession"),
              o = i.a.useCallback(
                function (n) {
                  return Object(h.b)(r, void 0, void 0, function () {
                    return Object(h.e)(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return [4, ue.Get().AnswerQuestion(e, t, n, a)];
                        case 1:
                          return [2, r.sent()];
                      }
                    });
                  });
                },
                [e, t, a]
              ),
              s = i.a.useCallback(
                function (n) {
                  return Object(h.b)(r, void 0, void 0, function () {
                    return Object(h.e)(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return [4, ue.Get().ModerateQuestion(e, t, n, a)];
                        case 1:
                          return [2, r.sent()];
                      }
                    });
                  });
                },
                [e, t, a]
              );
            return (
              null === (n = ue.Get().GetSession(e)) || void 0 === n
                ? void 0
                : n.bUserCanModerate
            )
              ? [o, s]
              : [null, null];
          })(t, n),
          o = a[0],
          s = a[1];
        return i.a.createElement(
          "div",
          { className: fe.a.ModeratorSection },
          i.a.createElement(
            "div",
            { className: fe.a.ToolRow },
            i.a.createElement(ge, {
              strPrompt: Object(v.f)("#QAndA_AnswerPrompt"),
              fnSubmit: o,
            })
          ),
          i.a.createElement(
            "div",
            { className: fe.a.ToolRow },
            i.a.createElement(
              "div",
              { className: fe.a.ToolLabel },
              Object(v.f)("#QAndA_ModeratorLabel")
            ),
            i.a.createElement(
              ce.d,
              {
                onClick: function () {
                  return s(r ? 1 : 3);
                },
                className: fe.a.InputButton,
              },
              Object(v.f)(
                r ? "#QAndA_ModerateApproveButton" : "#QAndA_ModerateHideButton"
              )
            )
          )
        );
      }
      function _e(e) {
        var t = e.gidSession,
          n = (function (e) {
            var t = this,
              n = i.a.useState(ue.Get().GetSession(e)),
              r = n[0],
              a = n[1];
            Object(M.d)(ue.Get().GetQAndACallbackList(e), a);
            var o = i.a.useState(!!r),
              s = o[0],
              u = o[1],
              c = Object(oe.a)("useQAndASession"),
              l = i.a.useCallback(
                function () {
                  u(!1),
                    ue
                      .Get()
                      .LoadSession(e, !1, c)
                      .finally(function () {
                        return u(!0);
                      });
                },
                [e, c]
              ),
              d = i.a.useCallback(
                function (n) {
                  return Object(h.b)(t, void 0, void 0, function () {
                    return Object(h.e)(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, ue.Get().AskNewQuestion(e, n, c)];
                        case 1:
                          return [2, t.sent()];
                      }
                    });
                  });
                },
                [e, c]
              );
            return (
              i.a.useEffect(
                function () {
                  l();
                },
                [l]
              ),
              [r, l, d, s]
            );
          })(t),
          r = n[0],
          a = n[1],
          o = n[2],
          s = n[3];
        return i.a.createElement(
          "div",
          { className: fe.a.QAMainCtn },
          i.a.createElement(
            "div",
            { className: fe.a.QAHeader },
            i.a.createElement(
              ce.d,
              {
                onClick: a,
                disabled: !s,
                className: Object(D.a)(fe.a.InputButton, fe.a.Reload),
              },
              i.a.createElement(ne.R, null)
            ),
            (null == r ? void 0 : r.bUserCanAskQuestions)
              ? i.a.createElement(ve, { fnAskQuestion: o })
              : s && i.a.createElement(he, null)
          ),
          i.a.createElement(
            "div",
            { className: fe.a.QuestionsCtn },
            i.a.createElement(
              "div",
              { className: fe.a.InsetShadowTopCtn },
              i.a.createElement("div", { className: fe.a.InsetShadowTop })
            ),
            i.a.createElement(
              "div",
              { className: fe.a.QuestionList },
              s
                ? null == r
                  ? void 0
                  : r.rgQuestionGIDs.map(function (e) {
                      return i.a.createElement(pe, {
                        key: e,
                        gidSession: t,
                        gidQuestion: e,
                        bUserCanModerate: r.bUserCanModerate,
                        bUserCanVote: r.bUserCanAskQuestions,
                      });
                    })
                : i.a.createElement(I.a, { position: "center" })
            )
          )
        );
      }
      function ve(e) {
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            "div",
            { className: fe.a.Description },
            Object(v.f)("#QAndA_HeaderDescription")
          ),
          i.a.createElement(ge, {
            strPrompt: Object(v.f)("#QAndA_QuestionPrompt"),
            fnSubmit: e.fnAskQuestion,
          })
        );
      }
      function ge(e) {
        var t = this,
          n = e.strPrompt,
          r = e.fnSubmit,
          a = i.a.useState(""),
          o = a[0],
          s = a[1],
          u = i.a.useState(!1),
          c = u[0],
          l = u[1];
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            "div",
            { className: fe.a.InputCtn },
            i.a.createElement(ce.m, {
              type: "text",
              placeholder: n,
              maxLength: 512,
              value: o,
              onChange: function (e) {
                return s(e.target.value);
              },
            }),
            i.a.createElement(
              "div",
              { className: fe.a.ButtonCtn },
              c &&
                i.a.createElement(
                  "div",
                  { className: fe.a.SaveSpinner },
                  i.a.createElement(I.a, { size: "small", position: "center" })
                ),
              i.a.createElement(
                ce.d,
                {
                  onClick: function () {
                    return Object(h.b)(t, void 0, void 0, function () {
                      return Object(h.e)(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return l(!0), [4, r(o)];
                          case 1:
                            return 1 == e.sent() && s(""), l(!1), [2];
                        }
                      });
                    });
                  },
                  disabled: c || !o,
                  className: fe.a.InputButton,
                },
                Object(v.f)("#QAndA_SubmitCommentButton")
              )
            )
          )
        );
      }
      function he(e) {
        return i.a.createElement(
          "div",
          { className: fe.a.Description },
          i.a.createElement(
            "div",
            { className: fe.a.LogInPrompt },
            Object(v.f)("#QAndA_LogInPrompt")
          ),
          !d.i.logged_in &&
            i.a.createElement(
              ce.d,
              { onClick: le.a, className: fe.a.InputButton },
              Object(v.f)("#Login_SignIn")
            )
        );
      }
      function ye(e) {
        var t = e.conferenceInfo;
        return r.createElement(
          "div",
          { className: re.SessionCtn },
          r.createElement(
            "div",
            { className: re.LeftCol },
            r.createElement(G, { conferenceInfo: t })
          ),
          r.createElement(
            "div",
            { className: re.MainCol },
            r.createElement(
              "div",
              { className: re.BroadcastCtn },
              r.createElement(ee, { conferenceInfo: t }),
              r.createElement("div", { className: re.videoContainerSizer })
            ),
            r.createElement(Se, { conferenceInfo: t })
          )
        );
      }
      function Se(e) {
        var t = e.conferenceInfo,
          n = r.useState(!0),
          i = n[0],
          a = n[1],
          o = r.useState(!0),
          s = o[0],
          u = o[1];
        return r.createElement(
          "div",
          { className: re.InteractionCtn },
          r.createElement(
            "div",
            { className: re.TabControlsCtn },
            r.createElement(
              "div",
              {
                className: re.Close,
                onClick: function () {
                  return a(!i);
                },
              },
              r.createElement(ne.A, { showChat: i })
            ),
            r.createElement(
              "div",
              { className: re.InnerChatTabs },
              r.createElement(
                "div",
                {
                  className: Object(D.a)(re.InnerChatTab),
                  onClick: function () {
                    a(!0), u(!1);
                  },
                },
                Object(v.f)("#Conference_Tab_Chat")
              ),
              r.createElement(
                "div",
                {
                  className: Object(D.a)(re.InnerChatTab),
                  onClick: function () {
                    a(!1), u(!0);
                  },
                },
                Object(v.f)("#Conference_Tab_QandA")
              )
            ),
            r.createElement(
              "div",
              {
                className: re.ShowBothTabs,
                onClick: function () {
                  a(!0), u(!0);
                },
              },
              r.createElement(ne.X, null)
            )
          ),
          r.createElement(
            "div",
            { className: re.ChatStack },
            Boolean((i && s) || (!s && !i)) &&
              r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  "div",
                  { className: re.ChatColumn },
                  r.createElement(te, {
                    conferenceInfo: t,
                    className: re.ChatCtn,
                  })
                ),
                r.createElement(
                  "div",
                  { className: re.QAColumn },
                  r.createElement(_e, { gidSession: t.globalQandASessionID })
                )
              ),
            Boolean(i && !s) &&
              r.createElement(te, { conferenceInfo: t, className: re.ChatCtn }),
            Boolean(!i && s) &&
              r.createElement(_e, { gidSession: t.globalQandASessionID })
          )
        );
      }
      function Be(e) {
        var t = e.conferenceInfo;
        if (!t.faqAboutPage)
          return r.createElement(
            "div",
            null,
            Object(v.f)("#Conference_NoAbout")
          );
        var n = t.faqAboutPage,
          i = n.title,
          a = n.content,
          o = n.timestamp;
        return r.createElement(
          "div",
          null,
          r.createElement("div", null, i),
          r.createElement(J.a, { text: a, bShowErrorInfo: !1 }),
          r.createElement(
            "div",
            null,
            Object(v.n)(
              "#Confernece_About_LastUpdated",
              r.createElement(p.a, { dateAndTime: o, bSingleLine: !0 })
            )
          )
        );
      }
      function Ce(e) {
        var t = e.conferenceInfo;
        return r.createElement(x, { conferenceInfo: t });
      }
      var Ae = n("PpkI");
      function we(e) {
        var t = e.strVanity,
          n = m.Get().GetConferenceInfo(t);
        return n
          ? r.createElement(
              "div",
              { className: Ae.ConferencePageCtn },
              r.createElement(je, { conferenceInfo: n }),
              r.createElement(g, { conferenceInfo: n })
            )
          : r.createElement("div", null, Object(v.f)("#Conference_Invalid"));
      }
      function je(e) {
        var t = e.conferenceInfo,
          n = function (e) {
            return window.sessionStorage.setItem(
              "conferenceCurrentTab",
              "?tab=" + e.key
            );
          },
          i = [
            {
              name: Object(v.f)("#Conference_tab_Live"),
              key: "live",
              contents: r.createElement(
                f.a,
                null,
                r.createElement(ye, { conferenceInfo: t })
              ),
              onClick: n,
            },
            {
              name: Object(v.f)("#Conference_tab_Past"),
              key: "past",
              contents: r.createElement(
                f.a,
                null,
                r.createElement(Ce, { conferenceInfo: t })
              ),
              onClick: n,
            },
            {
              name: Object(v.f)("#Conference_tab_Info"),
              key: "about",
              contents: r.createElement(
                f.a,
                null,
                r.createElement(Be, { conferenceInfo: t })
              ),
              onClick: n,
            },
          ];
        return r.createElement(
          "div",
          { className: Ae.ConferenceContentsCtn },
          r.createElement(
            "div",
            { className: Ae.ConferenceHeaderCtn },
            r.createElement(b.a, {
              className: Ae.LogoImage,
              rgSources: t.strLocalizedLogos,
            }),
            r.createElement(
              "div",
              null,
              r.createElement(p.c, {
                rtStartDate: t.rtStartTime,
                rtEndDate: t.rtEndTime,
              })
            )
          ),
          r.createElement(_.a, { tabs: i })
        );
      }
      var Oe = {
        LandingPage: function (e) {
          return "/conference/" + e;
        },
      };
      t.default = function (e) {
        return r.createElement(
          a.e,
          null,
          r.createElement(a.c, {
            path: Oe.LandingPage(":vanity_str"),
            render: function (e) {
              return r.createElement(o.a, {
                config: {
                  "conference-root": function () {
                    var t = e.match.params.vanity_str;
                    return r.createElement(we, {
                      strVanity: t.toLocaleLowerCase(),
                    });
                  },
                },
              });
            },
          }),
          r.createElement(a.c, { component: Ee })
        );
      };
      function Ee(e) {
        return "dev" !== d.c.WEB_UNIVERSE
          ? r.createElement(a.b, { to: "/" })
          : r.createElement(
              "div",
              null,
              "Unknown Route - Check ui/routes/conference.tsx to see if this page has been added to the list of routes."
            );
      }
    },
    fbnN: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      });
      var r = n("mrSG"),
        i = n("q1tI"),
        a = n("EC67"),
        o = n("exH9"),
        s = n("TLQK"),
        u = n("GiuM"),
        c = n("Cksw"),
        l = n.n(c),
        d = n("5E+2"),
        m = n("+d9t"),
        f = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.state = { activeTab: "" }), t;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.componentDidMount = function () {
              this.props.startingTab
                ? this.setState({ activeTab: this.props.startingTab })
                : !this.props.bDisableRouting &&
                  this.props.location &&
                  this.setState({
                    activeTab: Object(u.a)(this.props.location, "tab"),
                  });
            }),
            (t.prototype.componentDidUpdate = function (e) {
              !this.props.bDisableRouting &&
                this.props.location &&
                this.props.location.key !== e.location.key &&
                this.setState({
                  activeTab: Object(u.a)(this.props.location, "tab"),
                });
            }),
            (t.prototype.OnTabClick = function (e) {
              this.setState({ activeTab: e.key }),
                !this.props.bDisableRouting &&
                  this.props.history &&
                  Object(u.b)(this.props.history, "tab", e.key),
                e.onClick && e.onClick(e);
            }),
            (t.prototype.render = function () {
              var e = this,
                t =
                  this.props.tabs.find(function (t) {
                    return t.key === e.state.activeTab;
                  }) || this.props.tabs[0];
              return i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  "div",
                  { className: l.a.GraphicalAssetsTabs },
                  this.props.tabs.map(function (n) {
                    if (!n.hidden) {
                      var r = "";
                      return (
                        "success" === n.statusType
                          ? (r = l.a.StatusSuccess)
                          : "danger" === n.statusType
                          ? (r = l.a.StatusDanger)
                          : "caution" === n.statusType &&
                            (r = l.a.StatusCaution),
                        i.createElement(
                          m.a,
                          {
                            key: n.key,
                            condition: Boolean(n.statusToolTip),
                            wrap: function (e) {
                              return i.createElement(
                                d.a,
                                { toolTipContent: n.statusToolTip },
                                e
                              );
                            },
                          },
                          i.createElement(
                            "div",
                            {
                              key: n.key,
                              className:
                                l.a.GraphicalAssetsTab +
                                " " +
                                (n.key === t.key ? l.a.Active : ""),
                              onClick: function () {
                                return e.OnTabClick(n);
                              },
                            },
                            Boolean(n.vo_warning) &&
                              i.createElement(
                                d.a,
                                { toolTipContent: n.vo_warning },
                                i.createElement(
                                  "div",
                                  { className: l.a.VOWarning },
                                  Object(s.f)("#EventEditor_VOWarning")
                                )
                              ),
                            Boolean(n.status) &&
                              i.createElement(
                                "div",
                                {
                                  className: Object(o.a)(
                                    l.a.GraphicalAssetStatus,
                                    r
                                  ),
                                },
                                n.status
                              ),
                            n.name
                          )
                        )
                      );
                    }
                    return null;
                  })
                ),
                i.createElement("div", null, t && t.contents)
              );
            }),
            t
          );
        })(i.Component),
        p = Object(a.j)(f);
    },
    hII0: function (e, t, n) {
      e.exports = {
        QAMainCtn: "questions_QAMainCtn_hHqRc",
        InputButton: "questions_InputButton_1z1rt",
        Reload: "questions_Reload_3LIo4",
        QAHeader: "questions_QAHeader_3skHm",
        QATitleRow: "questions_QATitleRow_2qdcm",
        QATitle: "questions_QATitle_1c7nC",
        Description: "questions_Description_3eGNN",
        InputCtn: "questions_InputCtn_oF1kT",
        LogInPrompt: "questions_LogInPrompt_3Gbue",
        ButtonCtn: "questions_ButtonCtn_3kFHr",
        SaveSpinner: "questions_SaveSpinner_20svv",
        QuestionsCtn: "questions_QuestionsCtn_1W6uJ",
        InsetShadowTopCtn: "questions_InsetShadowTopCtn_ak9JV",
        InsetShadowTop: "questions_InsetShadowTop_1C2e4",
        QuestionsHeader: "questions_QuestionsHeader_jUQG9",
        QuestionsTitle: "questions_QuestionsTitle_2CYLB",
        QuestionList: "questions_QuestionList_28dwO",
        Question: "questions_Question_3BIOo",
        Hidden: "questions_Hidden_3XPCk",
        QuestionCtn: "questions_QuestionCtn_31sLy",
        UserAvatar: "questions_UserAvatar_2ojKe",
        QuestionText: "questions_QuestionText_2NuCE",
        QuestionTitle: "questions_QuestionTitle_2AXcH",
        QuestionStats: "questions_QuestionStats_1DzgV",
        PostTime: "questions_PostTime_2hfBu",
        Votes: "questions_Votes_2IyuQ",
        RateIcon: "questions_RateIcon_2j0Gw",
        Vote_CannotVote: "questions_Vote_CannotVote_2Pq4z",
        Vote_Ready: "questions_Vote_Ready_3_8_a",
        Vote_Positive: "questions_Vote_Positive_eWDCy",
        DateAndTime: "questions_DateAndTime_4VjnZ",
        Answer: "questions_Answer_wNABP",
        AnswerText: "questions_AnswerText_3ar8c",
        ModeratorSection: "questions_ModeratorSection_3tP54",
        ToolRow: "questions_ToolRow_2c2vo",
        ToolLabel: "questions_ToolLabel_3prTN",
      };
    },
    knQc: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return v;
      });
      var r = n("mrSG"),
        i = n("q1tI"),
        a = n("kyHq"),
        o = n("02Wr"),
        s = n("UxvL"),
        u = n("exH9"),
        c = n("lkRc"),
        l = n("ZeAL"),
        d = n("nrKv"),
        m = n("rcjX"),
        f = n("zvcZ"),
        p = n("WcT4"),
        b = n.n(p),
        _ = new Map(
          Object(r.g)(Array.from(m.c.entries()), Array.from(m.e.entries()), [
            [
              "section",
              {
                Constructor: function (e) {
                  var t = Object(m.f)(e.args, "id");
                  t &&
                    "string" == typeof t &&
                    t.length > 0 &&
                    "#" === t[0] &&
                    (t = t.substring(1));
                  var n = Object(m.f)(e.args, "style"),
                    r = Object(u.a)(
                      b.a.Section,
                      "note" == n && b.a.Note,
                      "important" == n && b.a.Important,
                      "warning" == n && b.a.Warning
                    );
                  return i.createElement(
                    "div",
                    { id: t || void 0, className: r },
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
                  var t,
                    n,
                    r = e.context.showErrorInfo,
                    a =
                      null === (t = null == e ? void 0 : e.children) ||
                      void 0 === t
                        ? void 0
                        : t.toString();
                  if (
                    !(
                      (null != a && null != a && 0 != a.length) ||
                      (null !=
                        (a =
                          null === (n = null == e ? void 0 : e.args) ||
                          void 0 === n
                            ? void 0
                            : n[""]) &&
                        null != a &&
                        0 != a.length)
                    )
                  )
                    return "";
                  var u = Object(m.d)(a, e.language);
                  return "string" == typeof u
                    ? ((a = u),
                      r
                        ? i.createElement(o.a, {
                            className: b.a.FAQImage,
                            src: a,
                          })
                        : ((a = a.replace("http://", "https://")),
                          i.createElement("img", {
                            className: b.a.FAQImage,
                            src: a,
                          })))
                    : i.createElement(s.a, {
                        className: b.a.FAQImage,
                        rgSources: u,
                      });
                },
                autocloses: !1,
              },
            ],
            [
              "exclude_realm",
              {
                Constructor: function (e) {
                  var t = Object(m.f)(e.args);
                  return ("global" == t &&
                    c.c.EREALM == a.f.k_ESteamRealmGlobal) ||
                    ("china" == t && c.c.EREALM == a.f.k_ESteamRealmChina)
                    ? null
                    : i.createElement(i.Fragment, null, e.children);
                },
                autocloses: !1,
              },
            ],
          ])
        ),
        v = function (e) {
          var t = e.text,
            n = e.bShowErrorInfo,
            r = i.useCallback(function (e) {
              return new f.b(
                new f.c(
                  new d.c(new d.b(), 0),
                  e,
                  [{ urlRegExp: /youtu.be|youtube.com/i, fnBBComponent: m.q }],
                  {}
                ),
                e
              );
            }, []),
            a = i.useRef(new l.a(_, r));
          return i.createElement(
            "div",
            { className: b.a.FAQContainer },
            a.current.ParseBBCode(t, { showErrorInfo: n })
          );
        };
    },
  },
]);
