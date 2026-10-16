/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [78010],
    {
      23582: (k, V, i) => {
        "use strict";
        i.d(V, { l: () => Et });
        var t = i(7850),
          N = i(86336),
          L = i(68031),
          U = i(15252),
          G = i(75083),
          Q = i(24660),
          f = i(19298),
          x = i(86067),
          l = i(86392),
          u = i(13725),
          h = i(72524),
          S = i(99412),
          v = i(71742),
          F = i(72604),
          M = i(35038),
          P = i(64981),
          d = i(21113),
          j = i(20476),
          b = i(4806),
          p = i(80613),
          m = i.n(p),
          n = i(75245),
          Y = Object.defineProperty,
          se = (r, e, s) =>
            e in r
              ? Y(r, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: s,
                })
              : (r[e] = s),
          z = (r, e, s) => se(r, typeof e != "symbol" ? e + "" : e, s);
        function pe(r) {
          return "unknown EHelpRequestType ( " + r + " )";
        }
        function ge(r) {
          return "unknown EHelpRequestState ( " + r + " )";
        }
        function Ie(r) {
          return "unknown EHelpRequestReviewState ( " + r + " )";
        }
        function Pe(r) {
          return "unknown EHelpRequestStatsRollupInterval ( " + r + " )";
        }
        function Z(r) {
          return "unknown EHelpRequestStatsResponderType ( " + r + " )";
        }
        function fe(r) {
          return "unknown EHelpIssue ( " + r + " )";
        }
        function _e(r) {
          return "unknown EHelpRequestEscalationLevel ( " + r + " )";
        }
        function oe(r) {
          return "unknown EHelpRequestMsgType ( " + r + " )";
        }
        function We(r) {
          return "unknown EHelpRequestAction ( " + r + " )";
        }
        function te(r) {
          return "unknown EHelpRequestSortOrder ( " + r + " )";
        }
        function Fe(r) {
          return "unknown EHelpRequestPOPType ( " + r + " )";
        }
        function le(r) {
          return "unknown EAnnouncementPlacement ( " + r + " )";
        }
        function ke(r) {
          return "unknown ETickerCategoryLanguageRule ( " + r + " )";
        }
        function he(r) {
          return "unknown EPreapprovalResolution ( " + r + " )";
        }
        function B(r) {
          return "unknown EHelpRequestFeedbackCategory ( " + r + " )";
        }
        function ot(r) {
          return "unknown EHelpRequestFeedbackTargetType ( " + r + " )";
        }
        function Ft(r) {
          return "unknown EFeedbackState ( " + r + " )";
        }
        function kt(r) {
          return "unknown ESupportActionSource ( " + r + " )";
        }
        function Ht(r) {
          return "unknown ERefundSupportAction ( " + r + " )";
        }
        const ve = class T extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              T.prototype.quicktext_id || n.Sg(T.M()),
              p.Message.initialize(this, e, 0, -1, [6, 10, 11], null);
          }
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    quicktext_id: {
                      n: 1,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    requires_update: {
                      n: 2,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    title: { n: 3, br: n.qM.readString, bw: n.gp.writeString },
                    hidden: { n: 4, br: n.qM.readBool, bw: n.gp.writeBool },
                    approved: { n: 5, br: n.qM.readBool, bw: n.gp.writeBool },
                    help_request_types: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: n.qM.readUint32,
                      pbr: n.qM.readPackedUint32,
                      bw: n.gp.writeRepeatedUint32,
                    },
                    content: { n: 7, c: He },
                    button_text: {
                      n: 8,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    replacement: {
                      n: 9,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    payment_methods: {
                      n: 10,
                      r: !0,
                      q: !0,
                      br: n.qM.readUint32,
                      pbr: n.qM.readPackedUint32,
                      bw: n.gp.writeRepeatedUint32,
                    },
                    appids: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: n.qM.readUint32,
                      pbr: n.qM.readPackedUint32,
                      bw: n.gp.writeRepeatedUint32,
                    },
                    escalation_level: {
                      n: 12,
                      br: n.qM.readEnum,
                      bw: n.gp.writeEnum,
                    },
                    partner_only: {
                      n: 13,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = n.w0(T.M())), T.sm_mbf;
          }
          toObject(e = !1) {
            return T.toObject(e, this);
          }
          static toObject(e, s) {
            return n.BT(T.M(), e, s);
          }
          static fromObject(e) {
            return n.Uq(T.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (m().BinaryReader)(e),
              a = new T();
            return T.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(T.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(T.M(), e, s);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportData_QuickText";
          }
        };
        z(ve, "sm_m"), z(ve, "sm_mbf");
        let lt = ve;
        const be = class C extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              C.prototype.content || n.Sg(C.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    content: {
                      n: 1,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    major_revision: {
                      n: 2,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    minor_revision: {
                      n: 3,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    author: { n: 4, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    last_update: {
                      n: 5,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    language: { n: 6, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = n.w0(C.M())), C.sm_mbf;
          }
          toObject(e = !1) {
            return C.toObject(e, this);
          }
          static toObject(e, s) {
            return n.BT(C.M(), e, s);
          }
          static fromObject(e) {
            return n.Uq(C.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (m().BinaryReader)(e),
              a = new C();
            return C.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(C.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(C.M(), e, s);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportData_QuickTextContent";
          }
        };
        z(be, "sm_m"), z(be, "sm_mbf");
        let He = be;
        const ye = class R extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              R.prototype.quicktext_id || n.Sg(R.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    quicktext_id: {
                      n: 1,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    language: {
                      n: 2,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    from_sql: { n: 3, br: n.qM.readBool, bw: n.gp.writeBool },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = n.w0(R.M())), R.sm_mbf;
          }
          toObject(e = !1) {
            return R.toObject(e, this);
          }
          static toObject(e, s) {
            return n.BT(R.M(), e, s);
          }
          static fromObject(e) {
            return n.Uq(R.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (m().BinaryReader)(e),
              a = new R();
            return R.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(R.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(R.M(), e, s);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportAgents_GetQuickText_Request";
          }
        };
        z(ye, "sm_m"), z(ye, "sm_mbf");
        let qe = ye;
        const xe = class E extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              E.prototype.quicktext || n.Sg(E.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    quicktext: { n: 1, c: lt },
                    english_reference: { n: 2, c: He },
                  },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = n.w0(E.M())), E.sm_mbf;
          }
          toObject(e = !1) {
            return E.toObject(e, this);
          }
          static toObject(e, s) {
            return n.BT(E.M(), e, s);
          }
          static fromObject(e) {
            return n.Uq(E.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (m().BinaryReader)(e),
              a = new E();
            return E.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(E.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(E.M(), e, s);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportAgents_GetQuickText_Response";
          }
        };
        z(xe, "sm_m"), z(xe, "sm_mbf");
        let ct = xe;
        const Se = class w extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              w.prototype.appid || n.Sg(w.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    log_type: {
                      n: 2,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    version_string: {
                      n: 3,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    log_contents: {
                      n: 4,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    request_id: {
                      n: 5,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = n.w0(w.M())), w.sm_mbf;
          }
          toObject(e = !1) {
            return w.toObject(e, this);
          }
          static toObject(e, s) {
            return n.BT(w.M(), e, s);
          }
          static fromObject(e) {
            return n.Uq(w.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (m().BinaryReader)(e),
              a = new w();
            return w.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(w.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(w.M(), e, s);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_UploadUserApplicationLog_Request";
          }
        };
        z(Se, "sm_m"), z(Se, "sm_mbf");
        let ut = Se;
        const je = class A extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              A.prototype.id || n.Sg(A.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    id: {
                      n: 1,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                  },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = n.w0(A.M())), A.sm_mbf;
          }
          toObject(e = !1) {
            return A.toObject(e, this);
          }
          static toObject(e, s) {
            return n.BT(A.M(), e, s);
          }
          static fromObject(e) {
            return n.Uq(A.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (m().BinaryReader)(e),
              a = new A();
            return A.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(A.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(A.M(), e, s);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_UploadUserApplicationLog_Response";
          }
        };
        z(je, "sm_m"), z(je, "sm_mbf");
        let dt = je;
        const Be = class D extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              D.prototype.appid || n.Sg(D.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = n.w0(D.M())), D.sm_mbf;
          }
          toObject(e = !1) {
            return D.toObject(e, this);
          }
          static toObject(e, s) {
            return n.BT(D.M(), e, s);
          }
          static fromObject(e) {
            return n.Uq(D.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (m().BinaryReader)(e),
              a = new D();
            return D.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(D.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(D.M(), e, s);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_GetApplicationLogDemand_Request";
          }
        };
        z(Be, "sm_m"), z(Be, "sm_mbf");
        let mt = Be;
        const Me = class O extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              O.prototype.request_id || n.Sg(O.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    request_id: {
                      n: 1,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = n.w0(O.M())), O.sm_mbf;
          }
          toObject(e = !1) {
            return O.toObject(e, this);
          }
          static toObject(e, s) {
            return n.BT(O.M(), e, s);
          }
          static fromObject(e) {
            return n.Uq(O.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (m().BinaryReader)(e),
              a = new O();
            return O.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(O.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(O.M(), e, s);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_GetApplicationLogDemand_Response";
          }
        };
        z(Me, "sm_m"), z(Me, "sm_mbf");
        let pt = Me;
        var Te;
        ((r) => {
          function e(s, a, g) {
            return s.SendMsg(
              "SupportAgents.GetQuickText#1",
              (0, M.I8)(qe, a, g),
              ct,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          r.GetQuickText = e;
        })(Te || (Te = {}));
        var Ne;
        ((r) => {
          function e(a, g, y) {
            return a.SendMsg(
              "HelpRequestLogs.UploadUserApplicationLog#1",
              (0, M.I8)(ut, g, y),
              dt,
              { ePrivilege: 1 },
            );
          }
          r.UploadUserApplicationLog = e;
          function s(a, g, y) {
            return a.SendMsg(
              "HelpRequestLogs.GetApplicationLogDemand#1",
              (0, M.I8)(mt, g, y),
              pt,
              { ePrivilege: 1 },
            );
          }
          r.GetApplicationLogDemand = s;
        })(Ne || (Ne = {}));
        var gt = i(68312),
          Ge = i(66243),
          Qe = i(88942),
          I = i(90626),
          Ce = i(56718),
          ft = i(85599),
          ce = i(36707),
          Re = i(3166),
          ht = i(98580),
          _ = i.n(ht),
          vt = i(14432);
        const bt = {
          [P.lN]: [d.lV, d.WA, d.XG, d.u1, d.Nd],
          [P.NC]: [d.rf, d.M6, d.WA, d.o8, d.Nd],
        };
        function yt(r) {
          var e;
          const [s, a] = (0, I.useState)(null),
            [g, y] = (0, I.useState)("main"),
            [c, X] = (0, I.useState)(!1),
            [K, De] = (0, I.useState)(!1),
            [J, ue] = (0, I.useState)(null),
            [W, $] = (0, I.useState)(null),
            [H, re] = (0, I.useState)(null),
            [ie, de] = (0, I.useState)(!1),
            [ee, me] = (0, I.useState)(!1),
            [ne, ae] = (0, I.useState)(j.HH),
            [Oe, Je] = (0, I.useState)(""),
            Ye =
              r.rtContentCreatedAt !== void 0
                ? (Date.now() / 1e3 - r.rtContentCreatedAt) / (30 * 86400)
                : !1,
            Ze =
              (e = r.subject.subject_type
                ? bt[r.subject.subject_type]
                : void 0) != null
                ? e
                : [],
            Lt = c || K || J || W || H || ie || ee,
            Ue = St(r.authorSteamID);
          let ze = S.Bhc;
          if (Ue.isSuccess) {
            const o = Ue.data;
            o.pref_primary_language !== void 0 && o.pref_primary_language !== -1
              ? (ze = o.pref_primary_language)
              : o.last_logon_langauge !== void 0 &&
                o.last_logon_langauge !== -1 &&
                (ze = o.last_logon_langauge);
          }
          const It = (0, l.AH)(s),
            Le = xt(It, ze);
          (0, I.useEffect)(() => {
            var o, tt, nt, st, rt, it, at;
            Je(
              (at =
                (it =
                  (nt =
                    (tt = (o = Le.data) == null ? void 0 : o.quicktext) == null
                      ? void 0
                      : tt.content) == null
                    ? void 0
                    : nt.content) != null
                  ? it
                  : (rt =
                        (st = Le.data) == null
                          ? void 0
                          : st.english_reference) == null
                    ? void 0
                    : rt.content) != null
                ? at
                : "",
            );
          }, [Le.data, Ue.data]);
          const Xe = !1,
            $e = !1,
            et = !1,
            Pt = async () => {
              (0, v.wT)(s !== null, "eReason must be non-null to sanction");
              const o = [];
              c && o.push({ sanction: b.EF }),
                K && o.push({ sanction: b.Cv }),
                J && o.push({ sanction: b.ME, days: J }),
                W && o.push({ sanction: b.sR, days: W }),
                H && o.push({ sanction: b.bX, days: H }),
                ie && o.push({ sanction: b.Fh, days: -1 }),
                ee && o.push({ sanction: b.X5 }),
                ne === j.lp
                  ? o.push({ sanction: b.nw, escalate_to: j.lp })
                  : ne === j.PV &&
                    o.push({ sanction: b.nw, escalate_to: j.PV }),
                await r.sanctionMutation.mutateAsync({
                  sanctions: o,
                  message: Oe.trim(),
                  reason: s,
                }),
                r.onSanction();
            },
            _t = (o) => {
              a(o), y("main");
            },
            Wt = (o) => {
              o ? (me(!0), re(7), a(d.rU)) : (me(!1), re(-1));
            };
          return (0, t.jsxs)(t.Fragment, {
            children: [
              g === "reason" &&
                (0, t.jsx)(vt.F, { reasons: l.UL, onSelect: _t }),
              g === "main" &&
                (0, t.jsxs)(f.Z, {
                  children: [
                    (0, t.jsxs)(f.Z, {
                      className: _().SanctionForm,
                      children: [
                        r.sanctionMutation.isError &&
                          (0, t.jsxs)("div", {
                            className: (0, ce.A)(
                              _().OneColumn,
                              _().ErrorMessage,
                            ),
                            children: [
                              (0, t.jsx)(Ce.Q9b, {}),
                              " Error: ",
                              r.sanctionMutation.error.message,
                            ],
                          }),
                        (0, t.jsx)("label", {
                          htmlFor: "reason",
                          children: "Reason:",
                        }),
                        (0, t.jsx)("button", {
                          id: "reason",
                          className: _().ClickableText,
                          onClick: () => y("reason"),
                          children:
                            s === null
                              ? x.T.Localize(
                                  "#commentsanctiondialog_selectreason",
                                )
                              : (0, l.Jt)(s),
                        }),
                        Ze.length > 0 &&
                          (0, t.jsx)("div", {
                            className: _().QuickReasons,
                            children: Ze.map((o) =>
                              (0, t.jsx)(
                                G.$,
                                {
                                  onClick: () => a(s === o ? null : o),
                                  size: "1",
                                  variant: s === o ? "basic" : "dark",
                                  children: (0, l.Jt)(o),
                                },
                                o,
                              ),
                            ),
                          }),
                        (0, t.jsxs)("label", {
                          className: _().OneColumn,
                          children: [
                            (0, t.jsx)("input", {
                              type: "checkbox",
                              checked: c,
                              onChange: (o) => X(o.target.checked),
                            }),
                            " Delete",
                          ],
                        }),
                        (0, t.jsxs)("label", {
                          className: _().OneColumn,
                          children: [
                            (0, t.jsx)("input", {
                              type: "checkbox",
                              checked: K,
                              onChange: (o) => De(o.target.checked),
                            }),
                            " Issue Warning",
                          ],
                        }),
                        Ye &&
                          !!J &&
                          (0, t.jsxs)("div", {
                            className: (0, ce.A)(
                              _().OneColumn,
                              _().ErrorMessage,
                            ),
                            children: [
                              (0, t.jsx)(Ce.Q9b, {}),
                              " Content is older than 30 days. Are you sure you want to ban?",
                            ],
                          }),
                        r.clanSteamID &&
                          (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)("label", {
                                htmlFor: "hubban",
                                children: "Ban from hub:",
                              }),
                              !Xe &&
                                (0, t.jsxs)("select", {
                                  id: "hubban",
                                  onChange: (o) =>
                                    ue(
                                      o.target.value === "0"
                                        ? null
                                        : parseInt(o.target.value),
                                    ),
                                  value: J != null ? J : 0,
                                  children: [
                                    (0, t.jsx)("option", {
                                      value: "0",
                                      children: "Do not ban",
                                    }),
                                    (0, t.jsx)("option", {
                                      value: "1",
                                      children: "1 day",
                                    }),
                                    (0, t.jsx)("option", {
                                      value: "3",
                                      children: "3 days",
                                    }),
                                    (0, t.jsx)("option", {
                                      value: "7",
                                      children: "7 days",
                                    }),
                                    (0, t.jsx)("option", {
                                      value: "14",
                                      children: "14 days",
                                    }),
                                    (0, t.jsx)("option", {
                                      value: "30",
                                      children: "30 days",
                                    }),
                                    (0, t.jsx)("option", {
                                      value: "90",
                                      children: "3 months",
                                    }),
                                    (0, t.jsx)("option", {
                                      value: "365",
                                      children: "1 year",
                                    }),
                                    (0, t.jsx)("option", {
                                      value: "-1",
                                      children: "Permanent",
                                    }),
                                  ],
                                }),
                              Xe &&
                                (0, t.jsx)("div", {
                                  id: "hubban",
                                  children: "Already banned from hub",
                                }),
                            ],
                          }),
                        Ye &&
                          !!W &&
                          (0, t.jsxs)("div", {
                            className: (0, ce.A)(
                              _().OneColumn,
                              _().ErrorMessage,
                            ),
                            children: [
                              (0, t.jsx)(Ce.Q9b, {}),
                              " Content is older than 30 days. Are you sure you want to ban?",
                            ],
                          }),
                        (0, t.jsx)("label", {
                          htmlFor: "communityban",
                          children: "Ban from community:",
                        }),
                        !$e &&
                          (0, t.jsxs)("select", {
                            id: "communityban",
                            onChange: (o) =>
                              $(
                                o.target.value === "0"
                                  ? null
                                  : parseInt(o.target.value),
                              ),
                            value: W != null ? W : 0,
                            children: [
                              (0, t.jsx)("option", {
                                value: "0",
                                children: "Do not ban",
                              }),
                              (0, t.jsx)("option", {
                                value: "1",
                                children: "1 day",
                              }),
                              (0, t.jsx)("option", {
                                value: "3",
                                children: "3 days",
                              }),
                              (0, t.jsx)("option", {
                                value: "7",
                                children: "7 days",
                              }),
                              (0, t.jsx)("option", {
                                value: "14",
                                children: "14 days",
                              }),
                              (0, t.jsx)("option", {
                                value: "30",
                                children: "30 days",
                              }),
                              (0, t.jsx)("option", {
                                value: "90",
                                children: "3 months",
                              }),
                              (0, t.jsx)("option", {
                                value: "365",
                                children: "1 year",
                              }),
                              (0, t.jsx)("option", {
                                value: "-1",
                                children: "Permanent",
                              }),
                            ],
                          }),
                        $e &&
                          (0, t.jsx)("div", {
                            id: "communityban",
                            children: "Already community banned.",
                          }),
                        (0, t.jsx)("label", {
                          htmlFor: "deletecomments",
                          children: "Delete comments since:",
                        }),
                        (0, t.jsxs)("select", {
                          id: "deletecomments",
                          disabled: ee,
                          onChange: (o) =>
                            re(
                              o.target.value === "-1"
                                ? null
                                : parseInt(o.target.value),
                            ),
                          value: H != null ? H : -1,
                          children: [
                            (0, t.jsx)("option", {
                              value: "-1",
                              children: "Do not delete",
                            }),
                            (0, t.jsx)("option", {
                              value: "1",
                              children: "1 day",
                            }),
                            (0, t.jsx)("option", {
                              value: "7",
                              children: "7 days",
                            }),
                            (0, t.jsx)("option", {
                              value: "14",
                              children: "14 days",
                            }),
                            (0, t.jsx)("option", {
                              value: "30",
                              children: "30 days",
                            }),
                            (0, t.jsx)("option", {
                              value: "0",
                              children: "All comments",
                            }),
                          ],
                        }),
                        !et &&
                          (0, t.jsxs)("span", {
                            className: _().OneColumn,
                            children: [
                              (0, t.jsx)("input", {
                                type: "checkbox",
                                checked: ie,
                                onChange: (o) => de(o.target.checked),
                              }),
                              "\xA0Permanent trade ban",
                            ],
                          }),
                        et &&
                          (0, t.jsx)("div", {
                            children: "Already trade banned.",
                          }),
                        (0, t.jsxs)("span", {
                          className: _().OneColumn,
                          children: [
                            (0, t.jsx)("input", {
                              type: "checkbox",
                              checked: ee,
                              onChange: (o) => Wt(o.target.checked),
                            }),
                            "\xA0Mark as suspicious",
                          ],
                        }),
                        (0, t.jsx)("label", {
                          htmlFor: "escalateto",
                          children: "Escalate to",
                        }),
                        (0, t.jsxs)("select", {
                          id: "escalateto",
                          onChange: (o) => ae(parseInt(o.target.value)),
                          value: ne,
                          children: [
                            (0, t.jsx)("option", {
                              value: j.HH,
                              children: "Do not escalate",
                            }),
                            (0, t.jsx)("option", {
                              value: j.lp,
                              children: "Supervisor",
                            }),
                            (0, t.jsx)("option", {
                              value: j.PV,
                              children: "Valve",
                            }),
                          ],
                        }),
                        (0, t.jsx)("textarea", {
                          className: (0, ce.A)(
                            _().OneColumn,
                            _().MessageTextArea,
                          ),
                          placeholder: "Message to send (required)",
                          value: Oe,
                          onChange: (o) => Je(o.target.value),
                        }),
                      ],
                    }),
                    (0, t.jsxs)(f.Z, {
                      className: _().BottomButtons,
                      children: [
                        r.sanctionMutation.isPending &&
                          (0, t.jsx)(ft.t, { size: "small" }),
                        !r.sanctionMutation.isPending &&
                          (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)(Ge.Oh, {
                                onClick: r.onCancel,
                                children: "Cancel",
                              }),
                              (0, t.jsx)(Ge.n9, {
                                onClick: Pt,
                                disabled:
                                  s === null || !Lt || Oe.trim().length === 0,
                                children: "Sanction",
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
        function xt(r, e) {
          const s = (0, gt.KV)();
          return (0, Qe.I)({
            queryKey: ["get_quick_text", r, e],
            queryFn: async () => {
              if (r == null || e === void 0) return null;
              const a = M.w.Init(qe);
              a.Body().set_quicktext_id(r),
                a.Body().set_language((0, S.LgB)(e));
              const g = await Te.GetQuickText(s, a);
              if (g.GetEResult() !== F.R)
                throw new Error(
                  "useQuickText failed with EResult " + g.GetEResult(),
                );
              return g.Body().toObject();
            },
            enabled: r !== void 0,
          });
        }
        function St(r) {
          return (0, Qe.I)({
            queryKey: ["get_primary_language_for_user", r],
            queryFn: async () => {
              if (r === "0" || !r) throw new Error("Invalid steamid");
              const s = await (
                await fetch(
                  `${Re.TS.COMMUNITY_BASE_URL}profiles/${r}/ajaxlanguagepreferences`,
                )
              ).json();
              if (s.success === F.R) return s.preferences;
              throw new Error(
                "Failed GetPrimaryLanguageForUser. EResult: " + s.success,
              );
            },
          });
        }
        var Ee = i(46085),
          Ve = i(49527),
          Ke = i(19316),
          we = i(25792),
          jt = i(2801),
          Bt = i(15568),
          Ae = i(36118),
          Mt = i(21418),
          Tt = i(71421),
          Ct = i(41635),
          Rt = i(84670),
          q = i.n(Rt);
        function Et(r) {
          const { subject: e } = r,
            [s, a] = (0, I.useState)(!1),
            g =
              e &&
              (e.unresolved_report_count > 0 || e.unresolved_dispute_count > 0),
            y = (0, t.jsx)(N.W, {
              onClick: () => a(!0),
              children: (0, t.jsxs)(L.s, {
                direction: "row",
                justify: "between",
                align: "baseline",
                gap: "1",
                children: [
                  g &&
                    (0, t.jsx)("img", {
                      className: q().Flag,
                      src: `${Re.TS.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                    }),
                  x.T.Localize("#commentsanctiondialog_moderate"),
                  e &&
                    e.required_moderator_level === j.PV &&
                    (0, t.jsx)("span", {
                      className: q().ValveOnly,
                      children: "(VO)",
                    }),
                  e &&
                    e.required_moderator_level === j.lp &&
                    (0, t.jsx)("span", {
                      className: q().SupervisorOnly,
                      children: "(Supervisor)",
                    }),
                ],
              }),
            });
          return (0, t.jsxs)(t.Fragment, {
            children: [
              s && (0, t.jsx)(At, { onClose: () => a(!1), ...r }),
              e &&
                (0, t.jsx)(Tt.Gq, {
                  toolTipContent: (0, t.jsx)(wt, { subject: e }),
                  direction: "bottom",
                  nDelayShowMS: 0,
                  children: y,
                }),
              !e && y,
            ],
          });
        }
        function wt(r) {
          const { subject: e } = r,
            s = (0, I.useMemo)(() => {
              var a;
              const g = (0, Ct.D5)(
                (a = e == null ? void 0 : e.reports) != null ? a : [],
                (y) => y.report_reason,
              );
              return g.sort((y, c) => y[1] - c[1]), g;
            }, [e.reports]);
          return s.length === 0
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("div", {
                    children: x.T.Localize("#reasonlist_title"),
                  }),
                  s.map(([a, g]) =>
                    (0, t.jsx)(
                      "div",
                      {
                        children: x.T.Localize(
                          "#reasonlist_reasonwithcount",
                          (0, l.Jt)(a),
                          g,
                        ),
                      },
                      a,
                    ),
                  ),
                ],
              });
        }
        function At(r) {
          var e, s, a;
          const {
              sanctionMutation: g,
              acquitMutation: y,
              subject: c,
              eSubjectType: X,
              gidComment: K,
              clanSteamID: De,
              authorSteamID: J,
              onClose: ue,
            } = r,
            W = c == null ? void 0 : c.reported_content_id,
            [$, H] = (0, I.useState)("main"),
            re = [
              {
                name: "Reports",
                key: "reports",
                contents: (0, t.jsx)(we.tH, {
                  children: (0, t.jsx)(u.lX, { subject: c }),
                }),
              },
              {
                name: "History",
                key: "history",
                contents: (0, t.jsx)(we.tH, {
                  children: (0, t.jsx)(u.B8, { reportedContentID: W }),
                }),
              },
              {
                name: "Details",
                key: "details",
                contents: (0, t.jsx)(we.tH, { children: r.children }),
              },
            ],
            ie = () => {
              r.onClose(),
                window.location.href.split("#").length === 1 &&
                  K !== l.Ie &&
                  (window.location.href += "#c" + K),
                window.location.reload();
            };
          let de = 0,
            ee = 0;
          if (c)
            for (const ae of c.reports)
              ae.time_resolved && !ae.time_disputed && de++,
                ae.time_dispute_resolved && ee++;
          const me =
              !!(c != null && c.reported_content_id) &&
              !c.owner_dispute_time &&
              c.resolved === Ve.S6,
            ne = c !== void 0 && !!c.owner_dispute_time;
          return (0, t.jsx)(Bt.wA, {
            onlyPopoutIfNeeded: !0,
            popupHeight: 340,
            popupWidth: 640,
            strTitle: "Moderate subject",
            children: (0, t.jsx)(jt.eV, {
              bAllowFullSize: !0,
              title: "Moderate",
              "aria-describedby": "moderate",
              onCancel: r.onClose,
              className: q().ModerateDialog,
              children: (0, t.jsx)(Ke.f3, {
                children: (0, t.jsx)(Ke.a3, {
                  children: (0, t.jsxs)("div", {
                    className: q().ModerateDialogCtn,
                    children: [
                      $ === "main" &&
                        (0, t.jsxs)("div", {
                          className: q().ModerateCtn,
                          children: [
                            (0, t.jsxs)("div", {
                              className: q().ModerationData,
                              children: [
                                (0, t.jsxs)(U.EY, {
                                  as: "div",
                                  size: "3",
                                  contrast: "description",
                                  children: [
                                    (e =
                                      c == null
                                        ? void 0
                                        : c.unresolved_report_count) != null
                                      ? e
                                      : 0,
                                    " unresolved / ",
                                    de,
                                    " resolved / ",
                                    (s =
                                      c == null
                                        ? void 0
                                        : c.unresolved_dispute_count) != null
                                      ? s
                                      : 0,
                                    " disputed / ",
                                    ee,
                                    " disputes resolved",
                                  ],
                                }),
                                (0, t.jsx)(Mt.V, {
                                  tabs: re,
                                  bDisableRouting: !0,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: q().ModerationActionButtons,
                              children: [
                                (0, t.jsx)("button", {
                                  onClick: () => H("sanction"),
                                  children: (0, t.jsxs)(L.s, {
                                    direction: "row",
                                    justify: "center",
                                    align: "center",
                                    children: [
                                      (0, t.jsx)(Ae.X, {
                                        className: q().SanctionIcon,
                                      }),
                                      " Sanction",
                                    ],
                                  }),
                                }),
                                (0, t.jsx)(Ut, {
                                  subject: c,
                                  acquitMutation: y,
                                  onClose: ue,
                                }),
                                (0, t.jsx)(zt, { subject: c, onClose: ue }),
                                (0, h.h)(c) &&
                                  (0, t.jsx)(Q.fu, {
                                    disabled: !W,
                                    onClick: () => H("escalate"),
                                    children: x.T.Localize(
                                      "#moderation_escalation_escalate",
                                    ),
                                  }),
                                !ne &&
                                  (0, t.jsx)("button", {
                                    disabled: !me,
                                    onClick: () => H("ownerdispute"),
                                    children: "Owner Dispute",
                                  }),
                                ne &&
                                  (0, t.jsxs)("span", {
                                    children: [
                                      (0, t.jsx)("a", {
                                        href: `${Re.TS.HELP_BASE_URL}tickermaster/ticket/${c.owner_dispute_details}`,
                                        children: (0, t.jsx)(U.EY, {
                                          size: "2",
                                          children: x.T.Localize(
                                            "#moderation_already_owner_disputed",
                                          ),
                                        }),
                                      }),
                                      (0, t.jsx)("button", {
                                        disabled: !W,
                                        onClick: () =>
                                          H("editownerdisputedetails"),
                                        className: q().EditButton,
                                        children: (0, t.jsx)(Ae.ffu, {}),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      $ === "escalate" &&
                        !!W &&
                        (0, t.jsx)(h.R, {
                          reportedContentID: W,
                          eCurrentLevel:
                            c == null ? void 0 : c.required_moderator_level,
                          onClose: () => H("main"),
                        }),
                      $ === "sanction" &&
                        (0, t.jsx)(yt, {
                          subject: c != null ? c : { subject_type: X },
                          clanSteamID: De,
                          authorSteamID: J,
                          sanctionMutation: g,
                          onSanction: ie,
                          onCancel: () => H("main"),
                        }),
                      $ === "ownerdispute" &&
                        !!W &&
                        (0, t.jsx)(Ot, {
                          reportedContentID: W,
                          onClose: () => H("main"),
                        }),
                      $ === "editownerdisputedetails" &&
                        !!W &&
                        (0, t.jsx)(Dt, {
                          reportedContentID: W,
                          onClose: () => H("main"),
                          currentDetails:
                            (a =
                              c == null ? void 0 : c.owner_dispute_details) !=
                            null
                              ? a
                              : "",
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }
        function Dt(r) {
          const { reportedContentID: e, onClose: s, currentDetails: a } = r,
            [g, y] = (0, I.useState)(a),
            c = (0, Ee.wy)(e, g),
            X = async () => {
              await c.mutateAsync(), s();
            };
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("label", {
                children: [
                  (0, t.jsx)(U.EY, {
                    size: "2",
                    children: x.T.Localize(
                      "#moderation_editownerdisputedetails_label",
                    ),
                  }),
                  (0, t.jsx)("input", {
                    type: "text",
                    value: g,
                    onChange: (K) => y(K.target.value),
                  }),
                ],
              }),
              (0, t.jsxs)(L.s, {
                justify: "between",
                direction: "row",
                children: [
                  (0, t.jsx)(Q.fu, {
                    onClick: X,
                    children: x.T.Localize(
                      "#moderation_editownerdisputedetails_save",
                    ),
                  }),
                  (0, t.jsx)(G.$, {
                    onClick: s,
                    loading: c.isPending,
                    children: x.T.Localize("#moderation_ownerdispute_cancel"),
                  }),
                ],
              }),
            ],
          });
        }
        function Ot(r) {
          const { reportedContentID: e, onClose: s } = r,
            [a, g] = (0, I.useState)(""),
            y = (0, Ee.y4)(e, a),
            c = async () => {
              await y.mutateAsync(), s();
            };
          return (0, t.jsxs)(f.Z, {
            className: q().OwnerDisputeCtn,
            children: [
              (0, t.jsx)(U.EY, {
                as: "div",
                size: "2",
                children: x.T.Localize("#moderation_ownerdispute_description"),
              }),
              (0, t.jsxs)("label", {
                children: [
                  (0, t.jsx)(U.EY, {
                    size: "2",
                    children: x.T.Localize(
                      "#moderation_ownerdispute_ticketmastercode",
                    ),
                  }),
                  " ",
                  (0, t.jsx)("input", {
                    type: "text",
                    value: a,
                    onChange: (X) => g(X.target.value),
                  }),
                ],
              }),
              (0, t.jsxs)(L.s, {
                justify: "between",
                direction: "row",
                children: [
                  (0, t.jsx)(Q.fu, {
                    onClick: c,
                    children: x.T.Localize("#moderation_ownerdispute_dispute"),
                  }),
                  (0, t.jsx)(Q.fu, {
                    onClick: s,
                    children: x.T.Localize("#moderation_ownerdispute_cancel"),
                  }),
                ],
              }),
            ],
          });
        }
        function Ut(r) {
          const { acquitMutation: e, onClose: s, subject: a } = r,
            g =
              a &&
              (a.unresolved_report_count > 0 || a.unresolved_dispute_count > 0),
            y = async () => {
              await e.mutateAsync(void 0), s();
            };
          return (0, t.jsx)("button", {
            onClick: y,
            disabled: !g,
            children: (0, t.jsxs)(L.s, {
              direction: "row",
              justify: "center",
              align: "center",
              children: [
                (0, t.jsx)(Ae.jlt, { className: q().AcquitIcon }),
                " ",
                x.T.Localize("#moderation_actions_acquit"),
              ],
            }),
          });
        }
        function zt(r) {
          const { subject: e, onClose: s } = r,
            a =
              !!(e != null && e.reported_content_id) &&
              e.resolved !== Ve.z_ &&
              (e.unresolved_dispute_count > 0 || e.unresolved_report_count > 0),
            g = (0, Ee.N8)(),
            y = async () => {
              e != null &&
                e.reported_content_id &&
                (await g.mutateAsync({
                  reportedContentID: e.reported_content_id,
                }),
                s());
            };
          return (0, t.jsx)("button", {
            onClick: y,
            disabled: !a,
            children: x.T.Localize("#moderation_actions_sustain"),
          });
        }
      },
      86946: (k, V, i) => {
        "use strict";
        i.d(V, { j: () => u, w: () => h });
        var t = i(7850),
          N = i(64238),
          L = i.n(N),
          U = i(38878),
          G = i.n(U),
          Q = i(60351),
          f = i(68031),
          x = i(8928),
          l = i(69289);
        function u(S) {
          const {
              children: v,
              beforeContent: F,
              afterContent: M,
              hasValue: P,
              ...d
            } = S,
            j = h(d);
          return (0, t.jsxs)(f.s, {
            ...j,
            align: "center",
            "data-has-value": !!P,
            minWidth: "0",
            children: [
              F && (0, t.jsx)(f.s, { paddingRight: "2", children: F }),
              (0, t.jsx)(Q.az, { flexGrow: "1", minWidth: "0", children: v }),
              M && (0, t.jsx)(f.s, { paddingLeft: "2", children: M }),
            ],
          });
        }
        function h(S) {
          const {
              variant: v = "basic",
              size: F = "2",
              radius: M,
              focusable: P = !0,
              hoverable: d = !0,
              clickable: j = !0,
              disabled: b,
              className: p,
              status: m,
              color: n,
              ...Y
            } = S,
            se = v === "underline" ? "none" : M;
          return (0, l.mz)(
            {
              ...Y,
              radius: se,
              "data-status": m,
              "data-dull-color": n && n !== "dull" ? n : void 0,
              className: L()(
                U.ControlBox,
                P && !b && U.Focusable,
                d && !b && U.Hoverable,
                j && !b && U.Clickable,
                b && U.Disabled,
                U[`Variant-${v}`],
                U[`Size-${F}`],
                p,
              ),
            },
            x.h,
          );
        }
      },
      98929: (k, V, i) => {
        "use strict";
        i.d(V, { F: () => L });
        var t = i(24089),
          N = i.n(t);
        function L() {
          return t.TextEntry;
        }
      },
      179: (k, V, i) => {
        "use strict";
        i.d(V, {
          Bm: () => U,
          QD: () => Q,
          f3: () => L,
          iV: () => x,
          ip: () => f,
          le: () => G,
        });
        var t = i(90626),
          N = i(92757);
        function L(l, u) {
          let h;
          if (typeof l == "string") h = l;
          else if ("location" in l) h = l.location.search;
          else if ("search" in l) h = l.search;
          else return;
          const S = new URLSearchParams(h.substring(1));
          if (S.has(u)) {
            const v = S.getAll(u);
            return v[v.length - 1];
          }
        }
        function U(l, u, h, S = !1) {
          const v = new URLSearchParams(l.location.search.substring(1));
          if (h != null && h != null) {
            if (v.get(u) == h) return;
            v.set(u, h);
          } else {
            if (!v.has(u)) return;
            v.delete(u);
          }
          S
            ? l.replace(`?${v.toString()}`, { ...l.location.state })
            : l.push(`?${v.toString()}`);
        }
        function G(l, u, h) {
          U(l, u, h, !0);
        }
        function Q(l, u) {
          const h = (0, N.W6)(),
            S = (0, N.zy)(),
            v = (0, t.useMemo)(() => {
              const M = L(S.search, l);
              return M != null && M != null
                ? u != null && u != null
                  ? typeof u == "boolean"
                    ? u.constructor(M !== "false")
                    : u.constructor(M)
                  : M
                : u;
            }, [S.search, l, u]),
            F = (0, t.useCallback)(
              (M, P = !1) => {
                U(h, l, M != null && M != null ? String(M) : null, P);
              },
              [h, l],
            );
          return [v, F];
        }
        function f(l, u, h = !1) {
          const S = new URLSearchParams(l.location.search.substring(1));
          for (const v in u)
            if (u.hasOwnProperty(v)) {
              const F = u[v];
              S.delete(v), F != null && F != null && S.append(v, F);
            }
          h
            ? l.replace(`?${S.toString()}`, { ...l.location.state })
            : l.push(`?${S.toString()}`);
        }
        function x(l, u) {
          f(l, u, !0);
        }
      },
      21418: (k, V, i) => {
        "use strict";
        i.d(V, { V: () => v, a: () => F });
        var t = i(7850),
          N = i(90626),
          L = i(36707),
          U = i(18210),
          G = i(179),
          Q = i(1990),
          f = i.n(Q),
          x = i(71421),
          l = i(53107),
          u = i(19298),
          h = i(20169),
          S = i(92757);
        function v(P) {
          const {
              tabs: d,
              bDisableRouting: j,
              startingTab: b,
              controlledTab: p,
              OnTabChanged: m,
              classNameCtn: n,
              classNameTab: Y,
              focusRingHasBorderRadius: se,
              classNameTabContent: z,
              preferredFocus: pe,
              bVerticalTabs: ge,
              bSticky: Ie,
              bChecklistMode: Pe,
            } = P,
            Z = (0, S.zy)(),
            fe = (0, S.W6)(),
            [_e, oe] = (0, N.useState)(() => {
              var B;
              return (
                b ||
                (!j && (0, G.f3)(Z, "tab") && (B = (0, G.f3)(Z, "tab")) != null
                  ? B
                  : "")
              );
            });
          (0, N.useEffect)(() => {
            if (!P.bDisableRouting && Z) {
              const B = (0, G.f3)(Z, "tab");
              B && oe(B);
            }
          }, [Z, Z.key, P.bDisableRouting, oe]);
          const We = N.useCallback(
              (B) => {
                oe(B.key),
                  j || (0, G.Bm)(fe, "tab", B.key),
                  m == null || m(B.key),
                  B.onClick && B.onClick(B);
              },
              [j, fe, m],
            ),
            te = d.filter((B) => !B.hidden);
          if (!te.length) return null;
          const Fe = p != null ? p : _e,
            le = te.find((B) => B.key === Fe) || te[0],
            ke = pe ? (b != null ? b : te[0].key) : void 0,
            he = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(u.Z, {
                  className: (0, L.A)(
                    f().GraphicalAssetsTabs,
                    ge && f().GraphicalAssetsTabsVertical,
                    Pe && f().ChecklistMode,
                    Ie && f().Sticky,
                    n,
                  ),
                  navEntryPreferPosition: pe
                    ? h.iU.PREFERRED_CHILD
                    : h.iU.FIRST,
                  children: te.map((B, ot) =>
                    (0, t.jsx)(
                      M,
                      {
                        tab: B,
                        OnTabClick: We,
                        classNameTab: Y,
                        focusRingHasBorderRadius: se,
                        active: B.key === le.key,
                        preferredFocus: ke === B.key,
                      },
                      B.key,
                    ),
                  ),
                }),
                le && (0, t.jsx)(u.Z, { className: z, children: le.contents }),
              ],
            });
          return ge
            ? (0, t.jsx)(u.Z, {
                className: (0, L.A)(f().GraphicalAssetsTabsLayoutVertical),
                children: he,
              })
            : he;
        }
        function F(P) {
          const {
            statusType: d = "success",
            bShowStatusBox: j,
            children: b,
          } = P;
          let p = "";
          return (
            d === "success"
              ? (p = f().StatusSuccess)
              : d === "danger"
                ? (p = f().StatusDanger)
                : d === "caution"
                  ? (p = f().StatusCaution)
                  : d === "info"
                    ? (p = f().StatusInfo)
                    : d === "incomplete" && (p = f().StatusIncomplete),
            (0, t.jsx)("div", {
              className: (0, L.A)(
                f().GraphicalAssetStatus,
                p,
                j ? f().checklistBox : "",
              ),
              children: b,
            })
          );
        }
        function M(P) {
          const {
            tab: d,
            OnTabClick: j,
            classNameTab: b,
            focusRingHasBorderRadius: p,
            active: m,
            preferredFocus: n,
          } = P;
          return (0, t.jsx)(l.e7, {
            condition: !!(d.statusToolTip || d.tooltip),
            wrap: (Y) =>
              (0, t.jsx)(x.he, {
                toolTipContent: d.statusToolTip || d.tooltip,
                children: Y,
              }),
            children: (0, t.jsxs)(u.Z, {
              className: (0, L.A)(
                f().GraphicalAssetsTab,
                m && f().Active,
                m && "ActiveTab",
                b,
              ),
              onActivate: () => j(d),
              preferredFocus: n,
              focusRingHasBorderRadius: p,
              children: [
                !!d.vo_warning &&
                  (0, t.jsx)(x.he, {
                    toolTipContent: d.vo_warning,
                    children: (0, t.jsx)("div", {
                      className: f().VOWarning,
                      children: (0, U.we)("#EventEditor_VOWarning"),
                    }),
                  }),
                d.status,
                d.name,
              ],
            }),
          });
        }
      },
      84670: (k) => {
        k.exports = {
          ModerateDialogCtn: "_1JFB_3Ek9uIS-ml-7C1V3",
          Flag: "_24i0Jj7bXsdJSJdDY0a4e9",
          ModerateCtn: "_2f8lQGhpOdBN1nDokNV-_v",
          ModerationActionButtons: "_3vIg4OosURoc-guanZbMot",
          OwnerDisputeCtn: "_3o0wdHIoLEIVk2tOl2OyB1",
          EditButton: "MtttYfwYqnHlqj832CGXL",
          ValveOnly: "_1mtaTCIJfR1JZhSZpaPzUo",
          SupervisorOnly: "_2dWYzwO95xQRO7W66aSsH7",
          AcquitIcon: "HA6Hw6Hc332GoPbma_9sZ",
          SanctionIcon: "_3WS1gYqe89ISF4mi7dvtBU",
        };
      },
      38878: (k) => {
        k.exports = {
          "Variant-basic": "xqG5GdDEeYauX2ots2DLl",
          "Size-3": "_1K_Ve980-qBq8l1-cZJdw1",
          "Variant-inset": "_2Z-Zr4UW8-jHrU5olM_rpn",
          "Variant-inset-focus": "_2RYWJyn7v0tvoY5cR63QuI",
          Focusable: "_1cd-wdIp5lIWsydAxII-vY",
          "Variant-inset-glass": "_32JdL4FubsmwHfHXm6OB9I",
          "Variant-underline": "yV_Aq5WutzzittgbOJ1R-",
          "Variant-dim": "_2qQgKJgeeqc9lEI-i7HdsM",
          "Variant-highlight": "EFvA4gLIikUE06LDGCqg5",
          "Variant-bare": "_3vxqpebgJYIYNTcigTXx21",
          ControlBox: "_2gL71Yq-HzVI9oOGyWu3jH",
          Hoverable: "_8JNTStqpIYaMWQJx6g6hK",
          Clickable: "_1KONo9A0HE0_NOK2F6uvXy",
          Disabled: "_2I6xXve3oCxh8fra7SWTnq",
          "Size-1": "_2e1xlPghh48rkP13ydQOPb",
          "Size-2": "B7HtDxiiORArIRcBR9kVB",
        };
      },
      24089: (k) => {
        k.exports = { TextEntry: "_1vE-LsK6l_D_5yjbywZV1p" };
      },
      98580: (k) => {
        k.exports = {
          BottomButtons: "mdeaaJPcT9kJyTGau_Zr7",
          SanctionForm: "_33cLeNjYsBEX2T0-B9gc5G",
          OneColumn: "_2LTDR9F3yb80ONcUPcDxo1",
          QuickReasons: "_1VdNqwseupCqI68H-YwwZO",
          MessageTextArea: "_3IWpl3mfH9OFkiqMIh7WtY",
          ErrorMessage: "_3_dhawEOV-fztaXEftlfxJ",
        };
      },
      1990: (k) => {
        k.exports = {
          narrowWidth: "500px",
          GraphicalAssetsTabs: "_3oSHTIvUhbK90D9Uvj438V",
          GraphicalAssetsTab: "_3lJb_YN8uykqLcm4eG1jRF",
          Active: "_8XjrTFzaSA8ubHvHCu44L",
          Sticky: "_3dlxz6KBJpvmA-qsVAzxs8",
          GraphicalAssetsTabsLayoutVertical: "_1ZIVlOM_Qz4wInwwXzUHTR",
          GraphicalAssetsTabsVertical: "_3hS8NFdPTrUehJGNVT0PtV",
          ChecklistMode: "_3blAkLFfSQrJjGklUKOP7e",
          GraphicalAssetStatus: "_25U4FBOpeZQAX-v-f9Yosb",
          checklistBox: "_1idkU7IA8dDPOIbsU-dRkJ",
          StatusSuccess: "_1iIRVlPDTEUMMEFuHgLGlq",
          VOWarning: "_3LaJynPDFfccGWUEtdltlt",
          StatusDanger: "UxdQKun4GcZ-B1NJwHevX",
          StatusCaution: "E9t9jUT0k_0xGdy7HbJfd",
          StatusInfo: "_38gm-PDPbi6lw1-aiH81HR",
          StatusIncomplete: "ZGxYVjsUSjHLRHIWkx4-L",
        };
      },
    },
  ]);
})();
