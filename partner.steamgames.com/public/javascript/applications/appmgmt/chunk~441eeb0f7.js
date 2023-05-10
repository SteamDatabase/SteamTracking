/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [907],
  {
    10686: (e, r, t) => {
      t.d(r, { L: () => n, r: () => i });
      var s,
        a = t(33940),
        o = t(50265);
      !(function (e) {
        (e[(e.Unrequested = 0)] = "Unrequested"),
          (e[(e.Pending = 1)] = "Pending"),
          (e[(e.Valid = 2)] = "Valid"),
          (e[(e.Failed = 3)] = "Failed"),
          (e[(e.Rerequest = 4)] = "Rerequest");
      })(s || (s = {}));
      class n {
        constructor() {
          (this.eState = s.Unrequested), (this.nExpirationTime = 0);
        }
        getData(e, r, t) {
          const a = this.eState == s.Pending || this.eState == s.Rerequest;
          return (
            this.isExpired() &&
              !a &&
              ((this.eState = s.Pending),
              r()
                .then((a) => {
                  if (this.eState == s.Rerequest)
                    return this.expireData(), void this.getData(e, r, t);
                  (this.data = t ? t(a) : a),
                    a
                      ? (this.delayNewData(e), (this.eState = s.Valid))
                      : (this.eState = s.Failed);
                })
                .catch((e) => {
                  (this.data = t(void 0)), (this.eState = s.Failed);
                })),
            this.data
          );
        }
        clearData() {
          (this.eState = s.Unrequested),
            (this.data = null),
            (this.nExpirationTime = 0);
        }
        setDataPending() {
          this.eState = s.Pending;
        }
        isDataPending() {
          return this.eState == s.Pending;
        }
        setData(e, r) {
          (this.data = r), this.delayNewData(e), (this.eState = s.Valid);
        }
        expireData() {
          this.nExpirationTime = 0;
        }
        isExpired() {
          const e = Date.now() / 1e3;
          return this.nExpirationTime < e;
        }
        delayNewData(e) {
          if (e <= 0) this.nExpirationTime = Number.MAX_SAFE_INTEGER;
          else {
            const r = Date.now() / 1e3;
            this.nExpirationTime = r + e;
          }
        }
        rerequestDataIfPending() {
          this.eState == s.Pending && (this.eState = s.Rerequest);
        }
        getCachedData() {
          return this.data;
        }
      }
      (0, a.gn)([o.LO], n.prototype, "data", void 0),
        (0, a.gn)([o.LO], n.prototype, "nExpirationTime", void 0);
      class i {
        constructor() {
          this.m_mapKeyToDataWrapper = new Map();
        }
        getAsyncDataWrapper(e) {
          let r;
          return (
            this.m_mapKeyToDataWrapper.has(e)
              ? (r = this.m_mapKeyToDataWrapper.get(e))
              : ((r = new n()), this.m_mapKeyToDataWrapper.set(e, r)),
            r
          );
        }
        clearKey(e) {
          this.m_mapKeyToDataWrapper.has(e) &&
            this.m_mapKeyToDataWrapper.get(e).clearData(),
            this.m_mapKeyToDataWrapper.delete(e);
        }
        getAllElements() {
          return Array.from(this.m_mapKeyToDataWrapper.values()).map((e) =>
            e.getCachedData()
          );
        }
        getAllElementsAndKeys() {
          let e = [],
            r = this.m_mapKeyToDataWrapper.entries(),
            t = r.next();
          for (; !t.done; )
            e.push({ key: t.value[0], data: t.value[1].getCachedData() }),
              (t = r.next());
          return e;
        }
      }
      (0, a.gn)([o.LO], i.prototype, "m_mapKeyToDataWrapper", void 0);
    },
    42091: (e, r, t) => {
      var s = t(45878);
      t(29063);
      s.Message;
    },
    51631: (e, r, t) => {
      var s = t(45878);
      t(29063);
      s.Message;
    },
    63403: (e, r, t) => {
      t(46132);
    },
    23217: (e, r, t) => {
      t.d(r, { l: () => n });
      t(46132);
      var s = t(52868),
        a = t.n(s),
        o = t(54856);
      function n(e) {
        if (a().isCancel(e))
          return { strErrorMsg: "Action Cancelled:" + e, errorCode: 52 };
        if (
          void 0 !== e.response &&
          e.response.data &&
          "object" == typeof e.response.data
        ) {
          if ("msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.msg,
              errorCode: e.response.data.success,
            };
          if ("err_msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.err_msg,
              errorCode: e.response.data.success,
            };
          if ("message" in e.response.data)
            return {
              strErrorMsg: e.response.data.message,
              errorCode: e.response.data.success,
            };
        } else if ("object" == typeof e.data) {
          if ("msg" in e.data)
            return { strErrorMsg: e.data.msg, errorCode: e.data.success };
          if ("err_msg" in e.data)
            return { strErrorMsg: e.data.err_msg, errorCode: e.data.success };
          if ("message" in e.response.data)
            return { strErrorMsg: e.data.message, errorCode: e.data.success };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: "
            ),
              console.error(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof o.gA)
              return {
                strErrorMsg: "" + e.GetEResult(),
                errorCode: e.GetEResult(),
              };
            console.error("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
          }
        }
        return "object" == typeof e && "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: 2,
            }
          : { strErrorMsg: "Unknown Error: " + e, errorCode: 2 };
      }
    },
  },
]);
