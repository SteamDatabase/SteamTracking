/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5024],
  {
    67005: (e, r, t) => {
      t.d(r, { du: () => c, gi: () => f, iR: () => l });
      var i = t(10059),
        n = t(39087),
        a = t(79545),
        s = t(2260);
      const o = i.Message;
      class l extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.language || n.aR(l.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  language: {
                    n: 1,
                    q: !0,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  type: {
                    n: 2,
                    q: !0,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(l.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_UpdateTextFilterDictionary_Notification";
        }
      }
      class c extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.language || n.aR(c.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  language: {
                    n: 1,
                    q: !0,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  type: {
                    n: 2,
                    q: !0,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(c.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetTextFilterDictionary_Request";
        }
      }
      class u extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.dictionary || n.aR(u.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  dictionary: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(u.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetTextFilterDictionary_Response";
        }
      }
      class m extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.language || n.aR(m.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  language: {
                    n: 1,
                    q: !0,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  type: {
                    n: 2,
                    q: !0,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_TextFilterDictionaryChanged_Notification";
        }
      }
      class d extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.pid || n.aR(d.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  pid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(d.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetGameIDForPID_Request";
        }
      }
      class g extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.gameid || n.aR(g.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  gameid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(g.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetGameIDForPID_Response";
        }
      }
      var f;
      !(function (e) {
        (e.UpdateTextFilterDictionaryHandler = {
          name: "SteamEngine.UpdateTextFilterDictionary#1",
          request: l,
        }),
          (e.RegisterForUpdateTextFilterDictionary = function (r, t) {
            return null == (t = t || (0, s.SM)().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : t.RegisterServiceNotificationHandler(
                  e.UpdateTextFilterDictionaryHandler,
                  r,
                );
          }),
          (e.UpdateTextFilterDictionary = function (e, r) {
            return null == (r = r || (0, s.SM)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : r.SendNotification(
                  "SteamEngine.UpdateTextFilterDictionary#1",
                  (0, a.MD)(l, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgUpdateTextFilterDictionary = function (e, r) {
            return null == (r = r || (0, s.SM)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : r.SendNotification(
                  "SteamEngine.UpdateTextFilterDictionary#1",
                  (0, a.MD)(l, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetTextFilterDictionaryHandler = {
            name: "SteamEngine.GetTextFilterDictionary#1",
            request: c,
            response: u,
          }),
          (e.GetTextFilterDictionary = function (e, r) {
            return null == (r = r || (0, s.SM)().GetDefaultTransport())
              ? new Promise((e, r) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    r("Transport Error: no transport is available for request");
                })
              : r.SendMsg(
                  "SteamEngine.GetTextFilterDictionary#1",
                  (0, a.MD)(c, e),
                  u,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgGetTextFilterDictionary = function (e, r) {
            return null == (r = r || (0, s.SM)().GetDefaultTransport())
              ? new Promise((e, r) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    r("Transport Error: no transport is available for request");
                })
              : r.SendMsg(
                  "SteamEngine.GetTextFilterDictionary#1",
                  (0, a.MD)(c, e),
                  u,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyTextFilterDictionaryChangedHandler = {
            name: "SteamEngine.NotifyTextFilterDictionaryChanged#1",
            request: m,
          }),
          (e.RegisterForNotifyTextFilterDictionaryChanged = function (r, t) {
            return null == (t = t || (0, s.SM)().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : t.RegisterServiceNotificationHandler(
                  e.NotifyTextFilterDictionaryChangedHandler,
                  r,
                );
          }),
          (e.NotifyTextFilterDictionaryChanged = function (e, r) {
            return null == (r = r || (0, s.SM)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : r.SendNotification(
                  "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                  (0, a.MD)(m, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyTextFilterDictionaryChanged = function (e, r) {
            return null == (r = r || (0, s.SM)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : r.SendNotification(
                  "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                  (0, a.MD)(m, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetGameIDForPIDHandler = {
            name: "SteamEngine.GetGameIDForPID#1",
            request: d,
            response: g,
          }),
          (e.GetGameIDForPID = function (e, r) {
            return null == (r = r || (0, s.SM)().GetDefaultTransport())
              ? new Promise((e, r) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    r("Transport Error: no transport is available for request");
                })
              : r.SendMsg("SteamEngine.GetGameIDForPID#1", (0, a.MD)(d, e), g, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (e.SendMsgGetGameIDForPID = function (e, r) {
            return null == (r = r || (0, s.SM)().GetDefaultTransport())
              ? new Promise((e, r) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    r("Transport Error: no transport is available for request");
                })
              : r.SendMsg("SteamEngine.GetGameIDForPID#1", (0, a.MD)(d, e), g, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          });
      })(f || (f = {}));
    },
  },
]);
