import { b as G1 } from "./chunk-DZUFRSS2.js";
import { a as $r } from "./chunk-IKJWSIJM.js";
import { a as eo } from "./chunk-4QM62JN7.js";
import { j as e7 } from "./chunk-ED7N6CLX.js";
import {
  e as Y3,
  f as G2,
  i as z8,
  j as j8,
  k as q8,
  l as Y8,
  q as X8,
} from "./chunk-OTVSBO3U.js";
import { a as v } from "./chunk-PZCBEOHD.js";
import {
  a as Kr,
  b as d,
  c as h,
  d as H,
  e as x,
  f as V,
  g as B,
  h as T,
  i as E,
  j as g8,
  k as f8,
  l as _8,
  q as xe,
  t as v8,
  u as r1,
} from "./chunk-I4E6PQGM.js";
import {
  a as O,
  b as D8,
  c as q3,
  d as Z8,
  e as I8,
  f as G8,
  g as F8,
  i as l1,
  s as y,
  t as U8,
  v as s4,
} from "./chunk-KY2LQDDT.js";
import { c as i4 } from "./chunk-YRILCXKE.js";
import {
  b as p8,
  c as d8,
  e as m8,
  f as h8,
  g as W3,
} from "./chunk-P3TPNA6R.js";
import { a as P2 } from "./chunk-JZD27BC3.js";
import {
  c as $8,
  d as X3,
  e as Te,
  f as Ee,
  h as K8,
} from "./chunk-ETA7OURE.js";
import { a as e1 } from "./chunk-LASQLN7Z.js";
import {
  C as T8,
  F as E8,
  G as S2,
  H as j3,
  J as Be,
  K as A8,
  a as s2,
  b as H8,
  e as x8,
  f as V8,
  g as B8,
  l as f1,
} from "./chunk-MKJ2STZP.js";
import { a as J8, c as Q8 } from "./chunk-XW6IMKXS.js";
import {
  B as y8,
  C as n4,
  D as P8,
  E as S8,
  a as m2,
  b as i2,
  c as O3,
  d as L8,
  e as e4,
  f as M8,
  g as Ve,
  h as t4,
  i as N3,
  j as r4,
  k as ne,
  m as k8,
  q as a2,
  s as U3,
  t as b8,
  u as o4,
  v as R8,
  y as z3,
} from "./chunk-SNM2TLOL.js";
import { a as W8, c as I2, e as O8, f as N8 } from "./chunk-ZXCSAQ5F.js";
import { d as w8 } from "./chunk-S7EJZTZH.js";
import {
  h as Y,
  j as oe,
  o as w1,
  s as _,
  t as F3,
  u as o3,
  w as u8,
  x as c8,
} from "./chunk-A7IY3ZWU.js";
import {
  b as S1,
  c as G3,
  d as l8,
  j as N,
  k as C8,
  p as L,
} from "./chunk-Q25332SL.js";
import { a as R } from "./chunk-RWKINES4.js";
import { c as z, e as p, g, h as I3 } from "./chunk-V2BZN6OU.js";
var z5 = z((Nc, c9) => {
  "use strict";
  c9.exports = function (e, r) {
    return function () {
      for (var n = new Array(arguments.length), i = 0; i < n.length; i++)
        n[i] = arguments[i];
      return e.apply(r, n);
    };
  };
});
var v1 = z((Uc, m9) => {
  "use strict";
  var en = z5(),
    q5 = Object.prototype.toString,
    Y5 = (function (t) {
      return function (e) {
        var r = q5.call(e);
        return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
      };
    })(Object.create(null));
  function de(t) {
    return (
      (t = t.toLowerCase()),
      function (r) {
        return Y5(r) === t;
      }
    );
  }
  function X5(t) {
    return Array.isArray(t);
  }
  function dt(t) {
    return typeof t > "u";
  }
  function tn(t) {
    return (
      t !== null &&
      !dt(t) &&
      t.constructor !== null &&
      !dt(t.constructor) &&
      typeof t.constructor.isBuffer == "function" &&
      t.constructor.isBuffer(t)
    );
  }
  var p9 = de("ArrayBuffer");
  function rn(t) {
    var e;
    return (
      typeof ArrayBuffer < "u" && ArrayBuffer.isView
        ? (e = ArrayBuffer.isView(t))
        : (e = t && t.buffer && p9(t.buffer)),
      e
    );
  }
  function on(t) {
    return typeof t == "string";
  }
  function nn(t) {
    return typeof t == "number";
  }
  function d9(t) {
    return t !== null && typeof t == "object";
  }
  function pt(t) {
    if (Y5(t) !== "object") return !1;
    var e = Object.getPrototypeOf(t);
    return e === null || e === Object.prototype;
  }
  var sn = de("Date"),
    an = de("File"),
    ln = de("Blob"),
    Cn = de("FileList");
  function J5(t) {
    return q5.call(t) === "[object Function]";
  }
  function un(t) {
    return d9(t) && J5(t.pipe);
  }
  function cn(t) {
    var e = "[object FormData]";
    return (
      t &&
      ((typeof FormData == "function" && t instanceof FormData) ||
        q5.call(t) === e ||
        (J5(t.toString) && t.toString() === e))
    );
  }
  var pn = de("URLSearchParams");
  function dn(t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
  }
  function mn() {
    return typeof navigator < "u" &&
      (navigator.product === "ReactNative" ||
        navigator.product === "NativeScript" ||
        navigator.product === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  }
  function Q5(t, e) {
    if (!(t === null || typeof t > "u"))
      if ((typeof t != "object" && (t = [t]), X5(t)))
        for (var r = 0, o = t.length; r < o; r++) e.call(null, t[r], r, t);
      else
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) &&
            e.call(null, t[n], n, t);
  }
  function j5() {
    var t = {};
    function e(n, i) {
      pt(t[i]) && pt(n)
        ? (t[i] = j5(t[i], n))
        : pt(n)
          ? (t[i] = j5({}, n))
          : X5(n)
            ? (t[i] = n.slice())
            : (t[i] = n);
    }
    for (var r = 0, o = arguments.length; r < o; r++) Q5(arguments[r], e);
    return t;
  }
  function hn(t, e, r) {
    return (
      Q5(e, function (n, i) {
        r && typeof n == "function" ? (t[i] = en(n, r)) : (t[i] = n);
      }),
      t
    );
  }
  function gn(t) {
    return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
  }
  function fn(t, e, r, o) {
    (t.prototype = Object.create(e.prototype, o)),
      (t.prototype.constructor = t),
      r && Object.assign(t.prototype, r);
  }
  function _n(t, e, r) {
    var o,
      n,
      i,
      s = {};
    e = e || {};
    do {
      for (o = Object.getOwnPropertyNames(t), n = o.length; n-- > 0; )
        (i = o[n]), s[i] || ((e[i] = t[i]), (s[i] = !0));
      t = Object.getPrototypeOf(t);
    } while (t && (!r || r(t, e)) && t !== Object.prototype);
    return e;
  }
  function vn(t, e, r) {
    (t = String(t)),
      (r === void 0 || r > t.length) && (r = t.length),
      (r -= e.length);
    var o = t.indexOf(e, r);
    return o !== -1 && o === r;
  }
  function Ln(t) {
    if (!t) return null;
    var e = t.length;
    if (dt(e)) return null;
    for (var r = new Array(e); e-- > 0; ) r[e] = t[e];
    return r;
  }
  var Mn = (function (t) {
    return function (e) {
      return t && e instanceof t;
    };
  })(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array));
  m9.exports = {
    isArray: X5,
    isArrayBuffer: p9,
    isBuffer: tn,
    isFormData: cn,
    isArrayBufferView: rn,
    isString: on,
    isNumber: nn,
    isObject: d9,
    isPlainObject: pt,
    isUndefined: dt,
    isDate: sn,
    isFile: an,
    isBlob: ln,
    isFunction: J5,
    isStream: un,
    isURLSearchParams: pn,
    isStandardBrowserEnv: mn,
    forEach: Q5,
    merge: j5,
    extend: hn,
    trim: dn,
    stripBOM: gn,
    inherits: fn,
    toFlatObject: _n,
    kindOf: Y5,
    kindOfTest: de,
    endsWith: vn,
    toArray: Ln,
    isTypedArray: Mn,
    isFileList: Cn,
  };
});
var $5 = z((zc, g9) => {
  "use strict";
  var Ne = v1();
  function h9(t) {
    return encodeURIComponent(t)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  g9.exports = function (e, r, o) {
    if (!r) return e;
    var n;
    if (o) n = o(r);
    else if (Ne.isURLSearchParams(r)) n = r.toString();
    else {
      var i = [];
      Ne.forEach(r, function (l, u) {
        l === null ||
          typeof l > "u" ||
          (Ne.isArray(l) ? (u = u + "[]") : (l = [l]),
          Ne.forEach(l, function (m) {
            Ne.isDate(m)
              ? (m = m.toISOString())
              : Ne.isObject(m) && (m = JSON.stringify(m)),
              i.push(h9(u) + "=" + h9(m));
          }));
      }),
        (n = i.join("&"));
    }
    if (n) {
      var s = e.indexOf("#");
      s !== -1 && (e = e.slice(0, s)),
        (e += (e.indexOf("?") === -1 ? "?" : "&") + n);
    }
    return e;
  };
});
var _9 = z((jc, f9) => {
  "use strict";
  var kn = v1();
  function mt() {
    this.handlers = [];
  }
  mt.prototype.use = function (e, r, o) {
    return (
      this.handlers.push({
        fulfilled: e,
        rejected: r,
        synchronous: o ? o.synchronous : !1,
        runWhen: o ? o.runWhen : null,
      }),
      this.handlers.length - 1
    );
  };
  mt.prototype.eject = function (e) {
    this.handlers[e] && (this.handlers[e] = null);
  };
  mt.prototype.forEach = function (e) {
    kn.forEach(this.handlers, function (o) {
      o !== null && e(o);
    });
  };
  f9.exports = mt;
});
var L9 = z((qc, v9) => {
  "use strict";
  var wn = v1();
  v9.exports = function (e, r) {
    wn.forEach(e, function (n, i) {
      i !== r &&
        i.toUpperCase() === r.toUpperCase() &&
        ((e[r] = n), delete e[i]);
    });
  };
});
var me = z((Yc, b9) => {
  "use strict";
  var M9 = v1();
  function Ue(t, e, r, o, n) {
    Error.call(this),
      (this.message = t),
      (this.name = "AxiosError"),
      e && (this.code = e),
      r && (this.config = r),
      o && (this.request = o),
      n && (this.response = n);
  }
  M9.inherits(Ue, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: this.config,
        code: this.code,
        status:
          this.response && this.response.status ? this.response.status : null,
      };
    },
  });
  var k9 = Ue.prototype,
    w9 = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
  ].forEach(function (t) {
    w9[t] = { value: t };
  });
  Object.defineProperties(Ue, w9);
  Object.defineProperty(k9, "isAxiosError", { value: !0 });
  Ue.from = function (t, e, r, o, n, i) {
    var s = Object.create(k9);
    return (
      M9.toFlatObject(t, s, function (l) {
        return l !== Error.prototype;
      }),
      Ue.call(s, t.message, e, r, o, n),
      (s.name = t.name),
      i && Object.assign(s, i),
      s
    );
  };
  b9.exports = Ue;
});
var K5 = z((Xc, R9) => {
  "use strict";
  R9.exports = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  };
});
var e6 = z((Jc, y9) => {
  "use strict";
  var C2 = v1();
  function bn(t, e) {
    e = e || new FormData();
    var r = [];
    function o(i) {
      return i === null
        ? ""
        : C2.isDate(i)
          ? i.toISOString()
          : C2.isArrayBuffer(i) || C2.isTypedArray(i)
            ? typeof Blob == "function"
              ? new Blob([i])
              : Buffer.from(i)
            : i;
    }
    function n(i, s) {
      if (C2.isPlainObject(i) || C2.isArray(i)) {
        if (r.indexOf(i) !== -1)
          throw Error("Circular reference detected in " + s);
        r.push(i),
          C2.forEach(i, function (l, u) {
            if (!C2.isUndefined(l)) {
              var c = s ? s + "." + u : u,
                m;
              if (l && !s && typeof l == "object") {
                if (C2.endsWith(u, "{}")) l = JSON.stringify(l);
                else if (C2.endsWith(u, "[]") && (m = C2.toArray(l))) {
                  m.forEach(function (f) {
                    !C2.isUndefined(f) && e.append(c, o(f));
                  });
                  return;
                }
              }
              n(l, c);
            }
          }),
          r.pop();
      } else e.append(s, o(i));
    }
    return n(t), e;
  }
  y9.exports = bn;
});
var S9 = z((Qc, P9) => {
  "use strict";
  var t6 = me();
  P9.exports = function (e, r, o) {
    var n = o.config.validateStatus;
    !o.status || !n || n(o.status)
      ? e(o)
      : r(
          new t6(
            "Request failed with status code " + o.status,
            [t6.ERR_BAD_REQUEST, t6.ERR_BAD_RESPONSE][
              Math.floor(o.status / 100) - 4
            ],
            o.config,
            o.request,
            o,
          ),
        );
  };
});
var x9 = z(($c, H9) => {
  "use strict";
  var ht = v1();
  H9.exports = ht.isStandardBrowserEnv()
    ? (function () {
        return {
          write: function (r, o, n, i, s, a) {
            var l = [];
            l.push(r + "=" + encodeURIComponent(o)),
              ht.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()),
              ht.isString(i) && l.push("path=" + i),
              ht.isString(s) && l.push("domain=" + s),
              a === !0 && l.push("secure"),
              (document.cookie = l.join("; "));
          },
          read: function (r) {
            var o = document.cookie.match(
              new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"),
            );
            return o ? decodeURIComponent(o[3]) : null;
          },
          remove: function (r) {
            this.write(r, "", Date.now() - 864e5);
          },
        };
      })()
    : (function () {
        return {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
      })();
});
var B9 = z((Kc, V9) => {
  "use strict";
  V9.exports = function (e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
  };
});
var E9 = z((ep, T9) => {
  "use strict";
  T9.exports = function (e, r) {
    return r ? e.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : e;
  };
});
var r6 = z((tp, A9) => {
  "use strict";
  var Rn = B9(),
    yn = E9();
  A9.exports = function (e, r) {
    return e && !Rn(r) ? yn(e, r) : r;
  };
});
var Z9 = z((rp, D9) => {
  "use strict";
  var o6 = v1(),
    Pn = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ];
  D9.exports = function (e) {
    var r = {},
      o,
      n,
      i;
    return (
      e &&
        o6.forEach(
          e.split(`
`),
          function (a) {
            if (
              ((i = a.indexOf(":")),
              (o = o6.trim(a.substr(0, i)).toLowerCase()),
              (n = o6.trim(a.substr(i + 1))),
              o)
            ) {
              if (r[o] && Pn.indexOf(o) >= 0) return;
              o === "set-cookie"
                ? (r[o] = (r[o] ? r[o] : []).concat([n]))
                : (r[o] = r[o] ? r[o] + ", " + n : n);
            }
          },
        ),
      r
    );
  };
});
var F9 = z((op, G9) => {
  "use strict";
  var I9 = v1();
  G9.exports = I9.isStandardBrowserEnv()
    ? (function () {
        var e = /(msie|trident)/i.test(navigator.userAgent),
          r = document.createElement("a"),
          o;
        function n(i) {
          var s = i;
          return (
            e && (r.setAttribute("href", s), (s = r.href)),
            r.setAttribute("href", s),
            {
              href: r.href,
              protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
              host: r.host,
              search: r.search ? r.search.replace(/^\?/, "") : "",
              hash: r.hash ? r.hash.replace(/^#/, "") : "",
              hostname: r.hostname,
              port: r.port,
              pathname:
                r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname,
            }
          );
        }
        return (
          (o = n(window.location.href)),
          function (s) {
            var a = I9.isString(s) ? n(s) : s;
            return a.protocol === o.protocol && a.host === o.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })();
});
var h3 = z((np, O9) => {
  "use strict";
  var n6 = me(),
    Sn = v1();
  function W9(t) {
    n6.call(this, t ?? "canceled", n6.ERR_CANCELED),
      (this.name = "CanceledError");
  }
  Sn.inherits(W9, n6, { __CANCEL__: !0 });
  O9.exports = W9;
});
var U9 = z((ip, N9) => {
  "use strict";
  N9.exports = function (e) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (r && r[1]) || "";
  };
});
var i6 = z((sp, z9) => {
  "use strict";
  var g3 = v1(),
    Hn = S9(),
    xn = x9(),
    Vn = $5(),
    Bn = r6(),
    Tn = Z9(),
    En = F9(),
    An = K5(),
    V2 = me(),
    Dn = h3(),
    Zn = U9();
  z9.exports = function (e) {
    return new Promise(function (o, n) {
      var i = e.data,
        s = e.headers,
        a = e.responseType,
        l;
      function u() {
        e.cancelToken && e.cancelToken.unsubscribe(l),
          e.signal && e.signal.removeEventListener("abort", l);
      }
      g3.isFormData(i) && g3.isStandardBrowserEnv() && delete s["Content-Type"];
      var c = new XMLHttpRequest();
      if (e.auth) {
        var m = e.auth.username || "",
          f = e.auth.password
            ? unescape(encodeURIComponent(e.auth.password))
            : "";
        s.Authorization = "Basic " + btoa(m + ":" + f);
      }
      var k = Bn(e.baseURL, e.url);
      c.open(e.method.toUpperCase(), Vn(k, e.params, e.paramsSerializer), !0),
        (c.timeout = e.timeout);
      function M() {
        if (c) {
          var A =
              "getAllResponseHeaders" in c
                ? Tn(c.getAllResponseHeaders())
                : null,
            Z =
              !a || a === "text" || a === "json" ? c.responseText : c.response,
            I = {
              data: Z,
              status: c.status,
              statusText: c.statusText,
              headers: A,
              config: e,
              request: c,
            };
          Hn(
            function (J) {
              o(J), u();
            },
            function (J) {
              n(J), u();
            },
            I,
          ),
            (c = null);
        }
      }
      if (
        ("onloadend" in c
          ? (c.onloadend = M)
          : (c.onreadystatechange = function () {
              !c ||
                c.readyState !== 4 ||
                (c.status === 0 &&
                  !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                setTimeout(M);
            }),
        (c.onabort = function () {
          c &&
            (n(new V2("Request aborted", V2.ECONNABORTED, e, c)), (c = null));
        }),
        (c.onerror = function () {
          n(new V2("Network Error", V2.ERR_NETWORK, e, c, c)), (c = null);
        }),
        (c.ontimeout = function () {
          var Z = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded",
            I = e.transitional || An;
          e.timeoutErrorMessage && (Z = e.timeoutErrorMessage),
            n(
              new V2(
                Z,
                I.clarifyTimeoutError ? V2.ETIMEDOUT : V2.ECONNABORTED,
                e,
                c,
              ),
            ),
            (c = null);
        }),
        g3.isStandardBrowserEnv())
      ) {
        var b =
          (e.withCredentials || En(k)) && e.xsrfCookieName
            ? xn.read(e.xsrfCookieName)
            : void 0;
        b && (s[e.xsrfHeaderName] = b);
      }
      "setRequestHeader" in c &&
        g3.forEach(s, function (Z, I) {
          typeof i > "u" && I.toLowerCase() === "content-type"
            ? delete s[I]
            : c.setRequestHeader(I, Z);
        }),
        g3.isUndefined(e.withCredentials) ||
          (c.withCredentials = !!e.withCredentials),
        a && a !== "json" && (c.responseType = e.responseType),
        typeof e.onDownloadProgress == "function" &&
          c.addEventListener("progress", e.onDownloadProgress),
        typeof e.onUploadProgress == "function" &&
          c.upload &&
          c.upload.addEventListener("progress", e.onUploadProgress),
        (e.cancelToken || e.signal) &&
          ((l = function (A) {
            c && (n(!A || (A && A.type) ? new Dn() : A), c.abort(), (c = null));
          }),
          e.cancelToken && e.cancelToken.subscribe(l),
          e.signal &&
            (e.signal.aborted ? l() : e.signal.addEventListener("abort", l))),
        i || (i = null);
      var w = Zn(k);
      if (w && ["http", "https", "file"].indexOf(w) === -1) {
        n(new V2("Unsupported protocol " + w + ":", V2.ERR_BAD_REQUEST, e));
        return;
      }
      c.send(i);
    });
  };
});
var q9 = z((ap, j9) => {
  "use strict";
  j9.exports = null;
});
var ft = z((lp, Q9) => {
  "use strict";
  var L1 = v1(),
    Y9 = L9(),
    X9 = me(),
    In = K5(),
    Gn = e6(),
    Fn = { "Content-Type": "application/x-www-form-urlencoded" };
  function J9(t, e) {
    !L1.isUndefined(t) &&
      L1.isUndefined(t["Content-Type"]) &&
      (t["Content-Type"] = e);
  }
  function Wn() {
    var t;
    return (
      typeof XMLHttpRequest < "u"
        ? (t = i6())
        : typeof process < "u" &&
          Object.prototype.toString.call(process) === "[object process]" &&
          (t = i6()),
      t
    );
  }
  function On(t, e, r) {
    if (L1.isString(t))
      try {
        return (e || JSON.parse)(t), L1.trim(t);
      } catch (o) {
        if (o.name !== "SyntaxError") throw o;
      }
    return (r || JSON.stringify)(t);
  }
  var gt = {
    transitional: In,
    adapter: Wn(),
    transformRequest: [
      function (e, r) {
        if (
          (Y9(r, "Accept"),
          Y9(r, "Content-Type"),
          L1.isFormData(e) ||
            L1.isArrayBuffer(e) ||
            L1.isBuffer(e) ||
            L1.isStream(e) ||
            L1.isFile(e) ||
            L1.isBlob(e))
        )
          return e;
        if (L1.isArrayBufferView(e)) return e.buffer;
        if (L1.isURLSearchParams(e))
          return (
            J9(r, "application/x-www-form-urlencoded;charset=utf-8"),
            e.toString()
          );
        var o = L1.isObject(e),
          n = r && r["Content-Type"],
          i;
        if ((i = L1.isFileList(e)) || (o && n === "multipart/form-data")) {
          var s = this.env && this.env.FormData;
          return Gn(i ? { "files[]": e } : e, s && new s());
        } else if (o || n === "application/json")
          return J9(r, "application/json"), On(e);
        return e;
      },
    ],
    transformResponse: [
      function (e) {
        var r = this.transitional || gt.transitional,
          o = r && r.silentJSONParsing,
          n = r && r.forcedJSONParsing,
          i = !o && this.responseType === "json";
        if (i || (n && L1.isString(e) && e.length))
          try {
            return JSON.parse(e);
          } catch (s) {
            if (i)
              throw s.name === "SyntaxError"
                ? X9.from(s, X9.ERR_BAD_RESPONSE, this, null, this.response)
                : s;
          }
        return e;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: q9() },
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: { common: { Accept: "application/json, text/plain, */*" } },
  };
  L1.forEach(["delete", "get", "head"], function (e) {
    gt.headers[e] = {};
  });
  L1.forEach(["post", "put", "patch"], function (e) {
    gt.headers[e] = L1.merge(Fn);
  });
  Q9.exports = gt;
});
var K9 = z((Cp, $9) => {
  "use strict";
  var Nn = v1(),
    Un = ft();
  $9.exports = function (e, r, o) {
    var n = this || Un;
    return (
      Nn.forEach(o, function (s) {
        e = s.call(n, e, r);
      }),
      e
    );
  };
});
var s6 = z((up, e0) => {
  "use strict";
  e0.exports = function (e) {
    return !!(e && e.__CANCEL__);
  };
});
var o0 = z((cp, r0) => {
  "use strict";
  var t0 = v1(),
    a6 = K9(),
    zn = s6(),
    jn = ft(),
    qn = h3();
  function l6(t) {
    if (
      (t.cancelToken && t.cancelToken.throwIfRequested(),
      t.signal && t.signal.aborted)
    )
      throw new qn();
  }
  r0.exports = function (e) {
    l6(e),
      (e.headers = e.headers || {}),
      (e.data = a6.call(e, e.data, e.headers, e.transformRequest)),
      (e.headers = t0.merge(
        e.headers.common || {},
        e.headers[e.method] || {},
        e.headers,
      )),
      t0.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function (n) {
          delete e.headers[n];
        },
      );
    var r = e.adapter || jn.adapter;
    return r(e).then(
      function (n) {
        return (
          l6(e),
          (n.data = a6.call(e, n.data, n.headers, e.transformResponse)),
          n
        );
      },
      function (n) {
        return (
          zn(n) ||
            (l6(e),
            n &&
              n.response &&
              (n.response.data = a6.call(
                e,
                n.response.data,
                n.response.headers,
                e.transformResponse,
              ))),
          Promise.reject(n)
        );
      },
    );
  };
});
var C6 = z((pp, n0) => {
  "use strict";
  var N1 = v1();
  n0.exports = function (e, r) {
    r = r || {};
    var o = {};
    function n(c, m) {
      return N1.isPlainObject(c) && N1.isPlainObject(m)
        ? N1.merge(c, m)
        : N1.isPlainObject(m)
          ? N1.merge({}, m)
          : N1.isArray(m)
            ? m.slice()
            : m;
    }
    function i(c) {
      if (N1.isUndefined(r[c])) {
        if (!N1.isUndefined(e[c])) return n(void 0, e[c]);
      } else return n(e[c], r[c]);
    }
    function s(c) {
      if (!N1.isUndefined(r[c])) return n(void 0, r[c]);
    }
    function a(c) {
      if (N1.isUndefined(r[c])) {
        if (!N1.isUndefined(e[c])) return n(void 0, e[c]);
      } else return n(void 0, r[c]);
    }
    function l(c) {
      if (c in r) return n(e[c], r[c]);
      if (c in e) return n(void 0, e[c]);
    }
    var u = {
      url: s,
      method: s,
      data: s,
      baseURL: a,
      transformRequest: a,
      transformResponse: a,
      paramsSerializer: a,
      timeout: a,
      timeoutMessage: a,
      withCredentials: a,
      adapter: a,
      responseType: a,
      xsrfCookieName: a,
      xsrfHeaderName: a,
      onUploadProgress: a,
      onDownloadProgress: a,
      decompress: a,
      maxContentLength: a,
      maxBodyLength: a,
      beforeRedirect: a,
      transport: a,
      httpAgent: a,
      httpsAgent: a,
      cancelToken: a,
      socketPath: a,
      responseEncoding: a,
      validateStatus: l,
    };
    return (
      N1.forEach(Object.keys(e).concat(Object.keys(r)), function (m) {
        var f = u[m] || i,
          k = f(m);
        (N1.isUndefined(k) && f !== l) || (o[m] = k);
      }),
      o
    );
  };
});
var u6 = z((dp, i0) => {
  "use strict";
  i0.exports = { version: "0.27.2" };
});
var l0 = z((mp, a0) => {
  "use strict";
  var Yn = u6().version,
    q2 = me(),
    c6 = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    function (t, e) {
      c6[t] = function (o) {
        return typeof o === t || "a" + (e < 1 ? "n " : " ") + t;
      };
    },
  );
  var s0 = {};
  c6.transitional = function (e, r, o) {
    function n(i, s) {
      return (
        "[Axios v" +
        Yn +
        "] Transitional option '" +
        i +
        "'" +
        s +
        (o ? ". " + o : "")
      );
    }
    return function (i, s, a) {
      if (e === !1)
        throw new q2(
          n(s, " has been removed" + (r ? " in " + r : "")),
          q2.ERR_DEPRECATED,
        );
      return (
        r &&
          !s0[s] &&
          ((s0[s] = !0),
          console.warn(
            n(
              s,
              " has been deprecated since v" +
                r +
                " and will be removed in the near future",
            ),
          )),
        e ? e(i, s, a) : !0
      );
    };
  };
  function Xn(t, e, r) {
    if (typeof t != "object")
      throw new q2("options must be an object", q2.ERR_BAD_OPTION_VALUE);
    for (var o = Object.keys(t), n = o.length; n-- > 0; ) {
      var i = o[n],
        s = e[i];
      if (s) {
        var a = t[i],
          l = a === void 0 || s(a, i, t);
        if (l !== !0)
          throw new q2(
            "option " + i + " must be " + l,
            q2.ERR_BAD_OPTION_VALUE,
          );
        continue;
      }
      if (r !== !0) throw new q2("Unknown option " + i, q2.ERR_BAD_OPTION);
    }
  }
  a0.exports = { assertOptions: Xn, validators: c6 };
});
var m0 = z((hp, d0) => {
  "use strict";
  var c0 = v1(),
    Jn = $5(),
    C0 = _9(),
    u0 = o0(),
    _t = C6(),
    Qn = r6(),
    p0 = l0(),
    ze = p0.validators;
  function je(t) {
    (this.defaults = t),
      (this.interceptors = { request: new C0(), response: new C0() });
  }
  je.prototype.request = function (e, r) {
    typeof e == "string" ? ((r = r || {}), (r.url = e)) : (r = e || {}),
      (r = _t(this.defaults, r)),
      r.method
        ? (r.method = r.method.toLowerCase())
        : this.defaults.method
          ? (r.method = this.defaults.method.toLowerCase())
          : (r.method = "get");
    var o = r.transitional;
    o !== void 0 &&
      p0.assertOptions(
        o,
        {
          silentJSONParsing: ze.transitional(ze.boolean),
          forcedJSONParsing: ze.transitional(ze.boolean),
          clarifyTimeoutError: ze.transitional(ze.boolean),
        },
        !1,
      );
    var n = [],
      i = !0;
    this.interceptors.request.forEach(function (k) {
      (typeof k.runWhen == "function" && k.runWhen(r) === !1) ||
        ((i = i && k.synchronous), n.unshift(k.fulfilled, k.rejected));
    });
    var s = [];
    this.interceptors.response.forEach(function (k) {
      s.push(k.fulfilled, k.rejected);
    });
    var a;
    if (!i) {
      var l = [u0, void 0];
      for (
        Array.prototype.unshift.apply(l, n),
          l = l.concat(s),
          a = Promise.resolve(r);
        l.length;
      )
        a = a.then(l.shift(), l.shift());
      return a;
    }
    for (var u = r; n.length; ) {
      var c = n.shift(),
        m = n.shift();
      try {
        u = c(u);
      } catch (f) {
        m(f);
        break;
      }
    }
    try {
      a = u0(u);
    } catch (f) {
      return Promise.reject(f);
    }
    for (; s.length; ) a = a.then(s.shift(), s.shift());
    return a;
  };
  je.prototype.getUri = function (e) {
    e = _t(this.defaults, e);
    var r = Qn(e.baseURL, e.url);
    return Jn(r, e.params, e.paramsSerializer);
  };
  c0.forEach(["delete", "get", "head", "options"], function (e) {
    je.prototype[e] = function (r, o) {
      return this.request(
        _t(o || {}, { method: e, url: r, data: (o || {}).data }),
      );
    };
  });
  c0.forEach(["post", "put", "patch"], function (e) {
    function r(o) {
      return function (i, s, a) {
        return this.request(
          _t(a || {}, {
            method: e,
            headers: o ? { "Content-Type": "multipart/form-data" } : {},
            url: i,
            data: s,
          }),
        );
      };
    }
    (je.prototype[e] = r()), (je.prototype[e + "Form"] = r(!0));
  });
  d0.exports = je;
});
var g0 = z((gp, h0) => {
  "use strict";
  var $n = h3();
  function qe(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    var e;
    this.promise = new Promise(function (n) {
      e = n;
    });
    var r = this;
    this.promise.then(function (o) {
      if (r._listeners) {
        var n,
          i = r._listeners.length;
        for (n = 0; n < i; n++) r._listeners[n](o);
        r._listeners = null;
      }
    }),
      (this.promise.then = function (o) {
        var n,
          i = new Promise(function (s) {
            r.subscribe(s), (n = s);
          }).then(o);
        return (
          (i.cancel = function () {
            r.unsubscribe(n);
          }),
          i
        );
      }),
      t(function (n) {
        r.reason || ((r.reason = new $n(n)), e(r.reason));
      });
  }
  qe.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason;
  };
  qe.prototype.subscribe = function (e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
  };
  qe.prototype.unsubscribe = function (e) {
    if (this._listeners) {
      var r = this._listeners.indexOf(e);
      r !== -1 && this._listeners.splice(r, 1);
    }
  };
  qe.source = function () {
    var e,
      r = new qe(function (n) {
        e = n;
      });
    return { token: r, cancel: e };
  };
  h0.exports = qe;
});
var _0 = z((fp, f0) => {
  "use strict";
  f0.exports = function (e) {
    return function (o) {
      return e.apply(null, o);
    };
  };
});
var L0 = z((_p, v0) => {
  "use strict";
  var Kn = v1();
  v0.exports = function (e) {
    return Kn.isObject(e) && e.isAxiosError === !0;
  };
});
var w0 = z((vp, p6) => {
  "use strict";
  var M0 = v1(),
    ei = z5(),
    vt = m0(),
    ti = C6(),
    ri = ft();
  function k0(t) {
    var e = new vt(t),
      r = ei(vt.prototype.request, e);
    return (
      M0.extend(r, vt.prototype, e),
      M0.extend(r, e),
      (r.create = function (n) {
        return k0(ti(t, n));
      }),
      r
    );
  }
  var E1 = k0(ri);
  E1.Axios = vt;
  E1.CanceledError = h3();
  E1.CancelToken = g0();
  E1.isCancel = s6();
  E1.VERSION = u6().version;
  E1.toFormData = e6();
  E1.AxiosError = me();
  E1.Cancel = E1.CanceledError;
  E1.all = function (e) {
    return Promise.all(e);
  };
  E1.spread = _0();
  E1.isAxiosError = L0();
  p6.exports = E1;
  p6.exports.default = E1;
});
var Ye = z((Lp, b0) => {
  "use strict";
  b0.exports = w0();
});
var ea = z((Yt) => {
  "use strict";
  Yt.byteLength = Ys;
  Yt.toByteArray = Js;
  Yt.fromByteArray = Ks;
  var R2 = [],
    n2 = [],
    qs = typeof Uint8Array < "u" ? Uint8Array : Array,
    s8 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (Re = 0, Xr = s8.length; Re < Xr; ++Re)
    (R2[Re] = s8[Re]), (n2[s8.charCodeAt(Re)] = Re);
  var Re, Xr;
  n2[45] = 62;
  n2[95] = 63;
  function Jr(t) {
    var e = t.length;
    if (e % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var r = t.indexOf("=");
    r === -1 && (r = e);
    var o = r === e ? 0 : 4 - (r % 4);
    return [r, o];
  }
  function Ys(t) {
    var e = Jr(t),
      r = e[0],
      o = e[1];
    return ((r + o) * 3) / 4 - o;
  }
  function Xs(t, e, r) {
    return ((e + r) * 3) / 4 - r;
  }
  function Js(t) {
    var e,
      r = Jr(t),
      o = r[0],
      n = r[1],
      i = new qs(Xs(t, o, n)),
      s = 0,
      a = n > 0 ? o - 4 : o,
      l;
    for (l = 0; l < a; l += 4)
      (e =
        (n2[t.charCodeAt(l)] << 18) |
        (n2[t.charCodeAt(l + 1)] << 12) |
        (n2[t.charCodeAt(l + 2)] << 6) |
        n2[t.charCodeAt(l + 3)]),
        (i[s++] = (e >> 16) & 255),
        (i[s++] = (e >> 8) & 255),
        (i[s++] = e & 255);
    return (
      n === 2 &&
        ((e = (n2[t.charCodeAt(l)] << 2) | (n2[t.charCodeAt(l + 1)] >> 4)),
        (i[s++] = e & 255)),
      n === 1 &&
        ((e =
          (n2[t.charCodeAt(l)] << 10) |
          (n2[t.charCodeAt(l + 1)] << 4) |
          (n2[t.charCodeAt(l + 2)] >> 2)),
        (i[s++] = (e >> 8) & 255),
        (i[s++] = e & 255)),
      i
    );
  }
  function Qs(t) {
    return (
      R2[(t >> 18) & 63] + R2[(t >> 12) & 63] + R2[(t >> 6) & 63] + R2[t & 63]
    );
  }
  function $s(t, e, r) {
    for (var o, n = [], i = e; i < r; i += 3)
      (o =
        ((t[i] << 16) & 16711680) +
        ((t[i + 1] << 8) & 65280) +
        (t[i + 2] & 255)),
        n.push(Qs(o));
    return n.join("");
  }
  function Ks(t) {
    for (
      var e, r = t.length, o = r % 3, n = [], i = 16383, s = 0, a = r - o;
      s < a;
      s += i
    )
      n.push($s(t, s, s + i > a ? a : s + i));
    return (
      o === 1
        ? ((e = t[r - 1]), n.push(R2[e >> 2] + R2[(e << 4) & 63] + "=="))
        : o === 2 &&
          ((e = (t[r - 2] << 8) + t[r - 1]),
          n.push(R2[e >> 10] + R2[(e >> 4) & 63] + R2[(e << 2) & 63] + "=")),
      n.join("")
    );
  }
});
var t7 = p(R());
if (!t7.useState)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!l1)
  throw new Error(
    "mobx-react-lite@3 requires mobx at least version 6 to be available",
  );
var a4 = p(P2());
function to(t) {
  t();
}
function J3(t) {
  t || (t = to), G8({ reactionScheduler: t });
}
var l4 = p(R());
function r7(t) {
  return F8(t);
}
var ro = !1;
function h2() {
  return ro;
}
var oo = 1e4,
  no = 1e4,
  io = (function () {
    function t(e) {
      var r = this;
      Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e,
      }),
        Object.defineProperty(this, "registrations", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        Object.defineProperty(this, "sweepTimeout", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sweep", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function (o) {
            o === void 0 && (o = oo),
              clearTimeout(r.sweepTimeout),
              (r.sweepTimeout = void 0);
            var n = Date.now();
            r.registrations.forEach(function (i, s) {
              n - i.registeredAt >= o &&
                (r.finalize(i.value), r.registrations.delete(s));
            }),
              r.registrations.size > 0 && r.scheduleSweep();
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            r.sweep(0);
          },
        });
    }
    return (
      Object.defineProperty(t.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (e, r, o) {
          this.registrations.set(o, { value: r, registeredAt: Date.now() }),
            this.scheduleSweep();
        },
      }),
      Object.defineProperty(t.prototype, "unregister", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (e) {
          this.registrations.delete(e);
        },
      }),
      Object.defineProperty(t.prototype, "scheduleSweep", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.sweepTimeout === void 0 &&
            (this.sweepTimeout = setTimeout(this.sweep, no));
        },
      }),
      t
    );
  })();
var o7 = typeof FinalizationRegistry < "u" ? FinalizationRegistry : io;
var F2 = new o7(function (t) {
  var e;
  (e = t.reaction) === null || e === void 0 || e.dispose(), (t.reaction = null);
});
var i7 = p(eo()),
  so = function () {};
function n7(t) {
  t.reaction = new q3("observer".concat(t.name), function () {
    var e;
    (t.stateVersion = Symbol()),
      (e = t.onStoreChange) === null || e === void 0 || e.call(t);
  });
}
function Ae(t, e) {
  if ((e === void 0 && (e = "observed"), h2())) return t();
  var r = l4.default.useRef(null);
  if (!r.current) {
    var o = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: e,
      subscribe: function (a) {
        return (
          F2.unregister(o),
          (o.onStoreChange = a),
          o.reaction || (n7(o), (o.stateVersion = Symbol())),
          function () {
            var l;
            (o.onStoreChange = null),
              (l = o.reaction) === null || l === void 0 || l.dispose(),
              (o.reaction = null);
          }
        );
      },
      getSnapshot: function () {
        return o.stateVersion;
      },
    };
    r.current = o;
  }
  var n = r.current;
  n.reaction || (n7(n), F2.register(r, n, n)),
    l4.default.useDebugValue(n.reaction, r7),
    (0, i7.useSyncExternalStore)(n.subscribe, n.getSnapshot, so);
  var i, s;
  if (
    (n.reaction.track(function () {
      try {
        i = t();
      } catch (a) {
        s = a;
      }
    }),
    s)
  )
    throw s;
  return i;
}
var W2 = p(R());
var l7 = typeof Symbol == "function" && Symbol.for,
  s7 = l7
    ? Symbol.for("react.forward_ref")
    : typeof W2.forwardRef == "function" &&
      (0, W2.forwardRef)(function (t) {
        return null;
      }).$$typeof,
  a7 = l7
    ? Symbol.for("react.memo")
    : typeof W2.memo == "function" &&
      (0, W2.memo)(function (t) {
        return null;
      }).$$typeof;
function C4(t, e) {
  var r;
  if (a7 && t.$$typeof === a7)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  if (h2()) return t;
  var o = (r = e?.forwardRef) !== null && r !== void 0 ? r : !1,
    n = t,
    i = t.displayName || t.name;
  if (
    s7 &&
    t.$$typeof === s7 &&
    ((o = !0), (n = t.render), typeof n != "function")
  )
    throw new Error(
      "[mobx-react-lite] `render` property of ForwardRef was not a function",
    );
  var s = function (a, l) {
    return Ae(function () {
      return n(a, l);
    }, i);
  };
  return (
    (s.displayName = t.displayName),
    Object.defineProperty(s, "name", {
      value: t.name,
      writable: !0,
      configurable: !0,
    }),
    t.contextTypes && (s.contextTypes = t.contextTypes),
    o && (s = (0, W2.forwardRef)(s)),
    (s = (0, W2.memo)(s)),
    lo(t, s),
    s
  );
}
var ao = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function lo(t, e) {
  Object.keys(t).forEach(function (r) {
    ao[r] || Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
  });
}
function u4(t) {
  var e = t.children,
    r = t.render,
    o = e || r;
  return typeof o != "function" ? null : Ae(o);
}
u4.displayName = "Observer";
var Co = p(R());
var co = p(R());
var uo = p(R());
var c4;
J3(a4.unstable_batchedUpdates);
var Ga =
  (c4 = F2.finalizeAllImmediately) !== null && c4 !== void 0
    ? c4
    : function () {};
function ho(t, e) {
  return e === void 0 && (e = "observed"), Ae(t, e);
}
var X1 = p(R());
function go(t, e) {
  if (c7(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var r = Object.keys(t),
    o = Object.keys(e);
  if (r.length !== o.length) return !1;
  for (var n = 0; n < r.length; n++)
    if (!Object.hasOwnProperty.call(e, r[n]) || !c7(t[r[n]], e[r[n]]))
      return !1;
  return !0;
}
function c7(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
var p7 = Symbol("patchMixins"),
  v7 = Symbol("patchedDefinition");
function fo(t, e) {
  var r = (t[p7] = t[p7] || {}),
    o = (r[e] = r[e] || {});
  return (o.locks = o.locks || 0), (o.methods = o.methods || []), o;
}
function d7(t, e) {
  for (
    var r = this, o = arguments.length, n = new Array(o > 2 ? o - 2 : 0), i = 2;
    i < o;
    i++
  )
    n[i - 2] = arguments[i];
  e.locks++;
  try {
    var s;
    return t != null && (s = t.apply(this, n)), s;
  } finally {
    e.locks--,
      e.locks === 0 &&
        e.methods.forEach(function (a) {
          a.apply(r, n);
        });
  }
}
function m7(t, e) {
  var r = function () {
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    d7.call.apply(d7, [this, t, e].concat(i));
  };
  return r;
}
function _o(t, e, r) {
  var o = fo(t, e);
  o.methods.indexOf(r) < 0 && o.methods.push(r);
  var n = Object.getOwnPropertyDescriptor(t, e);
  if (!(n && n[v7])) {
    var i = t[e],
      s = L7(t, e, n ? n.enumerable : void 0, o, i);
    Object.defineProperty(t, e, s);
  }
}
function L7(t, e, r, o, n) {
  var i,
    s = m7(n, o);
  return (
    (i = {}),
    (i[v7] = !0),
    (i.get = function () {
      return s;
    }),
    (i.set = function (l) {
      if (this === t) s = m7(l, o);
      else {
        var u = L7(this, e, r, o, l);
        Object.defineProperty(this, e, u);
      }
    }),
    (i.configurable = !0),
    (i.enumerable = r),
    i
  );
}
var h7 = Symbol("ObserverAdministration"),
  g7 = Symbol("isMobXReactObserver");
function p4(t) {
  var e;
  return (e = t[h7]) != null
    ? e
    : (t[h7] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: d4(t.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function vo(t) {
  var e = t.prototype;
  if (t[g7]) {
    var r = d4(t);
    throw new Error(
      "The provided component class (" +
        r +
        ") has already been declared as an observer component.",
    );
  } else t[g7] = !0;
  if (e.componentWillReact)
    throw new Error(
      "The componentWillReact life-cycle event is no longer supported",
    );
  if (t.__proto__ !== X1.PureComponent) {
    if (!e.shouldComponentUpdate) e.shouldComponentUpdate = f7;
    else if (e.shouldComponentUpdate !== f7)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var o = e.render;
  if (typeof o != "function") {
    var n = d4(t);
    throw new Error(
      "[mobx-react] class component (" +
        n +
        ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
    );
  }
  e.render = function () {
    return (
      Object.defineProperty(this, "render", {
        configurable: !1,
        writable: !1,
        value: h2() ? o : Lo.call(this, o),
      }),
      this.render()
    );
  };
  var i = e.componentDidMount;
  return (
    (e.componentDidMount = function () {
      var s = this;
      if (0) var a;
      var l = p4(this);
      return (
        (l.mounted = !0),
        F2.unregister(this),
        (l.forceUpdate = function () {
          return s.forceUpdate();
        }),
        (!l.reaction || l.reactionInvalidatedBeforeMount) && l.forceUpdate(),
        i?.apply(this, arguments)
      );
    }),
    _o(e, "componentWillUnmount", function () {
      var s;
      if (!h2()) {
        var a = p4(this);
        (s = a.reaction) == null || s.dispose(),
          (a.reaction = null),
          (a.forceUpdate = null),
          (a.mounted = !1),
          (a.reactionInvalidatedBeforeMount = !1);
      }
    }),
    t
  );
}
function d4(t) {
  return t.displayName || t.name || "<component>";
}
function Lo(t) {
  var e = t.bind(this),
    r = p4(this);
  function o() {
    r.reaction ||
      ((r.reaction = Mo(r)), r.mounted || F2.register(this, r, this));
    var n = void 0,
      i = void 0;
    if (
      (r.reaction.track(function () {
        try {
          i = D8(!1, e);
        } catch (s) {
          n = s;
        }
      }),
      n)
    )
      throw n;
    return i;
  }
  return o;
}
function Mo(t) {
  return new q3(t.name + ".render()", function () {
    if (!t.mounted) {
      t.reactionInvalidatedBeforeMount = !0;
      return;
    }
    try {
      t.forceUpdate == null || t.forceUpdate();
    } catch {
      var e;
      (e = t.reaction) == null || e.dispose(), (t.reaction = null);
    }
  });
}
function f7(t, e) {
  return (
    h2() &&
      console.warn(
        "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.",
      ),
    this.state !== e ? !0 : !go(this.props, t)
  );
}
function F1(t, e) {
  if (e && e.kind !== "class")
    throw new Error("The @observer decorator can be used on classes only");
  return (
    t.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(X1.Component, t) ||
    Object.prototype.isPrototypeOf.call(X1.PureComponent, t)
      ? vo(t)
      : C4(t)
  );
}
function m4() {
  return (
    (m4 = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var o in r)
              Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
          }
          return t;
        }),
    m4.apply(this, arguments)
  );
}
function ko(t, e) {
  if (t == null) return {};
  var r = {},
    o = Object.keys(t),
    n,
    i;
  for (i = 0; i < o.length; i++)
    (n = o[i]), !(e.indexOf(n) >= 0) && (r[n] = t[n]);
  return r;
}
var wo = ["children"],
  _7 = X1.default.createContext({});
function bo(t) {
  var e = t.children,
    r = ko(t, wo),
    o = X1.default.useContext(_7),
    n = X1.default.useRef(m4({}, o, r)),
    i = n.current;
  if (0) var s;
  return X1.default.createElement(_7.Provider, { value: i }, e);
}
bo.displayName = "MobXProvider";
var rl = Number.parseInt(X1.default.version.split(".")[0]);
if (!X1.Component) throw new Error("mobx-react requires React to be available");
if (!O) throw new Error("mobx-react requires mobx to be available");
var M7 = Object.seal({ onMoveUp: Q3, onMoveDown: Q3 }),
  il = Object.seal({ onMoveRight: Q3, onMoveLeft: Q3 });
function Q3(t, e) {
  if (t.is_repeat) return !1;
  let r = e.GetRelativeDirection(t.button);
  return r == 1 ? e.BFocusFirstChild(0) : r == 2 ? e.BFocusLastChild(0) : !1;
}
function sl(t) {
  return t.Element.checkVisibility();
}
var h1 = p(R());
var k7 = p(R());
var b1 = {
  "duration-app-launch": "800ms",
  ContextMenuMouseOverlay: "b7xYZZxB5B4-",
  ContextMenuPosition: "o6fauCzG3J8-",
  contextMenu: "Sax96NMRDNg-",
  ContextMenuPopup: "BPK-2blxjIY-",
  contextMenuContents: "S4vxdXl-Tt4-",
  contextMenuItem: "_9QNF01mSnJo-",
  active: "yQed0a0UPBs-",
  MenuSectionHeader: "g0TN7BV3VaU-",
  ContextMenuSeparator: "spxW2r-GYVk-",
  NoSeparation: "KYihcox8Ecg-",
  UpperCase: "Xf9GISpIH-g-",
  SubMenu: "zdQY8o-cjDw-",
  Label: "bP5c-culAkY-",
  Arrow: "fawTG34m89A-",
  IconContainer: "jkozd0TWs0M-",
  ContextMenuHRSeparator: "_2OCJzZW0nUA-",
  ForceDesktop: "DBVmBIxYzAc-",
  PopoutSubMenu: "MVJ6mtoRVF4-",
  PopoutSubMenuItems: "_3W6Oq18b4G0-",
};
var g4 = p(L()),
  h4 = k7.forwardRef((t, e) => {
    let { className: r, contextMenuStyles: o, disabled: n, ...i } = t;
    return (0, g4.jsx)("div", {
      ...i,
      ref: e,
      className: v(
        r,
        (o || b1).contextMenuItem,
        "contextMenuItem",
        n && "disabled",
      ),
    });
  });
h4.displayName = "MenuItem";
function w7(t) {
  return t == 1 || t == 2 || t == 13;
}
function $3(t, e = !0) {
  return function (r, o, n) {
    let i = n.value;
    n.value = function (...s) {
      let a = this[o + "_DebounceProperties"];
      a === void 0 &&
        (a = this[o + "_DebounceProperties"] = { hTimer: void 0, nPending: 0 }),
        a.hTimer === void 0
          ? (e ? i.apply(this, s) : (a.nPending += 1),
            (a.hTimer = window.setInterval(() => {
              a.nPending > 0
                ? (i.apply(this, s), (a.nPending = 0))
                : (window.clearInterval(a.hTimer), (a.hTimer = void 0));
            }, t)))
          : (a.nPending += 1);
    };
  };
}
var j = p(L()),
  De = h1.createContext(null),
  O2 = class extends h1.Component {
    m_navRef = E8();
    m_divRef = h1.createRef();
    get instance() {
      return this.context.instance;
    }
    componentDidMount() {
      this.instance.SetLabel(this.props.label),
        this.m_navRef.current?.TakeFocus(),
        m2(this.props.refInstance, this.instance);
    }
    componentDidUpdate(e) {
      e.label !== this.props.label &&
        this.context &&
        this.instance.SetLabel(this.props.label);
    }
    HideIfSubmenu() {
      return this.instance.BIsSubMenu() ? (this.instance.HideSelf(), !0) : !1;
    }
    HideMenu() {
      return (
        this.instance.BIsSubMenu()
          ? this.instance.HideSelf()
          : this.instance.Hide(),
        !0
      );
    }
    render() {
      let {
          children: e,
          className: r,
          label: o,
          onCancel: n,
          cancelText: i,
          refInstance: s,
          bForceDesktopPresentation: a,
          footer: l,
          role: u = "menu",
          labelId: c,
          ...m
        } = this.props,
        f = this.context.styles ?? b1,
        k = i ?? "#Button_Cancel";
      if (this.context.presentation == 1 && !a) {
        let M = () => {
          n && n(), this.instance.Hide();
        };
        return (0, j.jsxs)(e1, {
          ...m,
          className: v(
            f.contextMenuContents,
            { [f.hasSubMenu]: this.instance.BIsSubMenuVisible() },
            r,
          ),
          "flow-children": "column",
          onMoveLeft: this.HideIfSubmenu,
          onCancel: this.instance.BIsSubMenu() ? this.HideMenu : M,
          style: {
            overflowY: this.instance.BIsSubMenuVisible() ? "hidden" : void 0,
          },
          navEntryPreferPosition: 4,
          navRef: this.m_navRef,
          ref: this.m_divRef,
          role: u,
          "aria-labelledby": o ? c : void 0,
          ...M7,
          children: [
            e,
            o &&
              (0, j.jsx)("div", {
                id: c,
                style: { display: "none" },
                children: o,
              }),
            !this.instance.BIsSubMenu() &&
              (0, j.jsxs)(j.Fragment, {
                children: [
                  (0, j.jsx)(K3, {}),
                  (0, j.jsx)(c1, {
                    className: f.Cancel,
                    onSelected: M,
                    children: y(k),
                  }),
                  l,
                ],
              }),
            this.instance.BIsSubMenuVisible() &&
              (0, j.jsx)("div", {
                className: f.contextMenuFade,
                onClick: () => this.instance.HideSubMenu(),
              }),
          ],
        });
      } else
        return (0, j.jsx)("div", {
          ...m,
          ref: this.m_divRef,
          className: v(
            {
              [f.contextMenuContents]: !0,
              [f.hasSubMenu]: this.instance.BIsSubMenuVisible(),
              [f.ForceDesktop]: a,
            },
            r,
          ),
          children: e,
        });
    }
  };
I3(O2, "contextType", De),
  g([_], O2.prototype, "HideIfSubmenu", 1),
  g([_], O2.prototype, "HideMenu", 1),
  (O2 = g([F1], O2));
function se(t) {
  let e = h1.useId();
  return (0, j.jsx)(O2, { labelId: e, ...t });
}
var c1 = class extends h1.PureComponent {
  static contextType = De;
  m_ref = h1.createRef();
  m_refDiv = h1.createRef();
  get element() {
    return this.m_refDiv.current;
  }
  get instance() {
    return this.context.instance;
  }
  OnClick(e) {
    if (this.props.disabled) {
      this.context.callbacks?.onDisabledItemSelected &&
        this.context.callbacks.onDisabledItemSelected();
      return;
    }
    this.props.onClick && this.props.onClick(e),
      !this.props.bInteractableItem &&
        (this.props.onSelected && this.props.onSelected(e),
        this.context && this.instance.ForceHide());
  }
  OnOKButton(e) {
    this.m_refDiv.current?.click();
  }
  OnMouseEnter(e) {
    this.context.presentation == 0 && this.instance.HideSubMenu();
  }
  Focus() {
    this.m_ref.current
      ? this.m_ref.current.TakeFocus()
      : this.m_refDiv.current && this.m_refDiv.current.focus();
  }
  render() {
    let {
        onSelected: e,
        bInteractableItem: r,
        onMoveRight: o,
        ...n
      } = this.props,
      i = this.context?.styles ?? b1;
    return this.context.presentation == 1
      ? (0, j.jsx)(e1, {
          noFocusRing: !0,
          preferredFocus: this.props.selected,
          ref: this.m_refDiv,
          navRef: this.m_ref,
          onMouseEnter: this.OnMouseEnter,
          ...n,
          className: v(
            this.props.className,
            i.contextMenuItem,
            "contextMenuItem",
            this.props.disabled && "disabled",
            this.props.selected && i.Selected,
            this.props.tone == "positive" && i.Positive,
            this.props.tone == "emphasis" && i.Emphasis,
            this.props.tone == "destructive" && i.Destructive,
          ),
          focusClassName: i.Focused,
          onClick: this.props.disabled ? void 0 : this.OnClick,
          focusable: !this.props.disabled,
          onOKButton: this.OnOKButton,
          onMoveRight: o,
          unselectable: this.props.unselectable,
          role: n.role ?? "menuitem",
          "aria-selected": this.props.selected,
          children: this.props.children,
        })
      : (0, j.jsx)(h4, {
          ref: this.m_refDiv,
          onMouseEnter: this.OnMouseEnter,
          ...n,
          onClick: this.OnClick,
          unselectable: this.props.unselectable,
          className: this.props.className,
          role: n.role ?? "menuitem",
          "aria-selected": this.props.selected,
          children: this.props.children,
        });
  }
};
g([_], c1.prototype, "OnClick", 1),
  g([_], c1.prototype, "OnOKButton", 1),
  g([_], c1.prototype, "OnMouseEnter", 1),
  g([_], c1.prototype, "Focus", 1);
function K3(t) {
  let r = h1.useContext(De).styles ?? b1;
  return (0, j.jsx)("div", {
    className: r.ContextMenuSeparator,
    role: "separator",
  });
}
var b7 = (t) => {
    let e = I2();
    return (0, j.jsx)(H2, { ...t, bInGamepadUI: e });
  },
  H2 = class extends h1.PureComponent {
    static contextType = De;
    m_refItem = h1.createRef();
    constructor(e) {
      super(e), (this.state = { bActive: !1 });
    }
    get instance() {
      return this.context.instance;
    }
    OnSubMenuMouseEnter() {
      this.instance.CancelHideSubMenuTimer();
    }
    OnSubMenuHidden() {
      this.setState({ bActive: !1 }),
        this.props.bInGamepadUI &&
          this.context.presentation == 1 &&
          this.m_refItem.current &&
          this.m_refItem.current.Focus();
    }
    ShowSubMenu(e) {
      let r = e || this.m_refItem.current.element,
        o = this.instance.ShowSubMenu(r, this.RenderSubMenu);
      return o
        ? (this.setState({ bActive: !0 }),
          o.SetOnHideCallback(this.OnSubMenuHidden),
          !0)
        : !1;
    }
    RenderSubMenu() {
      return (0, j.jsx)(se, {
        onMouseEnter: this.OnSubMenuMouseEnter,
        label: this.props.label,
        children: this.props.children,
      });
    }
    OnMouseEnter(e) {
      this.context.presentation == 0 && this.ShowSubMenu(e.currentTarget);
    }
    OnClick(e) {
      this.OnMouseEnter(e),
        this.props.onClick && this.props.onClick(e),
        this.props.bInGamepadUI &&
          this.context.presentation == 1 &&
          this.ShowSubMenu(e.currentTarget);
    }
    render() {
      let {
          label: e,
          selectedWithin: r,
          children: o,
          className: n,
          bInGamepadUI: i,
          ...s
        } = this.props,
        a = this.context.styles ?? b1;
      return (0, j.jsxs)(c1, {
        ...s,
        ref: this.m_refItem,
        onClick: this.OnClick,
        selected: r && !this.state.bActive,
        className: v(n, a.SubMenu, this.state.bActive && a.active),
        onMouseEnter: this.OnMouseEnter,
        bInteractableItem: !0,
        onMoveRight: () => this.ShowSubMenu(),
        children: [
          (0, j.jsx)("div", { className: a.Label, children: e }),
          (0, j.jsx)("div", {
            className: a.Arrow,
            children: (0, j.jsx)(Y3, {}),
          }),
        ],
      });
    }
  };
g([_], H2.prototype, "OnSubMenuMouseEnter", 1),
  g([_], H2.prototype, "OnSubMenuHidden", 1),
  g([_], H2.prototype, "ShowSubMenu", 1),
  g([_], H2.prototype, "RenderSubMenu", 1),
  g([_], H2.prototype, "OnMouseEnter", 1),
  g([_], H2.prototype, "OnClick", 1);
var J1 = class extends h1.Component {
  m_elMenu = void 0;
  m_cReenteranceGuard = 1;
  m_mutationObserver;
  constructor(e) {
    super(e),
      (this.state = {
        ready: !1,
        menuLeft: void 0,
        menuTop: void 0,
        menuRight: void 0,
        menuBottom: void 0,
        menuWidth: void 0,
        menuHeight: void 0,
        menuMinWidth: void 0,
      }),
      (this.m_mutationObserver = new MutationObserver(this.OnMenuMutation));
  }
  get parentWin() {
    return (
      this.props.element?.ownerDocument.defaultView || this.props.parentWin
    );
  }
  BindMenuElement(e) {
    this.props.instance.SetElement(e),
      this.m_elMenu &&
        (this.m_mutationObserver.disconnect(),
        (!this.props.popup || this.props.options.bScreenCoordinates) &&
          this.m_elMenu.ownerDocument.defaultView?.removeEventListener(
            "resize",
            this.OnWindowResize,
          )),
      e &&
        (this.m_mutationObserver.observe(e, { childList: !0, subtree: !0 }),
        (!this.props.popup || this.props.options.bScreenCoordinates) &&
          e.ownerDocument.defaultView?.addEventListener(
            "resize",
            this.OnWindowResize,
          )),
      (this.m_elMenu = e || void 0),
      N.IN_CLIENT && this.props.popup && this.m_elMenu
        ? this.m_elMenu.ownerDocument.fonts.ready.then(() => {
            this.PositionMenu();
          })
        : this.PositionMenu(),
      this.state.ready ||
        (this.props.instance.SetTakeFocus(this.TakeFocus.bind(this)),
        this.setState({ ready: !0 }, () => {
          this.props.options?.bSkipFocusWhenReady || this.TakeFocus();
        }));
  }
  OnMenuMutation(e, r) {
    this.PositionMenu();
  }
  OnWindowResize() {
    this.PositionMenu();
  }
  OnBlur(e) {
    if (
      !(e.relatedTarget && a2(e.currentTarget, e.relatedTarget)) &&
      !(
        e.relatedTarget &&
        this.props.instance.BIsElementInMenuHierarchy(e.relatedTarget)
      ) &&
      !this.props.instance.BIsSubMenuVisible() &&
      this.state.ready &&
      this.props.instance.visible
    ) {
      let r = Po() ? 150 : 0;
      this.props.instance.OnCancel(r);
    }
  }
  OnKeyDown(e) {
    e.keyCode == 27 &&
      this.state.ready &&
      (this.props.instance.Hide(), e.preventDefault(), e.stopPropagation());
  }
  componentDidUpdate() {
    this.m_cReenteranceGuard-- > 0
      ? this.PositionMenu()
      : (this.m_cReenteranceGuard = 2);
  }
  TakeFocus() {
    if (
      this.m_elMenu &&
      this.state.ready &&
      this.props.instance.visible &&
      (this.props.popup ||
        !a2(this.m_elMenu, this.m_elMenu.ownerDocument.activeElement))
    ) {
      let e = this.m_elMenu.querySelector(".ContextMenuAutoFocus");
      e && e.focus ? e.focus() : this.m_elMenu.focus();
    }
  }
  PositionMenu(e = !1) {
    let r = this.props.options,
      o = this.m_elMenu,
      n = this.props.element;
    if (!o) return;
    let i = this.props.popup != null,
      s = this.parentWin;
    if (!s || (n && s.getComputedStyle(n).display === "none")) return;
    let a = this.props.clientX,
      l = this.props.clientY,
      u = 0,
      c = 0,
      m = s.innerWidth,
      f = s.innerHeight,
      k = 1,
      M = n?.getBoundingClientRect();
    if (i)
      if (
        (!r.bScreenCoordinates &&
          a !== void 0 &&
          l !== void 0 &&
          ((a += s.screenLeft), (l += s.screenTop)),
        M && (M = U3(s, M)),
        r.targetMonitor)
      )
        (k = r.targetMonitor.flMonitorScale),
          (u = r.targetMonitor.nScreenLeft),
          (c = r.targetMonitor.nScreenTop),
          (m = r.targetMonitor.nScreenWidth),
          (f = r.targetMonitor.nScreenHeight);
      else {
        let d1 = s.screen,
          y2 = 0,
          te = 0;
        d1.availLeft && (y2 = d1.availLeft),
          d1.availTop && (te = d1.availTop),
          (u = y2),
          (c = te),
          (m = d1.availWidth),
          (f = d1.availHeight);
      }
    (r.bOverlapHorizontal || r.bOverlapVertical) && (a = l = void 0);
    let b = o.getBoundingClientRect();
    if (r.flGamepadScale && r.flGamepadScale > 0) {
      let d1 = r.flGamepadScale;
      b = new DOMRect(b.x * d1, b.y * d1, b.width * d1, b.height * d1);
    }
    let w = {
        menuLeft: void 0,
        menuRight: void 0,
        menuTop: void 0,
        menuBottom: void 0,
        menuWidth: void 0,
        menuHeight: void 0,
        menuMinWidth: void 0,
      },
      A = a ?? M.left,
      Z = a ?? M.right,
      I = b.width;
    r.bMatchWidth && ((I = Z - A), (w.menuWidth = I)),
      r.bGrowToElementWidth && (w.menuMinWidth = Math.max(I, Z - A));
    let i1 = (r.bOverlapHorizontal ? Z : A) - u - I,
      J = i1 > 0,
      s1 = u + m - (r.bOverlapHorizontal ? A : Z) - I,
      m1 = s1 > 0,
      a1 = (r.bPreferPopLeft || !m1) && J;
    !J &&
      !m1 &&
      ((a1 = J > m1),
      r.bFitToWindow && ((I += (a1 ? i1 : s1) - 8), (w.menuWidth = I))),
      a1
        ? (w.menuRight = m - (r.bOverlapHorizontal ? Z : A))
        : (w.menuLeft = r.bOverlapHorizontal ? A : Z);
    let Q = l ?? M.top,
      P = l ?? M.bottom,
      S = o.scrollHeight;
    r.bMatchHeight && ((S = P - Q), (w.menuHeight = S));
    let K2 = (r.bOverlapVertical ? P : Q) - c - S,
      ee = K2 > 0,
      Z2 = c + f - (r.bOverlapVertical ? Q : P) - S,
      ye = Z2 > 0,
      d2 = (r.bPreferPopTop || !ye) && ee && !r.bDisablePopTop;
    if (!ee && !ye) {
      let d1 =
        r.bShiftToFitWindow !== void 0
          ? r.bShiftToFitWindow
          : !!r.bFitToWindow && !r.bOverlapHorizontal;
      (d2 = K2 > Z2 && !r.bDisablePopTop),
        d1 && (d2 ? (w.menuTop = 4) : (w.menuBottom = 4)),
        r.bFitToWindow &&
          (d1 ? (S = Math.min(S, f - 8)) : (S += d2 ? K2 : Z2),
          (w.menuHeight = S - 8));
    }
    w.menuBottom === void 0 &&
      w.menuTop === void 0 &&
      (d2
        ? (w.menuBottom = f - (r.bOverlapVertical ? P : Q))
        : (w.menuTop = r.bOverlapVertical ? Q : P)),
      i
        ? (w.menuHeight || (w.menuHeight = b.height),
          w.menuWidth || (w.menuWidth = b.width),
          w.menuBottom &&
            !w.menuTop &&
            ((w.menuTop = f - w.menuBottom - w.menuHeight),
            (w.menuBottom = void 0)),
          w.menuRight &&
            !w.menuLeft &&
            ((w.menuLeft = m - w.menuRight - w.menuWidth),
            (w.menuRight = void 0)))
        : s.getComputedStyle(o).position != "fixed" &&
          (w.menuLeft && (w.menuLeft += s.scrollX),
          w.menuTop && (w.menuTop += s.scrollY),
          w.menuBottom &&
            (w.menuBottom +=
              s.document.body.clientHeight - s.scrollY - s.innerHeight),
          w.menuRight &&
            (w.menuRight +=
              s.document.body.clientWidth - s.scrollX - s.innerWidth)),
      (e ||
        w.menuLeft !== this.state.menuLeft ||
        w.menuRight !== this.state.menuRight ||
        w.menuTop !== this.state.menuTop ||
        w.menuBottom !== this.state.menuBottom ||
        w.menuWidth !== this.state.menuWidth ||
        w.menuHeight !== this.state.menuHeight) &&
        this.setState(w);
  }
  PositionPopupWindow() {
    if (
      !(
        this.state.menuLeft !== void 0 &&
        this.state.menuTop !== void 0 &&
        this.state.menuWidth !== void 0 &&
        this.state.menuHeight !== void 0
      )
    )
      return;
    let r = this.props.popup?.window,
      o = this.props.options;
    if (o.bScreenCoordinates) {
      let n = this.parentWin?.devicePixelRatio;
      if (o.targetMonitor) {
        let i = o.flGamepadScale || 1;
        n = (o.targetMonitor.flMonitorScale ?? 1) / i;
      }
      r?.SteamClient.Window.MoveTo(this.state.menuLeft, this.state.menuTop, n),
        r?.SteamClient.Window.ResizeTo(
          this.state.menuWidth,
          this.state.menuHeight,
          n,
        );
      return;
    }
    this.parentWin?.SteamClient.Window.GetWindowRestoreDetails().then((n) => {
      let i = this.state.menuLeft - this.parentWin.screenX,
        s = this.state.menuTop - this.parentWin.screenY;
      try {
        r?.SteamClient.Window.PositionWindowRelative(
          n,
          i,
          s,
          this.state.menuWidth,
          this.state.menuHeight,
        );
      } catch (a) {
        console.error(a);
      }
    });
  }
  render() {
    let e = { visibility: this.state.ready ? "visible" : "hidden" };
    if (
      this.props.options.flGamepadScale &&
      this.props.options.flGamepadScale > 0
    )
      e.zoom = this.props.options.flGamepadScale;
    else if (
      this.props.options.bScreenCoordinates &&
      this.props.options.targetMonitor &&
      this.m_elMenu?.ownerDocument?.defaultView
    ) {
      let o = this.m_elMenu.ownerDocument.defaultView.devicePixelRatio;
      o != 1 &&
        (e.zoom = (this.props.options.targetMonitor.flMonitorScale ?? 1) / o);
    }
    this.props.popup
      ? (this.PositionPopupWindow(),
        this.state.menuMinWidth !== void 0 &&
          (e.minWidth = this.state.menuMinWidth))
      : (this.state.menuTop !== void 0
          ? (e.top = this.state.menuTop)
          : this.state.menuBottom !== void 0 &&
            (e.bottom = this.state.menuBottom),
        this.state.menuLeft !== void 0
          ? (e.left = this.state.menuLeft)
          : this.state.menuRight !== void 0 && (e.right = this.state.menuRight),
        this.state.menuHeight !== void 0 && (e.height = this.state.menuHeight),
        this.state.menuWidth !== void 0 && (e.width = this.state.menuWidth),
        this.state.menuMinWidth !== void 0 &&
          (e.minWidth = this.state.menuMinWidth));
    let r = this.props.options.strClassName || b1.contextMenu;
    return (
      (this.props.options.bCreateHidden ||
        (this.props.instance.visible && this.state.ready)) &&
        (r += " visible"),
      (r += " " + b1.ContextMenuPosition),
      (0, j.jsx)("div", {
        className: r,
        ref: this.BindMenuElement,
        style: e,
        onBlur: this.OnBlur,
        onKeyDown: this.OnKeyDown,
        tabIndex: 0,
        children: this.props.children,
      })
    );
  }
};
g([_], J1.prototype, "BindMenuElement", 1),
  g([_, $3(100)], J1.prototype, "OnMenuMutation", 1),
  g([_], J1.prototype, "OnWindowResize", 1),
  g([_], J1.prototype, "OnBlur", 1),
  g([_], J1.prototype, "OnKeyDown", 1),
  (J1 = g([F1], J1));
function R7(t) {
  return (0, j.jsx)("div", { className: b1.ContextMenuMouseOverlay });
}
function Ro(t, e) {
  let r = e.createEvent("HTMLEvents");
  r.initEvent("change", !0, !1), t.dispatchEvent(r);
}
function _4(t) {
  let e = [],
    r = o4(t),
    o = r.getSelection(),
    n = o && o.rangeCount > 0 && o.toString().length > 0,
    i = t.target,
    s = !1,
    a = t.clientY,
    l = t.clientX;
  if (
    (i &&
      "tagName" in i &&
      (i.tagName == "INPUT" || i.tagName == "TEXTAREA") &&
      (s = !0),
    N.IN_CLIENT && s && f1(r, "Browser.GetSpellingSuggestions"))
  ) {
    let [u, ...c] = r.SteamClient.Browser.GetSpellingSuggestions(),
      m = i;
    m &&
      c.forEach((f, k) => {
        e.push(
          (0, j.jsx)(
            c1,
            {
              onSelected: () => {
                m.setRangeText(f),
                  Ro(m, r.document),
                  m.setSelectionRange(m.selectionEnd, m.selectionEnd),
                  i.focus();
              },
              className: b1.NoSeparation,
              children: f,
            },
            `spelling_${k}_${f}`,
          ),
        );
      }),
      u &&
        f1(r, "Browser.AddWordToDictionary") &&
        ((u = u.trim()),
        e.push(
          (0, j.jsx)(
            c1,
            {
              onSelected: () => r.SteamClient.Browser.AddWordToDictionary(u),
              children: y(
                "#ContextMenu_AddToDictionary",
                u.length < 30 ? u : u.substring(0, 30) + "...",
              ),
            },
            `addtodictionary_${u}`,
          ),
        ));
  }
  if (
    ((r.document.queryCommandEnabled("cut") || (n && s)) &&
      e.push(
        (0, j.jsx)(
          c1,
          {
            onSelected: () => {
              r.document.execCommand("cut");
            },
            children: y("#ContextMenu_Cut"),
          },
          "cut",
        ),
      ),
    (r.document.queryCommandEnabled("copy") || n) &&
      e.push(
        (0, j.jsx)(
          c1,
          {
            onSelected: () => {
              r.document.execCommand("copy");
            },
            className: b1.NoSeparation,
            children: y("#ContextMenu_Copy"),
          },
          "copy",
        ),
      ),
    N.IN_CLIENT &&
      s &&
      f1(r, "Browser.Paste") &&
      e.push(
        (0, j.jsx)(
          c1,
          {
            onSelected: () => {
              i.focus(), r.SteamClient.Browser.Paste();
            },
            className: b1.NoSeparation,
            children: y("#ContextMenu_Paste"),
          },
          "paste",
        ),
      ),
    N.IN_CLIENT && N.DEV_MODE)
  ) {
    let u = [];
    f1(r, "Browser.OpenDevTools") &&
      u.push(
        (0, j.jsx)(
          c1,
          {
            onSelected: () => {
              i.focus(), r.SteamClient.Browser.OpenDevTools();
            },
            children: "Open Dev Tools",
          },
          "opendevtools",
        ),
      ),
      f1(r, "Browser.InspectElement") &&
        u.push(
          (0, j.jsx)(
            c1,
            {
              onSelected: () => {
                i.focus(), r.SteamClient.Browser.InspectElement(a, l);
              },
              className: b1.NoSeparation,
              children: "Inspect Element",
            },
            "inspectelement",
          ),
        ),
      u.length > 0 &&
        (e.push((0, j.jsx)(K3, {}, "devtools-separator")), e.push(...u));
  }
  if (e.length)
    ae((0, j.jsx)(se, { children: e }), t, { bRootContextMenu: !0 });
  else {
    if (t.shiftKey) return;
    t.preventDefault(), t.stopPropagation();
  }
}
var yo = "EnableContextMenuBlurDelay3";
function Po() {
  return (window.localStorage && window.localStorage.getItem(yo)) === "true";
}
var Ze = class Ze {
  static s_nNextKeyValue = 1;
  m_nKey = null;
  m_ContextMenuManager;
  m_bVisible = !1;
  m_fnTakeFocus;
  m_element;
  m_rctElement;
  m_rctLabel = void 0;
  m_popupContextMenu;
  m_timerHideMenu = 0;
  m_options;
  m_position;
  m_submenu;
  m_parentInstance;
  m_elSubmenuItem = null;
  m_timerHideSubMenu = 0;
  m_fnOnHideCallback;
  constructor(e, r) {
    l1(this), (this.m_ContextMenuManager = e), (this.m_rctElement = r);
  }
  get Manager() {
    return this.m_ContextMenuManager;
  }
  get key() {
    return (
      this.m_nKey == null &&
        ((this.m_nKey = Ze.s_nNextKeyValue), Ze.s_nNextKeyValue++),
      this.m_nKey
    );
  }
  SetElement(e) {
    this.m_element = e;
  }
  SetPopup(e) {
    this.m_popupContextMenu = e;
  }
  get ReactElement() {
    return this.m_rctElement;
  }
  get label() {
    return this.m_rctLabel;
  }
  get submenu() {
    return this.m_submenu;
  }
  get visible() {
    return this.m_bVisible;
  }
  get options() {
    return this.m_options;
  }
  get position() {
    return this.m_position;
  }
  SetOnHideCallback(e) {
    this.m_fnOnHideCallback = e;
  }
  Show() {
    this.CancelHideMenuTimer(),
      (this.m_bVisible = !0),
      this.m_ContextMenuManager.ShowMenu(this);
  }
  OnCancel(e = 0) {
    this.options?.onCancel && this.options.onCancel(), this.Hide(e);
  }
  Hide(e = 0) {
    e > 0
      ? (this.m_timerHideMenu = window.setTimeout(() => {
          (this.m_timerHideMenu = 0), this.InternalHide();
        }, e))
      : this.InternalHide();
  }
  CancelHideMenuTimer() {
    this.m_timerHideMenu > 0 &&
      (clearTimeout(this.m_timerHideMenu), (this.m_timerHideMenu = 0));
  }
  SetPosition(e, r, o) {
    (this.m_options = { ...this.m_options, ...o }),
      (this.m_position.clientX = e),
      (this.m_position.clientY = r),
      (this.m_position.options = this.m_options);
  }
  ForceHide() {
    this.InternalHide();
  }
  HideIfNotInFocus() {
    !this.BHasFocus() && !this.BIsFocusInChildHierarchy() && this.Hide();
  }
  InternalHide() {
    this.CancelHideMenuTimer(),
      this.m_bVisible &&
        ((this.m_bVisible = !1),
        this.InternalHideSubMenu(),
        this.m_fnOnHideCallback && this.m_fnOnHideCallback(),
        this.m_ContextMenuManager.HideMenu(this));
  }
  SetTakeFocus(e) {
    this.m_fnTakeFocus = e;
  }
  ShowSubMenu(e, r) {
    return this.m_elSubmenuItem == e
      ? (this.CancelHideSubMenuTimer(), this.m_submenu?.TakeFocus(), null)
      : (this.InternalHideSubMenu(),
        (this.m_elSubmenuItem = e),
        (this.m_submenu = new v4(this, r(), e, this.m_options.bForcePopup)),
        this.m_submenu.Show(),
        this.m_submenu);
  }
  CancelHideSubMenuTimer() {
    this.m_timerHideSubMenu > 0 &&
      (clearTimeout(this.m_timerHideSubMenu), (this.m_timerHideSubMenu = 0));
  }
  HideSubMenu() {
    if (!this.m_submenu) {
      this.CancelHideSubMenuTimer();
      return;
    }
    if (this.m_timerHideSubMenu > 0) return;
    let e = 150;
    this.m_timerHideSubMenu = window.setTimeout(() => {
      this.InternalHideSubMenu(), (this.m_timerHideSubMenu = 0);
    }, e);
  }
  OnSubMenuDismissed(e) {
    this.m_submenu == e && this.InternalHideSubMenu();
  }
  HideSelf() {
    this.m_parentInstance
      ? this.m_parentInstance.OnSubMenuDismissed(this)
      : this.InternalHide();
  }
  InternalHideSubMenu() {
    this.CancelHideSubMenuTimer(),
      this.m_submenu &&
        (this.m_submenu.m_element &&
          this.BIsFocusInChildHierarchy() &&
          this.TakeFocus(1),
        (this.m_elSubmenuItem = null),
        this.m_submenu.InternalHide(),
        (this.m_submenu = void 0));
  }
  TakeFocus(e = 1) {
    this.m_popupContextMenu && this.m_popupContextMenu.Focus(e),
      this.m_fnTakeFocus && this.m_fnTakeFocus();
  }
  BInternalElementInParentHierarchy(e) {
    return (
      this.m_parentInstance != null &&
      (this.m_parentInstance.BIsChildElement(e) ||
        this.m_parentInstance.BInternalElementInParentHierarchy(e))
    );
  }
  BInternalElementInChildHierarchy(e) {
    return (
      this.m_submenu != null &&
      (this.m_submenu.BIsChildElement(e) ||
        this.m_submenu.BInternalElementInChildHierarchy(e))
    );
  }
  BIsChildElement(e) {
    return this.m_element
      ? a2(this.m_element, e)
      : a2(this.m_popupContextMenu?.root_element, e);
  }
  BHasFocus() {
    return this.m_popupContextMenu
      ? this.m_popupContextMenu.focused
      : a2(this.m_element, this.m_element?.ownerDocument.activeElement);
  }
  BIsFocusInChildHierarchy() {
    return (
      this.m_submenu != null &&
      (this.m_submenu.BHasFocus() || this.m_submenu.BIsFocusInChildHierarchy())
    );
  }
  BIsElementInMenuHierarchy(e) {
    return (
      this.BInternalElementInParentHierarchy(e) ||
      this.BInternalElementInChildHierarchy(e)
    );
  }
  BIsSubMenuVisible() {
    return !!this.m_submenu;
  }
  SetLabel(e) {
    this.m_rctLabel = e;
  }
};
g([O], Ze.prototype, "m_bVisible", 2),
  g([O.ref], Ze.prototype, "m_rctLabel", 2);
var n3 = Ze,
  et = class extends n3 {
    constructor(e, r, o, n, i, s) {
      super(e, r),
        (this.m_options = s || {}),
        (this.m_position = {
          element: o,
          clientX: n,
          clientY: i,
          instance: this,
          options: this.m_options,
          fnOnMenuItemSelected: () => {
            this.Hide();
          },
        });
    }
    Show() {
      super.Show();
    }
    Hide(e = 0) {
      super.Hide(e);
    }
    ForceHide() {
      super.ForceHide();
    }
    BIsSubMenu() {
      return !1;
    }
  },
  v4 = class extends n3 {
    constructor(e, r, o, n) {
      super(e.Manager, r),
        (this.m_parentInstance = e),
        (this.m_options = {
          bOverlapVertical: !0,
          strClassName: e.options.strClassName,
          bFitToWindow: e.options.bFitToWindow,
          bShiftToFitWindow: e.options.bShiftToFitWindow,
          bForcePopup: n,
        }),
        (this.m_position = {
          element: o,
          clientX: void 0,
          clientY: void 0,
          instance: this,
          options: this.m_options,
          fnOnMenuItemSelected: () => {
            this.Hide();
          },
          bSubmenu: !0,
        });
    }
    Hide() {
      this.m_popupContextMenu
        ? window.setTimeout(() => {
            this.m_parentInstance?.HideIfNotInFocus();
          }, 10)
        : this.m_parentInstance?.Hide();
    }
    ForceHide() {
      this.m_parentInstance?.ForceHide();
    }
    BIsSubMenu() {
      return !0;
    }
  };
var Ie = class {
  m_callbacksMenusChanged = new w1();
  m_ActiveMenu;
  m_rgActiveSubmenus = [];
  m_setHiddenMenus = new Set();
  constructor() {}
  CreateContextMenuInstance(e, r, o, n, i) {
    let s = new et(this, e, r, o, n, i);
    return (
      i?.bCreateHidden &&
        (this.m_setHiddenMenus.add(s), this.m_callbacksMenusChanged.Dispatch()),
      s
    );
  }
  get OnMenusChanged() {
    return this.m_callbacksMenusChanged;
  }
  HideActiveMenu() {
    this.m_ActiveMenu?.options.bRetainOnHide
      ? this.m_setHiddenMenus.add(this.m_ActiveMenu)
      : this.m_rgActiveSubmenus.length && (this.m_rgActiveSubmenus = []),
      (this.m_ActiveMenu = void 0);
  }
  get ActiveMenu() {
    return this.m_ActiveMenu;
  }
  GetVisibleMenus() {
    return this.m_ActiveMenu
      ? [this.m_ActiveMenu, ...this.m_rgActiveSubmenus]
      : [];
  }
  GetHiddenMenus() {
    return Array.from(this.m_setHiddenMenus);
  }
  GetAllMenus() {
    let e;
    return (
      this.m_ActiveMenu
        ? (e = [
            this.m_ActiveMenu,
            ...this.m_rgActiveSubmenus,
            ...Array.from(this.m_setHiddenMenus),
          ])
        : (e = [
            ...this.m_rgActiveSubmenus,
            ...Array.from(this.m_setHiddenMenus),
          ]),
      e.sort((r, o) => r.key - o.key)
    );
  }
  BShouldRenderMouseOverlay() {
    return this.m_ActiveMenu && !this.m_ActiveMenu.options.bDisableMouseOverlay;
  }
  ShowMenu(e) {
    if (e.BIsSubMenu()) this.m_rgActiveSubmenus.push(e);
    else {
      if (e == this.m_ActiveMenu) return;
      this.m_ActiveMenu &&
        (this.m_ActiveMenu.options.bRetainOnHide &&
          this.m_setHiddenMenus.add(this.m_ActiveMenu),
        this.m_ActiveMenu.Hide()),
        (this.m_ActiveMenu = e),
        this.m_setHiddenMenus.delete(e);
    }
    this.m_callbacksMenusChanged.Dispatch();
  }
  HideMenu(e) {
    e.BIsSubMenu()
      ? oe(this.m_rgActiveSubmenus, e) &&
        this.m_callbacksMenusChanged.Dispatch()
      : (Y(e == this.m_ActiveMenu, "Call to hide inactive menu"),
        e == this.m_ActiveMenu &&
          (this.HideActiveMenu(), this.m_callbacksMenusChanged.Dispatch()));
  }
  ReleaseHiddenMenu(e) {
    this.m_setHiddenMenus.delete(e);
  }
};
var M4 = class {
    m_mapManagers = new WeakMap();
    GetContextMenuManagerFromWindow(e) {
      let r = e?.ownerDocument?.defaultView || window;
      return this.GetContextMenuManager(r);
    }
    GetContextMenuManager(e) {
      let r = this.m_mapManagers.get(e);
      if (!r) {
        let o = e;
        for (; !r && o.opener; )
          (o = o.opener), (r = this.m_mapManagers.get(o));
      }
      return r || ((r = new Ie()), this.m_mapManagers.set(e, r)), r;
    }
    SetMenuManager(e, r) {
      Y(
        this.m_mapManagers.get(e) === void 0 || !r || e == window,
        `Stomping CContextMenuManager for ${e.document.title}!`,
      ),
        this.m_mapManagers.set(e, r);
    }
    RegisterChildWindow(e, r) {
      return (
        this.m_mapManagers.set(r, this.GetContextMenuManager(e)),
        () => this.m_mapManagers.delete(r)
      );
    }
  },
  tt = new M4();
function ae(t, e, r) {
  let o,
    n,
    i,
    s = e;
  if (s?.preventDefault && s?.stopPropagation) {
    if (s.shiftKey || (s.altKey && !r?.bRootContextMenu)) return null;
    s.preventDefault(),
      s.stopPropagation(),
      (i = s.currentTarget),
      (o = s.clientX),
      (n = s.clientY);
  } else i = e;
  let l = tt
    .GetContextMenuManagerFromWindow(i)
    .CreateContextMenuInstance(t, i, o, n, r);
  return l.Show(), r?.bCreateHidden && l.Hide(), l;
}
var G = p(L());
function i3(t) {
  let { direction: e, ...r } = t;
  switch (e) {
    case "up":
      return (0, G.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...r,
        children: (0, G.jsx)("path", {
          d: "M17.98 10.23L3.20996 25H32.75L17.98 10.23Z",
          fill: "currentColor",
        }),
      });
    case "down":
      return (0, G.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...r,
        children: (0, G.jsx)("path", {
          d: "M17.98 26.54L3.20996 11.77H32.75L17.98 26.54Z",
          fill: "currentColor",
        }),
      });
    case "left":
      return (0, G.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...r,
        children: (0, G.jsx)("path", {
          d: "M9.82497 18.385L24.595 3.61499L24.595 33.155L9.82497 18.385Z",
          fill: "currentColor",
        }),
      });
    case "right":
      return (0, G.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...r,
        children: (0, G.jsx)("path", {
          d: "M26.135 18.385L11.365 33.155L11.365 3.61503L26.135 18.385Z",
          fill: "currentColor",
        }),
      });
  }
}
function k4(t) {
  let { direction: e, ...r } = t;
  switch (e) {
    case "up":
      return (0, G.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...t,
        children: (0, G.jsx)("path", {
          fill: "currentColor",
          d: "M31 15.6394L18.0204 3L5 15.6394L8.60376 19.1432L18.0204 10.0076L27.4166 19.1432L31 15.6394ZM27.3962 33L18.0204 23.8644L8.62412 33L5 29.4962L18.0204 16.8568L31 29.4962L27.3962 33Z",
        }),
      });
    case "down":
      return (0, G.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...t,
        children: (0, G.jsx)("path", {
          fill: "currentColor",
          d: "M31 20.3606L18.0204 33L5 20.3606L8.60376 16.8568L18.0204 25.9924L27.4166 16.8568L31 20.3606ZM27.3962 3L18.0204 12.1356L8.62412 3L5 6.50379L18.0204 19.1432L31 6.50379L27.3962 3Z",
        }),
      });
    case "left":
      return (0, G.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...t,
        children: (0, G.jsx)("path", {
          d: "M14.23 30.75L1.45996 18L14.23 5.20999L17.77 8.74999L8.53996 18L17.77 27.23L14.23 30.75ZM31.77 27.21L22.54 18L31.77 8.76999L28.23 5.20999L15.46 18L28.23 30.75L31.77 27.21Z",
          fill: "currentColor",
        }),
      });
    case "right":
      return (0, G.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...t,
        children: (0, G.jsx)("path", {
          d: "M19 30.75L31.77 18L19 5.20999L15.46 8.74999L24.69 18L15.46 27.23L19 30.75ZM1.46002 27.21L10.69 18L1.46002 8.76999L5.00002 5.20999L17.77 18L5.00002 30.75L1.46002 27.21Z",
          fill: "currentColor",
        }),
      });
  }
}
function aC(t) {
  return (0, G.jsx)("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    children: (0, G.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M31.7 15.2077C31.703 12.5623 30.94 9.97259 29.5032 7.75136C28.0664 5.53014 26.0172 3.77242 23.6031 2.69048C21.189 1.60855 18.5133 1.24869 15.8992 1.65436C13.2851 2.06002 10.8443 3.21387 8.87163 4.97655C6.89899 6.73922 5.47888 9.03532 4.78281 11.5875C4.08673 14.1397 4.14447 16.8389 4.94905 19.359C5.75363 21.8791 7.27063 24.1124 9.31684 25.7891C11.363 27.4658 13.8509 28.5142 16.48 28.8077V34.5077L27.31 25.2477C28.6947 23.9675 29.7996 22.4147 30.5551 20.6869C31.3106 18.959 31.7004 17.0935 31.7 15.2077ZM15.3 7.06885L16.3075 16.9577H20.1309L21.1039 7.06885H15.3ZM20.6927 22.0125C20.6927 23.3774 19.5862 24.4838 18.2213 24.4838C16.8564 24.4838 15.7499 23.3774 15.7499 22.0125C15.7499 20.6475 16.8564 19.5411 18.2213 19.5411C19.5862 19.5411 20.6927 20.6475 20.6927 22.0125Z",
      fill: "currentColor",
    }),
  });
}
function lC(t) {
  let { alert: e, urgent: r, ...o } = t;
  return r
    ? (0, G.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 36 36",
        fill: "none",
        ...o,
        children: [
          (0, G.jsx)("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21.1862 2.52116C20.1687 2.17914 19.0936 2 18 2C15.3478 2 12.8043 3.05357 10.9289 4.92893C9.05357 6.8043 8 9.34784 8 12V19L4 24V26H32V24L28 19V14.4025C23.9218 12.9611 21 9.07177 21 4.5C21 3.82354 21.064 3.16202 21.1862 2.52116ZM21.46 32.897C20.4483 33.6133 19.2396 33.9986 18 34C16.7604 33.9986 15.5517 33.6133 14.54 32.897C13.5282 32.1807 12.7632 31.1687 12.35 30H23.65C23.2368 31.1687 22.4718 32.1807 21.46 32.897Z",
          }),
          (0, G.jsx)("path", {
            fill: "#FFC82C",
            d: "M36 4.5C36 6.98528 33.9853 9 31.5 9C29.0147 9 27 6.98528 27 4.5C27 2.01472 29.0147 0 31.5 0C33.9853 0 36 2.01472 36 4.5Z",
          }),
        ],
      })
    : e
      ? (0, G.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 36 36",
          fill: "none",
          ...o,
          children: [
            (0, G.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21.1862 2.52116C20.1687 2.17914 19.0936 2 18 2C15.3478 2 12.8043 3.05357 10.9289 4.92893C9.05357 6.8043 8 9.34784 8 12V19L4 24V26H32V24L28 19V14.4025C23.9218 12.9611 21 9.07177 21 4.5C21 3.82354 21.064 3.16202 21.1862 2.52116ZM21.46 32.897C20.4483 33.6133 19.2396 33.9986 18 34C16.7604 33.9986 15.5517 33.6133 14.54 32.897C13.5282 32.1807 12.7632 31.1687 12.35 30H23.65C23.2368 31.1687 22.4718 32.1807 21.46 32.897Z",
            }),
            (0, G.jsx)("path", {
              fill: "#1A9FFF",
              d: "M36 4.5C36 6.98528 33.9853 9 31.5 9C29.0147 9 27 6.98528 27 4.5C27 2.01472 29.0147 0 31.5 0C33.9853 0 36 2.01472 36 4.5Z",
            }),
          ],
        })
      : (0, G.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 36 36",
          fill: "none",
          ...o,
          children: (0, G.jsxs)("g", {
            className: "SVGIcon_Notification",
            children: [
              (0, G.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M32 24V26H4V24L8 19V12C8 9.34784 9.05357 6.8043 10.9289 4.92893C12.8043 3.05357 15.3478 2 18 2C20.6522 2 23.1957 3.05357 25.0711 4.92893C26.9464 6.8043 28 9.34784 28 12V19L32 24Z",
                fill: "currentColor",
              }),
              (0, G.jsx)("path", {
                className: "SVGIcon_Notification_Uvula",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18 34C19.2396 33.9986 20.4483 33.6133 21.46 32.897C22.4718 32.1807 23.2368 31.1687 23.65 30H12.35C12.7632 31.1687 13.5282 32.1807 14.54 32.897C15.5517 33.6133 16.7604 33.9986 18 34Z",
                fill: "currentColor",
              }),
            ],
          }),
        });
}
function P7(t) {
  return (0, G.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...t,
    children: (0, G.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57C28 10 26.5 9 23.94 7.94C20.9843 6.77796 17.7541 6.50244 14.6444 7.14712C11.5346 7.7918 8.68012 9.32875 6.43 11.57L0 18L6.43 24.43C8.10419 26.1042 10.2596 27.5 12.73 28.34ZM18 25C21.866 25 25 21.866 25 18C25 14.134 21.866 11 18 11C14.134 11 11 14.134 11 18C11 21.866 14.134 25 18 25Z",
      fill: "currentColor",
    }),
  });
}
function S7(t) {
  return (0, G.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 36 36",
    fill: "none",
    ...t,
    children: [
      (0, G.jsx)("path", {
        d: "M29.57 11.57L24.82 16.32C24.9485 16.8705 25.0089 17.4347 25 18C25 19.8565 24.2625 21.637 22.9497 22.9497C21.637 24.2625 19.8565 25 18 25C17.423 24.9983 16.8486 24.9244 16.29 24.78L12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57Z",
        fill: "currentColor",
      }),
      (0, G.jsx)("path", {
        d: "M28.94 2.94L23.94 7.94C20.9843 6.77797 17.7541 6.50244 14.6444 7.14712C11.5346 7.79181 8.68012 9.32876 6.43 11.57L0 18L6.43 24.43C6.6 24.6 6.79 24.75 6.97 24.91L3.44 28.44L5.56 30.56L31.06 5.06L28.94 2.94ZM11 18C11.0002 16.8706 11.2736 15.7581 11.7969 14.7573C12.3203 13.7565 13.078 12.8971 14.0054 12.2527C14.9328 11.6082 16.0024 11.1977 17.1229 11.0561C18.2434 10.9146 19.3815 11.0463 20.44 11.44L11.44 20.44C11.1493 19.6593 11.0003 18.833 11 18Z",
        fill: "currentColor",
      }),
    ],
  });
}
function H7(t) {
  return (0, G.jsx)("svg", {
    width: "5",
    height: "19",
    viewBox: "0 0 5 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, G.jsx)("path", {
      d: "M5 0H3C1.34315 0 0 1.34315 0 3V16C0 17.6569 1.34315 19 3 19H5V0Z",
      fill: "white",
    }),
  });
}
function x7(t) {
  return (0, G.jsx)("svg", {
    width: "5",
    height: "19",
    viewBox: "0 0 5 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, G.jsx)("path", {
      d: "M0 0H2C3.65685 0 5 1.34315 5 3V16C5 17.6569 3.65685 19 2 19H0V0Z",
      fill: "white",
    }),
  });
}
var nt = p(R());
var B7 = p(L()),
  ot = class ot extends nt.Component {
    static GetScrollableClassname() {
      return "vt-scrollable";
    }
    m_observer = null;
    m_refElement = nt.createRef();
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
      let r = this.m_refElement.current;
      if (
        (this.m_observer &&
          r != this.m_elTracked &&
          (this.m_elTracked && this.m_observer.unobserve(this.m_elTracked),
          (this.m_elTracked = null)),
        !this.m_observer && r)
      ) {
        let n = { root: this.FindScrollableAncestor(r) };
        this.props.rootMargin && (n.rootMargin = this.props.rootMargin),
          this.props.thresholds && (n.threshold = this.props.thresholds),
          (this.m_observer = Q8(r, this.OnIntersection, n));
      }
      this.m_observer &&
        r &&
        r != this.m_elTracked &&
        (this.m_observer.observe(r), (this.m_elTracked = r));
    }
    FindScrollableAncestor(e) {
      return y8(e, (r) => {
        let o = this.props.bHorizontal
          ? window.getComputedStyle(r).overflowX
          : window.getComputedStyle(r).overflowY;
        return !!(
          o == "scroll" ||
          o == "auto" ||
          r.classList.contains(ot.GetScrollableClassname())
        );
      });
    }
    OnIntersection(e, r) {
      let o = !1;
      for (let n of e)
        if (n.isIntersecting) {
          o = !0;
          break;
        }
      this.m_bPreviouslyIntersecting != o &&
        ((this.m_bPreviouslyIntersecting = o),
        this.props.onVisibilityChange && this.props.onVisibilityChange(o),
        o && this.BTriggerOnce() && this.DestroyObserver());
    }
    render() {
      let {
        onVisibilityChange: e,
        rootMargin: r,
        trigger: o,
        bHorizontal: n,
        ...i
      } = this.props;
      return (0, B7.jsx)("div", {
        ref: this.m_refElement,
        ...i,
        children: this.props.children,
      });
    }
  };
g([_], ot.prototype, "OnIntersection", 1);
var V7 = ot;
var s3 = class t {
  m_ulSteamID;
  constructor(e = 0, r, o, n) {
    e instanceof t
      ? (this.m_ulSteamID = e.m_ulSteamID)
      : typeof e == "string"
        ? (this.m_ulSteamID = xe.fromString(e, !0))
        : r && o && n !== void 0
          ? this.SetFromComponents(e ?? 0, n, o, r)
          : e
            ? (this.m_ulSteamID = xe.fromNumber(e, !0))
            : (this.m_ulSteamID = xe.UZERO);
  }
  static InitFromAccountID(e) {
    return new t(Number(e), N.EUNIVERSE, 1, p8);
  }
  static InitFromClanID(e) {
    return new t(Number(e), N.EUNIVERSE, 7, 0);
  }
  GetAccountID() {
    return this.m_ulSteamID.getLowBitsUnsigned();
  }
  GetInstance() {
    return this.m_ulSteamID.getHighBitsUnsigned() & 1048575;
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
        return "[I:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
      case 7:
        return "[g:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
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
        return "[G:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
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
        return "[P:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
      case 6:
        return "[C:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
      default:
        return "[U:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
    }
  }
  static InitFromString(e) {
    let r = new t();
    try {
      let [o, n, i, s, a] =
          e.match(/\[([I|g|A|G|M|P|C|U]):(\d+):(\d+):?(\d+)?\]/) || [],
        l = Number(i),
        u = Number(s),
        c = a ? Number(a) : 1;
      switch (n) {
        case "I":
          r.SetFromComponents(u, c, 0, l);
        case "g":
          r.SetFromComponents(u, 0, 7, l);
        case "A":
          r.SetFromComponents(u, c, 4, l);
        case "G":
          r.SetFromComponents(u, c, 3, l);
        case "M":
          r.SetFromComponents(u, c, 2, l);
        case "P":
          r.SetFromComponents(u, c, 5, l);
        case "C":
          r.SetFromComponents(u, c, 6, l);
        case "U":
          r.SetFromComponents(u, c, 1, l);
      }
    } catch {}
    return r;
  }
  BIsValid() {
    let e = this.GetAccountType();
    if (e <= 0 || e >= 11) return !1;
    let r = this.GetUniverse();
    if (r <= 0 || r >= 5) return !1;
    if (e == 1) {
      if (this.GetAccountID() == 0 || this.GetInstance() > d8) return !1;
    } else if (e == 7) {
      if (this.GetAccountID() == 0 || this.GetInstance() != 0) return !1;
    } else if (e == 3 && this.GetAccountID() == 0) return !1;
    return !0;
  }
  BIsIndividualAccount() {
    return this.GetAccountType() == 1;
  }
  BIsClanAccount() {
    return this.GetAccountType() == 7;
  }
  SetAccountID(e) {
    this.m_ulSteamID = new xe(e, this.m_ulSteamID.getHighBitsUnsigned(), !0);
  }
  SetInstance(e) {
    this.SetFromComponents(
      this.GetAccountID(),
      e,
      this.GetAccountType(),
      this.GetUniverse(),
    );
  }
  SetAccountType(e) {
    this.SetFromComponents(
      this.GetAccountID(),
      this.GetInstance(),
      e,
      this.GetUniverse(),
    );
  }
  SetUniverse(e) {
    this.SetFromComponents(
      this.GetAccountID(),
      this.GetInstance(),
      this.GetAccountType(),
      e,
    );
  }
  SetFromComponents(e, r, o, n) {
    let i = ((n & 255) << 24) + ((o & 15) << 20) + (r & 1048575),
      s = e & 4294967295;
    this.m_ulSteamID = new xe(s, i, !0);
  }
};
var O1 = p(R()),
  l9 = p(P2());
var Ge = p(R());
var g2 = p(R());
var T7 = { m_unPID: 0, m_nBrowserID: -1 };
var a3 = class {
  m_fnRender;
  m_rgLoadingLinks = [];
  constructor(e, r, o) {
    if (((this.m_rgLoadingLinks = []), o))
      for (let n = 0; n < o.length; n++) this.AddLink(o[n], !0);
    else if (e) {
      let n = e.getElementsByTagName("link");
      for (let i = 0; i < n.length; i++) {
        let s = n[i];
        this.AddLink(s, !1);
      }
    }
  }
  AddLink(e, r) {
    if (r) {
      let o = !1;
      try {
        (!e.sheet || !e.sheet.cssRules || e.sheet.cssRules.length == 0) &&
          (o = !0);
      } catch {}
      o &&
        (e.addEventListener("load", this.OnLinkLoad),
        this.m_rgLoadingLinks.push(e));
    } else
      e.addEventListener("load", this.OnLinkLoad),
        this.m_rgLoadingLinks.push(e);
  }
  SetTarget(e) {
    (this.m_fnRender = e),
      this.m_rgLoadingLinks.length == 0 &&
        (this.m_fnRender(), (this.m_fnRender = void 0));
  }
  OnLinkLoad(e) {
    e.currentTarget.removeEventListener("load", this.OnLinkLoad),
      oe(this.m_rgLoadingLinks, e.currentTarget),
      this.m_rgLoadingLinks.length == 0 &&
        (this.m_fnRender?.(), (this.m_fnRender = void 0));
  }
};
g([_], a3.prototype, "OnLinkLoad", 1);
var So = p(R());
function w4() {
  return O8() ? 256 : 0;
}
function C3(t) {
  let e = 0;
  switch (t) {
    case 0:
      return (e |= 8192), (e |= 8), (e |= 512), (e |= 4194304), e;
    case 1:
      return (e |= C3(0)), (e |= 16384), (e |= 262144), (e |= 1048576), e;
    case 2:
      return (
        (e |= C3(0)), (e |= 262144), (e |= 16384), (e |= 4), (e |= w4()), e
      );
    case 3:
      return (
        (e |= 8),
        (e |= 262144),
        (e |= 16384),
        (e |= 65536),
        (e |= 4194304),
        (e |= w4()),
        e
      );
    case 4:
      return (
        (e = 8),
        (e |= 262144),
        (e |= 16384),
        (e |= 1048576),
        (e |= 4194304),
        (e |= w4()),
        e
      );
  }
}
function E7() {
  let { ownerWindow: t } = H1();
  return l2.GetPopupForWindow(t)?.browser_info || T7;
}
var A7 = g2.createContext({ ownerWindow: window }),
  H1 = () => g2.useContext(A7);
function R4(t) {
  let { ownerWindow: e, children: r } = t,
    o = g2.useMemo(() => ({ ownerWindow: e }), [e]);
  return g2.createElement(A7.Provider, { value: o }, r);
}
var T1 = class {
  m_strName;
  m_strTitle;
  m_rgParams;
  m_popup;
  m_element;
  m_renderWhenReady;
  m_bCreateHidden;
  m_bCreated = !1;
  m_onCreateRender = null;
  m_bFocused = !1;
  constructor(e, r) {
    l1(this),
      Y(
        e,
        "Name is required.  This is an internal name, different from title.",
      ),
      (this.m_strName = e);
    let { title: o, eCreationFlags: n, ...i } = r;
    (this.m_rgParams = { ...i, eCreationFlags: n ?? 0 }),
      this.m_rgParams.target_browser &&
        (this.m_strName += "_uid" + this.m_rgParams.target_browser.m_unPID),
      (this.m_bCreateHidden = !!(this.m_rgParams.eCreationFlags & 2)),
      (this.m_strTitle = o);
  }
  UpdateParamsBeforeShow(e) {
    return e;
  }
  OnDrop(e) {
    console.log("Ignoring drop onto toplevel window", e),
      e.preventDefault(),
      e.stopPropagation();
  }
  OnDragOver(e) {
    e.preventDefault(),
      (e.dataTransfer.dropEffect = "none"),
      e.stopPropagation();
  }
  OnMessage(e) {
    e.data == "window_moved" && this.OnResize(),
      e.data == "popup-created" && this.OnCreateInternal();
  }
  Show(e = 1) {
    let r;
    typeof e == "boolean" ? (r = e ? 1 : 0) : (r = e),
      window.SteamClient && (this.m_rgParams.eCreationFlags |= 2),
      this.m_rgParams.eCreationFlags & 512 && (r = 0),
      this.BIsValid() &&
        (this.BIsClosed()
          ? ((this.m_popup = void 0), (this.m_element = void 0))
          : r != 0 && this.Focus(r));
    let o = l2.GetExistingPopup(this.m_strName);
    if (o && !this.m_rgParams.replace_existing_popup) return;
    this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams);
    let n, i, s;
    o
      ? ((i = o.m_element),
        (n = o.m_popup),
        o.ReleasePopup(),
        (s = o.m_renderWhenReady),
        l2.RemoveTrackedPopup(o),
        n?.removeEventListener("beforeunload", o.OnBeforeUnloadEvent),
        n?.removeEventListener("unload", o.OnUnload),
        n?.removeEventListener("resize", o.OnResizeEvent),
        n?.removeEventListener("focus", this.OnFocusInternal),
        n?.removeEventListener("blur", this.OnBlurInternal),
        n?.removeEventListener("drop", o.OnDrop),
        n?.removeEventListener("dragover", o.OnDragOver),
        n?.removeEventListener("message", this.OnMessage))
      : (({ popup: n, element: i } = l3.CreatePopup(this.m_strName, {
          ...this.m_rgParams,
          title: this.m_strTitle,
        })),
        (s = new a3(n?.document, i))),
      n &&
        i &&
        ((n.document.title = this.m_strTitle),
        n.addEventListener("beforeunload", this.OnBeforeUnloadEvent),
        n.addEventListener("unload", this.OnUnload),
        n.addEventListener("resize", this.OnResizeEvent),
        n.addEventListener("focus", this.OnFocusInternal),
        n.addEventListener("blur", this.OnBlurInternal),
        n.addEventListener("drop", this.OnDrop),
        n.addEventListener("dragover", this.OnDragOver),
        n.addEventListener("message", this.OnMessage),
        N.LANGUAGE &&
          n.document.documentElement.setAttribute("lang", s4() ?? ""),
        (this.m_popup = n),
        (this.m_element = i),
        (this.m_renderWhenReady = s),
        this.m_renderWhenReady?.SetTarget(() => {
          this.m_popup &&
            this.m_element &&
            this.RenderInternal(this.m_popup, this.m_element, r);
        })),
      l2.AddTrackedPopup(this),
      o && (this.OnCreateInternal(), r != 0 && this.Focus(r));
  }
  RemoveEventListeners() {
    this.window?.removeEventListener("beforeunload", this.OnBeforeUnloadEvent),
      this.window?.removeEventListener("unload", this.OnUnload),
      this.window?.removeEventListener("resize", this.OnResizeEvent),
      this.window?.removeEventListener("focus", this.OnFocusInternal),
      this.window?.removeEventListener("blur", this.OnBlurInternal),
      this.window?.removeEventListener("drop", this.OnDrop),
      this.window?.removeEventListener("dragover", this.OnDragOver),
      this.window?.removeEventListener("message", this.OnMessage);
  }
  RenderInternal(e, r, o) {
    if (!this.m_bCreated) {
      this.m_onCreateRender = () => this.RenderInternal(e, r, o);
      return;
    }
    this.browser_info &&
      w7(this.browser_info.m_eBrowserType) &&
      (r.ownerDocument.body.className += " VR"),
      this.Render(e, r),
      this.OnLoad(),
      e?.SteamClient &&
        !this.m_bCreateHidden &&
        (o != 0
          ? e.SteamClient.Window.BringToFront(o)
          : e.SteamClient.Window.ShowWindow());
  }
  OnCreateInternal() {
    this.m_bCreated ||
      ((this.m_bCreated = !0),
      this.OnCreate(),
      this.m_onCreateRender &&
        (this.m_onCreateRender(), (this.m_onCreateRender = null)));
  }
  OnCreate() {}
  OnResizeEvent() {
    this.OnResize();
  }
  OnBeforeUnloadEvent() {
    this.OnBeforeUnload();
  }
  OnUnload(e) {
    this.RemoveEventListeners(),
      l2.RemoveTrackedPopup(this),
      this.OnClose(),
      (this.m_popup = void 0);
  }
  get browser_info() {
    return this.m_rgParams.target_browser;
  }
  get window() {
    return this.m_popup;
  }
  get root_element() {
    return this.m_element;
  }
  get title() {
    return this.m_strTitle;
  }
  set title(e) {
    (this.m_strTitle = e),
      this.m_popup && (this.m_popup.document.title = this.m_strTitle);
  }
  get params() {
    return this.m_rgParams;
  }
  Focus(e = 1) {
    e != 0 &&
      (this.m_popup &&
      typeof this.m_popup.SteamClient < "u" &&
      typeof this.m_popup.SteamClient.Window < "u"
        ? this.m_popup.SteamClient.Window.BringToFront(e)
        : this.m_popup && this.m_popup.focus());
  }
  Close() {
    this.m_popup &&
      (f1(this.m_popup.window, "Window.Close")
        ? this.m_popup.window.SteamClient.Window.Close()
        : this.m_popup.window.close());
  }
  GetName() {
    return this.m_strName;
  }
  BIsValid() {
    return !!this.m_popup;
  }
  BIsClosed() {
    return !this.m_popup || this.m_popup.closed;
  }
  BIsVisible() {
    return !!(
      this.m_popup &&
      !this.m_popup.closed &&
      this.m_popup.document.visibilityState == "visible"
    );
  }
  BIsFocused() {
    return this.BIsVisible() && !!this.m_popup?.document.hasFocus();
  }
  OnFocusInternal() {
    this.m_popup && this.m_popup.document.body.classList.add("WindowFocus"),
      (this.m_bFocused = !0),
      this.OnFocus();
  }
  OnBlurInternal() {
    this.m_popup && this.m_popup.document.body.classList.remove("WindowFocus"),
      (this.m_bFocused = !1),
      this.OnBlur();
  }
  get focused() {
    return this.m_bFocused;
  }
  GetWindowRestoreDetails() {
    return f1(this.m_popup, "Window.GetWindowRestoreDetails") &&
      !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.GetWindowRestoreDetails()
      : Promise.resolve("");
  }
  IsMinimized() {
    return f1(this.m_popup, "Window.IsWindowMinimized") && !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.IsWindowMinimized()
      : Promise.resolve(!1);
  }
  IsMaximized() {
    return f1(this.m_popup, "Window.IsWindowMaximized") && !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.IsWindowMaximized()
      : Promise.resolve(!1);
  }
  ReleasePopup() {
    this.OnClose(), (this.m_popup = null);
  }
  OnResize() {
    this.IsMaximized().then((e) => {
      e
        ? this.m_popup?.document.body.classList.add("Maximized")
        : this.m_popup?.document.body.classList.remove("Maximized");
    });
  }
  OnBeforeUnload() {}
  OnFocus() {}
  OnBlur() {}
};
g([O], T1.prototype, "m_bFocused", 2),
  g([_], T1.prototype, "OnMessage", 1),
  g([_], T1.prototype, "RenderInternal", 1),
  g([_], T1.prototype, "OnCreateInternal", 1),
  g([_], T1.prototype, "OnResizeEvent", 1),
  g([_], T1.prototype, "OnBeforeUnloadEvent", 1),
  g([_], T1.prototype, "OnUnload", 1),
  g([_], T1.prototype, "OnFocusInternal", 1),
  g([_], T1.prototype, "OnBlurInternal", 1);
var b4 = class extends T1 {
  m_strSavedDimensionsKey;
  m_strInitialSavedDimensionsKey;
  m_strInitialRestoreDetails;
  m_bExpires;
  constructor(e, r, o, n) {
    super(e, o), this.SetSavedDimensionsKey(r), (this.m_bExpires = n);
  }
  BIsInOverlay() {
    return (
      this.browser_info &&
      this.browser_info.m_unPID != 0 &&
      this.browser_info.m_nBrowserID != -1
    );
  }
  SetSavedDimensionsKey(e) {
    this.m_strSavedDimensionsKey = e;
  }
  UpdateParamsBeforeShow(e) {
    return (
      this.m_strSavedDimensionsKey &&
      !e.bIgnoreSavedDimensions &&
      !e.strRestoreDetails
        ? ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
          (e.strRestoreDetails = l2.GetRestoreDetails(
            this.m_strInitialSavedDimensionsKey,
          )))
        : e.strRestoreDetails &&
          ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
          l2.SetRestoreDetails(
            this.m_strInitialSavedDimensionsKey,
            e.strRestoreDetails,
            this.m_bExpires,
          )),
      e
    );
  }
  OnLoad() {
    this.GetWindowRestoreDetails().then((e) => {
      (this.m_strInitialRestoreDetails = e), this.OnResizeComplete(e);
    });
  }
  OnResize() {
    super.OnResize(), this.QueryAndStoreWindowPosition();
  }
  OnResizeComplete(e) {}
  QueryAndStoreWindowPosition() {
    if (this.m_strInitialRestoreDetails) {
      let e = this.GetSavedDimensionsKey();
      this.m_popup?.setTimeout(() => {
        this.GetWindowRestoreDetails().then((r) => {
          let o =
            this.m_rgParams.strRestoreDetails == r &&
            e == this.m_strInitialSavedDimensionsKey;
          this.m_popup &&
            this.m_strSavedDimensionsKey &&
            r &&
            !o &&
            (l2.SetRestoreDetails(e, r, this.m_bExpires),
            (this.m_rgParams.strRestoreDetails = r),
            (this.m_strInitialSavedDimensionsKey = e),
            this.OnResizeComplete(r));
        });
      }, 30);
    }
  }
  OnBeforeUnload() {
    this.QueryAndStoreWindowPosition(), super.OnBeforeUnload();
  }
  OnClose() {}
  SaveWindowPosition(e) {
    l2.SetRestoreDetails(this.GetSavedDimensionsKey(), e, !1),
      (this.m_rgParams.strRestoreDetails = e);
  }
};
g([_], b4.prototype, "QueryAndStoreWindowPosition", 1);
var l3 = class {
  m_bShuttingDown = !1;
  m_mapPopups = O.map([], { deep: !1 });
  m_rgShutdownCallbacks = [];
  m_rgPopupCreatedCallbacks = new w1();
  m_rgPopupDestroyedCallbacks = new w1();
  m_unCurrentAccountID = 0;
  m_mapRestoreDetails = new Map();
  m_bSaveRequired = !1;
  m_DynamicCSSObserver;
  constructor() {
    if ("addEventListener" in window) {
      window.addEventListener("beforeunload", (r) => {
        this.m_bShuttingDown = !0;
        for (let n of this.m_rgShutdownCallbacks) n();
        let o = [];
        this.m_mapPopups.forEach((n) => {
          n.BIsValid() && !n.BIsClosed() && o.push(n);
        });
        for (let n of o)
          n.window?.SteamClient.Browser?.SetShouldExitSteamOnBrowserClosed &&
            n.window.SteamClient.Browser.SetShouldExitSteamOnBrowserClosed(!1),
            n.window?.SteamClient.Window.SetHideOnClose &&
              n.window?.SteamClient.Window.SetHideOnClose(!1),
            n.Close();
        this.m_bSaveRequired && this.SaveSavedDimensionStore(),
          this.m_mapPopups.clear();
      });
      let e = document.querySelector("head");
      Y(e, "Couldn't find head element"),
        e &&
          ((this.m_DynamicCSSObserver = new MutationObserver(() => {
            let r = n4();
            this.m_mapPopups.forEach((o) => {
              S8(o.window.document, r, !1);
            });
          })),
          this.m_DynamicCSSObserver.observe(e, { childList: !0 }));
    }
  }
  BAnyPopupHasFocus() {
    for (let e of this.m_mapPopups.values()) if (e.focused) return !0;
    return !1;
  }
  BAnyMenuHasFocus() {
    for (let e of this.m_mapPopups.values())
      if (e.focused && (e.params.eCreationFlags ?? 0) & 8) return !0;
    return !1;
  }
  SetCurrentLoggedInAccountID(e) {
    this.m_unCurrentAccountID != e &&
      ((this.m_unCurrentAccountID = e),
      e ? this.LoadSavedDimensionStore() : this.ClearSavedDimensionStore());
  }
  AddShutdownCallback(e) {
    this.m_rgShutdownCallbacks.push(e);
  }
  AddPopupCreatedCallback(e) {
    return this.m_rgPopupCreatedCallbacks.Register(e);
  }
  AddPopupDestroyedCallback(e) {
    return this.m_rgPopupDestroyedCallbacks.Register(e);
  }
  AddTrackedPopup(e) {
    this.m_mapPopups.set(e.GetName(), e),
      e.BIsValid() && this.m_rgPopupCreatedCallbacks.Dispatch(e);
  }
  RemoveTrackedPopup(e) {
    this.m_rgPopupDestroyedCallbacks.Dispatch(e),
      this.m_mapPopups.delete(e.GetName());
  }
  GetExistingPopup(e) {
    return this.m_mapPopups.get(e);
  }
  GetPopups() {
    return this.m_mapPopups.values();
  }
  GetPopupForWindow(e) {
    for (let r of this.m_mapPopups.values()) if (r.window === e) return r;
  }
  ClosePopupsOwnedByBrowser(e) {
    this.m_mapPopups.forEach((r) => {
      r.browser_info &&
        r.browser_info.m_nBrowserID == e.m_nBrowserID &&
        r.browser_info.m_unPID == e.m_unPID &&
        r.Close();
    });
  }
  static CreatePopup(e, r) {
    let o = r.dimensions || {},
      n = o.width || 300,
      i = o.height || 300,
      s = r.title,
      a = "width=" + n + ",height=" + i;
    typeof o.left < "u" && (a += ",left=" + o.left),
      typeof o.top < "u" && (a += ",top=" + o.top),
      (a += ",resizeable,status=0,toolbar=0,menubar=0,location=0");
    let l = "about:blank",
      u = [];
    u.push("createflags=" + r.eCreationFlags),
      r.minWidth && u.push("minwidth=" + r.minWidth),
      r.minHeight && u.push("minheight=" + r.minHeight),
      r.maxWidth && r.maxWidth != 1 / 0 && u.push("maxwidth=" + r.maxWidth),
      r.maxHeight && r.maxHeight != 1 / 0 && u.push("maxheight=" + r.maxHeight),
      r.target_browser
        ? (u.push("pid=" + r.target_browser.m_unPID),
          u.push("browser=" + r.target_browser.m_nBrowserID),
          r.target_browser.m_eBrowserType
            ? u.push("browserType=" + r.target_browser.m_eBrowserType)
            : r.browserType && u.push("browserType=" + r.browserType),
          r.availscreenwidth &&
            r.availscreenheight &&
            (u.push("screenavailwidth=" + r.availscreenwidth),
            u.push("screenavailheight=" + r.availscreenheight)))
        : r.browserType && u.push("browserType=" + r.browserType),
      r.strVROverlayKey && u.push("vrOverlayKey=" + r.strVROverlayKey),
      r.strRestoreDetails && u.push("restoredetails=" + r.strRestoreDetails),
      r.window_opener_id && u.push("openerid=" + r.window_opener_id),
      r.parent_container_popup_id &&
        u.push("parentcontainerpopupid=" + r.parent_container_popup_id),
      r.center_on_window &&
        typeof o.left > "u" &&
        typeof o.top > "u" &&
        u.push(
          "centerOnBrowserID=" +
            r.center_on_window.SteamClient.Browser.GetBrowserID(),
        ),
      r.strUserAgent && u.push("useragent=" + r.strUserAgent),
      r.hwndParent && u.push("hwndParent=" + r.hwndParent),
      r.bPinned && u.push("pinned=true"),
      r.bModal && u.push("modal=true"),
      u && (l += "?" + u.join("&"));
    let m = (r.owner_window || window).open(l, e, a);
    if (!m)
      return (
        console.error(
          `Failed to create popup, browser/CEF may be blocking popups for "${window.location.origin}"`,
        ),
        {}
      );
    let f = "";
    r.html_class && (f = `class="${r.html_class}"`);
    let k = "";
    r.body_class && (k = `class="${r.body_class}"`);
    let M = "";
    r.body_role && (M = `role="${r.body_role}"`);
    let b = "";
    r.popup_class && (b = `class="${r.popup_class}"`);
    let w = `<!DOCTYPE html><html ${f}><head><title></title></head><body ${k} ${M}><div id="popup_target" ${b}></div></body></html>`;
    return (
      m.document.write(w),
      (m.document.title = s),
      m.document.close(),
      P8(m, n4()),
      { popup: m, element: m.document.getElementById("popup_target") }
    );
  }
  BShuttingDown() {
    return this.m_bShuttingDown;
  }
  GetLocalStorageKey() {
    return "PopupSavedDimensions_" + this.m_unCurrentAccountID;
  }
  LoadSavedDimensionStore() {
    if (!this.m_unCurrentAccountID) return;
    let e = this.GetLocalStorageKey();
    this.m_mapRestoreDetails.clear();
    let r = window.localStorage.getItem(e);
    if (r)
      try {
        let o = JSON.parse(r);
        this.m_mapRestoreDetails = new Map(o);
      } catch {}
  }
  SaveSavedDimensionStore() {
    if (!this.m_unCurrentAccountID || !this.m_bSaveRequired) return;
    let e = this.GetLocalStorageKey(),
      r = JSON.stringify(Array.from(this.m_mapRestoreDetails));
    try {
      window.localStorage.setItem(e, r), (this.m_bSaveRequired = !1);
    } catch (o) {
      if ("name" in o && o.name == "QuotaExceededError") {
        console.log("Quota exceeded");
        for (let n of Object.keys(window.localStorage))
          n.startsWith("PopupSavedDimensions_") &&
            n != e &&
            window.localStorage.removeItem(n);
        window.localStorage.setItem(e, r), (this.m_bSaveRequired = !1);
      }
    }
  }
  DebouncedSaveSavedDimensionStore() {
    this.SaveSavedDimensionStore();
  }
  ClearSavedDimensionStore() {
    this.m_mapRestoreDetails?.clear(), (this.m_bSaveRequired = !1);
  }
  GetRestoreDetails(e) {
    if (!this.m_mapRestoreDetails?.has(e)) return "";
    let r = this.m_mapRestoreDetails.get(e);
    return (
      (r.last_used = Date.now()),
      (this.m_bSaveRequired = !0),
      r.strRestoreDetails
    );
  }
  SetRestoreDetails(e, r, o) {
    if (e) {
      if (r) {
        if (this.m_mapRestoreDetails.size > 50) {
          let i = null,
            s = Date.now();
          for (let a of Array.from(this.m_mapRestoreDetails.keys())) {
            let l = this.m_mapRestoreDetails.get(a);
            l.last_used < s && l.bExpires && ((s = l.last_used), (i = a));
          }
          i && this.m_mapRestoreDetails.delete(i);
        }
        let n = { strRestoreDetails: r, last_used: Date.now(), bExpires: o };
        this.m_mapRestoreDetails.set(e, n);
      } else this.m_mapRestoreDetails.delete(e);
      (this.m_bSaveRequired = !0),
        this.m_bShuttingDown
          ? this.SaveSavedDimensionStore()
          : this.DebouncedSaveSavedDimensionStore();
    }
  }
};
g([_, $3(100)], l3.prototype, "DebouncedSaveSavedDimensionStore", 1);
var l2 = new l3();
window.g_PopupManager = l2;
var G7 = p(L()),
  D7 = Ge.default.createContext(null);
function Z7(t) {
  let {
      refContextMenuManager: e,
      bRegisterMenuManager: r = !0,
      children: o,
    } = t,
    i = H1()?.ownerWindow || window,
    s = Ge.default.useRef();
  return (
    s.current || (s.current = new Ie()),
    Ge.default.useLayoutEffect(() => {
      if (r)
        return (
          tt.SetMenuManager(i, s.current), () => tt.SetMenuManager(i, void 0)
        );
    }, [i, r]),
    Ge.default.useLayoutEffect(
      () => (m2(e, s.current), () => m2(e, void 0)),
      [e],
    ),
    (0, G7.jsx)(D7.Provider, { value: s.current, children: o })
  );
}
function I7() {
  return Ge.default.useContext(D7);
}
var U2 = p(R()),
  W7 = p(P2());
var N2 = p(R());
var u3 = p(R());
var xo = p(L()),
  Ho = u3.createContext({ body_class: "" });
function F7() {
  return u3.useContext(Ho);
}
function c3(t, e, r) {
  let o = N2.useRef(void 0),
    [n, i] = N2.useState(void 0),
    s = F7();
  return (
    o.current || (o.current = new y4(t, Vo(e, s), i)),
    (o.current.m_callbacks = r),
    N2.useEffect(() => {
      if (!o.current?.params.bNoInitialShow) {
        let a = o.current?.params.bNoFocusOnShow ? 2 : 1;
        o.current?.Show(a);
      }
      return () => {
        (o.current.m_callbacks = void 0),
          o.current.window?.SteamClient.Window.SetHideOnClose &&
            o.current.window?.SteamClient.Window.SetHideOnClose(!1),
          o.current.Close();
      };
    }, []),
    N2.useEffect(() => {
      o.current.window?.SteamClient.Window.SetHideOnClose &&
        o.current.window?.SteamClient.Window.SetHideOnClose(!!e.bHideOnClose);
    }, [e.bHideOnClose]),
    { popup: o.current.window, element: n, popupObj: o.current }
  );
}
function Vo(t, e) {
  return { ...t, body_class: v(t.body_class, e.body_class) };
}
var y4 = class extends T1 {
  m_callbacks;
  m_fnReadyToRender;
  constructor(e, r, o) {
    super(e, r), (this.m_fnReadyToRender = o);
  }
  DoCallback(e) {
    this.m_callbacks?.[e]?.(this.m_popup, this.m_element);
  }
  UpdateParamsBeforeShow(e) {
    return this.m_callbacks?.updateParamsBeforeShow
      ? this.m_callbacks.updateParamsBeforeShow(e)
      : e;
  }
  OnCreate() {
    this.m_callbacks?.onCreate &&
      this.m_callbacks.onCreate(this.m_popup, this.m_element);
  }
  OnBlur() {
    this.DoCallback("onBlur");
  }
  OnFocus() {
    this.DoCallback("onFocus");
  }
  OnLoad() {
    this.DoCallback("onLoad");
  }
  OnResize() {
    this.DoCallback("onResize");
  }
  OnClose() {
    this.DoCallback("onClose");
  }
  Render(e, r) {
    this.m_fnReadyToRender(r);
  }
};
var W1 = p(L());
function O7(t) {
  let { managerOverride: e, bSuppressMouseOverlay: r } = t,
    o = Ve(),
    n = E7(),
    i = I7(),
    s = e ?? i;
  ne(s.OnMenusChanged, o);
  let a = !r && s.BShouldRenderMouseOverlay(),
    l = s.GetAllMenus();
  return (0, W1.jsxs)(W1.Fragment, {
    children: [
      a && (0, W1.jsx)(R7, {}),
      l.map((u) =>
        (0, W1.jsx)(
          G1,
          { children: (0, W1.jsx)(To, { instance: u, browserInfo: n }) },
          u.key,
        ),
      ),
    ],
  });
}
function To(t) {
  let { instance: e, browserInfo: r, children: o } = t,
    n = !1,
    i = le(),
    s = H1().ownerWindow,
    a = U2.default.useRef(void 0);
  a.current === void 0 &&
    (a.current =
      (n || e.options.bForcePopup || s.innerWidth < 400 || i?.BOnlyPopups()) &&
      !!s.SteamClient?.Window);
  let l = U2.default.useMemo(
      () => ({ instance: e, styles: b1, presentation: 0 }),
      [e],
    ),
    u = o || e.ReactElement;
  return (0, W1.jsx)(De.Provider, {
    value: l,
    children: a.current
      ? (0, W1.jsx)(Ao, { instance: e, browserInfo: r, children: u })
      : (0, W1.jsx)(Eo, { instance: e, children: u }),
  });
}
function Eo(t) {
  let { instance: e, children: r } = t;
  return (0, W1.jsx)(J1, { ...e.position, children: r });
}
function Ao(t) {
  let { instance: e, browserInfo: r, children: o } = t,
    n = U2.default.useRef(null),
    s = H1().ownerWindow,
    a = s.SteamClient.Browser.GetBrowserID(),
    l = U2.default.useCallback(
      (f) => {
        let { options: k, position: M } = e,
          b = M.element;
        if (k.bScreenCoordinates)
          f.dimensions = {
            left: M.clientX,
            top: M.clientY,
            width: 2,
            height: 1,
          };
        else {
          let w = U3(s, b.getBoundingClientRect());
          (f.dimensions = { left: w.right, top: w.top, width: 2, height: 1 }),
            (f.availscreenwidth = s.screen.availWidth),
            (f.availscreenheight = s.screen.availHeight);
        }
        return f;
      },
      [s, e],
    ),
    u = e.options.bStandalone ? C3(4) : C3(3);
  e.options.bCreateHidden && (u |= 2), e.options.bAlwaysOnTop && (u |= 8192);
  let { popupObj: c, element: m } = c3(
    "contextmenu_" + e.key,
    {
      title: e.options.title || "Menu",
      html_class: b1.ContextMenuPopup + " client_chat_frame",
      body_class: "ContextMenuPopupBody",
      replace_existing_popup: !1,
      target_browser: r,
      window_opener_id: a,
      bHideOnClose: !0,
      eCreationFlags: u,
    },
    { updateParamsBeforeShow: l },
  );
  return (
    (0, U2.useEffect)(() => {
      if (c)
        if (e.visible) {
          n.current && n.current.PositionMenu(),
            n.current && n.current.PositionPopupWindow();
          let f = e.options.bNoFocusWhenShown ? 2 : 1;
          e.TakeFocus(f);
        } else
          e.options.bRetainOnHide &&
            window.setTimeout(() => {
              c.window?.SteamClient.Window.HideWindow();
            }, 30);
    }, [c, e, e.visible]),
    N7(c.window),
    U2.default.useEffect(() => {
      e.SetPopup(c);
    }, [e, c]),
    m
      ? W7.default.createPortal(
          (0, W1.jsx)(J1, {
            ref: n,
            ...e.position,
            parentWin: s,
            popup: c,
            children: o,
          }),
          m,
        )
      : null
  );
}
var Fe = p(R());
function U7(t) {
  let [e, r] = (0, Fe.useState)(!1);
  return (
    (0, Fe.useEffect)(() => {
      (0, Fe.startTransition)(() => {
        r(!0);
      });
    }, []),
    e ? t.children : (t.fallback ?? null)
  );
}
var Q1 = p(R());
var j7 = p(P2());
var p3 = p(R());
var z2 = p(R());
function P4(t) {
  let [e, r] = z2.default.useState(!1),
    o = z2.default.useCallback(() => {
      f1(t, "Window.IsWindowMaximized")
        ? t.SteamClient.Window.IsWindowMaximized().then((n) => {
            r(n);
          })
        : t?.screen &&
          r(
            t.screen.availWidth == t.innerWidth &&
              t.screen.availHeight == t.innerHeight,
          );
    }, [t]);
  return (
    z2.default.useEffect(o, [o, t]),
    N3(t, "resize", o),
    r4(t, ["window_moved"], o),
    e
  );
}
function z7(t, e = 100) {
  let [r, o] = z2.default.useState(!1),
    n = z2.default.useCallback(() => o(!0), [o]),
    i = z2.default.useCallback(() => o(!1), [o]);
  return (
    z2.default.useEffect(() => {
      if (t)
        return (
          t.addEventListener("focus", n),
          t.addEventListener("blur", i),
          () => {
            t.removeEventListener("focus", n), t.removeEventListener("blur", i);
          }
        );
    }, [t, n, i]),
    k8(r, e)
  );
}
var C1 = p(L());
function Do(t) {
  let { popup: e, onMaximize: r, bOSX: o } = t,
    n = P4(e),
    i = p3.useCallback(() => {
      r
        ? r()
        : f1(e, "Window.ToggleMaximize") &&
          e.SteamClient.Window.ToggleMaximize();
    }, [e, r]);
  return (0, C1.jsx)(S4, {
    className: v(n ? "restoreButton" : "maximizeButton", "windowControlButton"),
    onClick: i,
    children: !o && (n ? (0, C1.jsx)(Y8, {}) : (0, C1.jsx)(j8, {})),
  });
}
function Zo(t) {
  let { popup: e, onMinimize: r, bOSX: o } = t,
    n = p3.useCallback(() => {
      e.SteamClient.Window.Minimize();
    }, [e]);
  return (0, C1.jsx)(S4, {
    className: "minimizeButton windowControlButton",
    onClick: r ?? n,
    children: !o && (0, C1.jsx)(q8, {}),
  });
}
function Io(t) {
  let { popup: e, onClose: r, bOSX: o } = t,
    n = p3.useCallback(() => {
      e && (f1(e, "Window.Close") ? e.SteamClient.Window.Close() : e.close());
    }, [e]);
  return (0, C1.jsx)(S4, {
    className: "closeButton windowControlButton",
    onClick: r ?? n,
    children: !o && (0, C1.jsx)(G2, {}),
  });
}
function S4(t) {
  let { className: e, onClick: r, children: o } = t,
    n = p3.useCallback(
      (i) => {
        r && (i.stopPropagation(), r(i));
      },
      [r],
    );
  return (0, C1.jsx)("div", {
    className: v("title-area-icon", e),
    onClick: n,
    children: (0, C1.jsx)("div", {
      className: "title-area-icon-inner",
      children: o,
    }),
  });
}
function H4(t) {
  let {
      className: e,
      style: r,
      hideActions: o,
      hideClose: n,
      hideMin: i,
      hideMax: s,
      bOSX: a = N8(),
      bForceWindowFocused: l,
      onMinimize: u,
      onMaximize: c,
      onClose: m,
      extraActions: f,
      popup: k,
      children: M,
    } = t,
    b = z7(k);
  return (0, C1.jsxs)("div", {
    className: v(
      "TitleBar",
      "title-area",
      a && "OSX",
      (b || l) && "WindowFocus",
      e,
    ),
    style: r,
    children: [
      (0, C1.jsx)("div", { className: "title-area-highlight" }),
      (0, C1.jsx)("div", { className: "title-area-children", children: M }),
      !o &&
        (0, C1.jsxs)(C1.Fragment, {
          children: [
            f &&
              (0, C1.jsx)("div", {
                className: "title-bar-actions extra-actions",
                children: f,
              }),
            (0, C1.jsxs)("div", {
              className: "title-bar-actions window-controls",
              children: [
                !n && (0, C1.jsx)(Io, { popup: k, onClose: m, bOSX: a }),
                !s && (0, C1.jsx)(Do, { popup: k, onMaximize: c, bOSX: a }),
                !i && (0, C1.jsx)(Zo, { popup: k, onMinimize: u, bOSX: a }),
              ],
            }),
          ],
        }),
    ],
  });
}
var We = p(L());
function q7(t) {
  let { Modal: e } = t,
    { name: r, modalProps: o, options: n } = e,
    i = H1().ownerWindow,
    { popup: s, element: a } = c3(
      r,
      {
        title: o.strTitle,
        html_class:
          "client_chat_frame fullheight ModalDialogPopup LegacyPopup " +
          (o.className || ""),
        body_class: "fullheight ModalDialogBody",
        popup_class: "fullheight popup_chat_frame",
        owner_window: void 0,
        replace_existing_popup: !0,
        target_browser: o.browserContext,
        availscreenwidth: i.screen.availWidth,
        availscreenheight: i.screen.availHeight,
        bModal: o.bHideMainWindowForPopouts,
      },
      {
        updateParamsBeforeShow: (c) => Go(c, o, n, i),
        onClose: () => o.fnOnClose && o.fnOnClose(),
      },
    );
  N3(i, "click", () => s?.SteamClient.Window.BringToFront());
  let l = n?.bHideActions,
    u =
      typeof n?.nDragAreaHeight == "number"
        ? { height: n.nDragAreaHeight }
        : void 0;
  return a
    ? j7.createPortal(
        (0, We.jsx)(R4, {
          ownerWindow: s,
          children: (0, We.jsxs)("div", {
            className: "PopupFullWindow",
            onContextMenu: _4,
            children: [
              (0, We.jsx)(H4, {
                hideMin: !0,
                hideMax: !0,
                popup: s,
                hideActions: l,
                style: u,
              }),
              (0, We.jsx)(x4, {
                browserInfo: o.browserContext,
                bCenterPopupsOnWindow: n.bCenterOnWindow,
                children: e.element,
              }),
            ],
          }),
        }),
        a,
      )
    : null;
}
function Go(t, e, r, o) {
  let n,
    i,
    s = e.popupWidth || 500,
    a = e.popupHeight || 400,
    l;
  if (N.IN_CLIENT && o?.SteamClient?.Browser?.GetBrowserID)
    l = o.SteamClient.Browser.GetBrowserID();
  else {
    let u = o.screen;
    (n = (u.availWidth - s) / 2), (i = (u.availHeight - a) / 2);
    let c = u;
    typeof c.availLeft < "u" &&
      typeof c.availTop < "u" &&
      ((n += c.availLeft), (i += c.availTop));
  }
  return {
    ...t,
    dimensions: { width: s, height: a, left: n, top: i },
    center_on_window: r.bCenterOnWindow ? o : void 0,
    window_opener_id: l,
  };
}
var g1 = p(R()),
  Y7 = p(P2());
var it = p(L());
function X7(t) {
  let { ModalManager: e } = t,
    [r, o] = g1.useState(void 0),
    [n, i] = g1.useState(!0),
    s = g1.useRef(0),
    a = g1.useCallback(() => {
      g1.startTransition(() => {
        i(!0);
      });
    }, []);
  g1.useEffect(() => e.RegisterMeasureModalCallback(a).Unregister, [e, a]),
    g1.useLayoutEffect(() => {
      r ||
        g1.startTransition(() => {
          o(e.TakeMeasureModalRequest()), i(!1);
        });
    }, [e, r, n]);
  let l = g1.useCallback((u) => {
    s.current++,
      g1.startTransition(() => {
        o((c) => (c === u ? void 0 : c));
      });
  }, []);
  return r
    ? (0, it.jsx)(Fo, { onMeasureComplete: l, request: r }, s.current)
    : null;
}
function Fo(t) {
  let [e, r] = g1.useState(),
    o = H1().ownerWindow;
  return (
    g1.useLayoutEffect(() => {
      let n = o.document.body,
        i = o.document.createElement("div");
      return (
        (i.style.position = "absolute"),
        (i.style.visibility = "hidden"),
        n.appendChild(i),
        r(i),
        () => {
          n.removeChild(i);
        }
      );
    }, [o]),
    e ? Y7.createPortal((0, it.jsx)(Wo, { ...t, elContainer: e }), e) : null
  );
}
function Wo(t) {
  let { elContainer: e, onMeasureComplete: r, request: o } = t;
  return (
    g1.useEffect(() => {
      let n = !1,
        i = (s) => {
          n || (o.fnResults(s), r(o), (n = !0));
        };
      return Oo(e, o.promiseContentReady).then(i), () => i(void 0);
    }, [e, r, o]),
    (0, it.jsx)(G1, { children: o.rctToMeasure })
  );
}
async function Oo(t, e) {
  e && (await e);
  let r = document;
  N.IN_STEAMUI && r.fonts && (await r.fonts.ready);
  let o = t.getBoundingClientRect(),
    n = Math.ceil(o.height),
    i = Math.ceil(o.width);
  return { height: n, width: i };
}
var st = class t {
    key;
    static sm_lastKey = 0;
    constructor() {
      this.key = `Modal_${t.sm_lastKey++}`;
    }
  },
  ue = class extends st {
    element;
    ModalUpdatedCallback = new w1();
    constructor(e) {
      super(), (this.element = e);
    }
    UpdateModal(e) {
      (this.element = e), this.ModalUpdatedCallback.Dispatch();
    }
  },
  Ce = class extends st {
    m_OnElementReadyCallbacks = new w1();
    m_OnActiveModalCallbacks = new w1();
    constructor() {
      super();
    }
    get OnElementReadyCallbacks() {
      return this.m_OnElementReadyCallbacks;
    }
    get OnModalActiveCallbacks() {
      return this.m_OnActiveModalCallbacks;
    }
    RefModalElement(e) {
      e && this.m_OnElementReadyCallbacks.Dispatch(e);
    }
    SetActive(e) {
      this.m_OnActiveModalCallbacks.Dispatch(e);
    }
  };
g([_], Ce.prototype, "RefModalElement", 1);
var at = class extends ue {
  m_strName;
  m_modalProps;
  m_options;
  constructor(e, r, o, n) {
    super(r),
      (this.m_strName = e),
      (this.m_modalProps = o),
      (this.m_options = n);
  }
  get name() {
    return this.m_strName;
  }
  get modalProps() {
    return this.m_modalProps;
  }
  get options() {
    return this.m_options;
  }
};
var J7 = p(R());
var d3 = class {
    m_bUsePopups = !0;
    m_bOnlyPopups = !1;
    m_bCenterPopupsOnWindow = !1;
    m_rgModals = [];
    m_OnModalCountChangedCallbacks = new w1();
    m_OnModalShownCallbacks = new w1();
    m_OnModalHiddenCallbacks = new w1();
    m_cMountedOverlays = 0;
    m_rgMeasureModalRequests = [];
    m_OnMeasureModal = new w1();
    m_rgLegacyPopupModals = [];
    m_OnLegacyPopupModalCountChanged = new w1();
    m_browserInfo;
    get ModalCountChangedCallbacks() {
      return this.m_OnModalCountChangedCallbacks;
    }
    get LegacyPopupModalCountChangedCallbacks() {
      return this.m_OnLegacyPopupModalCountChanged;
    }
    RegisterOnModalShownCallback(e) {
      return this.m_OnModalShownCallbacks.Register(e);
    }
    RegisterOnModalHiddenCallback(e) {
      return this.m_OnModalHiddenCallbacks.Register(e);
    }
    RegisterMeasureModalCallback(e) {
      return this.m_OnMeasureModal.Register(e);
    }
    TakeMeasureModalRequest() {
      if (this.m_rgMeasureModalRequests.length)
        return this.m_rgMeasureModalRequests.shift();
    }
    RegisterOverlay(e) {
      Y(
        this.m_cMountedOverlays == 0,
        "Duplicate modal DialogOverlay; modals will appear in both",
      ),
        this.m_cMountedOverlays++;
      let r = this.m_OnModalCountChangedCallbacks.Register(e);
      return () => {
        this.m_cMountedOverlays--, r.Unregister();
      };
    }
    OnModalCountChanged(e) {
      e == "show" &&
        this.m_cMountedOverlays == 0 &&
        window.setTimeout(() => {
          Y(
            this.m_cMountedOverlays > 0,
            "Modal was shown but ModalManager has no associated DialogOverlay",
          );
        }, 50),
        this.m_OnModalCountChangedCallbacks.Dispatch(this.m_rgModals.length),
        e == "show"
          ? this.m_OnModalShownCallbacks.Dispatch(this.m_rgModals.length)
          : e == "hide" &&
            this.m_OnModalHiddenCallbacks.Dispatch(this.m_rgModals.length);
    }
    get modals() {
      return this.m_rgModals;
    }
    get active_modal() {
      if (this.m_rgModals.length)
        return this.m_rgModals[this.m_rgModals.length - 1];
    }
    ShowModal(e) {
      return this.ShowModalInternal(e);
    }
    RemoveModal(e) {
      let r = this.m_rgModals.indexOf(e);
      r != -1 && this.m_rgModals.splice(r, 1), this.OnModalCountChanged("hide");
    }
    ShowModalInternal(e) {
      Y(
        !this.m_bOnlyPopups,
        "Attempting to show modal in popup-only modal manager; will not display.",
      );
      let r = new ue(e);
      this.m_rgModals.push(r);
      let o = {
        Close: () => {
          this.RemoveModal(r);
        },
        Update: (n) => {
          r.UpdateModal(n);
        },
      };
      return this.OnModalCountChanged("show"), o;
    }
    ShowPortalModal() {
      Y(
        !this.m_bOnlyPopups,
        "Attempting to show modal in popup-only modal manager; will not display.",
      );
      let e = new Ce();
      return (
        this.m_rgModals.push(e),
        this.OnModalCountChanged("show"),
        {
          key: e.key,
          Close: () => {
            this.RemoveModal(e);
          },
          OnElementReadyCallbacks: e.OnElementReadyCallbacks,
          OnModalActiveCallbacks: e.OnModalActiveCallbacks,
        }
      );
    }
    SetUsePopups(e) {
      this.m_bUsePopups = e;
    }
    BUsePopups() {
      return this.m_bUsePopups || this.m_bOnlyPopups;
    }
    SetOnlyPopups(e) {
      this.m_bOnlyPopups = e;
    }
    BOnlyPopups() {
      return this.m_bOnlyPopups;
    }
    SetBrowserInfo(e) {
      this.m_browserInfo = e;
    }
    GetBrowserInfo() {
      return this.m_browserInfo;
    }
    SetCenterPopupsOnWindow(e) {
      this.m_bCenterPopupsOnWindow = e;
    }
    BCenterPopupsOnWindow() {
      return this.m_bCenterPopupsOnWindow;
    }
    RequestModalMeasure(e, r, o) {
      this.m_rgMeasureModalRequests.push({
        rctToMeasure: e,
        fnResults: r,
        promiseContentReady: o,
      }),
        this.m_OnMeasureModal.Dispatch();
    }
    get legacy_popup_modals() {
      return this.m_rgLegacyPopupModals;
    }
    ShowLegacyPopupModal(e, r, o, n) {
      let i = () => {
          let a = this.m_rgLegacyPopupModals.indexOf(s);
          a != -1 && this.m_rgLegacyPopupModals.splice(a, 1),
            this.m_OnLegacyPopupModalCountChanged.Dispatch(
              this.m_rgLegacyPopupModals.length,
            ),
            o.fnOnClose && o.fnOnClose();
        },
        s = new at(
          e,
          r,
          { ...o, fnOnClose: i },
          { bCenterOnWindow: this.m_bCenterPopupsOnWindow, ...n },
        );
      return (
        this.m_rgLegacyPopupModals.push(s),
        this.m_OnLegacyPopupModalCountChanged.Dispatch(
          this.m_rgLegacyPopupModals.length,
        ),
        {
          Close: i,
          Update: (a) => {
            s.UpdateModal(a);
          },
        }
      );
    }
  },
  V4 = class {
    m_mapModalManager = new WeakMap();
    GetModalManager(e) {
      let r = this.m_mapModalManager.get(e);
      return (
        r ||
          (console.assert(
            !1,
            `Early access to modal manager, creating one for ${e.document.title}`,
          ),
          (r = new d3()),
          this.m_mapModalManager.set(e, r)),
        r
      );
    }
    RegisterModalManager(e, r) {
      Y(
        !this.m_mapModalManager.has(r) || r == window,
        `Stomping CModalManager for ${r.document.title}!`,
      );
      let o = this.m_mapModalManager.get(r);
      return (
        this.m_mapModalManager.set(r, e),
        () => {
          o
            ? this.m_mapModalManager.set(r, o)
            : this.m_mapModalManager.delete(r);
        }
      );
    }
    UnregisterModalManager(e) {
      this.m_mapModalManager.delete(e);
    }
  },
  m3 = new V4();
function Oe(t) {
  return m3.GetModalManager(t);
}
var B4 = "kNiAxGG9vCI-";
var Q7 = "_3G8oCr9ck-g-";
var _1 = p(R()),
  r9 = p(P2());
var e9 = p(R());
var ce = {
  HoverPosition: "pKS2pegh-RQ-",
  Ready: "lNlkfTairww-",
  NoSpace: "_--Ss-RzFfa4-",
  EnablePointerEvents: "WKYfhU-e-Vs-",
  HoverAboveModal: "l5PVpLvx0Ik-",
  HoverPositionOuter: "jAGa1MCcCRo-",
};
var T4 = p(L()),
  j2 = class extends e9.Component {
    m_elHover;
    m_bNoSpace = !1;
    state = { x: void 0, y: void 0, hoverPositionReady: !1 };
    bindHover(e) {
      (this.m_elHover = e || void 0), this.positionHover();
    }
    componentDidUpdate() {
      this.positionHover();
    }
    render() {
      let {
          target: e,
          visibilityObserver: r,
          className: o,
          style: n,
          bEnablePointerEvents: i,
          direction: s,
          nBodyAlignment: a,
          nBodyDistance: l,
          nAllowOffscreenPx: u,
          nMaxLateralMoveOnScreen: c,
          children: m,
          onNoSpace: f,
          bTopmost: k,
          ...M
        } = this.props,
        b = Object.assign({ left: this.state.x, top: this.state.y }, n),
        w = !r || r.visible;
      return (0, T4.jsx)("div", {
        className: v(ce.HoverPositionOuter, k && ce.HoverAboveModal),
        children: (0, T4.jsx)("div", {
          ...M,
          className: v(
            ce.HoverPosition,
            w && this.state.hoverPositionReady && ce.Ready,
            this.m_bNoSpace && ce.NoSpace,
            i && ce.EnablePointerEvents,
            o,
          ),
          style: b,
          ref: this.bindHover,
          children: m,
        }),
      });
    }
    positionHover() {
      let e = this.m_elHover,
        r = this.props.target;
      if (
        !e ||
        !r ||
        (this.state.hoverPositionReady &&
          this.props.visibilityObserver &&
          !this.props.visibilityObserver.visible)
      )
        return;
      let o = r.ownerDocument.defaultView;
      if (!o || o.closed) return;
      let n = e.querySelector(".hover_arrow.left"),
        i = e.querySelector(".hover_arrow.right"),
        s = e.querySelector(".hover_arrow.top"),
        a = e.querySelector(".hover_arrow.bottom"),
        l = r.getBoundingClientRect(),
        u = e.getBoundingClientRect(),
        c =
          this.props.direction == "overlay" ||
          this.props.direction == "overlay-center";
      n && n.setAttribute("style", "display: none;"),
        i && i.setAttribute("style", "display: none;"),
        s && s.setAttribute("style", "display: none;"),
        a && a.setAttribute("style", "display: none;");
      let {
          nBodyDistance: m = 8,
          direction: f = "right",
          nBodyAlignment: k = 0.5,
        } = this.props,
        {
          nLeft: M,
          nTop: b,
          nOverflow: w,
          nLateralOverflow: A,
        } = K7(f, k, m, l, u, o.innerWidth, o.innerHeight);
      if (w > (this.props.nAllowOffscreenPx ?? 10) && !c) {
        let I = No(this.props.direction ?? "right"),
          {
            nLeft: i1,
            nTop: J,
            nOverflow: s1,
            nLateralOverflow: m1,
          } = K7(I, k, m, l, u, o.innerWidth, o.innerHeight);
        if (
          (s1 < w && ((f = I), (M = i1), (b = J), (w = s1), (A = m1)),
          w > (this.props.nAllowOffscreenPx ?? 10))
        ) {
          console.log(
            "Not showing hover because it didn't fit in the main or alt direction",
          ),
            e.setAttribute("style", "display: none;"),
            (this.m_bNoSpace = !0),
            this.props.onNoSpace && this.props.onNoSpace();
          return;
        }
      }
      this.props.nMaxLateralMoveOnScreen !== 0 &&
        !c &&
        ([b, M] = Uo(
          this.props.nMaxLateralMoveOnScreen,
          A,
          f ?? "right",
          b,
          M,
        ));
      let Z = null;
      switch (f) {
        case "left":
          Z = i;
          break;
        case "right":
          Z = n;
          break;
        case "top":
          Z = a;
          break;
        case "bottom":
          Z = s;
          break;
      }
      Z && Z.setAttribute("style", ""),
        M != this.state.x && this.setState({ x: M }),
        b != this.state.y && this.setState({ y: b }),
        this.state.hoverPositionReady ||
          this.setState({ hoverPositionReady: !0 });
    }
  };
I3(j2, "defaultProps", {
  direction: "right",
  nBodyAlignment: 0.5,
  nAllowOffscreenPx: 10,
  nBodyDistance: 8,
  nMaxLateralMoveOnScreen: void 0,
}),
  g([_], j2.prototype, "bindHover", 1),
  (j2 = g([F1], j2));
function No(t) {
  switch (t) {
    case "right":
      return "left";
    case "left":
      return "right";
    case "bottom":
      return "top";
    case "top":
      return "bottom";
    case "overlay":
      return "overlay";
    case "overlay-center":
      return "overlay-center";
  }
}
function K7(t, e, r, o, n, i, s) {
  let a = i,
    l = s,
    u = 0,
    c = 0,
    m,
    f,
    k,
    M;
  switch (t) {
    case "right":
      (m = o.right + r),
        (f = lt(o.top, o.height, n.height, e)),
        (k = Math.max(0, m + n.width - a)),
        (M = [Math.max(0, u - f), Math.max(0, f + n.height - l)]);
      break;
    case "left":
      (m = o.left - r - n.width),
        (f = lt(o.top, o.height, n.height, e)),
        (k = Math.max(0, c - m)),
        (M = [Math.max(0, u - f), Math.max(0, f + n.height - l)]);
      break;
    case "bottom":
      (m = lt(o.left, o.width, n.width, e)),
        (f = o.bottom + r),
        (k = Math.max(0, f + n.height - l)),
        (M = [Math.max(0, c - m), Math.max(0, m + n.width - a)]);
      break;
    case "top":
      (m = lt(o.left, o.width, n.width, e)),
        (f = o.top - r - n.height),
        (k = Math.max(0, u - f)),
        (M = [Math.max(0, c - m), Math.max(0, m + n.width - a)]);
      break;
    case "overlay":
      (m = o.left), (f = o.top), (k = 0), (M = [0, 0]);
      break;
    case "overlay-center":
      (m = o.left + 0.5 * o.width - 0.5 * n.width),
        (f = o.top + 0.5 * o.height - 0.5 * n.height),
        (k = 0),
        (M = [0, 0]);
      break;
  }
  return { nLeft: m, nTop: f, nOverflow: k, nLateralOverflow: M };
}
function lt(t, e, r, o) {
  return Math.max(0, Math.min(1, o)) * (e - r) + t;
}
function Uo(t, e, r, o, n) {
  let i = Math.max(e[0], e[1]);
  t !== void 0 && (i = Math.min(t, i)), (i = Math.max(0, i));
  let s = e[0] > e[1] ? i : -i;
  return r === "left" || r === "right" ? (o += s) : (n += s), [o, n];
}
var t9 = {
  TextToolTip: "xa7nOX-adjA-",
  ToolTipCustom: "PlhA2maQjXM-",
  ToolTipTitle: "cIyIjwsfsgk-",
  Center: "anxU2KCS-vI-",
  ToolTipInsetContent: "l-gADqxrGeQ-",
};
var y1 = p(L()),
  o9 = _1.createContext({}),
  zo = () => _1.useContext(o9);
function Ct(t) {
  let [e, r] = _1.useState(null),
    o = _1.useMemo(() => ({ targetElement: e }), [e]);
  return (0, y1.jsxs)(o9.Provider, {
    value: o,
    children: [(0, y1.jsx)("div", { ref: r }), t.children],
  });
}
function ut(t) {
  let { divProps: e, tooltipProps: r } = E4({
    ...t,
    toolTipContent: t.toolTipContent
      ? (0, y1.jsx)(s9, { children: i9(t.toolTipContent) })
      : null,
  });
  return (0, y1.jsxs)(S2, {
    className: "tool-tip-source",
    noFocusRing: !0,
    focusable: t.bNavStop ?? !!e.onClick,
    ...e,
    children: [(0, y1.jsx)(A4, { ...r }), t.children],
  });
}
function n9(t) {
  let { divProps: e, tooltipProps: r } = E4(t);
  return (0, y1.jsxs)(S2, {
    className: "tool-tip-source",
    noFocusRing: !0,
    focusable: t.bNavStop ?? !!e.onClick,
    ...e,
    children: [(0, y1.jsx)(A4, { ...r }), t.children],
  });
}
function uc(t) {
  let { children: e } = t,
    { divProps: r, tooltipProps: o } = E4({
      ...t,
      toolTipContent: t.toolTipContent
        ? (0, y1.jsx)(s9, { children: i9(t.toolTipContent) })
        : null,
    });
  return (0, y1.jsxs)(y1.Fragment, {
    children: [
      _1.cloneElement(e, { ...r, ...e.props }),
      (0, y1.jsx)(A4, { ...o }),
    ],
  });
}
function E4(t) {
  let {
      toolTipContent: e,
      nDelayShowMS: r = 300,
      bDisabled: o,
      direction: n,
      nBodyAlignment: i,
      nBodyDistance: s,
      nAllowOffscreenPx: a,
      nMaxLateralMoveOnScreen: l,
      strTooltipClassname: u,
      bNavStop: c,
      bTopmost: m,
      usePointerEvents: f,
      children: k,
      onMouseLeave: M,
      ...b
    } = t,
    w = {
      direction: n,
      nBodyAlignment: i,
      nBodyDistance: s,
      nAllowOffscreenPx: a,
      nMaxLateralMoveOnScreen: l,
      className: u,
      bTopmost: m,
    },
    [A, Z] = _1.useState(!1),
    [I, i1] = _1.useState(),
    J = _1.useCallback(
      (Q) => {
        (f && "pointerType" in Q && Q.pointerType != "mouse") ||
          (Z(!0), i1(Q.currentTarget));
      },
      [f],
    ),
    s1 = _1.useCallback(() => {
      Z(!1);
    }, []),
    m1 = {
      active: A && !o,
      target: I,
      nDelayShowMS: r,
      hoverPositionProps: w,
      children: e,
    },
    a1 = { ...b };
  return (
    f
      ? ((a1.onPointerEnter = J), (a1.onPointerLeave = s1))
      : ((a1.onMouseEnter = J), (a1.onMouseLeave = s1)),
    {
      divProps: a1,
      stateHandlers: { setTarget: i1, setHovered: Z },
      tooltipProps: m1,
    }
  );
}
function i9(t) {
  return typeof t == "string" ? y(t) : t;
}
function s9(t) {
  return (0, y1.jsx)("div", {
    ...t,
    className: v(t9.TextToolTip, t.className),
  });
}
function A4(t) {
  let {
      active: e,
      target: r,
      nDelayShowMS: o = 300,
      hoverPositionProps: n,
      children: i,
    } = t,
    [s, a] = _1.useState(e),
    l = zo();
  if (
    (_1.useEffect(() => {
      if (e)
        if (o) {
          let c = window.setTimeout(() => a(!0), o);
          return () => window.clearTimeout(c);
        } else {
          a(!0);
          return;
        }
      else {
        a(!1);
        return;
      }
    }, [e]),
    !s || !i || !r)
  )
    return null;
  let { targetElement: u } = l;
  return r9.createPortal(
    (0, y1.jsx)(j2, { target: r, ...n, children: i }),
    u ?? r.ownerDocument.body,
  );
}
var o1 = p(L());
function jo(t) {
  Q1.useEffect(() => {
    if (t)
      return (
        document.body.classList.add(B4),
        () => document.body.classList.remove(B4)
      );
  }, [t]);
}
function qo(t) {
  let e = H1().ownerWindow,
    r = Ve(),
    o = Q1.useCallback(() => {
      e?.SteamClient?.Window && e.SteamClient.Window.BringToFront();
    }, [e]);
  Q1.useEffect(() => t.RegisterOverlay(r), [t, r]),
    Q1.useEffect(() => t.RegisterOnModalShownCallback(o).Unregister, [t, o]);
}
function Yo(t, e) {
  return L8(
    (r) => {
      if (!r || !e) return;
      let o = r.ownerDocument.defaultView;
      return m3.RegisterModalManager(t, o);
    },
    [t],
  );
}
function D4(t) {
  let {
      ModalManager: e,
      bRegisterModalManager: r = !0,
      DialogWrapper: o,
      rctActiveContextMenus: n,
      bUseDialogElement: i = !0,
      style: s,
      ...a
    } = t,
    l = e.modals,
    u = l && !!l.length,
    c = e.active_modal;
  jo(u), qo(e);
  let m = Yo(e, r),
    f = null,
    k = !i;
  return (
    l && l.length
      ? (f = l.map((M) => {
          let b = M == c,
            w = {
              key: M.key,
              active: b,
              rctActiveContextMenus: b && i ? n : void 0,
            };
          return M instanceof ue
            ? (0, o1.jsx)(Jo, { ...w, modal: M, Component: o ?? Qo })
            : M instanceof Ce
              ? (0, o1.jsx)(Xo, { ...w, modal: M, bUseDialogElement: i })
              : void 0;
        }))
      : ((k = !0), (s = { ...s, display: "none" })),
    (0, o1.jsxs)(o1.Fragment, {
      children: [
        (0, o1.jsxs)(U7, {
          children: [
            (0, o1.jsxs)("div", {
              ...a,
              style: s,
              ref: m,
              className: v(a.className, "FullModalOverlay"),
              children: [
                (0, o1.jsx)("div", {
                  className: "ModalOverlayContent ModalOverlayBackground",
                }),
                f,
              ],
            }),
            k && n,
          ],
        }),
        (0, o1.jsx)(X7, { ModalManager: e }),
        (0, o1.jsx)($o, { ModalManager: e }),
      ],
    })
  );
}
function Xo(t) {
  let {
    modal: e,
    rctActiveContextMenus: r,
    active: o,
    bUseDialogElement: n,
  } = t;
  Q1.useEffect(() => {
    if (o)
      return (
        e.SetActive(o),
        () => {
          e.SetActive(!1);
        }
      );
  }, [e, o]);
  let i = (0, o1.jsxs)(G1, {
    children: [
      (0, o1.jsx)("div", {
        className: v("ModalOverlayContent", o ? "active" : "inactive"),
        ref: e.RefModalElement,
      }),
      r,
    ],
  });
  return n ? (0, o1.jsx)(a9, { active: o, children: i }) : i;
}
function Jo(t) {
  let { modal: e, active: r, rctActiveContextMenus: o, Component: n } = t,
    i = Ve();
  return (
    ne(e.ModalUpdatedCallback, i),
    (0, o1.jsx)(G1, {
      children: (0, o1.jsxs)(n, {
        className: v("ModalOverlayContent", r ? "active" : "inactive"),
        active: r,
        modalKey: e.key,
        children: [o, e.element],
      }),
    })
  );
}
function Qo(t) {
  let { className: e, active: r, children: o } = t;
  return (0, o1.jsx)(a9, {
    active: r,
    children: (0, o1.jsx)(Ct, {
      children: (0, o1.jsx)("div", { className: e, tabIndex: -1, children: o }),
    }),
  });
}
function a9(t) {
  let { active: e, children: r } = t,
    o = Q1.useRef(null),
    [n, i] = Q1.useState(!1);
  return (
    Q1.useEffect(() => {
      let s = o.current;
      s && (e && !n ? (s.showModal(), i(!0)) : !e && n && s.close());
    }, [e, n]),
    (0, o1.jsx)("dialog", {
      ref: o,
      className: Q7,
      onClose: () => i(!1),
      onCancel: (s) => s.preventDefault(),
      children: t.children,
    })
  );
}
function $o(t) {
  let { ModalManager: e } = t,
    r = Ve();
  return (
    ne(e.LegacyPopupModalCountChangedCallbacks, r),
    (0, o1.jsx)(o1.Fragment, {
      children: e.legacy_popup_modals.map((o) =>
        (0, o1.jsx)(q7, { Modal: o }, o.key),
      ),
    })
  );
}
var pe = p(L()),
  Z4 = O1.createContext({}),
  x4 = O1.memo(function (e) {
    let {
        children: r,
        bRenderOverlayAtRoot: o,
        refModalManager: n,
        DialogWrapper: i,
        bUseDialogElement: s = !0,
        ContextMenuComponent: a = O7,
        refContextMenuManager: l,
        browserInfo: u,
        bUsePopups: c,
        bOnlyPopups: m,
        bCenterPopupsOnWindow: f,
        bRegisterManagersWithWindow: k = !0,
        ...M
      } = e,
      b = O1.useRef();
    b.current || (b.current = new d3());
    let w = (0, pe.jsx)(D4, {
      ...M,
      DialogWrapper: i,
      ModalManager: b.current,
      bUseDialogElement: s,
      bRegisterModalManager: k,
      rctActiveContextMenus: (0, pe.jsx)(a, {}),
    });
    e.bRenderOverlayAtRoot &&
      typeof document < "u" &&
      "body" in document &&
      (w = l9.createPortal(w, document.body)),
      M8(n, b.current),
      c !== void 0 && b.current?.SetUsePopups(c),
      f !== void 0 && b.current?.SetCenterPopupsOnWindow(f),
      m !== void 0 && b.current?.SetOnlyPopups(m),
      b.current.SetBrowserInfo(u);
    let A = O1.useMemo(
      () => ({ ModalManager: b.current, DialogWrapper: i }),
      [i],
    );
    return (0, pe.jsx)(Z4.Provider, {
      value: A,
      children: (0, pe.jsxs)(Z7, {
        refContextMenuManager: l,
        bRegisterMenuManager: k,
        children: [(0, pe.jsx)(G1, { children: w }), e.children],
      }),
    });
  });
function le() {
  return O1.useContext(Z4).ModalManager;
}
function C9() {
  return O1.useContext(Z4).DialogWrapper;
}
function N7(t) {
  let e = le();
  O1.useEffect(() => {
    if (t) return m3.RegisterModalManager(e, t);
  }, [t, e]);
}
var qr = p(R());
var u9 = "{STEAM_CLAN_IMAGE}";
var C = p(Kr());
var I4 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appids || E(t.M()),
        C.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appids: {
                n: 1,
                r: !0,
                q: !0,
                br: d.readInt32,
                pbr: d.readPackedInt32,
                bw: h.writeRepeatedInt32,
              },
              language: { n: 2, br: d.readUint32, bw: h.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetApps_Request";
    }
  },
  G4 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.apps || E(t.M()),
        C.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { apps: { n: 1, c: f8, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetApps_Response";
    }
  },
  F4 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: d.readInt32, bw: h.writeInt32 },
              language: { n: 2, br: d.readString, bw: h.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetAppRichPresenceLocalization_Request";
    }
  },
  W4 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || E(t.M()),
        C.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: d.readInt32, bw: h.writeInt32 },
              token_lists: { n: 2, c: N4, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetAppRichPresenceLocalization_Response";
    }
  },
  O4 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.name || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              name: { n: 1, br: d.readString, bw: h.writeString },
              value: { n: 2, br: d.readString, bw: h.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetAppRichPresenceLocalization_Response_Token";
    }
  },
  N4 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.language || E(t.M()),
        C.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              language: { n: 1, br: d.readString, bw: h.writeString },
              tokens: { n: 2, c: O4, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetAppRichPresenceLocalization_Response_TokenList";
    }
  },
  U4 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              steamid: {
                n: 1,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              comment_thread_type: { n: 2, br: d.readEnum, bw: h.writeEnum },
              gidfeature: {
                n: 3,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              gidfeature2: {
                n: 4,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              commentthreadid: {
                n: 5,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              start: { n: 6, br: d.readInt32, bw: h.writeInt32 },
              count: { n: 7, br: d.readInt32, bw: h.writeInt32 },
              upvoters: { n: 8, br: d.readInt32, bw: h.writeInt32 },
              include_deleted: { n: 9, br: d.readBool, bw: h.writeBool },
              gidcomment: {
                n: 10,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              time_oldest: { n: 11, br: d.readUint32, bw: h.writeUint32 },
              oldest_first: { n: 12, br: d.readBool, bw: h.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetCommentThread_Request";
    }
  },
  ct = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.gidcomment || E(t.M()),
        C.Message.initialize(this, e, 0, -1, [12], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              gidcomment: {
                n: 1,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              steamid: {
                n: 2,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              timestamp: { n: 3, br: d.readUint32, bw: h.writeUint32 },
              text: { n: 4, br: d.readString, bw: h.writeString },
              upvotes: { n: 5, br: d.readInt32, bw: h.writeInt32 },
              hidden: { n: 6, br: d.readBool, bw: h.writeBool },
              hidden_by_user: { n: 7, br: d.readBool, bw: h.writeBool },
              deleted: { n: 8, br: d.readBool, bw: h.writeBool },
              ipaddress: { n: 9, c: g8 },
              total_hidden: { n: 10, br: d.readInt32, bw: h.writeInt32 },
              upvoted_by_user: { n: 11, br: d.readBool, bw: h.writeBool },
              reactions: { n: 12, c: z4, r: !0, q: !0 },
              gidparentcomment: {
                n: 13,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_Comment";
    }
  },
  z4 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.reactionid || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              reactionid: { n: 1, br: d.readUint32, bw: h.writeUint32 },
              count: { n: 2, br: d.readUint32, bw: h.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_Comment_Reaction";
    }
  },
  j4 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.comments || E(t.M()),
        C.Message.initialize(this, e, 0, -1, [1, 2, 9], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              comments: { n: 1, c: ct, r: !0, q: !0 },
              deleted_comments: { n: 2, c: ct, r: !0, q: !0 },
              steamid: {
                n: 3,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              commentthreadid: {
                n: 4,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              start: { n: 5, br: d.readInt32, bw: h.writeInt32 },
              count: { n: 6, br: d.readInt32, bw: h.writeInt32 },
              total_count: { n: 7, br: d.readInt32, bw: h.writeInt32 },
              upvotes: { n: 8, br: d.readInt32, bw: h.writeInt32 },
              upvoters: {
                n: 9,
                r: !0,
                q: !0,
                br: d.readUint32,
                pbr: d.readPackedUint32,
                bw: h.writeRepeatedUint32,
              },
              user_subscribed: { n: 10, br: d.readBool, bw: h.writeBool },
              user_upvoted: { n: 11, br: d.readBool, bw: h.writeBool },
              answer_commentid: {
                n: 12,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              answer_actor: { n: 13, br: d.readUint32, bw: h.writeUint32 },
              answer_actor_rank: { n: 14, br: d.readInt32, bw: h.writeInt32 },
              can_post: { n: 15, br: d.readBool, bw: h.writeBool },
              comment_thread_type: {
                n: 16,
                br: d.readUint32,
                bw: h.writeUint32,
              },
              gidfeature: {
                n: 17,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              gidfeature2: {
                n: 18,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetCommentThread_Response";
    }
  },
  q4 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              steamid: {
                n: 1,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              comment_thread_type: { n: 2, br: d.readEnum, bw: h.writeEnum },
              gidfeature: {
                n: 3,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              gidfeature2: {
                n: 4,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              text: { n: 6, br: d.readString, bw: h.writeString },
              gidparentcomment: {
                n: 7,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              suppress_notifications: { n: 8, br: d.readBool, bw: h.writeBool },
              is_report: { n: 9, br: d.readBool, bw: h.writeBool },
              start_hidden: { n: 10, br: d.readBool, bw: h.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_PostCommentToThread_Request";
    }
  },
  Y4 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.gidcomment || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              gidcomment: {
                n: 1,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              commentthreadid: {
                n: 2,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              count: { n: 3, br: d.readInt32, bw: h.writeInt32 },
              upvotes: { n: 4, br: d.readInt32, bw: h.writeInt32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_PostCommentToThread_Response";
    }
  },
  X4 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              steamid: {
                n: 1,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              comment_thread_type: { n: 2, br: d.readEnum, bw: h.writeEnum },
              gidfeature: {
                n: 3,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              gidfeature2: {
                n: 4,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              gidcomment: {
                n: 5,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              undelete: { n: 6, br: d.readBool, bw: h.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_DeleteCommentFromThread_Request";
    }
  },
  J4 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_DeleteCommentFromThread_Response";
    }
  },
  Q4 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.commentthreadtype || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              commentthreadtype: { n: 1, br: d.readString, bw: h.writeString },
              steamid: {
                n: 2,
                br: d.readUint64String,
                bw: h.writeUint64String,
              },
              gidfeature: {
                n: 3,
                br: d.readUint64String,
                bw: h.writeUint64String,
              },
              gidfeature2: {
                n: 4,
                br: d.readUint64String,
                bw: h.writeUint64String,
              },
              gidcomment: {
                n: 5,
                br: d.readUint64String,
                bw: h.writeUint64String,
              },
              rate_up: { n: 6, br: d.readBool, bw: h.writeBool },
              suppress_notifications: { n: 7, br: d.readBool, bw: h.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_RateCommentThread_Request";
    }
  },
  $4 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.gidcomment || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              gidcomment: {
                n: 1,
                br: d.readUint64String,
                bw: h.writeUint64String,
              },
              commentthreadid: {
                n: 2,
                br: d.readUint64String,
                bw: h.writeUint64String,
              },
              count: { n: 3, br: d.readUint32, bw: h.writeUint32 },
              upvotes: { n: 4, br: d.readUint32, bw: h.writeUint32 },
              has_upvoted: { n: 5, br: d.readBool, bw: h.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_RateCommentThread_Response";
    }
  },
  K4 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.commentthreadtype || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              commentthreadtype: { n: 1, br: d.readString, bw: h.writeString },
              steamid: {
                n: 2,
                br: d.readUint64String,
                bw: h.writeUint64String,
              },
              gidfeature: {
                n: 3,
                br: d.readUint64String,
                bw: h.writeUint64String,
              },
              gidfeature2: {
                n: 4,
                br: d.readUint64String,
                bw: h.writeUint64String,
              },
              gidcomment: {
                n: 5,
                br: d.readUint64String,
                bw: h.writeUint64String,
              },
              max_results: { n: 6, br: d.readUint32, bw: h.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetCommentThreadRatings_Request";
    }
  },
  e5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.commentthreadid || E(t.M()),
        C.Message.initialize(this, e, 0, -1, [5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              commentthreadid: {
                n: 1,
                br: d.readUint64String,
                bw: h.writeUint64String,
              },
              gidcomment: {
                n: 2,
                br: d.readUint64String,
                bw: h.writeUint64String,
              },
              upvotes: { n: 3, br: d.readUint32, bw: h.writeUint32 },
              has_upvoted: { n: 4, br: d.readBool, bw: h.writeBool },
              upvoter_accountids: {
                n: 5,
                r: !0,
                q: !0,
                br: d.readUint32,
                pbr: d.readPackedUint32,
                bw: h.writeRepeatedUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetCommentThreadRatings_Response";
    }
  },
  t5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.announcementid || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              announcementid: {
                n: 1,
                br: d.readUint64String,
                bw: h.writeUint64String,
              },
              vote_up: { n: 2, br: d.readBool, bw: h.writeBool },
              clan_accountid: { n: 3, br: d.readUint32, bw: h.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_RateClanAnnouncement_Request";
    }
  },
  r5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_RateClanAnnouncement_Response";
    }
  },
  o5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.announcementid || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              announcementid: {
                n: 1,
                br: d.readUint64String,
                bw: h.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetClanAnnouncementVoteForUser_Request";
    }
  },
  n5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.voted_up || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              voted_up: { n: 1, br: d.readBool, bw: h.writeBool },
              voted_down: { n: 2, br: d.readBool, bw: h.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetClanAnnouncementVoteForUser_Response";
    }
  },
  i5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              steamid: {
                n: 1,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              filter_user_uploaded_only: {
                n: 2,
                br: d.readBool,
                bw: h.writeBool,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetAvatarHistory_Request";
    }
  },
  s5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.avatars || E(t.M()),
        C.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { avatars: { n: 1, c: a5, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetAvatarHistory_Response";
    }
  },
  a5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.avatar_sha1 || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              avatar_sha1: { n: 1, br: d.readString, bw: h.writeString },
              user_uploaded: { n: 2, br: d.readBool, bw: h.writeBool },
              timestamp: { n: 3, br: d.readUint32, bw: h.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetAvatarHistory_Response_AvatarData";
    }
  },
  l5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.priority || E(t.M()),
        C.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              priority: { n: 1, br: d.readUint32, bw: h.writeUint32 },
              appid: {
                n: 2,
                r: !0,
                q: !0,
                br: d.readUint32,
                pbr: d.readPackedUint32,
                bw: h.writeRepeatedUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CAppPriority";
    }
  },
  C5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.count || E(t.M()),
        C.Message.initialize(this, e, 0, -1, [5, 6, 8], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              count: { n: 1, br: d.readUint32, bw: h.writeUint32 },
              offset: { n: 2, br: d.readUint32, bw: h.writeUint32 },
              rtime32_start_time: { n: 3, br: d.readUint32, bw: h.writeUint32 },
              rtime32_end_time: { n: 4, br: d.readUint32, bw: h.writeUint32 },
              language_preference: {
                n: 5,
                r: !0,
                q: !0,
                br: d.readUint32,
                pbr: d.readPackedUint32,
                bw: h.writeRepeatedUint32,
              },
              filter_event_type: {
                n: 6,
                r: !0,
                q: !0,
                br: d.readEnum,
                pbr: d.readPackedEnum,
                bw: h.writeRepeatedEnum,
              },
              filter_to_appid: { n: 7, br: d.readBool, bw: h.writeBool },
              app_list: { n: 8, c: l5, r: !0, q: !0 },
              count_after: { n: 9, d: 0, br: d.readUint32, bw: h.writeUint32 },
              count_before: {
                n: 10,
                d: 0,
                br: d.readUint32,
                bw: h.writeUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetUserPartnerEventNews_Request";
    }
  },
  u5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.results || E(t.M()),
        C.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { results: { n: 1, c: _8, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetUserPartnerEventNews_Response";
    }
  },
  c5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.include_steam_blog || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              include_steam_blog: { n: 1, br: d.readBool, bw: h.writeBool },
              filter_to_played_within_days: {
                n: 2,
                br: d.readUint32,
                bw: h.writeUint32,
              },
              include_only_game_updates: {
                n: 3,
                br: d.readBool,
                bw: h.writeBool,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetBestEventsForUser_Request";
    }
  },
  p5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.clanid || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              clanid: { n: 1, br: d.readUint32, bw: h.writeUint32 },
              event_gid: {
                n: 2,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              announcement_gid: {
                n: 3,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              appid: { n: 4, br: d.readUint32, bw: h.writeUint32 },
              possible_takeover: { n: 5, br: d.readBool, bw: h.writeBool },
              rtime32_last_modified: {
                n: 6,
                d: 0,
                br: d.readUint32,
                bw: h.writeUint32,
              },
              user_app_priority: { n: 7, br: d.readInt32, bw: h.writeInt32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_PartnerEventResult";
    }
  },
  d5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.results || E(t.M()),
        C.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { results: { n: 1, c: p5, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetBestEventsForUser_Response";
    }
  },
  m5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_ClearUserPartnerEventsAppPriorities_Request";
    }
  },
  h5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_ClearUserPartnerEventsAppPriorities_Response";
    }
  },
  g5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: d.readUint32, bw: h.writeUint32 },
              user_app_priority: { n: 2, br: d.readInt32, bw: h.writeInt32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_PartnerEventsAppPriority";
    }
  },
  f5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetUserPartnerEventsAppPriorities_Request";
    }
  },
  _5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.priorities || E(t.M()),
        C.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { priorities: { n: 1, c: g5, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetUserPartnerEventsAppPriorities_Response";
    }
  },
  v5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { appid: { n: 1, br: d.readUint32, bw: h.writeUint32 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_ClearSinglePartnerEventsAppPriority_Request";
    }
  },
  L5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_ClearSinglePartnerEventsAppPriority_Response";
    }
  },
  M5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { appid: { n: 1, br: d.readUint32, bw: h.writeUint32 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_PartnerEventsShowMoreForApp_Request";
    }
  },
  k5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_PartnerEventsShowMoreForApp_Response";
    }
  },
  w5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { appid: { n: 1, br: d.readUint32, bw: h.writeUint32 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_PartnerEventsShowLessForApp_Request";
    }
  },
  b5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_PartnerEventsShowLessForApp_Response";
    }
  },
  R5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.markings || E(t.M()),
        C.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { markings: { n: 1, c: y5, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_MarkPartnerEventsForUser_Request";
    }
  },
  y5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.clanid || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              clanid: { n: 1, br: d.readUint32, bw: h.writeUint32 },
              event_gid: {
                n: 2,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              display_location: { n: 3, br: d.readEnum, bw: h.writeEnum },
              mark_shown: { n: 4, br: d.readBool, bw: h.writeBool },
              mark_read: { n: 5, br: d.readBool, bw: h.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking";
    }
  },
  P5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_MarkPartnerEventsForUser_Response";
    }
  },
  S5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.event_gids || E(t.M()),
        C.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              event_gids: {
                n: 1,
                r: !0,
                q: !0,
                br: d.readFixed64String,
                pbr: d.readPackedFixed64String,
                bw: h.writeRepeatedFixed64String,
              },
              include_read_events_only: {
                n: 2,
                br: d.readBool,
                bw: h.writeBool,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetUserPartnerEventViewStatus_Request";
    }
  },
  H5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.events || E(t.M()),
        C.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { events: { n: 1, c: x5, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetUserPartnerEventViewStatus_Response";
    }
  },
  x5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.event_gid || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              event_gid: {
                n: 1,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              last_shown_time: { n: 2, br: d.readUint32, bw: h.writeUint32 },
              last_read_time: { n: 3, br: d.readUint32, bw: h.writeUint32 },
              clan_account_id: { n: 4, br: d.readUint32, bw: h.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent";
    }
  },
  V5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.gidfeature || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              gidfeature: {
                n: 1,
                br: d.readUint64String,
                bw: h.writeUint64String,
              },
              gidfeature2: {
                n: 2,
                br: d.readUint64String,
                bw: h.writeUint64String,
              },
              gidcomment: {
                n: 3,
                br: d.readUint64String,
                bw: h.writeUint64String,
              },
              steamid: {
                n: 4,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              commentthreadtype: { n: 5, br: d.readString, bw: h.writeString },
              hide: { n: 6, br: d.readBool, bw: h.writeBool },
              report_reason: { n: 7, br: d.readEnum, bw: h.writeEnum },
              report_text: { n: 8, br: d.readString, bw: h.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_HideAndReportComment_Request";
    }
  },
  B5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_HideAndReportComment_Response";
    }
  },
  T5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              steamid: {
                n: 1,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              itemid: { n: 2, br: d.readUint64String, bw: h.writeUint64String },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetClanEventCrowdInMetadata_Request";
    }
  },
  E5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.crowdin_project_id || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              crowdin_project_id: {
                n: 1,
                br: d.readUint64String,
                bw: h.writeUint64String,
              },
              crowdin_file_id: {
                n: 2,
                br: d.readUint64String,
                bw: h.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetClanEventCrowdInMetadata_Response";
    }
  },
  A5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              steamid: {
                n: 1,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetClanCrowdInMetadata_Request";
    }
  },
  D5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.crowdin_project_id || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              crowdin_project_id: {
                n: 1,
                br: d.readUint64String,
                bw: h.writeUint64String,
              },
              crowdin_directory_id: {
                n: 2,
                br: d.readUint64String,
                bw: h.writeUint64String,
              },
              push_by_default: { n: 3, br: d.readBool, bw: h.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetClanCrowdInMetadata_Response";
    }
  },
  Z5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              steamid: {
                n: 1,
                br: d.readFixed64String,
                bw: h.writeFixed64String,
              },
              itemid: { n: 2, br: d.readUint64String, bw: h.writeUint64String },
              language: { n: 3, br: d.readInt32, bw: h.writeInt32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_FetchTranslationFromCrowdIn_Request";
    }
  },
  I5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_FetchTranslationFromCrowdIn_Response";
    }
  },
  G5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.review_labels || E(t.M()),
        C.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { review_labels: { n: 1, c: F5, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_SetRecommendationBotReviewStatus_Request";
    }
  },
  F5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: d.readUint32, bw: h.writeUint32 },
              recommendationid: {
                n: 2,
                br: d.readUint64String,
                bw: h.writeUint64String,
              },
              is_bot_review: { n: 3, br: d.readBool, bw: h.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_SetRecommendationBotReviewStatus_Request_ReviewLabel";
    }
  },
  W5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_SetRecommendationBotReviewStatus_Response";
    }
  },
  O5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.recommendation_ids || E(t.M()),
        C.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              recommendation_ids: {
                n: 1,
                r: !0,
                q: !0,
                br: d.readUint64String,
                pbr: d.readPackedUint64String,
                bw: h.writeRepeatedUint64String,
              },
              app_id: { n: 2, br: d.readUint32, bw: h.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetBotReviewScoreForRecommendation_Request";
    }
  },
  N5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.bot_review_score || E(t.M()),
        C.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { bot_review_score: { n: 1, c: U5, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetBotReviewScoreForRecommendation_Response";
    }
  },
  U5 = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.key || E(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              key: { n: 1, br: d.readUint64String, bw: h.writeUint64String },
              value: { n: 2, br: d.readUint32, bw: h.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = H(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return V(t.M(), e, r);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new C.default.BinaryReader(e),
        o = new t();
      return t.deserializeBinaryFromReader(o, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return B(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      T(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new C.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetBotReviewScoreForRecommendation_Response_BotReviewScoreEntry";
    }
  },
  Ko;
((Q) => {
  function t(P, S) {
    return P.SendMsg("Community.GetApps#1", r1(I4, S), G4, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  Q.GetApps = t;
  function e(P, S) {
    return P.SendMsg(
      "Community.GetAppRichPresenceLocalization#1",
      r1(F4, S),
      W4,
      { ePrivilege: 1 },
    );
  }
  Q.GetAppRichPresenceLocalization = e;
  function r(P, S) {
    return P.SendMsg("Community.GetCommentThread#1", r1(U4, S), j4, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  Q.GetCommentThread = r;
  function o(P, S) {
    return P.SendMsg("Community.PostCommentToThread#1", r1(q4, S), Y4, {
      ePrivilege: 3,
    });
  }
  Q.PostCommentToThread = o;
  function n(P, S) {
    return P.SendMsg("Community.DeleteCommentFromThread#1", r1(X4, S), J4, {
      ePrivilege: 1,
    });
  }
  Q.DeleteCommentFromThread = n;
  function i(P, S) {
    return P.SendMsg("Community.RateCommentThread#1", r1(Q4, S), $4, {
      ePrivilege: 3,
    });
  }
  Q.RateCommentThread = i;
  function s(P, S) {
    return P.SendMsg("Community.GetCommentThreadRatings#1", r1(K4, S), e5, {
      ePrivilege: 2,
    });
  }
  Q.GetCommentThreadRatings = s;
  function a(P, S) {
    return P.SendMsg("Community.RateClanAnnouncement#1", r1(t5, S), r5, {
      ePrivilege: 3,
    });
  }
  Q.RateClanAnnouncement = a;
  function l(P, S) {
    return P.SendMsg(
      "Community.GetClanAnnouncementVoteForUser#1",
      r1(o5, S),
      n5,
      { ePrivilege: 1 },
    );
  }
  Q.GetClanAnnouncementVoteForUser = l;
  function u(P, S) {
    return P.SendMsg("Community.GetAvatarHistory#1", r1(i5, S), s5, {
      ePrivilege: 1,
    });
  }
  Q.GetAvatarHistory = u;
  function c(P, S) {
    return P.SendMsg("Community.GetClanEventCrowdInMetadata#1", r1(T5, S), E5, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  Q.GetClanEventCrowdInMetadata = c;
  function m(P, S) {
    return P.SendMsg("Community.GetClanCrowdInMetadata#1", r1(A5, S), D5, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  Q.GetClanCrowdInMetadata = m;
  function f(P, S) {
    return P.SendMsg("Community.FetchTranslationFromCrowdIn#1", r1(Z5, S), I5, {
      ePrivilege: 1,
    });
  }
  Q.FetchTranslationFromCrowdIn = f;
  function k(P, S) {
    return P.SendMsg("Community.HideAndReportComment#1", r1(V5, S), B5, {
      ePrivilege: 3,
    });
  }
  Q.HideAndReportComment = k;
  function M(P, S) {
    return P.SendMsg("Community.GetUserPartnerEventNews#1", r1(C5, S), u5, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  Q.GetUserPartnerEventNews = M;
  function b(P, S) {
    return P.SendMsg("Community.GetBestEventsForUser#1", r1(c5, S), d5, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  Q.GetBestEventsForUser = b;
  function w(P, S) {
    return P.SendMsg("Community.MarkPartnerEventsForUser#1", r1(R5, S), P5, {
      ePrivilege: 1,
    });
  }
  Q.MarkPartnerEventsForUser = w;
  function A(P, S) {
    return P.SendMsg(
      "Community.GetUserPartnerEventViewStatus#1",
      r1(S5, S),
      H5,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  Q.GetUserPartnerEventViewStatus = A;
  function Z(P, S) {
    return P.SendMsg("Community.PartnerEventsShowMoreForApp#1", r1(M5, S), k5, {
      ePrivilege: 1,
    });
  }
  Q.PartnerEventsShowMoreForApp = Z;
  function I(P, S) {
    return P.SendMsg("Community.PartnerEventsShowLessForApp#1", r1(w5, S), b5, {
      ePrivilege: 1,
    });
  }
  Q.PartnerEventsShowLessForApp = I;
  function i1(P, S) {
    return P.SendMsg(
      "Community.ClearUserPartnerEventsAppPriorities#1",
      r1(m5, S),
      h5,
      { ePrivilege: 1 },
    );
  }
  Q.ClearUserPartnerEventsAppPriorities = i1;
  function J(P, S) {
    return P.SendMsg(
      "Community.GetUserPartnerEventsAppPriorities#1",
      r1(f5, S),
      _5,
      { ePrivilege: 1 },
    );
  }
  Q.GetUserPartnerEventsAppPriorities = J;
  function s1(P, S) {
    return P.SendMsg(
      "Community.ClearSinglePartnerEventsAppPriority#1",
      r1(v5, S),
      L5,
      { ePrivilege: 1 },
    );
  }
  Q.ClearSinglePartnerEventsAppPriority = s1;
  function m1(P, S) {
    return P.SendMsg(
      "Community.SetRecommendationBotReviewStatus#1",
      r1(G5, S),
      W5,
      { ePrivilege: 1 },
    );
  }
  Q.SetRecommendationBotReviewStatus = m1;
  function a1(P, S) {
    return P.SendMsg(
      "Community.GetBotReviewScoreForRecommendation#1",
      r1(O5, S),
      N5,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  Q.GetBotReviewScoreForRecommendation = a1;
})((Ko ||= {}));
var Ws = p(R());
var n8 = p(Ye());
var R0 = 622,
  y0 = 1920,
  d6 = 450,
  m6 = 800,
  oi = 460,
  ni = 2108,
  ii = 300,
  si = 800,
  ai = 300,
  li = 644,
  P0 = 337,
  S0 = 155,
  Ci = ["app_header_capsule", "app_main_capsule"],
  ui = [
    "sale_header",
    "sale_logo",
    "capsule",
    "product_banner",
    "product_mobile_banner",
    "localized_title_image",
  ],
  ci = ["takeunder_art", "takeunder_mobile_art"],
  pi = [
    "takeover_art",
    "takeover_mobile_art",
    "takeover_webm_art",
    "takeover_mp4_art",
    "takeover_webm_mobile_art",
    "takeover_mp4_mobile_art",
  ],
  di = ["marketingmessage_art", "marketingmessage_art_2"],
  mi = [
    "marketingmessage_art_eventcapsule",
    "marketingmessage_art_2_eventcapsule",
  ],
  hi = ["spotlight_art"],
  gi = [...Ci, ...ui, ...ci, ...pi, ...di, ...mi, ...hi],
  kp = [
    "spotlight",
    "background",
    "hero",
    "email_full",
    "email_centered",
    "broadcast_left",
    "broadcast_right",
    "localized_image_group",
    "sale_section_background",
    "sale_section_title",
    "sale_overlay",
    "link_capsule",
    "product_banner_override",
    "product_mobile_banner_override",
    "schedule_track_art",
    "tab_bar_background",
    "bestofyear_banner",
    "bestofyear_banner_mobile",
    "localized_marketing_message",
    "localized_optin_banner",
    "old_spotlight_art",
    "localized_marketingmessage_webm",
    "localized_marketingmessage_mp4",
    "localized_subtitles",
    "localized_marketingmessage_poster",
    "localized_marketingmessage_background",
    "localized_store_app_spotlight",
    "localized_store_app_spotlight_mobile",
    "localized_email_image",
    "localized_background_art",
    "edition_comparison",
    "template_asset",
    ...gi,
  ],
  fi = [1, 3, 2, 10],
  A1 = [1, 3, 2],
  $ = [1, 3],
  H0 = [5, 4],
  wp = [7, 6],
  _i = [1, 3, 2, 10, 5, 4],
  D1 = {
    capsule: { width: m6, height: d6, rgAcceptableTypes: $ },
    marketingmessage_art_2_eventcapsule: {
      width: m6,
      height: d6,
      rgAcceptableTypes: $,
    },
    marketingmessage_art_eventcapsule: {
      width: m6,
      height: d6,
      rgAcceptableTypes: $,
    },
    spotlight: { width: ni, height: oi, rgAcceptableTypes: $ },
    localized_store_app_spotlight: {
      width: 1100,
      height: 240,
      rgAcceptableTypes: $,
    },
    localized_store_app_spotlight_mobile: {
      width: 500,
      height: 160,
      rgAcceptableTypes: $,
    },
    localized_title_image: { width: y0, height: R0, rgAcceptableTypes: $ },
    background: { width: y0, height: R0, rgAcceptableTypes: $ },
    hero: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: $,
    },
    email_full: { width: si, height: ii, rgAcceptableTypes: $ },
    email_centered: { width: li, height: ai, rgAcceptableTypes: $ },
    broadcast_left: { width: S0, height: P0, rgAcceptableTypes: $ },
    broadcast_right: { width: S0, height: P0, rgAcceptableTypes: $ },
    sale_header: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: A1,
    },
    sale_overlay: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: A1,
    },
    localized_image_group: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: $,
    },
    localized_background_art: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: $,
    },
    sale_section_background: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: A1,
    },
    sale_section_title: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: A1,
    },
    link_capsule: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: $,
    },
    product_banner: { width: 1100, height: 160, rgAcceptableTypes: $ },
    product_mobile_banner: { width: 500, height: 160, rgAcceptableTypes: $ },
    product_banner_override: { width: 1100, height: 160, rgAcceptableTypes: $ },
    product_mobile_banner_override: {
      width: 500,
      height: 160,
      rgAcceptableTypes: $,
    },
    schedule_track_art: { width: 196, height: 92, rgAcceptableTypes: $ },
    tab_bar_background: { width: 1500, height: 100, rgAcceptableTypes: $ },
    sale_logo: { width: 940, height: 460, rgAcceptableTypes: $ },
    bestofyear_banner: { width: 1100, height: 160, rgAcceptableTypes: A1 },
    bestofyear_banner_mobile: {
      width: 500,
      height: 160,
      rgAcceptableTypes: A1,
    },
    localized_marketing_message: {
      width: 570,
      height: 600,
      rgAcceptableTypes: fi,
    },
    localized_optin_banner: { width: 1e3, height: 150, rgAcceptableTypes: $ },
    localized_marketingmessage_webm: {
      width: 570,
      height: 600,
      rgAcceptableTypes: [5],
    },
    localized_marketingmessage_mp4: {
      width: 570,
      height: 600,
      rgAcceptableTypes: [4],
    },
    localized_partnerevent_webm: {
      width: 800,
      height: 450,
      rgAcceptableTypes: [5],
    },
    localized_partnerevent_mp4: {
      width: 800,
      height: 450,
      rgAcceptableTypes: [4],
    },
    localized_subtitles: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: [6, 7],
    },
    localized_marketingmessage_poster: {
      width: 528,
      height: 297,
      rgAcceptableTypes: [1, 3],
    },
    localized_marketingmessage_background: {
      width: 570,
      height: 600,
      rgAcceptableTypes: $,
    },
    localized_email_image: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: $,
    },
    template_asset: {
      width: 0,
      height: 0,
      bDisableEnforceDimensions: !0,
      rgAcceptableTypes: _i,
    },
    spotlight_art: { width: 306, height: 260, rgAcceptableTypes: A1 },
    old_spotlight_art: { width: 306, height: 350, rgAcceptableTypes: A1 },
    marketingmessage_art: { width: 570, height: 600, rgAcceptableTypes: A1 },
    marketingmessage_art_2: { width: 570, height: 600, rgAcceptableTypes: A1 },
    takeover_art: { width: 1850, height: 450, rgAcceptableTypes: A1 },
    takeover_webm_art: { width: 1850, height: 450, rgAcceptableTypes: [5] },
    takeover_mp4_art: { width: 1850, height: 450, rgAcceptableTypes: [4] },
    takeover_mobile_art: { width: 500, height: 350, rgAcceptableTypes: A1 },
    takeover_webm_mobile_art: {
      width: 500,
      height: 350,
      rgAcceptableTypes: [5],
    },
    takeover_mp4_mobile_art: {
      width: 500,
      height: 350,
      rgAcceptableTypes: [4],
    },
    takeunder_art: { width: 940, height: 150, rgAcceptableTypes: A1 },
    takeunder_mobile_art: { width: 500, height: 160, rgAcceptableTypes: A1 },
    app_header_capsule: { width: 920, height: 430, rgAcceptableTypes: $ },
    app_main_capsule: { width: 1232, height: 706, rgAcceptableTypes: $ },
  };
function x0(t, e, r) {
  let o = D1[r];
  return !(
    !o ||
    o.bDisableEnforceDimensions ||
    t !== o.width ||
    e !== o.height
  );
}
function h6(t, e, r) {
  let o = D1[r];
  return o
    ? o.bDisableEnforceDimensions
      ? !0
      : !(t < o.width || e < o.height)
    : !1;
}
function g6(t, e) {
  return e.filter((r) => f6(t, r));
}
function f6(t, e) {
  return D1[e].rgAcceptableTypes.includes(t);
}
var V0 = p(Ye());
function Xe(t) {
  if (V0.default.isCancel(t))
    return { strErrorMsg: "Action Cancelled:" + t, errorCode: 52 };
  if (
    typeof t.response < "u" &&
    t.response.data &&
    typeof t.response.data == "object"
  ) {
    if ("msg" in t.response.data)
      return {
        strErrorMsg: t.response.data.msg,
        errorCode: t.response.data.success,
      };
    if ("err_msg" in t.response.data)
      return {
        strErrorMsg: t.response.data.err_msg,
        errorCode: t.response.data.success,
      };
    if ("message" in t.response.data)
      return {
        strErrorMsg: t.response.data.message,
        errorCode: t.response.data.success,
      };
    if ("success" in t.response.data)
      return {
        strErrorMsg: "error code: " + t.response.data.success,
        errorCode: t.response.data.success,
      };
  } else if (typeof t.data == "object") {
    if ("msg" in t.data)
      return { strErrorMsg: t.data.msg, errorCode: t.data.success };
    if ("err_msg" in t.data)
      return { strErrorMsg: t.data.err_msg, errorCode: t.data.success };
    if ("message" in t.data)
      return { strErrorMsg: t.data.message, errorCode: t.data.success };
    if ("success" in t.data)
      return {
        strErrorMsg: "error code: " + t.data.success,
        errorCode: t.data.success,
      };
  } else {
    if (typeof t.success < "u" && typeof t.msg < "u")
      return { strErrorMsg: t.msg, errorCode: t.success };
    if (typeof t.success < "u" && typeof t.message < "u")
      return { strErrorMsg: t.message, errorCode: t.success };
    if (typeof t.success < "u" && typeof t.err_msg < "u")
      return { strErrorMsg: t.err_msg, errorCode: t.success };
    if (typeof t == "string" && t.length > 1024)
      console.groupCollapsed("GetMsgAndErrorCodeFromResponse cannot parse: "),
        console.warn(t),
        console.groupEnd();
    else {
      if (typeof t == "object" && t instanceof v8)
        return {
          strErrorMsg: "" + t.GetErrorMessage(),
          errorCode: t.GetEResult(),
        };
      console.warn("GetMsgAndErrorCodeFromResponse cannot parse: ", t);
    }
  }
  return typeof t == "object" && "status" in t
    ? {
        strErrorMsg:
          "Unknown Error: " +
          t +
          `
Status Code:` +
          t.status,
        errorCode: 2,
      }
    : { strErrorMsg: "Unknown Error: " + t, errorCode: 2 };
}
var _6 = p(Ye());
var B0 = p(R());
var vi = p(Ye()),
  Li = p(R());
var _3 = class {
  constructor() {
    l1(this), N.WEB_UNIVERSE == "dev" && (window.g_ClanImageStore = this);
  }
  m_mapClanToImages = new Map();
  m_mapClanImageLoadPromises = new Map();
  m_imageListChangeCallback = new Map();
  m_mapClanImageLoadState = new Map();
  m_mapImageIDToResolution = new Map();
  BHasImageResolution(e) {
    return this.m_mapImageIDToResolution.has(e.imageid);
  }
  GetImageResolution(e) {
    return this.m_mapImageIDToResolution.get(e.imageid);
  }
  SetImageResolution(e, r) {
    this.m_mapImageIDToResolution.set(e.imageid, r);
  }
  GetImageListCallbackForClanAccountIDInternal(e) {
    return (
      this.m_imageListChangeCallback.has(e) ||
        this.m_imageListChangeCallback.set(e, new w1()),
      this.m_imageListChangeCallback.get(e)
    );
  }
  GetImageListCallbackForClanAccountID(e) {
    return this.GetImageListCallbackForClanAccountIDInternal(e);
  }
  m_vecClanImageDragListener = new Array();
  AddClanImageDragListener(e) {
    this.m_vecClanImageDragListener.indexOf(e) == -1 &&
      this.m_vecClanImageDragListener.push(e);
  }
  RemoveClanImageDragListener(e) {
    let r = this.m_vecClanImageDragListener.indexOf(e);
    r != -1 && this.m_vecClanImageDragListener.splice(r, 1);
  }
  GetClanImageDragListener() {
    return this.m_vecClanImageDragListener;
  }
  BHasLoadedClanImages(e) {
    return this.m_mapClanToImages.has(e.GetAccountID());
  }
  async LoadClanImages(e, r, o) {
    let n = e.GetAccountID();
    if (r || !this.m_mapClanImageLoadPromises.has(n)) {
      let i = this.InternalLoadClanImages(e, r, o);
      this.m_mapClanImageLoadPromises.set(n, i);
    }
    return this.m_mapClanImageLoadPromises.get(n);
  }
  async InternalLoadClanImages(e, r, o) {
    let n = e.GetAccountID();
    if (
      (Y(e && n != 0, "ClanSteamID missing:" + e),
      e && (!this.m_mapClanToImages.has(n) || r))
    ) {
      let i = {},
        s,
        a =
          N.COMMUNITY_BASE_URL +
          "/gid/" +
          e.ConvertTo64BitString() +
          "/getimages/";
      if (
        ((s = await _6.default.get(a, {
          params: i,
          withCredentials: !0,
          cancelToken: o,
        })),
        s)
      ) {
        for (let l of s.data.images) l.clanAccountID = n;
        I8(() => {
          this.m_mapClanImageLoadState.set(n, { loaded: !0 }),
            this.m_mapClanToImages.set(n, s.data.images),
            this.GetImageListCallbackForClanAccountIDInternal(n).Dispatch(
              s.data.images,
            );
        });
      }
    }
    return this.m_mapClanToImages.get(n);
  }
  GetLoadState(e) {
    return this.m_mapClanImageLoadState.get(e.GetAccountID());
  }
  GetClanImages(e) {
    return this.GetClanImagesByAccount(e.GetAccountID());
  }
  GetClanImagesByAccount(e) {
    let r = this.m_mapClanToImages.get(e);
    return r || new Array();
  }
  GetFilteredClanImages(e, r) {
    let o = v6.GetClanImages(e);
    return this.GetFilteredClanImagesList(o, r);
  }
  GetFilteredClanImagesList(e, r) {
    if (r && r.trim().length > 0) {
      r = r.trim().toLowerCase();
      let o = new Array();
      for (let n of e)
        n.file_name && n.file_name.toLowerCase().indexOf(r) >= 0 && o.push(n);
      return o;
    }
    return e;
  }
  GetClanImageByID(e, r) {
    let o = e.GetAccountID(),
      n = this.m_mapClanToImages.get(o);
    return n ? n.find((i) => i.imageid == r) : void 0;
  }
  GetClanImageByURL(e, r) {
    let o = e.GetAccountID(),
      n = this.m_mapClanToImages.get(o);
    return n ? n.find((i) => i.thumb_url == r || i.url == r) : void 0;
  }
  GetClanImageByFile(e, r) {
    let o = e.GetAccountID(),
      n = this.m_mapClanToImages.get(o);
    return n ? n.find((i) => i.file_name == r.name) : void 0;
  }
  GetClanImageByImageHash(e, r) {
    let o = e.GetAccountID(),
      n = this.m_mapClanToImages.get(o);
    return n ? n.find((i) => i.image_hash == r) : void 0;
  }
  async DeleteClanImageByID(e, r) {
    let o = { sessionid: N.SESSIONID, imageid: r },
      n = e.GetAccountID(),
      i = await _6.default.get(
        N.COMMUNITY_BASE_URL +
          "/gid/" +
          e.ConvertTo64BitString() +
          "/deleteimage/",
        { params: o },
      );
    if (!i || i.status != 200 || i.data.success != 1) return i.data;
    let s = this.m_mapClanToImages.get(n);
    if (s) {
      let a = s.findIndex((l, u, c) => l.imageid == r);
      a >= 0 &&
        (s.splice(a, 1),
        this.GetImageListCallbackForClanAccountIDInternal(n).Dispatch([...s]));
    }
    return i.data;
  }
  async DeleteClanImage(e, r) {
    return this.DeleteClanImageByID(e, r.imageid);
  }
};
g([O], _3.prototype, "m_mapClanToImages", 2),
  g([O], _3.prototype, "m_mapClanImageLoadState", 2);
var v6 = new _3();
var f2 = class {
  m_originalSize = { width: 0, height: 0 };
  m_originalDataUrl = "";
  dataUrl = void 0;
  width = 0;
  height = 0;
  status = "pending";
  message = "";
  language = void 0;
  file;
  filename;
  uploadTime;
  fileType;
  constructor(e, r, o, n, i) {
    l1(this),
      (this.file = e),
      (this.filename = r),
      (this.fileType = Je.GetExtensionTypeFromURL(r) ?? 0),
      (this.language = o),
      (this.uploadTime = Date.now()),
      (this.status = "pending"),
      (this.m_originalSize = i),
      (this.height = i.height),
      (this.width = i.width),
      (this.m_originalDataUrl = n),
      (this.dataUrl = n);
  }
  ResetImage() {
    (this.height = this.m_originalSize.height),
      (this.width = this.m_originalSize.width),
      (this.dataUrl = this.m_originalDataUrl);
  }
  GetImageOptionLabel() {}
};
g([O], f2.prototype, "dataUrl", 2),
  g([O], f2.prototype, "width", 2),
  g([O], f2.prototype, "height", 2),
  g([O], f2.prototype, "status", 2),
  g([O], f2.prototype, "message", 2),
  g([O], f2.prototype, "language", 2);
var Dr = p(R());
var e2 = p(R());
var M6 = p(R());
var Lt = p(L());
var L6 = class {
  m_Promise;
  m_Value = void 0;
  constructor(e) {
    l1(this), (this.promise = e);
  }
  set promise(e) {
    (this.m_Promise = e),
      (this.m_Value = void 0),
      e?.then((r) => {
        this.m_Promise === e && (this.m_Value = r);
      });
  }
  get promise() {
    return this.m_Promise;
  }
  get value() {
    return this.m_Value;
  }
};
g([O], L6.prototype, "m_Value", 2);
function $1(t, e, r) {
  return M6.forwardRef(function (n, i) {
    return (0, Lt.jsx)("div", {
      ...r,
      ...n,
      role: e,
      className: v(t, n.className),
      ref: i,
    });
  });
}
function T0(t) {
  if (typeof t != "string") return NaN;
  let r = !t.includes("ms") && t.includes("s"),
    o = Number.parseFloat(t);
  return r && (o *= 1e3), o;
}
var E0 = "me1BHzZX9A0-";
var Mt = p(L());
function B2(t) {
  let e = t.customTooltip ? n9 : ut;
  return (0, Mt.jsxs)(e, {
    toolTipContent: t.tooltip,
    className: v(E0, "HelperTooltip", t.className),
    children: [" ", (0, Mt.jsx)(X8, {})],
  });
}
var k6 = p(R()),
  kt = k6.default.createContext({}),
  w6 = () => k6.default.useContext(kt);
function K1(t, e) {
  return w6()[t] ?? e;
}
var u2 = {
  Toggle: "iht2aUDj9M8-",
  Disabled: "YTEsHaVTRhQ-",
  ToggleRail: "smW0sc5P0Ac-",
  Highlight: "itL3LCJ2LME-",
  On: "cu29JgKd7Ng-",
  Off: "Rre7XjErr1w-",
  ToggleSwitch: "Py0EVswynbg-",
  ToggleRow: "LCqK-Jsy46k-",
  Label: "K-4Bc-GCthE-",
};
var he = p(L());
function A0(t) {
  let e = K1("ToggleControl", wi);
  return (0, he.jsx)(e, { ...t });
}
function wi(t) {
  let { value: e, onChange: r, disabled: o } = t;
  return (0, he.jsxs)("div", {
    className: v(u2.Toggle, o && u2.Disabled),
    onClick: () => !o && r && r(!e),
    children: [
      (0, he.jsx)("div", { className: u2.ToggleRail }),
      (0, he.jsx)("div", {
        className: v(u2.ToggleRail, u2.Highlight, e ? u2.On : u2.Off),
      }),
      (0, he.jsx)("div", { className: v(u2.ToggleSwitch, e ? u2.On : u2.Off) }),
    ],
  });
}
var F = p(L());
function bt(t) {
  return e2.forwardRef(function (r, o) {
    return (0, F.jsx)(e1, { ...r, className: v(t, r.className), ref: o });
  });
}
var Rt = $1("DialogHeader", "heading"),
  D0 = $1("DialogSubHeader", "heading", { "aria-level": 3 }),
  Hd = $1("SettingsDialogSubHeader", "heading", { "aria-level": 3 }),
  Z0 = $1("DialogFooter"),
  bi = $1("DialogLabel _DialogLayout"),
  I0 = $1("DialogBodyText"),
  xd = $1("DialogBody"),
  G0 = bt("DialogBody"),
  Vd = $1("DialogInnerBody"),
  Bd = $1("DialogControlsSection"),
  Td = $1("DialogControlsSectionHeader", "heading", { "aria-level": 3 }),
  Ri = bt("DialogTwoColLayout _DialogColLayout"),
  yi = bt("DialogThreeColLayout _DialogColLayout"),
  Ed = bt("DialogTwoThirdColLayout _DialogColLayout"),
  Ad = $1("DialogColumn _DialogLayout");
function yt(t) {
  let e = K1("Content", Pi);
  return (0, F.jsx)(e, { ...t });
}
function Pi(t) {
  let { children: e, bCenterVertically: r, refElem: o, ...n } = t,
    i = "DialogContent _DialogLayout" + (t.className ? " " + t.className : "");
  return (
    r && (i += " _DialogCenterVertically"),
    (0, F.jsx)("div", {
      ...n,
      ref: o,
      className: i,
      children: (0, F.jsx)("div", {
        className: "DialogContent_InnerWidth",
        children: e,
      }),
    })
  );
}
var wt = class extends e2.Component {
  OnSubmit(e) {
    e.preventDefault(), this.props.onSubmit && this.props.onSubmit(e);
  }
  render() {
    return (0, F.jsx)("form", { ...this.props, onSubmit: this.OnSubmit });
  }
};
g([_], wt.prototype, "OnSubmit", 1);
function F0(t) {
  let { classNameContent: e, bCenterVertically: r, ...o } = t;
  return (0, F.jsx)(yt, {
    className: e,
    bCenterVertically: r,
    children: (0, F.jsx)(wt, { ...o }),
  });
}
function W0(t) {
  let { label: e, tooltip: r, className: o, children: n } = t;
  return (0, F.jsxs)("label", {
    className: v("DialogInputLabelGroup", "_DialogLayout", o),
    children: [
      e &&
        (0, F.jsxs)(bi, {
          children: [e, " ", r && (0, F.jsx)(B2, { tooltip: r }), " "],
        }),
      n,
    ],
  });
}
var L3 = e2.forwardRef(function (e, r) {
    let o = w6(),
      { svgicon: n, ...i } = e,
      s = v(
        e.className,
        n !== void 0 && "hasSVGIcon",
        i.disabled && "Disabled",
        o.strButtonClassName,
      ),
      a = (l) => {
        if (!(i.disabled || !l))
          return (u) => {
            u.stopPropagation(), l(u);
          };
      };
    return (0, F.jsxs)(j3, {
      ref: r,
      onOKActionDescription: i.disabled ? null : void 0,
      noFocusRing: !!o.strButtonClassName,
      ...i,
      className: s,
      disabled: !1,
      onClick: a(i.onClick),
      onPointerDown: a(i.onPointerDown),
      onPointerUp: a(i.onPointerUp),
      onPointerCancel: a(i.onPointerCancel),
      onMouseDown: a(i.onMouseDown),
      onMouseUp: a(i.onMouseUp),
      onTouchStart: a(i.onTouchStart),
      onTouchEnd: a(i.onTouchEnd),
      onTouchCancel: a(i.onTouchCancel),
      onSubmit: a(i.onSubmit),
      children: [n && n(), e.children],
    });
  }),
  ge = e2.forwardRef(function (e, r) {
    return (0, F.jsx)(L3, {
      preferredFocus: !0,
      type: e.onClick ? "button" : "submit",
      ...e,
      ref: r,
      className: v(e.className, "DialogButton", "_DialogLayout", "Primary"),
    });
  }),
  x1 = e2.forwardRef(function (e, r) {
    return (0, F.jsx)(L3, {
      type: "button",
      ...e,
      ref: r,
      className: v(e.className, "DialogButton", "_DialogLayout", "Secondary"),
    });
  }),
  Dd = e2.forwardRef(function (e, r) {
    return (0, F.jsx)(L3, {
      type: "button",
      ...e,
      ref: r,
      className: v(e.className, "DialogButton", "_DialogLayout", "EmptyButton"),
    });
  }),
  Zd = e2.forwardRef(function (e, r) {
    return (0, F.jsx)(L3, {
      type: "button",
      ...e,
      ref: r,
      className: v(e.className, "DialogButton _DialogLayout Small"),
    });
  }),
  Id = e2.forwardRef(function (e, r) {
    return (0, F.jsx)(L3, {
      type: "button",
      ...e,
      ref: r,
      className: v(e.className, "TextButton"),
    });
  });
function O0(t) {
  return (0, F.jsxs)(Ri, {
    className: t.className,
    children: [
      (0, F.jsxs)(ge, {
        onClick: t.onOK,
        disabled: t.bOKDisabled,
        autoFocus: t.focusButton == "primary",
        children: [t.strOKText || y("#Button_Confirm"), " "],
      }),
      (0, F.jsx)(x1, {
        onClick: t.onCancel,
        disabled: t.bCancelDisabled,
        autoFocus: t.focusButton == "secondary",
        children: t.strCancelText || y("#Button_Cancel"),
      }),
    ],
  });
}
function N0(t) {
  let e = t.bOKDisabled ? x1 : ge,
    r = t.bOKDisabled ? ge : x1;
  return (0, F.jsxs)(yi, {
    children: [
      (0, F.jsxs)(e, {
        onClick: t.onOK,
        disabled: t.bOKDisabled,
        children: [t.strOKText || y("#Button_Confirm"), " "],
      }),
      (0, F.jsxs)(r, {
        onClick: t.onUpdate,
        disabled: t.bUpdateDisabled,
        children: [t.strUpdateText || y("#Button_Update"), " "],
      }),
      (0, F.jsx)(x1, {
        onClick: t.onCancel,
        disabled: t.bCancelDisabled,
        children: t.strCancelText || y("#Button_Cancel"),
      }),
    ],
  });
}
var Y2 = class extends e2.Component {
  constructor(e) {
    super(e), (this.state = { checked: e.checked, disabled: e.disabled });
  }
  componentDidUpdate(e) {
    this.props.controlled ||
      (e.checked != this.props.checked &&
        this.props.checked != this.state.checked &&
        this.setState({ checked: this.props.checked })),
      e.disabled != this.props.disabled &&
        this.props.disabled != this.state.disabled &&
        this.setState({ disabled: this.props.disabled });
  }
  shouldComponentUpdate(e, r) {
    return !(
      e.label == this.props.label &&
      e.description == this.props.description &&
      e.onChange == this.props.onChange &&
      e.controlled == this.props.controlled &&
      e.disabled == this.props.disabled &&
      r.disabled == this.state.disabled &&
      e.checked == this.checked &&
      r.checked == this.state.checked
    );
  }
  get checked() {
    return this.props.controlled ? this.props.checked : this.state.checked;
  }
  GetPanelElementProps() {
    let {
      onChange: e,
      checked: r,
      label: o,
      description: n,
      tabIndex: i,
      disabled: s,
      className: a,
      tooltip: l,
      color: u,
      highlightColor: c,
      bottomSeparator: m,
      controlled: f,
      ...k
    } = this.props;
    return {
      ...k,
      tabIndex: i || 0,
      onActivate: this.Toggle,
      onKeyDown: this.KeyDown,
    };
  }
  Toggle() {
    if (this.props.disabled) return;
    let e = !this.checked;
    this.props.controlled || this.setState({ checked: e }),
      this.props.onChange && this.props.onChange(e);
  }
  KeyDown(e) {
    e.keyCode == 32 && (this.Toggle(), e.preventDefault(), e.stopPropagation());
  }
  SetChecked(e, r) {
    this.setState({ checked: e }),
      r && this.props.onChange && this.props.onChange(e);
  }
};
g([_], Y2.prototype, "Toggle", 1),
  g([_], Y2.prototype, "KeyDown", 1),
  g([_], Y2.prototype, "SetChecked", 1);
var Gd = e2.forwardRef(function (e, r) {
    let o = K1("ToggleField", v3);
    return (0, F.jsx)(o, { ref: r, ...e });
  }),
  v3 = class extends Y2 {
    OnOffKeyDown(e) {
      (e.keyCode == 37 && this.checked) || (e.keyCode == 39 && !this.checked)
        ? (this.Toggle(), e.preventDefault(), e.stopPropagation())
        : this.KeyDown(e);
    }
    OnNewUIToggle(e) {
      e !== this.checked && this.Toggle();
    }
    render() {
      let e =
        "DialogToggleField _DialogInputContainer _DialogLayout " +
        (this.props.className ? this.props.className : "");
      return (
        this.props.disabled && (e += " Disabled"),
        (0, F.jsxs)("div", {
          className: e,
          tabIndex: this.props.tabIndex || 0,
          onKeyDown: this.OnOffKeyDown,
          children: [
            (0, F.jsxs)("div", {
              className: "displayColumn alignSelfCenter",
              children: [
                (0, F.jsxs)("div", {
                  className: "DialogToggle_Label",
                  children: [
                    (0, F.jsx)("span", { children: this.props.label }),
                    this.props.tooltip &&
                      (0, F.jsx)(B2, { tooltip: this.props.tooltip }),
                  ],
                }),
                this.props.description &&
                  (0, F.jsx)("div", {
                    className: "DialogToggle_Description",
                    children: this.props.description,
                  }),
                this.props.children,
              ],
            }),
            this.props.useToggleRail
              ? (0, F.jsx)("div", {
                  className: "DialogToggleField_NewUIContainer",
                  children: (0, F.jsx)(A0, {
                    onChange: this.OnNewUIToggle,
                    value: this.checked,
                  }),
                })
              : (0, F.jsx)("div", {
                  className: "DialogToggleField_Control",
                  onClick: this.Toggle,
                  children: (0, F.jsxs)(e1, {
                    className: "DialogToggleField_OptionPanel",
                    onOKButton: this.Toggle,
                    children: [
                      (0, F.jsx)("div", {
                        className:
                          "DialogToggleField_Option Off" +
                          (this.checked ? "" : " Active"),
                        children: y("#Dialog_Off"),
                      }),
                      (0, F.jsx)("div", {
                        className:
                          "DialogToggleField_Option On" +
                          (this.checked ? " Active" : ""),
                        children: y("#Dialog_On"),
                      }),
                    ],
                  }),
                }),
          ],
        })
      );
    }
  };
g([_], v3.prototype, "OnOffKeyDown", 1),
  g([_], v3.prototype, "OnNewUIToggle", 1);
var v2 = p(R());
var Pt = class extends $8 {
  m_component;
  m_propTargets;
  m_props = {};
  m_setStateOnComplete;
  constructor(e, r, o) {
    super(R8(e.ref.current), o),
      (this.m_component = e),
      (this.m_propTargets = r),
      (this.m_setStateOnComplete = o.setStateOnComplete);
  }
  Start() {
    this.m_props = {};
    for (let e in this.m_propTargets) {
      let r = parseFloat(this.m_component.state[e]) || 0,
        o = this.m_propTargets[e];
      r != o && (this.m_props[e] = { start: r, end: o });
    }
    super.Start();
  }
  Update(e) {
    let r = {};
    for (let o in this.m_props) {
      let n = this.m_props[o],
        i = n.start + (n.end - n.start) * e;
      r[o] = i;
    }
    this.m_component.setState(r);
  }
  FireOnComplete() {
    super.FireOnComplete(),
      this.m_setStateOnComplete &&
        this.m_component.setState(this.m_setStateOnComplete);
  }
};
var q = p(L()),
  Si = v2.forwardRef(function (e, r) {
    let o = K1("InputElement", Be);
    return (0, q.jsx)(o, { ...e, ref: r });
  }),
  X2 = class X2 extends v2.PureComponent {
    m_CopiedAnimation;
    ref = v2.createRef();
    constructor(e) {
      super(e),
        this.CheckProps(e),
        (this.state = {
          m_CopiedYPos: 0,
          m_bPlayingCopiedAnimation: !1,
          m_bCompletedCopiedAnimation: !1,
          m_bNumberBelowMinRange: !1,
          m_bNumberAboveMaxRange: !1,
          m_bIsNotNumeric: !1,
          m_bIsInvalidURL: !1,
          m_strInvalidURLMessage: null,
          m_bIsInvalidEmail: !1,
          m_bAboveMaxChars: !1,
        });
    }
    componentDidUpdate(e) {
      this.CheckProps(this.props);
    }
    m_elInput;
    OnInputRef(e) {
      (this.m_elInput = e),
        this.m_elInput && this.props.focusOnMount && this.m_elInput.focus();
    }
    get element() {
      return this.m_elInput;
    }
    get value() {
      return this.m_elInput && this.m_elInput.value;
    }
    Focus() {
      this.m_elInput?.focus();
    }
    static validateUrl(e) {
      return (
        e != null &&
        (/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
          e,
        ) ||
          /^steam:\/\/[-a-zA-Z0-9@:%._\+~#=]{2,256}/i.test(e))
      );
    }
    static validateEmail(e) {
      return (
        e != null &&
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          e.toLowerCase(),
        )
      );
    }
    Validate() {
      this.setState({
        m_bNumberBelowMinRange:
          this.props.rangeMin !== null &&
          this.props.rangeMin !== void 0 &&
          Number(this.m_elInput?.value) < this.props.rangeMin,
        m_bNumberAboveMaxRange:
          this.props.rangeMax !== null &&
          this.props.rangeMax !== void 0 &&
          Number(this.m_elInput?.value) > this.props.rangeMax,
        m_bIsNotNumeric:
          this.props.mustBeNumeric == !0 &&
          isNaN(Number(this.m_elInput?.value)),
        m_bIsInvalidURL:
          this.props.mustBeURL == !0 && !X2.validateUrl(this.m_elInput?.value),
        m_strInvalidURLMessage: this.props.fnStrValidateURL
          ? this.props.fnStrValidateURL(this.m_elInput?.value)
          : null,
        m_bIsInvalidEmail:
          this.props.mustBeEmail == !0 &&
          !X2.validateEmail(this.m_elInput?.value),
        m_bAboveMaxChars:
          this.props.maxChars != null &&
          this.m_elInput != null &&
          this.m_elInput.value.length > this.props.maxChars,
      });
    }
    OnChanged(e) {
      this.props.onChange && this.props.onChange(e), this.Validate();
    }
    OnCopyClick(e) {
      if (!this.m_elInput) return;
      this.m_elInput.select();
      let r = this.m_elInput.ownerDocument;
      if (r.queryCommandEnabled("copy")) {
        r.execCommand("copy"),
          e.currentTarget.focus(),
          this.m_CopiedAnimation && this.m_CopiedAnimation.Cancel();
        let o = -4,
          n = -24;
        this.setState({ m_bCompletedCopiedAnimation: !1 }),
          this.setState({ m_CopiedYPos: o }, () => {
            (this.m_CopiedAnimation = new Pt(
              this,
              { m_CopiedYPos: n },
              {
                msDuration: 300,
                timing: "sine",
                setStateOnComplete: { m_bCompletedCopiedAnimation: !0 },
              },
            )),
              this.m_CopiedAnimation.Start();
          });
      }
    }
    OnClearClick(e) {
      this.m_elInput &&
        this.m_elInput.value &&
        (Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "value",
        ).set.call(this.m_elInput, ""),
        this.m_elInput.dispatchEvent(new Event("input", { bubbles: !0 })));
    }
    CheckProps(e) {
      Y(
        !(e.bShowClearAction || e.bAlwaysShowClearAction) || e.onChange,
        "In order for bShowClearAction to work correctly, you should be handling onChange and passing value to the Dialog.Input.",
      );
    }
    render() {
      let {
          label: e,
          description: r,
          requiredLabel: o,
          bShowCopyAction: n,
          bShowClearAction: i,
          bAlwaysShowClearAction: s,
          rangeMin: a,
          rangeMax: l,
          mustBeNumeric: u,
          mustBeURL: c,
          fnStrValidateURL: m,
          mustBeEmail: f,
          focusOnMount: k,
          tooltip: M,
          inlineControls: b,
          maxChars: w,
          ...A
        } = this.props,
        Z =
          "DialogInput DialogInputPlaceholder DialogTextInputBase" +
          (A.className ? " " + A.className : ""),
        I = "copiedAnimation",
        i1 = this.state.m_bCompletedCopiedAnimation;
      this.m_CopiedAnimation && (I = "copiedAnimation animationPlaying"),
        i1 && (I = "copiedAnimation animationComplete");
      let J = {};
      this.state.m_CopiedYPos !== void 0 &&
        (J.transform = "translateY(" + this.state.m_CopiedYPos + "px)");
      let s1 = (0, q.jsxs)(v2.Fragment, {
        children: [
          (0, q.jsxs)(e1, {
            className: "DialogInput_Wrapper _DialogLayout",
            "flow-children": "row",
            ref: this.ref,
            children: [
              (0, q.jsx)(Si, {
                type: "text",
                ...A,
                className: Z,
                ref: this.OnInputRef,
                onChange: this.OnChanged,
              }),
              n &&
                (0, q.jsxs)("div", {
                  className: "displayRow",
                  children: [
                    (0, q.jsx)(x1, {
                      className: "DialogInput_CopyAction Primary",
                      onClick: this.OnCopyClick,
                      children: y("#Button_Copy"),
                    }),
                    (0, q.jsx)("div", {
                      style: J,
                      className: I,
                      children: y("#Button_Copied"),
                    }),
                  ],
                }),
              (s || (i && A.value)) &&
                (0, q.jsx)("div", {
                  className: "DialogInput_ClearAction",
                  onClick: this.OnClearClick,
                  children: (0, q.jsx)(G2, {}),
                }),
              b,
            ],
          }),
          r &&
            (0, q.jsx)("div", {
              className: "DialogLabelExplainer",
              children: r,
            }),
        ],
      });
      return e
        ? (0, q.jsx)("div", {
            className:
              "DialogInputLabelGroup _DialogLayout DialogRequirementLabel",
            children: (0, q.jsxs)("label", {
              children: [
                (0, q.jsxs)("div", {
                  className: "DialogLabel",
                  children: [
                    e,
                    " ",
                    this.props.tooltip &&
                      (0, q.jsx)(B2, { tooltip: this.props.tooltip }),
                    (0, q.jsx)("span", {
                      className: "DialogInputRequirementLabel",
                      children: this.props.requiredLabel,
                    }),
                    " ",
                  ],
                }),
                s1,
                this.state.m_bNumberBelowMinRange
                  ? (0, q.jsxs)("div", {
                      children: [" ", y("#Input_Error_NumberTooSmall"), " "],
                    })
                  : null,
                this.state.m_bNumberAboveMaxRange
                  ? (0, q.jsxs)("div", {
                      children: [" ", y("#Input_Error_NumberTooLarge"), " "],
                    })
                  : null,
                this.state.m_bIsInvalidURL
                  ? (0, q.jsxs)("div", {
                      children: [" ", y("#Input_Error_MustBeURL"), " "],
                    })
                  : null,
                this.state.m_strInvalidURLMessage
                  ? (0, q.jsxs)("div", {
                      children: [" ", this.state.m_strInvalidURLMessage, " "],
                    })
                  : null,
                this.state.m_bIsInvalidEmail
                  ? (0, q.jsxs)("div", {
                      children: [" ", y("#Input_Error_MustBeEmail"), " "],
                    })
                  : null,
                this.state.m_bIsNotNumeric
                  ? (0, q.jsxs)("div", {
                      children: [" ", y("#Input_Error_MustBeNumber"), " "],
                    })
                  : null,
                this.state.m_bAboveMaxChars
                  ? (0, q.jsxs)("div", {
                      children: [
                        " ",
                        U8("#Input_Error_TooManyCharacters", w),
                        " ",
                      ],
                    })
                  : null,
              ],
            }),
          })
        : s1;
    }
  };
g([_], X2.prototype, "OnInputRef", 1),
  g([_], X2.prototype, "OnChanged", 1),
  g([_], X2.prototype, "OnCopyClick", 1),
  g([_], X2.prototype, "OnClearClick", 1);
var _2 = X2,
  M3 = class extends _2 {
    m_bFocused = !1;
    OnBackgroundClick() {
      this.m_elInput && this.m_elInput.focus();
    }
    OnInputFocus(e) {
      this.m_bFocused || ((this.m_bFocused = !0), this.forceUpdate()),
        this.props.onFocus && this.props.onFocus(e);
    }
    OnInputBlur(e) {
      this.m_bFocused && ((this.m_bFocused = !1), this.forceUpdate()),
        this.props.onBlur && this.props.onBlur(e);
    }
    render() {
      let {
        label: e,
        description: r,
        requiredLabel: o,
        bShowCopyAction: n,
        bShowClearAction: i,
        bAlwaysShowClearAction: s,
        rangeMin: a,
        rangeMax: l,
        maxChars: u,
        mustBeNumeric: c,
        mustBeURL: m,
        fnStrValidateURL: f,
        mustBeEmail: k,
        focusOnMount: M,
        tooltip: b,
        inlineControls: w,
        className: A,
        children: Z,
        ...I
      } = this.props;
      return (0, q.jsx)("div", {
        className: "DialogInputLabelGroup _DialogLayout DialogListBuilderInput",
        children: (0, q.jsxs)("label", {
          children: [
            e && (0, q.jsx)("div", { className: "DialogLabel", children: e }),
            (0, q.jsx)("div", {
              className: v(
                "_DialogInputContainer",
                "DialogTextInputBase",
                this.m_bFocused && "Active",
              ),
              onClick: this.OnBackgroundClick,
              children: (0, q.jsxs)(e1, {
                className: "DialogListBuilderInput_List",
                "flow-children": "row",
                children: [
                  v2.Children.map(Z, (i1, J) =>
                    (0, q.jsx)(
                      "div",
                      {
                        className: "DialogListBuilderInput_ListItem",
                        children: i1,
                      },
                      J,
                    ),
                  ),
                  (0, q.jsx)(Be, {
                    type: "text",
                    ...I,
                    className:
                      "DialogListBuilderInput_Input DialogInputPlaceholder",
                    ref: this.OnInputRef,
                    onFocus: this.OnInputFocus,
                    onBlur: this.OnInputBlur,
                    size: 4,
                  }),
                ],
              }),
            }),
            r &&
              (0, q.jsx)("div", {
                className: "DialogLabelExplainer",
                children: r,
              }),
          ],
        }),
      });
    }
  };
g([_], M3.prototype, "OnBackgroundClick", 1),
  g([_], M3.prototype, "OnInputFocus", 1),
  g([_], M3.prototype, "OnInputBlur", 1);
var U0 = p(R());
var L2 = p(L()),
  b6 = (t, e) =>
    "" + (t != null ? Number.parseFloat(t.toFixed(3)) : null) + (e ?? "");
var T2 = class extends U0.Component {
  m_flLastSetValue = null;
  constructor(e) {
    super(e);
  }
  ClampValue(e) {
    return e === void 0 || isNaN(e) || e < this.props.min
      ? this.props.min
      : e > this.props.max
        ? this.props.max
        : e;
  }
  BPropsValid() {
    return this.props.max > this.props.min;
  }
  m_elSlider;
  m_rectSlider;
  OnMouseDown(e) {
    (this.m_elSlider = e.currentTarget),
      (this.m_rectSlider = this.m_elSlider.getBoundingClientRect()),
      this.props.onChangeStart && this.props.onChangeStart(1),
      this.AdjustSliderForClientX(e.clientX, 1),
      this.m_elSlider.ownerDocument.defaultView?.addEventListener(
        "mousemove",
        this.OnMouseMove,
      ),
      this.m_elSlider.ownerDocument.defaultView?.addEventListener(
        "mouseup",
        this.OnMouseUp,
      );
  }
  OnMouseMove(e) {
    this.AdjustSliderForClientX(e.clientX, 1);
  }
  OnMouseUp(e) {
    this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
      "mousemove",
      this.OnMouseMove,
    ),
      this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
        "mouseup",
        this.OnMouseUp,
      ),
      this.CompleteChange(1);
  }
  OnTouchStart(e) {
    (this.m_elSlider = e.currentTarget),
      (this.m_rectSlider = this.m_elSlider.getBoundingClientRect()),
      this.props.onChangeStart && this.props.onChangeStart(0),
      this.AdjustSliderForClientX(e.touches[0].clientX, 0),
      this.m_elSlider.ownerDocument.defaultView?.addEventListener(
        "touchmove",
        this.OnTouchMove,
      ),
      this.m_elSlider.ownerDocument.defaultView?.addEventListener(
        "touchend",
        this.OnTouchEnd,
      );
  }
  OnTouchMove(e) {
    this.AdjustSliderForClientX(e.touches[0].clientX, 0);
  }
  OnTouchEnd(e) {
    this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
      "touchmove",
      this.OnTouchMove,
    ),
      this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
        "touchend",
        this.OnTouchEnd,
      ),
      this.CompleteChange(0);
  }
  OnKeyDown(e) {
    let r = 1;
    e.ctrlKey &&
      (r = Math.max(
        1,
        Math.floor((this.props.max - this.props.min) * 0.1 + 0.5),
      )),
      e.keyCode == 37
        ? (this.IncrementValue(-1 * r), e.preventDefault())
        : e.keyCode == 39 && (this.IncrementValue(1 * r), e.preventDefault()),
      this.CompleteChange(2);
  }
  AdjustSliderForClientX(e, r) {
    let o =
      ((e - this.m_rectSlider.left) /
        (this.m_rectSlider.right - this.m_rectSlider.left)) *
        (this.props.max - this.props.min) +
      this.props.min;
    o = Math.floor(o + 0.5);
    let n = this.ClampValue(o);
    n != this.props.value &&
      (this.props.onChange && this.props.onChange(n, r),
      (this.m_flLastSetValue = n));
  }
  CompleteChange(e) {
    this.m_flLastSetValue != null &&
      (this.props.onChangeComplete &&
        this.props.onChangeComplete(this.m_flLastSetValue, e),
      (this.m_flLastSetValue = null));
  }
  IncrementValue(e) {
    let r = this.ClampValue(this.props.value + e);
    r != this.props.value &&
      (this.props.onChange && this.props.onChange(r, 2),
      (this.m_flLastSetValue = r));
  }
  render() {
    let e = {},
      r = {};
    if (this.BPropsValid()) {
      let l =
        (100 * (this.props.value - this.props.min)) /
          (this.props.max - this.props.min) +
        "%";
      (e.width = l), (r.left = l);
    }
    let { label: o, description: n, tooltip: i, ...s } = this.props,
      a = this.props.renderValue ?? b6;
    return (0, L2.jsxs)("div", {
      className:
        "DialogSlider_Container _DialogInputContainer _DialogLayout" +
        (this.props.className ? " " + this.props.className : ""),
      onKeyDown: this.OnKeyDown,
      tabIndex: this.props.tabIndex || 0,
      children: [
        o &&
          (0, L2.jsxs)("div", {
            className: "DialogLabel",
            children: [o, !!i && (0, L2.jsx)(B2, { tooltip: i })],
          }),
        (0, L2.jsxs)("div", {
          className: "DialogSlider_Slider",
          onMouseDown: this.OnMouseDown,
          onTouchStart: this.OnTouchStart,
          children: [
            (0, L2.jsx)("div", { className: "DialogSlider_Value", style: e }),
            (0, L2.jsx)("div", { className: "DialogSlider_Grabber", style: r }),
          ],
        }),
        this.props.showValue &&
          (0, L2.jsx)("div", {
            className: "DialogLabelExplainer",
            children: a(this.props.value, this.props.valueSuffix),
          }),
        n &&
          (0, L2.jsx)("div", {
            className: "DialogLabelExplainer",
            children: n,
          }),
      ],
    });
  }
};
g([_], T2.prototype, "OnMouseDown", 1),
  g([_], T2.prototype, "OnMouseMove", 1),
  g([_], T2.prototype, "OnMouseUp", 1),
  g([_], T2.prototype, "OnTouchStart", 1),
  g([_], T2.prototype, "OnTouchMove", 1),
  g([_], T2.prototype, "OnTouchEnd", 1),
  g([_], T2.prototype, "OnKeyDown", 1);
var z0 = p(R());
var xi = p(L()),
  Hi = { setValue: () => {} },
  hm = z0.default.createContext(Hi);
var V1 = p(R());
var k3 = {
  DialogDropDownMenu_Item: "jHkXIJHJm88-",
  DialogDropDownMenu_Separator: "_8Ba71jUzzWw-",
  DialogDropDownMenu: "_865BbeRmTtw-",
};
var u1 = p(L());
function E2(t) {
  return typeof t == "object" && "data" in t;
}
function fe(t) {
  return typeof t == "object" && "bIsSeparator" in t;
}
function k2(t) {
  return typeof t == "object" && "options" in t;
}
function y6(t, e) {
  if (t === e) return !0;
  if (!Array.isArray(t) || !Array.isArray(e) || t.length != e.length) return !1;
  for (let r = 0; r < t.length; r++) if (!P6(t[r], e[r])) return !1;
  return !0;
}
function P6(t, e) {
  return t == null || e == null
    ? t == e
    : fe(t) && fe(e)
      ? !0
      : !(
          fe(t) ||
          fe(e) ||
          t.label !== e.label ||
          t.tooltip !== e.tooltip ||
          k2(t) != k2(e) ||
          (k2(t) && k2(e) && !y6(t.options, e.options)) ||
          (E2(t) && E2(e) && t.data !== e.data)
        );
}
function St(t, e) {
  if (t != null)
    for (let r = 0; r < t.length; r++) {
      let o = t[r];
      if (E2(o) && o.data === e) return o;
      if (k2(o)) {
        let n = St(o.options, e);
        if (n != null) return n;
      }
    }
}
function Vi(t) {
  let e = K1("DropDownField", Bi);
  return (0, u1.jsx)(e, { ...t });
}
function Bi(t) {
  let {
    label: e,
    tooltip: r,
    strClassName: o,
    dropDownControlRef: n,
    ...i
  } = t;
  return (0, u1.jsx)(W0, {
    label: e,
    tooltip: r,
    className: o,
    children: (0, u1.jsx)(M2, { menuLabel: e, ...i, ref: n }),
  });
}
var Ti = V1.forwardRef(function (e, r) {
    return (0, u1.jsxs)(j3, {
      focusable: e.focusable,
      className: v(e.className, "DialogDropDown", "_DialogInputContainer", {
        Active: e.opened,
        Disabled: e.disabled,
      }),
      tabIndex: e.tabIndex,
      onClick: e.onClick,
      onKeyDown: e.onKeyDown,
      disabled: e.disabled,
      type: "button",
      ref: r,
      noFocusRing: e.noFocusRing,
      role: e.role ?? "combobox",
      "aria-controls": e["aria-controls"],
      "aria-expanded": e.opened,
      children: [
        (0, u1.jsx)("div", {
          className: "DialogDropDown_CurrentDisplay",
          children: e.children,
        }),
        !e.disabled &&
          (0, u1.jsx)("div", {
            className: v(e.arrowClassName, "DialogDropDown_Arrow"),
            children: (0, u1.jsx)(Y3, { role: "presentation" }),
          }),
      ],
    });
  }),
  M2 = class extends V1.Component {
    static contextType = kt;
    m_elInput;
    m_iMenuInstance;
    constructor(e) {
      super(e),
        (this.state = {
          value: St(e.rgOptions, e.selectedOption),
          bOpened: !1,
        });
    }
    SetSelectedOption(e) {
      if (this.props.controlled) return;
      let r = St(this.props.rgOptions, e);
      P6(r, this.value) || this.setState({ value: r });
    }
    get value() {
      return this.props.controlled
        ? St(this.props.rgOptions, this.props.selectedOption)
        : this.state.value;
    }
    shouldComponentUpdate(e, r, o) {
      if (
        e.selectedOption !== this.props.selectedOption ||
        e.disabled != this.props.disabled ||
        r.bOpened !== this.state.bOpened ||
        !y6(this.props.rgOptions, e.rgOptions) ||
        !P6(r.value, this.value)
      )
        return !0;
      let n = ["selectedOption", "tabIndex", "onChange", "strDefaultLabel"];
      for (let i of n) if (e[i] !== this.props[i]) return !0;
      return !1;
    }
    componentDidUpdate(e, r) {
      Y(
        this.props.controlled === e.controlled,
        '"controlled" prop should never change after mount',
      );
      let o = !y6(e.rgOptions, this.props.rgOptions),
        n = e.selectedOption !== this.props.selectedOption,
        i = this.value !== r.value;
      !this.props.controlled &&
        (o || i || n) &&
        (n || this.value == null
          ? this.SetSelectedOption(this.props.selectedOption)
          : this.SetSelectedOption(this.value.data)),
        (o || i) &&
          (this.state.bOpened
            ? (this.m_iMenuInstance?.SetOnHideCallback(void 0),
              this.m_iMenuInstance?.Hide(),
              (this.m_iMenuInstance = void 0),
              this.BuildMenu())
            : this.m_iMenuInstance &&
              (this.m_iMenuInstance.SetOnHideCallback(void 0),
              (this.m_iMenuInstance = void 0)));
    }
    OnInputRef(e) {
      e && (this.m_elInput = e);
    }
    get element() {
      return this.m_elInput;
    }
    ToggleMenu() {
      if (this.state.bOpened) this.HideMenu();
      else {
        if (
          this.props.onMenuWillOpen &&
          this.props.onMenuWillOpen(this.ShowMenu) == !1
        )
          return;
        this.ShowMenu();
      }
    }
    OnValueSelected(e, r) {
      this.HideMenu(),
        this.setState({ value: r }),
        this.props.onChange && this.props.onChange(r, this, e);
    }
    BuildMenu() {
      let e = "DialogMenuPosition";
      this.props.strDropDownClassName &&
        (e += " " + this.props.strDropDownClassName);
      let r = {
          bOverlapHorizontal: !0,
          bMatchWidth: this.props.bMatchWidth ?? !0,
          bFitToWindow: !0,
          strClassName: e,
          bDisableMouseOverlay: this.props.bDisableMouseOverlay,
          ...this.props.contextMenuPositionOptions,
        },
        o = this.props.contextMenuPositionOptions?.onCancel;
      (this.m_iMenuInstance = ae(
        (0, u1.jsx)(Ei, {
          rgOptions: this.props.rgOptions,
          onValueSelected: this.OnValueSelected,
          onCancel: o,
          selectedValue: this.value?.data,
          strDropDownMenuCtnClass: this.props.strDropDownMenuCtnClass,
          strDropDownItemClassName: this.props.strDropDownItemClassName,
          id: `dropdownmenu_${this.m_iMenuInstance?.key}`,
        }),
        this.m_elInput,
        r,
      )),
        this.m_iMenuInstance.SetLabel(
          this.props.menuLabel ??
            (typeof this.props.strDefaultLabel == "string" &&
              this.props.strDefaultLabel),
        ),
        this.m_iMenuInstance.SetOnHideCallback(this.HideMenu);
    }
    ShowMenu() {
      this.m_iMenuInstance ? this.m_iMenuInstance.Show() : this.BuildMenu(),
        this.props.onMenuOpened && this.props.onMenuOpened(),
        this.setState({ bOpened: !0 });
    }
    HideMenu() {
      this.m_iMenuInstance && this.m_iMenuInstance.Hide(),
        this.setState({ bOpened: !1 }, () => this.m_elInput.focus());
    }
    OnKeyDown(e) {
      q0(e, this.props.rgOptions.filter(E2), this.value?.data, (r) =>
        this.OnValueSelected(void 0, r),
      );
    }
    render() {
      let e = this.value?.label ?? this.props.strDefaultLabel;
      this.props.renderButtonValue != null &&
        (e = this.props.renderButtonValue(e));
      let r = this.props.focusable ?? !0,
        o = this.props.renderButton || this.context.DropDownControlButton || Ti;
      return (0, u1.jsx)(o, {
        focusable: r,
        disabled: this.props.disabled ?? !1,
        opened: this.state.bOpened,
        onClick: this.props.disabled ? void 0 : this.ToggleMenu,
        onKeyDown: this.props.disabled ? void 0 : this.OnKeyDown,
        tabIndex: this.props.tabIndex ?? (r ? 0 : void 0),
        ref: this.OnInputRef,
        className: this.props.strDropDownButtonClassName,
        arrowClassName: this.props.arrowClassName,
        role: "combobox",
        "aria-controls": this.m_iMenuInstance
          ? `dropdownmenu_${this.m_iMenuInstance.key}`
          : void 0,
        "aria-expanded": this.state.bOpened,
        "aria-labelledby": this.props["aria-labelledby"],
        "aria-describedby": this.props["aria-describedby"],
        children: e,
      });
    }
  };
g([_], M2.prototype, "OnInputRef", 1),
  g([_], M2.prototype, "ToggleMenu", 1),
  g([_], M2.prototype, "OnValueSelected", 1),
  g([_], M2.prototype, "ShowMenu", 1),
  g([_], M2.prototype, "HideMenu", 1),
  g([_], M2.prototype, "OnKeyDown", 1);
var j0 = V1.createContext(null);
function Ei(t) {
  let e = K1("DropDownMenu", Ai);
  return (0, u1.jsx)(j0.Provider, {
    value: {},
    children: (0, u1.jsx)(e, { ...t }),
  });
}
function q0(t, e, r, o) {
  let n;
  if (t.key === "ArrowDown")
    n = (e.findIndex((s) => s.data === r) + 1) % e.length;
  else if (t.key === "ArrowUp") {
    let i = e.findIndex((s) => s.data === r);
    n = i <= 0 ? e.length - 1 : i - 1;
  }
  n !== void 0 && (o(e[n]), t.preventDefault());
}
function Ai(t) {
  let {
      rgOptions: e,
      strDropDownItemClassName: r,
      onValueSelected: o,
      selectedValue: n,
    } = t,
    [i, s] = V1.useState(n),
    a = V1.useMemo(() => e.filter(E2), [e]),
    l = V1.useCallback(
      (u) => {
        q0(u, a, i, (c) => s(c.data));
      },
      [i, a],
    );
  return (0, u1.jsx)("div", {
    className: v(
      k3.DialogDropDownMenu,
      "_DialogInputContainer",
      t.strDropDownMenuCtnClass,
    ),
    onKeyDown: l,
    children: (0, u1.jsx)(Y0, {
      rgOptions: e,
      strDropDownItemClassName: r,
      onValueSelected: o,
      activeValue: i,
      setActiveValue: s,
    }),
  });
}
function Y0(t) {
  let { rgOptions: e, ...r } = t;
  return e.map((o, n) =>
    fe(o)
      ? (0, u1.jsx)(
          "hr",
          {
            className: v(
              k3.DialogDropDownMenu_Item,
              k3.DialogDropDownMenu_Separator,
            ),
          },
          n,
        )
      : k2(o)
        ? (0, u1.jsx)(Y0, { ...r, rgOptions: o.options }, n)
        : (0, u1.jsx)(Di, { ...r, option: o }, n),
  );
}
function Di(t) {
  let {
      option: e,
      strDropDownItemClassName: r,
      onValueSelected: o,
      activeValue: n,
      setActiveValue: i,
    } = t,
    s = V1.useCallback((u) => u && u.focus(), []),
    a = V1.useCallback(() => {
      i(e.data);
    }, [i, e]),
    l = e.data === n;
  return (0, u1.jsx)("button", {
    type: "button",
    className: v(
      k3.DialogDropDownMenu_Item,
      r,
      e.strOptionClass,
      l && "ContextMenuAutoFocus",
    ),
    onClick: (u) => o(u, e),
    ref: l ? s : void 0,
    onMouseEnter: a,
    role: "option",
    "aria-selected": l,
    children: e.tooltip
      ? (0, u1.jsx)(ut, {
          toolTipContent: e.tooltip,
          bTopmost: !0,
          className: "TooltipContainer",
          children: e.label,
        })
      : (0, u1.jsx)("div", { children: e.label }),
  });
}
var R6 = class extends V1.Component {
  state = { rgOptions: void 0 };
  async OnMenuOpened() {
    if (!this.state.rgOptions) {
      let e = await this.props.fnLoadOptions();
      this.setState({ rgOptions: e });
    }
  }
  render() {
    let {
        fnLoadOptions: e,
        strInitialDisplay: r,
        initialValue: o,
        ...n
      } = this.props,
      { rgOptions: i } = this.state;
    return (
      i === void 0 &&
        (r || o
          ? ((i = [{ label: r, data: o }]), (n.selectedOption = o))
          : (i = [])),
      (0, u1.jsx)(Vi, { ...n, rgOptions: i, onMenuOpened: this.OnMenuOpened })
    );
  }
};
g([_], R6.prototype, "OnMenuOpened", 1);
var Ii = p(R());
var X0 = p(L());
var U1 = p(R());
var J0 = p($r());
var S6 = class {
  activeObject;
  instance;
  constructor(e) {
    this.instance = new H6(e, !1);
  }
};
var H6 = class {
    m_parent;
    m_window;
    m_container = null;
    iIntervalShow;
    m_bRemoveOnHide;
    m_reactRoot;
    constructor(e, r = !0) {
      (this.m_parent = e),
        (this.m_window = e.ownerDocument.defaultView),
        (this.m_bRemoveOnHide = r);
    }
    Show(e, r) {
      return (
        this.CancelShowInterval(),
        r
          ? new Promise((o, n) => {
              this.iIntervalShow = this.m_window.setTimeout(() => {
                let i = this.m_parent.ownerDocument;
                i.defaultView &&
                  !i.defaultView.closed &&
                  (this.InternalShow(e), o());
              }, r);
            })
          : (this.InternalShow(e), Promise.resolve())
      );
    }
    InternalShow(e) {
      this.m_container ||
        ((this.m_container = this.m_parent.ownerDocument.createElement("div")),
        this.m_parent.appendChild(this.m_container)),
        this.m_reactRoot ||
          (this.m_reactRoot = J0.createRoot(this.m_container)),
        this.m_reactRoot.render(e);
    }
    Hide(e) {
      this.CancelShowInterval(),
        e
          ? (this.iIntervalShow = this.m_window.setTimeout(() => {
              this.InternalHide();
            }, e))
          : this.InternalHide();
    }
    InternalHide() {
      this.m_reactRoot &&
        (this.m_reactRoot.unmount(), (this.m_reactRoot = void 0)),
        this.m_container &&
          this.m_bRemoveOnHide &&
          (this.m_parent.removeChild(this.m_container),
          (this.m_container = null));
    }
    CancelShowInterval() {
      this.iIntervalShow !== void 0 &&
        (this.m_window.clearInterval(this.iIntervalShow),
        (this.iIntervalShow = void 0));
    }
    BIsChildElement(e) {
      return this.m_container && a2(this.m_container, e);
    }
  },
  Ht = class {
    m_strUniqueID;
    m_mapEmbeddedHovers = new WeakMap();
    constructor(e) {
      this.m_strUniqueID = e;
    }
    ShowElementDelayed(e, r, o, n) {
      let i = this.GetEmbeddedElement(e);
      return (i.activeObject = n), i.instance.Show(o, r);
    }
    ShowElement(e, r, o) {
      let n = this.GetEmbeddedElement(e);
      (n.activeObject = o), n.instance.Show(r);
    }
    HideElement(e, r, o) {
      let n = this.GetEmbeddedElement(e);
      n.activeObject == r && ((n.activeObject = void 0), n.instance.Hide(o));
    }
    GetEmbeddedElement(e) {
      let r = this.m_mapEmbeddedHovers.get(e);
      return r || ((r = new S6(e.body)), this.m_mapEmbeddedHovers.set(e, r)), r;
    }
  };
var Z1 = p(L()),
  w3 = new H8("DragDrop").Debug;
var x6 = class extends U1.Component {
  m_coordinator = new xt();
  OnDrop(e, r) {
    r > e && r--, r != e && this.props.onReorder(e, r);
  }
  render() {
    let e = [];
    return (
      e.push(
        (0, Z1.jsx)(
          Tt,
          {
            coordinator: this.m_coordinator,
            fnBAcceptDraggable: (o) => o.props.data != 0,
            fnOnDrop: (o) => this.OnDrop(o.props.data, 0),
          },
          "dropregion_top",
        ),
      ),
      U1.Children.forEach(this.props.children, (o, n) => {
        let i = o.props.id || "__list_" + n,
          s = n + 1;
        e.push(
          (0, Z1.jsx)(
            t2,
            { coordinator: this.m_coordinator, data: n, children: o },
            i,
          ),
        ),
          e.push(
            (0, Z1.jsx)(
              Tt,
              {
                coordinator: this.m_coordinator,
                fnBAcceptDraggable: (a) => a.props.data != s,
                fnOnDrop: (a) => this.OnDrop(a.props.data, s),
              },
              "dropregion_" + i,
            ),
          );
      }),
      (0, Z1.jsx)("div", { className: "DialogReorderableList", children: e })
    );
  }
};
g([_], x6.prototype, "OnDrop", 1);
function Gi(t) {
  if ("touches" in t) {
    let e = t;
    return [e.touches[0].clientX, e.touches[0].clientY];
  } else return [t.clientX, t.clientY];
}
function V6(t, e, r, o) {
  return o
    ? r && t > r.left && t < r.right && e > r.top && e < r.bottom
    : r && t >= r.left && t <= r.right && e >= r.top && e <= r.bottom;
}
var xt = class {
  m_embeddedElement = new Ht("DragGhosts");
  m_rgDropRegions = [];
  m_activeDraggable;
  m_rgActiveDropRegions = [];
  m_activeDropRegion;
  m_dropGhost;
  m_dragGhost;
  m_dragOffWindowTimer;
  RegisterDropRegion(e) {
    this.m_rgDropRegions.push(e),
      this.m_activeDraggable &&
        e.BAcceptDraggable(this.m_activeDraggable) &&
        (e.OnDragStarted(this.m_activeDraggable),
        this.m_rgActiveDropRegions.push(e));
  }
  UnregisterDropRegion(e) {
    oe(this.m_rgDropRegions, e),
      oe(this.m_rgActiveDropRegions, e),
      this.m_activeDropRegion == e &&
        ((this.m_activeDropRegion = void 0),
        this.m_activeDraggable && this.ShowDragGhost());
  }
  OnDragGhostRef(e) {
    this.m_dragGhost = e;
  }
  ShowDragGhost() {
    let e = this.m_activeDraggable.renderDragGhost(),
      r = v(
        e.props.className,
        !!this.m_activeDropRegion && "DraggedOverActiveDrop",
      ),
      o = U1.cloneElement(e, { ref: this.OnDragGhostRef, className: r });
    this.m_embeddedElement.ShowElement(
      this.m_activeDraggable.GetDragDocument(),
      o,
      this.m_activeDraggable,
    );
  }
  HideDragGhost() {
    this.m_embeddedElement.HideElement(
      this.m_activeDraggable.GetDragDocument(),
      this.m_activeDraggable,
    );
  }
  m_elCloneContainer;
  m_elCloneOriginal;
  m_nodeCloneCopy;
  MakeDragClone(e) {
    Y(
      !this.m_nodeCloneCopy && !this.m_elCloneOriginal,
      "Drag already in progress",
    ),
      (this.m_elCloneOriginal = e.m_divRef.current),
      (this.m_nodeCloneCopy = this.m_elCloneOriginal.cloneNode(!0)),
      e.m_divRef.current.replaceWith(this.m_nodeCloneCopy),
      this.m_elCloneContainer ||
        ((this.m_elCloneContainer = e
          .GetDragDocument()
          .body.ownerDocument.createElement("div")),
        e.GetDragDocument().body.appendChild(this.m_elCloneContainer)),
      this.m_elCloneContainer.appendChild(this.m_elCloneOriginal);
  }
  ReverseDragClone() {
    this.m_nodeCloneCopy.parentNode?.replaceChild(
      this.m_elCloneOriginal,
      this.m_nodeCloneCopy,
    ),
      (this.m_nodeCloneCopy = void 0),
      (this.m_elCloneOriginal = void 0);
  }
  OnDragStart(e) {
    (this.m_activeDraggable = e), (this.m_rgActiveDropRegions = []);
    for (let r of this.m_rgDropRegions)
      r.BAcceptDraggable(e) &&
        (r.OnDragStarted(e), this.m_rgActiveDropRegions.push(r));
    this.MakeDragClone(e), this.ShowDragGhost();
  }
  EndDrag() {
    if (this.m_activeDraggable) {
      this.ReverseDragClone(),
        this.HideDragGhost(),
        this.m_activeDropRegion &&
          this.m_activeDropRegion.OnDrop(this.m_activeDraggable);
      for (let e of this.m_rgActiveDropRegions)
        e.OnDragEnded(this.m_activeDraggable);
      (this.m_activeDraggable = void 0),
        (this.m_dropGhost = void 0),
        (this.m_rgActiveDropRegions = []);
    }
  }
  FindBestActiveDropRegionForPoint(e, r) {
    let o = this.m_activeDraggable.GetDragDocument(),
      n;
    if (("elementsFromPoint" in o && (n = o.elementsFromPoint(e, r)), n)) {
      let i = new Map();
      this.m_rgActiveDropRegions.forEach((s) => i.set(s.GetElement(), s));
      for (let s of n) {
        let a = i.get(s);
        if (a) return a;
      }
    } else {
      if (
        this.m_activeDropRegion &&
        this.m_activeDropRegion.BDraggableInRegion(e, r, this.m_activeDraggable)
      )
        return this.m_activeDropRegion;
      for (let i = this.m_rgActiveDropRegions.length - 1; i >= 0; i--) {
        let s = this.m_rgActiveDropRegions[i];
        if (s.BDraggableInRegion(e, r, this.m_activeDraggable)) return s;
      }
    }
  }
  m_prevClientX = 0;
  m_prevClientY = 0;
  OnDrag(e, r, o) {
    let n = this.m_prevClientX || r,
      i = this.m_prevClientY || o;
    if (
      (e.props.bEnableHTMLDrag &&
        this.m_dragOffWindowTimer &&
        window.clearTimeout(this.m_dragOffWindowTimer),
      this.m_dragGhost)
    ) {
      let a = n === void 0 ? 0 : n - (this.m_dragGhost.state.clientX ?? 0),
        l = i === void 0 ? 0 : i - (this.m_dragGhost.state.clientY ?? 0);
      if (
        (this.m_dragGhost.setState({
          clientX: n,
          clientY: i,
          clientXDelta: a,
          clientYDelta: l,
          bVisible: !0,
        }),
        e.props.bEnableHTMLDrag && (a || l))
      ) {
        let u = n + a,
          c = i + l,
          m = e.GetDragDocument().body.getBoundingClientRect();
        if (V6(n, i, m) && !V6(u, c, m, !0)) {
          let f = G3(u, m.left, m.right, m.left - 200, m.right + 200),
            k = G3(c, m.top, m.bottom, m.top - 100, m.bottom + 100),
            M = 50;
          this.m_dragOffWindowTimer = window.setTimeout(() => {
            e == this.m_activeDraggable && this.OnDrag(e, f, k);
          }, M);
        }
      }
    }
    let s = this.FindBestActiveDropRegionForPoint(n, i);
    (this.m_prevClientX = r),
      (this.m_prevClientY = o),
      !!this.m_activeDropRegion != !!s &&
        (this.ShowDragGhost(),
        this.m_dropGhost ||
          (this.m_dropGhost = this.m_activeDraggable.renderDropGhost())),
      this.m_activeDropRegion &&
        this.m_activeDropRegion != s &&
        this.m_activeDropRegion.OnDragLeave(this.m_activeDraggable),
      s &&
        this.m_activeDropRegion != s &&
        s.OnDragEnter(this.m_activeDraggable, this.m_dropGhost),
      (this.m_activeDropRegion = s),
      this.m_activeDropRegion &&
        this.m_activeDropRegion.OnDragMove(n, i, this.m_activeDraggable);
  }
};
g([_], xt.prototype, "OnDragGhostRef", 1);
var Q0 = 5,
  t2 = class extends U1.Component {
    constructor(e) {
      super(e), l1(this);
    }
    m_DragInfo = {
      bStarted: !1,
      startClientX: void 0,
      startClientY: void 0,
      startOffsetX: void 0,
      startOffsetY: void 0,
      startWidth: void 0,
      startHeight: void 0,
      ownerWin: void 0,
    };
    m_divRef = U1.createRef();
    GetDragDocument() {
      return this.m_DragInfo.ownerWin?.document;
    }
    RecordDragStart(e, r, o) {
      (this.m_DragInfo.startClientX = r), (this.m_DragInfo.startClientY = o);
      let n = e.getBoundingClientRect();
      (this.m_DragInfo.startOffsetX = r - n.left),
        (this.m_DragInfo.startOffsetY = o - n.top),
        (this.m_DragInfo.startWidth = n.width),
        (this.m_DragInfo.startHeight = n.height),
        (this.m_DragInfo.ownerWin = e.ownerDocument.defaultView);
    }
    ProcessDragMove(e) {
      w3("ProcessDragMove", e, this.props.data);
      let [r, o] = Gi(e);
      if (!this.m_DragInfo.bStarted)
        Math.pow(r - (this.m_DragInfo.startClientX ?? 0), 2) +
          Math.pow(o - (this.m_DragInfo.startClientY ?? 0), 2) >=
          Q0 * Q0 &&
          ((this.m_DragInfo.bStarted = !0),
          this.forceUpdate(),
          this.props.fnOnDragStart && this.props.fnOnDragStart(),
          this.props.coordinator.OnDragStart(this),
          this.props.coordinator.OnDrag(this, r, o));
      else {
        if (this.props.bEnableHTMLDrag && r == 0 && o == 0) return;
        this.props.coordinator.OnDrag(this, r, o);
      }
    }
    OnMouseDown(e) {
      !this.m_DragInfo.bStarted &&
        e.button == 0 &&
        (this.RecordDragStart(e.currentTarget, e.clientX, e.clientY),
        this.m_DragInfo.ownerWin?.addEventListener(
          "mousemove",
          this.ProcessDragMove,
        ),
        this.m_DragInfo.ownerWin?.addEventListener("mouseup", this.OnMouseUp));
    }
    OnMouseUp(e) {
      this.m_DragInfo.ownerWin?.removeEventListener(
        "mousemove",
        this.ProcessDragMove,
      ),
        this.m_DragInfo.ownerWin?.removeEventListener(
          "mouseup",
          this.OnMouseUp,
        ),
        this.ResetDragState();
    }
    OnTouchStart(e) {
      this.m_DragInfo.bStarted ||
        (this.RecordDragStart(
          e.currentTarget,
          e.touches[0].clientX,
          e.touches[0].clientY,
        ),
        this.m_DragInfo.ownerWin?.addEventListener(
          "touchmove",
          this.ProcessDragMove,
        ),
        this.m_DragInfo.ownerWin?.addEventListener(
          "touchend",
          this.OnTouchEnd,
        ));
    }
    OnTouchEnd(e) {
      this.m_DragInfo.ownerWin?.removeEventListener(
        "touchmove",
        this.ProcessDragMove,
      ),
        this.m_DragInfo.ownerWin?.removeEventListener(
          "touchend",
          this.OnTouchEnd,
        ),
        this.ResetDragState();
    }
    ResetDragState() {
      w3("ResetDragState", this.props.data),
        this.m_DragInfo.bStarted &&
          (this.props.coordinator.EndDrag(),
          this.props.fnOnDragEnd && this.props.fnOnDragEnd()),
        (this.m_DragInfo.bStarted = !1),
        (this.m_DragInfo.startClientX = void 0),
        (this.m_DragInfo.startClientY = void 0),
        (this.m_DragInfo.startOffsetX = void 0),
        (this.m_DragInfo.startOffsetY = void 0),
        (this.m_DragInfo.ownerWin = void 0),
        this.forceUpdate();
    }
    OnHTMLDragStart(e) {
      w3("HTMLDragStart", e, this.props.data, this.props.strHTMLDragData),
        (e.dataTransfer.effectAllowed = "copyMove"),
        this.props.strHTMLDragData &&
          this.props.strHTMLDragData.forEach((o, n) =>
            e.dataTransfer.setData(n, o),
          ),
        e.dataTransfer.getData("text/plain") ||
          e.dataTransfer.setData("text/plain", this.props.data.toString());
      let r = new Image();
      e.dataTransfer.setDragImage(r, 0, 0),
        this.RecordDragStart(e.currentTarget, e.clientX, e.clientY),
        this.m_DragInfo.ownerWin?.addEventListener("drag", this.OnHTMLDrag),
        this.m_DragInfo.ownerWin?.addEventListener(
          "dragend",
          this.OnHTMLDragEnd,
        );
    }
    OnHTMLDrag(e) {
      w3("HTMLDrag", e, e.dataTransfer?.types.length), this.ProcessDragMove(e);
    }
    OnHTMLDragEnd(e) {
      w3(
        "HTMLDragEnd",
        e,
        e.dataTransfer?.getData("text/plain") || "NOTHING",
        this.props.data,
      ),
        this.m_DragInfo.ownerWin?.removeEventListener("drag", this.OnHTMLDrag),
        this.m_DragInfo.ownerWin?.removeEventListener(
          "dragend",
          this.OnHTMLDragEnd,
        ),
        this.ResetDragState();
    }
    render() {
      let {
          coordinator: e,
          data: r,
          bEnableHTMLDrag: o,
          strHTMLDragData: n,
          fnOnDragStart: i,
          fnOnDragEnd: s,
          fnRenderDragGhost: a,
          fnRenderDropGhost: l,
          className: u,
          strActiveClassName: c,
          children: m,
          ...f
        } = this.props,
        k = {},
        M = u || "DialogDraggable";
      return (
        this.m_DragInfo.bStarted
          ? ((M = v(M, c || "DraggedOut")),
            o && (k = { onDragEnd: this.OnHTMLDragEnd }))
          : o
            ? (k = { onDragStart: this.OnHTMLDragStart })
            : (k = {
                onMouseDown: this.OnMouseDown,
                onTouchStart: this.OnTouchStart,
              }),
        (0, Z1.jsx)("div", {
          ref: this.m_divRef,
          className: M,
          ...k,
          ...f,
          draggable: o,
          children: m,
        })
      );
    }
    renderDropGhost() {
      return this.props.fnRenderDropGhost
        ? this.props.fnRenderDropGhost()
        : (0, Z1.jsx)(Vt, { elContent: this.GetClone() });
    }
    renderDragGhost() {
      return this.props.fnRenderDragGhost
        ? this.props.fnRenderDragGhost()
        : (0, Z1.jsx)(Bt, {
            elContent: this.GetClone(),
            offsetX: this.m_DragInfo.startOffsetX,
            offsetY: this.m_DragInfo.startOffsetY,
            width: this.m_DragInfo.startWidth,
            height: this.m_DragInfo.startHeight,
          });
    }
    GetClone() {
      let e = this.m_divRef.current,
        r;
      if (e && e.childElementCount)
        if (e.childElementCount == 1) r = e.firstElementChild.cloneNode(!0);
        else {
          r = document.createElement("div");
          for (let o = e.firstChild; o; o = o.nextSibling)
            r.appendChild(o.cloneNode(!0));
        }
      return r;
    }
  };
g([_], t2.prototype, "ProcessDragMove", 1),
  g([_], t2.prototype, "OnMouseDown", 1),
  g([_], t2.prototype, "OnMouseUp", 1),
  g([_], t2.prototype, "OnTouchStart", 1),
  g([_], t2.prototype, "OnTouchEnd", 1),
  g([Z8], t2.prototype, "ResetDragState", 1),
  g([_], t2.prototype, "OnHTMLDragStart", 1),
  g([_], t2.prototype, "OnHTMLDrag", 1),
  g([_], t2.prototype, "OnHTMLDragEnd", 1);
var Vt = class extends U1.Component {
  OnRef(e) {
    e && this.props.elContent && e.appendChild(this.props.elContent);
  }
  render() {
    return (0, Z1.jsx)("div", {
      className: "DialogDraggable_DropGhost",
      ref: this.OnRef,
    });
  }
};
g([_], Vt.prototype, "OnRef", 1);
var Bt = class extends U1.Component {
  state = {
    clientX: void 0,
    clientY: void 0,
    bVisible: !0,
    clientXDelta: void 0,
    clientYDelta: void 0,
  };
  OnRef(e) {
    e && this.props.elContent && e.appendChild(this.props.elContent);
  }
  CalculateRotationDegrees(e) {
    return !e || Math.abs(e) < 4
      ? 0
      : (e > 0 ? 7.5 : -7.5) * Math.sqrt(Math.abs(e));
  }
  render() {
    if (
      !this.state.bVisible ||
      this.state.clientX === void 0 ||
      this.state.clientY === void 0
    )
      return (0, Z1.jsx)("div", {});
    let e = {
        left: this.state.clientX - (this.props.offsetX || 0),
        top: this.state.clientY - (this.props.offsetY || 0),
        width: this.props.width || "auto",
        height: this.props.height || "auto",
        perspective: "600px",
      },
      r = G3(
        this.CalculateRotationDegrees(this.state.clientYDelta),
        -90,
        90,
        2,
        0,
      ),
      o = {
        transform: `rotateX(${this.CalculateRotationDegrees(-1 * (this.state.clientYDelta ?? 0))}deg) rotateY( ${this.CalculateRotationDegrees(this.state.clientXDelta)}deg)`,
        transition: "transform .16s ease-out, filter .16s ease-out",
        filter: "brightness(" + r + ")",
      },
      n = this.props.className || "DialogDraggable_DragGhost";
    return (0, Z1.jsx)("div", {
      className: n,
      style: e,
      children: (0, Z1.jsx)("div", { ref: this.OnRef, style: o }),
    });
  }
};
g([_], Bt.prototype, "OnRef", 1);
var B6 = class extends U1.Component {
    m_divRef = U1.createRef();
    constructor(e) {
      super(e), (this.state = {});
    }
    componentDidMount() {
      this.props.coordinator.RegisterDropRegion(this);
    }
    componentWillUnmount() {
      this.props.coordinator.UnregisterDropRegion(this);
    }
    OnDragStarted(e) {
      this.setState({ bDraggableActive: !0 });
    }
    OnDragEnded(e) {
      this.setState({ bDraggableActive: !1 });
    }
    OnDragEnter(e, r) {
      this.setState({ dropGhost: r }),
        this.props.fnOnDragEnter && this.props.fnOnDragEnter(e);
    }
    OnDragLeave(e) {
      this.setState({ dropGhost: void 0 }),
        this.props.fnOnDragLeave && this.props.fnOnDragLeave(e);
    }
    OnDragMove(e, r, o) {}
    OnDrop(e) {
      this.setState({ dropGhost: void 0 }), this.props.fnOnDrop(e);
    }
    BAcceptDraggable(e) {
      return !this.props.fnBAcceptDraggable || this.props.fnBAcceptDraggable(e);
    }
    BDraggableInRegion(e, r, o) {
      return V6(e, r, this.GetClientRect());
    }
    GetElement() {
      return this.m_divRef.current;
    }
    GetClientRect() {
      return (
        this.m_divRef.current && this.m_divRef.current.getBoundingClientRect()
      );
    }
    render() {
      let {
          coordinator: e,
          fnBAcceptDraggable: r,
          fnOnDrop: o,
          fnOnDragEnter: n,
          fnOnDragLeave: i,
          className: s,
          strActiveClassName: a,
          children: l,
          focusable: u,
          containerRef: c,
          ...m
        } = this.props,
        f = v(
          s || "DialogDropRegion",
          this.state.bDraggableActive && (a || "Active"),
        );
      return (0, Z1.jsxs)(S2, {
        ref: O3(c, this.m_divRef),
        className: f,
        ...m,
        focusable: u === void 0 ? !!m.onClick : u,
        children: [this.state.dropGhost, l],
      });
    }
  },
  Tt = class extends B6 {
    BDraggableInRegion(e, r, o) {
      let n = this.GetClientRect();
      return n
        ? e >= n.left && e <= n.right && r >= n.top - 20 && r <= n.bottom + 20
        : !1;
    }
  };
var U = p(R());
var w2 = {
  narrowWidth: "500px",
  "duration-app-launch": "800ms",
  PagedSettingsDialog: "fb--znpA9iY-",
  PagedSettingDialog_ContentColumn: "j1MmI35qVcc-",
  PagedSettingsDialog_PageListColumn: "ByZLSOXEJi8-",
  ResponsivePageList: "se2JFXkqcLA-",
  ResponsiveActivePage: "_5XW9bozMUTA-",
  PagedSettingsDialog_PageContent: "Qe9z1N90-mU-",
  NoPadding: "_25gxUTuvrIE-",
  Hidden: "PeXPE70M0-U-",
  NewNoteButton: "qrmLtG95jB0-",
  PagedSettingsDialog_Title: "vcucl2oj9Fk-",
  PagedSettingsDialog_PageList: "Tw4UqPnHT-Y-",
  PagedSettingsDialog_PageList_DisableScrolling: "_6ojc--MD434-",
  PagedSettingsDialog_PageListItem: "r3lLnZCioSI-",
  PageListItem_Icon: "fyzIFdjZ-zo-",
  PageListItem_Title: "YHbhPD53VXA-",
  DisabledItem: "_79-MLEJ4qwk-",
  Active: "kFlFNnkL7qo-",
  PageListSpacer: "msIgvzU-CxQ-",
  PageListSeparator: "Y5n0jzYJBSg-",
  Transparent: "K-hjH6eEVZs-",
  HidePageListButton: "Q4sUKE2nwwg-",
  ReturnToPageListButton: "Vr19V2RKWC8-",
};
var K = p(L()),
  Fi = "separator",
  Wi = "spacer",
  b3 = class {
    constructor() {
      l1(this);
    }
    m_flPageListScrollTop = 0;
    m_flPageScrollTop = 0;
  };
g([O], b3.prototype, "m_flPageListScrollTop", 2),
  g([O], b3.prototype, "m_flPageScrollTop", 2);
var _e = class _e {
  static s_Instance;
  static Get() {
    return _e.s_Instance || (_e.s_Instance = new _e()), _e.s_Instance;
  }
  constructor() {
    l1(this);
  }
  m_setPagedSettingsInstances = new Set();
};
g([O], _e.prototype, "m_setPagedSettingsInstances", 2);
var Et = _e;
function Oi(t) {
  let {
      stylesheet: e,
      pages: r,
      iActivePage: o,
      onPageSelected: n,
      PageListItemComponent: i = Ni,
      PageListSeparatorComponent: s = Ui,
    } = t,
    a = U.useContext(At);
  return r.map((l, u) => {
    let c = u === o;
    if (l === Fi) {
      let m = u === o + 1 || u === o - 1;
      return (0, K.jsx)(s, { role: "separator", bTransparent: m }, u);
    } else {
      if (l === Wi)
        return (0, K.jsx)("div", { className: w2.PageListSpacer }, u);
      {
        if (l.visible === !1) return null;
        let m = l.identifier || l.title || u.toString(),
          f = () => n(u, l);
        return (0, K.jsx)(
          i,
          {
            className: v(e.PagedSettingsDialog_PageListItem, { [e.Active]: c }),
            onClick: f,
            title: l.title,
            icon: l.icon,
            active: c,
            id: a + l.identifier,
            role: "tab",
            "aria-selected": c,
            "aria-controls": a + l.identifier + "_Content",
          },
          m,
        );
      }
    }
  });
}
function Ni(t) {
  let { title: e, icon: r, active: o, className: n, onClick: i, ...s } = t;
  return (0, K.jsxs)("div", {
    className: n,
    onClick: i,
    ...s,
    children: [
      r
        ? (0, K.jsx)("div", { className: w2.PageListItem_Icon, children: r })
        : null,
      (0, K.jsx)("div", {
        className: w2.PageListItem_Title,
        ...s,
        children: e,
      }),
    ],
  });
}
var $0 = U.forwardRef(function (e, r) {
  let { activePage: o, style: n, stylesheet: i } = e,
    s = U.useContext(At),
    a = o?.padding ?? "standard";
  return (0, K.jsxs)(yt, {
    style: n,
    className: v(
      i?.PagedSettingsDialog_PageContent,
      o?.pageClassName,
      a == "none" && i?.NoPadding,
    ),
    refElem: r,
    role: "tabpanel",
    "aria-labelledby": s + o?.identifier,
    id: s + o?.identifier + "_Content",
    children: [
      o?.header,
      !o?.hideTitle && (0, K.jsx)(Rt, { children: o?.title }),
      (0, K.jsx)(G1, { children: o?.content }),
    ],
  });
});
function Ui(t) {
  let { bTransparent: e, className: r, ...o } = t;
  return (0, K.jsx)("div", {
    className: v(r, w2.PageListSeparator, { [w2.Transparent]: e }),
    ...o,
  });
}
var At = U.createContext(void 0),
  er = U.forwardRef(function (e, r) {
    let { stylesheet: o = w2, pages: n, onPageRequested: i } = e,
      s = U.useId(),
      a = e.page == null,
      [l, u] = U.useState(() =>
        e.startingPage === void 0
          ? -1
          : n.findIndex(
              (Q) => typeof Q == "object" && Q.identifier === e.startingPage,
            ),
      ),
      c = l;
    a ||
      (c = n.findIndex((Q) => typeof Q == "object" && Q.identifier === e.page)),
      (c < 0 || c >= n.length) && (c = 0);
    let m = null;
    typeof n[c] == "object" && (m = n[c]);
    let f = U.useRef(null),
      k = U.useCallback(() => f.current?.TakeFocus() || !1, [f]),
      [M, b] = U.useState(!1),
      w = M ? k : void 0,
      A = U.useCallback((Q) => {
        Q && b(!0);
      }, []),
      Z = U.useCallback(
        (Q, P) => {
          b(!0),
            s2.PlayNavSound(15),
            i && i(P.identifier),
            P.click ? P.click() : a && u(Q);
        },
        [a, i],
      ),
      I = U.useRef(null),
      i1 = (Q) => {
        Q.detail.button == 1 && I.current?.TakeFocus(Q.detail.button);
      },
      J = e.showTitle ?? !0,
      s1 = v("DialogContentTransition", o.PagedSettingDialog_ContentColumn);
    U.useEffect(() => {
      e.bAutoFocusPageContent && I.current?.TakeFocus();
    }, []);
    let { refForPageList: m1, refForPage: a1 } = qi();
    return (0, K.jsx)(At.Provider, {
      value: s,
      children: (0, K.jsxs)(e1, {
        className: v(o.PagedSettingsDialog, e.className),
        ref: r,
        children: [
          (0, K.jsxs)(e1, {
            className: v(
              o.PagedSettingsDialog_PageListColumn,
              e.hideList && w2.Hidden,
              "PageListColumn",
            ),
            navRef: f,
            onButtonDown: i1,
            onFocusWithin: A,
            children: [
              J &&
                (0, K.jsx)("div", {
                  className: o.PagedSettingsDialog_Title,
                  children: e.title,
                }),
              e.topControls && (0, K.jsx)("div", { children: e.topControls }),
              (0, K.jsx)(e1, {
                className: v(
                  o.PagedSettingsDialog_PageList,
                  e.disablePageListScrolling &&
                    o.PagedSettingsDialog_PageList_DisableScrolling,
                  J && o.PagedSettingsDialog_PageList_ShowTitle,
                  e.bNoHeaderPadding &&
                    o.PageSettingsDialog_PageList_NoHeaderPadding,
                ),
                role: "tablist",
                "aria-orientation": "vertical",
                navEntryPreferPosition: 4,
                ref: m1,
                children: (0, K.jsx)(Oi, {
                  stylesheet: o,
                  pages: n,
                  iActivePage: c,
                  onPageSelected: Z,
                  PageListItemComponent: e.PageListItemComponent,
                  PageListSeparatorComponent: e.PageListSeparatorComponent,
                }),
              }),
              e.bottomControls &&
                (0, K.jsx)("div", { children: e.bottomControls }),
            ],
          }),
          (0, K.jsxs)(e1, {
            className: s1,
            onCancelButton: w,
            navRef: I,
            children: [
              e.toggleHideList &&
                (0, K.jsx)(ji, {
                  hideList: e.hideList,
                  toggleHideList: e.toggleHideList,
                }),
              e.renderPageContent
                ? e.renderPageContent(m, a1, $0)
                : (0, K.jsx)($0, { ref: a1, activePage: m, stylesheet: o }),
            ],
          }),
        ],
      }),
    });
  });
var zi = U.createContext(!1);
var ph = U.memo(function (e) {
  let {
      isActive: r,
      refForPage: o,
      page: n,
      PageComponent: i,
      stylesheet: s,
    } = e,
    a = U.useContext(At),
    l = U.useRef(!1);
  if (!r && !l.current) return null;
  l.current = !0;
  let u = r ? void 0 : { display: "none" };
  return (0, K.jsx)(zi.Provider, {
    value: r,
    children: (0, K.jsx)(i, {
      ref: o,
      style: u,
      activePage: n,
      stylesheet: s,
      role: "tabpanel",
      "aria-labelledby": a + n.identifier,
      id: a + n.identifier + "_Content",
    }),
  });
});
function ji(t) {
  let { hideList: e, toggleHideList: r } = t;
  return (0, K.jsx)("div", {
    className: v(w2.HidePageListButton, e && w2.ListHidden),
    onClick: r,
    children: e
      ? (0, K.jsx)(k4, { direction: "right" })
      : (0, K.jsx)(k4, { direction: "left" }),
  });
}
function qi() {
  let t = U.useMemo(() => new b3(), []);
  U.useEffect(
    () => (
      Et.Get().m_setPagedSettingsInstances.add(t),
      () => {
        Et.Get().m_setPagedSettingsInstances.delete(t);
      }
    ),
    [t],
  );
  let e = U.useCallback(
      (u) => (t.m_flPageListScrollTop = u.currentTarget.scrollTop),
      [t],
    ),
    r = U.useCallback(
      (u) => (t.m_flPageScrollTop = u.currentTarget.scrollTop),
      [t],
    ),
    o = t4("scroll", e),
    n = t4("scroll", r),
    i = U.useCallback(
      (u) => (t.m_flPageListScrollTop = u?.scrollTop ?? 0),
      [t],
    ),
    s = U.useCallback((u) => (t.m_flPageScrollTop = u?.scrollTop ?? 0), [t]),
    a = i2(o, i),
    l = i2(n, s);
  return { refForPageList: a, refForPage: l };
}
var Dt = p(R());
var tr = p(L()),
  J2 = class extends Dt.Component {
    m_refTextArea = Dt.createRef();
    m_nTextAreaPadding;
    m_cEntryLength = Number.MAX_VALUE;
    get textarea() {
      return this.m_refTextArea.current;
    }
    get value() {
      return this.m_refTextArea.current?.value;
    }
    focus() {
      this.m_refTextArea.current?.focus();
    }
    InternalOnInput() {
      let e = this.m_refTextArea.current,
        r = this.GetMinHeight(),
        o = this.GetMaxHeight(),
        n,
        i = e.value.length;
      if (
        (this.m_nTextAreaPadding === void 0 && this.CalculatePadding(),
        i < this.m_cEntryLength &&
          ((n = window.scrollY), (e.style.height = r + "px")),
        e.scrollHeight > o)
      )
        (e.style.height = o + "px"), (e.style.overflow = "auto");
      else if (e.scrollHeight != e.clientHeight) {
        let s = Math.max(e.scrollHeight, r);
        (e.style.height = s - this.m_nTextAreaPadding + "px"),
          e.style.overflow == "auto" && (e.style.overflow = "hidden");
      }
      n !== void 0 && window.scrollTo(window.scrollX, n),
        (this.m_cEntryLength = i);
    }
    CalculatePadding() {
      let e = getComputedStyle(this.m_refTextArea.current);
      this.m_nTextAreaPadding =
        e.boxSizing == "border-box"
          ? 0
          : parseFloat(e.paddingTop) + parseFloat(e.paddingBottom);
    }
    GetMinHeight() {
      return this.props.nMinHeight || 20;
    }
    GetMaxHeight() {
      return this.props.nMaxHeight || 500;
    }
    DeferredInternalOnInput() {
      window.setTimeout(this.InternalOnInput, 1);
    }
    OnKeyUp(e) {
      this.InternalOnInput(), this.props.onKeyUp && this.props.onKeyUp(e);
    }
    OnBlur(e) {
      this.DeferredInternalOnInput(), this.props.onBlur && this.props.onBlur(e);
    }
    OnClick(e) {
      this.InternalOnInput(), this.props.onClick && this.props.onClick(e);
    }
    OnPaste(e) {
      this.DeferredInternalOnInput(),
        this.props.onPaste && this.props.onPaste(e);
    }
    OnCut(e) {
      this.InternalOnInput(), this.props.onCut && this.props.onCut(e);
    }
    componentDidMount() {
      (this.m_refTextArea.current.style.overflow = "hidden"),
        (this.m_refTextArea.current.style.resize = "none"),
        this.InternalOnInput();
    }
    componentDidUpdate(e) {
      (e.nMinHeight != this.props.nMinHeight ||
        e.nMaxHeight != this.props.nMaxHeight) &&
        (this.m_cEntryLength = Number.MAX_VALUE),
        this.m_refTextArea.current?.value.length != this.m_cEntryLength &&
          this.InternalOnInput();
    }
    render() {
      let { nMinHeight: e, nMaxHeight: r, ...o } = this.props;
      return (0, tr.jsx)(A8, {
        ...o,
        ref: this.m_refTextArea,
        onKeyUp: this.OnKeyUp,
        onBlur: this.OnBlur,
        onClick: this.OnClick,
        onPaste: this.OnPaste,
        onCut: this.OnCut,
      });
    }
  };
g([_], J2.prototype, "InternalOnInput", 1),
  g([_], J2.prototype, "OnKeyUp", 1),
  g([_], J2.prototype, "OnBlur", 1),
  g([_], J2.prototype, "OnClick", 1),
  g([_], J2.prototype, "OnPaste", 1),
  g([_], J2.prototype, "OnCut", 1);
var I1 = p(R());
var D = {
  "duration-app-launch": "800ms",
  narrowWidth: "500px",
  GamepadDialogContent: "hphqAIPfg2M-",
  GamepadDialogContent_InnerWidth: "LnWFhQhlcNM-",
  Field: "u6UxwRzex6Y-",
  Button: "n2lNcrU1FOA-",
  NoMinWidth: "FWT-g2SKMM0-",
  ActiveAndUnfocused: "sLya3q2VeV4-",
  StandaloneFieldSeparator: "N0nsIkWClzg-",
  StandardPadding: "Z0am8Dm2jfA-",
  CompactPadding: "XguX0XZI9XA-",
  WithDescription: "hiDXWuue9Ng-",
  WithBottomSeparatorStandard: "AXmVytBQVxA-",
  WithBottomSeparatorThick: "kW0log3-ANI-",
  HighlightOnFocus: "hYZwQTmms04-",
  Clickable: "_046KFlpPhi4-",
  Disabled: "N7wH4pXSFNg-",
  WithBottomSeparator: "_0AzPckEBOD4-",
  "ItemFocusAnim-darkerGrey": "arvRRZ9-C9Y-",
  "ItemFocusAnim-darkGrey": "_9jyy72RowfQ-",
  FieldChildrenWithIcon: "saFoLyssBQo-",
  FieldChildrenInner: "y-N79TWWLB0-",
  FieldClickTarget: "NeJGNNDdkHM-",
  FieldIcon: "_6lnixjah-90-",
  Front: "zh7sbd-UiyU-",
  BeforeChildren: "I9bIyopp1uc-",
  FieldLabelRow: "L9bBFKETjDc-",
  VerticalAlignCenter: "R74QljenKiQ-",
  InlineWrapShiftsChildrenBelow: "GKP4TEGtYjE-",
  ExtraPaddingOnChildrenBelow: "DsyywImFP3g-",
  ChildrenWidthFixed: "aiMxPe7cnx8-",
  ChildrenWidthGrow: "XE9DTUy61Jk-",
  WithFirstRow: "ApU36qw6S8o-",
  WithChildrenBelow: "IbvehGFvqy0-",
  FieldLabel: "HzfVYZAQM1I-",
  FieldLabelValue: "HOM-11Jf2cw-",
  FieldDescription: "_5BLJdCp0mew-",
  ModalPosition: "eGUcXf9qmGo-",
  VR: "jLL34-DFetc-",
  WithStandardPadding: "_0pzkMgnBDek-",
  NoHeaderPadding: "thcCErzFlaA-",
  ModalClickToDismiss: "BO2jqunP5fQ-",
  slideInAnimation: "UM0fZCgqJds-",
  ScrollWithin: "A-yiOzX2zo8-",
  BasicTextInput: "IkgK3r9TyY4-",
  Toggle: "QaOnAvj7KDc-",
  ToggleRail: "gqoU6kzzga0-",
  On: "WszZCY9cJuU-",
  ToggleSwitch: "m-ViVI3jM2c-",
  LabelFieldValue: "xx9P2lluZR4-",
  DropDownControlButtonContents: "_4wpsx4CUbWY-",
  DropDownRow: "AtvTnUalXdo-",
  IconContainer: "-TYBSdzS9vM-",
  Label: "_2mNIgxcZZ6U-",
  ControlsListOuterPanel: "-D54syxDRFE-",
  StandardSpacing: "m-e4YJsJZjs-",
  ExtraSpacing: "Z6JwpLpx6PI-",
  ItemMaxSizeDesktop: "RzL4-TdmlAA-",
  AlignRight: "pmJ7XNli6U4-",
  AlignLeft: "gjnbAGxS0yc-",
  AlignCenter: "PDaSRT8ViFo-",
  FullWidth: "GSk7FKAGFT4-",
  ControlsListChild: "h4Ytu5NGGqM-",
  "QuickAccess-Menu": "dpQ3XFHsodk-",
  BottomButtons: "RdkTX3BYU54-",
  TextareaWrapper: "X25Qp11Ngnw-",
  Textarea: "dd4R06-lKvI-",
  BackgroundAnimation: "HN-1eGY9Nmo-",
  "ItemFocusAnim-darkerGrey-nocolor": "_4ZiGgSYhigE-",
  "ItemFocusAnim-grey": "_0vm28U-NXYE-",
  "ItemFocusAnim-translucent-white-10": "Omlo74OCNh4-",
  "ItemFocusAnim-translucent-white-20": "_4y-sz5WDrKM-",
  "ItemFocusAnimBorder-darkGrey": "yVxuhcF-Jqo-",
  "ItemFocusAnim-green": "DGu9xeM67Ec-",
  focusAnimation: "AUSFtgMHqZk-",
  hoverAnimation: "_---TIKL-l4M-",
};
var y3 = p(R());
var E6 = p(R());
var Zt = p(R());
var z1 = p(L()),
  Yi = Zt.createContext({}),
  Xi = () => Zt.useContext(Yi);
function Q2(t) {
  let r = Xi().ModalPosition ?? Ji;
  return (0, z1.jsx)(r, { ...t });
}
function Ji(t) {
  let e = {},
    r;
  t.onEscKeypress &&
    ((e.tabIndex = 0),
    (e.onKeyDown = (s) => {
      s.keyCode == 27 && t.onEscKeypress();
    }),
    (e.onMouseDown = (s) => {
      s.currentTarget === s.target &&
        !t.bDisableBackgroundDismiss &&
        t.onEscKeypress();
    }),
    (r = (s) => {
      s && (a2(s, s.ownerDocument.activeElement) || s.focus());
    }));
  let o = ["ModalPosition"];
  t.className && o.push(t.className),
    t.bDestructiveWarning && o.push("Destructive");
  let n = t.renderContent || ((s) => (0, z1.jsx)("div", { ...s })),
    i = (0, z1.jsxs)(z1.Fragment, {
      children: [
        !t.hideTopBar &&
          (0, z1.jsx)("div", { className: "ModalPosition_TopBar" }),
        t.onEscKeypress &&
          !t.bHideCloseIcon &&
          (0, z1.jsx)("div", {
            className: "ModalPosition_Dismiss",
            children: (0, z1.jsx)("div", {
              className: "closeButton",
              onClick: (s) => {
                s.stopPropagation(), t.onEscKeypress();
              },
              children: (0, z1.jsx)(G2, {}),
            }),
          }),
        (0, z1.jsx)(G1, { children: t.children }),
      ],
    });
  return (0, z1.jsx)("div", {
    className: o.join(" "),
    ...e,
    ref: r,
    children: n({ className: "ModalPosition_Content", children: i }),
  });
}
var T6 = p(L());
async function Qi(t, e, r) {
  let o = Oe(e),
    n = r?.bForcePopOut || or(o);
  Y(
    !(n && r?.bNeverPopOut),
    "Conflicting popout options; will ignore bNeverPopOut",
  );
  let i = !n && r?.bNeverPopOut === !0,
    s = or(o) || (!i && ir(o, e)),
    a = n && r?.popupWidth && r?.popupHeight,
    l;
  if (s && !a) {
    let c = E6.cloneElement(t, { closeModal: () => {} });
    l = await $i(o, c, r?.promiseRenderComplete);
  }
  let u = l && l.height / e.innerHeight < 0.9 && l.width / e.innerWidth < 0.8;
  if (i || (!n && u)) return rr(t, e, void 0, { fnOnClose: r?.fnOnClose });
  {
    let c = {
        strTitle: r?.strTitle || y("#Dialog_DefaultWindowTitle"),
        fnOnClose: r?.fnOnClose,
        popupWidth: r?.popupWidth || l?.width,
        popupHeight: r?.popupHeight || l?.height,
        bHideMainWindowForPopouts: r?.bHideMainWindowForPopouts,
        className: r?.className,
      },
      m = { bHideActions: r?.bHideActionIcons },
      f = r?.browserContext || e.browserInfo;
    return rr(t, e, c.strTitle, c, f, m, o);
  }
}
async function nr(t, e, r) {
  return Qi(t, e, { bHideMainWindowForPopouts: !0, ...r });
}
function rr(t, e, r, o, n, i, s) {
  let a,
    l,
    u = t.props.closeModal,
    c = () => {
      l && l.Close(), u && u(), o?.fnOnClose && o.fnOnClose();
    },
    m = () => {
      a && a.Close(), c();
    },
    f = E6.cloneElement(t, { closeModal: m });
  if (((s = s || Oe(e)), ir(s, e) && o && r)) {
    if (o.bHideMainWindowForPopouts) {
      let M = (0, T6.jsx)(Q2, {
        className: "Hidden",
        onEscKeypress: f.props.bDisableBackgroundDismiss ? void 0 : m,
        children: (0, T6.jsx)("div", {}),
      });
      l = s.ShowModal(M);
    }
    let k = { ...o, fnOnClose: c, browserContext: n };
    a = s.ShowLegacyPopupModal(r, f, k, i);
  } else a = s.ShowModal(f);
  return a;
}
function ir(t, e) {
  return (t = t || Oe(e || window)), N.USE_POPUPS && t.BUsePopups();
}
function or(t) {
  return t.BOnlyPopups && t.BOnlyPopups();
}
async function $i(t, e, r) {
  return new Promise((o, n) => {
    t.RequestModalMeasure(e, o, r);
  });
}
var A6 = p(R());
var D6 = p(L()),
  sr = F1((t) => {
    let { onCancel: e, closeModal: r, bOKDisabled: o, onOK: n } = t,
      i = I2();
    Y(
      r || e,
      `Either closeModal or onCancel should be passed to GenericDialog. Classes: ${t.className} ${t.modalClassName}`,
    );
    let s = A6.useCallback(() => {
        (e && e()) || (r && r());
      }, [e, r]),
      a = A6.useCallback(async () => {
        o || (n && (await n()), r && r());
      }, [o, n, r]);
    return (0, D6.jsx)(Q2, {
      onEscKeypress: s,
      className: t.modalClassName,
      bDestructiveWarning: t.bDestructiveWarning,
      bDisableBackgroundDismiss: t.bDisableBackgroundDismiss,
      bHideCloseIcon: t.bHideCloseIcon,
      children: (0, D6.jsx)(F0, {
        classNameContent: v(
          "GenericConfirmDialog",
          t.bAllowFullSize && "DialogContentFullSize",
          t.className,
        ),
        onSubmit: a,
        bCenterVertically: !i,
        children: t.children,
      }),
    });
  });
var R1 = p(L());
var Qe = class extends y3.Component {
  Cancel(e) {
    return () => {
      e && e(), this.props.closeModal && this.props.closeModal();
    };
  }
  render() {
    let {
        strTitle: e,
        strDescription: r,
        strOKButtonText: o,
        strCancelButtonText: n,
        onGamepadCancel: i,
        strMiddleButtonText: s,
        onMiddleButton: a,
        bAlertDialog: l,
        children: u,
        ...c
      } = this.props,
      m = o || y("#Button_Close"),
      f = (0, R1.jsx)(O0, {
        bOKDisabled: this.props.bOKDisabled,
        bCancelDisabled: this.props.bCancelDisabled,
        strOKText: o,
        onCancel: this.Cancel(this.props.onCancel),
        strCancelText: n,
      });
    return (
      l
        ? (f = (0, R1.jsx)(ge, { children: m }))
        : a &&
          (f = (0, R1.jsx)(N0, {
            bOKDisabled: this.props.bOKDisabled,
            bCancelDisabled: this.props.bCancelDisabled,
            strOKText: o,
            onCancel: this.Cancel(this.props.onCancel),
            strCancelText: n,
            onUpdate: () => {
              a(), this.props.closeModal && this.props.closeModal();
            },
            strUpdateText: s,
            bUpdateDisabled: this.props.bMiddleDisabled,
          })),
      (0, R1.jsxs)(sr, {
        ...c,
        children: [
          (0, R1.jsxs)(Rt, {
            children: [
              " ",
              e || (0, R1.jsx)(R1.Fragment, { children: " " }),
              " ",
            ],
          }),
          (0, R1.jsxs)(G0, {
            onCancelButton: this.Cancel(i || this.props.onCancel),
            children: [
              (0, R1.jsxs)(I0, { children: [r, u] }),
              (0, R1.jsx)(Z0, { children: f }),
            ],
          }),
        ],
      })
    );
  }
};
Qe = g([F1], Qe);
var It = class extends y3.Component {
  render() {
    let e = {
      strTitle: y("#Error_FailureNotice"),
      strDescription: y("#Error_GenericFailureDescription"),
      bAlertDialog: !0,
      bDestructiveWarning: !0,
      onOK: () => {},
      onCancel: () => {},
      ...this.props,
    };
    return (0, R1.jsx)(Qe, { ...e });
  }
};
It = g([F1], It);
var R3 = class extends y3.Component {
  render() {
    let e = {
      onOK: () => {},
      onCancel: () => {},
      bAlertDialog: !0,
      ...this.props,
    };
    return (
      (e.strDescription = (0, R1.jsxs)("span", {
        style: { whiteSpace: "pre-line" },
        children: [" ", e.strDescription, " "],
      })),
      (0, R1.jsx)(Qe, { ...e })
    );
  }
};
R3 = g([F1], R3);
function ar(t, e, r) {
  nr((0, R1.jsx)(R3, { strTitle: t, strDescription: e }), r);
}
var M1 = p(L());
function lr(t) {
  return t ? t + "_Label" : void 0;
}
function Cr(t) {
  return t ? t + "_Description" : void 0;
}
function P3(t, e) {
  let { label: r, description: o } = e;
  return {
    "aria-labelledby": r ? lr(t) : void 0,
    "aria-describedby": o ? Cr(t) : void 0,
  };
}
var $e = I1.forwardRef(function (e, r) {
  let {
      accessibilityId: o,
      label: n,
      description: i,
      icon: s,
      children: a,
      childrenLayout: l,
      inlineWrap: u,
      childrenContainerWidth: c,
      spacingBetweenLabelAndChild: m,
      padding: f,
      disabled: k,
      bottomSeparator: M,
      className: b,
      highlightOnFocus: w,
      indentLevel: A,
      verticalAlignment: Z,
      iconLocation: I,
      tooltip: i1,
      explainer: J,
      explainerTitle: s1,
      ...m1
    } = e,
    a1 = I2(),
    Q = l ?? "inline",
    P = I ?? "front",
    S = P == "front" && !!s,
    K2 = P == "before-children" && !!s,
    ee = Q == "inline" && !!a,
    Z2 = Q == "below" && !!a,
    ye = u ?? (a1 ? "shift-children-below" : "keep-inline"),
    d2 = !!(m1.onClick || m1.onActivate || m1.focusable),
    d1 = (s != null && S) || n != null || (ee && a != null),
    y2 = c ?? "min",
    te = m ?? "standard",
    E3 = f ?? "standard",
    A3 = M ?? "standard",
    Xt = w ?? !0,
    D3 = A ?? 0,
    Z3 = Z ?? "center",
    re = Ki(s1 ?? n, J),
    Pe = I1.useRef(),
    Se = i2(Pe, e.navRef),
    Jt = I1.useCallback(
      (He) => {
        Pe.current?.TakeFocus(), He.preventDefault();
      },
      [Pe],
    );
  return (0, M1.jsxs)(e1, {
    focusable: d2,
    noFocusRing: !0,
    scrollIntoViewWhenChildFocused: !0,
    onActivate: m1.onClick ? (He) => m1.onClick?.(He) : void 0,
    ref: r,
    onMouseDown: d2 ? void 0 : Jt,
    ...m1,
    ...re,
    navRef: Se,
    className: v(
      b,
      D.Field,
      k && D.Disabled,
      d1 && D.WithFirstRow,
      ee && D.WithChildrenInline,
      Z2 && D.WithChildrenBelow,
      Z3 == "center" && D.VerticalAlignCenter,
      ye == "shift-children-below" && D.InlineWrapShiftsChildrenBelow,
      !!i && D.WithDescription,
      A3 == "standard" && D.WithBottomSeparatorStandard,
      A3 == "thick" && D.WithBottomSeparatorThick,
      y2 == "fixed" && D.ChildrenWidthFixed,
      y2 == "max" && D.ChildrenWidthGrow,
      te == "standard" && D.ExtraPaddingOnChildrenBelow,
      E3 == "standard" && D.StandardPadding,
      E3 == "compact" && D.CompactPadding,
      d2 && D.Clickable,
      Xt && D.HighlightOnFocus,
    ),
    style: { "--indent-level": D3 },
    children: [
      d1 &&
        (0, M1.jsxs)("div", {
          className: D.FieldLabelRow,
          children: [
            (0, M1.jsxs)("div", {
              className: D.FieldLabel,
              id: lr(o),
              children: [
                S &&
                  (0, M1.jsx)("div", {
                    className: v(D.FieldIcon, D.Front),
                    children: s,
                  }),
                n,
                i1 && (0, M1.jsx)(B2, { tooltip: i1 }),
              ],
            }),
            ee &&
              (0, M1.jsxs)("div", {
                className: D.FieldChildrenWithIcon,
                children: [
                  K2 &&
                    (0, M1.jsx)("div", {
                      className: v(D.FieldIcon, D.BeforeChildren),
                      children: s,
                    }),
                  (0, M1.jsx)("div", {
                    className: D.FieldChildrenInner,
                    children: a,
                  }),
                ],
              }),
          ],
        }),
      Z2 &&
        (0, M1.jsxs)("div", {
          className: D.FieldChildrenWithIcon,
          children: [
            K2 &&
              (0, M1.jsx)("div", {
                className: v(D.FieldIcon, D.BeforeChildren),
                children: s,
              }),
            (0, M1.jsx)("div", {
              className: D.FieldChildrenInner,
              children: a,
            }),
          ],
        }),
      i &&
        (0, M1.jsx)("div", {
          className: D.FieldDescription,
          id: Cr(o),
          children: i,
        }),
    ],
  });
});
function Ki(t, e) {
  let r = H1(),
    o = I1.useCallback(() => {
      ar(t, e, r.ownerWindow ?? window);
    }, [r, t, e]);
  if (e == null) return {};
  let n = y("#Field_MoreInfo_Action");
  return { onOptionsButton: o, onOptionsActionDescription: n };
}
function es(t, e, r) {
  let o = I1.useId(),
    n = P3(t, e),
    i = { id: o, "aria-labelledby": "" };
  return (
    (i["aria-labelledby"] = r
      .map((s) => (s == "button" ? o : n["aria-labelledby"]))
      .join(" ")),
    (i["aria-describedby"] = n["aria-describedby"]),
    i
  );
}
var rg = I1.forwardRef(function (e, r) {
    let {
        label: o,
        description: n,
        explainer: i,
        icon: s,
        layout: a,
        disabled: l,
        onActivate: u,
        bottomSeparator: c,
        highlightOnFocus: m,
        childrenContainerWidth: f,
        padding: k,
        inlineWrap: M,
        fieldClassName: b,
        fieldChildren: w,
        accessibilityNameOrder: A = ["label", "button"],
        ...Z
      } = e,
      { refWithValue: I, refForElement: i1 } = e4(r),
      J = I1.useId(),
      s1 = es(J, e, A);
    return (0, M1.jsxs)($e, {
      accessibilityId: J,
      label: o,
      description: n,
      icon: s,
      bottomSeparator: c,
      highlightOnFocus: m,
      childrenLayout: a ?? "inline",
      childrenContainerWidth: f ?? "min",
      onMouseDown: (a1) => {
        I.current?.focus(), a1.preventDefault();
      },
      padding: k,
      inlineWrap: M,
      explainer: i,
      className: b,
      disabled: l,
      onActivate: l ? u : void 0,
      children: [(0, M1.jsx)(x1, { ...Z, ...s1, disabled: l, ref: i1 }), w],
    });
  }),
  ur = I1.forwardRef(function (e, r) {
    let {
        label: o,
        description: n,
        icon: i,
        layout: s,
        bottomSeparator: a,
        highlightOnFocus: l,
        ...u
      } = e,
      { refWithValue: c, refForElement: m } = e4(r),
      f = I1.useId();
    return (0, M1.jsx)($e, {
      accessibilityId: f,
      label: o,
      description: n,
      icon: i,
      bottomSeparator: a,
      highlightOnFocus: l,
      childrenLayout: s ?? "inline",
      childrenContainerWidth: "fixed",
      onMouseDown: (M) => {
        c.current?.element?.focus(), M.preventDefault();
      },
      children: (0, M1.jsx)(_2, { ...u, ref: m }),
    });
  });
var Mr = p(R());
var p1 = p(R());
var j1 = p(R());
var Z6 = { TransitionGroup: "xbJxDr3b7qU-", ContentWrapper: "CNH6rvKas2k-" };
function I6(t, e) {
  return t.classList
    ? !!e && t.classList.contains(e)
    : (" " + (t.className.baseVal || t.className) + " ").indexOf(
        " " + e + " ",
      ) !== -1;
}
function G6(t, e) {
  t.classList
    ? t.classList.add(e)
    : I6(t, e) ||
      (typeof t.className == "string"
        ? (t.className = t.className + " " + e)
        : t.setAttribute(
            "class",
            ((t.className && t.className.baseVal) || "") + " " + e,
          ));
}
function cr(t, e) {
  return t
    .replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function F6(t, e) {
  t.classList
    ? t.classList.remove(e)
    : typeof t.className == "string"
      ? (t.className = cr(t.className, e))
      : t.setAttribute(
          "class",
          cr((t.className && t.className.baseVal) || "", e),
        );
}
var U6 = p(R());
var S3 = p(R()),
  H3 = p(P2());
var W6 = { disabled: !1 };
var pr = p(R()),
  Ke = pr.default.createContext(null);
var Gt = function (e) {
  return e.scrollTop;
};
var x3 = "unmounted",
  ve = "exited",
  Le = "entering",
  t3 = "entered",
  O6 = "exiting",
  A2 = (function (t) {
    Ee(e, t);
    function e(o, n) {
      var i;
      i = t.call(this, o, n) || this;
      var s = n,
        a = s && !s.isMounting ? o.enter : o.appear,
        l;
      return (
        (i.appearStatus = null),
        o.in
          ? a
            ? ((l = ve), (i.appearStatus = Le))
            : (l = t3)
          : o.unmountOnExit || o.mountOnEnter
            ? (l = x3)
            : (l = ve),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    e.getDerivedStateFromProps = function (n, i) {
      var s = n.in;
      return s && i.status === x3 ? { status: ve } : null;
    };
    var r = e.prototype;
    return (
      (r.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (r.componentDidUpdate = function (n) {
        var i = null;
        if (n !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== Le && s !== t3 && (i = Le)
            : (s === Le || s === t3) && (i = O6);
        }
        this.updateStatus(!1, i);
      }),
      (r.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (r.getTimeouts = function () {
        var n = this.props.timeout,
          i,
          s,
          a;
        return (
          (i = s = a = n),
          n != null &&
            typeof n != "number" &&
            ((i = n.exit),
            (s = n.enter),
            (a = n.appear !== void 0 ? n.appear : s)),
          { exit: i, enter: s, appear: a }
        );
      }),
      (r.updateStatus = function (n, i) {
        if ((n === void 0 && (n = !1), i !== null))
          if ((this.cancelNextCallback(), i === Le)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : H3.default.findDOMNode(this);
              s && Gt(s);
            }
            this.performEnter(n);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === ve &&
            this.setState({ status: x3 });
      }),
      (r.performEnter = function (n) {
        var i = this,
          s = this.props.enter,
          a = this.context ? this.context.isMounting : n,
          l = this.props.nodeRef ? [a] : [H3.default.findDOMNode(this), a],
          u = l[0],
          c = l[1],
          m = this.getTimeouts(),
          f = a ? m.appear : m.enter;
        if ((!n && !s) || W6.disabled) {
          this.safeSetState({ status: t3 }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, c),
          this.safeSetState({ status: Le }, function () {
            i.props.onEntering(u, c),
              i.onTransitionEnd(f, function () {
                i.safeSetState({ status: t3 }, function () {
                  i.props.onEntered(u, c);
                });
              });
          });
      }),
      (r.performExit = function () {
        var n = this,
          i = this.props.exit,
          s = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : H3.default.findDOMNode(this);
        if (!i || W6.disabled) {
          this.safeSetState({ status: ve }, function () {
            n.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: O6 }, function () {
            n.props.onExiting(a),
              n.onTransitionEnd(s.exit, function () {
                n.safeSetState({ status: ve }, function () {
                  n.props.onExited(a);
                });
              });
          });
      }),
      (r.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (r.safeSetState = function (n, i) {
        (i = this.setNextCallback(i)), this.setState(n, i);
      }),
      (r.setNextCallback = function (n) {
        var i = this,
          s = !0;
        return (
          (this.nextCallback = function (a) {
            s && ((s = !1), (i.nextCallback = null), n(a));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (r.onTransitionEnd = function (n, i) {
        this.setNextCallback(i);
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : H3.default.findDOMNode(this),
          a = n == null && !this.props.addEndListener;
        if (!s || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            u = l[0],
            c = l[1];
          this.props.addEndListener(u, c);
        }
        n != null && setTimeout(this.nextCallback, n);
      }),
      (r.render = function () {
        var n = this.state.status;
        if (n === x3) return null;
        var i = this.props,
          s = i.children,
          a = i.in,
          l = i.mountOnEnter,
          u = i.unmountOnExit,
          c = i.appear,
          m = i.enter,
          f = i.exit,
          k = i.timeout,
          M = i.addEndListener,
          b = i.onEnter,
          w = i.onEntering,
          A = i.onEntered,
          Z = i.onExit,
          I = i.onExiting,
          i1 = i.onExited,
          J = i.nodeRef,
          s1 = Te(i, [
            "children",
            "in",
            "mountOnEnter",
            "unmountOnExit",
            "appear",
            "enter",
            "exit",
            "timeout",
            "addEndListener",
            "onEnter",
            "onEntering",
            "onEntered",
            "onExit",
            "onExiting",
            "onExited",
            "nodeRef",
          ]);
        return S3.default.createElement(
          Ke.Provider,
          { value: null },
          typeof s == "function"
            ? s(n, s1)
            : S3.default.cloneElement(S3.default.Children.only(s), s1),
        );
      }),
      e
    );
  })(S3.default.Component);
A2.contextType = Ke;
A2.propTypes = {};
function e3() {}
A2.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: e3,
  onEntering: e3,
  onEntered: e3,
  onExit: e3,
  onExiting: e3,
  onExited: e3,
};
A2.UNMOUNTED = x3;
A2.EXITED = ve;
A2.ENTERING = Le;
A2.ENTERED = t3;
A2.EXITING = O6;
var dr = A2;
var ts = function (e, r) {
    return (
      e &&
      r &&
      r.split(" ").forEach(function (o) {
        return G6(e, o);
      })
    );
  },
  N6 = function (e, r) {
    return (
      e &&
      r &&
      r.split(" ").forEach(function (o) {
        return F6(e, o);
      })
    );
  },
  z6 = (function (t) {
    Ee(e, t);
    function e() {
      for (var o, n = arguments.length, i = new Array(n), s = 0; s < n; s++)
        i[s] = arguments[s];
      return (
        (o = t.call.apply(t, [this].concat(i)) || this),
        (o.appliedClasses = { appear: {}, enter: {}, exit: {} }),
        (o.onEnter = function (a, l) {
          var u = o.resolveArguments(a, l),
            c = u[0],
            m = u[1];
          o.removeClasses(c, "exit"),
            o.addClass(c, m ? "appear" : "enter", "base"),
            o.props.onEnter && o.props.onEnter(a, l);
        }),
        (o.onEntering = function (a, l) {
          var u = o.resolveArguments(a, l),
            c = u[0],
            m = u[1],
            f = m ? "appear" : "enter";
          o.addClass(c, f, "active"),
            o.props.onEntering && o.props.onEntering(a, l);
        }),
        (o.onEntered = function (a, l) {
          var u = o.resolveArguments(a, l),
            c = u[0],
            m = u[1],
            f = m ? "appear" : "enter";
          o.removeClasses(c, f),
            o.addClass(c, f, "done"),
            o.props.onEntered && o.props.onEntered(a, l);
        }),
        (o.onExit = function (a) {
          var l = o.resolveArguments(a),
            u = l[0];
          o.removeClasses(u, "appear"),
            o.removeClasses(u, "enter"),
            o.addClass(u, "exit", "base"),
            o.props.onExit && o.props.onExit(a);
        }),
        (o.onExiting = function (a) {
          var l = o.resolveArguments(a),
            u = l[0];
          o.addClass(u, "exit", "active"),
            o.props.onExiting && o.props.onExiting(a);
        }),
        (o.onExited = function (a) {
          var l = o.resolveArguments(a),
            u = l[0];
          o.removeClasses(u, "exit"),
            o.addClass(u, "exit", "done"),
            o.props.onExited && o.props.onExited(a);
        }),
        (o.resolveArguments = function (a, l) {
          return o.props.nodeRef ? [o.props.nodeRef.current, a] : [a, l];
        }),
        (o.getClassNames = function (a) {
          var l = o.props.classNames,
            u = typeof l == "string",
            c = u && l ? l + "-" : "",
            m = u ? "" + c + a : l[a],
            f = u ? m + "-active" : l[a + "Active"],
            k = u ? m + "-done" : l[a + "Done"];
          return { baseClassName: m, activeClassName: f, doneClassName: k };
        }),
        o
      );
    }
    var r = e.prototype;
    return (
      (r.addClass = function (n, i, s) {
        var a = this.getClassNames(i)[s + "ClassName"],
          l = this.getClassNames("enter"),
          u = l.doneClassName;
        i === "appear" && s === "done" && u && (a += " " + u),
          s === "active" && n && Gt(n),
          a && ((this.appliedClasses[i][s] = a), ts(n, a));
      }),
      (r.removeClasses = function (n, i) {
        var s = this.appliedClasses[i],
          a = s.base,
          l = s.active,
          u = s.done;
        (this.appliedClasses[i] = {}),
          a && N6(n, a),
          l && N6(n, l),
          u && N6(n, u);
      }),
      (r.render = function () {
        var n = this.props,
          i = n.classNames,
          s = Te(n, ["classNames"]);
        return U6.default.createElement(
          dr,
          X3({}, s, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited,
          }),
        );
      }),
      e
    );
  })(U6.default.Component);
z6.defaultProps = { classNames: "" };
z6.propTypes = {};
var j6 = z6;
function mr(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
var V3 = p(R());
var o2 = p(R());
function Ft(t, e) {
  var r = function (i) {
      return e && (0, o2.isValidElement)(i) ? e(i) : i;
    },
    o = Object.create(null);
  return (
    t &&
      o2.Children.map(t, function (n) {
        return n;
      }).forEach(function (n) {
        o[n.key] = r(n);
      }),
    o
  );
}
function rs(t, e) {
  (t = t || {}), (e = e || {});
  function r(c) {
    return c in e ? e[c] : t[c];
  }
  var o = Object.create(null),
    n = [];
  for (var i in t) i in e ? n.length && ((o[i] = n), (n = [])) : n.push(i);
  var s,
    a = {};
  for (var l in e) {
    if (o[l])
      for (s = 0; s < o[l].length; s++) {
        var u = o[l][s];
        a[o[l][s]] = r(u);
      }
    a[l] = r(l);
  }
  for (s = 0; s < n.length; s++) a[n[s]] = r(n[s]);
  return a;
}
function Me(t, e, r) {
  return r[e] != null ? r[e] : t.props[e];
}
function hr(t, e) {
  return Ft(t.children, function (r) {
    return (0, o2.cloneElement)(r, {
      onExited: e.bind(null, r),
      in: !0,
      appear: Me(r, "appear", t),
      enter: Me(r, "enter", t),
      exit: Me(r, "exit", t),
    });
  });
}
function gr(t, e, r) {
  var o = Ft(t.children),
    n = rs(e, o);
  return (
    Object.keys(n).forEach(function (i) {
      var s = n[i];
      if ((0, o2.isValidElement)(s)) {
        var a = i in e,
          l = i in o,
          u = e[i],
          c = (0, o2.isValidElement)(u) && !u.props.in;
        l && (!a || c)
          ? (n[i] = (0, o2.cloneElement)(s, {
              onExited: r.bind(null, s),
              in: !0,
              exit: Me(s, "exit", t),
              enter: Me(s, "enter", t),
            }))
          : !l && a && !c
            ? (n[i] = (0, o2.cloneElement)(s, { in: !1 }))
            : l &&
              a &&
              (0, o2.isValidElement)(u) &&
              (n[i] = (0, o2.cloneElement)(s, {
                onExited: r.bind(null, s),
                in: u.props.in,
                exit: Me(s, "exit", t),
                enter: Me(s, "enter", t),
              }));
      }
    }),
    n
  );
}
var os =
    Object.values ||
    function (t) {
      return Object.keys(t).map(function (e) {
        return t[e];
      });
    },
  ns = {
    component: "div",
    childFactory: function (e) {
      return e;
    },
  },
  q6 = (function (t) {
    Ee(e, t);
    function e(o, n) {
      var i;
      i = t.call(this, o, n) || this;
      var s = i.handleExited.bind(mr(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: s,
          firstRender: !0,
        }),
        i
      );
    }
    var r = e.prototype;
    return (
      (r.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (r.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (e.getDerivedStateFromProps = function (n, i) {
        var s = i.children,
          a = i.handleExited,
          l = i.firstRender;
        return { children: l ? hr(n, a) : gr(n, s, a), firstRender: !1 };
      }),
      (r.handleExited = function (n, i) {
        var s = Ft(this.props.children);
        n.key in s ||
          (n.props.onExited && n.props.onExited(i),
          this.mounted &&
            this.setState(function (a) {
              var l = X3({}, a.children);
              return delete l[n.key], { children: l };
            }));
      }),
      (r.render = function () {
        var n = this.props,
          i = n.component,
          s = n.childFactory,
          a = Te(n, ["component", "childFactory"]),
          l = this.state.contextValue,
          u = os(this.state.children).map(s);
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          i === null
            ? V3.default.createElement(Ke.Provider, { value: l }, u)
            : V3.default.createElement(
                Ke.Provider,
                { value: l },
                V3.default.createElement(i, a, u),
              )
        );
      }),
      e
    );
  })(V3.default.Component);
q6.propTypes = {};
q6.defaultProps = ns;
var Y6 = q6;
var r3 = p(L());
function fr(t) {
  let {
      childrenKey: e,
      childrenClasses: r,
      children: o,
      directionClass: n,
      animate: i = !0,
    } = t,
    s = v(Z6.TransitionGroup, n);
  return (0, r3.jsx)(Y6, {
    className: s,
    appear: !1,
    enter: i,
    exit: i,
    children: (0, r3.jsx)(is, { childrenClasses: r, children: o }, e),
  });
}
function is(t) {
  let { sizeClass: e, children: r, childrenClasses: o, navKey: n, ...i } = t,
    [s, a, l, u] = ss(),
    c = j1.useRef(!0),
    m = j1.useCallback(() => c.current, [c]),
    f = j1.useCallback(() => {
      (c.current = !0), l();
    }, [l]),
    k = j1.useCallback(() => {
      (c.current = !1), u();
    }, [u]),
    M = 1e4,
    b = t.childrenClasses,
    w = {
      enter: b.enterStart,
      enterActive: b.enterEnd,
      exit: b.exitStart,
      exitActive: b.exitEnd,
    };
  return s.current && !s.current.ownerDocument.defaultView
    ? null
    : (0, r3.jsx)(j6, {
        nodeRef: s,
        classNames: w,
        in: !0,
        timeout: M,
        addEndListener: a,
        onEntering: f,
        onExiting: k,
        ...i,
        children: (0, r3.jsx)("div", {
          ref: s,
          className: v(Z6.ContentWrapper, e, b.base),
          children: (0, r3.jsx)(e1, {
            className: e,
            fnCanTakeFocus: m,
            navKey: n,
            children: t.children,
          }),
        }),
      });
}
function ss() {
  let t = j1.useRef(null),
    e = j1.useRef();
  j1.useLayoutEffect(() => {
    let i = t.current;
    if (!i || e.current) return;
    e.current = {
      element: i,
      activeProps: new Set(),
      bExiting: !1,
      fnDone: null,
    };
    let s = e.current,
      a = (u) => {
        u.target == i && s.activeProps.add(u.propertyName);
      };
    i.addEventListener("transitionrun", a, !1);
    let l = (u) => {
      u.target == i &&
        (s.activeProps.delete(u.propertyName),
        s.fnDone && s.activeProps.size == 0 && s.bExiting && s.fnDone());
    };
    i.addEventListener("transitionend", l, !1),
      i.addEventListener("transitioncancel", l, !1);
  }, []);
  let r = j1.useCallback(
      (i) => {
        if (!e.current) {
          i();
          return;
        }
        e.current.fnDone = i;
      },
      [e],
    ),
    o = j1.useCallback(() => {
      e.current && (e.current.bExiting = !1);
    }, [e]),
    n = j1.useCallback(() => {
      e.current && (e.current.bExiting = !0);
    }, [e]);
  return [t, r, o, n];
}
function _r(t, e) {
  return {
    base: e,
    enterStart: t.Enter,
    enterEnd: t.EnterActive,
    exitStart: t.Exit,
    exitEnd: t.ExitActive,
  };
}
function vr(t, e) {
  return e == 1
    ? t.Left
    : e == 2
      ? t.Right
      : e == 3
        ? t.Up
        : e == 4
          ? t.Down
          : "";
}
var D2 = {
  narrowWidth: "500px",
  "duration-app-launch": "800ms",
  PagedSettingsDialog: "Syc5CEejpCs-",
  PagedSettingsDialog_PageContent: "spl7ARNTMuI-",
  NoPadding: "JE-edA2AHZU-",
  PagedSettingsDialog_PageListColumn: "_7w8xPpmaJYI-",
  PagedSettingsDialog_Title: "IkEy5ScXPLA-",
  PagedSettingsDialog_PageList: "_05n8dH6yzlk-",
  PagedSettingsDialog_PageList_DisableScrolling: "kCFp7ufol-Q-",
  PagedSettingsDialog_PageList_ShowTitle: "_6MMl04DZdyk-",
  PageSettingsDialog_PageList_NoHeaderPadding: "B77h1ty4tmw-",
  PagedSettingsDialog_PageListItem: "meSl50NBW8s-",
  DisabledItem: "CIL35Lmv31Y-",
  Active: "_7HVRI1bmcvY-",
  "ItemFocusAnim-darkerGrey": "vn2pzERIjAA-",
  "ItemFocusAnim-darkGrey": "_3-IWLVbzoio-",
  PageListItem_Icon: "yzO7X4cm1OE-",
  PageListItem_Title: "TVggJx59aXM-",
  Separator: "ALQx3i1U-SY-",
  PagedSettingDialog_ContentColumn: "dC8z7R4w4eU-",
  Up: "pO-epRkhPx8-",
  ContentTransition: "UWiPLueCfHo-",
  Enter: "KB1G8hQC1Z0-",
  EnterActive: "_8NY5W7Wocgo-",
  Exit: "lwgKtPYHcKg-",
  ExitActive: "RI6Chi7gF-s-",
  Down: "U7gwOwC0auU-",
  BackgroundAnimation: "ELqxp2DLKF8-",
  "ItemFocusAnim-darkerGrey-nocolor": "o0VXPmdxuUc-",
  "ItemFocusAnim-grey": "_7kx878X5F4U-",
  "ItemFocusAnim-translucent-white-10": "_47U-YjIajBc-",
  "ItemFocusAnim-translucent-white-20": "T7MuEoxoS4g-",
  "ItemFocusAnimBorder-darkGrey": "rEWG7AndCQc-",
  "ItemFocusAnim-green": "FMEBbK-Sl-8-",
  focusAnimation: "_08jd-D3p5XU-",
  hoverAnimation: "P1X-i3YFXCU-",
};
var c2 = p(L()),
  Lr = p1.createContext(null);
function as(t) {
  let e = p1.useContext(Lr),
    o = W8().IN_VR,
    { title: n, icon: i, active: s, ...a } = t;
  return (0, c2.jsxs)(e1, {
    preferredFocus: s,
    navRef: s && e ? e : void 0,
    noFocusRing: !0,
    onActivate: o ? void 0 : a.onClick,
    onFocus: o ? void 0 : a.onClick,
    ...a,
    children: [
      i && (0, c2.jsx)("div", { className: D2.PageListItem_Icon, children: i }),
      (0, c2.jsx)("div", { className: D2.PageListItem_Title, children: n }),
    ],
  });
}
function ls(t) {
  let { bTransparent: e, className: r, ...o } = t;
  return (0, c2.jsx)("div", { className: v(r, D2.Separator), ...o });
}
var Cs = p1.forwardRef(function (e, r) {
  let { page: o, bAutoFocusPageContent: n, showTitle: i = !1 } = e,
    s = p1.useRef(null),
    a = p1.useRef(!0);
  p1.useEffect(() => {
    (!a.current || !n) && s.current?.TakeFocus(), (a.current = !1);
  }, [o, n]);
  let l = (u, c, m) =>
    (0, c2.jsx)(us, {
      pages: e.pages,
      activePage: u,
      refForPage: c,
      PageComponent: m,
    });
  return (0, c2.jsx)(Lr.Provider, {
    value: s,
    children: (0, c2.jsx)(er, {
      ...e,
      stylesheet: D2,
      showTitle: i,
      PageListItemComponent: as,
      PageListSeparatorComponent: ls,
      renderPageContent: e.renderPageContent || l,
    }),
  });
});
function us(t) {
  let { pages: e, activePage: r, refForPage: o, PageComponent: n } = t,
    i = p1.useMemo(() => e.findIndex((u) => u == r), [e, r]),
    s = cs(i),
    a = ps(r?.identifier, o),
    l = vr(D2, s);
  return (0, c2.jsx)(fr, {
    childrenKey: r?.identifier,
    childrenClasses: _r(D2, D2.ContentTransition),
    directionClass: l,
    animate: s != 0,
    children:
      r &&
      (0, c2.jsx)(
        n,
        { ref: a(r.identifier), stylesheet: D2, activePage: r },
        r.identifier,
      ),
  });
}
function cs(t) {
  let e = p1.useRef(t),
    r = p1.useRef(0),
    o = e.current;
  if (o == t) return r.current;
  let n = 0;
  return (
    o < t ? (n = 4) : o > t && (n = 3), (e.current = t), (r.current = n), n
  );
}
function ps(t, e) {
  let r = p1.useMemo(() => new Map(), []),
    o = p1.useRef();
  o.current = t;
  let n = p1.useRef();
  n.current = e;
  let i = p1.useCallback(
    (s) => (a) => {
      r.set(s, a), s === o.current && m2(n.current, a);
    },
    [r],
  );
  return (
    p1.useEffect(() => (m2(e, t && r.get(t)), () => m2(e, void 0)), [r, t, e]),
    i
  );
}
var kr = p(L()),
  sf = Mr.forwardRef(function (e, r) {
    return (0, kr.jsx)(Be, {
      noFocusRing: !0,
      ...e,
      ref: r,
      className: v(D.BasicTextInput, e.className),
      size: e.size ?? 1,
    });
  });
var Ot = p(R());
var br = {
  "duration-app-launch": "800ms",
  DropDownControlButton: "SN62O1Nd2Uc-",
};
var q1 = p(L());
function Rr(t, e) {
  for (let r of t.options)
    if ((E2(r) && r.data === e) || (k2(r) && Rr(r, e))) return !0;
  return !1;
}
function ds(t) {
  let e = (r) =>
    r?.map((o, n) =>
      fe(o)
        ? (0, q1.jsx)(K3, {}, n)
        : E2(o)
          ? (0, q1.jsx)(
              c1,
              {
                role: "listitem",
                onSelected: (i) => t.onValueSelected && t.onValueSelected(i, o),
                selected: t.selectedValue === o.data,
                children: (0, q1.jsx)(q1.Fragment, { children: o.label }),
              },
              n,
            )
          : k2(o)
            ? (0, q1.jsx)(
                b7,
                {
                  label: o.label,
                  selectedWithin: Rr(o, t.selectedValue),
                  children: e(o.options),
                },
                n,
              )
            : null,
    );
  return (0, q1.jsx)(se, {
    onCancel: t.onCancel,
    role: "listbox",
    children: e(t.rgOptions),
  });
}
var ms = Ot.forwardRef(function (e, r) {
  let {
      className: o,
      opened: n,
      arrowClassName: i,
      "aria-labelledby": s = "",
      ...a
    } = e,
    l = Ot.useId(),
    u = s + " " + l;
  return (0, q1.jsx)(x1, {
    id: l,
    className: v(br.DropDownControlButton, o),
    "aria-labelledby": u,
    ...a,
    ref: r,
    children: (0, q1.jsxs)("div", {
      className: D.DropDownControlButtonContents,
      children: [
        (0, q1.jsx)("div", {
          className: "DialogDropDown_CurrentDisplay",
          children: e.children,
        }),
        (0, q1.jsx)(i3, { direction: "down" }),
      ],
    }),
  });
});
var b2 = p(R());
var yr = "TW2ZQnLvgIc-";
var ke = p(L()),
  wf = b2.forwardRef(function (e, r) {
    let { className: o, ...n } = e,
      i = b2.useRef(),
      s = i2(r, i),
      [a, l] = b2.useState(!1),
      u = b2.useCallback(() => {
        l((c) => !c), window.setTimeout(() => i.current?.Focus(), 1);
      }, []);
    return (0, ke.jsx)(e1, {
      className: o,
      onOptionsButton: u,
      onOptionsActionDescription: y(
        a ? "#Login_HidePassword" : "#Login_ShowPassword",
      ),
      children: (0, ke.jsx)(_2, {
        autoComplete: "off",
        ref: s,
        inlineControls: (0, ke.jsx)(x1, {
          className: yr,
          onPointerDown: u,
          onOKButton: u,
          children: a ? (0, ke.jsx)(P7, {}) : (0, ke.jsx)(S7, {}),
        }),
        ...n,
        type: a ? "text" : "password",
      }),
    });
  });
function _s(t) {
  let e = t.split(".");
  if (e.length > 4) return !1;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    if (o == "") {
      if (r == e.length - 1) continue;
      return !1;
    }
    if (!/^[0-9]*$/.test(o)) return !1;
    let n = parseInt(o);
    if (!(n >= 0 && n <= 255)) return !1;
  }
  return !0;
}
var bf = b2.forwardRef(function (e, r) {
  let { className: o, value: n, ...i } = e,
    s = n ?? "";
  return (0, ke.jsx)(ur, {
    autoComplete: "off",
    value: s,
    ref: r,
    placeholder: "   .   .   .   ",
    ...i,
    onChange: (l) => {
      let u = l.target.value;
      if (_s(u)) i.onChange && i.onChange(l);
      else {
        l.target.value = s;
        return;
      }
    },
  });
});
var P1 = p(R());
var W = {
  "duration-app-launch": "800ms",
  "error-shake-duration": "500ms",
  SliderControlPanelGroup: "S4m6S4lbgWU-",
  SliderControlAndNotches: "TSGeP5nQ2eE-",
  WithDefaultValue: "bMn8P19ST3I-",
  SliderControl: "-sSi0mqDQEc-",
  Disabled: "gX0ZSjUXBoI-",
  SliderTrack: "JcZPqsmZCrs-",
  SliderHasNotches: "_99yc6l0bUM8-",
  DefaultValueIsColorRange: "R2grr9aqjqU-",
  DefaultValueColorLeft: "_-6vA11qHT8w-",
  DefaultValueColorRight: "m8UQ6Eo-HTQ-",
  ForegroundInvisible: "roOa1TV2NUU-",
  SliderTrackDark: "OfeMaDvhS4M-",
  SliderHandleContainer: "gEzroWiQ10A-",
  VerticalLineSliderHandleContainer: "_3ppdnVE1H3A-",
  ParenSliderHandleContainer: "_1Iz6XvWonug-",
  SliderHandle: "aTE6aUB0R0c-",
  SliderHandleFocusPop: "SknjTtzI4lo-",
  VerticalLineSliderHandle: "Bo42-AtikgY-",
  ParenSliderHandle: "_9YeVS-YAFPA-",
  Left: "FXMelMR3PWk-",
  Icon: "cqcpHpjo8zI-",
  SliderNotchContainer: "PUlK4jhI1LI-",
  SliderNotch: "egqaF5PBrnM-",
  AlignToEnds: "M9-w5yPyef8-",
  SliderNotchLabel: "VxQ-bQawiuo-",
  AlignToLeft: "_3gVMVUrVouE-",
  AlignToRight: "V-7czEj9CP8-",
  SliderNotchTick: "e84hOS74IEE-",
  TickActive: "Q-OxmMuerTg-",
  LabelText: "G7nK2YgP-s0-",
  DescriptionValue: "_9DahJpVzGWQ-",
  EditableValue: "hDOGbd8g268-",
  FakeEditableValue: "CDypuWjk2cI-",
  RedBorder: "CXJDXvghByw-",
  ErrorShake: "u7OFkUkvl4Q-",
  "error-shake": "pDBWpRO7L-A-",
  CompoundSlider: "pkpACrKtYxg-",
  CompoundSliderSubSlider: "bVo2ux2WBZg-",
  Right: "eAR6MDPFR6A-",
  CompoundSliderSubSliderLabelContainer: "-Kf-ENxw6Fc-",
  CompoundSliderSubSliderLabelPositioner: "SHWtMAO6Ovs-",
  CompoundSliderSubSliderLabel: "_7d0MjH6VujQ-",
  CompoundSliderSubSliderLabelInternal: "p5Dnr3ULfG8-",
  DefaultValueTickContainer: "_-6ZxRWNF2co-",
  DefaultValueTick: "OGdq5YYrCEk-",
  BackgroundAnimation: "rZZpaXvr8xw-",
  "ItemFocusAnim-darkerGrey-nocolor": "F1Gvr3xtsjQ-",
  "ItemFocusAnim-darkerGrey": "aiPJtdOz5TQ-",
  "ItemFocusAnim-darkGrey": "tDpKQmHutBk-",
  "ItemFocusAnim-grey": "ADELUD39uD4-",
  "ItemFocusAnim-translucent-white-10": "_0Mx6icQvg2A-",
  "ItemFocusAnim-translucent-white-20": "jax3iKWCNi4-",
  "ItemFocusAnimBorder-darkGrey": "kIPtFrURqQk-",
  "ItemFocusAnim-green": "nHBdcYV-iW0-",
};
var t1 = p(L()),
  vs = 10,
  Ls = 1,
  Ms = 0.01,
  ks = 0.05,
  Xf = T0(W["error-shake-duration"]);
function Pr(t, e) {
  return e < 0 ? 0 : e > 1 ? 1 : t == 0 ? e : Math.round(e / t) * t;
}
function Sr(t, e, r) {
  let o = t + r * (e - t);
  return Number.parseFloat(o.toFixed(10));
}
function X6(t, e, r) {
  return (r - t) / (e - t);
}
var k1 = class extends P1.Component {
  m_refSlider = P1.createRef();
  m_refHandle = P1.createRef();
  m_navRefSlider = P1.createRef();
  m_sliderBounds = void 0;
  m_handleBounds = void 0;
  m_fZoom = 1;
  m_eDragMode = 0;
  m_vTouchStartPosition = x8();
  m_fStartValue;
  m_fLatestUserValue;
  m_fLatestOnChangeValue;
  m_bInnerSliderHasFocus = !1;
  m_nRepeatCount = 0;
  m_fInitalRepeatTime = void 0;
  get showHandle() {
    return this.props.showHandle ?? !0;
  }
  get isKeyNavTarget() {
    return this.props.isKeyNavTarget ?? !0;
  }
  get validRange() {
    return this.props.min < this.props.max;
  }
  get range() {
    return this.validRange ? this.props.max - this.props.min : 0;
  }
  get step() {
    return Math.abs(this.props.step ?? Ls);
  }
  get normalizedStep() {
    return this.step / this.range;
  }
  get normalizedDpadStep() {
    let e = this.props.dpadStep ?? this.step,
      r = e > 0 ? e / this.range : Ms;
    return Math.max(r, this.normalizedStep);
  }
  get normalizedClampedValue() {
    let e =
      this.props.value == null || isNaN(this.props.value)
        ? this.props.min
        : S1(this.props.value, this.props.min, this.props.max);
    return X6(this.props.min, this.props.max, e);
  }
  get normalizedDefaultValue() {
    let e = this.props.resetValue;
    if (!(e == null || isNaN(e) || e < this.props.min || e > this.props.max))
      return X6(this.props.min, this.props.max, e);
  }
  get normalizedSliderOrigin() {
    let e = S1(0, this.props.min, this.props.max);
    return X6(this.props.min, this.props.max, e);
  }
  get CanResetToDefault() {
    return (
      this.props.resetValue != null && this.props.value != this.props.resetValue
    );
  }
  get SliderChangeSource() {
    switch (this.m_eDragMode) {
      case 1:
        return 1;
      case 3:
      case 2:
        return 0;
      case 0:
        return;
    }
  }
  constructor(e) {
    super(e),
      (this.m_fStartValue = this.props.value),
      (this.m_fLatestUserValue = this.props.value),
      (this.m_fLatestOnChangeValue = this.props.value);
  }
  RecomputeSliderBounds() {
    (this.m_sliderBounds = this.m_refSlider.current?.getBoundingClientRect()),
      (this.m_handleBounds = this.m_refHandle.current?.getBoundingClientRect());
  }
  SetDragMode(e) {
    if (e != this.m_eDragMode) {
      switch (
        ((this.m_eDragMode = e),
        this.props.onChangeStart &&
          this.props.onChangeStart(this.SliderChangeSource),
        e)
      ) {
        case 1:
        case 3:
        case 2:
          this.RecomputeSliderBounds(),
            (this.m_fStartValue = this.props.value),
            (this.m_fLatestUserValue = this.props.value);
          break;
        case 0:
          break;
      }
      switch (e) {
        case 1:
          this.m_refSlider.current?.ownerDocument?.addEventListener(
            "mousemove",
            this.OnWindowMouseMove,
            { passive: !1 },
          ),
            this.m_refSlider.current?.ownerDocument?.addEventListener(
              "mouseup",
              this.OnWindowMouseUp,
              { passive: !1 },
            );
          break;
        case 2:
        case 3:
          this.m_refSlider.current?.ownerDocument?.addEventListener(
            "touchmove",
            this.OnWindowTouchMove,
            { passive: !1 },
          ),
            this.m_refSlider.current?.ownerDocument?.addEventListener(
              "touchend",
              this.OnWindowTouchEnd,
              { passive: !1 },
            );
          break;
        case 0:
          this.RemoveDocumentEventListeners();
          break;
      }
    }
  }
  OnGamepadDirection(e) {
    if (this.props.disabled) return !1;
    let r = 0;
    if (e.detail.button == 11) r = -1;
    else if (e.detail.button == 12) r = 1;
    else return !1;
    e.detail.is_repeat
      ? (this.m_nRepeatCount == 0 &&
          (this.m_fInitalRepeatTime = performance.now()),
        this.m_nRepeatCount++)
      : ((this.m_nRepeatCount = 0),
        (this.m_fInitalRepeatTime = performance.now()));
    let o = performance.now() - this.m_fInitalRepeatTime,
      n = l8(o, 0, 2e3, 500, 250),
      i = Math.pow(2, Math.floor(o / n)),
      s = this.normalizedDpadStep * i,
      a = S1(s, this.normalizedDpadStep, ks) * r,
      l = Pr(this.normalizedStep, this.normalizedClampedValue + a),
      u = Sr(this.props.min, this.props.max, l);
    if (
      ((u = S1(
        u,
        this.props.clampMin ?? this.props.min,
        this.props.clampMax ?? this.props.max,
      )),
      u != this.props.value)
    ) {
      let c = u > this.m_fLatestUserValue;
      s2.PlayNavSound(c ? 18 : 19),
        (this.m_fLatestUserValue = u),
        this.FireOnChange(u, 2);
    } else s2.PlayNavSound(25);
    return !0;
  }
  FireOnChange(e, r) {
    this.m_fLatestOnChangeValue != e &&
      ((this.m_fLatestOnChangeValue = e),
      this.props.onChange && this.props.onChange(e, r));
  }
  ComputeNormalizedValueForMousePosition(e) {
    if (this.m_sliderBounds == null) return 0;
    let r = e / this.m_fZoom,
      o = this.m_sliderBounds.right - this.m_sliderBounds.left,
      n =
        this.m_handleBounds == null
          ? 0
          : this.m_handleBounds.right - this.m_handleBounds.left,
      i = o - n;
    return (r - this.m_sliderBounds.left - n / 2) / i;
  }
  BShouldTriggerHapticOnSnap() {
    let e = this.normalizedStep;
    return e > 0 && e >= 1 / 40;
  }
  PlayHaptic(e) {
    this.m_refSlider.current?.ownerDocument.defaultView?.SteamClient?.OpenVR?.TriggerOverlayHapticEffect?.(
      e,
      0,
    );
  }
  UpdateSliderValueForPosition(e) {
    if (this.props.disabled || !this.m_refSlider.current) return;
    let r = this.ComputeNormalizedValueForMousePosition(e),
      o = Pr(this.normalizedStep, r),
      n = Sr(this.props.min, this.props.max, o),
      i = this.props.clampMin ?? this.props.min,
      s = this.props.clampMax ?? this.props.max;
    if (((n = S1(n, i, s)), n != this.props.value)) {
      let a = n > this.props.value,
        l = this.step == 0;
      if (
        ((this.m_eDragMode == 0 || !l) && s2.PlayNavSound(a ? 18 : 19),
        this.m_eDragMode == 1 || this.m_eDragMode == 3)
      ) {
        let c = !1;
        if (
          (n == i || n == s) &&
          this.m_fLatestUserValue > i &&
          this.m_fLatestUserValue < s &&
          !c
        )
          this.PlayHaptic(5), (c = !0);
        else if (
          !this.BShouldTriggerHapticOnSnap() &&
          this.m_fLatestUserValue >= i &&
          this.m_fLatestUserValue <= s
        ) {
          let f = Math.floor(((this.m_fLatestUserValue - i) / (s - i)) * 40),
            k = Math.floor(((n - i) / (s - i)) * 40);
          f != k && !c && (this.PlayHaptic(4), (c = !0));
        }
        !l && !c && (this.PlayHaptic(3), (c = !0));
      }
      (this.m_fLatestUserValue = n),
        this.FireOnChange(n, this.SliderChangeSource);
    }
  }
  OnWindowMouseMove(e) {
    this.UpdateSliderValueForPosition(e.clientX);
  }
  OnWindowMouseUp(e) {
    this.m_eDragMode != 0 && this.Complete();
  }
  OnMouseDown(e) {
    e.button == 0 &&
      (this.props.disabled ||
        (e.preventDefault(),
        this.SetDragMode(1),
        this.UpdateSliderValueForPosition(e.clientX)));
  }
  OnTouchStart(e) {
    if (this.props.disabled || e.touches.length != 1) return;
    e.preventDefault();
    let r = this.ComputeNormalizedValueForMousePosition(e.touches[0].clientX);
    r < 0 ||
      r > 1 ||
      (this.SetDragMode(2),
      (this.m_vTouchStartPosition = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      }));
  }
  OnWindowTouchMove(e) {
    if (e.touches.length == 1) {
      switch (this.m_eDragMode) {
        case 2:
          let r = { x: e.touches[0].clientX, y: e.touches[0].clientY };
          if (B8(this.m_vTouchStartPosition, r) >= vs) {
            let n = V8(this.m_vTouchStartPosition, r);
            Math.abs(n.x) > Math.abs(n.y)
              ? (this.SetDragMode(3), this.m_refSlider.current?.focus())
              : this.SetDragMode(0);
          }
          break;
        case 3:
          this.UpdateSliderValueForPosition(e.touches[0].clientX);
          break;
      }
      e.preventDefault();
    }
  }
  OnWindowTouchEnd(e) {
    this.m_eDragMode != 0 && this.Complete();
  }
  Complete() {
    let e = this.m_eDragMode != 0;
    this.FireOnChange(this.m_fLatestUserValue, this.SliderChangeSource),
      this.props.onChangeComplete &&
        this.props.onChangeComplete(
          this.m_fLatestUserValue,
          this.SliderChangeSource,
        ),
      this.SetDragMode(0);
    let r = this.step == 0;
    if (this.m_fLatestUserValue != this.m_fStartValue && r && e) {
      let n = this.m_fLatestUserValue > this.m_fStartValue;
      s2.PlayNavSound(n ? 18 : 19);
    }
  }
  RemoveDocumentEventListeners() {
    this.m_refSlider.current?.ownerDocument?.removeEventListener(
      "mousemove",
      this.OnWindowMouseMove,
    ),
      this.m_refSlider.current?.ownerDocument?.removeEventListener(
        "touchmove",
        this.OnWindowTouchMove,
      ),
      this.m_refSlider.current?.ownerDocument?.removeEventListener(
        "mouseup",
        this.OnWindowMouseUp,
      ),
      this.m_refSlider.current?.ownerDocument?.removeEventListener(
        "touchend",
        this.OnWindowTouchEnd,
      );
  }
  componentDidMount() {
    this.m_fZoom = b8(this.m_refSlider.current);
  }
  componentWillUnmount() {
    this.RemoveDocumentEventListeners();
  }
  BlurInnerSlider() {
    this.m_navRefSlider.current?.ParentTakeFocus();
  }
  OnInnerSliderFocus() {
    (this.m_bInnerSliderHasFocus = !0), (this.m_fStartValue = this.props.value);
  }
  OnInnerSliderBlur() {
    (this.m_bInnerSliderHasFocus = !1),
      this.m_fStartValue != this.m_fLatestUserValue && this.Complete();
  }
  ResetToDefault() {
    if (!this.CanResetToDefault || this.m_eDragMode != 0) return;
    let e;
    (this.m_fLatestUserValue = this.props.resetValue),
      this.FireOnChange(this.props.resetValue, 4),
      this.m_bInnerSliderHasFocus
        ? (e = this.props.resetValue > this.m_fLatestUserValue)
        : ((e = this.props.resetValue > this.props.value),
          this.props.onChangeComplete &&
            this.props.onChangeComplete(this.props.resetValue, 4)),
      s2.PlayNavSound(e ? 18 : 19);
  }
  OnContextMenu(e) {
    if (this.props.resetValue != null) {
      let r = (0, t1.jsx)(se, {
        children: (0, t1.jsx)(c1, {
          disabled: !this.CanResetToDefault,
          onSelected: this.ResetToDefault,
          children: y("#ResetToDefault"),
        }),
      });
      ae(r, e);
    }
  }
  render() {
    let {
        min: e,
        max: r,
        value: o,
        clampMax: n,
        clampMin: i,
        className: s,
        disabled: a,
        dpadStep: l,
        extraNotchPadding: u,
        focusable: c,
        handleType: m,
        innerRef: f,
        isKeyNavTarget: k,
        navRef: M,
        notchCount: b,
        notchLabels: w,
        notchTicksVisible: A,
        onChange: Z,
        onChangeComplete: I,
        onChangeStart: i1,
        renderNotch: J,
        renderValue: s1,
        resetValue: m1,
        resetValueAppearance: a1 = "top-caret",
        showBookendLabels: Q,
        showHandle: P,
        step: S,
        strValueSuffix: K2,
        trackStyleOverride: ee,
        trackStyleBackground: Z2,
        trackForegroundVisible: ye = !0,
        trackTone: d2,
        ...d1
      } = this.props,
      y2 = Q ?? !1,
      te = A ?? !y2,
      E3 = y2 ? 2 : b,
      A3 = [
        { notchIndex: 0, label: `${e}` },
        { notchIndex: 1, label: `${r}` },
      ],
      Xt = y2 ? A3 : w,
      D3 = c ?? !0,
      Z3 = this.normalizedDefaultValue,
      a8 = this.normalizedSliderOrigin,
      re = Z3 != null,
      Pe = a1 == "top-caret",
      Se = !Pe,
      Jt = s1 || b6,
      He = {};
    this.CanResetToDefault && (He[3] = y("#ResetToDefault"));
    let Qt = `${W.SliderHandle} SliderHandle`,
      $t = `${W.SliderHandleContainer} SliderHandleContainer `;
    m == "verticalline"
      ? ((Qt = `${W.VerticalLineSliderHandle} SliderHandle`),
        ($t = `${W.VerticalLineSliderHandleContainer} SliderHandleContainer `))
      : (m == "leftparen" || m == "rightparen") &&
        ((Qt = v(
          W.ParenSliderHandle,
          m == "leftparen" ? W.Left : W.Right,
          "SliderHandle",
        )),
        ($t = v(
          W.ParenSliderHandleContainer,
          m == "leftparen" ? W.Left : W.Right,
          "SliderHandleContainer",
        )));
    let Qr = Jt(o);
    return (0, t1.jsx)(e7, {
      noFocusRing: !0,
      className: v(W.SliderControlPanelGroup, "SliderControlPanelGroup", s),
      navRef: M,
      onMouseDown: (Kt) => this.OnMouseDown(Kt.nativeEvent),
      onTouchStart: (Kt) => this.OnTouchStart(Kt.nativeEvent),
      onOKActionDescription: a ? null : y("#Slider_AdjustSlider"),
      focusable: D3,
      childFocusDisabled: a || !D3,
      onContextMenu: this.OnContextMenu,
      onOKButton: a ? () => s2.PlayNavSound(25) : void 0,
      onSecondaryButton: this.CanResetToDefault ? this.ResetToDefault : void 0,
      onSecondaryActionDescription: this.CanResetToDefault
        ? y("#ResetToDefault")
        : void 0,
      actionDescriptionMap: He,
      "aria-labelledby": d1["aria-labelledby"],
      children: (0, t1.jsxs)(S2, {
        role: "slider",
        "aria-valuenow": o,
        "aria-valuetext": Qr,
        ...d1,
        className: v(
          W.SliderControlAndNotches,
          a && W.Disabled,
          re && W.WithDefaultValue,
          re && Se && W.DefaultValueIsColorRange,
          re && Se && a1.side == "left" && W.DefaultValueColorLeft,
          re && Se && a1.side != "left" && W.DefaultValueColorRight,
          !ye && W.ForegroundInvisible,
        ),
        focusable: this.isKeyNavTarget,
        noFocusRing: !0,
        onFocus: this.OnInnerSliderFocus,
        onBlur: this.OnInnerSliderBlur,
        style: {
          "--normalized-slider-value": this.normalizedClampedValue,
          "--normalized-slider-default-value": Z3,
          "--normalized-slider-origin": a8,
          "--default-value-track-color": Se ? a1.trackForegroundColor : void 0,
          "--slider-extra-notch-padding": u ?? "0px",
        },
        ref: O3(this.m_refSlider, f),
        navRef: this.m_navRefSlider,
        onGamepadDirection: this.OnGamepadDirection,
        onOKButton: this.BlurInnerSlider,
        onOKActionDescription: null,
        onCancelButton: this.BlurInnerSlider,
        onCancelActionDescription: y("#ActionButtonLabelDone"),
        children: [
          (0, t1.jsxs)("div", {
            className: v(W.SliderControl, "SliderControl"),
            children: [
              (0, t1.jsx)("div", {
                className: v(
                  W.SliderTrack,
                  b != null && te && W.SliderHasNotches,
                  { [W.SliderTrackDark]: d2 === "dark" },
                  Z2,
                  "SliderTrack",
                ),
                style: this.props.trackStyleOverride,
              }),
              re &&
                Pe &&
                (0, t1.jsx)("div", {
                  className: W.DefaultValueTickContainer,
                  children: (0, t1.jsx)("div", {
                    className: W.DefaultValueTick,
                    children: (0, t1.jsx)(i3, { direction: "down" }),
                  }),
                }),
              this.validRange &&
                o != null &&
                !isNaN(o) &&
                this.showHandle &&
                (0, t1.jsx)("div", {
                  className: $t,
                  children: (0, t1.jsxs)("div", {
                    className: Qt,
                    ref: this.m_refHandle,
                    children: [
                      m == "leftparen" && (0, t1.jsx)(H7, {}),
                      m == "rightparen" && (0, t1.jsx)(x7, {}),
                    ],
                  }),
                }),
            ],
          }),
          (0, t1.jsx)(ws, {
            notchCount: E3,
            notchLabels: Xt,
            sliderValue: this.normalizedClampedValue,
            notchTicksVisible: te,
            renderNotch: J,
          }),
        ],
      }),
    });
  }
};
g([_], k1.prototype, "RecomputeSliderBounds", 1),
  g([_], k1.prototype, "SetDragMode", 1),
  g([_], k1.prototype, "OnGamepadDirection", 1),
  g([_], k1.prototype, "UpdateSliderValueForPosition", 1),
  g([_], k1.prototype, "OnWindowMouseMove", 1),
  g([_], k1.prototype, "OnWindowMouseUp", 1),
  g([_], k1.prototype, "OnMouseDown", 1),
  g([_], k1.prototype, "OnTouchStart", 1),
  g([_], k1.prototype, "OnWindowTouchMove", 1),
  g([_], k1.prototype, "OnWindowTouchEnd", 1),
  g([_], k1.prototype, "Complete", 1),
  g([_], k1.prototype, "BlurInnerSlider", 1),
  g([_], k1.prototype, "OnInnerSliderFocus", 1),
  g([_], k1.prototype, "OnInnerSliderBlur", 1),
  g([_], k1.prototype, "ResetToDefault", 1),
  g([_], k1.prototype, "OnContextMenu", 1);
function ws(t) {
  let {
      sliderValue: e,
      notchCount: r,
      notchLabels: o,
      notchTicksVisible: n,
      renderNotch: i,
    } = t,
    s = o ?? [];
  if (!r) return null;
  let a = !1,
    l = [];
  for (let u = 0; u < r; ++u) {
    let c = s.find((m) => m.notchIndex == u);
    c && (a = !0),
      l.push(
        (0, t1.jsx)(
          bs,
          {
            notchIndex: u,
            sliderValue: e,
            notchLabel: c,
            notchCount: r,
            notchTicksVisible: n,
            renderNotch: i,
          },
          u,
        ),
      );
  }
  return (0, t1.jsx)(e1, { className: v(W.SliderNotchContainer), children: l });
}
function bs(t) {
  let e = t.notchIndex <= (t.notchCount - 1) * t.sliderValue,
    r = t.notchCount <= 3 && !t.notchTicksVisible,
    o = r && t.notchIndex == 0,
    n = r && t.notchIndex == t.notchCount - 1,
    i = { ...t, alignLeftEnd: o, alignRightEnd: n, active: e };
  return (0, t1.jsx)("div", {
    className: v(W.SliderNotch, r && W.AlignToEnds),
    children: t.renderNotch ? t.renderNotch(i) : (0, t1.jsx)(Rs, { ...i }),
  });
}
function Rs(t) {
  let { alignLeftEnd: e, alignRightEnd: r, active: o } = t;
  return (0, t1.jsxs)(t1.Fragment, {
    children: [
      t.notchTicksVisible &&
        (0, t1.jsx)("div", {
          className: v(W.SliderNotchTick, o && W.TickActive),
        }),
      t.notchLabel &&
        (0, t1.jsx)("div", {
          className: v(
            W.SliderNotchLabel,
            e && W.AlignToLeft,
            r && W.AlignToRight,
          ),
          children: t.notchLabel?.label,
        }),
    ],
  });
}
var Jf = P1.forwardRef(function (e, r) {
  let {
    label: o,
    labelIndex: n,
    xOffset: i,
    onResize: s,
    OnMouseDown: a,
    OnTouchStart: l,
  } = e;
  P1.useEffect(() => {
    s(n);
  }, [s, n]);
  let u = P1.useCallback(
      (f) => {
        s(n);
      },
      [s, n],
    ),
    c = J8(u),
    m = i2(c, r);
  return (0, t1.jsx)("div", {
    className: W.CompoundSliderSubSliderLabel,
    ref: m,
    onMouseDown: a,
    onTouchStart: l,
    style: { transform: `translateX(${i}px)` },
    children: (0, t1.jsx)("div", {
      className: W.CompoundSliderSubSliderLabelInternal,
      children: o,
    }),
  });
});
var Nt = p(R());
var $2 = p(L()),
  wr = Nt.forwardRef(function (e, r) {
    let {
        value: o,
        onChange: n,
        disabled: i,
        className: s,
        focusable: a,
        children: l,
        navRef: u,
        ...c
      } = e,
      m = () => {
        if (!i && n) {
          let f = !o;
          n(f), s2.PlayNavSound(f ? 16 : 17);
        }
      };
    return (0, $2.jsxs)(S2, {
      ...c,
      noFocusRing: !0,
      className: v(s, D.Toggle, { [D.Disabled]: !!i, [D.On]: !!o }),
      onClick: m,
      ref: r,
      navRef: u,
      focusable: a,
      role: "checkbox",
      "aria-checked": !!o,
      children: [
        (0, $2.jsx)("div", { className: D.ToggleRail }),
        (0, $2.jsx)("div", { className: D.ToggleSwitch }),
        l,
      ],
    });
  });
function ys(t) {
  let e = !!t.disabled,
    { actionDescriptions: r, gamepadEvents: o } = T8(t),
    n = Nt.useId();
  return (0, $2.jsx)($e, {
    accessibilityId: n,
    className: t.className,
    disabled: e,
    label: t.label,
    icon: t.icon,
    description: t.description,
    explainer: t.explainer,
    explainerTitle: t.explainerTitle,
    padding: t.padding,
    bottomSeparator: t.bottomSeparator,
    highlightOnFocus: t.highlightOnFocus,
    inlineWrap: "keep-inline",
    onContextMenu: t.onContextMenu,
    actionDescriptionMap: r,
    onClick: t.onClick,
    indentLevel: t.indentLevel,
    ...o,
    children: (0, $2.jsx)(wr, {
      ...P3(n, t),
      onChange: t.OnToggleChange,
      value: t.checked,
      disabled: e,
      navRef: t.navRef,
    }),
  });
}
var Wt = class extends Y2 {
  OnToggleChange(e) {
    !this.props.disabled && e !== this.checked && this.Toggle();
  }
  render() {
    return (0, $2.jsx)(ys, {
      ...this.props,
      OnToggleChange: this.OnToggleChange,
      checked: this.checked,
    });
  }
};
g([_], Wt.prototype, "OnToggleChange", 1);
var J6 = p(L());
function gs(t) {
  let { children: e, bCenterVertically: r, refElem: o, ...n } = t,
    i = v(
      D.GamepadDialogContent,
      "DialogContent _DialogLayout",
      t.className,
      r && " _DialogCenterVertically",
    ),
    { ref: s, navRef: a } = K8(),
    l = i2(o, s);
  return (0, J6.jsx)(e1, {
    ...n,
    className: i,
    ref: l,
    navRef: a,
    children: (0, J6.jsx)(e1, {
      className: v(
        D.GamepadDialogContent_InnerWidth,
        "DialogContent_InnerWidth",
      ),
      children: e,
    }),
  });
}
var Hr = p(R());
var X = {
  LinkRegionDragBox: "dn5u8WKMixs-",
  EdgeDown: "_9e2jdlnl7XU-",
  LinkRegionGridBox: "_9WOgw6Z-ZoA-",
  LinkRegionEdge: "hk74AYqqtUs-",
  TopLeft: "WgaljIymj2A-",
  Top: "YBzzuPt8Dwk-",
  TopRight: "kmkLLvwkk-U-",
  Left: "-gpPa04TqTA-",
  Middle: "EPQJoOqyq8w-",
  LinkRegionDelete: "zq6rif-7bDQ-",
  LinkRegionSettings: "PMJGgjvW2Cc-",
  Right: "Cd2RQMtXxO0-",
  BottomLeft: "lvpxrXvIliU-",
  Bottom: "_1wpSGd2oHi0-",
  BottomRight: "iwhim1ZkYaU-",
  topleft: "L1tyegkYUEY-",
  top: "YNWhuAOzmng-",
  topright: "IRdgleYOBp8-",
  left: "_6gFn4BrP0u0-",
  right: "_2x7tqxSbAtw-",
  bottomleft: "S8qGVDDLYoU-",
  bottom: "BTL8bNZYLC8-",
  bottomright: "xZdukqzLZ10-",
  middle: "YFW4dD77tlc-",
  LinkRegionButtonContainer: "Dti1QxCJUV4-",
  DialogButton: "_8aDNU0HdUzY-",
  LinkRegionInfo: "PTpWMejZkIg-",
  LinkText: "rJ622HYvBeU-",
};
var n1 = p(L());
var B1 = class extends Hr.Component {
  m_rectLinkRegion;
  m_elLinkRegionBox;
  m_nLocalOffsetXPct;
  m_nLocalOffsetYPct;
  m_fnMouseUp = null;
  m_fnMouseMove = null;
  m_listeners = new w8();
  m_strDescription = "";
  m_aspectRatio = 1;
  componentWillUnmount() {
    this.m_listeners.Unregister();
  }
  constructor(e) {
    super(e),
      (this.state = {
        curLeftPosPct: this.props.xPosPct,
        curTopPosPct: this.props.yPosPct,
        curRightPosPct: 100 - (this.props.widthPct + this.props.xPosPct),
        curBottomPosPct: 100 - (this.props.yPosPct + this.props.heightPct),
        curWidthPct: this.props.widthPct,
        curHeightPct: this.props.heightPct,
        EdgeDown: void 0,
        text_link_url: this.props.link_url,
        text_link_description: this.props.link_description,
        bEditingLink: !1,
        valid_link: this.validateUrl(this.props.link_url),
      }),
      (this.m_strDescription = this.props.link_description ?? ""),
      (this.m_aspectRatio =
        this.props.heightPct > 0 && this.props.widthPct > 0
          ? this.props.widthPct / this.props.heightPct
          : 1);
  }
  LinkRegionBoxRef(e) {
    this.m_elLinkRegionBox = e;
  }
  OnMouseDown(e, r) {
    this.m_elLinkRegionBox?.parentElement &&
      this.m_elLinkRegionBox.ownerDocument.defaultView &&
      ((this.m_fnMouseUp = (o) => {
        this.OnMouseUp(o, r);
      }),
      (this.m_fnMouseMove = (o) => {
        this.OnMouseMove(o, r);
      }),
      this.setState({ EdgeDown: r }),
      (this.m_rectLinkRegion =
        this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
      (this.m_nLocalOffsetXPct =
        ((e.clientX - this.m_rectLinkRegion.left) /
          (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
          100 -
        this.state.curLeftPosPct),
      (this.m_nLocalOffsetYPct =
        ((e.clientY - this.m_rectLinkRegion.top) /
          (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
          100 -
        this.state.curTopPosPct),
      this.m_listeners.AddEventListener(
        this.m_elLinkRegionBox.ownerDocument.defaultView,
        "mousemove",
        this.m_fnMouseMove,
      ),
      this.m_listeners.AddEventListener(
        this.m_elLinkRegionBox.ownerDocument.defaultView,
        "mouseup",
        this.m_fnMouseUp,
      )),
      e.preventDefault(),
      e.stopPropagation();
  }
  OnMouseMove(e, r) {
    if (this.state.EdgeDown !== void 0) {
      switch ((e.shiftKey && this.m_fnMouseUp(), r)) {
        case "left": {
          this.UpdateState({ curLeftPosPct: this.CalcLeftEdge(e.clientX) });
          break;
        }
        case "right": {
          this.UpdateState({ curRightPosPct: this.CalcRightEdge(e.clientX) });
          break;
        }
        case "top": {
          this.UpdateState({ curTopPosPct: this.CalcTopEdge(e.clientY) });
          break;
        }
        case "bottom": {
          this.UpdateState({ curBottomPosPct: this.CalcBottomEdge(e.clientY) });
          break;
        }
        case "topleft": {
          this.UpdateState({
            curTopPosPct: this.CalcBottomEdge(e.clientY),
            curLeftPosPct: this.CalcLeftEdge(e.clientX),
          });
          break;
        }
        case "topright": {
          this.UpdateState({
            curTopPosPct: this.CalcTopEdge(e.clientY),
            curRightPosPct: this.CalcRightEdge(e.clientX),
          });
          break;
        }
        case "bottomleft": {
          this.UpdateState({
            curLeftPosPct: this.CalcLeftEdge(e.clientX),
            curBottomPosPct: this.CalcBottomEdge(e.clientY),
          });
          break;
        }
        case "bottomright": {
          this.UpdateState({
            curRightPosPct: this.CalcRightEdge(e.clientX),
            curBottomPosPct: this.CalcBottomEdge(e.clientY),
          });
          break;
        }
        case "middle": {
          let o = S1(
              this.CalcLeftEdge(e.clientX),
              0,
              100 - this.state.curWidthPct,
            ),
            n = 100 - (o + this.state.curWidthPct),
            i = S1(
              this.CalcTopEdge(e.clientY),
              0,
              100 - this.state.curHeightPct,
            ),
            s = 100 - (i + this.state.curHeightPct),
            a = {
              curLeftPosPct: o,
              curRightPosPct: n,
              curTopPosPct: i,
              curBottomPosPct: s,
            };
          this.setState(a);
          break;
        }
        default:
          break;
      }
      e.preventDefault(), e.stopPropagation();
    }
  }
  IsValidPct(e) {
    return e >= 0 && e <= 100;
  }
  UpdateState(e) {
    let r =
        e.curTopPosPct !== void 0 ? e.curTopPosPct : this.state.curTopPosPct,
      o =
        e.curBottomPosPct !== void 0
          ? e.curBottomPosPct
          : this.state.curBottomPosPct,
      n =
        e.curLeftPosPct !== void 0 ? e.curLeftPosPct : this.state.curLeftPosPct,
      i =
        e.curRightPosPct !== void 0
          ? e.curRightPosPct
          : this.state.curRightPosPct,
      s = S1(
        100 - i - n,
        this.props.widthMinPct || 0,
        this.props.widthMaxPct || 100,
      ),
      a = S1(
        100 - o - r,
        this.props.heightMinPct || 0,
        this.props.heightMaxPct || 100,
      );
    this.props.bLockAspectRatio &&
      (e.curLeftPosPct !== void 0 || e.curRightPosPct !== void 0
        ? (a = s / this.m_aspectRatio)
        : (s = a * this.m_aspectRatio)),
      e.curLeftPosPct !== void 0 ? (n = 100 - i - s) : (i = 100 - (n + s)),
      e.curTopPosPct !== void 0 ? (r = 100 - o - a) : (o = 100 - (r + a));
    let l = 100 - i - n,
      u = 100 - o - r;
    this.IsValidPct(n) &&
      this.IsValidPct(i) &&
      this.IsValidPct(r) &&
      this.IsValidPct(o) &&
      this.IsValidPct(l) &&
      this.IsValidPct(u) &&
      this.setState({
        curLeftPosPct: n,
        curRightPosPct: i,
        curTopPosPct: r,
        curBottomPosPct: o,
      });
  }
  GetXPercent(e) {
    return this.m_rectLinkRegion
      ? ((e - this.m_rectLinkRegion.left) /
          (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
          100 -
          (this.m_nLocalOffsetXPct ?? 0)
      : 0;
  }
  GetYPercent(e) {
    return this.m_rectLinkRegion
      ? ((e - this.m_rectLinkRegion.top) /
          (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
          100 -
          (this.m_nLocalOffsetYPct ?? 0)
      : 0;
  }
  CalcLeftEdge(e) {
    return S1(this.GetXPercent(e), 0, 100);
  }
  CalcRightEdge(e) {
    return S1(100 - (this.GetXPercent(e) + this.state.curWidthPct), 0, 100);
  }
  CalcTopEdge(e) {
    return S1(this.GetYPercent(e), 0, 100);
  }
  CalcBottomEdge(e) {
    return S1(100 - (this.GetYPercent(e) + this.state.curHeightPct), 0, 100);
  }
  OnMouseUp(e, r) {
    this.setState({
      curWidthPct: 100 - this.state.curRightPosPct - this.state.curLeftPosPct,
    }),
      this.setState({
        curHeightPct:
          100 - this.state.curBottomPosPct - this.state.curTopPosPct,
      }),
      this.setState({ EdgeDown: void 0 }),
      this.props.updateFn(this.props.index, {
        xPosPct: this.state.curLeftPosPct,
        yPosPct: this.state.curTopPosPct,
        widthPct: this.state.curWidthPct,
        heightPct: this.state.curHeightPct,
        link_url: this.state.text_link_url,
        link_description: this.state.text_link_description,
      }),
      this.m_listeners.Unregister();
  }
  async HandleDelete() {
    this.props.deleteFn && this.props.deleteFn(this.props.index);
  }
  OnSetLinkURLChange(e) {
    this.setState({
      text_link_url: e.target.value,
      valid_link: this.validateUrl(e.target.value),
    });
  }
  OnSetLinkDescriptionChange(e) {
    this.setState({ text_link_description: e.target.value });
  }
  validateUrl(e) {
    return e != null
      ? /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
          e,
        )
      : !1;
  }
  OnSaveLink() {
    (this.m_strDescription = this.state.text_link_description ?? ""),
      this.setState({ bEditingLink: !this.state.bEditingLink }),
      this.props.updateFn(this.props.index, {
        xPosPct: this.state.curLeftPosPct,
        yPosPct: this.state.curTopPosPct,
        widthPct: this.state.curWidthPct,
        heightPct: this.state.curHeightPct,
        link_url: this.state.text_link_url,
        link_description: this.state.text_link_description,
      });
  }
  OnEditLink() {
    this.setState({ bEditingLink: !this.state.bEditingLink });
  }
  render() {
    let e = {
        left: this.state.curLeftPosPct + "%",
        top: this.state.curTopPosPct + "%",
        right: this.state.curRightPosPct + "%",
        bottom: this.state.curBottomPosPct + "%",
      },
      r = X.LinkRegionDragBox;
    return (
      this.state.EdgeDown != null &&
        (r += ` ${X.EdgeDown} ` + X[this.state.EdgeDown]),
      (0, n1.jsxs)("div", {
        className: r,
        style: e,
        ref: this.LinkRegionBoxRef,
        draggable: !1,
        children: [
          (0, n1.jsxs)("div", {
            className: X.LinkRegionGridBox,
            children: [
              (0, n1.jsx)("div", {
                className: `${X.LinkRegionEdge} ${X.TopLeft}`,
                onMouseDown: (o) => {
                  this.OnMouseDown(o, "topleft");
                },
                draggable: !1,
              }),
              (0, n1.jsx)("div", {
                className: `${X.LinkRegionEdge} ${X.Top}`,
                onMouseDown: (o) => {
                  this.OnMouseDown(o, "top");
                },
              }),
              (0, n1.jsx)("div", {
                className: `${X.LinkRegionEdge} ${X.TopRight}`,
                onMouseDown: (o) => {
                  this.OnMouseDown(o, "topright");
                },
                draggable: !1,
              }),
              (0, n1.jsx)("div", {
                className: `${X.LinkRegionEdge} ${X.Left}`,
                onMouseDown: (o) => {
                  this.OnMouseDown(o, "left");
                },
                draggable: !1,
              }),
              (0, n1.jsxs)("div", {
                className: `${X.LinkRegionEdge} ${X.Middle}`,
                onMouseDown: (o) => {
                  this.OnMouseDown(o, "middle");
                },
                draggable: !1,
                children: [
                  this.props.deleteFn &&
                    (0, n1.jsx)("div", {
                      className: X.LinkRegionDelete,
                      onClick: this.HandleDelete,
                      children: (0, n1.jsx)(G2, {}),
                    }),
                  !this.props.bDisableLink &&
                    (0, n1.jsx)("div", {
                      className: X.LinkRegionSettings,
                      onClick: this.OnEditLink,
                      children: (0, n1.jsx)(z8, {}),
                    }),
                  (0, n1.jsxs)("div", {
                    className: X.LinkText,
                    children: [" ", this.m_strDescription, " "],
                  }),
                ],
              }),
              (0, n1.jsx)("div", {
                className: `${X.LinkRegionEdge} ${X.Right}`,
                onMouseDown: (o) => {
                  this.OnMouseDown(o, "right");
                },
                draggable: !1,
              }),
              (0, n1.jsx)("div", {
                className: `${X.LinkRegionEdge} ${X.BottomLeft}`,
                onMouseDown: (o) => {
                  this.OnMouseDown(o, "bottomleft");
                },
                draggable: !1,
              }),
              (0, n1.jsx)("div", {
                className: `${X.LinkRegionEdge} ${X.Bottom}`,
                onMouseDown: (o) => {
                  this.OnMouseDown(o, "bottom");
                },
                draggable: !1,
              }),
              (0, n1.jsx)("div", {
                className: `${X.LinkRegionEdge} ${X.BottomRight}`,
                onMouseDown: (o) => {
                  this.OnMouseDown(o, "bottomright");
                },
                draggable: !1,
              }),
            ],
          }),
          this.state.bEditingLink &&
            (0, n1.jsxs)("div", {
              className: X.LinkRegionInfo,
              children: [
                (0, n1.jsx)(_2, {
                  className: X.LinkRegionInput,
                  type: "text",
                  name: "link_url",
                  value: this.state.text_link_url,
                  label: y("#SteamTV_LinkURL"),
                  placeholder: "https://www.example.com",
                  onChange: this.OnSetLinkURLChange,
                  mustBeURL: !0,
                }),
                (0, n1.jsx)(_2, {
                  className: X.LinkRegionInput,
                  type: "text",
                  name: "link_description",
                  value: this.state.text_link_description,
                  label: y("#SteamTV_LinkDescription"),
                  placeholder: y("#SteamTV_LinkDescription_Placeholder"),
                  onChange: this.OnSetLinkDescriptionChange,
                }),
                (0, n1.jsxs)("div", {
                  className: X.LinkRegionButtonContainer,
                  children: [
                    (0, n1.jsxs)(x1, {
                      disabled: !this.state.valid_link,
                      onClick: this.OnSaveLink,
                      children: [" ", y("#Button_OK"), " "],
                    }),
                    (0, n1.jsxs)(x1, {
                      onClick: this.OnEditLink,
                      children: [" ", y("#Button_Cancel")],
                    }),
                  ],
                }),
              ],
            }),
        ],
      })
    );
  }
};
g([_], B1.prototype, "LinkRegionBoxRef", 1),
  g([_], B1.prototype, "OnMouseDown", 1),
  g([_], B1.prototype, "OnMouseMove", 1),
  g([_], B1.prototype, "OnMouseUp", 1),
  g([_], B1.prototype, "HandleDelete", 1),
  g([_], B1.prototype, "OnSetLinkURLChange", 1),
  g([_], B1.prototype, "OnSetLinkDescriptionChange", 1),
  g([_], B1.prototype, "OnSaveLink", 1),
  g([_], B1.prototype, "OnEditLink", 1),
  (B1 = g([F1], B1));
var we = p(R()),
  xr = p(P2());
var Q6 = p(L());
function Vr(t) {
  let { active: e, children: r } = t,
    o = le() || Oe(window),
    n = C9(),
    [i, s] = we.useState(null),
    [a, l] = we.useState(!1),
    u = we.useRef();
  if (
    (we.useEffect(() => {
      if (e) {
        let m = o.ShowPortalModal(),
          f = m.OnElementReadyCallbacks.Register(s),
          k = m.OnModalActiveCallbacks.Register(l);
        return (
          (u.current = m.key),
          () => {
            s(null), l(!1), m.Close(), f.Unregister(), k.Unregister();
          }
        );
      } else return;
    }, [o, e]),
    !i || !e)
  )
    return null;
  let c = (0, Q6.jsx)(Ct, { children: r });
  return (
    n && (c = (0, Q6.jsx)(n, { active: a, modalKey: u.current, children: c })),
    xr.createPortal(c, i)
  );
}
var $6 = p(R()),
  Hs = p(P2());
var Ps = p(R());
var Ss = p(L());
var K6 = p(L());
var xs = p(L());
var e8 = p(R());
var Br = p(L());
var Tr = "ri9Np1Nhft4-";
var Er = "VlE-fYMAgdY-";
var Ar = "_8ZyCGZBk5p4-";
var Y1 = p(L()),
  Ut = class extends Dr.Component {
    state = {
      region: {
        xPosPct: 0,
        yPosPct: 0,
        widthPct: (this.GetDestWidth() / this.props.uploadFile.width) * 100,
        heightPct: (this.GetDestHeight() / this.props.uploadFile.height) * 100,
      },
    };
    async OnCrop() {
      let e = this.props.uploadFile.GetCanvasImageSource();
      e &&
        (await Bs(
          this.props.uploadFile,
          e,
          (this.state.region.xPosPct / 100) * this.props.uploadFile.width,
          (this.state.region.yPosPct / 100) * this.props.uploadFile.height,
          (this.state.region.widthPct / 100) * this.props.uploadFile.width,
          (this.state.region.heightPct / 100) * this.props.uploadFile.height,
          this.GetDestWidth(),
          this.GetDestHeight(),
          this.props.fileType,
        )),
        this.props.closeModal?.();
    }
    UpdateCrop(e, r) {
      this.setState({ region: r });
    }
    GetDestWidth() {
      let { uploadFile: e, forceResolution: r } = this.props;
      if (r) return r.width;
      let o = e.GetCurrentImageOption();
      return o ? D1[o.artworkType].width : 0;
    }
    GetDestHeight() {
      let { uploadFile: e, forceResolution: r } = this.props;
      if (r) return r.width;
      let o = e.GetCurrentImageOption();
      return o ? D1[o.artworkType].height : 0;
    }
    GetLargestBoxThatFits(e, r, o, n) {
      let i = o,
        s = (i * r) / Math.max(e, 1);
      return (
        s > n && ((s = n), (i = (s * e) / Math.max(r, 1))),
        { width: i, height: s }
      );
    }
    GetPreviewWindowStyle() {
      let { region: e } = this.state,
        r = this.GetLargestBoxThatFits(
          this.GetDestWidth(),
          this.GetDestHeight(),
          500,
          150,
        ),
        o = r.width,
        n = r.height,
        i = 1 / Math.max(e.widthPct / 100, 1e-4),
        s = 1 / Math.max(e.heightPct / 100, 1e-4),
        a = (this.props.uploadFile.width * e.xPosPct) / 100,
        l = (this.props.uploadFile.height * e.yPosPct) / 100,
        u = (o * i) / this.props.uploadFile.width,
        c = (n * s) / this.props.uploadFile.height,
        m = -a * u,
        f = -l * c;
      return {
        width: o,
        height: n,
        backgroundPosition: `${m}px ${f}px`,
        backgroundSize: `${100 * i}% ${100 * s}%`,
        backgroundImage: `url(${this.props.uploadFile.dataUrl})`,
      };
    }
    render() {
      let e = (this.GetDestWidth() / this.props.uploadFile.width) * 100,
        r = (this.GetDestHeight() / this.props.uploadFile.height) * 100,
        o = this.GetLargestBoxThatFits(
          this.props.uploadFile.width,
          this.props.uploadFile.height,
          800,
          500,
        );
      return (0, Y1.jsx)(Q2, {
        onEscKeypress: this.props.closeModal,
        bDisableBackgroundDismiss: !0,
        children: (0, Y1.jsxs)("div", {
          className: v("DialogContent", "_DialogCenterVertically"),
          children: [
            (0, Y1.jsx)(D0, {
              children: y(
                "#ImageUpload_CropModalTitleDims",
                this.GetDestWidth(),
                this.GetDestHeight(),
              ),
            }),
            (0, Y1.jsx)("div", {
              className: v("DialogBodyText"),
              children: y("#ImageUpload_CropModalDescription"),
            }),
            (0, Y1.jsxs)("div", {
              className: Tr,
              style: { width: o.width, height: o.height },
              children: [
                (0, Y1.jsx)("img", {
                  style: {
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  },
                  src: this.props.uploadFile.dataUrl,
                }),
                (0, Y1.jsx)(B1, {
                  bLockAspectRatio: !0,
                  bDisableLink: !0,
                  index: 0,
                  updateFn: this.UpdateCrop,
                  xPosPct: 0,
                  yPosPct: 0,
                  widthMinPct: e,
                  heightMinPct: r,
                  widthPct: e,
                  heightPct: r,
                }),
              ],
            }),
            (0, Y1.jsxs)("div", {
              className: Er,
              children: [
                (0, Y1.jsx)("div", {
                  className: Ar,
                  children: y("#ImageUpload_CropPreview"),
                }),
                (0, Y1.jsx)("div", { style: this.GetPreviewWindowStyle() }),
              ],
            }),
            (0, Y1.jsx)(ge, {
              onClick: this.OnCrop,
              children: y("#ImageUpload_CropAndContinue"),
            }),
          ],
        }),
      });
    }
  };
g([_], Ut.prototype, "OnCrop", 1), g([_], Ut.prototype, "UpdateCrop", 1);
async function Bs(t, e, r, o, n, i, s, a, l) {
  return new Promise((u, c) => {
    let m = t8(l);
    if (!m) {
      c("Invalid format provided");
      return;
    }
    let f = document.createElement("canvas");
    (f.width = s),
      (f.height = a),
      f.getContext("2d")?.drawImage(e, r, o, n, i, 0, 0, s, a),
      f.toBlob((w) => {
        let A = f.toDataURL(m);
        if (l !== 3 && A.startsWith("data:image/png")) {
          c("Unable to encode into the requested file format");
          return;
        }
        if (!w) {
          c("Unable to apply crop into image");
          return;
        }
        (t.file = z3(w, t.filename)),
          (t.width = s),
          (t.height = a),
          (t.dataUrl = A),
          (t.uploadTime = Date.now()),
          (t.bCropped = !0),
          u();
      });
  });
}
function t8(t) {
  switch (t) {
    case 3:
      return "image/png";
    case 1:
      return "image/jpeg";
  }
}
function Zr(t) {
  let e = t.toLowerCase();
  if (e.endsWith(".jpg")) return "image/jpeg";
  if (e.endsWith(".png")) return "image/png";
  if (e.endsWith(".gif")) return "image/gif";
  if (e.endsWith(".mp4")) return "video/mp4";
  if (e.endsWith(".webm")) return "video/webm";
  if (e.endsWith(".srt")) return "text/srt";
  if (e.endsWith(".vtt")) return "text/vtt";
  if (e.endsWith(".webp")) return "image/webp";
}
function zt(t) {
  switch (t) {
    case 1:
      return ".jpg";
    case 2:
      return ".gif";
    case 3:
      return ".png";
    case 5:
      return ".webm";
    case 4:
      return ".mp4";
    case 7:
      return ".srt";
    case 6:
      return ".vtt";
    case 10:
      return ".webp";
  }
}
function Ts(t) {
  let e = F3(),
    r = new Image();
  return (
    (r.onload = () => e.resolve(r)),
    (r.onerror = (o) => {
      console.error("LoadImage failed to load the image, details", o),
        e.resolve(void 0);
    }),
    (r.src = t),
    e.promise
  );
}
function Es(t) {
  let e = F3(),
    r = document.createElement("video");
  return (
    (r.preload = "metadata"),
    r.addEventListener("loadedmetadata", () => e.resolve(r)),
    (r.onerror = (o) => {
      console.error("LoadVideo failed to load the video, details", o),
        e.resolve(void 0);
    }),
    (r.src = t),
    e.promise
  );
}
function Ir(t) {
  return t.startsWith("image/");
}
function r8(t) {
  return t.startsWith("video/");
}
async function Gr(t, e) {
  if (e) return Es(URL.createObjectURL(t));
  {
    let r = F3(),
      o = new FileReader();
    (o.onload = () => r.resolve(o.result ?? void 0)),
      (o.onerror = () => {
        console.error(
          "GetMediaElementFromFile failed to load the image, details",
          o.error,
        ),
          r.resolve(void 0);
      }),
      o.readAsDataURL(t);
    let n = await r.promise;
    return n ? Ts(n.toString()) : void 0;
  }
}
function Fr(t) {
  return t
    ? t instanceof HTMLVideoElement
      ? { width: t.videoWidth, height: t.videoHeight }
      : { width: t.width, height: t.height }
    : { width: 0, height: 0 };
}
var As = 960,
  Ds = 311,
  Zs = 480,
  Is = 156,
  B3 = class extends f2 {
    m_rgImageOptions;
    m_currentImageOption = void 0;
    m_currentImageOptionKey = void 0;
    constructor(e, r, o, n, i, s) {
      super(e, r, o, i, s), l1(this), (this.m_rgImageOptions = n);
    }
    IsValidAssetType(e, r) {
      let o = 0,
        n = 0,
        i = !1,
        s =
          !this.m_rgImageOptions ||
          this.m_rgImageOptions.length === 0 ||
          this.m_rgImageOptions.some(
            (M) => M.sKey == this.GetCurrentImageOption()?.sKey,
          );
      if (e) (o = e.width), (n = e.height), (i = !0);
      else if (this.GetCurrentImageOption()) {
        let M = D1[this.GetCurrentImageOption().artworkType];
        M &&
          ((o = M.width), (n = M.height), (i = !M.bDisableEnforceDimensions));
      }
      let a = this.width >= o && this.height >= n,
        l = i ? this.width === o && this.height === n : a,
        u = r && r != this.fileType,
        c =
          this.m_rgImageOptions && this.m_rgImageOptions.length > 0
            ? g6(
                this.fileType,
                this.m_rgImageOptions?.map((M) => M.artworkType) || [],
              ).length == 0
            : !1,
        m = !!t8(this.fileType),
        f = "",
        k = !1;
      return (
        s
          ? c
            ? (f = y("#ImageUpload_InvalidFileType"))
            : u
              ? (f = y("#ImageUpload_InvalidFormat", zt(r) ?? ""))
              : !l && !m
                ? (f = y("#ImageUpload_InvalidResolution", o, n))
                : a
                  ? !l &&
                    m &&
                    ((f = y("#ImageUpload_InvalidDimensions", o, n)), (k = !0))
                  : (f = y("#ImageUpload_TooSmall", o, n))
          : (f = y("#ImageUpload_InvalidFormatSelected")),
        { error: f, needsCrop: k, match: this.GetCurrentImageOption() }
      );
    }
    BSupportsLanguages() {
      return !0;
    }
    ComputeDefaultImageOption() {
      if (!this.m_rgImageOptions || this.m_rgImageOptions.length == 0) return;
      let e = g6(
          this.fileType,
          this.m_rgImageOptions?.map((o) => o.artworkType),
        ),
        r = Wr(this.width, this.height, e, !1);
      if ((r === void 0 && (r = Wr(this.width, this.height, e, !0)), r)) {
        let o = this.m_rgImageOptions.find((n) => n.artworkType == r);
        if (o) return o;
      }
      return this.m_rgImageOptions[0];
    }
    get ImageOptions() {
      return this.m_rgImageOptions;
    }
    GetCurrentImageOptionKey() {
      return this.m_currentImageOptionKey;
    }
    GetCurrentImageOption() {
      return this.m_currentImageOption ?? this.ComputeDefaultImageOption();
    }
    SetCurrentImageOption(e) {
      (this.m_currentImageOption = e), (this.m_currentImageOptionKey = e?.sKey);
    }
  };
g([O], B3.prototype, "m_currentImageOption", 2),
  g([O], B3.prototype, "m_currentImageOptionKey", 2);
var be = class extends B3 {
  bCropped = !1;
  localizedImageGroupPrimaryImage;
  media;
  constructor(e, r, o, n, i, s, a, l) {
    super(e, r, o, n, i, s),
      l1(this),
      (this.media = a),
      (this.localizedImageGroupPrimaryImage = l);
  }
  IsValidAssetType(e, r) {
    return (
      (r = r ?? this.localizedImageGroupPrimaryImage?.file_type),
      super.IsValidAssetType(e, r)
    );
  }
  GetCanvasImageSource() {
    return this.media;
  }
  BIsOriginalMinimumDimensions(e) {
    return h6(this.media?.width ?? 0, this.media?.height ?? 0, e.artworkType);
  }
  FileTypeMatchesImageTypes(e) {
    return f6(this.fileType, e.artworkType);
  }
  BIsVideo() {
    return H0.includes(this.fileType);
  }
  GetResizeDimension() {
    return Gs(this.GetCurrentImageOption()?.artworkType);
  }
};
g([O], be.prototype, "bCropped", 2);
function Gs(t) {
  if (t === "background")
    return [
      { width: As, height: Ds },
      { width: Zs, height: Is },
    ];
  if (t === "capsule")
    return [{ width: D1[t].width / 2, height: D1[t].height / 2 }];
  if (t === "spotlight")
    return [{ width: D1[t].width / 2, height: D1[t].height / 2 }];
}
function Wr(t, e, r, o = !1) {
  if (r) {
    for (let n of r) if (o ? h6(t, e, n) : x0(t, e, n)) return n;
  }
}
var Or = p(Ye()),
  o8 = class {},
  jt = class extends o8 {
    m_allCancelTokens = new Array();
    async UploadAllImages(e, r) {
      let o = this.GetUploadImages(),
        n = this.BGetUploadsAreInSerial(),
        i = o.filter((l) => {
          let u = l.IsValidAssetType(e, r);
          return l.status === "pending" && !u.error && !u.needsCrop;
        });
      for (let l of i) l.status = "uploading";
      let s = [];
      for (let l of i) {
        let u = Or.default.CancelToken.source();
        this.m_allCancelTokens.push(u);
        let c = this.UploadSingleImage(
          l,
          l.filename,
          l.language ?? -1,
          u.token,
        );
        s.push({ image: l, promise: c }), n && (await c);
      }
      n || (await Promise.all(s.map((l) => l.promise)));
      let a = [];
      for (let l of s) {
        let u = await l.promise,
          c = l.image;
        a.push({ bSuccess: u.bSuccess, image: c, uploadResult: u.result }),
          u.bSuccess
            ? (c.status = "success")
            : ((c.status = "failed"), (c.message = u.strErrorMessage ?? ""));
      }
      return a;
    }
    CancelAllUploads() {
      for (let e of this.m_allCancelTokens)
        e.cancel(y("#ImageUpload_CancelRequest"));
      this.m_allCancelTokens = new Array();
    }
  };
function Nr(t, e = 0, r = !0) {
  let o = t.lastIndexOf(".");
  o != -1 && (t = t.slice(0, o).toLowerCase());
  let n = null,
    i = 0;
  t.endsWith("korean") && ((n = 4), (i = 6));
  for (let s = 0; s < 31; ++s) {
    let a = m8(s);
    if (a.length <= i) continue;
    if (t.endsWith(a)) {
      let u = !r;
      if (r && t.length > a.length + 2) {
        let c = t[t.length - a.length - 1];
        u = !new RegExp("\\p{Alphabetic}|\\p{Number}", "u").test(c);
      }
      u && ((n = s), (i = a.length));
    }
    let l = W3(s);
    l.length <= i || (t.endsWith(l) && ((n = s), (i = l.length)));
  }
  return {
    language: n ?? e,
    baseFilename: i > 0 ? t.substring(0, t.length - i - 1) : t,
  };
}
function Os(t) {
  return t?.map((e) => {
    let r = D1[e];
    return (
      Y(!!r, `Artwork Type not in Map ${e}`),
      {
        sKey: e,
        width: r.width,
        height: r.height,
        bEnforceDimensions: !r.bDisableEnforceDimensions,
        artworkType: e,
        bHiddenFromDropdown: e === "hero",
        fnGetLabelText() {
          return this.artworkType == "spotlight"
            ? y("#EventEditor_ArtworkType_store_spotlight")
            : y("#EventEditor_ArtworkType_" + this.artworkType);
        },
      }
    );
  });
}
var p2 = class extends jt {
  m_filesToUpload = O.array();
  m_filesCompleted = O.array();
  m_clanImagesV2;
  m_clanSteamID;
  m_rgImageOptions;
  m_localizedImageGroupPrimaryImage;
  m_lastError = void 0;
  constructor(e, r, o, n) {
    super(),
      l1(this),
      (this.m_clanSteamID = e),
      (this.m_rgImageOptions = Os(r)),
      (this.m_localizedImageGroupPrimaryImage = o),
      (this.m_clanImagesV2 = n ?? !1);
  }
  GetClanSteamID() {
    return this.m_clanSteamID;
  }
  async AddImage(e, r = 0) {
    let { language: o } = Nr(e.name, r);
    return this.AddImageForLanguage(e, o);
  }
  async AddImageForLanguage(e, r) {
    if (!Ir(e.type) && !(C8.is_support && r8(e.type))) return !1;
    let o = await Gr(e, r8(e.type));
    if (!o) return !1;
    let n = new be(
      e,
      e.name,
      r,
      this.m_rgImageOptions,
      o.src,
      Fr(o),
      o,
      this.m_localizedImageGroupPrimaryImage,
    );
    return (this.m_filesToUpload = [...this.m_filesToUpload, n]), !0;
  }
  async AddExistingClanImage(e, r = 0) {
    let o = Je.GetHashAndExt(e);
    if (!o) return !1;
    let n = Je.GenerateEditableURLFromHashAndExt(this.m_clanSteamID, o),
      i = await (0, n8.default)({
        url: n,
        method: "GET",
        responseType: "blob",
      }),
      s = z3(i.data, e.file_name);
    return await this.AddImage(s, r);
  }
  DeleteUploadImageByIndex(e) {
    this.m_filesToUpload.splice(e, 1),
      (this.m_filesToUpload = [...this.m_filesToUpload]);
  }
  DeleteUploadImage(e) {
    let r = this.m_filesToUpload.findIndex(
      (o) => e.file == o.file && e.uploadTime == o.uploadTime,
    );
    r >= 0 && this.DeleteUploadImageByIndex(r);
  }
  ClearImages() {
    this.m_filesToUpload = O.array();
  }
  GetFilesUploaded() {
    return this.m_filesCompleted;
  }
  GetLastErrorFile() {
    return this.m_lastError;
  }
  GetCompletedFiles() {
    return this.m_filesCompleted.length;
  }
  GetTotalFiles() {
    return this.m_filesToUpload.length;
  }
  GetFilesToUpload() {
    return this.m_filesToUpload.map((e) => e.file);
  }
  GetUploadImages() {
    return this.m_filesToUpload;
  }
  BHasError() {
    return this.m_lastError != null;
  }
  BAllDone() {
    return (
      this.m_filesCompleted.length > 0 &&
      this.m_filesCompleted.length == this.m_filesToUpload.length
    );
  }
  BIsFileCompleted(e) {
    return this.m_filesCompleted.indexOf(e) != -1;
  }
  RetryAllFailedUploads() {
    this.CancelAllUploads(), this.UploadAllImages();
  }
  async handleUploadRefresh(e) {
    await v6.LoadClanImages(this.m_clanSteamID, !0, e);
  }
  BGetUploadsAreInSerial() {
    return !1;
  }
  async UploadSingleImage(e, r, o, n) {
    let i = e.file,
      s = e.GetCurrentImageOption(),
      a = e.GetResizeDimension(),
      l = new FormData();
    l.append("clanimage", i, r),
      l.append("sessionid", N.SESSIONID),
      this.m_clanImagesV2 && l.append("clan_images_v2", "1"),
      s?.artworkType && l.append("arttype", s.artworkType),
      a &&
        a.length > 0 &&
        l.append("resize", a.map((b) => b.width + "x" + b.height).join(","));
    let u = "/uploadimage/",
      c = this.m_localizedImageGroupPrimaryImage;
    c &&
      ((u = "/ajaxuploadlocalizedimage/"),
      l.append("origimagehash", c.image_hash),
      c.thumbnail_hash && l.append("thumbhash", c.thumbnail_hash),
      l.append("extension", "" + c.file_type),
      l.append("language", "" + o));
    let m = r.split(".").pop()?.toLocaleLowerCase();
    (m == "webm" || m == "mp4") &&
      (l.append("video_width", "" + e.width),
      l.append("video_height", "" + e.height));
    let f =
        N.COMMUNITY_BASE_URL +
        "/gid/" +
        this.m_clanSteamID.ConvertTo64BitString() +
        u,
      k = {
        cancelToken: n,
        withCredentials: !0,
        headers: { "Content-Type": "multipart/form-data" },
      },
      M;
    try {
      (M = await n8.default.post(f, l, k)), this.m_filesCompleted.push(i);
    } catch (b) {
      (this.m_lastError = {
        file: i,
        status: b.response ? b.response.status : 500,
        message: Xe(b).strErrorMsg,
      }),
        (M = b.response);
    }
    return (
      c || (await this.handleUploadRefresh(n)), { bSuccess: !0, result: M.data }
    );
  }
};
g([O], p2.prototype, "m_filesToUpload", 2),
  g([O], p2.prototype, "m_filesCompleted", 2),
  g([O], p2.prototype, "m_lastError", 2),
  g([_], p2.prototype, "AddImage", 1),
  g([_], p2.prototype, "AddExistingClanImage", 1),
  g([_], p2.prototype, "DeleteUploadImageByIndex", 1),
  g([_], p2.prototype, "DeleteUploadImage", 1),
  g([_], p2.prototype, "ClearImages", 1);
var qt = class extends p2 {
  constructor(e, r, o) {
    super(e, r, o, !1);
  }
};
var Ns = p(R());
function Ur(t) {
  if ((t.indexOf("?") > 0 && (t = t.split("?")[0]), t.endsWith(".jpg")))
    return 1;
  if (t.endsWith(".png")) return 3;
  if (t.endsWith(".gif")) return 2;
  if (t.endsWith(".mp4")) return 4;
  if (t.endsWith(".webm")) return 5;
  if (t.endsWith(".vtt")) return 6;
  if (t.endsWith(".srt")) return 7;
  if (t.endsWith(".webp")) return 10;
}
var zr = 100,
  jr = 100,
  Je = {
    GetBaseURL() {
      return `${N.CLAN_CDN_ASSET_URL}images/`;
    },
    GetBaseURLV2() {
      return `${N.CLAN_CDN_ASSET_URL}locimages/`;
    },
    ReplacementTokenToClanImageURL(t) {
      return (
        (t = t.replace(u9, this.GetBaseURL())), t.replace("http://", "https://")
      );
    },
    RegexSearchAndReplaceClanImageURL(t) {
      return t.replace(/{STEAM_CLAN_IMAGE}/g, this.GetBaseURL());
    },
    ExtractHashFromBBCodeURL(t) {
      let r =
        /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^\.]*)$/.exec(
          t,
        );
      return r?.groups
        ? [r.groups.filename, parseInt(r.groups.clanid)]
        : [void 0, void 0];
    },
    GetExtensionString(t) {
      return (t.file_type != null ? zt(t.file_type) : null) ?? ".jpg";
    },
    GetExtensionTypeFromURL(t) {
      return Ur(t);
    },
    GetHashAndExt(t) {
      return t ? t.image_hash + this.GetExtensionString(t) : null;
    },
    GetThumbHashAndExt(t) {
      return t ? t.thumbnail_hash + this.GetExtensionString(t) : null;
    },
    GetHashFromHashAndExt(t) {
      let e = t.substring(t.lastIndexOf("."));
      return t.substring(0, t.length - e.length);
    },
    GetExtStringFromHashAndExt(t) {
      return t.substring(t.lastIndexOf("."));
    },
    GenerateURLFromHashAndExt(t, e, r = "") {
      return this.GenerateURLFromHashAndExtAndLang(t, e, r, -1, void 0);
    },
    GenerateURLFromHashAndExtAndLang(t, e, r = "", o, n) {
      t instanceof s3 && (t = t.GetAccountID());
      let i = this.GetBaseURL(),
        s = o != null && o != -1;
      if (r == "" && !s) return i + t + "/" + e;
      {
        let a = e.substring(e.lastIndexOf(".")),
          l = e.substring(0, e.length - a.length);
        return !s || n != "localized_image_group"
          ? i + t + "/" + l + r + a
          : i + t + "/" + l + "/" + h8(W3(o)) + a;
      }
    },
    GenerateEditableURLFromHashAndExt(t, e, r) {
      let o =
        N.COMMUNITY_BASE_URL +
        "gid/" +
        t.ConvertTo64BitString() +
        "/showclanimage/?image_hash_and_ext=" +
        e;
      return r && (o += "&lang=" + r), o;
    },
    GetMimeType(t) {
      return Zr(t);
    },
    async AsyncGetImageResolution(t, e, r, o, n) {
      let i = e + this.GetExtensionString({ file_type: r }),
        s = this.GenerateEditableURLFromHashAndExt(t, i);
      return await this.AsyncGetImageResolutionInternal(s, o, n);
    },
    async AsyncGetImageResolutionInternal(t, e, r) {
      let o = { success: 2 },
        n = new Image();
      (n.crossOrigin = "anonymous"),
        (n.onerror = (a) => {
          r ||
            ((o.err_msg =
              "Load fail on url " + t + " with error: " + Xe(a).strErrorMsg),
            console.error(o.err_msg)),
            (o.success = 2);
        }),
        (n.onload = () => {
          (o.width = n.width),
            (o.height = n.height),
            Y(
              o.width > 0 && o.height > 0,
              "unexpected image resolution discovered for strURL: " + t,
            ),
            (o.success = 1);
        }),
        (n.src = t),
        e.token.promise.catch((a) => {
          (n.onload = () => {}), (o.success = 52);
        });
      let i = 0,
        s = zr;
      for (; o.success === void 0 && i < s; ) await i4(jr), (i += 1);
      return (
        i >= s &&
          ((o.success = 16), (o.err_msg = "We timed out processing images")),
        o
      );
    },
    async OverlayClanImage(t, e, r, o, n, i) {
      let s,
        a = null,
        l = new Image();
      (l.crossOrigin = "anonymous"),
        (l.onerror = (M) => {
          (s = "Load fail on url " + r + " with error: " + Xe(M).strErrorMsg),
            console.error(s);
        }),
        (l.onload = () => {
          let M = new Image();
          (M.crossOrigin = "anonymous"),
            (M.onerror = (b) => {
              (s =
                "Load fail on url " + e + " with error: " + Xe(b).strErrorMsg),
                console.error(s);
            }),
            (M.onload = () => {
              try {
                let b = document.createElement("canvas"),
                  w = b.getContext("2d");
                (b.width = n), (b.height = i), w?.drawImage(M, 0, 0, n, i);
                let A = (n - l.width) / 2,
                  Z = (i - l.height) / 2;
                w?.drawImage(l, A, Z), b.toBlob((I) => (a = I), "image/jpeg");
              } catch (b) {
                s = "Failed during image processing for " + o + " with " + b;
              }
            }),
            (M.src = e);
        }),
        (l.src = r);
      let u = 0,
        c = zr;
      for (; a === void 0 && u < c; ) await i4(jr), (u += 1);
      if (
        (u >= c &&
          a === void 0 &&
          (s = "AsyncOverlay - We timed out processing images"),
        s)
      )
        throw (console.log(s), { success: 2, err_msg: s });
      let m = new qt(t, void 0),
        f = new be(
          a,
          o,
          -1,
          void 0,
          "",
          { width: n, height: i },
          void 0,
          void 0,
        ),
        k = await m.UploadSingleImage(f, o, -1, void 0);
      return k.bSuccess && k.result
        ? k.result.image_hash +
            this.GetExtensionString({ file_type: f.fileType })
        : void 0;
    },
    BIsClanImageVideo(t) {
      return t.file_type == 4 || t.file_type == 5;
    },
  };
var Us = p(R());
var T3 = class t {
  static sm_strDomain;
  static sm_strController;
  static sm_strMethod;
  static sm_strSubmethod;
  static sm_strComputedLinkPrefix;
  static SetNavEventParams(e, r, o = null, n = null) {
    (t.sm_strDomain = e),
      (t.sm_strController = r),
      (t.sm_strMethod = o),
      (t.sm_strSubmethod = n),
      (t.sm_strComputedLinkPrefix = null);
  }
  static GetDefaultParams() {
    let e = { domain: t.sm_strDomain, controller: t.sm_strController };
    return (
      t.sm_strMethod && (e.method = t.sm_strMethod),
      t.sm_strSubmethod && (e.submethod = t.sm_strSubmethod),
      e
    );
  }
  static InstrumentLink(e, r, o = null) {
    let n = t.GetLinkParam(r, o);
    return o3.AddNavParamToURL(e, n);
  }
  static GetLinkParam(e, r = null) {
    let o;
    if (typeof e != "string") {
      if (e.domain) return o3.GetLinkParam(e, r);
      o = e.feature || "";
    }
    let n;
    if (!t.sm_strComputedLinkPrefix && !t.ComputeStaticLinkPrefix())
      return null;
    n = t.sm_strComputedLinkPrefix;
    let i = o3.EncodeEventComponent(o);
    return i && ((n += "_" + i), r && (n += "_" + r)), n;
  }
  static ComputeStaticLinkPrefix() {
    return t.sm_strDomain
      ? ((t.sm_strComputedLinkPrefix = o3.ComputeLinkPrefix(
          t.sm_strDomain,
          t.sm_strController,
          t.sm_strMethod,
          t.sm_strSubmethod,
        )),
        !0)
      : (Y(
          !1,
          "CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!",
        ),
        !1);
  }
};
var i8 = p(R()),
  zs = p(L()),
  sM = i8.createContext({});
var Yr = p(L());
function js(t) {
  let { children: e, ...r } = t,
    o = c8(),
    n = qr.useMemo(
      () => ({ ...T3.GetDefaultParams(), ...o, ...r }),
      [o, r.domain, r.controller, r.method, r.submethod, r.feature, r.depth],
    );
  return (0, Yr.jsx)(u8, { ...n, children: e });
}
export {
  U7 as a,
  ho as b,
  s3 as c,
  sl as d,
  De as e,
  ae as f,
  ea as g,
  Ye as h,
  Xe as i,
  aC as j,
  lC as k,
  I4 as l,
  F4 as m,
  Ko as n,
  uc as o,
  kt as p,
  D as q,
  I7 as r,
  x4 as s,
  Yi as t,
  Q2 as u,
  fr as v,
  _r as w,
  ds as x,
  gs as y,
  Vr as z,
  js as A,
  V7 as B,
};
