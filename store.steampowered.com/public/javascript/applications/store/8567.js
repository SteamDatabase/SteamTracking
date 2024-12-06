/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8567],
  {
    28567: (e, t, r) => {
      r.d(t, { DT: () => A, Uy: () => _, Pt: () => v, bD: () => M });
      var i = r(56545),
        a = r(80613),
        s = r(89068);
      const n = a.Message;
      class c extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.appids || s.Sg(c.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: s.qM.readInt32,
                    pbr: s.qM.readPackedInt32,
                    bw: s.gp.writeRepeatedInt32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateAppList";
        }
      }
      class o extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.appids || s.Sg(o.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: s.qM.readInt32,
                    pbr: s.qM.readPackedInt32,
                    bw: s.gp.writeRepeatedInt32,
                  },
                  private: { n: 2, br: s.qM.readBool, bw: s.gp.writeBool },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = s.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(o.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApps_ToggleAppPrivacy_Request";
        }
      }
      class u extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new u();
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApps_ToggleAppPrivacy_Response";
        }
      }
      class l extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new l();
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApps_GetPrivateAppList_Request";
        }
      }
      class p extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.private_apps || s.Sg(p.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = { proto: p, fields: { private_apps: { n: 1, c } } }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = s.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApps_GetPrivateAppList_Response";
        }
      }
      class m extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.private_apps || s.Sg(m.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = { proto: m, fields: { private_apps: { n: 1, c } } }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = s.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(m.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApsClient_NotifyPrivateAppListChanged_Notification";
        }
      }
      var B, y;
      !(function (e) {
        (e.ToggleAppPrivacy = function (e, t) {
          return e.SendMsg(
            "AccountPrivateApps.ToggleAppPrivacy#1",
            (0, i.I8)(o, t),
            u,
            { ePrivilege: 1 },
          );
        }),
          (e.GetPrivateAppList = function (e, t) {
            return e.SendMsg(
              "AccountPrivateApps.GetPrivateAppList#1",
              (0, i.I8)(l, t),
              p,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(B || (B = {})),
        (function (e) {
          e.NotifyPrivateAppListChangedHandler = {
            name: "AccountPrivateAppsClient.NotifyPrivateAppListChanged#1",
            request: m,
          };
        })(y || (y = {}));
      var d = r(20194),
        f = r(75233),
        g = r(92240),
        z = r(23809),
        b = r(30470);
      function v() {
        const e = (0, z.KV)();
        return (0, d.I)({
          queryKey: ["AccountPrivateApps"],
          queryFn: async () => {
            const t = i.w.Init(l),
              r = await B.GetPrivateAppList(e, t);
            return new Set(r.Body().private_apps(!0).appids());
          },
          enabled: !!b.iA.accountid,
        });
      }
      function _(e) {
        const { data: t } = v();
        return !!b.iA.accountid && !!e && (t ? t.has(e) : void 0);
      }
      function w(e) {
        e.invalidateQueries({ queryKey: ["AccountPrivateApps"] });
      }
      function M(e) {
        const t = (0, z.KV)(),
          r = (0, f.jE)();
        return (0, g.n)({
          mutationFn: async (r) => R(t, [e], r),
          onSuccess: (t, i) => h(r, [e], i),
          onError() {
            w(r);
          },
        });
      }
      function A() {
        const e = (0, z.KV)(),
          t = (0, f.jE)();
        return (0, g.n)({
          mutationFn: async (t) => {
            const { rgAppIDs: r, bPrivate: i } = t;
            return R(e, r, i);
          },
          onSuccess: (e, r) => {
            const { rgAppIDs: i, bPrivate: a } = r;
            h(t, i, a);
          },
          onError() {
            w(t);
          },
        });
      }
      async function R(e, t, r) {
        const a = i.w.Init(o);
        a.Body().set_appids(t.slice()), a.Body().set_private(r);
        const s = await B.ToggleAppPrivacy(e, a);
        if (!s.BSuccess()) throw s.GetErrorMessage();
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
