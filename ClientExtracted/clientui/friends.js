/*!
 * (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 *
 */ (() => {
  var e = {
      669: (e, t, r) => {
        e.exports = r(609);
      },
      592: (e, t, r) => {
        "use strict";
        var n = r(867),
          o = r(26),
          i = r(372),
          a = r(327),
          l = r(97),
          s = r(109),
          u = r(985),
          c = r(61);
        e.exports = function (e) {
          return new Promise(function (t, r) {
            var d = e.data,
              p = e.headers,
              f = e.responseType;
            n.isFormData(d) && delete p["Content-Type"];
            var m = new XMLHttpRequest();
            if (e.auth) {
              var h = e.auth.username || "",
                _ = e.auth.password
                  ? unescape(encodeURIComponent(e.auth.password))
                  : "";
              p.Authorization = "Basic " + btoa(h + ":" + _);
            }
            var v = l(e.baseURL, e.url);
            function g() {
              if (m) {
                var n =
                    "getAllResponseHeaders" in m
                      ? s(m.getAllResponseHeaders())
                      : null,
                  i = {
                    data:
                      f && "text" !== f && "json" !== f
                        ? m.response
                        : m.responseText,
                    status: m.status,
                    statusText: m.statusText,
                    headers: n,
                    config: e,
                    request: m,
                  };
                o(t, r, i), (m = null);
              }
            }
            if (
              (m.open(
                e.method.toUpperCase(),
                a(v, e.params, e.paramsSerializer),
                !0
              ),
              (m.timeout = e.timeout),
              "onloadend" in m
                ? (m.onloadend = g)
                : (m.onreadystatechange = function () {
                    m &&
                      4 === m.readyState &&
                      (0 !== m.status ||
                        (m.responseURL &&
                          0 === m.responseURL.indexOf("file:"))) &&
                      setTimeout(g);
                  }),
              (m.onabort = function () {
                m &&
                  (r(c("Request aborted", e, "ECONNABORTED", m)), (m = null));
              }),
              (m.onerror = function () {
                r(c("Network Error", e, null, m)), (m = null);
              }),
              (m.ontimeout = function () {
                var t = "timeout of " + e.timeout + "ms exceeded";
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                  r(
                    c(
                      t,
                      e,
                      e.transitional && e.transitional.clarifyTimeoutError
                        ? "ETIMEDOUT"
                        : "ECONNABORTED",
                      m
                    )
                  ),
                  (m = null);
              }),
              n.isStandardBrowserEnv())
            ) {
              var y =
                (e.withCredentials || u(v)) && e.xsrfCookieName
                  ? i.read(e.xsrfCookieName)
                  : void 0;
              y && (p[e.xsrfHeaderName] = y);
            }
            "setRequestHeader" in m &&
              n.forEach(p, function (e, t) {
                void 0 === d && "content-type" === t.toLowerCase()
                  ? delete p[t]
                  : m.setRequestHeader(t, e);
              }),
              n.isUndefined(e.withCredentials) ||
                (m.withCredentials = !!e.withCredentials),
              f && "json" !== f && (m.responseType = e.responseType),
              "function" == typeof e.onDownloadProgress &&
                m.addEventListener("progress", e.onDownloadProgress),
              "function" == typeof e.onUploadProgress &&
                m.upload &&
                m.upload.addEventListener("progress", e.onUploadProgress),
              e.cancelToken &&
                e.cancelToken.promise.then(function (e) {
                  m && (m.abort(), r(e), (m = null));
                }),
              d || (d = null),
              m.send(d);
          });
        };
      },
      609: (e, t, r) => {
        "use strict";
        var n = r(867),
          o = r(849),
          i = r(321),
          a = r(185);
        function l(e) {
          var t = new i(e),
            r = o(i.prototype.request, t);
          return n.extend(r, i.prototype, t), n.extend(r, t), r;
        }
        var s = l(r(655));
        (s.Axios = i),
          (s.create = function (e) {
            return l(a(s.defaults, e));
          }),
          (s.Cancel = r(263)),
          (s.CancelToken = r(972)),
          (s.isCancel = r(502)),
          (s.all = function (e) {
            return Promise.all(e);
          }),
          (s.spread = r(713)),
          (s.isAxiosError = r(268)),
          (e.exports = s),
          (e.exports.default = s);
      },
      263: (e) => {
        "use strict";
        function t(e) {
          this.message = e;
        }
        (t.prototype.toString = function () {
          return "Cancel" + (this.message ? ": " + this.message : "");
        }),
          (t.prototype.__CANCEL__ = !0),
          (e.exports = t);
      },
      972: (e, t, r) => {
        "use strict";
        var n = r(263);
        function o(e) {
          if ("function" != typeof e)
            throw new TypeError("executor must be a function.");
          var t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          var r = this;
          e(function (e) {
            r.reason || ((r.reason = new n(e)), t(r.reason));
          });
        }
        (o.prototype.throwIfRequested = function () {
          if (this.reason) throw this.reason;
        }),
          (o.source = function () {
            var e;
            return {
              token: new o(function (t) {
                e = t;
              }),
              cancel: e,
            };
          }),
          (e.exports = o);
      },
      502: (e) => {
        "use strict";
        e.exports = function (e) {
          return !(!e || !e.__CANCEL__);
        };
      },
      321: (e, t, r) => {
        "use strict";
        var n = r(867),
          o = r(327),
          i = r(782),
          a = r(572),
          l = r(185),
          s = r(875),
          u = s.validators;
        function c(e) {
          (this.defaults = e),
            (this.interceptors = { request: new i(), response: new i() });
        }
        (c.prototype.request = function (e) {
          "string" == typeof e
            ? ((e = arguments[1] || {}).url = arguments[0])
            : (e = e || {}),
            (e = l(this.defaults, e)).method
              ? (e.method = e.method.toLowerCase())
              : this.defaults.method
              ? (e.method = this.defaults.method.toLowerCase())
              : (e.method = "get");
          var t = e.transitional;
          void 0 !== t &&
            s.assertOptions(
              t,
              {
                silentJSONParsing: u.transitional(u.boolean, "1.0.0"),
                forcedJSONParsing: u.transitional(u.boolean, "1.0.0"),
                clarifyTimeoutError: u.transitional(u.boolean, "1.0.0"),
              },
              !1
            );
          var r = [],
            n = !0;
          this.interceptors.request.forEach(function (t) {
            ("function" == typeof t.runWhen && !1 === t.runWhen(e)) ||
              ((n = n && t.synchronous), r.unshift(t.fulfilled, t.rejected));
          });
          var o,
            i = [];
          if (
            (this.interceptors.response.forEach(function (e) {
              i.push(e.fulfilled, e.rejected);
            }),
            !n)
          ) {
            var c = [a, void 0];
            for (
              Array.prototype.unshift.apply(c, r),
                c = c.concat(i),
                o = Promise.resolve(e);
              c.length;

            )
              o = o.then(c.shift(), c.shift());
            return o;
          }
          for (var d = e; r.length; ) {
            var p = r.shift(),
              f = r.shift();
            try {
              d = p(d);
            } catch (e) {
              f(e);
              break;
            }
          }
          try {
            o = a(d);
          } catch (e) {
            return Promise.reject(e);
          }
          for (; i.length; ) o = o.then(i.shift(), i.shift());
          return o;
        }),
          (c.prototype.getUri = function (e) {
            return (
              (e = l(this.defaults, e)),
              o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
            );
          }),
          n.forEach(["delete", "get", "head", "options"], function (e) {
            c.prototype[e] = function (t, r) {
              return this.request(
                l(r || {}, { method: e, url: t, data: (r || {}).data })
              );
            };
          }),
          n.forEach(["post", "put", "patch"], function (e) {
            c.prototype[e] = function (t, r, n) {
              return this.request(l(n || {}, { method: e, url: t, data: r }));
            };
          }),
          (e.exports = c);
      },
      782: (e, t, r) => {
        "use strict";
        var n = r(867);
        function o() {
          this.handlers = [];
        }
        (o.prototype.use = function (e, t, r) {
          return (
            this.handlers.push({
              fulfilled: e,
              rejected: t,
              synchronous: !!r && r.synchronous,
              runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }),
          (o.prototype.eject = function (e) {
            this.handlers[e] && (this.handlers[e] = null);
          }),
          (o.prototype.forEach = function (e) {
            n.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }),
          (e.exports = o);
      },
      97: (e, t, r) => {
        "use strict";
        var n = r(793),
          o = r(303);
        e.exports = function (e, t) {
          return e && !n(t) ? o(e, t) : t;
        };
      },
      61: (e, t, r) => {
        "use strict";
        var n = r(481);
        e.exports = function (e, t, r, o, i) {
          var a = new Error(e);
          return n(a, t, r, o, i);
        };
      },
      572: (e, t, r) => {
        "use strict";
        var n = r(867),
          o = r(527),
          i = r(502),
          a = r(655);
        function l(e) {
          e.cancelToken && e.cancelToken.throwIfRequested();
        }
        e.exports = function (e) {
          return (
            l(e),
            (e.headers = e.headers || {}),
            (e.data = o.call(e, e.data, e.headers, e.transformRequest)),
            (e.headers = n.merge(
              e.headers.common || {},
              e.headers[e.method] || {},
              e.headers
            )),
            n.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              function (t) {
                delete e.headers[t];
              }
            ),
            (e.adapter || a.adapter)(e).then(
              function (t) {
                return (
                  l(e),
                  (t.data = o.call(e, t.data, t.headers, e.transformResponse)),
                  t
                );
              },
              function (t) {
                return (
                  i(t) ||
                    (l(e),
                    t &&
                      t.response &&
                      (t.response.data = o.call(
                        e,
                        t.response.data,
                        t.response.headers,
                        e.transformResponse
                      ))),
                  Promise.reject(t)
                );
              }
            )
          );
        };
      },
      481: (e) => {
        "use strict";
        e.exports = function (e, t, r, n, o) {
          return (
            (e.config = t),
            r && (e.code = r),
            (e.request = n),
            (e.response = o),
            (e.isAxiosError = !0),
            (e.toJSON = function () {
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
              };
            }),
            e
          );
        };
      },
      185: (e, t, r) => {
        "use strict";
        var n = r(867);
        e.exports = function (e, t) {
          t = t || {};
          var r = {},
            o = ["url", "method", "data"],
            i = ["headers", "auth", "proxy", "params"],
            a = [
              "baseURL",
              "transformRequest",
              "transformResponse",
              "paramsSerializer",
              "timeout",
              "timeoutMessage",
              "withCredentials",
              "adapter",
              "responseType",
              "xsrfCookieName",
              "xsrfHeaderName",
              "onUploadProgress",
              "onDownloadProgress",
              "decompress",
              "maxContentLength",
              "maxBodyLength",
              "maxRedirects",
              "transport",
              "httpAgent",
              "httpsAgent",
              "cancelToken",
              "socketPath",
              "responseEncoding",
            ],
            l = ["validateStatus"];
          function s(e, t) {
            return n.isPlainObject(e) && n.isPlainObject(t)
              ? n.merge(e, t)
              : n.isPlainObject(t)
              ? n.merge({}, t)
              : n.isArray(t)
              ? t.slice()
              : t;
          }
          function u(o) {
            n.isUndefined(t[o])
              ? n.isUndefined(e[o]) || (r[o] = s(void 0, e[o]))
              : (r[o] = s(e[o], t[o]));
          }
          n.forEach(o, function (e) {
            n.isUndefined(t[e]) || (r[e] = s(void 0, t[e]));
          }),
            n.forEach(i, u),
            n.forEach(a, function (o) {
              n.isUndefined(t[o])
                ? n.isUndefined(e[o]) || (r[o] = s(void 0, e[o]))
                : (r[o] = s(void 0, t[o]));
            }),
            n.forEach(l, function (n) {
              n in t
                ? (r[n] = s(e[n], t[n]))
                : n in e && (r[n] = s(void 0, e[n]));
            });
          var c = o.concat(i).concat(a).concat(l),
            d = Object.keys(e)
              .concat(Object.keys(t))
              .filter(function (e) {
                return -1 === c.indexOf(e);
              });
          return n.forEach(d, u), r;
        };
      },
      26: (e, t, r) => {
        "use strict";
        var n = r(61);
        e.exports = function (e, t, r) {
          var o = r.config.validateStatus;
          r.status && o && !o(r.status)
            ? t(
                n(
                  "Request failed with status code " + r.status,
                  r.config,
                  null,
                  r.request,
                  r
                )
              )
            : e(r);
        };
      },
      527: (e, t, r) => {
        "use strict";
        var n = r(867),
          o = r(655);
        e.exports = function (e, t, r) {
          var i = this || o;
          return (
            n.forEach(r, function (r) {
              e = r.call(i, e, t);
            }),
            e
          );
        };
      },
      655: (e, t, r) => {
        "use strict";
        var n = r(867),
          o = r(16),
          i = r(481),
          a = { "Content-Type": "application/x-www-form-urlencoded" };
        function l(e, t) {
          !n.isUndefined(e) &&
            n.isUndefined(e["Content-Type"]) &&
            (e["Content-Type"] = t);
        }
        var s,
          u = {
            transitional: {
              silentJSONParsing: !0,
              forcedJSONParsing: !0,
              clarifyTimeoutError: !1,
            },
            adapter:
              (("undefined" != typeof XMLHttpRequest ||
                ("undefined" != typeof process &&
                  "[object process]" ===
                    Object.prototype.toString.call(process))) &&
                (s = r(592)),
              s),
            transformRequest: [
              function (e, t) {
                return (
                  o(t, "Accept"),
                  o(t, "Content-Type"),
                  n.isFormData(e) ||
                  n.isArrayBuffer(e) ||
                  n.isBuffer(e) ||
                  n.isStream(e) ||
                  n.isFile(e) ||
                  n.isBlob(e)
                    ? e
                    : n.isArrayBufferView(e)
                    ? e.buffer
                    : n.isURLSearchParams(e)
                    ? (l(t, "application/x-www-form-urlencoded;charset=utf-8"),
                      e.toString())
                    : n.isObject(e) ||
                      (t && "application/json" === t["Content-Type"])
                    ? (l(t, "application/json"),
                      (function (e, t, r) {
                        if (n.isString(e))
                          try {
                            return (t || JSON.parse)(e), n.trim(e);
                          } catch (e) {
                            if ("SyntaxError" !== e.name) throw e;
                          }
                        return (r || JSON.stringify)(e);
                      })(e))
                    : e
                );
              },
            ],
            transformResponse: [
              function (e) {
                var t = this.transitional,
                  r = t && t.silentJSONParsing,
                  o = t && t.forcedJSONParsing,
                  a = !r && "json" === this.responseType;
                if (a || (o && n.isString(e) && e.length))
                  try {
                    return JSON.parse(e);
                  } catch (e) {
                    if (a) {
                      if ("SyntaxError" === e.name)
                        throw i(e, this, "E_JSON_PARSE");
                      throw e;
                    }
                  }
                return e;
              },
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            validateStatus: function (e) {
              return e >= 200 && e < 300;
            },
          };
        (u.headers = {
          common: { Accept: "application/json, text/plain, */*" },
        }),
          n.forEach(["delete", "get", "head"], function (e) {
            u.headers[e] = {};
          }),
          n.forEach(["post", "put", "patch"], function (e) {
            u.headers[e] = n.merge(a);
          }),
          (e.exports = u);
      },
      849: (e) => {
        "use strict";
        e.exports = function (e, t) {
          return function () {
            for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
              r[n] = arguments[n];
            return e.apply(t, r);
          };
        };
      },
      327: (e, t, r) => {
        "use strict";
        var n = r(867);
        function o(e) {
          return encodeURIComponent(e)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
        }
        e.exports = function (e, t, r) {
          if (!t) return e;
          var i;
          if (r) i = r(t);
          else if (n.isURLSearchParams(t)) i = t.toString();
          else {
            var a = [];
            n.forEach(t, function (e, t) {
              null != e &&
                (n.isArray(e) ? (t += "[]") : (e = [e]),
                n.forEach(e, function (e) {
                  n.isDate(e)
                    ? (e = e.toISOString())
                    : n.isObject(e) && (e = JSON.stringify(e)),
                    a.push(o(t) + "=" + o(e));
                }));
            }),
              (i = a.join("&"));
          }
          if (i) {
            var l = e.indexOf("#");
            -1 !== l && (e = e.slice(0, l)),
              (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
          }
          return e;
        };
      },
      303: (e) => {
        "use strict";
        e.exports = function (e, t) {
          return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        };
      },
      372: (e, t, r) => {
        "use strict";
        var n = r(867);
        e.exports = n.isStandardBrowserEnv()
          ? {
              write: function (e, t, r, o, i, a) {
                var l = [];
                l.push(e + "=" + encodeURIComponent(t)),
                  n.isNumber(r) &&
                    l.push("expires=" + new Date(r).toGMTString()),
                  n.isString(o) && l.push("path=" + o),
                  n.isString(i) && l.push("domain=" + i),
                  !0 === a && l.push("secure"),
                  (document.cookie = l.join("; "));
              },
              read: function (e) {
                var t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove: function (e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
      },
      793: (e) => {
        "use strict";
        e.exports = function (e) {
          return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
        };
      },
      268: (e) => {
        "use strict";
        e.exports = function (e) {
          return "object" == typeof e && !0 === e.isAxiosError;
        };
      },
      985: (e, t, r) => {
        "use strict";
        var n = r(867);
        e.exports = n.isStandardBrowserEnv()
          ? (function () {
              var e,
                t = /(msie|trident)/i.test(navigator.userAgent),
                r = document.createElement("a");
              function o(e) {
                var n = e;
                return (
                  t && (r.setAttribute("href", n), (n = r.href)),
                  r.setAttribute("href", n),
                  {
                    href: r.href,
                    protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                    host: r.host,
                    search: r.search ? r.search.replace(/^\?/, "") : "",
                    hash: r.hash ? r.hash.replace(/^#/, "") : "",
                    hostname: r.hostname,
                    port: r.port,
                    pathname:
                      "/" === r.pathname.charAt(0)
                        ? r.pathname
                        : "/" + r.pathname,
                  }
                );
              }
              return (
                (e = o(window.location.href)),
                function (t) {
                  var r = n.isString(t) ? o(t) : t;
                  return r.protocol === e.protocol && r.host === e.host;
                }
              );
            })()
          : function () {
              return !0;
            };
      },
      16: (e, t, r) => {
        "use strict";
        var n = r(867);
        e.exports = function (e, t) {
          n.forEach(e, function (r, n) {
            n !== t &&
              n.toUpperCase() === t.toUpperCase() &&
              ((e[t] = r), delete e[n]);
          });
        };
      },
      109: (e, t, r) => {
        "use strict";
        var n = r(867),
          o = [
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
        e.exports = function (e) {
          var t,
            r,
            i,
            a = {};
          return e
            ? (n.forEach(e.split("\n"), function (e) {
                if (
                  ((i = e.indexOf(":")),
                  (t = n.trim(e.substr(0, i)).toLowerCase()),
                  (r = n.trim(e.substr(i + 1))),
                  t)
                ) {
                  if (a[t] && o.indexOf(t) >= 0) return;
                  a[t] =
                    "set-cookie" === t
                      ? (a[t] ? a[t] : []).concat([r])
                      : a[t]
                      ? a[t] + ", " + r
                      : r;
                }
              }),
              a)
            : a;
        };
      },
      713: (e) => {
        "use strict";
        e.exports = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        };
      },
      875: (e, t, r) => {
        "use strict";
        var n = r(593),
          o = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach(
          function (e, t) {
            o[e] = function (r) {
              return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
            };
          }
        );
        var i = {},
          a = n.version.split(".");
        function l(e, t) {
          for (
            var r = t ? t.split(".") : a, n = e.split("."), o = 0;
            o < 3;
            o++
          ) {
            if (r[o] > n[o]) return !0;
            if (r[o] < n[o]) return !1;
          }
          return !1;
        }
        (o.transitional = function (e, t, r) {
          var o = t && l(t);
          function a(e, t) {
            return (
              "[Axios v" +
              n.version +
              "] Transitional option '" +
              e +
              "'" +
              t +
              (r ? ". " + r : "")
            );
          }
          return function (r, n, l) {
            if (!1 === e) throw new Error(a(n, " has been removed in " + t));
            return (
              o &&
                !i[n] &&
                ((i[n] = !0),
                console.warn(
                  a(
                    n,
                    " has been deprecated since v" +
                      t +
                      " and will be removed in the near future"
                  )
                )),
              !e || e(r, n, l)
            );
          };
        }),
          (e.exports = {
            isOlderVersion: l,
            assertOptions: function (e, t, r) {
              if ("object" != typeof e)
                throw new TypeError("options must be an object");
              for (var n = Object.keys(e), o = n.length; o-- > 0; ) {
                var i = n[o],
                  a = t[i];
                if (a) {
                  var l = e[i],
                    s = void 0 === l || a(l, i, e);
                  if (!0 !== s)
                    throw new TypeError("option " + i + " must be " + s);
                } else if (!0 !== r) throw Error("Unknown option " + i);
              }
            },
            validators: o,
          });
      },
      867: (e, t, r) => {
        "use strict";
        var n = r(849),
          o = Object.prototype.toString;
        function i(e) {
          return "[object Array]" === o.call(e);
        }
        function a(e) {
          return void 0 === e;
        }
        function l(e) {
          return null !== e && "object" == typeof e;
        }
        function s(e) {
          if ("[object Object]" !== o.call(e)) return !1;
          var t = Object.getPrototypeOf(e);
          return null === t || t === Object.prototype;
        }
        function u(e) {
          return "[object Function]" === o.call(e);
        }
        function c(e, t) {
          if (null != e)
            if (("object" != typeof e && (e = [e]), i(e)))
              for (var r = 0, n = e.length; r < n; r++)
                t.call(null, e[r], r, e);
            else
              for (var o in e)
                Object.prototype.hasOwnProperty.call(e, o) &&
                  t.call(null, e[o], o, e);
        }
        e.exports = {
          isArray: i,
          isArrayBuffer: function (e) {
            return "[object ArrayBuffer]" === o.call(e);
          },
          isBuffer: function (e) {
            return (
              null !== e &&
              !a(e) &&
              null !== e.constructor &&
              !a(e.constructor) &&
              "function" == typeof e.constructor.isBuffer &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: function (e) {
            return "undefined" != typeof FormData && e instanceof FormData;
          },
          isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && e.buffer instanceof ArrayBuffer;
          },
          isString: function (e) {
            return "string" == typeof e;
          },
          isNumber: function (e) {
            return "number" == typeof e;
          },
          isObject: l,
          isPlainObject: s,
          isUndefined: a,
          isDate: function (e) {
            return "[object Date]" === o.call(e);
          },
          isFile: function (e) {
            return "[object File]" === o.call(e);
          },
          isBlob: function (e) {
            return "[object Blob]" === o.call(e);
          },
          isFunction: u,
          isStream: function (e) {
            return l(e) && u(e.pipe);
          },
          isURLSearchParams: function (e) {
            return (
              "undefined" != typeof URLSearchParams &&
              e instanceof URLSearchParams
            );
          },
          isStandardBrowserEnv: function () {
            return (
              ("undefined" == typeof navigator ||
                ("ReactNative" !== navigator.product &&
                  "NativeScript" !== navigator.product &&
                  "NS" !== navigator.product)) &&
              "undefined" != typeof window &&
              "undefined" != typeof document
            );
          },
          forEach: c,
          merge: function e() {
            var t = {};
            function r(r, n) {
              s(t[n]) && s(r)
                ? (t[n] = e(t[n], r))
                : s(r)
                ? (t[n] = e({}, r))
                : i(r)
                ? (t[n] = r.slice())
                : (t[n] = r);
            }
            for (var n = 0, o = arguments.length; n < o; n++)
              c(arguments[n], r);
            return t;
          },
          extend: function (e, t, r) {
            return (
              c(t, function (t, o) {
                e[o] = r && "function" == typeof t ? n(t, r) : t;
              }),
              e
            );
          },
          trim: function (e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
          },
          stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
          },
        };
      },
      808: (e) => {
        e.exports = {
          EmoticonBow: "shared_svg_library_EmoticonBow_3pZfA",
          EmoticonBow_st0: "shared_svg_library_EmoticonBow_st0_qBW44",
          EmoticonBow_st1: "shared_svg_library_EmoticonBow_st1_23IlE",
          SteamDeckCompatInfo: "shared_svg_library_SteamDeckCompatInfo_3TbPV",
          SteamDeckCompatLogo: "shared_svg_library_SteamDeckCompatLogo_Q6MwZ",
          SteamDeckCompatIcon: "shared_svg_library_SteamDeckCompatIcon_2hKXi",
          SteamDeckCompatVerified:
            "shared_svg_library_SteamDeckCompatVerified_1PZiH",
          SteamDeckCompatPlayable:
            "shared_svg_library_SteamDeckCompatPlayable_uTOLJ",
          SteamDeckCompatUnsupported:
            "shared_svg_library_SteamDeckCompatUnsupported_3XLWD",
          SteamDeckCompatUnknown:
            "shared_svg_library_SteamDeckCompatUnknown_53DS6",
        };
      },
      817: (e) => {
        e.exports = {
          LoadingWrapper: "throbber_LoadingWrapper_1HyRg",
          Static: "throbber_Static_18ooy",
          none: "throbber_none_3dXVh",
          bottomCircle: "throbber_bottomCircle_25ip-",
          noString: "throbber_noString_25hUI",
          Throbber: "throbber_Throbber_v2Wva",
          throbber_small: "throbber_throbber_small_4dIL2",
          throbber_medium: "throbber_throbber_medium_QXu8P",
          throbber_large: "throbber_throbber_large_3nisx",
          throbber_center_wrapper: "throbber_throbber_center_wrapper_3hIjC",
          ThrobberText: "throbber_ThrobberText_2LAFw",
          blur: "throbber_blur_1Zb5U",
          ThrobberRoundLoop: "throbber_ThrobberRoundLoop_1PbAa",
          roundOuterOutline: "throbber_roundOuterOutline_TrexM",
          roundOuter: "throbber_roundOuter_5ck73",
          roundFill: "throbber_roundFill_3rrUj",
          ThrobberFillLoop: "throbber_ThrobberFillLoop_HAZ1M",
          topCircle: "throbber_topCircle__EJ7b",
          circlePulse: "throbber_circlePulse_379p5",
          ThrobberTopCircleLoop: "throbber_ThrobberTopCircleLoop_2GFtS",
          ThrobberBottomCircleLoop: "throbber_ThrobberBottomCircleLoop_7qnpn",
          roundThrobber15: "throbber_roundThrobber15_3Xmey",
          roundThrobber14: "throbber_roundThrobber14_3Bz3S",
          roundThrobber13: "throbber_roundThrobber13_3He3o",
          roundThrobber12: "throbber_roundThrobber12_1wN9D",
          roundThrobber11: "throbber_roundThrobber11_6i7GD",
          roundThrobber10: "throbber_roundThrobber10_12Nu_",
          roundThrobber09: "throbber_roundThrobber09_2tK3N",
          roundThrobber08: "throbber_roundThrobber08_3ARjZ",
          roundThrobber07: "throbber_roundThrobber07_2O6v6",
          roundThrobber06: "throbber_roundThrobber06_3IwAT",
          roundThrobber05: "throbber_roundThrobber05_2PAW0",
          roundThrobber04: "throbber_roundThrobber04_3GvQ1",
          roundThrobber03: "throbber_roundThrobber03_SCH1y",
          roundThrobber02: "throbber_roundThrobber02_1OqfY",
          roundThrobber01: "throbber_roundThrobber01_1VNop",
          ThrobberRoundLoopThickness:
            "throbber_ThrobberRoundLoopThickness_2cif1",
          throbber_xlarge: "throbber_throbber_xlarge_3LxJj",
          throbber_xxlarge: "throbber_throbber_xxlarge_1mUb9",
          ThrobberDelayAppear: "throbber_ThrobberDelayAppear_25iLt",
          Visible: "throbber_Visible_19Akj",
          NewThrobber: "throbber_NewThrobber_1Z02a",
        };
      },
      418: (e) => {
        "use strict";
        /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var t = Object.getOwnPropertySymbols,
          r = Object.prototype.hasOwnProperty,
          n = Object.prototype.propertyIsEnumerable;
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, r = 0; r < 10; r++)
              t["_" + String.fromCharCode(r)] = r;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var n = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                n[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, n)).join("")
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, o) {
              for (
                var i,
                  a,
                  l = (function (e) {
                    if (null == e)
                      throw new TypeError(
                        "Object.assign cannot be called with null or undefined"
                      );
                    return Object(e);
                  })(e),
                  s = 1;
                s < arguments.length;
                s++
              ) {
                for (var u in (i = Object(arguments[s])))
                  r.call(i, u) && (l[u] = i[u]);
                if (t) {
                  a = t(i);
                  for (var c = 0; c < a.length; c++)
                    n.call(i, a[c]) && (l[a[c]] = i[a[c]]);
                }
              }
              return l;
            };
      },
      448: (e, t, r) => {
        "use strict";
        /** @license React v16.11.0
         * react-dom.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ var n = r(294),
          o = r(418),
          i = r(840);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              r = 1;
            r < arguments.length;
            r++
          )
            t += "&args[]=" + encodeURIComponent(arguments[r]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        if (!n) throw Error(a(227));
        var l = null,
          s = {};
        function u() {
          if (l)
            for (var e in s) {
              var t = s[e],
                r = l.indexOf(e);
              if (!(-1 < r)) throw Error(a(96, e));
              if (!d[r]) {
                if (!t.extractEvents) throw Error(a(97, e));
                for (var n in ((d[r] = t), (r = t.eventTypes))) {
                  var o = void 0,
                    i = r[n],
                    u = t,
                    f = n;
                  if (p.hasOwnProperty(f)) throw Error(a(99, f));
                  p[f] = i;
                  var m = i.phasedRegistrationNames;
                  if (m) {
                    for (o in m) m.hasOwnProperty(o) && c(m[o], u, f);
                    o = !0;
                  } else
                    i.registrationName
                      ? (c(i.registrationName, u, f), (o = !0))
                      : (o = !1);
                  if (!o) throw Error(a(98, n, e));
                }
              }
            }
        }
        function c(e, t, r) {
          if (f[e]) throw Error(a(100, e));
          (f[e] = t), (m[e] = t.eventTypes[r].dependencies);
        }
        var d = [],
          p = {},
          f = {},
          m = {};
        function h(e, t, r, n, o, i, a, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(r, u);
          } catch (e) {
            this.onError(e);
          }
        }
        var _ = !1,
          v = null,
          g = !1,
          y = null,
          b = {
            onError: function (e) {
              (_ = !0), (v = e);
            },
          };
        function E(e, t, r, n, o, i, a, l, s) {
          (_ = !1), (v = null), h.apply(b, arguments);
        }
        var S = null,
          C = null,
          I = null;
        function w(e, t, r) {
          var n = e.type || "unknown-event";
          (e.currentTarget = I(r)),
            (function (e, t, r, n, o, i, l, s, u) {
              if ((E.apply(this, arguments), _)) {
                if (!_) throw Error(a(198));
                var c = v;
                (_ = !1), (v = null), g || ((g = !0), (y = c));
              }
            })(n, t, void 0, e),
            (e.currentTarget = null);
        }
        function k(e, t) {
          if (null == t) throw Error(a(30));
          return null == e
            ? t
            : Array.isArray(e)
            ? Array.isArray(t)
              ? (e.push.apply(e, t), e)
              : (e.push(t), e)
            : Array.isArray(t)
            ? [e].concat(t)
            : [e, t];
        }
        function T(e, t, r) {
          Array.isArray(e) ? e.forEach(t, r) : e && t.call(r, e);
        }
        var R = null;
        function D(e) {
          if (e) {
            var t = e._dispatchListeners,
              r = e._dispatchInstances;
            if (Array.isArray(t))
              for (var n = 0; n < t.length && !e.isPropagationStopped(); n++)
                w(e, t[n], r[n]);
            else t && w(e, t, r);
            (e._dispatchListeners = null),
              (e._dispatchInstances = null),
              e.isPersistent() || e.constructor.release(e);
          }
        }
        function P(e) {
          if ((null !== e && (R = k(R, e)), (e = R), (R = null), e)) {
            if ((T(e, D), R)) throw Error(a(95));
            if (g) throw ((e = y), (g = !1), (y = null), e);
          }
        }
        var A = {
          injectEventPluginOrder: function (e) {
            if (l) throw Error(a(101));
            (l = Array.prototype.slice.call(e)), u();
          },
          injectEventPluginsByName: function (e) {
            var t,
              r = !1;
            for (t in e)
              if (e.hasOwnProperty(t)) {
                var n = e[t];
                if (!s.hasOwnProperty(t) || s[t] !== n) {
                  if (s[t]) throw Error(a(102, t));
                  (s[t] = n), (r = !0);
                }
              }
            r && u();
          },
        };
        function x(e, t) {
          var r = e.stateNode;
          if (!r) return null;
          var n = S(r);
          if (!n) return null;
          r = n[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
              (n = !n.disabled) ||
                (n = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !n);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (r && "function" != typeof r) throw Error(a(231, t, typeof r));
          return r;
        }
        var O = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        O.hasOwnProperty("ReactCurrentDispatcher") ||
          (O.ReactCurrentDispatcher = { current: null }),
          O.hasOwnProperty("ReactCurrentBatchConfig") ||
            (O.ReactCurrentBatchConfig = { suspense: null });
        var F = /^(.*)[\\\/]/,
          N = "function" == typeof Symbol && Symbol.for,
          V = N ? Symbol.for("react.element") : 60103,
          M = N ? Symbol.for("react.portal") : 60106,
          L = N ? Symbol.for("react.fragment") : 60107,
          B = N ? Symbol.for("react.strict_mode") : 60108,
          U = N ? Symbol.for("react.profiler") : 60114,
          G = N ? Symbol.for("react.provider") : 60109,
          H = N ? Symbol.for("react.context") : 60110,
          W = N ? Symbol.for("react.concurrent_mode") : 60111,
          z = N ? Symbol.for("react.forward_ref") : 60112,
          j = N ? Symbol.for("react.suspense") : 60113,
          q = N ? Symbol.for("react.suspense_list") : 60120,
          K = N ? Symbol.for("react.memo") : 60115,
          $ = N ? Symbol.for("react.lazy") : 60116;
        N && Symbol.for("react.fundamental"),
          N && Symbol.for("react.responder"),
          N && Symbol.for("react.scope");
        var X = "function" == typeof Symbol && Symbol.iterator;
        function Q(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (X && e[X]) || e["@@iterator"])
            ? e
            : null;
        }
        function Y(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case L:
              return "Fragment";
            case M:
              return "Portal";
            case U:
              return "Profiler";
            case B:
              return "StrictMode";
            case j:
              return "Suspense";
            case q:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case H:
                return "Context.Consumer";
              case G:
                return "Context.Provider";
              case z:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ""),
                  e.displayName ||
                    ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                );
              case K:
                return Y(e.type);
              case $:
                if ((e = 1 === e._status ? e._result : null)) return Y(e);
            }
          return null;
        }
        function J(e) {
          var t = "";
          do {
            e: switch (e.tag) {
              case 3:
              case 4:
              case 6:
              case 7:
              case 10:
              case 9:
                var r = "";
                break e;
              default:
                var n = e._debugOwner,
                  o = e._debugSource,
                  i = Y(e.type);
                (r = null),
                  n && (r = Y(n.type)),
                  (n = i),
                  (i = ""),
                  o
                    ? (i =
                        " (at " +
                        o.fileName.replace(F, "") +
                        ":" +
                        o.lineNumber +
                        ")")
                    : r && (i = " (created by " + r + ")"),
                  (r = "\n    in " + (n || "Unknown") + i);
            }
            (t += r), (e = e.return);
          } while (e);
          return t;
        }
        var Z = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          ee = null,
          te = null,
          re = null;
        function ne(e) {
          if ((e = C(e))) {
            if ("function" != typeof ee) throw Error(a(280));
            var t = S(e.stateNode);
            ee(e.stateNode, e.type, t);
          }
        }
        function oe(e) {
          te ? (re ? re.push(e) : (re = [e])) : (te = e);
        }
        function ie() {
          if (te) {
            var e = te,
              t = re;
            if (((re = te = null), ne(e), t))
              for (e = 0; e < t.length; e++) ne(t[e]);
          }
        }
        function ae(e, t) {
          return e(t);
        }
        function le(e, t, r, n) {
          return e(t, r, n);
        }
        function se() {}
        var ue = ae,
          ce = !1,
          de = !1;
        function pe() {
          (null === te && null === re) || (se(), ie());
        }
        new Map();
        var fe =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          me = Object.prototype.hasOwnProperty,
          he = {},
          _e = {};
        function ve(e, t, r, n, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = n),
            (this.attributeNamespace = o),
            (this.mustUseProperty = r),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i);
        }
        var ge = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            ge[e] = new ve(e, 0, !1, e, null, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            ge[t] = new ve(t, 1, !1, e[1], null, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              ge[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            ge[e] = new ve(e, 2, !1, e, null, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              ge[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            ge[e] = new ve(e, 3, !0, e, null, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            ge[e] = new ve(e, 4, !1, e, null, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            ge[e] = new ve(e, 6, !1, e, null, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            ge[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1);
          });
        var ye = /[\-:]([a-z])/g;
        function be(e) {
          return e[1].toUpperCase();
        }
        function Ee(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
              return e;
            default:
              return "";
          }
        }
        function Se(e, t, r, n) {
          var o = ge.hasOwnProperty(t) ? ge[t] : null;
          (null !== o
            ? 0 === o.type
            : !n &&
              2 < t.length &&
              ("o" === t[0] || "O" === t[0]) &&
              ("n" === t[1] || "N" === t[1])) ||
            ((function (e, t, r, n) {
              if (
                null == t ||
                (function (e, t, r, n) {
                  if (null !== r && 0 === r.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !n &&
                        (null !== r
                          ? !r.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, r, n)
              )
                return !0;
              if (n) return !1;
              if (null !== r)
                switch (r.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, r, o, n) && (r = null),
            n || null === o
              ? (function (e) {
                  return (
                    !!me.call(_e, e) ||
                    (!me.call(he, e) &&
                      (fe.test(e) ? (_e[e] = !0) : ((he[e] = !0), !1)))
                  );
                })(t) &&
                (null === r ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === r ? 3 !== o.type && "" : r)
              : ((t = o.attributeName),
                (n = o.attributeNamespace),
                null === r
                  ? e.removeAttribute(t)
                  : ((r =
                      3 === (o = o.type) || (4 === o && !0 === r)
                        ? ""
                        : "" + r),
                    n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
        }
        function Ce(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Ie(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = Ce(e) ? "checked" : "value",
                r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                n = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                void 0 !== r &&
                "function" == typeof r.get &&
                "function" == typeof r.set
              ) {
                var o = r.get,
                  i = r.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (n = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: r.enumerable }),
                  {
                    getValue: function () {
                      return n;
                    },
                    setValue: function (e) {
                      n = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function we(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var r = t.getValue(),
            n = "";
          return (
            e && (n = Ce(e) ? (e.checked ? "true" : "false") : e.value),
            (e = n) !== r && (t.setValue(e), !0)
          );
        }
        function ke(e, t) {
          var r = t.checked;
          return o({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != r ? r : e._wrapperState.initialChecked,
          });
        }
        function Te(e, t) {
          var r = null == t.defaultValue ? "" : t.defaultValue,
            n = null != t.checked ? t.checked : t.defaultChecked;
          (r = Ee(null != t.value ? t.value : r)),
            (e._wrapperState = {
              initialChecked: n,
              initialValue: r,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function Re(e, t) {
          null != (t = t.checked) && Se(e, "checked", t, !1);
        }
        function De(e, t) {
          Re(e, t);
          var r = Ee(t.value),
            n = t.type;
          if (null != r)
            "number" === n
              ? ((0 === r && "" === e.value) || e.value != r) &&
                (e.value = "" + r)
              : e.value !== "" + r && (e.value = "" + r);
          else if ("submit" === n || "reset" === n)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? Ae(e, t.type, r)
            : t.hasOwnProperty("defaultValue") &&
              Ae(e, t.type, Ee(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Pe(e, t, r) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var n = t.type;
            if (
              !(
                ("submit" !== n && "reset" !== n) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              r || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (r = e.name) && (e.name = ""),
            (e.defaultChecked = !e.defaultChecked),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== r && (e.name = r);
        }
        function Ae(e, t, r) {
          ("number" === t && e.ownerDocument.activeElement === e) ||
            (null == r
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
        }
        function xe(e, t) {
          return (
            (e = o({ children: void 0 }, t)),
            (t = (function (e) {
              var t = "";
              return (
                n.Children.forEach(e, function (e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function Oe(e, t, r, n) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
            for (r = 0; r < e.length; r++)
              (o = t.hasOwnProperty("$" + e[r].value)),
                e[r].selected !== o && (e[r].selected = o),
                o && n && (e[r].defaultSelected = !0);
          } else {
            for (r = "" + Ee(r), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === r)
                return (
                  (e[o].selected = !0), void (n && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function Fe(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return o({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function Ne(e, t) {
          var r = t.value;
          if (null == r) {
            if (((r = t.defaultValue), null != (t = t.children))) {
              if (null != r) throw Error(a(92));
              if (Array.isArray(t)) {
                if (!(1 >= t.length)) throw Error(a(93));
                t = t[0];
              }
              r = t;
            }
            null == r && (r = "");
          }
          e._wrapperState = { initialValue: Ee(r) };
        }
        function Ve(e, t) {
          var r = Ee(t.value),
            n = Ee(t.defaultValue);
          null != r &&
            ((r = "" + r) !== e.value && (e.value = r),
            null == t.defaultValue &&
              e.defaultValue !== r &&
              (e.defaultValue = r)),
            null != n && (e.defaultValue = "" + n);
        }
        function Me(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(ye, be);
            ge[t] = new ve(t, 1, !1, e, null, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(ye, be);
              ge[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(ye, be);
            ge[t] = new ve(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            ge[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1);
          }),
          (ge.xlinkHref = new ve(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            ge[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0);
          });
        var Le = {
          html: "http://www.w3.org/1999/xhtml",
          mathml: "http://www.w3.org/1998/Math/MathML",
          svg: "http://www.w3.org/2000/svg",
        };
        function Be(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function Ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? Be(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var Ge,
          He,
          We =
            ((He = function (e, t) {
              if (e.namespaceURI !== Le.svg || "innerHTML" in e)
                e.innerHTML = t;
              else {
                for (
                  (Ge = Ge || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = Ge.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, r, n) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return He(e, t);
                  });
                }
              : He);
        function ze(e, t) {
          if (t) {
            var r = e.firstChild;
            if (r && r === e.lastChild && 3 === r.nodeType)
              return void (r.nodeValue = t);
          }
          e.textContent = t;
        }
        function je(e, t) {
          var r = {};
          return (
            (r[e.toLowerCase()] = t.toLowerCase()),
            (r["Webkit" + e] = "webkit" + t),
            (r["Moz" + e] = "moz" + t),
            r
          );
        }
        var qe = {
            animationend: je("Animation", "AnimationEnd"),
            animationiteration: je("Animation", "AnimationIteration"),
            animationstart: je("Animation", "AnimationStart"),
            transitionend: je("Transition", "TransitionEnd"),
          },
          Ke = {},
          $e = {};
        function Xe(e) {
          if (Ke[e]) return Ke[e];
          if (!qe[e]) return e;
          var t,
            r = qe[e];
          for (t in r)
            if (r.hasOwnProperty(t) && t in $e) return (Ke[e] = r[t]);
          return e;
        }
        Z &&
          (($e = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete qe.animationend.animation,
            delete qe.animationiteration.animation,
            delete qe.animationstart.animation),
          "TransitionEvent" in window || delete qe.transitionend.transition);
        var Qe = Xe("animationend"),
          Ye = Xe("animationiteration"),
          Je = Xe("animationstart"),
          Ze = Xe("transitionend"),
          et =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            );
        function tt(e) {
          var t = e,
            r = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 != (1026 & (t = e).effectTag) && (r = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? r : null;
        }
        function rt(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function nt(e) {
          if (tt(e) !== e) throw Error(a(188));
        }
        function ot(e) {
          if (
            ((e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = tt(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var r = e, n = t; ; ) {
                var o = r.return;
                if (null === o) break;
                var i = o.alternate;
                if (null === i) {
                  if (null !== (n = o.return)) {
                    r = n;
                    continue;
                  }
                  break;
                }
                if (o.child === i.child) {
                  for (i = o.child; i; ) {
                    if (i === r) return nt(o), e;
                    if (i === n) return nt(o), t;
                    i = i.sibling;
                  }
                  throw Error(a(188));
                }
                if (r.return !== n.return) (r = o), (n = i);
                else {
                  for (var l = !1, s = o.child; s; ) {
                    if (s === r) {
                      (l = !0), (r = o), (n = i);
                      break;
                    }
                    if (s === n) {
                      (l = !0), (n = o), (r = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = i.child; s; ) {
                      if (s === r) {
                        (l = !0), (r = i), (n = o);
                        break;
                      }
                      if (s === n) {
                        (l = !0), (n = i), (r = o);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(a(189));
                  }
                }
                if (r.alternate !== n) throw Error(a(190));
              }
              if (3 !== r.tag) throw Error(a(188));
              return r.stateNode.current === r ? e : t;
            })(e)),
            !e)
          )
            return null;
          for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) (t.child.return = t), (t = t.child);
            else {
              if (t === e) break;
              for (; !t.sibling; ) {
                if (!t.return || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return null;
        }
        var it,
          at,
          lt,
          st = !1,
          ut = [],
          ct = null,
          dt = null,
          pt = null,
          ft = new Map(),
          mt = new Map(),
          ht = [],
          _t =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(
              " "
            ),
          vt =
            "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(
              " "
            );
        function gt(e, t, r, n) {
          return {
            blockedOn: e,
            topLevelType: t,
            eventSystemFlags: 32 | r,
            nativeEvent: n,
          };
        }
        function yt(e, t) {
          switch (e) {
            case "focus":
            case "blur":
              ct = null;
              break;
            case "dragenter":
            case "dragleave":
              dt = null;
              break;
            case "mouseover":
            case "mouseout":
              pt = null;
              break;
            case "pointerover":
            case "pointerout":
              ft.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              mt.delete(t.pointerId);
          }
        }
        function bt(e, t, r, n, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = gt(t, r, n, o)),
              null !== t && null !== (t = hn(t)) && at(t),
              e)
            : ((e.eventSystemFlags |= n), e);
        }
        function Et(e) {
          var t = mn(e.target);
          if (null !== t) {
            var r = tt(t);
            if (null !== r)
              if (13 === (t = r.tag)) {
                if (null !== (t = rt(r)))
                  return (
                    (e.blockedOn = t),
                    void i.unstable_runWithPriority(e.priority, function () {
                      lt(r);
                    })
                  );
              } else if (3 === t && r.stateNode.hydrate)
                return void (e.blockedOn =
                  3 === r.tag ? r.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function St(e) {
          if (null !== e.blockedOn) return !1;
          var t = Ar(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
          if (null !== t) {
            var r = hn(t);
            return null !== r && at(r), (e.blockedOn = t), !1;
          }
          return !0;
        }
        function Ct(e, t, r) {
          St(e) && r.delete(t);
        }
        function It() {
          for (st = !1; 0 < ut.length; ) {
            var e = ut[0];
            if (null !== e.blockedOn) {
              null !== (e = hn(e.blockedOn)) && it(e);
              break;
            }
            var t = Ar(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
            null !== t ? (e.blockedOn = t) : ut.shift();
          }
          null !== ct && St(ct) && (ct = null),
            null !== dt && St(dt) && (dt = null),
            null !== pt && St(pt) && (pt = null),
            ft.forEach(Ct),
            mt.forEach(Ct);
        }
        function wt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            st ||
              ((st = !0),
              i.unstable_scheduleCallback(i.unstable_NormalPriority, It)));
        }
        function kt(e) {
          function t(t) {
            return wt(t, e);
          }
          if (0 < ut.length) {
            wt(ut[0], e);
            for (var r = 1; r < ut.length; r++) {
              var n = ut[r];
              n.blockedOn === e && (n.blockedOn = null);
            }
          }
          for (
            null !== ct && wt(ct, e),
              null !== dt && wt(dt, e),
              null !== pt && wt(pt, e),
              ft.forEach(t),
              mt.forEach(t),
              r = 0;
            r < ht.length;
            r++
          )
            (n = ht[r]).blockedOn === e && (n.blockedOn = null);
          for (; 0 < ht.length && null === (r = ht[0]).blockedOn; )
            Et(r), null === r.blockedOn && ht.shift();
        }
        function Tt(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        function Rt(e) {
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Dt(e, t, r) {
          (t = x(e, r.dispatchConfig.phasedRegistrationNames[t])) &&
            ((r._dispatchListeners = k(r._dispatchListeners, t)),
            (r._dispatchInstances = k(r._dispatchInstances, e)));
        }
        function Pt(e) {
          if (e && e.dispatchConfig.phasedRegistrationNames) {
            for (var t = e._targetInst, r = []; t; ) r.push(t), (t = Rt(t));
            for (t = r.length; 0 < t--; ) Dt(r[t], "captured", e);
            for (t = 0; t < r.length; t++) Dt(r[t], "bubbled", e);
          }
        }
        function At(e, t, r) {
          e &&
            r &&
            r.dispatchConfig.registrationName &&
            (t = x(e, r.dispatchConfig.registrationName)) &&
            ((r._dispatchListeners = k(r._dispatchListeners, t)),
            (r._dispatchInstances = k(r._dispatchInstances, e)));
        }
        function xt(e) {
          e && e.dispatchConfig.registrationName && At(e._targetInst, null, e);
        }
        function Ot(e) {
          T(e, Pt);
        }
        function Ft() {
          return !0;
        }
        function Nt() {
          return !1;
        }
        function Vt(e, t, r, n) {
          for (var o in ((this.dispatchConfig = e),
          (this._targetInst = t),
          (this.nativeEvent = r),
          (e = this.constructor.Interface)))
            e.hasOwnProperty(o) &&
              ((t = e[o])
                ? (this[o] = t(r))
                : "target" === o
                ? (this.target = n)
                : (this[o] = r[o]));
          return (
            (this.isDefaultPrevented = (
              null != r.defaultPrevented
                ? r.defaultPrevented
                : !1 === r.returnValue
            )
              ? Ft
              : Nt),
            (this.isPropagationStopped = Nt),
            this
          );
        }
        function Mt(e, t, r, n) {
          if (this.eventPool.length) {
            var o = this.eventPool.pop();
            return this.call(o, e, t, r, n), o;
          }
          return new this(e, t, r, n);
        }
        function Lt(e) {
          if (!(e instanceof this)) throw Error(a(279));
          e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
        }
        function Bt(e) {
          (e.eventPool = []), (e.getPooled = Mt), (e.release = Lt);
        }
        o(Vt.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : "unknown" != typeof e.returnValue && (e.returnValue = !1),
              (this.isDefaultPrevented = Ft));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
              (this.isPropagationStopped = Ft));
          },
          persist: function () {
            this.isPersistent = Ft;
          },
          isPersistent: Nt,
          destructor: function () {
            var e,
              t = this.constructor.Interface;
            for (e in t) this[e] = null;
            (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
              (this.isPropagationStopped = this.isDefaultPrevented = Nt),
              (this._dispatchInstances = this._dispatchListeners = null);
          },
        }),
          (Vt.Interface = {
            type: null,
            target: null,
            currentTarget: function () {
              return null;
            },
            eventPhase: null,
            bubbles: null,
            cancelable: null,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: null,
            isTrusted: null,
          }),
          (Vt.extend = function (e) {
            function t() {}
            function r() {
              return n.apply(this, arguments);
            }
            var n = this;
            t.prototype = n.prototype;
            var i = new t();
            return (
              o(i, r.prototype),
              (r.prototype = i),
              (r.prototype.constructor = r),
              (r.Interface = o({}, n.Interface, e)),
              (r.extend = n.extend),
              Bt(r),
              r
            );
          }),
          Bt(Vt);
        var Ut = Vt.extend({
            animationName: null,
            elapsedTime: null,
            pseudoElement: null,
          }),
          Gt = Vt.extend({
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          Ht = Vt.extend({ view: null, detail: null }),
          Wt = Ht.extend({ relatedTarget: null });
        function zt(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        var jt = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          qt = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Kt = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function $t(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Kt[e]) && !!t[e];
        }
        function Xt() {
          return $t;
        }
        for (
          var Qt = Ht.extend({
              key: function (e) {
                if (e.key) {
                  var t = jt[e.key] || e.key;
                  if ("Unidentified" !== t) return t;
                }
                return "keypress" === e.type
                  ? 13 === (e = zt(e))
                    ? "Enter"
                    : String.fromCharCode(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? qt[e.keyCode] || "Unidentified"
                  : "";
              },
              location: null,
              ctrlKey: null,
              shiftKey: null,
              altKey: null,
              metaKey: null,
              repeat: null,
              locale: null,
              getModifierState: Xt,
              charCode: function (e) {
                return "keypress" === e.type ? zt(e) : 0;
              },
              keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
              which: function (e) {
                return "keypress" === e.type
                  ? zt(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
            }),
            Yt = 0,
            Jt = 0,
            Zt = !1,
            er = !1,
            tr = Ht.extend({
              screenX: null,
              screenY: null,
              clientX: null,
              clientY: null,
              pageX: null,
              pageY: null,
              ctrlKey: null,
              shiftKey: null,
              altKey: null,
              metaKey: null,
              getModifierState: Xt,
              button: null,
              buttons: null,
              relatedTarget: function (e) {
                return (
                  e.relatedTarget ||
                  (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
                );
              },
              movementX: function (e) {
                if (("movementX" in e)) return e.movementX;
                var t = Yt;
                return (
                  (Yt = e.screenX),
                  Zt
                    ? "mousemove" === e.type
                      ? e.screenX - t
                      : 0
                    : ((Zt = !0), 0)
                );
              },
              movementY: function (e) {
                if (("movementY" in e)) return e.movementY;
                var t = Jt;
                return (
                  (Jt = e.screenY),
                  er
                    ? "mousemove" === e.type
                      ? e.screenY - t
                      : 0
                    : ((er = !0), 0)
                );
              },
            }),
            rr = tr.extend({
              pointerId: null,
              width: null,
              height: null,
              pressure: null,
              tangentialPressure: null,
              tiltX: null,
              tiltY: null,
              twist: null,
              pointerType: null,
              isPrimary: null,
            }),
            nr = tr.extend({ dataTransfer: null }),
            or = Ht.extend({
              touches: null,
              targetTouches: null,
              changedTouches: null,
              altKey: null,
              metaKey: null,
              ctrlKey: null,
              shiftKey: null,
              getModifierState: Xt,
            }),
            ir = Vt.extend({
              propertyName: null,
              elapsedTime: null,
              pseudoElement: null,
            }),
            ar = tr.extend({
              deltaX: function (e) {
                return ("deltaX" in e)
                  ? e.deltaX
                  : ("wheelDeltaX" in e)
                  ? -e.wheelDeltaX
                  : 0;
              },
              deltaY: function (e) {
                return ("deltaY" in e)
                  ? e.deltaY
                  : ("wheelDeltaY" in e)
                  ? -e.wheelDeltaY
                  : ("wheelDelta" in e)
                  ? -e.wheelDelta
                  : 0;
              },
              deltaZ: null,
              deltaMode: null,
            }),
            lr = [
              ["blur", "blur", 0],
              ["cancel", "cancel", 0],
              ["click", "click", 0],
              ["close", "close", 0],
              ["contextmenu", "contextMenu", 0],
              ["copy", "copy", 0],
              ["cut", "cut", 0],
              ["auxclick", "auxClick", 0],
              ["dblclick", "doubleClick", 0],
              ["dragend", "dragEnd", 0],
              ["dragstart", "dragStart", 0],
              ["drop", "drop", 0],
              ["focus", "focus", 0],
              ["input", "input", 0],
              ["invalid", "invalid", 0],
              ["keydown", "keyDown", 0],
              ["keypress", "keyPress", 0],
              ["keyup", "keyUp", 0],
              ["mousedown", "mouseDown", 0],
              ["mouseup", "mouseUp", 0],
              ["paste", "paste", 0],
              ["pause", "pause", 0],
              ["play", "play", 0],
              ["pointercancel", "pointerCancel", 0],
              ["pointerdown", "pointerDown", 0],
              ["pointerup", "pointerUp", 0],
              ["ratechange", "rateChange", 0],
              ["reset", "reset", 0],
              ["seeked", "seeked", 0],
              ["submit", "submit", 0],
              ["touchcancel", "touchCancel", 0],
              ["touchend", "touchEnd", 0],
              ["touchstart", "touchStart", 0],
              ["volumechange", "volumeChange", 0],
              ["drag", "drag", 1],
              ["dragenter", "dragEnter", 1],
              ["dragexit", "dragExit", 1],
              ["dragleave", "dragLeave", 1],
              ["dragover", "dragOver", 1],
              ["mousemove", "mouseMove", 1],
              ["mouseout", "mouseOut", 1],
              ["mouseover", "mouseOver", 1],
              ["pointermove", "pointerMove", 1],
              ["pointerout", "pointerOut", 1],
              ["pointerover", "pointerOver", 1],
              ["scroll", "scroll", 1],
              ["toggle", "toggle", 1],
              ["touchmove", "touchMove", 1],
              ["wheel", "wheel", 1],
              ["abort", "abort", 2],
              [Qe, "animationEnd", 2],
              [Ye, "animationIteration", 2],
              [Je, "animationStart", 2],
              ["canplay", "canPlay", 2],
              ["canplaythrough", "canPlayThrough", 2],
              ["durationchange", "durationChange", 2],
              ["emptied", "emptied", 2],
              ["encrypted", "encrypted", 2],
              ["ended", "ended", 2],
              ["error", "error", 2],
              ["gotpointercapture", "gotPointerCapture", 2],
              ["load", "load", 2],
              ["loadeddata", "loadedData", 2],
              ["loadedmetadata", "loadedMetadata", 2],
              ["loadstart", "loadStart", 2],
              ["lostpointercapture", "lostPointerCapture", 2],
              ["playing", "playing", 2],
              ["progress", "progress", 2],
              ["seeking", "seeking", 2],
              ["stalled", "stalled", 2],
              ["suspend", "suspend", 2],
              ["timeupdate", "timeUpdate", 2],
              [Ze, "transitionEnd", 2],
              ["waiting", "waiting", 2],
            ],
            sr = {},
            ur = {},
            cr = 0;
          cr < lr.length;
          cr++
        ) {
          var dr = lr[cr],
            pr = dr[0],
            fr = dr[1],
            mr = dr[2],
            hr = "on" + (fr[0].toUpperCase() + fr.slice(1)),
            _r = {
              phasedRegistrationNames: {
                bubbled: hr,
                captured: hr + "Capture",
              },
              dependencies: [pr],
              eventPriority: mr,
            };
          (sr[fr] = _r), (ur[pr] = _r);
        }
        var vr = {
            eventTypes: sr,
            getEventPriority: function (e) {
              return void 0 !== (e = ur[e]) ? e.eventPriority : 2;
            },
            extractEvents: function (e, t, r, n) {
              var o = ur[e];
              if (!o) return null;
              switch (e) {
                case "keypress":
                  if (0 === zt(r)) return null;
                case "keydown":
                case "keyup":
                  e = Qt;
                  break;
                case "blur":
                case "focus":
                  e = Wt;
                  break;
                case "click":
                  if (2 === r.button) return null;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  e = tr;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  e = nr;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  e = or;
                  break;
                case Qe:
                case Ye:
                case Je:
                  e = Ut;
                  break;
                case Ze:
                  e = ir;
                  break;
                case "scroll":
                  e = Ht;
                  break;
                case "wheel":
                  e = ar;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  e = Gt;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  e = rr;
                  break;
                default:
                  e = Vt;
              }
              return Ot((t = e.getPooled(o, t, r, n))), t;
            },
          },
          gr = i.unstable_UserBlockingPriority,
          yr = i.unstable_runWithPriority,
          br = vr.getEventPriority,
          Er = 10,
          Sr = [];
        function Cr(e) {
          var t = e.targetInst,
            r = t;
          do {
            if (!r) {
              e.ancestors.push(r);
              break;
            }
            var n = r;
            if (3 === n.tag) n = n.stateNode.containerInfo;
            else {
              for (; n.return; ) n = n.return;
              n = 3 !== n.tag ? null : n.stateNode.containerInfo;
            }
            if (!n) break;
            (5 !== (t = r.tag) && 6 !== t) || e.ancestors.push(r), (r = mn(n));
          } while (r);
          for (r = 0; r < e.ancestors.length; r++) {
            t = e.ancestors[r];
            var o = Tt(e.nativeEvent);
            n = e.topLevelType;
            for (
              var i = e.nativeEvent, a = e.eventSystemFlags, l = null, s = 0;
              s < d.length;
              s++
            ) {
              var u = d[s];
              u && (u = u.extractEvents(n, t, i, o, a)) && (l = k(l, u));
            }
            P(l);
          }
        }
        var Ir = !0;
        function wr(e, t) {
          kr(t, e, !1);
        }
        function kr(e, t, r) {
          switch (br(t)) {
            case 0:
              var n = Tr.bind(null, t, 1);
              break;
            case 1:
              n = Rr.bind(null, t, 1);
              break;
            default:
              n = Pr.bind(null, t, 1);
          }
          r ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, !1);
        }
        function Tr(e, t, r) {
          ce || se();
          var n = Pr,
            o = ce;
          ce = !0;
          try {
            le(n, e, t, r);
          } finally {
            (ce = o) || pe();
          }
        }
        function Rr(e, t, r) {
          yr(gr, Pr.bind(null, e, t, r));
        }
        function Dr(e, t, r, n) {
          if (Sr.length) {
            var o = Sr.pop();
            (o.topLevelType = e),
              (o.eventSystemFlags = t),
              (o.nativeEvent = r),
              (o.targetInst = n),
              (e = o);
          } else
            e = {
              topLevelType: e,
              eventSystemFlags: t,
              nativeEvent: r,
              targetInst: n,
              ancestors: [],
            };
          try {
            if (((t = Cr), (r = e), de)) t(r, void 0);
            else {
              de = !0;
              try {
                ue(t, r, void 0);
              } finally {
                (de = !1), pe();
              }
            }
          } finally {
            (e.topLevelType = null),
              (e.nativeEvent = null),
              (e.targetInst = null),
              (e.ancestors.length = 0),
              Sr.length < Er && Sr.push(e);
          }
        }
        function Pr(e, t, r) {
          if (Ir)
            if (0 < ut.length && -1 < _t.indexOf(e))
              (e = gt(null, e, t, r)), ut.push(e);
            else {
              var n = Ar(e, t, r);
              null === n
                ? yt(e, r)
                : -1 < _t.indexOf(e)
                ? ((e = gt(n, e, t, r)), ut.push(e))
                : (function (e, t, r, n) {
                    switch (t) {
                      case "focus":
                        return (ct = bt(ct, e, t, r, n)), !0;
                      case "dragenter":
                        return (dt = bt(dt, e, t, r, n)), !0;
                      case "mouseover":
                        return (pt = bt(pt, e, t, r, n)), !0;
                      case "pointerover":
                        var o = n.pointerId;
                        return ft.set(o, bt(ft.get(o) || null, e, t, r, n)), !0;
                      case "gotpointercapture":
                        return (
                          (o = n.pointerId),
                          mt.set(o, bt(mt.get(o) || null, e, t, r, n)),
                          !0
                        );
                    }
                    return !1;
                  })(n, e, t, r) || (yt(e, r), Dr(e, t, r, null));
            }
        }
        function Ar(e, t, r) {
          var n = Tt(r);
          if (null !== (n = mn(n))) {
            var o = tt(n);
            if (null === o) n = null;
            else {
              var i = o.tag;
              if (13 === i) {
                if (null !== (n = rt(o))) return n;
                n = null;
              } else if (3 === i) {
                if (o.stateNode.hydrate)
                  return 3 === o.tag ? o.stateNode.containerInfo : null;
                n = null;
              } else o !== n && (n = null);
            }
          }
          return Dr(e, t, r, n), null;
        }
        function xr(e) {
          if (!Z) return !1;
          var t = (e = "on" + e) in document;
          return (
            t ||
              ((t = document.createElement("div")).setAttribute(e, "return;"),
              (t = "function" == typeof t[e])),
            t
          );
        }
        var Or = new ("function" == typeof WeakMap ? WeakMap : Map)();
        function Fr(e) {
          var t = Or.get(e);
          return void 0 === t && ((t = new Set()), Or.set(e, t)), t;
        }
        function Nr(e, t, r) {
          if (!r.has(e)) {
            switch (e) {
              case "scroll":
                kr(t, "scroll", !0);
                break;
              case "focus":
              case "blur":
                kr(t, "focus", !0),
                  kr(t, "blur", !0),
                  r.add("blur"),
                  r.add("focus");
                break;
              case "cancel":
              case "close":
                xr(e) && kr(t, e, !0);
                break;
              case "invalid":
              case "submit":
              case "reset":
                break;
              default:
                -1 === et.indexOf(e) && wr(e, t);
            }
            r.add(e);
          }
        }
        var Vr = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          Mr = ["Webkit", "ms", "Moz", "O"];
        function Lr(e, t, r) {
          return null == t || "boolean" == typeof t || "" === t
            ? ""
            : r ||
              "number" != typeof t ||
              0 === t ||
              (Vr.hasOwnProperty(e) && Vr[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function Br(e, t) {
          for (var r in ((e = e.style), t))
            if (t.hasOwnProperty(r)) {
              var n = 0 === r.indexOf("--"),
                o = Lr(r, t[r], n);
              "float" === r && (r = "cssFloat"),
                n ? e.setProperty(r, o) : (e[r] = o);
            }
        }
        Object.keys(Vr).forEach(function (e) {
          Mr.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (Vr[t] = Vr[e]);
          });
        });
        var Ur = o(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function Gr(e, t) {
          if (t) {
            if (
              Ur[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e, ""));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" != typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" != typeof t.style)
              throw Error(a(62, ""));
          }
        }
        function Hr(e, t) {
          if (-1 === e.indexOf("-")) return "string" == typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        function Wr(e, t) {
          var r = Fr(
            (e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument)
          );
          t = m[t];
          for (var n = 0; n < t.length; n++) Nr(t[n], e, r);
        }
        function zr() {}
        function jr(e) {
          if (
            void 0 ===
            (e = e || ("undefined" != typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function qr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function Kr(e, t) {
          var r,
            n = qr(e);
          for (e = 0; n; ) {
            if (3 === n.nodeType) {
              if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
              e = r;
            }
            e: {
              for (; n; ) {
                if (n.nextSibling) {
                  n = n.nextSibling;
                  break e;
                }
                n = n.parentNode;
              }
              n = void 0;
            }
            n = qr(n);
          }
        }
        function $r(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? $r(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function Xr() {
          for (var e = window, t = jr(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var r = "string" == typeof t.contentWindow.location.href;
            } catch (e) {
              r = !1;
            }
            if (!r) break;
            t = jr((e = t.contentWindow).document);
          }
          return t;
        }
        function Qr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var Yr = "$",
          Jr = "/$",
          Zr = "$?",
          en = "$!",
          tn = null,
          rn = null;
        function nn(e, t) {
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!t.autoFocus;
          }
          return !1;
        }
        function on(e, t) {
          return (
            "textarea" === e ||
            "option" === e ||
            "noscript" === e ||
            "string" == typeof t.children ||
            "number" == typeof t.children ||
            ("object" == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var an = "function" == typeof setTimeout ? setTimeout : void 0,
          ln = "function" == typeof clearTimeout ? clearTimeout : void 0;
        function sn(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function un(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var r = e.data;
              if (r === Yr || r === en || r === Zr) {
                if (0 === t) return e;
                t--;
              } else r === Jr && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var cn = Math.random().toString(36).slice(2),
          dn = "__reactInternalInstance$" + cn,
          pn = "__reactEventHandlers$" + cn,
          fn = "__reactContainere$" + cn;
        function mn(e) {
          var t = e[dn];
          if (t) return t;
          for (var r = e.parentNode; r; ) {
            if ((t = r[fn] || r[dn])) {
              if (
                ((r = t.alternate),
                null !== t.child || (null !== r && null !== r.child))
              )
                for (e = un(e); null !== e; ) {
                  if ((r = e[dn])) return r;
                  e = un(e);
                }
              return t;
            }
            r = (e = r).parentNode;
          }
          return null;
        }
        function hn(e) {
          return !(e = e[dn] || e[fn]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function _n(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function vn(e) {
          return e[pn] || null;
        }
        var gn = null,
          yn = null,
          bn = null;
        function En() {
          if (bn) return bn;
          var e,
            t,
            r = yn,
            n = r.length,
            o = "value" in gn ? gn.value : gn.textContent,
            i = o.length;
          for (e = 0; e < n && r[e] === o[e]; e++);
          var a = n - e;
          for (t = 1; t <= a && r[n - t] === o[i - t]; t++);
          return (bn = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        var Sn = Vt.extend({ data: null }),
          Cn = Vt.extend({ data: null }),
          In = [9, 13, 27, 32],
          wn = Z && "CompositionEvent" in window,
          kn = null;
        Z && "documentMode" in document && (kn = document.documentMode);
        var Tn = Z && "TextEvent" in window && !kn,
          Rn = Z && (!wn || (kn && 8 < kn && 11 >= kn)),
          Dn = String.fromCharCode(32),
          Pn = {
            beforeInput: {
              phasedRegistrationNames: {
                bubbled: "onBeforeInput",
                captured: "onBeforeInputCapture",
              },
              dependencies: [
                "compositionend",
                "keypress",
                "textInput",
                "paste",
              ],
            },
            compositionEnd: {
              phasedRegistrationNames: {
                bubbled: "onCompositionEnd",
                captured: "onCompositionEndCapture",
              },
              dependencies:
                "blur compositionend keydown keypress keyup mousedown".split(
                  " "
                ),
            },
            compositionStart: {
              phasedRegistrationNames: {
                bubbled: "onCompositionStart",
                captured: "onCompositionStartCapture",
              },
              dependencies:
                "blur compositionstart keydown keypress keyup mousedown".split(
                  " "
                ),
            },
            compositionUpdate: {
              phasedRegistrationNames: {
                bubbled: "onCompositionUpdate",
                captured: "onCompositionUpdateCapture",
              },
              dependencies:
                "blur compositionupdate keydown keypress keyup mousedown".split(
                  " "
                ),
            },
          },
          An = !1;
        function xn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== In.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "blur":
              return !0;
            default:
              return !1;
          }
        }
        function On(e) {
          return "object" == typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Fn = !1;
        var Nn = {
            eventTypes: Pn,
            extractEvents: function (e, t, r, n) {
              var o;
              if (wn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var i = Pn.compositionStart;
                      break e;
                    case "compositionend":
                      i = Pn.compositionEnd;
                      break e;
                    case "compositionupdate":
                      i = Pn.compositionUpdate;
                      break e;
                  }
                  i = void 0;
                }
              else
                Fn
                  ? xn(e, r) && (i = Pn.compositionEnd)
                  : "keydown" === e &&
                    229 === r.keyCode &&
                    (i = Pn.compositionStart);
              return (
                i
                  ? (Rn &&
                      "ko" !== r.locale &&
                      (Fn || i !== Pn.compositionStart
                        ? i === Pn.compositionEnd && Fn && (o = En())
                        : ((yn =
                            "value" in (gn = n) ? gn.value : gn.textContent),
                          (Fn = !0))),
                    (i = Sn.getPooled(i, t, r, n)),
                    o ? (i.data = o) : null !== (o = On(r)) && (i.data = o),
                    Ot(i),
                    (o = i))
                  : (o = null),
                (e = Tn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return On(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((An = !0), Dn);
                        case "textInput":
                          return (e = t.data) === Dn && An ? null : e;
                        default:
                          return null;
                      }
                    })(e, r)
                  : (function (e, t) {
                      if (Fn)
                        return "compositionend" === e || (!wn && xn(e, t))
                          ? ((e = En()), (bn = yn = gn = null), (Fn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Rn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, r))
                  ? (((t = Cn.getPooled(Pn.beforeInput, t, r, n)).data = e),
                    Ot(t))
                  : (t = null),
                null === o ? t : null === t ? o : [o, t]
              );
            },
          },
          Vn = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
          };
        function Mn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Vn[e.type] : "textarea" === t;
        }
        var Ln = {
          change: {
            phasedRegistrationNames: {
              bubbled: "onChange",
              captured: "onChangeCapture",
            },
            dependencies:
              "blur change click focus input keydown keyup selectionchange".split(
                " "
              ),
          },
        };
        function Bn(e, t, r) {
          return (
            ((e = Vt.getPooled(Ln.change, e, t, r)).type = "change"),
            oe(r),
            Ot(e),
            e
          );
        }
        var Un = null,
          Gn = null;
        function Hn(e) {
          P(e);
        }
        function Wn(e) {
          if (we(_n(e))) return e;
        }
        function zn(e, t) {
          if ("change" === e) return t;
        }
        var jn = !1;
        function qn() {
          Un && (Un.detachEvent("onpropertychange", Kn), (Gn = Un = null));
        }
        function Kn(e) {
          if ("value" === e.propertyName && Wn(Gn))
            if (((e = Bn(Gn, e, Tt(e))), ce)) P(e);
            else {
              ce = !0;
              try {
                ae(Hn, e);
              } finally {
                (ce = !1), pe();
              }
            }
        }
        function $n(e, t, r) {
          "focus" === e
            ? (qn(), (Gn = r), (Un = t).attachEvent("onpropertychange", Kn))
            : "blur" === e && qn();
        }
        function Xn(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Wn(Gn);
        }
        function Qn(e, t) {
          if ("click" === e) return Wn(t);
        }
        function Yn(e, t) {
          if ("input" === e || "change" === e) return Wn(t);
        }
        Z &&
          (jn =
            xr("input") &&
            (!document.documentMode || 9 < document.documentMode));
        var Jn,
          Zn = {
            eventTypes: Ln,
            _isInputEventSupported: jn,
            extractEvents: function (e, t, r, n) {
              var o = t ? _n(t) : window,
                i = o.nodeName && o.nodeName.toLowerCase();
              if ("select" === i || ("input" === i && "file" === o.type))
                var a = zn;
              else if (Mn(o))
                if (jn) a = Yn;
                else {
                  a = Xn;
                  var l = $n;
                }
              else
                (i = o.nodeName) &&
                  "input" === i.toLowerCase() &&
                  ("checkbox" === o.type || "radio" === o.type) &&
                  (a = Qn);
              if (a && (a = a(e, t))) return Bn(a, r, n);
              l && l(e, o, t),
                "blur" === e &&
                  (e = o._wrapperState) &&
                  e.controlled &&
                  "number" === o.type &&
                  Ae(o, "number", o.value);
            },
          },
          eo = {
            mouseEnter: {
              registrationName: "onMouseEnter",
              dependencies: ["mouseout", "mouseover"],
            },
            mouseLeave: {
              registrationName: "onMouseLeave",
              dependencies: ["mouseout", "mouseover"],
            },
            pointerEnter: {
              registrationName: "onPointerEnter",
              dependencies: ["pointerout", "pointerover"],
            },
            pointerLeave: {
              registrationName: "onPointerLeave",
              dependencies: ["pointerout", "pointerover"],
            },
          },
          to = {
            eventTypes: eo,
            extractEvents: function (e, t, r, n, o) {
              var i = "mouseover" === e || "pointerover" === e,
                a = "mouseout" === e || "pointerout" === e;
              if (
                (i && 0 == (32 & o) && (r.relatedTarget || r.fromElement)) ||
                (!a && !i)
              )
                return null;
              if (
                ((o =
                  n.window === n
                    ? n
                    : (o = n.ownerDocument)
                    ? o.defaultView || o.parentWindow
                    : window),
                a
                  ? ((a = t),
                    null !==
                      (t = (t = r.relatedTarget || r.toElement)
                        ? mn(t)
                        : null) &&
                      (t !== (i = tt(t)) || (5 !== t.tag && 6 !== t.tag)) &&
                      (t = null))
                  : (a = null),
                a === t)
              )
                return null;
              if ("mouseout" === e || "mouseover" === e)
                var l = tr,
                  s = eo.mouseLeave,
                  u = eo.mouseEnter,
                  c = "mouse";
              else
                ("pointerout" !== e && "pointerover" !== e) ||
                  ((l = rr),
                  (s = eo.pointerLeave),
                  (u = eo.pointerEnter),
                  (c = "pointer"));
              if (
                ((e = null == a ? o : _n(a)),
                (o = null == t ? o : _n(t)),
                ((s = l.getPooled(s, a, r, n)).type = c + "leave"),
                (s.target = e),
                (s.relatedTarget = o),
                ((n = l.getPooled(u, t, r, n)).type = c + "enter"),
                (n.target = o),
                (n.relatedTarget = e),
                (c = t),
                (l = a) && c)
              )
                e: {
                  for (e = c, a = 0, t = u = l; t; t = Rt(t)) a++;
                  for (t = 0, o = e; o; o = Rt(o)) t++;
                  for (; 0 < a - t; ) (u = Rt(u)), a--;
                  for (; 0 < t - a; ) (e = Rt(e)), t--;
                  for (; a--; ) {
                    if (u === e || u === e.alternate) break e;
                    (u = Rt(u)), (e = Rt(e));
                  }
                  u = null;
                }
              else u = null;
              for (
                e = u, u = [];
                l && l !== e && (null === (a = l.alternate) || a !== e);

              )
                u.push(l), (l = Rt(l));
              for (
                l = [];
                c && c !== e && (null === (a = c.alternate) || a !== e);

              )
                l.push(c), (c = Rt(c));
              for (c = 0; c < u.length; c++) At(u[c], "bubbled", s);
              for (c = l.length; 0 < c--; ) At(l[c], "captured", n);
              return r === Jn ? ((Jn = null), [s]) : ((Jn = r), [s, n]);
            },
          };
        var ro =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          no = Object.prototype.hasOwnProperty;
        function oo(e, t) {
          if (ro(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          var r = Object.keys(e),
            n = Object.keys(t);
          if (r.length !== n.length) return !1;
          for (n = 0; n < r.length; n++)
            if (!no.call(t, r[n]) || !ro(e[r[n]], t[r[n]])) return !1;
          return !0;
        }
        var io = Z && "documentMode" in document && 11 >= document.documentMode,
          ao = {
            select: {
              phasedRegistrationNames: {
                bubbled: "onSelect",
                captured: "onSelectCapture",
              },
              dependencies:
                "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(
                  " "
                ),
            },
          },
          lo = null,
          so = null,
          uo = null,
          co = !1;
        function po(e, t) {
          var r =
            t.window === t
              ? t.document
              : 9 === t.nodeType
              ? t
              : t.ownerDocument;
          return co || null == lo || lo !== jr(r)
            ? null
            : ("selectionStart" in (r = lo) && Qr(r)
                ? (r = { start: r.selectionStart, end: r.selectionEnd })
                : (r = {
                    anchorNode: (r = (
                      (r.ownerDocument && r.ownerDocument.defaultView) ||
                      window
                    ).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset,
                  }),
              uo && oo(uo, r)
                ? null
                : ((uo = r),
                  ((e = Vt.getPooled(ao.select, so, e, t)).type = "select"),
                  (e.target = lo),
                  Ot(e),
                  e));
        }
        var fo = {
          eventTypes: ao,
          extractEvents: function (e, t, r, n) {
            var o,
              i =
                n.window === n
                  ? n.document
                  : 9 === n.nodeType
                  ? n
                  : n.ownerDocument;
            if (!(o = !i)) {
              e: {
                (i = Fr(i)), (o = m.onSelect);
                for (var a = 0; a < o.length; a++)
                  if (!i.has(o[a])) {
                    i = !1;
                    break e;
                  }
                i = !0;
              }
              o = !i;
            }
            if (o) return null;
            switch (((i = t ? _n(t) : window), e)) {
              case "focus":
                (Mn(i) || "true" === i.contentEditable) &&
                  ((lo = i), (so = t), (uo = null));
                break;
              case "blur":
                uo = so = lo = null;
                break;
              case "mousedown":
                co = !0;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                return (co = !1), po(r, n);
              case "selectionchange":
                if (io) break;
              case "keydown":
              case "keyup":
                return po(r, n);
            }
            return null;
          },
        };
        A.injectEventPluginOrder(
          "ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(
            " "
          )
        ),
          (S = vn),
          (C = hn),
          (I = _n),
          A.injectEventPluginsByName({
            SimpleEventPlugin: vr,
            EnterLeaveEventPlugin: to,
            ChangeEventPlugin: Zn,
            SelectEventPlugin: fo,
            BeforeInputEventPlugin: Nn,
          }),
          new Set();
        var mo = [],
          ho = -1;
        function _o(e) {
          0 > ho || ((e.current = mo[ho]), (mo[ho] = null), ho--);
        }
        function vo(e, t) {
          ho++, (mo[ho] = e.current), (e.current = t);
        }
        var go = {},
          yo = { current: go },
          bo = { current: !1 },
          Eo = go;
        function So(e, t) {
          var r = e.type.contextTypes;
          if (!r) return go;
          var n = e.stateNode;
          if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
            return n.__reactInternalMemoizedMaskedChildContext;
          var o,
            i = {};
          for (o in r) i[o] = t[o];
          return (
            n &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function Co(e) {
          return null != (e = e.childContextTypes);
        }
        function Io(e) {
          _o(bo), _o(yo);
        }
        function wo(e) {
          _o(bo), _o(yo);
        }
        function ko(e, t, r) {
          if (yo.current !== go) throw Error(a(168));
          vo(yo, t), vo(bo, r);
        }
        function To(e, t, r) {
          var n = e.stateNode;
          if (
            ((e = t.childContextTypes), "function" != typeof n.getChildContext)
          )
            return r;
          for (var i in (n = n.getChildContext()))
            if (!(i in e)) throw Error(a(108, Y(t) || "Unknown", i));
          return o({}, r, {}, n);
        }
        function Ro(e) {
          var t = e.stateNode;
          return (
            (t = (t && t.__reactInternalMemoizedMergedChildContext) || go),
            (Eo = yo.current),
            vo(yo, t),
            vo(bo, bo.current),
            !0
          );
        }
        function Do(e, t, r) {
          var n = e.stateNode;
          if (!n) throw Error(a(169));
          r
            ? ((t = To(e, t, Eo)),
              (n.__reactInternalMemoizedMergedChildContext = t),
              _o(bo),
              _o(yo),
              vo(yo, t))
            : _o(bo),
            vo(bo, r);
        }
        var Po = i.unstable_runWithPriority,
          Ao = i.unstable_scheduleCallback,
          xo = i.unstable_cancelCallback,
          Oo = i.unstable_shouldYield,
          Fo = i.unstable_requestPaint,
          No = i.unstable_now,
          Vo = i.unstable_getCurrentPriorityLevel,
          Mo = i.unstable_ImmediatePriority,
          Lo = i.unstable_UserBlockingPriority,
          Bo = i.unstable_NormalPriority,
          Uo = i.unstable_LowPriority,
          Go = i.unstable_IdlePriority,
          Ho = {},
          Wo = void 0 !== Fo ? Fo : function () {},
          zo = null,
          jo = null,
          qo = !1,
          Ko = No(),
          $o =
            1e4 > Ko
              ? No
              : function () {
                  return No() - Ko;
                };
        function Xo() {
          switch (Vo()) {
            case Mo:
              return 99;
            case Lo:
              return 98;
            case Bo:
              return 97;
            case Uo:
              return 96;
            case Go:
              return 95;
            default:
              throw Error(a(332));
          }
        }
        function Qo(e) {
          switch (e) {
            case 99:
              return Mo;
            case 98:
              return Lo;
            case 97:
              return Bo;
            case 96:
              return Uo;
            case 95:
              return Go;
            default:
              throw Error(a(332));
          }
        }
        function Yo(e, t) {
          return (e = Qo(e)), Po(e, t);
        }
        function Jo(e, t, r) {
          return (e = Qo(e)), Ao(e, t, r);
        }
        function Zo(e) {
          return null === zo ? ((zo = [e]), (jo = Ao(Mo, ti))) : zo.push(e), Ho;
        }
        function ei() {
          if (null !== jo) {
            var e = jo;
            (jo = null), xo(e);
          }
          ti();
        }
        function ti() {
          if (!qo && null !== zo) {
            qo = !0;
            var e = 0;
            try {
              var t = zo;
              Yo(99, function () {
                for (; e < t.length; e++) {
                  var r = t[e];
                  do {
                    r = r(!0);
                  } while (null !== r);
                }
              }),
                (zo = null);
            } catch (t) {
              throw (null !== zo && (zo = zo.slice(e + 1)), Ao(Mo, ei), t);
            } finally {
              qo = !1;
            }
          }
        }
        var ri = 3;
        function ni(e, t, r) {
          return (
            1073741821 - (1 + (((1073741821 - e + t / 10) / (r /= 10)) | 0)) * r
          );
        }
        function oi(e, t) {
          if (e && e.defaultProps)
            for (var r in ((t = o({}, t)), (e = e.defaultProps)))
              void 0 === t[r] && (t[r] = e[r]);
          return t;
        }
        var ii = { current: null },
          ai = null,
          li = null,
          si = null;
        function ui() {
          si = li = ai = null;
        }
        function ci(e, t) {
          var r = e.type._context;
          vo(ii, r._currentValue), (r._currentValue = t);
        }
        function di(e) {
          var t = ii.current;
          _o(ii), (e.type._context._currentValue = t);
        }
        function pi(e, t) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (e.childExpirationTime < t)
              (e.childExpirationTime = t),
                null !== r &&
                  r.childExpirationTime < t &&
                  (r.childExpirationTime = t);
            else {
              if (!(null !== r && r.childExpirationTime < t)) break;
              r.childExpirationTime = t;
            }
            e = e.return;
          }
        }
        function fi(e, t) {
          (ai = e),
            (si = li = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (e.expirationTime >= t && (Ka = !0), (e.firstContext = null));
        }
        function mi(e, t) {
          if (si !== e && !1 !== t && 0 !== t)
            if (
              (("number" == typeof t && 1073741823 !== t) ||
                ((si = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === li)
            ) {
              if (null === ai) throw Error(a(308));
              (li = t),
                (ai.dependencies = {
                  expirationTime: 0,
                  firstContext: t,
                  responders: null,
                });
            } else li = li.next = t;
          return e._currentValue;
        }
        var hi = !1;
        function _i(e) {
          return {
            baseState: e,
            firstUpdate: null,
            lastUpdate: null,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null,
          };
        }
        function vi(e) {
          return {
            baseState: e.baseState,
            firstUpdate: e.firstUpdate,
            lastUpdate: e.lastUpdate,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null,
          };
        }
        function gi(e, t) {
          return {
            expirationTime: e,
            suspenseConfig: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
            nextEffect: null,
          };
        }
        function yi(e, t) {
          null === e.lastUpdate
            ? (e.firstUpdate = e.lastUpdate = t)
            : ((e.lastUpdate.next = t), (e.lastUpdate = t));
        }
        function bi(e, t) {
          var r = e.alternate;
          if (null === r) {
            var n = e.updateQueue,
              o = null;
            null === n && (n = e.updateQueue = _i(e.memoizedState));
          } else
            (n = e.updateQueue),
              (o = r.updateQueue),
              null === n
                ? null === o
                  ? ((n = e.updateQueue = _i(e.memoizedState)),
                    (o = r.updateQueue = _i(r.memoizedState)))
                  : (n = e.updateQueue = vi(o))
                : null === o && (o = r.updateQueue = vi(n));
          null === o || n === o
            ? yi(n, t)
            : null === n.lastUpdate || null === o.lastUpdate
            ? (yi(n, t), yi(o, t))
            : (yi(n, t), (o.lastUpdate = t));
        }
        function Ei(e, t) {
          var r = e.updateQueue;
          null ===
          (r = null === r ? (e.updateQueue = _i(e.memoizedState)) : Si(e, r))
            .lastCapturedUpdate
            ? (r.firstCapturedUpdate = r.lastCapturedUpdate = t)
            : ((r.lastCapturedUpdate.next = t), (r.lastCapturedUpdate = t));
        }
        function Si(e, t) {
          var r = e.alternate;
          return (
            null !== r && t === r.updateQueue && (t = e.updateQueue = vi(t)), t
          );
        }
        function Ci(e, t, r, n, i, a) {
          switch (r.tag) {
            case 1:
              return "function" == typeof (e = r.payload) ? e.call(a, n, i) : e;
            case 3:
              e.effectTag = (-4097 & e.effectTag) | 64;
            case 0:
              if (
                null ==
                (i = "function" == typeof (e = r.payload) ? e.call(a, n, i) : e)
              )
                break;
              return o({}, n, i);
            case 2:
              hi = !0;
          }
          return n;
        }
        function Ii(e, t, r, n, o) {
          hi = !1;
          for (
            var i = (t = Si(e, t)).baseState,
              a = null,
              l = 0,
              s = t.firstUpdate,
              u = i;
            null !== s;

          ) {
            var c = s.expirationTime;
            c < o
              ? (null === a && ((a = s), (i = u)), l < c && (l = c))
              : (Ds(c, s.suspenseConfig),
                (u = Ci(e, 0, s, u, r, n)),
                null !== s.callback &&
                  ((e.effectTag |= 32),
                  (s.nextEffect = null),
                  null === t.lastEffect
                    ? (t.firstEffect = t.lastEffect = s)
                    : ((t.lastEffect.nextEffect = s), (t.lastEffect = s)))),
              (s = s.next);
          }
          for (c = null, s = t.firstCapturedUpdate; null !== s; ) {
            var d = s.expirationTime;
            d < o
              ? (null === c && ((c = s), null === a && (i = u)),
                l < d && (l = d))
              : ((u = Ci(e, 0, s, u, r, n)),
                null !== s.callback &&
                  ((e.effectTag |= 32),
                  (s.nextEffect = null),
                  null === t.lastCapturedEffect
                    ? (t.firstCapturedEffect = t.lastCapturedEffect = s)
                    : ((t.lastCapturedEffect.nextEffect = s),
                      (t.lastCapturedEffect = s)))),
              (s = s.next);
          }
          null === a && (t.lastUpdate = null),
            null === c ? (t.lastCapturedUpdate = null) : (e.effectTag |= 32),
            null === a && null === c && (i = u),
            (t.baseState = i),
            (t.firstUpdate = a),
            (t.firstCapturedUpdate = c),
            Ps(l),
            (e.expirationTime = l),
            (e.memoizedState = u);
        }
        function wi(e, t, r) {
          null !== t.firstCapturedUpdate &&
            (null !== t.lastUpdate &&
              ((t.lastUpdate.next = t.firstCapturedUpdate),
              (t.lastUpdate = t.lastCapturedUpdate)),
            (t.firstCapturedUpdate = t.lastCapturedUpdate = null)),
            ki(t.firstEffect, r),
            (t.firstEffect = t.lastEffect = null),
            ki(t.firstCapturedEffect, r),
            (t.firstCapturedEffect = t.lastCapturedEffect = null);
        }
        function ki(e, t) {
          for (; null !== e; ) {
            var r = e.callback;
            if (null !== r) {
              e.callback = null;
              var n = t;
              if ("function" != typeof r) throw Error(a(191, r));
              r.call(n);
            }
            e = e.nextEffect;
          }
        }
        var Ti = O.ReactCurrentBatchConfig,
          Ri = new n.Component().refs;
        function Di(e, t, r, n) {
          (r = null == (r = r(n, (t = e.memoizedState))) ? t : o({}, t, r)),
            (e.memoizedState = r),
            null !== (n = e.updateQueue) &&
              0 === e.expirationTime &&
              (n.baseState = r);
        }
        var Pi = {
          isMounted: function (e) {
            return !!(e = e._reactInternalFiber) && tt(e) === e;
          },
          enqueueSetState: function (e, t, r) {
            e = e._reactInternalFiber;
            var n = _s(),
              o = Ti.suspense;
            ((o = gi((n = vs(n, e, o)), o)).payload = t),
              null != r && (o.callback = r),
              bi(e, o),
              gs(e, n);
          },
          enqueueReplaceState: function (e, t, r) {
            e = e._reactInternalFiber;
            var n = _s(),
              o = Ti.suspense;
            ((o = gi((n = vs(n, e, o)), o)).tag = 1),
              (o.payload = t),
              null != r && (o.callback = r),
              bi(e, o),
              gs(e, n);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternalFiber;
            var r = _s(),
              n = Ti.suspense;
            ((n = gi((r = vs(r, e, n)), n)).tag = 2),
              null != t && (n.callback = t),
              bi(e, n),
              gs(e, r);
          },
        };
        function Ai(e, t, r, n, o, i, a) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(n, i, a)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !oo(r, n) ||
                !oo(o, i);
        }
        function xi(e, t, r) {
          var n = !1,
            o = go,
            i = t.contextType;
          return (
            "object" == typeof i && null !== i
              ? (i = mi(i))
              : ((o = Co(t) ? Eo : yo.current),
                (i = (n = null != (n = t.contextTypes)) ? So(e, o) : go)),
            (t = new t(r, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Pi),
            (e.stateNode = t),
            (t._reactInternalFiber = e),
            n &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function Oi(e, t, r, n) {
          (e = t.state),
            "function" == typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(r, n),
            "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(r, n),
            t.state !== e && Pi.enqueueReplaceState(t, t.state, null);
        }
        function Fi(e, t, r, n) {
          var o = e.stateNode;
          (o.props = r), (o.state = e.memoizedState), (o.refs = Ri);
          var i = t.contextType;
          "object" == typeof i && null !== i
            ? (o.context = mi(i))
            : ((i = Co(t) ? Eo : yo.current), (o.context = So(e, i))),
            null !== (i = e.updateQueue) &&
              (Ii(e, i, r, o, n), (o.state = e.memoizedState)),
            "function" == typeof (i = t.getDerivedStateFromProps) &&
              (Di(e, t, i, r), (o.state = e.memoizedState)),
            "function" == typeof t.getDerivedStateFromProps ||
              "function" == typeof o.getSnapshotBeforeUpdate ||
              ("function" != typeof o.UNSAFE_componentWillMount &&
                "function" != typeof o.componentWillMount) ||
              ((t = o.state),
              "function" == typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" == typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && Pi.enqueueReplaceState(o, o.state, null),
              null !== (i = e.updateQueue) &&
                (Ii(e, i, r, o, n), (o.state = e.memoizedState))),
            "function" == typeof o.componentDidMount && (e.effectTag |= 4);
        }
        var Ni = Array.isArray;
        function Vi(e, t, r) {
          if (
            null !== (e = r.ref) &&
            "function" != typeof e &&
            "object" != typeof e
          ) {
            if (r._owner) {
              if ((r = r._owner)) {
                if (1 !== r.tag) throw Error(a(309));
                var n = r.stateNode;
              }
              if (!n) throw Error(a(147, e));
              var o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" == typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = n.refs;
                    t === Ri && (t = n.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" != typeof e) throw Error(a(284));
            if (!r._owner) throw Error(a(290, e));
          }
          return e;
        }
        function Mi(e, t) {
          if ("textarea" !== e.type)
            throw Error(
              a(
                31,
                "[object Object]" === Object.prototype.toString.call(t)
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : t,
                ""
              )
            );
        }
        function Li(e) {
          function t(t, r) {
            if (e) {
              var n = t.lastEffect;
              null !== n
                ? ((n.nextEffect = r), (t.lastEffect = r))
                : (t.firstEffect = t.lastEffect = r),
                (r.nextEffect = null),
                (r.effectTag = 8);
            }
          }
          function r(r, n) {
            if (!e) return null;
            for (; null !== n; ) t(r, n), (n = n.sibling);
            return null;
          }
          function n(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t, r) {
            return ((e = Qs(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, r, n) {
            return (
              (t.index = n),
              e
                ? null !== (n = t.alternate)
                  ? (n = n.index) < r
                    ? ((t.effectTag = 2), r)
                    : n
                  : ((t.effectTag = 2), r)
                : r
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.effectTag = 2), t;
          }
          function s(e, t, r, n) {
            return null === t || 6 !== t.tag
              ? (((t = Zs(r, e.mode, n)).return = e), t)
              : (((t = o(t, r)).return = e), t);
          }
          function u(e, t, r, n) {
            return null !== t && t.elementType === r.type
              ? (((n = o(t, r.props)).ref = Vi(e, t, r)), (n.return = e), n)
              : (((n = Ys(r.type, r.key, r.props, null, e.mode, n)).ref = Vi(
                  e,
                  t,
                  r
                )),
                (n.return = e),
                n);
          }
          function c(e, t, r, n) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== r.containerInfo ||
              t.stateNode.implementation !== r.implementation
              ? (((t = eu(r, e.mode, n)).return = e), t)
              : (((t = o(t, r.children || [])).return = e), t);
          }
          function d(e, t, r, n, i) {
            return null === t || 7 !== t.tag
              ? (((t = Js(r, e.mode, n, i)).return = e), t)
              : (((t = o(t, r)).return = e), t);
          }
          function p(e, t, r) {
            if ("string" == typeof t || "number" == typeof t)
              return ((t = Zs("" + t, e.mode, r)).return = e), t;
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case V:
                  return (
                    ((r = Ys(t.type, t.key, t.props, null, e.mode, r)).ref = Vi(
                      e,
                      null,
                      t
                    )),
                    (r.return = e),
                    r
                  );
                case M:
                  return ((t = eu(t, e.mode, r)).return = e), t;
              }
              if (Ni(t) || Q(t))
                return ((t = Js(t, e.mode, r, null)).return = e), t;
              Mi(e, t);
            }
            return null;
          }
          function f(e, t, r, n) {
            var o = null !== t ? t.key : null;
            if ("string" == typeof r || "number" == typeof r)
              return null !== o ? null : s(e, t, "" + r, n);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case V:
                  return r.key === o
                    ? r.type === L
                      ? d(e, t, r.props.children, n, o)
                      : u(e, t, r, n)
                    : null;
                case M:
                  return r.key === o ? c(e, t, r, n) : null;
              }
              if (Ni(r) || Q(r)) return null !== o ? null : d(e, t, r, n, null);
              Mi(e, r);
            }
            return null;
          }
          function m(e, t, r, n, o) {
            if ("string" == typeof n || "number" == typeof n)
              return s(t, (e = e.get(r) || null), "" + n, o);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case V:
                  return (
                    (e = e.get(null === n.key ? r : n.key) || null),
                    n.type === L
                      ? d(t, e, n.props.children, o, n.key)
                      : u(t, e, n, o)
                  );
                case M:
                  return c(
                    t,
                    (e = e.get(null === n.key ? r : n.key) || null),
                    n,
                    o
                  );
              }
              if (Ni(n) || Q(n))
                return d(t, (e = e.get(r) || null), n, o, null);
              Mi(t, n);
            }
            return null;
          }
          function h(o, a, l, s) {
            for (
              var u = null, c = null, d = a, h = (a = 0), _ = null;
              null !== d && h < l.length;
              h++
            ) {
              d.index > h ? ((_ = d), (d = null)) : (_ = d.sibling);
              var v = f(o, d, l[h], s);
              if (null === v) {
                null === d && (d = _);
                break;
              }
              e && d && null === v.alternate && t(o, d),
                (a = i(v, a, h)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v),
                (d = _);
            }
            if (h === l.length) return r(o, d), u;
            if (null === d) {
              for (; h < l.length; h++)
                null !== (d = p(o, l[h], s)) &&
                  ((a = i(d, a, h)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return u;
            }
            for (d = n(o, d); h < l.length; h++)
              null !== (_ = m(d, o, h, l[h], s)) &&
                (e &&
                  null !== _.alternate &&
                  d.delete(null === _.key ? h : _.key),
                (a = i(_, a, h)),
                null === c ? (u = _) : (c.sibling = _),
                (c = _));
            return (
              e &&
                d.forEach(function (e) {
                  return t(o, e);
                }),
              u
            );
          }
          function _(o, l, s, u) {
            var c = Q(s);
            if ("function" != typeof c) throw Error(a(150));
            if (null == (s = c.call(s))) throw Error(a(151));
            for (
              var d = (c = null), h = l, _ = (l = 0), v = null, g = s.next();
              null !== h && !g.done;
              _++, g = s.next()
            ) {
              h.index > _ ? ((v = h), (h = null)) : (v = h.sibling);
              var y = f(o, h, g.value, u);
              if (null === y) {
                null === h && (h = v);
                break;
              }
              e && h && null === y.alternate && t(o, h),
                (l = i(y, l, _)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y),
                (h = v);
            }
            if (g.done) return r(o, h), c;
            if (null === h) {
              for (; !g.done; _++, g = s.next())
                null !== (g = p(o, g.value, u)) &&
                  ((l = i(g, l, _)),
                  null === d ? (c = g) : (d.sibling = g),
                  (d = g));
              return c;
            }
            for (h = n(o, h); !g.done; _++, g = s.next())
              null !== (g = m(h, o, _, g.value, u)) &&
                (e &&
                  null !== g.alternate &&
                  h.delete(null === g.key ? _ : g.key),
                (l = i(g, l, _)),
                null === d ? (c = g) : (d.sibling = g),
                (d = g));
            return (
              e &&
                h.forEach(function (e) {
                  return t(o, e);
                }),
              c
            );
          }
          return function (e, n, i, s) {
            var u =
              "object" == typeof i &&
              null !== i &&
              i.type === L &&
              null === i.key;
            u && (i = i.props.children);
            var c = "object" == typeof i && null !== i;
            if (c)
              switch (i.$$typeof) {
                case V:
                  e: {
                    for (c = i.key, u = n; null !== u; ) {
                      if (u.key === c) {
                        if (
                          7 === u.tag ? i.type === L : u.elementType === i.type
                        ) {
                          r(e, u.sibling),
                            ((n = o(
                              u,
                              i.type === L ? i.props.children : i.props
                            )).ref = Vi(e, u, i)),
                            (n.return = e),
                            (e = n);
                          break e;
                        }
                        r(e, u);
                        break;
                      }
                      t(e, u), (u = u.sibling);
                    }
                    i.type === L
                      ? (((n = Js(i.props.children, e.mode, s, i.key)).return =
                          e),
                        (e = n))
                      : (((s = Ys(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          e.mode,
                          s
                        )).ref = Vi(e, n, i)),
                        (s.return = e),
                        (e = s));
                  }
                  return l(e);
                case M:
                  e: {
                    for (u = i.key; null !== n; ) {
                      if (n.key === u) {
                        if (
                          4 === n.tag &&
                          n.stateNode.containerInfo === i.containerInfo &&
                          n.stateNode.implementation === i.implementation
                        ) {
                          r(e, n.sibling),
                            ((n = o(n, i.children || [])).return = e),
                            (e = n);
                          break e;
                        }
                        r(e, n);
                        break;
                      }
                      t(e, n), (n = n.sibling);
                    }
                    ((n = eu(i, e.mode, s)).return = e), (e = n);
                  }
                  return l(e);
              }
            if ("string" == typeof i || "number" == typeof i)
              return (
                (i = "" + i),
                null !== n && 6 === n.tag
                  ? (r(e, n.sibling), ((n = o(n, i)).return = e), (e = n))
                  : (r(e, n), ((n = Zs(i, e.mode, s)).return = e), (e = n)),
                l(e)
              );
            if (Ni(i)) return h(e, n, i, s);
            if (Q(i)) return _(e, n, i, s);
            if ((c && Mi(e, i), void 0 === i && !u))
              switch (e.tag) {
                case 1:
                case 0:
                  throw (
                    ((e = e.type),
                    Error(a(152, e.displayName || e.name || "Component")))
                  );
              }
            return r(e, n);
          };
        }
        var Bi = Li(!0),
          Ui = Li(!1),
          Gi = {},
          Hi = { current: Gi },
          Wi = { current: Gi },
          zi = { current: Gi };
        function ji(e) {
          if (e === Gi) throw Error(a(174));
          return e;
        }
        function qi(e, t) {
          vo(zi, t), vo(Wi, e), vo(Hi, Gi);
          var r = t.nodeType;
          switch (r) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : Ue(null, "");
              break;
            default:
              t = Ue(
                (t = (r = 8 === r ? t.parentNode : t).namespaceURI || null),
                (r = r.tagName)
              );
          }
          _o(Hi), vo(Hi, t);
        }
        function Ki(e) {
          _o(Hi), _o(Wi), _o(zi);
        }
        function $i(e) {
          ji(zi.current);
          var t = ji(Hi.current),
            r = Ue(t, e.type);
          t !== r && (vo(Wi, e), vo(Hi, r));
        }
        function Xi(e) {
          Wi.current === e && (_o(Hi), _o(Wi));
        }
        var Qi = { current: 0 };
        function Yi(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var r = t.memoizedState;
              if (
                null !== r &&
                (null === (r = r.dehydrated) || r.data === Zr || r.data === en)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 != (64 & t.effectTag)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        function Ji(e, t) {
          return { responder: e, props: t };
        }
        var Zi = O.ReactCurrentDispatcher,
          ea = O.ReactCurrentBatchConfig,
          ta = 0,
          ra = null,
          na = null,
          oa = null,
          ia = null,
          aa = null,
          la = null,
          sa = 0,
          ua = null,
          ca = 0,
          da = !1,
          pa = null,
          fa = 0;
        function ma() {
          throw Error(a(321));
        }
        function ha(e, t) {
          if (null === t) return !1;
          for (var r = 0; r < t.length && r < e.length; r++)
            if (!ro(e[r], t[r])) return !1;
          return !0;
        }
        function _a(e, t, r, n, o, i) {
          if (
            ((ta = i),
            (ra = t),
            (oa = null !== e ? e.memoizedState : null),
            (Zi.current = null === oa ? Na : Va),
            (t = r(n, o)),
            da)
          ) {
            do {
              (da = !1),
                (fa += 1),
                (oa = null !== e ? e.memoizedState : null),
                (la = ia),
                (ua = aa = na = null),
                (Zi.current = Va),
                (t = r(n, o));
            } while (da);
            (pa = null), (fa = 0);
          }
          if (
            ((Zi.current = Fa),
            ((e = ra).memoizedState = ia),
            (e.expirationTime = sa),
            (e.updateQueue = ua),
            (e.effectTag |= ca),
            (e = null !== na && null !== na.next),
            (ta = 0),
            (la = aa = ia = oa = na = ra = null),
            (sa = 0),
            (ua = null),
            (ca = 0),
            e)
          )
            throw Error(a(300));
          return t;
        }
        function va() {
          (Zi.current = Fa),
            (ta = 0),
            (la = aa = ia = oa = na = ra = null),
            (sa = 0),
            (ua = null),
            (ca = 0),
            (da = !1),
            (pa = null),
            (fa = 0);
        }
        function ga() {
          var e = {
            memoizedState: null,
            baseState: null,
            queue: null,
            baseUpdate: null,
            next: null,
          };
          return null === aa ? (ia = aa = e) : (aa = aa.next = e), aa;
        }
        function ya() {
          if (null !== la)
            (la = (aa = la).next), (oa = null !== (na = oa) ? na.next : null);
          else {
            if (null === oa) throw Error(a(310));
            var e = {
              memoizedState: (na = oa).memoizedState,
              baseState: na.baseState,
              queue: na.queue,
              baseUpdate: na.baseUpdate,
              next: null,
            };
            (aa = null === aa ? (ia = e) : (aa.next = e)), (oa = na.next);
          }
          return aa;
        }
        function ba(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function Ea(e) {
          var t = ya(),
            r = t.queue;
          if (null === r) throw Error(a(311));
          if (((r.lastRenderedReducer = e), 0 < fa)) {
            var n = r.dispatch;
            if (null !== pa) {
              var o = pa.get(r);
              if (void 0 !== o) {
                pa.delete(r);
                var i = t.memoizedState;
                do {
                  (i = e(i, o.action)), (o = o.next);
                } while (null !== o);
                return (
                  ro(i, t.memoizedState) || (Ka = !0),
                  (t.memoizedState = i),
                  t.baseUpdate === r.last && (t.baseState = i),
                  (r.lastRenderedState = i),
                  [i, n]
                );
              }
            }
            return [t.memoizedState, n];
          }
          n = r.last;
          var l = t.baseUpdate;
          if (
            ((i = t.baseState),
            null !== l
              ? (null !== n && (n.next = null), (n = l.next))
              : (n = null !== n ? n.next : null),
            null !== n)
          ) {
            var s = (o = null),
              u = n,
              c = !1;
            do {
              var d = u.expirationTime;
              d < ta
                ? (c || ((c = !0), (s = l), (o = i)), d > sa && Ps((sa = d)))
                : (Ds(d, u.suspenseConfig),
                  (i = u.eagerReducer === e ? u.eagerState : e(i, u.action))),
                (l = u),
                (u = u.next);
            } while (null !== u && u !== n);
            c || ((s = l), (o = i)),
              ro(i, t.memoizedState) || (Ka = !0),
              (t.memoizedState = i),
              (t.baseUpdate = s),
              (t.baseState = o),
              (r.lastRenderedState = i);
          }
          return [t.memoizedState, r.dispatch];
        }
        function Sa(e) {
          var t = ga();
          return (
            "function" == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue =
              {
                last: null,
                dispatch: null,
                lastRenderedReducer: ba,
                lastRenderedState: e,
              }).dispatch =
              Oa.bind(null, ra, e)),
            [t.memoizedState, e]
          );
        }
        function Ca(e) {
          return Ea(ba);
        }
        function Ia(e, t, r, n) {
          return (
            (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
            null === ua
              ? ((ua = { lastEffect: null }).lastEffect = e.next = e)
              : null === (t = ua.lastEffect)
              ? (ua.lastEffect = e.next = e)
              : ((r = t.next), (t.next = e), (e.next = r), (ua.lastEffect = e)),
            e
          );
        }
        function wa(e, t, r, n) {
          var o = ga();
          (ca |= e),
            (o.memoizedState = Ia(t, r, void 0, void 0 === n ? null : n));
        }
        function ka(e, t, r, n) {
          var o = ya();
          n = void 0 === n ? null : n;
          var i = void 0;
          if (null !== na) {
            var a = na.memoizedState;
            if (((i = a.destroy), null !== n && ha(n, a.deps)))
              return void Ia(0, r, i, n);
          }
          (ca |= e), (o.memoizedState = Ia(t, r, i, n));
        }
        function Ta(e, t) {
          return wa(516, 192, e, t);
        }
        function Ra(e, t) {
          return ka(516, 192, e, t);
        }
        function Da(e, t) {
          return "function" == typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null != t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Pa() {}
        function Aa(e, t) {
          return (ga().memoizedState = [e, void 0 === t ? null : t]), e;
        }
        function xa(e, t) {
          var r = ya();
          t = void 0 === t ? null : t;
          var n = r.memoizedState;
          return null !== n && null !== t && ha(t, n[1])
            ? n[0]
            : ((r.memoizedState = [e, t]), e);
        }
        function Oa(e, t, r) {
          if (!(25 > fa)) throw Error(a(301));
          var n = e.alternate;
          if (e === ra || (null !== n && n === ra))
            if (
              ((da = !0),
              (e = {
                expirationTime: ta,
                suspenseConfig: null,
                action: r,
                eagerReducer: null,
                eagerState: null,
                next: null,
              }),
              null === pa && (pa = new Map()),
              void 0 === (r = pa.get(t)))
            )
              pa.set(t, e);
            else {
              for (t = r; null !== t.next; ) t = t.next;
              t.next = e;
            }
          else {
            var o = _s(),
              i = Ti.suspense;
            i = {
              expirationTime: (o = vs(o, e, i)),
              suspenseConfig: i,
              action: r,
              eagerReducer: null,
              eagerState: null,
              next: null,
            };
            var l = t.last;
            if (null === l) i.next = i;
            else {
              var s = l.next;
              null !== s && (i.next = s), (l.next = i);
            }
            if (
              ((t.last = i),
              0 === e.expirationTime &&
                (null === n || 0 === n.expirationTime) &&
                null !== (n = t.lastRenderedReducer))
            )
              try {
                var u = t.lastRenderedState,
                  c = n(u, r);
                if (((i.eagerReducer = n), (i.eagerState = c), ro(c, u)))
                  return;
              } catch (e) {}
            gs(e, o);
          }
        }
        var Fa = {
            readContext: mi,
            useCallback: ma,
            useContext: ma,
            useEffect: ma,
            useImperativeHandle: ma,
            useLayoutEffect: ma,
            useMemo: ma,
            useReducer: ma,
            useRef: ma,
            useState: ma,
            useDebugValue: ma,
            useResponder: ma,
            useDeferredValue: ma,
            useTransition: ma,
          },
          Na = {
            readContext: mi,
            useCallback: Aa,
            useContext: mi,
            useEffect: Ta,
            useImperativeHandle: function (e, t, r) {
              return (
                (r = null != r ? r.concat([e]) : null),
                wa(4, 36, Da.bind(null, t, e), r)
              );
            },
            useLayoutEffect: function (e, t) {
              return wa(4, 36, e, t);
            },
            useMemo: function (e, t) {
              var r = ga();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (r.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, r) {
              var n = ga();
              return (
                (t = void 0 !== r ? r(t) : t),
                (n.memoizedState = n.baseState = t),
                (e = (e = n.queue =
                  {
                    last: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                  }).dispatch =
                  Oa.bind(null, ra, e)),
                [n.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (ga().memoizedState = e);
            },
            useState: Sa,
            useDebugValue: Pa,
            useResponder: Ji,
            useDeferredValue: function (e, t) {
              var r = Sa(e),
                n = r[0],
                o = r[1];
              return (
                Ta(
                  function () {
                    i.unstable_next(function () {
                      var r = ea.suspense;
                      ea.suspense = void 0 === t ? null : t;
                      try {
                        o(e);
                      } finally {
                        ea.suspense = r;
                      }
                    });
                  },
                  [e, t]
                ),
                n
              );
            },
            useTransition: function (e) {
              var t = Sa(!1),
                r = t[0],
                n = t[1];
              return [
                Aa(
                  function (t) {
                    n(!0),
                      i.unstable_next(function () {
                        var r = ea.suspense;
                        ea.suspense = void 0 === e ? null : e;
                        try {
                          n(!1), t();
                        } finally {
                          ea.suspense = r;
                        }
                      });
                  },
                  [e, r]
                ),
                r,
              ];
            },
          },
          Va = {
            readContext: mi,
            useCallback: xa,
            useContext: mi,
            useEffect: Ra,
            useImperativeHandle: function (e, t, r) {
              return (
                (r = null != r ? r.concat([e]) : null),
                ka(4, 36, Da.bind(null, t, e), r)
              );
            },
            useLayoutEffect: function (e, t) {
              return ka(4, 36, e, t);
            },
            useMemo: function (e, t) {
              var r = ya();
              t = void 0 === t ? null : t;
              var n = r.memoizedState;
              return null !== n && null !== t && ha(t, n[1])
                ? n[0]
                : ((e = e()), (r.memoizedState = [e, t]), e);
            },
            useReducer: Ea,
            useRef: function () {
              return ya().memoizedState;
            },
            useState: Ca,
            useDebugValue: Pa,
            useResponder: Ji,
            useDeferredValue: function (e, t) {
              var r = Ca(),
                n = r[0],
                o = r[1];
              return (
                Ra(
                  function () {
                    i.unstable_next(function () {
                      var r = ea.suspense;
                      ea.suspense = void 0 === t ? null : t;
                      try {
                        o(e);
                      } finally {
                        ea.suspense = r;
                      }
                    });
                  },
                  [e, t]
                ),
                n
              );
            },
            useTransition: function (e) {
              var t = Ca(),
                r = t[0],
                n = t[1];
              return [
                xa(
                  function (t) {
                    n(!0),
                      i.unstable_next(function () {
                        var r = ea.suspense;
                        ea.suspense = void 0 === e ? null : e;
                        try {
                          n(!1), t();
                        } finally {
                          ea.suspense = r;
                        }
                      });
                  },
                  [e, r]
                ),
                r,
              ];
            },
          },
          Ma = null,
          La = null,
          Ba = !1;
        function Ua(e, t) {
          var r = $s(5, null, null, 0);
          (r.elementType = "DELETED"),
            (r.type = "DELETED"),
            (r.stateNode = t),
            (r.return = e),
            (r.effectTag = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = r), (e.lastEffect = r))
              : (e.firstEffect = e.lastEffect = r);
        }
        function Ga(e, t) {
          switch (e.tag) {
            case 5:
              var r = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    r.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) && ((e.stateNode = t), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), !0)
              );
            default:
              return !1;
          }
        }
        function Ha(e) {
          if (Ba) {
            var t = La;
            if (t) {
              var r = t;
              if (!Ga(e, t)) {
                if (!(t = sn(r.nextSibling)) || !Ga(e, t))
                  return (
                    (e.effectTag = (-1025 & e.effectTag) | 2),
                    (Ba = !1),
                    void (Ma = e)
                  );
                Ua(Ma, r);
              }
              (Ma = e), (La = sn(t.firstChild));
            } else
              (e.effectTag = (-1025 & e.effectTag) | 2), (Ba = !1), (Ma = e);
          }
        }
        function Wa(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          Ma = e;
        }
        function za(e) {
          if (e !== Ma) return !1;
          if (!Ba) return Wa(e), (Ba = !0), !1;
          var t = e.type;
          if (
            5 !== e.tag ||
            ("head" !== t && "body" !== t && !on(t, e.memoizedProps))
          )
            for (t = La; t; ) Ua(e, t), (t = sn(t.nextSibling));
          if ((Wa(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var r = e.data;
                  if (r === Jr) {
                    if (0 === t) {
                      La = sn(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else (r !== Yr && r !== en && r !== Zr) || t++;
                }
                e = e.nextSibling;
              }
              La = null;
            }
          } else La = Ma ? sn(e.stateNode.nextSibling) : null;
          return !0;
        }
        function ja() {
          (La = Ma = null), (Ba = !1);
        }
        var qa = O.ReactCurrentOwner,
          Ka = !1;
        function $a(e, t, r, n) {
          t.child = null === e ? Ui(t, null, r, n) : Bi(t, e.child, r, n);
        }
        function Xa(e, t, r, n, o) {
          r = r.render;
          var i = t.ref;
          return (
            fi(t, o),
            (n = _a(e, t, r, n, i, o)),
            null === e || Ka
              ? ((t.effectTag |= 1), $a(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.effectTag &= -517),
                e.expirationTime <= o && (e.expirationTime = 0),
                pl(e, t, o))
          );
        }
        function Qa(e, t, r, n, o, i) {
          if (null === e) {
            var a = r.type;
            return "function" != typeof a ||
              Xs(a) ||
              void 0 !== a.defaultProps ||
              null !== r.compare ||
              void 0 !== r.defaultProps
              ? (((e = Ys(r.type, null, n, null, t.mode, i)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Ya(e, t, a, n, o, i));
          }
          return (
            (a = e.child),
            o < i &&
            ((o = a.memoizedProps),
            (r = null !== (r = r.compare) ? r : oo)(o, n) && e.ref === t.ref)
              ? pl(e, t, i)
              : ((t.effectTag |= 1),
                ((e = Qs(a, n)).ref = t.ref),
                (e.return = t),
                (t.child = e))
          );
        }
        function Ya(e, t, r, n, o, i) {
          return null !== e &&
            oo(e.memoizedProps, n) &&
            e.ref === t.ref &&
            ((Ka = !1), o < i)
            ? pl(e, t, i)
            : Za(e, t, r, n, i);
        }
        function Ja(e, t) {
          var r = t.ref;
          ((null === e && null !== r) || (null !== e && e.ref !== r)) &&
            (t.effectTag |= 128);
        }
        function Za(e, t, r, n, o) {
          var i = Co(r) ? Eo : yo.current;
          return (
            (i = So(t, i)),
            fi(t, o),
            (r = _a(e, t, r, n, i, o)),
            null === e || Ka
              ? ((t.effectTag |= 1), $a(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.effectTag &= -517),
                e.expirationTime <= o && (e.expirationTime = 0),
                pl(e, t, o))
          );
        }
        function el(e, t, r, n, o) {
          if (Co(r)) {
            var i = !0;
            Ro(t);
          } else i = !1;
          if ((fi(t, o), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
              xi(t, r, n),
              Fi(t, r, n, o),
              (n = !0);
          else if (null === e) {
            var a = t.stateNode,
              l = t.memoizedProps;
            a.props = l;
            var s = a.context,
              u = r.contextType;
            "object" == typeof u && null !== u
              ? (u = mi(u))
              : (u = So(t, (u = Co(r) ? Eo : yo.current)));
            var c = r.getDerivedStateFromProps,
              d =
                "function" == typeof c ||
                "function" == typeof a.getSnapshotBeforeUpdate;
            d ||
              ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                "function" != typeof a.componentWillReceiveProps) ||
              ((l !== n || s !== u) && Oi(t, a, n, u)),
              (hi = !1);
            var p = t.memoizedState;
            s = a.state = p;
            var f = t.updateQueue;
            null !== f && (Ii(t, f, n, a, o), (s = t.memoizedState)),
              l !== n || p !== s || bo.current || hi
                ? ("function" == typeof c &&
                    (Di(t, r, c, n), (s = t.memoizedState)),
                  (l = hi || Ai(t, r, l, n, p, s, u))
                    ? (d ||
                        ("function" != typeof a.UNSAFE_componentWillMount &&
                          "function" != typeof a.componentWillMount) ||
                        ("function" == typeof a.componentWillMount &&
                          a.componentWillMount(),
                        "function" == typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      "function" == typeof a.componentDidMount &&
                        (t.effectTag |= 4))
                    : ("function" == typeof a.componentDidMount &&
                        (t.effectTag |= 4),
                      (t.memoizedProps = n),
                      (t.memoizedState = s)),
                  (a.props = n),
                  (a.state = s),
                  (a.context = u),
                  (n = l))
                : ("function" == typeof a.componentDidMount &&
                    (t.effectTag |= 4),
                  (n = !1));
          } else
            (a = t.stateNode),
              (l = t.memoizedProps),
              (a.props = t.type === t.elementType ? l : oi(t.type, l)),
              (s = a.context),
              "object" == typeof (u = r.contextType) && null !== u
                ? (u = mi(u))
                : (u = So(t, (u = Co(r) ? Eo : yo.current))),
              (d =
                "function" == typeof (c = r.getDerivedStateFromProps) ||
                "function" == typeof a.getSnapshotBeforeUpdate) ||
                ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof a.componentWillReceiveProps) ||
                ((l !== n || s !== u) && Oi(t, a, n, u)),
              (hi = !1),
              (s = t.memoizedState),
              (p = a.state = s),
              null !== (f = t.updateQueue) &&
                (Ii(t, f, n, a, o), (p = t.memoizedState)),
              l !== n || s !== p || bo.current || hi
                ? ("function" == typeof c &&
                    (Di(t, r, c, n), (p = t.memoizedState)),
                  (c = hi || Ai(t, r, l, n, s, p, u))
                    ? (d ||
                        ("function" != typeof a.UNSAFE_componentWillUpdate &&
                          "function" != typeof a.componentWillUpdate) ||
                        ("function" == typeof a.componentWillUpdate &&
                          a.componentWillUpdate(n, p, u),
                        "function" == typeof a.UNSAFE_componentWillUpdate &&
                          a.UNSAFE_componentWillUpdate(n, p, u)),
                      "function" == typeof a.componentDidUpdate &&
                        (t.effectTag |= 4),
                      "function" == typeof a.getSnapshotBeforeUpdate &&
                        (t.effectTag |= 256))
                    : ("function" != typeof a.componentDidUpdate ||
                        (l === e.memoizedProps && s === e.memoizedState) ||
                        (t.effectTag |= 4),
                      "function" != typeof a.getSnapshotBeforeUpdate ||
                        (l === e.memoizedProps && s === e.memoizedState) ||
                        (t.effectTag |= 256),
                      (t.memoizedProps = n),
                      (t.memoizedState = p)),
                  (a.props = n),
                  (a.state = p),
                  (a.context = u),
                  (n = c))
                : ("function" != typeof a.componentDidUpdate ||
                    (l === e.memoizedProps && s === e.memoizedState) ||
                    (t.effectTag |= 4),
                  "function" != typeof a.getSnapshotBeforeUpdate ||
                    (l === e.memoizedProps && s === e.memoizedState) ||
                    (t.effectTag |= 256),
                  (n = !1));
          return tl(e, t, r, n, i, o);
        }
        function tl(e, t, r, n, o, i) {
          Ja(e, t);
          var a = 0 != (64 & t.effectTag);
          if (!n && !a) return o && Do(t, r, !1), pl(e, t, i);
          (n = t.stateNode), (qa.current = t);
          var l =
            a && "function" != typeof r.getDerivedStateFromError
              ? null
              : n.render();
          return (
            (t.effectTag |= 1),
            null !== e && a
              ? ((t.child = Bi(t, e.child, null, i)),
                (t.child = Bi(t, null, l, i)))
              : $a(e, t, l, i),
            (t.memoizedState = n.state),
            o && Do(t, r, !0),
            t.child
          );
        }
        function rl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? ko(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && ko(0, t.context, !1),
            qi(e, t.containerInfo);
        }
        var nl,
          ol,
          il,
          al,
          ll = { dehydrated: null, retryTime: 0 };
        function sl(e, t, r) {
          var n,
            o = t.mode,
            i = t.pendingProps,
            a = Qi.current,
            l = !1;
          if (
            ((n = 0 != (64 & t.effectTag)) ||
              (n = 0 != (2 & a) && (null === e || null !== e.memoizedState)),
            n
              ? ((l = !0), (t.effectTag &= -65))
              : (null !== e && null === e.memoizedState) ||
                void 0 === i.fallback ||
                !0 === i.unstable_avoidThisFallback ||
                (a |= 1),
            vo(Qi, 1 & a),
            null === e)
          ) {
            if ((void 0 !== i.fallback && Ha(t), l)) {
              if (
                ((l = i.fallback),
                ((i = Js(null, o, 0, null)).return = t),
                0 == (2 & t.mode))
              )
                for (
                  e = null !== t.memoizedState ? t.child.child : t.child,
                    i.child = e;
                  null !== e;

                )
                  (e.return = i), (e = e.sibling);
              return (
                ((r = Js(l, o, r, null)).return = t),
                (i.sibling = r),
                (t.memoizedState = ll),
                (t.child = i),
                r
              );
            }
            return (
              (o = i.children),
              (t.memoizedState = null),
              (t.child = Ui(t, null, o, r))
            );
          }
          if (null !== e.memoizedState) {
            if (((o = (e = e.child).sibling), l)) {
              if (
                ((i = i.fallback),
                ((r = Qs(e, e.pendingProps)).return = t),
                0 == (2 & t.mode) &&
                  (l = null !== t.memoizedState ? t.child.child : t.child) !==
                    e.child)
              )
                for (r.child = l; null !== l; ) (l.return = r), (l = l.sibling);
              return (
                ((o = Qs(o, i, o.expirationTime)).return = t),
                (r.sibling = o),
                (r.childExpirationTime = 0),
                (t.memoizedState = ll),
                (t.child = r),
                o
              );
            }
            return (
              (r = Bi(t, e.child, i.children, r)),
              (t.memoizedState = null),
              (t.child = r)
            );
          }
          if (((e = e.child), l)) {
            if (
              ((l = i.fallback),
              ((i = Js(null, o, 0, null)).return = t),
              (i.child = e),
              null !== e && (e.return = i),
              0 == (2 & t.mode))
            )
              for (
                e = null !== t.memoizedState ? t.child.child : t.child,
                  i.child = e;
                null !== e;

              )
                (e.return = i), (e = e.sibling);
            return (
              ((r = Js(l, o, r, null)).return = t),
              (i.sibling = r),
              (r.effectTag |= 2),
              (i.childExpirationTime = 0),
              (t.memoizedState = ll),
              (t.child = i),
              r
            );
          }
          return (t.memoizedState = null), (t.child = Bi(t, e, i.children, r));
        }
        function ul(e, t) {
          e.expirationTime < t && (e.expirationTime = t);
          var r = e.alternate;
          null !== r && r.expirationTime < t && (r.expirationTime = t),
            pi(e.return, t);
        }
        function cl(e, t, r, n, o, i) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                last: n,
                tail: r,
                tailExpiration: 0,
                tailMode: o,
                lastEffect: i,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.last = n),
              (a.tail = r),
              (a.tailExpiration = 0),
              (a.tailMode = o),
              (a.lastEffect = i));
        }
        function dl(e, t, r) {
          var n = t.pendingProps,
            o = n.revealOrder,
            i = n.tail;
          if (($a(e, t, n.children, r), 0 != (2 & (n = Qi.current))))
            (n = (1 & n) | 2), (t.effectTag |= 64);
          else {
            if (null !== e && 0 != (64 & e.effectTag))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && ul(e, r);
                else if (19 === e.tag) ul(e, r);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            n &= 1;
          }
          if ((vo(Qi, n), 0 == (2 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (r = t.child, o = null; null !== r; )
                  null !== (e = r.alternate) && null === Yi(e) && (o = r),
                    (r = r.sibling);
                null === (r = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = r.sibling), (r.sibling = null)),
                  cl(t, !1, o, r, i, t.lastEffect);
                break;
              case "backwards":
                for (r = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === Yi(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = r), (r = o), (o = e);
                }
                cl(t, !0, r, null, i, t.lastEffect);
                break;
              case "together":
                cl(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function pl(e, t, r) {
          null !== e && (t.dependencies = e.dependencies);
          var n = t.expirationTime;
          if ((0 !== n && Ps(n), t.childExpirationTime < r)) return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              r = Qs((e = t.child), e.pendingProps, e.expirationTime),
                t.child = r,
                r.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((r = r.sibling =
                  Qs(e, e.pendingProps, e.expirationTime)).return = t);
            r.sibling = null;
          }
          return t.child;
        }
        function fl(e) {
          e.effectTag |= 4;
        }
        function ml(e, t) {
          switch (e.tailMode) {
            case "hidden":
              t = e.tail;
              for (var r = null; null !== t; )
                null !== t.alternate && (r = t), (t = t.sibling);
              null === r ? (e.tail = null) : (r.sibling = null);
              break;
            case "collapsed":
              r = e.tail;
              for (var n = null; null !== r; )
                null !== r.alternate && (n = r), (r = r.sibling);
              null === n
                ? t || null === e.tail
                  ? (e.tail = null)
                  : (e.tail.sibling = null)
                : (n.sibling = null);
          }
        }
        function hl(e) {
          switch (e.tag) {
            case 1:
              Co(e.type) && Io();
              var t = e.effectTag;
              return 4096 & t ? ((e.effectTag = (-4097 & t) | 64), e) : null;
            case 3:
              if ((Ki(), wo(), 0 != (64 & (t = e.effectTag))))
                throw Error(a(285));
              return (e.effectTag = (-4097 & t) | 64), e;
            case 5:
              return Xi(e), null;
            case 13:
              return (
                _o(Qi),
                4096 & (t = e.effectTag)
                  ? ((e.effectTag = (-4097 & t) | 64), e)
                  : null
              );
            case 19:
              return _o(Qi), null;
            case 4:
              return Ki(), null;
            case 10:
              return di(e), null;
            default:
              return null;
          }
        }
        function _l(e, t) {
          return { value: e, source: t, stack: J(t) };
        }
        (nl = function (e, t) {
          for (var r = t.child; null !== r; ) {
            if (5 === r.tag || 6 === r.tag) e.appendChild(r.stateNode);
            else if (4 !== r.tag && null !== r.child) {
              (r.child.return = r), (r = r.child);
              continue;
            }
            if (r === t) break;
            for (; null === r.sibling; ) {
              if (null === r.return || r.return === t) return;
              r = r.return;
            }
            (r.sibling.return = r.return), (r = r.sibling);
          }
        }),
          (ol = function () {}),
          (il = function (e, t, r, n, i) {
            var a = e.memoizedProps;
            if (a !== n) {
              var l,
                s,
                u = t.stateNode;
              switch ((ji(Hi.current), (e = null), r)) {
                case "input":
                  (a = ke(u, a)), (n = ke(u, n)), (e = []);
                  break;
                case "option":
                  (a = xe(u, a)), (n = xe(u, n)), (e = []);
                  break;
                case "select":
                  (a = o({}, a, { value: void 0 })),
                    (n = o({}, n, { value: void 0 })),
                    (e = []);
                  break;
                case "textarea":
                  (a = Fe(u, a)), (n = Fe(u, n)), (e = []);
                  break;
                default:
                  "function" != typeof a.onClick &&
                    "function" == typeof n.onClick &&
                    (u.onclick = zr);
              }
              for (l in (Gr(r, n), (r = null), a))
                if (!n.hasOwnProperty(l) && a.hasOwnProperty(l) && null != a[l])
                  if ("style" === l)
                    for (s in (u = a[l]))
                      u.hasOwnProperty(s) && (r || (r = {}), (r[s] = ""));
                  else
                    "dangerouslySetInnerHTML" !== l &&
                      "children" !== l &&
                      "suppressContentEditableWarning" !== l &&
                      "suppressHydrationWarning" !== l &&
                      "autoFocus" !== l &&
                      (f.hasOwnProperty(l)
                        ? e || (e = [])
                        : (e = e || []).push(l, null));
              for (l in n) {
                var c = n[l];
                if (
                  ((u = null != a ? a[l] : void 0),
                  n.hasOwnProperty(l) && c !== u && (null != c || null != u))
                )
                  if ("style" === l)
                    if (u) {
                      for (s in u)
                        !u.hasOwnProperty(s) ||
                          (c && c.hasOwnProperty(s)) ||
                          (r || (r = {}), (r[s] = ""));
                      for (s in c)
                        c.hasOwnProperty(s) &&
                          u[s] !== c[s] &&
                          (r || (r = {}), (r[s] = c[s]));
                    } else r || (e || (e = []), e.push(l, r)), (r = c);
                  else
                    "dangerouslySetInnerHTML" === l
                      ? ((c = c ? c.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != c && u !== c && (e = e || []).push(l, "" + c))
                      : "children" === l
                      ? u === c ||
                        ("string" != typeof c && "number" != typeof c) ||
                        (e = e || []).push(l, "" + c)
                      : "suppressContentEditableWarning" !== l &&
                        "suppressHydrationWarning" !== l &&
                        (f.hasOwnProperty(l)
                          ? (null != c && Wr(i, l), e || u === c || (e = []))
                          : (e = e || []).push(l, c));
              }
              r && (e = e || []).push("style", r),
                (i = e),
                (t.updateQueue = i) && fl(t);
            }
          }),
          (al = function (e, t, r, n) {
            r !== n && fl(t);
          });
        var vl = "function" == typeof WeakSet ? WeakSet : Set;
        function gl(e, t) {
          var r = t.source,
            n = t.stack;
          null === n && null !== r && (n = J(r)),
            null !== r && Y(r.type),
            (t = t.value),
            null !== e && 1 === e.tag && Y(e.type);
          try {
            console.error(t);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        function yl(e) {
          var t = e.ref;
          if (null !== t)
            if ("function" == typeof t)
              try {
                t(null);
              } catch (t) {
                Hs(e, t);
              }
            else t.current = null;
        }
        function bl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              El(2, 0, t);
              break;
            case 1:
              if (256 & t.effectTag && null !== e) {
                var r = e.memoizedProps,
                  n = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                  t.elementType === t.type ? r : oi(t.type, r),
                  n
                )),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              break;
            case 3:
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(a(163));
          }
        }
        function El(e, t, r) {
          if (
            null !== (r = null !== (r = r.updateQueue) ? r.lastEffect : null)
          ) {
            var n = (r = r.next);
            do {
              if (0 != (n.tag & e)) {
                var o = n.destroy;
                (n.destroy = void 0), void 0 !== o && o();
              }
              0 != (n.tag & t) && ((o = n.create), (n.destroy = o())),
                (n = n.next);
            } while (n !== r);
          }
        }
        function Sl(e, t, r) {
          switch (("function" == typeof qs && qs(t), t.tag)) {
            case 0:
            case 11:
            case 14:
            case 15:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = e.next;
                Yo(97 < r ? 97 : r, function () {
                  var e = n;
                  do {
                    var r = e.destroy;
                    if (void 0 !== r) {
                      var o = t;
                      try {
                        r();
                      } catch (e) {
                        Hs(o, e);
                      }
                    }
                    e = e.next;
                  } while (e !== n);
                });
              }
              break;
            case 1:
              yl(t),
                "function" == typeof (r = t.stateNode).componentWillUnmount &&
                  (function (e, t) {
                    try {
                      (t.props = e.memoizedProps),
                        (t.state = e.memoizedState),
                        t.componentWillUnmount();
                    } catch (t) {
                      Hs(e, t);
                    }
                  })(t, r);
              break;
            case 5:
              yl(t);
              break;
            case 4:
              kl(e, t, r);
          }
        }
        function Cl(e) {
          var t = e.alternate;
          (e.return = null),
            (e.child = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.alternate = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.pendingProps = null),
            (e.memoizedProps = null),
            null !== t && Cl(t);
        }
        function Il(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function wl(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (Il(t)) {
                var r = t;
                break e;
              }
              t = t.return;
            }
            throw Error(a(160));
          }
          switch (((t = r.stateNode), r.tag)) {
            case 5:
              var n = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (n = !0);
              break;
            default:
              throw Error(a(161));
          }
          16 & r.effectTag && (ze(t, ""), (r.effectTag &= -17));
          e: t: for (r = e; ; ) {
            for (; null === r.sibling; ) {
              if (null === r.return || Il(r.return)) {
                r = null;
                break e;
              }
              r = r.return;
            }
            for (
              r.sibling.return = r.return, r = r.sibling;
              5 !== r.tag && 6 !== r.tag && 18 !== r.tag;

            ) {
              if (2 & r.effectTag) continue t;
              if (null === r.child || 4 === r.tag) continue t;
              (r.child.return = r), (r = r.child);
            }
            if (!(2 & r.effectTag)) {
              r = r.stateNode;
              break e;
            }
          }
          for (var o = e; ; ) {
            var i = 5 === o.tag || 6 === o.tag;
            if (i) {
              var l = i ? o.stateNode : o.stateNode.instance;
              if (r)
                if (n) {
                  var s = l;
                  (l = r),
                    8 === (i = t).nodeType
                      ? i.parentNode.insertBefore(s, l)
                      : i.insertBefore(s, l);
                } else t.insertBefore(l, r);
              else
                n
                  ? (8 === (s = t).nodeType
                      ? (i = s.parentNode).insertBefore(l, s)
                      : (i = s).appendChild(l),
                    null != (s = s._reactRootContainer) ||
                      null !== i.onclick ||
                      (i.onclick = zr))
                  : t.appendChild(l);
            } else if (4 !== o.tag && null !== o.child) {
              (o.child.return = o), (o = o.child);
              continue;
            }
            if (o === e) break;
            for (; null === o.sibling; ) {
              if (null === o.return || o.return === e) return;
              o = o.return;
            }
            (o.sibling.return = o.return), (o = o.sibling);
          }
        }
        function kl(e, t, r) {
          for (var n, o, i = t, l = !1; ; ) {
            if (!l) {
              l = i.return;
              e: for (;;) {
                if (null === l) throw Error(a(160));
                switch (((n = l.stateNode), l.tag)) {
                  case 5:
                    o = !1;
                    break e;
                  case 3:
                  case 4:
                    (n = n.containerInfo), (o = !0);
                    break e;
                }
                l = l.return;
              }
              l = !0;
            }
            if (5 === i.tag || 6 === i.tag) {
              e: for (var s = e, u = i, c = r, d = u; ; )
                if ((Sl(s, d, c), null !== d.child && 4 !== d.tag))
                  (d.child.return = d), (d = d.child);
                else {
                  if (d === u) break;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === u) break e;
                    d = d.return;
                  }
                  (d.sibling.return = d.return), (d = d.sibling);
                }
              o
                ? ((s = n),
                  (u = i.stateNode),
                  8 === s.nodeType
                    ? s.parentNode.removeChild(u)
                    : s.removeChild(u))
                : n.removeChild(i.stateNode);
            } else if (4 === i.tag) {
              if (null !== i.child) {
                (n = i.stateNode.containerInfo),
                  (o = !0),
                  (i.child.return = i),
                  (i = i.child);
                continue;
              }
            } else if ((Sl(e, i, r), null !== i.child)) {
              (i.child.return = i), (i = i.child);
              continue;
            }
            if (i === t) break;
            for (; null === i.sibling; ) {
              if (null === i.return || i.return === t) return;
              4 === (i = i.return).tag && (l = !1);
            }
            (i.sibling.return = i.return), (i = i.sibling);
          }
        }
        function Tl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              El(4, 8, t);
              break;
            case 1:
            case 12:
            case 17:
            case 20:
            case 21:
              break;
            case 5:
              var r = t.stateNode;
              if (null != r) {
                var n = t.memoizedProps,
                  o = null !== e ? e.memoizedProps : n;
                e = t.type;
                var i = t.updateQueue;
                if (((t.updateQueue = null), null !== i)) {
                  for (
                    r[pn] = n,
                      "input" === e &&
                        "radio" === n.type &&
                        null != n.name &&
                        Re(r, n),
                      Hr(e, o),
                      t = Hr(e, n),
                      o = 0;
                    o < i.length;
                    o += 2
                  ) {
                    var l = i[o],
                      s = i[o + 1];
                    "style" === l
                      ? Br(r, s)
                      : "dangerouslySetInnerHTML" === l
                      ? We(r, s)
                      : "children" === l
                      ? ze(r, s)
                      : Se(r, l, s, t);
                  }
                  switch (e) {
                    case "input":
                      De(r, n);
                      break;
                    case "textarea":
                      Ve(r, n);
                      break;
                    case "select":
                      (t = r._wrapperState.wasMultiple),
                        (r._wrapperState.wasMultiple = !!n.multiple),
                        null != (e = n.value)
                          ? Oe(r, !!n.multiple, e, !1)
                          : t !== !!n.multiple &&
                            (null != n.defaultValue
                              ? Oe(r, !!n.multiple, n.defaultValue, !0)
                              : Oe(r, !!n.multiple, n.multiple ? [] : "", !1));
                  }
                }
              }
              break;
            case 6:
              if (null === t.stateNode) throw Error(a(162));
              t.stateNode.nodeValue = t.memoizedProps;
              break;
            case 3:
              (t = t.stateNode).hydrate &&
                ((t.hydrate = !1), kt(t.containerInfo));
              break;
            case 13:
              if (
                ((r = t),
                null === t.memoizedState
                  ? (n = !1)
                  : ((n = !0), (r = t.child), (ns = $o())),
                null !== r)
              )
                e: for (e = r; ; ) {
                  if (5 === e.tag)
                    (i = e.stateNode),
                      n
                        ? "function" == typeof (i = i.style).setProperty
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none")
                        : ((i = e.stateNode),
                          (o =
                            null != (o = e.memoizedProps.style) &&
                            o.hasOwnProperty("display")
                              ? o.display
                              : null),
                          (i.style.display = Lr("display", o)));
                  else if (6 === e.tag)
                    e.stateNode.nodeValue = n ? "" : e.memoizedProps;
                  else {
                    if (
                      13 === e.tag &&
                      null !== e.memoizedState &&
                      null === e.memoizedState.dehydrated
                    ) {
                      ((i = e.child.sibling).return = e), (e = i);
                      continue;
                    }
                    if (null !== e.child) {
                      (e.child.return = e), (e = e.child);
                      continue;
                    }
                  }
                  if (e === r) break e;
                  for (; null === e.sibling; ) {
                    if (null === e.return || e.return === r) break e;
                    e = e.return;
                  }
                  (e.sibling.return = e.return), (e = e.sibling);
                }
              Rl(t);
              break;
            case 19:
              Rl(t);
              break;
            default:
              throw Error(a(163));
          }
        }
        function Rl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var r = e.stateNode;
            null === r && (r = e.stateNode = new vl()),
              t.forEach(function (t) {
                var n = zs.bind(null, e, t);
                r.has(t) || (r.add(t), t.then(n, n));
              });
          }
        }
        var Dl = "function" == typeof WeakMap ? WeakMap : Map;
        function Pl(e, t, r) {
          ((r = gi(r, null)).tag = 3), (r.payload = { element: null });
          var n = t.value;
          return (
            (r.callback = function () {
              as || ((as = !0), (ls = n)), gl(e, t);
            }),
            r
          );
        }
        function Al(e, t, r) {
          (r = gi(r, null)).tag = 3;
          var n = e.type.getDerivedStateFromError;
          if ("function" == typeof n) {
            var o = t.value;
            r.payload = function () {
              return gl(e, t), n(o);
            };
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" == typeof i.componentDidCatch &&
              (r.callback = function () {
                "function" != typeof n &&
                  (null === ss ? (ss = new Set([this])) : ss.add(this),
                  gl(e, t));
                var r = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== r ? r : "",
                });
              }),
            r
          );
        }
        var xl,
          Ol = Math.ceil,
          Fl = O.ReactCurrentDispatcher,
          Nl = O.ReactCurrentOwner,
          Vl = 0,
          Ml = 8,
          Ll = 16,
          Bl = 32,
          Ul = 0,
          Gl = 1,
          Hl = 2,
          Wl = 3,
          zl = 4,
          jl = 5,
          ql = Vl,
          Kl = null,
          $l = null,
          Xl = 0,
          Ql = Ul,
          Yl = null,
          Jl = 1073741823,
          Zl = 1073741823,
          es = null,
          ts = 0,
          rs = !1,
          ns = 0,
          os = 500,
          is = null,
          as = !1,
          ls = null,
          ss = null,
          us = !1,
          cs = null,
          ds = 90,
          ps = null,
          fs = 0,
          ms = null,
          hs = 0;
        function _s() {
          return (ql & (Ll | Bl)) !== Vl
            ? 1073741821 - (($o() / 10) | 0)
            : 0 !== hs
            ? hs
            : (hs = 1073741821 - (($o() / 10) | 0));
        }
        function vs(e, t, r) {
          if (0 == (2 & (t = t.mode))) return 1073741823;
          var n = Xo();
          if (0 == (4 & t)) return 99 === n ? 1073741823 : 1073741822;
          if ((ql & Ll) !== Vl) return Xl;
          if (null !== r) e = ni(e, 0 | r.timeoutMs || 5e3, 250);
          else
            switch (n) {
              case 99:
                e = 1073741823;
                break;
              case 98:
                e = ni(e, 150, 100);
                break;
              case 97:
              case 96:
                e = ni(e, 5e3, 250);
                break;
              case 95:
                e = 2;
                break;
              default:
                throw Error(a(326));
            }
          return null !== Kl && e === Xl && --e, e;
        }
        function gs(e, t) {
          if (50 < fs) throw ((fs = 0), (ms = null), Error(a(185)));
          if (null !== (e = ys(e, t))) {
            var r = Xo();
            1073741823 === t
              ? (ql & Ml) !== Vl && (ql & (Ll | Bl)) === Vl
                ? Cs(e)
                : (Es(e), ql === Vl && ei())
              : Es(e),
              (4 & ql) === Vl ||
                (98 !== r && 99 !== r) ||
                (null === ps
                  ? (ps = new Map([[e, t]]))
                  : (void 0 === (r = ps.get(e)) || r > t) && ps.set(e, t));
          }
        }
        function ys(e, t) {
          e.expirationTime < t && (e.expirationTime = t);
          var r = e.alternate;
          null !== r && r.expirationTime < t && (r.expirationTime = t);
          var n = e.return,
            o = null;
          if (null === n && 3 === e.tag) o = e.stateNode;
          else
            for (; null !== n; ) {
              if (
                ((r = n.alternate),
                n.childExpirationTime < t && (n.childExpirationTime = t),
                null !== r &&
                  r.childExpirationTime < t &&
                  (r.childExpirationTime = t),
                null === n.return && 3 === n.tag)
              ) {
                o = n.stateNode;
                break;
              }
              n = n.return;
            }
          return (
            null !== o &&
              (Kl === o && (Ps(t), Ql === zl && nu(o, Xl)), ou(o, t)),
            o
          );
        }
        function bs(e) {
          var t = e.lastExpiredTime;
          return 0 !== t
            ? t
            : ru(e, (t = e.firstPendingTime))
            ? (t = e.lastPingedTime) > (e = e.nextKnownPendingLevel)
              ? t
              : e
            : t;
        }
        function Es(e) {
          if (0 !== e.lastExpiredTime)
            (e.callbackExpirationTime = 1073741823),
              (e.callbackPriority = 99),
              (e.callbackNode = Zo(Cs.bind(null, e)));
          else {
            var t = bs(e),
              r = e.callbackNode;
            if (0 === t)
              null !== r &&
                ((e.callbackNode = null),
                (e.callbackExpirationTime = 0),
                (e.callbackPriority = 90));
            else {
              var n = _s();
              if (
                (1073741823 === t
                  ? (n = 99)
                  : 1 === t || 2 === t
                  ? (n = 95)
                  : (n =
                      0 >= (n = 10 * (1073741821 - t) - 10 * (1073741821 - n))
                        ? 99
                        : 250 >= n
                        ? 98
                        : 5250 >= n
                        ? 97
                        : 95),
                null !== r)
              ) {
                var o = e.callbackPriority;
                if (e.callbackExpirationTime === t && o >= n) return;
                r !== Ho && xo(r);
              }
              (e.callbackExpirationTime = t),
                (e.callbackPriority = n),
                (t =
                  1073741823 === t
                    ? Zo(Cs.bind(null, e))
                    : Jo(n, Ss.bind(null, e), {
                        timeout: 10 * (1073741821 - t) - $o(),
                      })),
                (e.callbackNode = t);
            }
          }
        }
        function Ss(e, t) {
          if (((hs = 0), t)) return iu(e, (t = _s())), Es(e), null;
          var r = bs(e);
          if (0 !== r) {
            if (((t = e.callbackNode), (ql & (Ll | Bl)) !== Vl))
              throw Error(a(327));
            if ((Bs(), (e === Kl && r === Xl) || ks(e, r), null !== $l)) {
              var n = ql;
              ql |= Ll;
              for (var o = Rs(); ; )
                try {
                  xs();
                  break;
                } catch (t) {
                  Ts(e, t);
                }
              if ((ui(), (ql = n), (Fl.current = o), Ql === Gl))
                throw ((t = Yl), ks(e, r), nu(e, r), Es(e), t);
              if (null === $l)
                switch (
                  ((o = e.finishedWork = e.current.alternate),
                  (e.finishedExpirationTime = r),
                  (n = Ql),
                  (Kl = null),
                  n)
                ) {
                  case Ul:
                  case Gl:
                    throw Error(a(345));
                  case Hl:
                    iu(e, 2 < r ? 2 : r);
                    break;
                  case Wl:
                    if (
                      (nu(e, r),
                      r === (n = e.lastSuspendedTime) &&
                        (e.nextKnownPendingLevel = Ns(o)),
                      1073741823 === Jl && 10 < (o = ns + os - $o()))
                    ) {
                      if (rs) {
                        var i = e.lastPingedTime;
                        if (0 === i || i >= r) {
                          (e.lastPingedTime = r), ks(e, r);
                          break;
                        }
                      }
                      if (0 !== (i = bs(e)) && i !== r) break;
                      if (0 !== n && n !== r) {
                        e.lastPingedTime = n;
                        break;
                      }
                      e.timeoutHandle = an(Vs.bind(null, e), o);
                      break;
                    }
                    Vs(e);
                    break;
                  case zl:
                    if (
                      (nu(e, r),
                      r === (n = e.lastSuspendedTime) &&
                        (e.nextKnownPendingLevel = Ns(o)),
                      rs && (0 === (o = e.lastPingedTime) || o >= r))
                    ) {
                      (e.lastPingedTime = r), ks(e, r);
                      break;
                    }
                    if (0 !== (o = bs(e)) && o !== r) break;
                    if (0 !== n && n !== r) {
                      e.lastPingedTime = n;
                      break;
                    }
                    if (
                      (1073741823 !== Zl
                        ? (n = 10 * (1073741821 - Zl) - $o())
                        : 1073741823 === Jl
                        ? (n = 0)
                        : ((n = 10 * (1073741821 - Jl) - 5e3),
                          0 > (n = (o = $o()) - n) && (n = 0),
                          (r = 10 * (1073741821 - r) - o) <
                            (n =
                              (120 > n
                                ? 120
                                : 480 > n
                                ? 480
                                : 1080 > n
                                ? 1080
                                : 1920 > n
                                ? 1920
                                : 3e3 > n
                                ? 3e3
                                : 4320 > n
                                ? 4320
                                : 1960 * Ol(n / 1960)) - n) && (n = r)),
                      10 < n)
                    ) {
                      e.timeoutHandle = an(Vs.bind(null, e), n);
                      break;
                    }
                    Vs(e);
                    break;
                  case jl:
                    if (1073741823 !== Jl && null !== es) {
                      i = Jl;
                      var l = es;
                      if (
                        (0 >= (n = 0 | l.busyMinDurationMs)
                          ? (n = 0)
                          : ((o = 0 | l.busyDelayMs),
                            (n =
                              (i =
                                $o() -
                                (10 * (1073741821 - i) -
                                  (0 | l.timeoutMs || 5e3))) <= o
                                ? 0
                                : o + n - i)),
                        10 < n)
                      ) {
                        nu(e, r), (e.timeoutHandle = an(Vs.bind(null, e), n));
                        break;
                      }
                    }
                    Vs(e);
                    break;
                  default:
                    throw Error(a(329));
                }
              if ((Es(e), e.callbackNode === t)) return Ss.bind(null, e);
            }
          }
          return null;
        }
        function Cs(e) {
          var t = e.lastExpiredTime;
          if (((t = 0 !== t ? t : 1073741823), e.finishedExpirationTime === t))
            Vs(e);
          else {
            if ((ql & (Ll | Bl)) !== Vl) throw Error(a(327));
            if ((Bs(), (e === Kl && t === Xl) || ks(e, t), null !== $l)) {
              var r = ql;
              ql |= Ll;
              for (var n = Rs(); ; )
                try {
                  As();
                  break;
                } catch (t) {
                  Ts(e, t);
                }
              if ((ui(), (ql = r), (Fl.current = n), Ql === Gl))
                throw ((r = Yl), ks(e, t), nu(e, t), Es(e), r);
              if (null !== $l) throw Error(a(261));
              (e.finishedWork = e.current.alternate),
                (e.finishedExpirationTime = t),
                (Kl = null),
                Vs(e),
                Es(e);
            }
          }
          return null;
        }
        function Is(e, t) {
          var r = ql;
          ql |= 1;
          try {
            return e(t);
          } finally {
            (ql = r) === Vl && ei();
          }
        }
        function ws(e, t) {
          var r = ql;
          (ql &= -2), (ql |= Ml);
          try {
            return e(t);
          } finally {
            (ql = r) === Vl && ei();
          }
        }
        function ks(e, t) {
          (e.finishedWork = null), (e.finishedExpirationTime = 0);
          var r = e.timeoutHandle;
          if ((-1 !== r && ((e.timeoutHandle = -1), ln(r)), null !== $l))
            for (r = $l.return; null !== r; ) {
              var n = r;
              switch (n.tag) {
                case 1:
                  var o = n.type.childContextTypes;
                  null != o && Io();
                  break;
                case 3:
                  Ki(), wo();
                  break;
                case 5:
                  Xi(n);
                  break;
                case 4:
                  Ki();
                  break;
                case 13:
                case 19:
                  _o(Qi);
                  break;
                case 10:
                  di(n);
              }
              r = r.return;
            }
          (Kl = e),
            ($l = Qs(e.current, null)),
            (Xl = t),
            (Ql = Ul),
            (Yl = null),
            (Zl = Jl = 1073741823),
            (es = null),
            (ts = 0),
            (rs = !1);
        }
        function Ts(e, t) {
          for (;;) {
            try {
              if ((ui(), va(), null === $l || null === $l.return))
                return (Ql = Gl), (Yl = t), null;
              e: {
                var r = e,
                  n = $l.return,
                  o = $l,
                  i = t;
                if (
                  ((t = Xl),
                  (o.effectTag |= 2048),
                  (o.firstEffect = o.lastEffect = null),
                  null !== i &&
                    "object" == typeof i &&
                    "function" == typeof i.then)
                ) {
                  var a = i,
                    l = 0 != (1 & Qi.current),
                    s = n;
                  do {
                    var u;
                    if ((u = 13 === s.tag)) {
                      var c = s.memoizedState;
                      if (null !== c) u = null !== c.dehydrated;
                      else {
                        var d = s.memoizedProps;
                        u =
                          void 0 !== d.fallback &&
                          (!0 !== d.unstable_avoidThisFallback || !l);
                      }
                    }
                    if (u) {
                      var p = s.updateQueue;
                      if (null === p) {
                        var f = new Set();
                        f.add(a), (s.updateQueue = f);
                      } else p.add(a);
                      if (0 == (2 & s.mode)) {
                        if (
                          ((s.effectTag |= 64),
                          (o.effectTag &= -2981),
                          1 === o.tag)
                        )
                          if (null === o.alternate) o.tag = 17;
                          else {
                            var m = gi(1073741823, null);
                            (m.tag = 2), bi(o, m);
                          }
                        o.expirationTime = 1073741823;
                        break e;
                      }
                      (i = void 0), (o = t);
                      var h = r.pingCache;
                      if (
                        (null === h
                          ? ((h = r.pingCache = new Dl()),
                            (i = new Set()),
                            h.set(a, i))
                          : void 0 === (i = h.get(a)) &&
                            ((i = new Set()), h.set(a, i)),
                        !i.has(o))
                      ) {
                        i.add(o);
                        var _ = Ws.bind(null, r, a, o);
                        a.then(_, _);
                      }
                      (s.effectTag |= 4096), (s.expirationTime = t);
                      break e;
                    }
                    s = s.return;
                  } while (null !== s);
                  i = Error(
                    (Y(o.type) || "A React component") +
                      " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                      J(o)
                  );
                }
                Ql !== jl && (Ql = Hl), (i = _l(i, o)), (s = n);
                do {
                  switch (s.tag) {
                    case 3:
                      (a = i),
                        (s.effectTag |= 4096),
                        (s.expirationTime = t),
                        Ei(s, Pl(s, a, t));
                      break e;
                    case 1:
                      a = i;
                      var v = s.type,
                        g = s.stateNode;
                      if (
                        0 == (64 & s.effectTag) &&
                        ("function" == typeof v.getDerivedStateFromError ||
                          (null !== g &&
                            "function" == typeof g.componentDidCatch &&
                            (null === ss || !ss.has(g))))
                      ) {
                        (s.effectTag |= 4096),
                          (s.expirationTime = t),
                          Ei(s, Al(s, a, t));
                        break e;
                      }
                  }
                  s = s.return;
                } while (null !== s);
              }
              $l = Fs($l);
            } catch (e) {
              t = e;
              continue;
            }
            break;
          }
        }
        function Rs() {
          var e = Fl.current;
          return (Fl.current = Fa), null === e ? Fa : e;
        }
        function Ds(e, t) {
          e < Jl && 2 < e && (Jl = e),
            null !== t && e < Zl && 2 < e && ((Zl = e), (es = t));
        }
        function Ps(e) {
          e > ts && (ts = e);
        }
        function As() {
          for (; null !== $l; ) $l = Os($l);
        }
        function xs() {
          for (; null !== $l && !Oo(); ) $l = Os($l);
        }
        function Os(e) {
          var t = xl(e.alternate, e, Xl);
          return (
            (e.memoizedProps = e.pendingProps),
            null === t && (t = Fs(e)),
            (Nl.current = null),
            t
          );
        }
        function Fs(e) {
          $l = e;
          do {
            var t = $l.alternate;
            if (((e = $l.return), 0 == (2048 & $l.effectTag))) {
              e: {
                var r = t,
                  n = Xl,
                  i = (t = $l).pendingProps;
                switch (t.tag) {
                  case 2:
                  case 16:
                  case 15:
                  case 0:
                  case 11:
                  case 7:
                  case 8:
                  case 12:
                  case 9:
                  case 14:
                  case 20:
                  case 21:
                    break;
                  case 1:
                  case 17:
                    Co(t.type) && Io();
                    break;
                  case 3:
                    Ki(),
                      wo(),
                      (i = t.stateNode).pendingContext &&
                        ((i.context = i.pendingContext),
                        (i.pendingContext = null)),
                      (null === r || null === r.child) && za(t) && fl(t),
                      ol(t);
                    break;
                  case 5:
                    Xi(t), (n = ji(zi.current));
                    var l = t.type;
                    if (null !== r && null != t.stateNode)
                      il(r, t, l, i, n),
                        r.ref !== t.ref && (t.effectTag |= 128);
                    else if (i) {
                      var s = ji(Hi.current);
                      if (za(t)) {
                        var u = (i = t).stateNode;
                        r = i.type;
                        var c = i.memoizedProps,
                          d = n;
                        switch (
                          ((u[dn] = i), (u[pn] = c), (l = void 0), (n = u), r)
                        ) {
                          case "iframe":
                          case "object":
                          case "embed":
                            wr("load", n);
                            break;
                          case "video":
                          case "audio":
                            for (u = 0; u < et.length; u++) wr(et[u], n);
                            break;
                          case "source":
                            wr("error", n);
                            break;
                          case "img":
                          case "image":
                          case "link":
                            wr("error", n), wr("load", n);
                            break;
                          case "form":
                            wr("reset", n), wr("submit", n);
                            break;
                          case "details":
                            wr("toggle", n);
                            break;
                          case "input":
                            Te(n, c), wr("invalid", n), Wr(d, "onChange");
                            break;
                          case "select":
                            (n._wrapperState = { wasMultiple: !!c.multiple }),
                              wr("invalid", n),
                              Wr(d, "onChange");
                            break;
                          case "textarea":
                            Ne(n, c), wr("invalid", n), Wr(d, "onChange");
                        }
                        for (l in (Gr(r, c), (u = null), c))
                          c.hasOwnProperty(l) &&
                            ((s = c[l]),
                            "children" === l
                              ? "string" == typeof s
                                ? n.textContent !== s && (u = ["children", s])
                                : "number" == typeof s &&
                                  n.textContent !== "" + s &&
                                  (u = ["children", "" + s])
                              : f.hasOwnProperty(l) && null != s && Wr(d, l));
                        switch (r) {
                          case "input":
                            Ie(n), Pe(n, c, !0);
                            break;
                          case "textarea":
                            Ie(n), Me(n);
                            break;
                          case "select":
                          case "option":
                            break;
                          default:
                            "function" == typeof c.onClick && (n.onclick = zr);
                        }
                        (l = u), (i.updateQueue = l), (i = null !== l) && fl(t);
                      } else {
                        (r = t),
                          (d = l),
                          (c = i),
                          (u = 9 === n.nodeType ? n : n.ownerDocument),
                          s === Le.html && (s = Be(d)),
                          s === Le.html
                            ? "script" === d
                              ? (((c = u.createElement("div")).innerHTML =
                                  "<script></script>"),
                                (u = c.removeChild(c.firstChild)))
                              : "string" == typeof c.is
                              ? (u = u.createElement(d, { is: c.is }))
                              : ((u = u.createElement(d)),
                                "select" === d &&
                                  ((d = u),
                                  c.multiple
                                    ? (d.multiple = !0)
                                    : c.size && (d.size = c.size)))
                            : (u = u.createElementNS(s, d)),
                          ((c = u)[dn] = r),
                          (c[pn] = i),
                          nl(c, t, !1, !1),
                          (t.stateNode = c);
                        var p = n,
                          m = Hr((d = l), (r = i));
                        switch (d) {
                          case "iframe":
                          case "object":
                          case "embed":
                            wr("load", c), (n = r);
                            break;
                          case "video":
                          case "audio":
                            for (n = 0; n < et.length; n++) wr(et[n], c);
                            n = r;
                            break;
                          case "source":
                            wr("error", c), (n = r);
                            break;
                          case "img":
                          case "image":
                          case "link":
                            wr("error", c), wr("load", c), (n = r);
                            break;
                          case "form":
                            wr("reset", c), wr("submit", c), (n = r);
                            break;
                          case "details":
                            wr("toggle", c), (n = r);
                            break;
                          case "input":
                            Te(c, r),
                              (n = ke(c, r)),
                              wr("invalid", c),
                              Wr(p, "onChange");
                            break;
                          case "option":
                            n = xe(c, r);
                            break;
                          case "select":
                            (c._wrapperState = { wasMultiple: !!r.multiple }),
                              (n = o({}, r, { value: void 0 })),
                              wr("invalid", c),
                              Wr(p, "onChange");
                            break;
                          case "textarea":
                            Ne(c, r),
                              (n = Fe(c, r)),
                              wr("invalid", c),
                              Wr(p, "onChange");
                            break;
                          default:
                            n = r;
                        }
                        Gr(d, n), (u = void 0), (s = d);
                        var h = c,
                          _ = n;
                        for (u in _)
                          if (_.hasOwnProperty(u)) {
                            var v = _[u];
                            "style" === u
                              ? Br(h, v)
                              : "dangerouslySetInnerHTML" === u
                              ? null != (v = v ? v.__html : void 0) && We(h, v)
                              : "children" === u
                              ? "string" == typeof v
                                ? ("textarea" !== s || "" !== v) && ze(h, v)
                                : "number" == typeof v && ze(h, "" + v)
                              : "suppressContentEditableWarning" !== u &&
                                "suppressHydrationWarning" !== u &&
                                "autoFocus" !== u &&
                                (f.hasOwnProperty(u)
                                  ? null != v && Wr(p, u)
                                  : null != v && Se(h, u, v, m));
                          }
                        switch (d) {
                          case "input":
                            Ie(c), Pe(c, r, !1);
                            break;
                          case "textarea":
                            Ie(c), Me(c);
                            break;
                          case "option":
                            null != r.value &&
                              c.setAttribute("value", "" + Ee(r.value));
                            break;
                          case "select":
                            ((n = c).multiple = !!r.multiple),
                              null != (c = r.value)
                                ? Oe(n, !!r.multiple, c, !1)
                                : null != r.defaultValue &&
                                  Oe(n, !!r.multiple, r.defaultValue, !0);
                            break;
                          default:
                            "function" == typeof n.onClick && (c.onclick = zr);
                        }
                        (i = nn(l, i)) && fl(t);
                      }
                      null !== t.ref && (t.effectTag |= 128);
                    } else if (null === t.stateNode) throw Error(a(166));
                    break;
                  case 6:
                    if (r && null != t.stateNode) al(r, t, r.memoizedProps, i);
                    else {
                      if ("string" != typeof i && null === t.stateNode)
                        throw Error(a(166));
                      (n = ji(zi.current)),
                        ji(Hi.current),
                        za(t)
                          ? ((l = (i = t).stateNode),
                            (n = i.memoizedProps),
                            (l[dn] = i),
                            (i = l.nodeValue !== n) && fl(t))
                          : ((l = t),
                            ((i = (
                              9 === n.nodeType ? n : n.ownerDocument
                            ).createTextNode(i))[dn] = l),
                            (t.stateNode = i));
                    }
                    break;
                  case 13:
                    if (
                      (_o(Qi), (i = t.memoizedState), 0 != (64 & t.effectTag))
                    ) {
                      t.expirationTime = n;
                      break e;
                    }
                    (i = null !== i),
                      (l = !1),
                      null === r
                        ? void 0 !== t.memoizedProps.fallback && za(t)
                        : ((l = null !== (n = r.memoizedState)),
                          i ||
                            null === n ||
                            (null !== (n = r.child.sibling) &&
                              (null !== (c = t.firstEffect)
                                ? ((t.firstEffect = n), (n.nextEffect = c))
                                : ((t.firstEffect = t.lastEffect = n),
                                  (n.nextEffect = null)),
                              (n.effectTag = 8)))),
                      i &&
                        !l &&
                        0 != (2 & t.mode) &&
                        ((null === r &&
                          !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                        0 != (1 & Qi.current)
                          ? Ql === Ul && (Ql = Wl)
                          : ((Ql !== Ul && Ql !== Wl) || (Ql = zl),
                            0 !== ts &&
                              null !== Kl &&
                              (nu(Kl, Xl), ou(Kl, ts)))),
                      (i || l) && (t.effectTag |= 4);
                    break;
                  case 4:
                    Ki(), ol(t);
                    break;
                  case 10:
                    di(t);
                    break;
                  case 19:
                    if ((_o(Qi), null === (i = t.memoizedState))) break;
                    if (
                      ((l = 0 != (64 & t.effectTag)),
                      null === (c = i.rendering))
                    ) {
                      if (l) ml(i, !1);
                      else if (
                        Ql !== Ul ||
                        (null !== r && 0 != (64 & r.effectTag))
                      )
                        for (r = t.child; null !== r; ) {
                          if (null !== (c = Yi(r))) {
                            for (
                              t.effectTag |= 64,
                                ml(i, !1),
                                null !== (l = c.updateQueue) &&
                                  ((t.updateQueue = l), (t.effectTag |= 4)),
                                null === i.lastEffect && (t.firstEffect = null),
                                t.lastEffect = i.lastEffect,
                                i = n,
                                l = t.child;
                              null !== l;

                            )
                              (r = i),
                                ((n = l).effectTag &= 2),
                                (n.nextEffect = null),
                                (n.firstEffect = null),
                                (n.lastEffect = null),
                                null === (c = n.alternate)
                                  ? ((n.childExpirationTime = 0),
                                    (n.expirationTime = r),
                                    (n.child = null),
                                    (n.memoizedProps = null),
                                    (n.memoizedState = null),
                                    (n.updateQueue = null),
                                    (n.dependencies = null))
                                  : ((n.childExpirationTime =
                                      c.childExpirationTime),
                                    (n.expirationTime = c.expirationTime),
                                    (n.child = c.child),
                                    (n.memoizedProps = c.memoizedProps),
                                    (n.memoizedState = c.memoizedState),
                                    (n.updateQueue = c.updateQueue),
                                    (r = c.dependencies),
                                    (n.dependencies =
                                      null === r
                                        ? null
                                        : {
                                            expirationTime: r.expirationTime,
                                            firstContext: r.firstContext,
                                            responders: r.responders,
                                          })),
                                (l = l.sibling);
                            vo(Qi, (1 & Qi.current) | 2), (t = t.child);
                            break e;
                          }
                          r = r.sibling;
                        }
                    } else {
                      if (!l)
                        if (null !== (r = Yi(c))) {
                          if (
                            ((t.effectTag |= 64),
                            (l = !0),
                            null !== (n = r.updateQueue) &&
                              ((t.updateQueue = n), (t.effectTag |= 4)),
                            ml(i, !0),
                            null === i.tail && "hidden" === i.tailMode)
                          ) {
                            null !== (t = t.lastEffect = i.lastEffect) &&
                              (t.nextEffect = null);
                            break;
                          }
                        } else
                          $o() > i.tailExpiration &&
                            1 < n &&
                            ((t.effectTag |= 64),
                            (l = !0),
                            ml(i, !1),
                            (t.expirationTime = t.childExpirationTime = n - 1));
                      i.isBackwards
                        ? ((c.sibling = t.child), (t.child = c))
                        : (null !== (n = i.last)
                            ? (n.sibling = c)
                            : (t.child = c),
                          (i.last = c));
                    }
                    if (null !== i.tail) {
                      0 === i.tailExpiration && (i.tailExpiration = $o() + 500),
                        (n = i.tail),
                        (i.rendering = n),
                        (i.tail = n.sibling),
                        (i.lastEffect = t.lastEffect),
                        (n.sibling = null),
                        (i = Qi.current),
                        vo(Qi, (i = l ? (1 & i) | 2 : 1 & i)),
                        (t = n);
                      break e;
                    }
                    break;
                  default:
                    throw Error(a(156, t.tag));
                }
                t = null;
              }
              if (((i = $l), 1 === Xl || 1 !== i.childExpirationTime)) {
                for (l = 0, n = i.child; null !== n; )
                  (r = n.expirationTime) > l && (l = r),
                    (c = n.childExpirationTime) > l && (l = c),
                    (n = n.sibling);
                i.childExpirationTime = l;
              }
              if (null !== t) return t;
              null !== e &&
                0 == (2048 & e.effectTag) &&
                (null === e.firstEffect && (e.firstEffect = $l.firstEffect),
                null !== $l.lastEffect &&
                  (null !== e.lastEffect &&
                    (e.lastEffect.nextEffect = $l.firstEffect),
                  (e.lastEffect = $l.lastEffect)),
                1 < $l.effectTag &&
                  (null !== e.lastEffect
                    ? (e.lastEffect.nextEffect = $l)
                    : (e.firstEffect = $l),
                  (e.lastEffect = $l)));
            } else {
              if (null !== (t = hl($l))) return (t.effectTag &= 2047), t;
              null !== e &&
                ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
            }
            if (null !== (t = $l.sibling)) return t;
            $l = e;
          } while (null !== $l);
          return Ql === Ul && (Ql = jl), null;
        }
        function Ns(e) {
          var t = e.expirationTime;
          return t > (e = e.childExpirationTime) ? t : e;
        }
        function Vs(e) {
          var t = Xo();
          return Yo(99, Ms.bind(null, e, t)), null;
        }
        function Ms(e, t) {
          if ((Bs(), (ql & (Ll | Bl)) !== Vl)) throw Error(a(327));
          var r = e.finishedWork,
            n = e.finishedExpirationTime;
          if (null === r) return null;
          if (
            ((e.finishedWork = null),
            (e.finishedExpirationTime = 0),
            r === e.current)
          )
            throw Error(a(177));
          (e.callbackNode = null),
            (e.callbackExpirationTime = 0),
            (e.callbackPriority = 90),
            (e.nextKnownPendingLevel = 0);
          var o = Ns(r);
          if (
            ((e.firstPendingTime = o),
            n <= e.lastSuspendedTime
              ? (e.firstSuspendedTime =
                  e.lastSuspendedTime =
                  e.nextKnownPendingLevel =
                    0)
              : n <= e.firstSuspendedTime && (e.firstSuspendedTime = n - 1),
            n <= e.lastPingedTime && (e.lastPingedTime = 0),
            n <= e.lastExpiredTime && (e.lastExpiredTime = 0),
            e === Kl && (($l = Kl = null), (Xl = 0)),
            1 < r.effectTag
              ? null !== r.lastEffect
                ? ((r.lastEffect.nextEffect = r), (o = r.firstEffect))
                : (o = r)
              : (o = r.firstEffect),
            null !== o)
          ) {
            var i = ql;
            (ql |= Bl), (Nl.current = null), (tn = Ir);
            var l = Xr();
            if (Qr(l)) {
              if ("selectionStart" in l)
                var s = { start: l.selectionStart, end: l.selectionEnd };
              else
                e: {
                  var u =
                    (s = ((s = l.ownerDocument) && s.defaultView) || window)
                      .getSelection && s.getSelection();
                  if (u && 0 !== u.rangeCount) {
                    s = u.anchorNode;
                    var c = u.anchorOffset,
                      d = u.focusNode;
                    u = u.focusOffset;
                    try {
                      s.nodeType, d.nodeType;
                    } catch (e) {
                      s = null;
                      break e;
                    }
                    var p = 0,
                      f = -1,
                      m = -1,
                      h = 0,
                      _ = 0,
                      v = l,
                      g = null;
                    t: for (;;) {
                      for (
                        var y;
                        v !== s || (0 !== c && 3 !== v.nodeType) || (f = p + c),
                          v !== d ||
                            (0 !== u && 3 !== v.nodeType) ||
                            (m = p + u),
                          3 === v.nodeType && (p += v.nodeValue.length),
                          null !== (y = v.firstChild);

                      )
                        (g = v), (v = y);
                      for (;;) {
                        if (v === l) break t;
                        if (
                          (g === s && ++h === c && (f = p),
                          g === d && ++_ === u && (m = p),
                          null !== (y = v.nextSibling))
                        )
                          break;
                        g = (v = g).parentNode;
                      }
                      v = y;
                    }
                    s = -1 === f || -1 === m ? null : { start: f, end: m };
                  } else s = null;
                }
              s = s || { start: 0, end: 0 };
            } else s = null;
            (rn = { focusedElem: l, selectionRange: s }), (Ir = !1), (is = o);
            do {
              try {
                Ls();
              } catch (e) {
                if (null === is) throw Error(a(330));
                Hs(is, e), (is = is.nextEffect);
              }
            } while (null !== is);
            is = o;
            do {
              try {
                for (l = e, s = t; null !== is; ) {
                  var b = is.effectTag;
                  if ((16 & b && ze(is.stateNode, ""), 128 & b)) {
                    var E = is.alternate;
                    if (null !== E) {
                      var S = E.ref;
                      null !== S &&
                        ("function" == typeof S ? S(null) : (S.current = null));
                    }
                  }
                  switch (1038 & b) {
                    case 2:
                      wl(is), (is.effectTag &= -3);
                      break;
                    case 6:
                      wl(is), (is.effectTag &= -3), Tl(is.alternate, is);
                      break;
                    case 1024:
                      is.effectTag &= -1025;
                      break;
                    case 1028:
                      (is.effectTag &= -1025), Tl(is.alternate, is);
                      break;
                    case 4:
                      Tl(is.alternate, is);
                      break;
                    case 8:
                      kl(l, (c = is), s), Cl(c);
                  }
                  is = is.nextEffect;
                }
              } catch (e) {
                if (null === is) throw Error(a(330));
                Hs(is, e), (is = is.nextEffect);
              }
            } while (null !== is);
            if (
              ((S = rn),
              (E = Xr()),
              (b = S.focusedElem),
              (s = S.selectionRange),
              E !== b &&
                b &&
                b.ownerDocument &&
                $r(b.ownerDocument.documentElement, b))
            ) {
              null !== s &&
                Qr(b) &&
                ((E = s.start),
                void 0 === (S = s.end) && (S = E),
                "selectionStart" in b
                  ? ((b.selectionStart = E),
                    (b.selectionEnd = Math.min(S, b.value.length)))
                  : (S =
                      ((E = b.ownerDocument || document) && E.defaultView) ||
                      window).getSelection &&
                    ((S = S.getSelection()),
                    (c = b.textContent.length),
                    (l = Math.min(s.start, c)),
                    (s = void 0 === s.end ? l : Math.min(s.end, c)),
                    !S.extend && l > s && ((c = s), (s = l), (l = c)),
                    (c = Kr(b, l)),
                    (d = Kr(b, s)),
                    c &&
                      d &&
                      (1 !== S.rangeCount ||
                        S.anchorNode !== c.node ||
                        S.anchorOffset !== c.offset ||
                        S.focusNode !== d.node ||
                        S.focusOffset !== d.offset) &&
                      ((E = E.createRange()).setStart(c.node, c.offset),
                      S.removeAllRanges(),
                      l > s
                        ? (S.addRange(E), S.extend(d.node, d.offset))
                        : (E.setEnd(d.node, d.offset), S.addRange(E))))),
                (E = []);
              for (S = b; (S = S.parentNode); )
                1 === S.nodeType &&
                  E.push({ element: S, left: S.scrollLeft, top: S.scrollTop });
              for (
                "function" == typeof b.focus && b.focus(), b = 0;
                b < E.length;
                b++
              )
                ((S = E[b]).element.scrollLeft = S.left),
                  (S.element.scrollTop = S.top);
            }
            (rn = null), (Ir = !!tn), (tn = null), (e.current = r), (is = o);
            do {
              try {
                for (b = n; null !== is; ) {
                  var C = is.effectTag;
                  if (36 & C) {
                    var I = is.alternate;
                    switch (((S = b), (E = is).tag)) {
                      case 0:
                      case 11:
                      case 15:
                        El(16, 32, E);
                        break;
                      case 1:
                        var w = E.stateNode;
                        if (4 & E.effectTag)
                          if (null === I) w.componentDidMount();
                          else {
                            var k =
                              E.elementType === E.type
                                ? I.memoizedProps
                                : oi(E.type, I.memoizedProps);
                            w.componentDidUpdate(
                              k,
                              I.memoizedState,
                              w.__reactInternalSnapshotBeforeUpdate
                            );
                          }
                        var T = E.updateQueue;
                        null !== T && wi(0, T, w);
                        break;
                      case 3:
                        var R = E.updateQueue;
                        if (null !== R) {
                          if (((l = null), null !== E.child))
                            switch (E.child.tag) {
                              case 5:
                              case 1:
                                l = E.child.stateNode;
                            }
                          wi(0, R, l);
                        }
                        break;
                      case 5:
                        var D = E.stateNode;
                        null === I &&
                          4 & E.effectTag &&
                          nn(E.type, E.memoizedProps) &&
                          D.focus();
                        break;
                      case 6:
                      case 4:
                      case 12:
                      case 19:
                      case 17:
                      case 20:
                      case 21:
                        break;
                      case 13:
                        if (null === E.memoizedState) {
                          var P = E.alternate;
                          if (null !== P) {
                            var A = P.memoizedState;
                            if (null !== A) {
                              var x = A.dehydrated;
                              null !== x && kt(x);
                            }
                          }
                        }
                        break;
                      default:
                        throw Error(a(163));
                    }
                  }
                  if (128 & C) {
                    E = void 0;
                    var O = is.ref;
                    if (null !== O) {
                      var F = is.stateNode;
                      is.tag,
                        (E = F),
                        "function" == typeof O ? O(E) : (O.current = E);
                    }
                  }
                  is = is.nextEffect;
                }
              } catch (e) {
                if (null === is) throw Error(a(330));
                Hs(is, e), (is = is.nextEffect);
              }
            } while (null !== is);
            (is = null), Wo(), (ql = i);
          } else e.current = r;
          if (us) (us = !1), (cs = e), (ds = t);
          else
            for (is = o; null !== is; )
              (t = is.nextEffect), (is.nextEffect = null), (is = t);
          if (
            (0 === (t = e.firstPendingTime) && (ss = null),
            1073741823 === t
              ? e === ms
                ? fs++
                : ((fs = 0), (ms = e))
              : (fs = 0),
            "function" == typeof js && js(r.stateNode, n),
            Es(e),
            as)
          )
            throw ((as = !1), (e = ls), (ls = null), e);
          return (ql & Ml) !== Vl || ei(), null;
        }
        function Ls() {
          for (; null !== is; ) {
            var e = is.effectTag;
            0 != (256 & e) && bl(is.alternate, is),
              0 == (512 & e) ||
                us ||
                ((us = !0),
                Jo(97, function () {
                  return Bs(), null;
                })),
              (is = is.nextEffect);
          }
        }
        function Bs() {
          if (90 !== ds) {
            var e = 97 < ds ? 97 : ds;
            return (ds = 90), Yo(e, Us);
          }
        }
        function Us() {
          if (null === cs) return !1;
          var e = cs;
          if (((cs = null), (ql & (Ll | Bl)) !== Vl)) throw Error(a(331));
          var t = ql;
          for (ql |= Bl, e = e.current.firstEffect; null !== e; ) {
            try {
              var r = e;
              if (0 != (512 & r.effectTag))
                switch (r.tag) {
                  case 0:
                  case 11:
                  case 15:
                    El(128, 0, r), El(0, 64, r);
                }
            } catch (t) {
              if (null === e) throw Error(a(330));
              Hs(e, t);
            }
            (r = e.nextEffect), (e.nextEffect = null), (e = r);
          }
          return (ql = t), ei(), !0;
        }
        function Gs(e, t, r) {
          bi(e, (t = Pl(e, (t = _l(r, t)), 1073741823))),
            null !== (e = ys(e, 1073741823)) && Es(e);
        }
        function Hs(e, t) {
          if (3 === e.tag) Gs(e, e, t);
          else
            for (var r = e.return; null !== r; ) {
              if (3 === r.tag) {
                Gs(r, e, t);
                break;
              }
              if (1 === r.tag) {
                var n = r.stateNode;
                if (
                  "function" == typeof r.type.getDerivedStateFromError ||
                  ("function" == typeof n.componentDidCatch &&
                    (null === ss || !ss.has(n)))
                ) {
                  bi(r, (e = Al(r, (e = _l(t, e)), 1073741823))),
                    null !== (r = ys(r, 1073741823)) && Es(r);
                  break;
                }
              }
              r = r.return;
            }
        }
        function Ws(e, t, r) {
          var n = e.pingCache;
          null !== n && n.delete(t),
            Kl === e && Xl === r
              ? Ql === zl || (Ql === Wl && 1073741823 === Jl && $o() - ns < os)
                ? ks(e, Xl)
                : (rs = !0)
              : ru(e, r) &&
                ((0 !== (t = e.lastPingedTime) && t < r) ||
                  ((e.lastPingedTime = r),
                  e.finishedExpirationTime === r &&
                    ((e.finishedExpirationTime = 0), (e.finishedWork = null)),
                  Es(e)));
        }
        function zs(e, t) {
          var r = e.stateNode;
          null !== r && r.delete(t),
            0 === (t = 0) && (t = vs((t = _s()), e, null)),
            null !== (e = ys(e, t)) && Es(e);
        }
        xl = function (e, t, r) {
          var n = t.expirationTime;
          if (null !== e) {
            var o = t.pendingProps;
            if (e.memoizedProps !== o || bo.current) Ka = !0;
            else {
              if (n < r) {
                switch (((Ka = !1), t.tag)) {
                  case 3:
                    rl(t), ja();
                    break;
                  case 5:
                    if (($i(t), 4 & t.mode && 1 !== r && o.hidden))
                      return (
                        (t.expirationTime = t.childExpirationTime = 1), null
                      );
                    break;
                  case 1:
                    Co(t.type) && Ro(t);
                    break;
                  case 4:
                    qi(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    ci(t, t.memoizedProps.value);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 !== (n = t.child.childExpirationTime) && n >= r
                        ? sl(e, t, r)
                        : (vo(Qi, 1 & Qi.current),
                          null !== (t = pl(e, t, r)) ? t.sibling : null);
                    vo(Qi, 1 & Qi.current);
                    break;
                  case 19:
                    if (
                      ((n = t.childExpirationTime >= r),
                      0 != (64 & e.effectTag))
                    ) {
                      if (n) return dl(e, t, r);
                      t.effectTag |= 64;
                    }
                    if (
                      (null !== (o = t.memoizedState) &&
                        ((o.rendering = null), (o.tail = null)),
                      vo(Qi, Qi.current),
                      !n)
                    )
                      return null;
                }
                return pl(e, t, r);
              }
              Ka = !1;
            }
          } else Ka = !1;
          switch (((t.expirationTime = 0), t.tag)) {
            case 2:
              if (
                ((n = t.type),
                null !== e &&
                  ((e.alternate = null),
                  (t.alternate = null),
                  (t.effectTag |= 2)),
                (e = t.pendingProps),
                (o = So(t, yo.current)),
                fi(t, r),
                (o = _a(null, t, n, e, o, r)),
                (t.effectTag |= 1),
                "object" == typeof o &&
                  null !== o &&
                  "function" == typeof o.render &&
                  void 0 === o.$$typeof)
              ) {
                if (((t.tag = 1), va(), Co(n))) {
                  var i = !0;
                  Ro(t);
                } else i = !1;
                t.memoizedState =
                  null !== o.state && void 0 !== o.state ? o.state : null;
                var l = n.getDerivedStateFromProps;
                "function" == typeof l && Di(t, n, l, e),
                  (o.updater = Pi),
                  (t.stateNode = o),
                  (o._reactInternalFiber = t),
                  Fi(t, n, e, r),
                  (t = tl(null, t, n, !0, i, r));
              } else (t.tag = 0), $a(null, t, o, r), (t = t.child);
              return t;
            case 16:
              if (
                ((o = t.elementType),
                null !== e &&
                  ((e.alternate = null),
                  (t.alternate = null),
                  (t.effectTag |= 2)),
                (e = t.pendingProps),
                (function (e) {
                  if (-1 === e._status) {
                    e._status = 0;
                    var t = e._ctor;
                    (t = t()),
                      (e._result = t),
                      t.then(
                        function (t) {
                          0 === e._status &&
                            ((t = t.default), (e._status = 1), (e._result = t));
                        },
                        function (t) {
                          0 === e._status && ((e._status = 2), (e._result = t));
                        }
                      );
                  }
                })(o),
                1 !== o._status)
              )
                throw o._result;
              switch (
                ((o = o._result),
                (t.type = o),
                (i = t.tag =
                  (function (e) {
                    if ("function" == typeof e) return Xs(e) ? 1 : 0;
                    if (null != e) {
                      if ((e = e.$$typeof) === z) return 11;
                      if (e === K) return 14;
                    }
                    return 2;
                  })(o)),
                (e = oi(o, e)),
                i)
              ) {
                case 0:
                  t = Za(null, t, o, e, r);
                  break;
                case 1:
                  t = el(null, t, o, e, r);
                  break;
                case 11:
                  t = Xa(null, t, o, e, r);
                  break;
                case 14:
                  t = Qa(null, t, o, oi(o.type, e), n, r);
                  break;
                default:
                  throw Error(a(306, o, ""));
              }
              return t;
            case 0:
              return (
                (n = t.type),
                (o = t.pendingProps),
                Za(e, t, n, (o = t.elementType === n ? o : oi(n, o)), r)
              );
            case 1:
              return (
                (n = t.type),
                (o = t.pendingProps),
                el(e, t, n, (o = t.elementType === n ? o : oi(n, o)), r)
              );
            case 3:
              if ((rl(t), null === (n = t.updateQueue))) throw Error(a(282));
              if (
                ((o = null !== (o = t.memoizedState) ? o.element : null),
                Ii(t, n, t.pendingProps, null, r),
                (n = t.memoizedState.element) === o)
              )
                ja(), (t = pl(e, t, r));
              else {
                if (
                  ((o = t.stateNode.hydrate) &&
                    ((La = sn(t.stateNode.containerInfo.firstChild)),
                    (Ma = t),
                    (o = Ba = !0)),
                  o)
                )
                  for (r = Ui(t, null, n, r), t.child = r; r; )
                    (r.effectTag = (-3 & r.effectTag) | 1024), (r = r.sibling);
                else $a(e, t, n, r), ja();
                t = t.child;
              }
              return t;
            case 5:
              return (
                $i(t),
                null === e && Ha(t),
                (n = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = o.children),
                on(n, o)
                  ? (l = null)
                  : null !== i && on(n, i) && (t.effectTag |= 16),
                Ja(e, t),
                4 & t.mode && 1 !== r && o.hidden
                  ? ((t.expirationTime = t.childExpirationTime = 1), (t = null))
                  : ($a(e, t, l, r), (t = t.child)),
                t
              );
            case 6:
              return null === e && Ha(t), null;
            case 13:
              return sl(e, t, r);
            case 4:
              return (
                qi(t, t.stateNode.containerInfo),
                (n = t.pendingProps),
                null === e ? (t.child = Bi(t, null, n, r)) : $a(e, t, n, r),
                t.child
              );
            case 11:
              return (
                (n = t.type),
                (o = t.pendingProps),
                Xa(e, t, n, (o = t.elementType === n ? o : oi(n, o)), r)
              );
            case 7:
              return $a(e, t, t.pendingProps, r), t.child;
            case 8:
            case 12:
              return $a(e, t, t.pendingProps.children, r), t.child;
            case 10:
              e: {
                if (
                  ((n = t.type._context),
                  (o = t.pendingProps),
                  (l = t.memoizedProps),
                  ci(t, (i = o.value)),
                  null !== l)
                ) {
                  var s = l.value;
                  if (
                    0 ===
                    (i = ro(s, i)
                      ? 0
                      : 0 |
                        ("function" == typeof n._calculateChangedBits
                          ? n._calculateChangedBits(s, i)
                          : 1073741823))
                  ) {
                    if (l.children === o.children && !bo.current) {
                      t = pl(e, t, r);
                      break e;
                    }
                  } else
                    for (
                      null !== (s = t.child) && (s.return = t);
                      null !== s;

                    ) {
                      var u = s.dependencies;
                      if (null !== u) {
                        l = s.child;
                        for (var c = u.firstContext; null !== c; ) {
                          if (c.context === n && 0 != (c.observedBits & i)) {
                            1 === s.tag &&
                              (((c = gi(r, null)).tag = 2), bi(s, c)),
                              s.expirationTime < r && (s.expirationTime = r),
                              null !== (c = s.alternate) &&
                                c.expirationTime < r &&
                                (c.expirationTime = r),
                              pi(s.return, r),
                              u.expirationTime < r && (u.expirationTime = r);
                            break;
                          }
                          c = c.next;
                        }
                      } else
                        l = 10 === s.tag && s.type === t.type ? null : s.child;
                      if (null !== l) l.return = s;
                      else
                        for (l = s; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (s = l.sibling)) {
                            (s.return = l.return), (l = s);
                            break;
                          }
                          l = l.return;
                        }
                      s = l;
                    }
                }
                $a(e, t, o.children, r), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (n = (i = t.pendingProps).children),
                fi(t, r),
                (n = n((o = mi(o, i.unstable_observedBits)))),
                (t.effectTag |= 1),
                $a(e, t, n, r),
                t.child
              );
            case 14:
              return (
                (i = oi((o = t.type), t.pendingProps)),
                Qa(e, t, o, (i = oi(o.type, i)), n, r)
              );
            case 15:
              return Ya(e, t, t.type, t.pendingProps, n, r);
            case 17:
              return (
                (n = t.type),
                (o = t.pendingProps),
                (o = t.elementType === n ? o : oi(n, o)),
                null !== e &&
                  ((e.alternate = null),
                  (t.alternate = null),
                  (t.effectTag |= 2)),
                (t.tag = 1),
                Co(n) ? ((e = !0), Ro(t)) : (e = !1),
                fi(t, r),
                xi(t, n, o),
                Fi(t, n, o, r),
                tl(null, t, n, !0, e, r)
              );
            case 19:
              return dl(e, t, r);
          }
          throw Error(a(156, t.tag));
        };
        var js = null,
          qs = null;
        function Ks(e, t, r, n) {
          (this.tag = e),
            (this.key = r),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = n),
            (this.effectTag = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childExpirationTime = this.expirationTime = 0),
            (this.alternate = null);
        }
        function $s(e, t, r, n) {
          return new Ks(e, t, r, n);
        }
        function Xs(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Qs(e, t) {
          var r = e.alternate;
          return (
            null === r
              ? (((r = $s(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (r.type = e.type),
                (r.stateNode = e.stateNode),
                (r.alternate = e),
                (e.alternate = r))
              : ((r.pendingProps = t),
                (r.effectTag = 0),
                (r.nextEffect = null),
                (r.firstEffect = null),
                (r.lastEffect = null)),
            (r.childExpirationTime = e.childExpirationTime),
            (r.expirationTime = e.expirationTime),
            (r.child = e.child),
            (r.memoizedProps = e.memoizedProps),
            (r.memoizedState = e.memoizedState),
            (r.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (r.dependencies =
              null === t
                ? null
                : {
                    expirationTime: t.expirationTime,
                    firstContext: t.firstContext,
                    responders: t.responders,
                  }),
            (r.sibling = e.sibling),
            (r.index = e.index),
            (r.ref = e.ref),
            r
          );
        }
        function Ys(e, t, r, n, o, i) {
          var l = 2;
          if (((n = e), "function" == typeof e)) Xs(e) && (l = 1);
          else if ("string" == typeof e) l = 5;
          else
            e: switch (e) {
              case L:
                return Js(r.children, o, i, t);
              case W:
                (l = 8), (o |= 7);
                break;
              case B:
                (l = 8), (o |= 1);
                break;
              case U:
                return (
                  ((e = $s(12, r, t, 8 | o)).elementType = U),
                  (e.type = U),
                  (e.expirationTime = i),
                  e
                );
              case j:
                return (
                  ((e = $s(13, r, t, o)).type = j),
                  (e.elementType = j),
                  (e.expirationTime = i),
                  e
                );
              case q:
                return (
                  ((e = $s(19, r, t, o)).elementType = q),
                  (e.expirationTime = i),
                  e
                );
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case G:
                      l = 10;
                      break e;
                    case H:
                      l = 9;
                      break e;
                    case z:
                      l = 11;
                      break e;
                    case K:
                      l = 14;
                      break e;
                    case $:
                      (l = 16), (n = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = $s(l, r, t, o)).elementType = e),
            (t.type = n),
            (t.expirationTime = i),
            t
          );
        }
        function Js(e, t, r, n) {
          return ((e = $s(7, e, n, t)).expirationTime = r), e;
        }
        function Zs(e, t, r) {
          return ((e = $s(6, e, null, t)).expirationTime = r), e;
        }
        function eu(e, t, r) {
          return (
            ((t = $s(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).expirationTime = r),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function tu(e, t, r) {
          (this.tag = t),
            (this.current = null),
            (this.containerInfo = e),
            (this.pingCache = this.pendingChildren = null),
            (this.finishedExpirationTime = 0),
            (this.finishedWork = null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = r),
            (this.callbackNode = null),
            (this.callbackPriority = 90),
            (this.lastExpiredTime =
              this.lastPingedTime =
              this.nextKnownPendingLevel =
              this.lastSuspendedTime =
              this.firstSuspendedTime =
              this.firstPendingTime =
                0);
        }
        function ru(e, t) {
          var r = e.firstSuspendedTime;
          return (e = e.lastSuspendedTime), 0 !== r && r >= t && e <= t;
        }
        function nu(e, t) {
          var r = e.firstSuspendedTime,
            n = e.lastSuspendedTime;
          r < t && (e.firstSuspendedTime = t),
            (n > t || 0 === r) && (e.lastSuspendedTime = t),
            t <= e.lastPingedTime && (e.lastPingedTime = 0),
            t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
        }
        function ou(e, t) {
          t > e.firstPendingTime && (e.firstPendingTime = t);
          var r = e.firstSuspendedTime;
          0 !== r &&
            (t >= r
              ? (e.firstSuspendedTime =
                  e.lastSuspendedTime =
                  e.nextKnownPendingLevel =
                    0)
              : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1),
            t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
        }
        function iu(e, t) {
          var r = e.lastExpiredTime;
          (0 === r || r > t) && (e.lastExpiredTime = t);
        }
        function au(e, t, r, n) {
          var o = t.current,
            i = _s(),
            l = Ti.suspense;
          i = vs(i, o, l);
          e: if (r) {
            t: {
              if (tt((r = r._reactInternalFiber)) !== r || 1 !== r.tag)
                throw Error(a(170));
              var s = r;
              do {
                switch (s.tag) {
                  case 3:
                    s = s.stateNode.context;
                    break t;
                  case 1:
                    if (Co(s.type)) {
                      s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                s = s.return;
              } while (null !== s);
              throw Error(a(171));
            }
            if (1 === r.tag) {
              var u = r.type;
              if (Co(u)) {
                r = To(r, u, s);
                break e;
              }
            }
            r = s;
          } else r = go;
          return (
            null === t.context ? (t.context = r) : (t.pendingContext = r),
            ((t = gi(i, l)).payload = { element: e }),
            null !== (n = void 0 === n ? null : n) && (t.callback = n),
            bi(o, t),
            gs(o, i),
            i
          );
        }
        function lu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function su(e, t) {
          null !== (e = e.memoizedState) &&
            null !== e.dehydrated &&
            e.retryTime < t &&
            (e.retryTime = t);
        }
        function uu(e, t) {
          su(e, t), (e = e.alternate) && su(e, t);
        }
        function cu(e, t, r) {
          var n = new tu(e, t, (r = null != r && !0 === r.hydrate)),
            o = $s(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
          (n.current = o),
            (o.stateNode = n),
            (e[fn] = n.current),
            r &&
              0 !== t &&
              (function (e) {
                var t = Fr(e);
                _t.forEach(function (r) {
                  Nr(r, e, t);
                }),
                  vt.forEach(function (r) {
                    Nr(r, e, t);
                  });
              })(9 === e.nodeType ? e : e.ownerDocument),
            (this._internalRoot = n);
        }
        function du(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function pu(e, t, r, n, o) {
          var i = r._reactRootContainer;
          if (i) {
            var a = i._internalRoot;
            if ("function" == typeof o) {
              var l = o;
              o = function () {
                var e = lu(a);
                l.call(e);
              };
            }
            au(t, a, e, o);
          } else {
            if (
              ((i = r._reactRootContainer =
                (function (e, t) {
                  if (
                    (t ||
                      (t = !(
                        !(t = e
                          ? 9 === e.nodeType
                            ? e.documentElement
                            : e.firstChild
                          : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute("data-reactroot")
                      )),
                    !t)
                  )
                    for (var r; (r = e.lastChild); ) e.removeChild(r);
                  return new cu(e, 0, t ? { hydrate: !0 } : void 0);
                })(r, n)),
              (a = i._internalRoot),
              "function" == typeof o)
            ) {
              var s = o;
              o = function () {
                var e = lu(a);
                s.call(e);
              };
            }
            ws(function () {
              au(t, a, e, o);
            });
          }
          return lu(a);
        }
        function fu(e, t) {
          var r =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          if (!du(t)) throw Error(a(200));
          return (function (e, t, r) {
            var n =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return {
              $$typeof: M,
              key: null == n ? null : "" + n,
              children: e,
              containerInfo: t,
              implementation: r,
            };
          })(e, t, null, r);
        }
        (it = function (e) {
          if (13 === e.tag) {
            var t = ni(_s(), 150, 100);
            gs(e, t), uu(e, t);
          }
        }),
          (at = function (e) {
            if (13 === e.tag) {
              _s();
              var t = ri++;
              gs(e, t), uu(e, t);
            }
          }),
          (lt = function (e) {
            if (13 === e.tag) {
              var t = _s();
              gs(e, (t = vs(t, e, null))), uu(e, t);
            }
          }),
          (ee = function (e, t, r) {
            switch (t) {
              case "input":
                if ((De(e, r), (t = r.name), "radio" === r.type && null != t)) {
                  for (r = e; r.parentNode; ) r = r.parentNode;
                  for (
                    r = r.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < r.length;
                    t++
                  ) {
                    var n = r[t];
                    if (n !== e && n.form === e.form) {
                      var o = vn(n);
                      if (!o) throw Error(a(90));
                      we(n), De(n, o);
                    }
                  }
                }
                break;
              case "textarea":
                Ve(e, r);
                break;
              case "select":
                null != (t = r.value) && Oe(e, !!r.multiple, t, !1);
            }
          }),
          (cu.prototype.render = function (e, t) {
            au(e, this._internalRoot, null, void 0 === t ? null : t);
          }),
          (cu.prototype.unmount = function (e) {
            au(null, this._internalRoot, null, void 0 === e ? null : e);
          }),
          (ae = Is),
          (le = function (e, t, r, n) {
            var o = ql;
            ql |= 4;
            try {
              return Yo(98, e.bind(null, t, r, n));
            } finally {
              (ql = o) === Vl && ei();
            }
          }),
          (se = function () {
            (ql & (1 | Ll | Bl)) === Vl &&
              ((function () {
                if (null !== ps) {
                  var e = ps;
                  (ps = null),
                    e.forEach(function (e, t) {
                      iu(t, e), Es(t);
                    }),
                    ei();
                }
              })(),
              Bs());
          }),
          (ue = function (e, t) {
            var r = ql;
            ql |= 2;
            try {
              return e(t);
            } finally {
              (ql = r) === Vl && ei();
            }
          });
        var mu = {
          createPortal: fu,
          findDOMNode: function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternalFiber;
            if (void 0 === t) {
              if ("function" == typeof e.render) throw Error(a(188));
              throw Error(a(268, Object.keys(e)));
            }
            return (e = null === (e = ot(t)) ? null : e.stateNode);
          },
          hydrate: function (e, t, r) {
            if (!du(t)) throw Error(a(200));
            return pu(null, e, t, !0, r);
          },
          render: function (e, t, r) {
            if (!du(t)) throw Error(a(200));
            return pu(null, e, t, !1, r);
          },
          unstable_renderSubtreeIntoContainer: function (e, t, r, n) {
            if (!du(r)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternalFiber)
              throw Error(a(38));
            return pu(e, t, r, !1, n);
          },
          unmountComponentAtNode: function (e) {
            if (!du(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (ws(function () {
                pu(null, null, e, !1, function () {
                  e._reactRootContainer = null;
                });
              }),
              !0)
            );
          },
          unstable_createPortal: function () {
            return fu.apply(void 0, arguments);
          },
          unstable_batchedUpdates: Is,
          flushSync: function (e, t) {
            if ((ql & (Ll | Bl)) !== Vl) throw Error(a(187));
            var r = ql;
            ql |= 1;
            try {
              return Yo(99, e.bind(null, t));
            } finally {
              (ql = r), ei();
            }
          },
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            Events: [
              hn,
              _n,
              vn,
              A.injectEventPluginsByName,
              p,
              Ot,
              function (e) {
                T(e, xt);
              },
              oe,
              ie,
              Pr,
              P,
              Bs,
              { current: !1 },
            ],
          },
        };
        !(function (e) {
          var t = e.findFiberByHostInstance;
          (function (e) {
            if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
            var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (t.isDisabled || !t.supportsFiber) return !0;
            try {
              var r = t.inject(e);
              (js = function (e) {
                try {
                  t.onCommitFiberRoot(
                    r,
                    e,
                    void 0,
                    64 == (64 & e.current.effectTag)
                  );
                } catch (e) {}
              }),
                (qs = function (e) {
                  try {
                    t.onCommitFiberUnmount(r, e);
                  } catch (e) {}
                });
            } catch (e) {}
          })(
            o({}, e, {
              overrideHookState: null,
              overrideProps: null,
              setSuspenseHandler: null,
              scheduleUpdate: null,
              currentDispatcherRef: O.ReactCurrentDispatcher,
              findHostInstanceByFiber: function (e) {
                return null === (e = ot(e)) ? null : e.stateNode;
              },
              findFiberByHostInstance: function (e) {
                return t ? t(e) : null;
              },
              findHostInstancesForRefresh: null,
              scheduleRefresh: null,
              scheduleRoot: null,
              setRefreshHandler: null,
              getCurrentFiber: null,
            })
          );
        })({
          findFiberByHostInstance: mn,
          bundleType: 0,
          version: "16.11.0",
          rendererPackageName: "react-dom",
        });
        var hu = { default: mu },
          _u = (hu && mu) || hu;
        e.exports = _u.default || _u;
      },
      935: (e, t, r) => {
        "use strict";
        !(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = r(448));
      },
      408: (e, t, r) => {
        "use strict";
        /** @license React v16.11.0
         * react.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ var n = r(418),
          o = "function" == typeof Symbol && Symbol.for,
          i = o ? Symbol.for("react.element") : 60103,
          a = o ? Symbol.for("react.portal") : 60106,
          l = o ? Symbol.for("react.fragment") : 60107,
          s = o ? Symbol.for("react.strict_mode") : 60108,
          u = o ? Symbol.for("react.profiler") : 60114,
          c = o ? Symbol.for("react.provider") : 60109,
          d = o ? Symbol.for("react.context") : 60110,
          p = o ? Symbol.for("react.forward_ref") : 60112,
          f = o ? Symbol.for("react.suspense") : 60113;
        o && Symbol.for("react.suspense_list");
        var m = o ? Symbol.for("react.memo") : 60115,
          h = o ? Symbol.for("react.lazy") : 60116;
        o && Symbol.for("react.fundamental"),
          o && Symbol.for("react.responder"),
          o && Symbol.for("react.scope");
        var _ = "function" == typeof Symbol && Symbol.iterator;
        function v(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              r = 1;
            r < arguments.length;
            r++
          )
            t += "&args[]=" + encodeURIComponent(arguments[r]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var g = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          y = {};
        function b(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = y),
            (this.updater = r || g);
        }
        function E() {}
        function S(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = y),
            (this.updater = r || g);
        }
        (b.prototype.isReactComponent = {}),
          (b.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(v(85));
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (b.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (E.prototype = b.prototype);
        var C = (S.prototype = new E());
        (C.constructor = S), n(C, b.prototype), (C.isPureReactComponent = !0);
        var I = { current: null },
          w = { current: null },
          k = Object.prototype.hasOwnProperty,
          T = { key: !0, ref: !0, __self: !0, __source: !0 };
        function R(e, t, r) {
          var n,
            o = {},
            a = null,
            l = null;
          if (null != t)
            for (n in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (a = "" + t.key),
            t))
              k.call(t, n) && !T.hasOwnProperty(n) && (o[n] = t[n]);
          var s = arguments.length - 2;
          if (1 === s) o.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            o.children = u;
          }
          if (e && e.defaultProps)
            for (n in (s = e.defaultProps)) void 0 === o[n] && (o[n] = s[n]);
          return {
            $$typeof: i,
            type: e,
            key: a,
            ref: l,
            props: o,
            _owner: w.current,
          };
        }
        function D(e) {
          return "object" == typeof e && null !== e && e.$$typeof === i;
        }
        var P = /\/+/g,
          A = [];
        function x(e, t, r, n) {
          if (A.length) {
            var o = A.pop();
            return (
              (o.result = e),
              (o.keyPrefix = t),
              (o.func = r),
              (o.context = n),
              (o.count = 0),
              o
            );
          }
          return { result: e, keyPrefix: t, func: r, context: n, count: 0 };
        }
        function O(e) {
          (e.result = null),
            (e.keyPrefix = null),
            (e.func = null),
            (e.context = null),
            (e.count = 0),
            10 > A.length && A.push(e);
        }
        function F(e, t, r, n) {
          var o = typeof e;
          ("undefined" !== o && "boolean" !== o) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (o) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case i:
                  case a:
                    l = !0;
                }
            }
          if (l) return r(n, e, "" === t ? "." + V(e, 0) : t), 1;
          if (((l = 0), (t = "" === t ? "." : t + ":"), Array.isArray(e)))
            for (var s = 0; s < e.length; s++) {
              var u = t + V((o = e[s]), s);
              l += F(o, u, r, n);
            }
          else if (
            (null === e || "object" != typeof e
              ? (u = null)
              : (u =
                  "function" == typeof (u = (_ && e[_]) || e["@@iterator"])
                    ? u
                    : null),
            "function" == typeof u)
          )
            for (e = u.call(e), s = 0; !(o = e.next()).done; )
              l += F((o = o.value), (u = t + V(o, s++)), r, n);
          else if ("object" === o)
            throw (
              ((r = "" + e),
              Error(
                v(
                  31,
                  "[object Object]" === r
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : r,
                  ""
                )
              ))
            );
          return l;
        }
        function N(e, t, r) {
          return null == e ? 0 : F(e, "", t, r);
        }
        function V(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  ("" + e).replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })(e.key)
            : t.toString(36);
        }
        function M(e, t) {
          e.func.call(e.context, t, e.count++);
        }
        function L(e, t, r) {
          var n = e.result,
            o = e.keyPrefix;
          (e = e.func.call(e.context, t, e.count++)),
            Array.isArray(e)
              ? B(e, n, r, function (e) {
                  return e;
                })
              : null != e &&
                (D(e) &&
                  (e = (function (e, t) {
                    return {
                      $$typeof: i,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    e,
                    o +
                      (!e.key || (t && t.key === e.key)
                        ? ""
                        : ("" + e.key).replace(P, "$&/") + "/") +
                      r
                  )),
                n.push(e));
        }
        function B(e, t, r, n, o) {
          var i = "";
          null != r && (i = ("" + r).replace(P, "$&/") + "/"),
            N(e, L, (t = x(t, i, n, o))),
            O(t);
        }
        function U() {
          var e = I.current;
          if (null === e) throw Error(v(321));
          return e;
        }
        var G = {
            Children: {
              map: function (e, t, r) {
                if (null == e) return e;
                var n = [];
                return B(e, n, null, t, r), n;
              },
              forEach: function (e, t, r) {
                if (null == e) return e;
                N(e, M, (t = x(null, null, t, r))), O(t);
              },
              count: function (e) {
                return N(
                  e,
                  function () {
                    return null;
                  },
                  null
                );
              },
              toArray: function (e) {
                var t = [];
                return (
                  B(e, t, null, function (e) {
                    return e;
                  }),
                  t
                );
              },
              only: function (e) {
                if (!D(e)) throw Error(v(143));
                return e;
              },
            },
            createRef: function () {
              return { current: null };
            },
            Component: b,
            PureComponent: S,
            createContext: function (e, t) {
              return (
                void 0 === t && (t = null),
                ((e = {
                  $$typeof: d,
                  _calculateChangedBits: t,
                  _currentValue: e,
                  _currentValue2: e,
                  _threadCount: 0,
                  Provider: null,
                  Consumer: null,
                }).Provider = { $$typeof: c, _context: e }),
                (e.Consumer = e)
              );
            },
            forwardRef: function (e) {
              return { $$typeof: p, render: e };
            },
            lazy: function (e) {
              return { $$typeof: h, _ctor: e, _status: -1, _result: null };
            },
            memo: function (e, t) {
              return { $$typeof: m, type: e, compare: void 0 === t ? null : t };
            },
            useCallback: function (e, t) {
              return U().useCallback(e, t);
            },
            useContext: function (e, t) {
              return U().useContext(e, t);
            },
            useEffect: function (e, t) {
              return U().useEffect(e, t);
            },
            useImperativeHandle: function (e, t, r) {
              return U().useImperativeHandle(e, t, r);
            },
            useDebugValue: function () {},
            useLayoutEffect: function (e, t) {
              return U().useLayoutEffect(e, t);
            },
            useMemo: function (e, t) {
              return U().useMemo(e, t);
            },
            useReducer: function (e, t, r) {
              return U().useReducer(e, t, r);
            },
            useRef: function (e) {
              return U().useRef(e);
            },
            useState: function (e) {
              return U().useState(e);
            },
            Fragment: l,
            Profiler: u,
            StrictMode: s,
            Suspense: f,
            createElement: R,
            cloneElement: function (e, t, r) {
              if (null == e) throw Error(v(267, e));
              var o = n({}, e.props),
                a = e.key,
                l = e.ref,
                s = e._owner;
              if (null != t) {
                if (
                  (void 0 !== t.ref && ((l = t.ref), (s = w.current)),
                  void 0 !== t.key && (a = "" + t.key),
                  e.type && e.type.defaultProps)
                )
                  var u = e.type.defaultProps;
                for (c in t)
                  k.call(t, c) &&
                    !T.hasOwnProperty(c) &&
                    (o[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
              }
              var c = arguments.length - 2;
              if (1 === c) o.children = r;
              else if (1 < c) {
                u = Array(c);
                for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
                o.children = u;
              }
              return {
                $$typeof: i,
                type: e.type,
                key: a,
                ref: l,
                props: o,
                _owner: s,
              };
            },
            createFactory: function (e) {
              var t = R.bind(null, e);
              return (t.type = e), t;
            },
            isValidElement: D,
            version: "16.11.0",
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
              ReactCurrentDispatcher: I,
              ReactCurrentBatchConfig: { suspense: null },
              ReactCurrentOwner: w,
              IsSomeRendererActing: { current: !1 },
              assign: n,
            },
          },
          H = { default: G },
          W = (H && G) || H;
        e.exports = W.default || W;
      },
      294: (e, t, r) => {
        "use strict";
        e.exports = r(408);
      },
      53: (e, t) => {
        "use strict";
        /** @license React v0.17.0
         * scheduler.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ var r, n, o, i, a;
        if (
          (Object.defineProperty(t, "__esModule", { value: !0 }),
          "undefined" == typeof window || "function" != typeof MessageChannel)
        ) {
          var l = null,
            s = null,
            u = function () {
              if (null !== l)
                try {
                  var e = t.unstable_now();
                  l(!0, e), (l = null);
                } catch (e) {
                  throw (setTimeout(u, 0), e);
                }
            },
            c = Date.now();
          (t.unstable_now = function () {
            return Date.now() - c;
          }),
            (r = function (e) {
              null !== l ? setTimeout(r, 0, e) : ((l = e), setTimeout(u, 0));
            }),
            (n = function (e, t) {
              s = setTimeout(e, t);
            }),
            (o = function () {
              clearTimeout(s);
            }),
            (i = function () {
              return !1;
            }),
            (a = t.unstable_forceFrameRate = function () {});
        } else {
          var d = window.performance,
            p = window.Date,
            f = window.setTimeout,
            m = window.clearTimeout,
            h = window.requestAnimationFrame,
            _ = window.cancelAnimationFrame;
          if (
            ("undefined" != typeof console &&
              ("function" != typeof h &&
                console.error(
                  "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
                ),
              "function" != typeof _ &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
                )),
            "object" == typeof d && "function" == typeof d.now)
          )
            t.unstable_now = function () {
              return d.now();
            };
          else {
            var v = p.now();
            t.unstable_now = function () {
              return p.now() - v;
            };
          }
          var g = !1,
            y = null,
            b = -1,
            E = 5,
            S = 0;
          (i = function () {
            return t.unstable_now() >= S;
          }),
            (a = function () {}),
            (t.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"
                  )
                : (E = 0 < e ? Math.floor(1e3 / e) : 33.33);
            });
          var C = new MessageChannel(),
            I = C.port2;
          (C.port1.onmessage = function () {
            if (null !== y) {
              var e = t.unstable_now();
              S = e + E;
              try {
                y(!0, e) ? I.postMessage(null) : ((g = !1), (y = null));
              } catch (e) {
                throw (I.postMessage(null), e);
              }
            } else g = !1;
          }),
            (r = function (e) {
              (y = e), g || ((g = !0), I.postMessage(null));
            }),
            (n = function (e, r) {
              b = f(function () {
                e(t.unstable_now());
              }, r);
            }),
            (o = function () {
              m(b), (b = -1);
            });
        }
        function w(e, t) {
          var r = e.length;
          e.push(t);
          e: for (;;) {
            var n = Math.floor((r - 1) / 2),
              o = e[n];
            if (!(void 0 !== o && 0 < R(o, t))) break e;
            (e[n] = t), (e[r] = o), (r = n);
          }
        }
        function k(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function T(e) {
          var t = e[0];
          if (void 0 !== t) {
            var r = e.pop();
            if (r !== t) {
              e[0] = r;
              e: for (var n = 0, o = e.length; n < o; ) {
                var i = 2 * (n + 1) - 1,
                  a = e[i],
                  l = i + 1,
                  s = e[l];
                if (void 0 !== a && 0 > R(a, r))
                  void 0 !== s && 0 > R(s, a)
                    ? ((e[n] = s), (e[l] = r), (n = l))
                    : ((e[n] = a), (e[i] = r), (n = i));
                else {
                  if (!(void 0 !== s && 0 > R(s, r))) break e;
                  (e[n] = s), (e[l] = r), (n = l);
                }
              }
            }
            return t;
          }
          return null;
        }
        function R(e, t) {
          var r = e.sortIndex - t.sortIndex;
          return 0 !== r ? r : e.id - t.id;
        }
        var D = [],
          P = [],
          A = 1,
          x = null,
          O = 3,
          F = !1,
          N = !1,
          V = !1;
        function M(e) {
          for (var t = k(P); null !== t; ) {
            if (null === t.callback) T(P);
            else {
              if (!(t.startTime <= e)) break;
              T(P), (t.sortIndex = t.expirationTime), w(D, t);
            }
            t = k(P);
          }
        }
        function L(e) {
          if (((V = !1), M(e), !N))
            if (null !== k(D)) (N = !0), r(B);
            else {
              var t = k(P);
              null !== t && n(L, t.startTime - e);
            }
        }
        function B(e, r) {
          (N = !1), V && ((V = !1), o()), (F = !0);
          var a = O;
          try {
            for (
              M(r), x = k(D);
              null !== x && (!(x.expirationTime > r) || (e && !i()));

            ) {
              var l = x.callback;
              if (null !== l) {
                (x.callback = null), (O = x.priorityLevel);
                var s = l(x.expirationTime <= r);
                (r = t.unstable_now()),
                  "function" == typeof s
                    ? (x.callback = s)
                    : x === k(D) && T(D),
                  M(r);
              } else T(D);
              x = k(D);
            }
            if (null !== x) var u = !0;
            else {
              var c = k(P);
              null !== c && n(L, c.startTime - r), (u = !1);
            }
            return u;
          } finally {
            (x = null), (O = a), (F = !1);
          }
        }
        function U(e) {
          switch (e) {
            case 1:
              return -1;
            case 2:
              return 250;
            case 5:
              return 1073741823;
            case 4:
              return 1e4;
            default:
              return 5e3;
          }
        }
        var G = a;
        (t.unstable_ImmediatePriority = 1),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_NormalPriority = 3),
          (t.unstable_IdlePriority = 5),
          (t.unstable_LowPriority = 4),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var r = O;
            O = e;
            try {
              return t();
            } finally {
              O = r;
            }
          }),
          (t.unstable_next = function (e) {
            switch (O) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = O;
            }
            var r = O;
            O = t;
            try {
              return e();
            } finally {
              O = r;
            }
          }),
          (t.unstable_scheduleCallback = function (e, i, a) {
            var l = t.unstable_now();
            if ("object" == typeof a && null !== a) {
              var s = a.delay;
              (s = "number" == typeof s && 0 < s ? l + s : l),
                (a = "number" == typeof a.timeout ? a.timeout : U(e));
            } else (a = U(e)), (s = l);
            return (
              (e = {
                id: A++,
                callback: i,
                priorityLevel: e,
                startTime: s,
                expirationTime: (a = s + a),
                sortIndex: -1,
              }),
              s > l
                ? ((e.sortIndex = s),
                  w(P, e),
                  null === k(D) &&
                    e === k(P) &&
                    (V ? o() : (V = !0), n(L, s - l)))
                : ((e.sortIndex = a), w(D, e), N || F || ((N = !0), r(B))),
              e
            );
          }),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_wrapCallback = function (e) {
            var t = O;
            return function () {
              var r = O;
              O = t;
              try {
                return e.apply(this, arguments);
              } finally {
                O = r;
              }
            };
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return O;
          }),
          (t.unstable_shouldYield = function () {
            var e = t.unstable_now();
            M(e);
            var r = k(D);
            return (
              (r !== x &&
                null !== x &&
                null !== r &&
                null !== r.callback &&
                r.startTime <= e &&
                r.expirationTime < x.expirationTime) ||
              i()
            );
          }),
          (t.unstable_requestPaint = G),
          (t.unstable_continueExecution = function () {
            N || F || ((N = !0), r(B));
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_getFirstCallbackNode = function () {
            return k(D);
          }),
          (t.unstable_Profiling = null);
      },
      840: (e, t, r) => {
        "use strict";
        e.exports = r(53);
      },
      593: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}'
        );
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var i = (t[n] = { exports: {} });
    return e[n](i, i.exports, r), i.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      r.g.importScripts && (e = r.g.location + "");
      var t = r.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (r.p = e);
    })(),
    (() => {
      "use strict";
      function e(e, t, r, n) {
        var o,
          i = arguments.length,
          a =
            i < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, r))
              : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, r, n);
        else
          for (var l = e.length - 1; l >= 0; l--)
            (o = e[l]) &&
              (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
        return i > 3 && a && Object.defineProperty(t, r, a), a;
      }
      function t(e, t, r, n) {
        return new (r || (r = Promise))(function (o, i) {
          function a(e) {
            try {
              s(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              s(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(a, l);
          }
          s((n = n.apply(e, t || [])).next());
        });
      }
      Object.create;
      Object.create;
      var n =
          "An invariant failed, however the error is obfuscated because this is a production build.",
        o = [];
      Object.freeze(o);
      var i = {};
      function a() {
        return ++Te.mobxGuid;
      }
      function l(e) {
        throw (s(!1, e), "X");
      }
      function s(e, t) {
        if (!e) throw new Error("[mobx] " + (t || n));
      }
      Object.freeze(i);
      function u(e) {
        var t = !1;
        return function () {
          if (!t) return (t = !0), e.apply(this, arguments);
        };
      }
      var c = function () {};
      function d(e) {
        return null !== e && "object" == typeof e;
      }
      function p(e) {
        if (null === e || "object" != typeof e) return !1;
        var t = Object.getPrototypeOf(e);
        return t === Object.prototype || null === t;
      }
      function f(e, t, r) {
        Object.defineProperty(e, t, {
          enumerable: !1,
          writable: !0,
          configurable: !0,
          value: r,
        });
      }
      function m(e, t) {
        var r = "isMobX" + e;
        return (
          (t.prototype[r] = !0),
          function (e) {
            return d(e) && !0 === e[r];
          }
        );
      }
      function h(e) {
        return e instanceof Map;
      }
      function _(e) {
        return e instanceof Set;
      }
      function v(e) {
        var t = new Set();
        for (var r in e) t.add(r);
        return (
          Object.getOwnPropertySymbols(e).forEach(function (r) {
            Object.getOwnPropertyDescriptor(e, r).enumerable && t.add(r);
          }),
          Array.from(t)
        );
      }
      function g(e) {
        return e && e.toString ? e.toString() : new String(e).toString();
      }
      function y(e) {
        return null === e ? null : "object" == typeof e ? "" + e : e;
      }
      var b =
          "undefined" != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e)
                );
              }
            : Object.getOwnPropertyNames,
        E = Symbol("mobx administration"),
        S = (function () {
          function e(e) {
            void 0 === e && (e = "Atom@" + a()),
              (this.name = e),
              (this.isPendingUnobservation = !1),
              (this.isBeingObserved = !1),
              (this.observers = new Set()),
              (this.diffValue = 0),
              (this.lastAccessedBy = 0),
              (this.lowestObserverState = Q.NOT_TRACKING);
          }
          return (
            (e.prototype.onBecomeObserved = function () {
              this.onBecomeObservedListeners &&
                this.onBecomeObservedListeners.forEach(function (e) {
                  return e();
                });
            }),
            (e.prototype.onBecomeUnobserved = function () {
              this.onBecomeUnobservedListeners &&
                this.onBecomeUnobservedListeners.forEach(function (e) {
                  return e();
                });
            }),
            (e.prototype.reportObserved = function () {
              return Oe(this);
            }),
            (e.prototype.reportChanged = function () {
              Ae(),
                (function (e) {
                  if (e.lowestObserverState === Q.STALE) return;
                  (e.lowestObserverState = Q.STALE),
                    e.observers.forEach(function (t) {
                      t.dependenciesState === Q.UP_TO_DATE &&
                        (t.isTracing !== Y.NONE && Fe(t, e), t.onBecomeStale()),
                        (t.dependenciesState = Q.STALE);
                    });
                })(this),
                xe();
            }),
            (e.prototype.toString = function () {
              return this.name;
            }),
            e
          );
        })(),
        C = m("Atom", S);
      function I(e, t, r) {
        void 0 === t && (t = c), void 0 === r && (r = c);
        var n,
          o = new S(e);
        return (
          t !== c && Je("onBecomeObserved", o, t, n), r !== c && Ye(o, r), o
        );
      }
      var w = {
          identity: function (e, t) {
            return e === t;
          },
          structural: function (e, t) {
            return Ht(e, t);
          },
          default: function (e, t) {
            return Object.is(e, t);
          },
          shallow: function (e, t) {
            return Ht(e, t, 1);
          },
        },
        k = function (e, t) {
          return (
            (k =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              }),
            k(e, t)
          );
        };
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var T =
        function () {
          return (
            (T =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var o in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            T.apply(this, arguments)
          );
        };
      function R(e) {
        var t = "function" == typeof Symbol && e[Symbol.iterator],
          r = 0;
        return t
          ? t.call(e)
          : {
              next: function () {
                return (
                  e && r >= e.length && (e = void 0),
                  { value: e && e[r++], done: !e }
                );
              },
            };
      }
      function D(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          o,
          i = r.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; )
            a.push(n.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            n && !n.done && (r = i.return) && r.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function P() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(D(arguments[t]));
        return e;
      }
      var A = Symbol("mobx did run lazy initializers"),
        x = Symbol("mobx pending decorators"),
        O = {},
        F = {};
      function N(e) {
        var t, r;
        if (!0 !== e[A]) {
          var n = e[x];
          if (n) {
            f(e, A, !0);
            var o = P(Object.getOwnPropertySymbols(n), Object.keys(n));
            try {
              for (var i = R(o), a = i.next(); !a.done; a = i.next()) {
                var l = n[a.value];
                l.propertyCreator(
                  e,
                  l.prop,
                  l.descriptor,
                  l.decoratorTarget,
                  l.decoratorArguments
                );
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                a && !a.done && (r = i.return) && r.call(i);
              } finally {
                if (t) throw t.error;
              }
            }
          }
        }
      }
      function V(e, t) {
        return function () {
          var r,
            n,
            i = function (n, o, i, a) {
              if (!0 === a) return t(n, o, i, n, r), null;
              if (!Object.prototype.hasOwnProperty.call(n, x)) {
                var l = n[x];
                f(n, x, T({}, l));
              }
              return (
                (n[x][o] = {
                  prop: o,
                  propertyCreator: t,
                  descriptor: i,
                  decoratorTarget: n,
                  decoratorArguments: r,
                }),
                (function (e, t) {
                  var r = t ? O : F;
                  return (
                    r[e] ||
                    (r[e] = {
                      configurable: !0,
                      enumerable: t,
                      get: function () {
                        return N(this), this[e];
                      },
                      set: function (t) {
                        N(this), (this[e] = t);
                      },
                    })
                  );
                })(o, e)
              );
            };
          return ((2 === (n = arguments).length || 3 === n.length) &&
            ("string" == typeof n[1] || "symbol" == typeof n[1])) ||
            (4 === n.length && !0 === n[3])
            ? ((r = o), i.apply(null, arguments))
            : ((r = Array.prototype.slice.call(arguments)), i);
        };
      }
      function M(e, t, r) {
        return lt(e)
          ? e
          : Array.isArray(e)
          ? $.array(e, { name: r })
          : p(e)
          ? $.object(e, void 0, { name: r })
          : h(e)
          ? $.map(e, { name: r })
          : _(e)
          ? $.set(e, { name: r })
          : e;
      }
      function L(e) {
        return e;
      }
      function B(e) {
        s(e);
        var t = V(!0, function (t, r, n, o, i) {
          var a = n
            ? n.initializer
              ? n.initializer.call(t)
              : n.value
            : void 0;
          Ot(t).addObservableProp(r, a, e);
        });
        return (t.enhancer = e), t;
      }
      var U = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
      function G(e) {
        return null == e
          ? U
          : "string" == typeof e
          ? { name: e, deep: !0, proxy: !0 }
          : e;
      }
      Object.freeze(U);
      var H = B(M),
        W = B(function (e, t, r) {
          return null == e || Lt(e) || It(e) || Rt(e) || At(e)
            ? e
            : Array.isArray(e)
            ? $.array(e, { name: r, deep: !1 })
            : p(e)
            ? $.object(e, void 0, { name: r, deep: !1 })
            : h(e)
            ? $.map(e, { name: r, deep: !1 })
            : _(e)
            ? $.set(e, { name: r, deep: !1 })
            : l(!1);
        }),
        z = B(L),
        j = B(function (e, t, r) {
          return Ht(e, t) ? t : e;
        });
      function q(e) {
        return e.defaultDecorator
          ? e.defaultDecorator.enhancer
          : !1 === e.deep
          ? L
          : M;
      }
      var K = {
          box: function (e, t) {
            arguments.length > 2 && X("box");
            var r = G(t);
            return new ge(e, q(r), r.name, !0, r.equals);
          },
          array: function (e, t) {
            arguments.length > 2 && X("array");
            var r = G(t);
            return (function (e, t, r, n) {
              void 0 === r && (r = "ObservableArray@" + a());
              void 0 === n && (n = !1);
              var o = new bt(r, t, n);
              (i = o.values),
                (l = E),
                (s = o),
                Object.defineProperty(i, l, {
                  enumerable: !1,
                  writable: !1,
                  configurable: !0,
                  value: s,
                });
              var i, l, s;
              var u = new Proxy(o.values, yt);
              if (((o.proxy = u), e && e.length)) {
                var c = _e(!0);
                o.spliceWithArray(0, 0, e), ve(c);
              }
              return u;
            })(e, q(r), r.name);
          },
          map: function (e, t) {
            arguments.length > 2 && X("map");
            var r = G(t);
            return new Tt(e, q(r), r.name);
          },
          set: function (e, t) {
            arguments.length > 2 && X("set");
            var r = G(t);
            return new Pt(e, q(r), r.name);
          },
          object: function (e, t, r) {
            "string" == typeof arguments[1] && X("object");
            var n = G(r);
            if (!1 === n.proxy) return et({}, e, t, n);
            var o = tt(n),
              i = (function (e) {
                var t = new Proxy(e, pt);
                return (e[E].proxy = t), t;
              })(et({}, void 0, void 0, n));
            return rt(i, e, t, o), i;
          },
          ref: z,
          shallow: W,
          deep: H,
          struct: j,
        },
        $ = function (e, t, r) {
          if (
            "string" == typeof arguments[1] ||
            "symbol" == typeof arguments[1]
          )
            return H.apply(null, arguments);
          if (lt(e)) return e;
          var n = p(e)
            ? $.object(e, t, r)
            : Array.isArray(e)
            ? $.array(e, t)
            : h(e)
            ? $.map(e, t)
            : _(e)
            ? $.set(e, t)
            : e;
          if (n !== e) return n;
          l(!1);
        };
      function X(e) {
        l(
          "Expected one or two arguments to observable." +
            e +
            ". Did you accidentally try to use observable." +
            e +
            " as decorator?"
        );
      }
      Object.keys(K).forEach(function (e) {
        return ($[e] = K[e]);
      });
      var Q,
        Y,
        J = V(!1, function (e, t, r, n, o) {
          var i = r.get,
            a = r.set,
            l = o[0] || {};
          Ot(e).addComputedProp(e, t, T({ get: i, set: a, context: e }, l));
        });
      J({ equals: w.structural });
      !(function (e) {
        (e[(e.NOT_TRACKING = -1)] = "NOT_TRACKING"),
          (e[(e.UP_TO_DATE = 0)] = "UP_TO_DATE"),
          (e[(e.POSSIBLY_STALE = 1)] = "POSSIBLY_STALE"),
          (e[(e.STALE = 2)] = "STALE");
      })(Q || (Q = {})),
        (function (e) {
          (e[(e.NONE = 0)] = "NONE"),
            (e[(e.LOG = 1)] = "LOG"),
            (e[(e.BREAK = 2)] = "BREAK");
        })(Y || (Y = {}));
      var Z = function (e) {
        this.cause = e;
      };
      function ee(e) {
        return e instanceof Z;
      }
      function te(e) {
        switch (e.dependenciesState) {
          case Q.UP_TO_DATE:
            return !1;
          case Q.NOT_TRACKING:
          case Q.STALE:
            return !0;
          case Q.POSSIBLY_STALE:
            for (
              var t = se(!0), r = ae(), n = e.observing, o = n.length, i = 0;
              i < o;
              i++
            ) {
              var a = n[i];
              if (be(a)) {
                if (Te.disableErrorBoundaries) a.get();
                else
                  try {
                    a.get();
                  } catch (e) {
                    return le(r), ue(t), !0;
                  }
                if (e.dependenciesState === Q.STALE) return le(r), ue(t), !0;
              }
            }
            return ce(e), le(r), ue(t), !1;
        }
      }
      function re(e) {
        var t = e.observers.size > 0;
        Te.computationDepth > 0 && t && l(!1),
          Te.allowStateChanges ||
            (!t && "strict" !== Te.enforceActions) ||
            l(!1);
      }
      function ne(e, t, r) {
        var n = se(!0);
        ce(e),
          (e.newObserving = new Array(e.observing.length + 100)),
          (e.unboundDepsCount = 0),
          (e.runId = ++Te.runId);
        var o,
          i = Te.trackingDerivation;
        if (((Te.trackingDerivation = e), !0 === Te.disableErrorBoundaries))
          o = t.call(r);
        else
          try {
            o = t.call(r);
          } catch (e) {
            o = new Z(e);
          }
        return (
          (Te.trackingDerivation = i),
          (function (e) {
            for (
              var t = e.observing,
                r = (e.observing = e.newObserving),
                n = Q.UP_TO_DATE,
                o = 0,
                i = e.unboundDepsCount,
                a = 0;
              a < i;
              a++
            ) {
              0 === (l = r[a]).diffValue &&
                ((l.diffValue = 1), o !== a && (r[o] = l), o++),
                l.dependenciesState > n && (n = l.dependenciesState);
            }
            (r.length = o), (e.newObserving = null), (i = t.length);
            for (; i--; ) {
              0 === (l = t[i]).diffValue && De(l, e), (l.diffValue = 0);
            }
            for (; o--; ) {
              var l;
              1 === (l = r[o]).diffValue && ((l.diffValue = 0), Re(l, e));
            }
            n !== Q.UP_TO_DATE &&
              ((e.dependenciesState = n), e.onBecomeStale());
          })(e),
          ue(n),
          o
        );
      }
      function oe(e) {
        var t = e.observing;
        e.observing = [];
        for (var r = t.length; r--; ) De(t[r], e);
        e.dependenciesState = Q.NOT_TRACKING;
      }
      function ie(e) {
        var t = ae();
        try {
          return e();
        } finally {
          le(t);
        }
      }
      function ae() {
        var e = Te.trackingDerivation;
        return (Te.trackingDerivation = null), e;
      }
      function le(e) {
        Te.trackingDerivation = e;
      }
      function se(e) {
        var t = Te.allowStateReads;
        return (Te.allowStateReads = e), t;
      }
      function ue(e) {
        Te.allowStateReads = e;
      }
      function ce(e) {
        if (e.dependenciesState !== Q.UP_TO_DATE) {
          e.dependenciesState = Q.UP_TO_DATE;
          for (var t = e.observing, r = t.length; r--; )
            t[r].lowestObserverState = Q.UP_TO_DATE;
        }
      }
      var de = 0,
        pe = 1,
        fe = Object.getOwnPropertyDescriptor(function () {}, "name");
      fe && fe.configurable;
      function me(e, t, r) {
        var n = function () {
          return he(e, t, r || this, arguments);
        };
        return (n.isMobxAction = !0), n;
      }
      function he(e, t, r, n) {
        var o = (function (e, t, r) {
          var n = !1,
            o = 0;
          0;
          var i = ae();
          Ae();
          var a = _e(!0),
            l = se(!0),
            s = {
              prevDerivation: i,
              prevAllowStateChanges: a,
              prevAllowStateReads: l,
              notifySpy: n,
              startTime: o,
              actionId: pe++,
              parentActionId: de,
            };
          return (de = s.actionId), s;
        })();
        try {
          return t.apply(r, n);
        } catch (e) {
          throw ((o.error = e), e);
        } finally {
          !(function (e) {
            de !== e.actionId &&
              l("invalid action stack. did you forget to finish an action?");
            (de = e.parentActionId),
              void 0 !== e.error && (Te.suppressReactionErrors = !0);
            ve(e.prevAllowStateChanges),
              ue(e.prevAllowStateReads),
              xe(),
              le(e.prevDerivation),
              e.notifySpy;
            Te.suppressReactionErrors = !1;
          })(o);
        }
      }
      function _e(e) {
        var t = Te.allowStateChanges;
        return (Te.allowStateChanges = e), t;
      }
      function ve(e) {
        Te.allowStateChanges = e;
      }
      var ge = (function (e) {
          function t(t, r, n, o, i) {
            void 0 === n && (n = "ObservableValue@" + a()),
              void 0 === o && (o = !0),
              void 0 === i && (i = w.default);
            var l = e.call(this, n) || this;
            return (
              (l.enhancer = r),
              (l.name = n),
              (l.equals = i),
              (l.hasUnreportedChange = !1),
              (l.value = r(t, void 0, n)),
              l
            );
          }
          return (
            (function (e, t) {
              function r() {
                this.constructor = e;
              }
              k(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((r.prototype = t.prototype), new r()));
            })(t, e),
            (t.prototype.dehanceValue = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.prototype.set = function (e) {
              this.value;
              if ((e = this.prepareNewValue(e)) !== Te.UNCHANGED) {
                false, this.setNewValue(e);
              }
            }),
            (t.prototype.prepareNewValue = function (e) {
              if ((re(this), ft(this))) {
                var t = ht(this, { object: this, type: "update", newValue: e });
                if (!t) return Te.UNCHANGED;
                e = t.newValue;
              }
              return (
                (e = this.enhancer(e, this.value, this.name)),
                this.equals(this.value, e) ? Te.UNCHANGED : e
              );
            }),
            (t.prototype.setNewValue = function (e) {
              var t = this.value;
              (this.value = e),
                this.reportChanged(),
                _t(this) &&
                  gt(this, {
                    type: "update",
                    object: this,
                    newValue: e,
                    oldValue: t,
                  });
            }),
            (t.prototype.get = function () {
              return this.reportObserved(), this.dehanceValue(this.value);
            }),
            (t.prototype.intercept = function (e) {
              return mt(this, e);
            }),
            (t.prototype.observe = function (e, t) {
              return (
                t &&
                  e({
                    object: this,
                    type: "update",
                    newValue: this.value,
                    oldValue: void 0,
                  }),
                vt(this, e)
              );
            }),
            (t.prototype.toJSON = function () {
              return this.get();
            }),
            (t.prototype.toString = function () {
              return this.name + "[" + this.value + "]";
            }),
            (t.prototype.valueOf = function () {
              return y(this.get());
            }),
            (t.prototype[Symbol.toPrimitive] = function () {
              return this.valueOf();
            }),
            t
          );
        })(S),
        ye =
          (m("ObservableValue", ge),
          (function () {
            function e(e) {
              (this.dependenciesState = Q.NOT_TRACKING),
                (this.observing = []),
                (this.newObserving = null),
                (this.isBeingObserved = !1),
                (this.isPendingUnobservation = !1),
                (this.observers = new Set()),
                (this.diffValue = 0),
                (this.runId = 0),
                (this.lastAccessedBy = 0),
                (this.lowestObserverState = Q.UP_TO_DATE),
                (this.unboundDepsCount = 0),
                (this.__mapid = "#" + a()),
                (this.value = new Z(null)),
                (this.isComputing = !1),
                (this.isRunningSetter = !1),
                (this.isTracing = Y.NONE),
                s(e.get, "missing option for computed: get"),
                (this.derivation = e.get),
                (this.name = e.name || "ComputedValue@" + a()),
                e.set && (this.setter = me(this.name + "-setter", e.set)),
                (this.equals =
                  e.equals ||
                  (e.compareStructural || e.struct ? w.structural : w.default)),
                (this.scope = e.context),
                (this.requiresReaction = !!e.requiresReaction),
                (this.keepAlive = !!e.keepAlive);
            }
            return (
              (e.prototype.onBecomeStale = function () {
                !(function (e) {
                  if (e.lowestObserverState !== Q.UP_TO_DATE) return;
                  (e.lowestObserverState = Q.POSSIBLY_STALE),
                    e.observers.forEach(function (t) {
                      t.dependenciesState === Q.UP_TO_DATE &&
                        ((t.dependenciesState = Q.POSSIBLY_STALE),
                        t.isTracing !== Y.NONE && Fe(t, e),
                        t.onBecomeStale());
                    });
                })(this);
              }),
              (e.prototype.onBecomeObserved = function () {
                this.onBecomeObservedListeners &&
                  this.onBecomeObservedListeners.forEach(function (e) {
                    return e();
                  });
              }),
              (e.prototype.onBecomeUnobserved = function () {
                this.onBecomeUnobservedListeners &&
                  this.onBecomeUnobservedListeners.forEach(function (e) {
                    return e();
                  });
              }),
              (e.prototype.get = function () {
                this.isComputing &&
                  l(
                    "Cycle detected in computation " +
                      this.name +
                      ": " +
                      this.derivation
                  ),
                  0 !== Te.inBatch ||
                  0 !== this.observers.size ||
                  this.keepAlive
                    ? (Oe(this),
                      te(this) &&
                        this.trackAndCompute() &&
                        (function (e) {
                          if (e.lowestObserverState === Q.STALE) return;
                          (e.lowestObserverState = Q.STALE),
                            e.observers.forEach(function (t) {
                              t.dependenciesState === Q.POSSIBLY_STALE
                                ? (t.dependenciesState = Q.STALE)
                                : t.dependenciesState === Q.UP_TO_DATE &&
                                  (e.lowestObserverState = Q.UP_TO_DATE);
                            });
                        })(this))
                    : te(this) &&
                      (this.warnAboutUntrackedRead(),
                      Ae(),
                      (this.value = this.computeValue(!1)),
                      xe());
                var e = this.value;
                if (ee(e)) throw e.cause;
                return e;
              }),
              (e.prototype.peek = function () {
                var e = this.computeValue(!1);
                if (ee(e)) throw e.cause;
                return e;
              }),
              (e.prototype.set = function (e) {
                if (this.setter) {
                  s(
                    !this.isRunningSetter,
                    "The setter of computed value '" +
                      this.name +
                      "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"
                  ),
                    (this.isRunningSetter = !0);
                  try {
                    this.setter.call(this.scope, e);
                  } finally {
                    this.isRunningSetter = !1;
                  }
                } else s(!1, !1);
              }),
              (e.prototype.trackAndCompute = function () {
                var e = this.value,
                  t = this.dependenciesState === Q.NOT_TRACKING,
                  r = this.computeValue(!0),
                  n = t || ee(e) || ee(r) || !this.equals(e, r);
                return n && (this.value = r), n;
              }),
              (e.prototype.computeValue = function (e) {
                var t;
                if (((this.isComputing = !0), Te.computationDepth++, e))
                  t = ne(this, this.derivation, this.scope);
                else if (!0 === Te.disableErrorBoundaries)
                  t = this.derivation.call(this.scope);
                else
                  try {
                    t = this.derivation.call(this.scope);
                  } catch (e) {
                    t = new Z(e);
                  }
                return Te.computationDepth--, (this.isComputing = !1), t;
              }),
              (e.prototype.suspend = function () {
                this.keepAlive || (oe(this), (this.value = void 0));
              }),
              (e.prototype.observe = function (e, t) {
                var r = this,
                  n = !0,
                  o = void 0;
                return $e(function () {
                  var i = r.get();
                  if (!n || t) {
                    var a = ae();
                    e({ type: "update", object: r, newValue: i, oldValue: o }),
                      le(a);
                  }
                  (n = !1), (o = i);
                });
              }),
              (e.prototype.warnAboutUntrackedRead = function () {}),
              (e.prototype.toJSON = function () {
                return this.get();
              }),
              (e.prototype.toString = function () {
                return this.name + "[" + this.derivation.toString() + "]";
              }),
              (e.prototype.valueOf = function () {
                return y(this.get());
              }),
              (e.prototype[Symbol.toPrimitive] = function () {
                return this.valueOf();
              }),
              e
            );
          })()),
        be = m("ComputedValue", ye),
        Ee = function () {
          (this.version = 5),
            (this.UNCHANGED = {}),
            (this.trackingDerivation = null),
            (this.computationDepth = 0),
            (this.runId = 0),
            (this.mobxGuid = 0),
            (this.inBatch = 0),
            (this.pendingUnobservations = []),
            (this.pendingReactions = []),
            (this.isRunningReactions = !1),
            (this.allowStateChanges = !0),
            (this.allowStateReads = !0),
            (this.enforceActions = !1),
            (this.spyListeners = []),
            (this.globalReactionErrorHandlers = []),
            (this.computedRequiresReaction = !1),
            (this.reactionRequiresObservable = !1),
            (this.observableRequiresReaction = !1),
            (this.computedConfigurable = !1),
            (this.disableErrorBoundaries = !1),
            (this.suppressReactionErrors = !1);
        },
        Se = {};
      function Ce() {
        return "undefined" != typeof window
          ? window
          : void 0 !== r.g
          ? r.g
          : "undefined" != typeof self
          ? self
          : Se;
      }
      var Ie,
        we = !0,
        ke = !1,
        Te =
          ((Ie = Ce()).__mobxInstanceCount > 0 &&
            !Ie.__mobxGlobals &&
            (we = !1),
          Ie.__mobxGlobals &&
            Ie.__mobxGlobals.version !== new Ee().version &&
            (we = !1),
          we
            ? Ie.__mobxGlobals
              ? ((Ie.__mobxInstanceCount += 1),
                Ie.__mobxGlobals.UNCHANGED || (Ie.__mobxGlobals.UNCHANGED = {}),
                Ie.__mobxGlobals)
              : ((Ie.__mobxInstanceCount = 1), (Ie.__mobxGlobals = new Ee()))
            : (setTimeout(function () {
                ke ||
                  l(
                    "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`"
                  );
              }, 1),
              new Ee()));
      function Re(e, t) {
        e.observers.add(t),
          e.lowestObserverState > t.dependenciesState &&
            (e.lowestObserverState = t.dependenciesState);
      }
      function De(e, t) {
        e.observers.delete(t), 0 === e.observers.size && Pe(e);
      }
      function Pe(e) {
        !1 === e.isPendingUnobservation &&
          ((e.isPendingUnobservation = !0), Te.pendingUnobservations.push(e));
      }
      function Ae() {
        Te.inBatch++;
      }
      function xe() {
        if (0 == --Te.inBatch) {
          Be();
          for (var e = Te.pendingUnobservations, t = 0; t < e.length; t++) {
            var r = e[t];
            (r.isPendingUnobservation = !1),
              0 === r.observers.size &&
                (r.isBeingObserved &&
                  ((r.isBeingObserved = !1), r.onBecomeUnobserved()),
                r instanceof ye && r.suspend());
          }
          Te.pendingUnobservations = [];
        }
      }
      function Oe(e) {
        var t = Te.trackingDerivation;
        return null !== t
          ? (t.runId !== e.lastAccessedBy &&
              ((e.lastAccessedBy = t.runId),
              (t.newObserving[t.unboundDepsCount++] = e),
              e.isBeingObserved ||
                ((e.isBeingObserved = !0), e.onBecomeObserved())),
            !0)
          : (0 === e.observers.size && Te.inBatch > 0 && Pe(e), !1);
      }
      function Fe(e, t) {
        if (
          (console.log(
            "[mobx.trace] '" +
              e.name +
              "' is invalidated due to a change in: '" +
              t.name +
              "'"
          ),
          e.isTracing === Y.BREAK)
        ) {
          var r = [];
          Ne(nt(e), r, 1),
            new Function(
              "debugger;\n/*\nTracing '" +
                e.name +
                "'\n\nYou are entering this break point because derivation '" +
                e.name +
                "' is being traced and '" +
                t.name +
                "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" +
                (e instanceof ye
                  ? e.derivation.toString().replace(/[*]\//g, "/")
                  : "") +
                "\n\nThe dependencies for this derivation are:\n\n" +
                r.join("\n") +
                "\n*/\n    "
            )();
        }
      }
      function Ne(e, t, r) {
        t.length >= 1e3
          ? t.push("(and many more)")
          : (t.push("" + new Array(r).join("\t") + e.name),
            e.dependencies &&
              e.dependencies.forEach(function (e) {
                return Ne(e, t, r + 1);
              }));
      }
      var Ve = (function () {
        function e(e, t, r, n) {
          void 0 === e && (e = "Reaction@" + a()),
            void 0 === n && (n = !1),
            (this.name = e),
            (this.onInvalidate = t),
            (this.errorHandler = r),
            (this.requiresObservable = n),
            (this.observing = []),
            (this.newObserving = []),
            (this.dependenciesState = Q.NOT_TRACKING),
            (this.diffValue = 0),
            (this.runId = 0),
            (this.unboundDepsCount = 0),
            (this.__mapid = "#" + a()),
            (this.isDisposed = !1),
            (this._isScheduled = !1),
            (this._isTrackPending = !1),
            (this._isRunning = !1),
            (this.isTracing = Y.NONE);
        }
        return (
          (e.prototype.onBecomeStale = function () {
            this.schedule();
          }),
          (e.prototype.schedule = function () {
            this._isScheduled ||
              ((this._isScheduled = !0), Te.pendingReactions.push(this), Be());
          }),
          (e.prototype.isScheduled = function () {
            return this._isScheduled;
          }),
          (e.prototype.runReaction = function () {
            if (!this.isDisposed) {
              if ((Ae(), (this._isScheduled = !1), te(this))) {
                this._isTrackPending = !0;
                try {
                  this.onInvalidate(), this._isTrackPending;
                } catch (e) {
                  this.reportExceptionInDerivation(e);
                }
              }
              xe();
            }
          }),
          (e.prototype.track = function (e) {
            if (!this.isDisposed) {
              Ae();
              false, (this._isRunning = !0);
              var t = ne(this, e, void 0);
              (this._isRunning = !1),
                (this._isTrackPending = !1),
                this.isDisposed && oe(this),
                ee(t) && this.reportExceptionInDerivation(t.cause),
                xe();
            }
          }),
          (e.prototype.reportExceptionInDerivation = function (e) {
            var t = this;
            if (this.errorHandler) this.errorHandler(e, this);
            else {
              if (Te.disableErrorBoundaries) throw e;
              var r =
                "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" +
                this +
                "'";
              Te.suppressReactionErrors
                ? console.warn(
                    "[mobx] (error in reaction '" +
                      this.name +
                      "' suppressed, fix error of causing action below)"
                  )
                : console.error(r, e),
                Te.globalReactionErrorHandlers.forEach(function (r) {
                  return r(e, t);
                });
            }
          }),
          (e.prototype.dispose = function () {
            this.isDisposed ||
              ((this.isDisposed = !0),
              this._isRunning || (Ae(), oe(this), xe()));
          }),
          (e.prototype.getDisposer = function () {
            var e = this.dispose.bind(this);
            return (e[E] = this), e;
          }),
          (e.prototype.toString = function () {
            return "Reaction[" + this.name + "]";
          }),
          (e.prototype.trace = function (e) {
            void 0 === e && (e = !1),
              (function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                var r = !1;
                "boolean" == typeof e[e.length - 1] && (r = e.pop());
                var n = (function (e) {
                  switch (e.length) {
                    case 0:
                      return Te.trackingDerivation;
                    case 1:
                      return Bt(e[0]);
                    case 2:
                      return Bt(e[0], e[1]);
                  }
                })(e);
                if (!n) return l(!1);
                n.isTracing === Y.NONE &&
                  console.log("[mobx.trace] '" + n.name + "' tracing enabled");
                n.isTracing = r ? Y.BREAK : Y.LOG;
              })(this, e);
          }),
          e
        );
      })();
      var Me = 100,
        Le = function (e) {
          return e();
        };
      function Be() {
        Te.inBatch > 0 || Te.isRunningReactions || Le(Ue);
      }
      function Ue() {
        Te.isRunningReactions = !0;
        for (var e = Te.pendingReactions, t = 0; e.length > 0; ) {
          ++t === Me &&
            (console.error(
              "Reaction doesn't converge to a stable state after " +
                Me +
                " iterations. Probably there is a cycle in the reactive function: " +
                e[0]
            ),
            e.splice(0));
          for (var r = e.splice(0), n = 0, o = r.length; n < o; n++)
            r[n].runReaction();
        }
        Te.isRunningReactions = !1;
      }
      var Ge = m("Reaction", Ve);
      function He(e) {
        var t = Le;
        Le = function (r) {
          return e(function () {
            return t(r);
          });
        };
      }
      function We(e) {
        return (
          console.warn("[mobx.spy] Is a no-op in production builds"),
          function () {}
        );
      }
      function ze() {
        l(!1);
      }
      function je(e) {
        return function (t, r, n) {
          if (n) {
            if (n.value)
              return {
                value: me(e, n.value),
                enumerable: !1,
                configurable: !0,
                writable: !0,
              };
            var o = n.initializer;
            return {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              initializer: function () {
                return me(e, o.call(this));
              },
            };
          }
          return (function (e) {
            return function (t, r, n) {
              Object.defineProperty(t, r, {
                configurable: !0,
                enumerable: !1,
                get: function () {},
                set: function (t) {
                  f(this, r, qe(e, t));
                },
              });
            };
          })(e).apply(this, arguments);
        };
      }
      var qe = function (e, t, r, n) {
        return 1 === arguments.length && "function" == typeof e
          ? me(e.name || "<unnamed action>", e)
          : 2 === arguments.length && "function" == typeof t
          ? me(e, t)
          : 1 === arguments.length && "string" == typeof e
          ? je(e)
          : !0 !== n
          ? je(t).apply(null, arguments)
          : void f(e, t, me(e.name || t, r.value, this));
      };
      function Ke(e, t, r) {
        f(e, t, me(t, r.bind(e)));
      }
      function $e(e, t) {
        void 0 === t && (t = i);
        var r,
          n = (t && t.name) || e.name || "Autorun@" + a();
        if (!t.scheduler && !t.delay)
          r = new Ve(
            n,
            function () {
              this.track(s);
            },
            t.onError,
            t.requiresObservable
          );
        else {
          var o = Qe(t),
            l = !1;
          r = new Ve(
            n,
            function () {
              l ||
                ((l = !0),
                o(function () {
                  (l = !1), r.isDisposed || r.track(s);
                }));
            },
            t.onError,
            t.requiresObservable
          );
        }
        function s() {
          e(r);
        }
        return r.schedule(), r.getDisposer();
      }
      qe.bound = function (e, t, r, n) {
        return !0 === n
          ? (Ke(e, t, r.value), null)
          : r
          ? {
              configurable: !0,
              enumerable: !1,
              get: function () {
                return (
                  Ke(this, t, r.value || r.initializer.call(this)), this[t]
                );
              },
              set: ze,
            }
          : {
              enumerable: !1,
              configurable: !0,
              set: function (e) {
                Ke(this, t, e);
              },
              get: function () {},
            };
      };
      var Xe = function (e) {
        return e();
      };
      function Qe(e) {
        return e.scheduler
          ? e.scheduler
          : e.delay
          ? function (t) {
              return setTimeout(t, e.delay);
            }
          : Xe;
      }
      function Ye(e, t, r) {
        return Je("onBecomeUnobserved", e, t, r);
      }
      function Je(e, t, r, n) {
        var o = "function" == typeof n ? Bt(t, r) : Bt(t),
          i = "function" == typeof n ? n : r,
          a = e + "Listeners";
        return (
          o[a] ? o[a].add(i) : (o[a] = new Set([i])),
          "function" != typeof o[e]
            ? l(!1)
            : function () {
                var e = o[a];
                e && (e.delete(i), 0 === e.size && delete o[a]);
              }
        );
      }
      function Ze(e) {
        var t = e.enforceActions,
          r = e.computedRequiresReaction,
          n = e.computedConfigurable,
          o = e.disableErrorBoundaries,
          i = e.reactionScheduler,
          a = e.reactionRequiresObservable,
          s = e.observableRequiresReaction;
        if (
          (!0 === e.isolateGlobalState &&
            ((Te.pendingReactions.length ||
              Te.inBatch ||
              Te.isRunningReactions) &&
              l(
                "isolateGlobalState should be called before MobX is running any reactions"
              ),
            (ke = !0),
            we &&
              (0 == --Ce().__mobxInstanceCount && (Ce().__mobxGlobals = void 0),
              (Te = new Ee()))),
          void 0 !== t)
        ) {
          var u = void 0;
          switch (t) {
            case !0:
            case "observed":
              u = !0;
              break;
            case !1:
            case "never":
              u = !1;
              break;
            case "strict":
            case "always":
              u = "strict";
              break;
            default:
              l(
                "Invalid value for 'enforceActions': '" +
                  t +
                  "', expected 'never', 'always' or 'observed'"
              );
          }
          (Te.enforceActions = u),
            (Te.allowStateChanges = !0 !== u && "strict" !== u);
        }
        void 0 !== r && (Te.computedRequiresReaction = !!r),
          void 0 !== a && (Te.reactionRequiresObservable = !!a),
          void 0 !== s &&
            ((Te.observableRequiresReaction = !!s),
            (Te.allowStateReads = !Te.observableRequiresReaction)),
          void 0 !== n && (Te.computedConfigurable = !!n),
          void 0 !== o &&
            (!0 === o &&
              console.warn(
                "WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled."
              ),
            (Te.disableErrorBoundaries = !!o)),
          i && He(i);
      }
      function et(e, t, r, n) {
        var o = tt((n = G(n)));
        return N(e), Ot(e, n.name, o.enhancer), t && rt(e, t, r, o), e;
      }
      function tt(e) {
        return e.defaultDecorator || (!1 === e.deep ? z : H);
      }
      function rt(e, t, r, n) {
        var o, i;
        Ae();
        try {
          var a = b(t);
          try {
            for (var l = R(a), s = l.next(); !s.done; s = l.next()) {
              var u = s.value,
                c = Object.getOwnPropertyDescriptor(t, u);
              0;
              var d = (r && u in r ? r[u] : c.get ? J : n)(e, u, c, !0);
              d && Object.defineProperty(e, u, d);
            }
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              s && !s.done && (i = l.return) && i.call(l);
            } finally {
              if (o) throw o.error;
            }
          }
        } finally {
          xe();
        }
      }
      function nt(e, t) {
        return ot(Bt(e, t));
      }
      function ot(e) {
        var t,
          r,
          n = { name: e.name };
        return (
          e.observing &&
            e.observing.length > 0 &&
            (n.dependencies = ((t = e.observing),
            (r = []),
            t.forEach(function (e) {
              -1 === r.indexOf(e) && r.push(e);
            }),
            r).map(ot)),
          n
        );
      }
      function it() {
        this.message = "FLOW_CANCELLED";
      }
      function at(e, t) {
        return (
          null != e &&
          (void 0 !== t
            ? !!Lt(e) && e[E].values.has(t)
            : Lt(e) || !!e[E] || C(e) || Ge(e) || be(e))
        );
      }
      function lt(e) {
        return 1 !== arguments.length && l(!1), at(e);
      }
      function st(e, t, r) {
        if (2 !== arguments.length || At(e))
          if (Lt(e)) {
            var n = e[E];
            n.values.get(t)
              ? n.write(t, r)
              : n.addObservableProp(t, r, n.defaultEnhancer);
          } else if (Rt(e)) e.set(t, r);
          else if (At(e)) e.add(t);
          else {
            if (!It(e)) return l(!1);
            "number" != typeof t && (t = parseInt(t, 10)),
              s(t >= 0, "Not a valid index: '" + t + "'"),
              Ae(),
              t >= e.length && (e.length = t + 1),
              (e[t] = r),
              xe();
          }
        else {
          Ae();
          var o = t;
          try {
            for (var i in o) st(e, i, o[i]);
          } finally {
            xe();
          }
        }
      }
      it.prototype = Object.create(Error.prototype);
      function ut(e, t) {
        void 0 === t && (t = void 0), Ae();
        try {
          return e.apply(t);
        } finally {
          xe();
        }
      }
      function ct(e) {
        return e[E];
      }
      function dt(e) {
        return (
          "string" == typeof e || "number" == typeof e || "symbol" == typeof e
        );
      }
      var pt = {
        has: function (e, t) {
          if (t === E || "constructor" === t || t === A) return !0;
          var r = ct(e);
          return dt(t) ? r.has(t) : t in e;
        },
        get: function (e, t) {
          if (t === E || "constructor" === t || t === A) return e[t];
          var r = ct(e),
            n = r.values.get(t);
          if (n instanceof S) {
            var o = n.get();
            return void 0 === o && r.has(t), o;
          }
          return dt(t) && r.has(t), e[t];
        },
        set: function (e, t, r) {
          return !!dt(t) && (st(e, t, r), !0);
        },
        deleteProperty: function (e, t) {
          return !!dt(t) && (ct(e).remove(t), !0);
        },
        ownKeys: function (e) {
          return ct(e).keysAtom.reportObserved(), Reflect.ownKeys(e);
        },
        preventExtensions: function (e) {
          return l("Dynamic observable objects cannot be frozen"), !1;
        },
      };
      function ft(e) {
        return void 0 !== e.interceptors && e.interceptors.length > 0;
      }
      function mt(e, t) {
        var r = e.interceptors || (e.interceptors = []);
        return (
          r.push(t),
          u(function () {
            var e = r.indexOf(t);
            -1 !== e && r.splice(e, 1);
          })
        );
      }
      function ht(e, t) {
        var r = ae();
        try {
          for (
            var n = P(e.interceptors || []), o = 0, i = n.length;
            o < i &&
            (s(
              !(t = n[o](t)) || t.type,
              "Intercept handlers should return nothing or a change object"
            ),
            t);
            o++
          );
          return t;
        } finally {
          le(r);
        }
      }
      function _t(e) {
        return void 0 !== e.changeListeners && e.changeListeners.length > 0;
      }
      function vt(e, t) {
        var r = e.changeListeners || (e.changeListeners = []);
        return (
          r.push(t),
          u(function () {
            var e = r.indexOf(t);
            -1 !== e && r.splice(e, 1);
          })
        );
      }
      function gt(e, t) {
        var r = ae(),
          n = e.changeListeners;
        if (n) {
          for (var o = 0, i = (n = n.slice()).length; o < i; o++) n[o](t);
          le(r);
        }
      }
      var yt = {
        get: function (e, t) {
          return t === E
            ? e[E]
            : "length" === t
            ? e[E].getArrayLength()
            : "number" == typeof t
            ? Et.get.call(e, t)
            : "string" != typeof t || isNaN(t)
            ? Et.hasOwnProperty(t)
              ? Et[t]
              : e[t]
            : Et.get.call(e, parseInt(t));
        },
        set: function (e, t, r) {
          return (
            "length" === t && e[E].setArrayLength(r),
            "number" == typeof t && Et.set.call(e, t, r),
            "symbol" == typeof t || isNaN(t)
              ? (e[t] = r)
              : Et.set.call(e, parseInt(t), r),
            !0
          );
        },
        preventExtensions: function (e) {
          return l("Observable arrays cannot be frozen"), !1;
        },
      };
      var bt = (function () {
          function e(e, t, r) {
            (this.owned = r),
              (this.values = []),
              (this.proxy = void 0),
              (this.lastKnownLength = 0),
              (this.atom = new S(e || "ObservableArray@" + a())),
              (this.enhancer = function (r, n) {
                return t(r, n, e + "[..]");
              });
          }
          return (
            (e.prototype.dehanceValue = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (e.prototype.dehanceValues = function (e) {
              return void 0 !== this.dehancer && e.length > 0
                ? e.map(this.dehancer)
                : e;
            }),
            (e.prototype.intercept = function (e) {
              return mt(this, e);
            }),
            (e.prototype.observe = function (e, t) {
              return (
                void 0 === t && (t = !1),
                t &&
                  e({
                    object: this.proxy,
                    type: "splice",
                    index: 0,
                    added: this.values.slice(),
                    addedCount: this.values.length,
                    removed: [],
                    removedCount: 0,
                  }),
                vt(this, e)
              );
            }),
            (e.prototype.getArrayLength = function () {
              return this.atom.reportObserved(), this.values.length;
            }),
            (e.prototype.setArrayLength = function (e) {
              if ("number" != typeof e || e < 0)
                throw new Error("[mobx.array] Out of range: " + e);
              var t = this.values.length;
              if (e !== t)
                if (e > t) {
                  for (var r = new Array(e - t), n = 0; n < e - t; n++)
                    r[n] = void 0;
                  this.spliceWithArray(t, 0, r);
                } else this.spliceWithArray(e, t - e);
            }),
            (e.prototype.updateArrayLength = function (e, t) {
              if (e !== this.lastKnownLength)
                throw new Error(
                  "[mobx] Modification exception: the internal structure of an observable array was changed."
                );
              this.lastKnownLength += t;
            }),
            (e.prototype.spliceWithArray = function (e, t, r) {
              var n = this;
              re(this.atom);
              var i = this.values.length;
              if (
                (void 0 === e
                  ? (e = 0)
                  : e > i
                  ? (e = i)
                  : e < 0 && (e = Math.max(0, i + e)),
                (t =
                  1 === arguments.length
                    ? i - e
                    : null == t
                    ? 0
                    : Math.max(0, Math.min(t, i - e))),
                void 0 === r && (r = o),
                ft(this))
              ) {
                var a = ht(this, {
                  object: this.proxy,
                  type: "splice",
                  index: e,
                  removedCount: t,
                  added: r,
                });
                if (!a) return o;
                (t = a.removedCount), (r = a.added);
              }
              r =
                0 === r.length
                  ? r
                  : r.map(function (e) {
                      return n.enhancer(e, void 0);
                    });
              var l = this.spliceItemsIntoValues(e, t, r);
              return (
                (0 === t && 0 === r.length) || this.notifyArraySplice(e, r, l),
                this.dehanceValues(l)
              );
            }),
            (e.prototype.spliceItemsIntoValues = function (e, t, r) {
              var n;
              if (r.length < 1e4)
                return (n = this.values).splice.apply(n, P([e, t], r));
              var o = this.values.slice(e, e + t);
              return (
                (this.values = this.values
                  .slice(0, e)
                  .concat(r, this.values.slice(e + t))),
                o
              );
            }),
            (e.prototype.notifyArrayChildUpdate = function (e, t, r) {
              var n = !this.owned && !1,
                o = _t(this),
                i =
                  o || n
                    ? {
                        object: this.proxy,
                        type: "update",
                        index: e,
                        newValue: t,
                        oldValue: r,
                      }
                    : null;
              this.atom.reportChanged(), o && gt(this, i);
            }),
            (e.prototype.notifyArraySplice = function (e, t, r) {
              var n = !this.owned && !1,
                o = _t(this),
                i =
                  o || n
                    ? {
                        object: this.proxy,
                        type: "splice",
                        index: e,
                        removed: r,
                        added: t,
                        removedCount: r.length,
                        addedCount: t.length,
                      }
                    : null;
              this.atom.reportChanged(), o && gt(this, i);
            }),
            e
          );
        })(),
        Et = {
          intercept: function (e) {
            return this[E].intercept(e);
          },
          observe: function (e, t) {
            return void 0 === t && (t = !1), this[E].observe(e, t);
          },
          clear: function () {
            return this.splice(0);
          },
          replace: function (e) {
            var t = this[E];
            return t.spliceWithArray(0, t.values.length, e);
          },
          toJS: function () {
            return this.slice();
          },
          toJSON: function () {
            return this.toJS();
          },
          splice: function (e, t) {
            for (var r = [], n = 2; n < arguments.length; n++)
              r[n - 2] = arguments[n];
            var o = this[E];
            switch (arguments.length) {
              case 0:
                return [];
              case 1:
                return o.spliceWithArray(e);
              case 2:
                return o.spliceWithArray(e, t);
            }
            return o.spliceWithArray(e, t, r);
          },
          spliceWithArray: function (e, t, r) {
            return this[E].spliceWithArray(e, t, r);
          },
          push: function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var r = this[E];
            return r.spliceWithArray(r.values.length, 0, e), r.values.length;
          },
          pop: function () {
            return this.splice(Math.max(this[E].values.length - 1, 0), 1)[0];
          },
          shift: function () {
            return this.splice(0, 1)[0];
          },
          unshift: function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var r = this[E];
            return r.spliceWithArray(0, 0, e), r.values.length;
          },
          reverse: function () {
            var e = this.slice();
            return e.reverse.apply(e, arguments);
          },
          sort: function (e) {
            var t = this.slice();
            return t.sort.apply(t, arguments);
          },
          remove: function (e) {
            var t = this[E],
              r = t.dehanceValues(t.values).indexOf(e);
            return r > -1 && (this.splice(r, 1), !0);
          },
          get: function (e) {
            var t = this[E];
            if (t) {
              if (e < t.values.length)
                return t.atom.reportObserved(), t.dehanceValue(t.values[e]);
              console.warn(
                "[mobx.array] Attempt to read an array index (" +
                  e +
                  ") that is out of bounds (" +
                  t.values.length +
                  "). Please check length first. Out of bound indices will not be tracked by MobX"
              );
            }
          },
          set: function (e, t) {
            var r = this[E],
              n = r.values;
            if (e < n.length) {
              re(r.atom);
              var o = n[e];
              if (ft(r)) {
                var i = ht(r, {
                  type: "update",
                  object: r.proxy,
                  index: e,
                  newValue: t,
                });
                if (!i) return;
                t = i.newValue;
              }
              (t = r.enhancer(t, o)) !== o &&
                ((n[e] = t), r.notifyArrayChildUpdate(e, t, o));
            } else {
              if (e !== n.length)
                throw new Error(
                  "[mobx.array] Index out of bounds, " +
                    e +
                    " is larger than " +
                    n.length
                );
              r.spliceWithArray(e, 0, [t]);
            }
          },
        };
      [
        "concat",
        "flat",
        "includes",
        "indexOf",
        "join",
        "lastIndexOf",
        "slice",
        "toString",
        "toLocaleString",
      ].forEach(function (e) {
        "function" == typeof Array.prototype[e] &&
          (Et[e] = function () {
            var t = this[E];
            t.atom.reportObserved();
            var r = t.dehanceValues(t.values);
            return r[e].apply(r, arguments);
          });
      }),
        [
          "every",
          "filter",
          "find",
          "findIndex",
          "flatMap",
          "forEach",
          "map",
          "some",
        ].forEach(function (e) {
          "function" == typeof Array.prototype[e] &&
            (Et[e] = function (t, r) {
              var n = this,
                o = this[E];
              return (
                o.atom.reportObserved(),
                o.dehanceValues(o.values)[e](function (e, o) {
                  return t.call(r, e, o, n);
                }, r)
              );
            });
        }),
        ["reduce", "reduceRight"].forEach(function (e) {
          Et[e] = function () {
            var t = this,
              r = this[E];
            r.atom.reportObserved();
            var n = arguments[0];
            return (
              (arguments[0] = function (e, o, i) {
                return (o = r.dehanceValue(o)), n(e, o, i, t);
              }),
              r.values[e].apply(r.values, arguments)
            );
          };
        });
      var St,
        Ct = m("ObservableArrayAdministration", bt);
      function It(e) {
        return d(e) && Ct(e[E]);
      }
      var wt,
        kt = {},
        Tt = (function () {
          function e(e, t, r) {
            if (
              (void 0 === t && (t = M),
              void 0 === r && (r = "ObservableMap@" + a()),
              (this.enhancer = t),
              (this.name = r),
              (this[St] = kt),
              (this._keysAtom = I(this.name + ".keys()")),
              (this[Symbol.toStringTag] = "Map"),
              "function" != typeof Map)
            )
              throw new Error(
                "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js"
              );
            (this._data = new Map()), (this._hasMap = new Map()), this.merge(e);
          }
          return (
            (e.prototype._has = function (e) {
              return this._data.has(e);
            }),
            (e.prototype.has = function (e) {
              var t = this;
              if (!Te.trackingDerivation) return this._has(e);
              var r = this._hasMap.get(e);
              if (!r) {
                var n = (r = new ge(
                  this._has(e),
                  L,
                  this.name + "." + g(e) + "?",
                  !1
                ));
                this._hasMap.set(e, n),
                  Ye(n, function () {
                    return t._hasMap.delete(e);
                  });
              }
              return r.get();
            }),
            (e.prototype.set = function (e, t) {
              var r = this._has(e);
              if (ft(this)) {
                var n = ht(this, {
                  type: r ? "update" : "add",
                  object: this,
                  newValue: t,
                  name: e,
                });
                if (!n) return this;
                t = n.newValue;
              }
              return r ? this._updateValue(e, t) : this._addValue(e, t), this;
            }),
            (e.prototype.delete = function (e) {
              var t = this;
              if (
                (re(this._keysAtom), ft(this)) &&
                !(n = ht(this, { type: "delete", object: this, name: e }))
              )
                return !1;
              if (this._has(e)) {
                var r = _t(this),
                  n = r
                    ? {
                        type: "delete",
                        object: this,
                        oldValue: this._data.get(e).value,
                        name: e,
                      }
                    : null;
                return (
                  ut(function () {
                    t._keysAtom.reportChanged(),
                      t._updateHasMapEntry(e, !1),
                      t._data.get(e).setNewValue(void 0),
                      t._data.delete(e);
                  }),
                  r && gt(this, n),
                  !0
                );
              }
              return !1;
            }),
            (e.prototype._updateHasMapEntry = function (e, t) {
              var r = this._hasMap.get(e);
              r && r.setNewValue(t);
            }),
            (e.prototype._updateValue = function (e, t) {
              var r = this._data.get(e);
              if ((t = r.prepareNewValue(t)) !== Te.UNCHANGED) {
                var n = !1,
                  o = _t(this),
                  i = o
                    ? {
                        type: "update",
                        object: this,
                        oldValue: r.value,
                        name: e,
                        newValue: t,
                      }
                    : null;
                n, r.setNewValue(t), o && gt(this, i);
              }
            }),
            (e.prototype._addValue = function (e, t) {
              var r = this;
              re(this._keysAtom),
                ut(function () {
                  var n = new ge(t, r.enhancer, r.name + "." + g(e), !1);
                  r._data.set(e, n),
                    (t = n.value),
                    r._updateHasMapEntry(e, !0),
                    r._keysAtom.reportChanged();
                });
              var n = !1,
                o = _t(this);
              o &&
                gt(
                  this,
                  o ? { type: "add", object: this, name: e, newValue: t } : null
                );
            }),
            (e.prototype.get = function (e) {
              return this.has(e)
                ? this.dehanceValue(this._data.get(e).get())
                : this.dehanceValue(void 0);
            }),
            (e.prototype.dehanceValue = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (e.prototype.keys = function () {
              return this._keysAtom.reportObserved(), this._data.keys();
            }),
            (e.prototype.values = function () {
              var e = this,
                t = this.keys();
              return qt({
                next: function () {
                  var r = t.next(),
                    n = r.done,
                    o = r.value;
                  return { done: n, value: n ? void 0 : e.get(o) };
                },
              });
            }),
            (e.prototype.entries = function () {
              var e = this,
                t = this.keys();
              return qt({
                next: function () {
                  var r = t.next(),
                    n = r.done,
                    o = r.value;
                  return { done: n, value: n ? void 0 : [o, e.get(o)] };
                },
              });
            }),
            (e.prototype[((St = E), Symbol.iterator)] = function () {
              return this.entries();
            }),
            (e.prototype.forEach = function (e, t) {
              var r, n;
              try {
                for (var o = R(this), i = o.next(); !i.done; i = o.next()) {
                  var a = D(i.value, 2),
                    l = a[0],
                    s = a[1];
                  e.call(t, s, l, this);
                }
              } catch (e) {
                r = { error: e };
              } finally {
                try {
                  i && !i.done && (n = o.return) && n.call(o);
                } finally {
                  if (r) throw r.error;
                }
              }
            }),
            (e.prototype.merge = function (e) {
              var t = this;
              return (
                Rt(e) && (e = e.toJS()),
                ut(function () {
                  var r = _e(!0);
                  try {
                    p(e)
                      ? v(e).forEach(function (r) {
                          return t.set(r, e[r]);
                        })
                      : Array.isArray(e)
                      ? e.forEach(function (e) {
                          var r = D(e, 2),
                            n = r[0],
                            o = r[1];
                          return t.set(n, o);
                        })
                      : h(e)
                      ? (e.constructor !== Map &&
                          l(
                            "Cannot initialize from classes that inherit from Map: " +
                              e.constructor.name
                          ),
                        e.forEach(function (e, r) {
                          return t.set(r, e);
                        }))
                      : null != e && l("Cannot initialize map from " + e);
                  } finally {
                    ve(r);
                  }
                }),
                this
              );
            }),
            (e.prototype.clear = function () {
              var e = this;
              ut(function () {
                ie(function () {
                  var t, r;
                  try {
                    for (
                      var n = R(e.keys()), o = n.next();
                      !o.done;
                      o = n.next()
                    ) {
                      var i = o.value;
                      e.delete(i);
                    }
                  } catch (e) {
                    t = { error: e };
                  } finally {
                    try {
                      o && !o.done && (r = n.return) && r.call(n);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                });
              });
            }),
            (e.prototype.replace = function (e) {
              var t = this;
              return (
                ut(function () {
                  var r,
                    n,
                    o,
                    i,
                    a = (function (e) {
                      if (h(e) || Rt(e)) return e;
                      if (Array.isArray(e)) return new Map(e);
                      if (p(e)) {
                        var t = new Map();
                        for (var r in e) t.set(r, e[r]);
                        return t;
                      }
                      return l("Cannot convert to map from '" + e + "'");
                    })(e),
                    s = new Map(),
                    u = !1;
                  try {
                    for (
                      var c = R(t._data.keys()), d = c.next();
                      !d.done;
                      d = c.next()
                    ) {
                      var f = d.value;
                      if (!a.has(f))
                        if (t.delete(f)) u = !0;
                        else {
                          var m = t._data.get(f);
                          s.set(f, m);
                        }
                    }
                  } catch (e) {
                    r = { error: e };
                  } finally {
                    try {
                      d && !d.done && (n = c.return) && n.call(c);
                    } finally {
                      if (r) throw r.error;
                    }
                  }
                  try {
                    for (
                      var _ = R(a.entries()), v = _.next();
                      !v.done;
                      v = _.next()
                    ) {
                      var g = D(v.value, 2),
                        y = ((f = g[0]), (m = g[1]), t._data.has(f));
                      if ((t.set(f, m), t._data.has(f))) {
                        var b = t._data.get(f);
                        s.set(f, b), y || (u = !0);
                      }
                    }
                  } catch (e) {
                    o = { error: e };
                  } finally {
                    try {
                      v && !v.done && (i = _.return) && i.call(_);
                    } finally {
                      if (o) throw o.error;
                    }
                  }
                  if (!u)
                    if (t._data.size !== s.size) t._keysAtom.reportChanged();
                    else
                      for (
                        var E = t._data.keys(),
                          S = s.keys(),
                          C = E.next(),
                          I = S.next();
                        !C.done;

                      ) {
                        if (C.value !== I.value) {
                          t._keysAtom.reportChanged();
                          break;
                        }
                        (C = E.next()), (I = S.next());
                      }
                  t._data = s;
                }),
                this
              );
            }),
            Object.defineProperty(e.prototype, "size", {
              get: function () {
                return this._keysAtom.reportObserved(), this._data.size;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.toPOJO = function () {
              var e,
                t,
                r = {};
              try {
                for (var n = R(this), o = n.next(); !o.done; o = n.next()) {
                  var i = D(o.value, 2),
                    a = i[0],
                    l = i[1];
                  r["symbol" == typeof a ? a : g(a)] = l;
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  o && !o.done && (t = n.return) && t.call(n);
                } finally {
                  if (e) throw e.error;
                }
              }
              return r;
            }),
            (e.prototype.toJS = function () {
              return new Map(this);
            }),
            (e.prototype.toJSON = function () {
              return this.toPOJO();
            }),
            (e.prototype.toString = function () {
              var e = this;
              return (
                this.name +
                "[{ " +
                Array.from(this.keys())
                  .map(function (t) {
                    return g(t) + ": " + e.get(t);
                  })
                  .join(", ") +
                " }]"
              );
            }),
            (e.prototype.observe = function (e, t) {
              return vt(this, e);
            }),
            (e.prototype.intercept = function (e) {
              return mt(this, e);
            }),
            e
          );
        })(),
        Rt = m("ObservableMap", Tt),
        Dt = {},
        Pt = (function () {
          function e(e, t, r) {
            if (
              (void 0 === t && (t = M),
              void 0 === r && (r = "ObservableSet@" + a()),
              (this.name = r),
              (this[wt] = Dt),
              (this._data = new Set()),
              (this._atom = I(this.name)),
              (this[Symbol.toStringTag] = "Set"),
              "function" != typeof Set)
            )
              throw new Error(
                "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js"
              );
            (this.enhancer = function (e, n) {
              return t(e, n, r);
            }),
              e && this.replace(e);
          }
          return (
            (e.prototype.dehanceValue = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (e.prototype.clear = function () {
              var e = this;
              ut(function () {
                ie(function () {
                  var t, r;
                  try {
                    for (
                      var n = R(e._data.values()), o = n.next();
                      !o.done;
                      o = n.next()
                    ) {
                      var i = o.value;
                      e.delete(i);
                    }
                  } catch (e) {
                    t = { error: e };
                  } finally {
                    try {
                      o && !o.done && (r = n.return) && r.call(n);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                });
              });
            }),
            (e.prototype.forEach = function (e, t) {
              var r, n;
              try {
                for (var o = R(this), i = o.next(); !i.done; i = o.next()) {
                  var a = i.value;
                  e.call(t, a, a, this);
                }
              } catch (e) {
                r = { error: e };
              } finally {
                try {
                  i && !i.done && (n = o.return) && n.call(o);
                } finally {
                  if (r) throw r.error;
                }
              }
            }),
            Object.defineProperty(e.prototype, "size", {
              get: function () {
                return this._atom.reportObserved(), this._data.size;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.add = function (e) {
              var t = this;
              if (
                (re(this._atom), ft(this)) &&
                !(o = ht(this, { type: "add", object: this, newValue: e }))
              )
                return this;
              if (!this.has(e)) {
                ut(function () {
                  t._data.add(t.enhancer(e, void 0)), t._atom.reportChanged();
                });
                var r = !1,
                  n = _t(this),
                  o = n ? { type: "add", object: this, newValue: e } : null;
                r, n && gt(this, o);
              }
              return this;
            }),
            (e.prototype.delete = function (e) {
              var t = this;
              if (
                ft(this) &&
                !(n = ht(this, { type: "delete", object: this, oldValue: e }))
              )
                return !1;
              if (this.has(e)) {
                var r = _t(this),
                  n = r ? { type: "delete", object: this, oldValue: e } : null;
                return (
                  ut(function () {
                    t._atom.reportChanged(), t._data.delete(e);
                  }),
                  r && gt(this, n),
                  !0
                );
              }
              return !1;
            }),
            (e.prototype.has = function (e) {
              return (
                this._atom.reportObserved(),
                this._data.has(this.dehanceValue(e))
              );
            }),
            (e.prototype.entries = function () {
              var e = 0,
                t = Array.from(this.keys()),
                r = Array.from(this.values());
              return qt({
                next: function () {
                  var n = e;
                  return (
                    (e += 1),
                    n < r.length
                      ? { value: [t[n], r[n]], done: !1 }
                      : { done: !0 }
                  );
                },
              });
            }),
            (e.prototype.keys = function () {
              return this.values();
            }),
            (e.prototype.values = function () {
              this._atom.reportObserved();
              var e = this,
                t = 0,
                r = Array.from(this._data.values());
              return qt({
                next: function () {
                  return t < r.length
                    ? { value: e.dehanceValue(r[t++]), done: !1 }
                    : { done: !0 };
                },
              });
            }),
            (e.prototype.replace = function (e) {
              var t = this;
              return (
                At(e) && (e = e.toJS()),
                ut(function () {
                  var r = _e(!0);
                  try {
                    Array.isArray(e) || _(e)
                      ? (t.clear(),
                        e.forEach(function (e) {
                          return t.add(e);
                        }))
                      : null != e && l("Cannot initialize set from " + e);
                  } finally {
                    ve(r);
                  }
                }),
                this
              );
            }),
            (e.prototype.observe = function (e, t) {
              return vt(this, e);
            }),
            (e.prototype.intercept = function (e) {
              return mt(this, e);
            }),
            (e.prototype.toJS = function () {
              return new Set(this);
            }),
            (e.prototype.toString = function () {
              return this.name + "[ " + Array.from(this).join(", ") + " ]";
            }),
            (e.prototype[((wt = E), Symbol.iterator)] = function () {
              return this.values();
            }),
            e
          );
        })(),
        At = m("ObservableSet", Pt),
        xt = (function () {
          function e(e, t, r, n) {
            void 0 === t && (t = new Map()),
              (this.target = e),
              (this.values = t),
              (this.name = r),
              (this.defaultEnhancer = n),
              (this.keysAtom = new S(r + ".keys"));
          }
          return (
            (e.prototype.read = function (e) {
              return this.values.get(e).get();
            }),
            (e.prototype.write = function (e, t) {
              var r = this.target,
                n = this.values.get(e);
              if (n instanceof ye) n.set(t);
              else {
                if (ft(this)) {
                  if (
                    !(a = ht(this, {
                      type: "update",
                      object: this.proxy || r,
                      name: e,
                      newValue: t,
                    }))
                  )
                    return;
                  t = a.newValue;
                }
                if ((t = n.prepareNewValue(t)) !== Te.UNCHANGED) {
                  var o = _t(this),
                    i = !1,
                    a = o
                      ? {
                          type: "update",
                          object: this.proxy || r,
                          oldValue: n.value,
                          name: e,
                          newValue: t,
                        }
                      : null;
                  i, n.setNewValue(t), o && gt(this, a);
                }
              }
            }),
            (e.prototype.has = function (e) {
              var t = this.pendingKeys || (this.pendingKeys = new Map()),
                r = t.get(e);
              if (r) return r.get();
              var n = !!this.values.get(e);
              return (
                (r = new ge(n, L, this.name + "." + g(e) + "?", !1)),
                t.set(e, r),
                r.get()
              );
            }),
            (e.prototype.addObservableProp = function (e, t, r) {
              void 0 === r && (r = this.defaultEnhancer);
              var n = this.target;
              if (ft(this)) {
                var o = ht(this, {
                  object: this.proxy || n,
                  name: e,
                  type: "add",
                  newValue: t,
                });
                if (!o) return;
                t = o.newValue;
              }
              var i = new ge(t, r, this.name + "." + g(e), !1);
              this.values.set(e, i),
                (t = i.value),
                Object.defineProperty(
                  n,
                  e,
                  (function (e) {
                    return (
                      Ft[e] ||
                      (Ft[e] = {
                        configurable: !0,
                        enumerable: !0,
                        get: function () {
                          return this[E].read(e);
                        },
                        set: function (t) {
                          this[E].write(e, t);
                        },
                      })
                    );
                  })(e)
                ),
                this.notifyPropertyAddition(e, t);
            }),
            (e.prototype.addComputedProp = function (e, t, r) {
              var n,
                o,
                i,
                a = this.target;
              (r.name = r.name || this.name + "." + g(t)),
                this.values.set(t, new ye(r)),
                (e === a ||
                  ((n = e),
                  (o = t),
                  !(i = Object.getOwnPropertyDescriptor(n, o)) ||
                    (!1 !== i.configurable && !1 !== i.writable))) &&
                  Object.defineProperty(
                    e,
                    t,
                    (function (e) {
                      return (
                        Nt[e] ||
                        (Nt[e] = {
                          configurable: Te.computedConfigurable,
                          enumerable: !1,
                          get: function () {
                            return Vt(this).read(e);
                          },
                          set: function (t) {
                            Vt(this).write(e, t);
                          },
                        })
                      );
                    })(t)
                  );
            }),
            (e.prototype.remove = function (e) {
              if (this.values.has(e)) {
                var t = this.target;
                if (ft(this))
                  if (
                    !(l = ht(this, {
                      object: this.proxy || t,
                      name: e,
                      type: "remove",
                    }))
                  )
                    return;
                try {
                  Ae();
                  var r = _t(this),
                    n = !1,
                    o = this.values.get(e),
                    i = o && o.get();
                  if (
                    (o && o.set(void 0),
                    this.keysAtom.reportChanged(),
                    this.values.delete(e),
                    this.pendingKeys)
                  ) {
                    var a = this.pendingKeys.get(e);
                    a && a.set(!1);
                  }
                  delete this.target[e];
                  var l = r
                    ? {
                        type: "remove",
                        object: this.proxy || t,
                        oldValue: i,
                        name: e,
                      }
                    : null;
                  n, r && gt(this, l);
                } finally {
                  xe();
                }
              }
            }),
            (e.prototype.illegalAccess = function (e, t) {
              console.warn(
                "Property '" +
                  t +
                  "' of '" +
                  e +
                  "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner"
              );
            }),
            (e.prototype.observe = function (e, t) {
              return vt(this, e);
            }),
            (e.prototype.intercept = function (e) {
              return mt(this, e);
            }),
            (e.prototype.notifyPropertyAddition = function (e, t) {
              var r = _t(this),
                n = r
                  ? {
                      type: "add",
                      object: this.proxy || this.target,
                      name: e,
                      newValue: t,
                    }
                  : null;
              if ((r && gt(this, n), this.pendingKeys)) {
                var o = this.pendingKeys.get(e);
                o && o.set(!0);
              }
              this.keysAtom.reportChanged();
            }),
            (e.prototype.getKeys = function () {
              var e, t;
              this.keysAtom.reportObserved();
              var r = [];
              try {
                for (
                  var n = R(this.values), o = n.next();
                  !o.done;
                  o = n.next()
                ) {
                  var i = D(o.value, 2),
                    a = i[0];
                  i[1] instanceof ge && r.push(a);
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  o && !o.done && (t = n.return) && t.call(n);
                } finally {
                  if (e) throw e.error;
                }
              }
              return r;
            }),
            e
          );
        })();
      function Ot(e, t, r) {
        if (
          (void 0 === t && (t = ""),
          void 0 === r && (r = M),
          Object.prototype.hasOwnProperty.call(e, E))
        )
          return e[E];
        p(e) || (t = (e.constructor.name || "ObservableObject") + "@" + a()),
          t || (t = "ObservableObject@" + a());
        var n = new xt(e, new Map(), g(t), r);
        return f(e, E, n), n;
      }
      var Ft = Object.create(null),
        Nt = Object.create(null);
      function Vt(e) {
        var t = e[E];
        return t || (N(e), e[E]);
      }
      var Mt = m("ObservableObjectAdministration", xt);
      function Lt(e) {
        return !!d(e) && (N(e), Mt(e[E]));
      }
      function Bt(e, t) {
        if ("object" == typeof e && null !== e) {
          if (It(e)) return void 0 !== t && l(!1), e[E].atom;
          if (At(e)) return e[E];
          if (Rt(e)) {
            var r = e;
            return void 0 === t
              ? r._keysAtom
              : ((n = r._data.get(t) || r._hasMap.get(t)) || l(!1), n);
          }
          var n;
          if ((N(e), t && !e[E] && e[t], Lt(e)))
            return t ? ((n = e[E].values.get(t)) || l(!1), n) : l(!1);
          if (C(e) || be(e) || Ge(e)) return e;
        } else if ("function" == typeof e && Ge(e[E])) return e[E];
        return l(!1);
      }
      function Ut(e, t) {
        return (
          e || l("Expecting some object"),
          void 0 !== t
            ? Ut(Bt(e, t))
            : C(e) || be(e) || Ge(e) || Rt(e) || At(e)
            ? e
            : (N(e), e[E] ? e[E] : void l(!1))
        );
      }
      var Gt = Object.prototype.toString;
      function Ht(e, t, r) {
        return void 0 === r && (r = -1), Wt(e, t, r);
      }
      function Wt(e, t, r, n, o) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return !1;
        if (e != e) return t != t;
        var i = typeof e;
        if ("function" !== i && "object" !== i && "object" != typeof t)
          return !1;
        var a = Gt.call(e);
        if (a !== Gt.call(t)) return !1;
        switch (a) {
          case "[object RegExp]":
          case "[object String]":
            return "" + e == "" + t;
          case "[object Number]":
            return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
          case "[object Date]":
          case "[object Boolean]":
            return +e == +t;
          case "[object Symbol]":
            return (
              "undefined" != typeof Symbol &&
              Symbol.valueOf.call(e) === Symbol.valueOf.call(t)
            );
          case "[object Map]":
          case "[object Set]":
            r >= 0 && r++;
        }
        (e = zt(e)), (t = zt(t));
        var l = "[object Array]" === a;
        if (!l) {
          if ("object" != typeof e || "object" != typeof t) return !1;
          var s = e.constructor,
            u = t.constructor;
          if (
            s !== u &&
            !(
              "function" == typeof s &&
              s instanceof s &&
              "function" == typeof u &&
              u instanceof u
            ) &&
            "constructor" in e &&
            "constructor" in t
          )
            return !1;
        }
        if (0 === r) return !1;
        r < 0 && (r = -1), (o = o || []);
        for (var c = (n = n || []).length; c--; )
          if (n[c] === e) return o[c] === t;
        if ((n.push(e), o.push(t), l)) {
          if ((c = e.length) !== t.length) return !1;
          for (; c--; ) if (!Wt(e[c], t[c], r - 1, n, o)) return !1;
        } else {
          var d = Object.keys(e),
            p = void 0;
          if (((c = d.length), Object.keys(t).length !== c)) return !1;
          for (; c--; )
            if (!jt(t, (p = d[c])) || !Wt(e[p], t[p], r - 1, n, o)) return !1;
        }
        return n.pop(), o.pop(), !0;
      }
      function zt(e) {
        return It(e)
          ? e.slice()
          : h(e) || Rt(e) || _(e) || At(e)
          ? Array.from(e.entries())
          : e;
      }
      function jt(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function qt(e) {
        return (e[Symbol.iterator] = Kt), e;
      }
      function Kt() {
        return this;
      }
      if ("undefined" == typeof Proxy || "undefined" == typeof Symbol)
        throw new Error(
          "[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore."
        );
      "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
          spy: We,
          extras: {
            getDebugName: function (e, t) {
              return (
                void 0 !== t
                  ? Bt(e, t)
                  : Lt(e) || Rt(e) || At(e)
                  ? Ut(e)
                  : Bt(e)
              ).name;
            },
          },
          $mobx: E,
        });
      var $t = r(294),
        Xt = r.n($t);
      function Qt() {
        return (function (e) {
          const t = {};
          return (
            e.querySelectorAll('link[rel="stylesheet"]').forEach((e) => {
              t[e.href] = e;
            }),
            t
          );
        })(document);
      }
      function Yt(e, t, r) {
        const n = Object.assign({}, t),
          o = e.getElementsByTagName("head")[0],
          i = o.getElementsByTagName("link"),
          a = i.length;
        for (let e = 0; e < a; ++e) {
          const t = i[e];
          n[t.href] ? delete n[t.href] : r && t.parentNode.removeChild(t);
        }
        let l = [];
        for (let t in n) {
          const r = n[t],
            o = e.createElement("link");
          for (let e = 0; e < r.attributes.length; e++) {
            let t = r.attributes.item(e);
            o.setAttribute(t.name, t.value);
          }
          l.push(o);
        }
        return o.prepend(...l), l;
      }
      function Jt(e, t, r) {
        return {
          get() {
            let e = r.value.bind(this);
            return (
              this.hasOwnProperty(t) ||
                Object.defineProperty(this, t, { value: e }),
              e
            );
          },
        };
      }
      function Zt(e, t = 0) {
        switch (e) {
          case "english":
            return 0;
          case "german":
            return 1;
          case "french":
            return 2;
          case "italian":
            return 3;
          case "korean":
          case "koreana":
            return 4;
          case "spanish":
            return 5;
          case "schinese":
            return 6;
          case "tchinese":
            return 7;
          case "russian":
            return 8;
          case "thai":
            return 9;
          case "japanese":
            return 10;
          case "portuguese":
            return 11;
          case "polish":
            return 12;
          case "danish":
            return 13;
          case "dutch":
            return 14;
          case "finnish":
            return 15;
          case "norwegian":
            return 16;
          case "swedish":
            return 17;
          case "hungarian":
            return 18;
          case "czech":
            return 19;
          case "romanian":
            return 20;
          case "turkish":
            return 21;
          case "arabic":
            return 25;
          case "brazilian":
            return 22;
          case "bulgarian":
            return 23;
          case "greek":
            return 24;
          case "ukrainian":
            return 26;
          case "latam":
            return 27;
          case "vietnamese":
            return 28;
          case "sc_schinese":
            return 29;
          default:
            return t;
        }
      }
      var er, tr, rr, nr, or, ir, ar, lr, sr, ur, cr, dr, pr, fr, mr, hr;
      !(function (e) {
        (e[(e.k_EConnectivityTestResult_Unknown = 0)] =
          "k_EConnectivityTestResult_Unknown"),
          (e[(e.k_EConnectivityTestResult_Connected = 1)] =
            "k_EConnectivityTestResult_Connected"),
          (e[(e.k_EConnectivityTestResult_CaptivePortal = 2)] =
            "k_EConnectivityTestResult_CaptivePortal"),
          (e[(e.k_EConnectivityTestResult_TimedOut = 3)] =
            "k_EConnectivityTestResult_TimedOut"),
          (e[(e.k_EConnectivityTestResult_Failed = 4)] =
            "k_EConnectivityTestResult_Failed"),
          (e[(e.k_EConnectivityTestResult_WifiDisabled = 5)] =
            "k_EConnectivityTestResult_WifiDisabled"),
          (e[(e.k_EConnectivityTestResult_NoLAN = 6)] =
            "k_EConnectivityTestResult_NoLAN");
      })(er || (er = {})),
        (function (e) {
          (e[(e.k_ENetFakeLocalSystemState_Normal = 0)] =
            "k_ENetFakeLocalSystemState_Normal"),
            (e[(e.k_ENetFakeLocalSystemState_NoLAN = 1)] =
              "k_ENetFakeLocalSystemState_NoLAN"),
            (e[(e.k_ENetFakeLocalSystemState_CaptivePortal_Redirected = 2)] =
              "k_ENetFakeLocalSystemState_CaptivePortal_Redirected"),
            (e[(e.k_ENetFakeLocalSystemState_CaptivePortal_InPlace = 3)] =
              "k_ENetFakeLocalSystemState_CaptivePortal_InPlace"),
            (e[(e.k_ENetFakeLocalSystemState_NoInternet = 4)] =
              "k_ENetFakeLocalSystemState_NoInternet"),
            (e[(e.k_ENetFakeLocalSystemState_NoSteam = 5)] =
              "k_ENetFakeLocalSystemState_NoSteam");
        })(tr || (tr = {})),
        (function (e) {
          (e[(e.k_ESuspendResumeProgressState_Invalid = 0)] =
            "k_ESuspendResumeProgressState_Invalid"),
            (e[(e.k_ESuspendResumeProgressState_Complete = 1)] =
              "k_ESuspendResumeProgressState_Complete"),
            (e[(e.k_ESuspendResumeProgressState_CloudSync = 2)] =
              "k_ESuspendResumeProgressState_CloudSync"),
            (e[(e.k_ESuspendResumeProgressState_LoggingIn = 3)] =
              "k_ESuspendResumeProgressState_LoggingIn"),
            (e[(e.k_ESuspendResumeProgressState_WaitingForApp = 4)] =
              "k_ESuspendResumeProgressState_WaitingForApp"),
            (e[(e.k_ESuspendResumeProgressState_Working = 5)] =
              "k_ESuspendResumeProgressState_Working");
        })(rr || (rr = {})),
        (function (e) {
          (e[(e.k_EFloatingGamepadTextInputModeModeSingleLine = 0)] =
            "k_EFloatingGamepadTextInputModeModeSingleLine"),
            (e[(e.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
              "k_EFloatingGamepadTextInputModeModeMultipleLines"),
            (e[(e.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
              "k_EFloatingGamepadTextInputModeModeEmail"),
            (e[(e.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
              "k_EFloatingGamepadTextInputModeModeNumeric");
        })(nr || (nr = {})),
        (function (e) {
          (e[(e.k_EAppUpdateContentType_Content = 0)] =
            "k_EAppUpdateContentType_Content"),
            (e[(e.k_EAppUpdateContentType_Workshop = 1)] =
              "k_EAppUpdateContentType_Workshop"),
            (e[(e.k_EAppUpdateContentType_Shader = 2)] =
              "k_EAppUpdateContentType_Shader"),
            (e[(e.k_EAppUpdateContentType_Max = 3)] =
              "k_EAppUpdateContentType_Max");
        })(or || (or = {})),
        (function (e) {
          (e[(e.k_EOverlayToStoreFlag_None = 0)] =
            "k_EOverlayToStoreFlag_None"),
            (e[(e.k_EOverlayToStoreFlag_AddToCart = 1)] =
              "k_EOverlayToStoreFlag_AddToCart"),
            (e[(e.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
              "k_EOverlayToStoreFlag_AddToCartAndShow");
        })(ir || (ir = {})),
        (function (e) {
          (e[(e.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
            "k_EActivateGameOverlayToWebPageMode_Default"),
            (e[(e.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
              "k_EActivateGameOverlayToWebPageMode_Modal");
        })(ar || (ar = {})),
        (function (e) {
          (e[(e.k_EGamingDeviceType_Unknown = 0)] =
            "k_EGamingDeviceType_Unknown"),
            (e[(e.k_EGamingDeviceType_StandardPC = 1)] =
              "k_EGamingDeviceType_StandardPC"),
            (e[(e.k_EGamingDeviceType_Console = 256)] =
              "k_EGamingDeviceType_Console"),
            (e[(e.k_EGamingDeviceType_PS3 = 272)] = "k_EGamingDeviceType_PS3"),
            (e[(e.k_EGamingDeviceType_Steambox = 288)] =
              "k_EGamingDeviceType_Steambox"),
            (e[(e.k_EGamingDeviceType_Handheld = 512)] =
              "k_EGamingDeviceType_Handheld"),
            (e[(e.k_EGamingDeviceType_Phone = 528)] =
              "k_EGamingDeviceType_Phone"),
            (e[(e.k_EGamingDeviceType_SteamDeck = 544)] =
              "k_EGamingDeviceType_SteamDeck");
        })(lr || (lr = {})),
        (function (e) {
          (e[(e.k_ELoginUIStyleOld = 0)] = "k_ELoginUIStyleOld"),
            (e[(e.k_ELoginUIStyleNewWithoutQRCode = 1)] =
              "k_ELoginUIStyleNewWithoutQRCode"),
            (e[(e.k_ELoginUIStyleNew = 2)] = "k_ELoginUIStyleNew");
        })(sr || (sr = {})),
        (function (e) {
          (e[(e.k_ECommunityProfileItemProperty_ImageSmall = 0)] =
            "k_ECommunityProfileItemProperty_ImageSmall"),
            (e[(e.k_ECommunityProfileItemProperty_ImageLarge = 1)] =
              "k_ECommunityProfileItemProperty_ImageLarge"),
            (e[(e.k_ECommunityProfileItemProperty_InternalName = 2)] =
              "k_ECommunityProfileItemProperty_InternalName"),
            (e[(e.k_ECommunityProfileItemProperty_Title = 3)] =
              "k_ECommunityProfileItemProperty_Title"),
            (e[(e.k_ECommunityProfileItemProperty_Description = 4)] =
              "k_ECommunityProfileItemProperty_Description"),
            (e[(e.k_ECommunityProfileItemProperty_AppID = 5)] =
              "k_ECommunityProfileItemProperty_AppID"),
            (e[(e.k_ECommunityProfileItemProperty_TypeID = 6)] =
              "k_ECommunityProfileItemProperty_TypeID"),
            (e[(e.k_ECommunityProfileItemProperty_Class = 7)] =
              "k_ECommunityProfileItemProperty_Class"),
            (e[(e.k_ECommunityProfileItemProperty_MovieWebM = 8)] =
              "k_ECommunityProfileItemProperty_MovieWebM"),
            (e[(e.k_ECommunityProfileItemProperty_MovieMP4 = 9)] =
              "k_ECommunityProfileItemProperty_MovieMP4"),
            (e[(e.k_ECommunityProfileItemProperty_MovieWebMSmall = 10)] =
              "k_ECommunityProfileItemProperty_MovieWebMSmall"),
            (e[(e.k_ECommunityProfileItemProperty_MovieMP4Small = 11)] =
              "k_ECommunityProfileItemProperty_MovieMP4Small");
        })(ur || (ur = {})),
        (function (e) {
          (e[(e.k_ERaiseGameWindowResult_NotRunning = 1)] =
            "k_ERaiseGameWindowResult_NotRunning"),
            (e[(e.k_ERaiseGameWindowResult_Success = 2)] =
              "k_ERaiseGameWindowResult_Success"),
            (e[(e.k_ERaiseGameWindowResult_Failure = 3)] =
              "k_ERaiseGameWindowResult_Failure");
        })(cr || (cr = {})),
        (function (e) {
          (e[(e.k_EPositionInvalid = -1)] = "k_EPositionInvalid"),
            (e[(e.k_EPositionTopLeft = 0)] = "k_EPositionTopLeft"),
            (e[(e.k_EPositionTopRight = 1)] = "k_EPositionTopRight"),
            (e[(e.k_EPositionBottomLeft = 2)] = "k_EPositionBottomLeft"),
            (e[(e.k_EPositionBottomRight = 3)] = "k_EPositionBottomRight");
        })(dr || (dr = {})),
        (function (e) {
          (e[(e.k_EAppReleaseState_Unknown = 0)] =
            "k_EAppReleaseState_Unknown"),
            (e[(e.k_EAppReleaseState_Unavailable = 1)] =
              "k_EAppReleaseState_Unavailable"),
            (e[(e.k_EAppReleaseState_Prerelease = 2)] =
              "k_EAppReleaseState_Prerelease"),
            (e[(e.k_EAppReleaseState_PreloadOnly = 3)] =
              "k_EAppReleaseState_PreloadOnly"),
            (e[(e.k_EAppReleaseState_Released = 4)] =
              "k_EAppReleaseState_Released"),
            (e[(e.k_EAppReleaseState_Disabled = 5)] =
              "k_EAppReleaseState_Disabled");
        })(pr || (pr = {})),
        (function (e) {
          (e[(e.k_EGameIDTypeApp = 0)] = "k_EGameIDTypeApp"),
            (e[(e.k_EGameIDTypeGameMod = 1)] = "k_EGameIDTypeGameMod"),
            (e[(e.k_EGameIDTypeShortcut = 2)] = "k_EGameIDTypeShortcut"),
            (e[(e.k_EGameIDTypeP2P = 3)] = "k_EGameIDTypeP2P");
        })(fr || (fr = {})),
        (function (e) {
          (e[(e.k_EInstallMgrStateNone = 0)] = "k_EInstallMgrStateNone"),
            (e[(e.k_EInstallMgrStateSetup = 1)] = "k_EInstallMgrStateSetup"),
            (e[(e.k_EInstallMgrStateWaitLicense = 2)] =
              "k_EInstallMgrStateWaitLicense"),
            (e[(e.k_EInstallMgrStateFreeLicense = 3)] =
              "k_EInstallMgrStateFreeLicense"),
            (e[(e.k_EInstallMgrStateShowCDKey = 4)] =
              "k_EInstallMgrStateShowCDKey"),
            (e[(e.k_EInstallMgrStateWaitAppInfo = 5)] =
              "k_EInstallMgrStateWaitAppInfo"),
            (e[(e.k_EInstallMgrStateShowPassword = 6)] =
              "k_EInstallMgrStateShowPassword"),
            (e[(e.k_EInstallMgrStateShowConfig = 7)] =
              "k_EInstallMgrStateShowConfig"),
            (e[(e.k_EInstallMgrStateShowEULAs = 8)] =
              "k_EInstallMgrStateShowEULAs"),
            (e[(e.k_EInstallMgrStateCreateApps = 9)] =
              "k_EInstallMgrStateCreateApps"),
            (e[(e.k_EInstallMgrStateReadFromMedia = 10)] =
              "k_EInstallMgrStateReadFromMedia"),
            (e[(e.k_EInstallMgrStateShowChangeMedia = 11)] =
              "k_EInstallMgrStateShowChangeMedia"),
            (e[(e.k_EInstallMgrStateWaitLegacyCDKeys = 12)] =
              "k_EInstallMgrStateWaitLegacyCDKeys"),
            (e[(e.k_EInstallMgrStateShowSignup = 13)] =
              "k_EInstallMgrStateShowSignup"),
            (e[(e.k_EInstallMgrStateComplete = 14)] =
              "k_EInstallMgrStateComplete"),
            (e[(e.k_EInstallMgrStateFailed = 15)] = "k_EInstallMgrStateFailed"),
            (e[(e.k_EInstallMgrStateCanceled = 16)] =
              "k_EInstallMgrStateCanceled");
        })(mr || (mr = {})),
        (function (e) {
          (e[(e.k_EWindowBringToFrontInvalid = 0)] =
            "k_EWindowBringToFrontInvalid"),
            (e[(e.k_EWindowBringToFrontAndForceOS = 1)] =
              "k_EWindowBringToFrontAndForceOS"),
            (e[(e.k_EWindowBringToFrontWithoutForcingOS = 2)] =
              "k_EWindowBringToFrontWithoutForcingOS");
        })(hr || (hr = {}));
      var _r, vr, gr;
      !(function (e) {
        (e[(e.Input = 0)] = "Input"), (e[(e.Output = 1)] = "Output");
      })(_r || (_r = {})),
        (function (e) {
          (e[(e.Input = 0)] = "Input"),
            (e[(e.AllOutput = 1)] = "AllOutput"),
            (e[(e.Left = 2)] = "Left"),
            (e[(e.Right = 3)] = "Right"),
            (e[(e.Sub = 4)] = "Sub"),
            (e[(e.BackLeft = 5)] = "BackLeft"),
            (e[(e.BackRight = 6)] = "BackRight");
        })(vr || (vr = {}));
      !(function (e) {
        (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
          (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
          (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
      })(gr || (gr = {}));
      var yr;
      !(function (e) {
        (e[(e.k_BluetoothDeviceType_Invalid = 0)] =
          "k_BluetoothDeviceType_Invalid"),
          (e[(e.k_BluetoothDeviceType_Unknown = 1)] =
            "k_BluetoothDeviceType_Unknown"),
          (e[(e.k_BluetoothDeviceType_Phone = 2)] =
            "k_BluetoothDeviceType_Phone"),
          (e[(e.k_BluetoothDeviceType_Computer = 3)] =
            "k_BluetoothDeviceType_Computer"),
          (e[(e.k_BluetoothDeviceType_Headset = 4)] =
            "k_BluetoothDeviceType_Headset"),
          (e[(e.k_BluetoothDeviceType_Headphones = 5)] =
            "k_BluetoothDeviceType_Headphones"),
          (e[(e.k_BluetoothDeviceType_Speakers = 6)] =
            "k_BluetoothDeviceType_Speakers"),
          (e[(e.k_BluetoothDeviceType_OtherAudio = 7)] =
            "k_BluetoothDeviceType_OtherAudio"),
          (e[(e.k_BluetoothDeviceType_Mouse = 8)] =
            "k_BluetoothDeviceType_Mouse"),
          (e[(e.k_BluetoothDeviceType_Joystick = 9)] =
            "k_BluetoothDeviceType_Joystick"),
          (e[(e.k_BluetoothDeviceType_Gamepad = 10)] =
            "k_BluetoothDeviceType_Gamepad"),
          (e[(e.k_BluetoothDeviceType_Keyboard = 11)] =
            "k_BluetoothDeviceType_Keyboard");
      })(yr || (yr = {}));
      var br, Er, Sr, Cr;
      !(function (e) {
        (e[(e.EBrowserType_OffScreen = 0)] = "EBrowserType_OffScreen"),
          (e[(e.EBrowserType_OpenVROverlay = 1)] =
            "EBrowserType_OpenVROverlay"),
          (e[(e.EBrowserType_OpenVROverlay_Dashboard = 2)] =
            "EBrowserType_OpenVROverlay_Dashboard"),
          (e[(e.EBrowserType_DirectHWND = 3)] = "EBrowserType_DirectHWND"),
          (e[(e.EBrowserType_DirectHWND_Borderless = 4)] =
            "EBrowserType_DirectHWND_Borderless"),
          (e[(e.EBrowserType_DirectHWND_Hidden = 5)] =
            "EBrowserType_DirectHWND_Hidden"),
          (e[(e.EBrowserType_ChildHWNDNative = 6)] =
            "EBrowserType_ChildHWNDNative"),
          (e[(e.EBrowserType_Transparent_Toplevel = 7)] =
            "EBrowserType_Transparent_Toplevel"),
          (e[(e.EBrowserType_OffScreen_SharedTexture = 8)] =
            "EBrowserType_OffScreen_SharedTexture"),
          (e[(e.EBrowserType_OffScreen_GameOverlay = 9)] =
            "EBrowserType_OffScreen_GameOverlay"),
          (e[(e.EBrowserType_OffScreen_GameOverlay_SharedTexture = 10)] =
            "EBrowserType_OffScreen_GameOverlay_SharedTexture"),
          (e[(e.EBrowserType_Offscreen_FriendsUI = 11)] =
            "EBrowserType_Offscreen_FriendsUI"),
          (e[(e.EBrowserType_Offscreen_SteamUI = 12)] =
            "EBrowserType_Offscreen_SteamUI"),
          (e[(e.EBrowserType_OpenVROverlay_Subview = 13)] =
            "EBrowserType_OpenVROverlay_Subview");
      })(br || (br = {})),
        (function (e) {
          (e[(e.SystemKey0 = 0)] = "SystemKey0"),
            (e[(e.SystemKey1 = 1)] = "SystemKey1");
        })(Er || (Er = {})),
        (function (e) {
          (e[(e.Hidden = 0)] = "Hidden"),
            (e[(e.Notification = 1)] = "Notification"),
            (e[(e.Overlay = 2)] = "Overlay"),
            (e[(e.Opaque = 3)] = "Opaque"),
            (e[(e.OverlayKeyboard = 4)] = "OverlayKeyboard");
        })(Sr || (Sr = {})),
        (function (e) {
          (e[(e.MainGamepadUI = 0)] = "MainGamepadUI"),
            (e[(e.OverlayGamepadUI = 1)] = "OverlayGamepadUI"),
            (e[(e.Keyboard = 2)] = "Keyboard"),
            (e[(e.ControllerConfigurator = 3)] = "ControllerConfigurator"),
            (e[(e.VR = 4)] = "VR"),
            (e[(e.SteamLibrary = 5)] = "SteamLibrary"),
            (e[(e.MainDesktopUI = 6)] = "MainDesktopUI"),
            (e[(e.DesktopLogin = 7)] = "DesktopLogin"),
            (e[(e.OverlayDesktopUI = 8)] = "OverlayDesktopUI"),
            (e[(e.SteamChinaReviewLauncher = 9)] = "SteamChinaReviewLauncher");
        })(Cr || (Cr = {}));
      var Ir, wr, kr, Tr, Rr;
      !(function (e) {
        (e[(e.k_EPending = 0)] = "k_EPending"),
          (e[(e.k_EAccepted = 1)] = "k_EAccepted"),
          (e[(e.k_ERejected = 2)] = "k_ERejected");
      })(Ir || (Ir = {})),
        (function (e) {
          (e[(e.k_EControllerBindingType_None = 0)] =
            "k_EControllerBindingType_None"),
            (e[(e.k_EControllerBindingType_Key = 1)] =
              "k_EControllerBindingType_Key"),
            (e[(e.k_EControllerBindingType_MouseButton = 2)] =
              "k_EControllerBindingType_MouseButton"),
            (e[(e.k_EControllerBindingType_Gamepad = 3)] =
              "k_EControllerBindingType_Gamepad"),
            (e[(e.k_EControllerBindingType_Mousewheel = 4)] =
              "k_EControllerBindingType_Mousewheel"),
            (e[(e.k_EControllerBindingType_Modeshift = 5)] =
              "k_EControllerBindingType_Modeshift"),
            (e[(e.k_EControllerBindingType_GameAction = 6)] =
              "k_EControllerBindingType_GameAction"),
            (e[(e.k_EControllerBindingType_ControllerAction = 7)] =
              "k_EControllerBindingType_ControllerAction");
        })(wr || (wr = {})),
        (function (e) {
          (e[(e.GAMEPAD_BUTTON_A = 0)] = "GAMEPAD_BUTTON_A"),
            (e[(e.GAMEPAD_BUTTON_B = 1)] = "GAMEPAD_BUTTON_B"),
            (e[(e.GAMEPAD_BUTTON_X = 2)] = "GAMEPAD_BUTTON_X"),
            (e[(e.GAMEPAD_BUTTON_Y = 3)] = "GAMEPAD_BUTTON_Y"),
            (e[(e.GAMEPAD_BUTTON_DPAD_UP = 4)] = "GAMEPAD_BUTTON_DPAD_UP"),
            (e[(e.GAMEPAD_BUTTON_DPAD_RIGHT = 5)] =
              "GAMEPAD_BUTTON_DPAD_RIGHT"),
            (e[(e.GAMEPAD_BUTTON_DPAD_DOWN = 6)] = "GAMEPAD_BUTTON_DPAD_DOWN"),
            (e[(e.GAMEPAD_BUTTON_DPAD_LEFT = 7)] = "GAMEPAD_BUTTON_DPAD_LEFT"),
            (e[(e.GAMEPAD_BUTTON_MENU = 8)] = "GAMEPAD_BUTTON_MENU"),
            (e[(e.GAMEPAD_BUTTON_VIEW = 9)] = "GAMEPAD_BUTTON_VIEW"),
            (e[(e.GAMEPAD_LEFTPAD_UP = 10)] = "GAMEPAD_LEFTPAD_UP"),
            (e[(e.GAMEPAD_LEFTPAD_DOWN = 11)] = "GAMEPAD_LEFTPAD_DOWN"),
            (e[(e.GAMEPAD_LEFTPAD_LEFT = 12)] = "GAMEPAD_LEFTPAD_LEFT"),
            (e[(e.GAMEPAD_LEFTPAD_RIGHT = 13)] = "GAMEPAD_LEFTPAD_RIGHT"),
            (e[(e.GAMEPAD_LEFTPAD_ANALOG = 14)] = "GAMEPAD_LEFTPAD_ANALOG"),
            (e[(e.GAMEPAD_RIGHTPAD_UP = 15)] = "GAMEPAD_RIGHTPAD_UP"),
            (e[(e.GAMEPAD_RIGHTPAD_DOWN = 16)] = "GAMEPAD_RIGHTPAD_DOWN"),
            (e[(e.GAMEPAD_RIGHTPAD_LEFT = 17)] = "GAMEPAD_RIGHTPAD_LEFT"),
            (e[(e.GAMEPAD_RIGHTPAD_RIGHT = 18)] = "GAMEPAD_RIGHTPAD_RIGHT"),
            (e[(e.GAMEPAD_RIGHTPAD_ANALOG = 19)] = "GAMEPAD_RIGHTPAD_ANALOG"),
            (e[(e.GAMEPAD_LEFTSTICK_UP = 20)] = "GAMEPAD_LEFTSTICK_UP"),
            (e[(e.GAMEPAD_LEFTSTICK_DOWN = 21)] = "GAMEPAD_LEFTSTICK_DOWN"),
            (e[(e.GAMEPAD_LEFTSTICK_LEFT = 22)] = "GAMEPAD_LEFTSTICK_LEFT"),
            (e[(e.GAMEPAD_LEFTSTICK_RIGHT = 23)] = "GAMEPAD_LEFTSTICK_RIGHT"),
            (e[(e.GAMEPAD_LEFTSTICK_ANALOG = 24)] = "GAMEPAD_LEFTSTICK_ANALOG"),
            (e[(e.GAMEPAD_LEFTSTICK_CLICK = 25)] = "GAMEPAD_LEFTSTICK_CLICK"),
            (e[(e.GAMEPAD_LTRIGGER_ANALOG = 26)] = "GAMEPAD_LTRIGGER_ANALOG"),
            (e[(e.GAMEPAD_RTRIGGER_ANALOG = 27)] = "GAMEPAD_RTRIGGER_ANALOG"),
            (e[(e.GAMEPAD_BUTTON_LTRIGGER = 28)] = "GAMEPAD_BUTTON_LTRIGGER"),
            (e[(e.GAMEPAD_BUTTON_RTRIGGER = 29)] = "GAMEPAD_BUTTON_RTRIGGER"),
            (e[(e.GAMEPAD_BUTTON_LSHOULDER = 30)] = "GAMEPAD_BUTTON_LSHOULDER"),
            (e[(e.GAMEPAD_BUTTON_RSHOULDER = 31)] = "GAMEPAD_BUTTON_RSHOULDER"),
            (e[(e.GAMEPAD_BUTTON_LBACK = 32)] = "GAMEPAD_BUTTON_LBACK"),
            (e[(e.GAMEPAD_BUTTON_RBACK = 33)] = "GAMEPAD_BUTTON_RBACK"),
            (e[(e.GAMEPAD_BUTTON_GUIDE = 34)] = "GAMEPAD_BUTTON_GUIDE"),
            (e[(e.GAMEPAD_BUTTON_SELECT = 35)] = "GAMEPAD_BUTTON_SELECT"),
            (e[(e.GAMEPAD_BUTTON_START = 36)] = "GAMEPAD_BUTTON_START"),
            (e[(e.GAMEPAD_BUTTON_LPAD_CLICKED = 37)] =
              "GAMEPAD_BUTTON_LPAD_CLICKED"),
            (e[(e.GAMEPAD_BUTTON_LPAD_TOUCH = 38)] =
              "GAMEPAD_BUTTON_LPAD_TOUCH"),
            (e[(e.GAMEPAD_BUTTON_RPAD_CLICKED = 39)] =
              "GAMEPAD_BUTTON_RPAD_CLICKED"),
            (e[(e.GAMEPAD_BUTTON_RPAD_TOUCH = 40)] =
              "GAMEPAD_BUTTON_RPAD_TOUCH"),
            (e[(e.GAMEPAD_RIGHTSTICK_CLICK = 41)] = "GAMEPAD_RIGHTSTICK_CLICK"),
            (e[(e.GAMEPAD_RIGHTSTICK_TOUCH = 42)] = "GAMEPAD_RIGHTSTICK_TOUCH"),
            (e[(e.GAMEPAD_LEFTSTICK_TOUCH = 43)] = "GAMEPAD_LEFTSTICK_TOUCH"),
            (e[(e.GAMEPAD_BUTTON_LBACK_UPPER = 44)] =
              "GAMEPAD_BUTTON_LBACK_UPPER"),
            (e[(e.GAMEPAD_BUTTON_RBACK_UPPER = 45)] =
              "GAMEPAD_BUTTON_RBACK_UPPER"),
            (e[(e.GAMEPAD_BUTTON_LAST = 46)] = "GAMEPAD_BUTTON_LAST"),
            (e[(e.GAMEPAD_ANALOG_SCROLL = 47)] = "GAMEPAD_ANALOG_SCROLL"),
            (e[(e.GAMEPAD_ANALOG_LEFT_KEYBOARD_CURSOR = 48)] =
              "GAMEPAD_ANALOG_LEFT_KEYBOARD_CURSOR"),
            (e[(e.GAMEPAD_ANALOG_RIGHT_KEYBOARD_CURSOR = 49)] =
              "GAMEPAD_ANALOG_RIGHT_KEYBOARD_CURSOR"),
            (e[(e.GAMEPAD_ANALOG_LAST = 50)] = "GAMEPAD_ANALOG_LAST");
        })(kr || (kr = {}));
      !(function (e) {
        (e[(e.k_ERemoteClientLaunchOK = 1)] = "k_ERemoteClientLaunchOK"),
          (e[(e.k_ERemoteClientLaunchFail = 2)] = "k_ERemoteClientLaunchFail"),
          (e[(e.k_ERemoteClientLaunchRequiresUI = 3)] =
            "k_ERemoteClientLaunchRequiresUI"),
          (e[(e.k_ERemoteClientLaunchRequiresLaunchOption = 4)] =
            "k_ERemoteClientLaunchRequiresLaunchOption"),
          (e[(e.k_ERemoteClientLaunchRequiresEULA = 5)] =
            "k_ERemoteClientLaunchRequiresEULA"),
          (e[(e.k_ERemoteClientLaunchTimeout = 6)] =
            "k_ERemoteClientLaunchTimeout"),
          (e[(e.k_ERemoteClientLaunchStreamTimeout = 7)] =
            "k_ERemoteClientLaunchStreamTimeout"),
          (e[(e.k_ERemoteClientLaunchStreamClientFail = 8)] =
            "k_ERemoteClientLaunchStreamClientFail"),
          (e[(e.k_ERemoteClientLaunchOtherGameRunning = 9)] =
            "k_ERemoteClientLaunchOtherGameRunning"),
          (e[(e.k_ERemoteClientLaunchDownloadStarted = 10)] =
            "k_ERemoteClientLaunchDownloadStarted"),
          (e[(e.k_ERemoteClientLaunchDownloadNoSpace = 11)] =
            "k_ERemoteClientLaunchDownloadNoSpace"),
          (e[(e.k_ERemoteClientLaunchDownloadFiltered = 12)] =
            "k_ERemoteClientLaunchDownloadFiltered"),
          (e[(e.k_ERemoteClientLaunchDownloadRequiresUI = 13)] =
            "k_ERemoteClientLaunchDownloadRequiresUI"),
          (e[(e.k_ERemoteClientLaunchAccessDenied = 14)] =
            "k_ERemoteClientLaunchAccessDenied"),
          (e[(e.k_ERemoteClientLaunchNetworkError = 15)] =
            "k_ERemoteClientLaunchNetworkError"),
          (e[(e.k_ERemoteClientLaunchProgress = 16)] =
            "k_ERemoteClientLaunchProgress"),
          (e[(e.k_ERemoteClientLaunchParentalUnlockFailed = 17)] =
            "k_ERemoteClientLaunchParentalUnlockFailed"),
          (e[(e.k_ERemoteClientLaunchScreenLocked = 18)] =
            "k_ERemoteClientLaunchScreenLocked"),
          (e[(e.k_ERemoteClientLaunchUnsupported = 19)] =
            "k_ERemoteClientLaunchUnsupported"),
          (e[(e.k_ERemoteClientLaunchDisabledLocal = 20)] =
            "k_ERemoteClientLaunchDisabledLocal"),
          (e[(e.k_ERemoteClientLaunchDisabledRemote = 21)] =
            "k_ERemoteClientLaunchDisabledRemote"),
          (e[(e.k_ERemoteClientLaunchBroadcasting = 22)] =
            "k_ERemoteClientLaunchBroadcasting"),
          (e[(e.k_ERemoteClientLaunchBusy = 23)] = "k_ERemoteClientLaunchBusy"),
          (e[(e.k_ERemoteClientLaunchDriversNotInstalled = 24)] =
            "k_ERemoteClientLaunchDriversNotInstalled"),
          (e[(e.k_ERemoteClientLaunchTransportUnavailable = 25)] =
            "k_ERemoteClientLaunchTransportUnavailable"),
          (e[(e.k_ERemoteClientLaunchCanceled = 26)] =
            "k_ERemoteClientLaunchCanceled"),
          (e[(e.k_ERemoteClientLaunchInvisible = 27)] =
            "k_ERemoteClientLaunchInvisible"),
          (e[(e.k_ERemoteClientLaunchRestrictedCountry = 28)] =
            "k_ERemoteClientLaunchRestrictedCountry");
      })(Tr || (Tr = {}));
      !(function (e) {
        (e[(e.AudioPlayback_Undefined = 0)] = "AudioPlayback_Undefined"),
          (e[(e.AudioPlayback_Playing = 1)] = "AudioPlayback_Playing"),
          (e[(e.AudioPlayback_Paused = 2)] = "AudioPlayback_Paused"),
          (e[(e.AudioPlayback_Idle = 3)] = "AudioPlayback_Idle");
      })(Rr || (Rr = {}));
      var Dr, Pr, Ar, xr, Or, Fr;
      !(function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.Wired = 1)] = "Wired"),
          (e[(e.Wireless = 2)] = "Wireless"),
          (e[(e.Virtual = 3)] = "Virtual");
      })(Dr || (Dr = {})),
        (function (e) {
          (e[(e.NotPresent = 0)] = "NotPresent"),
            (e[(e.Failed = 1)] = "Failed"),
            (e[(e.Disconnected = 2)] = "Disconnected"),
            (e[(e.Disconnecting = 3)] = "Disconnecting"),
            (e[(e.Connecting = 4)] = "Connecting"),
            (e[(e.Connected = 5)] = "Connected"),
            (e[(e.Retrying = 6)] = "Retrying");
        })(Pr || (Pr = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Weak = 1)] = "Weak"),
            (e[(e.Ok = 2)] = "Ok"),
            (e[(e.Good = 3)] = "Good"),
            (e[(e.Excellent = 4)] = "Excellent");
        })(Ar || (Ar = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.StaticWep = 1)] = "StaticWep"),
            (e[(e.DynamicWep = 2)] = "DynamicWep"),
            (e[(e.Wpa = 4)] = "Wpa"),
            (e[(e.WpaEnterprise = 8)] = "WpaEnterprise"),
            (e[(e.Wpa2 = 16)] = "Wpa2"),
            (e[(e.Wpa2Enterprise = 32)] = "Wpa2Enterprise"),
            (e[(e.Unsupported = 32768)] = "Unsupported");
        })(xr || (xr = {})),
        (function (e) {
          (e[(e.k_EHTTPProxyMode_Invalid = 0)] = "k_EHTTPProxyMode_Invalid"),
            (e[(e.k_EHTTPProxyMode_None = 1)] = "k_EHTTPProxyMode_None"),
            (e[(e.k_EHTTPProxyMode_Manual = 2)] = "k_EHTTPProxyMode_Manual"),
            (e[(e.k_EHTTPProxyMode_Automatic = 3)] =
              "k_EHTTPProxyMode_Automatic");
        })(Or || (Or = {}));
      !(function (e) {
        (e[(e.k_EClientUINotificationGroupChatMessage = 1)] =
          "k_EClientUINotificationGroupChatMessage"),
          (e[(e.k_EClientUINotificationFriendChatMessage = 2)] =
            "k_EClientUINotificationFriendChatMessage"),
          (e[(e.k_EClientUINotificationFriendPersonaState = 3)] =
            "k_EClientUINotificationFriendPersonaState");
      })(Fr || (Fr = {}));
      var Nr, Vr, Mr, Lr, Br, Ur, Gr;
      function Hr() {
        return !!window.document;
      }
      !(function (e) {
        (e[(e.k_EComputerActiveStateInvalid = 0)] =
          "k_EComputerActiveStateInvalid"),
          (e[(e.k_EComputerActiveStateActive = 1)] =
            "k_EComputerActiveStateActive"),
          (e[(e.k_EComputerActiveStateIdle = 2)] =
            "k_EComputerActiveStateIdle");
      })(Nr || (Nr = {})),
        (function (e) {
          (e[(e.k_EClientUsedInputTypeKeyboard = 0)] =
            "k_EClientUsedInputTypeKeyboard"),
            (e[(e.k_EClientUsedInputTypeMouse = 1)] =
              "k_EClientUsedInputTypeMouse"),
            (e[(e.k_EClientUsedInputTypeController = 2)] =
              "k_EClientUsedInputTypeController"),
            (e[(e.k_EClientUsedInputTypeMax = 3)] =
              "k_EClientUsedInputTypeMax");
        })(Vr || (Vr = {})),
        (function (e) {
          (e[(e.k_EVRError_None = 0)] = "k_EVRError_None"),
            (e[(e.k_EVRError_VRSkipParam = 1)] = "k_EVRError_VRSkipParam"),
            (e[(e.k_EVRError_ComponentNotInstalled = 2)] =
              "k_EVRError_ComponentNotInstalled"),
            (e[(e.k_EVRError_ComponentBusy = 3)] = "k_EVRError_ComponentBusy"),
            (e[(e.k_EVRError_CrashProtection = 4)] =
              "k_EVRError_CrashProtection"),
            (e[(e.k_EVRError_HmdError = 5)] = "k_EVRError_HmdError"),
            (e[(e.k_EVRError_PathChanged = 6)] = "k_EVRError_PathChanged");
        })(Mr || (Mr = {})),
        (function (e) {
          (e[(e.VRInitError_None = 0)] = "VRInitError_None"),
            (e[(e.VRInitError_Unknown = 1)] = "VRInitError_Unknown"),
            (e[(e.VRInitError_Init_InstallationNotFound = 100)] =
              "VRInitError_Init_InstallationNotFound"),
            (e[(e.VRInitError_Init_InstallationCorrupt = 101)] =
              "VRInitError_Init_InstallationCorrupt"),
            (e[(e.VRInitError_Init_VRClientDLLNotFound = 102)] =
              "VRInitError_Init_VRClientDLLNotFound"),
            (e[(e.VRInitError_Init_FileNotFound = 103)] =
              "VRInitError_Init_FileNotFound"),
            (e[(e.VRInitError_Init_FactoryNotFound = 104)] =
              "VRInitError_Init_FactoryNotFound"),
            (e[(e.VRInitError_Init_InterfaceNotFound = 105)] =
              "VRInitError_Init_InterfaceNotFound"),
            (e[(e.VRInitError_Init_InvalidInterface = 106)] =
              "VRInitError_Init_InvalidInterface"),
            (e[(e.VRInitError_Init_UserConfigDirectoryInvalid = 107)] =
              "VRInitError_Init_UserConfigDirectoryInvalid"),
            (e[(e.VRInitError_Init_HmdNotFound = 108)] =
              "VRInitError_Init_HmdNotFound"),
            (e[(e.VRInitError_Init_NotInitialized = 109)] =
              "VRInitError_Init_NotInitialized"),
            (e[(e.VRInitError_Init_PathRegistryNotFound = 110)] =
              "VRInitError_Init_PathRegistryNotFound"),
            (e[(e.VRInitError_Init_NoConfigPath = 111)] =
              "VRInitError_Init_NoConfigPath"),
            (e[(e.VRInitError_Init_NoLogPath = 112)] =
              "VRInitError_Init_NoLogPath"),
            (e[(e.VRInitError_Init_PathRegistryNotWritable = 113)] =
              "VRInitError_Init_PathRegistryNotWritable"),
            (e[(e.VRInitError_Init_AppInfoInitFailed = 114)] =
              "VRInitError_Init_AppInfoInitFailed"),
            (e[(e.VRInitError_Init_Retry = 115)] = "VRInitError_Init_Retry"),
            (e[(e.VRInitError_Init_InitCanceledByUser = 116)] =
              "VRInitError_Init_InitCanceledByUser"),
            (e[(e.VRInitError_Init_AnotherAppLaunching = 117)] =
              "VRInitError_Init_AnotherAppLaunching"),
            (e[(e.VRInitError_Init_SettingsInitFailed = 118)] =
              "VRInitError_Init_SettingsInitFailed"),
            (e[(e.VRInitError_Init_ShuttingDown = 119)] =
              "VRInitError_Init_ShuttingDown"),
            (e[(e.VRInitError_Init_TooManyObjects = 120)] =
              "VRInitError_Init_TooManyObjects"),
            (e[(e.VRInitError_Init_NoServerForBackgroundApp = 121)] =
              "VRInitError_Init_NoServerForBackgroundApp"),
            (e[(e.VRInitError_Init_NotSupportedWithCompositor = 122)] =
              "VRInitError_Init_NotSupportedWithCompositor"),
            (e[(e.VRInitError_Init_NotAvailableToUtilityApps = 123)] =
              "VRInitError_Init_NotAvailableToUtilityApps"),
            (e[(e.VRInitError_Init_Internal = 124)] =
              "VRInitError_Init_Internal"),
            (e[(e.VRInitError_Init_HmdDriverIdIsNone = 125)] =
              "VRInitError_Init_HmdDriverIdIsNone"),
            (e[(e.VRInitError_Init_HmdNotFoundPresenceFailed = 126)] =
              "VRInitError_Init_HmdNotFoundPresenceFailed"),
            (e[(e.VRInitError_Init_VRMonitorNotFound = 127)] =
              "VRInitError_Init_VRMonitorNotFound"),
            (e[(e.VRInitError_Init_VRMonitorStartupFailed = 128)] =
              "VRInitError_Init_VRMonitorStartupFailed"),
            (e[(e.VRInitError_Init_LowPowerWatchdogNotSupported = 129)] =
              "VRInitError_Init_LowPowerWatchdogNotSupported"),
            (e[(e.VRInitError_Init_InvalidApplicationType = 130)] =
              "VRInitError_Init_InvalidApplicationType"),
            (e[(e.VRInitError_Init_NotAvailableToWatchdogApps = 131)] =
              "VRInitError_Init_NotAvailableToWatchdogApps"),
            (e[(e.VRInitError_Init_WatchdogDisabledInSettings = 132)] =
              "VRInitError_Init_WatchdogDisabledInSettings"),
            (e[(e.VRInitError_Init_VRDashboardNotFound = 133)] =
              "VRInitError_Init_VRDashboardNotFound"),
            (e[(e.VRInitError_Init_VRDashboardStartupFailed = 134)] =
              "VRInitError_Init_VRDashboardStartupFailed"),
            (e[(e.VRInitError_Init_VRHomeNotFound = 135)] =
              "VRInitError_Init_VRHomeNotFound"),
            (e[(e.VRInitError_Init_VRHomeStartupFailed = 136)] =
              "VRInitError_Init_VRHomeStartupFailed"),
            (e[(e.VRInitError_Init_RebootingBusy = 137)] =
              "VRInitError_Init_RebootingBusy"),
            (e[(e.VRInitError_Init_FirmwareUpdateBusy = 138)] =
              "VRInitError_Init_FirmwareUpdateBusy"),
            (e[(e.VRInitError_Init_FirmwareRecoveryBusy = 139)] =
              "VRInitError_Init_FirmwareRecoveryBusy"),
            (e[(e.VRInitError_Init_USBServiceBusy = 140)] =
              "VRInitError_Init_USBServiceBusy"),
            (e[(e.VRInitError_Init_VRWebHelperStartupFailed = 141)] =
              "VRInitError_Init_VRWebHelperStartupFailed"),
            (e[(e.VRInitError_Init_TrackerManagerInitFailed = 142)] =
              "VRInitError_Init_TrackerManagerInitFailed"),
            (e[(e.VRInitError_Init_AlreadyRunning = 143)] =
              "VRInitError_Init_AlreadyRunning"),
            (e[(e.VRInitError_Init_FailedForVrMonitor = 144)] =
              "VRInitError_Init_FailedForVrMonitor"),
            (e[(e.VRInitError_Init_PropertyManagerInitFailed = 145)] =
              "VRInitError_Init_PropertyManagerInitFailed"),
            (e[(e.VRInitError_Init_WebServerFailed = 146)] =
              "VRInitError_Init_WebServerFailed"),
            (e[(e.VRInitError_Init_IllegalTypeTransition = 147)] =
              "VRInitError_Init_IllegalTypeTransition"),
            (e[(e.VRInitError_Init_MismatchedRuntimes = 148)] =
              "VRInitError_Init_MismatchedRuntimes"),
            (e[(e.VRInitError_Init_InvalidProcessId = 149)] =
              "VRInitError_Init_InvalidProcessId"),
            (e[(e.VRInitError_Init_VRServiceStartupFailed = 150)] =
              "VRInitError_Init_VRServiceStartupFailed"),
            (e[(e.VRInitError_Init_PrismNeedsNewDrivers = 151)] =
              "VRInitError_Init_PrismNeedsNewDrivers"),
            (e[(e.VRInitError_Init_PrismStartupTimedOut = 152)] =
              "VRInitError_Init_PrismStartupTimedOut"),
            (e[(e.VRInitError_Init_CouldNotStartPrism = 153)] =
              "VRInitError_Init_CouldNotStartPrism"),
            (e[(e.VRInitError_Init_PrismClientInitFailed = 154)] =
              "VRInitError_Init_PrismClientInitFailed"),
            (e[(e.VRInitError_Init_PrismClientStartFailed = 155)] =
              "VRInitError_Init_PrismClientStartFailed"),
            (e[(e.VRInitError_Init_PrismExitedUnexpectedly = 156)] =
              "VRInitError_Init_PrismExitedUnexpectedly"),
            (e[(e.VRInitError_Init_BadLuid = 157)] =
              "VRInitError_Init_BadLuid"),
            (e[(e.VRInitError_Init_NoServerForAppContainer = 158)] =
              "VRInitError_Init_NoServerForAppContainer"),
            (e[(e.VRInitError_Init_DuplicateBootstrapper = 159)] =
              "VRInitError_Init_DuplicateBootstrapper"),
            (e[(e.VRInitError_Init_VRDashboardServicePending = 160)] =
              "VRInitError_Init_VRDashboardServicePending"),
            (e[(e.VRInitError_Init_VRDashboardServiceTimeout = 161)] =
              "VRInitError_Init_VRDashboardServiceTimeout"),
            (e[(e.VRInitError_Init_VRDashboardServiceStopped = 162)] =
              "VRInitError_Init_VRDashboardServiceStopped"),
            (e[(e.VRInitError_Init_VRDashboardAlreadyStarted = 163)] =
              "VRInitError_Init_VRDashboardAlreadyStarted"),
            (e[(e.VRInitError_Init_VRDashboardCopyFailed = 164)] =
              "VRInitError_Init_VRDashboardCopyFailed"),
            (e[(e.VRInitError_Init_VRDashboardTokenFailure = 165)] =
              "VRInitError_Init_VRDashboardTokenFailure"),
            (e[(e.VRInitError_Init_VRDashboardEnvironmentFailure = 166)] =
              "VRInitError_Init_VRDashboardEnvironmentFailure"),
            (e[(e.VRInitError_Init_VRDashboardPathFailure = 167)] =
              "VRInitError_Init_VRDashboardPathFailure"),
            (e[(e.VRInitError_Driver_Failed = 200)] =
              "VRInitError_Driver_Failed"),
            (e[(e.VRInitError_Driver_Unknown = 201)] =
              "VRInitError_Driver_Unknown"),
            (e[(e.VRInitError_Driver_HmdUnknown = 202)] =
              "VRInitError_Driver_HmdUnknown"),
            (e[(e.VRInitError_Driver_NotLoaded = 203)] =
              "VRInitError_Driver_NotLoaded"),
            (e[(e.VRInitError_Driver_RuntimeOutOfDate = 204)] =
              "VRInitError_Driver_RuntimeOutOfDate"),
            (e[(e.VRInitError_Driver_HmdInUse = 205)] =
              "VRInitError_Driver_HmdInUse"),
            (e[(e.VRInitError_Driver_NotCalibrated = 206)] =
              "VRInitError_Driver_NotCalibrated"),
            (e[(e.VRInitError_Driver_CalibrationInvalid = 207)] =
              "VRInitError_Driver_CalibrationInvalid"),
            (e[(e.VRInitError_Driver_HmdDisplayNotFound = 208)] =
              "VRInitError_Driver_HmdDisplayNotFound"),
            (e[(e.VRInitError_Driver_TrackedDeviceInterfaceUnknown = 209)] =
              "VRInitError_Driver_TrackedDeviceInterfaceUnknown"),
            (e[(e.VRInitError_Driver_HmdDriverIdOutOfBounds = 211)] =
              "VRInitError_Driver_HmdDriverIdOutOfBounds"),
            (e[(e.VRInitError_Driver_HmdDisplayMirrored = 212)] =
              "VRInitError_Driver_HmdDisplayMirrored"),
            (e[(e.VRInitError_Driver_HmdDisplayNotFoundLaptop = 213)] =
              "VRInitError_Driver_HmdDisplayNotFoundLaptop"),
            (e[(e.VRInitError_Driver_PeerDriverNotInstalled = 214)] =
              "VRInitError_Driver_PeerDriverNotInstalled"),
            (e[(e.VRInitError_Driver_WirelessHmdNotConnected = 215)] =
              "VRInitError_Driver_WirelessHmdNotConnected"),
            (e[(e.VRInitError_IPC_ServerInitFailed = 300)] =
              "VRInitError_IPC_ServerInitFailed"),
            (e[(e.VRInitError_IPC_ConnectFailed = 301)] =
              "VRInitError_IPC_ConnectFailed"),
            (e[(e.VRInitError_IPC_SharedStateInitFailed = 302)] =
              "VRInitError_IPC_SharedStateInitFailed"),
            (e[(e.VRInitError_IPC_CompositorInitFailed = 303)] =
              "VRInitError_IPC_CompositorInitFailed"),
            (e[(e.VRInitError_IPC_MutexInitFailed = 304)] =
              "VRInitError_IPC_MutexInitFailed"),
            (e[(e.VRInitError_IPC_Failed = 305)] = "VRInitError_IPC_Failed"),
            (e[(e.VRInitError_IPC_CompositorConnectFailed = 306)] =
              "VRInitError_IPC_CompositorConnectFailed"),
            (e[(e.VRInitError_IPC_CompositorInvalidConnectResponse = 307)] =
              "VRInitError_IPC_CompositorInvalidConnectResponse"),
            (e[(e.VRInitError_IPC_ConnectFailedAfterMultipleAttempts = 308)] =
              "VRInitError_IPC_ConnectFailedAfterMultipleAttempts"),
            (e[(e.VRInitError_IPC_ConnectFailedAfterTargetExited = 309)] =
              "VRInitError_IPC_ConnectFailedAfterTargetExited"),
            (e[(e.VRInitError_IPC_NamespaceUnavailable = 310)] =
              "VRInitError_IPC_NamespaceUnavailable"),
            (e[(e.VRInitError_Compositor_Failed = 400)] =
              "VRInitError_Compositor_Failed"),
            (e[(e.VRInitError_Compositor_D3D11HardwareRequired = 401)] =
              "VRInitError_Compositor_D3D11HardwareRequired"),
            (e[(e.VRInitError_Compositor_FirmwareRequiresUpdate = 402)] =
              "VRInitError_Compositor_FirmwareRequiresUpdate"),
            (e[(e.VRInitError_Compositor_OverlayInitFailed = 403)] =
              "VRInitError_Compositor_OverlayInitFailed"),
            (e[(e.VRInitError_Compositor_ScreenshotsInitFailed = 404)] =
              "VRInitError_Compositor_ScreenshotsInitFailed"),
            (e[(e.VRInitError_Compositor_UnableToCreateDevice = 405)] =
              "VRInitError_Compositor_UnableToCreateDevice"),
            (e[(e.VRInitError_Compositor_SharedStateIsNull = 406)] =
              "VRInitError_Compositor_SharedStateIsNull"),
            (e[(e.VRInitError_Compositor_NotificationManagerIsNull = 407)] =
              "VRInitError_Compositor_NotificationManagerIsNull"),
            (e[(e.VRInitError_Compositor_ResourceManagerClientIsNull = 408)] =
              "VRInitError_Compositor_ResourceManagerClientIsNull"),
            (e[
              (e.VRInitError_Compositor_MessageOverlaySharedStateInitFailure = 409)
            ] = "VRInitError_Compositor_MessageOverlaySharedStateInitFailure"),
            (e[(e.VRInitError_Compositor_PropertiesInterfaceIsNull = 410)] =
              "VRInitError_Compositor_PropertiesInterfaceIsNull"),
            (e[(e.VRInitError_Compositor_CreateFullscreenWindowFailed = 411)] =
              "VRInitError_Compositor_CreateFullscreenWindowFailed"),
            (e[(e.VRInitError_Compositor_SettingsInterfaceIsNull = 412)] =
              "VRInitError_Compositor_SettingsInterfaceIsNull"),
            (e[(e.VRInitError_Compositor_FailedToShowWindow = 413)] =
              "VRInitError_Compositor_FailedToShowWindow"),
            (e[(e.VRInitError_Compositor_DistortInterfaceIsNull = 414)] =
              "VRInitError_Compositor_DistortInterfaceIsNull"),
            (e[(e.VRInitError_Compositor_DisplayFrequencyFailure = 415)] =
              "VRInitError_Compositor_DisplayFrequencyFailure"),
            (e[(e.VRInitError_Compositor_RendererInitializationFailed = 416)] =
              "VRInitError_Compositor_RendererInitializationFailed"),
            (e[(e.VRInitError_Compositor_DXGIFactoryInterfaceIsNull = 417)] =
              "VRInitError_Compositor_DXGIFactoryInterfaceIsNull"),
            (e[(e.VRInitError_Compositor_DXGIFactoryCreateFailed = 418)] =
              "VRInitError_Compositor_DXGIFactoryCreateFailed"),
            (e[(e.VRInitError_Compositor_DXGIFactoryQueryFailed = 419)] =
              "VRInitError_Compositor_DXGIFactoryQueryFailed"),
            (e[(e.VRInitError_Compositor_InvalidAdapterDesktop = 420)] =
              "VRInitError_Compositor_InvalidAdapterDesktop"),
            (e[(e.VRInitError_Compositor_InvalidHmdAttachment = 421)] =
              "VRInitError_Compositor_InvalidHmdAttachment"),
            (e[(e.VRInitError_Compositor_InvalidOutputDesktop = 422)] =
              "VRInitError_Compositor_InvalidOutputDesktop"),
            (e[(e.VRInitError_Compositor_InvalidDeviceProvided = 423)] =
              "VRInitError_Compositor_InvalidDeviceProvided"),
            (e[
              (e.VRInitError_Compositor_D3D11RendererInitializationFailed = 424)
            ] = "VRInitError_Compositor_D3D11RendererInitializationFailed"),
            (e[(e.VRInitError_Compositor_FailedToFindDisplayMode = 425)] =
              "VRInitError_Compositor_FailedToFindDisplayMode"),
            (e[(e.VRInitError_Compositor_FailedToCreateSwapChain = 426)] =
              "VRInitError_Compositor_FailedToCreateSwapChain"),
            (e[(e.VRInitError_Compositor_FailedToGetBackBuffer = 427)] =
              "VRInitError_Compositor_FailedToGetBackBuffer"),
            (e[(e.VRInitError_Compositor_FailedToCreateRenderTarget = 428)] =
              "VRInitError_Compositor_FailedToCreateRenderTarget"),
            (e[(e.VRInitError_Compositor_FailedToCreateDXGI2SwapChain = 429)] =
              "VRInitError_Compositor_FailedToCreateDXGI2SwapChain"),
            (e[(e.VRInitError_Compositor_FailedtoGetDXGI2BackBuffer = 430)] =
              "VRInitError_Compositor_FailedtoGetDXGI2BackBuffer"),
            (e[
              (e.VRInitError_Compositor_FailedToCreateDXGI2RenderTarget = 431)
            ] = "VRInitError_Compositor_FailedToCreateDXGI2RenderTarget"),
            (e[
              (e.VRInitError_Compositor_FailedToGetDXGIDeviceInterface = 432)
            ] = "VRInitError_Compositor_FailedToGetDXGIDeviceInterface"),
            (e[(e.VRInitError_Compositor_SelectDisplayMode = 433)] =
              "VRInitError_Compositor_SelectDisplayMode"),
            (e[
              (e.VRInitError_Compositor_FailedToCreateNvAPIRenderTargets = 434)
            ] = "VRInitError_Compositor_FailedToCreateNvAPIRenderTargets"),
            (e[(e.VRInitError_Compositor_NvAPISetDisplayMode = 435)] =
              "VRInitError_Compositor_NvAPISetDisplayMode"),
            (e[
              (e.VRInitError_Compositor_FailedToCreateDirectModeDisplay = 436)
            ] = "VRInitError_Compositor_FailedToCreateDirectModeDisplay"),
            (e[(e.VRInitError_Compositor_InvalidHmdPropertyContainer = 437)] =
              "VRInitError_Compositor_InvalidHmdPropertyContainer"),
            (e[(e.VRInitError_Compositor_UpdateDisplayFrequency = 438)] =
              "VRInitError_Compositor_UpdateDisplayFrequency"),
            (e[(e.VRInitError_Compositor_CreateRasterizerState = 439)] =
              "VRInitError_Compositor_CreateRasterizerState"),
            (e[
              (e.VRInitError_Compositor_CreateWireframeRasterizerState = 440)
            ] = "VRInitError_Compositor_CreateWireframeRasterizerState"),
            (e[(e.VRInitError_Compositor_CreateSamplerState = 441)] =
              "VRInitError_Compositor_CreateSamplerState"),
            (e[
              (e.VRInitError_Compositor_CreateClampToBorderSamplerState = 442)
            ] = "VRInitError_Compositor_CreateClampToBorderSamplerState"),
            (e[(e.VRInitError_Compositor_CreateAnisoSamplerState = 443)] =
              "VRInitError_Compositor_CreateAnisoSamplerState"),
            (e[(e.VRInitError_Compositor_CreateOverlaySamplerState = 444)] =
              "VRInitError_Compositor_CreateOverlaySamplerState"),
            (e[(e.VRInitError_Compositor_CreatePanoramaSamplerState = 445)] =
              "VRInitError_Compositor_CreatePanoramaSamplerState"),
            (e[(e.VRInitError_Compositor_CreateFontSamplerState = 446)] =
              "VRInitError_Compositor_CreateFontSamplerState"),
            (e[(e.VRInitError_Compositor_CreateNoBlendState = 447)] =
              "VRInitError_Compositor_CreateNoBlendState"),
            (e[(e.VRInitError_Compositor_CreateBlendState = 448)] =
              "VRInitError_Compositor_CreateBlendState"),
            (e[(e.VRInitError_Compositor_CreateAlphaBlendState = 449)] =
              "VRInitError_Compositor_CreateAlphaBlendState"),
            (e[(e.VRInitError_Compositor_CreateBlendStateMaskR = 450)] =
              "VRInitError_Compositor_CreateBlendStateMaskR"),
            (e[(e.VRInitError_Compositor_CreateBlendStateMaskG = 451)] =
              "VRInitError_Compositor_CreateBlendStateMaskG"),
            (e[(e.VRInitError_Compositor_CreateBlendStateMaskB = 452)] =
              "VRInitError_Compositor_CreateBlendStateMaskB"),
            (e[(e.VRInitError_Compositor_CreateDepthStencilState = 453)] =
              "VRInitError_Compositor_CreateDepthStencilState"),
            (e[
              (e.VRInitError_Compositor_CreateDepthStencilStateNoWrite = 454)
            ] = "VRInitError_Compositor_CreateDepthStencilStateNoWrite"),
            (e[
              (e.VRInitError_Compositor_CreateDepthStencilStateNoDepth = 455)
            ] = "VRInitError_Compositor_CreateDepthStencilStateNoDepth"),
            (e[(e.VRInitError_Compositor_CreateFlushTexture = 456)] =
              "VRInitError_Compositor_CreateFlushTexture"),
            (e[(e.VRInitError_Compositor_CreateDistortionSurfaces = 457)] =
              "VRInitError_Compositor_CreateDistortionSurfaces"),
            (e[(e.VRInitError_Compositor_CreateConstantBuffer = 458)] =
              "VRInitError_Compositor_CreateConstantBuffer"),
            (e[(e.VRInitError_Compositor_CreateHmdPoseConstantBuffer = 459)] =
              "VRInitError_Compositor_CreateHmdPoseConstantBuffer"),
            (e[
              (e.VRInitError_Compositor_CreateHmdPoseStagingConstantBuffer = 460)
            ] = "VRInitError_Compositor_CreateHmdPoseStagingConstantBuffer"),
            (e[
              (e.VRInitError_Compositor_CreateSharedFrameInfoConstantBuffer = 461)
            ] = "VRInitError_Compositor_CreateSharedFrameInfoConstantBuffer"),
            (e[(e.VRInitError_Compositor_CreateOverlayConstantBuffer = 462)] =
              "VRInitError_Compositor_CreateOverlayConstantBuffer"),
            (e[
              (e.VRInitError_Compositor_CreateSceneTextureIndexConstantBuffer = 463)
            ] = "VRInitError_Compositor_CreateSceneTextureIndexConstantBuffer"),
            (e[
              (e.VRInitError_Compositor_CreateReadableSceneTextureIndexConstantBuffer = 464)
            ] =
              "VRInitError_Compositor_CreateReadableSceneTextureIndexConstantBuffer"),
            (e[
              (e.VRInitError_Compositor_CreateLayerGraphicsTextureIndexConstantBuffer = 465)
            ] =
              "VRInitError_Compositor_CreateLayerGraphicsTextureIndexConstantBuffer"),
            (e[
              (e.VRInitError_Compositor_CreateLayerComputeTextureIndexConstantBuffer = 466)
            ] =
              "VRInitError_Compositor_CreateLayerComputeTextureIndexConstantBuffer"),
            (e[
              (e.VRInitError_Compositor_CreateLayerComputeSceneTextureIndexConstantBuffer = 467)
            ] =
              "VRInitError_Compositor_CreateLayerComputeSceneTextureIndexConstantBuffer"),
            (e[
              (e.VRInitError_Compositor_CreateComputeHmdPoseConstantBuffer = 468)
            ] = "VRInitError_Compositor_CreateComputeHmdPoseConstantBuffer"),
            (e[(e.VRInitError_Compositor_CreateGeomConstantBuffer = 469)] =
              "VRInitError_Compositor_CreateGeomConstantBuffer"),
            (e[(e.VRInitError_Compositor_CreatePanelMaskConstantBuffer = 470)] =
              "VRInitError_Compositor_CreatePanelMaskConstantBuffer"),
            (e[(e.VRInitError_Compositor_CreatePixelSimUBO = 471)] =
              "VRInitError_Compositor_CreatePixelSimUBO"),
            (e[(e.VRInitError_Compositor_CreateMSAARenderTextures = 472)] =
              "VRInitError_Compositor_CreateMSAARenderTextures"),
            (e[(e.VRInitError_Compositor_CreateResolveRenderTextures = 473)] =
              "VRInitError_Compositor_CreateResolveRenderTextures"),
            (e[
              (e.VRInitError_Compositor_CreateComputeResolveRenderTextures = 474)
            ] = "VRInitError_Compositor_CreateComputeResolveRenderTextures"),
            (e[
              (e.VRInitError_Compositor_CreateDriverDirectModeResolveTextures = 475)
            ] = "VRInitError_Compositor_CreateDriverDirectModeResolveTextures"),
            (e[
              (e.VRInitError_Compositor_OpenDriverDirectModeResolveTextures = 476)
            ] = "VRInitError_Compositor_OpenDriverDirectModeResolveTextures"),
            (e[(e.VRInitError_Compositor_CreateFallbackSyncTexture = 477)] =
              "VRInitError_Compositor_CreateFallbackSyncTexture"),
            (e[(e.VRInitError_Compositor_ShareFallbackSyncTexture = 478)] =
              "VRInitError_Compositor_ShareFallbackSyncTexture"),
            (e[(e.VRInitError_Compositor_CreateOverlayIndexBuffer = 479)] =
              "VRInitError_Compositor_CreateOverlayIndexBuffer"),
            (e[(e.VRInitError_Compositor_CreateOverlayVertexBuffer = 480)] =
              "VRInitError_Compositor_CreateOverlayVertexBuffer"),
            (e[(e.VRInitError_Compositor_CreateTextVertexBuffer = 481)] =
              "VRInitError_Compositor_CreateTextVertexBuffer"),
            (e[(e.VRInitError_Compositor_CreateTextIndexBuffer = 482)] =
              "VRInitError_Compositor_CreateTextIndexBuffer"),
            (e[(e.VRInitError_Compositor_CreateMirrorTextures = 483)] =
              "VRInitError_Compositor_CreateMirrorTextures"),
            (e[(e.VRInitError_Compositor_CreateLastFrameRenderTexture = 484)] =
              "VRInitError_Compositor_CreateLastFrameRenderTexture"),
            (e[(e.VRInitError_Compositor_CreateMirrorOverlay = 485)] =
              "VRInitError_Compositor_CreateMirrorOverlay"),
            (e[
              (e.VRInitError_Compositor_FailedToCreateVirtualDisplayBackbuffer = 486)
            ] =
              "VRInitError_Compositor_FailedToCreateVirtualDisplayBackbuffer"),
            (e[(e.VRInitError_Compositor_DisplayModeNotSupported = 487)] =
              "VRInitError_Compositor_DisplayModeNotSupported"),
            (e[(e.VRInitError_Compositor_CreateOverlayInvalidCall = 488)] =
              "VRInitError_Compositor_CreateOverlayInvalidCall"),
            (e[
              (e.VRInitError_Compositor_CreateOverlayAlreadyInitialized = 489)
            ] = "VRInitError_Compositor_CreateOverlayAlreadyInitialized"),
            (e[(e.VRInitError_Compositor_FailedToCreateMailbox = 490)] =
              "VRInitError_Compositor_FailedToCreateMailbox"),
            (e[(e.VRInitError_Compositor_WindowInterfaceIsNull = 491)] =
              "VRInitError_Compositor_WindowInterfaceIsNull"),
            (e[(e.VRInitError_Compositor_SystemLayerCreateInstance = 492)] =
              "VRInitError_Compositor_SystemLayerCreateInstance"),
            (e[(e.VRInitError_Compositor_SystemLayerCreateSession = 493)] =
              "VRInitError_Compositor_SystemLayerCreateSession"),
            (e[(e.VRInitError_Compositor_CreateInverseDistortUVs = 494)] =
              "VRInitError_Compositor_CreateInverseDistortUVs"),
            (e[(e.VRInitError_Compositor_CreateBackbufferDepth = 495)] =
              "VRInitError_Compositor_CreateBackbufferDepth"),
            (e[
              (e.VRInitError_VendorSpecific_UnableToConnectToOculusRuntime = 1e3)
            ] = "VRInitError_VendorSpecific_UnableToConnectToOculusRuntime"),
            (e[(e.VRInitError_VendorSpecific_WindowsNotInDevMode = 1001)] =
              "VRInitError_VendorSpecific_WindowsNotInDevMode"),
            (e[(e.VRInitError_VendorSpecific_OculusLinkNotEnabled = 1002)] =
              "VRInitError_VendorSpecific_OculusLinkNotEnabled"),
            (e[(e.VRInitError_VendorSpecific_HmdFound_CantOpenDevice = 1101)] =
              "VRInitError_VendorSpecific_HmdFound_CantOpenDevice"),
            (e[
              (e.VRInitError_VendorSpecific_HmdFound_UnableToRequestConfigStart = 1102)
            ] =
              "VRInitError_VendorSpecific_HmdFound_UnableToRequestConfigStart"),
            (e[(e.VRInitError_VendorSpecific_HmdFound_NoStoredConfig = 1103)] =
              "VRInitError_VendorSpecific_HmdFound_NoStoredConfig"),
            (e[(e.VRInitError_VendorSpecific_HmdFound_ConfigTooBig = 1104)] =
              "VRInitError_VendorSpecific_HmdFound_ConfigTooBig"),
            (e[(e.VRInitError_VendorSpecific_HmdFound_ConfigTooSmall = 1105)] =
              "VRInitError_VendorSpecific_HmdFound_ConfigTooSmall"),
            (e[
              (e.VRInitError_VendorSpecific_HmdFound_UnableToInitZLib = 1106)
            ] = "VRInitError_VendorSpecific_HmdFound_UnableToInitZLib"),
            (e[
              (e.VRInitError_VendorSpecific_HmdFound_CantReadFirmwareVersion = 1107)
            ] = "VRInitError_VendorSpecific_HmdFound_CantReadFirmwareVersion"),
            (e[
              (e.VRInitError_VendorSpecific_HmdFound_UnableToSendUserDataStart = 1108)
            ] =
              "VRInitError_VendorSpecific_HmdFound_UnableToSendUserDataStart"),
            (e[
              (e.VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataStart = 1109)
            ] = "VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataStart"),
            (e[
              (e.VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataNext = 1110)
            ] = "VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataNext"),
            (e[
              (e.VRInitError_VendorSpecific_HmdFound_UserDataAddressRange = 1111)
            ] = "VRInitError_VendorSpecific_HmdFound_UserDataAddressRange"),
            (e[(e.VRInitError_VendorSpecific_HmdFound_UserDataError = 1112)] =
              "VRInitError_VendorSpecific_HmdFound_UserDataError"),
            (e[
              (e.VRInitError_VendorSpecific_HmdFound_ConfigFailedSanityCheck = 1113)
            ] = "VRInitError_VendorSpecific_HmdFound_ConfigFailedSanityCheck"),
            (e[(e.VRInitError_VendorSpecific_OculusRuntimeBadInstall = 1114)] =
              "VRInitError_VendorSpecific_OculusRuntimeBadInstall"),
            (e[
              (e.VRInitError_VendorSpecific_HmdFound_UnexpectedConfiguration_1 = 1115)
            ] =
              "VRInitError_VendorSpecific_HmdFound_UnexpectedConfiguration_1"),
            (e[(e.VRInitError_Steam_SteamInstallationNotFound = 2e3)] =
              "VRInitError_Steam_SteamInstallationNotFound"),
            (e[(e.VRInitError_LastError = 2001)] = "VRInitError_LastError");
        })(Lr || (Lr = {})),
        (function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.TrackingSystemName_String = 1e3)] =
              "TrackingSystemName_String"),
            (e[(e.ModelNumber_String = 1001)] = "ModelNumber_String"),
            (e[(e.SerialNumber_String = 1002)] = "SerialNumber_String"),
            (e[(e.RenderModelName_String = 1003)] = "RenderModelName_String"),
            (e[(e.WillDriftInYaw_Bool = 1004)] = "WillDriftInYaw_Bool"),
            (e[(e.ManufacturerName_String = 1005)] = "ManufacturerName_String"),
            (e[(e.TrackingFirmwareVersion_String = 1006)] =
              "TrackingFirmwareVersion_String"),
            (e[(e.HardwareRevision_String = 1007)] = "HardwareRevision_String"),
            (e[(e.AllWirelessDongleDescriptions_String = 1008)] =
              "AllWirelessDongleDescriptions_String"),
            (e[(e.ConnectedWirelessDongle_String = 1009)] =
              "ConnectedWirelessDongle_String"),
            (e[(e.DeviceIsWireless_Bool = 1010)] = "DeviceIsWireless_Bool"),
            (e[(e.DeviceIsCharging_Bool = 1011)] = "DeviceIsCharging_Bool"),
            (e[(e.DeviceBatteryPercentage_Float = 1012)] =
              "DeviceBatteryPercentage_Float"),
            (e[(e.StatusDisplayTransform_Matrix34 = 1013)] =
              "StatusDisplayTransform_Matrix34"),
            (e[(e.Firmware_UpdateAvailable_Bool = 1014)] =
              "Firmware_UpdateAvailable_Bool"),
            (e[(e.Firmware_ManualUpdate_Bool = 1015)] =
              "Firmware_ManualUpdate_Bool"),
            (e[(e.Firmware_ManualUpdateURL_String = 1016)] =
              "Firmware_ManualUpdateURL_String"),
            (e[(e.HardwareRevision_Uint64 = 1017)] = "HardwareRevision_Uint64"),
            (e[(e.FirmwareVersion_Uint64 = 1018)] = "FirmwareVersion_Uint64"),
            (e[(e.FPGAVersion_Uint64 = 1019)] = "FPGAVersion_Uint64"),
            (e[(e.VRCVersion_Uint64 = 1020)] = "VRCVersion_Uint64"),
            (e[(e.RadioVersion_Uint64 = 1021)] = "RadioVersion_Uint64"),
            (e[(e.DongleVersion_Uint64 = 1022)] = "DongleVersion_Uint64"),
            (e[(e.BlockServerShutdown_Bool = 1023)] =
              "BlockServerShutdown_Bool"),
            (e[(e.CanUnifyCoordinateSystemWithHmd_Bool = 1024)] =
              "CanUnifyCoordinateSystemWithHmd_Bool"),
            (e[(e.ContainsProximitySensor_Bool = 1025)] =
              "ContainsProximitySensor_Bool"),
            (e[(e.DeviceProvidesBatteryStatus_Bool = 1026)] =
              "DeviceProvidesBatteryStatus_Bool"),
            (e[(e.DeviceCanPowerOff_Bool = 1027)] = "DeviceCanPowerOff_Bool"),
            (e[(e.Firmware_ProgrammingTarget_String = 1028)] =
              "Firmware_ProgrammingTarget_String"),
            (e[(e.DeviceClass_Int32 = 1029)] = "DeviceClass_Int32"),
            (e[(e.HasCamera_Bool = 1030)] = "HasCamera_Bool"),
            (e[(e.DriverVersion_String = 1031)] = "DriverVersion_String"),
            (e[(e.Firmware_ForceUpdateRequired_Bool = 1032)] =
              "Firmware_ForceUpdateRequired_Bool"),
            (e[(e.ViveSystemButtonFixRequired_Bool = 1033)] =
              "ViveSystemButtonFixRequired_Bool"),
            (e[(e.ParentDriver_Uint64 = 1034)] = "ParentDriver_Uint64"),
            (e[(e.ResourceRoot_String = 1035)] = "ResourceRoot_String"),
            (e[(e.RegisteredDeviceType_String = 1036)] =
              "RegisteredDeviceType_String"),
            (e[(e.InputProfilePath_String = 1037)] = "InputProfilePath_String"),
            (e[(e.NeverTracked_Bool = 1038)] = "NeverTracked_Bool"),
            (e[(e.NumCameras_Int32 = 1039)] = "NumCameras_Int32"),
            (e[(e.CameraFrameLayout_Int32 = 1040)] = "CameraFrameLayout_Int32"),
            (e[(e.CameraStreamFormat_Int32 = 1041)] =
              "CameraStreamFormat_Int32"),
            (e[(e.AdditionalDeviceSettingsPath_String = 1042)] =
              "AdditionalDeviceSettingsPath_String"),
            (e[(e.DevicePowerUsage_Float = 1052)] = "DevicePowerUsage_Float"),
            (e[(e.ReportsTimeSinceVSync_Bool = 2e3)] =
              "ReportsTimeSinceVSync_Bool"),
            (e[(e.SecondsFromVsyncToPhotons_Float = 2001)] =
              "SecondsFromVsyncToPhotons_Float"),
            (e[(e.DisplayFrequency_Float = 2002)] = "DisplayFrequency_Float"),
            (e[(e.UserIpdMeters_Float = 2003)] = "UserIpdMeters_Float"),
            (e[(e.CurrentUniverseId_Uint64 = 2004)] =
              "CurrentUniverseId_Uint64"),
            (e[(e.PreviousUniverseId_Uint64 = 2005)] =
              "PreviousUniverseId_Uint64"),
            (e[(e.DisplayFirmwareVersion_Uint64 = 2006)] =
              "DisplayFirmwareVersion_Uint64"),
            (e[(e.IsOnDesktop_Bool = 2007)] = "IsOnDesktop_Bool"),
            (e[(e.DisplayMCType_Int32 = 2008)] = "DisplayMCType_Int32"),
            (e[(e.DisplayMCOffset_Float = 2009)] = "DisplayMCOffset_Float"),
            (e[(e.DisplayMCScale_Float = 2010)] = "DisplayMCScale_Float"),
            (e[(e.EdidVendorID_Int32 = 2011)] = "EdidVendorID_Int32"),
            (e[(e.DisplayMCImageLeft_String = 2012)] =
              "DisplayMCImageLeft_String"),
            (e[(e.DisplayMCImageRight_String = 2013)] =
              "DisplayMCImageRight_String"),
            (e[(e.DisplayGCBlackClamp_Float = 2014)] =
              "DisplayGCBlackClamp_Float"),
            (e[(e.EdidProductID_Int32 = 2015)] = "EdidProductID_Int32"),
            (e[(e.CameraToHeadTransform_Matrix34 = 2016)] =
              "CameraToHeadTransform_Matrix34"),
            (e[(e.DisplayGCType_Int32 = 2017)] = "DisplayGCType_Int32"),
            (e[(e.DisplayGCOffset_Float = 2018)] = "DisplayGCOffset_Float"),
            (e[(e.DisplayGCScale_Float = 2019)] = "DisplayGCScale_Float"),
            (e[(e.DisplayGCPrescale_Float = 2020)] = "DisplayGCPrescale_Float"),
            (e[(e.DisplayGCImage_String = 2021)] = "DisplayGCImage_String"),
            (e[(e.LensCenterLeftU_Float = 2022)] = "LensCenterLeftU_Float"),
            (e[(e.LensCenterLeftV_Float = 2023)] = "LensCenterLeftV_Float"),
            (e[(e.LensCenterRightU_Float = 2024)] = "LensCenterRightU_Float"),
            (e[(e.LensCenterRightV_Float = 2025)] = "LensCenterRightV_Float"),
            (e[(e.UserHeadToEyeDepthMeters_Float = 2026)] =
              "UserHeadToEyeDepthMeters_Float"),
            (e[(e.CameraFirmwareVersion_Uint64 = 2027)] =
              "CameraFirmwareVersion_Uint64"),
            (e[(e.CameraFirmwareDescription_String = 2028)] =
              "CameraFirmwareDescription_String"),
            (e[(e.DisplayFPGAVersion_Uint64 = 2029)] =
              "DisplayFPGAVersion_Uint64"),
            (e[(e.DisplayBootloaderVersion_Uint64 = 2030)] =
              "DisplayBootloaderVersion_Uint64"),
            (e[(e.DisplayHardwareVersion_Uint64 = 2031)] =
              "DisplayHardwareVersion_Uint64"),
            (e[(e.AudioFirmwareVersion_Uint64 = 2032)] =
              "AudioFirmwareVersion_Uint64"),
            (e[(e.CameraCompatibilityMode_Int32 = 2033)] =
              "CameraCompatibilityMode_Int32"),
            (e[(e.ScreenshotHorizontalFieldOfViewDegrees_Float = 2034)] =
              "ScreenshotHorizontalFieldOfViewDegrees_Float"),
            (e[(e.ScreenshotVerticalFieldOfViewDegrees_Float = 2035)] =
              "ScreenshotVerticalFieldOfViewDegrees_Float"),
            (e[(e.DisplaySuppressed_Bool = 2036)] = "DisplaySuppressed_Bool"),
            (e[(e.DisplayAllowNightMode_Bool = 2037)] =
              "DisplayAllowNightMode_Bool"),
            (e[(e.DisplayMCImageWidth_Int32 = 2038)] =
              "DisplayMCImageWidth_Int32"),
            (e[(e.DisplayMCImageHeight_Int32 = 2039)] =
              "DisplayMCImageHeight_Int32"),
            (e[(e.DisplayMCImageNumChannels_Int32 = 2040)] =
              "DisplayMCImageNumChannels_Int32"),
            (e[(e.DisplayMCImageData_Binary = 2041)] =
              "DisplayMCImageData_Binary"),
            (e[(e.SecondsFromPhotonsToVblank_Float = 2042)] =
              "SecondsFromPhotonsToVblank_Float"),
            (e[(e.DriverDirectModeSendsVsyncEvents_Bool = 2043)] =
              "DriverDirectModeSendsVsyncEvents_Bool"),
            (e[(e.DisplayDebugMode_Bool = 2044)] = "DisplayDebugMode_Bool"),
            (e[(e.GraphicsAdapterLuid_Uint64 = 2045)] =
              "GraphicsAdapterLuid_Uint64"),
            (e[(e.DriverProvidedChaperonePath_String = 2048)] =
              "DriverProvidedChaperonePath_String"),
            (e[(e.ExpectedTrackingReferenceCount_Int32 = 2049)] =
              "ExpectedTrackingReferenceCount_Int32"),
            (e[(e.ExpectedControllerCount_Int32 = 2050)] =
              "ExpectedControllerCount_Int32"),
            (e[(e.NamedIconPathControllerLeftDeviceOff_String = 2051)] =
              "NamedIconPathControllerLeftDeviceOff_String"),
            (e[(e.NamedIconPathControllerRightDeviceOff_String = 2052)] =
              "NamedIconPathControllerRightDeviceOff_String"),
            (e[(e.NamedIconPathTrackingReferenceDeviceOff_String = 2053)] =
              "NamedIconPathTrackingReferenceDeviceOff_String"),
            (e[(e.DoNotApplyPrediction_Bool = 2054)] =
              "DoNotApplyPrediction_Bool"),
            (e[(e.CameraToHeadTransforms_Matrix34_Array = 2055)] =
              "CameraToHeadTransforms_Matrix34_Array"),
            (e[(e.DistortionMeshResolution_Int32 = 2056)] =
              "DistortionMeshResolution_Int32"),
            (e[(e.DriverIsDrawingControllers_Bool = 2057)] =
              "DriverIsDrawingControllers_Bool"),
            (e[(e.DriverRequestsApplicationPause_Bool = 2058)] =
              "DriverRequestsApplicationPause_Bool"),
            (e[(e.DriverRequestsReducedRendering_Bool = 2059)] =
              "DriverRequestsReducedRendering_Bool"),
            (e[(e.MinimumIpdStepMeters_Float = 2060)] =
              "MinimumIpdStepMeters_Float"),
            (e[(e.AudioBridgeFirmwareVersion_Uint64 = 2061)] =
              "AudioBridgeFirmwareVersion_Uint64"),
            (e[(e.ImageBridgeFirmwareVersion_Uint64 = 2062)] =
              "ImageBridgeFirmwareVersion_Uint64"),
            (e[(e.ImuToHeadTransform_Matrix34 = 2063)] =
              "ImuToHeadTransform_Matrix34"),
            (e[(e.ImuFactoryGyroBias_Vector3 = 2064)] =
              "ImuFactoryGyroBias_Vector3"),
            (e[(e.ImuFactoryGyroScale_Vector3 = 2065)] =
              "ImuFactoryGyroScale_Vector3"),
            (e[(e.ImuFactoryAccelerometerBias_Vector3 = 2066)] =
              "ImuFactoryAccelerometerBias_Vector3"),
            (e[(e.ImuFactoryAccelerometerScale_Vector3 = 2067)] =
              "ImuFactoryAccelerometerScale_Vector3"),
            (e[(e.ConfigurationIncludesLighthouse20Features_Bool = 2069)] =
              "ConfigurationIncludesLighthouse20Features_Bool"),
            (e[(e.Prop_AdditionalRadioFeatures_Uint64 = 2070)] =
              "Prop_AdditionalRadioFeatures_Uint64"),
            (e[(e.Prop_CameraWhiteBalance_Vector4_Array = 2071)] =
              "Prop_CameraWhiteBalance_Vector4_Array"),
            (e[(e.Prop_CameraDistortionFunction_Int32_Array = 2072)] =
              "Prop_CameraDistortionFunction_Int32_Array"),
            (e[(e.Prop_CameraDistortionCoefficients_Float_Array = 2073)] =
              "Prop_CameraDistortionCoefficients_Float_Array"),
            (e[(e.Prop_ExpectedControllerType_String = 2074)] =
              "Prop_ExpectedControllerType_String"),
            (e[(e.HmdTrackingStyle_Int32 = 2075)] = "HmdTrackingStyle_Int32"),
            (e[(e.DriverProvidedChaperoneVisibility_Bool = 2076)] =
              "DriverProvidedChaperoneVisibility_Bool"),
            (e[(e.HmdColumnCorrectionSettingPrefix_String = 2077)] =
              "HmdColumnCorrectionSettingPrefix_String"),
            (e[(e.CameraSupportsCompatibilityModes_Bool = 2078)] =
              "CameraSupportsCompatibilityModes_Bool"),
            (e[(e.SupportsRoomViewDepthProjection_Bool = 2079)] =
              "SupportsRoomViewDepthProjection_Bool"),
            (e[(e.DisplayAvailableFrameRates_Float_Array = 2080)] =
              "DisplayAvailableFrameRates_Float_Array"),
            (e[(e.DisplaySupportsRuntimeFramerateChange_Bool = 2084)] =
              "DisplaySupportsRuntimeFramerateChange_Bool"),
            (e[(e.DisplaySupportsAnalogGain_Bool = 2085)] =
              "DisplaySupportsAnalogGain_Bool"),
            (e[(e.DisplayMinAnalogGain_Float = 2086)] =
              "DisplayMinAnalogGain_Float"),
            (e[(e.DisplayMaxAnalogGain_Float = 2087)] =
              "DisplayMaxAnalogGain_Float"),
            (e[(e.DashboardScale_Float = 2091)] = "DashboardScale_Float"),
            (e[(e.PeerButtonInfo_String = 2092)] = "PeerButtonInfo_String"),
            (e[(e.IpdUIRangeMinMeters_Float = 2100)] =
              "IpdUIRangeMinMeters_Float"),
            (e[(e.IpdUIRangeMaxMeters_Float = 2101)] =
              "IpdUIRangeMaxMeters_Float"),
            (e[(e.Hmd_SupportsHDCP14LegacyCompat_Bool = 2102)] =
              "Hmd_SupportsHDCP14LegacyCompat_Bool"),
            (e[(e.Hmd_SupportsMicMonitoring_Bool = 2103)] =
              "Hmd_SupportsMicMonitoring_Bool"),
            (e[(e.Hmd_SupportsDisplayPortTrainingMode_Bool = 2104)] =
              "Hmd_SupportsDisplayPortTrainingMode_Bool"),
            (e[(e.Hmd_SupportsRoomViewDirect_Bool = 2105)] =
              "Hmd_SupportsRoomViewDirect_Bool"),
            (e[(e.Hmd_SupportsAppThrottling_Bool = 2106)] =
              "Hmd_SupportsAppThrottling_Bool"),
            (e[(e.Hmd_SupportsGpuBusMonitoring_Bool = 2107)] =
              "Hmd_SupportsGpuBusMonitoring_Bool"),
            (e[(e.DriverRequestedMuraCorrectionMode_Int32 = 2200)] =
              "DriverRequestedMuraCorrectionMode_Int32"),
            (e[(e.DriverRequestedMuraFeather_InnerLeft_Int32 = 2201)] =
              "DriverRequestedMuraFeather_InnerLeft_Int32"),
            (e[(e.DriverRequestedMuraFeather_InnerRight_Int32 = 2202)] =
              "DriverRequestedMuraFeather_InnerRight_Int32"),
            (e[(e.DriverRequestedMuraFeather_InnerTop_Int32 = 2203)] =
              "DriverRequestedMuraFeather_InnerTop_Int32"),
            (e[(e.DriverRequestedMuraFeather_InnerBottom_Int32 = 2204)] =
              "DriverRequestedMuraFeather_InnerBottom_Int32"),
            (e[(e.DriverRequestedMuraFeather_OuterLeft_Int32 = 2205)] =
              "DriverRequestedMuraFeather_OuterLeft_Int32"),
            (e[(e.DriverRequestedMuraFeather_OuterRight_Int32 = 2206)] =
              "DriverRequestedMuraFeather_OuterRight_Int32"),
            (e[(e.DriverRequestedMuraFeather_OuterTop_Int32 = 2207)] =
              "DriverRequestedMuraFeather_OuterTop_Int32"),
            (e[(e.DriverRequestedMuraFeather_OuterBottom_Int32 = 2208)] =
              "DriverRequestedMuraFeather_OuterBottom_Int32"),
            (e[(e.Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303)] =
              "Audio_SupportsDualSpeakerAndJackOutput_Bool"),
            (e[(e.AttachedDeviceId_String = 3e3)] = "AttachedDeviceId_String"),
            (e[(e.SupportedButtons_Uint64 = 3001)] = "SupportedButtons_Uint64"),
            (e[(e.Axis0Type_Int32 = 3002)] = "Axis0Type_Int32"),
            (e[(e.Axis1Type_Int32 = 3003)] = "Axis1Type_Int32"),
            (e[(e.Axis2Type_Int32 = 3004)] = "Axis2Type_Int32"),
            (e[(e.Axis3Type_Int32 = 3005)] = "Axis3Type_Int32"),
            (e[(e.Axis4Type_Int32 = 3006)] = "Axis4Type_Int32"),
            (e[(e.ControllerRoleHint_Int32 = 3007)] =
              "ControllerRoleHint_Int32"),
            (e[(e.FieldOfViewLeftDegrees_Float = 4e3)] =
              "FieldOfViewLeftDegrees_Float"),
            (e[(e.FieldOfViewRightDegrees_Float = 4001)] =
              "FieldOfViewRightDegrees_Float"),
            (e[(e.FieldOfViewTopDegrees_Float = 4002)] =
              "FieldOfViewTopDegrees_Float"),
            (e[(e.FieldOfViewBottomDegrees_Float = 4003)] =
              "FieldOfViewBottomDegrees_Float"),
            (e[(e.TrackingRangeMinimumMeters_Float = 4004)] =
              "TrackingRangeMinimumMeters_Float"),
            (e[(e.TrackingRangeMaximumMeters_Float = 4005)] =
              "TrackingRangeMaximumMeters_Float"),
            (e[(e.ModeLabel_String = 4006)] = "ModeLabel_String"),
            (e[(e.IconPathName_String = 5e3)] = "IconPathName_String"),
            (e[(e.NamedIconPathDeviceOff_String = 5001)] =
              "NamedIconPathDeviceOff_String"),
            (e[(e.NamedIconPathDeviceSearching_String = 5002)] =
              "NamedIconPathDeviceSearching_String"),
            (e[(e.NamedIconPathDeviceSearchingAlert_String = 5003)] =
              "NamedIconPathDeviceSearchingAlert_String"),
            (e[(e.NamedIconPathDeviceReady_String = 5004)] =
              "NamedIconPathDeviceReady_String"),
            (e[(e.NamedIconPathDeviceReadyAlert_String = 5005)] =
              "NamedIconPathDeviceReadyAlert_String"),
            (e[(e.NamedIconPathDeviceNotReady_String = 5006)] =
              "NamedIconPathDeviceNotReady_String"),
            (e[(e.NamedIconPathDeviceStandby_String = 5007)] =
              "NamedIconPathDeviceStandby_String"),
            (e[(e.NamedIconPathDeviceAlertLow_String = 5008)] =
              "NamedIconPathDeviceAlertLow_String"),
            (e[(e.DisplayHiddenArea_Binary_Start = 5100)] =
              "DisplayHiddenArea_Binary_Start"),
            (e[(e.DisplayHiddenArea_Binary_End = 5150)] =
              "DisplayHiddenArea_Binary_End"),
            (e[(e.ParentContainer = 5151)] = "ParentContainer"),
            (e[(e.UserConfigPath_String = 6e3)] = "UserConfigPath_String"),
            (e[(e.InstallPath_String = 6001)] = "InstallPath_String"),
            (e[(e.HasDisplayComponent_Bool = 6002)] =
              "HasDisplayComponent_Bool"),
            (e[(e.HasControllerComponent_Bool = 6003)] =
              "HasControllerComponent_Bool"),
            (e[(e.HasCameraComponent_Bool = 6004)] = "HasCameraComponent_Bool"),
            (e[(e.HasDriverDirectModeComponent_Bool = 6005)] =
              "HasDriverDirectModeComponent_Bool"),
            (e[(e.HasVirtualDisplayComponent_Bool = 6006)] =
              "HasVirtualDisplayComponent_Bool"),
            (e[(e.HasSpatialAnchorsSupport_Bool = 6007)] =
              "HasSpatialAnchorsSupport_Bool"),
            (e[(e.ControllerType_String = 7e3)] = "ControllerType_String"),
            (e[(e.LegacyInputProfile_String = 7001)] =
              "LegacyInputProfile_String"),
            (e[(e.VendorSpecific_Reserved_Start = 1e4)] =
              "VendorSpecific_Reserved_Start"),
            (e[(e.VendorSpecific_Reserved_End = 10999)] =
              "VendorSpecific_Reserved_End"),
            (e[(e.TrackedDeviceProperty_Max = 1e6)] =
              "TrackedDeviceProperty_Max");
        })(Br || (Br = {})),
        (function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.TrackingSystemName_String = 1e3)] =
              "TrackingSystemName_String"),
            (e[(e.ModelNumber_String = 1001)] = "ModelNumber_String"),
            (e[(e.SerialNumber_String = 1002)] = "SerialNumber_String"),
            (e[(e.RenderModelName_String = 1003)] = "RenderModelName_String"),
            (e[(e.WillDriftInYaw_Bool = 1004)] = "WillDriftInYaw_Bool"),
            (e[(e.ManufacturerName_String = 1005)] = "ManufacturerName_String"),
            (e[(e.TrackingFirmwareVersion_String = 1006)] =
              "TrackingFirmwareVersion_String"),
            (e[(e.HardwareRevision_String = 1007)] = "HardwareRevision_String"),
            (e[(e.AllWirelessDongleDescriptions_String = 1008)] =
              "AllWirelessDongleDescriptions_String"),
            (e[(e.ConnectedWirelessDongle_String = 1009)] =
              "ConnectedWirelessDongle_String"),
            (e[(e.DeviceIsWireless_Bool = 1010)] = "DeviceIsWireless_Bool"),
            (e[(e.DeviceIsCharging_Bool = 1011)] = "DeviceIsCharging_Bool"),
            (e[(e.DeviceBatteryPercentage_Float = 1012)] =
              "DeviceBatteryPercentage_Float"),
            (e[(e.StatusDisplayTransform_Matrix34 = 1013)] =
              "StatusDisplayTransform_Matrix34"),
            (e[(e.Firmware_UpdateAvailable_Bool = 1014)] =
              "Firmware_UpdateAvailable_Bool"),
            (e[(e.Firmware_ManualUpdate_Bool = 1015)] =
              "Firmware_ManualUpdate_Bool"),
            (e[(e.Firmware_ManualUpdateURL_String = 1016)] =
              "Firmware_ManualUpdateURL_String"),
            (e[(e.HardwareRevision_Uint64 = 1017)] = "HardwareRevision_Uint64"),
            (e[(e.FirmwareVersion_Uint64 = 1018)] = "FirmwareVersion_Uint64"),
            (e[(e.FPGAVersion_Uint64 = 1019)] = "FPGAVersion_Uint64"),
            (e[(e.VRCVersion_Uint64 = 1020)] = "VRCVersion_Uint64"),
            (e[(e.RadioVersion_Uint64 = 1021)] = "RadioVersion_Uint64"),
            (e[(e.DongleVersion_Uint64 = 1022)] = "DongleVersion_Uint64"),
            (e[(e.BlockServerShutdown_Bool = 1023)] =
              "BlockServerShutdown_Bool"),
            (e[(e.CanUnifyCoordinateSystemWithHmd_Bool = 1024)] =
              "CanUnifyCoordinateSystemWithHmd_Bool"),
            (e[(e.ContainsProximitySensor_Bool = 1025)] =
              "ContainsProximitySensor_Bool"),
            (e[(e.DeviceProvidesBatteryStatus_Bool = 1026)] =
              "DeviceProvidesBatteryStatus_Bool"),
            (e[(e.DeviceCanPowerOff_Bool = 1027)] = "DeviceCanPowerOff_Bool"),
            (e[(e.Firmware_ProgrammingTarget_String = 1028)] =
              "Firmware_ProgrammingTarget_String"),
            (e[(e.DeviceClass_Int32 = 1029)] = "DeviceClass_Int32"),
            (e[(e.HasCamera_Bool = 1030)] = "HasCamera_Bool"),
            (e[(e.DriverVersion_String = 1031)] = "DriverVersion_String"),
            (e[(e.Firmware_ForceUpdateRequired_Bool = 1032)] =
              "Firmware_ForceUpdateRequired_Bool"),
            (e[(e.ViveSystemButtonFixRequired_Bool = 1033)] =
              "ViveSystemButtonFixRequired_Bool"),
            (e[(e.ParentDriver_Uint64 = 1034)] = "ParentDriver_Uint64"),
            (e[(e.ResourceRoot_String = 1035)] = "ResourceRoot_String"),
            (e[(e.RegisteredDeviceType_String = 1036)] =
              "RegisteredDeviceType_String"),
            (e[(e.InputProfilePath_String = 1037)] = "InputProfilePath_String"),
            (e[(e.NeverTracked_Bool = 1038)] = "NeverTracked_Bool"),
            (e[(e.NumCameras_Int32 = 1039)] = "NumCameras_Int32"),
            (e[(e.CameraFrameLayout_Int32 = 1040)] = "CameraFrameLayout_Int32"),
            (e[(e.CameraStreamFormat_Int32 = 1041)] =
              "CameraStreamFormat_Int32"),
            (e[(e.AdditionalDeviceSettingsPath_String = 1042)] =
              "AdditionalDeviceSettingsPath_String"),
            (e[(e.DevicePowerUsage_Float = 1052)] = "DevicePowerUsage_Float"),
            (e[(e.ReportsTimeSinceVSync_Bool = 2e3)] =
              "ReportsTimeSinceVSync_Bool"),
            (e[(e.SecondsFromVsyncToPhotons_Float = 2001)] =
              "SecondsFromVsyncToPhotons_Float"),
            (e[(e.DisplayFrequency_Float = 2002)] = "DisplayFrequency_Float"),
            (e[(e.UserIpdMeters_Float = 2003)] = "UserIpdMeters_Float"),
            (e[(e.CurrentUniverseId_Uint64 = 2004)] =
              "CurrentUniverseId_Uint64"),
            (e[(e.PreviousUniverseId_Uint64 = 2005)] =
              "PreviousUniverseId_Uint64"),
            (e[(e.DisplayFirmwareVersion_Uint64 = 2006)] =
              "DisplayFirmwareVersion_Uint64"),
            (e[(e.IsOnDesktop_Bool = 2007)] = "IsOnDesktop_Bool"),
            (e[(e.DisplayMCType_Int32 = 2008)] = "DisplayMCType_Int32"),
            (e[(e.DisplayMCOffset_Float = 2009)] = "DisplayMCOffset_Float"),
            (e[(e.DisplayMCScale_Float = 2010)] = "DisplayMCScale_Float"),
            (e[(e.EdidVendorID_Int32 = 2011)] = "EdidVendorID_Int32"),
            (e[(e.DisplayMCImageLeft_String = 2012)] =
              "DisplayMCImageLeft_String"),
            (e[(e.DisplayMCImageRight_String = 2013)] =
              "DisplayMCImageRight_String"),
            (e[(e.DisplayGCBlackClamp_Float = 2014)] =
              "DisplayGCBlackClamp_Float"),
            (e[(e.EdidProductID_Int32 = 2015)] = "EdidProductID_Int32"),
            (e[(e.CameraToHeadTransform_Matrix34 = 2016)] =
              "CameraToHeadTransform_Matrix34"),
            (e[(e.DisplayGCType_Int32 = 2017)] = "DisplayGCType_Int32"),
            (e[(e.DisplayGCOffset_Float = 2018)] = "DisplayGCOffset_Float"),
            (e[(e.DisplayGCScale_Float = 2019)] = "DisplayGCScale_Float"),
            (e[(e.DisplayGCPrescale_Float = 2020)] = "DisplayGCPrescale_Float"),
            (e[(e.DisplayGCImage_String = 2021)] = "DisplayGCImage_String"),
            (e[(e.LensCenterLeftU_Float = 2022)] = "LensCenterLeftU_Float"),
            (e[(e.LensCenterLeftV_Float = 2023)] = "LensCenterLeftV_Float"),
            (e[(e.LensCenterRightU_Float = 2024)] = "LensCenterRightU_Float"),
            (e[(e.LensCenterRightV_Float = 2025)] = "LensCenterRightV_Float"),
            (e[(e.UserHeadToEyeDepthMeters_Float = 2026)] =
              "UserHeadToEyeDepthMeters_Float"),
            (e[(e.CameraFirmwareVersion_Uint64 = 2027)] =
              "CameraFirmwareVersion_Uint64"),
            (e[(e.CameraFirmwareDescription_String = 2028)] =
              "CameraFirmwareDescription_String"),
            (e[(e.DisplayFPGAVersion_Uint64 = 2029)] =
              "DisplayFPGAVersion_Uint64"),
            (e[(e.DisplayBootloaderVersion_Uint64 = 2030)] =
              "DisplayBootloaderVersion_Uint64"),
            (e[(e.DisplayHardwareVersion_Uint64 = 2031)] =
              "DisplayHardwareVersion_Uint64"),
            (e[(e.AudioFirmwareVersion_Uint64 = 2032)] =
              "AudioFirmwareVersion_Uint64"),
            (e[(e.CameraCompatibilityMode_Int32 = 2033)] =
              "CameraCompatibilityMode_Int32"),
            (e[(e.ScreenshotHorizontalFieldOfViewDegrees_Float = 2034)] =
              "ScreenshotHorizontalFieldOfViewDegrees_Float"),
            (e[(e.ScreenshotVerticalFieldOfViewDegrees_Float = 2035)] =
              "ScreenshotVerticalFieldOfViewDegrees_Float"),
            (e[(e.DisplaySuppressed_Bool = 2036)] = "DisplaySuppressed_Bool"),
            (e[(e.DisplayAllowNightMode_Bool = 2037)] =
              "DisplayAllowNightMode_Bool"),
            (e[(e.DisplayMCImageWidth_Int32 = 2038)] =
              "DisplayMCImageWidth_Int32"),
            (e[(e.DisplayMCImageHeight_Int32 = 2039)] =
              "DisplayMCImageHeight_Int32"),
            (e[(e.DisplayMCImageNumChannels_Int32 = 2040)] =
              "DisplayMCImageNumChannels_Int32"),
            (e[(e.DisplayMCImageData_Binary = 2041)] =
              "DisplayMCImageData_Binary"),
            (e[(e.SecondsFromPhotonsToVblank_Float = 2042)] =
              "SecondsFromPhotonsToVblank_Float"),
            (e[(e.DriverDirectModeSendsVsyncEvents_Bool = 2043)] =
              "DriverDirectModeSendsVsyncEvents_Bool"),
            (e[(e.DisplayDebugMode_Bool = 2044)] = "DisplayDebugMode_Bool"),
            (e[(e.GraphicsAdapterLuid_Uint64 = 2045)] =
              "GraphicsAdapterLuid_Uint64"),
            (e[(e.DriverProvidedChaperonePath_String = 2048)] =
              "DriverProvidedChaperonePath_String"),
            (e[(e.ExpectedTrackingReferenceCount_Int32 = 2049)] =
              "ExpectedTrackingReferenceCount_Int32"),
            (e[(e.ExpectedControllerCount_Int32 = 2050)] =
              "ExpectedControllerCount_Int32"),
            (e[(e.NamedIconPathControllerLeftDeviceOff_String = 2051)] =
              "NamedIconPathControllerLeftDeviceOff_String"),
            (e[(e.NamedIconPathControllerRightDeviceOff_String = 2052)] =
              "NamedIconPathControllerRightDeviceOff_String"),
            (e[(e.NamedIconPathTrackingReferenceDeviceOff_String = 2053)] =
              "NamedIconPathTrackingReferenceDeviceOff_String"),
            (e[(e.DoNotApplyPrediction_Bool = 2054)] =
              "DoNotApplyPrediction_Bool"),
            (e[(e.CameraToHeadTransforms_Matrix34_Array = 2055)] =
              "CameraToHeadTransforms_Matrix34_Array"),
            (e[(e.DistortionMeshResolution_Int32 = 2056)] =
              "DistortionMeshResolution_Int32"),
            (e[(e.DriverIsDrawingControllers_Bool = 2057)] =
              "DriverIsDrawingControllers_Bool"),
            (e[(e.DriverRequestsApplicationPause_Bool = 2058)] =
              "DriverRequestsApplicationPause_Bool"),
            (e[(e.DriverRequestsReducedRendering_Bool = 2059)] =
              "DriverRequestsReducedRendering_Bool"),
            (e[(e.MinimumIpdStepMeters_Float = 2060)] =
              "MinimumIpdStepMeters_Float"),
            (e[(e.AudioBridgeFirmwareVersion_Uint64 = 2061)] =
              "AudioBridgeFirmwareVersion_Uint64"),
            (e[(e.ImageBridgeFirmwareVersion_Uint64 = 2062)] =
              "ImageBridgeFirmwareVersion_Uint64"),
            (e[(e.ImuToHeadTransform_Matrix34 = 2063)] =
              "ImuToHeadTransform_Matrix34"),
            (e[(e.ImuFactoryGyroBias_Vector3 = 2064)] =
              "ImuFactoryGyroBias_Vector3"),
            (e[(e.ImuFactoryGyroScale_Vector3 = 2065)] =
              "ImuFactoryGyroScale_Vector3"),
            (e[(e.ImuFactoryAccelerometerBias_Vector3 = 2066)] =
              "ImuFactoryAccelerometerBias_Vector3"),
            (e[(e.ImuFactoryAccelerometerScale_Vector3 = 2067)] =
              "ImuFactoryAccelerometerScale_Vector3"),
            (e[(e.ConfigurationIncludesLighthouse20Features_Bool = 2069)] =
              "ConfigurationIncludesLighthouse20Features_Bool"),
            (e[(e.Prop_AdditionalRadioFeatures_Uint64 = 2070)] =
              "Prop_AdditionalRadioFeatures_Uint64"),
            (e[(e.Prop_CameraWhiteBalance_Vector4_Array = 2071)] =
              "Prop_CameraWhiteBalance_Vector4_Array"),
            (e[(e.Prop_CameraDistortionFunction_Int32_Array = 2072)] =
              "Prop_CameraDistortionFunction_Int32_Array"),
            (e[(e.Prop_CameraDistortionCoefficients_Float_Array = 2073)] =
              "Prop_CameraDistortionCoefficients_Float_Array"),
            (e[(e.Prop_ExpectedControllerType_String = 2074)] =
              "Prop_ExpectedControllerType_String"),
            (e[(e.HmdTrackingStyle_Int32 = 2075)] = "HmdTrackingStyle_Int32"),
            (e[(e.DriverProvidedChaperoneVisibility_Bool = 2076)] =
              "DriverProvidedChaperoneVisibility_Bool"),
            (e[(e.HmdColumnCorrectionSettingPrefix_String = 2077)] =
              "HmdColumnCorrectionSettingPrefix_String"),
            (e[(e.CameraSupportsCompatibilityModes_Bool = 2078)] =
              "CameraSupportsCompatibilityModes_Bool"),
            (e[(e.SupportsRoomViewDepthProjection_Bool = 2079)] =
              "SupportsRoomViewDepthProjection_Bool"),
            (e[(e.DisplayAvailableFrameRates_Float_Array = 2080)] =
              "DisplayAvailableFrameRates_Float_Array"),
            (e[(e.DisplaySupportsRuntimeFramerateChange_Bool = 2084)] =
              "DisplaySupportsRuntimeFramerateChange_Bool"),
            (e[(e.DisplaySupportsAnalogGain_Bool = 2085)] =
              "DisplaySupportsAnalogGain_Bool"),
            (e[(e.DisplayMinAnalogGain_Float = 2086)] =
              "DisplayMinAnalogGain_Float"),
            (e[(e.DisplayMaxAnalogGain_Float = 2087)] =
              "DisplayMaxAnalogGain_Float"),
            (e[(e.DashboardScale_Float = 2091)] = "DashboardScale_Float"),
            (e[(e.PeerButtonInfo_String = 2092)] = "PeerButtonInfo_String"),
            (e[(e.IpdUIRangeMinMeters_Float = 2100)] =
              "IpdUIRangeMinMeters_Float"),
            (e[(e.IpdUIRangeMaxMeters_Float = 2101)] =
              "IpdUIRangeMaxMeters_Float"),
            (e[(e.Hmd_SupportsHDCP14LegacyCompat_Bool = 2102)] =
              "Hmd_SupportsHDCP14LegacyCompat_Bool"),
            (e[(e.Hmd_SupportsMicMonitoring_Bool = 2103)] =
              "Hmd_SupportsMicMonitoring_Bool"),
            (e[(e.Hmd_SupportsDisplayPortTrainingMode_Bool = 2104)] =
              "Hmd_SupportsDisplayPortTrainingMode_Bool"),
            (e[(e.Hmd_SupportsRoomViewDirect_Bool = 2105)] =
              "Hmd_SupportsRoomViewDirect_Bool"),
            (e[(e.Hmd_SupportsAppThrottling_Bool = 2106)] =
              "Hmd_SupportsAppThrottling_Bool"),
            (e[(e.Hmd_SupportsGpuBusMonitoring_Bool = 2107)] =
              "Hmd_SupportsGpuBusMonitoring_Bool"),
            (e[(e.DriverRequestedMuraCorrectionMode_Int32 = 2200)] =
              "DriverRequestedMuraCorrectionMode_Int32"),
            (e[(e.DriverRequestedMuraFeather_InnerLeft_Int32 = 2201)] =
              "DriverRequestedMuraFeather_InnerLeft_Int32"),
            (e[(e.DriverRequestedMuraFeather_InnerRight_Int32 = 2202)] =
              "DriverRequestedMuraFeather_InnerRight_Int32"),
            (e[(e.DriverRequestedMuraFeather_InnerTop_Int32 = 2203)] =
              "DriverRequestedMuraFeather_InnerTop_Int32"),
            (e[(e.DriverRequestedMuraFeather_InnerBottom_Int32 = 2204)] =
              "DriverRequestedMuraFeather_InnerBottom_Int32"),
            (e[(e.DriverRequestedMuraFeather_OuterLeft_Int32 = 2205)] =
              "DriverRequestedMuraFeather_OuterLeft_Int32"),
            (e[(e.DriverRequestedMuraFeather_OuterRight_Int32 = 2206)] =
              "DriverRequestedMuraFeather_OuterRight_Int32"),
            (e[(e.DriverRequestedMuraFeather_OuterTop_Int32 = 2207)] =
              "DriverRequestedMuraFeather_OuterTop_Int32"),
            (e[(e.DriverRequestedMuraFeather_OuterBottom_Int32 = 2208)] =
              "DriverRequestedMuraFeather_OuterBottom_Int32"),
            (e[(e.Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303)] =
              "Audio_SupportsDualSpeakerAndJackOutput_Bool"),
            (e[(e.AttachedDeviceId_String = 3e3)] = "AttachedDeviceId_String"),
            (e[(e.SupportedButtons_Uint64 = 3001)] = "SupportedButtons_Uint64"),
            (e[(e.Axis0Type_Int32 = 3002)] = "Axis0Type_Int32"),
            (e[(e.Axis1Type_Int32 = 3003)] = "Axis1Type_Int32"),
            (e[(e.Axis2Type_Int32 = 3004)] = "Axis2Type_Int32"),
            (e[(e.Axis3Type_Int32 = 3005)] = "Axis3Type_Int32"),
            (e[(e.Axis4Type_Int32 = 3006)] = "Axis4Type_Int32"),
            (e[(e.ControllerRoleHint_Int32 = 3007)] =
              "ControllerRoleHint_Int32"),
            (e[(e.FieldOfViewLeftDegrees_Float = 4e3)] =
              "FieldOfViewLeftDegrees_Float"),
            (e[(e.FieldOfViewRightDegrees_Float = 4001)] =
              "FieldOfViewRightDegrees_Float"),
            (e[(e.FieldOfViewTopDegrees_Float = 4002)] =
              "FieldOfViewTopDegrees_Float"),
            (e[(e.FieldOfViewBottomDegrees_Float = 4003)] =
              "FieldOfViewBottomDegrees_Float"),
            (e[(e.TrackingRangeMinimumMeters_Float = 4004)] =
              "TrackingRangeMinimumMeters_Float"),
            (e[(e.TrackingRangeMaximumMeters_Float = 4005)] =
              "TrackingRangeMaximumMeters_Float"),
            (e[(e.ModeLabel_String = 4006)] = "ModeLabel_String"),
            (e[(e.IconPathName_String = 5e3)] = "IconPathName_String"),
            (e[(e.NamedIconPathDeviceOff_String = 5001)] =
              "NamedIconPathDeviceOff_String"),
            (e[(e.NamedIconPathDeviceSearching_String = 5002)] =
              "NamedIconPathDeviceSearching_String"),
            (e[(e.NamedIconPathDeviceSearchingAlert_String = 5003)] =
              "NamedIconPathDeviceSearchingAlert_String"),
            (e[(e.NamedIconPathDeviceReady_String = 5004)] =
              "NamedIconPathDeviceReady_String"),
            (e[(e.NamedIconPathDeviceReadyAlert_String = 5005)] =
              "NamedIconPathDeviceReadyAlert_String"),
            (e[(e.NamedIconPathDeviceNotReady_String = 5006)] =
              "NamedIconPathDeviceNotReady_String"),
            (e[(e.NamedIconPathDeviceStandby_String = 5007)] =
              "NamedIconPathDeviceStandby_String"),
            (e[(e.NamedIconPathDeviceAlertLow_String = 5008)] =
              "NamedIconPathDeviceAlertLow_String"),
            (e[(e.DisplayHiddenArea_Binary_Start = 5100)] =
              "DisplayHiddenArea_Binary_Start"),
            (e[(e.DisplayHiddenArea_Binary_End = 5150)] =
              "DisplayHiddenArea_Binary_End"),
            (e[(e.ParentContainer = 5151)] = "ParentContainer"),
            (e[(e.UserConfigPath_String = 6e3)] = "UserConfigPath_String"),
            (e[(e.InstallPath_String = 6001)] = "InstallPath_String"),
            (e[(e.HasDisplayComponent_Bool = 6002)] =
              "HasDisplayComponent_Bool"),
            (e[(e.HasControllerComponent_Bool = 6003)] =
              "HasControllerComponent_Bool"),
            (e[(e.HasCameraComponent_Bool = 6004)] = "HasCameraComponent_Bool"),
            (e[(e.HasDriverDirectModeComponent_Bool = 6005)] =
              "HasDriverDirectModeComponent_Bool"),
            (e[(e.HasVirtualDisplayComponent_Bool = 6006)] =
              "HasVirtualDisplayComponent_Bool"),
            (e[(e.HasSpatialAnchorsSupport_Bool = 6007)] =
              "HasSpatialAnchorsSupport_Bool"),
            (e[(e.ControllerType_String = 7e3)] = "ControllerType_String"),
            (e[(e.LegacyInputProfile_String = 7001)] =
              "LegacyInputProfile_String"),
            (e[(e.VendorSpecific_Reserved_Start = 1e4)] =
              "VendorSpecific_Reserved_Start"),
            (e[(e.VendorSpecific_Reserved_End = 10999)] =
              "VendorSpecific_Reserved_End"),
            (e[(e.TrackedDeviceProperty_Max = 1e6)] =
              "TrackedDeviceProperty_Max");
        })(Ur || (Ur = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.ButtonEnter = 1)] = "ButtonEnter"),
            (e[(e.ButtonLeave = 2)] = "ButtonLeave"),
            (e[(e.Snap = 3)] = "Snap"),
            (e[(e.Sliding = 4)] = "Sliding"),
            (e[(e.SlidingEdge = 5)] = "SlidingEdge");
        })(Gr || (Gr = {}));
      let Wr;
      function zr() {
        if (!Hr()) return Wr || (Wr = jr()), Wr;
        let e = (function (e) {
          if (!Hr() || !window.document.cookie) return null;
          let t = document.cookie.match("(^|; )" + e + "=([^;]*)");
          return t && t[2] ? decodeURIComponent(t[2]) : null;
        })("sessionid");
        return e || (e = jr()), e;
      }
      function jr() {
        let e = (function () {
          let e = "";
          for (let n = 0; n < 24; n++)
            e += ((t = 0),
            (r = 35),
            (t = Math.ceil(t)),
            (r = Math.floor(r)),
            Math.floor(Math.random() * (r - t + 1)) + t).toString(36);
          var t, r;
          return e;
        })();
        return (
          (function (e, t, r, n) {
            if (!Hr()) return;
            n || (n = "/");
            let o = "";
            if (void 0 !== r && r) {
              let e = new Date();
              e.setTime(e.getTime() + 864e5 * r),
                (o = "; expires=" + e.toUTCString());
            }
            document.cookie =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(t) +
              o +
              ";path=" +
              n;
          })("sessionid", e, 0),
          e
        );
      }
      const qr = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        SUPPORTED_LANGUAGES: [],
        COUNTRY: "",
        AVATAR_BASE_URL: "",
        MEDIA_CDN_COMMUNITY_URL: "",
        MEDIA_CDN_URL: "",
        CLAN_CDN_ASSET_URL: "",
        COMMUNITY_CDN_URL: "",
        COMMUNITY_CDN_ASSET_URL: "",
        BASE_URL_SHARED_CDN: "",
        STORE_CDN_URL: "",
        PUBLIC_SHARED_URL: "",
        COMMUNITY_BASE_URL: "",
        CHAT_BASE_URL: "",
        STORE_BASE_URL: "",
        STORE_CHECKOUT_BASE_URL: "",
        LOGIN_BASE_URL: "",
        SUPPORT_BASE_URL: "",
        STORE_ICON_BASE_URL: "",
        IMG_URL: "",
        STEAMTV_BASE_URL: "",
        HELP_BASE_URL: "",
        PARTNER_BASE_URL: "",
        STATS_BASE_URL: "",
        INTERNAL_STATS_BASE_URL: "",
        BASE_URL_STORE_CDN_ASSETS: "",
        IN_CLIENT: !1,
        USE_POPUPS: !1,
        IN_MOBILE: !1,
        IN_MOBILE_WEBVIEW: !1,
        IN_TENFOOT: !1,
        PLATFORM: "",
        SNR: "",
        LAUNCHER_TYPE: 0,
        EREALM: 0,
        IN_CHROMEOS: !1,
        TESLA: !1,
        LOCAL_HOSTNAME: "",
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        FROM_WEB: !1,
        WEBSITE_ID: "Unknown",
        get SESSIONID() {
          return zr();
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        IN_STEAMUI: !1,
        IN_GAMEPADUI: !1,
        IN_STEAMUI_SHARED_CONTEXT: !1,
        DECK_DISPLAY_MODE: !1,
        ON_DECK: !1,
        ON_STEAMOS: !1,
        IN_GAMESCOPE: !1,
        IN_LOGIN: !1,
        IN_LOGIN_REFRESH: !1,
        USE_LONGEST_LOC_STRING: !1,
        SILENT_STARTUP: !1,
      };
      qr.FOO = !1;
      Xt().createContext({});
      function Kr(e, t) {
        return (function (e, t) {
          let r = e.findIndex(t);
          return r >= 0 && (e.splice(r, 1), !0);
        })(e, (e) => t == e);
      }
      class $r {
        constructor() {
          this.m_vecCallbacks = [];
        }
        Register(e) {
          this.m_vecCallbacks.push(e);
          return {
            Unregister: () => {
              Kr(this.m_vecCallbacks, e);
            },
          };
        }
        Dispatch(...e) {
          for (const t of Array.from(this.m_vecCallbacks)) t(...e);
        }
        ClearAllCallbacks() {
          this.m_vecCallbacks = [];
        }
        CountRegistered() {
          return this.m_vecCallbacks.length;
        }
      }
      e(
        [Jt],
        class {
          Schedule(e, t) {
            this.IsScheduled() && this.Cancel(),
              (this.m_fnCallback = t),
              (this.m_schTimer = window.setTimeout(this.ScheduledInternal, e));
          }
          IsScheduled() {
            return void 0 !== this.m_schTimer;
          }
          Cancel() {
            this.m_schTimer &&
              (clearTimeout(this.m_schTimer), (this.m_schTimer = void 0));
          }
          ScheduledInternal() {
            this.m_schTimer = void 0;
            let e = this.m_fnCallback;
            (this.m_fnCallback = void 0), e();
          }
        }.prototype,
        "ScheduledInternal",
        null
      );
      e(
        [Jt],
        class {
          constructor() {
            this.m_vecCallbacks = [];
          }
          Push(e) {
            this.m_vecCallbacks.push(e);
          }
          PushArrayRemove(e, t) {
            this.m_vecCallbacks.push(() => Kr(e, t));
          }
          Unregister() {
            for (let e of this.m_vecCallbacks) e();
            this.m_vecCallbacks = [];
          }
          GetUnregisterFunc() {
            return this.Unregister;
          }
        }.prototype,
        "Unregister",
        null
      );
      var Xr;
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Ago = 1)] = "Ago"),
          (e[(e.Remaining = 2)] = "Remaining");
      })(Xr || (Xr = {}));
      new Map();
      new Map(), new Map();
      new Map(), new Map(), new Map(), new Map(), new Map(), new Map();
      class Qr {
        constructor() {
          (this.m_mapTokens = new Map()),
            (this.m_mapFallbackTokens = new Map()),
            (this.m_cbkTokensChanged = new $r());
        }
        static InstallErrorReportingStore(e) {
          this.sm_ErrorReportingStore = e;
        }
        static GetLanguageFallback(e) {
          return "sc_schinese" === e ? "schinese" : "english";
        }
        static GetELanguageFallback(e) {
          return 29 === e ? 6 : 0;
        }
        static IsELanguageValidInRealm(e, t) {
          return (
            t === (29 === e ? gr.k_ESteamRealmChina : gr.k_ESteamRealmGlobal)
          );
        }
        static GetLanguageListForRealms(e) {
          const t = new Array();
          for (let r = 0; r < 30; r++)
            for (const n of e)
              if (this.IsELanguageValidInRealm(r, n)) {
                t.push(r);
                break;
              }
          return t;
        }
        InitFromObjects(e, t, r, n, o) {
          o || this.m_mapTokens.clear();
          const i = Object.assign(Object.assign({}, r || {}), e),
            a = Object.assign(Object.assign({}, n || {}), t || {});
          this.AddTokens(i, a), this.m_cbkTokensChanged.Dispatch();
        }
        InitDirect(e, t) {
          this.m_mapTokens.clear(),
            this.m_mapFallbackTokens.clear(),
            this.AddTokens(e, t),
            this.m_cbkTokensChanged.Dispatch();
        }
        AddTokens(e, t) {
          Object.keys(e).forEach((t) => {
            this.m_mapTokens.set(t, e[t]);
          }),
            t &&
              Object.keys(t).forEach((e) => {
                this.m_mapTokens.has(e) || this.m_mapTokens.set(e, t[e]),
                  this.m_mapFallbackTokens.set(e, t[e]);
              });
        }
        GetTokensChangedCallbackList() {
          return this.m_cbkTokensChanged;
        }
        GetPreferredLocales() {
          return this.m_rgLocalesToUse
            ? this.m_rgLocalesToUse
            : navigator && navigator.languages
            ? navigator.languages
            : ["en-US"];
        }
        GetELanguageFallbackOrder(e = null) {
          let t = new Array();
          if (
            (t.push(Zt(qr.LANGUAGE)),
            (qr.SUPPORTED_LANGUAGES || []).forEach((e) => {
              e.value != qr.LANGUAGE && t.push(Zt(e.value));
            }),
            e)
          ) {
            Qr.GetLanguageListForRealms(e).forEach((e) => {
              -1 == t.indexOf(e) && t.push(e);
            });
          }
          return t;
        }
        SetPreferredLocales(e) {
          this.m_rgLocalesToUse = e;
        }
        BLooksLikeToken(e) {
          return e && e.length > 0 && "#" == e.charAt(0);
        }
        LocalizeIfToken(e, t) {
          return this.BLooksLikeToken(e) ? this.LocalizeString(e, t) : e;
        }
        LocalizeString(e, t) {
          if (!this.BLooksLikeToken(e)) return;
          let r = this.m_mapTokens.get(e.substring(1));
          if (void 0 !== r) return r;
          !t &&
            Qr.sm_ErrorReportingStore &&
            Qr.sm_ErrorReportingStore.ReportError(
              new Error(
                `Unable to find localization token '${e}' for language '${qr.LANGUAGE}', ${this.m_mapTokens.size} tokens in map`
              ),
              { bIncludeMessageInIdentifier: !0 }
            );
        }
        LocalizeStringFromFallback(e) {
          if (!e || 0 == e.length || "#" != e.charAt(0)) return;
          let t = this.m_mapFallbackTokens.get(e.substring(1));
          return void 0 !== t ? t : void 0;
        }
      }
      function Yr(e, ...t) {
        let r = en.LocalizeString(e);
        return void 0 === r ? e : Jr(r, ...t);
      }
      function Jr(e, ...t) {
        return 0 == t.length
          ? e
          : (e = e.replace(/%(?:(\d+)\$)?s/g, function (e, r) {
              if (r <= t.length && r >= 1) {
                let e = t[r - 1];
                return String(null == e ? "" : e);
              }
              return e;
            }));
      }
      const Zr = {
        english: "en",
        german: "de",
        french: "fr",
        italian: "it",
        korean: "ko",
        latam: "es-419",
        spanish: "es",
        schinese: "zh-cn",
        tchinese: "zh-tw",
        russian: "ru",
        thai: "th",
        japanese: "ja",
        brazilian: "pt-br",
        portuguese: "pt",
        polish: "pl",
        danish: "da",
        dutch: "nl",
        finnish: "fi",
        norwegian: "no",
        swedish: "sv",
        hungarian: "hu",
        czech: "cs",
        romanian: "ro",
        turkish: "tr",
        arabic: "ar",
        bulgarian: "bg",
        greek: "el",
        ukrainian: "uk",
        vietnamese: "vi",
        sc_schinese: "zh-cn",
        koreana: "ko",
      };
      const en = new Qr();
      function tn(e, t, ...r) {
        console.assert
          ? 0 == r.length
            ? console.assert(!!e, t)
            : console.assert(!!e, t, ...r)
          : e || console.warn(t, ...r);
      }
      window.LocalizationManager = en;
      class rn {
        constructor(e, t, r) {
          if (((this.m_rgLoadingLinks = []), (this.m_rgLoadingLinks = []), r))
            for (let e = 0; e < r.length; e++) this.AddLink(r[e], !0);
          else {
            let t = e.getElementsByTagName("link");
            for (let e = 0; e < t.length; e++) {
              let r = t[e];
              this.AddLink(r, !1);
            }
          }
        }
        AddLink(e, t) {
          if (t) {
            let t = !1;
            try {
              (e.sheet && e.sheet.cssRules && 0 != e.sheet.cssRules.length) ||
                (t = !0);
            } catch (e) {}
            t &&
              (e.addEventListener("load", this.OnLinkLoad),
              this.m_rgLoadingLinks.push(e));
          } else
            e.addEventListener("load", this.OnLinkLoad),
              this.m_rgLoadingLinks.push(e);
        }
        SetTarget(e) {
          (this.m_fnRender = e),
            0 == this.m_rgLoadingLinks.length &&
              (this.m_fnRender(), (this.m_fnRender = void 0));
        }
        OnLinkLoad(e) {
          e.currentTarget.removeEventListener("load", this.OnLinkLoad),
            Kr(this.m_rgLoadingLinks, e.currentTarget),
            0 == this.m_rgLoadingLinks.length &&
              (this.m_fnRender(), (this.m_fnRender = void 0));
        }
      }
      var nn;
      e([Jt], rn.prototype, "OnLinkLoad", null),
        (function (e) {
          (e[(e.k_ENoiseGateLevel_Off = 0)] = "k_ENoiseGateLevel_Off"),
            (e[(e.k_ENoiseGateLevel_Low = 1)] = "k_ENoiseGateLevel_Low"),
            (e[(e.k_ENoiseGateLevel_Medium = 2)] = "k_ENoiseGateLevel_Medium"),
            (e[(e.k_ENoiseGateLevel_High = 3)] = "k_ENoiseGateLevel_High");
        })(nn || (nn = {}));
      function on(e, t) {
        return !!e && "object" == typeof e.SteamClient && t in e.SteamClient;
      }
      function an(e, t) {
        if (!e) return !1;
        const [r, n] = t.split(".", 2);
        return r && n && on(e, r) && n in e.SteamClient[r];
      }
      var ln, sn;
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Minimized = 1)] = "Minimized"),
          (e[(e.Hidden = 2)] = "Hidden"),
          (e[(e.TooltipHint = 4)] = "TooltipHint"),
          (e[(e.NoTaskbarIcon = 8)] = "NoTaskbarIcon"),
          (e[(e.Resizable = 16)] = "Resizable"),
          (e[(e.ScalePosition = 32)] = "ScalePosition"),
          (e[(e.ScaleSize = 64)] = "ScaleSize"),
          (e[(e.Maximized = 128)] = "Maximized"),
          (e[(e.BackgroundTransparent = 256)] = "BackgroundTransparent"),
          (e[(e.NotFocusable = 512)] = "NotFocusable"),
          (e[(e.FullScreen = 1024)] = "FullScreen"),
          (e[(e.Fullscreen_Exclusive = 2048)] = "Fullscreen_Exclusive"),
          (e[(e.ApplyBrowserScaleToDimensions = 4096)] =
            "ApplyBrowserScaleToDimensions"),
          (e[(e.AlwaysOnTop = 8192)] = "AlwaysOnTop"),
          (e[(e.NoWindowShadow = 16384)] = "NoWindowShadow"),
          (e[(e.NoMinimize = 32768)] = "NoMinimize"),
          (e[(e.PopUpMenuHint = 65536)] = "PopUpMenuHint"),
          (e[(e.IgnoreSavedSize = 131072)] = "IgnoreSavedSize"),
          (e[(e.NoRoundedCorners = 262144)] = "NoRoundedCorners"),
          (e[(e.ForceRoundedCorners = 524288)] = "ForceRoundedCorners"),
          (e[(e.OverrideRedirect = 1048576)] = "OverrideRedirect");
      })(ln || (ln = {})),
        (function (e) {
          (e[(e.Overlay = 0)] = "Overlay"),
            (e[(e.Notification = 1)] = "Notification"),
            (e[(e.Tooltip = 2)] = "Tooltip"),
            (e[(e.PopupContextMenu = 3)] = "PopupContextMenu"),
            (e[(e.StandaloneContextMenu = 4)] = "StandaloneContextMenu");
        })(sn || (sn = {}));
      $t.createContext({ ownerWindow: window });
      class un {
        constructor(e, t) {
          (this.m_bCreated = !1),
            (this.m_onCreateRender = null),
            (this.m_bFocused = !1),
            tn(
              e,
              "Name is required.  This is an internal name, different from title."
            ),
            (this.m_strName = e),
            (this.m_rgParams = t),
            this.m_rgParams.target_browser &&
              (this.m_strName +=
                "_uid" + this.m_rgParams.target_browser.m_unPID),
            (this.m_bCreateHidden = !!(t.eCreationFlags & ln.Hidden)),
            (this.m_strTitle = t.title),
            delete this.m_rgParams.title;
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
          "window_moved" == e.data && this.OnResize(),
            "popup-created" == e.data && this.OnCreateInternal();
        }
        Show(e = hr.k_EWindowBringToFrontAndForceOS) {
          var t, r;
          let n;
          (n =
            "boolean" == typeof e
              ? e
                ? hr.k_EWindowBringToFrontAndForceOS
                : hr.k_EWindowBringToFrontInvalid
              : e),
            window.SteamClient && (this.m_rgParams.eCreationFlags |= ln.Hidden),
            this.m_rgParams.eCreationFlags & ln.NotFocusable &&
              (n = hr.k_EWindowBringToFrontInvalid),
            this.BIsValid() &&
              (this.BIsClosed()
                ? ((this.m_popup = void 0), (this.m_element = void 0))
                : n != hr.k_EWindowBringToFrontInvalid && this.Focus(n));
          let o,
            i,
            a,
            l = fn.GetExistingPopup(this.m_strName);
          (l && !this.m_rgParams.replace_existing_popup) ||
            ((this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams)),
            l
              ? ((i = l.m_element),
                (o = l.m_popup),
                l.ReleasePopup(),
                (a = l.m_renderWhenReady),
                fn.RemoveTrackedPopup(l),
                o.removeEventListener("beforeunload", l.OnBeforeUnloadEvent),
                o.removeEventListener("unload", l.OnUnload),
                o.removeEventListener("resize", l.OnResizeEvent),
                o.removeEventListener("focus", this.OnFocusInternal),
                o.removeEventListener("blur", this.OnBlurInternal),
                o.removeEventListener("drop", l.OnDrop),
                o.removeEventListener("dragover", l.OnDragOver),
                o.removeEventListener("message", this.OnMessage))
              : (({ popup: o, element: i } = dn.CreatePopup(
                  this.m_strName,
                  this.m_rgParams
                )),
                (a = new rn(o.document, i))),
            o &&
              i &&
              ((o.document.title = this.m_strTitle),
              o.addEventListener("beforeunload", this.OnBeforeUnloadEvent),
              o.addEventListener("unload", this.OnUnload),
              o.addEventListener("resize", this.OnResizeEvent),
              o.addEventListener("focus", this.OnFocusInternal),
              o.addEventListener("blur", this.OnBlurInternal),
              o.addEventListener("drop", this.OnDrop),
              o.addEventListener("dragover", this.OnDragOver),
              o.addEventListener("message", this.OnMessage),
              qr.LANGUAGE &&
                o.document.documentElement.setAttribute(
                  "lang",
                  Zr[qr.LANGUAGE] || null
                ),
              (this.m_popup = o),
              (this.m_element = i),
              (this.m_renderWhenReady = a),
              this.m_renderWhenReady.SetTarget(() =>
                this.RenderInternal(this.m_popup, this.m_element, n)
              )),
            fn.AddTrackedPopup(this),
            l
              ? (this.OnCreateInternal(),
                n != hr.k_EWindowBringToFrontInvalid && this.Focus(n))
              : (null ===
                  (r =
                    null === (t = SteamClient.Features) || void 0 === t
                      ? void 0
                      : t.SteamInitsPopups) || void 0 === r
                  ? void 0
                  : r.call(t)) || this.OnCreateInternal());
        }
        RemoveEventListeners() {
          this.window.removeEventListener(
            "beforeunload",
            this.OnBeforeUnloadEvent
          ),
            this.window.removeEventListener("unload", this.OnUnload),
            this.window.removeEventListener("resize", this.OnResizeEvent),
            this.window.removeEventListener("focus", this.OnFocusInternal),
            this.window.removeEventListener("blur", this.OnBlurInternal),
            this.window.removeEventListener("drop", this.OnDrop),
            this.window.removeEventListener("dragover", this.OnDragOver),
            this.window.removeEventListener("message", this.OnMessage);
        }
        RenderInternal(e, t, r) {
          var n;
          this.m_bCreated
            ? (this.browser_info &&
                ((n = this.browser_info).m_eBrowserType ==
                  br.EBrowserType_OpenVROverlay ||
                  n.m_eBrowserType ==
                    br.EBrowserType_OpenVROverlay_Dashboard) &&
                (t.ownerDocument.body.className += " VR"),
              this.Render(e, t),
              this.OnLoad(),
              e.SteamClient &&
                !this.m_bCreateHidden &&
                (r != hr.k_EWindowBringToFrontInvalid
                  ? e.SteamClient.Window.BringToFront(r)
                  : e.SteamClient.Window.ShowWindow()))
            : (this.m_onCreateRender = () => this.RenderInternal(e, t, r));
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
            fn.RemoveTrackedPopup(this),
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
        Focus(e = hr.k_EWindowBringToFrontAndForceOS) {
          e != hr.k_EWindowBringToFrontInvalid &&
            (this.m_popup &&
            void 0 !== this.m_popup.SteamClient &&
            void 0 !== this.m_popup.SteamClient.Window
              ? this.m_popup.SteamClient.Window.BringToFront(e)
              : this.m_popup && this.m_popup.focus());
        }
        Close() {
          this.m_popup &&
            (an(this.m_popup.window, "Window.Close")
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
          return (
            this.m_popup &&
            !this.m_popup.closed &&
            "visible" == this.m_popup.document.visibilityState
          );
        }
        BIsFocused() {
          return this.BIsVisible() && this.m_popup.document.hasFocus();
        }
        OnFocusInternal() {
          this.m_popup &&
            this.m_popup.document.body.classList.add("WindowFocus"),
            (this.m_bFocused = !0),
            this.OnFocus();
        }
        OnBlurInternal() {
          this.m_popup &&
            this.m_popup.document.body.classList.remove("WindowFocus"),
            (this.m_bFocused = !1),
            this.OnBlur();
        }
        get focused() {
          return this.m_bFocused;
        }
        GetWindowRestoreDetails() {
          return this.m_popup &&
            !this.m_popup.closed &&
            this.m_popup.SteamClient
            ? new Promise((e, t) => {
                this.m_popup.SteamClient.Window.GetWindowRestoreDetails((t) => {
                  e(t);
                });
              })
            : Promise.resolve("");
        }
        IsMinimized() {
          return this.m_popup &&
            !this.m_popup.closed &&
            this.m_popup.SteamClient &&
            this.m_popup.SteamClient.Window &&
            this.m_popup.SteamClient.Window.IsWindowMinimized
            ? new Promise((e, t) => {
                this.m_popup.SteamClient.Window.IsWindowMinimized((t) => {
                  e(t);
                });
              })
            : Promise.resolve(!1);
        }
        IsMaximized() {
          return this.m_popup &&
            !this.m_popup.closed &&
            this.m_popup.SteamClient &&
            this.m_popup.SteamClient.Window &&
            this.m_popup.SteamClient.Window.IsWindowMinimized
            ? new Promise((e, t) => {
                this.m_popup.SteamClient.Window.IsWindowMaximized((t) => {
                  e(t);
                });
              })
            : Promise.resolve(!1);
        }
        ReleasePopup() {
          this.OnClose(), (this.m_popup = null);
        }
        OnResize() {
          this.IsMaximized().then((e) => {
            e
              ? this.m_popup.document.body.classList.add("Maximized")
              : this.m_popup.document.body.classList.remove("Maximized");
          });
        }
        OnBeforeUnload() {}
        OnFocus() {}
        OnBlur() {}
      }
      e([$], un.prototype, "m_bFocused", void 0),
        e([Jt], un.prototype, "OnMessage", null),
        e([Jt], un.prototype, "RenderInternal", null),
        e([Jt], un.prototype, "OnCreateInternal", null),
        e([Jt], un.prototype, "OnResizeEvent", null),
        e([Jt], un.prototype, "OnBeforeUnloadEvent", null),
        e([Jt], un.prototype, "OnUnload", null),
        e([Jt], un.prototype, "OnFocusInternal", null),
        e([Jt], un.prototype, "OnBlurInternal", null);
      class cn extends un {
        constructor(e, t, r, n) {
          super(e, r), this.SetSavedDimensionsKey(t), (this.m_bExpires = n);
        }
        BIsInOverlay() {
          return (
            this.browser_info &&
            0 != this.browser_info.m_unPID &&
            -1 != this.browser_info.m_nBrowserID
          );
        }
        SetSavedDimensionsKey(e) {
          this.m_strSavedDimensionsKey = e;
        }
        UpdateParamsBeforeShow(e) {
          return (
            !this.m_strSavedDimensionsKey ||
            e.bIgnoreSavedDimensions ||
            e.strRestoreDetails
              ? e.strRestoreDetails &&
                ((this.m_strInitialSavedDimensionsKey =
                  this.GetSavedDimensionsKey()),
                fn.SetRestoreDetails(
                  this.m_strInitialSavedDimensionsKey,
                  e.strRestoreDetails,
                  this.m_bExpires
                ))
              : ((this.m_strInitialSavedDimensionsKey =
                  this.GetSavedDimensionsKey()),
                (e.strRestoreDetails = fn.GetRestoreDetails(
                  this.m_strInitialSavedDimensionsKey
                ))),
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
            this.m_popup.setTimeout(() => {
              this.GetWindowRestoreDetails().then((t) => {
                let r =
                  this.m_rgParams.strRestoreDetails == t &&
                  e == this.m_strInitialSavedDimensionsKey;
                this.m_popup &&
                  this.m_strSavedDimensionsKey &&
                  t &&
                  !r &&
                  (fn.SetRestoreDetails(e, t, this.m_bExpires),
                  (this.m_rgParams.strRestoreDetails = t),
                  (this.m_strInitialSavedDimensionsKey = e),
                  this.OnResizeComplete(t));
              });
            }, 30);
          }
        }
        OnBeforeUnload() {
          this.QueryAndStoreWindowPosition(), super.OnBeforeUnload();
        }
        OnClose() {}
        SaveWindowPosition(e) {
          fn.SetRestoreDetails(this.GetSavedDimensionsKey(), e, !1),
            (this.m_rgParams.strRestoreDetails = e);
        }
      }
      e([Jt], cn.prototype, "QueryAndStoreWindowPosition", null);
      class dn {
        constructor() {
          if (
            ((this.m_bShuttingDown = !1),
            (this.m_mapPopups = $.map([], { deep: !1 })),
            (this.m_rgShutdownCallbacks = []),
            (this.m_rgPopupCreatedCallbacks = []),
            (this.m_unCurrentAccountID = 0),
            (this.m_mapRestoreDetails = new Map()),
            (this.m_bSaveRequired = !1),
            !{ NODE_ENV: "production", STEAM_BUILD: "buildbot" }.MOBILE_BUILD)
          ) {
            window.addEventListener("beforeunload", (e) => {
              var t, r, n, o;
              this.m_bShuttingDown = !0;
              for (let e of this.m_rgShutdownCallbacks) e();
              let i = [];
              this.m_mapPopups.forEach((e) => {
                e.BIsValid() && !e.BIsClosed() && i.push(e);
              });
              for (let e of i)
                (null ===
                  (r =
                    null === (t = e.window) || void 0 === t
                      ? void 0
                      : t.SteamClient.Browser) || void 0 === r
                  ? void 0
                  : r.SetShouldExitSteamOnBrowserClosed) &&
                  e.window.SteamClient.Browser.SetShouldExitSteamOnBrowserClosed(
                    !1
                  ),
                  (null === (n = e.window) || void 0 === n
                    ? void 0
                    : n.SteamClient.Window.SetHideOnClose) &&
                    (null === (o = e.window) ||
                      void 0 === o ||
                      o.SteamClient.Window.SetHideOnClose(!1)),
                  e.Close();
              this.m_bSaveRequired && this.SaveSavedDimensionStore(),
                this.m_mapPopups.clear();
            });
            let e = document.querySelector("head");
            tn(e, "Couldn't find head element"),
              e &&
                ((this.m_DynamicCSSObserver = new MutationObserver(() => {
                  const e = Qt();
                  this.m_mapPopups.forEach((t) => {
                    Yt(t.window.document, e, !1);
                  });
                })),
                this.m_DynamicCSSObserver.observe(e, { childList: !0 }));
          }
        }
        BAnyPopupHasFocus() {
          for (const e of this.m_mapPopups.values()) if (e.focused) return !0;
          return !1;
        }
        BAnyMenuHasFocus() {
          for (const e of this.m_mapPopups.values())
            if (e.focused && e.params.eCreationFlags & ln.NoTaskbarIcon)
              return !0;
          return !1;
        }
        SetCurrentLoggedInAccountID(e) {
          this.m_unCurrentAccountID != e &&
            ((this.m_unCurrentAccountID = e),
            e
              ? this.LoadSavedDimensionStore()
              : this.ClearSavedDimensionStore());
        }
        AddShutdownCallback(e) {
          this.m_rgShutdownCallbacks.push(e);
        }
        AddPopupCreatedCallback(e) {
          this.m_rgPopupCreatedCallbacks.push(e);
        }
        AddTrackedPopup(e) {
          this.m_mapPopups.set(e.GetName(), e);
          for (let t of this.m_rgPopupCreatedCallbacks) t(e);
        }
        RemoveTrackedPopup(e) {
          this.m_mapPopups.delete(e.GetName());
        }
        GetExistingPopup(e) {
          return this.m_mapPopups.get(e);
        }
        GetPopups() {
          return this.m_mapPopups.values();
        }
        ClosePopupsOwnedByBrowser(e) {
          this.m_mapPopups.forEach((t) => {
            t.browser_info &&
              t.browser_info.m_nBrowserID == e.m_nBrowserID &&
              t.browser_info.m_unPID == e.m_unPID &&
              t.Close();
          });
        }
        static CreatePopup(e, t) {
          let r = t.dimensions || {},
            n = r.width || 300,
            o = r.height || 300,
            i = t.title,
            a = "width=" + n + ",height=" + o;
          void 0 !== r.left && (a += ",left=" + r.left),
            void 0 !== r.top && (a += ",top=" + r.top),
            (a += ",resizeable,status=0,toolbar=0,menubar=0,location=0");
          let l = "about:blank",
            s = [];
          s.push("createflags=" + t.eCreationFlags),
            t.minWidth && s.push("minwidth=" + t.minWidth),
            t.minHeight && s.push("minheight=" + t.minHeight),
            t.maxWidth &&
              t.maxWidth != 1 / 0 &&
              s.push("maxwidth=" + t.maxWidth),
            t.maxHeight &&
              t.maxHeight != 1 / 0 &&
              s.push("maxheight=" + t.maxHeight),
            t.target_browser
              ? (s.push("pid=" + t.target_browser.m_unPID),
                s.push("browser=" + t.target_browser.m_nBrowserID),
                t.target_browser.m_eBrowserType
                  ? s.push("browserType=" + t.target_browser.m_eBrowserType)
                  : t.browserType && s.push("browserType=" + t.browserType),
                t.availscreenwidth &&
                  t.availscreenheight &&
                  (s.push("screenavailwidth=" + t.availscreenwidth),
                  s.push("screenavailheight=" + t.availscreenheight)))
              : t.browserType && s.push("browserType=" + t.browserType),
            t.strVROverlayKey && s.push("vrOverlayKey=" + t.strVROverlayKey),
            t.strRestoreDetails &&
              s.push("restoredetails=" + t.strRestoreDetails),
            t.window_opener_id && s.push("openerid=" + t.window_opener_id),
            t.parent_container_popup_id &&
              s.push("parentcontainerpopupid=" + t.parent_container_popup_id),
            t.center_on_window &&
              void 0 === r.left &&
              void 0 === r.top &&
              s.push(
                "centerOnBrowserID=" +
                  t.center_on_window.SteamClient.Browser.GetBrowserID()
              ),
            t.strUserAgent &&
              s.push(
                "useragent=" +
                  t.strUserAgent +
                  "/" +
                  (function (e) {
                    switch (e) {
                      case 0:
                      default:
                        return "default";
                      case 1:
                        return "pw_dota2";
                      case 2:
                        return "nexon_dota2";
                      case 3:
                        return "steamcmd";
                      case 4:
                        return "pw_csgo";
                      case 5:
                        return "clientui";
                      case 6:
                        return "steamhdl";
                      case 7:
                        return "steamchina";
                      case 8:
                        return "singleapp";
                      case 9:
                        return "gameserver";
                    }
                  })(qr.LAUNCHER_TYPE)
              ),
            t.hwndParent && s.push("hwndParent=" + t.hwndParent),
            t.bPinned && s.push("pinned=true"),
            t.bModal && s.push("modal=true"),
            s && (l += "?" + s.join("&"));
          let u = (t.owner_window || window).open(l, e, a);
          if (!u)
            return (
              console.error(
                `Failed to create popup, browser/CEF may be blocking popups for "${window.location.origin}"`
              ),
              {}
            );
          let c = "";
          t.html_class && (c = `class="${t.html_class}"`);
          let d = "";
          t.body_class && (d = `class="${t.body_class}"`);
          let p = "";
          t.popup_class && (p = `class="${t.popup_class}"`);
          let f = `<!DOCTYPE html><html ${c}><head><title></title></head><body ${d}><div id="popup_target" ${p}></div></body></html>`;
          var m, h;
          return (
            u.document.write(f),
            (u.document.title = i),
            (m = u),
            (h = Qt()),
            Yt(m.document, h, !0),
            { popup: u, element: u.document.getElementById("popup_target") }
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
          this.m_mapRestoreDetails = void 0;
          let t = window.localStorage.getItem(e);
          if (t)
            try {
              let e = JSON.parse(t);
              this.m_mapRestoreDetails = new Map(e);
            } catch (e) {}
          this.m_mapRestoreDetails || (this.m_mapRestoreDetails = new Map());
        }
        SaveSavedDimensionStore() {
          if (!this.m_unCurrentAccountID || !this.m_bSaveRequired) return;
          let e = this.GetLocalStorageKey(),
            t = JSON.stringify(Array.from(this.m_mapRestoreDetails));
          window.localStorage.setItem(e, t), (this.m_bSaveRequired = !1);
        }
        DebouncedSaveSavedDimensionStore() {
          this.SaveSavedDimensionStore();
        }
        ClearSavedDimensionStore() {
          this.m_mapRestoreDetails.clear(), (this.m_bSaveRequired = !1);
        }
        GetRestoreDetails(e) {
          if (!this.m_mapRestoreDetails.has(e)) return "";
          let t = this.m_mapRestoreDetails.get(e);
          return (
            (t.last_used = Date.now()),
            (this.m_bSaveRequired = !0),
            t.strRestoreDetails
          );
        }
        SetRestoreDetails(e, t, r) {
          if (e) {
            if (t) {
              if (this.m_mapRestoreDetails.size > 50) {
                let e = null,
                  t = Date.now();
                for (let r of Array.from(this.m_mapRestoreDetails.keys())) {
                  let n = this.m_mapRestoreDetails.get(r);
                  n.last_used < t && n.bExpires && ((t = n.last_used), (e = r));
                }
                e && this.m_mapRestoreDetails.delete(e);
              }
              let n = {
                strRestoreDetails: t,
                last_used: Date.now(),
                bExpires: r,
              };
              this.m_mapRestoreDetails.set(e, n);
            } else this.m_mapRestoreDetails.delete(e);
            (this.m_bSaveRequired = !0),
              this.m_bShuttingDown
                ? this.SaveSavedDimensionStore()
                : this.DebouncedSaveSavedDimensionStore();
          }
        }
      }
      var pn;
      e(
        [
          Jt,
          ((pn = 100),
          function (e, t, r) {
            const n = r.value;
            r.value = function (...e) {
              let r = this[t + "_DebounceProperties"];
              void 0 === r &&
                (r = this[t + "_DebounceProperties"] =
                  { hTimer: void 0, nPending: 0 }),
                void 0 === r.hTimer
                  ? (n.apply(this, e),
                    (r.hTimer = window.setInterval(() => {
                      r.nPending > 0
                        ? (n.apply(this, e), (r.nPending = 0))
                        : (window.clearInterval(r.hTimer), (r.hTimer = void 0));
                    }, pn)))
                  : (r.nPending += 1);
            };
          }),
        ],
        dn.prototype,
        "DebouncedSaveSavedDimensionStore",
        null
      );
      let fn = (() => new dn())();
      window.g_PopupManager = fn;
      var mn = r(935);
      function hn(...e) {
        return e.reduce(
          (e, t) =>
            t
              ? "string" == typeof t
                ? e
                  ? `${e} ${t}`
                  : t
                : "object" == typeof t
                ? e
                  ? `${e} ${_n(t)}`
                  : _n(t)
                : e
              : e,
          ""
        );
      }
      function _n(e) {
        return Object.keys(e).reduce(
          (t, r) => (e[r] ? (t ? `${t} ${r}` : r) : t),
          ""
        );
      }
      r(808);
      function vn(e) {
        const t = e.color || "#FFFFFF";
        return Xt().createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_X_Line",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          Xt().createElement("line", {
            fill: "none",
            stroke: t,
            strokeWidth: "45",
            strokeMiterlimit: "10",
            x1: "212",
            y1: "212",
            x2: "44",
            y2: "44",
          }),
          Xt().createElement("line", {
            fill: "none",
            stroke: t,
            strokeWidth: "45",
            strokeMiterlimit: "10",
            x1: "44",
            y1: "212",
            x2: "212",
            y2: "44",
          })
        );
      }
      function gn(e) {
        const { className: t, color: r = "#020202" } = e;
        return Xt().createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            className: hn("SVGIcon_Button", "SVGIcon_Caution", t),
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          Xt().createElement(
            "g",
            { className: "triangle" },
            Xt().createElement("path", {
              stroke: r,
              strokeWidth: "16",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              d: "M127.9,76.632",
            }),
            Xt().createElement("path", {
              fill: "none",
              stroke: r,
              strokeWidth: "11",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "5",
              d: "M128.001,226.606c42.507,0,81.538,0,87.756,0c31.222,0,36.95-14.974,24.045-34.771c-6.921-10.617-78.297-122.962-89.163-140.254\tC141.859,37.613,138.542,29.393,128,29.393l0,0c-10.543,0-13.86,8.222-22.639,22.189C94.495,68.874,23.119,181.219,16.198,191.836 c-12.905,19.797-7.175,34.771,24.045,34.771C46.463,226.606,85.494,226.606,128.001,226.606",
            }),
            Xt().createElement("path", { fill: r, d: "M127.9,208.12" })
          ),
          Xt().createElement(
            "g",
            { className: "exclamation" },
            Xt().createElement("line", {
              fill: "none",
              stroke: r,
              strokeWidth: "16",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              x1: "127.9",
              y1: "76.632",
              x2: "127.9",
              y2: "160.07",
            }),
            Xt().createElement("path", {
              fill: r,
              d: "M127.9,208.12c-6.377,0-11.548-5.17-11.548-11.548c0-6.377,5.17-11.547,11.548-11.547 c6.377,0,11.547,5.17,11.547,11.547C139.447,202.95,134.277,208.12,127.9,208.12",
            })
          )
        );
      }
      function yn() {
        return Xt().createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Maximize",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          Xt().createElement("rect", {
            x: "24",
            y: "42.167",
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "18",
            strokeMiterlimit: "10",
            width: "208",
            height: "171.667",
          }),
          Xt().createElement("line", {
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "42",
            strokeMiterlimit: "10",
            x1: "24",
            y1: "54.01",
            x2: "232",
            y2: "54.01",
          })
        );
      }
      function bn() {
        return Xt().createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Minimize",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          Xt().createElement("line", {
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "18",
            strokeMiterlimit: "10",
            x1: "24",
            y1: "209.01",
            x2: "232",
            y2: "209.01",
          })
        );
      }
      function En() {
        return Xt().createElement(
          "svg",
          {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_Restore",
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          Xt().createElement("polyline", {
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "12",
            strokeMiterlimit: "10",
            points: "83,90.861 83,42.167 232,42.167 232,165.14 173,165.14 ",
          }),
          Xt().createElement("rect", {
            x: "24",
            y: "90.861",
            fill: "none",
            stroke: "rgb(120, 138, 146)",
            strokeWidth: "18",
            strokeMiterlimit: "10",
            width: "149",
            height: "122.973",
          })
        );
      }
      if (!$t.useState)
        throw new Error("mobx-react-lite requires React with Hooks support");
      if (!We)
        throw new Error(
          "mobx-react-lite requires mobx at least version 4 to be available"
        );
      var Sn = function (e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          o,
          i = r.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; )
            a.push(n.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            n && !n.done && (r = i.return) && r.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      };
      function Cn() {
        var e = Sn((0, $t.useState)(0), 2)[1];
        return (0, $t.useCallback)(function () {
          e(function (e) {
            return e + 1;
          });
        }, []);
      }
      var In = {};
      var wn,
        kn =
          ((wn = "observerBatching"),
          "function" == typeof Symbol
            ? Symbol.for(wn)
            : "__$mobx-react " + wn + "__");
      function Tn(e) {
        e();
      }
      var Rn = !1;
      function Dn() {
        return Rn;
      }
      function Pn(e) {
        return nt(e);
      }
      var An,
        xn = 1e4,
        On = 1e4,
        Fn = new Set();
      function Nn() {
        void 0 === An && (An = setTimeout(Vn, On));
      }
      function Vn() {
        An = void 0;
        var e = Date.now();
        Fn.forEach(function (t) {
          var r = t.current;
          r &&
            e >= r.cleanAt &&
            (r.reaction.dispose(), (t.current = null), Fn.delete(t));
        }),
          Fn.size > 0 && Nn();
      }
      var Mn = !1,
        Ln = [];
      var Bn = {};
      function Un(e) {
        return "observer" + e;
      }
      function Gn(e, t, r) {
        if ((void 0 === t && (t = "observed"), void 0 === r && (r = Bn), Dn()))
          return e();
        var n,
          o = (function (e) {
            return function () {
              Mn ? Ln.push(e) : e();
            };
          })((r.useForceUpdate || Cn)()),
          i = Xt().useRef(null);
        if (!i.current) {
          var a = new Ve(Un(t), function () {
              l.mounted ? o() : (a.dispose(), (i.current = null));
            }),
            l = (function (e) {
              return { cleanAt: Date.now() + xn, reaction: e };
            })(a);
          (i.current = l), (n = i), Fn.add(n), Nn();
        }
        var s = i.current.reaction;
        return (
          Xt().useDebugValue(s, Pn),
          Xt().useEffect(function () {
            var e;
            return (
              (e = i),
              Fn.delete(e),
              i.current
                ? (i.current.mounted = !0)
                : ((i.current = {
                    reaction: new Ve(Un(t), function () {
                      o();
                    }),
                    cleanAt: 1 / 0,
                  }),
                  o()),
              function () {
                i.current.reaction.dispose(), (i.current = null);
              }
            );
          }, []),
          (function (e) {
            (Mn = !0), (Ln = []);
            try {
              var t = e();
              Mn = !1;
              var r = Ln.length > 0 ? Ln : void 0;
              return (
                Xt().useLayoutEffect(
                  function () {
                    r &&
                      r.forEach(function (e) {
                        return e();
                      });
                  },
                  [r]
                ),
                t
              );
            } finally {
              Mn = !1;
            }
          })(function () {
            var t, r;
            if (
              (s.track(function () {
                try {
                  t = e();
                } catch (e) {
                  r = e;
                }
              }),
              r)
            )
              throw r;
            return t;
          })
        );
      }
      var Hn = function () {
        return (
          (Hn =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          Hn.apply(this, arguments)
        );
      };
      function Wn(e, t) {
        if (Dn()) return e;
        var r,
          n,
          o,
          i = Hn({ forwardRef: !1 }, t),
          a = e.displayName || e.name,
          l = function (t, r) {
            return Gn(function () {
              return e(t, r);
            }, a);
          };
        return (
          (l.displayName = a),
          (r = i.forwardRef
            ? (0, $t.memo)((0, $t.forwardRef)(l))
            : (0, $t.memo)(l)),
          (n = e),
          (o = r),
          Object.keys(n).forEach(function (e) {
            zn[e] ||
              Object.defineProperty(
                o,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
          }),
          (r.displayName = a),
          r
        );
      }
      var zn = { $$typeof: !0, render: !0, compare: !0, type: !0 };
      function jn(e) {
        var t = e.children,
          r = e.render,
          n = t || r;
        return "function" != typeof n ? null : Gn(n);
      }
      function qn(e, t, r, n, o) {
        var i = "children" === t ? "render" : "children",
          a = "function" == typeof e[t],
          l = "function" == typeof e[i];
        return a && l
          ? new Error(
              "MobX Observer: Do not use children and render in the same time in`" +
                r
            )
          : a || l
          ? null
          : new Error(
              "Invalid prop `" +
                o +
                "` of type `" +
                typeof e[t] +
                "` supplied to `" +
                r +
                "`, expected `function`."
            );
      }
      (jn.propTypes = { children: qn, render: qn }),
        (jn.displayName = "Observer");
      !(function (e) {
        e || (e = Tn),
          Ze({ reactionScheduler: e }),
          (("undefined" != typeof window
            ? window
            : void 0 !== r.g
            ? r.g
            : "undefined" != typeof self
            ? self
            : In)[kn] = !0);
      })(mn.unstable_batchedUpdates);
      var Kn = 0;
      var $n = {};
      function Xn(e) {
        return (
          $n[e] ||
            ($n[e] = (function (e) {
              if ("function" == typeof Symbol) return Symbol(e);
              var t = "__$mobx-react " + e + " (" + Kn + ")";
              return Kn++, t;
            })(e)),
          $n[e]
        );
      }
      function Qn(e, t) {
        if (Yn(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        var r = Object.keys(e),
          n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (var o = 0; o < r.length; o++)
          if (!Object.hasOwnProperty.call(t, r[o]) || !Yn(e[r[o]], t[r[o]]))
            return !1;
        return !0;
      }
      function Yn(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      }
      function Jn(e, t, r) {
        Object.hasOwnProperty.call(e, t)
          ? (e[t] = r)
          : Object.defineProperty(e, t, {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: r,
            });
      }
      var Zn = Xn("patchMixins"),
        eo = Xn("patchedDefinition");
      function to(e, t) {
        for (
          var r = this,
            n = arguments.length,
            o = new Array(n > 2 ? n - 2 : 0),
            i = 2;
          i < n;
          i++
        )
          o[i - 2] = arguments[i];
        t.locks++;
        try {
          var a;
          return null != e && (a = e.apply(this, o)), a;
        } finally {
          t.locks--,
            0 === t.locks &&
              t.methods.forEach(function (e) {
                e.apply(r, o);
              });
        }
      }
      function ro(e, t) {
        return function () {
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          to.call.apply(to, [this, e, t].concat(n));
        };
      }
      function no(e, t, r) {
        var n = (function (e, t) {
          var r = (e[Zn] = e[Zn] || {}),
            n = (r[t] = r[t] || {});
          return (n.locks = n.locks || 0), (n.methods = n.methods || []), n;
        })(e, t);
        n.methods.indexOf(r) < 0 && n.methods.push(r);
        var o = Object.getOwnPropertyDescriptor(e, t);
        if (!o || !o[eo]) {
          var i = e[t],
            a = oo(e, t, o ? o.enumerable : void 0, n, i);
          Object.defineProperty(e, t, a);
        }
      }
      function oo(e, t, r, n, o) {
        var i,
          a = ro(o, n);
        return (
          ((i = {})[eo] = !0),
          (i.get = function () {
            return a;
          }),
          (i.set = function (o) {
            if (this === e) a = ro(o, n);
            else {
              var i = oo(this, t, r, n, o);
              Object.defineProperty(this, t, i);
            }
          }),
          (i.configurable = !0),
          (i.enumerable = r),
          i
        );
      }
      var io = E || "$mobx",
        ao = Xn("isMobXReactObserver"),
        lo = Xn("isUnmounted"),
        so = Xn("skipRender"),
        uo = Xn("isForcingUpdate");
      function co(e) {
        var t = e.prototype;
        if (e[ao]) {
          var r = po(t);
          console.warn(
            "The provided component class (" +
              r +
              ") \n                has already been declared as an observer component."
          );
        } else e[ao] = !0;
        if (t.componentWillReact)
          throw new Error(
            "The componentWillReact life-cycle event is no longer supported"
          );
        if (e.__proto__ !== $t.PureComponent)
          if (t.shouldComponentUpdate) {
            if (t.shouldComponentUpdate !== mo)
              throw new Error(
                "It is not allowed to use shouldComponentUpdate in observer based components."
              );
          } else t.shouldComponentUpdate = mo;
        ho(t, "props"), ho(t, "state");
        var n = t.render;
        return (
          (t.render = function () {
            return fo.call(this, n);
          }),
          no(t, "componentWillUnmount", function () {
            var e;
            if (
              !0 !== Dn() &&
              (null === (e = this.render[io]) || void 0 === e || e.dispose(),
              (this[lo] = !0),
              !this.render[io])
            ) {
              var t = po(this);
              console.warn(
                "The reactive render of an observer class component (" +
                  t +
                  ") \n                was overriden after MobX attached. This may result in a memory leak if the \n                overriden reactive render was not properly disposed."
              );
            }
          }),
          e
        );
      }
      function po(e) {
        return (
          e.displayName ||
          e.name ||
          (e.constructor &&
            (e.constructor.displayName || e.constructor.name)) ||
          "<component>"
        );
      }
      function fo(e) {
        var t = this;
        if (!0 === Dn()) return e.call(this);
        Jn(this, so, !1), Jn(this, uo, !1);
        var r = po(this),
          n = e.bind(this),
          o = !1,
          i = new Ve(r + ".render()", function () {
            if (!o && ((o = !0), !0 !== t[lo])) {
              var e = !0;
              try {
                Jn(t, uo, !0),
                  t[so] || $t.Component.prototype.forceUpdate.call(t),
                  (e = !1);
              } finally {
                Jn(t, uo, !1), e && i.dispose();
              }
            }
          });
        function a() {
          o = !1;
          var e = void 0,
            t = void 0;
          if (
            (i.track(function () {
              try {
                t = (function (e, t) {
                  var r,
                    n = _e(e);
                  try {
                    r = t();
                  } finally {
                    ve(n);
                  }
                  return r;
                })(!1, n);
              } catch (t) {
                e = t;
              }
            }),
            e)
          )
            throw e;
          return t;
        }
        return (
          (i.reactComponent = this),
          (a[io] = i),
          (this.render = a),
          a.call(this)
        );
      }
      function mo(e, t) {
        return (
          Dn() &&
            console.warn(
              "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."
            ),
          this.state !== t || !Qn(this.props, e)
        );
      }
      function ho(e, t) {
        var r = Xn("reactProp_" + t + "_valueHolder"),
          n = Xn("reactProp_" + t + "_atomHolder");
        function o() {
          return this[n] || Jn(this, n, I("reactive " + t)), this[n];
        }
        Object.defineProperty(e, t, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            var e = !1;
            return (
              se && ue && (e = se(!0)),
              o.call(this).reportObserved(),
              se && ue && ue(e),
              this[r]
            );
          },
          set: function (e) {
            this[uo] || Qn(this[r], e)
              ? Jn(this, r, e)
              : (Jn(this, r, e),
                Jn(this, so, !0),
                o.call(this).reportChanged(),
                Jn(this, so, !1));
          },
        });
      }
      var _o = "function" == typeof Symbol && Symbol.for,
        vo = _o
          ? Symbol.for("react.forward_ref")
          : "function" == typeof $t.forwardRef &&
            (0, $t.forwardRef)(function (e) {
              return null;
            }).$$typeof,
        go = _o
          ? Symbol.for("react.memo")
          : "function" == typeof $t.memo &&
            (0, $t.memo)(function (e) {
              return null;
            }).$$typeof;
      function yo(e) {
        if (
          (!0 === e.isMobxInjector &&
            console.warn(
              "Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'"
            ),
          go && e.$$typeof === go)
        )
          throw new Error(
            "Mobx observer: You are trying to use 'observer' on a function component wrapped in either another observer or 'React.memo'. The observer already applies 'React.memo' for you."
          );
        if (vo && e.$$typeof === vo) {
          var t = e.render;
          if ("function" != typeof t)
            throw new Error("render property of ForwardRef was not a function");
          return (0, $t.forwardRef)(function () {
            var e = arguments;
            return (0, $t.createElement)(jn, null, function () {
              return t.apply(void 0, e);
            });
          });
        }
        return "function" != typeof e ||
          (e.prototype && e.prototype.render) ||
          e.isReactClass ||
          Object.prototype.isPrototypeOf.call($t.Component, e)
          ? co(e)
          : Wn(e);
      }
      if (!$t.Component)
        throw new Error("mobx-react requires React to be available");
      if (!$) throw new Error("mobx-react requires mobx to be available");
      function bo(e, t) {
        return (
          (function (e, t) {
            const [r, n] = $t.useState(e);
            return (
              $t.useEffect(() => {
                if (!e) {
                  const e = window.setTimeout(() => n(!1), t);
                  return () => window.clearTimeout(e);
                }
                n(!0);
              }, [e, t]),
              r
            );
          })(e, t) || e
        );
      }
      function Eo(e) {
        const [t, r] = Xt().useState(!1),
          n = Xt().useCallback(() => {
            an(e, "Window.IsWindowMaximized")
              ? e.SteamClient.Window.IsWindowMaximized((e) => {
                  r(e);
                })
              : r(
                  e.screen.availWidth == e.innerWidth &&
                    e.screen.availHeight == e.innerHeight
                );
          }, [e]);
        var o, i, a, l;
        return (
          (o = e),
          (i = "resize"),
          (a = n),
          $t.useEffect(() => {
            if (o && a)
              return (
                o.addEventListener(i, a, l), () => o.removeEventListener(i, a)
              );
          }, [o, i, a]),
          t
        );
      }
      function So(e) {
        const { popup: t, className: r } = e,
          n = (function (e, t) {
            var r = {};
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) &&
                t.indexOf(n) < 0 &&
                (r[n] = e[n]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var o = 0;
              for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                t.indexOf(n[o]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                  (r[n[o]] = e[n[o]]);
            }
            return r;
          })(e, ["popup", "className"]),
          o = Eo(t),
          i = Xt().useRef();
        return (
          Xt().useEffect(() => {
            const e = i.current;
            if (e && an(t, "Window.SetResizeGrip")) {
              let r = 0,
                n = 0;
              const o = e.getBoundingClientRect(),
                i = e.ownerDocument.defaultView;
              o &&
                i &&
                ((r = Math.ceil(i.innerWidth - o.left)),
                (n = Math.ceil(i.innerHeight - o.top))),
                t.SteamClient.Window.SetResizeGrip(r, n);
            }
            return () => {
              an(t, "Window.SetResizeGrip") &&
                t.SteamClient.Window.SetResizeGrip(0, 0);
            };
          }, [t]),
          o
            ? null
            : Xt().createElement(
                "div",
                Object.assign(
                  { className: hn("window_resize_grip", r), ref: i },
                  n
                )
              )
        );
      }
      function Co(e) {
        const { popup: t, bOSX: r } = e,
          [n, o] = $t.useState(),
          i = $t.useCallback(() => {
            t.SteamClient.Window.ToggleMaximize();
          }, [t]),
          a = $t.useCallback(() => {
            let e = t.screen.availWidth - t.innerWidth,
              r = t.screen.availHeight - t.innerHeight;
            return 0 === e && 0 === r;
          }, [t]),
          l = $t.useCallback(() => {
            if (an(t, "Window.IsWindowMaximized"))
              t.SteamClient.Window.IsWindowMaximized((e) => {
                e != n && o(e);
              });
            else {
              let e = a();
              e != n && o(e);
            }
          }, [t, a, n]);
        $t.useEffect(
          () => (
            l(),
            t.addEventListener("resize", l),
            () => t.removeEventListener("resize", l)
          ),
          [t, l]
        );
        const s = $t.useCallback(() => {
          i(), l();
        }, [i, l]);
        return $t.createElement(
          ko,
          {
            className: hn(
              n ? "restoreButton" : "maximizeButton",
              "windowControlButton"
            ),
            onClick: s,
          },
          !r && (n ? $t.createElement(En, null) : $t.createElement(yn, null))
        );
      }
      function Io(e) {
        const { popup: t, bOSX: r } = e,
          n = $t.useCallback(() => {
            t.SteamClient.Window.Minimize();
          }, [t]);
        return $t.createElement(
          ko,
          { className: "minimizeButton windowControlButton", onClick: n },
          !r && $t.createElement(bn, null)
        );
      }
      function wo(e) {
        const { popup: t, onClose: r, bOSX: n } = e,
          o = $t.useCallback(() => {
            t &&
              (an(t, "Window.Close")
                ? t.SteamClient.Window.Close()
                : t.close());
          }, [t]);
        return $t.createElement(
          ko,
          {
            className: "closeButton windowControlButton",
            onClick: null != r ? r : o,
          },
          !n && $t.createElement(vn, null)
        );
      }
      function ko(e) {
        const { className: t, onClick: r, children: n } = e;
        return $t.createElement(
          "div",
          { className: hn("title-area-icon", t), onClick: r },
          $t.createElement("div", { className: "title-area-icon-inner" }, n)
        );
      }
      function To(e) {
        const {
            className: t,
            style: r,
            hideActions: n,
            hideClose: o,
            hideMinMax: i,
            bOSX: a = "macos" == qr.PLATFORM,
            bForceWindowFocused: l,
            onClose: s,
            extraActions: u,
            popup: c,
            children: d,
          } = e,
          p = (function (e, t = 100) {
            const [r, n] = Xt().useState(!1),
              o = Xt().useCallback(() => n(!0), [n]),
              i = Xt().useCallback(() => n(!1), [n]);
            return (
              Xt().useEffect(
                () =>
                  e
                    ? (e.addEventListener("focus", o),
                      e.addEventListener("blur", i),
                      () => {
                        e.removeEventListener("focus", o),
                          e.removeEventListener("blur", i);
                      })
                    : void 0,
                [e, o, i]
              ),
              bo(r, t)
            );
          })(c);
        return $t.createElement(
          "div",
          {
            className: hn(
              "TitleBar",
              "title-area",
              a && "OSX",
              (p || l) && "WindowFocus",
              t
            ),
            style: r,
          },
          $t.createElement("div", { className: "title-area-highlight" }),
          $t.createElement("div", { className: "title-area-children" }, d),
          !n &&
            $t.createElement(
              $t.Fragment,
              null,
              u &&
                $t.createElement(
                  "div",
                  { className: "title-bar-actions extra-actions" },
                  u
                ),
              $t.createElement(
                "div",
                { className: "title-bar-actions window-controls" },
                !o && $t.createElement(wo, { popup: c, onClose: s, bOSX: a }),
                !i && $t.createElement(Co, { popup: c, bOSX: a }),
                !i && $t.createElement(Io, { popup: c, bOSX: a })
              )
            )
        );
      }
      var Ro = r(817),
        Do = r.n(Ro);
      const Po =
          r.p +
          "../../client/clientui/images/8669e97b288da32670e77181618c3dfb.png",
        Ao = Xt().memo(function (e) {
          const {
            className: t,
            size: r,
            string: n,
            position: o,
            static: i,
            msDelayAppear: a,
          } = e;
          let l = [Do().LoadingWrapper, "SteamLogoThrobber", xo(r)];
          const [s, u] = Xt().useState(!a);
          return (
            (0, $t.useEffect)(() => {
              if (s) return;
              const e = setTimeout(() => u(!0), a);
              return () => clearTimeout(e);
            }, [a, s]),
            void 0 === n && l.push(Do().noString),
            t && l.push(t),
            i && l.push(Do().Static),
            Xt().createElement(
              "div",
              {
                className: hn(
                  "center" == o && Do().throbber_center_wrapper,
                  a && Do().ThrobberDelayAppear,
                  s && Do().Visible
                ),
              },
              s &&
                Xt().createElement(
                  "div",
                  { className: l.join(" ") },
                  Xt().createElement(
                    "div",
                    { className: Do().NewThrobber },
                    Xt().createElement("img", { src: Po })
                  )
                ),
              Boolean(n) &&
                Xt().createElement("div", { className: Do().ThrobberText }, n)
            )
          );
        });
      Xt().memo(function (e) {
        const {
          className: t,
          size: r,
          string: n,
          position: o,
          static: i,
          msDelayAppear: a,
        } = e;
        let l = [Do().LoadingWrapper, "SteamLogoThrobber", xo(r)];
        const [s, u] = Xt().useState(!a);
        return (
          (0, $t.useEffect)(() => {
            if (s) return;
            const e = setTimeout(() => u(!0), a);
            return () => clearTimeout(e);
          }, [a, s]),
          void 0 === n && l.push(Do().noString),
          t && l.push(t),
          i && l.push(Do().Static),
          Xt().createElement(
            "div",
            {
              className: hn(
                "center" == o && Do().throbber_center_wrapper,
                a && Do().ThrobberDelayAppear,
                s && Do().Visible
              ),
            },
            s &&
              Xt().createElement(
                "div",
                { className: l.join(" ") },
                Xt().createElement(
                  "div",
                  { className: Do().Throbber },
                  Xt().createElement(Oo, { className: Do().base }),
                  Xt().createElement(Oo, { className: Do().blur })
                )
              ),
            Boolean(n) &&
              Xt().createElement("div", { className: Do().ThrobberText }, n)
          )
        );
      });
      function xo(e) {
        switch (e) {
          case "small":
            return Do().throbber_small;
          case "medium":
            return Do().throbber_medium;
          case "xlarge":
            return Do().throbber_xlarge;
          case "xxlarge":
            return Do().throbber_xxlarge;
          default:
            return Do().throbber_large;
        }
      }
      function Oo(e) {
        let t = "SVGIcon_Button SVGIcon_Throbber ";
        return (
          e.className && (t += e.className),
          Xt().createElement(
            "svg",
            {
              version: "1.1",
              id: "base",
              xmlns: "http://www.w3.org/2000/svg",
              className: t,
              x: "0px",
              y: "0px",
              width: "256px",
              height: "256px",
              viewBox: "0 0 256 256",
            },
            Xt().createElement(
              "g",
              { className: Do().partCircle },
              Xt().createElement("path", {
                className: Do().roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
              }),
              Xt().createElement("path", {
                className: Do().roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M201.432,101.166",
              }),
              Xt().createElement("path", {
                className: Do().roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
              })
            ),
            Xt().createElement(
              "g",
              { className: Do().mainOutline },
              Xt().createElement("path", {
                className: Do().roundFill,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              Xt().createElement("path", {
                className: Do().roundOuterOutline,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              Xt().createElement("path", {
                className: Do().roundThrobber01,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              Xt().createElement("path", {
                className: Do().roundThrobber02,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              Xt().createElement("path", {
                className: Do().roundThrobber03,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              Xt().createElement("path", {
                className: Do().roundThrobber04,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              Xt().createElement("path", {
                className: Do().roundThrobber05,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              Xt().createElement("path", {
                className: Do().roundThrobber06,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              Xt().createElement("path", {
                className: Do().roundThrobber07,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              Xt().createElement("path", {
                className: Do().roundThrobber08,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              Xt().createElement("path", {
                className: Do().roundThrobber09,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              Xt().createElement("path", {
                className: Do().roundThrobber10,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              Xt().createElement("path", {
                className: Do().roundThrobber11,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              Xt().createElement("path", {
                className: Do().roundThrobber12,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              Xt().createElement("path", {
                className: Do().roundThrobber13,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              Xt().createElement("path", {
                className: Do().roundThrobber14,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              Xt().createElement("path", {
                className: Do().roundThrobber15,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              })
            ),
            Xt().createElement(
              "g",
              { className: Do().bottomCircle },
              Xt().createElement("path", {
                fill: "#ffffff",
                d: "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
              })
            ),
            Xt().createElement(
              "g",
              { className: Do().topCircle },
              Xt().createElement("circle", {
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                cx: "161.731",
                cy: "101.274",
                r: "23.019",
              })
            )
          )
        );
      }
      var Fo;
      !(function (e) {
        (e[(e.SignIn = 0)] = "SignIn"),
          (e[(e.Loading = 1)] = "Loading"),
          (e[(e.Loaded = 2)] = "Loaded"),
          (e[(e.FailRetry = 3)] = "FailRetry"),
          (e[(e.OfflineMode = 4)] = "OfflineMode");
      })(Fo || (Fo = {}));
      class No {
        constructor() {
          this.m_eState = Fo.SignIn;
        }
        Init() {
          this.m_eState = Fo.SignIn;
        }
        get loadingState() {
          return this.m_eState;
        }
        SetLoadingState(e) {
          this.m_eState = e;
        }
      }
      e([$], No.prototype, "m_eState", void 0);
      let Vo = class extends $t.Component {
        ContextMenu(e) {
          e.preventDefault(), e.stopPropagation();
        }
        componentDidMount() {
          SteamClient.WebChat.GetLocalPersonaName().then((e) => {
            this.m_strPersonaName = e;
          }),
            SteamClient.WebChat.GetLocalAvatarBase64().then((e) => {
              this.m_strAvatarSource = e;
            });
        }
        render() {
          let e = this.props.offlineStore.loadingState,
            t = this.m_strPersonaName,
            r = this.m_strAvatarSource,
            n = "currentUserAvatar";
          "" == r && (n += " noAvatarImg");
          let o =
            "chat_main fullheight responsive_friends friends_loading_error";
          return (
            this.props.popup && this.props.popup.focused && (o += " focused"),
            $t.createElement(
              "div",
              { className: o, onContextMenu: this.ContextMenu },
              $t.createElement(
                "div",
                { className: "friendsListContainer fullheight" },
                $t.createElement(
                  "div",
                  { className: "friendlist" },
                  $t.createElement(To, { popup: this.props.popup.window }),
                  $t.createElement(
                    "div",
                    { className: "currentUserContainer" },
                    $t.createElement(
                      "div",
                      { className: "AvatarAndUser" },
                      "" != r &&
                        $t.createElement("img", { className: n, src: r }),
                      "" == r && $t.createElement("div", { className: n }),
                      $t.createElement(
                        "div",
                        { className: "labelHolder" },
                        $t.createElement(
                          "div",
                          { className: "statusAndName" },
                          $t.createElement(
                            "div",
                            { className: "playerName" },
                            t
                          )
                        ),
                        $t.createElement(
                          "div",
                          { className: "richPresenceContainer" },
                          $t.createElement(
                            "div",
                            { className: "gameName richPresenceLabel" },
                            Yr("#FriendsList_Offline_Disconnected")
                          )
                        )
                      )
                    )
                  ),
                  $t.createElement(
                    "div",
                    { className: "FriendsFailureContainer" },
                    $t.createElement(
                      "div",
                      { className: "friendsListInsetShadowCtn" },
                      $t.createElement("div", {
                        className: "frienListInsetShadowTop",
                      })
                    ),
                    e == Fo.SignIn && $t.createElement(Bo, null),
                    e == Fo.Loading && $t.createElement(Mo, null),
                    e == Fo.FailRetry && $t.createElement(Lo, null),
                    e == Fo.OfflineMode && $t.createElement(Uo, null)
                  )
                ),
                $t.createElement(So, { popup: this.props.popup.window })
              )
            )
          );
        }
      };
      function Mo() {
        return $t.createElement(
          "div",
          null,
          $t.createElement(
            "div",
            null,
            $t.createElement(Ao, {
              className: "friendsThrobber",
              size: "large",
              string: Yr("#FriendsList_StillLoadingSummary"),
              position: "center",
            })
          ),
          $t.createElement("div", { className: "summaryText" }),
          $t.createElement(
            "div",
            { className: "detailText" },
            Yr("#FriendsList_StillLoadingDetail")
          )
        );
      }
      function Lo() {
        return $t.createElement(
          "div",
          null,
          $t.createElement(
            "div",
            { className: "cautionIcon" },
            $t.createElement(gn, null)
          ),
          $t.createElement(
            "div",
            { className: "summaryText" },
            Yr("#FriendsList_OfflineOrFailure")
          ),
          $t.createElement(
            "div",
            { className: "detailText" },
            Yr("#FriendsList_OfflineDetail")
          ),
          $t.createElement(
            "div",
            null,
            $t.createElement(
              "button",
              {
                className: "retryButton",
                onClick: () => {
                  console.log("OnRetryClick"),
                    window.parent.postMessage(
                      { message: "ChatReloadRequest", state: void 0 },
                      "https://steamloopback.host"
                    );
                },
              },
              Yr("#Friends_RetryLoading")
            )
          )
        );
      }
      function Bo() {
        return $t.createElement(
          "div",
          null,
          $t.createElement(
            "div",
            { className: "summaryText" },
            Yr("#FriendsList_SignedOut")
          ),
          $t.createElement(
            "div",
            { className: "detailText" },
            Yr("#FriendsList_SignedOut_Detail")
          ),
          $t.createElement(
            "div",
            null,
            $t.createElement(
              "button",
              {
                className: "retryButton",
                onClick: () => {
                  window.parent.postMessage(
                    { message: "SignInRequest", state: void 0 },
                    "https://steamloopback.host"
                  );
                },
              },
              Yr("#Friends_SignIn")
            )
          )
        );
      }
      function Uo() {
        return $t.createElement(
          "div",
          null,
          $t.createElement(
            "div",
            { className: "summaryText" },
            Yr("#FriendsList_OfflineMode")
          ),
          $t.createElement(
            "div",
            { className: "detailText" },
            Yr("#FriendsList_OfflineMode_Detail")
          )
        );
      }
      e([$], Vo.prototype, "m_strPersonaName", void 0),
        e([$], Vo.prototype, "m_strAvatarSource", void 0),
        e([Jt], Vo.prototype, "ContextMenu", null),
        (Vo = e([yo], Vo));
      class Go extends cn {
        constructor(e, t) {
          super(
            "offlinefriendslist",
            "PopupFriendsListDimensions",
            {
              dimensions: { width: 300, height: 650 },
              minWidth: 226,
              minHeight: 400,
              title: Yr("#WindowTitle_FriendsList"),
              html_class:
                "friendsui-container client_chat_frame fullheight SavedDimensionsPopup",
              body_class: "fullheight",
              eCreationFlags: ln.Resizable,
              target_browser: t,
            },
            !1
          ),
            (this.m_offlineStore = e);
        }
        GetSavedDimensionsKey() {
          return this.m_strSavedDimensionsKey;
        }
        OnResizeComplete(e) {
          window.parent.postMessage(
            { message: "ErrorPopupRestoreDetailsChanged", data: e },
            "https://steamloopback.host"
          );
        }
        Render(e, t) {
          t.setAttribute("class", "fullheight popup_chat_frame"),
            mn.render(
              $t.createElement(Vo, {
                popup: this,
                offlineStore: this.m_offlineStore,
              }),
              t
            );
        }
        OnClose() {
          super.OnClose(),
            mn.unmountComponentAtNode(this.m_element),
            window.parent.postMessage(
              { message: "ErrorPopupClosed" },
              "https://steamloopback.host"
            );
        }
      }
      var Ho = r(669),
        Wo = r.n(Ho);
      function zo(e, t) {
        var r = document.createElement("link");
        (r.href = e), (r.type = "text/css"), (r.rel = "stylesheet");
        let n = t.parentElement;
        n.insertBefore(r, t), n.removeChild(t);
      }
      (window._Steam = {
        onComponentMounted: function (e) {
          if (!e) return;
          if (
            !e._reactInternalInstance._currentElement ||
            !e._reactInternalInstance._currentElement._source
          )
            return;
          let t = mn.findDOMNode(e);
          if (!t) return;
          let r = "";
          (r =
            e._reactInternalInstance._currentElement.type &&
            e._reactInternalInstance._currentElement.type.name
              ? e._reactInternalInstance._currentElement.type.name
              : e && e.constructor && e.constructor.name
              ? e.constructor.name
              : "unknown"),
            t.setAttribute("data-react-type", r);
          let n =
            e._reactInternalInstance._renderedComponent._currentElement._source;
          null != n &&
            (t.setAttribute("data-react-file", n.fileName),
            t.setAttribute("data-react-line", n.lineNumber));
        },
      }),
        (window.test = function () {
          SteamClient._internal.RegisterForStyleChanges(function (e) {
            const t = "https://steamloopback.host/";
            let r = [],
              n = document.querySelectorAll('link[rel="stylesheet"]');
            for (let o = 0; o < n.length; o++) {
              let i = n[o],
                a = i.href,
                l = "";
              a.startsWith(t) && (l = a.substr(27));
              let s = l.indexOf("?");
              s >= 0 && (l = l.substr(0, s));
              for (let t of e)
                if (l == t) {
                  r.push({ sheet: i, newRelative: t });
                  break;
                }
            }
            for (let e of r) zo(e.newRelative, e.sheet);
          });
        });
      let jo,
        qo,
        Ko,
        $o,
        Xo,
        Qo,
        Yo,
        Jo = "",
        Zo = "",
        ei = 0,
        ti = [],
        ri = "",
        ni = -1,
        oi = 0,
        ii = 0,
        ai = !1,
        li = !1;
      function si(e) {
        if (
          (SteamClient.WebChat.RegisterForFriendPostMessage(gi),
          void 0 !== Ko && (clearInterval(Ko), (Ko = void 0)),
          (Jo = e),
          Yo.SetLoadingState(Fo.Loading),
          (oi = 0),
          ui(),
          ai)
        )
          return Yo.SetLoadingState(Fo.FailRetry), void bi();
        li
          ? bi()
          : ((qo = setTimeout(pi, 4e3)),
            (jo = setTimeout(di, 1e3)),
            SteamClient.WebChat.GetWebChatURL().then((e) => {
              if (
                ((Zo = e),
                void 0 !== jo && (clearTimeout(jo), (jo = void 0)),
                e)
              ) {
                let t = new URL(e);
                t.searchParams.set("origin", window.origin),
                  (Zo = t.href),
                  console.log("Loading chat from url: ", t.href),
                  ci(t.href);
              } else
                ui(),
                  console.log("Empty webchat URL, we are in offline mode"),
                  Yo.SetLoadingState(Fo.OfflineMode);
            }));
      }
      function ui() {
        void 0 !== jo && (clearTimeout(jo), (jo = void 0)),
          void 0 !== qo && (clearTimeout(qo), (qo = void 0));
      }
      function ci(e) {
        console.log("Checking network... " + ei);
        let t = 7500;
        0 == ei ? (t = 500) : 1 == ei && (t = 2e3);
        let r = e;
        ++ei,
          Wo()
            .head(e, { timeout: t })
            .then((e) => {
              void 0 === e.headers["x-buildtimestamp"] &&
                console.log(
                  "Network check (head req) got 200, but no x-buildtimestamp, not valid? Proceeding anyway..."
                ),
                console.log(
                  "Network check (head req) passed after " + ei + " tries..."
                ),
                (function (e) {
                  console.log("Loading chat from url: ", e),
                    void 0 !== jo && clearTimeout(jo);
                  (jo = setTimeout(di, 15e3)),
                    (document.getElementById(Jo).src = e);
                })(r);
            })
            .catch((e) => {
              console.log("Network check try " + ei + " failed..."),
                ei >= 3 ? di() : ci(r);
            });
      }
      function di() {
        console.log("Failed to load chat!"),
          ui(),
          Yo.SetLoadingState(Fo.FailRetry),
          4 != ni && bi();
      }
      function pi() {
        4 != ni && Yo.loadingState != Fo.Loaded && bi(), (qo = void 0);
      }
      function fi() {
        let e = document.getElementById(Jo);
        e && null != e.src && (e.src = void 0),
          SteamClient.WebChat.RegisterForFriendPostMessage(gi),
          SteamClient.WebChat.RegisterOverlayChatBrowserInfoChanged(vi);
      }
      function mi() {
        (ei = 0), si("tracked_frame_friends_chat");
      }
      function hi() {
        _i(!1);
      }
      function _i(e) {
        SteamClient.WebChat.GetWebChatURL().then((t) => {
          console.log("Checking for updates from chat from url: ", t),
            void 0 !== jo && (clearTimeout(jo), (jo = void 0)),
            Wo()
              .head(t, { timeout: 1e4 })
              .then((r) => {
                if (void 0 !== r.headers["x-buildtimestamp"]) {
                  (ii = Number(r.headers["x-buildtimestamp"])),
                    console.log("Currently available build: " + ii);
                  let n = 86400;
                  if ((e && (n = 0), 0 != ii && 0 != oi)) {
                    let o = ii - oi;
                    if (Yo.loadingState == Fo.Loaded && o > n) {
                      let n = o > 604800,
                        i = Number(r.headers["x-forceuiupdate"]) || e;
                      console.log(
                        "We are out of date enough to reload if idle, bVeryOutOfDate=" +
                          (n ? "true" : "false")
                      );
                      let a = t.match(/(https:\/\/[^\/]+)\/.*/)[1];
                      window.frames[0].postMessage(
                        {
                          message: "UpdatedBuildAvailable",
                          bVeryOutOfDate: n,
                          bForce: i,
                          nSecondsOutOfDate: o,
                        },
                        a
                      );
                    }
                  }
                }
              })
              .catch((e) => {
                console.log("Failed trying to check available build timestamp");
              });
        });
      }
      function vi() {
        SteamClient.WebChat.GetOverlayChatBrowserInfo()
          .then((e) => {
            let t = new Map();
            for (let e = 0; e < ti.length; ++e)
              ti[e].browser_info &&
                0 != ti[e].browser_info.m_unPID &&
                t.set(ti[e].browser_info.m_unPID, !0);
            for (let r of e) t.delete(r.unPID);
            for (let e = ti.length - 1; e >= 0; e--)
              null != ti[e].browser_info &&
                t.has(ti[e].browser_info.m_unPID) &&
                (console.log(
                  "Deleting error/offline dialog for: " +
                    ti[e].browser_info.m_unPID
                ),
                ti[e].Close(),
                (ti[e] = void 0),
                ti.pop());
          })
          .catch((e) => {
            console.log("Failed to load overlay browser info:", e);
          });
      }
      function gi(e) {
        let t = e.data;
        if (t && t.command)
          if ("ShowPopupFriendsList" == t.command) {
            console.log("ShowPopupFriendsList");
            let t = { m_unPID: 0, m_nBrowserID: -1 };
            void 0 !== e.data.pid &&
              (t = { m_unPID: e.data.pid, m_nBrowserID: e.data.browserid }),
              bi(t);
          } else if ("SetPersonaState" == t.command) {
            let e = t.persona_state;
            0 != e && ((Xo = e), (ei = 0), si("tracked_frame_friends_chat"));
          }
      }
      function yi(e, t, r) {
        "SignInToFriends" == t && mi();
      }
      function bi(e = void 0) {
        (null != e && null != e) || (e = { m_unPID: 0, m_nBrowserID: -1 });
        for (let t = 0; t < ti.length; ++t)
          if (
            ti[t].browser_info.m_nBrowserID == e.m_nBrowserID &&
            ti[t].browser_info.m_unPID == e.m_unPID
          )
            return ti[t].Show(), void ($o = !0);
        let t = new Go(Yo, e);
        ti.push(t), t.Show(), ($o = !0);
      }
      function Ei() {
        return t(this, void 0, void 0, function* () {
          (Yo = new No()), Yo.Init();
          let e = yield SteamClient.WebChat.GetWebChatLanguage();
          try {
            yield (function (e) {
              let t,
                r,
                n,
                o,
                i = [],
                a = (e, t, r) =>
                  Wo()
                    .get(
                      `https://steamloopback.host/localization/${e}_${t}.json`
                    )
                    .then((e) => {
                      r(e.data);
                    })
                    .catch((e) => {
                      Promise.resolve();
                    });
              i.push(
                a("clientui", e, (e) => {
                  t = e;
                })
              ),
                i.push(
                  a("shared", e, (e) => {
                    n = e;
                  })
                );
              let l = Qr.GetLanguageFallback(e);
              return (
                e != l &&
                  (i.push(
                    a("clientui", l, (e) => {
                      r = e;
                    })
                  ),
                  i.push(
                    a("shared", l, (e) => {
                      o = e;
                    })
                  )),
                Promise.all(i).then(() => {
                  en.InitFromObjects(t, r, n, o);
                })
              );
            })(e);
          } catch (e) {
            console.log("Failed to load localization!");
          }
          if (
            (SteamClient.WebChat.RegisterForFriendPostMessage(gi),
            SteamClient.WebChat.RegisterOverlayChatBrowserInfoChanged(vi),
            an(window, "Messaging.RegisterForMessages") &&
              SteamClient.Messaging.RegisterForMessages("FriendsLoader", yi),
            !(yield SteamClient.WebChat.GetSignIntoFriendsOnStart()))
          )
            return (
              console.log("Don't sign in on start"),
              void Yo.SetLoadingState(Fo.SignIn)
            );
          let t = yield SteamClient.WebChat.GetCurrentUserAccountID();
          fn.SetCurrentLoggedInAccountID(t),
            (ni = yield SteamClient.WebChat.GetUIMode()),
            si("tracked_frame_friends_chat");
        });
      }
      window.addEventListener("message", function (e) {
        if ("object" != typeof e.data || null == e.data.message) return;
        if ("ShowFriendsErrorRetryDialog" == e.data.message)
          ui(), fi(), Yo.SetLoadingState(Fo.FailRetry), bi();
        else if ("ChatJavascriptInitialized" == e.data.message) {
          Yo.SetLoadingState(Fo.Loaded), ui();
          let t = Zo.match(/(https:\/\/[^\/]+)\/.*/)[1];
          if (
            (window.frames[0].postMessage(
              { message: "LoaderWindowRestoreDetails", data: ri, bVisible: $o },
              t
            ),
            void 0 !== Xo &&
              (window.frames[0].postMessage(
                { message: "SetPersonaState", persona_state: Xo },
                t
              ),
              (Xo = void 0)),
            (oi = void 0 !== e.data.data ? e.data.data : 0),
            null != Qo)
          )
            try {
              window.frames[0].postMessage(
                { message: "ReloadSerializedChatState", state: Qo },
                t
              ),
                (Qo = void 0);
            } catch (e) {
              console.log(
                "Failed trying to ask FriendsUI to restore chat state after reload"
              ),
                (Qo = void 0);
            }
          (Ko = setInterval(hi, 144e5)),
            (function () {
              for (let e = 0; e < ti.length; ++e)
                ti[e].Close(), (ti[e] = void 0);
              ti = [];
            })(),
            console.log("Chat loaded! " + oi);
        } else if ("ChatReloadRequest" == e.data.message) {
          if (null == Jo || "" == Jo) return;
          (ei = 0), null != e.data.state && (Qo = e.data.state), si(Jo);
        } else if ("CheckForAndForceUpdate" == e.data.message) _i(!0);
        else if ("SignInRequest" == e.data.message) mi();
        else if ("SignOutRequest" == e.data.message) {
          if (
            (ui(),
            fi(),
            Yo.SetLoadingState(Fo.SignIn),
            ($o = e.data.bShowLoaderWindow),
            e.data.bShowLoaderWindow)
          ) {
            let t;
            e.data.browserContext && (t = e.data.browserContext), bi(t);
          }
        } else if ("FriendsListRestoreDetailsChanged" == e.data.message) {
          let t = e.data.data;
          new Go(Yo, void 0).SaveWindowPosition(t), (ri = t);
        } else
          "ErrorPopupRestoreDetailsChanged" == e.data.message
            ? (ri = e.data.data)
            : "ErrorPopupClosed" == e.data.message && ($o = !1);
      }),
        document.addEventListener("DOMContentLoaded", () => Ei());
    })();
})();
//# sourceMappingURL=friends.js.map?contenthash=419fd04ffe9c7dc1d7f3
