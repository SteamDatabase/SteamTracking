/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8567],
  {
    28567: (e, t, r) => {
      r.d(t, { DT: () => A, Uy: () => M, Pt: () => v, bD: () => w });
      var i,
        s,
        a = r(56545),
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
      class y extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.private_apps || o.Sg(y.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = { proto: y, fields: { private_apps: { n: 1, c: u } } }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = o.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (c().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (c().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (c().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApsClient_NotifyPrivateAppListChanged_Notification";
        }
      }
      !(function (e) {
        (e.ToggleAppPrivacy = function (e, t) {
          return e.SendMsg(
            "AccountPrivateApps.ToggleAppPrivacy#1",
            (0, a.I8)(l, t),
            p,
            { ePrivilege: 1 },
          );
        }),
          (e.GetPrivateAppList = function (e, t) {
            return e.SendMsg(
              "AccountPrivateApps.GetPrivateAppList#1",
              (0, a.I8)(m, t),
              B,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(i || (i = {})),
        (function (e) {
          e.NotifyPrivateAppListChangedHandler = {
            name: "AccountPrivateAppsClient.NotifyPrivateAppListChanged#1",
            request: y,
          };
        })(s || (s = {}));
      var d = r(20194),
        g = r(75233),
        f = r(51614),
        z = r(23809),
        b = r(30470);
      function v() {
        const e = (0, z.KV)();
        return (0, d.I)({
          queryKey: ["AccountPrivateApps"],
          queryFn: async () => {
            const t = a.w.Init(m),
              r = await i.GetPrivateAppList(e, t);
            return new Set(r.Body().private_apps(!0).appids());
          },
          enabled: !!b.iA.accountid,
        });
      }
      function M(e) {
        const { data: t } = v();
        return !!b.iA.accountid && !!e && (t ? t.has(e) : void 0);
      }
      function _(e) {
        e.invalidateQueries({ queryKey: ["AccountPrivateApps"] });
      }
      function w(e) {
        const t = (0, z.KV)(),
          r = (0, g.jE)();
        return (0, f.n)({
          mutationFn: async (r) => R(t, [e], r),
          onSuccess: (t, i) => h(r, [e], i),
          onError() {
            _(r);
          },
        });
      }
      function A() {
        const e = (0, z.KV)(),
          t = (0, g.jE)();
        return (0, f.n)({
          mutationFn: async (t) => {
            const { rgAppIDs: r, bPrivate: i } = t;
            return R(e, r, i);
          },
          onSuccess: (e, r) => {
            const { rgAppIDs: i, bPrivate: s } = r;
            h(t, i, s);
          },
          onError() {
            _(t);
          },
        });
      }
      async function R(e, t, r) {
        const s = a.w.Init(l);
        s.Body().set_appids(t.slice()), s.Body().set_private(r);
        const n = await i.ToggleAppPrivacy(e, s);
        if (!n.BSuccess()) throw n.GetErrorMessage();
      }
      function h(e, t, r) {
        e.setQueryData(["AccountPrivateApps"], (e) => {
          if (!e) return;
          const i = new Set(e);
          return (
            t.forEach((e) => {
              r ? i.add(e) : i.delete(e);
            }),
            i
          );
        });
      }
    },
  },
]);
