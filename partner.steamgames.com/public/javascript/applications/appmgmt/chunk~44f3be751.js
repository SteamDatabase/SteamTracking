/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [867],
  {
    54697: (e) => {
      e.exports = {
        EditorCtn: "_1e7R1v8JgXJX3ldR60tdgy",
        HeaderCtn: "_8kQzgEw9baCkU0Ind_gdU",
        Row: "_3rKNAI3Je6QeUIPturHjCZ",
      };
    },
    35248: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => K, G: () => $ });
      var n = r(90626),
        s = r(54697),
        i = r.n(s),
        a = r(24484),
        o = r(45737),
        l = r.n(o),
        c = r(7068),
        m = r(95695),
        u = r.n(m),
        d = r(61859),
        p = r(30470),
        _ = r(52038),
        B = r(738),
        g = r(56011),
        y = r(78395),
        b = r(44165),
        w = r(99637),
        S = r(26408),
        M = r(41735),
        f = r.n(M),
        z = r(31380),
        v = r(68797),
        E = r(56545),
        I = r(80613),
        R = r(89068);
      const T = I.Message;
      class N extends T {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.appid || R.Sg(N.M()),
            T.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  appid: { n: 1, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                  partner_notes: {
                    n: 2,
                    br: R.qM.readString,
                    bw: R.gp.writeString,
                  },
                  admin_notes: {
                    n: 3,
                    br: R.qM.readString,
                    bw: R.gp.writeString,
                  },
                  partner_readonly_notes: {
                    n: 4,
                    br: R.qM.readString,
                    bw: R.gp.writeString,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = R.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new I.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new I.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new I.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppNotes_CreateNotes_Request";
        }
      }
      class P extends T {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), T.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new P();
        }
        static deserializeBinary(e) {
          let t = new I.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new I.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new I.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppNotes_CreateNotes_Response";
        }
      }
      class h extends T {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.appid || R.Sg(h.M()),
            T.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  appid: { n: 1, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                  partner_notes: {
                    n: 2,
                    br: R.qM.readString,
                    bw: R.gp.writeString,
                  },
                  admin_notes: {
                    n: 3,
                    br: R.qM.readString,
                    bw: R.gp.writeString,
                  },
                  partner_readonly_notes: {
                    n: 4,
                    br: R.qM.readString,
                    bw: R.gp.writeString,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = R.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new I.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new I.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new I.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppNotes_UpdateNotes_Request";
        }
      }
      class C extends T {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), T.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new C();
        }
        static deserializeBinary(e) {
          let t = new I.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new I.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new I.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppNotes_UpdateNotes_Response";
        }
      }
      class j extends T {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.appid || R.Sg(j.M()),
            T.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  appid: { n: 1, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = R.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new I.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new I.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new I.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppNotes_GetNotes_Request";
        }
      }
      class D extends T {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.partner_notes || R.Sg(D.M()),
            T.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  partner_notes: {
                    n: 2,
                    br: R.qM.readString,
                    bw: R.gp.writeString,
                  },
                  admin_notes: {
                    n: 3,
                    br: R.qM.readString,
                    bw: R.gp.writeString,
                  },
                  partner_readonly_notes: {
                    n: 4,
                    br: R.qM.readString,
                    bw: R.gp.writeString,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = R.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new I.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new I.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new I.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppNotes_GetNotes_Response";
        }
      }
      class W extends T {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.appids || R.Sg(W.M()),
            T.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: R.qM.readUint32,
                    pbr: R.qM.readPackedUint32,
                    bw: R.gp.writeRepeatedUint32,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = R.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new I.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new I.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new I.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppNotes_GetMultipleNotes_Request";
        }
      }
      class O extends T {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.notes || R.Sg(O.M()),
            T.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: { notes: { n: 1, c: F, r: !0, q: !0 } },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = R.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new I.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new I.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new I.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppNotes_GetMultipleNotes_Response";
        }
      }
      class F extends T {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.appid || R.Sg(F.M()),
            T.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  appid: { n: 1, br: R.qM.readUint32, bw: R.gp.writeUint32 },
                  partner_notes: {
                    n: 2,
                    br: R.qM.readString,
                    bw: R.gp.writeString,
                  },
                  admin_notes: {
                    n: 3,
                    br: R.qM.readString,
                    bw: R.gp.writeString,
                  },
                  partner_readonly_notes: {
                    n: 4,
                    br: R.qM.readString,
                    bw: R.gp.writeString,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = R.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return R.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return R.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new I.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return R.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new I.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          R.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new I.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppNotes_GetMultipleNotes_Response_Container";
        }
      }
      var A;
      !(function (e) {
        (e.CreateNotes = function (e, t) {
          return e.SendMsg(
            "PartnerAppNotes.CreateNotes#1",
            (0, E.I8)(N, t),
            P,
            { ePrivilege: 7 },
          );
        }),
          (e.UpdateNotes = function (e, t) {
            return e.SendMsg(
              "PartnerAppNotes.UpdateNotes#1",
              (0, E.I8)(h, t),
              C,
              { ePrivilege: 7 },
            );
          }),
          (e.GetNotes = function (e, t) {
            return e.SendMsg("PartnerAppNotes.GetNotes#1", (0, E.I8)(j, t), D, {
              bConstMethod: !0,
              ePrivilege: 7,
            });
          }),
          (e.GetMultipleNotes = function (e, t) {
            return e.SendMsg(
              "PartnerAppNotes.GetMultipleNotes#1",
              (0, E.I8)(W, t),
              O,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          });
      })(A || (A = {}));
      var U = r(72963),
        q = r(96001);
      function k(e) {
        const t = (function (e) {
          const t = (0, q.a)(),
            r = (0, z.useQuery)(
              ["appnotes", e],
              async () => {
                const r = E.w.Init(j);
                r.Body().set_appid(e);
                return (await A.GetNotes(t, r)).Body().toObject();
              },
              { enabled: Boolean(e) },
            );
          return n.useMemo(() => r?.data, [e, r.isLoading]);
        })(e);
        return t
          ? t.partner_readonly_notes
            ? JSON.parse(t.partner_readonly_notes)
            : { appid: e, version: 1 }
          : void 0;
      }
      function x(e, t, r, n) {
        return (0, z.useMutation)(
          async (n) => {
            const s = `${p.TS.PARTNER_BASE_URL}seasonpass/ajaxsavemilestone`,
              i = new FormData();
            i.append("sessionid", p.TS.SESSIONID),
              i.append("parentappid", "" + e),
              0 == r
                ? i.append("dlcappid", "" + t)
                : i.append("packageid", "" + t),
              i.append("version", "" + n.readonly_notes_version),
              i.append("description", n.description),
              i.append("delivery_rtime", "" + n.delivery_date),
              n.milestoneid && i.append("milestoneid", "" + n.milestoneid);
            const a = await f().post(s, i);
            if (200 == a?.status && 1 == a.data?.success)
              return (o = e), U.L.invalidateQueries(["appnotes", o]), !0;
            var o;
            const l = (0, v.H)(a);
            throw (
              (console.error(
                "usePartnerSetMilestone failed to save " + l.strErrorMsg,
                l,
                a,
              ),
              "usePartnerSetMilestone failed to save " + l.strErrorMsg)
            );
          },
          {
            onError: (e) => {
              n.fnSetError(!0),
                n.fnSetStrError((0, d.we)("#OptIn_Appeals_Dialog_Failed"));
            },
            onSuccess: () => n.fnSetSuccess(!0),
          },
        );
      }
      var G = r(71298),
        L = r(22797),
        H = r(8905),
        J = r(91675);
      function K(e) {
        const t = (function () {
          const [e] = (0, n.useState)(() =>
            (0, a.Tc)("season_passid", "application_config"),
          );
          return e;
        })();
        return n.createElement(
          "div",
          { className: i().EditorCtn },
          n.createElement(V, { seasonPassID: t }),
          n.createElement(Q, { seasonPassID: t }),
        );
      }
      function $(e) {
        const { seasonPassID: t } = e;
        return n.createElement(
          "div",
          { className: i().EditorCtn },
          n.createElement(V, { seasonPassID: t }),
          n.createElement(Q, { seasonPassID: t }),
        );
      }
      function Q(e) {
        const { seasonPassID: t } = e,
          r = (function (e) {
            const t = k(e.parentAppID);
            return (0, n.useMemo)(() => {
              if (t) {
                const r = t.milestoneTracking?.find(
                  (t) =>
                    (0 == t.storeItemType && t.id == e.dlcAppID) ||
                    (1 == t.storeItemType && t.id == e.packageID),
                );
                return r
                  ? { version: t.version, oMilestoneTracking: r }
                  : {
                      version: t.version,
                      oMilestoneTracking: {
                        id: e.dlcAppID ? e.dlcAppID : e.packageID,
                        storeItemType: e.dlcAppID ? 0 : 1,
                        commitments: [],
                      },
                    };
              }
              return { version: null };
            }, [t, e]);
          })(t);
        return null == r.version
          ? n.createElement(L.t, {
              string: (0, d.we)("#Loading"),
              size: "medium",
            })
          : n.createElement(
              "div",
              null,
              n.createElement(
                c.JU,
                null,
                (0, d.we)("#SeasonPass_Milestone_table"),
              ),
              n.createElement(
                "table",
                null,
                n.createElement(
                  "thead",
                  null,
                  n.createElement(
                    "tr",
                    null,
                    n.createElement(
                      "th",
                      null,
                      (0, d.we)("#SeasonPass_Milestone_col_complete"),
                    ),
                    n.createElement(
                      "th",
                      null,
                      (0, d.we)("#SeasonPass_Miletone_desc"),
                    ),
                    n.createElement(
                      "th",
                      null,
                      (0, d.we)("#SeasonPass_Delivery"),
                    ),
                    n.createElement(
                      "th",
                      null,
                      (0, d.we)("#SeasonPass_Miletone_Customer_desc"),
                    ),
                    n.createElement(
                      "th",
                      null,
                      (0, d.we)("#SeasonPass_Miletone_date_display"),
                    ),
                    n.createElement(
                      "th",
                      null,
                      (0, d.we)("#SeasonPass_Milestone_col_whom"),
                    ),
                    n.createElement(
                      "th",
                      null,
                      (0, d.we)("#SeasonPass_Milestone_col_lastupdate"),
                    ),
                    n.createElement("th", null),
                  ),
                ),
                n.createElement(
                  "tbody",
                  null,
                  r.oMilestoneTracking?.commitments?.map((e) =>
                    n.createElement(X, {
                      key: "row" + e.milestoneID,
                      seasonPassID: t,
                      record: e,
                      readonly_notes_version: r.version,
                    }),
                  ),
                ),
              ),
            );
      }
      function X(e) {
        const { seasonPassID: t, record: r, readonly_notes_version: s } = e;
        return n.createElement(
          "tr",
          null,
          n.createElement("td", null),
          " ",
          n.createElement("td", null, r.current.description),
          n.createElement("td", null, (0, d.TW)(r.current.expectedDelivery)),
          n.createElement("td", null),
          n.createElement("td", null),
          n.createElement(
            "td",
            null,
            n.createElement(H.p, { accountID: r.current.accountid }),
          ),
          n.createElement(
            "td",
            null,
            (0, d.TW)(r.current.submissionTime),
            " @ ",
            (0, J.KC)(r.current.submissionTime),
          ),
          n.createElement(
            "td",
            null,
            n.createElement(
              c.$n,
              {
                onClick: (e) =>
                  (0, B.pg)(
                    n.createElement(Z, {
                      seasonPassID: t,
                      readonly_notes_version: s,
                      milestoneID: r.milestoneID,
                      mileStone: r.current,
                    }),
                    (0, g.uX)(e),
                  ),
              },
              (0, d.we)("#Button_Edit"),
            ),
          ),
        );
      }
      function V(e) {
        const { seasonPassID: t } = e;
        return n.createElement(
          "div",
          { className: i().EditorCtn },
          n.createElement(
            "div",
            { className: i().HeaderCtn },
            n.createElement(
              "div",
              { className: l().ColumnCtn },
              n.createElement(
                "div",
                { className: l().LeftCol },
                n.createElement(
                  "div",
                  { className: l().ColHeader },
                  (0, d.we)(
                    "#SeasonPass_Title",
                    t.seasonPassItemName,
                    (0, d.we)(
                      t.dlcAppID ? "#SeasonPass_AppID" : "SeasonPass_PackageID",
                      t.dlcAppID || t.packageID,
                    ),
                  ),
                ),
                n.createElement(
                  "div",
                  { className: l().SectionCtn },
                  (0, d.we)("#SeasonPass_Desc"),
                ),
              ),
              n.createElement(
                "div",
                { className: l().RightCol },
                n.createElement(
                  "div",
                  { className: l().ColHeader },
                  n.createElement(
                    "a",
                    {
                      href: `${p.TS.PARTNER_BASE_URL}doc/features/seasonpass`,
                      className: (0, _.A)(l().Button, u().Button),
                      target: "_blank",
                    },
                    (0, d.we)("#AssetRequest_General_SeeDocs"),
                  ),
                ),
                n.createElement(
                  "div",
                  { className: l().SectionCtn },
                  n.createElement(
                    c.jn,
                    {
                      onClick: (e) =>
                        (0, B.pg)(
                          n.createElement(Z, {
                            seasonPassID: t,
                            readonly_notes_version: 1,
                          }),
                          (0, g.uX)(e),
                        ),
                    },
                    (0, d.we)("#SeasonPass_ItemNew"),
                  ),
                  n.createElement(
                    "div",
                    null,
                    (0, d.we)("#SeasonPass_ItemNew_desc"),
                  ),
                ),
              ),
            ),
          ),
        );
      }
      function Z(e) {
        const {
            closeModal: t,
            mileStone: r,
            seasonPassID: s,
            milestoneID: i,
            readonly_notes_version: a,
          } = e,
          o = (0, b.f1)(),
          [l, m] = (0, n.useState)(r?.description || ""),
          [u, p] = (0, n.useState)(r?.expectedDelivery || o + 86400),
          _ = (0, d.we)(r ? "#SeasonPass_Update" : "#SeasonPass_Create"),
          B = (0, G.vs)(),
          g = x(
            s.parentAppID,
            s.dlcAppID || s.packageID,
            s.dlcAppID ? 0 : 1,
            B,
          );
        return B.bLoading
          ? n.createElement(G.Hh, {
              state: B,
              strDialogTitle: _,
              closeModal: t,
            })
          : n.createElement(
              y.o0,
              {
                strTitle: _,
                strDescription: (0, d.we)("#SeasonPass_Create_desc"),
                bAllowFullSize: !0,
                bDisableBackgroundDismiss: !0,
                strOKButtonText: n.createElement(
                  n.Fragment,
                  null,
                  (0, d.we)("#Button_Submit"),
                  " ",
                  n.createElement(S.o, {
                    tooltip: (0, d.we)("#SeasonPass_Submit_ttip"),
                  }),
                ),
                onOK: () => {
                  B.fnSetLoading(!0),
                    g.mutate({
                      milestoneid: i,
                      description: l,
                      delivery_date: u,
                      readonly_notes_version: a,
                    });
                },
                bOKDisabled: l.length < 3 || u < o,
                onCancel: t,
              },
              n.createElement(
                c.JU,
                null,
                (0, d.we)("#SeasonPass_Delivery"),
                n.createElement(S.o, {
                  tooltip: (0, d.we)("#SeasonPass_Delivery_ttip"),
                }),
              ),
              n.createElement(w.K, {
                nEarliestTime: o,
                fnGetTimeToUpdate: () => u,
                fnSetTimeToUpdate: p,
                fnIsValidDateTime: () => o < u,
              }),
              n.createElement(
                c.JU,
                null,
                (0, d.we)("#SeasonPass_Miletone_desc"),
              ),
              n.createElement("textarea", {
                cols: 120,
                rows: 10,
                onChange: (e) => m(e.currentTarget.value),
                value: l,
                autoFocus: !0,
              }),
            );
      }
    },
  },
]);
