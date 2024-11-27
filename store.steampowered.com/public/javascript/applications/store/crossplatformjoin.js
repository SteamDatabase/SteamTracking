/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5068],
  {
    9054: (e) => {
      e.exports = {
        JoinApp: "_27LPt-4kZ0Y0j9DNG19rsN",
        SessionInfoCtr: "z4yEIu1D7pKZ9BNib5lIq",
        SectionCtr: "_3pJz3d4_3A43Jh7D44SUlm",
        JoinSessionButton: "oFMSJB00CTFnfT-758yts",
        SessionList: "_25Du_Z4_ooVhqUEkiYSqxt",
        Session: "zNbRzxK68u4bzfA0OyV0I",
        MachineName: "EOLg7Cdie5CHJUEGL6-CB",
        OsName: "S5bNzjo6KMcWWn6Ms9QuY",
        AvailableSessionsText: "_1NtbtSr3XzLpXPC3ugtzr9",
        Header: "_239fSrbkMDKdFJQsaOV8MW",
        Explanation: "_1isyHy9nKabM8wUFKUu-lm",
      };
    },
    49893: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => _e });
      var i = r(90626),
        n = r(9054),
        a = r.n(n),
        s = r(92757),
        l = r(23809),
        o = r(41762),
        c = r(58632),
        m = r.n(c),
        u = r(20194),
        d = r(56545),
        B = r(37403),
        b = r(30470),
        g = r(22837);
      let p;
      const _ = 864e5;
      function y(e) {
        return `appinfo_${e}_${b.TS.LANGUAGE}`;
      }
      function w(e) {
        return Boolean(e && Date.now() - e.timeCached < _);
      }
      function f(e) {
        const t = (0, l.KV)(),
          r = (0, l.rX)();
        return (0, u.I)({
          queryKey: ["appinfo", e],
          queryFn: async () =>
            (function (e, t) {
              return (
                p ||
                  (p = new (m())(
                    async (r) => {
                      const i = new Map();
                      (await Promise.all(r.map((e) => t.GetObject(y(e)))))
                        .filter(w)
                        .forEach(({ value: e }) => i.set(e.appid, e));
                      const n = r.slice().filter((e) => !i.has(e));
                      if (n.length) {
                        const r = d.w.Init(B._z);
                        r.Body().set_language((0, g.sf)(b.TS.LANGUAGE)),
                          r.Body().set_appids(n);
                        const a = await B.BE.GetApps(e, r);
                        if (1 != a.GetEResult()) throw a.GetErrorMessage();
                        a.Body()
                          .toObject()
                          .apps.forEach((e) => {
                            t.StoreObject(y(e.appid), {
                              timeCached: Date.now(),
                              value: e,
                            }),
                              i.set(e.appid, e);
                          });
                      }
                      return r.map((e) => i.get(e));
                    },
                    { cache: !1 },
                  )),
                p
              );
            })(t, r).load(e),
          staleTime: _,
          enabled: !!e,
        }).data;
      }
      var M = r(68950),
        z = r(80613),
        S = r(89068);
      const R = z.Message;
      class C extends R {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.steamid || S.Sg(C.M()),
            R.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  steamid: {
                    n: 1,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  accept: { n: 2, br: S.qM.readBool, bw: S.gp.writeBool },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = S.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Request";
        }
      }
      class h extends R {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), R.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new h();
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Response";
        }
      }
      class v extends R {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.steamid || S.Sg(v.M()),
            R.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  steamid: {
                    n: 1,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  rtime_oldest_date: {
                    n: 2,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = S.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Request";
        }
      }
      class j extends R {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.snippets || S.Sg(j.M()),
            R.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: { snippets: { n: 1, c: q, r: !0, q: !0 } },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = S.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Response";
        }
      }
      class q extends R {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.gid || S.Sg(q.M()),
            R.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  gid: {
                    n: 1,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  announcement_gid: {
                    n: 2,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  hidden: { n: 3, br: S.qM.readBool, bw: S.gp.writeBool },
                  published: { n: 4, br: S.qM.readBool, bw: S.gp.writeBool },
                  rtime32_start_time: {
                    n: 5,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  event_name: {
                    n: 6,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  event_type: { n: 7, br: S.qM.readEnum, bw: S.gp.writeEnum },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = S.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData";
        }
      }
      class W extends R {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.requests || S.Sg(W.M()),
            R.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  requests: { n: 1, c: U, r: !0, q: !0 },
                  cursor: { n: 2, br: S.qM.readString, bw: S.gp.writeString },
                  count: {
                    n: 3,
                    d: 100,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = S.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Request";
        }
      }
      class U extends R {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.appid || S.Sg(U.M()),
            R.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  appid: { n: 1, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  start_build_id: {
                    n: 2,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  end_build_id: {
                    n: 3,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  branch: { n: 4, br: S.qM.readString, bw: S.gp.writeString },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = S.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange";
        }
      }
      class I extends R {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.matches || S.Sg(I.M()),
            R.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  matches: { n: 1, c: O, r: !0, q: !0 },
                  num_total_results: {
                    n: 2,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  next_cursor: {
                    n: 3,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = S.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response";
        }
      }
      class O extends R {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.appid || S.Sg(O.M()),
            R.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  appid: { n: 1, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  build_id: { n: 2, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  branch: { n: 3, br: S.qM.readString, bw: S.gp.writeString },
                  clan_event_gid: {
                    n: 4,
                    br: S.qM.readFixed64String,
                    bw: S.gp.writeFixed64String,
                  },
                  clan_account_id: {
                    n: 5,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = S.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc";
        }
      }
      var T;
      !(function (e) {
        (e.RespondToClanInvite = function (e, t) {
          return e.SendMsg("Clan.RespondToClanInvite#1", (0, d.I8)(C, t), h, {
            ePrivilege: 1,
          });
        }),
          (e.GetDraftAndRecentPartnerEventSnippet = function (e, t) {
            return e.SendMsg(
              "Clan.GetDraftAndRecentPartnerEventSnippet#1",
              (0, d.I8)(v, t),
              j,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPartnerEventsByBuildIDRange = function (e, t) {
            return e.SendMsg(
              "Clan.GetPartnerEventsByBuildIDRange#1",
              (0, d.I8)(W, t),
              I,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          });
      })(T || (T = {}));
      const F = z.Message;
      class E extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.client_instanceid || S.Sg(E.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = S.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientLogonInfo_Request";
        }
      }
      class N extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.protocol_version || S.Sg(N.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  protocol_version: {
                    n: 1,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  os: { n: 2, br: S.qM.readString, bw: S.gp.writeString },
                  machine_name: {
                    n: 3,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = S.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientLogonInfo_Response";
        }
      }
      class A extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), F.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new A();
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Request";
        }
      }
      class G extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.sessions || S.Sg(G.M()),
            F.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  sessions: { n: 1, c: x, r: !0, q: !0 },
                  refetch_interval_sec: {
                    n: 2,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = S.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Response";
        }
      }
      class x extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.client_instanceid || S.Sg(x.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  protocol_version: {
                    n: 2,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  os_name: { n: 3, br: S.qM.readString, bw: S.gp.writeString },
                  machine_name: {
                    n: 4,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  os_type: { n: 5, br: S.qM.readInt32, bw: S.gp.writeInt32 },
                  device_type: {
                    n: 6,
                    br: S.qM.readInt32,
                    bw: S.gp.writeInt32,
                  },
                  realm: { n: 7, br: S.qM.readInt32, bw: S.gp.writeInt32 },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = S.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Response_Session";
        }
      }
      class L extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.client_instanceid || S.Sg(L.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = S.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientInfo_Request";
        }
      }
      class D extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.package_version || S.Sg(D.M()),
            F.initialize(this, e, 0, -1, [7, 10], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  package_version: {
                    n: 1,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  os: { n: 2, br: S.qM.readString, bw: S.gp.writeString },
                  machine_name: {
                    n: 3,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  ip_public: {
                    n: 4,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  ip_private: {
                    n: 5,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  bytes_available: {
                    n: 6,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  running_games: { n: 7, c: P, r: !0, q: !0 },
                  protocol_version: {
                    n: 8,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  clientcomm_version: {
                    n: 9,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  local_users: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: S.qM.readUint32,
                    pbr: S.qM.readPackedUint32,
                    bw: S.gp.writeRepeatedUint32,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = S.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_ClientData";
        }
      }
      class P extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.appid || S.Sg(P.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  appid: { n: 1, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  extra_info: {
                    n: 2,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                  time_running_sec: {
                    n: 3,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = S.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_ClientData_RunningGames";
        }
      }
      class k extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.client_info || S.Sg(k.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = { proto: k, fields: { client_info: { n: 1, c: D } } }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = S.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientInfo_Response";
        }
      }
      class $ extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.fields || S.Sg($.M()),
            F.initialize(this, e, 0, -1, [6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  fields: { n: 1, br: S.qM.readString, bw: S.gp.writeString },
                  filters: { n: 2, br: S.qM.readString, bw: S.gp.writeString },
                  client_instanceid: {
                    n: 3,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  include_client_info: {
                    n: 4,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                  language: { n: 5, br: S.qM.readString, bw: S.gp.writeString },
                  filter_appids: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: S.qM.readUint32,
                    pbr: S.qM.readPackedUint32,
                    bw: S.gp.writeRepeatedUint32,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = S.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT($.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Request";
        }
      }
      class J extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.bytes_available || S.Sg(J.M()),
            F.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  bytes_available: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  apps: { n: 2, c: K, r: !0, q: !0 },
                  client_info: { n: 3, c: D },
                  refetch_interval_sec_full: {
                    n: 4,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  refetch_interval_sec_changing: {
                    n: 5,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  refetch_interval_sec_updating: {
                    n: 6,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = S.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response";
        }
      }
      class K extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.appid || S.Sg(K.M()),
            F.initialize(this, e, 0, -1, [17], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  appid: { n: 1, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  app: { n: 2, br: S.qM.readString, bw: S.gp.writeString },
                  category: { n: 3, br: S.qM.readString, bw: S.gp.writeString },
                  app_type: { n: 4, br: S.qM.readString, bw: S.gp.writeString },
                  num_downloading: {
                    n: 8,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  num_paused: {
                    n: 10,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  bytes_download_rate: {
                    n: 11,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  bytes_downloaded: {
                    n: 12,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  bytes_to_download: {
                    n: 13,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  dlcs: { n: 17, c: H, r: !0, q: !0 },
                  favorite: { n: 18, br: S.qM.readBool, bw: S.gp.writeBool },
                  auto_update: { n: 19, br: S.qM.readBool, bw: S.gp.writeBool },
                  installed: { n: 20, br: S.qM.readBool, bw: S.gp.writeBool },
                  download_paused: {
                    n: 21,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                  changing: { n: 22, br: S.qM.readBool, bw: S.gp.writeBool },
                  available_on_platform: {
                    n: 23,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                  bytes_staged: {
                    n: 24,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  bytes_to_stage: {
                    n: 25,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  bytes_required: {
                    n: 26,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  source_buildid: {
                    n: 27,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  target_buildid: {
                    n: 28,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  estimated_seconds_remaining: {
                    n: 29,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  queue_position: {
                    n: 30,
                    d: -1,
                    br: S.qM.readInt32,
                    bw: S.gp.writeInt32,
                  },
                  uninstalling: {
                    n: 31,
                    br: S.qM.readBool,
                    bw: S.gp.writeBool,
                  },
                  rt_time_scheduled: {
                    n: 32,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  running: { n: 33, br: S.qM.readBool, bw: S.gp.writeBool },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = S.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response_AppData";
        }
      }
      class H extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.appid || S.Sg(H.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  appid: { n: 1, br: S.qM.readUint32, bw: S.gp.writeUint32 },
                  app: { n: 2, br: S.qM.readString, bw: S.gp.writeString },
                  installed: {
                    n: 3,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = S.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response_AppData_DLCData";
        }
      }
      class V extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.appid || S.Sg(V.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  appid: {
                    n: 1,
                    q: !0,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  client_instanceid: {
                    n: 2,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = S.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_InstallClientApp_Request";
        }
      }
      class Y extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), F.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Y();
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_InstallClientApp_Response";
        }
      }
      class X extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.appid || S.Sg(X.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  appid: {
                    n: 1,
                    q: !0,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  client_instanceid: {
                    n: 2,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = S.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_UninstallClientApp_Request";
        }
      }
      class Z extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), F.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Z();
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_UninstallClientApp_Response";
        }
      }
      class Q extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.appid || S.Sg(Q.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  appid: {
                    n: 1,
                    q: !0,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  action: {
                    n: 2,
                    q: !0,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  client_instanceid: {
                    n: 3,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = S.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_SetClientAppUpdateState_Request";
        }
      }
      class ee extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.client_instanceid || S.Sg(ee.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  appid: {
                    n: 2,
                    q: !0,
                    br: S.qM.readUint32,
                    bw: S.gp.writeUint32,
                  },
                  query_params: {
                    n: 3,
                    br: S.qM.readString,
                    bw: S.gp.writeString,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = S.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_LaunchClientApp_Request";
        }
      }
      class te extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), F.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new te();
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_LaunchClientApp_Response";
        }
      }
      class re extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), F.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new re();
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_SetClientAppUpdateState_Response";
        }
      }
      class ie extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.client_instanceid || S.Sg(ie.M()),
            F.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: S.qM.readUint64String,
                    bw: S.gp.writeUint64String,
                  },
                  enable: { n: 2, br: S.qM.readBool, bw: S.gp.writeBool },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = S.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return S.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return S.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return S.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          S.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_EnableOrDisableDownloads_Request";
        }
      }
      class ne extends F {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), F.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ne();
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_EnableOrDisableDownloads_Response";
        }
      }
      var ae;
      !(function (e) {
        (e.GetClientLogonInfo = function (e, t) {
          return e.SendMsg(
            "ClientComm.GetClientLogonInfo#1",
            (0, d.I8)(E, t),
            N,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetAllClientLogonInfo = function (e, t) {
            return e.SendMsg(
              "ClientComm.GetAllClientLogonInfo#1",
              (0, d.I8)(A, t),
              G,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetClientInfo = function (e, t) {
            return e.SendMsg("ClientComm.GetClientInfo#1", (0, d.I8)(L, t), k, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetClientAppList = function (e, t) {
            return e.SendMsg(
              "ClientComm.GetClientAppList#1",
              (0, d.I8)($, t),
              J,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.InstallClientApp = function (e, t) {
            return e.SendMsg(
              "ClientComm.InstallClientApp#1",
              (0, d.I8)(V, t),
              Y,
              { ePrivilege: 1 },
            );
          }),
          (e.UninstallClientApp = function (e, t) {
            return e.SendMsg(
              "ClientComm.UninstallClientApp#1",
              (0, d.I8)(X, t),
              Z,
              { ePrivilege: 1 },
            );
          }),
          (e.LaunchClientApp = function (e, t) {
            return e.SendMsg(
              "ClientComm.LaunchClientApp#1",
              (0, d.I8)(ee, t),
              te,
              { ePrivilege: 1 },
            );
          }),
          (e.SetClientAppUpdateState = function (e, t) {
            return e.SendMsg(
              "ClientComm.SetClientAppUpdateState#1",
              (0, d.I8)(Q, t),
              re,
              { ePrivilege: 1 },
            );
          }),
          (e.EnableOrDisableDownloads = function (e, t) {
            return e.SendMsg(
              "ClientComm.EnableOrDisableDownloads#1",
              (0, d.I8)(ie, t),
              ne,
              { ePrivilege: 1 },
            );
          });
      })(ae || (ae = {}));
      const se = "RemoteDownload_OnlineClient";
      Error;
      function le() {
        const e = (0, l.KV)(),
          t = (0, M.LH)();
        return (0, u.I)({
          queryKey: [se, t],
          queryFn: async () => {
            const t = d.w.Init(A),
              r = await ae.GetAllClientLogonInfo(e, t);
            if (1 !== r.GetEResult())
              throw (
                (console.error(
                  "Received error from GetAllClientLogonInfo",
                  r.GetEResult(),
                  r.Hdr().transport_error(),
                ),
                new Error(
                  `Error from GetAllClientLogonInfo: ${r.GetEResult()}`,
                ))
              );
            const i = [];
            for (const e of r.Body().sessions())
              e.device_type() !== g.zm.k_EGamingDeviceType_Unknown &&
                i.push(e.toObject());
            return {
              sessions: i,
              refetchInterval: r.Body().refetch_interval_sec() || 300,
            };
          },
          staleTime: 3e5,
          refetchInterval: (e) => 1e3 * (e.state.data?.refetchInterval || 300),
        });
      }
      var oe = r(61859),
        ce = r(82477),
        me = r(33737),
        ue = r(22797),
        de = r(78327);
      function Be(e) {
        return `?joinsessionid=${e}`;
      }
      function be(e) {
        return i.createElement(
          me.$n,
          {
            className: a().JoinSessionButton,
            onClick: () =>
              (window.location.href =
                `steam://launch/${e.steamAppId}` + Be(e.sessionID)),
          },
          e.children,
        );
      }
      function ge(e) {
        const t = le(),
          r = (0, l.KV)();
        return t.isSuccess
          ? t.data?.sessions?.length > 0
            ? i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  me.JU,
                  { className: a().AvailableSessionsText },
                  "Available Steam Sessions:",
                ),
                i.createElement(
                  "div",
                  { className: a().SessionList },
                  t.data?.sessions.map((t) =>
                    i.createElement(
                      "div",
                      { className: a().Session, key: t.client_instanceid },
                      i.createElement(
                        "div",
                        { className: a().MachineName },
                        t.machine_name,
                      ),
                      i.createElement(
                        "div",
                        { className: a().OsName },
                        t.os_name,
                      ),
                      i.createElement(
                        me.$n,
                        {
                          className: a().JoinSessionButton,
                          onClick: () =>
                            (async function (e, t, r, i) {
                              const n = d.w.Init(ee);
                              n.Body().set_appid(r),
                                n.Body().set_client_instanceid(t),
                                n.Body().set_query_params(i);
                              const a = await ae.LaunchClientApp(e, n);
                              if (1 !== a.GetEResult())
                                throw (
                                  (console.error(
                                    "Received error from LaunchClientApp",
                                    a.GetEResult(),
                                    a.Hdr().transport_error(),
                                  ),
                                  new Error(
                                    `Error from LaunchClientApp: ${a.GetEResult()}`,
                                  ))
                                );
                            })(
                              r,
                              t.client_instanceid,
                              e.steamAppId,
                              Be(e.sessionID),
                            ),
                        },
                        "Launch Game",
                      ),
                    ),
                  ),
                ),
              )
            : i.createElement(
                "div",
                { className: a().Error },
                "No logged in sessions",
              )
          : t.isFetching || t.isRefetching
            ? i.createElement(ue.t, null)
            : i.createElement(
                "div",
                { className: a().Error },
                "Error ",
                t.error.message,
              );
      }
      function pe(e) {
        const t = f(e.steamAppId);
        return t
          ? i.createElement(
              i.Fragment,
              null,
              i.createElement(
                "div",
                { className: a().Header },
                "Join Game Session",
              ),
              i.createElement(
                "div",
                { className: a().Explanation },
                "You've been invited to join a game! Click below to launch ",
                t.friendly_name || t.name,
                " on Steam and start playing.",
              ),
              i.createElement(
                "div",
                { className: a().SessionInfoCtr },
                i.createElement("iframe", { src: e.sessionLiveDataUrl }),
              ),
              de.TS.IN_CLIENT
                ? i.createElement(
                    "div",
                    { className: a().SectionCtr },
                    i.createElement(be, { ...e }, "Launch Game"),
                  )
                : i.createElement(
                    i.Fragment,
                    null,
                    i.createElement(
                      "div",
                      { className: a().SectionCtr },
                      de.iA.logged_in
                        ? i.createElement(ge, { ...e })
                        : i.createElement(
                            i.Fragment,
                            null,
                            i.createElement(
                              me.JU,
                              null,
                              "Login to join on another device",
                            ),
                            i.createElement(
                              me.$n,
                              { onClick: ce.vg },
                              (0, oe.we)("#Login_SignIn"),
                            ),
                          ),
                    ),
                    !de.TS.IN_MOBILE &&
                      !de.TS.IN_MOBILE_WEBVIEW &&
                      i.createElement(
                        "div",
                        { className: a().SectionCtr },
                        i.createElement(me.JU, null, "Or launch on this PC"),
                        i.createElement(be, { ...e }, "Launch Game Here"),
                      ),
                  ),
            )
          : i.createElement(ue.t, null);
      }
      function _e() {
        const e = (0, de.Tc)("multiplayersession_join", "application_config"),
          t = new URLSearchParams((0, s.zy)().search).get("jws"),
          { header: r, body: n } = (0, o.I3)(t) || { header: {}, body: {} };
        let { steamAppId: l } = n;
        const c = n[e.jws_sessionid_key],
          m = n[e.jws_livedata_url_key];
        return (
          "string" == typeof l && (l = parseInt(l)),
          i.createElement(
            "div",
            { className: a().JoinApp },
            l && m && m
              ? i.createElement(pe, {
                  steamAppId: l,
                  sessionLiveDataUrl: m,
                  sessionID: c,
                })
              : i.createElement("div", null, "Invalid session link"),
            " ",
          )
        );
      }
    },
  },
]);
