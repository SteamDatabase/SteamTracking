/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [9352],
  {
    78430: (e) => {
      e.exports = { FeedbackText: "_1xRt0l_W6ami9_cnLrxvfj" };
    },
    5695: (e, t, r) => {
      "use strict";
      r.d(t, { DP: () => m, Gb: () => n, iS: () => c, sM: () => o });
      var i = r(90626),
        a = r(78430),
        s = r.n(a);
      function n(e) {
        const t = e.getValue();
        return t?.length > 0
          ? i.createElement(m, { text: t, regExp: /\r\n|\r|\n/ })
          : "";
      }
      function m(e) {
        const { text: t, regExp: r } = e;
        if (!t) return i.createElement(i.Fragment, null);
        const a = t.split(r);
        return i.createElement(
          "div",
          { className: s().FeedbackText },
          a.map((e, t) =>
            i.createElement(
              "span",
              { key: t },
              e,
              t < a.length - 1 && i.createElement("br", null),
            ),
          ),
        );
      }
      function o(e) {
        return Number.parseInt(e.getValue()) ? "yes" : "no";
      }
      function c(e) {
        return Number.parseInt(e.getValue()).toLocaleString();
      }
    },
    2516: (e, t, r) => {
      "use strict";
      r.d(t, { K: () => a });
      var i = r(9161);
      function a(e, t, r) {
        const a = [],
          s = r.map((e) => e.header);
        a.push(s);
        for (const e of t) {
          const t = [];
          for (const i of r) {
            const r = e[i.accessorKey];
            t.push(null != r ? r.toString() : "");
          }
          a.push(t);
        }
        i.g.WriteCSVToFile(a, e);
      }
    },
    21711: (e, t, r) => {
      "use strict";
      r.d(t, { N6: () => B, PQ: () => d, Z4: () => g });
      var i = r(41735),
        a = r.n(i),
        s = r(90626),
        n = r(20194),
        m = r(78327),
        o = r(29233),
        c = r(62490);
      class l {
        m_mapPartnerToContactInfo = new Map();
        m_mapPromisePartnerLoading = new Map();
        async FetchValvePartnerContacts(e) {
          const t =
              m.TS.PARTNER_BASE_URL + "actions/ajaxgetpartnervalvecontacts",
            r = { sessionid: m.TS.SESSIONID, strPartnerIDs: e.join(",") },
            i = await a().get(t, { params: r, withCredentials: !0 });
          return 200 == i?.status && 1 == i?.data.success
            ? (i.data.contacts.forEach((e) => {
                this.m_mapPartnerToContactInfo.has(e.partnerid) ||
                  this.m_mapPartnerToContactInfo.set(e.partnerid, []),
                  this.m_mapPartnerToContactInfo.get(e.partnerid).push(e);
              }),
              i.data.contacts)
            : [];
        }
        async LoadValvePartnerContact(e) {
          return e
            ? this.m_mapPartnerToContactInfo.has(e)
              ? this.m_mapPartnerToContactInfo.get(e)
              : (this.m_mapPromisePartnerLoading.has(e) ||
                  this.m_mapPromisePartnerLoading.set(
                    e,
                    this.InternalLoadValvePartnerContact(e),
                  ),
                this.m_mapPromisePartnerLoading.get(e))
            : [];
        }
        async InternalLoadValvePartnerContact(e) {
          return this.FetchValvePartnerContacts([e]);
        }
        GetPartnerContact(e) {
          return this.m_mapPartnerToContactInfo.get(e);
        }
        GetPartnerContactAccountsByFilter(e, t, r) {
          const i = this.m_mapPartnerToContactInfo.get(e);
          if (i?.length > 0) {
            const e = i
              .filter((e) => !e.appid || e.appid == t)
              .filter(
                (e) =>
                  !r ||
                  "any" == r ||
                  ("business" == r && e.is_business_contact) ||
                  ("tech" == r && e.is_tech_contact),
              )
              .map((e) => new o.b2(e.steamid).GetAccountID());
            return c.Ew(e);
          }
          return [];
        }
        static s_Singleton;
        static Get() {
          return (
            l.s_Singleton ||
              ((l.s_Singleton = new l()),
              l.s_Singleton.Init(),
              "dev" == m.TS.WEB_UNIVERSE &&
                (window.g_PartnerValveContactStore = l.s_Singleton)),
            l.s_Singleton
          );
        }
        Init() {
          const e = (0, m.Fd)(
            "partner_valve_contact_list",
            "application_config",
          );
          e &&
            e.forEach((e) => {
              this.m_mapPartnerToContactInfo.has(e.partnerid)
                ? this.m_mapPartnerToContactInfo.get(e.partnerid).push(e)
                : this.m_mapPartnerToContactInfo.set(e.partnerid, [e]);
            });
        }
      }
      function u(e) {
        return ["PartnerValveContactByPartnerID", e];
      }
      function d(e, t) {
        return e.prefetchQuery({
          queryKey: u(t),
          queryFn: async () => l.Get().LoadValvePartnerContact(t),
        });
      }
      function B(e, t, r) {
        return l.Get().GetPartnerContactAccountsByFilter(e, t, r);
      }
      function g(e, t, r) {
        const [i, a] = (0, s.useState)(null),
          m = (function (e) {
            const { data: t, isLoading: r } = (0, n.I)({
              queryKey: u(e),
              queryFn: async () => l.Get().LoadValvePartnerContact(e),
            });
            return r ? null : t;
          })(e);
        return (
          (0, s.useEffect)(() => {
            m && a(l.Get().GetPartnerContactAccountsByFilter(e, t, r));
          }, [m, t, r, e]),
          i
        );
      }
    },
    38861: (e, t, r) => {
      "use strict";
      r.d(t, { J_: () => i, st: () => a });
      const i = {
          name: "cookieSettings",
          options: {
            secure: !0,
            httpOnly: !1,
            path: "/",
            sameSite: "none",
            maxAge: 31536e6,
          },
          preferenceControls: { isTechnicallyNecessary: !0 },
        },
        a = {
          name: "steamLoginSpoofSteamID",
          options: { path: "/", secure: !0 },
          preferenceControls: { isTechnicallyNecessary: !0 },
        };
    },
    91933: (e, t, r) => {
      "use strict";
      function i(e) {
        if (!document.cookie) return;
        const t = document.cookie.match("(^|; )" + e.name + "=([^;]*)");
        return t && t[2] ? decodeURIComponent(t[2]) : void 0;
      }
      r.d(t, { j_: () => i });
    },
    85737: (e, t, r) => {
      "use strict";
      r.d(t, {
        Ku: () => o,
        Rl: () => w,
        VI: () => y,
        Vj: () => l,
        ZK: () => i,
        g9: () => S,
        q3: () => B,
      });
      var i,
        a = r(80613),
        s = r.n(a),
        n = r(89068),
        m = r(56545);
      class o extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.clan_event_gid || n.Sg(o.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  clan_event_gid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  steamid: {
                    n: 2,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  registration_group_id: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  registration_session_id: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  guest_count: {
                    n: 5,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  jsondata: { n: 7, br: n.qM.readString, bw: n.gp.writeString },
                  skip_email: { n: 8, br: n.qM.readBool, bw: n.gp.writeBool },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(o.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_UpdateRegistration_Request";
        }
      }
      class c extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new c();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_UpdateRegistration_Response";
        }
      }
      class l extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.clan_event_gid || n.Sg(l.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  clan_event_gid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_GetAvailability_Request";
        }
      }
      class u extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.availability || n.Sg(u.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: { availability: { n: 1, c: d, r: !0, q: !0 } },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_GetAvailability_Response";
        }
      }
      class d extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.group_id || n.Sg(d.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  group_id: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  session_id: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  guest_count: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_GetAvailability_Response_Session";
        }
      }
      class B extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.clan_event_gid || n.Sg(B.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  clan_event_gid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  steamid: {
                    n: 2,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_GetRegistrations_Request";
        }
      }
      class g extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.registrations || n.Sg(g.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: { registrations: { n: 1, c: b, r: !0, q: !0 } },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_GetRegistrations_Response";
        }
      }
      class b extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.group_id || n.Sg(b.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  group_id: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  session_id: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  steamid: {
                    n: 3,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  guests_registered: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  jsondata: { n: 5, br: n.qM.readString, bw: n.gp.writeString },
                  rt_attendance_marked: {
                    n: 6,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  attendance_count: {
                    n: 7,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  guests_attendance: {
                    n: 8,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_GetRegistrations_Response_Registration";
        }
      }
      class _ extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.clan_event_gid || n.Sg(_.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  clan_event_gid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  steamid: {
                    n: 2,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_EmailInvitees_Request";
        }
      }
      class M extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.num_emailed || n.Sg(M.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  num_emailed: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  num_skipped: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = n.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_EmailInvitees_Response";
        }
      }
      class y extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.clan_event_gid || n.Sg(y.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  clan_event_gid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  steamid: {
                    n: 2,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CParterMeetSteam_TestFireEmails_Request";
        }
      }
      class p extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.sessionids || n.Sg(p.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  sessionids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CParterMeetSteam_TestFireEmails_Response";
        }
      }
      class w extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.rt_oldest_date || n.Sg(w.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  rt_oldest_date: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_GetSaleEventOrganizers_Request";
        }
      }
      class f extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.accountid || n.Sg(f.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  clan_event_gids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.qM.readFixed64String,
                    pbr: n.qM.readPackedFixed64String,
                    bw: n.gp.writeRepeatedFixed64String,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleEventOrganizerInfo";
        }
      }
      class z extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.info || n.Sg(z.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: { info: { n: 1, c: f, r: !0, q: !0 } },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_GetSaleEventOrganizers_Response";
        }
      }
      class S extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.accountids || n.Sg(S.M()),
            a.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  accountids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                  partnerids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = n.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_GetBatchPartnerEmailAndName_Request";
        }
      }
      class h extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.accountid || n.Sg(h.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  partnerid: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  realname: { n: 3, br: n.qM.readString, bw: n.gp.writeString },
                  email: { n: 4, br: n.qM.readString, bw: n.gp.writeString },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerEmailAndName";
        }
      }
      class R extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.info || n.Sg(R.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: { info: { n: 1, c: h, r: !0, q: !0 } },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = n.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMeetSteam_GetBatchPartnerEmailAndName_Response";
        }
      }
      !(function (e) {
        (e.UpdateRegistration = function (e, t) {
          return e.SendMsg(
            "PartnerMeetSteam.UpdateRegistration#1",
            (0, m.I8)(o, t),
            c,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetAvailability = function (e, t) {
            return e.SendMsg(
              "PartnerMeetSteam.GetAvailability#1",
              (0, m.I8)(l, t),
              u,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetRegistrations = function (e, t) {
            return e.SendMsg(
              "PartnerMeetSteam.GetRegistrations#1",
              (0, m.I8)(B, t),
              g,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.EmailInvitees = function (e, t) {
            return e.SendMsg(
              "PartnerMeetSteam.EmailInvitees#1",
              (0, m.I8)(_, t),
              M,
              { ePrivilege: 4 },
            );
          }),
          (e.TestFireEmails = function (e, t) {
            return e.SendMsg(
              "PartnerMeetSteam.TestFireEmails#1",
              (0, m.I8)(y, t),
              p,
              { ePrivilege: 4 },
            );
          }),
          (e.GetSaleEventOrganizers = function (e, t) {
            return e.SendMsg(
              "PartnerMeetSteam.GetSaleEventOrganizers#1",
              (0, m.I8)(w, t),
              z,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetBatchPartnerEmailAndName = function (e, t) {
            return e.SendMsg(
              "PartnerMeetSteam.GetBatchPartnerEmailAndName#1",
              (0, m.I8)(S, t),
              R,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(i || (i = {}));
    },
    65689: (e, t, r) => {
      "use strict";
      r.d(t, { Nl: () => i, V4: () => D, j3: () => L });
      var i,
        a = r(80613),
        s = r.n(a),
        n = r(89068),
        m = r(56545);
      class o extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.total_playtime_seconds || n.Sg(o.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  total_playtime_seconds: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  total_sessions: {
                    n: 20,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  vr_sessions: {
                    n: 21,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  deck_sessions: {
                    n: 22,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  controller_sessions: {
                    n: 23,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  linux_sessions: {
                    n: 24,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  macos_sessions: {
                    n: 25,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  windows_sessions: {
                    n: 26,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  total_playtime_percentagex100: {
                    n: 27,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  vr_playtime_percentagex100: {
                    n: 28,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  deck_playtime_percentagex100: {
                    n: 29,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  controller_playtime_percentagex100: {
                    n: 30,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  linux_playtime_percentagex100: {
                    n: 31,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  macos_playtime_percentagex100: {
                    n: 32,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  windows_playtime_percentagex100: {
                    n: 33,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(o.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytimeStats";
        }
      }
      class c extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.appid || n.Sg(c.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytimeStreakGame";
        }
      }
      class l extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.longest_consecutive_days || n.Sg(l.M()),
            a.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  longest_consecutive_days: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  rtime_start: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  streak_games: { n: 3, c, r: !0, q: !0 },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytimeStreak";
        }
      }
      class u extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.overall_rank || n.Sg(u.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  overall_rank: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  vr_rank: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  deck_rank: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  controller_rank: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  linux_rank: {
                    n: 5,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  mac_rank: { n: 6, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  windows_rank: {
                    n: 7,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytimeRanks";
        }
      }
      class d extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.appid || n.Sg(d.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  stats: { n: 2, c: o },
                  playtime_streak: { n: 3, c: l },
                  playtime_ranks: { n: 4, c: u },
                  rtime_first_played: {
                    n: 5,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  relative_game_stats: { n: 6, c: o },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGamePlaytimeStats";
        }
      }
      class B extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.appid || n.Sg(B.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  new_this_year: {
                    n: 2,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  rtime_first_played_lifetime: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  demo: { n: 4, br: n.qM.readBool, bw: n.gp.writeBool },
                  playtest: { n: 5, br: n.qM.readBool, bw: n.gp.writeBool },
                  played_during_early_access: {
                    n: 6,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  played_vr: { n: 7, br: n.qM.readBool, bw: n.gp.writeBool },
                  played_deck: { n: 8, br: n.qM.readBool, bw: n.gp.writeBool },
                  played_controller: {
                    n: 9,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  played_linux: {
                    n: 10,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  played_mac: { n: 11, br: n.qM.readBool, bw: n.gp.writeBool },
                  played_windows: {
                    n: 12,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  total_playtime_percentagex100: {
                    n: 13,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  total_sessions: {
                    n: 14,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  rtime_release_date: {
                    n: 15,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  parent_appid: {
                    n: 16,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameSummary";
        }
      }
      class g extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.appid || n.Sg(g.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  total_playtime_percentagex100: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  relative_playtime_percentagex100: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSimpleGameSummary";
        }
      }
      class b extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.appid || n.Sg(b.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  rank: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  relative_playtime_percentagex100: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRank";
        }
      }
      class _ extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.category || n.Sg(_.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  category: { n: 1, br: n.qM.readString, bw: n.gp.writeString },
                  rankings: { n: 2, c: b, r: !0, q: !0 },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CRankingCategory";
        }
      }
      class M extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.overall_ranking || n.Sg(M.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  overall_ranking: { n: 1, c: _ },
                  vr_ranking: { n: 2, c: _ },
                  deck_ranking: { n: 3, c: _ },
                  controller_ranking: { n: 4, c: _ },
                  linux_ranking: { n: 5, c: _ },
                  mac_ranking: { n: 6, c: _ },
                  windows_ranking: { n: 7, c: _ },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = n.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameRankings";
        }
      }
      class y extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.total_achievements || n.Sg(y.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  total_achievements: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  total_games_with_achievements: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  total_rare_achievements: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserPlaytimeSummaryStats";
        }
      }
      class p extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.stats || n.Sg(p.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { stats: { n: 1, c: w, r: !0, q: !0 } },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserTagStats";
        }
      }
      class w extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.tag_id || n.Sg(w.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  tag_id: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  tag_weight: { n: 2, br: n.qM.readFloat, bw: n.gp.writeFloat },
                  tag_weight_pre_selection: {
                    n: 3,
                    br: n.qM.readFloat,
                    bw: n.gp.writeFloat,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserTagStats_Tag";
        }
      }
      class f extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.screenshots_shared || n.Sg(f.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  screenshots_shared: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  gifts_sent: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  loyalty_reactions: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  written_reviews: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  guides_submitted: {
                    n: 5,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  workshop_contributions: {
                    n: 6,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  badges_earned: {
                    n: 7,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  friends_added: {
                    n: 8,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  forum_posts: {
                    n: 9,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  workshop_subscriptions: {
                    n: 10,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  guide_subscribers: {
                    n: 11,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  workshop_subscribers: {
                    n: 12,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  games_played_pct: {
                    n: 13,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  achievements_pct: {
                    n: 14,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  game_streak_pct: {
                    n: 15,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  games_played_avg: {
                    n: 16,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  achievements_avg: {
                    n: 17,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  game_streak_avg: {
                    n: 18,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytimeByNumbers";
        }
      }
      class z extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.total_stats || n.Sg(z.M()),
            a.Message.initialize(this, e, 0, -1, [2, 5, 6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  total_stats: { n: 1, c: o },
                  games: { n: 2, c: d, r: !0, q: !0 },
                  playtime_streak: { n: 3, c: l },
                  months: { n: 5, c: S, r: !0, q: !0 },
                  game_summary: { n: 6, c: B, r: !0, q: !0 },
                  demos_played: {
                    n: 7,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  game_rankings: { n: 8, c: M },
                  playtests_played: {
                    n: 9,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  summary_stats: { n: 10, c: y },
                  substantial: {
                    n: 11,
                    d: !0,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  tag_stats: { n: 12, c: p },
                  by_numbers: { n: 13, c: f },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserPlaytimeStats";
        }
      }
      class S extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.rtime_month || n.Sg(S.M()),
            a.Message.initialize(this, e, 0, -1, [4, 6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  rtime_month: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  stats: { n: 2, c: o },
                  appid: { n: 4, c: d, r: !0, q: !0 },
                  relative_monthly_stats: { n: 5, c: o },
                  game_summary: { n: 6, c: g, r: !0, q: !0 },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = n.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMonthlyPlaytimeStats";
        }
      }
      class h extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.account_id || n.Sg(h.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  account_id: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  year: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  playtime_stats: { n: 3, c: z },
                  privacy_state: {
                    n: 4,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserYearInReviewStats";
        }
      }
      class R extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.from_dbo || n.Sg(R.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  from_dbo: { n: 1, br: n.qM.readBool, bw: n.gp.writeBool },
                  overall_time_ms: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  dbo_load_ms: {
                    n: 3,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  query_execution_ms: {
                    n: 4,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  message_population_ms: {
                    n: 5,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  dbo_lock_load_ms: {
                    n: 6,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = n.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CYearInReviewPerformanceStats";
        }
      }
      class F extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.statid || n.Sg(F.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  statid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  fieldid: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  achievement_name_internal: {
                    n: 3,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  rtime_unlocked: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = n.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAchievementDetails";
        }
      }
      class U extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.appid || n.Sg(U.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  achievements: { n: 2, c: F, r: !0, q: !0 },
                  all_time_unlocked_achievements: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  unlocked_more_in_future: {
                    n: 4,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = n.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGameAchievements";
        }
      }
      class W extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.median_achievements || n.Sg(W.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  median_achievements: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  median_games: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  median_streak: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = n.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGlobalPercentiles";
        }
      }
      class j extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.new_releases || n.Sg(j.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  new_releases: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  recent_releases: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  classic_releases: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  recent_cutoff_year: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = n.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGlobalPlaytimeDistribution";
        }
      }
      class T extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.games_played || n.Sg(T.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  games_played: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  unlocked_achievements: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  longest_streak: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = n.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPreviousYIRSummaryData";
        }
      }
      class q extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.steamid || n.Sg(q.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  year: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  force_regenerate: {
                    n: 3,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  access_source: {
                    n: 4,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  fetch_previous_year_summary: {
                    n: 5,
                    d: !1,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = n.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearInReview_Request";
        }
      }
      class v extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.stats || n.Sg(v.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  stats: { n: 1, c: h },
                  performance_stats: { n: 2, c: R },
                  percentiles: { n: 3, c: W },
                  distribution: { n: 4, c: j },
                  previous_year_summary: { n: 5, c: T },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = n.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearInReview_Response";
        }
      }
      class O extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.steamid || n.Sg(O.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  year: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  privacy_state: {
                    n: 3,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = n.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_SetUserSharingPermissions_Request";
        }
      }
      class I extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.privacy_state || n.Sg(I.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  privacy_state: {
                    n: 1,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = n.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_SetUserSharingPermissions_Response";
        }
      }
      class C extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.steamid || n.Sg(C.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  year: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = n.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserSharingPermissions_Request";
        }
      }
      class x extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.privacy_state || n.Sg(x.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  privacy_state: {
                    n: 1,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  generated_value: {
                    n: 2,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  steamid: {
                    n: 3,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  rt_privacy_updated: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = n.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserSharingPermissions_Response";
        }
      }
      class P extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.steamid || n.Sg(P.M()),
            a.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  year: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  appids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                  total_only: { n: 4, br: n.qM.readBool, bw: n.gp.writeBool },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = n.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearAchievements_Request";
        }
      }
      class A extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.game_achievements || n.Sg(A.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  game_achievements: { n: 1, c: U, r: !0, q: !0 },
                  total_achievements: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  total_rare_achievements: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  total_games_with_achievements: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = n.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearAchievements_Response";
        }
      }
      class k extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.steamid || n.Sg(k.M()),
            a.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  year: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  appids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = n.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearScreenshots_Request";
        }
      }
      class N extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.apps || n.Sg(N.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: { apps: { n: 1, c: E, r: !0, q: !0 } },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = n.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearScreenshots_Response";
        }
      }
      class G extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.image_url || n.Sg(G.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  image_url: {
                    n: 1,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  preview_url: {
                    n: 2,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  image_width: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  image_height: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  maybe_inappropriate_sex: {
                    n: 5,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  maybe_inappropriate_violence: {
                    n: 6,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  visibility: {
                    n: 7,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  spoiler_tag: { n: 8, br: n.qM.readBool, bw: n.gp.writeBool },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = n.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearScreenshots_Response_Screenshot";
        }
      }
      class E extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.appid || n.Sg(E.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  screenshots: { n: 2, c: G, r: !0, q: !0 },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = n.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp";
        }
      }
      class D extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.steamid || n.Sg(D.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  gid: {
                    n: 2,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  type: { n: 3, br: n.qM.readEnum, bw: n.gp.writeEnum },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = n.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserActionData_Request";
        }
      }
      class Y extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.jsondata || n.Sg(Y.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  jsondata: { n: 1, br: n.qM.readString, bw: n.gp.writeString },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = n.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserActionData_Response";
        }
      }
      class L extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.steamid || n.Sg(L.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  gids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.qM.readFixed64String,
                    pbr: n.qM.readPackedFixed64String,
                    bw: n.gp.writeRepeatedFixed64String,
                  },
                  type: { n: 3, br: n.qM.readEnum, bw: n.gp.writeEnum },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = n.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetMultipleUserActionData_Request";
        }
      }
      class K extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.entries || n.Sg(K.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: { entries: { n: 1, c: V, r: !0, q: !0 } },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = n.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetMultipleUserActionData_Response";
        }
      }
      class V extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.gid || n.Sg(V.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  gid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  jsondata: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                  steamid: {
                    n: 3,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = n.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetMultipleUserActionData_Response_Entry";
        }
      }
      class J extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.gid || n.Sg(J.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  gid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  type: { n: 2, br: n.qM.readEnum, bw: n.gp.writeEnum },
                  count: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  last_account_index: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = n.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetAllUserActionDataForType_Request";
        }
      }
      class $ extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.entries || n.Sg($.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  entries: { n: 1, c: H, r: !0, q: !0 },
                  last_account_index: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = n.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT($.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetAllUserActionDataForType_Response";
        }
      }
      class H extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.gid || n.Sg(H.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  gid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  jsondata: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                  steamid: {
                    n: 3,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = n.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetAllUserActionDataForType_Response_Entry";
        }
      }
      class Z extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.steamid || n.Sg(Z.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  year: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  return_private: {
                    n: 3,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = n.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetFriendsSharedYearInReview_Request";
        }
      }
      class Q extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.steamid || n.Sg(Q.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  privacy_state: {
                    n: 3,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  rt_privacy_updated: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  privacy_override: {
                    n: 5,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = n.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendSharedYearInView";
        }
      }
      class X extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.friend_shares || n.Sg(X.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  friend_shares: { n: 1, c: Q, r: !0, q: !0 },
                  year: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = n.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetFriendsSharedYearInReview_Response";
        }
      }
      class ee extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.steamid || n.Sg(ee.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  year: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  language: { n: 3, br: n.qM.readString, bw: n.gp.writeString },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = n.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearInReviewShareImage_Request";
        }
      }
      class te extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.images || n.Sg(te.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: { images: { n: 1, c: re, r: !0, q: !0 } },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = n.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearInReviewShareImage_Response";
        }
      }
      class re extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.name || n.Sg(re.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  name: { n: 1, br: n.qM.readString, bw: n.gp.writeString },
                  url_path: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = n.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearInReviewShareImage_Response_Image";
        }
      }
      class ie extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.steamid || n.Sg(ie.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = n.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetYIRCurrentMonthlySummary_Request";
        }
      }
      class ae extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.year || n.Sg(ae.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  year: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  month: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  games_played: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  top_played_appid: {
                    n: 5,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  longest_streak_days: {
                    n: 6,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  rt_streak_start: {
                    n: 7,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  achievements: {
                    n: 8,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  screenshots: {
                    n: 9,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = n.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetYIRCurrentMonthlySummary_Response";
        }
      }
      !(function (e) {
        (e.GetUserYearInReview = function (e, t) {
          return e.SendMsg(
            "SaleFeature.GetUserYearInReview#1",
            (0, m.I8)(q, t),
            v,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetUserSharingPermissions = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetUserSharingPermissions#1",
              (0, m.I8)(C, t),
              x,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.SetUserSharingPermissions = function (e, t) {
            return e.SendMsg(
              "SaleFeature.SetUserSharingPermissions#1",
              (0, m.I8)(O, t),
              I,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetUserYearAchievements = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetUserYearAchievements#1",
              (0, m.I8)(P, t),
              A,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetUserYearScreenshots = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetUserYearScreenshots#1",
              (0, m.I8)(k, t),
              N,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetUserActionData = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetUserActionData#1",
              (0, m.I8)(D, t),
              Y,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetMultipleUserActionData = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetMultipleUserActionData#1",
              (0, m.I8)(L, t),
              K,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetAllUserActionDataForType = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetAllUserActionDataForType#1",
              (0, m.I8)(J, t),
              $,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetFriendsSharedYearInReview = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetFriendsSharedYearInReview#1",
              (0, m.I8)(Z, t),
              X,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetUserYearInReviewShareImage = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetUserYearInReviewShareImage#1",
              (0, m.I8)(ee, t),
              te,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetYIRCurrentMonthlySummary = function (e, t) {
            return e.SendMsg(
              "SaleFeature.GetYIRCurrentMonthlySummary#1",
              (0, m.I8)(ie, t),
              ae,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          });
      })(i || (i = {}));
    },
    50304: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => w, V: () => z });
      var i = r(56545),
        a = r(85737),
        s = r(65689),
        n = r(71944),
        m = r(44654),
        o = r(29233);
      function c(e) {
        try {
          if (!e || "string" != typeof e) return null;
          const t = e.split(".");
          if (3 !== t.length) return null;
          const [r, i] = t,
            a = u(r),
            s = u(i);
          return a && s ? { header: JSON.parse(a), body: JSON.parse(s) } : null;
        } catch (e) {
          return (
            console.error(`Exception while attempting to decode token: "${e}"`),
            null
          );
        }
      }
      function l(e) {
        return e ? e.body.exp : 0;
      }
      function u(e) {
        return atob(e.replace(/-/g, "+").replace(/_/g, "/"));
      }
      var d = r(91933),
        B = r(38861);
      class g {
        m_ServiceTransport;
        m_AnonymousServiceTransport;
        m_strWebAPIBaseURL;
        m_webApiAccessToken = "";
        m_bJsonMode = !1;
        m_bJWTToken = !1;
        m_fnRequestNewAccessToken;
        m_refreshAccessTokenPromise;
        m_dtLastExpireCheck = 0;
        m_strSpoofedSteamID = "";
        constructor(e, t = "", r = !1, i) {
          (this.m_strWebAPIBaseURL = e),
            (this.m_webApiAccessToken = t),
            (this.m_bJsonMode = r),
            (this.m_fnRequestNewAccessToken = i),
            (this.m_bJWTToken = null != c(t)),
            (this.m_ServiceTransport = {
              SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
                bSendAuth: !0,
              }),
              SendNotification: this.SendNotification.bind(this, {
                bSendAuth: !0,
              }),
              MakeReady: this.MakeReady.bind(this),
            }),
            (this.m_AnonymousServiceTransport = {
              SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
                bSendAuth: !1,
              }),
              SendNotification: this.SendNotification.bind(this, {
                bSendAuth: !1,
              }),
              MakeReady: this.MakeReady.bind(this),
            });
          const a = (0, d.j_)(B.st);
          a && /[0-9]+/g.test(a) && (this.m_strSpoofedSteamID = a);
        }
        WaitUntilLoggedOn() {
          return Promise.resolve();
        }
        GetServerRTime32() {
          return Number(new Date());
        }
        get steamid() {
          return new o.b2();
        }
        RTime32ToDate(e) {
          return new Date(1e3 * e);
        }
        MakeReady() {
          return Promise.resolve({ result: 1, message: "ready" });
        }
        GetServiceTransport() {
          return this.m_ServiceTransport;
        }
        GetWebAPIAccessToken() {
          return this.m_webApiAccessToken;
        }
        GetAnonymousServiceTransport() {
          return this.m_AnonymousServiceTransport;
        }
        async SendMsgAndAwaitResponse(e, t, r, a, s) {
          let n,
            o = 0;
          try {
            if (this.m_bJWTToken && e.bSendAuth) {
              const e = Date.now() / 1e3;
              this.m_refreshAccessTokenPromise
                ? await this.m_refreshAccessTokenPromise
                : this.m_fnRequestNewAccessToken &&
                  e - this.m_dtLastExpireCheck > 60 &&
                  ((this.m_dtLastExpireCheck = e),
                  (function (e) {
                    const t = l(e),
                      r = (function (e) {
                        return e ? e.body.nbf || e.body.iat : 0;
                      })(e);
                    let i = 900;
                    const a = t - r;
                    return (
                      a < 1350 && (i = a <= 60 ? 0 : 60),
                      l(e) - i < Date.now() / 1e3
                    );
                  })(c(this.m_webApiAccessToken)) &&
                    ((this.m_refreshAccessTokenPromise =
                      this.m_fnRequestNewAccessToken(this.m_webApiAccessToken)),
                    (this.m_webApiAccessToken =
                      await this.m_refreshAccessTokenPromise),
                    (this.m_refreshAccessTokenPromise = void 0)));
            }
            const u = await this.Send(e, t, r, s);
            if (((o = u.status), 200 == o))
              if (
                ((n = i.w.Init(a, 147)),
                u.headers &&
                  (u.headers.get("x-eresult") &&
                    n.Hdr().set_eresult(parseInt(u.headers.get("x-eresult"))),
                  u.headers.get("x-error_message") &&
                    n
                      .Hdr()
                      .set_error_message(u.headers.get("x-error_message"))),
                this.m_bJsonMode)
              )
                n.SetBodyJSON(await u.json());
              else {
                const e = new m.pV(await u.arrayBuffer());
                n.ReadBodyFromBuffer(a, e);
              }
            0;
          } catch (e) {}
          const u = 401 === o;
          if (!n) {
            const e = u ? "Unauthorized" : void 0;
            n = this.CreateFailedMsgProtobuf(a, 3, e);
          }
          return (
            u &&
              !this.m_refreshAccessTokenPromise &&
              this.m_bJWTToken &&
              e.bSendAuth &&
              this.m_fnRequestNewAccessToken &&
              ((this.m_refreshAccessTokenPromise =
                this.m_fnRequestNewAccessToken(this.m_webApiAccessToken)),
              (this.m_webApiAccessToken =
                await this.m_refreshAccessTokenPromise),
              (this.m_refreshAccessTokenPromise = void 0)),
            n
          );
        }
        SendNotification(e, t, r, i) {
          return this.Send(e, t, r, i), !0;
        }
        Send(e, t, r, i) {
          const a = this.CreateWebAPIURL(t),
            s = r.SerializeBody(),
            m = n.fromByteArray(s),
            o = i.eWebAPIKeyRequirement,
            c = 0 == i.ePrivilege && 1 == o,
            l = {},
            u = new URLSearchParams();
          e.bSendAuth ||
            1 == o ||
            console.error(
              `Attempting to invoke service ${t} without auth, but auth is required.`,
            ),
            this.m_webApiAccessToken &&
              e.bSendAuth &&
              !c &&
              (u.append("access_token", this.m_webApiAccessToken),
              this.m_strSpoofedSteamID &&
                u.append("spoof_steamid", this.m_strSpoofedSteamID));
          if (i.bConstMethod)
            return (
              u.append("origin", self.origin),
              this.m_bJsonMode
                ? u.append("input_json", JSON.stringify(r.Body().toObject()))
                : u.append("input_protobuf_encoded", m),
              fetch(`${a}?${u.toString()}`, l)
            );
          {
            const e = new FormData();
            return (
              this.m_bJsonMode
                ? e.append("input_json", JSON.stringify(r.Body().toObject()))
                : e.append("input_protobuf_encoded", m),
              fetch(`${a}?${u.toString()}`, { ...l, method: "POST", body: e })
            );
          }
        }
        CreateWebAPIURL(e) {
          const t = e.match(/([^\.]+)\.(.+)#(\d+)/);
          if (!t || 4 != t.length) throw `Invalid service name: ${e}`;
          return `${this.m_strWebAPIBaseURL}I${t[1]}Service/${t[2]}/v${t[3]}`;
        }
        CreateFailedMsgProtobuf(e, t, r) {
          const a = i.w.Init(e);
          return (
            a.Hdr().set_eresult(2),
            a.Hdr().set_transport_error(t),
            r && a.Hdr().set_error_message(r),
            a
          );
        }
      }
      var b = r(8527);
      var _ = r(20194),
        M = r(17720),
        y = r(26161),
        p = r(14771);
      function w(e, t, r) {
        return (0, _.I)({
          queryKey: f(t, r),
          queryFn: async () => {
            const t = i.w.Init(a.Vj);
            t.Body().set_clan_event_gid(r);
            const s = await a.ZK.GetAvailability(e, t);
            return s.BSuccess()
              ? s
                  .Body()
                  .availability()
                  .map((e) => e.toObject())
              : [];
          },
          enabled: (0, y.H)() == t,
          staleTime: 10 * p.Kp.PerMinute,
        });
      }
      const f = (e, t) => ["useMeetSteamGetAvailability", e, t];
      function z(e, t, r, a) {
        return (0, _.I)({
          queryKey: S(t, r, a),
          queryFn: async () => {
            const e = i.w.Init(s.V4);
            e.Body().set_type(6),
              e
                .Body()
                .set_steamid(M.b.InitFromAccountID(a).ConvertTo64BitString()),
              e.Body().set_gid(r);
            const t = (function () {
                const e = window;
                e.g_wapitRefreshEnabled = !1;
                const t = "function" == typeof e.g_wapitRefresh;
                let r;
                return (
                  !b.TS.IN_CLIENT &&
                    t &&
                    (r = () =>
                      new Promise((t, r) => {
                        e.g_wapitRefresh((e) => {
                          t(e);
                        }),
                          window.setTimeout(() => r("Refresh Timeout"), 1e4);
                      })),
                  new g(b.TS.WEBAPI_BASE_URL, e.g_wapit, !1, r)
                );
              })(),
              n = await s.Nl.GetUserActionData(t.GetServiceTransport(), e);
            return n.BSuccess() && n.Body().jsondata()
              ? JSON.parse(n.Body().jsondata())
              : {};
          },
          enabled: (0, y.H)() == t && !!a,
        });
      }
      const S = (e, t, r) => ["useMeetSteamGetRegistrationDetails", e, t, r];
    },
    79645: (e, t, r) => {
      "use strict";
      r.d(t, { S: () => l, c: () => c });
      var i = r(41735),
        a = r.n(i),
        s = r(20194),
        n = r(68797),
        m = r(30470),
        o = r(78327);
      function c(e) {
        const { data: t, isLoading: r } = (0, s.I)({
          queryKey: ["PartnerInfoList", e],
          queryFn: () =>
            (async function (e) {
              const t = { accountid: e, origin: self.origin };
              let r = `${m.TS.COMMUNITY_BASE_URL}actions/ajaxgetuserpartnerinfo`;
              "partnerweb" == (0, o.yK)() &&
                (r = `${m.TS.PARTNER_BASE_URL}actions/ajaxgetuserpartnerinfo`);
              const i = await a().get(r, { params: t, withCredentials: !0 });
              if (
                !i ||
                200 != i.status ||
                1 != i.data?.success ||
                !i.data?.partners
              )
                throw `Load single user partner info failed ${((0, n.H))(i).strErrorMsg}`;
              return i.data.partners;
            })(e),
        });
        return r ? null : t;
      }
      function l(e, t) {
        const r = c(e);
        return r?.find((e) => e.partnerid === t);
      }
    },
    65: (e, t, r) => {
      "use strict";
      function i(e) {
        const t = new Date(e.getTime());
        return t.setHours(0, 0, 0, 0), t;
      }
      function a(e) {
        const t = new Date(e.getTime());
        return t.setDate(1), t.setHours(0, 0, 0, 0), t;
      }
      function s(e, t) {
        const r = new Date(e);
        return r.setDate(e.getDate() + t), r;
      }
      function n(e, t) {
        return e.reduce((e, r) => {
          const i = t(r),
            a = Math.floor(i.getTime() / 1e3),
            s = e.get(a) || [];
          return e.set(a, [...s, r]), e;
        }, new Map());
      }
      r.d(t, { J2: () => a, bv: () => n, kO: () => s, xi: () => i });
    },
  },
]);
