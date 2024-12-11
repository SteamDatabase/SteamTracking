const CLSTAMP = 9406869;

import {
  H as Su,
  I as hu,
  L as Hu,
  M as Au,
  a as ri,
  d as ii,
  e as si,
  f as ni,
  g as ai,
  j as oi,
  k as bu,
  o as li,
  p as Mu,
  q as Ks,
  r as He,
  t as pi,
  u as ui,
  v as vu,
} from "./chunk-7NFWYLML.js";
import { a as ge, b as Tu, c as ju } from "./chunk-V7Y4LWEF.js";
import {
  a as J,
  d as ke,
  e as Le,
  h as xs,
  i as he,
  j as du,
  k as Ws,
  l as Us,
  m as cu,
  n as _r,
  o as Os,
  p as Ls,
  q as _u,
  r as ei,
  s as gu,
  t as fu,
  u as q,
  v as Vs,
  w as yu,
} from "./chunk-KUPPF7KT.js";
import { a as Eu } from "./chunk-DCS2JAHZ.js";
import "./chunk-RN6IRS7V.js";
import "./chunk-LI6NTZBK.js";
import "./chunk-QBOI6CYT.js";
import {
  b as ti,
  c as Cu,
  d as Ot,
  e as Pu,
  f as gr,
  h as Ee,
} from "./chunk-LV6BQKXA.js";
import { c as Bu } from "./chunk-OHOHGDXR.js";
import { a as Gu, b as Iu, c as ku } from "./chunk-PUWJRPCG.js";
import { a as Fu, b as wu } from "./chunk-JG7OTS7J.js";
import {
  A as lt,
  B as au,
  E as ou,
  G as We,
  I as Ru,
  a as we,
  b as s,
  c as n,
  d as m,
  e as d,
  f as c,
  g as _,
  h as g,
  i as f,
  j as eu,
  k as tu,
  l as ru,
  o as Zr,
  p as iu,
  q as Wt,
  s as su,
  t as Z,
  u as v,
  x as nu,
  y as cr,
  z as zs,
} from "./chunk-QMBSICWB.js";
import { d as Ds, g as uu, h as mu } from "./chunk-4DGHJVEW.js";
import {
  a as Jp,
  b as Qp,
  c as $p,
  d as Yp,
  e as Xr,
  g as Xp,
  h as Zp,
} from "./chunk-IONBVU4Q.js";
import "./chunk-FI4AM633.js";
import { ba as Ue, g as lu, u as pu, y as Ut } from "./chunk-342AXII3.js";
import "./chunk-XWB4YTRP.js";
import "./chunk-TEIHZA6D.js";
import { a as le } from "./chunk-IVX676NW.js";
import "./chunk-5PQ6U7IO.js";
import {
  a as Up,
  d as ht,
  m as Op,
  q as _e,
  r as dr,
  t as Lp,
  u as Vp,
  w as Kp,
} from "./chunk-ZUI3JXBC.js";
import {
  a as Dp,
  d as St,
  e as Ns,
  f as Wp,
  g as w,
  h as je,
  l as Be,
  m as Ie,
} from "./chunk-D4VJXM5Y.js";
import { b as ie, d as K, e as T } from "./chunk-G7GZWTND.js";
var zn = ie((Wf, zu) => {
  "use strict";
  zu.exports = function (e, r) {
    return function () {
      for (var a = new Array(arguments.length), o = 0; o < a.length; o++)
        a[o] = arguments[o];
      return e.apply(r, a);
    };
  };
});
var Pe = ie((Uf, Wu) => {
  "use strict";
  var vc = zn(),
    Dn = Object.prototype.toString,
    Wn = (function (t) {
      return function (e) {
        var r = Dn.call(e);
        return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
      };
    })(Object.create(null));
  function wt(t) {
    return (
      (t = t.toLowerCase()),
      function (r) {
        return Wn(r) === t;
      }
    );
  }
  function Un(t) {
    return Array.isArray(t);
  }
  function Hi(t) {
    return typeof t > "u";
  }
  function Bc(t) {
    return (
      t !== null &&
      !Hi(t) &&
      t.constructor !== null &&
      !Hi(t.constructor) &&
      typeof t.constructor.isBuffer == "function" &&
      t.constructor.isBuffer(t)
    );
  }
  var xu = wt("ArrayBuffer");
  function Sc(t) {
    var e;
    return (
      typeof ArrayBuffer < "u" && ArrayBuffer.isView
        ? (e = ArrayBuffer.isView(t))
        : (e = t && t.buffer && xu(t.buffer)),
      e
    );
  }
  function hc(t) {
    return typeof t == "string";
  }
  function Fc(t) {
    return typeof t == "number";
  }
  function Du(t) {
    return t !== null && typeof t == "object";
  }
  function ki(t) {
    if (Wn(t) !== "object") return !1;
    var e = Object.getPrototypeOf(t);
    return e === null || e === Object.prototype;
  }
  var wc = wt("Date"),
    Gc = wt("File"),
    Ic = wt("Blob"),
    kc = wt("FileList");
  function On(t) {
    return Dn.call(t) === "[object Function]";
  }
  function Hc(t) {
    return Du(t) && On(t.pipe);
  }
  function Ac(t) {
    var e = "[object FormData]";
    return (
      t &&
      ((typeof FormData == "function" && t instanceof FormData) ||
        Dn.call(t) === e ||
        (On(t.toString) && t.toString() === e))
    );
  }
  var Tc = wt("URLSearchParams");
  function jc(t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
  }
  function Ec() {
    return typeof navigator < "u" &&
      (navigator.product === "ReactNative" ||
        navigator.product === "NativeScript" ||
        navigator.product === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  }
  function Ln(t, e) {
    if (!(t === null || typeof t > "u"))
      if ((typeof t != "object" && (t = [t]), Un(t)))
        for (var r = 0, i = t.length; r < i; r++) e.call(null, t[r], r, t);
      else
        for (var a in t)
          Object.prototype.hasOwnProperty.call(t, a) &&
            e.call(null, t[a], a, t);
  }
  function xn() {
    var t = {};
    function e(a, o) {
      ki(t[o]) && ki(a)
        ? (t[o] = xn(t[o], a))
        : ki(a)
          ? (t[o] = xn({}, a))
          : Un(a)
            ? (t[o] = a.slice())
            : (t[o] = a);
    }
    for (var r = 0, i = arguments.length; r < i; r++) Ln(arguments[r], e);
    return t;
  }
  function qc(t, e, r) {
    return (
      Ln(e, function (a, o) {
        r && typeof a == "function" ? (t[o] = vc(a, r)) : (t[o] = a);
      }),
      t
    );
  }
  function Nc(t) {
    return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
  }
  function zc(t, e, r, i) {
    (t.prototype = Object.create(e.prototype, i)),
      (t.prototype.constructor = t),
      r && Object.assign(t.prototype, r);
  }
  function xc(t, e, r) {
    var i,
      a,
      o,
      l = {};
    e = e || {};
    do {
      for (i = Object.getOwnPropertyNames(t), a = i.length; a-- > 0; )
        (o = i[a]), l[o] || ((e[o] = t[o]), (l[o] = !0));
      t = Object.getPrototypeOf(t);
    } while (t && (!r || r(t, e)) && t !== Object.prototype);
    return e;
  }
  function Dc(t, e, r) {
    (t = String(t)),
      (r === void 0 || r > t.length) && (r = t.length),
      (r -= e.length);
    var i = t.indexOf(e, r);
    return i !== -1 && i === r;
  }
  function Wc(t) {
    if (!t) return null;
    var e = t.length;
    if (Hi(e)) return null;
    for (var r = new Array(e); e-- > 0; ) r[e] = t[e];
    return r;
  }
  var Uc = (function (t) {
    return function (e) {
      return t && e instanceof t;
    };
  })(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array));
  Wu.exports = {
    isArray: Un,
    isArrayBuffer: xu,
    isBuffer: Bc,
    isFormData: Ac,
    isArrayBufferView: Sc,
    isString: hc,
    isNumber: Fc,
    isObject: Du,
    isPlainObject: ki,
    isUndefined: Hi,
    isDate: wc,
    isFile: Gc,
    isBlob: Ic,
    isFunction: On,
    isStream: Hc,
    isURLSearchParams: Tc,
    isStandardBrowserEnv: Ec,
    forEach: Ln,
    merge: xn,
    extend: qc,
    trim: jc,
    stripBOM: Nc,
    inherits: zc,
    toFlatObject: xc,
    kindOf: Wn,
    kindOfTest: wt,
    endsWith: Dc,
    toArray: Wc,
    isTypedArray: Uc,
    isFileList: kc,
  };
});
var Vn = ie((Of, Ou) => {
  "use strict";
  var Kt = Pe();
  function Uu(t) {
    return encodeURIComponent(t)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  Ou.exports = function (e, r, i) {
    if (!r) return e;
    var a;
    if (i) a = i(r);
    else if (Kt.isURLSearchParams(r)) a = r.toString();
    else {
      var o = [];
      Kt.forEach(r, function (u, y) {
        u === null ||
          typeof u > "u" ||
          (Kt.isArray(u) ? (y = y + "[]") : (u = [u]),
          Kt.forEach(u, function (M) {
            Kt.isDate(M)
              ? (M = M.toISOString())
              : Kt.isObject(M) && (M = JSON.stringify(M)),
              o.push(Uu(y) + "=" + Uu(M));
          }));
      }),
        (a = o.join("&"));
    }
    if (a) {
      var l = e.indexOf("#");
      l !== -1 && (e = e.slice(0, l)),
        (e += (e.indexOf("?") === -1 ? "?" : "&") + a);
    }
    return e;
  };
});
var Vu = ie((Lf, Lu) => {
  "use strict";
  var Oc = Pe();
  function Ai() {
    this.handlers = [];
  }
  Ai.prototype.use = function (e, r, i) {
    return (
      this.handlers.push({
        fulfilled: e,
        rejected: r,
        synchronous: i ? i.synchronous : !1,
        runWhen: i ? i.runWhen : null,
      }),
      this.handlers.length - 1
    );
  };
  Ai.prototype.eject = function (e) {
    this.handlers[e] && (this.handlers[e] = null);
  };
  Ai.prototype.forEach = function (e) {
    Oc.forEach(this.handlers, function (i) {
      i !== null && e(i);
    });
  };
  Lu.exports = Ai;
});
var Ju = ie((Vf, Ku) => {
  "use strict";
  var Lc = Pe();
  Ku.exports = function (e, r) {
    Lc.forEach(e, function (a, o) {
      o !== r &&
        o.toUpperCase() === r.toUpperCase() &&
        ((e[r] = a), delete e[o]);
    });
  };
});
var Gt = ie((Kf, Xu) => {
  "use strict";
  var Qu = Pe();
  function Jt(t, e, r, i, a) {
    Error.call(this),
      (this.message = t),
      (this.name = "AxiosError"),
      e && (this.code = e),
      r && (this.config = r),
      i && (this.request = i),
      a && (this.response = a);
  }
  Qu.inherits(Jt, Error, {
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
  var $u = Jt.prototype,
    Yu = {};
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
    Yu[t] = { value: t };
  });
  Object.defineProperties(Jt, Yu);
  Object.defineProperty($u, "isAxiosError", { value: !0 });
  Jt.from = function (t, e, r, i, a, o) {
    var l = Object.create($u);
    return (
      Qu.toFlatObject(t, l, function (u) {
        return u !== Error.prototype;
      }),
      Jt.call(l, t.message, e, r, i, a),
      (l.name = t.name),
      o && Object.assign(l, o),
      l
    );
  };
  Xu.exports = Jt;
});
var Kn = ie((Jf, Zu) => {
  "use strict";
  Zu.exports = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  };
});
var Jn = ie((Qf, em) => {
  "use strict";
  var Ve = Pe();
  function Vc(t, e) {
    e = e || new FormData();
    var r = [];
    function i(o) {
      return o === null
        ? ""
        : Ve.isDate(o)
          ? o.toISOString()
          : Ve.isArrayBuffer(o) || Ve.isTypedArray(o)
            ? typeof Blob == "function"
              ? new Blob([o])
              : Buffer.from(o)
            : o;
    }
    function a(o, l) {
      if (Ve.isPlainObject(o) || Ve.isArray(o)) {
        if (r.indexOf(o) !== -1)
          throw Error("Circular reference detected in " + l);
        r.push(o),
          Ve.forEach(o, function (u, y) {
            if (!Ve.isUndefined(u)) {
              var C = l ? l + "." + y : y,
                M;
              if (u && !l && typeof u == "object") {
                if (Ve.endsWith(y, "{}")) u = JSON.stringify(u);
                else if (Ve.endsWith(y, "[]") && (M = Ve.toArray(u))) {
                  M.forEach(function (k) {
                    !Ve.isUndefined(k) && e.append(C, i(k));
                  });
                  return;
                }
              }
              a(u, C);
            }
          }),
          r.pop();
      } else e.append(l, i(o));
    }
    return a(t), e;
  }
  em.exports = Vc;
});
var rm = ie(($f, tm) => {
  "use strict";
  var Qn = Gt();
  tm.exports = function (e, r, i) {
    var a = i.config.validateStatus;
    !i.status || !a || a(i.status)
      ? e(i)
      : r(
          new Qn(
            "Request failed with status code " + i.status,
            [Qn.ERR_BAD_REQUEST, Qn.ERR_BAD_RESPONSE][
              Math.floor(i.status / 100) - 4
            ],
            i.config,
            i.request,
            i,
          ),
        );
  };
});
var sm = ie((Yf, im) => {
  "use strict";
  var Ti = Pe();
  im.exports = Ti.isStandardBrowserEnv()
    ? (function () {
        return {
          write: function (r, i, a, o, l, p) {
            var u = [];
            u.push(r + "=" + encodeURIComponent(i)),
              Ti.isNumber(a) && u.push("expires=" + new Date(a).toGMTString()),
              Ti.isString(o) && u.push("path=" + o),
              Ti.isString(l) && u.push("domain=" + l),
              p === !0 && u.push("secure"),
              (document.cookie = u.join("; "));
          },
          read: function (r) {
            var i = document.cookie.match(
              new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"),
            );
            return i ? decodeURIComponent(i[3]) : null;
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
var am = ie((Xf, nm) => {
  "use strict";
  nm.exports = function (e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
  };
});
var lm = ie((Zf, om) => {
  "use strict";
  om.exports = function (e, r) {
    return r ? e.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : e;
  };
});
var $n = ie((ey, pm) => {
  "use strict";
  var Kc = am(),
    Jc = lm();
  pm.exports = function (e, r) {
    return e && !Kc(r) ? Jc(e, r) : r;
  };
});
var mm = ie((ty, um) => {
  "use strict";
  var Yn = Pe(),
    Qc = [
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
  um.exports = function (e) {
    var r = {},
      i,
      a,
      o;
    return (
      e &&
        Yn.forEach(
          e.split(`
`),
          function (p) {
            if (
              ((o = p.indexOf(":")),
              (i = Yn.trim(p.substr(0, o)).toLowerCase()),
              (a = Yn.trim(p.substr(o + 1))),
              i)
            ) {
              if (r[i] && Qc.indexOf(i) >= 0) return;
              i === "set-cookie"
                ? (r[i] = (r[i] ? r[i] : []).concat([a]))
                : (r[i] = r[i] ? r[i] + ", " + a : a);
            }
          },
        ),
      r
    );
  };
});
var _m = ie((ry, cm) => {
  "use strict";
  var dm = Pe();
  cm.exports = dm.isStandardBrowserEnv()
    ? (function () {
        var e = /(msie|trident)/i.test(navigator.userAgent),
          r = document.createElement("a"),
          i;
        function a(o) {
          var l = o;
          return (
            e && (r.setAttribute("href", l), (l = r.href)),
            r.setAttribute("href", l),
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
          (i = a(window.location.href)),
          function (l) {
            var p = dm.isString(l) ? a(l) : l;
            return p.protocol === i.protocol && p.host === i.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })();
});
var hr = ie((iy, fm) => {
  "use strict";
  var Xn = Gt(),
    $c = Pe();
  function gm(t) {
    Xn.call(this, t ?? "canceled", Xn.ERR_CANCELED),
      (this.name = "CanceledError");
  }
  $c.inherits(gm, Xn, { __CANCEL__: !0 });
  fm.exports = gm;
});
var Cm = ie((sy, ym) => {
  "use strict";
  ym.exports = function (e) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (r && r[1]) || "";
  };
});
var Zn = ie((ny, Pm) => {
  "use strict";
  var Fr = Pe(),
    Yc = rm(),
    Xc = sm(),
    Zc = Vn(),
    e_ = $n(),
    t_ = mm(),
    r_ = _m(),
    i_ = Kn(),
    pt = Gt(),
    s_ = hr(),
    n_ = Cm();
  Pm.exports = function (e) {
    return new Promise(function (i, a) {
      var o = e.data,
        l = e.headers,
        p = e.responseType,
        u;
      function y() {
        e.cancelToken && e.cancelToken.unsubscribe(u),
          e.signal && e.signal.removeEventListener("abort", u);
      }
      Fr.isFormData(o) && Fr.isStandardBrowserEnv() && delete l["Content-Type"];
      var C = new XMLHttpRequest();
      if (e.auth) {
        var M = e.auth.username || "",
          k = e.auth.password
            ? unescape(encodeURIComponent(e.auth.password))
            : "";
        l.Authorization = "Basic " + btoa(M + ":" + k);
      }
      var B = e_(e.baseURL, e.url);
      C.open(e.method.toUpperCase(), Zc(B, e.params, e.paramsSerializer), !0),
        (C.timeout = e.timeout);
      function x() {
        if (C) {
          var D =
              "getAllResponseHeaders" in C
                ? t_(C.getAllResponseHeaders())
                : null,
            U =
              !p || p === "text" || p === "json" ? C.responseText : C.response,
            re = {
              data: U,
              status: C.status,
              statusText: C.statusText,
              headers: D,
              config: e,
              request: C,
            };
          Yc(
            function (W) {
              i(W), y();
            },
            function (W) {
              a(W), y();
            },
            re,
          ),
            (C = null);
        }
      }
      if (
        ("onloadend" in C
          ? (C.onloadend = x)
          : (C.onreadystatechange = function () {
              !C ||
                C.readyState !== 4 ||
                (C.status === 0 &&
                  !(C.responseURL && C.responseURL.indexOf("file:") === 0)) ||
                setTimeout(x);
            }),
        (C.onabort = function () {
          C &&
            (a(new pt("Request aborted", pt.ECONNABORTED, e, C)), (C = null));
        }),
        (C.onerror = function () {
          a(new pt("Network Error", pt.ERR_NETWORK, e, C, C)), (C = null);
        }),
        (C.ontimeout = function () {
          var U = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded",
            re = e.transitional || i_;
          e.timeoutErrorMessage && (U = e.timeoutErrorMessage),
            a(
              new pt(
                U,
                re.clarifyTimeoutError ? pt.ETIMEDOUT : pt.ECONNABORTED,
                e,
                C,
              ),
            ),
            (C = null);
        }),
        Fr.isStandardBrowserEnv())
      ) {
        var H =
          (e.withCredentials || r_(B)) && e.xsrfCookieName
            ? Xc.read(e.xsrfCookieName)
            : void 0;
        H && (l[e.xsrfHeaderName] = H);
      }
      "setRequestHeader" in C &&
        Fr.forEach(l, function (U, re) {
          typeof o > "u" && re.toLowerCase() === "content-type"
            ? delete l[re]
            : C.setRequestHeader(re, U);
        }),
        Fr.isUndefined(e.withCredentials) ||
          (C.withCredentials = !!e.withCredentials),
        p && p !== "json" && (C.responseType = e.responseType),
        typeof e.onDownloadProgress == "function" &&
          C.addEventListener("progress", e.onDownloadProgress),
        typeof e.onUploadProgress == "function" &&
          C.upload &&
          C.upload.addEventListener("progress", e.onUploadProgress),
        (e.cancelToken || e.signal) &&
          ((u = function (D) {
            C && (a(!D || (D && D.type) ? new s_() : D), C.abort(), (C = null));
          }),
          e.cancelToken && e.cancelToken.subscribe(u),
          e.signal &&
            (e.signal.aborted ? u() : e.signal.addEventListener("abort", u))),
        o || (o = null);
      var h = n_(B);
      if (h && ["http", "https", "file"].indexOf(h) === -1) {
        a(new pt("Unsupported protocol " + h + ":", pt.ERR_BAD_REQUEST, e));
        return;
      }
      C.send(o);
    });
  };
});
var bm = ie((ay, Rm) => {
  "use strict";
  Rm.exports = null;
});
var Ei = ie((oy, Sm) => {
  "use strict";
  var Re = Pe(),
    Mm = Ju(),
    vm = Gt(),
    a_ = Kn(),
    o_ = Jn(),
    l_ = { "Content-Type": "application/x-www-form-urlencoded" };
  function Bm(t, e) {
    !Re.isUndefined(t) &&
      Re.isUndefined(t["Content-Type"]) &&
      (t["Content-Type"] = e);
  }
  function p_() {
    var t;
    return (
      typeof XMLHttpRequest < "u"
        ? (t = Zn())
        : typeof process < "u" &&
          Object.prototype.toString.call(process) === "[object process]" &&
          (t = Zn()),
      t
    );
  }
  function u_(t, e, r) {
    if (Re.isString(t))
      try {
        return (e || JSON.parse)(t), Re.trim(t);
      } catch (i) {
        if (i.name !== "SyntaxError") throw i;
      }
    return (r || JSON.stringify)(t);
  }
  var ji = {
    transitional: a_,
    adapter: p_(),
    transformRequest: [
      function (e, r) {
        if (
          (Mm(r, "Accept"),
          Mm(r, "Content-Type"),
          Re.isFormData(e) ||
            Re.isArrayBuffer(e) ||
            Re.isBuffer(e) ||
            Re.isStream(e) ||
            Re.isFile(e) ||
            Re.isBlob(e))
        )
          return e;
        if (Re.isArrayBufferView(e)) return e.buffer;
        if (Re.isURLSearchParams(e))
          return (
            Bm(r, "application/x-www-form-urlencoded;charset=utf-8"),
            e.toString()
          );
        var i = Re.isObject(e),
          a = r && r["Content-Type"],
          o;
        if ((o = Re.isFileList(e)) || (i && a === "multipart/form-data")) {
          var l = this.env && this.env.FormData;
          return o_(o ? { "files[]": e } : e, l && new l());
        } else if (i || a === "application/json")
          return Bm(r, "application/json"), u_(e);
        return e;
      },
    ],
    transformResponse: [
      function (e) {
        var r = this.transitional || ji.transitional,
          i = r && r.silentJSONParsing,
          a = r && r.forcedJSONParsing,
          o = !i && this.responseType === "json";
        if (o || (a && Re.isString(e) && e.length))
          try {
            return JSON.parse(e);
          } catch (l) {
            if (o)
              throw l.name === "SyntaxError"
                ? vm.from(l, vm.ERR_BAD_RESPONSE, this, null, this.response)
                : l;
          }
        return e;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: bm() },
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: { common: { Accept: "application/json, text/plain, */*" } },
  };
  Re.forEach(["delete", "get", "head"], function (e) {
    ji.headers[e] = {};
  });
  Re.forEach(["post", "put", "patch"], function (e) {
    ji.headers[e] = Re.merge(l_);
  });
  Sm.exports = ji;
});
var Fm = ie((ly, hm) => {
  "use strict";
  var m_ = Pe(),
    d_ = Ei();
  hm.exports = function (e, r, i) {
    var a = this || d_;
    return (
      m_.forEach(i, function (l) {
        e = l.call(a, e, r);
      }),
      e
    );
  };
});
var ea = ie((py, wm) => {
  "use strict";
  wm.exports = function (e) {
    return !!(e && e.__CANCEL__);
  };
});
var km = ie((uy, Im) => {
  "use strict";
  var Gm = Pe(),
    ta = Fm(),
    c_ = ea(),
    __ = Ei(),
    g_ = hr();
  function ra(t) {
    if (
      (t.cancelToken && t.cancelToken.throwIfRequested(),
      t.signal && t.signal.aborted)
    )
      throw new g_();
  }
  Im.exports = function (e) {
    ra(e),
      (e.headers = e.headers || {}),
      (e.data = ta.call(e, e.data, e.headers, e.transformRequest)),
      (e.headers = Gm.merge(
        e.headers.common || {},
        e.headers[e.method] || {},
        e.headers,
      )),
      Gm.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function (a) {
          delete e.headers[a];
        },
      );
    var r = e.adapter || __.adapter;
    return r(e).then(
      function (a) {
        return (
          ra(e),
          (a.data = ta.call(e, a.data, a.headers, e.transformResponse)),
          a
        );
      },
      function (a) {
        return (
          c_(a) ||
            (ra(e),
            a &&
              a.response &&
              (a.response.data = ta.call(
                e,
                a.response.data,
                a.response.headers,
                e.transformResponse,
              ))),
          Promise.reject(a)
        );
      },
    );
  };
});
var ia = ie((my, Hm) => {
  "use strict";
  var Ne = Pe();
  Hm.exports = function (e, r) {
    r = r || {};
    var i = {};
    function a(C, M) {
      return Ne.isPlainObject(C) && Ne.isPlainObject(M)
        ? Ne.merge(C, M)
        : Ne.isPlainObject(M)
          ? Ne.merge({}, M)
          : Ne.isArray(M)
            ? M.slice()
            : M;
    }
    function o(C) {
      if (Ne.isUndefined(r[C])) {
        if (!Ne.isUndefined(e[C])) return a(void 0, e[C]);
      } else return a(e[C], r[C]);
    }
    function l(C) {
      if (!Ne.isUndefined(r[C])) return a(void 0, r[C]);
    }
    function p(C) {
      if (Ne.isUndefined(r[C])) {
        if (!Ne.isUndefined(e[C])) return a(void 0, e[C]);
      } else return a(void 0, r[C]);
    }
    function u(C) {
      if (C in r) return a(e[C], r[C]);
      if (C in e) return a(void 0, e[C]);
    }
    var y = {
      url: l,
      method: l,
      data: l,
      baseURL: p,
      transformRequest: p,
      transformResponse: p,
      paramsSerializer: p,
      timeout: p,
      timeoutMessage: p,
      withCredentials: p,
      adapter: p,
      responseType: p,
      xsrfCookieName: p,
      xsrfHeaderName: p,
      onUploadProgress: p,
      onDownloadProgress: p,
      decompress: p,
      maxContentLength: p,
      maxBodyLength: p,
      beforeRedirect: p,
      transport: p,
      httpAgent: p,
      httpsAgent: p,
      cancelToken: p,
      socketPath: p,
      responseEncoding: p,
      validateStatus: u,
    };
    return (
      Ne.forEach(Object.keys(e).concat(Object.keys(r)), function (M) {
        var k = y[M] || o,
          B = k(M);
        (Ne.isUndefined(B) && k !== u) || (i[M] = B);
      }),
      i
    );
  };
});
var sa = ie((dy, Am) => {
  "use strict";
  Am.exports = { version: "0.27.2" };
});
var Em = ie((cy, jm) => {
  "use strict";
  var f_ = sa().version,
    Ct = Gt(),
    na = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    function (t, e) {
      na[t] = function (i) {
        return typeof i === t || "a" + (e < 1 ? "n " : " ") + t;
      };
    },
  );
  var Tm = {};
  na.transitional = function (e, r, i) {
    function a(o, l) {
      return (
        "[Axios v" +
        f_ +
        "] Transitional option '" +
        o +
        "'" +
        l +
        (i ? ". " + i : "")
      );
    }
    return function (o, l, p) {
      if (e === !1)
        throw new Ct(
          a(l, " has been removed" + (r ? " in " + r : "")),
          Ct.ERR_DEPRECATED,
        );
      return (
        r &&
          !Tm[l] &&
          ((Tm[l] = !0),
          console.warn(
            a(
              l,
              " has been deprecated since v" +
                r +
                " and will be removed in the near future",
            ),
          )),
        e ? e(o, l, p) : !0
      );
    };
  };
  function y_(t, e, r) {
    if (typeof t != "object")
      throw new Ct("options must be an object", Ct.ERR_BAD_OPTION_VALUE);
    for (var i = Object.keys(t), a = i.length; a-- > 0; ) {
      var o = i[a],
        l = e[o];
      if (l) {
        var p = t[o],
          u = p === void 0 || l(p, o, t);
        if (u !== !0)
          throw new Ct(
            "option " + o + " must be " + u,
            Ct.ERR_BAD_OPTION_VALUE,
          );
        continue;
      }
      if (r !== !0) throw new Ct("Unknown option " + o, Ct.ERR_BAD_OPTION);
    }
  }
  jm.exports = { assertOptions: y_, validators: na };
});
var Wm = ie((_y, Dm) => {
  "use strict";
  var zm = Pe(),
    C_ = Vn(),
    qm = Vu(),
    Nm = km(),
    qi = ia(),
    P_ = $n(),
    xm = Em(),
    Qt = xm.validators;
  function $t(t) {
    (this.defaults = t),
      (this.interceptors = { request: new qm(), response: new qm() });
  }
  $t.prototype.request = function (e, r) {
    typeof e == "string" ? ((r = r || {}), (r.url = e)) : (r = e || {}),
      (r = qi(this.defaults, r)),
      r.method
        ? (r.method = r.method.toLowerCase())
        : this.defaults.method
          ? (r.method = this.defaults.method.toLowerCase())
          : (r.method = "get");
    var i = r.transitional;
    i !== void 0 &&
      xm.assertOptions(
        i,
        {
          silentJSONParsing: Qt.transitional(Qt.boolean),
          forcedJSONParsing: Qt.transitional(Qt.boolean),
          clarifyTimeoutError: Qt.transitional(Qt.boolean),
        },
        !1,
      );
    var a = [],
      o = !0;
    this.interceptors.request.forEach(function (B) {
      (typeof B.runWhen == "function" && B.runWhen(r) === !1) ||
        ((o = o && B.synchronous), a.unshift(B.fulfilled, B.rejected));
    });
    var l = [];
    this.interceptors.response.forEach(function (B) {
      l.push(B.fulfilled, B.rejected);
    });
    var p;
    if (!o) {
      var u = [Nm, void 0];
      for (
        Array.prototype.unshift.apply(u, a),
          u = u.concat(l),
          p = Promise.resolve(r);
        u.length;
      )
        p = p.then(u.shift(), u.shift());
      return p;
    }
    for (var y = r; a.length; ) {
      var C = a.shift(),
        M = a.shift();
      try {
        y = C(y);
      } catch (k) {
        M(k);
        break;
      }
    }
    try {
      p = Nm(y);
    } catch (k) {
      return Promise.reject(k);
    }
    for (; l.length; ) p = p.then(l.shift(), l.shift());
    return p;
  };
  $t.prototype.getUri = function (e) {
    e = qi(this.defaults, e);
    var r = P_(e.baseURL, e.url);
    return C_(r, e.params, e.paramsSerializer);
  };
  zm.forEach(["delete", "get", "head", "options"], function (e) {
    $t.prototype[e] = function (r, i) {
      return this.request(
        qi(i || {}, { method: e, url: r, data: (i || {}).data }),
      );
    };
  });
  zm.forEach(["post", "put", "patch"], function (e) {
    function r(i) {
      return function (o, l, p) {
        return this.request(
          qi(p || {}, {
            method: e,
            headers: i ? { "Content-Type": "multipart/form-data" } : {},
            url: o,
            data: l,
          }),
        );
      };
    }
    ($t.prototype[e] = r()), ($t.prototype[e + "Form"] = r(!0));
  });
  Dm.exports = $t;
});
var Om = ie((gy, Um) => {
  "use strict";
  var R_ = hr();
  function Yt(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    var e;
    this.promise = new Promise(function (a) {
      e = a;
    });
    var r = this;
    this.promise.then(function (i) {
      if (r._listeners) {
        var a,
          o = r._listeners.length;
        for (a = 0; a < o; a++) r._listeners[a](i);
        r._listeners = null;
      }
    }),
      (this.promise.then = function (i) {
        var a,
          o = new Promise(function (l) {
            r.subscribe(l), (a = l);
          }).then(i);
        return (
          (o.cancel = function () {
            r.unsubscribe(a);
          }),
          o
        );
      }),
      t(function (a) {
        r.reason || ((r.reason = new R_(a)), e(r.reason));
      });
  }
  Yt.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason;
  };
  Yt.prototype.subscribe = function (e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
  };
  Yt.prototype.unsubscribe = function (e) {
    if (this._listeners) {
      var r = this._listeners.indexOf(e);
      r !== -1 && this._listeners.splice(r, 1);
    }
  };
  Yt.source = function () {
    var e,
      r = new Yt(function (a) {
        e = a;
      });
    return { token: r, cancel: e };
  };
  Um.exports = Yt;
});
var Vm = ie((fy, Lm) => {
  "use strict";
  Lm.exports = function (e) {
    return function (i) {
      return e.apply(null, i);
    };
  };
});
var Jm = ie((yy, Km) => {
  "use strict";
  var b_ = Pe();
  Km.exports = function (e) {
    return b_.isObject(e) && e.isAxiosError === !0;
  };
});
var Ym = ie((Cy, aa) => {
  "use strict";
  var Qm = Pe(),
    M_ = zn(),
    Ni = Wm(),
    v_ = ia(),
    B_ = Ei();
  function $m(t) {
    var e = new Ni(t),
      r = M_(Ni.prototype.request, e);
    return (
      Qm.extend(r, Ni.prototype, e),
      Qm.extend(r, e),
      (r.create = function (a) {
        return $m(v_(t, a));
      }),
      r
    );
  }
  var Te = $m(B_);
  Te.Axios = Ni;
  Te.CanceledError = hr();
  Te.CancelToken = Om();
  Te.isCancel = ea();
  Te.VERSION = sa().version;
  Te.toFormData = Jn();
  Te.AxiosError = Gt();
  Te.Cancel = Te.CanceledError;
  Te.all = function (e) {
    return Promise.all(e);
  };
  Te.spread = Vm();
  Te.isAxiosError = Jm();
  aa.exports = Te;
  aa.exports.default = Te;
});
var ut = ie((Py, Xm) => {
  "use strict";
  Xm.exports = Ym();
});
var mi = 15,
  Se = 0;
var Ye = K(Be());
var G = K(we());
var de = K(we());
var Ae = de.Message,
  di = class t extends Ae {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || f(t.M()),
        Ae.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              is_allowed: { n: 2, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new de.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new de.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new de.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "ParentalApp";
    }
  },
  yt = class t extends Ae {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.allowed_time_windows || f(t.M()),
        Ae.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              allowed_time_windows: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              allowed_daily_minutes: {
                n: 2,
                br: s.readUint32,
                bw: n.writeUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new de.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new de.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new de.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "ParentalPlaytimeDay";
    }
  },
  Js = class t extends Ae {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.apply_playtime_restrictions || f(t.M()),
        Ae.initialize(this, e, 0, -1, [15], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              apply_playtime_restrictions: {
                n: 2,
                br: s.readBool,
                bw: n.writeBool,
              },
              playtime_days: { n: 15, c: yt, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new de.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new de.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new de.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "ParentalPlaytimeRestrictions";
    }
  },
  Lt = class t extends Ae {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.restrictions || f(t.M()),
        Ae.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              restrictions: { n: 1, c: yt },
              rtime_expires: { n: 2, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new de.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new de.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new de.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "ParentalTemporaryPlaytimeRestrictions";
    }
  },
  Ft = class t extends Ae {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || f(t.M()),
        Ae.initialize(this, e, 0, -1, [4, 5, 17, 18, 19], null);
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
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              applist_base_id: { n: 2, br: s.readUint32, bw: n.writeUint32 },
              applist_base_description: {
                n: 3,
                br: s.readString,
                bw: n.writeString,
              },
              applist_base: { n: 4, c: di, r: !0, q: !0 },
              applist_custom: { n: 5, c: di, r: !0, q: !0 },
              passwordhashtype: { n: 6, br: s.readUint32, bw: n.writeUint32 },
              salt: { n: 7, br: s.readBytes, bw: n.writeBytes },
              passwordhash: { n: 8, br: s.readBytes, bw: n.writeBytes },
              is_enabled: { n: 9, br: s.readBool, bw: n.writeBool },
              enabled_features: { n: 10, br: s.readUint32, bw: n.writeUint32 },
              recovery_email: { n: 11, br: s.readString, bw: n.writeString },
              is_site_license_lock: { n: 12, br: s.readBool, bw: n.writeBool },
              temporary_enabled_features: {
                n: 13,
                br: s.readUint32,
                bw: n.writeUint32,
              },
              rtime_temporary_feature_expiration: {
                n: 14,
                br: s.readUint32,
                bw: n.writeUint32,
              },
              playtime_restrictions: { n: 15, c: Js },
              temporary_playtime_restrictions: { n: 16, c: Lt },
              excluded_store_content_descriptors: {
                n: 17,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: n.writeRepeatedUint32,
              },
              excluded_community_content_descriptors: {
                n: 18,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: n.writeRepeatedUint32,
              },
              utility_appids: {
                n: 19,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: n.writeRepeatedUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new de.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new de.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new de.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "ParentalSettings";
    }
  },
  ci = class t extends Ae {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.requestid || f(t.M()),
        Ae.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              requestid: {
                n: 1,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              family_groupid: {
                n: 2,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              steamid: {
                n: 3,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              features: { n: 4, br: s.readUint32, bw: n.writeUint32 },
              time_requested: { n: 5, br: s.readUint32, bw: n.writeUint32 },
              approved: { n: 6, br: s.readBool, bw: n.writeBool },
              steamid_responder: {
                n: 7,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              time_responded: { n: 8, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new de.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new de.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new de.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "ParentalFeatureRequest";
    }
  },
  _i = class t extends Ae {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.requestid || f(t.M()),
        Ae.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              requestid: {
                n: 1,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              family_groupid: {
                n: 2,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              steamid: {
                n: 3,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              current_playtime_restrictions: { n: 4, c: yt },
              time_expires: { n: 5, br: s.readUint32, bw: n.writeUint32 },
              time_requested: { n: 6, br: s.readUint32, bw: n.writeUint32 },
              approved: { n: 7, br: s.readBool, bw: n.writeBool },
              steamid_responder: {
                n: 8,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              time_responded: { n: 9, br: s.readUint32, bw: n.writeUint32 },
              restrictions_approved: { n: 10, c: Lt },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new de.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new de.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new de.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "ParentalPlaytimeRequest";
    }
  };
var z = G.Message,
  gi = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.password || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              password: { n: 1, br: s.readString, bw: n.writeString },
              settings: { n: 2, c: Ft },
              sessionid: { n: 3, br: s.readString, bw: n.writeString },
              enablecode: { n: 4, br: s.readUint32, bw: n.writeUint32 },
              steamid: {
                n: 10,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_EnableParentalSettings_Request";
    }
  },
  Qs = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), z.initialize(this, e, 0, -1, void 0, null);
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
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_EnableParentalSettings_Response";
    }
  },
  fi = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.password || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              password: { n: 1, br: s.readString, bw: n.writeString },
              steamid: {
                n: 10,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_DisableParentalSettings_Request";
    }
  },
  $s = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), z.initialize(this, e, 0, -1, void 0, null);
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
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_DisableParentalSettings_Response";
    }
  },
  fr = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
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
                n: 10,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_GetParentalSettings_Request";
    }
  },
  Ys = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.settings || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = { proto: t, fields: { settings: { n: 1, c: Ft } } }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_GetParentalSettings_Response";
    }
  },
  Xs = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.priority || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { priority: { n: 1, br: s.readUint32, bw: n.writeUint32 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_GetSignedParentalSettings_Request";
    }
  },
  Zs = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.serialized_settings || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              serialized_settings: { n: 1, br: s.readBytes, bw: n.writeBytes },
              signature: { n: 2, br: s.readBytes, bw: n.writeBytes },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_GetSignedParentalSettings_Response";
    }
  },
  yi = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.password || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              password: { n: 1, br: s.readString, bw: n.writeString },
              settings: { n: 2, c: Ft },
              new_password: { n: 3, br: s.readString, bw: n.writeString },
              sessionid: { n: 4, br: s.readString, bw: n.writeString },
              steamid: {
                n: 10,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_SetParentalSettings_Request";
    }
  },
  en = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), z.initialize(this, e, 0, -1, void 0, null);
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
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_SetParentalSettings_Response";
    }
  },
  yr = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.unlock_token || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              unlock_token: { n: 1, br: s.readString, bw: n.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_ValidateToken_Request";
    }
  },
  tn = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), z.initialize(this, e, 0, -1, void 0, null);
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
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_ValidateToken_Response";
    }
  },
  rn = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.password || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              password: { n: 1, br: s.readString, bw: n.writeString },
              session: { n: 2, br: s.readString, bw: n.writeString },
              send_unlock_on_success: { n: 3, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_ValidatePassword_Request";
    }
  },
  sn = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.token || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { token: { n: 1, br: s.readString, bw: n.writeString } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_ValidatePassword_Response";
    }
  },
  nn = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.session || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { session: { n: 1, br: s.readString, bw: n.writeString } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_LockClient_Request";
    }
  },
  an = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), z.initialize(this, e, 0, -1, void 0, null);
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
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_LockClient_Response";
    }
  },
  on = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), z.initialize(this, e, 0, -1, void 0, null);
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
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_RequestRecoveryCode_Request";
    }
  },
  ln = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), z.initialize(this, e, 0, -1, void 0, null);
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
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_RequestRecoveryCode_Response";
    }
  },
  pn = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.recovery_code || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              recovery_code: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              steamid: {
                n: 10,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_DisableWithRecoveryCode_Request";
    }
  },
  un = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), z.initialize(this, e, 0, -1, void 0, null);
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
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_DisableWithRecoveryCode_Response";
    }
  },
  Ci = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.features || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              features: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              steamid: {
                n: 10,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_RequestFeatureAccess_Request";
    }
  },
  mn = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.requestid || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              requestid: {
                n: 1,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_RequestFeatureAccess_Response";
    }
  },
  Pi = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.approve || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              approve: { n: 1, br: s.readBool, bw: n.writeBool },
              requestid: {
                n: 2,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              features: { n: 3, br: s.readUint32, bw: n.writeUint32 },
              duration: { n: 4, br: s.readUint32, bw: n.writeUint32 },
              steamid: {
                n: 10,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_ApproveFeatureAccess_Request";
    }
  },
  dn = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), z.initialize(this, e, 0, -1, void 0, null);
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
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_ApproveFeatureAccess_Response";
    }
  },
  Ri = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.time_expires || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              time_expires: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              current_playtime_restrictions: { n: 2, c: yt },
              steamid: {
                n: 10,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_RequestPlaytime_Request";
    }
  },
  cn = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.requestid || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              requestid: {
                n: 1,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_RequestPlaytime_Response";
    }
  },
  bi = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.approve || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              approve: { n: 1, br: s.readBool, bw: n.writeBool },
              requestid: {
                n: 2,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              restrictions_approved: { n: 3, c: Lt },
              steamid: {
                n: 10,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_ApprovePlaytime_Request";
    }
  },
  _n = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), z.initialize(this, e, 0, -1, void 0, null);
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
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_ApprovePlaytime_Response";
    }
  },
  Mi = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.rt_include_completed_since || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              rt_include_completed_since: {
                n: 1,
                br: s.readUint32,
                bw: n.writeUint32,
              },
              family_groupid: {
                n: 2,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_GetRequests_Request";
    }
  },
  gn = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.feature_requests || f(t.M()),
        z.initialize(this, e, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              feature_requests: { n: 1, c: ci, r: !0, q: !0 },
              playtime_requests: { n: 2, c: _i, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_GetRequests_Response";
    }
  },
  fn = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.day_of_week || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              day_of_week: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              minutes_used: { n: 2, br: s.readUint32, bw: n.writeUint32 },
              steamid: {
                n: 10,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_ReportPlaytimeAndNotify_Request";
    }
  },
  yn = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), z.initialize(this, e, 0, -1, void 0, null);
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
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_ReportPlaytimeAndNotify_Response";
    }
  },
  Cn = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.serialized_settings || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              serialized_settings: { n: 1, br: s.readBytes, bw: n.writeBytes },
              signature: { n: 2, br: s.readBytes, bw: n.writeBytes },
              password: { n: 3, br: s.readString, bw: n.writeString },
              sessionid: { n: 4, br: s.readString, bw: n.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_ParentalSettingsChange_Notification";
    }
  },
  Pn = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.password || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              password: { n: 1, br: s.readString, bw: n.writeString },
              sessionid: { n: 2, br: s.readString, bw: n.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_ParentalUnlock_Notification";
    }
  },
  Rn = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.sessionid || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              sessionid: { n: 1, br: s.readString, bw: n.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_ParentalLock_Notification";
    }
  },
  bn = class t extends z {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.day_of_week || f(t.M()),
        z.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              day_of_week: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              minutes_used: { n: 2, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new G.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new G.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CParental_PlaytimeUsed_Notification";
    }
  },
  vi;
((h) => {
  function t(D, U) {
    return D.SendMsg("Parental.EnableParentalSettings#1", v(gi, U), Qs, {
      ePrivilege: 1,
    });
  }
  h.EnableParentalSettings = t;
  function e(D, U) {
    return D.SendMsg("Parental.DisableParentalSettings#1", v(fi, U), $s, {
      ePrivilege: 1,
    });
  }
  h.DisableParentalSettings = e;
  function r(D, U) {
    return D.SendMsg("Parental.GetParentalSettings#1", v(fr, U), Ys, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  h.GetParentalSettings = r;
  function i(D, U) {
    return D.SendMsg("Parental.GetSignedParentalSettings#1", v(Xs, U), Zs, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  h.GetSignedParentalSettings = i;
  function a(D, U) {
    return D.SendMsg("Parental.SetParentalSettings#1", v(yi, U), en, {
      ePrivilege: 1,
    });
  }
  h.SetParentalSettings = a;
  function o(D, U) {
    return D.SendMsg("Parental.ValidateToken#1", v(yr, U), tn, {
      ePrivilege: 1,
    });
  }
  h.ValidateToken = o;
  function l(D, U) {
    return D.SendMsg("Parental.ValidatePassword#1", v(rn, U), sn, {
      ePrivilege: 1,
    });
  }
  h.ValidatePassword = l;
  function p(D, U) {
    return D.SendMsg("Parental.LockClient#1", v(nn, U), an, { ePrivilege: 1 });
  }
  h.LockClient = p;
  function u(D, U) {
    return D.SendMsg("Parental.RequestRecoveryCode#1", v(on, U), ln, {
      ePrivilege: 1,
    });
  }
  h.RequestRecoveryCode = u;
  function y(D, U) {
    return D.SendMsg("Parental.DisableWithRecoveryCode#1", v(pn, U), un, {
      ePrivilege: 0,
    });
  }
  h.DisableWithRecoveryCode = y;
  function C(D, U) {
    return D.SendMsg("Parental.RequestFeatureAccess#1", v(Ci, U), mn, {
      ePrivilege: 1,
    });
  }
  h.RequestFeatureAccess = C;
  function M(D, U) {
    return D.SendMsg("Parental.ApproveFeatureAccess#1", v(Pi, U), dn, {
      ePrivilege: 1,
    });
  }
  h.ApproveFeatureAccess = M;
  function k(D, U) {
    return D.SendMsg("Parental.RequestPlaytime#1", v(Ri, U), cn, {
      ePrivilege: 1,
    });
  }
  h.RequestPlaytime = k;
  function B(D, U) {
    return D.SendMsg("Parental.ApprovePlaytime#1", v(bi, U), _n, {
      ePrivilege: 1,
    });
  }
  h.ApprovePlaytime = B;
  function x(D, U) {
    return D.SendMsg("Parental.GetRequests#1", v(Mi, U), gn, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  h.GetRequests = x;
  function H(D, U) {
    return D.SendMsg("Parental.ReportPlaytimeAndNotify#1", v(fn, U), yn, {
      ePrivilege: 1,
    });
  }
  h.ReportPlaytimeAndNotify = H;
})((vi ||= {}));
var cc;
((a) => (
  (a.NotifySettingsChangeHandler = {
    name: "ParentalClient.NotifySettingsChange#1",
    request: Cn,
  }),
  (a.NotifyUnlockHandler = {
    name: "ParentalClient.NotifyUnlock#1",
    request: Pn,
  }),
  (a.NotifyLockHandler = { name: "ParentalClient.NotifyLock#1", request: Rn }),
  (a.NotifyPlaytimeUsedHandler = {
    name: "ParentalClient.NotifyPlaytimeUsed#1",
    request: bn,
  })
))((cc ||= {}));
var pe = class t {
  m_ulSteamID;
  constructor(e = 0, r, i, a) {
    e instanceof t
      ? (this.m_ulSteamID = e.m_ulSteamID)
      : typeof e == "string"
        ? (this.m_ulSteamID = Wt.fromString(e, !0))
        : r && i && a !== void 0
          ? this.SetFromComponents(e ?? 0, a, i, r)
          : e
            ? (this.m_ulSteamID = Wt.fromNumber(e, !0))
            : (this.m_ulSteamID = Wt.UZERO);
  }
  static InitFromAccountID(e) {
    return new t(Number(e), w.EUNIVERSE, 1, Qp);
  }
  static InitFromClanID(e) {
    return new t(Number(e), w.EUNIVERSE, 7, 0);
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
      let [i, a, o, l, p] =
          e.match(/\[([I|g|A|G|M|P|C|U]):(\d+):(\d+):?(\d+)?\]/) || [],
        u = Number(o),
        y = Number(l),
        C = p ? Number(p) : 1;
      switch (a) {
        case "I":
          r.SetFromComponents(y, C, 0, u);
        case "g":
          r.SetFromComponents(y, 0, 7, u);
        case "A":
          r.SetFromComponents(y, C, 4, u);
        case "G":
          r.SetFromComponents(y, C, 3, u);
        case "M":
          r.SetFromComponents(y, C, 2, u);
        case "P":
          r.SetFromComponents(y, C, 5, u);
        case "C":
          r.SetFromComponents(y, C, 6, u);
        case "U":
          r.SetFromComponents(y, C, 1, u);
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
      if (this.GetAccountID() == 0 || this.GetInstance() > $p) return !1;
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
    this.m_ulSteamID = new Wt(e, this.m_ulSteamID.getHighBitsUnsigned(), !0);
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
  SetFromComponents(e, r, i, a) {
    let o = ((a & 255) << 24) + ((i & 15) << 20) + (r & 1048575),
      l = e & 4294967295;
    this.m_ulSteamID = new Wt(l, o, !0);
  }
};
var gc = K(Be());
function fc(t) {
  return ["parentalsettings", t];
}
function yc(t) {
  let e = t.applist_base.concat(t.applist_custom);
  return new Map(e.map((i) => [i.appid, i.is_allowed]));
}
async function Cc(t, e) {
  let r = Z.Init(fr);
  r.Body().set_steamid(e);
  let i = await vi.GetParentalSettings(t, r);
  if (i.GetEResult() != 1)
    throw new Error(`Error from GetParentalSettings: ${i.GetEResult()}`);
  let a = i.Body().settings().toObject();
  if (!a.playtime_restrictions) {
    let l = {
      apply_playtime_restrictions: !1,
      playtime_days: Array(7).fill({
        allowed_time_windows: BigInt(0xffffffffffff).toString(),
        allowed_daily_minutes: 1440,
      }),
    };
    a.playtime_restrictions = l;
  }
  let o = yc(a);
  return { settings: a, mapAppsAllowed: o };
}
function Pc(t, e, r) {
  return {
    queryKey: fc(e),
    queryFn: () => Cc(t, e),
    placeholderData: { settings: void 0, mapAppsAllowed: void 0 },
    ...r,
  };
}
function Bi(t) {
  let e = We();
  return ht(Pc(e, t));
}
function Rc(t, e) {
  return ["validateparentaltoken", t, e];
}
function bc() {
  let t = St("clientsessionid"),
    e = St("sessionid");
  return t || e;
}
function Si() {
  let t = We(),
    e = Ee(),
    r = St("steamparental"),
    i = bc(),
    a = r,
    o = a?.split("||") || [];
  o.length == 2 && (a = o[1]);
  let l = a && a !== "0" ? i + "||" + a : void 0,
    p = ht({
      queryKey: Rc(e, l),
      queryFn: async () => {
        if (!l) return 15;
        let u = Z.Init(yr);
        return (
          u.Body().set_unlock_token(l),
          (await vi.ValidateToken(t, u)).GetEResult()
        );
      },
    });
  return !p.isSuccess || p.data !== 1;
}
function Mn(t, e, r) {
  if (!t) return !0;
  if (!t.is_enabled || e == Se || e == null || !r) return !1;
  if (e == mi) return !0;
  let i = t.enabled_features;
  return i ? (i & (1 << e)) == 0 : !0;
}
function qu(t) {
  let e = Ee(),
    { settings: r } = Bi(e).data ?? {},
    i = Si();
  return Mn(r, t, i);
}
var X = K(we());
var ue = X.Message;
function Nu(t) {
  return "unknown ESteamNotificationType ( " + t + " )";
}
var hi = class t extends ue {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.notification_id || f(t.M()),
        ue.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              notification_id: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              notification_targets: {
                n: 2,
                br: s.readUint32,
                bw: n.writeUint32,
              },
              notification_type: { n: 3, br: s.readEnum, bw: n.writeEnum },
              body_data: { n: 4, br: s.readString, bw: n.writeString },
              read: { n: 7, br: s.readBool, bw: n.writeBool },
              timestamp: { n: 8, br: s.readUint32, bw: n.writeUint32 },
              hidden: { n: 9, br: s.readBool, bw: n.writeBool },
              expiry: { n: 10, br: s.readUint32, bw: n.writeUint32 },
              viewed: { n: 11, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new X.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "SteamNotificationData";
    }
  },
  Cr = class t extends ue {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.include_hidden || f(t.M()),
        ue.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              include_hidden: { n: 1, d: !1, br: s.readBool, bw: n.writeBool },
              language: { n: 2, d: 0, br: s.readInt32, bw: n.writeInt32 },
              include_confirmation_count: {
                n: 3,
                d: !0,
                br: s.readBool,
                bw: n.writeBool,
              },
              include_pinned_counts: {
                n: 4,
                d: !1,
                br: s.readBool,
                bw: n.writeBool,
              },
              include_read: { n: 5, d: !0, br: s.readBool, bw: n.writeBool },
              count_only: { n: 6, d: !1, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new X.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamNotification_GetSteamNotifications_Request";
    }
  },
  vn = class t extends ue {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.notifications || f(t.M()),
        ue.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              notifications: { n: 1, c: hi, r: !0, q: !0 },
              confirmation_count: { n: 2, br: s.readInt32, bw: n.writeInt32 },
              pending_gift_count: { n: 3, br: s.readUint32, bw: n.writeUint32 },
              pending_friend_count: {
                n: 5,
                br: s.readUint32,
                bw: n.writeUint32,
              },
              unread_count: { n: 6, br: s.readUint32, bw: n.writeUint32 },
              pending_family_invite_count: {
                n: 7,
                br: s.readUint32,
                bw: n.writeUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new X.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamNotification_GetSteamNotifications_Response";
    }
  },
  Pr = class t extends ue {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.timestamp || f(t.M()),
        ue.initialize(this, e, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              timestamp: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              notification_type: { n: 2, br: s.readEnum, bw: n.writeEnum },
              notification_ids: {
                n: 3,
                r: !0,
                q: !0,
                br: s.readUint64String,
                pbr: s.readPackedUint64String,
                bw: n.writeRepeatedUint64String,
              },
              mark_all_read: { n: 4, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new X.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamNotification_MarkNotificationsRead_Notification";
    }
  },
  Rr = class t extends ue {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.remote_client_id || f(t.M()),
        ue.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              remote_client_id: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              target_client_type: { n: 2, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new X.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamNotification_MarkNotificationsViewed_Notification";
    }
  },
  br = class t extends ue {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.notification_type || f(t.M()),
        ue.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              notification_type: { n: 1, br: s.readEnum, bw: n.writeEnum },
              notification_targets: {
                n: 2,
                br: s.readUint32,
                bw: n.writeUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new X.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "SteamNotificationPreference";
    }
  },
  Bn = class t extends ue {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.preferences || f(t.M()),
        ue.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { preferences: { n: 1, c: br, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new X.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamNotification_SetPreferences_Request";
    }
  },
  Sn = class t extends ue {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), ue.initialize(this, e, 0, -1, void 0, null);
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
      let r = new X.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamNotification_SetPreferences_Response";
    }
  },
  Fi = class t extends ue {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), ue.initialize(this, e, 0, -1, void 0, null);
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
      let r = new X.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamNotification_GetPreferences_Request";
    }
  },
  hn = class t extends ue {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.preferences || f(t.M()),
        ue.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { preferences: { n: 1, c: br, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new X.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamNotification_GetPreferences_Response";
    }
  },
  Mr = class t extends ue {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.notification_ids || f(t.M()),
        ue.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              notification_ids: {
                n: 1,
                r: !0,
                q: !0,
                br: s.readUint64String,
                pbr: s.readPackedUint64String,
                bw: n.writeRepeatedUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new X.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamNotification_HideNotification_Notification";
    }
  },
  Fn = class t extends ue {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.notifications || f(t.M()),
        ue.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              notifications: { n: 1, c: hi, r: !0, q: !0 },
              pending_gift_count: { n: 2, br: s.readUint32, bw: n.writeUint32 },
              pending_friend_count: {
                n: 3,
                br: s.readUint32,
                bw: n.writeUint32,
              },
              pending_family_invite_count: {
                n: 4,
                br: s.readUint32,
                bw: n.writeUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new X.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamNotification_NotificationsReceived_Notification";
    }
  },
  wn = class t extends ue {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.preferences || f(t.M()),
        ue.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { preferences: { n: 1, c: br, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new X.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new X.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamNotification_PreferencesUpdated_Notification";
    }
  },
  Vt;
((l) => {
  function t(p, u) {
    return p.SendMsg(
      "SteamNotification.GetSteamNotifications#1",
      v(Cr, u),
      vn,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  l.GetSteamNotifications = t;
  function e(p, u) {
    return p.SendNotification(
      "SteamNotification.MarkNotificationsRead#1",
      v(Pr, u),
      { ePrivilege: 1 },
    );
  }
  l.MarkNotificationsRead = e;
  function r(p, u) {
    return p.SendNotification(
      "SteamNotification.MarkNotificationsViewed#1",
      v(Rr, u),
      { ePrivilege: 1 },
    );
  }
  l.MarkNotificationsViewed = r;
  function i(p, u) {
    return p.SendNotification(
      "SteamNotification.HideNotification#1",
      v(Mr, u),
      { ePrivilege: 1 },
    );
  }
  l.HideNotification = i;
  function a(p, u) {
    return p.SendMsg("SteamNotification.SetPreferences#1", v(Bn, u), Sn, {
      ePrivilege: 1,
    });
  }
  l.SetPreferences = a;
  function o(p, u) {
    return p.SendMsg("SteamNotification.GetPreferences#1", v(Fi, u), hn, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  l.GetPreferences = o;
})((Vt ||= {}));
var Mc;
((r) => (
  (r.NotificationsReceivedHandler = {
    name: "SteamNotificationClient.NotificationsReceived#1",
    request: Fn,
  }),
  (r.PreferencesUpdatedHandler = {
    name: "SteamNotificationClient.PreferencesUpdated#1",
    request: wn,
  })
))((Mc ||= {}));
var Q = K(we());
var ae = Q.Message;
var wi = class t extends ae {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.type || f(t.M()),
        ae.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              type: { n: 1, br: s.readString, bw: n.writeString },
              value: { n: 2, br: s.readString, bw: n.writeString },
              color: { n: 3, br: s.readString, bw: n.writeString },
              label: { n: 4, br: s.readString, bw: n.writeString },
              name: { n: 5, br: s.readString, bw: n.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new Q.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEconItem_DescriptionLine";
    }
  },
  vr = class t extends ae {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.link || f(t.M()),
        ae.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              link: { n: 1, br: s.readString, bw: n.writeString },
              name: { n: 2, br: s.readString, bw: n.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new Q.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEconItem_Action";
    }
  },
  Gn = class t extends ae {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || f(t.M()),
        ae.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              category: { n: 2, br: s.readString, bw: n.writeString },
              internal_name: { n: 3, br: s.readString, bw: n.writeString },
              localized_category_name: {
                n: 4,
                br: s.readString,
                bw: n.writeString,
              },
              localized_tag_name: { n: 5, br: s.readString, bw: n.writeString },
              color: { n: 6, br: s.readString, bw: n.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new Q.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEconItem_Tag";
    }
  },
  Gi = class t extends ae {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || f(t.M()),
        ae.initialize(this, e, 0, -1, [8, 10, 11, 12, 13, 21, 26], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: s.readInt32, bw: n.writeInt32 },
              classid: {
                n: 2,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              instanceid: {
                n: 3,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              currency: { n: 4, br: s.readBool, bw: n.writeBool },
              background_color: { n: 5, br: s.readString, bw: n.writeString },
              icon_url: { n: 6, br: s.readString, bw: n.writeString },
              icon_url_large: { n: 7, br: s.readString, bw: n.writeString },
              descriptions: { n: 8, c: wi, r: !0, q: !0 },
              tradable: { n: 9, br: s.readBool, bw: n.writeBool },
              actions: { n: 10, c: vr, r: !0, q: !0 },
              owner_descriptions: { n: 11, c: wi, r: !0, q: !0 },
              owner_actions: { n: 12, c: vr, r: !0, q: !0 },
              fraudwarnings: {
                n: 13,
                r: !0,
                q: !0,
                br: s.readString,
                bw: n.writeRepeatedString,
              },
              name: { n: 14, br: s.readString, bw: n.writeString },
              name_color: { n: 15, br: s.readString, bw: n.writeString },
              type: { n: 16, br: s.readString, bw: n.writeString },
              market_name: { n: 17, br: s.readString, bw: n.writeString },
              market_hash_name: { n: 18, br: s.readString, bw: n.writeString },
              market_fee: { n: 19, br: s.readString, bw: n.writeString },
              market_fee_app: { n: 28, br: s.readInt32, bw: n.writeInt32 },
              contained_item: { n: 20, c: t },
              market_actions: { n: 21, c: vr, r: !0, q: !0 },
              commodity: { n: 22, br: s.readBool, bw: n.writeBool },
              market_tradable_restriction: {
                n: 23,
                br: s.readInt32,
                bw: n.writeInt32,
              },
              market_marketable_restriction: {
                n: 24,
                br: s.readInt32,
                bw: n.writeInt32,
              },
              marketable: { n: 25, br: s.readBool, bw: n.writeBool },
              tags: { n: 26, c: Gn, r: !0, q: !0 },
              item_expiration: { n: 27, br: s.readString, bw: n.writeString },
              market_buy_country_restriction: {
                n: 30,
                br: s.readString,
                bw: n.writeString,
              },
              market_sell_country_restriction: {
                n: 31,
                br: s.readString,
                bw: n.writeString,
              },
              sealed: { n: 32, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new Q.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEconItem_Description";
    }
  },
  Ii = class t extends ae {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || f(t.M()),
        ae.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              contextid: {
                n: 2,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              assetid: {
                n: 3,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              classid: {
                n: 4,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              instanceid: {
                n: 5,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              currencyid: { n: 6, br: s.readUint32, bw: n.writeUint32 },
              amount: { n: 7, br: s.readInt64String, bw: n.writeInt64String },
              missing: { n: 8, br: s.readBool, bw: n.writeBool },
              est_usd: { n: 9, br: s.readInt64String, bw: n.writeInt64String },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new Q.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEcon_Asset";
    }
  },
  Br = class t extends ae {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || f(t.M()),
        ae.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              appid: { n: 2, br: s.readUint32, bw: n.writeUint32 },
              contextid: {
                n: 3,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              get_descriptions: { n: 4, br: s.readBool, bw: n.writeBool },
              for_trade_offer_verification: {
                n: 10,
                br: s.readBool,
                bw: n.writeBool,
              },
              language: { n: 5, br: s.readString, bw: n.writeString },
              filters: { n: 6, c: Sr },
              start_assetid: {
                n: 8,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              count: { n: 9, br: s.readInt32, bw: n.writeInt32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new Q.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEcon_GetInventoryItemsWithDescriptions_Request";
    }
  },
  Sr = class t extends ae {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.assetids || f(t.M()),
        ae.initialize(this, e, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              assetids: {
                n: 1,
                r: !0,
                q: !0,
                br: s.readUint64String,
                pbr: s.readPackedUint64String,
                bw: n.writeRepeatedUint64String,
              },
              currencyids: {
                n: 2,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: n.writeRepeatedUint32,
              },
              tradable_only: { n: 3, br: s.readBool, bw: n.writeBool },
              marketable_only: { n: 4, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new Q.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions";
    }
  },
  In = class t extends ae {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.assets || f(t.M()),
        ae.initialize(this, e, 0, -1, [1, 2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              assets: { n: 1, c: Ii, r: !0, q: !0 },
              descriptions: { n: 2, c: Gi, r: !0, q: !0 },
              missing_assets: { n: 3, c: Ii, r: !0, q: !0 },
              more_items: { n: 4, br: s.readBool, bw: n.writeBool },
              last_assetid: {
                n: 5,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              total_inventory_count: {
                n: 6,
                br: s.readUint32,
                bw: n.writeUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new Q.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEcon_GetInventoryItemsWithDescriptions_Response";
    }
  },
  kn = class t extends ae {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.generate_new_token || f(t.M()),
        ae.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              generate_new_token: { n: 1, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new Q.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEcon_GetTradeOfferAccessToken_Request";
    }
  },
  Hn = class t extends ae {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.trade_offer_access_token || f(t.M()),
        ae.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              trade_offer_access_token: {
                n: 1,
                br: s.readString,
                bw: n.writeString,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new Q.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEcon_GetTradeOfferAccessToken_Response";
    }
  },
  An = class t extends ae {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.return_url || f(t.M()),
        ae.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              return_url: { n: 1, br: s.readString, bw: n.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new Q.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEcon_ClientGetItemShopOverlayAuthURL_Request";
    }
  },
  Tn = class t extends ae {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.url || f(t.M()),
        ae.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { url: { n: 1, br: s.readString, bw: n.writeString } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new Q.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEcon_ClientGetItemShopOverlayAuthURL_Response";
    }
  },
  jn = class t extends ae {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.language || f(t.M()),
        ae.initialize(this, e, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              language: { n: 1, br: s.readString, bw: n.writeString },
              appid: { n: 2, br: s.readUint32, bw: n.writeUint32 },
              classes: { n: 3, c: En, r: !0, q: !0 },
              high_pri: { n: 4, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new Q.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEcon_GetAssetClassInfo_Request";
    }
  },
  En = class t extends ae {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.classid || f(t.M()),
        ae.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              classid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              instanceid: {
                n: 2,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new Q.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEcon_GetAssetClassInfo_Request_Class";
    }
  },
  qn = class t extends ae {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.descriptions || f(t.M()),
        ae.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { descriptions: { n: 1, c: Gi, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new Q.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new Q.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEcon_GetAssetClassInfo_Response";
    }
  },
  Nn;
((a) => {
  function t(o, l) {
    return o.SendMsg("Econ.GetInventoryItemsWithDescriptions#1", v(Br, l), In, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
    });
  }
  a.GetInventoryItemsWithDescriptions = t;
  function e(o, l) {
    return o.SendMsg("Econ.GetTradeOfferAccessToken#1", v(kn, l), Hn, {
      ePrivilege: 1,
    });
  }
  a.GetTradeOfferAccessToken = e;
  function r(o, l) {
    return o.SendMsg("Econ.ClientGetItemShopOverlayAuthURL#1", v(An, l), Tn, {
      ePrivilege: 1,
    });
  }
  a.ClientGetItemShopOverlayAuthURL = r;
  function i(o, l) {
    return o.SendMsg("Econ.GetAssetClassInfo#1", v(jn, l), qn, {
      ePrivilege: 1,
    });
  }
  a.GetAssetClassInfo = i;
})((Nn ||= {}));
var id = K(hu()),
  sd = K(we());
var pa = K(ut());
function oa(t) {
  return atob(t.replace(/-/g, "+").replace(/_/g, "/"));
}
var Zm = 60 * 15,
  vy = 60 * 3;
function la(t) {
  try {
    if (!t || typeof t != "string") return null;
    let e = t.split(".");
    if (e.length !== 3) return null;
    let [r, i] = e,
      a = oa(r),
      o = oa(i);
    return !a || !o ? null : { header: JSON.parse(a), body: JSON.parse(o) };
  } catch (e) {
    return (
      console.error(`Exception while attempting to decode token: "${e}"`), null
    );
  }
}
function ed(t) {
  return t ? t.body.exp : 0;
}
function S_(t) {
  return t ? t.body.nbf || t.body.iat : 0;
}
function td(t) {
  let e = ed(t),
    r = S_(t),
    i = Zm,
    a = e - r;
  return a < Zm * 1.5 && (i = a <= 60 ? 0 : 60), ed(t) - i < Date.now() / 1e3;
}
var It = class {
  m_ServiceTransport;
  m_AnonymousServiceTransport;
  m_strWebAPIBaseURL;
  m_webApiAccessToken = "";
  m_bJsonMode = !1;
  m_strSpoofedSteamID = "";
  m_bJWTToken = !1;
  m_fnRequestNewAccessToken;
  m_refreshAccessTokenPromise;
  m_dtLastExpireCheck = 0;
  constructor(e, r, i = !1, a) {
    (this.m_strWebAPIBaseURL = e),
      (this.m_webApiAccessToken = r),
      (this.m_bJsonMode = i),
      (this.m_fnRequestNewAccessToken = a),
      (this.m_bJWTToken = la(r) != null),
      (this.m_ServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, { bSendAuth: !0 }),
        SendNotification: this.SendNotification.bind(this, { bSendAuth: !0 }),
        MakeReady: this.MakeReady.bind(this),
      }),
      (this.m_AnonymousServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, { bSendAuth: !1 }),
        SendNotification: this.SendNotification.bind(this, { bSendAuth: !1 }),
        MakeReady: this.MakeReady.bind(this),
      });
    let o = St("steamLoginSpoofSteamID");
    o && /[0-9]+/g.test(o) && (this.m_strSpoofedSteamID = o);
  }
  WaitUntilLoggedOn() {
    return Promise.resolve();
  }
  GetServerRTime32() {
    return Number(new Date());
  }
  get steamid() {
    return new pe();
  }
  RTime32ToDate(e) {
    return new Date(e * 1e3);
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
  async SendMsgAndAwaitResponse(e, r, i, a, o) {
    let l = null;
    try {
      if (this.m_bJWTToken && e.bSendAuth) {
        let u = Date.now() / 1e3;
        if (this.m_refreshAccessTokenPromise)
          await this.m_refreshAccessTokenPromise;
        else if (
          this.m_fnRequestNewAccessToken &&
          u - this.m_dtLastExpireCheck > 60
        ) {
          this.m_dtLastExpireCheck = u;
          let y = la(this.m_webApiAccessToken);
          y &&
            td(y) &&
            ((this.m_refreshAccessTokenPromise =
              this.m_fnRequestNewAccessToken()),
            (this.m_webApiAccessToken = await this.m_refreshAccessTokenPromise),
            (this.m_refreshAccessTokenPromise = void 0));
        }
      }
      let p = await this.Send(e, r, i, o);
      if (p.status != 200 || !p.data) throw new Error("Request Error");
      if (
        ((l = Z.Init(a, 147)),
        p.headers &&
          (p.headers["x-eresult"] &&
            l.Hdr().set_eresult(parseInt(p.headers["x-eresult"])),
          p.headers["x-error_message"] &&
            l.Hdr().set_error_message(p.headers["x-error_message"])),
        this.m_bJsonMode)
      )
        l.SetBodyJSON(p.data.response);
      else {
        let u = new Zr(p.data),
          y = new sd.BinaryReader(
            u.GetPacket(),
            u.TellGet(),
            u.GetCountBytesRemaining(),
          );
        a.deserializeBinaryFromReader(l.Body(), y);
      }
    } catch (p) {
      let u =
          p &&
          typeof p == "object" &&
          "response" in p &&
          p?.response?.status === 401,
        y = u ? "Unauthorized" : null;
      (l = this.CreateFailedMsgProtobuf(a, 3, y)),
        u &&
          !this.m_refreshAccessTokenPromise &&
          this.m_bJWTToken &&
          e.bSendAuth &&
          this.m_fnRequestNewAccessToken &&
          ((this.m_refreshAccessTokenPromise =
            this.m_fnRequestNewAccessToken()),
          (this.m_webApiAccessToken = await this.m_refreshAccessTokenPromise),
          (this.m_refreshAccessTokenPromise = void 0));
    }
    return l;
  }
  SendNotification(e, r, i, a) {
    return this.Send(e, r, i, a), !0;
  }
  Send(e, r, i, a) {
    let o = this.CreateWebAPIURL(r);
    if (!o) throw "Couldn't find service name " + r;
    let l = i.SerializeBody(),
      p = id.fromByteArray(l),
      u = a?.eWebAPIKeyRequirement,
      y = a?.ePrivilege == 0 && u == 1,
      C = {
        responseType: this.m_bJsonMode ? "json" : "arraybuffer",
        params: {},
        headers: a?.bConstMethod
          ? {}
          : { "Content-Type": "multipart/form-data" },
      };
    if (
      (!e.bSendAuth &&
        u != 1 &&
        console.error(
          `Attempting to invoke service ${r} without auth, but auth is required.`,
        ),
      this.m_webApiAccessToken &&
        e.bSendAuth &&
        !y &&
        ((C.params.access_token = this.m_webApiAccessToken),
        (C.params.spoof_steamid = this.m_strSpoofedSteamID)),
      a?.bConstMethod)
    )
      return (
        (C.params.origin = self.origin),
        this.m_bJsonMode
          ? (C.params.input_json = JSON.stringify(i.Body().toObject()))
          : (C.params.input_protobuf_encoded = p),
        pa.default.get(o, C)
      );
    {
      let k = new FormData();
      return (
        this.m_bJsonMode
          ? k.append("input_json", JSON.stringify(i.Body().toObject()))
          : k.append("input_protobuf_encoded", p),
        pa.default.post(o, k, C)
      );
    }
  }
  CreateWebAPIURL(e) {
    let r = /([^\.]+)\.(.+)#(\d+)/,
      i = e.match(r);
    return !i || i.length != 4
      ? null
      : `${this.m_strWebAPIBaseURL}I${i[1]}Service/${i[2]}/v${i[3]}`;
  }
  CreateFailedMsgProtobuf(e, r, i) {
    let a = Z.Init(e);
    return (
      a.Hdr().set_eresult(2),
      a.Hdr().set_transport_error(r),
      i && a.Hdr().set_error_message(i),
      a
    );
  }
};
T([_e], It.prototype, "SendMsgAndAwaitResponse", 1),
  T([_e], It.prototype, "SendNotification", 1),
  T([_e], It.prototype, "Send", 1);
var nd = K(ut());
function ad(t) {
  if (nd.default.isCancel(t))
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
      if (typeof t == "object" && t instanceof Z)
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
var F = K(we());
var j = F.Message;
var Ke = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.gid || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              gid: { n: 1, br: s.readFixed64String, bw: n.writeFixed64String },
              title: { n: 2, br: s.readString, bw: n.writeString },
              type: { n: 3, br: s.readEnum, bw: n.writeEnum },
              visibility: { n: 4, br: s.readEnum, bw: n.writeEnum },
              priority: { n: 5, br: s.readUint32, bw: n.writeUint32 },
              association_type: { n: 6, br: s.readEnum, bw: n.writeEnum },
              associated_id: { n: 7, br: s.readUint32, bw: n.writeUint32 },
              associated_name: { n: 8, br: s.readString, bw: n.writeString },
              start_date: { n: 9, br: s.readUint32, bw: n.writeUint32 },
              end_date: { n: 10, br: s.readUint32, bw: n.writeUint32 },
              country_allow: { n: 11, br: s.readString, bw: n.writeString },
              country_deny: { n: 12, br: s.readString, bw: n.writeString },
              ownership_restrictions_overridden: {
                n: 13,
                br: s.readBool,
                bw: n.writeBool,
              },
              must_own_appid: { n: 14, br: s.readUint32, bw: n.writeUint32 },
              must_not_own_appid: {
                n: 15,
                br: s.readUint32,
                bw: n.writeUint32,
              },
              must_own_packageid: {
                n: 16,
                br: s.readUint32,
                bw: n.writeUint32,
              },
              must_not_own_packageid: {
                n: 17,
                br: s.readUint32,
                bw: n.writeUint32,
              },
              must_have_launched_appid: {
                n: 18,
                br: s.readUint32,
                bw: n.writeUint32,
              },
              additional_restrictions: {
                n: 19,
                br: s.readString,
                bw: n.writeString,
              },
              template_type: { n: 20, br: s.readString, bw: n.writeString },
              template_vars: { n: 21, br: s.readString, bw: n.writeString },
              flags: { n: 22, br: s.readUint32, bw: n.writeUint32 },
              creator_name: { n: 23, br: s.readString, bw: n.writeString },
              template_vars_json: {
                n: 24,
                br: s.readString,
                bw: n.writeString,
              },
              additional_restrictions_json: {
                n: 25,
                br: s.readString,
                bw: n.writeString,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessageProto";
    }
  },
  Ir = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.gid || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              gid: { n: 1, br: s.readFixed64String, bw: n.writeFixed64String },
              title: { n: 2, br: s.readString, bw: n.writeString },
              type: { n: 3, br: s.readEnum, bw: n.writeEnum },
              associated_item_id: { n: 4, c: lt },
              associated_item: { n: 5, c: nu },
              associated_name: { n: 6, br: s.readString, bw: n.writeString },
              template_type: { n: 10, br: s.readString, bw: n.writeString },
              template_vars_json: {
                n: 11,
                br: s.readString,
                bw: n.writeString,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CDisplayMarketingMessage";
    }
  },
  ua = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.country || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              country: { n: 1, br: s.readString, bw: n.writeString },
              anonymous_user: { n: 2, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_GetActiveMarketingMessages_Request";
    }
  },
  ma = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.messages || f(t.M()),
        j.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              messages: { n: 1, c: Ke, r: !0, q: !0 },
              time_next_message_age: {
                n: 2,
                br: s.readUint32,
                bw: n.writeUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_GetActiveMarketingMessages_Response";
    }
  },
  da = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.start_past_days || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              start_past_days: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              upto_past_days: { n: 2, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_GetPastMarketingMessages_Request";
    }
  },
  ca = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.messages || f(t.M()),
        j.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { messages: { n: 1, c: Ke, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_GetPastMarketingMessages_Response";
    }
  },
  _a = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.include_seen_messages || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              include_seen_messages: { n: 1, br: s.readBool, bw: n.writeBool },
              country_code: { n: 2, br: s.readString, bw: n.writeString },
              elanguage: { n: 3, br: s.readInt32, bw: n.writeInt32 },
              operating_system: { n: 4, br: s.readInt32, bw: n.writeInt32 },
              client_package_version: {
                n: 5,
                br: s.readInt32,
                bw: n.writeInt32,
              },
              context: { n: 6, c: zs },
              data_request: { n: 7, c: cr },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_GetMarketingMessagesForUser_Request";
    }
  },
  ga = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.messages || f(t.M()),
        j.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { messages: { n: 1, c: fa, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_GetMarketingMessagesForUser_Response";
    }
  },
  fa = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.already_seen || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              already_seen: { n: 1, br: s.readBool, bw: n.writeBool },
              message: { n: 2, c: Ir },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser";
    }
  },
  ya = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.country_code || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              country_code: { n: 2, br: s.readString, bw: n.writeString },
              elanguage: { n: 3, br: s.readInt32, bw: n.writeInt32 },
              operating_system: { n: 4, br: s.readInt32, bw: n.writeInt32 },
              client_package_version: {
                n: 5,
                br: s.readInt32,
                bw: n.writeInt32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Request";
    }
  },
  Ca = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.has_pending_messages || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              has_pending_messages: { n: 1, br: s.readBool, bw: n.writeBool },
              pending_message_count: {
                n: 2,
                br: s.readInt32,
                bw: n.writeInt32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Response";
    }
  },
  wr = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.gid || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              gid: { n: 1, br: s.readFixed64String, bw: n.writeFixed64String },
              context: { n: 2, c: zs },
              data_request: { n: 3, c: cr },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_GetDisplayMarketingMessage_Request";
    }
  },
  Gr = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.message || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m || (t.sm_m = { proto: t, fields: { message: { n: 1, c: Ir } } }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_GetDisplayMarketingMessage_Response";
    }
  },
  Pa = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.gid || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              gid: { n: 1, br: s.readFixed64String, bw: n.writeFixed64String },
              display_index: {
                n: 2,
                d: 0,
                br: s.readUint32,
                bw: n.writeUint32,
              },
              template_type: { n: 3, d: 0, br: s.readEnum, bw: n.writeEnum },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_MarkMessageSeen_Notification";
    }
  },
  Ra = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.gid || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              gid: { n: 1, br: s.readFixed64String, bw: n.writeFixed64String },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_GetMarketingMessage_Request";
    }
  },
  ba = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.message || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m || (t.sm_m = { proto: t, fields: { message: { n: 1, c: Ke } } }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_GetMarketingMessage_Response";
    }
  },
  Ma = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.lookup_type || f(t.M()),
        j.initialize(this, e, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              lookup_type: { n: 1, br: s.readEnum, bw: n.writeEnum },
              gid: { n: 2, br: s.readFixed64String, bw: n.writeFixed64String },
              message_type: { n: 3, br: s.readEnum, bw: n.writeEnum },
              gidlist: {
                n: 4,
                r: !0,
                q: !0,
                br: s.readFixed64String,
                pbr: s.readPackedFixed64String,
                bw: n.writeRepeatedFixed64String,
              },
              title: { n: 5, br: s.readString, bw: n.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_FindMarketingMessages_Request";
    }
  },
  va = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.messages || f(t.M()),
        j.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { messages: { n: 1, c: Ke, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_FindMarketingMessages_Response";
    }
  },
  Ba = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.message || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              message: { n: 1, c: Ke },
              from_json: { n: 2, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_CreateMarketingMessage_Request";
    }
  },
  Sa = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.gid || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              gid: { n: 1, br: s.readFixed64String, bw: n.writeFixed64String },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_CreateMarketingMessage_Response";
    }
  },
  ha = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.gid || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              gid: { n: 1, br: s.readFixed64String, bw: n.writeFixed64String },
              message: { n: 2, c: Ke },
              from_json: { n: 3, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_UpdateMarketingMessage_Request";
    }
  },
  Fa = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), j.initialize(this, e, 0, -1, void 0, null);
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
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_UpdateMarketingMessage_Response";
    }
  },
  wa = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.gid || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              gid: { n: 1, br: s.readFixed64String, bw: n.writeFixed64String },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_DeleteMarketingMessage_Request";
    }
  },
  Ga = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), j.initialize(this, e, 0, -1, void 0, null);
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
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_DeleteMarketingMessage_Response";
    }
  },
  Ia = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.gid || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              gid: { n: 1, br: s.readFixed64String, bw: n.writeFixed64String },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_GetMarketingMessageViewerStats_Request";
    }
  },
  zi = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.rt_time_hour || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              rt_time_hour: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              seen_count: { n: 2, br: s.readUint32, bw: n.writeUint32 },
              template_type: { n: 3, br: s.readEnum, bw: n.writeEnum },
              display_index: { n: 4, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessageHourlyStats";
    }
  },
  ka = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.stats || f(t.M()),
        j.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { stats: { n: 1, c: zi, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_GetMarketingMessageViewerStats_Response";
    }
  },
  Ha = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.rt_start_time || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              rt_start_time: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              rt_end_time: { n: 2, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_GetMarketingMessagesViewerRangeStats_Request";
    }
  },
  Aa = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.stats || f(t.M()),
        j.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { stats: { n: 1, c: zi, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_GetMarketingMessagesViewerRangeStats_Response";
    }
  },
  Ta = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.partnerid || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              partnerid: { n: 1, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_GetPartnerReadyToPublishMessages_Request";
    }
  },
  ja = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.messages || f(t.M()),
        j.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { messages: { n: 1, c: Ir, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_GetPartnerReadyToPublishMessages_Response";
    }
  },
  Ea = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.gid || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              gid: { n: 1, br: s.readFixed64String, bw: n.writeFixed64String },
              partnerid: { n: 2, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_PartnerPublishMessage_Request";
    }
  },
  qa = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), j.initialize(this, e, 0, -1, void 0, null);
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
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_PartnerPublishMessage_Response";
    }
  },
  Na = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.gid || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              gid: { n: 1, br: s.readFixed64String, bw: n.writeFixed64String },
              partnerid: { n: 2, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_GetPartnerMessagePreview_Request";
    }
  },
  za = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.message || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m || (t.sm_m = { proto: t, fields: { message: { n: 1, c: Ke } } }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessages_GetPartnerMessagePreview_Response";
    }
  },
  xa = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appids || f(t.M()),
        j.initialize(this, e, 0, -1, [1], null);
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
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: n.writeRepeatedUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessage_GetMarketingMessagesForApps_Request";
    }
  },
  Da = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.messages || f(t.M()),
        j.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { messages: { n: 1, c: Ke, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessage_GetMarketingMessagesForApps_Response";
    }
  },
  Wa = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.partnerid || f(t.M()),
        j.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              partnerid: { n: 1, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessage_GetMarketingMessagesForPartner_Request";
    }
  },
  Ua = class t extends j {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.messages || f(t.M()),
        j.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { messages: { n: 1, c: Ke, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new F.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new F.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CMarketingMessage_GetMarketingMessagesForPartner_Response";
    }
  },
  h_;
((Fe) => {
  function t(W, E) {
    return W.SendMsg(
      "MarketingMessages.GetActiveMarketingMessages#1",
      v(ua, E),
      ma,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  Fe.GetActiveMarketingMessages = t;
  function e(W, E) {
    return W.SendMsg(
      "MarketingMessages.GetPastMarketingMessages#1",
      v(da, E),
      ca,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  Fe.GetPastMarketingMessages = e;
  function r(W, E) {
    return W.SendMsg(
      "MarketingMessages.GetMarketingMessagesForUser#1",
      v(_a, E),
      ga,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  Fe.GetMarketingMessagesForUser = r;
  function i(W, E) {
    return W.SendMsg(
      "MarketingMessages.DoesUserHavePendingMarketingMessages#1",
      v(ya, E),
      Ca,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  Fe.DoesUserHavePendingMarketingMessages = i;
  function a(W, E) {
    return W.SendMsg(
      "MarketingMessages.GetDisplayMarketingMessage#1",
      v(wr, E),
      Gr,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  Fe.GetDisplayMarketingMessage = a;
  function o(W, E) {
    return W.SendMsg(
      "MarketingMessages.GetDisplayMarketingMessageForUser#1",
      v(wr, E),
      Gr,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  Fe.GetDisplayMarketingMessageForUser = o;
  function l(W, E) {
    return W.SendMsg(
      "MarketingMessages.GetDisplayMarketingMessageAdmin#1",
      v(wr, E),
      Gr,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  Fe.GetDisplayMarketingMessageAdmin = l;
  function p(W, E) {
    return W.SendNotification("MarketingMessages.MarkMessageSeen#1", v(Pa, E), {
      ePrivilege: 1,
    });
  }
  Fe.MarkMessageSeen = p;
  function u(W, E) {
    return W.SendMsg("MarketingMessages.GetMarketingMessage#1", v(Ra, E), ba, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  Fe.GetMarketingMessage = u;
  function y(W, E) {
    return W.SendMsg(
      "MarketingMessages.CreateMarketingMessage#1",
      v(Ba, E),
      Sa,
      { ePrivilege: 4 },
    );
  }
  Fe.CreateMarketingMessage = y;
  function C(W, E) {
    return W.SendMsg(
      "MarketingMessages.UpdateMarketingMessage#1",
      v(ha, E),
      Fa,
      { ePrivilege: 5 },
    );
  }
  Fe.UpdateMarketingMessage = C;
  function M(W, E) {
    return W.SendMsg(
      "MarketingMessages.DeleteMarketingMessage#1",
      v(wa, E),
      Ga,
      { ePrivilege: 4 },
    );
  }
  Fe.DeleteMarketingMessage = M;
  function k(W, E) {
    return W.SendMsg(
      "MarketingMessages.FindMarketingMessages#1",
      v(Ma, E),
      va,
      { ePrivilege: 5 },
    );
  }
  Fe.FindMarketingMessages = k;
  function B(W, E) {
    return W.SendMsg(
      "MarketingMessages.GetMarketingMessageViewerStats#1",
      v(Ia, E),
      ka,
      { ePrivilege: 4 },
    );
  }
  Fe.GetMarketingMessageViewerStats = B;
  function x(W, E) {
    return W.SendMsg(
      "MarketingMessages.GetMarketingMessagesViewerRangeStats#1",
      v(Ha, E),
      Aa,
      { ePrivilege: 4 },
    );
  }
  Fe.GetMarketingMessagesViewerRangeStats = x;
  function H(W, E) {
    return W.SendMsg(
      "MarketingMessages.GetPartnerReadyToPublishMessages#1",
      v(Ta, E),
      ja,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  Fe.GetPartnerReadyToPublishMessages = H;
  function h(W, E) {
    return W.SendMsg(
      "MarketingMessages.PublishPartnerMessage#1",
      v(Ea, E),
      qa,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  Fe.PublishPartnerMessage = h;
  function D(W, E) {
    return W.SendMsg(
      "MarketingMessages.GetPartnerMessagePreview#1",
      v(Na, E),
      za,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  Fe.GetPartnerMessagePreview = D;
  function U(W, E) {
    return W.SendMsg(
      "MarketingMessages.GetMarketingMessagesForPartner#1",
      v(Wa, E),
      Ua,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  Fe.GetMarketingMessagesForPartner = U;
  function re(W, E) {
    return W.SendMsg(
      "MarketingMessages.GetMarketingMessagesForApps#1",
      v(xa, E),
      Da,
      { ePrivilege: 4 },
    );
  }
  Fe.GetMarketingMessagesForApps = re;
})((h_ ||= {}));
function ld(t) {
  switch (t) {
    case 0:
      return "app";
    case 2:
      return "bundle";
    case 1:
      return "package";
    case 3:
      return "mtx";
  }
  return "invalid";
}
function pd(t) {
  return F_(
    t.coming_soon_display,
    t.steam_release_date,
    t.custom_release_date_message,
  );
}
function F_(t, e, r, i) {
  switch (t) {
    case "date_full":
      return _r(e);
    case "date_month":
      return ei(new Date(e * 1e3));
    case "date_quarter":
      return gu(new Date(e * 1e3), i);
    case "date_year":
      return _u(new Date(e * 1e3));
    case "text_comingsoon":
      return r || q("#Store_ComingSoon_ComingSoon");
    case "text_tba":
      return r || q("#Store_ComingSoon_TBA");
    default:
      return "";
  }
}
var Xt = class t {
  m_eItemType;
  m_unID;
  m_bVisible = !1;
  m_strName;
  m_strStoreURLPath;
  m_unAppID;
  m_eAppType;
  m_rgIncludedAppTypes;
  m_rgIncludedAppIDs;
  m_bIsFree;
  m_bIsFreeTemporary;
  m_bIsComingSoon;
  m_bIsEarlyAccess;
  m_RelatedItems;
  m_ContentDescriptorIDs;
  m_StoreCategories;
  m_ReviewInfo;
  m_BasicInfo;
  m_rgStoreTags = [];
  m_rgStoreTagIDs = [];
  m_Assets;
  m_AssetsWithoutOverrides;
  m_ReleaseInfo;
  m_Platforms;
  m_BestPurchaseOption;
  m_SelfPurchaseOption;
  m_rgPurchaseOptions;
  m_Screenshots;
  m_Trailers;
  m_rgSupportedLanguages;
  m_strStoreURLPathOverride;
  m_freeWeekend;
  m_DataRequested = { include_tag_count: 0 };
  m_strInternalName;
  m_rgLinks;
  constructor(e, r) {
    (this.m_eItemType = e.item_type()),
      (this.m_unID = e.id()),
      (this.m_bVisible = !!e.visible()),
      (this.m_strName = e.name()),
      (this.m_strStoreURLPath = e.store_url_path()),
      (this.m_unAppID = e.appid()),
      (this.m_eAppType = e.type()),
      (this.m_rgIncludedAppTypes = e.included_types()),
      (this.m_rgIncludedAppIDs = e.included_appids()),
      (this.m_bIsFree = !!e.is_free()),
      (this.m_bIsFreeTemporary = !!e.is_free_temporarily()),
      (this.m_bIsComingSoon = !!e.is_coming_soon()),
      (this.m_bIsEarlyAccess = !!e.is_early_access()),
      (this.m_RelatedItems = e.related_items()?.toObject()),
      (this.m_ContentDescriptorIDs = e.content_descriptorids()),
      (this.m_StoreCategories = e.categories().toObject()),
      (this.m_BestPurchaseOption = e.best_purchase_option()?.toObject()),
      (this.m_strStoreURLPathOverride = e.store_url_path_override()),
      (this.m_freeWeekend = e.free_weekend()?.toObject()),
      (this.m_strInternalName = e.internal_name()),
      (this.m_eItemType == 1 || this.m_eItemType == 2) &&
        (this.m_SelfPurchaseOption = e.self_purchase_option(!1)
          ? e.self_purchase_option().toObject()
          : this.m_BestPurchaseOption),
      this.MergeData(e, r);
  }
  MergeData(e, r) {
    r.include_assets &&
      !this.m_Assets &&
      ((this.m_Assets = new Wi(e.assets(), e.id())),
      (this.m_DataRequested.include_assets = !0)),
      r.include_assets_without_overrides &&
        !this.m_AssetsWithoutOverrides &&
        ((this.m_AssetsWithoutOverrides = new Wi(
          e.assets_without_overrides(),
          e.id(),
        )),
        (this.m_DataRequested.include_assets_without_overrides = !0)),
      r.include_release &&
        !this.m_ReleaseInfo &&
        ((this.m_ReleaseInfo = e.release().toObject()),
        (this.m_DataRequested.include_release = !0)),
      r.include_platforms &&
        !this.m_Platforms &&
        ((this.m_Platforms = e.platforms().toObject()),
        (this.m_DataRequested.include_platforms = !0)),
      r.include_all_purchase_options &&
        !this.m_rgPurchaseOptions &&
        ((this.m_rgPurchaseOptions = e
          .purchase_options()
          .map((i) => i.toObject())),
        (this.m_DataRequested.include_all_purchase_options = !0)),
      r.include_screenshots &&
        !this.m_Screenshots &&
        ((this.m_Screenshots = new La(e.screenshots())),
        (this.m_DataRequested.include_screenshots = !0)),
      r.include_trailers &&
        !this.m_Trailers &&
        ((this.m_Trailers = new Oa(e.trailers())),
        (this.m_DataRequested.include_trailers = !0)),
      r.include_tag_count &&
        r.include_tag_count > this.m_rgStoreTags.length &&
        this.m_DataRequested.include_tag_count < r.include_tag_count &&
        ((this.m_rgStoreTags = e.tags().map((i) => i.toObject())),
        (this.m_rgStoreTagIDs = this.m_rgStoreTags.map((i) => i.tagid)),
        (this.m_DataRequested.include_tag_count = Math.max(
          r.include_tag_count,
          this.m_rgStoreTags.length || 0,
        ))),
      r.include_reviews &&
        !this.m_ReviewInfo &&
        ((this.m_ReviewInfo = e.reviews().toObject()),
        (this.m_DataRequested.include_reviews = !0)),
      r.include_basic_info &&
        !this.m_BasicInfo &&
        ((this.m_BasicInfo = e.basic_info().toObject()),
        (this.m_DataRequested.include_basic_info = !0)),
      r.include_supported_languages &&
        !this.m_rgSupportedLanguages &&
        ((this.m_rgSupportedLanguages = e
          .supported_languages()
          .map((i) => i.toObject())),
        (this.m_DataRequested.include_supported_languages = !0)),
      r.include_links &&
        !this.m_rgLinks &&
        ((this.m_rgLinks = e.links().map((i) => i.toObject())),
        (this.m_DataRequested.include_links = !0));
  }
  static BDataRequestContainsOtherDataRequest(e, r) {
    return !!(
      (!r.include_assets || e.include_assets) &&
      (!r.include_assets_without_overrides ||
        e.include_assets_without_overrides) &&
      (!r.include_release || e.include_release) &&
      (!r.include_platforms || e.include_platforms) &&
      (!r.include_all_purchase_options || e.include_all_purchase_options) &&
      (!r.include_screenshots || e.include_screenshots) &&
      (!r.include_trailers || e.include_trailers) &&
      (!r.include_ratings || e.include_ratings) &&
      (!r.include_tag_count ||
        (e.include_tag_count || 0) >= r.include_tag_count) &&
      (!r.include_reviews || e.include_reviews) &&
      (!r.include_basic_info || e.include_basic_info) &&
      (!r.include_supported_languages || e.include_supported_languages) &&
      (!r.include_links || e.include_links)
    );
  }
  BContainDataRequest(e) {
    return t.BDataRequestContainsOtherDataRequest(this.m_DataRequested, e);
  }
  BCheckDataRequestIncluded(e) {
    (w.WEB_UNIVERSE == "dev" || w.WEB_UNIVERSE == "beta") &&
      le(
        this.BContainDataRequest(e),
        `Requested data without for ${ld(this.m_eItemType)} @ ${this.m_unID}`,
        e,
        this.m_DataRequested,
      );
  }
  GetStoreItemType() {
    return this.m_eItemType;
  }
  GetID() {
    return this.m_unID;
  }
  GetUniqueID() {
    return this.m_eItemType + "_" + this.m_unID;
  }
  BIsVisible() {
    return this.m_bVisible;
  }
  GetName() {
    return this.m_strName;
  }
  GetStorePageURL(e = !1) {
    return e && this.HasDemoStandaloneStorePage()
      ? w.STORE_BASE_URL + "app/" + this.GetDemoStandaloneStorePageAppIDs()[0]
      : w.STORE_BASE_URL + this.m_strStoreURLPath;
  }
  GetStorePageURLWithOverride() {
    return this.m_strStoreURLPathOverride &&
      this.m_strStoreURLPathOverride.length > 0
      ? this.GetStorePageURLOverride()
      : this.GetStorePageURL();
  }
  GetStorePageURLOverride() {
    return this.m_strStoreURLPathOverride;
  }
  GetCommunityPageURL() {
    return this.GetAppID()
      ? w.COMMUNITY_BASE_URL + "app/" + this.GetAppID()
      : null;
  }
  GetCommunityDiscussionForumsURL() {
    return this.GetAppID()
      ? w.COMMUNITY_BASE_URL + "app/" + this.GetAppID() + "/discussions/"
      : null;
  }
  GetAppID() {
    return this.m_unAppID;
  }
  GetAppIDToRun() {
    let e = this.GetParentAppID();
    return e && this.m_eAppType != 11 ? e : this.GetAppID();
  }
  GetAppType() {
    return this.m_eAppType;
  }
  BIsApplicationOrTool() {
    return this.GetAppType() == 6 || this.GetAppType() == 13;
  }
  k_regexSalePage =
    /^https?:\/\/[^\/]*(?:valvesoftware|steampowered).com\/(?:(curator|dev|developer|pub|publisher|franchise)\/[0-9a-zA-Z\-_]+\/)?sale\//;
  BIsSalePage() {
    return this.GetStoreItemType() === 0
      ? this.k_regexSalePage.test(this.GetStorePageURLWithOverride())
      : !1;
  }
  GetSalePageVanityURL() {
    let e = this.GetStorePageURLWithOverride();
    return (
      this.GetStoreItemType() === 0 &&
        ((e = this.GetStorePageURLWithOverride().replace(
          this.k_regexSalePage,
          "",
        )),
        e.endsWith("/") && (e = e.replace("/", ""))),
      e
    );
  }
  GetIncludedAppTypes() {
    return this.m_rgIncludedAppTypes;
  }
  GetIncludedAppIDs() {
    return this.m_rgIncludedAppIDs;
  }
  GetIncludedAppIDsOrSelf() {
    return this.GetStoreItemType() == 0
      ? [this.GetID()]
      : this.GetIncludedAppIDs();
  }
  BIsFree() {
    return this.m_bIsFree;
  }
  BIsFreeTemporary() {
    return this.m_bIsFreeTemporary;
  }
  BIsFreeWeekend() {
    let e = Date.now() / 1e3;
    return (
      !!this.m_freeWeekend &&
      this.m_freeWeekend.start_time <= e &&
      e <= this.m_freeWeekend.end_time
    );
  }
  GetFreeWeekendEnd() {
    return this.m_freeWeekend?.end_time;
  }
  GetFreeWeekendPlayTextOverride() {
    return this.m_freeWeekend?.text;
  }
  BIsEarlyAccess() {
    return this.m_bIsEarlyAccess;
  }
  GetParentAppID() {
    return this.m_RelatedItems?.parent_appid;
  }
  BHasDemo() {
    return (this.m_RelatedItems?.demo_appid?.length ?? 0) > 0;
  }
  GetDemoAppIDs() {
    return this.m_RelatedItems?.demo_appid ?? [];
  }
  HasDemoStandaloneStorePage() {
    return (this.m_RelatedItems?.standalone_demo_appid?.length ?? 0) > 0;
  }
  GetDemoStandaloneStorePageAppIDs() {
    return this.m_RelatedItems?.standalone_demo_appid ?? [];
  }
  GetContentDescriptorIDs() {
    return this.m_ContentDescriptorIDs;
  }
  HasContentDescriptorID(e) {
    return this.m_ContentDescriptorIDs?.includes(e);
  }
  GetStoreCategories_SupportedPlayers() {
    return this.m_StoreCategories?.supported_player_categoryids || [];
  }
  GetStoreCategories_Features() {
    return this.m_StoreCategories?.feature_categoryids || [];
  }
  GetStoreCategories_Controller() {
    return this.m_StoreCategories?.controller_categoryids || [];
  }
  BHasStoreCategory(e) {
    return !!(
      this.GetStoreCategories_SupportedPlayers().find((r) => e === r) ||
      this.GetStoreCategories_Features().find((r) => e === r) ||
      this.GetStoreCategories_Controller().find((r) => e === r)
    );
  }
  GetFilteredReviewSummary() {
    return (
      this.BCheckDataRequestIncluded({ include_reviews: !0 }),
      this.m_ReviewInfo?.summary_filtered
    );
  }
  GetUnfilteredReviewSummary() {
    return (
      this.BCheckDataRequestIncluded({ include_reviews: !0 }),
      this.m_ReviewInfo?.summary_unfiltered ||
        this.m_ReviewInfo?.summary_filtered
    );
  }
  GetShortDescription() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo?.short_description ?? ""
    );
  }
  GetDeveloperNames() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo?.developers
        ?.map((e) => e.name.trim())
        ?.filter((e) => e?.length > 0) ?? []
    );
  }
  GetFranchiseNames() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo?.franchises
        ?.map((e) => e.name.trim())
        ?.filter((e) => e?.length > 0) ?? []
    );
  }
  GetPublisherNames() {
    this.BCheckDataRequestIncluded({ include_basic_info: !0 });
    let e =
      this.m_BasicInfo?.publishers
        ?.map((r) => r.name.trim())
        ?.filter((r) => r?.length > 0) ?? [];
    return e?.length > 0 ? e : this.GetDeveloperNames();
  }
  GetAllCreatorClanIDs() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo
        ? Di([
            ...this.m_BasicInfo.developers,
            ...this.m_BasicInfo.publishers,
            ...this.m_BasicInfo.franchises,
          ])
        : []
    );
  }
  GetAllPublisherCreatorClans() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo ? Di(this.m_BasicInfo.publishers) : []
    );
  }
  GetAllDeveloperCreatorClans() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo ? Di(this.m_BasicInfo.developers) : []
    );
  }
  GetAllFranchiseCreatorClans() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo ? Di(this.m_BasicInfo.franchises) : []
    );
  }
  GetCapsuleHeadline() {
    return (
      this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
      this.m_BasicInfo?.capsule_headline
    );
  }
  GetTags() {
    return (
      this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
      this.m_rgStoreTags
    );
  }
  GetTagIDs() {
    return (
      this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
      this.m_rgStoreTagIDs
    );
  }
  BHasTags() {
    return (
      this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
      this.m_rgStoreTagIDs?.length > 0
    );
  }
  GetAssets() {
    return (
      this.BCheckDataRequestIncluded({ include_assets: !0 }), this.m_Assets
    );
  }
  GetAssetsWithoutOverrides() {
    return (
      this.BCheckDataRequestIncluded({ include_assets_without_overrides: !0 }),
      this.m_AssetsWithoutOverrides
    );
  }
  GetOriginalReleaseDateRTime() {
    this.BCheckDataRequestIncluded({ include_release: !0 });
    let e = this.m_ReleaseInfo?.original_steam_release_date;
    return e || (e = this.GetReleaseDateRTime()), e;
  }
  GetReleaseDateRTime(e = !1) {
    if (
      (this.BCheckDataRequestIncluded({ include_release: !0 }),
      this.m_ReleaseInfo?.is_coming_soon && !e)
    )
      return 0;
    let r = this.m_ReleaseInfo?.steam_release_date;
    return r || (r = this.m_ReleaseInfo?.original_release_date), r;
  }
  GetFormattedSteamReleaseDate() {
    if (
      (this.BCheckDataRequestIncluded({ include_release: !0 }),
      this.m_ReleaseInfo?.is_coming_soon)
    ) {
      if (this.m_ReleaseInfo?.coming_soon_display)
        return pd(this.m_ReleaseInfo);
      if (this.m_ReleaseInfo?.custom_release_date_message)
        return this.m_ReleaseInfo.custom_release_date_message;
      let r = this.m_ReleaseInfo?.steam_release_date;
      return r
        ? this.m_ReleaseInfo?.is_abridged_release_date
          ? ei(new Date(r * 1e3))
          : _r(r)
        : "";
    }
    let e = this.GetReleaseDateRTime();
    return e ? _r(e) : "";
  }
  BIsComingSoon() {
    return this.m_bIsComingSoon;
  }
  BIsCustomComingSoonDisplay() {
    return (
      this.BCheckDataRequestIncluded({ include_release: !0 }),
      this.BIsComingSoon()
        ? this.m_ReleaseInfo?.coming_soon_display
          ? ["text_tba", "text_comingsoon"].includes(
              this.m_ReleaseInfo.coming_soon_display,
            )
          : !!this.m_ReleaseInfo?.custom_release_date_message
        : !1
    );
  }
  BIsPrePurchase() {
    return this.BIsComingSoon() && !!this.GetBestPurchaseOption()?.packageid;
  }
  BIsReleased() {
    return !this.BIsComingSoon();
  }
  GetPlatforms() {
    return (
      this.BCheckDataRequestIncluded({ include_platforms: !0 }),
      this.m_Platforms
    );
  }
  GetBestPurchaseOption() {
    return this.m_BestPurchaseOption;
  }
  GetBestPurchasePriceInCents() {
    if (this.m_BestPurchaseOption?.final_price_in_cents)
      return Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents);
  }
  GetBestPurchasePriceFormatted() {
    return this.m_BestPurchaseOption?.formatted_final_price;
  }
  GetBestPurchaseOriginalPriceInCents() {
    return this.m_BestPurchaseOption?.original_price_in_cents
      ? Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents)
      : this.GetBestPurchasePriceInCents();
  }
  GetBestPurchaseOriginalPriceFormatted() {
    return (
      this.m_BestPurchaseOption?.formatted_original_price ??
      this.m_BestPurchaseOption?.formatted_final_price
    );
  }
  GetAllPurchaseOptions() {
    return (
      this.BCheckDataRequestIncluded({ include_all_purchase_options: !0 }),
      this.m_rgPurchaseOptions
    );
  }
  GetSelfPurchaseOption() {
    return this.m_SelfPurchaseOption;
  }
  BHasAgeSafeScreenshots() {
    return this.GetOnlyAllAgesSafeScreenshots().length > 0;
  }
  GetOnlyAllAgesSafeScreenshots() {
    return (
      this.BCheckDataRequestIncluded({ include_screenshots: !0 }),
      this.m_Screenshots?.GetOnlyAllAgesScreenshots() || []
    );
  }
  GetBothAllAgesSafeAndMatureScreenshots() {
    return (
      this.BCheckDataRequestIncluded({ include_screenshots: !0 }),
      this.m_Screenshots?.GetAllAgesAndMatureScreenshots() || []
    );
  }
  BHasTrailers() {
    return (
      this.BCheckDataRequestIncluded({ include_trailers: !0 }),
      this.m_Trailers?.BHasTrailers()
    );
  }
  BHasHighlightTrailers() {
    return (
      this.BCheckDataRequestIncluded({ include_trailers: !0 }),
      (this.m_Trailers?.GetHighlightTrailers()?.length ?? 0) > 0
    );
  }
  GetAllTrailers() {
    return (
      this.BCheckDataRequestIncluded({ include_trailers: !0 }), this.m_Trailers
    );
  }
  BHasSomeLanguageSupport(e) {
    return (
      this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
      this.m_rgSupportedLanguages?.some(
        (r) => r.elanguage == e && (r.supported || r.subtitles || r.full_audio),
      ) || !1
    );
  }
  GetAllLanguagesWithSomeSupport() {
    return (
      this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
      this.m_rgSupportedLanguages
        ?.filter((e) => e.supported || e.subtitles || e.full_audio)
        .map((e) => e.elanguage) || []
    );
  }
  GetDataRequest() {
    return this.m_DataRequested;
  }
  GetMicroTrailer() {
    this.BCheckDataRequestIncluded({ include_trailers: !0 });
    let e = null;
    return (
      this.m_Trailers &&
        (this.m_Trailers.GetHighlightTrailers().forEach((r) => {
          !e && r.GetMicroTrailer() && (e = r.GetMicroTrailer());
        }),
        e ||
          this.m_Trailers.GetOtherTrailers().forEach((r) => {
            !e && r.GetMicroTrailer() && (e = r.GetMicroTrailer());
          })),
      e
    );
  }
  GetLinks() {
    return (
      this.BCheckDataRequestIncluded({ include_links: !0 }), this.m_rgLinks
    );
  }
  ReplaceBestPurchaseOption(e) {
    this.m_BestPurchaseOption = e;
  }
  GetInternalName() {
    return this.m_strInternalName;
  }
};
function Di(t) {
  if (!t?.length) return [];
  let e = t.map((r) => r.creator_clan_account_id).filter((r) => !!r);
  return Array.from(new Set(e));
}
var Wi = class {
    m_strMainCapsuleURL;
    m_strSmallCapsuleURL;
    m_strHeaderURL;
    m_strPackageHeaderURL;
    m_strPageBackgroundURL;
    m_strHeroCapsuleURL;
    m_strHeroCapsuleURL_2x;
    m_strLibraryCapsuleURL;
    m_strLibraryCapsuleURL_2x;
    m_strLibraryHeroURL;
    m_strLibraryHeroURL_2x;
    m_strCommunityIcon;
    m_strCommunityIcon_Full;
    constructor(e, r) {
      let i = e.asset_url_format();
      i &&
        (e.main_capsule() &&
          (this.m_strMainCapsuleURL = this.ConstructAssetURL(
            i,
            e.main_capsule(),
          )),
        e.small_capsule() &&
          (this.m_strSmallCapsuleURL = this.ConstructAssetURL(
            i,
            e.small_capsule(),
          )),
        e.header() &&
          (this.m_strHeaderURL = this.ConstructAssetURL(i, e.header())),
        e.package_header() &&
          (this.m_strPackageHeaderURL = this.ConstructAssetURL(
            i,
            e.package_header(),
          )),
        e.page_background() &&
          (this.m_strPageBackgroundURL = this.ConstructAssetURL(
            i,
            e.page_background(),
          )),
        e.hero_capsule() &&
          (this.m_strHeroCapsuleURL = this.ConstructAssetURL(
            i,
            e.hero_capsule(),
          )),
        e.hero_capsule_2x() &&
          (this.m_strHeroCapsuleURL_2x = this.ConstructAssetURL(
            i,
            e.hero_capsule_2x(),
          )),
        e.library_capsule() &&
          (this.m_strLibraryCapsuleURL = this.ConstructAssetURL(
            i,
            e.library_capsule(),
          )),
        e.library_capsule_2x() &&
          (this.m_strLibraryCapsuleURL_2x = this.ConstructAssetURL(
            i,
            e.library_capsule_2x(),
          )),
        e.library_hero() &&
          (this.m_strLibraryHeroURL = this.ConstructAssetURL(
            i,
            e.library_hero(),
          )),
        e.library_hero_2x() &&
          (this.m_strLibraryHeroURL_2x = this.ConstructAssetURL(
            i,
            e.library_hero_2x(),
          ))),
        e.community_icon() &&
          ((this.m_strCommunityIcon = `${w.MEDIA_CDN_COMMUNITY_URL}images/apps/${r}/${e.community_icon()}.jpg`),
          (this.m_strCommunityIcon_Full = `${w.MEDIA_CDN_COMMUNITY_URL}images/apps/${r}/${e.community_icon()}_full.jpg`));
    }
    GetMainCapsuleURL() {
      return this.m_strMainCapsuleURL;
    }
    GetSmallCapsuleURL() {
      return this.m_strSmallCapsuleURL;
    }
    GetHeaderURL() {
      return this.m_strHeaderURL;
    }
    GetPackageHeaderURL() {
      return this.m_strPackageHeaderURL;
    }
    GetPageBackgroundURL() {
      return this.m_strPageBackgroundURL;
    }
    GetHeroCapsuleURL() {
      return this.m_strHeroCapsuleURL;
    }
    GetHeroCapsuleURL_2x() {
      return this.m_strHeroCapsuleURL_2x;
    }
    GetLibraryCapsuleURL() {
      return this.m_strLibraryCapsuleURL;
    }
    GetLibraryCapsuleURL_2x() {
      return this.m_strLibraryCapsuleURL_2x;
    }
    GetLibraryHeroURL() {
      return this.m_strLibraryHeroURL;
    }
    GetLibraryHeroURL_2x() {
      return this.m_strLibraryHeroURL_2x;
    }
    ConstructAssetURL(e, r) {
      return (
        w.BASE_URL_SHARED_CDN +
        "/store_item_assets/" +
        e.replace("${FILENAME}", r)
      );
    }
    GetCommunityIconURL() {
      return this.m_strCommunityIcon;
    }
    GetCommunityIconURL_Full() {
      return this.m_strCommunityIcon_Full;
    }
  },
  Oa = class {
    m_mapTrailer = new Map();
    m_higherTrailers = new Array();
    m_otherTrailers = new Array();
    constructor(e) {
      e.highlights() &&
        e.highlights().forEach((r) => {
          let i = new Ui(r);
          this.m_mapTrailer.set(i.GetTrailerID(), i),
            this.m_higherTrailers.push(i);
        }),
        e.other_trailers() &&
          e.other_trailers().forEach((r) => {
            let i = new Ui(r);
            this.m_mapTrailer.set(i.GetTrailerID(), i),
              this.m_otherTrailers.push(i);
          });
    }
    BHasTrailers() {
      return (
        this.m_higherTrailers.length > 0 || this.m_otherTrailers.length > 0
      );
    }
    GetHighlightTrailers() {
      return this.m_higherTrailers;
    }
    GetOtherTrailers() {
      return this.m_otherTrailers;
    }
    GetTrailerByID(e) {
      return this.m_mapTrailer.get(e);
    }
  },
  Ui = class {
    m_strTrailerName;
    m_eTrailerCategory;
    m_nBaseID;
    m_Trailer480p;
    m_TrailerMax;
    m_MicroTrailer;
    m_strScreenshotMedium;
    m_strScreenshotFull;
    constructor(e) {
      (this.m_strTrailerName = e.trailer_name()),
        (this.m_nBaseID = e.trailer_base_id()),
        (this.m_eTrailerCategory = e.trailer_category());
      let r = e.trailer_url_format();
      r &&
        (e.trailer_480p() &&
          (this.m_Trailer480p = this.ExtractTrailerFormats(
            r,
            e.trailer_480p(),
          )),
        e.trailer_max() &&
          (this.m_TrailerMax = this.ExtractTrailerFormats(r, e.trailer_max())),
        e.microtrailer() &&
          (this.m_MicroTrailer = this.ExtractTrailerFormats(
            r,
            e.microtrailer(),
          )),
        e.screenshot_medium() &&
          (this.m_strScreenshotMedium = this.ConstructScreenshotURL(
            r,
            e.screenshot_medium(),
          )),
        e.screenshot_full() &&
          (this.m_strScreenshotFull = this.ConstructScreenshotURL(
            r,
            e.screenshot_full(),
          )));
    }
    GetName() {
      return this.m_strTrailerName;
    }
    GetTrailerID() {
      return this.m_nBaseID;
    }
    GetTrailerCategory() {
      return this.m_eTrailerCategory;
    }
    GetTrailer480p() {
      return this.m_Trailer480p;
    }
    GetTrailerMax() {
      return this.m_TrailerMax;
    }
    GetMicroTrailer() {
      return this.m_MicroTrailer;
    }
    GetScreenshot() {
      return this.m_strScreenshotFull
        ? this.m_strScreenshotFull
        : this.m_strScreenshotMedium;
    }
    ExtractTrailerFormats(e, r) {
      let i = {};
      return (
        r.forEach((a) => {
          a.type() == "video/mp4"
            ? (i.strMP4URL = this.ConstructAssetURL(e, a.filename()))
            : a.type() == "video/webm" &&
              (i.strWebMURL = this.ConstructAssetURL(e, a.filename()));
        }),
        i
      );
    }
    ConstructScreenshotURL(e, r) {
      return (
        w.BASE_URL_SHARED_CDN +
        "/store_item_assets/" +
        e.replace("${FILENAME}", r)
      );
    }
    ConstructAssetURL(e, r) {
      return w.VIDEO_CDN_URL + "/store_trailers/" + e.replace("${FILENAME}", r);
    }
  },
  La = class {
    m_rgAllScreenshots = new Array();
    m_rgOnlyAllAgesScreenshots = new Array();
    constructor(e) {
      let r = 0,
        i = 0,
        a = e.all_ages_screenshots() || [],
        o = e.mature_content_screenshots() || [];
      for (; r < a.length || i < o.length; ) {
        let l = r < a.length;
        if (r < a.length && i < o.length) {
          let p = a[r].ordinal(),
            u = o[i].ordinal();
          l = p < u;
        }
        if (l) {
          let p =
            w.BASE_URL_SHARED_CDN + "/store_item_assets/" + a[r].filename();
          this.m_rgAllScreenshots.push(p),
            this.m_rgOnlyAllAgesScreenshots.push(p),
            (r += 1);
        } else {
          let p =
            w.BASE_URL_SHARED_CDN + "/store_item_assets/" + o[i].filename();
          this.m_rgAllScreenshots.push(p), (i += 1);
        }
      }
    }
    GetAllAgesAndMatureScreenshots() {
      return this.m_rgAllScreenshots;
    }
    GetOnlyAllAgesScreenshots() {
      return this.m_rgOnlyAllAgesScreenshots;
    }
  };
function ze(t, e) {
  if (t) {
    if (!e) return t;
  } else return e;
  return {
    include_assets: t.include_assets || e.include_assets,
    include_release: t.include_release || e.include_release,
    include_platforms: t.include_platforms || e.include_platforms,
    include_all_purchase_options:
      t.include_all_purchase_options || e.include_all_purchase_options,
    include_screenshots: t.include_screenshots || e.include_screenshots,
    include_trailers: t.include_trailers || e.include_trailers,
    include_ratings: t.include_ratings || e.include_ratings,
    include_tag_count:
      Math.max(t.include_tag_count || 0, e.include_tag_count || 0) || void 0,
    include_reviews: t.include_reviews || e.include_reviews,
    include_basic_info: t.include_basic_info || e.include_basic_info,
    include_supported_languages:
      t.include_supported_languages || e.include_supported_languages,
    include_full_description:
      t.include_full_description || e.include_full_description,
    include_included_items:
      t.include_included_items || e.include_included_items,
    include_assets_without_overrides:
      t.include_assets_without_overrides || e.include_assets_without_overrides,
    apply_user_filters: t.apply_user_filters || e.apply_user_filters,
    include_links: t.include_links || e.include_links,
  };
}
async function Zt(t, e) {
  let r = await t,
    i = await e;
  return r != 1 ? r : i;
}
var Je = class Je {
  k_QueueWaitUntilRequestMS = 5;
  k_nMaxBatchSize = 250;
  m_bReturnUnavailableItems = !1;
  m_mapApps = new Map();
  m_mapPackages = new Map();
  m_mapBundles = new Map();
  m_mapTags = new Map();
  m_mapCreators = new Map();
  m_mapHubCategories = new Map();
  m_setUnavailableApps = new Set();
  m_setUnavailablePackages = new Set();
  m_setUnavailableBundles = new Set();
  m_setUnavailableTags = new Set();
  m_setUnavailableCreators = new Set();
  m_setUnavailableHubCategories = new Set();
  m_setUnavailableDueToCountryRestrictionApps = new Set();
  m_setUnavailableDueToCountryRestrictionPackages = new Set();
  m_setUnavailableDueToCountryRestrictionBundles = new Set();
  m_mapAppsInFlight = new Map();
  m_mapPackageInFlight = new Map();
  m_mapBundleInFlight = new Map();
  m_mapTagsInFlight = new Map();
  m_mapCreatorsInFlight = new Map();
  m_mapHubCategoriesInFlight = new Map();
  m_serviceTransport;
  m_bUsePartnerAPI = !1;
  m_bInitialized = !1;
  m_bActivelyResettingCache = !1;
  m_setPendingAppInfo = new Set();
  m_setPendingBundleInfo = new Set();
  m_setPendingPackageInfo = new Set();
  m_setPendingTagInfo = new Set();
  m_setPendingCreatorInfo = new Set();
  m_setPendingHubCategoryInfo = new Set();
  m_setPendingDataRequest = {};
  m_PendingInfoPromise;
  m_PendingInfoResolve = void 0;
  m_PendingTimer = void 0;
  k_AlreadyResolvedOK = Promise.resolve(1);
  k_AlreadyResolvedInvalid = Promise.resolve(8);
  k_AlreadyResolvedBusy = Promise.resolve(10);
  static sm_instance;
  static Get() {
    return (
      Je.sm_instance ||
        ((Je.sm_instance = new Je()), (window.StoreItemCache = Je.sm_instance)),
      Je.sm_instance
    );
  }
  static Initialize(e, r) {
    let i = Je.Get();
    return (
      le(
        !i.m_bInitialized,
        "CStoreItemCache was already initialized; initialize it only once.",
      ),
      (i.m_serviceTransport = e),
      (i.m_bUsePartnerAPI = !!r),
      (i.m_bInitialized = !0),
      () => {
        (i.m_serviceTransport = void 0),
          (i.m_bUsePartnerAPI = !1),
          (i.m_bInitialized = !1);
      }
    );
  }
  SetSteamInterface(e) {
    this.SetServiceTransport(e.GetServiceTransport());
  }
  SetServiceTransport(e) {
    this.m_serviceTransport = e;
  }
  SetReturnUnavailableItems(e) {
    this.m_bReturnUnavailableItems = e;
  }
  GetReturnUnavailableItems() {
    return this.m_bReturnUnavailableItems;
  }
  async ResetCache() {
    (this.m_bActivelyResettingCache = !0), this.FlushPendingInfo();
    let e = [];
    this.m_mapAppsInFlight.forEach((r) => {
      e.push(r.promise);
    }),
      this.m_mapBundleInFlight.forEach((r) => {
        e.push(r.promise);
      }),
      this.m_mapPackageInFlight.forEach((r) => {
        e.push(r.promise);
      }),
      this.m_mapTagsInFlight.forEach((r) => {
        e.push(r.promise);
      }),
      this.m_mapCreatorsInFlight.forEach((r) => {
        e.push(r.promise);
      }),
      this.m_mapHubCategoriesInFlight.forEach((r) => {
        e.push(r.promise);
      }),
      await Promise.all(e),
      this.m_mapApps.clear(),
      this.m_mapBundles.clear(),
      this.m_mapPackages.clear(),
      this.m_mapTagsInFlight.clear(),
      this.m_mapCreatorsInFlight.clear(),
      this.m_mapHubCategoriesInFlight.clear(),
      (this.m_bActivelyResettingCache = !1);
  }
  static BIsInitialized() {
    return Je.Get().m_bInitialized;
  }
  static k_DataRequest_CommonOnly = {};
  static k_DataRequest_BasicInfo = { include_basic_info: !0 };
  static k_DataRequest_Assets = { include_assets: !0 };
  static k_DataRequest_IncludeAll = {
    include_assets: !0,
    include_release: !0,
    include_platforms: !0,
    include_all_purchase_options: !0,
    include_screenshots: !0,
    include_trailers: !0,
    include_ratings: !0,
    include_tag_count: 20,
    include_reviews: !0,
    include_basic_info: !0,
    include_supported_languages: !0,
    include_links: !0,
  };
  async QueueAppRequest(e, r) {
    return this.QueueStoreItemRequest(e, 0, r);
  }
  async QueuePackageRequest(e, r) {
    return this.QueueStoreItemRequest(e, 1, r);
  }
  async QueueBundleRequest(e, r) {
    return this.QueueStoreItemRequest(e, 2, r);
  }
  async QueueTagRequest(e, r) {
    return this.QueueStoreItemRequest(e, 4, r);
  }
  async QueueCreatorRequest(e, r) {
    return this.QueueStoreItemRequest(e, 5, r);
  }
  async QueueHubCategoryRequest(e, r) {
    return this.QueueStoreItemRequest(e, 6, r);
  }
  static ValidateDataRequest(e) {
    let r = [
      e.include_assets,
      e.include_release,
      e.include_platforms,
      e.include_all_purchase_options,
      e.include_screenshots,
      e.include_trailers,
      e.include_ratings,
      e.include_reviews,
      e.include_basic_info,
      e.include_supported_languages,
      e.include_links,
    ];
    for (let i of r) if (i !== !0 && i !== void 0) return !1;
    return !0;
  }
  async QueueMultipleAppRequests(e, r) {
    if (!e || e.length == 0) return 1;
    let a = (
      await Promise.all(e.map((o) => this.QueueStoreItemRequest(o, 0, r)))
    ).filter((o) => o != 1);
    return a.length > 0 ? a[0] : 1;
  }
  async QueueMultiplePackageRequests(e, r) {
    if (!e || e.length == 0) return 1;
    let a = (
      await Promise.all(e.map((o) => this.QueueStoreItemRequest(o, 1, r)))
    ).filter((o) => o != 1);
    return a.length > 0 ? a[0] : 1;
  }
  async QueueMultipleBundleRequests(e, r) {
    if (!e || e.length == 0) return 1;
    let a = (
      await Promise.all(e.map((o) => this.QueueStoreItemRequest(o, 2, r)))
    ).filter((o) => o != 1);
    return a.length > 0 ? a[0] : 1;
  }
  async QueueMultipleTagRequests(e, r) {
    if (!e || e.length == 0) return 1;
    let a = (
      await Promise.all(e.map((o) => this.QueueStoreItemRequest(o, 4, r)))
    ).filter((o) => o != 1);
    return a.length > 0 ? a[0] : 1;
  }
  async QueueMultipleCreatorRequests(e, r) {
    if (!e || e.length == 0) return 1;
    let a = (
      await Promise.all(e.map((o) => this.QueueStoreItemRequest(o, 5, r)))
    ).filter((o) => o != 1);
    return a.length > 0 ? a[0] : 1;
  }
  async QueueMultipleHubCategoryRequests(e, r) {
    if (!e || e.length == 0) return 1;
    let a = (
      await Promise.all(e.map((o) => this.QueueStoreItemRequest(o, 6, r)))
    ).filter((o) => o != 1);
    return a.length > 0 ? a[0] : 1;
  }
  async QueueMultipleStoreItemRequests(e, r, i) {
    if (!e || e.length == 0) return 1;
    let o = (
      await Promise.all(e.map((l, p) => this.QueueStoreItemRequest(l, r[p], i)))
    ).filter((l) => l != 1);
    return o.length > 0 ? o[0] : 1;
  }
  async QueueStoreItemRequest(e, r, i) {
    if (
      (le(
        Je.ValidateDataRequest(i),
        "Invalid Data Request: " + JSON.stringify(i),
      ),
      typeof e == "string" && (e = parseInt(e)),
      this.m_bActivelyResettingCache)
    )
      return (
        console.log(
          "Rejecting store item request due to currently clearing the cache",
        ),
        this.k_AlreadyResolvedBusy
      );
    if (!e)
      return (
        le(!e, `unexpected id ${e} of zero or undefined for type ${r}`),
        this.k_AlreadyResolvedInvalid
      );
    let a = this.GetPreviousSupersetLoadPromise(e, r, i);
    if (a) return a;
    switch (
      (this.m_PendingInfoPromise ||
        ((this.m_PendingInfoPromise = new Promise(
          (l) => (this.m_PendingInfoResolve = l),
        )),
        (this.m_PendingTimer = window.setTimeout(
          () => this.FlushPendingInfo(),
          this.k_QueueWaitUntilRequestMS,
        ))),
      (this.m_setPendingDataRequest = ze(this.m_setPendingDataRequest, i)),
      r)
    ) {
      case 0:
        this.m_setPendingAppInfo.add(e);
        break;
      case 2:
        this.m_setPendingBundleInfo.add(e);
        break;
      case 1:
        this.m_setPendingPackageInfo.add(e);
        break;
      case 4:
        this.m_setPendingTagInfo.add(e);
        break;
      case 5:
        this.m_setPendingCreatorInfo.add(e);
        break;
      case 6:
        this.m_setPendingHubCategoryInfo.add(e);
        break;
      default:
        le(!1, `Unexpected Type ${r}`);
    }
    let o = this.m_PendingInfoPromise;
    return (
      this.m_setPendingAppInfo.size +
        this.m_setPendingPackageInfo.size +
        this.m_setPendingBundleInfo.size >=
        this.k_nMaxBatchSize &&
        (this.m_PendingTimer && window.clearTimeout(this.m_PendingTimer),
        this.FlushPendingInfo()),
      o
    );
  }
  async FlushPendingInfo() {
    if (typeof this.m_PendingInfoResolve > "u") return;
    let e = this.m_PendingInfoResolve,
      r = Array.from(this.m_setPendingAppInfo),
      i = Array.from(this.m_setPendingPackageInfo),
      a = Array.from(this.m_setPendingBundleInfo),
      o = Array.from(this.m_setPendingTagInfo),
      l = Array.from(this.m_setPendingCreatorInfo),
      p = Array.from(this.m_setPendingHubCategoryInfo),
      u = this.m_setPendingDataRequest;
    (this.m_PendingInfoPromise = void 0),
      (this.m_PendingInfoResolve = void 0),
      this.m_setPendingAppInfo.clear(),
      this.m_setPendingBundleInfo.clear(),
      this.m_setPendingPackageInfo.clear(),
      this.m_setPendingTagInfo.clear(),
      this.m_setPendingCreatorInfo.clear(),
      this.m_setPendingHubCategoryInfo.clear(),
      (this.m_setPendingDataRequest = {}),
      (this.m_PendingTimer = void 0),
      this.HintLoadStoreItems(r, i, a, o, l, p, u).then((y) => e(y));
  }
  async HintLoadStoreApps(e, r) {
    return this.HintLoadStoreItems(e, null, null, null, null, null, r);
  }
  async HintLoadStorePackages(e, r) {
    return this.HintLoadStoreItems(null, e, null, null, null, null, r);
  }
  async HintLoadStoreBundles(e, r) {
    return this.HintLoadStoreItems(null, null, e, null, null, null, r);
  }
  GetPreviousSupersetLoadPromise(e, r, i) {
    if (this.BHasStoreItem(e, r, i) || this.BIsStoreItemMissing(e, r))
      return this.k_AlreadyResolvedOK;
    let a = null;
    switch (r) {
      case 0:
        a = this.m_mapAppsInFlight.get(e);
        break;
      case 1:
        a = this.m_mapPackageInFlight.get(e);
        break;
      case 2:
        a = this.m_mapBundleInFlight.get(e);
        break;
      case 4:
        a = this.m_mapTagsInFlight.get(e);
        break;
      case 5:
        a = this.m_mapCreatorsInFlight.get(e);
        break;
      case 6:
        a = this.m_mapHubCategoriesInFlight.get(e);
        break;
    }
    return a && Xt.BDataRequestContainsOtherDataRequest(a.dataRequest, i)
      ? a.promise
      : null;
  }
  async HintLoadStoreItems(e, r, i, a, o, l, p) {
    let u = null,
      y = new Promise((B) => (u = B)),
      C = [],
      M = [];
    (e || []).forEach((B) => {
      let x = this.GetPreviousSupersetLoadPromise(B, 0, p);
      if (x) M.push(x);
      else {
        C.push(lt.fromObject({ appid: B }));
        let H = ze(this.GetStoreItemDataRequest(B, 0), p),
          h = this.m_mapAppsInFlight.get(B);
        (H = ze(h?.dataRequest, H)),
          h && M.push(h.promise),
          this.m_mapAppsInFlight.set(B, {
            promise: h ? Zt(h.promise, y) : y,
            dataRequest: H,
          });
      }
    }),
      (r || []).forEach((B) => {
        let x = this.GetPreviousSupersetLoadPromise(B, 1, p);
        if (x) M.push(x);
        else {
          C.push(lt.fromObject({ packageid: B }));
          let H = ze(this.GetStoreItemDataRequest(B, 1), p),
            h = this.m_mapPackageInFlight.get(B);
          (H = ze(h?.dataRequest, H)),
            h && M.push(h.promise),
            this.m_mapPackageInFlight.set(B, {
              promise: h ? Zt(h.promise, y) : y,
              dataRequest: H,
            });
        }
      }),
      (i || []).forEach((B) => {
        let x = this.GetPreviousSupersetLoadPromise(B, 2, p);
        if (x) M.push(x);
        else {
          C.push(lt.fromObject({ bundleid: B }));
          let H = ze(this.GetStoreItemDataRequest(B, 2), p),
            h = this.m_mapBundleInFlight.get(B);
          (H = ze(h?.dataRequest, H)),
            h && M.push(h.promise),
            this.m_mapBundleInFlight.set(B, {
              promise: h ? Zt(h.promise, y) : y,
              dataRequest: H,
            });
        }
      }),
      (a || []).forEach((B) => {
        let x = this.GetPreviousSupersetLoadPromise(B, 4, p);
        if (x) M.push(x);
        else {
          C.push(lt.fromObject({ tagid: B }));
          let H = ze(this.GetStoreItemDataRequest(B, 4), p),
            h = this.m_mapTagsInFlight.get(B);
          (H = ze(h?.dataRequest, H)),
            h && M.push(h.promise),
            this.m_mapTagsInFlight.set(B, {
              promise: h ? Zt(h.promise, y) : y,
              dataRequest: H,
            });
        }
      }),
      (o || []).forEach((B) => {
        let x = this.GetPreviousSupersetLoadPromise(B, 5, p);
        if (x) M.push(x);
        else {
          C.push(lt.fromObject({ creatorid: B }));
          let H = ze(this.GetStoreItemDataRequest(B, 5), p),
            h = this.m_mapCreatorsInFlight.get(B);
          (H = ze(h?.dataRequest, H)),
            h && M.push(h.promise),
            this.m_mapCreatorsInFlight.set(B, {
              promise: h ? Zt(h.promise, y) : y,
              dataRequest: H,
            });
        }
      }),
      (l || []).forEach((B) => {
        let x = this.GetPreviousSupersetLoadPromise(B, 6, p);
        if (x) M.push(x);
        else {
          C.push(lt.fromObject({ hubcategoryid: B }));
          let H = ze(this.GetStoreItemDataRequest(B, 6), p),
            h = this.m_mapHubCategoriesInFlight.get(B);
          (H = ze(h?.dataRequest, H)),
            h && M.push(h.promise),
            this.m_mapHubCategoriesInFlight.set(B, {
              promise: h ? Zt(h.promise, y) : y,
              dataRequest: H,
            });
        }
      });
    let k = 1;
    if (
      (C.length > 0 && (k = await this.InternalHandleLoadStoreItems(C, p)),
      u(k),
      M.length > 0)
    ) {
      let B = await Promise.all(M);
      for (let x of B) x != 1 && k == 1 && (k = x);
    }
    return (
      (e || []).forEach((B) => this.m_mapAppsInFlight.delete(B)),
      (r || []).forEach((B) => this.m_mapPackageInFlight.delete(B)),
      (i || []).forEach((B) => this.m_mapBundleInFlight.delete(B)),
      (a || []).forEach((B) => this.m_mapTagsInFlight.delete(B)),
      (o || []).forEach((B) => this.m_mapCreatorsInFlight.delete(B)),
      (l || []).forEach((B) => this.m_mapHubCategoriesInFlight.delete(B)),
      k
    );
  }
  MarkStoreItemIDUnavailable(e) {
    (e || []).forEach((r) => {
      r.appid()
        ? (this.m_setUnavailableApps.add(r.appid()),
          this.m_mapApps.delete(r.appid()))
        : r.packageid()
          ? (this.m_setUnavailablePackages.add(r.packageid()),
            this.m_mapPackages.delete(r.packageid()))
          : r.bundleid()
            ? (this.m_setUnavailableBundles.add(r.bundleid()),
              this.m_mapBundles.delete(r.bundleid()))
            : r.tagid()
              ? (this.m_setUnavailableTags.add(r.tagid()),
                this.m_mapTags.delete(r.tagid()))
              : r.creatorid()
                ? (this.m_setUnavailableCreators.add(r.creatorid()),
                  this.m_mapCreators.delete(r.creatorid()))
                : r.hubcategoryid() &&
                  (this.m_setUnavailableHubCategories.add(r.hubcategoryid()),
                  this.m_mapHubCategories.delete(r.hubcategoryid()));
    });
  }
  SortStoreItems(e) {
    let r = e.slice();
    return (
      r.sort((i, a) => {
        let o = i.appid() ?? 0,
          l = a.appid() ?? 0;
        if (o != l) return o - l;
        let p = i.packageid() ?? 0,
          u = a.packageid() ?? 0;
        if (p != u) return p - u;
        let y = i.bundleid() ?? 0,
          C = a.bundleid() ?? 0;
        if (y != C) return y - C;
        let M = i.tagid() ?? 0,
          k = a.tagid() ?? 0;
        if (M != k) return M - k;
        let B = i.creatorid() ?? 0,
          x = a.creatorid() ?? 0;
        if (B != x) return B - x;
        let H = i.hubcategoryid() ?? 0,
          h = a.hubcategoryid() ?? 0;
        return H != h ? H - h : 0;
      }),
      r
    );
  }
  GetServiceTransport() {
    return (
      this.m_serviceTransport ||
        (console.warn("Service transport not initialized for StoreItemCache"),
        (this.m_serviceTransport = new It(
          w.WEBAPI_BASE_URL,
        ).GetAnonymousServiceTransport())),
      this.m_serviceTransport
    );
  }
  async InternalHandleLoadStoreItems(e, r) {
    let i = 1;
    (e = this.SortStoreItems(e)),
      r.include_included_items &&
        (r = {
          ...r,
          included_item_data_request: { ...r, include_included_items: !1 },
        });
    let a = new Array();
    try {
      let o = [];
      for (; e.length > 0; ) {
        let p = e.splice(0, this.k_nMaxBatchSize);
        if ((a.push(p), this.m_bUsePartnerAPI)) {
          let u = Z.Init(Fu);
          u.Body().set_include_unpublished(!1);
          let y = u.Body().request(!0);
          y.set_context(Iu(this.m_bUsePartnerAPI)),
            y.set_data_request(cr.fromObject(r)),
            y.set_ids(p),
            o.push(wu.GetItems(this.GetServiceTransport(), u));
        } else {
          let u = Z.Init(au);
          Gu(u, this.m_bUsePartnerAPI),
            ku(u, r),
            u.Body().set_ids(p),
            o.push(ou.GetItems(this.GetServiceTransport(), u));
        }
      }
      (await Promise.all(o)).forEach((p, u) => {
        p.GetEResult() == 1
          ? p
              .Body()
              .store_items()
              .forEach((y) => {
                let C = y.id(),
                  M = y.item_type(),
                  k = this.m_bReturnUnavailableItems && y.success() == 15,
                  B = y.success() == 1 && !this.BIsStoreItemMissing(C, M);
                if (k || B) this.ReadItem(y, r);
                else {
                  switch (
                    (w.WEB_UNIVERSE == "dev" &&
                      console.warn(
                        `Failed to load ${C} type ${M} with error ${y.success()}`,
                        y,
                      ),
                    M)
                  ) {
                    case 0:
                      this.m_setUnavailableApps.add(C),
                        this.m_mapApps.delete(C);
                      break;
                    case 1:
                      this.m_setUnavailablePackages.add(C),
                        this.m_mapPackages.delete(C);
                      break;
                    case 2:
                      this.m_setUnavailableBundles.add(C),
                        this.m_mapBundles.delete(C);
                      break;
                    case 4:
                      this.m_setUnavailableTags.add(C),
                        this.m_mapTags.delete(C);
                      break;
                    case 5:
                      this.m_setUnavailableCreators.add(C),
                        this.m_mapCreators.delete(C);
                      break;
                    case 6:
                      this.m_setUnavailableHubCategories.add(C),
                        this.m_mapHubCategories.delete(C);
                      break;
                    default:
                      console.error(
                        "CStoreItemCache.InternalHandleLoadStoreItems unexpected item_type in response " +
                          M +
                          " " +
                          C,
                      );
                  }
                  if (y.unvailable_for_country_restriction())
                    switch (M) {
                      case 0:
                        this.m_setUnavailableDueToCountryRestrictionApps.add(C);
                        break;
                      case 1:
                        this.m_setUnavailableDueToCountryRestrictionPackages.add(
                          C,
                        );
                        break;
                      case 2:
                        this.m_setUnavailableDueToCountryRestrictionBundles.add(
                          C,
                        );
                        break;
                      case 4:
                      case 5:
                      case 6:
                        console.error(
                          "CStoreItemCache::InternalHandleLoadStoreItems - tags, creators or categories don't have country restrictions. eResult: " +
                            p.GetEResult() +
                            " message: " +
                            p.Hdr().error_message(),
                          xs(e),
                        );
                        break;
                    }
                }
              })
          : (console.warn(
              "CStoreItemCache::InternalHandleLoadStoreItems failed with eResult: " +
                p.GetEResult() +
                " message: " +
                p.Hdr().error_message(),
              xs(e),
            ),
            (p.Hdr().transport_error() == 1 || w.FROM_WEB) &&
              this.MarkStoreItemIDUnavailable(a[u]),
            i == 1 && (i = p.GetEResult()));
      });
    } catch (o) {
      let l = ad(o);
      return (
        console.error(
          "CStoreItemCache::InternalHandleLoadStoreItems failed: " +
            l.strErrorMsg,
          l,
        ),
        a.forEach((p) => this.MarkStoreItemIDUnavailable(p)),
        79
      );
    }
    return i;
  }
  GetMapForType(e) {
    let r;
    switch (e) {
      case 0:
        r = this.m_mapApps;
        break;
      case 2:
        r = this.m_mapBundles;
        break;
      case 1:
        r = this.m_mapPackages;
        break;
      case 4:
        r = this.m_mapTags;
        break;
      case 5:
        r = this.m_mapCreators;
        break;
      case 6:
        r = this.m_mapHubCategories;
        break;
      default:
        console.error("Invalid map type requested", e);
    }
    return r;
  }
  BHasStoreItem(e, r, i) {
    let a = this.GetMapForType(r);
    return !!(a && a.has(e) && (!i || a.get(e).BContainDataRequest(i)));
  }
  GetStoreItem(e, r) {
    return r == -1 || r == 3 ? void 0 : this.GetMapForType(r)?.get(e);
  }
  GetStoreItemWithLegacyVisibilityCheck(e, r) {
    let i = this.GetStoreItem(e, r);
    return i && (this.m_bReturnUnavailableItems || i.BIsVisible()) ? i : void 0;
  }
  GetStoreItemDataRequest(e, r) {
    return this.GetMapForType(r)?.get(e)?.GetDataRequest() || null;
  }
  BHasApp(e, r) {
    return this.BHasStoreItem(e, 0, r);
  }
  GetApp(e) {
    return this.GetStoreItem(e, 0);
  }
  BHasPackage(e, r) {
    return this.BHasStoreItem(e, 1, r);
  }
  GetPackage(e) {
    return this.GetStoreItem(e, 1);
  }
  BHasBundle(e, r) {
    return this.BHasStoreItem(e, 2, r);
  }
  GetBundle(e) {
    return this.GetStoreItem(e, 2);
  }
  BHasTag(e, r) {
    return this.BHasStoreItem(e, 4, r);
  }
  GetTag(e) {
    return this.GetStoreItem(e, 4);
  }
  BHasCreator(e, r) {
    return this.BHasStoreItem(e, 5, r);
  }
  GetCreator(e) {
    return this.GetStoreItem(e, 5);
  }
  BHasHubCategory(e, r) {
    return this.BHasStoreItem(e, 6, r);
  }
  GetHubCategory(e) {
    return this.GetStoreItem(e, 6);
  }
  BIsStoreItemMissing(e, r) {
    switch (r) {
      case 0:
        return this.BIsAppMissing(e);
      case 1:
        return this.BIsPackageMissing(e);
      case 2:
        return this.BIsBundleMissing(e);
      case 4:
        return this.BIsTagMissing(e);
      case 5:
        return this.BIsCreatorMissing(e);
      case 6:
        return this.BIsHubCategoryMissing(e);
      default:
        return console.error("BStoreItemMissing invalid type", r), !0;
    }
  }
  BIsAppMissing(e) {
    return this.m_setUnavailableApps.has(e);
  }
  BIsPackageMissing(e) {
    return this.m_setUnavailablePackages.has(e);
  }
  BIsBundleMissing(e) {
    return this.m_setUnavailableBundles.has(e);
  }
  BIsTagMissing(e) {
    return this.m_setUnavailableTags.has(e);
  }
  BIsCreatorMissing(e) {
    return this.m_setUnavailableCreators.has(e);
  }
  BIsHubCategoryMissing(e) {
    return this.m_setUnavailableHubCategories.has(e);
  }
  BIsStoreItemUnavailableDueToCountryRestriction(e, r) {
    switch (r) {
      case 0:
        return this.BIsAppUnavailableDueToCountryRestriction(e);
      case 1:
        return this.BIsPackageUnavailableDueToCountryRestriction(e);
      case 2:
        return this.BIsBundleUnavailableDueToCountryRestriction(e);
      case 4:
      case 5:
      case 6:
        return (
          console.error(
            "BIsStoreItemUnavailableDueToCountryRestriction - tags, creators or categories don't have country restrictions. type: ",
            r,
          ),
          !0
        );
      default:
        return console.error("BStoreItemMissing invalid type", r), !0;
    }
  }
  BIsAppUnavailableDueToCountryRestriction(e) {
    return this.m_setUnavailableDueToCountryRestrictionApps.has(e);
  }
  BIsPackageUnavailableDueToCountryRestriction(e) {
    return this.m_setUnavailableDueToCountryRestrictionPackages.has(e);
  }
  BIsBundleUnavailableDueToCountryRestriction(e) {
    return this.m_setUnavailableDueToCountryRestrictionBundles.has(e);
  }
  ReadResults(e, r) {
    let i = [];
    for (let a of e) i.push(this.ReadItem(a, r));
    return i;
  }
  ReadItem(e, r) {
    let i = e.item_type(),
      a = null;
    switch (i) {
      case 0:
        a = this.m_mapApps;
        break;
      case 1:
        a = this.m_mapPackages;
        break;
      case 2:
        a = this.m_mapBundles;
        break;
      case 4:
        a = this.m_mapTags;
        break;
      case 5:
        a = this.m_mapCreators;
        break;
      case 6:
        a = this.m_mapHubCategories;
        break;
      default:
        return console.error(`Invalid item type: ${i}`), null;
    }
    let o = a.get(e.id());
    if (
      (o ? o.MergeData(e, r) : ((o = new Xt(e, r)), a.set(e.id(), o)),
      r.include_included_items && e.included_items(!1))
    ) {
      for (let l of e.included_items().included_apps())
        this.ReadItem(l, r.included_item_data_request);
      for (let l of e.included_items().included_packages())
        this.ReadItem(l, r.included_item_data_request);
    }
    return o;
  }
};
T([_e], Je.prototype, "ReadItem", 1);
var Ge = Je;
var gs = K(Be()),
  fs = K(Be());
var P = K(we());
var S = P.Message;
var Oi = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.name || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              name: { n: 1, br: s.readString, bw: n.writeString },
              steamid: {
                n: 2,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_CreateFamilyGroup_Request";
    }
  },
  Va = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              cooldown_skip_granted: { n: 2, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_CreateFamilyGroup_Response";
    }
  },
  Li = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              send_running_apps: { n: 2, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_GetFamilyGroup_Request";
    }
  },
  Ka = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              role: { n: 2, br: s.readEnum, bw: n.writeEnum },
              time_joined: { n: 3, br: s.readUint32, bw: n.writeUint32 },
              cooldown_seconds_remaining: {
                n: 4,
                br: s.readUint32,
                bw: n.writeUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "FamilyGroupMember";
    }
  },
  Ja = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              role: { n: 2, br: s.readEnum, bw: n.writeEnum },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "FamilyGroupPendingInvite";
    }
  },
  Qa = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "FamilyGroupFormerMember";
    }
  },
  Vi = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.name || f(t.M()),
        S.initialize(this, e, 0, -1, [2, 3, 7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              name: { n: 1, br: s.readString, bw: n.writeString },
              members: { n: 2, c: Ka, r: !0, q: !0 },
              pending_invites: { n: 3, c: Ja, r: !0, q: !0 },
              free_spots: { n: 4, br: s.readUint32, bw: n.writeUint32 },
              country: { n: 5, br: s.readString, bw: n.writeString },
              slot_cooldown_remaining_seconds: {
                n: 6,
                br: s.readUint32,
                bw: n.writeUint32,
              },
              former_members: { n: 7, c: Qa, r: !0, q: !0 },
              slot_cooldown_overrides: {
                n: 8,
                br: s.readUint32,
                bw: n.writeUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_GetFamilyGroup_Response";
    }
  },
  $a = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              role: { n: 2, br: s.readEnum, bw: n.writeEnum },
              inviter_steamid: {
                n: 3,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              awaiting_2fa: { n: 4, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "FamilyGroupPendingInviteForUser";
    }
  },
  Ki = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              include_family_group_response: {
                n: 2,
                br: s.readBool,
                bw: n.writeBool,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_GetFamilyGroupForUser_Request";
    }
  },
  Ya = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, [5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              is_not_member_of_any_group: {
                n: 2,
                br: s.readBool,
                bw: n.writeBool,
              },
              latest_time_joined: { n: 3, br: s.readUint32, bw: n.writeUint32 },
              latest_joined_family_groupid: {
                n: 4,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              pending_group_invites: { n: 5, c: $a, r: !0, q: !0 },
              role: { n: 6, br: s.readUint32, bw: n.writeUint32 },
              cooldown_seconds_remaining: {
                n: 7,
                br: s.readUint32,
                bw: n.writeUint32,
              },
              family_group: { n: 8, c: Vi },
              can_undelete_last_joined_family: {
                n: 9,
                br: s.readBool,
                bw: n.writeBool,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_GetFamilyGroupForUser_Response";
    }
  },
  Ji = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              name: { n: 2, br: s.readString, bw: n.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_ModifyFamilyGroupDetails_Request";
    }
  },
  Xa = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), S.initialize(this, e, 0, -1, void 0, null);
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
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_ModifyFamilyGroupDetails_Response";
    }
  },
  Qi = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              receiver_steamid: {
                n: 2,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              receiver_role: { n: 3, br: s.readEnum, bw: n.writeEnum },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_InviteToFamilyGroup_Request";
    }
  },
  Za = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invite_id || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              invite_id: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              two_factor_method: { n: 2, br: s.readEnum, bw: n.writeEnum },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_InviteToFamilyGroup_Response";
    }
  },
  $i = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              nonce: { n: 2, br: s.readUint64String, bw: n.writeUint64String },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_JoinFamilyGroup_Request";
    }
  },
  eo = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.two_factor_method || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              two_factor_method: { n: 2, br: s.readEnum, bw: n.writeEnum },
              cooldown_skip_granted: { n: 3, br: s.readBool, bw: n.writeBool },
              invite_already_accepted: {
                n: 4,
                br: s.readBool,
                bw: n.writeBool,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_JoinFamilyGroup_Response";
    }
  },
  Yi = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              steamid_to_remove: {
                n: 2,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_RemoveFromFamilyGroup_Request";
    }
  },
  to = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), S.initialize(this, e, 0, -1, void 0, null);
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
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_RemoveFromFamilyGroup_Response";
    }
  },
  Xi = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              steamid_to_cancel: {
                n: 2,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_CancelFamilyGroupInvite_Request";
    }
  },
  ro = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), S.initialize(this, e, 0, -1, void 0, null);
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
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_CancelFamilyGroupInvite_Response";
    }
  },
  Zi = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_DeleteFamilyGroup_Request";
    }
  },
  io = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), S.initialize(this, e, 0, -1, void 0, null);
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
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_DeleteFamilyGroup_Response";
    }
  },
  es = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              client_instance_id: {
                n: 2,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_GetUsersSharingDevice_Request";
    }
  },
  so = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.users || f(t.M()),
        S.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              users: {
                n: 1,
                r: !0,
                q: !0,
                br: s.readFixed64String,
                pbr: s.readPackedFixed64String,
                bw: n.writeRepeatedFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_GetUsersSharingDevice_Response";
    }
  },
  ts = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              gidshoppingcart: {
                n: 2,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              store_country_code: { n: 3, br: s.readString, bw: n.writeString },
              use_account_cart: { n: 4, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_RequestPurchase_Request";
    }
  },
  no = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.gidshoppingcart || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              gidshoppingcart: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              request_id: {
                n: 2,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_RequestPurchase_Response";
    }
  },
  rs = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              request_ids: {
                n: 3,
                r: !0,
                q: !0,
                br: s.readUint64String,
                pbr: s.readPackedUint64String,
                bw: n.writeRepeatedUint64String,
              },
              rt_include_completed_since: {
                n: 4,
                br: s.readUint32,
                bw: n.writeUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_GetPurchaseRequests_Request";
    }
  },
  ao = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.requester_steamid || f(t.M()),
        S.initialize(this, e, 0, -1, [9, 10, 11, 12], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              requester_steamid: {
                n: 1,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              gidshoppingcart: {
                n: 2,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              time_requested: { n: 3, br: s.readUint32, bw: n.writeUint32 },
              time_responded: { n: 4, br: s.readUint32, bw: n.writeUint32 },
              responder_steamid: {
                n: 5,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              response_action: { n: 6, br: s.readEnum, bw: n.writeEnum },
              is_completed: { n: 7, br: s.readBool, bw: n.writeBool },
              request_id: {
                n: 8,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              requested_packageids: {
                n: 9,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: n.writeRepeatedUint32,
              },
              purchased_packageids: {
                n: 10,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: n.writeRepeatedUint32,
              },
              requested_bundleids: {
                n: 11,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: n.writeRepeatedUint32,
              },
              purchased_bundleids: {
                n: 12,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: n.writeRepeatedUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "PurchaseRequest";
    }
  },
  oo = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.requests || f(t.M()),
        S.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { requests: { n: 1, c: ao, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_GetPurchaseRequests_Response";
    }
  },
  is = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              action: { n: 3, br: s.readEnum, bw: n.writeEnum },
              request_id: {
                n: 4,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_RespondToRequestedPurchase_Request";
    }
  },
  lo = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), S.initialize(this, e, 0, -1, void 0, null);
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
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_RespondToRequestedPurchase_Response";
    }
  },
  po = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              running_apps: { n: 2, c: mo, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroupsClient_NotifyRunningApps_Notification";
    }
  },
  uo = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.member_steamid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              member_steamid: {
                n: 1,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              owner_steamid: {
                n: 2,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember";
    }
  },
  mo = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || f(t.M()),
        S.initialize(this, e, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              playing_members: { n: 3, c: uo, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp";
    }
  },
  co = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), S.initialize(this, e, 0, -1, void 0, null);
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
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroupsClient_InviteStatus_Notification";
    }
  },
  _o = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroupsClient_GroupChanged_Notification";
    }
  },
  ss = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_GetChangeLog_Request";
    }
  },
  go = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.changes || f(t.M()),
        S.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { changes: { n: 1, c: fo, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_GetChangeLog_Response";
    }
  },
  fo = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.timestamp || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              timestamp: {
                n: 1,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              actor_steamid: {
                n: 2,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              type: { n: 3, br: s.readEnum, bw: n.writeEnum },
              body: { n: 4, br: s.readString, bw: n.writeString },
              by_support: { n: 5, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_GetChangeLog_Response_Change";
    }
  },
  ns = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              appid: { n: 2, br: s.readUint32, bw: n.writeUint32 },
              first_played: { n: 3, br: s.readUint32, bw: n.writeUint32 },
              latest_played: { n: 4, br: s.readUint32, bw: n.writeUint32 },
              seconds_played: { n: 5, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_PlaytimeEntry";
    }
  },
  as = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_GetPlaytimeSummary_Request";
    }
  },
  yo = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.entries || f(t.M()),
        S.initialize(this, e, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              entries: { n: 1, c: ns, r: !0, q: !0 },
              entries_by_owner: { n: 2, c: ns, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_GetPlaytimeSummary_Response";
    }
  },
  os = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              cooldown_count: { n: 2, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_SetFamilyCooldownOverrides_Request";
    }
  },
  Co = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), S.initialize(this, e, 0, -1, void 0, null);
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
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_SetFamilyCooldownOverrides_Response";
    }
  },
  ls = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              include_own: { n: 2, br: s.readBool, bw: n.writeBool },
              include_excluded: { n: 3, br: s.readBool, bw: n.writeBool },
              language: { n: 5, br: s.readString, bw: n.writeString },
              max_apps: { n: 6, br: s.readUint32, bw: n.writeUint32 },
              include_non_games: { n: 7, br: s.readBool, bw: n.writeBool },
              steamid: {
                n: 8,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_GetSharedLibraryApps_Request";
    }
  },
  Po = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.apps || f(t.M()),
        S.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              apps: { n: 1, c: Ro, r: !0, q: !0 },
              owner_steamid: {
                n: 2,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_GetSharedLibraryApps_Response";
    }
  },
  Ro = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || f(t.M()),
        S.initialize(this, e, 0, -1, [2, 15], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              owner_steamids: {
                n: 2,
                r: !0,
                q: !0,
                br: s.readFixed64String,
                pbr: s.readPackedFixed64String,
                bw: n.writeRepeatedFixed64String,
              },
              name: { n: 6, br: s.readString, bw: n.writeString },
              sort_as: { n: 7, br: s.readString, bw: n.writeString },
              capsule_filename: { n: 8, br: s.readString, bw: n.writeString },
              img_icon_hash: { n: 9, br: s.readString, bw: n.writeString },
              exclude_reason: { n: 10, d: 0, br: s.readEnum, bw: n.writeEnum },
              rt_time_acquired: { n: 11, br: s.readUint32, bw: n.writeUint32 },
              rt_last_played: { n: 12, br: s.readUint32, bw: n.writeUint32 },
              rt_playtime: { n: 13, br: s.readUint32, bw: n.writeUint32 },
              app_type: { n: 14, d: 1, br: s.readEnum, bw: n.writeEnum },
              content_descriptors: {
                n: 15,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: n.writeRepeatedUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_GetSharedLibraryApps_Response_SharedApp";
    }
  },
  ps = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              invite_id: {
                n: 2,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              nonce: { n: 3, br: s.readUint64String, bw: n.writeUint64String },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_ConfirmInviteToFamilyGroup_Request";
    }
  },
  bo = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), S.initialize(this, e, 0, -1, void 0, null);
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
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_ConfirmInviteToFamilyGroup_Response";
    }
  },
  us = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              invite_id: {
                n: 2,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              nonce: { n: 3, br: s.readUint64String, bw: n.writeUint64String },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_ConfirmJoinFamilyGroup_Request";
    }
  },
  Mo = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), S.initialize(this, e, 0, -1, void 0, null);
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
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_ConfirmJoinFamilyGroup_Response";
    }
  },
  ms = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              steamid: {
                n: 2,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_ResendInvitationToFamilyGroup_Request";
    }
  },
  vo = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), S.initialize(this, e, 0, -1, void 0, null);
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
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_ResendInvitationToFamilyGroup_Response";
    }
  },
  Bo = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              appid: { n: 2, br: s.readUint32, bw: n.writeUint32 },
              lender_steamid: {
                n: 3,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_SetPreferredLender_Request";
    }
  },
  So = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), S.initialize(this, e, 0, -1, void 0, null);
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
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_SetPreferredLender_Response";
    }
  },
  ho = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_GetPreferredLenders_Request";
    }
  },
  Fo = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.members || f(t.M()),
        S.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { members: { n: 1, c: wo, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_GetPreferredLenders_Response";
    }
  },
  wo = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || f(t.M()),
        S.initialize(this, e, 0, -1, [2], null);
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
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              preferred_appids: {
                n: 2,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: n.writeRepeatedUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_GetPreferredLenders_Response_FamilyMember";
    }
  },
  ds = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_UndeleteFamilyGroup_Request";
    }
  },
  Go = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), S.initialize(this, e, 0, -1, void 0, null);
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
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_UndeleteFamilyGroup_Response";
    }
  },
  cs = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              steamid: {
                n: 2,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_ForceAcceptInvite_Request";
    }
  },
  Io = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), S.initialize(this, e, 0, -1, void 0, null);
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
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_ForceAcceptInvite_Response";
    }
  },
  _s = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.family_groupid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              family_groupid: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              steamid: {
                n: 2,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_GetInviteCheckResults_Request";
    }
  },
  ko = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.wallet_country_matches || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              wallet_country_matches: { n: 1, br: s.readBool, bw: n.writeBool },
              ip_match: { n: 2, br: s.readBool, bw: n.writeBool },
              join_restriction: { n: 3, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_GetInviteCheckResults_Response";
    }
  },
  Ho = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || f(t.M()),
        S.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              invite_id: {
                n: 2,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_ClearCooldownSkip_Request";
    }
  },
  Ao = class t extends S {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), S.initialize(this, e, 0, -1, void 0, null);
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
      let r = new P.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new P.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CFamilyGroups_ClearCooldownSkip_Response";
    }
  },
  ud;
((ft) => {
  function t(O, L) {
    return O.SendMsg("FamilyGroups.CreateFamilyGroup#1", v(Oi, L), Va, {
      ePrivilege: 1,
    });
  }
  ft.CreateFamilyGroup = t;
  function e(O, L) {
    return O.SendMsg("FamilyGroups.GetFamilyGroup#1", v(Li, L), Vi, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ft.GetFamilyGroup = e;
  function r(O, L) {
    return O.SendMsg("FamilyGroups.GetFamilyGroupForUser#1", v(Ki, L), Ya, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ft.GetFamilyGroupForUser = r;
  function i(O, L) {
    return O.SendMsg("FamilyGroups.ModifyFamilyGroupDetails#1", v(Ji, L), Xa, {
      ePrivilege: 1,
    });
  }
  ft.ModifyFamilyGroupDetails = i;
  function a(O, L) {
    return O.SendMsg("FamilyGroups.InviteToFamilyGroup#1", v(Qi, L), Za, {
      ePrivilege: 1,
    });
  }
  ft.InviteToFamilyGroup = a;
  function o(O, L) {
    return O.SendMsg(
      "FamilyGroups.ConfirmInviteToFamilyGroup#1",
      v(ps, L),
      bo,
      { ePrivilege: 1 },
    );
  }
  ft.ConfirmInviteToFamilyGroup = o;
  function l(O, L) {
    return O.SendMsg(
      "FamilyGroups.ResendInvitationToFamilyGroup#1",
      v(ms, L),
      vo,
      { ePrivilege: 1 },
    );
  }
  ft.ResendInvitationToFamilyGroup = l;
  function p(O, L) {
    return O.SendMsg("FamilyGroups.JoinFamilyGroup#1", v($i, L), eo, {
      ePrivilege: 1,
    });
  }
  ft.JoinFamilyGroup = p;
  function u(O, L) {
    return O.SendMsg("FamilyGroups.ConfirmJoinFamilyGroup#1", v(us, L), Mo, {
      ePrivilege: 1,
    });
  }
  ft.ConfirmJoinFamilyGroup = u;
  function y(O, L) {
    return O.SendMsg("FamilyGroups.RemoveFromFamilyGroup#1", v(Yi, L), to, {
      ePrivilege: 1,
    });
  }
  ft.RemoveFromFamilyGroup = y;
  function C(O, L) {
    return O.SendMsg("FamilyGroups.CancelFamilyGroupInvite#1", v(Xi, L), ro, {
      ePrivilege: 1,
    });
  }
  ft.CancelFamilyGroupInvite = C;
  function M(O, L) {
    return O.SendMsg("FamilyGroups.GetUsersSharingDevice#1", v(es, L), so, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ft.GetUsersSharingDevice = M;
  function k(O, L) {
    return O.SendMsg("FamilyGroups.DeleteFamilyGroup#1", v(Zi, L), io, {
      ePrivilege: 1,
    });
  }
  ft.DeleteFamilyGroup = k;
  function B(O, L) {
    return O.SendMsg("FamilyGroups.UndeleteFamilyGroup#1", v(ds, L), Go, {
      ePrivilege: 1,
    });
  }
  ft.UndeleteFamilyGroup = B;
  function x(O, L) {
    return O.SendMsg("FamilyGroups.GetPlaytimeSummary#1", v(as, L), yo, {
      ePrivilege: 1,
    });
  }
  ft.GetPlaytimeSummary = x;
  function H(O, L) {
    return O.SendMsg("FamilyGroups.RequestPurchase#1", v(ts, L), no, {
      ePrivilege: 1,
    });
  }
  ft.RequestPurchase = H;
  function h(O, L) {
    return O.SendMsg("FamilyGroups.GetPurchaseRequests#1", v(rs, L), oo, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ft.GetPurchaseRequests = h;
  function D(O, L) {
    return O.SendMsg(
      "FamilyGroups.RespondToRequestedPurchase#1",
      v(is, L),
      lo,
      { ePrivilege: 1 },
    );
  }
  ft.RespondToRequestedPurchase = D;
  function U(O, L) {
    return O.SendMsg("FamilyGroups.GetChangeLog#1", v(ss, L), go, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ft.GetChangeLog = U;
  function re(O, L) {
    return O.SendMsg(
      "FamilyGroups.SetFamilyCooldownOverrides#1",
      v(os, L),
      Co,
      { ePrivilege: 1 },
    );
  }
  ft.SetFamilyCooldownOverrides = re;
  function Fe(O, L) {
    return O.SendMsg("FamilyGroups.GetSharedLibraryApps#1", v(ls, L), Po, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ft.GetSharedLibraryApps = Fe;
  function W(O, L) {
    return O.SendMsg("FamilyGroups.SetPreferredLender#1", v(Bo, L), So, {
      ePrivilege: 1,
    });
  }
  ft.SetPreferredLender = W;
  function E(O, L) {
    return O.SendMsg("FamilyGroups.GetPreferredLenders#1", v(ho, L), Fo, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ft.GetPreferredLenders = E;
  function b(O, L) {
    return O.SendMsg("FamilyGroups.ForceAcceptInvite#1", v(cs, L), Io, {
      ePrivilege: 5,
    });
  }
  ft.ForceAcceptInvite = b;
  function V(O, L) {
    return O.SendMsg("FamilyGroups.GetInviteCheckResults#1", v(_s, L), ko, {
      bConstMethod: !0,
      ePrivilege: 5,
    });
  }
  ft.GetInviteCheckResults = V;
  function fe(O, L) {
    return O.SendMsg("FamilyGroups.ClearCooldownSkip#1", v(Ho, L), Ao, {
      ePrivilege: 5,
    });
  }
  ft.ClearCooldownSkip = fe;
})((ud ||= {}));
var G_;
((i) => (
  (i.NotifyRunningAppsHandler = {
    name: "FamilyGroupsClient.NotifyRunningApps#1",
    request: po,
  }),
  (i.NotifyInviteStatusHandler = {
    name: "FamilyGroupsClient.NotifyInviteStatus#1",
    request: co,
  }),
  (i.NotifyGroupChangedHandler = {
    name: "FamilyGroupsClient.NotifyGroupChanged#1",
    request: _o,
  })
))((G_ ||= {}));
var bP = gs.default.createContext({ staleTimeMs: 1 / 0 });
var MP = (0, fs.createContext)({
  errorMessage: null,
  setErrorMessage: (t) => {},
});
var vP = {
  8: "#FamilyManagement_ErrorInternalServerError",
  2: "#FamilyManagement_ErrorInternalServerError",
  10: "#FamilyManagement_ErrorInternalServerError",
  37: "#FamilyManagement_ErrorInternalServerError",
  15: "#FamilyManagement_AccessDenied",
  42: "#FamilyManagement_ErrorNoMatch",
  43: "#FamilyManagement_ErrorAccountDisabled",
  11: "#FamilyManagement_ErrorNoActiveInvite",
  45: "#FamilyManagement_PartnerAccountCannotJoinAsChild",
  129: "#FamilyManagement_ErrorFamilySizeLimitExceeded",
  25: "#FamilyManagement_ErrorLimitExceeded",
  96: "#FamilyManagement_ErrorAccountActivityLimitExceeded",
  112: "#FamilyManagement_LimitedAccount_CreateFamily",
  84: { 5: "#FamilyManagement_RateLimitExceeded_CreateFamily" },
  83: {
    5: "#FamilyManagement_RegionLocked_CreateFamily",
    2: "#FamilyManagement_RegionLocked_JoinFamily",
  },
  31: { 2: "#FamilyManagement_Household_JoinFamily" },
  95: {
    5: "#FamilyManagement_ErrorAccountLimitExceeded_CreateFamily",
    2: "#FamilyManagement_ErrorAccountLimitExceeded_JoinFamily",
    8: "#FamilyManagement_ErrorAccountLimitExceeded_RemoveFromFamily",
  },
  29: {
    2: "#FamilyManagement_ErrorDuplicateRequest_JoinFamily",
    4: "#FamilyManagement_ErrorDuplicateRequest_InviteToFamily",
    8: "#FamilyManagement_ErrorDuplicateRequest_RemoveFromFamily",
  },
  40: { 4: "#FamilyManagement_ErrorFailed_NoAdditionalDetails" },
};
function md(t, e) {
  return `${w.STORE_BASE_URL}cart/purchaserequest/${t}/${e}`;
}
var T_ = {
  11: {
    displayNameLoc: "#SteamNotification_HelpRequest_Author",
    titleLoc: "#SteamNotification_HelpRequest_Title",
    bodyLoc: (t) => ({
      locString: "#SteamNotification_HelpRequest_Body",
      params: [t.ticket],
    }),
    link: (t) => w.HELP_BASE_URL + "wizard/HelpRequest/" + t.ticket,
  },
  6: {
    displayNameLoc: "#SteamNotifications_MajorSale",
    titleLoc: (t) => ({ locString: t.title }),
    bodyLoc: (t) =>
      Ds() && t.link.includes("https://store.steampowered.com")
        ? "#SteamNotifications_MajorSale_SteamChina_Title"
        : t.body,
    image: (t) => t.image,
    link: (t) =>
      Ds() && t.link.includes("https://store.steampowered.com")
        ? t.link.replace("https://store.steampowered.com", w.STORE_BASE_URL)
        : t.link,
  },
  10: {
    displayNameLoc: (t) => t.display_name,
    titleLoc: (t) => t.title,
    bodyLoc: (t) => t.body,
    image: (t) => t.image,
    link: (t) => t.link,
  },
  14: {
    titleLoc: "#SteamNotification_ModeratorMessage_Title",
    link: (t) => w.COMMUNITY_BASE_URL + "my/moderatormessages/" + t.msgid,
  },
};
function jo(t) {
  if (t !== void 0) return T_[t];
}
function Eo(t) {
  return !!jo(t);
}
var j_ = {
  16: {
    steamidAttribute: "inviter",
    titleLoc: "#SteamNotifications_FamilyInviteTitle",
    bodyLoc: "#SteamNotifications_FamilyInviteBody",
    url: (t) =>
      `${w.STORE_BASE_URL}account/familymanagement/join?invitation=${t.familyid}`,
  },
  15: {
    steamidAttribute: "steamid",
    titleLoc: "#SteamNotifications_ParentalFeatureRequestTitle",
    bodyLoc: "#SteamNotifications_ParentalFeatureRequestBody",
    url: () => `${w.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  17: {
    steamidAttribute: "requestor_steamid",
    titleLoc: "#SteamNotifications_FamilyPurchaseRequestTitle",
    bodyLoc: "#SteamNotifications_FamilyPurchaseRequestBody",
    url: (t) => md(t.familyid, t.request_id),
  },
  19: {
    steamidAttribute: "responder_steamid",
    titleLoc: (t) =>
      t.action == 1
        ? "#SteamNotifications_FamilyPurchaseRequestResponseDeclinedTitle"
        : "",
    bodyLoc: (t) =>
      t.action == 1
        ? "#SteamNotifications_FamilyPurchaseRequestDeclinedBody"
        : "",
    url: () => `${w.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  18: {
    steamidAttribute: "steamid",
    titleLoc: "#SteamNotifications_ParentalPlaytimeRequestTitle",
    bodyLoc: "#SteamNotifications_ParentalPlaytimeRequestBody",
    url: () => `${w.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  20: {
    steamidAttribute: "steamid_approver",
    titleLoc: (t) =>
      t.approved
        ? "#SteamNotifications_ParentalFeatureAccessResponseTitleApproved"
        : "#SteamNotifications_ParentalFeatureAccessResponseTitleDeclined",
    bodyLoc: (t) =>
      t.approved
        ? "#SteamNotifications_ParentalFeatureAccessResponseBodyApproved"
        : "#SteamNotifications_ParentalFeatureAccessResponseBodyDeclined",
    url: () => `${w.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  21: {
    steamidAttribute: "steamid_approver",
    titleLoc: (t) =>
      t.approved
        ? "#SteamNotifications_ParentalPlaytimeResponseTitleApproved"
        : "#SteamNotifications_ParentalPlaytimeResponseTitleDeclined",
    bodyLoc: (t) =>
      t.approved
        ? "#SteamNotifications_ParentalPlaytimeResponseBodyApproved"
        : "#SteamNotifications_ParentalPlaytimeResponseBodyDeclined",
    url: () => `${w.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
};
function qo(t) {
  if (t !== void 0) return j_[t];
}
function No(t) {
  return !!qo(t);
}
var E_ = [3, 5, 2, 4, 8, 9, 12, 22, 24, 23];
function zo(t) {
  return E_.findIndex((e) => e == t) != null;
}
function q_(t) {
  return t.hidden ? !1 : N_(t.notification_type) && tr(t.body_data);
}
function N_(t) {
  return Eo(t) || No(t) || zo(t);
}
var z_ = 60 * 60 * 48,
  x_ = 60 * 10,
  D_ = !1,
  xo = new Ut("SteamNotificationStore"),
  kt = xo.Debug,
  er = xo.Error,
  W_ = xo.Warning,
  mt = class {
    constructor() {
      he(this);
    }
    m_rgNotificationRollups = [];
    m_summary = To();
    m_bLoaded = !1;
    m_nUnviewed = 0;
    m_rgNotifyServerRead = [];
    m_rgNotifyServerHidden = [];
    m_keyNotifyServerRead = "";
    m_keyNotifyServerHidden = "";
    m_steamid;
    m_transport;
    m_rgUnreadNotificationIDs = [];
    m_rgNewRollupIDs = new Map();
    m_rgTestNotifications = [];
    m_currentNotificationsData = null;
    m_strRemoteClientID = "";
    m_eTargetClientType = 0;
    m_fnOnNotificationCallback = null;
    BHasNotificationsData() {
      return this.m_currentNotificationsData != null;
    }
    setTransport(e) {
      this.m_transport = e;
    }
    RegisterOnNotificationCallback(e) {
      this.m_fnOnNotificationCallback = e;
    }
    SetClientFilters(e, r = 0) {
      (this.m_strRemoteClientID = e), (this.m_eTargetClientType = r);
    }
    NotifyServerNotificationsRead(e) {
      this.m_rgNotifyServerRead.push(...e), this.UpdateServer();
    }
    NotifyServerNotificationsHidden(e) {
      this.m_rgNotifyServerHidden.push(...e), this.UpdateServer();
    }
    BSendToCallbackAsNew(e) {
      return (
        !e.read &&
        !Vo(e) &&
        !this.m_rgUnreadNotificationIDs.includes(e.notification_id)
      );
    }
    Dev_AddTestNotification(e) {}
    Dev_UpdateTestNotificationReadState(e, r) {
      let i = this.m_rgTestNotifications.findIndex(
        (a) => a.notification_id == e,
      );
      return i !== -1 && this.m_rgTestNotifications[i].read != r
        ? ((this.m_rgTestNotifications[i].read = r), !0)
        : !1;
    }
    UpdateServer() {
      if (this.m_rgNotifyServerRead.length > 0) {
        let e = Z.Init(Pr);
        e.Body().set_notification_ids(this.m_rgNotifyServerRead),
          Vt.MarkNotificationsRead(this.m_transport, e) &&
            (this.m_rgNotifyServerRead = []);
      }
      if (this.m_rgNotifyServerHidden.length > 0) {
        let e = Z.Init(Mr);
        e.Body().set_notification_ids(this.m_rgNotifyServerHidden),
          Vt.HideNotification(this.m_transport, e) &&
            (this.m_rgNotifyServerHidden = []);
      }
    }
    MarkItemRead(e, r = !1) {
      let i = this.m_rgNotificationRollups.findIndex(
        (o) => o.item.notification_id == e,
      );
      if (i === -1) {
        r
          ? this.NotifyServerNotificationsRead([e])
          : er(
              "Attempted to mark notification read that is not in the notification store",
            );
        return;
      }
      let a = this.m_rgNotificationRollups[i];
      if (a.item.read) {
        er("Attempted to mark notification read that is already read");
        return;
      }
      if (((a.item.read = !0), a.rgunread?.length > 0)) {
        this.ReduceNewTotals(a.type, a.rgunread.length);
        let o = [];
        a.rgunread.forEach((l) => {
          o.push(l);
        }),
          a.rgread.push(...a.rgunread),
          (a.rgunread = []),
          this.NotifyServerNotificationsRead(o);
      }
    }
    MarkItemHidden(e) {
      let r = this.m_rgNotificationRollups.findIndex(
        (a) => a.item.notification_id == e,
      );
      if (r === -1) {
        er(
          "Attempted to mark notification hidden that is not in the notification store",
        );
        return;
      }
      let i = this.m_rgNotificationRollups[r];
      (i.item.hidden = !0),
        i.rgunread?.length > 0 &&
          this.ReduceNewTotals(i.type, i.rgunread?.length),
        this.NotifyServerNotificationsHidden([...i.rgunread, ...i.rgread]);
    }
    ReduceNewTotals(e, r) {
      cd(this.m_summary, e, -r);
    }
    MarkAllItemsViewed() {
      let e = Z.Init(Rr);
      e.Body().set_remote_client_id(this.m_strRemoteClientID),
        e.Body().set_target_client_type(this.m_eTargetClientType),
        Vt.MarkNotificationsViewed(this.m_transport, e),
        (this.m_nUnviewed = 0);
    }
    MarkAllItemsRead(e) {
      let r = [],
        i = [],
        a = 0,
        o = e ?? this.m_rgNotificationRollups;
      return (
        o.forEach((l, p) => {
          l.rgunread.length > 0 &&
            (l.rgunread.forEach((u) => {
              r.push(u);
            }),
            i.push(p));
        }),
        r.length > 0 &&
          ((this.m_summary = Object.assign(To(), {
            pending_gifts: this.m_summary.pending_gifts,
            pending_invites: this.m_summary.pending_invites,
            pending_family_invites: this.m_summary.pending_family_invites,
          })),
          i.forEach((l) => {
            let p = o[l];
            (p.item.read = !0), (p.rgunread = []);
          }),
          this.NotifyServerNotificationsRead(r)),
        r.length + a
      );
    }
    ApplyNotificationsUpdate(e) {
      if (
        (kt("ApplyNotificationsUpdate", e),
        !e ||
          (!e.notifications?.length &&
            e.pending_friend_count === void 0 &&
            e.pending_gift_count === void 0))
      ) {
        kt("Error: ApplyNotificationsUpdate was called with no data");
        return;
      }
      if (!this.m_currentNotificationsData) {
        kt(
          "Error: ApplyNotificationsUpdate was called before this.m_currentNotificationsData was set",
        );
        return;
      }
      let r = this.m_currentNotificationsData;
      e.notifications?.forEach((i) => {
        let a = r.notifications.findIndex(
          (o) => o.notification_id == i.notification_id,
        );
        a != -1
          ? Object.assign(r.notifications[a], i)
          : r.notifications.push(i);
      }),
        e.pending_friend_count !== void 0 &&
          (this.m_currentNotificationsData.pending_friend_count =
            e.pending_friend_count),
        e.pending_gift_count !== void 0 &&
          (this.m_currentNotificationsData.pending_gift_count =
            e.pending_gift_count),
        e.pending_family_invite_count !== void 0 &&
          (this.m_currentNotificationsData.pending_family_invite_count =
            e.pending_family_invite_count),
        this.ProcessNotifications();
    }
    ProcessNewNotificationPayload(e) {
      (this.m_currentNotificationsData = JSON.parse(JSON.stringify(e))),
        this.ProcessNotifications();
    }
    ProcessNotifications() {
      let e = [],
        r = To(),
        i = 0;
      if (
        (this.m_currentNotificationsData?.notifications?.forEach((a) => {
          this.BExcludeClientTargetedNotification(a) ||
            (this.m_rgNotifyServerHidden.length > 0 &&
              this.m_rgNotifyServerHidden.findIndex(
                (l) => l == a.notification_id,
              ) !== -1 &&
              (a.hidden = !0),
            q_(a) &&
              (this.m_rgNotifyServerRead.length > 0 &&
                this.m_rgNotifyServerRead.findIndex(
                  (l) => l == a.notification_id,
                ) !== -1 &&
                (a.read = !0),
              a.read || cd(r, a.notification_type, 1),
              a.viewed || i++,
              this.AddNotificationToRollups(e, a)));
        }),
        e.sort((a, o) => a.timestamp - o.timestamp),
        this.m_fnOnNotificationCallback)
      ) {
        for (let a of e)
          if (a.bSendToCallbackAsNew)
            this.m_rgNewRollupIDs.set(a.key, a),
              this.m_fnOnNotificationCallback(a, 0);
          else if (this.m_rgNewRollupIDs.has(a.key)) {
            let o = this.m_rgNewRollupIDs.get(a.key);
            (o.item.read != a.item.read || o.item.viewed != a.item.viewed) &&
              (this.m_rgNewRollupIDs.set(a.key, a),
              this.m_fnOnNotificationCallback(a, 1));
          }
        for (let [a, o] of this.m_rgNewRollupIDs)
          e.findIndex((l) => l.key == a) == -1 &&
            (this.m_fnOnNotificationCallback(o, 2),
            this.m_rgNewRollupIDs.delete(a));
      }
      e.reverse(),
        (r.pending_gifts =
          this.m_currentNotificationsData?.pending_gift_count ?? 0),
        (r.pending_invites =
          this.m_currentNotificationsData?.pending_friend_count ?? 0),
        (r.pending_family_invites =
          this.m_currentNotificationsData?.pending_family_invite_count ?? 0),
        (this.m_rgNotificationRollups = e.slice()),
        (this.m_summary = r),
        (this.m_bLoaded = !0),
        (this.m_nUnviewed = i);
    }
    BExcludeClientTargetedNotification(e) {
      let r = tr(e.body_data);
      return r
        ? r.remote_client_id && this.m_strRemoteClientID != r.remote_client_id
          ? !0
          : !!(
              r.target_client_types &&
              !(this.m_eTargetClientType & r.target_client_types)
            )
        : !1;
    }
    BReplaceRollupItem(e, r) {
      return e.read != r.read
        ? r.read
        : (e.read && r.read) || r.viewed == e.viewed
          ? r.timestamp < e.timestamp
          : !e.viewed && r.viewed
            ? !0
            : e.viewed && r.viewed
              ? r.viewed < e.viewed
              : !1;
    }
    AddNotificationToRollups(e, r) {
      let i = this.BSendToCallbackAsNew(r);
      i && this.m_rgUnreadNotificationIDs.push(r.notification_id);
      let a = r.notification_type;
      switch (a) {
        case 3:
          {
            let u = ys(r);
            if (!u) return;
            let y =
                "comment_" +
                u.owner_steam_id?.GetAccountID() +
                "_" +
                u.forum_id +
                "_" +
                u.topic_id,
              C = e.findIndex((M) => M.key == y);
            if (C == -1)
              e.push({
                type: a,
                key: y,
                item: r,
                rollup_count: 1,
                timestamp: r.timestamp,
                rgunread: r.read ? [] : [r.notification_id],
                rgread: r.read ? [r.notification_id] : [],
                bSendToCallbackAsNew: i,
                url: dd(u),
              });
            else {
              let M = e[C];
              this.BReplaceRollupItem(r, M.item) &&
                ((!D_ || M.item.read) && (M.url = dd(u)),
                (M.item = r),
                (M.timestamp = r.timestamp),
                (M.bSendToCallbackAsNew = i)),
                (M.rollup_count = M.rollup_count + 1),
                r.read
                  ? M.rgread.push(r.notification_id)
                  : M.rgunread.push(r.notification_id);
            }
            u.json_data?.app_id &&
              Ge.Get().QueueAppRequest(u.json_data.app_id, {
                include_assets: !0,
              });
          }
          break;
        case 4:
          let o = ys(r);
          if (o) {
            let u = "item_" + o.appid;
            this.AddNotificationToRollupByAppID(e, r, u, a, i, o.appid);
          }
          break;
        case 12:
          let l = ys(r)?.appid.toString();
          if (l) {
            let u = "asyncgame_" + l;
            this.AddNotificationToRollupByAppID(e, r, u, a, i, l);
          }
          break;
        case 8:
          let p = ys(r)?.appid;
          p && Ge.Get().QueueAppRequest(p, { include_assets: !0 });
        default:
          e.push({
            type: a,
            key: r.notification_id,
            item: r,
            timestamp: r.timestamp,
            rgunread: r.read ? [] : [r.notification_id],
            rgread: r.read ? [r.notification_id] : [],
            bSendToCallbackAsNew: i,
          });
          break;
      }
    }
    AddNotificationToRollupByAppID(e, r, i, a, o, l) {
      let p = e.findIndex((u) => u.key == i);
      if (p == -1)
        e.push({
          type: a,
          key: i,
          item: r,
          rollup_count: 1,
          timestamp: r.timestamp,
          rgunread: r.read ? [] : [r.notification_id],
          rgread: r.read ? [r.notification_id] : [],
          bSendToCallbackAsNew: o,
        });
      else {
        let u = e[p];
        this.BReplaceRollupItem(r, u.item) &&
          ((u.item = r),
          (u.timestamp = r.timestamp),
          (u.bSendToCallbackAsNew = o)),
          (u.rollup_count = u.rollup_count + 1),
          r.read
            ? u.rgread.push(r.notification_id)
            : u.rgunread.push(r.notification_id);
      }
      Ge.Get().QueueAppRequest(parseInt(l), { include_assets: !0 });
    }
  };
T([J], mt.prototype, "m_rgNotificationRollups", 2),
  T([J], mt.prototype, "m_summary", 2),
  T([J], mt.prototype, "m_bLoaded", 2),
  T([J], mt.prototype, "m_nUnviewed", 2),
  T([ke], mt.prototype, "ProcessNotifications", 1);
function To() {
  return {
    comments: 0,
    inventory_items: 0,
    invites: 0,
    gifts: 0,
    offline_messages: 0,
    trade_offers: 0,
    async_game_updates: 0,
    moderator_messages: 0,
    help_request_replies: 0,
    general: 0,
    wishlist: 0,
    pending_gifts: 0,
    pending_invites: 0,
    major_sale: 0,
    parental_feature_requests: 0,
    family_invites: 0,
    family_purchase_requests: 0,
    family_purchase_request_responses: 0,
    pending_family_invites: 0,
    parental_playtime_requests: 0,
    parental_feature_access_responses: 0,
    parental_playtime_responses: 0,
    requested_game_added: 0,
  };
}
async function gd(t, e, r, i, a, o = !0, l = !1) {
  if (!e) throw new Error("Invalid steamid for GetSteamNotifications");
  let p = Z.Init(Cr);
  p.Body().set_language(r),
    p.Body().set_include_read(o),
    p.Body().set_include_pinned_counts(!0),
    p.Body().set_include_confirmation_count(l);
  let u = await Vt.GetSteamNotifications(t, p);
  if (u.GetEResult() !== 1)
    throw (
      (W_(
        `Received error from GetSteamNotifications. Result ${u.GetEResult()}. Transport ${u.Hdr().transport_error()}`,
      ),
      new Error(`Error from GetSteamNotifications: ${u.GetEResult()}`))
    );
  let y = u.Body().toObject();
  return (
    i &&
      (y.notifications = y.notifications?.filter(
        (C) => !Lo(C.notification_type, i, a),
      )),
    y
  );
}
async function U_(t, e) {
  if (!t || !t.steamid || !t.contextid || !t.appid || !t.assetid)
    return er("Item notification missing required attributes"), null;
  let r = Z.Init(Br);
  r.Body().set_steamid(t.steamid),
    r.Body().set_contextid(t.contextid),
    r.Body().set_appid(parseInt(t.appid)),
    r.Body().set_get_descriptions(!0),
    r.Body().set_language(w.LANGUAGE);
  let i = new Sr();
  i.add_assetids(t.assetid), r.Body().set_filters(i);
  let a = await Nn.GetInventoryItemsWithDescriptions(e, r);
  if (a.GetEResult() !== 1)
    return (
      er("Request for steam item metadata did not succeed", a.GetEResult()),
      null
    );
  let o = "",
    l = await Ge.Get().QueueAppRequest(parseInt(t.appid), {});
  return (
    l == 1
      ? (o = Ge.Get().GetApp(parseInt(t.appid))?.GetName())
      : er("Failed getting app info", l),
    { app_name: o, item_data: a.Body().toObject().descriptions[0] }
  );
}
var O_ = "ItemMetadata";
function L_(t) {
  return [`${O_}_${t?.steamid}_${t?.appid}_${t?.contextid}_${t?.assetid}`];
}
function fd(t, e, r) {
  let i = Oo(4, t.body_data);
  i.steamid = e;
  let a = ht({
    queryKey: L_(i),
    queryFn: async () => U_(i, r),
    staleTime: 1 / 0,
  });
  return a.isSuccess ? a.data : null;
}
function dd(t) {
  let e = `comment/${t.comment_type}/bounce/${t.owner_steam_id.ConvertTo64BitString()}/${t.forum_id}/?feature2=${t.topic_id}`;
  return t.last_post > 0 && (e += "&tscn=" + (t.last_post - 1)), e;
}
function Do(t) {
  return t.comment_type == 10;
}
function Wo(t) {
  return t?.bhas_friend;
}
function Uo(t) {
  return t.comment_type == 10;
}
function yd(t) {
  return Do(t) || Wo(t);
}
function Cd(t) {
  return Uo(t);
}
function tr(t) {
  if (!t) return null;
  try {
    return JSON.parse(t);
  } catch {
    kt("Steam notification in invalid format:", t);
  }
  return null;
}
function ys(t) {
  return Oo(t.notification_type, t.body_data);
}
function Pd(t) {
  return Oo(t.type, t.item?.body_data);
}
function Oo(t, e) {
  let r = tr(e);
  if (!r) return null;
  switch (t) {
    case 2:
      return r.gifter_account;
    case 22:
      return {
        responder_steamid: r.responder_steamid,
        package_id: r.package_id,
        bundle_id: r.bundle_id,
      };
    case 9:
      return parseInt(r.sender);
    case 8:
      return { appid: r.appid, count: r.count ?? 1, appids: r.appids ?? [] };
    case 12:
      return !r.appid || !r.state || (r.state != 1 && r.state != 2)
        ? (kt("Async game notification invalid data", e), null)
        : { appid: parseInt(r.appid), state: parseInt(r.state) };
    case 3:
      let i = {
        owner_steam_id: r.owner_steam_id ? new pe(r.owner_steam_id) : null,
        bclan_account: kr(r.bclan_account),
        title: r.title,
        comment: r.text,
        time: r.last_post,
        comment_type: Number(r.type),
        topic_id: r.topic_id,
        forum_id: r.forum_id,
        account_steam_id: r.account_id
          ? pe.InitFromAccountID(r.account_id)
          : null,
        bhas_friend: kr(r.bhas_friend),
        bis_forum: kr(r.bis_forum),
        last_post: r.last_post,
        bsubscribed: kr(r.subscribed),
        bis_owner: kr(r.bis_owner),
      };
      return (
        r.json_data &&
          (i.json_data = {
            app_id: parseInt(r.json_data.app_id),
            file_type: parseInt(r.json_data.file_type),
            title: r.json_data.title,
          }),
        i
      );
    case 5:
      return {
        requestorID: parseInt(r.requestor_id),
        state: r.state ? parseInt(r.state) : 0,
      };
    case 4:
      return {
        appid: parseInt(r.app_id),
        assetid: r.asset_id ?? "",
        contextid: r.context_id ?? "",
      };
    case 23:
      return {
        url: r.url ?? "",
        strGameName: r.content_app_name ?? "",
        mediaType: r.media_type ?? "clip",
        secDuration: parseFloat(r.duration_seconds ?? 0),
        nSize: parseInt(r.file_size ?? 0),
        strMachineName: r.machine_name,
        rtExpiration: r.expiration,
        thumbnailURL: r.thumbnail_url,
      };
    default:
      return (
        kt(
          "GetCustomNotificationDataByType called with unexpected type:" + t,
          e,
        ),
        null
      );
  }
}
function kr(t) {
  if (typeof t > "u") return !1;
  if (typeof t == "number") return t > 0;
  if (typeof t == "string")
    switch (t.toLowerCase()?.trim()) {
      case "true":
      case "1":
        return !0;
      default:
        return !1;
    }
  return kt("notification contained unexpected boolean value"), !1;
}
var V_ = {
  0: { rollup_field: void 0, eFeature: void 0 },
  1: { rollup_field: void 0, eFeature: void 0 },
  2: { rollup_field: "gifts", eFeature: Se },
  3: { rollup_field: "comments", eFeature: 2 },
  4: { rollup_field: "inventory_items", eFeature: 3 },
  5: { rollup_field: "invites", eFeature: 4 },
  6: { rollup_field: "major_sale", eFeature: 1 },
  7: { rollup_field: void 0, eFeature: void 0 },
  8: { rollup_field: "wishlist", eFeature: 1 },
  9: { rollup_field: "trade_offers", eFeature: 6 },
  10: { rollup_field: "general", eFeature: Se },
  11: { rollup_field: "help_request_replies", eFeature: Se },
  12: { rollup_field: "async_game_updates", eFeature: Se },
  14: { rollup_field: "moderator_messages", eFeature: 2 },
  15: { rollup_field: "parental_feature_requests", eFeature: Se },
  16: { rollup_field: "family_invites", eFeature: Se },
  17: { rollup_field: "family_purchase_requests", eFeature: Se },
  18: { rollup_field: "parental_playtime_requests", eFeature: Se },
  19: { rollup_field: "family_purchase_request_responses", eFeature: Se },
  20: { rollup_field: "parental_feature_access_responses", eFeature: Se },
  21: { rollup_field: "parental_playtime_responses", eFeature: Se },
  22: { rollup_field: "requested_game_added", eFeature: Se },
  23: { rollup_field: void 0, eFeature: Se },
  24: { rollup_field: void 0, eFeature: Se },
};
function Rd(t) {
  let e = V_[t];
  return le(!!e, `Missing notification type data for ${t}`), e;
}
function Lo(t, e, r) {
  if (!e) return !1;
  let i = Rd(t);
  return Mn(e, i?.eFeature ?? mi, r);
}
function cd(t, e, r) {
  Le(() => {
    let i = Rd(e);
    i?.rollup_field && (t[i.rollup_field] = Math.max(0, t[i.rollup_field] + r));
  });
}
function Qe(t) {
  return !t.viewed || t.viewed + x_ > Us();
}
function Vo(t) {
  return t.viewed && t.viewed + z_ < Us();
}
var ye = {
  NotificationsMenu: "_9pxxQxgIeSs-",
  NotificationsMenuEntriesContainer: "_9iOH1Q-uKyk-",
  NotificationsMenuScrollable: "Opz4VIiguyE-",
  MenuScrollbarHidden: "mlJHp8oLBvE-",
  NotificationHeader: "_4eXplz8VvqA-",
  ResponsiveViewAll: "boBSDXKQiHQ-",
  AllNotificationsTitle: "CEJD-X7flrQ-",
  AllNotificationsButton: "rdozpnHvOb8-",
  NotificationsButton: "_99Vgt1ahI7Y-",
  SVGNotifications: "l5XI-YSDhPA-",
  Grey: "iN37A3Nzs1s-",
  Disabled: "cPe5BvEgNbw-",
  Green: "gCJ9prdd8bo-",
  AnimateBell: "CZDKF--ZM3c-",
  NotificationBellAnimation: "RjtsAQW-nCg-",
  NotificationBellUvula: "-THnGhhzqZw-",
  EmptyNotificationsCtn: "OHtwjMtZO28-",
  EmptyNotificationsTitle: "t7N3RcczvYw-",
  EmptyNotificationsBody: "oERBZh5ya08-",
};
var Ts = K(Be());
var Cs = K(Be());
function Ko(t) {
  if (!t) return;
  let e = typeof t == "string" ? t : t.locString,
    r = typeof t == "string" ? [] : t.params || [];
  if (e) return e[0] !== "#" ? e : q(e, ...r);
}
function bd(t, e) {
  return Cs.default.useMemo(() => {
    if (t === void 0) return null;
    let r = jo(t),
      i = tr(e);
    if (!r || !i) return null;
    let a =
        typeof r.displayNameLoc != "function"
          ? { locString: r.displayNameLoc }
          : r.displayNameLoc(i),
      o =
        typeof r.titleLoc != "function"
          ? { locString: r.titleLoc }
          : r.titleLoc(i),
      l =
        typeof r.bodyLoc != "function"
          ? { locString: r.bodyLoc }
          : r.bodyLoc(i),
      p = typeof r.image != "function" ? r.image : r.image(i),
      u = typeof r.link != "function" ? r.link : r.link(i);
    return {
      display_name: Ko(a),
      title: Ko(o),
      body: Ko(l),
      image: p,
      link: u,
    };
  }, [e, t]);
}
function Md(t, e) {
  return Cs.default.useMemo(() => {
    let i = qo(t),
      a = tr(e);
    if (!i) return null;
    let o = typeof i.titleLoc == "string" ? i.titleLoc : i.titleLoc(a),
      l = typeof i.bodyLoc == "string" ? i.bodyLoc : i.bodyLoc(a),
      p = typeof i.url == "string" ? i.url : i.url(a),
      u =
        typeof i.steamidAttribute == "string"
          ? i.steamidAttribute
          : i.steamidAttribute(a),
      y = a && a[u];
    return { strTitleLoc: o, strBodyLoc: l, strUrl: p, steamid: y };
  }, [e, t]);
}
function dt(t) {
  return Cs.default.useMemo(() => (zo(t.type) ? Pd(t) : null), [t]);
}
var vd = K(ut()),
  Pt = K(Be());
function Bd(t, e, r, i) {
  let a = (0, Pt.useRef)(),
    o = (0, Pt.useRef)(void 0),
    l = lu();
  a.current = t;
  let [p, u] = (0, Pt.useState)(void 0),
    {
      include_assets: y,
      include_release: C,
      include_platforms: M,
      include_all_purchase_options: k,
      include_screenshots: B,
      include_trailers: x,
      include_ratings: H,
      include_tag_count: h,
      include_reviews: D,
      include_basic_info: U,
      include_supported_languages: re,
      include_full_description: Fe,
      include_included_items: W,
      include_assets_without_overrides: E,
      apply_user_filters: b,
      include_links: V,
    } = r;
  if (
    ((0, Pt.useEffect)(() => {
      let ft = {
          include_assets: y,
          include_release: C,
          include_platforms: M,
          include_all_purchase_options: k,
          include_screenshots: B,
          include_trailers: x,
          include_ratings: H,
          include_tag_count: h,
          include_reviews: D,
          include_basic_info: U,
          include_supported_languages: re,
          include_full_description: Fe,
          include_included_items: W,
          include_assets_without_overrides: E,
          apply_user_filters: b,
          include_links: V,
        },
        O = null;
      return (
        !t ||
          t < 0 ||
          Ge.Get().BHasStoreItem(t, e, ft) ||
          (p !== void 0 && i && i == o.current) ||
          (i !== o.current && (u(void 0), (o.current = i)),
          (O = vd.default.CancelToken.source()),
          Ge.Get()
            .QueueStoreItemRequest(t, e, ft)
            .then((L) => {
              !O?.token.reason && a.current === t && u(L == 1), l();
            })),
        () => O?.cancel("useStoreItemCache: unmounting")
      );
    }, [t, e, i, p, y, C, M, k, B, x, H, h, D, U, re, Fe, W, E, b, V, l]),
    !t)
  )
    return [null, 2];
  if (p === !1) return [void 0, 2];
  if (Ge.Get().BIsStoreItemMissing(t, e)) return [void 0, 2];
  if (!Ge.Get().BHasStoreItem(t, e, r)) return [void 0, 1];
  let fe = Ge.Get().GetStoreItemWithLegacyVisibilityCheck(t, e);
  return fe ? [fe, 3] : [null, 2];
}
function rr(t, e, r) {
  return Bd(t, 0, e, r);
}
function Sd(t, e, r) {
  let [i, a] = Bd(t, e, r),
    o;
  i?.GetStoreItemType() == 1 &&
    !i.GetAssets()?.GetHeaderURL() &&
    i?.GetIncludedAppIDs().length == 1 &&
    (o = i.GetIncludedAppIDs()[0]);
  let [l, p] = rr(o, r);
  return o && l?.BIsVisible() ? [l, p] : [i, a];
}
var hd = { WebPinnedNotification: "Ho2Q8aj0bJU-" };
var Fd = K(Be());
var Hr = class t {
  static sm_strDomain;
  static sm_strController;
  static sm_strMethod;
  static sm_strSubmethod;
  static sm_strComputedLinkPrefix;
  static SetNavEventParams(e, r, i = null, a = null) {
    (t.sm_strDomain = e),
      (t.sm_strController = r),
      (t.sm_strMethod = i),
      (t.sm_strSubmethod = a),
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
  static InstrumentLink(e, r, i = null) {
    let a = t.GetLinkParam(r, i);
    return dr.AddNavParamToURL(e, a);
  }
  static GetLinkParam(e, r = null) {
    let i;
    if (typeof e != "string") {
      if (e.domain) return dr.GetLinkParam(e, r);
      i = e.feature || "";
    }
    let a;
    if (!t.sm_strComputedLinkPrefix && !t.ComputeStaticLinkPrefix())
      return null;
    a = t.sm_strComputedLinkPrefix;
    let o = dr.EncodeEventComponent(i);
    return o && ((a += "_" + o), r && (a += "_" + r)), a;
  }
  static ComputeStaticLinkPrefix() {
    return t.sm_strDomain
      ? ((t.sm_strComputedLinkPrefix = dr.ComputeLinkPrefix(
          t.sm_strDomain,
          t.sm_strController,
          t.sm_strMethod,
          t.sm_strSubmethod,
        )),
        !0)
      : (le(
          !1,
          "CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!",
        ),
        !1);
  }
};
var wd = K(Ie());
function Jo(t) {
  let { children: e, ...r } = t,
    i = Vp(),
    a = Fd.useMemo(
      () => ({ ...Hr.GetDefaultParams(), ...i, ...r }),
      [i, r.domain, r.controller, r.method, r.submethod, r.feature, r.depth],
    );
  return (0, wd.jsx)(Lp, { ...a, children: e });
}
var Vl = K(Be());
var Ht = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
function At(t, e) {
  let r = ".jpg";
  (!t || t === "0000000000000000000000000000000000000000") && (t = Ht),
    t.length == 44 && ((r = t.substr(-4)), (t = t.substr(0, 40)));
  let i = w.AVATAR_BASE_URL;
  return (
    i ||
      ((i = w.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
      (i += t.substr(0, 2) + "/")),
    (i += t),
    e && e != "small" && (i += "_" + e),
    (i += r),
    i
  );
}
var Gd = "061818254b2c99ac49e6626adb128ed1282a392f";
var Id = 120,
  Rt = class {
    m_unAppID;
    m_bInitialized = !1;
    m_strName;
    m_strIconURL;
    m_dtUpdatedFromServer;
    m_eAppType;
    constructor(e) {
      this.m_unAppID = e;
    }
    get appid() {
      return this.m_unAppID;
    }
    get is_initialized() {
      return this.m_bInitialized;
    }
    get is_valid() {
      return this.m_bInitialized && !!this.m_strName;
    }
    get name() {
      return this.m_strName;
    }
    get icon_url_no_default() {
      return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, Gd);
    }
    get icon_url() {
      return this.BuildAppURL(this.m_strIconURL, Gd);
    }
    get time_updated_from_server() {
      return this.m_dtUpdatedFromServer;
    }
    get apptype() {
      return this.m_eAppType;
    }
    BIsApplicationOrTool() {
      return this.apptype == 4 || this.apptype == 2;
    }
    BuildAppURL(e, r) {
      return e
        ? w.MEDIA_CDN_COMMUNITY_URL +
            "images/apps/" +
            this.appid +
            "/" +
            e +
            ".jpg"
        : At(r);
    }
    DeserializeFromMessage(e) {
      (this.m_bInitialized = !0),
        (this.m_strName = e.name()),
        (this.m_strIconURL = e.icon()),
        (this.m_dtUpdatedFromServer = new Date()),
        (this.m_eAppType = e.app_type());
    }
    DeserializeFromAppOverview(e) {
      e.icon_hash() && e.app_type() != 1073741824
        ? ((this.m_bInitialized = !0),
          (this.m_strName = e.display_name()),
          (this.m_strIconURL = e.icon_hash()),
          (this.m_dtUpdatedFromServer = new Date()),
          (this.m_eAppType = e.app_type()))
        : (this.m_bInitialized = !1);
    }
    DeserializeFromCacheObject(e) {
      try {
        (this.m_strName = e.strName),
          (this.m_strIconURL = e.strIconURL),
          (this.m_dtUpdatedFromServer = new Date(e.strUpdatedFromServer)),
          (this.m_eAppType = e.eAppType),
          (this.m_bInitialized = !0);
      } catch {}
    }
    SerializeToCacheObject() {
      return (
        le(
          this.m_bInitialized,
          "Attempting to serialize an uninitialized AppInfo object for caching!",
        ),
        this.m_bInitialized
          ? {
              strName: this.m_strName,
              strIconURL: this.m_strIconURL,
              strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
              eAppType: this.m_eAppType,
            }
          : null
      );
    }
  };
var Ps = class {
  m_nLastUpdated = 0;
  m_mapLanguages = J.map();
  m_appid;
  m_fetching = null;
  constructor(e) {
    this.m_appid = e;
  }
  GetAppID() {
    return this.m_appid;
  }
  GetTokenList(e) {
    return this.m_mapLanguages.has(e) ? this.m_mapLanguages.get(e) : null;
  }
  Localize(e, r) {
    let i = w.LANGUAGE,
      a = this.GetTokenList(i),
      o = i != "english" ? this.GetTokenList("english") : null;
    return Hd(e, a, o, this.m_appid, r);
  }
  SubstituteParams(e, r) {
    let i = w.LANGUAGE,
      a = this.GetTokenList(i),
      o = i != "english" ? this.GetTokenList("english") : null;
    return Ad(e, a, o, this.m_appid, r);
  }
};
function Hd(t, e, r, i, a) {
  if (!t.startsWith("#"))
    return (
      console.log("Token doesn't start with #:", t, "appid", i, "tokens", e), ""
    );
  let o = t;
  t = t.toLowerCase();
  let l = "";
  if (
    (e && e.has(t) && (l = e.get(t)), !l && r && r.has(t) && (l = r.get(t)), l)
  )
    l = Ad(l, e, r, i, a);
  else if (
    ((e || r) &&
      console.log("No loc found for appid", i, o, "Tokens:", e, "Fallback:", r),
    e && w.EUNIVERSE != 1)
  )
    return t;
  return l;
}
function Ad(t, e, r, i, a) {
  let o = /{[A-za-z0-9_%#:]+}/g,
    l = t.match(o);
  if (l)
    for (let p of l) {
      let u = p.slice(1, -1),
        y = kd(u, a),
        C = Hd(y, e, r, i, a);
      if (!C) return "";
      t = t.replace(p, C);
    }
  return (t = kd(t, a)), t;
}
function kd(t, e) {
  let r = /%[A-Za-z0-9_:]+%/g,
    i = t.match(r);
  if (i)
    for (let a of i) {
      let o = a.slice(1, -1).toLowerCase(),
        l = e.get(o);
      l == null
        ? console.log("No rich presence found for", o)
        : (t = t.replace(a, l));
    }
  return t;
}
var R = K(we());
var I = R.Message;
var Ar = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appids || f(t.M()),
        I.initialize(this, e, 0, -1, [1], null);
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
                br: s.readInt32,
                pbr: s.readPackedInt32,
                bw: n.writeRepeatedInt32,
              },
              language: { n: 2, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetApps_Request";
    }
  },
  Qo = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.apps || f(t.M()),
        I.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { apps: { n: 1, c: tu, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetApps_Response";
    }
  },
  Tr = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: s.readInt32, bw: n.writeInt32 },
              language: { n: 2, br: s.readString, bw: n.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetAppRichPresenceLocalization_Request";
    }
  },
  $o = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || f(t.M()),
        I.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: s.readInt32, bw: n.writeInt32 },
              token_lists: { n: 2, c: Xo, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetAppRichPresenceLocalization_Response";
    }
  },
  Yo = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.name || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              name: { n: 1, br: s.readString, bw: n.writeString },
              value: { n: 2, br: s.readString, bw: n.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetAppRichPresenceLocalization_Response_Token";
    }
  },
  Xo = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.language || f(t.M()),
        I.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              language: { n: 1, br: s.readString, bw: n.writeString },
              tokens: { n: 2, c: Yo, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetAppRichPresenceLocalization_Response_TokenList";
    }
  },
  Zo = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              comment_thread_type: { n: 2, br: s.readEnum, bw: n.writeEnum },
              gidfeature: {
                n: 3,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              gidfeature2: {
                n: 4,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              commentthreadid: {
                n: 5,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              start: { n: 6, br: s.readInt32, bw: n.writeInt32 },
              count: { n: 7, br: s.readInt32, bw: n.writeInt32 },
              upvoters: { n: 8, br: s.readInt32, bw: n.writeInt32 },
              include_deleted: { n: 9, br: s.readBool, bw: n.writeBool },
              gidcomment: {
                n: 10,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              time_oldest: { n: 11, br: s.readUint32, bw: n.writeUint32 },
              oldest_first: { n: 12, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetCommentThread_Request";
    }
  },
  Rs = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.gidcomment || f(t.M()),
        I.initialize(this, e, 0, -1, [12], null);
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
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              steamid: {
                n: 2,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              timestamp: { n: 3, br: s.readUint32, bw: n.writeUint32 },
              text: { n: 4, br: s.readString, bw: n.writeString },
              upvotes: { n: 5, br: s.readInt32, bw: n.writeInt32 },
              hidden: { n: 6, br: s.readBool, bw: n.writeBool },
              hidden_by_user: { n: 7, br: s.readBool, bw: n.writeBool },
              deleted: { n: 8, br: s.readBool, bw: n.writeBool },
              ipaddress: { n: 9, c: eu },
              total_hidden: { n: 10, br: s.readInt32, bw: n.writeInt32 },
              upvoted_by_user: { n: 11, br: s.readBool, bw: n.writeBool },
              reactions: { n: 12, c: el, r: !0, q: !0 },
              gidparentcomment: {
                n: 13,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_Comment";
    }
  },
  el = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.reactionid || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              reactionid: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              count: { n: 2, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_Comment_Reaction";
    }
  },
  tl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.comments || f(t.M()),
        I.initialize(this, e, 0, -1, [1, 2, 9], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              comments: { n: 1, c: Rs, r: !0, q: !0 },
              deleted_comments: { n: 2, c: Rs, r: !0, q: !0 },
              steamid: {
                n: 3,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              commentthreadid: {
                n: 4,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              start: { n: 5, br: s.readInt32, bw: n.writeInt32 },
              count: { n: 6, br: s.readInt32, bw: n.writeInt32 },
              total_count: { n: 7, br: s.readInt32, bw: n.writeInt32 },
              upvotes: { n: 8, br: s.readInt32, bw: n.writeInt32 },
              upvoters: {
                n: 9,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: n.writeRepeatedUint32,
              },
              user_subscribed: { n: 10, br: s.readBool, bw: n.writeBool },
              user_upvoted: { n: 11, br: s.readBool, bw: n.writeBool },
              answer_commentid: {
                n: 12,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              answer_actor: { n: 13, br: s.readUint32, bw: n.writeUint32 },
              answer_actor_rank: { n: 14, br: s.readInt32, bw: n.writeInt32 },
              can_post: { n: 15, br: s.readBool, bw: n.writeBool },
              comment_thread_type: {
                n: 16,
                br: s.readUint32,
                bw: n.writeUint32,
              },
              gidfeature: {
                n: 17,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              gidfeature2: {
                n: 18,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetCommentThread_Response";
    }
  },
  rl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              comment_thread_type: { n: 2, br: s.readEnum, bw: n.writeEnum },
              gidfeature: {
                n: 3,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              gidfeature2: {
                n: 4,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              text: { n: 6, br: s.readString, bw: n.writeString },
              gidparentcomment: {
                n: 7,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              suppress_notifications: { n: 8, br: s.readBool, bw: n.writeBool },
              is_report: { n: 9, br: s.readBool, bw: n.writeBool },
              start_hidden: { n: 10, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_PostCommentToThread_Request";
    }
  },
  il = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.gidcomment || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              commentthreadid: {
                n: 2,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              count: { n: 3, br: s.readInt32, bw: n.writeInt32 },
              upvotes: { n: 4, br: s.readInt32, bw: n.writeInt32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_PostCommentToThread_Response";
    }
  },
  sl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              comment_thread_type: { n: 2, br: s.readEnum, bw: n.writeEnum },
              gidfeature: {
                n: 3,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              gidfeature2: {
                n: 4,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              gidcomment: {
                n: 5,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              undelete: { n: 6, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_DeleteCommentFromThread_Request";
    }
  },
  nl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), I.initialize(this, e, 0, -1, void 0, null);
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
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_DeleteCommentFromThread_Response";
    }
  },
  al = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.commentthreadtype || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              commentthreadtype: { n: 1, br: s.readString, bw: n.writeString },
              steamid: {
                n: 2,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              gidfeature: {
                n: 3,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              gidfeature2: {
                n: 4,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              gidcomment: {
                n: 5,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              rate_up: { n: 6, br: s.readBool, bw: n.writeBool },
              suppress_notifications: { n: 7, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_RateCommentThread_Request";
    }
  },
  ol = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.gidcomment || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              commentthreadid: {
                n: 2,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              count: { n: 3, br: s.readUint32, bw: n.writeUint32 },
              upvotes: { n: 4, br: s.readUint32, bw: n.writeUint32 },
              has_upvoted: { n: 5, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_RateCommentThread_Response";
    }
  },
  ll = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.commentthreadtype || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              commentthreadtype: { n: 1, br: s.readString, bw: n.writeString },
              steamid: {
                n: 2,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              gidfeature: {
                n: 3,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              gidfeature2: {
                n: 4,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              gidcomment: {
                n: 5,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              max_results: { n: 6, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetCommentThreadRatings_Request";
    }
  },
  pl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.commentthreadid || f(t.M()),
        I.initialize(this, e, 0, -1, [5], null);
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
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              gidcomment: {
                n: 2,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              upvotes: { n: 3, br: s.readUint32, bw: n.writeUint32 },
              has_upvoted: { n: 4, br: s.readBool, bw: n.writeBool },
              upvoter_accountids: {
                n: 5,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: n.writeRepeatedUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetCommentThreadRatings_Response";
    }
  },
  ul = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.announcementid || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              vote_up: { n: 2, br: s.readBool, bw: n.writeBool },
              clan_accountid: { n: 3, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_RateClanAnnouncement_Request";
    }
  },
  ml = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), I.initialize(this, e, 0, -1, void 0, null);
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
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_RateClanAnnouncement_Response";
    }
  },
  dl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.announcementid || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetClanAnnouncementVoteForUser_Request";
    }
  },
  cl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.voted_up || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              voted_up: { n: 1, br: s.readBool, bw: n.writeBool },
              voted_down: { n: 2, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetClanAnnouncementVoteForUser_Response";
    }
  },
  _l = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              filter_user_uploaded_only: {
                n: 2,
                br: s.readBool,
                bw: n.writeBool,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetAvatarHistory_Request";
    }
  },
  gl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.avatars || f(t.M()),
        I.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { avatars: { n: 1, c: fl, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetAvatarHistory_Response";
    }
  },
  fl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.avatar_sha1 || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              avatar_sha1: { n: 1, br: s.readString, bw: n.writeString },
              user_uploaded: { n: 2, br: s.readBool, bw: n.writeBool },
              timestamp: { n: 3, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetAvatarHistory_Response_AvatarData";
    }
  },
  yl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.priority || f(t.M()),
        I.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              priority: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              appid: {
                n: 2,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: n.writeRepeatedUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CAppPriority";
    }
  },
  Cl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.count || f(t.M()),
        I.initialize(this, e, 0, -1, [5, 6, 8], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              count: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              offset: { n: 2, br: s.readUint32, bw: n.writeUint32 },
              rtime32_start_time: { n: 3, br: s.readUint32, bw: n.writeUint32 },
              rtime32_end_time: { n: 4, br: s.readUint32, bw: n.writeUint32 },
              language_preference: {
                n: 5,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: n.writeRepeatedUint32,
              },
              filter_event_type: {
                n: 6,
                r: !0,
                q: !0,
                br: s.readEnum,
                pbr: s.readPackedEnum,
                bw: n.writeRepeatedEnum,
              },
              filter_to_appid: { n: 7, br: s.readBool, bw: n.writeBool },
              app_list: { n: 8, c: yl, r: !0, q: !0 },
              count_after: { n: 9, d: 0, br: s.readUint32, bw: n.writeUint32 },
              count_before: {
                n: 10,
                d: 0,
                br: s.readUint32,
                bw: n.writeUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetUserPartnerEventNews_Request";
    }
  },
  Pl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.results || f(t.M()),
        I.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { results: { n: 1, c: ru, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetUserPartnerEventNews_Response";
    }
  },
  Rl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.include_steam_blog || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              include_steam_blog: { n: 1, br: s.readBool, bw: n.writeBool },
              filter_to_played_within_days: {
                n: 2,
                br: s.readUint32,
                bw: n.writeUint32,
              },
              include_only_game_updates: {
                n: 3,
                br: s.readBool,
                bw: n.writeBool,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetBestEventsForUser_Request";
    }
  },
  bl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.clanid || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              clanid: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              event_gid: {
                n: 2,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              announcement_gid: {
                n: 3,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              appid: { n: 4, br: s.readUint32, bw: n.writeUint32 },
              possible_takeover: { n: 5, br: s.readBool, bw: n.writeBool },
              rtime32_last_modified: {
                n: 6,
                d: 0,
                br: s.readUint32,
                bw: n.writeUint32,
              },
              user_app_priority: { n: 7, br: s.readInt32, bw: n.writeInt32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_PartnerEventResult";
    }
  },
  Ml = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.results || f(t.M()),
        I.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { results: { n: 1, c: bl, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetBestEventsForUser_Response";
    }
  },
  vl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), I.initialize(this, e, 0, -1, void 0, null);
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
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_ClearUserPartnerEventsAppPriorities_Request";
    }
  },
  Bl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), I.initialize(this, e, 0, -1, void 0, null);
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
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_ClearUserPartnerEventsAppPriorities_Response";
    }
  },
  Sl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              user_app_priority: { n: 2, br: s.readInt32, bw: n.writeInt32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_PartnerEventsAppPriority";
    }
  },
  hl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), I.initialize(this, e, 0, -1, void 0, null);
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
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetUserPartnerEventsAppPriorities_Request";
    }
  },
  Fl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.priorities || f(t.M()),
        I.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { priorities: { n: 1, c: Sl, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetUserPartnerEventsAppPriorities_Response";
    }
  },
  wl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { appid: { n: 1, br: s.readUint32, bw: n.writeUint32 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_ClearSinglePartnerEventsAppPriority_Request";
    }
  },
  Gl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), I.initialize(this, e, 0, -1, void 0, null);
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
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_ClearSinglePartnerEventsAppPriority_Response";
    }
  },
  Il = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { appid: { n: 1, br: s.readUint32, bw: n.writeUint32 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_PartnerEventsShowMoreForApp_Request";
    }
  },
  kl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), I.initialize(this, e, 0, -1, void 0, null);
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
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_PartnerEventsShowMoreForApp_Response";
    }
  },
  Hl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { appid: { n: 1, br: s.readUint32, bw: n.writeUint32 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_PartnerEventsShowLessForApp_Request";
    }
  },
  Al = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), I.initialize(this, e, 0, -1, void 0, null);
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
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_PartnerEventsShowLessForApp_Response";
    }
  },
  Tl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.markings || f(t.M()),
        I.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { markings: { n: 1, c: jl, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_MarkPartnerEventsForUser_Request";
    }
  },
  jl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.clanid || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              clanid: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              event_gid: {
                n: 2,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              display_location: { n: 3, br: s.readEnum, bw: n.writeEnum },
              mark_shown: { n: 4, br: s.readBool, bw: n.writeBool },
              mark_read: { n: 5, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking";
    }
  },
  El = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), I.initialize(this, e, 0, -1, void 0, null);
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
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_MarkPartnerEventsForUser_Response";
    }
  },
  ql = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.event_gids || f(t.M()),
        I.initialize(this, e, 0, -1, [1], null);
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
                br: s.readFixed64String,
                pbr: s.readPackedFixed64String,
                bw: n.writeRepeatedFixed64String,
              },
              include_read_events_only: {
                n: 2,
                br: s.readBool,
                bw: n.writeBool,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetUserPartnerEventViewStatus_Request";
    }
  },
  Nl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.events || f(t.M()),
        I.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { events: { n: 1, c: zl, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetUserPartnerEventViewStatus_Response";
    }
  },
  zl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.event_gid || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              last_shown_time: { n: 2, br: s.readUint32, bw: n.writeUint32 },
              last_read_time: { n: 3, br: s.readUint32, bw: n.writeUint32 },
              clan_account_id: { n: 4, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent";
    }
  },
  xl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              itemid: { n: 2, br: s.readUint64String, bw: n.writeUint64String },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetClanEventCrowdInMetadata_Request";
    }
  },
  Dl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.crowdin_project_id || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              crowdin_file_id: {
                n: 2,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetClanEventCrowdInMetadata_Response";
    }
  },
  Wl = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetClanCrowdInMetadata_Request";
    }
  },
  Ul = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.crowdin_project_id || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              crowdin_directory_id: {
                n: 2,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              push_by_default: { n: 3, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_GetClanCrowdInMetadata_Response";
    }
  },
  Ol = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || f(t.M()),
        I.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              itemid: { n: 2, br: s.readUint64String, bw: n.writeUint64String },
              language: { n: 3, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_FetchTranslationFromCrowdIn_Request";
    }
  },
  Ll = class t extends I {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), I.initialize(this, e, 0, -1, void 0, null);
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
      let r = new R.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CCommunity_FetchTranslationFromCrowdIn_Response";
    }
  },
  bs;
((E) => {
  function t(b, V) {
    return b.SendMsg("Community.GetApps#1", v(Ar, V), Qo, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  E.GetApps = t;
  function e(b, V) {
    return b.SendMsg(
      "Community.GetAppRichPresenceLocalization#1",
      v(Tr, V),
      $o,
      { ePrivilege: 1 },
    );
  }
  E.GetAppRichPresenceLocalization = e;
  function r(b, V) {
    return b.SendMsg("Community.GetCommentThread#1", v(Zo, V), tl, {
      ePrivilege: 2,
    });
  }
  E.GetCommentThread = r;
  function i(b, V) {
    return b.SendMsg("Community.PostCommentToThread#1", v(rl, V), il, {
      ePrivilege: 3,
    });
  }
  E.PostCommentToThread = i;
  function a(b, V) {
    return b.SendMsg("Community.DeleteCommentFromThread#1", v(sl, V), nl, {
      ePrivilege: 1,
    });
  }
  E.DeleteCommentFromThread = a;
  function o(b, V) {
    return b.SendMsg("Community.RateCommentThread#1", v(al, V), ol, {
      ePrivilege: 3,
    });
  }
  E.RateCommentThread = o;
  function l(b, V) {
    return b.SendMsg("Community.GetCommentThreadRatings#1", v(ll, V), pl, {
      ePrivilege: 2,
    });
  }
  E.GetCommentThreadRatings = l;
  function p(b, V) {
    return b.SendMsg("Community.RateClanAnnouncement#1", v(ul, V), ml, {
      ePrivilege: 3,
    });
  }
  E.RateClanAnnouncement = p;
  function u(b, V) {
    return b.SendMsg(
      "Community.GetClanAnnouncementVoteForUser#1",
      v(dl, V),
      cl,
      { ePrivilege: 1 },
    );
  }
  E.GetClanAnnouncementVoteForUser = u;
  function y(b, V) {
    return b.SendMsg("Community.GetAvatarHistory#1", v(_l, V), gl, {
      ePrivilege: 1,
    });
  }
  E.GetAvatarHistory = y;
  function C(b, V) {
    return b.SendMsg("Community.GetClanEventCrowdInMetadata#1", v(xl, V), Dl, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  E.GetClanEventCrowdInMetadata = C;
  function M(b, V) {
    return b.SendMsg("Community.GetClanCrowdInMetadata#1", v(Wl, V), Ul, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  E.GetClanCrowdInMetadata = M;
  function k(b, V) {
    return b.SendMsg("Community.FetchTranslationFromCrowdIn#1", v(Ol, V), Ll, {
      ePrivilege: 1,
    });
  }
  E.FetchTranslationFromCrowdIn = k;
  function B(b, V) {
    return b.SendMsg("Community.GetUserPartnerEventNews#1", v(Cl, V), Pl, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  E.GetUserPartnerEventNews = B;
  function x(b, V) {
    return b.SendMsg("Community.GetBestEventsForUser#1", v(Rl, V), Ml, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  E.GetBestEventsForUser = x;
  function H(b, V) {
    return b.SendMsg("Community.MarkPartnerEventsForUser#1", v(Tl, V), El, {
      ePrivilege: 1,
    });
  }
  E.MarkPartnerEventsForUser = H;
  function h(b, V) {
    return b.SendMsg(
      "Community.GetUserPartnerEventViewStatus#1",
      v(ql, V),
      Nl,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  E.GetUserPartnerEventViewStatus = h;
  function D(b, V) {
    return b.SendMsg("Community.PartnerEventsShowMoreForApp#1", v(Il, V), kl, {
      ePrivilege: 1,
    });
  }
  E.PartnerEventsShowMoreForApp = D;
  function U(b, V) {
    return b.SendMsg("Community.PartnerEventsShowLessForApp#1", v(Hl, V), Al, {
      ePrivilege: 1,
    });
  }
  E.PartnerEventsShowLessForApp = U;
  function re(b, V) {
    return b.SendMsg(
      "Community.ClearUserPartnerEventsAppPriorities#1",
      v(vl, V),
      Bl,
      { ePrivilege: 1 },
    );
  }
  E.ClearUserPartnerEventsAppPriorities = re;
  function Fe(b, V) {
    return b.SendMsg(
      "Community.GetUserPartnerEventsAppPriorities#1",
      v(hl, V),
      Fl,
      { ePrivilege: 1 },
    );
  }
  E.GetUserPartnerEventsAppPriorities = Fe;
  function W(b, V) {
    return b.SendMsg(
      "Community.ClearSinglePartnerEventsAppPriority#1",
      v(wl, V),
      Gl,
      { ePrivilege: 1 },
    );
  }
  E.ClearSinglePartnerEventsAppPriority = W;
})((bs ||= {}));
var K_ = 60 * 60 * 24 * 7 * 2,
  jr = class {
    m_CMInterface;
    m_mapAppInfo = J.map();
    m_mapRichPresenceLoc = J.map();
    m_cAppInfoRequestsInFlight = 0;
    m_setPendingAppInfo = new Set();
    m_PendingAppInfoPromise;
    m_PendingAppInfoResolve;
    m_CacheStorage = null;
    m_fnCallbackOnAppInfoLoaded = new Op();
    constructor() {
      he(this);
    }
    Init(e) {
      this.m_CMInterface = e;
    }
    BHavePendingAppInfoRequests() {
      return (
        this.m_setPendingAppInfo.size > 0 || this.m_cAppInfoRequestsInFlight > 0
      );
    }
    get CMInterface() {
      return this.m_CMInterface;
    }
    RegisterCallbackOnLoad(e) {
      if (!this.BHavePendingAppInfoRequests()) {
        le(!1, "Registering for callback on appinfo load, but nothing queued"),
          e();
        return;
      }
      this.m_fnCallbackOnAppInfoLoaded.Register(e);
    }
    IsLoadingAppID(e) {
      return this.m_setPendingAppInfo.has(e);
    }
    GetAppInfo(e) {
      if (
        (le(this.m_CMInterface, "CAppInfoStore.GetAppInfo called before Init"),
        !this.m_mapAppInfo.has(e))
      ) {
        let r = new Rt(e);
        this.m_mapAppInfo.set(e, r), this.QueueAppInfoRequest(e);
      }
      return this.m_mapAppInfo.get(e);
    }
    QueueAppInfoRequest(e) {
      return e
        ? (this.m_setPendingAppInfo.size ||
            ((this.m_PendingAppInfoPromise = new Promise(
              (r) => (this.m_PendingAppInfoResolve = r),
            )),
            window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
          this.m_setPendingAppInfo.add(e),
          this.m_PendingAppInfoPromise)
        : Promise.resolve();
    }
    async FlushPendingAppInfo() {
      let e = this.m_PendingAppInfoResolve,
        r = Array.from(this.m_setPendingAppInfo);
      (this.m_PendingAppInfoPromise = void 0),
        (this.m_PendingAppInfoResolve = void 0),
        this.m_setPendingAppInfo.clear(),
        await this.LoadAppInfoBatch(r),
        e?.();
    }
    async LoadAppInfoBatch(e) {
      this.m_cAppInfoRequestsInFlight++;
      let r = await this.LoadAppInfoBatchFromLocalCache(e);
      if (r.length) {
        console.log("Loading batch of App Info from Steam: ", r),
          await this.m_CMInterface?.WaitUntilLoggedOn();
        let i = Z.Init(Ar);
        i.Body().set_language(Xr(w.LANGUAGE));
        let a = 50;
        for (; r.length > 0; ) {
          let o = Math.min(a, r.length),
            l = r.slice(0, o);
          (r = r.slice(o)), i.Body().set_appids(l);
          let p = await bs.GetApps(this.m_CMInterface.GetServiceTransport(), i);
          p.GetEResult() == 1
            ? this.OnGetAppsResponse(p)
            : console.error(
                `Error when calling CommunityService.GetApps: EResult=${p.GetEResult()}, AppIDs:`,
                l,
              );
        }
      }
      --this.m_cAppInfoRequestsInFlight == 0 &&
        this.m_setPendingAppInfo.size == 0 &&
        (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
        this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
    }
    OnGetAppsResponse(e) {
      let r = [];
      for (let i of e.Body().apps()) {
        let a = this.m_mapAppInfo.get(i.appid());
        le(a, `Got AppInfo response for unrequested AppID: ${i.appid()}`),
          a &&
            ((a = new Rt(i.appid())),
            a.DeserializeFromMessage(i),
            this.m_mapAppInfo.set(i.appid(), a),
            r.push(a));
      }
      this.SaveAppInfoBatchToLocalCache(r);
    }
    OnAppOverviewChange(e) {
      for (let r of e) {
        let i = new Rt(r.appid());
        i.DeserializeFromAppOverview(r),
          i.is_initialized && this.m_mapAppInfo.set(r.appid(), i);
      }
    }
    async EnsureAppInfoForAppIDs(e) {
      let r = !1;
      return (
        e.forEach((i) => {
          let a = this.m_mapAppInfo.get(i);
          if (a) {
            a.is_valid || (r = !0);
            return;
          }
          (a = new Rt(i)),
            this.m_mapAppInfo.set(i, a),
            this.QueueAppInfoRequest(i),
            (r = !0);
        }),
        r && this.m_PendingAppInfoPromise !== void 0
          ? this.m_PendingAppInfoPromise
          : Promise.resolve()
      );
    }
    SetCacheStorage(e) {
      this.m_CacheStorage = e;
    }
    GetCacheKeyForAppID(e) {
      return "APPINFO_" + e;
    }
    async LoadAppInfoBatchFromLocalCache(e) {
      if (!this.m_CacheStorage) return e;
      console.log("Loading batch of App Info from Local Cache: ", e);
      let r = new Date(new Date().getTime() - K_ * 1e3),
        i = async (p) => {
          let u = await this.m_CacheStorage?.GetObject(
            this.GetCacheKeyForAppID(p),
          );
          if (!u) return p;
          let y = this.m_mapAppInfo.get(p);
          return (
            le(
              y,
              "Didn't find AppInfo in our map when loading from cache but it should've been there?",
            ),
            y
              ? ((y = new Rt(p)),
                y.DeserializeFromCacheObject(u),
                y.is_initialized
                  ? (this.m_mapAppInfo.set(p, y),
                    y.time_updated_from_server < r ? p : null)
                  : (console.warn(
                      "Failed to deserialize cached App Info: ",
                      p,
                      u,
                    ),
                    p))
              : p
          );
        },
        a = e.map((p) => i(p));
      return (await Promise.all(a)).filter((p) => p !== null);
    }
    async SaveAppInfoBatchToLocalCache(e) {
      if (this.m_CacheStorage) {
        console.log(
          "Saving batch of App Info to Local Cache: ",
          e.map((r) => r.appid),
        );
        for (let r of e) {
          let i = r.SerializeToCacheObject();
          i &&
            this.m_CacheStorage.StoreObject(
              this.GetCacheKeyForAppID(r.appid),
              i,
            );
        }
      }
    }
    Localize(e, r, i) {
      let a = this.GetRichPresenceLoc(e);
      return a
        ? a.Localize(r, i)
        : w.EUNIVERSE != 1
          ? (console.log(
              `Unable to find app localization information for app ${e} token ${r}, this may not have had a chance to load yet`,
            ),
            r)
          : "";
    }
    GetRichPresenceLoc(e) {
      if (this.m_mapRichPresenceLoc.has(e.toString())) {
        let i = this.m_mapRichPresenceLoc.get(e.toString());
        return (
          i.m_nLastUpdated + 1e3 * 60 * Id < Date.now() &&
            this.QueueRichPresenceLocRequest(i),
          i
        );
      }
      let r = new Ps(e);
      return (
        this.m_mapRichPresenceLoc.set(e.toString(), r),
        this.QueueRichPresenceLocRequest(r),
        r
      );
    }
    GetRichPresenceLocAsync(e) {
      let r = this.GetRichPresenceLoc(e);
      return r.m_nLastUpdated ? Promise.resolve(r) : r.m_fetching;
    }
    OnRichPresenceLocUpdate(e, r) {
      e.m_nLastUpdated = Date.now();
      for (let i of r) {
        let a = i.language(),
          o = e.m_mapLanguages.get(a);
        o
          ? o.clear()
          : (e.m_mapLanguages.set(a, new Map()), (o = e.m_mapLanguages.get(a)));
        for (let l of i.tokens()) o?.set(l.name().toLowerCase(), l.value());
      }
    }
    QueueRichPresenceLocRequest(e) {
      return (
        e.m_fetching ||
          ((e.m_fetching = this.m_CMInterface
            .WaitUntilLoggedOn()
            .then(() => {
              let r = Z.Init(Tr);
              return (
                r.Body().set_appid(e.GetAppID()),
                r.Body().set_language(w.LANGUAGE),
                bs.GetAppRichPresenceLocalization(
                  this.m_CMInterface.GetServiceTransport(),
                  r,
                )
              );
            })
            .then(
              (r) => (
                (e.m_fetching = null),
                r.GetEResult() != 1
                  ? Promise.reject()
                  : (this.OnRichPresenceLocUpdate(e, r.Body().token_lists()),
                    Promise.resolve(e))
              ),
            )),
          e.m_fetching.catch(() => {
            e.m_fetching = null;
          })),
        e.m_fetching
      );
    }
  };
T([ke], jr.prototype, "OnGetAppsResponse", 1),
  T([ke], jr.prototype, "OnRichPresenceLocUpdate", 1);
var Tt = new jr();
var me = class {
  m_steamid;
  m_bInitialized = !1;
  m_ePersonaState = 0;
  m_unGamePlayedAppID = 0;
  m_gameid = "0";
  m_unPersonaStateFlags = 0;
  m_strPlayerName = "";
  m_strAvatarHash = Ht;
  m_strAccountName = "";
  m_rtLastSeenOnline = 0;
  m_strGameExtraInfo = "";
  m_unGameServerIP = 0;
  m_unGameServerPort = 0;
  m_game_lobby_id = "";
  m_bPlayerNamePending = !1;
  m_bAvatarPending = !1;
  m_broadcastId = void 0;
  m_broadcastAccountId = void 0;
  m_broadcastAppId = void 0;
  m_broadcastViewerCount = void 0;
  m_strBroadcastTitle = void 0;
  m_bCommunityBanned = void 0;
  m_bOnSteamDeck = !1;
  m_mapRichPresence = J.map();
  m_bNameInitialized = !1;
  m_bStatusInitialized = !1;
  m_strProfileURL = void 0;
  constructor(e) {
    he(this), (this.m_steamid = e);
  }
  Reset() {
    (this.m_ePersonaState = 0),
      (this.m_unGamePlayedAppID = 0),
      (this.m_gameid = "0"),
      (this.m_strGameExtraInfo = ""),
      (this.m_unGameServerIP = 0),
      (this.m_unGameServerPort = 0),
      (this.m_game_lobby_id = ""),
      this.m_mapRichPresence.clear(),
      (this.m_broadcastId = void 0),
      (this.m_broadcastAccountId = void 0),
      (this.m_broadcastAppId = void 0),
      (this.m_broadcastViewerCount = void 0),
      (this.m_strBroadcastTitle = void 0),
      (this.m_bOnSteamDeck = !1);
  }
  GetAccountID() {
    return this.m_steamid.GetAccountID();
  }
  get is_online() {
    return this.m_ePersonaState != 0 && this.m_ePersonaState != 7;
  }
  get is_ingame() {
    return (
      this.is_online && (this.m_unGamePlayedAppID != 0 || this.m_gameid != "0")
    );
  }
  get is_watchingbroadcast() {
    return !!this.m_broadcastAccountId;
  }
  get is_in_nonsteam_game() {
    return this.m_unGamePlayedAppID == 0 && this.m_gameid != "0";
  }
  get is_in_joinable_game() {
    return (
      this.has_joinable_game_flag ||
      this.is_in_valid_lobby ||
      this.has_server_ip
    );
  }
  get has_joinable_game_flag() {
    return ((this.m_unPersonaStateFlags ?? 0) & 2) != 0;
  }
  get connect_string() {
    return this.m_mapRichPresence.get("connect");
  }
  get is_in_valid_lobby() {
    return this.m_game_lobby_id != null && this.m_game_lobby_id != "0";
  }
  get has_server_ip() {
    return this.m_unGameServerIP != 0;
  }
  get is_awayOrSnooze() {
    return this.m_ePersonaState == 3 || this.m_ePersonaState == 4;
  }
  HasStateFlag(e) {
    return ((this.m_unPersonaStateFlags ?? 0) & e) != 0;
  }
  get last_seen_online() {
    return this.m_rtLastSeenOnline;
  }
  ClearStateOnDisconnect() {
    this.m_ePersonaState != 0 && this.Reset();
  }
  get is_golden() {
    return this.HasStateFlag(4);
  }
  IsOnSteamDeck() {
    return this.m_bOnSteamDeck;
  }
  GetCurrentGameName() {
    return this.m_strGameExtraInfo
      ? this.m_strGameExtraInfo
      : this.m_unGamePlayedAppID
        ? Tt.GetAppInfo(this.m_unGamePlayedAppID).name
        : "";
  }
  GetCurrentGameIconURL() {
    return this.m_unGamePlayedAppID
      ? Tt.GetAppInfo(this.m_unGamePlayedAppID).icon_url
      : "";
  }
  BIsAppInfoReady() {
    return this.m_unGamePlayedAppID
      ? Tt.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
      : !0;
  }
  HasCurrentGameRichPresence() {
    return this.m_mapRichPresence.has("steam_display");
  }
  HasRichPresenceForViewGameInfo() {
    return !!(
      this.m_mapRichPresence.has("status") ||
      this.m_mapRichPresence.has("connect") ||
      this.m_mapRichPresence.has("connect_private")
    );
  }
  GetCurrentGameRichPresence() {
    if (this.HasCurrentGameRichPresence()) {
      let e = Tt.GetRichPresenceLoc(this.m_unGamePlayedAppID);
      if (e) {
        let r = this.m_mapRichPresence.get("steam_display");
        return e.Localize(r, this.m_mapRichPresence);
      }
    } else if (this.HasStateFlag(8))
      return q("#PersonaStateRemotePlayTogether");
    return "";
  }
  GetOfflineStatusUpdateRate() {
    if (this.last_seen_online == 0) return 3e4;
    let e = 60,
      r = e * 60,
      i = r * 24,
      a = 1e3,
      o = Tt.CMInterface.GetServerRTime32() - this.last_seen_online;
    return o > i ? (a *= r) : o > 2 * r ? (a *= e) : (a *= e / 4), a;
  }
  GetOfflineStatusTime() {
    if (this.last_seen_online == 0) return q("#PersonaStateOffline");
    let e = this.GetOfflineStatusUpdateRate();
    (!w.IN_MOBILE || e <= 60) && du(e);
    let r = Tt.CMInterface.GetServerRTime32() - this.last_seen_online;
    return r < 60
      ? q("#PersonaStateLastSeen_JustNow")
      : q("#PersonaStateLastSeen", cu(r));
  }
  GetLocalizedOnlineStatus() {
    switch (this.m_ePersonaState) {
      case 0:
      case 7:
        return this.GetOfflineStatusTime();
      case 1:
        return q("#PersonaStateOnline");
      case 2:
        return q("#PersonaStateBusy");
      case 3:
        return q("#PersonaStateAway");
      case 4:
        return q("#PersonaStateSnooze");
      case 5:
        return q("#PersonaStateLookingToTrade");
      case 6:
        return q("#PersonaStateLookingToPlay");
      default:
        return "";
    }
  }
  get has_public_party_beacon() {
    return this.m_mapRichPresence.has("__beacon") && this.is_ingame;
  }
  get player_group() {
    return this.m_mapRichPresence.has("steam_player_group")
      ? this.m_mapRichPresence.get("steam_player_group")
      : "";
  }
  get player_group_size() {
    return this.m_mapRichPresence.has("steam_player_group_size")
      ? Number.parseInt(this.m_mapRichPresence.get("steam_player_group_size"))
      : 0;
  }
  get online_state() {
    return this.is_online
      ? this.is_ingame
        ? "in-game"
        : this.m_broadcastAccountId
          ? "watchingbroadcast"
          : "online"
      : "offline";
  }
  BHasAvatarSet() {
    return this.m_strAvatarHash != Ht;
  }
  get avatar_url() {
    return At(this.m_strAvatarHash);
  }
  get avatar_url_medium() {
    return At(this.m_strAvatarHash, "medium");
  }
  get avatar_url_full() {
    return At(this.m_strAvatarHash, "full");
  }
  static SortStatusComparator(e, r, i) {
    if (r.has_public_party_beacon) {
      if (!i.has_public_party_beacon) return -1;
    } else {
      if (i.has_public_party_beacon) return 1;
      if (r.is_ingame)
        if (i.is_ingame)
          if (e) {
            if (r.is_awayOrSnooze) {
              if (!i.is_awayOrSnooze) return 1;
            } else if (i.is_awayOrSnooze) return -1;
          } else return 0;
        else return -1;
      else if (i.is_ingame) return 1;
    }
    if (r.is_online) {
      if (!i.is_online) return -1;
    } else if (i.is_online) return 1;
    if (e) {
      if (r.is_awayOrSnooze) {
        if (!i.is_awayOrSnooze) return 1;
      } else if (i.is_awayOrSnooze) return -1;
    }
    return 0;
  }
  GetCommunityProfileURL() {
    return this.m_strProfileURL
      ? `${w.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
      : `${w.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
  }
};
T([J], me.prototype, "m_bInitialized", 2),
  T([J], me.prototype, "m_ePersonaState", 2),
  T([J], me.prototype, "m_unGamePlayedAppID", 2),
  T([J], me.prototype, "m_gameid", 2),
  T([J], me.prototype, "m_unPersonaStateFlags", 2),
  T([J], me.prototype, "m_strPlayerName", 2),
  T([J], me.prototype, "m_strAvatarHash", 2),
  T([J], me.prototype, "m_strAccountName", 2),
  T([J], me.prototype, "m_rtLastSeenOnline", 2),
  T([J], me.prototype, "m_strGameExtraInfo", 2),
  T([J], me.prototype, "m_unGameServerIP", 2),
  T([J], me.prototype, "m_unGameServerPort", 2),
  T([J], me.prototype, "m_game_lobby_id", 2),
  T([J], me.prototype, "m_bPlayerNamePending", 2),
  T([J], me.prototype, "m_bAvatarPending", 2),
  T([J], me.prototype, "m_broadcastId", 2),
  T([J], me.prototype, "m_broadcastAccountId", 2),
  T([J], me.prototype, "m_broadcastAppId", 2),
  T([J], me.prototype, "m_broadcastViewerCount", 2),
  T([J], me.prototype, "m_strBroadcastTitle", 2),
  T([J], me.prototype, "m_bCommunityBanned", 2),
  T([J], me.prototype, "m_bOnSteamDeck", 2);
var Ms = K(Be());
var J_ = new Up({});
function bt(t) {
  let e = We(),
    r = Vl.default.useContext(Q_);
  return ht($_(r, e, t));
}
var Q_ = Vl.default.createContext({
  loadPersonaState: async (t, e) => {
    if (t == null) return null;
    let r = await X_(e).load(pe.InitFromAccountID(t).ConvertTo64BitString());
    return Z_(pe.InitFromAccountID(t), r);
  },
});
function $_(t, e, r) {
  let i = typeof r == "string" ? new pe(r).GetAccountID() : r;
  return {
    queryKey: ["PlayerSummary", i],
    queryFn: () => t.loadPersonaState(i, e),
    enabled: !!i,
  };
}
var Y_;
function X_(t) {
  return (Y_ ??= Eu(t));
}
function Z_(t, e) {
  let r = new me(t),
    i = e?.public_data,
    a = e?.private_data;
  return (
    (r.m_bInitialized = !!e),
    (r.m_ePersonaState = a?.persona_state ?? 0),
    (r.m_strAvatarHash = i?.sha_digest_avatar ? iu(i.sha_digest_avatar) : Ht),
    (r.m_strPlayerName = i?.persona_name ?? t.ConvertTo64BitString()),
    (r.m_strAccountName = a?.account_name),
    a?.persona_state_flags &&
      (r.m_unPersonaStateFlags = a?.persona_state_flags),
    a?.game_id && (r.m_gameid = a?.game_id),
    a?.game_server_ip_address &&
      (r.m_unGameServerIP = a?.game_server_ip_address),
    a?.lobby_steam_id && (r.m_game_lobby_id = a?.lobby_steam_id),
    a?.game_extra_info && (r.m_strGameExtraInfo = a?.game_extra_info),
    i?.profile_url && (r.m_strProfileURL = i.profile_url),
    r
  );
}
var ir = K(Be());
var ee = {
  "duration-app-launch": "800ms",
  loadinganimationiterationcount: "20",
  loadinganimationduration: "1s",
  StandardTemplateContainer: "_85JijfTGTG0-",
  "ItemFocusAnim-darkerGrey": "GnQCsUIcepE-",
  Timestamp: "_5JJqc6F8nRg-",
  StandardTemplate: "PYlz37FmVJw-",
  PinnedTemplate: "Yo2-GDCCBeI-",
  StandardLogoDimensions: "bCRodv2whPY-",
  Content: "pJLho-uUDpY-",
  Header: "NVDvWJ0MqkY-",
  Icon: "fQnGAfUkrzE-",
  Title: "_4r1rj40TM28-",
  StandardNotificationDescription: "_7Rp9tq9bPjk-",
  StandardNotificationSubText: "dLyTqUwAgrs-",
  Multiline: "_95m6KQbG1bc-",
  Count: "LkXauMuhbWs-",
  PinnedBody: "AlYGqiFwI24-",
  AllNotificationsTemplate: "w5AH5f-hF9E-",
  StandardTemplateDesktop: "V7KqGvJWgw8-",
  DesktopToastTemplate: "nIqc91u89eg-",
  PinnedTemplateWeb: "EnCbEP4QClw-",
  PinnedTemplateDesktop: "FIjnqWf2p0w-",
  AppLogo: "mVDJBhQNHOo-",
  AppLogoBackgroundImage: "QGiplV-5rbU-",
  MarkedRead: "uLS2sKU5wzc-",
  markReadBackground: "Rkr-g6was2M-",
  Unread: "vHKSq0jFWEA-",
  PlayerNickName: "a4fQxGyKQDM-",
  FullName: "-IRzduy2H1M-",
  IngameTitle: "ZuXbcgMwpPk-",
  OnlineTitle: "ESD-W1ngdPM-",
  GroupMessageTitle: "t-EvGbLbsYk-",
  GroupMessageUserName: "PqBJY-EdKfY-",
  GroupMessageBody: "_8SDkekJUJwA-",
  GroupMessageIcon: "fq2-lMZQpSQ-",
  Body: "MWt7KSaEP8w-",
  FriendInGameAppColor: "EG8JawpOL0w-",
  WishlistBlurImage: "_8wX3qPHhVIQ-",
  AvatarStatus: "CiV07LUrAPo-",
  IncomingCallToast: "FcQi1uY9-jQ-",
  ShortLogoDimensions: "_5ZFNyVuogZU-",
  LoadingTemplate: "kU7k-G8skc4-",
  Hide: "cdSRgmZMudM-",
  ShimmerLogo: "r8-eUCBidII-",
  ShimmerBody: "blCRrRkjUbQ-",
  ShimmerHeader: "CqaLW-E2tg8-",
  loading: "TiEL0eLbDU0-",
  BottomBar: "UP93-KigOrE-",
  NewIndicator: "_8AgFkgDV3LQ-",
  BackgroundAnimation: "_3oUPRczfisE-",
  "ItemFocusAnim-darkerGrey-nocolor": "reRnJkje-ZQ-",
  "ItemFocusAnim-darkGrey": "SWu7NonFdkU-",
  "ItemFocusAnim-grey": "QJusGCvT-4Y-",
  "ItemFocusAnim-translucent-white-10": "P1r8QNNbNSM-",
  "ItemFocusAnim-translucent-white-20": "GqREDPxDbxM-",
  "ItemFocusAnimBorder-darkGrey": "Ad6X517YYro-",
  "ItemFocusAnim-green": "VEEAdWH5tZs-",
  focusAnimation: "ZW4-YnjuMks-",
  hoverAnimation: "XJOK6Bj-tjQ-",
};
var oe = K(Ie()),
  eg = !0;
function tg(t) {
  let { onActivate: e, icon: r, body: i, eUIMode: a, classNames: o } = t,
    l = e,
    p = ee.PinnedTemplate;
  return (
    a == 7
      ? (p = ee.PinnedTemplateDesktop)
      : a == 3 && (p = ee.PinnedTemplateWeb),
    (p = ge(p, o)),
    (0, oe.jsx)(Ue, {
      className: p,
      onActivate: l,
      children: (0, oe.jsx)("div", {
        className: ee.Content,
        children: (0, oe.jsxs)("div", {
          className: ee.PinnedBody,
          children: [
            (0, oe.jsx)("span", { className: ee.Icon, children: r }),
            i,
          ],
        }),
      }),
    })
  );
}
function jd(t) {
  let {
    count: e,
    icon: r,
    onActivate: i,
    strLocToken: a,
    bAlwaysShow: o,
    eUIMode: l,
    classNames: p,
    visible: u,
  } = t;
  if (!e && !o) return null;
  let y = yu(a, e);
  return (0, oe.jsx)(tg, {
    icon: r,
    body: y,
    onActivate: i,
    eUIMode: l,
    classNames: p,
    visible: u,
  });
}
function Xe(t) {
  let {
      nUnread: e,
      location: r,
      eUIMode: i,
      bLoading: a,
      footer: o,
      bNewIndicator: l,
    } = t,
    [p, u] = ir.default.useState(a ? 1 : 0),
    [y, C] = ir.default.useState(void 0);
  ir.default.useEffect(() => {
    p == 1 && !a ? u(2) : p == 2 && a && u(1);
  }, [p, a]),
    ir.default.useEffect(() => {
      let x =
          parseInt(ee.loadinganimationiterationcount) *
          parseInt(ee.loadinganimationduration) *
          1e3,
        H = window.setTimeout(() => u(0), x);
      return () => window.clearTimeout(H);
    }, []),
    ir.default.useEffect(() => {
      e && e > 0 && y !== ee.Unread && r != 2 && r != 1
        ? C(ee.Unread)
        : !e && y == ee.Unread && C(ee.MarkedRead);
    }, [e, r, y]);
  let M = t.onActivate;
  M || (M = () => console.log("Missing activate function")),
    p == 1 && (M = void 0);
  let k = ee.StandardTemplate;
  r == 4
    ? (k = ee.AllNotificationsTemplate)
    : r == 2
      ? (k = ee.DesktopToastTemplate)
      : (i == 7 || i == 3) && (k = ee.StandardTemplateDesktop);
  let B = null;
  if (p != 0 && r != 2 && r != 1) {
    let x = p == 2 ? ee.Hide : null;
    B = (0, oe.jsxs)("div", {
      className: ge(ee.LoadingTemplate, x),
      children: [
        (0, oe.jsx)("div", {
          className: ge(ee.StandardLogoDimensions, ee.ShimmerLogo),
        }),
        (0, oe.jsxs)("div", {
          className: ee.Content,
          children: [
            (0, oe.jsx)("div", { className: ge(ee.Header, ee.ShimmerHeader) }),
            (0, oe.jsx)("div", { className: ge(ee.Body, ee.ShimmerBody) }),
          ],
        }),
      ],
    });
  }
  return (0, oe.jsxs)(Ue, {
    onActivate: M,
    className: ee.StandardTemplateContainer,
    onOptionsButton: t.onOptionsButton,
    onOptionsActionDescription: t.onOptionsButtonDesc,
    children: [
      (0, oe.jsxs)("div", {
        className: ge(k, y),
        children: [
          (0, oe.jsx)("div", {
            className: ee.StandardLogoDimensions,
            children: t.logo,
          }),
          t.personaStatus &&
            (0, oe.jsx)("div", {
              className: ge(ee.AvatarStatus, t.personaStatus),
            }),
          (0, oe.jsx)("div", { className: ee.Content, children: t.children }),
          B,
          l && (0, oe.jsx)(rg, { location: r }),
        ],
      }),
      o || null,
    ],
  });
}
function rg(t) {
  let { location: e } = t;
  return !eg || e != 3
    ? null
    : (0, oe.jsx)("div", {
        className: ee.NewIndicator,
        children: (0, oe.jsx)(vu, {}),
      });
}
function Ze(t) {
  let {
      icon: e,
      title: r,
      timestamp: i,
      location: a,
      fnRenderTimestamp: o,
    } = t,
    l = !!i && (a == 3 || a == 4),
    p;
  return (
    a == 4 ? (p = ng) : (p = o ?? ag),
    (0, oe.jsxs)("div", {
      className: ee.Header,
      children: [
        (0, oe.jsx)(ig, { icon: e }),
        !!r && (0, oe.jsx)(sg, { title: r }),
        l && p({ timestamp: i }),
      ],
    })
  );
}
function ig(t) {
  return (0, oe.jsx)("div", { className: ee.Icon, children: t.icon });
}
function sg(t) {
  return (0, oe.jsx)("div", { className: ee.Title, children: t.title });
}
function et(t) {
  let e = ge(ee.StandardNotificationDescription, t.multiline && ee.Multiline);
  return (0, oe.jsx)("div", { className: e, children: t.children });
}
function tt(t) {
  let e = ge(ee.StandardNotificationSubText, t.multiline && ee.Multiline);
  return (0, oe.jsx)("div", { className: e, children: t.children });
}
function ng(t) {
  if (t.timestamp === void 0) return null;
  let e = new Date(),
    r = new Date(t.timestamp * 1e3),
    i = Os(t.timestamp);
  return (
    Ws(e, r) || (i = Ls(t.timestamp, !1, !1, !1) + " " + i),
    (0, oe.jsx)("div", { className: ee.Timestamp, children: i })
  );
}
function ag(t) {
  if (t.timestamp === void 0) return null;
  let e = new Date(),
    r = new Date(t.timestamp * 1e3),
    i = Ws(e, r) ? Os(t.timestamp) : Ls(t.timestamp, !1, !1, !1);
  return (0, oe.jsx)("div", { className: ee.Timestamp, children: i });
}
var ar = K(Be());
var Ed = K(Be());
function rt(t) {
  return t == 1;
}
function qd(t, e) {
  return Ed.default.useCallback(
    (r) => {
      t && t(r), e && e();
    },
    [t, e],
  );
}
var it = {
  "duration-app-launch": "800ms",
  loadinganimationiterationcount: "20",
  loadinganimationduration: "1s",
  StandardTemplateContainer: "iGcmAymzXfg-",
  "ItemFocusAnim-darkerGrey": "uYOeOR-OMTg-",
  Timestamp: "dX-aGU1ykGo-",
  StandardTemplate: "pptzs2myItU-",
  PinnedTemplate: "Ck1LX6ZgOMQ-",
  StandardLogoDimensions: "_3No1Y2QkYbg-",
  Content: "zJ-hMXzJLs4-",
  Header: "lkOc4m-boIo-",
  Icon: "-Lba8mkNoaw-",
  Title: "gj3eKK2jFnM-",
  StandardNotificationDescription: "IA2Kbrb4EFA-",
  StandardNotificationSubText: "h-TRgwo22RA-",
  Multiline: "gTIwtGdGT0Y-",
  Count: "BX--bdBXdPM-",
  PinnedBody: "-lzH3JQpvVw-",
  AllNotificationsTemplate: "_4sIw6-BRY3M-",
  StandardTemplateDesktop: "yx5i-OnqPZw-",
  DesktopToastTemplate: "FH5iZF6f6sU-",
  PinnedTemplateWeb: "ORVr5O0ouMU-",
  PinnedTemplateDesktop: "xocZ2rGjq4Q-",
  AppLogo: "m4FtGbHIiXc-",
  AppLogoBackgroundImage: "VCkTtTYnJV0-",
  MarkedRead: "qdclgsRR2jg-",
  markReadBackground: "JEsB-6eQkmU-",
  Unread: "xxHAj1ifjwM-",
  PlayerNickName: "uEeImQsnAGM-",
  FullName: "OeC4xRobRWY-",
  IngameTitle: "br0hKM-5drk-",
  OnlineTitle: "t1PUV7RXJrM-",
  GroupMessageTitle: "_7q-RiVC9pok-",
  GroupMessageUserName: "F8zeg0IXx7E-",
  GroupMessageBody: "GLj-TyWELTE-",
  GroupMessageIcon: "YyMYC-wpunw-",
  Body: "kSa7qLTcYG8-",
  FriendInGameAppColor: "_7zwXAnTCR4A-",
  WishlistBlurImage: "dh1JIDL2IDo-",
  AvatarStatus: "mvtcBdCapBU-",
  IncomingCallToast: "XNdWklso-xY-",
  ShortLogoDimensions: "pthzMLoe4PU-",
  LoadingTemplate: "DUBYHKU1fOI-",
  Hide: "nvxby3F3QKM-",
  ShimmerLogo: "_5gE6FDQagvg-",
  ShimmerBody: "jK6C1NO4tPs-",
  ShimmerHeader: "sB270EvfjEg-",
  loading: "XxdizQ4j-Wk-",
  BottomBar: "fDZbEgP-YNI-",
  NewIndicator: "VCvH4w9qpJI-",
  ShortTemplate: "eex8HJdE0y4-",
  TwoLine: "cfVQMsGSgCE-",
  BackgroundAnimation: "NVMM7FMSHIE-",
  "ItemFocusAnim-darkerGrey-nocolor": "JIP7y1MHc3k-",
  "ItemFocusAnim-darkGrey": "_4jpS--H87-Q-",
  "ItemFocusAnim-grey": "m6dmyy8Nn7E-",
  "ItemFocusAnim-translucent-white-10": "bvaNTW8B-Pw-",
  "ItemFocusAnim-translucent-white-20": "BqDoWhmippE-",
  "ItemFocusAnimBorder-darkGrey": "BHsNfI3lXGA-",
  "ItemFocusAnim-green": "julHcVyLcOQ-",
  focusAnimation: "f-AiKKxiDS8-",
  hoverAnimation: "hhHZZcF89bs-",
};
var st = K(Ie());
function nt(t) {
  let {
      onActivate: e,
      onDismiss: r,
      logo: i,
      icon: a,
      title: o,
      body: l,
      personaStatus: p,
      className: u,
      singleLineOnly: y,
    } = t,
    C = qd(e, r),
    M = (k) => {
      k.button == 1 && r && r();
    };
  return (0, st.jsxs)(Ue, {
    className: ge(it.ShortTemplate, !y && it.TwoLine, u),
    onActivate: C,
    onMouseDown: M,
    children: [
      (0, st.jsx)("div", { className: it.ShortLogoDimensions, children: i }),
      t.personaStatus &&
        (0, st.jsx)("div", { className: ge(it.AvatarStatus, p) }),
      (0, st.jsxs)("div", {
        className: it.Content,
        children: [
          (0, st.jsxs)("div", {
            className: it.Header,
            children: [
              (0, st.jsx)("div", { className: it.Icon, children: a }),
              (0, st.jsx)("div", { className: it.Title, children: o }),
            ],
          }),
          (0, st.jsx)("div", { className: it.Body, children: l }),
        ],
      }),
    ],
  });
}
var be = {
  "duration-app-launch": "800ms",
  loadinganimationiterationcount: "20",
  loadinganimationduration: "1s",
  StandardTemplateContainer: "idFwai-zy3k-",
  "ItemFocusAnim-darkerGrey": "qNZkq-xq0-A-",
  Timestamp: "_-07o-nqduEE-",
  StandardTemplate: "Y1egdlzjZuM-",
  PinnedTemplate: "iw82-kdOxWI-",
  StandardLogoDimensions: "_3-doHa7BKYg-",
  Content: "AVDHUZpgS5s-",
  Header: "KcRuB2soBCc-",
  Icon: "QT7ohlJMav4-",
  Title: "IsJMTXddcFI-",
  StandardNotificationDescription: "-ijDGHOT8O4-",
  StandardNotificationSubText: "bT365XPbYYY-",
  Multiline: "_1ttqRA8IrL4-",
  Count: "XH3OeZ4kxk8-",
  PinnedBody: "_6CsCKL6iob8-",
  AllNotificationsTemplate: "y--alX4sAGs-",
  StandardTemplateDesktop: "_8-XOfZRIS-g-",
  DesktopToastTemplate: "gcny8wiyDe0-",
  PinnedTemplateWeb: "_1n9lI486x3E-",
  PinnedTemplateDesktop: "_7goxf1PWs6E-",
  AppLogo: "LPQKptPLI9o-",
  AppLogoBackgroundImage: "z7WGIZ7aMvU-",
  MarkedRead: "FB5cJ2PdLis-",
  markReadBackground: "IXdOFYdo3nk-",
  Unread: "GbjVqBqhYS0-",
  PlayerNickName: "_5WMyvFyj9IM-",
  FullName: "_8b1WzRtPs0E-",
  IngameTitle: "LA7b2mKtrQQ-",
  OnlineTitle: "_3yjPWD3FLY4-",
  GroupMessageTitle: "NgqPmXzv1KU-",
  GroupMessageUserName: "XQYkn9CKz2A-",
  GroupMessageBody: "U-d7mDQaVqg-",
  GroupMessageIcon: "O91fmNxaNhM-",
  Body: "wFGic39MbMc-",
  FriendInGameAppColor: "G8KcM3cPOFo-",
  WishlistBlurImage: "tv17-vA-z6M-",
  AvatarStatus: "EAmWykiSWHE-",
  IncomingCallToast: "UIkd0eEQLz4-",
  ShortLogoDimensions: "drgem-tdOhw-",
  LoadingTemplate: "_0ilXNZi8yeA-",
  Hide: "AUEtTSpUux0-",
  ShimmerLogo: "ToWX9JjBeko-",
  ShimmerBody: "LBYdMQ-qbE0-",
  ShimmerHeader: "VfKtzM88BAo-",
  loading: "y1ElEVPqy-o-",
  BottomBar: "ZDNe4rWcs40-",
  NewIndicator: "japQ6LFaZNk-",
  AllNotificationsCommentPlus: "zv4yugfEwj4-",
  FriendIndicator: "PWdT6Kxw6LQ-",
  HideButton: "BRZl7o4lYNA-",
  SteamNotificationWrapper: "IzWO-o50u24-",
  BackgroundAnimation: "UQdtbjn5CaI-",
  "ItemFocusAnim-darkerGrey-nocolor": "PD6CSeqdrCA-",
  "ItemFocusAnim-darkGrey": "DYRmsgpoZ44-",
  "ItemFocusAnim-grey": "HNxenyHveoc-",
  "ItemFocusAnim-translucent-white-10": "_-4uE7EAkdQU-",
  "ItemFocusAnim-translucent-white-20": "gA7gQJvenY8-",
  "ItemFocusAnimBorder-darkGrey": "_3cpSBJr7Nvk-",
  "ItemFocusAnim-green": "w-cr6YC3ZDY-",
  focusAnimation: "BZcQYSdnpH0-",
  hoverAnimation: "_44i2N0J3GZw-",
};
var Er = K(ut());
var qr = K(Be());
var og = K(ut()),
  lg = K(Be());
var hs = K(ut());
var Dd = K(Be());
var Nd = K(ut());
var se = K(we());
var Me = se.Message;
var Jl = class t extends Me {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || f(t.M()),
        Me.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              accept: { n: 2, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new se.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new se.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new se.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClan_RespondToClanInvite_Request";
    }
  },
  Ql = class t extends Me {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), Me.initialize(this, e, 0, -1, void 0, null);
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
      let r = new se.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new se.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new se.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClan_RespondToClanInvite_Response";
    }
  },
  $l = class t extends Me {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || f(t.M()),
        Me.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              rtime_oldest_date: { n: 2, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new se.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new se.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new se.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClan_GetDraftAndRecentPartnerEventSnippet_Request";
    }
  },
  Yl = class t extends Me {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.snippets || f(t.M()),
        Me.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { snippets: { n: 1, c: Xl, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new se.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new se.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new se.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClan_GetDraftAndRecentPartnerEventSnippet_Response";
    }
  },
  Xl = class t extends Me {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.gid || f(t.M()),
        Me.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              gid: { n: 1, br: s.readFixed64String, bw: n.writeFixed64String },
              announcement_gid: {
                n: 2,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              hidden: { n: 3, br: s.readBool, bw: n.writeBool },
              published: { n: 4, br: s.readBool, bw: n.writeBool },
              rtime32_start_time: { n: 5, br: s.readUint32, bw: n.writeUint32 },
              event_name: { n: 6, br: s.readString, bw: n.writeString },
              event_type: { n: 7, br: s.readEnum, bw: n.writeEnum },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new se.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new se.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new se.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData";
    }
  },
  Zl = class t extends Me {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.requests || f(t.M()),
        Me.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              requests: { n: 1, c: ep, r: !0, q: !0 },
              cursor: { n: 2, br: s.readString, bw: n.writeString },
              count: { n: 3, d: 100, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new se.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new se.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new se.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClan_GetPartnerEventsByBuildIDRange_Request";
    }
  },
  ep = class t extends Me {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || f(t.M()),
        Me.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              start_build_id: { n: 2, br: s.readUint32, bw: n.writeUint32 },
              end_build_id: { n: 3, br: s.readUint32, bw: n.writeUint32 },
              branch: { n: 4, br: s.readString, bw: n.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new se.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new se.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new se.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange";
    }
  },
  tp = class t extends Me {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.matches || f(t.M()),
        Me.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              matches: { n: 1, c: rp, r: !0, q: !0 },
              num_total_results: { n: 2, br: s.readUint32, bw: n.writeUint32 },
              next_cursor: { n: 3, br: s.readString, bw: n.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new se.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new se.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new se.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClan_GetPartnerEventsByBuildIDRange_Response";
    }
  },
  rp = class t extends Me {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || f(t.M()),
        Me.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              build_id: { n: 2, br: s.readUint32, bw: n.writeUint32 },
              branch: { n: 3, br: s.readString, bw: n.writeString },
              clan_event_gid: {
                n: 4,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              clan_account_id: { n: 5, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new se.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new se.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new se.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc";
    }
  },
  pg;
((i) => {
  function t(a, o) {
    return a.SendMsg("Clan.RespondToClanInvite#1", v(Jl, o), Ql, {
      ePrivilege: 1,
    });
  }
  i.RespondToClanInvite = t;
  function e(a, o) {
    return a.SendMsg(
      "Clan.GetDraftAndRecentPartnerEventSnippet#1",
      v($l, o),
      Yl,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  i.GetDraftAndRecentPartnerEventSnippet = e;
  function r(a, o) {
    return a.SendMsg("Clan.GetPartnerEventsByBuildIDRange#1", v(Zl, o), tp, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  i.GetPartnerEventsByBuildIDRange = r;
})((pg ||= {}));
var ct = class {
  m_clanSteamID;
  m_appidList = new Array();
  m_strName = "";
  m_strAvatarURLFullSize = "";
  m_strTagLineLoc = "";
  m_nFollowers = 0;
  m_strVanity = "";
  m_webLink = void 0;
  m_promise;
  m_bIsLoaded = !1;
  m_bIsHidden = !1;
  m_clanAccountFlags = 0;
  constructor(e) {
    he(this), (this.m_clanSteamID = e);
  }
  Initialize(e) {
    (this.m_strName = e.name || ""),
      (this.m_strAvatarURLFullSize =
        e.avatar_url_full_size ||
        "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
      (this.m_strTagLineLoc = e.tag_line_localized || ""),
      (this.m_nFollowers = e.followers || 0),
      (this.m_strVanity = e.vanity || void 0),
      (this.m_webLink = e.weblink),
      (this.m_bIsHidden = e.hidden || !1),
      (this.m_clanAccountFlags = e.clan_account_flags ?? 0),
      e.appids && e.appids.forEach((r) => this.m_appidList.push(r)),
      (this.m_bIsLoaded = !0);
  }
  GetCreatorHomeIdentifier() {
    return {
      name: this.m_strName,
      clan_account_id: this.m_clanSteamID.GetAccountID(),
      type: "developer",
      hidden: this.m_bIsHidden,
    };
  }
  BIsPartnerEventEditorEnabled() {
    return !!(this.m_clanAccountFlags & 8);
  }
  BHasClanAccountFlagSet(e) {
    return !!(this.m_clanAccountFlags & e);
  }
  BIsLoaded() {
    return this.m_bIsLoaded;
  }
  GetClanSteamID() {
    return this.m_clanSteamID;
  }
  GetClanAccountID() {
    return this.m_clanSteamID.GetAccountID();
  }
  GetAppIDList() {
    return this.m_appidList;
  }
  GetName() {
    return this.m_strName;
  }
  GetAvatarURLFullSize() {
    return this.m_strAvatarURLFullSize;
  }
  GetTagLine() {
    return this.m_strTagLineLoc;
  }
  GetNumFollowers() {
    return this.m_nFollowers;
  }
  BIsHidden() {
    return this.m_bIsHidden;
  }
  GetCreatorHomeURL(e) {
    if (this.m_strVanity) {
      switch (e) {
        case "publisher":
          return w.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/";
        case "franchise":
          return w.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/";
      }
      return w.STORE_BASE_URL + "developer/" + this.m_strVanity + "/";
    }
    return (
      w.STORE_BASE_URL + "curator/" + this.m_clanSteamID.GetAccountID() + "/"
    );
  }
  BHasWebLink() {
    return this.m_webLink !== void 0;
  }
  GetWebLink() {
    return this.m_webLink;
  }
  GetVanityString() {
    return this.m_strVanity;
  }
  AdjustFollower(e) {
    this.m_nFollowers += e;
  }
  async EnablePartnerEventEditorFlag() {
    this.BIsPartnerEventEditorEnabled() ||
      (await this.UpdateGroupFlagsFeature([2, 8], !0));
  }
  async UpdateGroupFlagsFeature(e, r) {
    let i = w.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
      a = this.m_clanAccountFlags;
    if (
      (e.forEach((u) => {
        r ? (a |= u) : (a &= ~u);
      }),
      a == this.m_clanAccountFlags)
    )
      return;
    let o = new Array();
    a & 1 && o.push(1),
      a & 8 && o.push(8),
      a & 2 && o.push(2),
      a & 4 && o.push(4),
      a & 16 && o.push(16),
      a & 32 && o.push(32),
      a & 64 && o.push(64);
    let l = new FormData();
    l.append("sessionid", w.SESSIONID),
      l.append("clan_account_id", this.GetClanAccountID().toString()),
      l.append("accountflags", JSON.stringify(o));
    let p = await Nd.default.post(i, l);
    p &&
      p.status == 200 &&
      p.data.success == 1 &&
      (this.m_clanAccountFlags = a);
  }
};
T([J], ct.prototype, "m_appidList", 2),
  T([J], ct.prototype, "m_nFollowers", 2),
  T([J], ct.prototype, "m_clanAccountFlags", 2);
var at = K(we());
var jt = K(we(), 1);
var zd = jt.Message;
var vs = class t extends zd {
  static ImplementsStaticInterface() {}
  constructor(e = null) {
    super(),
      t.prototype.clan_account_id || f(t.M()),
      zd.initialize(this, e, 0, -1, [2], null);
  }
  static sm_m;
  static sm_mbf;
  static M() {
    return (
      t.sm_m ||
        (t.sm_m = {
          proto: t,
          fields: {
            clan_account_id: { n: 1, br: s.readUint32, bw: n.writeUint32 },
            appid_list: {
              n: 2,
              r: !0,
              q: !0,
              br: s.readUint32,
              pbr: s.readPackedUint32,
              bw: n.writeRepeatedUint32,
            },
          },
        }),
      t.sm_m
    );
  }
  static MBF() {
    return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
  }
  toObject(e = !1) {
    return t.toObject(e, this);
  }
  static toObject(e, r) {
    return c(t.M(), e, r);
  }
  static fromObject(e) {
    return d(t.M(), e);
  }
  static deserializeBinary(e) {
    let r = new jt.BinaryReader(e),
      i = new t();
    return t.deserializeBinaryFromReader(i, r);
  }
  static deserializeBinaryFromReader(e, r) {
    return _(t.MBF(), e, r);
  }
  serializeBinary() {
    var e = new jt.BinaryWriter();
    return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
  }
  static serializeBinaryToWriter(e, r) {
    g(t.M(), e, r);
  }
  serializeBase64String() {
    var e = new jt.BinaryWriter();
    return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
  }
  getClassName() {
    return "CDeveloperPageToApps";
  }
};
var Bs = at.Message,
  Ss = class t extends Bs {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.clan_account_ids || f(t.M()),
        Bs.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              clan_account_ids: {
                n: 1,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: n.writeRepeatedUint32,
              },
              ignore_dlc: { n: 2, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new at.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new at.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new at.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
    }
  },
  ip = class t extends Bs {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.results || f(t.M()),
        Bs.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { results: { n: 1, c: vs, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new at.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new at.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new at.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
    }
  },
  xd;
((e) => {
  function t(r, i) {
    return r.SendMsg("StoreCatalog.GetDevPageAllAppsLinked#1", v(Ss, i), ip, {
      ePrivilege: 1,
    });
  }
  e.GetDevPageAllAppsLinked = t;
})((xd ||= {}));
var sr = class sr {
  constructor() {
    he(this);
  }
  m_mapClanToCreatorHome = new Map();
  m_mapAppToCreatorIDList = new Map();
  m_bLoadedFromConfig = !1;
  LazyInit() {
    if (!this.m_bLoadedFromConfig) {
      let e = Ns("creatorhome", "application_config");
      this.ValidateStoreDefault(e) &&
        e.forEach((i) => {
          let a = Number(i.creator_clan_id),
            o = pe.InitFromClanID(a),
            l = new ct(o);
          l.Initialize(i),
            (l.m_promise = sr.GetAsPromise(l)),
            this.m_mapClanToCreatorHome.set(a, l);
        });
      let r = Ns("creatorhomeforapp", "application_config");
      this.ValidateStoreDefaultAppList(r) &&
        r.forEach((i) => {
          i.appid !== void 0 &&
            (this.m_mapAppToCreatorIDList.has(i.appid) ||
              this.m_mapAppToCreatorIDList.set(i.appid, new Array()),
            this.m_mapAppToCreatorIDList.get(i.appid).push(i));
        }),
        (this.m_bLoadedFromConfig = !0);
    }
  }
  static async GetAsPromise(e) {
    return e;
  }
  ValidateStoreDefault(e) {
    let r = e;
    return r && Array.isArray(r) && r.length > 0 && typeof r[0] == "object"
      ? typeof r[0].name == "string" &&
          (typeof r[0].creator_clan_id == "string" ||
            typeof r[0].creator_clan_id == "number")
      : !1;
  }
  ValidateStoreDefaultAppList(e) {
    let r = e;
    return r && Array.isArray(r) && r.length > 0 && typeof r[0] == "object"
      ? typeof r[0].clan_account_id == "number" &&
          r[0].clan_account_id > 0 &&
          typeof r[0].appid == "number" &&
          r[0].appid > 0
      : !1;
  }
  BHasCreatorHomeLoaded(e) {
    return (
      this.m_mapClanToCreatorHome.has(e.GetAccountID()) &&
      this.m_mapClanToCreatorHome.get(e.GetAccountID()).BIsLoaded()
    );
  }
  GetCreatorHome(e) {
    return this.m_mapClanToCreatorHome.get(e.GetAccountID());
  }
  GetCreatorHomeByID(e) {
    return this.m_mapClanToCreatorHome.get(e.clan_account_id);
  }
  async LoadCreatorHome(e, r) {
    if ((this.LazyInit(), !this.m_mapClanToCreatorHome.has(e.GetAccountID()))) {
      let i = new ct(e);
      (i.m_promise = this.InternalCreatorHome(i, r)),
        await i.m_promise,
        this.m_mapClanToCreatorHome.set(e.GetAccountID(), i);
    }
    return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
  }
  async InternalCreatorHome(e, r) {
    let i = { get_appids: !0, l: w.LANGUAGE, origin: self.origin },
      a =
        w.STORE_BASE_URL +
        "curator/" +
        e.GetClanAccountID() +
        "/ajaxgetcreatorhomeinfo",
      o = await hs.default.get(a, { params: i, cancelToken: r && r.token });
    return e.Initialize(o.data), e;
  }
  async LoadCreatorHomeListForAppIncludeHiddden(e, r) {
    if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
      let i = { appid: e },
        a = w.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
        o = await hs.default.get(a, {
          params: i,
          cancelToken: r && r.token,
          withCredentials: !0,
        });
      this.m_mapAppToCreatorIDList.set(e, o.data.creator_list);
    }
    return this.m_mapAppToCreatorIDList.get(e);
  }
  async SearchCreatorHomeStore(e, r, i) {
    let a = `${w.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
      o = {
        term: e.replace(" ", "+"),
        require_creator: r,
        cc: w.COUNTRY,
        l: w.LANGUAGE,
        origin: self.origin,
      },
      l = new Array(),
      p = await hs.default.get(a, { params: o, cancelToken: i.token });
    return (
      p.data.curators &&
        Le(() => {
          p.data.curators.forEach((u) => {
            if (!this.m_mapClanToCreatorHome.has(u.creator_clan_id)) {
              let y = pe.InitFromClanID(u.creator_clan_id),
                C = new ct(y);
              C.Initialize(u),
                this.m_mapClanToCreatorHome.set(u.creator_clan_id, C);
            }
            l.push(this.m_mapClanToCreatorHome.get(u.creator_clan_id));
          });
        }),
      l
    );
  }
  GetCreatorHomeListForAppIncludeHidden(e) {
    return this.m_mapAppToCreatorIDList.has(e)
      ? this.m_mapAppToCreatorIDList.get(e)
      : [];
  }
};
T([J], sr.prototype, "m_mapClanToCreatorHome", 2),
  T([J], sr.prototype, "m_mapAppToCreatorIDList", 2),
  T([ke], sr.prototype, "LazyInit", 1);
var sp = sr,
  np = new sp();
window.g_CreatorHomeStore = np;
var Mt = class {
  constructor() {
    he(this);
  }
  m_mapAppIDToClanInfo = new Map();
  m_mapVanityToClanInfo = new Map();
  m_mapClanAccountIDToClanInfo = new Map();
  m_mapPromisesLoading = new Map();
  m_rgQueuedEventsClanIDs = new Array();
  m_bLoadedFromConfig = !1;
  Init() {
    this.LazyInit();
  }
  LazyInit() {
    this.m_bLoadedFromConfig ||
      (Le(() => {
        let e = Wp("groupvanityinfo", "application_config");
        this.ValidateClanConfig(e) &&
          e.forEach((r) => {
            this.InternalSetupValue(r);
          });
      }),
      (this.m_bLoadedFromConfig = !0));
  }
  AddGroupVanities(e) {
    Le(() => {
      this.ValidateClanConfig(e) &&
        e.forEach((r) => {
          this.InternalSetupValue(r);
        });
    });
  }
  ValidateClanConfig(e) {
    let r = e;
    return r && Array.isArray(r) && r.length > 0 && typeof r[0] == "object"
      ? typeof r[0].clanAccountID == "number" &&
          (typeof r[0].appid == "number" || typeof r[0].vanity_url == "string")
      : !1;
  }
  BHasClanInfoLoaded(e) {
    return (
      le(e.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
      le(
        e.BIsClanAccount(),
        "Clan SteamID is not a clan account id when requesting clan info ",
      ),
      this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID())
    );
  }
  BHasClanInfoLoadedByAccountID(e) {
    return this.m_mapClanAccountIDToClanInfo.has(e);
  }
  RegisterClanData(e) {
    for (let r of e) this.InternalSetupValue(r);
  }
  InternalSetupValue(e) {
    let r = {
      clanAccountID: e.clanAccountID,
      clanSteamID: new pe(e.clanSteamIDString),
      appid: e.appid,
      vanity_url: e.vanity_url,
      member_count: e.member_count,
      is_ogg: e.is_ogg,
      is_creator_home: e.is_creator_home,
      is_curator: e.is_curator,
      has_visible_store_page: e.has_visible_store_page,
      has_rss_feed: e.has_rss_feed,
      rss_language: e.rss_language ? e.rss_language : 0,
      avatar_full_url: e.avatar_full_url,
      avatar_medium_url: e.avatar_medium_url,
      group_name: e.group_name,
      creator_page_bg_url: e.creator_page_bg_url,
      partner_events_enabled: e.partner_events_enabled,
    };
    e.appid != 0 && this.m_mapAppIDToClanInfo.set(e.appid, r),
      e.vanity_url &&
        e.vanity_url.length > 0 &&
        this.m_mapVanityToClanInfo.set(e.vanity_url.toLocaleLowerCase(), r),
      this.m_mapClanAccountIDToClanInfo.set(e.clanAccountID, r);
  }
  GetRequestParam() {
    return { origin: self.origin };
  }
  async LoadOGGClanInfoForAppID(e) {
    if (
      (this.LazyInit(),
      typeof e == "string" && (e = parseInt(e)),
      le(e != 0, "LoadOGGClanInfoForAppID called with appid of zero"),
      e == 0)
    )
      return null;
    if (this.m_mapAppIDToClanInfo.has(e))
      return this.m_mapAppIDToClanInfo.get(e);
    let r = "appid_" + e;
    return (
      this.m_mapPromisesLoading.has(r) ||
        this.m_mapPromisesLoading.set(
          r,
          this.InternalLoadOGGClanInfoForAppID(e),
        ),
      this.m_mapPromisesLoading.get(r)
    );
  }
  async InternalLoadOGGClanInfoForAppID(e) {
    let r = w.COMMUNITY_BASE_URL + "ogg/" + e + "/ajaxgetvanityandclanid/",
      i = null;
    try {
      i = (await Er.default.get(r, { params: this.GetRequestParam() })).data;
    } catch {}
    return i
      ? (this.InternalSetupValue(i), this.m_mapAppIDToClanInfo.get(e))
      : null;
  }
  async LoadOGGClanInfoForIdentifier(e) {
    if (
      (this.LazyInit(), this.m_mapVanityToClanInfo.has(e?.toLocaleLowerCase()))
    )
      return this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase());
    let r = "storevanity_" + e?.toLocaleLowerCase();
    return (
      this.m_mapPromisesLoading.has(r) ||
        this.m_mapPromisesLoading.set(
          r,
          this.InternalLoadOGGClanInfoForIdentifier(e),
        ),
      this.m_mapPromisesLoading.get(r)
    );
  }
  async InternalLoadOGGClanInfoForIdentifier(e) {
    let r = w.COMMUNITY_BASE_URL + "games/" + e + "/ajaxgetvanityandclanid/",
      i = await Er.default.get(r, { params: this.GetRequestParam() });
    return (
      this.InternalSetupValue(i.data),
      this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase())
    );
  }
  async LoadOGGClanInfoForGroupVanity(e) {
    if (
      (this.LazyInit(), this.m_mapVanityToClanInfo.has(e?.toLocaleLowerCase()))
    )
      return this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase());
    let r = "community_name_" + e;
    return (
      this.m_mapPromisesLoading.has(r) ||
        this.m_mapPromisesLoading.set(
          r,
          this.InternalLoadOGGClanInfoForGroupVanity(e?.toLocaleLowerCase()),
        ),
      this.m_mapPromisesLoading.get(r)
    );
  }
  async InternalLoadOGGClanInfoForGroupVanity(e) {
    let r = w.COMMUNITY_BASE_URL + "groups/" + e + "/ajaxgetvanityandclanid/",
      i = await Er.default.get(r, { params: this.GetRequestParam() });
    return (
      this.InternalSetupValue(i.data),
      this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase())
    );
  }
  async LoadClanInfoForClanSteamID(e) {
    this.LazyInit();
    let r = e.GetAccountID();
    if (this.m_mapClanAccountIDToClanInfo.has(r))
      return this.m_mapClanAccountIDToClanInfo.get(r);
    let i = "clanaccountid_" + r;
    return (
      this.m_mapPromisesLoading.has(i) ||
        this.m_mapPromisesLoading.set(
          i,
          this.InternalLoadClanInfoForClanSteamID(e),
        ),
      this.m_mapPromisesLoading.get(i)
    );
  }
  async LoadClanInfoForClanAccountID(e) {
    let r = pe.InitFromClanID(e);
    return this.LoadClanInfoForClanSteamID(r);
  }
  async InternalLoadClanInfoForClanSteamID(e) {
    let r = e.GetAccountID(),
      i =
        w.COMMUNITY_BASE_URL +
        "gid/" +
        e.ConvertTo64BitString() +
        "/ajaxgetvanityandclanid/",
      a = await Er.default.get(i, { params: this.GetRequestParam() });
    return (
      this.InternalSetupValue(a.data), this.m_mapClanAccountIDToClanInfo.get(r)
    );
  }
  GetOGGClanInfo(e) {
    return typeof e == "string"
      ? this.m_mapVanityToClanInfo.get(e?.toLocaleLowerCase())
      : this.m_mapAppIDToClanInfo.get(e);
  }
  GetClanSteamIDForAppID(e) {
    if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
      return pe.InitFromClanID(this.m_mapAppIDToClanInfo.get(e).clanAccountID);
  }
  GetClanVanityForAppID(e) {
    if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
      return this.m_mapAppIDToClanInfo.get(e).vanity_url;
  }
  GetClanVanityForClanSteamID(e) {
    if (
      (this.LazyInit(), this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID()))
    )
      return this.m_mapClanAccountIDToClanInfo.get(e.GetAccountID()).vanity_url;
  }
  HasLoadedClanAccountID(e) {
    return this.LazyInit(), this.m_mapClanAccountIDToClanInfo.has(e);
  }
  GetClanMemberCount(e) {
    return this.m_mapAppIDToClanInfo.has(e)
      ? this.m_mapAppIDToClanInfo.get(e).member_count
      : 0;
  }
  GetClanInfoByClanAccountID(e) {
    return (
      this.LazyInit(),
      le(
        !!e,
        "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
      ),
      this.m_mapClanAccountIDToClanInfo.get(e)
    );
  }
  GetCreatorStoreURL(e) {
    let r = np.GetCreatorHome(e);
    if (r) return r.GetCreatorHomeURL("developer");
    let i = this.GetClanInfoByClanAccountID(e.GetAccountID());
    return (
      w.COMMUNITY_BASE_URL +
      (i.vanity_url
        ? "groups/" + i.vanity_url
        : "gid/" + e.ConvertTo64BitString())
    );
  }
};
T([J], Mt.prototype, "m_mapAppIDToClanInfo", 2),
  T([J], Mt.prototype, "m_mapVanityToClanInfo", 2),
  T([J], Mt.prototype, "m_mapClanAccountIDToClanInfo", 2),
  T([ke], Mt.prototype, "RegisterClanData", 1),
  T([ke], Mt.prototype, "InternalSetupValue", 1);
var nr = new Mt();
window.g_ClanStore = nr;
function Wd(t) {
  let [e, r] = (0, qr.useState)(t ? nr.GetClanInfoByClanAccountID(t) : void 0),
    [i, a] = (0, qr.useState)(t ? !nr.BHasClanInfoLoadedByAccountID(t) : !1);
  return (
    (0, qr.useEffect)(() => {
      if (!t) r(void 0), a(!1);
      else if (nr.BHasClanInfoLoadedByAccountID(t))
        r(nr.GetClanInfoByClanAccountID(t)), a(!1);
      else {
        a(!0);
        let o = pe.InitFromClanID(
          typeof t == "string" ? Number.parseInt(t) : t,
        );
        nr.LoadClanInfoForClanSteamID(o).then((l) => {
          r(l ?? void 0), a(!1);
        });
      }
    }, [t]),
    [i, e]
  );
}
var A = K(Ie());
function Ud(t) {
  switch (t) {
    case 6:
      return (0, A.jsx)(ui, {});
    case 11:
      return (0, A.jsx)(ii, {});
    default:
      return (0, A.jsx)(He, {});
  }
}
function Od(t) {
  let {
      fallbackLogo: e,
      app: r,
      data: i,
      location: a,
      icon: o,
      timestamp: l,
      fnRenderTimestamp: p,
      onHide: u,
    } = t,
    y = typeof i?.image == "number",
    C = i?.display_name ?? "",
    M = i?.title ?? i?.body,
    k = i?.title ? i.body : null,
    B = rt(a),
    x = y && !r,
    [H, h] = ar.default.useState(!1),
    D = () => h(!0),
    U = null;
  if (y) U = op(r, e, B);
  else {
    let re = B ? be.ShortLogoDimensions : be.StandardLogoDimensions;
    U =
      i?.image && !H
        ? (0, A.jsx)("img", { className: re, src: i.image, onError: D })
        : e;
  }
  return B
    ? (0, A.jsx)(nt, { ...t, logo: U, icon: o, title: C, body: M })
    : (0, A.jsx)(gt, {
        children: (0, A.jsxs)(Xe, {
          logo: U,
          bLoading: x,
          ...t,
          children: [
            (0, A.jsx)(Ze, {
              icon: o,
              title: C,
              timestamp: l,
              location: a,
              fnRenderTimestamp: p,
            }),
            (0, A.jsx)(et, { multiline: !k, children: M }),
            !!k && (0, A.jsx)(tt, { children: k }),
            u ? (0, A.jsx)(_t, { onHide: u }) : null,
          ],
        }),
      });
}
function Ld(t) {
  let {
      displayName: e,
      location: r,
      icon: i,
      timestamp: a,
      fnRenderTimestamp: o,
      onHide: l,
    } = t,
    p = rt(r),
    u = q("#SteamNotifications_TradeOffer_Title"),
    y = p
      ? q("#SteamNotifications_TradeOffer_Body_Short", e ?? "")
      : q("#SteamNotifications_TradeOffer_Body"),
    C = q("#SteamNotifications_TradeOffer_Description", e ?? ""),
    M = !e;
  return p
    ? (0, A.jsx)(nt, { ...t, logo: t.logo, icon: t.icon, title: u, body: y })
    : (0, A.jsx)(gt, {
        children: (0, A.jsxs)(Xe, {
          bLoading: M,
          ...t,
          children: [
            (0, A.jsx)(Ze, {
              icon: i,
              title: u,
              timestamp: a,
              location: r,
              fnRenderTimestamp: o,
            }),
            (0, A.jsx)(et, { children: y }),
            (0, A.jsx)(tt, { children: C }),
            l ? (0, A.jsx)(_t, { onHide: l }) : null,
          ],
        }),
      });
}
function Vd(t) {
  let {
      senderName: e,
      location: r,
      icon: i,
      timestamp: a,
      fnRenderTimestamp: o,
      onHide: l,
    } = t,
    p = rt(r),
    u = p
      ? q("#Notification_GiftReceived_Body_Short", e ?? "")
      : q("#Notification_GiftReceived_Body"),
    y = e ? q("#Notification_GiftReceived_Description", e) : null,
    C = q("#Notification_GiftReceived_Title"),
    M = !e;
  return p
    ? (0, A.jsx)(nt, { ...t, logo: t.logo, icon: t.icon, title: C, body: u })
    : (0, A.jsx)(gt, {
        children: (0, A.jsxs)(Xe, {
          bLoading: M,
          ...t,
          children: [
            (0, A.jsx)(Ze, {
              icon: i,
              title: C,
              timestamp: a,
              location: r,
              fnRenderTimestamp: o,
            }),
            (0, A.jsx)(et, { multiline: !y, children: u }),
            !!y && (0, A.jsx)(tt, { children: y }),
            l ? (0, A.jsx)(_t, { onHide: l }) : null,
          ],
        }),
      });
}
function Kd(t) {
  let {
      requestorName: e,
      requestorAvatarURL: r,
      fallbackLogo: i,
      data: a,
      location: o,
      icon: l,
      timestamp: p,
      fnRenderTimestamp: u,
      onHide: y,
    } = t,
    C = rt(o),
    M = "";
  e && a.state == 2
    ? (M = q("#SteamNotifications_FriendInvite_Description_AwaitingResponse"))
    : e && a.state == 3
      ? (M = q("#SteamNotifications_FriendInvite_Description_Friends"))
      : e && (M = q("#SteamNotifications_FriendInvite_Description"));
  let [k, B] = ar.default.useState(!1),
    x = () => B(!0),
    H = i;
  if (r && !k) {
    let U = a.state == 3 && o != 1,
      re = C ? be.ShortLogoDimensions : be.StandardLogoDimensions;
    H = (0, A.jsxs)(Ue, {
      style: { position: "relative" },
      children: [
        U && (0, A.jsx)(Ks, { className: be.FriendIndicator }),
        (0, A.jsx)("img", { className: re, src: r, onError: x }),
      ],
    });
  }
  let h = e || q("#SteamNotifications_FriendInvite_Body_Generic"),
    D = !e;
  return C
    ? (0, A.jsx)(nt, {
        ...t,
        logo: H,
        icon: t.icon,
        title: q("#Notification_FriendInvite_Title"),
        body: h,
      })
    : (0, A.jsx)(gt, {
        children: (0, A.jsxs)(Xe, {
          logo: H,
          bLoading: D,
          ...t,
          children: [
            (0, A.jsx)(Ze, {
              icon: l,
              title: q("#Notification_FriendInvite_Title"),
              timestamp: p,
              location: o,
              fnRenderTimestamp: u,
            }),
            (0, A.jsx)(et, { multiline: !M, children: h }),
            !!M && (0, A.jsx)(tt, { children: M }),
            y ? (0, A.jsx)(_t, { onHide: y }) : null,
          ],
        }),
      });
}
function Jd(t) {
  let {
      itemState: e,
      fallbackLogo: r,
      data: i,
      location: a,
      icon: o,
      timestamp: l,
      fnRenderTimestamp: p,
      nUnread: u,
      onHide: y,
    } = t,
    [C, M] = ar.default.useState(!1),
    k = () => M(!0),
    B = rt(a),
    x = r;
  if (e?.item_data?.icon_url && !C) {
    let re = `${w.COMMUNITY_CDN_URL}economy/image/${e.item_data.icon_url}`,
      Fe = e.item_data.background_color
        ? "#" + e.item_data.background_color
        : null,
      W = B ? be.ShortLogoDimensions : be.StandardLogoDimensions;
    x = (0, A.jsx)(Ue, {
      style: { position: "relative" },
      children: (0, A.jsx)("img", {
        className: W,
        style: { backgroundColor: Fe ?? void 0, justifyContent: "center" },
        src: re,
        onError: k,
      }),
    });
  }
  let H = parseInt(i.appid) == 753,
    h = null;
  if (u !== void 0 && u > 1) {
    let re = u - 1;
    H
      ? (h = q("#Notification_Item_RollupMore_Steam", re))
      : e?.app_name
        ? (h = q("#Notification_Item_RollupMore_GameName", re, e.app_name))
        : (h = q("#Notification_Item_RollupMore", re));
  } else
    e?.app_name &&
      (h = H
        ? e.app_name
        : q("#Notification_Item_Single_GameName", e.app_name));
  let D = e?.item_data?.name
      ? e.item_data.name
      : q("#Notification_Item_Body_Generic"),
    U = !e || !e.item_data;
  if (B) {
    let re = "";
    return (
      e?.app_name
        ? (re =
            u > 1
              ? q("#Notification_Item_Body_Short_Plural", e?.app_name)
              : q("#Notification_Item_Body_Short", e?.app_name))
        : (re = q("#Notification_Item_Body_Generic")),
      (0, A.jsx)(nt, {
        ...t,
        logo: x,
        icon: t.icon,
        title: q("#Notification_ItemAnnouncement_Body"),
        body: re,
      })
    );
  }
  return (0, A.jsx)(gt, {
    children: (0, A.jsxs)(Xe, {
      logo: x,
      bLoading: U,
      ...t,
      children: [
        (0, A.jsx)(Ze, {
          icon: o,
          title: q("#Notification_ItemAnnouncement_TitleLong"),
          timestamp: l,
          location: a,
          fnRenderTimestamp: p,
        }),
        (0, A.jsx)(et, { multiline: !h, children: D }),
        !!h && (0, A.jsx)(tt, { children: h }),
        y ? (0, A.jsx)(_t, { onHide: y }) : null,
      ],
    }),
  });
}
function Qd(t) {
  let {
      fallbackLogo: e,
      app: r,
      data: i,
      location: a,
      icon: o,
      timestamp: l,
      fnRenderTimestamp: p,
      onHide: u,
    } = t,
    y = rt(a),
    C = op(r, e, y),
    M = !r,
    k = "";
  return (
    i.state == 1
      ? (k =
          y && r?.GetName()
            ? q("#SteamNotification_AsyncGame_Action_Short", r.GetName())
            : q("#SteamNotification_AsyncGame_Action"))
      : i.state == 2 &&
        (k =
          y && r?.GetName()
            ? q("#SteamNotification_AsyncGame_Done_Short", r.GetName())
            : q("#SteamNotification_AsyncGame_Done")),
    y
      ? (0, A.jsx)(nt, {
          ...t,
          logo: C,
          icon: t.icon,
          title: q("#SteamNotification_AsyncGame_Title"),
          body: k,
        })
      : (0, A.jsx)(gt, {
          children: (0, A.jsxs)(Xe, {
            logo: C,
            bLoading: M,
            ...t,
            children: [
              (0, A.jsx)(Ze, {
                icon: o,
                title: q("#SteamNotification_AsyncGame_Title"),
                timestamp: l,
                location: a,
                fnRenderTimestamp: p,
              }),
              (0, A.jsx)(et, { children: k }),
              (0, A.jsx)(tt, { children: r?.GetName() }),
              u ? (0, A.jsx)(_t, { onHide: u }) : null,
            ],
          }),
        })
  );
}
function ap(t) {
  let {
      title: e,
      body: r,
      logoUrl: i,
      bDataLoading: a,
      icon: o,
      onHide: l,
      location: p,
      timestamp: u,
      fnRenderTimestamp: y,
      onActivate: C,
      personaStatus: M,
    } = t,
    k = rt(p),
    B = k ? be.ShortLogoDimensions : be.StandardLogoDimensions,
    x = (0, A.jsx)(Ue, {
      style: { position: "relative" },
      children: (0, A.jsx)("img", {
        className: B,
        style: { justifyContent: "center" },
        src: i,
      }),
    });
  return k
    ? (0, A.jsx)(nt, {
        logo: x,
        icon: t.icon,
        title: e,
        body: r,
        onActivate: C,
        personaStatus: M,
      })
    : (0, A.jsx)(gt, {
        children: (0, A.jsxs)(Xe, {
          logo: x,
          bLoading: a,
          onActivate: C,
          personaStatus: M,
          ...t,
          children: [
            (0, A.jsx)(Ze, {
              icon: o,
              title: e,
              timestamp: u,
              location: p,
              fnRenderTimestamp: y,
            }),
            (0, A.jsx)(et, { multiline: !0, children: r }),
            l ? (0, A.jsx)(_t, { onHide: l }) : null,
          ],
        }),
      });
}
function $d(t) {
  let {
      currentUserSteamID: e,
      fallbackLogo: r,
      postedByDisplayName: i,
      postedByAvatarURL: a,
      ownerDisplayName: o,
      data: l,
      location: p,
      icon: u,
      timestamp: y,
      fnRenderTimestamp: C,
      nUnread: M,
      app: k,
      onHide: B,
      commentTitle: x,
      commentBody: H,
    } = t,
    h = x,
    D = rt(p),
    [U, re] = ar.default.useState(!1),
    Fe = () => re(!0),
    [W, E] = Wd(l.bclan_account ? l.owner_steam_id?.GetAccountID() : void 0),
    b = Do(l) ? i : null,
    V = Uo(l) ? o : null;
  l.comment_type == 10
    ? l.owner_steam_id?.ConvertTo64BitString() == e
      ? p == 4 && b
        ? (h = q("#SteamNotifications_Comment_Your_Profile_By", b))
        : (h = q("#SteamNotifications_Comment_Your_Profile"))
      : V
        ? p == 4 && b
          ? (h = q("#SteamNotifications_Comment_Player_Profile_By", b, V))
          : (h = q("#SteamNotifications_Comment_Player_Profile", V))
        : (h = q("#SteamNotifications_Comment_Profile"))
    : l.comment_type == 5 && l.json_data?.file_type == 5
      ? l.owner_steam_id?.ConvertTo64BitString() == e
        ? k
          ? (h = q(
              "#SteamNotifications_Comment_Your_Screenshot_Game",
              k.GetName(),
            ))
          : (h = q("#SteamNotifications_Comment_Your_Screenshot"))
        : k
          ? (h = q("#SteamNotifications_Comment_Screenshot_Game", k.GetName()))
          : (h = q("#SteamNotifications_Comment_Screenshot"))
      : !h && l.json_data?.title && (h = l.json_data.title);
  let fe = null;
  l.comment_type == 7 && l.bis_forum && H
    ? (fe = (0, A.jsx)(tt, {
        children: q("#SteamNotifications_Comment_NewDiscussion", H),
      }))
    : (fe = (0, A.jsxs)(tt, { children: ['"', H, '"'] }));
  let ft = q("#SteamNotifications_Comment"),
    O = null;
  if (M !== void 0 && M > 1) {
    let mr = "+" + (M - 1);
    p == 4
      ? (O = (0, A.jsx)("div", {
          className: be.AllNotificationsCommentPlus,
          children: mr,
        }))
      : (ft = ft + " " + mr);
  }
  let L = r;
  if (!U) {
    let mr = D ? be.ShortLogoDimensions : be.StandardLogoDimensions;
    if (a && Wo(l)) {
      let dc = l.bhas_friend && p != 1;
      L = (0, A.jsxs)("div", {
        style: { position: "relative" },
        children: [
          dc && (0, A.jsx)(Ks, { className: be.FriendIndicator }),
          (0, A.jsx)("img", { className: mr, src: a, onError: Fe }),
        ],
      });
    } else
      E?.avatar_medium_url &&
        (L = (0, A.jsx)("img", {
          className: mr,
          src: E.avatar_medium_url,
          onError: Fe,
        }));
  }
  return D
    ? (0, A.jsx)(nt, { ...t, logo: L, icon: t.icon, title: ft, body: h })
    : (0, A.jsx)(gt, {
        children: (0, A.jsxs)(Xe, {
          logo: L,
          ...t,
          children: [
            (0, A.jsx)(Ze, {
              icon: u,
              title: ft,
              timestamp: y,
              location: p,
              fnRenderTimestamp: C,
            }),
            (0, A.jsx)(et, { children: h }),
            fe,
            O,
            B ? (0, A.jsx)(_t, { onHide: B }) : null,
          ],
        }),
      });
}
function Yd(t) {
  let {
      app: e,
      fallbackLogo: r,
      data: i,
      location: a,
      icon: o,
      timestamp: l,
      fnRenderTimestamp: p,
      onHide: u,
    } = t,
    y = rt(a),
    C = op(e, r, y),
    M = i.appid && !e,
    k = "",
    B = null;
  return (
    e
      ? ((k = e.GetName()),
        i.count == 1
          ? y
            ? (k = Vs(
                "#SteamNotifications_Wishlist_OnSale_Single_Short",
                (0, A.jsx)("span", { children: e.GetName() }),
                (0, A.jsx)("span", {
                  style: { color: "#FFFFFF" },
                  children: e.GetBestPurchasePriceFormatted(),
                }),
              ))
            : (B = Vs(
                "#SteamNotifications_Wishlist_OnSale_Single",
                (0, A.jsx)("span", {
                  style: { color: "#FFFFFF" },
                  children: e.GetBestPurchasePriceFormatted(),
                }),
              ))
          : i.count == 2
            ? y
              ? (k = q(
                  "#SteamNotifications_Wishlist_OnSale_PlusOne_Short",
                  e.GetName(),
                ))
              : (B = q("#SteamNotifications_Wishlist_OnSale_PlusOne"))
            : y
              ? (k = q(
                  "#SteamNotifications_Wishlist_OnSale_PlusMany_Short",
                  e.GetName(),
                  i.count - 1,
                ))
              : (B = q(
                  "#SteamNotifications_Wishlist_OnSale_PlusMany",
                  i.count - 1,
                )))
      : (k = q("#SteamNotifications_Wishlist_Generic")),
    y
      ? (0, A.jsx)(nt, {
          ...t,
          logo: C,
          icon: t.icon,
          title: q("#SteamNotifications_Wishlist"),
          body: k,
        })
      : (0, A.jsx)(gt, {
          children: (0, A.jsxs)(Xe, {
            logo: C,
            bLoading: M,
            ...t,
            children: [
              (0, A.jsx)(Ze, {
                icon: o,
                title: q("#SteamNotifications_Wishlist"),
                timestamp: l,
                location: a,
                fnRenderTimestamp: p,
              }),
              (0, A.jsx)(et, { multiline: !B, children: k }),
              !!B && (0, A.jsx)(tt, { children: B }),
              u ? (0, A.jsx)(_t, { onHide: u }) : null,
            ],
          }),
        })
  );
}
function op(t, e, r = !1) {
  let [i, a] = ar.default.useState(!1),
    o = () => a(!0);
  return !t || i
    ? (0, A.jsx)(Ue, { style: { position: "relative" }, children: e })
    : r
      ? (0, A.jsx)(Ue, {
          style: { position: "relative" },
          children: (0, A.jsx)("img", {
            src: t?.GetAssets()?.GetCommunityIconURL(),
            className: be.ShortLogoDimensions,
            onError: o,
          }),
        })
      : (0, A.jsxs)(Ue, {
          style: { position: "relative" },
          children: [
            (0, A.jsx)("img", {
              className: ge(be.WishlistBlurImage),
              src: t?.GetAssets()?.GetCommunityIconURL(),
              onError: o,
            }),
            (0, A.jsx)("img", {
              src: t?.GetAssets()?.GetCommunityIconURL(),
              onError: o,
              style: {
                position: "absolute",
                left: 7,
                top: 7,
                height: 32,
                width: 32,
              },
            }),
          ],
        });
}
function _t(t) {
  let e = (i) => {
      i.stopPropagation(), i.preventDefault();
    },
    r = (i) => {
      t.onHide(), i.stopPropagation(), i.preventDefault();
    };
  return (0, A.jsx)("div", {
    className: be.HideButton,
    onClick: r,
    onMouseDown: e,
    children: (0, A.jsx)(Mu, {}),
  });
}
function gt(t) {
  return (0, A.jsx)("div", {
    className: be.SteamNotificationWrapper,
    children: t.children,
  });
}
var Dt = K(ut()),
  As = K(hu());
var N = K(we());
var Ce = K(we(), 1);
var ot = Ce.Message,
  Fs = class t extends ot {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.original_hostname || f(t.M()),
        ot.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              original_hostname: { n: 1, br: s.readString, bw: n.writeString },
              actual_hostname: { n: 2, br: s.readString, bw: n.writeString },
              path: { n: 3, br: s.readString, bw: n.writeString },
              base_name: { n: 4, br: s.readString, bw: n.writeString },
              success: { n: 5, br: s.readBool, bw: n.writeBool },
              status_code: { n: 6, br: s.readUint32, bw: n.writeUint32 },
              address_of_request_url: {
                n: 7,
                br: s.readString,
                bw: n.writeString,
              },
              response_time_ms: { n: 8, br: s.readUint32, bw: n.writeUint32 },
              bytes_received: {
                n: 9,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              num_retries: { n: 10, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new Ce.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new Ce.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new Ce.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_ClientBootstrap_RequestInfo";
    }
  },
  ws = class t extends ot {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.launcher_type || f(t.M()),
        ot.initialize(this, e, 0, -1, [7, 8], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              launcher_type: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              steam_realm: { n: 2, br: s.readUint32, bw: n.writeUint32 },
              beta_name: { n: 3, br: s.readString, bw: n.writeString },
              download_completed: { n: 4, br: s.readBool, bw: n.writeBool },
              total_time_ms: { n: 6, br: s.readUint32, bw: n.writeUint32 },
              manifest_requests: { n: 7, c: Fs, r: !0, q: !0 },
              package_requests: { n: 8, c: Fs, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new Ce.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new Ce.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new Ce.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_ClientBootstrap_Summary";
    }
  },
  lp = class t extends ot {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.class_100 || f(t.M()),
        ot.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              class_100: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              class_200: { n: 2, br: s.readUint32, bw: n.writeUint32 },
              class_300: { n: 3, br: s.readUint32, bw: n.writeUint32 },
              class_400: { n: 4, br: s.readUint32, bw: n.writeUint32 },
              class_500: { n: 5, br: s.readUint32, bw: n.writeUint32 },
              no_response: { n: 6, br: s.readUint32, bw: n.writeUint32 },
              class_unknown: { n: 7, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new Ce.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new Ce.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new Ce.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_ContentDownloadResponse_Counts";
    }
  },
  pp = class t extends ot {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.hostname || f(t.M()),
        ot.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              hostname: { n: 1, br: s.readString, bw: n.writeString },
              source_type: { n: 2, br: s.readUint32, bw: n.writeUint32 },
              counts: { n: 3, c: lp },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new Ce.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new Ce.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new Ce.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_ContentDownloadResponse_HostCounts";
    }
  },
  Gs = class t extends ot {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.hosts || f(t.M()),
        ot.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { hosts: { n: 1, c: pp, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new Ce.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new Ce.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new Ce.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_ContentDownloadResponse_Hosts";
    }
  };
var $ = N.Message;
var up = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.raw_version || f(t.M()),
        $.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              raw_version: { n: 1, br: s.readString, bw: n.writeString },
              requested_interface_type: {
                n: 2,
                br: s.readString,
                bw: n.writeString,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_AppInterfaceCreation";
    }
  },
  mp = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.interface_name || f(t.M()),
        $.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              interface_name: { n: 1, br: s.readString, bw: n.writeString },
              method_name: { n: 2, br: s.readString, bw: n.writeString },
              call_count: { n: 3, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_AppInterfaceMethodCounts";
    }
  },
  dp = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.game_id || f(t.M()),
        $.initialize(this, e, 0, -1, [2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              game_id: {
                n: 1,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              interfaces_created: { n: 2, c: up, r: !0, q: !0 },
              methods_called: { n: 3, c: mp, r: !0, q: !0 },
              session_length_seconds: {
                n: 4,
                br: s.readUint32,
                bw: n.writeUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_AppInterfaceStats_Notification";
    }
  },
  cp = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.protocol_tested || f(t.M()),
        $.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              protocol_tested: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              connectivity_state: { n: 2, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_IPv6Connectivity_Result";
    }
  },
  _p = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.cell_id || f(t.M()),
        $.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              cell_id: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              results: { n: 2, c: cp, r: !0, q: !0 },
              private_ip_is_rfc6598: { n: 3, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_IPv6Connectivity_Notification";
    }
  },
  gp = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.product || f(t.M()),
        $.initialize(this, e, 0, -1, [3, 4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              product: { n: 1, br: s.readString, bw: n.writeString },
              version: { n: 2, br: s.readString, bw: n.writeString },
              routes: { n: 3, c: fp, r: !0, q: !0 },
              components: { n: 4, c: yp, r: !0, q: !0 },
              actions: { n: 5, c: Cp, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_ReportReactUsage_Notification";
    }
  },
  fp = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.route || f(t.M()),
        $.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              route: { n: 1, br: s.readString, bw: n.writeString },
              count: { n: 2, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_ReportReactUsage_Notification_RouteData";
    }
  },
  yp = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.component || f(t.M()),
        $.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              component: { n: 1, br: s.readString, bw: n.writeString },
              count: { n: 2, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_ReportReactUsage_Notification_ComponentData";
    }
  },
  Cp = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.action || f(t.M()),
        $.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              action: { n: 1, br: s.readString, bw: n.writeString },
              count: { n: 2, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_ReportReactUsage_Notification_ActionData";
    }
  },
  Nr = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.product || f(t.M()),
        $.initialize(this, e, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              product: { n: 1, br: s.readString, bw: n.writeString },
              version: { n: 2, br: s.readString, bw: n.writeString },
              errors: { n: 3, c: zr, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_ReportClientError_Notification";
    }
  },
  zr = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.identifier || f(t.M()),
        $.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              identifier: { n: 1, br: s.readString, bw: n.writeString },
              message: { n: 2, br: s.readString, bw: n.writeString },
              count: { n: 3, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_ReportClientError_Notification_Error";
    }
  },
  Pp = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.type || f(t.M()),
        $.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              type: { n: 1, br: s.readEnum, bw: n.writeEnum },
              num_ops: { n: 2, br: s.readUint32, bw: n.writeUint32 },
              num_bytes: {
                n: 3,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              busy_time_ms: {
                n: 4,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              idle_time_ms: {
                n: 5,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              sum_run_time_ms: {
                n: 6,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              sum_wait_time_ms: {
                n: 7,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_SteamPipeWorkStats_Operation";
    }
  },
  Rp = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || f(t.M()),
        $.initialize(this, e, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              depotid: { n: 2, br: s.readUint32, bw: n.writeUint32 },
              work_type: { n: 3, br: s.readEnum, bw: n.writeEnum },
              operations: { n: 4, c: Pp, r: !0, q: !0 },
              hardware_type: { n: 5, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_SteamPipeWorkStats_Notification";
    }
  },
  bp = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.summary || f(t.M()),
        $.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m || (t.sm_m = { proto: t, fields: { summary: { n: 1, c: ws } } }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_ClientBootstrap_Notification";
    }
  },
  Mp = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.cell_id || f(t.M()),
        $.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              cell_id: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              stats: { n: 2, c: vp, r: !0, q: !0 },
              throttling_kbps: { n: 3, br: s.readUint32, bw: n.writeUint32 },
              os_type: { n: 4, br: s.readUint32, bw: n.writeUint32 },
              device_type: { n: 5, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_DownloadRates_Notification";
    }
  },
  vp = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.source_type || f(t.M()),
        $.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              source_type: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              source_id: { n: 2, br: s.readUint32, bw: n.writeUint32 },
              bytes: { n: 3, br: s.readUint64String, bw: n.writeUint64String },
              host_name: { n: 4, br: s.readString, bw: n.writeString },
              microseconds: {
                n: 5,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              used_ipv6: { n: 6, br: s.readBool, bw: n.writeBool },
              proxied: { n: 7, br: s.readBool, bw: n.writeBool },
              used_http2: { n: 8, br: s.readBool, bw: n.writeBool },
              cache_hits: { n: 9, br: s.readUint32, bw: n.writeUint32 },
              cache_misses: { n: 10, br: s.readUint32, bw: n.writeUint32 },
              hit_bytes: {
                n: 11,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              miss_bytes: {
                n: 12,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_DownloadRates_Notification_StatsInfo";
    }
  },
  Bp = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.validation_result || f(t.M()),
        $.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              validation_result: { n: 1, br: s.readInt32, bw: n.writeInt32 },
              app_id: { n: 2, br: s.readUint32, bw: n.writeUint32 },
              staged_files: { n: 3, br: s.readBool, bw: n.writeBool },
              user_initiated: { n: 4, br: s.readBool, bw: n.writeBool },
              early_out: { n: 5, br: s.readBool, bw: n.writeBool },
              chunks_scanned: { n: 6, br: s.readUint32, bw: n.writeUint32 },
              chunks_corrupt: { n: 7, br: s.readUint32, bw: n.writeUint32 },
              bytes_scanned: {
                n: 8,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              chunk_bytes_corrupt: {
                n: 9,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              total_file_size_corrupt: {
                n: 10,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_ContentValidation_Notification";
    }
  },
  Sp = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.app_id || f(t.M()),
        $.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              app_id: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              platform_type: { n: 2, br: s.readUint32, bw: n.writeUint32 },
              preload: { n: 3, br: s.readBool, bw: n.writeBool },
              blocking_app_launch: { n: 4, br: s.readBool, bw: n.writeBool },
              files_uploaded: { n: 5, br: s.readUint32, bw: n.writeUint32 },
              files_downloaded: { n: 6, br: s.readUint32, bw: n.writeUint32 },
              files_deleted: { n: 7, br: s.readUint32, bw: n.writeUint32 },
              bytes_uploaded: {
                n: 8,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              bytes_downloaded: {
                n: 9,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              microsec_total: {
                n: 10,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              microsec_init_caches: {
                n: 11,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              microsec_validate_state: {
                n: 12,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              microsec_ac_launch: {
                n: 13,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              microsec_ac_prep_user_files: {
                n: 14,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              microsec_ac_exit: {
                n: 15,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              microsec_build_sync_list: {
                n: 16,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              microsec_delete_files: {
                n: 17,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              microsec_download_files: {
                n: 18,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              microsec_upload_files: {
                n: 19,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              hardware_type: { n: 20, br: s.readUint32, bw: n.writeUint32 },
              files_managed: { n: 21, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_CloudAppSyncStats_Notification";
    }
  },
  hp = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.cell_id || f(t.M()),
        $.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              cell_id: { n: 1, br: s.readUint32, bw: n.writeUint32 },
              data: { n: 2, c: Gs },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_ContentDownloadResponse_Counts_Notification";
    }
  },
  Fp = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.eresult || f(t.M()),
        $.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              eresult: { n: 1, d: 2, br: s.readUint32, bw: n.writeUint32 },
              share_method: { n: 2, br: s.readEnum, bw: n.writeEnum },
              seconds: { n: 3, br: s.readFloat, bw: n.writeFloat },
              bytes: { n: 4, br: s.readUint64String, bw: n.writeUint64String },
              gameid: {
                n: 5,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_ClipShare_Notification";
    }
  },
  wp = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.original_range_method || f(t.M()),
        $.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              original_range_method: { n: 1, br: s.readEnum, bw: n.writeEnum },
              start: { n: 2, c: Is },
              end: { n: 3, c: Is },
              seconds: { n: 4, br: s.readFloat, bw: n.writeFloat },
              gameid: {
                n: 5,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_ClipRange_Notification";
    }
  },
  Is = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.original_range_method || f(t.M()),
        $.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              original_range_method: { n: 1, br: s.readEnum, bw: n.writeEnum },
              latest_range_method: { n: 2, br: s.readEnum, bw: n.writeEnum },
              delta_ms: { n: 3, br: s.readInt32, bw: n.writeInt32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_ClipRange_Notification_RelativeRangeEdge";
    }
  },
  Gp = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.recording_type || f(t.M()),
        $.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              recording_type: { n: 1, br: s.readEnum, bw: n.writeEnum },
              seconds: { n: 2, br: s.readFloat, bw: n.writeFloat },
              bytes: { n: 3, br: s.readUint64String, bw: n.writeUint64String },
              gameid: {
                n: 4,
                br: s.readFixed64String,
                bw: n.writeFixed64String,
              },
              instant_clip: { n: 5, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_EndGameRecording_Notification";
    }
  },
  Ip = class t extends $ {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.client_args || f(t.M()),
        $.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              client_args: {
                n: 1,
                r: !0,
                q: !0,
                br: s.readString,
                bw: n.writeRepeatedString,
              },
              gpu_webview_regkey_disabled: {
                n: 2,
                br: s.readBool,
                bw: n.writeBool,
              },
              suppress_gpu_chrome: { n: 3, br: s.readBool, bw: n.writeBool },
              browser_not_supported: { n: 4, br: s.readBool, bw: n.writeBool },
              hw_accel_video_regkey_disabled: {
                n: 5,
                br: s.readBool,
                bw: n.writeBool,
              },
              mini_mode_enabled: { n: 6, br: s.readBool, bw: n.writeBool },
              fps_counter_enabled: { n: 7, br: s.readBool, bw: n.writeBool },
              library_low_bandwidth_mode_enabled: {
                n: 8,
                br: s.readBool,
                bw: n.writeBool,
              },
              library_low_perf_mode_enabled: {
                n: 9,
                br: s.readBool,
                bw: n.writeBool,
              },
              gr_mode: { n: 10, br: s.readInt32, bw: n.writeInt32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new N.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new N.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CClientMetrics_ReportClientArgs_Notification";
    }
  },
  kp;
((x) => {
  function t(H, h) {
    return H.SendNotification(
      "ClientMetrics.ClientAppInterfaceStatsReport#1",
      v(dp, h),
      { ePrivilege: 1 },
    );
  }
  x.ClientAppInterfaceStatsReport = t;
  function e(H, h) {
    return H.SendNotification(
      "ClientMetrics.ClientIPv6ConnectivityReport#1",
      v(_p, h),
      { ePrivilege: 1 },
    );
  }
  x.ClientIPv6ConnectivityReport = e;
  function r(H, h) {
    return H.SendNotification(
      "ClientMetrics.SteamPipeWorkStatsReport#1",
      v(Rp, h),
      { ePrivilege: 1 },
    );
  }
  x.SteamPipeWorkStatsReport = r;
  function i(H, h) {
    return H.SendNotification("ClientMetrics.ReportReactUsage#1", v(gp, h), {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  x.ReportReactUsage = i;
  function a(H, h) {
    return H.SendNotification("ClientMetrics.ReportClientError#1", v(Nr, h), {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  x.ReportClientError = a;
  function o(H, h) {
    return H.SendNotification(
      "ClientMetrics.ClientBootstrapReport#1",
      v(bp, h),
      { ePrivilege: 1 },
    );
  }
  x.ClientBootstrapReport = o;
  function l(H, h) {
    return H.SendNotification(
      "ClientMetrics.ClientDownloadRatesReport#1",
      v(Mp, h),
      { ePrivilege: 1 },
    );
  }
  x.ClientDownloadRatesReport = l;
  function p(H, h) {
    return H.SendNotification(
      "ClientMetrics.ClientContentValidationReport#1",
      v(Bp, h),
      { ePrivilege: 1 },
    );
  }
  x.ClientContentValidationReport = p;
  function u(H, h) {
    return H.SendNotification(
      "ClientMetrics.ClientCloudAppSyncStats#1",
      v(Sp, h),
      { ePrivilege: 1 },
    );
  }
  x.ClientCloudAppSyncStats = u;
  function y(H, h) {
    return H.SendNotification(
      "ClientMetrics.ClientDownloadResponseCodeCounts#1",
      v(hp, h),
      { ePrivilege: 1 },
    );
  }
  x.ClientDownloadResponseCodeCounts = y;
  function C(H, h) {
    return H.SendNotification("ClientMetrics.ReportClientArgs#1", v(Ip, h), {
      ePrivilege: 1,
    });
  }
  x.ReportClientArgs = C;
  function M(H, h) {
    return H.SendNotification("ClientMetrics.ReportClipShare#1", v(Fp, h), {
      ePrivilege: 1,
    });
  }
  x.ReportClipShare = M;
  function k(H, h) {
    return H.SendNotification("ClientMetrics.ReportClipRange#1", v(wp, h), {
      ePrivilege: 1,
    });
  }
  x.ReportClipRange = k;
  function B(H, h) {
    return H.SendNotification(
      "ClientMetrics.ReportEndGameRecording#1",
      v(Gp, h),
      { ePrivilege: 1 },
    );
  }
  x.ReportEndGameRecording = B;
})((kp ||= {}));
var Hp = class {
    m_transport = null;
    m_registry = null;
    SetDefaultTransport(e) {
      this.m_transport != null &&
        console.error(
          "Multiple attempts to set a default WebUI transport: overriding previous",
        ),
        (this.m_transport = e);
    }
    GetDefaultTransport() {
      return this.m_transport;
    }
    SetDefaultHandlerRegistry(e) {
      this.m_registry != null &&
        console.error(
          "Multiple attempts to set a default WebUI message handler registry: overriding previous",
        ),
        (this.m_registry = e);
    }
    GetDefaultHandlerRegistry() {
      return this.m_registry;
    }
  },
  ug = new Hp();
function ce() {
  return ug;
}
var or = class {
  constructor() {
    he(this);
  }
  m_mapCallbacks = new Map();
  m_rgRegisteredEMsgs = [];
  m_mapServiceMethodHandlers = new Map();
  m_rgRegisteredServiceMethodHandlers = [];
  m_ErrorReportingStore;
  InstallErrorReportingStore(e) {
    this.m_ErrorReportingStore = e;
  }
  DispatchMsgToHandlers(e, r) {
    let i = e.GetEMsg();
    if (i == 146) {
      let a = e.Hdr().target_job_name();
      if (a) {
        let o = this.m_mapServiceMethodHandlers.get(a);
        if (o) {
          this.DEBUG_LogMessageDispatch(e, o[0]);
          for (let l of o)
            try {
              l.invoke(e, r);
            } catch (p) {
              p instanceof Error && this.m_ErrorReportingStore
                ? this.m_ErrorReportingStore.ReportError(p)
                : console.error(
                    `MessageHandlers failed to dispatch message to handler (${a}): `,
                    p,
                  );
            }
          return !0;
        }
      }
    } else {
      let a = this.m_mapCallbacks.get(i);
      if (a) {
        this.DEBUG_LogMessageDispatch(e, a[0]);
        for (let o of a)
          try {
            o.invoke(e);
          } catch (l) {
            l instanceof Error && this.m_ErrorReportingStore
              ? this.m_ErrorReportingStore.ReportError(l)
              : console.error(
                  "MessageHandlers failed to dispatch message to handler: ",
                  l,
                );
          }
        return !0;
      }
    }
    return !1;
  }
  DEBUG_LogMessageDispatch(e, r) {}
  get emsg_list() {
    return this.m_rgRegisteredEMsgs;
  }
  get servicemethod_list() {
    return this.m_rgRegisteredServiceMethodHandlers;
  }
  AddCallback(e, r, i) {
    let a = this.m_mapCallbacks.get(e);
    return (
      a ||
        ((a = []),
        this.m_mapCallbacks.set(e, a),
        this.m_rgRegisteredEMsgs.push(e)),
      a.push({ invoke: i, msgClass: r }),
      {
        invoke: i,
        unregister: () => {
          let o = this.m_mapCallbacks.get(e);
          if (o)
            for (let l = 0; l < o.length; l++)
              o[l].invoke == i && (o.splice(l, 1), l--);
        },
      }
    );
  }
  AddServiceMethodHandler(e, r) {
    let i = (a, o) => {
      let l = Z.InitFromMsg(e.request, a),
        p = Z.Init(e.response, 147),
        u = r(l, p),
        y = (C) => {
          p.Hdr().set_eresult(C), o(p);
        };
      u instanceof Promise
        ? u.then(y).catch(() => {
            y(2);
          })
        : y(u);
    };
    return (
      this.m_mapServiceMethodHandlers.has(e.name)
        ? console.error("Duplicate registration for method " + e.name)
        : (this.m_mapServiceMethodHandlers.set(e.name, [
            { invoke: i, msgClass: e.request },
          ]),
          this.m_rgRegisteredServiceMethodHandlers.push(e.name)),
      {
        invoke: i,
        unregister: () => {
          let a = this.m_mapServiceMethodHandlers.get(e.name);
          if (a)
            for (let o = 0; o < a.length; o++)
              a[o].invoke == i && (a.splice(o, 1), o--);
        },
      }
    );
  }
  AddServiceNotificationHandler(e, r) {
    let i = (o, l) => {
        let p = Z.InitFromMsg(e.request, o);
        r(p);
      },
      a = this.m_mapServiceMethodHandlers.get(e.name);
    return (
      a ||
        ((a = []),
        this.m_mapServiceMethodHandlers.set(e.name, a),
        this.m_rgRegisteredServiceMethodHandlers.push(e.name)),
      a.push({ invoke: i, msgClass: e.request }),
      {
        invoke: i,
        unregister: () => {
          let o = this.m_mapServiceMethodHandlers.get(e.name);
          if (o)
            for (let l = 0; l < o.length; l++)
              o[l].invoke == i && (o.splice(l, 1), l--);
        },
      }
    );
  }
  RegisterBaseEMessageHandler(e, r) {
    return this.AddCallback(e, void 0, r);
  }
  RegisterEMessageHandler(e, r, i) {
    return this.AddCallback(e, r, (a) => {
      i(Z.InitFromMsg(r, a));
    });
  }
  RegisterEMessageAction(e, r, i) {
    return this.AddCallback(e, r, (a) => {
      Le(() => {
        i(Z.InitFromMsg(r, a));
      });
    });
  }
  RegisterServiceNotificationHandler(e, r) {
    return this.AddServiceNotificationHandler(e, r);
  }
  RegisterServiceNotificationHandlerAction(e, r) {
    return this.AddServiceNotificationHandler(e, (i) => {
      let a;
      return (
        Le(() => {
          a = r(i);
        }),
        a
      );
    });
  }
  RegisterServiceMethodHandler(e, r) {
    return this.AddServiceMethodHandler(e, r);
  }
  RegisterServiceMethodHandlerAction(e, r) {
    return this.AddServiceMethodHandler(e, (i, a) => {
      let o;
      return (
        Le(() => {
          o = r(i, a);
        }),
        o
      );
    });
  }
};
T([J], or.prototype, "m_rgRegisteredEMsgs", 2),
  T([J], or.prototype, "m_rgRegisteredServiceMethodHandlers", 2);
var xe = K(we());
var lr = xe.Message,
  Et = class t extends lr {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.auth_key || f(t.M()),
        lr.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { auth_key: { n: 1, br: s.readString, bw: n.writeString } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new xe.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new xe.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new xe.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CTransportAuth_Authenticate_Request";
    }
  },
  xr = class t extends lr {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), lr.initialize(this, e, 0, -1, void 0, null);
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
      let r = new xe.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new xe.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new xe.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CTransportAuth_Authenticate_Response";
    }
  },
  Dr = class t extends lr {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), lr.initialize(this, e, 0, -1, void 0, null);
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
      let r = new xe.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new xe.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new xe.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CTransportAuth_StartShutdown_Notification";
    }
  },
  Wr;
((p) => {
  p.AuthenticateHandler = {
    name: "TransportAuth.Authenticate#1",
    request: Et,
    response: xr,
  };
  function e(u, y) {
    return (
      (y = y || ce().GetDefaultTransport()),
      y == null
        ? new Promise((C, M) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              M("Transport Error: no transport is available for request");
          })
        : y.SendMsg("TransportAuth.Authenticate#1", v(Et, u), xr, {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  p.Authenticate = e;
  function r(u, y) {
    return (
      (y = y || ce().GetDefaultTransport()),
      y == null
        ? new Promise((C, M) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              M("Transport Error: no transport is available for request");
          })
        : y.SendMsg("TransportAuth.Authenticate#1", v(Et, u), xr, {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  (p.SendMsgAuthenticate = r),
    (p.NotifyStartShutdownHandler = {
      name: "TransportAuth.NotifyStartShutdown#1",
      request: Dr,
    });
  function a(u, y) {
    return (
      (y = y || ce().GetDefaultHandlerRegistry()),
      y == null
        ? (console.error(
            "Transport Error: no default registry is available for request",
          ),
          null)
        : y.RegisterServiceNotificationHandler(p.NotifyStartShutdownHandler, u)
    );
  }
  p.RegisterForNotifyStartShutdown = a;
  function o(u, y) {
    return (
      (y = y || ce().GetDefaultTransport()),
      y == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : y.SendNotification("TransportAuth.NotifyStartShutdown#1", v(Dr, u), {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  p.NotifyStartShutdown = o;
  function l(u, y) {
    return (
      (y = y || ce().GetDefaultTransport()),
      y == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : y.SendNotification("TransportAuth.NotifyStartShutdown#1", v(Dr, u), {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  p.SendMsgNotifyStartShutdown = l;
})((Wr ||= {}));
var vt = class {
  m_socket = null;
  m_sName;
  m_sURL;
  Log = new Ut("CWebSocketConnection", () => this.m_sName);
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
  constructor(e, r) {
    (this.m_sName = e),
      (this.m_fnOnMessageHandler = r.fnOnMessageHandler),
      (this.m_fnOnCloseHandler = r.fnOnCloseHandler),
      (this.m_fnOnReconnectStartHandler =
        r.fnOnReconnectStartHandler ?? (() => {})),
      (this.m_fnOnReconnectFinishHandler =
        r.fnOnReconnectFinishHandler ?? (() => {})),
      (this.m_nConnectAttemptsMax = r.nConnectAttemptsMax ?? 8),
      (this.m_nConnectAttemptTimeoutMs = r.nConnectAttemptTimeoutMs ?? 1e3),
      (this.m_bReconnectOnFailure = r.bReconnectOnFailure ?? !1),
      (this.m_nReconnectAttemptsMax = r.nReconnectAttemptsMax ?? 3e4),
      (this.m_nReconnectAttemptTimeoutMs = r.nReconnectAttemptTimeoutMs ?? 1e4);
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
    return Dp(e, 1, 5) * 1e3;
  }
  async ConnectWithRetry(e, r, i) {
    this.m_bConnecting = !0;
    let a = 0;
    do {
      try {
        let l = await this.ConnectToSocket(e, i);
        if (l.result == 1) return (this.m_bConnecting = !1), l;
        this.Log.Warning(`connect attempt failed: ${l.result} - ${l.message}`);
      } catch (l) {
        this.Log.Warning(`connect attempt failed: exception ${l.name} - ${l}`);
      }
      let o = this.GetInterAttemptBackoffMs(a);
      this.Log.Info(`connect retry: attempt:${a}/${r} backoff:${o}`),
        await new Promise((l) => setTimeout(l, o)),
        (this.m_socket = null),
        (a += 1);
    } while (a < r);
    return (
      this.Log.Warning(
        `websocket connect retry: limit exceeeded, bailing - ${this.name}`,
      ),
      (this.m_bConnecting = !1),
      this.BShouldReconnect() && this.StartReconnect(),
      { result: 2, message: "not ready, exceeded retry count" }
    );
  }
  Disconnect() {
    this.Log.Info("disconnect requested"),
      (this.m_bDisconnectRequested = !0),
      this.m_socket.close();
  }
  PrepareForShutdown() {
    this.Log.Info("shutdown pending"), (this.m_bDisconnectRequested = !0);
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
      (await this.Reconnect()).result != 1)
    ) {
      this.Log.Warning("failed to re-connect to websocket after close"),
        this.m_fnOnReconnectFinishHandler({ connection: this, eResult: 2 }),
        this.m_fnOnCloseHandler({
          connection: this,
          bError: !0,
          bIsExpectedToReconnect: !1,
        });
      return;
    }
    this.Log.Info("reconnect successful"),
      this.m_fnOnReconnectFinishHandler({ connection: this, eResult: 1 });
  }
  async ConnectToSocket(e, r) {
    if (this.m_socket != null)
      return this.m_socket.readyState != WebSocket.OPEN
        ? (this.Log.Error(
            `websocket in an unexpected state: ${this.m_socket.readyState}`,
          ),
          { result: 2, message: "websocket in an unexpected state" })
        : { result: 1, message: "ready" };
    try {
      this.m_socket = new WebSocket(e);
    } catch {
      return (
        this.Log.Warning("failed to initialize websocket connection"),
        { result: 35, message: "Failed to initialize websocket connection" }
      );
    }
    return (
      (this.m_socket.binaryType = "arraybuffer"),
      (this.m_socket.onerror = this.OnSocketError),
      (this.m_socket.onmessage = this.OnSocketMessage),
      (this.m_socket.onopen = this.OnSocketOpen),
      (this.m_socket.onclose = this.OnSocketClose),
      (await this.WaitForSocketOpen(this.m_socket, r))
        ? (this.Log.Info("connection ready"), { result: 1, message: "ready" })
        : (this.Log.Warning("failed to reach open state"),
          { result: 2, message: "failed to reach open state" })
    );
  }
  async WaitForSocketOpen(e, r) {
    if (e.readyState != WebSocket.CONNECTING)
      return e.readyState == WebSocket.OPEN;
    let i = 100,
      a = r / i;
    for (; e.readyState == WebSocket.CONNECTING && a > 0; )
      a--, await new Promise((o) => setTimeout(o, i));
    return e.readyState == WebSocket.OPEN;
  }
  BCanSendMessages() {
    return this.m_socket != null && this.m_socket.readyState == WebSocket.OPEN;
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
    let r = this.BShouldReconnect();
    this.m_fnOnCloseHandler({
      connection: this,
      bError: !0,
      bIsExpectedToReconnect: r,
    }),
      r && this.StartReconnect();
  }
  async OnSocketMessage(e) {
    this.m_fnOnMessageHandler(e.data);
  }
  SendSerializedMessage(e) {
    try {
      return this.m_socket.send(e), 1;
    } catch {
      return 2;
    }
  }
};
T([_e], vt.prototype, "OnSocketError", 1),
  T([_e], vt.prototype, "OnSocketOpen", 1),
  T([_e], vt.prototype, "OnSocketClose", 1),
  T([_e], vt.prototype, "OnSocketMessage", 1);
var mg = "localhost",
  $e = new Ut("WebUITransport"),
  Bt = class Bt {
    m_iMsgSeq = 1;
    m_mapPendingMethodRequests = new Map();
    m_messageHandlers = new or();
    m_mapServiceCallErrorCount = new Map();
    m_mapConnectionDetails = new Map();
    m_fnOnStatusEventHandler;
    m_fnOnReconnectErrorHandler;
    m_bInitialized = !1;
    m_nMaximumMsgSizeBytes = 1024;
    static sm_ErrorReportingStore;
    static InstallErrorReportingStore(e) {
      this.sm_ErrorReportingStore = e;
    }
    BIsValid() {
      return this.m_bInitialized;
    }
    GetMaximumMsgSizeBytes() {
      return this.m_nMaximumMsgSizeBytes;
    }
    TEST_GetMaximumMsgBodySizeBytes() {
      return (
        this.m_nMaximumMsgSizeBytes - this.TEST_GetMsgHeaderEstimatedSizeBytes()
      );
    }
    TEST_GetMsgHeaderEstimatedSizeBytes() {
      return 128;
    }
    TEST_GetExcessivelyLargeBodySize() {
      return 64 * 1024 * 1024;
    }
    ReportError(e) {
      $e.Warning(e);
      let r = Bt.sm_ErrorReportingStore;
      r &&
        r.ReportError(new Error(e), {
          bIncludeMessageInIdentifier: !0,
          cCallsitesToIgnore: 1,
        });
    }
    async Init() {
      if (!w.IN_CLIENT) return;
      let e = await SteamClient.WebUITransport.GetTransportInfo();
      (this.m_nMaximumMsgSizeBytes = e.nMaximumMsgSizeBytes),
        this.CreateConnection(1, "steamUI", e.portSteamUI, e.authKeySteamUI),
        this.CreateConnection(
          2,
          "clientdll",
          e.portClientdll,
          e.authKeyClientdll,
        ),
        ce().SetDefaultTransport(this),
        ce().SetDefaultHandlerRegistry(this.m_messageHandlers),
        Wr.RegisterForNotifyStartShutdown(this.OnStartShutdown);
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
    CreateConnection(e, r, i, a) {
      let o = {
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
        l = {
          connection: new vt(r, o),
          sUrl: `ws://${mg}:${i}/transportsocket/`,
          sAuthKey: a,
          eClientExecutionSite: e,
        };
      this.m_mapConnectionDetails.set(e, l);
    }
    SendMsg(e, r, i, a) {
      return new Promise((o, l) => {
        let p = a.eClientExecutionSite;
        if (p == null || p == 0) {
          $e.Error(`SendMsg: Invalid client execution site: ${p}`),
            l(`Transport SendMsg: invalid client execution site ${p}`);
          return;
        }
        let u = this.m_mapConnectionDetails.get(p);
        if (u == null) {
          $e.Error(
            `SendMsg: could not find connection for execution site: ${p}`,
          ),
            l(
              `Transport SendMsg: could not find connection for execution site ${p}`,
            );
          return;
        }
        let y = u.connection;
        if (!y.BCanSendMessages()) {
          let B = this.m_mapServiceCallErrorCount.get(e) ?? 1;
          this.m_mapServiceCallErrorCount.set(e, B + 1);
          let x = `SendMsg: Attempt to send message but socket wasn't ready: ${y.name} - ${e}`;
          B == 1 && this.ReportError(x),
            $e.Warning(x + ` error count: ${B}`),
            l("Transport SendMsg: socket not ready");
          return;
        }
        let C = this.m_iMsgSeq++;
        r.SetEMsg(146),
          r.Hdr().set_target_job_name(e),
          r.Hdr().set_jobid_source("" + C);
        let M = r.Serialize();
        if (M.byteLength >= this.m_nMaximumMsgSizeBytes) {
          $e.Error(
            `SendMsg: message exceeds maximum size: ${M.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
          );
          let B = Z.Init(i);
          B.Hdr().set_eresult(2), o(B);
          return;
        }
        if (y.SendSerializedMessage(M) != 1) {
          $e.Error("SendMsg: Failed to send message"),
            l("Transport SendMsg: failed to send message");
          return;
        }
        this.m_mapPendingMethodRequests.set(C, {
          m_iSeq: C,
          m_responseClass: i,
          m_fnCallback: o,
          m_fnError: l,
        });
      });
    }
    SendNotification(e, r, i) {
      let a = i.eClientExecutionSite;
      if (a == null || a == 0)
        return (
          $e.Error(`SendNotification: Invalid client execution site: ${a}`), !1
        );
      let o = this.m_mapConnectionDetails.get(a);
      if (o == null)
        return (
          $e.Error(
            `SendNotification: could not find connection for execution site: ${a}`,
          ),
          !1
        );
      let l = o.connection;
      if (!l.BCanSendMessages()) {
        let u = this.m_mapServiceCallErrorCount.get(e) ?? 1;
        this.m_mapServiceCallErrorCount.set(e, u + 1);
        let y = `SendNotification: Attempt to send message but socket wasn't ready: ${l.name} - ${e}`;
        return (
          u == 1 && this.ReportError(y),
          $e.Warning(y + ` error count: ${u}`),
          !1
        );
      }
      return (
        r.SetEMsg(146),
        r.Hdr().set_target_job_name(e),
        l.SendSerializedMessage(r.Serialize()) == 1
      );
    }
    async ConnectToSite(e) {
      let i = await e.connection.Connect(e.sUrl);
      return i.result != 1
        ? i
        : (await this.SendAuthMessage(e)).BSuccess()
          ? { result: 1, message: "connected" }
          : { result: 2, message: "client auth failed" };
    }
    async MakeReady() {
      let e = [];
      for (let [i, a] of this.m_mapConnectionDetails)
        e.push(this.ConnectToSite(a));
      let r = await Promise.all(e);
      (this.m_bInitialized = !0), this.DispatchTransportStatusUpdate();
      for (let i of r) if (i.result != 1) return i;
      return { result: 1, message: "ready" };
    }
    GetConnectionDetails(e) {
      for (let [r, i] of this.m_mapConnectionDetails)
        if (i.connection === e) return i;
      return (
        $e.Error("GetConnectionDetails: failed to identify connection"), null
      );
    }
    DispatchTransportStatusUpdate() {
      if (!this.m_fnOnStatusEventHandler) return;
      let e = !0;
      for (let [r, i] of this.m_mapConnectionDetails)
        i.connection.BCanSendMessages() || (e = !1);
      this.m_fnOnStatusEventHandler({ bConnected: e });
    }
    OnWebsocketReconnectStart(e) {
      this.DispatchTransportStatusUpdate();
    }
    OnWebsocketReconnectFinish(e) {
      if ((this.DispatchTransportStatusUpdate(), e.eResult != 1)) {
        $e.Warning("OnWebsocketReconnect: Failed to reconnect to steam client"),
          this.m_fnOnReconnectErrorHandler?.({});
        return;
      }
      this.FailAllPendingRequests();
      let r = this.GetConnectionDetails(e.connection);
      r && this.SendAuthMessage(r);
    }
    OnWebsocketClose(e) {
      e.bIsExpectedToReconnect || this.FailAllPendingRequests();
    }
    OnWebsocketMessage(e) {
      let r = new Zr(e),
        i = Z.InitHeaderFromPacket(r);
      i.Hdr().jobid_target() && i.Hdr().jobid_target() !== Yp
        ? this.DispatchMethodResponse(i)
        : this.DispatchNotification(i);
    }
    DispatchMethodResponse(e) {
      let r = parseInt(e.Hdr().jobid_target()),
        i = this.m_mapPendingMethodRequests.get(r);
      if (i == null) {
        le(!1, "Transport Error: no pending callback for request");
        return;
      }
      le(r == i.m_iSeq, "Transport Error: mistmatched request sequence"),
        this.m_mapPendingMethodRequests.delete(r);
      let a = Z.InitFromMsg(i.m_responseClass, e);
      i.m_fnCallback(a);
    }
    DispatchNotification(e) {
      let r = (i) => {
        le(
          !1,
          "Transport Error: A notification should not generate a response",
        );
      };
      this.m_messageHandlers.DispatchMsgToHandlers(e, r);
    }
    FailAllPendingRequests() {
      for (let [e, r] of this.m_mapPendingMethodRequests) {
        this.ReportError(
          `FailAllPendingRequests: forcing failure for request: ${r.m_responseClass.name}`,
        );
        let i = Z.Init(r.m_responseClass);
        i.Hdr().set_eresult(2), r.m_fnCallback(i);
      }
      this.m_mapPendingMethodRequests.clear();
    }
    async SendAuthMessage(e) {
      let r = Wr.AuthenticateHandler.name,
        i = { eClientExecutionSite: e.eClientExecutionSite },
        a = Z.Init(Et);
      return (
        a.Hdr().set_webui_auth_key(e.sAuthKey),
        await this.SendMsg(r, a, Wr.AuthenticateHandler.response, i)
      );
    }
    OnStartShutdown(e) {
      for (let [r, i] of this.m_mapConnectionDetails)
        i.connection.PrepareForShutdown();
      return 1;
    }
  };
T([_e], Bt.prototype, "OnWebsocketReconnectStart", 1),
  T([_e], Bt.prototype, "OnWebsocketReconnectFinish", 1),
  T([_e], Bt.prototype, "OnWebsocketClose", 1),
  T([_e], Bt.prototype, "OnWebsocketMessage", 1),
  T([_e], Bt.prototype, "OnStartShutdown", 1);
var Ur = Bt,
  Xd = new Ur();
var dg =
    window.addEventListener ||
    (global && global.addEventListener) ||
    (() => {}),
  Hs = [],
  qt = (t, e) => Hs.push({ error: t, cCallsitesToIgnore: e }),
  ec,
  ks = !0;
if (ks) {
  let t = console.assert;
  console.assert = (r, i, ...a) => {
    r || qt(new Error(Ap(i, ...a)), 2), t.apply(console, [r, i, ...a]);
  };
  let e = console.error;
  (console.error = (r, ...i) => {
    qt(new Error(Ap(r, ...i)), 1), e.apply(console, [r, ...i]);
  }),
    (console.clogerror = (r, i, ...a) => {
      qt(new Error(Ap(i, ...a)), r + 1), e.apply(console, [i, ...a]);
    }),
    dg("error", (r) => {
      qt(r.error, 0);
    }),
    (ec = window.setTimeout(() => {
      (Hs = []), (qt = () => {});
    }, 30 * 1e3));
}
var cg = { cCallsitesToIgnore: 0, bIncludeMessageInIdentifier: !1 },
  _g = ["/(localhost|127.0.0.1):1337/", "chrome-extension://"],
  Tp = class {
    m_strProduct;
    m_strVersion;
    m_transport = null;
    m_rgErrorQueue = [];
    m_sendTimer = null;
    m_bReportingPaused = !1;
    m_pauseTimer = void 0;
    m_fnGetReportingInterval = Sg;
    m_bEnabled = !0;
    m_bInitialized = !1;
    constructor(e = !0) {
      ks &&
        (e
          ? (Hs.forEach(({ error: r, cCallsitesToIgnore: i }) =>
              this.ReportError(r, { cCallsitesToIgnore: i }),
            ),
            (qt = (r, i) => this.ReportError(r, { cCallsitesToIgnore: i })))
          : (qt = () => {}),
        (Hs = []),
        clearTimeout(ec)),
        window.setTimeout(() => {
          this.m_bInitialized ||
            ((this.m_bEnabled = !1), (this.m_rgErrorQueue = []));
        }, 30 * 1e3);
    }
    Init(e, r, i, a = {}) {
      (this.m_bInitialized = !0),
        (this.m_strProduct = e),
        (this.m_strVersion = r),
        (this.m_transport = i),
        a.fnGetReportingInterval &&
          (this.m_fnGetReportingInterval = a.fnGetReportingInterval),
        this.m_bEnabled ||
          (console.error(
            "Error reporting was initialized after being disabled, possibly dropping errors.",
          ),
          (this.m_bEnabled = !0)),
        this.m_rgErrorQueue.length &&
          (this.SendErrorReports(this.m_rgErrorQueue),
          (this.m_rgErrorQueue = []));
    }
    async ReportError(e, r) {
      if (!e)
        return (
          console.warn(
            "Failed to report error: ReportError() was called without an error to report.",
          ),
          null
        );
      try {
        let i = { ...cg, ...r };
        if (!this.m_bEnabled || !ks) return null;
        let a = await fg(e, i);
        return a ? (this.SendErrorReport(a), a) : null;
      } catch (i) {
        return console.log(`Failed to report error: ${i}`), null;
      }
    }
    PauseReportingForDuration(e) {
      this.PauseReporting(),
        (this.m_pauseTimer = window.setTimeout(
          () => this.ResumeReporting(),
          e,
        ));
    }
    PauseReporting() {
      (this.m_bReportingPaused = !0), window.clearTimeout(this.m_pauseTimer);
    }
    ResumeReporting() {
      (this.m_bReportingPaused = !1),
        window.clearTimeout(this.m_pauseTimer),
        this.ScheduleSend();
    }
    BIsBlacklisted(e) {
      for (let r of e.message) {
        let i = JSON.stringify(r);
        for (let a of _g) {
          let o = new RegExp(a);
          if (i.match(o))
            return console.warn("Report", e, "matched regex", a), !0;
        }
      }
      return !1;
    }
    SendErrorReport(e) {
      if (!this.BIsBlacklisted(e)) {
        if (!this.m_transport) {
          this.m_rgErrorQueue.push(e);
          return;
        }
        this.QueueReport(e);
      }
    }
    QueueReport(e) {
      this.m_rgErrorQueue.push(e),
        this.m_bReportingPaused || this.ScheduleSend();
    }
    ScheduleSend() {
      this.m_sendTimer ||
        (this.m_sendTimer = window.setTimeout(() => {
          this.SendErrorReports(this.m_rgErrorQueue),
            (this.m_rgErrorQueue = []),
            (this.m_sendTimer = null);
        }, this.m_fnGetReportingInterval()));
    }
    SendErrorReports(e) {
      if (!e || !e.length) return;
      let r = Z.Init(Nr),
        i = e.reduce(
          (o, l) => (
            o[l.identifier]
              ? o[l.identifier].count++
              : (o[l.identifier] = { report: l, count: 1 }),
            o
          ),
          {},
        ),
        a = Object.keys(i).map((o) => {
          let { report: l, count: p } = i[o],
            u = new zr();
          return (
            u.set_count(p),
            u.set_identifier(l.identifier + " " + l.identifierHash),
            u.set_message(JSON.stringify(l.message)),
            u
          );
        });
      r.Body().set_product(this.m_strProduct),
        r.Body().set_version(this.m_strVersion),
        r.Body().set_errors(a),
        kp.ReportClientError(this.m_transport, r);
    }
    get version() {
      return this.m_strVersion;
    }
    get product() {
      return this.m_strProduct;
    }
    get reporting_enabled() {
      return ks;
    }
  };
function Ap(t, ...e) {
  return typeof t == "string" && e.length === 0
    ? t
    : [t, ...e]
        .map((i) => {
          try {
            return String(i);
          } catch {
            return "[Stringify Error]";
          }
        })
        .join(", ");
}
var tc = /^\s*at .*(\S+:\d+|\(native\))/m,
  rc = /(^|@)\S+:\d+/,
  gg = /.*\/bundle-[a-zA-Z0-9]+:\d+:\d+/,
  Zd = !1;
function fg(t, e) {
  try {
    return t.stack && t.stack.match(tc)
      ? yg(t, e)
      : t.stack && t.stack.match(rc)
        ? Rg(t, e)
        : t.stack && t.stack.match(gg)
          ? bg(t, e)
          : (Zd ||
              (console.warn(
                "Error reporter does not know how to parse generated stack:",
              ),
              console.warn(t.stack),
              (Zd = !0)),
            null);
  } catch (r) {
    return console.warn(`Failed to normalize error stack: ${r}`), null;
  }
}
async function yg(t, e) {
  let { cCallsitesToIgnore: r, bIncludeMessageInIdentifier: i } = e,
    a =
      t.stack?.split(`
`) ?? [],
    o = a.filter((u) => !!u.match(tc)),
    l = ic(o[r]);
  i && (l = `${l} ${t.message}`);
  let p = a
    .map((u) => {
      let y = u.match(/(.*)\((.*):(\d+):(\d+)\)/);
      if (!y) return u;
      if (y.length === 5) {
        let [C, M, k, B, x] = y,
          H = parseInt(B),
          h = parseInt(x);
        if (!isNaN(H) && !isNaN(h)) return [M, k, H, h];
      }
      return u;
    })
    .filter((u) => !!u);
  return { identifier: l, identifierHash: await Ep(l), message: p };
}
function ic(t) {
  return Pg(Cg(t));
}
function Cg(t) {
  let e = t.lastIndexOf("?");
  if (e === -1) return t;
  let r = t.indexOf(":", e);
  return r === -1 ? t : t.slice(0, e) + t.slice(r);
}
function Pg(t) {
  let e = "https://",
    r = t.indexOf(e);
  if (r === -1) return t;
  let i = t.indexOf("/", r + e.length);
  return i === -1 ? t : t.slice(0, r) + t.slice(i);
}
async function Rg(t, e) {
  let { cCallsitesToIgnore: r, bIncludeMessageInIdentifier: i } = e,
    a =
      t.stack?.split(`
`) ?? [],
    o = a.filter((u) => !!u.match(rc)),
    l = ic(o[r]);
  i && (l = `${l} ${t.message}`);
  let p = a
    .map((u) => {
      let y = u.match(/(.*@)?(.*):(\d+):(\d+)/);
      if (!y) return u;
      if (y.length === 5) {
        let [C, M, k, B, x] = y,
          H = parseInt(B),
          h = parseInt(x);
        if (!isNaN(H) && !isNaN(h)) return [M, k, H, h];
      }
      return u;
    })
    .filter((u) => !!u);
  return {
    identifier: l,
    identifierHash: await Ep(l),
    message: [t.message, ...p],
  };
}
async function bg(t, e) {
  let { bIncludeMessageInIdentifier: r, cCallsitesToIgnore: i } = e,
    a =
      t.stack?.split(`
`) ?? [],
    o = a[i],
    l = o.split("/"),
    p = l[l.length - 1];
  o.indexOf("@") > -1 && (p = o.split("@")[0] + "@" + p),
    r && (p = `${p} ${t.message}`);
  let u = a
    .map((y) => {
      let C = y.match(/(.*@)?(.*):(\d+):(\d+)/);
      if (!C) return y;
      if (C.length === 5) {
        let [M, k, B, x, H] = C,
          h = parseInt(x),
          D = parseInt(H);
        if (!isNaN(h) && !isNaN(D)) return [k, B, h, D];
      }
      return y;
    })
    .filter((y) => !!y);
  return {
    identifier: p,
    identifierHash: await Ep(p),
    message: [t.message, ...u],
  };
}
var Nt,
  jp = () => (Nt || Mg(new Tp()), Nt),
  Mg = (t) => {
    (Nt = t),
      ju.InstallErrorReportingStore(Nt),
      su.InstallErrorReportingStore(Nt),
      fu.InstallErrorReportingStore(Nt),
      Ur.InstallErrorReportingStore(Nt);
  };
async function Ep(t) {
  try {
    let e = await window.crypto.subtle.digest("SHA-256", Bg(t));
    return vg(e).slice(0, 16);
  } catch {
    return "";
  }
}
function vg(t) {
  return Array.prototype.map
    .call(new Uint8Array(t), (e) => ("00" + e.toString(16)).slice(-2))
    .join("");
}
function Bg(t) {
  let e = new ArrayBuffer(t.length * 2),
    r = new Uint16Array(e);
  for (let i = 0, a = t.length; i < a; i++) r[i] = t.charCodeAt(i);
  return e;
}
function Sg() {
  return 1e3 * 10;
}
var ne = K(we());
var ve = ne.Message,
  zt = class t extends ve {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.language || f(t.M()),
        ve.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              language: { n: 1, q: !0, br: s.readString, bw: n.writeString },
              type: { n: 2, q: !0, br: s.readString, bw: n.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new ne.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new ne.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new ne.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamEngine_UpdateTextFilterDictionary_Notification";
    }
  },
  xt = class t extends ve {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.language || f(t.M()),
        ve.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              language: { n: 1, q: !0, br: s.readString, bw: n.writeString },
              type: { n: 2, q: !0, br: s.readString, bw: n.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new ne.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new ne.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new ne.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamEngine_GetTextFilterDictionary_Request";
    }
  },
  Or = class t extends ve {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.dictionary || f(t.M()),
        ve.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              dictionary: { n: 1, br: s.readString, bw: n.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new ne.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new ne.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new ne.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamEngine_GetTextFilterDictionary_Response";
    }
  },
  Lr = class t extends ve {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.language || f(t.M()),
        ve.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              language: { n: 1, q: !0, br: s.readString, bw: n.writeString },
              type: { n: 2, q: !0, br: s.readString, bw: n.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new ne.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new ne.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new ne.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamEngine_TextFilterDictionaryChanged_Notification";
    }
  },
  Vr = class t extends ve {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.pid || f(t.M()),
        ve.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { pid: { n: 1, br: s.readUint32, bw: n.writeUint32 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new ne.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new ne.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new ne.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamEngine_GetGameIDForPID_Request";
    }
  },
  Kr = class t extends ve {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.gameid || f(t.M()),
        ve.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              gameid: { n: 1, br: s.readUint64String, bw: n.writeUint64String },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new ne.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new ne.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new ne.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamEngine_GetGameIDForPID_Response";
    }
  },
  Jr = class t extends ve {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.gameid || f(t.M()),
        ve.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              gameid: {
                n: 1,
                q: !0,
                br: s.readUint64String,
                bw: n.writeUint64String,
              },
              should_handle: { n: 2, q: !0, br: s.readBool, bw: n.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new ne.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new ne.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new ne.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamEngine_SetOverlayEscapeKeyHandling_Notification";
    }
  },
  Qr = class t extends ve {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.search_term || f(t.M()),
        ve.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              search_term: { n: 1, br: s.readString, bw: n.writeString },
              max_results: { n: 2, br: s.readUint32, bw: n.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new ne.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new ne.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new ne.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Request";
    }
  },
  $r = class t extends ve {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appids || f(t.M()),
        ve.initialize(this, e, 0, -1, [1], null);
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
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: n.writeRepeatedUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = m(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return c(t.M(), e, r);
    }
    static fromObject(e) {
      return d(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new ne.BinaryReader(e),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new ne.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      g(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new ne.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Response";
    }
  },
  pr;
((W) => {
  W.UpdateTextFilterDictionaryHandler = {
    name: "SteamEngine.UpdateTextFilterDictionary#1",
    request: zt,
  };
  function e(E, b) {
    return (
      (b = b || ce().GetDefaultHandlerRegistry()),
      b == null
        ? (console.error(
            "Transport Error: no default registry is available for request",
          ),
          null)
        : b.RegisterServiceNotificationHandler(
            W.UpdateTextFilterDictionaryHandler,
            E,
          )
    );
  }
  W.RegisterForUpdateTextFilterDictionary = e;
  function r(E, b) {
    return (
      (b = b || ce().GetDefaultTransport()),
      b == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : b.SendNotification(
            "SteamEngine.UpdateTextFilterDictionary#1",
            v(zt, E),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  W.UpdateTextFilterDictionary = r;
  function i(E, b) {
    return (
      (b = b || ce().GetDefaultTransport()),
      b == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : b.SendNotification(
            "SteamEngine.UpdateTextFilterDictionary#1",
            v(zt, E),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  (W.SendMsgUpdateTextFilterDictionary = i),
    (W.GetTextFilterDictionaryHandler = {
      name: "SteamEngine.GetTextFilterDictionary#1",
      request: xt,
      response: Or,
    });
  function o(E, b) {
    return (
      (b = b || ce().GetDefaultTransport()),
      b == null
        ? new Promise((V, fe) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              fe("Transport Error: no transport is available for request");
          })
        : b.SendMsg("SteamEngine.GetTextFilterDictionary#1", v(xt, E), Or, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  W.GetTextFilterDictionary = o;
  function l(E, b) {
    return (
      (b = b || ce().GetDefaultTransport()),
      b == null
        ? new Promise((V, fe) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              fe("Transport Error: no transport is available for request");
          })
        : b.SendMsg("SteamEngine.GetTextFilterDictionary#1", v(xt, E), Or, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  (W.SendMsgGetTextFilterDictionary = l),
    (W.NotifyTextFilterDictionaryChangedHandler = {
      name: "SteamEngine.NotifyTextFilterDictionaryChanged#1",
      request: Lr,
    });
  function u(E, b) {
    return (
      (b = b || ce().GetDefaultHandlerRegistry()),
      b == null
        ? (console.error(
            "Transport Error: no default registry is available for request",
          ),
          null)
        : b.RegisterServiceNotificationHandler(
            W.NotifyTextFilterDictionaryChangedHandler,
            E,
          )
    );
  }
  W.RegisterForNotifyTextFilterDictionaryChanged = u;
  function y(E, b) {
    return (
      (b = b || ce().GetDefaultTransport()),
      b == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : b.SendNotification(
            "SteamEngine.NotifyTextFilterDictionaryChanged#1",
            v(Lr, E),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  W.NotifyTextFilterDictionaryChanged = y;
  function C(E, b) {
    return (
      (b = b || ce().GetDefaultTransport()),
      b == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : b.SendNotification(
            "SteamEngine.NotifyTextFilterDictionaryChanged#1",
            v(Lr, E),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  (W.SendMsgNotifyTextFilterDictionaryChanged = C),
    (W.GetGameIDForPIDHandler = {
      name: "SteamEngine.GetGameIDForPID#1",
      request: Vr,
      response: Kr,
    });
  function k(E, b) {
    return (
      (b = b || ce().GetDefaultTransport()),
      b == null
        ? new Promise((V, fe) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              fe("Transport Error: no transport is available for request");
          })
        : b.SendMsg("SteamEngine.GetGameIDForPID#1", v(Vr, E), Kr, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  W.GetGameIDForPID = k;
  function B(E, b) {
    return (
      (b = b || ce().GetDefaultTransport()),
      b == null
        ? new Promise((V, fe) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              fe("Transport Error: no transport is available for request");
          })
        : b.SendMsg("SteamEngine.GetGameIDForPID#1", v(Vr, E), Kr, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  (W.SendMsgGetGameIDForPID = B),
    (W.SetOverlayEscapeKeyHandlingHandler = {
      name: "SteamEngine.SetOverlayEscapeKeyHandling#1",
      request: Jr,
    });
  function H(E, b) {
    return (
      (b = b || ce().GetDefaultHandlerRegistry()),
      b == null
        ? (console.error(
            "Transport Error: no default registry is available for request",
          ),
          null)
        : b.RegisterServiceNotificationHandler(
            W.SetOverlayEscapeKeyHandlingHandler,
            E,
          )
    );
  }
  W.RegisterForSetOverlayEscapeKeyHandling = H;
  function h(E, b) {
    return (
      (b = b || ce().GetDefaultTransport()),
      b == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : b.SendNotification(
            "SteamEngine.SetOverlayEscapeKeyHandling#1",
            v(Jr, E),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  W.SetOverlayEscapeKeyHandling = h;
  function D(E, b) {
    return (
      (b = b || ce().GetDefaultTransport()),
      b == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : b.SendNotification(
            "SteamEngine.SetOverlayEscapeKeyHandling#1",
            v(Jr, E),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  (W.SendMsgSetOverlayEscapeKeyHandling = D),
    (W.SearchAppDataCacheByStoreKeywordsHandler = {
      name: "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
      request: Qr,
      response: $r,
    });
  function re(E, b) {
    return (
      (b = b || ce().GetDefaultTransport()),
      b == null
        ? new Promise((V, fe) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              fe("Transport Error: no transport is available for request");
          })
        : b.SendMsg(
            "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
            v(Qr, E),
            $r,
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  W.SearchAppDataCacheByStoreKeywords = re;
  function Fe(E, b) {
    return (
      (b = b || ce().GetDefaultTransport()),
      b == null
        ? new Promise((V, fe) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              fe("Transport Error: no transport is available for request");
          })
        : b.SendMsg(
            "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
            v(Qr, E),
            $r,
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  W.SendMsgSearchAppDataCacheByStoreKeywords = Fe;
})((pr ||= {}));
function ur() {
  return w.IN_MOBILE ? uu : mu();
}
function hg(t) {
  if (t === "") return !1;
  try {
    return new RegExp("\\b(" + t + ")\\b", "ugi"), !0;
  } catch {
    return (
      console.log(`'${t}' is an invalid expression, removing from text filter`),
      !1
    );
  }
}
var Fg = 60 * 60,
  qp = "(1)",
  De = class {
    m_WebUIServiceTransport;
    m_unAccountID;
    m_Transport = null;
    m_Storage = null;
    m_TextFilterPreferences = { eTextFilterSetting: 3, bIgnoreFriends: !1 };
    m_TextFilterWords;
    m_mapPlayerCache = new Map();
    m_strBannedWords = "";
    m_strProfanityWords = "";
    m_strCleanWords = "";
    m_strBannedPattern = "";
    m_strCleanPattern = "";
    m_regexBannedWords = null;
    m_regexCleanWords = null;
    m_bShownFilterTip = !1;
    m_bInitialized = !1;
    m_DataAccess;
    constructor(e) {
      he(this);
      let r = new ti();
      (this.m_TextFilterPreferences = {
        eTextFilterSetting: r.text_filter_setting(),
        bIgnoreFriends: r.text_filter_ignore_friends(),
      }),
        (this.m_TextFilterWords = new Ot()),
        (this.m_DataAccess = e);
    }
    async Init(e = 0, r = null, i = null) {
      (this.m_bInitialized = !1),
        (this.m_WebUIServiceTransport = Xd),
        (this.m_unAccountID = e),
        (this.m_Transport = r),
        (this.m_Storage = i),
        (this.m_strBannedWords = ""),
        (this.m_strProfanityWords = ""),
        (this.m_strCleanWords = ""),
        this.InitSteamEngineLanguages(),
        await this.LoadFilter(),
        await this.LoadTextFilterPreferences(),
        await this.LoadTextFilterWords(),
        await this.RequestUpdatedSettings(),
        await this.LoadLanguages(),
        this.OnFilterDataChanged(),
        (this.m_bInitialized = !0);
    }
    InitSteamEngineLanguages() {
      this.m_WebUIServiceTransport.BIsValid() &&
        (this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
          pr.NotifyTextFilterDictionaryChangedHandler,
          this.OnTextFilterDictionaryChanged,
        ),
        this.InitSteamEngineLanguage(w.LANGUAGE),
        w.LANGUAGE !== "english" && this.InitSteamEngineLanguage("english"));
    }
    OnTextFilterDictionaryChanged(e) {
      return (
        this.LoadLanguages().then(() => {
          this.OnFilterDataChanged();
        }),
        1
      );
    }
    InitSteamEngineLanguage(e) {
      let r = Z.Init(zt);
      r.Body().set_language(e),
        r.Body().set_type("profanity"),
        pr.SendMsgUpdateTextFilterDictionary(r, this.m_WebUIServiceTransport),
        r.Body().set_type("banned"),
        pr.SendMsgUpdateTextFilterDictionary(r, this.m_WebUIServiceTransport);
    }
    GetSteamEngineTextFilterDictionary(e, r) {
      let i = Z.Init(xt);
      return (
        i.Body().set_language(e),
        i.Body().set_type(r),
        pr.SendMsgGetTextFilterDictionary(i, this.m_WebUIServiceTransport)
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
        let r = new TextEncoder().encode(qp + e);
        return As.fromByteArray(r);
      } catch {
        return "";
      }
    }
    DeobfuscateString(e) {
      try {
        let r = As.toByteArray(e),
          i = new TextDecoder().decode(r);
        return i.startsWith(qp)
          ? ((i = i.slice(qp.length)), i)
          : (console.log(
              "DeobfuscateString given invalid base64 data, ignoring: " + e,
            ),
            "");
      } catch {
        return "";
      }
    }
    async LoadObfuscatedString(e) {
      if (this.m_Storage) {
        let r = await this.m_Storage.GetString(this.GetStorageKey(e));
        if (r) return this.DeobfuscateString(r);
      }
      return null;
    }
    async SaveObfuscatedString(e, r) {
      this.m_Storage &&
        this.m_Storage.StoreString(
          this.GetStorageKey(e),
          this.ObfuscateString(r),
        );
    }
    async LoadTextFilterWords() {
      let e = await this.LoadObfuscatedString(
        "CTextFilterStore_TextFilterWords",
      );
      if (e)
        try {
          this.m_TextFilterWords = Ot.fromObject(JSON.parse(e));
        } catch {
          console.warn("Error parsing cached text filter word list", e),
            (this.m_TextFilterWords = new Ot());
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
        r = await this.LoadObfuscatedString("CTextFilterStore_strCleanPattern");
      e != null && r != null && this.BRebuildFilter(e, r);
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
      let e = new ti();
      if (this.m_unAccountID !== 0)
        try {
          if (this.m_Transport) {
            let r = Z.Init(Cu);
            e = (await gr.GetCommunityPreferences(this.m_Transport, r))
              .Body()
              .preferences();
          } else {
            let r = { sessionid: w.SESSIONID, origin: ur() },
              i = await Dt.default.get(
                w.COMMUNITY_BASE_URL + "textfilter/ajaxgetcommunitypreferences",
                { params: r, withCredentials: !0 },
              );
            e = ti.fromObject(i.data.preferences);
          }
        } catch {}
      if (
        (this.UpdateCommunityPreferences(e),
        e.text_filter_words_revision() !==
          this.m_TextFilterWords.text_filter_words_revision())
      ) {
        let r = new Ot();
        if (e.text_filter_words_revision() !== 0)
          try {
            if (this.m_Transport) {
              let i = Z.Init(Pu);
              r = (await gr.GetTextFilterWords(this.m_Transport, i))
                .Body()
                .words();
            } else {
              let i = { sessionid: w.SESSIONID, origin: ur() },
                a = await Dt.default.get(
                  w.COMMUNITY_BASE_URL +
                    "textfilter/ajaxgettextfiltercustomwords",
                  { params: i, withCredentials: !0 },
                );
              r = Ot.fromObject(a.data.words);
            }
          } catch {}
        this.UpdateTextFilterWords(r);
      }
    }
    UpdateCommunityPreferences(e) {
      let r = !1;
      e.text_filter_setting() !==
        this.m_TextFilterPreferences?.eTextFilterSetting &&
        ((this.m_TextFilterPreferences.eTextFilterSetting =
          e.text_filter_setting()),
        (r = !0)),
        e.text_filter_ignore_friends() !==
          this.m_TextFilterPreferences.bIgnoreFriends &&
          ((this.m_TextFilterPreferences.bIgnoreFriends =
            e.text_filter_ignore_friends()),
          (r = !0)),
        r && this.SaveTextFilterPreferences();
    }
    get TextFilterPreferences() {
      return this.m_TextFilterPreferences;
    }
    UpdateTextFilterWords(e) {
      (this.m_TextFilterWords = e), this.SaveTextFilterWords();
    }
    m_nLoadLanguagesRetryTimeout = void 0;
    async LoadLanguages(e = 15) {
      (this.m_strBannedWords = ""),
        (this.m_strProfanityWords = ""),
        (this.m_strCleanWords = "");
      try {
        await this.LoadLanguage(w.LANGUAGE),
          w.LANGUAGE !== "english" && (await this.LoadLanguage("english"));
      } catch (r) {
        this.m_nLoadLanguagesRetryTimeout &&
          (le(
            !this.m_nLoadLanguagesRetryTimeout,
            "Got two concurrent calls to TextFilteringStore.LoadLanguages",
          ),
          window.clearTimeout(this.m_nLoadLanguagesRetryTimeout),
          (this.m_nLoadLanguagesRetryTimeout = void 0)),
          (e = Math.min(e * 2, Fg)),
          console.warn("LoadLanguages caught", r, "retry in", e, "seconds"),
          (this.m_nLoadLanguagesRetryTimeout = window.setTimeout(async () => {
            (this.m_nLoadLanguagesRetryTimeout = void 0),
              await this.LoadLanguages(e),
              this.OnFilterDataChanged();
          }, e * 1e3));
      }
    }
    async LoadLanguage(e) {
      let r = "1",
        i = "",
        a = !1;
      if (this.m_WebUIServiceTransport.BIsValid())
        try {
          {
            let o = await this.GetSteamEngineTextFilterDictionary(e, "banned");
            this.m_strBannedWords += o.Body().dictionary();
          }
          {
            let o = await this.GetSteamEngineTextFilterDictionary(
              e,
              "profanity",
            );
            this.m_strProfanityWords += o.Body().dictionary();
          }
          a = !0;
        } catch (o) {
          console.warn("LoadLanguage caught while loading from cache:", o);
        }
      if (!a) {
        i = `${w.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${e}&v=${r}&origin=${ur()}`;
        {
          let o = await Dt.default.get(i);
          this.m_strBannedWords += o.data;
        }
        i = `${w.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=${r}&origin=${ur()}`;
        {
          let o = await Dt.default.get(i);
          this.m_strProfanityWords += o.data;
        }
      }
      i = `${w.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=${r}&origin=${ur()}`;
      {
        let o = await Dt.default.get(i);
        this.m_strCleanWords += o.data;
      }
    }
    CreatePattern(e) {
      let r = e.filter(function (i) {
        return hg(i);
      });
      return r.length > 0 ? "\\b(" + r.join("|") + ")\\b" : "";
    }
    OnFilterDataChanged() {
      let e = new RegExp(/\s*[\r\n]+\s*/g),
        r = [],
        i = [];
      switch (this.m_TextFilterPreferences.eTextFilterSetting) {
        case 0:
          break;
        case 3:
          break;
        case 2:
          r = r.concat(this.m_strBannedWords.split(e));
          break;
        default:
          r = r.concat(
            this.m_strProfanityWords.split(e),
            this.m_strBannedWords.split(e),
          );
          break;
      }
      (r = r.concat(this.m_TextFilterWords.text_filter_custom_banned_words())),
        (i = this.m_strCleanWords.split(e)),
        (i = i.concat(this.m_TextFilterWords.text_filter_custom_clean_words()));
      let a = this.CreatePattern(r),
        o = this.CreatePattern(i);
      o != "" && (o = "^(" + o + ")$"),
        this.BRebuildFilter(a, o) && this.SaveFilter();
    }
    BRebuildFilter(e, r) {
      if (e === this.m_strBannedPattern && r === this.m_strCleanPattern)
        return !1;
      if (
        ((this.m_regexBannedWords = null),
        (this.m_strBannedPattern = e),
        e !== "")
      )
        try {
          this.m_regexBannedWords = new RegExp(e, "ugi");
        } catch (i) {
          console.warn("Couldn't compile textfilter bannedwords regex"),
            jp().ReportError(
              new Error(`Couldn't compile textfilter bannedwords regex: ${i}`),
            ),
            (this.m_strBannedPattern = "");
        }
      if (
        ((this.m_regexCleanWords = null),
        (this.m_strCleanPattern = r),
        r !== "")
      )
        try {
          this.m_regexCleanWords = new RegExp(r, "ugi");
        } catch (i) {
          console.warn("Couldn't compile textfilter cleanwords regex"),
            jp().ReportError(
              new Error(`Couldn't compile textfilter cleanwords regex: ${i}`),
            ),
            (this.m_strCleanPattern = "");
        }
      return !0;
    }
    CreateProfanityReplacement(e) {
      return "♥".repeat(e);
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
    FilterText(e, r) {
      if (!this.m_regexBannedWords) return r;
      let i = 0;
      return (
        typeof e == "string" && e !== ""
          ? (i = new pe(e).GetAccountID())
          : typeof e == "number" && (i = e),
        !r ||
        i == this.m_unAccountID ||
        (e &&
          this.m_TextFilterPreferences.bIgnoreFriends &&
          this.m_DataAccess.BIsFriend(i))
          ? r
          : r.replace(this.m_regexBannedWords, (a) =>
              this.m_regexCleanWords && a.search(this.m_regexCleanWords) == 0
                ? a
                : this.CreateProfanityReplacement(a.length),
            )
      );
    }
  };
T([J], De.prototype, "m_TextFilterPreferences", 2),
  T([J], De.prototype, "m_mapPlayerCache", 2),
  T([J], De.prototype, "m_regexBannedWords", 2),
  T([J], De.prototype, "m_regexCleanWords", 2),
  T([J], De.prototype, "m_bInitialized", 2),
  T([ke], De.prototype, "Init", 1),
  T([_e], De.prototype, "OnTextFilterDictionaryChanged", 1),
  T([ke], De.prototype, "UpdateCommunityPreferences", 1),
  T([ke], De.prototype, "BRebuildFilter", 1);
var Np;
function sc() {
  if (!Np) {
    let t = new Set(),
      e = { sessionid: w.SESSIONID, origin: ur() };
    Dt.default
      .get(w.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist", {
        params: e,
        withCredentials: !0,
      })
      .then((r) => {
        for (let i of r.data.friendslist?.friends ?? [])
          Jp(i.efriendrelationship) &&
            t.add(new pe(i.ulfriendid).GetAccountID());
      }),
      (Np = (r) => t.has(r));
  }
  return Np;
}
var Yr = null,
  zp = !1;
function wg() {
  return Yr || (Yr = new De({ BIsFriend: sc() })), Yr;
}
function nc() {
  let t = We(),
    e = Ru(),
    r = ri(() => wg().m_bInitialized);
  return (
    !r &&
      !zp &&
      ((zp = !0), Yr.Init(je.accountid, t, e).finally(() => (zp = !1))),
    [r, Yr]
  );
}
var Y = K(Ie()),
  ac = { 3: xg, 8: Dg, 5: zg, 4: Ng, 2: Eg, 9: jg, 12: Hg, 22: qg };
function Ig(t) {
  let e = null;
  return No(t) ? (e = Tg) : Eo(t) ? (e = kg) : ac[t] && (e = ac[t]), e;
}
function oc(t) {
  let { rollup: e, uimode: r, location: i } = t,
    a = Ig(e.type);
  return a
    ? (0, Y.jsx)(Jo, {
        controller: "notification",
        method: Zp(r),
        submethod: Xp(i),
        children: (0, Y.jsx)(a, { ...t }),
      })
    : null;
}
function kg(t) {
  let {
      rollup: e,
      onNotificationClick: r,
      location: i,
      uimode: a,
      onHide: o,
    } = t,
    l = bd(e.item.notification_type, e.item.body_data),
    p = typeof l?.image == "number",
    [u] = rr(p ? l.image : 0, { include_assets: !0 }),
    y = Nu(e.type).replace("k_ESteamNotificationType_", "")?.toLowerCase(),
    C = Kp(l?.link ?? "#", y),
    M = () =>
      r(() => {
        l?.link && C && window.location.assign(C);
      }, e.item),
    k = (B) => r(() => {}, e.item, B);
  return (0, Y.jsx)("a", {
    href: l?.link ? C : "#",
    onMouseDown: k,
    children: (0, Y.jsx)(Od, {
      icon: Ud(e.type),
      onActivate: M,
      fallbackLogo: (0, Y.jsx)(He, {}),
      location: i,
      eUIMode: a,
      data: l,
      timestamp: e.timestamp,
      nUnread: e.rgunread.length,
      app: u,
      bNewIndicator: Qe(e.item),
      onHide: o,
    }),
  });
}
function Hg(t) {
  let {
      rollup: e,
      onNotificationClick: r,
      location: i,
      uimode: a,
      onHide: o,
    } = t,
    l = `${w.COMMUNITY_BASE_URL}my/gamenotifications/`,
    p = () => r(() => window.location.assign(l), e.item),
    u = (M) => r(() => {}, e.item, M),
    y = dt(e),
    [C] = rr(y.appid, { include_assets: !0 });
  return (0, Y.jsx)("a", {
    href: l,
    onMouseDown: u,
    children: (0, Y.jsx)(Qd, {
      icon: (0, Y.jsx)(He, {}),
      fallbackLogo: (0, Y.jsx)(si, {}),
      onActivate: p,
      location: i,
      eUIMode: a,
      data: y,
      timestamp: e.timestamp,
      nUnread: e.rgunread.length,
      app: C,
      bNewIndicator: Qe(e.item),
      onHide: o,
    }),
  });
}
function Ag(t) {
  let {
      steamid: e,
      url: r,
      strTitleLoc: i,
      strBodyLoc: a,
      rollup: o,
      onNotificationClick: l,
      location: p,
      uimode: u,
      onHide: y,
    } = t,
    { data: C } = bt(e),
    M = (h) => l(() => {}, o.item, h),
    k = () => l(() => window.location.assign(r), o.item);
  if (!a) return null;
  let B = !C,
    x = q(i, C?.m_strPlayerName ?? ""),
    H = q(a, C?.m_strPlayerName ?? "");
  return (0, Y.jsx)("a", {
    href: r,
    onMouseDown: M,
    children: (0, Y.jsx)(ap, {
      title: x,
      body: H,
      bDataLoading: B,
      logoUrl: C?.avatar_url_medium,
      icon: (0, Y.jsx)(He, {}),
      onActivate: k,
      location: p,
      eUIMode: u,
      timestamp: o.timestamp,
      nUnread: o.rgunread.length,
      bNewIndicator: Qe(o.item),
      onHide: y,
    }),
  });
}
function Tg(t) {
  let e = Md(t.rollup.type, t.rollup.item.body_data);
  if (!e) return null;
  let { strTitleLoc: r, strBodyLoc: i, strUrl: a, steamid: o } = e;
  return !o || !r || !i
    ? null
    : (0, Y.jsx)(Ag, {
        steamid: o,
        url: a,
        strTitleLoc: r,
        strBodyLoc: i,
        ...t,
      });
}
function jg(t) {
  let {
      rollup: e,
      onNotificationClick: r,
      location: i,
      uimode: a,
      onHide: o,
    } = t,
    l = Ee(),
    p = dt(e),
    u = `${w.COMMUNITY_BASE_URL}profiles/${l}/tradeoffers`,
    y = () => r(() => window.location.assign(u), e.item),
    C = (B) => r(() => {}, e.item, B),
    M = pe.InitFromAccountID(p),
    { data: k } = bt(M.GetAccountID());
  return (0, Y.jsx)("a", {
    href: u,
    onMouseDown: C,
    children: (0, Y.jsx)(Ld, {
      logo: (0, Y.jsx)(He, {}),
      icon: (0, Y.jsx)(li, {}),
      onActivate: y,
      location: i,
      eUIMode: a,
      timestamp: e.timestamp,
      nUnread: e.rgunread.length,
      displayName: k?.m_strPlayerName,
      bNewIndicator: Qe(e.item),
      onHide: o,
    }),
  });
}
function Eg(t) {
  let {
      rollup: e,
      onNotificationClick: r,
      location: i,
      uimode: a,
      onHide: o,
    } = t,
    l = Ee(),
    p = `${w.COMMUNITY_BASE_URL}profiles/${l}/inventory/#pending_gifts`,
    u = () => r(() => window.location.assign(p), e.item),
    y = (B) => r(() => {}, e.item, B),
    C = dt(e),
    M = pe.InitFromAccountID(C),
    { data: k } = bt(M.GetAccountID());
  return (0, Y.jsx)("a", {
    href: p,
    onMouseDown: y,
    children: (0, Y.jsx)(Vd, {
      logo: (0, Y.jsx)(He, {}),
      icon: (0, Y.jsx)(ni, {}),
      onActivate: u,
      location: i,
      eUIMode: a,
      timestamp: e.timestamp,
      nUnread: e.rgunread.length,
      senderName: k?.m_strPlayerName,
      bNewIndicator: Qe(e.item),
      onHide: o,
    }),
  });
}
function qg(t) {
  let {
      rollup: e,
      onNotificationClick: r,
      location: i,
      uimode: a,
      onHide: o,
    } = t,
    l = dt(e),
    { data: p } = bt(l.responder_steamid),
    u = l.package_id > 0 ? l.package_id : l.bundle_id,
    y = l.package_id > 0 ? 1 : 2,
    [C] = Sd(u, y, { include_basic_info: !0, include_assets: !0 }),
    M = C ? `app/${C.GetAppID()}` : "",
    k = `${w.STORE_BASE_URL}${M}`,
    B = () => r(() => window.location.assign(k), e.item),
    x = (U) => r(() => {}, e.item, U),
    H = !p || !C,
    h = q("#SteamNotifications_RequestedGameAddedTitle"),
    D = C
      ? q("#SteamNotifications_RequestedGameAddedBody", C.GetName() ?? "")
      : "";
  return (0, Y.jsx)("a", {
    href: k,
    onMouseDown: x,
    children: (0, Y.jsx)(ap, {
      title: h,
      body: D,
      bDataLoading: H,
      logoUrl: p?.avatar_url_medium,
      icon: (0, Y.jsx)(He, {}),
      onActivate: B,
      location: i,
      eUIMode: a,
      timestamp: e.timestamp,
      nUnread: e.rgunread.length,
      bNewIndicator: Qe(e.item),
      onHide: o,
    }),
  });
}
function Ng(t) {
  let {
      rollup: e,
      onNotificationClick: r,
      location: i,
      uimode: a,
      onHide: o,
    } = t,
    l = Ee(),
    p = We(),
    u = fd(e.item, l, p),
    y = dt(e),
    C = `${w.COMMUNITY_BASE_URL}profiles/${l}/inventory`;
  return (0, Y.jsx)("a", {
    href: C,
    onMouseDown: (B) => r(() => {}, e.item, B),
    children: (0, Y.jsx)(Jd, {
      icon: (0, Y.jsx)(ai, {}),
      fallbackLogo: (0, Y.jsx)(He, {}),
      onActivate: () => r(() => window.location.assign(C), e.item),
      location: i,
      eUIMode: a,
      data: y,
      timestamp: e.timestamp,
      nUnread: e.rgunread.length,
      itemState: u,
      bNewIndicator: Qe(e.item),
      onHide: o,
    }),
  });
}
function zg(t) {
  let {
      rollup: e,
      onNotificationClick: r,
      location: i,
      uimode: a,
      onHide: o,
    } = t,
    l = Ee(),
    p = `${w.COMMUNITY_BASE_URL}profiles/${l}/friends/pending`,
    u = () => r(() => window.location.assign(p), e.item),
    y = (k) => r(() => {}, e.item, k),
    C = dt(e),
    { data: M } = bt(C.requestorID);
  return (0, Y.jsx)("a", {
    href: p,
    onMouseDown: y,
    children: (0, Y.jsx)(Kd, {
      fallbackLogo: (0, Y.jsx)(bu, {}),
      icon: (0, Y.jsx)(oi, {}),
      onActivate: u,
      location: i,
      eUIMode: a,
      data: C,
      timestamp: e.timestamp,
      nUnread: e.rgunread.length,
      requestorAvatarURL: M?.avatar_url_medium,
      requestorName: M?.m_strPlayerName,
      bNewIndicator: Qe(e.item),
      onHide: o,
    }),
  });
}
function xg(t) {
  let {
      rollup: e,
      onNotificationClick: r,
      location: i,
      uimode: a,
      onHide: o,
    } = t,
    l = dt(e),
    p = Ee(),
    u = w.COMMUNITY_BASE_URL + e.url,
    y = () => r(() => window.location.assign(u), e.item),
    C = (Fe) => {
      r(() => {}, e.item, Fe);
    },
    M = yd(l) ? l?.account_steam_id?.GetAccountID() : null,
    { data: k } = bt(M),
    B = Cd(l) ? l?.owner_steam_id?.GetAccountID() : null,
    { data: x } = bt(B),
    [H] = rr(l.json_data?.app_id, { include_assets: !0 }),
    [h, D] = nc(),
    U = h ? D.FilterText(l.account_steam_id.GetAccountID(), l.title) : "",
    re = h ? D.FilterText(l.account_steam_id.GetAccountID(), l.comment) : "";
  return (0, Y.jsx)("a", {
    href: u,
    onMouseDown: C,
    children: (0, Y.jsx)($d, {
      fallbackLogo: (0, Y.jsx)(He, {}),
      icon: (0, Y.jsx)(pi, {}),
      onActivate: y,
      location: i,
      currentUserSteamID: p,
      eUIMode: a,
      data: l,
      timestamp: e.timestamp,
      nUnread: e.rgunread.length,
      postedByAvatarURL: k?.avatar_url_medium,
      postedByDisplayName: k?.m_strPlayerName,
      ownerDisplayName: x?.m_strPlayerName,
      bNewIndicator: Qe(e.item),
      app: H,
      onHide: o,
      commentTitle: U,
      commentBody: re,
      bLoading: !h,
    }),
  });
}
function Dg(t) {
  let {
      rollup: e,
      onNotificationClick: r,
      location: i,
      uimode: a,
      onHide: o,
    } = t,
    l = dt(e),
    [p] = rr(l.appid, { include_assets: !0 }),
    [u, y] = (0, Ts.useState)(""),
    C = Ee();
  return (
    (0, Ts.useEffect)(() => {
      if (l.count > 1 && l.appids?.length)
        return y(
          w.STORE_BASE_URL +
            `wishlist/profiles/${C}/?wng=${l.appids.toString()}#sort=discount`,
        );
      if (p) return y(p.GetStorePageURL());
      let B = l.appid ? `?appid=${l.appid}` : "";
      y(w.STORE_BASE_URL + `wishlist/profiles/${C}/${B}#sort=discount`);
    }, [l, p, C]),
    (0, Y.jsx)("a", {
      href: u,
      onMouseDown: (B) => r(() => {}, e.item, B),
      children: (0, Y.jsx)(Yd, {
        fallbackLogo: (0, Y.jsx)(He, {}),
        icon: (0, Y.jsx)(ui, {}),
        onActivate: () => r(() => window.location.assign(u), e.item),
        app: p,
        location: i,
        data: l,
        timestamp: e.timestamp,
        nUnread: e.rgunread.length,
        eUIMode: a,
        bNewIndicator: Qe(e.item),
        onHide: o,
      }),
    })
  );
}
function lc(t) {
  let { url: e, count: r, icon: i, strLocToken: a, eFeature: o } = t,
    l = qu(o);
  return !r || l
    ? null
    : (0, Y.jsx)("a", {
        href: e,
        className: hd.WebPinnedNotification,
        children: (0, Y.jsx)(jd, {
          icon: (0, Y.jsx)(i, {}),
          count: r,
          onActivate: () => window.location.assign(e),
          strLocToken: a,
          eUIMode: 3,
          visible: !0,
        }),
      });
}
var qs = K(Be());
var pc = K(Ie()),
  Es = class Es extends qs.Component {
    static GetScrollableClassname() {
      return "vt-scrollable";
    }
    m_observer = null;
    m_refElement = qs.createRef();
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
        let a = { root: this.FindScrollableAncestor(r) };
        this.props.rootMargin && (a.rootMargin = this.props.rootMargin),
          this.props.thresholds && (a.threshold = this.props.thresholds),
          (this.m_observer = Bu(r, this.OnIntersection, a));
      }
      this.m_observer &&
        r &&
        r != this.m_elTracked &&
        (this.m_observer.observe(r), (this.m_elTracked = r));
    }
    FindScrollableAncestor(e) {
      return pu(e, (r) => {
        let i = this.props.bHorizontal
          ? window.getComputedStyle(r).overflowX
          : window.getComputedStyle(r).overflowY;
        return !!(
          i == "scroll" ||
          i == "auto" ||
          r.classList.contains(Es.GetScrollableClassname())
        );
      });
    }
    OnIntersection(e, r) {
      let i = !1;
      for (let a of e)
        if (a.isIntersecting) {
          i = !0;
          break;
        }
      this.m_bPreviouslyIntersecting != i &&
        ((this.m_bPreviouslyIntersecting = i),
        this.props.onVisibilityChange && this.props.onVisibilityChange(i),
        i && this.BTriggerOnce() && this.DestroyObserver());
    }
    render() {
      let {
        onVisibilityChange: e,
        rootMargin: r,
        trigger: i,
        bHorizontal: a,
        ...o
      } = this.props;
      return (0, pc.jsx)("div", {
        ref: this.m_refElement,
        ...o,
        children: this.props.children,
      });
    }
  };
T([_e], Es.prototype, "OnIntersection", 1);
var js = Es;
var te = K(Ie()),
  Oe = new mt(),
  Wg = Tu(function (e) {
    let { bResponsiveHeader: r, notifications: i } = e;
    Oe.m_bLoaded || Oe.ProcessNewNotificationPayload(i),
      Ye.default.useEffect(() => {
        i && !Oe.m_bLoaded && Oe.ProcessNewNotificationPayload(i);
      }, [i]);
    let a = We();
    (0, Ye.useEffect)(() => {
      Oe.setTransport(a), (window.RefreshSteamNotifications = () => Yg(a));
    }, [a]);
    let o = xp();
    return r
      ? (0, te.jsxs)(te.Fragment, {
          children: [(0, te.jsx)(mc, {}), (0, te.jsx)(Vg, {})],
        })
      : (0, te.jsx)(Ug, { nTotalUnviewed: o.nUnviewed });
  });
function xp() {
  return ri(() => ({
    notifications: Oe.m_rgNotificationRollups,
    summary: Oe.m_summary,
    loaded: Oe.m_bLoaded,
    nUnviewed: Oe.m_nUnviewed,
  }));
}
function uc() {
  let t = xp(),
    e = Ee(),
    { data: r } = Bi(e),
    i = Si(),
    a = r?.settings;
  return t.notifications.filter((o) => !Lo(o.type, a, i) && !Vo(o.item));
}
function Ug(t) {
  let { nTotalUnviewed: e } = t,
    r = Ye.default.useRef(null),
    i = uc(),
    [a, o] = Ye.default.useState(ye.AnimateBell);
  Ye.default.useEffect(() => {
    r.current ||
      ((r.current = Su(
        (0, te.jsx)(Og, { popupRef: r }),
        document.getElementById("green_envelope_menu_root"),
        {
          bPreferPopLeft: !0,
          bOverlapHorizontal: !0,
          strClassName: "GreenEnvelopeMenu",
        },
      )),
      r.current.Hide());
    let u = document.getElementById("header_notification_link");
    u && (u.style.cssText = "background-color: rgba(0,0,0,0)"),
      window.setTimeout(() => o(null), 2e3);
  }, []);
  let l = () => {
      r.current?.visible ||
        (r.current?.Show(),
        i.findIndex((y) => !y.item.viewed) != -1 && Oe.MarkAllItemsViewed());
    },
    p = Ye.default.useCallback(
      (u) => {
        !u && r.current?.visible && r.current.Hide();
      },
      [r],
    );
  return (0, te.jsx)(js, {
    trigger: "repeated",
    onVisibilityChange: p,
    children: (0, te.jsx)("button", {
      onClick: l,
      id: "green_envelope_menu_root",
      className: ge(ye.NotificationsButton, e ? ye.Green : ye.Grey, a),
      children: (0, te.jsx)(Au, { className: ye.SVGNotifications }),
    }),
  });
}
var Og = (t) => {
    let { popupRef: e } = t,
      r = Ye.default.useRef(null),
      [i, a] = Ye.default.useState(!1);
    Ye.default.useEffect(() => {
      a(r.current != null && r.current?.scrollHeight > r.current?.clientHeight);
    }, [r.current?.scrollHeight, i]);
    let o = i ? void 0 : ye.MenuScrollbarHidden;
    return (0, te.jsxs)("div", {
      className: ye.NotificationsMenu,
      onClick: () => e?.current?.Hide(),
      children: [
        (0, te.jsx)(Lg, {}),
        (0, te.jsxs)("div", {
          className: ge(ye.NotificationsMenuScrollable, o),
          ref: r,
          children: [
            (0, te.jsx)(mc, {}),
            (0, te.jsx)(Jg, {}),
            (0, te.jsx)($g, {}),
          ],
        }),
      ],
    });
  },
  Lg = () => {
    let t = `${w.COMMUNITY_BASE_URL}profiles/${je.steamid}/notifications`;
    return (0, te.jsxs)("div", {
      className: ge(ye.NotificationHeader),
      children: [
        (0, te.jsx)("div", {
          className: ye.AllNotificationsTitle,
          children: q("#NotificationsMenu_Title"),
        }),
        (0, te.jsx)("a", {
          href: t,
          children: (0, te.jsx)("div", {
            className: ye.AllNotificationsButton,
            children: q("#NotificationsMenu_ViewAll"),
          }),
        }),
      ],
    });
  },
  Vg = () => {
    let t = `${w.COMMUNITY_BASE_URL}profiles/${je.steamid}/notifications`;
    return (0, te.jsx)("div", {
      className: ge(ye.NotificationHeader, ye.ResponsiveViewAll),
      children: (0, te.jsx)("a", {
        href: t,
        children: (0, te.jsx)("div", {
          className: ye.AllNotificationsButton,
          children: q("#NotificationsMenu_ViewAll"),
        }),
      }),
    });
  };
function Kg(t, e, r) {
  !e.read &&
    (!r || r.button == 0 || r.button == 1) &&
    e.notification_id &&
    Oe.MarkItemRead(e.notification_id),
    t();
}
function Jg() {
  let t = uc();
  return t.length == 0
    ? null
    : (0, te.jsx)("div", {
        className: ye.NotificationsMenuEntriesContainer,
        children: t.map((e, r) =>
          (0, te.jsx)(
            oc,
            { rollup: e, onNotificationClick: Kg, uimode: 3, location: 3 },
            r,
          ),
        ),
      });
}
var Qg = [
  {
    fnUrl: () =>
      `${w.COMMUNITY_BASE_URL}profiles/${je.steamid}/inventory/#pending_gifts`,
    countItem: "pending_gifts",
    icon: ni,
    strLocToken: "#Notification_NewGiftsPinned_Body",
    feature: 1,
  },
  {
    fnUrl: () => `${w.COMMUNITY_BASE_URL}profiles/${je.steamid}/home/invites`,
    countItem: "pending_invites",
    icon: oi,
    strLocToken: "#Notification_FriendInvitePinned_Body",
    feature: 4,
  },
  {
    fnUrl: () =>
      `${w.COMMUNITY_BASE_URL}profiles/${je.steamid}/notifications#comments`,
    countItem: "comments",
    icon: pi,
    strLocToken: "#Notification_NewCommentPinned_Body",
    feature: 2,
  },
  {
    fnUrl: () => `${w.COMMUNITY_BASE_URL}profiles/${je.steamid}/inventory`,
    countItem: "inventory_items",
    icon: ai,
    strLocToken: "#Notification_NewItemAnnouncementPinned_Body",
    feature: 3,
  },
  {
    fnUrl: () => `${w.COMMUNITY_BASE_URL}profiles/${je.steamid}/tradeoffers`,
    countItem: "trade_offers",
    icon: li,
    strLocToken: "#Notification_NewTradeOffersPinned_Body",
    feature: 6,
  },
  {
    fnUrl: () =>
      `${w.COMMUNITY_BASE_URL}profiles/${je.steamid}/gamenotifications`,
    countItem: "async_game_updates",
    icon: si,
    strLocToken: "#Notification_NewAsyncGamePinned_Body",
  },
  {
    fnUrl: () => `${w.COMMUNITY_BASE_URL}my/moderatormessages`,
    countItem: "moderator_messages",
    icon: Hu,
    strLocToken: "#Notification_NewModeratorMessagePinned_Body",
    feature: 2,
  },
  {
    fnUrl: () => `${w.HELP_BASE_URL}wizard/HelpRequests`,
    countItem: "help_request_replies",
    icon: ii,
    strLocToken: "#Notification_NewHelpRequestRepliesPinned_Body",
  },
  {
    fnUrl: () =>
      `${w.STORE_BASE_URL}account/familymanagement/join?ft=${je.steamid}`,
    countItem: "family_invites",
    icon: He,
    strLocToken: "#Notification_FamilyInvitePinned_Body",
  },
];
function mc() {
  let t = xp();
  return (0, te.jsx)(te.Fragment, {
    children: Qg.map((e) =>
      (0, te.jsx)(
        lc,
        {
          url: e.fnUrl(),
          count: t.summary[e.countItem],
          icon: e.icon,
          strLocToken: e.strLocToken,
          eFeature: e.feature,
        },
        e.countItem,
      ),
    ),
  });
}
function $g() {
  return (0, te.jsxs)("div", {
    className: ye.EmptyNotificationsCtn,
    children: [
      (0, te.jsx)("div", {
        className: ye.EmptyNotificationsTitle,
        children: q("#NotificationsList_EmptyTitle_New"),
      }),
      (0, te.jsx)("div", {
        className: ye.EmptyNotificationsBody,
        children: q("#NotificationsList_EmptyBody"),
      }),
    ],
  });
}
var bS = Wg;
async function Yg(t) {
  let e = null;
  try {
    e = await gd(t, je.steamid, Xr(w.LANGUAGE), void 0, !1, !1);
  } catch {}
  e && Oe.ProcessNewNotificationPayload(e);
}
export { Wg as GreenEnvelope, bS as default, xp as useSteamNotifications };
