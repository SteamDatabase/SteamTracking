/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8567],
  {
    28567: (e, t, r) => {
      r.d(t, { DT: () => I, Uy: () => j, Pt: () => R, bD: () => S });
      var i,
        a,
        s = r(56545),
        n = r(80613),
        c = r.n(n),
        o = r(89068);
      class u extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.appids || o.Sg(u.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: o.qM.readInt32,
                    pbr: o.qM.readPackedInt32,
                    bw: o.gp.writeRepeatedInt32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = o.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateAppList";
        }
      }
      class l extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.appids || o.Sg(l.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: o.qM.readInt32,
                    pbr: o.qM.readPackedInt32,
                    bw: o.gp.writeRepeatedInt32,
                  },
                  private: { n: 2, br: o.qM.readBool, bw: o.gp.writeBool },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = o.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApps_ToggleAppPrivacy_Request";
        }
      }
      class p extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new p();
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApps_ToggleAppPrivacy_Response";
        }
      }
      class m extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new m();
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApps_GetPrivateAppList_Request";
        }
      }
      class B extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.private_apps || o.Sg(B.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = { proto: B, fields: { private_apps: { n: 1, c: u } } }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = o.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApps_GetPrivateAppList_Response";
        }
      }
      class d extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.private_apps || o.Sg(d.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = { proto: d, fields: { private_apps: { n: 1, c: u } } }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = o.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApsClient_NotifyPrivateAppListChanged_Notification";
        }
      }
      !(function (e) {
        (e.ToggleAppPrivacy = function (e, t) {
          return e.SendMsg(
            "AccountPrivateApps.ToggleAppPrivacy#1",
            (0, s.I8)(l, t),
            p,
            { ePrivilege: 1 },
          );
        }),
          (e.GetPrivateAppList = function (e, t) {
            return e.SendMsg(
              "AccountPrivateApps.GetPrivateAppList#1",
              (0, s.I8)(m, t),
              B,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(i || (i = {})),
        (function (e) {
          e.NotifyPrivateAppListChangedHandler = {
            name: "AccountPrivateAppsClient.NotifyPrivateAppListChanged#1",
            request: d,
          };
        })(a || (a = {}));
      var y = r(20194),
        g = r(75233),
        f = r(51614),
        b = r(23809),
        z = r(8812),
        M = r(30470);
      function v() {
        return "PrivateApps_" + M.iA.accountid;
      }
      function w() {
        return M.TS.IN_STEAMUI;
      }
      async function _(e, t) {
        try {
          const r = v();
          await e.StoreObject(r, t);
        } catch (e) {
          const t = new Error(
            `WritePrivateAppsToLocalCache failed with result ${e?.result}, ${e?.message}`,
          );
          (0, z.aj)().ReportError(t, { bIncludeMessageInIdentifier: !0 }),
            console.warn(t);
        }
      }
      const A = ["AccountPrivateApps"];
      function h(e) {
        const { transport: t, storage: r, bUseLocalCache: a, bEnabled: n } = e;
        return {
          queryKey: A,
          queryFn: async () => {
            let e;
            a &&
              (e = await (async function (e) {
                const t = v();
                return await e.GetObject(t);
              })(r));
            const n = s.w.Init(m),
              c = await i.GetPrivateAppList(t, n);
            if (!c.BSuccess()) {
              if (e) return new Set(e);
              throw c.GetErrorMessage();
            }
            return (
              a && (await _(r, c.Body().private_apps(!0).appids())),
              new Set(c.Body().private_apps(!0).appids())
            );
          },
          enabled: n,
        };
      }
      function R() {
        const e = (0, b.KV)(),
          t = (0, b.rX)(),
          r = w();
        return (0, y.I)(
          h({
            transport: e,
            storage: t,
            bUseLocalCache: r,
            bEnabled: !!M.iA.accountid,
          }),
        );
      }
      function j(e) {
        const { data: t } = R();
        return !!M.iA.accountid && !!e && (t ? t.has(e) : void 0);
      }
      function S(e) {
        const t = (0, b.KV)(),
          r = (0, g.jE)(),
          i = w(),
          a = (0, b.rX)();
        return (0, f.n)({
          mutationFn: async (r) => P(t, [e], r),
          onSuccess: (t, s) => T(r, [e], s, i ? a : null),
        });
      }
      function I() {
        const e = (0, b.KV)(),
          t = (0, g.jE)(),
          r = w(),
          i = (0, b.rX)();
        return (0, f.n)({
          mutationFn: async (t) => {
            const { rgAppIDs: r, bPrivate: i } = t;
            return P(e, r, i);
          },
          onSuccess: (e, a) => {
            const { rgAppIDs: s, bPrivate: n } = a;
            T(t, s, n, r ? i : null);
          },
        });
      }
      async function P(e, t, r) {
        const a = s.w.Init(l);
        a.Body().set_appids(t.slice()), a.Body().set_private(r);
        const n = await i.ToggleAppPrivacy(e, a);
        if (!n.BSuccess()) throw n.GetErrorMessage();
      }
      function T(e, t, r, i) {
        e.setQueryData(A, (e) => {
          if (!e) return;
          const a = new Set(e);
          return (
            t.forEach((e) => {
              r ? a.add(e) : a.delete(e);
            }),
            i && _(i, Array.from(a.values())),
            a
          );
        });
      }
    },
  },
]);
