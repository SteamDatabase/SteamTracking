/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [10177],
  {
    49820: (e, t, r) => {
      r.d(t, { s: () => V, Q: () => X });
      var n,
        i = r(34629),
        s = r(41735),
        a = r.n(s),
        o = r(71944),
        l = r(14947),
        c = r(37085),
        d = r(22837),
        m = r(56545),
        u = r(17720),
        g = r(42457),
        h = r(78327),
        p = r(49419),
        f = r(81393),
        _ = r(80613),
        S = r.n(_),
        y = r(89068),
        b = r(21920);
      class T extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.language || y.Sg(T.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
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
          let t = new (S().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_UpdateTextFilterDictionary_Notification";
        }
      }
      class M extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.language || y.Sg(M.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
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
          let t = new (S().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetTextFilterDictionary_Request";
        }
      }
      class B extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.dictionary || y.Sg(B.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
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
          let t = new (S().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetTextFilterDictionary_Response";
        }
      }
      class C extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.language || y.Sg(C.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  language: { n: 1, br: y.qM.readString, bw: y.gp.writeString },
                  type: { n: 2, br: y.qM.readString, bw: y.gp.writeString },
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
          let t = new (S().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_TextFilterDictionaryChanged_Notification";
        }
      }
      class w extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.pid || y.Sg(w.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  pid: { n: 1, br: y.qM.readUint32, bw: y.gp.writeUint32 },
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
          let t = new (S().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetGameIDForPID_Request";
        }
      }
      class R extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.gameid || y.Sg(R.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
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
          let t = new (S().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetGameIDForPID_Response";
        }
      }
      class v extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.gameid || y.Sg(v.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
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
          let t = new (S().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_SetOverlayEscapeKeyHandling_Notification";
        }
      }
      class x extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.search_term || y.Sg(x.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
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
          let t = new (S().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Request";
        }
      }
      class F extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.appids || y.Sg(F.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
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
          let t = new (S().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
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
                  (0, m.I8)(T, e),
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
                  (0, m.I8)(T, e),
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
                  (0, m.I8)(M, e),
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
                  (0, m.I8)(M, e),
                  B,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyTextFilterDictionaryChangedHandler = {
            name: "SteamEngine.NotifyTextFilterDictionaryChanged#1",
            request: C,
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
                  (0, m.I8)(C, e),
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
                  (0, m.I8)(C, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetGameIDForPIDHandler = {
            name: "SteamEngine.GetGameIDForPID#1",
            request: w,
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
              : t.SendMsg("SteamEngine.GetGameIDForPID#1", (0, m.I8)(w, e), R, {
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
              : t.SendMsg("SteamEngine.GetGameIDForPID#1", (0, m.I8)(w, e), R, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (e.SetOverlayEscapeKeyHandlingHandler = {
            name: "SteamEngine.SetOverlayEscapeKeyHandling#1",
            request: v,
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
                  (0, m.I8)(v, e),
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
                  (0, m.I8)(v, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SearchAppDataCacheByStoreKeywordsHandler = {
            name: "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
            request: x,
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
                  (0, m.I8)(x, e),
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
                  (0, m.I8)(x, e),
                  F,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          });
      })(n || (n = {}));
      var I = r(84933),
        O = r(44654),
        E = r(34557),
        W = r(60778);
      _.Message;
      class z {
        constructor() {
          (0, l.Gn)(this);
        }
        m_mapCallbacks = new Map();
        m_rgRegisteredEMsgs = [];
        m_mapServiceMethodHandlers = new Map();
        m_rgRegisteredServiceMethodHandlers = [];
        DispatchMsgToHandlers(e, t) {
          let r = e.GetEMsg();
          if (r == E.bSr) {
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
            let i = m.w.InitFromMsg(e.request, r),
              s = m.w.Init(e.response, E.kHd),
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
              let i = m.w.InitFromMsg(e.request, r);
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
            r(m.w.InitFromMsg(t, e));
          });
        }
        RegisterEMessageAction(e, t, r) {
          return this.AddCallback(e, t, (e) => {
            (0, l.h5)(() => {
              r(m.w.InitFromMsg(t, e));
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
      (0, i.Cg)([l.sH], z.prototype, "m_rgRegisteredEMsgs", void 0),
        (0, i.Cg)(
          [l.sH],
          z.prototype,
          "m_rgRegisteredServiceMethodHandlers",
          void 0,
        );
      class D extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.auth_key || y.Sg(D.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  auth_key: { n: 1, br: y.qM.readString, bw: y.gp.writeString },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = y.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return y.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return y.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTransportAuth_Authenticate_Request";
        }
      }
      class H extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new H();
        }
        static deserializeBinary(e) {
          let t = new (S().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTransportAuth_Authenticate_Response";
        }
      }
      class k extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (S().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (S().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (S().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTransportAuth_StartShutdown_Notification";
        }
      }
      var P;
      !(function (e) {
        (e.AuthenticateHandler = {
          name: "TransportAuth.Authenticate#1",
          request: D,
          response: H,
        }),
          (e.Authenticate = function (e, t) {
            return null == (t = t || (0, b.OI)().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg("TransportAuth.Authenticate#1", (0, m.I8)(D, e), H, {
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
              : t.SendMsg("TransportAuth.Authenticate#1", (0, m.I8)(D, e), H, {
                  ePrivilege: 1,
                  eClientExecutionSite: 3,
                });
          }),
          (e.NotifyStartShutdownHandler = {
            name: "TransportAuth.NotifyStartShutdown#1",
            request: k,
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
                  (0, m.I8)(k, e),
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
                  (0, m.I8)(k, e),
                  { ePrivilege: 1, eClientExecutionSite: 3 },
                );
          });
      })(P || (P = {}));
      var L = r(30470),
        q = r(25489);
      class A {
        m_socket = null;
        m_sName;
        m_sURL;
        Log = new W.wd("CWebSocketConnection", () => this.m_sName);
        m_bDisconnectRequested = !1;
        m_bConnecting = !1;
        m_fnOnMessageHandler;
        m_fnOnCloseHandler;
        m_fnOnReconnectStartHandler;
        m_fnOnReconnectFinishHandler;
        m_nConnectAttemptsMax;
        m_nConnectAttemptTimeoutMs;
        m_bReconnectOnFailure;
        m_nReconnectAttemptTimeoutMs;
        m_nReconnectAttemptsMax;
        constructor(e, t) {
          (this.m_sName = e),
            (this.m_fnOnMessageHandler = t.fnOnMessageHandler),
            (this.m_fnOnCloseHandler = t.fnOnCloseHandler),
            (this.m_fnOnReconnectStartHandler =
              t.fnOnReconnectStartHandler ?? (() => {})),
            (this.m_fnOnReconnectFinishHandler =
              t.fnOnReconnectFinishHandler ?? (() => {})),
            (this.m_nConnectAttemptsMax = t.nConnectAttemptsMax ?? 8),
            (this.m_nConnectAttemptTimeoutMs =
              t.nConnectAttemptTimeoutMs ?? 1e3),
            (this.m_bReconnectOnFailure = t.bReconnectOnFailure ?? !1),
            (this.m_nReconnectAttemptsMax = t.nReconnectAttemptsMax ?? 3e4),
            (this.m_nReconnectAttemptTimeoutMs =
              t.nReconnectAttemptTimeoutMs ?? 1e4);
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
          return 1e3 * (0, q.OQ)(e, 1, 5);
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
      (0, i.Cg)([I.oI], A.prototype, "OnSocketError", null),
        (0, i.Cg)([I.oI], A.prototype, "OnSocketOpen", null),
        (0, i.Cg)([I.oI], A.prototype, "OnSocketClose", null),
        (0, i.Cg)([I.oI], A.prototype, "OnSocketMessage", null);
      const N = new W.wd("WebUITransport");
      class G {
        m_iMsgSeq = 1;
        m_mapPendingMethodRequests = new Map();
        m_messageHandlers = new z();
        m_mapServiceCallErrorCount = new Map();
        m_mapConnectionDetails = new Map();
        m_fnOnStatusEventHandler;
        m_fnOnReconnectErrorHandler;
        m_bInitialized = !1;
        m_nMaximumMsgSizeBytes = 1024;
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
          N.Warning(e);
          const t = (0, p.aj)();
          t &&
            t.ReportError(new Error(e), {
              bIncludeMessageInIdentifier: !0,
              cCallsitesToIgnore: 1,
            });
        }
        async Init() {
          if (!L.TS.IN_CLIENT) return;
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
            P.RegisterForNotifyStartShutdown(this.OnStartShutdown);
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
              connection: new A(t, i),
              sUrl: `ws://localhost:${r}/transportsocket/`,
              sAuthKey: n,
              eClientExecutionSite: e,
            };
          this.m_mapConnectionDetails.set(e, s);
        }
        SendMsg(e, t, r, n) {
          return new Promise((i, s) => {
            const a = n.eClientExecutionSite;
            if (null == a || 0 == a)
              return (
                N.Error(`SendMsg: Invalid client execution site: ${a}`),
                void s(`Transport SendMsg: invalid client execution site ${a}`)
              );
            const o = this.m_mapConnectionDetails.get(a);
            if (null == o)
              return (
                N.Error(
                  `SendMsg: could not find connection for execution site: ${a}`,
                ),
                void s(
                  `Transport SendMsg: could not find connection for execution site ${a}`,
                )
              );
            const l = o.connection;
            if (!l.BCanSendMessages()) {
              const t = this.m_mapServiceCallErrorCount.get(e) ?? 1;
              this.m_mapServiceCallErrorCount.set(e, t + 1);
              const r = `SendMsg: Attempt to send message but socket wasn't ready: ${l.name} - ${e}`;
              return (
                1 == t && this.ReportError(r),
                N.Warning(r + ` error count: ${t}`),
                void s("Transport SendMsg: socket not ready")
              );
            }
            const d = this.m_iMsgSeq++;
            t.SetEMsg(E.bSr),
              t.Hdr().set_target_job_name(e),
              t.Hdr().set_jobid_source("" + d);
            const u = t.Serialize();
            if (u.byteLength >= this.m_nMaximumMsgSizeBytes) {
              N.Error(
                `SendMsg: message exceeds maximum size: ${u.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
              );
              const e = m.w.Init(r);
              return e.Hdr().set_eresult(c.zi), void i(e);
            }
            if (l.SendSerializedMessage(u) != c.R)
              return (
                N.Error("SendMsg: Failed to send message"),
                void s("Transport SendMsg: failed to send message")
              );
            this.m_mapPendingMethodRequests.set(d, {
              m_iSeq: d,
              m_responseClass: r,
              m_fnCallback: i,
              m_fnError: s,
            });
          });
        }
        SendNotification(e, t, r) {
          const n = r.eClientExecutionSite;
          if (null == n || 0 == n)
            return (
              N.Error(`SendNotification: Invalid client execution site: ${n}`),
              !1
            );
          const i = this.m_mapConnectionDetails.get(n);
          if (null == i)
            return (
              N.Error(
                `SendNotification: could not find connection for execution site: ${n}`,
              ),
              !1
            );
          const s = i.connection;
          if (!s.BCanSendMessages()) {
            const t = this.m_mapServiceCallErrorCount.get(e) ?? 1;
            this.m_mapServiceCallErrorCount.set(e, t + 1);
            const r = `SendNotification: Attempt to send message but socket wasn't ready: ${s.name} - ${e}`;
            return (
              1 == t && this.ReportError(r),
              N.Warning(r + ` error count: ${t}`),
              !1
            );
          }
          t.SetEMsg(E.bSr), t.Hdr().set_target_job_name(e);
          return s.SendSerializedMessage(t.Serialize()) == c.R;
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
            N.Error("GetConnectionDetails: failed to identify connection"), null
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
          if ((this.DispatchTransportStatusUpdate(), e.eResult != c.R))
            return (
              N.Warning(
                "OnWebsocketReconnect: Failed to reconnect to steam client",
              ),
              void this.m_fnOnReconnectErrorHandler?.({})
            );
          this.FailAllPendingRequests();
          const t = this.GetConnectionDetails(e.connection);
          t && this.SendAuthMessage(t);
        }
        OnWebsocketClose(e) {
          e.bIsExpectedToReconnect || this.FailAllPendingRequests();
        }
        OnWebsocketMessage(e) {
          const t = new O.pV(e),
            r = m.w.InitHeaderFromPacket(t);
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
          const n = m.w.InitFromMsg(r.m_responseClass, e);
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
            let e = m.w.Init(t.m_responseClass);
            e.Hdr().set_eresult(c.zi), t.m_fnCallback(e);
          }
          this.m_mapPendingMethodRequests.clear();
        }
        async SendAuthMessage(e) {
          const t = P.AuthenticateHandler.name,
            r = { eClientExecutionSite: e.eClientExecutionSite },
            n = m.w.Init(D);
          n.Hdr().set_webui_auth_key(e.sAuthKey);
          return await this.SendMsg(t, n, P.AuthenticateHandler.response, r);
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
      const U = new G();
      var j = r(6419);
      function $() {
        return h.TS.IN_MOBILE ? h.NQ : (0, h.xv)();
      }
      const K = "(1)";
      class V {
        m_WebUIServiceTransport;
        m_unAccountID;
        m_Transport = null;
        m_Storage = null;
        m_TextFilterPreferences = {
          eTextFilterSetting: g.Bx6.NS,
          bIgnoreFriends: !1,
        };
        m_TextFilterWords;
        m_mapPlayerCache = new Map();
        m_strBannedWords = "";
        m_strProfanityWords = "";
        m_strCleanWords = "";
        m_strBannedPattern = "";
        m_strCleanPattern = "";
        m_regexBannedWords = null;
        m_regexCleanWords = null;
        m_bShownFilterTip = !1;
        m_bInitialized = !1;
        m_bFilterChangedWhileLoading = !1;
        m_bOngoingLoad = !1;
        m_DataAccess;
        constructor(e) {
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
            (this.m_WebUIServiceTransport = U),
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
          const t = m.w.Init(T);
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
          const r = m.w.Init(M);
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
            return o.iI(t);
          } catch (e) {
            return "";
          }
        }
        DeobfuscateString(e) {
          try {
            const t = o.bg(e);
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
                let t = m.w.Init(g.tzK);
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
                  let e = m.w.Init(g.SCE);
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
          let t = !1;
          e.text_filter_setting() !==
            this.m_TextFilterPreferences?.eTextFilterSetting &&
            ((this.m_TextFilterPreferences.eTextFilterSetting =
              e.text_filter_setting()),
            (t = !0)),
            e.text_filter_ignore_friends() !==
              this.m_TextFilterPreferences.bIgnoreFriends &&
              ((this.m_TextFilterPreferences.bIgnoreFriends =
                e.text_filter_ignore_friends()),
              (t = !0)),
            t && this.SaveTextFilterPreferences();
        }
        get TextFilterPreferences() {
          return this.m_TextFilterPreferences;
        }
        UpdateTextFilterWords(e) {
          (this.m_TextFilterWords = e), this.SaveTextFilterWords();
        }
        m_nLoadLanguagesRetryTimeout = void 0;
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
            r = new u.b(e).GetAccountID();
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
      let Y;
      function X() {
        if (!Y) {
          const e = new Set();
          let t = { sessionid: (0, h.KC)(), origin: $() };
          a()
            .get(h.TS.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist", {
              params: t,
              withCredentials: !0,
            })
            .then((t) => {
              for (const r of t.data.friendslist?.friends ?? [])
                (0, d.S$u)(r.efriendrelationship) &&
                  e.add(new u.b(r.ulfriendid).GetAccountID());
            }),
            (Y = (t) => e.has(t));
        }
        return Y;
      }
      (0, i.Cg)([l.sH], V.prototype, "m_TextFilterPreferences", void 0),
        (0, i.Cg)([l.sH], V.prototype, "m_mapPlayerCache", void 0),
        (0, i.Cg)([l.sH], V.prototype, "m_regexBannedWords", void 0),
        (0, i.Cg)([l.sH], V.prototype, "m_regexCleanWords", void 0),
        (0, i.Cg)([l.sH], V.prototype, "m_bInitialized", void 0),
        (0, i.Cg)([l.sH], V.prototype, "m_bFilterChangedWhileLoading", void 0),
        (0, i.Cg)([l.sH], V.prototype, "m_bOngoingLoad", void 0),
        (0, i.Cg)([l.XI], V.prototype, "Init", null),
        (0, i.Cg)([j.o], V.prototype, "OnTextFilterDictionaryChanged", null),
        (0, i.Cg)([l.XI], V.prototype, "UpdateCommunityPreferences", null),
        (0, i.Cg)([l.XI], V.prototype, "BRebuildFilter", null);
    },
    60383: (e, t, r) => {
      r.d(t, { J: () => c });
      var n = r(34629),
        i = r(7850),
        s = r(76217),
        a = r(90626),
        o = r(56011),
        l = r(84933);
      class c extends a.Component {
        static GetScrollableClassname() {
          return "vt-scrollable";
        }
        m_observer = null;
        m_refElement = a.createRef();
        m_elTracked = null;
        m_bPreviouslyIntersecting = !1;
        BTriggerOnce() {
          return "once" == (this.props.trigger || "once");
        }
        GetBoundingClientRect() {
          return this.m_refElement.current
            ? this.m_refElement.current.getBoundingClientRect()
            : null;
        }
        DestroyObserver() {
          this.m_observer &&
            (this.m_observer.disconnect(),
            (this.m_observer = null),
            (this.m_elTracked = null));
        }
        componentWillUnmount() {
          this.DestroyObserver();
        }
        componentDidMount() {
          this.UpdateObserver(null);
        }
        componentDidUpdate(e) {
          this.UpdateObserver(e);
        }
        UpdateObserver(e) {
          if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
          this.m_observer &&
            e &&
            (e.rootMargin != this.m_observer.rootMargin ||
              e.thresholds != this.m_observer.thresholds) &&
            this.DestroyObserver();
          let t = this.m_refElement.current;
          if (
            (this.m_observer &&
              t != this.m_elTracked &&
              (this.m_elTracked && this.m_observer.unobserve(this.m_elTracked),
              (this.m_elTracked = null)),
            !this.m_observer && t)
          ) {
            let e = { root: this.FindScrollableAncestor(t) };
            this.props.rootMargin && (e.rootMargin = this.props.rootMargin),
              this.props.thresholds && (e.threshold = this.props.thresholds),
              (this.m_observer = (0, l.md)(t, this.OnIntersection, e));
          }
          this.m_observer &&
            t &&
            t != this.m_elTracked &&
            (this.m_observer.observe(t), (this.m_elTracked = t));
        }
        FindScrollableAncestor(e) {
          return o.Kf(e, (e) => {
            const t = this.props.horizontal
              ? window.getComputedStyle(e).overflowX
              : window.getComputedStyle(e).overflowY;
            return (
              "scroll" == t ||
              "auto" == t ||
              !!e.classList.contains(c.GetScrollableClassname())
            );
          });
        }
        HandleRef(e) {
          (0, l.cZ)(this.m_refElement, e),
            this.props.containerRef && (0, l.cZ)(this.props.containerRef, e);
        }
        OnIntersection(e, t) {
          let r = !1;
          for (const t of e)
            if (t.isIntersecting) {
              r = !0;
              break;
            }
          this.m_bPreviouslyIntersecting != r &&
            ((this.m_bPreviouslyIntersecting = r),
            this.props.onVisibilityChange && this.props.onVisibilityChange(r),
            r && this.BTriggerOnce() && this.DestroyObserver());
        }
        render() {
          let {
            onVisibilityChange: e,
            rootMargin: t,
            trigger: r,
            horizontal: n,
            containerRef: a,
            ...o
          } = this.props;
          return (0, i.jsx)(s.Z, {
            ref: this.HandleRef,
            ...o,
            children: this.props.children,
          });
        }
      }
      (0, n.Cg)([l.oI], c.prototype, "HandleRef", null),
        (0, n.Cg)([l.oI], c.prototype, "OnIntersection", null);
    },
  },
]);
