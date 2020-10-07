/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    "3rT3": function(e, t, n) {
      "use strict";
      n.r(t);
      var c = n("mrSG"),
        r = n("q1tI"),
        u = n.n(r),
        a = n("Ty5D"),
        i = n("r64O"),
        o = n("vDqi"),
        l = n.n(o),
        s = n("2vnA"),
        d = n("lkRc"),
        m = n("WBba"),
        p = n("bxBv"),
        _ = n("hRO2"),
        b = n("OS8t"),
        f = _.Message;
      var v,
        h,
        S = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.gid || b.a(r.M()),
              f.initialize(t, e, 0, -1, [5], null),
              t
            );
          }
          return (
            Object(c.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      gid: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String
                      },
                      name: { n: 2, br: b.d.readString, bw: b.h.writeString },
                      type: {
                        n: 3,
                        d: 0,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32
                      },
                      url: { n: 4, br: b.d.readString, bw: b.h.writeString },
                      associated_apps: {
                        n: 5,
                        r: !0,
                        q: !0,
                        br: b.d.readUint32,
                        bw: b.h.writeRepeatedUint32
                      },
                      poll_interval: {
                        n: 6,
                        d: 300,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32
                      },
                      kv_description: {
                        n: 7,
                        br: b.d.readString,
                        bw: b.h.writeString
                      },
                      kv_filter: {
                        n: 8,
                        br: b.d.readString,
                        bw: b.h.writeString
                      },
                      publish_to_clan_account_id: {
                        n: 9,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32
                      },
                      language: {
                        n: 10,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32
                      },
                      last_error: {
                        n: 11,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32
                      },
                      last_update: {
                        n: 12,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32
                      },
                      last_checked: {
                        n: 13,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32
                      }
                    }
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function() {
              return r.sm_mbf || (r.sm_mbf = b.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return b.g(r.M(), e, t);
            }),
            (r.fromObject = function(e) {
              return b.c(r.M(), e);
            }),
            (r.deserializeBinary = function(e) {
              var t = new _.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return b.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new _.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              b.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CNewsFeedDef";
            }),
            r
          );
        })(f),
        g = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.gid || b.a(r.M()),
              f.initialize(t, e, 0, -1, [11], null),
              t
            );
          }
          return (
            Object(c.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      gid: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String
                      },
                      news_feed_gid: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String
                      },
                      title: { n: 3, br: b.d.readString, bw: b.h.writeString },
                      url: { n: 4, br: b.d.readString, bw: b.h.writeString },
                      author: { n: 5, br: b.d.readString, bw: b.h.writeString },
                      rtime_date: {
                        n: 6,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32
                      },
                      contents: {
                        n: 7,
                        br: b.d.readString,
                        bw: b.h.writeString
                      },
                      commited: { n: 8, br: b.d.readBool, bw: b.h.writeBool },
                      deleted: { n: 9, br: b.d.readBool, bw: b.h.writeBool },
                      tags: { n: 10, br: b.d.readString, bw: b.h.writeString },
                      appids: {
                        n: 11,
                        r: !0,
                        q: !0,
                        br: b.d.readUint32,
                        bw: b.h.writeRepeatedUint32
                      },
                      recommendation_state: {
                        n: 12,
                        br: b.d.readEnum,
                        bw: b.h.writeEnum
                      },
                      received_compensation: {
                        n: 13,
                        br: b.d.readBool,
                        bw: b.h.writeBool
                      },
                      received_for_free: {
                        n: 14,
                        br: b.d.readBool,
                        bw: b.h.writeBool
                      },
                      blurb: { n: 15, br: b.d.readString, bw: b.h.writeString },
                      event_subtitle: {
                        n: 16,
                        br: b.d.readString,
                        bw: b.h.writeString
                      },
                      event_summary: {
                        n: 17,
                        br: b.d.readString,
                        bw: b.h.writeString
                      }
                    }
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function() {
              return r.sm_mbf || (r.sm_mbf = b.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return b.g(r.M(), e, t);
            }),
            (r.fromObject = function(e) {
              return b.c(r.M(), e);
            }),
            (r.deserializeBinary = function(e) {
              var t = new _.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return b.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new _.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              b.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CNewsFeedPostDef";
            }),
            r
          );
        })(f),
        w = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.converted_content || b.a(r.M()),
              f.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(c.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      converted_content: {
                        n: 1,
                        br: b.d.readString,
                        bw: b.h.writeString
                      },
                      found_html: { n: 2, br: b.d.readBool, bw: b.h.writeBool }
                    }
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function() {
              return r.sm_mbf || (r.sm_mbf = b.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return b.g(r.M(), e, t);
            }),
            (r.fromObject = function(e) {
              return b.c(r.M(), e);
            }),
            (r.deserializeBinary = function(e) {
              var t = new _.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return b.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new _.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              b.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_ConvertHTMLToBBCode_Response";
            }),
            r
          );
        })(f),
        R = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.rss_message || b.a(r.M()),
              f.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(c.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      rss_message: {
                        n: 1,
                        br: b.d.readString,
                        bw: b.h.writeString
                      },
                      unique_id: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString
                      },
                      title: { n: 3, br: b.d.readString, bw: b.h.writeString },
                      desc: { n: 4, br: b.d.readString, bw: b.h.writeString },
                      jsondata: {
                        n: 5,
                        br: b.d.readString,
                        bw: b.h.writeString
                      },
                      post: { n: 6, c: g }
                    }
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function() {
              return r.sm_mbf || (r.sm_mbf = b.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return b.g(r.M(), e, t);
            }),
            (r.fromObject = function(e) {
              return b.c(r.M(), e);
            }),
            (r.deserializeBinary = function(e) {
              var t = new _.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return b.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new _.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              b.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CNewsPartnerEventPreview";
            }),
            r
          );
        })(f),
        O = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.rss_url || b.a(r.M()),
              f.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(c.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      rss_url: {
                        n: 1,
                        br: b.d.readString,
                        bw: b.h.writeString
                      },
                      lang: { n: 2, br: b.d.readUint32, bw: b.h.writeUint32 }
                    }
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function() {
              return r.sm_mbf || (r.sm_mbf = b.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return b.g(r.M(), e, t);
            }),
            (r.fromObject = function(e) {
              return b.c(r.M(), e);
            }),
            (r.deserializeBinary = function(e) {
              var t = new _.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return b.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new _.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              b.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_PreviewPartnerEvents_Request";
            }),
            r
          );
        })(f),
        y = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.rss_url || b.a(r.M()),
              f.initialize(t, e, 0, -1, [2], null),
              t
            );
          }
          return (
            Object(c.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      rss_url: {
                        n: 1,
                        br: b.d.readString,
                        bw: b.h.writeString
                      },
                      results: { n: 2, c: R, r: !0, q: !0 },
                      error_msg: {
                        n: 3,
                        br: b.d.readString,
                        bw: b.h.writeString
                      }
                    }
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function() {
              return r.sm_mbf || (r.sm_mbf = b.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return b.g(r.M(), e, t);
            }),
            (r.fromObject = function(e) {
              return b.c(r.M(), e);
            }),
            (r.deserializeBinary = function(e) {
              var t = new _.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return b.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new _.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              b.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_PreviewPartnerEvents_Response";
            }),
            r
          );
        })(f),
        E = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.feeds || b.a(r.M()),
              f.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(c.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: { feeds: { n: 1, c: S, r: !0, q: !0 } }
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function() {
              return r.sm_mbf || (r.sm_mbf = b.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return b.g(r.M(), e, t);
            }),
            (r.fromObject = function(e) {
              return b.c(r.M(), e);
            }),
            (r.deserializeBinary = function(e) {
              var t = new _.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return b.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new _.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              b.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_GetNewsFeedByRepublishClan_Response";
            }),
            r
          );
        })(f),
        B = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.post || b.a(r.M()),
              f.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(c.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      post: { n: 1, c: g },
                      draft: { n: 2, br: b.d.readBool, bw: b.h.writeBool }
                    }
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function() {
              return r.sm_mbf || (r.sm_mbf = b.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return b.g(r.M(), e, t);
            }),
            (r.fromObject = function(e) {
              return b.c(r.M(), e);
            }),
            (r.deserializeBinary = function(e) {
              var t = new _.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return b.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new _.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              b.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_PublishPartnerEvent_Request";
            }),
            r
          );
        })(f),
        j = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.clan_event_gid || b.a(r.M()),
              f.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(c.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      clan_event_gid: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String
                      },
                      news_post_gid: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String
                      }
                    }
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function() {
              return r.sm_mbf || (r.sm_mbf = b.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return b.g(r.M(), e, t);
            }),
            (r.fromObject = function(e) {
              return b.c(r.M(), e);
            }),
            (r.deserializeBinary = function(e) {
              var t = new _.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return b.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new _.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              b.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_PublishPartnerEvent_Response";
            }),
            r
          );
        })(f),
        C = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.news_feed_gid || b.a(r.M()),
              f.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(c.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      news_feed_gid: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String
                      },
                      start_index: {
                        n: 2,
                        d: 0,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32
                      },
                      amount: {
                        n: 3,
                        d: 100,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32
                      }
                    }
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function() {
              return r.sm_mbf || (r.sm_mbf = b.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return b.g(r.M(), e, t);
            }),
            (r.fromObject = function(e) {
              return b.c(r.M(), e);
            }),
            (r.deserializeBinary = function(e) {
              var t = new _.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return b.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new _.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              b.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_GetBatchPublishedPartnerEvent_Request";
            }),
            r
          );
        })(f),
        P = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return (
              r.prototype.clan_account_id || b.a(r.M()),
              f.initialize(t, e, 0, -1, [3, 4, 5], null),
              t
            );
          }
          return (
            Object(c.d)(r, n),
            (r.M = function() {
              return (
                r.sm_m ||
                  (r.sm_m = {
                    proto: r,
                    fields: {
                      clan_account_id: {
                        n: 1,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32
                      },
                      news_feed_gid: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String
                      },
                      clan_event_gid: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: b.d.readFixed64String,
                        bw: b.h.writeRepeatedFixed64String
                      },
                      news_post_gid: {
                        n: 4,
                        r: !0,
                        q: !0,
                        br: b.d.readFixed64String,
                        bw: b.h.writeRepeatedFixed64String
                      },
                      news_url: {
                        n: 5,
                        r: !0,
                        q: !0,
                        br: b.d.readString,
                        bw: b.h.writeRepeatedString
                      }
                    }
                  }),
                r.sm_m
              );
            }),
            (r.MBF = function() {
              return r.sm_mbf || (r.sm_mbf = b.e(r.M())), r.sm_mbf;
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              return b.g(r.M(), e, t);
            }),
            (r.fromObject = function(e) {
              return b.c(r.M(), e);
            }),
            (r.deserializeBinary = function(e) {
              var t = new _.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              return b.b(r.MBF(), e, t);
            }),
            (r.prototype.serializeBinary = function() {
              var e = new _.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              b.f(r.M(), e, t);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_GetBatchPublishedPartnerEvent_Response";
            }),
            r
          );
        })(f);
      ((h = v = v || {}).ConvertHTMLToBBCode = function(e, t) {
        return e.SendMsg("News.ConvertHTMLToBBCode#1", t, w, {
          bConstMethod: !0,
          ePrivilege: 0,
          eWebAPIKeyRequirement: 1
        });
      }),
        (h.PreviewPartnerEvents = function(e, t) {
          return e.SendMsg("News.PreviewPartnerEvents#1", t, y, {
            bConstMethod: !0,
            ePrivilege: 1
          });
        }),
        (h.GetNewsFeedByRepublishClan = function(e, t) {
          return e.SendMsg("News.GetNewsFeedByRepublishClan#1", t, E, {
            bConstMethod: !0,
            ePrivilege: 1
          });
        }),
        (h.PublishPartnerEvent = function(e, t) {
          return e.SendMsg("News.PublishPartnerEvent#1", t, j, {
            ePrivilege: 1
          });
        }),
        (h.GetBatchPublishedPartnerEvent = function(e, t) {
          return e.SendMsg("News.GetBatchPublishedPartnerEvent#1", t, P, {
            bConstMethod: !0,
            ePrivilege: 1
          });
        });
      var M = n("kLLr"),
        F = n("6oCP"),
        D = n("NtSG"),
        L = (function() {
          function e() {
            this.m_mapURLToPosted = new Map();
          }
          return (
            (e.Get = function() {
              return (
                e.s_CuratorAdminStore ||
                  ((e.s_CuratorAdminStore = new e()).Init(),
                  (window.g_CuratorAdminStore = e.s_CuratorAdminStore)),
                e.s_CuratorAdminStore
              );
            }),
            (e.prototype.Init = function() {
              var e = this,
                t = Object(d.f)("curatoradmin", "application_config");
              this.ValidateStoreDefault(t)
                ? ((this.m_transport = new m.a(
                    d.c.WEBAPI_BASE_URL,
                    t.webapi_token
                  ).GetServiceTransport()),
                  (this.m_clanAccountID = t.clanid),
                  (this.m_clanSteamID = M.a.InitFromClanID(
                    this.m_clanAccountID
                  )),
                  Object(s.G)(function() {
                    (e.m_strRSSFeedURL = t.rss_feed_url),
                      (e.m_strRSSGID = t.rss_feed_gid),
                      (e.m_eRSSFeedLanguage = t.rss_feed_language),
                      (e.m_rtimeRSSLastChecked = t.rss_feed_last_checked),
                      (e.m_nPollIntervalSeconds = t.poll_interval),
                      (e.m_eCuratorLanguage = t.curation_language);
                  }))
                : console.error("Failed to CCuratorAdminStore", t);
            }),
            (e.prototype.GetFeedLanguageHandleUnset = function() {
              return -1 == this.m_eRSSFeedLanguage
                ? -1 == this.m_eCuratorLanguage
                  ? 0
                  : this.m_eCuratorLanguage
                : this.m_eRSSFeedLanguage;
            }),
            (e.prototype.GetCuratorLanguage = function() {
              return -1 == this.m_eCuratorLanguage
                ? 0
                : this.m_eCuratorLanguage;
            }),
            (e.prototype.ValidateStoreDefault = function(e) {
              return (
                "object" == typeof e &&
                "number" == typeof e.clanid &&
                "string" == typeof e.webapi_token
              );
            }),
            (e.prototype.BHasSavedRSSURL = function() {
              return Boolean(this.m_strRSSFeedURL);
            }),
            (e.prototype.GetRSSUrl = function() {
              return this.m_strRSSFeedURL ? this.m_strRSSFeedURL : "";
            }),
            (e.prototype.GetRSSLastRtimeChecked = function() {
              return this.m_rtimeRSSLastChecked;
            }),
            (e.prototype.GetClanSteamID = function() {
              return this.m_clanSteamID;
            }),
            (e.prototype.GetClanAccountID = function() {
              return this.m_clanAccountID;
            }),
            (e.prototype.BHasSetupFeed = function(e) {
              return Boolean(this.m_strRSSGID) && this.m_strRSSFeedURL === e;
            }),
            (e.prototype.BIsAutomationEnabled = function() {
              return Boolean(0 < this.m_nPollIntervalSeconds);
            }),
            (e.prototype.BHasFeedGID = function() {
              return Boolean(this.m_strRSSGID);
            }),
            (e.prototype.PreviewPartnerEventsFromRSSFeed = function(r) {
              return Object(c.b)(this, void 0, void 0, function() {
                var t, n;
                return Object(c.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? ((t = p.a.Init(O)).Body().set_rss_url(r),
                          t.Body().set_lang(this.GetFeedLanguageHandleUnset()),
                          [4, v.PreviewPartnerEvents(this.m_transport, t)])
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
            (e.prototype.FetchPublishedEvents = function(a) {
              return (
                void 0 === a && (a = 100),
                Object(c.b)(this, void 0, void 0, function() {
                  var t,
                    n,
                    r = this;
                  return Object(c.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return this.BIsLoggedIn()
                          ? this.m_strRSSGID
                            ? ((t = p.a.Init(C))
                                .Body()
                                .set_news_feed_gid(this.m_strRSSGID),
                              t.Body().set_amount(a),
                              [
                                4,
                                v.GetBatchPublishedPartnerEvent(
                                  this.m_transport,
                                  t
                                )
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
                                  Object(D.a)(n.GetEMsg()) +
                                  " EResult:" +
                                  n.GetEResult() +
                                  " msg:" +
                                  n.Hdr().error_message()
                              )
                            : Object(s.G)(function() {
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
                                    news_post_gid: n.Body().news_post_gid()[e]
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
            (e.prototype.MapArticleURLToClanEventGID = function(e) {
              var t = this.m_mapURLToPosted.get(e);
              if (t) return t.clan_event_gid;
            }),
            (e.prototype.BIsLoggedIn = function() {
              return d.i.logged_in;
            }),
            (e.prototype.CreateOrUpdateRSSNewFeed = function(i, o) {
              return (
                void 0 === o && (o = 0),
                Object(c.b)(this, void 0, void 0, function() {
                  var t,
                    n,
                    r,
                    a = this;
                  return Object(c.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (t = new FormData()).append(
                            "sessionid",
                            d.c.SESSIONID
                          ),
                          t.append("gid", this.m_strRSSGID),
                          t.append("lang", "" + this.GetCuratorLanguage()),
                          t.append("rss_url", i),
                          t.append("polling_interval", "" + o),
                          (n =
                            d.c.STORE_BASE_URL +
                            "curator/" +
                            this.m_clanAccountID +
                            "/admin/ajaxmanagerssfeed"),
                          [4, l.a.post(n, t, { withCredentials: !0 })]
                        );
                      case 1:
                        return (
                          1 == (r = e.sent()).data.success &&
                            Object(s.G)(function() {
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
            (e.prototype.UpdateAutomation = function(t) {
              return Object(c.b)(this, void 0, void 0, function() {
                return Object(c.e)(this, function(e) {
                  return [
                    2,
                    this.CreateOrUpdateRSSNewFeed(
                      this.m_strRSSFeedURL,
                      t ? 300 : 0
                    )
                  ];
                });
              });
            }),
            (e.prototype.CheckForNewUpdate = function() {
              return Object(c.b)(this, void 0, void 0, function() {
                var t, n;
                return Object(c.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_strRSSGID
                        ? ((t = new FormData()).append(
                            "sessionid",
                            d.c.SESSIONID
                          ),
                          t.append("gid", this.m_strRSSGID),
                          (n =
                            d.c.STORE_BASE_URL +
                            "curator/" +
                            this.m_clanAccountID +
                            "/admin/ajaxcheckfornews"),
                          [4, l.a.post(n, t, { withCredentials: !0 })])
                        : [3, 2];
                    case 1:
                      e.sent(), (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.CreatePost = function(i, o) {
              return Object(c.b)(this, void 0, void 0, function() {
                var t,
                  n,
                  r,
                  a = this;
                return Object(c.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? this.m_strRSSGID
                          ? ((t = new g()).set_gid(i.post.gid),
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
                            (n = p.a.Init(B)).Body().set_post(t),
                            n.Body().set_draft(o),
                            [4, v.PublishPartnerEvent(this.m_transport, n)])
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
                          : (Object(s.G)(function() {
                              var e = {
                                url: i.post.url,
                                clan_event_gid: r.Body().clan_event_gid(),
                                news_post_gid: r.Body().news_post_gid()
                              };
                              a.m_mapURLToPosted.set(i.post.url, e);
                            }),
                            F.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
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
            Object(c.c)([s.C], e.prototype, "m_strRSSFeedURL", void 0),
            Object(c.c)([s.C], e.prototype, "m_strRSSGID", void 0),
            Object(c.c)([s.C], e.prototype, "m_rtimeRSSLastChecked", void 0),
            Object(c.c)([s.C], e.prototype, "m_nPollIntervalSeconds", void 0),
            Object(c.c)([s.C], e.prototype, "m_eRSSFeedLanguage", void 0),
            Object(c.c)([s.C], e.prototype, "m_eCuratorLanguage", void 0),
            Object(c.c)([s.C], e.prototype, "m_mapURLToPosted", void 0),
            e
          );
        })(),
        U = (function() {
          function e() {
            this.m_mapClanToRecommendation = new Map();
          }
          return (
            (e.Get = function() {
              return (
                e.s_CuratorStore ||
                  ((e.s_CuratorStore = new e()).Init(),
                  (window.g_CuratorRecommendationStore = e.s_CuratorStore)),
                e.s_CuratorStore
              );
            }),
            (e.prototype.Init = function() {}),
            (e.prototype.GetReviewForApp = function(e, t) {
              if (this.m_mapClanToRecommendation.has(e.GetAccountID()))
                return this.m_mapClanToRecommendation
                  .get(e.GetAccountID())
                  .get(t);
            }),
            (e.prototype.BHasReviewForApp = function(e, t) {
              return Boolean(this.GetReviewForApp(e, t));
            }),
            (e.prototype.BHasReviewForAppByClanAccount = function(e, t) {
              var n = M.a.InitFromClanID(e);
              return Boolean(this.GetReviewForApp(n, t));
            }),
            (e.prototype.LoadAppRecommendation = function(o, s) {
              return Object(c.b)(this, void 0, void 0, function() {
                var t, n, r, a, i;
                return Object(c.e)(this, function(e) {
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
                      s.forEach(function(e) {
                        t.has(e) || n.push(e);
                      }),
                      0 < n.length)
                        ? ((r =
                            d.c.STORE_BASE_URL +
                            "curator/" +
                            o.GetAccountID() +
                            "/admin/ajaxgetrecbyapps"),
                          [
                            4,
                            l.a.get(r, {
                              params: {
                                appids: n,
                                cc: d.c.COUNTRY || "US",
                                l: d.c.LANGUAGE
                              }
                            })
                          ])
                        : [3, 2];
                    case 1:
                      (a = e.sent()),
                        (i = a && a.data) &&
                          i.rec_app &&
                          i.rec_app.forEach(function(e) {
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
        G = n("TyAF"),
        A = n("mgoM"),
        I = n("3+zv"),
        T = n("Mgs7"),
        N = n("T27q"),
        z = n("fpVW"),
        W = n.n(z),
        k = n("r+ba"),
        x = n("Jqb/"),
        H = n("ka0M"),
        q = n("0OaU"),
        V = n("+d9t"),
        Y = n("exH9"),
        K = n("X3Ds"),
        Q = n("TLQK"),
        J = n("bDQf"),
        X = n("bxiW"),
        Z = n("A2AY"),
        $ = n("Kw0F"),
        ee = n("bS9Q"),
        te = n("qP7j"),
        ne = n.n(te),
        re = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { strRssURL: L.Get().GetRSSUrl() }),
              (e.m_Admin = L.Get()),
              e
            );
          }
          return (
            Object(c.d)(e, t),
            (e.prototype.OnChangeActualRSSURL = function(e) {
              this.setState({ strRssURL: e.target.value });
            }),
            (e.prototype.OnCreateOrSaveFeed = function(e) {
              e.preventDefault(),
                Object(H.d)(
                  u.a.createElement(se, { strRSSUrl: this.state.strRssURL }),
                  Object(K.m)(e)
                );
            }),
            (e.prototype.OnRevert = function(e) {
              e.preventDefault(),
                this.setState({ strRssURL: this.m_Admin.GetRSSUrl() });
            }),
            (e.prototype.render = function() {
              var e = Boolean(
                this.state.strRssURL === this.m_Admin.GetRSSUrl()
              );
              if (void 0 !== window.Prototype)
                return window.location.reload(), null;
              var t = Object(A.e)(this.m_Admin.GetFeedLanguageHandleUnset());
              return u.a.createElement(
                "div",
                { className: Object(Y.a)(Z.Ctn) },
                u.a.createElement(
                  "div",
                  { className: "titleframe" },
                  u.a.createElement(
                    "h4",
                    null,
                    Object(Q.f)("#CuratorAdmin_RSSFeed_title")
                  ),
                  u.a.createElement(
                    "p",
                    { className: "subtitle" },
                    Object(Q.f)("#CuratorAdmin_RSSFeed_desc")
                  ),
                  u.a.createElement(
                    "p",
                    null,
                    Object(Q.n)(
                      "#CuratorAdmin_RSSFeed_doc_link",
                      u.a.createElement(
                        "a",
                        {
                          href:
                            "https://partner.steamgames.com/doc/store/news/rss",
                          target: "_blank"
                        },
                        Object(Q.f)("#CuratorAdmin_RSSFeed_doc_link_text")
                      )
                    )
                  ),
                  u.a.createElement(
                    "p",
                    { className: Z.DashboardBtn },
                    u.a.createElement(
                      V.a,
                      {
                        href:
                          d.c.COMMUNITY_BASE_URL +
                          "gid/" +
                          this.m_Admin.GetClanSteamID().ConvertTo64BitString() +
                          "/partnerevents/",
                        className: Object(Y.a)(W.a.Button, W.a.Primary)
                      },
                      Object(Q.f)("#RSSManager_EventDashBoard")
                    )
                  )
                ),
                u.a.createElement(
                  "div",
                  { className: "darkframe" },
                  u.a.createElement(
                    "div",
                    { className: Z.LanguageRow },
                    u.a.createElement(
                      "span",
                      { className: Z.LanguageTitle },
                      Object(Q.f)("#CuratorAdmin_RSSFeed_lang_only")
                    ),
                    u.a.createElement("span", { className: Z.LanguageSet }, t),
                    u.a.createElement(
                      "a",
                      {
                        href:
                          d.c.COMMUNITY_BASE_URL +
                          "gid/" +
                          this.m_Admin.GetClanSteamID().ConvertTo64BitString() +
                          "/edit ",
                        target: "_blank",
                        className: Object(Y.a)(W.a.Button, Z.PreviewBtn)
                      },
                      Object(Q.f)("#CuratorAdmin_RSSFeed_edit_language")
                    )
                  ),
                  Boolean(
                    this.m_Admin.GetFeedLanguageHandleUnset() !=
                      this.m_Admin.GetCuratorLanguage()
                  ) &&
                    u.a.createElement(
                      "div",
                      {
                        className: Object(Y.a)(
                          Z.LanguageRow,
                          ne.a.WarningIconLayout
                        )
                      },
                      u.a.createElement(
                        "span",
                        { className: Z.LanguageTitle },
                        Object(Q.f)(
                          "#CuratorAdmin_Curator_lang_only",
                          Object(A.e)(this.m_Admin.GetCuratorLanguage()),
                          t
                        )
                      )
                    ),
                  u.a.createElement(
                    "div",
                    {
                      className: Object(Y.a)(
                        W.a.FlexRowContainer,
                        Z.UrlSettingCtn
                      )
                    },
                    u.a.createElement(T.j, {
                      className: Z.RssInpu,
                      type: "text",
                      name: "link_url",
                      id: "link_url",
                      value: this.state.strRssURL,
                      label: Object(Q.f)("#CuratorAdmin_RSSFeed"),
                      placeholder: Object(Q.f)(
                        "#CuratorAdmin_RSSFeed_placeholder"
                      ),
                      onChange: this.OnChangeActualRSSURL,
                      mustBeURL: !0
                    }),
                    u.a.createElement(
                      "a",
                      {
                        className: "btn_green_white_innerfade btn_medium",
                        onClick: this.OnCreateOrSaveFeed
                      },
                      u.a.createElement(
                        "span",
                        null,
                        Object(Q.f)(e ? "#Button_Saved" : "#Button_Save")
                      )
                    ),
                    !e &&
                      u.a.createElement(
                        "a",
                        {
                          onClick: this.OnRevert,
                          className: "btn_grey_white_innerfade btn_medium"
                        },
                        Object(Q.f)("#Button_Revert")
                      )
                  ),
                  u.a.createElement(ie, null),
                  u.a.createElement("br", null),
                  u.a.createElement(ae, { strRssURL: this.state.strRssURL })
                )
              );
            }),
            Object(c.c)([X.a], e.prototype, "OnChangeActualRSSURL", null),
            Object(c.c)([X.a], e.prototype, "OnCreateOrSaveFeed", null),
            Object(c.c)([X.a], e.prototype, "OnRevert", null),
            (e = Object(c.c)([G.a], e))
          );
        })(u.a.Component),
        ae = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                strParseRssURL: e.props.strRssURL,
                bLoadingPreview: !1
              }),
              (e.m_cancelSignal = l.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(c.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var e = L.Get();
              e.BHasFeedGID() &&
                e.BHasSavedRSSURL() &&
                e.GetRSSUrl() == this.props.strRssURL &&
                this.OnLoadPreview();
            }),
            (e.prototype.componentWillUnmount = function() {
              this.m_cancelSignal.cancel(
                "PreviewRSSViewAndControl component unmounted"
              );
            }),
            (e.prototype.RenderPreviews = function() {
              var t = this,
                o = L.Get(),
                n = new Array();
              return (
                this.state.previews &&
                  this.state.previews
                    .sort(function(e, t) {
                      var n = o.MapArticleURLToClanEventGID(e.post.url),
                        r = o.MapArticleURLToClanEventGID(t.post.url),
                        a = n ? F.c.GetClanEventModel(n) : null,
                        i = r ? F.c.GetClanEventModel(r) : null;
                      return a && i
                        ? i.postTime - a.postTime
                        : a
                        ? -1
                        : i
                        ? 1
                        : t.post.rtime_date - e.post.rtime_date;
                    })
                    .forEach(function(e) {
                      n.push(
                        u.a.createElement(oe, {
                          newsData: e,
                          key: "id: " + e.unique_id,
                          clanSteamID: o.GetClanSteamID(),
                          fnGetRSSUrl: t.GetRSSPreviewURL
                        })
                      );
                    }),
                n
              );
            }),
            (e.prototype.GetRSSPreviewURL = function() {
              return this.state.strParseRssURL;
            }),
            (e.prototype.OnLoadPreview = function() {
              this.setState(
                {
                  bLoadingPreview: !0,
                  previews: void 0,
                  strPreviewURL: this.props.strRssURL,
                  strPreviewErrorMsg: void 0
                },
                this.DoLoadPreview
              );
            }),
            (e.prototype.DoLoadPreview = function() {
              return Object(c.b)(this, void 0, void 0, function() {
                var a,
                  t,
                  i,
                  n = this;
                return Object(c.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        (a = L.Get()).PreviewPartnerEventsFromRSSFeed(
                          this.props.strRssURL
                        )
                      ];
                    case 1:
                      return (
                        (t = e.sent()) && 1 == t.GetEResult()
                          ? ((i = t.Body().toObject()),
                            this.setState(
                              {
                                strParseRssURL: i.rss_url,
                                bLoadingPreview: !0
                              },
                              function() {
                                return Object(c.b)(
                                  n,
                                  void 0,
                                  void 0,
                                  function() {
                                    var n, r, t;
                                    return Object(c.e)(this, function(e) {
                                      switch (e.label) {
                                        case 0:
                                          return [
                                            4,
                                            a.FetchPublishedEvents(
                                              Math.max(100, i.results.length)
                                            )
                                          ];
                                        case 1:
                                          return (
                                            e.sent(),
                                            (n = new Array()),
                                            (r = new Array()),
                                            i.results.forEach(function(e) {
                                              var t = a.MapArticleURLToClanEventGID(
                                                e.post.url
                                              );
                                              t && n.push(t),
                                                e.post.appids &&
                                                  1 === e.post.appids.length &&
                                                  0 !==
                                                    e.post
                                                      .recommendation_state &&
                                                  r.push(e.post.appids[0]);
                                            }),
                                            0 < n.length
                                              ? [
                                                  4,
                                                  F.c.LoadBatchPartnerEventsByAnnouncementGID(
                                                    n,
                                                    null,
                                                    this.m_cancelSignal
                                                  )
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
                                                U.Get().LoadAppRecommendation(
                                                  t,
                                                  r
                                                )
                                              ])
                                            : [3, 5];
                                        case 4:
                                          e.sent(), (e.label = 5);
                                        case 5:
                                          return (
                                            this.setState({
                                              previews: i.results,
                                              bLoadingPreview: void 0
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
                              strPreviewErrorMsg: Object(Q.f)(
                                "#Error_Description",
                                t.GetEResult(),
                                t.Hdr().error_message()
                              )
                            }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.render = function() {
              var e = this.RenderPreviews();
              return u.a.createElement(
                "div",
                null,
                Boolean(
                  !this.state.bLoadingPreview &&
                    this.state.strPreviewURL !== this.props.strRssURL
                ) &&
                  u.a.createElement(
                    "div",
                    { className: Z.PreviewListBtn },
                    u.a.createElement(
                      T.c,
                      {
                        disabled: !T.j.validateUrl(this.props.strRssURL),
                        onClick: this.OnLoadPreview
                      },
                      Object(Q.f)("#CuratorAdmin_RSSFeed_preview")
                    )
                  ),
                this.state.bLoadingPreview &&
                  u.a.createElement(q.a, {
                    string: Object(Q.f)("#Loading"),
                    size: "medium",
                    position: "center"
                  }),
                this.state.strPreviewErrorMsg &&
                  u.a.createElement(
                    "div",
                    { className: W.a.ErrorMsg },
                    this.state.strPreviewErrorMsg
                  ),
                Boolean(0 < e.length) &&
                  u.a.createElement(
                    "div",
                    null,
                    u.a.createElement(
                      "p",
                      null,
                      Object(Q.f)(
                        "#RSSManager_PreviewInfo",
                        this.state.strPreviewURL
                      )
                    ),
                    u.a.createElement(
                      "div",
                      { className: Z.PreviewListCtn },
                      e
                    ),
                    u.a.createElement(
                      "p",
                      { className: Z.DashboardBtn },
                      u.a.createElement(
                        V.a,
                        {
                          href:
                            d.c.COMMUNITY_BASE_URL +
                            "gid/" +
                            L.Get()
                              .GetClanSteamID()
                              .ConvertTo64BitString() +
                            "/partnerevents/",
                          className: Object(Y.a)(W.a.Button, W.a.Primary)
                        },
                        Object(Q.f)("#RSSManager_EventDashBoard")
                      )
                    )
                  )
              );
            }),
            Object(c.c)([X.a], e.prototype, "GetRSSPreviewURL", null),
            Object(c.c)([X.a], e.prototype, "OnLoadPreview", null),
            (e = Object(c.c)([G.a], e))
          );
        })(u.a.Component),
        ie = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), (e.m_Admin = L.Get()), e;
          }
          return (
            Object(c.d)(e, t),
            (e.prototype.OnToggleChannelAutomation = function(e) {
              e
                ? (this.setState({ strErrorMessage: void 0 }),
                  Object(H.d)(
                    u.a.createElement(se, {
                      strRSSUrl: this.m_Admin.GetRSSUrl(),
                      bActivatePooling: !0
                    }),
                    window
                  ))
                : this.setState(
                    {
                      strErrorMessage: void 0,
                      strReasonWaiting: Object(Q.f)("#Saving")
                    },
                    this.BDisableAutomation
                  );
            }),
            (e.prototype.BDisableAutomation = function() {
              return Object(c.b)(this, void 0, void 0, function() {
                var t = this;
                return Object(c.e)(this, function(e) {
                  return (
                    this.m_Admin
                      .UpdateAutomation(!1)
                      .catch(function() {
                        return t.setState({
                          strErrorMessage: Object(Q.f)(
                            "#RSSManager_Status_Automation_DisableFailed"
                          )
                        });
                      })
                      .finally(function() {
                        return t.setState({ strReasonWaiting: void 0 });
                      }),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.OnQueueScan = function(n) {
              return Object(c.b)(this, void 0, void 0, function() {
                var t = this;
                return Object(c.e)(this, function(e) {
                  return (
                    this.setState({
                      strReasonWaiting: Object(Q.f)(
                        "#CuratorAdmin_RSSFeed_scannow"
                      )
                    }),
                    this.m_Admin
                      .CheckForNewUpdate()
                      .then(function() {
                        return Object(
                          H.d
                        )(u.a.createElement(x.c, { strTitle: Object(Q.f)("#CuratorAdmin_RSSFeed_scannow"), strDescription: Object(Q.f)("#CuratorAdmin_RSSFeed_queued") }), Object(K.m)(n));
                      })
                      .catch(function(e) {
                        return Object(
                          H.d
                        )(u.a.createElement(x.e, { strTitle: Object(Q.f)("#CuratorAdmin_RSSFeed_scannow"), strDescription: Object(J.a)(e) }), Object(K.m)(n));
                      })
                      .finally(function() {
                        return t.setState({ strReasonWaiting: void 0 });
                      }),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.render = function() {
              return this.m_Admin.BHasSavedRSSURL()
                ? u.a.createElement(
                    "div",
                    null,
                    Boolean(this.state.strReasonWaiting) &&
                      u.a.createElement(q.a, {
                        size: "medium",
                        string: this.state.strReasonWaiting
                      }),
                    Boolean(this.state.strErrorMessage) &&
                      u.a.createElement(
                        "div",
                        { className: Z.Error },
                        this.state.strErrorMessage
                      ),
                    u.a.createElement(T.n, {
                      onChange: this.OnToggleChannelAutomation,
                      label: Object(Q.f)("#RSSManager_Status_Automation_Desc"),
                      checked: this.m_Admin.BIsAutomationEnabled(),
                      description: ""
                    }),
                    this.m_Admin.BIsAutomationEnabled() &&
                      u.a.createElement(
                        "p",
                        null,
                        Object(Q.f)("#CuratorAdmin_RSSFeed_lastscanned"),
                        " ",
                        Object(Q.k)(this.m_Admin.GetRSSLastRtimeChecked(), !1),
                        "  @ ",
                        Object(Q.m)(this.m_Admin.GetRSSLastRtimeChecked()),
                        " ",
                        u.a.createElement(
                          "a",
                          { onClick: this.OnQueueScan },
                          u.a.createElement(
                            "span",
                            null,
                            Object(Q.f)("#CuratorAdmin_RSSFeed_scannow")
                          )
                        )
                      )
                  )
                : null;
            }),
            Object(c.c)([X.a], e.prototype, "OnToggleChannelAutomation", null),
            Object(c.c)([X.a], e.prototype, "OnQueueScan", null),
            (e = Object(c.c)([G.a], e))
          );
        })(u.a.Component),
        oe = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                clan_event_gid: L.Get().MapArticleURLToClanEventGID(
                  e.props.newsData.post.url
                ),
                bLoadingPartnerEvent: Boolean(
                  L.Get().MapArticleURLToClanEventGID(e.props.newsData.post.url)
                )
              }),
              (e.m_refParent = u.a.createRef()),
              e
            );
          }
          return (
            Object(c.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.DoPartnerEventLoad();
            }),
            (e.prototype.DoPartnerEventLoad = function() {
              return Object(c.b)(this, void 0, void 0, function() {
                var t, n;
                return Object(c.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.state.clan_event_gid
                        ? ((t = L.Get().GetClanSteamID()),
                          (n = F.c.GetClanEventModel(this.state.clan_event_gid))
                            ? [3, 2]
                            : [
                                4,
                                F.c.LoadHiddenPartnerEvent(
                                  t,
                                  this.state.clan_event_gid
                                )
                              ])
                        : [3, 3];
                    case 1:
                      (n = e.sent()), (e.label = 2);
                    case 2:
                      this.setState({
                        bLoadingPartnerEvent: !1,
                        existingEventModel: n
                      }),
                        (e.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.OnOpenPreviewAsPartnerEvent = function(e) {
              var t = this.props,
                n = t.newsData,
                r = t.clanSteamID,
                a = new I.p();
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
              var i = L.Get().GetFeedLanguageHandleUnset();
              !a.jsondata.localized_summary &&
                n.post.event_summary &&
                ((a.jsondata.localized_summary = Object($.e)(
                  a.jsondata.localized_summary,
                  30,
                  null
                )),
                (a.jsondata.localized_summary[0] = n.post.event_summary),
                0 != i &&
                  (a.jsondata.localized_summary[i] = n.post.event_summary)),
                !a.jsondata.localized_subtitle &&
                  n.post.event_subtitle &&
                  ((a.jsondata.localized_subtitle = Object($.e)(
                    a.jsondata.localized_subtitle,
                    30,
                    null
                  )),
                  (a.jsondata.localized_subtitle[0] = n.post.event_subtitle),
                  0 != i &&
                    (a.jsondata.localized_subtitle[i] = n.post.event_subtitle)),
                this.ShowModalEvent(a);
            }),
            (e.prototype.OnViewEvent = function() {
              this.ShowModalEvent(
                F.c.GetClanEventModel(this.state.clan_event_gid)
              );
            }),
            (e.prototype.ShowModalEvent = function(e) {
              var t = document.getElementById("curator_header_area_ctn_id");
              t &&
                (e
                  ? t.classList.add("curator_header_area_ctn_hideme")
                  : t.classList.remove("curator_header_area_ctn_hideme")),
                this.setState({ eventModelForPreviewNow: e });
            }),
            (e.prototype.ValidateJSONDefault = function(e) {
              var t = e;
              return !(!t || Array.isArray(t) || "object" != typeof t);
            }),
            (e.prototype.OnPostNewsEvent = function(e) {
              var t = this.props,
                n = t.newsData,
                r = t.fnGetRSSUrl;
              Object(H.d)(
                u.a.createElement(se, {
                  newsData: n,
                  strRSSUrl: r(),
                  fnClanEventGID: this.OnClanEventCreateSuccess
                }),
                Object(K.m)(e)
              );
            }),
            (e.prototype.OnUpdateNewsEvent = function(e) {
              var t = this.props,
                n = t.newsData,
                r = t.fnGetRSSUrl;
              Object(H.d)(
                u.a.createElement(se, {
                  newsData: n,
                  strRSSUrl: r(),
                  fnClanEventGID: this.OnClanEventCreateSuccess,
                  bUpdatePost: !0
                }),
                Object(K.m)(e)
              );
            }),
            (e.prototype.HideModalEvent = function() {
              this.state.eventModelForPreviewNow && this.ShowModalEvent(void 0);
            }),
            (e.prototype.OnClanEventCreateSuccess = function(e) {
              this.setState(
                { clan_event_gid: e, bLoadingPartnerEvent: !0 },
                this.DoPartnerEventLoad
              );
            }),
            (e.prototype.OnShowRawRSS = function(e) {
              var n = this.props.newsData.rss_message,
                t = (function() {
                  var e = n.match(/<entry[^>]*>(.*)<\/entry>/ms);
                  if (!e) return n;
                  var t = e[1].match(/<content[^>]*>.*<\/content>/ms);
                  return t ? Object(ee.b)(t[0]) : e[0];
                })();
              Object(H.d)(
                u.a.createElement(
                  x.c,
                  {
                    bAlertDialog: !0,
                    strTitle: Object(Q.f)("#RSSManager_PostEvent_ViewRaw")
                  },
                  u.a.createElement("textarea", {
                    className: Z.RawRSS,
                    value: t,
                    disabled: !0
                  })
                ),
                Object(K.m)(e)
              );
            }),
            (e.prototype.render = function() {
              var e = this.props.newsData,
                t = this.state,
                n = t.clan_event_gid,
                r = t.existingEventModel,
                a = t.bLoadingPartnerEvent,
                i = L.Get(),
                o = i.GetClanSteamID(),
                s = r && r.BIsStagedEvent(),
                c =
                  e.post.appids &&
                  1 == e.post.appids.length &&
                  e.post.appids[0],
                l =
                  0 !== e.post.recommendation_state &&
                  c &&
                  U.Get().BHasReviewForApp(o, c);
              return u.a.createElement(
                "div",
                {
                  className: Object(Y.a)(
                    Z.PostCtn,
                    Boolean(n) ? Z.ActivePost : ""
                  )
                },
                u.a.createElement("span", { className: Z.PostTitle }, e.title),
                u.a.createElement("br", null),
                Boolean(r) &&
                  u.a.createElement(
                    u.a.Fragment,
                    null,
                    Boolean(r.BIsVisibleEvent()) &&
                      u.a.createElement(
                        "span",
                        { className: Z.PostDate },
                        Object(Q.n)(
                          "#RSSManager_PostEvent_PostedDate",
                          Object(Q.o)(r.GetPostTimeAndDateUnixSeconds()) +
                            " @ " +
                            Object(Q.m)(r.GetPostTimeAndDateUnixSeconds())
                        )
                      ),
                    Boolean(!r.BIsVisibleEvent()) &&
                      u.a.createElement(
                        "span",
                        {
                          className: Object(Y.a)(
                            Z.PostDraft,
                            s ? Z.PostStaged : ""
                          )
                        },
                        Object(Q.f)(
                          s
                            ? "#RSSManager_PostEvent_Staged"
                            : "#RSSManager_PostEvent_Draft",
                          s
                            ? Object(Q.o)(
                                r.GetVisibilityStartTimeAndDateUnixSeconds()
                              ) +
                                " @ " +
                                Object(Q.m)(
                                  r.GetVisibilityStartTimeAndDateUnixSeconds()
                                )
                            : ""
                        )
                      )
                  ),
                u.a.createElement(
                  "div",
                  { className: Z.ButtonCtn },
                  Boolean(n)
                    ? u.a.createElement(
                        u.a.Fragment,
                        null,
                        Boolean(a)
                          ? u.a.createElement(q.a, {
                              string: Object(Q.f)("#Loading"),
                              size: "small",
                              position: "center"
                            })
                          : u.a.createElement(
                              "div",
                              {
                                onClick: this.OnViewEvent,
                                className: Object(Y.a)(W.a.Button, Z.PreviewBtn)
                              },
                              Object(Q.f)("#RSSManager_PostEvent_ViewEvent")
                            ),
                        u.a.createElement(
                          "a",
                          {
                            className: Object(Y.a)(W.a.Button, Z.PreviewBtn),
                            href:
                              d.c.COMMUNITY_BASE_URL +
                              "gid/" +
                              i.GetClanSteamID().ConvertTo64BitString() +
                              "/partnerevents/edit/" +
                              this.state.clan_event_gid
                          },
                          Object(Q.f)("#RSSManager_PostEvent_EditEvent")
                        ),
                        u.a.createElement(
                          "div",
                          {
                            onClick: this.OnUpdateNewsEvent,
                            className: Object(Y.a)(W.a.Button, Z.PreviewBtn)
                          },
                          Object(Q.f)("#RSSManager_PostEvent_UpdateEvent")
                        ),
                        l &&
                          u.a.createElement(
                            "a",
                            {
                              className: Object(Y.a)(W.a.Button, Z.PreviewBtn),
                              href:
                                d.c.STORE_BASE_URL +
                                "app/" +
                                e.post.appids[0] +
                                "/?curator_clanid=" +
                                o.GetAccountID()
                            },
                            Object(Q.f)("#RSSManager_SeeReview")
                          )
                      )
                    : u.a.createElement(
                        u.a.Fragment,
                        null,
                        u.a.createElement(
                          "div",
                          {
                            onClick: this.OnOpenPreviewAsPartnerEvent,
                            className: Object(Y.a)(W.a.Button, Z.PreviewBtn)
                          },
                          Object(Q.f)("#CuratorAdmin_RSSFeed_col_preview_event")
                        ),
                        u.a.createElement(
                          "div",
                          {
                            onClick: this.OnPostNewsEvent,
                            className: Object(Y.a)(W.a.Button, Z.PreviewBtn)
                          },
                          Object(Q.f)("#CuratorAdmin_RSSFeed_col_create_event")
                        )
                      ),
                  Boolean(e.rss_message && 0 < e.rss_message.length) &&
                    u.a.createElement(
                      "div",
                      { onClick: this.OnShowRawRSS, className: Z.ViewRaw },
                      Object(Q.f)("#RSSManager_PostEvent_ViewRaw")
                    ),
                  Boolean(this.state.eventModelForPreviewNow) &&
                    u.a.createElement(
                      x.h,
                      { className: k.StoreHeaderAdjust },
                      u.a.createElement(
                        "div",
                        null,
                        u.a.createElement(N.b, {
                          event: this.state.eventModelForPreviewNow,
                          fnClose: this.HideModalEvent
                        })
                      )
                    )
                )
              );
            }),
            Object(c.c)([X.a], e.prototype, "DoPartnerEventLoad", null),
            Object(c.c)(
              [X.a],
              e.prototype,
              "OnOpenPreviewAsPartnerEvent",
              null
            ),
            Object(c.c)([X.a], e.prototype, "OnViewEvent", null),
            Object(c.c)([X.a], e.prototype, "OnPostNewsEvent", null),
            Object(c.c)([X.a], e.prototype, "OnUpdateNewsEvent", null),
            Object(c.c)([X.a], e.prototype, "HideModalEvent", null),
            Object(c.c)([X.a], e.prototype, "OnClanEventCreateSuccess", null),
            Object(c.c)([X.a], e.prototype, "OnShowRawRSS", null),
            (e = Object(c.c)([G.a], e))
          );
        })(u.a.Component),
        se = (function(t) {
          function n() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                initialState: n.DetermineStartState(e.props),
                step: n.DetermineStartState(e.props),
                bDraftMode: !0
              }),
              (e.m_Admin = L.Get()),
              e
            );
          }
          return (
            Object(c.d)(n, t),
            (n.DetermineStartState = function(e) {
              var t = L.Get().BHasSetupFeed(e.strRSSUrl);
              return e.newsData && t
                ? e.bUpdatePost
                  ? "update_post"
                  : "create_post"
                : e.bActivatePooling
                ? "activate_feed"
                : L.Get().BHasSavedRSSURL()
                ? "update_feed"
                : "feed_missing";
            }),
            (n.prototype.OnCreateNewsFeed = function() {
              this.setState({ step: "creating_feed" }, this.DoCreateNewsFeed);
            }),
            (n.prototype.DoCreateNewsFeed = function() {
              return Object(c.b)(this, void 0, void 0, function() {
                var t;
                return Object(c.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        this.m_Admin.CreateOrUpdateRSSNewFeed(
                          this.props.strRSSUrl,
                          this.props.bActivatePooling ? 300 : 0
                        )
                      ];
                    case 1:
                      return (
                        1 != (t = e.sent()).success
                          ? this.setState({
                              step: "failure",
                              eResult: t.success,
                              strErrorMessage: Object(Q.f)(
                                "#RSSManager_PostEvent_Failure"
                              )
                            })
                          : this.setState({
                              step: this.props.newsData
                                ? "create_post"
                                : "success"
                            }),
                        [2]
                      );
                  }
                });
              });
            }),
            (n.prototype.OnCreatePost = function() {
              this.setState({ step: "waiting_post" }, this.DoCreatePost);
            }),
            (n.prototype.DoCreatePost = function() {
              return Object(c.b)(this, void 0, void 0, function() {
                var t;
                return Object(c.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        this.m_Admin.CreatePost(
                          this.props.newsData,
                          Boolean(this.state.bDraftMode)
                        )
                      ];
                    case 1:
                      return (
                        1 != (t = e.sent()).GetEResult()
                          ? this.setState({
                              step: "failure",
                              eResult: t.GetEResult(),
                              strErrorMessage: Object(Q.f)(
                                "#RSSManager_PostEvent_Failure"
                              )
                            })
                          : (this.props.fnClanEventGID &&
                              this.props.fnClanEventGID(
                                t.Body().clan_event_gid()
                              ),
                            this.setState({
                              step: "success",
                              eventGID: t.Body().clan_event_gid()
                            })),
                        [2]
                      );
                  }
                });
              });
            }),
            (n.prototype.OnChangeDraftMode = function(e) {
              this.setState({ bDraftMode: e });
            }),
            (n.prototype.OnChangePermissionsCreateFeed = function(e) {
              this.setState({ bPermissions: e });
            }),
            (n.prototype.OnChangeConductCreateFeed = function(e) {
              this.setState({ bConduct: e });
            }),
            (n.prototype.GetStrTitle = function() {
              if (this.props.newsData)
                return Object(Q.f)(
                  this.props.bUpdatePost
                    ? "#RSSManager_PostEvent_UpdateEvent"
                    : "#RSSManager_PostEvent_Tilte"
                );
              switch (this.state.initialState) {
                case "feed_missing":
                  return Object(Q.f)("#RSSManager_PostEvent_CreateFeedTitle");
                default:
                case "update_feed":
                  return Object(Q.f)("#RSSManager_PostEvent_UpdateFeedTitle");
                case "activate_feed":
                  return Object(Q.f)("#RSSManager_Status_Automation_Activate");
              }
            }),
            (n.prototype.render = function() {
              var e = this.props.strRSSUrl;
              switch (this.state.step) {
                case "feed_missing":
                case "activate_feed":
                case "update_feed":
                default:
                  return u.a.createElement(
                    x.d,
                    null,
                    u.a.createElement(T.i, null, " ", this.GetStrTitle(), " "),
                    u.a.createElement(
                      T.a,
                      null,
                      u.a.createElement(
                        T.b,
                        null,
                        this.props.newsData &&
                          u.a.createElement(
                            "div",
                            null,
                            Object(Q.f)(
                              "#RSSManager_PostEvent_CreateFeed_DuringPost"
                            )
                          ),
                        Boolean("activate_feed" !== this.state.step) &&
                          u.a.createElement(
                            "div",
                            null,
                            Object(Q.f)(
                              "#RSSManager_PostEvent_CreateFeed_Desc",
                              e
                            )
                          ),
                        u.a.createElement(
                          "div",
                          null,
                          Object(Q.f)("#RSSManager_CreateFeed_Review")
                        ),
                        u.a.createElement(
                          "div",
                          null,
                          u.a.createElement(T.d, {
                            label: Object(Q.f)(
                              "#RSSManager_CreateFeed_Permissions_v1"
                            ),
                            onChange: this.OnChangePermissionsCreateFeed,
                            checked: Boolean(this.state.bPermissions)
                          })
                        ),
                        u.a.createElement(
                          "div",
                          null,
                          u.a.createElement(T.d, {
                            label: Object(Q.f)(
                              "#RSSManager_CreateFeed_Conduct_v1"
                            ),
                            onChange: this.OnChangeConductCreateFeed,
                            checked: Boolean(this.state.bConduct)
                          }),
                          u.a.createElement(
                            V.a,
                            { href: d.c.STORE_BASE_URL + "online_conduct/" },
                            Object(Q.f)("#RSSManager_CreateFeed_Conduct_Link")
                          )
                        )
                      ),
                      u.a.createElement(
                        T.h,
                        null,
                        u.a.createElement(T.l, {
                          bOKDisabled: !Boolean(
                            this.state.bPermissions && this.state.bConduct
                          ),
                          onOK: this.OnCreateNewsFeed,
                          onCancel: this.props.closeModal
                        })
                      )
                    )
                  );
                case "failure":
                  return u.a.createElement(
                    x.e,
                    {
                      strDescription: Object(Q.f)(
                        "#RSSManager_PostEvent_Failure"
                      ),
                      closeModal: this.props.closeModal
                    },
                    u.a.createElement(
                      "div",
                      null,
                      Object(Q.f)(
                        "#Error_Description",
                        this.state.eResult,
                        this.state.strErrorMessage
                      )
                    )
                  );
                case "creating_feed":
                case "waiting_post":
                  return u.a.createElement(
                    x.c,
                    {
                      strTitle: this.GetStrTitle(),
                      strDescription: Object(Q.f)(
                        "#RSSManager_PostEvent_InFlight"
                      ),
                      closeModal: this.props.closeModal
                    },
                    u.a.createElement(q.a, { position: "center" })
                  );
                case "create_post":
                  return u.a.createElement(
                    x.d,
                    null,
                    u.a.createElement(T.i, null, " ", this.GetStrTitle(), " "),
                    u.a.createElement(
                      T.a,
                      null,
                      u.a.createElement(
                        T.b,
                        null,
                        u.a.createElement(
                          "div",
                          null,
                          u.a.createElement(
                            "div",
                            null,
                            Object(Q.f)("#RSSManager_PostEvent_CreatePost")
                          ),
                          u.a.createElement(
                            "div",
                            { className: Z.DialogPostTitle },
                            this.props.newsData.title
                          ),
                          u.a.createElement("br", null),
                          u.a.createElement(
                            "div",
                            null,
                            u.a.createElement(T.d, {
                              label: Object(Q.f)(
                                "#RSSManager_PostEvent_CreatePost_Draft"
                              ),
                              onChange: this.OnChangeDraftMode,
                              checked: Boolean(this.state.bDraftMode)
                            })
                          )
                        )
                      ),
                      u.a.createElement(
                        T.h,
                        null,
                        u.a.createElement(T.l, {
                          onOK: this.OnCreatePost,
                          onCancel: this.props.closeModal
                        })
                      )
                    )
                  );
                case "update_post":
                  return u.a.createElement(
                    x.d,
                    null,
                    u.a.createElement(T.i, null, " ", this.GetStrTitle(), " "),
                    u.a.createElement(
                      T.a,
                      null,
                      u.a.createElement(
                        T.b,
                        null,
                        u.a.createElement(
                          "div",
                          null,
                          u.a.createElement(
                            "div",
                            null,
                            Object(Q.f)("#RSSManager_PostEvent_UpdatePost")
                          ),
                          u.a.createElement("br", null),
                          u.a.createElement(
                            "div",
                            { className: Z.DialogPostTitle },
                            this.props.newsData.title
                          ),
                          u.a.createElement("br", null)
                        )
                      ),
                      u.a.createElement(
                        T.h,
                        null,
                        u.a.createElement(T.l, {
                          onOK: this.OnCreatePost,
                          onCancel: this.props.closeModal
                        })
                      )
                    )
                  );
                case "success":
                  return u.a.createElement(
                    x.c,
                    {
                      strTitle: this.GetStrTitle(),
                      strDescription: Object(Q.f)(
                        this.props.newsData
                          ? "#RSSManager_PostEvent_Success"
                          : "#RSSManager_PostEvent_Success_feed"
                      ),
                      closeModal: this.props.closeModal,
                      bAlertDialog: !0
                    },
                    Boolean(this.state.eventGID) &&
                      u.a.createElement(
                        "a",
                        {
                          href:
                            d.c.COMMUNITY_BASE_URL +
                            "gid/" +
                            this.m_Admin
                              .GetClanSteamID()
                              .ConvertTo64BitString() +
                            "/partnerevents/edit/" +
                            this.state.eventGID
                        },
                        Object(Q.f)("#RSSManager_PostEvent_EventLink")
                      )
                  );
              }
            }),
            Object(c.c)([X.a], n.prototype, "OnCreateNewsFeed", null),
            Object(c.c)([X.a], n.prototype, "DoCreateNewsFeed", null),
            Object(c.c)([X.a], n.prototype, "OnCreatePost", null),
            Object(c.c)([X.a], n.prototype, "DoCreatePost", null),
            Object(c.c)([X.a], n.prototype, "OnChangeDraftMode", null),
            Object(c.c)(
              [X.a],
              n.prototype,
              "OnChangePermissionsCreateFeed",
              null
            ),
            Object(c.c)([X.a], n.prototype, "OnChangeConductCreateFeed", null),
            Object(c.c)([X.a], n.prototype, "GetStrTitle", null),
            n
          );
        })(u.a.Component),
        ce = n("IjL/"),
        le = n("9w6b"),
        ue = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bIsLoading: !0 }), e;
          }
          return (
            Object(c.d)(e, t),
            (e.prototype.componentDidMount = function() {
              return Object(c.b)(this, void 0, void 0, function() {
                return Object(c.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return L.Get(), [4, le.a.InitGlobal()];
                    case 1:
                      return e.sent(), this.setState({ bIsLoading: !1 }), [2];
                  }
                });
              });
            }),
            (e.prototype.render = function() {
              return (
                Object(i.a)(
                  null == window.Prototype,
                  "Should not include prototypejs."
                ),
                this.state.bIsLoading
                  ? null
                  : u.a.createElement(
                      ce.a,
                      null,
                      u.a.createElement(
                        a.d,
                        null,
                        u.a.createElement(a.b, {
                          exact: !0,
                          path:
                            "/(curator|pub|publisher|dev|developer|franchise)/:curator_vanity/admin/manage_rss",
                          component: re
                        }),
                        u.a.createElement(a.b, null, !1)
                      )
                    )
              );
            }),
            e
          );
        })(u.a.Component);
      t.default = ue;
    },
    A2AY: function(e, t, n) {
      e.exports = {
        Ctn: "managerss_Ctn_1cSpO",
        RssInput: "managerss_RssInput_8NQ9L",
        PreviewListCtn: "managerss_PreviewListCtn_HRcOM",
        PostCtn: "managerss_PostCtn_3MI2h",
        PostTitle: "managerss_PostTitle_1Zsns",
        ActivePost: "managerss_ActivePost_h-qBF",
        PostDate: "managerss_PostDate_2vXmu",
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
        LanguageSet: "managerss_LanguageSet_2zsMr"
      };
    },
    qP7j: function(e, t, n) {
      e.exports = {
        ErrorStyles: "partnereventdialog_ErrorStyles_2Sg7W",
        ErrorStylesWithIcon: "partnereventdialog_ErrorStylesWithIcon_Lc2PK",
        ErrorIconLayout: "partnereventdialog_ErrorIconLayout_42__6",
        ErrorStylesBackground: "partnereventdialog_ErrorStylesBackground_3fVv6",
        WarningStyles: "partnereventdialog_WarningStyles_3gxgE",
        WarningStylesWithIcon: "partnereventdialog_WarningStylesWithIcon_1S_uS",
        WarningIconLayout: "partnereventdialog_WarningIconLayout_2jM80",
        WarningStylesBackground:
          "partnereventdialog_WarningStylesBackground_UYrHs",
        Padding: "partnereventdialog_Padding_36hma",
        NotTooWideModal: "partnereventdialog_NotTooWideModal_UfQcb"
      };
    },
    "r+ba": function(e, t, n) {
      e.exports = {
        Container: "partnereventwebrowembed_Container_2Jd3M",
        StoreHeaderAdjust: "partnereventwebrowembed_StoreHeaderAdjust_3YyCp",
        SectionButtonCtn: "partnereventwebrowembed_SectionButtonCtn_1HP0y",
        SectionButton: "partnereventwebrowembed_SectionButton_3n8sw",
        EventsSummariesCtn: "partnereventwebrowembed_EventsSummariesCtn_1snIw"
      };
    }
  }
]);
