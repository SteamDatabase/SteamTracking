/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [10177],
    {
      81944: (he, ie, g) => {
        g.d(ie, { J: () => f });
        var ne = g(7850),
          N = g(19298),
          Q = g(90626),
          R = g(79089),
          b = g(18938),
          _ = g(2259);
        class f extends Q.Component {
          static GetScrollableClassname() {
            return "vt-scrollable";
          }
          m_observer = null;
          m_refElement = Q.createRef();
          m_elTracked = null;
          m_bPreviouslyIntersecting = !1;
          BTriggerOnce() {
            return (this.props.trigger || "once") == "once";
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
          componentDidUpdate(m) {
            this.UpdateObserver(m);
          }
          UpdateObserver(m) {
            if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
            this.m_observer &&
              m &&
              (m.rootMargin != this.m_observer.rootMargin ||
                m.thresholds != this.m_observer.thresholds) &&
              this.DestroyObserver();
            let u = this.m_refElement.current;
            if (
              (this.m_observer &&
                u != this.m_elTracked &&
                (this.m_elTracked &&
                  this.m_observer.unobserve(this.m_elTracked),
                (this.m_elTracked = null)),
              !this.m_observer && u)
            ) {
              let h = { root: this.FindScrollableAncestor(u) };
              this.props.rootMargin && (h.rootMargin = this.props.rootMargin),
                this.props.thresholds && (h.threshold = this.props.thresholds),
                (this.m_observer = (0, _.md)(u, this.OnIntersection, h));
            }
            this.m_observer &&
              u &&
              u != this.m_elTracked &&
              (this.m_observer.observe(u), (this.m_elTracked = u));
          }
          FindScrollableAncestor(m) {
            return (0, R.Kf)(m, (u) => {
              const F = this.props.horizontal
                ? window.getComputedStyle(u).overflowX
                : window.getComputedStyle(u).overflowY;
              return !!(
                F == "scroll" ||
                F == "auto" ||
                u.classList.contains(f.GetScrollableClassname())
              );
            });
          }
          HandleRef = (m) => {
            (0, b.cZ)(this.m_refElement, m),
              this.props.containerRef && (0, b.cZ)(this.props.containerRef, m);
          };
          OnIntersection = (m) => {
            let u = !1;
            for (const F of m)
              if (F.isIntersecting) {
                u = !0;
                break;
              }
            this.m_bPreviouslyIntersecting != u &&
              ((this.m_bPreviouslyIntersecting = u),
              this.props.onVisibilityChange && this.props.onVisibilityChange(u),
              u && this.BTriggerOnce() && this.DestroyObserver());
          };
          render() {
            let {
              onVisibilityChange: m,
              rootMargin: u,
              trigger: F,
              horizontal: h,
              containerRef: d,
              ...i
            } = this.props;
            return (0, ne.jsx)(N.Z, {
              ref: this.HandleRef,
              ...i,
              children: this.props.children,
            });
          }
        }
      },
      24544: (he, ie, g) => {
        g.d(ie, { s: () => H, Q: () => Pe });
        var ne = g(41735),
          N = g.n(ne),
          Q = g(71944),
          R = g(14947),
          b = g(72604),
          _ = g(99412),
          f = g(35038),
          de = g(76559),
          m = g(27386),
          u = g(3166),
          F = g(7414),
          h = g(80613),
          d = g.n(h),
          i = g(75245),
          z = g(66781);
        class p extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              p.prototype.language || i.Sg(p.M()),
              h.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    language: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    type: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = i.w0(p.M())), p.sm_mbf;
          }
          toObject(e = !1) {
            return p.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(p.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(p.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new p();
            return p.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(p.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(p.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_UpdateTextFilterDictionary_Notification";
          }
        }
        class y extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              y.prototype.language || i.Sg(y.M()),
              h.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    language: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    type: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = i.w0(y.M())), y.sm_mbf;
          }
          toObject(e = !1) {
            return y.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(y.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(y.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new y();
            return y.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(y.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(y.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetTextFilterDictionary_Request";
          }
        }
        class w extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              w.prototype.dictionary || i.Sg(w.M()),
              h.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    dictionary: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = i.w0(w.M())), w.sm_mbf;
          }
          toObject(e = !1) {
            return w.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(w.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(w.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new w();
            return w.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(w.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(w.M(), e, t);
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
        }
        class v extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              v.prototype.language || i.Sg(v.M()),
              h.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    language: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    type: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = i.w0(v.M())), v.sm_mbf;
          }
          toObject(e = !1) {
            return v.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(v.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(v.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new v();
            return v.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(v.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(v.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_TextFilterDictionaryChanged_Notification";
          }
        }
        class O extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              O.prototype.pid || i.Sg(O.M()),
              h.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    pid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = i.w0(O.M())), O.sm_mbf;
          }
          toObject(e = !1) {
            return O.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(O.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(O.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new O();
            return O.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(O.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(O.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetGameIDForPID_Request";
          }
        }
        class T extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              T.prototype.gameid || i.Sg(T.M()),
              h.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    gameid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = i.w0(T.M())), T.sm_mbf;
          }
          toObject(e = !1) {
            return T.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(T.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(T.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new T();
            return T.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(T.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(T.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetGameIDForPID_Response";
          }
        }
        class S extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              S.prototype.gameid || i.Sg(S.M()),
              h.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    gameid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    should_handle: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = i.w0(S.M())), S.sm_mbf;
          }
          toObject(e = !1) {
            return S.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(S.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(S.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new S();
            return S.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(S.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(S.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SetOverlayEscapeKeyHandling_Notification";
          }
        }
        class W extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              W.prototype.search_term || i.Sg(W.M()),
              h.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    search_term: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    max_results: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = i.w0(W.M())), W.sm_mbf;
          }
          toObject(e = !1) {
            return W.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(W.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(W.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new W();
            return W.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(W.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(W.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Request";
          }
        }
        class x extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              x.prototype.appids || i.Sg(x.M()),
              h.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = i.w0(x.M())), x.sm_mbf;
          }
          toObject(e = !1) {
            return x.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(x.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(x.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new x();
            return x.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(x.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(x.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Response";
          }
        }
        var D;
        ((c) => {
          c.UpdateTextFilterDictionaryHandler = {
            name: "SteamEngine.UpdateTextFilterDictionary#1",
            request: p,
          };
          function e(M, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultHandlerRegistry()),
              n == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : n.RegisterServiceNotificationHandler(
                    c.UpdateTextFilterDictionaryHandler,
                    M,
                  )
            );
          }
          c.RegisterForUpdateTextFilterDictionary = e;
          function t(M, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : n.SendNotification(
                    "SteamEngine.UpdateTextFilterDictionary#1",
                    (0, f.I8)(p, M),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          c.UpdateTextFilterDictionary = t;
          function r(M, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : n.SendNotification(
                    "SteamEngine.UpdateTextFilterDictionary#1",
                    (0, f.I8)(p, M),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (c.SendMsgUpdateTextFilterDictionary = r),
            (c.GetTextFilterDictionaryHandler = {
              name: "SteamEngine.GetTextFilterDictionary#1",
              request: y,
              response: w,
            });
          function s(M, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? new Promise((K, C) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      C(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : n.SendMsg(
                    "SteamEngine.GetTextFilterDictionary#1",
                    (0, f.I8)(y, M),
                    w,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          c.GetTextFilterDictionary = s;
          function o(M, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? new Promise((K, C) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      C(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : n.SendMsg(
                    "SteamEngine.GetTextFilterDictionary#1",
                    (0, f.I8)(y, M),
                    w,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (c.SendMsgGetTextFilterDictionary = o),
            (c.NotifyTextFilterDictionaryChangedHandler = {
              name: "SteamEngine.NotifyTextFilterDictionaryChanged#1",
              request: v,
            });
          function a(M, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultHandlerRegistry()),
              n == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : n.RegisterServiceNotificationHandler(
                    c.NotifyTextFilterDictionaryChangedHandler,
                    M,
                  )
            );
          }
          c.RegisterForNotifyTextFilterDictionaryChanged = a;
          function l(M, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : n.SendNotification(
                    "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                    (0, f.I8)(v, M),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          c.NotifyTextFilterDictionaryChanged = l;
          function L(M, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : n.SendNotification(
                    "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                    (0, f.I8)(v, M),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (c.SendMsgNotifyTextFilterDictionaryChanged = L),
            (c.GetGameIDForPIDHandler = {
              name: "SteamEngine.GetGameIDForPID#1",
              request: O,
              response: T,
            });
          function I(M, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? new Promise((K, C) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      C(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : n.SendMsg(
                    "SteamEngine.GetGameIDForPID#1",
                    (0, f.I8)(O, M),
                    T,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          c.GetGameIDForPID = I;
          function V(M, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? new Promise((K, C) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      C(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : n.SendMsg(
                    "SteamEngine.GetGameIDForPID#1",
                    (0, f.I8)(O, M),
                    T,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (c.SendMsgGetGameIDForPID = V),
            (c.SetOverlayEscapeKeyHandlingHandler = {
              name: "SteamEngine.SetOverlayEscapeKeyHandling#1",
              request: S,
            });
          function G(M, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultHandlerRegistry()),
              n == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : n.RegisterServiceNotificationHandler(
                    c.SetOverlayEscapeKeyHandlingHandler,
                    M,
                  )
            );
          }
          c.RegisterForSetOverlayEscapeKeyHandling = G;
          function ge(M, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : n.SendNotification(
                    "SteamEngine.SetOverlayEscapeKeyHandling#1",
                    (0, f.I8)(S, M),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          c.SetOverlayEscapeKeyHandling = ge;
          function A(M, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : n.SendNotification(
                    "SteamEngine.SetOverlayEscapeKeyHandling#1",
                    (0, f.I8)(S, M),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (c.SendMsgSetOverlayEscapeKeyHandling = A),
            (c.SearchAppDataCacheByStoreKeywordsHandler = {
              name: "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
              request: W,
              response: x,
            });
          function se(M, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? new Promise((K, C) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      C(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : n.SendMsg(
                    "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
                    (0, f.I8)(W, M),
                    x,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          c.SearchAppDataCacheByStoreKeywords = se;
          function je(M, n) {
            return (
              (n = n || (0, z.OI)().GetDefaultTransport()),
              n == null
                ? new Promise((K, C) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      C(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : n.SendMsg(
                    "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
                    (0, f.I8)(W, M),
                    x,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          c.SendMsgSearchAppDataCacheByStoreKeywords = je;
        })(D || (D = {}));
        var $ = g(30096),
          be = g(15369),
          ee = g(94354),
          ue = g(57589),
          ae = g(71742);
        const fe = 0,
          Me = 1,
          pe = 2,
          ke = 3;
        function Ue(c) {
          return "unknown EClientExecutionSite ( " + c + " )";
        }
        class E extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), h.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return E.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new E();
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new E();
            return E.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "WebUINoResponse";
          }
        }
        var ye = Object.defineProperty,
          Be = Object.getOwnPropertyDescriptor,
          me = (c, e, t, r) => {
            for (
              var s = r > 1 ? void 0 : r ? Be(e, t) : e, o = c.length - 1, a;
              o >= 0;
              o--
            )
              (a = c[o]) && (s = (r ? a(e, t, s) : a(s)) || s);
            return r && s && ye(e, t, s), s;
          };
        class oe {
          constructor() {
            (0, R.Gn)(this);
          }
          m_mapCallbacks = new Map();
          m_rgRegisteredEMsgs = [];
          m_mapServiceMethodHandlers = new Map();
          m_rgRegisteredServiceMethodHandlers = [];
          DispatchMsgToHandlers(e, t) {
            let r = e.GetEMsg();
            if (r == ee.bSr) {
              let s = e.Hdr().target_job_name();
              if (s) {
                let o = this.m_mapServiceMethodHandlers.get(s);
                if (o) {
                  this.DEBUG_LogMessageDispatch(e, o[0]);
                  for (let a of o)
                    try {
                      a.invoke(e, t);
                    } catch (l) {
                      l instanceof Error
                        ? (0, F.aj)().ReportError(l)
                        : console.error(
                            `MessageHandlers failed to dispatch message to handler (${s}): `,
                            l,
                          );
                    }
                  return !0;
                }
              }
            } else {
              let s = this.m_mapCallbacks.get(r);
              if (s) {
                this.DEBUG_LogMessageDispatch(e, s[0]);
                for (let o of s)
                  try {
                    o.invoke(e);
                  } catch (a) {
                    a instanceof Error
                      ? (0, F.aj)().ReportError(a)
                      : console.error(
                          "MessageHandlers failed to dispatch message to handler: ",
                          a,
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
            let s = this.m_mapCallbacks.get(e);
            return (
              s ||
                ((s = []),
                this.m_mapCallbacks.set(e, s),
                this.m_rgRegisteredEMsgs.push(e)),
              s.push({ invoke: r, msgClass: t }),
              {
                invoke: r,
                unregister: () => {
                  let o = this.m_mapCallbacks.get(e);
                  if (o)
                    for (let a = 0; a < o.length; a++)
                      o[a].invoke == r && (o.splice(a, 1), a--);
                },
              }
            );
          }
          AddServiceMethodHandler(e, t) {
            let r = (s, o) => {
              let a = f.w.InitFromMsg(e.request, s),
                l = f.w.Init(e.response, ee.kHd),
                L = t(a, l),
                I = (V) => {
                  l.Hdr().set_eresult(V), o(l);
                };
              L instanceof Promise
                ? L.then(I).catch(() => {
                    I(b.zi);
                  })
                : I(L);
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
                  let s = this.m_mapServiceMethodHandlers.get(e.name);
                  if (s)
                    for (let o = 0; o < s.length; o++)
                      s[o].invoke == r && (s.splice(o, 1), o--);
                },
              }
            );
          }
          AddServiceNotificationHandler(e, t) {
            let r = (o, a) => {
                let l = f.w.InitFromMsg(e.request, o);
                t(l);
              },
              s = this.m_mapServiceMethodHandlers.get(e.name);
            return (
              s ||
                ((s = []),
                this.m_mapServiceMethodHandlers.set(e.name, s),
                this.m_rgRegisteredServiceMethodHandlers.push(e.name)),
              s.push({ invoke: r, msgClass: e.request }),
              {
                invoke: r,
                unregister: () => {
                  let o = this.m_mapServiceMethodHandlers.get(e.name);
                  if (o)
                    for (let a = 0; a < o.length; a++)
                      o[a].invoke == r && (o.splice(a, 1), a--);
                },
              }
            );
          }
          RegisterBaseEMessageHandler(e, t) {
            return this.AddCallback(e, void 0, t);
          }
          RegisterEMessageHandler(e, t, r) {
            return this.AddCallback(e, t, (s) => {
              r(f.w.InitFromMsg(t, s));
            });
          }
          RegisterEMessageAction(e, t, r) {
            return this.AddCallback(e, t, (s) => {
              (0, R.h5)(() => {
                r(f.w.InitFromMsg(t, s));
              });
            });
          }
          RegisterServiceNotificationHandler(e, t) {
            return this.AddServiceNotificationHandler(e, t);
          }
          RegisterServiceNotificationHandlerAction(e, t) {
            return this.AddServiceNotificationHandler(e, (r) => {
              let s;
              return (
                (0, R.h5)(() => {
                  s = t(r);
                }),
                s
              );
            });
          }
          RegisterServiceMethodHandler(e, t) {
            return this.AddServiceMethodHandler(e, t);
          }
          RegisterServiceMethodHandlerAction(e, t) {
            return this.AddServiceMethodHandler(e, (r, s) => {
              let o;
              return (
                (0, R.h5)(() => {
                  o = t(r, s);
                }),
                o
              );
            });
          }
        }
        me([R.sH], oe.prototype, "m_rgRegisteredEMsgs", 2),
          me([R.sH], oe.prototype, "m_rgRegisteredServiceMethodHandlers", 2);
        class B extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              B.prototype.auth_key || i.Sg(B.M()),
              h.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    auth_key: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = i.w0(B.M())), B.sm_mbf;
          }
          toObject(e = !1) {
            return B.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(B.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(B.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (d().BinaryReader)(e),
              r = new B();
            return B.deserializeBinaryFromReader(r, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(B.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(B.M(), e, t);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_Authenticate_Request";
          }
        }
        class P extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), h.Message.initialize(this, e, 0, -1, void 0, null);
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
        class j extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), h.Message.initialize(this, e, 0, -1, void 0, null);
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
            return "CTransportAuth_StartShutdown_Notification";
          }
        }
        var X;
        ((c) => {
          c.AuthenticateHandler = {
            name: "TransportAuth.Authenticate#1",
            request: B,
            response: P,
          };
          function e(a, l) {
            return (
              (l = l || (0, z.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((L, I) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      I(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "TransportAuth.Authenticate#1",
                    (0, f.I8)(B, a),
                    P,
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          c.Authenticate = e;
          function t(a, l) {
            return (
              (l = l || (0, z.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((L, I) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      I(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "TransportAuth.Authenticate#1",
                    (0, f.I8)(B, a),
                    P,
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          (c.SendMsgAuthenticate = t),
            (c.NotifyStartShutdownHandler = {
              name: "TransportAuth.NotifyStartShutdown#1",
              request: j,
            });
          function r(a, l) {
            return (
              (l = l || (0, z.OI)().GetDefaultHandlerRegistry()),
              l == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : l.RegisterServiceNotificationHandler(
                    c.NotifyStartShutdownHandler,
                    a,
                  )
            );
          }
          c.RegisterForNotifyStartShutdown = r;
          function s(a, l) {
            return (
              (l = l || (0, z.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "TransportAuth.NotifyStartShutdown#1",
                    (0, f.I8)(j, a),
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          c.NotifyStartShutdown = s;
          function o(a, l) {
            return (
              (l = l || (0, z.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "TransportAuth.NotifyStartShutdown#1",
                    (0, f.I8)(j, a),
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          c.SendMsgNotifyStartShutdown = o;
        })(X || (X = {}));
        var we = g(98609),
          ve = g(13854),
          Oe = Object.defineProperty,
          Te = Object.getOwnPropertyDescriptor,
          te = (c, e, t, r) => {
            for (
              var s = r > 1 ? void 0 : r ? Te(e, t) : e, o = c.length - 1, a;
              o >= 0;
              o--
            )
              (a = c[o]) && (s = (r ? a(e, t, s) : a(s)) || s);
            return r && s && Oe(e, t, s), s;
          };
        class Z {
          m_socket = null;
          m_sName;
          m_sURL;
          Log = new ue.wd("CWebSocketConnection", () => this.m_sName);
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
            return (0, ve.OQ)(e, 1, 5) * 1e3;
          }
          async ConnectWithRetry(e, t, r) {
            this.m_bConnecting = !0;
            let s = 0;
            do {
              try {
                const a = await this.ConnectToSocket(e, r);
                if (a.result == b.R) return (this.m_bConnecting = !1), a;
                this.Log.Warning(
                  `connect attempt failed: ${a.result} - ${a.message}`,
                );
              } catch (a) {
                this.Log.Warning(
                  `connect attempt failed: exception ${a.name} - ${a}`,
                );
              }
              const o = this.GetInterAttemptBackoffMs(s);
              this.Log.Info(`connect retry: attempt:${s}/${t} backoff:${o}`),
                await new Promise((a) => setTimeout(a, o)),
                (this.m_socket = null),
                (s += 1);
            } while (s < t);
            return (
              this.Log.Warning(
                `websocket connect retry: limit exceeeded, bailing - ${this.name}`,
              ),
              (this.m_bConnecting = !1),
              this.BShouldReconnect() && this.StartReconnect(),
              { result: b.zi, message: "not ready, exceeded retry count" }
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
              (await this.Reconnect()).result != b.R)
            ) {
              this.Log.Warning("failed to re-connect to websocket after close"),
                this.m_fnOnReconnectFinishHandler({
                  connection: this,
                  eResult: b.zi,
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
                eResult: b.R,
              });
          }
          async ConnectToSocket(e, t) {
            if (this.m_socket != null)
              return this.m_socket.readyState != WebSocket.OPEN
                ? (this.Log.Error(
                    `websocket in an unexpected state: ${this.m_socket.readyState}`,
                  ),
                  { result: b.zi, message: "websocket in an unexpected state" })
                : { result: b.R, message: "ready" };
            try {
              this.m_socket = new WebSocket(e);
            } catch {
              return (
                this.Log.Warning("failed to initialize websocket connection"),
                {
                  result: b.iV,
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
                  { result: b.R, message: "ready" })
                : (this.Log.Warning("failed to reach open state"),
                  { result: b.zi, message: "failed to reach open state" })
            );
          }
          async WaitForSocketOpen(e, t) {
            if (e.readyState != WebSocket.CONNECTING)
              return e.readyState == WebSocket.OPEN;
            const r = 100;
            let s = t / r;
            for (; e.readyState == WebSocket.CONNECTING && s > 0; )
              s--, await new Promise((o) => setTimeout(o, r));
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
              return this.m_socket.send(e), b.R;
            } catch {
              return b.zi;
            }
          }
        }
        te([$.oI], Z.prototype, "OnSocketError", 1),
          te([$.oI], Z.prototype, "OnSocketOpen", 1),
          te([$.oI], Z.prototype, "OnSocketClose", 1),
          te([$.oI], Z.prototype, "OnSocketMessage", 1);
        var Se = Object.defineProperty,
          We = Object.getOwnPropertyDescriptor,
          q = (c, e, t, r) => {
            for (
              var s = r > 1 ? void 0 : r ? We(e, t) : e, o = c.length - 1, a;
              o >= 0;
              o--
            )
              (a = c[o]) && (s = (r ? a(e, t, s) : a(s)) || s);
            return r && s && Se(e, t, s), s;
          };
        const xe = "localhost",
          k = new ue.wd("WebUITransport");
        class Y {
          m_iMsgSeq = 1;
          m_mapPendingMethodRequests = new Map();
          m_messageHandlers = new oe();
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
            return 64 * 1024 * 1024;
          }
          ReportError(e) {
            k.Warning(e);
            const t = (0, F.aj)();
            t &&
              t.ReportError(new Error(e), {
                bIncludeMessageInIdentifier: !0,
                cCallsitesToIgnore: 1,
              });
          }
          async Init() {
            if (!we.TS.IN_CLIENT) return;
            const e = await SteamClient.WebUITransport.GetTransportInfo();
            (this.m_nMaximumMsgSizeBytes = e.nMaximumMsgSizeBytes),
              this.CreateConnection(
                Me,
                "steamUI",
                e.portSteamUI,
                e.authKeySteamUI,
              ),
              this.CreateConnection(
                pe,
                "clientdll",
                e.portClientdll,
                e.authKeyClientdll,
              ),
              (0, z.OI)().SetDefaultTransport(this),
              (0, z.OI)().SetDefaultHandlerRegistry(this.m_messageHandlers),
              X.RegisterForNotifyStartShutdown(this.OnStartShutdown);
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
          CreateConnection(e, t, r, s) {
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
              a = {
                connection: new Z(t, o),
                sUrl: `ws://${xe}:${r}/transportsocket/`,
                sAuthKey: s,
                eClientExecutionSite: e,
              };
            this.m_mapConnectionDetails.set(e, a);
          }
          SendMsg(e, t, r, s) {
            return new Promise((o, a) => {
              const l = s.eClientExecutionSite;
              if (l == null || l == fe) {
                k.Error(`SendMsg: Invalid client execution site: ${l}`),
                  a(`Transport SendMsg: invalid client execution site ${l}`);
                return;
              }
              const L = this.m_mapConnectionDetails.get(l);
              if (L == null) {
                k.Error(
                  `SendMsg: could not find connection for execution site: ${l}`,
                ),
                  a(
                    `Transport SendMsg: could not find connection for execution site ${l}`,
                  );
                return;
              }
              const I = L.connection;
              if (!I.BCanSendMessages()) {
                const A = this.m_mapServiceCallErrorCount.get(e) ?? 1;
                this.m_mapServiceCallErrorCount.set(e, A + 1);
                const se = `SendMsg: Attempt to send message but socket wasn't ready: ${I.name} - ${e}`;
                A == 1 && this.ReportError(se),
                  k.Warning(se + ` error count: ${A}`),
                  a("Transport SendMsg: socket not ready");
                return;
              }
              const V = this.m_iMsgSeq++;
              t.SetEMsg(ee.bSr),
                t.Hdr().set_target_job_name(e),
                t.Hdr().set_jobid_source("" + V);
              const G = t.Serialize();
              if (G.byteLength >= this.m_nMaximumMsgSizeBytes) {
                k.Error(
                  `SendMsg: message exceeds maximum size: ${G.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
                );
                const A = f.w.Init(r);
                A.Hdr().set_eresult(b.zi), o(A);
                return;
              }
              if (I.SendSerializedMessage(G) != b.R) {
                k.Error("SendMsg: Failed to send message"),
                  a("Transport SendMsg: failed to send message");
                return;
              }
              this.m_mapPendingMethodRequests.set(V, {
                m_iSeq: V,
                m_responseClass: r,
                m_fnCallback: o,
                m_fnError: a,
              });
            });
          }
          SendNotification(e, t, r) {
            const s = r.eClientExecutionSite;
            if (s == null || s == fe)
              return (
                k.Error(
                  `SendNotification: Invalid client execution site: ${s}`,
                ),
                !1
              );
            const o = this.m_mapConnectionDetails.get(s);
            if (o == null)
              return (
                k.Error(
                  `SendNotification: could not find connection for execution site: ${s}`,
                ),
                !1
              );
            const a = o.connection;
            if (!a.BCanSendMessages()) {
              const L = this.m_mapServiceCallErrorCount.get(e) ?? 1;
              this.m_mapServiceCallErrorCount.set(e, L + 1);
              const I = `SendNotification: Attempt to send message but socket wasn't ready: ${a.name} - ${e}`;
              return (
                L == 1 && this.ReportError(I),
                k.Warning(I + ` error count: ${L}`),
                !1
              );
            }
            return (
              t.SetEMsg(ee.bSr),
              t.Hdr().set_target_job_name(e),
              a.SendSerializedMessage(t.Serialize()) == b.R
            );
          }
          async ConnectToSite(e) {
            const r = await e.connection.Connect(e.sUrl);
            return r.result != b.R
              ? r
              : (await this.SendAuthMessage(e)).BSuccess()
                ? { result: b.R, message: "connected" }
                : { result: b.zi, message: "client auth failed" };
          }
          async MakeReady() {
            const e = [];
            for (const [r, s] of this.m_mapConnectionDetails)
              e.push(this.ConnectToSite(s));
            const t = await Promise.all(e);
            (this.m_bInitialized = !0), this.DispatchTransportStatusUpdate();
            for (const r of t) if (r.result != b.R) return r;
            return { result: b.R, message: "ready" };
          }
          GetConnectionDetails(e) {
            for (const [t, r] of this.m_mapConnectionDetails)
              if (r.connection === e) return r;
            return (
              k.Error("GetConnectionDetails: failed to identify connection"),
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
            if ((this.DispatchTransportStatusUpdate(), e.eResult != b.R)) {
              k.Warning(
                "OnWebsocketReconnect: Failed to reconnect to steam client",
              ),
                this.m_fnOnReconnectErrorHandler?.({});
              return;
            }
            this.FailAllPendingRequests();
            const t = this.GetConnectionDetails(e.connection);
            t && this.SendAuthMessage(t);
          }
          OnWebsocketClose(e) {
            e.bIsExpectedToReconnect || this.FailAllPendingRequests();
          }
          OnWebsocketMessage(e) {
            const t = new be.pV(e),
              r = f.w.InitHeaderFromPacket(t);
            r.Hdr().jobid_target() && r.Hdr().jobid_target() !== _.kFb
              ? this.DispatchMethodResponse(r)
              : this.DispatchNotification(r);
          }
          DispatchMethodResponse(e) {
            const t = parseInt(e.Hdr().jobid_target()),
              r = this.m_mapPendingMethodRequests.get(t);
            if (r == null) {
              (0, ae.wT)(
                !1,
                "Transport Error: no pending callback for request",
              );
              return;
            }
            (0, ae.wT)(
              t == r.m_iSeq,
              "Transport Error: mistmatched request sequence",
            ),
              this.m_mapPendingMethodRequests.delete(t);
            const s = f.w.InitFromMsg(r.m_responseClass, e);
            r.m_fnCallback(s);
          }
          DispatchNotification(e) {
            const t = (r) => {
              (0, ae.wT)(
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
              let r = f.w.Init(t.m_responseClass);
              r.Hdr().set_eresult(b.zi), t.m_fnCallback(r);
            }
            this.m_mapPendingMethodRequests.clear();
          }
          async SendAuthMessage(e) {
            const t = X.AuthenticateHandler.name,
              r = { eClientExecutionSite: e.eClientExecutionSite },
              s = f.w.Init(B);
            return (
              s.Hdr().set_webui_auth_key(e.sAuthKey),
              await this.SendMsg(t, s, X.AuthenticateHandler.response, r)
            );
          }
          OnStartShutdown(e) {
            for (const [t, r] of this.m_mapConnectionDetails)
              r.connection.PrepareForShutdown();
            return b.R;
          }
        }
        q([$.oI], Y.prototype, "OnWebsocketReconnectStart", 1),
          q([$.oI], Y.prototype, "OnWebsocketReconnectFinish", 1),
          q([$.oI], Y.prototype, "OnWebsocketClose", 1),
          q([$.oI], Y.prototype, "OnWebsocketMessage", 1),
          q([$.oI], Y.prototype, "OnStartShutdown", 1);
        const ze = new Y();
        var Re = g(27066),
          Le = Object.defineProperty,
          Ie = Object.getOwnPropertyDescriptor,
          U = (c, e, t, r) => {
            for (
              var s = r > 1 ? void 0 : r ? Ie(e, t) : e, o = c.length - 1, a;
              o >= 0;
              o--
            )
              (a = c[o]) && (s = (r ? a(e, t, s) : a(s)) || s);
            return r && s && Le(e, t, s), s;
          };
        function J() {
          return u.TS.IN_MOBILE ? u.NQ : (0, u.xv)();
        }
        function Fe(c) {
          if (c === "") return !1;
          try {
            return new RegExp("\\b(" + c + ")\\b", "ugi"), !0;
          } catch {
            return (
              console.log(
                `'${c}' is an invalid expression, removing from text filter`,
              ),
              !1
            );
          }
        }
        const re = 15,
          He = 3600,
          le = "(1)";
        class H {
          m_WebUIServiceTransport;
          m_unAccountID;
          m_Transport = null;
          m_Storage = null;
          m_TextFilterPreferences = {
            eTextFilterSetting: m.Bx6.NS,
            bIgnoreFriends: !1,
          };
          m_TextFilterWords;
          m_mapPlayerCache = new Map();
          m_strBannedWords = "";
          m_strProfanityWords = "";
          m_strCleanWords = "";
          m_strBannedPattern = "";
          m_strCleanPattern = "";
          m_bWordListsComplete = !1;
          m_bHaveCompleteFilter = !1;
          m_regexBannedWords = null;
          m_regexCleanWords = null;
          m_bShownFilterTip = !1;
          m_bInitialized = !1;
          m_bFilterChangedWhileLoading = !1;
          m_bOngoingLoad = !1;
          m_promiseOngoingLoad = null;
          m_fnUnregisterDictionaryChanged = void 0;
          m_rgUnregisterPlayerNotifications = [];
          m_DataAccess;
          constructor(e) {
            (0, R.Gn)(this);
            let t = new m.B4H();
            (this.m_TextFilterPreferences = {
              eTextFilterSetting: t.text_filter_setting(),
              bIgnoreFriends: t.text_filter_ignore_friends(),
            }),
              (this.m_TextFilterWords = new m.EyI()),
              (this.m_DataAccess = e);
          }
          async Init(e = 0, t = null, r = null, s = null) {
            (this.m_bInitialized = !1),
              (this.m_WebUIServiceTransport = ze),
              (this.m_unAccountID = e),
              (this.m_Transport = t),
              (this.m_Storage = r),
              (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = ""),
              (this.m_bWordListsComplete = !1),
              this.InitSteamEngineLanguages(),
              this.RegisterPlayerNotifications(s),
              await this.LoadFilter(),
              await this.LoadTextFilterPreferences(),
              await this.LoadTextFilterWords(),
              await this.RequestUpdatedSettings(),
              (this.m_nLoadLanguagesRetryDelaySec = re),
              await this.EnsureFiltersLoaded();
          }
          InitSteamEngineLanguages() {
            this.m_WebUIServiceTransport.BIsValid() &&
              (this.m_fnUnregisterDictionaryChanged?.(),
              (this.m_fnUnregisterDictionaryChanged =
                this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
                  D.NotifyTextFilterDictionaryChangedHandler,
                  this.OnTextFilterDictionaryChanged,
                ).unregister),
              this.InitSteamEngineLanguage(u.TS.LANGUAGE),
              u.TS.LANGUAGE !== "english" &&
                this.InitSteamEngineLanguage("english"));
          }
          OnTextFilterDictionaryChanged(e) {
            return (
              !this.m_bInitialized && !this.m_bOngoingLoad
                ? (this.m_bFilterChangedWhileLoading = !0)
                : ((this.m_nLoadLanguagesRetryDelaySec = re),
                  this.EnsureFiltersLoaded()),
              b.R
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
                    m.QAJ.NotifyCommunityPreferencesChangedHandler,
                    (t) => (
                      this.UpdateCommunityPreferences(t.Body().preferences()),
                      this.OnPlayerSettingsChanged(),
                      b.R
                    ),
                  ).unregister,
                  e.RegisterServiceNotificationHandler(
                    m.QAJ.NotifyTextFilterWordsChangedHandler,
                    (t) => (
                      this.UpdateTextFilterWords(t.Body().words()),
                      this.OnPlayerSettingsChanged(),
                      b.R
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
            const t = f.w.Init(p);
            t.Body().set_language(e),
              t.Body().set_type("profanity"),
              D.SendMsgUpdateTextFilterDictionary(
                t,
                this.m_WebUIServiceTransport,
              ),
              t.Body().set_type("banned"),
              D.SendMsgUpdateTextFilterDictionary(
                t,
                this.m_WebUIServiceTransport,
              );
          }
          GetSteamEngineTextFilterDictionary(e, t) {
            const r = f.w.Init(y);
            return (
              r.Body().set_language(e),
              r.Body().set_type(t),
              D.SendMsgGetTextFilterDictionary(r, this.m_WebUIServiceTransport)
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
              const t = new TextEncoder().encode(le + e);
              return Q.iI(t);
            } catch {
              return "";
            }
          }
          DeobfuscateString(e) {
            try {
              const t = Q.bg(e);
              let r = new TextDecoder().decode(t);
              return r.startsWith(le)
                ? ((r = r.slice(le.length)), r)
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
                this.m_TextFilterWords = m.EyI.fromObject(JSON.parse(e));
              } catch {
                console.warn("Error parsing cached text filter word list", e),
                  (this.m_TextFilterWords = new m.EyI());
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
            let e = new m.B4H();
            if (this.m_unAccountID !== 0)
              try {
                if (this.m_Transport) {
                  let t = f.w.Init(m.tzK);
                  e = (await m.xtC.GetCommunityPreferences(this.m_Transport, t))
                    .Body()
                    .preferences();
                } else {
                  let t = { sessionid: (0, u.KC)(), origin: J() };
                  const r = await N().get(
                    u.TS.COMMUNITY_BASE_URL +
                      "textfilter/ajaxgetcommunitypreferences",
                    { params: t, withCredentials: !0 },
                  );
                  e = m.B4H.fromObject(r.data.preferences);
                }
              } catch {}
            if (
              (this.UpdateCommunityPreferences(e),
              e.text_filter_words_revision() !==
                this.m_TextFilterWords.text_filter_words_revision())
            ) {
              let t = new m.EyI();
              if (e.text_filter_words_revision() !== 0)
                try {
                  if (this.m_Transport) {
                    let r = f.w.Init(m.SCE);
                    t = (await m.xtC.GetTextFilterWords(this.m_Transport, r))
                      .Body()
                      .words();
                  } else {
                    let r = { sessionid: (0, u.KC)(), origin: J() };
                    const s = await N().get(
                      u.TS.COMMUNITY_BASE_URL +
                        "textfilter/ajaxgettextfiltercustomwords",
                      { params: r, withCredentials: !0 },
                    );
                    t = m.EyI.fromObject(s.data.words);
                  }
                } catch {}
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
          m_nLoadLanguagesRetryDelaySec = re;
          async LoadLanguages() {
            (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = ""),
              (this.m_bWordListsComplete = !1),
              this.m_nLoadLanguagesRetryTimeout &&
                (window.clearTimeout(this.m_nLoadLanguagesRetryTimeout),
                (this.m_nLoadLanguagesRetryTimeout = void 0));
            try {
              let e = await this.LoadLanguage(u.TS.LANGUAGE);
              if (
                (u.TS.LANGUAGE !== "english" &&
                  (e = (await this.LoadLanguage("english")) && e),
                !e)
              )
                throw new Error("clean_public dictionary unavailable");
              (this.m_nLoadLanguagesRetryDelaySec = re),
                (this.m_bWordListsComplete = !0);
            } catch (e) {
              this.m_nLoadLanguagesRetryDelaySec = Math.min(
                this.m_nLoadLanguagesRetryDelaySec * 2,
                He,
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
              s = !1;
            if (this.m_WebUIServiceTransport.BIsValid())
              try {
                {
                  const l = await this.GetSteamEngineTextFilterDictionary(
                    e,
                    "banned",
                  );
                  this.m_strBannedWords += l.Body().dictionary();
                }
                {
                  const l = await this.GetSteamEngineTextFilterDictionary(
                    e,
                    "profanity",
                  );
                  this.m_strProfanityWords += l.Body().dictionary();
                }
                s = !0;
              } catch (l) {
                console.warn(
                  "LoadLanguage caught while loading from cache:",
                  l,
                );
              }
            if (!s) {
              r = `${u.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${e}&v=${t}&origin=${J()}`;
              {
                const l = await N().get(r);
                this.m_strBannedWords += l.data;
              }
              r = `${u.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=${t}&origin=${J()}`;
              {
                const l = await N().get(r);
                this.m_strProfanityWords += l.data;
              }
            }
            const o = this.m_WebUIServiceTransport.BIsValid(),
              a = "CTextFilterStore_strCleanPublic_" + e;
            r = `${u.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=${t}&origin=${J()}`;
            try {
              const l = await N().get(r);
              (this.m_strCleanWords += l.data),
                o && this.SaveObfuscatedString(a, l.data);
            } catch (l) {
              console.warn("LoadLanguage caught while loading clean list:", l);
              const L = o ? await this.LoadObfuscatedString(a) : null;
              if (!L) return !1;
              this.m_strCleanWords += L;
            }
            return !0;
          }
          CreatePattern(e) {
            let t = e.filter(function (r) {
              return Fe(r);
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
              case m.Bx6.C5:
                break;
              case m.Bx6.NS:
                break;
              case m.Bx6.bf:
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
            let s = this.CreatePattern(t),
              o = this.CreatePattern(r);
            o != "" && (o = "^(" + o + ")$"),
              this.BRebuildFilter(s, o) &&
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
                  (0, F.aj)().ReportError(
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
                  (0, F.aj)().ReportError(
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
                ? (r = new de.b(e).GetAccountID())
                : typeof e == "number" && (r = e),
              !t ||
              r == this.m_unAccountID ||
              (e &&
                this.m_TextFilterPreferences.bIgnoreFriends &&
                this.m_DataAccess.BIsFriend(r))
                ? t
                : t.replace(this.m_regexBannedWords, (s) =>
                    this.m_regexCleanWords &&
                    s.search(this.m_regexCleanWords) == 0
                      ? s
                      : this.CreateProfanityReplacement(s.length),
                  )
            );
          }
        }
        U([R.sH], H.prototype, "m_TextFilterPreferences", 2),
          U([R.sH], H.prototype, "m_mapPlayerCache", 2),
          U([R.sH], H.prototype, "m_regexBannedWords", 2),
          U([R.sH], H.prototype, "m_regexCleanWords", 2),
          U([R.sH], H.prototype, "m_bInitialized", 2),
          U([R.sH], H.prototype, "m_bFilterChangedWhileLoading", 2),
          U([R.sH], H.prototype, "m_bOngoingLoad", 2),
          U([R.XI], H.prototype, "Init", 1),
          U([Re.o], H.prototype, "OnTextFilterDictionaryChanged", 1),
          U([R.XI], H.prototype, "UpdateCommunityPreferences", 1),
          U([R.XI], H.prototype, "BRebuildFilter", 1);
        let ce;
        function Pe() {
          if (!ce) {
            const c = new Set();
            let e = { sessionid: (0, u.KC)(), origin: J() };
            N()
              .get(u.TS.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist", {
                params: e,
                withCredentials: !0,
              })
              .then((t) => {
                for (const r of t.data.friendslist?.friends ?? [])
                  (0, _.S$u)(r.efriendrelationship) &&
                    c.add(new de.b(r.ulfriendid).GetAccountID());
              }),
              (ce = (t) => c.has(t));
          }
          return ce;
        }
      },
    },
  ]);
})();
