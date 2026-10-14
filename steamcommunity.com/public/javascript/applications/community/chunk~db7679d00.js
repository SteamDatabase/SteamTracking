/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [1063],
    {
      24544: (ht, je, p) => {
        p.d(je, { s: () => z, Q: () => ft });
        var ke = p(41735),
          $ = p.n(ke),
          Ie = p(71944),
          I = p(14947),
          g = p(72604),
          De = p(99412),
          u = p(35038),
          We = p(76559),
          O = p(75916),
          D = p(3166),
          J = p(36191),
          f = p(80613),
          d = p.n(f),
          s = p(75245),
          S = p(66781),
          $e = Object.defineProperty,
          Ke = (n, e, t) =>
            e in n
              ? $e(n, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (n[e] = t),
          E = (n, e, t) => Ke(n, typeof e != "symbol" ? e + "" : e, t);
        const ue = class b extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              b.prototype.language || s.Sg(b.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    language: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    type: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = s.w0(b.M())), b.sm_mbf;
          }
          toObject(e = !1) {
            return b.toObject(e, this);
          }
          static toObject(e, t) {
            return s.BT(b.M(), e, t);
          }
          static fromObject(e) {
            return s.Uq(b.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new b();
            return b.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return s.zj(b.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            s.i0(b.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_UpdateTextFilterDictionary_Notification";
          }
        };
        E(ue, "sm_m"), E(ue, "sm_mbf");
        let ie = ue;
        const me = class C extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              C.prototype.language || s.Sg(C.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    language: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    type: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = s.w0(C.M())), C.sm_mbf;
          }
          toObject(e = !1) {
            return C.toObject(e, this);
          }
          static toObject(e, t) {
            return s.BT(C.M(), e, t);
          }
          static fromObject(e) {
            return s.Uq(C.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new C();
            return C.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return s.zj(C.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            s.i0(C.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetTextFilterDictionary_Request";
          }
        };
        E(me, "sm_m"), E(me, "sm_mbf");
        let ne = me;
        const ge = class w extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              w.prototype.dictionary || s.Sg(w.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    dictionary: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = s.w0(w.M())), w.sm_mbf;
          }
          toObject(e = !1) {
            return w.toObject(e, this);
          }
          static toObject(e, t) {
            return s.BT(w.M(), e, t);
          }
          static fromObject(e) {
            return s.Uq(w.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new w();
            return w.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return s.zj(w.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            s.i0(w.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetTextFilterDictionary_Response";
          }
        };
        E(ge, "sm_m"), E(ge, "sm_mbf");
        let fe = ge;
        const he = class T extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              T.prototype.language || s.Sg(T.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    language: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    type: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = s.w0(T.M())), T.sm_mbf;
          }
          toObject(e = !1) {
            return T.toObject(e, this);
          }
          static toObject(e, t) {
            return s.BT(T.M(), e, t);
          }
          static fromObject(e) {
            return s.Uq(T.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new T();
            return T.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return s.zj(T.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            s.i0(T.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_TextFilterDictionaryChanged_Notification";
          }
        };
        E(he, "sm_m"), E(he, "sm_mbf");
        let pe = he;
        const Se = class B extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              B.prototype.pid || s.Sg(B.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    pid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = s.w0(B.M())), B.sm_mbf;
          }
          toObject(e = !1) {
            return B.toObject(e, this);
          }
          static toObject(e, t) {
            return s.BT(B.M(), e, t);
          }
          static fromObject(e) {
            return s.Uq(B.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new B();
            return B.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return s.zj(B.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            s.i0(B.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetGameIDForPID_Request";
          }
        };
        E(Se, "sm_m"), E(Se, "sm_mbf");
        let ye = Se;
        const be = class M extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              M.prototype.gameid || s.Sg(M.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    gameid: {
                      n: 1,
                      br: s.qM.readUint64String,
                      bw: s.gp.writeUint64String,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = s.w0(M.M())), M.sm_mbf;
          }
          toObject(e = !1) {
            return M.toObject(e, this);
          }
          static toObject(e, t) {
            return s.BT(M.M(), e, t);
          }
          static fromObject(e) {
            return s.Uq(M.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new M();
            return M.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return s.zj(M.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            s.i0(M.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetGameIDForPID_Response";
          }
        };
        E(be, "sm_m"), E(be, "sm_mbf");
        let Ce = be;
        const we = class R extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              R.prototype.gameid || s.Sg(R.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    gameid: {
                      n: 1,
                      br: s.qM.readUint64String,
                      bw: s.gp.writeUint64String,
                    },
                    should_handle: {
                      n: 2,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = s.w0(R.M())), R.sm_mbf;
          }
          toObject(e = !1) {
            return R.toObject(e, this);
          }
          static toObject(e, t) {
            return s.BT(R.M(), e, t);
          }
          static fromObject(e) {
            return s.Uq(R.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new R();
            return R.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return s.zj(R.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            s.i0(R.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SetOverlayEscapeKeyHandling_Notification";
          }
        };
        E(we, "sm_m"), E(we, "sm_mbf");
        let Te = we;
        const Be = class _ extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _.prototype.search_term || s.Sg(_.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    search_term: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    max_results: {
                      n: 2,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = s.w0(_.M())), _.sm_mbf;
          }
          toObject(e = !1) {
            return _.toObject(e, this);
          }
          static toObject(e, t) {
            return s.BT(_.M(), e, t);
          }
          static fromObject(e) {
            return s.Uq(_.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new _();
            return _.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return s.zj(_.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            s.i0(_.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Request";
          }
        };
        E(Be, "sm_m"), E(Be, "sm_mbf");
        let Me = Be;
        const Re = class F extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              F.prototype.appids || s.Sg(F.M()),
              f.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: s.qM.readUint32,
                      pbr: s.qM.readPackedUint32,
                      bw: s.gp.writeRepeatedUint32,
                    },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = s.w0(F.M())), F.sm_mbf;
          }
          toObject(e = !1) {
            return F.toObject(e, this);
          }
          static toObject(e, t) {
            return s.BT(F.M(), e, t);
          }
          static fromObject(e) {
            return s.Uq(F.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new F();
            return F.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return s.zj(F.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            s.i0(F.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Response";
          }
        };
        E(Re, "sm_m"), E(Re, "sm_mbf");
        let _e = Re;
        var K;
        ((n) => {
          n.UpdateTextFilterDictionaryHandler = {
            name: "SteamEngine.UpdateTextFilterDictionary#1",
            request: ie,
          };
          function e(m, a) {
            return (
              (a = a || (0, S.OI)().GetDefaultHandlerRegistry()),
              a == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : a.RegisterServiceNotificationHandler(
                    n.UpdateTextFilterDictionaryHandler,
                    m,
                  )
            );
          }
          n.RegisterForUpdateTextFilterDictionary = e;
          function t(m, a) {
            return (
              (a = a || (0, S.OI)().GetDefaultTransport()),
              a == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : a.SendNotification(
                    "SteamEngine.UpdateTextFilterDictionary#1",
                    (0, u.I8)(ie, m),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          n.UpdateTextFilterDictionary = t;
          function r(m, a) {
            return (
              (a = a || (0, S.OI)().GetDefaultTransport()),
              a == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : a.SendNotification(
                    "SteamEngine.UpdateTextFilterDictionary#1",
                    (0, u.I8)(ie, m),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (n.SendMsgUpdateTextFilterDictionary = r),
            (n.GetTextFilterDictionaryHandler = {
              name: "SteamEngine.GetTextFilterDictionary#1",
              request: ne,
              response: fe,
            });
          function i(m, a) {
            return (
              (a = a || (0, S.OI)().GetDefaultTransport()),
              a == null
                ? new Promise((re, N) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      N(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : a.SendMsg(
                    "SteamEngine.GetTextFilterDictionary#1",
                    (0, u.I8)(ne, m),
                    fe,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          n.GetTextFilterDictionary = i;
          function o(m, a) {
            return (
              (a = a || (0, S.OI)().GetDefaultTransport()),
              a == null
                ? new Promise((re, N) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      N(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : a.SendMsg(
                    "SteamEngine.GetTextFilterDictionary#1",
                    (0, u.I8)(ne, m),
                    fe,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (n.SendMsgGetTextFilterDictionary = o),
            (n.NotifyTextFilterDictionaryChangedHandler = {
              name: "SteamEngine.NotifyTextFilterDictionaryChanged#1",
              request: pe,
            });
          function l(m, a) {
            return (
              (a = a || (0, S.OI)().GetDefaultHandlerRegistry()),
              a == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : a.RegisterServiceNotificationHandler(
                    n.NotifyTextFilterDictionaryChangedHandler,
                    m,
                  )
            );
          }
          n.RegisterForNotifyTextFilterDictionaryChanged = l;
          function c(m, a) {
            return (
              (a = a || (0, S.OI)().GetDefaultTransport()),
              a == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : a.SendNotification(
                    "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                    (0, u.I8)(pe, m),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          n.NotifyTextFilterDictionaryChanged = c;
          function y(m, a) {
            return (
              (a = a || (0, S.OI)().GetDefaultTransport()),
              a == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : a.SendNotification(
                    "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                    (0, u.I8)(pe, m),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (n.SendMsgNotifyTextFilterDictionaryChanged = y),
            (n.GetGameIDForPIDHandler = {
              name: "SteamEngine.GetGameIDForPID#1",
              request: ye,
              response: Ce,
            });
          function v(m, a) {
            return (
              (a = a || (0, S.OI)().GetDefaultTransport()),
              a == null
                ? new Promise((re, N) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      N(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : a.SendMsg(
                    "SteamEngine.GetGameIDForPID#1",
                    (0, u.I8)(ye, m),
                    Ce,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          n.GetGameIDForPID = v;
          function U(m, a) {
            return (
              (a = a || (0, S.OI)().GetDefaultTransport()),
              a == null
                ? new Promise((re, N) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      N(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : a.SendMsg(
                    "SteamEngine.GetGameIDForPID#1",
                    (0, u.I8)(ye, m),
                    Ce,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (n.SendMsgGetGameIDForPID = U),
            (n.SetOverlayEscapeKeyHandlingHandler = {
              name: "SteamEngine.SetOverlayEscapeKeyHandling#1",
              request: Te,
            });
          function ee(m, a) {
            return (
              (a = a || (0, S.OI)().GetDefaultHandlerRegistry()),
              a == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : a.RegisterServiceNotificationHandler(
                    n.SetOverlayEscapeKeyHandlingHandler,
                    m,
                  )
            );
          }
          n.RegisterForSetOverlayEscapeKeyHandling = ee;
          function te(m, a) {
            return (
              (a = a || (0, S.OI)().GetDefaultTransport()),
              a == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : a.SendNotification(
                    "SteamEngine.SetOverlayEscapeKeyHandling#1",
                    (0, u.I8)(Te, m),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          n.SetOverlayEscapeKeyHandling = te;
          function Ae(m, a) {
            return (
              (a = a || (0, S.OI)().GetDefaultTransport()),
              a == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : a.SendNotification(
                    "SteamEngine.SetOverlayEscapeKeyHandling#1",
                    (0, u.I8)(Te, m),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (n.SendMsgSetOverlayEscapeKeyHandling = Ae),
            (n.SearchAppDataCacheByStoreKeywordsHandler = {
              name: "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
              request: Me,
              response: _e,
            });
          function k(m, a) {
            return (
              (a = a || (0, S.OI)().GetDefaultTransport()),
              a == null
                ? new Promise((re, N) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      N(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : a.SendMsg(
                    "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
                    (0, u.I8)(Me, m),
                    _e,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          n.SearchAppDataCacheByStoreKeywords = k;
          function de(m, a) {
            return (
              (a = a || (0, S.OI)().GetDefaultTransport()),
              a == null
                ? new Promise((re, N) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      N(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : a.SendMsg(
                    "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
                    (0, u.I8)(Me, m),
                    _e,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          n.SendMsgSearchAppDataCacheByStoreKeywords = de;
        })(K || (K = {}));
        var q = p(54963),
          Ve = p(15369),
          se = p(94354),
          ze = p(57589),
          Fe = p(71742);
        const Pe = 0,
          Ye = 1,
          Je = 2,
          pt = 3;
        function St(n) {
          return "unknown EClientExecutionSite ( " + n + " )";
        }
        class j extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return j.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new j();
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new j();
            return j.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "WebUINoResponse";
          }
        }
        var Le = Object.defineProperty,
          Qe = Object.getOwnPropertyDescriptor,
          Xe = (n, e, t) =>
            e in n
              ? Le(n, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (n[e] = t),
          He = (n, e, t, r) => {
            for (
              var i = r > 1 ? void 0 : r ? Qe(e, t) : e, o = n.length - 1, l;
              o >= 0;
              o--
            )
              (l = n[o]) && (i = (r ? l(e, t, i) : l(i)) || i);
            return r && i && Le(e, t, i), i;
          },
          ae = (n, e, t) => Xe(n, typeof e != "symbol" ? e + "" : e, t);
        class xe {
          constructor() {
            ae(this, "m_mapCallbacks", new Map()),
              ae(this, "m_rgRegisteredEMsgs", []),
              ae(this, "m_mapServiceMethodHandlers", new Map()),
              ae(this, "m_rgRegisteredServiceMethodHandlers", []),
              (0, I.Gn)(this);
          }
          DispatchMsgToHandlers(e, t) {
            let r = e.GetEMsg();
            if (r == se.bSr) {
              let i = e.Hdr().target_job_name();
              if (i) {
                let o = this.m_mapServiceMethodHandlers.get(i);
                if (o) {
                  this.DEBUG_LogMessageDispatch(e, o[0]);
                  for (let l of o)
                    try {
                      l.invoke(e, t);
                    } catch (c) {
                      c instanceof Error
                        ? (0, J.aj)().ReportError(c)
                        : console.error(
                            `MessageHandlers failed to dispatch message to handler (${i}): `,
                            c,
                          );
                    }
                  return !0;
                }
              }
            } else {
              let i = this.m_mapCallbacks.get(r);
              if (i) {
                this.DEBUG_LogMessageDispatch(e, i[0]);
                for (let o of i)
                  try {
                    o.invoke(e);
                  } catch (l) {
                    l instanceof Error
                      ? (0, J.aj)().ReportError(l)
                      : console.error(
                          "MessageHandlers failed to dispatch message to handler: ",
                          l,
                        );
                  }
                return !0;
              }
            }
            return !1;
          }
          DEBUG_LogMessageDispatch(e, t) {}
          get emsg_list() {
            return this.m_rgRegisteredEMsgs;
          }
          get servicemethod_list() {
            return this.m_rgRegisteredServiceMethodHandlers;
          }
          AddCallback(e, t, r) {
            let i = this.m_mapCallbacks.get(e);
            return (
              i ||
                ((i = []),
                this.m_mapCallbacks.set(e, i),
                this.m_rgRegisteredEMsgs.push(e)),
              i.push({ invoke: r, msgClass: t }),
              {
                invoke: r,
                unregister: () => {
                  let o = this.m_mapCallbacks.get(e);
                  if (o)
                    for (let l = 0; l < o.length; l++)
                      o[l].invoke == r && (o.splice(l, 1), l--);
                },
              }
            );
          }
          AddServiceMethodHandler(e, t) {
            let r = (i, o) => {
              let l = u.w.InitFromMsg(e.request, i),
                c = u.w.Init(e.response, se.kHd),
                y = t(l, c),
                v = (U) => {
                  c.Hdr().set_eresult(U), o(c);
                };
              y instanceof Promise
                ? y.then(v).catch(() => {
                    v(g.zi);
                  })
                : v(y);
            };
            return (
              this.m_mapServiceMethodHandlers.has(e.name)
                ? console.error("Duplicate registration for method " + e.name)
                : (this.m_mapServiceMethodHandlers.set(e.name, [
                    { invoke: r, msgClass: e.request },
                  ]),
                  this.m_rgRegisteredServiceMethodHandlers.push(e.name)),
              {
                invoke: r,
                unregister: () => {
                  let i = this.m_mapServiceMethodHandlers.get(e.name);
                  if (i)
                    for (let o = 0; o < i.length; o++)
                      i[o].invoke == r && (i.splice(o, 1), o--);
                },
              }
            );
          }
          AddServiceNotificationHandler(e, t) {
            let r = (o, l) => {
                let c = u.w.InitFromMsg(e.request, o);
                t(c);
              },
              i = this.m_mapServiceMethodHandlers.get(e.name);
            return (
              i ||
                ((i = []),
                this.m_mapServiceMethodHandlers.set(e.name, i),
                this.m_rgRegisteredServiceMethodHandlers.push(e.name)),
              i.push({ invoke: r, msgClass: e.request }),
              {
                invoke: r,
                unregister: () => {
                  let o = this.m_mapServiceMethodHandlers.get(e.name);
                  if (o)
                    for (let l = 0; l < o.length; l++)
                      o[l].invoke == r && (o.splice(l, 1), l--);
                },
              }
            );
          }
          RegisterBaseEMessageHandler(e, t) {
            return this.AddCallback(e, void 0, t);
          }
          RegisterEMessageHandler(e, t, r) {
            return this.AddCallback(e, t, (i) => {
              r(u.w.InitFromMsg(t, i));
            });
          }
          RegisterEMessageAction(e, t, r) {
            return this.AddCallback(e, t, (i) => {
              (0, I.h5)(() => {
                r(u.w.InitFromMsg(t, i));
              });
            });
          }
          RegisterServiceNotificationHandler(e, t) {
            return this.AddServiceNotificationHandler(e, t);
          }
          RegisterServiceNotificationHandlerAction(e, t) {
            return this.AddServiceNotificationHandler(e, (r) => {
              let i;
              return (
                (0, I.h5)(() => {
                  i = t(r);
                }),
                i
              );
            });
          }
          RegisterServiceMethodHandler(e, t) {
            return this.AddServiceMethodHandler(e, t);
          }
          RegisterServiceMethodHandlerAction(e, t) {
            return this.AddServiceMethodHandler(e, (r, i) => {
              let o;
              return (
                (0, I.h5)(() => {
                  o = t(r, i);
                }),
                o
              );
            });
          }
        }
        He([I.sH], xe.prototype, "m_rgRegisteredEMsgs", 2),
          He([I.sH], xe.prototype, "m_rgRegisteredServiceMethodHandlers", 2);
        var Ze = Object.defineProperty,
          et = (n, e, t) =>
            e in n
              ? Ze(n, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (n[e] = t),
          Ge = (n, e, t) => et(n, typeof e != "symbol" ? e + "" : e, t);
        const ve = class x extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              x.prototype.auth_key || s.Sg(x.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    auth_key: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = s.w0(x.M())), x.sm_mbf;
          }
          toObject(e = !1) {
            return x.toObject(e, this);
          }
          static toObject(e, t) {
            return s.BT(x.M(), e, t);
          }
          static fromObject(e) {
            return s.Uq(x.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new x();
            return x.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return s.zj(x.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            s.i0(x.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_Authenticate_Request";
          }
        };
        Ge(ve, "sm_m"), Ge(ve, "sm_mbf");
        let oe = ve;
        class P extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
            let t = new (d().BinaryReader)(e),
              r = new P();
            return P.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_Authenticate_Response";
          }
        }
        class L extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return L.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new L();
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new L();
            return L.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_StartShutdown_Notification";
          }
        }
        var Q;
        ((n) => {
          n.AuthenticateHandler = {
            name: "TransportAuth.Authenticate#1",
            request: oe,
            response: P,
          };
          function e(l, c) {
            return (
              (c = c || (0, S.OI)().GetDefaultTransport()),
              c == null
                ? new Promise((y, v) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      v(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : c.SendMsg(
                    "TransportAuth.Authenticate#1",
                    (0, u.I8)(oe, l),
                    P,
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          n.Authenticate = e;
          function t(l, c) {
            return (
              (c = c || (0, S.OI)().GetDefaultTransport()),
              c == null
                ? new Promise((y, v) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      v(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : c.SendMsg(
                    "TransportAuth.Authenticate#1",
                    (0, u.I8)(oe, l),
                    P,
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          (n.SendMsgAuthenticate = t),
            (n.NotifyStartShutdownHandler = {
              name: "TransportAuth.NotifyStartShutdown#1",
              request: L,
            });
          function r(l, c) {
            return (
              (c = c || (0, S.OI)().GetDefaultHandlerRegistry()),
              c == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : c.RegisterServiceNotificationHandler(
                    n.NotifyStartShutdownHandler,
                    l,
                  )
            );
          }
          n.RegisterForNotifyStartShutdown = r;
          function i(l, c) {
            return (
              (c = c || (0, S.OI)().GetDefaultTransport()),
              c == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : c.SendNotification(
                    "TransportAuth.NotifyStartShutdown#1",
                    (0, u.I8)(L, l),
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          n.NotifyStartShutdown = i;
          function o(l, c) {
            return (
              (c = c || (0, S.OI)().GetDefaultTransport()),
              c == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : c.SendNotification(
                    "TransportAuth.NotifyStartShutdown#1",
                    (0, u.I8)(L, l),
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          n.SendMsgNotifyStartShutdown = o;
        })(Q || (Q = {}));
        var tt = p(98609),
          rt = p(13854),
          Ne = Object.defineProperty,
          it = Object.getOwnPropertyDescriptor,
          nt = (n, e, t) =>
            e in n
              ? Ne(n, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (n[e] = t),
          le = (n, e, t, r) => {
            for (
              var i = r > 1 ? void 0 : r ? it(e, t) : e, o = n.length - 1, l;
              o >= 0;
              o--
            )
              (l = n[o]) && (i = (r ? l(e, t, i) : l(i)) || i);
            return r && i && Ne(e, t, i), i;
          },
          W = (n, e, t) => nt(n, typeof e != "symbol" ? e + "" : e, t);
        class X {
          constructor(e, t) {
            W(this, "m_socket", null),
              W(this, "m_sName"),
              W(this, "m_sURL"),
              W(
                this,
                "Log",
                new ze.wd("CWebSocketConnection", () => this.m_sName),
              ),
              W(this, "m_bDisconnectRequested", !1),
              W(this, "m_bConnecting", !1),
              W(this, "m_fnOnMessageHandler"),
              W(this, "m_fnOnCloseHandler"),
              W(this, "m_fnOnReconnectStartHandler"),
              W(this, "m_fnOnReconnectFinishHandler"),
              W(this, "m_nConnectAttemptsMax"),
              W(this, "m_nConnectAttemptTimeoutMs"),
              W(this, "m_bReconnectOnFailure"),
              W(this, "m_nReconnectAttemptTimeoutMs"),
              W(this, "m_nReconnectAttemptsMax");
            var r, i, o, l, c, y, v;
            (this.m_sName = e),
              (this.m_fnOnMessageHandler = t.fnOnMessageHandler),
              (this.m_fnOnCloseHandler = t.fnOnCloseHandler),
              (this.m_fnOnReconnectStartHandler =
                (r = t.fnOnReconnectStartHandler) != null ? r : () => {}),
              (this.m_fnOnReconnectFinishHandler =
                (i = t.fnOnReconnectFinishHandler) != null ? i : () => {}),
              (this.m_nConnectAttemptsMax =
                (o = t.nConnectAttemptsMax) != null ? o : 8),
              (this.m_nConnectAttemptTimeoutMs =
                (l = t.nConnectAttemptTimeoutMs) != null ? l : 1e3),
              (this.m_bReconnectOnFailure =
                (c = t.bReconnectOnFailure) != null ? c : !1),
              (this.m_nReconnectAttemptsMax =
                (y = t.nReconnectAttemptsMax) != null ? y : 3e4),
              (this.m_nReconnectAttemptTimeoutMs =
                (v = t.nReconnectAttemptTimeoutMs) != null ? v : 1e4);
          }
          get name() {
            return this.m_sName;
          }
          async Connect(e) {
            return (
              (this.m_sURL = e),
              this.ConnectWithRetry(
                this.m_sURL,
                this.m_nConnectAttemptsMax,
                this.m_nConnectAttemptTimeoutMs,
              )
            );
          }
          async Reconnect() {
            return this.ConnectWithRetry(
              this.m_sURL,
              this.m_nReconnectAttemptsMax,
              this.m_nReconnectAttemptTimeoutMs,
            );
          }
          GetInterAttemptBackoffMs(e) {
            return (0, rt.OQ)(e, 1, 5) * 1e3;
          }
          async ConnectWithRetry(e, t, r) {
            this.m_bConnecting = !0;
            let i = 0;
            do {
              try {
                const l = await this.ConnectToSocket(e, r);
                if (l.result == g.R) return (this.m_bConnecting = !1), l;
                this.Log.Warning(
                  `connect attempt failed: ${l.result} - ${l.message}`,
                );
              } catch (l) {
                this.Log.Warning(
                  `connect attempt failed: exception ${l.name} - ${l}`,
                );
              }
              const o = this.GetInterAttemptBackoffMs(i);
              this.Log.Info(`connect retry: attempt:${i}/${t} backoff:${o}`),
                await new Promise((l) => setTimeout(l, o)),
                (this.m_socket = null),
                (i += 1);
            } while (i < t);
            return (
              this.Log.Warning(
                `websocket connect retry: limit exceeeded, bailing - ${this.name}`,
              ),
              (this.m_bConnecting = !1),
              this.BShouldReconnect() && this.StartReconnect(),
              { result: g.zi, message: "not ready, exceeded retry count" }
            );
          }
          Disconnect() {
            this.Log.Info("disconnect requested"),
              (this.m_bDisconnectRequested = !0),
              this.m_socket.close();
          }
          PrepareForShutdown() {
            this.Log.Info("shutdown pending"),
              (this.m_bDisconnectRequested = !0);
          }
          BShouldReconnect() {
            return this.m_bConnecting || !this.m_bReconnectOnFailure
              ? !1
              : !this.m_bDisconnectRequested;
          }
          async StartReconnect() {
            if (
              (this.Log.Info("start reconnect"),
              (this.m_socket = null),
              this.m_fnOnReconnectStartHandler({ connection: this }),
              (await this.Reconnect()).result != g.R)
            ) {
              this.Log.Warning("failed to re-connect to websocket after close"),
                this.m_fnOnReconnectFinishHandler({
                  connection: this,
                  eResult: g.zi,
                }),
                this.m_fnOnCloseHandler({
                  connection: this,
                  bError: !0,
                  bIsExpectedToReconnect: !1,
                });
              return;
            }
            this.Log.Info("reconnect successful"),
              this.m_fnOnReconnectFinishHandler({
                connection: this,
                eResult: g.R,
              });
          }
          async ConnectToSocket(e, t) {
            if (this.m_socket != null)
              return this.m_socket.readyState != WebSocket.OPEN
                ? (this.Log.Error(
                    `websocket in an unexpected state: ${this.m_socket.readyState}`,
                  ),
                  { result: g.zi, message: "websocket in an unexpected state" })
                : { result: g.R, message: "ready" };
            try {
              this.m_socket = new WebSocket(e);
            } catch {
              return (
                this.Log.Warning("failed to initialize websocket connection"),
                {
                  result: g.iV,
                  message: "Failed to initialize websocket connection",
                }
              );
            }
            return (
              (this.m_socket.binaryType = "arraybuffer"),
              (this.m_socket.onerror = this.OnSocketError),
              (this.m_socket.onmessage = this.OnSocketMessage),
              (this.m_socket.onopen = this.OnSocketOpen),
              (this.m_socket.onclose = this.OnSocketClose),
              (await this.WaitForSocketOpen(this.m_socket, t))
                ? (this.Log.Info("connection ready"),
                  { result: g.R, message: "ready" })
                : (this.Log.Warning("failed to reach open state"),
                  { result: g.zi, message: "failed to reach open state" })
            );
          }
          async WaitForSocketOpen(e, t) {
            if (e.readyState != WebSocket.CONNECTING)
              return e.readyState == WebSocket.OPEN;
            const r = 100;
            let i = t / r;
            for (; e.readyState == WebSocket.CONNECTING && i > 0; )
              i--, await new Promise((o) => setTimeout(o, r));
            return e.readyState == WebSocket.OPEN;
          }
          BCanSendMessages() {
            return (
              this.m_socket != null &&
              this.m_socket.readyState == WebSocket.OPEN
            );
          }
          OnSocketError(e) {
            this.Log.Warning("websocket error");
          }
          OnSocketOpen(e) {
            this.Log.Info("websocket open");
          }
          OnSocketClose(e) {
            if (this.m_bDisconnectRequested) {
              this.Log.Info("websocket closed"),
                this.m_fnOnCloseHandler({
                  connection: this,
                  bError: !1,
                  bIsExpectedToReconnect: !1,
                });
              return;
            }
            if (this.m_bConnecting) return;
            this.Log.Warning("websocket unexpectedly closed");
            const t = this.BShouldReconnect();
            this.m_fnOnCloseHandler({
              connection: this,
              bError: !0,
              bIsExpectedToReconnect: t,
            }),
              t && this.StartReconnect();
          }
          async OnSocketMessage(e) {
            this.m_fnOnMessageHandler(e.data);
          }
          SendSerializedMessage(e) {
            try {
              return this.m_socket.send(e), g.R;
            } catch {
              return g.zi;
            }
          }
        }
        le([q.oI], X.prototype, "OnSocketError", 1),
          le([q.oI], X.prototype, "OnSocketOpen", 1),
          le([q.oI], X.prototype, "OnSocketClose", 1),
          le([q.oI], X.prototype, "OnSocketMessage", 1);
        var Ue = Object.defineProperty,
          st = Object.getOwnPropertyDescriptor,
          at = (n, e, t) =>
            e in n
              ? Ue(n, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (n[e] = t),
          Z = (n, e, t, r) => {
            for (
              var i = r > 1 ? void 0 : r ? st(e, t) : e, o = n.length - 1, l;
              o >= 0;
              o--
            )
              (l = n[o]) && (i = (r ? l(e, t, i) : l(i)) || i);
            return r && i && Ue(e, t, i), i;
          },
          A = (n, e, t) => at(n, typeof e != "symbol" ? e + "" : e, t);
        const ot = "localhost",
          H = new ze.wd("WebUITransport");
        class V {
          constructor() {
            A(this, "m_iMsgSeq", 1),
              A(this, "m_mapPendingMethodRequests", new Map()),
              A(this, "m_messageHandlers", new xe()),
              A(this, "m_mapServiceCallErrorCount", new Map()),
              A(this, "m_mapConnectionDetails", new Map()),
              A(this, "m_fnOnStatusEventHandler"),
              A(this, "m_fnOnReconnectErrorHandler"),
              A(this, "m_bInitialized", !1),
              A(this, "m_nMaximumMsgSizeBytes", 1024);
          }
          BIsValid() {
            return this.m_bInitialized;
          }
          GetMaximumMsgSizeBytes() {
            return this.m_nMaximumMsgSizeBytes;
          }
          TEST_GetMaximumMsgBodySizeBytes() {
            return (
              this.m_nMaximumMsgSizeBytes -
              this.TEST_GetMsgHeaderEstimatedSizeBytes()
            );
          }
          TEST_GetMsgHeaderEstimatedSizeBytes() {
            return 128;
          }
          TEST_GetExcessivelyLargeBodySize() {
            return 64 * 1024 * 1024;
          }
          ReportError(e) {
            H.Warning(e);
            const t = (0, J.aj)();
            t &&
              t.ReportError(new Error(e), {
                bIncludeMessageInIdentifier: !0,
                cCallsitesToIgnore: 1,
              });
          }
          async Init() {
            if (!tt.TS.IN_CLIENT) return;
            const e = await SteamClient.WebUITransport.GetTransportInfo();
            (this.m_nMaximumMsgSizeBytes = e.nMaximumMsgSizeBytes),
              this.CreateConnection(
                Ye,
                "steamUI",
                e.portSteamUI,
                e.authKeySteamUI,
              ),
              this.CreateConnection(
                Je,
                "clientdll",
                e.portClientdll,
                e.authKeyClientdll,
              ),
              (0, S.OI)().SetDefaultTransport(this),
              (0, S.OI)().SetDefaultHandlerRegistry(this.m_messageHandlers),
              Q.RegisterForNotifyStartShutdown(this.OnStartShutdown);
          }
          get messageHandlers() {
            return this.m_messageHandlers;
          }
          SetStatusEventHandler(e) {
            this.m_fnOnStatusEventHandler = e;
          }
          SetReconnectErrorHandler(e) {
            this.m_fnOnReconnectErrorHandler = e;
          }
          CreateConnection(e, t, r, i) {
            const o = {
                bReconnectOnFailure: !0,
                fnOnMessageHandler: this.OnWebsocketMessage,
                fnOnCloseHandler: this.OnWebsocketClose,
                fnOnReconnectStartHandler: this.OnWebsocketReconnectStart,
                fnOnReconnectFinishHandler: this.OnWebsocketReconnectFinish,
                nConnectAttemptsMax: 8,
                nConnectAttemptTimeoutMs: 1e4,
                nReconnectAttemptsMax: 8,
                nReconnectAttemptTimeoutMs: 1e4,
              },
              l = {
                connection: new X(t, o),
                sUrl: `ws://${ot}:${r}/transportsocket/`,
                sAuthKey: i,
                eClientExecutionSite: e,
              };
            this.m_mapConnectionDetails.set(e, l);
          }
          SendMsg(e, t, r, i) {
            return new Promise((o, l) => {
              var c;
              const y = i.eClientExecutionSite;
              if (y == null || y == Pe) {
                H.Error(`SendMsg: Invalid client execution site: ${y}`),
                  l(`Transport SendMsg: invalid client execution site ${y}`);
                return;
              }
              const v = this.m_mapConnectionDetails.get(y);
              if (v == null) {
                H.Error(
                  `SendMsg: could not find connection for execution site: ${y}`,
                ),
                  l(
                    `Transport SendMsg: could not find connection for execution site ${y}`,
                  );
                return;
              }
              const U = v.connection;
              if (!U.BCanSendMessages()) {
                const k =
                  (c = this.m_mapServiceCallErrorCount.get(e)) != null ? c : 1;
                this.m_mapServiceCallErrorCount.set(e, k + 1);
                const de = `SendMsg: Attempt to send message but socket wasn't ready: ${U.name} - ${e}`;
                k == 1 && this.ReportError(de),
                  H.Warning(de + ` error count: ${k}`),
                  l("Transport SendMsg: socket not ready");
                return;
              }
              const ee = this.m_iMsgSeq++;
              t.SetEMsg(se.bSr),
                t.Hdr().set_target_job_name(e),
                t.Hdr().set_jobid_source("" + ee);
              const te = t.Serialize();
              if (te.byteLength >= this.m_nMaximumMsgSizeBytes) {
                H.Error(
                  `SendMsg: message exceeds maximum size: ${te.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
                );
                const k = u.w.Init(r);
                k.Hdr().set_eresult(g.zi), o(k);
                return;
              }
              if (U.SendSerializedMessage(te) != g.R) {
                H.Error("SendMsg: Failed to send message"),
                  l("Transport SendMsg: failed to send message");
                return;
              }
              this.m_mapPendingMethodRequests.set(ee, {
                m_iSeq: ee,
                m_responseClass: r,
                m_fnCallback: o,
                m_fnError: l,
              });
            });
          }
          SendNotification(e, t, r) {
            var i;
            const o = r.eClientExecutionSite;
            if (o == null || o == Pe)
              return (
                H.Error(
                  `SendNotification: Invalid client execution site: ${o}`,
                ),
                !1
              );
            const l = this.m_mapConnectionDetails.get(o);
            if (l == null)
              return (
                H.Error(
                  `SendNotification: could not find connection for execution site: ${o}`,
                ),
                !1
              );
            const c = l.connection;
            if (!c.BCanSendMessages()) {
              const v =
                (i = this.m_mapServiceCallErrorCount.get(e)) != null ? i : 1;
              this.m_mapServiceCallErrorCount.set(e, v + 1);
              const U = `SendNotification: Attempt to send message but socket wasn't ready: ${c.name} - ${e}`;
              return (
                v == 1 && this.ReportError(U),
                H.Warning(U + ` error count: ${v}`),
                !1
              );
            }
            return (
              t.SetEMsg(se.bSr),
              t.Hdr().set_target_job_name(e),
              c.SendSerializedMessage(t.Serialize()) == g.R
            );
          }
          async ConnectToSite(e) {
            const r = await e.connection.Connect(e.sUrl);
            return r.result != g.R
              ? r
              : (await this.SendAuthMessage(e)).BSuccess()
                ? { result: g.R, message: "connected" }
                : { result: g.zi, message: "client auth failed" };
          }
          async MakeReady() {
            const e = [];
            for (const [r, i] of this.m_mapConnectionDetails)
              e.push(this.ConnectToSite(i));
            const t = await Promise.all(e);
            (this.m_bInitialized = !0), this.DispatchTransportStatusUpdate();
            for (const r of t) if (r.result != g.R) return r;
            return { result: g.R, message: "ready" };
          }
          GetConnectionDetails(e) {
            for (const [t, r] of this.m_mapConnectionDetails)
              if (r.connection === e) return r;
            return (
              H.Error("GetConnectionDetails: failed to identify connection"),
              null
            );
          }
          DispatchTransportStatusUpdate() {
            if (!this.m_fnOnStatusEventHandler) return;
            let e = !0;
            for (const [t, r] of this.m_mapConnectionDetails)
              r.connection.BCanSendMessages() || (e = !1);
            this.m_fnOnStatusEventHandler({ bConnected: e });
          }
          OnWebsocketReconnectStart(e) {
            this.DispatchTransportStatusUpdate();
          }
          OnWebsocketReconnectFinish(e) {
            var t;
            if ((this.DispatchTransportStatusUpdate(), e.eResult != g.R)) {
              H.Warning(
                "OnWebsocketReconnect: Failed to reconnect to steam client",
              ),
                (t = this.m_fnOnReconnectErrorHandler) == null ||
                  t.call(this, {});
              return;
            }
            this.FailAllPendingRequests();
            const r = this.GetConnectionDetails(e.connection);
            r && this.SendAuthMessage(r);
          }
          OnWebsocketClose(e) {
            e.bIsExpectedToReconnect || this.FailAllPendingRequests();
          }
          OnWebsocketMessage(e) {
            const t = new Ve.pV(e),
              r = u.w.InitHeaderFromPacket(t);
            r.Hdr().jobid_target() && r.Hdr().jobid_target() !== De.kFb
              ? this.DispatchMethodResponse(r)
              : this.DispatchNotification(r);
          }
          DispatchMethodResponse(e) {
            const t = parseInt(e.Hdr().jobid_target()),
              r = this.m_mapPendingMethodRequests.get(t);
            if (r == null) {
              (0, Fe.wT)(
                !1,
                "Transport Error: no pending callback for request",
              );
              return;
            }
            (0, Fe.wT)(
              t == r.m_iSeq,
              "Transport Error: mistmatched request sequence",
            ),
              this.m_mapPendingMethodRequests.delete(t);
            const i = u.w.InitFromMsg(r.m_responseClass, e);
            r.m_fnCallback(i);
          }
          DispatchNotification(e) {
            const t = (r) => {
              (0, Fe.wT)(
                !1,
                "Transport Error: A notification should not generate a response",
              );
            };
            this.m_messageHandlers.DispatchMsgToHandlers(e, t);
          }
          FailAllPendingRequests() {
            for (const [e, t] of this.m_mapPendingMethodRequests) {
              this.ReportError(
                `FailAllPendingRequests: forcing failure for request: ${t.m_responseClass.name}`,
              );
              let r = u.w.Init(t.m_responseClass);
              r.Hdr().set_eresult(g.zi), t.m_fnCallback(r);
            }
            this.m_mapPendingMethodRequests.clear();
          }
          async SendAuthMessage(e) {
            const t = Q.AuthenticateHandler.name,
              r = { eClientExecutionSite: e.eClientExecutionSite },
              i = u.w.Init(oe);
            return (
              i.Hdr().set_webui_auth_key(e.sAuthKey),
              await this.SendMsg(t, i, Q.AuthenticateHandler.response, r)
            );
          }
          OnStartShutdown(e) {
            for (const [t, r] of this.m_mapConnectionDetails)
              r.connection.PrepareForShutdown();
            return g.R;
          }
        }
        Z([q.oI], V.prototype, "OnWebsocketReconnectStart", 1),
          Z([q.oI], V.prototype, "OnWebsocketReconnectFinish", 1),
          Z([q.oI], V.prototype, "OnWebsocketClose", 1),
          Z([q.oI], V.prototype, "OnWebsocketMessage", 1),
          Z([q.oI], V.prototype, "OnStartShutdown", 1);
        const lt = new V();
        var ct = p(27066),
          qe = Object.defineProperty,
          dt = Object.getOwnPropertyDescriptor,
          ut = (n, e, t) =>
            e in n
              ? qe(n, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (n[e] = t),
          G = (n, e, t, r) => {
            for (
              var i = r > 1 ? void 0 : r ? dt(e, t) : e, o = n.length - 1, l;
              o >= 0;
              o--
            )
              (l = n[o]) && (i = (r ? l(e, t, i) : l(i)) || i);
            return r && i && qe(e, t, i), i;
          },
          h = (n, e, t) => ut(n, typeof e != "symbol" ? e + "" : e, t);
        function Y() {
          return D.TS.IN_MOBILE ? D.NQ : (0, D.xv)();
        }
        function mt(n) {
          if (n === "") return !1;
          try {
            return new RegExp("\\b(" + n + ")\\b", "ugi"), !0;
          } catch {
            return (
              console.log(
                `'${n}' is an invalid expression, removing from text filter`,
              ),
              !1
            );
          }
        }
        const ce = 15,
          gt = 3600,
          Oe = "(1)";
        class z {
          constructor(e) {
            h(this, "m_WebUIServiceTransport"),
              h(this, "m_unAccountID"),
              h(this, "m_Transport", null),
              h(this, "m_Storage", null),
              h(this, "m_TextFilterPreferences", {
                eTextFilterSetting: O.Bx6.NS,
                bIgnoreFriends: !1,
              }),
              h(this, "m_TextFilterWords"),
              h(this, "m_mapPlayerCache", new Map()),
              h(this, "m_strBannedWords", ""),
              h(this, "m_strProfanityWords", ""),
              h(this, "m_strCleanWords", ""),
              h(this, "m_strBannedPattern", ""),
              h(this, "m_strCleanPattern", ""),
              h(this, "m_bWordListsComplete", !1),
              h(this, "m_bHaveCompleteFilter", !1),
              h(this, "m_regexBannedWords", null),
              h(this, "m_regexCleanWords", null),
              h(this, "m_bShownFilterTip", !1),
              h(this, "m_bInitialized", !1),
              h(this, "m_bFilterChangedWhileLoading", !1),
              h(this, "m_bOngoingLoad", !1),
              h(this, "m_promiseOngoingLoad", null),
              h(this, "m_fnUnregisterDictionaryChanged"),
              h(this, "m_rgUnregisterPlayerNotifications", []),
              h(this, "m_DataAccess"),
              h(this, "m_nLoadLanguagesRetryTimeout"),
              h(this, "m_nLoadLanguagesRetryDelaySec", ce),
              (0, I.Gn)(this);
            let t = new O.B4H();
            (this.m_TextFilterPreferences = {
              eTextFilterSetting: t.text_filter_setting(),
              bIgnoreFriends: t.text_filter_ignore_friends(),
            }),
              (this.m_TextFilterWords = new O.EyI()),
              (this.m_DataAccess = e);
          }
          async Init(e = 0, t = null, r = null, i = null) {
            (this.m_bInitialized = !1),
              (this.m_WebUIServiceTransport = lt),
              (this.m_unAccountID = e),
              (this.m_Transport = t),
              (this.m_Storage = r),
              (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = ""),
              (this.m_bWordListsComplete = !1),
              this.InitSteamEngineLanguages(),
              this.RegisterPlayerNotifications(i),
              await this.LoadFilter(),
              await this.LoadTextFilterPreferences(),
              await this.LoadTextFilterWords(),
              await this.RequestUpdatedSettings(),
              (this.m_nLoadLanguagesRetryDelaySec = ce),
              await this.EnsureFiltersLoaded();
          }
          InitSteamEngineLanguages() {
            var e;
            this.m_WebUIServiceTransport.BIsValid() &&
              ((e = this.m_fnUnregisterDictionaryChanged) == null ||
                e.call(this),
              (this.m_fnUnregisterDictionaryChanged =
                this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
                  K.NotifyTextFilterDictionaryChangedHandler,
                  this.OnTextFilterDictionaryChanged,
                ).unregister),
              this.InitSteamEngineLanguage(D.TS.LANGUAGE),
              D.TS.LANGUAGE !== "english" &&
                this.InitSteamEngineLanguage("english"));
          }
          OnTextFilterDictionaryChanged(e) {
            return (
              !this.m_bInitialized && !this.m_bOngoingLoad
                ? (this.m_bFilterChangedWhileLoading = !0)
                : ((this.m_nLoadLanguagesRetryDelaySec = ce),
                  this.EnsureFiltersLoaded()),
              g.R
            );
          }
          EnsureFiltersLoaded() {
            return this.m_bOngoingLoad && this.m_promiseOngoingLoad
              ? ((this.m_bFilterChangedWhileLoading = !0),
                this.m_promiseOngoingLoad)
              : ((this.m_promiseOngoingLoad = this.InitFiltersWithRetry()),
                this.m_promiseOngoingLoad);
          }
          async InitFiltersWithRetry() {
            this.m_bOngoingLoad = !0;
            try {
              do
                (this.m_bFilterChangedWhileLoading = !1),
                  await this.LoadLanguages(),
                  this.OnFilterDataChanged(),
                  (this.m_bInitialized = !0);
              while (this.m_bFilterChangedWhileLoading);
            } finally {
              (this.m_bOngoingLoad = !1), (this.m_promiseOngoingLoad = null);
            }
          }
          RegisterPlayerNotifications(e) {
            this.m_rgUnregisterPlayerNotifications.forEach((t) => t()),
              (this.m_rgUnregisterPlayerNotifications = []),
              e &&
                this.m_rgUnregisterPlayerNotifications.push(
                  e.RegisterServiceNotificationHandler(
                    O.QAJ.NotifyCommunityPreferencesChangedHandler,
                    (t) => (
                      this.UpdateCommunityPreferences(t.Body().preferences()),
                      this.OnPlayerSettingsChanged(),
                      g.R
                    ),
                  ).unregister,
                  e.RegisterServiceNotificationHandler(
                    O.QAJ.NotifyTextFilterWordsChangedHandler,
                    (t) => (
                      this.UpdateTextFilterWords(t.Body().words()),
                      this.OnPlayerSettingsChanged(),
                      g.R
                    ),
                  ).unregister,
                );
          }
          OnPlayerSettingsChanged() {
            this.m_bInitialized &&
              !this.m_bOngoingLoad &&
              this.OnFilterDataChanged();
          }
          InitSteamEngineLanguage(e) {
            const t = u.w.Init(ie);
            t.Body().set_language(e),
              t.Body().set_type("profanity"),
              K.SendMsgUpdateTextFilterDictionary(
                t,
                this.m_WebUIServiceTransport,
              ),
              t.Body().set_type("banned"),
              K.SendMsgUpdateTextFilterDictionary(
                t,
                this.m_WebUIServiceTransport,
              );
          }
          GetSteamEngineTextFilterDictionary(e, t) {
            const r = u.w.Init(ne);
            return (
              r.Body().set_language(e),
              r.Body().set_type(t),
              K.SendMsgGetTextFilterDictionary(r, this.m_WebUIServiceTransport)
            );
          }
          GetStorageKey(e) {
            return e + "_" + this.m_unAccountID;
          }
          async LoadTextFilterPreferences() {
            if (this.m_Storage) {
              let e = await this.m_Storage.GetObject(
                this.GetStorageKey("CTextFilterStore_TextFilterPreferences"),
              );
              e && (this.m_TextFilterPreferences = e);
            }
          }
          SaveTextFilterPreferences() {
            this.m_Storage &&
              this.m_Storage.StoreObject(
                this.GetStorageKey("CTextFilterStore_TextFilterPreferences"),
                this.m_TextFilterPreferences,
              );
          }
          ObfuscateString(e) {
            try {
              const t = new TextEncoder().encode(Oe + e);
              return Ie.fromByteArray(t);
            } catch {
              return "";
            }
          }
          DeobfuscateString(e) {
            try {
              const t = Ie.toByteArray(e);
              let r = new TextDecoder().decode(t);
              return r.startsWith(Oe)
                ? ((r = r.slice(Oe.length)), r)
                : (console.log(
                    "DeobfuscateString given invalid base64 data, ignoring: " +
                      e,
                  ),
                  "");
            } catch {
              return "";
            }
          }
          async LoadObfuscatedString(e) {
            if (this.m_Storage) {
              let t = await this.m_Storage.GetString(this.GetStorageKey(e));
              if (t) return this.DeobfuscateString(t);
            }
            return null;
          }
          async SaveObfuscatedString(e, t) {
            this.m_Storage &&
              this.m_Storage.StoreString(
                this.GetStorageKey(e),
                this.ObfuscateString(t),
              );
          }
          async LoadTextFilterWords() {
            let e = await this.LoadObfuscatedString(
              "CTextFilterStore_TextFilterWords",
            );
            if (e)
              try {
                this.m_TextFilterWords = O.EyI.fromObject(JSON.parse(e));
              } catch {
                console.warn("Error parsing cached text filter word list", e),
                  (this.m_TextFilterWords = new O.EyI());
              }
          }
          SaveTextFilterWords() {
            this.SaveObfuscatedString(
              "CTextFilterStore_TextFilterWords",
              JSON.stringify(this.m_TextFilterWords.toObject()),
            );
          }
          async LoadFilter() {
            let e = await this.LoadObfuscatedString(
                "CTextFilterStore_strBannedPattern",
              ),
              t = await this.LoadObfuscatedString(
                "CTextFilterStore_strCleanPattern",
              );
            (this.m_bHaveCompleteFilter = e != null && t != null),
              e != null && t != null && this.BRebuildFilter(e, t);
          }
          SaveFilter() {
            this.SaveObfuscatedString(
              "CTextFilterStore_strBannedPattern",
              this.m_strBannedPattern,
            ),
              this.SaveObfuscatedString(
                "CTextFilterStore_strCleanPattern",
                this.m_strCleanPattern,
              );
          }
          async RequestUpdatedSettings() {
            let e = new O.B4H();
            if (this.m_unAccountID !== 0)
              try {
                if (this.m_Transport) {
                  let t = u.w.Init(O.tzK);
                  e = (await O.xtC.GetCommunityPreferences(this.m_Transport, t))
                    .Body()
                    .preferences();
                } else {
                  let t = { sessionid: (0, D.KC)(), origin: Y() };
                  const r = await $().get(
                    D.TS.COMMUNITY_BASE_URL +
                      "textfilter/ajaxgetcommunitypreferences",
                    { params: t, withCredentials: !0 },
                  );
                  e = O.B4H.fromObject(r.data.preferences);
                }
              } catch {}
            if (
              (this.UpdateCommunityPreferences(e),
              e.text_filter_words_revision() !==
                this.m_TextFilterWords.text_filter_words_revision())
            ) {
              let t = new O.EyI();
              if (e.text_filter_words_revision() !== 0)
                try {
                  if (this.m_Transport) {
                    let r = u.w.Init(O.SCE);
                    t = (await O.xtC.GetTextFilterWords(this.m_Transport, r))
                      .Body()
                      .words();
                  } else {
                    let r = { sessionid: (0, D.KC)(), origin: Y() };
                    const i = await $().get(
                      D.TS.COMMUNITY_BASE_URL +
                        "textfilter/ajaxgettextfiltercustomwords",
                      { params: r, withCredentials: !0 },
                    );
                    t = O.EyI.fromObject(i.data.words);
                  }
                } catch {}
              this.UpdateTextFilterWords(t);
            }
          }
          UpdateCommunityPreferences(e) {
            var t;
            let r = !1;
            e.text_filter_setting() !==
              ((t = this.m_TextFilterPreferences) == null
                ? void 0
                : t.eTextFilterSetting) &&
              ((this.m_TextFilterPreferences.eTextFilterSetting =
                e.text_filter_setting()),
              (r = !0)),
              e.text_filter_ignore_friends() !==
                this.m_TextFilterPreferences.bIgnoreFriends &&
                ((this.m_TextFilterPreferences.bIgnoreFriends =
                  e.text_filter_ignore_friends()),
                (r = !0)),
              r && this.SaveTextFilterPreferences();
          }
          get TextFilterPreferences() {
            return this.m_TextFilterPreferences;
          }
          UpdateTextFilterWords(e) {
            (this.m_TextFilterWords = e), this.SaveTextFilterWords();
          }
          async LoadLanguages() {
            (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = ""),
              (this.m_bWordListsComplete = !1),
              this.m_nLoadLanguagesRetryTimeout &&
                (window.clearTimeout(this.m_nLoadLanguagesRetryTimeout),
                (this.m_nLoadLanguagesRetryTimeout = void 0));
            try {
              let e = await this.LoadLanguage(D.TS.LANGUAGE);
              if (
                (D.TS.LANGUAGE !== "english" &&
                  (e = (await this.LoadLanguage("english")) && e),
                !e)
              )
                throw new Error("clean_public dictionary unavailable");
              (this.m_nLoadLanguagesRetryDelaySec = ce),
                (this.m_bWordListsComplete = !0);
            } catch (e) {
              this.m_nLoadLanguagesRetryDelaySec = Math.min(
                this.m_nLoadLanguagesRetryDelaySec * 2,
                gt,
              );
              const t = this.m_nLoadLanguagesRetryDelaySec;
              console.warn("LoadLanguages caught", e, "retry in", t, "seconds"),
                (this.m_nLoadLanguagesRetryTimeout = window.setTimeout(() => {
                  (this.m_nLoadLanguagesRetryTimeout = void 0),
                    this.EnsureFiltersLoaded();
                }, t * 1e3));
            }
          }
          async LoadLanguage(e) {
            let t = "1",
              r = "",
              i = !1;
            if (this.m_WebUIServiceTransport.BIsValid())
              try {
                {
                  const c = await this.GetSteamEngineTextFilterDictionary(
                    e,
                    "banned",
                  );
                  this.m_strBannedWords += c.Body().dictionary();
                }
                {
                  const c = await this.GetSteamEngineTextFilterDictionary(
                    e,
                    "profanity",
                  );
                  this.m_strProfanityWords += c.Body().dictionary();
                }
                i = !0;
              } catch (c) {
                console.warn(
                  "LoadLanguage caught while loading from cache:",
                  c,
                );
              }
            if (!i) {
              r = `${D.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${e}&v=${t}&origin=${Y()}`;
              {
                const c = await $().get(r);
                this.m_strBannedWords += c.data;
              }
              r = `${D.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=${t}&origin=${Y()}`;
              {
                const c = await $().get(r);
                this.m_strProfanityWords += c.data;
              }
            }
            const o = this.m_WebUIServiceTransport.BIsValid(),
              l = "CTextFilterStore_strCleanPublic_" + e;
            r = `${D.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=${t}&origin=${Y()}`;
            try {
              const c = await $().get(r);
              (this.m_strCleanWords += c.data),
                o && this.SaveObfuscatedString(l, c.data);
            } catch (c) {
              console.warn("LoadLanguage caught while loading clean list:", c);
              const y = o ? await this.LoadObfuscatedString(l) : null;
              if (!y) return !1;
              this.m_strCleanWords += y;
            }
            return !0;
          }
          CreatePattern(e) {
            let t = e.filter(function (r) {
              return mt(r);
            });
            return t.length > 0 ? "\\b(" + t.join("|") + ")\\b" : "";
          }
          OnFilterDataChanged() {
            if (!this.m_bWordListsComplete && this.m_bHaveCompleteFilter)
              return;
            let e = new RegExp(/\s*[\r\n]+\s*/g),
              t = [],
              r = [];
            switch (this.m_TextFilterPreferences.eTextFilterSetting) {
              case O.Bx6.C5:
                break;
              case O.Bx6.NS:
                break;
              case O.Bx6.bf:
                t = t.concat(this.m_strBannedWords.split(e));
                break;
              default:
                t = t.concat(
                  this.m_strProfanityWords.split(e),
                  this.m_strBannedWords.split(e),
                );
                break;
            }
            (t = t.concat(
              this.m_TextFilterWords.text_filter_custom_banned_words(),
            )),
              (r = this.m_strCleanWords.split(e)),
              (r = r.concat(
                this.m_TextFilterWords.text_filter_custom_clean_words(),
              ));
            let i = this.CreatePattern(t),
              o = this.CreatePattern(r);
            o != "" && (o = "^(" + o + ")$"),
              this.BRebuildFilter(i, o) &&
                this.m_bWordListsComplete &&
                this.SaveFilter(),
              (this.m_bHaveCompleteFilter = this.m_bWordListsComplete);
          }
          BRebuildFilter(e, t) {
            if (e === this.m_strBannedPattern && t === this.m_strCleanPattern)
              return !1;
            if (
              ((this.m_regexBannedWords = null),
              (this.m_strBannedPattern = e),
              e !== "")
            )
              try {
                this.m_regexBannedWords = new RegExp(e, "ugi");
              } catch (r) {
                console.warn("Couldn't compile textfilter bannedwords regex"),
                  (0, J.aj)().ReportError(
                    new Error(
                      `Couldn't compile textfilter bannedwords regex: ${r}`,
                    ),
                  ),
                  (this.m_strBannedPattern = "");
              }
            if (
              ((this.m_regexCleanWords = null),
              (this.m_strCleanPattern = t),
              t !== "")
            )
              try {
                this.m_regexCleanWords = new RegExp(t, "ugi");
              } catch (r) {
                console.warn("Couldn't compile textfilter cleanwords regex"),
                  (0, J.aj)().ReportError(
                    new Error(
                      `Couldn't compile textfilter cleanwords regex: ${r}`,
                    ),
                  ),
                  (this.m_strCleanPattern = "");
              }
            return !0;
          }
          CreateProfanityReplacement(e) {
            return "\u2665".repeat(e);
          }
          BHasFilter() {
            return this.m_regexBannedWords != null;
          }
          BShownFilterTip() {
            return this.m_bShownFilterTip;
          }
          SetFilterTipShown(e) {
            this.m_bShownFilterTip = e;
          }
          FilterText(e, t) {
            if (!this.m_regexBannedWords) return t;
            let r = 0;
            return (
              typeof e == "string" && e !== ""
                ? (r = new We.b(e).GetAccountID())
                : typeof e == "number" && (r = e),
              !t ||
              r == this.m_unAccountID ||
              (e &&
                this.m_TextFilterPreferences.bIgnoreFriends &&
                this.m_DataAccess.BIsFriend(r))
                ? t
                : t.replace(this.m_regexBannedWords, (i) =>
                    this.m_regexCleanWords &&
                    i.search(this.m_regexCleanWords) == 0
                      ? i
                      : this.CreateProfanityReplacement(i.length),
                  )
            );
          }
        }
        G([I.sH], z.prototype, "m_TextFilterPreferences", 2),
          G([I.sH], z.prototype, "m_mapPlayerCache", 2),
          G([I.sH], z.prototype, "m_regexBannedWords", 2),
          G([I.sH], z.prototype, "m_regexCleanWords", 2),
          G([I.sH], z.prototype, "m_bInitialized", 2),
          G([I.sH], z.prototype, "m_bFilterChangedWhileLoading", 2),
          G([I.sH], z.prototype, "m_bOngoingLoad", 2),
          G([I.XI], z.prototype, "Init", 1),
          G([ct.o], z.prototype, "OnTextFilterDictionaryChanged", 1),
          G([I.XI], z.prototype, "UpdateCommunityPreferences", 1),
          G([I.XI], z.prototype, "BRebuildFilter", 1);
        let Ee;
        function ft() {
          if (!Ee) {
            const n = new Set();
            let e = { sessionid: (0, D.KC)(), origin: Y() };
            $()
              .get(D.TS.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist", {
                params: e,
                withCredentials: !0,
              })
              .then((t) => {
                var r, i;
                for (const o of (i =
                  (r = t.data.friendslist) == null ? void 0 : r.friends) != null
                  ? i
                  : [])
                  (0, De.S$u)(o.efriendrelationship) &&
                    n.add(new We.b(o.ulfriendid).GetAccountID());
              }),
              (Ee = (t) => n.has(t));
          }
          return Ee;
        }
      },
    },
  ]);
})();
