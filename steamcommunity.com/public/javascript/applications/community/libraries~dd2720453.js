/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3175],
  {
    75545: (e, r, t) => {
      t.d(r, { XR: () => u, _c: () => c, kk: () => b });
      var i = t(10059),
        a = t(39087),
        n = t(79545);
      const s = i.Message;
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.appids || a.aR(l.M()),
            s.initialize(this, e, 0, -1, [1], null);
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
                    br: a.FE.readInt32,
                    pbr: a.FE.readPackedInt32,
                    bw: a.Xc.writeRepeatedInt32,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(l.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateAppList";
        }
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.appids || a.aR(c.M()),
            s.initialize(this, e, 0, -1, [1], null);
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
                    br: a.FE.readInt32,
                    pbr: a.FE.readPackedInt32,
                    bw: a.Xc.writeRepeatedInt32,
                  },
                  private: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(c.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApps_ToggleAppPrivacy_Request";
        }
      }
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new o();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApps_ToggleAppPrivacy_Response";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new u();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApps_GetPrivateAppList_Request";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.private_apps || a.aR(m.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = { proto: m, fields: { private_apps: { n: 1, c: l } } }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApps_GetPrivateAppList_Response";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.private_apps || a.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
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
          return d.sm_mbf || (d.sm_mbf = a.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(d.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivateApsClient_NotifyPrivateAppListChanged_Notification";
        }
      }
      var b, B;
      !(function (e) {
        (e.ToggleAppPrivacy = function (e, r) {
          return e.SendMsg(
            "AccountPrivateApps.ToggleAppPrivacy#1",
            (0, n.MD)(c, r),
            o,
            { ePrivilege: 1 },
          );
        }),
          (e.GetPrivateAppList = function (e, r) {
            return e.SendMsg(
              "AccountPrivateApps.GetPrivateAppList#1",
              (0, n.MD)(u, r),
              m,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(b || (b = {})),
        (function (e) {
          e.NotifyPrivateAppListChangedHandler = {
            name: "AccountPrivateAppsClient.NotifyPrivateAppListChanged#1",
            request: d,
          };
        })(B || (B = {}));
    },
    67573: (e, r, t) => {
      var i = t(10059),
        a = t(39087),
        n = t(79545);
      const s = i.Message;
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.steamid || a.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  accept: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(l.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Request";
        }
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new c();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Response";
        }
      }
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.requests || a.aR(o.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  requests: { n: 1, c: u, r: !0, q: !0 },
                  cursor: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  count: {
                    n: 3,
                    d: 100,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(o.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Request";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.appid || a.aR(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  start_build_id: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  end_build_id: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  branch: { n: 4, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = a.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(u.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.matches || a.aR(m.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  matches: { n: 1, c: d, r: !0, q: !0 },
                  num_total_results: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  next_cursor: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.appid || a.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  build_id: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  branch: { n: 3, br: a.FE.readString, bw: a.Xc.writeString },
                  clan_event_gid: {
                    n: 4,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  clan_account_id: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = a.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(d.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc";
        }
      }
      var b;
      !(function (e) {
        (e.RespondToClanInvite = function (e, r) {
          return e.SendMsg("Clan.RespondToClanInvite#1", (0, n.MD)(l, r), c, {
            ePrivilege: 1,
          });
        }),
          (e.GetPartnerEventsByBuildIDRange = function (e, r) {
            return e.SendMsg(
              "Clan.GetPartnerEventsByBuildIDRange#1",
              (0, n.MD)(o, r),
              m,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          });
      })(b || (b = {}));
    },
    83120: (e, r, t) => {
      t.d(r, {
        BF: () => j,
        II: () => o,
        Zu: () => z,
        b5: () => v,
        eV: () => _,
        fF: () => F,
        iH: () => M,
      });
      var i = t(10059),
        a = t(39087),
        n = t(79545);
      const s = i.Message;
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.client_instanceid || a.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(l.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientLogonInfo_Request";
        }
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.protocol_version || a.aR(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  protocol_version: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  os: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  machine_name: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(c.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientLogonInfo_Response";
        }
      }
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new o();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Request";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.sessions || a.aR(u.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  sessions: { n: 1, c: m, r: !0, q: !0 },
                  refetch_interval_sec: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = a.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(u.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Response";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.client_instanceid || a.aR(m.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  protocol_version: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  os_name: { n: 3, br: a.FE.readString, bw: a.Xc.writeString },
                  machine_name: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  os_type: { n: 5, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  device_type: {
                    n: 6,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  realm: { n: 7, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Response_Session";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.client_instanceid || a.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = a.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(d.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientInfo_Request";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.package_version || a.aR(b.M()),
            s.initialize(this, e, 0, -1, [7, 10], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  package_version: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  os: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  machine_name: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  ip_public: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  ip_private: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  bytes_available: {
                    n: 6,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  running_games: { n: 7, c: B, r: !0, q: !0 },
                  protocol_version: {
                    n: 8,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  clientcomm_version: {
                    n: 9,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  local_users: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(b.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_ClientData";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.appid || a.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  extra_info: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  time_running_sec: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = a.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(B.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_ClientData_RunningGames";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.client_info || a.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = { proto: y, fields: { client_info: { n: 1, c: b } } }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(y.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientInfo_Response";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.fields || a.aR(_.M()),
            s.initialize(this, e, 0, -1, [6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  fields: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  filters: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  client_instanceid: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  include_client_info: {
                    n: 4,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  language: { n: 5, br: a.FE.readString, bw: a.Xc.writeString },
                  filter_appids: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(_.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Request";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.bytes_available || a.aR(w.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  bytes_available: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  apps: { n: 2, c: p, r: !0, q: !0 },
                  client_info: { n: 3, c: b },
                  refetch_interval_sec_full: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  refetch_interval_sec_changing: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  refetch_interval_sec_updating: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(w.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.appid || a.aR(p.M()),
            s.initialize(this, e, 0, -1, [17], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  app: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  category: { n: 3, br: a.FE.readString, bw: a.Xc.writeString },
                  app_type: { n: 4, br: a.FE.readString, bw: a.Xc.writeString },
                  num_downloading: {
                    n: 8,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  num_paused: {
                    n: 10,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  bytes_download_rate: {
                    n: 11,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  bytes_downloaded: {
                    n: 12,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  bytes_to_download: {
                    n: 13,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  dlcs: { n: 17, c: g, r: !0, q: !0 },
                  favorite: { n: 18, br: a.FE.readBool, bw: a.Xc.writeBool },
                  auto_update: { n: 19, br: a.FE.readBool, bw: a.Xc.writeBool },
                  installed: { n: 20, br: a.FE.readBool, bw: a.Xc.writeBool },
                  download_paused: {
                    n: 21,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  changing: { n: 22, br: a.FE.readBool, bw: a.Xc.writeBool },
                  available_on_platform: {
                    n: 23,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  bytes_staged: {
                    n: 24,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  bytes_to_stage: {
                    n: 25,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  bytes_required: {
                    n: 26,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  source_buildid: {
                    n: 27,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  target_buildid: {
                    n: 28,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  estimated_seconds_remaining: {
                    n: 29,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  queue_position: {
                    n: 30,
                    d: -1,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  uninstalling: {
                    n: 31,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  rt_time_scheduled: {
                    n: 32,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  running: { n: 33, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(p.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response_AppData";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.appid || a.aR(g.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  app: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  installed: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = a.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(g.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetClientAppList_Response_AppData_DLCData";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.appid || a.aR(F.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  appid: {
                    n: 1,
                    q: !0,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  client_instanceid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = a.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(F.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_InstallClientApp_Request";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new f();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_InstallClientApp_Response";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.appid || a.aR(z.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  appid: {
                    n: 1,
                    q: !0,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  client_instanceid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = a.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(z.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_UninstallClientApp_Request";
        }
      }
      class h extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new h();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_UninstallClientApp_Response";
        }
      }
      class M extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.appid || a.aR(M.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  appid: {
                    n: 1,
                    q: !0,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  action: {
                    n: 2,
                    q: !0,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  client_instanceid: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = a.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(M.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_SetClientAppUpdateState_Request";
        }
      }
      class R extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.client_instanceid || a.aR(R.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  appid: {
                    n: 2,
                    q: !0,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  query_params: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = a.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(R.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_LaunchClientApp_Request";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new S();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_LaunchClientApp_Response";
        }
      }
      class W extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new W();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_SetClientAppUpdateState_Response";
        }
      }
      class j extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.client_instanceid || a.aR(j.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  client_instanceid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  enable: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = a.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(j.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_EnableOrDisableDownloads_Request";
        }
      }
      class E extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new E();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_EnableOrDisableDownloads_Response";
        }
      }
      var v;
      !(function (e) {
        (e.GetClientLogonInfo = function (e, r) {
          return e.SendMsg(
            "ClientComm.GetClientLogonInfo#1",
            (0, n.MD)(l, r),
            c,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetAllClientLogonInfo = function (e, r) {
            return e.SendMsg(
              "ClientComm.GetAllClientLogonInfo#1",
              (0, n.MD)(o, r),
              u,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetClientInfo = function (e, r) {
            return e.SendMsg("ClientComm.GetClientInfo#1", (0, n.MD)(d, r), y, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetClientAppList = function (e, r) {
            return e.SendMsg(
              "ClientComm.GetClientAppList#1",
              (0, n.MD)(_, r),
              w,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.InstallClientApp = function (e, r) {
            return e.SendMsg(
              "ClientComm.InstallClientApp#1",
              (0, n.MD)(F, r),
              f,
              { ePrivilege: 1 },
            );
          }),
          (e.UninstallClientApp = function (e, r) {
            return e.SendMsg(
              "ClientComm.UninstallClientApp#1",
              (0, n.MD)(z, r),
              h,
              { ePrivilege: 1 },
            );
          }),
          (e.LaunchClientApp = function (e, r) {
            return e.SendMsg(
              "ClientComm.LaunchClientApp#1",
              (0, n.MD)(R, r),
              S,
              { ePrivilege: 1 },
            );
          }),
          (e.SetClientAppUpdateState = function (e, r) {
            return e.SendMsg(
              "ClientComm.SetClientAppUpdateState#1",
              (0, n.MD)(M, r),
              W,
              { ePrivilege: 1 },
            );
          }),
          (e.EnableOrDisableDownloads = function (e, r) {
            return e.SendMsg(
              "ClientComm.EnableOrDisableDownloads#1",
              (0, n.MD)(j, r),
              E,
              { ePrivilege: 1 },
            );
          });
      })(v || (v = {}));
    },
    48746: (e, r, t) => {
      t.d(r, { AO: () => I, vx: () => He });
      var i = t(10059),
        a = t(39087),
        n = t(79545);
      const s = i.Message;
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.publishedfileid || a.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  publishedfileid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  vote_up: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(l.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_Vote_Request";
        }
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new c();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_Vote_Response";
        }
      }
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.publishedfileid || a.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  publishedfileid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  list_type: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appid: { n: 3, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  notify_client: {
                    n: 4,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_dependencies: {
                    n: 5,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(o.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_Subscribe_Request";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new u();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_Subscribe_Response";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.publishedfileid || a.aR(m.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  publishedfileid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  list_type: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appid: { n: 3, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  notify_client: {
                    n: 4,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_Unsubscribe_Request";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new d();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_Unsubscribe_Response";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.publishedfileid || a.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  publishedfileid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(b.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_CanSubscribe_Request";
        }
      }
      class B extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.can_subscribe || a.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  can_subscribe: {
                    n: 1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = a.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(B.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_CanSubscribe_Response";
        }
      }
      class y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.sectionid || a.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  sectionid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  title: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  description_text: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  sort_order: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(y.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PublishedFileSubSection";
        }
      }
      class _ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.publishedfileid || a.aR(_.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  publishedfileid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  for_table_of_contents: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  specific_sectionid: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  desired_revision: {
                    n: 4,
                    d: 0,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(_.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetSubSectionData_Request";
        }
      }
      class w extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.sub_sections || a.aR(w.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: { sub_sections: { n: 1, c: y, r: !0, q: !0 } },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(w.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetSubSectionData_Response";
        }
      }
      class p extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.appid || a.aR(p.M()),
            s.initialize(this, e, 0, -1, [13], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  consumer_appid: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  cloudfilename: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  preview_cloudfilename: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  title: { n: 5, br: a.FE.readString, bw: a.Xc.writeString },
                  file_description: {
                    n: 6,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  file_type: {
                    n: 7,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  consumer_shortcut_name: {
                    n: 8,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  youtube_username: {
                    n: 9,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  youtube_videoid: {
                    n: 10,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  visibility: {
                    n: 11,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  redirect_uri: {
                    n: 12,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  tags: {
                    n: 13,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                  collection_type: {
                    n: 14,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  game_type: {
                    n: 15,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  url: { n: 16, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(p.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_Publish_Request";
        }
      }
      class g extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.publishedfileid || a.aR(g.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  publishedfileid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  redirect_uri: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = a.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(g.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_Publish_Response";
        }
      }
      class F extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.timestamp || a.aR(F.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  timestamp: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  game_branch_min: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  game_branch_max: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  manifestid: {
                    n: 4,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = a.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(F.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PublishedFileAuthorSnapshot";
        }
      }
      class f extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.result || a.aR(f.M()),
            s.initialize(
              this,
              e,
              0,
              -1,
              [51, 52, 53, 54, 72, 69, 70, 75],
              null,
            );
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  result: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  publishedfileid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  creator: {
                    n: 3,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  creator_appid: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  consumer_appid: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  consumer_shortcutid: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  filename: { n: 7, br: a.FE.readString, bw: a.Xc.writeString },
                  file_size: {
                    n: 8,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  preview_file_size: {
                    n: 9,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  file_url: {
                    n: 10,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  preview_url: {
                    n: 11,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  youtubevideoid: {
                    n: 12,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  url: { n: 13, br: a.FE.readString, bw: a.Xc.writeString },
                  hcontent_file: {
                    n: 14,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  hcontent_preview: {
                    n: 15,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  title: { n: 16, br: a.FE.readString, bw: a.Xc.writeString },
                  file_description: {
                    n: 17,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  short_description: {
                    n: 18,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  time_created: {
                    n: 19,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  time_updated: {
                    n: 20,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  visibility: {
                    n: 21,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  flags: { n: 22, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  workshop_file: {
                    n: 23,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  workshop_accepted: {
                    n: 24,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  show_subscribe_all: {
                    n: 25,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  num_comments_developer: {
                    n: 26,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  num_comments_public: {
                    n: 27,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  banned: { n: 28, br: a.FE.readBool, bw: a.Xc.writeBool },
                  ban_reason: {
                    n: 29,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  banner: {
                    n: 30,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  can_be_deleted: {
                    n: 31,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  incompatible: {
                    n: 32,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  app_name: {
                    n: 33,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  file_type: {
                    n: 34,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  can_subscribe: {
                    n: 35,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  subscriptions: {
                    n: 36,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  favorited: {
                    n: 37,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  followers: {
                    n: 38,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  lifetime_subscriptions: {
                    n: 39,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  lifetime_favorited: {
                    n: 40,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  lifetime_followers: {
                    n: 41,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  lifetime_playtime: {
                    n: 62,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  lifetime_playtime_sessions: {
                    n: 63,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  views: { n: 42, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  image_width: {
                    n: 43,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  image_height: {
                    n: 44,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  image_url: {
                    n: 45,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  spoiler_tag: { n: 46, br: a.FE.readBool, bw: a.Xc.writeBool },
                  shortcutid: {
                    n: 47,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  shortcutname: {
                    n: 48,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  num_children: {
                    n: 49,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  num_reports: {
                    n: 50,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  previews: { n: 51, c: h, r: !0, q: !0 },
                  tags: { n: 52, c: z, r: !0, q: !0 },
                  children: { n: 53, c: M, r: !0, q: !0 },
                  kvtags: { n: 54, c: R, r: !0, q: !0 },
                  vote_data: { n: 55, c: S },
                  playtime_stats: { n: 64, c: j },
                  time_subscribed: {
                    n: 56,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  for_sale_data: { n: 57, c: W },
                  metadata: {
                    n: 58,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  language: {
                    n: 61,
                    d: 0,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  maybe_inappropriate_sex: {
                    n: 65,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  maybe_inappropriate_violence: {
                    n: 66,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  content_descriptorids: {
                    n: 72,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  revision_change_number: {
                    n: 67,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  revision: { n: 68, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  available_revisions: {
                    n: 69,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  reactions: { n: 70, c: E, r: !0, q: !0 },
                  ban_text_check_result: {
                    n: 71,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  search_score: {
                    n: 73,
                    br: a.FE.readFloat,
                    bw: a.Xc.writeFloat,
                  },
                  external_asset_id: {
                    n: 74,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  author_snapshots: { n: 75, c: F, r: !0, q: !0 },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = a.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(f.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PublishedFileDetails";
        }
      }
      class z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.tag || a.aR(z.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  tag: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  adminonly: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                  display_name: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = a.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(z.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PublishedFileDetails_Tag";
        }
      }
      class h extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.previewid || a.aR(h.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  previewid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  sortorder: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  url: { n: 3, br: a.FE.readString, bw: a.Xc.writeString },
                  size: { n: 4, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  filename: { n: 5, br: a.FE.readString, bw: a.Xc.writeString },
                  youtubevideoid: {
                    n: 6,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  preview_type: {
                    n: 7,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  external_reference: {
                    n: 8,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = a.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(h.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PublishedFileDetails_Preview";
        }
      }
      class M extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.publishedfileid || a.aR(M.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  publishedfileid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  sortorder: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  file_type: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = a.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(M.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PublishedFileDetails_Child";
        }
      }
      class R extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.key || a.aR(R.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  key: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  value: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = a.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(R.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PublishedFileDetails_KVTag";
        }
      }
      class S extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.score || a.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  score: { n: 1, br: a.FE.readFloat, bw: a.Xc.writeFloat },
                  votes_up: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  votes_down: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = a.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(S.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PublishedFileDetails_VoteData";
        }
      }
      class W extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.is_for_sale || a.aR(W.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  is_for_sale: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                  price_category: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  estatus: { n: 3, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  price_category_floor: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  price_is_pay_what_you_want: {
                    n: 5,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  discount_percentage: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = a.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(W.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PublishedFileDetails_ForSaleData";
        }
      }
      class j extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.playtime_seconds || a.aR(j.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  playtime_seconds: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  num_sessions: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = a.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(j.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PublishedFileDetails_PlaytimeStats";
        }
      }
      class E extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.reactionid || a.aR(E.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  reactionid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  count: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = a.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(E.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(E.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(E.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PublishedFileDetails_Reaction";
        }
      }
      class v extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.publishedfileids || a.aR(v.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  publishedfileids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readFixed64String,
                    pbr: a.FE.readPackedFixed64String,
                    bw: a.Xc.writeRepeatedFixed64String,
                  },
                  includetags: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                  includeadditionalpreviews: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  includechildren: {
                    n: 4,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  includekvtags: {
                    n: 5,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  includevotes: { n: 6, br: a.FE.readBool, bw: a.Xc.writeBool },
                  short_description: {
                    n: 8,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  includeforsaledata: {
                    n: 10,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  includemetadata: {
                    n: 11,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  language: {
                    n: 12,
                    d: 0,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  return_playtime_stats: {
                    n: 13,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appid: { n: 14, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  strip_description_bbcode: {
                    n: 15,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  desired_revision: {
                    n: 16,
                    d: 0,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  includereactions: {
                    n: 17,
                    d: !1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  admin_query: { n: 18, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = a.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(v.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetDetails_Request";
        }
      }
      class O extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.publishedfiledetails || a.aR(O.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: { publishedfiledetails: { n: 1, c: f, r: !0, q: !0 } },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = a.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(O.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetDetails_Response";
        }
      }
      class T extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.appid || a.aR(T.M()),
            s.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  last_time_updated: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  workshop_items: { n: 3, c: U, r: !0, q: !0 },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = a.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(T.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetItemInfo_Request";
        }
      }
      class U extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.published_file_id || a.aR(U.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  published_file_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  time_updated: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  desired_revision: {
                    n: 3,
                    d: 0,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = a.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(U.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetItemInfo_Request_WorkshopItem";
        }
      }
      class X extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.update_time || a.aR(X.M()),
            s.initialize(this, e, 0, -1, [2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  update_time: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  workshop_items: { n: 2, c: C, r: !0, q: !0 },
                  private_items: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: a.FE.readFixed64String,
                    pbr: a.FE.readPackedFixed64String,
                    bw: a.Xc.writeRepeatedFixed64String,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = a.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(X.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetItemInfo_Response";
        }
      }
      class C extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.published_file_id || a.aR(C.M()),
            s.initialize(this, e, 0, -1, [6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  published_file_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  time_updated: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  manifest_id: {
                    n: 3,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  flags: { n: 4, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  revision: { n: 5, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  author_snapshots: { n: 6, c: F, r: !0, q: !0 },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = a.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(C.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetItemInfo_Response_WorkshopItemInfo";
        }
      }
      class I extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.steamid || a.aR(I.M()),
            s.initialize(this, e, 0, -1, [10, 11, 30, 34, 37], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  shortcutid: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  page: {
                    n: 4,
                    d: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  numperpage: {
                    n: 5,
                    d: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  type: {
                    n: 6,
                    d: "myfiles",
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  sortmethod: {
                    n: 7,
                    d: "lastupdated",
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  privacy: { n: 9, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  requiredtags: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                  excludedtags: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                  required_kv_tags: { n: 30, c: P, r: !0, q: !0 },
                  filetype: {
                    n: 14,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  creator_appid: {
                    n: 15,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  match_cloud_filename: {
                    n: 16,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  cache_max_age_seconds: {
                    n: 27,
                    d: 0,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  language: {
                    n: 29,
                    d: 0,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  taggroups: { n: 34, c: x, r: !0, q: !0 },
                  excluded_content_descriptors: {
                    n: 37,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  admin_query: { n: 38, br: a.FE.readBool, bw: a.Xc.writeBool },
                  totalonly: { n: 17, br: a.FE.readBool, bw: a.Xc.writeBool },
                  ids_only: { n: 18, br: a.FE.readBool, bw: a.Xc.writeBool },
                  return_vote_data: {
                    n: 19,
                    d: !0,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  return_tags: { n: 20, br: a.FE.readBool, bw: a.Xc.writeBool },
                  return_kv_tags: {
                    n: 21,
                    d: !0,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  return_previews: {
                    n: 22,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  return_children: {
                    n: 23,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  return_short_description: {
                    n: 24,
                    d: !0,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  return_for_sale_data: {
                    n: 26,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  return_metadata: {
                    n: 28,
                    d: !1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  return_playtime_stats: {
                    n: 31,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  strip_description_bbcode: {
                    n: 32,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  return_reactions: {
                    n: 35,
                    d: !1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  startindex_override: {
                    n: 25,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  desired_revision: {
                    n: 33,
                    d: 0,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  return_apps: { n: 36, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = a.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(I.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetUserFiles_Request";
        }
      }
      class P extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.key || a.aR(P.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  key: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  value: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = a.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(P.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetUserFiles_Request_KVTag";
        }
      }
      class x extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.tags || a.aR(x.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  tags: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = a.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(x.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetUserFiles_Request_TagGroup";
        }
      }
      class A extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.total || a.aR(A.M()),
            s.initialize(this, e, 0, -1, [3, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  total: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  startindex: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  publishedfiledetails: { n: 3, c: f, r: !0, q: !0 },
                  apps: { n: 4, c: D, r: !0, q: !0 },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = a.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(A.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(A.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(A.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetUserFiles_Response";
        }
      }
      class D extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.appid || a.aR(D.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  name: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  shortcutid: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  private: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = a.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(D.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(D.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(D.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetUserFiles_Response_App";
        }
      }
      class q extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.appid || a.aR(q.M()),
            s.initialize(this, e, 0, -1, [6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  publishedfileid: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  title: { n: 3, br: a.FE.readString, bw: a.Xc.writeString },
                  file_description: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  visibility: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  tags: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                  filename: { n: 7, br: a.FE.readString, bw: a.Xc.writeString },
                  preview_filename: {
                    n: 8,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  spoiler_tag: { n: 10, br: a.FE.readBool, bw: a.Xc.writeBool },
                  image_width: {
                    n: 15,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  image_height: {
                    n: 16,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  language: { n: 17, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = a.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(q.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_Update_Request";
        }
      }
      class N extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new N();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_Update_Response";
        }
      }
      class G extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.publishedfileid || a.aR(G.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  publishedfileid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  appid: { n: 5, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = a.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(G.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_Delete_Request";
        }
      }
      class k extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new k();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_Delete_Response";
        }
      }
      class L extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.publishedfileid || a.aR(L.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  publishedfileid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  timestamp: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  language: { n: 3, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = a.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(L.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(L.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(L.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetChangeHistoryEntry_Request";
        }
      }
      class $ extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.change_description || a.aR($.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  change_description: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  language: { n: 2, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  saved_snapshot: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  snapshot_game_branch_min: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  snapshot_game_branch_max: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  manifest_id: {
                    n: 6,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = a.Bh($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA($.M(), e, r);
        }
        static fromObject(e) {
          return a.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F($.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2($.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetChangeHistoryEntry_Response";
        }
      }
      class V extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.publishedfileid || a.aR(V.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  publishedfileid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  total_only: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                  startindex: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  count: { n: 4, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  language: {
                    n: 5,
                    d: 0,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = a.Bh(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(V.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(V.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(V.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(V.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetChangeHistory_Request";
        }
      }
      class K extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.changes || a.aR(K.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  changes: { n: 1, c: H, r: !0, q: !0 },
                  total: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = a.Bh(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(K.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(K.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(K.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(K.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetChangeHistory_Response";
        }
      }
      class H extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.timestamp || a.aR(H.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  timestamp: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  change_description: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  language: { n: 3, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  saved_snapshot: {
                    n: 4,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  snapshot_game_branch_min: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  snapshot_game_branch_max: {
                    n: 6,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  manifest_id: {
                    n: 7,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = a.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(H.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(H.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(H.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetChangeHistory_Response_ChangeLog";
        }
      }
      class Q extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.appid || a.aR(Q.M()),
            s.initialize(this, e, 0, -1, [3, 5, 7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  matching_file_type: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  tags: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                  match_all_tags: {
                    n: 4,
                    d: !0,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  excluded_tags: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                  desired_queue_size: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  desired_revision: {
                    n: 8,
                    d: 0,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = a.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Q.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Q.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_RefreshVotingQueue_Request";
        }
      }
      class Z extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Z();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_RefreshVotingQueue_Response";
        }
      }
      class J extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.query_type || a.aR(J.M()),
            s.initialize(
              this,
              e,
              0,
              -1,
              [6, 7, 9, 10, 34, 42, 46, 25, 26, 27, 29],
              null,
            );
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  query_type: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  page: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  cursor: { n: 39, br: a.FE.readString, bw: a.Xc.writeString },
                  numperpage: {
                    n: 3,
                    d: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  creator_appid: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appid: { n: 5, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  requiredtags: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                  excludedtags: {
                    n: 7,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                  match_all_tags: {
                    n: 8,
                    d: !0,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  required_flags: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                  omitted_flags: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                  search_text: {
                    n: 11,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  filetype: {
                    n: 12,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  child_publishedfileid: {
                    n: 13,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  days: { n: 14, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  include_recent_votes_only: {
                    n: 15,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  cache_max_age_seconds: {
                    n: 31,
                    d: 0,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  language: {
                    n: 33,
                    d: 0,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  required_kv_tags: { n: 34, c: Y, r: !0, q: !0 },
                  taggroups: { n: 42, c: ee, r: !0, q: !0 },
                  date_range_created: { n: 44, c: re },
                  date_range_updated: { n: 45, c: re },
                  excluded_content_descriptors: {
                    n: 46,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  admin_query: { n: 47, br: a.FE.readBool, bw: a.Xc.writeBool },
                  totalonly: { n: 16, br: a.FE.readBool, bw: a.Xc.writeBool },
                  ids_only: { n: 35, br: a.FE.readBool, bw: a.Xc.writeBool },
                  return_vote_data: {
                    n: 17,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  return_tags: { n: 18, br: a.FE.readBool, bw: a.Xc.writeBool },
                  return_kv_tags: {
                    n: 19,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  return_previews: {
                    n: 20,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  return_children: {
                    n: 21,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  return_short_description: {
                    n: 22,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  return_for_sale_data: {
                    n: 30,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  return_metadata: {
                    n: 32,
                    d: !1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  return_playtime_stats: {
                    n: 36,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  return_details: {
                    n: 37,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  strip_description_bbcode: {
                    n: 38,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  desired_revision: {
                    n: 40,
                    d: 0,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  return_reactions: {
                    n: 43,
                    d: !1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = a.Bh(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(J.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(J.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(J.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(J.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_QueryFiles_Request";
        }
      }
      class Y extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.key || a.aR(Y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  key: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  value: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = a.Bh(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Y.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_QueryFiles_Request_KVTag";
        }
      }
      class ee extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.tags || a.aR(ee.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  tags: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = a.Bh(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ee.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ee();
          return ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_QueryFiles_Request_TagGroup";
        }
      }
      class re extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.timestamp_start || a.aR(re.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  timestamp_start: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  timestamp_end: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = a.Bh(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(re.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new re();
          return re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(re.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_QueryFiles_Request_DateRange";
        }
      }
      class te extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.total || a.aR(te.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  total: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  publishedfiledetails: { n: 2, c: f, r: !0, q: !0 },
                  next_cursor: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = a.Bh(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(te.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new te();
          return te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(te.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_QueryFiles_Response";
        }
      }
      class ie extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.publishedfileid || a.aR(ie.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  publishedfileid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  relationship: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = a.Bh(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ie.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ie();
          return ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_AddAppRelationship_Request";
        }
      }
      class ae extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ae();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ae();
          return ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_AddAppRelationship_Response";
        }
      }
      class ne extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.publishedfileid || a.aR(ne.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  publishedfileid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  relationship: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = a.Bh(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ne.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ne();
          return ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_RemoveAppRelationship_Request";
        }
      }
      class se extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new se();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new se();
          return se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_RemoveAppRelationship_Response";
        }
      }
      class le extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.publishedfileid || a.aR(le.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  publishedfileid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = a.Bh(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(le.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(le.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new le();
          return le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(le.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(le.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetAppRelationships_Request";
        }
      }
      class ce extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.app_relationships || a.aR(ce.M()),
            s.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: { app_relationships: { n: 3, c: oe, r: !0, q: !0 } },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = a.Bh(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ce.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ce();
          return ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetAppRelationships_Response";
        }
      }
      class oe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.appid || a.aR(oe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  relationship: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = a.Bh(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(oe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new oe();
          return oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetAppRelationships_Response_AppRelationship";
        }
      }
      class ue extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.publishedfileids || a.aR(ue.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  publishedfileids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint64String,
                    pbr: a.FE.readPackedUint64String,
                    bw: a.Xc.writeRepeatedUint64String,
                  },
                  filter_relationship: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = a.Bh(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ue.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ue();
          return ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetAppRelationshipsBatched_Request";
        }
      }
      class me extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.relationships || a.aR(me.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: { relationships: { n: 1, c: be, r: !0, q: !0 } },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = a.Bh(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(me.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new me();
          return me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(me.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetAppRelationshipsBatched_Response";
        }
      }
      class de extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.appid || a.aR(de.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  relationship: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = a.Bh(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(de.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(de.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new de();
          return de.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(de.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(de.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetAppRelationshipsBatched_Response_AppRelationship";
        }
      }
      class be extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.publishedfileid || a.aR(be.M()),
            s.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  publishedfileid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  result: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  app_relationships: { n: 3, c: de, r: !0, q: !0 },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = a.Bh(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(be.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(be.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new be();
          return be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(be.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetAppRelationshipsBatched_Response_PublishedFileAppRelationship";
        }
      }
      class Be extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.appid || a.aR(Be.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  publishedfileids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint64String,
                    pbr: a.FE.readPackedUint64String,
                    bw: a.Xc.writeRepeatedUint64String,
                  },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = a.Bh(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Be.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Be.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Be();
          return Be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Be.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_StartPlaytimeTracking_Request";
        }
      }
      class ye extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ye();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ye();
          return ye.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_StartPlaytimeTracking_Response";
        }
      }
      class _e extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.appid || a.aR(_e.M()),
            s.initialize(this, e, 0, -1, [2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  publishedfileids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint64String,
                    pbr: a.FE.readPackedUint64String,
                    bw: a.Xc.writeRepeatedUint64String,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = a.Bh(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(_e.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(_e.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _e();
          return _e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(_e.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(_e.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_StopPlaytimeTracking_Request";
        }
      }
      class we extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new we();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new we();
          return we.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_StopPlaytimeTracking_Response";
        }
      }
      class pe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.appid || a.aR(pe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = a.Bh(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(pe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(pe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new pe();
          return pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(pe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(pe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_StopPlaytimeTrackingForAllAppItems_Request";
        }
      }
      class ge extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ge();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ge();
          return ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_StopPlaytimeTrackingForAllAppItems_Response";
        }
      }
      class Fe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.appid || a.aR(Fe.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  controller_config_usage: { n: 2, c: fe, r: !0, q: !0 },
                },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = a.Bh(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Fe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Fe();
          return Fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Fe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Fe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_SetPlaytimeForControllerConfigs_Request";
        }
      }
      class fe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.publishedfileid || a.aR(fe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  publishedfileid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  seconds_active: {
                    n: 2,
                    br: a.FE.readFloat,
                    bw: a.Xc.writeFloat,
                  },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = a.Bh(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(fe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(fe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new fe();
          return fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(fe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(fe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_SetPlaytimeForControllerConfigs_Request_ControllerConfigUsage";
        }
      }
      class ze extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ze();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ze();
          return ze.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_SetPlaytimeForControllerConfigs_Response";
        }
      }
      class he extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.publishedfileid || a.aR(he.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  publishedfileid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  child_publishedfileid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = a.Bh(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(he.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(he.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new he();
          return he.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(he.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(he.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_AddChild_Request";
        }
      }
      class Me extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Me();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Me();
          return Me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_AddChild_Response";
        }
      }
      class Re extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.publishedfileid || a.aR(Re.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  publishedfileid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  child_publishedfileid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = a.Bh(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Re.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Re();
          return Re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Re.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_RemoveChild_Request";
        }
      }
      class Se extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Se();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Se();
          return Se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_RemoveChild_Response";
        }
      }
      class We extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.appid || a.aR(We.M()),
            s.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  publishedfileid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  children: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint64String,
                    pbr: a.FE.readPackedUint64String,
                    bw: a.Xc.writeRepeatedUint64String,
                  },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = a.Bh(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(We.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(We.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new We();
          return We.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(We.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(We.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_SetCollectionChildren_Request";
        }
      }
      class je extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new je();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new je();
          return je.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_SetCollectionChildren_Response";
        }
      }
      class Ee extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.appid || a.aR(Ee.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  list_type: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  publishedfileid: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  add_only: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = a.Bh(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ee.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ee();
          return Ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_SetSubscriptionListFromCollection_Request";
        }
      }
      class ve extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ve();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ve();
          return ve.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_SetSubscriptionListFromCollection_Response";
        }
      }
      class Oe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.appid || a.aR(Oe.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  publishedfileids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readFixed64String,
                    pbr: a.FE.readPackedFixed64String,
                    bw: a.Xc.writeRepeatedFixed64String,
                  },
                  listtype: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  filetype: { n: 4, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  workshopfiletype: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = a.Bh(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Oe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Oe();
          return Oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_AreFilesInSubscriptionList_Request";
        }
      }
      class Te extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.files || a.aR(Te.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: { files: { n: 1, c: Ue, r: !0, q: !0 } },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = a.Bh(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Te.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Te();
          return Te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Te.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_AreFilesInSubscriptionList_Response";
        }
      }
      class Ue extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.publishedfileid || a.aR(Ue.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  publishedfileid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  inlist: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = a.Bh(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ue.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ue();
          return Ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_AreFilesInSubscriptionList_Response_InList";
        }
      }
      class Xe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xe.prototype.publishedfileids || a.aR(Xe.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: {
                  publishedfileids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readFixed64String,
                    pbr: a.FE.readPackedFixed64String,
                    bw: a.Xc.writeRepeatedFixed64String,
                  },
                },
              }),
            Xe.sm_m
          );
        }
        static MBF() {
          return Xe.sm_mbf || (Xe.sm_mbf = a.Bh(Xe.M())), Xe.sm_mbf;
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Xe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Xe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Xe();
          return Xe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Xe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Xe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetUserVoteSummary_Request";
        }
      }
      class Ce extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.summaries || a.aR(Ce.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: { summaries: { n: 1, c: Ie, r: !0, q: !0 } },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = a.Bh(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ce.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ce();
          return Ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetUserVoteSummary_Response";
        }
      }
      class Ie extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.publishedfileid || a.aR(Ie.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  publishedfileid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  vote_for: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                  vote_against: { n: 3, br: a.FE.readBool, bw: a.Xc.writeBool },
                  reported: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = a.Bh(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ie.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ie();
          return Ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetUserVoteSummary_Response_VoteSummary";
        }
      }
      class Pe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.appid || a.aR(Pe.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  last_time_updated: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  num_items_max: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  desired_revision: {
                    n: 4,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = a.Bh(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Pe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Pe();
          return Pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Pe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Pe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetItemChanges_Request";
        }
      }
      class xe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.update_time || a.aR(xe.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  update_time: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  workshop_items: { n: 2, c: Ae, r: !0, q: !0 },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = a.Bh(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(xe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(xe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new xe();
          return xe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(xe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(xe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetItemChanges_Response";
        }
      }
      class Ae extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.published_file_id || a.aR(Ae.M()),
            s.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  published_file_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  time_updated: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  manifest_id: {
                    n: 3,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  author_snapshots: { n: 4, c: F, r: !0, q: !0 },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = a.Bh(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ae.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ae();
          return Ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetItemChanges_Response_WorkshopItemInfo";
        }
      }
      class De extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.publishedfileid || a.aR(De.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  publishedfileid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = a.Bh(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(De.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(De.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new De();
          return De.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(De.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(De.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetContentDescriptors_Request";
        }
      }
      class qe extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.content_descriptors || a.aR(qe.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: { content_descriptors: { n: 1, c: Ne, r: !0, q: !0 } },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = a.Bh(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(qe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(qe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new qe();
          return qe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(qe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(qe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetContentDescriptors_Response";
        }
      }
      class Ne extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.descriptorid || a.aR(Ne.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  descriptorid: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  accountid: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  timestamp: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  moderator_set: {
                    n: 4,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = a.Bh(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ne.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ne();
          return Ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_GetContentDescriptors_Response_ContentDescriptor";
        }
      }
      class Ge extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.publishedfileid || a.aR(Ge.M()),
            s.initialize(this, e, 0, -1, [2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  publishedfileid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  descriptors_to_add: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  descriptors_to_remove: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = a.Bh(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ge.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ge();
          return Ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_UpdateContentDescriptors_Request";
        }
      }
      class ke extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.timestamp_updated || a.aR(ke.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  timestamp_updated: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = a.Bh(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ke.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ke.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ke();
          return ke.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ke.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ke.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_UpdateContentDescriptors_Response";
        }
      }
      class Le extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Le.prototype.published_file_id || a.aR(Le.M()),
            s.initialize(this, e, 0, -1, [8], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: {
                  published_file_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  app_id: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  file_hcontent: {
                    n: 3,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  file_size: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  rtime_subscribed: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  is_depot_content: {
                    n: 6,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  rtime_updated: {
                    n: 7,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  revision: { n: 9, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  revisions: { n: 8, c: $e, r: !0, q: !0 },
                },
              }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = a.Bh(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Le.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Le.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Le();
          return Le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Le.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Le.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_FileSubscribed_Notification";
        }
      }
      class $e extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $e.prototype.revision || a.aR($e.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $e.sm_m ||
              ($e.sm_m = {
                proto: $e,
                fields: {
                  revision: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  file_hcontent: {
                    n: 2,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  rtime_updated: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  game_branch_min: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  game_branch_max: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            $e.sm_m
          );
        }
        static MBF() {
          return $e.sm_mbf || ($e.sm_mbf = a.Bh($e.M())), $e.sm_mbf;
        }
        toObject(e = !1) {
          return $e.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA($e.M(), e, r);
        }
        static fromObject(e) {
          return a.aD($e.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new $e();
          return $e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F($e.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2($e.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_FileSubscribed_Notification_RevisionData";
        }
      }
      class Ve extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ve.prototype.published_file_id || a.aR(Ve.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ve.sm_m ||
              (Ve.sm_m = {
                proto: Ve,
                fields: {
                  published_file_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  app_id: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            Ve.sm_m
          );
        }
        static MBF() {
          return Ve.sm_mbf || (Ve.sm_mbf = a.Bh(Ve.M())), Ve.sm_mbf;
        }
        toObject(e = !1) {
          return Ve.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ve.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ve.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ve();
          return Ve.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ve.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ve.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_FileUnsubscribed_Notification";
        }
      }
      class Ke extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ke.prototype.published_file_id || a.aR(Ke.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ke.sm_m ||
              (Ke.sm_m = {
                proto: Ke,
                fields: {
                  published_file_id: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  app_id: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            Ke.sm_m
          );
        }
        static MBF() {
          return Ke.sm_mbf || (Ke.sm_mbf = a.Bh(Ke.M())), Ke.sm_mbf;
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ke.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ke.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ke();
          return Ke.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ke.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ke.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishedFile_FileDeleted_Client_Notification";
        }
      }
      var He, Qe;
      !(function (e) {
        (e.Vote = function (e, r) {
          return e.SendMsg("PublishedFile.Vote#1", (0, n.MD)(l, r), c, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 5,
          });
        }),
          (e.Subscribe = function (e, r) {
            return e.SendMsg("PublishedFile.Subscribe#1", (0, n.MD)(o, r), u, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.Unsubscribe = function (e, r) {
            return e.SendMsg(
              "PublishedFile.Unsubscribe#1",
              (0, n.MD)(m, r),
              d,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.CanSubscribe = function (e, r) {
            return e.SendMsg(
              "PublishedFile.CanSubscribe#1",
              (0, n.MD)(b, r),
              B,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetSubSectionData = function (e, r) {
            return e.SendMsg(
              "PublishedFile.GetSubSectionData#1",
              (0, n.MD)(_, r),
              w,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.Publish = function (e, r) {
            return e.SendMsg("PublishedFile.Publish#1", (0, n.MD)(p, r), g, {
              ePrivilege: 3,
            });
          }),
          (e.GetDetails = function (e, r) {
            return e.SendMsg("PublishedFile.GetDetails#1", (0, n.MD)(v, r), O, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetItemInfo = function (e, r) {
            return e.SendMsg(
              "PublishedFile.GetItemInfo#1",
              (0, n.MD)(T, r),
              X,
              { ePrivilege: 2 },
            );
          }),
          (e.GetUserFiles = function (e, r) {
            return e.SendMsg(
              "PublishedFile.GetUserFiles#1",
              (0, n.MD)(I, r),
              A,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetUserFileCount = function (e, r) {
            return e.SendMsg(
              "PublishedFile.GetUserFileCount#1",
              (0, n.MD)(I, r),
              A,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.AreFilesInSubscriptionList = function (e, r) {
            return e.SendMsg(
              "PublishedFile.AreFilesInSubscriptionList#1",
              (0, n.MD)(Oe, r),
              Te,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.Update = function (e, r) {
            return e.SendMsg("PublishedFile.Update#1", (0, n.MD)(q, r), N, {
              ePrivilege: 3,
            });
          }),
          (e.Delete = function (e, r) {
            return e.SendMsg("PublishedFile.Delete#1", (0, n.MD)(G, r), k, {
              ePrivilege: 3,
              eWebAPIKeyRequirement: 5,
            });
          }),
          (e.GetChangeHistoryEntry = function (e, r) {
            return e.SendMsg(
              "PublishedFile.GetChangeHistoryEntry#1",
              (0, n.MD)(L, r),
              $,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }),
          (e.GetChangeHistory = function (e, r) {
            return e.SendMsg(
              "PublishedFile.GetChangeHistory#1",
              (0, n.MD)(V, r),
              K,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }),
          (e.RefreshVotingQueue = function (e, r) {
            return e.SendMsg(
              "PublishedFile.RefreshVotingQueue#1",
              (0, n.MD)(Q, r),
              Z,
              { ePrivilege: 1, eWebAPIKeyRequirement: 5 },
            );
          }),
          (e.QueryFiles = function (e, r) {
            return e.SendMsg(
              "PublishedFile.QueryFiles#1",
              (0, n.MD)(J, r),
              te,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.AddAppRelationship = function (e, r) {
            return e.SendMsg(
              "PublishedFile.AddAppRelationship#1",
              (0, n.MD)(ie, r),
              ae,
              { ePrivilege: 1 },
            );
          }),
          (e.RemoveAppRelationship = function (e, r) {
            return e.SendMsg(
              "PublishedFile.RemoveAppRelationship#1",
              (0, n.MD)(ne, r),
              se,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAppRelationships = function (e, r) {
            return e.SendMsg(
              "PublishedFile.GetAppRelationships#1",
              (0, n.MD)(le, r),
              ce,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }),
          (e.GetAppRelationshipsBatched = function (e, r) {
            return e.SendMsg(
              "PublishedFile.GetAppRelationshipsBatched#1",
              (0, n.MD)(ue, r),
              me,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }),
          (e.StartPlaytimeTracking = function (e, r) {
            return e.SendMsg(
              "PublishedFile.StartPlaytimeTracking#1",
              (0, n.MD)(Be, r),
              ye,
              { ePrivilege: 1 },
            );
          }),
          (e.StopPlaytimeTracking = function (e, r) {
            return e.SendMsg(
              "PublishedFile.StopPlaytimeTracking#1",
              (0, n.MD)(_e, r),
              we,
              { ePrivilege: 1 },
            );
          }),
          (e.StopPlaytimeTrackingForAllAppItems = function (e, r) {
            return e.SendMsg(
              "PublishedFile.StopPlaytimeTrackingForAllAppItems#1",
              (0, n.MD)(pe, r),
              ge,
              { ePrivilege: 1 },
            );
          }),
          (e.SetPlaytimeForControllerConfigs = function (e, r) {
            return e.SendMsg(
              "PublishedFile.SetPlaytimeForControllerConfigs#1",
              (0, n.MD)(Fe, r),
              ze,
              { ePrivilege: 1 },
            );
          }),
          (e.AddChild = function (e, r) {
            return e.SendMsg("PublishedFile.AddChild#1", (0, n.MD)(he, r), Me, {
              ePrivilege: 1,
            });
          }),
          (e.RemoveChild = function (e, r) {
            return e.SendMsg(
              "PublishedFile.RemoveChild#1",
              (0, n.MD)(Re, r),
              Se,
              { ePrivilege: 1 },
            );
          }),
          (e.SetCollectionChildren = function (e, r) {
            return e.SendMsg(
              "PublishedFile.SetCollectionChildren#1",
              (0, n.MD)(We, r),
              je,
              { ePrivilege: 1 },
            );
          }),
          (e.SetSubscriptionListFromCollection = function (e, r) {
            return e.SendMsg(
              "PublishedFile.SetSubscriptionListFromCollection#1",
              (0, n.MD)(Ee, r),
              ve,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserVoteSummary = function (e, r) {
            return e.SendMsg(
              "PublishedFile.GetUserVoteSummary#1",
              (0, n.MD)(Xe, r),
              Ce,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetItemChanges = function (e, r) {
            return e.SendMsg(
              "PublishedFile.GetItemChanges#1",
              (0, n.MD)(Pe, r),
              xe,
              { ePrivilege: 1 },
            );
          }),
          (e.GetContentDescriptors = function (e, r) {
            return e.SendMsg(
              "PublishedFile.GetContentDescriptors#1",
              (0, n.MD)(De, r),
              qe,
              { ePrivilege: 0 },
            );
          }),
          (e.UpdateContentDescriptors = function (e, r) {
            return e.SendMsg(
              "PublishedFile.UpdateContentDescriptors#1",
              (0, n.MD)(Ge, r),
              ke,
              { ePrivilege: 1 },
            );
          });
      })(He || (He = {})),
        (function (e) {
          (e.NotifyFileSubscribedHandler = {
            name: "PublishedFileClient.NotifyFileSubscribed#1",
            request: Le,
          }),
            (e.NotifyFileUnsubscribedHandler = {
              name: "PublishedFileClient.NotifyFileUnsubscribed#1",
              request: Ve,
            }),
            (e.NotifyFileDeletedHandler = {
              name: "PublishedFileClient.NotifyFileDeleted#1",
              request: Ke,
            });
        })(Qe || (Qe = {}));
    },
  },
]);
