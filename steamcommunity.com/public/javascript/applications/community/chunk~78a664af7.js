/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [8010],
    {
      23582: (G, te, i) => {
        "use strict";
        i.d(te, { l: () => Ct });
        var t = i(7850),
          Q = i(86336),
          F = i(68031),
          W = i(15252),
          N = i(75083),
          V = i(24660),
          f = i(19298),
          w = i(86067),
          l = i(86392),
          u = i(13725),
          b = i(72524),
          E = i(99412),
          C = i(71742),
          H = i(72604),
          O = i(35038),
          P = i(64981),
          p = i(21113),
          A = i(20476),
          z = i(4806),
          g = i(80613),
          d = i.n(g),
          n = i(75245),
          ne = Object.defineProperty,
          me = (r, e, s) =>
            e in r
              ? ne(r, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: s,
                })
              : (r[e] = s),
          U = (r, e, s) => me(r, typeof e != "symbol" ? e + "" : e, s);
        function pe(r) {
          return "unknown EHelpRequestType ( " + r + " )";
        }
        function ge(r) {
          return "unknown EHelpRequestState ( " + r + " )";
        }
        function Ie(r) {
          return "unknown EHelpRequestReviewState ( " + r + " )";
        }
        function ke(r) {
          return "unknown EHelpRequestStatsRollupInterval ( " + r + " )";
        }
        function J(r) {
          return "unknown EHelpRequestStatsResponderType ( " + r + " )";
        }
        function fe(r) {
          return "unknown EHelpIssue ( " + r + " )";
        }
        function Fe(r) {
          return "unknown EHelpRequestEscalationLevel ( " + r + " )";
        }
        function ae(r) {
          return "unknown EHelpRequestMsgType ( " + r + " )";
        }
        function Pe(r) {
          return "unknown EHelpRequestAction ( " + r + " )";
        }
        function $(r) {
          return "unknown EHelpRequestSortOrder ( " + r + " )";
        }
        function qe(r) {
          return "unknown EHelpRequestPOPType ( " + r + " )";
        }
        function oe(r) {
          return "unknown EAnnouncementPlacement ( " + r + " )";
        }
        function We(r) {
          return "unknown ETickerCategoryLanguageRule ( " + r + " )";
        }
        function he(r) {
          return "unknown EPreapprovalResolution ( " + r + " )";
        }
        function v(r) {
          return "unknown EHelpRequestFeedbackCategory ( " + r + " )";
        }
        function ot(r) {
          return "unknown EHelpRequestFeedbackTargetType ( " + r + " )";
        }
        function qt(r) {
          return "unknown EFeedbackState ( " + r + " )";
        }
        function Wt(r) {
          return "unknown ESupportActionSource ( " + r + " )";
        }
        function Ht(r) {
          return "unknown ERefundSupportAction ( " + r + " )";
        }
        const ve = class y extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              y.prototype.quicktext_id || n.Sg(y.M()),
              g.Message.initialize(this, e, 0, -1, [6, 10, 11], null);
          }
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
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
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = n.w0(y.M())), y.sm_mbf;
          }
          toObject(e = !1) {
            return y.toObject(e, this);
          }
          static toObject(e, s) {
            return n.BT(y.M(), e, s);
          }
          static fromObject(e) {
            return n.Uq(y.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (d().BinaryReader)(e),
              a = new y();
            return y.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(y.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(y.M(), e, s);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportData_QuickText";
          }
        };
        U(ve, "sm_m"), U(ve, "sm_mbf");
        let lt = ve;
        const be = class S extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              S.prototype.content || n.Sg(S.M()),
              g.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
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
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = n.w0(S.M())), S.sm_mbf;
          }
          toObject(e = !1) {
            return S.toObject(e, this);
          }
          static toObject(e, s) {
            return n.BT(S.M(), e, s);
          }
          static fromObject(e) {
            return n.Uq(S.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (d().BinaryReader)(e),
              a = new S();
            return S.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(S.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(S.M(), e, s);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportData_QuickTextContent";
          }
        };
        U(be, "sm_m"), U(be, "sm_mbf");
        let He = be;
        const ye = class j extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              j.prototype.quicktext_id || n.Sg(j.M()),
              g.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
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
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = n.w0(j.M())), j.sm_mbf;
          }
          toObject(e = !1) {
            return j.toObject(e, this);
          }
          static toObject(e, s) {
            return n.BT(j.M(), e, s);
          }
          static fromObject(e) {
            return n.Uq(j.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (d().BinaryReader)(e),
              a = new j();
            return j.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(j.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(j.M(), e, s);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportAgents_GetQuickText_Request";
          }
        };
        U(ye, "sm_m"), U(ye, "sm_mbf");
        let Ne = ye;
        const Se = class x extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              x.prototype.quicktext || n.Sg(x.M()),
              g.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    quicktext: { n: 1, c: lt },
                    english_reference: { n: 2, c: He },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = n.w0(x.M())), x.sm_mbf;
          }
          toObject(e = !1) {
            return x.toObject(e, this);
          }
          static toObject(e, s) {
            return n.BT(x.M(), e, s);
          }
          static fromObject(e) {
            return n.Uq(x.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (d().BinaryReader)(e),
              a = new x();
            return x.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(x.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(x.M(), e, s);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportAgents_GetQuickText_Response";
          }
        };
        U(Se, "sm_m"), U(Se, "sm_mbf");
        let ct = Se;
        const je = class B extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              B.prototype.appid || n.Sg(B.M()),
              g.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
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
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = n.w0(B.M())), B.sm_mbf;
          }
          toObject(e = !1) {
            return B.toObject(e, this);
          }
          static toObject(e, s) {
            return n.BT(B.M(), e, s);
          }
          static fromObject(e) {
            return n.Uq(B.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (d().BinaryReader)(e),
              a = new B();
            return B.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(B.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(B.M(), e, s);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_UploadUserApplicationLog_Request";
          }
        };
        U(je, "sm_m"), U(je, "sm_mbf");
        let ut = je;
        const xe = class M extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              M.prototype.id || n.Sg(M.M()),
              g.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    id: {
                      n: 1,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = n.w0(M.M())), M.sm_mbf;
          }
          toObject(e = !1) {
            return M.toObject(e, this);
          }
          static toObject(e, s) {
            return n.BT(M.M(), e, s);
          }
          static fromObject(e) {
            return n.Uq(M.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (d().BinaryReader)(e),
              a = new M();
            return M.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(M.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(M.M(), e, s);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_UploadUserApplicationLog_Response";
          }
        };
        U(xe, "sm_m"), U(xe, "sm_mbf");
        let dt = xe;
        const Be = class T extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              T.prototype.appid || n.Sg(T.M()),
              g.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
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
            let s = new (d().BinaryReader)(e),
              a = new T();
            return T.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(T.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(T.M(), e, s);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_GetApplicationLogDemand_Request";
          }
        };
        U(Be, "sm_m"), U(Be, "sm_mbf");
        let mt = Be;
        const Me = class R extends g.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              R.prototype.request_id || n.Sg(R.M()),
              g.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    request_id: {
                      n: 1,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
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
            let s = new (d().BinaryReader)(e),
              a = new R();
            return R.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(R.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(R.M(), e, s);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_GetApplicationLogDemand_Response";
          }
        };
        U(Me, "sm_m"), U(Me, "sm_mbf");
        let pt = Me;
        var Te;
        ((r) => {
          function e(s, a, m) {
            return s.SendMsg(
              "SupportAgents.GetQuickText#1",
              (0, O.I8)(Ne, a, m),
              ct,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          r.GetQuickText = e;
        })(Te || (Te = {}));
        var Ge;
        ((r) => {
          function e(a, m, h) {
            return a.SendMsg(
              "HelpRequestLogs.UploadUserApplicationLog#1",
              (0, O.I8)(ut, m, h),
              dt,
              { ePrivilege: 1 },
            );
          }
          r.UploadUserApplicationLog = e;
          function s(a, m, h) {
            return a.SendMsg(
              "HelpRequestLogs.GetApplicationLogDemand#1",
              (0, O.I8)(mt, m, h),
              pt,
              { ePrivilege: 1 },
            );
          }
          r.GetApplicationLogDemand = s;
        })(Ge || (Ge = {}));
        var gt = i(68312),
          Qe = i(66243),
          Ve = i(88942),
          D = i(90626),
          Re = i(56718),
          ft = i(85599),
          le = i(36707),
          we = i(3166),
          ht = i(98580),
          L = i.n(ht),
          vt = i(14432);
        const bt = {
          [P.lN]: [p.lV, p.WA, p.XG, p.u1, p.Nd],
          [P.NC]: [p.rf, p.M6, p.WA, p.o8, p.Nd],
        };
        function yt(r) {
          var e;
          const [s, a] = (0, D.useState)(null),
            [m, h] = (0, D.useState)("main"),
            [c, Y] = (0, D.useState)(!1),
            [_, ze] = (0, D.useState)(!1),
            [K, ce] = (0, D.useState)(null),
            [I, Z] = (0, D.useState)(null),
            [k, se] = (0, D.useState)(null),
            [re, ue] = (0, D.useState)(!1),
            [X, de] = (0, D.useState)(!1),
            [ee, ie] = (0, D.useState)(A.HH),
            [Ue, Je] = (0, D.useState)(""),
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
            Lt = c || _ || K || I || k || re || X,
            De = jt(r.authorSteamID);
          let Oe = E.Bhc;
          if (De.isSuccess) {
            const o = De.data;
            o.pref_primary_language !== void 0 && o.pref_primary_language !== -1
              ? (Oe = o.pref_primary_language)
              : o.last_logon_langauge !== void 0 &&
                o.last_logon_langauge !== -1 &&
                (Oe = o.last_logon_langauge);
          }
          const It = (0, l.AH)(s),
            Le = St(It, Oe);
          (0, D.useEffect)(() => {
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
          }, [Le.data, De.data]);
          const Xe = !1,
            $e = !1,
            et = !1,
            kt = async () => {
              (0, C.wT)(s !== null, "eReason must be non-null to sanction");
              const o = [];
              c && o.push({ sanction: z.EF }),
                _ && o.push({ sanction: z.Cv }),
                K && o.push({ sanction: z.ME, days: K }),
                I && o.push({ sanction: z.sR, days: I }),
                k && o.push({ sanction: z.bX, days: k }),
                re && o.push({ sanction: z.Fh, days: -1 }),
                X && o.push({ sanction: z.X5 }),
                ee === A.lp
                  ? o.push({ sanction: z.nw, escalate_to: A.lp })
                  : ee === A.PV &&
                    o.push({ sanction: z.nw, escalate_to: A.PV }),
                await r.sanctionMutation.mutateAsync({
                  sanctions: o,
                  message: Ue.trim(),
                  reason: s,
                }),
                r.onSanction();
            },
            Ft = (o) => {
              a(o), h("main");
            },
            Pt = (o) => {
              o ? (de(!0), se(7), a(p.rU)) : (de(!1), se(-1));
            };
          return (0, t.jsxs)(t.Fragment, {
            children: [
              m === "reason" &&
                (0, t.jsx)(vt.F, { reasons: l.UL, onSelect: Ft }),
              m === "main" &&
                (0, t.jsxs)(f.Z, {
                  children: [
                    (0, t.jsxs)(f.Z, {
                      className: L().SanctionForm,
                      children: [
                        r.sanctionMutation.isError &&
                          (0, t.jsxs)("div", {
                            className: (0, le.A)(
                              L().OneColumn,
                              L().ErrorMessage,
                            ),
                            children: [
                              (0, t.jsx)(Re.Q9b, {}),
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
                          className: L().ClickableText,
                          onClick: () => h("reason"),
                          children:
                            s === null
                              ? w.T.Localize(
                                  "#commentsanctiondialog_selectreason",
                                )
                              : (0, l.Jt)(s),
                        }),
                        Ze.length > 0 &&
                          (0, t.jsx)("div", {
                            className: L().QuickReasons,
                            children: Ze.map((o) =>
                              (0, t.jsx)(
                                N.$,
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
                          className: L().OneColumn,
                          children: [
                            (0, t.jsx)("input", {
                              type: "checkbox",
                              checked: c,
                              onChange: (o) => Y(o.target.checked),
                            }),
                            " Delete",
                          ],
                        }),
                        (0, t.jsxs)("label", {
                          className: L().OneColumn,
                          children: [
                            (0, t.jsx)("input", {
                              type: "checkbox",
                              checked: _,
                              onChange: (o) => ze(o.target.checked),
                            }),
                            " Issue Warning",
                          ],
                        }),
                        Ye &&
                          !!K &&
                          (0, t.jsxs)("div", {
                            className: (0, le.A)(
                              L().OneColumn,
                              L().ErrorMessage,
                            ),
                            children: [
                              (0, t.jsx)(Re.Q9b, {}),
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
                                    ce(
                                      o.target.value === "0"
                                        ? null
                                        : parseInt(o.target.value),
                                    ),
                                  value: K != null ? K : 0,
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
                          !!I &&
                          (0, t.jsxs)("div", {
                            className: (0, le.A)(
                              L().OneColumn,
                              L().ErrorMessage,
                            ),
                            children: [
                              (0, t.jsx)(Re.Q9b, {}),
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
                              Z(
                                o.target.value === "0"
                                  ? null
                                  : parseInt(o.target.value),
                              ),
                            value: I != null ? I : 0,
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
                          disabled: X,
                          onChange: (o) =>
                            se(
                              o.target.value === "-1"
                                ? null
                                : parseInt(o.target.value),
                            ),
                          value: k != null ? k : -1,
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
                            className: L().OneColumn,
                            children: [
                              (0, t.jsx)("input", {
                                type: "checkbox",
                                checked: re,
                                onChange: (o) => ue(o.target.checked),
                              }),
                              "\xA0Permanent trade ban",
                            ],
                          }),
                        et &&
                          (0, t.jsx)("div", {
                            children: "Already trade banned.",
                          }),
                        (0, t.jsxs)("span", {
                          className: L().OneColumn,
                          children: [
                            (0, t.jsx)("input", {
                              type: "checkbox",
                              checked: X,
                              onChange: (o) => Pt(o.target.checked),
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
                          onChange: (o) => ie(parseInt(o.target.value)),
                          value: ee,
                          children: [
                            (0, t.jsx)("option", {
                              value: A.HH,
                              children: "Do not escalate",
                            }),
                            (0, t.jsx)("option", {
                              value: A.lp,
                              children: "Supervisor",
                            }),
                            (0, t.jsx)("option", {
                              value: A.PV,
                              children: "Valve",
                            }),
                          ],
                        }),
                        (0, t.jsx)("textarea", {
                          className: (0, le.A)(
                            L().OneColumn,
                            L().MessageTextArea,
                          ),
                          placeholder: "Message to send (required)",
                          value: Ue,
                          onChange: (o) => Je(o.target.value),
                        }),
                      ],
                    }),
                    (0, t.jsxs)(f.Z, {
                      className: L().BottomButtons,
                      children: [
                        r.sanctionMutation.isPending &&
                          (0, t.jsx)(ft.t, { size: "small" }),
                        !r.sanctionMutation.isPending &&
                          (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)(Qe.Oh, {
                                onClick: r.onCancel,
                                children: "Cancel",
                              }),
                              (0, t.jsx)(Qe.n9, {
                                onClick: kt,
                                disabled:
                                  s === null || !Lt || Ue.trim().length === 0,
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
        function St(r, e) {
          const s = (0, gt.KV)();
          return (0, Ve.I)({
            queryKey: ["get_quick_text", r, e],
            queryFn: async () => {
              if (r == null || e === void 0) return null;
              const a = O.w.Init(Ne);
              a.Body().set_quicktext_id(r),
                a.Body().set_language((0, E.LgB)(e));
              const m = await Te.GetQuickText(s, a);
              if (m.GetEResult() !== H.R)
                throw new Error(
                  "useQuickText failed with EResult " + m.GetEResult(),
                );
              return m.Body().toObject();
            },
            enabled: r !== void 0,
          });
        }
        function jt(r) {
          return (0, Ve.I)({
            queryKey: ["get_primary_language_for_user", r],
            queryFn: async () => {
              if (r === "0" || !r) throw new Error("Invalid steamid");
              const s = await (
                await fetch(
                  `${we.TS.COMMUNITY_BASE_URL}profiles/${r}/ajaxlanguagepreferences`,
                )
              ).json();
              if (s.success === H.R) return s.preferences;
              throw new Error(
                "Failed GetPrimaryLanguageForUser. EResult: " + s.success,
              );
            },
          });
        }
        var Ce = i(46085),
          _e = i(49527),
          Ke = i(19316),
          Ee = i(25792),
          xt = i(2801),
          Bt = i(15568),
          Ae = i(36118),
          Mt = i(21418),
          Tt = i(71421),
          Rt = i(41635),
          wt = i(84670),
          q = i.n(wt);
        function Ct(r) {
          const { subject: e } = r,
            [s, a] = (0, D.useState)(!1),
            m =
              e &&
              (e.unresolved_report_count > 0 || e.unresolved_dispute_count > 0),
            h = (0, t.jsx)(Q.W, {
              onClick: () => a(!0),
              children: (0, t.jsxs)(F.s, {
                direction: "row",
                justify: "between",
                align: "baseline",
                gap: "1",
                children: [
                  m &&
                    (0, t.jsx)("img", {
                      className: q().Flag,
                      src: `${we.TS.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                    }),
                  w.T.Localize("#commentsanctiondialog_moderate"),
                  e &&
                    e.required_moderator_level === A.PV &&
                    (0, t.jsx)("span", {
                      className: q().ValveOnly,
                      children: "(VO)",
                    }),
                  e &&
                    e.required_moderator_level === A.lp &&
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
                  toolTipContent: (0, t.jsx)(Et, { subject: e }),
                  direction: "bottom",
                  nDelayShowMS: 0,
                  children: h,
                }),
              !e && h,
            ],
          });
        }
        function Et(r) {
          const { subject: e } = r,
            s = (0, D.useMemo)(() => {
              var a;
              const m = (0, Rt.D5)(
                (a = e == null ? void 0 : e.reports) != null ? a : [],
                (h) => h.report_reason,
              );
              return m.sort((h, c) => h[1] - c[1]), m;
            }, [e.reports]);
          return s.length === 0
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("div", {
                    children: w.T.Localize("#reasonlist_title"),
                  }),
                  s.map(([a, m]) =>
                    (0, t.jsx)(
                      "div",
                      {
                        children: w.T.Localize(
                          "#reasonlist_reasonwithcount",
                          (0, l.Jt)(a),
                          m,
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
              sanctionMutation: m,
              acquitMutation: h,
              subject: c,
              eSubjectType: Y,
              gidComment: _,
              clanSteamID: ze,
              authorSteamID: K,
              onClose: ce,
            } = r,
            I = c == null ? void 0 : c.reported_content_id,
            [Z, k] = (0, D.useState)("main"),
            se = [
              {
                name: "Reports",
                key: "reports",
                contents: (0, t.jsx)(Ee.tH, {
                  children: (0, t.jsx)(u.lX, { subject: c }),
                }),
              },
              {
                name: "History",
                key: "history",
                contents: (0, t.jsx)(Ee.tH, {
                  children: (0, t.jsx)(u.B8, { reportedContentID: I }),
                }),
              },
              {
                name: "Details",
                key: "details",
                contents: (0, t.jsx)(Ee.tH, { children: r.children }),
              },
            ],
            re = () => {
              r.onClose(),
                window.location.href.split("#").length === 1 &&
                  _ !== l.Ie &&
                  (window.location.href += "#c" + _),
                window.location.reload();
            };
          let ue = 0,
            X = 0;
          if (c)
            for (const ie of c.reports)
              ie.time_resolved && !ie.time_disputed && ue++,
                ie.time_dispute_resolved && X++;
          const de =
              !!(c != null && c.reported_content_id) &&
              !c.owner_dispute_time &&
              c.resolved === _e.S6,
            ee = c !== void 0 && !!c.owner_dispute_time;
          return (0, t.jsx)(Bt.wA, {
            onlyPopoutIfNeeded: !0,
            popupHeight: 340,
            popupWidth: 640,
            strTitle: "Moderate subject",
            children: (0, t.jsx)(xt.eV, {
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
                      Z === "main" &&
                        (0, t.jsxs)("div", {
                          className: q().ModerateCtn,
                          children: [
                            (0, t.jsxs)("div", {
                              className: q().ModerationData,
                              children: [
                                (0, t.jsxs)(W.EY, {
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
                                    ue,
                                    " resolved / ",
                                    (s =
                                      c == null
                                        ? void 0
                                        : c.unresolved_dispute_count) != null
                                      ? s
                                      : 0,
                                    " disputed / ",
                                    X,
                                    " disputes resolved",
                                  ],
                                }),
                                (0, t.jsx)(Mt.V, {
                                  tabs: se,
                                  bDisableRouting: !0,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: q().ModerationActionButtons,
                              children: [
                                (0, t.jsx)("button", {
                                  onClick: () => k("sanction"),
                                  children: (0, t.jsxs)(F.s, {
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
                                (0, t.jsx)(Dt, {
                                  subject: c,
                                  acquitMutation: h,
                                  onClose: ce,
                                }),
                                (0, t.jsx)(Ot, { subject: c, onClose: ce }),
                                (0, t.jsx)(V.fu, {
                                  disabled: !I,
                                  onClick: () => k("escalate"),
                                  children: w.T.Localize(
                                    "#moderation_escalation_escalate",
                                  ),
                                }),
                                !ee &&
                                  (0, t.jsx)("button", {
                                    disabled: !de,
                                    onClick: () => k("ownerdispute"),
                                    children: "Owner Dispute",
                                  }),
                                ee &&
                                  (0, t.jsxs)("span", {
                                    children: [
                                      (0, t.jsx)("a", {
                                        href: `${we.TS.HELP_BASE_URL}tickermaster/ticket/${c.owner_dispute_details}`,
                                        children: (0, t.jsx)(W.EY, {
                                          size: "2",
                                          children: w.T.Localize(
                                            "#moderation_already_owner_disputed",
                                          ),
                                        }),
                                      }),
                                      (0, t.jsx)("button", {
                                        disabled: !I,
                                        onClick: () =>
                                          k("editownerdisputedetails"),
                                        className: q().EditButton,
                                        children: (0, t.jsx)(Ae.ffu, {}),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      Z === "escalate" &&
                        !!I &&
                        (0, t.jsx)(b.R, {
                          reportedContentID: I,
                          onClose: () => k("main"),
                        }),
                      Z === "sanction" &&
                        (0, t.jsx)(yt, {
                          subject: c != null ? c : { subject_type: Y },
                          clanSteamID: ze,
                          authorSteamID: K,
                          sanctionMutation: m,
                          onSanction: re,
                          onCancel: () => k("main"),
                        }),
                      Z === "ownerdispute" &&
                        !!I &&
                        (0, t.jsx)(Ut, {
                          reportedContentID: I,
                          onClose: () => k("main"),
                        }),
                      Z === "editownerdisputedetails" &&
                        !!I &&
                        (0, t.jsx)(zt, {
                          reportedContentID: I,
                          onClose: () => k("main"),
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
        function zt(r) {
          const { reportedContentID: e, onClose: s, currentDetails: a } = r,
            [m, h] = (0, D.useState)(a),
            c = (0, Ce.wy)(e, m),
            Y = async () => {
              await c.mutateAsync(), s();
            };
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("label", {
                children: [
                  (0, t.jsx)(W.EY, {
                    size: "2",
                    children: w.T.Localize(
                      "#moderation_editownerdisputedetails_label",
                    ),
                  }),
                  (0, t.jsx)("input", {
                    type: "text",
                    value: m,
                    onChange: (_) => h(_.target.value),
                  }),
                ],
              }),
              (0, t.jsxs)(F.s, {
                justify: "between",
                direction: "row",
                children: [
                  (0, t.jsx)(V.fu, {
                    onClick: Y,
                    children: w.T.Localize(
                      "#moderation_editownerdisputedetails_save",
                    ),
                  }),
                  (0, t.jsx)(N.$, {
                    onClick: s,
                    loading: c.isPending,
                    children: w.T.Localize("#moderation_ownerdispute_cancel"),
                  }),
                ],
              }),
            ],
          });
        }
        function Ut(r) {
          const { reportedContentID: e, onClose: s } = r,
            [a, m] = (0, D.useState)(""),
            h = (0, Ce.y4)(e, a),
            c = async () => {
              await h.mutateAsync(), s();
            };
          return (0, t.jsxs)(f.Z, {
            className: q().OwnerDisputeCtn,
            children: [
              (0, t.jsx)(W.EY, {
                as: "div",
                size: "2",
                children: w.T.Localize("#moderation_ownerdispute_description"),
              }),
              (0, t.jsxs)("label", {
                children: [
                  (0, t.jsx)(W.EY, {
                    size: "2",
                    children: w.T.Localize(
                      "#moderation_ownerdispute_ticketmastercode",
                    ),
                  }),
                  " ",
                  (0, t.jsx)("input", {
                    type: "text",
                    value: a,
                    onChange: (Y) => m(Y.target.value),
                  }),
                ],
              }),
              (0, t.jsxs)(F.s, {
                justify: "between",
                direction: "row",
                children: [
                  (0, t.jsx)(V.fu, {
                    onClick: c,
                    children: w.T.Localize("#moderation_ownerdispute_dispute"),
                  }),
                  (0, t.jsx)(V.fu, {
                    onClick: s,
                    children: w.T.Localize("#moderation_ownerdispute_cancel"),
                  }),
                ],
              }),
            ],
          });
        }
        function Dt(r) {
          const { acquitMutation: e, onClose: s, subject: a } = r,
            m =
              a &&
              (a.unresolved_report_count > 0 || a.unresolved_dispute_count > 0),
            h = async () => {
              await e.mutateAsync(void 0), s();
            };
          return (0, t.jsx)("button", {
            onClick: h,
            disabled: !m,
            children: (0, t.jsxs)(F.s, {
              direction: "row",
              justify: "center",
              align: "center",
              children: [
                (0, t.jsx)(Ae.jlt, { className: q().AcquitIcon }),
                " ",
                w.T.Localize("#moderation_actions_acquit"),
              ],
            }),
          });
        }
        function Ot(r) {
          const { subject: e, onClose: s } = r,
            a =
              !!(e != null && e.reported_content_id) &&
              e.resolved !== _e.z_ &&
              (e.unresolved_dispute_count > 0 || e.unresolved_report_count > 0),
            m = (0, Ce.N8)(),
            h = async () => {
              e != null &&
                e.reported_content_id &&
                (await m.mutateAsync({
                  reportedContentID: e.reported_content_id,
                }),
                s());
            };
          return (0, t.jsx)("button", {
            onClick: h,
            disabled: !a,
            children: w.T.Localize("#moderation_actions_sustain"),
          });
        }
      },
      179: (G, te, i) => {
        "use strict";
        i.d(te, {
          Bm: () => W,
          QD: () => V,
          f3: () => F,
          iV: () => w,
          ip: () => f,
          le: () => N,
        });
        var t = i(90626),
          Q = i(92757);
        function F(l, u) {
          let b;
          if (typeof l == "string") b = l;
          else if ("location" in l) b = l.location.search;
          else if ("search" in l) b = l.search;
          else return;
          const E = new URLSearchParams(b.substring(1));
          if (E.has(u)) {
            const C = E.getAll(u);
            return C[C.length - 1];
          }
        }
        function W(l, u, b, E = !1) {
          const C = new URLSearchParams(l.location.search.substring(1));
          if (b != null && b != null) {
            if (C.get(u) == b) return;
            C.set(u, b);
          } else {
            if (!C.has(u)) return;
            C.delete(u);
          }
          E
            ? l.replace(`?${C.toString()}`, { ...l.location.state })
            : l.push(`?${C.toString()}`);
        }
        function N(l, u, b) {
          W(l, u, b, !0);
        }
        function V(l, u) {
          const b = (0, Q.W6)(),
            E = (0, Q.zy)(),
            C = (0, t.useMemo)(() => {
              const O = F(E.search, l);
              return O != null && O != null
                ? u != null && u != null
                  ? typeof u == "boolean"
                    ? u.constructor(O !== "false")
                    : u.constructor(O)
                  : O
                : u;
            }, [E.search, l, u]),
            H = (0, t.useCallback)(
              (O, P = !1) => {
                W(b, l, O != null && O != null ? String(O) : null, P);
              },
              [b, l],
            );
          return [C, H];
        }
        function f(l, u, b = !1) {
          const E = new URLSearchParams(l.location.search.substring(1));
          for (const C in u)
            if (u.hasOwnProperty(C)) {
              const H = u[C];
              E.delete(C), H != null && H != null && E.append(C, H);
            }
          b
            ? l.replace(`?${E.toString()}`, { ...l.location.state })
            : l.push(`?${E.toString()}`);
        }
        function w(l, u) {
          f(l, u, !0);
        }
      },
      21418: (G, te, i) => {
        "use strict";
        i.d(te, { V: () => C, a: () => H });
        var t = i(7850),
          Q = i(90626),
          F = i(36707),
          W = i(18210),
          N = i(179),
          V = i(1990),
          f = i.n(V),
          w = i(71421),
          l = i(53107),
          u = i(19298),
          b = i(20169),
          E = i(92757);
        function C(P) {
          const {
              tabs: p,
              bDisableRouting: A,
              startingTab: z,
              controlledTab: g,
              OnTabChanged: d,
              classNameCtn: n,
              classNameTab: ne,
              focusRingHasBorderRadius: me,
              classNameTabContent: U,
              preferredFocus: pe,
              bVerticalTabs: ge,
              bSticky: Ie,
              bChecklistMode: ke,
            } = P,
            J = (0, E.zy)(),
            fe = (0, E.W6)(),
            [Fe, ae] = (0, Q.useState)(() => {
              var v;
              return (
                z ||
                (!A && (0, N.f3)(J, "tab") && (v = (0, N.f3)(J, "tab")) != null
                  ? v
                  : "")
              );
            });
          (0, Q.useEffect)(() => {
            if (!P.bDisableRouting && J) {
              const v = (0, N.f3)(J, "tab");
              v && ae(v);
            }
          }, [J, J.key, P.bDisableRouting, ae]);
          const Pe = Q.useCallback(
              (v) => {
                ae(v.key),
                  A || (0, N.Bm)(fe, "tab", v.key),
                  d == null || d(v.key),
                  v.onClick && v.onClick(v);
              },
              [A, fe, d],
            ),
            $ = p.filter((v) => !v.hidden);
          if (!$.length) return null;
          const qe = g != null ? g : Fe,
            oe = $.find((v) => v.key === qe) || $[0],
            We = pe ? (z != null ? z : $[0].key) : void 0,
            he = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(u.Z, {
                  className: (0, F.A)(
                    f().GraphicalAssetsTabs,
                    ge && f().GraphicalAssetsTabsVertical,
                    ke && f().ChecklistMode,
                    Ie && f().Sticky,
                    n,
                  ),
                  navEntryPreferPosition: pe
                    ? b.iU.PREFERRED_CHILD
                    : b.iU.FIRST,
                  children: $.map((v, ot) =>
                    (0, t.jsx)(
                      O,
                      {
                        tab: v,
                        OnTabClick: Pe,
                        classNameTab: ne,
                        focusRingHasBorderRadius: me,
                        active: v.key === oe.key,
                        preferredFocus: We === v.key,
                      },
                      v.key,
                    ),
                  ),
                }),
                oe && (0, t.jsx)(u.Z, { className: U, children: oe.contents }),
              ],
            });
          return ge
            ? (0, t.jsx)(u.Z, {
                className: (0, F.A)(f().GraphicalAssetsTabsLayoutVertical),
                children: he,
              })
            : he;
        }
        function H(P) {
          const {
            statusType: p = "success",
            bShowStatusBox: A,
            children: z,
          } = P;
          let g = "";
          return (
            p === "success"
              ? (g = f().StatusSuccess)
              : p === "danger"
                ? (g = f().StatusDanger)
                : p === "caution"
                  ? (g = f().StatusCaution)
                  : p === "info"
                    ? (g = f().StatusInfo)
                    : p === "incomplete" && (g = f().StatusIncomplete),
            (0, t.jsx)("div", {
              className: (0, F.A)(
                f().GraphicalAssetStatus,
                g,
                A ? f().checklistBox : "",
              ),
              children: z,
            })
          );
        }
        function O(P) {
          const {
            tab: p,
            OnTabClick: A,
            classNameTab: z,
            focusRingHasBorderRadius: g,
            active: d,
            preferredFocus: n,
          } = P;
          return (0, t.jsx)(l.e7, {
            condition: !!(p.statusToolTip || p.tooltip),
            wrap: (ne) =>
              (0, t.jsx)(w.he, {
                toolTipContent: p.statusToolTip || p.tooltip,
                children: ne,
              }),
            children: (0, t.jsxs)(u.Z, {
              className: (0, F.A)(
                f().GraphicalAssetsTab,
                d && f().Active,
                d && "ActiveTab",
                z,
              ),
              onActivate: () => A(p),
              preferredFocus: n,
              focusRingHasBorderRadius: g,
              children: [
                !!p.vo_warning &&
                  (0, t.jsx)(w.he, {
                    toolTipContent: p.vo_warning,
                    children: (0, t.jsx)("div", {
                      className: f().VOWarning,
                      children: (0, W.we)("#EventEditor_VOWarning"),
                    }),
                  }),
                p.status,
                p.name,
              ],
            }),
          });
        }
      },
      84670: (G) => {
        G.exports = {
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
      98580: (G) => {
        G.exports = {
          BottomButtons: "mdeaaJPcT9kJyTGau_Zr7",
          SanctionForm: "_33cLeNjYsBEX2T0-B9gc5G",
          OneColumn: "_2LTDR9F3yb80ONcUPcDxo1",
          QuickReasons: "_1VdNqwseupCqI68H-YwwZO",
          MessageTextArea: "_3IWpl3mfH9OFkiqMIh7WtY",
          ErrorMessage: "_3_dhawEOV-fztaXEftlfxJ",
        };
      },
      1990: (G) => {
        G.exports = {
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
