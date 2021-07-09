/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    "2l+k": function (e, t, n) {
      "use strict";
      var r = n("mrSG"),
        a = n("vDqi"),
        i = n.n(a),
        o = n("2vnA"),
        s = n("lkRc"),
        c = n("WBba"),
        l = n("bxBv"),
        d = n("hRO2"),
        u = n("OS8t"),
        m = d.Message;
      var p,
        _ = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.gid || u.a(t.M()),
              m.initialize(r, n, 0, -1, [5], null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      gid: {
                        n: 1,
                        br: u.d.readFixed64String,
                        bw: u.h.writeFixed64String,
                      },
                      name: { n: 2, br: u.d.readString, bw: u.h.writeString },
                      type: {
                        n: 3,
                        d: 0,
                        br: u.d.readUint32,
                        bw: u.h.writeUint32,
                      },
                      url: { n: 4, br: u.d.readString, bw: u.h.writeString },
                      associated_apps: {
                        n: 5,
                        r: !0,
                        q: !0,
                        br: u.d.readUint32,
                        bw: u.h.writeRepeatedUint32,
                      },
                      poll_interval: {
                        n: 6,
                        d: 300,
                        br: u.d.readUint32,
                        bw: u.h.writeUint32,
                      },
                      kv_description: {
                        n: 7,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      kv_filter: {
                        n: 8,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      publish_to_clan_account_id: {
                        n: 9,
                        br: u.d.readUint32,
                        bw: u.h.writeUint32,
                      },
                      language: {
                        n: 10,
                        br: u.d.readUint32,
                        bw: u.h.writeUint32,
                      },
                      last_error: {
                        n: 11,
                        br: u.d.readUint32,
                        bw: u.h.writeUint32,
                      },
                      last_update: {
                        n: 12,
                        br: u.d.readUint32,
                        bw: u.h.writeUint32,
                      },
                      last_checked: {
                        n: 13,
                        br: u.d.readUint32,
                        bw: u.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = u.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return u.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return u.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new d.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return u.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new d.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              u.f(t.M(), e, n);
            }),
            (t.prototype.getClassName = function () {
              return "CNewsFeedDef";
            }),
            t
          );
        })(m),
        f = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.gid || u.a(t.M()),
              m.initialize(r, n, 0, -1, [11], null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      gid: {
                        n: 1,
                        br: u.d.readFixed64String,
                        bw: u.h.writeFixed64String,
                      },
                      news_feed_gid: {
                        n: 2,
                        br: u.d.readFixed64String,
                        bw: u.h.writeFixed64String,
                      },
                      title: { n: 3, br: u.d.readString, bw: u.h.writeString },
                      url: { n: 4, br: u.d.readString, bw: u.h.writeString },
                      author: { n: 5, br: u.d.readString, bw: u.h.writeString },
                      rtime_date: {
                        n: 6,
                        br: u.d.readUint32,
                        bw: u.h.writeUint32,
                      },
                      contents: {
                        n: 7,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      commited: { n: 8, br: u.d.readBool, bw: u.h.writeBool },
                      deleted: { n: 9, br: u.d.readBool, bw: u.h.writeBool },
                      tags: { n: 10, br: u.d.readString, bw: u.h.writeString },
                      appids: {
                        n: 11,
                        r: !0,
                        q: !0,
                        br: u.d.readUint32,
                        bw: u.h.writeRepeatedUint32,
                      },
                      recommendation_state: {
                        n: 12,
                        br: u.d.readEnum,
                        bw: u.h.writeEnum,
                      },
                      received_compensation: {
                        n: 13,
                        br: u.d.readBool,
                        bw: u.h.writeBool,
                      },
                      received_for_free: {
                        n: 14,
                        br: u.d.readBool,
                        bw: u.h.writeBool,
                      },
                      blurb: { n: 15, br: u.d.readString, bw: u.h.writeString },
                      event_subtitle: {
                        n: 16,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      event_summary: {
                        n: 17,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = u.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return u.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return u.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new d.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return u.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new d.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              u.f(t.M(), e, n);
            }),
            (t.prototype.getClassName = function () {
              return "CNewsFeedPostDef";
            }),
            t
          );
        })(m),
        b = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.converted_content || u.a(t.M()),
              m.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      converted_content: {
                        n: 1,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      found_html: { n: 2, br: u.d.readBool, bw: u.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = u.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return u.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return u.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new d.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return u.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new d.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              u.f(t.M(), e, n);
            }),
            (t.prototype.getClassName = function () {
              return "CNews_ConvertHTMLToBBCode_Response";
            }),
            t
          );
        })(m),
        h = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.rss_message || u.a(t.M()),
              m.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      rss_message: {
                        n: 1,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      unique_id: {
                        n: 2,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      title: { n: 3, br: u.d.readString, bw: u.h.writeString },
                      desc: { n: 4, br: u.d.readString, bw: u.h.writeString },
                      jsondata: {
                        n: 5,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      post: { n: 6, c: f },
                      valid_post: { n: 7, br: u.d.readBool, bw: u.h.writeBool },
                      post_error_msg: {
                        n: 8,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = u.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return u.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return u.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new d.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return u.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new d.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              u.f(t.M(), e, n);
            }),
            (t.prototype.getClassName = function () {
              return "CNewsPartnerEventPreview";
            }),
            t
          );
        })(m),
        v = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.rss_url || u.a(t.M()),
              m.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      rss_url: {
                        n: 1,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      lang: { n: 2, br: u.d.readUint32, bw: u.h.writeUint32 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = u.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return u.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return u.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new d.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return u.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new d.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              u.f(t.M(), e, n);
            }),
            (t.prototype.getClassName = function () {
              return "CNews_PreviewPartnerEvents_Request";
            }),
            t
          );
        })(m),
        S = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.rss_url || u.a(t.M()),
              m.initialize(r, n, 0, -1, [2], null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      rss_url: {
                        n: 1,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                      results: { n: 2, c: h, r: !0, q: !0 },
                      error_msg: {
                        n: 3,
                        br: u.d.readString,
                        bw: u.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = u.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return u.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return u.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new d.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return u.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new d.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              u.f(t.M(), e, n);
            }),
            (t.prototype.getClassName = function () {
              return "CNews_PreviewPartnerEvents_Response";
            }),
            t
          );
        })(m),
        g = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.feeds || u.a(t.M()),
              m.initialize(r, n, 0, -1, [1], null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { feeds: { n: 1, c: _, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = u.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return u.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return u.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new d.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return u.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new d.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              u.f(t.M(), e, n);
            }),
            (t.prototype.getClassName = function () {
              return "CNews_GetNewsFeedByRepublishClan_Response";
            }),
            t
          );
        })(m),
        w = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.post || u.a(t.M()),
              m.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      post: { n: 1, c: f },
                      draft: { n: 2, br: u.d.readBool, bw: u.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = u.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return u.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return u.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new d.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return u.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new d.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              u.f(t.M(), e, n);
            }),
            (t.prototype.getClassName = function () {
              return "CNews_PublishPartnerEvent_Request";
            }),
            t
          );
        })(m),
        R = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.clan_event_gid || u.a(t.M()),
              m.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      clan_event_gid: {
                        n: 1,
                        br: u.d.readFixed64String,
                        bw: u.h.writeFixed64String,
                      },
                      news_post_gid: {
                        n: 2,
                        br: u.d.readFixed64String,
                        bw: u.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = u.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return u.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return u.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new d.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return u.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new d.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              u.f(t.M(), e, n);
            }),
            (t.prototype.getClassName = function () {
              return "CNews_PublishPartnerEvent_Response";
            }),
            t
          );
        })(m),
        O = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.news_feed_gid || u.a(t.M()),
              m.initialize(r, n, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      news_feed_gid: {
                        n: 1,
                        br: u.d.readFixed64String,
                        bw: u.h.writeFixed64String,
                      },
                      start_index: {
                        n: 2,
                        d: 0,
                        br: u.d.readUint32,
                        bw: u.h.writeUint32,
                      },
                      amount: {
                        n: 3,
                        d: 100,
                        br: u.d.readUint32,
                        bw: u.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = u.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return u.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return u.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new d.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return u.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new d.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              u.f(t.M(), e, n);
            }),
            (t.prototype.getClassName = function () {
              return "CNews_GetBatchPublishedPartnerEvent_Request";
            }),
            t
          );
        })(m),
        C = (function (e) {
          function t(n) {
            void 0 === n && (n = null);
            var r = e.call(this) || this;
            return (
              t.prototype.clan_account_id || u.a(t.M()),
              m.initialize(r, n, 0, -1, [3, 4, 5], null),
              r
            );
          }
          return (
            Object(r.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      clan_account_id: {
                        n: 1,
                        br: u.d.readUint32,
                        bw: u.h.writeUint32,
                      },
                      news_feed_gid: {
                        n: 2,
                        br: u.d.readFixed64String,
                        bw: u.h.writeFixed64String,
                      },
                      clan_event_gid: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: u.d.readFixed64String,
                        bw: u.h.writeRepeatedFixed64String,
                      },
                      news_post_gid: {
                        n: 4,
                        r: !0,
                        q: !0,
                        br: u.d.readFixed64String,
                        bw: u.h.writeRepeatedFixed64String,
                      },
                      news_url: {
                        n: 5,
                        r: !0,
                        q: !0,
                        br: u.d.readString,
                        bw: u.h.writeRepeatedString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = u.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, n) {
              return u.g(t.M(), e, n);
            }),
            (t.fromObject = function (e) {
              return u.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var n = new d.BinaryReader(e),
                r = new t();
              return t.deserializeBinaryFromReader(r, n);
            }),
            (t.deserializeBinaryFromReader = function (e, n) {
              return u.b(t.MBF(), e, n);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new d.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, n) {
              u.f(t.M(), e, n);
            }),
            (t.prototype.getClassName = function () {
              return "CNews_GetBatchPublishedPartnerEvent_Response";
            }),
            t
          );
        })(m);
      !(function (e) {
        (e.ConvertHTMLToBBCode = function (e, t) {
          return e.SendMsg("News.ConvertHTMLToBBCode#1", t, b, {
            bConstMethod: !0,
            ePrivilege: 0,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.PreviewPartnerEvents = function (e, t) {
            return e.SendMsg("News.PreviewPartnerEvents#1", t, S, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetNewsFeedByRepublishClan = function (e, t) {
            return e.SendMsg("News.GetNewsFeedByRepublishClan#1", t, g, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.PublishPartnerEvent = function (e, t) {
            return e.SendMsg("News.PublishPartnerEvent#1", t, R, {
              ePrivilege: 1,
            });
          }),
          (e.GetBatchPublishedPartnerEvent = function (e, t) {
            return e.SendMsg("News.GetBatchPublishedPartnerEvent#1", t, C, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          });
      })(p || (p = {}));
      var E = n("kLLr"),
        y = n("6oCP"),
        B = n("NtSG"),
        j = n("r64O"),
        P = n("bDQf"),
        M = (function () {
          function e(e) {
            var t = this;
            (this.m_mapURLToPosted = new Map()),
              (this.m_clanAccountID = e.clanid),
              (this.m_clanSteamID = E.a.InitFromClanID(this.m_clanAccountID)),
              Object(o.G)(function () {
                (t.m_strRSSFeedURL = e.rss_feed_url),
                  (t.m_strRSSGID = e.rss_feed_gid),
                  (t.m_eRSSFeedLanguage = e.rss_feed_language),
                  (t.m_rtimeRSSLastChecked = e.rss_feed_last_checked),
                  (t.m_nPollIntervalSeconds = e.poll_interval),
                  (t.m_eCuratorLanguage = e.curation_language);
              });
          }
          return (
            (e.prototype.GetFeedLanguageHandleUnset = function () {
              return -1 == this.m_eRSSFeedLanguage
                ? -1 == this.m_eCuratorLanguage
                  ? 0
                  : this.m_eCuratorLanguage
                : this.m_eRSSFeedLanguage;
            }),
            (e.prototype.GetCuratorLanguage = function () {
              return -1 == this.m_eCuratorLanguage
                ? 0
                : this.m_eCuratorLanguage;
            }),
            (e.prototype.BHasSavedRSSURL = function () {
              return Boolean(this.m_strRSSFeedURL);
            }),
            (e.prototype.GetRSSUrl = function () {
              return this.m_strRSSFeedURL ? this.m_strRSSFeedURL : "";
            }),
            (e.prototype.GetRSSLastRtimeChecked = function () {
              return this.m_rtimeRSSLastChecked;
            }),
            (e.prototype.GetClanSteamID = function () {
              return this.m_clanSteamID;
            }),
            (e.prototype.GetClanAccountID = function () {
              return this.m_clanAccountID;
            }),
            (e.prototype.BHasSetupFeed = function (e) {
              return Boolean(this.m_strRSSGID) && this.m_strRSSFeedURL === e;
            }),
            (e.prototype.BIsAutomationEnabled = function () {
              return Boolean(this.m_nPollIntervalSeconds > 0);
            }),
            (e.prototype.BHasFeedGID = function () {
              return Boolean(this.m_strRSSGID);
            }),
            (e.prototype.PreviewPartnerEventsFromRSSFeed = function (e) {
              return Object(r.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(r.e)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? ((t = l.b.Init(v)).Body().set_rss_url(e),
                          t.Body().set_lang(this.GetFeedLanguageHandleUnset()),
                          [
                            4,
                            p.PreviewPartnerEvents(
                              F.Get().GetCuratorTransport(),
                              t
                            ),
                          ])
                        : (console.error(
                            "PreviewPartnerEventsFromRSSFeed: User not logged in"
                          ),
                          [2, null]);
                    case 1:
                      return (
                        1 != (n = r.sent()).GetEResult() &&
                          console.error(
                            "PreviewPartnerEventsFromRSSFeed error: " +
                              n.GetEMsg() +
                              " " +
                              n.GetEResult()
                          ),
                        [2, n]
                      );
                  }
                });
              });
            }),
            (e.prototype.FetchPublishedEvents = function (e) {
              return (
                void 0 === e && (e = 100),
                Object(r.b)(this, void 0, void 0, function () {
                  var t,
                    n,
                    a = this;
                  return Object(r.e)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return this.BIsLoggedIn()
                          ? this.m_strRSSGID
                            ? ((t = l.b.Init(O))
                                .Body()
                                .set_news_feed_gid(this.m_strRSSGID),
                              t.Body().set_amount(e),
                              [
                                4,
                                p.GetBatchPublishedPartnerEvent(
                                  F.Get().GetCuratorTransport(),
                                  t
                                ),
                              ])
                            : (console.error(
                                "FetchPublishedEvents: Need to create a news feed first"
                              ),
                              [2, null])
                          : (console.error(
                              "FetchPublishedEvents: User not logged in"
                            ),
                            [2, null]);
                      case 1:
                        return (
                          1 != (n = r.sent()).GetEResult()
                            ? console.error(
                                "FetchPublishedEvents error: EMsg:" +
                                  Object(B.a)(n.GetEMsg()) +
                                  " EResult:" +
                                  n.GetEResult() +
                                  " msg:" +
                                  n.Hdr().error_message()
                              )
                            : Object(o.G)(function () {
                                for (
                                  var e = 0;
                                  e < n.Body().clan_event_gid().length;
                                  ++e
                                ) {
                                  var t = {
                                    url: n.Body().news_url()[e],
                                    clan_event_gid: n.Body().clan_event_gid()[
                                      e
                                    ],
                                    news_post_gid: n.Body().news_post_gid()[e],
                                  };
                                  a.m_mapURLToPosted.set(t.url, t);
                                }
                              }),
                          [2, n]
                        );
                    }
                  });
                })
              );
            }),
            (e.prototype.MapArticleURLToClanEventGID = function (e) {
              var t = this.m_mapURLToPosted.get(e);
              if (t) return t.clan_event_gid;
            }),
            (e.prototype.BIsLoggedIn = function () {
              return s.k.logged_in;
            }),
            (e.prototype.CreateOrUpdateRSSNewFeed = function (e, t) {
              return (
                void 0 === t && (t = 0),
                Object(r.b)(this, void 0, void 0, function () {
                  var n,
                    a,
                    c,
                    l = this;
                  return Object(r.e)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          (n = new FormData()).append(
                            "sessionid",
                            s.d.SESSIONID
                          ),
                          n.append("gid", this.m_strRSSGID),
                          n.append("lang", "" + this.GetCuratorLanguage()),
                          n.append("rss_url", e),
                          n.append("polling_interval", "" + t),
                          (a =
                            s.d.STORE_BASE_URL +
                            "curator/" +
                            this.m_clanAccountID +
                            "/admin/ajaxmanagerssfeed"),
                          [4, i.a.post(a, n, { withCredentials: !0 })]
                        );
                      case 1:
                        return (
                          1 == (c = r.sent()).data.success &&
                            Object(o.G)(function () {
                              (l.m_strRSSGID = c.data.gid),
                                (l.m_strRSSFeedURL = e),
                                (l.m_nPollIntervalSeconds = t);
                            }),
                          [2, c.data]
                        );
                    }
                  });
                })
              );
            }),
            (e.prototype.UpdateAutomation = function (e) {
              return Object(r.b)(this, void 0, void 0, function () {
                return Object(r.e)(this, function (t) {
                  return [
                    2,
                    this.CreateOrUpdateRSSNewFeed(
                      this.m_strRSSFeedURL,
                      e ? 300 : 0
                    ),
                  ];
                });
              });
            }),
            (e.prototype.CheckForNewUpdate = function () {
              return Object(r.b)(this, void 0, void 0, function () {
                var e, t;
                return Object(r.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return this.m_strRSSGID
                        ? ((e = new FormData()).append(
                            "sessionid",
                            s.d.SESSIONID
                          ),
                          e.append("gid", this.m_strRSSGID),
                          (t =
                            s.d.STORE_BASE_URL +
                            "curator/" +
                            this.m_clanAccountID +
                            "/admin/ajaxcheckfornews"),
                          [4, i.a.post(t, e, { withCredentials: !0 })])
                        : [3, 2];
                    case 1:
                      n.sent(), (n.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.CreatePost = function (e, t) {
              return Object(r.b)(this, void 0, void 0, function () {
                var n,
                  a,
                  i,
                  s = this;
                return Object(r.e)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? this.m_strRSSGID
                          ? ((n = new f()).set_gid(e.post.gid),
                            n.set_news_feed_gid(this.m_strRSSGID),
                            n.set_title(e.post.title),
                            n.set_url(e.post.url),
                            n.set_author(e.post.author),
                            n.set_rtime_date(e.post.rtime_date),
                            n.set_contents(e.post.contents),
                            n.set_commited(e.post.commited),
                            n.set_deleted(e.post.deleted),
                            n.set_tags(e.post.tags),
                            n.set_appids(e.post.appids),
                            n.set_recommendation_state(
                              e.post.recommendation_state
                            ),
                            n.set_received_for_free(e.post.received_for_free),
                            n.set_received_compensation(
                              e.post.received_compensation
                            ),
                            n.set_blurb(e.post.blurb),
                            (a = l.b.Init(w)).Body().set_post(n),
                            a.Body().set_draft(t),
                            [
                              4,
                              p.PublishPartnerEvent(
                                F.Get().GetCuratorTransport(),
                                a
                              ),
                            ])
                          : (console.error(
                              "CreatePartnerFromPreviewPost: Need to create a news feed first"
                            ),
                            [2, null])
                        : (console.error(
                            "CreatePartnerFromPreviewPost: User not logged in"
                          ),
                          [2, null]);
                    case 1:
                      return (
                        1 != (i = r.sent()).GetEResult()
                          ? console.error(
                              "CreatePost error: " +
                                i.GetEMsg() +
                                " " +
                                i.GetEResult()
                            )
                          : (Object(o.G)(function () {
                              var t = {
                                url: e.post.url,
                                clan_event_gid: i.Body().clan_event_gid(),
                                news_post_gid: i.Body().news_post_gid(),
                              };
                              s.m_mapURLToPosted.set(e.post.url, t);
                            }),
                            y.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                              this.m_clanSteamID,
                              i.Body().clan_event_gid(),
                              0
                            )),
                        [2, i]
                      );
                  }
                });
              });
            }),
            Object(r.c)([o.C], e.prototype, "m_strRSSFeedURL", void 0),
            Object(r.c)([o.C], e.prototype, "m_strRSSGID", void 0),
            Object(r.c)([o.C], e.prototype, "m_rtimeRSSLastChecked", void 0),
            Object(r.c)([o.C], e.prototype, "m_nPollIntervalSeconds", void 0),
            Object(r.c)([o.C], e.prototype, "m_eRSSFeedLanguage", void 0),
            Object(r.c)([o.C], e.prototype, "m_eCuratorLanguage", void 0),
            Object(r.c)([o.C], e.prototype, "m_mapURLToPosted", void 0),
            e
          );
        })(),
        F = (function () {
          function e() {
            (this.m_mapClanAccountToAdmin = new Map()),
              (this.m_defaultAdmin = void 0),
              (this.m_mapClanToEventRSSStats = new Map()),
              (this.m_setPendingClanInfo = new Set()),
              (this.m_cClanInfoRequestsInFlight = 0);
          }
          return (
            (e.prototype.GetCuratorTransport = function () {
              return (
                Object(j.a)(
                  this.m_transport,
                  "Expects Transpoate to be initialized but it is now"
                ),
                this.m_transport
              );
            }),
            (e.prototype.GetDefaultAdmin = function () {
              return this.m_defaultAdmin;
            }),
            (e.prototype.GetRSSAdminStats = function (e) {
              return this.m_mapClanToEventRSSStats.get(e);
            }),
            (e.Get = function () {
              return (
                e.s_CuratorAdminStore ||
                  ((e.s_CuratorAdminStore = new e()),
                  e.s_CuratorAdminStore.Init(),
                  "dev" === s.d.WEB_UNIVERSE &&
                    (window.g_CuratorAdminStore = e.s_CuratorAdminStore)),
                e.s_CuratorAdminStore
              );
            }),
            (e.prototype.Init = function () {
              var e = Object(s.h)("curatoradmin", "application_config");
              this.ValidateStoreDefault(e) &&
                ((this.m_defaultAdmin = new M(e)),
                this.m_mapClanAccountToAdmin.set(
                  e.clanid,
                  this.m_defaultAdmin
                )),
                this.ValidateWebAPI(e) &&
                  (this.m_transport = new c.a(
                    s.d.WEBAPI_BASE_URL,
                    e.webapi_token
                  ).GetServiceTransport());
            }),
            (e.prototype.ValidateStoreDefault = function (e) {
              return e && "object" == typeof e && "number" == typeof e.clanid;
            }),
            (e.prototype.ValidateWebAPI = function (e) {
              return e && "string" == typeof e.webapi_token;
            }),
            (e.prototype.BIsLoggedIn = function () {
              return s.k.logged_in;
            }),
            (e.prototype.BHavePendingInfoRequests = function () {
              return (
                this.m_setPendingClanInfo.size > 0 ||
                this.m_cClanInfoRequestsInFlight > 0
              );
            }),
            (e.prototype.BIsLoadingClanID = function (e) {
              return this.m_setPendingClanInfo.has(e);
            }),
            (e.prototype.BHasClanIDLoaded = function (e) {
              return this.m_mapClanAccountToAdmin.has(e);
            }),
            (e.prototype.GetRSSAdminForClanAccountID = function (e) {
              return this.m_mapClanAccountToAdmin.get(e);
            }),
            (e.prototype.QueueCuratorAdminInfoLoad = function (e) {
              return Object(r.b)(this, void 0, void 0, function () {
                var t = this;
                return Object(r.e)(this, function (n) {
                  return e
                    ? this.m_mapClanAccountToAdmin.has(e)
                      ? [2, Promise.resolve()]
                      : (this.m_setPendingClanInfo.size ||
                          ((this.m_PendingClanInfoPromise = new Promise(
                            function (e) {
                              return (t.m_PendingClanInfoResolve = e);
                            }
                          )),
                          window.setTimeout(function () {
                            return t.FlushPendingClanInfo();
                          }, 25)),
                        this.m_setPendingClanInfo.add(e),
                        [2, this.m_PendingClanInfoPromise])
                    : (Object(j.a)(
                        !e,
                        "unexpected clanid of zero or undefined: " + e
                      ),
                      [2, Promise.resolve()]);
                });
              });
            }),
            (e.prototype.FlushPendingClanInfo = function () {
              return Object(r.b)(this, void 0, void 0, function () {
                var e, t;
                return Object(r.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (e = this.m_PendingClanInfoResolve),
                        (t = Array.from(this.m_setPendingClanInfo)),
                        (this.m_PendingClanInfoPromise = void 0),
                        (this.m_PendingClanInfoResolve = void 0),
                        this.m_setPendingClanInfo.clear(),
                        [4, this.LoadBatchedClanRSSAdminInfo(t)]
                      );
                    case 1:
                      return n.sent(), e(), [2];
                  }
                });
              });
            }),
            (e.prototype.EnsureClanInfoLoaded = function (e) {
              var t = this,
                n = e.filter(function (e) {
                  return (
                    !t.m_mapClanAccountToAdmin.has(e) &&
                    t.m_setPendingClanInfo.has(e)
                  );
                });
              return (
                n.forEach(function (e) {
                  return t.QueueCuratorAdminInfoLoad(e);
                }),
                n.length > 0 && this.m_PendingClanInfoPromise
                  ? this.m_PendingClanInfoPromise
                  : Promise.resolve()
              );
            }),
            (e.prototype.LoadBatchedClanRSSAdminInfo = function (e) {
              return Object(r.b)(this, void 0, void 0, function () {
                var t,
                  n,
                  a = this;
                return Object(r.e)(this, function (c) {
                  switch (c.label) {
                    case 0:
                      this.m_cClanInfoRequestsInFlight++,
                        (t = e.filter(function (e) {
                          return !a.m_mapClanAccountToAdmin.has(e);
                        })),
                        50,
                        (n = function () {
                          var n, c, l, d, u, m;
                          return Object(r.e)(this, function (r) {
                            switch (r.label) {
                              case 0:
                                (n = Math.min(50, t.length)),
                                  t.slice(0, n),
                                  (t = t.slice(n)),
                                  (r.label = 1);
                              case 1:
                                return (
                                  r.trys.push([1, 3, , 4]),
                                  (c =
                                    s.d.STORE_BASE_URL +
                                    "events_admin/ajaxgetrssadmininfo"),
                                  (l = { clanids: e }),
                                  [
                                    4,
                                    i.a.get(c, {
                                      params: l,
                                      withCredentials: !0,
                                    }),
                                  ]
                                );
                              case 2:
                                return (
                                  (d = r.sent()) &&
                                  d.data &&
                                  1 == d.data.success &&
                                  d.data.rss_admin_infos &&
                                  Array.isArray(d.data.rss_admin_infos)
                                    ? Object(o.G)(function () {
                                        d.data.rss_admin_infos.forEach(
                                          function (e) {
                                            a.m_mapClanAccountToAdmin.set(
                                              e.clanid,
                                              new M(e)
                                            );
                                          }
                                        ),
                                          d.data.rss_event_stats.forEach(
                                            function (e) {
                                              a.m_mapClanToEventRSSStats.set(
                                                e.clan_account_id,
                                                e
                                              );
                                            }
                                          );
                                      })
                                    : ((m = Object(P.c)(d.data || {})),
                                      console.error(
                                        "LoadBatchedClanRSSAdminInfo error:" +
                                          m.strErrorMsg,
                                        m
                                      )),
                                  [3, 4]
                                );
                              case 3:
                                return (
                                  (u = r.sent()),
                                  (m = Object(P.c)(u)),
                                  console.error(
                                    "LoadBatchedClanRSSAdminInfo catched error:" +
                                      m.strErrorMsg,
                                    m
                                  ),
                                  [3, 4]
                                );
                              case 4:
                                return [2];
                            }
                          });
                        }),
                        (c.label = 1);
                    case 1:
                      return t.length > 0 ? [5, n()] : [3, 3];
                    case 2:
                      return c.sent(), [3, 1];
                    case 3:
                      return this.m_cClanInfoRequestsInFlight--, [2];
                  }
                });
              });
            }),
            Object(r.c)(
              [o.C.shallow],
              e.prototype,
              "m_mapClanAccountToAdmin",
              void 0
            ),
            Object(r.c)(
              [o.C.shallow],
              e.prototype,
              "m_mapClanToEventRSSStats",
              void 0
            ),
            e
          );
        })();
      t.a = F;
    },
    A2AY: function (e, t, n) {
      e.exports = {
        Ctn: "managerss_Ctn_1cSpO",
        RssInput: "managerss_RssInput_8NQ9L",
        PreviewListCtn: "managerss_PreviewListCtn_HRcOM",
        PostCtn: "managerss_PostCtn_3MI2h",
        PostTitle: "managerss_PostTitle_1Zsns",
        ActivePost: "managerss_ActivePost_h-qBF",
        PostDate: "managerss_PostDate_2vXmu",
        ErrorPost: "managerss_ErrorPost_aBLy2",
        PostDraft: "managerss_PostDraft_10_gL",
        PostStaged: "managerss_PostStaged_nNzd6",
        PreviewListBtn: "managerss_PreviewListBtn_3NT8s",
        PreviewButtons: "managerss_PreviewButtons_3lbyc",
        UrlSettingCtn: "managerss_UrlSettingCtn_iN4At",
        Error: "managerss_Error_1ZZ51",
        DialogPostTitle: "managerss_DialogPostTitle_1XamD",
        DashboardBtn: "managerss_DashboardBtn_2Hlrm",
        RawRSS: "managerss_RawRSS_2mOAh",
        ButtonCtn: "managerss_ButtonCtn_13jSB",
        PreviewBtn: "managerss_PreviewBtn_3HssD",
        ViewRaw: "managerss_ViewRaw_2jvHr",
        LanguageRow: "managerss_LanguageRow_g_9tL",
        LanguageTitle: "managerss_LanguageTitle_2jkBi",
        LanguageSet: "managerss_LanguageSet_2zsMr",
      };
    },
    "r+ba": function (e, t, n) {
      e.exports = {
        Container: "partnereventwebrowembed_Container_2Jd3M",
        StoreHeaderAdjust: "partnereventwebrowembed_StoreHeaderAdjust_3YyCp",
        SectionButtonCtn: "partnereventwebrowembed_SectionButtonCtn_1HP0y",
        SectionButton: "partnereventwebrowembed_SectionButton_3n8sw",
        EventsSummariesCtn: "partnereventwebrowembed_EventsSummariesCtn_1snIw",
        LatestUpdateButtonCtn:
          "partnereventwebrowembed_LatestUpdateButtonCtn_2vEwZ",
        LatestUpdateIcon: "partnereventwebrowembed_LatestUpdateIcon_mq3RO",
        LatestUpdateButton: "partnereventwebrowembed_LatestUpdateButton_1TRFt",
      };
    },
    wjMc: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return G;
      });
      var r = n("mrSG"),
        a = n("vDqi"),
        i = n.n(a),
        o = n("2l+k"),
        s = n("lkRc"),
        c = n("kLLr"),
        l = (function () {
          function e() {
            this.m_mapClanToRecommendation = new Map();
          }
          return (
            (e.Get = function () {
              return (
                e.s_CuratorStore ||
                  ((e.s_CuratorStore = new e()),
                  e.s_CuratorStore.Init(),
                  (window.g_CuratorRecommendationStore = e.s_CuratorStore)),
                e.s_CuratorStore
              );
            }),
            (e.prototype.Init = function () {}),
            (e.prototype.GetReviewForApp = function (e, t) {
              if (this.m_mapClanToRecommendation.has(e.GetAccountID()))
                return this.m_mapClanToRecommendation
                  .get(e.GetAccountID())
                  .get(t);
            }),
            (e.prototype.BHasReviewForApp = function (e, t) {
              return Boolean(this.GetReviewForApp(e, t));
            }),
            (e.prototype.BHasReviewForAppByClanAccount = function (e, t) {
              var n = c.a.InitFromClanID(e);
              return Boolean(this.GetReviewForApp(n, t));
            }),
            (e.prototype.LoadAppRecommendation = function (e, t) {
              return Object(r.b)(this, void 0, void 0, function () {
                var n, a, o, c, l;
                return Object(r.e)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        this.m_mapClanToRecommendation.has(e.GetAccountID()) ||
                          this.m_mapClanToRecommendation.set(
                            e.GetAccountID(),
                            new Map()
                          ),
                        (n = this.m_mapClanToRecommendation.get(
                          e.GetAccountID()
                        )),
                        (a = []),
                        t.forEach(function (e) {
                          n.has(e) || a.push(e);
                        }),
                        a.length > 0
                          ? ((o =
                              s.d.STORE_BASE_URL +
                              "curator/" +
                              e.GetAccountID() +
                              "/admin/ajaxgetrecbyapps"),
                            [
                              4,
                              i.a.get(o, {
                                params: {
                                  appids: a,
                                  cc: s.d.COUNTRY || "US",
                                  l: s.d.LANGUAGE,
                                },
                              }),
                            ])
                          : [3, 2]
                      );
                    case 1:
                      (c = r.sent()),
                        (l = c && c.data) &&
                          l.rec_app &&
                          l.rec_app.forEach(function (e) {
                            n.set(Number(e.appid), e);
                          }),
                        (r.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            e
          );
        })(),
        d = n("TyAF"),
        u = n("q1tI"),
        m = n.n(u),
        p = n("mgoM"),
        _ = n("3+zv"),
        f = n("6oCP"),
        b = n("Mgs7"),
        h = n("T27q"),
        v = n("fpVW"),
        S = n.n(v),
        g = n("r+ba"),
        w = n("Jqb/"),
        R = n("ka0M"),
        O = n("0OaU"),
        C = n("+d9t"),
        E = n("exH9"),
        y = n("X3Ds"),
        B = n("TLQK"),
        j = n("bDQf"),
        P = n("bxiW"),
        M = n("A2AY"),
        F = n("Kw0F"),
        L = n("bS9Q"),
        D = n("qP7j"),
        A = n.n(D),
        I = n("IzPI"),
        U = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                strRssURL: o.a.Get().GetDefaultAdmin().GetRSSUrl(),
              }),
              (t.m_Admin = o.a.Get().GetDefaultAdmin()),
              t
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.OnChangeActualRSSURL = function (e) {
              this.setState({ strRssURL: e.target.value });
            }),
            (t.prototype.OnCreateOrSaveFeed = function (e) {
              e.preventDefault(),
                Object(R.d)(
                  m.a.createElement(z, {
                    strRSSUrl: this.state.strRssURL,
                    admin: this.m_Admin,
                  }),
                  Object(y.m)(e)
                );
            }),
            (t.prototype.OnRevert = function (e) {
              e.preventDefault(),
                this.setState({ strRssURL: this.m_Admin.GetRSSUrl() });
            }),
            (t.prototype.render = function () {
              var e = Boolean(
                this.state.strRssURL === this.m_Admin.GetRSSUrl()
              );
              if (void 0 !== window.Prototype)
                return window.location.reload(), null;
              var t = Object(p.f)(
                  Object(p.d)(this.m_Admin.GetFeedLanguageHandleUnset())
                ),
                n = o.a.Get().GetDefaultAdmin();
              return m.a.createElement(
                "div",
                { className: Object(E.a)(M.Ctn) },
                m.a.createElement(
                  "div",
                  { className: "titleframe" },
                  m.a.createElement(
                    "h4",
                    null,
                    Object(B.f)("#CuratorAdmin_RSSFeed_title")
                  ),
                  m.a.createElement(
                    "p",
                    { className: "subtitle" },
                    Object(B.f)("#CuratorAdmin_RSSFeed_desc")
                  ),
                  m.a.createElement(
                    "p",
                    null,
                    Object(B.n)(
                      "#CuratorAdmin_RSSFeed_doc_link",
                      m.a.createElement(
                        "a",
                        {
                          href:
                            "https://partner.steamgames.com/doc/store/news/rss",
                          target: "_blank",
                        },
                        Object(B.f)("#CuratorAdmin_RSSFeed_doc_link_text")
                      )
                    )
                  ),
                  m.a.createElement(
                    "p",
                    { className: M.DashboardBtn },
                    m.a.createElement(
                      C.a,
                      {
                        href:
                          s.d.COMMUNITY_BASE_URL +
                          "gid/" +
                          this.m_Admin.GetClanSteamID().ConvertTo64BitString() +
                          "/partnerevents/",
                        className: Object(E.a)(S.a.Button, S.a.Primary),
                      },
                      Object(B.f)("#RSSManager_EventDashBoard")
                    )
                  )
                ),
                m.a.createElement(
                  "div",
                  { className: "darkframe" },
                  m.a.createElement(
                    "div",
                    { className: M.LanguageRow },
                    m.a.createElement(
                      "span",
                      { className: M.LanguageTitle },
                      Object(B.f)("#CuratorAdmin_RSSFeed_lang_only")
                    ),
                    m.a.createElement("span", { className: M.LanguageSet }, t),
                    m.a.createElement(
                      "a",
                      {
                        href:
                          s.d.COMMUNITY_BASE_URL +
                          "gid/" +
                          this.m_Admin.GetClanSteamID().ConvertTo64BitString() +
                          "/edit ",
                        target: "_blank",
                        className: Object(E.a)(S.a.Button, M.PreviewBtn),
                      },
                      Object(B.f)("#CuratorAdmin_RSSFeed_edit_language")
                    )
                  ),
                  Boolean(
                    this.m_Admin.GetFeedLanguageHandleUnset() !=
                      this.m_Admin.GetCuratorLanguage()
                  ) &&
                    m.a.createElement(
                      "div",
                      {
                        className: Object(E.a)(
                          M.LanguageRow,
                          A.a.WarningIconLayout
                        ),
                      },
                      m.a.createElement(
                        "span",
                        { className: M.LanguageTitle },
                        Object(B.f)(
                          "#CuratorAdmin_Curator_lang_only",
                          Object(B.f)(
                            "#Language_" +
                              Object(p.d)(this.m_Admin.GetCuratorLanguage())
                          ),
                          t
                        )
                      )
                    ),
                  m.a.createElement(
                    "div",
                    {
                      className: Object(E.a)(
                        S.a.FlexRowContainer,
                        M.UrlSettingCtn
                      ),
                    },
                    m.a.createElement(b.l, {
                      className: M.RssInpu,
                      type: "text",
                      name: "link_url",
                      id: "link_url",
                      value: this.state.strRssURL,
                      label: Object(B.f)("#CuratorAdmin_RSSFeed"),
                      placeholder: Object(B.f)(
                        "#CuratorAdmin_RSSFeed_placeholder"
                      ),
                      onChange: this.OnChangeActualRSSURL,
                      mustBeURL: !0,
                    }),
                    m.a.createElement(
                      "a",
                      {
                        className: "btn_green_white_innerfade btn_medium",
                        onClick: this.OnCreateOrSaveFeed,
                      },
                      m.a.createElement(
                        "span",
                        null,
                        Object(B.f)(e ? "#Button_Saved" : "#Button_Save")
                      )
                    ),
                    !e &&
                      m.a.createElement(
                        "a",
                        {
                          onClick: this.OnRevert,
                          className: "btn_grey_white_innerfade btn_medium",
                        },
                        Object(B.f)("#Button_Revert")
                      )
                  ),
                  m.a.createElement(T, { admin: n }),
                  m.a.createElement("br", null),
                  m.a.createElement(G, {
                    strRssURL: this.state.strRssURL,
                    admin: n,
                  })
                )
              );
            }),
            Object(r.c)([P.a], t.prototype, "OnChangeActualRSSURL", null),
            Object(r.c)([P.a], t.prototype, "OnCreateOrSaveFeed", null),
            Object(r.c)([P.a], t.prototype, "OnRevert", null),
            (t = Object(r.c)([d.a], t))
          );
        })(m.a.Component),
        G =
          ((t.b = U),
          (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.state = {
                  strParseRssURL: t.props.strRssURL,
                  bLoadingPreview: !1,
                }),
                (t.m_cancelSignal = i.a.CancelToken.source()),
                t
              );
            }
            return (
              Object(r.d)(t, e),
              (t.prototype.componentDidMount = function () {
                var e = this.props.admin;
                e.BHasFeedGID() &&
                  e.BHasSavedRSSURL() &&
                  e.GetRSSUrl() == this.props.strRssURL &&
                  this.OnLoadPreview();
              }),
              (t.prototype.componentWillUnmount = function () {
                this.m_cancelSignal.cancel(
                  "PreviewRSSViewAndControl component unmounted"
                );
              }),
              (t.prototype.RenderPreviews = function () {
                var e = this,
                  t = this.props.admin,
                  n = new Array();
                if (this.state.previews) {
                  var r = this.state.previews;
                  (r = r.sort(function (e, n) {
                    var r = t.MapArticleURLToClanEventGID(e.post.url),
                      a = t.MapArticleURLToClanEventGID(n.post.url),
                      i = r ? f.c.GetClanEventModel(r) : null,
                      o = a ? f.c.GetClanEventModel(a) : null;
                    return i && o
                      ? o.postTime - i.postTime
                      : i
                      ? -1
                      : o
                      ? 1
                      : n.post.rtime_date - e.post.rtime_date;
                  })).forEach(function (r) {
                    n.push(
                      m.a.createElement(N, {
                        newsData: r,
                        admin: t,
                        key: "id: " + r.unique_id,
                        clanSteamID: t.GetClanSteamID(),
                        fnGetRSSUrl: e.GetRSSPreviewURL,
                      })
                    );
                  });
                }
                return n;
              }),
              (t.prototype.GetRSSPreviewURL = function () {
                return this.state.strParseRssURL;
              }),
              (t.prototype.OnLoadPreview = function () {
                this.setState(
                  {
                    bLoadingPreview: !0,
                    previews: void 0,
                    strPreviewURL: this.props.strRssURL,
                    strPreviewErrorMsg: void 0,
                  },
                  this.DoLoadPreview
                );
              }),
              (t.prototype.DoLoadPreview = function () {
                return Object(r.b)(this, void 0, void 0, function () {
                  var e,
                    t,
                    n,
                    a = this;
                  return Object(r.e)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return [
                          4,
                          (e = this.props
                            .admin).PreviewPartnerEventsFromRSSFeed(
                            this.props.strRssURL
                          ),
                        ];
                      case 1:
                        return (
                          (t = i.sent()) && 1 == t.GetEResult()
                            ? ((n = t.Body().toObject()),
                              this.setState(
                                {
                                  strParseRssURL: n.rss_url,
                                  bLoadingPreview: !0,
                                },
                                function () {
                                  return Object(r.b)(
                                    a,
                                    void 0,
                                    void 0,
                                    function () {
                                      var t, a, i;
                                      return Object(r.e)(this, function (r) {
                                        switch (r.label) {
                                          case 0:
                                            return [
                                              4,
                                              e.FetchPublishedEvents(
                                                Math.max(100, n.results.length)
                                              ),
                                            ];
                                          case 1:
                                            return (
                                              r.sent(),
                                              (t = new Array()),
                                              (a = new Array()),
                                              n.results.forEach(function (n) {
                                                var r = e.MapArticleURLToClanEventGID(
                                                  n.post.url
                                                );
                                                r && t.push(r),
                                                  n.post.appids &&
                                                    1 ===
                                                      n.post.appids.length &&
                                                    0 !==
                                                      n.post
                                                        .recommendation_state &&
                                                    a.push(n.post.appids[0]);
                                              }),
                                              t.length > 0
                                                ? [
                                                    4,
                                                    f.c.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                                                      t,
                                                      null,
                                                      this.m_cancelSignal
                                                    ),
                                                  ]
                                                : [3, 3]
                                            );
                                          case 2:
                                            r.sent(), (r.label = 3);
                                          case 3:
                                            return a.length > 0
                                              ? ((i = e.GetClanSteamID()),
                                                [
                                                  4,
                                                  l
                                                    .Get()
                                                    .LoadAppRecommendation(
                                                      i,
                                                      a
                                                    ),
                                                ])
                                              : [3, 5];
                                          case 4:
                                            r.sent(), (r.label = 5);
                                          case 5:
                                            return (
                                              this.setState({
                                                previews: n.results,
                                                bLoadingPreview: void 0,
                                              }),
                                              [2]
                                            );
                                        }
                                      });
                                    }
                                  );
                                }
                              ))
                            : this.setState({
                                bLoadingPreview: void 0,
                                strPreviewErrorMsg: Object(B.f)(
                                  "#Error_Description",
                                  t.GetEResult(),
                                  t.Hdr().error_message()
                                ),
                              }),
                          [2]
                        );
                    }
                  });
                });
              }),
              (t.prototype.render = function () {
                var e = this.RenderPreviews(),
                  t = this.props.admin;
                return m.a.createElement(
                  "div",
                  null,
                  Boolean(
                    !this.state.bLoadingPreview &&
                      this.state.strPreviewURL !== this.props.strRssURL
                  ) &&
                    m.a.createElement(
                      "div",
                      { className: M.PreviewListBtn },
                      m.a.createElement(
                        b.d,
                        {
                          disabled: !b.l.validateUrl(this.props.strRssURL),
                          onClick: this.OnLoadPreview,
                        },
                        Object(B.f)("#CuratorAdmin_RSSFeed_preview")
                      )
                    ),
                  this.state.bLoadingPreview &&
                    m.a.createElement(O.a, {
                      string: Object(B.f)("#Loading"),
                      size: "medium",
                      position: "center",
                    }),
                  this.state.strPreviewErrorMsg &&
                    m.a.createElement(
                      "div",
                      { className: S.a.ErrorMsg },
                      this.state.strPreviewErrorMsg
                    ),
                  Boolean(e.length > 0) &&
                    m.a.createElement(
                      "div",
                      null,
                      m.a.createElement(
                        "p",
                        null,
                        Object(B.f)(
                          "#RSSManager_PreviewInfo",
                          this.state.strPreviewURL
                        )
                      ),
                      m.a.createElement(
                        "div",
                        { className: M.PreviewListCtn },
                        e
                      ),
                      m.a.createElement(
                        "p",
                        { className: M.DashboardBtn },
                        m.a.createElement(
                          C.a,
                          {
                            href:
                              s.d.COMMUNITY_BASE_URL +
                              "gid/" +
                              t.GetClanSteamID().ConvertTo64BitString() +
                              "/partnerevents/",
                            className: Object(E.a)(S.a.Button, S.a.Primary),
                          },
                          Object(B.f)("#RSSManager_EventDashBoard")
                        )
                      )
                    )
                );
              }),
              Object(r.c)([P.a], t.prototype, "GetRSSPreviewURL", null),
              Object(r.c)([P.a], t.prototype, "OnLoadPreview", null),
              (t = Object(r.c)([d.a], t))
            );
          })(m.a.Component)),
        T = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.state = {}), t;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.OnToggleChannelAutomation = function (e) {
              e
                ? (this.setState({ strErrorMessage: void 0 }),
                  Object(R.d)(
                    m.a.createElement(z, {
                      strRSSUrl: this.props.admin.GetRSSUrl(),
                      admin: this.props.admin,
                      bActivatePooling: !0,
                    }),
                    window
                  ))
                : this.setState(
                    {
                      strErrorMessage: void 0,
                      strReasonWaiting: Object(B.f)("#Saving"),
                    },
                    this.BDisableAutomation
                  );
            }),
            (t.prototype.BDisableAutomation = function () {
              return Object(r.b)(this, void 0, void 0, function () {
                var e = this;
                return Object(r.e)(this, function (t) {
                  return (
                    this.props.admin
                      .UpdateAutomation(!1)
                      .catch(function () {
                        return e.setState({
                          strErrorMessage: Object(B.f)(
                            "#RSSManager_Status_Automation_DisableFailed"
                          ),
                        });
                      })
                      .finally(function () {
                        return e.setState({ strReasonWaiting: void 0 });
                      }),
                    [2]
                  );
                });
              });
            }),
            (t.prototype.OnQueueScan = function (e) {
              return Object(r.b)(this, void 0, void 0, function () {
                var t = this;
                return Object(r.e)(this, function (n) {
                  return (
                    this.setState({
                      strReasonWaiting: Object(B.f)(
                        "#CuratorAdmin_RSSFeed_scannow"
                      ),
                    }),
                    this.props.admin
                      .CheckForNewUpdate()
                      .then(function () {
                        return Object(R.d)(
                          m.a.createElement(w.d, {
                            strTitle: Object(B.f)(
                              "#CuratorAdmin_RSSFeed_scannow"
                            ),
                            strDescription: Object(B.f)(
                              "#CuratorAdmin_RSSFeed_queued"
                            ),
                          }),
                          Object(y.m)(e)
                        );
                      })
                      .catch(function (t) {
                        return Object(R.d)(
                          m.a.createElement(w.f, {
                            strTitle: Object(B.f)(
                              "#CuratorAdmin_RSSFeed_scannow"
                            ),
                            strDescription: Object(j.c)(t),
                          }),
                          Object(y.m)(e)
                        );
                      })
                      .finally(function () {
                        return t.setState({ strReasonWaiting: void 0 });
                      }),
                    [2]
                  );
                });
              });
            }),
            (t.prototype.render = function () {
              return this.props.admin.BHasSavedRSSURL()
                ? m.a.createElement(
                    "div",
                    null,
                    Boolean(this.state.strReasonWaiting) &&
                      m.a.createElement(O.a, {
                        size: "medium",
                        string: this.state.strReasonWaiting,
                      }),
                    Boolean(this.state.strErrorMessage) &&
                      m.a.createElement(
                        "div",
                        { className: M.Error },
                        this.state.strErrorMessage
                      ),
                    m.a.createElement(b.p, {
                      onChange: this.OnToggleChannelAutomation,
                      label: Object(B.f)("#RSSManager_Status_Automation_Desc"),
                      checked: this.props.admin.BIsAutomationEnabled(),
                      description: "",
                    }),
                    this.props.admin.BIsAutomationEnabled() &&
                      m.a.createElement(
                        "p",
                        null,
                        Object(B.f)("#CuratorAdmin_RSSFeed_lastscanned"),
                        " ",
                        Object(B.k)(
                          this.props.admin.GetRSSLastRtimeChecked(),
                          !1
                        ),
                        "  @ ",
                        Object(B.m)(this.props.admin.GetRSSLastRtimeChecked()),
                        " ",
                        m.a.createElement(
                          "a",
                          { onClick: this.OnQueueScan },
                          m.a.createElement(
                            "span",
                            null,
                            Object(B.f)("#CuratorAdmin_RSSFeed_scannow")
                          )
                        )
                      )
                  )
                : null;
            }),
            Object(r.c)([P.a], t.prototype, "OnToggleChannelAutomation", null),
            Object(r.c)([P.a], t.prototype, "OnQueueScan", null),
            (t = Object(r.c)([d.a], t))
          );
        })(m.a.Component),
        N = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {
                clan_event_gid: t.props.admin.MapArticleURLToClanEventGID(
                  t.props.newsData.post.url
                ),
                bLoadingPartnerEvent: Boolean(
                  t.props.admin.MapArticleURLToClanEventGID(
                    t.props.newsData.post.url
                  )
                ),
              }),
              t
            );
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.componentDidMount = function () {
              this.DoPartnerEventLoad();
            }),
            (t.prototype.DoPartnerEventLoad = function () {
              return Object(r.b)(this, void 0, void 0, function () {
                var e, t;
                return Object(r.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return this.state.clan_event_gid
                        ? ((e = this.props.admin.GetClanSteamID()),
                          (t = f.c.GetClanEventModel(this.state.clan_event_gid))
                            ? [3, 2]
                            : [
                                4,
                                f.c.LoadHiddenPartnerEvent(
                                  e,
                                  this.state.clan_event_gid
                                ),
                              ])
                        : [3, 3];
                    case 1:
                      (t = n.sent()), (n.label = 2);
                    case 2:
                      this.setState({
                        bLoadingPartnerEvent: !1,
                        existingEventModel: t,
                      }),
                        (n.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.OnOpenPreviewAsPartnerEvent = function (e) {
              var t = this.props,
                n = t.newsData,
                r = t.clanSteamID,
                a = new _.p();
              (a.GID = "PreviewPartnerEventRow_0"),
                (a.clanSteamID = r),
                (a.postTime = Date.now() / 1e3),
                (a.startTime = Date.now() / 1e3),
                (a.type = 28),
                a.vecTags.push("auto_rssfeed"),
                a.vecTags.push("curator"),
                a.vecTags.push("curator_public"),
                a.name.set(0, n.title),
                a.description.set(0, n.desc),
                this.ValidateJSONDefault(n.jsondata) &&
                  (a.jsondata = n.jsondata),
                a.jsondata.read_more_link ||
                  (a.jsondata.read_more_link = n.unique_id);
              var i = this.props.admin.GetFeedLanguageHandleUnset();
              !a.jsondata.localized_summary &&
                n.post.event_summary &&
                ((a.jsondata.localized_summary = Object(F.e)(
                  a.jsondata.localized_summary,
                  30,
                  null
                )),
                (a.jsondata.localized_summary[0] = n.post.event_summary),
                0 != i &&
                  (a.jsondata.localized_summary[i] = n.post.event_summary)),
                !a.jsondata.localized_subtitle &&
                  n.post.event_subtitle &&
                  ((a.jsondata.localized_subtitle = Object(F.e)(
                    a.jsondata.localized_subtitle,
                    30,
                    null
                  )),
                  (a.jsondata.localized_subtitle[0] = n.post.event_subtitle),
                  0 != i &&
                    (a.jsondata.localized_subtitle[i] = n.post.event_subtitle)),
                this.ShowModalEvent(a);
            }),
            (t.prototype.OnViewEvent = function () {
              this.ShowModalEvent(
                f.c.GetClanEventModel(this.state.clan_event_gid)
              );
            }),
            (t.prototype.ShowModalEvent = function (e) {
              var t = document.getElementById("curator_header_area_ctn_id");
              t &&
                (e
                  ? t.classList.add("curator_header_area_ctn_hideme")
                  : t.classList.remove("curator_header_area_ctn_hideme")),
                this.setState({ eventModelForPreviewNow: e });
            }),
            (t.prototype.ValidateJSONDefault = function (e) {
              var t = e;
              return !(!t || Array.isArray(t) || "object" != typeof t);
            }),
            (t.prototype.OnPostNewsEvent = function (e) {
              var t = this.props,
                n = t.newsData,
                r = t.fnGetRSSUrl;
              Object(R.d)(
                m.a.createElement(z, {
                  newsData: n,
                  admin: this.props.admin,
                  strRSSUrl: r(),
                  fnClanEventGID: this.OnClanEventCreateSuccess,
                }),
                Object(y.m)(e)
              );
            }),
            (t.prototype.OnUpdateNewsEvent = function (e) {
              var t = this.props,
                n = t.newsData,
                r = t.fnGetRSSUrl;
              Object(R.d)(
                m.a.createElement(z, {
                  newsData: n,
                  strRSSUrl: r(),
                  admin: this.props.admin,
                  fnClanEventGID: this.OnClanEventCreateSuccess,
                  bUpdatePost: !0,
                }),
                Object(y.m)(e)
              );
            }),
            (t.prototype.HideModalEvent = function () {
              this.state.eventModelForPreviewNow && this.ShowModalEvent(void 0);
            }),
            (t.prototype.OnClanEventCreateSuccess = function (e) {
              this.setState(
                { clan_event_gid: e, bLoadingPartnerEvent: !0 },
                this.DoPartnerEventLoad
              );
            }),
            (t.prototype.OnShowRawRSS = function (e) {
              var t = this.props.newsData.rss_message,
                n = (function () {
                  var e = t.match(/<entry[^>]*>([\s\S]*)<\/entry>/m);
                  if (!e) return t;
                  var n = e[1].match(/<content[^>]*>[\s\S]*<\/content>/m);
                  return n ? Object(L.b)(n[0]) : e[0];
                })();
              Object(R.d)(
                m.a.createElement(
                  w.d,
                  {
                    bAlertDialog: !0,
                    strTitle: Object(B.f)("#RSSManager_PostEvent_ViewRaw"),
                  },
                  m.a.createElement("textarea", {
                    className: M.RawRSS,
                    value: n,
                    disabled: !0,
                  })
                ),
                Object(y.m)(e)
              );
            }),
            (t.prototype.render = function () {
              var e = this.props.newsData,
                t = this.state,
                n = t.clan_event_gid,
                r = t.existingEventModel,
                a = t.bLoadingPartnerEvent,
                i = this.props.admin,
                o = i.GetClanSteamID(),
                c = r && r.BIsStagedEvent(),
                d =
                  e.post.appids &&
                  1 == e.post.appids.length &&
                  e.post.appids[0],
                u =
                  0 !== e.post.recommendation_state &&
                  d &&
                  l.Get().BHasReviewForApp(o, d),
                p = "";
              if (r) {
                var _ =
                  r.GetVisibilityStartTimeAndDateUnixSeconds() ||
                  r.GetPostTimeAndDateUnixSeconds();
                p = Object(B.o)(_) + " @ " + Object(B.m)(_);
              }
              return m.a.createElement(
                "div",
                {
                  className: Object(E.a)(
                    M.PostCtn,
                    Boolean(n) ? M.ActivePost : "",
                    Boolean(e.valid_post) ? "" : M.ErrorPost
                  ),
                },
                m.a.createElement("span", { className: M.PostTitle }, e.title),
                m.a.createElement("br", null),
                Boolean(r) &&
                  m.a.createElement(
                    m.a.Fragment,
                    null,
                    Boolean(r.BIsVisibleEvent()) &&
                      m.a.createElement(
                        "span",
                        { className: M.PostDate },
                        Object(B.f)("#RSSManager_PostEvent_PostedDate", p)
                      ),
                    Boolean(!r.BIsVisibleEvent()) &&
                      m.a.createElement(
                        "span",
                        {
                          className: Object(E.a)(
                            M.PostDraft,
                            c ? M.PostStaged : ""
                          ),
                        },
                        Object(B.f)(
                          c
                            ? "#RSSManager_PostEvent_Staged"
                            : "#RSSManager_PostEvent_Draft",
                          p
                        )
                      )
                  ),
                Boolean(!e.valid_post && e.post_error_msg) &&
                  m.a.createElement(
                    "div",
                    { className: A.a.ErrorStylesBackground },
                    Object(B.f)("#Error_Generic_Label"),
                    " ",
                    Object(B.f)(e.post_error_msg)
                  ),
                m.a.createElement(
                  "div",
                  { className: M.ButtonCtn },
                  Boolean(n)
                    ? m.a.createElement(
                        m.a.Fragment,
                        null,
                        Boolean(a)
                          ? m.a.createElement(O.a, {
                              string: Object(B.f)("#Loading"),
                              size: "small",
                              position: "center",
                            })
                          : m.a.createElement(
                              "div",
                              {
                                onClick: this.OnViewEvent,
                                className: Object(E.a)(
                                  S.a.Button,
                                  M.PreviewBtn
                                ),
                              },
                              Object(B.f)("#RSSManager_PostEvent_ViewEvent")
                            ),
                        m.a.createElement(
                          "a",
                          {
                            className: Object(E.a)(S.a.Button, M.PreviewBtn),
                            href:
                              s.d.COMMUNITY_BASE_URL +
                              "gid/" +
                              i.GetClanSteamID().ConvertTo64BitString() +
                              "/partnerevents/edit/" +
                              this.state.clan_event_gid,
                          },
                          Object(B.f)("#RSSManager_PostEvent_EditEvent")
                        ),
                        m.a.createElement(
                          "div",
                          {
                            onClick: this.OnUpdateNewsEvent,
                            className: Object(E.a)(S.a.Button, M.PreviewBtn),
                          },
                          Object(B.f)("#RSSManager_PostEvent_UpdateEvent")
                        ),
                        u &&
                          m.a.createElement(
                            "a",
                            {
                              className: Object(E.a)(S.a.Button, M.PreviewBtn),
                              href: Object(I.f)(
                                s.d.STORE_BASE_URL +
                                  "app/" +
                                  e.post.appids[0] +
                                  "/?curator_clanid=" +
                                  o.GetAccountID()
                              ),
                            },
                            Object(B.f)("#RSSManager_SeeReview")
                          )
                      )
                    : m.a.createElement(
                        m.a.Fragment,
                        null,
                        m.a.createElement(
                          "div",
                          {
                            onClick: this.OnOpenPreviewAsPartnerEvent,
                            className: Object(E.a)(S.a.Button, M.PreviewBtn),
                          },
                          Object(B.f)("#CuratorAdmin_RSSFeed_col_preview_event")
                        ),
                        m.a.createElement(
                          "div",
                          {
                            onClick: this.OnPostNewsEvent,
                            className: Object(E.a)(S.a.Button, M.PreviewBtn),
                          },
                          Object(B.f)("#CuratorAdmin_RSSFeed_col_create_event")
                        )
                      ),
                  Boolean(e.rss_message && e.rss_message.length > 0) &&
                    m.a.createElement(
                      "div",
                      { onClick: this.OnShowRawRSS, className: M.ViewRaw },
                      Object(B.f)("#RSSManager_PostEvent_ViewRaw")
                    ),
                  Boolean(this.state.eventModelForPreviewNow) &&
                    m.a.createElement(
                      w.j,
                      { className: g.StoreHeaderAdjust },
                      m.a.createElement(
                        "div",
                        null,
                        m.a.createElement(h.b, {
                          event: this.state.eventModelForPreviewNow,
                          fnClose: this.HideModalEvent,
                        })
                      )
                    )
                )
              );
            }),
            Object(r.c)([P.a], t.prototype, "DoPartnerEventLoad", null),
            Object(r.c)(
              [P.a],
              t.prototype,
              "OnOpenPreviewAsPartnerEvent",
              null
            ),
            Object(r.c)([P.a], t.prototype, "OnViewEvent", null),
            Object(r.c)([P.a], t.prototype, "OnPostNewsEvent", null),
            Object(r.c)([P.a], t.prototype, "OnUpdateNewsEvent", null),
            Object(r.c)([P.a], t.prototype, "HideModalEvent", null),
            Object(r.c)([P.a], t.prototype, "OnClanEventCreateSuccess", null),
            Object(r.c)([P.a], t.prototype, "OnShowRawRSS", null),
            (t = Object(r.c)([d.a], t))
          );
        })(m.a.Component),
        z = (function (e) {
          function t() {
            var n = (null !== e && e.apply(this, arguments)) || this;
            return (
              (n.state = {
                initialState: t.DetermineStartState(n.props),
                step: t.DetermineStartState(n.props),
                bDraftMode: !0,
              }),
              n
            );
          }
          return (
            Object(r.d)(t, e),
            (t.DetermineStartState = function (e) {
              var t = e.admin.BHasSetupFeed(e.strRSSUrl);
              return e.newsData && t
                ? e.bUpdatePost
                  ? "update_post"
                  : "create_post"
                : e.bActivatePooling
                ? "activate_feed"
                : e.admin.BHasSavedRSSURL()
                ? "update_feed"
                : "feed_missing";
            }),
            (t.prototype.OnCreateNewsFeed = function () {
              this.setState({ step: "creating_feed" }, this.DoCreateNewsFeed);
            }),
            (t.prototype.DoCreateNewsFeed = function () {
              return Object(r.b)(this, void 0, void 0, function () {
                var e;
                return Object(r.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [
                        4,
                        this.props.admin.CreateOrUpdateRSSNewFeed(
                          this.props.strRSSUrl,
                          this.props.bActivatePooling ? 300 : 0
                        ),
                      ];
                    case 1:
                      return (
                        1 != (e = t.sent()).success
                          ? this.setState({
                              step: "failure",
                              eResult: e.success,
                              strErrorMessage: Object(B.f)(
                                "#RSSManager_PostEvent_Failure"
                              ),
                            })
                          : this.setState({
                              step: this.props.newsData
                                ? "create_post"
                                : "success",
                            }),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.OnCreatePost = function () {
              this.setState({ step: "waiting_post" }, this.DoCreatePost);
            }),
            (t.prototype.DoCreatePost = function () {
              return Object(r.b)(this, void 0, void 0, function () {
                var e;
                return Object(r.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [
                        4,
                        this.props.admin.CreatePost(
                          this.props.newsData,
                          Boolean(this.state.bDraftMode)
                        ),
                      ];
                    case 1:
                      return (
                        1 != (e = t.sent()).GetEResult()
                          ? this.setState({
                              step: "failure",
                              eResult: e.GetEResult(),
                              strErrorMessage: Object(B.f)(
                                "#RSSManager_PostEvent_Failure"
                              ),
                            })
                          : (this.props.fnClanEventGID &&
                              this.props.fnClanEventGID(
                                e.Body().clan_event_gid()
                              ),
                            this.setState({
                              step: "success",
                              eventGID: e.Body().clan_event_gid(),
                            })),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.OnChangeDraftMode = function (e) {
              this.setState({ bDraftMode: e });
            }),
            (t.prototype.OnChangePermissionsCreateFeed = function (e) {
              this.setState({ bPermissions: e });
            }),
            (t.prototype.OnChangeConductCreateFeed = function (e) {
              this.setState({ bConduct: e });
            }),
            (t.prototype.GetStrTitle = function () {
              if (this.props.newsData)
                return Object(B.f)(
                  this.props.bUpdatePost
                    ? "#RSSManager_PostEvent_UpdateEvent"
                    : "#RSSManager_PostEvent_Tilte"
                );
              switch (this.state.initialState) {
                case "feed_missing":
                  return Object(B.f)("#RSSManager_PostEvent_CreateFeedTitle");
                default:
                case "update_feed":
                  return Object(B.f)("#RSSManager_PostEvent_UpdateFeedTitle");
                case "activate_feed":
                  return Object(B.f)("#RSSManager_Status_Automation_Activate");
              }
            }),
            (t.prototype.render = function () {
              var e = this.props.strRSSUrl;
              switch (this.state.step) {
                case "feed_missing":
                case "activate_feed":
                case "update_feed":
                default:
                  return m.a.createElement(
                    w.e,
                    null,
                    m.a.createElement(b.k, null, " ", this.GetStrTitle(), " "),
                    m.a.createElement(
                      b.b,
                      null,
                      m.a.createElement(
                        b.c,
                        null,
                        this.props.newsData &&
                          m.a.createElement(
                            "div",
                            null,
                            Object(B.f)(
                              "#RSSManager_PostEvent_CreateFeed_DuringPost"
                            )
                          ),
                        Boolean("activate_feed" !== this.state.step) &&
                          m.a.createElement(
                            "div",
                            null,
                            Object(B.f)(
                              "#RSSManager_PostEvent_CreateFeed_Desc",
                              e
                            )
                          ),
                        m.a.createElement(
                          "div",
                          null,
                          Object(B.f)("#RSSManager_CreateFeed_Review")
                        ),
                        m.a.createElement(
                          "div",
                          null,
                          m.a.createElement(b.e, {
                            label: Object(B.f)(
                              "#RSSManager_CreateFeed_Permissions_v1"
                            ),
                            onChange: this.OnChangePermissionsCreateFeed,
                            checked: Boolean(this.state.bPermissions),
                          })
                        ),
                        m.a.createElement(
                          "div",
                          null,
                          m.a.createElement(b.e, {
                            label: Object(B.f)(
                              "#RSSManager_CreateFeed_Conduct_v1"
                            ),
                            onChange: this.OnChangeConductCreateFeed,
                            checked: Boolean(this.state.bConduct),
                          }),
                          m.a.createElement(
                            C.a,
                            { href: s.d.STORE_BASE_URL + "online_conduct/" },
                            Object(B.f)("#RSSManager_CreateFeed_Conduct_Link")
                          )
                        )
                      ),
                      m.a.createElement(
                        b.j,
                        null,
                        m.a.createElement(b.n, {
                          bOKDisabled: !Boolean(
                            this.state.bPermissions && this.state.bConduct
                          ),
                          onOK: this.OnCreateNewsFeed,
                          onCancel: this.props.closeModal,
                        })
                      )
                    )
                  );
                case "failure":
                  return m.a.createElement(
                    w.f,
                    {
                      strDescription: Object(B.f)(
                        "#RSSManager_PostEvent_Failure"
                      ),
                      closeModal: this.props.closeModal,
                    },
                    m.a.createElement(
                      "div",
                      null,
                      Object(B.f)(
                        "#Error_Description",
                        this.state.eResult,
                        this.state.strErrorMessage
                      )
                    )
                  );
                case "creating_feed":
                case "waiting_post":
                  return m.a.createElement(
                    w.d,
                    {
                      strTitle: this.GetStrTitle(),
                      strDescription: Object(B.f)(
                        "#RSSManager_PostEvent_InFlight"
                      ),
                      closeModal: this.props.closeModal,
                    },
                    m.a.createElement(O.a, { position: "center" })
                  );
                case "create_post":
                  return m.a.createElement(
                    w.e,
                    null,
                    m.a.createElement(b.k, null, " ", this.GetStrTitle(), " "),
                    m.a.createElement(
                      b.b,
                      null,
                      m.a.createElement(
                        b.c,
                        null,
                        m.a.createElement(
                          "div",
                          null,
                          m.a.createElement(
                            "div",
                            null,
                            Object(B.f)("#RSSManager_PostEvent_CreatePost")
                          ),
                          m.a.createElement(
                            "div",
                            { className: M.DialogPostTitle },
                            this.props.newsData.title
                          ),
                          m.a.createElement("br", null),
                          m.a.createElement(
                            "div",
                            null,
                            m.a.createElement(b.e, {
                              label: Object(B.f)(
                                "#RSSManager_PostEvent_CreatePost_Draft"
                              ),
                              onChange: this.OnChangeDraftMode,
                              checked: Boolean(this.state.bDraftMode),
                            })
                          )
                        )
                      ),
                      m.a.createElement(
                        b.j,
                        null,
                        m.a.createElement(b.n, {
                          onOK: this.OnCreatePost,
                          onCancel: this.props.closeModal,
                        })
                      )
                    )
                  );
                case "update_post":
                  return m.a.createElement(
                    w.e,
                    null,
                    m.a.createElement(b.k, null, " ", this.GetStrTitle(), " "),
                    m.a.createElement(
                      b.b,
                      null,
                      m.a.createElement(
                        b.c,
                        null,
                        m.a.createElement(
                          "div",
                          null,
                          m.a.createElement(
                            "div",
                            null,
                            Object(B.f)("#RSSManager_PostEvent_UpdatePost")
                          ),
                          m.a.createElement("br", null),
                          m.a.createElement(
                            "div",
                            { className: M.DialogPostTitle },
                            this.props.newsData.title
                          ),
                          m.a.createElement("br", null)
                        )
                      ),
                      m.a.createElement(
                        b.j,
                        null,
                        m.a.createElement(b.n, {
                          onOK: this.OnCreatePost,
                          onCancel: this.props.closeModal,
                        })
                      )
                    )
                  );
                case "success":
                  return m.a.createElement(
                    w.d,
                    {
                      strTitle: this.GetStrTitle(),
                      strDescription: Object(B.f)(
                        this.props.newsData
                          ? "#RSSManager_PostEvent_Success"
                          : "#RSSManager_PostEvent_Success_feed"
                      ),
                      closeModal: this.props.closeModal,
                      bAlertDialog: !0,
                    },
                    Boolean(this.state.eventGID) &&
                      m.a.createElement(
                        "a",
                        {
                          href:
                            s.d.COMMUNITY_BASE_URL +
                            "gid/" +
                            this.props.admin
                              .GetClanSteamID()
                              .ConvertTo64BitString() +
                            "/partnerevents/edit/" +
                            this.state.eventGID,
                        },
                        Object(B.f)("#RSSManager_PostEvent_EventLink")
                      )
                  );
              }
            }),
            Object(r.c)([P.a], t.prototype, "OnCreateNewsFeed", null),
            Object(r.c)([P.a], t.prototype, "DoCreateNewsFeed", null),
            Object(r.c)([P.a], t.prototype, "OnCreatePost", null),
            Object(r.c)([P.a], t.prototype, "DoCreatePost", null),
            Object(r.c)([P.a], t.prototype, "OnChangeDraftMode", null),
            Object(r.c)(
              [P.a],
              t.prototype,
              "OnChangePermissionsCreateFeed",
              null
            ),
            Object(r.c)([P.a], t.prototype, "OnChangeConductCreateFeed", null),
            Object(r.c)([P.a], t.prototype, "GetStrTitle", null),
            t
          );
        })(m.a.Component);
    },
  },
]);
