/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [78010],
    {
      23582: (Y, C, a) => {
        "use strict";
        a.d(C, { l: () => it });
        var t = a(7850),
          $ = a(86336),
          N = a(68031),
          W = a(15252),
          A = a(75083),
          k = a(24660),
          h = a(19298),
          M = a(86067),
          o = a(86392),
          c = a(13725),
          v = a(72524),
          g = a(99412),
          b = a(71742),
          U = a(72604),
          P = a(35038),
          V = a(64981),
          d = a(21113),
          E = a(20476),
          w = a(4806),
          f = a(80613),
          u = a.n(f),
          n = a(75245);
        function q(i) {
          return "unknown EHelpRequestType ( " + i + " )";
        }
        function ie(i) {
          return "unknown EHelpRequestState ( " + i + " )";
        }
        function Se(i) {
          return "unknown EHelpRequestReviewState ( " + i + " )";
        }
        function oe(i) {
          return "unknown EHelpRequestStatsRollupInterval ( " + i + " )";
        }
        function ce(i) {
          return "unknown EHelpRequestStatsResponderType ( " + i + " )";
        }
        function Oe(i) {
          return "unknown EHelpIssue ( " + i + " )";
        }
        function ze(i) {
          return "unknown EHelpRequestEscalationLevel ( " + i + " )";
        }
        function G(i) {
          return "unknown EHelpRequestMsgType ( " + i + " )";
        }
        function de(i) {
          return "unknown EHelpRequestAction ( " + i + " )";
        }
        function Te(i) {
          return "unknown EHelpRequestSortOrder ( " + i + " )";
        }
        function ae(i) {
          return "unknown EHelpRequestPOPType ( " + i + " )";
        }
        function Ie(i) {
          return "unknown EAnnouncementPlacement ( " + i + " )";
        }
        function p(i) {
          return "unknown ETickerCategoryLanguageRule ( " + i + " )";
        }
        function Pe(i) {
          return "unknown EPreapprovalResolution ( " + i + " )";
        }
        function se(i) {
          return "unknown EHelpRequestFeedbackCategory ( " + i + " )";
        }
        function We(i) {
          return "unknown EHelpRequestFeedbackTargetType ( " + i + " )";
        }
        function ue(i) {
          return "unknown EFeedbackState ( " + i + " )";
        }
        function F(i) {
          return "unknown ESupportActionSource ( " + i + " )";
        }
        function Ae(i) {
          return "unknown ERefundSupportAction ( " + i + " )";
        }
        class x extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              x.prototype.quicktext_id || n.Sg(x.M()),
              f.Message.initialize(this, e, 0, -1, [6, 10, 11], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
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
                    content: { n: 7, c: y },
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
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = n.w0(x.M())), x.sm_mbf;
          }
          toObject(e = !1) {
            return x.toObject(e, this);
          }
          static toObject(e, r) {
            return n.BT(x.M(), e, r);
          }
          static fromObject(e) {
            return n.Uq(x.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              s = new x();
            return x.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return n.zj(x.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            n.i0(x.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportData_QuickText";
          }
        }
        class y extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              y.prototype.content || n.Sg(y.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
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
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = n.w0(y.M())), y.sm_mbf;
          }
          toObject(e = !1) {
            return y.toObject(e, this);
          }
          static toObject(e, r) {
            return n.BT(y.M(), e, r);
          }
          static fromObject(e) {
            return n.Uq(y.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              s = new y();
            return y.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return n.zj(y.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            n.i0(y.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportData_QuickTextContent";
          }
        }
        class j extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              j.prototype.quicktext_id || n.Sg(j.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
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
          static toObject(e, r) {
            return n.BT(j.M(), e, r);
          }
          static fromObject(e) {
            return n.Uq(j.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              s = new j();
            return j.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return n.zj(j.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            n.i0(j.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportAgents_GetQuickText_Request";
          }
        }
        class S extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              S.prototype.quicktext || n.Sg(S.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    quicktext: { n: 1, c: x },
                    english_reference: { n: 2, c: y },
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
          static toObject(e, r) {
            return n.BT(S.M(), e, r);
          }
          static fromObject(e) {
            return n.Uq(S.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              s = new S();
            return S.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return n.zj(S.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            n.i0(S.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportAgents_GetQuickText_Response";
          }
        }
        class O extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              O.prototype.appid || n.Sg(O.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
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
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = n.w0(O.M())), O.sm_mbf;
          }
          toObject(e = !1) {
            return O.toObject(e, this);
          }
          static toObject(e, r) {
            return n.BT(O.M(), e, r);
          }
          static fromObject(e) {
            return n.Uq(O.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              s = new O();
            return O.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return n.zj(O.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            n.i0(O.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_UploadUserApplicationLog_Request";
          }
        }
        class z extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              z.prototype.id || n.Sg(z.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    id: {
                      n: 1,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = n.w0(z.M())), z.sm_mbf;
          }
          toObject(e = !1) {
            return z.toObject(e, this);
          }
          static toObject(e, r) {
            return n.BT(z.M(), e, r);
          }
          static fromObject(e) {
            return n.Uq(z.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              s = new z();
            return z.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return n.zj(z.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            n.i0(z.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_UploadUserApplicationLog_Response";
          }
        }
        class T extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              T.prototype.appid || n.Sg(T.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
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
          static toObject(e, r) {
            return n.BT(T.M(), e, r);
          }
          static fromObject(e) {
            return n.Uq(T.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              s = new T();
            return T.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return n.zj(T.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            n.i0(T.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_GetApplicationLogDemand_Request";
          }
        }
        class I extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              I.prototype.request_id || n.Sg(I.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    request_id: {
                      n: 1,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = n.w0(I.M())), I.sm_mbf;
          }
          toObject(e = !1) {
            return I.toObject(e, this);
          }
          static toObject(e, r) {
            return n.BT(I.M(), e, r);
          }
          static fromObject(e) {
            return n.Uq(I.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (u().BinaryReader)(e),
              s = new I();
            return I.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return n.zj(I.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (u().BinaryWriter)();
            return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            n.i0(I.M(), e, r);
          }
          serializeBase64String() {
            var e = new (u().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_GetApplicationLogDemand_Response";
          }
        }
        var me;
        ((i) => {
          function e(r, s, m) {
            return r.SendMsg(
              "SupportAgents.GetQuickText#1",
              (0, P.I8)(j, s, m),
              S,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          i.GetQuickText = e;
        })(me || (me = {}));
        var Fe;
        ((i) => {
          function e(s, m, B) {
            return s.SendMsg(
              "HelpRequestLogs.UploadUserApplicationLog#1",
              (0, P.I8)(O, m, B),
              z,
              { ePrivilege: 1 },
            );
          }
          i.UploadUserApplicationLog = e;
          function r(s, m, B) {
            return s.SendMsg(
              "HelpRequestLogs.GetApplicationLogDemand#1",
              (0, P.I8)(T, m, B),
              I,
              { ePrivilege: 1 },
            );
          }
          i.GetApplicationLogDemand = r;
        })(Fe || (Fe = {}));
        var ke = a(68312),
          Ne = a(66243),
          De = a(88942),
          D = a(90626),
          fe = a(56718),
          Ce = a(85599),
          le = a(36707),
          he = a(3166),
          He = a(98580),
          K = a.n(He),
          Re = a(14432);
        const Ge = {
          [V.lN]: [d.lV, d.WA, d.XG, d.u1, d.Nd],
          [V.NC]: [d.rf, d.M6, d.WA, d.o8, d.Nd],
        };
        function Qe(i) {
          const [e, r] = (0, D.useState)(null),
            [s, m] = (0, D.useState)("main"),
            [B, R] = (0, D.useState)(!1),
            [H, _] = (0, D.useState)(!1),
            [J, Q] = (0, D.useState)(null),
            [Z, je] = (0, D.useState)(null),
            [ee, te] = (0, D.useState)(null),
            [ne, Be] = (0, D.useState)(!1),
            [L, re] = (0, D.useState)(!1),
            [Me, ut] = (0, D.useState)(E.HH),
            [ge, Ue] = (0, D.useState)(""),
            Je =
              i.rtContentCreatedAt !== void 0
                ? (Date.now() / 1e3 - i.rtContentCreatedAt) / (30 * 86400)
                : !1,
            Ye =
              (i.subject.subject_type ? Ge[i.subject.subject_type] : void 0) ??
              [],
            mt = B || H || J || Z || ee || ne || L,
            Ee = qe(i.authorSteamID);
          let we = g.Bhc;
          if (Ee.isSuccess) {
            const l = Ee.data;
            l.pref_primary_language !== void 0 && l.pref_primary_language !== -1
              ? (we = l.pref_primary_language)
              : l.last_logon_langauge !== void 0 &&
                l.last_logon_langauge !== -1 &&
                (we = l.last_logon_langauge);
          }
          const ft = (0, o.AH)(e),
            xe = Le(ft, we);
          (0, D.useEffect)(() => {
            Ue(
              xe.data?.quicktext?.content?.content ??
                xe.data?.english_reference?.content ??
                "",
            );
          }, [xe.data, Ee.data]);
          const Ze = !1,
            Xe = !1,
            $e = !1,
            ht = async () => {
              (0, b.wT)(e !== null, "eReason must be non-null to sanction");
              const l = [];
              B && l.push({ sanction: w.EF }),
                H && l.push({ sanction: w.Cv }),
                J && l.push({ sanction: w.ME, days: J }),
                Z && l.push({ sanction: w.sR, days: Z }),
                ee && l.push({ sanction: w.bX, days: ee }),
                ne && l.push({ sanction: w.Fh, days: -1 }),
                L && l.push({ sanction: w.X5 }),
                Me === E.lp
                  ? l.push({ sanction: w.nw, escalate_to: E.lp })
                  : Me === E.PV &&
                    l.push({ sanction: w.nw, escalate_to: E.PV }),
                await i.sanctionMutation.mutateAsync({
                  sanctions: l,
                  message: ge.trim(),
                  reason: e,
                }),
                i.onSanction();
            },
            vt = (l) => {
              r(l), m("main");
            },
            bt = (l) => {
              l ? (re(!0), te(7), r(d.rU)) : (re(!1), te(-1));
            };
          return (0, t.jsxs)(t.Fragment, {
            children: [
              s === "reason" &&
                (0, t.jsx)(Re.F, { reasons: o.UL, onSelect: vt }),
              s === "main" &&
                (0, t.jsxs)(h.Z, {
                  children: [
                    (0, t.jsxs)(h.Z, {
                      className: K().SanctionForm,
                      children: [
                        i.sanctionMutation.isError &&
                          (0, t.jsxs)("div", {
                            className: (0, le.A)(
                              K().OneColumn,
                              K().ErrorMessage,
                            ),
                            children: [
                              (0, t.jsx)(fe.Q9b, {}),
                              " Error: ",
                              i.sanctionMutation.error.message,
                            ],
                          }),
                        (0, t.jsx)("label", {
                          htmlFor: "reason",
                          children: "Reason:",
                        }),
                        (0, t.jsx)("button", {
                          id: "reason",
                          className: K().ClickableText,
                          onClick: () => m("reason"),
                          children:
                            e === null
                              ? M.T.Localize(
                                  "#commentsanctiondialog_selectreason",
                                )
                              : (0, o.Jt)(e),
                        }),
                        Ye.length > 0 &&
                          (0, t.jsx)("div", {
                            className: K().QuickReasons,
                            children: Ye.map((l) =>
                              (0, t.jsx)(
                                A.$,
                                {
                                  onClick: () => r(e === l ? null : l),
                                  size: "1",
                                  variant: e === l ? "basic" : "dark",
                                  children: (0, o.Jt)(l),
                                },
                                l,
                              ),
                            ),
                          }),
                        (0, t.jsxs)("label", {
                          className: K().OneColumn,
                          children: [
                            (0, t.jsx)("input", {
                              type: "checkbox",
                              checked: B,
                              onChange: (l) => R(l.target.checked),
                            }),
                            " Delete",
                          ],
                        }),
                        (0, t.jsxs)("label", {
                          className: K().OneColumn,
                          children: [
                            (0, t.jsx)("input", {
                              type: "checkbox",
                              checked: H,
                              onChange: (l) => _(l.target.checked),
                            }),
                            " Issue Warning",
                          ],
                        }),
                        Je &&
                          !!J &&
                          (0, t.jsxs)("div", {
                            className: (0, le.A)(
                              K().OneColumn,
                              K().ErrorMessage,
                            ),
                            children: [
                              (0, t.jsx)(fe.Q9b, {}),
                              " Content is older than 30 days. Are you sure you want to ban?",
                            ],
                          }),
                        i.clanSteamID &&
                          (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)("label", {
                                htmlFor: "hubban",
                                children: "Ban from hub:",
                              }),
                              !Ze &&
                                (0, t.jsxs)("select", {
                                  id: "hubban",
                                  onChange: (l) =>
                                    Q(
                                      l.target.value === "0"
                                        ? null
                                        : parseInt(l.target.value),
                                    ),
                                  value: J ?? 0,
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
                              Ze &&
                                (0, t.jsx)("div", {
                                  id: "hubban",
                                  children: "Already banned from hub",
                                }),
                            ],
                          }),
                        Je &&
                          !!Z &&
                          (0, t.jsxs)("div", {
                            className: (0, le.A)(
                              K().OneColumn,
                              K().ErrorMessage,
                            ),
                            children: [
                              (0, t.jsx)(fe.Q9b, {}),
                              " Content is older than 30 days. Are you sure you want to ban?",
                            ],
                          }),
                        (0, t.jsx)("label", {
                          htmlFor: "communityban",
                          children: "Ban from community:",
                        }),
                        !Xe &&
                          (0, t.jsxs)("select", {
                            id: "communityban",
                            onChange: (l) =>
                              je(
                                l.target.value === "0"
                                  ? null
                                  : parseInt(l.target.value),
                              ),
                            value: Z ?? 0,
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
                            id: "communityban",
                            children: "Already community banned.",
                          }),
                        (0, t.jsx)("label", {
                          htmlFor: "deletecomments",
                          children: "Delete comments since:",
                        }),
                        (0, t.jsxs)("select", {
                          id: "deletecomments",
                          disabled: L,
                          onChange: (l) =>
                            te(
                              l.target.value === "-1"
                                ? null
                                : parseInt(l.target.value),
                            ),
                          value: ee ?? -1,
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
                        !$e &&
                          (0, t.jsxs)("span", {
                            className: K().OneColumn,
                            children: [
                              (0, t.jsx)("input", {
                                type: "checkbox",
                                checked: ne,
                                onChange: (l) => Be(l.target.checked),
                              }),
                              "\xA0Permanent trade ban",
                            ],
                          }),
                        $e &&
                          (0, t.jsx)("div", {
                            children: "Already trade banned.",
                          }),
                        (0, t.jsxs)("span", {
                          className: K().OneColumn,
                          children: [
                            (0, t.jsx)("input", {
                              type: "checkbox",
                              checked: L,
                              onChange: (l) => bt(l.target.checked),
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
                          onChange: (l) => ut(parseInt(l.target.value)),
                          value: Me,
                          children: [
                            (0, t.jsx)("option", {
                              value: E.HH,
                              children: "Do not escalate",
                            }),
                            (0, t.jsx)("option", {
                              value: E.lp,
                              children: "Supervisor",
                            }),
                            (0, t.jsx)("option", {
                              value: E.PV,
                              children: "Valve",
                            }),
                          ],
                        }),
                        (0, t.jsx)("textarea", {
                          className: (0, le.A)(
                            K().OneColumn,
                            K().MessageTextArea,
                          ),
                          placeholder: "Message to send (required)",
                          value: ge,
                          onChange: (l) => Ue(l.target.value),
                        }),
                      ],
                    }),
                    (0, t.jsxs)(h.Z, {
                      className: K().BottomButtons,
                      children: [
                        i.sanctionMutation.isPending &&
                          (0, t.jsx)(Ce.t, { size: "small" }),
                        !i.sanctionMutation.isPending &&
                          (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)(Ne.Oh, {
                                onClick: i.onCancel,
                                children: "Cancel",
                              }),
                              (0, t.jsx)(Ne.n9, {
                                onClick: ht,
                                disabled:
                                  e === null || !mt || ge.trim().length === 0,
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
        function Le(i, e) {
          const r = (0, ke.KV)();
          return (0, De.I)({
            queryKey: ["get_quick_text", i, e],
            queryFn: async () => {
              if (i == null || e === void 0) return null;
              const s = P.w.Init(j);
              s.Body().set_quicktext_id(i),
                s.Body().set_language((0, g.LgB)(e));
              const m = await me.GetQuickText(r, s);
              if (m.GetEResult() !== U.R)
                throw new Error(
                  "useQuickText failed with EResult " + m.GetEResult(),
                );
              return m.Body().toObject();
            },
            enabled: i !== void 0,
          });
        }
        function qe(i) {
          return (0, De.I)({
            queryKey: ["get_primary_language_for_user", i],
            queryFn: async () => {
              if (i === "0" || !i) throw new Error("Invalid steamid");
              const r = await (
                await fetch(
                  `${he.TS.COMMUNITY_BASE_URL}profiles/${i}/ajaxlanguagepreferences`,
                )
              ).json();
              if (r.success === U.R) return r.preferences;
              throw new Error(
                "Failed GetPrimaryLanguageForUser. EResult: " + r.success,
              );
            },
          });
        }
        var ve = a(46085),
          Ve = a(49527),
          Ke = a(19316),
          be = a(25792),
          pe = a(2801),
          _e = a(15568),
          ye = a(36118),
          et = a(21418),
          tt = a(71421),
          nt = a(41635),
          rt = a(84670),
          X = a.n(rt);
        function it(i) {
          const { subject: e } = i,
            [r, s] = (0, D.useState)(!1),
            m =
              e &&
              (e.unresolved_report_count > 0 || e.unresolved_dispute_count > 0),
            B = (0, t.jsx)($.W, {
              onClick: () => s(!0),
              children: (0, t.jsxs)(N.s, {
                direction: "row",
                justify: "between",
                align: "baseline",
                gap: "1",
                children: [
                  m &&
                    (0, t.jsx)("img", {
                      className: X().Flag,
                      src: `${he.TS.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                    }),
                  M.T.Localize("#commentsanctiondialog_moderate"),
                  e &&
                    e.required_moderator_level === E.PV &&
                    (0, t.jsx)("span", {
                      className: X().ValveOnly,
                      children: "(VO)",
                    }),
                  e &&
                    e.required_moderator_level === E.lp &&
                    (0, t.jsx)("span", {
                      className: X().SupervisorOnly,
                      children: "(Supervisor)",
                    }),
                ],
              }),
            });
          return (0, t.jsxs)(t.Fragment, {
            children: [
              r && (0, t.jsx)(st, { onClose: () => s(!1), ...i }),
              e &&
                (0, t.jsx)(tt.Gq, {
                  toolTipContent: (0, t.jsx)(at, { subject: e }),
                  direction: "bottom",
                  nDelayShowMS: 0,
                  children: B,
                }),
              !e && B,
            ],
          });
        }
        function at(i) {
          const { subject: e } = i,
            r = (0, D.useMemo)(() => {
              const s = (0, nt.D5)(e?.reports ?? [], (m) => m.report_reason);
              return s.sort((m, B) => m[1] - B[1]), s;
            }, [e.reports]);
          return r.length === 0
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("div", {
                    children: M.T.Localize("#reasonlist_title"),
                  }),
                  r.map(([s, m]) =>
                    (0, t.jsx)(
                      "div",
                      {
                        children: M.T.Localize(
                          "#reasonlist_reasonwithcount",
                          (0, o.Jt)(s),
                          m,
                        ),
                      },
                      s,
                    ),
                  ),
                ],
              });
        }
        function st(i) {
          const {
              sanctionMutation: e,
              acquitMutation: r,
              subject: s,
              eSubjectType: m,
              gidComment: B,
              clanSteamID: R,
              authorSteamID: H,
              onClose: _,
            } = i,
            J = s?.reported_content_id,
            [Q, Z] = (0, D.useState)("main"),
            je = [
              {
                name: "Reports",
                key: "reports",
                contents: (0, t.jsx)(be.tH, {
                  children: (0, t.jsx)(c.lX, { subject: s }),
                }),
              },
              {
                name: "History",
                key: "history",
                contents: (0, t.jsx)(be.tH, {
                  children: (0, t.jsx)(c.B8, { reportedContentID: J }),
                }),
              },
              {
                name: "Details",
                key: "details",
                contents: (0, t.jsx)(be.tH, { children: i.children }),
              },
            ],
            ee = () => {
              i.onClose(),
                window.location.href.split("#").length === 1 &&
                  B !== o.Ie &&
                  (window.location.href += "#c" + B),
                window.location.reload();
            };
          let te = 0,
            ne = 0;
          if (s)
            for (const re of s.reports)
              re.time_resolved && !re.time_disputed && te++,
                re.time_dispute_resolved && ne++;
          const Be =
              !!s?.reported_content_id &&
              !s.owner_dispute_time &&
              s.resolved === Ve.S6,
            L = s !== void 0 && !!s.owner_dispute_time;
          return (0, t.jsx)(_e.wA, {
            onlyPopoutIfNeeded: !0,
            popupHeight: 340,
            popupWidth: 640,
            strTitle: "Moderate subject",
            children: (0, t.jsx)(pe.eV, {
              bAllowFullSize: !0,
              title: "Moderate",
              "aria-describedby": "moderate",
              onCancel: i.onClose,
              className: X().ModerateDialog,
              children: (0, t.jsx)(Ke.f3, {
                children: (0, t.jsx)(Ke.a3, {
                  children: (0, t.jsxs)("div", {
                    className: X().ModerateDialogCtn,
                    children: [
                      Q === "main" &&
                        (0, t.jsxs)("div", {
                          className: X().ModerateCtn,
                          children: [
                            (0, t.jsxs)("div", {
                              className: X().ModerationData,
                              children: [
                                (0, t.jsxs)(W.EY, {
                                  as: "div",
                                  size: "3",
                                  contrast: "description",
                                  children: [
                                    s?.unresolved_report_count ?? 0,
                                    " unresolved / ",
                                    te,
                                    " resolved / ",
                                    s?.unresolved_dispute_count ?? 0,
                                    " disputed / ",
                                    ne,
                                    " disputes resolved",
                                  ],
                                }),
                                (0, t.jsx)(et.V, {
                                  tabs: je,
                                  bDisableRouting: !0,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: X().ModerationActionButtons,
                              children: [
                                (0, t.jsx)("button", {
                                  onClick: () => Z("sanction"),
                                  children: (0, t.jsxs)(N.s, {
                                    direction: "row",
                                    justify: "center",
                                    align: "center",
                                    children: [
                                      (0, t.jsx)(ye.X, {
                                        className: X().SanctionIcon,
                                      }),
                                      " Sanction",
                                    ],
                                  }),
                                }),
                                (0, t.jsx)(ct, {
                                  subject: s,
                                  acquitMutation: r,
                                  onClose: _,
                                }),
                                (0, t.jsx)(dt, { subject: s, onClose: _ }),
                                (0, v.h)(s) &&
                                  (0, t.jsx)(k.fu, {
                                    disabled: !J,
                                    onClick: () => Z("escalate"),
                                    children: M.T.Localize(
                                      "#moderation_escalation_escalate",
                                    ),
                                  }),
                                !L &&
                                  (0, t.jsx)("button", {
                                    disabled: !Be,
                                    onClick: () => Z("ownerdispute"),
                                    children: "Owner Dispute",
                                  }),
                                L &&
                                  (0, t.jsxs)("span", {
                                    children: [
                                      (0, t.jsx)("a", {
                                        href: `${he.TS.HELP_BASE_URL}tickermaster/ticket/${s.owner_dispute_details}`,
                                        children: (0, t.jsx)(W.EY, {
                                          size: "2",
                                          children: M.T.Localize(
                                            "#moderation_already_owner_disputed",
                                          ),
                                        }),
                                      }),
                                      (0, t.jsx)("button", {
                                        disabled: !J,
                                        onClick: () =>
                                          Z("editownerdisputedetails"),
                                        className: X().EditButton,
                                        children: (0, t.jsx)(ye.ffu, {}),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      Q === "escalate" &&
                        !!J &&
                        (0, t.jsx)(v.R, {
                          reportedContentID: J,
                          eCurrentLevel: s?.required_moderator_level,
                          onClose: () => Z("main"),
                        }),
                      Q === "sanction" &&
                        (0, t.jsx)(Qe, {
                          subject: s ?? { subject_type: m },
                          clanSteamID: R,
                          authorSteamID: H,
                          sanctionMutation: e,
                          onSanction: ee,
                          onCancel: () => Z("main"),
                        }),
                      Q === "ownerdispute" &&
                        !!J &&
                        (0, t.jsx)(ot, {
                          reportedContentID: J,
                          onClose: () => Z("main"),
                        }),
                      Q === "editownerdisputedetails" &&
                        !!J &&
                        (0, t.jsx)(lt, {
                          reportedContentID: J,
                          onClose: () => Z("main"),
                          currentDetails: s?.owner_dispute_details ?? "",
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }
        function lt(i) {
          const { reportedContentID: e, onClose: r, currentDetails: s } = i,
            [m, B] = (0, D.useState)(s),
            R = (0, ve.wy)(e, m),
            H = async () => {
              await R.mutateAsync(), r();
            };
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("label", {
                children: [
                  (0, t.jsx)(W.EY, {
                    size: "2",
                    children: M.T.Localize(
                      "#moderation_editownerdisputedetails_label",
                    ),
                  }),
                  (0, t.jsx)("input", {
                    type: "text",
                    value: m,
                    onChange: (_) => B(_.target.value),
                  }),
                ],
              }),
              (0, t.jsxs)(N.s, {
                justify: "between",
                direction: "row",
                children: [
                  (0, t.jsx)(k.fu, {
                    onClick: H,
                    children: M.T.Localize(
                      "#moderation_editownerdisputedetails_save",
                    ),
                  }),
                  (0, t.jsx)(A.$, {
                    onClick: r,
                    loading: R.isPending,
                    children: M.T.Localize("#moderation_ownerdispute_cancel"),
                  }),
                ],
              }),
            ],
          });
        }
        function ot(i) {
          const { reportedContentID: e, onClose: r } = i,
            [s, m] = (0, D.useState)(""),
            B = (0, ve.y4)(e, s),
            R = async () => {
              await B.mutateAsync(), r();
            };
          return (0, t.jsxs)(h.Z, {
            className: X().OwnerDisputeCtn,
            children: [
              (0, t.jsx)(W.EY, {
                as: "div",
                size: "2",
                children: M.T.Localize("#moderation_ownerdispute_description"),
              }),
              (0, t.jsxs)("label", {
                children: [
                  (0, t.jsx)(W.EY, {
                    size: "2",
                    children: M.T.Localize(
                      "#moderation_ownerdispute_ticketmastercode",
                    ),
                  }),
                  " ",
                  (0, t.jsx)("input", {
                    type: "text",
                    value: s,
                    onChange: (H) => m(H.target.value),
                  }),
                ],
              }),
              (0, t.jsxs)(N.s, {
                justify: "between",
                direction: "row",
                children: [
                  (0, t.jsx)(k.fu, {
                    onClick: R,
                    children: M.T.Localize("#moderation_ownerdispute_dispute"),
                  }),
                  (0, t.jsx)(k.fu, {
                    onClick: r,
                    children: M.T.Localize("#moderation_ownerdispute_cancel"),
                  }),
                ],
              }),
            ],
          });
        }
        function ct(i) {
          const { acquitMutation: e, onClose: r, subject: s } = i,
            m =
              s &&
              (s.unresolved_report_count > 0 || s.unresolved_dispute_count > 0),
            B = async () => {
              await e.mutateAsync(void 0), r();
            };
          return (0, t.jsx)("button", {
            onClick: B,
            disabled: !m,
            children: (0, t.jsxs)(N.s, {
              direction: "row",
              justify: "center",
              align: "center",
              children: [
                (0, t.jsx)(ye.jlt, { className: X().AcquitIcon }),
                " ",
                M.T.Localize("#moderation_actions_acquit"),
              ],
            }),
          });
        }
        function dt(i) {
          const { subject: e, onClose: r } = i,
            s =
              !!e?.reported_content_id &&
              e.resolved !== Ve.z_ &&
              (e.unresolved_dispute_count > 0 || e.unresolved_report_count > 0),
            m = (0, ve.N8)(),
            B = async () => {
              e?.reported_content_id &&
                (await m.mutateAsync({
                  reportedContentID: e.reported_content_id,
                }),
                r());
            };
          return (0, t.jsx)("button", {
            onClick: B,
            disabled: !s,
            children: M.T.Localize("#moderation_actions_sustain"),
          });
        }
      },
      86946: (Y, C, a) => {
        "use strict";
        a.d(C, { j: () => c, w: () => v });
        var t = a(7850),
          $ = a(64238),
          N = a.n($),
          W = a(38878),
          A = a.n(W),
          k = a(60351),
          h = a(68031),
          M = a(8928),
          o = a(69289);
        function c(g) {
          const {
              children: b,
              beforeContent: U,
              afterContent: P,
              hasValue: V,
              ...d
            } = g,
            E = v(d);
          return (0, t.jsxs)(h.s, {
            ...E,
            align: "center",
            "data-has-value": !!V,
            minWidth: "0",
            children: [
              U && (0, t.jsx)(h.s, { paddingRight: "2", children: U }),
              (0, t.jsx)(k.az, { flexGrow: "1", minWidth: "0", children: b }),
              P && (0, t.jsx)(h.s, { paddingLeft: "2", children: P }),
            ],
          });
        }
        function v(g) {
          const {
              variant: b = "basic",
              size: U = "2",
              radius: P,
              focusable: V = !0,
              hoverable: d = !0,
              clickable: E = !0,
              disabled: w,
              className: f,
              status: u,
              color: n,
              ...q
            } = g,
            ie = b === "underline" ? "none" : P;
          return (0, o.mz)(
            {
              ...q,
              radius: ie,
              "data-status": u,
              "data-dull-color": n && n !== "dull" ? n : void 0,
              className: N()(
                W.ControlBox,
                V && !w && W.Focusable,
                d && !w && W.Hoverable,
                E && !w && W.Clickable,
                w && W.Disabled,
                W[`Variant-${b}`],
                W[`Size-${U}`],
                f,
              ),
            },
            M.h,
          );
        }
      },
      98929: (Y, C, a) => {
        "use strict";
        a.d(C, { F: () => N });
        var t = a(24089),
          $ = a.n(t);
        function N() {
          return t.TextEntry;
        }
      },
      179: (Y, C, a) => {
        "use strict";
        a.d(C, {
          Bm: () => W,
          QD: () => k,
          f3: () => N,
          iV: () => M,
          ip: () => h,
          le: () => A,
        });
        var t = a(90626),
          $ = a(92757);
        function N(o, c) {
          let v;
          if (typeof o == "string") v = o;
          else if ("location" in o) v = o.location.search;
          else if ("search" in o) v = o.search;
          else return;
          const g = new URLSearchParams(v.substring(1));
          if (g.has(c)) {
            const b = g.getAll(c);
            return b[b.length - 1];
          }
        }
        function W(o, c, v, g = !1) {
          const b = new URLSearchParams(o.location.search.substring(1));
          if (v != null && v != null) {
            if (b.get(c) == v) return;
            b.set(c, v);
          } else {
            if (!b.has(c)) return;
            b.delete(c);
          }
          g
            ? o.replace(`?${b.toString()}`, { ...o.location.state })
            : o.push(`?${b.toString()}`);
        }
        function A(o, c, v) {
          W(o, c, v, !0);
        }
        function k(o, c) {
          const v = (0, $.W6)(),
            g = (0, $.zy)(),
            b = (0, t.useMemo)(() => {
              const P = N(g.search, o);
              return P != null && P != null
                ? c != null && c != null
                  ? typeof c == "boolean"
                    ? c.constructor(P !== "false")
                    : c.constructor(P)
                  : P
                : c;
            }, [g.search, o, c]),
            U = (0, t.useCallback)(
              (P, V = !1) => {
                W(v, o, P != null && P != null ? String(P) : null, V);
              },
              [v, o],
            );
          return [b, U];
        }
        function h(o, c, v = !1) {
          const g = new URLSearchParams(o.location.search.substring(1));
          for (const b in c)
            if (c.hasOwnProperty(b)) {
              const U = c[b];
              g.delete(b), U != null && U != null && g.append(b, U);
            }
          v
            ? o.replace(`?${g.toString()}`, { ...o.location.state })
            : o.push(`?${g.toString()}`);
        }
        function M(o, c) {
          h(o, c, !0);
        }
      },
      21418: (Y, C, a) => {
        "use strict";
        a.d(C, { V: () => b, a: () => U });
        var t = a(7850),
          $ = a(90626),
          N = a(36707),
          W = a(18210),
          A = a(179),
          k = a(1990),
          h = a.n(k),
          M = a(71421),
          o = a(53107),
          c = a(19298),
          v = a(20169),
          g = a(92757);
        function b(V) {
          const {
              tabs: d,
              bDisableRouting: E,
              startingTab: w,
              controlledTab: f,
              OnTabChanged: u,
              classNameCtn: n,
              classNameTab: q,
              focusRingHasBorderRadius: ie,
              classNameTabContent: Se,
              preferredFocus: oe,
              bVerticalTabs: ce,
              bSticky: Oe,
              bChecklistMode: ze,
            } = V,
            G = (0, g.zy)(),
            de = (0, g.W6)(),
            [Te, ae] = (0, $.useState)(
              () =>
                w ||
                (!E && (0, A.f3)(G, "tab") ? ((0, A.f3)(G, "tab") ?? "") : ""),
            );
          (0, $.useEffect)(() => {
            if (!V.bDisableRouting && G) {
              const F = (0, A.f3)(G, "tab");
              F && ae(F);
            }
          }, [G, G.key, V.bDisableRouting, ae]);
          const Ie = $.useCallback(
              (F) => {
                ae(F.key),
                  E || (0, A.Bm)(de, "tab", F.key),
                  u?.(F.key),
                  F.onClick && F.onClick(F);
              },
              [E, de, u],
            ),
            p = d.filter((F) => !F.hidden);
          if (!p.length) return null;
          const Pe = f ?? Te,
            se = p.find((F) => F.key === Pe) || p[0],
            We = oe ? (w ?? p[0].key) : void 0,
            ue = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(c.Z, {
                  className: (0, N.A)(
                    h().GraphicalAssetsTabs,
                    ce && h().GraphicalAssetsTabsVertical,
                    ze && h().ChecklistMode,
                    Oe && h().Sticky,
                    n,
                  ),
                  navEntryPreferPosition: oe
                    ? v.iU.PREFERRED_CHILD
                    : v.iU.FIRST,
                  children: p.map((F, Ae) =>
                    (0, t.jsx)(
                      P,
                      {
                        tab: F,
                        OnTabClick: Ie,
                        classNameTab: q,
                        focusRingHasBorderRadius: ie,
                        active: F.key === se.key,
                        preferredFocus: We === F.key,
                      },
                      F.key,
                    ),
                  ),
                }),
                se && (0, t.jsx)(c.Z, { className: Se, children: se.contents }),
              ],
            });
          return ce
            ? (0, t.jsx)(c.Z, {
                className: (0, N.A)(h().GraphicalAssetsTabsLayoutVertical),
                children: ue,
              })
            : ue;
        }
        function U(V) {
          const {
            statusType: d = "success",
            bShowStatusBox: E,
            children: w,
          } = V;
          let f = "";
          return (
            d === "success"
              ? (f = h().StatusSuccess)
              : d === "danger"
                ? (f = h().StatusDanger)
                : d === "caution"
                  ? (f = h().StatusCaution)
                  : d === "info"
                    ? (f = h().StatusInfo)
                    : d === "incomplete" && (f = h().StatusIncomplete),
            (0, t.jsx)("div", {
              className: (0, N.A)(
                h().GraphicalAssetStatus,
                f,
                E ? h().checklistBox : "",
              ),
              children: w,
            })
          );
        }
        function P(V) {
          const {
            tab: d,
            OnTabClick: E,
            classNameTab: w,
            focusRingHasBorderRadius: f,
            active: u,
            preferredFocus: n,
          } = V;
          return (0, t.jsx)(o.e7, {
            condition: !!(d.statusToolTip || d.tooltip),
            wrap: (q) =>
              (0, t.jsx)(M.he, {
                toolTipContent: d.statusToolTip || d.tooltip,
                children: q,
              }),
            children: (0, t.jsxs)(c.Z, {
              className: (0, N.A)(
                h().GraphicalAssetsTab,
                u && h().Active,
                u && "ActiveTab",
                w,
              ),
              onActivate: () => E(d),
              preferredFocus: n,
              focusRingHasBorderRadius: f,
              children: [
                !!d.vo_warning &&
                  (0, t.jsx)(M.he, {
                    toolTipContent: d.vo_warning,
                    children: (0, t.jsx)("div", {
                      className: h().VOWarning,
                      children: (0, W.we)("#EventEditor_VOWarning"),
                    }),
                  }),
                d.status,
                d.name,
              ],
            }),
          });
        }
      },
      84670: (Y) => {
        Y.exports = {
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
      38878: (Y) => {
        Y.exports = {
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
      24089: (Y) => {
        Y.exports = { TextEntry: "_1vE-LsK6l_D_5yjbywZV1p" };
      },
      98580: (Y) => {
        Y.exports = {
          BottomButtons: "mdeaaJPcT9kJyTGau_Zr7",
          SanctionForm: "_33cLeNjYsBEX2T0-B9gc5G",
          OneColumn: "_2LTDR9F3yb80ONcUPcDxo1",
          QuickReasons: "_1VdNqwseupCqI68H-YwwZO",
          MessageTextArea: "_3IWpl3mfH9OFkiqMIh7WtY",
          ErrorMessage: "_3_dhawEOV-fztaXEftlfxJ",
        };
      },
      1990: (Y) => {
        Y.exports = {
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
