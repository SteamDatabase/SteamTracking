/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    "2l+k": function (e, t, n) {
      "use strict";
      var d = n("mrSG"),
        r = n("vDqi"),
        u = n.n(r),
        m = n("2vnA"),
        p = n("lkRc"),
        a = n("WBba"),
        s = n("bxBv"),
        i = n("hRO2"),
        o = n("OS8t"),
        c = i.Message;
      var l,
        _,
        f = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.gid || o.a(r.M()),
              c.initialize(t, e, 0, -1, [5], null),
              t
            );
          }
          return (
            Object(d.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      gid: {
                        n: 1,
                        br: o.d.readFixed64String,
                        bw: o.h.writeFixed64String,
                      },
                      name: { n: 2, br: o.d.readString, bw: o.h.writeString },
                      type: {
                        n: 3,
                        d: 0,
                        br: o.d.readUint32,
                        bw: o.h.writeUint32,
                      },
                      url: { n: 4, br: o.d.readString, bw: o.h.writeString },
                      associated_apps: {
                        n: 5,
                        r: !0,
                        q: !0,
                        br: o.d.readUint32,
                        bw: o.h.writeRepeatedUint32,
                      },
                      poll_interval: {
                        n: 6,
                        d: 300,
                        br: o.d.readUint32,
                        bw: o.h.writeUint32,
                      },
                      kv_description: {
                        n: 7,
                        br: o.d.readString,
                        bw: o.h.writeString,
                      },
                      kv_filter: {
                        n: 8,
                        br: o.d.readString,
                        bw: o.h.writeString,
                      },
                      publish_to_clan_account_id: {
                        n: 9,
                        br: o.d.readUint32,
                        bw: o.h.writeUint32,
                      },
                      language: {
                        n: 10,
                        br: o.d.readUint32,
                        bw: o.h.writeUint32,
                      },
                      last_error: {
                        n: 11,
                        br: o.d.readUint32,
                        bw: o.h.writeUint32,
                      },
                      last_update: {
                        n: 12,
                        br: o.d.readUint32,
                        bw: o.h.writeUint32,
                      },
                      last_checked: {
                        n: 13,
                        br: o.d.readUint32,
                        bw: o.h.writeUint32,
                      },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = o.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return o.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return o.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new i.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return o.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new i.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              o.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CNewsFeedDef";
            }),
            r
          );
        })(c),
        b = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.gid || o.a(r.M()),
              c.initialize(t, e, 0, -1, [11], null),
              t
            );
          }
          return (
            Object(d.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      gid: {
                        n: 1,
                        br: o.d.readFixed64String,
                        bw: o.h.writeFixed64String,
                      },
                      news_feed_gid: {
                        n: 2,
                        br: o.d.readFixed64String,
                        bw: o.h.writeFixed64String,
                      },
                      title: { n: 3, br: o.d.readString, bw: o.h.writeString },
                      url: { n: 4, br: o.d.readString, bw: o.h.writeString },
                      author: { n: 5, br: o.d.readString, bw: o.h.writeString },
                      rtime_date: {
                        n: 6,
                        br: o.d.readUint32,
                        bw: o.h.writeUint32,
                      },
                      contents: {
                        n: 7,
                        br: o.d.readString,
                        bw: o.h.writeString,
                      },
                      commited: { n: 8, br: o.d.readBool, bw: o.h.writeBool },
                      deleted: { n: 9, br: o.d.readBool, bw: o.h.writeBool },
                      tags: { n: 10, br: o.d.readString, bw: o.h.writeString },
                      appids: {
                        n: 11,
                        r: !0,
                        q: !0,
                        br: o.d.readUint32,
                        bw: o.h.writeRepeatedUint32,
                      },
                      recommendation_state: {
                        n: 12,
                        br: o.d.readEnum,
                        bw: o.h.writeEnum,
                      },
                      received_compensation: {
                        n: 13,
                        br: o.d.readBool,
                        bw: o.h.writeBool,
                      },
                      received_for_free: {
                        n: 14,
                        br: o.d.readBool,
                        bw: o.h.writeBool,
                      },
                      blurb: { n: 15, br: o.d.readString, bw: o.h.writeString },
                      event_subtitle: {
                        n: 16,
                        br: o.d.readString,
                        bw: o.h.writeString,
                      },
                      event_summary: {
                        n: 17,
                        br: o.d.readString,
                        bw: o.h.writeString,
                      },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = o.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return o.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return o.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new i.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return o.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new i.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              o.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CNewsFeedPostDef";
            }),
            r
          );
        })(c),
        h = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.converted_content || o.a(r.M()),
              c.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(d.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      converted_content: {
                        n: 1,
                        br: o.d.readString,
                        bw: o.h.writeString,
                      },
                      found_html: { n: 2, br: o.d.readBool, bw: o.h.writeBool },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = o.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return o.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return o.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new i.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return o.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new i.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              o.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CNews_ConvertHTMLToBBCode_Response";
            }),
            r
          );
        })(c),
        v = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.rss_message || o.a(r.M()),
              c.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(d.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      rss_message: {
                        n: 1,
                        br: o.d.readString,
                        bw: o.h.writeString,
                      },
                      unique_id: {
                        n: 2,
                        br: o.d.readString,
                        bw: o.h.writeString,
                      },
                      title: { n: 3, br: o.d.readString, bw: o.h.writeString },
                      desc: { n: 4, br: o.d.readString, bw: o.h.writeString },
                      jsondata: {
                        n: 5,
                        br: o.d.readString,
                        bw: o.h.writeString,
                      },
                      post: { n: 6, c: b },
                      valid_post: { n: 7, br: o.d.readBool, bw: o.h.writeBool },
                      post_error_msg: {
                        n: 8,
                        br: o.d.readString,
                        bw: o.h.writeString,
                      },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = o.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return o.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return o.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new i.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return o.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new i.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              o.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CNewsPartnerEventPreview";
            }),
            r
          );
        })(c),
        S = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.rss_url || o.a(r.M()),
              c.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(d.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      rss_url: {
                        n: 1,
                        br: o.d.readString,
                        bw: o.h.writeString,
                      },
                      lang: { n: 2, br: o.d.readUint32, bw: o.h.writeUint32 },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = o.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return o.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return o.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new i.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return o.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new i.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              o.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CNews_PreviewPartnerEvents_Request";
            }),
            r
          );
        })(c),
        g = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.rss_url || o.a(r.M()),
              c.initialize(t, e, 0, -1, [2], null),
              t
            );
          }
          return (
            Object(d.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      rss_url: {
                        n: 1,
                        br: o.d.readString,
                        bw: o.h.writeString,
                      },
                      results: { n: 2, c: v, r: !0, q: !0 },
                      error_msg: {
                        n: 3,
                        br: o.d.readString,
                        bw: o.h.writeString,
                      },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = o.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return o.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return o.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new i.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return o.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new i.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              o.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CNews_PreviewPartnerEvents_Response";
            }),
            r
          );
        })(c),
        w = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.feeds || o.a(r.M()),
              c.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(d.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: { feeds: { n: 1, c: f, r: !0, q: !0 } },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = o.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return o.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return o.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new i.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return o.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new i.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              o.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CNews_GetNewsFeedByRepublishClan_Response";
            }),
            r
          );
        })(c),
        R = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.post || o.a(r.M()),
              c.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(d.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      post: { n: 1, c: b },
                      draft: { n: 2, br: o.d.readBool, bw: o.h.writeBool },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = o.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return o.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return o.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new i.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return o.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new i.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              o.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CNews_PublishPartnerEvent_Request";
            }),
            r
          );
        })(c),
        O = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.clan_event_gid || o.a(r.M()),
              c.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(d.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      clan_event_gid: {
                        n: 1,
                        br: o.d.readFixed64String,
                        bw: o.h.writeFixed64String,
                      },
                      news_post_gid: {
                        n: 2,
                        br: o.d.readFixed64String,
                        bw: o.h.writeFixed64String,
                      },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = o.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return o.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return o.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new i.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return o.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new i.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              o.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CNews_PublishPartnerEvent_Response";
            }),
            r
          );
        })(c),
        E = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.news_feed_gid || o.a(r.M()),
              c.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(d.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      news_feed_gid: {
                        n: 1,
                        br: o.d.readFixed64String,
                        bw: o.h.writeFixed64String,
                      },
                      start_index: {
                        n: 2,
                        d: 0,
                        br: o.d.readUint32,
                        bw: o.h.writeUint32,
                      },
                      amount: {
                        n: 3,
                        d: 100,
                        br: o.d.readUint32,
                        bw: o.h.writeUint32,
                      },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = o.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return o.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return o.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new i.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return o.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new i.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              o.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CNews_GetBatchPublishedPartnerEvent_Request";
            }),
            r
          );
        })(c),
        C = (function (n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.clan_account_id || o.a(r.M()),
              c.initialize(t, e, 0, -1, [3, 4, 5], null),
              t
            );
          }
          return (
            Object(d.d)(r, n),
            (r.M = function () {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      clan_account_id: {
                        n: 1,
                        br: o.d.readUint32,
                        bw: o.h.writeUint32,
                      },
                      news_feed_gid: {
                        n: 2,
                        br: o.d.readFixed64String,
                        bw: o.h.writeFixed64String,
                      },
                      clan_event_gid: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: o.d.readFixed64String,
                        bw: o.h.writeRepeatedFixed64String,
                      },
                      news_post_gid: {
                        n: 4,
                        r: !0,
                        q: !0,
                        br: o.d.readFixed64String,
                        bw: o.h.writeRepeatedFixed64String,
                      },
                      news_url: {
                        n: 5,
                        r: !0,
                        q: !0,
                        br: o.d.readString,
                        bw: o.h.writeRepeatedString,
                      },
                    },
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function () {
              return r.sm_mbf || (r.sm_mbf = o.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function (e, t) {
              return o.g(r.M(), e, t);
            }),
            (r.fromObject = function (e) {
              return o.c(r.M(), e);
            }),
            (r.deserializeBinary = function (e) {
              var t = new i.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function (e, t) {
              return o.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function () {
              var e = new i.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function (e, t) {
              o.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function () {
              return "CNews_GetBatchPublishedPartnerEvent_Response";
            }),
            r
          );
        })(c);
      ((_ = l = l || {}).ConvertHTMLToBBCode = function (e, t) {
        return e.SendMsg("News.ConvertHTMLToBBCode#1", t, h, {
          bConstMethod: !0,
          ePrivilege: 0,
          eWebAPIKeyRequirement: 1,
        });
      }),
        (_.PreviewPartnerEvents = function (e, t) {
          return e.SendMsg("News.PreviewPartnerEvents#1", t, g, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
        (_.GetNewsFeedByRepublishClan = function (e, t) {
          return e.SendMsg("News.GetNewsFeedByRepublishClan#1", t, w, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
        (_.PublishPartnerEvent = function (e, t) {
          return e.SendMsg("News.PublishPartnerEvent#1", t, O, {
            ePrivilege: 1,
          });
        }),
        (_.GetBatchPublishedPartnerEvent = function (e, t) {
          return e.SendMsg("News.GetBatchPublishedPartnerEvent#1", t, C, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        });
      var y = n("kLLr"),
        B = n("6oCP"),
        j = n("NtSG"),
        P = n("r64O"),
        M = n("bDQf"),
        F = (function () {
          function e(e) {
            var t = this;
            (this.m_mapURLToPosted = new Map()),
              (this.m_clanAccountID = e.clanid),
              (this.m_clanSteamID = y.a.InitFromClanID(this.m_clanAccountID)),
              Object(m.G)(function () {
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
              return Boolean(0 < this.m_nPollIntervalSeconds);
            }),
            (e.prototype.BHasFeedGID = function () {
              return Boolean(this.m_strRSSGID);
            }),
            (e.prototype.PreviewPartnerEventsFromRSSFeed = function (r) {
              return Object(d.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(d.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? ((t = s.b.Init(S)).Body().set_rss_url(r),
                          t.Body().set_lang(this.GetFeedLanguageHandleUnset()),
                          [
                            4,
                            l.PreviewPartnerEvents(
                              L.Get().GetCuratorTransport(),
                              t
                            ),
                          ])
                        : (console.error(
                            "PreviewPartnerEventsFromRSSFeed: User not logged in"
                          ),
                          [2, null]);
                    case 1:
                      return (
                        1 != (n = e.sent()).GetEResult() &&
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
            (e.prototype.FetchPublishedEvents = function (a) {
              return (
                void 0 === a && (a = 100),
                Object(d.b)(this, void 0, void 0, function () {
                  var t,
                    n,
                    r = this;
                  return Object(d.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return this.BIsLoggedIn()
                          ? this.m_strRSSGID
                            ? ((t = s.b.Init(E))
                                .Body()
                                .set_news_feed_gid(this.m_strRSSGID),
                              t.Body().set_amount(a),
                              [
                                4,
                                l.GetBatchPublishedPartnerEvent(
                                  L.Get().GetCuratorTransport(),
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
                          1 != (n = e.sent()).GetEResult()
                            ? console.error(
                                "FetchPublishedEvents error: EMsg:" +
                                  Object(j.a)(n.GetEMsg()) +
                                  " EResult:" +
                                  n.GetEResult() +
                                  " msg:" +
                                  n.Hdr().error_message()
                              )
                            : Object(m.G)(function () {
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
                                  r.m_mapURLToPosted.set(t.url, t);
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
              return p.j.logged_in;
            }),
            (e.prototype.CreateOrUpdateRSSNewFeed = function (i, o) {
              return (
                void 0 === o && (o = 0),
                Object(d.b)(this, void 0, void 0, function () {
                  var t,
                    n,
                    r,
                    a = this;
                  return Object(d.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (t = new FormData()).append(
                            "sessionid",
                            p.d.SESSIONID
                          ),
                          t.append("gid", this.m_strRSSGID),
                          t.append("lang", "" + this.GetCuratorLanguage()),
                          t.append("rss_url", i),
                          t.append("polling_interval", "" + o),
                          (n =
                            p.d.STORE_BASE_URL +
                            "curator/" +
                            this.m_clanAccountID +
                            "/admin/ajaxmanagerssfeed"),
                          [4, u.a.post(n, t, { withCredentials: !0 })]
                        );
                      case 1:
                        return (
                          1 == (r = e.sent()).data.success &&
                            Object(m.G)(function () {
                              (a.m_strRSSGID = r.data.gid),
                                (a.m_strRSSFeedURL = i),
                                (a.m_nPollIntervalSeconds = o);
                            }),
                          [2, r.data]
                        );
                    }
                  });
                })
              );
            }),
            (e.prototype.UpdateAutomation = function (t) {
              return Object(d.b)(this, void 0, void 0, function () {
                return Object(d.e)(this, function (e) {
                  return [
                    2,
                    this.CreateOrUpdateRSSNewFeed(
                      this.m_strRSSFeedURL,
                      t ? 300 : 0
                    ),
                  ];
                });
              });
            }),
            (e.prototype.CheckForNewUpdate = function () {
              return Object(d.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(d.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return this.m_strRSSGID
                        ? ((t = new FormData()).append(
                            "sessionid",
                            p.d.SESSIONID
                          ),
                          t.append("gid", this.m_strRSSGID),
                          (n =
                            p.d.STORE_BASE_URL +
                            "curator/" +
                            this.m_clanAccountID +
                            "/admin/ajaxcheckfornews"),
                          [4, u.a.post(n, t, { withCredentials: !0 })])
                        : [3, 2];
                    case 1:
                      e.sent(), (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.CreatePost = function (i, o) {
              return Object(d.b)(this, void 0, void 0, function () {
                var t,
                  n,
                  r,
                  a = this;
                return Object(d.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? this.m_strRSSGID
                          ? ((t = new b()).set_gid(i.post.gid),
                            t.set_news_feed_gid(this.m_strRSSGID),
                            t.set_title(i.post.title),
                            t.set_url(i.post.url),
                            t.set_author(i.post.author),
                            t.set_rtime_date(i.post.rtime_date),
                            t.set_contents(i.post.contents),
                            t.set_commited(i.post.commited),
                            t.set_deleted(i.post.deleted),
                            t.set_tags(i.post.tags),
                            t.set_appids(i.post.appids),
                            t.set_recommendation_state(
                              i.post.recommendation_state
                            ),
                            t.set_received_for_free(i.post.received_for_free),
                            t.set_received_compensation(
                              i.post.received_compensation
                            ),
                            t.set_blurb(i.post.blurb),
                            (n = s.b.Init(R)).Body().set_post(t),
                            n.Body().set_draft(o),
                            [
                              4,
                              l.PublishPartnerEvent(
                                L.Get().GetCuratorTransport(),
                                n
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
                        1 != (r = e.sent()).GetEResult()
                          ? console.error(
                              "CreatePost error: " +
                                r.GetEMsg() +
                                " " +
                                r.GetEResult()
                            )
                          : (Object(m.G)(function () {
                              var e = {
                                url: i.post.url,
                                clan_event_gid: r.Body().clan_event_gid(),
                                news_post_gid: r.Body().news_post_gid(),
                              };
                              a.m_mapURLToPosted.set(i.post.url, e);
                            }),
                            B.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                              this.m_clanSteamID,
                              r.Body().clan_event_gid(),
                              0
                            )),
                        [2, r]
                      );
                  }
                });
              });
            }),
            Object(d.c)([m.C], e.prototype, "m_strRSSFeedURL", void 0),
            Object(d.c)([m.C], e.prototype, "m_strRSSGID", void 0),
            Object(d.c)([m.C], e.prototype, "m_rtimeRSSLastChecked", void 0),
            Object(d.c)([m.C], e.prototype, "m_nPollIntervalSeconds", void 0),
            Object(d.c)([m.C], e.prototype, "m_eRSSFeedLanguage", void 0),
            Object(d.c)([m.C], e.prototype, "m_eCuratorLanguage", void 0),
            Object(d.c)([m.C], e.prototype, "m_mapURLToPosted", void 0),
            e
          );
        })(),
        L = (function () {
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
                Object(P.a)(
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
                  ((e.s_CuratorAdminStore = new e()).Init(),
                  "dev" === p.d.WEB_UNIVERSE &&
                    (window.g_CuratorAdminStore = e.s_CuratorAdminStore)),
                e.s_CuratorAdminStore
              );
            }),
            (e.prototype.Init = function () {
              var e = Object(p.g)("curatoradmin", "application_config");
              this.ValidateStoreDefault(e) &&
                ((this.m_defaultAdmin = new F(e)),
                this.m_mapClanAccountToAdmin.set(
                  e.clanid,
                  this.m_defaultAdmin
                )),
                this.ValidateWebAPI(e) &&
                  (this.m_transport = new a.a(
                    p.d.WEBAPI_BASE_URL,
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
              return p.j.logged_in;
            }),
            (e.prototype.BHavePendingInfoRequests = function () {
              return (
                0 < this.m_setPendingClanInfo.size ||
                0 < this.m_cClanInfoRequestsInFlight
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
            (e.prototype.QueueCuratorAdminInfoLoad = function (n) {
              return Object(d.b)(this, void 0, void 0, function () {
                var t = this;
                return Object(d.e)(this, function (e) {
                  return n
                    ? this.m_mapClanAccountToAdmin.has(n)
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
                        this.m_setPendingClanInfo.add(n),
                        [2, this.m_PendingClanInfoPromise])
                    : (Object(P.a)(
                        !n,
                        "unexpected clanid of zero or undefined: " + n
                      ),
                      [2, Promise.resolve()]);
                });
              });
            }),
            (e.prototype.FlushPendingClanInfo = function () {
              return Object(d.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(d.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.m_PendingClanInfoResolve),
                        (n = Array.from(this.m_setPendingClanInfo)),
                        (this.m_PendingClanInfoPromise = void 0),
                        (this.m_PendingClanInfoResolve = void 0),
                        this.m_setPendingClanInfo.clear(),
                        [4, this.LoadBatchedClanRSSAdminInfo(n)]
                      );
                    case 1:
                      return e.sent(), t(), [2];
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
                0 < n.length && this.m_PendingClanInfoPromise
                  ? this.m_PendingClanInfoPromise
                  : Promise.resolve()
              );
            }),
            (e.prototype.LoadBatchedClanRSSAdminInfo = function (l) {
              return Object(d.b)(this, void 0, void 0, function () {
                var s,
                  t,
                  c = this;
                return Object(d.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      this.m_cClanInfoRequestsInFlight++,
                        (s = l.filter(function (e) {
                          return !c.m_mapClanAccountToAdmin.has(e);
                        })),
                        (t = function () {
                          var t, n, r, a, i, o;
                          return Object(d.e)(this, function (e) {
                            switch (e.label) {
                              case 0:
                                (t = Math.min(50, s.length)),
                                  s.slice(0, t),
                                  (s = s.slice(t)),
                                  (e.label = 1);
                              case 1:
                                return (
                                  e.trys.push([1, 3, , 4]),
                                  (n =
                                    p.d.STORE_BASE_URL +
                                    "events_admin/ajaxgetrssadmininfo"),
                                  (r = { clanids: l }),
                                  [
                                    4,
                                    u.a.get(n, {
                                      params: r,
                                      withCredentials: !0,
                                    }),
                                  ]
                                );
                              case 2:
                                return (
                                  (a = e.sent()) &&
                                  a.data &&
                                  1 == a.data.success &&
                                  a.data.rss_admin_infos &&
                                  Array.isArray(a.data.rss_admin_infos)
                                    ? Object(m.G)(function () {
                                        a.data.rss_admin_infos.forEach(
                                          function (e) {
                                            c.m_mapClanAccountToAdmin.set(
                                              e.clanid,
                                              new F(e)
                                            );
                                          }
                                        ),
                                          a.data.rss_event_stats.forEach(
                                            function (e) {
                                              c.m_mapClanToEventRSSStats.set(
                                                e.clan_account_id,
                                                e
                                              );
                                            }
                                          );
                                      })
                                    : ((o = Object(M.a)(a.data || {})),
                                      console.error(
                                        "LoadBatchedClanRSSAdminInfo error:" +
                                          o.strErrorMsg,
                                        o
                                      )),
                                  [3, 4]
                                );
                              case 3:
                                return (
                                  (i = e.sent()),
                                  (o = Object(M.a)(i)),
                                  console.error(
                                    "LoadBatchedClanRSSAdminInfo catched error:" +
                                      o.strErrorMsg,
                                    o
                                  ),
                                  [3, 4]
                                );
                              case 4:
                                return [2];
                            }
                          });
                        }),
                        (e.label = 1);
                    case 1:
                      return 0 < s.length ? [5, t()] : [3, 3];
                    case 2:
                      return e.sent(), [3, 1];
                    case 3:
                      return this.m_cClanInfoRequestsInFlight--, [2];
                  }
                });
              });
            }),
            Object(d.c)(
              [m.C.shallow],
              e.prototype,
              "m_mapClanAccountToAdmin",
              void 0
            ),
            Object(d.c)(
              [m.C.shallow],
              e.prototype,
              "m_mapClanToEventRSSStats",
              void 0
            ),
            e
          );
        })();
      t.a = L;
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
      var c = n("mrSG"),
        r = n("vDqi"),
        l = n.n(r),
        a = n("2l+k"),
        m = n("lkRc"),
        i = n("kLLr"),
        p = (function () {
          function e() {
            this.m_mapClanToRecommendation = new Map();
          }
          return (
            (e.Get = function () {
              return (
                e.s_CuratorStore ||
                  ((e.s_CuratorStore = new e()).Init(),
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
              var n = i.a.InitFromClanID(e);
              return Boolean(this.GetReviewForApp(n, t));
            }),
            (e.prototype.LoadAppRecommendation = function (o, s) {
              return Object(c.b)(this, void 0, void 0, function () {
                var t, n, r, a, i;
                return Object(c.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (this.m_mapClanToRecommendation.has(
                        o.GetAccountID()
                      ) ||
                        this.m_mapClanToRecommendation.set(
                          o.GetAccountID(),
                          new Map()
                        ),
                      (t = this.m_mapClanToRecommendation.get(
                        o.GetAccountID()
                      )),
                      (n = []),
                      s.forEach(function (e) {
                        t.has(e) || n.push(e);
                      }),
                      0 < n.length)
                        ? ((r =
                            m.d.STORE_BASE_URL +
                            "curator/" +
                            o.GetAccountID() +
                            "/admin/ajaxgetrecbyapps"),
                          [
                            4,
                            l.a.get(r, {
                              params: {
                                appids: n,
                                cc: m.d.COUNTRY || "US",
                                l: m.d.LANGUAGE,
                              },
                            }),
                          ])
                        : [3, 2];
                    case 1:
                      (a = e.sent()),
                        (i = a && a.data) &&
                          i.rec_app &&
                          i.rec_app.forEach(function (e) {
                            t.set(Number(e.appid), e);
                          }),
                        (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            e
          );
        })(),
        o = n("TyAF"),
        s = n("q1tI"),
        _ = n.n(s),
        d = n("mgoM"),
        u = n("3+zv"),
        f = n("6oCP"),
        b = n("Mgs7"),
        h = n("T27q"),
        v = n("fpVW"),
        S = n.n(v),
        g = n("r+ba"),
        w = n("Jqb/"),
        R = n("ka0M"),
        O = n("0OaU"),
        E = n("+d9t"),
        C = n("exH9"),
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
        U = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                strRssURL: a.a.Get().GetDefaultAdmin().GetRSSUrl(),
              }),
              (e.m_Admin = a.a.Get().GetDefaultAdmin()),
              e
            );
          }
          return (
            Object(c.d)(e, t),
            (e.prototype.OnChangeActualRSSURL = function (e) {
              this.setState({ strRssURL: e.target.value });
            }),
            (e.prototype.OnCreateOrSaveFeed = function (e) {
              e.preventDefault(),
                Object(R.d)(
                  _.a.createElement(z, {
                    strRSSUrl: this.state.strRssURL,
                    admin: this.m_Admin,
                  }),
                  Object(y.m)(e)
                );
            }),
            (e.prototype.OnRevert = function (e) {
              e.preventDefault(),
                this.setState({ strRssURL: this.m_Admin.GetRSSUrl() });
            }),
            (e.prototype.render = function () {
              var e = Boolean(
                this.state.strRssURL === this.m_Admin.GetRSSUrl()
              );
              if (void 0 !== window.Prototype)
                return window.location.reload(), null;
              var t = Object(d.f)(
                  Object(d.d)(this.m_Admin.GetFeedLanguageHandleUnset())
                ),
                n = a.a.Get().GetDefaultAdmin();
              return _.a.createElement(
                "div",
                { className: Object(C.a)(M.Ctn) },
                _.a.createElement(
                  "div",
                  { className: "titleframe" },
                  _.a.createElement(
                    "h4",
                    null,
                    Object(B.f)("#CuratorAdmin_RSSFeed_title")
                  ),
                  _.a.createElement(
                    "p",
                    { className: "subtitle" },
                    Object(B.f)("#CuratorAdmin_RSSFeed_desc")
                  ),
                  _.a.createElement(
                    "p",
                    null,
                    Object(B.n)(
                      "#CuratorAdmin_RSSFeed_doc_link",
                      _.a.createElement(
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
                  _.a.createElement(
                    "p",
                    { className: M.DashboardBtn },
                    _.a.createElement(
                      E.a,
                      {
                        href:
                          m.d.COMMUNITY_BASE_URL +
                          "gid/" +
                          this.m_Admin.GetClanSteamID().ConvertTo64BitString() +
                          "/partnerevents/",
                        className: Object(C.a)(S.a.Button, S.a.Primary),
                      },
                      Object(B.f)("#RSSManager_EventDashBoard")
                    )
                  )
                ),
                _.a.createElement(
                  "div",
                  { className: "darkframe" },
                  _.a.createElement(
                    "div",
                    { className: M.LanguageRow },
                    _.a.createElement(
                      "span",
                      { className: M.LanguageTitle },
                      Object(B.f)("#CuratorAdmin_RSSFeed_lang_only")
                    ),
                    _.a.createElement("span", { className: M.LanguageSet }, t),
                    _.a.createElement(
                      "a",
                      {
                        href:
                          m.d.COMMUNITY_BASE_URL +
                          "gid/" +
                          this.m_Admin.GetClanSteamID().ConvertTo64BitString() +
                          "/edit ",
                        target: "_blank",
                        className: Object(C.a)(S.a.Button, M.PreviewBtn),
                      },
                      Object(B.f)("#CuratorAdmin_RSSFeed_edit_language")
                    )
                  ),
                  Boolean(
                    this.m_Admin.GetFeedLanguageHandleUnset() !=
                      this.m_Admin.GetCuratorLanguage()
                  ) &&
                    _.a.createElement(
                      "div",
                      {
                        className: Object(C.a)(
                          M.LanguageRow,
                          A.a.WarningIconLayout
                        ),
                      },
                      _.a.createElement(
                        "span",
                        { className: M.LanguageTitle },
                        Object(B.f)(
                          "#CuratorAdmin_Curator_lang_only",
                          Object(B.f)(
                            "#Language_" +
                              Object(d.d)(this.m_Admin.GetCuratorLanguage())
                          ),
                          t
                        )
                      )
                    ),
                  _.a.createElement(
                    "div",
                    {
                      className: Object(C.a)(
                        S.a.FlexRowContainer,
                        M.UrlSettingCtn
                      ),
                    },
                    _.a.createElement(b.k, {
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
                    _.a.createElement(
                      "a",
                      {
                        className: "btn_green_white_innerfade btn_medium",
                        onClick: this.OnCreateOrSaveFeed,
                      },
                      _.a.createElement(
                        "span",
                        null,
                        Object(B.f)(e ? "#Button_Saved" : "#Button_Save")
                      )
                    ),
                    !e &&
                      _.a.createElement(
                        "a",
                        {
                          onClick: this.OnRevert,
                          className: "btn_grey_white_innerfade btn_medium",
                        },
                        Object(B.f)("#Button_Revert")
                      )
                  ),
                  _.a.createElement(T, { admin: n }),
                  _.a.createElement("br", null),
                  _.a.createElement(G, {
                    strRssURL: this.state.strRssURL,
                    admin: n,
                  })
                )
              );
            }),
            Object(c.c)([P.a], e.prototype, "OnChangeActualRSSURL", null),
            Object(c.c)([P.a], e.prototype, "OnCreateOrSaveFeed", null),
            Object(c.c)([P.a], e.prototype, "OnRevert", null),
            (e = Object(c.c)([o.a], e))
          );
        })(_.a.Component),
        G =
          ((t.b = U),
          (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.state = {
                  strParseRssURL: e.props.strRssURL,
                  bLoadingPreview: !1,
                }),
                (e.m_cancelSignal = l.a.CancelToken.source()),
                e
              );
            }
            return (
              Object(c.d)(e, t),
              (e.prototype.componentDidMount = function () {
                var e = this.props.admin;
                e.BHasFeedGID() &&
                  e.BHasSavedRSSURL() &&
                  e.GetRSSUrl() == this.props.strRssURL &&
                  this.OnLoadPreview();
              }),
              (e.prototype.componentWillUnmount = function () {
                this.m_cancelSignal.cancel(
                  "PreviewRSSViewAndControl component unmounted"
                );
              }),
              (e.prototype.RenderPreviews = function () {
                var t = this,
                  o = this.props.admin,
                  n = new Array();
                return (
                  this.state.previews &&
                    this.state.previews
                      .sort(function (e, t) {
                        var n = o.MapArticleURLToClanEventGID(e.post.url),
                          r = o.MapArticleURLToClanEventGID(t.post.url),
                          a = n ? f.c.GetClanEventModel(n) : null,
                          i = r ? f.c.GetClanEventModel(r) : null;
                        return a && i
                          ? i.postTime - a.postTime
                          : a
                          ? -1
                          : i
                          ? 1
                          : t.post.rtime_date - e.post.rtime_date;
                      })
                      .forEach(function (e) {
                        n.push(
                          _.a.createElement(N, {
                            newsData: e,
                            admin: o,
                            key: "id: " + e.unique_id,
                            clanSteamID: o.GetClanSteamID(),
                            fnGetRSSUrl: t.GetRSSPreviewURL,
                          })
                        );
                      }),
                  n
                );
              }),
              (e.prototype.GetRSSPreviewURL = function () {
                return this.state.strParseRssURL;
              }),
              (e.prototype.OnLoadPreview = function () {
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
              (e.prototype.DoLoadPreview = function () {
                return Object(c.b)(this, void 0, void 0, function () {
                  var a,
                    t,
                    i,
                    n = this;
                  return Object(c.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          (a = this.props
                            .admin).PreviewPartnerEventsFromRSSFeed(
                            this.props.strRssURL
                          ),
                        ];
                      case 1:
                        return (
                          (t = e.sent()) && 1 == t.GetEResult()
                            ? ((i = t.Body().toObject()),
                              this.setState(
                                {
                                  strParseRssURL: i.rss_url,
                                  bLoadingPreview: !0,
                                },
                                function () {
                                  return Object(c.b)(
                                    n,
                                    void 0,
                                    void 0,
                                    function () {
                                      var n, r, t;
                                      return Object(c.e)(this, function (e) {
                                        switch (e.label) {
                                          case 0:
                                            return [
                                              4,
                                              a.FetchPublishedEvents(
                                                Math.max(100, i.results.length)
                                              ),
                                            ];
                                          case 1:
                                            return (
                                              e.sent(),
                                              (n = new Array()),
                                              (r = new Array()),
                                              i.results.forEach(function (e) {
                                                var t = a.MapArticleURLToClanEventGID(
                                                  e.post.url
                                                );
                                                t && n.push(t),
                                                  e.post.appids &&
                                                    1 ===
                                                      e.post.appids.length &&
                                                    0 !==
                                                      e.post
                                                        .recommendation_state &&
                                                    r.push(e.post.appids[0]);
                                              }),
                                              0 < n.length
                                                ? [
                                                    4,
                                                    f.c.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                                                      n,
                                                      null,
                                                      this.m_cancelSignal
                                                    ),
                                                  ]
                                                : [3, 3]
                                            );
                                          case 2:
                                            e.sent(), (e.label = 3);
                                          case 3:
                                            return 0 < r.length
                                              ? ((t = a.GetClanSteamID()),
                                                [
                                                  4,
                                                  p
                                                    .Get()
                                                    .LoadAppRecommendation(
                                                      t,
                                                      r
                                                    ),
                                                ])
                                              : [3, 5];
                                          case 4:
                                            e.sent(), (e.label = 5);
                                          case 5:
                                            return (
                                              this.setState({
                                                previews: i.results,
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
              (e.prototype.render = function () {
                var e = this.RenderPreviews(),
                  t = this.props.admin;
                return _.a.createElement(
                  "div",
                  null,
                  Boolean(
                    !this.state.bLoadingPreview &&
                      this.state.strPreviewURL !== this.props.strRssURL
                  ) &&
                    _.a.createElement(
                      "div",
                      { className: M.PreviewListBtn },
                      _.a.createElement(
                        b.d,
                        {
                          disabled: !b.k.validateUrl(this.props.strRssURL),
                          onClick: this.OnLoadPreview,
                        },
                        Object(B.f)("#CuratorAdmin_RSSFeed_preview")
                      )
                    ),
                  this.state.bLoadingPreview &&
                    _.a.createElement(O.a, {
                      string: Object(B.f)("#Loading"),
                      size: "medium",
                      position: "center",
                    }),
                  this.state.strPreviewErrorMsg &&
                    _.a.createElement(
                      "div",
                      { className: S.a.ErrorMsg },
                      this.state.strPreviewErrorMsg
                    ),
                  Boolean(0 < e.length) &&
                    _.a.createElement(
                      "div",
                      null,
                      _.a.createElement(
                        "p",
                        null,
                        Object(B.f)(
                          "#RSSManager_PreviewInfo",
                          this.state.strPreviewURL
                        )
                      ),
                      _.a.createElement(
                        "div",
                        { className: M.PreviewListCtn },
                        e
                      ),
                      _.a.createElement(
                        "p",
                        { className: M.DashboardBtn },
                        _.a.createElement(
                          E.a,
                          {
                            href:
                              m.d.COMMUNITY_BASE_URL +
                              "gid/" +
                              t.GetClanSteamID().ConvertTo64BitString() +
                              "/partnerevents/",
                            className: Object(C.a)(S.a.Button, S.a.Primary),
                          },
                          Object(B.f)("#RSSManager_EventDashBoard")
                        )
                      )
                    )
                );
              }),
              Object(c.c)([P.a], e.prototype, "GetRSSPreviewURL", null),
              Object(c.c)([P.a], e.prototype, "OnLoadPreview", null),
              (e = Object(c.c)([o.a], e))
            );
          })(_.a.Component)),
        T = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), e;
          }
          return (
            Object(c.d)(e, t),
            (e.prototype.OnToggleChannelAutomation = function (e) {
              e
                ? (this.setState({ strErrorMessage: void 0 }),
                  Object(R.d)(
                    _.a.createElement(z, {
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
            (e.prototype.BDisableAutomation = function () {
              return Object(c.b)(this, void 0, void 0, function () {
                var t = this;
                return Object(c.e)(this, function (e) {
                  return (
                    this.props.admin
                      .UpdateAutomation(!1)
                      .catch(function () {
                        return t.setState({
                          strErrorMessage: Object(B.f)(
                            "#RSSManager_Status_Automation_DisableFailed"
                          ),
                        });
                      })
                      .finally(function () {
                        return t.setState({ strReasonWaiting: void 0 });
                      }),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.OnQueueScan = function (n) {
              return Object(c.b)(this, void 0, void 0, function () {
                var t = this;
                return Object(c.e)(this, function (e) {
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
                          _.a.createElement(w.c, {
                            strTitle: Object(B.f)(
                              "#CuratorAdmin_RSSFeed_scannow"
                            ),
                            strDescription: Object(B.f)(
                              "#CuratorAdmin_RSSFeed_queued"
                            ),
                          }),
                          Object(y.m)(n)
                        );
                      })
                      .catch(function (e) {
                        return Object(R.d)(
                          _.a.createElement(w.e, {
                            strTitle: Object(B.f)(
                              "#CuratorAdmin_RSSFeed_scannow"
                            ),
                            strDescription: Object(j.a)(e),
                          }),
                          Object(y.m)(n)
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
            (e.prototype.render = function () {
              return this.props.admin.BHasSavedRSSURL()
                ? _.a.createElement(
                    "div",
                    null,
                    Boolean(this.state.strReasonWaiting) &&
                      _.a.createElement(O.a, {
                        size: "medium",
                        string: this.state.strReasonWaiting,
                      }),
                    Boolean(this.state.strErrorMessage) &&
                      _.a.createElement(
                        "div",
                        { className: M.Error },
                        this.state.strErrorMessage
                      ),
                    _.a.createElement(b.o, {
                      onChange: this.OnToggleChannelAutomation,
                      label: Object(B.f)("#RSSManager_Status_Automation_Desc"),
                      checked: this.props.admin.BIsAutomationEnabled(),
                      description: "",
                    }),
                    this.props.admin.BIsAutomationEnabled() &&
                      _.a.createElement(
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
                        _.a.createElement(
                          "a",
                          { onClick: this.OnQueueScan },
                          _.a.createElement(
                            "span",
                            null,
                            Object(B.f)("#CuratorAdmin_RSSFeed_scannow")
                          )
                        )
                      )
                  )
                : null;
            }),
            Object(c.c)([P.a], e.prototype, "OnToggleChannelAutomation", null),
            Object(c.c)([P.a], e.prototype, "OnQueueScan", null),
            (e = Object(c.c)([o.a], e))
          );
        })(_.a.Component),
        N = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                clan_event_gid: e.props.admin.MapArticleURLToClanEventGID(
                  e.props.newsData.post.url
                ),
                bLoadingPartnerEvent: Boolean(
                  e.props.admin.MapArticleURLToClanEventGID(
                    e.props.newsData.post.url
                  )
                ),
              }),
              e
            );
          }
          return (
            Object(c.d)(e, t),
            (e.prototype.componentDidMount = function () {
              this.DoPartnerEventLoad();
            }),
            (e.prototype.DoPartnerEventLoad = function () {
              return Object(c.b)(this, void 0, void 0, function () {
                var t, n;
                return Object(c.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return this.state.clan_event_gid
                        ? ((t = this.props.admin.GetClanSteamID()),
                          (n = f.c.GetClanEventModel(this.state.clan_event_gid))
                            ? [3, 2]
                            : [
                                4,
                                f.c.LoadHiddenPartnerEvent(
                                  t,
                                  this.state.clan_event_gid
                                ),
                              ])
                        : [3, 3];
                    case 1:
                      (n = e.sent()), (e.label = 2);
                    case 2:
                      this.setState({
                        bLoadingPartnerEvent: !1,
                        existingEventModel: n,
                      }),
                        (e.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.OnOpenPreviewAsPartnerEvent = function (e) {
              var t = this.props,
                n = t.newsData,
                r = t.clanSteamID,
                a = new u.q();
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
                ((a.jsondata.localized_summary = Object(F.f)(
                  a.jsondata.localized_summary,
                  30,
                  null
                )),
                (a.jsondata.localized_summary[0] = n.post.event_summary),
                0 != i &&
                  (a.jsondata.localized_summary[i] = n.post.event_summary)),
                !a.jsondata.localized_subtitle &&
                  n.post.event_subtitle &&
                  ((a.jsondata.localized_subtitle = Object(F.f)(
                    a.jsondata.localized_subtitle,
                    30,
                    null
                  )),
                  (a.jsondata.localized_subtitle[0] = n.post.event_subtitle),
                  0 != i &&
                    (a.jsondata.localized_subtitle[i] = n.post.event_subtitle)),
                this.ShowModalEvent(a);
            }),
            (e.prototype.OnViewEvent = function () {
              this.ShowModalEvent(
                f.c.GetClanEventModel(this.state.clan_event_gid)
              );
            }),
            (e.prototype.ShowModalEvent = function (e) {
              var t = document.getElementById("curator_header_area_ctn_id");
              t &&
                (e
                  ? t.classList.add("curator_header_area_ctn_hideme")
                  : t.classList.remove("curator_header_area_ctn_hideme")),
                this.setState({ eventModelForPreviewNow: e });
            }),
            (e.prototype.ValidateJSONDefault = function (e) {
              var t = e;
              return !(!t || Array.isArray(t) || "object" != typeof t);
            }),
            (e.prototype.OnPostNewsEvent = function (e) {
              var t = this.props,
                n = t.newsData,
                r = t.fnGetRSSUrl;
              Object(R.d)(
                _.a.createElement(z, {
                  newsData: n,
                  admin: this.props.admin,
                  strRSSUrl: r(),
                  fnClanEventGID: this.OnClanEventCreateSuccess,
                }),
                Object(y.m)(e)
              );
            }),
            (e.prototype.OnUpdateNewsEvent = function (e) {
              var t = this.props,
                n = t.newsData,
                r = t.fnGetRSSUrl;
              Object(R.d)(
                _.a.createElement(z, {
                  newsData: n,
                  strRSSUrl: r(),
                  admin: this.props.admin,
                  fnClanEventGID: this.OnClanEventCreateSuccess,
                  bUpdatePost: !0,
                }),
                Object(y.m)(e)
              );
            }),
            (e.prototype.HideModalEvent = function () {
              this.state.eventModelForPreviewNow && this.ShowModalEvent(void 0);
            }),
            (e.prototype.OnClanEventCreateSuccess = function (e) {
              this.setState(
                { clan_event_gid: e, bLoadingPartnerEvent: !0 },
                this.DoPartnerEventLoad
              );
            }),
            (e.prototype.OnShowRawRSS = function (e) {
              var n = this.props.newsData.rss_message,
                t = (function () {
                  var e = n.match(/<entry[^>]*>([\s\S]*)<\/entry>/m);
                  if (!e) return n;
                  var t = e[1].match(/<content[^>]*>[\s\S]*<\/content>/m);
                  return t ? Object(L.b)(t[0]) : e[0];
                })();
              Object(R.d)(
                _.a.createElement(
                  w.c,
                  {
                    bAlertDialog: !0,
                    strTitle: Object(B.f)("#RSSManager_PostEvent_ViewRaw"),
                  },
                  _.a.createElement("textarea", {
                    className: M.RawRSS,
                    value: t,
                    disabled: !0,
                  })
                ),
                Object(y.m)(e)
              );
            }),
            (e.prototype.render = function () {
              var e,
                t = this.props.newsData,
                n = this.state,
                r = n.clan_event_gid,
                a = n.existingEventModel,
                i = n.bLoadingPartnerEvent,
                o = this.props.admin,
                s = o.GetClanSteamID(),
                c = a && a.BIsStagedEvent(),
                l =
                  t.post.appids &&
                  1 == t.post.appids.length &&
                  t.post.appids[0],
                d =
                  0 !== t.post.recommendation_state &&
                  l &&
                  p.Get().BHasReviewForApp(s, l),
                u = "";
              return (
                a &&
                  ((e =
                    a.GetVisibilityStartTimeAndDateUnixSeconds() ||
                    a.GetPostTimeAndDateUnixSeconds()),
                  (u = Object(B.o)(e) + " @ " + Object(B.m)(e))),
                _.a.createElement(
                  "div",
                  {
                    className: Object(C.a)(
                      M.PostCtn,
                      Boolean(r) ? M.ActivePost : "",
                      Boolean(t.valid_post) ? "" : M.ErrorPost
                    ),
                  },
                  _.a.createElement(
                    "span",
                    { className: M.PostTitle },
                    t.title
                  ),
                  _.a.createElement("br", null),
                  Boolean(a) &&
                    _.a.createElement(
                      _.a.Fragment,
                      null,
                      Boolean(a.BIsVisibleEvent()) &&
                        _.a.createElement(
                          "span",
                          { className: M.PostDate },
                          Object(B.f)("#RSSManager_PostEvent_PostedDate", u)
                        ),
                      Boolean(!a.BIsVisibleEvent()) &&
                        _.a.createElement(
                          "span",
                          {
                            className: Object(C.a)(
                              M.PostDraft,
                              c ? M.PostStaged : ""
                            ),
                          },
                          Object(B.f)(
                            c
                              ? "#RSSManager_PostEvent_Staged"
                              : "#RSSManager_PostEvent_Draft",
                            u
                          )
                        )
                    ),
                  Boolean(!t.valid_post && t.post_error_msg) &&
                    _.a.createElement(
                      "div",
                      { className: A.a.ErrorStylesBackground },
                      Object(B.f)("#Error_Generic_Label"),
                      " ",
                      Object(B.f)(t.post_error_msg)
                    ),
                  _.a.createElement(
                    "div",
                    { className: M.ButtonCtn },
                    Boolean(r)
                      ? _.a.createElement(
                          _.a.Fragment,
                          null,
                          Boolean(i)
                            ? _.a.createElement(O.a, {
                                string: Object(B.f)("#Loading"),
                                size: "small",
                                position: "center",
                              })
                            : _.a.createElement(
                                "div",
                                {
                                  onClick: this.OnViewEvent,
                                  className: Object(C.a)(
                                    S.a.Button,
                                    M.PreviewBtn
                                  ),
                                },
                                Object(B.f)("#RSSManager_PostEvent_ViewEvent")
                              ),
                          _.a.createElement(
                            "a",
                            {
                              className: Object(C.a)(S.a.Button, M.PreviewBtn),
                              href:
                                m.d.COMMUNITY_BASE_URL +
                                "gid/" +
                                o.GetClanSteamID().ConvertTo64BitString() +
                                "/partnerevents/edit/" +
                                this.state.clan_event_gid,
                            },
                            Object(B.f)("#RSSManager_PostEvent_EditEvent")
                          ),
                          _.a.createElement(
                            "div",
                            {
                              onClick: this.OnUpdateNewsEvent,
                              className: Object(C.a)(S.a.Button, M.PreviewBtn),
                            },
                            Object(B.f)("#RSSManager_PostEvent_UpdateEvent")
                          ),
                          d &&
                            _.a.createElement(
                              "a",
                              {
                                className: Object(C.a)(
                                  S.a.Button,
                                  M.PreviewBtn
                                ),
                                href: Object(I.e)(
                                  m.d.STORE_BASE_URL +
                                    "app/" +
                                    t.post.appids[0] +
                                    "/?curator_clanid=" +
                                    s.GetAccountID()
                                ),
                              },
                              Object(B.f)("#RSSManager_SeeReview")
                            )
                        )
                      : _.a.createElement(
                          _.a.Fragment,
                          null,
                          _.a.createElement(
                            "div",
                            {
                              onClick: this.OnOpenPreviewAsPartnerEvent,
                              className: Object(C.a)(S.a.Button, M.PreviewBtn),
                            },
                            Object(B.f)(
                              "#CuratorAdmin_RSSFeed_col_preview_event"
                            )
                          ),
                          _.a.createElement(
                            "div",
                            {
                              onClick: this.OnPostNewsEvent,
                              className: Object(C.a)(S.a.Button, M.PreviewBtn),
                            },
                            Object(B.f)(
                              "#CuratorAdmin_RSSFeed_col_create_event"
                            )
                          )
                        ),
                    Boolean(t.rss_message && 0 < t.rss_message.length) &&
                      _.a.createElement(
                        "div",
                        { onClick: this.OnShowRawRSS, className: M.ViewRaw },
                        Object(B.f)("#RSSManager_PostEvent_ViewRaw")
                      ),
                    Boolean(this.state.eventModelForPreviewNow) &&
                      _.a.createElement(
                        w.h,
                        { className: g.StoreHeaderAdjust },
                        _.a.createElement(
                          "div",
                          null,
                          _.a.createElement(h.b, {
                            event: this.state.eventModelForPreviewNow,
                            fnClose: this.HideModalEvent,
                          })
                        )
                      )
                  )
                )
              );
            }),
            Object(c.c)([P.a], e.prototype, "DoPartnerEventLoad", null),
            Object(c.c)(
              [P.a],
              e.prototype,
              "OnOpenPreviewAsPartnerEvent",
              null
            ),
            Object(c.c)([P.a], e.prototype, "OnViewEvent", null),
            Object(c.c)([P.a], e.prototype, "OnPostNewsEvent", null),
            Object(c.c)([P.a], e.prototype, "OnUpdateNewsEvent", null),
            Object(c.c)([P.a], e.prototype, "HideModalEvent", null),
            Object(c.c)([P.a], e.prototype, "OnClanEventCreateSuccess", null),
            Object(c.c)([P.a], e.prototype, "OnShowRawRSS", null),
            (e = Object(c.c)([o.a], e))
          );
        })(_.a.Component),
        z = (function (t) {
          function n() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                initialState: n.DetermineStartState(e.props),
                step: n.DetermineStartState(e.props),
                bDraftMode: !0,
              }),
              e
            );
          }
          return (
            Object(c.d)(n, t),
            (n.DetermineStartState = function (e) {
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
            (n.prototype.OnCreateNewsFeed = function () {
              this.setState({ step: "creating_feed" }, this.DoCreateNewsFeed);
            }),
            (n.prototype.DoCreateNewsFeed = function () {
              return Object(c.b)(this, void 0, void 0, function () {
                var t;
                return Object(c.e)(this, function (e) {
                  switch (e.label) {
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
                        1 != (t = e.sent()).success
                          ? this.setState({
                              step: "failure",
                              eResult: t.success,
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
            (n.prototype.OnCreatePost = function () {
              this.setState({ step: "waiting_post" }, this.DoCreatePost);
            }),
            (n.prototype.DoCreatePost = function () {
              return Object(c.b)(this, void 0, void 0, function () {
                var t;
                return Object(c.e)(this, function (e) {
                  switch (e.label) {
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
                        1 != (t = e.sent()).GetEResult()
                          ? this.setState({
                              step: "failure",
                              eResult: t.GetEResult(),
                              strErrorMessage: Object(B.f)(
                                "#RSSManager_PostEvent_Failure"
                              ),
                            })
                          : (this.props.fnClanEventGID &&
                              this.props.fnClanEventGID(
                                t.Body().clan_event_gid()
                              ),
                            this.setState({
                              step: "success",
                              eventGID: t.Body().clan_event_gid(),
                            })),
                        [2]
                      );
                  }
                });
              });
            }),
            (n.prototype.OnChangeDraftMode = function (e) {
              this.setState({ bDraftMode: e });
            }),
            (n.prototype.OnChangePermissionsCreateFeed = function (e) {
              this.setState({ bPermissions: e });
            }),
            (n.prototype.OnChangeConductCreateFeed = function (e) {
              this.setState({ bConduct: e });
            }),
            (n.prototype.GetStrTitle = function () {
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
            (n.prototype.render = function () {
              var e = this.props.strRSSUrl;
              switch (this.state.step) {
                case "feed_missing":
                case "activate_feed":
                case "update_feed":
                default:
                  return _.a.createElement(
                    w.d,
                    null,
                    _.a.createElement(b.j, null, " ", this.GetStrTitle(), " "),
                    _.a.createElement(
                      b.b,
                      null,
                      _.a.createElement(
                        b.c,
                        null,
                        this.props.newsData &&
                          _.a.createElement(
                            "div",
                            null,
                            Object(B.f)(
                              "#RSSManager_PostEvent_CreateFeed_DuringPost"
                            )
                          ),
                        Boolean("activate_feed" !== this.state.step) &&
                          _.a.createElement(
                            "div",
                            null,
                            Object(B.f)(
                              "#RSSManager_PostEvent_CreateFeed_Desc",
                              e
                            )
                          ),
                        _.a.createElement(
                          "div",
                          null,
                          Object(B.f)("#RSSManager_CreateFeed_Review")
                        ),
                        _.a.createElement(
                          "div",
                          null,
                          _.a.createElement(b.e, {
                            label: Object(B.f)(
                              "#RSSManager_CreateFeed_Permissions_v1"
                            ),
                            onChange: this.OnChangePermissionsCreateFeed,
                            checked: Boolean(this.state.bPermissions),
                          })
                        ),
                        _.a.createElement(
                          "div",
                          null,
                          _.a.createElement(b.e, {
                            label: Object(B.f)(
                              "#RSSManager_CreateFeed_Conduct_v1"
                            ),
                            onChange: this.OnChangeConductCreateFeed,
                            checked: Boolean(this.state.bConduct),
                          }),
                          _.a.createElement(
                            E.a,
                            { href: m.d.STORE_BASE_URL + "online_conduct/" },
                            Object(B.f)("#RSSManager_CreateFeed_Conduct_Link")
                          )
                        )
                      ),
                      _.a.createElement(
                        b.i,
                        null,
                        _.a.createElement(b.m, {
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
                  return _.a.createElement(
                    w.e,
                    {
                      strDescription: Object(B.f)(
                        "#RSSManager_PostEvent_Failure"
                      ),
                      closeModal: this.props.closeModal,
                    },
                    _.a.createElement(
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
                  return _.a.createElement(
                    w.c,
                    {
                      strTitle: this.GetStrTitle(),
                      strDescription: Object(B.f)(
                        "#RSSManager_PostEvent_InFlight"
                      ),
                      closeModal: this.props.closeModal,
                    },
                    _.a.createElement(O.a, { position: "center" })
                  );
                case "create_post":
                  return _.a.createElement(
                    w.d,
                    null,
                    _.a.createElement(b.j, null, " ", this.GetStrTitle(), " "),
                    _.a.createElement(
                      b.b,
                      null,
                      _.a.createElement(
                        b.c,
                        null,
                        _.a.createElement(
                          "div",
                          null,
                          _.a.createElement(
                            "div",
                            null,
                            Object(B.f)("#RSSManager_PostEvent_CreatePost")
                          ),
                          _.a.createElement(
                            "div",
                            { className: M.DialogPostTitle },
                            this.props.newsData.title
                          ),
                          _.a.createElement("br", null),
                          _.a.createElement(
                            "div",
                            null,
                            _.a.createElement(b.e, {
                              label: Object(B.f)(
                                "#RSSManager_PostEvent_CreatePost_Draft"
                              ),
                              onChange: this.OnChangeDraftMode,
                              checked: Boolean(this.state.bDraftMode),
                            })
                          )
                        )
                      ),
                      _.a.createElement(
                        b.i,
                        null,
                        _.a.createElement(b.m, {
                          onOK: this.OnCreatePost,
                          onCancel: this.props.closeModal,
                        })
                      )
                    )
                  );
                case "update_post":
                  return _.a.createElement(
                    w.d,
                    null,
                    _.a.createElement(b.j, null, " ", this.GetStrTitle(), " "),
                    _.a.createElement(
                      b.b,
                      null,
                      _.a.createElement(
                        b.c,
                        null,
                        _.a.createElement(
                          "div",
                          null,
                          _.a.createElement(
                            "div",
                            null,
                            Object(B.f)("#RSSManager_PostEvent_UpdatePost")
                          ),
                          _.a.createElement("br", null),
                          _.a.createElement(
                            "div",
                            { className: M.DialogPostTitle },
                            this.props.newsData.title
                          ),
                          _.a.createElement("br", null)
                        )
                      ),
                      _.a.createElement(
                        b.i,
                        null,
                        _.a.createElement(b.m, {
                          onOK: this.OnCreatePost,
                          onCancel: this.props.closeModal,
                        })
                      )
                    )
                  );
                case "success":
                  return _.a.createElement(
                    w.c,
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
                      _.a.createElement(
                        "a",
                        {
                          href:
                            m.d.COMMUNITY_BASE_URL +
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
            Object(c.c)([P.a], n.prototype, "OnCreateNewsFeed", null),
            Object(c.c)([P.a], n.prototype, "DoCreateNewsFeed", null),
            Object(c.c)([P.a], n.prototype, "OnCreatePost", null),
            Object(c.c)([P.a], n.prototype, "DoCreatePost", null),
            Object(c.c)([P.a], n.prototype, "OnChangeDraftMode", null),
            Object(c.c)(
              [P.a],
              n.prototype,
              "OnChangePermissionsCreateFeed",
              null
            ),
            Object(c.c)([P.a], n.prototype, "OnChangeConductCreateFeed", null),
            Object(c.c)([P.a], n.prototype, "GetStrTitle", null),
            n
          );
        })(_.a.Component);
    },
  },
]);
