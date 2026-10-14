/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [55295],
    {
      52438: (jr, wr, h) => {
        h.d(wr, { j_: () => e });
        function e(b) {
          if (!document.cookie) return;
          const E = document.cookie.match("(^|; )" + b.name + "=([^;]*)");
          if (E && E[2]) return decodeURIComponent(E[2]);
        }
        function d(b, E) {
          if (!document.cookie || !IsCookieAllowedByPreferences(b)) return;
          const ar = b.options?.path ?? "/";
          let u = "";
          b.options?.expires
            ? (u += ";expires=" + b.options.expires.toUTCString())
            : b.options?.maxAge &&
              (u += ";max-age=" + Math.floor(b.options.maxAge / 1e3)),
            b.options?.secure && (u += ";secure"),
            (document.cookie =
              encodeURIComponent(b.name) +
              "=" +
              encodeURIComponent(E) +
              u +
              ";path=" +
              ar);
        }
        function pr(b) {
          return d(
            { ...b, options: { ...b.options, expires: new Date(0) } },
            "",
          );
        }
        function er() {
          return window.SSR?.renderContext?.cookiePrefs;
        }
      },
      47634: (jr, wr, h) => {
        h.d(wr, {
          NI: () => O,
          QG: () => F,
          JE: () => $,
          MG: () => N,
          e6: () => j,
          CS: () => Z,
          ds: () => Q,
          LK: () => x,
          hd: () => J,
          cc: () => V,
          tU: () => D,
          S4: () => U,
          $q: () => H,
          ZR: () => K,
          OT: () => d,
          pk: () => E,
          nf: () => er,
          rj: () => ar,
          D4: () => e,
          T: () => b,
          V$: () => pr,
          EO: () => Ur,
        });
        var e = {};
        h.r(e),
          h.d(e, {
            Sk: () => Nr,
            pw: () => c,
            EK: () => A,
            SK: () => Er,
            vm: () => l,
            H5: () => f,
            KO: () => Ir,
            xl: () => hr,
            eV: () => Fr,
            RV: () => vr,
            OD: () => Tr,
            T9: () => W,
            k6: () => Lr,
            IT: () => S,
            QY: () => B,
            eH: () => Ar,
            W8: () => br,
            QJ: () => I,
          });
        var d = {};
        h.r(d),
          h.d(d, {
            vy: () => n,
            uA: () => $r,
            Zb: () => Kr,
            By: () => Dr,
            gI: () => Wr,
            jA: () => z,
          });
        var pr = {};
        h.r(pr), h.d(pr, { Mj: () => Jr, fy: () => Qr, QP: () => Yr });
        var er = {};
        h.r(er),
          h.d(er, { pE: () => Zr, Ln: () => Vr, Q2: () => Xr, u: () => Hr });
        var b = {};
        h.r(b), h.d(b, { rz: () => Rr, RZ: () => Pr, XG: () => qr });
        var E = {};
        h.r(E),
          h.d(E, {
            om: () => sr,
            we: () => kr,
            A_: () => Mr,
            V5: () => Gr,
            SN: () => ct,
            XU: () => rt,
            LY: () => tt,
            FS: () => Cr,
            wZ: () => _r,
            Ky: () => it,
            yz: () => lt,
            tA: () => nt,
            QN: () => mt,
            CE: () => gr,
          });
        var ar = {};
        h.r(ar),
          h.d(ar, {
            H: () => ht,
            k2: () => dt,
            GS: () => Bt,
            CT: () => ot,
            BA: () => ut,
            TO: () => ft,
            np: () => et,
            q1: () => xr,
          });
        var u = h(80613),
          m = h.n(u),
          t = h(75245),
          T = h(35038),
          yr = h(3367);
        const Ir = 0,
          Tr = 1,
          I = 2,
          S = 3,
          W = 4,
          B = 5,
          l = 6,
          c = 7,
          f = 8,
          A = 9,
          br = 10,
          hr = 11,
          Nr = 12,
          Fr = 13,
          Er = 14,
          Ar = 15,
          Lr = 16,
          vr = 17,
          Dr = 0,
          n = 1,
          z = 2,
          Wr = 3,
          Kr = 4,
          $r = 5,
          Qr = 1,
          Yr = 2,
          Jr = 3,
          Ft = 0,
          Xr = 1,
          Zr = 2,
          Hr = 3,
          Kt = 4,
          Vr = 5,
          Pr = 0,
          qr = 1,
          Rr = 2,
          Gr = 0,
          Cr = 1,
          sr = 2,
          _r = 3,
          kr = 4,
          gr = 5,
          Mr = 6,
          rt = 7,
          tt = 8,
          it = 9,
          lt = 10,
          nt = 11,
          mt = 12,
          ct = 13,
          xr = 0,
          ut = 1,
          $t = 2,
          ot = 3,
          dt = 4,
          ft = 5,
          Bt = 6,
          ht = 7,
          et = 8,
          Qt = 9,
          yt = 0,
          Yt = 1,
          Jt = 2,
          Xt = 3,
          Zt = 4,
          Ht = 5,
          Vt = 6;
        function Pt(w) {
          return "unknown EMarketingMessageType ( " + w + " )";
        }
        function qt(w) {
          return "unknown EMarketingMessageAssociationType ( " + w + " )";
        }
        function Rt(w) {
          return "unknown EMarketingMessageVisibility ( " + w + " )";
        }
        function Gt(w) {
          return "unknown EMarketingMessageLookupType ( " + w + " )";
        }
        function Ct(w) {
          return "unknown EMarketingMessageValidRealms ( " + w + " )";
        }
        function st(w) {
          return "unknown EMarketingMessageFilterType ( " + w + " )";
        }
        function _t(w) {
          return "unknown EMarketingMessageTemplateType ( " + w + " )";
        }
        function kt(w) {
          return "unknown EMarketingMessageClickLocation ( " + w + " )";
        }
        class O extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              O.prototype.gid || t.Sg(O.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    type: { n: 3, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    visibility: { n: 4, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    priority: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    association_type: {
                      n: 6,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    associated_id: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    associated_name: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    start_date: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    end_date: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    country_allow: {
                      n: 11,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    country_deny: {
                      n: 12,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    ownership_restrictions_overridden: {
                      n: 13,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    must_own_appid: {
                      n: 14,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    must_not_own_appid: {
                      n: 15,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    must_own_packageid: {
                      n: 16,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    must_not_own_packageid: {
                      n: 17,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    must_have_launched_appid: {
                      n: 18,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    additional_restrictions: {
                      n: 19,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    template_type: {
                      n: 20,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    template_vars: {
                      n: 21,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    flags: { n: 22, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    creator_name: {
                      n: 23,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    template_vars_json: {
                      n: 24,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    additional_restrictions_json: {
                      n: 25,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = t.w0(O.M())), O.sm_mbf;
          }
          toObject(r = !1) {
            return O.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(O.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(O.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new O();
            return O.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(O.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return O.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(O.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessageProto";
          }
        }
        class L extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              L.prototype.gid || t.Sg(L.M()),
              u.Message.initialize(this, r, 0, -1, [12], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    type: { n: 3, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    associated_item_id: { n: 4, c: yr.O4 },
                    associated_item: { n: 5, c: yr.vB },
                    associated_name: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    template_type: {
                      n: 10,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    template_vars_json: {
                      n: 11,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    recommended_items: { n: 12, c: yr.O4, r: !0, q: !0 },
                    sale_item_count: {
                      n: 13,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = t.w0(L.M())), L.sm_mbf;
          }
          toObject(r = !1) {
            return L.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(L.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(L.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new L();
            return L.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(L.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return L.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(L.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CDisplayMarketingMessage";
          }
        }
        class P extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              P.prototype.country || t.Sg(P.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    country: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    anonymous_user: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = t.w0(P.M())), P.sm_mbf;
          }
          toObject(r = !1) {
            return P.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(P.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(P.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new P();
            return P.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(P.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return P.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(P.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetActiveMarketingMessages_Request";
          }
        }
        class q extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.messages || t.Sg(q.M()),
              u.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    messages: { n: 1, c: O, r: !0, q: !0 },
                    time_next_message_age: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = t.w0(q.M())), q.sm_mbf;
          }
          toObject(r = !1) {
            return q.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(q.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new q();
            return q.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(q.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(q.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetActiveMarketingMessages_Response";
          }
        }
        class D extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.start_past_days || t.Sg(D.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    start_past_days: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    upto_past_days: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = t.w0(D.M())), D.sm_mbf;
          }
          toObject(r = !1) {
            return D.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(D.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new D();
            return D.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(D.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(D.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetPastMarketingMessages_Request";
          }
        }
        class R extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              R.prototype.messages || t.Sg(R.M()),
              u.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: { messages: { n: 1, c: O, r: !0, q: !0 } },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = t.w0(R.M())), R.sm_mbf;
          }
          toObject(r = !1) {
            return R.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(R.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(R.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new R();
            return R.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(R.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return R.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(R.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetPastMarketingMessages_Response";
          }
        }
        class x extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              x.prototype.include_seen_messages || t.Sg(x.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    include_seen_messages: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    country_code: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    elanguage: {
                      n: 3,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    operating_system: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    client_package_version: {
                      n: 5,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    context: { n: 6, c: yr.TS },
                    data_request: { n: 7, c: yr.gn },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = t.w0(x.M())), x.sm_mbf;
          }
          toObject(r = !1) {
            return x.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(x.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(x.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new x();
            return x.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(x.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return x.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(x.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetMarketingMessagesForUser_Request";
          }
        }
        class G extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              G.prototype.messages || t.Sg(G.M()),
              u.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: { messages: { n: 1, c: C, r: !0, q: !0 } },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = t.w0(G.M())), G.sm_mbf;
          }
          toObject(r = !1) {
            return G.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(G.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(G.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new G();
            return G.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(G.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return G.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(G.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetMarketingMessagesForUser_Response";
          }
        }
        class C extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              C.prototype.already_seen || t.Sg(C.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    already_seen: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    message: { n: 2, c: L },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = t.w0(C.M())), C.sm_mbf;
          }
          toObject(r = !1) {
            return C.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(C.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(C.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new C();
            return C.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(C.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return C.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(C.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser";
          }
        }
        class s extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              s.prototype.country_code || t.Sg(s.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              s.sm_m ||
                (s.sm_m = {
                  proto: s,
                  fields: {
                    country_code: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    elanguage: {
                      n: 3,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    operating_system: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    client_package_version: {
                      n: 5,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              s.sm_m
            );
          }
          static MBF() {
            return s.sm_mbf || (s.sm_mbf = t.w0(s.M())), s.sm_mbf;
          }
          toObject(r = !1) {
            return s.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(s.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(s.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new s();
            return s.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(s.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return s.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(s.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              s.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Request";
          }
        }
        class _ extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _.prototype.has_pending_messages || t.Sg(_.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    has_pending_messages: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    pending_message_count: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = t.w0(_.M())), _.sm_mbf;
          }
          toObject(r = !1) {
            return _.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(_.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(_.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new _();
            return _.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(_.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return _.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(_.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Response";
          }
        }
        class j extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              j.prototype.gid || t.Sg(j.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    context: { n: 2, c: yr.TS },
                    data_request: { n: 3, c: yr.gn },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = t.w0(j.M())), j.sm_mbf;
          }
          toObject(r = !1) {
            return j.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(j.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(j.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new j();
            return j.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(j.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return j.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(j.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetDisplayMarketingMessage_Request";
          }
        }
        class v extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              v.prototype.message || t.Sg(v.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = { proto: v, fields: { message: { n: 1, c: L } } }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = t.w0(v.M())), v.sm_mbf;
          }
          toObject(r = !1) {
            return v.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(v.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(v.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new v();
            return v.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(v.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return v.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(v.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetDisplayMarketingMessage_Response";
          }
        }
        class U extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              U.prototype.gid || t.Sg(U.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    display_index: {
                      n: 2,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    template_type: {
                      n: 3,
                      d: xr,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = t.w0(U.M())), U.sm_mbf;
          }
          toObject(r = !1) {
            return U.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(U.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(U.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new U();
            return U.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(U.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return U.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(U.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_MarkMessageSeen_Notification";
          }
        }
        class k extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.gid || t.Sg(k.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    display_index: {
                      n: 2,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    template_type: {
                      n: 3,
                      d: xr,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    click_location: {
                      n: 4,
                      d: yt,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = t.w0(k.M())), k.sm_mbf;
          }
          toObject(r = !1) {
            return k.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(k.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(k.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new k();
            return k.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(k.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return k.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(k.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_MarkMessageClicked_Notification";
          }
        }
        class g extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              g.prototype.gid || t.Sg(g.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = t.w0(g.M())), g.sm_mbf;
          }
          toObject(r = !1) {
            return g.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(g.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(g.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new g();
            return g.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(g.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return g.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(g.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetMarketingMessage_Request";
          }
        }
        class M extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              M.prototype.message || t.Sg(M.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = { proto: M, fields: { message: { n: 1, c: O } } }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = t.w0(M.M())), M.sm_mbf;
          }
          toObject(r = !1) {
            return M.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(M.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(M.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new M();
            return M.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(M.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return M.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(M.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetMarketingMessage_Response";
          }
        }
        class N extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              N.prototype.lookup_type || t.Sg(N.M()),
              u.Message.initialize(this, r, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    lookup_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    gid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    message_type: {
                      n: 3,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    gidlist: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: t.qM.readFixed64String,
                      pbr: t.qM.readPackedFixed64String,
                      bw: t.gp.writeRepeatedFixed64String,
                    },
                    title: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                    associated_id: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = t.w0(N.M())), N.sm_mbf;
          }
          toObject(r = !1) {
            return N.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(N.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(N.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new N();
            return N.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(N.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return N.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(N.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_FindMarketingMessages_Request";
          }
        }
        class rr extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rr.prototype.messages || t.Sg(rr.M()),
              u.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rr.sm_m ||
                (rr.sm_m = {
                  proto: rr,
                  fields: { messages: { n: 1, c: O, r: !0, q: !0 } },
                }),
              rr.sm_m
            );
          }
          static MBF() {
            return rr.sm_mbf || (rr.sm_mbf = t.w0(rr.M())), rr.sm_mbf;
          }
          toObject(r = !1) {
            return rr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(rr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(rr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new rr();
            return rr.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(rr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(rr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_FindMarketingMessages_Response";
          }
        }
        class F extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              F.prototype.message || t.Sg(F.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    message: { n: 1, c: O },
                    from_json: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = t.w0(F.M())), F.sm_mbf;
          }
          toObject(r = !1) {
            return F.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(F.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(F.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new F();
            return F.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(F.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return F.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(F.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_CreateMarketingMessage_Request";
          }
        }
        class tr extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tr.prototype.gid || t.Sg(tr.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = t.w0(tr.M())), tr.sm_mbf;
          }
          toObject(r = !1) {
            return tr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(tr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(tr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new tr();
            return tr.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(tr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(tr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_CreateMarketingMessage_Response";
          }
        }
        class K extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.gid || t.Sg(K.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    message: { n: 2, c: O },
                    from_json: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = t.w0(K.M())), K.sm_mbf;
          }
          toObject(r = !1) {
            return K.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(K.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new K();
            return K.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(K.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(K.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_UpdateMarketingMessage_Request";
          }
        }
        class zr extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return zr.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new zr();
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new zr();
            return zr.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_UpdateMarketingMessage_Response";
          }
        }
        class $ extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.gid || t.Sg($.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = t.w0($.M())), $.sm_mbf;
          }
          toObject(r = !1) {
            return $.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT($.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new $();
            return $.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj($.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0($.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_DeleteMarketingMessage_Request";
          }
        }
        class Or extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Or.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Or();
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new Or();
            return Or.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_DeleteMarketingMessage_Response";
          }
        }
        class Q extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Q.prototype.gid || t.Sg(Q.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = t.w0(Q.M())), Q.sm_mbf;
          }
          toObject(r = !1) {
            return Q.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Q.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Q.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new Q();
            return Q.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Q.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Q.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetMarketingMessageViewerStats_Request";
          }
        }
        class Y extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Y.prototype.rt_time_hour || t.Sg(Y.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    rt_time_hour: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    seen_count: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    template_type: {
                      n: 3,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    display_index: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = t.w0(Y.M())), Y.sm_mbf;
          }
          toObject(r = !1) {
            return Y.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Y.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Y.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new Y();
            return Y.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Y.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Y.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessageHourlyStats";
          }
        }
        class ir extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ir.prototype.stats || t.Sg(ir.M()),
              u.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: { stats: { n: 1, c: Y, r: !0, q: !0 } },
                }),
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = t.w0(ir.M())), ir.sm_mbf;
          }
          toObject(r = !1) {
            return ir.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ir.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ir.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new ir();
            return ir.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ir.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ir.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetMarketingMessageViewerStats_Response";
          }
        }
        class J extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              J.prototype.rt_start_time || t.Sg(J.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    rt_start_time: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    rt_end_time: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = t.w0(J.M())), J.sm_mbf;
          }
          toObject(r = !1) {
            return J.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(J.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(J.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new J();
            return J.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(J.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(J.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetMarketingMessagesViewerRangeStats_Request";
          }
        }
        class X extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              X.prototype.rt_time_hour || t.Sg(X.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    rt_time_hour: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    clicked_count: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    display_index: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    template_type: {
                      n: 4,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    click_location: {
                      n: 5,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = t.w0(X.M())), X.sm_mbf;
          }
          toObject(r = !1) {
            return X.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(X.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(X.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new X();
            return X.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(X.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return X.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(X.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessageClickedHourlyStats";
          }
        }
        class lr extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lr.prototype.stats || t.Sg(lr.M()),
              u.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lr.sm_m ||
                (lr.sm_m = {
                  proto: lr,
                  fields: {
                    stats: { n: 1, c: Y, r: !0, q: !0 },
                    clicked_stats: { n: 2, c: X, r: !0, q: !0 },
                  },
                }),
              lr.sm_m
            );
          }
          static MBF() {
            return lr.sm_mbf || (lr.sm_mbf = t.w0(lr.M())), lr.sm_mbf;
          }
          toObject(r = !1) {
            return lr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(lr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(lr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new lr();
            return lr.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(lr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(lr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetMarketingMessagesViewerRangeStats_Response";
          }
        }
        class Z extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Z.prototype.gid || t.Sg(Z.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = t.w0(Z.M())), Z.sm_mbf;
          }
          toObject(r = !1) {
            return Z.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Z.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Z.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new Z();
            return Z.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Z.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Z.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetMarketingMessageClickedStats_Request";
          }
        }
        class nr extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nr.prototype.stats || t.Sg(nr.M()),
              u.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
                  fields: { stats: { n: 1, c: X, r: !0, q: !0 } },
                }),
              nr.sm_m
            );
          }
          static MBF() {
            return nr.sm_mbf || (nr.sm_mbf = t.w0(nr.M())), nr.sm_mbf;
          }
          toObject(r = !1) {
            return nr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(nr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(nr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new nr();
            return nr.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(nr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(nr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetMarketingMessageClickedStats_Response";
          }
        }
        class mr extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mr.prototype.partnerid || t.Sg(mr.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: {
                    partnerid: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              mr.sm_m
            );
          }
          static MBF() {
            return mr.sm_mbf || (mr.sm_mbf = t.w0(mr.M())), mr.sm_mbf;
          }
          toObject(r = !1) {
            return mr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(mr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(mr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new mr();
            return mr.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(mr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(mr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetPartnerReadyToPublishMessages_Request";
          }
        }
        class cr extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              cr.prototype.messages || t.Sg(cr.M()),
              u.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              cr.sm_m ||
                (cr.sm_m = {
                  proto: cr,
                  fields: { messages: { n: 1, c: L, r: !0, q: !0 } },
                }),
              cr.sm_m
            );
          }
          static MBF() {
            return cr.sm_mbf || (cr.sm_mbf = t.w0(cr.M())), cr.sm_mbf;
          }
          toObject(r = !1) {
            return cr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(cr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(cr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new cr();
            return cr.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(cr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(cr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetPartnerReadyToPublishMessages_Response";
          }
        }
        class H extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              H.prototype.gid || t.Sg(H.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    partnerid: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = t.w0(H.M())), H.sm_mbf;
          }
          toObject(r = !1) {
            return H.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(H.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(H.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new H();
            return H.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(H.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return H.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(H.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_PartnerPublishMessage_Request";
          }
        }
        class Sr extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Sr.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Sr();
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new Sr();
            return Sr.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_PartnerPublishMessage_Response";
          }
        }
        class V extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.gid || t.Sg(V.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    partnerid: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = t.w0(V.M())), V.sm_mbf;
          }
          toObject(r = !1) {
            return V.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(V.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(V.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new V();
            return V.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(V.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(V.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetPartnerMessagePreview_Request";
          }
        }
        class ur extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ur.prototype.message || t.Sg(ur.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ur.sm_m ||
                (ur.sm_m = { proto: ur, fields: { message: { n: 1, c: O } } }),
              ur.sm_m
            );
          }
          static MBF() {
            return ur.sm_mbf || (ur.sm_mbf = t.w0(ur.M())), ur.sm_mbf;
          }
          toObject(r = !1) {
            return ur.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ur.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ur.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new ur();
            return ur.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ur.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ur.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetPartnerMessagePreview_Response";
          }
        }
        class or extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              or.prototype.appids || t.Sg(or.M()),
              u.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              or.sm_m ||
                (or.sm_m = {
                  proto: or,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              or.sm_m
            );
          }
          static MBF() {
            return or.sm_mbf || (or.sm_mbf = t.w0(or.M())), or.sm_mbf;
          }
          toObject(r = !1) {
            return or.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(or.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(or.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new or();
            return or.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(or.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(or.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessage_GetMarketingMessagesForApps_Request";
          }
        }
        class dr extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dr.prototype.messages || t.Sg(dr.M()),
              u.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
                  fields: { messages: { n: 1, c: O, r: !0, q: !0 } },
                }),
              dr.sm_m
            );
          }
          static MBF() {
            return dr.sm_mbf || (dr.sm_mbf = t.w0(dr.M())), dr.sm_mbf;
          }
          toObject(r = !1) {
            return dr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(dr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(dr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new dr();
            return dr.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(dr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(dr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessage_GetMarketingMessagesForApps_Response";
          }
        }
        class fr extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fr.prototype.partnerid || t.Sg(fr.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: {
                    partnerid: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              fr.sm_m
            );
          }
          static MBF() {
            return fr.sm_mbf || (fr.sm_mbf = t.w0(fr.M())), fr.sm_mbf;
          }
          toObject(r = !1) {
            return fr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(fr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(fr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new fr();
            return fr.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(fr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(fr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessage_GetMarketingMessagesForPartner_Request";
          }
        }
        class Br extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Br.prototype.messages || t.Sg(Br.M()),
              u.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: { messages: { n: 1, c: O, r: !0, q: !0 } },
                }),
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = t.w0(Br.M())), Br.sm_mbf;
          }
          toObject(r = !1) {
            return Br.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Br.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Br.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (m().BinaryReader)(r),
              o = new Br();
            return Br.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Br.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Br.M(), r, i);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessage_GetMarketingMessagesForPartner_Response";
          }
        }
        var Ur;
        ((w) => {
          function r(y, p, a) {
            return y.SendMsg(
              "MarketingMessages.GetActiveMarketingMessages#1",
              (0, T.I8)(P, p, a),
              q,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          w.GetActiveMarketingMessages = r;
          function i(y, p, a) {
            return y.SendMsg(
              "MarketingMessages.GetPastMarketingMessages#1",
              (0, T.I8)(D, p, a),
              R,
              {
                bConstMethod: !0,
                ePrivilege: 4,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          w.GetPastMarketingMessages = i;
          function o(y, p, a) {
            return y.SendMsg(
              "MarketingMessages.GetMarketingMessagesForUser#1",
              (0, T.I8)(x, p, a),
              G,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          w.GetMarketingMessagesForUser = o;
          function pt(y, p, a) {
            return y.SendMsg(
              "MarketingMessages.DoesUserHavePendingMarketingMessages#1",
              (0, T.I8)(s, p, a),
              _,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          w.DoesUserHavePendingMarketingMessages = pt;
          function bt(y, p, a) {
            return y.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessage#1",
              (0, T.I8)(j, p, a),
              v,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          w.GetDisplayMarketingMessage = bt;
          function at(y, p, a) {
            return y.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessageForUser#1",
              (0, T.I8)(j, p, a),
              v,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          w.GetDisplayMarketingMessageForUser = at;
          function wt(y, p, a) {
            return y.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessageAdmin#1",
              (0, T.I8)(j, p, a),
              v,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          w.GetDisplayMarketingMessageAdmin = wt;
          function Tt(y, p) {
            return y.SendNotification(
              "MarketingMessages.MarkMessageSeen#1",
              (0, T.I8)(U, p),
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          w.MarkMessageSeen = Tt;
          function It(y, p) {
            return y.SendNotification(
              "MarketingMessages.MarkMessageClicked#1",
              (0, T.I8)(k, p),
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          w.MarkMessageClicked = It;
          function zt(y, p, a) {
            return y.SendMsg(
              "MarketingMessages.GetMarketingMessage#1",
              (0, T.I8)(g, p, a),
              M,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          w.GetMarketingMessage = zt;
          function Ot(y, p, a) {
            return y.SendMsg(
              "MarketingMessages.CreateMarketingMessage#1",
              (0, T.I8)(F, p, a),
              tr,
              { ePrivilege: 4, rgBrowserAPISites: ["partner"] },
            );
          }
          w.CreateMarketingMessage = Ot;
          function St(y, p, a) {
            return y.SendMsg(
              "MarketingMessages.UpdateMarketingMessage#1",
              (0, T.I8)(K, p, a),
              zr,
              { ePrivilege: 5, rgBrowserAPISites: ["partner"] },
            );
          }
          w.UpdateMarketingMessage = St;
          function Wt(y, p, a) {
            return y.SendMsg(
              "MarketingMessages.DeleteMarketingMessage#1",
              (0, T.I8)($, p, a),
              Or,
              { ePrivilege: 4, rgBrowserAPISites: ["partner"] },
            );
          }
          w.DeleteMarketingMessage = Wt;
          function jt(y, p, a) {
            return y.SendMsg(
              "MarketingMessages.FindMarketingMessages#1",
              (0, T.I8)(N, p, a),
              rr,
              { ePrivilege: 5, rgBrowserAPISites: ["partner"] },
            );
          }
          w.FindMarketingMessages = jt;
          function Et(y, p, a) {
            return y.SendMsg(
              "MarketingMessages.GetMarketingMessageViewerStats#1",
              (0, T.I8)(Q, p, a),
              ir,
              { ePrivilege: 4, rgBrowserAPISites: ["partner"] },
            );
          }
          w.GetMarketingMessageViewerStats = Et;
          function At(y, p, a) {
            return y.SendMsg(
              "MarketingMessages.GetMarketingMessagesViewerRangeStats#1",
              (0, T.I8)(J, p, a),
              lr,
              { ePrivilege: 4, rgBrowserAPISites: ["partner"] },
            );
          }
          w.GetMarketingMessagesViewerRangeStats = At;
          function Lt(y, p, a) {
            return y.SendMsg(
              "MarketingMessages.GetMarketingMessageClickedStats#1",
              (0, T.I8)(Z, p, a),
              nr,
              { ePrivilege: 4, rgBrowserAPISites: ["partner"] },
            );
          }
          w.GetMarketingMessageClickedStats = Lt;
          function vt(y, p, a) {
            return y.SendMsg(
              "MarketingMessages.GetPartnerReadyToPublishMessages#1",
              (0, T.I8)(mr, p, a),
              cr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.GetPartnerReadyToPublishMessages = vt;
          function Dt(y, p, a) {
            return y.SendMsg(
              "MarketingMessages.PublishPartnerMessage#1",
              (0, T.I8)(H, p, a),
              Sr,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          w.PublishPartnerMessage = Dt;
          function xt(y, p, a) {
            return y.SendMsg(
              "MarketingMessages.GetPartnerMessagePreview#1",
              (0, T.I8)(V, p, a),
              ur,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          w.GetPartnerMessagePreview = xt;
          function Ut(y, p, a) {
            return y.SendMsg(
              "MarketingMessages.GetMarketingMessagesForPartner#1",
              (0, T.I8)(fr, p, a),
              Br,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.GetMarketingMessagesForPartner = Ut;
          function Nt(y, p, a) {
            return y.SendMsg(
              "MarketingMessages.GetMarketingMessagesForApps#1",
              (0, T.I8)(or, p, a),
              dr,
              { ePrivilege: 4 },
            );
          }
          w.GetMarketingMessagesForApps = Nt;
        })(Ur || (Ur = {}));
      },
      25046: (jr, wr, h) => {
        h.d(wr, {
          M4: () => T,
          TH: () => u,
          Wv: () => Ir,
          hg: () => Tr,
          hl: () => t,
          kB: () => E,
        });
        var e = h(7850),
          d = h(72609),
          pr = h(40358),
          er = h(41032),
          b = h(90626);
        function E(I, S) {
          const { data: W } = (0, pr.Yo)(I),
            B = (0, er.dy)();
          return b.useMemo(() => {
            if (W === void 0) return;
            if (W === null) return null;
            const l = [...(W.highlights || []), ...(W.other_trailers || [])];
            return B && !S ? l.filter((c) => !!c.all_ages) : l;
          }, [W, B, S]);
        }
        function ar(I, S, W, B) {
          const l = E(I, B);
          if (!(!l || l.length == 0))
            return S
              ? l.find((c) => c.trailer_base_id === S)
              : W
                ? l[0]
                : void 0;
        }
        function u(I) {
          let S = E(I);
          if (!(!S || S.length == 0)) return S[0];
        }
        function m(I) {
          const { trailer: S, ...W } = I,
            B = t(S);
          return jsx("img", { ...W, src: B, alt: S.trailer_name });
        }
        function t(I) {
          return `${d.TS.STORE_ITEM_BASE_URL}${I.trailer_url_format.replace("${FILENAME}", I.screenshot_full ?? I.screenshot_medium ?? "")}`;
        }
        function T(I, S) {
          return `${d.TS.VIDEO_CDN_URL}store_trailers/${I.trailer_url_format.replace("${FILENAME}", S)}`;
        }
        function yr(I, S) {
          return `${d.TS.VIDEO_CDN_URL}store_trailers/${S}`;
        }
        function Ir(I) {
          let S =
            typeof I.captions_manifest == "function"
              ? I.captions_manifest()
              : I.captions_manifest;
          if (!S) return;
          let W = d.TS,
            B;
          if (
            (W.MEDIA_CDN_URL
              ? (B = W.MEDIA_CDN_URL)
              : W.CDN_HOST_MEDIA && (B = W.CDN_HOST_MEDIA),
            !!B)
          )
            return `${B}/${S}`;
        }
        function Tr(I) {
          let S = [];
          I.adaptive_trailers &&
            (S = I.adaptive_trailers
              .filter(
                (B) =>
                  (B.encoding == "dash_h264" || B.encoding == "dash_av1") &&
                  B.cdn_path,
              )
              .map((B) => yr(I, B.cdn_path || "")));
          let W = [];
          return (
            I.adaptive_trailers &&
              (W = I.adaptive_trailers
                .filter((B) => B.encoding == "hls_h264" && B.cdn_path)
                .map((B) => yr(I, B.cdn_path || ""))),
            { rgDashTrailers: S, rgHlsTrailers: W }
          );
        }
      },
      41032: (jr, wr, h) => {
        h.d(wr, { Zj: () => c, dy: () => Ir });
        var e = h(90626),
          d = h(72609),
          pr = h(52438),
          er = h(18735),
          b = h(36174),
          E = h(20194),
          ar = h(40358);
        const u = e.createContext({ eAdultOnlyMediaBehavior: "masked" });
        function m(f) {
          const { eAdultOnlyMediaBehavior: A, children: br } = f,
            hr = React.useMemo(() => ({ eAdultOnlyMediaBehavior: A }), [A]);
          return React.createElement(u.Provider, { value: hr }, br);
        }
        const t = {
          name: "forceallages",
          preferenceControls: { isTechnicallyNecessary: !0 },
        };
        function T() {
          return e.useMemo(() => {
            const f = (0, pr.j_)(t);
            return !!(
              (f && f !== "0") ||
              (d.TS.IN_MOBILE_WEBVIEW && navigator.userAgent.match(/Android/))
            );
          }, []);
        }
        function yr() {
          const { eAdultOnlyMediaBehavior: f } = e.useContext(u),
            A = l();
          return T() ||
            (f == "masked" &&
              (d.iA.excluded_content_descriptors.includes(er.T4) ||
                d.iA.excluded_content_descriptors.includes(er.u7)))
            ? "blocked"
            : f == "masked" && A
              ? "allowed"
              : f;
        }
        function Ir() {
          return yr() != "allowed";
        }
        const Tr = {
            name: "bDisableAOWarning",
            options: { path: "/" },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          I = 2 * b.Kp.PerDay;
        function S() {
          const f = useQueryClient();
          return React.useCallback(() => {
            WriteCookie(Tr, String(Math.floor(Date.now() / 1e3) + I)),
              f.invalidateQueries({ queryKey: ["AOWarningCookie"] });
          }, [f]);
        }
        function W() {
          const f = (0, pr.j_)(Tr),
            A = f ? parseInt(f) : 0;
          return A != 0 ? A : null;
        }
        function B() {
          return {
            queryKey: ["AOWarningCookie"],
            queryFn: () => W(),
            placeholderData: () => W(),
            staleTime: 0,
          };
        }
        function l() {
          const { data: f } = (0, E.I)(B());
          return f && f > Date.now() / 1e3;
        }
        function c(f) {
          const br = yr() == "blocked" && !!f,
            { data: hr } = (0, ar.J$)(br ? { appid: f } : void 0);
          return br
            ? hr
              ? hr.content_descriptorids.includes(er.u7) ||
                hr.content_descriptorids.includes(er.T4)
              : !0
            : !1;
        }
      },
      14874: (jr, wr, h) => {
        h.d(wr, { Ay: () => t, DJ: () => S, QO: () => W });
        var e = h(3367),
          d = h(10349),
          pr = h(18210),
          er = h(92264),
          b = h(3166),
          E = h(11512),
          ar = h(41635),
          u = h(71742),
          m = h(25046);
        class t {
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
          m_rgOptInRegistrationTags;
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
          constructor(l, c) {
            (this.m_eItemType = l.item_type()),
              (this.m_unID = l.id()),
              (this.m_bVisible = !!l.visible()),
              (this.m_strName = l.name()),
              (this.m_strStoreURLPath = l.store_url_path()),
              (this.m_unAppID = l.appid()),
              (this.m_eAppType = l.type()),
              (this.m_rgIncludedAppTypes = l.included_types()),
              (this.m_rgIncludedAppIDs = l.included_appids()),
              (this.m_bIsFree = !!l.is_free()),
              (this.m_bIsFreeTemporary = !!l.is_free_temporarily()),
              (this.m_bIsComingSoon =
                !!l.is_coming_soon() || !!l.release()?.is_coming_soon()),
              (this.m_bIsEarlyAccess = !!l.is_early_access()),
              (this.m_RelatedItems = l.related_items()?.toObject()),
              (this.m_ContentDescriptorIDs = l.content_descriptorids()),
              (this.m_StoreCategories = l.categories().toObject()),
              (this.m_BestPurchaseOption = l
                .best_purchase_option()
                ?.toObject()),
              (this.m_strStoreURLPathOverride = l.store_url_path_override()),
              (this.m_freeWeekend = l.free_weekend()?.toObject()),
              (this.m_strInternalName = l.internal_name()),
              (this.m_eItemType == e.c6.RD || this.m_eItemType == e.c6.xO) &&
                (this.m_SelfPurchaseOption = l.self_purchase_option(!1)
                  ? l.self_purchase_option().toObject()
                  : this.m_BestPurchaseOption),
              this.MergeData(l, c);
          }
          MergeData(l, c) {
            c.include_assets &&
              !this.m_Assets &&
              ((this.m_Assets = new yr(l.assets(), l.id())),
              (this.m_DataRequested.include_assets = !0)),
              c.include_assets_without_overrides &&
                !this.m_AssetsWithoutOverrides &&
                ((this.m_AssetsWithoutOverrides = new yr(
                  l.assets_without_overrides(),
                  l.id(),
                )),
                (this.m_DataRequested.include_assets_without_overrides = !0)),
              c.include_release &&
                !this.m_ReleaseInfo &&
                ((this.m_ReleaseInfo = l.release().toObject()),
                (this.m_DataRequested.include_release = !0)),
              c.include_platforms &&
                !this.m_Platforms &&
                ((this.m_Platforms = l.platforms().toObject()),
                (this.m_DataRequested.include_platforms = !0)),
              c.include_all_purchase_options &&
                !this.m_rgPurchaseOptions &&
                ((this.m_rgPurchaseOptions = l
                  .purchase_options()
                  .map((f) => f.toObject())),
                (this.m_DataRequested.include_all_purchase_options = !0)),
              c.include_screenshots &&
                !this.m_Screenshots &&
                ((this.m_Screenshots = new I(l.screenshots())),
                (this.m_DataRequested.include_screenshots = !0)),
              c.include_trailers &&
                !this.m_Trailers &&
                ((this.m_Trailers = new Ir(l.trailers())),
                (this.m_DataRequested.include_trailers = !0)),
              c.include_tag_count &&
                c.include_tag_count > this.m_rgStoreTags.length &&
                this.m_DataRequested.include_tag_count < c.include_tag_count &&
                ((this.m_rgStoreTags = l.tags().map((f) => f.toObject())),
                (this.m_rgStoreTagIDs = this.m_rgStoreTags.map((f) => f.tagid)),
                (this.m_DataRequested.include_tag_count = Math.max(
                  c.include_tag_count,
                  this.m_rgStoreTags.length || 0,
                ))),
              c.include_optin_registration_tags &&
                !this.m_rgOptInRegistrationTags &&
                ((this.m_rgOptInRegistrationTags = l
                  .optin_registration_tags()
                  .map((f) => f.toObject())),
                (this.m_DataRequested.include_optin_registration_tags = !0)),
              c.include_reviews &&
                !this.m_ReviewInfo &&
                ((this.m_ReviewInfo = l.reviews().toObject()),
                (this.m_DataRequested.include_reviews = !0)),
              c.include_basic_info &&
                !this.m_BasicInfo &&
                ((this.m_BasicInfo = l.basic_info().toObject()),
                (this.m_DataRequested.include_basic_info = !0)),
              c.include_supported_languages &&
                !this.m_rgSupportedLanguages &&
                ((this.m_rgSupportedLanguages = l
                  .supported_languages()
                  .map((f) => f.toObject())),
                (this.m_DataRequested.include_supported_languages = !0)),
              c.include_links &&
                !this.m_rgLinks &&
                ((this.m_rgLinks = l.links().map((f) => f.toObject())),
                (this.m_DataRequested.include_links = !0)),
              c.apply_user_filters &&
                !this.m_userFilterFailure &&
                ((this.m_userFilterFailure = l
                  .user_filter_failure()
                  ?.toObject()),
                (this.m_DataRequested.apply_user_filters = !0)),
              c.include_full_description &&
                !this.m_strFullDescriptionBBCode &&
                ((this.m_strFullDescriptionBBCode =
                  l.full_description_bbcode()),
                (this.m_DataRequested.include_full_description = !0));
          }
          static BDataRequestContainsOtherDataRequest(l, c) {
            return !!(
              (!c.include_assets || l.include_assets) &&
              (!c.include_assets_without_overrides ||
                l.include_assets_without_overrides) &&
              (!c.include_release || l.include_release) &&
              (!c.include_platforms || l.include_platforms) &&
              (!c.include_all_purchase_options ||
                l.include_all_purchase_options) &&
              (!c.include_screenshots || l.include_screenshots) &&
              (!c.include_trailers || l.include_trailers) &&
              (!c.include_ratings || l.include_ratings) &&
              (!c.include_tag_count ||
                (l.include_tag_count || 0) >= c.include_tag_count) &&
              (!c.include_reviews || l.include_reviews) &&
              (!c.include_basic_info || l.include_basic_info) &&
              (!c.include_supported_languages ||
                l.include_supported_languages) &&
              (!c.include_full_description || l.include_full_description) &&
              (!c.include_links || l.include_links) &&
              (!c.apply_user_filters || l.apply_user_filters) &&
              (!c.include_optin_registration_tags ||
                l.include_optin_registration_tags)
            );
          }
          BContainDataRequest(l) {
            return t.BDataRequestContainsOtherDataRequest(
              this.m_DataRequested,
              l,
            );
          }
          BCheckDataRequestIncluded(l) {}
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
          GetStorePageURL(l = !1) {
            return l && this.HasDemoStandaloneStorePage()
              ? b.TS.STORE_BASE_URL +
                  "app/" +
                  this.GetDemoStandaloneStorePageAppIDs()[0]
              : b.TS.STORE_BASE_URL + this.m_strStoreURLPath;
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
              ? b.TS.COMMUNITY_BASE_URL + "app/" + this.GetAppID()
              : null;
          }
          GetCommunityDiscussionForumsURL() {
            return this.GetAppID()
              ? b.TS.COMMUNITY_BASE_URL +
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
            return this.GetAppType() == e.uE.Sv || this.GetAppType() == e.uE.Lj;
          }
          k_regexSalePage =
            /^https?:\/\/[^\/]*(?:valvesoftware|steampowered).com\/(?:(curator|dev|developer|pub|publisher|franchise)\/[0-9a-zA-Z\-_]+\/)?sale\//;
          BIsSalePage() {
            return this.GetStoreItemType() === e.c6.qI
              ? this.k_regexSalePage.test(this.GetStorePageURLWithOverride())
              : !1;
          }
          GetSalePageVanityURL() {
            let l = this.GetStorePageURLWithOverride();
            return (
              this.GetStoreItemType() === e.c6.qI &&
                ((l = this.GetStorePageURLWithOverride().replace(
                  this.k_regexSalePage,
                  "",
                )),
                l.endsWith("/") && (l = l.replace("/", ""))),
              l
            );
          }
          GetIncludedAppTypes() {
            return this.m_rgIncludedAppTypes;
          }
          GetIncludedAppIDs() {
            return this.m_rgIncludedAppIDs;
          }
          GetIncludedAppIDsOrSelf() {
            return this.GetStoreItemType() == e.c6.qI
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
            const l = Date.now() / 1e3;
            return (
              !!this.m_freeWeekend &&
              this.m_freeWeekend.start_time <= l &&
              l <= this.m_freeWeekend.end_time
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
            return (
              (this.m_RelatedItems?.standalone_demo_appid?.length ?? 0) > 0
            );
          }
          GetDemoStandaloneStorePageAppIDs() {
            return this.m_RelatedItems?.standalone_demo_appid ?? [];
          }
          GetContentDescriptorIDs() {
            return this.m_ContentDescriptorIDs;
          }
          HasContentDescriptorID(l) {
            return this.m_ContentDescriptorIDs?.includes(l);
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
          BHasStoreCategory(l) {
            return !!(
              this.GetStoreCategories_SupportedPlayers().find((c) => l === c) ||
              this.GetStoreCategories_Features().find((c) => l === c) ||
              this.GetStoreCategories_Controller().find((c) => l === c)
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
                ?.map((l) => l.name.trim())
                ?.filter((l) => l?.length > 0) ?? []
            );
          }
          GetFranchiseNames() {
            return (
              this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
              this.m_BasicInfo?.franchises
                ?.map((l) => l.name.trim())
                ?.filter((l) => l?.length > 0) ?? []
            );
          }
          GetPublisherNames() {
            this.BCheckDataRequestIncluded({ include_basic_info: !0 });
            const l =
              this.m_BasicInfo?.publishers
                ?.map((c) => c.name.trim())
                ?.filter((c) => c?.length > 0) ?? [];
            return l?.length > 0 ? l : this.GetDeveloperNames();
          }
          GetAllCreatorClanIDs() {
            return (
              this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
              this.m_BasicInfo
                ? T([
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
              this.m_BasicInfo ? T(this.m_BasicInfo.publishers) : []
            );
          }
          GetAllDeveloperCreatorClans() {
            return (
              this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
              this.m_BasicInfo ? T(this.m_BasicInfo.developers) : []
            );
          }
          GetAllFranchiseCreatorClans() {
            return (
              this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
              this.m_BasicInfo ? T(this.m_BasicInfo.franchises) : []
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
          GetOptInRegistrationTagValues(l) {
            return (
              this.BCheckDataRequestIncluded({
                include_optin_registration_tags: !0,
              }),
              this.m_rgOptInRegistrationTags?.find((c) => c.optin_name === l)
                ?.values ?? []
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
            let l = this.m_ReleaseInfo?.original_steam_release_date;
            return l || (l = this.GetReleaseDateRTime()), l;
          }
          GetReleaseDateRTime(l = !1) {
            if (
              (this.BCheckDataRequestIncluded({ include_release: !0 }),
              this.m_ReleaseInfo?.is_coming_soon && !l)
            )
              return 0;
            let c = this.m_ReleaseInfo?.steam_release_date;
            return c || (c = this.m_ReleaseInfo?.original_release_date), c;
          }
          GetFormattedSteamReleaseDate() {
            if (
              (this.BCheckDataRequestIncluded({ include_release: !0 }),
              this.m_ReleaseInfo?.is_coming_soon)
            ) {
              if (this.m_ReleaseInfo?.coming_soon_display)
                return (0, E.d)(this.m_ReleaseInfo);
              if (this.m_ReleaseInfo?.custom_release_date_message)
                return this.m_ReleaseInfo.custom_release_date_message;
              const c = this.m_ReleaseInfo?.steam_release_date;
              return c
                ? this.m_ReleaseInfo?.is_abridged_release_date
                  ? (0, er.sq)(new Date(c * 1e3))
                  : (0, pr.$z)(c)
                : "";
            }
            const l = this.GetReleaseDateRTime();
            return l ? (0, pr.$z)(l) : "";
          }
          BIsComingSoon() {
            return this.m_bIsComingSoon;
          }
          BIsCustomComingSoonDisplay() {
            return (
              this.BCheckDataRequestIncluded({ include_release: !0 }),
              this.BIsComingSoon()
                ? this.m_ReleaseInfo?.coming_soon_display
                  ? ["text_tba", "text_comingsoon"].includes(
                      this.m_ReleaseInfo.coming_soon_display,
                    )
                  : !!this.m_ReleaseInfo?.custom_release_date_message
                : !1
            );
          }
          BLimitedLaunchActive() {
            return this.m_ReleaseInfo?.limited_launch_active;
          }
          BIsPrePurchase() {
            return (
              this.BIsComingSoon() && !!this.GetBestPurchaseOption()?.packageid
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
          GetScreenshots(l) {
            return (
              this.BCheckDataRequestIncluded({ include_screenshots: !0 }),
              this.m_Screenshots
                ? l
                  ? this.m_Screenshots.GetOnlyAllAgesScreenshots()
                  : this.m_Screenshots.GetAllAgesAndMatureScreenshots()
                : []
            );
          }
          BIsAgeSafeScreenshot(l) {
            return this.m_Screenshots.GetOnlyAllAgesScreenshots().includes(l);
          }
          BHasTrailers(l) {
            return (
              this.BCheckDataRequestIncluded({ include_trailers: !0 }),
              this.m_Trailers?.BHasTrailers(l)
            );
          }
          BHasHighlightTrailers(l) {
            return (
              this.BCheckDataRequestIncluded({ include_trailers: !0 }),
              (this.m_Trailers?.GetHighlightTrailers(l)?.length ?? 0) > 0
            );
          }
          GetAllTrailers() {
            return (
              this.BCheckDataRequestIncluded({ include_trailers: !0 }),
              this.m_Trailers
            );
          }
          BHasSomeLanguageSupport(l) {
            return (
              this.BCheckDataRequestIncluded({
                include_supported_languages: !0,
              }),
              this.m_rgSupportedLanguages?.some(
                (c) =>
                  c.elanguage == l &&
                  (c.supported || c.subtitles || c.full_audio),
              ) || !1
            );
          }
          GetAllLanguagesWithSomeSupport() {
            return (
              this.BCheckDataRequestIncluded({
                include_supported_languages: !0,
              }),
              this.m_rgSupportedLanguages
                ?.filter((l) => l.supported || l.subtitles || l.full_audio)
                .map((l) => l.elanguage) || []
            );
          }
          GetDataRequest() {
            return this.m_DataRequested;
          }
          GetMicroTrailer(l) {
            if (
              (this.BCheckDataRequestIncluded({ include_trailers: !0 }),
              this.m_Trailers)
            ) {
              const c = this.m_Trailers
                .GetAllTrailers(l)
                .find((f) => !!f.GetMicroTrailer());
              if (c) return c.GetMicroTrailer();
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
          ReplaceBestPurchaseOption(l) {
            this.m_BestPurchaseOption = l;
          }
          GetInternalName() {
            return this.m_strInternalName;
          }
        }
        function T(B) {
          if (!B?.length) return [];
          const l = B.map((c) => c.creator_clan_account_id).filter((c) => !!c);
          return Array.from(new Set(l));
        }
        class yr {
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
          constructor(l, c) {
            const f = l.asset_url_format();
            f &&
              (l.main_capsule() &&
                (this.m_strMainCapsuleURL = this.ConstructAssetURL(
                  f,
                  l.main_capsule(),
                )),
              l.small_capsule() &&
                (this.m_strSmallCapsuleURL = this.ConstructAssetURL(
                  f,
                  l.small_capsule(),
                )),
              l.header() &&
                (this.m_strHeaderURL = this.ConstructAssetURL(f, l.header())),
              l.package_header() &&
                (this.m_strPackageHeaderURL = this.ConstructAssetURL(
                  f,
                  l.package_header(),
                )),
              l.raw_page_background() &&
                (this.m_strRawPageBackgroundURL = this.ConstructAssetURL(
                  f,
                  l.raw_page_background(),
                )),
              l.hero_capsule() &&
                (this.m_strHeroCapsuleURL = this.ConstructAssetURL(
                  f,
                  l.hero_capsule(),
                )),
              l.hero_capsule_2x() &&
                (this.m_strHeroCapsuleURL_2x = this.ConstructAssetURL(
                  f,
                  l.hero_capsule_2x(),
                )),
              l.library_capsule() &&
                (this.m_strLibraryCapsuleURL = this.ConstructAssetURL(
                  f,
                  l.library_capsule(),
                )),
              l.library_capsule_2x() &&
                (this.m_strLibraryCapsuleURL_2x = this.ConstructAssetURL(
                  f,
                  l.library_capsule_2x(),
                )),
              l.library_hero() &&
                (this.m_strLibraryHeroURL = this.ConstructAssetURL(
                  f,
                  l.library_hero(),
                )),
              l.library_hero_2x() &&
                (this.m_strLibraryHeroURL_2x = this.ConstructAssetURL(
                  f,
                  l.library_hero_2x(),
                ))),
              l.community_icon() &&
                ((this.m_strCommunityIcon = `${b.TS.MEDIA_CDN_COMMUNITY_URL}images/apps/${c}/${l.community_icon()}.jpg`),
                (this.m_strCommunityIcon_Full = `${b.TS.MEDIA_CDN_COMMUNITY_URL}images/apps/${c}/${l.community_icon()}_full.jpg`)),
              l.page_background_path() &&
                (this.m_strPageBackgroundURL = `${b.TS.STORE_CDN_URL}images/storepagebackground/${l.page_background_path()}`);
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
          ConstructAssetURL(l, c) {
            return (
              b.TS.BASE_URL_SHARED_CDN +
              "/store_item_assets/" +
              l.replace("${FILENAME}", c)
            );
          }
          GetCommunityIconURL() {
            return this.m_strCommunityIcon;
          }
          GetCommunityIconURL_Full() {
            return this.m_strCommunityIcon_Full;
          }
        }
        class Ir {
          m_mapTrailer;
          m_highlightTrailers;
          m_highlightTrailersAllAges;
          m_otherTrailers;
          m_otherTrailersAllAges;
          constructor(l) {
            (this.m_highlightTrailers =
              l.highlights()?.map((c) => new Tr(c)) ?? []),
              (this.m_highlightTrailersAllAges =
                this.m_highlightTrailers.filter((c) => c.BIsAllAges())),
              (this.m_otherTrailers =
                l.other_trailers()?.map((c) => new Tr(c)) ?? []),
              (this.m_otherTrailersAllAges = this.m_otherTrailers.filter((c) =>
                c.BIsAllAges(),
              )),
              (this.m_mapTrailer = new Map(
                [...this.m_highlightTrailers, ...this.m_otherTrailers].map(
                  (c) => [c.GetTrailerID(), c],
                ),
              ));
          }
          BHasTrailers(l) {
            return l
              ? this.m_highlightTrailersAllAges.length > 0 ||
                  this.m_otherTrailersAllAges.length > 0
              : this.m_highlightTrailers.length > 0 ||
                  this.m_otherTrailers.length > 0;
          }
          GetHighlightTrailers(l) {
            return l
              ? this.m_highlightTrailersAllAges
              : this.m_highlightTrailers;
          }
          GetOtherTrailers(l) {
            return l ? this.m_otherTrailersAllAges : this.m_otherTrailers;
          }
          GetAllTrailers(l) {
            return [
              ...this.GetHighlightTrailers(l),
              ...this.GetOtherTrailers(l),
            ];
          }
          GetTrailerByID(l) {
            return this.m_mapTrailer.get(l);
          }
        }
        class Tr {
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
          constructor(l) {
            (this.m_strTrailerName = l.trailer_name()),
              (this.m_nBaseID = l.trailer_base_id()),
              (this.m_eTrailerCategory = l.trailer_category());
            const c = l.trailer_url_format();
            if (
              (c &&
                (l.microtrailer() &&
                  (this.m_MicroTrailer = this.ExtractTrailerFormats(
                    c,
                    l.microtrailer(),
                  )),
                l.screenshot_medium() &&
                  (this.m_strScreenshotMedium = this.ConstructScreenshotURL(
                    c,
                    l.screenshot_medium(),
                  )),
                l.screenshot_full() &&
                  (this.m_strScreenshotFull = this.ConstructScreenshotURL(
                    c,
                    l.screenshot_full(),
                  ))),
              l.adaptive_trailers())
            ) {
              this.m_rgDashTrailers = this.ExtractAdaptiveTrailers(
                l.adaptive_trailers(),
                "dash",
              );
              let f = this.ExtractAdaptiveTrailers(
                l.adaptive_trailers(),
                "hls",
              );
              f.length > 0 && (this.m_rgHlsTrailer = f[0]);
            }
            (this.m_bIsAllAges = l.all_ages() ?? !0),
              (this.m_strCaptionManifest = (0, m.Wv)(l));
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
          ExtractTrailerFormats(l, c) {
            let f = {};
            return (
              c.forEach((A) => {
                A.type() == "video/mp4"
                  ? (f.strMP4URL = this.ConstructAssetURL(l, A.filename()))
                  : A.type() == "video/webm" &&
                    (f.strWebMURL = this.ConstructAssetURL(l, A.filename()));
              }),
              f
            );
          }
          ExtractAdaptiveTrailers(l, c) {
            let f = `${c}_`,
              A = l.filter(
                (hr) =>
                  hr.encoding() && hr.cdn_path() && hr.encoding().startsWith(f),
              ),
              br = A.findIndex((hr) => hr.encoding().endsWith("_av1"));
            return (
              br > 0 && ar.yY(A, br, 0),
              A.map((hr) => this.ConstructAssetURL(hr.cdn_path(), ""))
            );
          }
          ConstructScreenshotURL(l, c) {
            return (
              b.TS.BASE_URL_SHARED_CDN +
              "/store_item_assets/" +
              l.replace("${FILENAME}", c)
            );
          }
          ConstructAssetURL(l, c) {
            return (
              b.TS.VIDEO_CDN_URL +
              "/store_trailers/" +
              l.replace("${FILENAME}", c)
            );
          }
        }
        class I {
          m_rgAllScreenshots;
          m_rgOnlyAllAgesScreenshots;
          constructor(l) {
            const c = l.all_ages_screenshots() || [],
              f = l.mature_content_screenshots() || [],
              A = (br) =>
                b.TS.BASE_URL_SHARED_CDN +
                "/store_item_assets/" +
                br.filename();
            (this.m_rgOnlyAllAgesScreenshots = c.map(A)),
              (this.m_rgAllScreenshots = [...c, ...f]
                .sort((br, hr) => br.ordinal() - hr.ordinal())
                .map(A));
          }
          GetAllAgesAndMatureScreenshots() {
            return this.m_rgAllScreenshots;
          }
          GetOnlyAllAgesScreenshots() {
            return this.m_rgOnlyAllAgesScreenshots;
          }
        }
        function S(B) {
          if (B)
            switch (B.GetStoreItemType()) {
              case e.c6.qI:
                return { appid: B.GetAppID() };
              case e.c6.RD:
                return { packageid: B.GetID() };
              case e.c6.xO:
                return { bundleid: B.GetID() };
              case e.c6.je:
                return { tagid: B.GetID() };
              case e.c6.tp:
                return { creatorid: B.GetID() };
              case e.c6.wn:
                return { hubcategoryid: B.GetID() };
              case e.c6.Xj:
                return;
              case e.c6.Eb:
              case e.c6.Ep:
                return;
              default:
                (0, u.z_)(
                  B.GetStoreItemType(),
                  `Unknown EStoreItemType ${B.GetStoreItemType()} ${(0, e.md)(B.GetStoreItemType())} `,
                );
                return;
            }
        }
        function W(B) {
          if (B)
            switch (B.item_type) {
              case e.c6.qI:
                return { appid: B.appid };
              case e.c6.RD:
                return { packageid: B.id };
              case e.c6.xO:
                return { bundleid: B.id };
              case e.c6.je:
                return { tagid: B.id };
              case e.c6.tp:
                return { creatorid: B.id };
              case e.c6.wn:
                return { hubcategoryid: B.id };
              case e.c6.Xj:
                return B.gid ? { salepagegid: B.gid } : void 0;
              case e.c6.Eb:
              case e.c6.Ep:
                return;
              default:
                (0, u.z_)(
                  B.item_type,
                  `Unknown EStoreItemType ${B.item_type} ${(0, e.md)(B.item_type)} `,
                );
                return;
            }
        }
      },
      10349: (jr, wr, h) => {
        h.d(wr, {
          Di: () => Ir,
          FT: () => f,
          JK: () => b,
          Je: () => W,
          M9: () => A,
          Rz: () => u,
          SW: () => m,
          Si: () => Dr,
          TM: () => T,
          TV: () => Ar,
          _P: () => br,
          cW: () => Er,
          gy: () => hr,
          hh: () => Tr,
          lY: () => Lr,
          nB: () => E,
          pk: () => ar,
          s9: () => vr,
          vo: () => I,
          wD: () => c,
          wR: () => yr,
        });
        var e = h(47634),
          d = h(3367),
          pr = ((n) => (
            (n[(n.k_NotRejected = -1)] = "k_NotRejected"),
            (n[(n.k_RejectNoMainCap = 0)] = "k_RejectNoMainCap"),
            (n[(n.k_RejectWrongPlatform = 1)] = "k_RejectWrongPlatform"),
            (n[(n.k_RejectNoComingSoon = 2)] = "k_RejectNoComingSoon"),
            (n[(n.k_RejectNoVR = 3)] = "k_RejectNoVR"),
            (n[(n.k_RejectCreatorClan = 4)] = "k_RejectCreatorClan"),
            (n[(n.k_RejectIgnoredGame = 5)] = "k_RejectIgnoredGame"),
            (n[(n.k_RejectSupportedLanguage = 6)] =
              "k_RejectSupportedLanguage"),
            (n[(n.k_RejectNotLoaded = 7)] = "k_RejectNotLoaded"),
            (n[(n.k_RejectIgnoreGameTags = 8)] = "k_RejectIgnoreGameTags"),
            (n[(n.k_RejectIgnoreContentDescriptors = 9)] =
              "k_RejectIgnoreContentDescriptors"),
            (n[(n.k_RejectEarlyAccess = 10)] = "k_RejectEarlyAccess"),
            (n[(n.k_RejectSoftware = 11)] = "k_RejectSoftware"),
            (n[(n.k_RejectDLC = 12)] = "k_RejectDLC"),
            (n[(n.k_RejectInLibrary = 13)] = "k_RejectInLibrary"),
            (n[(n.k_RejectNotInLibrary = 14)] = "k_RejectNotInLibrary"),
            (n[(n.k_RejectVideo = 15)] = "k_RejectVideo"),
            (n[(n.k_RejectNoDiscount = 16)] = "k_RejectNoDiscount"),
            (n[(n.k_RejectAlreadyDisplayed = 17)] = "k_RejectAlreadyDisplayed"),
            (n[(n.k_RejectNoTrailer = 18)] = "k_RejectNoTrailer"),
            (n[(n.k_RejectAO = 19)] = "k_RejectAO"),
            n
          ))(pr || {});
        const er = ["app", "sub", "bundle"];
        function b(n) {
          return n == "app" ? d.c6.qI : n == "sub" ? d.c6.RD : d.c6.xO;
        }
        function E(n) {
          return er.includes(n);
        }
        function ar(n, z = d.c6.Ep) {
          return n?.appid
            ? d.c6.qI
            : n?.packageid
              ? d.c6.RD
              : n?.bundleid
                ? d.c6.xO
                : n?.creatorid
                  ? d.c6.tp
                  : n?.hubcategoryid
                    ? d.c6.wn
                    : n?.tagid
                      ? d.c6.je
                      : z;
        }
        function u(n) {
          switch (n) {
            case d.c6.qI:
              return "app";
            case d.c6.xO:
              return "bundle";
            case d.c6.RD:
              return "package";
            case d.c6.Eb:
              return "mtx";
          }
          return "invalid";
        }
        function m(n) {
          switch (n) {
            case "sub":
              return d.c6.RD;
            case "bundle":
              return d.c6.xO;
            default:
              return d.c6.qI;
          }
        }
        function t(n, z) {
          switch (n) {
            case EStoreItemType.k_EStoreItemType_Bundle:
              return "bundle";
            case EStoreItemType.k_EStoreItemType_Package:
              return "sub";
            default:
              switch (z) {
                case EStoreAppType.k_EStoreAppType_Game:
                  return "game";
                case EStoreAppType.k_EStoreAppType_Beta:
                  return "beta";
                case EStoreAppType.k_EStoreAppType_DLC:
                  return "dlc";
                case EStoreAppType.k_EStoreAppType_Demo:
                  return "demo";
                case EStoreAppType.k_EStoreAppType_Software:
                  return "software";
                case EStoreAppType.k_EStoreAppType_Video:
                case EStoreAppType.k_EStoreAppType_Movie:
                  return "video";
                case EStoreAppType.k_EStoreAppType_Hardware:
                  return "hardware";
                case EStoreAppType.k_EStoreAppType_Music:
                  return "music";
                case EStoreAppType.k_EStoreAppType_Tool:
                  return "tool";
                case EStoreAppType.k_EStoreAppType_Mod:
                  return "mod";
                case EStoreAppType.k_EStoreAppType_Episode:
                  return "episode";
                case EStoreAppType.k_EStoreAppType_Series:
                  return "series";
                default:
                  return "game";
              }
          }
        }
        function T(n) {
          switch (n) {
            case d.c6.xO:
              return "bundle";
            case d.c6.RD:
              return "sub";
            default:
              return "app";
          }
        }
        function yr(n, z, Wr) {
          return n
            ? { id: n, item_type: "app" }
            : z
              ? { id: z, item_type: "sub" }
              : { id: Wr, item_type: "bundle" };
        }
        function Ir(n) {
          return n?.item_type == "app"
            ? { appid: n.id }
            : n?.item_type == "sub"
              ? { packageid: n.id }
              : n?.item_type == "bundle"
                ? { bundleid: n.id }
                : null;
        }
        function Tr(n) {
          return n?.appid
            ? { item_type: "app", id: n.appid }
            : n?.packageid
              ? { item_type: "sub", id: n.packageid }
              : n?.bundleid
                ? { item_type: "bundle", id: n.bundleid }
                : null;
        }
        function I(n, z) {
          return z == d.c6.qI
            ? { id: n, item_type: "app" }
            : z == d.c6.RD
              ? { id: n, item_type: "sub" }
              : z == d.c6.xO
                ? { id: n, item_type: "bundle" }
                : (console.error(
                    "ConvertEStoreItemTypeToStoreItemKey unexpected item type: ",
                    z,
                  ),
                  { id: 0, item_type: "app" });
        }
        function S(n, z, Wr) {
          return n ? { appid: n } : z ? { packageid: z } : { bundleid: Wr };
        }
        function W(n, z) {
          return z == d.c6.qI
            ? { appid: n }
            : z == d.c6.RD
              ? { packageid: n }
              : z == d.c6.xO
                ? { bundleid: n }
                : z == d.c6.je
                  ? { tagid: n }
                  : z == d.c6.tp
                    ? { creatorid: n }
                    : z == d.c6.wn
                      ? { hubcategoryid: n }
                      : null;
        }
        function B(n) {
          switch (n.item_type) {
            case "app":
              return "a" + n.id;
            case "sub":
              return "p" + n.id;
            default:
              return "b" + n.id;
          }
        }
        function l(n) {
          const z = Number.parseInt(n.substring(1));
          switch (n.charAt(0)) {
            case "a":
              return { item_type: "app", id: z };
            case "p":
              return { item_type: "sub", id: z };
            default:
              return { item_type: "bundle", id: z };
          }
        }
        function c(n) {
          return n?.appid
            ? "a" + n.appid
            : n?.packageid
              ? "p" + n.packageid
              : n?.bundleid
                ? "b" + n.bundleid
                : n?.creatorid
                  ? "c" + n.creatorid
                  : n?.hubcategoryid
                    ? "h" + n.hubcategoryid
                    : n?.tagid
                      ? "t" + n.tagid
                      : "unknown0";
        }
        function f(n, z) {
          switch (z) {
            case d.c6.qI:
              return "a" + n;
            case d.c6.RD:
              return "p" + n;
            case d.c6.xO:
              return "b" + n;
          }
          return "unknown0";
        }
        function A(n) {
          return n?.appid
            ? n.appid
            : n?.packageid
              ? n.packageid
              : n?.bundleid
                ? n.bundleid
                : n?.hubcategoryid
                  ? n.hubcategoryid
                  : n?.creatorid
                    ? n.creatorid
                    : n?.tagid
                      ? n.tagid
                      : 0;
        }
        function br(n) {
          return n?.appid
            ? d.c6.qI
            : n?.packageid
              ? d.c6.RD
              : n?.bundleid
                ? d.c6.xO
                : n?.hubcategoryid
                  ? d.c6.wn
                  : n?.creatorid
                    ? d.c6.tp
                    : n?.tagid
                      ? d.c6.je
                      : 0;
        }
        function hr(n) {
          return n?.item_type == "app"
            ? d.c6.qI
            : n?.item_type == "sub"
              ? d.c6.RD
              : n?.item_type == "bundle"
                ? d.c6.xO
                : d.c6.Ep;
        }
        function Nr(n) {
          return n?.appid()
            ? EStoreItemType.k_EStoreItemType_App
            : n?.packageid()
              ? EStoreItemType.k_EStoreItemType_Package
              : n?.bundleid()
                ? EStoreItemType.k_EStoreItemType_Bundle
                : EStoreItemType.k_EStoreItemType_Invalid;
        }
        function Fr(n) {
          return n?.appid() || n?.packageid() || n?.bundleid() || 0;
        }
        function Er(n) {
          const z = Number.parseInt(n.substring(1));
          switch (n.charAt(0)) {
            case "a":
              return { appid: z };
            case "p":
              return { packageid: z };
            default:
              return { bundleid: z };
          }
        }
        function Ar(n) {
          return n == "application"
            ? d.c6.qI
            : n == "bundle"
              ? d.c6.xO
              : n == "package"
                ? d.c6.RD
                : d.c6.Ep;
        }
        function Lr(n) {
          return n == d.c6.qI
            ? "application"
            : n == d.c6.RD
              ? "package"
              : n == d.c6.xO
                ? "bundle"
                : null;
        }
        function vr(n) {
          return n == e.OT.vy
            ? d.c6.qI
            : n == e.OT.uA
              ? d.c6.xO
              : n == e.OT.jA
                ? d.c6.RD
                : d.c6.Ep;
        }
        function Dr(n) {
          return n == d.c6.qI
            ? e.OT.vy
            : n == d.c6.RD
              ? e.OT.jA
              : n == d.c6.xO
                ? e.OT.uA
                : null;
        }
      },
      11512: (jr, wr, h) => {
        h.d(wr, { M: () => er, d: () => pr });
        var e = h(18210),
          d = h(92264);
        function pr(b) {
          return er(
            b.coming_soon_display,
            b.steam_release_date,
            b.custom_release_date_message,
          );
        }
        function er(b, E, ar, u) {
          switch (b) {
            case "date_full":
              return (0, e.$z)(E);
            case "date_month":
              return (0, d.sq)(new Date(E * 1e3));
            case "date_quarter":
              return (0, d.u6)(new Date(E * 1e3), u);
            case "date_year":
              return (0, d.vl)(new Date(E * 1e3));
            case "text_comingsoon":
              return ar || (0, e.we)("#Store_ComingSoon_ComingSoon");
            case "text_tba":
              return ar || (0, e.we)("#Store_ComingSoon_TBA");
            default:
              return "";
          }
        }
      },
    },
  ]);
})();
