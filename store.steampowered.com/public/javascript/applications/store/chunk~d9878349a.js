/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [177],
  {
    56228: (e, t, r) => {
      r.d(t, { s: () => D, Q: () => z });
      var i,
        s = r(34629),
        n = r(41735),
        a = r.n(n),
        o = r(71944),
        l = r(14947),
        c = r(22837),
        u = r(56545),
        m = r(17720),
        d = r(37735),
        g = r(78327),
        h = r(8812),
        f = r(44332),
        p = r(80613),
        y = r.n(p),
        _ = r(89068),
        b = r(21920);
      class S extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.language || _.Sg(S.M()),
            p.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  language: {
                    n: 1,
                    q: !0,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  type: {
                    n: 2,
                    q: !0,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = _.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (y().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (y().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (y().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_UpdateTextFilterDictionary_Notification";
        }
      }
      class T extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.language || _.Sg(T.M()),
            p.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  language: {
                    n: 1,
                    q: !0,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  type: {
                    n: 2,
                    q: !0,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = _.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (y().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (y().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (y().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetTextFilterDictionary_Request";
        }
      }
      class B extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.dictionary || _.Sg(B.M()),
            p.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = _.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (y().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (y().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (y().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetTextFilterDictionary_Response";
        }
      }
      class w extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.language || _.Sg(w.M()),
            p.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  language: {
                    n: 1,
                    q: !0,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  type: {
                    n: 2,
                    q: !0,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = _.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (y().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (y().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (y().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_TextFilterDictionaryChanged_Notification";
        }
      }
      class x extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.pid || _.Sg(x.M()),
            p.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  pid: { n: 1, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = _.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (y().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (y().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (y().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetGameIDForPID_Request";
        }
      }
      class v extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.gameid || _.Sg(v.M()),
            p.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = _.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (y().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (y().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (y().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_GetGameIDForPID_Response";
        }
      }
      class F extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.gameid || _.Sg(F.M()),
            p.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  gameid: {
                    n: 1,
                    q: !0,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                  should_handle: {
                    n: 2,
                    q: !0,
                    br: _.qM.readBool,
                    bw: _.gp.writeBool,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = _.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (y().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (y().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (y().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_SetOverlayEscapeKeyHandling_Notification";
        }
      }
      class M extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.search_term || _.Sg(M.M()),
            p.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  search_term: {
                    n: 1,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                  max_results: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = _.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (y().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (y().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (y().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Request";
        }
      }
      class C extends p.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.appids || _.Sg(C.M()),
            p.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: _.qM.readUint32,
                    pbr: _.qM.readPackedUint32,
                    bw: _.gp.writeRepeatedUint32,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = _.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (y().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (y().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (y().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Response";
        }
      }
      !(function (e) {
        (e.UpdateTextFilterDictionaryHandler = {
          name: "SteamEngine.UpdateTextFilterDictionary#1",
          request: S,
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
                  (0, u.I8)(S, e),
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
                  (0, u.I8)(S, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetTextFilterDictionaryHandler = {
            name: "SteamEngine.GetTextFilterDictionary#1",
            request: T,
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
                  (0, u.I8)(T, e),
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
                  (0, u.I8)(T, e),
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
            request: x,
            response: v,
          }),
          (e.GetGameIDForPID = function (e, t) {
            return null == (t = t || (0, b.OI)().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg("SteamEngine.GetGameIDForPID#1", (0, u.I8)(x, e), v, {
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
              : t.SendMsg("SteamEngine.GetGameIDForPID#1", (0, u.I8)(x, e), v, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (e.SetOverlayEscapeKeyHandlingHandler = {
            name: "SteamEngine.SetOverlayEscapeKeyHandling#1",
            request: F,
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
                  (0, u.I8)(F, e),
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
                  (0, u.I8)(F, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SearchAppDataCacheByStoreKeywordsHandler = {
            name: "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
            request: M,
            response: C,
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
                  (0, u.I8)(M, e),
                  C,
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
                  (0, u.I8)(M, e),
                  C,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          });
      })(i || (i = {}));
      var O = r(42865),
        I = r(6419);
      function E() {
        return g.TS.IN_MOBILE ? g.NQ : (0, g.xv)();
      }
      const R = "(1)";
      class D {
        m_WebUIServiceTransport;
        m_unAccountID;
        m_Transport = null;
        m_Storage = null;
        m_TextFilterPreferences = { eTextFilterSetting: 3, bIgnoreFriends: !1 };
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
        m_DataAccess;
        constructor(e) {
          (0, l.Gn)(this);
          let t = new d.B4();
          (this.m_TextFilterPreferences = {
            eTextFilterSetting: t.text_filter_setting(),
            bIgnoreFriends: t.text_filter_ignore_friends(),
          }),
            (this.m_TextFilterWords = new d.Ey()),
            (this.m_DataAccess = e);
        }
        async Init(e = 0, t = null, r = null) {
          (this.m_bInitialized = !1),
            (this.m_WebUIServiceTransport = O.N),
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
            await this.LoadLanguages(),
            this.OnFilterDataChanged(),
            (this.m_bInitialized = !0);
        }
        InitSteamEngineLanguages() {
          this.m_WebUIServiceTransport.BIsValid() &&
            (this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
              i.NotifyTextFilterDictionaryChangedHandler,
              this.OnTextFilterDictionaryChanged,
            ),
            this.InitSteamEngineLanguage(g.TS.LANGUAGE),
            "english" !== g.TS.LANGUAGE &&
              this.InitSteamEngineLanguage("english"));
        }
        OnTextFilterDictionaryChanged(e) {
          return (
            this.LoadLanguages().then(() => {
              this.OnFilterDataChanged();
            }),
            1
          );
        }
        InitSteamEngineLanguage(e) {
          const t = u.w.Init(S);
          t.Body().set_language(e),
            t.Body().set_type("profanity"),
            i.SendMsgUpdateTextFilterDictionary(
              t,
              this.m_WebUIServiceTransport,
            ),
            t.Body().set_type("banned"),
            i.SendMsgUpdateTextFilterDictionary(
              t,
              this.m_WebUIServiceTransport,
            );
        }
        GetSteamEngineTextFilterDictionary(e, t) {
          const r = u.w.Init(T);
          return (
            r.Body().set_language(e),
            r.Body().set_type(t),
            i.SendMsgGetTextFilterDictionary(r, this.m_WebUIServiceTransport)
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
            const t = new TextEncoder().encode(R + e);
            return o.iI(t);
          } catch (e) {
            return "";
          }
        }
        DeobfuscateString(e) {
          try {
            const t = o.bg(e);
            let r = new TextDecoder().decode(t);
            return r.startsWith(R)
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
              this.m_TextFilterWords = d.Ey.fromObject(JSON.parse(e));
            } catch (t) {
              console.warn("Error parsing cached text filter word list", e),
                (this.m_TextFilterWords = new d.Ey());
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
          let e = new d.B4();
          if (0 !== this.m_unAccountID)
            try {
              if (this.m_Transport) {
                let t = u.w.Init(d.tz);
                e = (await d.xt.GetCommunityPreferences(this.m_Transport, t))
                  .Body()
                  .preferences();
              } else {
                let t = { sessionid: g.TS.SESSIONID, origin: E() };
                const r = await a().get(
                  g.TS.COMMUNITY_BASE_URL +
                    "textfilter/ajaxgetcommunitypreferences",
                  { params: t, withCredentials: !0 },
                );
                e = d.B4.fromObject(r.data.preferences);
              }
            } catch (e) {}
          if (
            (this.UpdateCommunityPreferences(e),
            e.text_filter_words_revision() !==
              this.m_TextFilterWords.text_filter_words_revision())
          ) {
            let t = new d.Ey();
            if (0 !== e.text_filter_words_revision())
              try {
                if (this.m_Transport) {
                  let e = u.w.Init(d.SC);
                  t = (await d.xt.GetTextFilterWords(this.m_Transport, e))
                    .Body()
                    .words();
                } else {
                  let e = { sessionid: g.TS.SESSIONID, origin: E() };
                  const r = await a().get(
                    g.TS.COMMUNITY_BASE_URL +
                      "textfilter/ajaxgettextfiltercustomwords",
                    { params: e, withCredentials: !0 },
                  );
                  t = d.Ey.fromObject(r.data.words);
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
            await this.LoadLanguage(g.TS.LANGUAGE),
              "english" !== g.TS.LANGUAGE &&
                (await this.LoadLanguage("english"));
          } catch (t) {
            this.m_nLoadLanguagesRetryTimeout &&
              ((0, f.w)(
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
            t = `${g.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${e}&v=1&origin=${E()}`;
            {
              const e = await a().get(t);
              this.m_strBannedWords += e.data;
            }
            t = `${g.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=1&origin=${E()}`;
            {
              const e = await a().get(t);
              this.m_strProfanityWords += e.data;
            }
          }
          t = `${g.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=1&origin=${E()}`;
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
            case 0:
            case 3:
              break;
            case 2:
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
          let i = this.CreatePattern(t),
            s = this.CreatePattern(r);
          "" != s && (s = "^(" + s + ")$"),
            this.BRebuildFilter(i, s) && this.SaveFilter();
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
                (0, h.aj)().ReportError(
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
                (0, h.aj)().ReportError(
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
      let W;
      function z() {
        if (!W) {
          const e = new Set();
          let t = { sessionid: g.TS.SESSIONID, origin: E() };
          a()
            .get(g.TS.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist", {
              params: t,
              withCredentials: !0,
            })
            .then((t) => {
              for (const r of t.data.friendslist?.friends ?? [])
                (0, c.S$)(r.efriendrelationship) &&
                  e.add(new m.b(r.ulfriendid).GetAccountID());
            }),
            (W = (t) => e.has(t));
        }
        return W;
      }
      (0, s.Cg)([l.sH], D.prototype, "m_TextFilterPreferences", void 0),
        (0, s.Cg)([l.sH], D.prototype, "m_mapPlayerCache", void 0),
        (0, s.Cg)([l.sH], D.prototype, "m_regexBannedWords", void 0),
        (0, s.Cg)([l.sH], D.prototype, "m_regexCleanWords", void 0),
        (0, s.Cg)([l.sH], D.prototype, "m_bInitialized", void 0),
        (0, s.Cg)([l.XI], D.prototype, "Init", null),
        (0, s.Cg)([I.o], D.prototype, "OnTextFilterDictionaryChanged", null),
        (0, s.Cg)([l.XI], D.prototype, "UpdateCommunityPreferences", null),
        (0, s.Cg)([l.XI], D.prototype, "BRebuildFilter", null);
    },
    60383: (e, t, r) => {
      r.d(t, { J: () => o });
      var i = r(34629),
        s = r(90626),
        n = r(56011),
        a = r(73745);
      class o extends s.Component {
        static GetScrollableClassname() {
          return "vt-scrollable";
        }
        m_observer = null;
        m_refElement = s.createRef();
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
              (this.m_observer = (0, a.md)(t, this.OnIntersection, e));
          }
          this.m_observer &&
            t &&
            t != this.m_elTracked &&
            (this.m_observer.observe(t), (this.m_elTracked = t));
        }
        FindScrollableAncestor(e) {
          return n.Kf(e, (e) => {
            const t = this.props.bHorizontal
              ? window.getComputedStyle(e).overflowX
              : window.getComputedStyle(e).overflowY;
            return (
              "scroll" == t ||
              "auto" == t ||
              !!e.classList.contains(o.GetScrollableClassname())
            );
          });
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
            bHorizontal: i,
            ...n
          } = this.props;
          return s.createElement(
            "div",
            { ref: this.m_refElement, ...n },
            this.props.children,
          );
        }
      }
      (0, i.Cg)([a.oI], o.prototype, "OnIntersection", null);
    },
    54806: (e, t, r) => {
      r.d(t, { E: () => p });
      var i = r(90626),
        s = r(86709),
        n = r(45747),
        a = r(74500),
        o = r(57168);
      function l(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var c = class extends a.Q {
          #e;
          #t;
          #r;
          #i;
          #s;
          #n;
          #a;
          #o;
          constructor(e, t, r) {
            super(),
              (this.#e = e),
              (this.#i = r),
              (this.#r = []),
              (this.#s = []),
              (this.#t = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#s.forEach((e) => {
                e.subscribe((t) => {
                  this.#l(e, t);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#s.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, r) {
            (this.#r = e),
              (this.#i = t),
              s.j.batch(() => {
                const e = this.#s,
                  t = this.#c(this.#r);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, r),
                );
                const i = t.map((e) => e.observer),
                  s = i.map((e) => e.getCurrentResult()),
                  n = i.some((t, r) => t !== e[r]);
                (e.length !== i.length || n) &&
                  ((this.#s = i),
                  (this.#t = s),
                  this.hasListeners() &&
                    (l(e, i).forEach((e) => {
                      e.destroy();
                    }),
                    l(i, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#l(e, t);
                      });
                    }),
                    this.#u()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#s.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#s;
          }
          getOptimisticResult(e, t) {
            const r = this.#c(e).map((e) =>
              e.observer.getOptimisticResult(e.defaultedQueryOptions),
            );
            return [r, (e) => this.#m(e ?? r, t), () => this.#d(r, e)];
          }
          #d(e, t) {
            const r = this.#c(t);
            return r.map((t, i) => {
              const s = e[i];
              return t.defaultedQueryOptions.notifyOnChangeProps
                ? s
                : t.observer.trackResult(s, (e) => {
                    r.forEach((t) => {
                      t.observer.trackProp(e);
                    });
                  });
            });
          }
          #m(e, t) {
            return t
              ? ((this.#n && this.#t === this.#o && t === this.#a) ||
                  ((this.#a = t),
                  (this.#o = this.#t),
                  (this.#n = (0, o.BH)(this.#n, t(e)))),
                this.#n)
              : e;
          }
          #c(e) {
            const t = new Map(this.#s.map((e) => [e.options.queryHash, e])),
              r = [];
            return (
              e.forEach((e) => {
                const i = this.#e.defaultQueryOptions(e),
                  s = t.get(i.queryHash);
                if (s) r.push({ defaultedQueryOptions: i, observer: s });
                else {
                  const e = this.#s.find(
                    (e) => e.options.queryHash === i.queryHash,
                  );
                  r.push({
                    defaultedQueryOptions: i,
                    observer: e ?? new n.$(this.#e, i),
                  });
                }
              }),
              r.sort(
                (t, r) =>
                  e.findIndex(
                    (e) => e.queryHash === t.defaultedQueryOptions.queryHash,
                  ) -
                  e.findIndex(
                    (e) => e.queryHash === r.defaultedQueryOptions.queryHash,
                  ),
              )
            );
          }
          #l(e, t) {
            const r = this.#s.indexOf(e);
            -1 !== r &&
              ((this.#t = (function (e, t, r) {
                const i = e.slice(0);
                return (i[t] = r), i;
              })(this.#t, r, t)),
              this.#u());
          }
          #u() {
            if (this.hasListeners()) {
              this.#n !==
                this.#m(this.#d(this.#t, this.#r), this.#i?.combine) &&
                s.j.batch(() => {
                  this.listeners.forEach((e) => {
                    e(this.#t);
                  });
                });
            }
          }
        },
        u = r(75233),
        m = r(22730),
        d = r(43424),
        g = r(19086),
        h = r(44407),
        f = r(19866);
      function p({ queries: e, ...t }, r) {
        const a = (0, u.jE)(r),
          o = (0, m.w)(),
          l = (0, d.h)(),
          p = i.useMemo(
            () =>
              e.map((e) => {
                const t = a.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = o ? "isRestoring" : "optimistic"), t
                );
              }),
            [e, a, o],
          );
        p.forEach((e) => {
          (0, h.jv)(e), (0, g.LJ)(e, l);
        }),
          (0, g.wZ)(l);
        const [y] = i.useState(() => new c(a, p, t)),
          [_, b, S] = y.getOptimisticResult(p, t.combine);
        i.useSyncExternalStore(
          i.useCallback(
            (e) => (o ? f.l : y.subscribe(s.j.batchCalls(e))),
            [y, o],
          ),
          () => y.getCurrentResult(),
          () => y.getCurrentResult(),
        ),
          i.useEffect(() => {
            y.setQueries(p, t, { listeners: !1 });
          }, [p, t, y]);
        const T = _.some((e, t) => (0, h.EU)(p[t], e))
          ? _.flatMap((e, t) => {
              const r = p[t];
              if (r) {
                const t = new n.$(a, r);
                if ((0, h.EU)(r, e)) return (0, h.iL)(r, t, l);
                (0, h.nE)(e, o) && (0, h.iL)(r, t, l);
              }
              return [];
            })
          : [];
        if (T.length > 0) throw Promise.all(T);
        const B = _.find((e, t) => {
          const r = p[t];
          return (
            r &&
            (0, g.$1)({
              result: e,
              errorResetBoundary: l,
              throwOnError: r.throwOnError,
              query: a.getQueryCache().get(r.queryHash),
            })
          );
        });
        if (B?.error) throw B.error;
        return b(S());
      }
    },
  },
]);
