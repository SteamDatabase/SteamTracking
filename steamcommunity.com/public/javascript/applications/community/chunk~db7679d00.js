/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1063],
  {
    49820: (e, t, r) => {
      r.d(t, { s: () => Y, Q: () => Q });
      var n,
        i = r(34629),
        s = r(41735),
        a = r.n(s),
        o = r(71944),
        l = r(14947),
        c = r(37085),
        d = r(22837),
        u = r(56545),
        m = r(17720),
        g = r(78619),
        h = r(78327),
        p = r(45754),
        f = r(81393),
        S = r(80613),
        _ = r.n(S),
        y = r(89068),
        b = r(21920);
      class T extends S.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.language || y.Sg(T.M()),
            S.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  language: { n: 1, br: y.qM.readString, bw: y.gp.writeString },
                  type: { n: 2, br: y.qM.readString, bw: y.gp.writeString },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = y.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (_().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_UpdateTextFilterDictionary_Notification";
        }
      }
      class M extends S.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.language || y.Sg(M.M()),
            S.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  language: { n: 1, br: y.qM.readString, bw: y.gp.writeString },
                  type: { n: 2, br: y.qM.readString, bw: y.gp.writeString },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = y.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (_().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetTextFilterDictionary_Request";
        }
      }
      class B extends S.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.dictionary || y.Sg(B.M()),
            S.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  dictionary: {
                    n: 1,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = y.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (_().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetTextFilterDictionary_Response";
        }
      }
      class w extends S.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.language || y.Sg(w.M()),
            S.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  language: { n: 1, br: y.qM.readString, bw: y.gp.writeString },
                  type: { n: 2, br: y.qM.readString, bw: y.gp.writeString },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = y.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (_().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_TextFilterDictionaryChanged_Notification";
        }
      }
      class C extends S.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.pid || y.Sg(C.M()),
            S.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  pid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = y.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (_().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetGameIDForPID_Request";
        }
      }
      class R extends S.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.gameid || y.Sg(R.M()),
            S.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  gameid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = y.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (_().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetGameIDForPID_Response";
        }
      }
      class x extends S.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.gameid || y.Sg(x.M()),
            S.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  gameid: {
                    n: 1,
                    br: y.qM.readUint64String,
                    bw: y.gp.writeUint64String,
                  },
                  should_handle: {
                    n: 2,
                    br: y.qM.readBool,
                    bw: y.gp.writeBool,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = y.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (_().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_SetOverlayEscapeKeyHandling_Notification";
        }
      }
      class v extends S.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.search_term || y.Sg(v.M()),
            S.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  search_term: {
                    n: 1,
                    br: y.qM.readString,
                    bw: y.gp.writeString,
                  },
                  max_results: {
                    n: 2,
                    br: y.qM.readUint32,
                    bw: y.gp.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = y.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (_().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Request";
        }
      }
      class F extends S.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.appids || y.Sg(F.M()),
            S.Message.initialize(this, e, 0, -1, [1], null);
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
                    br: y.qM.readUint32,
                    pbr: y.qM.readPackedUint32,
                    bw: y.gp.writeRepeatedUint32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = y.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (_().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Response";
        }
      }
      !(function (e) {
        (e.UpdateTextFilterDictionaryHandler = {
          name: "SteamEngine.UpdateTextFilterDictionary#1",
          request: T,
        }),
          (e.RegisterForUpdateTextFilterDictionary = function (t, r) {
            return null == (r = r || (0, b.OI)().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.UpdateTextFilterDictionaryHandler,
                  t,
                );
          }),
          (e.UpdateTextFilterDictionary = function (e, t) {
            return null == (t = t || (0, b.OI)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamEngine.UpdateTextFilterDictionary#1",
                  (0, u.I8)(T, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgUpdateTextFilterDictionary = function (e, t) {
            return null == (t = t || (0, b.OI)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamEngine.UpdateTextFilterDictionary#1",
                  (0, u.I8)(T, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetTextFilterDictionaryHandler = {
            name: "SteamEngine.GetTextFilterDictionary#1",
            request: M,
            response: B,
          }),
          (e.GetTextFilterDictionary = function (e, t) {
            return null == (t = t || (0, b.OI)().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamEngine.GetTextFilterDictionary#1",
                  (0, u.I8)(M, e),
                  B,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgGetTextFilterDictionary = function (e, t) {
            return null == (t = t || (0, b.OI)().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamEngine.GetTextFilterDictionary#1",
                  (0, u.I8)(M, e),
                  B,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyTextFilterDictionaryChangedHandler = {
            name: "SteamEngine.NotifyTextFilterDictionaryChanged#1",
            request: w,
          }),
          (e.RegisterForNotifyTextFilterDictionaryChanged = function (t, r) {
            return null == (r = r || (0, b.OI)().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyTextFilterDictionaryChangedHandler,
                  t,
                );
          }),
          (e.NotifyTextFilterDictionaryChanged = function (e, t) {
            return null == (t = t || (0, b.OI)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                  (0, u.I8)(w, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyTextFilterDictionaryChanged = function (e, t) {
            return null == (t = t || (0, b.OI)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                  (0, u.I8)(w, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetGameIDForPIDHandler = {
            name: "SteamEngine.GetGameIDForPID#1",
            request: C,
            response: R,
          }),
          (e.GetGameIDForPID = function (e, t) {
            return null == (t = t || (0, b.OI)().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg("SteamEngine.GetGameIDForPID#1", (0, u.I8)(C, e), R, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (e.SendMsgGetGameIDForPID = function (e, t) {
            return null == (t = t || (0, b.OI)().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg("SteamEngine.GetGameIDForPID#1", (0, u.I8)(C, e), R, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (e.SetOverlayEscapeKeyHandlingHandler = {
            name: "SteamEngine.SetOverlayEscapeKeyHandling#1",
            request: x,
          }),
          (e.RegisterForSetOverlayEscapeKeyHandling = function (t, r) {
            return null == (r = r || (0, b.OI)().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.SetOverlayEscapeKeyHandlingHandler,
                  t,
                );
          }),
          (e.SetOverlayEscapeKeyHandling = function (e, t) {
            return null == (t = t || (0, b.OI)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamEngine.SetOverlayEscapeKeyHandling#1",
                  (0, u.I8)(x, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgSetOverlayEscapeKeyHandling = function (e, t) {
            return null == (t = t || (0, b.OI)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamEngine.SetOverlayEscapeKeyHandling#1",
                  (0, u.I8)(x, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SearchAppDataCacheByStoreKeywordsHandler = {
            name: "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
            request: v,
            response: F,
          }),
          (e.SearchAppDataCacheByStoreKeywords = function (e, t) {
            return null == (t = t || (0, b.OI)().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
                  (0, u.I8)(v, e),
                  F,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgSearchAppDataCacheByStoreKeywords = function (e, t) {
            return null == (t = t || (0, b.OI)().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
                  (0, u.I8)(v, e),
                  F,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          });
      })(n || (n = {}));
      var I = r(73745),
        E = r(44654),
        O = r(34557),
        W = r(60778);
      S.Message;
      class z {
        constructor() {
          (this.m_mapCallbacks = new Map()),
            (this.m_rgRegisteredEMsgs = []),
            (this.m_mapServiceMethodHandlers = new Map()),
            (this.m_rgRegisteredServiceMethodHandlers = []),
            (0, l.Gn)(this);
        }
        DispatchMsgToHandlers(e, t) {
          let r = e.GetEMsg();
          if (r == O.bSr) {
            let r = e.Hdr().target_job_name();
            if (r) {
              let n = this.m_mapServiceMethodHandlers.get(r);
              if (n) {
                this.DEBUG_LogMessageDispatch(e, n[0]);
                for (let i of n)
                  try {
                    i.invoke(e, t);
                  } catch (e) {
                    e instanceof Error
                      ? (0, p.aj)().ReportError(e)
                      : console.error(
                          `MessageHandlers failed to dispatch message to handler (${r}): `,
                          e,
                        );
                  }
                return !0;
              }
            }
          } else {
            let t = this.m_mapCallbacks.get(r);
            if (t) {
              this.DEBUG_LogMessageDispatch(e, t[0]);
              for (let r of t)
                try {
                  r.invoke(e);
                } catch (e) {
                  e instanceof Error
                    ? (0, p.aj)().ReportError(e)
                    : console.error(
                        "MessageHandlers failed to dispatch message to handler: ",
                        e,
                      );
                }
              return !0;
            }
          }
          return !1;
        }
        DEBUG_LogMessageDispatch(e, t) {
          0;
        }
        get emsg_list() {
          return this.m_rgRegisteredEMsgs;
        }
        get servicemethod_list() {
          return this.m_rgRegisteredServiceMethodHandlers;
        }
        AddCallback(e, t, r) {
          let n = this.m_mapCallbacks.get(e);
          return (
            n ||
              ((n = []),
              this.m_mapCallbacks.set(e, n),
              this.m_rgRegisteredEMsgs.push(e)),
            n.push({ invoke: r, msgClass: t }),
            {
              invoke: r,
              unregister: () => {
                let t = this.m_mapCallbacks.get(e);
                if (t)
                  for (let e = 0; e < t.length; e++)
                    t[e].invoke == r && (t.splice(e, 1), e--);
              },
            }
          );
        }
        AddServiceMethodHandler(e, t) {
          let r = (r, n) => {
            let i = u.w.InitFromMsg(e.request, r),
              s = u.w.Init(e.response, O.kHd),
              a = t(i, s),
              o = (e) => {
                s.Hdr().set_eresult(e), n(s);
              };
            a instanceof Promise
              ? a.then(o).catch(() => {
                  o(c.zi);
                })
              : o(a);
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
                let t = this.m_mapServiceMethodHandlers.get(e.name);
                if (t)
                  for (let e = 0; e < t.length; e++)
                    t[e].invoke == r && (t.splice(e, 1), e--);
              },
            }
          );
        }
        AddServiceNotificationHandler(e, t) {
          let r = (r, n) => {
              let i = u.w.InitFromMsg(e.request, r);
              t(i);
            },
            n = this.m_mapServiceMethodHandlers.get(e.name);
          return (
            n ||
              ((n = []),
              this.m_mapServiceMethodHandlers.set(e.name, n),
              this.m_rgRegisteredServiceMethodHandlers.push(e.name)),
            n.push({ invoke: r, msgClass: e.request }),
            {
              invoke: r,
              unregister: () => {
                let t = this.m_mapServiceMethodHandlers.get(e.name);
                if (t)
                  for (let e = 0; e < t.length; e++)
                    t[e].invoke == r && (t.splice(e, 1), e--);
              },
            }
          );
        }
        RegisterBaseEMessageHandler(e, t) {
          return this.AddCallback(e, void 0, t);
        }
        RegisterEMessageHandler(e, t, r) {
          return this.AddCallback(e, t, (e) => {
            r(u.w.InitFromMsg(t, e));
          });
        }
        RegisterEMessageAction(e, t, r) {
          return this.AddCallback(e, t, (e) => {
            (0, l.h5)(() => {
              r(u.w.InitFromMsg(t, e));
            });
          });
        }
        RegisterServiceNotificationHandler(e, t) {
          return this.AddServiceNotificationHandler(e, t);
        }
        RegisterServiceNotificationHandlerAction(e, t) {
          return this.AddServiceNotificationHandler(e, (e) => {
            let r;
            return (
              (0, l.h5)(() => {
                r = t(e);
              }),
              r
            );
          });
        }
        RegisterServiceMethodHandler(e, t) {
          return this.AddServiceMethodHandler(e, t);
        }
        RegisterServiceMethodHandlerAction(e, t) {
          return this.AddServiceMethodHandler(e, (e, r) => {
            let n;
            return (
              (0, l.h5)(() => {
                n = t(e, r);
              }),
              n
            );
          });
        }
      }
      var D;
      (0, i.Cg)([l.sH], z.prototype, "m_rgRegisteredEMsgs", void 0),
        (0, i.Cg)(
          [l.sH],
          z.prototype,
          "m_rgRegisteredServiceMethodHandlers",
          void 0,
        );
      class H extends S.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.auth_key || y.Sg(H.M()),
            S.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  auth_key: { n: 1, br: y.qM.readString, bw: y.gp.writeString },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = y.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (_().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTransportAuth_Authenticate_Request";
        }
      }
      class k extends S.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), S.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new k();
        }
        static deserializeBinary(e) {
          let t = new (_().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTransportAuth_Authenticate_Response";
        }
      }
      class P extends S.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), S.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (_().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (_().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (_().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTransportAuth_StartShutdown_Notification";
        }
      }
      !(function (e) {
        (e.AuthenticateHandler = {
          name: "TransportAuth.Authenticate#1",
          request: H,
          response: k,
        }),
          (e.Authenticate = function (e, t) {
            return null == (t = t || (0, b.OI)().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg("TransportAuth.Authenticate#1", (0, u.I8)(H, e), k, {
                  ePrivilege: 1,
                  eClientExecutionSite: 3,
                });
          }),
          (e.SendMsgAuthenticate = function (e, t) {
            return null == (t = t || (0, b.OI)().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg("TransportAuth.Authenticate#1", (0, u.I8)(H, e), k, {
                  ePrivilege: 1,
                  eClientExecutionSite: 3,
                });
          }),
          (e.NotifyStartShutdownHandler = {
            name: "TransportAuth.NotifyStartShutdown#1",
            request: P,
          }),
          (e.RegisterForNotifyStartShutdown = function (t, r) {
            return null == (r = r || (0, b.OI)().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyStartShutdownHandler,
                  t,
                );
          }),
          (e.NotifyStartShutdown = function (e, t) {
            return null == (t = t || (0, b.OI)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "TransportAuth.NotifyStartShutdown#1",
                  (0, u.I8)(P, e),
                  { ePrivilege: 1, eClientExecutionSite: 3 },
                );
          }),
          (e.SendMsgNotifyStartShutdown = function (e, t) {
            return null == (t = t || (0, b.OI)().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "TransportAuth.NotifyStartShutdown#1",
                  (0, u.I8)(P, e),
                  { ePrivilege: 1, eClientExecutionSite: 3 },
                );
          });
      })(D || (D = {}));
      var q = r(30470),
        L = r(25489);
      class N {
        constructor(e, t) {
          var r, n, i, s, a, o, l;
          (this.m_socket = null),
            (this.Log = new W.wd("CWebSocketConnection", () => this.m_sName)),
            (this.m_bDisconnectRequested = !1),
            (this.m_bConnecting = !1),
            (this.m_sName = e),
            (this.m_fnOnMessageHandler = t.fnOnMessageHandler),
            (this.m_fnOnCloseHandler = t.fnOnCloseHandler),
            (this.m_fnOnReconnectStartHandler =
              null !== (r = t.fnOnReconnectStartHandler) && void 0 !== r
                ? r
                : () => {}),
            (this.m_fnOnReconnectFinishHandler =
              null !== (n = t.fnOnReconnectFinishHandler) && void 0 !== n
                ? n
                : () => {}),
            (this.m_nConnectAttemptsMax =
              null !== (i = t.nConnectAttemptsMax) && void 0 !== i ? i : 8),
            (this.m_nConnectAttemptTimeoutMs =
              null !== (s = t.nConnectAttemptTimeoutMs) && void 0 !== s
                ? s
                : 1e3),
            (this.m_bReconnectOnFailure =
              null !== (a = t.bReconnectOnFailure) && void 0 !== a && a),
            (this.m_nReconnectAttemptsMax =
              null !== (o = t.nReconnectAttemptsMax) && void 0 !== o ? o : 3e4),
            (this.m_nReconnectAttemptTimeoutMs =
              null !== (l = t.nReconnectAttemptTimeoutMs) && void 0 !== l
                ? l
                : 1e4);
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
          return 1e3 * (0, L.OQ)(e, 1, 5);
        }
        async ConnectWithRetry(e, t, r) {
          this.m_bConnecting = !0;
          let n = 0;
          do {
            try {
              const t = await this.ConnectToSocket(e, r);
              if (t.result == c.R) return (this.m_bConnecting = !1), t;
              this.Log.Warning(
                `connect attempt failed: ${t.result} - ${t.message}`,
              );
            } catch (e) {
              this.Log.Warning(
                `connect attempt failed: exception ${e.name} - ${e}`,
              );
            }
            const i = this.GetInterAttemptBackoffMs(n);
            this.Log.Info(`connect retry: attempt:${n}/${t} backoff:${i}`),
              await new Promise((e) => setTimeout(e, i)),
              (this.m_socket = null),
              (n += 1);
          } while (n < t);
          return (
            this.Log.Warning(
              `websocket connect retry: limit exceeeded, bailing - ${this.name}`,
            ),
            (this.m_bConnecting = !1),
            this.BShouldReconnect() && this.StartReconnect(),
            { result: c.zi, message: "not ready, exceeded retry count" }
          );
        }
        Disconnect() {
          this.Log.Info("disconnect requested"),
            (this.m_bDisconnectRequested = !0),
            this.m_socket.close();
        }
        PrepareForShutdown() {
          this.Log.Info("shutdown pending"), (this.m_bDisconnectRequested = !0);
        }
        BShouldReconnect() {
          return (
            !this.m_bConnecting &&
            !!this.m_bReconnectOnFailure &&
            !this.m_bDisconnectRequested
          );
        }
        async StartReconnect() {
          this.Log.Info("start reconnect"),
            (this.m_socket = null),
            this.m_fnOnReconnectStartHandler({ connection: this });
          if ((await this.Reconnect()).result != c.R)
            return (
              this.Log.Warning("failed to re-connect to websocket after close"),
              this.m_fnOnReconnectFinishHandler({
                connection: this,
                eResult: c.zi,
              }),
              void this.m_fnOnCloseHandler({
                connection: this,
                bError: !0,
                bIsExpectedToReconnect: !1,
              })
            );
          this.Log.Info("reconnect successful"),
            this.m_fnOnReconnectFinishHandler({
              connection: this,
              eResult: c.R,
            });
        }
        async ConnectToSocket(e, t) {
          if (null != this.m_socket)
            return this.m_socket.readyState != WebSocket.OPEN
              ? (this.Log.Error(
                  `websocket in an unexpected state: ${this.m_socket.readyState}`,
                ),
                { result: c.zi, message: "websocket in an unexpected state" })
              : { result: c.R, message: "ready" };
          try {
            this.m_socket = new WebSocket(e);
          } catch (e) {
            return (
              this.Log.Warning("failed to initialize websocket connection"),
              {
                result: c.iV,
                message: "Failed to initialize websocket connection",
              }
            );
          }
          (this.m_socket.binaryType = "arraybuffer"),
            (this.m_socket.onerror = this.OnSocketError),
            (this.m_socket.onmessage = this.OnSocketMessage),
            (this.m_socket.onopen = this.OnSocketOpen),
            (this.m_socket.onclose = this.OnSocketClose);
          return (await this.WaitForSocketOpen(this.m_socket, t))
            ? (this.Log.Info("connection ready"),
              { result: c.R, message: "ready" })
            : (this.Log.Warning("failed to reach open state"),
              { result: c.zi, message: "failed to reach open state" });
        }
        async WaitForSocketOpen(e, t) {
          if (e.readyState != WebSocket.CONNECTING)
            return e.readyState == WebSocket.OPEN;
          let r = t / 100;
          for (; e.readyState == WebSocket.CONNECTING && r > 0; )
            r--, await new Promise((e) => setTimeout(e, 100));
          return e.readyState == WebSocket.OPEN;
        }
        BCanSendMessages() {
          return (
            null != this.m_socket && this.m_socket.readyState == WebSocket.OPEN
          );
        }
        OnSocketError(e) {
          this.Log.Warning("websocket error");
        }
        OnSocketOpen(e) {
          this.Log.Info("websocket open");
        }
        OnSocketClose(e) {
          if (this.m_bDisconnectRequested)
            return (
              this.Log.Info("websocket closed"),
              void this.m_fnOnCloseHandler({
                connection: this,
                bError: !1,
                bIsExpectedToReconnect: !1,
              })
            );
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
            return this.m_socket.send(e), c.R;
          } catch (e) {
            return c.zi;
          }
        }
      }
      (0, i.Cg)([I.oI], N.prototype, "OnSocketError", null),
        (0, i.Cg)([I.oI], N.prototype, "OnSocketOpen", null),
        (0, i.Cg)([I.oI], N.prototype, "OnSocketClose", null),
        (0, i.Cg)([I.oI], N.prototype, "OnSocketMessage", null);
      const A = new W.wd("WebUITransport");
      class G {
        constructor() {
          (this.m_iMsgSeq = 1),
            (this.m_mapPendingMethodRequests = new Map()),
            (this.m_messageHandlers = new z()),
            (this.m_mapServiceCallErrorCount = new Map()),
            (this.m_mapConnectionDetails = new Map()),
            (this.m_bInitialized = !1),
            (this.m_nMaximumMsgSizeBytes = 1024);
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
          return 67108864;
        }
        ReportError(e) {
          A.Warning(e);
          const t = (0, p.aj)();
          t &&
            t.ReportError(new Error(e), {
              bIncludeMessageInIdentifier: !0,
              cCallsitesToIgnore: 1,
            });
        }
        async Init() {
          if (!q.TS.IN_CLIENT) return;
          const e = await SteamClient.WebUITransport.GetTransportInfo();
          (this.m_nMaximumMsgSizeBytes = e.nMaximumMsgSizeBytes),
            this.CreateConnection(
              1,
              "steamUI",
              e.portSteamUI,
              e.authKeySteamUI,
            ),
            this.CreateConnection(
              2,
              "clientdll",
              e.portClientdll,
              e.authKeyClientdll,
            ),
            (0, b.OI)().SetDefaultTransport(this),
            (0, b.OI)().SetDefaultHandlerRegistry(this.m_messageHandlers),
            D.RegisterForNotifyStartShutdown(this.OnStartShutdown);
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
        CreateConnection(e, t, r, n) {
          const i = {
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
            s = {
              connection: new N(t, i),
              sUrl: `ws://localhost:${r}/transportsocket/`,
              sAuthKey: n,
              eClientExecutionSite: e,
            };
          this.m_mapConnectionDetails.set(e, s);
        }
        SendMsg(e, t, r, n) {
          return new Promise((i, s) => {
            var a;
            const o = n.eClientExecutionSite;
            if (null == o || 0 == o)
              return (
                A.Error(`SendMsg: Invalid client execution site: ${o}`),
                void s(`Transport SendMsg: invalid client execution site ${o}`)
              );
            const l = this.m_mapConnectionDetails.get(o);
            if (null == l)
              return (
                A.Error(
                  `SendMsg: could not find connection for execution site: ${o}`,
                ),
                void s(
                  `Transport SendMsg: could not find connection for execution site ${o}`,
                )
              );
            const d = l.connection;
            if (!d.BCanSendMessages()) {
              const t =
                null !== (a = this.m_mapServiceCallErrorCount.get(e)) &&
                void 0 !== a
                  ? a
                  : 1;
              this.m_mapServiceCallErrorCount.set(e, t + 1);
              const r = `SendMsg: Attempt to send message but socket wasn't ready: ${d.name} - ${e}`;
              return (
                1 == t && this.ReportError(r),
                A.Warning(r + ` error count: ${t}`),
                void s("Transport SendMsg: socket not ready")
              );
            }
            const m = this.m_iMsgSeq++;
            t.SetEMsg(O.bSr),
              t.Hdr().set_target_job_name(e),
              t.Hdr().set_jobid_source("" + m);
            const g = t.Serialize();
            if (g.byteLength >= this.m_nMaximumMsgSizeBytes) {
              A.Error(
                `SendMsg: message exceeds maximum size: ${g.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
              );
              const e = u.w.Init(r);
              return e.Hdr().set_eresult(c.zi), void i(e);
            }
            if (d.SendSerializedMessage(g) != c.R)
              return (
                A.Error("SendMsg: Failed to send message"),
                void s("Transport SendMsg: failed to send message")
              );
            this.m_mapPendingMethodRequests.set(m, {
              m_iSeq: m,
              m_responseClass: r,
              m_fnCallback: i,
              m_fnError: s,
            });
          });
        }
        SendNotification(e, t, r) {
          var n;
          const i = r.eClientExecutionSite;
          if (null == i || 0 == i)
            return (
              A.Error(`SendNotification: Invalid client execution site: ${i}`),
              !1
            );
          const s = this.m_mapConnectionDetails.get(i);
          if (null == s)
            return (
              A.Error(
                `SendNotification: could not find connection for execution site: ${i}`,
              ),
              !1
            );
          const a = s.connection;
          if (!a.BCanSendMessages()) {
            const t =
              null !== (n = this.m_mapServiceCallErrorCount.get(e)) &&
              void 0 !== n
                ? n
                : 1;
            this.m_mapServiceCallErrorCount.set(e, t + 1);
            const r = `SendNotification: Attempt to send message but socket wasn't ready: ${a.name} - ${e}`;
            return (
              1 == t && this.ReportError(r),
              A.Warning(r + ` error count: ${t}`),
              !1
            );
          }
          t.SetEMsg(O.bSr), t.Hdr().set_target_job_name(e);
          return a.SendSerializedMessage(t.Serialize()) == c.R;
        }
        async ConnectToSite(e) {
          const t = e.connection,
            r = await t.Connect(e.sUrl);
          if (r.result != c.R) return r;
          return (await this.SendAuthMessage(e)).BSuccess()
            ? { result: c.R, message: "connected" }
            : { result: c.zi, message: "client auth failed" };
        }
        async MakeReady() {
          const e = [];
          for (const [t, r] of this.m_mapConnectionDetails)
            e.push(this.ConnectToSite(r));
          const t = await Promise.all(e);
          (this.m_bInitialized = !0), this.DispatchTransportStatusUpdate();
          for (const e of t) if (e.result != c.R) return e;
          return { result: c.R, message: "ready" };
        }
        GetConnectionDetails(e) {
          for (const [t, r] of this.m_mapConnectionDetails)
            if (r.connection === e) return r;
          return (
            A.Error("GetConnectionDetails: failed to identify connection"), null
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
          if ((this.DispatchTransportStatusUpdate(), e.eResult != c.R))
            return (
              A.Warning(
                "OnWebsocketReconnect: Failed to reconnect to steam client",
              ),
              void (
                null === (t = this.m_fnOnReconnectErrorHandler) ||
                void 0 === t ||
                t.call(this, {})
              )
            );
          this.FailAllPendingRequests();
          const r = this.GetConnectionDetails(e.connection);
          r && this.SendAuthMessage(r);
        }
        OnWebsocketClose(e) {
          e.bIsExpectedToReconnect || this.FailAllPendingRequests();
        }
        OnWebsocketMessage(e) {
          const t = new E.pV(e),
            r = u.w.InitHeaderFromPacket(t);
          r.Hdr().jobid_target() && r.Hdr().jobid_target() !== d.kFb
            ? this.DispatchMethodResponse(r)
            : this.DispatchNotification(r);
        }
        DispatchMethodResponse(e) {
          const t = parseInt(e.Hdr().jobid_target()),
            r = this.m_mapPendingMethodRequests.get(t);
          if (null == r)
            return void (0, f.wT)(
              !1,
              "Transport Error: no pending callback for request",
            );
          (0, f.wT)(
            t == r.m_iSeq,
            "Transport Error: mistmatched request sequence",
          ),
            this.m_mapPendingMethodRequests.delete(t);
          const n = u.w.InitFromMsg(r.m_responseClass, e);
          r.m_fnCallback(n);
        }
        DispatchNotification(e) {
          this.m_messageHandlers.DispatchMsgToHandlers(e, (e) => {
            (0, f.wT)(
              !1,
              "Transport Error: A notification should not generate a response",
            );
          });
        }
        FailAllPendingRequests() {
          for (const [e, t] of this.m_mapPendingMethodRequests) {
            this.ReportError(
              `FailAllPendingRequests: forcing failure for request: ${t.m_responseClass.name}`,
            );
            let e = u.w.Init(t.m_responseClass);
            e.Hdr().set_eresult(c.zi), t.m_fnCallback(e);
          }
          this.m_mapPendingMethodRequests.clear();
        }
        async SendAuthMessage(e) {
          const t = D.AuthenticateHandler.name,
            r = { eClientExecutionSite: e.eClientExecutionSite },
            n = u.w.Init(H);
          n.Hdr().set_webui_auth_key(e.sAuthKey);
          return await this.SendMsg(t, n, D.AuthenticateHandler.response, r);
        }
        OnStartShutdown(e) {
          for (const [e, t] of this.m_mapConnectionDetails)
            t.connection.PrepareForShutdown();
          return c.R;
        }
      }
      (0, i.Cg)([I.oI], G.prototype, "OnWebsocketReconnectStart", null),
        (0, i.Cg)([I.oI], G.prototype, "OnWebsocketReconnectFinish", null),
        (0, i.Cg)([I.oI], G.prototype, "OnWebsocketClose", null),
        (0, i.Cg)([I.oI], G.prototype, "OnWebsocketMessage", null),
        (0, i.Cg)([I.oI], G.prototype, "OnStartShutdown", null);
      const j = new G();
      var U = r(6419);
      function $() {
        return h.TS.IN_MOBILE ? h.NQ : (0, h.xv)();
      }
      const K = "(1)";
      class Y {
        constructor(e) {
          (this.m_Transport = null),
            (this.m_Storage = null),
            (this.m_TextFilterPreferences = {
              eTextFilterSetting: g.Bx6.NS,
              bIgnoreFriends: !1,
            }),
            (this.m_mapPlayerCache = new Map()),
            (this.m_strBannedWords = ""),
            (this.m_strProfanityWords = ""),
            (this.m_strCleanWords = ""),
            (this.m_strBannedPattern = ""),
            (this.m_strCleanPattern = ""),
            (this.m_regexBannedWords = null),
            (this.m_regexCleanWords = null),
            (this.m_bShownFilterTip = !1),
            (this.m_bInitialized = !1),
            (this.m_bFilterChangedWhileLoading = !1),
            (this.m_bOngoingLoad = !1),
            (this.m_nLoadLanguagesRetryTimeout = void 0),
            (0, l.Gn)(this);
          let t = new g.B4H();
          (this.m_TextFilterPreferences = {
            eTextFilterSetting: t.text_filter_setting(),
            bIgnoreFriends: t.text_filter_ignore_friends(),
          }),
            (this.m_TextFilterWords = new g.EyI()),
            (this.m_DataAccess = e);
        }
        async Init(e = 0, t = null, r = null) {
          (this.m_bInitialized = !1),
            (this.m_WebUIServiceTransport = j),
            (this.m_unAccountID = e),
            (this.m_Transport = t),
            (this.m_Storage = r),
            (this.m_strBannedWords = ""),
            (this.m_strProfanityWords = ""),
            (this.m_strCleanWords = ""),
            this.InitSteamEngineLanguages(),
            await this.LoadFilter(),
            await this.LoadTextFilterPreferences(),
            await this.LoadTextFilterWords(),
            await this.RequestUpdatedSettings(),
            await (0, l.z7)(() => !this.m_bOngoingLoad),
            await this.InitFiltersWithRetry();
        }
        InitSteamEngineLanguages() {
          this.m_WebUIServiceTransport.BIsValid() &&
            (this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
              n.NotifyTextFilterDictionaryChangedHandler,
              this.OnTextFilterDictionaryChanged,
            ),
            this.InitSteamEngineLanguage(h.TS.LANGUAGE),
            "english" !== h.TS.LANGUAGE &&
              this.InitSteamEngineLanguage("english"));
        }
        OnTextFilterDictionaryChanged(e) {
          return (
            this.m_bInitialized
              ? this.InitFiltersWithRetry()
              : (this.m_bFilterChangedWhileLoading = !0),
            c.R
          );
        }
        async InitFiltersWithRetry() {
          do {
            (this.m_bFilterChangedWhileLoading = !1),
              (this.m_bInitialized = !1),
              (this.m_bOngoingLoad = !0),
              await this.LoadLanguages(),
              this.OnFilterDataChanged(),
              (this.m_bInitialized = !0);
          } while (this.m_bFilterChangedWhileLoading);
          this.m_bOngoingLoad = !1;
        }
        InitSteamEngineLanguage(e) {
          const t = u.w.Init(T);
          t.Body().set_language(e),
            t.Body().set_type("profanity"),
            n.SendMsgUpdateTextFilterDictionary(
              t,
              this.m_WebUIServiceTransport,
            ),
            t.Body().set_type("banned"),
            n.SendMsgUpdateTextFilterDictionary(
              t,
              this.m_WebUIServiceTransport,
            );
        }
        GetSteamEngineTextFilterDictionary(e, t) {
          const r = u.w.Init(M);
          return (
            r.Body().set_language(e),
            r.Body().set_type(t),
            n.SendMsgGetTextFilterDictionary(r, this.m_WebUIServiceTransport)
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
            const t = new TextEncoder().encode(K + e);
            return o.fromByteArray(t);
          } catch (e) {
            return "";
          }
        }
        DeobfuscateString(e) {
          try {
            const t = o.toByteArray(e);
            let r = new TextDecoder().decode(t);
            return r.startsWith(K)
              ? ((r = r.slice(3)), r)
              : (console.log(
                  "DeobfuscateString given invalid base64 data, ignoring: " + e,
                ),
                "");
          } catch (e) {
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
              this.m_TextFilterWords = g.EyI.fromObject(JSON.parse(e));
            } catch (t) {
              console.warn("Error parsing cached text filter word list", e),
                (this.m_TextFilterWords = new g.EyI());
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
          null != e && null != t && this.BRebuildFilter(e, t);
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
          let e = new g.B4H();
          if (0 !== this.m_unAccountID)
            try {
              if (this.m_Transport) {
                let t = u.w.Init(g.tzK);
                e = (await g.xtC.GetCommunityPreferences(this.m_Transport, t))
                  .Body()
                  .preferences();
              } else {
                let t = { sessionid: (0, h.KC)(), origin: $() };
                const r = await a().get(
                  h.TS.COMMUNITY_BASE_URL +
                    "textfilter/ajaxgetcommunitypreferences",
                  { params: t, withCredentials: !0 },
                );
                e = g.B4H.fromObject(r.data.preferences);
              }
            } catch (e) {}
          if (
            (this.UpdateCommunityPreferences(e),
            e.text_filter_words_revision() !==
              this.m_TextFilterWords.text_filter_words_revision())
          ) {
            let t = new g.EyI();
            if (0 !== e.text_filter_words_revision())
              try {
                if (this.m_Transport) {
                  let e = u.w.Init(g.SCE);
                  t = (await g.xtC.GetTextFilterWords(this.m_Transport, e))
                    .Body()
                    .words();
                } else {
                  let e = { sessionid: (0, h.KC)(), origin: $() };
                  const r = await a().get(
                    h.TS.COMMUNITY_BASE_URL +
                      "textfilter/ajaxgettextfiltercustomwords",
                    { params: e, withCredentials: !0 },
                  );
                  t = g.EyI.fromObject(r.data.words);
                }
              } catch (e) {}
            this.UpdateTextFilterWords(t);
          }
        }
        UpdateCommunityPreferences(e) {
          var t;
          let r = !1;
          e.text_filter_setting() !==
            (null === (t = this.m_TextFilterPreferences) || void 0 === t
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
        async LoadLanguages(e = 15) {
          (this.m_strBannedWords = ""),
            (this.m_strProfanityWords = ""),
            (this.m_strCleanWords = "");
          try {
            await this.LoadLanguage(h.TS.LANGUAGE),
              "english" !== h.TS.LANGUAGE &&
                (await this.LoadLanguage("english"));
          } catch (t) {
            this.m_nLoadLanguagesRetryTimeout &&
              ((0, f.wT)(
                !this.m_nLoadLanguagesRetryTimeout,
                "Got two concurrent calls to TextFilteringStore.LoadLanguages",
              ),
              window.clearTimeout(this.m_nLoadLanguagesRetryTimeout),
              (this.m_nLoadLanguagesRetryTimeout = void 0)),
              (e = Math.min(2 * e, 3600)),
              console.warn("LoadLanguages caught", t, "retry in", e, "seconds"),
              (this.m_nLoadLanguagesRetryTimeout = window.setTimeout(
                async () => {
                  (this.m_nLoadLanguagesRetryTimeout = void 0),
                    await this.LoadLanguages(e),
                    this.OnFilterDataChanged();
                },
                1e3 * e,
              ));
          }
        }
        async LoadLanguage(e) {
          let t = "",
            r = !1;
          if (this.m_WebUIServiceTransport.BIsValid())
            try {
              {
                const t = await this.GetSteamEngineTextFilterDictionary(
                  e,
                  "banned",
                );
                this.m_strBannedWords += t.Body().dictionary();
              }
              {
                const t = await this.GetSteamEngineTextFilterDictionary(
                  e,
                  "profanity",
                );
                this.m_strProfanityWords += t.Body().dictionary();
              }
              r = !0;
            } catch (e) {
              console.warn("LoadLanguage caught while loading from cache:", e);
            }
          if (!r) {
            t = `${h.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${e}&v=1&origin=${$()}`;
            {
              const e = await a().get(t);
              this.m_strBannedWords += e.data;
            }
            t = `${h.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=1&origin=${$()}`;
            {
              const e = await a().get(t);
              this.m_strProfanityWords += e.data;
            }
          }
          t = `${h.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=1&origin=${$()}`;
          {
            const e = await a().get(t);
            this.m_strCleanWords += e.data;
          }
        }
        CreatePattern(e) {
          let t = e.filter(function (e) {
            return (function (e) {
              if ("" === e) return !1;
              try {
                return new RegExp("\\b(" + e + ")\\b", "ugi"), !0;
              } catch (t) {
                return (
                  console.log(
                    `'${e}' is an invalid expression, removing from text filter`,
                  ),
                  !1
                );
              }
            })(e);
          });
          return t.length > 0 ? "\\b(" + t.join("|") + ")\\b" : "";
        }
        OnFilterDataChanged() {
          let e = new RegExp(/\s*[\r\n]+\s*/g),
            t = [],
            r = [];
          switch (this.m_TextFilterPreferences.eTextFilterSetting) {
            case g.Bx6.C5:
            case g.Bx6.NS:
              break;
            case g.Bx6.bf:
              t = t.concat(this.m_strBannedWords.split(e));
              break;
            default:
              t = t.concat(
                this.m_strProfanityWords.split(e),
                this.m_strBannedWords.split(e),
              );
          }
          (t = t.concat(
            this.m_TextFilterWords.text_filter_custom_banned_words(),
          )),
            (r = this.m_strCleanWords.split(e)),
            (r = r.concat(
              this.m_TextFilterWords.text_filter_custom_clean_words(),
            ));
          let n = this.CreatePattern(t),
            i = this.CreatePattern(r);
          "" != i && (i = "^(" + i + ")$"),
            this.BRebuildFilter(n, i) && this.SaveFilter();
        }
        BRebuildFilter(e, t) {
          if (e === this.m_strBannedPattern && t === this.m_strCleanPattern)
            return !1;
          if (
            ((this.m_regexBannedWords = null),
            (this.m_strBannedPattern = e),
            "" !== e)
          )
            try {
              this.m_regexBannedWords = new RegExp(e, "ugi");
            } catch (e) {
              console.warn("Couldn't compile textfilter bannedwords regex"),
                (0, p.aj)().ReportError(
                  new Error(
                    `Couldn't compile textfilter bannedwords regex: ${e}`,
                  ),
                ),
                (this.m_strBannedPattern = "");
            }
          if (
            ((this.m_regexCleanWords = null),
            (this.m_strCleanPattern = t),
            "" !== t)
          )
            try {
              this.m_regexCleanWords = new RegExp(t, "ugi");
            } catch (e) {
              console.warn("Couldn't compile textfilter cleanwords regex"),
                (0, p.aj)().ReportError(
                  new Error(
                    `Couldn't compile textfilter cleanwords regex: ${e}`,
                  ),
                ),
                (this.m_strCleanPattern = "");
            }
          return !0;
        }
        CreateProfanityReplacement(e) {
          return "♥".repeat(e);
        }
        BHasFilter() {
          return null != this.m_regexBannedWords;
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
          if ("string" == typeof e && "" !== e) {
            r = new m.b(e).GetAccountID();
          } else "number" == typeof e && (r = e);
          return !t ||
            r == this.m_unAccountID ||
            (e &&
              this.m_TextFilterPreferences.bIgnoreFriends &&
              this.m_DataAccess.BIsFriend(r))
            ? t
            : t.replace(this.m_regexBannedWords, (e) =>
                this.m_regexCleanWords && 0 == e.search(this.m_regexCleanWords)
                  ? e
                  : this.CreateProfanityReplacement(e.length),
              );
        }
      }
      let V;
      function Q() {
        if (!V) {
          const e = new Set();
          let t = { sessionid: (0, h.KC)(), origin: $() };
          a()
            .get(h.TS.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist", {
              params: t,
              withCredentials: !0,
            })
            .then((t) => {
              var r, n;
              for (const i of null !==
                (n =
                  null === (r = t.data.friendslist) || void 0 === r
                    ? void 0
                    : r.friends) && void 0 !== n
                ? n
                : [])
                (0, d.S$u)(i.efriendrelationship) &&
                  e.add(new m.b(i.ulfriendid).GetAccountID());
            }),
            (V = (t) => e.has(t));
        }
        return V;
      }
      (0, i.Cg)([l.sH], Y.prototype, "m_TextFilterPreferences", void 0),
        (0, i.Cg)([l.sH], Y.prototype, "m_mapPlayerCache", void 0),
        (0, i.Cg)([l.sH], Y.prototype, "m_regexBannedWords", void 0),
        (0, i.Cg)([l.sH], Y.prototype, "m_regexCleanWords", void 0),
        (0, i.Cg)([l.sH], Y.prototype, "m_bInitialized", void 0),
        (0, i.Cg)([l.sH], Y.prototype, "m_bFilterChangedWhileLoading", void 0),
        (0, i.Cg)([l.sH], Y.prototype, "m_bOngoingLoad", void 0),
        (0, i.Cg)([l.XI], Y.prototype, "Init", null),
        (0, i.Cg)([U.o], Y.prototype, "OnTextFilterDictionaryChanged", null),
        (0, i.Cg)([l.XI], Y.prototype, "UpdateCommunityPreferences", null),
        (0, i.Cg)([l.XI], Y.prototype, "BRebuildFilter", null);
    },
  },
]);
