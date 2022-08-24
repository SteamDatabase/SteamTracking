/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [2584],
  {
    58114: (t, e, r) => {
      r.d(e, { gA: () => c, lq: () => a });
      var i = r(33019),
        n = (r(26149), r(3389), r(36039), r(39799)),
        s = r(76188);
      class a {
        constructor(t, e, r, s, a) {
          if (s)
            (this.m_eMsg = s.m_eMsg),
              (this.m_bValid = s.m_bValid),
              this.m_bValid &&
                ((this.m_netPacket = s.m_netPacket),
                (this.m_cubHeader = s.m_cubHeader),
                (this.m_header = s.m_header),
                this.InitForType(r));
          else {
            if (((this.m_header = new n.Cu(null)), (this.m_bValid = !0), e))
              if (
                ((this.m_netPacket = e),
                this.m_netPacket.SeekGetHead(),
                (this.m_eMsg = this.m_netPacket.GetUint32()),
                2147483648 & this.m_eMsg)
              ) {
                (this.m_eMsg = 2147483647 & this.m_eMsg),
                  (this.m_cubHeader = this.m_netPacket.GetUint32());
                try {
                  n.Cu.deserializeBinaryFromReader(
                    this.m_header,
                    new i.BinaryReader(
                      this.m_netPacket.GetPacket(),
                      this.m_netPacket.TellGet(),
                      this.m_cubHeader
                    )
                  ),
                    this.m_netPacket.SeekGetCurrent(this.m_cubHeader),
                    r && this.InitForType(r);
                } catch (t) {
                  console.error("Exception deserializing protobuf", t),
                    (this.m_bValid = !1);
                }
              } else this.m_bValid = !1;
            else t && (this.m_eMsg = t), r && (this.m_body = new r());
            a && this.m_header.set_jobid_target(a.Hdr().jobid_target());
          }
        }
        static InstallErrorReportingStore(t) {
          this.sm_ErrorReportingStore = t;
        }
        static InitHeaderFromPacket(t) {
          return new a(void 0, t);
        }
        InitForType(t) {
          if (((this.m_body = new t()), this.m_netPacket)) {
            this.m_netPacket.SeekGetHead(8 + this.m_cubHeader);
            try {
              t.deserializeBinaryFromReader(
                this.m_body,
                new i.BinaryReader(
                  this.m_netPacket.GetPacket(),
                  this.m_netPacket.TellGet(),
                  this.m_netPacket.GetCountBytesRemaining()
                )
              );
            } catch (t) {
              this.m_bValid = !1;
              const e = a.sm_ErrorReportingStore,
                r = `Exception parsing protobuf message body of type ${this.m_eMsg}.  Definitions may be out of sync with server version.`;
              e &&
                e.ReportError(new Error(r), {
                  bIncludeMessageInIdentifier: !0,
                }),
                console.warn(r),
                console.log(t.stack || t);
            }
          }
        }
        BIsValid() {
          return this.m_bValid;
        }
        Body() {
          return this.m_body;
        }
        SetBodyJSON(t) {
          (t.toObject = () => t), (this.m_body = t);
        }
        Hdr() {
          return this.m_header;
        }
        GetEMsg() {
          return this.m_eMsg;
        }
        SetEMsg(t) {
          this.m_eMsg = t;
        }
        GetEResult() {
          return this.Hdr().eresult();
        }
        Serialize() {
          let t = this.m_header.serializeBinary(),
            e = this.m_body.serializeBinary(),
            r = 2147483648 | this.m_eMsg,
            i = new Uint8Array(8 + t.length + e.length),
            n = new s.At(i);
          return (
            n.PutUint32(r),
            n.PutUint32(t.length),
            n.PutBytes(t),
            n.PutBytes(e),
            i
          );
        }
        SerializeBody() {
          let t = this.m_body.serializeBinary(),
            e = new Uint8Array(t.length);
          return new s.At(e).PutBytes(t), e;
        }
        DEBUG_ToObject() {
          return {};
        }
        DEBUG_LogToConsole() {
          0;
        }
      }
      class c extends a {
        constructor(t, e = 0, r, i) {
          super(e, r, t, i);
        }
        static InitFromPacket(t, e) {
          return new c(t, 0, e);
        }
        static InitFromMsg(t, e) {
          return new c(t, void 0, void 0, e);
        }
        static Init(t, e) {
          return new c(t, e);
        }
        Body() {
          return super.Body();
        }
        SetBodyFields(t) {
          for (let e in t)
            Array.isArray(t[e])
              ? this.Body()[`add_${e}`] &&
                t[e].forEach((t) => {
                  this.Body()[`add_${e}`](t);
                })
              : this.Body()[`set_${e}`] && this.Body()[`set_${e}`](t[e]);
        }
      }
    },
    76188: (t, e, r) => {
      r.d(e, { At: () => i });
      class i {
        constructor(t, e = 0, r) {
          (this.m_nOffset = e || 0),
            t instanceof Uint8Array || t instanceof DataView
              ? ((this.m_nLength = r || t.byteLength - this.m_nOffset),
                (this.m_nOffset += t.byteOffset),
                (this.m_viewPacket = new DataView(
                  t.buffer,
                  this.m_nOffset,
                  this.m_nLength
                )))
              : ((this.m_nLength = r || t.byteLength - this.m_nOffset),
                (this.m_viewPacket = new DataView(
                  t,
                  this.m_nOffset,
                  this.m_nLength
                ))),
            (this.m_rgubPacket = new Uint8Array(
              this.m_viewPacket.buffer,
              this.m_viewPacket.byteOffset,
              this.m_viewPacket.byteLength
            )),
            (this.m_iGet = 0),
            (this.m_iPut = 0);
        }
        TellGet() {
          return this.m_iGet + this.m_viewPacket.byteOffset;
        }
        GetPacket() {
          return this.m_viewPacket.buffer;
        }
        GetUint8() {
          return this.m_viewPacket.getUint8(this.m_iGet++);
        }
        GetUint32(t = !0) {
          let e = this.m_viewPacket.getUint32(this.m_iGet, t);
          return (this.m_iGet += 4), e;
        }
        SeekGetHead(t = 0) {
          this.m_iGet = t || 0;
        }
        SeekGetCurrent(t) {
          this.m_iGet += t;
        }
        TellPut() {
          return this.m_iPut + this.m_viewPacket.byteOffset;
        }
        TellMaxPut() {
          return this.m_viewPacket.byteLength;
        }
        PutUint8(t) {
          this.m_viewPacket.setUint8(this.m_iPut++, t);
        }
        PutUint32(t, e = !0) {
          this.m_viewPacket.setUint32(this.m_iPut, t, e), (this.m_iPut += 4);
        }
        PutBytes(t) {
          this.m_rgubPacket.set(t, this.m_iPut), (this.m_iPut += t.length);
        }
        SeekPut(t) {
          this.m_iPut += t;
        }
        GetCountBytesRemaining() {
          return this.m_viewPacket.byteLength - this.m_iGet;
        }
      }
    },
    3389: (t, e, r) => {
      r.d(e, { K: () => c });
      var i = r(43720),
        n = r.n(i),
        s = r(26149),
        a = r(90666);
      class c {
        constructor(t = 0, e, r, i) {
          t instanceof c
            ? (this.m_ulSteamID = t.m_ulSteamID)
            : "string" == typeof t
            ? (this.m_ulSteamID = n().fromString(t, !0))
            : e && r && void 0 !== i
            ? this.SetFromComponents(t, i, r, e)
            : (this.m_ulSteamID = t ? n().fromNumber(t, !0) : n().UZERO);
        }
        static InitFromAccountID(t) {
          return new c(Number(t), a.De.EUNIVERSE, 1, s.QS);
        }
        static InitFromClanID(t) {
          return new c(Number(t), a.De.EUNIVERSE, 7, 0);
        }
        GetAccountID() {
          return this.m_ulSteamID.getLowBitsUnsigned();
        }
        GetInstance() {
          return 1048575 & this.m_ulSteamID.getHighBitsUnsigned();
        }
        GetAccountType() {
          return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
        }
        GetUniverse() {
          return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
        }
        ConvertTo64BitString() {
          return this.m_ulSteamID.toString();
        }
        Render() {
          switch (this.GetAccountType()) {
            case 0:
              return (
                "[I:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
              );
            case 7:
              return (
                "[g:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
              );
            case 4:
              return (
                "[A:" +
                this.GetUniverse() +
                ":" +
                this.GetAccountID() +
                ":" +
                this.GetInstance() +
                "]"
              );
            case 3:
              return (
                "[G:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
              );
            case 2:
              return (
                "[M:" +
                this.GetUniverse() +
                ":" +
                this.GetAccountID() +
                ":" +
                this.GetInstance() +
                "]"
              );
            case 5:
              return (
                "[P:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
              );
            case 6:
              return (
                "[C:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
              );
            default:
              return (
                "[U:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
              );
          }
        }
        BIsValid() {
          let t = this.GetAccountType();
          if (t <= 0 || t >= 11) return !1;
          let e = this.GetUniverse();
          if (e <= 0 || e >= 5) return !1;
          if (1 == t) {
            if (0 == this.GetAccountID() || this.GetInstance() > s.YO)
              return !1;
          } else if (7 == t) {
            if (0 == this.GetAccountID() || 0 != this.GetInstance()) return !1;
          } else if (3 == t && 0 == this.GetAccountID()) return !1;
          return !0;
        }
        BIsIndividualAccount() {
          return 1 == this.GetAccountType();
        }
        BIsClanAccount() {
          return 7 == this.GetAccountType();
        }
        SetAccountID(t) {
          this.m_ulSteamID = new (n())(
            t,
            this.m_ulSteamID.getHighBitsUnsigned(),
            !0
          );
        }
        SetInstance(t) {
          this.SetFromComponents(
            this.GetAccountID(),
            t,
            this.GetAccountType(),
            this.GetUniverse()
          );
        }
        SetAccountType(t) {
          this.SetFromComponents(
            this.GetAccountID(),
            this.GetInstance(),
            t,
            this.GetUniverse()
          );
        }
        SetUniverse(t) {
          this.SetFromComponents(
            this.GetAccountID(),
            this.GetInstance(),
            this.GetAccountType(),
            t
          );
        }
        SetFromComponents(t, e, r, i) {
          let s = ((255 & i) << 24) + ((15 & r) << 20) + (1048575 & e),
            a = 4294967295 & t;
          this.m_ulSteamID = new (n())(a, s, !0);
        }
      }
    },
    36039: (t, e, r) => {
      var i = r(33019);
      r(40110);
      i.Message;
    },
    39799: (t, e, r) => {
      r.d(e, { Cu: () => c, VJ: () => o, j7: () => a, uV: () => u });
      var i = r(33019),
        n = r(40110);
      const s = i.Message;
      class a extends s {
        constructor(t = null) {
          super(),
            a.prototype.v4 || n.aR(a.M()),
            s.initialize(this, t, 0, -1, void 0, null);
        }
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
                fields: {
                  v4: { n: 1, br: n.FE.readFixed32, bw: n.Xc.writeFixed32 },
                  v6: { n: 2, br: n.FE.readBytes, bw: n.Xc.writeBytes },
                },
              }),
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = n.Bh(a.M())), a.sm_mbf;
        }
        toObject(t = !1) {
          return a.toObject(t, this);
        }
        static toObject(t, e) {
          return n.TA(a.M(), t, e);
        }
        static fromObject(t) {
          return n.aD(a.M(), t);
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new a();
          return a.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return n.F(a.MBF(), t, e);
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          n.l2(a.M(), t, e);
        }
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CMsgIPAddress";
        }
      }
      class c extends s {
        constructor(t = null) {
          super(),
            c.prototype.steamid || n.aR(c.M()),
            s.initialize(this, t, 0, -1, [27], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  client_sessionid: {
                    n: 2,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  routing_appid: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  jobid_source: {
                    n: 10,
                    d: "18446744073709551615",
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  jobid_target: {
                    n: 11,
                    d: "18446744073709551615",
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  target_job_name: {
                    n: 12,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  seq_num: { n: 24, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  eresult: {
                    n: 13,
                    d: 2,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  error_message: {
                    n: 14,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  ip: { n: 15, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  ip_v6: { n: 29, br: n.FE.readBytes, bw: n.Xc.writeBytes },
                  auth_account_flags: {
                    n: 16,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  token_source: {
                    n: 22,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  admin_spoofing_user: {
                    n: 23,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  transport_error: {
                    n: 17,
                    d: 1,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  messageid: {
                    n: 18,
                    d: "18446744073709551615",
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  publisher_group_id: {
                    n: 19,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  sysid: { n: 20, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  trace_tag: {
                    n: 21,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  webapi_key_id: {
                    n: 25,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  is_from_external_source: {
                    n: 26,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  forward_to_sysid: {
                    n: 27,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  cm_sysid: {
                    n: 28,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  launcher_type: {
                    n: 31,
                    d: 0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  realm: {
                    n: 32,
                    d: 0,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  timeout_ms: {
                    n: 33,
                    d: -1,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  debug_source: {
                    n: 34,
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
        toObject(t = !1) {
          return c.toObject(t, this);
        }
        static toObject(t, e) {
          return n.TA(c.M(), t, e);
        }
        static fromObject(t) {
          return n.aD(c.M(), t);
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new c();
          return c.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return n.F(c.MBF(), t, e);
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          n.l2(c.M(), t, e);
        }
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CMsgProtoBufHeader";
        }
      }
      class o extends s {
        constructor(t = null) {
          super(),
            o.prototype.appid || n.aR(o.M()),
            s.initialize(this, t, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  name: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  icon: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                  tool: { n: 6, br: n.FE.readBool, bw: n.Xc.writeBool },
                  demo: { n: 7, br: n.FE.readBool, bw: n.Xc.writeBool },
                  media: { n: 8, br: n.FE.readBool, bw: n.Xc.writeBool },
                  community_visible_stats: {
                    n: 9,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  friendly_name: {
                    n: 10,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  propagation: {
                    n: 11,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  has_adult_content: {
                    n: 12,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  is_visible_in_steam_china: {
                    n: 13,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  app_type: {
                    n: 14,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.Bh(o.M())), o.sm_mbf;
        }
        toObject(t = !1) {
          return o.toObject(t, this);
        }
        static toObject(t, e) {
          return n.TA(o.M(), t, e);
        }
        static fromObject(t) {
          return n.aD(o.M(), t);
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new o();
          return o.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return n.F(o.MBF(), t, e);
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          n.l2(o.M(), t, e);
        }
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CCDDBAppDetailCommon";
        }
      }
      class m extends s {
        constructor(t = null) {
          super(),
            m.prototype.clanid || n.aR(m.M()),
            s.initialize(this, t, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  clanid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  announcement_gid: {
                    n: 3,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  rtime_start: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtime_end: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  priority_score: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  type: { n: 7, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  clamp_range_slot: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appid: { n: 9, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  rtime32_last_modified: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.Bh(m.M())), m.sm_mbf;
        }
        toObject(t = !1) {
          return m.toObject(t, this);
        }
        static toObject(t, e) {
          return n.TA(m.M(), t, e);
        }
        static fromObject(t) {
          return n.aD(m.M(), t);
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new m();
          return m.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return n.F(m.MBF(), t, e);
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          n.l2(m.M(), t, e);
        }
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CClanEventUserNewsTuple";
        }
      }
      class u extends s {
        constructor(t = null) {
          super(),
            u.prototype.rtime_before || n.aR(u.M()),
            s.initialize(this, t, 0, -1, [4], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  rtime_before: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  rtime_after: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  qualified: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  events: { n: 4, c: m, r: !0, q: !0 },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(t = !1) {
          return u.toObject(t, this);
        }
        static toObject(t, e) {
          return n.TA(u.M(), t, e);
        }
        static fromObject(t) {
          return n.aD(u.M(), t);
        }
        static deserializeBinary(t) {
          let e = new i.BinaryReader(t),
            r = new u();
          return u.deserializeBinaryFromReader(r, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return n.F(u.MBF(), t, e);
        }
        serializeBinary() {
          var t = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          n.l2(u.M(), t, e);
        }
        serializeBase64String() {
          var t = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CClanMatchEventByRange";
        }
      }
    },
  },
]);
