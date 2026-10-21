/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [51220],
    {
      92987: (_t, ri, w) => {
        "use strict";
        w.r(ri), w.d(ri, { default: () => la });
        var b = w(7850),
          F = w(99412),
          y = w(90626),
          Y = w(92757),
          ti = w(68312);
        const G = {
          List: () => "/notes/list",
          AppNotes: (s, r) => `/notes/app/${s}/${r ?? ""}`,
          ShortcutNotes: (s, r) => `/notes/shortcut/${s}/${r ?? ""}`,
        };
        function Pt(s, r) {
          return "appid" in s
            ? G.AppNotes(s.appid, r)
            : G.ShortcutNotes(s.shortcut, r);
        }
        var At = w(72604),
          C = w(74432),
          P = w(71742),
          W = w(35038),
          n = w(80613),
          e = w.n(n),
          t = w(75245);
        function d(s) {
          return "unknown ECloudPendingRemoteOperation ( " + s + " )";
        }
        function h(s) {
          return "unknown EDisplayManagerRGBRange ( " + s + " )";
        }
        function q(s) {
          return "unknown ESteamDeckKeyboardLayout ( " + s + " )";
        }
        class m extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              m.prototype.a || t.Sg(m.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    a: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    b: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    c: { n: 3, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    d: { n: 4, br: t.qM.readEnum, bw: t.gp.writeEnum },
                  },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = t.w0(m.M())), m.sm_mbf;
          }
          toObject(r = !1) {
            return m.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(m.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(m.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new m();
            return m.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(m.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return m.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(m.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "SteamMessagesClientIClientForcedEnumDependencies";
          }
        }
        class l extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              l.prototype.ip || t.Sg(l.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: {
                    ip: { n: 1, d: 0, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    netmask: { n: 2, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                  },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = t.w0(l.M())), l.sm_mbf;
          }
          toObject(r = !1) {
            return l.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(l.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(l.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new l();
            return l.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(l.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return l.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(l.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceIP4Address";
          }
        }
        class u extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              u.prototype.addresses || t.Sg(u.M()),
              n.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
                  fields: {
                    addresses: { n: 1, c: l, r: !0, q: !0 },
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
              u.sm_m
            );
          }
          static MBF() {
            return u.sm_mbf || (u.sm_mbf = t.w0(u.M())), u.sm_mbf;
          }
          toObject(r = !1) {
            return u.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(u.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(u.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new u();
            return u.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(u.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return u.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(u.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceIP4Config";
          }
        }
        class M extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              M.prototype.ip || t.Sg(M.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    ip: {
                      n: 1,
                      d: "",
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = t.w0(M.M())), M.sm_mbf;
          }
          toObject(r = !1) {
            return M.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(M.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(M.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new M();
            return M.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(M.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return M.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(M.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceIP6Address";
          }
        }
        class g extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              g.prototype.addresses || t.Sg(g.M()),
              n.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    addresses: { n: 1, c: M, r: !0, q: !0 },
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
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = t.w0(g.M())), g.sm_mbf;
          }
          toObject(r = !1) {
            return g.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(g.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(g.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new g();
            return g.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(g.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return g.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(g.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceIP6Config";
          }
        }
        class z extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              z.prototype.devices || t.Sg(z.M()),
              n.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    devices: { n: 1, c: p, r: !0, q: !0 },
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
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = t.w0(z.M())), z.sm_mbf;
          }
          toObject(r = !1) {
            return z.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(z.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(z.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new z();
            return z.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(z.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(z.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDevicesData";
          }
        }
        class p extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              p.prototype.id || t.Sg(p.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
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
                    ip4: { n: 7, c: u },
                    ip6: { n: 8, c: g },
                    wired: { n: 9, c: K },
                    wireless: { n: 10, c: O },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = t.w0(p.M())), p.sm_mbf;
          }
          toObject(r = !1) {
            return p.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(p.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(p.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new p();
            return p.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(p.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return p.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(p.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDevicesData_Device";
          }
        }
        class K extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.is_cable_present || t.Sg(K.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
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
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = t.w0(K.M())), K.sm_mbf;
          }
          toObject(r = !1) {
            return K.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(K.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new K();
            return K.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(K.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(K.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDevicesData_Device_Wired";
          }
        }
        class O extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              O.prototype.aps || t.Sg(O.M()),
              n.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    aps: { n: 1, c: L, r: !0, q: !0 },
                    esecurity_supported: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = t.w0(O.M())), O.sm_mbf;
          }
          toObject(r = !1) {
            return O.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(O.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(O.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new O();
            return O.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(O.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return O.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(O.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDevicesData_Device_Wireless";
          }
        }
        class L extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              L.prototype.id || t.Sg(L.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
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
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = t.w0(L.M())), L.sm_mbf;
          }
          toObject(r = !1) {
            return L.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(L.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(L.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new L();
            return L.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(L.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return L.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(L.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDevicesData_Device_Wireless_AP";
          }
        }
        class J extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              J.prototype.device_id || t.Sg(J.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    device_id: {
                      n: 1,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    ap_known: { n: 2, c: I },
                    ap_custom: { n: 3, c: V },
                    credentials: { n: 4, c: U },
                    ip4: { n: 5, c: u },
                    ip6: { n: 6, c: g },
                    wireless: { n: 7, c: Z },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = t.w0(J.M())), J.sm_mbf;
          }
          toObject(r = !1) {
            return J.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(J.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(J.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new J();
            return J.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(J.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(J.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceConnect";
          }
        }
        class I extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              I.prototype.ap_id || t.Sg(I.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    ap_id: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = t.w0(I.M())), I.sm_mbf;
          }
          toObject(r = !1) {
            return I.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(I.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(I.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new I();
            return I.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(I.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return I.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(I.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceConnect_KnownAP";
          }
        }
        class V extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.ssid || t.Sg(V.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    ssid: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    esecurity: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = t.w0(V.M())), V.sm_mbf;
          }
          toObject(r = !1) {
            return V.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(V.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(V.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new V();
            return V.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(V.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(V.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceConnect_CustomAP";
          }
        }
        class U extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              U.prototype.username || t.Sg(U.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
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
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = t.w0(U.M())), U.sm_mbf;
          }
          toObject(r = !1) {
            return U.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(U.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(U.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new U();
            return U.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(U.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return U.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(U.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceConnect_Credentials";
          }
        }
        class Z extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Z.prototype.band_filter || t.Sg(Z.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    band_filter: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = t.w0(Z.M())), Z.sm_mbf;
          }
          toObject(r = !1) {
            return Z.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Z.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Z.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Z();
            return Z.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Z.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Z.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceConnect_Wireless";
          }
        }
        class X extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              X.prototype.wireless || t.Sg(X.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = { proto: X, fields: { wireless: { n: 2, c: v } } }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = t.w0(X.M())), X.sm_mbf;
          }
          toObject(r = !1) {
            return X.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(X.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(X.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new X();
            return X.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(X.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return X.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(X.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceSetOptions";
          }
        }
        class v extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              v.prototype.ap_id || t.Sg(v.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
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
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = t.w0(v.M())), v.sm_mbf;
          }
          toObject(r = !1) {
            return v.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(v.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(v.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new v();
            return v.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(v.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return v.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(v.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgNetworkDeviceSetOptions_Wireless";
          }
        }
        class Q extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Q.prototype.drives || t.Sg(Q.M()),
              n.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    drives: { n: 1, c: $, r: !0, q: !0 },
                    block_devices: { n: 2, c: H, r: !0, q: !0 },
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
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = t.w0(Q.M())), Q.sm_mbf;
          }
          toObject(r = !1) {
            return Q.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Q.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Q.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Q();
            return Q.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Q.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Q.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgStorageDevicesData";
          }
        }
        class $ extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.id || t.Sg($.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
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
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = t.w0($.M())), $.sm_mbf;
          }
          toObject(r = !1) {
            return $.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT($.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new $();
            return $.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj($.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0($.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgStorageDevicesData_Drive";
          }
        }
        class H extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              H.prototype.id || t.Sg(H.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
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
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = t.w0(H.M())), H.sm_mbf;
          }
          toObject(r = !1) {
            return H.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(H.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(H.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new H();
            return H.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(H.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return H.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(H.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgStorageDevicesData_BlockDevice";
          }
        }
        class k extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.operation || t.Sg(k.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
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
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = t.w0(k.M())), k.sm_mbf;
          }
          toObject(r = !1) {
            return k.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(k.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(k.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new k();
            return k.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(k.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return k.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(k.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_PendingRemoteOperation";
          }
        }
        class N extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              N.prototype.operations || t.Sg(N.M()),
              n.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: { operations: { n: 1, c: k, r: !0, q: !0 } },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = t.w0(N.M())), N.sm_mbf;
          }
          toObject(r = !1) {
            return N.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(N.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(N.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new N();
            return N.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(N.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return N.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(N.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgCloudPendingRemoteOperations";
          }
        }
        class S extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              S.prototype.adapters || t.Sg(S.M()),
              n.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    adapters: { n: 1, c: R, r: !0, q: !0 },
                    devices: { n: 2, c: _, r: !0, q: !0 },
                    manager: { n: 3, c: A },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = t.w0(S.M())), S.sm_mbf;
          }
          toObject(r = !1) {
            return S.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(S.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(S.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new S();
            return S.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(S.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(S.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgBluetoothDevicesData";
          }
        }
        class R extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              R.prototype.id || t.Sg(R.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
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
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = t.w0(R.M())), R.sm_mbf;
          }
          toObject(r = !1) {
            return R.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(R.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(R.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new R();
            return R.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(R.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return R.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(R.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgBluetoothDevicesData_Adapter";
          }
        }
        class _ extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _.prototype.id || t.Sg(_.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
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
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = t.w0(_.M())), _.sm_mbf;
          }
          toObject(r = !1) {
            return _.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(_.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(_.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new _();
            return _.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(_.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return _.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(_.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgBluetoothDevicesData_Device";
          }
        }
        class A extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              A.prototype.is_bluetooth_enabled || t.Sg(A.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    is_bluetooth_enabled: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = t.w0(A.M())), A.sm_mbf;
          }
          toObject(r = !1) {
            return A.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(A.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(A.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new A();
            return A.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(A.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return A.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(A.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgBluetoothDevicesData_Manager";
          }
        }
        class fr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fr.prototype.name || t.Sg(fr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: {
                    name: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    value: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              fr.sm_m
            );
          }
          static MBF() {
            return fr.sm_mbf || (fr.sm_mbf = t.w0(fr.M())), fr.sm_mbf;
          }
          toObject(r = !1) {
            return fr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(fr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(fr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new fr();
            return fr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(fr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(fr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfDiagnosticEntry";
          }
        }
        class lr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lr.prototype.name || t.Sg(lr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lr.sm_m ||
                (lr.sm_m = {
                  proto: lr,
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
              lr.sm_m
            );
          }
          static MBF() {
            return lr.sm_mbf || (lr.sm_mbf = t.w0(lr.M())), lr.sm_mbf;
          }
          toObject(r = !1) {
            return lr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(lr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(lr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new lr();
            return lr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(lr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(lr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfNetworkInterface";
          }
        }
        class Mt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mt.prototype.entries || t.Sg(Mt.M()),
              n.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mt.sm_m ||
                (Mt.sm_m = {
                  proto: Mt,
                  fields: {
                    entries: { n: 1, c: fr, r: !0, q: !0 },
                    interfaces: { n: 2, c: lr, r: !0, q: !0 },
                    battery_temp_c: {
                      n: 3,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                  },
                }),
              Mt.sm_m
            );
          }
          static MBF() {
            return Mt.sm_mbf || (Mt.sm_mbf = t.w0(Mt.M())), Mt.sm_mbf;
          }
          toObject(r = !1) {
            return Mt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Mt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Mt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Mt();
            return Mt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Mt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Mt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfDiagnosticInfo";
          }
        }
        class ur extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ur.prototype.cpu_governor_manual_min_mhz || t.Sg(ur.M()),
              n.Message.initialize(this, r, 0, -1, [13, 21, 26, 27], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ur.sm_m ||
                (ur.sm_m = {
                  proto: ur,
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
              ur.sm_m
            );
          }
          static MBF() {
            return ur.sm_mbf || (ur.sm_mbf = t.w0(ur.M())), ur.sm_mbf;
          }
          toObject(r = !1) {
            return ur.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ur.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ur.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new ur();
            return ur.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ur.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ur.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfLimits";
          }
        }
        class rr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rr.prototype.diagnostic_update_rate || t.Sg(rr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rr.sm_m ||
                (rr.sm_m = {
                  proto: rr,
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
              rr.sm_m
            );
          }
          static MBF() {
            return rr.sm_mbf || (rr.sm_mbf = t.w0(rr.M())), rr.sm_mbf;
          }
          toObject(r = !1) {
            return rr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(rr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(rr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new rr();
            return rr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(rr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(rr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfSettingsGlobal";
          }
        }
        class tr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tr.prototype.fps_limit || t.Sg(tr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
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
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = t.w0(tr.M())), tr.sm_mbf;
          }
          toObject(r = !1) {
            return tr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(tr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(tr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new tr();
            return tr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(tr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(tr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfSettingsPerApp";
          }
        }
        class ir extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ir.prototype.global || t.Sg(ir.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: { global: { n: 1, c: rr }, per_app: { n: 2, c: tr } },
                }),
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = t.w0(ir.M())), ir.sm_mbf;
          }
          toObject(r = !1) {
            return ir.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ir.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ir.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new ir();
            return ir.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ir.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ir.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfSettings";
          }
        }
        class qt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qt.prototype.diagnostic_update_rate || t.Sg(qt.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qt.sm_m ||
                (qt.sm_m = {
                  proto: qt,
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
              qt.sm_m
            );
          }
          static MBF() {
            return qt.sm_mbf || (qt.sm_mbf = t.w0(qt.M())), qt.sm_mbf;
          }
          toObject(r = !1) {
            return qt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(qt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(qt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new qt();
            return qt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(qt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return qt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(qt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              qt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfSettingsV1";
          }
        }
        class gt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gt.prototype.limits || t.Sg(gt.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: {
                    limits: { n: 1, c: ur },
                    settings: { n: 2, c: ir },
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
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = t.w0(gt.M())), gt.sm_mbf;
          }
          toObject(r = !1) {
            return gt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(gt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(gt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new gt();
            return gt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(gt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(gt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfState";
          }
        }
        class Ft extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ft.prototype.gameid || t.Sg(Ft.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ft.sm_m ||
                (Ft.sm_m = {
                  proto: Ft,
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
                    settings_delta: { n: 3, c: ir },
                    skip_storage_update: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Ft.sm_m
            );
          }
          static MBF() {
            return Ft.sm_mbf || (Ft.sm_mbf = t.w0(Ft.M())), Ft.sm_mbf;
          }
          toObject(r = !1) {
            return Ft.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ft.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ft.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Ft();
            return Ft.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ft.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Ft.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ft.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Ft.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfUpdateSettings";
          }
        }
        class zr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zr.prototype.profile_game_id || t.Sg(zr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zr.sm_m ||
                (zr.sm_m = {
                  proto: zr,
                  fields: {
                    profile_game_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    settings: { n: 2, c: tr },
                  },
                }),
              zr.sm_m
            );
          }
          static MBF() {
            return zr.sm_mbf || (zr.sm_mbf = t.w0(zr.M())), zr.sm_mbf;
          }
          toObject(r = !1) {
            return zr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(zr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(zr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new zr();
            return zr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(zr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(zr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfLegacySettingEntry";
          }
        }
        class pt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pt.prototype.global || t.Sg(pt.M()),
              n.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
                  fields: {
                    global: { n: 1, c: rr },
                    per_app_settings: { n: 2, c: zr, r: !0, q: !0 },
                  },
                }),
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = t.w0(pt.M())), pt.sm_mbf;
          }
          toObject(r = !1) {
            return pt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(pt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(pt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new pt();
            return pt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(pt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(pt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemPerfLegacySettings";
          }
        }
        class dr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dr.prototype.state || t.Sg(dr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
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
              dr.sm_m
            );
          }
          static MBF() {
            return dr.sm_mbf || (dr.sm_mbf = t.w0(dr.M())), dr.sm_mbf;
          }
          toObject(r = !1) {
            return dr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(dr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(dr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new dr();
            return dr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(dr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(dr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDockUpdateState";
          }
        }
        class It extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              It.prototype.update_state || t.Sg(It.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              It.sm_m ||
                (It.sm_m = {
                  proto: It,
                  fields: { update_state: { n: 1, c: dr } },
                }),
              It.sm_m
            );
          }
          static MBF() {
            return It.sm_mbf || (It.sm_mbf = t.w0(It.M())), It.sm_mbf;
          }
          toObject(r = !1) {
            return It.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(It.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(It.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new It();
            return It.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(It.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return It.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(It.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDockState";
          }
        }
        class Et extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Et.prototype.check_only || t.Sg(Et.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: {
                    check_only: { n: 1, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = t.w0(Et.M())), Et.sm_mbf;
          }
          toObject(r = !1) {
            return Et.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Et.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Et.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Et();
            return Et.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Et.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Et.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDockUpdateFirmware";
          }
        }
        class yr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yr.prototype.entries || t.Sg(yr.M()),
              n.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yr.sm_m ||
                (yr.sm_m = {
                  proto: yr,
                  fields: {
                    entries: { n: 1, c: jr, r: !0, q: !0 },
                    is_muted: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              yr.sm_m
            );
          }
          static MBF() {
            return yr.sm_mbf || (yr.sm_mbf = t.w0(yr.M())), yr.sm_mbf;
          }
          toObject(r = !1) {
            return yr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(yr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(yr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new yr();
            return yr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(yr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(yr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioVolume";
          }
        }
        class jr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              jr.prototype.echannel || t.Sg(jr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jr.sm_m ||
                (jr.sm_m = {
                  proto: jr,
                  fields: {
                    echannel: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    volume: { n: 2, br: t.qM.readFloat, bw: t.gp.writeFloat },
                  },
                }),
              jr.sm_m
            );
          }
          static MBF() {
            return jr.sm_mbf || (jr.sm_mbf = t.w0(jr.M())), jr.sm_mbf;
          }
          toObject(r = !1) {
            return jr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(jr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(jr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new jr();
            return jr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(jr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(jr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioVolume_ChannelEntry";
          }
        }
        class D extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.id || t.Sg(D.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    id: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    rtime_last_update: {
                      n: 2,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = t.w0(D.M())), D.sm_mbf;
          }
          toObject(r = !1) {
            return D.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(D.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new D();
            return D.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(D.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(D.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerObject";
          }
        }
        class hr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              hr.prototype.base || t.Sg(hr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hr.sm_m ||
                (hr.sm_m = {
                  proto: hr,
                  fields: {
                    base: { n: 1, c: D },
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
              hr.sm_m
            );
          }
          static MBF() {
            return hr.sm_mbf || (hr.sm_mbf = t.w0(hr.M())), hr.sm_mbf;
          }
          toObject(r = !1) {
            return hr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(hr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(hr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new hr();
            return hr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(hr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(hr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerDevice";
          }
        }
        class Wr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wr.prototype.base || t.Sg(Wr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wr.sm_m ||
                (Wr.sm_m = {
                  proto: Wr,
                  fields: {
                    base: { n: 1, c: D },
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
                    volume: { n: 7, c: yr },
                  },
                }),
              Wr.sm_m
            );
          }
          static MBF() {
            return Wr.sm_mbf || (Wr.sm_mbf = t.w0(Wr.M())), Wr.sm_mbf;
          }
          toObject(r = !1) {
            return Wr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Wr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Wr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Wr();
            return Wr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Wr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Wr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerNode";
          }
        }
        class Or extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Or.prototype.base || t.Sg(Or.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = {
                  proto: Or,
                  fields: {
                    base: { n: 1, c: D },
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
              Or.sm_m
            );
          }
          static MBF() {
            return Or.sm_mbf || (Or.sm_mbf = t.w0(Or.M())), Or.sm_mbf;
          }
          toObject(r = !1) {
            return Or.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Or.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Or.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Or();
            return Or.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Or.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Or.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerPort";
          }
        }
        class or extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              or.prototype.base || t.Sg(or.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              or.sm_m ||
                (or.sm_m = {
                  proto: or,
                  fields: {
                    base: { n: 1, c: D },
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
              or.sm_m
            );
          }
          static MBF() {
            return or.sm_mbf || (or.sm_mbf = t.w0(or.M())), or.sm_mbf;
          }
          toObject(r = !1) {
            return or.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(or.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(or.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new or();
            return or.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(or.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(or.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerLink";
          }
        }
        class xr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xr.prototype.devices || t.Sg(xr.M()),
              n.Message.initialize(this, r, 0, -1, [1, 2, 3, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xr.sm_m ||
                (xr.sm_m = {
                  proto: xr,
                  fields: {
                    devices: { n: 1, c: hr, r: !0, q: !0 },
                    nodes: { n: 2, c: Wr, r: !0, q: !0 },
                    ports: { n: 3, c: Or, r: !0, q: !0 },
                    links: { n: 4, c: or, r: !0, q: !0 },
                  },
                }),
              xr.sm_m
            );
          }
          static MBF() {
            return xr.sm_mbf || (xr.sm_mbf = t.w0(xr.M())), xr.sm_mbf;
          }
          toObject(r = !1) {
            return xr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(xr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(xr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new xr();
            return xr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(xr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(xr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerStateHW";
          }
        }
        class vt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              vt.prototype.rtime_filter || t.Sg(vt.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vt.sm_m ||
                (vt.sm_m = {
                  proto: vt,
                  fields: {
                    rtime_filter: {
                      n: 1,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                    counter: { n: 2, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    hw: { n: 3, c: xr },
                  },
                }),
              vt.sm_m
            );
          }
          static MBF() {
            return vt.sm_mbf || (vt.sm_mbf = t.w0(vt.M())), vt.sm_mbf;
          }
          toObject(r = !1) {
            return vt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(vt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(vt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new vt();
            return vt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(vt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return vt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(vt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              vt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerState";
          }
        }
        class $t extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $t.prototype.counter || t.Sg($t.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $t.sm_m ||
                ($t.sm_m = {
                  proto: $t,
                  fields: {
                    counter: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                  },
                }),
              $t.sm_m
            );
          }
          static MBF() {
            return $t.sm_mbf || ($t.sm_mbf = t.w0($t.M())), $t.sm_mbf;
          }
          toObject(r = !1) {
            return $t.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT($t.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq($t.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new $t();
            return $t.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj($t.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return $t.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0($t.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              $t.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemAudioManagerUpdateSomething";
          }
        }
        class Tr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Tr.prototype.id || t.Sg(Tr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tr.sm_m ||
                (Tr.sm_m = {
                  proto: Tr,
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
              Tr.sm_m
            );
          }
          static MBF() {
            return Tr.sm_mbf || (Tr.sm_mbf = t.w0(Tr.M())), Tr.sm_mbf;
          }
          toObject(r = !1) {
            return Tr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Tr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Tr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Tr();
            return Tr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Tr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Tr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDisplayMode";
          }
        }
        class Mr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mr.prototype.id || t.Sg(Mr.M()),
              n.Message.initialize(this, r, 0, -1, [11, 18], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mr.sm_m ||
                (Mr.sm_m = {
                  proto: Mr,
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
                    modes: { n: 11, c: Tr, r: !0, q: !0 },
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
              Mr.sm_m
            );
          }
          static MBF() {
            return Mr.sm_mbf || (Mr.sm_mbf = t.w0(Mr.M())), Mr.sm_mbf;
          }
          toObject(r = !1) {
            return Mr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Mr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Mr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Mr();
            return Mr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Mr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Mr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDisplay";
          }
        }
        class er extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              er.prototype.width || t.Sg(er.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              er.sm_m ||
                (er.sm_m = {
                  proto: er,
                  fields: {
                    width: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    height: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              er.sm_m
            );
          }
          static MBF() {
            return er.sm_mbf || (er.sm_mbf = t.w0(er.M())), er.sm_mbf;
          }
          toObject(r = !1) {
            return er.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(er.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(er.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new er();
            return er.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(er.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(er.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDisplayManagerGameResolution";
          }
        }
        class Kt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Kt.prototype.displays || t.Sg(Kt.M()),
              n.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kt.sm_m ||
                (Kt.sm_m = {
                  proto: Kt,
                  fields: {
                    displays: { n: 1, c: Mr, r: !0, q: !0 },
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
                    game_resolution_override_native: { n: 4, c: er },
                    game_resolution_override_default: { n: 5, c: er },
                  },
                }),
              Kt.sm_m
            );
          }
          static MBF() {
            return Kt.sm_mbf || (Kt.sm_mbf = t.w0(Kt.M())), Kt.sm_mbf;
          }
          toObject(r = !1) {
            return Kt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Kt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Kt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Kt();
            return Kt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Kt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Kt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Kt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Kt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDisplayManagerState";
          }
        }
        class Xt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xt.prototype.display_id || t.Sg(Xt.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xt.sm_m ||
                (Xt.sm_m = {
                  proto: Xt,
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
              Xt.sm_m
            );
          }
          static MBF() {
            return Xt.sm_mbf || (Xt.sm_mbf = t.w0(Xt.M())), Xt.sm_mbf;
          }
          toObject(r = !1) {
            return Xt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Xt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Xt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Xt();
            return Xt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Xt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Xt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Xt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Xt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemDisplayManagerSetMode";
          }
        }
        class Yt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Yt.prototype.idle_backlight_dim_battery_seconds || t.Sg(Yt.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yt.sm_m ||
                (Yt.sm_m = {
                  proto: Yt,
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
              Yt.sm_m
            );
          }
          static MBF() {
            return Yt.sm_mbf || (Yt.sm_mbf = t.w0(Yt.M())), Yt.sm_mbf;
          }
          toObject(r = !1) {
            return Yt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Yt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Yt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Yt();
            return Yt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Yt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Yt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Yt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Yt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemManagerSettings";
          }
        }
        class Jt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Jt.prototype.branch || t.Sg(Jt.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jt.sm_m ||
                (Jt.sm_m = {
                  proto: Jt,
                  fields: {
                    branch: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    custom_branch: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Jt.sm_m
            );
          }
          static MBF() {
            return Jt.sm_mbf || (Jt.sm_mbf = t.w0(Jt.M())), Jt.sm_mbf;
          }
          toObject(r = !1) {
            return Jt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Jt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Jt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Jt();
            return Jt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Jt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Jt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Jt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Jt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSelectOSBranchParams";
          }
        }
        class qr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qr.prototype.total_progress || t.Sg(qr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qr.sm_m ||
                (qr.sm_m = {
                  proto: qr,
                  fields: {
                    total_progress: {
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
                    stage_bytes_downloaded: {
                      n: 4,
                      br: t.qM.readInt64String,
                      bw: t.gp.writeInt64String,
                    },
                  },
                }),
              qr.sm_m
            );
          }
          static MBF() {
            return qr.sm_mbf || (qr.sm_mbf = t.w0(qr.M())), qr.sm_mbf;
          }
          toObject(r = !1) {
            return qr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(qr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(qr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new qr();
            return qr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(qr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(qr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemUpdateProgress";
          }
        }
        class gr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gr.prototype.type || t.Sg(gr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gr.sm_m ||
                (gr.sm_m = {
                  proto: gr,
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
              gr.sm_m
            );
          }
          static MBF() {
            return gr.sm_mbf || (gr.sm_mbf = t.w0(gr.M())), gr.sm_mbf;
          }
          toObject(r = !1) {
            return gr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(gr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(gr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new gr();
            return gr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(gr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(gr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemUpdateCheckResult";
          }
        }
        class Zt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zt.prototype.apply_types || t.Sg(Zt.M()),
              n.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zt.sm_m ||
                (Zt.sm_m = {
                  proto: Zt,
                  fields: {
                    apply_types: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: t.qM.readEnum,
                      pbr: t.qM.readPackedEnum,
                      bw: t.gp.writeRepeatedEnum,
                    },
                    recheck_types: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readEnum,
                      pbr: t.qM.readPackedEnum,
                      bw: t.gp.writeRepeatedEnum,
                    },
                  },
                }),
              Zt.sm_m
            );
          }
          static MBF() {
            return Zt.sm_mbf || (Zt.sm_mbf = t.w0(Zt.M())), Zt.sm_mbf;
          }
          toObject(r = !1) {
            return Zt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Zt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Zt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Zt();
            return Zt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Zt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Zt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Zt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Zt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemUpdateApplyParams";
          }
        }
        class Fr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fr.prototype.type || t.Sg(Fr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fr.sm_m ||
                (Fr.sm_m = {
                  proto: Fr,
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
              Fr.sm_m
            );
          }
          static MBF() {
            return Fr.sm_mbf || (Fr.sm_mbf = t.w0(Fr.M())), Fr.sm_mbf;
          }
          toObject(r = !1) {
            return Fr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Fr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Fr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Fr();
            return Fr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Fr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Fr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemUpdateApplyResult";
          }
        }
        class Qt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qt.prototype.state || t.Sg(Qt.M()),
              n.Message.initialize(this, r, 0, -1, [3, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qt.sm_m ||
                (Qt.sm_m = {
                  proto: Qt,
                  fields: {
                    state: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    progress: { n: 2, c: qr },
                    update_check_results: { n: 3, c: gr, r: !0, q: !0 },
                    update_apply_results: { n: 4, c: Fr, r: !0, q: !0 },
                    supports_os_updates: {
                      n: 5,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Qt.sm_m
            );
          }
          static MBF() {
            return Qt.sm_mbf || (Qt.sm_mbf = t.w0(Qt.M())), Qt.sm_mbf;
          }
          toObject(r = !1) {
            return Qt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Qt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Qt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Qt();
            return Qt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Qt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Qt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Qt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Qt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgSystemUpdateState";
          }
        }
        class Vt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vt.prototype.appid || t.Sg(Vt.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vt.sm_m ||
                (Vt.sm_m = {
                  proto: Vt,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              Vt.sm_m
            );
          }
          static MBF() {
            return Vt.sm_mbf || (Vt.sm_mbf = t.w0(Vt.M())), Vt.sm_mbf;
          }
          toObject(r = !1) {
            return Vt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Vt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Vt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Vt();
            return Vt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Vt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Vt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Vt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Vt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgAchievementChange";
          }
        }
        class Lt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Lt.prototype.cells || t.Sg(Lt.M()),
              n.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lt.sm_m ||
                (Lt.sm_m = {
                  proto: Lt,
                  fields: { cells: { n: 1, c: pr, r: !0, q: !0 } },
                }),
              Lt.sm_m
            );
          }
          static MBF() {
            return Lt.sm_mbf || (Lt.sm_mbf = t.w0(Lt.M())), Lt.sm_mbf;
          }
          toObject(r = !1) {
            return Lt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Lt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Lt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Lt();
            return Lt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Lt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Lt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Lt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Lt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgCellList";
          }
        }
        class pr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pr.prototype.cell_id || t.Sg(pr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pr.sm_m ||
                (pr.sm_m = {
                  proto: pr,
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
              pr.sm_m
            );
          }
          static MBF() {
            return pr.sm_mbf || (pr.sm_mbf = t.w0(pr.M())), pr.sm_mbf;
          }
          toObject(r = !1) {
            return pr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(pr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(pr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new pr();
            return pr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(pr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(pr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgCellList_Cell";
          }
        }
        class Ir extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ir.prototype.appid || t.Sg(Ir.M()),
              n.Message.initialize(this, r, 0, -1, [10], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ir.sm_m ||
                (Ir.sm_m = {
                  proto: Ir,
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
              Ir.sm_m
            );
          }
          static MBF() {
            return Ir.sm_mbf || (Ir.sm_mbf = t.w0(Ir.M())), Ir.sm_mbf;
          }
          toObject(r = !1) {
            return Ir.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ir.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ir.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Ir();
            return Ir.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ir.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ir.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgShortcutInfo";
          }
        }
        class Nt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Nt.prototype.shorcuts || t.Sg(Nt.M()),
              n.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nt.sm_m ||
                (Nt.sm_m = {
                  proto: Nt,
                  fields: { shorcuts: { n: 1, c: Ir, r: !0, q: !0 } },
                }),
              Nt.sm_m
            );
          }
          static MBF() {
            return Nt.sm_mbf || (Nt.sm_mbf = t.w0(Nt.M())), Nt.sm_mbf;
          }
          toObject(r = !1) {
            return Nt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Nt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Nt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Nt();
            return Nt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Nt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Nt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Nt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Nt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgShortcutInfos";
          }
        }
        class Rt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Rt.prototype.appids || t.Sg(Rt.M()),
              n.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rt.sm_m ||
                (Rt.sm_m = {
                  proto: Rt,
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
              Rt.sm_m
            );
          }
          static MBF() {
            return Rt.sm_mbf || (Rt.sm_mbf = t.w0(Rt.M())), Rt.sm_mbf;
          }
          toObject(r = !1) {
            return Rt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Rt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Rt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Rt();
            return Rt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Rt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Rt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Rt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Rt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgShortcutAppIds";
          }
        }
        class Gt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Gt.prototype.selected_device_name || t.Sg(Gt.M()),
              n.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gt.sm_m ||
                (Gt.sm_m = {
                  proto: Gt,
                  fields: {
                    selected_device_name: {
                      n: 1,
                      q: !0,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    monitors: { n: 2, c: Er, r: !0, q: !0 },
                  },
                }),
              Gt.sm_m
            );
          }
          static MBF() {
            return Gt.sm_mbf || (Gt.sm_mbf = t.w0(Gt.M())), Gt.sm_mbf;
          }
          toObject(r = !1) {
            return Gt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Gt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Gt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Gt();
            return Gt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Gt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Gt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Gt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Gt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgMonitorInfo";
          }
        }
        class Er extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Er.prototype.monitor_device_name || t.Sg(Er.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Er.sm_m ||
                (Er.sm_m = {
                  proto: Er,
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
              Er.sm_m
            );
          }
          static MBF() {
            return Er.sm_mbf || (Er.sm_mbf = t.w0(Er.M())), Er.sm_mbf;
          }
          toObject(r = !1) {
            return Er.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Er.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Er.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Er();
            return Er.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Er.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Er.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgMonitorInfo_MonitorInfo";
          }
        }
        class Ut extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ut.prototype.report_id || t.Sg(Ut.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ut.sm_m ||
                (Ut.sm_m = {
                  proto: Ut,
                  fields: {
                    report_id: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Ut.sm_m
            );
          }
          static MBF() {
            return Ut.sm_mbf || (Ut.sm_mbf = t.w0(Ut.M())), Ut.sm_mbf;
          }
          toObject(r = !1) {
            return Ut.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ut.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ut.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Ut();
            return Ut.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ut.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Ut.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ut.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Ut.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgGenerateSystemReportReply";
          }
        }
        class Ht extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ht.prototype.port || t.Sg(Ht.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ht.sm_m ||
                (Ht.sm_m = {
                  proto: Ht,
                  fields: {
                    port: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    auth_key: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Ht.sm_m
            );
          }
          static MBF() {
            return Ht.sm_mbf || (Ht.sm_mbf = t.w0(Ht.M())), Ht.sm_mbf;
          }
          toObject(r = !1) {
            return Ht.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ht.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ht.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Ht();
            return Ht.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ht.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Ht.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ht.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Ht.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgWebUITransportInfo";
          }
        }
        class kt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              kt.prototype.connect_count || t.Sg(kt.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kt.sm_m ||
                (kt.sm_m = {
                  proto: kt,
                  fields: {
                    connect_count: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              kt.sm_m
            );
          }
          static MBF() {
            return kt.sm_mbf || (kt.sm_mbf = t.w0(kt.M())), kt.sm_mbf;
          }
          toObject(r = !1) {
            return kt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(kt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(kt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new kt();
            return kt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(kt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return kt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(kt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              kt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgWebUITransportFailure";
          }
        }
        class vr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              vr.prototype.key_sha || t.Sg(vr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vr.sm_m ||
                (vr.sm_m = {
                  proto: vr,
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
              vr.sm_m
            );
          }
          static MBF() {
            return vr.sm_mbf || (vr.sm_mbf = t.w0(vr.M())), vr.sm_mbf;
          }
          toObject(r = !1) {
            return vr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(vr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(vr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new vr();
            return vr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(vr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(vr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientShaderHitCacheEntry";
          }
        }
        class St extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              St.prototype.entries || t.Sg(St.M()),
              n.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
                  fields: { entries: { n: 1, c: vr, r: !0, q: !0 } },
                }),
              St.sm_m
            );
          }
          static MBF() {
            return St.sm_mbf || (St.sm_mbf = t.w0(St.M())), St.sm_mbf;
          }
          toObject(r = !1) {
            return St.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(St.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(St.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new St();
            return St.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(St.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return St.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(St.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgClientShaderHitCache";
          }
        }
        class ar extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ar.prototype.appid || t.Sg(ar.M()),
              n.Message.initialize(this, r, 0, -1, [9], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
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
              ar.sm_m
            );
          }
          static MBF() {
            return ar.sm_mbf || (ar.sm_mbf = t.w0(ar.M())), ar.sm_mbf;
          }
          toObject(r = !1) {
            return ar.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ar.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ar.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new ar();
            return ar.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ar.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ar.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_UserFile";
          }
        }
        class nr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nr.prototype.appid || t.Sg(nr.M()),
              n.Message.initialize(this, r, 0, -1, [6, 7, 8], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
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
              nr.sm_m
            );
          }
          static MBF() {
            return nr.sm_mbf || (nr.sm_mbf = t.w0(nr.M())), nr.sm_mbf;
          }
          toObject(r = !1) {
            return nr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(nr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(nr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new nr();
            return nr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(nr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(nr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginHTTPUpload_Request";
          }
        }
        class $r extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $r.prototype.ugcid || t.Sg($r.M()),
              n.Message.initialize(this, r, 0, -1, [6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $r.sm_m ||
                ($r.sm_m = {
                  proto: $r,
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
                    request_headers: { n: 6, c: Kr, r: !0, q: !0 },
                  },
                }),
              $r.sm_m
            );
          }
          static MBF() {
            return $r.sm_mbf || ($r.sm_mbf = t.w0($r.M())), $r.sm_mbf;
          }
          toObject(r = !1) {
            return $r.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT($r.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq($r.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new $r();
            return $r.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj($r.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0($r.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginHTTPUpload_Response";
          }
        }
        class Kr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Kr.prototype.name || t.Sg(Kr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kr.sm_m ||
                (Kr.sm_m = {
                  proto: Kr,
                  fields: {
                    name: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    value: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Kr.sm_m
            );
          }
          static MBF() {
            return Kr.sm_mbf || (Kr.sm_mbf = t.w0(Kr.M())), Kr.sm_mbf;
          }
          toObject(r = !1) {
            return Kr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Kr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Kr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Kr();
            return Kr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Kr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Kr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginHTTPUpload_Response_HTTPHeaders";
          }
        }
        class sr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              sr.prototype.transfer_succeeded || t.Sg(sr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              sr.sm_m ||
                (sr.sm_m = {
                  proto: sr,
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
              sr.sm_m
            );
          }
          static MBF() {
            return sr.sm_mbf || (sr.sm_mbf = t.w0(sr.M())), sr.sm_mbf;
          }
          toObject(r = !1) {
            return sr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(sr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(sr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new sr();
            return sr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(sr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(sr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CommitHTTPUpload_Request";
          }
        }
        class Xr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xr.prototype.file_committed || t.Sg(Xr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xr.sm_m ||
                (Xr.sm_m = {
                  proto: Xr,
                  fields: {
                    file_committed: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Xr.sm_m
            );
          }
          static MBF() {
            return Xr.sm_mbf || (Xr.sm_mbf = t.w0(Xr.M())), Xr.sm_mbf;
          }
          toObject(r = !1) {
            return Xr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Xr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Xr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Xr();
            return Xr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Xr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Xr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CommitHTTPUpload_Response";
          }
        }
        class Yr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Yr.prototype.appid || t.Sg(Yr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yr.sm_m ||
                (Yr.sm_m = {
                  proto: Yr,
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
              Yr.sm_m
            );
          }
          static MBF() {
            return Yr.sm_mbf || (Yr.sm_mbf = t.w0(Yr.M())), Yr.sm_mbf;
          }
          toObject(r = !1) {
            return Yr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Yr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Yr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Yr();
            return Yr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Yr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Yr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginUGCUpload_Request";
          }
        }
        class Jr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Jr.prototype.storage_system || t.Sg(Jr.M()),
              n.Message.initialize(this, r, 0, -1, [7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jr.sm_m ||
                (Jr.sm_m = {
                  proto: Jr,
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
                    request_headers: { n: 7, c: Zr, r: !0, q: !0 },
                  },
                }),
              Jr.sm_m
            );
          }
          static MBF() {
            return Jr.sm_mbf || (Jr.sm_mbf = t.w0(Jr.M())), Jr.sm_mbf;
          }
          toObject(r = !1) {
            return Jr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Jr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Jr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Jr();
            return Jr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Jr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Jr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginUGCUpload_Response";
          }
        }
        class Zr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zr.prototype.name || t.Sg(Zr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zr.sm_m ||
                (Zr.sm_m = {
                  proto: Zr,
                  fields: {
                    name: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    value: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Zr.sm_m
            );
          }
          static MBF() {
            return Zr.sm_mbf || (Zr.sm_mbf = t.w0(Zr.M())), Zr.sm_mbf;
          }
          toObject(r = !1) {
            return Zr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Zr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Zr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Zr();
            return Zr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Zr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Zr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginUGCUpload_Response_HTTPHeaders";
          }
        }
        class Qr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qr.prototype.transfer_succeeded || t.Sg(Qr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qr.sm_m ||
                (Qr.sm_m = {
                  proto: Qr,
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
              Qr.sm_m
            );
          }
          static MBF() {
            return Qr.sm_mbf || (Qr.sm_mbf = t.w0(Qr.M())), Qr.sm_mbf;
          }
          toObject(r = !1) {
            return Qr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Qr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Qr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Qr();
            return Qr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Qr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Qr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CommitUGCUpload_Request";
          }
        }
        class Vr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vr.prototype.file_committed || t.Sg(Vr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vr.sm_m ||
                (Vr.sm_m = {
                  proto: Vr,
                  fields: {
                    file_committed: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Vr.sm_m
            );
          }
          static MBF() {
            return Vr.sm_mbf || (Vr.sm_mbf = t.w0(Vr.M())), Vr.sm_mbf;
          }
          toObject(r = !1) {
            return Vr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Vr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Vr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Vr();
            return Vr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Vr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Vr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CommitUGCUpload_Response";
          }
        }
        class mr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mr.prototype.ugcid || t.Sg(mr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: {
                    ugcid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              mr.sm_m
            );
          }
          static MBF() {
            return mr.sm_mbf || (mr.sm_mbf = t.w0(mr.M())), mr.sm_mbf;
          }
          toObject(r = !1) {
            return mr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(mr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(mr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new mr();
            return mr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(mr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(mr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetFileDetails_Request";
          }
        }
        class Lr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Lr.prototype.details || t.Sg(Lr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lr.sm_m ||
                (Lr.sm_m = {
                  proto: Lr,
                  fields: {
                    details: { n: 1, c: ar },
                    rangecheck_host: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Lr.sm_m
            );
          }
          static MBF() {
            return Lr.sm_mbf || (Lr.sm_mbf = t.w0(Lr.M())), Lr.sm_mbf;
          }
          toObject(r = !1) {
            return Lr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Lr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Lr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Lr();
            return Lr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Lr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Lr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetFileDetails_Response";
          }
        }
        class Nr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Nr.prototype.app_id || t.Sg(Nr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nr.sm_m ||
                (Nr.sm_m = {
                  proto: Nr,
                  fields: {
                    app_id: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    file_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Nr.sm_m
            );
          }
          static MBF() {
            return Nr.sm_mbf || (Nr.sm_mbf = t.w0(Nr.M())), Nr.sm_mbf;
          }
          toObject(r = !1) {
            return Nr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Nr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Nr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Nr();
            return Nr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Nr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Nr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetSingleFileInfo_Request";
          }
        }
        class Rr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Rr.prototype.app_id || t.Sg(Rr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rr.sm_m ||
                (Rr.sm_m = {
                  proto: Rr,
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
              Rr.sm_m
            );
          }
          static MBF() {
            return Rr.sm_mbf || (Rr.sm_mbf = t.w0(Rr.M())), Rr.sm_mbf;
          }
          toObject(r = !1) {
            return Rr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Rr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Rr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Rr();
            return Rr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Rr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Rr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetSingleFileInfo_Response";
          }
        }
        class cr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              cr.prototype.appid || t.Sg(cr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              cr.sm_m ||
                (cr.sm_m = {
                  proto: cr,
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
              cr.sm_m
            );
          }
          static MBF() {
            return cr.sm_mbf || (cr.sm_mbf = t.w0(cr.M())), cr.sm_mbf;
          }
          toObject(r = !1) {
            return cr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(cr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(cr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new cr();
            return cr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(cr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(cr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_EnumerateUserFiles_Request";
          }
        }
        class Gr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Gr.prototype.files || t.Sg(Gr.M()),
              n.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gr.sm_m ||
                (Gr.sm_m = {
                  proto: Gr,
                  fields: {
                    files: { n: 1, c: ar, r: !0, q: !0 },
                    total_files: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Gr.sm_m
            );
          }
          static MBF() {
            return Gr.sm_mbf || (Gr.sm_mbf = t.w0(Gr.M())), Gr.sm_mbf;
          }
          toObject(r = !1) {
            return Gr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Gr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Gr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Gr();
            return Gr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Gr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Gr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_EnumerateUserFiles_Response";
          }
        }
        class Ur extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ur.prototype.filename || t.Sg(Ur.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ur.sm_m ||
                (Ur.sm_m = {
                  proto: Ur,
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
              Ur.sm_m
            );
          }
          static MBF() {
            return Ur.sm_mbf || (Ur.sm_mbf = t.w0(Ur.M())), Ur.sm_mbf;
          }
          toObject(r = !1) {
            return Ur.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ur.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ur.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Ur();
            return Ur.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ur.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ur.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_Delete_Request";
          }
        }
        class ci extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ci.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new ci();
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new ci();
            return ci.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return ci.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              ci.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_Delete_Response";
          }
        }
        class bi extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return bi.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new bi();
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new bi();
            return bi.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return bi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              bi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetClientEncryptionKey_Request";
          }
        }
        class Hr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Hr.prototype.key || t.Sg(Hr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hr.sm_m ||
                (Hr.sm_m = {
                  proto: Hr,
                  fields: {
                    key: { n: 1, br: t.qM.readBytes, bw: t.gp.writeBytes },
                    crc: { n: 2, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                  },
                }),
              Hr.sm_m
            );
          }
          static MBF() {
            return Hr.sm_mbf || (Hr.sm_mbf = t.w0(Hr.M())), Hr.sm_mbf;
          }
          toObject(r = !1) {
            return Hr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Hr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Hr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Hr();
            return Hr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Hr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Hr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetClientEncryptionKey_Response";
          }
        }
        class kr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              kr.prototype.steamid || t.Sg(kr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kr.sm_m ||
                (kr.sm_m = {
                  proto: kr,
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
              kr.sm_m
            );
          }
          static MBF() {
            return kr.sm_mbf || (kr.sm_mbf = t.w0(kr.M())), kr.sm_mbf;
          }
          toObject(r = !1) {
            return kr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(kr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(kr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new kr();
            return kr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(kr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(kr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CDNReport_Notification";
          }
        }
        class Sr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Sr.prototype.host || t.Sg(Sr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Sr.sm_m ||
                (Sr.sm_m = {
                  proto: Sr,
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
              Sr.sm_m
            );
          }
          static MBF() {
            return Sr.sm_mbf || (Sr.sm_mbf = t.w0(Sr.M())), Sr.sm_mbf;
          }
          toObject(r = !1) {
            return Sr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Sr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Sr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Sr();
            return Sr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Sr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Sr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ExternalStorageTransferReport_Notification";
          }
        }
        class Pr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pr.prototype.appid || t.Sg(Pr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pr.sm_m ||
                (Pr.sm_m = {
                  proto: Pr,
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
              Pr.sm_m
            );
          }
          static MBF() {
            return Pr.sm_mbf || (Pr.sm_mbf = t.w0(Pr.M())), Pr.sm_mbf;
          }
          toObject(r = !1) {
            return Pr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Pr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Pr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Pr();
            return Pr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Pr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Pr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppLaunchIntent_Request";
          }
        }
        class Ar extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ar.prototype.pending_remote_operations || t.Sg(Ar.M()),
              n.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ar.sm_m ||
                (Ar.sm_m = {
                  proto: Ar,
                  fields: {
                    pending_remote_operations: { n: 1, c: k, r: !0, q: !0 },
                  },
                }),
              Ar.sm_m
            );
          }
          static MBF() {
            return Ar.sm_mbf || (Ar.sm_mbf = t.w0(Ar.M())), Ar.sm_mbf;
          }
          toObject(r = !1) {
            return Ar.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ar.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ar.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Ar();
            return Ar.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ar.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ar.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppLaunchIntent_Response";
          }
        }
        class Dr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Dr.prototype.appid || t.Sg(Dr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dr.sm_m ||
                (Dr.sm_m = {
                  proto: Dr,
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
              Dr.sm_m
            );
          }
          static MBF() {
            return Dr.sm_mbf || (Dr.sm_mbf = t.w0(Dr.M())), Dr.sm_mbf;
          }
          toObject(r = !1) {
            return Dr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Dr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Dr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Dr();
            return Dr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Dr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Dr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppExitSyncDone_Notification";
          }
        }
        class _r extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _r.prototype.appid || t.Sg(_r.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _r.sm_m ||
                (_r.sm_m = {
                  proto: _r,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              _r.sm_m
            );
          }
          static MBF() {
            return _r.sm_mbf || (_r.sm_mbf = t.w0(_r.M())), _r.sm_mbf;
          }
          toObject(r = !1) {
            return _r.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(_r.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(_r.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new _r();
            return _r.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(_r.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return _r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(_r.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              _r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientGetAppQuotaUsage_Request";
          }
        }
        class Cr extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Cr.prototype.existing_files || t.Sg(Cr.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Cr.sm_m ||
                (Cr.sm_m = {
                  proto: Cr,
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
              Cr.sm_m
            );
          }
          static MBF() {
            return Cr.sm_mbf || (Cr.sm_mbf = t.w0(Cr.M())), Cr.sm_mbf;
          }
          toObject(r = !1) {
            return Cr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Cr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Cr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Cr();
            return Cr.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Cr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Cr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientGetAppQuotaUsage_Response";
          }
        }
        class rt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rt.prototype.file_name || t.Sg(rt.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
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
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = t.w0(rt.M())), rt.sm_mbf;
          }
          toObject(r = !1) {
            return rt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(rt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(rt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new rt();
            return rt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(rt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(rt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppFileInfo";
          }
        }
        class tt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tt.prototype.appid || t.Sg(tt.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    synced_change_number: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = t.w0(tt.M())), tt.sm_mbf;
          }
          toObject(r = !1) {
            return tt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(tt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(tt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new tt();
            return tt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(tt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(tt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetAppFileChangelist_Request";
          }
        }
        class it extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              it.prototype.current_change_number || t.Sg(it.M()),
              n.Message.initialize(this, r, 0, -1, [2, 4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    current_change_number: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    files: { n: 2, c: rt, r: !0, q: !0 },
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
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = t.w0(it.M())), it.sm_mbf;
          }
          toObject(r = !1) {
            return it.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(it.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(it.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new it();
            return it.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(it.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return it.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(it.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_GetAppFileChangelist_Response";
          }
        }
        class et extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              et.prototype.url_host || t.Sg(et.M()),
              n.Message.initialize(this, r, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
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
                    request_headers: { n: 5, c: at, r: !0, q: !0 },
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
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = t.w0(et.M())), et.sm_mbf;
          }
          toObject(r = !1) {
            return et.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(et.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(et.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new et();
            return et.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(et.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return et.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(et.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ClientCloudFileUploadBlockDetails";
          }
        }
        class at extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              at.prototype.name || t.Sg(at.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    name: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    value: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = t.w0(at.M())), at.sm_mbf;
          }
          toObject(r = !1) {
            return at.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(at.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(at.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new at();
            return at.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(at.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return at.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(at.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ClientCloudFileUploadBlockDetails_HTTPHeaders";
          }
        }
        class br extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              br.prototype.appid || t.Sg(br.M()),
              n.Message.initialize(this, r, 0, -1, [3, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
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
              br.sm_m
            );
          }
          static MBF() {
            return br.sm_mbf || (br.sm_mbf = t.w0(br.M())), br.sm_mbf;
          }
          toObject(r = !1) {
            return br.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(br.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(br.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new br();
            return br.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(br.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(br.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginAppUploadBatch_Request";
          }
        }
        class nt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nt.prototype.batch_id || t.Sg(nt.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
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
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = t.w0(nt.M())), nt.sm_mbf;
          }
          toObject(r = !1) {
            return nt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(nt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(nt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new nt();
            return nt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(nt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(nt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_BeginAppUploadBatch_Response";
          }
        }
        class st extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              st.prototype.appid || t.Sg(st.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
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
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = t.w0(st.M())), st.sm_mbf;
          }
          toObject(r = !1) {
            return st.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(st.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(st.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new st();
            return st.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(st.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return st.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(st.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CompleteAppUploadBatch_Notification";
          }
        }
        class Br extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Br.prototype.appid || t.Sg(Br.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
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
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = t.w0(Br.M())), Br.sm_mbf;
          }
          toObject(r = !1) {
            return Br.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Br.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Br.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Br();
            return Br.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Br.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Br.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CompleteAppUploadBatch_Request";
          }
        }
        class Bi extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Bi.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Bi();
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Bi();
            return Bi.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Bi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Bi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_CompleteAppUploadBatch_Response";
          }
        }
        class mt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mt.prototype.appid || t.Sg(mt.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    app_change_number: {
                      n: 2,
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
          toObject(r = !1) {
            return mt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(mt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(mt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new mt();
            return mt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(mt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(mt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppCloudStateChange_Notification";
          }
        }
        class ct extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ct.prototype.appid || t.Sg(ct.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
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
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = t.w0(ct.M())), ct.sm_mbf;
          }
          toObject(r = !1) {
            return ct.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ct.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ct.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new ct();
            return ct.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ct.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ct.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientBeginFileUpload_Request";
          }
        }
        class bt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              bt.prototype.encrypt_file || t.Sg(bt.M()),
              n.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: {
                    encrypt_file: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    block_requests: { n: 2, c: et, r: !0, q: !0 },
                  },
                }),
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = t.w0(bt.M())), bt.sm_mbf;
          }
          toObject(r = !1) {
            return bt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(bt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(bt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new bt();
            return bt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(bt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(bt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientBeginFileUpload_Response";
          }
        }
        class Bt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Bt.prototype.transfer_succeeded || t.Sg(Bt.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
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
                    file_sha: { n: 3, br: t.qM.readBytes, bw: t.gp.writeBytes },
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
          toObject(r = !1) {
            return Bt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Bt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Bt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Bt();
            return Bt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Bt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Bt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Bt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientCommitFileUpload_Request";
          }
        }
        class wt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wt.prototype.file_committed || t.Sg(wt.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
                  fields: {
                    file_committed: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              wt.sm_m
            );
          }
          static MBF() {
            return wt.sm_mbf || (wt.sm_mbf = t.w0(wt.M())), wt.sm_mbf;
          }
          toObject(r = !1) {
            return wt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(wt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(wt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new wt();
            return wt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(wt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(wt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientCommitFileUpload_Response";
          }
        }
        class ft extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ft.prototype.appid || t.Sg(ft.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
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
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = t.w0(ft.M())), ft.sm_mbf;
          }
          toObject(r = !1) {
            return ft.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ft.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ft.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new ft();
            return ft.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ft.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ft.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientFileDownload_Request";
          }
        }
        class lt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lt.prototype.appid || t.Sg(lt.M()),
              n.Message.initialize(this, r, 0, -1, [10], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
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
                    request_headers: { n: 10, c: ut, r: !0, q: !0 },
                    encrypted: { n: 11, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = t.w0(lt.M())), lt.sm_mbf;
          }
          toObject(r = !1) {
            return lt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(lt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(lt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new lt();
            return lt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(lt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(lt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientFileDownload_Response";
          }
        }
        class ut extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ut.prototype.name || t.Sg(ut.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    name: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    value: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = t.w0(ut.M())), ut.sm_mbf;
          }
          toObject(r = !1) {
            return ut.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ut.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ut.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new ut();
            return ut.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ut.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ut.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientFileDownload_Response_HTTPHeaders";
          }
        }
        class zt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zt.prototype.appid || t.Sg(zt.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zt.sm_m ||
                (zt.sm_m = {
                  proto: zt,
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
              zt.sm_m
            );
          }
          static MBF() {
            return zt.sm_mbf || (zt.sm_mbf = t.w0(zt.M())), zt.sm_mbf;
          }
          toObject(r = !1) {
            return zt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(zt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(zt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new zt();
            return zt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(zt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return zt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(zt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              zt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientDeleteFile_Request";
          }
        }
        class wi extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return wi.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new wi();
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new wi();
            return wi.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return wi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              wi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientDeleteFile_Response";
          }
        }
        class dt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dt.prototype.appid || t.Sg(dt.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    chose_local_files: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = t.w0(dt.M())), dt.sm_mbf;
          }
          toObject(r = !1) {
            return dt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(dt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(dt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new dt();
            return dt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(dt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(dt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientConflictResolution_Notification";
          }
        }
        class yt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yt.prototype.appid || t.Sg(yt.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
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
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = t.w0(yt.M())), yt.sm_mbf;
          }
          toObject(r = !1) {
            return yt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(yt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(yt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new yt();
            return yt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(yt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(yt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppSessionSuspend_Request";
          }
        }
        class fi extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return fi.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new fi();
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new fi();
            return fi.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return fi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              fi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppSessionSuspend_Response";
          }
        }
        class jt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              jt.prototype.appid || t.Sg(jt.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    client_id: {
                      n: 2,
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
          toObject(r = !1) {
            return jt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(jt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(jt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new jt();
            return jt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(jt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(jt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppSessionResume_Request";
          }
        }
        class li extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return li.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new li();
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new li();
            return li.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return li.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              li.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_AppSessionResume_Response";
          }
        }
        class ht extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ht.prototype.client_id || t.Sg(ht.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: {
                    client_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = t.w0(ht.M())), ht.sm_mbf;
          }
          toObject(r = !1) {
            return ht.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ht.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ht.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new ht();
            return ht.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ht.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ht.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientLogUploadCheck_Notification";
          }
        }
        class Wt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wt.prototype.request_id || t.Sg(Wt.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wt.sm_m ||
                (Wt.sm_m = {
                  proto: Wt,
                  fields: {
                    request_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Wt.sm_m
            );
          }
          static MBF() {
            return Wt.sm_mbf || (Wt.sm_mbf = t.w0(Wt.M())), Wt.sm_mbf;
          }
          toObject(r = !1) {
            return Wt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Wt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Wt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Wt();
            return Wt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Wt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Wt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Wt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Wt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientLogUploadRequest_Notification";
          }
        }
        class Ot extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ot.prototype.client_id || t.Sg(Ot.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ot.sm_m ||
                (Ot.sm_m = {
                  proto: Ot,
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
              Ot.sm_m
            );
          }
          static MBF() {
            return Ot.sm_mbf || (Ot.sm_mbf = t.w0(Ot.M())), Ot.sm_mbf;
          }
          toObject(r = !1) {
            return Ot.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ot.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ot.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new Ot();
            return Ot.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ot.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return Ot.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ot.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              Ot.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ClientLogUploadComplete_Notification";
          }
        }
        class ot extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ot.prototype.app_id || t.Sg(ot.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    app_id: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    file_name: {
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
          toObject(r = !1) {
            return ot.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ot.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ot.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new ot();
            return ot.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ot.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ot.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ShareFile_Request";
          }
        }
        class xt extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xt.prototype.hcontent || t.Sg(xt.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xt.sm_m ||
                (xt.sm_m = {
                  proto: xt,
                  fields: {
                    hcontent: {
                      n: 1,
                      d: "18446744073709551615",
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              xt.sm_m
            );
          }
          static MBF() {
            return xt.sm_mbf || (xt.sm_mbf = t.w0(xt.M())), xt.sm_mbf;
          }
          toObject(r = !1) {
            return xt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(xt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(xt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              a = new xt();
            return xt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(xt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(xt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloud_ShareFile_Response";
          }
        }
        var zi;
        ((s) => {
          function r(x, T) {
            return x.SendNotification(
              "Cloud.ClientLogUploadCheck#1",
              (0, W.I8)(ht, T),
              { ePrivilege: 1 },
            );
          }
          s.ClientLogUploadCheck = r;
          function i(x, T) {
            return x.SendNotification(
              "Cloud.ClientLogUploadComplete#1",
              (0, W.I8)(Ot, T),
              { ePrivilege: 1 },
            );
          }
          s.ClientLogUploadComplete = i;
          function a(x, T, E) {
            return x.SendMsg(
              "Cloud.BeginHTTPUpload#1",
              (0, W.I8)(nr, T, E),
              $r,
              { ePrivilege: 1 },
            );
          }
          s.BeginHTTPUpload = a;
          function c(x, T, E) {
            return x.SendMsg(
              "Cloud.CommitHTTPUpload#1",
              (0, W.I8)(sr, T, E),
              Xr,
              { ePrivilege: 1 },
            );
          }
          s.CommitHTTPUpload = c;
          function B(x, T, E) {
            return x.SendMsg(
              "Cloud.BeginUGCUpload#1",
              (0, W.I8)(Yr, T, E),
              Jr,
              { ePrivilege: 1 },
            );
          }
          s.BeginUGCUpload = B;
          function f(x, T, E) {
            return x.SendMsg(
              "Cloud.CommitUGCUpload#1",
              (0, W.I8)(Qr, T, E),
              Vr,
              { ePrivilege: 1 },
            );
          }
          s.CommitUGCUpload = f;
          function j(x, T, E) {
            return x.SendMsg(
              "Cloud.GetFileDetails#1",
              (0, W.I8)(mr, T, E),
              Lr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }
          s.GetFileDetails = j;
          function o(x, T, E) {
            return x.SendMsg(
              "Cloud.GetSingleFileInfo#1",
              (0, W.I8)(Nr, T, E),
              Rr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetSingleFileInfo = o;
          function wr(x, T, E) {
            return x.SendMsg("Cloud.ShareFile#1", (0, W.I8)(ot, T, E), xt, {
              ePrivilege: 1,
            });
          }
          s.ShareFile = wr;
          function Tt(x, T, E) {
            return x.SendMsg(
              "Cloud.EnumerateUserFiles#1",
              (0, W.I8)(cr, T, E),
              Gr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.EnumerateUserFiles = Tt;
          function Dt(x, T, E) {
            return x.SendMsg("Cloud.Delete#1", (0, W.I8)(Ur, T, E), ci, {
              ePrivilege: 1,
            });
          }
          s.Delete = Dt;
          function ii(x, T, E) {
            return x.SendMsg(
              "Cloud.GetClientEncryptionKey#1",
              (0, W.I8)(bi, T, E),
              Hr,
              { ePrivilege: 1 },
            );
          }
          s.GetClientEncryptionKey = ii;
          function ai(x, T) {
            return x.SendNotification("Cloud.CDNReport#1", (0, W.I8)(kr, T), {
              ePrivilege: 1,
            });
          }
          s.CDNReport = ai;
          function Wi(x, T) {
            return x.SendNotification(
              "Cloud.ExternalStorageTransferReport#1",
              (0, W.I8)(Sr, T),
              { ePrivilege: 1 },
            );
          }
          s.ExternalStorageTransferReport = Wi;
          function ni(x, T, E) {
            return x.SendMsg(
              "Cloud.BeginAppUploadBatch#1",
              (0, W.I8)(br, T, E),
              nt,
              { ePrivilege: 1 },
            );
          }
          s.BeginAppUploadBatch = ni;
          function mi(x, T) {
            return x.SendNotification(
              "Cloud.CompleteAppUploadBatch#1",
              (0, W.I8)(st, T),
              { ePrivilege: 1 },
            );
          }
          s.CompleteAppUploadBatch = mi;
          function Yi(x, T, E) {
            return x.SendMsg(
              "Cloud.CompleteAppUploadBatchBlocking#1",
              (0, W.I8)(Br, T, E),
              Bi,
              { ePrivilege: 1 },
            );
          }
          s.CompleteAppUploadBatchBlocking = Yi;
          function za(x, T, E) {
            return x.SendMsg(
              "Cloud.ClientBeginFileUpload#1",
              (0, W.I8)(ct, T, E),
              bt,
              { ePrivilege: 1 },
            );
          }
          s.ClientBeginFileUpload = za;
          function da(x, T, E) {
            return x.SendMsg(
              "Cloud.ClientCommitFileUpload#1",
              (0, W.I8)(Bt, T, E),
              wt,
              { ePrivilege: 1 },
            );
          }
          s.ClientCommitFileUpload = da;
          function ya(x, T, E) {
            return x.SendMsg(
              "Cloud.ClientFileDownload#1",
              (0, W.I8)(ft, T, E),
              lt,
              { ePrivilege: 1 },
            );
          }
          s.ClientFileDownload = ya;
          function ja(x, T, E) {
            return x.SendMsg(
              "Cloud.ClientDeleteFile#1",
              (0, W.I8)(zt, T, E),
              wi,
              { ePrivilege: 1 },
            );
          }
          s.ClientDeleteFile = ja;
          function ha(x, T) {
            return x.SendNotification(
              "Cloud.ClientConflictResolution#1",
              (0, W.I8)(dt, T),
              { ePrivilege: 1 },
            );
          }
          s.ClientConflictResolution = ha;
          function Wa(x, T, E) {
            return x.SendMsg(
              "Cloud.GetAppFileChangelist#1",
              (0, W.I8)(tt, T, E),
              it,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetAppFileChangelist = Wa;
          function Oa(x, T, E) {
            return x.SendMsg(
              "Cloud.SuspendAppSession#1",
              (0, W.I8)(yt, T, E),
              fi,
              { ePrivilege: 1 },
            );
          }
          s.SuspendAppSession = Oa;
          function oa(x, T, E) {
            return x.SendMsg(
              "Cloud.ResumeAppSession#1",
              (0, W.I8)(jt, T, E),
              li,
              { ePrivilege: 1 },
            );
          }
          s.ResumeAppSession = oa;
          function xa(x, T, E) {
            return x.SendMsg(
              "Cloud.SignalAppLaunchIntent#1",
              (0, W.I8)(Pr, T, E),
              Ar,
              { ePrivilege: 1 },
            );
          }
          s.SignalAppLaunchIntent = xa;
          function Ta(x, T) {
            return x.SendNotification(
              "Cloud.SignalAppExitSyncDone#1",
              (0, W.I8)(Dr, T),
              { ePrivilege: 1 },
            );
          }
          s.SignalAppExitSyncDone = Ta;
          function Ma(x, T, E) {
            return x.SendMsg(
              "Cloud.ClientGetAppQuotaUsage#1",
              (0, W.I8)(_r, T, E),
              Cr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.ClientGetAppQuotaUsage = Ma;
        })(zi || (zi = {}));
        var Ji;
        ((s) => {
          (s.NotifyAppStateChangeHandler = {
            name: "CloudClient.NotifyAppStateChange#1",
            request: mt,
          }),
            (s.ClientLogUploadRequestHandler = {
              name: "CloudClient.ClientLogUploadRequest#1",
              request: Wt,
            });
        })(Ji || (Ji = {}));
        var qi = w(57589);
        const te = new qi.wd("GameNotesCloudStore").Debug;
        function Zi(s) {
          return s.replace(/[!-/:-@ [\\\]^`]/g, "_");
        }
        class ie {
          FilenameForNotes(r) {
            return "appid" in r
              ? `notes_${Number(r.appid)}`
              : `notes_shortcut_${Zi(r.shortcut)}`;
          }
          DirectoryForNoteImages(r) {
            return "appid" in r
              ? `notes_${Number(r.appid)}_images/`
              : `notes_shortcut_${Zi(r.shortcut)}_images/`;
          }
          ParseNotesFileName(r) {
            const i = r.match(/^notes_shortcut_([^/]+)$/);
            if (i) return { shortcut: i[1] };
            const a = r.match(/^notes_(\d+)$/);
            if (a && parseInt(a[1]) < 2147483647)
              return { appid: parseInt(a[1]) };
          }
          async GetGameNotesList(r) {
            return (await this.InternalLoadNotes(r)).notes.slice();
          }
          NewNote(r, i) {
            let a = {};
            return (
              "appid" in r
                ? (a.appid = r.appid)
                : (a.shortcut_name = r.shortcut),
              {
                id: Date.now().toString(36),
                ...a,
                ordinal: 0,
                time_created: Math.floor(Date.now() / 1e3),
                time_modified: Math.floor(Date.now() / 1e3),
                title: i,
                content: "",
                not_persisted: !0,
              }
            );
          }
          async SaveGameNotes(r, i) {
            const a = { notes: i };
            "shortcut" in r && (a.shortcut_name = r.shortcut);
            const c = JSON.stringify(a, (B, f) =>
              B === "not_persisted" ? void 0 : f,
            );
            return (
              te("SaveGameNotes", a),
              await this.WriteNotesFile(this.FilenameForNotes(r), c)
            );
          }
        }
        var ee = w(95603);
        const Qi = new qi.wd("GameNotesCloudStore").Debug;
        class ae extends ie {
          m_props;
          constructor(r) {
            super(), (this.m_props = r);
          }
          async GetGamesWithNotes() {
            let r = [];
            for (const [i, a] of await this.GetFiles()) {
              const c = this.ParseNotesFileName(i);
              if (!c) continue;
              let B;
              "appid" in c
                ? (B = { appid: c.appid })
                : (B = { shortcut_name: c.shortcut }),
                r.push({ ...B, last_modified: a.rtLastModified });
            }
            return r;
          }
          async UploadImage(r, i) {
            const a = await C.C(await i.arrayBuffer(), "SHA-1"),
              c = (0, ee.PW)(i),
              B = `${r}${a}.${c}`;
            if (!(await this.m_props.uploadFile(B, i)))
              throw "There was an error uploading the file";
            return this.m_mapCachedImageFiles.set(B, i), B;
          }
          m_mapCachedImageFiles = new Map();
          async ResolveImageURL(r) {
            let i = this.m_mapCachedImageFiles.get(r);
            if (!i) {
              const a = await this.GetCloudFileInfo(r);
              if (!a) return;
              (i = await this.InternalLoadImageFromCloud(a)),
                this.m_mapCachedImageFiles.set(r, i);
            }
            return URL.createObjectURL(i);
          }
          m_mapFileInfo;
          m_tsFileInfoLoaded = 0;
          m_promiseLoadingNotes;
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
          async InternalLoadNotes(r) {
            const i = this.FilenameForNotes(r),
              a = await this.GetCloudFileInfo(i);
            let c;
            return (
              a
                ? (c = await this.InternalLoadFileFromCloud(a))
                : (c = { notes: [] }),
              c
            );
          }
          async WriteNotesFile(r, i) {
            return this.m_props.uploadFile(r, i), At.R;
          }
          async GetCloudFileInfo(r) {
            const i = (await this.GetFiles()).get(r);
            if (!i) return;
            const a = W.w.Init(mr);
            a.Body().set_appid(F.oez), a.Body().set_ugcid(i.ugcid);
            const c = await zi.GetFileDetails(
              this.m_props.steamInterface.GetServiceTransport(),
              a,
            );
            if (!c.BSuccess() || !c.Body().details(!1))
              throw `Error loading cloud file detail: ${c.GetErrorMessage()}`;
            const B = c.Body().details();
            return (
              (0, P.wT)(
                B.filename() == r,
                `Asked for ${r} but got ${B.filename()}`,
              ),
              {
                strURL: B.url(),
                strSHA: B.file_sha(),
                strFilename: B.filename(),
                ugcid: B.ugcid(),
                rtLastModified: parseInt(B.timestamp()),
                nBytes: B.file_size(),
              }
            );
          }
          async InternalLoadNotesList() {
            let r = 0,
              i = !0;
            const a = new Map();
            for (; i; ) {
              Qi(`EnumerateUserFiles for ${F.oez}, starting at ${r}`);
              const c = W.w.Init(cr);
              c.Body().set_appid(F.oez),
                c.Body().set_extended_details(!0),
                c.Body().set_start_index(r);
              const B = await zi.EnumerateUserFiles(
                this.m_props.steamInterface.GetServiceTransport(),
                c,
              );
              if (!B.BSuccess())
                throw `Error loading cloud files: ${B.GetErrorMessage()}`;
              B.Body()
                .files()
                .map((j) => ({
                  strFilename: j.filename(),
                  ugcid: j.ugcid(),
                  rtLastModified: parseInt(j.timestamp()),
                  nBytes: j.file_size(),
                }))
                .forEach((j) => a.set(j.strFilename, j));
              const f = B.Body().files().length;
              (r += f),
                (i = r < B.Body().total_files()),
                Qi(
                  `EnumerateUserFiles complete, loaded ${r - f}-${r} files of ${B.Body().total_files()} total files ${i ? ", running another fetch" : ""}`,
                );
            }
            this.m_mapFileInfo = a;
          }
          async InternalLoadFileFromCloud(r) {
            const a = await (await fetch(r.strURL)).json();
            if (a) return a;
            throw `Cloud file not found for ${r.strFilename}`;
          }
          async InternalLoadImageFromCloud(r) {
            const a = await (await fetch(r.strURL)).blob();
            return new File([a], r.strFilename, { type: a.type });
          }
        }
        var gi = w(88942),
          Fi = w(29385),
          pi = w(61739);
        function ne(s) {
          return { appid: s };
        }
        function se(s) {
          return { shortcut: Vi(s) };
        }
        function qa(s, r) {
          return "appid" in s
            ? "appid" in r && s.appid == r.appid
            : "shortcut" in r && s.shortcut == r.shortcut;
        }
        function Vi(s) {
          return s.trim();
        }
        function Li(s) {
          return s.appid ? { appid: s.appid } : { shortcut: s.shortcut_name };
        }
        const di = y.createContext({ mode: "page", store: null });
        function me(s) {
          const {
              mode: r,
              store: i,
              closePopup: a,
              bPinnedView: c,
              onClickURL: B,
              bSpellcheckEnabled: f = !0,
              setSpellcheckEnabled: j,
              children: o,
            } = s,
            wr = y.useMemo(
              () => ({
                mode: r,
                store: i,
                closePopup: a,
                bPinnedView: c,
                onClickURL: B,
                bSpellcheckEnabled: f,
                setSpellcheckEnabled: j,
              }),
              [r, i, a, c, B, f, j],
            );
          return (0, b.jsx)(di.Provider, { value: wr, children: o });
        }
        function ce() {
          return y.useContext(di).mode == "single";
        }
        function Ii() {
          return y.useContext(di).closePopup;
        }
        function yi() {
          return y.useContext(di).store;
        }
        function Ni() {
          return y.useContext(di).bPinnedView;
        }
        function be() {
          return y.useContext(di).onClickURL;
        }
        function Be() {
          return y.useContext(di).bSpellcheckEnabled ?? !0;
        }
        function we() {
          return y.useContext(di).setSpellcheckEnabled;
        }
        var Ct = w(18210);
        const fe = new qi.wd("GameNotesCloudStore").Debug;
        function le() {
          const s = yi();
          return (0, gi.I)({
            queryKey: ["GameNotes", "GamesWithNotes"],
            queryFn: () => s.GetGamesWithNotes(),
            staleTime: 1e3 * 60 * 10,
          });
        }
        function oi(s) {
          return "appid" in s
            ? ["GameNotes", "NotesByAppID", s.appid]
            : ["GameNotes", "NotesForShortcut", Vi(s.shortcut)];
        }
        function xi(s, r) {
          return {
            queryKey: oi(r),
            queryFn: async () => (await s.GetGameNotesList(r)) || [],
            staleTime: 1e3 * 60 * 3,
            refetchInterval: 1e3 * 60 * 15,
            enabled: !!r,
            structuralSharing: !0,
          };
        }
        function ue(s) {
          const r = yi();
          return (0, gi.I)(xi(r, s));
        }
        function ga(s, r) {
          const i = useGameNotesStore(),
            a = React.useCallback((c) => c.find((B) => B.id === r), [r]);
          return useQuery({ ...xi(i, s), select: a });
        }
        function ze(s, r) {
          const i = (0, Fi.jE)(),
            a = yi(),
            c = Li(s);
          return (0, pi.n)({
            scope: {
              id: `${"appid" in s ? s.appid : s.shortcut_name}_${s.id}`,
            },
            mutationFn: async (B) => {
              const { title: f, bbcode: j } = B;
              fe(`Saving note ${f}`);
              const o = await i.fetchQuery(xi(a, c));
              if (!o) throw `Failed to load notes for ${JSON.stringify(c)}`;
              const wr = o.find((ai) => ai.id == s.id),
                Tt = {
                  ...(wr ?? {}),
                  ...s,
                  title: f,
                  content: j,
                  time_modified: Math.floor(Date.now() / 1e3),
                };
              let Dt;
              wr
                ? (Dt = o.map((ai) => (ai.id == Tt.id ? Tt : ai)))
                : (Dt = [...o, Tt]);
              const ii = await a.SaveGameNotes(c, Dt);
              if (ii != At.R) throw `Error saving notes: ${ii}`;
              return Dt;
            },
            onMutate(B) {
              const f = { ...s, title: B.title, content: B.bbcode };
              return Gi(i, c, (j) => j.map((o) => (o.id == f.id ? f : o))), f;
            },
            onSuccess(B, f, j) {
              i.setQueryData(oi(c), B);
            },
            onError(B) {
              r(B.message || B.name);
            },
          });
        }
        function de(s) {
          const r = (0, Fi.jE)(),
            i = yi();
          return y.useCallback(() => {
            const a = (0, Ct.we)("#UserGameNotes_UntitledNote_Title"),
              c = i.NewNote(s, a);
            return Gi(r, s, (B) => [...B, c]), c.id;
          }, [r, i, s]);
        }
        function Ri(s, r) {
          const i = (0, Fi.jE)(),
            a = yi(),
            c = Li(s);
          return (0, pi.n)({
            mutationFn: async () => {
              if (s.not_persisted) return;
              const B = await i.fetchQuery(xi(a, c));
              if (!B) throw `Failed to load notes for ${JSON.stringify(c)}`;
              const f = B.filter((j) => j.id != s.id);
              return await a.SaveGameNotes(c, f), f;
            },
            onSuccess: (B) => {
              B && i.setQueryData(oi(c), B), r && r();
            },
          });
        }
        function Gi(s, r, i) {
          s.setQueryData(oi(r), (a) => a && i(a));
        }
        function ye(s, r) {
          return y.useMemo(() => (r ? se(r) : ne(s)), [s, r]);
        }
        var je = w(8561),
          he = w(81240),
          Ei = w(84419),
          We = w(58802);
        const Ui = Ei.DQ.nodes.image,
          Oe = {
            nodes: {
              ...Ei.DQ.nodes,
              cloudimage: {
                ...Ui,
                parseDOM: [],
                bbCode: { ...Ui.bbCode, tag: "cloudimg" },
              },
            },
            marks: { ...Ei.DQ.marks },
          },
          Oi = new We.W(Oe);
        var oe = w(33645),
          xe = w.n(oe),
          Te = w(23569),
          Me = w(99931),
          qe = w(64238),
          ge = w.n(qe),
          Hi = w(83085),
          Fe = w(93147),
          hi = w(3166),
          pe = w(35184),
          Ti = w(56718),
          Ie = w(73309),
          ji = w(73723),
          si = w(50660),
          vi = w(36707),
          ki = w(52406);
        function Ee(s) {
          const {
              schema: r,
              view: i,
              refUpdateToolbar: a,
              className: c,
              bSpellcheckEnabled: B,
              setSpellcheckEnabled: f,
            } = s,
            [j, o] = (0, ki.SP)("FormattingToolbar_Expanded", !1);
          return (0, b.jsx)(si.bI, {
            refUpdateToolbar: a,
            view: i,
            children: (0, b.jsxs)("div", {
              className: (0, vi.A)(Ie.Toolbar, c),
              children: [
                (0, b.jsxs)(si.Ez, {
                  children: [
                    (0, b.jsx)(ji.MV, {}),
                    (0, b.jsx)(si.XQ, {}),
                    (0, b.jsx)(ji.Km, { schema: r }),
                    (0, b.jsx)(si.hK, {}),
                    (0, b.jsx)(si.ff, {
                      onClick: () => o(!j),
                      tooltip: (0, Ct.we)("#FormattingToolbar_ExpandOptions"),
                      children: (0, b.jsx)(Ti.cLJ, {
                        direction: j ? "up" : "down",
                      }),
                    }),
                  ],
                }),
                (0, b.jsx)(pe.R, {
                  visible: j,
                  children: (0, b.jsxs)(si.Ez, {
                    children: [
                      (0, b.jsx)(ji.Hz, { schema: r }),
                      (0, b.jsx)(ji.WJ, { schema: r, levels: 5 }),
                      (0, b.jsx)(si.u3, {
                        nodeType: r.nodes.code_block,
                        tooltip: (0, Ct.we)("#FormattingToolbar_CodeBlock"),
                        children: (0, b.jsx)(Ti.kNE, {}),
                      }),
                      (0, b.jsx)(si.XQ, {}),
                      (0, b.jsx)(ji.C$, { schema: r }),
                      (0, b.jsx)(si.XQ, {}),
                      (0, b.jsx)(ji.z9, { schema: r }),
                      (0, b.jsx)(si.hK, {}),
                      f &&
                        (0, b.jsx)(ji.Nt, {
                          bSpellcheckEnabled: B,
                          setSpellcheckEnabled: f,
                        }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        var ei = w(27491),
          ve = w(72609),
          $e = w(5310);
        function Ke(s) {
          const { deleteNote: r, hidden: i, pmState: a } = s,
            [c, B] = y.useState(),
            f = y.useRef(void 0),
            j = Be(),
            o = we(),
            wr = (0, hi.Qn)(),
            Tt = {
              onSecondaryButton: () => r(),
              onSecondaryActionDescription: (0, Ct.we)(
                "#UserGameNotes_DeleteNote",
              ),
              onDragOver: (Dt) => Dt.stopPropagation(),
            };
          return (
            y.useEffect(() => {
              c &&
                !i &&
                (ve.TS.IN_CLIENT ||
                  !window.matchMedia(`(max-width: ${$e.narrowWidth})`)
                    .matches) &&
                c.focus();
            }, [c, i]),
            (0, b.jsxs)(b.Fragment, {
              children: [
                !wr &&
                  (0, b.jsx)(Ee, {
                    schema: Oi.pm_schema,
                    view: c,
                    refUpdateToolbar: f,
                    className: ei.Toolbar,
                    bSpellcheckEnabled: j,
                    setSpellcheckEnabled: o,
                  }),
                (0, b.jsx)(Fe.l, {
                  pmState: a,
                  className: ei.EditorInput,
                  refOnUpdate: f,
                  refView: B,
                  bSpellcheckEnabled: j,
                  panelProps: Tt,
                  children: (0, b.jsx)(Xe, { schema: Oi.pm_schema }),
                }),
              ],
            })
          );
        }
        const Xe = y.memo(function (r) {
          const { schema: i } = r,
            a = be(),
            c = y.useMemo(
              () => [
                {
                  type: i.nodes.cloudimage,
                  component: Ye,
                  readProps: (B) => ({ src: B.attrs.src }),
                },
              ],
              [i.nodes.cloudimage],
            );
          return (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsx)(Hi.pw, { nodeType: i.nodes.image }),
              (0, b.jsx)(Me.W, {
                linkMarkType: i.marks.link,
                schema: i,
                onClickURL: a,
              }),
              (0, b.jsx)(Te.U, { specs: c }),
            ],
          });
        });
        function Ye(s) {
          const { src: r, selected: i } = s,
            [a, c] = y.useState(),
            B = yi();
          return (
            y.useEffect(() => {
              let f = !1;
              return (
                B.ResolveImageURL(r).then((j) => {
                  f ? URL.revokeObjectURL(j) : c(j);
                }),
                () => {
                  (f = !0), c(void 0);
                }
              );
            }, [B, r]),
            a
              ? (0, b.jsx)("img", {
                  className: ge()(xe().Image, i && "ProseMirror-selectednode"),
                  src: a,
                })
              : null
          );
        }
        var Je = w(95987),
          ui = w(19316),
          Mi = w(2801),
          Si = w(71421),
          $i = w(54963),
          Ze = w(71568);
        const Qe = 10;
        function Ve(s) {
          const { note: r, hidden: i = !1 } = s,
            [a, c] = y.useState(void 0),
            B = y.useRef(!1),
            f = (0, hi.Qn)(),
            { mutate: j } = ze(r, c),
            [o, wr] = y.useState();
          y.useEffect(() => {
            if (!B.current) {
              const ni = new je.n(Oi, r.content, (mi, Yi) =>
                j({ title: Pi(Yi), bbcode: mi }),
              );
              He(ni, Oi.pm_schema), wr(ni);
            }
          }, [j, r.content]);
          const { bDirty: Tt } = (0, he.i)(o, { msAutosaveTimeout: Qe * 1e3 });
          y.useEffect(() => {
            Tt &&
              !B.current &&
              ((B.current = !0),
              Je.y.ReportTrackedAction("/GameNotes/NoteModified"));
          }, [Tt]),
            y.useEffect(() => {
              i && o && o.CommitChanges();
            }, [i, o]);
          const Dt = (0, Ze.R7)().ownerWindow;
          (0, $i.o4)(
            Dt.document,
            y.useCallback(
              (ni) => {
                ni == "hidden" && o && o.CommitChanges();
              },
              [o],
            ),
          ),
            (0, $i.l6)(
              window,
              "beforeunload",
              y.useCallback(
                (ni) => {
                  !hi.TS.IN_STEAMUI &&
                    o.BHasUncomittedChanges() &&
                    (o.CommitChanges(), ni.preventDefault());
                },
                [o],
              ),
            );
          const ii = Le(r.appid, Oi.pm_schema),
            ai = Ii(),
            Wi = Ri(r, ai);
          return (0, b.jsx)(Hi.Xv, {
            ProcessFileUpload: ii,
            bAllowImageHotLinking: !0,
            children: (0, b.jsxs)("div", {
              className: ei.NoteEditorArea,
              children: [
                (0, b.jsx)(Ne, { error: a, dismissError: () => c(void 0) }),
                (0, b.jsx)(Ke, {
                  deleteNote: Wi.mutate,
                  hidden: i,
                  pmState: o,
                }),
                !f && (0, b.jsx)(Re, { note: r, bDirty: Tt }),
              ],
            }),
          });
        }
        function Le(s, r) {
          const i = yi();
          return y.useCallback(
            async (a) => {
              const c = await i.UploadImage(`notes_${s}_images/`, a);
              return r.nodes.cloudimage.create({ src: c });
            },
            [i, s, r],
          );
        }
        function Ne(s) {
          const { error: r, dismissError: i } = s;
          return r
            ? (0, b.jsx)(Mi.EN, {
                active: !0,
                children: (0, b.jsx)(Mi.o0, {
                  bAlertDialog: !0,
                  strTitle: (0, Ct.we)("#Error_Generic"),
                  strDescription: (0, Ct.we)(
                    "#UserGameNotes_ErrorSavingNotes",
                    r,
                  ),
                  closeModal: i,
                }),
              })
            : null;
        }
        function Re(s) {
          const { note: r, bDirty: i } = s,
            [a, c, B] = (0, $i.uD)(!1),
            f = ce(),
            j = Ii(),
            { mutate: o, isPending: wr } = Ri(r, j),
            Tt = y.useCallback(() => {
              !i && r.not_persisted ? o() : c();
            }, [i, r, o, c]);
          return (0, b.jsxs)("div", {
            className: ei.NoteActions,
            children: [
              a &&
                (0, b.jsx)(Ue, {
                  note: r,
                  closeModal: B,
                  deleteNote: o,
                  deletePending: wr,
                }),
              (0, b.jsx)(Si.he, {
                toolTipContent: (0, Ct.we)("#UserGameNotes_DeleteNote"),
                direction: "top",
                children: (0, b.jsx)(ui.$n, {
                  onClick: Tt,
                  children: (0, b.jsx)(Ti.lMJ, {}),
                }),
              }),
              f && (0, b.jsx)(Ge, { bDirty: i }),
            ],
          });
        }
        function Ge(s) {
          const { bDirty: r } = s,
            i = Ii();
          return r
            ? (0, b.jsx)(ui.jn, {
                onClick: () => i(),
                className: ei.CloseWindowButton,
                children: (0, Ct.we)("#Button_SaveAndClose"),
              })
            : (0, b.jsx)(ui.$n, {
                onClick: () => i(),
                className: ei.CloseWindowButton,
                children: (0, Ct.we)("#Button_Close"),
              });
        }
        function Ue(s) {
          const { note: r, closeModal: i, deleteNote: a, deletePending: c } = s;
          return (0, b.jsx)(Mi.EN, {
            active: !0,
            children: (0, b.jsx)(Mi.o0, {
              strTitle: (0, Ct.we)("#UserGameNotes_DeleteNote"),
              strDescription: (0, Ct.we)("#UserGameNotes_PromptDelete"),
              onOK: () => a(),
              bOKDisabled: c,
              strOKButtonText: (0, Ct.we)("#Button_Delete"),
              closeModal: i,
            }),
          });
        }
        function Pi(s) {
          let r = "";
          for (let i = 0; i < s.content.childCount; i++) {
            const a = s.content.child(i);
            if (a.isText) r += a.text;
            else if (
              ((r = r.trim()), r.length > 4 || ((r = Pi(a)), r.length > 4))
            )
              return r;
          }
          return r.trim();
        }
        function He(s, r) {
          s.UpdateState((i) => {
            const a = [];
            if (
              (i.doc.descendants((c, B) => {
                c.type === r.nodes.image &&
                  c.attrs.src?.match(/^\/gamenotes\//) &&
                  a.push({ node: c, pos: B });
              }),
              !!a.length)
            )
              return (
                a.reverse().forEach(({ node: c, pos: B }) => {
                  const f = c.attrs.src.replace(/^\/gamenotes\//, ""),
                    j = r.nodes.cloudimage.create({ src: f });
                  i = i.replaceWith(B, B + c.nodeSize, j);
                }),
                i.setMeta("addToHistory", !1),
                i
              );
          });
        }
        var ke = w(58632),
          Se = w.n(ke),
          Ai = w(98112),
          Di = w(98609);
        let Ki;
        const _i = 1440 * 60 * 1e3;
        function Ci(s) {
          return `appinfo_${s}_${Di.TS.LANGUAGE}`;
        }
        function Pe(s) {
          return !!(s && Date.now() - s.timeCached < _i);
        }
        function Ae(s, r) {
          return (
            Ki ||
              (Ki = new (Se())(
                async (i) => {
                  const a = new Map();
                  (await Promise.all(i.map((f) => r.GetObject(Ci(f)))))
                    .filter(Pe)
                    .forEach(({ value: f }) => a.set(f.appid, f));
                  const B = i.slice().filter((f) => !a.has(f));
                  if (B.length) {
                    const f = W.w.Init(Ai._z);
                    f.Body().set_language((0, F.sfN)(Di.TS.LANGUAGE)),
                      f.Body().set_appids(B);
                    const j = await Ai.BE.GetApps(s, f);
                    if (j.GetEResult() != At.R) throw j.GetErrorMessage();
                    j.Body()
                      .toObject()
                      .apps.forEach((o) => {
                        r.StoreObject(Ci(o.appid), {
                          timeCached: Date.now(),
                          value: o,
                        }),
                          a.set(o.appid, o);
                      });
                  }
                  return i.map((f) => a.get(f));
                },
                { cache: !1 },
              )),
            Ki
          );
        }
        function re(s) {
          const r = (0, ti.KV)(),
            i = (0, ti.rX)();
          return (0, gi.I)({
            queryKey: ["appinfo", s],
            queryFn: async () => Ae(r, i).load(s),
            staleTime: _i,
            enabled: !!s,
          }).data;
        }
        function De(s) {
          const { bStandalonePage: r } = s,
            i = (0, Y.W5)(),
            a = ye(
              "appid" in i.params && Number(i.params.appid),
              "shortcut_name" in i.params && i.params.shortcut_name,
            ),
            c = Xi(),
            B = de(a),
            f = y.useRef(void 0),
            { data: j } = ue(a);
          let o,
            wr = !1;
          if (j) {
            const Dt = i.params.noteid || f.current;
            Dt &&
              ((o = j.find((ii) => ii.id === Dt)),
              !o && i.params.noteid && (wr = !0)),
              o || (o = j[0]);
          }
          o && (f.current = o.id),
            y.useEffect(() => {
              j && j.length == 0 && c(a, B(), !0);
            }, [c, a, j, B]),
            y.useEffect(() => {
              wr && c(a, void 0, !0);
            }, [c, a, wr]);
          const Tt = (0, b.jsx)(Si.he, {
            toolTipContent: (0, Ct.we)("#UserGameNotes_NewNote"),
            direction: "top",
            children: (0, b.jsx)(ui.$n, {
              className: ei.NewNoteButton,
              onClick: () => {
                const Dt = B();
                c(a, Dt);
              },
              children: (0, b.jsx)(Ti.qY3, {}),
            }),
          });
          return j
            ? (0, b.jsx)(_e, {
                noteParent: a,
                notes: j,
                activeNoteID: o?.id,
                actions: Tt,
                bStandalonePage: r,
              })
            : null;
        }
        function _e(s) {
          const {
              noteParent: r,
              notes: i,
              activeNoteID: a,
              actions: c,
              bStandalonePage: B,
            } = s,
            [f, j] = (0, ki.SP)("NotesListCollapsed", !1),
            o = Ni(),
            wr = (0, hi.Qn)(),
            Tt = (0, Y.W5)(),
            Dt = (0, ui.vn)(Tt.params.noteid || o ? "ActivePage" : "PageList"),
            ii = i.map((mi) => ({
              title:
                mi.title?.length > 0
                  ? mi.title
                  : (0, Ct.we)("#UserGameNotes_Untitled"),
              identifier: mi.id,
              content: (0, b.jsx)(ra, { noteParent: r, note: mi }),
              pageClassName: ei.NotePage,
              hideTitle: !0,
            })),
            ai = Xi(),
            Wi = y.useCallback((mi) => ai(r, mi), [ai, r]),
            ni = hi.TS.IN_STEAMUI
              ? (0, Ct.we)("#UserGameNotes_NotesList")
              : (0, b.jsx)(Ce, { noteParent: r });
          return wr && B
            ? (0, b.jsx)(ui.Bv, {
                title: ni,
                pages: ii,
                className: (0, vi.A)(
                  ei.NotesPagedSettings,
                  o && ei.PinnedView,
                  Dt,
                ),
                page: a,
                onPageRequested: Wi,
                bottomControls: c,
                hideList: f,
                toggleHideList: o || wr ? void 0 : () => j(!f),
              })
            : (0, b.jsx)(ui.O7, {
                title: ni,
                pages: ii,
                className: (0, vi.A)(
                  ei.NotesPagedSettings,
                  o && ei.PinnedView,
                  Dt,
                ),
                page: a,
                onPageRequested: Wi,
                bottomControls: c,
                hideList: f,
                toggleHideList: o || wr ? void 0 : () => j(!f),
              });
        }
        function Ce(s) {
          const { noteParent: r } = s,
            i = re("appid" in r ? r.appid : void 0);
          let a;
          return (
            "appid" in r ? (a = i?.name) : (a = r.shortcut),
            (0, b.jsx)(b.Fragment, {
              children: (0, Ct.we)("#UserGameNotes_NotesForGame", a),
            })
          );
        }
        function ra(s) {
          const { noteParent: r, note: i } = s,
            a = ui.v$(),
            c = Xi(),
            B = y.useCallback(() => c(r), [c, r]),
            f = Ni();
          return (0, b.jsxs)(b.Fragment, {
            children: [
              !f && (0, b.jsx)(ui._Z, { onActivate: B }),
              (0, b.jsx)(Ve, { note: i, hidden: !a }),
            ],
          });
        }
        function Xi(s = !1) {
          const r = (0, hi.Qn)(),
            i = (0, Y.W6)(),
            a = s || r;
          return y.useCallback(
            (c, B, f = a) => {
              let j;
              "appid" in c
                ? (j = G.AppNotes(c.appid, B))
                : (j = G.ShortcutNotes(c.shortcut, B)),
                f
                  ? i.replace(j, i.location.state)
                  : i.push(j, i.location.state);
            },
            [i, a],
          );
        }
        var ta = w(17083),
          ia = w(85599);
        function ea() {
          const { data: s, isLoading: r } = le(),
            i = y.useMemo(
              () =>
                s?.slice().sort((a, c) => c.last_modified - a.last_modified),
              [s],
            );
          return r
            ? (0, b.jsx)(ia.t, { msDelayAppear: 300 })
            : (0, b.jsxs)("div", {
                children: [
                  (0, b.jsx)("h1", {
                    children: (0, Ct.we)("#UserGameNotes_NotesList"),
                  }),
                  (0, b.jsx)("ul", {
                    children: i.map((a) =>
                      (0, b.jsx)(aa, { game: a }, a.appid || a.shortcut_name),
                    ),
                  }),
                ],
              });
        }
        function aa(s) {
          const { game: r } = s;
          return (0, b.jsx)("li", {
            children: (0, b.jsx)(ta.N_, {
              to: Pt(
                r.appid ? { appid: r.appid } : { shortcut: r.shortcut_name },
              ),
              children: r.appid
                ? (0, b.jsx)(na, { appid: r.appid })
                : r.shortcut_name,
            }),
          });
        }
        function na(s) {
          const { appid: r } = s;
          return re(r)?.name;
        }
        function sa(s, r, i = {}) {
          const { bIsPublic: a = !0 } = i,
            c = { unAppID: s, strMachineName: r, bIsPublic: a },
            B = (0, ti.KV)();
          return (0, pi.n)({
            mutationFn: async ({ files: f }) =>
              await ma(
                B,
                c,
                f.map((o) => o.filename),
                async (o) =>
                  !(await Promise.all(f.map((Tt) => Ba(B, c, o, Tt)))).some(
                    (Tt) => !Tt,
                  ),
              ),
          });
        }
        async function ma(s, r, i, a) {
          const c = await ca(s, r, i);
          if (!c) return !1;
          let B = !1;
          try {
            B = await a(c);
          } finally {
            ba(s, r, c, B);
          }
          return !0;
        }
        async function ca(s, r, i) {
          const a = W.w.Init(br);
          a.Body().set_appid(r.unAppID),
            a.Body().set_machine_name(r.strMachineName),
            a.Body().set_files_to_upload(i.slice());
          const c = await zi.BeginAppUploadBatch(s, a);
          if (!c.BSuccess())
            throw `Error in BeginAppUploadBatch: ${c.GetErrorMessage()}`;
          return c.Body().batch_id();
        }
        function ba(s, r, i, a) {
          const c = W.w.Init(Br);
          c.Body().set_appid(r.unAppID),
            c.Body().set_batch_id(i),
            c.Body().set_batch_eresult(a ? At.R : At.zi),
            zi.CompleteAppUploadBatch(s, c);
        }
        async function Ba(s, r, i, a) {
          let c, B;
          a.content instanceof File
            ? (c = await a.content.arrayBuffer())
            : (c = new TextEncoder().encode(a.content).buffer),
            (B = await C.C(c, "SHA-1"));
          const f = await wa(s, r, i, a.filename, c.byteLength, B),
            j = `https://${f.url_host}${f.url_path}`;
          let o = !1;
          try {
            const wr = f.request_headers.map(({ name: Dt, value: ii }) => [
              Dt,
              ii,
            ]);
            o = (
              await fetch(j, {
                method: "PUT",
                headers: wr,
                mode: "cors",
                body: a.content,
              })
            ).ok;
          } catch {}
          return await fa(s, r, a.filename, B, o);
        }
        async function wa(s, r, i, a, c, B) {
          const f = W.w.Init(nr);
          f.Body().set_appid(r.unAppID),
            f.Body().add_platforms_to_sync("All"),
            f.Body().set_upload_batch_id(i),
            f.Body().set_is_public(r.bIsPublic),
            f.Body().set_filename(a),
            f.Body().set_file_size(c),
            f.Body().set_file_sha(B);
          const j = await zi.BeginHTTPUpload(s, f);
          if (!j.BSuccess())
            throw `Error in BeginHTTPUpload: ${j.GetErrorMessage()}`;
          return j.Body().toObject();
        }
        async function fa(s, r, i, a, c) {
          const B = W.w.Init(sr);
          B.Body().set_appid(r.unAppID),
            B.Body().set_transfer_succeeded(c),
            B.Body().set_filename(i),
            B.Body().set_file_sha(a);
          const f = await zi.CommitHTTPUpload(s, B);
          if (!f.BSuccess())
            throw `Error in CommitHTTPUpload: ${f.GetErrorMessage()}`;
          return f.Body().file_committed();
        }
        function la(s) {
          const r = ua();
          return (0, b.jsx)(me, {
            mode: "page",
            store: r,
            children: (0, b.jsxs)(Y.dO, {
              children: [
                (0, b.jsx)(Y.qh, {
                  path: G.List(),
                  children: (0, b.jsx)(ea, {}),
                }),
                (0, b.jsx)(Y.qh, {
                  path: G.AppNotes(":appid", ":noteid?"),
                  children: (0, b.jsx)(De, {}),
                }),
                (0, b.jsx)(Y.qh, {
                  children: (0, b.jsx)(Y.rd, { to: `${G.List()}` }),
                }),
              ],
            }),
          });
        }
        function ua() {
          const s = (0, ti.TR)(),
            { mutateAsync: r } = sa(F.oez, "Steam Community Web Interface", {
              bIsPublic: !0,
            }),
            i = y.useCallback(
              (B, f) => r({ files: [{ filename: B, content: f }] }),
              [r],
            ),
            a = y.useRef({ steamInterface: s, uploadFile: i });
          a.current.uploadFile = i;
          const [c] = y.useState(() => new ae(a.current));
          return c;
        }
      },
      8145: (_t, ri, w) => {
        "use strict";
        w.d(ri, { op: () => C, CS: () => G, vE: () => P, Al: () => ti });
        const b = 0,
          F = 1,
          y = 2,
          Y = 3;
        class ti {
          m_fnAccumulatorFactory;
          m_dictComponents;
          constructor(h, q) {
            h instanceof Map
              ? (this.m_dictComponents = h)
              : (this.m_dictComponents = new Map(Object.entries(h))),
              (this.m_fnAccumulatorFactory = q);
          }
          Parse(h, q, m = !0) {
            const l = e(h || "", m);
            return this.Parse_BuildElements(l, q);
          }
          Parse_BuildElements(h, q) {
            let m = this.m_fnAccumulatorFactory(void 0);
            const l = [],
              u = () => (l.length < 1 ? void 0 : l[l.length - 1]),
              M = this.m_dictComponents,
              g = (O) => !!(O.tag && M.get(O.tag)?.autocloses);
            let z = !1,
              p = !0;
            const K = (O, L) => {
              let J = L.text.toLowerCase();
              if (O && O.node.tag === J && M.get(O.node.tag)) {
                const I = M.get(O.node.tag),
                  V = {
                    tagname: O.node.tag,
                    args: O.node.args,
                    rawargs: O.node.rawargs,
                  },
                  U = q(I.Constructor, V, ...m.GetElements());
                (m = O.accumulator),
                  Array.isArray(U)
                    ? U.forEach((Z) => m.AppendNode(Z))
                    : m.AppendNode(U),
                  (z = !!I.skipFollowingNewline),
                  (p = O.bWrapTextForCopying);
              } else if (O) {
                const I = O.accumulator;
                I.AppendText("[" + O.node.text + "]", !1),
                  m.GetElements().forEach((V) => I.AppendNode(V)),
                  I.AppendText("[/" + L.text + "]", !1),
                  (m = I),
                  (p = O.bWrapTextForCopying);
              }
            };
            for (
              h.forEach((O, L) => {
                if (O.type == F) {
                  const J = z ? O.text.replace(/^[\t\r ]*\n/g, "") : O.text;
                  m.AppendText(J, p), (z = !1);
                } else if (O.type == y) {
                  const J = M.get(O.tag);
                  if (!J) m.AppendText("[" + O.text + "]", l.length == 0);
                  else {
                    const I = u();
                    if (I !== void 0) {
                      const V = M.get(I.node.tag);
                      V &&
                        V.autocloses &&
                        O.tag === I.node.tag &&
                        K(l.pop(), I.node);
                    }
                    l.push({ accumulator: m, node: O, bWrapTextForCopying: p }),
                      (m = this.m_fnAccumulatorFactory(O)),
                      (z = !!J.skipInternalNewline),
                      (p = J.allowWrapTextForCopying ?? !1);
                  }
                } else if (O.type == Y) {
                  let J = O.text.toLowerCase();
                  for (; u() && u().node.tag !== J && g(u().node); ) {
                    const I = l.pop();
                    K(I, I.node);
                  }
                  if (u()?.node.tag == J) {
                    const I = l.pop();
                    K(I, O);
                  } else m.AppendText("[/" + O.text + "]", l.length == 0);
                }
              });
              l.length > 0;
            ) {
              const O = l.pop();
              K(O, O.node);
            }
            return m.GetElements();
          }
        }
        function G(d, h, q = !1) {
          let m = "[" + d;
          h?.[""] && (m += `=${q ? "" + h[""] : Pt("" + h[""])}`);
          for (const l in h) l !== "" && (m += ` ${At(l)}=${Pt("" + h[l])}`);
          return (m += "]"), m;
        }
        function Pt(d) {
          return `"${d.replace(/(\\|"|\])/g, "\\$1")}"`;
        }
        function At(d) {
          return d.replace(/(\\| |\])/g, "\\$1");
        }
        function C(d) {
          return `[/${d}]`;
        }
        function P(d) {
          return d.replace(/(\\|\[)/g, "\\$1");
        }
        function W(d, h, q = b) {
          const { type: m, text: l = "" } = h;
          if (m == y) {
            let u = l.indexOf("=");
            const M = l.indexOf(" ");
            M != -1 && (u == -1 || M < u) && (u = M);
            let g,
              z,
              p = "";
            u > 0
              ? ((g = l.substr(0, u).toLocaleLowerCase()),
                (p = l.substr(u)),
                (z = t(p)))
              : ((z = {}), (g = l.toLocaleLowerCase())),
              d.push({ type: m, text: l, tag: g, args: z, rawargs: p });
          } else m != b && d.push({ type: m, text: l });
          return { type: q, text: "" };
        }
        function n(d) {
          let h = "";
          return (
            d.type == Y ? (h = "[/") : d.type == y && (h = "["),
            { type: F, text: h + (d.text ?? "") }
          );
        }
        function e(d, h) {
          const q = [];
          let m = { type: b, text: "" },
            l = !1,
            u = !1,
            M = !1;
          for (let g = 0; g < d.length; g++) {
            const z = d[g];
            switch (m.type) {
              case b:
                z == "["
                  ? ((m.type = y), (u = !0))
                  : ((m.type = F), z == "\\" && h ? (l = !l) : (m.text += z));
                break;
              case y:
              case Y:
                if (z == "/" && u) (m.type = Y), (m.text = ""), (u = !1);
                else if (z == "[" && !l) (m = W(q, n(m), y)), (u = !0);
                else if (z == "]" && !l) {
                  const p =
                      m.type == y && m.text?.toLocaleLowerCase() == "noparse",
                    K = m.type == Y && m.text?.toLocaleLowerCase() == "noparse";
                  u || (M && !K)
                    ? ((m = n(m)), (m.text += z))
                    : p
                      ? (M = !0)
                      : K && (M = !1),
                    (m = W(q, m)),
                    (u = !1);
                } else
                  z == "\\" && h
                    ? ((m.text += z), (l = !l), (u = !1))
                    : ((m.text += z), (l = !1), (u = !1));
                break;
              case F:
                z == "[" && !l
                  ? ((m = W(q, m, y)), (u = !0))
                  : z == "\\" && h
                    ? (l && (m.text += z), (l = !l))
                    : ((m.text += z), (l = !1));
                break;
            }
          }
          return (
            m.type != b &&
              (m.type == y || m.type == Y
                ? q.push(n(m))
                : q.push({ type: m.type, text: m.text ?? "" })),
            q
          );
        }
        function t(d) {
          if (!d || d.length < 1) return {};
          const h = {};
          let q = "",
            m = "",
            l;
          ((z) => {
            (z[(z.PRE_NAME = 0)] = "PRE_NAME"),
              (z[(z.IN_NAME = 1)] = "IN_NAME"),
              (z[(z.POST_NAME = 2)] = "POST_NAME"),
              (z[(z.IN_VALUE = 3)] = "IN_VALUE"),
              (z[(z.IN_QUOTED_VALUE = 4)] = "IN_QUOTED_VALUE");
          })(l || (l = {}));
          let u = 0,
            M = 0;
          d[0] == "=" && (u = 2);
          let g = !1;
          for (M++; M < d.length; M++) {
            const z = d[M];
            let p = !0,
              K = !1;
            switch (u) {
              case 0:
                if (z == "=") return {};
                if (z == " ") continue;
                u = 1;
                break;
              case 1:
                (z == "=" || z == " ") &&
                  !g &&
                  (z == " " ? ((u = 0), (K = !0)) : (u = 2), (p = !1));
                break;
              case 2:
                z == " "
                  ? ((u = 0), (p = !1), (K = !0))
                  : z == '"'
                    ? ((u = 4), (p = !1))
                    : (u = 3);
                break;
              case 3:
              case 4:
                ((z == " " && u != 4 && !g) || (z == '"' && u == 4 && !g)) &&
                  ((u = 0), (p = !1), (K = !0));
                break;
            }
            if (p)
              if (z == "\\" && !g) g = !0;
              else if (((g = !1), u == 1)) q += z;
              else if (u == 3 || u == 4) m += z;
              else
                throw new Error(
                  "Not expecting to accumulate buffer in state " + u,
                );
            K && ((h[q] = m), (q = ""), (m = ""));
          }
          return u != 0 && (h[q] = m), h;
        }
      },
      29950: (_t, ri, w) => {
        "use strict";
        w.d(ri, { J: () => b });
        function b(F) {
          if (!F) return F;
          const y = F.trim(),
            Y = y
              .replace(/^[\u0000-\u0020]+/, "")
              .replace(/[\t\n\r]/g, "")
              .toLowerCase();
          return Y.startsWith("javascript:") ||
            Y.startsWith("data:") ||
            Y.startsWith("vbscript:")
            ? ""
            : y;
        }
      },
      99931: (_t, ri, w) => {
        "use strict";
        w.d(ri, { W: () => n });
        var b = w(7850),
          F = w(57053),
          y = w(52893),
          Y = w(90626),
          ti = w(18210),
          G = w(29950),
          Pt = w(12293),
          At = w(19565),
          C = w(37341),
          P = w.n(C),
          W = w(65217);
        const n = Y.memo(function (h) {
          const {
              linkMarkType: q,
              onURLPasted: m,
              schema: l,
              onClickURL: u = t,
            } = h,
            M = Y.useRef(u);
          M.current = u;
          const [g, z] = Y.useState(),
            [p, K] = Y.useState(),
            [O, L] = Y.useState(),
            [J, I] = (0, Pt.E)(l),
            V = Y.useMemo(
              () =>
                new y.k_({
                  props: {
                    handleClickOn(Z, X, v, Q, $, H) {
                      if (H && ($.ctrlKey || $.button == 1)) {
                        const N = v
                            .resolve(X - Q)
                            .marks()
                            .find((R) => R.type == q),
                          S = N && (0, G.J)(N.attrs.href);
                        if (S)
                          return M.current(S, $.view), $.preventDefault(), !0;
                      }
                      return !1;
                    },
                    handleKeyDown(Z, X) {
                      return X.key == "k" &&
                        (X.metaKey || X.ctrlKey) &&
                        !X.shiftKey &&
                        !X.altKey
                        ? (J(Z), !0)
                        : !1;
                    },
                    clipboardTextParser(Z, X, v, Q) {
                      const $ = (0, W.F)(l, Z, q, m);
                      return $ && new F.Ji(F.FK.from($), X.start(), X.end());
                    },
                    handlePaste(Z, X, v) {
                      let Q = [];
                      if (
                        (v.content.descendants((N, S) => {
                          if (N.isText) {
                            const R = (0, W.F)(l, N.text, q, m);
                            R && Q.push({ node: N, pos: S, rgNodes: R });
                          }
                        }),
                        !Q.length)
                      )
                        return !1;
                      let $ = Z.state.tr;
                      $.selection.empty || $.deleteSelection();
                      let H = $.selection.from,
                        k = 0;
                      for (const N of Q) {
                        const { node: S, pos: R, rgNodes: _ } = N,
                          A = v.content.cut(k, R).append(F.FK.from(_));
                        $.insert(H, A), (H += A.size + 2), (k = R + S.nodeSize);
                      }
                      return (
                        $.insert(H, v.content.cut(k)),
                        $.scrollIntoView(),
                        Z.dispatch($),
                        !0
                      );
                    },
                    handleDOMEvents: {
                      mouseover: (Z, X) => {
                        for (
                          let v = X.target;
                          v && v != X.currentTarget;
                          v = v.parentElement
                        )
                          if (
                            v.nodeName == "A" &&
                            "getBoundingClientRect" in v
                          ) {
                            const Q = v.getBoundingClientRect();
                            z(Q.left + Q.width / 2), K(Q.bottom + 2), L(v);
                            return;
                          }
                        L(void 0);
                      },
                      mouseleave: (Z, X) => (L(void 0), !1),
                    },
                  },
                }),
              [q, J, m, l],
            );
          (0, At.c$)(V);
          let U = null;
          return (
            O &&
              g &&
              p &&
              (U = (0, b.jsx)(e, {
                top: p,
                left: g,
                href: O.getAttribute("href"),
              })),
            (0, b.jsxs)(b.Fragment, { children: [U, I] })
          );
        });
        function e(d) {
          const { top: h, left: q, href: m } = d,
            [l, u] = Y.useState(0),
            M = Y.useRef(null);
          Y.useLayoutEffect(() => {
            u(M.current.getBoundingClientRect().width);
          }, [h, q, m]);
          const g = { top: `${h}px`, left: `${Math.max(q - l / 2, 12)}px` };
          return (0, b.jsxs)("div", {
            className: C.Hover,
            style: g,
            ref: M,
            children: [
              (0, b.jsx)("div", { className: C.Link, children: m }),
              (0, b.jsx)("div", {
                className: C.LinkHelp,
                children: (0, ti.we)("#UserGameNotes_ClickToOpenLink"),
              }),
            ],
          });
        }
        function t(d, h) {
          h.open(d);
        }
      },
      66243: (_t, ri, w) => {
        "use strict";
        w.d(ri, { Oh: () => P, n9: () => At, sP: () => ti });
        var b = w(7850),
          F = w(24660),
          y = w(44375),
          Y = w.n(y);
        function ti(n) {
          const { children: e, ...t } = n;
          return (0, b.jsx)(F.fu, {
            className: y.GreenButton,
            type: "button",
            ...t,
            children: (0, b.jsx)("span", { children: e }),
          });
        }
        function G(n) {
          const { children: e, ...t } = n;
          return jsx(FocusableButton, {
            className: styles.GreenButton,
            type: "submit",
            ...t,
            children: jsx("span", { children: e }),
          });
        }
        function Pt(n) {
          const { children: e, ...t } = n;
          return jsx(FocusableAnchor, {
            className: styles.GreenButton,
            ...t,
            children: jsx("span", { children: e }),
          });
        }
        function At(n) {
          const { children: e, ...t } = n;
          return (0, b.jsx)(F.fu, {
            className: y.BlueButton,
            type: "button",
            ...t,
            children: (0, b.jsx)("span", { children: e }),
          });
        }
        function C(n) {
          const { children: e, ...t } = n;
          return jsx(FocusableAnchor, {
            className: styles.BlueButton,
            ...t,
            children: jsx("span", { children: e }),
          });
        }
        function P(n) {
          const { children: e, ...t } = n;
          return (0, b.jsx)(F.fu, {
            className: y.GreyButton,
            type: "button",
            ...t,
            children: (0, b.jsx)("span", { children: e }),
          });
        }
        function W(n) {
          const { children: e, ...t } = n;
          return jsx(FocusableAnchor, {
            className: styles.GreyButton,
            ...t,
            children: jsx("span", { children: e }),
          });
        }
      },
      95987: (_t, ri, w) => {
        "use strict";
        w.d(ri, { y: () => e });
        var b = w(35038),
          F = w(21196),
          y = w(57589),
          Y = w(36174),
          ti = w(27066),
          G = Object.defineProperty,
          Pt = Object.getOwnPropertyDescriptor,
          At = (t, d, h, q) => {
            for (
              var m = q > 1 ? void 0 : q ? Pt(d, h) : d, l = t.length - 1, u;
              l >= 0;
              l--
            )
              (u = t[l]) && (m = (q ? u(d, h, m) : u(m)) || m);
            return q && m && G(d, h, m), m;
          };
        const C = new y.wd("ReactUsageReporting").Debug,
          P = 100,
          W = Y.Kp.PerMinute * 1e3;
        class n {
          m_strProduct;
          m_strVersion;
          m_transport = null;
          m_mapRoutes = new Map();
          m_mapComponents = new Map();
          m_mapActions = new Map();
          m_reportCount = 0;
          m_bInitialized = !1;
          Init(d, h, q) {
            (this.m_bInitialized = !0),
              (this.m_strProduct = d),
              (this.m_strVersion = h),
              (this.m_transport = q),
              this.ScheduleSend();
          }
          ScheduleSend() {
            setTimeout(() => this.CheckSend(), W);
          }
          CheckSend() {
            this.m_reportCount > 0 && this.SendMetrics(), this.ScheduleSend();
          }
          ReportInternal(d, h) {
            h.has(d) || h.set(d, 0),
              h.set(d, h.get(d) + 1),
              this.m_reportCount++,
              this.ShouldSendMetricsImmediately() && this.SendMetrics();
          }
          ReportRouteMatch(d) {
            C("Route match: " + d), this.ReportInternal(d, this.m_mapRoutes);
          }
          ReportTrackedComponent(d) {
            C("Tracked component: " + d),
              this.ReportInternal(d, this.m_mapComponents);
          }
          ReportTrackedAction(d) {
            C("User action: " + d), this.ReportInternal(d, this.m_mapActions);
          }
          ShouldSendMetricsImmediately() {
            return this.m_reportCount >= P;
          }
          SendMetrics() {
            if (!this.m_bInitialized) return;
            const d = b.w.Init(F.bc);
            d.Body().set_product(this.m_strProduct),
              d.Body().set_version(this.m_strVersion),
              this.m_mapRoutes.forEach((h, q) => {
                let m = new F.N4();
                m.set_route(q), m.set_count(h), d.Body().add_routes(m);
              }),
              this.m_mapComponents.forEach((h, q) => {
                let m = new F.Zd();
                m.set_component(q), m.set_count(h), d.Body().add_components(m);
              }),
              this.m_mapActions.forEach((h, q) => {
                let m = new F.Ys();
                m.set_action(q), m.set_count(h), d.Body().add_actions(m);
              }),
              this.m_mapRoutes.clear(),
              this.m_mapComponents.clear(),
              this.m_mapActions.clear(),
              (this.m_reportCount = 0),
              F._5.ReportReactUsage(this.m_transport, d);
          }
          get version() {
            return this.m_strVersion;
          }
          get product() {
            return this.m_strProduct;
          }
        }
        At([ti.o], n.prototype, "CheckSend", 1);
        const e = new n();
      },
      35184: (_t, ri, w) => {
        "use strict";
        w.d(ri, { R: () => Y });
        var b = w(7850),
          F = w(90626),
          y = w(72739);
        function Y(G) {
          const {
              id: Pt,
              role: At,
              visible: C = !0,
              className: P,
              keepMounted: W = !1,
              expandDirection: n = "height",
              msAnimationDuration: e = 250,
              children: t,
            } = G,
            { style: d, active: h, refDiv: q } = ti(C, n, e);
          return !C && !h && !W
            ? null
            : (0, b.jsx)("div", {
                id: Pt,
                role: At,
                className: P,
                ref: q,
                style: d,
                inert: !C,
                children: t,
              });
        }
        function ti(G, Pt = "height", At = 250) {
          const C = F.useRef(null),
            P = F.useRef(!0),
            [W, n] = F.useState("idle"),
            [e, t] = F.useState(G ? {} : { [Pt]: "0px", overflow: "hidden" }),
            [d, h] = F.useState(G);
          return (
            F.useLayoutEffect(() => {
              P.current || n("start"), G && h(G);
            }, [G]),
            F.useLayoutEffect(
              () => (
                (P.current = !1),
                () => {
                  P.current = !0;
                }
              ),
              [],
            ),
            F.useLayoutEffect(() => {
              const m = C.current,
                l = Pt == "height" ? "scrollHeight" : "scrollWidth",
                u = () => {
                  y.unstable_batchedUpdates(() => {
                    t(G ? {} : { [Pt]: "0px", overflow: "hidden" }),
                      n("idle"),
                      h(G);
                  });
                };
              if (W == "start") {
                const M = m[l];
                M == 0
                  ? u()
                  : (t((g) => ({
                      [Pt]: G ? "0px" : `${M}px`,
                      ...g,
                      overflow: "hidden",
                    })),
                    n("active"));
              } else if (W == "active") {
                m.scrollTop;
                const M = m[l];
                return (
                  t({ overflow: "hidden", [Pt]: G ? `${M}px` : "0px" }),
                  m.addEventListener("transitionend", u),
                  () => {
                    m.removeEventListener("transitionend", u);
                  }
                );
              }
            }, [W, G]),
            {
              style: { ...e, transition: `${Pt} ${At}ms` },
              active: d,
              refDiv: C,
            }
          );
        }
      },
      95603: (_t, ri, w) => {
        "use strict";
        w.d(ri, { DB: () => Pt, PW: () => C, Ss: () => ti, hk: () => G });
        var b = w(7850),
          F = w(90626),
          y = w(72739),
          Y = w(82734);
        function ti(P, W) {
          const n = F.useRef(void 0),
            e = F.useCallback(
              (h) => {
                h.currentTarget.files.length > 0 &&
                  (P(h.currentTarget.files), (h.currentTarget.value = ""));
              },
              [P],
            ),
            t = F.useCallback(() => n.current.click(), []);
          return [
            y.createPortal(
              (0, b.jsx)("form", {
                onSubmit: At,
                style: { display: "none" },
                children: (0, b.jsx)("input", {
                  ...W,
                  type: "file",
                  ref: n,
                  onChange: e,
                }),
              }),
              window.document.body,
            ),
            t,
          ];
        }
        function G(P) {
          const [W, n] = F.useState(!1),
            e = F.useCallback((m) => {
              ((m.dataTransfer.files && m.dataTransfer.files[0]) ||
                (m.dataTransfer.types && m.dataTransfer.types[0] == "Files")) &&
                n(!0);
            }, []),
            t = F.useCallback((m) => {
              Y.NO(m) && n(!1);
            }, []),
            d = F.useCallback(() => n(!1), []),
            h = W ? At : void 0,
            q = F.useCallback(
              (m) => {
                m.dataTransfer.files?.length &&
                  (P(m.dataTransfer.files, m),
                  m.preventDefault(),
                  m.stopPropagation()),
                  n(!1);
              },
              [P],
            );
          return [
            {
              onDragEnter: e,
              onDragLeave: t,
              onDragEnd: d,
              onDragOver: h,
              onDrop: q,
            },
            W,
          ];
        }
        async function Pt(P, W = 1e3) {
          return await new Promise((n, e) => {
            const t = new Image();
            (t.src = P),
              (t.onload = () => n("success")),
              (t.onerror = () => n("error")),
              W > 0 && window.setTimeout(() => n("timeout"), W);
          });
        }
        function At(P) {
          P.preventDefault();
        }
        function C(P) {
          switch (P.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            default:
              const W = P.name.match(/(?<=\.)[^.]+$/);
              return W ? W[0] : void 0;
          }
        }
      },
      33645: (_t) => {
        _t.exports = {
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
      37341: (_t) => {
        _t.exports = {
          Hover: "_1lo3nIamSX1TzzE4TlhFXA",
          Link: "_1ds3uh7ntoekPm635F2Ziv",
          LinkHelp: "_3Vn5X8bzPjWx5p545nkB6k",
        };
      },
      44375: (_t) => {
        _t.exports = {
          GreenButton: "_23fSnYfnMQqkgm3ROkJhrO",
          GreyButton: "_15dbpkIdbzeDJlZYQEhn1d",
          BlueButton: "_14GZWzJgooP0mbfTvEQnjA",
        };
      },
      27491: (_t) => {
        _t.exports = {
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
        };
      },
      5310: (_t) => {
        _t.exports = { narrowWidth: "500px" };
      },
    },
  ]);
})();
