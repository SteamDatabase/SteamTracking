/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6317],
  {
    58685: (e, t, r) => {
      r.d(t, {
        fZ: () => _,
        iA: () => g,
        lJ: () => o,
        pW: () => y,
        xq: () => d,
      });
      var i = r(10059),
        a = r(39087),
        s = r(79545);
      const n = i.Message;
      class c extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.partnerid || a.aR(c.M()),
            n.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  partnerid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  type: { n: 2, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  status: { n: 3, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  due_date: { n: 4, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  email_days_before_due: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  gid: {
                    n: 6,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  store_item_type: {
                    n: 7,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  store_item_id: {
                    n: 8,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  discount_event_id: {
                    n: 9,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  required_rights: {
                    n: 11,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  description_jsondata: {
                    n: 10,
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
        static toObject(e, t) {
          return a.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDeadline";
        }
      }
      class m extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.partnerid || a.aR(m.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  partnerid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  start_date: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  end_date: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  include_complete: {
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
        static toObject(e, t) {
          return a.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDeadline_GetDeadlinesForPartner_Request";
        }
      }
      class l extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.deadlines || a.aR(l.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: { deadlines: { n: 1, c: u, r: !0, q: !0 } },
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
        static toObject(e, t) {
          return a.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDeadline_GetDeadlinesForPartner_Response";
        }
      }
      class u extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.deadlineid || a.aR(u.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  deadlineid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  data: { n: 2, c },
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
        static toObject(e, t) {
          return a.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDeadline_GetDeadlinesForPartner_Response_Result";
        }
      }
      class o extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.state || a.aR(o.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  state: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  accountid: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  key_json: { n: 3, br: a.FE.readString, bw: a.Xc.writeString },
                  partnerid: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  rtime_create: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  rtime_validity: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  dismiss_id: {
                    n: 7,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
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
        static toObject(e, t) {
          return a.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDismissPinData";
        }
      }
      class d extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.dismiss_list || a.aR(d.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: { dismiss_list: { n: 1, c: o, r: !0, q: !0 } },
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
        static toObject(e, t) {
          return a.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDismiss_CreateDismiss_Request";
        }
      }
      class B extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.dismiss_list || a.aR(B.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: { dismiss_list: { n: 1, c: o, r: !0, q: !0 } },
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
        static toObject(e, t) {
          return a.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDismiss_CreateDismiss_Response";
        }
      }
      class _ extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.partnerid || a.aR(_.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  partnerid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  accountid: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  rtime_after: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
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
        static toObject(e, t) {
          return a.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDismiss_GetDismissTimeRange_Request";
        }
      }
      class b extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.dismiss_list || a.aR(b.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { dismiss_list: { n: 1, c: o, r: !0, q: !0 } },
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
        static toObject(e, t) {
          return a.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDismiss_GetDismissTimeRange_Response";
        }
      }
      class y extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.dismiss_id || a.aR(y.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  dismiss_id: {
                    n: 7,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
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
        static toObject(e, t) {
          return a.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return a.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDismiss_DeleteDismiss_Request";
        }
      }
      class p extends n {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new p();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerDismiss_DeleteDismiss_Response";
        }
      }
      var f, g;
      !(function (e) {
        e.GetDeadlinesForPartner = function (e, t) {
          return e.SendMsg(
            "PartnerDeadline.GetDeadlinesForPartner#1",
            (0, s.MD)(m, t),
            l,
            { bConstMethod: !0, ePrivilege: 8 },
          );
        };
      })(f || (f = {})),
        (function (e) {
          (e.CreateDismiss = function (e, t) {
            return e.SendMsg(
              "PartnerDismiss.CreateDismiss#1",
              (0, s.MD)(d, t),
              B,
              { ePrivilege: 1 },
            );
          }),
            (e.GetDismissTimeRange = function (e, t) {
              return e.SendMsg(
                "PartnerDismiss.GetDismissTimeRange#1",
                (0, s.MD)(_, t),
                b,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.DeleteDismiss = function (e, t) {
              return e.SendMsg(
                "PartnerDismiss.DeleteDismiss#1",
                (0, s.MD)(y, t),
                p,
                { ePrivilege: 1 },
              );
            });
        })(g || (g = {}));
    },
    28858: (e, t, r) => {
      r.d(t, { G4: () => n, LA: () => s, tI: () => m, vQ: () => l });
      var i = r(80002),
        a = r(20020);
      function s(e) {
        return "appid" in e
          ? `app_${e.appid}`
          : "packageid" in e
            ? `package_${e.packageid}`
            : "bundleid" in e
              ? `bundle_${e.bundleid}`
              : "tagid" in e
                ? `tag_${e.tagid}`
                : "creatorid" in e
                  ? `creator_${e.creatorid}`
                  : "hubcategoryid" in e
                    ? `hubcategory_${e.hubcategoryid}`
                    : ((0, a.Z)(e, "Unknown store item id type"), "");
      }
      function n(e, t) {
        switch (e) {
          case 0:
            return `app_${t}`;
          case 1:
            return `package_${t}`;
          case 2:
            return `bundle_${t}`;
          case 4:
            return `tag_${t}`;
          case 5:
            return `creator_${t}`;
          case 6:
            return `hubcategory_${t}`;
          case 3:
          case -1:
            return "";
          default:
            return (
              (0, a.Z)(e, `Unknown EStoreItemType ${e} ${(0, i.Iu)(e)} `), ""
            );
        }
      }
      const c = /^(app|package|bundle|mtx|tag|creator|hubcategory)_(\d*)$/;
      function m(e) {
        const t = e.match(c);
        if (t)
          switch (t[1]) {
            case "app":
              return { appid: parseInt(t[2]) };
            case "package":
              return { packageid: parseInt(t[2]) };
            case "bundle":
              return { bundleid: parseInt(t[2]) };
            case "tag":
              return { tagid: parseInt(t[2]) };
            case "creator":
              return { creatorid: parseInt(t[2]) };
            case "hubcategory":
              return { hubcategoryid: parseInt(t[2]) };
          }
        (0, a.X)(!1, `Failed to parse StoreItemID ${e}`);
      }
      function l(e) {
        const t = e.match(c);
        if (t)
          switch (t[1]) {
            case "app":
              return { item_type: 0, id: parseInt(t[2]) };
            case "package":
              return { item_type: 1, id: parseInt(t[2]) };
            case "bundle":
              return { item_type: 2, id: parseInt(t[2]) };
            case "tag":
              return { item_type: 4, id: parseInt(t[2]) };
            case "creator":
              return { item_type: 5, id: parseInt(t[2]) };
            case "hubcategory":
              return { item_type: 6, id: parseInt(t[2]) };
          }
        return { item_type: -1, id: t ? parseInt(t[2]) : 0 };
      }
    },
    14725: (e, t, r) => {
      r.d(t, { p: () => u });
      var i = r(79545),
        a = r(80002),
        s = r(73799),
        n = r.n(s),
        c = r(28858),
        m = r(38071);
      r(44922);
      function l(e, t) {
        t.Body().set_context(
          (function (e) {
            let t = new a.WJ();
            e.bUsePartnerAPI || t.set_country_code(e.country);
            t.set_language(e.language),
              e.realm != m.IN.k_ESteamRealmUnknown &&
                t.set_steam_realm(e.realm);
            return t;
          })(e),
        );
      }
      function u(e, t, r) {
        return new (n())(async (r) => {
          const s = new Set(),
            n = {};
          if (
            (r.forEach((e) => {
              const [t, r] = ((i = "|"), e.split(i));
              var i;
              s.add(t),
                "top_tags" == r ? (n.include_tag_count = 10) : r && (n[r] = !0);
            }),
            n.include_included_items)
          ) {
            const { include_included_items: e, ...t } = n;
            n.included_item_data_request = t;
          }
          const m = i.gA.Init(a.eK);
          l(t, m),
            (function (e, t) {
              e.Body().set_data_request(a.Qn.fromObject(t));
            })(m, n),
            s.forEach((e) => {
              const t = (0, c.tI)(e);
              t && m.Body().add_ids(a.oY.fromObject(t));
            });
          const u = await a.VJ.GetItems(e, m),
            o = new Map();
          return (
            u
              .Body()
              .store_items()
              .forEach((e) => {
                o.set((0, c.G4)(e.item_type(), e.id()), e.toObject());
              }),
            r.map((e) => {
              const t = e.split("|")[0],
                r = o.get(t);
              return r || { ...(0, c.vQ)(t), success: 2 };
            })
          );
        }, r);
      }
    },
  },
]);
