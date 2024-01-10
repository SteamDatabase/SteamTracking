/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [7910],
  {
    75997: (e, t, r) => {
      r.d(t, { gA: () => o, MD: () => c });
      var i = r(10059);
      i.Message;
      var n = r(23722);
      class s {
        constructor(e, t = 0, r) {
          (this.m_nOffset = t || 0),
            e instanceof Uint8Array || e instanceof DataView
              ? ((this.m_nLength = r || e.byteLength - this.m_nOffset),
                (this.m_nOffset += e.byteOffset),
                (this.m_viewPacket = new DataView(
                  e.buffer,
                  this.m_nOffset,
                  this.m_nLength,
                )))
              : ((this.m_nLength = r || e.byteLength - this.m_nOffset),
                (this.m_viewPacket = new DataView(
                  e,
                  this.m_nOffset,
                  this.m_nLength,
                ))),
            (this.m_rgubPacket = new Uint8Array(
              this.m_viewPacket.buffer,
              this.m_viewPacket.byteOffset,
              this.m_viewPacket.byteLength,
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
        GetUint32(e = !0) {
          const t = this.m_viewPacket.getUint32(this.m_iGet, e);
          return (this.m_iGet += 4), t;
        }
        SeekGetHead(e = 0) {
          this.m_iGet = e || 0;
        }
        SeekGetCurrent(e) {
          this.m_iGet += e;
        }
        TellPut() {
          return this.m_iPut + this.m_viewPacket.byteOffset;
        }
        TellMaxPut() {
          return this.m_viewPacket.byteLength;
        }
        PutUint8(e) {
          this.m_viewPacket.setUint8(this.m_iPut++, e);
        }
        PutUint32(e, t = !0) {
          this.m_viewPacket.setUint32(this.m_iPut, e, t), (this.m_iPut += 4);
        }
        PutBytes(e) {
          this.m_rgubPacket.set(e, this.m_iPut), (this.m_iPut += e.length);
        }
        SeekPut(e) {
          this.m_iPut += e;
        }
        GetCountBytesRemaining() {
          return this.m_viewPacket.byteLength - this.m_iGet;
        }
      }
      r(62738);
      class a {
        static InstallErrorReportingStore(e) {
          this.sm_ErrorReportingStore = e;
        }
        static InitHeaderFromPacket(e) {
          return new a(void 0, e);
        }
        constructor(e, t, r, s, a, o) {
          if (s)
            (this.m_eMsg = s.m_eMsg),
              (this.m_bValid = s.m_bValid),
              this.m_bValid &&
                ((this.m_netPacket = s.m_netPacket),
                (this.m_cubHeader = s.m_cubHeader),
                (this.m_header = s.m_header),
                this.InitForType(r));
          else {
            if (((this.m_header = new n.Cu(null)), (this.m_bValid = !0), t))
              if (
                ((this.m_netPacket = t),
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
                      this.m_cubHeader,
                    ),
                  ),
                    this.m_netPacket.SeekGetCurrent(this.m_cubHeader),
                    r && this.InitForType(r);
                } catch (e) {
                  console.error("Exception deserializing protobuf", e),
                    (this.m_bValid = !1);
                }
              } else this.m_bValid = !1;
            else
              e && (this.m_eMsg = e),
                o && r
                  ? (this.m_body = r.fromObject(o))
                  : r && (this.m_body = new r());
            a && this.m_header.set_jobid_target(a.Hdr().jobid_target());
          }
        }
        InitForType(e) {
          if (((this.m_body = new e()), this.m_netPacket)) {
            this.m_netPacket.SeekGetHead(8 + this.m_cubHeader);
            try {
              e.deserializeBinaryFromReader(
                this.m_body,
                new i.BinaryReader(
                  this.m_netPacket.GetPacket(),
                  this.m_netPacket.TellGet(),
                  this.m_netPacket.GetCountBytesRemaining(),
                ),
              );
            } catch (e) {
              this.m_bValid = !1;
              const t = a.sm_ErrorReportingStore,
                r = `Exception parsing protobuf message body of type ${this.m_eMsg}.  Definitions may be out of sync with server version.`;
              t &&
                t.ReportError(new Error(r), {
                  bIncludeMessageInIdentifier: !0,
                }),
                console.warn(r),
                console.log(e.stack || e);
            }
          }
        }
        BIsValid() {
          return this.m_bValid;
        }
        Body() {
          return this.m_body;
        }
        SetBodyJSON(e) {
          (e.toObject = () => e), (this.m_body = e);
        }
        Hdr() {
          return this.m_header;
        }
        GetEMsg() {
          return this.m_eMsg;
        }
        SetEMsg(e) {
          this.m_eMsg = e;
        }
        GetEResult() {
          return this.Hdr().eresult();
        }
        BSuccess() {
          return 1 == this.Hdr().eresult();
        }
        GetErrorMessage() {
          return this.Hdr().error_message()
            ? this.Hdr().error_message()
            : `eresult ${this.Hdr().eresult()}`;
        }
        Serialize() {
          const e = this.m_header.serializeBinary(),
            t = this.m_body.serializeBinary(),
            r = 2147483648 | this.m_eMsg,
            i = new Uint8Array(8 + e.length + t.length),
            n = new s(i);
          return (
            n.PutUint32(r),
            n.PutUint32(e.length),
            n.PutBytes(e),
            n.PutBytes(t),
            i
          );
        }
        SerializeBody() {
          const e = this.m_body.serializeBinary(),
            t = new Uint8Array(e.length);
          return new s(t).PutBytes(e), t;
        }
        DEBUG_ToObject() {
          return {};
        }
        DEBUG_LogToConsole() {
          0;
        }
      }
      class o extends a {
        constructor(e, t = 0, r, i, n) {
          super(t, r, e, i, void 0, n);
        }
        static InitFromPacket(e, t) {
          return new o(e, 0, t);
        }
        static InitFromMsg(e, t) {
          return new o(e, void 0, void 0, t);
        }
        static Init(e, t) {
          return new o(e, t);
        }
        static InitFromObject(e, t) {
          return new o(e, void 0, void 0, void 0, t);
        }
        Body() {
          return super.Body();
        }
        SetBodyFields(e) {
          for (const t in e)
            Array.isArray(e[t])
              ? this.Body()[`add_${t}`] &&
                e[t].forEach((e) => {
                  this.Body()[`add_${t}`](e);
                })
              : this.Body()[`set_${t}`] && this.Body()[`set_${t}`](e[t]);
        }
      }
      function c(e, t) {
        return t instanceof o ? t : o.InitFromObject(e, t);
      }
    },
    39087: (e, t, r) => {
      r.d(t, {
        Bh: () => a,
        F: () => d,
        FE: () => n,
        TA: () => c,
        Xc: () => s,
        aD: () => o,
        aR: () => m,
        l2: () => l,
      });
      var i = r(10059);
      const n = i.BinaryReader.prototype,
        s = i.BinaryWriter.prototype;
      function a(e) {
        const t = {},
          { fields: r } = e;
        for (const e in r) {
          const i = r[e];
          t[i.n] = i;
        }
        return t;
      }
      function o(e, t) {
        const { proto: r, fields: n } = e,
          s = new r();
        if (null == t) return s;
        for (const e in n) {
          const { n: r, c: a, r: o, d: c, q: d } = n[e];
          if (!Object.prototype.hasOwnProperty.call(t, e)) continue;
          const l = t[e];
          a
            ? o
              ? i.Message.setRepeatedWrapperField(
                  s,
                  r,
                  Array.isArray(l) ? l.map((e) => a.fromObject(e)) : [],
                )
              : i.Message.setWrapperField(s, r, a.fromObject(l))
            : i.Message.setField(s, r, l);
        }
        return s;
      }
      function c(e, t, r) {
        const { proto: n, fields: s } = e,
          a = {};
        for (const e in s) {
          const { n, c: o, r: c, d, q: l } = s[e];
          if (o)
            if (c)
              a[e] = i.Message.toObjectList(
                i.Message.getRepeatedWrapperField(r, o, n),
                o.toObject,
                t,
              );
            else {
              const s = i.Message.getWrapperField(r, o, n, l ? 1 : 0);
              s && (a[e] = o.toObject(t, s));
            }
          else {
            const t = i.Message.getFieldWithDefault(
              r,
              n,
              void 0 !== d ? d : null,
            );
            (null !== t || l) && (a[e] = t);
          }
        }
        return t && (a.$jspbMessageInstance = r), a;
      }
      function d(e, t, r) {
        for (; r.nextField() && !r.isEndGroup(); ) {
          const n = e[r.getFieldNumber()];
          if (n) {
            const { n: e, c: s, r: a, d: o, q: c, br: d } = n;
            if (s) {
              const n = new s();
              r.readMessage(n, s.deserializeBinaryFromReader),
                a
                  ? i.Message.addToRepeatedWrapperField(t, e, n, s)
                  : i.Message.setWrapperField(t, e, n);
            } else if (d) {
              const n = d.call(r);
              a
                ? i.Message.addToRepeatedField(t, e, n)
                : i.Message.setField(t, e, n);
            } else
              console.assert(
                !!d,
                `Reader func not set for field number ${e} in class ${s}`,
              ),
                r.skipField();
          } else r.skipField();
        }
        return t;
      }
      function l(e, t, r) {
        const { fields: n } = e;
        for (const e in n) {
          const { n: s, c: a, r: o, d: c, q: d, bw: l } = n[e];
          if (a)
            if (o) {
              const e = i.Message.getRepeatedWrapperField(t, a, s);
              ((e && e.length) || d) &&
                r.writeRepeatedMessage(s, e, a.serializeBinaryToWriter);
            } else {
              const e = i.Message.getWrapperField(t, a, s, d ? 1 : 0);
              e && r.writeMessage(s, e, a.serializeBinaryToWriter);
            }
          else if (l) {
            const e = i.Message.getField(t, s);
            void 0 !== e && l.call(r, s, e);
          } else
            console.assert(
              !!l,
              `Writer func not set for field number ${s} in class ${a}`,
            );
        }
      }
      function m(e) {
        const t = e.proto;
        for (const r in e.fields) {
          const n = e.fields[r],
            { n: s, c: a, r: o, d: c, q: d } = n;
          Object.prototype.hasOwnProperty.call(n, "d")
            ? (t.prototype[r] = u(i.Message.getFieldWithDefault, s, c))
            : (t.prototype[r] = a
                ? o
                  ? u(i.Message.getRepeatedWrapperField, a, s)
                  : b(a, s)
                : u(i.Message.getField, s)),
            (t.prototype[`set_${r}`] = _(
              a
                ? o
                  ? i.Message.setRepeatedWrapperField
                  : i.Message.setWrapperField
                : i.Message.setField,
              s,
            )),
            o && (t.prototype[`add_${r}`] = w(s, a));
        }
      }
      function u(e, ...t) {
        return function () {
          return e(this, ...t);
        };
      }
      function b(e, t) {
        return function (r = !0) {
          return i.Message.getWrapperField(this, e, t, r ? 1 : 0);
        };
      }
      function _(e, t) {
        return function (r) {
          return e(this, t, r);
        };
      }
      function w(e, t) {
        return t
          ? function (r, n) {
              return i.Message.addToRepeatedWrapperField(this, e, r, t, n);
            }
          : function (t, r) {
              i.Message.addToRepeatedField(this, e, t, r);
            };
      }
    },
    23722: (e, t, r) => {
      r.d(t, {
        Cu: () => c,
        VJ: () => d,
        cF: () => u,
        j7: () => a,
        uV: () => m,
      });
      var i = r(10059),
        n = r(39087);
      const s = i.Message;
      class a extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            a.prototype.v4 || n.aR(a.M()),
            s.initialize(this, e, 0, -1, void 0, null);
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
        toObject(e = !1) {
          return a.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(a.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(a.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new a();
          return a.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(a.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(a.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgIPAddress";
        }
      }
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.dst_gcid_queue || n.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  dst_gcid_queue: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  dst_gc_dir_index: {
                    n: 2,
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
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgGCRoutingProtoBufHeader";
        }
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.steamid || n.aR(c.M()),
            s.initialize(this, e, 0, -1, [27, 41], null);
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
                    pbr: n.FE.readPackedUint32,
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
                  debug_source_string_index: {
                    n: 35,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  token_id: {
                    n: 36,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  routing_gc: { n: 37, c: o },
                  session_disposition: {
                    n: 38,
                    d: 0,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  wg_token: {
                    n: 39,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  webui_auth_key: {
                    n: 40,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  exclude_client_sessionids: {
                    n: 41,
                    r: !0,
                    q: !0,
                    br: n.FE.readInt32,
                    pbr: n.FE.readPackedInt32,
                    bw: n.Xc.writeRepeatedInt32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgProtoBufHeader";
        }
      }
      class d extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.appid || n.aR(d.M()),
            s.initialize(this, e, 0, -1, [17], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
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
                  has_adult_content_sex: {
                    n: 15,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  has_adult_content_violence: {
                    n: 16,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  content_descriptorids: {
                    n: 17,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCDDBAppDetailCommon";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.clanid || n.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
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
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanEventUserNewsTuple";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.rtime_before || n.aR(m.M()),
            s.initialize(this, e, 0, -1, [4], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
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
                  events: { n: 4, c: l, r: !0, q: !0 },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClanMatchEventByRange";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.content_descriptors_to_exclude || n.aR(u.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  content_descriptors_to_exclude: { n: 1, c: b, r: !0, q: !0 },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "UserContentDescriptorPreferences";
        }
      }
      class b extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.content_descriptorid || n.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  content_descriptorid: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  timestamp_added: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "UserContentDescriptorPreferences_ContentDescriptor";
        }
      }
    },
  },
]);
