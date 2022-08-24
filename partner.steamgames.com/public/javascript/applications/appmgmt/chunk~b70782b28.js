/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7245],
  {
    65902: (e, t, s) => {
      s.d(t, { J: () => c });
      var r = s(70655),
        n = s(79742),
        i = s(33019),
        o = s(58114),
        a = s(81130),
        d = s(9669),
        u = s.n(d),
        h = (s(26149), s(76188)),
        p = (s(36039), s(3389));
      s(40110);
      i.Message;
      class c {
        constructor(e, t, s = !1) {
          (this.m_webApiAccessToken = ""),
            (this.m_bJsonMode = !1),
            (this.m_strWebAPIBaseURL = e),
            (this.m_webApiAccessToken = t),
            (this.m_bJsonMode = s),
            this.ConstructServiceTransport();
        }
        WaitUntilLoggedOn() {
          return Promise.resolve();
        }
        GetServerRTime32() {
          return Number(new Date());
        }
        get steamid() {
          return new p.K();
        }
        RTime32ToDate(e) {
          return new Date(1e3 * e);
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
        ConstructServiceTransport() {
          (this.m_ServiceTransport = {
            SendMsg: this.SendMsgAndAwaitResponse.bind(this, { bSendAuth: !0 }),
            SendNotification: this.SendNotification.bind(this, {
              bSendAuth: !0,
            }),
          }),
            (this.m_AnonymousServiceTransport = {
              SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
                bSendAuth: !1,
              }),
              SendNotification: this.SendNotification.bind(this, {
                bSendAuth: !1,
              }),
            });
        }
        SendMsgAndAwaitResponse(e, t, s, n, a) {
          var d;
          return (0, r.mG)(this, void 0, void 0, function* () {
            let r = null;
            try {
              let d = yield this.Send(e, t, s, a);
              if (200 != d.status || !d.data) throw new Error("Request Error");
              if (
                ((r = o.gA.Init(n, 147)),
                d.headers &&
                  (d.headers["x-eresult"] &&
                    r.Hdr().set_eresult(parseInt(d.headers["x-eresult"])),
                  d.headers["x-error_message"] &&
                    r.Hdr().set_error_message(d.headers["x-error_message"])),
                this.m_bJsonMode)
              )
                r.SetBodyJSON(d.data.response);
              else {
                let e = new h.At(d.data),
                  t = new i.BinaryReader(
                    e.GetPacket(),
                    e.TellGet(),
                    e.GetCountBytesRemaining()
                  );
                n.deserializeBinaryFromReader(r.Body(), t);
              }
              0;
            } catch (e) {
              const t =
                401 ===
                (null === (d = null == e ? void 0 : e.response) || void 0 === d
                  ? void 0
                  : d.status)
                  ? "Unauthorized"
                  : null;
              r = this.CreateFailedMsgProtobuf(n, 3, t);
            }
            return r;
          });
        }
        SendNotification(e, t, s, r) {
          return this.Send(e, t, s, r), !0;
        }
        Send(e, t, s, r) {
          let i = this.CreateWebAPIURL(t),
            o = s.SerializeBody(),
            a = n.JQ(o);
          const d = r.eWebAPIKeyRequirement;
          let h = 0 == r.ePrivilege && 1 == d,
            p = {
              responseType: this.m_bJsonMode ? "json" : "arraybuffer",
              params: {},
              headers: r.bConstMethod
                ? {}
                : { "Content-Type": "multipart/form-data" },
            };
          if (
            (e.bSendAuth ||
              1 == d ||
              console.error(
                `Attempting to invoke service ${t} without auth, but auth is required.`
              ),
            this.m_webApiAccessToken &&
              e.bSendAuth &&
              !h &&
              (p.params.access_token = this.m_webApiAccessToken),
            !r.bConstMethod)
          ) {
            const e = new FormData();
            return (
              this.m_bJsonMode
                ? e.append("input_json", JSON.stringify(s.Body().toObject()))
                : e.append("input_protobuf_encoded", a),
              u().post(i, e, p)
            );
          }
          return (
            this.m_bJsonMode
              ? (p.params = Object.assign(Object.assign({}, p.params), {
                  input_json: JSON.stringify(s.Body().toObject()),
                }))
              : (p.params = Object.assign(Object.assign({}, p.params), {
                  input_protobuf_encoded: a,
                })),
            u().get(i, p)
          );
        }
        CreateWebAPIURL(e) {
          let t = e.match(/([^\.]+)\.(.+)#(\d+)/);
          return t && 4 == t.length
            ? `${this.m_strWebAPIBaseURL}I${t[1]}Service/${t[2]}/v${t[3]}`
            : null;
        }
        CreateFailedMsgProtobuf(e, t, s) {
          let r = o.gA.Init(e);
          return (
            r.Hdr().set_eresult(2),
            r.Hdr().set_transport_error(t),
            s && r.Hdr().set_error_message(s),
            r
          );
        }
      }
      (0, r.gn)([a.a], c.prototype, "SendMsgAndAwaitResponse", null),
        (0, r.gn)([a.a], c.prototype, "SendNotification", null),
        (0, r.gn)([a.a], c.prototype, "Send", null);
    },
  },
]);
