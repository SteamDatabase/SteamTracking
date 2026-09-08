/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5659],
  {
    6330: (e, t, r) => {
      r.d(t, {
        NI: () => Me,
        QG: () => qe,
        JE: () => Ae,
        MG: () => ve,
        e6: () => Te,
        CS: () => Ve,
        ds: () => Le,
        LK: () => Re,
        hd: () => Ee,
        cc: () => Xe,
        tU: () => be,
        S4: () => Ce,
        $q: () => Je,
        ZR: () => De,
        OT: () => s,
        pk: () => c,
        nf: () => n,
        rj: () => u,
        D4: () => i,
        T: () => l,
        V$: () => a,
        EO: () => at,
      });
      var i = {};
      r.r(i),
        r.d(i, {
          Sk: () => T,
          pw: () => R,
          EK: () => S,
          SK: () => C,
          vm: () => f,
          H5: () => w,
          KO: () => p,
          xl: () => I,
          eV: () => k,
          RV: () => F,
          OD: () => M,
          T9: () => y,
          k6: () => j,
          IT: () => B,
          QY: () => b,
          eH: () => O,
          W8: () => z,
          QJ: () => h,
        });
      var s = {};
      r.r(s),
        r.d(s, {
          vy: () => W,
          uA: () => G,
          Zb: () => D,
          By: () => v,
          gI: () => U,
          jA: () => q,
        });
      var a = {};
      r.r(a), r.d(a, { Mj: () => L, fy: () => A, QP: () => P });
      var n = {};
      r.r(n), r.d(n, { pE: () => N, Ln: () => H, Q2: () => x, u: () => E });
      var l = {};
      r.r(l), r.d(l, { rz: () => K, RZ: () => $, XG: () => V });
      var c = {};
      r.r(c),
        r.d(c, {
          om: () => J,
          we: () => X,
          A_: () => te,
          V5: () => Y,
          SN: () => ce,
          XU: () => re,
          LY: () => ie,
          FS: () => Q,
          wZ: () => Z,
          Ky: () => se,
          yz: () => ae,
          tA: () => ne,
          QN: () => le,
          CE: () => ee,
        });
      var u = {};
      r.r(u),
        r.d(u, {
          H: () => pe,
          k2: () => _e,
          GS: () => de,
          CT: () => me,
          BA: () => oe,
          TO: () => ge,
          q1: () => ue,
        });
      var o = r(80613),
        m = r.n(o),
        _ = r(89068),
        g = r(56545),
        d = r(30570);
      const p = 0,
        M = 1,
        h = 2,
        B = 3,
        y = 4,
        b = 5,
        f = 6,
        R = 7,
        w = 8,
        S = 9,
        z = 10,
        I = 11,
        T = 12,
        k = 13,
        C = 14,
        O = 15,
        j = 16,
        F = 17,
        v = 0,
        W = 1,
        q = 2,
        U = 3,
        D = 4,
        G = 5,
        A = 1,
        P = 2,
        L = 3,
        x = 1,
        N = 2,
        E = 3,
        H = 5,
        $ = 0,
        V = 1,
        K = 2,
        Y = 0,
        Q = 1,
        J = 2,
        Z = 3,
        X = 4,
        ee = 5,
        te = 6,
        re = 7,
        ie = 8,
        se = 9,
        ae = 10,
        ne = 11,
        le = 12,
        ce = 13,
        ue = 0,
        oe = 1,
        me = 3,
        _e = 4,
        ge = 5,
        de = 6,
        pe = 7;
      class Me extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.gid || _.Sg(Me.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  gid: {
                    n: 1,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                  title: { n: 2, br: _.qM.readString, bw: _.gp.writeString },
                  type: { n: 3, br: _.qM.readEnum, bw: _.gp.writeEnum },
                  visibility: { n: 4, br: _.qM.readEnum, bw: _.gp.writeEnum },
                  priority: { n: 5, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                  association_type: {
                    n: 6,
                    br: _.qM.readEnum,
                    bw: _.gp.writeEnum,
                  },
                  associated_id: {
                    n: 7,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  associated_name: {
                    n: 8,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  start_date: {
                    n: 9,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  end_date: {
                    n: 10,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  country_allow: {
                    n: 11,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  country_deny: {
                    n: 12,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  ownership_restrictions_overridden: {
                    n: 13,
                    br: _.qM.readBool,
                    bw: _.gp.writeBool,
                  },
                  must_own_appid: {
                    n: 14,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  must_not_own_appid: {
                    n: 15,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  must_own_packageid: {
                    n: 16,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  must_not_own_packageid: {
                    n: 17,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  must_have_launched_appid: {
                    n: 18,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  additional_restrictions: {
                    n: 19,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  template_type: {
                    n: 20,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  template_vars: {
                    n: 21,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  flags: { n: 22, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                  creator_name: {
                    n: 23,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  template_vars_json: {
                    n: 24,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  additional_restrictions_json: {
                    n: 25,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = _.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Me.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessageProto";
        }
      }
      class he extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.gid || _.Sg(he.M()),
            o.Message.initialize(this, e, 0, -1, [12], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  gid: {
                    n: 1,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                  title: { n: 2, br: _.qM.readString, bw: _.gp.writeString },
                  type: { n: 3, br: _.qM.readEnum, bw: _.gp.writeEnum },
                  associated_item_id: { n: 4, c: d.O4 },
                  associated_item: { n: 5, c: d.vB },
                  associated_name: {
                    n: 6,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  template_type: {
                    n: 10,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  template_vars_json: {
                    n: 11,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  recommended_items: { n: 12, c: d.O4, r: !0, q: !0 },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = _.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(he.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDisplayMarketingMessage";
        }
      }
      class Be extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.country || _.Sg(Be.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  country: { n: 1, br: _.qM.readString, bw: _.gp.writeString },
                  anonymous_user: {
                    n: 2,
                    br: _.qM.readBool,
                    bw: _.gp.writeBool,
                  },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = _.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Be.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetActiveMarketingMessages_Request";
        }
      }
      class ye extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.messages || _.Sg(ye.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  messages: { n: 1, c: Me, r: !0, q: !0 },
                  time_next_message_age: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = _.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(ye.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetActiveMarketingMessages_Response";
        }
      }
      class be extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.start_past_days || _.Sg(be.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  start_past_days: {
                    n: 1,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  upto_past_days: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = _.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(be.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetPastMarketingMessages_Request";
        }
      }
      class fe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.messages || _.Sg(fe.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: { messages: { n: 1, c: Me, r: !0, q: !0 } },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = _.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(fe.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetPastMarketingMessages_Response";
        }
      }
      class Re extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.include_seen_messages || _.Sg(Re.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  include_seen_messages: {
                    n: 1,
                    br: _.qM.readBool,
                    bw: _.gp.writeBool,
                  },
                  country_code: {
                    n: 2,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  elanguage: { n: 3, br: _.qM.readInt32, bw: _.gp.writeInt32 },
                  operating_system: {
                    n: 4,
                    br: _.qM.readInt32,
                    bw: _.gp.writeInt32,
                  },
                  client_package_version: {
                    n: 5,
                    br: _.qM.readInt32,
                    bw: _.gp.writeInt32,
                  },
                  context: { n: 6, c: d.TS },
                  data_request: { n: 7, c: d.gn },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = _.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Re.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Request";
        }
      }
      class we extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.messages || _.Sg(we.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: { messages: { n: 1, c: Se, r: !0, q: !0 } },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = _.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(we.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Response";
        }
      }
      class Se extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.already_seen || _.Sg(Se.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  already_seen: { n: 1, br: _.qM.readBool, bw: _.gp.writeBool },
                  message: { n: 2, c: he },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = _.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Se.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser";
        }
      }
      class ze extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.country_code || _.Sg(ze.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  country_code: {
                    n: 2,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  elanguage: { n: 3, br: _.qM.readInt32, bw: _.gp.writeInt32 },
                  operating_system: {
                    n: 4,
                    br: _.qM.readInt32,
                    bw: _.gp.writeInt32,
                  },
                  client_package_version: {
                    n: 5,
                    br: _.qM.readInt32,
                    bw: _.gp.writeInt32,
                  },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = _.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(ze.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Request";
        }
      }
      class Ie extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.has_pending_messages || _.Sg(Ie.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  has_pending_messages: {
                    n: 1,
                    br: _.qM.readBool,
                    bw: _.gp.writeBool,
                  },
                  pending_message_count: {
                    n: 2,
                    br: _.qM.readInt32,
                    bw: _.gp.writeInt32,
                  },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = _.w0(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Ie.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Response";
        }
      }
      class Te extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.gid || _.Sg(Te.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  gid: {
                    n: 1,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                  context: { n: 2, c: d.TS },
                  data_request: { n: 3, c: d.gn },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = _.w0(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Te.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetDisplayMarketingMessage_Request";
        }
      }
      class ke extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.message || _.Sg(ke.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = { proto: ke, fields: { message: { n: 1, c: he } } }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = _.w0(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(ke.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new ke();
          return ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetDisplayMarketingMessage_Response";
        }
      }
      class Ce extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.gid || _.Sg(Ce.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  gid: {
                    n: 1,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                  display_index: {
                    n: 2,
                    d: 0,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  template_type: {
                    n: 3,
                    d: ue,
                    br: _.qM.readEnum,
                    bw: _.gp.writeEnum,
                  },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = _.w0(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Ce.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Ce();
          return Ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_MarkMessageSeen_Notification";
        }
      }
      class Oe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.gid || _.Sg(Oe.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  gid: {
                    n: 1,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                  display_index: {
                    n: 2,
                    d: 0,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  template_type: {
                    n: 3,
                    d: ue,
                    br: _.qM.readEnum,
                    bw: _.gp.writeEnum,
                  },
                  click_location: {
                    n: 4,
                    d: 0,
                    br: _.qM.readEnum,
                    bw: _.gp.writeEnum,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = _.w0(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Oe.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_MarkMessageClicked_Notification";
        }
      }
      class je extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.gid || _.Sg(je.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  gid: {
                    n: 1,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = _.w0(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(je.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessage_Request";
        }
      }
      class Fe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.message || _.Sg(Fe.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = { proto: Fe, fields: { message: { n: 1, c: Me } } }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = _.w0(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Fe.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessage_Response";
        }
      }
      class ve extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.lookup_type || _.Sg(ve.M()),
            o.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  lookup_type: { n: 1, br: _.qM.readEnum, bw: _.gp.writeEnum },
                  gid: {
                    n: 2,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                  message_type: { n: 3, br: _.qM.readEnum, bw: _.gp.writeEnum },
                  gidlist: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: _.qM.readFixed64String,
                    pbr: _.qM.readPackedFixed64String,
                    bw: _.gp.writeRepeatedFixed64String,
                  },
                  title: { n: 5, br: _.qM.readString, bw: _.gp.writeString },
                  associated_id: {
                    n: 6,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = _.w0(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(ve.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_FindMarketingMessages_Request";
        }
      }
      class We extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.messages || _.Sg(We.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: { messages: { n: 1, c: Me, r: !0, q: !0 } },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = _.w0(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(We.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_FindMarketingMessages_Response";
        }
      }
      class qe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.message || _.Sg(qe.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  message: { n: 1, c: Me },
                  from_json: { n: 2, br: _.qM.readBool, bw: _.gp.writeBool },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = _.w0(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(qe.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_CreateMarketingMessage_Request";
        }
      }
      class Ue extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.gid || _.Sg(Ue.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  gid: {
                    n: 1,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = _.w0(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Ue.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_CreateMarketingMessage_Response";
        }
      }
      class De extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.gid || _.Sg(De.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  gid: {
                    n: 1,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                  message: { n: 2, c: Me },
                  from_json: { n: 3, br: _.qM.readBool, bw: _.gp.writeBool },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = _.w0(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(De.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(De.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new De();
          return De.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(De.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(De.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_UpdateMarketingMessage_Request";
        }
      }
      class Ge extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ge();
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Ge();
          return Ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_UpdateMarketingMessage_Response";
        }
      }
      class Ae extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.gid || _.Sg(Ae.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  gid: {
                    n: 1,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = _.w0(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Ae.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Ae();
          return Ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DeleteMarketingMessage_Request";
        }
      }
      class Pe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Pe();
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DeleteMarketingMessage_Response";
        }
      }
      class Le extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Le.prototype.gid || _.Sg(Le.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: {
                  gid: {
                    n: 1,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                },
              }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = _.w0(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Le.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Le();
          return Le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessageViewerStats_Request";
        }
      }
      class xe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.rt_time_hour || _.Sg(xe.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  rt_time_hour: {
                    n: 1,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  seen_count: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  template_type: {
                    n: 3,
                    br: _.qM.readEnum,
                    bw: _.gp.writeEnum,
                  },
                  display_index: {
                    n: 4,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = _.w0(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(xe.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessageHourlyStats";
        }
      }
      class Ne extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.stats || _.Sg(Ne.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: { stats: { n: 1, c: xe, r: !0, q: !0 } },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = _.w0(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Ne.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Ne();
          return Ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessageViewerStats_Response";
        }
      }
      class Ee extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.rt_start_time || _.Sg(Ee.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  rt_start_time: {
                    n: 1,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  rt_end_time: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = _.w0(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Ee.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Ee();
          return Ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesViewerRangeStats_Request";
        }
      }
      class He extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            He.prototype.rt_time_hour || _.Sg(He.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            He.sm_m ||
              (He.sm_m = {
                proto: He,
                fields: {
                  rt_time_hour: {
                    n: 1,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  clicked_count: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  display_index: {
                    n: 3,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  template_type: {
                    n: 4,
                    br: _.qM.readEnum,
                    bw: _.gp.writeEnum,
                  },
                  click_location: {
                    n: 5,
                    br: _.qM.readEnum,
                    bw: _.gp.writeEnum,
                  },
                },
              }),
            He.sm_m
          );
        }
        static MBF() {
          return He.sm_mbf || (He.sm_mbf = _.w0(He.M())), He.sm_mbf;
        }
        toObject(e = !1) {
          return He.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(He.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(He.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new He();
          return He.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(He.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(He.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessageClickedHourlyStats";
        }
      }
      class $e extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $e.prototype.stats || _.Sg($e.M()),
            o.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $e.sm_m ||
              ($e.sm_m = {
                proto: $e,
                fields: {
                  stats: { n: 1, c: xe, r: !0, q: !0 },
                  clicked_stats: { n: 2, c: He, r: !0, q: !0 },
                },
              }),
            $e.sm_m
          );
        }
        static MBF() {
          return $e.sm_mbf || ($e.sm_mbf = _.w0($e.M())), $e.sm_mbf;
        }
        toObject(e = !1) {
          return $e.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT($e.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq($e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new $e();
          return $e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj($e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0($e.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return $e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesViewerRangeStats_Response";
        }
      }
      class Ve extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ve.prototype.gid || _.Sg(Ve.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ve.sm_m ||
              (Ve.sm_m = {
                proto: Ve,
                fields: {
                  gid: {
                    n: 1,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                },
              }),
            Ve.sm_m
          );
        }
        static MBF() {
          return Ve.sm_mbf || (Ve.sm_mbf = _.w0(Ve.M())), Ve.sm_mbf;
        }
        toObject(e = !1) {
          return Ve.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Ve.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Ve();
          return Ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessageClickedStats_Request";
        }
      }
      class Ke extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ke.prototype.stats || _.Sg(Ke.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ke.sm_m ||
              (Ke.sm_m = {
                proto: Ke,
                fields: { stats: { n: 1, c: He, r: !0, q: !0 } },
              }),
            Ke.sm_m
          );
        }
        static MBF() {
          return Ke.sm_mbf || (Ke.sm_mbf = _.w0(Ke.M())), Ke.sm_mbf;
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Ke.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Ke();
          return Ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessageClickedStats_Response";
        }
      }
      class Ye extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ye.prototype.partnerid || _.Sg(Ye.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ye.sm_m ||
              (Ye.sm_m = {
                proto: Ye,
                fields: {
                  partnerid: {
                    n: 1,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            Ye.sm_m
          );
        }
        static MBF() {
          return Ye.sm_mbf || (Ye.sm_mbf = _.w0(Ye.M())), Ye.sm_mbf;
        }
        toObject(e = !1) {
          return Ye.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Ye.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Ye();
          return Ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetPartnerReadyToPublishMessages_Request";
        }
      }
      class Qe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qe.prototype.messages || _.Sg(Qe.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Qe.sm_m ||
              (Qe.sm_m = {
                proto: Qe,
                fields: { messages: { n: 1, c: he, r: !0, q: !0 } },
              }),
            Qe.sm_m
          );
        }
        static MBF() {
          return Qe.sm_mbf || (Qe.sm_mbf = _.w0(Qe.M())), Qe.sm_mbf;
        }
        toObject(e = !1) {
          return Qe.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Qe.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Qe();
          return Qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetPartnerReadyToPublishMessages_Response";
        }
      }
      class Je extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Je.prototype.gid || _.Sg(Je.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Je.sm_m ||
              (Je.sm_m = {
                proto: Je,
                fields: {
                  gid: {
                    n: 1,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                  partnerid: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            Je.sm_m
          );
        }
        static MBF() {
          return Je.sm_mbf || (Je.sm_mbf = _.w0(Je.M())), Je.sm_mbf;
        }
        toObject(e = !1) {
          return Je.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Je.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Je();
          return Je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Je.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_PartnerPublishMessage_Request";
        }
      }
      class Ze extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ze.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ze();
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Ze();
          return Ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_PartnerPublishMessage_Response";
        }
      }
      class Xe extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xe.prototype.gid || _.Sg(Xe.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: {
                  gid: {
                    n: 1,
                    br: _.qM.readFixed64String,
                    bw: _.gp.writeFixed64String,
                  },
                  partnerid: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            Xe.sm_m
          );
        }
        static MBF() {
          return Xe.sm_mbf || (Xe.sm_mbf = _.w0(Xe.M())), Xe.sm_mbf;
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(Xe.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(Xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Xe();
          return Xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(Xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(Xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetPartnerMessagePreview_Request";
        }
      }
      class et extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            et.prototype.message || _.Sg(et.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            et.sm_m ||
              (et.sm_m = { proto: et, fields: { message: { n: 1, c: Me } } }),
            et.sm_m
          );
        }
        static MBF() {
          return et.sm_mbf || (et.sm_mbf = _.w0(et.M())), et.sm_mbf;
        }
        toObject(e = !1) {
          return et.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(et.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(et.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new et();
          return et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(et.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(et.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetPartnerMessagePreview_Response";
        }
      }
      class tt extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            tt.prototype.appids || _.Sg(tt.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            tt.sm_m ||
              (tt.sm_m = {
                proto: tt,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: _.qM.readUint32,
                    pbr: _.qM.readPackedUint32,
                    bw: _.gp.writeRepeatedUint32,
                  },
                },
              }),
            tt.sm_m
          );
        }
        static MBF() {
          return tt.sm_mbf || (tt.sm_mbf = _.w0(tt.M())), tt.sm_mbf;
        }
        toObject(e = !1) {
          return tt.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(tt.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(tt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new tt();
          return tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessage_GetMarketingMessagesForApps_Request";
        }
      }
      class rt extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            rt.prototype.messages || _.Sg(rt.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            rt.sm_m ||
              (rt.sm_m = {
                proto: rt,
                fields: { messages: { n: 1, c: Me, r: !0, q: !0 } },
              }),
            rt.sm_m
          );
        }
        static MBF() {
          return rt.sm_mbf || (rt.sm_mbf = _.w0(rt.M())), rt.sm_mbf;
        }
        toObject(e = !1) {
          return rt.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(rt.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(rt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new rt();
          return rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(rt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(rt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessage_GetMarketingMessagesForApps_Response";
        }
      }
      class it extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            it.prototype.partnerid || _.Sg(it.M()),
            o.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            it.sm_m ||
              (it.sm_m = {
                proto: it,
                fields: {
                  partnerid: {
                    n: 1,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            it.sm_m
          );
        }
        static MBF() {
          return it.sm_mbf || (it.sm_mbf = _.w0(it.M())), it.sm_mbf;
        }
        toObject(e = !1) {
          return it.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(it.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(it.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new it();
          return it.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(it.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(it.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return it.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessage_GetMarketingMessagesForPartner_Request";
        }
      }
      class st extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            st.prototype.messages || _.Sg(st.M()),
            o.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            st.sm_m ||
              (st.sm_m = {
                proto: st,
                fields: { messages: { n: 1, c: Me, r: !0, q: !0 } },
              }),
            st.sm_m
          );
        }
        static MBF() {
          return st.sm_mbf || (st.sm_mbf = _.w0(st.M())), st.sm_mbf;
        }
        toObject(e = !1) {
          return st.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(st.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(st.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new st();
          return st.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(st.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(st.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return st.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessage_GetMarketingMessagesForPartner_Response";
        }
      }
      var at;
      !(function (e) {
        (e.GetActiveMarketingMessages = function (e, t, r) {
          return e.SendMsg(
            "MarketingMessages.GetActiveMarketingMessages#1",
            (0, g.I8)(Be, t, r),
            ye,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetPastMarketingMessages = function (e, t, r) {
            return e.SendMsg(
              "MarketingMessages.GetPastMarketingMessages#1",
              (0, g.I8)(be, t, r),
              fe,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetMarketingMessagesForUser = function (e, t, r) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessagesForUser#1",
              (0, g.I8)(Re, t, r),
              we,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.DoesUserHavePendingMarketingMessages = function (e, t, r) {
            return e.SendMsg(
              "MarketingMessages.DoesUserHavePendingMarketingMessages#1",
              (0, g.I8)(ze, t, r),
              Ie,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetDisplayMarketingMessage = function (e, t, r) {
            return e.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessage#1",
              (0, g.I8)(Te, t, r),
              ke,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetDisplayMarketingMessageForUser = function (e, t, r) {
            return e.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessageForUser#1",
              (0, g.I8)(Te, t, r),
              ke,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetDisplayMarketingMessageAdmin = function (e, t, r) {
            return e.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessageAdmin#1",
              (0, g.I8)(Te, t, r),
              ke,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.MarkMessageSeen = function (e, t) {
            return e.SendNotification(
              "MarketingMessages.MarkMessageSeen#1",
              (0, g.I8)(Ce, t),
              { ePrivilege: 1 },
            );
          }),
          (e.MarkMessageClicked = function (e, t) {
            return e.SendNotification(
              "MarketingMessages.MarkMessageClicked#1",
              (0, g.I8)(Oe, t),
              { ePrivilege: 1 },
            );
          }),
          (e.GetMarketingMessage = function (e, t, r) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessage#1",
              (0, g.I8)(je, t, r),
              Fe,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.CreateMarketingMessage = function (e, t, r) {
            return e.SendMsg(
              "MarketingMessages.CreateMarketingMessage#1",
              (0, g.I8)(qe, t, r),
              Ue,
              { ePrivilege: 4 },
            );
          }),
          (e.UpdateMarketingMessage = function (e, t, r) {
            return e.SendMsg(
              "MarketingMessages.UpdateMarketingMessage#1",
              (0, g.I8)(De, t, r),
              Ge,
              { ePrivilege: 5 },
            );
          }),
          (e.DeleteMarketingMessage = function (e, t, r) {
            return e.SendMsg(
              "MarketingMessages.DeleteMarketingMessage#1",
              (0, g.I8)(Ae, t, r),
              Pe,
              { ePrivilege: 4 },
            );
          }),
          (e.FindMarketingMessages = function (e, t, r) {
            return e.SendMsg(
              "MarketingMessages.FindMarketingMessages#1",
              (0, g.I8)(ve, t, r),
              We,
              { ePrivilege: 5 },
            );
          }),
          (e.GetMarketingMessageViewerStats = function (e, t, r) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessageViewerStats#1",
              (0, g.I8)(Le, t, r),
              Ne,
              { ePrivilege: 4 },
            );
          }),
          (e.GetMarketingMessagesViewerRangeStats = function (e, t, r) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessagesViewerRangeStats#1",
              (0, g.I8)(Ee, t, r),
              $e,
              { ePrivilege: 4 },
            );
          }),
          (e.GetMarketingMessageClickedStats = function (e, t, r) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessageClickedStats#1",
              (0, g.I8)(Ve, t, r),
              Ke,
              { ePrivilege: 4 },
            );
          }),
          (e.GetPartnerReadyToPublishMessages = function (e, t, r) {
            return e.SendMsg(
              "MarketingMessages.GetPartnerReadyToPublishMessages#1",
              (0, g.I8)(Ye, t, r),
              Qe,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.PublishPartnerMessage = function (e, t, r) {
            return e.SendMsg(
              "MarketingMessages.PublishPartnerMessage#1",
              (0, g.I8)(Je, t, r),
              Ze,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetPartnerMessagePreview = function (e, t, r) {
            return e.SendMsg(
              "MarketingMessages.GetPartnerMessagePreview#1",
              (0, g.I8)(Xe, t, r),
              et,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetMarketingMessagesForPartner = function (e, t, r) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessagesForPartner#1",
              (0, g.I8)(it, t, r),
              st,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetMarketingMessagesForApps = function (e, t, r) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessagesForApps#1",
              (0, g.I8)(tt, t, r),
              rt,
              { ePrivilege: 4 },
            );
          });
      })(at || (at = {}));
    },
    52471: (e, t, r) => {
      r.d(t, {
        M4: () => u,
        TH: () => l,
        Wv: () => m,
        hg: () => _,
        hl: () => c,
        kB: () => n,
      });
      r(7850);
      var i = r(66418),
        s = r(39777),
        a = r(38535);
      function n(e, t) {
        const { data: r } = (0, s.Yo)(e),
          i = (0, a.dy)();
        if (void 0 === r) return;
        if (null === r) return null;
        const n = [...(r.highlights || []), ...(r.other_trailers || [])];
        return i && !t ? n.filter((e) => !!e.all_ages) : n;
      }
      function l(e) {
        let t = n(e);
        if (t && 0 != t.length) return t[0];
      }
      function c(e) {
        return `${i.TS.STORE_ITEM_BASE_URL}${e.trailer_url_format.replace("${FILENAME}", e.screenshot_full ?? e.screenshot_medium ?? "")}`;
      }
      function u(e, t) {
        return `${i.TS.VIDEO_CDN_URL}store_trailers/${e.trailer_url_format.replace("${FILENAME}", t)}`;
      }
      function o(e, t) {
        return `${i.TS.VIDEO_CDN_URL}store_trailers/${t}`;
      }
      function m(e) {
        let t =
          "function" == typeof e.captions_manifest
            ? e.captions_manifest()
            : e.captions_manifest;
        if (!t) return;
        let r,
          s = i.TS;
        return (
          s.MEDIA_CDN_URL
            ? (r = s.MEDIA_CDN_URL)
            : s.CDN_HOST_MEDIA && (r = s.CDN_HOST_MEDIA),
          r ? `${r}/${t}` : void 0
        );
      }
      function _(e) {
        let t = [];
        e.adaptive_trailers &&
          (t = e.adaptive_trailers
            .filter(
              (e) =>
                ("dash_h264" == e.encoding || "dash_av1" == e.encoding) &&
                e.cdn_path,
            )
            .map((e) => o(0, e.cdn_path || "")));
        let r = [];
        return (
          e.adaptive_trailers &&
            (r = e.adaptive_trailers
              .filter((e) => "hls_h264" == e.encoding && e.cdn_path)
              .map((e) => o(0, e.cdn_path || ""))),
          { rgDashTrailers: t, rgHlsTrailers: r }
        );
      }
    },
    38535: (e, t, r) => {
      r.d(t, { Zj: () => p, dy: () => _ });
      var i = r(90626),
        s = r(30470),
        a = r(71150),
        n = r(14771),
        l = r(2627),
        c = r(20194),
        u = r(39777);
      const o = i.createContext({ eAdultOnlyMediaBehavior: "masked" });
      function m() {
        const { eAdultOnlyMediaBehavior: e } = i.useContext(o),
          t = (function () {
            const { data: e } = (0, c.I)({
              queryKey: ["AOWarningCookie"],
              queryFn: () => d(),
              placeholderData: () => d(),
              staleTime: 0,
            });
            return e && e > Date.now() / 1e3;
          })();
        return i.useMemo(() => {
          const e = (0, l.VY)("forceallages");
          return (
            !(!e || "0" === e) ||
            !(!s.TS.IN_MOBILE_WEBVIEW || !navigator.userAgent.match(/Android/))
          );
        }, []) ||
          ("masked" == e &&
            (s.iA.excluded_content_descriptors.includes(a.T4) ||
              s.iA.excluded_content_descriptors.includes(a.u7)))
          ? "blocked"
          : "masked" == e && t
            ? "allowed"
            : e;
      }
      function _() {
        return "allowed" != m();
      }
      const g = "bDisableAOWarning";
      n.Kp.PerDay;
      function d() {
        const e = (0, l.VY)(g),
          t = e ? parseInt(e) : 0;
        return 0 != t ? t : null;
      }
      function p(e) {
        const t = "blocked" == m() && !!e,
          { data: r } = (0, u.J$)(t ? { appid: e } : void 0);
        return (
          !!t &&
          (!r ||
            r.content_descriptorids.includes(a.u7) ||
            r.content_descriptorids.includes(a.T4))
        );
      }
    },
    75279: (e, t, r) => {
      r.d(t, { Ay: () => m, DJ: () => h, QO: () => B });
      var i = r(30570),
        s = (r(62792), r(61859)),
        a = r(91675),
        n = r(78327),
        l = r(63369),
        c = r(62490),
        u = r(81393),
        o = r(52471);
      class m {
        m_eItemType;
        m_unID;
        m_bVisible = !1;
        m_strName;
        m_strStoreURLPath;
        m_unAppID;
        m_eAppType;
        m_rgIncludedAppTypes;
        m_rgIncludedAppIDs;
        m_bIsFree;
        m_bIsFreeTemporary;
        m_bIsComingSoon;
        m_bIsEarlyAccess;
        m_RelatedItems;
        m_ContentDescriptorIDs;
        m_StoreCategories;
        m_ReviewInfo;
        m_BasicInfo;
        m_rgStoreTags = [];
        m_rgStoreTagIDs = [];
        m_Assets;
        m_AssetsWithoutOverrides;
        m_ReleaseInfo;
        m_Platforms;
        m_BestPurchaseOption;
        m_SelfPurchaseOption;
        m_rgPurchaseOptions;
        m_Screenshots;
        m_Trailers;
        m_rgSupportedLanguages;
        m_strStoreURLPathOverride;
        m_freeWeekend;
        m_DataRequested = { include_tag_count: 0 };
        m_strInternalName;
        m_rgLinks;
        m_userFilterFailure;
        m_strFullDescriptionBBCode;
        constructor(e, t) {
          (this.m_eItemType = e.item_type()),
            (this.m_unID = e.id()),
            (this.m_bVisible = !!e.visible()),
            (this.m_strName = e.name()),
            (this.m_strStoreURLPath = e.store_url_path()),
            (this.m_unAppID = e.appid()),
            (this.m_eAppType = e.type()),
            (this.m_rgIncludedAppTypes = e.included_types()),
            (this.m_rgIncludedAppIDs = e.included_appids()),
            (this.m_bIsFree = !!e.is_free()),
            (this.m_bIsFreeTemporary = !!e.is_free_temporarily()),
            (this.m_bIsComingSoon =
              !!e.is_coming_soon() || !!e.release()?.is_coming_soon()),
            (this.m_bIsEarlyAccess = !!e.is_early_access()),
            (this.m_RelatedItems = e.related_items()?.toObject()),
            (this.m_ContentDescriptorIDs = e.content_descriptorids()),
            (this.m_StoreCategories = e.categories().toObject()),
            (this.m_BestPurchaseOption = e.best_purchase_option()?.toObject()),
            (this.m_strStoreURLPathOverride = e.store_url_path_override()),
            (this.m_freeWeekend = e.free_weekend()?.toObject()),
            (this.m_strInternalName = e.internal_name()),
            (this.m_eItemType != i.c6.RD && this.m_eItemType != i.c6.xO) ||
              (this.m_SelfPurchaseOption = e.self_purchase_option(!1)
                ? e.self_purchase_option().toObject()
                : this.m_BestPurchaseOption),
            this.MergeData(e, t);
        }
        MergeData(e, t) {
          t.include_assets &&
            !this.m_Assets &&
            ((this.m_Assets = new g(e.assets(), e.id())),
            (this.m_DataRequested.include_assets = !0)),
            t.include_assets_without_overrides &&
              !this.m_AssetsWithoutOverrides &&
              ((this.m_AssetsWithoutOverrides = new g(
                e.assets_without_overrides(),
                e.id(),
              )),
              (this.m_DataRequested.include_assets_without_overrides = !0)),
            t.include_release &&
              !this.m_ReleaseInfo &&
              ((this.m_ReleaseInfo = e.release().toObject()),
              (this.m_DataRequested.include_release = !0)),
            t.include_platforms &&
              !this.m_Platforms &&
              ((this.m_Platforms = e.platforms().toObject()),
              (this.m_DataRequested.include_platforms = !0)),
            t.include_all_purchase_options &&
              !this.m_rgPurchaseOptions &&
              ((this.m_rgPurchaseOptions = e
                .purchase_options()
                .map((e) => e.toObject())),
              (this.m_DataRequested.include_all_purchase_options = !0)),
            t.include_screenshots &&
              !this.m_Screenshots &&
              ((this.m_Screenshots = new M(e.screenshots())),
              (this.m_DataRequested.include_screenshots = !0)),
            t.include_trailers &&
              !this.m_Trailers &&
              ((this.m_Trailers = new d(e.trailers())),
              (this.m_DataRequested.include_trailers = !0)),
            t.include_tag_count &&
              t.include_tag_count > this.m_rgStoreTags.length &&
              this.m_DataRequested.include_tag_count < t.include_tag_count &&
              ((this.m_rgStoreTags = e.tags().map((e) => e.toObject())),
              (this.m_rgStoreTagIDs = this.m_rgStoreTags.map((e) => e.tagid)),
              (this.m_DataRequested.include_tag_count = Math.max(
                t.include_tag_count,
                this.m_rgStoreTags.length || 0,
              ))),
            t.include_reviews &&
              !this.m_ReviewInfo &&
              ((this.m_ReviewInfo = e.reviews().toObject()),
              (this.m_DataRequested.include_reviews = !0)),
            t.include_basic_info &&
              !this.m_BasicInfo &&
              ((this.m_BasicInfo = e.basic_info().toObject()),
              (this.m_DataRequested.include_basic_info = !0)),
            t.include_supported_languages &&
              !this.m_rgSupportedLanguages &&
              ((this.m_rgSupportedLanguages = e
                .supported_languages()
                .map((e) => e.toObject())),
              (this.m_DataRequested.include_supported_languages = !0)),
            t.include_links &&
              !this.m_rgLinks &&
              ((this.m_rgLinks = e.links().map((e) => e.toObject())),
              (this.m_DataRequested.include_links = !0)),
            t.apply_user_filters &&
              !this.m_userFilterFailure &&
              ((this.m_userFilterFailure = e.user_filter_failure()?.toObject()),
              (this.m_DataRequested.apply_user_filters = !0)),
            t.include_full_description &&
              !this.m_strFullDescriptionBBCode &&
              ((this.m_strFullDescriptionBBCode = e.full_description_bbcode()),
              (this.m_DataRequested.include_full_description = !0));
        }
        static BDataRequestContainsOtherDataRequest(e, t) {
          return Boolean(
            (!t.include_assets || e.include_assets) &&
              (!t.include_assets_without_overrides ||
                e.include_assets_without_overrides) &&
              (!t.include_release || e.include_release) &&
              (!t.include_platforms || e.include_platforms) &&
              (!t.include_all_purchase_options ||
                e.include_all_purchase_options) &&
              (!t.include_screenshots || e.include_screenshots) &&
              (!t.include_trailers || e.include_trailers) &&
              (!t.include_ratings || e.include_ratings) &&
              (!t.include_tag_count ||
                (e.include_tag_count || 0) >= t.include_tag_count) &&
              (!t.include_reviews || e.include_reviews) &&
              (!t.include_basic_info || e.include_basic_info) &&
              (!t.include_supported_languages ||
                e.include_supported_languages) &&
              (!t.include_full_description || e.include_full_description) &&
              (!t.include_links || e.include_links),
          );
        }
        BContainDataRequest(e) {
          return m.BDataRequestContainsOtherDataRequest(
            this.m_DataRequested,
            e,
          );
        }
        BCheckDataRequestIncluded(e) {
          0;
        }
        GetStoreItemType() {
          return this.m_eItemType;
        }
        GetID() {
          return this.m_unID;
        }
        GetUniqueID() {
          return this.m_eItemType + "_" + this.m_unID;
        }
        BIsVisible() {
          return this.m_bVisible;
        }
        GetName() {
          return this.m_strName;
        }
        GetStorePageURL(e = !1) {
          return e && this.HasDemoStandaloneStorePage()
            ? n.TS.STORE_BASE_URL +
                "app/" +
                this.GetDemoStandaloneStorePageAppIDs()[0]
            : n.TS.STORE_BASE_URL + this.m_strStoreURLPath;
        }
        GetStorePageURLWithOverride() {
          return this.m_strStoreURLPathOverride &&
            this.m_strStoreURLPathOverride.length > 0
            ? this.GetStorePageURLOverride()
            : this.GetStorePageURL();
        }
        GetStorePageURLOverride() {
          return this.m_strStoreURLPathOverride;
        }
        GetCommunityPageURL() {
          return this.GetAppID()
            ? n.TS.COMMUNITY_BASE_URL + "app/" + this.GetAppID()
            : null;
        }
        GetCommunityDiscussionForumsURL() {
          return this.GetAppID()
            ? n.TS.COMMUNITY_BASE_URL +
                "app/" +
                this.GetAppID() +
                "/discussions/"
            : null;
        }
        GetAppID() {
          return this.m_unAppID;
        }
        GetAppType() {
          return this.m_eAppType;
        }
        BIsApplicationOrTool() {
          return this.GetAppType() == i.uE.Sv || this.GetAppType() == i.uE.Lj;
        }
        k_regexSalePage =
          /^https?:\/\/[^\/]*(?:valvesoftware|steampowered).com\/(?:(curator|dev|developer|pub|publisher|franchise)\/[0-9a-zA-Z\-_]+\/)?sale\//;
        BIsSalePage() {
          return (
            this.GetStoreItemType() === i.c6.qI &&
            this.k_regexSalePage.test(this.GetStorePageURLWithOverride())
          );
        }
        GetSalePageVanityURL() {
          let e = this.GetStorePageURLWithOverride();
          return (
            this.GetStoreItemType() === i.c6.qI &&
              ((e = this.GetStorePageURLWithOverride().replace(
                this.k_regexSalePage,
                "",
              )),
              e.endsWith("/") && (e = e.replace("/", ""))),
            e
          );
        }
        GetIncludedAppTypes() {
          return this.m_rgIncludedAppTypes;
        }
        GetIncludedAppIDs() {
          return this.m_rgIncludedAppIDs;
        }
        GetIncludedAppIDsOrSelf() {
          return this.GetStoreItemType() == i.c6.qI
            ? [this.GetID()]
            : this.GetIncludedAppIDs();
        }
        BIsFree() {
          return this.m_bIsFree;
        }
        BIsFreeTemporary() {
          return this.m_bIsFreeTemporary;
        }
        BIsFreeWeekend() {
          const e = Date.now() / 1e3;
          return (
            Boolean(this.m_freeWeekend) &&
            this.m_freeWeekend.start_time <= e &&
            e <= this.m_freeWeekend.end_time
          );
        }
        GetFreeWeekendEnd() {
          return this.m_freeWeekend?.end_time;
        }
        GetFreeWeekendPlayTextOverride() {
          return this.m_freeWeekend?.text;
        }
        BIsEarlyAccess() {
          return this.m_bIsEarlyAccess;
        }
        GetParentAppID() {
          return this.m_RelatedItems?.parent_appid;
        }
        BHasDemo() {
          return (this.m_RelatedItems?.demo_appid?.length ?? 0) > 0;
        }
        GetDemoAppIDs() {
          return this.m_RelatedItems?.demo_appid ?? [];
        }
        HasDemoStandaloneStorePage() {
          return (this.m_RelatedItems?.standalone_demo_appid?.length ?? 0) > 0;
        }
        GetDemoStandaloneStorePageAppIDs() {
          return this.m_RelatedItems?.standalone_demo_appid ?? [];
        }
        GetContentDescriptorIDs() {
          return this.m_ContentDescriptorIDs;
        }
        HasContentDescriptorID(e) {
          return this.m_ContentDescriptorIDs?.includes(e);
        }
        GetStoreCategories_SupportedPlayers() {
          return this.m_StoreCategories?.supported_player_categoryids || [];
        }
        GetStoreCategories_Features() {
          return this.m_StoreCategories?.feature_categoryids || [];
        }
        GetStoreCategories_Controller() {
          return this.m_StoreCategories?.controller_categoryids || [];
        }
        BHasStoreCategory(e) {
          return Boolean(
            this.GetStoreCategories_SupportedPlayers().find((t) => e === t) ||
              this.GetStoreCategories_Features().find((t) => e === t) ||
              this.GetStoreCategories_Controller().find((t) => e === t),
          );
        }
        GetFilteredReviewSummary() {
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            this.m_ReviewInfo?.summary_filtered
          );
        }
        GetUnfilteredReviewSummary() {
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            this.m_ReviewInfo?.summary_unfiltered ||
              this.m_ReviewInfo?.summary_filtered
          );
        }
        GetFilteredReviewSummaryLanguage() {
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            this.m_ReviewInfo?.summary_language_specific
          );
        }
        GetFullDescriptionBBCode() {
          return (
            this.BCheckDataRequestIncluded({ include_full_description: !0 }),
            this.m_strFullDescriptionBBCode
          );
        }
        GetShortDescription() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo?.short_description ?? ""
          );
        }
        GetDeveloperNames() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo?.developers
              ?.map((e) => e.name.trim())
              ?.filter((e) => e?.length > 0) ?? []
          );
        }
        GetFranchiseNames() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo?.franchises
              ?.map((e) => e.name.trim())
              ?.filter((e) => e?.length > 0) ?? []
          );
        }
        GetPublisherNames() {
          this.BCheckDataRequestIncluded({ include_basic_info: !0 });
          const e =
            this.m_BasicInfo?.publishers
              ?.map((e) => e.name.trim())
              ?.filter((e) => e?.length > 0) ?? [];
          return e?.length > 0 ? e : this.GetDeveloperNames();
        }
        GetAllCreatorClanIDs() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo
              ? _([
                  ...this.m_BasicInfo.developers,
                  ...this.m_BasicInfo.publishers,
                  ...this.m_BasicInfo.franchises,
                ])
              : []
          );
        }
        GetAllPublisherCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? _(this.m_BasicInfo.publishers) : []
          );
        }
        GetAllDeveloperCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? _(this.m_BasicInfo.developers) : []
          );
        }
        GetAllFranchiseCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? _(this.m_BasicInfo.franchises) : []
          );
        }
        GetCapsuleHeadline() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo?.capsule_headline
          );
        }
        GetTags() {
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            this.m_rgStoreTags
          );
        }
        GetTagIDs() {
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            this.m_rgStoreTagIDs
          );
        }
        BHasTags() {
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            this.m_rgStoreTagIDs?.length > 0
          );
        }
        GetAssets() {
          return (
            this.BCheckDataRequestIncluded({ include_assets: !0 }),
            this.m_Assets
          );
        }
        GetAssetsWithoutOverrides() {
          return (
            this.BCheckDataRequestIncluded({
              include_assets_without_overrides: !0,
            }),
            this.m_AssetsWithoutOverrides
          );
        }
        GetOriginalReleaseDateRTime() {
          this.BCheckDataRequestIncluded({ include_release: !0 });
          let e = this.m_ReleaseInfo?.original_steam_release_date;
          return e || (e = this.GetReleaseDateRTime()), e;
        }
        GetReleaseDateRTime(e = !1) {
          if (
            (this.BCheckDataRequestIncluded({ include_release: !0 }),
            this.m_ReleaseInfo?.is_coming_soon && !e)
          )
            return 0;
          let t = this.m_ReleaseInfo?.steam_release_date;
          return t || (t = this.m_ReleaseInfo?.original_release_date), t;
        }
        GetFormattedSteamReleaseDate() {
          if (
            (this.BCheckDataRequestIncluded({ include_release: !0 }),
            this.m_ReleaseInfo?.is_coming_soon)
          ) {
            if (this.m_ReleaseInfo?.coming_soon_display)
              return (0, l.d)(this.m_ReleaseInfo);
            if (this.m_ReleaseInfo?.custom_release_date_message)
              return this.m_ReleaseInfo.custom_release_date_message;
            const e = this.m_ReleaseInfo?.steam_release_date;
            return e
              ? this.m_ReleaseInfo?.is_abridged_release_date
                ? (0, a.sq)(new Date(1e3 * e))
                : (0, s.$z)(e)
              : "";
          }
          const e = this.GetReleaseDateRTime();
          return e ? (0, s.$z)(e) : "";
        }
        BIsComingSoon() {
          return this.m_bIsComingSoon;
        }
        BIsCustomComingSoonDisplay() {
          return (
            this.BCheckDataRequestIncluded({ include_release: !0 }),
            !!this.BIsComingSoon() &&
              (this.m_ReleaseInfo?.coming_soon_display
                ? ["text_tba", "text_comingsoon"].includes(
                    this.m_ReleaseInfo.coming_soon_display,
                  )
                : !!this.m_ReleaseInfo?.custom_release_date_message)
          );
        }
        BLimitedLaunchActive() {
          return this.m_ReleaseInfo?.limited_launch_active;
        }
        BIsPrePurchase() {
          return (
            this.BIsComingSoon() &&
            Boolean(this.GetBestPurchaseOption()?.packageid)
          );
        }
        BIsReleased() {
          return !this.BIsComingSoon();
        }
        GetPlatforms() {
          return (
            this.BCheckDataRequestIncluded({ include_platforms: !0 }),
            this.m_Platforms
          );
        }
        GetBestPurchaseOption() {
          return this.m_BestPurchaseOption;
        }
        GetBestPurchasePriceInCents() {
          if (this.m_BestPurchaseOption?.final_price_in_cents)
            return Number.parseInt(
              this.m_BestPurchaseOption.final_price_in_cents,
            );
        }
        GetBestPurchasePriceFormatted() {
          return this.m_BestPurchaseOption?.formatted_final_price;
        }
        GetBestPurchaseOriginalPriceInCents() {
          return this.m_BestPurchaseOption?.original_price_in_cents
            ? Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents)
            : this.GetBestPurchasePriceInCents();
        }
        GetBestPurchaseOriginalPriceFormatted() {
          return (
            this.m_BestPurchaseOption?.formatted_original_price ??
            this.m_BestPurchaseOption?.formatted_final_price
          );
        }
        GetAllPurchaseOptions() {
          return (
            this.BCheckDataRequestIncluded({
              include_all_purchase_options: !0,
            }),
            this.m_rgPurchaseOptions
          );
        }
        GetSelfPurchaseOption() {
          return this.m_SelfPurchaseOption;
        }
        BHasAgeSafeScreenshots() {
          return this.GetScreenshots(!0).length > 0;
        }
        GetScreenshots(e) {
          return (
            this.BCheckDataRequestIncluded({ include_screenshots: !0 }),
            this.m_Screenshots
              ? e
                ? this.m_Screenshots.GetOnlyAllAgesScreenshots()
                : this.m_Screenshots.GetAllAgesAndMatureScreenshots()
              : []
          );
        }
        BIsAgeSafeScreenshot(e) {
          return this.m_Screenshots.GetOnlyAllAgesScreenshots().includes(e);
        }
        BHasTrailers(e) {
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            this.m_Trailers?.BHasTrailers(e)
          );
        }
        BHasHighlightTrailers(e) {
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            (this.m_Trailers?.GetHighlightTrailers(e)?.length ?? 0) > 0
          );
        }
        GetAllTrailers() {
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            this.m_Trailers
          );
        }
        BHasSomeLanguageSupport(e) {
          return (
            this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
            this.m_rgSupportedLanguages?.some(
              (t) =>
                t.elanguage == e &&
                (t.supported || t.subtitles || t.full_audio),
            ) || !1
          );
        }
        GetAllLanguagesWithSomeSupport() {
          return (
            this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
            this.m_rgSupportedLanguages
              ?.filter((e) => e.supported || e.subtitles || e.full_audio)
              .map((e) => e.elanguage) || []
          );
        }
        GetDataRequest() {
          return this.m_DataRequested;
        }
        GetMicroTrailer(e) {
          if (
            (this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            this.m_Trailers)
          ) {
            const t = this.m_Trailers
              .GetAllTrailers(e)
              .find((e) => !!e.GetMicroTrailer());
            if (t) return t.GetMicroTrailer();
          }
          return null;
        }
        GetLinks() {
          return (
            this.BCheckDataRequestIncluded({ include_links: !0 }),
            this.m_rgLinks
          );
        }
        GetUserFilterFailure() {
          return (
            this.BCheckDataRequestIncluded({ apply_user_filters: !0 }),
            this.m_userFilterFailure
          );
        }
        ReplaceBestPurchaseOption(e) {
          this.m_BestPurchaseOption = e;
        }
        GetInternalName() {
          return this.m_strInternalName;
        }
      }
      function _(e) {
        if (!e?.length) return [];
        const t = e.map((e) => e.creator_clan_account_id).filter((e) => !!e);
        return Array.from(new Set(t));
      }
      class g {
        m_strMainCapsuleURL;
        m_strSmallCapsuleURL;
        m_strHeaderURL;
        m_strPackageHeaderURL;
        m_strPageBackgroundURL;
        m_strRawPageBackgroundURL;
        m_strHeroCapsuleURL;
        m_strHeroCapsuleURL_2x;
        m_strLibraryCapsuleURL;
        m_strLibraryCapsuleURL_2x;
        m_strLibraryHeroURL;
        m_strLibraryHeroURL_2x;
        m_strCommunityIcon;
        m_strCommunityIcon_Full;
        constructor(e, t) {
          const r = e.asset_url_format();
          r &&
            (e.main_capsule() &&
              (this.m_strMainCapsuleURL = this.ConstructAssetURL(
                r,
                e.main_capsule(),
              )),
            e.small_capsule() &&
              (this.m_strSmallCapsuleURL = this.ConstructAssetURL(
                r,
                e.small_capsule(),
              )),
            e.header() &&
              (this.m_strHeaderURL = this.ConstructAssetURL(r, e.header())),
            e.package_header() &&
              (this.m_strPackageHeaderURL = this.ConstructAssetURL(
                r,
                e.package_header(),
              )),
            e.raw_page_background() &&
              (this.m_strRawPageBackgroundURL = this.ConstructAssetURL(
                r,
                e.raw_page_background(),
              )),
            e.hero_capsule() &&
              (this.m_strHeroCapsuleURL = this.ConstructAssetURL(
                r,
                e.hero_capsule(),
              )),
            e.hero_capsule_2x() &&
              (this.m_strHeroCapsuleURL_2x = this.ConstructAssetURL(
                r,
                e.hero_capsule_2x(),
              )),
            e.library_capsule() &&
              (this.m_strLibraryCapsuleURL = this.ConstructAssetURL(
                r,
                e.library_capsule(),
              )),
            e.library_capsule_2x() &&
              (this.m_strLibraryCapsuleURL_2x = this.ConstructAssetURL(
                r,
                e.library_capsule_2x(),
              )),
            e.library_hero() &&
              (this.m_strLibraryHeroURL = this.ConstructAssetURL(
                r,
                e.library_hero(),
              )),
            e.library_hero_2x() &&
              (this.m_strLibraryHeroURL_2x = this.ConstructAssetURL(
                r,
                e.library_hero_2x(),
              ))),
            e.community_icon() &&
              ((this.m_strCommunityIcon = `${n.TS.MEDIA_CDN_COMMUNITY_URL}images/apps/${t}/${e.community_icon()}.jpg`),
              (this.m_strCommunityIcon_Full = `${n.TS.MEDIA_CDN_COMMUNITY_URL}images/apps/${t}/${e.community_icon()}_full.jpg`)),
            e.page_background_path() &&
              (this.m_strPageBackgroundURL = `${n.TS.STORE_CDN_URL}images/storepagebackground/${e.page_background_path()}`);
        }
        GetMainCapsuleURL() {
          return this.m_strMainCapsuleURL;
        }
        GetSmallCapsuleURL() {
          return this.m_strSmallCapsuleURL;
        }
        GetHeaderURL() {
          return this.m_strHeaderURL;
        }
        GetPackageHeaderURL() {
          return this.m_strPackageHeaderURL;
        }
        GetPageBackgroundURL() {
          return this.m_strPageBackgroundURL;
        }
        GetRawPageBackgroundURL() {
          return this.m_strRawPageBackgroundURL;
        }
        GetHeroCapsuleURL() {
          return this.m_strHeroCapsuleURL;
        }
        GetHeroCapsuleURL_2x() {
          return this.m_strHeroCapsuleURL_2x;
        }
        GetLibraryCapsuleURL() {
          return this.m_strLibraryCapsuleURL;
        }
        GetLibraryCapsuleURL_2x() {
          return this.m_strLibraryCapsuleURL_2x;
        }
        GetLibraryHeroURL() {
          return this.m_strLibraryHeroURL;
        }
        GetLibraryHeroURL_2x() {
          return this.m_strLibraryHeroURL_2x;
        }
        ConstructAssetURL(e, t) {
          return (
            n.TS.BASE_URL_SHARED_CDN +
            "/store_item_assets/" +
            e.replace("${FILENAME}", t)
          );
        }
        GetCommunityIconURL() {
          return this.m_strCommunityIcon;
        }
        GetCommunityIconURL_Full() {
          return this.m_strCommunityIcon_Full;
        }
      }
      class d {
        m_mapTrailer;
        m_highlightTrailers;
        m_highlightTrailersAllAges;
        m_otherTrailers;
        m_otherTrailersAllAges;
        constructor(e) {
          (this.m_highlightTrailers =
            e.highlights()?.map((e) => new p(e)) ?? []),
            (this.m_highlightTrailersAllAges = this.m_highlightTrailers.filter(
              (e) => e.BIsAllAges(),
            )),
            (this.m_otherTrailers =
              e.other_trailers()?.map((e) => new p(e)) ?? []),
            (this.m_otherTrailersAllAges = this.m_otherTrailers.filter((e) =>
              e.BIsAllAges(),
            )),
            (this.m_mapTrailer = new Map(
              [...this.m_highlightTrailers, ...this.m_otherTrailers].map(
                (e) => [e.GetTrailerID(), e],
              ),
            ));
        }
        BHasTrailers(e) {
          return e
            ? this.m_highlightTrailersAllAges.length > 0 ||
                this.m_otherTrailersAllAges.length > 0
            : this.m_highlightTrailers.length > 0 ||
                this.m_otherTrailers.length > 0;
        }
        GetHighlightTrailers(e) {
          return e ? this.m_highlightTrailersAllAges : this.m_highlightTrailers;
        }
        GetOtherTrailers(e) {
          return e ? this.m_otherTrailersAllAges : this.m_otherTrailers;
        }
        GetAllTrailers(e) {
          return [...this.GetHighlightTrailers(e), ...this.GetOtherTrailers(e)];
        }
        GetTrailerByID(e) {
          return this.m_mapTrailer.get(e);
        }
      }
      class p {
        m_strTrailerName;
        m_eTrailerCategory;
        m_nBaseID;
        m_MicroTrailer;
        m_rgDashTrailers;
        m_rgHlsTrailer;
        m_strScreenshotMedium;
        m_strScreenshotFull;
        m_bIsAllAges;
        m_strCaptionManifest;
        constructor(e) {
          (this.m_strTrailerName = e.trailer_name()),
            (this.m_nBaseID = e.trailer_base_id()),
            (this.m_eTrailerCategory = e.trailer_category());
          const t = e.trailer_url_format();
          if (
            (t &&
              (e.microtrailer() &&
                (this.m_MicroTrailer = this.ExtractTrailerFormats(
                  t,
                  e.microtrailer(),
                )),
              e.screenshot_medium() &&
                (this.m_strScreenshotMedium = this.ConstructScreenshotURL(
                  t,
                  e.screenshot_medium(),
                )),
              e.screenshot_full() &&
                (this.m_strScreenshotFull = this.ConstructScreenshotURL(
                  t,
                  e.screenshot_full(),
                ))),
            e.adaptive_trailers())
          ) {
            this.m_rgDashTrailers = this.ExtractAdaptiveTrailers(
              e.adaptive_trailers(),
              "dash",
            );
            let t = this.ExtractAdaptiveTrailers(e.adaptive_trailers(), "hls");
            t.length > 0 && (this.m_rgHlsTrailer = t[0]);
          }
          (this.m_bIsAllAges = e.all_ages() ?? !0),
            (this.m_strCaptionManifest = (0, o.Wv)(e));
        }
        GetName() {
          return this.m_strTrailerName;
        }
        GetTrailerID() {
          return this.m_nBaseID;
        }
        GetTrailerCategory() {
          return this.m_eTrailerCategory;
        }
        GetTrailersDash() {
          return this.m_rgDashTrailers;
        }
        GetTrailerHls() {
          return this.m_rgHlsTrailer;
        }
        GetMicroTrailer() {
          return this.m_MicroTrailer;
        }
        GetScreenshot() {
          return this.m_strScreenshotFull
            ? this.m_strScreenshotFull
            : this.m_strScreenshotMedium;
        }
        BIsAllAges() {
          return this.m_bIsAllAges;
        }
        GetCaptionManifest() {
          return this.m_strCaptionManifest;
        }
        ExtractTrailerFormats(e, t) {
          let r = {};
          return (
            t.forEach((t) => {
              "video/mp4" == t.type()
                ? (r.strMP4URL = this.ConstructAssetURL(e, t.filename()))
                : "video/webm" == t.type() &&
                  (r.strWebMURL = this.ConstructAssetURL(e, t.filename()));
            }),
            r
          );
        }
        ExtractAdaptiveTrailers(e, t) {
          let r = `${t}_`,
            i = e.filter(
              (e) => e.encoding() && e.cdn_path() && e.encoding().startsWith(r),
            ),
            s = i.findIndex((e) => e.encoding().endsWith("_av1"));
          return (
            s > 0 && c.yY(i, s, 0),
            i.map((e) => this.ConstructAssetURL(e.cdn_path(), ""))
          );
        }
        ConstructScreenshotURL(e, t) {
          return (
            n.TS.BASE_URL_SHARED_CDN +
            "/store_item_assets/" +
            e.replace("${FILENAME}", t)
          );
        }
        ConstructAssetURL(e, t) {
          return (
            n.TS.VIDEO_CDN_URL +
            "/store_trailers/" +
            e.replace("${FILENAME}", t)
          );
        }
      }
      class M {
        m_rgAllScreenshots;
        m_rgOnlyAllAgesScreenshots;
        constructor(e) {
          const t = e.all_ages_screenshots() || [],
            r = e.mature_content_screenshots() || [],
            i = (e) =>
              n.TS.BASE_URL_SHARED_CDN + "/store_item_assets/" + e.filename();
          (this.m_rgOnlyAllAgesScreenshots = t.map(i)),
            (this.m_rgAllScreenshots = [...t, ...r]
              .sort((e, t) => e.ordinal() - t.ordinal())
              .map(i));
        }
        GetAllAgesAndMatureScreenshots() {
          return this.m_rgAllScreenshots;
        }
        GetOnlyAllAgesScreenshots() {
          return this.m_rgOnlyAllAgesScreenshots;
        }
      }
      function h(e) {
        if (e)
          switch (e.GetStoreItemType()) {
            case i.c6.qI:
              return { appid: e.GetAppID() };
            case i.c6.RD:
              return { packageid: e.GetID() };
            case i.c6.xO:
              return { bundleid: e.GetID() };
            case i.c6.je:
              return { tagid: e.GetID() };
            case i.c6.tp:
              return { creatorid: e.GetID() };
            case i.c6.wn:
              return { hubcategoryid: e.GetID() };
            case i.c6.Xj:
            case i.c6.Eb:
            case i.c6.Ep:
              return;
            default:
              return void (0, u.z_)(
                e.GetStoreItemType(),
                `Unknown EStoreItemType ${e.GetStoreItemType()} ${(0, i.md)(e.GetStoreItemType())} `,
              );
          }
      }
      function B(e) {
        if (e)
          switch (e.item_type) {
            case i.c6.qI:
              return { appid: e.appid };
            case i.c6.RD:
              return { packageid: e.id };
            case i.c6.xO:
              return { bundleid: e.id };
            case i.c6.je:
              return { tagid: e.id };
            case i.c6.tp:
              return { creatorid: e.id };
            case i.c6.wn:
              return { hubcategoryid: e.id };
            case i.c6.Xj:
              return e.gid ? { salepagegid: e.gid } : void 0;
            case i.c6.Eb:
            case i.c6.Ep:
              return;
            default:
              return void (0, u.z_)(
                e.item_type,
                `Unknown EStoreItemType ${e.item_type} ${(0, i.md)(e.item_type)} `,
              );
          }
      }
    },
    62792: (e, t, r) => {
      r.d(t, {
        Di: () => d,
        FT: () => y,
        JK: () => l,
        Je: () => h,
        M9: () => b,
        Rz: () => o,
        SW: () => m,
        Si: () => T,
        TM: () => _,
        TV: () => S,
        _P: () => f,
        cW: () => w,
        gy: () => R,
        hh: () => p,
        lY: () => z,
        nB: () => c,
        pk: () => u,
        s9: () => I,
        vo: () => M,
        wD: () => B,
        wR: () => g,
      });
      var i,
        s = r(6330),
        a = r(30570);
      !(function (e) {
        (e[(e.k_NotRejected = -1)] = "k_NotRejected"),
          (e[(e.k_RejectNoMainCap = 0)] = "k_RejectNoMainCap"),
          (e[(e.k_RejectWrongPlatform = 1)] = "k_RejectWrongPlatform"),
          (e[(e.k_RejectNoComingSoon = 2)] = "k_RejectNoComingSoon"),
          (e[(e.k_RejectNoVR = 3)] = "k_RejectNoVR"),
          (e[(e.k_RejectCreatorClan = 4)] = "k_RejectCreatorClan"),
          (e[(e.k_RejectIgnoredGame = 5)] = "k_RejectIgnoredGame"),
          (e[(e.k_RejectSupportedLanguage = 6)] = "k_RejectSupportedLanguage"),
          (e[(e.k_RejectNotLoaded = 7)] = "k_RejectNotLoaded"),
          (e[(e.k_RejectIgnoreGameTags = 8)] = "k_RejectIgnoreGameTags"),
          (e[(e.k_RejectIgnoreContentDescriptors = 9)] =
            "k_RejectIgnoreContentDescriptors"),
          (e[(e.k_RejectEarlyAccess = 10)] = "k_RejectEarlyAccess"),
          (e[(e.k_RejectSoftware = 11)] = "k_RejectSoftware"),
          (e[(e.k_RejectDLC = 12)] = "k_RejectDLC"),
          (e[(e.k_RejectInLibrary = 13)] = "k_RejectInLibrary"),
          (e[(e.k_RejectNotInLibrary = 14)] = "k_RejectNotInLibrary"),
          (e[(e.k_RejectVideo = 15)] = "k_RejectVideo"),
          (e[(e.k_RejectNoDiscount = 16)] = "k_RejectNoDiscount"),
          (e[(e.k_RejectAlreadyDisplayed = 17)] = "k_RejectAlreadyDisplayed"),
          (e[(e.k_RejectNoTrailer = 18)] = "k_RejectNoTrailer"),
          (e[(e.k_RejectAO = 19)] = "k_RejectAO");
      })(i || (i = {}));
      const n = ["app", "sub", "bundle"];
      function l(e) {
        return "app" == e ? a.c6.qI : "sub" == e ? a.c6.RD : a.c6.xO;
      }
      function c(e) {
        return n.includes(e);
      }
      function u(e, t = a.c6.Ep) {
        return e?.appid
          ? a.c6.qI
          : e?.packageid
            ? a.c6.RD
            : e?.bundleid
              ? a.c6.xO
              : e?.creatorid
                ? a.c6.tp
                : e?.hubcategoryid
                  ? a.c6.wn
                  : e?.tagid
                    ? a.c6.je
                    : t;
      }
      function o(e) {
        switch (e) {
          case a.c6.qI:
            return "app";
          case a.c6.xO:
            return "bundle";
          case a.c6.RD:
            return "package";
          case a.c6.Eb:
            return "mtx";
        }
        return "invalid";
      }
      function m(e) {
        switch (e) {
          case "sub":
            return a.c6.RD;
          case "bundle":
            return a.c6.xO;
          default:
            return a.c6.qI;
        }
      }
      function _(e) {
        switch (e) {
          case a.c6.xO:
            return "bundle";
          case a.c6.RD:
            return "sub";
          default:
            return "app";
        }
      }
      function g(e, t, r) {
        return e
          ? { id: e, item_type: "app" }
          : t
            ? { id: t, item_type: "sub" }
            : { id: r, item_type: "bundle" };
      }
      function d(e) {
        return "app" == e?.item_type
          ? { appid: e.id }
          : "sub" == e?.item_type
            ? { packageid: e.id }
            : "bundle" == e?.item_type
              ? { bundleid: e.id }
              : null;
      }
      function p(e) {
        return e?.appid
          ? { item_type: "app", id: e.appid }
          : e?.packageid
            ? { item_type: "sub", id: e.packageid }
            : e?.bundleid
              ? { item_type: "bundle", id: e.bundleid }
              : null;
      }
      function M(e, t) {
        return t == a.c6.qI
          ? { id: e, item_type: "app" }
          : t == a.c6.RD
            ? { id: e, item_type: "sub" }
            : t == a.c6.xO
              ? { id: e, item_type: "bundle" }
              : (console.error(
                  "ConvertEStoreItemTypeToStoreItemKey unexpected item type: ",
                  t,
                ),
                { id: 0, item_type: "app" });
      }
      function h(e, t) {
        return t == a.c6.qI
          ? { appid: e }
          : t == a.c6.RD
            ? { packageid: e }
            : t == a.c6.xO
              ? { bundleid: e }
              : t == a.c6.je
                ? { tagid: e }
                : t == a.c6.tp
                  ? { creatorid: e }
                  : t == a.c6.wn
                    ? { hubcategoryid: e }
                    : null;
      }
      function B(e) {
        return e?.appid
          ? "a" + e.appid
          : e?.packageid
            ? "p" + e.packageid
            : e?.bundleid
              ? "b" + e.bundleid
              : e?.creatorid
                ? "c" + e.creatorid
                : e?.hubcategoryid
                  ? "h" + e.hubcategoryid
                  : e?.tagid
                    ? "t" + e.tagid
                    : "unknown0";
      }
      function y(e, t) {
        switch (t) {
          case a.c6.qI:
            return "a" + e;
          case a.c6.RD:
            return "p" + e;
          case a.c6.xO:
            return "b" + e;
        }
        return "unknown0";
      }
      function b(e) {
        return e?.appid
          ? e.appid
          : e?.packageid
            ? e.packageid
            : e?.bundleid
              ? e.bundleid
              : e?.hubcategoryid
                ? e.hubcategoryid
                : e?.creatorid
                  ? e.creatorid
                  : e?.tagid
                    ? e.tagid
                    : 0;
      }
      function f(e) {
        return e?.appid
          ? a.c6.qI
          : e?.packageid
            ? a.c6.RD
            : e?.bundleid
              ? a.c6.xO
              : e?.hubcategoryid
                ? a.c6.wn
                : e?.creatorid
                  ? a.c6.tp
                  : e?.tagid
                    ? a.c6.je
                    : 0;
      }
      function R(e) {
        return "app" == e?.item_type
          ? a.c6.qI
          : "sub" == e?.item_type
            ? a.c6.RD
            : "bundle" == e?.item_type
              ? a.c6.xO
              : a.c6.Ep;
      }
      function w(e) {
        const t = Number.parseInt(e.substring(1));
        switch (e.charAt(0)) {
          case "a":
            return { appid: t };
          case "p":
            return { packageid: t };
          default:
            return { bundleid: t };
        }
      }
      function S(e) {
        return "application" == e
          ? a.c6.qI
          : "bundle" == e
            ? a.c6.xO
            : "package" == e
              ? a.c6.RD
              : a.c6.Ep;
      }
      function z(e) {
        return e == a.c6.qI
          ? "application"
          : e == a.c6.RD
            ? "package"
            : e == a.c6.xO
              ? "bundle"
              : null;
      }
      function I(e) {
        return e == s.OT.vy
          ? a.c6.qI
          : e == s.OT.uA
            ? a.c6.xO
            : e == s.OT.jA
              ? a.c6.RD
              : a.c6.Ep;
      }
      function T(e) {
        return e == a.c6.qI
          ? s.OT.vy
          : e == a.c6.RD
            ? s.OT.jA
            : e == a.c6.xO
              ? s.OT.uA
              : null;
      }
    },
    63369: (e, t, r) => {
      r.d(t, { M: () => n, d: () => a });
      var i = r(61859),
        s = r(91675);
      function a(e) {
        return n(
          e.coming_soon_display,
          e.steam_release_date,
          e.custom_release_date_message,
        );
      }
      function n(e, t, r, a) {
        switch (e) {
          case "date_full":
            return (0, i.$z)(t);
          case "date_month":
            return (0, s.sq)(new Date(1e3 * t));
          case "date_quarter":
            return (0, s.u6)(new Date(1e3 * t), a);
          case "date_year":
            return (0, s.vl)(new Date(1e3 * t));
          case "text_comingsoon":
            return r || (0, i.we)("#Store_ComingSoon_ComingSoon");
          case "text_tba":
            return r || (0, i.we)("#Store_ComingSoon_TBA");
          default:
            return "";
        }
      }
    },
  },
]);
