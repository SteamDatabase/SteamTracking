/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    "0OaU": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return c;
      });
      var i = r("q1tI"),
        n = r.n(i),
        s = r("6Y59"),
        a = r("2i24"),
        o = r.n(a);
      class c extends n.a.PureComponent {
        constructor(e) {
          super(e);
        }
        AddSizeClass(e) {
          "small" == this.props.size
            ? e.push(o.a.throbber_small)
            : "medium" == this.props.size
            ? e.push(o.a.throbber_medium)
            : "xlarge" == this.props.size
            ? e.push(o.a.throbber_xlarge)
            : "xxlarge" == this.props.size
            ? e.push(o.a.throbber_xxlarge)
            : e.push(o.a.throbber_large);
        }
        render() {
          let e = [o.a.LoadingWrapper, "SteamLogoThrobber"];
          this.AddSizeClass(e),
            void 0 === this.props.string && e.push(o.a.noString),
            this.props.className && e.push(this.props.className),
            this.props.static && e.push(o.a.Static);
          let t = n.a.createElement(
            "div",
            { className: e.join(" ") },
            n.a.createElement(
              "div",
              { className: o.a.Throbber },
              n.a.createElement(s.nb, { className: o.a.base }),
              n.a.createElement(s.nb, { className: o.a.blur })
            )
          );
          return n.a.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? o.a.throbber_center_wrapper
                  : "",
            },
            t,
            Boolean(this.props.string) &&
              n.a.createElement(
                "div",
                { className: o.a.ThrobberText },
                this.props.string
              )
          );
        }
      }
    },
    "2ErG": function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return a;
      }),
        r.d(t, "a", function () {
          return c;
        });
      var i = r("hRO2"),
        n = r("OS8t");
      const s = i.Message;
      class a extends s {
        constructor(e = null) {
          super(),
            a.prototype.bincremental || n.a(a.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
                fields: {
                  bincremental: { n: 1, br: n.d.readBool, bw: n.h.writeBool },
                  friends: { n: 2, c: o, r: !0, q: !0 },
                  max_friend_count: {
                    n: 3,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  active_friend_count: {
                    n: 4,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  friends_limit_hit: {
                    n: 5,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                },
              }),
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = n.e(a.M())), a.sm_mbf;
        }
        toObject(e = !1) {
          return a.toObject(e, this);
        }
        static toObject(e, t) {
          return n.g(a.M(), e, t);
        }
        static fromObject(e) {
          return n.c(a.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new a();
          return a.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.b(a.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.f(a.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList";
        }
      }
      class o extends s {
        constructor(e = null) {
          super(),
            o.prototype.ulfriendid || n.a(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  ulfriendid: {
                    n: 1,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                  efriendrelationship: {
                    n: 2,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.e(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.g(o.M(), e, t);
        }
        static fromObject(e) {
          return n.c(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.b(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.f(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList_Friend";
        }
      }
      class c extends s {
        constructor(e = null) {
          super(),
            c.prototype.persona_state || n.a(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  persona_state: {
                    n: 1,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  player_name: {
                    n: 2,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  is_auto_generated_name: {
                    n: 3,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  high_priority: { n: 4, br: n.d.readBool, bw: n.h.writeBool },
                  persona_set_by_user: {
                    n: 5,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  persona_state_flags: {
                    n: 6,
                    d: 0,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  need_persona_response: {
                    n: 7,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  is_client_idle: { n: 8, br: n.d.readBool, bw: n.h.writeBool },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.e(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.g(c.M(), e, t);
        }
        static fromObject(e) {
          return n.c(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.b(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.f(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientChangeStatus";
        }
      }
    },
    TX96: function (e, t, r) {
      "use strict";
      var i = r("mrSG"),
        n = r("K5Iu"),
        s = r("H7XF"),
        a = r("hRO2"),
        o = r("lkRc"),
        c = r("bxBv"),
        l = r("kLLr"),
        d = r("mC9v"),
        m = r("NtSG"),
        h = r("2ErG"),
        _ = r("2vnA"),
        b = r("mgoM"),
        u = (r("kyHq"), r("OS8t")),
        g = r("RD/U");
      const C = a.Message;
      class p extends C {
        constructor(e = null) {
          super(),
            p.prototype.send_reply || u.a(p.M()),
            C.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  send_reply: { n: 1, br: u.d.readBool, bw: u.h.writeBool },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = u.e(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return u.g(p.M(), e, t);
        }
        static fromObject(e) {
          return u.c(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.b(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.f(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientHeartBeat";
        }
      }
      class w extends C {
        constructor(e = null) {
          super(),
            w.prototype.client_request_timestamp || u.a(w.M()),
            C.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  client_request_timestamp: {
                    n: 1,
                    br: u.d.readUint64String,
                    bw: u.h.writeUint64String,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = u.e(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return u.g(w.M(), e, t);
        }
        static fromObject(e) {
          return u.c(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.b(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.f(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientServerTimestampRequest";
        }
      }
      class S extends C {
        constructor(e = null) {
          super(),
            S.prototype.client_request_timestamp || u.a(S.M()),
            C.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  client_request_timestamp: {
                    n: 1,
                    br: u.d.readUint64String,
                    bw: u.h.writeUint64String,
                  },
                  server_timestamp_ms: {
                    n: 2,
                    br: u.d.readUint64String,
                    bw: u.h.writeUint64String,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = u.e(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return u.g(S.M(), e, t);
        }
        static fromObject(e) {
          return u.c(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.b(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.f(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientServerTimestampResponse";
        }
      }
      class M extends C {
        constructor(e = null) {
          super(),
            M.prototype.eresult || u.a(M.M()),
            C.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  eresult: {
                    n: 1,
                    d: 2,
                    br: u.d.readInt32,
                    bw: u.h.writeInt32,
                  },
                  legacy_out_of_game_heartbeat_seconds: {
                    n: 2,
                    br: u.d.readInt32,
                    bw: u.h.writeInt32,
                  },
                  heartbeat_seconds: {
                    n: 3,
                    br: u.d.readInt32,
                    bw: u.h.writeInt32,
                  },
                  deprecated_public_ip: {
                    n: 4,
                    br: u.d.readUint32,
                    bw: u.h.writeUint32,
                  },
                  rtime32_server_time: {
                    n: 5,
                    br: u.d.readFixed32,
                    bw: u.h.writeFixed32,
                  },
                  account_flags: {
                    n: 6,
                    br: u.d.readUint32,
                    bw: u.h.writeUint32,
                  },
                  cell_id: { n: 7, br: u.d.readUint32, bw: u.h.writeUint32 },
                  email_domain: {
                    n: 8,
                    br: u.d.readString,
                    bw: u.h.writeString,
                  },
                  steam2_ticket: {
                    n: 9,
                    br: u.d.readBytes,
                    bw: u.h.writeBytes,
                  },
                  eresult_extended: {
                    n: 10,
                    br: u.d.readInt32,
                    bw: u.h.writeInt32,
                  },
                  webapi_authenticate_user_nonce: {
                    n: 11,
                    br: u.d.readString,
                    bw: u.h.writeString,
                  },
                  cell_id_ping_threshold: {
                    n: 12,
                    br: u.d.readUint32,
                    bw: u.h.writeUint32,
                  },
                  deprecated_use_pics: {
                    n: 13,
                    br: u.d.readBool,
                    bw: u.h.writeBool,
                  },
                  vanity_url: {
                    n: 14,
                    br: u.d.readString,
                    bw: u.h.writeString,
                  },
                  public_ip: { n: 15, c: g.d },
                  client_supplied_steamid: {
                    n: 20,
                    br: u.d.readFixed64String,
                    bw: u.h.writeFixed64String,
                  },
                  ip_country_code: {
                    n: 21,
                    br: u.d.readString,
                    bw: u.h.writeString,
                  },
                  parental_settings: {
                    n: 22,
                    br: u.d.readBytes,
                    bw: u.h.writeBytes,
                  },
                  parental_setting_signature: {
                    n: 23,
                    br: u.d.readBytes,
                    bw: u.h.writeBytes,
                  },
                  count_loginfailures_to_migrate: {
                    n: 24,
                    br: u.d.readInt32,
                    bw: u.h.writeInt32,
                  },
                  count_disconnects_to_migrate: {
                    n: 25,
                    br: u.d.readInt32,
                    bw: u.h.writeInt32,
                  },
                  ogs_data_report_time_window: {
                    n: 26,
                    br: u.d.readInt32,
                    bw: u.h.writeInt32,
                  },
                  client_instance_id: {
                    n: 27,
                    br: u.d.readUint64String,
                    bw: u.h.writeUint64String,
                  },
                  force_client_update_check: {
                    n: 28,
                    br: u.d.readBool,
                    bw: u.h.writeBool,
                  },
                  agreement_session_url: {
                    n: 29,
                    br: u.d.readString,
                    bw: u.h.writeString,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = u.e(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return u.g(M.M(), e, t);
        }
        static fromObject(e) {
          return u.c(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.b(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.f(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientLogonResponse";
        }
      }
      class B extends C {
        constructor(e = null) {
          super(),
            B.prototype.persona_name || u.a(B.M()),
            C.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  persona_name: {
                    n: 1,
                    br: u.d.readString,
                    bw: u.h.writeString,
                  },
                  ip_country: { n: 2, br: u.d.readString, bw: u.h.writeString },
                  count_authed_computers: {
                    n: 5,
                    br: u.d.readInt32,
                    bw: u.h.writeInt32,
                  },
                  account_flags: {
                    n: 7,
                    br: u.d.readUint32,
                    bw: u.h.writeUint32,
                  },
                  facebook_id: {
                    n: 8,
                    br: u.d.readUint64String,
                    bw: u.h.writeUint64String,
                  },
                  facebook_name: {
                    n: 9,
                    br: u.d.readString,
                    bw: u.h.writeString,
                  },
                  steamguard_notify_newmachines: {
                    n: 14,
                    br: u.d.readBool,
                    bw: u.h.writeBool,
                  },
                  steamguard_machine_name_user_chosen: {
                    n: 15,
                    br: u.d.readString,
                    bw: u.h.writeString,
                  },
                  is_phone_verified: {
                    n: 16,
                    br: u.d.readBool,
                    bw: u.h.writeBool,
                  },
                  two_factor_state: {
                    n: 17,
                    br: u.d.readUint32,
                    bw: u.h.writeUint32,
                  },
                  is_phone_identifying: {
                    n: 18,
                    br: u.d.readBool,
                    bw: u.h.writeBool,
                  },
                  is_phone_needing_reverify: {
                    n: 19,
                    br: u.d.readBool,
                    bw: u.h.writeBool,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = u.e(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return u.g(B.M(), e, t);
        }
        static fromObject(e) {
          return u.c(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.b(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.f(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientAccountInfo";
        }
      }
      a.Message;
      const y = a.Message;
      class f extends y {
        constructor(e = null) {
          super(),
            f.prototype.server_types_available || u.a(f.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  server_types_available: { n: 1, c: v, r: !0, q: !0 },
                  server_type_for_auth_services: {
                    n: 2,
                    br: u.d.readUint32,
                    bw: u.h.writeUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = u.e(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return u.g(f.M(), e, t);
        }
        static fromObject(e) {
          return u.c(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.b(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.f(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientServersAvailable";
        }
      }
      class v extends y {
        constructor(e = null) {
          super(),
            v.prototype.server || u.a(v.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  server: { n: 1, br: u.d.readUint32, bw: u.h.writeUint32 },
                  changed: { n: 2, br: u.d.readBool, bw: u.h.writeBool },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = u.e(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return u.g(v.M(), e, t);
        }
        static fromObject(e) {
          return u.c(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.b(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.f(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientServersAvailable_Server_Types_Available";
        }
      }
      var O = r("qiKp"),
        L = r("r64O");
      r("E4Op");
      class R {
        constructor(e = !1) {
          (this.m_bRunOnce = !1),
            (this.m_ClientConnectionCallbacks = new O.a()),
            (this.m_mapServerTypeCallbacks = new Map()),
            (this.m_bRunOnce = e);
        }
        RunCallbacks(e, ...t) {
          void 0 === e
            ? (this.m_ClientConnectionCallbacks.Dispatch(...t),
              this.m_bRunOnce &&
                this.m_ClientConnectionCallbacks.ClearAllCallbacks())
            : this.m_mapServerTypeCallbacks.has(e) &&
              (this.m_mapServerTypeCallbacks.get(e).Dispatch(...t),
              this.m_bRunOnce && this.m_mapServerTypeCallbacks.delete(e));
        }
        RunAllCallbacks(e, ...t) {
          this.RunCallbacks(void 0, ...t),
            e.forEach((e) => this.RunCallbacks(e, ...t));
        }
        AddCallback(e, t) {
          let r = this.m_ClientConnectionCallbacks;
          return (
            void 0 !== t &&
              (this.m_mapServerTypeCallbacks.has(t) ||
                this.m_mapServerTypeCallbacks.set(t, new O.a()),
              (r = this.m_mapServerTypeCallbacks.get(t))),
            r.Register(e)
          );
        }
      }
      function I(e, t) {
        return () => {
          try {
            e();
          } catch (e) {
            console.error(`Error in ${t} callback:`, e);
          }
        };
      }
      class k {
        constructor() {
          (this.m_steamid = new l.a()),
            (this.m_bLoggedOn = !1),
            (this.m_bCompletedInitialConnect = !1),
            (this.m_unAccountFlags = 0),
            (this.m_strIPCountry = ""),
            (this.m_strPersonaName = ""),
            (this.m_bConnected = !1),
            (this.m_bConnectionFailed = !1),
            (this.m_setConnectedServers = new Set()),
            (this.m_callbacksOnConnectOneTime = new R(!0)),
            (this.m_callbacksOnConnect = new R()),
            (this.m_callbacksOnDisconnect = new R()),
            (this.m_bForceDisconnect = !1),
            (this.m_bPerformedInitialClockAdjustment = !1),
            (this.m_nWallClockDriftMS = 0),
            (this.m_nPerfClockServerMSOffset =
              new Date().getTime() - performance.now()),
            (this.ClientServersAvailableHandler = Object(n.a)(5501, f, (e) => {
              let t = new Set(this.m_setConnectedServers);
              for (let r of e.Body().server_types_available()) {
                let e = r.server();
                void 0 !== e &&
                  (this.m_bLoggedOn &&
                    ((this.m_setConnectedServers.has(e) && !r.changed()) ||
                      (r.changed() &&
                        this.m_setConnectedServers.has(e) &&
                        this.m_callbacksOnDisconnect.RunCallbacks(e, !1),
                      this.m_callbacksOnConnect.RunCallbacks(e),
                      this.m_callbacksOnConnectOneTime.RunCallbacks(e))),
                  this.m_setConnectedServers.add(e),
                  t.delete(e));
              }
              t.forEach((e) => {
                this.m_setConnectedServers.delete(e),
                  this.m_bLoggedOn &&
                    this.m_callbacksOnDisconnect.RunCallbacks(e, !1);
              });
            })),
            (this.m_ServiceTransport = {
              SendMsg: (e, t, r) => (
                t.SetEMsg(151),
                t.Hdr().set_target_job_name(e),
                this.SendMsgAndAwaitResponse(t, r)
              ),
              SendNotification: (e, t) => (
                t.SetEMsg(151), t.Hdr().set_target_job_name(e), this.Send(t)
              ),
            }),
            window &&
              window.addEventListener &&
              window.addEventListener("unload", (e) => {
                this.ForceDisconnect();
              });
        }
        get steamid() {
          return this.m_steamid;
        }
        get logged_on() {
          return this.m_bLoggedOn;
        }
        get persona_name() {
          return this.m_strPersonaName;
        }
        BDisconnected() {
          return !this.logged_on && this.m_steamid.BIsValid();
        }
        BConnectedToServer(e) {
          return void 0 === e
            ? this.m_bLoggedOn
            : this.m_setConnectedServers.has(e);
        }
        get has_completed_initial_connect() {
          return this.m_bCompletedInitialConnect;
        }
        get account_flags() {
          return this.m_unAccountFlags;
        }
        GetServiceTransport() {
          return this.m_ServiceTransport;
        }
        GetAnonymousServiceTransport() {
          return this.m_ServiceTransport;
        }
        RunWhenLoggedOn(e, t) {
          let r = I(e, "RunWhenLoggedOn");
          this.BConnectedToServer(t)
            ? r()
            : this.m_callbacksOnConnectOneTime.AddCallback(r, t);
        }
        WaitUntilLoggedOn() {
          return new Promise((e) => this.RunWhenLoggedOn(e));
        }
        AddOnLogonCallback(e, t) {
          let r = I(e, "AddOnLogonCallback");
          return (
            this.BConnectedToServer(t) && r(),
            this.m_callbacksOnConnect.AddCallback(r, t)
          );
        }
        AddOnDisconnectCallback(e, t) {
          let r = (function (e, t) {
            return (r) => {
              try {
                e(r);
              } catch (e) {
                console.error(`Error in ${t} callback:`, e);
              }
            };
          })(e, "AddOnDisconnectCallback");
          this.m_callbacksOnDisconnect.AddCallback(r, t);
        }
        ForceDisconnect() {
          (this.m_bForceDisconnect = !0), this.Disconnect();
        }
        Send(e) {
          return (
            !!this.BIsConnected() &&
            (this.DEBUG_LogCMInterfaceActivity(e, "send"), this.SendInternal(e))
          );
        }
        BInternalShouldDispatchMessage(e) {
          return !0;
        }
        ResolveAwaitWithTransportError(e, t, r, i) {
          let n = c.b.Init(t);
          n.Hdr().set_eresult(2),
            n.Hdr().set_transport_error(r),
            i && n.Hdr().set_error_message(i),
            e(n);
        }
        DispatchMessage(e) {
          try {
            if (!this.BInternalShouldDispatchMessage(e)) return;
            if (e.BIsValid()) {
              let t = (t) => {
                t.Hdr().set_jobid_target(e.Hdr().jobid_source()), this.Send(t);
              };
              n.b.DispatchMsgToHandlers(e, t) ||
                this.DEBUG_LogCMInterfaceActivity(e, "receive", !1);
            } else
              console.error(
                "CMInterface RECV could not parse message of type " +
                  Object(m.a)(e.GetEMsg()) +
                  " " +
                  e.GetEMsg()
              );
          } catch (t) {
            console.error(
              `CMInterface RECV exception thrown while processing message of type ${Object(
                m.a
              )(e.GetEMsg())}`,
              t
            ),
              e.DEBUG_LogToConsole();
          }
        }
        BIsConnected() {
          return this.m_bConnected;
        }
        OnConnect() {
          (this.m_bConnected = !0),
            (this.m_bConnectionFailed = !1),
            (this.m_bForceDisconnect = !1);
        }
        OnLoggedOn() {
          (this.m_bCompletedInitialConnect = !0),
            this.InternalAdjustClock(),
            this.m_callbacksOnConnect.RunAllCallbacks(
              this.m_setConnectedServers
            ),
            this.m_callbacksOnConnectOneTime.RunAllCallbacks(
              this.m_setConnectedServers
            );
        }
        OnDisconnect() {
          (this.m_bConnected = !1),
            (this.m_bConnectionFailed = !0),
            (this.m_onConnect = void 0),
            (this.m_bLoggedOn = !1),
            (this.m_unAccountFlags = 0),
            (this.m_strIPCountry = ""),
            this.m_callbacksOnDisconnect.RunAllCallbacks(
              this.m_setConnectedServers,
              this.m_bForceDisconnect
            ),
            this.m_setConnectedServers.clear();
        }
        DEBUG_LogCMInterfaceActivity(e, t, r = !0) {
          0;
        }
        DEBUG_LogMessage(e, ...t) {
          0;
        }
        InternalAdjustClock() {
          return Object(i.a)(this, void 0, void 0, function* () {
            let e = c.b.Init(w, 9802);
            return (
              e
                .Body()
                .set_client_request_timestamp(
                  Math.floor(performance.now()).toString()
                ),
              this.SendMsgAndAwaitResponse(e, S).then((e) => {
                let t = performance.now(),
                  r = new Date(),
                  i = parseInt(e.Body().client_request_timestamp()),
                  n = parseInt(e.Body().server_timestamp_ms()) - ((t - i) >> 1);
                return (
                  n && !isNaN(n) && t && !isNaN(t)
                    ? ((this.m_bPerformedInitialClockAdjustment = !0),
                      (this.m_nPerfClockServerMSOffset = n - t),
                      (this.m_nWallClockDriftMS = r.getTime() - n))
                    : Object(L.a)(
                        !1,
                        `Error computing server time, server echo: ${i} server time ${n}`
                      ),
                  !0
                );
              })
            );
          });
        }
        BPerformedInitialClockAdjustment() {
          return this.m_bPerformedInitialClockAdjustment;
        }
        GetServerTimeMS() {
          return performance.now() + this.m_nPerfClockServerMSOffset;
        }
        GetServerRTime32() {
          return Math.floor(
            (performance.now() + this.m_nPerfClockServerMSOffset) / 1e3
          );
        }
        RTime32ToDate(e) {
          return new Date(1e3 * e + this.m_nWallClockDriftMS);
        }
      }
      Object(i.b)([_.C], k.prototype, "m_steamid", void 0),
        Object(i.b)([_.C], k.prototype, "m_bLoggedOn", void 0),
        Object(i.b)([_.C], k.prototype, "m_bCompletedInitialConnect", void 0),
        Object(i.b)([_.C], k.prototype, "m_unAccountFlags", void 0),
        Object(i.b)([_.C], k.prototype, "m_strIPCountry", void 0),
        Object(i.b)([_.C], k.prototype, "m_strPersonaName", void 0),
        Object(i.b)([_.C], k.prototype, "m_bConnected", void 0),
        Object(i.b)(
          [_.C],
          k.prototype,
          "m_bPerformedInitialClockAdjustment",
          void 0
        ),
        Object(i.b)([_.k], k.prototype, "DispatchMessage", null),
        Object(i.b)([_.k], k.prototype, "OnDisconnect", null);
      Object(i.b)(
        [_.k],
        class extends k {
          constructor() {
            super(...arguments),
              (this.m_setEMsgHandlers = new Set()),
              (this.m_setServiceMethodHandlers = new Set());
          }
          SendMsgAndAwaitResponse(e, t) {
            return new Promise((r, i) => {
              if (this.m_hSharedConnection) {
                this.DEBUG_LogCMInterfaceActivity(e, "send");
                let i = s.fromByteArray(e.Serialize());
                void 0 !==
                SteamClient.SharedConnection.SendMsgAndAwaitBinaryResponse
                  ? SteamClient.SharedConnection.SendMsgAndAwaitBinaryResponse(
                      this.m_hSharedConnection,
                      i
                    )
                      .then((e) => {
                        let i = new d.a(e),
                          n = c.b.InitFromPacket(t, i);
                        this.DEBUG_LogCMInterfaceActivity(n, "receive", !0),
                          n.BIsValid()
                            ? r(n)
                            : this.ResolveAwaitWithTransportError(
                                r,
                                t,
                                102,
                                "Failed to parse response from server"
                              );
                      })
                      .catch((e) => {
                        this.ResolveAwaitWithTransportError(r, t, 2, e);
                      })
                  : SteamClient.SharedConnection.SendMsgAndAwaitResponse(
                      this.m_hSharedConnection,
                      i
                    )
                      .then((e) => {
                        let i = new d.a(s.toByteArray(e)),
                          n = c.b.InitFromPacket(t, i);
                        this.DEBUG_LogCMInterfaceActivity(n, "receive", !0),
                          n.BIsValid()
                            ? r(n)
                            : this.ResolveAwaitWithTransportError(
                                r,
                                t,
                                102,
                                "Failed to parse response from server"
                              );
                      })
                      .catch((e) => {
                        this.ResolveAwaitWithTransportError(r, t, 2, e);
                      });
              }
            });
          }
          SendInternal(e) {
            let t = s.fromByteArray(e.Serialize());
            return (
              SteamClient.SharedConnection.SendMsg(this.m_hSharedConnection, t),
              !0
            );
          }
          OnMsgRecvd(e) {
            let t = new d.a(e),
              r = c.a.InitHeaderFromPacket(t);
            this.DispatchMessage(r);
          }
          OnLogonInfoChanged(e) {
            this.DEBUG_LogMessage("Login info from client: ", e),
              (this.m_bLoggedOn = e.bLoggedOn),
              (o.c.EUNIVERSE = e.eUniverse),
              (o.c.MEDIA_CDN_COMMUNITY_URL = e.strCommunityImagesURL),
              e.strSteamid
                ? ((this.m_steamid = new l.a(e.strSteamid)),
                  (this.m_strPersonaName = e.strPersonaName),
                  (o.h.logged_in = e.bLoggedOn),
                  (o.h.steamid = e.strSteamid),
                  (o.h.accountid = this.m_steamid.GetAccountID()),
                  (o.h.account_name = e.strAccountName))
                : 0 != this.m_steamid.GetAccountID() &&
                  (this.m_steamid = new l.a()),
              this.m_bLoggedOn
                ? (this.m_bConnected || this.OnConnect(), this.OnLoggedOn())
                : this.OnDisconnect();
          }
          Connect() {
            return this.m_hSharedConnection
              ? Promise.resolve()
              : (this.m_onConnect = new Promise((e, t) => {
                  SteamClient.SharedConnection.AllocateSharedConnection()
                    .then((r) => {
                      r
                        ? (this.OnSharedConnectionEstablished(r),
                          this.DEBUG_LogMessage(
                            "obtained handle ",
                            this.m_hSharedConnection
                          ),
                          this.OnConnect(),
                          e())
                        : t();
                    })
                    .catch(t);
                }));
          }
          OnSharedConnectionEstablished(e) {
            (this.m_hSharedConnection = e),
              this.m_setEMsgHandlers.clear(),
              this.m_setServiceMethodHandlers.clear(),
              this.m_hEMsgRegistrationObserver &&
                this.m_hEMsgRegistrationObserver(),
              (this.m_hEMsgRegistrationObserver = Object(_.l)(() => {
                if (this.m_hSharedConnection) {
                  for (let e of n.b.emsg_list)
                    this.m_setEMsgHandlers.has(e) ||
                      (this.m_setEMsgHandlers.add(e),
                      SteamClient.SharedConnection.SubscribeToEMsg(
                        this.m_hSharedConnection,
                        e
                      ));
                  for (let e of n.b.servicemethod_list)
                    this.m_setServiceMethodHandlers.has(e) ||
                      (this.m_setServiceMethodHandlers.add(e),
                      SteamClient.SharedConnection.SubscribeToClientServiceMethod(
                        this.m_hSharedConnection,
                        e
                      ));
                }
              }));
            let t = !1;
            SteamClient.SharedConnection.RegisterOnLogonInfoChanged(
              this.m_hSharedConnection,
              (e) => {
                this.OnLogonInfoChanged(e),
                  t ||
                    ((t = !0),
                    void 0 !==
                    SteamClient.SharedConnection.RegisterOnBinaryMessageReceived
                      ? SteamClient.SharedConnection.RegisterOnBinaryMessageReceived(
                          this.m_hSharedConnection,
                          this.OnMsgRecvd.bind(this)
                        )
                      : SteamClient.SharedConnection.RegisterOnMessageReceived(
                          this.m_hSharedConnection,
                          (e) => this.OnMsgRecvd(s.toByteArray(e))
                        ));
              }
            );
          }
          OnConnect() {
            super.OnConnect();
          }
          Disconnect() {
            if (this.m_hSharedConnection) {
              let e = c.b.Init(h.a, 716);
              e.Body().set_persona_state(0),
                e.Body().set_persona_set_by_user(!1),
                this.Send(e),
                SteamClient.SharedConnection.Close(this.m_hSharedConnection),
                this.OnSharedConnectionClosed();
            }
          }
          OnSharedConnectionClosed() {
            super.OnDisconnect(),
              (this.m_hSharedConnection = void 0),
              this.m_setEMsgHandlers.clear(),
              this.m_hEMsgRegistrationObserver &&
                (this.m_hEMsgRegistrationObserver(),
                (this.m_hEMsgRegistrationObserver = void 0));
          }
          SendHeartbeat() {}
          ClearHeartbeatInterval() {}
          ResetHeartbeatInterval() {}
        }.prototype,
        "OnLogonInfoChanged",
        null
      );
      var T = r("16wW"),
        z = r("vDqi"),
        F = r.n(z);
      r("75qM");
      class j {
        constructor() {
          this.m_CMList = { rgCMList: [], rtLastLoaded: 0 };
        }
        Init(e) {
          (this.m_Storage = e), (this.m_InitPromise = this.LoadFromCache());
        }
        LoadFromCache() {
          return Object(i.a)(this, void 0, void 0, function* () {
            if (this.m_InitPromise) return this.m_InitPromise;
            const e = yield this.m_Storage.GetObject(this.GetLocalStorageKey());
            return (t = e) &&
              "object" == typeof t &&
              Array.isArray(t.rgCMList) &&
              "number" == typeof t.rtLastLoaded
              ? ((this.m_CMList = e), this.m_CMList)
              : ((this.m_CMList = { rgCMList: [], rtLastLoaded: 0 }),
                this.WriteCMListToLocalStorage(),
                this.m_CMList);
            var t;
          });
        }
        GetBestCMsToConnectTo() {
          return Object(i.a)(this, void 0, void 0, function* () {
            try {
              let e = yield this.LoadFromCache();
              (!e.rgCMList.length ||
                Date.now() / 1e3 - e.rtLastLoaded > 604800) &&
                ((this.m_CMList = yield this.GetCMListFromWebAPI()),
                this.WriteCMListToLocalStorage());
            } catch (e) {
              console.error(
                `There was a problem loading CM list. Attempting to use stale data. ${e}`
              );
            }
            return this.PingCMs();
          });
        }
        RecordCMDisconnected(e) {
          (e.nConnectFailures = (e.nConnectFailures || 0) + 1),
            (e.msPing = Number.MAX_SAFE_INTEGER),
            (e.nCMLoad = Number.MAX_SAFE_INTEGER),
            this.WriteCMListToLocalStorage();
        }
        BuildCMWebSocketURL(e) {
          return "wss://" + this.FixDevHost(e) + "/cmsocket/";
        }
        FixDevHost(e) {
          if (
            4 == o.c.EUNIVERSE &&
            "dev" == o.c.WEB_UNIVERSE &&
            e.match(/^127\.0\.0\.1/)
          ) {
            let t = o.c.WEBAPI_BASE_URL.match(/https?:\/\/([^\/:]*)/);
            if (t && t[1]) return e.replace(/^127\.0\.0\.1/, t[1]);
          }
          return e;
        }
        GetLocalStorageKey() {
          return "CCMList_" + o.c.EUNIVERSE;
        }
        WriteCMListToLocalStorage() {
          this.m_Storage.StoreObject(this.GetLocalStorageKey(), this.m_CMList);
        }
        GetCMListFromWebAPI() {
          return Object(i.a)(this, void 0, void 0, function* () {
            try {
              const r = yield ((e = D),
                (t = 1e4),
                () =>
                  new Promise((r, i) => {
                    let n = !1;
                    const s = window.setTimeout(() => {
                      (n = !0), i(new Error("Timed out"));
                    }, t);
                    e().then(
                      (e) => {
                        n || (clearTimeout(s), r(e));
                      },
                      (e) => {
                        n || (clearTimeout(s), i(e));
                      }
                    );
                  }))(),
                i = this.m_CMList.rgCMList.reduce(
                  (e, t) =>
                    Object.assign(Object.assign({}, e), { [t.strHost]: t }),
                  {}
                );
              return {
                rgCMList: r.map((e) =>
                  Object.assign(Object.assign({}, i[e.strHost] || {}), e)
                ),
                rtLastLoaded: new Date().getTime() / 1e3,
              };
            } catch (e) {
              throw new Error("Failed to load CM List from webapi");
            }
            var e, t;
          });
        }
        PingCMs() {
          let e = new Date().getTime() / 1e3 - 18e3,
            t = [];
          const r = {};
          for (const i of this.m_CMList.rgCMList) {
            const n = A(i),
              s = !n || i.rtLastCheck < e;
            s && t.length < 20 && t.push(i),
              (s && !o.c.IN_MOBILE) || (n && n < 1e4 && (r[i.strHost] = i));
          }
          t.length;
          let i = !1;
          return new Promise((e, n) => {
            let s,
              a,
              c = "immediate",
              l = (t) => {
                if (
                  (Object(L.a)(!i, "fnPingingComplete called a second time"),
                  !i)
                ) {
                  const r = Object.keys(t)
                    .map((e) => t[e])
                    .sort((e, t) => A(e) - A(t));
                  if (
                    (r.length,
                    r.length && r[0].strHost,
                    (i = !0),
                    this.WriteCMListToLocalStorage(),
                    s && window.clearTimeout(s),
                    a && window.clearTimeout(a),
                    r.length)
                  )
                    return e(r);
                  const o = this.GetCMWithFewestDisconnects();
                  if (o) return e([o]);
                  n("No CMs available");
                }
              };
            (0 === t.length ||
              Object.keys(r).some((e) => this.BCMOkToUse(r[e], c)) ||
              (o.c.IN_MOBILE && Object.keys(r).length)) &&
              (Object.keys(r).length && o.c.IN_MOBILE, l(r)),
              i ||
                ((s = window.setTimeout(() => {
                  (c = "timeout"),
                    !i &&
                      Object.keys(r).some((e) => this.BCMOkToUse(r[e], c)) &&
                      l(r);
                }, 400)),
                (a = window.setTimeout(() => {
                  (c = "seriouslytimeout"), l(r);
                }, 12e3)));
            let d,
              m = 0,
              h = 0,
              _ = (e) => {
                !i && this.BCMOkToUse(e, c)
                  ? l({ [e.strHost]: e })
                  : (r[e.strHost] = e),
                  (!i && d()) ||
                    (0 == --h &&
                      (i
                        ? this.WriteCMListToLocalStorage()
                        : this.BCMOkToUse(e, "seriouslytimeout")
                        ? l({ [e.strHost]: e })
                        : ((r[e.strHost] = e), l(r))));
              };
            d = () => {
              if (m < t.length) {
                let e = t[m++];
                return (
                  this.PingCM(e).then(() => {
                    _(e);
                  }),
                  !0
                );
              }
              return !1;
            };
            for (let e = 0; e < 4; e++) d() && h++;
          });
        }
        GetCMWithFewestDisconnects() {
          if (!this.m_CMList.rgCMList.length) return;
          let e = this.m_CMList.rgCMList[0],
            t = 1;
          for (
            ;
            e.nConnectFailures > 0 && t < this.m_CMList.rgCMList.length;

          ) {
            let r = this.m_CMList.rgCMList[t++];
            (!r.nConnectFailures || r.nConnectFailures < e.nConnectFailures) &&
              (e = r);
          }
          return e && this.FixDevHost(e.strHost), e;
        }
        BCMOkToUse(e, t) {
          if (!e) return !1;
          let r = e.msPing + e.nCMLoad;
          return (
            (r < 80 && e.msPing < 60) ||
            ("immediate" !== t &&
              ((r < 140 && e.msPing < 100) ||
                ("timeout" !== t && r < 350 && e.msPing < 275)))
          );
        }
        PingCM(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            let t = "https://" + this.FixDevHost(e.strHost) + "/cmping/",
              r = performance.now();
            const i = F.a.CancelToken.source();
            let n = window.setTimeout(() => {
              e.strHost, i.cancel();
            }, 1e3);
            try {
              let s = yield F.a.head(t, { cancelToken: i.token });
              e.strHost, window.clearTimeout(n);
              let a = performance.now() - r,
                o = s.headers["x-steam-cmload"]
                  ? parseInt(s.headers["x-steam-cmload"])
                  : void 0;
              e.strHost, (e.msPing = a), (e.nCMLoad = o);
            } catch (t) {
              F.a.isCancel(t) ? e.strHost : window.clearTimeout(n),
                (e.msPing = 1e4),
                (e.nCMLoad = 0);
            }
            return (e.rtLastCheck = new Date().getTime() / 1e3), e.msPing;
          });
        }
      }
      function D() {
        return Object(i.a)(this, void 0, void 0, function* () {
          const e =
              o.c.WEBAPI_BASE_URL + "ISteamDirectory/GetCMList/v1/?cellid=0",
            t = (yield F.a.get(e)).data,
            r = (t && t.response && t.response.serverlist_websockets) || [];
          return r.length, r.map((e, t) => ({ strHost: e, nPriority: t }));
        });
      }
      function A(e) {
        return (e.msPing || 0) + (e.nCMLoad || 0);
      }
      Object(i.b)(
        [_.k],
        class extends k {
          constructor(e) {
            super(),
              (this.m_Session = {
                m_bWaitingForLogonResponse: !1,
                m_nSessionID: 0,
                m_eResultLogonSuccess: 2,
                m_nSessionIDLast: 0,
                m_nClientInstanceID: "0",
              }),
              (this.m_bLoadingCMList = !1),
              (this.m_iCallSeq = 1),
              (this.m_mapWaitingCallbacks = new Map()),
              (this.m_CMList = new j()),
              (this.LogOnResponseHandler = Object(n.a)(751, M, (e) => {
                let t = e.Body().eresult();
                (this.m_Session.m_bWaitingForLogonResponse = !1),
                  (this.m_Session.m_eResultLogonSuccess = t),
                  1 == t
                    ? ((this.m_steamid = new l.a(
                        e.Body().client_supplied_steamid()
                      )),
                      (this.m_bLoggedOn = !0),
                      (this.m_Session.m_nSessionID = e
                        .Hdr()
                        .client_sessionid()),
                      (this.m_Session.m_nSessionIDLast = this.m_Session.m_nSessionID),
                      (this.m_Session.m_nClientInstanceID = e
                        .Body()
                        .client_instance_id()),
                      this.OnLoggedOn())
                    : (console.warn(
                        "Received error code from LogOnResponse, disconnecting. EResult=",
                        e.Body().eresult()
                      ),
                      48 == t &&
                        this.m_CMList.RecordCMDisconnected(this.m_SocketCMHost),
                      this.Disconnect());
              })),
              (this.ClientAccountInfoHandler = Object(n.a)(768, B, (e) => {
                (this.m_unAccountFlags = e.Body().account_flags() || 0),
                  (this.m_strIPCountry = e.Body().ip_country() || ""),
                  (this.m_strPersonaName = e.Body().persona_name() || "");
              })),
              this.m_CMList.Init(e);
          }
          BIsConnected() {
            return this.m_Socket && this.m_Socket.readyState == WebSocket.OPEN;
          }
          Connect() {
            return (
              this.m_onConnect ||
                (console.log("Loading CM List"),
                (this.m_bConnected = !1),
                (this.m_bLoggedOn = !1),
                (this.m_bForceDisconnect = !1),
                (this.m_Session.m_bWaitingForLogonResponse = !0),
                (this.m_bLoadingCMList = !0),
                (this.m_onConnect = this.m_CMList
                  .GetBestCMsToConnectTo()
                  .then(
                    (e) => (
                      (this.m_bLoadingCMList = !1),
                      new Promise((t, r) => {
                        let i = 0,
                          n = !1;
                        e.slice(0, 3).forEach((e, s, a) =>
                          this.AttemptHostConnect(e).then(
                            (r) => {
                              n
                                ? r.close(4e3)
                                : ((n = !0),
                                  (this.m_Socket = r),
                                  (this.m_SocketCMHost = e),
                                  (this.m_bConnected = !0),
                                  this.OnConnect(),
                                  t());
                            },
                            () => {
                              console.log(
                                `Failed to connect to CM ${s + 1} of ${
                                  a.length
                                }: ${e.strHost}`
                              ),
                                i++,
                                i === a.length &&
                                  (console.log(
                                    `Failed to connect to all ${a.length} best CMs`
                                  ),
                                  r());
                            }
                          )
                        );
                      })
                    )
                  )
                  .catch((e) => {
                    throw (
                      ((this.m_bLoadingCMList = !1), this.OnDisconnect(), e)
                    );
                  }))),
              this.m_onConnect
            );
          }
          AttemptHostConnect(e) {
            console.log(`Attempting to connect to host ${e.strHost}`);
            let t = new WebSocket(this.m_CMList.BuildCMWebSocketURL(e.strHost));
            return (
              (t.binaryType = "arraybuffer"),
              (t.onmessage = (e) => {
                let t = new d.a(e.data),
                  r = c.a.InitHeaderFromPacket(t);
                1 == r.GetEMsg()
                  ? this.DecodeAndDispatchMultiMsg(c.b.InitFromMsg(g.e, r))
                  : this.DispatchMessage(r);
              }),
              new Promise((r, i) => {
                let n = !1;
                const s = window.setTimeout(() => {
                  console.warn(
                    `Socket connection timed out after 3000ms: ${e.strHost}`
                  ),
                    (n = !0),
                    t.close(4e3),
                    this.m_CMList.RecordCMDisconnected(e),
                    i();
                }, 3e3);
                (t.onopen = () => {
                  console.log(`Connected socket to host ${e.strHost}`),
                    Object(L.a)(
                      !n,
                      "Socket connection was opened after timing out."
                    ),
                    n || window.clearTimeout(s),
                    r(t);
                }),
                  (t.onerror = (t) => {
                    n ||
                      (window.clearTimeout(s),
                      Object(L.a)(!1, "Socket connect failed", t),
                      this.m_CMList.RecordCMDisconnected(e),
                      i());
                  });
              })
            );
          }
          get session() {
            return this.m_Session;
          }
          ClearHeartbeatInterval() {
            this.m_iIntervalHeartbeat &&
              (window.clearInterval(this.m_iIntervalHeartbeat),
              (this.m_iIntervalHeartbeat = void 0));
          }
          ResetHeartbeatInterval() {
            this.ClearHeartbeatInterval(),
              (this.m_iIntervalHeartbeat = window.setInterval(
                () => this.SendHeartbeat(),
                27e3
              ));
          }
          SendHeartbeat() {
            let e = c.b.Init(p, 703);
            this.Send(e);
          }
          OnConnect() {
            super.OnConnect(),
              this.m_Socket &&
                ((this.m_Socket.onerror = (e) => {}),
                this.ResetHeartbeatInterval(),
                (this.m_Socket.onclose = (e) => {
                  this.OnDisconnect();
                }));
          }
          Disconnect() {
            this.m_Socket && this.m_Socket.close();
          }
          OnDisconnect() {
            (this.m_Socket = void 0),
              (this.m_SocketCMHost = void 0),
              (this.m_onConnect = void 0),
              this.ClearHeartbeatInterval(),
              super.OnDisconnect();
          }
          SendMsgAndAwaitResponse(e, t) {
            return new Promise((r, i) => {
              let n = this.m_iCallSeq++;
              e.Hdr().set_jobid_source("" + n),
                this.Send(e)
                  ? this.m_mapWaitingCallbacks.set(n, {
                      iSeq: n,
                      msgClass: t,
                      fnCallback: r,
                    })
                  : this.ResolveAwaitWithTransportError(
                      r,
                      t,
                      2,
                      "Web socket not connected"
                    );
            });
          }
          SendInternal(e) {
            return (
              !!this.m_Socket &&
              (this.m_steamid.BIsValid() &&
                e.Hdr().set_steamid(this.m_steamid.ConvertTo64BitString()),
              this.m_Session.m_nSessionID &&
                e.Hdr().set_client_sessionid(this.m_Session.m_nSessionID),
              this.m_Socket.send(e.Serialize()),
              703 != e.GetEMsg() && this.ResetHeartbeatInterval(),
              !0)
            );
          }
          BInternalShouldDispatchMessage(e) {
            if (
              e.BIsValid() &&
              e.Hdr().jobid_target() &&
              e.Hdr().jobid_target() !== b.e
            ) {
              let t = parseInt(e.Hdr().jobid_target());
              if (this.m_mapWaitingCallbacks.has(t)) {
                let r = this.m_mapWaitingCallbacks.get(t);
                if (r) {
                  let i = c.b.InitFromMsg(r.msgClass, e);
                  this.DEBUG_LogCMInterfaceActivity(i, "receive", !0),
                    i.BIsValid()
                      ? r.fnCallback(i)
                      : this.ResolveAwaitWithTransportError(
                          r.fnCallback,
                          r.msgClass,
                          102,
                          "Failed to parse response from server"
                        ),
                    this.m_mapWaitingCallbacks.delete(t);
                }
                return !1;
              }
              this.DEBUG_LogCMInterfaceActivity(e, "receive", !1);
            }
            return !0;
          }
          DecodeAndDispatchMultiMsg(e) {
            let t = e.Body().message_body();
            if (!t) return;
            e.Body().size_unzipped() && (t = T.inflate(t));
            let r = new d.a(t);
            for (; r.GetCountBytesRemaining() > 0; ) {
              let e = r.GetUint32(),
                t = c.a.InitHeaderFromPacket(
                  new d.a(r.GetPacket(), r.TellGet(), e)
                );
              this.DispatchMessage(t), r.SeekGetCurrent(e);
            }
          }
        }.prototype,
        "DecodeAndDispatchMultiMsg",
        null
      );
    },
  },
]);
