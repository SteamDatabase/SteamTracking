/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [13327],
  {
    13327: (e, t, r) => {
      r.d(t, { DT: () => I, Uy: () => j, Pt: () => R, bD: () => S });
      var i,
        a,
        s = r(49419),
        n = r(56545),
        c = r(80613),
        o = r.n(c),
        u = r(89068);
      class l extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.appids || u.Sg(l.M()),
            c.Message.initialize(this, e, 0, -1, [1], null);
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
                    br: u.qM.readInt32,
                    pbr: u.qM.readPackedInt32,
                    bw: u.gp.writeRepeatedInt32,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = u.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateAppList";
        }
      }
      class p extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.appids || u.Sg(p.M()),
            c.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: u.qM.readInt32,
                    pbr: u.qM.readPackedInt32,
                    bw: u.gp.writeRepeatedInt32,
                  },
                  private: { n: 2, br: u.qM.readBool, bw: u.gp.writeBool },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = u.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApps_ToggleAppPrivacy_Request";
        }
      }
      class m extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (o().BinaryReader)(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApps_ToggleAppPrivacy_Response";
        }
      }
      class B extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new B();
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApps_GetPrivateAppList_Request";
        }
      }
      class d extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.private_apps || u.Sg(d.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = { proto: d, fields: { private_apps: { n: 1, c: l } } }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = u.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApps_GetPrivateAppList_Response";
        }
      }
      class y extends c.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.private_apps || u.Sg(y.M()),
            c.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = { proto: y, fields: { private_apps: { n: 1, c: l } } }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = u.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApsClient_NotifyPrivateAppListChanged_Notification";
        }
      }
      !(function (e) {
        (e.ToggleAppPrivacy = function (e, t, r) {
          return e.SendMsg(
            "AccountPrivateApps.ToggleAppPrivacy#1",
            (0, n.I8)(p, t, r),
            m,
            { ePrivilege: 1 },
          );
        }),
          (e.GetPrivateAppList = function (e, t, r) {
            return e.SendMsg(
              "AccountPrivateApps.GetPrivateAppList#1",
              (0, n.I8)(B, t, r),
              d,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(i || (i = {})),
        (function (e) {
          e.NotifyPrivateAppListChangedHandler = {
            name: "AccountPrivateAppsClient.NotifyPrivateAppListChanged#1",
            request: y,
          };
        })(a || (a = {}));
      var g = r(66418),
        f = r(23809),
        b = r(80902),
        z = r(75233),
        M = r(51614);
      function v() {
        return "PrivateApps_" + g.iA.accountid;
      }
      function w() {
        return g.TS.IN_STEAMUI;
      }
      async function _(e, t) {
        try {
          const r = v();
          await e.StoreObject(r, t);
        } catch (e) {
          const t = new Error(
            `WritePrivateAppsToLocalCache failed with result ${e?.result}, ${e?.message}`,
          );
          (0, s.aj)().ReportError(t, { bIncludeMessageInIdentifier: !0 }),
            console.warn(t);
        }
      }
      const A = ["AccountPrivateApps"];
      function h(e) {
        const { transport: t, storage: r, bUseLocalCache: a, bEnabled: s } = e;
        return {
          queryKey: A,
          queryFn: async () => {
            let e;
            a &&
              (e = await (async function (e) {
                const t = v();
                return await e.GetObject(t);
              })(r));
            const s = n.w.Init(B),
              c = await i.GetPrivateAppList(t, s);
            if (!c.BSuccess()) {
              if (e) return new Set(e);
              throw c.GetErrorMessage();
            }
            return (
              a && (await _(r, c.Body().private_apps(!0).appids())),
              new Set(c.Body().private_apps(!0).appids())
            );
          },
          enabled: s,
        };
      }
      function R() {
        const e = (0, f.KV)(),
          t = (0, f.rX)(),
          r = w();
        return (0, b.I)(
          h({
            transport: e,
            storage: t,
            bUseLocalCache: r,
            bEnabled: !!g.iA.accountid,
          }),
        );
      }
      function j(e) {
        const { data: t } = R();
        return !!g.iA.accountid && !!e && (t ? t.has(e) : void 0);
      }
      function S(e) {
        const t = (0, f.KV)(),
          r = (0, z.jE)(),
          i = w(),
          a = (0, f.rX)();
        return (0, M.n)({
          mutationFn: async (r) => P(t, [e], r),
          onSuccess: (t, s) => T(r, [e], s, i ? a : null),
        });
      }
      function I() {
        const e = (0, f.KV)(),
          t = (0, z.jE)(),
          r = w(),
          i = (0, f.rX)();
        return (0, M.n)({
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
        const a = n.w.Init(p);
        a.Body().set_appids(t.slice()), a.Body().set_private(r);
        const s = await i.ToggleAppPrivacy(e, a);
        if (!s.BSuccess()) throw s.GetErrorMessage();
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
