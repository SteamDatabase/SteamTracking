/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    "3rT3": function(e, t, n) {
      "use strict";
      n.r(t);
      var o,
        r,
        l = n("mrSG"),
        s = n("q1tI"),
        d = n.n(s),
        a = n("Ty5D"),
        i = n("r64O"),
        c = n("vDqi"),
        u = n.n(c),
        p = n("2vnA"),
        g = n("lkRc"),
        _ = n("WBba"),
        v = n("bxBv"),
        h = n("hRO2"),
        f = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return h.Message.initialize(t, e, 0, -1, [5], null), t;
          }
          return (
            Object(l.d)(r, n),
            (r.prototype.gid = function() {
              return h.Message.getField(this, 1);
            }),
            (r.prototype.set_gid = function(e) {
              h.Message.setField(this, 1, e);
            }),
            (r.prototype.name = function() {
              return h.Message.getField(this, 2);
            }),
            (r.prototype.set_name = function(e) {
              h.Message.setField(this, 2, e);
            }),
            (r.prototype.type = function() {
              return h.Message.getFieldWithDefault(this, 3, 0);
            }),
            (r.prototype.set_type = function(e) {
              h.Message.setField(this, 3, e);
            }),
            (r.prototype.url = function() {
              return h.Message.getField(this, 4);
            }),
            (r.prototype.set_url = function(e) {
              h.Message.setField(this, 4, e);
            }),
            (r.prototype.associated_apps = function() {
              return h.Message.getField(this, 5);
            }),
            (r.prototype.set_associated_apps = function(e) {
              h.Message.setField(this, 5, e);
            }),
            (r.prototype.add_associated_apps = function(e, t) {
              h.Message.addToRepeatedField(this, 5, e, t);
            }),
            (r.prototype.poll_interval = function() {
              return h.Message.getFieldWithDefault(this, 6, 300);
            }),
            (r.prototype.set_poll_interval = function(e) {
              h.Message.setField(this, 6, e);
            }),
            (r.prototype.kv_description = function() {
              return h.Message.getField(this, 7);
            }),
            (r.prototype.set_kv_description = function(e) {
              h.Message.setField(this, 7, e);
            }),
            (r.prototype.kv_filter = function() {
              return h.Message.getField(this, 8);
            }),
            (r.prototype.set_kv_filter = function(e) {
              h.Message.setField(this, 8, e);
            }),
            (r.prototype.publish_to_clan_account_id = function() {
              return h.Message.getField(this, 9);
            }),
            (r.prototype.set_publish_to_clan_account_id = function(e) {
              h.Message.setField(this, 9, e);
            }),
            (r.prototype.language = function() {
              return h.Message.getField(this, 10);
            }),
            (r.prototype.set_language = function(e) {
              h.Message.setField(this, 10, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                gid: h.Message.getField(t, 1),
                name: h.Message.getField(t, 2),
                type: h.Message.getFieldWithDefault(t, 3, 0),
                url: h.Message.getField(t, 4),
                associated_apps: h.Message.getField(t, 5),
                poll_interval: h.Message.getFieldWithDefault(t, 6, 300),
                kv_description: h.Message.getField(t, 7),
                kv_filter: h.Message.getField(t, 8),
                publish_to_clan_account_id: h.Message.getField(t, 9),
                language: h.Message.getField(t, 10)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_gid(e.gid),
                t.set_name(e.name),
                t.set_type(e.type),
                t.set_url(e.url),
                t.set_associated_apps(e.associated_apps),
                t.set_poll_interval(e.poll_interval),
                t.set_kv_description(e.kv_description),
                t.set_kv_filter(e.kv_filter),
                t.set_publish_to_clan_account_id(e.publish_to_clan_account_id),
                t.set_language(e.language),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new h.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_gid(t.readFixed64String());
                    break;
                  case 2:
                    e.set_name(t.readString());
                    break;
                  case 3:
                    e.set_type(t.readUint32());
                    break;
                  case 4:
                    e.set_url(t.readString());
                    break;
                  case 5:
                    e.add_associated_apps(t.readUint32());
                    break;
                  case 6:
                    e.set_poll_interval(t.readUint32());
                    break;
                  case 7:
                    e.set_kv_description(t.readString());
                    break;
                  case 8:
                    e.set_kv_filter(t.readString());
                    break;
                  case 9:
                    e.set_publish_to_clan_account_id(t.readUint32());
                    break;
                  case 10:
                    e.set_language(t.readUint32());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new h.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n;
              void 0 !== (n = h.Message.getField(e, 1)) &&
                t.writeFixed64String(1, n),
                void 0 !== (n = h.Message.getField(e, 2)) &&
                  t.writeString(2, n),
                void 0 !== (n = h.Message.getField(e, 3)) &&
                  t.writeUint32(3, n),
                void 0 !== (n = h.Message.getField(e, 4)) &&
                  t.writeString(4, n),
                void 0 !== (n = h.Message.getField(e, 5)) &&
                  t.writeRepeatedUint32(5, n),
                void 0 !== (n = h.Message.getField(e, 6)) &&
                  t.writeUint32(6, n),
                void 0 !== (n = h.Message.getField(e, 7)) &&
                  t.writeString(7, n),
                void 0 !== (n = h.Message.getField(e, 8)) &&
                  t.writeString(8, n),
                void 0 !== (n = h.Message.getField(e, 9)) &&
                  t.writeUint32(9, n),
                void 0 !== (n = h.Message.getField(e, 10)) &&
                  t.writeUint32(10, n);
            }),
            (r.prototype.getClassName = function() {
              return "CNewsFeedDef";
            }),
            r
          );
        })(h.Message),
        m = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return h.Message.initialize(t, e, 0, -1, [11], null), t;
          }
          return (
            Object(l.d)(r, n),
            (r.prototype.gid = function() {
              return h.Message.getField(this, 1);
            }),
            (r.prototype.set_gid = function(e) {
              h.Message.setField(this, 1, e);
            }),
            (r.prototype.news_feed_gid = function() {
              return h.Message.getField(this, 2);
            }),
            (r.prototype.set_news_feed_gid = function(e) {
              h.Message.setField(this, 2, e);
            }),
            (r.prototype.title = function() {
              return h.Message.getField(this, 3);
            }),
            (r.prototype.set_title = function(e) {
              h.Message.setField(this, 3, e);
            }),
            (r.prototype.url = function() {
              return h.Message.getField(this, 4);
            }),
            (r.prototype.set_url = function(e) {
              h.Message.setField(this, 4, e);
            }),
            (r.prototype.author = function() {
              return h.Message.getField(this, 5);
            }),
            (r.prototype.set_author = function(e) {
              h.Message.setField(this, 5, e);
            }),
            (r.prototype.rtime_date = function() {
              return h.Message.getField(this, 6);
            }),
            (r.prototype.set_rtime_date = function(e) {
              h.Message.setField(this, 6, e);
            }),
            (r.prototype.contents = function() {
              return h.Message.getField(this, 7);
            }),
            (r.prototype.set_contents = function(e) {
              h.Message.setField(this, 7, e);
            }),
            (r.prototype.commited = function() {
              return h.Message.getField(this, 8);
            }),
            (r.prototype.set_commited = function(e) {
              h.Message.setField(this, 8, e);
            }),
            (r.prototype.deleted = function() {
              return h.Message.getField(this, 9);
            }),
            (r.prototype.set_deleted = function(e) {
              h.Message.setField(this, 9, e);
            }),
            (r.prototype.tags = function() {
              return h.Message.getField(this, 10);
            }),
            (r.prototype.set_tags = function(e) {
              h.Message.setField(this, 10, e);
            }),
            (r.prototype.appids = function() {
              return h.Message.getField(this, 11);
            }),
            (r.prototype.set_appids = function(e) {
              h.Message.setField(this, 11, e);
            }),
            (r.prototype.add_appids = function(e, t) {
              h.Message.addToRepeatedField(this, 11, e, t);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                gid: h.Message.getField(t, 1),
                news_feed_gid: h.Message.getField(t, 2),
                title: h.Message.getField(t, 3),
                url: h.Message.getField(t, 4),
                author: h.Message.getField(t, 5),
                rtime_date: h.Message.getField(t, 6),
                contents: h.Message.getField(t, 7),
                commited: h.Message.getField(t, 8),
                deleted: h.Message.getField(t, 9),
                tags: h.Message.getField(t, 10),
                appids: h.Message.getField(t, 11)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_gid(e.gid),
                t.set_news_feed_gid(e.news_feed_gid),
                t.set_title(e.title),
                t.set_url(e.url),
                t.set_author(e.author),
                t.set_rtime_date(e.rtime_date),
                t.set_contents(e.contents),
                t.set_commited(e.commited),
                t.set_deleted(e.deleted),
                t.set_tags(e.tags),
                t.set_appids(e.appids),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new h.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_gid(t.readFixed64String());
                    break;
                  case 2:
                    e.set_news_feed_gid(t.readFixed64String());
                    break;
                  case 3:
                    e.set_title(t.readString());
                    break;
                  case 4:
                    e.set_url(t.readString());
                    break;
                  case 5:
                    e.set_author(t.readString());
                    break;
                  case 6:
                    e.set_rtime_date(t.readUint32());
                    break;
                  case 7:
                    e.set_contents(t.readString());
                    break;
                  case 8:
                    e.set_commited(t.readBool());
                    break;
                  case 9:
                    e.set_deleted(t.readBool());
                    break;
                  case 10:
                    e.set_tags(t.readString());
                    break;
                  case 11:
                    e.add_appids(t.readUint32());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new h.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n;
              void 0 !== (n = h.Message.getField(e, 1)) &&
                t.writeFixed64String(1, n),
                void 0 !== (n = h.Message.getField(e, 2)) &&
                  t.writeFixed64String(2, n),
                void 0 !== (n = h.Message.getField(e, 3)) &&
                  t.writeString(3, n),
                void 0 !== (n = h.Message.getField(e, 4)) &&
                  t.writeString(4, n),
                void 0 !== (n = h.Message.getField(e, 5)) &&
                  t.writeString(5, n),
                void 0 !== (n = h.Message.getField(e, 6)) &&
                  t.writeUint32(6, n),
                void 0 !== (n = h.Message.getField(e, 7)) &&
                  t.writeString(7, n),
                void 0 !== (n = h.Message.getField(e, 8)) && t.writeBool(8, n),
                void 0 !== (n = h.Message.getField(e, 9)) && t.writeBool(9, n),
                void 0 !== (n = h.Message.getField(e, 10)) &&
                  t.writeString(10, n),
                void 0 !== (n = h.Message.getField(e, 11)) &&
                  t.writeRepeatedUint32(11, n);
            }),
            (r.prototype.getClassName = function() {
              return "CNewsFeedPostDef";
            }),
            r
          );
        })(h.Message),
        b = (h.Message,
        (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return h.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(l.d)(r, n),
            (r.prototype.converted_content = function() {
              return h.Message.getField(this, 1);
            }),
            (r.prototype.set_converted_content = function(e) {
              h.Message.setField(this, 1, e);
            }),
            (r.prototype.found_html = function() {
              return h.Message.getField(this, 2);
            }),
            (r.prototype.set_found_html = function(e) {
              h.Message.setField(this, 2, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                converted_content: h.Message.getField(t, 1),
                found_html: h.Message.getField(t, 2)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_converted_content(e.converted_content),
                t.set_found_html(e.found_html),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new h.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_converted_content(t.readString());
                    break;
                  case 2:
                    e.set_found_html(t.readBool());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new h.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n;
              void 0 !== (n = h.Message.getField(e, 1)) && t.writeString(1, n),
                void 0 !== (n = h.Message.getField(e, 2)) && t.writeBool(2, n);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_ConvertHTMLToBBCode_Response";
            }),
            r
          );
        })(h.Message)),
        S = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return h.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(l.d)(r, n),
            (r.prototype.rss_message = function() {
              return h.Message.getField(this, 1);
            }),
            (r.prototype.set_rss_message = function(e) {
              h.Message.setField(this, 1, e);
            }),
            (r.prototype.unique_id = function() {
              return h.Message.getField(this, 2);
            }),
            (r.prototype.set_unique_id = function(e) {
              h.Message.setField(this, 2, e);
            }),
            (r.prototype.title = function() {
              return h.Message.getField(this, 3);
            }),
            (r.prototype.set_title = function(e) {
              h.Message.setField(this, 3, e);
            }),
            (r.prototype.desc = function() {
              return h.Message.getField(this, 4);
            }),
            (r.prototype.set_desc = function(e) {
              h.Message.setField(this, 4, e);
            }),
            (r.prototype.jsondata = function() {
              return h.Message.getField(this, 5);
            }),
            (r.prototype.set_jsondata = function(e) {
              h.Message.setField(this, 5, e);
            }),
            (r.prototype.post = function(e) {
              return (
                void 0 === e && (e = !0),
                h.Message.getWrapperField(this, m, 6, e ? 1 : 0)
              );
            }),
            (r.prototype.set_post = function(e) {
              h.Message.setWrapperField(this, 6, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n,
                r = {
                  rss_message: h.Message.getField(t, 1),
                  unique_id: h.Message.getField(t, 2),
                  title: h.Message.getField(t, 3),
                  desc: h.Message.getField(t, 4),
                  jsondata: h.Message.getField(t, 5),
                  post: (n = t.post(!1)) && m.toObject(e, n)
                };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_rss_message(e.rss_message),
                t.set_unique_id(e.unique_id),
                t.set_title(e.title),
                t.set_desc(e.desc),
                t.set_jsondata(e.jsondata),
                t.set_post(m.fromObject(e.post)),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new h.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_rss_message(t.readString());
                    break;
                  case 2:
                    e.set_unique_id(t.readString());
                    break;
                  case 3:
                    e.set_title(t.readString());
                    break;
                  case 4:
                    e.set_desc(t.readString());
                    break;
                  case 5:
                    e.set_jsondata(t.readString());
                    break;
                  case 6:
                    var n = new m();
                    t.readMessage(n, m.deserializeBinaryFromReader),
                      e.set_post(n);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new h.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n;
              void 0 !== (n = h.Message.getField(e, 1)) && t.writeString(1, n),
                void 0 !== (n = h.Message.getField(e, 2)) &&
                  t.writeString(2, n),
                void 0 !== (n = h.Message.getField(e, 3)) &&
                  t.writeString(3, n),
                void 0 !== (n = h.Message.getField(e, 4)) &&
                  t.writeString(4, n),
                void 0 !== (n = h.Message.getField(e, 5)) &&
                  t.writeString(5, n),
                null != (n = e.post(!1)) &&
                  t.writeMessage(6, n, m.serializeBinaryToWriter);
            }),
            (r.prototype.getClassName = function() {
              return "CNewsPartnerEventPreview";
            }),
            r
          );
        })(h.Message),
        y = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return h.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(l.d)(r, n),
            (r.prototype.rss_url = function() {
              return h.Message.getField(this, 1);
            }),
            (r.prototype.set_rss_url = function(e) {
              h.Message.setField(this, 1, e);
            }),
            (r.prototype.lang = function() {
              return h.Message.getField(this, 2);
            }),
            (r.prototype.set_lang = function(e) {
              h.Message.setField(this, 2, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                rss_url: h.Message.getField(t, 1),
                lang: h.Message.getField(t, 2)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return t.set_rss_url(e.rss_url), t.set_lang(e.lang), t;
            }),
            (r.deserializeBinary = function(e) {
              var t = new h.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_rss_url(t.readString());
                    break;
                  case 2:
                    e.set_lang(t.readUint32());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new h.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n;
              void 0 !== (n = h.Message.getField(e, 1)) && t.writeString(1, n),
                void 0 !== (n = h.Message.getField(e, 2)) &&
                  t.writeUint32(2, n);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_PreviewPartnerEvents_Request";
            }),
            r
          );
        })(h.Message),
        w = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return h.Message.initialize(t, e, 0, -1, [2], null), t;
          }
          return (
            Object(l.d)(r, n),
            (r.prototype.rss_url = function() {
              return h.Message.getField(this, 1);
            }),
            (r.prototype.set_rss_url = function(e) {
              h.Message.setField(this, 1, e);
            }),
            (r.prototype.results = function() {
              return h.Message.getRepeatedWrapperField(this, S, 2);
            }),
            (r.prototype.set_results = function(e) {
              h.Message.setRepeatedWrapperField(this, 2, e);
            }),
            (r.prototype.add_results = function(e, t) {
              return h.Message.addToRepeatedWrapperField(this, 2, e, S, t);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                rss_url: h.Message.getField(t, 1),
                results: h.Message.toObjectList(t.results(), S.toObject, e)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_rss_url(e.rss_url),
                t.set_results(
                  (Array.isArray(e.results) ? e.results : []).map(function(e) {
                    return S.fromObject(e);
                  })
                ),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new h.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_rss_url(t.readString());
                    break;
                  case 2:
                    var n = new S();
                    t.readMessage(n, S.deserializeBinaryFromReader),
                      e.add_results(n);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new h.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n;
              void 0 !== (n = h.Message.getField(e, 1)) && t.writeString(1, n),
                0 < (n = e.results()).length &&
                  t.writeRepeatedMessage(2, n, S.serializeBinaryToWriter);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_PreviewPartnerEvents_Response";
            }),
            r
          );
        })(h.Message),
        F = (h.Message,
        (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return h.Message.initialize(t, e, 0, -1, [1], null), t;
          }
          return (
            Object(l.d)(r, n),
            (r.prototype.feeds = function() {
              return h.Message.getRepeatedWrapperField(this, f, 1);
            }),
            (r.prototype.set_feeds = function(e) {
              h.Message.setRepeatedWrapperField(this, 1, e);
            }),
            (r.prototype.add_feeds = function(e, t) {
              return h.Message.addToRepeatedWrapperField(this, 1, e, f, t);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                feeds: h.Message.toObjectList(t.feeds(), f.toObject, e)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_feeds(
                  (Array.isArray(e.feeds) ? e.feeds : []).map(function(e) {
                    return f.fromObject(e);
                  })
                ),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new h.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    var n = new f();
                    t.readMessage(n, f.deserializeBinaryFromReader),
                      e.add_feeds(n);
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new h.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n;
              0 < (n = e.feeds()).length &&
                t.writeRepeatedMessage(1, n, f.serializeBinaryToWriter);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_GetNewsFeedByRepublishClan_Response";
            }),
            r
          );
        })(h.Message)),
        M = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return h.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(l.d)(r, n),
            (r.prototype.post = function(e) {
              return (
                void 0 === e && (e = !0),
                h.Message.getWrapperField(this, m, 1, e ? 1 : 0)
              );
            }),
            (r.prototype.set_post = function(e) {
              h.Message.setWrapperField(this, 1, e);
            }),
            (r.prototype.draft = function() {
              return h.Message.getField(this, 2);
            }),
            (r.prototype.set_draft = function(e) {
              h.Message.setField(this, 2, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n,
                r = {
                  post: (n = t.post(!1)) && m.toObject(e, n),
                  draft: h.Message.getField(t, 2)
                };
              return e && (r.$jspbMessageInstance = t), r;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return t.set_post(m.fromObject(e.post)), t.set_draft(e.draft), t;
            }),
            (r.deserializeBinary = function(e) {
              var t = new h.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    var n = new m();
                    t.readMessage(n, m.deserializeBinaryFromReader),
                      e.set_post(n);
                    break;
                  case 2:
                    e.set_draft(t.readBool());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new h.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n;
              null != (n = e.post(!1)) &&
                t.writeMessage(1, n, m.serializeBinaryToWriter),
                void 0 !== (n = h.Message.getField(e, 2)) && t.writeBool(2, n);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_PublishPartnerEvent_Request";
            }),
            r
          );
        })(h.Message),
        R = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return h.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(l.d)(r, n),
            (r.prototype.clan_event_gid = function() {
              return h.Message.getField(this, 1);
            }),
            (r.prototype.set_clan_event_gid = function(e) {
              h.Message.setField(this, 1, e);
            }),
            (r.prototype.news_post_gid = function() {
              return h.Message.getField(this, 2);
            }),
            (r.prototype.set_news_post_gid = function(e) {
              h.Message.setField(this, 2, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                clan_event_gid: h.Message.getField(t, 1),
                news_post_gid: h.Message.getField(t, 2)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_clan_event_gid(e.clan_event_gid),
                t.set_news_post_gid(e.news_post_gid),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new h.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_clan_event_gid(t.readFixed64String());
                    break;
                  case 2:
                    e.set_news_post_gid(t.readFixed64String());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new h.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n;
              void 0 !== (n = h.Message.getField(e, 1)) &&
                t.writeFixed64String(1, n),
                void 0 !== (n = h.Message.getField(e, 2)) &&
                  t.writeFixed64String(2, n);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_PublishPartnerEvent_Response";
            }),
            r
          );
        })(h.Message),
        O = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return h.Message.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(l.d)(r, n),
            (r.prototype.news_feed_gid = function() {
              return h.Message.getField(this, 1);
            }),
            (r.prototype.set_news_feed_gid = function(e) {
              h.Message.setField(this, 1, e);
            }),
            (r.prototype.start_index = function() {
              return h.Message.getFieldWithDefault(this, 2, 0);
            }),
            (r.prototype.set_start_index = function(e) {
              h.Message.setField(this, 2, e);
            }),
            (r.prototype.amount = function() {
              return h.Message.getFieldWithDefault(this, 3, 100);
            }),
            (r.prototype.set_amount = function(e) {
              h.Message.setField(this, 3, e);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                news_feed_gid: h.Message.getField(t, 1),
                start_index: h.Message.getFieldWithDefault(t, 2, 0),
                amount: h.Message.getFieldWithDefault(t, 3, 100)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_news_feed_gid(e.news_feed_gid),
                t.set_start_index(e.start_index),
                t.set_amount(e.amount),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new h.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_news_feed_gid(t.readFixed64String());
                    break;
                  case 2:
                    e.set_start_index(t.readUint32());
                    break;
                  case 3:
                    e.set_amount(t.readUint32());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new h.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n;
              void 0 !== (n = h.Message.getField(e, 1)) &&
                t.writeFixed64String(1, n),
                void 0 !== (n = h.Message.getField(e, 2)) &&
                  t.writeUint32(2, n),
                void 0 !== (n = h.Message.getField(e, 3)) &&
                  t.writeUint32(3, n);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_GetBatchPublishedPartnerEvent_Request";
            }),
            r
          );
        })(h.Message),
        E = (function(n) {
          function r(e) {
            void 0 === e && (e = null);
            var t = n.call(this) || this;
            return h.Message.initialize(t, e, 0, -1, [3, 4, 5], null), t;
          }
          return (
            Object(l.d)(r, n),
            (r.prototype.clan_account_id = function() {
              return h.Message.getField(this, 1);
            }),
            (r.prototype.set_clan_account_id = function(e) {
              h.Message.setField(this, 1, e);
            }),
            (r.prototype.news_feed_gid = function() {
              return h.Message.getField(this, 2);
            }),
            (r.prototype.set_news_feed_gid = function(e) {
              h.Message.setField(this, 2, e);
            }),
            (r.prototype.clan_event_gid = function() {
              return h.Message.getField(this, 3);
            }),
            (r.prototype.set_clan_event_gid = function(e) {
              h.Message.setField(this, 3, e);
            }),
            (r.prototype.add_clan_event_gid = function(e, t) {
              h.Message.addToRepeatedField(this, 3, e, t);
            }),
            (r.prototype.news_post_gid = function() {
              return h.Message.getField(this, 4);
            }),
            (r.prototype.set_news_post_gid = function(e) {
              h.Message.setField(this, 4, e);
            }),
            (r.prototype.add_news_post_gid = function(e, t) {
              h.Message.addToRepeatedField(this, 4, e, t);
            }),
            (r.prototype.news_url = function() {
              return h.Message.getField(this, 5);
            }),
            (r.prototype.set_news_url = function(e) {
              h.Message.setField(this, 5, e);
            }),
            (r.prototype.add_news_url = function(e, t) {
              h.Message.addToRepeatedField(this, 5, e, t);
            }),
            (r.prototype.toObject = function(e) {
              return void 0 === e && (e = !1), r.toObject(e, this);
            }),
            (r.toObject = function(e, t) {
              var n = {
                clan_account_id: h.Message.getField(t, 1),
                news_feed_gid: h.Message.getField(t, 2),
                clan_event_gid: h.Message.getField(t, 3),
                news_post_gid: h.Message.getField(t, 4),
                news_url: h.Message.getField(t, 5)
              };
              return e && (n.$jspbMessageInstance = t), n;
            }),
            (r.fromObject = function(e) {
              var t = new r();
              return (
                t.set_clan_account_id(e.clan_account_id),
                t.set_news_feed_gid(e.news_feed_gid),
                t.set_clan_event_gid(e.clan_event_gid),
                t.set_news_post_gid(e.news_post_gid),
                t.set_news_url(e.news_url),
                t
              );
            }),
            (r.deserializeBinary = function(e) {
              var t = new h.BinaryReader(e),
                n = new r();
              return r.deserializeBinaryFromReader(n, t);
            }),
            (r.deserializeBinaryFromReader = function(e, t) {
              for (; t.nextField() && !t.isEndGroup(); ) {
                switch (t.getFieldNumber()) {
                  case 1:
                    e.set_clan_account_id(t.readUint32());
                    break;
                  case 2:
                    e.set_news_feed_gid(t.readFixed64String());
                    break;
                  case 3:
                    e.add_clan_event_gid(t.readFixed64String());
                    break;
                  case 4:
                    e.add_news_post_gid(t.readFixed64String());
                    break;
                  case 5:
                    e.add_news_url(t.readString());
                    break;
                  default:
                    t.skipField();
                }
              }
              return e;
            }),
            (r.prototype.serializeBinary = function() {
              var e = new h.BinaryWriter();
              return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (r.serializeBinaryToWriter = function(e, t) {
              var n;
              void 0 !== (n = h.Message.getField(e, 1)) && t.writeUint32(1, n),
                void 0 !== (n = h.Message.getField(e, 2)) &&
                  t.writeFixed64String(2, n),
                void 0 !== (n = h.Message.getField(e, 3)) &&
                  t.writeRepeatedFixed64String(3, n),
                void 0 !== (n = h.Message.getField(e, 4)) &&
                  t.writeRepeatedFixed64String(4, n),
                void 0 !== (n = h.Message.getField(e, 5)) &&
                  t.writeRepeatedString(5, n);
            }),
            (r.prototype.getClassName = function() {
              return "CNews_GetBatchPublishedPartnerEvent_Response";
            }),
            r
          );
        })(h.Message);
      ((r = o || (o = {})).ConvertHTMLToBBCode = function(e, t) {
        return e.SendMsg("News.ConvertHTMLToBBCode#1", t, b, {
          bConstMethod: !0
        });
      }),
        (r.PreviewPartnerEvents = function(e, t) {
          return e.SendMsg("News.PreviewPartnerEvents#1", t, w, {
            bConstMethod: !0
          });
        }),
        (r.GetNewsFeedByRepublishClan = function(e, t) {
          return e.SendMsg("News.GetNewsFeedByRepublishClan#1", t, F, {
            bConstMethod: !0
          });
        }),
        (r.PublishPartnerEvent = function(e, t) {
          return e.SendMsg("News.PublishPartnerEvent#1", t, R, {});
        }),
        (r.GetBatchPublishedPartnerEvent = function(e, t) {
          return e.SendMsg("News.GetBatchPublishedPartnerEvent#1", t, E, {
            bConstMethod: !0
          });
        });
      var j = n("kLLr"),
        B = n("6oCP"),
        C = (function() {
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
                t = Object(g.f)("curatoradmin", "application_config");
              this.ValidateStoreDefault(t)
                ? ((this.m_transport = new _.a(
                    g.c.WEBAPI_BASE_URL,
                    t.webapi_token
                  ).GetServiceTransport()),
                  (this.m_clanAccountID = t.clanid),
                  (this.m_clanSteamID = j.a.InitFromClanID(
                    this.m_clanAccountID
                  )),
                  Object(p.runInAction)(function() {
                    (e.m_strRSSFeedURL = t.rss_feed_url),
                      (e.m_strRSSGID = t.rss_feed_gid),
                      (e.m_rtimeRSSLastChecked = t.rss_feed_last_checked),
                      (e.m_nPollIntervalSeconds = t.poll_interval);
                  }))
                : console.error("Failed to CCuratorAdminStore", t);
            }),
            (e.prototype.ValidateStoreDefault = function(e) {
              var t = e;
              return (
                "object" == typeof t &&
                "number" == typeof t.clanid &&
                "string" == typeof t.webapi_token
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
            (e.prototype.PreviewPartnerEventsFromRSSFeed = function(r, s) {
              return (
                void 0 === s && (s = 0),
                Object(l.b)(this, void 0, void 0, function() {
                  var t, n;
                  return Object(l.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return this.BIsLoggedIn()
                          ? ((t = v.a.Init(y)).Body().set_rss_url(r),
                            t.Body().set_lang(s),
                            [4, o.PreviewPartnerEvents(this.m_transport, t)])
                          : (console.error(
                              "PreviewPartnerEventsFromRSSFeed: User not logged in"
                            ),
                            [2, null]);
                      case 1:
                        return 1 != (n = e.sent()).GetEResult()
                          ? (console.error(
                              "PreviewPartnerEventsFromRSSFeed error: " +
                                n.GetEMsg() +
                                " " +
                                n.GetEResult()
                            ),
                            [2, null])
                          : [2, n.Body().toObject()];
                    }
                  });
                })
              );
            }),
            (e.prototype.FetchPublishedEvents = function(s) {
              return (
                void 0 === s && (s = 100),
                Object(l.b)(this, void 0, void 0, function() {
                  var t,
                    n,
                    r = this;
                  return Object(l.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return this.BIsLoggedIn()
                          ? this.m_strRSSGID
                            ? ((t = v.a.Init(O))
                                .Body()
                                .set_news_feed_gid(this.m_strRSSGID),
                              t.Body().set_amount(s),
                              [
                                4,
                                o.GetBatchPublishedPartnerEvent(
                                  this.m_transport,
                                  t
                                )
                              ])
                            : (console.error(
                                "CreatePartnerFromPreviewPost: Need to create a news feed first"
                              ),
                              [2, null])
                          : (console.error(
                              "PreviewPartnerEventsFromRSSFeed: User not logged in"
                            ),
                            [2, null]);
                      case 1:
                        return (
                          1 != (n = e.sent()).GetEResult()
                            ? console.error(
                                "CreatePost error: " +
                                  n.GetEMsg() +
                                  " " +
                                  n.GetEResult()
                              )
                            : Object(p.runInAction)(function() {
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
              return g.i.logged_in;
            }),
            (e.prototype.CreateOrUpdateRSSNewFeed = function(a, i) {
              return (
                void 0 === i && (i = 0),
                Object(l.b)(this, void 0, void 0, function() {
                  var t,
                    n,
                    r,
                    s = this;
                  return Object(l.e)(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (t = new FormData()).append(
                            "sessionid",
                            g.c.SESSIONID
                          ),
                          t.append("gid", this.m_strRSSGID),
                          t.append("lang", "0"),
                          t.append("rss_url", a),
                          t.append("polling_interval", "" + i),
                          (n =
                            g.c.STORE_BASE_URL +
                            "curator/" +
                            this.m_clanAccountID +
                            "/admin/ajaxmanagerssfeed"),
                          [4, u.a.post(n, t, { withCredentials: !0 })]
                        );
                      case 1:
                        return (
                          1 == (r = e.sent()).data.success &&
                            Object(p.runInAction)(function() {
                              (s.m_strRSSGID = r.data.gid),
                                (s.m_strRSSFeedURL = a),
                                (s.m_nPollIntervalSeconds = i);
                            }),
                          [2, r.data]
                        );
                    }
                  });
                })
              );
            }),
            (e.prototype.UpdateAutomation = function(t) {
              return Object(l.b)(this, void 0, void 0, function() {
                return Object(l.e)(this, function(e) {
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
              return Object(l.b)(this, void 0, void 0, function() {
                var t, n;
                return Object(l.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.m_strRSSGID
                        ? ((t = new FormData()).append(
                            "sessionid",
                            g.c.SESSIONID
                          ),
                          t.append("gid", this.m_strRSSGID),
                          (n =
                            g.c.STORE_BASE_URL +
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
            (e.prototype.CreatePost = function(a, i) {
              return Object(l.b)(this, void 0, void 0, function() {
                var t,
                  n,
                  r,
                  s = this;
                return Object(l.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.BIsLoggedIn()
                        ? this.m_strRSSGID
                          ? ((t = new m()).set_gid(a.post.gid),
                            t.set_news_feed_gid(this.m_strRSSGID),
                            t.set_title(a.post.title),
                            t.set_url(a.post.url),
                            t.set_author(a.post.author),
                            t.set_rtime_date(a.post.rtime_date),
                            t.set_contents(a.post.contents),
                            t.set_commited(a.post.commited),
                            t.set_deleted(a.post.deleted),
                            t.set_tags(a.post.tags),
                            t.set_appids(a.post.appids),
                            (n = v.a.Init(M)).Body().set_post(t),
                            n.Body().set_draft(i),
                            [4, o.PublishPartnerEvent(this.m_transport, n)])
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
                          : (Object(p.runInAction)(function() {
                              var e = {
                                url: a.post.url,
                                clan_event_gid: r.Body().clan_event_gid(),
                                news_post_gid: r.Body().news_post_gid()
                              };
                              s.m_mapURLToPosted.set(a.post.url, e);
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
            Object(l.c)([p.observable], e.prototype, "m_strRSSFeedURL", void 0),
            Object(l.c)([p.observable], e.prototype, "m_strRSSGID", void 0),
            Object(l.c)(
              [p.observable],
              e.prototype,
              "m_rtimeRSSLastChecked",
              void 0
            ),
            Object(l.c)(
              [p.observable],
              e.prototype,
              "m_nPollIntervalSeconds",
              void 0
            ),
            Object(l.c)(
              [p.observable],
              e.prototype,
              "m_mapURLToPosted",
              void 0
            ),
            e
          );
        })(),
        P = n("TyAF"),
        D = n("mgoM"),
        U = n("3+zv"),
        G = n("Mgs7"),
        L = n("T27q"),
        A = n("fpVW"),
        I = n.n(A),
        k = n("r+ba"),
        N = n("Jqb/"),
        T = n("ka0M"),
        z = n("0OaU"),
        W = n("+d9t"),
        x = n("exH9"),
        H = n("X3Ds"),
        V = n("TLQK"),
        q = n("bDQf"),
        $ = n("bxiW"),
        Q = n("A2AY"),
        Y = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = { strRssURL: C.Get().GetRSSUrl() }),
              (e.m_Admin = C.Get()),
              e
            );
          }
          return (
            Object(l.d)(e, t),
            (e.prototype.OnChangeActualRSSURL = function(e) {
              this.setState({ strRssURL: e.target.value });
            }),
            (e.prototype.OnCreateOrSaveFeed = function(e) {
              e.preventDefault(),
                Object(T.d)(
                  d.a.createElement(Z, { strRSSUrl: this.state.strRssURL }),
                  Object(H.m)(e)
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
              return void 0 !== window.Prototype
                ? (window.location.reload(), null)
                : d.a.createElement(
                    "div",
                    { className: Object(x.a)(Q.Ctn) },
                    d.a.createElement(
                      "div",
                      { className: "titleframe" },
                      d.a.createElement(
                        "h4",
                        null,
                        Object(V.d)("#CuratorAdmin_RSSFeed_title")
                      ),
                      d.a.createElement(
                        "p",
                        { className: "subtitle" },
                        Object(V.d)("#CuratorAdmin_RSSFeed_desc")
                      ),
                      d.a.createElement(
                        "p",
                        null,
                        Object(V.j)(
                          "#CuratorAdmin_RSSFeed_doc_link",
                          d.a.createElement(
                            "a",
                            {
                              href:
                                "https://partner.steamgames.com/doc/store/news/rss",
                              target: "_blank"
                            },
                            Object(V.d)("#CuratorAdmin_RSSFeed_doc_link_text")
                          )
                        )
                      ),
                      d.a.createElement(
                        "p",
                        { className: Q.DashboardBtn },
                        d.a.createElement(
                          W.a,
                          {
                            href:
                              g.c.COMMUNITY_BASE_URL +
                              "gid/" +
                              this.m_Admin
                                .GetClanSteamID()
                                .ConvertTo64BitString() +
                              "/partnerevents/",
                            className: Object(x.a)(I.a.Button, I.a.Primary)
                          },
                          Object(V.d)("#RSSManager_EventDashBoard")
                        )
                      )
                    ),
                    d.a.createElement(
                      "div",
                      { className: "darkframe" },
                      d.a.createElement(
                        "div",
                        {
                          className: Object(x.a)(
                            I.a.FlexRowContainer,
                            Q.UrlSettingCtn
                          )
                        },
                        d.a.createElement(G.j, {
                          className: Q.RssInpu,
                          type: "text",
                          name: "link_url",
                          id: "link_url",
                          value: this.state.strRssURL,
                          label: Object(V.d)("#CuratorAdmin_RSSFeed_english"),
                          placeholder: Object(V.d)(
                            "#CuratorAdmin_RSSFeed_placeholder"
                          ),
                          onChange: this.OnChangeActualRSSURL,
                          mustBeURL: !0
                        }),
                        d.a.createElement(
                          "a",
                          {
                            className: "btn_green_white_innerfade btn_medium",
                            onClick: this.OnCreateOrSaveFeed
                          },
                          d.a.createElement(
                            "span",
                            null,
                            Object(V.d)(e ? "#Button_Saved" : "#Button_Save")
                          )
                        ),
                        !e &&
                          d.a.createElement(
                            "a",
                            {
                              onClick: this.OnRevert,
                              className: "btn_grey_white_innerfade btn_medium"
                            },
                            Object(V.d)("#Button_Revert")
                          )
                      ),
                      d.a.createElement(K, null),
                      d.a.createElement("br", null),
                      d.a.createElement(J, { strRssURL: this.state.strRssURL })
                    )
                  );
            }),
            Object(l.c)([$.a], e.prototype, "OnChangeActualRSSURL", null),
            Object(l.c)([$.a], e.prototype, "OnCreateOrSaveFeed", null),
            Object(l.c)([$.a], e.prototype, "OnRevert", null),
            (e = Object(l.c)([P.observer], e))
          );
        })(d.a.Component),
        J = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                strParseRssURL: e.props.strRssURL,
                bLoadingPreview: !1
              }),
              (e.m_cancelSignal = u.a.CancelToken.source()),
              e
            );
          }
          return (
            Object(l.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var e = C.Get();
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
                i = C.Get(),
                n = new Array();
              if (this.state.previews) {
                var e = this.state.previews;
                (e = e.sort(function(e, t) {
                  var n = i.MapArticleURLToClanEventGID(e.post.url),
                    r = i.MapArticleURLToClanEventGID(t.post.url),
                    s = n ? B.c.GetClanEventModel(n) : null,
                    a = r ? B.c.GetClanEventModel(r) : null;
                  return s && a
                    ? a.postTime - s.postTime
                    : s
                    ? -1
                    : a
                    ? 1
                    : t.post.rtime_date - e.post.rtime_date;
                })).forEach(function(e) {
                  n.push(
                    d.a.createElement(X, {
                      newsData: e,
                      key: "id: " + e.unique_id,
                      clanSteamID: i.GetClanSteamID(),
                      fnGetRSSUrl: t.GetRSSPreviewURL
                    })
                  );
                });
              }
              return n;
            }),
            (e.prototype.GetRSSPreviewURL = function() {
              return this.state.strParseRssURL;
            }),
            (e.prototype.OnLoadPreview = function() {
              this.setState(
                {
                  bLoadingPreview: !0,
                  previews: void 0,
                  strPreviewURL: this.props.strRssURL
                },
                this.DoLoadPreview
              );
            }),
            (e.prototype.DoLoadPreview = function() {
              return Object(l.b)(this, void 0, void 0, function() {
                var r,
                  t,
                  n = this;
                return Object(l.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        (r = C.Get()).PreviewPartnerEventsFromRSSFeed(
                          this.props.strRssURL
                        )
                      ];
                    case 1:
                      return (
                        (t = e.sent())
                          ? this.setState(
                              {
                                strParseRssURL: t.rss_url,
                                bLoadingPreview: !0
                              },
                              function() {
                                return Object(l.b)(
                                  n,
                                  void 0,
                                  void 0,
                                  function() {
                                    var n;
                                    return Object(l.e)(this, function(e) {
                                      switch (e.label) {
                                        case 0:
                                          return [
                                            4,
                                            r.FetchPublishedEvents(
                                              Math.max(100, t.results.length)
                                            )
                                          ];
                                        case 1:
                                          return (
                                            e.sent(),
                                            (n = new Array()),
                                            t.results.forEach(function(e) {
                                              var t = r.MapArticleURLToClanEventGID(
                                                e.post.url
                                              );
                                              t && n.push(t);
                                            }),
                                            0 < n.length
                                              ? [
                                                  4,
                                                  B.c.LoadBatchPartnerEventsByAnnouncementGID(
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
                                          return (
                                            this.setState({
                                              previews: t.results,
                                              bLoadingPreview: void 0
                                            }),
                                            [2]
                                          );
                                      }
                                    });
                                  }
                                );
                              }
                            )
                          : this.setState({ bLoadingPreview: void 0 }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.render = function() {
              var e = this.RenderPreviews();
              return d.a.createElement(
                "div",
                null,
                Boolean(
                  !this.state.bLoadingPreview &&
                    this.state.strPreviewURL !== this.props.strRssURL
                ) &&
                  d.a.createElement(
                    "div",
                    { className: Q.PreviewListBtn },
                    d.a.createElement(
                      G.c,
                      {
                        disabled: !G.j.validateUrl(this.props.strRssURL),
                        onClick: this.OnLoadPreview
                      },
                      Object(V.d)("#CuratorAdmin_RSSFeed_preview")
                    )
                  ),
                this.state.bLoadingPreview &&
                  d.a.createElement(z.a, {
                    string: Object(V.d)("#Loading"),
                    size: "medium",
                    position: "center"
                  }),
                Boolean(0 < e.length) &&
                  d.a.createElement(
                    "div",
                    null,
                    d.a.createElement(
                      "p",
                      null,
                      Object(V.d)(
                        "#RSSManager_PreviewInfo",
                        this.state.strPreviewURL
                      )
                    ),
                    d.a.createElement(
                      "div",
                      { className: Q.PreviewListCtn },
                      e
                    ),
                    d.a.createElement(
                      "p",
                      { className: Q.DashboardBtn },
                      d.a.createElement(
                        W.a,
                        {
                          href:
                            g.c.COMMUNITY_BASE_URL +
                            "gid/" +
                            C.Get()
                              .GetClanSteamID()
                              .ConvertTo64BitString() +
                            "/partnerevents/",
                          className: Object(x.a)(I.a.Button, I.a.Primary)
                        },
                        Object(V.d)("#RSSManager_EventDashBoard")
                      )
                    )
                  )
              );
            }),
            Object(l.c)([$.a], e.prototype, "GetRSSPreviewURL", null),
            Object(l.c)([$.a], e.prototype, "OnLoadPreview", null),
            (e = Object(l.c)([P.observer], e))
          );
        })(d.a.Component),
        K = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = {}), (e.m_Admin = C.Get()), e;
          }
          return (
            Object(l.d)(e, t),
            (e.prototype.OnToggleChannelAutomation = function(e) {
              e
                ? (this.setState({ strErrorMessage: void 0 }),
                  Object(T.d)(
                    d.a.createElement(Z, {
                      strRSSUrl: this.m_Admin.GetRSSUrl(),
                      bActivatePooling: !0
                    }),
                    window
                  ))
                : this.setState(
                    {
                      strErrorMessage: void 0,
                      strReasonWaiting: Object(V.d)("#Saving")
                    },
                    this.BDisableAutomation
                  );
            }),
            (e.prototype.BDisableAutomation = function() {
              return Object(l.b)(this, void 0, void 0, function() {
                var t = this;
                return Object(l.e)(this, function(e) {
                  return (
                    this.m_Admin
                      .UpdateAutomation(!1)
                      .catch(function() {
                        return t.setState({
                          strErrorMessage: Object(V.d)(
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
              return Object(l.b)(this, void 0, void 0, function() {
                var t = this;
                return Object(l.e)(this, function(e) {
                  return (
                    this.setState({
                      strReasonWaiting: Object(V.d)(
                        "#CuratorAdmin_RSSFeed_scannow"
                      )
                    }),
                    this.m_Admin
                      .CheckForNewUpdate()
                      .then(function() {
                        return Object(
                          T.d
                        )(d.a.createElement(N.c, { strTitle: Object(V.d)("#CuratorAdmin_RSSFeed_scannow"), strDescription: Object(V.d)("#CuratorAdmin_RSSFeed_queued") }), Object(H.m)(n));
                      })
                      .catch(function(e) {
                        return Object(
                          T.d
                        )(d.a.createElement(N.e, { strTitle: Object(V.d)("#CuratorAdmin_RSSFeed_scannow"), strDescription: Object(q.a)(e) }), Object(H.m)(n));
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
                ? d.a.createElement(
                    "div",
                    null,
                    Boolean(this.state.strReasonWaiting) &&
                      d.a.createElement(z.a, {
                        size: "medium",
                        string: this.state.strReasonWaiting
                      }),
                    Boolean(this.state.strErrorMessage) &&
                      d.a.createElement(
                        "div",
                        { className: Q.Error },
                        this.state.strErrorMessage
                      ),
                    d.a.createElement(G.n, {
                      onChange: this.OnToggleChannelAutomation,
                      label: Object(V.d)("#RSSManager_Status_Automation_Desc"),
                      checked: this.m_Admin.BIsAutomationEnabled(),
                      description: ""
                    }),
                    this.m_Admin.BIsAutomationEnabled() &&
                      d.a.createElement(
                        "p",
                        null,
                        Object(V.d)("#CuratorAdmin_RSSFeed_lastscanned"),
                        " ",
                        Object(V.h)(this.m_Admin.GetRSSLastRtimeChecked(), !1),
                        "  @ ",
                        Object(V.i)(this.m_Admin.GetRSSLastRtimeChecked()),
                        " ",
                        d.a.createElement(
                          "a",
                          { onClick: this.OnQueueScan },
                          d.a.createElement(
                            "span",
                            null,
                            Object(V.d)("#CuratorAdmin_RSSFeed_scannow")
                          )
                        )
                      )
                  )
                : null;
            }),
            Object(l.c)([$.a], e.prototype, "OnToggleChannelAutomation", null),
            Object(l.c)([$.a], e.prototype, "OnQueueScan", null),
            (e = Object(l.c)([P.observer], e))
          );
        })(d.a.Component),
        X = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                clan_event_gid: C.Get().MapArticleURLToClanEventGID(
                  e.props.newsData.post.url
                ),
                bLoadingPartnerEvent: Boolean(
                  C.Get().MapArticleURLToClanEventGID(e.props.newsData.post.url)
                )
              }),
              (e.m_refParent = d.a.createRef()),
              e
            );
          }
          return (
            Object(l.d)(e, t),
            (e.prototype.componentDidMount = function() {
              this.DoPartnerEventLoad();
            }),
            (e.prototype.DoPartnerEventLoad = function() {
              return Object(l.b)(this, void 0, void 0, function() {
                var t, n;
                return Object(l.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return this.state.clan_event_gid
                        ? ((t = C.Get().GetClanSteamID()),
                          [
                            4,
                            B.c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                              t,
                              this.state.clan_event_gid,
                              0
                            )
                          ])
                        : [3, 2];
                    case 1:
                      (n = e.sent()),
                        this.setState({
                          bLoadingPartnerEvent: !1,
                          existingEventModel: n
                        }),
                        (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.OnOpenPreviewAsPartnerEvent = function(e) {
              var t = this.props,
                n = t.newsData,
                r = t.clanSteamID,
                s = new U.n();
              (s.GID = "PreviewPartnerEventRow_0"),
                (s.GID = "PreviewPartnerEventRow_0"),
                (s.clanSteamID = r),
                (s.postTime = Date.now() / 1e3),
                (s.startTime = Date.now() / 1e3),
                (s.type = D.a.k_ENewsEvent),
                s.vecTags.push("auto_rssfeed"),
                s.vecTags.push("curator"),
                s.vecTags.push("curator_public"),
                s.name.set(0, n.title),
                s.description.set(0, n.desc),
                this.ValidateJSONDefault(n.jsondata) &&
                  (s.jsondata = n.jsondata),
                this.ShowModalEvent(s);
            }),
            (e.prototype.OnViewEvent = function() {
              this.ShowModalEvent(
                B.c.GetClanEventModel(this.state.clan_event_gid)
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
              Object(T.d)(
                d.a.createElement(Z, {
                  newsData: n,
                  strRSSUrl: r(),
                  fnClanEventGID: this.OnClanEventCreateSuccess
                }),
                Object(H.m)(e)
              );
            }),
            (e.prototype.OnUpdateNewsEvent = function(e) {
              var t = this.props,
                n = t.newsData,
                r = t.fnGetRSSUrl;
              Object(T.d)(
                d.a.createElement(Z, {
                  newsData: n,
                  strRSSUrl: r(),
                  fnClanEventGID: this.OnClanEventCreateSuccess,
                  bUpdatePost: !0
                }),
                Object(H.m)(e)
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
              Object(T.d)(
                d.a.createElement(
                  N.c,
                  {
                    bAlertDialog: !0,
                    strTitle: Object(V.d)("#RSSManager_PostEvent_ViewRaw")
                  },
                  d.a.createElement("textarea", {
                    className: Q.RawRSS,
                    value: this.props.newsData.rss_message,
                    disabled: !0
                  })
                ),
                Object(H.m)(e)
              );
            }),
            (e.prototype.render = function() {
              var e = this.props.newsData,
                t = this.state,
                n = t.clan_event_gid,
                r = t.existingEventModel,
                s = t.bLoadingPartnerEvent,
                a = r && r.BIsStagedEvent(),
                i = C.Get();
              return d.a.createElement(
                "div",
                {
                  className: Object(x.a)(
                    Q.PostCtn,
                    Boolean(n) ? Q.ActivePost : ""
                  )
                },
                d.a.createElement("span", { className: Q.PostTitle }, e.title),
                d.a.createElement("br", null),
                Boolean(r) &&
                  d.a.createElement(
                    d.a.Fragment,
                    null,
                    Boolean(r.BIsVisibleEvent()) &&
                      d.a.createElement(
                        "span",
                        { className: Q.PostDate },
                        Object(V.j)(
                          "#RSSManager_PostEvent_PostedDate",
                          Object(V.k)(r.GetPostTimeAndDateUnixSeconds()) +
                            " @ " +
                            Object(V.i)(r.GetPostTimeAndDateUnixSeconds())
                        )
                      ),
                    Boolean(!r.BIsVisibleEvent()) &&
                      d.a.createElement(
                        "span",
                        {
                          className: Object(x.a)(
                            Q.PostDraft,
                            a ? Q.PostStaged : ""
                          )
                        },
                        Object(V.d)(
                          a
                            ? "#RSSManager_PostEvent_Staged"
                            : "#RSSManager_PostEvent_Draft",
                          a
                            ? Object(V.k)(
                                r.GetVisibilityStartTimeAndDateUnixSeconds()
                              ) +
                                " @ " +
                                Object(V.i)(
                                  r.GetVisibilityStartTimeAndDateUnixSeconds()
                                )
                            : ""
                        )
                      )
                  ),
                d.a.createElement(
                  "div",
                  { className: Q.ButtonCtn },
                  Boolean(n)
                    ? d.a.createElement(
                        d.a.Fragment,
                        null,
                        Boolean(s)
                          ? d.a.createElement(z.a, {
                              string: Object(V.d)("#Loading"),
                              size: "small",
                              position: "center"
                            })
                          : d.a.createElement(
                              "div",
                              {
                                onClick: this.OnViewEvent,
                                className: Object(x.a)(I.a.Button, Q.PreviewBtn)
                              },
                              Object(V.d)("#RSSManager_PostEvent_ViewEvent")
                            ),
                        d.a.createElement(
                          "a",
                          {
                            className: Object(x.a)(I.a.Button, Q.PreviewBtn),
                            href:
                              g.c.COMMUNITY_BASE_URL +
                              "gid/" +
                              i.GetClanSteamID().ConvertTo64BitString() +
                              "/partnerevents/edit/" +
                              this.state.clan_event_gid
                          },
                          Object(V.d)("#RSSManager_PostEvent_EditEvent")
                        ),
                        d.a.createElement(
                          "div",
                          {
                            onClick: this.OnUpdateNewsEvent,
                            className: Object(x.a)(I.a.Button, Q.PreviewBtn)
                          },
                          Object(V.d)("#RSSManager_PostEvent_UpdateEvent")
                        )
                      )
                    : d.a.createElement(
                        d.a.Fragment,
                        null,
                        d.a.createElement(
                          "div",
                          {
                            onClick: this.OnOpenPreviewAsPartnerEvent,
                            className: Object(x.a)(I.a.Button, Q.PreviewBtn)
                          },
                          Object(V.d)("#CuratorAdmin_RSSFeed_col_preview_event")
                        ),
                        d.a.createElement(
                          "div",
                          {
                            onClick: this.OnPostNewsEvent,
                            className: Object(x.a)(I.a.Button, Q.PreviewBtn)
                          },
                          Object(V.d)("#CuratorAdmin_RSSFeed_col_create_event")
                        )
                      ),
                  Boolean(e.rss_message && 0 < e.rss_message.length) &&
                    d.a.createElement(
                      "div",
                      { onClick: this.OnShowRawRSS, className: Q.ViewRaw },
                      Object(V.d)("#RSSManager_PostEvent_ViewRaw")
                    ),
                  Boolean(this.state.eventModelForPreviewNow) &&
                    d.a.createElement(
                      N.h,
                      { className: k.StoreHeaderAdjust },
                      d.a.createElement(
                        "div",
                        null,
                        d.a.createElement(L.a, {
                          event: this.state.eventModelForPreviewNow,
                          fnClose: this.HideModalEvent
                        })
                      )
                    )
                )
              );
            }),
            Object(l.c)([$.a], e.prototype, "DoPartnerEventLoad", null),
            Object(l.c)(
              [$.a],
              e.prototype,
              "OnOpenPreviewAsPartnerEvent",
              null
            ),
            Object(l.c)([$.a], e.prototype, "OnViewEvent", null),
            Object(l.c)([$.a], e.prototype, "OnPostNewsEvent", null),
            Object(l.c)([$.a], e.prototype, "OnUpdateNewsEvent", null),
            Object(l.c)([$.a], e.prototype, "HideModalEvent", null),
            Object(l.c)([$.a], e.prototype, "OnClanEventCreateSuccess", null),
            Object(l.c)([$.a], e.prototype, "OnShowRawRSS", null),
            (e = Object(l.c)([P.observer], e))
          );
        })(d.a.Component),
        Z = (function(t) {
          function n() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                initialState: n.DetermineStartState(e.props),
                step: n.DetermineStartState(e.props),
                bDraftMode: !0
              }),
              (e.m_Admin = C.Get()),
              e
            );
          }
          return (
            Object(l.d)(n, t),
            (n.DetermineStartState = function(e) {
              var t = C.Get().BHasSetupFeed(e.strRSSUrl);
              return e.newsData && t
                ? e.bUpdatePost
                  ? "update_post"
                  : "create_post"
                : e.bActivatePooling
                ? "activate_feed"
                : C.Get().BHasSavedRSSURL()
                ? "update_feed"
                : "feed_missing";
            }),
            (n.prototype.OnCreateNewsFeed = function() {
              this.setState({ step: "creating_feed" }, this.DoCreateNewsFeed);
            }),
            (n.prototype.DoCreateNewsFeed = function() {
              return Object(l.b)(this, void 0, void 0, function() {
                var t;
                return Object(l.e)(this, function(e) {
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
                              strErrorMessage: Object(V.d)(
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
              return Object(l.b)(this, void 0, void 0, function() {
                var t;
                return Object(l.e)(this, function(e) {
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
                              strErrorMessage: Object(V.d)(
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
                return Object(V.d)(
                  this.props.bUpdatePost
                    ? "#RSSManager_PostEvent_UpdateEvent"
                    : "#RSSManager_PostEvent_Tilte"
                );
              switch (this.state.initialState) {
                case "feed_missing":
                  return Object(V.d)("#RSSManager_PostEvent_CreateFeedTitle");
                default:
                case "update_feed":
                  return Object(V.d)("#RSSManager_PostEvent_UpdateFeedTitle");
                case "activate_feed":
                  return Object(V.d)("#RSSManager_Status_Automation_Activate");
              }
            }),
            (n.prototype.render = function() {
              var e = this.props.strRSSUrl;
              switch (this.state.step) {
                case "feed_missing":
                case "activate_feed":
                case "update_feed":
                default:
                  return d.a.createElement(
                    N.d,
                    null,
                    d.a.createElement(G.i, null, " ", this.GetStrTitle(), " "),
                    d.a.createElement(
                      G.a,
                      null,
                      d.a.createElement(
                        G.b,
                        null,
                        this.props.newsData &&
                          d.a.createElement(
                            "div",
                            null,
                            Object(V.d)(
                              "#RSSManager_PostEvent_CreateFeed_DuringPost"
                            )
                          ),
                        Boolean("activate_feed" !== this.state.step) &&
                          d.a.createElement(
                            "div",
                            null,
                            Object(V.d)(
                              "#RSSManager_PostEvent_CreateFeed_Desc",
                              e
                            )
                          ),
                        d.a.createElement(
                          "div",
                          null,
                          Object(V.d)("#RSSManager_CreateFeed_Review")
                        ),
                        d.a.createElement(
                          "div",
                          null,
                          d.a.createElement(G.d, {
                            label: Object(V.d)(
                              "#RSSManager_CreateFeed_Permissions_v1"
                            ),
                            onChange: this.OnChangePermissionsCreateFeed,
                            checked: Boolean(this.state.bPermissions)
                          })
                        ),
                        d.a.createElement(
                          "div",
                          null,
                          d.a.createElement(G.d, {
                            label: Object(V.d)(
                              "#RSSManager_CreateFeed_Conduct_v1"
                            ),
                            onChange: this.OnChangeConductCreateFeed,
                            checked: Boolean(this.state.bConduct)
                          }),
                          d.a.createElement(
                            W.a,
                            { href: g.c.STORE_BASE_URL + "online_conduct/" },
                            Object(V.d)("#RSSManager_CreateFeed_Conduct_Link")
                          )
                        )
                      ),
                      d.a.createElement(
                        G.h,
                        null,
                        d.a.createElement(G.l, {
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
                  return d.a.createElement(
                    N.e,
                    {
                      strDescription: Object(V.d)(
                        "#RSSManager_PostEvent_Failure"
                      ),
                      closeModal: this.props.closeModal
                    },
                    d.a.createElement(
                      "div",
                      null,
                      Object(V.d)(
                        "#Error_Description",
                        this.state.eResult,
                        this.state.strErrorMessage
                      )
                    )
                  );
                case "creating_feed":
                case "waiting_post":
                  return d.a.createElement(
                    N.c,
                    {
                      strTitle: this.GetStrTitle(),
                      strDescription: Object(V.d)(
                        "#RSSManager_PostEvent_InFlight"
                      ),
                      closeModal: this.props.closeModal
                    },
                    d.a.createElement(z.a, { position: "center" })
                  );
                case "create_post":
                  return d.a.createElement(
                    N.d,
                    null,
                    d.a.createElement(G.i, null, " ", this.GetStrTitle(), " "),
                    d.a.createElement(
                      G.a,
                      null,
                      d.a.createElement(
                        G.b,
                        null,
                        d.a.createElement(
                          "div",
                          null,
                          d.a.createElement(
                            "div",
                            null,
                            Object(V.d)("#RSSManager_PostEvent_CreatePost")
                          ),
                          d.a.createElement(
                            "div",
                            { className: Q.DialogPostTitle },
                            this.props.newsData.title
                          ),
                          d.a.createElement("br", null),
                          d.a.createElement(
                            "div",
                            null,
                            d.a.createElement(G.d, {
                              label: Object(V.d)(
                                "#RSSManager_PostEvent_CreatePost_Draft"
                              ),
                              onChange: this.OnChangeDraftMode,
                              checked: Boolean(this.state.bDraftMode)
                            })
                          )
                        )
                      ),
                      d.a.createElement(
                        G.h,
                        null,
                        d.a.createElement(G.l, {
                          onOK: this.OnCreatePost,
                          onCancel: this.props.closeModal
                        })
                      )
                    )
                  );
                case "update_post":
                  return d.a.createElement(
                    N.d,
                    null,
                    d.a.createElement(G.i, null, " ", this.GetStrTitle(), " "),
                    d.a.createElement(
                      G.a,
                      null,
                      d.a.createElement(
                        G.b,
                        null,
                        d.a.createElement(
                          "div",
                          null,
                          d.a.createElement(
                            "div",
                            null,
                            Object(V.d)("#RSSManager_PostEvent_UpdatePost")
                          ),
                          d.a.createElement("br", null),
                          d.a.createElement(
                            "div",
                            { className: Q.DialogPostTitle },
                            this.props.newsData.title
                          ),
                          d.a.createElement("br", null)
                        )
                      ),
                      d.a.createElement(
                        G.h,
                        null,
                        d.a.createElement(G.l, {
                          onOK: this.OnCreatePost,
                          onCancel: this.props.closeModal
                        })
                      )
                    )
                  );
                case "success":
                  return d.a.createElement(
                    N.c,
                    {
                      strTitle: this.GetStrTitle(),
                      strDescription: Object(V.d)(
                        this.props.newsData
                          ? "#RSSManager_PostEvent_Success"
                          : "#RSSManager_PostEvent_Success_feed"
                      ),
                      closeModal: this.props.closeModal,
                      bAlertDialog: !0
                    },
                    Boolean(this.state.eventGID) &&
                      d.a.createElement(
                        "a",
                        {
                          href:
                            g.c.COMMUNITY_BASE_URL +
                            "gid/" +
                            this.m_Admin
                              .GetClanSteamID()
                              .ConvertTo64BitString() +
                            "/partnerevents/edit/" +
                            this.state.eventGID
                        },
                        Object(V.d)("#RSSManager_PostEvent_EventLink")
                      )
                  );
              }
            }),
            Object(l.c)([$.a], n.prototype, "OnCreateNewsFeed", null),
            Object(l.c)([$.a], n.prototype, "DoCreateNewsFeed", null),
            Object(l.c)([$.a], n.prototype, "OnCreatePost", null),
            Object(l.c)([$.a], n.prototype, "DoCreatePost", null),
            Object(l.c)([$.a], n.prototype, "OnChangeDraftMode", null),
            Object(l.c)(
              [$.a],
              n.prototype,
              "OnChangePermissionsCreateFeed",
              null
            ),
            Object(l.c)([$.a], n.prototype, "OnChangeConductCreateFeed", null),
            Object(l.c)([$.a], n.prototype, "GetStrTitle", null),
            n
          );
        })(d.a.Component),
        ee = n("IjL/"),
        te = n("9w6b"),
        ne = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bIsLoading: !0 }), e;
          }
          return (
            Object(l.d)(e, t),
            (e.prototype.componentDidMount = function() {
              return Object(l.b)(this, void 0, void 0, function() {
                return Object(l.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return C.Get(), [4, te.a.InitGlobal()];
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
                  : d.a.createElement(
                      ee.a,
                      null,
                      d.a.createElement(
                        a.d,
                        null,
                        d.a.createElement(a.b, {
                          exact: !0,
                          path:
                            "/(curator|pub|publisher|dev|developer|franchise)/:curator_vanity/admin/manage_rss",
                          component: Y
                        }),
                        d.a.createElement(a.b, null, !1)
                      )
                    )
              );
            }),
            e
          );
        })(d.a.Component);
      t.default = ne;
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
        ViewRaw: "managerss_ViewRaw_2jvHr"
      };
    }
  }
]);
