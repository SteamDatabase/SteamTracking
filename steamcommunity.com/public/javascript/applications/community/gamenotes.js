/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [1220],
    {
      92987: (Br, Mr, d) => {
        "use strict";
        d.r(Mr), d.d(Mr, { default: () => xl });
        var m = d(7850),
          v = d(99412),
          B = d(90626),
          q = d(92757),
          wr = d(68312);
        const D = {
          List: () => "/notes/list",
          AppNotes: (o, e) => `/notes/app/${o}/${e != null ? e : ""}`,
          ShortcutNotes: (o, e) => `/notes/shortcut/${o}/${e != null ? e : ""}`,
        };
        function mr(o, e) {
          return "appid" in o
            ? D.AppNotes(o.appid, e)
            : D.ShortcutNotes(o.shortcut, e);
        }
        var cr = d(72604),
          G = d(74432),
          U = d(71742),
          b = d(35038),
          a = d(80613),
          i = d.n(a),
          t = d(75245),
          dr = Object.defineProperty,
          O = (o, e, r) =>
            e in o
              ? dr(o, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (o[e] = r),
          n = (o, e, r) => O(o, typeof e != "symbol" ? e + "" : e, r);
        function p(o) {
          return "unknown ECloudPendingRemoteOperation ( " + o + " )";
        }
        function M(o) {
          return "unknown EDisplayManagerRGBRange ( " + o + " )";
        }
        function y(o) {
          return "unknown ESteamDeckKeyboardLayout ( " + o + " )";
        }
        const h = class k extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              k.prototype.a || t.Sg(k.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    a: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    b: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    c: { n: 3, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    d: { n: 4, br: t.qM.readEnum, bw: t.gp.writeEnum },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = t.w0(k.M())), k.sm_mbf;
          }
          toObject(e = !1) {
            return k.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(k.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(k.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new k();
            return k.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(k.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(k.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SteamMessagesClientIClientForcedEnumDependencies";
          }
        };
        n(h, "sm_m"), n(h, "sm_mbf");
        let j = null;
        const T = class _ extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _.prototype.ip || t.Sg(_.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    ip: { n: 1, d: 0, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    netmask: { n: 2, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = t.w0(_.M())), _.sm_mbf;
          }
          toObject(e = !1) {
            return _.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(_.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(_.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new _();
            return _.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(_.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(_.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceIP4Address";
          }
        };
        n(T, "sm_m"), n(T, "sm_mbf");
        let R = T;
        const N = class H extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              H.prototype.addresses || t.Sg(H.M()),
              a.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    addresses: { n: 1, c: R, r: !0, q: !0 },
                    dns_ip: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readInt32,
                      pbr: t.qM.readPackedInt32,
                      bw: t.gp.writeRepeatedInt32,
                    },
                    gateway_ip: {
                      n: 3,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_dhcp_enabled: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_default_route: {
                      n: 5,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_enabled: {
                      n: 6,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = t.w0(H.M())), H.sm_mbf;
          }
          toObject(e = !1) {
            return H.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(H.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(H.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new H();
            return H.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(H.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(H.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceIP4Config";
          }
        };
        n(N, "sm_m"), n(N, "sm_mbf");
        let F = N;
        const P = class K extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              K.prototype.ip || t.Sg(K.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    ip: {
                      n: 1,
                      d: "",
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = t.w0(K.M())), K.sm_mbf;
          }
          toObject(e = !1) {
            return K.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(K.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(K.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new K();
            return K.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(K.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(K.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceIP6Address";
          }
        };
        n(P, "sm_m"), n(P, "sm_mbf");
        let pr = P;
        const C = class V extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              V.prototype.addresses || t.Sg(V.M()),
              a.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    addresses: { n: 1, c: pr, r: !0, q: !0 },
                    dns_ip: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readString,
                      bw: t.gp.writeRepeatedString,
                    },
                    gateway_ip: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_dhcp_enabled: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_default_route: {
                      n: 5,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_enabled: {
                      n: 6,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = t.w0(V.M())), V.sm_mbf;
          }
          toObject(e = !1) {
            return V.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(V.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(V.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new V();
            return V.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(V.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(V.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceIP6Config";
          }
        };
        n(C, "sm_m"), n(C, "sm_mbf");
        let yr = C;
        const zr = class $ extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $.prototype.devices || t.Sg($.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    devices: { n: 1, c: x, r: !0, q: !0 },
                    is_wifi_enabled: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_wifi_scanning_enabled: {
                      n: 3,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = t.w0($.M())), $.sm_mbf;
          }
          toObject(e = !1) {
            return $.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT($.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq($.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new $();
            return $.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj($.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0($.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDevicesData";
          }
        };
        n(zr, "sm_m"), n(zr, "sm_mbf");
        let L = null;
        const I = class Q extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Q.prototype.id || t.Sg(Q.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    id: {
                      n: 1,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    etype: { n: 2, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    estate: { n: 3, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    mac: { n: 4, br: t.qM.readString, bw: t.gp.writeString },
                    vendor: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                    product: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    ip4: { n: 7, c: F },
                    ip6: { n: 8, c: yr },
                    wired: { n: 9, c: fr },
                    wireless: { n: 10, c: kr },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = t.w0(Q.M())), Q.sm_mbf;
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Q.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Q.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Q();
            return Q.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Q.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Q.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDevicesData_Device";
          }
        };
        n(I, "sm_m"), n(I, "sm_mbf");
        let x = I;
        const gr = class X extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              X.prototype.is_cable_present || t.Sg(X.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    is_cable_present: {
                      n: 1,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    speed_mbit: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    friendly_name: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = t.w0(X.M())), X.sm_mbf;
          }
          toObject(e = !1) {
            return X.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(X.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(X.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new X();
            return X.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(X.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(X.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDevicesData_Device_Wired";
          }
        };
        n(gr, "sm_m"), n(gr, "sm_mbf");
        let fr = gr;
        const Wr = class Y extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Y.prototype.aps || t.Sg(Y.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    aps: { n: 1, c: Pr, r: !0, q: !0 },
                    esecurity_supported: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = t.w0(Y.M())), Y.sm_mbf;
          }
          toObject(e = !1) {
            return Y.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Y.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Y.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Y();
            return Y.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Y.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Y.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDevicesData_Device_Wireless";
          }
        };
        n(Wr, "sm_m"), n(Wr, "sm_mbf");
        let kr = Wr;
        const Cr = class J extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              J.prototype.id || t.Sg(J.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    id: {
                      n: 1,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    estrength: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    ssid: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    is_active: { n: 4, br: t.qM.readBool, bw: t.gp.writeBool },
                    is_autoconnect: {
                      n: 5,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    esecurity: {
                      n: 6,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    user_name: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    password: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    strength_raw: {
                      n: 9,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    band_filter: {
                      n: 10,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    has_non_6ghz_channel: {
                      n: 11,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_saved: { n: 12, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = t.w0(J.M())), J.sm_mbf;
          }
          toObject(e = !1) {
            return J.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(J.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(J.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new J();
            return J.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(J.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(J.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDevicesData_Device_Wireless_AP";
          }
        };
        n(Cr, "sm_m"), n(Cr, "sm_mbf");
        let Pr = Cr;
        const vr = class Z extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Z.prototype.device_id || t.Sg(Z.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    device_id: {
                      n: 1,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    ap_known: { n: 2, c: Xa },
                    ap_custom: { n: 3, c: Ya },
                    credentials: { n: 4, c: Ja },
                    ip4: { n: 5, c: F },
                    ip6: { n: 6, c: yr },
                    wireless: { n: 7, c: Za },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = t.w0(Z.M())), Z.sm_mbf;
          }
          toObject(e = !1) {
            return Z.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Z.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Z.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Z();
            return Z.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Z.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Z.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceConnect";
          }
        };
        n(vr, "sm_m"), n(vr, "sm_mbf");
        let Hs = null;
        const _r = class ee extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ee.prototype.ap_id || t.Sg(ee.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    ap_id: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = t.w0(ee.M())), ee.sm_mbf;
          }
          toObject(e = !1) {
            return ee.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ee.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ee.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ee();
            return ee.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ee.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ee.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceConnect_KnownAP";
          }
        };
        n(_r, "sm_m"), n(_r, "sm_mbf");
        let Xa = _r;
        const ti = class te extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              te.prototype.ssid || t.Sg(te.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
                  fields: {
                    ssid: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    esecurity: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              te.sm_m
            );
          }
          static MBF() {
            return te.sm_mbf || (te.sm_mbf = t.w0(te.M())), te.sm_mbf;
          }
          toObject(e = !1) {
            return te.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(te.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(te.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new te();
            return te.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(te.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(te.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceConnect_CustomAP";
          }
        };
        n(ti, "sm_m"), n(ti, "sm_mbf");
        let Ya = ti;
        const ri = class re extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              re.prototype.username || t.Sg(re.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: {
                    username: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    password: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = t.w0(re.M())), re.sm_mbf;
          }
          toObject(e = !1) {
            return re.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(re.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(re.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new re();
            return re.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(re.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(re.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceConnect_Credentials";
          }
        };
        n(ri, "sm_m"), n(ri, "sm_mbf");
        let Ja = ri;
        const ii = class ie extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ie.prototype.band_filter || t.Sg(ie.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    band_filter: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = t.w0(ie.M())), ie.sm_mbf;
          }
          toObject(e = !1) {
            return ie.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ie.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ie.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ie();
            return ie.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ie.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ie.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceConnect_Wireless";
          }
        };
        n(ii, "sm_m"), n(ii, "sm_mbf");
        let Za = ii;
        const Ks = class se extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              se.prototype.wireless || t.Sg(se.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: { wireless: { n: 2, c: en } },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = t.w0(se.M())), se.sm_mbf;
          }
          toObject(e = !1) {
            return se.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(se.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(se.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new se();
            return se.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(se.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(se.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceSetOptions";
          }
        };
        n(Ks, "sm_m"), n(Ks, "sm_mbf");
        let Ql = null;
        const si = class ae extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ae.prototype.ap_id || t.Sg(ae.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    ap_id: {
                      n: 1,
                      q: !0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_autoconnect: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    band_filter: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = t.w0(ae.M())), ae.sm_mbf;
          }
          toObject(e = !1) {
            return ae.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ae.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ae.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ae();
            return ae.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ae.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ae.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceSetOptions_Wireless";
          }
        };
        n(si, "sm_m"), n(si, "sm_mbf");
        let en = si;
        const Vs = class ne extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ne.prototype.drives || t.Sg(ne.M()),
              a.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: {
                    drives: { n: 1, c: tn, r: !0, q: !0 },
                    block_devices: { n: 2, c: rn, r: !0, q: !0 },
                    is_unmount_supported: {
                      n: 3,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_trim_supported: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_trim_running: {
                      n: 5,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              ne.sm_m
            );
          }
          static MBF() {
            return ne.sm_mbf || (ne.sm_mbf = t.w0(ne.M())), ne.sm_mbf;
          }
          toObject(e = !1) {
            return ne.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ne.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ne.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ne();
            return ne.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ne.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ne.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgStorageDevicesData";
          }
        };
        n(Vs, "sm_m"), n(Vs, "sm_mbf");
        let Xl = null;
        const ai = class oe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              oe.prototype.id || t.Sg(oe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    id: {
                      n: 1,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    model: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    vendor: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    serial: { n: 4, br: t.qM.readString, bw: t.gp.writeString },
                    is_ejectable: {
                      n: 5,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    size_bytes: {
                      n: 6,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    media_type: { n: 7, br: t.qM.readEnum, bw: t.gp.writeEnum },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = t.w0(oe.M())), oe.sm_mbf;
          }
          toObject(e = !1) {
            return oe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(oe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(oe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new oe();
            return oe.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(oe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(oe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgStorageDevicesData_Drive";
          }
        };
        n(ai, "sm_m"), n(ai, "sm_mbf");
        let tn = ai;
        const ni = class le extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              le.prototype.id || t.Sg(le.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    id: {
                      n: 1,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    drive_id: {
                      n: 2,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    path: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    friendly_path: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    label: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                    size_bytes: {
                      n: 6,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    is_formattable: {
                      n: 7,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_read_only: {
                      n: 8,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_root_device: {
                      n: 9,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    content_type: {
                      n: 10,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    filesystem_type: {
                      n: 11,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    mount_path: {
                      n: 12,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = t.w0(le.M())), le.sm_mbf;
          }
          toObject(e = !1) {
            return le.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(le.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(le.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new le();
            return le.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(le.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(le.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgStorageDevicesData_BlockDevice";
          }
        };
        n(ni, "sm_m"), n(ni, "sm_mbf");
        let rn = ni;
        const oi = class me extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              me.prototype.operation || t.Sg(me.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: {
                    operation: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    machine_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    client_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    time_last_updated: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    os_type: { n: 5, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    device_type: {
                      n: 6,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = t.w0(me.M())), me.sm_mbf;
          }
          toObject(e = !1) {
            return me.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(me.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(me.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new me();
            return me.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(me.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(me.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_PendingRemoteOperation";
          }
        };
        n(oi, "sm_m"), n(oi, "sm_mbf");
        let $s = oi;
        const Qs = class ce extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ce.prototype.operations || t.Sg(ce.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: { operations: { n: 1, c: $s, r: !0, q: !0 } },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = t.w0(ce.M())), ce.sm_mbf;
          }
          toObject(e = !1) {
            return ce.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ce.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ce.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ce();
            return ce.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ce.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ce.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgCloudPendingRemoteOperations";
          }
        };
        n(Qs, "sm_m"), n(Qs, "sm_mbf");
        let Yl = null;
        const Xs = class ue extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ue.prototype.adapters || t.Sg(ue.M()),
              a.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: {
                    adapters: { n: 1, c: sn, r: !0, q: !0 },
                    devices: { n: 2, c: an, r: !0, q: !0 },
                    manager: { n: 3, c: nn },
                  },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = t.w0(ue.M())), ue.sm_mbf;
          }
          toObject(e = !1) {
            return ue.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ue.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ue.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ue();
            return ue.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ue.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ue.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgBluetoothDevicesData";
          }
        };
        n(Xs, "sm_m"), n(Xs, "sm_mbf");
        let Jl = null;
        const li = class de extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.id || t.Sg(de.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    id: {
                      n: 1,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    mac: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    name: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    is_enabled: { n: 4, br: t.qM.readBool, bw: t.gp.writeBool },
                    is_discovering: {
                      n: 5,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = t.w0(de.M())), de.sm_mbf;
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(de.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new de();
            return de.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(de.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(de.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgBluetoothDevicesData_Adapter";
          }
        };
        n(li, "sm_m"), n(li, "sm_mbf");
        let sn = li;
        const mi = class ge extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ge.prototype.id || t.Sg(ge.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    id: {
                      n: 1,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    adapter_id: {
                      n: 2,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    etype: { n: 3, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    mac: { n: 4, br: t.qM.readString, bw: t.gp.writeString },
                    name: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                    is_connected: {
                      n: 6,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_paired: { n: 7, br: t.qM.readBool, bw: t.gp.writeBool },
                    strength_raw: {
                      n: 8,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    wake_allowed: {
                      n: 9,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    wake_allowed_supported: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    battery_percent: {
                      n: 11,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = t.w0(ge.M())), ge.sm_mbf;
          }
          toObject(e = !1) {
            return ge.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ge.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ge.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ge();
            return ge.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ge.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ge.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgBluetoothDevicesData_Device";
          }
        };
        n(mi, "sm_m"), n(mi, "sm_mbf");
        let an = mi;
        const ci = class pe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pe.prototype.is_bluetooth_enabled || t.Sg(pe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: {
                    is_bluetooth_enabled: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = t.w0(pe.M())), pe.sm_mbf;
          }
          toObject(e = !1) {
            return pe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(pe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(pe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new pe();
            return pe.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(pe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(pe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgBluetoothDevicesData_Manager";
          }
        };
        n(ci, "sm_m"), n(ci, "sm_mbf");
        let nn = ci;
        const ui = class Be extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Be.prototype.name || t.Sg(Be.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Be.sm_m ||
                (Be.sm_m = {
                  proto: Be,
                  fields: {
                    name: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    value: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Be.sm_m
            );
          }
          static MBF() {
            return Be.sm_mbf || (Be.sm_mbf = t.w0(Be.M())), Be.sm_mbf;
          }
          toObject(e = !1) {
            return Be.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Be.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Be.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Be();
            return Be.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Be.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Be.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfDiagnosticEntry";
          }
        };
        n(ui, "sm_m"), n(ui, "sm_mbf");
        let on = ui;
        const di = class fe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              fe.prototype.name || t.Sg(fe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: {
                    name: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    timestamp: {
                      n: 2,
                      br: t.qM.readDouble,
                      bw: t.gp.writeDouble,
                    },
                    tx_bytes_total: {
                      n: 3,
                      br: t.qM.readInt64String,
                      bw: t.gp.writeInt64String,
                    },
                    rx_bytes_total: {
                      n: 4,
                      br: t.qM.readInt64String,
                      bw: t.gp.writeInt64String,
                    },
                    tx_bytes_per_sec: {
                      n: 5,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    rx_bytes_per_sec: {
                      n: 6,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = t.w0(fe.M())), fe.sm_mbf;
          }
          toObject(e = !1) {
            return fe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(fe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(fe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new fe();
            return fe.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(fe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(fe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfNetworkInterface";
          }
        };
        n(di, "sm_m"), n(di, "sm_mbf");
        let ln = di;
        const Ys = class be extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              be.prototype.entries || t.Sg(be.M()),
              a.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    entries: { n: 1, c: on, r: !0, q: !0 },
                    interfaces: { n: 2, c: ln, r: !0, q: !0 },
                    battery_temp_c: {
                      n: 3,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = t.w0(be.M())), be.sm_mbf;
          }
          toObject(e = !1) {
            return be.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(be.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(be.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new be();
            return be.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(be.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(be.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfDiagnosticInfo";
          }
        };
        n(Ys, "sm_m"), n(Ys, "sm_mbf");
        let Zl = null;
        const gi = class Me extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Me.prototype.cpu_governor_manual_min_mhz || t.Sg(Me.M()),
              a.Message.initialize(this, e, 0, -1, [13, 21, 26, 27], null);
          }
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
                  fields: {
                    cpu_governor_manual_min_mhz: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    cpu_governor_manual_max_mhz: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    fsr_sharpness_min: {
                      n: 3,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    fsr_sharpness_max: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    perf_overlay_is_standalone: {
                      n: 7,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_manual_display_refresh_rate_available: {
                      n: 9,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    display_refresh_manual_hz_min: {
                      n: 11,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    display_refresh_manual_hz_max: {
                      n: 12,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    fps_limit_options: {
                      n: 13,
                      r: !0,
                      q: !0,
                      br: t.qM.readInt32,
                      pbr: t.qM.readPackedInt32,
                      bw: t.gp.writeRepeatedInt32,
                    },
                    tdp_limit_min: {
                      n: 14,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    tdp_limit_max: {
                      n: 15,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    display_external_refresh_manual_hz_min: {
                      n: 19,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    display_external_refresh_manual_hz_max: {
                      n: 20,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    fps_limit_options_external: {
                      n: 21,
                      r: !0,
                      q: !0,
                      br: t.qM.readInt32,
                      pbr: t.qM.readPackedInt32,
                      bw: t.gp.writeRepeatedInt32,
                    },
                    is_vrr_supported: {
                      n: 23,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_dynamic_refresh_rate_in_steam_supported: {
                      n: 24,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    split_scaling_filters_available: {
                      n: 26,
                      r: !0,
                      q: !0,
                      br: t.qM.readEnum,
                      pbr: t.qM.readPackedEnum,
                      bw: t.gp.writeRepeatedEnum,
                    },
                    split_scaling_scalers_available: {
                      n: 27,
                      r: !0,
                      q: !0,
                      br: t.qM.readEnum,
                      pbr: t.qM.readPackedEnum,
                      bw: t.gp.writeRepeatedEnum,
                    },
                    disable_refresh_rate_management: {
                      n: 30,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Me.sm_m
            );
          }
          static MBF() {
            return Me.sm_mbf || (Me.sm_mbf = t.w0(Me.M())), Me.sm_mbf;
          }
          toObject(e = !1) {
            return Me.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Me.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Me.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Me();
            return Me.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Me.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Me.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfLimits";
          }
        };
        n(gi, "sm_m"), n(gi, "sm_mbf");
        let mn = gi;
        const pi = class we extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              we.prototype.diagnostic_update_rate || t.Sg(we.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    diagnostic_update_rate: {
                      n: 1,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    graphics_profiling_service_state: {
                      n: 3,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    perf_overlay_service_state: {
                      n: 4,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    perf_overlay_level: {
                      n: 5,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    is_show_perf_overlay_over_steam_enabled: {
                      n: 6,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_advanced_settings_enabled: {
                      n: 7,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    allow_external_display_refresh_control: {
                      n: 8,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    hdr_on_sdr_tonemap_operator: {
                      n: 12,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    is_hdr_debug_heatmap_enabled: {
                      n: 13,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    force_hdr_wide_gammut_for_sdr: {
                      n: 15,
                      d: !0,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    sdr_to_hdr_brightness: {
                      n: 22,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    is_color_management_enabled: {
                      n: 21,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = t.w0(we.M())), we.sm_mbf;
          }
          toObject(e = !1) {
            return we.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(we.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(we.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new we();
            return we.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(we.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(we.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfSettingsGlobal";
          }
        };
        n(pi, "sm_m"), n(pi, "sm_mbf");
        let Js = pi;
        const Bi = class ye extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ye.prototype.fps_limit || t.Sg(ye.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: {
                    fps_limit: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_variable_resolution_enabled: {
                      n: 3,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_dynamic_refresh_rate_enabled: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    tdp_limit: {
                      n: 5,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    cpu_governor: {
                      n: 6,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    cpu_governor_manual_mhz: {
                      n: 7,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    scaling_filter: {
                      n: 8,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    fsr_sharpness: {
                      n: 9,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_fps_limit_enabled: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_tdp_limit_enabled: {
                      n: 11,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_low_latency_mode_enabled: {
                      n: 12,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    display_refresh_manual_hz: {
                      n: 13,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_game_perf_profile_enabled: {
                      n: 14,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    display_external_refresh_manual_hz: {
                      n: 17,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    fps_limit_external: {
                      n: 18,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_tearing_enabled: {
                      n: 19,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_vrr_enabled: {
                      n: 20,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    use_dynamic_refresh_rate_in_steam: {
                      n: 23,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    split_scaling_filter: {
                      n: 24,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    split_scaling_scaler: {
                      n: 25,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                  },
                }),
              ye.sm_m
            );
          }
          static MBF() {
            return ye.sm_mbf || (ye.sm_mbf = t.w0(ye.M())), ye.sm_mbf;
          }
          toObject(e = !1) {
            return ye.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ye.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ye.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ye();
            return ye.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ye.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ye.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfSettingsPerApp";
          }
        };
        n(Bi, "sm_m"), n(Bi, "sm_mbf");
        let Zs = Bi;
        const fi = class ze extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ze.prototype.global || t.Sg(ze.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: { global: { n: 1, c: Js }, per_app: { n: 2, c: Zs } },
                }),
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = t.w0(ze.M())), ze.sm_mbf;
          }
          toObject(e = !1) {
            return ze.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ze.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ze.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ze();
            return ze.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ze.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ze.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfSettings";
          }
        };
        n(fi, "sm_m"), n(fi, "sm_mbf");
        let ea = fi;
        const ta = class Se extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Se.prototype.diagnostic_update_rate || t.Sg(Se.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Se.sm_m ||
                (Se.sm_m = {
                  proto: Se,
                  fields: {
                    diagnostic_update_rate: {
                      n: 1,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    system_trace_service_state: {
                      n: 2,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    graphics_profiling_service_state: {
                      n: 3,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    perf_overlay_service_state: {
                      n: 4,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    perf_overlay_level: {
                      n: 5,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    gpu_performance_level: {
                      n: 6,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    gpu_performance_manual_mhz: {
                      n: 7,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    fps_limit: {
                      n: 8,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_variable_resolution_enabled: {
                      n: 9,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_dynamic_refresh_rate_enabled: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    tdp_limit: {
                      n: 11,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    cpu_governor: {
                      n: 12,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    cpu_governor_manual_mhz: {
                      n: 13,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    scaling_filter: {
                      n: 14,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    fsr_sharpness: {
                      n: 15,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_fps_limit_enabled: {
                      n: 16,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_tdp_limit_enabled: {
                      n: 17,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_show_perf_overlay_over_steam_enabled: {
                      n: 18,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_low_latency_mode_enabled: {
                      n: 19,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    display_refresh_manual_hz: {
                      n: 20,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_game_perf_profile_enabled: {
                      n: 21,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Se.sm_m
            );
          }
          static MBF() {
            return Se.sm_mbf || (Se.sm_mbf = t.w0(Se.M())), Se.sm_mbf;
          }
          toObject(e = !1) {
            return Se.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Se.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Se.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Se();
            return Se.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Se.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Se.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfSettingsV1";
          }
        };
        n(ta, "sm_m"), n(ta, "sm_mbf");
        let em = null;
        const ra = class Ce extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ce.prototype.limits || t.Sg(Ce.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: {
                    limits: { n: 1, c: mn },
                    settings: { n: 2, c: ea },
                    current_game_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    active_profile_game_id: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Ce.sm_m
            );
          }
          static MBF() {
            return Ce.sm_mbf || (Ce.sm_mbf = t.w0(Ce.M())), Ce.sm_mbf;
          }
          toObject(e = !1) {
            return Ce.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ce.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ce.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Ce();
            return Ce.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ce.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ce.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfState";
          }
        };
        n(ra, "sm_m"), n(ra, "sm_mbf");
        let tm = null;
        const ia = class he extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.gameid || t.Sg(he.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    gameid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    reset_to_default: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    settings_delta: { n: 3, c: ea },
                    skip_storage_update: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = t.w0(he.M())), he.sm_mbf;
          }
          toObject(e = !1) {
            return he.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(he.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new he();
            return he.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(he.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(he.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfUpdateSettings";
          }
        };
        n(ia, "sm_m"), n(ia, "sm_mbf");
        let rm = null;
        const bi = class Re extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Re.prototype.profile_game_id || t.Sg(Re.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Re.sm_m ||
                (Re.sm_m = {
                  proto: Re,
                  fields: {
                    profile_game_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    settings: { n: 2, c: Zs },
                  },
                }),
              Re.sm_m
            );
          }
          static MBF() {
            return Re.sm_mbf || (Re.sm_mbf = t.w0(Re.M())), Re.sm_mbf;
          }
          toObject(e = !1) {
            return Re.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Re.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Re.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Re();
            return Re.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Re.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Re.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfLegacySettingEntry";
          }
        };
        n(bi, "sm_m"), n(bi, "sm_mbf");
        let cn = bi;
        const sa = class Fe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Fe.prototype.global || t.Sg(Fe.M()),
              a.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
                  fields: {
                    global: { n: 1, c: Js },
                    per_app_settings: { n: 2, c: cn, r: !0, q: !0 },
                  },
                }),
              Fe.sm_m
            );
          }
          static MBF() {
            return Fe.sm_mbf || (Fe.sm_mbf = t.w0(Fe.M())), Fe.sm_mbf;
          }
          toObject(e = !1) {
            return Fe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Fe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Fe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Fe();
            return Fe.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Fe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Fe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfLegacySettings";
          }
        };
        n(sa, "sm_m"), n(sa, "sm_mbf");
        let im = null;
        const Mi = class ve extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ve.prototype.state || t.Sg(ve.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: {
                    state: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    rtime_last_checked: {
                      n: 2,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                    version_current: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    version_available: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    stage_progress: {
                      n: 5,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    rtime_estimated_completion: {
                      n: 6,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                    old_fw_workaround: {
                      n: 7,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              ve.sm_m
            );
          }
          static MBF() {
            return ve.sm_mbf || (ve.sm_mbf = t.w0(ve.M())), ve.sm_mbf;
          }
          toObject(e = !1) {
            return ve.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ve.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ve.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ve();
            return ve.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ve.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ve.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDockUpdateState";
          }
        };
        n(Mi, "sm_m"), n(Mi, "sm_mbf");
        let un = Mi;
        const aa = class je extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              je.prototype.update_state || t.Sg(je.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              je.sm_m ||
                (je.sm_m = {
                  proto: je,
                  fields: { update_state: { n: 1, c: un } },
                }),
              je.sm_m
            );
          }
          static MBF() {
            return je.sm_mbf || (je.sm_mbf = t.w0(je.M())), je.sm_mbf;
          }
          toObject(e = !1) {
            return je.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(je.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(je.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new je();
            return je.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(je.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(je.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDockState";
          }
        };
        n(aa, "sm_m"), n(aa, "sm_mbf");
        let sm = null;
        const na = class Te extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Te.prototype.check_only || t.Sg(Te.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Te.sm_m ||
                (Te.sm_m = {
                  proto: Te,
                  fields: {
                    check_only: { n: 1, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              Te.sm_m
            );
          }
          static MBF() {
            return Te.sm_mbf || (Te.sm_mbf = t.w0(Te.M())), Te.sm_mbf;
          }
          toObject(e = !1) {
            return Te.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Te.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Te.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Te();
            return Te.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Te.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Te.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDockUpdateFirmware";
          }
        };
        n(na, "sm_m"), n(na, "sm_mbf");
        let am = null;
        const wi = class We extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              We.prototype.entries || t.Sg(We.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              We.sm_m ||
                (We.sm_m = {
                  proto: We,
                  fields: {
                    entries: { n: 1, c: gn, r: !0, q: !0 },
                    is_muted: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              We.sm_m
            );
          }
          static MBF() {
            return We.sm_mbf || (We.sm_mbf = t.w0(We.M())), We.sm_mbf;
          }
          toObject(e = !1) {
            return We.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(We.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(We.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new We();
            return We.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(We.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(We.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              We.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioVolume";
          }
        };
        n(wi, "sm_m"), n(wi, "sm_mbf");
        let dn = wi;
        const yi = class qe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              qe.prototype.echannel || t.Sg(qe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              qe.sm_m ||
                (qe.sm_m = {
                  proto: qe,
                  fields: {
                    echannel: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    volume: { n: 2, br: t.qM.readFloat, bw: t.gp.writeFloat },
                  },
                }),
              qe.sm_m
            );
          }
          static MBF() {
            return qe.sm_mbf || (qe.sm_mbf = t.w0(qe.M())), qe.sm_mbf;
          }
          toObject(e = !1) {
            return qe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(qe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(qe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new qe();
            return qe.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(qe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(qe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioVolume_ChannelEntry";
          }
        };
        n(yi, "sm_m"), n(yi, "sm_mbf");
        let gn = yi;
        const zi = class Ue extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ue.prototype.id || t.Sg(Ue.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ue.sm_m ||
                (Ue.sm_m = {
                  proto: Ue,
                  fields: {
                    id: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    rtime_last_update: {
                      n: 2,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                  },
                }),
              Ue.sm_m
            );
          }
          static MBF() {
            return Ue.sm_mbf || (Ue.sm_mbf = t.w0(Ue.M())), Ue.sm_mbf;
          }
          toObject(e = !1) {
            return Ue.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ue.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ue.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Ue();
            return Ue.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ue.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ue.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerObject";
          }
        };
        n(zi, "sm_m"), n(zi, "sm_mbf");
        let Xr = zi;
        const Si = class Ie extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ie.prototype.base || t.Sg(Ie.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ie.sm_m ||
                (Ie.sm_m = {
                  proto: Ie,
                  fields: {
                    base: { n: 1, c: Xr },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    nick: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    description: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    api: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Ie.sm_m
            );
          }
          static MBF() {
            return Ie.sm_mbf || (Ie.sm_mbf = t.w0(Ie.M())), Ie.sm_mbf;
          }
          toObject(e = !1) {
            return Ie.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ie.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ie.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Ie();
            return Ie.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ie.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ie.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerDevice";
          }
        };
        n(Si, "sm_m"), n(Si, "sm_mbf");
        let pn = Si;
        const Ci = class Oe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Oe.prototype.base || t.Sg(Oe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Oe.sm_m ||
                (Oe.sm_m = {
                  proto: Oe,
                  fields: {
                    base: { n: 1, c: Xr },
                    device_id: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    name: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    nick: { n: 4, br: t.qM.readString, bw: t.gp.writeString },
                    description: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    edirection: { n: 6, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    volume: { n: 7, c: dn },
                  },
                }),
              Oe.sm_m
            );
          }
          static MBF() {
            return Oe.sm_mbf || (Oe.sm_mbf = t.w0(Oe.M())), Oe.sm_mbf;
          }
          toObject(e = !1) {
            return Oe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Oe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Oe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Oe();
            return Oe.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Oe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Oe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerNode";
          }
        };
        n(Ci, "sm_m"), n(Ci, "sm_mbf");
        let Bn = Ci;
        const hi = class Ne extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ne.prototype.base || t.Sg(Ne.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ne.sm_m ||
                (Ne.sm_m = {
                  proto: Ne,
                  fields: {
                    base: { n: 1, c: Xr },
                    node_id: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    name: { n: 4, br: t.qM.readString, bw: t.gp.writeString },
                    alias: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                    etype: { n: 6, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    edirection: { n: 7, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    is_physical: {
                      n: 8,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_terminal: {
                      n: 9,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_control: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_monitor: {
                      n: 11,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Ne.sm_m
            );
          }
          static MBF() {
            return Ne.sm_mbf || (Ne.sm_mbf = t.w0(Ne.M())), Ne.sm_mbf;
          }
          toObject(e = !1) {
            return Ne.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ne.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ne.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Ne();
            return Ne.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ne.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ne.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerPort";
          }
        };
        n(hi, "sm_m"), n(hi, "sm_mbf");
        let fn = hi;
        const Ri = class xe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xe.prototype.base || t.Sg(xe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              xe.sm_m ||
                (xe.sm_m = {
                  proto: xe,
                  fields: {
                    base: { n: 1, c: Xr },
                    output_node_id: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    output_port_id: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    input_node_id: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    input_port_id: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              xe.sm_m
            );
          }
          static MBF() {
            return xe.sm_mbf || (xe.sm_mbf = t.w0(xe.M())), xe.sm_mbf;
          }
          toObject(e = !1) {
            return xe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(xe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(xe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new xe();
            return xe.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(xe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(xe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerLink";
          }
        };
        n(Ri, "sm_m"), n(Ri, "sm_mbf");
        let bn = Ri;
        const Fi = class De extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              De.prototype.devices || t.Sg(De.M()),
              a.Message.initialize(this, e, 0, -1, [1, 2, 3, 4], null);
          }
          static M() {
            return (
              De.sm_m ||
                (De.sm_m = {
                  proto: De,
                  fields: {
                    devices: { n: 1, c: pn, r: !0, q: !0 },
                    nodes: { n: 2, c: Bn, r: !0, q: !0 },
                    ports: { n: 3, c: fn, r: !0, q: !0 },
                    links: { n: 4, c: bn, r: !0, q: !0 },
                  },
                }),
              De.sm_m
            );
          }
          static MBF() {
            return De.sm_mbf || (De.sm_mbf = t.w0(De.M())), De.sm_mbf;
          }
          toObject(e = !1) {
            return De.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(De.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(De.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new De();
            return De.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(De.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(De.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              De.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerStateHW";
          }
        };
        n(Fi, "sm_m"), n(Fi, "sm_mbf");
        let Mn = Fi;
        const oa = class Pe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pe.prototype.rtime_filter || t.Sg(Pe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Pe.sm_m ||
                (Pe.sm_m = {
                  proto: Pe,
                  fields: {
                    rtime_filter: {
                      n: 1,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                    counter: { n: 2, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    hw: { n: 3, c: Mn },
                  },
                }),
              Pe.sm_m
            );
          }
          static MBF() {
            return Pe.sm_mbf || (Pe.sm_mbf = t.w0(Pe.M())), Pe.sm_mbf;
          }
          toObject(e = !1) {
            return Pe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Pe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Pe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Pe();
            return Pe.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Pe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Pe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerState";
          }
        };
        n(oa, "sm_m"), n(oa, "sm_mbf");
        let nm = null;
        const la = class Ee extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ee.prototype.counter || t.Sg(Ee.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    counter: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                  },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = t.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(e = !1) {
            return Ee.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ee.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ee.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Ee();
            return Ee.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ee.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ee.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerUpdateSomething";
          }
        };
        n(la, "sm_m"), n(la, "sm_mbf");
        let om = null;
        const vi = class Ae extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ae.prototype.id || t.Sg(Ae.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: {
                    id: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    width: { n: 2, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    height: { n: 3, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    refresh_hz: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              Ae.sm_m
            );
          }
          static MBF() {
            return Ae.sm_mbf || (Ae.sm_mbf = t.w0(Ae.M())), Ae.sm_mbf;
          }
          toObject(e = !1) {
            return Ae.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ae.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ae.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Ae();
            return Ae.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ae.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ae.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDisplayMode";
          }
        };
        n(vi, "sm_m"), n(vi, "sm_mbf");
        let wn = vi;
        const ji = class Ge extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ge.prototype.id || t.Sg(Ge.M()),
              a.Message.initialize(this, e, 0, -1, [11, 18], null);
          }
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: {
                    id: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    description: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_primary: { n: 4, br: t.qM.readBool, bw: t.gp.writeBool },
                    is_enabled: { n: 5, br: t.qM.readBool, bw: t.gp.writeBool },
                    is_internal: {
                      n: 6,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    has_mode_override: {
                      n: 7,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    width_mm: { n: 8, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    height_mm: {
                      n: 9,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    current_mode_id: {
                      n: 10,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    modes: { n: 11, c: wn, r: !0, q: !0 },
                    refresh_rate_min: {
                      n: 12,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    refresh_rate_max: {
                      n: 13,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_vrr_capable: {
                      n: 14,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_vrr_output_active: {
                      n: 15,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_hdr_capable: {
                      n: 16,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_hdr_output_active: {
                      n: 17,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    supported_refresh_rates: {
                      n: 18,
                      r: !0,
                      q: !0,
                      br: t.qM.readInt32,
                      pbr: t.qM.readPackedInt32,
                      bw: t.gp.writeRepeatedInt32,
                    },
                    rgb_range: { n: 19, br: t.qM.readEnum, bw: t.gp.writeEnum },
                  },
                }),
              Ge.sm_m
            );
          }
          static MBF() {
            return Ge.sm_mbf || (Ge.sm_mbf = t.w0(Ge.M())), Ge.sm_mbf;
          }
          toObject(e = !1) {
            return Ge.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ge.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ge.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Ge();
            return Ge.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ge.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ge.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDisplay";
          }
        };
        n(ji, "sm_m"), n(ji, "sm_mbf");
        let yn = ji;
        const Ti = class Le extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Le.prototype.width || t.Sg(Le.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Le.sm_m ||
                (Le.sm_m = {
                  proto: Le,
                  fields: {
                    width: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    height: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              Le.sm_m
            );
          }
          static MBF() {
            return Le.sm_mbf || (Le.sm_mbf = t.w0(Le.M())), Le.sm_mbf;
          }
          toObject(e = !1) {
            return Le.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Le.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Le.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Le();
            return Le.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Le.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Le.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDisplayManagerGameResolution";
          }
        };
        n(Ti, "sm_m"), n(Ti, "sm_mbf");
        let ma = Ti;
        const ca = class ke extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ke.prototype.displays || t.Sg(ke.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              ke.sm_m ||
                (ke.sm_m = {
                  proto: ke,
                  fields: {
                    displays: { n: 1, c: yn, r: !0, q: !0 },
                    is_mode_switching_supported: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    compatibility_mode: {
                      n: 3,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    game_resolution_override_native: { n: 4, c: ma },
                    game_resolution_override_default: { n: 5, c: ma },
                  },
                }),
              ke.sm_m
            );
          }
          static MBF() {
            return ke.sm_mbf || (ke.sm_mbf = t.w0(ke.M())), ke.sm_mbf;
          }
          toObject(e = !1) {
            return ke.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ke.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ke.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ke();
            return ke.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ke.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ke.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDisplayManagerState";
          }
        };
        n(ca, "sm_m"), n(ca, "sm_mbf");
        let lm = null;
        const ua = class _e extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.display_id || t.Sg(_e.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    display_id: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    mode_id: { n: 2, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    rgb_range: { n: 3, br: t.qM.readEnum, bw: t.gp.writeEnum },
                  },
                }),
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = t.w0(_e.M())), _e.sm_mbf;
          }
          toObject(e = !1) {
            return _e.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(_e.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new _e();
            return _e.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(_e.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(_e.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDisplayManagerSetMode";
          }
        };
        n(ua, "sm_m"), n(ua, "sm_mbf");
        let mm = null;
        const da = class He extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              He.prototype.idle_backlight_dim_battery_seconds || t.Sg(He.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              He.sm_m ||
                (He.sm_m = {
                  proto: He,
                  fields: {
                    idle_backlight_dim_battery_seconds: {
                      n: 1,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    idle_backlight_dim_ac_seconds: {
                      n: 2,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    is_adaptive_brightness_available: {
                      n: 6,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    display_adaptive_brightness_enabled: {
                      n: 7,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    display_nightmode_enabled: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    display_nightmode_tintstrength: {
                      n: 11,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    display_nightmode_maxhue: {
                      n: 12,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    display_nightmode_maxsat: {
                      n: 13,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    display_nightmode_uiexp: {
                      n: 14,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    display_nightmode_blend: {
                      n: 15,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    display_nightmode_reset: {
                      n: 16,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    display_nightmode_schedule_enabled: {
                      n: 17,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    display_nightmode_schedule_starttime: {
                      n: 18,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    display_nightmode_schedule_endtime: {
                      n: 19,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    display_diagnostics_enabled: {
                      n: 20,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    als_lux_primary: {
                      n: 21,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    als_lux_median: {
                      n: 22,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    display_backlight_raw: {
                      n: 23,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    display_brightness_adaptivemin: {
                      n: 24,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    display_brightness_adaptivemax: {
                      n: 25,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    is_fan_control_available: {
                      n: 27,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    fan_control_mode: {
                      n: 28,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    is_display_brightness_available: {
                      n: 29,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_display_colormanagement_available: {
                      n: 31,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    display_colorgamut: {
                      n: 32,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    als_lux_alternate: {
                      n: 33,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    is_display_colortemp_available: {
                      n: 34,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    display_colortemp: {
                      n: 35,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    display_colortemp_default: {
                      n: 36,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    display_colortemp_enabled: {
                      n: 37,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    display_colorgamut_labelset: {
                      n: 38,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    display_brightness_overdrive_hdr_split: {
                      n: 39,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                  },
                }),
              He.sm_m
            );
          }
          static MBF() {
            return He.sm_mbf || (He.sm_mbf = t.w0(He.M())), He.sm_mbf;
          }
          toObject(e = !1) {
            return He.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(He.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(He.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new He();
            return He.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(He.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(He.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemManagerSettings";
          }
        };
        n(da, "sm_m"), n(da, "sm_mbf");
        let cm = null;
        const ga = class Ke extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ke.prototype.branch || t.Sg(Ke.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ke.sm_m ||
                (Ke.sm_m = {
                  proto: Ke,
                  fields: {
                    branch: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    custom_branch: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Ke.sm_m
            );
          }
          static MBF() {
            return Ke.sm_mbf || (Ke.sm_mbf = t.w0(Ke.M())), Ke.sm_mbf;
          }
          toObject(e = !1) {
            return Ke.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ke.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ke.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Ke();
            return Ke.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ke.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ke.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSelectOSBranchParams";
          }
        };
        n(ga, "sm_m"), n(ga, "sm_mbf");
        let um = null;
        const Wi = class Ve extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ve.prototype.stage_progress || t.Sg(Ve.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ve.sm_m ||
                (Ve.sm_m = {
                  proto: Ve,
                  fields: {
                    stage_progress: {
                      n: 1,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    stage_size_bytes: {
                      n: 2,
                      br: t.qM.readInt64String,
                      bw: t.gp.writeInt64String,
                    },
                    rtime_estimated_completion: {
                      n: 3,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                  },
                }),
              Ve.sm_m
            );
          }
          static MBF() {
            return Ve.sm_mbf || (Ve.sm_mbf = t.w0(Ve.M())), Ve.sm_mbf;
          }
          toObject(e = !1) {
            return Ve.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ve.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ve.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Ve();
            return Ve.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ve.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ve.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemUpdateProgress";
          }
        };
        n(Wi, "sm_m"), n(Wi, "sm_mbf");
        let zn = Wi;
        const qi = class $e extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $e.prototype.type || t.Sg($e.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = {
                  proto: $e,
                  fields: {
                    type: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    eresult: {
                      n: 2,
                      d: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    rtime_checked: {
                      n: 3,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                    available: { n: 4, br: t.qM.readBool, bw: t.gp.writeBool },
                    version: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    auto_message: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    system_restart_pending: {
                      n: 7,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              $e.sm_m
            );
          }
          static MBF() {
            return $e.sm_mbf || ($e.sm_mbf = t.w0($e.M())), $e.sm_mbf;
          }
          toObject(e = !1) {
            return $e.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT($e.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq($e.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new $e();
            return $e.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj($e.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0($e.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemUpdateCheckResult";
          }
        };
        n(qi, "sm_m"), n(qi, "sm_mbf");
        let Sn = qi;
        const pa = class Qe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Qe.prototype.apply_types || t.Sg(Qe.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Qe.sm_m ||
                (Qe.sm_m = {
                  proto: Qe,
                  fields: {
                    apply_types: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: t.qM.readEnum,
                      pbr: t.qM.readPackedEnum,
                      bw: t.gp.writeRepeatedEnum,
                    },
                  },
                }),
              Qe.sm_m
            );
          }
          static MBF() {
            return Qe.sm_mbf || (Qe.sm_mbf = t.w0(Qe.M())), Qe.sm_mbf;
          }
          toObject(e = !1) {
            return Qe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Qe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Qe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Qe();
            return Qe.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Qe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Qe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemUpdateApplyParams";
          }
        };
        n(pa, "sm_m"), n(pa, "sm_mbf");
        let dm = null;
        const Ui = class Xe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Xe.prototype.type || t.Sg(Xe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Xe.sm_m ||
                (Xe.sm_m = {
                  proto: Xe,
                  fields: {
                    type: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    eresult: {
                      n: 2,
                      d: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    requires_client_restart: {
                      n: 3,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    requires_system_restart: {
                      n: 4,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Xe.sm_m
            );
          }
          static MBF() {
            return Xe.sm_mbf || (Xe.sm_mbf = t.w0(Xe.M())), Xe.sm_mbf;
          }
          toObject(e = !1) {
            return Xe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Xe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Xe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Xe();
            return Xe.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Xe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Xe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemUpdateApplyResult";
          }
        };
        n(Ui, "sm_m"), n(Ui, "sm_mbf");
        let Cn = Ui;
        const Ba = class Ye extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ye.prototype.state || t.Sg(Ye.M()),
              a.Message.initialize(this, e, 0, -1, [3, 4], null);
          }
          static M() {
            return (
              Ye.sm_m ||
                (Ye.sm_m = {
                  proto: Ye,
                  fields: {
                    state: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    progress: { n: 2, c: zn },
                    update_check_results: { n: 3, c: Sn, r: !0, q: !0 },
                    update_apply_results: { n: 4, c: Cn, r: !0, q: !0 },
                    supports_os_updates: {
                      n: 5,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Ye.sm_m
            );
          }
          static MBF() {
            return Ye.sm_mbf || (Ye.sm_mbf = t.w0(Ye.M())), Ye.sm_mbf;
          }
          toObject(e = !1) {
            return Ye.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ye.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ye.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Ye();
            return Ye.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ye.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ye.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemUpdateState";
          }
        };
        n(Ba, "sm_m"), n(Ba, "sm_mbf");
        let gm = null;
        const fa = class Je extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Je.prototype.appid || t.Sg(Je.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Je.sm_m ||
                (Je.sm_m = {
                  proto: Je,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              Je.sm_m
            );
          }
          static MBF() {
            return Je.sm_mbf || (Je.sm_mbf = t.w0(Je.M())), Je.sm_mbf;
          }
          toObject(e = !1) {
            return Je.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Je.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Je.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Je();
            return Je.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Je.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Je.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgAchievementChange";
          }
        };
        n(fa, "sm_m"), n(fa, "sm_mbf");
        let pm = null;
        const ba = class Ze extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ze.prototype.cells || t.Sg(Ze.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Ze.sm_m ||
                (Ze.sm_m = {
                  proto: Ze,
                  fields: { cells: { n: 1, c: hn, r: !0, q: !0 } },
                }),
              Ze.sm_m
            );
          }
          static MBF() {
            return Ze.sm_mbf || (Ze.sm_mbf = t.w0(Ze.M())), Ze.sm_mbf;
          }
          toObject(e = !1) {
            return Ze.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ze.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ze.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Ze();
            return Ze.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ze.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ze.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgCellList";
          }
        };
        n(ba, "sm_m"), n(ba, "sm_mbf");
        let Bm = null;
        const Ii = class et extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              et.prototype.cell_id || t.Sg(et.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    cell_id: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    loc_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = t.w0(et.M())), et.sm_mbf;
          }
          toObject(e = !1) {
            return et.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(et.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(et.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new et();
            return et.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(et.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(et.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgCellList_Cell";
          }
        };
        n(Ii, "sm_m"), n(Ii, "sm_mbf");
        let hn = Ii;
        const Oi = class tt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              tt.prototype.appid || t.Sg(tt.M()),
              a.Message.initialize(this, e, 0, -1, [10], null);
          }
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    exe: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    start_dir: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    icon: { n: 4, br: t.qM.readString, bw: t.gp.writeString },
                    path: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                    args: { n: 6, br: t.qM.readString, bw: t.gp.writeString },
                    app_name: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    override_appid: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    flatpak_appid: {
                      n: 9,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    tags: {
                      n: 10,
                      r: !0,
                      q: !0,
                      br: t.qM.readString,
                      bw: t.gp.writeRepeatedString,
                    },
                    remote_client_id: {
                      n: 11,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    is_hidden: { n: 12, br: t.qM.readBool, bw: t.gp.writeBool },
                    is_temporary: {
                      n: 13,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_openvr: { n: 14, br: t.qM.readBool, bw: t.gp.writeBool },
                    allow_desktop_config: {
                      n: 15,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    allow_overlay: {
                      n: 16,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    rt_last_played_time: {
                      n: 17,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_devkit_shortcut: {
                      n: 18,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    devkit_gameid: {
                      n: 19,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    remote_launch_available: {
                      n: 20,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    sortas: {
                      n: 21,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = t.w0(tt.M())), tt.sm_mbf;
          }
          toObject(e = !1) {
            return tt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(tt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(tt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new tt();
            return tt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(tt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(tt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgShortcutInfo";
          }
        };
        n(Oi, "sm_m"), n(Oi, "sm_mbf");
        let Rn = Oi;
        const Ma = class rt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              rt.prototype.shorcuts || t.Sg(rt.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: { shorcuts: { n: 1, c: Rn, r: !0, q: !0 } },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = t.w0(rt.M())), rt.sm_mbf;
          }
          toObject(e = !1) {
            return rt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(rt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(rt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new rt();
            return rt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(rt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(rt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgShortcutInfos";
          }
        };
        n(Ma, "sm_m"), n(Ma, "sm_mbf");
        let fm = null;
        const wa = class it extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              it.prototype.appids || t.Sg(it.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = t.w0(it.M())), it.sm_mbf;
          }
          toObject(e = !1) {
            return it.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(it.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(it.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new it();
            return it.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(it.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(it.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgShortcutAppIds";
          }
        };
        n(wa, "sm_m"), n(wa, "sm_mbf");
        let bm = null;
        const ya = class st extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              st.prototype.selected_device_name || t.Sg(st.M()),
              a.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: {
                    selected_device_name: {
                      n: 1,
                      q: !0,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    monitors: { n: 2, c: Fn, r: !0, q: !0 },
                  },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = t.w0(st.M())), st.sm_mbf;
          }
          toObject(e = !1) {
            return st.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(st.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(st.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new st();
            return st.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(st.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(st.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgMonitorInfo";
          }
        };
        n(ya, "sm_m"), n(ya, "sm_mbf");
        let Mm = null;
        const Ni = class at extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              at.prototype.monitor_device_name || t.Sg(at.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    monitor_device_name: {
                      n: 1,
                      q: !0,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    monitor_display_name: {
                      n: 2,
                      q: !0,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = t.w0(at.M())), at.sm_mbf;
          }
          toObject(e = !1) {
            return at.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(at.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(at.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new at();
            return at.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(at.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(at.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgMonitorInfo_MonitorInfo";
          }
        };
        n(Ni, "sm_m"), n(Ni, "sm_mbf");
        let Fn = Ni;
        const za = class nt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              nt.prototype.report_id || t.Sg(nt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    report_id: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = t.w0(nt.M())), nt.sm_mbf;
          }
          toObject(e = !1) {
            return nt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(nt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(nt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new nt();
            return nt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(nt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(nt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgGenerateSystemReportReply";
          }
        };
        n(za, "sm_m"), n(za, "sm_mbf");
        let wm = null;
        const Sa = class ot extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ot.prototype.port || t.Sg(ot.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    port: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    auth_key: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = t.w0(ot.M())), ot.sm_mbf;
          }
          toObject(e = !1) {
            return ot.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ot.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ot.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ot();
            return ot.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ot.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ot.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgWebUITransportInfo";
          }
        };
        n(Sa, "sm_m"), n(Sa, "sm_mbf");
        let ym = null;
        const Ca = class lt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              lt.prototype.connect_count || t.Sg(lt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    connect_count: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = t.w0(lt.M())), lt.sm_mbf;
          }
          toObject(e = !1) {
            return lt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(lt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(lt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new lt();
            return lt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(lt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(lt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgWebUITransportFailure";
          }
        };
        n(Ca, "sm_m"), n(Ca, "sm_mbf");
        let zm = null;
        const xi = class mt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              mt.prototype.key_sha || t.Sg(mt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: {
                    key_sha: { n: 1, br: t.qM.readBytes, bw: t.gp.writeBytes },
                    code_sha: { n: 2, br: t.qM.readBytes, bw: t.gp.writeBytes },
                    time_last_reported: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = t.w0(mt.M())), mt.sm_mbf;
          }
          toObject(e = !1) {
            return mt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(mt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(mt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new mt();
            return mt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(mt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(mt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientShaderHitCacheEntry";
          }
        };
        n(xi, "sm_m"), n(xi, "sm_mbf");
        let vn = xi;
        const ha = class ct extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ct.prototype.entries || t.Sg(ct.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: { entries: { n: 1, c: vn, r: !0, q: !0 } },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = t.w0(ct.M())), ct.sm_mbf;
          }
          toObject(e = !1) {
            return ct.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ct.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ct.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ct();
            return ct.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ct.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ct.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientShaderHitCache";
          }
        };
        n(ha, "sm_m"), n(ha, "sm_mbf");
        let Sm = null;
        var jn = Object.defineProperty,
          Tn = (o, e, r) =>
            e in o
              ? jn(o, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (o[e] = r),
          c = (o, e, r) => Tn(o, typeof e != "symbol" ? e + "" : e, r);
        const Di = class ut extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ut.prototype.appid || t.Sg(ut.M()),
              a.Message.initialize(this, e, 0, -1, [9], null);
          }
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    ugcid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    filename: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    timestamp: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    file_size: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    url: { n: 6, br: t.qM.readString, bw: t.gp.writeString },
                    steamid_creator: {
                      n: 7,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    flags: { n: 8, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    platforms_to_sync: {
                      n: 9,
                      r: !0,
                      q: !0,
                      br: t.qM.readString,
                      bw: t.gp.writeRepeatedString,
                    },
                    file_sha: {
                      n: 10,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    compressed_file_size: {
                      n: 11,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = t.w0(ut.M())), ut.sm_mbf;
          }
          toObject(e = !1) {
            return ut.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ut.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ut.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ut();
            return ut.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ut.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ut.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_UserFile";
          }
        };
        c(Di, "sm_m"), c(Di, "sm_mbf");
        let Ra = Di;
        const Pi = class dt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              dt.prototype.appid || t.Sg(dt.M()),
              a.Message.initialize(this, e, 0, -1, [6, 7, 8], null);
          }
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    file_size: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    filename: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    file_sha: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_public: { n: 5, br: t.qM.readBool, bw: t.gp.writeBool },
                    platforms_to_sync: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: t.qM.readString,
                      bw: t.gp.writeRepeatedString,
                    },
                    request_headers_names: {
                      n: 7,
                      r: !0,
                      q: !0,
                      br: t.qM.readString,
                      bw: t.gp.writeRepeatedString,
                    },
                    request_headers_values: {
                      n: 8,
                      r: !0,
                      q: !0,
                      br: t.qM.readString,
                      bw: t.gp.writeRepeatedString,
                    },
                    upload_batch_id: {
                      n: 9,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = t.w0(dt.M())), dt.sm_mbf;
          }
          toObject(e = !1) {
            return dt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(dt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(dt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new dt();
            return dt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(dt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(dt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginHTTPUpload_Request";
          }
        };
        c(Pi, "sm_m"), c(Pi, "sm_mbf");
        let Fa = Pi;
        const Ei = class gt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              gt.prototype.ugcid || t.Sg(gt.M()),
              a.Message.initialize(this, e, 0, -1, [6], null);
          }
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: {
                    ugcid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    timestamp: {
                      n: 2,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                    url_host: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    url_path: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    use_https: { n: 5, br: t.qM.readBool, bw: t.gp.writeBool },
                    request_headers: { n: 6, c: qn, r: !0, q: !0 },
                  },
                }),
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = t.w0(gt.M())), gt.sm_mbf;
          }
          toObject(e = !1) {
            return gt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(gt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(gt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new gt();
            return gt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(gt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(gt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginHTTPUpload_Response";
          }
        };
        c(Ei, "sm_m"), c(Ei, "sm_mbf");
        let Wn = Ei;
        const Ai = class pt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pt.prototype.name || t.Sg(pt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
                  fields: {
                    name: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    value: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = t.w0(pt.M())), pt.sm_mbf;
          }
          toObject(e = !1) {
            return pt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(pt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(pt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new pt();
            return pt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(pt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(pt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginHTTPUpload_Response_HTTPHeaders";
          }
        };
        c(Ai, "sm_m"), c(Ai, "sm_mbf");
        let qn = Ai;
        const Gi = class Bt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Bt.prototype.transfer_succeeded || t.Sg(Bt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Bt.sm_m ||
                (Bt.sm_m = {
                  proto: Bt,
                  fields: {
                    transfer_succeeded: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    file_sha: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    filename: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Bt.sm_m
            );
          }
          static MBF() {
            return Bt.sm_mbf || (Bt.sm_mbf = t.w0(Bt.M())), Bt.sm_mbf;
          }
          toObject(e = !1) {
            return Bt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Bt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Bt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Bt();
            return Bt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Bt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Bt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CommitHTTPUpload_Request";
          }
        };
        c(Gi, "sm_m"), c(Gi, "sm_mbf");
        let va = Gi;
        const Li = class ft extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ft.prototype.file_committed || t.Sg(ft.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    file_committed: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = t.w0(ft.M())), ft.sm_mbf;
          }
          toObject(e = !1) {
            return ft.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ft.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ft.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ft();
            return ft.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ft.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ft.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CommitHTTPUpload_Response";
          }
        };
        c(Li, "sm_m"), c(Li, "sm_mbf");
        let Un = Li;
        const ki = class bt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              bt.prototype.appid || t.Sg(bt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    file_size: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    filename: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    file_sha: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    content_type: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_public: { n: 6, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = t.w0(bt.M())), bt.sm_mbf;
          }
          toObject(e = !1) {
            return bt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(bt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(bt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new bt();
            return bt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(bt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(bt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginUGCUpload_Request";
          }
        };
        c(ki, "sm_m"), c(ki, "sm_mbf");
        let In = ki;
        const _i = class Mt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Mt.prototype.storage_system || t.Sg(Mt.M()),
              a.Message.initialize(this, e, 0, -1, [7], null);
          }
          static M() {
            return (
              Mt.sm_m ||
                (Mt.sm_m = {
                  proto: Mt,
                  fields: {
                    storage_system: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    ugcid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    timestamp: {
                      n: 3,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                    url_host: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    url_path: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    use_https: { n: 6, br: t.qM.readBool, bw: t.gp.writeBool },
                    request_headers: { n: 7, c: Nn, r: !0, q: !0 },
                  },
                }),
              Mt.sm_m
            );
          }
          static MBF() {
            return Mt.sm_mbf || (Mt.sm_mbf = t.w0(Mt.M())), Mt.sm_mbf;
          }
          toObject(e = !1) {
            return Mt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Mt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Mt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Mt();
            return Mt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Mt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Mt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginUGCUpload_Response";
          }
        };
        c(_i, "sm_m"), c(_i, "sm_mbf");
        let On = _i;
        const Hi = class wt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              wt.prototype.name || t.Sg(wt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
                  fields: {
                    name: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    value: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              wt.sm_m
            );
          }
          static MBF() {
            return wt.sm_mbf || (wt.sm_mbf = t.w0(wt.M())), wt.sm_mbf;
          }
          toObject(e = !1) {
            return wt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(wt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(wt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new wt();
            return wt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(wt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(wt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginUGCUpload_Response_HTTPHeaders";
          }
        };
        c(Hi, "sm_m"), c(Hi, "sm_mbf");
        let Nn = Hi;
        const Ki = class yt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              yt.prototype.transfer_succeeded || t.Sg(yt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: {
                    transfer_succeeded: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    ugcid: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = t.w0(yt.M())), yt.sm_mbf;
          }
          toObject(e = !1) {
            return yt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(yt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(yt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new yt();
            return yt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(yt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(yt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CommitUGCUpload_Request";
          }
        };
        c(Ki, "sm_m"), c(Ki, "sm_mbf");
        let xn = Ki;
        const Vi = class zt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              zt.prototype.file_committed || t.Sg(zt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              zt.sm_m ||
                (zt.sm_m = {
                  proto: zt,
                  fields: {
                    file_committed: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              zt.sm_m
            );
          }
          static MBF() {
            return zt.sm_mbf || (zt.sm_mbf = t.w0(zt.M())), zt.sm_mbf;
          }
          toObject(e = !1) {
            return zt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(zt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(zt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new zt();
            return zt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(zt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(zt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              zt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CommitUGCUpload_Response";
          }
        };
        c(Vi, "sm_m"), c(Vi, "sm_mbf");
        let Dn = Vi;
        const $i = class St extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              St.prototype.ugcid || t.Sg(St.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
                  fields: {
                    ugcid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              St.sm_m
            );
          }
          static MBF() {
            return St.sm_mbf || (St.sm_mbf = t.w0(St.M())), St.sm_mbf;
          }
          toObject(e = !1) {
            return St.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(St.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(St.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new St();
            return St.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(St.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(St.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetFileDetails_Request";
          }
        };
        c($i, "sm_m"), c($i, "sm_mbf");
        let ja = $i;
        const Qi = class Ct extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ct.prototype.details || t.Sg(Ct.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ct.sm_m ||
                (Ct.sm_m = {
                  proto: Ct,
                  fields: {
                    details: { n: 1, c: Ra },
                    rangecheck_host: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Ct.sm_m
            );
          }
          static MBF() {
            return Ct.sm_mbf || (Ct.sm_mbf = t.w0(Ct.M())), Ct.sm_mbf;
          }
          toObject(e = !1) {
            return Ct.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ct.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ct.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Ct();
            return Ct.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ct.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ct.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Ct.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetFileDetails_Response";
          }
        };
        c(Qi, "sm_m"), c(Qi, "sm_mbf");
        let Pn = Qi;
        const Xi = class ht extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ht.prototype.app_id || t.Sg(ht.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: {
                    app_id: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    file_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = t.w0(ht.M())), ht.sm_mbf;
          }
          toObject(e = !1) {
            return ht.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ht.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ht.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ht();
            return ht.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ht.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ht.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetSingleFileInfo_Request";
          }
        };
        c(Xi, "sm_m"), c(Xi, "sm_mbf");
        let En = Xi;
        const Yi = class Rt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Rt.prototype.app_id || t.Sg(Rt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Rt.sm_m ||
                (Rt.sm_m = {
                  proto: Rt,
                  fields: {
                    app_id: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    file_name: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    sha_file: { n: 4, br: t.qM.readBytes, bw: t.gp.writeBytes },
                    time_stamp: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    raw_file_size: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_explicit_delete: {
                      n: 7,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Rt.sm_m
            );
          }
          static MBF() {
            return Rt.sm_mbf || (Rt.sm_mbf = t.w0(Rt.M())), Rt.sm_mbf;
          }
          toObject(e = !1) {
            return Rt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Rt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Rt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Rt();
            return Rt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Rt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Rt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetSingleFileInfo_Response";
          }
        };
        c(Yi, "sm_m"), c(Yi, "sm_mbf");
        let An = Yi;
        const Ji = class Ft extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ft.prototype.appid || t.Sg(Ft.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ft.sm_m ||
                (Ft.sm_m = {
                  proto: Ft,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    extended_details: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    count: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    start_index: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Ft.sm_m
            );
          }
          static MBF() {
            return Ft.sm_mbf || (Ft.sm_mbf = t.w0(Ft.M())), Ft.sm_mbf;
          }
          toObject(e = !1) {
            return Ft.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ft.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ft.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Ft();
            return Ft.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ft.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ft.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Ft.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_EnumerateUserFiles_Request";
          }
        };
        c(Ji, "sm_m"), c(Ji, "sm_mbf");
        let Ta = Ji;
        const Zi = class vt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              vt.prototype.files || t.Sg(vt.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              vt.sm_m ||
                (vt.sm_m = {
                  proto: vt,
                  fields: {
                    files: { n: 1, c: Ra, r: !0, q: !0 },
                    total_files: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              vt.sm_m
            );
          }
          static MBF() {
            return vt.sm_mbf || (vt.sm_mbf = t.w0(vt.M())), vt.sm_mbf;
          }
          toObject(e = !1) {
            return vt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(vt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(vt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new vt();
            return vt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(vt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(vt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              vt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_EnumerateUserFiles_Response";
          }
        };
        c(Zi, "sm_m"), c(Zi, "sm_mbf");
        let Gn = Zi;
        const es = class jt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              jt.prototype.filename || t.Sg(jt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: {
                    filename: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    upload_batch_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              jt.sm_m
            );
          }
          static MBF() {
            return jt.sm_mbf || (jt.sm_mbf = t.w0(jt.M())), jt.sm_mbf;
          }
          toObject(e = !1) {
            return jt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(jt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(jt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new jt();
            return jt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(jt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(jt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_Delete_Request";
          }
        };
        c(es, "sm_m"), c(es, "sm_mbf");
        let Ln = es;
        class qr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return qr.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new qr();
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new qr();
            return qr.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return qr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              qr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_Delete_Response";
          }
        }
        class Ur extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Ur.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Ur();
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Ur();
            return Ur.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Ur.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Ur.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetClientEncryptionKey_Request";
          }
        }
        const ts = class Tt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Tt.prototype.key || t.Sg(Tt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Tt.sm_m ||
                (Tt.sm_m = {
                  proto: Tt,
                  fields: {
                    key: { n: 1, br: t.qM.readBytes, bw: t.gp.writeBytes },
                    crc: { n: 2, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                  },
                }),
              Tt.sm_m
            );
          }
          static MBF() {
            return Tt.sm_mbf || (Tt.sm_mbf = t.w0(Tt.M())), Tt.sm_mbf;
          }
          toObject(e = !1) {
            return Tt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Tt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Tt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Tt();
            return Tt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Tt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Tt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetClientEncryptionKey_Response";
          }
        };
        c(ts, "sm_m"), c(ts, "sm_mbf");
        let kn = ts;
        const rs = class Wt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Wt.prototype.steamid || t.Sg(Wt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Wt.sm_m ||
                (Wt.sm_m = {
                  proto: Wt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    url: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    success: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                    http_status_code: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    expected_bytes: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    received_bytes: {
                      n: 6,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    duration: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Wt.sm_m
            );
          }
          static MBF() {
            return Wt.sm_mbf || (Wt.sm_mbf = t.w0(Wt.M())), Wt.sm_mbf;
          }
          toObject(e = !1) {
            return Wt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Wt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Wt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Wt();
            return Wt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Wt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Wt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Wt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CDNReport_Notification";
          }
        };
        c(rs, "sm_m"), c(rs, "sm_mbf");
        let _n = rs;
        const is = class qt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              qt.prototype.host || t.Sg(qt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              qt.sm_m ||
                (qt.sm_m = {
                  proto: qt,
                  fields: {
                    host: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    path: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    is_upload: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                    success: { n: 4, br: t.qM.readBool, bw: t.gp.writeBool },
                    http_status_code: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    bytes_expected: {
                      n: 6,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    bytes_actual: {
                      n: 7,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    duration_ms: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    cellid: { n: 9, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    proxied: { n: 10, br: t.qM.readBool, bw: t.gp.writeBool },
                    ipv6_local: {
                      n: 11,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    ipv6_remote: {
                      n: 12,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    time_to_connect_ms: {
                      n: 13,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    time_to_send_req_ms: {
                      n: 14,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    time_to_first_byte_ms: {
                      n: 15,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    time_to_last_byte_ms: {
                      n: 16,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              qt.sm_m
            );
          }
          static MBF() {
            return qt.sm_mbf || (qt.sm_mbf = t.w0(qt.M())), qt.sm_mbf;
          }
          toObject(e = !1) {
            return qt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(qt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(qt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new qt();
            return qt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(qt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return qt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(qt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              qt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ExternalStorageTransferReport_Notification";
          }
        };
        c(is, "sm_m"), c(is, "sm_mbf");
        let Hn = is;
        const ss = class Ut extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ut.prototype.appid || t.Sg(Ut.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ut.sm_m ||
                (Ut.sm_m = {
                  proto: Ut,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    client_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    machine_name: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    ignore_pending_operations: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    os_type: { n: 5, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    device_type: {
                      n: 6,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              Ut.sm_m
            );
          }
          static MBF() {
            return Ut.sm_mbf || (Ut.sm_mbf = t.w0(Ut.M())), Ut.sm_mbf;
          }
          toObject(e = !1) {
            return Ut.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ut.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ut.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Ut();
            return Ut.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ut.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ut.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Ut.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppLaunchIntent_Request";
          }
        };
        c(ss, "sm_m"), c(ss, "sm_mbf");
        let Kn = ss;
        const as = class It extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              It.prototype.pending_remote_operations || t.Sg(It.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              It.sm_m ||
                (It.sm_m = {
                  proto: It,
                  fields: {
                    pending_remote_operations: { n: 1, c: $s, r: !0, q: !0 },
                  },
                }),
              It.sm_m
            );
          }
          static MBF() {
            return It.sm_mbf || (It.sm_mbf = t.w0(It.M())), It.sm_mbf;
          }
          toObject(e = !1) {
            return It.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(It.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(It.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new It();
            return It.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(It.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return It.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(It.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppLaunchIntent_Response";
          }
        };
        c(as, "sm_m"), c(as, "sm_mbf");
        let Vn = as;
        const ns = class Ot extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ot.prototype.appid || t.Sg(Ot.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ot.sm_m ||
                (Ot.sm_m = {
                  proto: Ot,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    client_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    uploads_completed: {
                      n: 3,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    uploads_required: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Ot.sm_m
            );
          }
          static MBF() {
            return Ot.sm_mbf || (Ot.sm_mbf = t.w0(Ot.M())), Ot.sm_mbf;
          }
          toObject(e = !1) {
            return Ot.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ot.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ot.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Ot();
            return Ot.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ot.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ot.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Ot.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppExitSyncDone_Notification";
          }
        };
        c(ns, "sm_m"), c(ns, "sm_mbf");
        let $n = ns;
        const os = class Nt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Nt.prototype.appid || t.Sg(Nt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Nt.sm_m ||
                (Nt.sm_m = {
                  proto: Nt,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              Nt.sm_m
            );
          }
          static MBF() {
            return Nt.sm_mbf || (Nt.sm_mbf = t.w0(Nt.M())), Nt.sm_mbf;
          }
          toObject(e = !1) {
            return Nt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Nt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Nt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Nt();
            return Nt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Nt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Nt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientGetAppQuotaUsage_Request";
          }
        };
        c(os, "sm_m"), c(os, "sm_mbf");
        let Qn = os;
        const ls = class xt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xt.prototype.existing_files || t.Sg(xt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              xt.sm_m ||
                (xt.sm_m = {
                  proto: xt,
                  fields: {
                    existing_files: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    existing_bytes: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    max_num_files: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    max_num_bytes: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              xt.sm_m
            );
          }
          static MBF() {
            return xt.sm_mbf || (xt.sm_mbf = t.w0(xt.M())), xt.sm_mbf;
          }
          toObject(e = !1) {
            return xt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(xt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(xt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new xt();
            return xt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(xt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(xt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientGetAppQuotaUsage_Response";
          }
        };
        c(ls, "sm_m"), c(ls, "sm_mbf");
        let Xn = ls;
        const ms = class Dt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Dt.prototype.file_name || t.Sg(Dt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Dt.sm_m ||
                (Dt.sm_m = {
                  proto: Dt,
                  fields: {
                    file_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    sha_file: { n: 2, br: t.qM.readBytes, bw: t.gp.writeBytes },
                    time_stamp: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    raw_file_size: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    persist_state: {
                      n: 5,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    platforms_to_sync: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    path_prefix_index: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    machine_name_index: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    reupload_requested: {
                      n: 9,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Dt.sm_m
            );
          }
          static MBF() {
            return Dt.sm_mbf || (Dt.sm_mbf = t.w0(Dt.M())), Dt.sm_mbf;
          }
          toObject(e = !1) {
            return Dt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Dt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Dt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Dt();
            return Dt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Dt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Dt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppFileInfo";
          }
        };
        c(ms, "sm_m"), c(ms, "sm_mbf");
        let Yn = ms;
        const cs = class Pt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pt.prototype.appid || t.Sg(Pt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Pt.sm_m ||
                (Pt.sm_m = {
                  proto: Pt,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    synced_change_number: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Pt.sm_m
            );
          }
          static MBF() {
            return Pt.sm_mbf || (Pt.sm_mbf = t.w0(Pt.M())), Pt.sm_mbf;
          }
          toObject(e = !1) {
            return Pt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Pt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Pt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Pt();
            return Pt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Pt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Pt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetAppFileChangelist_Request";
          }
        };
        c(cs, "sm_m"), c(cs, "sm_mbf");
        let Jn = cs;
        const us = class Et extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Et.prototype.current_change_number || t.Sg(Et.M()),
              a.Message.initialize(this, e, 0, -1, [2, 4, 5], null);
          }
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: {
                    current_change_number: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    files: { n: 2, c: Yn, r: !0, q: !0 },
                    is_only_delta: {
                      n: 3,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    path_prefixes: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: t.qM.readString,
                      bw: t.gp.writeRepeatedString,
                    },
                    machine_names: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: t.qM.readString,
                      bw: t.gp.writeRepeatedString,
                    },
                    app_buildid_hwm: {
                      n: 6,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = t.w0(Et.M())), Et.sm_mbf;
          }
          toObject(e = !1) {
            return Et.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Et.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Et.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Et();
            return Et.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Et.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Et.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetAppFileChangelist_Response";
          }
        };
        c(us, "sm_m"), c(us, "sm_mbf");
        let Zn = us;
        const ds = class At extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              At.prototype.url_host || t.Sg(At.M()),
              a.Message.initialize(this, e, 0, -1, [5], null);
          }
          static M() {
            return (
              At.sm_m ||
                (At.sm_m = {
                  proto: At,
                  fields: {
                    url_host: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    url_path: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    use_https: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                    http_method: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    request_headers: { n: 5, c: to, r: !0, q: !0 },
                    block_offset: {
                      n: 6,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    block_length: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    explicit_body_data: {
                      n: 8,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                    may_parallelize: {
                      n: 9,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              At.sm_m
            );
          }
          static MBF() {
            return At.sm_mbf || (At.sm_mbf = t.w0(At.M())), At.sm_mbf;
          }
          toObject(e = !1) {
            return At.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(At.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(At.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new At();
            return At.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(At.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return At.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(At.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              At.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ClientCloudFileUploadBlockDetails";
          }
        };
        c(ds, "sm_m"), c(ds, "sm_mbf");
        let eo = ds;
        const gs = class Gt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Gt.prototype.name || t.Sg(Gt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Gt.sm_m ||
                (Gt.sm_m = {
                  proto: Gt,
                  fields: {
                    name: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    value: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Gt.sm_m
            );
          }
          static MBF() {
            return Gt.sm_mbf || (Gt.sm_mbf = t.w0(Gt.M())), Gt.sm_mbf;
          }
          toObject(e = !1) {
            return Gt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Gt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Gt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Gt();
            return Gt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Gt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Gt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Gt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ClientCloudFileUploadBlockDetails_HTTPHeaders";
          }
        };
        c(gs, "sm_m"), c(gs, "sm_mbf");
        let to = gs;
        const ps = class Lt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Lt.prototype.appid || t.Sg(Lt.M()),
              a.Message.initialize(this, e, 0, -1, [3, 4], null);
          }
          static M() {
            return (
              Lt.sm_m ||
                (Lt.sm_m = {
                  proto: Lt,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    machine_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    files_to_upload: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: t.qM.readString,
                      bw: t.gp.writeRepeatedString,
                    },
                    files_to_delete: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: t.qM.readString,
                      bw: t.gp.writeRepeatedString,
                    },
                    client_id: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    app_build_id: {
                      n: 6,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Lt.sm_m
            );
          }
          static MBF() {
            return Lt.sm_mbf || (Lt.sm_mbf = t.w0(Lt.M())), Lt.sm_mbf;
          }
          toObject(e = !1) {
            return Lt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Lt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Lt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Lt();
            return Lt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Lt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Lt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Lt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginAppUploadBatch_Request";
          }
        };
        c(ps, "sm_m"), c(ps, "sm_mbf");
        let Wa = ps;
        const Bs = class kt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              kt.prototype.batch_id || t.Sg(kt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              kt.sm_m ||
                (kt.sm_m = {
                  proto: kt,
                  fields: {
                    batch_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    app_change_number: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              kt.sm_m
            );
          }
          static MBF() {
            return kt.sm_mbf || (kt.sm_mbf = t.w0(kt.M())), kt.sm_mbf;
          }
          toObject(e = !1) {
            return kt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(kt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(kt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new kt();
            return kt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(kt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(kt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              kt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginAppUploadBatch_Response";
          }
        };
        c(Bs, "sm_m"), c(Bs, "sm_mbf");
        let ro = Bs;
        const fs = class _t extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _t.prototype.appid || t.Sg(_t.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              _t.sm_m ||
                (_t.sm_m = {
                  proto: _t,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    batch_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    batch_eresult: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              _t.sm_m
            );
          }
          static MBF() {
            return _t.sm_mbf || (_t.sm_mbf = t.w0(_t.M())), _t.sm_mbf;
          }
          toObject(e = !1) {
            return _t.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(_t.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(_t.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new _t();
            return _t.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(_t.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return _t.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(_t.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              _t.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CompleteAppUploadBatch_Notification";
          }
        };
        c(fs, "sm_m"), c(fs, "sm_mbf");
        let io = fs;
        const bs = class Ht extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ht.prototype.appid || t.Sg(Ht.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ht.sm_m ||
                (Ht.sm_m = {
                  proto: Ht,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    batch_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    batch_eresult: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Ht.sm_m
            );
          }
          static MBF() {
            return Ht.sm_mbf || (Ht.sm_mbf = t.w0(Ht.M())), Ht.sm_mbf;
          }
          toObject(e = !1) {
            return Ht.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ht.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ht.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Ht();
            return Ht.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ht.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ht.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Ht.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CompleteAppUploadBatch_Request";
          }
        };
        c(bs, "sm_m"), c(bs, "sm_mbf");
        let qa = bs;
        class Ir extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Ir.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Ir();
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Ir();
            return Ir.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Ir.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Ir.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CompleteAppUploadBatch_Response";
          }
        }
        const Ms = class Kt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Kt.prototype.appid || t.Sg(Kt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Kt.sm_m ||
                (Kt.sm_m = {
                  proto: Kt,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    app_change_number: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Kt.sm_m
            );
          }
          static MBF() {
            return Kt.sm_mbf || (Kt.sm_mbf = t.w0(Kt.M())), Kt.sm_mbf;
          }
          toObject(e = !1) {
            return Kt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Kt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Kt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Kt();
            return Kt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Kt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Kt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Kt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppCloudStateChange_Notification";
          }
        };
        c(Ms, "sm_m"), c(Ms, "sm_mbf");
        let so = Ms;
        const ws = class Vt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Vt.prototype.appid || t.Sg(Vt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Vt.sm_m ||
                (Vt.sm_m = {
                  proto: Vt,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    file_size: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    raw_file_size: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    file_sha: { n: 4, br: t.qM.readBytes, bw: t.gp.writeBytes },
                    time_stamp: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    filename: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    platforms_to_sync: {
                      n: 7,
                      d: 4294967295,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    cell_id: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    can_encrypt: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_shared_file: {
                      n: 11,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    deprecated_realm: {
                      n: 12,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    upload_batch_id: {
                      n: 13,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Vt.sm_m
            );
          }
          static MBF() {
            return Vt.sm_mbf || (Vt.sm_mbf = t.w0(Vt.M())), Vt.sm_mbf;
          }
          toObject(e = !1) {
            return Vt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Vt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Vt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Vt();
            return Vt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Vt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Vt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Vt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientBeginFileUpload_Request";
          }
        };
        c(ws, "sm_m"), c(ws, "sm_mbf");
        let ao = ws;
        const ys = class $t extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $t.prototype.encrypt_file || t.Sg($t.M()),
              a.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              $t.sm_m ||
                ($t.sm_m = {
                  proto: $t,
                  fields: {
                    encrypt_file: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    block_requests: { n: 2, c: eo, r: !0, q: !0 },
                  },
                }),
              $t.sm_m
            );
          }
          static MBF() {
            return $t.sm_mbf || ($t.sm_mbf = t.w0($t.M())), $t.sm_mbf;
          }
          toObject(e = !1) {
            return $t.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT($t.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq($t.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new $t();
            return $t.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj($t.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return $t.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0($t.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              $t.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientBeginFileUpload_Response";
          }
        };
        c(ys, "sm_m"), c(ys, "sm_mbf");
        let no = ys;
        const zs = class Qt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Qt.prototype.transfer_succeeded || t.Sg(Qt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Qt.sm_m ||
                (Qt.sm_m = {
                  proto: Qt,
                  fields: {
                    transfer_succeeded: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    file_sha: { n: 3, br: t.qM.readBytes, bw: t.gp.writeBytes },
                    filename: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Qt.sm_m
            );
          }
          static MBF() {
            return Qt.sm_mbf || (Qt.sm_mbf = t.w0(Qt.M())), Qt.sm_mbf;
          }
          toObject(e = !1) {
            return Qt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Qt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Qt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Qt();
            return Qt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Qt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Qt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Qt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Qt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientCommitFileUpload_Request";
          }
        };
        c(zs, "sm_m"), c(zs, "sm_mbf");
        let oo = zs;
        const Ss = class Xt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Xt.prototype.file_committed || t.Sg(Xt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Xt.sm_m ||
                (Xt.sm_m = {
                  proto: Xt,
                  fields: {
                    file_committed: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Xt.sm_m
            );
          }
          static MBF() {
            return Xt.sm_mbf || (Xt.sm_mbf = t.w0(Xt.M())), Xt.sm_mbf;
          }
          toObject(e = !1) {
            return Xt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Xt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Xt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Xt();
            return Xt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Xt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Xt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Xt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientCommitFileUpload_Response";
          }
        };
        c(Ss, "sm_m"), c(Ss, "sm_mbf");
        let lo = Ss;
        const Cs = class Yt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Yt.prototype.appid || t.Sg(Yt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Yt.sm_m ||
                (Yt.sm_m = {
                  proto: Yt,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    filename: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    realm: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    force_proxy: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Yt.sm_m
            );
          }
          static MBF() {
            return Yt.sm_mbf || (Yt.sm_mbf = t.w0(Yt.M())), Yt.sm_mbf;
          }
          toObject(e = !1) {
            return Yt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Yt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Yt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Yt();
            return Yt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Yt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Yt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Yt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientFileDownload_Request";
          }
        };
        c(Cs, "sm_m"), c(Cs, "sm_mbf");
        let mo = Cs;
        const hs = class Jt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Jt.prototype.appid || t.Sg(Jt.M()),
              a.Message.initialize(this, e, 0, -1, [10], null);
          }
          static M() {
            return (
              Jt.sm_m ||
                (Jt.sm_m = {
                  proto: Jt,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    file_size: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    raw_file_size: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    sha_file: { n: 4, br: t.qM.readBytes, bw: t.gp.writeBytes },
                    time_stamp: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    is_explicit_delete: {
                      n: 6,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    url_host: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    url_path: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    use_https: { n: 9, br: t.qM.readBool, bw: t.gp.writeBool },
                    request_headers: { n: 10, c: uo, r: !0, q: !0 },
                    encrypted: { n: 11, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              Jt.sm_m
            );
          }
          static MBF() {
            return Jt.sm_mbf || (Jt.sm_mbf = t.w0(Jt.M())), Jt.sm_mbf;
          }
          toObject(e = !1) {
            return Jt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Jt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Jt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Jt();
            return Jt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Jt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Jt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Jt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientFileDownload_Response";
          }
        };
        c(hs, "sm_m"), c(hs, "sm_mbf");
        let co = hs;
        const Rs = class Zt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Zt.prototype.name || t.Sg(Zt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Zt.sm_m ||
                (Zt.sm_m = {
                  proto: Zt,
                  fields: {
                    name: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    value: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Zt.sm_m
            );
          }
          static MBF() {
            return Zt.sm_mbf || (Zt.sm_mbf = t.w0(Zt.M())), Zt.sm_mbf;
          }
          toObject(e = !1) {
            return Zt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Zt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Zt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Zt();
            return Zt.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Zt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Zt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Zt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientFileDownload_Response_HTTPHeaders";
          }
        };
        c(Rs, "sm_m"), c(Rs, "sm_mbf");
        let uo = Rs;
        const Fs = class er extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              er.prototype.appid || t.Sg(er.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              er.sm_m ||
                (er.sm_m = {
                  proto: er,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    filename: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_explicit_delete: {
                      n: 3,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    upload_batch_id: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              er.sm_m
            );
          }
          static MBF() {
            return er.sm_mbf || (er.sm_mbf = t.w0(er.M())), er.sm_mbf;
          }
          toObject(e = !1) {
            return er.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(er.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(er.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new er();
            return er.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(er.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return er.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(er.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              er.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientDeleteFile_Request";
          }
        };
        c(Fs, "sm_m"), c(Fs, "sm_mbf");
        let go = Fs;
        class Or extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Or.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Or();
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Or();
            return Or.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientDeleteFile_Response";
          }
        }
        const vs = class tr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              tr.prototype.appid || t.Sg(tr.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    chose_local_files: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = t.w0(tr.M())), tr.sm_mbf;
          }
          toObject(e = !1) {
            return tr.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(tr.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(tr.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new tr();
            return tr.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(tr.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(tr.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientConflictResolution_Notification";
          }
        };
        c(vs, "sm_m"), c(vs, "sm_mbf");
        let po = vs;
        const js = class rr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              rr.prototype.appid || t.Sg(rr.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              rr.sm_m ||
                (rr.sm_m = {
                  proto: rr,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    client_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    machine_name: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    cloud_sync_completed: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              rr.sm_m
            );
          }
          static MBF() {
            return rr.sm_mbf || (rr.sm_mbf = t.w0(rr.M())), rr.sm_mbf;
          }
          toObject(e = !1) {
            return rr.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(rr.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(rr.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new rr();
            return rr.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(rr.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(rr.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppSessionSuspend_Request";
          }
        };
        c(js, "sm_m"), c(js, "sm_mbf");
        let Bo = js;
        class Nr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Nr.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Nr();
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new Nr();
            return Nr.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return Nr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppSessionSuspend_Response";
          }
        }
        const Ts = class ir extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ir.prototype.appid || t.Sg(ir.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    client_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = t.w0(ir.M())), ir.sm_mbf;
          }
          toObject(e = !1) {
            return ir.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ir.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ir.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ir();
            return ir.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ir.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ir.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppSessionResume_Request";
          }
        };
        c(Ts, "sm_m"), c(Ts, "sm_mbf");
        let fo = Ts;
        class xr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return xr.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new xr();
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new xr();
            return xr.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppSessionResume_Response";
          }
        }
        const Ws = class sr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              sr.prototype.client_id || t.Sg(sr.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              sr.sm_m ||
                (sr.sm_m = {
                  proto: sr,
                  fields: {
                    client_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              sr.sm_m
            );
          }
          static MBF() {
            return sr.sm_mbf || (sr.sm_mbf = t.w0(sr.M())), sr.sm_mbf;
          }
          toObject(e = !1) {
            return sr.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(sr.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(sr.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new sr();
            return sr.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(sr.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(sr.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientLogUploadCheck_Notification";
          }
        };
        c(Ws, "sm_m"), c(Ws, "sm_mbf");
        let bo = Ws;
        const qs = class ar extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ar.prototype.request_id || t.Sg(ar.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
                  fields: {
                    request_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              ar.sm_m
            );
          }
          static MBF() {
            return ar.sm_mbf || (ar.sm_mbf = t.w0(ar.M())), ar.sm_mbf;
          }
          toObject(e = !1) {
            return ar.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ar.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ar.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new ar();
            return ar.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ar.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ar.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientLogUploadRequest_Notification";
          }
        };
        c(qs, "sm_m"), c(qs, "sm_mbf");
        let Mo = qs;
        const Us = class nr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              nr.prototype.client_id || t.Sg(nr.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
                  fields: {
                    client_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    request_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              nr.sm_m
            );
          }
          static MBF() {
            return nr.sm_mbf || (nr.sm_mbf = t.w0(nr.M())), nr.sm_mbf;
          }
          toObject(e = !1) {
            return nr.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(nr.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(nr.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new nr();
            return nr.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(nr.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(nr.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientLogUploadComplete_Notification";
          }
        };
        c(Us, "sm_m"), c(Us, "sm_mbf");
        let wo = Us;
        const Is = class or extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              or.prototype.app_id || t.Sg(or.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              or.sm_m ||
                (or.sm_m = {
                  proto: or,
                  fields: {
                    app_id: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    file_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              or.sm_m
            );
          }
          static MBF() {
            return or.sm_mbf || (or.sm_mbf = t.w0(or.M())), or.sm_mbf;
          }
          toObject(e = !1) {
            return or.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(or.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(or.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new or();
            return or.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(or.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return or.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(or.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ShareFile_Request";
          }
        };
        c(Is, "sm_m"), c(Is, "sm_mbf");
        let yo = Is;
        const Os = class lr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              lr.prototype.hcontent || t.Sg(lr.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              lr.sm_m ||
                (lr.sm_m = {
                  proto: lr,
                  fields: {
                    hcontent: {
                      n: 1,
                      d: "18446744073709551615",
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              lr.sm_m
            );
          }
          static MBF() {
            return lr.sm_mbf || (lr.sm_mbf = t.w0(lr.M())), lr.sm_mbf;
          }
          toObject(e = !1) {
            return lr.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(lr.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(lr.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (i().BinaryReader)(e),
              s = new lr();
            return lr.deserializeBinaryFromReader(s, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(lr.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (i().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(lr.M(), e, r);
          }
          serializeBase64String() {
            var e = new (i().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ShareFile_Response";
          }
        };
        c(Os, "sm_m"), c(Os, "sm_mbf");
        let zo = Os;
        var Er;
        ((o) => {
          function e(z, S) {
            return z.SendNotification(
              "Cloud.ClientLogUploadCheck#1",
              (0, b.I8)(bo, S),
              { ePrivilege: 1 },
            );
          }
          o.ClientLogUploadCheck = e;
          function r(z, S) {
            return z.SendNotification(
              "Cloud.ClientLogUploadComplete#1",
              (0, b.I8)(wo, S),
              { ePrivilege: 1 },
            );
          }
          o.ClientLogUploadComplete = r;
          function s(z, S, W) {
            return z.SendMsg(
              "Cloud.BeginHTTPUpload#1",
              (0, b.I8)(Fa, S, W),
              Wn,
              { ePrivilege: 1 },
            );
          }
          o.BeginHTTPUpload = s;
          function l(z, S, W) {
            return z.SendMsg(
              "Cloud.CommitHTTPUpload#1",
              (0, b.I8)(va, S, W),
              Un,
              { ePrivilege: 1 },
            );
          }
          o.CommitHTTPUpload = l;
          function u(z, S, W) {
            return z.SendMsg(
              "Cloud.BeginUGCUpload#1",
              (0, b.I8)(In, S, W),
              On,
              { ePrivilege: 1 },
            );
          }
          o.BeginUGCUpload = u;
          function g(z, S, W) {
            return z.SendMsg(
              "Cloud.CommitUGCUpload#1",
              (0, b.I8)(xn, S, W),
              Dn,
              { ePrivilege: 1 },
            );
          }
          o.CommitUGCUpload = g;
          function f(z, S, W) {
            return z.SendMsg(
              "Cloud.GetFileDetails#1",
              (0, b.I8)(ja, S, W),
              Pn,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }
          o.GetFileDetails = f;
          function w(z, S, W) {
            return z.SendMsg(
              "Cloud.GetSingleFileInfo#1",
              (0, b.I8)(En, S, W),
              An,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          o.GetSingleFileInfo = w;
          function E(z, S, W) {
            return z.SendMsg("Cloud.ShareFile#1", (0, b.I8)(yo, S, W), zo, {
              ePrivilege: 1,
            });
          }
          o.ShareFile = E;
          function A(z, S, W) {
            return z.SendMsg(
              "Cloud.EnumerateUserFiles#1",
              (0, b.I8)(Ta, S, W),
              Gn,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          o.EnumerateUserFiles = A;
          function ur(z, S, W) {
            return z.SendMsg("Cloud.Delete#1", (0, b.I8)(Ln, S, W), qr, {
              ePrivilege: 1,
            });
          }
          o.Delete = ur;
          function Sr(z, S, W) {
            return z.SendMsg(
              "Cloud.GetClientEncryptionKey#1",
              (0, b.I8)(Ur, S, W),
              kn,
              { ePrivilege: 1 },
            );
          }
          o.GetClientEncryptionKey = Sr;
          function Rr(z, S) {
            return z.SendNotification("Cloud.CDNReport#1", (0, b.I8)(_n, S), {
              ePrivilege: 1,
            });
          }
          o.CDNReport = Rr;
          function Kr(z, S) {
            return z.SendNotification(
              "Cloud.ExternalStorageTransferReport#1",
              (0, b.I8)(Hn, S),
              { ePrivilege: 1 },
            );
          }
          o.ExternalStorageTransferReport = Kr;
          function Fr(z, S, W) {
            return z.SendMsg(
              "Cloud.BeginAppUploadBatch#1",
              (0, b.I8)(Wa, S, W),
              ro,
              { ePrivilege: 1 },
            );
          }
          o.BeginAppUploadBatch = Fr;
          function Tr(z, S) {
            return z.SendNotification(
              "Cloud.CompleteAppUploadBatch#1",
              (0, b.I8)(io, S),
              { ePrivilege: 1 },
            );
          }
          o.CompleteAppUploadBatch = Tr;
          function Vr(z, S, W) {
            return z.SendMsg(
              "Cloud.CompleteAppUploadBatchBlocking#1",
              (0, b.I8)(qa, S, W),
              Ir,
              { ePrivilege: 1 },
            );
          }
          o.CompleteAppUploadBatchBlocking = Vr;
          function Pl(z, S, W) {
            return z.SendMsg(
              "Cloud.ClientBeginFileUpload#1",
              (0, b.I8)(ao, S, W),
              no,
              { ePrivilege: 1 },
            );
          }
          o.ClientBeginFileUpload = Pl;
          function El(z, S, W) {
            return z.SendMsg(
              "Cloud.ClientCommitFileUpload#1",
              (0, b.I8)(oo, S, W),
              lo,
              { ePrivilege: 1 },
            );
          }
          o.ClientCommitFileUpload = El;
          function Al(z, S, W) {
            return z.SendMsg(
              "Cloud.ClientFileDownload#1",
              (0, b.I8)(mo, S, W),
              co,
              { ePrivilege: 1 },
            );
          }
          o.ClientFileDownload = Al;
          function Gl(z, S, W) {
            return z.SendMsg(
              "Cloud.ClientDeleteFile#1",
              (0, b.I8)(go, S, W),
              Or,
              { ePrivilege: 1 },
            );
          }
          o.ClientDeleteFile = Gl;
          function Ll(z, S) {
            return z.SendNotification(
              "Cloud.ClientConflictResolution#1",
              (0, b.I8)(po, S),
              { ePrivilege: 1 },
            );
          }
          o.ClientConflictResolution = Ll;
          function kl(z, S, W) {
            return z.SendMsg(
              "Cloud.GetAppFileChangelist#1",
              (0, b.I8)(Jn, S, W),
              Zn,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          o.GetAppFileChangelist = kl;
          function _l(z, S, W) {
            return z.SendMsg(
              "Cloud.SuspendAppSession#1",
              (0, b.I8)(Bo, S, W),
              Nr,
              { ePrivilege: 1 },
            );
          }
          o.SuspendAppSession = _l;
          function Hl(z, S, W) {
            return z.SendMsg(
              "Cloud.ResumeAppSession#1",
              (0, b.I8)(fo, S, W),
              xr,
              { ePrivilege: 1 },
            );
          }
          o.ResumeAppSession = Hl;
          function Kl(z, S, W) {
            return z.SendMsg(
              "Cloud.SignalAppLaunchIntent#1",
              (0, b.I8)(Kn, S, W),
              Vn,
              { ePrivilege: 1 },
            );
          }
          o.SignalAppLaunchIntent = Kl;
          function Vl(z, S) {
            return z.SendNotification(
              "Cloud.SignalAppExitSyncDone#1",
              (0, b.I8)($n, S),
              { ePrivilege: 1 },
            );
          }
          o.SignalAppExitSyncDone = Vl;
          function $l(z, S, W) {
            return z.SendMsg(
              "Cloud.ClientGetAppQuotaUsage#1",
              (0, b.I8)(Qn, S, W),
              Xn,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          o.ClientGetAppQuotaUsage = $l;
        })(Er || (Er = {}));
        var Ua;
        ((o) => {
          (o.NotifyAppStateChangeHandler = {
            name: "CloudClient.NotifyAppStateChange#1",
            request: so,
          }),
            (o.ClientLogUploadRequestHandler = {
              name: "CloudClient.ClientLogUploadRequest#1",
              request: Mo,
            });
        })(Ua || (Ua = {}));
        var Ns = d(57589);
        const So = new Ns.wd("GameNotesCloudStore").Debug;
        function Ia(o) {
          return o.replace(/[!-/:-@ [\\\]^`]/g, "_");
        }
        class Co {
          FilenameForNotes(e) {
            return "appid" in e
              ? `notes_${Number(e.appid)}`
              : `notes_shortcut_${Ia(e.shortcut)}`;
          }
          DirectoryForNoteImages(e) {
            return "appid" in e
              ? `notes_${Number(e.appid)}_images/`
              : `notes_shortcut_${Ia(e.shortcut)}_images/`;
          }
          ParseNotesFileName(e) {
            const r = e.match(/^notes_shortcut_([^/]+)$/);
            if (r) return { shortcut: r[1] };
            const s = e.match(/^notes_(\d+)$/);
            if (s && parseInt(s[1]) < 2147483647)
              return { appid: parseInt(s[1]) };
          }
          async GetGameNotesList(e) {
            return (await this.InternalLoadNotes(e)).notes.slice();
          }
          NewNote(e, r) {
            let s = {};
            return (
              "appid" in e
                ? (s.appid = e.appid)
                : (s.shortcut_name = e.shortcut),
              {
                id: Date.now().toString(36),
                ...s,
                ordinal: 0,
                time_created: Math.floor(Date.now() / 1e3),
                time_modified: Math.floor(Date.now() / 1e3),
                title: r,
                content: "",
                not_persisted: !0,
              }
            );
          }
          async SaveGameNotes(e, r) {
            const s = { notes: r };
            "shortcut" in e && (s.shortcut_name = e.shortcut);
            const l = JSON.stringify(s, (u, g) =>
              u === "not_persisted" ? void 0 : g,
            );
            return (
              So("SaveGameNotes", s),
              await this.WriteNotesFile(this.FilenameForNotes(e), l)
            );
          }
        }
        var ho = d(95603),
          Ro = Object.defineProperty,
          Fo = (o, e, r) =>
            e in o
              ? Ro(o, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (o[e] = r),
          $r = (o, e, r) => Fo(o, typeof e != "symbol" ? e + "" : e, r);
        const Oa = new Ns.wd("GameNotesCloudStore").Debug;
        class vo extends Co {
          constructor(e) {
            super(),
              $r(this, "m_props"),
              $r(this, "m_mapCachedImageFiles", new Map()),
              $r(this, "m_mapFileInfo"),
              $r(this, "m_tsFileInfoLoaded", 0),
              $r(this, "m_promiseLoadingNotes"),
              (this.m_props = e);
          }
          async GetGamesWithNotes() {
            let e = [];
            for (const [r, s] of await this.GetFiles()) {
              const l = this.ParseNotesFileName(r);
              if (!l) continue;
              let u;
              "appid" in l
                ? (u = { appid: l.appid })
                : (u = { shortcut_name: l.shortcut }),
                e.push({ ...u, last_modified: s.rtLastModified });
            }
            return e;
          }
          async UploadImage(e, r) {
            const s = await G.C(await r.arrayBuffer(), "SHA-1"),
              l = (0, ho.PW)(r),
              u = `${e}${s}.${l}`;
            if (!(await this.m_props.uploadFile(u, r)))
              throw "There was an error uploading the file";
            return this.m_mapCachedImageFiles.set(u, r), u;
          }
          async ResolveImageURL(e) {
            let r = this.m_mapCachedImageFiles.get(e);
            if (!r) {
              const s = await this.GetCloudFileInfo(e);
              if (!s) return;
              (r = await this.InternalLoadImageFromCloud(s)),
                this.m_mapCachedImageFiles.set(e, r);
            }
            return URL.createObjectURL(r);
          }
          async GetFiles() {
            return (
              (!this.m_mapFileInfo ||
                performance.now() - this.m_tsFileInfoLoaded > 9e5) &&
                (this.m_promiseLoadingNotes ||
                  (this.m_promiseLoadingNotes = this.InternalLoadNotesList()),
                await this.m_promiseLoadingNotes,
                (this.m_promiseLoadingNotes = void 0)),
              this.m_mapFileInfo
            );
          }
          async InternalLoadNotes(e) {
            const r = this.FilenameForNotes(e),
              s = await this.GetCloudFileInfo(r);
            let l;
            return (
              s
                ? (l = await this.InternalLoadFileFromCloud(s))
                : (l = { notes: [] }),
              l
            );
          }
          async WriteNotesFile(e, r) {
            return this.m_props.uploadFile(e, r), cr.R;
          }
          async GetCloudFileInfo(e) {
            const r = (await this.GetFiles()).get(e);
            if (!r) return;
            const s = b.w.Init(ja);
            s.Body().set_appid(v.oez), s.Body().set_ugcid(r.ugcid);
            const l = await Er.GetFileDetails(
              this.m_props.steamInterface.GetServiceTransport(),
              s,
            );
            if (!l.BSuccess() || !l.Body().details(!1))
              throw `Error loading cloud file detail: ${l.GetErrorMessage()}`;
            const u = l.Body().details();
            return (
              (0, U.wT)(
                u.filename() == e,
                `Asked for ${e} but got ${u.filename()}`,
              ),
              {
                strURL: u.url(),
                strSHA: u.file_sha(),
                strFilename: u.filename(),
                ugcid: u.ugcid(),
                rtLastModified: parseInt(u.timestamp()),
                nBytes: u.file_size(),
              }
            );
          }
          async InternalLoadNotesList() {
            let e = 0,
              r = !0;
            const s = new Map();
            for (; r; ) {
              Oa(`EnumerateUserFiles for ${v.oez}, starting at ${e}`);
              const l = b.w.Init(Ta);
              l.Body().set_appid(v.oez),
                l.Body().set_extended_details(!0),
                l.Body().set_start_index(e);
              const u = await Er.EnumerateUserFiles(
                this.m_props.steamInterface.GetServiceTransport(),
                l,
              );
              if (!u.BSuccess())
                throw `Error loading cloud files: ${u.GetErrorMessage()}`;
              u.Body()
                .files()
                .map((f) => ({
                  strFilename: f.filename(),
                  ugcid: f.ugcid(),
                  rtLastModified: parseInt(f.timestamp()),
                  nBytes: f.file_size(),
                }))
                .forEach((f) => s.set(f.strFilename, f));
              const g = u.Body().files().length;
              (e += g),
                (r = e < u.Body().total_files()),
                Oa(
                  `EnumerateUserFiles complete, loaded ${e - g}-${e} files of ${u.Body().total_files()} total files ${r ? ", running another fetch" : ""}`,
                );
            }
            this.m_mapFileInfo = s;
          }
          async InternalLoadFileFromCloud(e) {
            const s = await (await fetch(e.strURL)).json();
            if (s) return s;
            throw `Cloud file not found for ${e.strFilename}`;
          }
          async InternalLoadImageFromCloud(e) {
            const s = await (await fetch(e.strURL)).blob();
            return new File([s], e.strFilename, { type: s.type });
          }
        }
        var xs = d(88942),
          Ds = d(29385),
          Ps = d(61739);
        function jo(o) {
          return { appid: o };
        }
        function To(o) {
          return { shortcut: Na(o) };
        }
        function Cm(o, e) {
          return "appid" in o
            ? "appid" in e && o.appid == e.appid
            : "shortcut" in e && o.shortcut == e.shortcut;
        }
        function Na(o) {
          return o.trim();
        }
        function xa(o) {
          return o.appid ? { appid: o.appid } : { shortcut: o.shortcut_name };
        }
        const Ar = B.createContext({ mode: "page", store: null });
        function Wo(o) {
          const {
              mode: e,
              store: r,
              closePopup: s,
              bPinnedView: l,
              onClickURL: u,
              bSpellcheckEnabled: g = !0,
              setSpellcheckEnabled: f,
              children: w,
            } = o,
            E = B.useMemo(
              () => ({
                mode: e,
                store: r,
                closePopup: s,
                bPinnedView: l,
                onClickURL: u,
                bSpellcheckEnabled: g,
                setSpellcheckEnabled: f,
              }),
              [e, r, s, l, u, g, f],
            );
          return (0, m.jsx)(Ar.Provider, { value: E, children: w });
        }
        function qo() {
          return B.useContext(Ar).mode == "single";
        }
        function Es() {
          return B.useContext(Ar).closePopup;
        }
        function Gr() {
          return B.useContext(Ar).store;
        }
        function Da() {
          return B.useContext(Ar).bPinnedView;
        }
        function Uo() {
          return B.useContext(Ar).onClickURL;
        }
        function Io() {
          var o;
          return (o = B.useContext(Ar).bSpellcheckEnabled) != null ? o : !0;
        }
        function Oo() {
          return B.useContext(Ar).setSpellcheckEnabled;
        }
        var br = d(18210);
        const No = new Ns.wd("GameNotesCloudStore").Debug;
        function xo() {
          const o = Gr();
          return (0, xs.I)({
            queryKey: ["GameNotes", "GamesWithNotes"],
            queryFn: () => o.GetGamesWithNotes(),
            staleTime: 1e3 * 60 * 10,
          });
        }
        function Yr(o) {
          return "appid" in o
            ? ["GameNotes", "NotesByAppID", o.appid]
            : ["GameNotes", "NotesForShortcut", Na(o.shortcut)];
        }
        function Jr(o, e) {
          return {
            queryKey: Yr(e),
            queryFn: async () => (await o.GetGameNotesList(e)) || [],
            staleTime: 1e3 * 60 * 3,
            refetchInterval: 1e3 * 60 * 15,
            enabled: !!e,
            structuralSharing: !0,
          };
        }
        function Do(o) {
          const e = Gr();
          return (0, xs.I)(Jr(e, o));
        }
        function hm(o, e) {
          const r = useGameNotesStore(),
            s = React.useCallback((l) => l.find((u) => u.id === e), [e]);
          return useQuery({ ...Jr(r, o), select: s });
        }
        function Po(o, e) {
          const r = (0, Ds.jE)(),
            s = Gr(),
            l = xa(o);
          return (0, Ps.n)({
            scope: {
              id: `${"appid" in o ? o.appid : o.shortcut_name}_${o.id}`,
            },
            mutationFn: async (u) => {
              const { title: g, bbcode: f } = u;
              No(`Saving note ${g}`);
              const w = await r.fetchQuery(Jr(s, l));
              if (!w) throw `Failed to load notes for ${JSON.stringify(l)}`;
              const E = w.find((Rr) => Rr.id == o.id),
                A = {
                  ...(E != null ? E : {}),
                  ...o,
                  title: g,
                  content: f,
                  time_modified: Math.floor(Date.now() / 1e3),
                };
              let ur;
              E
                ? (ur = w.map((Rr) => (Rr.id == A.id ? A : Rr)))
                : (ur = [...w, A]);
              const Sr = await s.SaveGameNotes(l, ur);
              if (Sr != cr.R) throw `Error saving notes: ${Sr}`;
              return ur;
            },
            onMutate(u) {
              const g = { ...o, title: u.title, content: u.bbcode };
              return Ea(r, l, (f) => f.map((w) => (w.id == g.id ? g : w))), g;
            },
            onSuccess(u, g, f) {
              r.setQueryData(Yr(l), u);
            },
            onError(u) {
              e(u.message || u.name);
            },
          });
        }
        function Eo(o) {
          const e = (0, Ds.jE)(),
            r = Gr();
          return B.useCallback(() => {
            const s = (0, br.we)("#UserGameNotes_UntitledNote_Title"),
              l = r.NewNote(o, s);
            return Ea(e, o, (u) => [...u, l]), l.id;
          }, [e, r, o]);
        }
        function Pa(o, e) {
          const r = (0, Ds.jE)(),
            s = Gr(),
            l = xa(o);
          return (0, Ps.n)({
            mutationFn: async () => {
              if (o.not_persisted) return;
              const u = await r.fetchQuery(Jr(s, l));
              if (!u) throw `Failed to load notes for ${JSON.stringify(l)}`;
              const g = u.filter((f) => f.id != o.id);
              return await s.SaveGameNotes(l, g), g;
            },
            onSuccess: (u) => {
              u && r.setQueryData(Yr(l), u), e && e();
            },
          });
        }
        function Ea(o, e, r) {
          o.setQueryData(Yr(e), (s) => s && r(s));
        }
        function Ao(o, e) {
          return B.useMemo(() => (e ? To(e) : jo(o)), [o, e]);
        }
        var Go = d(8561),
          Lo = d(81240),
          As = d(84419),
          ko = d(58802);
        const Aa = As.DQ.nodes.image,
          _o = {
            nodes: {
              ...As.DQ.nodes,
              cloudimage: {
                ...Aa,
                parseDOM: [],
                bbCode: { ...Aa.bbCode, tag: "cloudimg" },
              },
            },
            marks: { ...As.DQ.marks },
          },
          Qr = new ko.W(_o);
        var Ho = d(33645),
          Ko = d.n(Ho),
          Vo = d(23569),
          $o = d(99931),
          Qo = d(64238),
          Xo = d.n(Qo),
          Ga = d(83085),
          Yo = d(93147),
          Hr = d(3166),
          Jo = d(35184),
          Zr = d(56718),
          Zo = d(73309),
          Lr = d(73723),
          jr = d(50660),
          Gs = d(36707),
          La = d(52406);
        function el(o) {
          const {
              schema: e,
              view: r,
              refUpdateToolbar: s,
              className: l,
              bSpellcheckEnabled: u,
              setSpellcheckEnabled: g,
            } = o,
            [f, w] = (0, La.SP)("FormattingToolbar_Expanded", !1);
          return (0, m.jsx)(jr.bI, {
            refUpdateToolbar: s,
            view: r,
            children: (0, m.jsxs)("div", {
              className: (0, Gs.A)(Zo.Toolbar, l),
              children: [
                (0, m.jsxs)(jr.Ez, {
                  children: [
                    (0, m.jsx)(Lr.MV, {}),
                    (0, m.jsx)(jr.XQ, {}),
                    (0, m.jsx)(Lr.Km, { schema: e }),
                    (0, m.jsx)(jr.hK, {}),
                    (0, m.jsx)(jr.ff, {
                      onClick: () => w(!f),
                      tooltip: (0, br.we)("#FormattingToolbar_ExpandOptions"),
                      children: (0, m.jsx)(Zr.cLJ, {
                        direction: f ? "up" : "down",
                      }),
                    }),
                  ],
                }),
                (0, m.jsx)(Jo.R, {
                  visible: f,
                  children: (0, m.jsxs)(jr.Ez, {
                    children: [
                      (0, m.jsx)(Lr.Hz, { schema: e }),
                      (0, m.jsx)(Lr.WJ, { schema: e, levels: 5 }),
                      (0, m.jsx)(jr.u3, {
                        nodeType: e.nodes.code_block,
                        tooltip: (0, br.we)("#FormattingToolbar_CodeBlock"),
                        children: (0, m.jsx)(Zr.kNE, {}),
                      }),
                      (0, m.jsx)(jr.XQ, {}),
                      (0, m.jsx)(Lr.C$, { schema: e }),
                      (0, m.jsx)(jr.XQ, {}),
                      (0, m.jsx)(Lr.z9, { schema: e }),
                      (0, m.jsx)(jr.hK, {}),
                      g &&
                        (0, m.jsx)(Lr.Nt, {
                          bSpellcheckEnabled: u,
                          setSpellcheckEnabled: g,
                        }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        var hr = d(27491),
          tl = d(72609),
          rl = d(5310);
        function il(o) {
          const { deleteNote: e, hidden: r, pmState: s } = o,
            [l, u] = B.useState(),
            g = B.useRef(void 0),
            f = Io(),
            w = Oo(),
            E = (0, Hr.Qn)(),
            A = {
              onSecondaryButton: () => e(),
              onSecondaryActionDescription: (0, br.we)(
                "#UserGameNotes_DeleteNote",
              ),
              onDragOver: (ur) => ur.stopPropagation(),
            };
          return (
            B.useEffect(() => {
              l &&
                !r &&
                (tl.TS.IN_CLIENT ||
                  !window.matchMedia(`(max-width: ${rl.narrowWidth})`)
                    .matches) &&
                l.focus();
            }, [l, r]),
            (0, m.jsxs)(m.Fragment, {
              children: [
                !E &&
                  (0, m.jsx)(el, {
                    schema: Qr.pm_schema,
                    view: l,
                    refUpdateToolbar: g,
                    className: hr.Toolbar,
                    bSpellcheckEnabled: f,
                    setSpellcheckEnabled: w,
                  }),
                (0, m.jsx)(Yo.l, {
                  pmState: s,
                  className: hr.EditorInput,
                  refOnUpdate: g,
                  refView: u,
                  bSpellcheckEnabled: f,
                  panelProps: A,
                  children: (0, m.jsx)(sl, { schema: Qr.pm_schema }),
                }),
              ],
            })
          );
        }
        const sl = B.memo(function (e) {
          const { schema: r } = e,
            s = Uo(),
            l = B.useMemo(
              () => [
                {
                  type: r.nodes.cloudimage,
                  component: al,
                  readProps: (u) => ({ src: u.attrs.src }),
                },
              ],
              [r.nodes.cloudimage],
            );
          return (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsx)(Ga.pw, { nodeType: r.nodes.image }),
              (0, m.jsx)($o.W, {
                linkMarkType: r.marks.link,
                schema: r,
                onClickURL: s,
              }),
              (0, m.jsx)(Vo.U, { specs: l }),
            ],
          });
        });
        function al(o) {
          const { src: e, selected: r } = o,
            [s, l] = B.useState(),
            u = Gr();
          return (
            B.useEffect(() => {
              let g = !1;
              return (
                u.ResolveImageURL(e).then((f) => {
                  g ? URL.revokeObjectURL(f) : l(f);
                }),
                () => {
                  (g = !0), l(void 0);
                }
              );
            }, [u, e]),
            s
              ? (0, m.jsx)("img", {
                  className: Xo()(Ko().Image, r && "ProseMirror-selectednode"),
                  src: s,
                })
              : null
          );
        }
        var nl = d(95987),
          Dr = d(19316),
          ei = d(2801),
          ka = d(71421),
          Ls = d(54963),
          ol = d(71568);
        const ll = 10;
        function ml(o) {
          const { note: e, hidden: r = !1 } = o,
            [s, l] = B.useState(void 0),
            u = B.useRef(!1),
            g = (0, Hr.Qn)(),
            { mutate: f } = Po(e, l),
            [w, E] = B.useState();
          B.useEffect(() => {
            if (!u.current) {
              const Fr = new Go.n(Qr, e.content, (Tr, Vr) =>
                f({ title: _a(Vr), bbcode: Tr }),
              );
              Bl(Fr, Qr.pm_schema), E(Fr);
            }
          }, [f, e.content]);
          const { bDirty: A } = (0, Lo.i)(w, { msAutosaveTimeout: ll * 1e3 });
          B.useEffect(() => {
            A &&
              !u.current &&
              ((u.current = !0),
              nl.y.ReportTrackedAction("/GameNotes/NoteModified"));
          }, [A]),
            B.useEffect(() => {
              r && w && w.CommitChanges();
            }, [r, w]);
          const ur = (0, ol.R7)().ownerWindow;
          (0, Ls.o4)(
            ur.document,
            B.useCallback(
              (Fr) => {
                Fr == "hidden" && w && w.CommitChanges();
              },
              [w],
            ),
          ),
            (0, Ls.l6)(
              window,
              "beforeunload",
              B.useCallback(
                (Fr) => {
                  !Hr.TS.IN_STEAMUI &&
                    w.BHasUncomittedChanges() &&
                    (w.CommitChanges(), Fr.preventDefault());
                },
                [w],
              ),
            );
          const Sr = cl(e.appid, Qr.pm_schema),
            Rr = Es(),
            Kr = Pa(e, Rr);
          return (0, m.jsx)(Ga.Xv, {
            ProcessFileUpload: Sr,
            bAllowImageHotLinking: !0,
            children: (0, m.jsxs)("div", {
              className: hr.NoteEditorArea,
              children: [
                (0, m.jsx)(ul, { error: s, dismissError: () => l(void 0) }),
                (0, m.jsx)(il, {
                  deleteNote: Kr.mutate,
                  hidden: r,
                  pmState: w,
                }),
                !g && (0, m.jsx)(dl, { note: e, bDirty: A }),
              ],
            }),
          });
        }
        function cl(o, e) {
          const r = Gr();
          return B.useCallback(
            async (s) => {
              const l = await r.UploadImage(`notes_${o}_images/`, s);
              return e.nodes.cloudimage.create({ src: l });
            },
            [r, o, e],
          );
        }
        function ul(o) {
          const { error: e, dismissError: r } = o;
          return e
            ? (0, m.jsx)(ei.EN, {
                active: !0,
                children: (0, m.jsx)(ei.o0, {
                  bAlertDialog: !0,
                  strTitle: (0, br.we)("#Error_Generic"),
                  strDescription: (0, br.we)(
                    "#UserGameNotes_ErrorSavingNotes",
                    e,
                  ),
                  closeModal: r,
                }),
              })
            : null;
        }
        function dl(o) {
          const { note: e, bDirty: r } = o,
            [s, l, u] = (0, Ls.uD)(!1),
            g = qo(),
            f = Es(),
            { mutate: w, isPending: E } = Pa(e, f),
            A = B.useCallback(() => {
              !r && e.not_persisted ? w() : l();
            }, [r, e, w, l]);
          return (0, m.jsxs)("div", {
            className: hr.NoteActions,
            children: [
              s &&
                (0, m.jsx)(pl, {
                  note: e,
                  closeModal: u,
                  deleteNote: w,
                  deletePending: E,
                }),
              (0, m.jsx)(ka.he, {
                toolTipContent: (0, br.we)("#UserGameNotes_DeleteNote"),
                direction: "top",
                children: (0, m.jsx)(Dr.$n, {
                  onClick: A,
                  children: (0, m.jsx)(Zr.lMJ, {}),
                }),
              }),
              g && (0, m.jsx)(gl, { bDirty: r }),
            ],
          });
        }
        function gl(o) {
          const { bDirty: e } = o,
            r = Es();
          return e
            ? (0, m.jsx)(Dr.jn, {
                onClick: () => r(),
                className: hr.CloseWindowButton,
                children: (0, br.we)("#Button_SaveAndClose"),
              })
            : (0, m.jsx)(Dr.$n, {
                onClick: () => r(),
                className: hr.CloseWindowButton,
                children: (0, br.we)("#Button_Close"),
              });
        }
        function pl(o) {
          const { note: e, closeModal: r, deleteNote: s, deletePending: l } = o;
          return (0, m.jsx)(ei.EN, {
            active: !0,
            children: (0, m.jsx)(ei.o0, {
              strTitle: (0, br.we)("#UserGameNotes_DeleteNote"),
              strDescription: (0, br.we)("#UserGameNotes_PromptDelete"),
              onOK: () => s(),
              bOKDisabled: l,
              strOKButtonText: (0, br.we)("#Button_Delete"),
              closeModal: r,
            }),
          });
        }
        function _a(o) {
          let e = "";
          for (let r = 0; r < o.content.childCount; r++) {
            const s = o.content.child(r);
            if (s.isText) e += s.text;
            else if (
              ((e = e.trim()), e.length > 4 || ((e = _a(s)), e.length > 4))
            )
              return e;
          }
          return e.trim();
        }
        function Bl(o, e) {
          o.UpdateState((r) => {
            const s = [];
            if (
              (r.doc.descendants((l, u) => {
                var g;
                l.type === e.nodes.image &&
                  (g = l.attrs.src) != null &&
                  g.match(/^\/gamenotes\//) &&
                  s.push({ node: l, pos: u });
              }),
              !!s.length)
            )
              return (
                s.reverse().forEach(({ node: l, pos: u }) => {
                  const g = l.attrs.src.replace(/^\/gamenotes\//, ""),
                    f = e.nodes.cloudimage.create({ src: g });
                  r = r.replaceWith(u, u + l.nodeSize, f);
                }),
                r.setMeta("addToHistory", !1),
                r
              );
          });
        }
        var fl = d(58632),
          bl = d.n(fl),
          Ha = d(98112),
          Ka = d(98609);
        let ks;
        const Va = 1440 * 60 * 1e3;
        function $a(o) {
          return `appinfo_${o}_${Ka.TS.LANGUAGE}`;
        }
        function Ml(o) {
          return !!(o && Date.now() - o.timeCached < Va);
        }
        function wl(o, e) {
          return (
            ks ||
              (ks = new (bl())(
                async (r) => {
                  const s = new Map();
                  (await Promise.all(r.map((g) => e.GetObject($a(g)))))
                    .filter(Ml)
                    .forEach(({ value: g }) => s.set(g.appid, g));
                  const u = r.slice().filter((g) => !s.has(g));
                  if (u.length) {
                    const g = b.w.Init(Ha._z);
                    g.Body().set_language((0, v.sfN)(Ka.TS.LANGUAGE)),
                      g.Body().set_appids(u);
                    const f = await Ha.BE.GetApps(o, g);
                    if (f.GetEResult() != cr.R) throw f.GetErrorMessage();
                    f.Body()
                      .toObject()
                      .apps.forEach((w) => {
                        e.StoreObject($a(w.appid), {
                          timeCached: Date.now(),
                          value: w,
                        }),
                          s.set(w.appid, w);
                      });
                  }
                  return r.map((g) => s.get(g));
                },
                { cache: !1 },
              )),
            ks
          );
        }
        function Qa(o) {
          const e = (0, wr.KV)(),
            r = (0, wr.rX)();
          return (0, xs.I)({
            queryKey: ["appinfo", o],
            queryFn: async () => wl(e, r).load(o),
            staleTime: Va,
            enabled: !!o,
          }).data;
        }
        function yl(o) {
          const { bStandalonePage: e } = o,
            r = (0, q.W5)(),
            s = Ao(
              "appid" in r.params && Number(r.params.appid),
              "shortcut_name" in r.params && r.params.shortcut_name,
            ),
            l = _s(),
            u = Eo(s),
            g = B.useRef(void 0),
            { data: f } = Do(s);
          let w,
            E = !1;
          if (f) {
            const ur = r.params.noteid || g.current;
            ur &&
              ((w = f.find((Sr) => Sr.id === ur)),
              !w && r.params.noteid && (E = !0)),
              w || (w = f[0]);
          }
          w && (g.current = w.id),
            B.useEffect(() => {
              f && f.length == 0 && l(s, u(), !0);
            }, [l, s, f, u]),
            B.useEffect(() => {
              E && l(s, void 0, !0);
            }, [l, s, E]);
          const A = (0, m.jsx)(ka.he, {
            toolTipContent: (0, br.we)("#UserGameNotes_NewNote"),
            direction: "top",
            children: (0, m.jsx)(Dr.$n, {
              className: hr.NewNoteButton,
              onClick: () => {
                const ur = u();
                l(s, ur);
              },
              children: (0, m.jsx)(Zr.qY3, {}),
            }),
          });
          return f
            ? (0, m.jsx)(zl, {
                noteParent: s,
                notes: f,
                activeNoteID: w == null ? void 0 : w.id,
                actions: A,
                bStandalonePage: e,
              })
            : null;
        }
        function zl(o) {
          const {
              noteParent: e,
              notes: r,
              activeNoteID: s,
              actions: l,
              bStandalonePage: u,
            } = o,
            [g, f] = (0, La.SP)("NotesListCollapsed", !1),
            w = Da(),
            E = (0, Hr.Qn)(),
            A = (0, q.W5)(),
            ur = (0, Dr.vn)(A.params.noteid || w ? "ActivePage" : "PageList"),
            Sr = r.map((Tr) => {
              var Vr;
              return {
                title:
                  ((Vr = Tr.title) == null ? void 0 : Vr.length) > 0
                    ? Tr.title
                    : (0, br.we)("#UserGameNotes_Untitled"),
                identifier: Tr.id,
                content: (0, m.jsx)(Cl, { noteParent: e, note: Tr }),
                pageClassName: hr.NotePage,
                hideTitle: !0,
              };
            }),
            Rr = _s(),
            Kr = B.useCallback((Tr) => Rr(e, Tr), [Rr, e]),
            Fr = Hr.TS.IN_STEAMUI
              ? (0, br.we)("#UserGameNotes_NotesList")
              : (0, m.jsx)(Sl, { noteParent: e });
          return E && u
            ? (0, m.jsx)(Dr.Bv, {
                title: Fr,
                pages: Sr,
                className: (0, Gs.A)(
                  hr.NotesPagedSettings,
                  w && hr.PinnedView,
                  ur,
                ),
                page: s,
                onPageRequested: Kr,
                bottomControls: l,
                hideList: g,
                toggleHideList: w || E ? void 0 : () => f(!g),
              })
            : (0, m.jsx)(Dr.O7, {
                title: Fr,
                pages: Sr,
                className: (0, Gs.A)(
                  hr.NotesPagedSettings,
                  w && hr.PinnedView,
                  ur,
                ),
                page: s,
                onPageRequested: Kr,
                bottomControls: l,
                hideList: g,
                toggleHideList: w || E ? void 0 : () => f(!g),
              });
        }
        function Sl(o) {
          const { noteParent: e } = o,
            r = Qa("appid" in e ? e.appid : void 0);
          let s;
          return (
            "appid" in e ? (s = r == null ? void 0 : r.name) : (s = e.shortcut),
            (0, m.jsx)(m.Fragment, {
              children: (0, br.we)("#UserGameNotes_NotesForGame", s),
            })
          );
        }
        function Cl(o) {
          const { noteParent: e, note: r } = o,
            s = Dr.v$(),
            l = _s(),
            u = B.useCallback(() => l(e), [l, e]),
            g = Da();
          return (0, m.jsxs)(m.Fragment, {
            children: [
              !g && (0, m.jsx)(Dr._Z, { onActivate: u }),
              (0, m.jsx)(ml, { note: r, hidden: !s }),
            ],
          });
        }
        function _s(o = !1) {
          const e = (0, Hr.Qn)(),
            r = (0, q.W6)(),
            s = o || e;
          return B.useCallback(
            (l, u, g = s) => {
              let f;
              "appid" in l
                ? (f = D.AppNotes(l.appid, u))
                : (f = D.ShortcutNotes(l.shortcut, u)),
                g
                  ? r.replace(f, r.location.state)
                  : r.push(f, r.location.state);
            },
            [r, s],
          );
        }
        var hl = d(17083),
          Rl = d(85599);
        function Fl() {
          const { data: o, isLoading: e } = xo(),
            r = B.useMemo(
              () =>
                o == null
                  ? void 0
                  : o.slice().sort((s, l) => l.last_modified - s.last_modified),
              [o],
            );
          return e
            ? (0, m.jsx)(Rl.t, { msDelayAppear: 300 })
            : (0, m.jsxs)("div", {
                children: [
                  (0, m.jsx)("h1", {
                    children: (0, br.we)("#UserGameNotes_NotesList"),
                  }),
                  (0, m.jsx)("ul", {
                    children: r.map((s) =>
                      (0, m.jsx)(vl, { game: s }, s.appid || s.shortcut_name),
                    ),
                  }),
                ],
              });
        }
        function vl(o) {
          const { game: e } = o;
          return (0, m.jsx)("li", {
            children: (0, m.jsx)(hl.N_, {
              to: mr(
                e.appid ? { appid: e.appid } : { shortcut: e.shortcut_name },
              ),
              children: e.appid
                ? (0, m.jsx)(jl, { appid: e.appid })
                : e.shortcut_name,
            }),
          });
        }
        function jl(o) {
          const { appid: e } = o,
            r = Qa(e);
          return r == null ? void 0 : r.name;
        }
        function Tl(o, e, r = {}) {
          const { bIsPublic: s = !0 } = r,
            l = { unAppID: o, strMachineName: e, bIsPublic: s },
            u = (0, wr.KV)();
          return (0, Ps.n)({
            mutationFn: async ({ files: g }) =>
              await Wl(
                u,
                l,
                g.map((w) => w.filename),
                async (w) =>
                  !(await Promise.all(g.map((A) => Il(u, l, w, A)))).some(
                    (A) => !A,
                  ),
              ),
          });
        }
        async function Wl(o, e, r, s) {
          const l = await ql(o, e, r);
          if (!l) return !1;
          let u = !1;
          try {
            u = await s(l);
          } finally {
            Ul(o, e, l, u);
          }
          return !0;
        }
        async function ql(o, e, r) {
          const s = b.w.Init(Wa);
          s.Body().set_appid(e.unAppID),
            s.Body().set_machine_name(e.strMachineName),
            s.Body().set_files_to_upload(r.slice());
          const l = await Er.BeginAppUploadBatch(o, s);
          if (!l.BSuccess())
            throw `Error in BeginAppUploadBatch: ${l.GetErrorMessage()}`;
          return l.Body().batch_id();
        }
        function Ul(o, e, r, s) {
          const l = b.w.Init(qa);
          l.Body().set_appid(e.unAppID),
            l.Body().set_batch_id(r),
            l.Body().set_batch_eresult(s ? cr.R : cr.zi),
            Er.CompleteAppUploadBatch(o, l);
        }
        async function Il(o, e, r, s) {
          let l, u;
          s.content instanceof File
            ? (l = await s.content.arrayBuffer())
            : (l = new TextEncoder().encode(s.content).buffer),
            (u = await G.C(l, "SHA-1"));
          const g = await Ol(o, e, r, s.filename, l.byteLength, u),
            f = `https://${g.url_host}${g.url_path}`;
          let w = !1;
          try {
            const E = g.request_headers.map(({ name: ur, value: Sr }) => [
              ur,
              Sr,
            ]);
            w = (
              await fetch(f, {
                method: "PUT",
                headers: E,
                mode: "cors",
                body: s.content,
              })
            ).ok;
          } catch {}
          return await Nl(o, e, s.filename, u, w);
        }
        async function Ol(o, e, r, s, l, u) {
          const g = b.w.Init(Fa);
          g.Body().set_appid(e.unAppID),
            g.Body().add_platforms_to_sync("All"),
            g.Body().set_upload_batch_id(r),
            g.Body().set_is_public(e.bIsPublic),
            g.Body().set_filename(s),
            g.Body().set_file_size(l),
            g.Body().set_file_sha(u);
          const f = await Er.BeginHTTPUpload(o, g);
          if (!f.BSuccess())
            throw `Error in BeginHTTPUpload: ${f.GetErrorMessage()}`;
          return f.Body().toObject();
        }
        async function Nl(o, e, r, s, l) {
          const u = b.w.Init(va);
          u.Body().set_appid(e.unAppID),
            u.Body().set_transfer_succeeded(l),
            u.Body().set_filename(r),
            u.Body().set_file_sha(s);
          const g = await Er.CommitHTTPUpload(o, u);
          if (!g.BSuccess())
            throw `Error in CommitHTTPUpload: ${g.GetErrorMessage()}`;
          return g.Body().file_committed();
        }
        function xl(o) {
          const e = Dl();
          return (0, m.jsx)(Wo, {
            mode: "page",
            store: e,
            children: (0, m.jsxs)(q.dO, {
              children: [
                (0, m.jsx)(q.qh, {
                  path: D.List(),
                  children: (0, m.jsx)(Fl, {}),
                }),
                (0, m.jsx)(q.qh, {
                  path: D.AppNotes(":appid", ":noteid?"),
                  children: (0, m.jsx)(yl, {}),
                }),
                (0, m.jsx)(q.qh, {
                  children: (0, m.jsx)(q.rd, { to: `${D.List()}` }),
                }),
              ],
            }),
          });
        }
        function Dl() {
          const o = (0, wr.TR)(),
            { mutateAsync: e } = Tl(v.oez, "Steam Community Web Interface", {
              bIsPublic: !0,
            }),
            r = B.useCallback(
              (u, g) => e({ files: [{ filename: u, content: g }] }),
              [e],
            ),
            s = B.useRef({ steamInterface: o, uploadFile: r });
          s.current.uploadFile = r;
          const [l] = B.useState(() => new vo(s.current));
          return l;
        }
      },
      8145: (Br, Mr, d) => {
        "use strict";
        d.d(Mr, { op: () => a, CS: () => G, vE: () => i, Al: () => cr });
        const m = 0,
          v = 1,
          B = 2,
          q = 3;
        var wr = Object.defineProperty,
          D = (p, M, y) =>
            M in p
              ? wr(p, M, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: y,
                })
              : (p[M] = y),
          mr = (p, M, y) => D(p, typeof M != "symbol" ? M + "" : M, y);
        class cr {
          constructor(M, y) {
            mr(this, "m_fnAccumulatorFactory"),
              mr(this, "m_dictComponents"),
              M instanceof Map
                ? (this.m_dictComponents = M)
                : (this.m_dictComponents = new Map(Object.entries(M))),
              (this.m_fnAccumulatorFactory = y);
          }
          Parse(M, y, h = !0) {
            const j = O(M || "", h);
            return this.Parse_BuildElements(j, y);
          }
          Parse_BuildElements(M, y) {
            let h = this.m_fnAccumulatorFactory(void 0);
            const j = [],
              T = () => (j.length < 1 ? void 0 : j[j.length - 1]),
              R = this.m_dictComponents,
              N = (C) => {
                var yr;
                return !!(
                  C.tag &&
                  (yr = R.get(C.tag)) != null &&
                  yr.autocloses
                );
              };
            let F = !1,
              P = !0;
            const pr = (C, yr) => {
              let zr = yr.text.toLowerCase();
              if (C && C.node.tag === zr && R.get(C.node.tag)) {
                const L = R.get(C.node.tag),
                  I = {
                    tagname: C.node.tag,
                    args: C.node.args,
                    rawargs: C.node.rawargs,
                  },
                  x = y(L.Constructor, I, ...h.GetElements());
                (h = C.accumulator),
                  Array.isArray(x)
                    ? x.forEach((gr) => h.AppendNode(gr))
                    : h.AppendNode(x),
                  (F = !!L.skipFollowingNewline),
                  (P = C.bWrapTextForCopying);
              } else if (C) {
                const L = C.accumulator;
                L.AppendText("[" + C.node.text + "]", !1),
                  h.GetElements().forEach((I) => L.AppendNode(I)),
                  L.AppendText("[/" + yr.text + "]", !1),
                  (h = L),
                  (P = C.bWrapTextForCopying);
              }
            };
            for (
              M.forEach((C, yr) => {
                var zr, L;
                if (C.type == v) {
                  const I = F ? C.text.replace(/^[\t\r ]*\n/g, "") : C.text;
                  h.AppendText(I, P), (F = !1);
                } else if (C.type == B) {
                  const I = R.get(C.tag);
                  if (!I) h.AppendText("[" + C.text + "]", j.length == 0);
                  else {
                    const x = T();
                    if (x !== void 0) {
                      const gr = R.get(x.node.tag);
                      gr &&
                        gr.autocloses &&
                        C.tag === x.node.tag &&
                        pr(j.pop(), x.node);
                    }
                    j.push({ accumulator: h, node: C, bWrapTextForCopying: P }),
                      (h = this.m_fnAccumulatorFactory(C)),
                      (F = !!I.skipInternalNewline),
                      (P = (zr = I.allowWrapTextForCopying) != null ? zr : !1);
                  }
                } else if (C.type == q) {
                  let I = C.text.toLowerCase();
                  for (; T() && T().node.tag !== I && N(T().node); ) {
                    const x = j.pop();
                    pr(x, x.node);
                  }
                  if (((L = T()) == null ? void 0 : L.node.tag) == I) {
                    const x = j.pop();
                    pr(x, C);
                  } else h.AppendText("[/" + C.text + "]", j.length == 0);
                }
              });
              j.length > 0;
            ) {
              const C = j.pop();
              pr(C, C.node);
            }
            return h.GetElements();
          }
        }
        function G(p, M, y = !1) {
          let h = "[" + p;
          M != null && M[""] && (h += `=${y ? "" + M[""] : U("" + M[""])}`);
          for (const j in M) j !== "" && (h += ` ${b(j)}=${U("" + M[j])}`);
          return (h += "]"), h;
        }
        function U(p) {
          return `"${p.replace(/(\\|"|\])/g, "\\$1")}"`;
        }
        function b(p) {
          return p.replace(/(\\| |\])/g, "\\$1");
        }
        function a(p) {
          return `[/${p}]`;
        }
        function i(p) {
          return p.replace(/(\\|\[)/g, "\\$1");
        }
        function t(p, M, y = m) {
          const { type: h, text: j = "" } = M;
          if (h == B) {
            let T = j.indexOf("=");
            const R = j.indexOf(" ");
            R != -1 && (T == -1 || R < T) && (T = R);
            let N,
              F,
              P = "";
            T > 0
              ? ((N = j.substr(0, T).toLocaleLowerCase()),
                (P = j.substr(T)),
                (F = n(P)))
              : ((F = {}), (N = j.toLocaleLowerCase())),
              p.push({ type: h, text: j, tag: N, args: F, rawargs: P });
          } else h != m && p.push({ type: h, text: j });
          return { type: y, text: "" };
        }
        function dr(p) {
          var M;
          let y = "";
          return (
            p.type == q ? (y = "[/") : p.type == B && (y = "["),
            { type: v, text: y + ((M = p.text) != null ? M : "") }
          );
        }
        function O(p, M) {
          var y, h, j;
          const T = [];
          let R = { type: m, text: "" },
            N = !1,
            F = !1,
            P = !1;
          for (let pr = 0; pr < p.length; pr++) {
            const C = p[pr];
            switch (R.type) {
              case m:
                C == "["
                  ? ((R.type = B), (F = !0))
                  : ((R.type = v), C == "\\" && M ? (N = !N) : (R.text += C));
                break;
              case B:
              case q:
                if (C == "/" && F) (R.type = q), (R.text = ""), (F = !1);
                else if (C == "[" && !N) (R = t(T, dr(R), B)), (F = !0);
                else if (C == "]" && !N) {
                  const yr =
                      R.type == B &&
                      ((y = R.text) == null ? void 0 : y.toLocaleLowerCase()) ==
                        "noparse",
                    zr =
                      R.type == q &&
                      ((h = R.text) == null ? void 0 : h.toLocaleLowerCase()) ==
                        "noparse";
                  F || (P && !zr)
                    ? ((R = dr(R)), (R.text += C))
                    : yr
                      ? (P = !0)
                      : zr && (P = !1),
                    (R = t(T, R)),
                    (F = !1);
                } else
                  C == "\\" && M
                    ? ((R.text += C), (N = !N), (F = !1))
                    : ((R.text += C), (N = !1), (F = !1));
                break;
              case v:
                C == "[" && !N
                  ? ((R = t(T, R, B)), (F = !0))
                  : C == "\\" && M
                    ? (N && (R.text += C), (N = !N))
                    : ((R.text += C), (N = !1));
                break;
            }
          }
          return (
            R.type != m &&
              (R.type == B || R.type == q
                ? T.push(dr(R))
                : T.push({
                    type: R.type,
                    text: (j = R.text) != null ? j : "",
                  })),
            T
          );
        }
        function n(p) {
          if (!p || p.length < 1) return {};
          const M = {};
          let y = "",
            h = "",
            j;
          ((F) => {
            (F[(F.PRE_NAME = 0)] = "PRE_NAME"),
              (F[(F.IN_NAME = 1)] = "IN_NAME"),
              (F[(F.POST_NAME = 2)] = "POST_NAME"),
              (F[(F.IN_VALUE = 3)] = "IN_VALUE"),
              (F[(F.IN_QUOTED_VALUE = 4)] = "IN_QUOTED_VALUE");
          })(j || (j = {}));
          let T = 0,
            R = 0;
          p[0] == "=" && (T = 2);
          let N = !1;
          for (R++; R < p.length; R++) {
            const F = p[R];
            let P = !0,
              pr = !1;
            switch (T) {
              case 0:
                if (F == "=") return {};
                if (F == " ") continue;
                T = 1;
                break;
              case 1:
                (F == "=" || F == " ") &&
                  !N &&
                  (F == " " ? ((T = 0), (pr = !0)) : (T = 2), (P = !1));
                break;
              case 2:
                F == " "
                  ? ((T = 0), (P = !1), (pr = !0))
                  : F == '"'
                    ? ((T = 4), (P = !1))
                    : (T = 3);
                break;
              case 3:
              case 4:
                ((F == " " && T != 4 && !N) || (F == '"' && T == 4 && !N)) &&
                  ((T = 0), (P = !1), (pr = !0));
                break;
            }
            if (P)
              if (F == "\\" && !N) N = !0;
              else if (((N = !1), T == 1)) y += F;
              else if (T == 3 || T == 4) h += F;
              else
                throw new Error(
                  "Not expecting to accumulate buffer in state " + T,
                );
            pr && ((M[y] = h), (y = ""), (h = ""));
          }
          return T != 0 && (M[y] = h), M;
        }
      },
      29950: (Br, Mr, d) => {
        "use strict";
        d.d(Mr, { J: () => m });
        function m(v) {
          if (!v) return v;
          const B = v.trim(),
            q = B.replace(/^[\u0000-\u0020]+/, "")
              .replace(/[\t\n\r]/g, "")
              .toLowerCase();
          return q.startsWith("javascript:") ||
            q.startsWith("data:") ||
            q.startsWith("vbscript:")
            ? ""
            : B;
        }
      },
      99931: (Br, Mr, d) => {
        "use strict";
        d.d(Mr, { W: () => a });
        var m = d(7850),
          v = d(57053),
          B = d(52893),
          q = d(90626),
          wr = d(18210),
          D = d(29950),
          mr = d(12293),
          cr = d(19565),
          G = d(37341),
          U = d.n(G),
          b = d(65217);
        const a = q.memo(function (O) {
          const {
              linkMarkType: n,
              onURLPasted: p,
              schema: M,
              onClickURL: y = t,
            } = O,
            h = q.useRef(y);
          h.current = y;
          const [j, T] = q.useState(),
            [R, N] = q.useState(),
            [F, P] = q.useState(),
            [pr, C] = (0, mr.E)(M),
            yr = q.useMemo(
              () =>
                new B.k_({
                  props: {
                    handleClickOn(L, I, x, gr, fr, Wr) {
                      if (Wr && (fr.ctrlKey || fr.button == 1)) {
                        const Cr = x
                            .resolve(I - gr)
                            .marks()
                            .find((vr) => vr.type == n),
                          Pr = Cr && (0, D.J)(Cr.attrs.href);
                        if (Pr)
                          return (
                            h.current(Pr, fr.view), fr.preventDefault(), !0
                          );
                      }
                      return !1;
                    },
                    handleKeyDown(L, I) {
                      return I.key == "k" &&
                        (I.metaKey || I.ctrlKey) &&
                        !I.shiftKey &&
                        !I.altKey
                        ? (pr(L), !0)
                        : !1;
                    },
                    clipboardTextParser(L, I, x, gr) {
                      const fr = (0, b.F)(M, L, n, p);
                      return fr && new v.Ji(v.FK.from(fr), I.start(), I.end());
                    },
                    handlePaste(L, I, x) {
                      let gr = [];
                      if (
                        (x.content.descendants((Cr, Pr) => {
                          if (Cr.isText) {
                            const vr = (0, b.F)(M, Cr.text, n, p);
                            vr && gr.push({ node: Cr, pos: Pr, rgNodes: vr });
                          }
                        }),
                        !gr.length)
                      )
                        return !1;
                      let fr = L.state.tr;
                      fr.selection.empty || fr.deleteSelection();
                      let Wr = fr.selection.from,
                        kr = 0;
                      for (const Cr of gr) {
                        const { node: Pr, pos: vr, rgNodes: Hs } = Cr,
                          _r = x.content.cut(kr, vr).append(v.FK.from(Hs));
                        fr.insert(Wr, _r),
                          (Wr += _r.size + 2),
                          (kr = vr + Pr.nodeSize);
                      }
                      return (
                        fr.insert(Wr, x.content.cut(kr)),
                        fr.scrollIntoView(),
                        L.dispatch(fr),
                        !0
                      );
                    },
                    handleDOMEvents: {
                      mouseover: (L, I) => {
                        for (
                          let x = I.target;
                          x && x != I.currentTarget;
                          x = x.parentElement
                        )
                          if (
                            x.nodeName == "A" &&
                            "getBoundingClientRect" in x
                          ) {
                            const gr = x.getBoundingClientRect();
                            T(gr.left + gr.width / 2), N(gr.bottom + 2), P(x);
                            return;
                          }
                        P(void 0);
                      },
                      mouseleave: (L, I) => (P(void 0), !1),
                    },
                  },
                }),
              [n, pr, p, M],
            );
          (0, cr.c$)(yr);
          let zr = null;
          return (
            F &&
              j &&
              R &&
              (zr = (0, m.jsx)(i, {
                top: R,
                left: j,
                href: F.getAttribute("href"),
              })),
            (0, m.jsxs)(m.Fragment, { children: [zr, C] })
          );
        });
        function i(dr) {
          const { top: O, left: n, href: p } = dr,
            [M, y] = q.useState(0),
            h = q.useRef(null);
          q.useLayoutEffect(() => {
            y(h.current.getBoundingClientRect().width);
          }, [O, n, p]);
          const j = { top: `${O}px`, left: `${Math.max(n - M / 2, 12)}px` };
          return (0, m.jsxs)("div", {
            className: G.Hover,
            style: j,
            ref: h,
            children: [
              (0, m.jsx)("div", { className: G.Link, children: p }),
              (0, m.jsx)("div", {
                className: G.LinkHelp,
                children: (0, wr.we)("#UserGameNotes_ClickToOpenLink"),
              }),
            ],
          });
        }
        function t(dr, O) {
          O.open(dr);
        }
      },
      66243: (Br, Mr, d) => {
        "use strict";
        d.d(Mr, { Oh: () => U, n9: () => cr, sP: () => wr });
        var m = d(7850),
          v = d(24660),
          B = d(44375),
          q = d.n(B);
        function wr(a) {
          const { children: i, ...t } = a;
          return (0, m.jsx)(v.fu, {
            className: B.GreenButton,
            type: "button",
            ...t,
            children: (0, m.jsx)("span", { children: i }),
          });
        }
        function D(a) {
          const { children: i, ...t } = a;
          return jsx(FocusableButton, {
            className: styles.GreenButton,
            type: "submit",
            ...t,
            children: jsx("span", { children: i }),
          });
        }
        function mr(a) {
          const { children: i, ...t } = a;
          return jsx(FocusableAnchor, {
            className: styles.GreenButton,
            ...t,
            children: jsx("span", { children: i }),
          });
        }
        function cr(a) {
          const { children: i, ...t } = a;
          return (0, m.jsx)(v.fu, {
            className: B.BlueButton,
            type: "button",
            ...t,
            children: (0, m.jsx)("span", { children: i }),
          });
        }
        function G(a) {
          const { children: i, ...t } = a;
          return jsx(FocusableAnchor, {
            className: styles.BlueButton,
            ...t,
            children: jsx("span", { children: i }),
          });
        }
        function U(a) {
          const { children: i, ...t } = a;
          return (0, m.jsx)(v.fu, {
            className: B.GreyButton,
            type: "button",
            ...t,
            children: (0, m.jsx)("span", { children: i }),
          });
        }
        function b(a) {
          const { children: i, ...t } = a;
          return jsx(FocusableAnchor, {
            className: styles.GreyButton,
            ...t,
            children: jsx("span", { children: i }),
          });
        }
      },
      95987: (Br, Mr, d) => {
        "use strict";
        d.d(Mr, { y: () => dr });
        var m = d(35038),
          v = d(21196),
          B = d(57589),
          q = d(36174),
          wr = d(27066),
          D = Object.defineProperty,
          mr = Object.getOwnPropertyDescriptor,
          cr = (O, n, p) =>
            n in O
              ? D(O, n, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: p,
                })
              : (O[n] = p),
          G = (O, n, p, M) => {
            for (
              var y = M > 1 ? void 0 : M ? mr(n, p) : n, h = O.length - 1, j;
              h >= 0;
              h--
            )
              (j = O[h]) && (y = (M ? j(n, p, y) : j(y)) || y);
            return M && y && D(n, p, y), y;
          },
          U = (O, n, p) => cr(O, typeof n != "symbol" ? n + "" : n, p);
        const b = new B.wd("ReactUsageReporting").Debug,
          a = 100,
          i = q.Kp.PerMinute * 1e3;
        class t {
          constructor() {
            U(this, "m_strProduct"),
              U(this, "m_strVersion"),
              U(this, "m_transport", null),
              U(this, "m_mapRoutes", new Map()),
              U(this, "m_mapComponents", new Map()),
              U(this, "m_mapActions", new Map()),
              U(this, "m_reportCount", 0),
              U(this, "m_bInitialized", !1);
          }
          Init(n, p, M) {
            (this.m_bInitialized = !0),
              (this.m_strProduct = n),
              (this.m_strVersion = p),
              (this.m_transport = M),
              this.ScheduleSend();
          }
          ScheduleSend() {
            setTimeout(() => this.CheckSend(), i);
          }
          CheckSend() {
            this.m_reportCount > 0 && this.SendMetrics(), this.ScheduleSend();
          }
          ReportInternal(n, p) {
            p.has(n) || p.set(n, 0),
              p.set(n, p.get(n) + 1),
              this.m_reportCount++,
              this.ShouldSendMetricsImmediately() && this.SendMetrics();
          }
          ReportRouteMatch(n) {
            b("Route match: " + n), this.ReportInternal(n, this.m_mapRoutes);
          }
          ReportTrackedComponent(n) {
            b("Tracked component: " + n),
              this.ReportInternal(n, this.m_mapComponents);
          }
          ReportTrackedAction(n) {
            b("User action: " + n), this.ReportInternal(n, this.m_mapActions);
          }
          ShouldSendMetricsImmediately() {
            return this.m_reportCount >= a;
          }
          SendMetrics() {
            if (!this.m_bInitialized) return;
            const n = m.w.Init(v.bc);
            n.Body().set_product(this.m_strProduct),
              n.Body().set_version(this.m_strVersion),
              this.m_mapRoutes.forEach((p, M) => {
                let y = new v.N4();
                y.set_route(M), y.set_count(p), n.Body().add_routes(y);
              }),
              this.m_mapComponents.forEach((p, M) => {
                let y = new v.Zd();
                y.set_component(M), y.set_count(p), n.Body().add_components(y);
              }),
              this.m_mapActions.forEach((p, M) => {
                let y = new v.Ys();
                y.set_action(M), y.set_count(p), n.Body().add_actions(y);
              }),
              this.m_mapRoutes.clear(),
              this.m_mapComponents.clear(),
              this.m_mapActions.clear(),
              (this.m_reportCount = 0),
              v._5.ReportReactUsage(this.m_transport, n);
          }
          get version() {
            return this.m_strVersion;
          }
          get product() {
            return this.m_strProduct;
          }
        }
        G([wr.o], t.prototype, "CheckSend", 1);
        const dr = new t();
      },
      35184: (Br, Mr, d) => {
        "use strict";
        d.d(Mr, { R: () => q });
        var m = d(7850),
          v = d(90626),
          B = d(72739);
        function q(D) {
          const {
              id: mr,
              role: cr,
              visible: G = !0,
              className: U,
              keepMounted: b = !1,
              expandDirection: a = "height",
              msAnimationDuration: i = 250,
              children: t,
            } = D,
            { style: dr, active: O, refDiv: n } = wr(G, a, i);
          return !G && !O && !b
            ? null
            : (0, m.jsx)("div", {
                id: mr,
                role: cr,
                className: U,
                ref: n,
                style: dr,
                inert: !G,
                children: t,
              });
        }
        function wr(D, mr = "height", cr = 250) {
          const G = v.useRef(null),
            U = v.useRef(!0),
            [b, a] = v.useState("idle"),
            [i, t] = v.useState(D ? {} : { [mr]: "0px", overflow: "hidden" }),
            [dr, O] = v.useState(D);
          return (
            v.useLayoutEffect(() => {
              U.current || a("start"), D && O(D);
            }, [D]),
            v.useLayoutEffect(
              () => (
                (U.current = !1),
                () => {
                  U.current = !0;
                }
              ),
              [],
            ),
            v.useLayoutEffect(() => {
              const p = G.current,
                M = mr == "height" ? "scrollHeight" : "scrollWidth",
                y = () => {
                  B.unstable_batchedUpdates(() => {
                    t(D ? {} : { [mr]: "0px", overflow: "hidden" }),
                      a("idle"),
                      O(D);
                  });
                };
              if (b == "start") {
                const h = p[M];
                h == 0
                  ? y()
                  : (t((j) => ({
                      [mr]: D ? "0px" : `${h}px`,
                      ...j,
                      overflow: "hidden",
                    })),
                    a("active"));
              } else if (b == "active") {
                p.scrollTop;
                const h = p[M];
                return (
                  t({ overflow: "hidden", [mr]: D ? `${h}px` : "0px" }),
                  p.addEventListener("transitionend", y),
                  () => {
                    p.removeEventListener("transitionend", y);
                  }
                );
              }
            }, [b, D]),
            {
              style: { ...i, transition: `${mr} ${cr}ms` },
              active: dr,
              refDiv: G,
            }
          );
        }
      },
      95603: (Br, Mr, d) => {
        "use strict";
        d.d(Mr, { DB: () => mr, PW: () => G, Ss: () => wr, hk: () => D });
        var m = d(7850),
          v = d(90626),
          B = d(72739),
          q = d(82734);
        function wr(U, b) {
          const a = v.useRef(void 0),
            i = v.useCallback(
              (O) => {
                O.currentTarget.files.length > 0 &&
                  (U(O.currentTarget.files), (O.currentTarget.value = ""));
              },
              [U],
            ),
            t = v.useCallback(() => a.current.click(), []);
          return [
            B.createPortal(
              (0, m.jsx)("form", {
                onSubmit: cr,
                style: { display: "none" },
                children: (0, m.jsx)("input", {
                  ...b,
                  type: "file",
                  ref: a,
                  onChange: i,
                }),
              }),
              window.document.body,
            ),
            t,
          ];
        }
        function D(U) {
          const [b, a] = v.useState(!1),
            i = v.useCallback((p) => {
              ((p.dataTransfer.files && p.dataTransfer.files[0]) ||
                (p.dataTransfer.types && p.dataTransfer.types[0] == "Files")) &&
                a(!0);
            }, []),
            t = v.useCallback((p) => {
              q.NO(p) && a(!1);
            }, []),
            dr = v.useCallback(() => a(!1), []),
            O = b ? cr : void 0,
            n = v.useCallback(
              (p) => {
                var M;
                (M = p.dataTransfer.files) != null &&
                  M.length &&
                  (U(p.dataTransfer.files, p),
                  p.preventDefault(),
                  p.stopPropagation()),
                  a(!1);
              },
              [U],
            );
          return [
            {
              onDragEnter: i,
              onDragLeave: t,
              onDragEnd: dr,
              onDragOver: O,
              onDrop: n,
            },
            b,
          ];
        }
        async function mr(U, b = 1e3) {
          return await new Promise((a, i) => {
            const t = new Image();
            (t.src = U),
              (t.onload = () => a("success")),
              (t.onerror = () => a("error")),
              b > 0 && window.setTimeout(() => a("timeout"), b);
          });
        }
        function cr(U) {
          U.preventDefault();
        }
        function G(U) {
          switch (U.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            default:
              const b = U.name.match(/(?<=\.)[^.]+$/);
              return b ? b[0] : void 0;
          }
        }
      },
      33645: (Br) => {
        Br.exports = {
          Bold: "_3cln317VYhwhE1fSeMCG48",
          Italic: "_3TPGDj4kc0QGKvO8FJmGz8",
          Paragraph: "_3lnqGBzYap-Z2T81XBiBUU",
          TemplateMediaTitle: "_DE_6XhnSqABczbJ55rNJ",
          Question: "_2Hj1tfDjpLvBVTHTqAVcYB",
          Answer: "syKgzmlrcUIJHIBfWsn4h",
          Header1: "_2LYsFAwy8wdRJQTNJOUcsT",
          Header2: "_6-VR2WCBCDupCcUN5INQM",
          Header3: "_1sGnlGwCeaGUp63h4Lx-pU",
          Header4: "_3VHY5vmO07MFpoOgTB9eOi",
          Header5: "_1Vk-9-C_y-lBA5ucPl6t8X",
          CenterSpan: "zCnp-VELUMybbfxOD-ze9",
          SmallText: "WBzrd438Bd8Z3J-j_iglW",
          Underline: "GrhFWtBdrSZP611s1UqqT",
          Strike: "_3pK7sh9FYdigMXxcUVI4DY",
          Spoiler: "_3kRr4bh8twnlt_7wcEFZr3",
          Revealed: "_3g1-8c9NBcNDwW4-6x1pM6",
          SpoilerText: "_3r66KOH_Vckmfps3XUOVrY",
          DisabledMouseEvents: "_1O62-3Y03GsnA0709QyJ_O",
          BlockQuote: "_3MQ0Cuf_h-nZ81xIubg8rh",
          QuoteAuthor: "_1MzmaZcQPMRfrTHs3k0fIZ",
          PullQuote: "_2kA0eAmv8ifh0zphoq4ntM",
          Code: "_2ODaX8lO7DKLKke76c2Wya",
          CodeBlock: "_1I3OP84ayrCIMuBrCrkosi",
          List: "_3Y-LRoi5aeZ9-3ujWjXuG3",
          OrderedList: "DojPxwyYpx3hwuPIaJPCq",
          ListItem: "_1iXxYKOlzzXiVr02E7n2Fe",
          HR: "-xPK0REpludHjRG8xQfih",
          Table: "_2CAsiFd9UHbUOqzd0e7ioe",
          NoBorder: "_1rO4D9vLxJRWz9sW4-ahSY",
          TableRow: "_3FJk0y6E6I8nSYfCIqGP8",
          TableCell: "_3rLIt0O8F7iG6B2RmC3cYa",
          EqualCells: "_1CtoyG6UPAlYp7PCGLXx8L",
          ExpandSectionBlock: "_2cmZMzZlRrszDBF97Di0cD",
          ExpandSectionHeader: "uAvfe31kBh5TZrse069d1",
          EmbedArrow: "_3tVf4GSoWxEOZrxL_PQ4iA",
          ExpandSectionBody: "_33CTl_a7XYxFIng-fm4A5K",
          ExpandSection_WithTitle: "_1dfVJUq9KmDOuhyOZ7lcXv",
          LinkButton: "_3TN0uESBGJ-kUDPWWX2YWz",
          Image: "_3K0NuxYUYncdQ-cNK7udMn",
          Image_Inline: "XEMe7ReBSARw5XHcLR6kF",
          PreservedUnsupportedTag: "_3YMzBRWJTOo7eai1uFGV7i",
          Tag: "_3SEDw4GZynd3ZmTQWlyOcS",
          CalendarEventContainer: "S-ElBHomDkV0L3K4XChxt",
          CalendarEventLink: "_106tp5gLWBvoekGEC8HXQ",
        };
      },
      37341: (Br) => {
        Br.exports = {
          Hover: "_1lo3nIamSX1TzzE4TlhFXA",
          Link: "_1ds3uh7ntoekPm635F2Ziv",
          LinkHelp: "_3Vn5X8bzPjWx5p545nkB6k",
        };
      },
      44375: (Br) => {
        Br.exports = {
          GreenButton: "_23fSnYfnMQqkgm3ROkJhrO",
          GreyButton: "_15dbpkIdbzeDJlZYQEhn1d",
          BlueButton: "_14GZWzJgooP0mbfTvEQnjA",
        };
      },
      27491: (Br) => {
        Br.exports = {
          "duration-app-launch": "800ms",
          Page: "_28ykIGBc90adpzjihQeOoC",
          Content: "_3gyO-3quMbybtCQl67Dmf7",
          NotesPagedSettings: "_3Sf_ShCtdfWp5P04k2cIgp",
          NotePage: "t6CDOdcwTIZM8UA8NN41V",
          PinnedView: "_1JfX5TwbiYNVMRiU6Gthga",
          Toolbar: "gdKTXjvFuMeVN2qa6o8EL",
          NoteActions: "_1fu6xumTI1nCY5wc6FG_N2",
          NoteEditorArea: "_1AL7l2CN6z-vuLfp1iCLa",
          EditorInput: "_1Ve4VFO2EEkeNZdel_Asky",
          NewNoteButton: "_3Sjbkvk647UKKVLX6J7gsW",
          CloseWindowButton: "vKXl-xWkUZL5iNvaT5mzW",
          BackgroundAnimation: "K5kB32gMVsnDCBwxYDm4r",
          "ItemFocusAnim-darkerGrey-nocolor": "_39HD17cQ23IvuK35ytuPef",
          "ItemFocusAnim-darkerGrey": "_1UnKhkmcATwZcT0qX1VO-I",
          "ItemFocusAnim-darkGreySettings": "_3pEtHMkdw57n0C8DKxtXPb",
          "ItemFocusAnim-darkGrey": "bif353VzxtsbctKKtWLUm",
          "ItemFocusAnim-grey": "_1lXo0Q4biCUQ5CPs1x9v8z",
          "ItemFocusAnim-translucent-white-10": "_3jeaGvKmUWZNHnBKV71gwe",
          "ItemFocusAnim-translucent-white-20": "_1S31mEHMzu94gIf5W00vQ5",
          "ItemFocusAnimBorder-darkGrey": "_3qGIi9phn_i9vlXbBfE2N4",
          "ItemFocusAnim-green": "PKY6xp7_WNHMI65Uc8yJ_",
          focusAnimation: "_1AiJFdtfIMUo0maxXZuGYY",
          hoverAnimation: "_2FZZ9Hxx9YxFh9K9vrhe9t",
        };
      },
      5310: (Br) => {
        Br.exports = { narrowWidth: "500px" };
      },
    },
  ]);
})();
