(self.webpackChunksiteserverui = self.webpackChunksiteserverui || []).push([
  [8997],
  {
    1735: (e, t, r) => {
      e.exports = r(8681);
    },
    1238: (e, t, r) => {
      "use strict";
      var n = r(1362),
        o = r(5072),
        i = r(4438),
        a = r(3724),
        s = r(7429),
        l = r(3862),
        u = r(4508),
        g = r(8466),
        c = r(5407),
        p = r(9461),
        f = r(7962);
      e.exports = function (e) {
        return new Promise(function (t, r) {
          var d,
            h = e.data,
            y = e.headers,
            b = e.responseType;
          function m() {
            e.cancelToken && e.cancelToken.unsubscribe(d),
              e.signal && e.signal.removeEventListener("abort", d);
          }
          n.isFormData(h) &&
            n.isStandardBrowserEnv() &&
            delete y["Content-Type"];
          var _ = new XMLHttpRequest();
          if (e.auth) {
            var v = e.auth.username || "",
              S = e.auth.password
                ? unescape(encodeURIComponent(e.auth.password))
                : "";
            y.Authorization = "Basic " + btoa(v + ":" + S);
          }
          var E = s(e.baseURL, e.url);
          function T() {
            if (_) {
              var n =
                  "getAllResponseHeaders" in _
                    ? l(_.getAllResponseHeaders())
                    : null,
                i = {
                  data:
                    b && "text" !== b && "json" !== b
                      ? _.response
                      : _.responseText,
                  status: _.status,
                  statusText: _.statusText,
                  headers: n,
                  config: e,
                  request: _,
                };
              o(
                function (e) {
                  t(e), m();
                },
                function (e) {
                  r(e), m();
                },
                i,
              ),
                (_ = null);
            }
          }
          if (
            (_.open(
              e.method.toUpperCase(),
              a(E, e.params, e.paramsSerializer),
              !0,
            ),
            (_.timeout = e.timeout),
            "onloadend" in _
              ? (_.onloadend = T)
              : (_.onreadystatechange = function () {
                  _ &&
                    4 === _.readyState &&
                    (0 !== _.status ||
                      (_.responseURL &&
                        0 === _.responseURL.indexOf("file:"))) &&
                    setTimeout(T);
                }),
            (_.onabort = function () {
              _ &&
                (r(new c("Request aborted", c.ECONNABORTED, e, _)), (_ = null));
            }),
            (_.onerror = function () {
              r(new c("Network Error", c.ERR_NETWORK, e, _, _)), (_ = null);
            }),
            (_.ontimeout = function () {
              var t = e.timeout
                  ? "timeout of " + e.timeout + "ms exceeded"
                  : "timeout exceeded",
                n = e.transitional || g;
              e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                r(
                  new c(
                    t,
                    n.clarifyTimeoutError ? c.ETIMEDOUT : c.ECONNABORTED,
                    e,
                    _,
                  ),
                ),
                (_ = null);
            }),
            n.isStandardBrowserEnv())
          ) {
            var A =
              (e.withCredentials || u(E)) && e.xsrfCookieName
                ? i.read(e.xsrfCookieName)
                : void 0;
            A && (y[e.xsrfHeaderName] = A);
          }
          "setRequestHeader" in _ &&
            n.forEach(y, function (e, t) {
              void 0 === h && "content-type" === t.toLowerCase()
                ? delete y[t]
                : _.setRequestHeader(t, e);
            }),
            n.isUndefined(e.withCredentials) ||
              (_.withCredentials = !!e.withCredentials),
            b && "json" !== b && (_.responseType = e.responseType),
            "function" == typeof e.onDownloadProgress &&
              _.addEventListener("progress", e.onDownloadProgress),
            "function" == typeof e.onUploadProgress &&
              _.upload &&
              _.upload.addEventListener("progress", e.onUploadProgress),
            (e.cancelToken || e.signal) &&
              ((d = function (e) {
                _ &&
                  (r(!e || (e && e.type) ? new p() : e), _.abort(), (_ = null));
              }),
              e.cancelToken && e.cancelToken.subscribe(d),
              e.signal &&
                (e.signal.aborted
                  ? d()
                  : e.signal.addEventListener("abort", d))),
            h || (h = null);
          var w = f(E);
          w && -1 === ["http", "https", "file"].indexOf(w)
            ? r(new c("Unsupported protocol " + w + ":", c.ERR_BAD_REQUEST, e))
            : _.send(h);
        });
      };
    },
    8681: (e, t, r) => {
      "use strict";
      var n = r(1362),
        o = r(2046),
        i = r(2393),
        a = r(481);
      var s = (function e(t) {
        var r = new i(t),
          s = o(i.prototype.request, r);
        return (
          n.extend(s, i.prototype, r),
          n.extend(s, r),
          (s.create = function (r) {
            return e(a(t, r));
          }),
          s
        );
      })(r(5338));
      (s.Axios = i),
        (s.CanceledError = r(9461)),
        (s.CancelToken = r(2509)),
        (s.isCancel = r(1898)),
        (s.VERSION = r(3179).version),
        (s.toFormData = r(6034)),
        (s.AxiosError = r(5407)),
        (s.Cancel = s.CanceledError),
        (s.all = function (e) {
          return Promise.all(e);
        }),
        (s.spread = r(8038)),
        (s.isAxiosError = r(8617)),
        (e.exports = s),
        (e.exports.default = s);
    },
    2509: (e, t, r) => {
      "use strict";
      var n = r(9461);
      function o(e) {
        if ("function" != typeof e)
          throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
          t = e;
        });
        var r = this;
        this.promise.then(function (e) {
          if (r._listeners) {
            var t,
              n = r._listeners.length;
            for (t = 0; t < n; t++) r._listeners[t](e);
            r._listeners = null;
          }
        }),
          (this.promise.then = function (e) {
            var t,
              n = new Promise(function (e) {
                r.subscribe(e), (t = e);
              }).then(e);
            return (
              (n.cancel = function () {
                r.unsubscribe(t);
              }),
              n
            );
          }),
          e(function (e) {
            r.reason || ((r.reason = new n(e)), t(r.reason));
          });
      }
      (o.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
        (o.prototype.subscribe = function (e) {
          this.reason
            ? e(this.reason)
            : this._listeners
              ? this._listeners.push(e)
              : (this._listeners = [e]);
        }),
        (o.prototype.unsubscribe = function (e) {
          if (this._listeners) {
            var t = this._listeners.indexOf(e);
            -1 !== t && this._listeners.splice(t, 1);
          }
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
    9461: (e, t, r) => {
      "use strict";
      var n = r(5407);
      function o(e) {
        n.call(this, null == e ? "canceled" : e, n.ERR_CANCELED),
          (this.name = "CanceledError");
      }
      r(1362).inherits(o, n, { __CANCEL__: !0 }), (e.exports = o);
    },
    1898: (e) => {
      "use strict";
      e.exports = function (e) {
        return !(!e || !e.__CANCEL__);
      };
    },
    2393: (e, t, r) => {
      "use strict";
      var n = r(1362),
        o = r(3724),
        i = r(8265),
        a = r(1728),
        s = r(481),
        l = r(7429),
        u = r(5963),
        g = u.validators;
      function c(e) {
        (this.defaults = e),
          (this.interceptors = { request: new i(), response: new i() });
      }
      (c.prototype.request = function (e, t) {
        "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
          (t = s(this.defaults, t)).method
            ? (t.method = t.method.toLowerCase())
            : this.defaults.method
              ? (t.method = this.defaults.method.toLowerCase())
              : (t.method = "get");
        var r = t.transitional;
        void 0 !== r &&
          u.assertOptions(
            r,
            {
              silentJSONParsing: g.transitional(g.boolean),
              forcedJSONParsing: g.transitional(g.boolean),
              clarifyTimeoutError: g.transitional(g.boolean),
            },
            !1,
          );
        var n = [],
          o = !0;
        this.interceptors.request.forEach(function (e) {
          ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
            ((o = o && e.synchronous), n.unshift(e.fulfilled, e.rejected));
        });
        var i,
          l = [];
        if (
          (this.interceptors.response.forEach(function (e) {
            l.push(e.fulfilled, e.rejected);
          }),
          !o)
        ) {
          var c = [a, void 0];
          for (
            Array.prototype.unshift.apply(c, n),
              c = c.concat(l),
              i = Promise.resolve(t);
            c.length;
          )
            i = i.then(c.shift(), c.shift());
          return i;
        }
        for (var p = t; n.length; ) {
          var f = n.shift(),
            d = n.shift();
          try {
            p = f(p);
          } catch (e) {
            d(e);
            break;
          }
        }
        try {
          i = a(p);
        } catch (e) {
          return Promise.reject(e);
        }
        for (; l.length; ) i = i.then(l.shift(), l.shift());
        return i;
      }),
        (c.prototype.getUri = function (e) {
          e = s(this.defaults, e);
          var t = l(e.baseURL, e.url);
          return o(t, e.params, e.paramsSerializer);
        }),
        n.forEach(["delete", "get", "head", "options"], function (e) {
          c.prototype[e] = function (t, r) {
            return this.request(
              s(r || {}, { method: e, url: t, data: (r || {}).data }),
            );
          };
        }),
        n.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (r, n, o) {
              return this.request(
                s(o || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: r,
                  data: n,
                }),
              );
            };
          }
          (c.prototype[e] = t()), (c.prototype[e + "Form"] = t(!0));
        }),
        (e.exports = c);
    },
    5407: (e, t, r) => {
      "use strict";
      var n = r(1362);
      function o(e, t, r, n, o) {
        Error.call(this),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          r && (this.config = r),
          n && (this.request = n),
          o && (this.response = o);
      }
      n.inherits(o, Error, {
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
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      var i = o.prototype,
        a = {};
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
      ].forEach(function (e) {
        a[e] = { value: e };
      }),
        Object.defineProperties(o, a),
        Object.defineProperty(i, "isAxiosError", { value: !0 }),
        (o.from = function (e, t, r, a, s, l) {
          var u = Object.create(i);
          return (
            n.toFlatObject(e, u, function (e) {
              return e !== Error.prototype;
            }),
            o.call(u, e.message, t, r, a, s),
            (u.name = e.name),
            l && Object.assign(u, l),
            u
          );
        }),
        (e.exports = o);
    },
    8265: (e, t, r) => {
      "use strict";
      var n = r(1362);
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
    7429: (e, t, r) => {
      "use strict";
      var n = r(8051),
        o = r(2118);
      e.exports = function (e, t) {
        return e && !n(t) ? o(e, t) : t;
      };
    },
    1728: (e, t, r) => {
      "use strict";
      var n = r(1362),
        o = r(671),
        i = r(1898),
        a = r(5338),
        s = r(9461);
      function l(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new s();
      }
      e.exports = function (e) {
        return (
          l(e),
          (e.headers = e.headers || {}),
          (e.data = o.call(e, e.data, e.headers, e.transformRequest)),
          (e.headers = n.merge(
            e.headers.common || {},
            e.headers[e.method] || {},
            e.headers,
          )),
          n.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            function (t) {
              delete e.headers[t];
            },
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
                      e.transformResponse,
                    ))),
                Promise.reject(t)
              );
            },
          )
        );
      };
    },
    481: (e, t, r) => {
      "use strict";
      var n = r(1362);
      e.exports = function (e, t) {
        t = t || {};
        var r = {};
        function o(e, t) {
          return n.isPlainObject(e) && n.isPlainObject(t)
            ? n.merge(e, t)
            : n.isPlainObject(t)
              ? n.merge({}, t)
              : n.isArray(t)
                ? t.slice()
                : t;
        }
        function i(r) {
          return n.isUndefined(t[r])
            ? n.isUndefined(e[r])
              ? void 0
              : o(void 0, e[r])
            : o(e[r], t[r]);
        }
        function a(e) {
          if (!n.isUndefined(t[e])) return o(void 0, t[e]);
        }
        function s(r) {
          return n.isUndefined(t[r])
            ? n.isUndefined(e[r])
              ? void 0
              : o(void 0, e[r])
            : o(void 0, t[r]);
        }
        function l(r) {
          return r in t ? o(e[r], t[r]) : r in e ? o(void 0, e[r]) : void 0;
        }
        var u = {
          url: a,
          method: a,
          data: a,
          baseURL: s,
          transformRequest: s,
          transformResponse: s,
          paramsSerializer: s,
          timeout: s,
          timeoutMessage: s,
          withCredentials: s,
          adapter: s,
          responseType: s,
          xsrfCookieName: s,
          xsrfHeaderName: s,
          onUploadProgress: s,
          onDownloadProgress: s,
          decompress: s,
          maxContentLength: s,
          maxBodyLength: s,
          beforeRedirect: s,
          transport: s,
          httpAgent: s,
          httpsAgent: s,
          cancelToken: s,
          socketPath: s,
          responseEncoding: s,
          validateStatus: l,
        };
        return (
          n.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
            var t = u[e] || i,
              o = t(e);
            (n.isUndefined(o) && t !== l) || (r[e] = o);
          }),
          r
        );
      };
    },
    5072: (e, t, r) => {
      "use strict";
      var n = r(5407);
      e.exports = function (e, t, r) {
        var o = r.config.validateStatus;
        r.status && o && !o(r.status)
          ? t(
              new n(
                "Request failed with status code " + r.status,
                [n.ERR_BAD_REQUEST, n.ERR_BAD_RESPONSE][
                  Math.floor(r.status / 100) - 4
                ],
                r.config,
                r.request,
                r,
              ),
            )
          : e(r);
      };
    },
    671: (e, t, r) => {
      "use strict";
      var n = r(1362),
        o = r(5338);
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
    5338: (e, t, r) => {
      "use strict";
      var n = r(1362),
        o = r(24),
        i = r(5407),
        a = r(8466),
        s = r(6034),
        l = { "Content-Type": "application/x-www-form-urlencoded" };
      function u(e, t) {
        !n.isUndefined(e) &&
          n.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = t);
      }
      var g,
        c = {
          transitional: a,
          adapter:
            (("undefined" != typeof XMLHttpRequest ||
              ("undefined" != typeof process &&
                "[object process]" ===
                  Object.prototype.toString.call(process))) &&
              (g = r(1238)),
            g),
          transformRequest: [
            function (e, t) {
              if (
                (o(t, "Accept"),
                o(t, "Content-Type"),
                n.isFormData(e) ||
                  n.isArrayBuffer(e) ||
                  n.isBuffer(e) ||
                  n.isStream(e) ||
                  n.isFile(e) ||
                  n.isBlob(e))
              )
                return e;
              if (n.isArrayBufferView(e)) return e.buffer;
              if (n.isURLSearchParams(e))
                return (
                  u(t, "application/x-www-form-urlencoded;charset=utf-8"),
                  e.toString()
                );
              var r,
                i = n.isObject(e),
                a = t && t["Content-Type"];
              if ((r = n.isFileList(e)) || (i && "multipart/form-data" === a)) {
                var l = this.env && this.env.FormData;
                return s(r ? { "files[]": e } : e, l && new l());
              }
              return i || "application/json" === a
                ? (u(t, "application/json"),
                  (function (e, t, r) {
                    if (n.isString(e))
                      try {
                        return (t || JSON.parse)(e), n.trim(e);
                      } catch (e) {
                        if ("SyntaxError" !== e.name) throw e;
                      }
                    return (r || JSON.stringify)(e);
                  })(e))
                : e;
            },
          ],
          transformResponse: [
            function (e) {
              var t = this.transitional || c.transitional,
                r = t && t.silentJSONParsing,
                o = t && t.forcedJSONParsing,
                a = !r && "json" === this.responseType;
              if (a || (o && n.isString(e) && e.length))
                try {
                  return JSON.parse(e);
                } catch (e) {
                  if (a) {
                    if ("SyntaxError" === e.name)
                      throw i.from(
                        e,
                        i.ERR_BAD_RESPONSE,
                        this,
                        null,
                        this.response,
                      );
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
          env: { FormData: r(892) },
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: { common: { Accept: "application/json, text/plain, */*" } },
        };
      n.forEach(["delete", "get", "head"], function (e) {
        c.headers[e] = {};
      }),
        n.forEach(["post", "put", "patch"], function (e) {
          c.headers[e] = n.merge(l);
        }),
        (e.exports = c);
    },
    8466: (e) => {
      "use strict";
      e.exports = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
      };
    },
    3179: (e) => {
      e.exports = { version: "0.27.2" };
    },
    2046: (e) => {
      "use strict";
      e.exports = function (e, t) {
        return function () {
          for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
            r[n] = arguments[n];
          return e.apply(t, r);
        };
      };
    },
    3724: (e, t, r) => {
      "use strict";
      var n = r(1362);
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
          var s = e.indexOf("#");
          -1 !== s && (e = e.slice(0, s)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
        }
        return e;
      };
    },
    2118: (e) => {
      "use strict";
      e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
      };
    },
    4438: (e, t, r) => {
      "use strict";
      var n = r(1362);
      e.exports = n.isStandardBrowserEnv()
        ? {
            write: function (e, t, r, o, i, a) {
              var s = [];
              s.push(e + "=" + encodeURIComponent(t)),
                n.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()),
                n.isString(o) && s.push("path=" + o),
                n.isString(i) && s.push("domain=" + i),
                !0 === a && s.push("secure"),
                (document.cookie = s.join("; "));
            },
            read: function (e) {
              var t = document.cookie.match(
                new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
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
    8051: (e) => {
      "use strict";
      e.exports = function (e) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
      };
    },
    8617: (e, t, r) => {
      "use strict";
      var n = r(1362);
      e.exports = function (e) {
        return n.isObject(e) && !0 === e.isAxiosError;
      };
    },
    4508: (e, t, r) => {
      "use strict";
      var n = r(1362);
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
    24: (e, t, r) => {
      "use strict";
      var n = r(1362);
      e.exports = function (e, t) {
        n.forEach(e, function (r, n) {
          n !== t &&
            n.toUpperCase() === t.toUpperCase() &&
            ((e[t] = r), delete e[n]);
        });
      };
    },
    892: (e) => {
      e.exports = null;
    },
    3862: (e, t, r) => {
      "use strict";
      var n = r(1362),
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
    7962: (e) => {
      "use strict";
      e.exports = function (e) {
        var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
        return (t && t[1]) || "";
      };
    },
    8038: (e) => {
      "use strict";
      e.exports = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      };
    },
    6034: (e, t, r) => {
      "use strict";
      var n = r(1362);
      e.exports = function (e, t) {
        t = t || new FormData();
        var r = [];
        function o(e) {
          return null === e
            ? ""
            : n.isDate(e)
              ? e.toISOString()
              : n.isArrayBuffer(e) || n.isTypedArray(e)
                ? "function" == typeof Blob
                  ? new Blob([e])
                  : Buffer.from(e)
                : e;
        }
        return (
          (function e(i, a) {
            if (n.isPlainObject(i) || n.isArray(i)) {
              if (-1 !== r.indexOf(i))
                throw Error("Circular reference detected in " + a);
              r.push(i),
                n.forEach(i, function (r, i) {
                  if (!n.isUndefined(r)) {
                    var s,
                      l = a ? a + "." + i : i;
                    if (r && !a && "object" == typeof r)
                      if (n.endsWith(i, "{}")) r = JSON.stringify(r);
                      else if (n.endsWith(i, "[]") && (s = n.toArray(r)))
                        return void s.forEach(function (e) {
                          !n.isUndefined(e) && t.append(l, o(e));
                        });
                    e(r, l);
                  }
                }),
                r.pop();
            } else t.append(a, o(i));
          })(e),
          t
        );
      };
    },
    5963: (e, t, r) => {
      "use strict";
      var n = r(3179).version,
        o = r(5407),
        i = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        function (e, t) {
          i[e] = function (r) {
            return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        },
      );
      var a = {};
      (i.transitional = function (e, t, r) {
        function i(e, t) {
          return (
            "[Axios v" +
            n +
            "] Transitional option '" +
            e +
            "'" +
            t +
            (r ? ". " + r : "")
          );
        }
        return function (r, n, s) {
          if (!1 === e)
            throw new o(
              i(n, " has been removed" + (t ? " in " + t : "")),
              o.ERR_DEPRECATED,
            );
          return (
            t &&
              !a[n] &&
              ((a[n] = !0),
              console.warn(
                i(
                  n,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future",
                ),
              )),
            !e || e(r, n, s)
          );
        };
      }),
        (e.exports = {
          assertOptions: function (e, t, r) {
            if ("object" != typeof e)
              throw new o("options must be an object", o.ERR_BAD_OPTION_VALUE);
            for (var n = Object.keys(e), i = n.length; i-- > 0; ) {
              var a = n[i],
                s = t[a];
              if (s) {
                var l = e[a],
                  u = void 0 === l || s(l, a, e);
                if (!0 !== u)
                  throw new o(
                    "option " + a + " must be " + u,
                    o.ERR_BAD_OPTION_VALUE,
                  );
              } else if (!0 !== r)
                throw new o("Unknown option " + a, o.ERR_BAD_OPTION);
            }
          },
          validators: i,
        });
    },
    1362: (e, t, r) => {
      "use strict";
      var n,
        o = r(2046),
        i = Object.prototype.toString,
        a =
          ((n = Object.create(null)),
          function (e) {
            var t = i.call(e);
            return n[t] || (n[t] = t.slice(8, -1).toLowerCase());
          });
      function s(e) {
        return (
          (e = e.toLowerCase()),
          function (t) {
            return a(t) === e;
          }
        );
      }
      function l(e) {
        return Array.isArray(e);
      }
      function u(e) {
        return void 0 === e;
      }
      var g = s("ArrayBuffer");
      function c(e) {
        return null !== e && "object" == typeof e;
      }
      function p(e) {
        if ("object" !== a(e)) return !1;
        var t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype;
      }
      var f = s("Date"),
        d = s("File"),
        h = s("Blob"),
        y = s("FileList");
      function b(e) {
        return "[object Function]" === i.call(e);
      }
      var m = s("URLSearchParams");
      function _(e, t) {
        if (null != e)
          if (("object" != typeof e && (e = [e]), l(e)))
            for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
          else
            for (var o in e)
              Object.prototype.hasOwnProperty.call(e, o) &&
                t.call(null, e[o], o, e);
      }
      var v,
        S =
          ((v =
            "undefined" != typeof Uint8Array &&
            Object.getPrototypeOf(Uint8Array)),
          function (e) {
            return v && e instanceof v;
          });
      e.exports = {
        isArray: l,
        isArrayBuffer: g,
        isBuffer: function (e) {
          return (
            null !== e &&
            !u(e) &&
            null !== e.constructor &&
            !u(e.constructor) &&
            "function" == typeof e.constructor.isBuffer &&
            e.constructor.isBuffer(e)
          );
        },
        isFormData: function (e) {
          var t = "[object FormData]";
          return (
            e &&
            (("function" == typeof FormData && e instanceof FormData) ||
              i.call(e) === t ||
              (b(e.toString) && e.toString() === t))
          );
        },
        isArrayBufferView: function (e) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && g(e.buffer);
        },
        isString: function (e) {
          return "string" == typeof e;
        },
        isNumber: function (e) {
          return "number" == typeof e;
        },
        isObject: c,
        isPlainObject: p,
        isUndefined: u,
        isDate: f,
        isFile: d,
        isBlob: h,
        isFunction: b,
        isStream: function (e) {
          return c(e) && b(e.pipe);
        },
        isURLSearchParams: m,
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
        forEach: _,
        merge: function e() {
          var t = {};
          function r(r, n) {
            p(t[n]) && p(r)
              ? (t[n] = e(t[n], r))
              : p(r)
                ? (t[n] = e({}, r))
                : l(r)
                  ? (t[n] = r.slice())
                  : (t[n] = r);
          }
          for (var n = 0, o = arguments.length; n < o; n++) _(arguments[n], r);
          return t;
        },
        extend: function (e, t, r) {
          return (
            _(t, function (t, n) {
              e[n] = r && "function" == typeof t ? o(t, r) : t;
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
        inherits: function (e, t, r, n) {
          (e.prototype = Object.create(t.prototype, n)),
            (e.prototype.constructor = e),
            r && Object.assign(e.prototype, r);
        },
        toFlatObject: function (e, t, r) {
          var n,
            o,
            i,
            a = {};
          t = t || {};
          do {
            for (o = (n = Object.getOwnPropertyNames(e)).length; o-- > 0; )
              a[(i = n[o])] || ((t[i] = e[i]), (a[i] = !0));
            e = Object.getPrototypeOf(e);
          } while (e && (!r || r(e, t)) && e !== Object.prototype);
          return t;
        },
        kindOf: a,
        kindOfTest: s,
        endsWith: function (e, t, r) {
          (e = String(e)),
            (void 0 === r || r > e.length) && (r = e.length),
            (r -= t.length);
          var n = e.indexOf(t, r);
          return -1 !== n && n === r;
        },
        toArray: function (e) {
          if (!e) return null;
          var t = e.length;
          if (u(t)) return null;
          for (var r = new Array(t); t-- > 0; ) r[t] = e[t];
          return r;
        },
        isTypedArray: S,
        isFileList: y,
      };
    },
    1944: (e, t) => {
      "use strict";
      t.iI = function (e) {
        for (
          var t, n = e.length, o = n % 3, i = [], a = 16383, s = 0, u = n - o;
          s < u;
          s += a
        )
          i.push(l(e, s, s + a > u ? u : s + a));
        1 === o
          ? ((t = e[n - 1]), i.push(r[t >> 2] + r[(t << 4) & 63] + "=="))
          : 2 === o &&
            ((t = (e[n - 2] << 8) + e[n - 1]),
            i.push(r[t >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + "="));
        return i.join("");
      };
      for (
        var r = [],
          n = [],
          o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          i =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          a = 0;
        a < 64;
        ++a
      )
        (r[a] = i[a]), (n[i.charCodeAt(a)] = a);
      function s(e) {
        var t = e.length;
        if (t % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
      }
      function l(e, t, n) {
        for (var o, i, a = [], s = t; s < n; s += 3)
          (o =
            ((e[s] << 16) & 16711680) +
            ((e[s + 1] << 8) & 65280) +
            (255 & e[s + 2])),
            a.push(
              r[((i = o) >> 18) & 63] +
                r[(i >> 12) & 63] +
                r[(i >> 6) & 63] +
                r[63 & i],
            );
        return a.join("");
      }
      (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
    },
    613: function (module, exports) {
      var $jscomp = $jscomp || {};
      ($jscomp.scope = {}),
        ($jscomp.findInternal = function (e, t, r) {
          e instanceof String && (e = String(e));
          for (var n = e.length, o = 0; o < n; o++) {
            var i = e[o];
            if (t.call(r, i, o, e)) return { i: o, v: i };
          }
          return { i: -1, v: void 0 };
        }),
        ($jscomp.ASSUME_ES5 = !1),
        ($jscomp.ASSUME_NO_NATIVE_MAP = !1),
        ($jscomp.ASSUME_NO_NATIVE_SET = !1),
        ($jscomp.SIMPLE_FROUND_POLYFILL = !1),
        ($jscomp.defineProperty =
          $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
            ? Object.defineProperty
            : function (e, t, r) {
                e != Array.prototype &&
                  e != Object.prototype &&
                  (e[t] = r.value);
              }),
        ($jscomp.getGlobal = function (e) {
          return "undefined" != typeof window && window === e
            ? e
            : "undefined" != typeof global && null != global
              ? global
              : e;
        }),
        ($jscomp.global = $jscomp.getGlobal(this)),
        ($jscomp.polyfill = function (e, t, r, n) {
          if (t) {
            for (
              r = $jscomp.global, e = e.split("."), n = 0;
              n < e.length - 1;
              n++
            ) {
              var o = e[n];
              o in r || (r[o] = {}), (r = r[o]);
            }
            (t = t((n = r[(e = e[e.length - 1])]))) != n &&
              null != t &&
              $jscomp.defineProperty(r, e, {
                configurable: !0,
                writable: !0,
                value: t,
              });
          }
        }),
        $jscomp.polyfill(
          "Array.prototype.findIndex",
          function (e) {
            return (
              e ||
              function (e, t) {
                return $jscomp.findInternal(this, e, t).i;
              }
            );
          },
          "es6",
          "es3",
        ),
        ($jscomp.checkStringArgs = function (e, t, r) {
          if (null == e)
            throw new TypeError(
              "The 'this' value for String.prototype." +
                r +
                " must not be null or undefined",
            );
          if (t instanceof RegExp)
            throw new TypeError(
              "First argument to String.prototype." +
                r +
                " must not be a regular expression",
            );
          return e + "";
        }),
        $jscomp.polyfill(
          "String.prototype.endsWith",
          function (e) {
            return (
              e ||
              function (e, t) {
                var r = $jscomp.checkStringArgs(this, e, "endsWith");
                (e += ""),
                  void 0 === t && (t = r.length),
                  (t = Math.max(0, Math.min(0 | t, r.length)));
                for (var n = e.length; 0 < n && 0 < t; )
                  if (r[--t] != e[--n]) return !1;
                return 0 >= n;
              }
            );
          },
          "es6",
          "es3",
        ),
        $jscomp.polyfill(
          "Array.prototype.find",
          function (e) {
            return (
              e ||
              function (e, t) {
                return $jscomp.findInternal(this, e, t).v;
              }
            );
          },
          "es6",
          "es3",
        ),
        $jscomp.polyfill(
          "String.prototype.startsWith",
          function (e) {
            return (
              e ||
              function (e, t) {
                var r = $jscomp.checkStringArgs(this, e, "startsWith");
                e += "";
                var n = r.length,
                  o = e.length;
                t = Math.max(0, Math.min(0 | t, r.length));
                for (var i = 0; i < o && t < n; )
                  if (r[t++] != e[i++]) return !1;
                return i >= o;
              }
            );
          },
          "es6",
          "es3",
        ),
        $jscomp.polyfill(
          "String.prototype.repeat",
          function (e) {
            return (
              e ||
              function (e) {
                var t = $jscomp.checkStringArgs(this, null, "repeat");
                if (0 > e || 1342177279 < e)
                  throw new RangeError("Invalid count value");
                e |= 0;
                for (var r = ""; e; ) 1 & e && (r += t), (e >>>= 1) && (t += t);
                return r;
              }
            );
          },
          "es6",
          "es3",
        );
      var COMPILED = !0,
        goog = goog || {};
      (goog.global = this || self),
        (goog.exportPath_ = function (e, t, r) {
          (e = e.split(".")),
            (r = r || goog.global),
            e[0] in r || void 0 === r.execScript || r.execScript("var " + e[0]);
          for (var n; e.length && (n = e.shift()); )
            e.length || void 0 === t
              ? (r = r[n] && r[n] !== Object.prototype[n] ? r[n] : (r[n] = {}))
              : (r[n] = t);
        }),
        (goog.define = function (e, t) {
          if (!COMPILED) {
            var r = goog.global.CLOSURE_UNCOMPILED_DEFINES,
              n = goog.global.CLOSURE_DEFINES;
            r &&
            void 0 === r.nodeType &&
            Object.prototype.hasOwnProperty.call(r, e)
              ? (t = r[e])
              : n &&
                void 0 === n.nodeType &&
                Object.prototype.hasOwnProperty.call(n, e) &&
                (t = n[e]);
          }
          return t;
        }),
        (goog.FEATURESET_YEAR = 2012),
        (goog.DEBUG = !0),
        (goog.LOCALE = "en"),
        (goog.TRUSTED_SITE = !0),
        (goog.STRICT_MODE_COMPATIBLE = !1),
        (goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG),
        (goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1),
        (goog.provide = function (e) {
          if (goog.isInModuleLoader_())
            throw Error("goog.provide cannot be used within a module.");
          if (!COMPILED && goog.isProvided_(e))
            throw Error('Namespace "' + e + '" already declared.');
          goog.constructNamespace_(e);
        }),
        (goog.constructNamespace_ = function (e, t) {
          if (!COMPILED) {
            delete goog.implicitNamespaces_[e];
            for (
              var r = e;
              (r = r.substring(0, r.lastIndexOf("."))) &&
              !goog.getObjectByName(r);
            )
              goog.implicitNamespaces_[r] = !0;
          }
          goog.exportPath_(e, t);
        }),
        (goog.getScriptNonce = function (e) {
          return e && e != goog.global
            ? goog.getScriptNonce_(e.document)
            : (null === goog.cspNonce_ &&
                (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document)),
              goog.cspNonce_);
        }),
        (goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/),
        (goog.cspNonce_ = null),
        (goog.getScriptNonce_ = function (e) {
          return (e = e.querySelector && e.querySelector("script[nonce]")) &&
            (e = e.nonce || e.getAttribute("nonce")) &&
            goog.NONCE_PATTERN_.test(e)
            ? e
            : "";
        }),
        (goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/),
        (goog.module = function (e) {
          if (
            "string" != typeof e ||
            !e ||
            -1 == e.search(goog.VALID_MODULE_RE_)
          )
            throw Error("Invalid module identifier");
          if (!goog.isInGoogModuleLoader_())
            throw Error(
              "Module " +
                e +
                " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.",
            );
          if (goog.moduleLoaderState_.moduleName)
            throw Error("goog.module may only be called once per module.");
          if (((goog.moduleLoaderState_.moduleName = e), !COMPILED)) {
            if (goog.isProvided_(e))
              throw Error('Namespace "' + e + '" already declared.');
            delete goog.implicitNamespaces_[e];
          }
        }),
        (goog.module.get = function (e) {
          return goog.module.getInternal_(e);
        }),
        (goog.module.getInternal_ = function (e) {
          if (!COMPILED) {
            if (e in goog.loadedModules_) return goog.loadedModules_[e].exports;
            if (!goog.implicitNamespaces_[e])
              return null != (e = goog.getObjectByName(e)) ? e : null;
          }
          return null;
        }),
        (goog.ModuleType = { ES6: "es6", GOOG: "goog" }),
        (goog.moduleLoaderState_ = null),
        (goog.isInModuleLoader_ = function () {
          return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
        }),
        (goog.isInGoogModuleLoader_ = function () {
          return (
            !!goog.moduleLoaderState_ &&
            goog.moduleLoaderState_.type == goog.ModuleType.GOOG
          );
        }),
        (goog.isInEs6ModuleLoader_ = function () {
          if (
            goog.moduleLoaderState_ &&
            goog.moduleLoaderState_.type == goog.ModuleType.ES6
          )
            return !0;
          var e = goog.global.$jscomp;
          return (
            !!e &&
            "function" == typeof e.getCurrentModulePath &&
            !!e.getCurrentModulePath()
          );
        }),
        (goog.module.declareLegacyNamespace = function () {
          if (!COMPILED && !goog.isInGoogModuleLoader_())
            throw Error(
              "goog.module.declareLegacyNamespace must be called from within a goog.module",
            );
          if (!COMPILED && !goog.moduleLoaderState_.moduleName)
            throw Error(
              "goog.module must be called prior to goog.module.declareLegacyNamespace.",
            );
          goog.moduleLoaderState_.declareLegacyNamespace = !0;
        }),
        (goog.declareModuleId = function (e) {
          if (!COMPILED) {
            if (!goog.isInEs6ModuleLoader_())
              throw Error(
                "goog.declareModuleId may only be called from within an ES6 module",
              );
            if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName)
              throw Error(
                "goog.declareModuleId may only be called once per module.",
              );
            if (e in goog.loadedModules_)
              throw Error('Module with namespace "' + e + '" already exists.');
          }
          if (goog.moduleLoaderState_) goog.moduleLoaderState_.moduleName = e;
          else {
            var t = goog.global.$jscomp;
            if (!t || "function" != typeof t.getCurrentModulePath)
              throw Error(
                'Module with namespace "' +
                  e +
                  '" has been loaded incorrectly.',
              );
            (t = t.require(t.getCurrentModulePath())),
              (goog.loadedModules_[e] = {
                exports: t,
                type: goog.ModuleType.ES6,
                moduleId: e,
              });
          }
        }),
        (goog.setTestOnly = function (e) {
          if (goog.DISALLOW_TEST_ONLY_CODE)
            throw (
              ((e = e || ""),
              Error(
                "Importing test-only code into non-debug environment" +
                  (e ? ": " + e : "."),
              ))
            );
        }),
        (goog.forwardDeclare = function (e) {}),
        COMPILED ||
          ((goog.isProvided_ = function (e) {
            return (
              e in goog.loadedModules_ ||
              (!goog.implicitNamespaces_[e] && null != goog.getObjectByName(e))
            );
          }),
          (goog.implicitNamespaces_ = { "goog.module": !0 })),
        (goog.getObjectByName = function (e, t) {
          (e = e.split(".")), (t = t || goog.global);
          for (var r = 0; r < e.length; r++)
            if (null == (t = t[e[r]])) return null;
          return t;
        }),
        (goog.globalize = function (e, t) {
          for (var r in ((t = t || goog.global), e)) t[r] = e[r];
        }),
        (goog.addDependency = function (e, t, r, n) {
          !COMPILED &&
            goog.DEPENDENCIES_ENABLED &&
            goog.debugLoader_.addDependency(e, t, r, n);
        }),
        (goog.ENABLE_DEBUG_LOADER = !0),
        (goog.logToConsole_ = function (e) {
          goog.global.console && goog.global.console.error(e);
        }),
        (goog.require = function (e) {
          if (!COMPILED) {
            if (
              (goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(e),
              goog.isProvided_(e))
            ) {
              if (goog.isInModuleLoader_()) return goog.module.getInternal_(e);
            } else if (goog.ENABLE_DEBUG_LOADER) {
              var t = goog.moduleLoaderState_;
              goog.moduleLoaderState_ = null;
              try {
                goog.debugLoader_.load_(e);
              } finally {
                goog.moduleLoaderState_ = t;
              }
            }
            return null;
          }
        }),
        (goog.requireType = function (e) {
          return {};
        }),
        (goog.basePath = ""),
        (goog.nullFunction = function () {}),
        (goog.abstractMethod = function () {
          throw Error("unimplemented abstract method");
        }),
        (goog.addSingletonGetter = function (e) {
          (e.instance_ = void 0),
            (e.getInstance = function () {
              return e.instance_
                ? e.instance_
                : (goog.DEBUG &&
                    (goog.instantiatedSingletons_[
                      goog.instantiatedSingletons_.length
                    ] = e),
                  (e.instance_ = new e()));
            });
        }),
        (goog.instantiatedSingletons_ = []),
        (goog.LOAD_MODULE_USING_EVAL = !0),
        (goog.SEAL_MODULE_EXPORTS = goog.DEBUG),
        (goog.loadedModules_ = {}),
        (goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER),
        (goog.TRANSPILE = "detect"),
        (goog.ASSUME_ES_MODULES_TRANSPILED = !1),
        (goog.TRANSPILE_TO_LANGUAGE = ""),
        (goog.TRANSPILER = "transpile.js"),
        (goog.hasBadLetScoping = null),
        (goog.useSafari10Workaround = function () {
          if (null == goog.hasBadLetScoping) {
            try {
              var a = !eval(
                '"use strict";let x = 1; function f() { return typeof x; };f() == "number";',
              );
            } catch (e) {
              a = !1;
            }
            goog.hasBadLetScoping = a;
          }
          return goog.hasBadLetScoping;
        }),
        (goog.workaroundSafari10EvalBug = function (e) {
          return "(function(){" + e + "\n;})();\n";
        }),
        (goog.loadModule = function (e) {
          var t = goog.moduleLoaderState_;
          try {
            if (
              ((goog.moduleLoaderState_ = {
                moduleName: "",
                declareLegacyNamespace: !1,
                type: goog.ModuleType.GOOG,
              }),
              goog.isFunction(e))
            )
              var r = e.call(void 0, {});
            else {
              if ("string" != typeof e)
                throw Error("Invalid module definition");
              goog.useSafari10Workaround() &&
                (e = goog.workaroundSafari10EvalBug(e)),
                (r = goog.loadModuleFromSource_.call(void 0, e));
            }
            var n = goog.moduleLoaderState_.moduleName;
            if ("string" != typeof n || !n)
              throw Error('Invalid module name "' + n + '"');
            goog.moduleLoaderState_.declareLegacyNamespace
              ? goog.constructNamespace_(n, r)
              : goog.SEAL_MODULE_EXPORTS &&
                Object.seal &&
                "object" == typeof r &&
                null != r &&
                Object.seal(r),
              (goog.loadedModules_[n] = {
                exports: r,
                type: goog.ModuleType.GOOG,
                moduleId: goog.moduleLoaderState_.moduleName,
              });
          } finally {
            goog.moduleLoaderState_ = t;
          }
        }),
        (goog.loadModuleFromSource_ = function (a) {
          return eval(a), {};
        }),
        (goog.normalizePath_ = function (e) {
          e = e.split("/");
          for (var t = 0; t < e.length; )
            "." == e[t]
              ? e.splice(t, 1)
              : t && ".." == e[t] && e[t - 1] && ".." != e[t - 1]
                ? e.splice(--t, 2)
                : t++;
          return e.join("/");
        }),
        (goog.loadFileSync_ = function (e) {
          if (goog.global.CLOSURE_LOAD_FILE_SYNC)
            return goog.global.CLOSURE_LOAD_FILE_SYNC(e);
          try {
            var t = new goog.global.XMLHttpRequest();
            return (
              t.open("get", e, !1),
              t.send(),
              0 == t.status || 200 == t.status ? t.responseText : null
            );
          } catch (e) {
            return null;
          }
        }),
        (goog.transpile_ = function (e, t, r) {
          var n = goog.global.$jscomp;
          n || (goog.global.$jscomp = n = {});
          var o = n.transpile;
          if (!o) {
            var i = goog.basePath + goog.TRANSPILER,
              a = goog.loadFileSync_(i);
            if (a) {
              if (
                (function () {
                  (0, eval)(a + "\n//# sourceURL=" + i);
                }.call(goog.global),
                goog.global.$gwtExport &&
                  goog.global.$gwtExport.$jscomp &&
                  !goog.global.$gwtExport.$jscomp.transpile)
              )
                throw Error(
                  'The transpiler did not properly export the "transpile" method. $gwtExport: ' +
                    JSON.stringify(goog.global.$gwtExport),
                );
              (goog.global.$jscomp.transpile =
                goog.global.$gwtExport.$jscomp.transpile),
                (o = (n = goog.global.$jscomp).transpile);
            }
          }
          return (
            o ||
              (o = n.transpile =
                function (e, t) {
                  return (
                    goog.logToConsole_(
                      t +
                        " requires transpilation but no transpiler was found.",
                    ),
                    e
                  );
                }),
            o(e, t, r)
          );
        }),
        (goog.typeOf = function (e) {
          var t = typeof e;
          if ("object" == t) {
            if (!e) return "null";
            if (e instanceof Array) return "array";
            if (e instanceof Object) return t;
            var r = Object.prototype.toString.call(e);
            if ("[object Window]" == r) return "object";
            if (
              "[object Array]" == r ||
              ("number" == typeof e.length &&
                void 0 !== e.splice &&
                void 0 !== e.propertyIsEnumerable &&
                !e.propertyIsEnumerable("splice"))
            )
              return "array";
            if (
              "[object Function]" == r ||
              (void 0 !== e.call &&
                void 0 !== e.propertyIsEnumerable &&
                !e.propertyIsEnumerable("call"))
            )
              return "function";
          } else if ("function" == t && void 0 === e.call) return "object";
          return t;
        }),
        (goog.isArray = function (e) {
          return "array" == goog.typeOf(e);
        }),
        (goog.isArrayLike = function (e) {
          var t = goog.typeOf(e);
          return "array" == t || ("object" == t && "number" == typeof e.length);
        }),
        (goog.isDateLike = function (e) {
          return goog.isObject(e) && "function" == typeof e.getFullYear;
        }),
        (goog.isFunction = function (e) {
          return "function" == goog.typeOf(e);
        }),
        (goog.isObject = function (e) {
          var t = typeof e;
          return ("object" == t && null != e) || "function" == t;
        }),
        (goog.getUid = function (e) {
          return (
            (Object.prototype.hasOwnProperty.call(e, goog.UID_PROPERTY_) &&
              e[goog.UID_PROPERTY_]) ||
            (e[goog.UID_PROPERTY_] = ++goog.uidCounter_)
          );
        }),
        (goog.hasUid = function (e) {
          return !!e[goog.UID_PROPERTY_];
        }),
        (goog.removeUid = function (e) {
          null !== e &&
            "removeAttribute" in e &&
            e.removeAttribute(goog.UID_PROPERTY_);
          try {
            delete e[goog.UID_PROPERTY_];
          } catch (e) {}
        }),
        (goog.UID_PROPERTY_ = "closure_uid_" + ((1e9 * Math.random()) >>> 0)),
        (goog.uidCounter_ = 0),
        (goog.getHashCode = goog.getUid),
        (goog.removeHashCode = goog.removeUid),
        (goog.cloneObject = function (e) {
          var t = goog.typeOf(e);
          if ("object" == t || "array" == t) {
            if ("function" == typeof e.clone) return e.clone();
            for (var r in ((t = "array" == t ? [] : {}), e))
              t[r] = goog.cloneObject(e[r]);
            return t;
          }
          return e;
        }),
        (goog.bindNative_ = function (e, t, r) {
          return e.call.apply(e.bind, arguments);
        }),
        (goog.bindJs_ = function (e, t, r) {
          if (!e) throw Error();
          if (2 < arguments.length) {
            var n = Array.prototype.slice.call(arguments, 2);
            return function () {
              var r = Array.prototype.slice.call(arguments);
              return Array.prototype.unshift.apply(r, n), e.apply(t, r);
            };
          }
          return function () {
            return e.apply(t, arguments);
          };
        }),
        (goog.bind = function (e, t, r) {
          return (
            Function.prototype.bind &&
            -1 != Function.prototype.bind.toString().indexOf("native code")
              ? (goog.bind = goog.bindNative_)
              : (goog.bind = goog.bindJs_),
            goog.bind.apply(null, arguments)
          );
        }),
        (goog.partial = function (e, t) {
          var r = Array.prototype.slice.call(arguments, 1);
          return function () {
            var t = r.slice();
            return t.push.apply(t, arguments), e.apply(this, t);
          };
        }),
        (goog.mixin = function (e, t) {
          for (var r in t) e[r] = t[r];
        }),
        (goog.now =
          (goog.TRUSTED_SITE && Date.now) ||
          function () {
            return +new Date();
          }),
        (goog.globalEval = function (e) {
          if (goog.global.execScript) goog.global.execScript(e, "JavaScript");
          else {
            if (!goog.global.eval) throw Error("goog.globalEval not available");
            if (null == goog.evalWorksForGlobals_) {
              try {
                goog.global.eval("var _evalTest_ = 1;");
              } catch (e) {}
              if (void 0 !== goog.global._evalTest_) {
                try {
                  delete goog.global._evalTest_;
                } catch (e) {}
                goog.evalWorksForGlobals_ = !0;
              } else goog.evalWorksForGlobals_ = !1;
            }
            if (goog.evalWorksForGlobals_) goog.global.eval(e);
            else {
              var t = goog.global.document,
                r = t.createElement("script");
              (r.type = "text/javascript"),
                (r.defer = !1),
                r.appendChild(t.createTextNode(e)),
                t.head.appendChild(r),
                t.head.removeChild(r);
            }
          }
        }),
        (goog.evalWorksForGlobals_ = null),
        (goog.getCssName = function (e, t) {
          if ("." == String(e).charAt(0))
            throw Error(
              'className passed in goog.getCssName must not start with ".". You passed: ' +
                e,
            );
          var r = function (e) {
              return goog.cssNameMapping_[e] || e;
            },
            n = function (e) {
              e = e.split("-");
              for (var t = [], n = 0; n < e.length; n++) t.push(r(e[n]));
              return t.join("-");
            };
          return (
            (n = goog.cssNameMapping_
              ? "BY_WHOLE" == goog.cssNameMappingStyle_
                ? r
                : n
              : function (e) {
                  return e;
                }),
            (e = t ? e + "-" + n(t) : n(e)),
            goog.global.CLOSURE_CSS_NAME_MAP_FN
              ? goog.global.CLOSURE_CSS_NAME_MAP_FN(e)
              : e
          );
        }),
        (goog.setCssNameMapping = function (e, t) {
          (goog.cssNameMapping_ = e), (goog.cssNameMappingStyle_ = t);
        }),
        !COMPILED &&
          goog.global.CLOSURE_CSS_NAME_MAPPING &&
          (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING),
        (goog.getMsg = function (e, t, r) {
          return (
            r && r.html && (e = e.replace(/</g, "&lt;")),
            t &&
              (e = e.replace(/\{\$([^}]+)}/g, function (e, r) {
                return null != t && r in t ? t[r] : e;
              })),
            e
          );
        }),
        (goog.getMsgWithFallback = function (e, t) {
          return e;
        }),
        (goog.exportSymbol = function (e, t, r) {
          goog.exportPath_(e, t, r);
        }),
        (goog.exportProperty = function (e, t, r) {
          e[t] = r;
        }),
        (goog.inherits = function (e, t) {
          function r() {}
          (r.prototype = t.prototype),
            (e.superClass_ = t.prototype),
            (e.prototype = new r()),
            (e.prototype.constructor = e),
            (e.base = function (e, r, n) {
              for (
                var o = Array(arguments.length - 2), i = 2;
                i < arguments.length;
                i++
              )
                o[i - 2] = arguments[i];
              return t.prototype[r].apply(e, o);
            });
        }),
        (goog.scope = function (e) {
          if (goog.isInModuleLoader_())
            throw Error("goog.scope is not supported within a module.");
          e.call(goog.global);
        }),
        COMPILED || (goog.global.COMPILED = COMPILED),
        (goog.defineClass = function (e, t) {
          var r = t.constructor,
            n = t.statics;
          return (
            (r && r != Object.prototype.constructor) ||
              (r = function () {
                throw Error(
                  "cannot instantiate an interface (no constructor defined).",
                );
              }),
            (r = goog.defineClass.createSealingConstructor_(r, e)),
            e && goog.inherits(r, e),
            delete t.constructor,
            delete t.statics,
            goog.defineClass.applyProperties_(r.prototype, t),
            null != n &&
              (n instanceof Function
                ? n(r)
                : goog.defineClass.applyProperties_(r, n)),
            r
          );
        }),
        (goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG),
        (goog.defineClass.createSealingConstructor_ = function (e, t) {
          if (!goog.defineClass.SEAL_CLASS_INSTANCES) return e;
          var r = !goog.defineClass.isUnsealable_(t),
            n = function () {
              var t = e.apply(this, arguments) || this;
              return (
                (t[goog.UID_PROPERTY_] = t[goog.UID_PROPERTY_]),
                this.constructor === n &&
                  r &&
                  Object.seal instanceof Function &&
                  Object.seal(t),
                t
              );
            };
          return n;
        }),
        (goog.defineClass.isUnsealable_ = function (e) {
          return (
            e &&
            e.prototype &&
            e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]
          );
        }),
        (goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ =
          "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
            " ",
          )),
        (goog.defineClass.applyProperties_ = function (e, t) {
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          for (
            var n = 0;
            n < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;
            n++
          )
            (r = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[n]),
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        }),
        (goog.tagUnsealableClass = function (e) {
          !COMPILED &&
            goog.defineClass.SEAL_CLASS_INSTANCES &&
            (e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0);
        }),
        (goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ =
          "goog_defineClass_legacy_unsealable"),
        !COMPILED &&
          goog.DEPENDENCIES_ENABLED &&
          ((goog.inHtmlDocument_ = function () {
            var e = goog.global.document;
            return null != e && "write" in e;
          }),
          (goog.isDocumentLoading_ = function () {
            var e = goog.global.document;
            return e.attachEvent
              ? "complete" != e.readyState
              : "loading" == e.readyState;
          }),
          (goog.findBasePath_ = function () {
            if (
              null != goog.global.CLOSURE_BASE_PATH &&
              "string" == typeof goog.global.CLOSURE_BASE_PATH
            )
              goog.basePath = goog.global.CLOSURE_BASE_PATH;
            else if (goog.inHtmlDocument_()) {
              var e = goog.global.document,
                t = e.currentScript;
              for (
                t = (e = t ? [t] : e.getElementsByTagName("SCRIPT")).length - 1;
                0 <= t;
                --t
              ) {
                var r = e[t].src,
                  n = r.lastIndexOf("?");
                if (
                  ((n = -1 == n ? r.length : n),
                  "base.js" == r.substr(n - 7, 7))
                ) {
                  goog.basePath = r.substr(0, n - 7);
                  break;
                }
              }
            }
          }),
          goog.findBasePath_(),
          (goog.Transpiler = function () {
            (this.requiresTranspilation_ = null),
              (this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE);
          }),
          (goog.Transpiler.prototype.createRequiresTranspilation_ =
            function () {
              function a(t, r) {
                e
                  ? (d[t] = !0)
                  : r()
                    ? ((c = t), (d[t] = !1))
                    : (e = d[t] = !0);
              }
              function b(a) {
                try {
                  return !!eval(a);
                } catch (e) {
                  return !1;
                }
              }
              var c = "es3",
                d = { es3: !1 },
                e = !1,
                f =
                  goog.global.navigator && goog.global.navigator.userAgent
                    ? goog.global.navigator.userAgent
                    : "";
              return (
                a("es5", function () {
                  return b("[1,].length==1");
                }),
                a("es6", function () {
                  return (
                    !f.match(/Edge\/(\d+)(\.\d)*/i) &&
                    b(
                      '(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()',
                    )
                  );
                }),
                a("es7", function () {
                  return b("2 ** 2 == 4");
                }),
                a("es8", function () {
                  return b("async () => 1, true");
                }),
                a("es9", function () {
                  return b("({...rest} = {}), true");
                }),
                a("es_next", function () {
                  return !1;
                }),
                { target: c, map: d }
              );
            }),
          (goog.Transpiler.prototype.needsTranspile = function (e, t) {
            if ("always" == goog.TRANSPILE) return !0;
            if ("never" == goog.TRANSPILE) return !1;
            if (!this.requiresTranspilation_) {
              var r = this.createRequiresTranspilation_();
              (this.requiresTranspilation_ = r.map),
                (this.transpilationTarget_ =
                  this.transpilationTarget_ || r.target);
            }
            if (e in this.requiresTranspilation_)
              return (
                !!this.requiresTranspilation_[e] ||
                !(
                  !goog.inHtmlDocument_() ||
                  "es6" != t ||
                  "noModule" in goog.global.document.createElement("script")
                )
              );
            throw Error("Unknown language mode: " + e);
          }),
          (goog.Transpiler.prototype.transpile = function (e, t) {
            return goog.transpile_(e, t, this.transpilationTarget_);
          }),
          (goog.transpiler_ = new goog.Transpiler()),
          (goog.protectScriptTag_ = function (e) {
            return e.replace(/<\/(SCRIPT)/gi, "\\x3c/$1");
          }),
          (goog.DebugLoader_ = function () {
            (this.dependencies_ = {}),
              (this.idToPath_ = {}),
              (this.written_ = {}),
              (this.loadingDeps_ = []),
              (this.depsToLoad_ = []),
              (this.paused_ = !1),
              (this.factory_ = new goog.DependencyFactory(goog.transpiler_)),
              (this.deferredCallbacks_ = {}),
              (this.deferredQueue_ = []);
          }),
          (goog.DebugLoader_.prototype.bootstrap = function (e, t) {
            function r() {
              n && (goog.global.setTimeout(n, 0), (n = null));
            }
            var n = t;
            if (e.length) {
              t = [];
              for (var o = 0; o < e.length; o++) {
                var i = this.getPathFromDeps_(e[o]);
                if (!i) throw Error("Unregonized namespace: " + e[o]);
                t.push(this.dependencies_[i]);
              }
              i = goog.require;
              var a = 0;
              for (o = 0; o < e.length; o++)
                i(e[o]),
                  t[o].onLoad(function () {
                    ++a == e.length && r();
                  });
            } else r();
          }),
          (goog.DebugLoader_.prototype.loadClosureDeps = function () {
            this.depsToLoad_.push(
              this.factory_.createDependency(
                goog.normalizePath_(goog.basePath + "deps.js"),
                "deps.js",
                [],
                [],
                {},
                !1,
              ),
            ),
              this.loadDeps_();
          }),
          (goog.DebugLoader_.prototype.requested = function (e, t) {
            (e = this.getPathFromDeps_(e)) &&
              (t || this.areDepsLoaded_(this.dependencies_[e].requires)) &&
              (t = this.deferredCallbacks_[e]) &&
              (delete this.deferredCallbacks_[e], t());
          }),
          (goog.DebugLoader_.prototype.setDependencyFactory = function (e) {
            this.factory_ = e;
          }),
          (goog.DebugLoader_.prototype.load_ = function (e) {
            if (!this.getPathFromDeps_(e))
              throw (
                ((e = "goog.require could not find: " + e),
                goog.logToConsole_(e),
                Error(e))
              );
            var t = this,
              r = [],
              n = function (e) {
                var o = t.getPathFromDeps_(e);
                if (!o) throw Error("Bad dependency path or symbol: " + e);
                if (!t.written_[o]) {
                  for (
                    t.written_[o] = !0, e = t.dependencies_[o], o = 0;
                    o < e.requires.length;
                    o++
                  )
                    goog.isProvided_(e.requires[o]) || n(e.requires[o]);
                  r.push(e);
                }
              };
            n(e),
              (e = !!this.depsToLoad_.length),
              (this.depsToLoad_ = this.depsToLoad_.concat(r)),
              this.paused_ || e || this.loadDeps_();
          }),
          (goog.DebugLoader_.prototype.loadDeps_ = function () {
            for (
              var e = this, t = this.paused_;
              this.depsToLoad_.length && !t;
            )
              !(function () {
                var r = !1,
                  n = e.depsToLoad_.shift(),
                  o = !1;
                e.loading_(n);
                var i = {
                  pause: function () {
                    if (r)
                      throw Error("Cannot call pause after the call to load.");
                    t = !0;
                  },
                  resume: function () {
                    r ? e.resume_() : (t = !1);
                  },
                  loaded: function () {
                    if (o) throw Error("Double call to loaded.");
                    (o = !0), e.loaded_(n);
                  },
                  pending: function () {
                    for (var t = [], r = 0; r < e.loadingDeps_.length; r++)
                      t.push(e.loadingDeps_[r]);
                    return t;
                  },
                  setModuleState: function (e) {
                    goog.moduleLoaderState_ = {
                      type: e,
                      moduleName: "",
                      declareLegacyNamespace: !1,
                    };
                  },
                  registerEs6ModuleExports: function (e, t, r) {
                    r &&
                      (goog.loadedModules_[r] = {
                        exports: t,
                        type: goog.ModuleType.ES6,
                        moduleId: r || "",
                      });
                  },
                  registerGoogModuleExports: function (e, t) {
                    goog.loadedModules_[e] = {
                      exports: t,
                      type: goog.ModuleType.GOOG,
                      moduleId: e,
                    };
                  },
                  clearModuleState: function () {
                    goog.moduleLoaderState_ = null;
                  },
                  defer: function (t) {
                    if (r)
                      throw Error(
                        "Cannot register with defer after the call to load.",
                      );
                    e.defer_(n, t);
                  },
                  areDepsLoaded: function () {
                    return e.areDepsLoaded_(n.requires);
                  },
                };
                try {
                  n.load(i);
                } finally {
                  r = !0;
                }
              })();
            t && this.pause_();
          }),
          (goog.DebugLoader_.prototype.pause_ = function () {
            this.paused_ = !0;
          }),
          (goog.DebugLoader_.prototype.resume_ = function () {
            this.paused_ && ((this.paused_ = !1), this.loadDeps_());
          }),
          (goog.DebugLoader_.prototype.loading_ = function (e) {
            this.loadingDeps_.push(e);
          }),
          (goog.DebugLoader_.prototype.loaded_ = function (e) {
            for (var t = 0; t < this.loadingDeps_.length; t++)
              if (this.loadingDeps_[t] == e) {
                this.loadingDeps_.splice(t, 1);
                break;
              }
            for (t = 0; t < this.deferredQueue_.length; t++)
              if (this.deferredQueue_[t] == e.path) {
                this.deferredQueue_.splice(t, 1);
                break;
              }
            if (
              this.loadingDeps_.length == this.deferredQueue_.length &&
              !this.depsToLoad_.length
            )
              for (; this.deferredQueue_.length; )
                this.requested(this.deferredQueue_.shift(), !0);
            e.loaded();
          }),
          (goog.DebugLoader_.prototype.areDepsLoaded_ = function (e) {
            for (var t = 0; t < e.length; t++) {
              var r = this.getPathFromDeps_(e[t]);
              if (
                !r ||
                (!(r in this.deferredCallbacks_) && !goog.isProvided_(e[t]))
              )
                return !1;
            }
            return !0;
          }),
          (goog.DebugLoader_.prototype.getPathFromDeps_ = function (e) {
            return e in this.idToPath_
              ? this.idToPath_[e]
              : e in this.dependencies_
                ? e
                : null;
          }),
          (goog.DebugLoader_.prototype.defer_ = function (e, t) {
            (this.deferredCallbacks_[e.path] = t),
              this.deferredQueue_.push(e.path);
          }),
          (goog.LoadController = function () {}),
          (goog.LoadController.prototype.pause = function () {}),
          (goog.LoadController.prototype.resume = function () {}),
          (goog.LoadController.prototype.loaded = function () {}),
          (goog.LoadController.prototype.pending = function () {}),
          (goog.LoadController.prototype.registerEs6ModuleExports = function (
            e,
            t,
            r,
          ) {}),
          (goog.LoadController.prototype.setModuleState = function (e) {}),
          (goog.LoadController.prototype.clearModuleState = function () {}),
          (goog.LoadController.prototype.defer = function (e) {}),
          (goog.LoadController.prototype.areDepsLoaded = function () {}),
          (goog.Dependency = function (e, t, r, n, o) {
            (this.path = e),
              (this.relativePath = t),
              (this.provides = r),
              (this.requires = n),
              (this.loadFlags = o),
              (this.loaded_ = !1),
              (this.loadCallbacks_ = []);
          }),
          (goog.Dependency.prototype.getPathName = function () {
            var e = this.path,
              t = e.indexOf("://");
            return (
              0 <= t &&
                0 <= (t = (e = e.substring(t + 3)).indexOf("/")) &&
                (e = e.substring(t + 1)),
              e
            );
          }),
          (goog.Dependency.prototype.onLoad = function (e) {
            this.loaded_ ? e() : this.loadCallbacks_.push(e);
          }),
          (goog.Dependency.prototype.loaded = function () {
            this.loaded_ = !0;
            var e = this.loadCallbacks_;
            this.loadCallbacks_ = [];
            for (var t = 0; t < e.length; t++) e[t]();
          }),
          (goog.Dependency.defer_ = !1),
          (goog.Dependency.callbackMap_ = {}),
          (goog.Dependency.registerCallback_ = function (e) {
            var t = Math.random().toString(32);
            return (goog.Dependency.callbackMap_[t] = e), t;
          }),
          (goog.Dependency.unregisterCallback_ = function (e) {
            delete goog.Dependency.callbackMap_[e];
          }),
          (goog.Dependency.callback_ = function (e, t) {
            if (!(e in goog.Dependency.callbackMap_))
              throw Error(
                "Callback key " +
                  e +
                  " does not exist (was base.js loaded more than once?).",
              );
            for (
              var r = goog.Dependency.callbackMap_[e], n = [], o = 1;
              o < arguments.length;
              o++
            )
              n.push(arguments[o]);
            r.apply(void 0, n);
          }),
          (goog.Dependency.prototype.load = function (e) {
            if (goog.global.CLOSURE_IMPORT_SCRIPT)
              goog.global.CLOSURE_IMPORT_SCRIPT(this.path)
                ? e.loaded()
                : e.pause();
            else if (goog.inHtmlDocument_()) {
              var t = goog.global.document;
              if (
                "complete" == t.readyState &&
                !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING
              ) {
                if (/\bdeps.js$/.test(this.path)) return void e.loaded();
                throw Error(
                  'Cannot write "' + this.path + '" after document load',
                );
              }
              if (
                !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING &&
                goog.isDocumentLoading_()
              ) {
                var r = goog.Dependency.registerCallback_(function (t) {
                    (goog.DebugLoader_.IS_OLD_IE_ &&
                      "complete" != t.readyState) ||
                      (goog.Dependency.unregisterCallback_(r), e.loaded());
                  }),
                  n =
                    !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce()
                      ? ' nonce="' + goog.getScriptNonce() + '"'
                      : "";
                (n =
                  '<script src="' +
                  this.path +
                  '" ' +
                  (goog.DebugLoader_.IS_OLD_IE_
                    ? "onreadystatechange"
                    : "onload") +
                  "=\"goog.Dependency.callback_('" +
                  r +
                  '\', this)" type="text/javascript" ' +
                  (goog.Dependency.defer_ ? "defer" : "") +
                  n +
                  "></script>"),
                  t.write(
                    goog.TRUSTED_TYPES_POLICY_
                      ? goog.TRUSTED_TYPES_POLICY_.createHTML(n)
                      : n,
                  );
              } else {
                var o = t.createElement("script");
                (o.defer = goog.Dependency.defer_),
                  (o.async = !1),
                  (o.type = "text/javascript"),
                  (n = goog.getScriptNonce()) && o.setAttribute("nonce", n),
                  goog.DebugLoader_.IS_OLD_IE_
                    ? (e.pause(),
                      (o.onreadystatechange = function () {
                        ("loaded" != o.readyState &&
                          "complete" != o.readyState) ||
                          (e.loaded(), e.resume());
                      }))
                    : (o.onload = function () {
                        (o.onload = null), e.loaded();
                      }),
                  (o.src = goog.TRUSTED_TYPES_POLICY_
                    ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path)
                    : this.path),
                  t.head.appendChild(o);
              }
            } else
              goog.logToConsole_(
                "Cannot use default debug loader outside of HTML documents.",
              ),
                "deps.js" == this.relativePath
                  ? (goog.logToConsole_(
                      "Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true.",
                    ),
                    e.loaded())
                  : e.pause();
          }),
          (goog.Es6ModuleDependency = function (e, t, r, n, o) {
            goog.Dependency.call(this, e, t, r, n, o);
          }),
          goog.inherits(goog.Es6ModuleDependency, goog.Dependency),
          (goog.Es6ModuleDependency.prototype.load = function (e) {
            if (goog.global.CLOSURE_IMPORT_SCRIPT)
              goog.global.CLOSURE_IMPORT_SCRIPT(this.path)
                ? e.loaded()
                : e.pause();
            else if (goog.inHtmlDocument_()) {
              var t = goog.global.document,
                r = this;
              if (goog.isDocumentLoading_()) {
                var n = function (e, r) {
                  (e = r
                    ? '<script type="module" crossorigin>' + r + "</script>"
                    : '<script type="module" crossorigin src="' +
                      e +
                      '"></script>'),
                    t.write(
                      goog.TRUSTED_TYPES_POLICY_
                        ? goog.TRUSTED_TYPES_POLICY_.createHTML(e)
                        : e,
                    );
                };
                goog.Dependency.defer_ = !0;
              } else
                n = function (e, r) {
                  var n = t.createElement("script");
                  (n.defer = !0),
                    (n.async = !1),
                    (n.type = "module"),
                    n.setAttribute("crossorigin", !0);
                  var o = goog.getScriptNonce();
                  o && n.setAttribute("nonce", o),
                    r
                      ? (n.textContent = goog.TRUSTED_TYPES_POLICY_
                          ? goog.TRUSTED_TYPES_POLICY_.createScript(r)
                          : r)
                      : (n.src = goog.TRUSTED_TYPES_POLICY_
                          ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(e)
                          : e),
                    t.head.appendChild(n);
                };
              var o = goog.Dependency.registerCallback_(function () {
                goog.Dependency.unregisterCallback_(o),
                  e.setModuleState(goog.ModuleType.ES6);
              });
              n(void 0, 'goog.Dependency.callback_("' + o + '")'),
                n(this.path, void 0);
              var i = goog.Dependency.registerCallback_(function (t) {
                goog.Dependency.unregisterCallback_(i),
                  e.registerEs6ModuleExports(
                    r.path,
                    t,
                    goog.moduleLoaderState_.moduleName,
                  );
              });
              n(
                void 0,
                'import * as m from "' +
                  this.path +
                  '"; goog.Dependency.callback_("' +
                  i +
                  '", m)',
              );
              var a = goog.Dependency.registerCallback_(function () {
                goog.Dependency.unregisterCallback_(a),
                  e.clearModuleState(),
                  e.loaded();
              });
              n(void 0, 'goog.Dependency.callback_("' + a + '")');
            } else
              goog.logToConsole_(
                "Cannot use default debug loader outside of HTML documents.",
              ),
                e.pause();
          }),
          (goog.TransformedDependency = function (e, t, r, n, o) {
            goog.Dependency.call(this, e, t, r, n, o),
              (this.contents_ = null),
              (this.lazyFetch_ =
                !goog.inHtmlDocument_() ||
                !("noModule" in goog.global.document.createElement("script")));
          }),
          goog.inherits(goog.TransformedDependency, goog.Dependency),
          (goog.TransformedDependency.prototype.load = function (e) {
            function t() {
              (n.contents_ = goog.loadFileSync_(n.path)),
                n.contents_ &&
                  ((n.contents_ = n.transform(n.contents_)),
                  n.contents_ && (n.contents_ += "\n//# sourceURL=" + n.path));
            }
            function r() {
              if ((n.lazyFetch_ && t(), n.contents_)) {
                o && e.setModuleState(goog.ModuleType.ES6);
                try {
                  var r = n.contents_;
                  if (((n.contents_ = null), goog.globalEval(r), o))
                    var i = goog.moduleLoaderState_.moduleName;
                } finally {
                  o && e.clearModuleState();
                }
                o &&
                  goog.global.$jscomp.require.ensure(
                    [n.getPathName()],
                    function () {
                      e.registerEs6ModuleExports(
                        n.path,
                        goog.global.$jscomp.require(n.getPathName()),
                        i,
                      );
                    },
                  ),
                  e.loaded();
              }
            }
            var n = this;
            if (goog.global.CLOSURE_IMPORT_SCRIPT)
              t(),
                this.contents_ &&
                goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_)
                  ? ((this.contents_ = null), e.loaded())
                  : e.pause();
            else {
              var o = this.loadFlags.module == goog.ModuleType.ES6;
              this.lazyFetch_ || t();
              var i = 1 < e.pending().length,
                a = i && goog.DebugLoader_.IS_OLD_IE_;
              if (
                ((i =
                  goog.Dependency.defer_ && (i || goog.isDocumentLoading_())),
                a || i)
              )
                e.defer(function () {
                  r();
                });
              else {
                var s = goog.global.document;
                if (
                  ((a =
                    goog.inHtmlDocument_() && "ActiveXObject" in goog.global),
                  o &&
                    goog.inHtmlDocument_() &&
                    goog.isDocumentLoading_() &&
                    !a)
                ) {
                  (goog.Dependency.defer_ = !0), e.pause();
                  var l = s.onreadystatechange;
                  s.onreadystatechange = function () {
                    "interactive" == s.readyState &&
                      ((s.onreadystatechange = l), r(), e.resume()),
                      goog.isFunction(l) && l.apply(void 0, arguments);
                  };
                } else
                  !goog.DebugLoader_.IS_OLD_IE_ &&
                  goog.inHtmlDocument_() &&
                  goog.isDocumentLoading_()
                    ? (function () {
                        var e = goog.global.document,
                          t = goog.Dependency.registerCallback_(function () {
                            goog.Dependency.unregisterCallback_(t), r();
                          }),
                          n =
                            '<script type="text/javascript">' +
                            goog.protectScriptTag_(
                              'goog.Dependency.callback_("' + t + '");',
                            ) +
                            "</script>";
                        e.write(
                          goog.TRUSTED_TYPES_POLICY_
                            ? goog.TRUSTED_TYPES_POLICY_.createHTML(n)
                            : n,
                        );
                      })()
                    : r();
              }
            }
          }),
          (goog.TransformedDependency.prototype.transform = function (e) {}),
          (goog.TranspiledDependency = function (e, t, r, n, o, i) {
            goog.TransformedDependency.call(this, e, t, r, n, o),
              (this.transpiler = i);
          }),
          goog.inherits(goog.TranspiledDependency, goog.TransformedDependency),
          (goog.TranspiledDependency.prototype.transform = function (e) {
            return this.transpiler.transpile(e, this.getPathName());
          }),
          (goog.PreTranspiledEs6ModuleDependency = function (e, t, r, n, o) {
            goog.TransformedDependency.call(this, e, t, r, n, o);
          }),
          goog.inherits(
            goog.PreTranspiledEs6ModuleDependency,
            goog.TransformedDependency,
          ),
          (goog.PreTranspiledEs6ModuleDependency.prototype.transform =
            function (e) {
              return e;
            }),
          (goog.GoogModuleDependency = function (e, t, r, n, o, i, a) {
            goog.TransformedDependency.call(this, e, t, r, n, o),
              (this.needsTranspile_ = i),
              (this.transpiler_ = a);
          }),
          goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency),
          (goog.GoogModuleDependency.prototype.transform = function (e) {
            return (
              this.needsTranspile_ &&
                (e = this.transpiler_.transpile(e, this.getPathName())),
              goog.LOAD_MODULE_USING_EVAL && void 0 !== goog.global.JSON
                ? "goog.loadModule(" +
                  goog.global.JSON.stringify(
                    e + "\n//# sourceURL=" + this.path + "\n",
                  ) +
                  ");"
                : 'goog.loadModule(function(exports) {"use strict";' +
                  e +
                  "\n;return exports});\n//# sourceURL=" +
                  this.path +
                  "\n"
            );
          }),
          (goog.DebugLoader_.IS_OLD_IE_ = !(
            goog.global.atob ||
            !goog.global.document ||
            !goog.global.document.all
          )),
          (goog.DebugLoader_.prototype.addDependency = function (e, t, r, n) {
            (t = t || []), (e = e.replace(/\\/g, "/"));
            var o = goog.normalizePath_(goog.basePath + e);
            for (
              (n && "boolean" != typeof n) ||
                (n = n ? { module: goog.ModuleType.GOOG } : {}),
                r = this.factory_.createDependency(
                  o,
                  e,
                  t,
                  r,
                  n,
                  goog.transpiler_.needsTranspile(n.lang || "es3", n.module),
                ),
                this.dependencies_[o] = r,
                r = 0;
              r < t.length;
              r++
            )
              this.idToPath_[t[r]] = o;
            this.idToPath_[e] = o;
          }),
          (goog.DependencyFactory = function (e) {
            this.transpiler = e;
          }),
          (goog.DependencyFactory.prototype.createDependency = function (
            e,
            t,
            r,
            n,
            o,
            i,
          ) {
            return o.module == goog.ModuleType.GOOG
              ? new goog.GoogModuleDependency(e, t, r, n, o, i, this.transpiler)
              : i
                ? new goog.TranspiledDependency(e, t, r, n, o, this.transpiler)
                : o.module == goog.ModuleType.ES6
                  ? "never" == goog.TRANSPILE &&
                    goog.ASSUME_ES_MODULES_TRANSPILED
                    ? new goog.PreTranspiledEs6ModuleDependency(e, t, r, n, o)
                    : new goog.Es6ModuleDependency(e, t, r, n, o)
                  : new goog.Dependency(e, t, r, n, o);
          }),
          (goog.debugLoader_ = new goog.DebugLoader_()),
          (goog.loadClosureDeps = function () {
            goog.debugLoader_.loadClosureDeps();
          }),
          (goog.setDependencyFactory = function (e) {
            goog.debugLoader_.setDependencyFactory(e);
          }),
          goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(),
          (goog.bootstrap = function (e, t) {
            goog.debugLoader_.bootstrap(e, t);
          })),
        (goog.TRUSTED_TYPES_POLICY_NAME = ""),
        (goog.identity_ = function (e) {
          return e;
        }),
        (goog.createTrustedTypesPolicy = function (e) {
          var t = null,
            r = goog.global.trustedTypes || goog.global.TrustedTypes;
          if (!r || !r.createPolicy) return t;
          try {
            t = r.createPolicy(e, {
              createHTML: goog.identity_,
              createScript: goog.identity_,
              createScriptURL: goog.identity_,
              createURL: goog.identity_,
            });
          } catch (e) {
            goog.logToConsole_(e.message);
          }
          return t;
        }),
        (goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME
          ? goog.createTrustedTypesPolicy(
              goog.TRUSTED_TYPES_POLICY_NAME + "#base",
            )
          : null),
        (goog.object = {}),
        (goog.object.is = function (e, t) {
          return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
        }),
        (goog.object.forEach = function (e, t, r) {
          for (var n in e) t.call(r, e[n], n, e);
        }),
        (goog.object.filter = function (e, t, r) {
          var n,
            o = {};
          for (n in e) t.call(r, e[n], n, e) && (o[n] = e[n]);
          return o;
        }),
        (goog.object.map = function (e, t, r) {
          var n,
            o = {};
          for (n in e) o[n] = t.call(r, e[n], n, e);
          return o;
        }),
        (goog.object.some = function (e, t, r) {
          for (var n in e) if (t.call(r, e[n], n, e)) return !0;
          return !1;
        }),
        (goog.object.every = function (e, t, r) {
          for (var n in e) if (!t.call(r, e[n], n, e)) return !1;
          return !0;
        }),
        (goog.object.getCount = function (e) {
          var t,
            r = 0;
          for (t in e) r++;
          return r;
        }),
        (goog.object.getAnyKey = function (e) {
          for (var t in e) return t;
        }),
        (goog.object.getAnyValue = function (e) {
          for (var t in e) return e[t];
        }),
        (goog.object.contains = function (e, t) {
          return goog.object.containsValue(e, t);
        }),
        (goog.object.getValues = function (e) {
          var t,
            r = [],
            n = 0;
          for (t in e) r[n++] = e[t];
          return r;
        }),
        (goog.object.getKeys = function (e) {
          var t,
            r = [],
            n = 0;
          for (t in e) r[n++] = t;
          return r;
        }),
        (goog.object.getValueByKeys = function (e, t) {
          var r = goog.isArrayLike(t),
            n = r ? t : arguments;
          for (r = r ? 0 : 1; r < n.length; r++) {
            if (null == e) return;
            e = e[n[r]];
          }
          return e;
        }),
        (goog.object.containsKey = function (e, t) {
          return null !== e && t in e;
        }),
        (goog.object.containsValue = function (e, t) {
          for (var r in e) if (e[r] == t) return !0;
          return !1;
        }),
        (goog.object.findKey = function (e, t, r) {
          for (var n in e) if (t.call(r, e[n], n, e)) return n;
        }),
        (goog.object.findValue = function (e, t, r) {
          return (t = goog.object.findKey(e, t, r)) && e[t];
        }),
        (goog.object.isEmpty = function (e) {
          for (var t in e) return !1;
          return !0;
        }),
        (goog.object.clear = function (e) {
          for (var t in e) delete e[t];
        }),
        (goog.object.remove = function (e, t) {
          var r;
          return (r = t in e) && delete e[t], r;
        }),
        (goog.object.add = function (e, t, r) {
          if (null !== e && t in e)
            throw Error('The object already contains the key "' + t + '"');
          goog.object.set(e, t, r);
        }),
        (goog.object.get = function (e, t, r) {
          return null !== e && t in e ? e[t] : r;
        }),
        (goog.object.set = function (e, t, r) {
          e[t] = r;
        }),
        (goog.object.setIfUndefined = function (e, t, r) {
          return t in e ? e[t] : (e[t] = r);
        }),
        (goog.object.setWithReturnValueIfNotSet = function (e, t, r) {
          return t in e ? e[t] : ((r = r()), (e[t] = r));
        }),
        (goog.object.equals = function (e, t) {
          for (var r in e) if (!(r in t) || e[r] !== t[r]) return !1;
          for (var n in t) if (!(n in e)) return !1;
          return !0;
        }),
        (goog.object.clone = function (e) {
          var t,
            r = {};
          for (t in e) r[t] = e[t];
          return r;
        }),
        (goog.object.unsafeClone = function (e) {
          var t = goog.typeOf(e);
          if ("object" == t || "array" == t) {
            if (goog.isFunction(e.clone)) return e.clone();
            for (var r in ((t = "array" == t ? [] : {}), e))
              t[r] = goog.object.unsafeClone(e[r]);
            return t;
          }
          return e;
        }),
        (goog.object.transpose = function (e) {
          var t,
            r = {};
          for (t in e) r[e[t]] = t;
          return r;
        }),
        (goog.object.PROTOTYPE_FIELDS_ =
          "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
            " ",
          )),
        (goog.object.extend = function (e, t) {
          for (var r, n, o = 1; o < arguments.length; o++) {
            for (r in (n = arguments[o])) e[r] = n[r];
            for (var i = 0; i < goog.object.PROTOTYPE_FIELDS_.length; i++)
              (r = goog.object.PROTOTYPE_FIELDS_[i]),
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
        }),
        (goog.object.create = function (e) {
          var t = arguments.length;
          if (1 == t && Array.isArray(arguments[0]))
            return goog.object.create.apply(null, arguments[0]);
          if (t % 2) throw Error("Uneven number of arguments");
          for (var r = {}, n = 0; n < t; n += 2)
            r[arguments[n]] = arguments[n + 1];
          return r;
        }),
        (goog.object.createSet = function (e) {
          var t = arguments.length;
          if (1 == t && Array.isArray(arguments[0]))
            return goog.object.createSet.apply(null, arguments[0]);
          for (var r = {}, n = 0; n < t; n++) r[arguments[n]] = !0;
          return r;
        }),
        (goog.object.createImmutableView = function (e) {
          var t = e;
          return (
            Object.isFrozen &&
              !Object.isFrozen(e) &&
              ((t = Object.create(e)), Object.freeze(t)),
            t
          );
        }),
        (goog.object.isImmutableView = function (e) {
          return !!Object.isFrozen && Object.isFrozen(e);
        }),
        (goog.object.getAllPropertyNames = function (e, t, r) {
          if (!e) return [];
          if (!Object.getOwnPropertyNames || !Object.getPrototypeOf)
            return goog.object.getKeys(e);
          for (
            var n = {};
            e &&
            (e !== Object.prototype || t) &&
            (e !== Function.prototype || r);
          ) {
            for (
              var o = Object.getOwnPropertyNames(e), i = 0;
              i < o.length;
              i++
            )
              n[o[i]] = !0;
            e = Object.getPrototypeOf(e);
          }
          return goog.object.getKeys(n);
        }),
        (goog.object.getSuperClass = function (e) {
          return (e = Object.getPrototypeOf(e.prototype)) && e.constructor;
        });
      var jspb = { asserts: {} };
      (jspb.asserts.doAssertFailure = function (e, t, r, n) {
        var o = "Assertion failed";
        if (r) {
          o += ": " + r;
          var i = n;
        } else e && ((o += ": " + e), (i = t));
        throw Error("" + o, i || []);
      }),
        (jspb.asserts.assert = function (e, t, r) {
          for (var n = [], o = 2; o < arguments.length; ++o)
            n[o - 2] = arguments[o];
          return e || jspb.asserts.doAssertFailure("", null, t, n), e;
        }),
        (jspb.asserts.assertString = function (e, t, r) {
          for (var n = [], o = 2; o < arguments.length; ++o)
            n[o - 2] = arguments[o];
          return (
            "string" != typeof e &&
              jspb.asserts.doAssertFailure(
                "Expected string but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                n,
              ),
            e
          );
        }),
        (jspb.asserts.assertArray = function (e, t, r) {
          for (var n = [], o = 2; o < arguments.length; ++o)
            n[o - 2] = arguments[o];
          return (
            Array.isArray(e) ||
              jspb.asserts.doAssertFailure(
                "Expected array but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                n,
              ),
            e
          );
        }),
        (jspb.asserts.fail = function (e, t) {
          for (var r = [], n = 1; n < arguments.length; ++n)
            r[n - 1] = arguments[n];
          throw Error("Failure" + (e ? ": " + e : ""), r);
        }),
        (jspb.asserts.assertInstanceof = function (e, t, r, n) {
          for (var o = [], i = 3; i < arguments.length; ++i)
            o[i - 3] = arguments[i];
          return (
            e instanceof t ||
              jspb.asserts.doAssertFailure(
                "Expected instanceof %s but got %s.",
                [jspb.asserts.getType(t), jspb.asserts.getType(e)],
                r,
                o,
              ),
            e
          );
        }),
        (jspb.asserts.getType = function (e) {
          return e instanceof Function
            ? e.displayName || e.name || "unknown type name"
            : e instanceof Object
              ? e.constructor.displayName ||
                e.constructor.name ||
                Object.prototype.toString.call(e)
              : null === e
                ? "null"
                : typeof e;
        }),
        (jspb.BinaryConstants = {}),
        (jspb.ConstBinaryMessage = function () {}),
        (jspb.BinaryMessage = function () {}),
        (jspb.BinaryConstants.FieldType = {
          INVALID: -1,
          DOUBLE: 1,
          FLOAT: 2,
          INT64: 3,
          UINT64: 4,
          INT32: 5,
          FIXED64: 6,
          FIXED32: 7,
          BOOL: 8,
          STRING: 9,
          GROUP: 10,
          MESSAGE: 11,
          BYTES: 12,
          UINT32: 13,
          ENUM: 14,
          SFIXED32: 15,
          SFIXED64: 16,
          SINT32: 17,
          SINT64: 18,
          FHASH64: 30,
          VHASH64: 31,
        }),
        (jspb.BinaryConstants.WireType = {
          INVALID: -1,
          VARINT: 0,
          FIXED64: 1,
          DELIMITED: 2,
          START_GROUP: 3,
          END_GROUP: 4,
          FIXED32: 5,
        }),
        (jspb.BinaryConstants.FieldTypeToWireType = function (e) {
          var t = jspb.BinaryConstants.FieldType,
            r = jspb.BinaryConstants.WireType;
          switch (e) {
            case t.INT32:
            case t.INT64:
            case t.UINT32:
            case t.UINT64:
            case t.SINT32:
            case t.SINT64:
            case t.BOOL:
            case t.ENUM:
            case t.VHASH64:
              return r.VARINT;
            case t.DOUBLE:
            case t.FIXED64:
            case t.SFIXED64:
            case t.FHASH64:
              return r.FIXED64;
            case t.STRING:
            case t.MESSAGE:
            case t.BYTES:
              return r.DELIMITED;
            case t.FLOAT:
            case t.FIXED32:
            case t.SFIXED32:
              return r.FIXED32;
            default:
              return r.INVALID;
          }
        }),
        (jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1),
        (jspb.BinaryConstants.FLOAT32_EPS = 1401298464324817e-60),
        (jspb.BinaryConstants.FLOAT32_MIN = 11754943508222875e-54),
        (jspb.BinaryConstants.FLOAT32_MAX = 34028234663852886e22),
        (jspb.BinaryConstants.FLOAT64_EPS = 5e-324),
        (jspb.BinaryConstants.FLOAT64_MIN = 22250738585072014e-324),
        (jspb.BinaryConstants.FLOAT64_MAX = 17976931348623157e292),
        (jspb.BinaryConstants.TWO_TO_20 = 1048576),
        (jspb.BinaryConstants.TWO_TO_23 = 8388608),
        (jspb.BinaryConstants.TWO_TO_31 = 2147483648),
        (jspb.BinaryConstants.TWO_TO_32 = 4294967296),
        (jspb.BinaryConstants.TWO_TO_52 = 4503599627370496),
        (jspb.BinaryConstants.TWO_TO_63 = 0x8000000000000000),
        (jspb.BinaryConstants.TWO_TO_64 = 0x10000000000000000),
        (jspb.BinaryConstants.ZERO_HASH = "\0\0\0\0\0\0\0\0"),
        (goog.debug = {}),
        (goog.debug.Error = function (e) {
          if (Error.captureStackTrace)
            Error.captureStackTrace(this, goog.debug.Error);
          else {
            var t = Error().stack;
            t && (this.stack = t);
          }
          e && (this.message = String(e)), (this.reportErrorToServer = !0);
        }),
        goog.inherits(goog.debug.Error, Error),
        (goog.debug.Error.prototype.name = "CustomError"),
        (goog.dom = {}),
        (goog.dom.NodeType = {
          ELEMENT: 1,
          ATTRIBUTE: 2,
          TEXT: 3,
          CDATA_SECTION: 4,
          ENTITY_REFERENCE: 5,
          ENTITY: 6,
          PROCESSING_INSTRUCTION: 7,
          COMMENT: 8,
          DOCUMENT: 9,
          DOCUMENT_TYPE: 10,
          DOCUMENT_FRAGMENT: 11,
          NOTATION: 12,
        }),
        (goog.asserts = {}),
        (goog.asserts.ENABLE_ASSERTS = goog.DEBUG),
        (goog.asserts.AssertionError = function (e, t) {
          goog.debug.Error.call(this, goog.asserts.subs_(e, t)),
            (this.messagePattern = e);
        }),
        goog.inherits(goog.asserts.AssertionError, goog.debug.Error),
        (goog.asserts.AssertionError.prototype.name = "AssertionError"),
        (goog.asserts.DEFAULT_ERROR_HANDLER = function (e) {
          throw e;
        }),
        (goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER),
        (goog.asserts.subs_ = function (e, t) {
          for (
            var r = "", n = (e = e.split("%s")).length - 1, o = 0;
            o < n;
            o++
          )
            r += e[o] + (o < t.length ? t[o] : "%s");
          return r + e[n];
        }),
        (goog.asserts.doAssertFailure_ = function (e, t, r, n) {
          var o = "Assertion failed";
          if (r) {
            o += ": " + r;
            var i = n;
          } else e && ((o += ": " + e), (i = t));
          (e = new goog.asserts.AssertionError("" + o, i || [])),
            goog.asserts.errorHandler_(e);
        }),
        (goog.asserts.setErrorHandler = function (e) {
          goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = e);
        }),
        (goog.asserts.assert = function (e, t, r) {
          return (
            goog.asserts.ENABLE_ASSERTS &&
              !e &&
              goog.asserts.doAssertFailure_(
                "",
                null,
                t,
                Array.prototype.slice.call(arguments, 2),
              ),
            e
          );
        }),
        (goog.asserts.assertExists = function (e, t, r) {
          return (
            goog.asserts.ENABLE_ASSERTS &&
              null == e &&
              goog.asserts.doAssertFailure_(
                "Expected to exist: %s.",
                [e],
                t,
                Array.prototype.slice.call(arguments, 2),
              ),
            e
          );
        }),
        (goog.asserts.fail = function (e, t) {
          goog.asserts.ENABLE_ASSERTS &&
            goog.asserts.errorHandler_(
              new goog.asserts.AssertionError(
                "Failure" + (e ? ": " + e : ""),
                Array.prototype.slice.call(arguments, 1),
              ),
            );
        }),
        (goog.asserts.assertNumber = function (e, t, r) {
          return (
            goog.asserts.ENABLE_ASSERTS &&
              "number" != typeof e &&
              goog.asserts.doAssertFailure_(
                "Expected number but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                Array.prototype.slice.call(arguments, 2),
              ),
            e
          );
        }),
        (goog.asserts.assertString = function (e, t, r) {
          return (
            goog.asserts.ENABLE_ASSERTS &&
              "string" != typeof e &&
              goog.asserts.doAssertFailure_(
                "Expected string but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                Array.prototype.slice.call(arguments, 2),
              ),
            e
          );
        }),
        (goog.asserts.assertFunction = function (e, t, r) {
          return (
            goog.asserts.ENABLE_ASSERTS &&
              !goog.isFunction(e) &&
              goog.asserts.doAssertFailure_(
                "Expected function but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                Array.prototype.slice.call(arguments, 2),
              ),
            e
          );
        }),
        (goog.asserts.assertObject = function (e, t, r) {
          return (
            goog.asserts.ENABLE_ASSERTS &&
              !goog.isObject(e) &&
              goog.asserts.doAssertFailure_(
                "Expected object but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                Array.prototype.slice.call(arguments, 2),
              ),
            e
          );
        }),
        (goog.asserts.assertArray = function (e, t, r) {
          return (
            goog.asserts.ENABLE_ASSERTS &&
              !Array.isArray(e) &&
              goog.asserts.doAssertFailure_(
                "Expected array but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                Array.prototype.slice.call(arguments, 2),
              ),
            e
          );
        }),
        (goog.asserts.assertBoolean = function (e, t, r) {
          return (
            goog.asserts.ENABLE_ASSERTS &&
              "boolean" != typeof e &&
              goog.asserts.doAssertFailure_(
                "Expected boolean but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                Array.prototype.slice.call(arguments, 2),
              ),
            e
          );
        }),
        (goog.asserts.assertElement = function (e, t, r) {
          return (
            !goog.asserts.ENABLE_ASSERTS ||
              (goog.isObject(e) && e.nodeType == goog.dom.NodeType.ELEMENT) ||
              goog.asserts.doAssertFailure_(
                "Expected Element but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                Array.prototype.slice.call(arguments, 2),
              ),
            e
          );
        }),
        (goog.asserts.assertInstanceof = function (e, t, r, n) {
          return (
            !goog.asserts.ENABLE_ASSERTS ||
              e instanceof t ||
              goog.asserts.doAssertFailure_(
                "Expected instanceof %s but got %s.",
                [goog.asserts.getType_(t), goog.asserts.getType_(e)],
                r,
                Array.prototype.slice.call(arguments, 3),
              ),
            e
          );
        }),
        (goog.asserts.assertFinite = function (e, t, r) {
          return (
            !goog.asserts.ENABLE_ASSERTS ||
              ("number" == typeof e && isFinite(e)) ||
              goog.asserts.doAssertFailure_(
                "Expected %s to be a finite number but it is not.",
                [e],
                t,
                Array.prototype.slice.call(arguments, 2),
              ),
            e
          );
        }),
        (goog.asserts.assertObjectPrototypeIsIntact = function () {
          for (var e in Object.prototype)
            goog.asserts.fail(
              e + " should not be enumerable in Object.prototype.",
            );
        }),
        (goog.asserts.getType_ = function (e) {
          return e instanceof Function
            ? e.displayName || e.name || "unknown type name"
            : e instanceof Object
              ? e.constructor.displayName ||
                e.constructor.name ||
                Object.prototype.toString.call(e)
              : null === e
                ? "null"
                : typeof e;
        }),
        (goog.array = {}),
        (goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE),
        (goog.array.ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR),
        (goog.array.peek = function (e) {
          return e[e.length - 1];
        }),
        (goog.array.last = goog.array.peek),
        (goog.array.indexOf =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf)
            ? function (e, t, r) {
                return (
                  goog.asserts.assert(null != e.length),
                  Array.prototype.indexOf.call(e, t, r)
                );
              }
            : function (e, t, r) {
                if (
                  ((r = null == r ? 0 : 0 > r ? Math.max(0, e.length + r) : r),
                  "string" == typeof e)
                )
                  return "string" != typeof t || 1 != t.length
                    ? -1
                    : e.indexOf(t, r);
                for (; r < e.length; r++) if (r in e && e[r] === t) return r;
                return -1;
              }),
        (goog.array.lastIndexOf =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf)
            ? function (e, t, r) {
                return (
                  goog.asserts.assert(null != e.length),
                  Array.prototype.lastIndexOf.call(
                    e,
                    t,
                    null == r ? e.length - 1 : r,
                  )
                );
              }
            : function (e, t, r) {
                if (
                  (0 > (r = null == r ? e.length - 1 : r) &&
                    (r = Math.max(0, e.length + r)),
                  "string" == typeof e)
                )
                  return "string" != typeof t || 1 != t.length
                    ? -1
                    : e.lastIndexOf(t, r);
                for (; 0 <= r; r--) if (r in e && e[r] === t) return r;
                return -1;
              }),
        (goog.array.forEach =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach)
            ? function (e, t, r) {
                goog.asserts.assert(null != e.length),
                  Array.prototype.forEach.call(e, t, r);
              }
            : function (e, t, r) {
                for (
                  var n = e.length,
                    o = "string" == typeof e ? e.split("") : e,
                    i = 0;
                  i < n;
                  i++
                )
                  i in o && t.call(r, o[i], i, e);
              }),
        (goog.array.forEachRight = function (e, t, r) {
          var n = e.length,
            o = "string" == typeof e ? e.split("") : e;
          for (--n; 0 <= n; --n) n in o && t.call(r, o[n], n, e);
        }),
        (goog.array.filter =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter)
            ? function (e, t, r) {
                return (
                  goog.asserts.assert(null != e.length),
                  Array.prototype.filter.call(e, t, r)
                );
              }
            : function (e, t, r) {
                for (
                  var n = e.length,
                    o = [],
                    i = 0,
                    a = "string" == typeof e ? e.split("") : e,
                    s = 0;
                  s < n;
                  s++
                )
                  if (s in a) {
                    var l = a[s];
                    t.call(r, l, s, e) && (o[i++] = l);
                  }
                return o;
              }),
        (goog.array.map =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map)
            ? function (e, t, r) {
                return (
                  goog.asserts.assert(null != e.length),
                  Array.prototype.map.call(e, t, r)
                );
              }
            : function (e, t, r) {
                for (
                  var n = e.length,
                    o = Array(n),
                    i = "string" == typeof e ? e.split("") : e,
                    a = 0;
                  a < n;
                  a++
                )
                  a in i && (o[a] = t.call(r, i[a], a, e));
                return o;
              }),
        (goog.array.reduce =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce)
            ? function (e, t, r, n) {
                return (
                  goog.asserts.assert(null != e.length),
                  n && (t = goog.bind(t, n)),
                  Array.prototype.reduce.call(e, t, r)
                );
              }
            : function (e, t, r, n) {
                var o = r;
                return (
                  goog.array.forEach(e, function (r, i) {
                    o = t.call(n, o, r, i, e);
                  }),
                  o
                );
              }),
        (goog.array.reduceRight =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight)
            ? function (e, t, r, n) {
                return (
                  goog.asserts.assert(null != e.length),
                  goog.asserts.assert(null != t),
                  n && (t = goog.bind(t, n)),
                  Array.prototype.reduceRight.call(e, t, r)
                );
              }
            : function (e, t, r, n) {
                var o = r;
                return (
                  goog.array.forEachRight(e, function (r, i) {
                    o = t.call(n, o, r, i, e);
                  }),
                  o
                );
              }),
        (goog.array.some =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some)
            ? function (e, t, r) {
                return (
                  goog.asserts.assert(null != e.length),
                  Array.prototype.some.call(e, t, r)
                );
              }
            : function (e, t, r) {
                for (
                  var n = e.length,
                    o = "string" == typeof e ? e.split("") : e,
                    i = 0;
                  i < n;
                  i++
                )
                  if (i in o && t.call(r, o[i], i, e)) return !0;
                return !1;
              }),
        (goog.array.every =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every)
            ? function (e, t, r) {
                return (
                  goog.asserts.assert(null != e.length),
                  Array.prototype.every.call(e, t, r)
                );
              }
            : function (e, t, r) {
                for (
                  var n = e.length,
                    o = "string" == typeof e ? e.split("") : e,
                    i = 0;
                  i < n;
                  i++
                )
                  if (i in o && !t.call(r, o[i], i, e)) return !1;
                return !0;
              }),
        (goog.array.count = function (e, t, r) {
          var n = 0;
          return (
            goog.array.forEach(
              e,
              function (e, o, i) {
                t.call(r, e, o, i) && ++n;
              },
              r,
            ),
            n
          );
        }),
        (goog.array.find = function (e, t, r) {
          return 0 > (t = goog.array.findIndex(e, t, r))
            ? null
            : "string" == typeof e
              ? e.charAt(t)
              : e[t];
        }),
        (goog.array.findIndex = function (e, t, r) {
          for (
            var n = e.length, o = "string" == typeof e ? e.split("") : e, i = 0;
            i < n;
            i++
          )
            if (i in o && t.call(r, o[i], i, e)) return i;
          return -1;
        }),
        (goog.array.findRight = function (e, t, r) {
          return 0 > (t = goog.array.findIndexRight(e, t, r))
            ? null
            : "string" == typeof e
              ? e.charAt(t)
              : e[t];
        }),
        (goog.array.findIndexRight = function (e, t, r) {
          var n = e.length,
            o = "string" == typeof e ? e.split("") : e;
          for (--n; 0 <= n; n--) if (n in o && t.call(r, o[n], n, e)) return n;
          return -1;
        }),
        (goog.array.contains = function (e, t) {
          return 0 <= goog.array.indexOf(e, t);
        }),
        (goog.array.isEmpty = function (e) {
          return 0 == e.length;
        }),
        (goog.array.clear = function (e) {
          if (!Array.isArray(e))
            for (var t = e.length - 1; 0 <= t; t--) delete e[t];
          e.length = 0;
        }),
        (goog.array.insert = function (e, t) {
          goog.array.contains(e, t) || e.push(t);
        }),
        (goog.array.insertAt = function (e, t, r) {
          goog.array.splice(e, r, 0, t);
        }),
        (goog.array.insertArrayAt = function (e, t, r) {
          goog.partial(goog.array.splice, e, r, 0).apply(null, t);
        }),
        (goog.array.insertBefore = function (e, t, r) {
          var n;
          2 == arguments.length || 0 > (n = goog.array.indexOf(e, r))
            ? e.push(t)
            : goog.array.insertAt(e, t, n);
        }),
        (goog.array.remove = function (e, t) {
          var r;
          return (
            (r = 0 <= (t = goog.array.indexOf(e, t))) &&
              goog.array.removeAt(e, t),
            r
          );
        }),
        (goog.array.removeLast = function (e, t) {
          return (
            0 <= (t = goog.array.lastIndexOf(e, t)) &&
            (goog.array.removeAt(e, t), !0)
          );
        }),
        (goog.array.removeAt = function (e, t) {
          return (
            goog.asserts.assert(null != e.length),
            1 == Array.prototype.splice.call(e, t, 1).length
          );
        }),
        (goog.array.removeIf = function (e, t, r) {
          return (
            0 <= (t = goog.array.findIndex(e, t, r)) &&
            (goog.array.removeAt(e, t), !0)
          );
        }),
        (goog.array.removeAllIf = function (e, t, r) {
          var n = 0;
          return (
            goog.array.forEachRight(e, function (o, i) {
              t.call(r, o, i, e) && goog.array.removeAt(e, i) && n++;
            }),
            n
          );
        }),
        (goog.array.concat = function (e) {
          return Array.prototype.concat.apply([], arguments);
        }),
        (goog.array.join = function (e) {
          return Array.prototype.concat.apply([], arguments);
        }),
        (goog.array.toArray = function (e) {
          var t = e.length;
          if (0 < t) {
            for (var r = Array(t), n = 0; n < t; n++) r[n] = e[n];
            return r;
          }
          return [];
        }),
        (goog.array.clone = goog.array.toArray),
        (goog.array.extend = function (e, t) {
          for (var r = 1; r < arguments.length; r++) {
            var n = arguments[r];
            if (goog.isArrayLike(n)) {
              var o = e.length || 0,
                i = n.length || 0;
              e.length = o + i;
              for (var a = 0; a < i; a++) e[o + a] = n[a];
            } else e.push(n);
          }
        }),
        (goog.array.splice = function (e, t, r, n) {
          return (
            goog.asserts.assert(null != e.length),
            Array.prototype.splice.apply(e, goog.array.slice(arguments, 1))
          );
        }),
        (goog.array.slice = function (e, t, r) {
          return (
            goog.asserts.assert(null != e.length),
            2 >= arguments.length
              ? Array.prototype.slice.call(e, t)
              : Array.prototype.slice.call(e, t, r)
          );
        }),
        (goog.array.removeDuplicates = function (e, t, r) {
          t = t || e;
          var n = function (e) {
            return goog.isObject(e)
              ? "o" + goog.getUid(e)
              : (typeof e).charAt(0) + e;
          };
          (r = r || n), (n = {});
          for (var o = 0, i = 0; i < e.length; ) {
            var a = e[i++],
              s = r(a);
            Object.prototype.hasOwnProperty.call(n, s) ||
              ((n[s] = !0), (t[o++] = a));
          }
          t.length = o;
        }),
        (goog.array.binarySearch = function (e, t, r) {
          return goog.array.binarySearch_(
            e,
            r || goog.array.defaultCompare,
            !1,
            t,
          );
        }),
        (goog.array.binarySelect = function (e, t, r) {
          return goog.array.binarySearch_(e, t, !0, void 0, r);
        }),
        (goog.array.binarySearch_ = function (e, t, r, n, o) {
          for (var i, a = 0, s = e.length; a < s; ) {
            var l = a + ((s - a) >>> 1),
              u = r ? t.call(o, e[l], l, e) : t(n, e[l]);
            0 < u ? (a = l + 1) : ((s = l), (i = !u));
          }
          return i ? a : -a - 1;
        }),
        (goog.array.sort = function (e, t) {
          e.sort(t || goog.array.defaultCompare);
        }),
        (goog.array.stableSort = function (e, t) {
          for (var r = Array(e.length), n = 0; n < e.length; n++)
            r[n] = { index: n, value: e[n] };
          var o = t || goog.array.defaultCompare;
          for (
            goog.array.sort(r, function (e, t) {
              return o(e.value, t.value) || e.index - t.index;
            }),
              n = 0;
            n < e.length;
            n++
          )
            e[n] = r[n].value;
        }),
        (goog.array.sortByKey = function (e, t, r) {
          var n = r || goog.array.defaultCompare;
          goog.array.sort(e, function (e, r) {
            return n(t(e), t(r));
          });
        }),
        (goog.array.sortObjectsByKey = function (e, t, r) {
          goog.array.sortByKey(
            e,
            function (e) {
              return e[t];
            },
            r,
          );
        }),
        (goog.array.isSorted = function (e, t, r) {
          t = t || goog.array.defaultCompare;
          for (var n = 1; n < e.length; n++) {
            var o = t(e[n - 1], e[n]);
            if (0 < o || (0 == o && r)) return !1;
          }
          return !0;
        }),
        (goog.array.equals = function (e, t, r) {
          if (
            !goog.isArrayLike(e) ||
            !goog.isArrayLike(t) ||
            e.length != t.length
          )
            return !1;
          var n = e.length;
          r = r || goog.array.defaultCompareEquality;
          for (var o = 0; o < n; o++) if (!r(e[o], t[o])) return !1;
          return !0;
        }),
        (goog.array.compare3 = function (e, t, r) {
          r = r || goog.array.defaultCompare;
          for (var n = Math.min(e.length, t.length), o = 0; o < n; o++) {
            var i = r(e[o], t[o]);
            if (0 != i) return i;
          }
          return goog.array.defaultCompare(e.length, t.length);
        }),
        (goog.array.defaultCompare = function (e, t) {
          return e > t ? 1 : e < t ? -1 : 0;
        }),
        (goog.array.inverseDefaultCompare = function (e, t) {
          return -goog.array.defaultCompare(e, t);
        }),
        (goog.array.defaultCompareEquality = function (e, t) {
          return e === t;
        }),
        (goog.array.binaryInsert = function (e, t, r) {
          return (
            0 > (r = goog.array.binarySearch(e, t, r)) &&
            (goog.array.insertAt(e, t, -(r + 1)), !0)
          );
        }),
        (goog.array.binaryRemove = function (e, t, r) {
          return (
            0 <= (t = goog.array.binarySearch(e, t, r)) &&
            goog.array.removeAt(e, t)
          );
        }),
        (goog.array.bucket = function (e, t, r) {
          for (var n = {}, o = 0; o < e.length; o++) {
            var i = e[o],
              a = t.call(r, i, o, e);
            void 0 !== a && (n[a] || (n[a] = [])).push(i);
          }
          return n;
        }),
        (goog.array.toObject = function (e, t, r) {
          var n = {};
          return (
            goog.array.forEach(e, function (o, i) {
              n[t.call(r, o, i, e)] = o;
            }),
            n
          );
        }),
        (goog.array.range = function (e, t, r) {
          var n = [],
            o = 0,
            i = e;
          if ((void 0 !== t && ((o = e), (i = t)), 0 > (r = r || 1) * (i - o)))
            return [];
          if (0 < r) for (e = o; e < i; e += r) n.push(e);
          else for (e = o; e > i; e += r) n.push(e);
          return n;
        }),
        (goog.array.repeat = function (e, t) {
          for (var r = [], n = 0; n < t; n++) r[n] = e;
          return r;
        }),
        (goog.array.flatten = function (e) {
          for (var t = [], r = 0; r < arguments.length; r++) {
            var n = arguments[r];
            if (Array.isArray(n))
              for (var o = 0; o < n.length; o += 8192) {
                var i = goog.array.slice(n, o, o + 8192);
                i = goog.array.flatten.apply(null, i);
                for (var a = 0; a < i.length; a++) t.push(i[a]);
              }
            else t.push(n);
          }
          return t;
        }),
        (goog.array.rotate = function (e, t) {
          return (
            goog.asserts.assert(null != e.length),
            e.length &&
              (0 < (t %= e.length)
                ? Array.prototype.unshift.apply(e, e.splice(-t, t))
                : 0 > t && Array.prototype.push.apply(e, e.splice(0, -t))),
            e
          );
        }),
        (goog.array.moveItem = function (e, t, r) {
          goog.asserts.assert(0 <= t && t < e.length),
            goog.asserts.assert(0 <= r && r < e.length),
            (t = Array.prototype.splice.call(e, t, 1)),
            Array.prototype.splice.call(e, r, 0, t[0]);
        }),
        (goog.array.zip = function (e) {
          if (!arguments.length) return [];
          for (
            var t = [], r = arguments[0].length, n = 1;
            n < arguments.length;
            n++
          )
            arguments[n].length < r && (r = arguments[n].length);
          for (n = 0; n < r; n++) {
            for (var o = [], i = 0; i < arguments.length; i++)
              o.push(arguments[i][n]);
            t.push(o);
          }
          return t;
        }),
        (goog.array.shuffle = function (e, t) {
          t = t || Math.random;
          for (var r = e.length - 1; 0 < r; r--) {
            var n = Math.floor(t() * (r + 1)),
              o = e[r];
            (e[r] = e[n]), (e[n] = o);
          }
        }),
        (goog.array.copyByIndex = function (e, t) {
          var r = [];
          return (
            goog.array.forEach(t, function (t) {
              r.push(e[t]);
            }),
            r
          );
        }),
        (goog.array.concatMap = function (e, t, r) {
          return goog.array.concat.apply([], goog.array.map(e, t, r));
        }),
        (goog.crypt = {}),
        (goog.crypt.stringToByteArray = function (e) {
          for (var t = [], r = 0, n = 0; n < e.length; n++) {
            var o = e.charCodeAt(n);
            255 < o && ((t[r++] = 255 & o), (o >>= 8)), (t[r++] = o);
          }
          return t;
        }),
        (goog.crypt.byteArrayToString = function (e) {
          if (8192 >= e.length) return String.fromCharCode.apply(null, e);
          for (var t = "", r = 0; r < e.length; r += 8192) {
            var n = goog.array.slice(e, r, r + 8192);
            t += String.fromCharCode.apply(null, n);
          }
          return t;
        }),
        (goog.crypt.byteArrayToHex = function (e, t) {
          return goog.array
            .map(e, function (e) {
              return 1 < (e = e.toString(16)).length ? e : "0" + e;
            })
            .join(t || "");
        }),
        (goog.crypt.hexToByteArray = function (e) {
          goog.asserts.assert(
            0 == e.length % 2,
            "Key string length must be multiple of 2",
          );
          for (var t = [], r = 0; r < e.length; r += 2)
            t.push(parseInt(e.substring(r, r + 2), 16));
          return t;
        }),
        (goog.crypt.stringToUtf8ByteArray = function (e) {
          for (var t = [], r = 0, n = 0; n < e.length; n++) {
            var o = e.charCodeAt(n);
            128 > o
              ? (t[r++] = o)
              : (2048 > o
                  ? (t[r++] = (o >> 6) | 192)
                  : (55296 == (64512 & o) &&
                    n + 1 < e.length &&
                    56320 == (64512 & e.charCodeAt(n + 1))
                      ? ((o =
                          65536 +
                          ((1023 & o) << 10) +
                          (1023 & e.charCodeAt(++n))),
                        (t[r++] = (o >> 18) | 240),
                        (t[r++] = ((o >> 12) & 63) | 128))
                      : (t[r++] = (o >> 12) | 224),
                    (t[r++] = ((o >> 6) & 63) | 128)),
                (t[r++] = (63 & o) | 128));
          }
          return t;
        }),
        (goog.crypt.utf8ByteArrayToString = function (e) {
          for (var t = [], r = 0, n = 0; r < e.length; ) {
            var o = e[r++];
            if (128 > o) t[n++] = String.fromCharCode(o);
            else if (191 < o && 224 > o) {
              var i = e[r++];
              t[n++] = String.fromCharCode(((31 & o) << 6) | (63 & i));
            } else if (239 < o && 365 > o) {
              i = e[r++];
              var a = e[r++];
              (o =
                (((7 & o) << 18) |
                  ((63 & i) << 12) |
                  ((63 & a) << 6) |
                  (63 & e[r++])) -
                65536),
                (t[n++] = String.fromCharCode(55296 + (o >> 10))),
                (t[n++] = String.fromCharCode(56320 + (1023 & o)));
            } else
              (i = e[r++]),
                (a = e[r++]),
                (t[n++] = String.fromCharCode(
                  ((15 & o) << 12) | ((63 & i) << 6) | (63 & a),
                ));
          }
          return t.join("");
        }),
        (goog.crypt.xorByteArray = function (e, t) {
          goog.asserts.assert(
            e.length == t.length,
            "XOR array lengths must match",
          );
          for (var r = [], n = 0; n < e.length; n++) r.push(e[n] ^ t[n]);
          return r;
        }),
        (goog.dom.asserts = {}),
        (goog.dom.asserts.assertIsLocation = function (e) {
          if (goog.asserts.ENABLE_ASSERTS) {
            var t = goog.dom.asserts.getWindow_(e);
            t &&
              (!e || (!(e instanceof t.Location) && e instanceof t.Element)) &&
              goog.asserts.fail(
                "Argument is not a Location (or a non-Element mock); got: %s",
                goog.dom.asserts.debugStringForType_(e),
              );
          }
          return e;
        }),
        (goog.dom.asserts.assertIsElementType_ = function (e, t) {
          if (goog.asserts.ENABLE_ASSERTS) {
            var r = goog.dom.asserts.getWindow_(e);
            r &&
              void 0 !== r[t] &&
              ((e &&
                (e instanceof r[t] ||
                  !(e instanceof r.Location || e instanceof r.Element))) ||
                goog.asserts.fail(
                  "Argument is not a %s (or a non-Element, non-Location mock); got: %s",
                  t,
                  goog.dom.asserts.debugStringForType_(e),
                ));
          }
          return e;
        }),
        (goog.dom.asserts.assertIsHTMLAnchorElement = function (e) {
          return goog.dom.asserts.assertIsElementType_(e, "HTMLAnchorElement");
        }),
        (goog.dom.asserts.assertIsHTMLButtonElement = function (e) {
          return goog.dom.asserts.assertIsElementType_(e, "HTMLButtonElement");
        }),
        (goog.dom.asserts.assertIsHTMLLinkElement = function (e) {
          return goog.dom.asserts.assertIsElementType_(e, "HTMLLinkElement");
        }),
        (goog.dom.asserts.assertIsHTMLImageElement = function (e) {
          return goog.dom.asserts.assertIsElementType_(e, "HTMLImageElement");
        }),
        (goog.dom.asserts.assertIsHTMLAudioElement = function (e) {
          return goog.dom.asserts.assertIsElementType_(e, "HTMLAudioElement");
        }),
        (goog.dom.asserts.assertIsHTMLVideoElement = function (e) {
          return goog.dom.asserts.assertIsElementType_(e, "HTMLVideoElement");
        }),
        (goog.dom.asserts.assertIsHTMLInputElement = function (e) {
          return goog.dom.asserts.assertIsElementType_(e, "HTMLInputElement");
        }),
        (goog.dom.asserts.assertIsHTMLTextAreaElement = function (e) {
          return goog.dom.asserts.assertIsElementType_(
            e,
            "HTMLTextAreaElement",
          );
        }),
        (goog.dom.asserts.assertIsHTMLCanvasElement = function (e) {
          return goog.dom.asserts.assertIsElementType_(e, "HTMLCanvasElement");
        }),
        (goog.dom.asserts.assertIsHTMLEmbedElement = function (e) {
          return goog.dom.asserts.assertIsElementType_(e, "HTMLEmbedElement");
        }),
        (goog.dom.asserts.assertIsHTMLFormElement = function (e) {
          return goog.dom.asserts.assertIsElementType_(e, "HTMLFormElement");
        }),
        (goog.dom.asserts.assertIsHTMLFrameElement = function (e) {
          return goog.dom.asserts.assertIsElementType_(e, "HTMLFrameElement");
        }),
        (goog.dom.asserts.assertIsHTMLIFrameElement = function (e) {
          return goog.dom.asserts.assertIsElementType_(e, "HTMLIFrameElement");
        }),
        (goog.dom.asserts.assertIsHTMLObjectElement = function (e) {
          return goog.dom.asserts.assertIsElementType_(e, "HTMLObjectElement");
        }),
        (goog.dom.asserts.assertIsHTMLScriptElement = function (e) {
          return goog.dom.asserts.assertIsElementType_(e, "HTMLScriptElement");
        }),
        (goog.dom.asserts.debugStringForType_ = function (e) {
          if (!goog.isObject(e))
            return void 0 === e ? "undefined" : null === e ? "null" : typeof e;
          try {
            return (
              e.constructor.displayName ||
              e.constructor.name ||
              Object.prototype.toString.call(e)
            );
          } catch (e) {
            return "<object could not be stringified>";
          }
        }),
        (goog.dom.asserts.getWindow_ = function (e) {
          try {
            var t = e && e.ownerDocument,
              r = t && (t.defaultView || t.parentWindow);
            if ((r = r || goog.global).Element && r.Location) return r;
          } catch (e) {}
          return null;
        }),
        (goog.functions = {}),
        (goog.functions.constant = function (e) {
          return function () {
            return e;
          };
        }),
        (goog.functions.FALSE = function () {
          return !1;
        }),
        (goog.functions.TRUE = function () {
          return !0;
        }),
        (goog.functions.NULL = function () {
          return null;
        }),
        (goog.functions.identity = function (e, t) {
          return e;
        }),
        (goog.functions.error = function (e) {
          return function () {
            throw Error(e);
          };
        }),
        (goog.functions.fail = function (e) {
          return function () {
            throw e;
          };
        }),
        (goog.functions.lock = function (e, t) {
          return (
            (t = t || 0),
            function () {
              return e.apply(this, Array.prototype.slice.call(arguments, 0, t));
            }
          );
        }),
        (goog.functions.nth = function (e) {
          return function () {
            return arguments[e];
          };
        }),
        (goog.functions.partialRight = function (e, t) {
          var r = Array.prototype.slice.call(arguments, 1);
          return function () {
            var t = Array.prototype.slice.call(arguments);
            return t.push.apply(t, r), e.apply(this, t);
          };
        }),
        (goog.functions.withReturnValue = function (e, t) {
          return goog.functions.sequence(e, goog.functions.constant(t));
        }),
        (goog.functions.equalTo = function (e, t) {
          return function (r) {
            return t ? e == r : e === r;
          };
        }),
        (goog.functions.compose = function (e, t) {
          var r = arguments,
            n = r.length;
          return function () {
            var e;
            n && (e = r[n - 1].apply(this, arguments));
            for (var t = n - 2; 0 <= t; t--) e = r[t].call(this, e);
            return e;
          };
        }),
        (goog.functions.sequence = function (e) {
          var t = arguments,
            r = t.length;
          return function () {
            for (var e, n = 0; n < r; n++) e = t[n].apply(this, arguments);
            return e;
          };
        }),
        (goog.functions.and = function (e) {
          var t = arguments,
            r = t.length;
          return function () {
            for (var e = 0; e < r; e++)
              if (!t[e].apply(this, arguments)) return !1;
            return !0;
          };
        }),
        (goog.functions.or = function (e) {
          var t = arguments,
            r = t.length;
          return function () {
            for (var e = 0; e < r; e++)
              if (t[e].apply(this, arguments)) return !0;
            return !1;
          };
        }),
        (goog.functions.not = function (e) {
          return function () {
            return !e.apply(this, arguments);
          };
        }),
        (goog.functions.create = function (e, t) {
          var r = function () {};
          return (
            (r.prototype = e.prototype),
            (r = new r()),
            e.apply(r, Array.prototype.slice.call(arguments, 1)),
            r
          );
        }),
        (goog.functions.CACHE_RETURN_VALUE = !0),
        (goog.functions.cacheReturnValue = function (e) {
          var t,
            r = !1;
          return function () {
            return goog.functions.CACHE_RETURN_VALUE
              ? (r || ((t = e()), (r = !0)), t)
              : e();
          };
        }),
        (goog.functions.once = function (e) {
          var t = e;
          return function () {
            if (t) {
              var e = t;
              (t = null), e();
            }
          };
        }),
        (goog.functions.debounce = function (e, t, r) {
          var n = 0;
          return function (o) {
            goog.global.clearTimeout(n);
            var i = arguments;
            n = goog.global.setTimeout(function () {
              e.apply(r, i);
            }, t);
          };
        }),
        (goog.functions.throttle = function (e, t, r) {
          var n = 0,
            o = !1,
            i = [],
            a = function () {
              (n = 0), o && ((o = !1), s());
            },
            s = function () {
              (n = goog.global.setTimeout(a, t)), e.apply(r, i);
            };
          return function (e) {
            (i = arguments), n ? (o = !0) : s();
          };
        }),
        (goog.functions.rateLimit = function (e, t, r) {
          var n = 0,
            o = function () {
              n = 0;
            };
          return function (i) {
            n || ((n = goog.global.setTimeout(o, t)), e.apply(r, arguments));
          };
        }),
        (goog.dom.HtmlElement = function () {}),
        (goog.dom.TagName = function (e) {
          this.tagName_ = e;
        }),
        (goog.dom.TagName.prototype.toString = function () {
          return this.tagName_;
        }),
        (goog.dom.TagName.A = new goog.dom.TagName("A")),
        (goog.dom.TagName.ABBR = new goog.dom.TagName("ABBR")),
        (goog.dom.TagName.ACRONYM = new goog.dom.TagName("ACRONYM")),
        (goog.dom.TagName.ADDRESS = new goog.dom.TagName("ADDRESS")),
        (goog.dom.TagName.APPLET = new goog.dom.TagName("APPLET")),
        (goog.dom.TagName.AREA = new goog.dom.TagName("AREA")),
        (goog.dom.TagName.ARTICLE = new goog.dom.TagName("ARTICLE")),
        (goog.dom.TagName.ASIDE = new goog.dom.TagName("ASIDE")),
        (goog.dom.TagName.AUDIO = new goog.dom.TagName("AUDIO")),
        (goog.dom.TagName.B = new goog.dom.TagName("B")),
        (goog.dom.TagName.BASE = new goog.dom.TagName("BASE")),
        (goog.dom.TagName.BASEFONT = new goog.dom.TagName("BASEFONT")),
        (goog.dom.TagName.BDI = new goog.dom.TagName("BDI")),
        (goog.dom.TagName.BDO = new goog.dom.TagName("BDO")),
        (goog.dom.TagName.BIG = new goog.dom.TagName("BIG")),
        (goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName("BLOCKQUOTE")),
        (goog.dom.TagName.BODY = new goog.dom.TagName("BODY")),
        (goog.dom.TagName.BR = new goog.dom.TagName("BR")),
        (goog.dom.TagName.BUTTON = new goog.dom.TagName("BUTTON")),
        (goog.dom.TagName.CANVAS = new goog.dom.TagName("CANVAS")),
        (goog.dom.TagName.CAPTION = new goog.dom.TagName("CAPTION")),
        (goog.dom.TagName.CENTER = new goog.dom.TagName("CENTER")),
        (goog.dom.TagName.CITE = new goog.dom.TagName("CITE")),
        (goog.dom.TagName.CODE = new goog.dom.TagName("CODE")),
        (goog.dom.TagName.COL = new goog.dom.TagName("COL")),
        (goog.dom.TagName.COLGROUP = new goog.dom.TagName("COLGROUP")),
        (goog.dom.TagName.COMMAND = new goog.dom.TagName("COMMAND")),
        (goog.dom.TagName.DATA = new goog.dom.TagName("DATA")),
        (goog.dom.TagName.DATALIST = new goog.dom.TagName("DATALIST")),
        (goog.dom.TagName.DD = new goog.dom.TagName("DD")),
        (goog.dom.TagName.DEL = new goog.dom.TagName("DEL")),
        (goog.dom.TagName.DETAILS = new goog.dom.TagName("DETAILS")),
        (goog.dom.TagName.DFN = new goog.dom.TagName("DFN")),
        (goog.dom.TagName.DIALOG = new goog.dom.TagName("DIALOG")),
        (goog.dom.TagName.DIR = new goog.dom.TagName("DIR")),
        (goog.dom.TagName.DIV = new goog.dom.TagName("DIV")),
        (goog.dom.TagName.DL = new goog.dom.TagName("DL")),
        (goog.dom.TagName.DT = new goog.dom.TagName("DT")),
        (goog.dom.TagName.EM = new goog.dom.TagName("EM")),
        (goog.dom.TagName.EMBED = new goog.dom.TagName("EMBED")),
        (goog.dom.TagName.FIELDSET = new goog.dom.TagName("FIELDSET")),
        (goog.dom.TagName.FIGCAPTION = new goog.dom.TagName("FIGCAPTION")),
        (goog.dom.TagName.FIGURE = new goog.dom.TagName("FIGURE")),
        (goog.dom.TagName.FONT = new goog.dom.TagName("FONT")),
        (goog.dom.TagName.FOOTER = new goog.dom.TagName("FOOTER")),
        (goog.dom.TagName.FORM = new goog.dom.TagName("FORM")),
        (goog.dom.TagName.FRAME = new goog.dom.TagName("FRAME")),
        (goog.dom.TagName.FRAMESET = new goog.dom.TagName("FRAMESET")),
        (goog.dom.TagName.H1 = new goog.dom.TagName("H1")),
        (goog.dom.TagName.H2 = new goog.dom.TagName("H2")),
        (goog.dom.TagName.H3 = new goog.dom.TagName("H3")),
        (goog.dom.TagName.H4 = new goog.dom.TagName("H4")),
        (goog.dom.TagName.H5 = new goog.dom.TagName("H5")),
        (goog.dom.TagName.H6 = new goog.dom.TagName("H6")),
        (goog.dom.TagName.HEAD = new goog.dom.TagName("HEAD")),
        (goog.dom.TagName.HEADER = new goog.dom.TagName("HEADER")),
        (goog.dom.TagName.HGROUP = new goog.dom.TagName("HGROUP")),
        (goog.dom.TagName.HR = new goog.dom.TagName("HR")),
        (goog.dom.TagName.HTML = new goog.dom.TagName("HTML")),
        (goog.dom.TagName.I = new goog.dom.TagName("I")),
        (goog.dom.TagName.IFRAME = new goog.dom.TagName("IFRAME")),
        (goog.dom.TagName.IMG = new goog.dom.TagName("IMG")),
        (goog.dom.TagName.INPUT = new goog.dom.TagName("INPUT")),
        (goog.dom.TagName.INS = new goog.dom.TagName("INS")),
        (goog.dom.TagName.ISINDEX = new goog.dom.TagName("ISINDEX")),
        (goog.dom.TagName.KBD = new goog.dom.TagName("KBD")),
        (goog.dom.TagName.KEYGEN = new goog.dom.TagName("KEYGEN")),
        (goog.dom.TagName.LABEL = new goog.dom.TagName("LABEL")),
        (goog.dom.TagName.LEGEND = new goog.dom.TagName("LEGEND")),
        (goog.dom.TagName.LI = new goog.dom.TagName("LI")),
        (goog.dom.TagName.LINK = new goog.dom.TagName("LINK")),
        (goog.dom.TagName.MAIN = new goog.dom.TagName("MAIN")),
        (goog.dom.TagName.MAP = new goog.dom.TagName("MAP")),
        (goog.dom.TagName.MARK = new goog.dom.TagName("MARK")),
        (goog.dom.TagName.MATH = new goog.dom.TagName("MATH")),
        (goog.dom.TagName.MENU = new goog.dom.TagName("MENU")),
        (goog.dom.TagName.MENUITEM = new goog.dom.TagName("MENUITEM")),
        (goog.dom.TagName.META = new goog.dom.TagName("META")),
        (goog.dom.TagName.METER = new goog.dom.TagName("METER")),
        (goog.dom.TagName.NAV = new goog.dom.TagName("NAV")),
        (goog.dom.TagName.NOFRAMES = new goog.dom.TagName("NOFRAMES")),
        (goog.dom.TagName.NOSCRIPT = new goog.dom.TagName("NOSCRIPT")),
        (goog.dom.TagName.OBJECT = new goog.dom.TagName("OBJECT")),
        (goog.dom.TagName.OL = new goog.dom.TagName("OL")),
        (goog.dom.TagName.OPTGROUP = new goog.dom.TagName("OPTGROUP")),
        (goog.dom.TagName.OPTION = new goog.dom.TagName("OPTION")),
        (goog.dom.TagName.OUTPUT = new goog.dom.TagName("OUTPUT")),
        (goog.dom.TagName.P = new goog.dom.TagName("P")),
        (goog.dom.TagName.PARAM = new goog.dom.TagName("PARAM")),
        (goog.dom.TagName.PICTURE = new goog.dom.TagName("PICTURE")),
        (goog.dom.TagName.PRE = new goog.dom.TagName("PRE")),
        (goog.dom.TagName.PROGRESS = new goog.dom.TagName("PROGRESS")),
        (goog.dom.TagName.Q = new goog.dom.TagName("Q")),
        (goog.dom.TagName.RP = new goog.dom.TagName("RP")),
        (goog.dom.TagName.RT = new goog.dom.TagName("RT")),
        (goog.dom.TagName.RTC = new goog.dom.TagName("RTC")),
        (goog.dom.TagName.RUBY = new goog.dom.TagName("RUBY")),
        (goog.dom.TagName.S = new goog.dom.TagName("S")),
        (goog.dom.TagName.SAMP = new goog.dom.TagName("SAMP")),
        (goog.dom.TagName.SCRIPT = new goog.dom.TagName("SCRIPT")),
        (goog.dom.TagName.SECTION = new goog.dom.TagName("SECTION")),
        (goog.dom.TagName.SELECT = new goog.dom.TagName("SELECT")),
        (goog.dom.TagName.SMALL = new goog.dom.TagName("SMALL")),
        (goog.dom.TagName.SOURCE = new goog.dom.TagName("SOURCE")),
        (goog.dom.TagName.SPAN = new goog.dom.TagName("SPAN")),
        (goog.dom.TagName.STRIKE = new goog.dom.TagName("STRIKE")),
        (goog.dom.TagName.STRONG = new goog.dom.TagName("STRONG")),
        (goog.dom.TagName.STYLE = new goog.dom.TagName("STYLE")),
        (goog.dom.TagName.SUB = new goog.dom.TagName("SUB")),
        (goog.dom.TagName.SUMMARY = new goog.dom.TagName("SUMMARY")),
        (goog.dom.TagName.SUP = new goog.dom.TagName("SUP")),
        (goog.dom.TagName.SVG = new goog.dom.TagName("SVG")),
        (goog.dom.TagName.TABLE = new goog.dom.TagName("TABLE")),
        (goog.dom.TagName.TBODY = new goog.dom.TagName("TBODY")),
        (goog.dom.TagName.TD = new goog.dom.TagName("TD")),
        (goog.dom.TagName.TEMPLATE = new goog.dom.TagName("TEMPLATE")),
        (goog.dom.TagName.TEXTAREA = new goog.dom.TagName("TEXTAREA")),
        (goog.dom.TagName.TFOOT = new goog.dom.TagName("TFOOT")),
        (goog.dom.TagName.TH = new goog.dom.TagName("TH")),
        (goog.dom.TagName.THEAD = new goog.dom.TagName("THEAD")),
        (goog.dom.TagName.TIME = new goog.dom.TagName("TIME")),
        (goog.dom.TagName.TITLE = new goog.dom.TagName("TITLE")),
        (goog.dom.TagName.TR = new goog.dom.TagName("TR")),
        (goog.dom.TagName.TRACK = new goog.dom.TagName("TRACK")),
        (goog.dom.TagName.TT = new goog.dom.TagName("TT")),
        (goog.dom.TagName.U = new goog.dom.TagName("U")),
        (goog.dom.TagName.UL = new goog.dom.TagName("UL")),
        (goog.dom.TagName.VAR = new goog.dom.TagName("VAR")),
        (goog.dom.TagName.VIDEO = new goog.dom.TagName("VIDEO")),
        (goog.dom.TagName.WBR = new goog.dom.TagName("WBR")),
        (goog.dom.tags = {}),
        (goog.dom.tags.VOID_TAGS_ = {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          command: !0,
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
        }),
        (goog.dom.tags.isVoidTag = function (e) {
          return !0 === goog.dom.tags.VOID_TAGS_[e];
        }),
        (goog.html = {}),
        (goog.html.trustedtypes = {}),
        (goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY =
          goog.TRUSTED_TYPES_POLICY_NAME
            ? goog.createTrustedTypesPolicy(
                goog.TRUSTED_TYPES_POLICY_NAME + "#html",
              )
            : null),
        (goog.string = {}),
        (goog.string.TypedString = function () {}),
        (goog.string.Const = function (e, t) {
          (this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ =
            (e === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ &&
              t) ||
            ""),
            (this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ =
              goog.string.Const.TYPE_MARKER_);
        }),
        (goog.string.Const.prototype.implementsGoogStringTypedString = !0),
        (goog.string.Const.prototype.getTypedStringValue = function () {
          return this
            .stringConstValueWithSecurityContract__googStringSecurityPrivate_;
        }),
        goog.DEBUG &&
          (goog.string.Const.prototype.toString = function () {
            return (
              "Const{" +
              this
                .stringConstValueWithSecurityContract__googStringSecurityPrivate_ +
              "}"
            );
          }),
        (goog.string.Const.unwrap = function (e) {
          return e instanceof goog.string.Const &&
            e.constructor === goog.string.Const &&
            e.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ ===
              goog.string.Const.TYPE_MARKER_
            ? e.stringConstValueWithSecurityContract__googStringSecurityPrivate_
            : (goog.asserts.fail(
                "expected object of type Const, got '" + e + "'",
              ),
              "type_error:Const");
        }),
        (goog.string.Const.from = function (e) {
          return new goog.string.Const(
            goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_,
            e,
          );
        }),
        (goog.string.Const.TYPE_MARKER_ = {}),
        (goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {}),
        (goog.string.Const.EMPTY = goog.string.Const.from("")),
        (goog.html.SafeScript = function () {
          (this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = ""),
            (this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
              goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
        }),
        (goog.html.SafeScript.prototype.implementsGoogStringTypedString = !0),
        (goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
        (goog.html.SafeScript.fromConstant = function (e) {
          return 0 === (e = goog.string.Const.unwrap(e)).length
            ? goog.html.SafeScript.EMPTY
            : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
                e,
              );
        }),
        (goog.html.SafeScript.fromConstantAndArgs = function (e, t) {
          for (var r = [], n = 1; n < arguments.length; n++)
            r.push(goog.html.SafeScript.stringify_(arguments[n]));
          return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
            "(" + goog.string.Const.unwrap(e) + ")(" + r.join(", ") + ");",
          );
        }),
        (goog.html.SafeScript.fromJson = function (e) {
          return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
            goog.html.SafeScript.stringify_(e),
          );
        }),
        (goog.html.SafeScript.prototype.getTypedStringValue = function () {
          return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
        }),
        goog.DEBUG &&
          (goog.html.SafeScript.prototype.toString = function () {
            return (
              "SafeScript{" +
              this.privateDoNotAccessOrElseSafeScriptWrappedValue_ +
              "}"
            );
          }),
        (goog.html.SafeScript.unwrap = function (e) {
          return goog.html.SafeScript.unwrapTrustedScript(e).toString();
        }),
        (goog.html.SafeScript.unwrapTrustedScript = function (e) {
          return e instanceof goog.html.SafeScript &&
            e.constructor === goog.html.SafeScript &&
            e.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
              goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
            ? e.privateDoNotAccessOrElseSafeScriptWrappedValue_
            : (goog.asserts.fail(
                "expected object of type SafeScript, got '" +
                  e +
                  "' of type " +
                  goog.typeOf(e),
              ),
              "type_error:SafeScript");
        }),
        (goog.html.SafeScript.stringify_ = function (e) {
          return JSON.stringify(e).replace(/</g, "\\x3c");
        }),
        (goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse =
          function (e) {
            return new goog.html.SafeScript().initSecurityPrivateDoNotAccessOrElse_(
              e,
            );
          }),
        (goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ =
          function (e) {
            return (
              (this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = goog.html
                .trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
                ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(
                    e,
                  )
                : e),
              this
            );
          }),
        (goog.html.SafeScript.EMPTY =
          goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
            "",
          )),
        (goog.fs = {}),
        (goog.fs.url = {}),
        (goog.fs.url.createObjectUrl = function (e) {
          return goog.fs.url.getUrlObject_().createObjectURL(e);
        }),
        (goog.fs.url.revokeObjectUrl = function (e) {
          goog.fs.url.getUrlObject_().revokeObjectURL(e);
        }),
        (goog.fs.url.UrlObject_ = function () {}),
        (goog.fs.url.UrlObject_.prototype.createObjectURL = function (e) {}),
        (goog.fs.url.UrlObject_.prototype.revokeObjectURL = function (e) {}),
        (goog.fs.url.getUrlObject_ = function () {
          var e = goog.fs.url.findUrlObject_();
          if (null != e) return e;
          throw Error("This browser doesn't seem to support blob URLs");
        }),
        (goog.fs.url.findUrlObject_ = function () {
          return void 0 !== goog.global.URL &&
            void 0 !== goog.global.URL.createObjectURL
            ? goog.global.URL
            : void 0 !== goog.global.webkitURL &&
                void 0 !== goog.global.webkitURL.createObjectURL
              ? goog.global.webkitURL
              : void 0 !== goog.global.createObjectURL
                ? goog.global
                : null;
        }),
        (goog.fs.url.browserSupportsObjectUrls = function () {
          return null != goog.fs.url.findUrlObject_();
        }),
        (goog.fs.blob = {}),
        (goog.fs.blob.getBlob = function (e) {
          var t = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
          if (void 0 !== t) {
            t = new t();
            for (var r = 0; r < arguments.length; r++) t.append(arguments[r]);
            return t.getBlob();
          }
          return goog.fs.blob.getBlobWithProperties(
            goog.array.toArray(arguments),
          );
        }),
        (goog.fs.blob.getBlobWithProperties = function (e, t, r) {
          var n = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
          if (void 0 !== n) {
            n = new n();
            for (var o = 0; o < e.length; o++) n.append(e[o], r);
            return n.getBlob(t);
          }
          if (void 0 !== goog.global.Blob)
            return (
              (n = {}), t && (n.type = t), r && (n.endings = r), new Blob(e, n)
            );
          throw Error("This browser doesn't seem to support creating Blobs");
        }),
        (goog.i18n = {}),
        (goog.i18n.bidi = {}),
        (goog.i18n.bidi.FORCE_RTL = !1),
        (goog.i18n.bidi.IS_RTL =
          goog.i18n.bidi.FORCE_RTL ||
          (("ar" == goog.LOCALE.substring(0, 2).toLowerCase() ||
            "fa" == goog.LOCALE.substring(0, 2).toLowerCase() ||
            "he" == goog.LOCALE.substring(0, 2).toLowerCase() ||
            "iw" == goog.LOCALE.substring(0, 2).toLowerCase() ||
            "ps" == goog.LOCALE.substring(0, 2).toLowerCase() ||
            "sd" == goog.LOCALE.substring(0, 2).toLowerCase() ||
            "ug" == goog.LOCALE.substring(0, 2).toLowerCase() ||
            "ur" == goog.LOCALE.substring(0, 2).toLowerCase() ||
            "yi" == goog.LOCALE.substring(0, 2).toLowerCase()) &&
            (2 == goog.LOCALE.length ||
              "-" == goog.LOCALE.substring(2, 3) ||
              "_" == goog.LOCALE.substring(2, 3))) ||
          (3 <= goog.LOCALE.length &&
            "ckb" == goog.LOCALE.substring(0, 3).toLowerCase() &&
            (3 == goog.LOCALE.length ||
              "-" == goog.LOCALE.substring(3, 4) ||
              "_" == goog.LOCALE.substring(3, 4))) ||
          (7 <= goog.LOCALE.length &&
            ("-" == goog.LOCALE.substring(2, 3) ||
              "_" == goog.LOCALE.substring(2, 3)) &&
            ("adlm" == goog.LOCALE.substring(3, 7).toLowerCase() ||
              "arab" == goog.LOCALE.substring(3, 7).toLowerCase() ||
              "hebr" == goog.LOCALE.substring(3, 7).toLowerCase() ||
              "nkoo" == goog.LOCALE.substring(3, 7).toLowerCase() ||
              "rohg" == goog.LOCALE.substring(3, 7).toLowerCase() ||
              "thaa" == goog.LOCALE.substring(3, 7).toLowerCase())) ||
          (8 <= goog.LOCALE.length &&
            ("-" == goog.LOCALE.substring(3, 4) ||
              "_" == goog.LOCALE.substring(3, 4)) &&
            ("adlm" == goog.LOCALE.substring(4, 8).toLowerCase() ||
              "arab" == goog.LOCALE.substring(4, 8).toLowerCase() ||
              "hebr" == goog.LOCALE.substring(4, 8).toLowerCase() ||
              "nkoo" == goog.LOCALE.substring(4, 8).toLowerCase() ||
              "rohg" == goog.LOCALE.substring(4, 8).toLowerCase() ||
              "thaa" == goog.LOCALE.substring(4, 8).toLowerCase()))),
        (goog.i18n.bidi.Format = {
          LRE: "‪",
          RLE: "‫",
          PDF: "‬",
          LRM: "‎",
          RLM: "‏",
        }),
        (goog.i18n.bidi.Dir = { LTR: 1, RTL: -1, NEUTRAL: 0 }),
        (goog.i18n.bidi.RIGHT = "right"),
        (goog.i18n.bidi.LEFT = "left"),
        (goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL
          ? goog.i18n.bidi.LEFT
          : goog.i18n.bidi.RIGHT),
        (goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL
          ? goog.i18n.bidi.RIGHT
          : goog.i18n.bidi.LEFT),
        (goog.i18n.bidi.toDir = function (e, t) {
          return "number" == typeof e
            ? 0 < e
              ? goog.i18n.bidi.Dir.LTR
              : 0 > e
                ? goog.i18n.bidi.Dir.RTL
                : t
                  ? null
                  : goog.i18n.bidi.Dir.NEUTRAL
            : null == e
              ? null
              : e
                ? goog.i18n.bidi.Dir.RTL
                : goog.i18n.bidi.Dir.LTR;
        }),
        (goog.i18n.bidi.ltrChars_ =
          "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ऀ-῿‎Ⰰ-\ud801\ud804-\ud839\ud83c-\udbff豈-﬜︀-﹯﻽-￿"),
        (goog.i18n.bidi.rtlChars_ = "֑-ۯۺ-ࣿ‏\ud802-\ud803\ud83a-\ud83bיִ-﷿ﹰ-ﻼ"),
        (goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g),
        (goog.i18n.bidi.stripHtmlIfNeeded_ = function (e, t) {
          return t ? e.replace(goog.i18n.bidi.htmlSkipReg_, "") : e;
        }),
        (goog.i18n.bidi.rtlCharReg_ = new RegExp(
          "[" + goog.i18n.bidi.rtlChars_ + "]",
        )),
        (goog.i18n.bidi.ltrCharReg_ = new RegExp(
          "[" + goog.i18n.bidi.ltrChars_ + "]",
        )),
        (goog.i18n.bidi.hasAnyRtl = function (e, t) {
          return goog.i18n.bidi.rtlCharReg_.test(
            goog.i18n.bidi.stripHtmlIfNeeded_(e, t),
          );
        }),
        (goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl),
        (goog.i18n.bidi.hasAnyLtr = function (e, t) {
          return goog.i18n.bidi.ltrCharReg_.test(
            goog.i18n.bidi.stripHtmlIfNeeded_(e, t),
          );
        }),
        (goog.i18n.bidi.ltrRe_ = new RegExp(
          "^[" + goog.i18n.bidi.ltrChars_ + "]",
        )),
        (goog.i18n.bidi.rtlRe_ = new RegExp(
          "^[" + goog.i18n.bidi.rtlChars_ + "]",
        )),
        (goog.i18n.bidi.isRtlChar = function (e) {
          return goog.i18n.bidi.rtlRe_.test(e);
        }),
        (goog.i18n.bidi.isLtrChar = function (e) {
          return goog.i18n.bidi.ltrRe_.test(e);
        }),
        (goog.i18n.bidi.isNeutralChar = function (e) {
          return !goog.i18n.bidi.isLtrChar(e) && !goog.i18n.bidi.isRtlChar(e);
        }),
        (goog.i18n.bidi.ltrDirCheckRe_ = new RegExp(
          "^[^" +
            goog.i18n.bidi.rtlChars_ +
            "]*[" +
            goog.i18n.bidi.ltrChars_ +
            "]",
        )),
        (goog.i18n.bidi.rtlDirCheckRe_ = new RegExp(
          "^[^" +
            goog.i18n.bidi.ltrChars_ +
            "]*[" +
            goog.i18n.bidi.rtlChars_ +
            "]",
        )),
        (goog.i18n.bidi.startsWithRtl = function (e, t) {
          return goog.i18n.bidi.rtlDirCheckRe_.test(
            goog.i18n.bidi.stripHtmlIfNeeded_(e, t),
          );
        }),
        (goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl),
        (goog.i18n.bidi.startsWithLtr = function (e, t) {
          return goog.i18n.bidi.ltrDirCheckRe_.test(
            goog.i18n.bidi.stripHtmlIfNeeded_(e, t),
          );
        }),
        (goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr),
        (goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/),
        (goog.i18n.bidi.isNeutralText = function (e, t) {
          return (
            (e = goog.i18n.bidi.stripHtmlIfNeeded_(e, t)),
            goog.i18n.bidi.isRequiredLtrRe_.test(e) ||
              (!goog.i18n.bidi.hasAnyLtr(e) && !goog.i18n.bidi.hasAnyRtl(e))
          );
        }),
        (goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp(
          "[" +
            goog.i18n.bidi.ltrChars_ +
            "][^" +
            goog.i18n.bidi.rtlChars_ +
            "]*$",
        )),
        (goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp(
          "[" +
            goog.i18n.bidi.rtlChars_ +
            "][^" +
            goog.i18n.bidi.ltrChars_ +
            "]*$",
        )),
        (goog.i18n.bidi.endsWithLtr = function (e, t) {
          return goog.i18n.bidi.ltrExitDirCheckRe_.test(
            goog.i18n.bidi.stripHtmlIfNeeded_(e, t),
          );
        }),
        (goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr),
        (goog.i18n.bidi.endsWithRtl = function (e, t) {
          return goog.i18n.bidi.rtlExitDirCheckRe_.test(
            goog.i18n.bidi.stripHtmlIfNeeded_(e, t),
          );
        }),
        (goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl),
        (goog.i18n.bidi.rtlLocalesRe_ =
          /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i),
        (goog.i18n.bidi.isRtlLanguage = function (e) {
          return goog.i18n.bidi.rtlLocalesRe_.test(e);
        }),
        (goog.i18n.bidi.bracketGuardTextRe_ =
          /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g),
        (goog.i18n.bidi.guardBracketInText = function (e, t) {
          return (
            (t = (void 0 === t ? goog.i18n.bidi.hasAnyRtl(e) : t)
              ? goog.i18n.bidi.Format.RLM
              : goog.i18n.bidi.Format.LRM),
            e.replace(goog.i18n.bidi.bracketGuardTextRe_, t + "$&" + t)
          );
        }),
        (goog.i18n.bidi.enforceRtlInHtml = function (e) {
          return "<" == e.charAt(0)
            ? e.replace(/<\w+/, "$& dir=rtl")
            : "\n<span dir=rtl>" + e + "</span>";
        }),
        (goog.i18n.bidi.enforceRtlInText = function (e) {
          return goog.i18n.bidi.Format.RLE + e + goog.i18n.bidi.Format.PDF;
        }),
        (goog.i18n.bidi.enforceLtrInHtml = function (e) {
          return "<" == e.charAt(0)
            ? e.replace(/<\w+/, "$& dir=ltr")
            : "\n<span dir=ltr>" + e + "</span>";
        }),
        (goog.i18n.bidi.enforceLtrInText = function (e) {
          return goog.i18n.bidi.Format.LRE + e + goog.i18n.bidi.Format.PDF;
        }),
        (goog.i18n.bidi.dimensionsRe_ =
          /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g),
        (goog.i18n.bidi.leftRe_ = /left/gi),
        (goog.i18n.bidi.rightRe_ = /right/gi),
        (goog.i18n.bidi.tempRe_ = /%%%%/g),
        (goog.i18n.bidi.mirrorCSS = function (e) {
          return e
            .replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2")
            .replace(goog.i18n.bidi.leftRe_, "%%%%")
            .replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT)
            .replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT);
        }),
        (goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g),
        (goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g),
        (goog.i18n.bidi.normalizeHebrewQuote = function (e) {
          return e
            .replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1״")
            .replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1׳");
        }),
        (goog.i18n.bidi.wordSeparatorRe_ = /\s+/),
        (goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/),
        (goog.i18n.bidi.rtlDetectionThreshold_ = 0.4),
        (goog.i18n.bidi.estimateDirection = function (e, t) {
          var r = 0,
            n = 0,
            o = !1;
          for (
            e = goog.i18n.bidi
              .stripHtmlIfNeeded_(e, t)
              .split(goog.i18n.bidi.wordSeparatorRe_),
              t = 0;
            t < e.length;
            t++
          ) {
            var i = e[t];
            goog.i18n.bidi.startsWithRtl(i)
              ? (r++, n++)
              : goog.i18n.bidi.isRequiredLtrRe_.test(i)
                ? (o = !0)
                : goog.i18n.bidi.hasAnyLtr(i)
                  ? n++
                  : goog.i18n.bidi.hasNumeralsRe_.test(i) && (o = !0);
          }
          return 0 == n
            ? o
              ? goog.i18n.bidi.Dir.LTR
              : goog.i18n.bidi.Dir.NEUTRAL
            : r / n > goog.i18n.bidi.rtlDetectionThreshold_
              ? goog.i18n.bidi.Dir.RTL
              : goog.i18n.bidi.Dir.LTR;
        }),
        (goog.i18n.bidi.detectRtlDirectionality = function (e, t) {
          return (
            goog.i18n.bidi.estimateDirection(e, t) == goog.i18n.bidi.Dir.RTL
          );
        }),
        (goog.i18n.bidi.setElementDirAndAlign = function (e, t) {
          e &&
            (t = goog.i18n.bidi.toDir(t)) &&
            ((e.style.textAlign =
              t == goog.i18n.bidi.Dir.RTL
                ? goog.i18n.bidi.RIGHT
                : goog.i18n.bidi.LEFT),
            (e.dir = t == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr"));
        }),
        (goog.i18n.bidi.setElementDirByTextDirectionality = function (e, t) {
          switch (goog.i18n.bidi.estimateDirection(t)) {
            case goog.i18n.bidi.Dir.LTR:
              e.dir = "ltr";
              break;
            case goog.i18n.bidi.Dir.RTL:
              e.dir = "rtl";
              break;
            default:
              e.removeAttribute("dir");
          }
        }),
        (goog.i18n.bidi.DirectionalString = function () {}),
        (goog.html.TrustedResourceUrl = function (e, t) {
          (this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ =
            (e === goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ &&
              t) ||
            ""),
            (this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
              goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
        }),
        (goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString =
          !0),
        (goog.html.TrustedResourceUrl.prototype.getTypedStringValue =
          function () {
            return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString();
          }),
        (goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString =
          !0),
        (goog.html.TrustedResourceUrl.prototype.getDirection = function () {
          return goog.i18n.bidi.Dir.LTR;
        }),
        (goog.html.TrustedResourceUrl.prototype.cloneWithParams = function (
          e,
          t,
        ) {
          var r = goog.html.TrustedResourceUrl.unwrap(this),
            n =
              (r = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(r))[3] ||
              "";
          return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
            r[1] +
              goog.html.TrustedResourceUrl.stringifyParams_(
                "?",
                r[2] || "",
                e,
              ) +
              goog.html.TrustedResourceUrl.stringifyParams_("#", n, t),
          );
        }),
        goog.DEBUG &&
          (goog.html.TrustedResourceUrl.prototype.toString = function () {
            return (
              "TrustedResourceUrl{" +
              this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ +
              "}"
            );
          }),
        (goog.html.TrustedResourceUrl.unwrap = function (e) {
          return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(
            e,
          ).toString();
        }),
        (goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function (e) {
          return e instanceof goog.html.TrustedResourceUrl &&
            e.constructor === goog.html.TrustedResourceUrl &&
            e.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
              goog.html.TrustedResourceUrl
                .TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
            ? e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_
            : (goog.asserts.fail(
                "expected object of type TrustedResourceUrl, got '" +
                  e +
                  "' of type " +
                  goog.typeOf(e),
              ),
              "type_error:TrustedResourceUrl");
        }),
        (goog.html.TrustedResourceUrl.format = function (e, t) {
          var r = goog.string.Const.unwrap(e);
          if (!goog.html.TrustedResourceUrl.BASE_URL_.test(r))
            throw Error("Invalid TrustedResourceUrl format: " + r);
          return (
            (e = r.replace(
              goog.html.TrustedResourceUrl.FORMAT_MARKER_,
              function (e, n) {
                if (!Object.prototype.hasOwnProperty.call(t, n))
                  throw Error(
                    'Found marker, "' +
                      n +
                      '", in format string, "' +
                      r +
                      '", but no valid label mapping found in args: ' +
                      JSON.stringify(t),
                  );
                return (e = t[n]) instanceof goog.string.Const
                  ? goog.string.Const.unwrap(e)
                  : encodeURIComponent(String(e));
              },
            )),
            goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
              e,
            )
          );
        }),
        (goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g),
        (goog.html.TrustedResourceUrl.BASE_URL_ =
          /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i),
        (goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ =
          /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/),
        (goog.html.TrustedResourceUrl.formatWithParams = function (e, t, r, n) {
          return goog.html.TrustedResourceUrl.format(e, t).cloneWithParams(
            r,
            n,
          );
        }),
        (goog.html.TrustedResourceUrl.fromConstant = function (e) {
          return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
            goog.string.Const.unwrap(e),
          );
        }),
        (goog.html.TrustedResourceUrl.fromConstants = function (e) {
          for (var t = "", r = 0; r < e.length; r++)
            t += goog.string.Const.unwrap(e[r]);
          return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
            t,
          );
        }),
        (goog.html.TrustedResourceUrl.fromSafeScript = function (e) {
          return (
            (e = goog.fs.blob.getBlobWithProperties(
              [goog.html.SafeScript.unwrap(e)],
              "text/javascript",
            )),
            (e = goog.fs.url.createObjectUrl(e)),
            goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
              e,
            )
          );
        }),
        (goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
          {}),
        (goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse =
          function (e) {
            return (
              (e = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
                ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(
                    e,
                  )
                : e),
              new goog.html.TrustedResourceUrl(
                goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_,
                e,
              )
            );
          }),
        (goog.html.TrustedResourceUrl.stringifyParams_ = function (e, t, r) {
          if (null == r) return t;
          if ("string" == typeof r) return r ? e + encodeURIComponent(r) : "";
          for (var n in r) {
            var o = r[n];
            o = Array.isArray(o) ? o : [o];
            for (var i = 0; i < o.length; i++) {
              var a = o[i];
              null != a &&
                (t || (t = e),
                (t +=
                  (t.length > e.length ? "&" : "") +
                  encodeURIComponent(n) +
                  "=" +
                  encodeURIComponent(String(a))));
            }
          }
          return t;
        }),
        (goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {}),
        (goog.string.internal = {}),
        (goog.string.internal.startsWith = function (e, t) {
          return 0 == e.lastIndexOf(t, 0);
        }),
        (goog.string.internal.endsWith = function (e, t) {
          var r = e.length - t.length;
          return 0 <= r && e.indexOf(t, r) == r;
        }),
        (goog.string.internal.caseInsensitiveStartsWith = function (e, t) {
          return (
            0 ==
            goog.string.internal.caseInsensitiveCompare(
              t,
              e.substr(0, t.length),
            )
          );
        }),
        (goog.string.internal.caseInsensitiveEndsWith = function (e, t) {
          return (
            0 ==
            goog.string.internal.caseInsensitiveCompare(
              t,
              e.substr(e.length - t.length, t.length),
            )
          );
        }),
        (goog.string.internal.caseInsensitiveEquals = function (e, t) {
          return e.toLowerCase() == t.toLowerCase();
        }),
        (goog.string.internal.isEmptyOrWhitespace = function (e) {
          return /^[\s\xa0]*$/.test(e);
        }),
        (goog.string.internal.trim =
          goog.TRUSTED_SITE && String.prototype.trim
            ? function (e) {
                return e.trim();
              }
            : function (e) {
                return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1];
              }),
        (goog.string.internal.caseInsensitiveCompare = function (e, t) {
          return (e = String(e).toLowerCase()) < (t = String(t).toLowerCase())
            ? -1
            : e == t
              ? 0
              : 1;
        }),
        (goog.string.internal.newLineToBr = function (e, t) {
          return e.replace(/(\r\n|\r|\n)/g, t ? "<br />" : "<br>");
        }),
        (goog.string.internal.htmlEscape = function (e, t) {
          if (t)
            e = e
              .replace(goog.string.internal.AMP_RE_, "&amp;")
              .replace(goog.string.internal.LT_RE_, "&lt;")
              .replace(goog.string.internal.GT_RE_, "&gt;")
              .replace(goog.string.internal.QUOT_RE_, "&quot;")
              .replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;")
              .replace(goog.string.internal.NULL_RE_, "&#0;");
          else {
            if (!goog.string.internal.ALL_RE_.test(e)) return e;
            -1 != e.indexOf("&") &&
              (e = e.replace(goog.string.internal.AMP_RE_, "&amp;")),
              -1 != e.indexOf("<") &&
                (e = e.replace(goog.string.internal.LT_RE_, "&lt;")),
              -1 != e.indexOf(">") &&
                (e = e.replace(goog.string.internal.GT_RE_, "&gt;")),
              -1 != e.indexOf('"') &&
                (e = e.replace(goog.string.internal.QUOT_RE_, "&quot;")),
              -1 != e.indexOf("'") &&
                (e = e.replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;")),
              -1 != e.indexOf("\0") &&
                (e = e.replace(goog.string.internal.NULL_RE_, "&#0;"));
          }
          return e;
        }),
        (goog.string.internal.AMP_RE_ = /&/g),
        (goog.string.internal.LT_RE_ = /</g),
        (goog.string.internal.GT_RE_ = />/g),
        (goog.string.internal.QUOT_RE_ = /"/g),
        (goog.string.internal.SINGLE_QUOTE_RE_ = /'/g),
        (goog.string.internal.NULL_RE_ = /\x00/g),
        (goog.string.internal.ALL_RE_ = /[\x00&<>"']/),
        (goog.string.internal.whitespaceEscape = function (e, t) {
          return goog.string.internal.newLineToBr(
            e.replace(/  /g, " &#160;"),
            t,
          );
        }),
        (goog.string.internal.contains = function (e, t) {
          return -1 != e.indexOf(t);
        }),
        (goog.string.internal.caseInsensitiveContains = function (e, t) {
          return goog.string.internal.contains(
            e.toLowerCase(),
            t.toLowerCase(),
          );
        }),
        (goog.string.internal.compareVersions = function (e, t) {
          var r = 0;
          (e = goog.string.internal.trim(String(e)).split(".")),
            (t = goog.string.internal.trim(String(t)).split("."));
          for (
            var n = Math.max(e.length, t.length), o = 0;
            0 == r && o < n;
            o++
          ) {
            var i = e[o] || "",
              a = t[o] || "";
            do {
              if (
                ((i = /(\d*)(\D*)(.*)/.exec(i) || ["", "", "", ""]),
                (a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""]),
                0 == i[0].length && 0 == a[0].length)
              )
                break;
              r = 0 == i[1].length ? 0 : parseInt(i[1], 10);
              var s = 0 == a[1].length ? 0 : parseInt(a[1], 10);
              (r =
                goog.string.internal.compareElements_(r, s) ||
                goog.string.internal.compareElements_(
                  0 == i[2].length,
                  0 == a[2].length,
                ) ||
                goog.string.internal.compareElements_(i[2], a[2])),
                (i = i[3]),
                (a = a[3]);
            } while (0 == r);
          }
          return r;
        }),
        (goog.string.internal.compareElements_ = function (e, t) {
          return e < t ? -1 : e > t ? 1 : 0;
        }),
        (goog.html.SafeUrl = function (e, t) {
          (this.privateDoNotAccessOrElseSafeUrlWrappedValue_ =
            (e === goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && t) || ""),
            (this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
              goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
        }),
        (goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez"),
        (goog.html.SafeUrl.prototype.implementsGoogStringTypedString = !0),
        (goog.html.SafeUrl.prototype.getTypedStringValue = function () {
          return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
        }),
        (goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString =
          !0),
        (goog.html.SafeUrl.prototype.getDirection = function () {
          return goog.i18n.bidi.Dir.LTR;
        }),
        goog.DEBUG &&
          (goog.html.SafeUrl.prototype.toString = function () {
            return (
              "SafeUrl{" +
              this.privateDoNotAccessOrElseSafeUrlWrappedValue_ +
              "}"
            );
          }),
        (goog.html.SafeUrl.unwrap = function (e) {
          return e instanceof goog.html.SafeUrl &&
            e.constructor === goog.html.SafeUrl &&
            e.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
              goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
            ? e.privateDoNotAccessOrElseSafeUrlWrappedValue_
            : (goog.asserts.fail(
                "expected object of type SafeUrl, got '" +
                  e +
                  "' of type " +
                  goog.typeOf(e),
              ),
              "type_error:SafeUrl");
        }),
        (goog.html.SafeUrl.fromConstant = function (e) {
          return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
            goog.string.Const.unwrap(e),
          );
        }),
        (goog.html.SAFE_MIME_TYPE_PATTERN_ =
          /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i),
        (goog.html.SafeUrl.isSafeMimeType = function (e) {
          return goog.html.SAFE_MIME_TYPE_PATTERN_.test(e);
        }),
        (goog.html.SafeUrl.fromBlob = function (e) {
          return (
            (e = goog.html.SafeUrl.isSafeMimeType(e.type)
              ? goog.fs.url.createObjectUrl(e)
              : goog.html.SafeUrl.INNOCUOUS_STRING),
            goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
          );
        }),
        (goog.html.SafeUrl.fromMediaSource = function (e) {
          return (
            goog.asserts.assert(
              "MediaSource" in goog.global,
              "No support for MediaSource",
            ),
            (e =
              e instanceof MediaSource
                ? goog.fs.url.createObjectUrl(e)
                : goog.html.SafeUrl.INNOCUOUS_STRING),
            goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
          );
        }),
        (goog.html.DATA_URL_PATTERN_ = /^data:(.*);base64,[a-z0-9+\/]+=*$/i),
        (goog.html.SafeUrl.fromDataUrl = function (e) {
          var t = (e = e.replace(/(%0A|%0D)/g, "")).match(
            goog.html.DATA_URL_PATTERN_,
          );
          return (
            (t = t && goog.html.SafeUrl.isSafeMimeType(t[1])),
            goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
              t ? e : goog.html.SafeUrl.INNOCUOUS_STRING,
            )
          );
        }),
        (goog.html.SafeUrl.fromTelUrl = function (e) {
          return (
            goog.string.internal.caseInsensitiveStartsWith(e, "tel:") ||
              (e = goog.html.SafeUrl.INNOCUOUS_STRING),
            goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
          );
        }),
        (goog.html.SIP_URL_PATTERN_ =
          /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i),
        (goog.html.SafeUrl.fromSipUrl = function (e) {
          return (
            goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(e)) ||
              (e = goog.html.SafeUrl.INNOCUOUS_STRING),
            goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
          );
        }),
        (goog.html.SafeUrl.fromFacebookMessengerUrl = function (e) {
          return (
            goog.string.internal.caseInsensitiveStartsWith(
              e,
              "fb-messenger://share",
            ) || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
            goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
          );
        }),
        (goog.html.SafeUrl.fromWhatsAppUrl = function (e) {
          return (
            goog.string.internal.caseInsensitiveStartsWith(
              e,
              "whatsapp://send",
            ) || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
            goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
          );
        }),
        (goog.html.SafeUrl.fromSmsUrl = function (e) {
          return (
            (goog.string.internal.caseInsensitiveStartsWith(e, "sms:") &&
              goog.html.SafeUrl.isSmsUrlBodyValid_(e)) ||
              (e = goog.html.SafeUrl.INNOCUOUS_STRING),
            goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
          );
        }),
        (goog.html.SafeUrl.isSmsUrlBodyValid_ = function (e) {
          var t = e.indexOf("#");
          if ((0 < t && (e = e.substring(0, t)), !(t = e.match(/[?&]body=/gi))))
            return !0;
          if (1 < t.length) return !1;
          if (!(e = e.match(/[?&]body=([^&]*)/)[1])) return !0;
          try {
            decodeURIComponent(e);
          } catch (e) {
            return !1;
          }
          return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(e);
        }),
        (goog.html.SafeUrl.fromSshUrl = function (e) {
          return (
            goog.string.internal.caseInsensitiveStartsWith(e, "ssh://") ||
              (e = goog.html.SafeUrl.INNOCUOUS_STRING),
            goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
          );
        }),
        (goog.html.SafeUrl.sanitizeChromeExtensionUrl = function (e, t) {
          return goog.html.SafeUrl.sanitizeExtensionUrl_(
            /^chrome-extension:\/\/([^\/]+)\//,
            e,
            t,
          );
        }),
        (goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function (e, t) {
          return goog.html.SafeUrl.sanitizeExtensionUrl_(
            /^moz-extension:\/\/([^\/]+)\//,
            e,
            t,
          );
        }),
        (goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function (e, t) {
          return goog.html.SafeUrl.sanitizeExtensionUrl_(
            /^ms-browser-extension:\/\/([^\/]+)\//,
            e,
            t,
          );
        }),
        (goog.html.SafeUrl.sanitizeExtensionUrl_ = function (e, t, r) {
          return (
            (e = e.exec(t))
              ? ((e = e[1]),
                -1 ==
                  (r instanceof goog.string.Const
                    ? [goog.string.Const.unwrap(r)]
                    : r.map(function (e) {
                        return goog.string.Const.unwrap(e);
                      })
                  ).indexOf(e) && (t = goog.html.SafeUrl.INNOCUOUS_STRING))
              : (t = goog.html.SafeUrl.INNOCUOUS_STRING),
            goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
          );
        }),
        (goog.html.SafeUrl.fromTrustedResourceUrl = function (e) {
          return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
            goog.html.TrustedResourceUrl.unwrap(e),
          );
        }),
        (goog.html.SAFE_URL_PATTERN_ =
          /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i),
        (goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_),
        (goog.html.SafeUrl.sanitize = function (e) {
          return e instanceof goog.html.SafeUrl
            ? e
            : ((e =
                "object" == typeof e && e.implementsGoogStringTypedString
                  ? e.getTypedStringValue()
                  : String(e)),
              goog.html.SAFE_URL_PATTERN_.test(e) ||
                (e = goog.html.SafeUrl.INNOCUOUS_STRING),
              goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                e,
              ));
        }),
        (goog.html.SafeUrl.sanitizeAssertUnchanged = function (e, t) {
          return e instanceof goog.html.SafeUrl
            ? e
            : ((e =
                "object" == typeof e && e.implementsGoogStringTypedString
                  ? e.getTypedStringValue()
                  : String(e)),
              t &&
              /^data:/i.test(e) &&
              (t = goog.html.SafeUrl.fromDataUrl(e)).getTypedStringValue() == e
                ? t
                : (goog.asserts.assert(
                    goog.html.SAFE_URL_PATTERN_.test(e),
                    "%s does not match the safe URL pattern",
                    e,
                  ) || (e = goog.html.SafeUrl.INNOCUOUS_STRING),
                  goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                    e,
                  )));
        }),
        (goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
        (goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse =
          function (e) {
            return new goog.html.SafeUrl(
              goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_,
              e,
            );
          }),
        (goog.html.SafeUrl.ABOUT_BLANK =
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
            "about:blank",
          )),
        (goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {}),
        (goog.html.SafeStyle = function () {
          (this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = ""),
            (this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
              goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
        }),
        (goog.html.SafeStyle.prototype.implementsGoogStringTypedString = !0),
        (goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
        (goog.html.SafeStyle.fromConstant = function (e) {
          return 0 === (e = goog.string.Const.unwrap(e)).length
            ? goog.html.SafeStyle.EMPTY
            : (goog.asserts.assert(
                goog.string.internal.endsWith(e, ";"),
                "Last character of style string is not ';': " + e,
              ),
              goog.asserts.assert(
                goog.string.internal.contains(e, ":"),
                "Style string must contain at least one ':', to specify a \"name: value\" pair: " +
                  e,
              ),
              goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
                e,
              ));
        }),
        (goog.html.SafeStyle.prototype.getTypedStringValue = function () {
          return this.privateDoNotAccessOrElseSafeStyleWrappedValue_;
        }),
        goog.DEBUG &&
          (goog.html.SafeStyle.prototype.toString = function () {
            return (
              "SafeStyle{" +
              this.privateDoNotAccessOrElseSafeStyleWrappedValue_ +
              "}"
            );
          }),
        (goog.html.SafeStyle.unwrap = function (e) {
          return e instanceof goog.html.SafeStyle &&
            e.constructor === goog.html.SafeStyle &&
            e.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
              goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
            ? e.privateDoNotAccessOrElseSafeStyleWrappedValue_
            : (goog.asserts.fail(
                "expected object of type SafeStyle, got '" +
                  e +
                  "' of type " +
                  goog.typeOf(e),
              ),
              "type_error:SafeStyle");
        }),
        (goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse =
          function (e) {
            return new goog.html.SafeStyle().initSecurityPrivateDoNotAccessOrElse_(
              e,
            );
          }),
        (goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ =
          function (e) {
            return (
              (this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = e), this
            );
          }),
        (goog.html.SafeStyle.EMPTY =
          goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
            "",
          )),
        (goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez"),
        (goog.html.SafeStyle.create = function (e) {
          var t,
            r = "";
          for (t in e) {
            if (!/^[-_a-zA-Z0-9]+$/.test(t))
              throw Error("Name allows only [-_a-zA-Z0-9], got: " + t);
            var n = e[t];
            null != n &&
              (r +=
                t +
                ":" +
                (n = Array.isArray(n)
                  ? goog.array
                      .map(n, goog.html.SafeStyle.sanitizePropertyValue_)
                      .join(" ")
                  : goog.html.SafeStyle.sanitizePropertyValue_(n)) +
                ";");
          }
          return r
            ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
                r,
              )
            : goog.html.SafeStyle.EMPTY;
        }),
        (goog.html.SafeStyle.sanitizePropertyValue_ = function (e) {
          if (e instanceof goog.html.SafeUrl)
            return (
              'url("' +
              goog.html.SafeUrl.unwrap(e)
                .replace(/</g, "%3c")
                .replace(/[\\"]/g, "\\$&") +
              '")'
            );
          if (
            ((e =
              e instanceof goog.string.Const
                ? goog.string.Const.unwrap(e)
                : goog.html.SafeStyle.sanitizePropertyValueString_(String(e))),
            /[{;}]/.test(e))
          )
            throw new goog.asserts.AssertionError(
              "Value does not allow [{;}], got: %s.",
              [e],
            );
          return e;
        }),
        (goog.html.SafeStyle.sanitizePropertyValueString_ = function (e) {
          var t = e
            .replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1")
            .replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1")
            .replace(goog.html.SafeStyle.URL_RE_, "url");
          return goog.html.SafeStyle.VALUE_RE_.test(t)
            ? goog.html.SafeStyle.COMMENT_RE_.test(e)
              ? (goog.asserts.fail(
                  "String value disallows comments, got: " + e,
                ),
                goog.html.SafeStyle.INNOCUOUS_STRING)
              : goog.html.SafeStyle.hasBalancedQuotes_(e)
                ? goog.html.SafeStyle.hasBalancedSquareBrackets_(e)
                  ? goog.html.SafeStyle.sanitizeUrl_(e)
                  : (goog.asserts.fail(
                      "String value requires balanced square brackets and one identifier per pair of brackets, got: " +
                        e,
                    ),
                    goog.html.SafeStyle.INNOCUOUS_STRING)
                : (goog.asserts.fail(
                    "String value requires balanced quotes, got: " + e,
                  ),
                  goog.html.SafeStyle.INNOCUOUS_STRING)
            : (goog.asserts.fail(
                "String value allows only " +
                  goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ +
                  " and simple functions, got: " +
                  e,
              ),
              goog.html.SafeStyle.INNOCUOUS_STRING);
        }),
        (goog.html.SafeStyle.hasBalancedQuotes_ = function (e) {
          for (var t = !0, r = !0, n = 0; n < e.length; n++) {
            var o = e.charAt(n);
            "'" == o && r ? (t = !t) : '"' == o && t && (r = !r);
          }
          return t && r;
        }),
        (goog.html.SafeStyle.hasBalancedSquareBrackets_ = function (e) {
          for (var t = !0, r = /^[-_a-zA-Z0-9]$/, n = 0; n < e.length; n++) {
            var o = e.charAt(n);
            if ("]" == o) {
              if (t) return !1;
              t = !0;
            } else if ("[" == o) {
              if (!t) return !1;
              t = !1;
            } else if (!t && !r.test(o)) return !1;
          }
          return t;
        }),
        (goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ =
          "[-,.\"'%_!# a-zA-Z0-9\\[\\]]"),
        (goog.html.SafeStyle.VALUE_RE_ = new RegExp(
          "^" + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + "+$",
        )),
        (goog.html.SafeStyle.URL_RE_ =
          /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g),
        (goog.html.SafeStyle.ALLOWED_FUNCTIONS_ =
          "calc cubic-bezier fit-content hsl hsla linear-gradient matrix minmax repeat rgb rgba (rotate|scale|translate)(X|Y|Z|3d)?".split(
            " ",
          )),
        (goog.html.SafeStyle.FUNCTIONS_RE_ = new RegExp(
          "\\b(" +
            goog.html.SafeStyle.ALLOWED_FUNCTIONS_.join("|") +
            ")\\([-+*/0-9a-z.%\\[\\], ]+\\)",
          "g",
        )),
        (goog.html.SafeStyle.COMMENT_RE_ = /\/\*/),
        (goog.html.SafeStyle.sanitizeUrl_ = function (e) {
          return e.replace(goog.html.SafeStyle.URL_RE_, function (e, t, r, n) {
            var o = "";
            return (
              (r = r.replace(/^(['"])(.*)\1$/, function (e, t, r) {
                return (o = t), r;
              })),
              (e = goog.html.SafeUrl.sanitize(r).getTypedStringValue()),
              t + o + e + o + n
            );
          });
        }),
        (goog.html.SafeStyle.concat = function (e) {
          var t = "",
            r = function (e) {
              Array.isArray(e)
                ? goog.array.forEach(e, r)
                : (t += goog.html.SafeStyle.unwrap(e));
            };
          return (
            goog.array.forEach(arguments, r),
            t
              ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
                  t,
                )
              : goog.html.SafeStyle.EMPTY
          );
        }),
        (goog.html.SafeStyleSheet = function () {
          (this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = ""),
            (this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
              goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
        }),
        (goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString =
          !0),
        (goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
        (goog.html.SafeStyleSheet.createRule = function (e, t) {
          if (goog.string.internal.contains(e, "<"))
            throw Error("Selector does not allow '<', got: " + e);
          var r = e.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
          if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(r))
            throw Error(
              "Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " +
                e,
            );
          if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(r))
            throw Error("() and [] in selector must be balanced, got: " + e);
          return (
            t instanceof goog.html.SafeStyle ||
              (t = goog.html.SafeStyle.create(t)),
            (e =
              e +
              "{" +
              goog.html.SafeStyle.unwrap(t).replace(/</g, "\\3C ") +
              "}"),
            goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
              e,
            )
          );
        }),
        (goog.html.SafeStyleSheet.hasBalancedBrackets_ = function (e) {
          for (
            var t = { "(": ")", "[": "]" }, r = [], n = 0;
            n < e.length;
            n++
          ) {
            var o = e[n];
            if (t[o]) r.push(t[o]);
            else if (goog.object.contains(t, o) && r.pop() != o) return !1;
          }
          return 0 == r.length;
        }),
        (goog.html.SafeStyleSheet.concat = function (e) {
          var t = "",
            r = function (e) {
              Array.isArray(e)
                ? goog.array.forEach(e, r)
                : (t += goog.html.SafeStyleSheet.unwrap(e));
            };
          return (
            goog.array.forEach(arguments, r),
            goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
              t,
            )
          );
        }),
        (goog.html.SafeStyleSheet.fromConstant = function (e) {
          return 0 === (e = goog.string.Const.unwrap(e)).length
            ? goog.html.SafeStyleSheet.EMPTY
            : (goog.asserts.assert(
                !goog.string.internal.contains(e, "<"),
                "Forbidden '<' character in style sheet string: " + e,
              ),
              goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
                e,
              ));
        }),
        (goog.html.SafeStyleSheet.prototype.getTypedStringValue = function () {
          return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
        }),
        goog.DEBUG &&
          (goog.html.SafeStyleSheet.prototype.toString = function () {
            return (
              "SafeStyleSheet{" +
              this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ +
              "}"
            );
          }),
        (goog.html.SafeStyleSheet.unwrap = function (e) {
          return e instanceof goog.html.SafeStyleSheet &&
            e.constructor === goog.html.SafeStyleSheet &&
            e.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
              goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
            ? e.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_
            : (goog.asserts.fail(
                "expected object of type SafeStyleSheet, got '" +
                  e +
                  "' of type " +
                  goog.typeOf(e),
              ),
              "type_error:SafeStyleSheet");
        }),
        (goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse =
          function (e) {
            return new goog.html.SafeStyleSheet().initSecurityPrivateDoNotAccessOrElse_(
              e,
            );
          }),
        (goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ =
          function (e) {
            return (
              (this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = e),
              this
            );
          }),
        (goog.html.SafeStyleSheet.EMPTY =
          goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
            "",
          )),
        (goog.labs = {}),
        (goog.labs.userAgent = {}),
        (goog.labs.userAgent.util = {}),
        (goog.labs.userAgent.util.getNativeUserAgentString_ = function () {
          var e = goog.labs.userAgent.util.getNavigator_();
          return e && (e = e.userAgent) ? e : "";
        }),
        (goog.labs.userAgent.util.getNavigator_ = function () {
          return goog.global.navigator;
        }),
        (goog.labs.userAgent.util.userAgent_ =
          goog.labs.userAgent.util.getNativeUserAgentString_()),
        (goog.labs.userAgent.util.setUserAgent = function (e) {
          goog.labs.userAgent.util.userAgent_ =
            e || goog.labs.userAgent.util.getNativeUserAgentString_();
        }),
        (goog.labs.userAgent.util.getUserAgent = function () {
          return goog.labs.userAgent.util.userAgent_;
        }),
        (goog.labs.userAgent.util.matchUserAgent = function (e) {
          var t = goog.labs.userAgent.util.getUserAgent();
          return goog.string.internal.contains(t, e);
        }),
        (goog.labs.userAgent.util.matchUserAgentIgnoreCase = function (e) {
          var t = goog.labs.userAgent.util.getUserAgent();
          return goog.string.internal.caseInsensitiveContains(t, e);
        }),
        (goog.labs.userAgent.util.extractVersionTuples = function (e) {
          for (
            var t, r = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, n = [];
            (t = r.exec(e));
          )
            n.push([t[1], t[2], t[3] || void 0]);
          return n;
        }),
        (goog.labs.userAgent.browser = {}),
        (goog.labs.userAgent.browser.matchOpera_ = function () {
          return goog.labs.userAgent.util.matchUserAgent("Opera");
        }),
        (goog.labs.userAgent.browser.matchIE_ = function () {
          return (
            goog.labs.userAgent.util.matchUserAgent("Trident") ||
            goog.labs.userAgent.util.matchUserAgent("MSIE")
          );
        }),
        (goog.labs.userAgent.browser.matchEdgeHtml_ = function () {
          return goog.labs.userAgent.util.matchUserAgent("Edge");
        }),
        (goog.labs.userAgent.browser.matchEdgeChromium_ = function () {
          return goog.labs.userAgent.util.matchUserAgent("Edg/");
        }),
        (goog.labs.userAgent.browser.matchOperaChromium_ = function () {
          return goog.labs.userAgent.util.matchUserAgent("OPR");
        }),
        (goog.labs.userAgent.browser.matchFirefox_ = function () {
          return (
            goog.labs.userAgent.util.matchUserAgent("Firefox") ||
            goog.labs.userAgent.util.matchUserAgent("FxiOS")
          );
        }),
        (goog.labs.userAgent.browser.matchSafari_ = function () {
          return (
            goog.labs.userAgent.util.matchUserAgent("Safari") &&
            !(
              goog.labs.userAgent.browser.matchChrome_() ||
              goog.labs.userAgent.browser.matchCoast_() ||
              goog.labs.userAgent.browser.matchOpera_() ||
              goog.labs.userAgent.browser.matchEdgeHtml_() ||
              goog.labs.userAgent.browser.matchEdgeChromium_() ||
              goog.labs.userAgent.browser.matchOperaChromium_() ||
              goog.labs.userAgent.browser.matchFirefox_() ||
              goog.labs.userAgent.browser.isSilk() ||
              goog.labs.userAgent.util.matchUserAgent("Android")
            )
          );
        }),
        (goog.labs.userAgent.browser.matchCoast_ = function () {
          return goog.labs.userAgent.util.matchUserAgent("Coast");
        }),
        (goog.labs.userAgent.browser.matchIosWebview_ = function () {
          return (
            (goog.labs.userAgent.util.matchUserAgent("iPad") ||
              goog.labs.userAgent.util.matchUserAgent("iPhone")) &&
            !goog.labs.userAgent.browser.matchSafari_() &&
            !goog.labs.userAgent.browser.matchChrome_() &&
            !goog.labs.userAgent.browser.matchCoast_() &&
            !goog.labs.userAgent.browser.matchFirefox_() &&
            goog.labs.userAgent.util.matchUserAgent("AppleWebKit")
          );
        }),
        (goog.labs.userAgent.browser.matchChrome_ = function () {
          return (
            (goog.labs.userAgent.util.matchUserAgent("Chrome") ||
              goog.labs.userAgent.util.matchUserAgent("CriOS")) &&
            !goog.labs.userAgent.browser.matchEdgeHtml_()
          );
        }),
        (goog.labs.userAgent.browser.matchAndroidBrowser_ = function () {
          return (
            goog.labs.userAgent.util.matchUserAgent("Android") &&
            !(
              goog.labs.userAgent.browser.isChrome() ||
              goog.labs.userAgent.browser.isFirefox() ||
              goog.labs.userAgent.browser.isOpera() ||
              goog.labs.userAgent.browser.isSilk()
            )
          );
        }),
        (goog.labs.userAgent.browser.isOpera =
          goog.labs.userAgent.browser.matchOpera_),
        (goog.labs.userAgent.browser.isIE =
          goog.labs.userAgent.browser.matchIE_),
        (goog.labs.userAgent.browser.isEdge =
          goog.labs.userAgent.browser.matchEdgeHtml_),
        (goog.labs.userAgent.browser.isEdgeChromium =
          goog.labs.userAgent.browser.matchEdgeChromium_),
        (goog.labs.userAgent.browser.isOperaChromium =
          goog.labs.userAgent.browser.matchOperaChromium_),
        (goog.labs.userAgent.browser.isFirefox =
          goog.labs.userAgent.browser.matchFirefox_),
        (goog.labs.userAgent.browser.isSafari =
          goog.labs.userAgent.browser.matchSafari_),
        (goog.labs.userAgent.browser.isCoast =
          goog.labs.userAgent.browser.matchCoast_),
        (goog.labs.userAgent.browser.isIosWebview =
          goog.labs.userAgent.browser.matchIosWebview_),
        (goog.labs.userAgent.browser.isChrome =
          goog.labs.userAgent.browser.matchChrome_),
        (goog.labs.userAgent.browser.isAndroidBrowser =
          goog.labs.userAgent.browser.matchAndroidBrowser_),
        (goog.labs.userAgent.browser.isSilk = function () {
          return goog.labs.userAgent.util.matchUserAgent("Silk");
        }),
        (goog.labs.userAgent.browser.getVersion = function () {
          function e(e) {
            return (e = goog.array.find(e, n)), r[e] || "";
          }
          var t = goog.labs.userAgent.util.getUserAgent();
          if (goog.labs.userAgent.browser.isIE())
            return goog.labs.userAgent.browser.getIEVersion_(t);
          t = goog.labs.userAgent.util.extractVersionTuples(t);
          var r = {};
          goog.array.forEach(t, function (e) {
            r[e[0]] = e[1];
          });
          var n = goog.partial(goog.object.containsKey, r);
          return goog.labs.userAgent.browser.isOpera()
            ? e(["Version", "Opera"])
            : goog.labs.userAgent.browser.isEdge()
              ? e(["Edge"])
              : goog.labs.userAgent.browser.isEdgeChromium()
                ? e(["Edg"])
                : goog.labs.userAgent.browser.isChrome()
                  ? e(["Chrome", "CriOS", "HeadlessChrome"])
                  : ((t = t[2]) && t[1]) || "";
        }),
        (goog.labs.userAgent.browser.isVersionOrHigher = function (e) {
          return (
            0 <=
            goog.string.internal.compareVersions(
              goog.labs.userAgent.browser.getVersion(),
              e,
            )
          );
        }),
        (goog.labs.userAgent.browser.getIEVersion_ = function (e) {
          var t = /rv: *([\d\.]*)/.exec(e);
          if (t && t[1]) return t[1];
          t = "";
          var r = /MSIE +([\d\.]+)/.exec(e);
          if (r && r[1])
            if (((e = /Trident\/(\d.\d)/.exec(e)), "7.0" == r[1]))
              if (e && e[1])
                switch (e[1]) {
                  case "4.0":
                    t = "8.0";
                    break;
                  case "5.0":
                    t = "9.0";
                    break;
                  case "6.0":
                    t = "10.0";
                    break;
                  case "7.0":
                    t = "11.0";
                }
              else t = "7.0";
            else t = r[1];
          return t;
        }),
        (goog.html.SafeHtml = function () {
          (this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = ""),
            (this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
              goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_),
            (this.dir_ = null);
        }),
        (goog.html.SafeHtml.ENABLE_ERROR_MESSAGES = goog.DEBUG),
        (goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE = !0),
        (goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString =
          !0),
        (goog.html.SafeHtml.prototype.getDirection = function () {
          return this.dir_;
        }),
        (goog.html.SafeHtml.prototype.implementsGoogStringTypedString = !0),
        (goog.html.SafeHtml.prototype.getTypedStringValue = function () {
          return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
        }),
        goog.DEBUG &&
          (goog.html.SafeHtml.prototype.toString = function () {
            return (
              "SafeHtml{" +
              this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ +
              "}"
            );
          }),
        (goog.html.SafeHtml.unwrap = function (e) {
          return goog.html.SafeHtml.unwrapTrustedHTML(e).toString();
        }),
        (goog.html.SafeHtml.unwrapTrustedHTML = function (e) {
          return e instanceof goog.html.SafeHtml &&
            e.constructor === goog.html.SafeHtml &&
            e.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
              goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
            ? e.privateDoNotAccessOrElseSafeHtmlWrappedValue_
            : (goog.asserts.fail(
                "expected object of type SafeHtml, got '" +
                  e +
                  "' of type " +
                  goog.typeOf(e),
              ),
              "type_error:SafeHtml");
        }),
        (goog.html.SafeHtml.htmlEscape = function (e) {
          if (e instanceof goog.html.SafeHtml) return e;
          var t = "object" == typeof e,
            r = null;
          return (
            t &&
              e.implementsGoogI18nBidiDirectionalString &&
              (r = e.getDirection()),
            (e =
              t && e.implementsGoogStringTypedString
                ? e.getTypedStringValue()
                : String(e)),
            goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
              goog.string.internal.htmlEscape(e),
              r,
            )
          );
        }),
        (goog.html.SafeHtml.htmlEscapePreservingNewlines = function (e) {
          return e instanceof goog.html.SafeHtml
            ? e
            : ((e = goog.html.SafeHtml.htmlEscape(e)),
              goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(e)),
                e.getDirection(),
              ));
        }),
        (goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function (
          e,
        ) {
          return e instanceof goog.html.SafeHtml
            ? e
            : ((e = goog.html.SafeHtml.htmlEscape(e)),
              goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                goog.string.internal.whitespaceEscape(
                  goog.html.SafeHtml.unwrap(e),
                ),
                e.getDirection(),
              ));
        }),
        (goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape),
        (goog.html.SafeHtml.comment = function (e) {
          return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
            "\x3c!--" + goog.string.internal.htmlEscape(e) + "--\x3e",
            null,
          );
        }),
        (goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/),
        (goog.html.SafeHtml.URL_ATTRIBUTES_ = {
          action: !0,
          cite: !0,
          data: !0,
          formaction: !0,
          href: !0,
          manifest: !0,
          poster: !0,
          src: !0,
        }),
        (goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = {
          APPLET: !0,
          BASE: !0,
          EMBED: !0,
          IFRAME: !0,
          LINK: !0,
          MATH: !0,
          META: !0,
          OBJECT: !0,
          SCRIPT: !0,
          STYLE: !0,
          SVG: !0,
          TEMPLATE: !0,
        }),
        (goog.html.SafeHtml.create = function (e, t, r) {
          return (
            goog.html.SafeHtml.verifyTagName(String(e)),
            goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
              String(e),
              t,
              r,
            )
          );
        }),
        (goog.html.SafeHtml.verifyTagName = function (e) {
          if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(e))
            throw Error(
              goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                ? "Invalid tag name <" + e + ">."
                : "",
            );
          if (e.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)
            throw Error(
              goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                ? "Tag name <" + e + "> is not allowed for SafeHtml."
                : "",
            );
        }),
        (goog.html.SafeHtml.createIframe = function (e, t, r, n) {
          e && goog.html.TrustedResourceUrl.unwrap(e);
          var o = {};
          return (
            (o.src = e || null),
            (o.srcdoc = t && goog.html.SafeHtml.unwrap(t)),
            (e = goog.html.SafeHtml.combineAttributes(o, { sandbox: "" }, r)),
            goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
              "iframe",
              e,
              n,
            )
          );
        }),
        (goog.html.SafeHtml.createSandboxIframe = function (e, t, r, n) {
          if (!goog.html.SafeHtml.canUseSandboxIframe())
            throw Error(
              goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                ? "The browser does not support sandboxed iframes."
                : "",
            );
          var o = {};
          return (
            (o.src = e
              ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(e))
              : null),
            (o.srcdoc = t || null),
            (o.sandbox = ""),
            (e = goog.html.SafeHtml.combineAttributes(o, {}, r)),
            goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
              "iframe",
              e,
              n,
            )
          );
        }),
        (goog.html.SafeHtml.canUseSandboxIframe = function () {
          return (
            goog.global.HTMLIFrameElement &&
            "sandbox" in goog.global.HTMLIFrameElement.prototype
          );
        }),
        (goog.html.SafeHtml.createScriptSrc = function (e, t) {
          return (
            goog.html.TrustedResourceUrl.unwrap(e),
            (e = goog.html.SafeHtml.combineAttributes({ src: e }, {}, t)),
            goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
              "script",
              e,
            )
          );
        }),
        (goog.html.SafeHtml.createScript = function (e, t) {
          for (var r in t) {
            var n = r.toLowerCase();
            if ("language" == n || "src" == n || "text" == n || "type" == n)
              throw Error(
                goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                  ? 'Cannot set "' + n + '" attribute'
                  : "",
              );
          }
          for (r = "", e = goog.array.concat(e), n = 0; n < e.length; n++)
            r += goog.html.SafeScript.unwrap(e[n]);
          return (
            (e =
              goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                r,
                goog.i18n.bidi.Dir.NEUTRAL,
              )),
            goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
              "script",
              t,
              e,
            )
          );
        }),
        (goog.html.SafeHtml.createStyle = function (e, t) {
          t = goog.html.SafeHtml.combineAttributes({ type: "text/css" }, {}, t);
          var r = "";
          e = goog.array.concat(e);
          for (var n = 0; n < e.length; n++)
            r += goog.html.SafeStyleSheet.unwrap(e[n]);
          return (
            (e =
              goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                r,
                goog.i18n.bidi.Dir.NEUTRAL,
              )),
            goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
              "style",
              t,
              e,
            )
          );
        }),
        (goog.html.SafeHtml.createMetaRefresh = function (e, t) {
          return (
            (e = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(e))),
            (goog.labs.userAgent.browser.isIE() ||
              goog.labs.userAgent.browser.isEdge()) &&
              goog.string.internal.contains(e, ";") &&
              (e = "'" + e.replace(/'/g, "%27") + "'"),
            goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
              "meta",
              { "http-equiv": "refresh", content: (t || 0) + "; url=" + e },
            )
          );
        }),
        (goog.html.SafeHtml.getAttrNameAndValue_ = function (e, t, r) {
          if (r instanceof goog.string.Const) r = goog.string.Const.unwrap(r);
          else if ("style" == t.toLowerCase()) {
            if (!goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE)
              throw Error(
                goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                  ? 'Attribute "style" not supported.'
                  : "",
              );
            r = goog.html.SafeHtml.getStyleValue_(r);
          } else {
            if (/^on/i.test(t))
              throw Error(
                goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                  ? 'Attribute "' +
                      t +
                      '" requires goog.string.Const value, "' +
                      r +
                      '" given.'
                  : "",
              );
            if (t.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_)
              if (r instanceof goog.html.TrustedResourceUrl)
                r = goog.html.TrustedResourceUrl.unwrap(r);
              else if (r instanceof goog.html.SafeUrl)
                r = goog.html.SafeUrl.unwrap(r);
              else {
                if ("string" != typeof r)
                  throw Error(
                    goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                      ? 'Attribute "' +
                          t +
                          '" on tag "' +
                          e +
                          '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
                          r +
                          '" given.'
                      : "",
                  );
                r = goog.html.SafeUrl.sanitize(r).getTypedStringValue();
              }
          }
          return (
            r.implementsGoogStringTypedString && (r = r.getTypedStringValue()),
            goog.asserts.assert(
              "string" == typeof r || "number" == typeof r,
              "String or number value expected, got " +
                typeof r +
                " with value: " +
                r,
            ),
            t + '="' + goog.string.internal.htmlEscape(String(r)) + '"'
          );
        }),
        (goog.html.SafeHtml.getStyleValue_ = function (e) {
          if (!goog.isObject(e))
            throw Error(
              goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                ? 'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
                    typeof e +
                    " given: " +
                    e
                : "",
            );
          return (
            e instanceof goog.html.SafeStyle ||
              (e = goog.html.SafeStyle.create(e)),
            goog.html.SafeStyle.unwrap(e)
          );
        }),
        (goog.html.SafeHtml.createWithDir = function (e, t, r, n) {
          return ((t = goog.html.SafeHtml.create(t, r, n)).dir_ = e), t;
        }),
        (goog.html.SafeHtml.join = function (e, t) {
          var r = (e = goog.html.SafeHtml.htmlEscape(e)).getDirection(),
            n = [],
            o = function (e) {
              Array.isArray(e)
                ? goog.array.forEach(e, o)
                : ((e = goog.html.SafeHtml.htmlEscape(e)),
                  n.push(goog.html.SafeHtml.unwrap(e)),
                  (e = e.getDirection()),
                  r == goog.i18n.bidi.Dir.NEUTRAL
                    ? (r = e)
                    : e != goog.i18n.bidi.Dir.NEUTRAL && r != e && (r = null));
            };
          return (
            goog.array.forEach(t, o),
            goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
              n.join(goog.html.SafeHtml.unwrap(e)),
              r,
            )
          );
        }),
        (goog.html.SafeHtml.concat = function (e) {
          return goog.html.SafeHtml.join(
            goog.html.SafeHtml.EMPTY,
            Array.prototype.slice.call(arguments),
          );
        }),
        (goog.html.SafeHtml.concatWithDir = function (e, t) {
          var r = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
          return (r.dir_ = e), r;
        }),
        (goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
        (goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse =
          function (e, t) {
            return new goog.html.SafeHtml().initSecurityPrivateDoNotAccessOrElse_(
              e,
              t,
            );
          }),
        (goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ =
          function (e, t) {
            return (
              (this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = goog.html
                .trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
                ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(
                    e,
                  )
                : e),
              (this.dir_ = t),
              this
            );
          }),
        (goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse =
          function (e, t, r) {
            var n = null,
              o = "<" + e + goog.html.SafeHtml.stringifyAttributes(e, t);
            return (
              null == r ? (r = []) : Array.isArray(r) || (r = [r]),
              goog.dom.tags.isVoidTag(e.toLowerCase())
                ? (goog.asserts.assert(
                    !r.length,
                    "Void tag <" + e + "> does not allow content.",
                  ),
                  (o += ">"))
                : ((n = goog.html.SafeHtml.concat(r)),
                  (o += ">" + goog.html.SafeHtml.unwrap(n) + "</" + e + ">"),
                  (n = n.getDirection())),
              (e = t && t.dir) &&
                (n = /^(ltr|rtl|auto)$/i.test(e)
                  ? goog.i18n.bidi.Dir.NEUTRAL
                  : null),
              goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                o,
                n,
              )
            );
          }),
        (goog.html.SafeHtml.stringifyAttributes = function (e, t) {
          var r = "";
          if (t)
            for (var n in t) {
              if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(n))
                throw Error(
                  goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                    ? 'Invalid attribute name "' + n + '".'
                    : "",
                );
              var o = t[n];
              null != o &&
                (r += " " + goog.html.SafeHtml.getAttrNameAndValue_(e, n, o));
            }
          return r;
        }),
        (goog.html.SafeHtml.combineAttributes = function (e, t, r) {
          var n,
            o = {};
          for (n in e)
            goog.asserts.assert(n.toLowerCase() == n, "Must be lower case"),
              (o[n] = e[n]);
          for (n in t)
            goog.asserts.assert(n.toLowerCase() == n, "Must be lower case"),
              (o[n] = t[n]);
          if (r)
            for (n in r) {
              var i = n.toLowerCase();
              if (i in e)
                throw Error(
                  goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                    ? 'Cannot override "' +
                        i +
                        '" attribute, got "' +
                        n +
                        '" with value "' +
                        r[n] +
                        '"'
                    : "",
                );
              i in t && delete o[i], (o[n] = r[n]);
            }
          return o;
        }),
        (goog.html.SafeHtml.DOCTYPE_HTML =
          goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
            "<!DOCTYPE html>",
            goog.i18n.bidi.Dir.NEUTRAL,
          )),
        (goog.html.SafeHtml.EMPTY =
          goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
            "",
            goog.i18n.bidi.Dir.NEUTRAL,
          )),
        (goog.html.SafeHtml.BR =
          goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
            "<br>",
            goog.i18n.bidi.Dir.NEUTRAL,
          )),
        (goog.html.uncheckedconversions = {}),
        (goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract =
          function (e, t, r) {
            return (
              goog.asserts.assertString(
                goog.string.Const.unwrap(e),
                "must provide justification",
              ),
              goog.asserts.assert(
                !goog.string.internal.isEmptyOrWhitespace(
                  goog.string.Const.unwrap(e),
                ),
                "must provide non-empty justification",
              ),
              goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                t,
                r || null,
              )
            );
          }),
        (goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract =
          function (e, t) {
            return (
              goog.asserts.assertString(
                goog.string.Const.unwrap(e),
                "must provide justification",
              ),
              goog.asserts.assert(
                !goog.string.internal.isEmptyOrWhitespace(
                  goog.string.Const.unwrap(e),
                ),
                "must provide non-empty justification",
              ),
              goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
                t,
              )
            );
          }),
        (goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract =
          function (e, t) {
            return (
              goog.asserts.assertString(
                goog.string.Const.unwrap(e),
                "must provide justification",
              ),
              goog.asserts.assert(
                !goog.string.internal.isEmptyOrWhitespace(
                  goog.string.Const.unwrap(e),
                ),
                "must provide non-empty justification",
              ),
              goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
                t,
              )
            );
          }),
        (goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract =
          function (e, t) {
            return (
              goog.asserts.assertString(
                goog.string.Const.unwrap(e),
                "must provide justification",
              ),
              goog.asserts.assert(
                !goog.string.internal.isEmptyOrWhitespace(
                  goog.string.Const.unwrap(e),
                ),
                "must provide non-empty justification",
              ),
              goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
                t,
              )
            );
          }),
        (goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract =
          function (e, t) {
            return (
              goog.asserts.assertString(
                goog.string.Const.unwrap(e),
                "must provide justification",
              ),
              goog.asserts.assert(
                !goog.string.internal.isEmptyOrWhitespace(
                  goog.string.Const.unwrap(e),
                ),
                "must provide non-empty justification",
              ),
              goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
            );
          }),
        (goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract =
          function (e, t) {
            return (
              goog.asserts.assertString(
                goog.string.Const.unwrap(e),
                "must provide justification",
              ),
              goog.asserts.assert(
                !goog.string.internal.isEmptyOrWhitespace(
                  goog.string.Const.unwrap(e),
                ),
                "must provide non-empty justification",
              ),
              goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
                t,
              )
            );
          }),
        (goog.dom.safe = {}),
        (goog.dom.safe.InsertAdjacentHtmlPosition = {
          AFTERBEGIN: "afterbegin",
          AFTEREND: "afterend",
          BEFOREBEGIN: "beforebegin",
          BEFOREEND: "beforeend",
        }),
        (goog.dom.safe.insertAdjacentHtml = function (e, t, r) {
          e.insertAdjacentHTML(t, goog.html.SafeHtml.unwrapTrustedHTML(r));
        }),
        (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = {
          MATH: !0,
          SCRIPT: !0,
          STYLE: !0,
          SVG: !0,
          TEMPLATE: !0,
        }),
        (goog.dom.safe.isInnerHtmlCleanupRecursive_ =
          goog.functions.cacheReturnValue(function () {
            if (goog.DEBUG && "undefined" == typeof document) return !1;
            var e = document.createElement("div"),
              t = document.createElement("div");
            return (
              t.appendChild(document.createElement("div")),
              e.appendChild(t),
              !(goog.DEBUG && !e.firstChild) &&
                ((t = e.firstChild.firstChild),
                (e.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(
                  goog.html.SafeHtml.EMPTY,
                )),
                !t.parentElement)
            );
          })),
        (goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function (e, t) {
          if (goog.dom.safe.isInnerHtmlCleanupRecursive_())
            for (; e.lastChild; ) e.removeChild(e.lastChild);
          e.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(t);
        }),
        (goog.dom.safe.setInnerHtml = function (e, t) {
          if (goog.asserts.ENABLE_ASSERTS) {
            var r = e.tagName.toUpperCase();
            if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[r])
              throw Error(
                "goog.dom.safe.setInnerHtml cannot be used to set content of " +
                  e.tagName +
                  ".",
              );
          }
          goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(e, t);
        }),
        (goog.dom.safe.setOuterHtml = function (e, t) {
          e.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(t);
        }),
        (goog.dom.safe.setFormElementAction = function (e, t) {
          (t =
            t instanceof goog.html.SafeUrl
              ? t
              : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
            (goog.dom.asserts.assertIsHTMLFormElement(e).action =
              goog.html.SafeUrl.unwrap(t));
        }),
        (goog.dom.safe.setButtonFormAction = function (e, t) {
          (t =
            t instanceof goog.html.SafeUrl
              ? t
              : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
            (goog.dom.asserts.assertIsHTMLButtonElement(e).formAction =
              goog.html.SafeUrl.unwrap(t));
        }),
        (goog.dom.safe.setInputFormAction = function (e, t) {
          (t =
            t instanceof goog.html.SafeUrl
              ? t
              : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
            (goog.dom.asserts.assertIsHTMLInputElement(e).formAction =
              goog.html.SafeUrl.unwrap(t));
        }),
        (goog.dom.safe.setStyle = function (e, t) {
          e.style.cssText = goog.html.SafeStyle.unwrap(t);
        }),
        (goog.dom.safe.documentWrite = function (e, t) {
          e.write(goog.html.SafeHtml.unwrapTrustedHTML(t));
        }),
        (goog.dom.safe.setAnchorHref = function (e, t) {
          goog.dom.asserts.assertIsHTMLAnchorElement(e),
            (t =
              t instanceof goog.html.SafeUrl
                ? t
                : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
            (e.href = goog.html.SafeUrl.unwrap(t));
        }),
        (goog.dom.safe.setImageSrc = function (e, t) {
          if (
            (goog.dom.asserts.assertIsHTMLImageElement(e),
            !(t instanceof goog.html.SafeUrl))
          ) {
            var r = /^data:image\//i.test(t);
            t = goog.html.SafeUrl.sanitizeAssertUnchanged(t, r);
          }
          e.src = goog.html.SafeUrl.unwrap(t);
        }),
        (goog.dom.safe.setAudioSrc = function (e, t) {
          if (
            (goog.dom.asserts.assertIsHTMLAudioElement(e),
            !(t instanceof goog.html.SafeUrl))
          ) {
            var r = /^data:audio\//i.test(t);
            t = goog.html.SafeUrl.sanitizeAssertUnchanged(t, r);
          }
          e.src = goog.html.SafeUrl.unwrap(t);
        }),
        (goog.dom.safe.setVideoSrc = function (e, t) {
          if (
            (goog.dom.asserts.assertIsHTMLVideoElement(e),
            !(t instanceof goog.html.SafeUrl))
          ) {
            var r = /^data:video\//i.test(t);
            t = goog.html.SafeUrl.sanitizeAssertUnchanged(t, r);
          }
          e.src = goog.html.SafeUrl.unwrap(t);
        }),
        (goog.dom.safe.setEmbedSrc = function (e, t) {
          goog.dom.asserts.assertIsHTMLEmbedElement(e),
            (e.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t));
        }),
        (goog.dom.safe.setFrameSrc = function (e, t) {
          goog.dom.asserts.assertIsHTMLFrameElement(e),
            (e.src = goog.html.TrustedResourceUrl.unwrap(t));
        }),
        (goog.dom.safe.setIframeSrc = function (e, t) {
          goog.dom.asserts.assertIsHTMLIFrameElement(e),
            (e.src = goog.html.TrustedResourceUrl.unwrap(t));
        }),
        (goog.dom.safe.setIframeSrcdoc = function (e, t) {
          goog.dom.asserts.assertIsHTMLIFrameElement(e),
            (e.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(t));
        }),
        (goog.dom.safe.setLinkHrefAndRel = function (e, t, r) {
          goog.dom.asserts.assertIsHTMLLinkElement(e),
            (e.rel = r),
            goog.string.internal.caseInsensitiveContains(r, "stylesheet")
              ? (goog.asserts.assert(
                  t instanceof goog.html.TrustedResourceUrl,
                  'URL must be TrustedResourceUrl because "rel" contains "stylesheet"',
                ),
                (e.href = goog.html.TrustedResourceUrl.unwrap(t)))
              : (e.href =
                  t instanceof goog.html.TrustedResourceUrl
                    ? goog.html.TrustedResourceUrl.unwrap(t)
                    : t instanceof goog.html.SafeUrl
                      ? goog.html.SafeUrl.unwrap(t)
                      : goog.html.SafeUrl.unwrap(
                          goog.html.SafeUrl.sanitizeAssertUnchanged(t),
                        ));
        }),
        (goog.dom.safe.setObjectData = function (e, t) {
          goog.dom.asserts.assertIsHTMLObjectElement(e),
            (e.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t));
        }),
        (goog.dom.safe.setScriptSrc = function (e, t) {
          goog.dom.asserts.assertIsHTMLScriptElement(e),
            (e.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t)),
            (t = goog.getScriptNonce()) && e.setAttribute("nonce", t);
        }),
        (goog.dom.safe.setScriptContent = function (e, t) {
          goog.dom.asserts.assertIsHTMLScriptElement(e),
            (e.text = goog.html.SafeScript.unwrapTrustedScript(t)),
            (t = goog.getScriptNonce()) && e.setAttribute("nonce", t);
        }),
        (goog.dom.safe.setLocationHref = function (e, t) {
          goog.dom.asserts.assertIsLocation(e),
            (t =
              t instanceof goog.html.SafeUrl
                ? t
                : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
            (e.href = goog.html.SafeUrl.unwrap(t));
        }),
        (goog.dom.safe.assignLocation = function (e, t) {
          goog.dom.asserts.assertIsLocation(e),
            (t =
              t instanceof goog.html.SafeUrl
                ? t
                : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
            e.assign(goog.html.SafeUrl.unwrap(t));
        }),
        (goog.dom.safe.replaceLocation = function (e, t) {
          (t =
            t instanceof goog.html.SafeUrl
              ? t
              : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
            e.replace(goog.html.SafeUrl.unwrap(t));
        }),
        (goog.dom.safe.openInWindow = function (e, t, r, n, o) {
          return (
            (e =
              e instanceof goog.html.SafeUrl
                ? e
                : goog.html.SafeUrl.sanitizeAssertUnchanged(e)),
            (t = t || goog.global),
            (r =
              r instanceof goog.string.Const
                ? goog.string.Const.unwrap(r)
                : r || ""),
            t.open(goog.html.SafeUrl.unwrap(e), r, n, o)
          );
        }),
        (goog.dom.safe.parseFromStringHtml = function (e, t) {
          return goog.dom.safe.parseFromString(e, t, "text/html");
        }),
        (goog.dom.safe.parseFromString = function (e, t, r) {
          return e.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(t), r);
        }),
        (goog.dom.safe.createImageFromBlob = function (e) {
          if (!/^image\/.*/g.test(e.type))
            throw Error(
              "goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.",
            );
          var t = goog.global.URL.createObjectURL(e);
          return (
            ((e = new goog.global.Image()).onload = function () {
              goog.global.URL.revokeObjectURL(t);
            }),
            goog.dom.safe.setImageSrc(
              e,
              goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(
                goog.string.Const.from("Image blob URL."),
                t,
              ),
            ),
            e
          );
        }),
        (goog.string.DETECT_DOUBLE_ESCAPING = !1),
        (goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1),
        (goog.string.Unicode = { NBSP: " " }),
        (goog.string.startsWith = goog.string.internal.startsWith),
        (goog.string.endsWith = goog.string.internal.endsWith),
        (goog.string.caseInsensitiveStartsWith =
          goog.string.internal.caseInsensitiveStartsWith),
        (goog.string.caseInsensitiveEndsWith =
          goog.string.internal.caseInsensitiveEndsWith),
        (goog.string.caseInsensitiveEquals =
          goog.string.internal.caseInsensitiveEquals),
        (goog.string.subs = function (e, t) {
          for (
            var r = e.split("%s"),
              n = "",
              o = Array.prototype.slice.call(arguments, 1);
            o.length && 1 < r.length;
          )
            n += r.shift() + o.shift();
          return n + r.join("%s");
        }),
        (goog.string.collapseWhitespace = function (e) {
          return e.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
        }),
        (goog.string.isEmptyOrWhitespace =
          goog.string.internal.isEmptyOrWhitespace),
        (goog.string.isEmptyString = function (e) {
          return 0 == e.length;
        }),
        (goog.string.isEmpty = goog.string.isEmptyOrWhitespace),
        (goog.string.isEmptyOrWhitespaceSafe = function (e) {
          return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(e));
        }),
        (goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe),
        (goog.string.isBreakingWhitespace = function (e) {
          return !/[^\t\n\r ]/.test(e);
        }),
        (goog.string.isAlpha = function (e) {
          return !/[^a-zA-Z]/.test(e);
        }),
        (goog.string.isNumeric = function (e) {
          return !/[^0-9]/.test(e);
        }),
        (goog.string.isAlphaNumeric = function (e) {
          return !/[^a-zA-Z0-9]/.test(e);
        }),
        (goog.string.isSpace = function (e) {
          return " " == e;
        }),
        (goog.string.isUnicodeChar = function (e) {
          return (
            (1 == e.length && " " <= e && "~" >= e) || ("" <= e && "�" >= e)
          );
        }),
        (goog.string.stripNewlines = function (e) {
          return e.replace(/(\r\n|\r|\n)+/g, " ");
        }),
        (goog.string.canonicalizeNewlines = function (e) {
          return e.replace(/(\r\n|\r|\n)/g, "\n");
        }),
        (goog.string.normalizeWhitespace = function (e) {
          return e.replace(/\xa0|\s/g, " ");
        }),
        (goog.string.normalizeSpaces = function (e) {
          return e.replace(/\xa0|[ \t]+/g, " ");
        }),
        (goog.string.collapseBreakingSpaces = function (e) {
          return e
            .replace(/[\t\r\n ]+/g, " ")
            .replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
        }),
        (goog.string.trim = goog.string.internal.trim),
        (goog.string.trimLeft = function (e) {
          return e.replace(/^[\s\xa0]+/, "");
        }),
        (goog.string.trimRight = function (e) {
          return e.replace(/[\s\xa0]+$/, "");
        }),
        (goog.string.caseInsensitiveCompare =
          goog.string.internal.caseInsensitiveCompare),
        (goog.string.numberAwareCompare_ = function (e, t, r) {
          if (e == t) return 0;
          if (!e) return -1;
          if (!t) return 1;
          for (
            var n = e.toLowerCase().match(r),
              o = t.toLowerCase().match(r),
              i = Math.min(n.length, o.length),
              a = 0;
            a < i;
            a++
          ) {
            r = n[a];
            var s = o[a];
            if (r != s)
              return (
                (e = parseInt(r, 10)),
                !isNaN(e) && ((t = parseInt(s, 10)), !isNaN(t) && e - t)
                  ? e - t
                  : r < s
                    ? -1
                    : 1
              );
          }
          return n.length != o.length ? n.length - o.length : e < t ? -1 : 1;
        }),
        (goog.string.intAwareCompare = function (e, t) {
          return goog.string.numberAwareCompare_(e, t, /\d+|\D+/g);
        }),
        (goog.string.floatAwareCompare = function (e, t) {
          return goog.string.numberAwareCompare_(e, t, /\d+|\.\d+|\D+/g);
        }),
        (goog.string.numerateCompare = goog.string.floatAwareCompare),
        (goog.string.urlEncode = function (e) {
          return encodeURIComponent(String(e));
        }),
        (goog.string.urlDecode = function (e) {
          return decodeURIComponent(e.replace(/\+/g, " "));
        }),
        (goog.string.newLineToBr = goog.string.internal.newLineToBr),
        (goog.string.htmlEscape = function (e, t) {
          return (
            (e = goog.string.internal.htmlEscape(e, t)),
            goog.string.DETECT_DOUBLE_ESCAPING &&
              (e = e.replace(goog.string.E_RE_, "&#101;")),
            e
          );
        }),
        (goog.string.E_RE_ = /e/g),
        (goog.string.unescapeEntities = function (e) {
          return goog.string.contains(e, "&")
            ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING &&
              "document" in goog.global
              ? goog.string.unescapeEntitiesUsingDom_(e)
              : goog.string.unescapePureXmlEntities_(e)
            : e;
        }),
        (goog.string.unescapeEntitiesWithDocument = function (e, t) {
          return goog.string.contains(e, "&")
            ? goog.string.unescapeEntitiesUsingDom_(e, t)
            : e;
        }),
        (goog.string.unescapeEntitiesUsingDom_ = function (e, t) {
          var r = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' },
            n = t
              ? t.createElement("div")
              : goog.global.document.createElement("div");
          return e.replace(goog.string.HTML_ENTITY_PATTERN_, function (e, t) {
            var o = r[e];
            return (
              o ||
              ("#" == t.charAt(0) &&
                ((t = Number("0" + t.substr(1))),
                isNaN(t) || (o = String.fromCharCode(t))),
              o ||
                (goog.dom.safe.setInnerHtml(
                  n,
                  goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(
                    goog.string.Const.from("Single HTML entity."),
                    e + " ",
                  ),
                ),
                (o = n.firstChild.nodeValue.slice(0, -1))),
              (r[e] = o))
            );
          });
        }),
        (goog.string.unescapePureXmlEntities_ = function (e) {
          return e.replace(/&([^;]+);/g, function (e, t) {
            switch (t) {
              case "amp":
                return "&";
              case "lt":
                return "<";
              case "gt":
                return ">";
              case "quot":
                return '"';
              default:
                return "#" != t.charAt(0) ||
                  ((t = Number("0" + t.substr(1))), isNaN(t))
                  ? e
                  : String.fromCharCode(t);
            }
          });
        }),
        (goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g),
        (goog.string.whitespaceEscape = function (e, t) {
          return goog.string.newLineToBr(e.replace(/  /g, " &#160;"), t);
        }),
        (goog.string.preserveSpaces = function (e) {
          return e.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
        }),
        (goog.string.stripQuotes = function (e, t) {
          for (var r = t.length, n = 0; n < r; n++) {
            var o = 1 == r ? t : t.charAt(n);
            if (e.charAt(0) == o && e.charAt(e.length - 1) == o)
              return e.substring(1, e.length - 1);
          }
          return e;
        }),
        (goog.string.truncate = function (e, t, r) {
          return (
            r && (e = goog.string.unescapeEntities(e)),
            e.length > t && (e = e.substring(0, t - 3) + "..."),
            r && (e = goog.string.htmlEscape(e)),
            e
          );
        }),
        (goog.string.truncateMiddle = function (e, t, r, n) {
          if ((r && (e = goog.string.unescapeEntities(e)), n && e.length > t)) {
            n > t && (n = t);
            var o = e.length - n;
            e = e.substring(0, t - n) + "..." + e.substring(o);
          } else
            e.length > t &&
              ((n = Math.floor(t / 2)),
              (o = e.length - n),
              (e = e.substring(0, n + (t % 2)) + "..." + e.substring(o)));
          return r && (e = goog.string.htmlEscape(e)), e;
        }),
        (goog.string.specialEscapeChars_ = {
          "\0": "\\0",
          "\b": "\\b",
          "\f": "\\f",
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t",
          "\v": "\\x0B",
          '"': '\\"',
          "\\": "\\\\",
          "<": "\\u003C",
        }),
        (goog.string.jsEscapeCache_ = { "'": "\\'" }),
        (goog.string.quote = function (e) {
          e = String(e);
          for (var t = ['"'], r = 0; r < e.length; r++) {
            var n = e.charAt(r),
              o = n.charCodeAt(0);
            t[r + 1] =
              goog.string.specialEscapeChars_[n] ||
              (31 < o && 127 > o ? n : goog.string.escapeChar(n));
          }
          return t.push('"'), t.join("");
        }),
        (goog.string.escapeString = function (e) {
          for (var t = [], r = 0; r < e.length; r++)
            t[r] = goog.string.escapeChar(e.charAt(r));
          return t.join("");
        }),
        (goog.string.escapeChar = function (e) {
          if (e in goog.string.jsEscapeCache_)
            return goog.string.jsEscapeCache_[e];
          if (e in goog.string.specialEscapeChars_)
            return (goog.string.jsEscapeCache_[e] =
              goog.string.specialEscapeChars_[e]);
          var t = e.charCodeAt(0);
          if (31 < t && 127 > t) var r = e;
          else
            256 > t
              ? ((r = "\\x"), (16 > t || 256 < t) && (r += "0"))
              : ((r = "\\u"), 4096 > t && (r += "0")),
              (r += t.toString(16).toUpperCase());
          return (goog.string.jsEscapeCache_[e] = r);
        }),
        (goog.string.contains = goog.string.internal.contains),
        (goog.string.caseInsensitiveContains =
          goog.string.internal.caseInsensitiveContains),
        (goog.string.countOf = function (e, t) {
          return e && t ? e.split(t).length - 1 : 0;
        }),
        (goog.string.removeAt = function (e, t, r) {
          var n = e;
          return (
            0 <= t &&
              t < e.length &&
              0 < r &&
              (n = e.substr(0, t) + e.substr(t + r, e.length - t - r)),
            n
          );
        }),
        (goog.string.remove = function (e, t) {
          return e.replace(t, "");
        }),
        (goog.string.removeAll = function (e, t) {
          return (
            (t = new RegExp(goog.string.regExpEscape(t), "g")), e.replace(t, "")
          );
        }),
        (goog.string.replaceAll = function (e, t, r) {
          return (
            (t = new RegExp(goog.string.regExpEscape(t), "g")),
            e.replace(t, r.replace(/\$/g, "$$$$"))
          );
        }),
        (goog.string.regExpEscape = function (e) {
          return String(e)
            .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
            .replace(/\x08/g, "\\x08");
        }),
        (goog.string.repeat = String.prototype.repeat
          ? function (e, t) {
              return e.repeat(t);
            }
          : function (e, t) {
              return Array(t + 1).join(e);
            }),
        (goog.string.padNumber = function (e, t, r) {
          return (
            -1 ==
              (r = (e = void 0 !== r ? e.toFixed(r) : String(e)).indexOf(
                ".",
              )) && (r = e.length),
            goog.string.repeat("0", Math.max(0, t - r)) + e
          );
        }),
        (goog.string.makeSafe = function (e) {
          return null == e ? "" : String(e);
        }),
        (goog.string.buildString = function (e) {
          return Array.prototype.join.call(arguments, "");
        }),
        (goog.string.getRandomString = function () {
          return (
            Math.floor(2147483648 * Math.random()).toString(36) +
            Math.abs(
              Math.floor(2147483648 * Math.random()) ^ goog.now(),
            ).toString(36)
          );
        }),
        (goog.string.compareVersions = goog.string.internal.compareVersions),
        (goog.string.hashCode = function (e) {
          for (var t = 0, r = 0; r < e.length; ++r)
            t = (31 * t + e.charCodeAt(r)) >>> 0;
          return t;
        }),
        (goog.string.uniqueStringCounter_ = (2147483648 * Math.random()) | 0),
        (goog.string.createUniqueString = function () {
          return "goog_" + goog.string.uniqueStringCounter_++;
        }),
        (goog.string.toNumber = function (e) {
          var t = Number(e);
          return 0 == t && goog.string.isEmptyOrWhitespace(e) ? NaN : t;
        }),
        (goog.string.isLowerCamelCase = function (e) {
          return /^[a-z]+([A-Z][a-z]*)*$/.test(e);
        }),
        (goog.string.isUpperCamelCase = function (e) {
          return /^([A-Z][a-z]*)+$/.test(e);
        }),
        (goog.string.toCamelCase = function (e) {
          return String(e).replace(/\-([a-z])/g, function (e, t) {
            return t.toUpperCase();
          });
        }),
        (goog.string.toSelectorCase = function (e) {
          return String(e)
            .replace(/([A-Z])/g, "-$1")
            .toLowerCase();
        }),
        (goog.string.toTitleCase = function (e, t) {
          return (
            (t = "string" == typeof t ? goog.string.regExpEscape(t) : "\\s"),
            e.replace(
              new RegExp("(^" + (t ? "|[" + t + "]+" : "") + ")([a-z])", "g"),
              function (e, t, r) {
                return t + r.toUpperCase();
              },
            )
          );
        }),
        (goog.string.capitalize = function (e) {
          return (
            String(e.charAt(0)).toUpperCase() +
            String(e.substr(1)).toLowerCase()
          );
        }),
        (goog.string.parseInt = function (e) {
          return (
            isFinite(e) && (e = String(e)),
            "string" == typeof e
              ? /^\s*-?0x/i.test(e)
                ? parseInt(e, 16)
                : parseInt(e, 10)
              : NaN
          );
        }),
        (goog.string.splitLimit = function (e, t, r) {
          e = e.split(t);
          for (var n = []; 0 < r && e.length; ) n.push(e.shift()), r--;
          return e.length && n.push(e.join(t)), n;
        }),
        (goog.string.lastComponent = function (e, t) {
          if (!t) return e;
          "string" == typeof t && (t = [t]);
          for (var r = -1, n = 0; n < t.length; n++)
            if ("" != t[n]) {
              var o = e.lastIndexOf(t[n]);
              o > r && (r = o);
            }
          return -1 == r ? e : e.slice(r + 1);
        }),
        (goog.string.editDistance = function (e, t) {
          var r = [],
            n = [];
          if (e == t) return 0;
          if (!e.length || !t.length) return Math.max(e.length, t.length);
          for (var o = 0; o < t.length + 1; o++) r[o] = o;
          for (o = 0; o < e.length; o++) {
            n[0] = o + 1;
            for (var i = 0; i < t.length; i++)
              n[i + 1] = Math.min(
                n[i] + 1,
                r[i + 1] + 1,
                r[i] + Number(e[o] != t[i]),
              );
            for (i = 0; i < r.length; i++) r[i] = n[i];
          }
          return n[t.length];
        }),
        (goog.labs.userAgent.engine = {}),
        (goog.labs.userAgent.engine.isPresto = function () {
          return goog.labs.userAgent.util.matchUserAgent("Presto");
        }),
        (goog.labs.userAgent.engine.isTrident = function () {
          return (
            goog.labs.userAgent.util.matchUserAgent("Trident") ||
            goog.labs.userAgent.util.matchUserAgent("MSIE")
          );
        }),
        (goog.labs.userAgent.engine.isEdge = function () {
          return goog.labs.userAgent.util.matchUserAgent("Edge");
        }),
        (goog.labs.userAgent.engine.isWebKit = function () {
          return (
            goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") &&
            !goog.labs.userAgent.engine.isEdge()
          );
        }),
        (goog.labs.userAgent.engine.isGecko = function () {
          return (
            goog.labs.userAgent.util.matchUserAgent("Gecko") &&
            !goog.labs.userAgent.engine.isWebKit() &&
            !goog.labs.userAgent.engine.isTrident() &&
            !goog.labs.userAgent.engine.isEdge()
          );
        }),
        (goog.labs.userAgent.engine.getVersion = function () {
          var e = goog.labs.userAgent.util.getUserAgent();
          if (e) {
            e = goog.labs.userAgent.util.extractVersionTuples(e);
            var t,
              r = goog.labs.userAgent.engine.getEngineTuple_(e);
            if (r)
              return "Gecko" == r[0]
                ? goog.labs.userAgent.engine.getVersionForKey_(e, "Firefox")
                : r[1];
            if ((e = e[0]) && (t = e[2]) && (t = /Trident\/([^\s;]+)/.exec(t)))
              return t[1];
          }
          return "";
        }),
        (goog.labs.userAgent.engine.getEngineTuple_ = function (e) {
          if (!goog.labs.userAgent.engine.isEdge()) return e[1];
          for (var t = 0; t < e.length; t++) {
            var r = e[t];
            if ("Edge" == r[0]) return r;
          }
        }),
        (goog.labs.userAgent.engine.isVersionOrHigher = function (e) {
          return (
            0 <=
            goog.string.compareVersions(
              goog.labs.userAgent.engine.getVersion(),
              e,
            )
          );
        }),
        (goog.labs.userAgent.engine.getVersionForKey_ = function (e, t) {
          return (
            ((e = goog.array.find(e, function (e) {
              return t == e[0];
            })) &&
              e[1]) ||
            ""
          );
        }),
        (goog.labs.userAgent.platform = {}),
        (goog.labs.userAgent.platform.isAndroid = function () {
          return goog.labs.userAgent.util.matchUserAgent("Android");
        }),
        (goog.labs.userAgent.platform.isIpod = function () {
          return goog.labs.userAgent.util.matchUserAgent("iPod");
        }),
        (goog.labs.userAgent.platform.isIphone = function () {
          return (
            goog.labs.userAgent.util.matchUserAgent("iPhone") &&
            !goog.labs.userAgent.util.matchUserAgent("iPod") &&
            !goog.labs.userAgent.util.matchUserAgent("iPad")
          );
        }),
        (goog.labs.userAgent.platform.isIpad = function () {
          return goog.labs.userAgent.util.matchUserAgent("iPad");
        }),
        (goog.labs.userAgent.platform.isIos = function () {
          return (
            goog.labs.userAgent.platform.isIphone() ||
            goog.labs.userAgent.platform.isIpad() ||
            goog.labs.userAgent.platform.isIpod()
          );
        }),
        (goog.labs.userAgent.platform.isMacintosh = function () {
          return goog.labs.userAgent.util.matchUserAgent("Macintosh");
        }),
        (goog.labs.userAgent.platform.isLinux = function () {
          return goog.labs.userAgent.util.matchUserAgent("Linux");
        }),
        (goog.labs.userAgent.platform.isWindows = function () {
          return goog.labs.userAgent.util.matchUserAgent("Windows");
        }),
        (goog.labs.userAgent.platform.isChromeOS = function () {
          return goog.labs.userAgent.util.matchUserAgent("CrOS");
        }),
        (goog.labs.userAgent.platform.isChromecast = function () {
          return goog.labs.userAgent.util.matchUserAgent("CrKey");
        }),
        (goog.labs.userAgent.platform.isKaiOS = function () {
          return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS");
        }),
        (goog.labs.userAgent.platform.getVersion = function () {
          var e = goog.labs.userAgent.util.getUserAgent(),
            t = "";
          return (
            goog.labs.userAgent.platform.isWindows()
              ? (t = (e = (t = /Windows (?:NT|Phone) ([0-9.]+)/).exec(e))
                  ? e[1]
                  : "0.0")
              : goog.labs.userAgent.platform.isIos()
                ? (t =
                    (e = (t = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/).exec(
                      e,
                    )) && e[1].replace(/_/g, "."))
                : goog.labs.userAgent.platform.isMacintosh()
                  ? (t = (e = (t = /Mac OS X ([0-9_.]+)/).exec(e))
                      ? e[1].replace(/_/g, ".")
                      : "10")
                  : goog.labs.userAgent.platform.isKaiOS()
                    ? (t = (e = (t = /(?:KaiOS)\/(\S+)/i).exec(e)) && e[1])
                    : goog.labs.userAgent.platform.isAndroid()
                      ? (t =
                          (e = (t = /Android\s+([^\);]+)(\)|;)/).exec(e)) &&
                          e[1])
                      : goog.labs.userAgent.platform.isChromeOS() &&
                        (t =
                          (e = (t =
                            /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/).exec(
                            e,
                          )) && e[1]),
            t || ""
          );
        }),
        (goog.labs.userAgent.platform.isVersionOrHigher = function (e) {
          return (
            0 <=
            goog.string.compareVersions(
              goog.labs.userAgent.platform.getVersion(),
              e,
            )
          );
        }),
        (goog.reflect = {}),
        (goog.reflect.object = function (e, t) {
          return t;
        }),
        (goog.reflect.objectProperty = function (e, t) {
          return e;
        }),
        (goog.reflect.sinkValue = function (e) {
          return goog.reflect.sinkValue[" "](e), e;
        }),
        (goog.reflect.sinkValue[" "] = goog.nullFunction),
        (goog.reflect.canAccessProperty = function (e, t) {
          try {
            return goog.reflect.sinkValue(e[t]), !0;
          } catch (e) {}
          return !1;
        }),
        (goog.reflect.cache = function (e, t, r, n) {
          return (
            (n = n ? n(t) : t),
            Object.prototype.hasOwnProperty.call(e, n) ? e[n] : (e[n] = r(t))
          );
        }),
        (goog.userAgent = {}),
        (goog.userAgent.ASSUME_IE = !1),
        (goog.userAgent.ASSUME_EDGE = !1),
        (goog.userAgent.ASSUME_GECKO = !1),
        (goog.userAgent.ASSUME_WEBKIT = !1),
        (goog.userAgent.ASSUME_MOBILE_WEBKIT = !1),
        (goog.userAgent.ASSUME_OPERA = !1),
        (goog.userAgent.ASSUME_ANY_VERSION = !1),
        (goog.userAgent.BROWSER_KNOWN_ =
          goog.userAgent.ASSUME_IE ||
          goog.userAgent.ASSUME_EDGE ||
          goog.userAgent.ASSUME_GECKO ||
          goog.userAgent.ASSUME_MOBILE_WEBKIT ||
          goog.userAgent.ASSUME_WEBKIT ||
          goog.userAgent.ASSUME_OPERA),
        (goog.userAgent.getUserAgentString = function () {
          return goog.labs.userAgent.util.getUserAgent();
        }),
        (goog.userAgent.getNavigatorTyped = function () {
          return goog.global.navigator || null;
        }),
        (goog.userAgent.getNavigator = function () {
          return goog.userAgent.getNavigatorTyped();
        }),
        (goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_
          ? goog.userAgent.ASSUME_OPERA
          : goog.labs.userAgent.browser.isOpera()),
        (goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_
          ? goog.userAgent.ASSUME_IE
          : goog.labs.userAgent.browser.isIE()),
        (goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_
          ? goog.userAgent.ASSUME_EDGE
          : goog.labs.userAgent.engine.isEdge()),
        (goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE),
        (goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_
          ? goog.userAgent.ASSUME_GECKO
          : goog.labs.userAgent.engine.isGecko()),
        (goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_
          ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT
          : goog.labs.userAgent.engine.isWebKit()),
        (goog.userAgent.isMobile_ = function () {
          return (
            goog.userAgent.WEBKIT &&
            goog.labs.userAgent.util.matchUserAgent("Mobile")
          );
        }),
        (goog.userAgent.MOBILE =
          goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_()),
        (goog.userAgent.SAFARI = goog.userAgent.WEBKIT),
        (goog.userAgent.determinePlatform_ = function () {
          var e = goog.userAgent.getNavigatorTyped();
          return (e && e.platform) || "";
        }),
        (goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_()),
        (goog.userAgent.ASSUME_MAC = !1),
        (goog.userAgent.ASSUME_WINDOWS = !1),
        (goog.userAgent.ASSUME_LINUX = !1),
        (goog.userAgent.ASSUME_X11 = !1),
        (goog.userAgent.ASSUME_ANDROID = !1),
        (goog.userAgent.ASSUME_IPHONE = !1),
        (goog.userAgent.ASSUME_IPAD = !1),
        (goog.userAgent.ASSUME_IPOD = !1),
        (goog.userAgent.ASSUME_KAIOS = !1),
        (goog.userAgent.PLATFORM_KNOWN_ =
          goog.userAgent.ASSUME_MAC ||
          goog.userAgent.ASSUME_WINDOWS ||
          goog.userAgent.ASSUME_LINUX ||
          goog.userAgent.ASSUME_X11 ||
          goog.userAgent.ASSUME_ANDROID ||
          goog.userAgent.ASSUME_IPHONE ||
          goog.userAgent.ASSUME_IPAD ||
          goog.userAgent.ASSUME_IPOD),
        (goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_MAC
          : goog.labs.userAgent.platform.isMacintosh());
      (goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_
        ? goog.userAgent.ASSUME_WINDOWS
        : goog.labs.userAgent.platform.isWindows()),
        (goog.userAgent.isLegacyLinux_ = function () {
          return (
            goog.labs.userAgent.platform.isLinux() ||
            goog.labs.userAgent.platform.isChromeOS()
          );
        }),
        (goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_LINUX
          : goog.userAgent.isLegacyLinux_()),
        (goog.userAgent.isX11_ = function () {
          var e = goog.userAgent.getNavigatorTyped();
          return !!e && goog.string.contains(e.appVersion || "", "X11");
        }),
        (goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_X11
          : goog.userAgent.isX11_()),
        (goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_ANDROID
          : goog.labs.userAgent.platform.isAndroid()),
        (goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_IPHONE
          : goog.labs.userAgent.platform.isIphone()),
        (goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_IPAD
          : goog.labs.userAgent.platform.isIpad()),
        (goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_IPOD
          : goog.labs.userAgent.platform.isIpod()),
        (goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_IPHONE ||
            goog.userAgent.ASSUME_IPAD ||
            goog.userAgent.ASSUME_IPOD
          : goog.labs.userAgent.platform.isIos()),
        (goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_KAIOS
          : goog.labs.userAgent.platform.isKaiOS()),
        (goog.userAgent.determineVersion_ = function () {
          var e = "",
            t = goog.userAgent.getVersionRegexResult_();
          return (
            t && (e = t ? t[1] : ""),
            goog.userAgent.IE &&
            null != (t = goog.userAgent.getDocumentMode_()) &&
            t > parseFloat(e)
              ? String(t)
              : e
          );
        }),
        (goog.userAgent.getVersionRegexResult_ = function () {
          var e = goog.userAgent.getUserAgentString();
          return goog.userAgent.GECKO
            ? /rv:([^\);]+)(\)|;)/.exec(e)
            : goog.userAgent.EDGE
              ? /Edge\/([\d\.]+)/.exec(e)
              : goog.userAgent.IE
                ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e)
                : goog.userAgent.WEBKIT
                  ? /WebKit\/(\S+)/.exec(e)
                  : goog.userAgent.OPERA
                    ? /(?:Version)[ \/]?(\S+)/.exec(e)
                    : void 0;
        }),
        (goog.userAgent.getDocumentMode_ = function () {
          var e = goog.global.document;
          return e ? e.documentMode : void 0;
        }),
        (goog.userAgent.VERSION = goog.userAgent.determineVersion_()),
        (goog.userAgent.compare = function (e, t) {
          return goog.string.compareVersions(e, t);
        }),
        (goog.userAgent.isVersionOrHigherCache_ = {}),
        (goog.userAgent.isVersionOrHigher = function (e) {
          return (
            goog.userAgent.ASSUME_ANY_VERSION ||
            goog.reflect.cache(
              goog.userAgent.isVersionOrHigherCache_,
              e,
              function () {
                return (
                  0 <= goog.string.compareVersions(goog.userAgent.VERSION, e)
                );
              },
            )
          );
        }),
        (goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher),
        (goog.userAgent.isDocumentModeOrHigher = function (e) {
          return Number(goog.userAgent.DOCUMENT_MODE) >= e;
        }),
        (goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher),
        (goog.userAgent.DOCUMENT_MODE = (function () {
          if (goog.global.document && goog.userAgent.IE) {
            var e = goog.userAgent.getDocumentMode_();
            return e || parseInt(goog.userAgent.VERSION, 10) || void 0;
          }
        })()),
        (goog.userAgent.product = {}),
        (goog.userAgent.product.ASSUME_FIREFOX = !1),
        (goog.userAgent.product.ASSUME_IPHONE = !1),
        (goog.userAgent.product.ASSUME_IPAD = !1),
        (goog.userAgent.product.ASSUME_ANDROID = !1),
        (goog.userAgent.product.ASSUME_CHROME = !1),
        (goog.userAgent.product.ASSUME_SAFARI = !1),
        (goog.userAgent.product.PRODUCT_KNOWN_ =
          goog.userAgent.ASSUME_IE ||
          goog.userAgent.ASSUME_EDGE ||
          goog.userAgent.ASSUME_OPERA ||
          goog.userAgent.product.ASSUME_FIREFOX ||
          goog.userAgent.product.ASSUME_IPHONE ||
          goog.userAgent.product.ASSUME_IPAD ||
          goog.userAgent.product.ASSUME_ANDROID ||
          goog.userAgent.product.ASSUME_CHROME ||
          goog.userAgent.product.ASSUME_SAFARI),
        (goog.userAgent.product.OPERA = goog.userAgent.OPERA),
        (goog.userAgent.product.IE = goog.userAgent.IE),
        (goog.userAgent.product.EDGE = goog.userAgent.EDGE),
        (goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_
          ? goog.userAgent.product.ASSUME_FIREFOX
          : goog.labs.userAgent.browser.isFirefox()),
        (goog.userAgent.product.isIphoneOrIpod_ = function () {
          return (
            goog.labs.userAgent.platform.isIphone() ||
            goog.labs.userAgent.platform.isIpod()
          );
        }),
        (goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_
          ? goog.userAgent.product.ASSUME_IPHONE
          : goog.userAgent.product.isIphoneOrIpod_()),
        (goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_
          ? goog.userAgent.product.ASSUME_IPAD
          : goog.labs.userAgent.platform.isIpad()),
        (goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_
          ? goog.userAgent.product.ASSUME_ANDROID
          : goog.labs.userAgent.browser.isAndroidBrowser()),
        (goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_
          ? goog.userAgent.product.ASSUME_CHROME
          : goog.labs.userAgent.browser.isChrome()),
        (goog.userAgent.product.isSafariDesktop_ = function () {
          return (
            goog.labs.userAgent.browser.isSafari() &&
            !goog.labs.userAgent.platform.isIos()
          );
        }),
        (goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_
          ? goog.userAgent.product.ASSUME_SAFARI
          : goog.userAgent.product.isSafariDesktop_()),
        (goog.crypt.base64 = {}),
        (goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"),
        (goog.crypt.base64.ENCODED_VALS =
          goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "+/="),
        (goog.crypt.base64.ENCODED_VALS_WEBSAFE =
          goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "-_."),
        (goog.crypt.base64.Alphabet = {
          DEFAULT: 0,
          NO_PADDING: 1,
          WEBSAFE: 2,
          WEBSAFE_DOT_PADDING: 3,
          WEBSAFE_NO_PADDING: 4,
        }),
        (goog.crypt.base64.paddingChars_ = "=."),
        (goog.crypt.base64.isPadding_ = function (e) {
          return goog.string.contains(goog.crypt.base64.paddingChars_, e);
        }),
        (goog.crypt.base64.byteToCharMaps_ = {}),
        (goog.crypt.base64.charToByteMap_ = null),
        (goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ =
          goog.userAgent.GECKO ||
          (goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI) ||
          goog.userAgent.OPERA),
        (goog.crypt.base64.HAS_NATIVE_ENCODE_ =
          goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ ||
          "function" == typeof goog.global.btoa),
        (goog.crypt.base64.HAS_NATIVE_DECODE_ =
          goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ ||
          (!goog.userAgent.product.SAFARI &&
            !goog.userAgent.IE &&
            "function" == typeof goog.global.atob)),
        (goog.crypt.base64.encodeByteArray = function (e, t) {
          goog.asserts.assert(
            goog.isArrayLike(e),
            "encodeByteArray takes an array as a parameter",
          ),
            void 0 === t && (t = goog.crypt.base64.Alphabet.DEFAULT),
            goog.crypt.base64.init_(),
            (t = goog.crypt.base64.byteToCharMaps_[t]);
          for (var r = [], n = 0; n < e.length; n += 3) {
            var o = e[n],
              i = n + 1 < e.length,
              a = i ? e[n + 1] : 0,
              s = n + 2 < e.length,
              l = s ? e[n + 2] : 0,
              u = o >> 2;
            (o = ((3 & o) << 4) | (a >> 4)),
              (a = ((15 & a) << 2) | (l >> 6)),
              (l &= 63),
              s || ((l = 64), i || (a = 64)),
              r.push(t[u], t[o], t[a] || "", t[l] || "");
          }
          return r.join("");
        }),
        (goog.crypt.base64.encodeString = function (e, t) {
          return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !t
            ? goog.global.btoa(e)
            : goog.crypt.base64.encodeByteArray(
                goog.crypt.stringToByteArray(e),
                t,
              );
        }),
        (goog.crypt.base64.decodeString = function (e, t) {
          if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !t)
            return goog.global.atob(e);
          var r = "";
          return (
            goog.crypt.base64.decodeStringInternal_(e, function (e) {
              r += String.fromCharCode(e);
            }),
            r
          );
        }),
        (goog.crypt.base64.decodeStringToByteArray = function (e, t) {
          var r = [];
          return (
            goog.crypt.base64.decodeStringInternal_(e, function (e) {
              r.push(e);
            }),
            r
          );
        }),
        (goog.crypt.base64.decodeStringToUint8Array = function (e) {
          goog.asserts.assert(
            !goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"),
            "Browser does not support typed arrays",
          );
          var t = e.length,
            r = (3 * t) / 4;
          r % 3
            ? (r = Math.floor(r))
            : goog.crypt.base64.isPadding_(e[t - 1]) &&
              (r = goog.crypt.base64.isPadding_(e[t - 2]) ? r - 2 : r - 1);
          var n = new Uint8Array(r),
            o = 0;
          return (
            goog.crypt.base64.decodeStringInternal_(e, function (e) {
              n[o++] = e;
            }),
            n.subarray(0, o)
          );
        }),
        (goog.crypt.base64.decodeStringInternal_ = function (e, t) {
          function r(t) {
            for (; n < e.length; ) {
              var r = e.charAt(n++),
                o = goog.crypt.base64.charToByteMap_[r];
              if (null != o) return o;
              if (!goog.string.isEmptyOrWhitespace(r))
                throw Error("Unknown base64 encoding at char: " + r);
            }
            return t;
          }
          goog.crypt.base64.init_();
          for (var n = 0; ; ) {
            var o = r(-1),
              i = r(0),
              a = r(64),
              s = r(64);
            if (64 === s && -1 === o) break;
            t((o << 2) | (i >> 4)),
              64 != a &&
                (t(((i << 4) & 240) | (a >> 2)),
                64 != s && t(((a << 6) & 192) | s));
          }
        }),
        (goog.crypt.base64.init_ = function () {
          if (!goog.crypt.base64.charToByteMap_) {
            goog.crypt.base64.charToByteMap_ = {};
            for (
              var e = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""),
                t = ["+/=", "+/", "-_=", "-_.", "-_"],
                r = 0;
              5 > r;
              r++
            ) {
              var n = e.concat(t[r].split(""));
              goog.crypt.base64.byteToCharMaps_[r] = n;
              for (var o = 0; o < n.length; o++) {
                var i = n[o],
                  a = goog.crypt.base64.charToByteMap_[i];
                void 0 === a
                  ? (goog.crypt.base64.charToByteMap_[i] = o)
                  : goog.asserts.assert(a === o);
              }
            }
          }
        }),
        (jspb.utils = {}),
        (jspb.utils.split64Low = 0),
        (jspb.utils.split64High = 0),
        (jspb.utils.splitUint64 = function (e) {
          var t = e >>> 0;
          (e = Math.floor((e - t) / jspb.BinaryConstants.TWO_TO_32) >>> 0),
            (jspb.utils.split64Low = t),
            (jspb.utils.split64High = e);
        }),
        (jspb.utils.splitInt64 = function (e) {
          var t = 0 > e,
            r = (e = Math.abs(e)) >>> 0;
          (e = Math.floor((e - r) / jspb.BinaryConstants.TWO_TO_32)),
            (e >>>= 0),
            t &&
              ((e = ~e >>> 0),
              4294967295 < (r = 1 + (~r >>> 0)) &&
                ((r = 0), 4294967295 < ++e && (e = 0))),
            (jspb.utils.split64Low = r),
            (jspb.utils.split64High = e);
        }),
        (jspb.utils.splitZigzag64 = function (e) {
          var t = 0 > e;
          (e = 2 * Math.abs(e)),
            jspb.utils.splitUint64(e),
            (e = jspb.utils.split64Low);
          var r = jspb.utils.split64High;
          t &&
            (0 == e
              ? 0 == r
                ? (r = e = 4294967295)
                : (r--, (e = 4294967295))
              : e--),
            (jspb.utils.split64Low = e),
            (jspb.utils.split64High = r);
        }),
        (jspb.utils.splitFloat32 = function (e) {
          var t = 0 > e ? 1 : 0;
          if (0 === (e = t ? -e : e))
            0 < 1 / e
              ? ((jspb.utils.split64High = 0), (jspb.utils.split64Low = 0))
              : ((jspb.utils.split64High = 0),
                (jspb.utils.split64Low = 2147483648));
          else if (isNaN(e))
            (jspb.utils.split64High = 0), (jspb.utils.split64Low = 2147483647);
          else if (e > jspb.BinaryConstants.FLOAT32_MAX)
            (jspb.utils.split64High = 0),
              (jspb.utils.split64Low = ((t << 31) | 2139095040) >>> 0);
          else if (e < jspb.BinaryConstants.FLOAT32_MIN)
            (e = Math.round(e / Math.pow(2, -149))),
              (jspb.utils.split64High = 0),
              (jspb.utils.split64Low = ((t << 31) | e) >>> 0);
          else {
            var r = Math.floor(Math.log(e) / Math.LN2);
            (e *= Math.pow(2, -r)),
              16777216 <=
                (e = Math.round(e * jspb.BinaryConstants.TWO_TO_23)) && ++r,
              (jspb.utils.split64High = 0),
              (jspb.utils.split64Low =
                ((t << 31) | ((r + 127) << 23) | (8388607 & e)) >>> 0);
          }
        }),
        (jspb.utils.splitFloat64 = function (e) {
          var t = 0 > e ? 1 : 0;
          if (0 === (e = t ? -e : e))
            (jspb.utils.split64High = 0 < 1 / e ? 0 : 2147483648),
              (jspb.utils.split64Low = 0);
          else if (isNaN(e))
            (jspb.utils.split64High = 2147483647),
              (jspb.utils.split64Low = 4294967295);
          else if (e > jspb.BinaryConstants.FLOAT64_MAX)
            (jspb.utils.split64High = ((t << 31) | 2146435072) >>> 0),
              (jspb.utils.split64Low = 0);
          else if (e < jspb.BinaryConstants.FLOAT64_MIN) {
            var r = e / Math.pow(2, -1074);
            (e = r / jspb.BinaryConstants.TWO_TO_32),
              (jspb.utils.split64High = ((t << 31) | e) >>> 0),
              (jspb.utils.split64Low = r >>> 0);
          } else {
            var n = 0;
            if (2 <= (r = e)) for (; 2 <= r && 1023 > n; ) n++, (r /= 2);
            else for (; 1 > r && -1022 < n; ) (r *= 2), n--;
            (e =
              ((r = e * Math.pow(2, -n)) * jspb.BinaryConstants.TWO_TO_20) &
              1048575),
              (r = (r * jspb.BinaryConstants.TWO_TO_52) >>> 0),
              (jspb.utils.split64High =
                ((t << 31) | ((n + 1023) << 20) | e) >>> 0),
              (jspb.utils.split64Low = r);
          }
        }),
        (jspb.utils.splitHash64 = function (e) {
          var t = e.charCodeAt(0),
            r = e.charCodeAt(1),
            n = e.charCodeAt(2),
            o = e.charCodeAt(3),
            i = e.charCodeAt(4),
            a = e.charCodeAt(5),
            s = e.charCodeAt(6);
          (e = e.charCodeAt(7)),
            (jspb.utils.split64Low =
              (t + (r << 8) + (n << 16) + (o << 24)) >>> 0),
            (jspb.utils.split64High =
              (i + (a << 8) + (s << 16) + (e << 24)) >>> 0);
        }),
        (jspb.utils.joinUint64 = function (e, t) {
          return t * jspb.BinaryConstants.TWO_TO_32 + (e >>> 0);
        }),
        (jspb.utils.joinInt64 = function (e, t) {
          var r = 2147483648 & t;
          return (
            r &&
              ((t = ~t >>> 0),
              0 == (e = (1 + ~e) >>> 0) && (t = (t + 1) >>> 0)),
            (e = jspb.utils.joinUint64(e, t)),
            r ? -e : e
          );
        }),
        (jspb.utils.toZigzag64 = function (e, t, r) {
          var n = t >> 31;
          return r((e << 1) ^ n, ((t << 1) | (e >>> 31)) ^ n);
        }),
        (jspb.utils.joinZigzag64 = function (e, t) {
          return jspb.utils.fromZigzag64(e, t, jspb.utils.joinInt64);
        }),
        (jspb.utils.fromZigzag64 = function (e, t, r) {
          var n = -(1 & e);
          return r(((e >>> 1) | (t << 31)) ^ n, (t >>> 1) ^ n);
        }),
        (jspb.utils.joinFloat32 = function (e, t) {
          t = 2 * (e >> 31) + 1;
          var r = (e >>> 23) & 255;
          return (
            (e &= 8388607),
            255 == r
              ? e
                ? NaN
                : (1 / 0) * t
              : 0 == r
                ? t * Math.pow(2, -149) * e
                : t * Math.pow(2, r - 150) * (e + Math.pow(2, 23))
          );
        }),
        (jspb.utils.joinFloat64 = function (e, t) {
          var r = 2 * (t >> 31) + 1,
            n = (t >>> 20) & 2047;
          return (
            (e = jspb.BinaryConstants.TWO_TO_32 * (1048575 & t) + e),
            2047 == n
              ? e
                ? NaN
                : (1 / 0) * r
              : 0 == n
                ? r * Math.pow(2, -1074) * e
                : r *
                  Math.pow(2, n - 1075) *
                  (e + jspb.BinaryConstants.TWO_TO_52)
          );
        }),
        (jspb.utils.joinHash64 = function (e, t) {
          return String.fromCharCode(
            (e >>> 0) & 255,
            (e >>> 8) & 255,
            (e >>> 16) & 255,
            (e >>> 24) & 255,
            (t >>> 0) & 255,
            (t >>> 8) & 255,
            (t >>> 16) & 255,
            (t >>> 24) & 255,
          );
        }),
        (jspb.utils.DIGITS = "0123456789abcdef".split("")),
        (jspb.utils.ZERO_CHAR_CODE_ = 48),
        (jspb.utils.A_CHAR_CODE_ = 97),
        (jspb.utils.joinUnsignedDecimalString = function (e, t) {
          function r(e, t) {
            return (
              (e = e ? String(e) : ""), t ? "0000000".slice(e.length) + e : e
            );
          }
          if (2097151 >= t) return "" + jspb.utils.joinUint64(e, t);
          var n = (((e >>> 24) | (t << 8)) >>> 0) & 16777215;
          return (
            (e =
              (16777215 & e) + 6777216 * n + 6710656 * (t = (t >> 16) & 65535)),
            (n += 8147497 * t),
            (t *= 2),
            1e7 <= e && ((n += Math.floor(e / 1e7)), (e %= 1e7)),
            1e7 <= n && ((t += Math.floor(n / 1e7)), (n %= 1e7)),
            r(t, 0) + r(n, t) + r(e, 1)
          );
        }),
        (jspb.utils.joinSignedDecimalString = function (e, t) {
          var r = 2147483648 & t;
          return (
            r && (t = (~t + (0 == (e = (1 + ~e) >>> 0) ? 1 : 0)) >>> 0),
            (e = jspb.utils.joinUnsignedDecimalString(e, t)),
            r ? "-" + e : e
          );
        }),
        (jspb.utils.hash64ToDecimalString = function (e, t) {
          jspb.utils.splitHash64(e), (e = jspb.utils.split64Low);
          var r = jspb.utils.split64High;
          return t
            ? jspb.utils.joinSignedDecimalString(e, r)
            : jspb.utils.joinUnsignedDecimalString(e, r);
        }),
        (jspb.utils.hash64ArrayToDecimalStrings = function (e, t) {
          for (var r = Array(e.length), n = 0; n < e.length; n++)
            r[n] = jspb.utils.hash64ToDecimalString(e[n], t);
          return r;
        }),
        (jspb.utils.decimalStringToHash64 = function (e) {
          function t(e, t) {
            for (var r = 0; 8 > r && (1 !== e || 0 < t); r++)
              (t = e * n[r] + t), (n[r] = 255 & t), (t >>>= 8);
          }
          jspb.asserts.assert(0 < e.length);
          var r = !1;
          "-" === e[0] && ((r = !0), (e = e.slice(1)));
          for (var n = [0, 0, 0, 0, 0, 0, 0, 0], o = 0; o < e.length; o++)
            t(10, e.charCodeAt(o) - jspb.utils.ZERO_CHAR_CODE_);
          return (
            r &&
              ((function () {
                for (var e = 0; 8 > e; e++) n[e] = 255 & ~n[e];
              })(),
              t(1, 1)),
            goog.crypt.byteArrayToString(n)
          );
        }),
        (jspb.utils.splitDecimalString = function (e) {
          jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e));
        }),
        (jspb.utils.toHexDigit_ = function (e) {
          return String.fromCharCode(
            10 > e
              ? jspb.utils.ZERO_CHAR_CODE_ + e
              : jspb.utils.A_CHAR_CODE_ - 10 + e,
          );
        }),
        (jspb.utils.fromHexCharCode_ = function (e) {
          return e >= jspb.utils.A_CHAR_CODE_
            ? e - jspb.utils.A_CHAR_CODE_ + 10
            : e - jspb.utils.ZERO_CHAR_CODE_;
        }),
        (jspb.utils.hash64ToHexString = function (e) {
          var t = Array(18);
          (t[0] = "0"), (t[1] = "x");
          for (var r = 0; 8 > r; r++) {
            var n = e.charCodeAt(7 - r);
            (t[2 * r + 2] = jspb.utils.toHexDigit_(n >> 4)),
              (t[2 * r + 3] = jspb.utils.toHexDigit_(15 & n));
          }
          return t.join("");
        }),
        (jspb.utils.hexStringToHash64 = function (e) {
          (e = e.toLowerCase()),
            jspb.asserts.assert(18 == e.length),
            jspb.asserts.assert("0" == e[0]),
            jspb.asserts.assert("x" == e[1]);
          for (var t = "", r = 0; 8 > r; r++) {
            var n = jspb.utils.fromHexCharCode_(e.charCodeAt(2 * r + 2)),
              o = jspb.utils.fromHexCharCode_(e.charCodeAt(2 * r + 3));
            t = String.fromCharCode(16 * n + o) + t;
          }
          return t;
        }),
        (jspb.utils.hash64ToNumber = function (e, t) {
          jspb.utils.splitHash64(e), (e = jspb.utils.split64Low);
          var r = jspb.utils.split64High;
          return t ? jspb.utils.joinInt64(e, r) : jspb.utils.joinUint64(e, r);
        }),
        (jspb.utils.numberToHash64 = function (e) {
          return (
            jspb.utils.splitInt64(e),
            jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High)
          );
        }),
        (jspb.utils.countVarints = function (e, t, r) {
          for (var n = 0, o = t; o < r; o++) n += e[o] >> 7;
          return r - t - n;
        }),
        (jspb.utils.countVarintFields = function (e, t, r, n) {
          var o = 0;
          if (128 > (n = 8 * n + jspb.BinaryConstants.WireType.VARINT))
            for (; t < r && e[t++] == n; )
              for (o++; ; ) {
                var i = e[t++];
                if (0 == (128 & i)) break;
              }
          else
            for (; t < r; ) {
              for (i = n; 128 < i; ) {
                if (e[t] != ((127 & i) | 128)) return o;
                t++, (i >>= 7);
              }
              if (e[t++] != i) break;
              for (o++; 0 != (128 & (i = e[t++])); );
            }
          return o;
        }),
        (jspb.utils.countFixedFields_ = function (e, t, r, n, o) {
          var i = 0;
          if (128 > n) for (; t < r && e[t++] == n; ) i++, (t += o);
          else
            for (; t < r; ) {
              for (var a = n; 128 < a; ) {
                if (e[t++] != ((127 & a) | 128)) return i;
                a >>= 7;
              }
              if (e[t++] != a) break;
              i++, (t += o);
            }
          return i;
        }),
        (jspb.utils.countFixed32Fields = function (e, t, r, n) {
          return jspb.utils.countFixedFields_(
            e,
            t,
            r,
            8 * n + jspb.BinaryConstants.WireType.FIXED32,
            4,
          );
        }),
        (jspb.utils.countFixed64Fields = function (e, t, r, n) {
          return jspb.utils.countFixedFields_(
            e,
            t,
            r,
            8 * n + jspb.BinaryConstants.WireType.FIXED64,
            8,
          );
        }),
        (jspb.utils.countDelimitedFields = function (e, t, r, n) {
          var o = 0;
          for (n = 8 * n + jspb.BinaryConstants.WireType.DELIMITED; t < r; ) {
            for (var i = n; 128 < i; ) {
              if (e[t++] != ((127 & i) | 128)) return o;
              i >>= 7;
            }
            if (e[t++] != i) break;
            o++;
            for (
              var a = 0, s = 1;
              (a += (127 & (i = e[t++])) * s), (s *= 128), 0 != (128 & i);
            );
            t += a;
          }
          return o;
        }),
        (jspb.utils.debugBytesToTextFormat = function (e) {
          var t = '"';
          if (e) {
            e = jspb.utils.byteSourceToUint8Array(e);
            for (var r = 0; r < e.length; r++)
              (t += "\\x"), 16 > e[r] && (t += "0"), (t += e[r].toString(16));
          }
          return t + '"';
        }),
        (jspb.utils.debugScalarToTextFormat = function (e) {
          return "string" == typeof e ? goog.string.quote(e) : e.toString();
        }),
        (jspb.utils.stringToByteArray = function (e) {
          for (var t = new Uint8Array(e.length), r = 0; r < e.length; r++) {
            var n = e.charCodeAt(r);
            if (255 < n)
              throw Error(
                "Conversion error: string contains codepoint outside of byte range",
              );
            t[r] = n;
          }
          return t;
        }),
        (jspb.utils.byteSourceToUint8Array = function (e) {
          return e.constructor === Uint8Array
            ? e
            : e.constructor === ArrayBuffer || e.constructor === Array
              ? new Uint8Array(e)
              : e.constructor === String
                ? goog.crypt.base64.decodeStringToUint8Array(e)
                : e instanceof Uint8Array
                  ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
                  : (jspb.asserts.fail("Type not convertible to Uint8Array."),
                    new Uint8Array(0));
        }),
        (jspb.BinaryDecoder = function (e, t, r) {
          (this.bytes_ = null),
            (this.cursor_ = this.end_ = this.start_ = 0),
            (this.error_ = !1),
            e && this.setBlock(e, t, r);
        }),
        (jspb.BinaryDecoder.instanceCache_ = []),
        (jspb.BinaryDecoder.alloc = function (e, t, r) {
          if (jspb.BinaryDecoder.instanceCache_.length) {
            var n = jspb.BinaryDecoder.instanceCache_.pop();
            return e && n.setBlock(e, t, r), n;
          }
          return new jspb.BinaryDecoder(e, t, r);
        }),
        (jspb.BinaryDecoder.prototype.free = function () {
          this.clear(),
            100 > jspb.BinaryDecoder.instanceCache_.length &&
              jspb.BinaryDecoder.instanceCache_.push(this);
        }),
        (jspb.BinaryDecoder.prototype.clone = function () {
          return jspb.BinaryDecoder.alloc(
            this.bytes_,
            this.start_,
            this.end_ - this.start_,
          );
        }),
        (jspb.BinaryDecoder.prototype.clear = function () {
          (this.bytes_ = null),
            (this.cursor_ = this.end_ = this.start_ = 0),
            (this.error_ = !1);
        }),
        (jspb.BinaryDecoder.prototype.getBuffer = function () {
          return this.bytes_;
        }),
        (jspb.BinaryDecoder.prototype.setBlock = function (e, t, r) {
          (this.bytes_ = jspb.utils.byteSourceToUint8Array(e)),
            (this.start_ = void 0 !== t ? t : 0),
            (this.end_ = void 0 !== r ? this.start_ + r : this.bytes_.length),
            (this.cursor_ = this.start_);
        }),
        (jspb.BinaryDecoder.prototype.getEnd = function () {
          return this.end_;
        }),
        (jspb.BinaryDecoder.prototype.setEnd = function (e) {
          this.end_ = e;
        }),
        (jspb.BinaryDecoder.prototype.reset = function () {
          this.cursor_ = this.start_;
        }),
        (jspb.BinaryDecoder.prototype.getCursor = function () {
          return this.cursor_;
        }),
        (jspb.BinaryDecoder.prototype.setCursor = function (e) {
          this.cursor_ = e;
        }),
        (jspb.BinaryDecoder.prototype.advance = function (e) {
          (this.cursor_ += e), jspb.asserts.assert(this.cursor_ <= this.end_);
        }),
        (jspb.BinaryDecoder.prototype.atEnd = function () {
          return this.cursor_ == this.end_;
        }),
        (jspb.BinaryDecoder.prototype.pastEnd = function () {
          return this.cursor_ > this.end_;
        }),
        (jspb.BinaryDecoder.prototype.getError = function () {
          return this.error_ || 0 > this.cursor_ || this.cursor_ > this.end_;
        }),
        (jspb.BinaryDecoder.prototype.readSplitVarint64 = function (e) {
          for (var t = 128, r = 0, n = 0, o = 0; 4 > o && 128 <= t; o++)
            r |= (127 & (t = this.bytes_[this.cursor_++])) << (7 * o);
          if (
            (128 <= t &&
              ((r |= (127 & (t = this.bytes_[this.cursor_++])) << 28),
              (n |= (127 & t) >> 4)),
            128 <= t)
          )
            for (o = 0; 5 > o && 128 <= t; o++)
              n |= (127 & (t = this.bytes_[this.cursor_++])) << (7 * o + 3);
          if (128 > t) return e(r >>> 0, n >>> 0);
          jspb.asserts.fail("Failed to read varint, encoding is invalid."),
            (this.error_ = !0);
        }),
        (jspb.BinaryDecoder.prototype.readSplitZigzagVarint64 = function (e) {
          return this.readSplitVarint64(function (t, r) {
            return jspb.utils.fromZigzag64(t, r, e);
          });
        }),
        (jspb.BinaryDecoder.prototype.readSplitFixed64 = function (e) {
          var t = this.bytes_,
            r = this.cursor_;
          this.cursor_ += 8;
          for (var n = 0, o = 0, i = r + 7; i >= r; i--)
            (n = (n << 8) | t[i]), (o = (o << 8) | t[i + 4]);
          return e(n, o);
        }),
        (jspb.BinaryDecoder.prototype.skipVarint = function () {
          for (; 128 & this.bytes_[this.cursor_]; ) this.cursor_++;
          this.cursor_++;
        }),
        (jspb.BinaryDecoder.prototype.unskipVarint = function (e) {
          for (; 128 < e; ) this.cursor_--, (e >>>= 7);
          this.cursor_--;
        }),
        (jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function () {
          var e = this.bytes_,
            t = e[this.cursor_ + 0],
            r = 127 & t;
          return 128 > t
            ? ((this.cursor_ += 1),
              jspb.asserts.assert(this.cursor_ <= this.end_),
              r)
            : ((r |= (127 & (t = e[this.cursor_ + 1])) << 7),
              128 > t
                ? ((this.cursor_ += 2),
                  jspb.asserts.assert(this.cursor_ <= this.end_),
                  r)
                : ((r |= (127 & (t = e[this.cursor_ + 2])) << 14),
                  128 > t
                    ? ((this.cursor_ += 3),
                      jspb.asserts.assert(this.cursor_ <= this.end_),
                      r)
                    : ((r |= (127 & (t = e[this.cursor_ + 3])) << 21),
                      128 > t
                        ? ((this.cursor_ += 4),
                          jspb.asserts.assert(this.cursor_ <= this.end_),
                          r)
                        : ((r |= (15 & (t = e[this.cursor_ + 4])) << 28),
                          128 > t
                            ? ((this.cursor_ += 5),
                              jspb.asserts.assert(this.cursor_ <= this.end_),
                              r >>> 0)
                            : ((this.cursor_ += 5),
                              128 <= e[this.cursor_++] &&
                                128 <= e[this.cursor_++] &&
                                128 <= e[this.cursor_++] &&
                                128 <= e[this.cursor_++] &&
                                128 <= e[this.cursor_++] &&
                                jspb.asserts.assert(!1),
                              jspb.asserts.assert(this.cursor_ <= this.end_),
                              r)))));
        }),
        (jspb.BinaryDecoder.prototype.readSignedVarint32 = function () {
          return ~~this.readUnsignedVarint32();
        }),
        (jspb.BinaryDecoder.prototype.readUnsignedVarint32String = function () {
          return this.readUnsignedVarint32().toString();
        }),
        (jspb.BinaryDecoder.prototype.readSignedVarint32String = function () {
          return this.readSignedVarint32().toString();
        }),
        (jspb.BinaryDecoder.prototype.readZigzagVarint32 = function () {
          var e = this.readUnsignedVarint32();
          return (e >>> 1) ^ -(1 & e);
        }),
        (jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function () {
          return this.readSplitVarint64(jspb.utils.joinUint64);
        }),
        (jspb.BinaryDecoder.prototype.readUnsignedVarint64String = function () {
          return this.readSplitVarint64(jspb.utils.joinUnsignedDecimalString);
        }),
        (jspb.BinaryDecoder.prototype.readSignedVarint64 = function () {
          return this.readSplitVarint64(jspb.utils.joinInt64);
        }),
        (jspb.BinaryDecoder.prototype.readSignedVarint64String = function () {
          return this.readSplitVarint64(jspb.utils.joinSignedDecimalString);
        }),
        (jspb.BinaryDecoder.prototype.readZigzagVarint64 = function () {
          return this.readSplitVarint64(jspb.utils.joinZigzag64);
        }),
        (jspb.BinaryDecoder.prototype.readZigzagVarintHash64 = function () {
          return this.readSplitZigzagVarint64(jspb.utils.joinHash64);
        }),
        (jspb.BinaryDecoder.prototype.readZigzagVarint64String = function () {
          return this.readSplitZigzagVarint64(
            jspb.utils.joinSignedDecimalString,
          );
        }),
        (jspb.BinaryDecoder.prototype.readUint8 = function () {
          var e = this.bytes_[this.cursor_ + 0];
          return (
            (this.cursor_ += 1),
            jspb.asserts.assert(this.cursor_ <= this.end_),
            e
          );
        }),
        (jspb.BinaryDecoder.prototype.readUint16 = function () {
          var e = this.bytes_[this.cursor_ + 0],
            t = this.bytes_[this.cursor_ + 1];
          return (
            (this.cursor_ += 2),
            jspb.asserts.assert(this.cursor_ <= this.end_),
            (e << 0) | (t << 8)
          );
        }),
        (jspb.BinaryDecoder.prototype.readUint32 = function () {
          var e = this.bytes_[this.cursor_ + 0],
            t = this.bytes_[this.cursor_ + 1],
            r = this.bytes_[this.cursor_ + 2],
            n = this.bytes_[this.cursor_ + 3];
          return (
            (this.cursor_ += 4),
            jspb.asserts.assert(this.cursor_ <= this.end_),
            ((e << 0) | (t << 8) | (r << 16) | (n << 24)) >>> 0
          );
        }),
        (jspb.BinaryDecoder.prototype.readUint64 = function () {
          var e = this.readUint32(),
            t = this.readUint32();
          return jspb.utils.joinUint64(e, t);
        }),
        (jspb.BinaryDecoder.prototype.readUint64String = function () {
          var e = this.readUint32(),
            t = this.readUint32();
          return jspb.utils.joinUnsignedDecimalString(e, t);
        }),
        (jspb.BinaryDecoder.prototype.readInt8 = function () {
          var e = this.bytes_[this.cursor_ + 0];
          return (
            (this.cursor_ += 1),
            jspb.asserts.assert(this.cursor_ <= this.end_),
            (e << 24) >> 24
          );
        }),
        (jspb.BinaryDecoder.prototype.readInt16 = function () {
          var e = this.bytes_[this.cursor_ + 0],
            t = this.bytes_[this.cursor_ + 1];
          return (
            (this.cursor_ += 2),
            jspb.asserts.assert(this.cursor_ <= this.end_),
            (((e << 0) | (t << 8)) << 16) >> 16
          );
        }),
        (jspb.BinaryDecoder.prototype.readInt32 = function () {
          var e = this.bytes_[this.cursor_ + 0],
            t = this.bytes_[this.cursor_ + 1],
            r = this.bytes_[this.cursor_ + 2],
            n = this.bytes_[this.cursor_ + 3];
          return (
            (this.cursor_ += 4),
            jspb.asserts.assert(this.cursor_ <= this.end_),
            (e << 0) | (t << 8) | (r << 16) | (n << 24)
          );
        }),
        (jspb.BinaryDecoder.prototype.readInt64 = function () {
          var e = this.readUint32(),
            t = this.readUint32();
          return jspb.utils.joinInt64(e, t);
        }),
        (jspb.BinaryDecoder.prototype.readInt64String = function () {
          var e = this.readUint32(),
            t = this.readUint32();
          return jspb.utils.joinSignedDecimalString(e, t);
        }),
        (jspb.BinaryDecoder.prototype.readFloat = function () {
          var e = this.readUint32();
          return jspb.utils.joinFloat32(e, 0);
        }),
        (jspb.BinaryDecoder.prototype.readDouble = function () {
          var e = this.readUint32(),
            t = this.readUint32();
          return jspb.utils.joinFloat64(e, t);
        }),
        (jspb.BinaryDecoder.prototype.readBool = function () {
          return !!this.bytes_[this.cursor_++];
        }),
        (jspb.BinaryDecoder.prototype.readEnum = function () {
          return this.readSignedVarint32();
        }),
        (jspb.BinaryDecoder.prototype.readString = function (e) {
          for (
            var t = this.bytes_, r = this.cursor_, n = r + e, o = [], i = "";
            r < n;
          ) {
            var a = t[r++];
            if (a < 128) o.push(a);
            else {
              if (a < 192) continue;
              if (a < 224) {
                if (n - r < 1) break;
                var s = t[r++];
                o.push(((31 & a) << 6) | (63 & s));
              } else if (a < 240) {
                if (n - r < 2) break;
                s = t[r++];
                var l = t[r++];
                o.push(((15 & a) << 12) | ((63 & s) << 6) | (63 & l));
              } else if (a < 248) {
                if (n - r < 3) break;
                var u =
                    ((7 & a) << 18) |
                    ((63 & (s = t[r++])) << 12) |
                    ((63 & (l = t[r++])) << 6) |
                    (63 & t[r++]),
                  g = 56320 + (1023 & (u -= 65536)),
                  c = 55296 + ((u >> 10) & 1023);
                o.push(c, g);
              }
            }
            o.length >= 8192 &&
              ((i += String.fromCharCode.apply(null, o)), (o.length = 0));
          }
          return (i += goog.crypt.byteArrayToString(o)), (this.cursor_ = n), i;
        }),
        (jspb.BinaryDecoder.prototype.readStringWithLength = function () {
          var e = this.readUnsignedVarint32();
          return this.readString(e);
        }),
        (jspb.BinaryDecoder.prototype.readBytes = function (e) {
          if (0 > e || this.cursor_ + e > this.bytes_.length)
            return (
              (this.error_ = !0),
              jspb.asserts.fail("Invalid byte length!"),
              new Uint8Array(0)
            );
          var t = this.bytes_.subarray(this.cursor_, this.cursor_ + e);
          return (
            (this.cursor_ += e),
            jspb.asserts.assert(this.cursor_ <= this.end_),
            t
          );
        }),
        (jspb.BinaryDecoder.prototype.readVarintHash64 = function () {
          return this.readSplitVarint64(jspb.utils.joinHash64);
        }),
        (jspb.BinaryDecoder.prototype.readFixedHash64 = function () {
          var e = this.bytes_,
            t = this.cursor_,
            r = e[t + 0],
            n = e[t + 1],
            o = e[t + 2],
            i = e[t + 3],
            a = e[t + 4],
            s = e[t + 5],
            l = e[t + 6];
          return (
            (e = e[t + 7]),
            (this.cursor_ += 8),
            String.fromCharCode(r, n, o, i, a, s, l, e)
          );
        }),
        (jspb.BinaryReader = function (e, t, r) {
          (this.decoder_ = jspb.BinaryDecoder.alloc(e, t, r)),
            (this.fieldCursor_ = this.decoder_.getCursor()),
            (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
            (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID),
            (this.error_ = !1),
            (this.readCallbacks_ = null);
        }),
        (jspb.BinaryReader.instanceCache_ = []),
        (jspb.BinaryReader.alloc = function (e, t, r) {
          if (jspb.BinaryReader.instanceCache_.length) {
            var n = jspb.BinaryReader.instanceCache_.pop();
            return e && n.decoder_.setBlock(e, t, r), n;
          }
          return new jspb.BinaryReader(e, t, r);
        }),
        (jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc),
        (jspb.BinaryReader.prototype.free = function () {
          this.decoder_.clear(),
            (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
            (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID),
            (this.error_ = !1),
            (this.readCallbacks_ = null),
            100 > jspb.BinaryReader.instanceCache_.length &&
              jspb.BinaryReader.instanceCache_.push(this);
        }),
        (jspb.BinaryReader.prototype.getFieldCursor = function () {
          return this.fieldCursor_;
        }),
        (jspb.BinaryReader.prototype.getCursor = function () {
          return this.decoder_.getCursor();
        }),
        (jspb.BinaryReader.prototype.getBuffer = function () {
          return this.decoder_.getBuffer();
        }),
        (jspb.BinaryReader.prototype.getFieldNumber = function () {
          return this.nextField_;
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "getFieldNumber",
          jspb.BinaryReader.prototype.getFieldNumber,
        ),
        (jspb.BinaryReader.prototype.getWireType = function () {
          return this.nextWireType_;
        }),
        (jspb.BinaryReader.prototype.isDelimited = function () {
          return this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED;
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "isDelimited",
          jspb.BinaryReader.prototype.isDelimited,
        ),
        (jspb.BinaryReader.prototype.isEndGroup = function () {
          return this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP;
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "isEndGroup",
          jspb.BinaryReader.prototype.isEndGroup,
        ),
        (jspb.BinaryReader.prototype.getError = function () {
          return this.error_ || this.decoder_.getError();
        }),
        (jspb.BinaryReader.prototype.setBlock = function (e, t, r) {
          this.decoder_.setBlock(e, t, r),
            (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
            (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID);
        }),
        (jspb.BinaryReader.prototype.reset = function () {
          this.decoder_.reset(),
            (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
            (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID);
        }),
        (jspb.BinaryReader.prototype.advance = function (e) {
          this.decoder_.advance(e);
        }),
        (jspb.BinaryReader.prototype.nextField = function () {
          if (this.decoder_.atEnd()) return !1;
          if (this.getError())
            return jspb.asserts.fail("Decoder hit an error"), !1;
          this.fieldCursor_ = this.decoder_.getCursor();
          var e = this.decoder_.readUnsignedVarint32(),
            t = e >>> 3;
          return (e &= 7) != jspb.BinaryConstants.WireType.VARINT &&
            e != jspb.BinaryConstants.WireType.FIXED32 &&
            e != jspb.BinaryConstants.WireType.FIXED64 &&
            e != jspb.BinaryConstants.WireType.DELIMITED &&
            e != jspb.BinaryConstants.WireType.START_GROUP &&
            e != jspb.BinaryConstants.WireType.END_GROUP
            ? (jspb.asserts.fail(
                "Invalid wire type: %s (at position %s)",
                e,
                this.fieldCursor_,
              ),
              (this.error_ = !0),
              !1)
            : ((this.nextField_ = t), (this.nextWireType_ = e), !0);
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "nextField",
          jspb.BinaryReader.prototype.nextField,
        ),
        (jspb.BinaryReader.prototype.unskipHeader = function () {
          this.decoder_.unskipVarint(
            (this.nextField_ << 3) | this.nextWireType_,
          );
        }),
        (jspb.BinaryReader.prototype.skipMatchingFields = function () {
          var e = this.nextField_;
          for (
            this.unskipHeader();
            this.nextField() && this.getFieldNumber() == e;
          )
            this.skipField();
          this.decoder_.atEnd() || this.unskipHeader();
        }),
        (jspb.BinaryReader.prototype.skipVarintField = function () {
          this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT
            ? (jspb.asserts.fail("Invalid wire type for skipVarintField"),
              this.skipField())
            : this.decoder_.skipVarint();
        }),
        (jspb.BinaryReader.prototype.skipDelimitedField = function () {
          if (this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED)
            jspb.asserts.fail("Invalid wire type for skipDelimitedField"),
              this.skipField();
          else {
            var e = this.decoder_.readUnsignedVarint32();
            this.decoder_.advance(e);
          }
        }),
        (jspb.BinaryReader.prototype.skipFixed32Field = function () {
          this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32
            ? (jspb.asserts.fail("Invalid wire type for skipFixed32Field"),
              this.skipField())
            : this.decoder_.advance(4);
        }),
        (jspb.BinaryReader.prototype.skipFixed64Field = function () {
          this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64
            ? (jspb.asserts.fail("Invalid wire type for skipFixed64Field"),
              this.skipField())
            : this.decoder_.advance(8);
        }),
        (jspb.BinaryReader.prototype.skipGroup = function () {
          for (var e = this.nextField_; ; ) {
            if (!this.nextField()) {
              jspb.asserts.fail("Unmatched start-group tag: stream EOF"),
                (this.error_ = !0);
              break;
            }
            if (this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP) {
              this.nextField_ != e &&
                (jspb.asserts.fail("Unmatched end-group tag"),
                (this.error_ = !0));
              break;
            }
            this.skipField();
          }
        }),
        (jspb.BinaryReader.prototype.skipField = function () {
          switch (this.nextWireType_) {
            case jspb.BinaryConstants.WireType.VARINT:
              this.skipVarintField();
              break;
            case jspb.BinaryConstants.WireType.FIXED64:
              this.skipFixed64Field();
              break;
            case jspb.BinaryConstants.WireType.DELIMITED:
              this.skipDelimitedField();
              break;
            case jspb.BinaryConstants.WireType.FIXED32:
              this.skipFixed32Field();
              break;
            case jspb.BinaryConstants.WireType.START_GROUP:
              this.skipGroup();
              break;
            default:
              jspb.asserts.fail("Invalid wire encoding for field.");
          }
        }),
        (jspb.BinaryReader.prototype.registerReadCallback = function (e, t) {
          null === this.readCallbacks_ && (this.readCallbacks_ = {}),
            jspb.asserts.assert(!this.readCallbacks_[e]),
            (this.readCallbacks_[e] = t);
        }),
        (jspb.BinaryReader.prototype.runReadCallback = function (e) {
          return (
            jspb.asserts.assert(null !== this.readCallbacks_),
            (e = this.readCallbacks_[e]),
            jspb.asserts.assert(e),
            e(this)
          );
        }),
        (jspb.BinaryReader.prototype.readAny = function (e) {
          this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(e);
          var t = jspb.BinaryConstants.FieldType;
          switch (e) {
            case t.DOUBLE:
              return this.readDouble();
            case t.FLOAT:
              return this.readFloat();
            case t.INT64:
              return this.readInt64();
            case t.UINT64:
              return this.readUint64();
            case t.INT32:
              return this.readInt32();
            case t.FIXED64:
              return this.readFixed64();
            case t.FIXED32:
              return this.readFixed32();
            case t.BOOL:
              return this.readBool();
            case t.STRING:
              return this.readString();
            case t.GROUP:
              jspb.asserts.fail("Group field type not supported in readAny()");
            case t.MESSAGE:
              jspb.asserts.fail(
                "Message field type not supported in readAny()",
              );
            case t.BYTES:
              return this.readBytes();
            case t.UINT32:
              return this.readUint32();
            case t.ENUM:
              return this.readEnum();
            case t.SFIXED32:
              return this.readSfixed32();
            case t.SFIXED64:
              return this.readSfixed64();
            case t.SINT32:
              return this.readSint32();
            case t.SINT64:
              return this.readSint64();
            case t.FHASH64:
              return this.readFixedHash64();
            case t.VHASH64:
              return this.readVarintHash64();
            default:
              jspb.asserts.fail("Invalid field type in readAny()");
          }
          return 0;
        }),
        (jspb.BinaryReader.prototype.readMessage = function (e, t) {
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED,
          );
          var r = this.decoder_.getEnd(),
            n = this.decoder_.readUnsignedVarint32();
          (n = this.decoder_.getCursor() + n),
            this.decoder_.setEnd(n),
            t(e, this),
            this.decoder_.setCursor(n),
            this.decoder_.setEnd(r);
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readMessage",
          jspb.BinaryReader.prototype.readMessage,
        ),
        (jspb.BinaryReader.prototype.readGroup = function (e, t, r) {
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP,
          ),
            jspb.asserts.assert(this.nextField_ == e),
            r(t, this),
            this.error_ ||
              this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP ||
              (jspb.asserts.fail(
                "Group submessage did not end with an END_GROUP tag",
              ),
              (this.error_ = !0));
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readGroup",
          jspb.BinaryReader.prototype.readGroup,
        ),
        (jspb.BinaryReader.prototype.getFieldDecoder = function () {
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED,
          );
          var e = this.decoder_.readUnsignedVarint32(),
            t = this.decoder_.getCursor(),
            r = t + e;
          return (
            (e = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), t, e)),
            this.decoder_.setCursor(r),
            e
          );
        }),
        (jspb.BinaryReader.prototype.readInt32 = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
            ),
            this.decoder_.readSignedVarint32()
          );
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readInt32",
          jspb.BinaryReader.prototype.readInt32,
        ),
        (jspb.BinaryReader.prototype.readInt32String = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
            ),
            this.decoder_.readSignedVarint32String()
          );
        }),
        (jspb.BinaryReader.prototype.readInt64 = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
            ),
            this.decoder_.readSignedVarint64()
          );
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readInt64",
          jspb.BinaryReader.prototype.readInt64,
        ),
        (jspb.BinaryReader.prototype.readInt64String = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
            ),
            this.decoder_.readSignedVarint64String()
          );
        }),
        (jspb.BinaryReader.prototype.readUint32 = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
            ),
            this.decoder_.readUnsignedVarint32()
          );
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readUint32",
          jspb.BinaryReader.prototype.readUint32,
        ),
        (jspb.BinaryReader.prototype.readUint32String = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
            ),
            this.decoder_.readUnsignedVarint32String()
          );
        }),
        (jspb.BinaryReader.prototype.readUint64 = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
            ),
            this.decoder_.readUnsignedVarint64()
          );
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readUint64",
          jspb.BinaryReader.prototype.readUint64,
        ),
        (jspb.BinaryReader.prototype.readUint64String = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
            ),
            this.decoder_.readUnsignedVarint64String()
          );
        }),
        (jspb.BinaryReader.prototype.readSint32 = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
            ),
            this.decoder_.readZigzagVarint32()
          );
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readSint32",
          jspb.BinaryReader.prototype.readSint32,
        ),
        (jspb.BinaryReader.prototype.readSint64 = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
            ),
            this.decoder_.readZigzagVarint64()
          );
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readSint64",
          jspb.BinaryReader.prototype.readSint64,
        ),
        (jspb.BinaryReader.prototype.readSint64String = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
            ),
            this.decoder_.readZigzagVarint64String()
          );
        }),
        (jspb.BinaryReader.prototype.readFixed32 = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32,
            ),
            this.decoder_.readUint32()
          );
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readFixed32",
          jspb.BinaryReader.prototype.readFixed32,
        ),
        (jspb.BinaryReader.prototype.readFixed64 = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
            ),
            this.decoder_.readUint64()
          );
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readFixed64",
          jspb.BinaryReader.prototype.readFixed64,
        ),
        (jspb.BinaryReader.prototype.readFixed64String = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
            ),
            this.decoder_.readUint64String()
          );
        }),
        (jspb.BinaryReader.prototype.readSfixed32 = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32,
            ),
            this.decoder_.readInt32()
          );
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readSfixed32",
          jspb.BinaryReader.prototype.readSfixed32,
        ),
        (jspb.BinaryReader.prototype.readSfixed32String = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32,
            ),
            this.decoder_.readInt32().toString()
          );
        }),
        (jspb.BinaryReader.prototype.readSfixed64 = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
            ),
            this.decoder_.readInt64()
          );
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readSfixed64",
          jspb.BinaryReader.prototype.readSfixed64,
        ),
        (jspb.BinaryReader.prototype.readSfixed64String = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
            ),
            this.decoder_.readInt64String()
          );
        }),
        (jspb.BinaryReader.prototype.readFloat = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32,
            ),
            this.decoder_.readFloat()
          );
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readFloat",
          jspb.BinaryReader.prototype.readFloat,
        ),
        (jspb.BinaryReader.prototype.readDouble = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
            ),
            this.decoder_.readDouble()
          );
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readDouble",
          jspb.BinaryReader.prototype.readDouble,
        ),
        (jspb.BinaryReader.prototype.readBool = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
            ),
            !!this.decoder_.readUnsignedVarint32()
          );
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readBool",
          jspb.BinaryReader.prototype.readBool,
        ),
        (jspb.BinaryReader.prototype.readEnum = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
            ),
            this.decoder_.readSignedVarint64()
          );
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readEnum",
          jspb.BinaryReader.prototype.readEnum,
        ),
        (jspb.BinaryReader.prototype.readString = function () {
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED,
          );
          var e = this.decoder_.readUnsignedVarint32();
          return this.decoder_.readString(e);
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readString",
          jspb.BinaryReader.prototype.readString,
        ),
        (jspb.BinaryReader.prototype.readBytes = function () {
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED,
          );
          var e = this.decoder_.readUnsignedVarint32();
          return this.decoder_.readBytes(e);
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readBytes",
          jspb.BinaryReader.prototype.readBytes,
        ),
        (jspb.BinaryReader.prototype.readVarintHash64 = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
            ),
            this.decoder_.readVarintHash64()
          );
        }),
        (jspb.BinaryReader.prototype.readSintHash64 = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
            ),
            this.decoder_.readZigzagVarintHash64()
          );
        }),
        (jspb.BinaryReader.prototype.readSplitVarint64 = function (e) {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
            ),
            this.decoder_.readSplitVarint64(e)
          );
        }),
        (jspb.BinaryReader.prototype.readSplitZigzagVarint64 = function (e) {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
            ),
            this.decoder_.readSplitVarint64(function (t, r) {
              return jspb.utils.fromZigzag64(t, r, e);
            })
          );
        }),
        (jspb.BinaryReader.prototype.readFixedHash64 = function () {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
            ),
            this.decoder_.readFixedHash64()
          );
        }),
        (jspb.BinaryReader.prototype.readSplitFixed64 = function (e) {
          return (
            jspb.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
            ),
            this.decoder_.readSplitFixed64(e)
          );
        }),
        (jspb.BinaryReader.prototype.readPackedField_ = function (e) {
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED,
          );
          var t = this.decoder_.readUnsignedVarint32();
          t = this.decoder_.getCursor() + t;
          for (var r = []; this.decoder_.getCursor() < t; )
            r.push(e.call(this.decoder_));
          return r;
        }),
        (jspb.BinaryReader.prototype.readPackedInt32 = function () {
          return this.readPackedField_(this.decoder_.readSignedVarint32);
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readPackedInt32",
          jspb.BinaryReader.prototype.readPackedInt32,
        ),
        (jspb.BinaryReader.prototype.readPackedInt32String = function () {
          return this.readPackedField_(this.decoder_.readSignedVarint32String);
        }),
        (jspb.BinaryReader.prototype.readPackedInt64 = function () {
          return this.readPackedField_(this.decoder_.readSignedVarint64);
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readPackedInt64",
          jspb.BinaryReader.prototype.readPackedInt64,
        ),
        (jspb.BinaryReader.prototype.readPackedInt64String = function () {
          return this.readPackedField_(this.decoder_.readSignedVarint64String);
        }),
        (jspb.BinaryReader.prototype.readPackedUint32 = function () {
          return this.readPackedField_(this.decoder_.readUnsignedVarint32);
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readPackedUint32",
          jspb.BinaryReader.prototype.readPackedUint32,
        ),
        (jspb.BinaryReader.prototype.readPackedUint32String = function () {
          return this.readPackedField_(
            this.decoder_.readUnsignedVarint32String,
          );
        }),
        (jspb.BinaryReader.prototype.readPackedUint64 = function () {
          return this.readPackedField_(this.decoder_.readUnsignedVarint64);
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readPackedUint64",
          jspb.BinaryReader.prototype.readPackedUint64,
        ),
        (jspb.BinaryReader.prototype.readPackedUint64String = function () {
          return this.readPackedField_(
            this.decoder_.readUnsignedVarint64String,
          );
        }),
        (jspb.BinaryReader.prototype.readPackedSint32 = function () {
          return this.readPackedField_(this.decoder_.readZigzagVarint32);
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readPackedSint32",
          jspb.BinaryReader.prototype.readPackedSint32,
        ),
        (jspb.BinaryReader.prototype.readPackedSint64 = function () {
          return this.readPackedField_(this.decoder_.readZigzagVarint64);
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readPackedSint64",
          jspb.BinaryReader.prototype.readPackedSint64,
        ),
        (jspb.BinaryReader.prototype.readPackedSint64String = function () {
          return this.readPackedField_(this.decoder_.readZigzagVarint64String);
        }),
        (jspb.BinaryReader.prototype.readPackedFixed32 = function () {
          return this.readPackedField_(this.decoder_.readUint32);
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readPackedFixed32",
          jspb.BinaryReader.prototype.readPackedFixed32,
        ),
        (jspb.BinaryReader.prototype.readPackedFixed64 = function () {
          return this.readPackedField_(this.decoder_.readUint64);
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readPackedFixed64",
          jspb.BinaryReader.prototype.readPackedFixed64,
        ),
        (jspb.BinaryReader.prototype.readPackedFixed64String = function () {
          return this.readPackedField_(this.decoder_.readUint64String);
        }),
        (jspb.BinaryReader.prototype.readPackedSfixed32 = function () {
          return this.readPackedField_(this.decoder_.readInt32);
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readPackedSfixed32",
          jspb.BinaryReader.prototype.readPackedSfixed32,
        ),
        (jspb.BinaryReader.prototype.readPackedSfixed64 = function () {
          return this.readPackedField_(this.decoder_.readInt64);
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readPackedSfixed64",
          jspb.BinaryReader.prototype.readPackedSfixed64,
        ),
        (jspb.BinaryReader.prototype.readPackedSfixed64String = function () {
          return this.readPackedField_(this.decoder_.readInt64String);
        }),
        (jspb.BinaryReader.prototype.readPackedFloat = function () {
          return this.readPackedField_(this.decoder_.readFloat);
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readPackedFloat",
          jspb.BinaryReader.prototype.readPackedFloat,
        ),
        (jspb.BinaryReader.prototype.readPackedDouble = function () {
          return this.readPackedField_(this.decoder_.readDouble);
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readPackedDouble",
          jspb.BinaryReader.prototype.readPackedDouble,
        ),
        (jspb.BinaryReader.prototype.readPackedBool = function () {
          return this.readPackedField_(this.decoder_.readBool);
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readPackedBool",
          jspb.BinaryReader.prototype.readPackedBool,
        ),
        (jspb.BinaryReader.prototype.readPackedEnum = function () {
          return this.readPackedField_(this.decoder_.readEnum);
        }),
        goog.exportProperty(
          jspb.BinaryReader.prototype,
          "readPackedEnum",
          jspb.BinaryReader.prototype.readPackedEnum,
        ),
        (jspb.BinaryReader.prototype.readPackedVarintHash64 = function () {
          return this.readPackedField_(this.decoder_.readVarintHash64);
        }),
        (jspb.BinaryReader.prototype.readPackedFixedHash64 = function () {
          return this.readPackedField_(this.decoder_.readFixedHash64);
        }),
        (jspb.BinaryEncoder = function () {
          this.buffer_ = [];
        }),
        (jspb.BinaryEncoder.prototype.length = function () {
          return this.buffer_.length;
        }),
        (jspb.BinaryEncoder.prototype.end = function () {
          var e = this.buffer_;
          return (this.buffer_ = []), e;
        }),
        (jspb.BinaryEncoder.prototype.writeSplitVarint64 = function (e, t) {
          for (
            jspb.asserts.assert(e == Math.floor(e)),
              jspb.asserts.assert(t == Math.floor(t)),
              jspb.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32),
              jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32);
            0 < t || 127 < e;
          )
            this.buffer_.push((127 & e) | 128),
              (e = ((e >>> 7) | (t << 25)) >>> 0),
              (t >>>= 7);
          this.buffer_.push(e);
        }),
        (jspb.BinaryEncoder.prototype.writeSplitFixed64 = function (e, t) {
          jspb.asserts.assert(e == Math.floor(e)),
            jspb.asserts.assert(t == Math.floor(t)),
            jspb.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32),
            jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
            this.writeUint32(e),
            this.writeUint32(t);
        }),
        (jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function (e) {
          for (
            jspb.asserts.assert(e == Math.floor(e)),
              jspb.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32);
            127 < e;
          )
            this.buffer_.push((127 & e) | 128), (e >>>= 7);
          this.buffer_.push(e);
        }),
        (jspb.BinaryEncoder.prototype.writeSignedVarint32 = function (e) {
          if (
            (jspb.asserts.assert(e == Math.floor(e)),
            jspb.asserts.assert(
              e >= -jspb.BinaryConstants.TWO_TO_31 &&
                e < jspb.BinaryConstants.TWO_TO_31,
            ),
            0 <= e)
          )
            this.writeUnsignedVarint32(e);
          else {
            for (var t = 0; 9 > t; t++)
              this.buffer_.push((127 & e) | 128), (e >>= 7);
            this.buffer_.push(1);
          }
        }),
        (jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function (e) {
          jspb.asserts.assert(e == Math.floor(e)),
            jspb.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64),
            jspb.utils.splitInt64(e),
            this.writeSplitVarint64(
              jspb.utils.split64Low,
              jspb.utils.split64High,
            );
        }),
        (jspb.BinaryEncoder.prototype.writeSignedVarint64 = function (e) {
          jspb.asserts.assert(e == Math.floor(e)),
            jspb.asserts.assert(
              e >= -jspb.BinaryConstants.TWO_TO_63 &&
                e < jspb.BinaryConstants.TWO_TO_63,
            ),
            jspb.utils.splitInt64(e),
            this.writeSplitVarint64(
              jspb.utils.split64Low,
              jspb.utils.split64High,
            );
        }),
        (jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function (e) {
          jspb.asserts.assert(e == Math.floor(e)),
            jspb.asserts.assert(
              e >= -jspb.BinaryConstants.TWO_TO_31 &&
                e < jspb.BinaryConstants.TWO_TO_31,
            ),
            this.writeUnsignedVarint32(((e << 1) ^ (e >> 31)) >>> 0);
        }),
        (jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function (e) {
          jspb.asserts.assert(e == Math.floor(e)),
            jspb.asserts.assert(
              e >= -jspb.BinaryConstants.TWO_TO_63 &&
                e < jspb.BinaryConstants.TWO_TO_63,
            ),
            jspb.utils.splitZigzag64(e),
            this.writeSplitVarint64(
              jspb.utils.split64Low,
              jspb.utils.split64High,
            );
        }),
        (jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function (e) {
          this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(e));
        }),
        (jspb.BinaryEncoder.prototype.writeZigzagVarintHash64 = function (e) {
          var t = this;
          jspb.utils.splitHash64(e),
            jspb.utils.toZigzag64(
              jspb.utils.split64Low,
              jspb.utils.split64High,
              function (e, r) {
                t.writeSplitVarint64(e >>> 0, r >>> 0);
              },
            );
        }),
        (jspb.BinaryEncoder.prototype.writeUint8 = function (e) {
          jspb.asserts.assert(e == Math.floor(e)),
            jspb.asserts.assert(0 <= e && 256 > e),
            this.buffer_.push((e >>> 0) & 255);
        }),
        (jspb.BinaryEncoder.prototype.writeUint16 = function (e) {
          jspb.asserts.assert(e == Math.floor(e)),
            jspb.asserts.assert(0 <= e && 65536 > e),
            this.buffer_.push((e >>> 0) & 255),
            this.buffer_.push((e >>> 8) & 255);
        }),
        (jspb.BinaryEncoder.prototype.writeUint32 = function (e) {
          jspb.asserts.assert(e == Math.floor(e)),
            jspb.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32),
            this.buffer_.push((e >>> 0) & 255),
            this.buffer_.push((e >>> 8) & 255),
            this.buffer_.push((e >>> 16) & 255),
            this.buffer_.push((e >>> 24) & 255);
        }),
        (jspb.BinaryEncoder.prototype.writeUint64 = function (e) {
          jspb.asserts.assert(e == Math.floor(e)),
            jspb.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64),
            jspb.utils.splitUint64(e),
            this.writeUint32(jspb.utils.split64Low),
            this.writeUint32(jspb.utils.split64High);
        }),
        (jspb.BinaryEncoder.prototype.writeInt8 = function (e) {
          jspb.asserts.assert(e == Math.floor(e)),
            jspb.asserts.assert(-128 <= e && 128 > e),
            this.buffer_.push((e >>> 0) & 255);
        }),
        (jspb.BinaryEncoder.prototype.writeInt16 = function (e) {
          jspb.asserts.assert(e == Math.floor(e)),
            jspb.asserts.assert(-32768 <= e && 32768 > e),
            this.buffer_.push((e >>> 0) & 255),
            this.buffer_.push((e >>> 8) & 255);
        }),
        (jspb.BinaryEncoder.prototype.writeInt32 = function (e) {
          jspb.asserts.assert(e == Math.floor(e)),
            jspb.asserts.assert(
              e >= -jspb.BinaryConstants.TWO_TO_31 &&
                e < jspb.BinaryConstants.TWO_TO_31,
            ),
            this.buffer_.push((e >>> 0) & 255),
            this.buffer_.push((e >>> 8) & 255),
            this.buffer_.push((e >>> 16) & 255),
            this.buffer_.push((e >>> 24) & 255);
        }),
        (jspb.BinaryEncoder.prototype.writeInt64 = function (e) {
          jspb.asserts.assert(e == Math.floor(e)),
            jspb.asserts.assert(
              e >= -jspb.BinaryConstants.TWO_TO_63 &&
                e < jspb.BinaryConstants.TWO_TO_63,
            ),
            jspb.utils.splitInt64(e),
            this.writeSplitFixed64(
              jspb.utils.split64Low,
              jspb.utils.split64High,
            );
        }),
        (jspb.BinaryEncoder.prototype.writeInt64String = function (e) {
          jspb.asserts.assert(e == Math.floor(e)),
            jspb.asserts.assert(
              +e >= -jspb.BinaryConstants.TWO_TO_63 &&
                +e < jspb.BinaryConstants.TWO_TO_63,
            ),
            jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e)),
            this.writeSplitFixed64(
              jspb.utils.split64Low,
              jspb.utils.split64High,
            );
        }),
        (jspb.BinaryEncoder.prototype.writeFloat = function (e) {
          jspb.asserts.assert(
            1 / 0 === e ||
              -1 / 0 === e ||
              isNaN(e) ||
              (e >= -jspb.BinaryConstants.FLOAT32_MAX &&
                e <= jspb.BinaryConstants.FLOAT32_MAX),
          ),
            jspb.utils.splitFloat32(e),
            this.writeUint32(jspb.utils.split64Low);
        }),
        (jspb.BinaryEncoder.prototype.writeDouble = function (e) {
          jspb.asserts.assert(
            1 / 0 === e ||
              -1 / 0 === e ||
              isNaN(e) ||
              (e >= -jspb.BinaryConstants.FLOAT64_MAX &&
                e <= jspb.BinaryConstants.FLOAT64_MAX),
          ),
            jspb.utils.splitFloat64(e),
            this.writeUint32(jspb.utils.split64Low),
            this.writeUint32(jspb.utils.split64High);
        }),
        (jspb.BinaryEncoder.prototype.writeBool = function (e) {
          jspb.asserts.assert("boolean" == typeof e || "number" == typeof e),
            this.buffer_.push(e ? 1 : 0);
        }),
        (jspb.BinaryEncoder.prototype.writeEnum = function (e) {
          jspb.asserts.assert(e == Math.floor(e)),
            jspb.asserts.assert(
              e >= -jspb.BinaryConstants.TWO_TO_31 &&
                e < jspb.BinaryConstants.TWO_TO_31,
            ),
            this.writeSignedVarint32(e);
        }),
        (jspb.BinaryEncoder.prototype.writeBytes = function (e) {
          this.buffer_.push.apply(this.buffer_, e);
        }),
        (jspb.BinaryEncoder.prototype.writeVarintHash64 = function (e) {
          jspb.utils.splitHash64(e),
            this.writeSplitVarint64(
              jspb.utils.split64Low,
              jspb.utils.split64High,
            );
        }),
        (jspb.BinaryEncoder.prototype.writeFixedHash64 = function (e) {
          jspb.utils.splitHash64(e),
            this.writeUint32(jspb.utils.split64Low),
            this.writeUint32(jspb.utils.split64High);
        }),
        (jspb.BinaryEncoder.prototype.writeString = function (e) {
          var t = this.buffer_.length;
          jspb.asserts.assertString(e);
          for (var r = 0; r < e.length; r++) {
            var n = e.charCodeAt(r);
            if (128 > n) this.buffer_.push(n);
            else if (2048 > n)
              this.buffer_.push((n >> 6) | 192),
                this.buffer_.push((63 & n) | 128);
            else if (65536 > n)
              if (55296 <= n && 56319 >= n && r + 1 < e.length) {
                var o = e.charCodeAt(r + 1);
                56320 <= o &&
                  57343 >= o &&
                  ((n = 1024 * (n - 55296) + o - 56320 + 65536),
                  this.buffer_.push((n >> 18) | 240),
                  this.buffer_.push(((n >> 12) & 63) | 128),
                  this.buffer_.push(((n >> 6) & 63) | 128),
                  this.buffer_.push((63 & n) | 128),
                  r++);
              } else
                this.buffer_.push((n >> 12) | 224),
                  this.buffer_.push(((n >> 6) & 63) | 128),
                  this.buffer_.push((63 & n) | 128);
          }
          return this.buffer_.length - t;
        }),
        (jspb.arith = {}),
        (jspb.arith.UInt64 = function (e, t) {
          (this.lo = e), (this.hi = t);
        }),
        (jspb.arith.UInt64.prototype.cmp = function (e) {
          return this.hi < e.hi || (this.hi == e.hi && this.lo < e.lo)
            ? -1
            : this.hi == e.hi && this.lo == e.lo
              ? 0
              : 1;
        }),
        (jspb.arith.UInt64.prototype.rightShift = function () {
          return new jspb.arith.UInt64(
            ((this.lo >>> 1) | ((1 & this.hi) << 31)) >>> 0,
            (this.hi >>> 1) >>> 0,
          );
        }),
        (jspb.arith.UInt64.prototype.leftShift = function () {
          return new jspb.arith.UInt64(
            (this.lo << 1) >>> 0,
            ((this.hi << 1) | (this.lo >>> 31)) >>> 0,
          );
        }),
        (jspb.arith.UInt64.prototype.msb = function () {
          return !!(2147483648 & this.hi);
        }),
        (jspb.arith.UInt64.prototype.lsb = function () {
          return !!(1 & this.lo);
        }),
        (jspb.arith.UInt64.prototype.zero = function () {
          return 0 == this.lo && 0 == this.hi;
        }),
        (jspb.arith.UInt64.prototype.add = function (e) {
          return new jspb.arith.UInt64(
            (((this.lo + e.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi + e.hi) & 4294967295) >>> 0) +
              (4294967296 <= this.lo + e.lo ? 1 : 0)) >>>
              0,
          );
        }),
        (jspb.arith.UInt64.prototype.sub = function (e) {
          return new jspb.arith.UInt64(
            (((this.lo - e.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi - e.hi) & 4294967295) >>> 0) -
              (0 > this.lo - e.lo ? 1 : 0)) >>>
              0,
          );
        }),
        (jspb.arith.UInt64.mul32x32 = function (e, t) {
          var r = 65535 & e,
            n = 65535 & t,
            o = t >>> 16;
          for (
            t =
              r * n +
              65536 * ((r * o) & 65535) +
              65536 * (((e >>>= 16) * n) & 65535),
              r = e * o + ((r * o) >>> 16) + ((e * n) >>> 16);
            4294967296 <= t;
          )
            (t -= 4294967296), (r += 1);
          return new jspb.arith.UInt64(t >>> 0, r >>> 0);
        }),
        (jspb.arith.UInt64.prototype.mul = function (e) {
          var t = jspb.arith.UInt64.mul32x32(this.lo, e);
          return (
            ((e = jspb.arith.UInt64.mul32x32(this.hi, e)).hi = e.lo),
            (e.lo = 0),
            t.add(e)
          );
        }),
        (jspb.arith.UInt64.prototype.div = function (e) {
          if (0 == e) return [];
          var t = new jspb.arith.UInt64(0, 0),
            r = new jspb.arith.UInt64(this.lo, this.hi);
          e = new jspb.arith.UInt64(e, 0);
          for (var n = new jspb.arith.UInt64(1, 0); !e.msb(); )
            (e = e.leftShift()), (n = n.leftShift());
          for (; !n.zero(); )
            0 >= e.cmp(r) && ((t = t.add(n)), (r = r.sub(e))),
              (e = e.rightShift()),
              (n = n.rightShift());
          return [t, r];
        }),
        (jspb.arith.UInt64.prototype.toString = function () {
          for (var e = "", t = this; !t.zero(); ) {
            var r = (t = t.div(10))[0];
            (e = t[1].lo + e), (t = r);
          }
          return "" == e && (e = "0"), e;
        }),
        (jspb.arith.UInt64.fromString = function (e) {
          for (
            var t = new jspb.arith.UInt64(0, 0),
              r = new jspb.arith.UInt64(0, 0),
              n = 0;
            n < e.length;
            n++
          ) {
            if ("0" > e[n] || "9" < e[n]) return null;
            var o = parseInt(e[n], 10);
            (r.lo = o), (t = t.mul(10).add(r));
          }
          return t;
        }),
        (jspb.arith.UInt64.prototype.clone = function () {
          return new jspb.arith.UInt64(this.lo, this.hi);
        }),
        (jspb.arith.Int64 = function (e, t) {
          (this.lo = e), (this.hi = t);
        }),
        (jspb.arith.Int64.prototype.add = function (e) {
          return new jspb.arith.Int64(
            (((this.lo + e.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi + e.hi) & 4294967295) >>> 0) +
              (4294967296 <= this.lo + e.lo ? 1 : 0)) >>>
              0,
          );
        }),
        (jspb.arith.Int64.prototype.sub = function (e) {
          return new jspb.arith.Int64(
            (((this.lo - e.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi - e.hi) & 4294967295) >>> 0) -
              (0 > this.lo - e.lo ? 1 : 0)) >>>
              0,
          );
        }),
        (jspb.arith.Int64.prototype.clone = function () {
          return new jspb.arith.Int64(this.lo, this.hi);
        }),
        (jspb.arith.Int64.prototype.toString = function () {
          var e = 0 != (2147483648 & this.hi),
            t = new jspb.arith.UInt64(this.lo, this.hi);
          return (
            e && (t = new jspb.arith.UInt64(0, 0).sub(t)),
            (e ? "-" : "") + t.toString()
          );
        }),
        (jspb.arith.Int64.fromString = function (e) {
          var t = 0 < e.length && "-" == e[0];
          return (
            t && (e = e.substring(1)),
            null === (e = jspb.arith.UInt64.fromString(e))
              ? null
              : (t && (e = new jspb.arith.UInt64(0, 0).sub(e)),
                new jspb.arith.Int64(e.lo, e.hi))
          );
        }),
        (jspb.BinaryWriter = function () {
          (this.blocks_ = []),
            (this.totalLength_ = 0),
            (this.encoder_ = new jspb.BinaryEncoder()),
            (this.bookmarks_ = []);
        }),
        (jspb.BinaryWriter.prototype.appendUint8Array_ = function (e) {
          var t = this.encoder_.end();
          this.blocks_.push(t),
            this.blocks_.push(e),
            (this.totalLength_ += t.length + e.length);
        }),
        (jspb.BinaryWriter.prototype.beginDelimited_ = function (e) {
          return (
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            (e = this.encoder_.end()),
            this.blocks_.push(e),
            (this.totalLength_ += e.length),
            e.push(this.totalLength_),
            e
          );
        }),
        (jspb.BinaryWriter.prototype.endDelimited_ = function (e) {
          var t = e.pop();
          for (
            t = this.totalLength_ + this.encoder_.length() - t,
              jspb.asserts.assert(0 <= t);
            127 < t;
          )
            e.push((127 & t) | 128), (t >>>= 7), this.totalLength_++;
          e.push(t), this.totalLength_++;
        }),
        (jspb.BinaryWriter.prototype.writeSerializedMessage = function (
          e,
          t,
          r,
        ) {
          this.appendUint8Array_(e.subarray(t, r));
        }),
        (jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function (
          e,
          t,
          r,
        ) {
          null != e &&
            null != t &&
            null != r &&
            this.writeSerializedMessage(e, t, r);
        }),
        (jspb.BinaryWriter.prototype.reset = function () {
          (this.blocks_ = []),
            this.encoder_.end(),
            (this.totalLength_ = 0),
            (this.bookmarks_ = []);
        }),
        (jspb.BinaryWriter.prototype.getResultBuffer = function () {
          jspb.asserts.assert(0 == this.bookmarks_.length);
          for (
            var e = new Uint8Array(this.totalLength_ + this.encoder_.length()),
              t = this.blocks_,
              r = t.length,
              n = 0,
              o = 0;
            o < r;
            o++
          ) {
            var i = t[o];
            e.set(i, n), (n += i.length);
          }
          return (
            (t = this.encoder_.end()),
            e.set(t, n),
            (n += t.length),
            jspb.asserts.assert(n == e.length),
            (this.blocks_ = [e]),
            e
          );
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "getResultBuffer",
          jspb.BinaryWriter.prototype.getResultBuffer,
        ),
        (jspb.BinaryWriter.prototype.getResultBase64String = function (e) {
          return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), e);
        }),
        (jspb.BinaryWriter.prototype.beginSubMessage = function (e) {
          this.bookmarks_.push(this.beginDelimited_(e));
        }),
        (jspb.BinaryWriter.prototype.endSubMessage = function () {
          jspb.asserts.assert(0 <= this.bookmarks_.length),
            this.endDelimited_(this.bookmarks_.pop());
        }),
        (jspb.BinaryWriter.prototype.writeFieldHeader_ = function (e, t) {
          jspb.asserts.assert(1 <= e && e == Math.floor(e)),
            this.encoder_.writeUnsignedVarint32(8 * e + t);
        }),
        (jspb.BinaryWriter.prototype.writeAny = function (e, t, r) {
          var n = jspb.BinaryConstants.FieldType;
          switch (e) {
            case n.DOUBLE:
              this.writeDouble(t, r);
              break;
            case n.FLOAT:
              this.writeFloat(t, r);
              break;
            case n.INT64:
              this.writeInt64(t, r);
              break;
            case n.UINT64:
              this.writeUint64(t, r);
              break;
            case n.INT32:
              this.writeInt32(t, r);
              break;
            case n.FIXED64:
              this.writeFixed64(t, r);
              break;
            case n.FIXED32:
              this.writeFixed32(t, r);
              break;
            case n.BOOL:
              this.writeBool(t, r);
              break;
            case n.STRING:
              this.writeString(t, r);
              break;
            case n.GROUP:
              jspb.asserts.fail("Group field type not supported in writeAny()");
              break;
            case n.MESSAGE:
              jspb.asserts.fail(
                "Message field type not supported in writeAny()",
              );
              break;
            case n.BYTES:
              this.writeBytes(t, r);
              break;
            case n.UINT32:
              this.writeUint32(t, r);
              break;
            case n.ENUM:
              this.writeEnum(t, r);
              break;
            case n.SFIXED32:
              this.writeSfixed32(t, r);
              break;
            case n.SFIXED64:
              this.writeSfixed64(t, r);
              break;
            case n.SINT32:
              this.writeSint32(t, r);
              break;
            case n.SINT64:
              this.writeSint64(t, r);
              break;
            case n.FHASH64:
              this.writeFixedHash64(t, r);
              break;
            case n.VHASH64:
              this.writeVarintHash64(t, r);
              break;
            default:
              jspb.asserts.fail("Invalid field type in writeAny()");
          }
        }),
        (jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function (e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeUnsignedVarint32(t));
        }),
        (jspb.BinaryWriter.prototype.writeSignedVarint32_ = function (e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeSignedVarint32(t));
        }),
        (jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function (e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeUnsignedVarint64(t));
        }),
        (jspb.BinaryWriter.prototype.writeSignedVarint64_ = function (e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeSignedVarint64(t));
        }),
        (jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function (e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeZigzagVarint32(t));
        }),
        (jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function (e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeZigzagVarint64(t));
        }),
        (jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function (
          e,
          t,
        ) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeZigzagVarint64String(t));
        }),
        (jspb.BinaryWriter.prototype.writeZigzagVarintHash64_ = function (
          e,
          t,
        ) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeZigzagVarintHash64(t));
        }),
        (jspb.BinaryWriter.prototype.writeInt32 = function (e, t) {
          null != t &&
            (jspb.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_31 &&
                t < jspb.BinaryConstants.TWO_TO_31,
            ),
            this.writeSignedVarint32_(e, t));
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeInt32",
          jspb.BinaryWriter.prototype.writeInt32,
        ),
        (jspb.BinaryWriter.prototype.writeInt32String = function (e, t) {
          null != t &&
            ((t = parseInt(t, 10)),
            jspb.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_31 &&
                t < jspb.BinaryConstants.TWO_TO_31,
            ),
            this.writeSignedVarint32_(e, t));
        }),
        (jspb.BinaryWriter.prototype.writeInt64 = function (e, t) {
          null != t &&
            (jspb.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_63 &&
                t < jspb.BinaryConstants.TWO_TO_63,
            ),
            this.writeSignedVarint64_(e, t));
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeInt64",
          jspb.BinaryWriter.prototype.writeInt64,
        ),
        (jspb.BinaryWriter.prototype.writeInt64String = function (e, t) {
          null != t &&
            ((t = jspb.arith.Int64.fromString(t)),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeSplitVarint64(t.lo, t.hi));
        }),
        (jspb.BinaryWriter.prototype.writeUint32 = function (e, t) {
          null != t &&
            (jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
            this.writeUnsignedVarint32_(e, t));
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeUint32",
          jspb.BinaryWriter.prototype.writeUint32,
        ),
        (jspb.BinaryWriter.prototype.writeUint32String = function (e, t) {
          null != t &&
            ((t = parseInt(t, 10)),
            jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
            this.writeUnsignedVarint32_(e, t));
        }),
        (jspb.BinaryWriter.prototype.writeUint64 = function (e, t) {
          null != t &&
            (jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64),
            this.writeUnsignedVarint64_(e, t));
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeUint64",
          jspb.BinaryWriter.prototype.writeUint64,
        ),
        (jspb.BinaryWriter.prototype.writeUint64String = function (e, t) {
          null != t &&
            ((t = jspb.arith.UInt64.fromString(t)),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeSplitVarint64(t.lo, t.hi));
        }),
        (jspb.BinaryWriter.prototype.writeSint32 = function (e, t) {
          null != t &&
            (jspb.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_31 &&
                t < jspb.BinaryConstants.TWO_TO_31,
            ),
            this.writeZigzagVarint32_(e, t));
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeSint32",
          jspb.BinaryWriter.prototype.writeSint32,
        ),
        (jspb.BinaryWriter.prototype.writeSint64 = function (e, t) {
          null != t &&
            (jspb.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_63 &&
                t < jspb.BinaryConstants.TWO_TO_63,
            ),
            this.writeZigzagVarint64_(e, t));
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeSint64",
          jspb.BinaryWriter.prototype.writeSint64,
        ),
        (jspb.BinaryWriter.prototype.writeSintHash64 = function (e, t) {
          null != t && this.writeZigzagVarintHash64_(e, t);
        }),
        (jspb.BinaryWriter.prototype.writeSint64String = function (e, t) {
          null != t && this.writeZigzagVarint64String_(e, t);
        }),
        (jspb.BinaryWriter.prototype.writeFixed32 = function (e, t) {
          null != t &&
            (jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32),
            this.encoder_.writeUint32(t));
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeFixed32",
          jspb.BinaryWriter.prototype.writeFixed32,
        ),
        (jspb.BinaryWriter.prototype.writeFixed64 = function (e, t) {
          null != t &&
            (jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
            this.encoder_.writeUint64(t));
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeFixed64",
          jspb.BinaryWriter.prototype.writeFixed64,
        ),
        (jspb.BinaryWriter.prototype.writeFixed64String = function (e, t) {
          null != t &&
            ((t = jspb.arith.UInt64.fromString(t)),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
            this.encoder_.writeSplitFixed64(t.lo, t.hi));
        }),
        (jspb.BinaryWriter.prototype.writeSfixed32 = function (e, t) {
          null != t &&
            (jspb.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_31 &&
                t < jspb.BinaryConstants.TWO_TO_31,
            ),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32),
            this.encoder_.writeInt32(t));
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeSfixed32",
          jspb.BinaryWriter.prototype.writeSfixed32,
        ),
        (jspb.BinaryWriter.prototype.writeSfixed64 = function (e, t) {
          null != t &&
            (jspb.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_63 &&
                t < jspb.BinaryConstants.TWO_TO_63,
            ),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
            this.encoder_.writeInt64(t));
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeSfixed64",
          jspb.BinaryWriter.prototype.writeSfixed64,
        ),
        (jspb.BinaryWriter.prototype.writeSfixed64String = function (e, t) {
          null != t &&
            ((t = jspb.arith.Int64.fromString(t)),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
            this.encoder_.writeSplitFixed64(t.lo, t.hi));
        }),
        (jspb.BinaryWriter.prototype.writeFloat = function (e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32),
            this.encoder_.writeFloat(t));
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeFloat",
          jspb.BinaryWriter.prototype.writeFloat,
        ),
        (jspb.BinaryWriter.prototype.writeDouble = function (e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
            this.encoder_.writeDouble(t));
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeDouble",
          jspb.BinaryWriter.prototype.writeDouble,
        ),
        (jspb.BinaryWriter.prototype.writeBool = function (e, t) {
          null != t &&
            (jspb.asserts.assert("boolean" == typeof t || "number" == typeof t),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeBool(t));
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeBool",
          jspb.BinaryWriter.prototype.writeBool,
        ),
        (jspb.BinaryWriter.prototype.writeEnum = function (e, t) {
          null != t &&
            (jspb.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_31 &&
                t < jspb.BinaryConstants.TWO_TO_31,
            ),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeSignedVarint32(t));
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeEnum",
          jspb.BinaryWriter.prototype.writeEnum,
        ),
        (jspb.BinaryWriter.prototype.writeString = function (e, t) {
          null != t &&
            ((e = this.beginDelimited_(e)),
            this.encoder_.writeString(t),
            this.endDelimited_(e));
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeString",
          jspb.BinaryWriter.prototype.writeString,
        ),
        (jspb.BinaryWriter.prototype.writeBytes = function (e, t) {
          null != t &&
            ((t = jspb.utils.byteSourceToUint8Array(t)),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            this.encoder_.writeUnsignedVarint32(t.length),
            this.appendUint8Array_(t));
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeBytes",
          jspb.BinaryWriter.prototype.writeBytes,
        ),
        (jspb.BinaryWriter.prototype.writeMessage = function (e, t, r) {
          null != t &&
            ((e = this.beginDelimited_(e)), r(t, this), this.endDelimited_(e));
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeMessage",
          jspb.BinaryWriter.prototype.writeMessage,
        ),
        (jspb.BinaryWriter.prototype.writeMessageSet = function (e, t, r) {
          null != t &&
            (this.writeFieldHeader_(
              1,
              jspb.BinaryConstants.WireType.START_GROUP,
            ),
            this.writeFieldHeader_(2, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeSignedVarint32(e),
            (e = this.beginDelimited_(3)),
            r(t, this),
            this.endDelimited_(e),
            this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.END_GROUP));
        }),
        (jspb.BinaryWriter.prototype.writeGroup = function (e, t, r) {
          null != t &&
            (this.writeFieldHeader_(
              e,
              jspb.BinaryConstants.WireType.START_GROUP,
            ),
            r(t, this),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.END_GROUP));
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeGroup",
          jspb.BinaryWriter.prototype.writeGroup,
        ),
        (jspb.BinaryWriter.prototype.writeFixedHash64 = function (e, t) {
          null != t &&
            (jspb.asserts.assert(8 == t.length),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
            this.encoder_.writeFixedHash64(t));
        }),
        (jspb.BinaryWriter.prototype.writeVarintHash64 = function (e, t) {
          null != t &&
            (jspb.asserts.assert(8 == t.length),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeVarintHash64(t));
        }),
        (jspb.BinaryWriter.prototype.writeSplitFixed64 = function (e, t, r) {
          this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
            this.encoder_.writeSplitFixed64(t, r);
        }),
        (jspb.BinaryWriter.prototype.writeSplitVarint64 = function (e, t, r) {
          this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeSplitVarint64(t, r);
        }),
        (jspb.BinaryWriter.prototype.writeSplitZigzagVarint64 = function (
          e,
          t,
          r,
        ) {
          this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT);
          var n = this.encoder_;
          jspb.utils.toZigzag64(t, r, function (e, t) {
            n.writeSplitVarint64(e >>> 0, t >>> 0);
          });
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedInt32 = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeSignedVarint32_(e, t[r]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeRepeatedInt32",
          jspb.BinaryWriter.prototype.writeRepeatedInt32,
        ),
        (jspb.BinaryWriter.prototype.writeRepeatedInt32String = function (
          e,
          t,
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeInt32String(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedInt64 = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeSignedVarint64_(e, t[r]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeRepeatedInt64",
          jspb.BinaryWriter.prototype.writeRepeatedInt64,
        ),
        (jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64 = function (
          e,
          t,
          r,
          n,
        ) {
          if (null != t)
            for (var o = 0; o < t.length; o++)
              this.writeSplitFixed64(e, r(t[o]), n(t[o]));
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64 = function (
          e,
          t,
          r,
          n,
        ) {
          if (null != t)
            for (var o = 0; o < t.length; o++)
              this.writeSplitVarint64(e, r(t[o]), n(t[o]));
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64 =
          function (e, t, r, n) {
            if (null != t)
              for (var o = 0; o < t.length; o++)
                this.writeSplitZigzagVarint64(e, r(t[o]), n(t[o]));
          }),
        (jspb.BinaryWriter.prototype.writeRepeatedInt64String = function (
          e,
          t,
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeInt64String(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedUint32 = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeUnsignedVarint32_(e, t[r]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeRepeatedUint32",
          jspb.BinaryWriter.prototype.writeRepeatedUint32,
        ),
        (jspb.BinaryWriter.prototype.writeRepeatedUint32String = function (
          e,
          t,
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeUint32String(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedUint64 = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeUnsignedVarint64_(e, t[r]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeRepeatedUint64",
          jspb.BinaryWriter.prototype.writeRepeatedUint64,
        ),
        (jspb.BinaryWriter.prototype.writeRepeatedUint64String = function (
          e,
          t,
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeUint64String(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedSint32 = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeZigzagVarint32_(e, t[r]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeRepeatedSint32",
          jspb.BinaryWriter.prototype.writeRepeatedSint32,
        ),
        (jspb.BinaryWriter.prototype.writeRepeatedSint64 = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeZigzagVarint64_(e, t[r]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeRepeatedSint64",
          jspb.BinaryWriter.prototype.writeRepeatedSint64,
        ),
        (jspb.BinaryWriter.prototype.writeRepeatedSint64String = function (
          e,
          t,
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeZigzagVarint64String_(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedSintHash64 = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeZigzagVarintHash64_(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeFixed32(e, t[r]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeRepeatedFixed32",
          jspb.BinaryWriter.prototype.writeRepeatedFixed32,
        ),
        (jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeFixed64(e, t[r]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeRepeatedFixed64",
          jspb.BinaryWriter.prototype.writeRepeatedFixed64,
        ),
        (jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function (
          e,
          t,
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeFixed64String(e, t[r]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeRepeatedFixed64String",
          jspb.BinaryWriter.prototype.writeRepeatedFixed64String,
        ),
        (jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeSfixed32(e, t[r]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeRepeatedSfixed32",
          jspb.BinaryWriter.prototype.writeRepeatedSfixed32,
        ),
        (jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeSfixed64(e, t[r]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeRepeatedSfixed64",
          jspb.BinaryWriter.prototype.writeRepeatedSfixed64,
        ),
        (jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function (
          e,
          t,
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeSfixed64String(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedFloat = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeFloat(e, t[r]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeRepeatedFloat",
          jspb.BinaryWriter.prototype.writeRepeatedFloat,
        ),
        (jspb.BinaryWriter.prototype.writeRepeatedDouble = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeDouble(e, t[r]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeRepeatedDouble",
          jspb.BinaryWriter.prototype.writeRepeatedDouble,
        ),
        (jspb.BinaryWriter.prototype.writeRepeatedBool = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeBool(e, t[r]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeRepeatedBool",
          jspb.BinaryWriter.prototype.writeRepeatedBool,
        ),
        (jspb.BinaryWriter.prototype.writeRepeatedEnum = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeEnum(e, t[r]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeRepeatedEnum",
          jspb.BinaryWriter.prototype.writeRepeatedEnum,
        ),
        (jspb.BinaryWriter.prototype.writeRepeatedString = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeString(e, t[r]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeRepeatedString",
          jspb.BinaryWriter.prototype.writeRepeatedString,
        ),
        (jspb.BinaryWriter.prototype.writeRepeatedBytes = function (e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeBytes(e, t[r]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeRepeatedBytes",
          jspb.BinaryWriter.prototype.writeRepeatedBytes,
        ),
        (jspb.BinaryWriter.prototype.writeRepeatedMessage = function (e, t, r) {
          if (null != t)
            for (var n = 0; n < t.length; n++) {
              var o = this.beginDelimited_(e);
              r(t[n], this), this.endDelimited_(o);
            }
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeRepeatedMessage",
          jspb.BinaryWriter.prototype.writeRepeatedMessage,
        ),
        (jspb.BinaryWriter.prototype.writeRepeatedGroup = function (e, t, r) {
          if (null != t)
            for (var n = 0; n < t.length; n++)
              this.writeFieldHeader_(
                e,
                jspb.BinaryConstants.WireType.START_GROUP,
              ),
                r(t[n], this),
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.END_GROUP,
                );
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writeRepeatedGroup",
          jspb.BinaryWriter.prototype.writeRepeatedGroup,
        ),
        (jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function (
          e,
          t,
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeFixedHash64(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function (
          e,
          t,
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeVarintHash64(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writePackedInt32 = function (e, t) {
          if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var r = 0; r < t.length; r++)
              this.encoder_.writeSignedVarint32(t[r]);
            this.endDelimited_(e);
          }
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writePackedInt32",
          jspb.BinaryWriter.prototype.writePackedInt32,
        ),
        (jspb.BinaryWriter.prototype.writePackedInt32String = function (e, t) {
          if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var r = 0; r < t.length; r++)
              this.encoder_.writeSignedVarint32(parseInt(t[r], 10));
            this.endDelimited_(e);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedInt64 = function (e, t) {
          if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var r = 0; r < t.length; r++)
              this.encoder_.writeSignedVarint64(t[r]);
            this.endDelimited_(e);
          }
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writePackedInt64",
          jspb.BinaryWriter.prototype.writePackedInt64,
        ),
        (jspb.BinaryWriter.prototype.writePackedSplitFixed64 = function (
          e,
          t,
          r,
          n,
        ) {
          if (null != t) {
            e = this.beginDelimited_(e);
            for (var o = 0; o < t.length; o++)
              this.encoder_.writeSplitFixed64(r(t[o]), n(t[o]));
            this.endDelimited_(e);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedSplitVarint64 = function (
          e,
          t,
          r,
          n,
        ) {
          if (null != t) {
            e = this.beginDelimited_(e);
            for (var o = 0; o < t.length; o++)
              this.encoder_.writeSplitVarint64(r(t[o]), n(t[o]));
            this.endDelimited_(e);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64 = function (
          e,
          t,
          r,
          n,
        ) {
          if (null != t) {
            e = this.beginDelimited_(e);
            for (var o = this.encoder_, i = 0; i < t.length; i++)
              jspb.utils.toZigzag64(r(t[i]), n(t[i]), function (e, t) {
                o.writeSplitVarint64(e >>> 0, t >>> 0);
              });
            this.endDelimited_(e);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedInt64String = function (e, t) {
          if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var r = 0; r < t.length; r++) {
              var n = jspb.arith.Int64.fromString(t[r]);
              this.encoder_.writeSplitVarint64(n.lo, n.hi);
            }
            this.endDelimited_(e);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedUint32 = function (e, t) {
          if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var r = 0; r < t.length; r++)
              this.encoder_.writeUnsignedVarint32(t[r]);
            this.endDelimited_(e);
          }
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writePackedUint32",
          jspb.BinaryWriter.prototype.writePackedUint32,
        ),
        (jspb.BinaryWriter.prototype.writePackedUint32String = function (e, t) {
          if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var r = 0; r < t.length; r++)
              this.encoder_.writeUnsignedVarint32(parseInt(t[r], 10));
            this.endDelimited_(e);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedUint64 = function (e, t) {
          if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var r = 0; r < t.length; r++)
              this.encoder_.writeUnsignedVarint64(t[r]);
            this.endDelimited_(e);
          }
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writePackedUint64",
          jspb.BinaryWriter.prototype.writePackedUint64,
        ),
        (jspb.BinaryWriter.prototype.writePackedUint64String = function (e, t) {
          if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var r = 0; r < t.length; r++) {
              var n = jspb.arith.UInt64.fromString(t[r]);
              this.encoder_.writeSplitVarint64(n.lo, n.hi);
            }
            this.endDelimited_(e);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedSint32 = function (e, t) {
          if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var r = 0; r < t.length; r++)
              this.encoder_.writeZigzagVarint32(t[r]);
            this.endDelimited_(e);
          }
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writePackedSint32",
          jspb.BinaryWriter.prototype.writePackedSint32,
        ),
        (jspb.BinaryWriter.prototype.writePackedSint64 = function (e, t) {
          if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var r = 0; r < t.length; r++)
              this.encoder_.writeZigzagVarint64(t[r]);
            this.endDelimited_(e);
          }
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writePackedSint64",
          jspb.BinaryWriter.prototype.writePackedSint64,
        ),
        (jspb.BinaryWriter.prototype.writePackedSint64String = function (e, t) {
          if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var r = 0; r < t.length; r++)
              this.encoder_.writeZigzagVarintHash64(
                jspb.utils.decimalStringToHash64(t[r]),
              );
            this.endDelimited_(e);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedSintHash64 = function (e, t) {
          if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var r = 0; r < t.length; r++)
              this.encoder_.writeZigzagVarintHash64(t[r]);
            this.endDelimited_(e);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedFixed32 = function (e, t) {
          if (null != t && t.length)
            for (
              this.writeFieldHeader_(
                e,
                jspb.BinaryConstants.WireType.DELIMITED,
              ),
                this.encoder_.writeUnsignedVarint32(4 * t.length),
                e = 0;
              e < t.length;
              e++
            )
              this.encoder_.writeUint32(t[e]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writePackedFixed32",
          jspb.BinaryWriter.prototype.writePackedFixed32,
        ),
        (jspb.BinaryWriter.prototype.writePackedFixed64 = function (e, t) {
          if (null != t && t.length)
            for (
              this.writeFieldHeader_(
                e,
                jspb.BinaryConstants.WireType.DELIMITED,
              ),
                this.encoder_.writeUnsignedVarint32(8 * t.length),
                e = 0;
              e < t.length;
              e++
            )
              this.encoder_.writeUint64(t[e]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writePackedFixed64",
          jspb.BinaryWriter.prototype.writePackedFixed64,
        ),
        (jspb.BinaryWriter.prototype.writePackedFixed64String = function (
          e,
          t,
        ) {
          if (null != t && t.length)
            for (
              this.writeFieldHeader_(
                e,
                jspb.BinaryConstants.WireType.DELIMITED,
              ),
                this.encoder_.writeUnsignedVarint32(8 * t.length),
                e = 0;
              e < t.length;
              e++
            ) {
              var r = jspb.arith.UInt64.fromString(t[e]);
              this.encoder_.writeSplitFixed64(r.lo, r.hi);
            }
        }),
        (jspb.BinaryWriter.prototype.writePackedSfixed32 = function (e, t) {
          if (null != t && t.length)
            for (
              this.writeFieldHeader_(
                e,
                jspb.BinaryConstants.WireType.DELIMITED,
              ),
                this.encoder_.writeUnsignedVarint32(4 * t.length),
                e = 0;
              e < t.length;
              e++
            )
              this.encoder_.writeInt32(t[e]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writePackedSfixed32",
          jspb.BinaryWriter.prototype.writePackedSfixed32,
        ),
        (jspb.BinaryWriter.prototype.writePackedSfixed64 = function (e, t) {
          if (null != t && t.length)
            for (
              this.writeFieldHeader_(
                e,
                jspb.BinaryConstants.WireType.DELIMITED,
              ),
                this.encoder_.writeUnsignedVarint32(8 * t.length),
                e = 0;
              e < t.length;
              e++
            )
              this.encoder_.writeInt64(t[e]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writePackedSfixed64",
          jspb.BinaryWriter.prototype.writePackedSfixed64,
        ),
        (jspb.BinaryWriter.prototype.writePackedSfixed64String = function (
          e,
          t,
        ) {
          if (null != t && t.length)
            for (
              this.writeFieldHeader_(
                e,
                jspb.BinaryConstants.WireType.DELIMITED,
              ),
                this.encoder_.writeUnsignedVarint32(8 * t.length),
                e = 0;
              e < t.length;
              e++
            )
              this.encoder_.writeInt64String(t[e]);
        }),
        (jspb.BinaryWriter.prototype.writePackedFloat = function (e, t) {
          if (null != t && t.length)
            for (
              this.writeFieldHeader_(
                e,
                jspb.BinaryConstants.WireType.DELIMITED,
              ),
                this.encoder_.writeUnsignedVarint32(4 * t.length),
                e = 0;
              e < t.length;
              e++
            )
              this.encoder_.writeFloat(t[e]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writePackedFloat",
          jspb.BinaryWriter.prototype.writePackedFloat,
        ),
        (jspb.BinaryWriter.prototype.writePackedDouble = function (e, t) {
          if (null != t && t.length)
            for (
              this.writeFieldHeader_(
                e,
                jspb.BinaryConstants.WireType.DELIMITED,
              ),
                this.encoder_.writeUnsignedVarint32(8 * t.length),
                e = 0;
              e < t.length;
              e++
            )
              this.encoder_.writeDouble(t[e]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writePackedDouble",
          jspb.BinaryWriter.prototype.writePackedDouble,
        ),
        (jspb.BinaryWriter.prototype.writePackedBool = function (e, t) {
          if (null != t && t.length)
            for (
              this.writeFieldHeader_(
                e,
                jspb.BinaryConstants.WireType.DELIMITED,
              ),
                this.encoder_.writeUnsignedVarint32(t.length),
                e = 0;
              e < t.length;
              e++
            )
              this.encoder_.writeBool(t[e]);
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writePackedBool",
          jspb.BinaryWriter.prototype.writePackedBool,
        ),
        (jspb.BinaryWriter.prototype.writePackedEnum = function (e, t) {
          if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var r = 0; r < t.length; r++) this.encoder_.writeEnum(t[r]);
            this.endDelimited_(e);
          }
        }),
        goog.exportProperty(
          jspb.BinaryWriter.prototype,
          "writePackedEnum",
          jspb.BinaryWriter.prototype.writePackedEnum,
        ),
        (jspb.BinaryWriter.prototype.writePackedFixedHash64 = function (e, t) {
          if (null != t && t.length)
            for (
              this.writeFieldHeader_(
                e,
                jspb.BinaryConstants.WireType.DELIMITED,
              ),
                this.encoder_.writeUnsignedVarint32(8 * t.length),
                e = 0;
              e < t.length;
              e++
            )
              this.encoder_.writeFixedHash64(t[e]);
        }),
        (jspb.BinaryWriter.prototype.writePackedVarintHash64 = function (e, t) {
          if (null != t && t.length) {
            e = this.beginDelimited_(e);
            for (var r = 0; r < t.length; r++)
              this.encoder_.writeVarintHash64(t[r]);
            this.endDelimited_(e);
          }
        }),
        (jspb.Map = function (e, t) {
          (this.arr_ = e),
            (this.valueCtor_ = t),
            (this.map_ = {}),
            (this.arrClean = !0),
            0 < this.arr_.length && this.loadFromArray_();
        }),
        goog.exportSymbol("jspb.Map", jspb.Map),
        (jspb.Map.prototype.loadFromArray_ = function () {
          for (var e = 0; e < this.arr_.length; e++) {
            var t = this.arr_[e],
              r = t[0];
            this.map_[r.toString()] = new jspb.Map.Entry_(r, t[1]);
          }
          this.arrClean = !0;
        }),
        (jspb.Map.prototype.toArray = function () {
          if (this.arrClean) {
            if (this.valueCtor_) {
              var e,
                t = this.map_;
              for (e in t)
                if (Object.prototype.hasOwnProperty.call(t, e)) {
                  var r = t[e].valueWrapper;
                  r && r.toArray();
                }
            }
          } else {
            for (
              this.arr_.length = 0, (t = this.stringKeys_()).sort(), e = 0;
              e < t.length;
              e++
            ) {
              var n = this.map_[t[e]];
              (r = n.valueWrapper) && r.toArray(),
                this.arr_.push([n.key, n.value]);
            }
            this.arrClean = !0;
          }
          return this.arr_;
        }),
        goog.exportProperty(
          jspb.Map.prototype,
          "toArray",
          jspb.Map.prototype.toArray,
        ),
        (jspb.Map.prototype.toObject = function (e, t) {
          for (var r = this.toArray(), n = [], o = 0; o < r.length; o++) {
            var i = this.map_[r[o][0].toString()];
            this.wrapEntry_(i);
            var a = i.valueWrapper;
            a
              ? (jspb.asserts.assert(t), n.push([i.key, t(e, a)]))
              : n.push([i.key, i.value]);
          }
          return n;
        }),
        goog.exportProperty(
          jspb.Map.prototype,
          "toObject",
          jspb.Map.prototype.toObject,
        ),
        (jspb.Map.fromObject = function (e, t, r) {
          t = new jspb.Map([], t);
          for (var n = 0; n < e.length; n++) {
            var o = e[n][0],
              i = r(e[n][1]);
            t.set(o, i);
          }
          return t;
        }),
        goog.exportProperty(jspb.Map, "fromObject", jspb.Map.fromObject),
        (jspb.Map.ArrayIteratorIterable_ = function (e) {
          (this.idx_ = 0), (this.arr_ = e);
        }),
        (jspb.Map.ArrayIteratorIterable_.prototype.next = function () {
          return this.idx_ < this.arr_.length
            ? { done: !1, value: this.arr_[this.idx_++] }
            : { done: !0, value: void 0 };
        }),
        "undefined" != typeof Symbol &&
          (jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] =
            function () {
              return this;
            }),
        (jspb.Map.prototype.getLength = function () {
          return this.stringKeys_().length;
        }),
        goog.exportProperty(
          jspb.Map.prototype,
          "getLength",
          jspb.Map.prototype.getLength,
        ),
        (jspb.Map.prototype.clear = function () {
          (this.map_ = {}), (this.arrClean = !1);
        }),
        goog.exportProperty(
          jspb.Map.prototype,
          "clear",
          jspb.Map.prototype.clear,
        ),
        (jspb.Map.prototype.del = function (e) {
          e = e.toString();
          var t = this.map_.hasOwnProperty(e);
          return delete this.map_[e], (this.arrClean = !1), t;
        }),
        goog.exportProperty(jspb.Map.prototype, "del", jspb.Map.prototype.del),
        (jspb.Map.prototype.getEntryList = function () {
          var e = [],
            t = this.stringKeys_();
          t.sort();
          for (var r = 0; r < t.length; r++) {
            var n = this.map_[t[r]];
            e.push([n.key, n.value]);
          }
          return e;
        }),
        goog.exportProperty(
          jspb.Map.prototype,
          "getEntryList",
          jspb.Map.prototype.getEntryList,
        ),
        (jspb.Map.prototype.entries = function () {
          var e = [],
            t = this.stringKeys_();
          t.sort();
          for (var r = 0; r < t.length; r++) {
            var n = this.map_[t[r]];
            e.push([n.key, this.wrapEntry_(n)]);
          }
          return new jspb.Map.ArrayIteratorIterable_(e);
        }),
        goog.exportProperty(
          jspb.Map.prototype,
          "entries",
          jspb.Map.prototype.entries,
        ),
        (jspb.Map.prototype.keys = function () {
          var e = [],
            t = this.stringKeys_();
          t.sort();
          for (var r = 0; r < t.length; r++) e.push(this.map_[t[r]].key);
          return new jspb.Map.ArrayIteratorIterable_(e);
        }),
        goog.exportProperty(
          jspb.Map.prototype,
          "keys",
          jspb.Map.prototype.keys,
        ),
        (jspb.Map.prototype.values = function () {
          var e = [],
            t = this.stringKeys_();
          t.sort();
          for (var r = 0; r < t.length; r++)
            e.push(this.wrapEntry_(this.map_[t[r]]));
          return new jspb.Map.ArrayIteratorIterable_(e);
        }),
        goog.exportProperty(
          jspb.Map.prototype,
          "values",
          jspb.Map.prototype.values,
        ),
        (jspb.Map.prototype.forEach = function (e, t) {
          var r = this.stringKeys_();
          r.sort();
          for (var n = 0; n < r.length; n++) {
            var o = this.map_[r[n]];
            e.call(t, this.wrapEntry_(o), o.key, this);
          }
        }),
        goog.exportProperty(
          jspb.Map.prototype,
          "forEach",
          jspb.Map.prototype.forEach,
        ),
        (jspb.Map.prototype.set = function (e, t) {
          var r = new jspb.Map.Entry_(e);
          return (
            this.valueCtor_
              ? ((r.valueWrapper = t), (r.value = t.toArray()))
              : (r.value = t),
            (this.map_[e.toString()] = r),
            (this.arrClean = !1),
            this
          );
        }),
        goog.exportProperty(jspb.Map.prototype, "set", jspb.Map.prototype.set),
        (jspb.Map.prototype.wrapEntry_ = function (e) {
          return this.valueCtor_
            ? (e.valueWrapper ||
                (e.valueWrapper = new this.valueCtor_(e.value)),
              e.valueWrapper)
            : e.value;
        }),
        (jspb.Map.prototype.get = function (e) {
          if ((e = this.map_[e.toString()])) return this.wrapEntry_(e);
        }),
        goog.exportProperty(jspb.Map.prototype, "get", jspb.Map.prototype.get),
        (jspb.Map.prototype.has = function (e) {
          return e.toString() in this.map_;
        }),
        goog.exportProperty(jspb.Map.prototype, "has", jspb.Map.prototype.has),
        (jspb.Map.prototype.serializeBinary = function (e, t, r, n, o) {
          var i = this.stringKeys_();
          i.sort();
          for (var a = 0; a < i.length; a++) {
            var s = this.map_[i[a]];
            t.beginSubMessage(e),
              r.call(t, 1, s.key),
              this.valueCtor_
                ? n.call(t, 2, this.wrapEntry_(s), o)
                : n.call(t, 2, s.value),
              t.endSubMessage();
          }
        }),
        goog.exportProperty(
          jspb.Map.prototype,
          "serializeBinary",
          jspb.Map.prototype.serializeBinary,
        ),
        (jspb.Map.deserializeBinary = function (e, t, r, n, o, i, a) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            var s = t.getFieldNumber();
            1 == s
              ? (i = r.call(t))
              : 2 == s &&
                (e.valueCtor_
                  ? (jspb.asserts.assert(o),
                    a || (a = new e.valueCtor_()),
                    n.call(t, a, o))
                  : (a = n.call(t)));
          }
          jspb.asserts.assert(null != i),
            jspb.asserts.assert(null != a),
            e.set(i, a);
        }),
        goog.exportProperty(
          jspb.Map,
          "deserializeBinary",
          jspb.Map.deserializeBinary,
        ),
        (jspb.Map.prototype.stringKeys_ = function () {
          var e,
            t = this.map_,
            r = [];
          for (e in t) Object.prototype.hasOwnProperty.call(t, e) && r.push(e);
          return r;
        }),
        (jspb.Map.Entry_ = function (e, t) {
          (this.key = e), (this.value = t), (this.valueWrapper = void 0);
        }),
        (jspb.ExtensionFieldInfo = function (e, t, r, n, o) {
          (this.fieldIndex = e),
            (this.fieldName = t),
            (this.ctor = r),
            (this.toObjectFn = n),
            (this.isRepeated = o);
        }),
        goog.exportSymbol("jspb.ExtensionFieldInfo", jspb.ExtensionFieldInfo),
        (jspb.ExtensionFieldBinaryInfo = function (e, t, r, n, o, i) {
          (this.fieldInfo = e),
            (this.binaryReaderFn = t),
            (this.binaryWriterFn = r),
            (this.binaryMessageSerializeFn = n),
            (this.binaryMessageDeserializeFn = o),
            (this.isPacked = i);
        }),
        goog.exportSymbol(
          "jspb.ExtensionFieldBinaryInfo",
          jspb.ExtensionFieldBinaryInfo,
        ),
        (jspb.ExtensionFieldInfo.prototype.isMessageType = function () {
          return !!this.ctor;
        }),
        goog.exportProperty(
          jspb.ExtensionFieldInfo.prototype,
          "isMessageType",
          jspb.ExtensionFieldInfo.prototype.isMessageType,
        ),
        (jspb.Message = function () {}),
        goog.exportSymbol("jspb.Message", jspb.Message),
        (jspb.Message.GENERATE_TO_OBJECT = !0),
        goog.exportProperty(
          jspb.Message,
          "GENERATE_TO_OBJECT",
          jspb.Message.GENERATE_TO_OBJECT,
        ),
        (jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE),
        goog.exportProperty(
          jspb.Message,
          "GENERATE_FROM_OBJECT",
          jspb.Message.GENERATE_FROM_OBJECT,
        ),
        (jspb.Message.GENERATE_TO_STRING = !0),
        (jspb.Message.ASSUME_LOCAL_ARRAYS = !1),
        (jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = !0),
        (jspb.Message.SUPPORTS_UINT8ARRAY_ = "function" == typeof Uint8Array),
        (jspb.Message.prototype.getJsPbMessageId = function () {
          return this.messageId_;
        }),
        goog.exportProperty(
          jspb.Message.prototype,
          "getJsPbMessageId",
          jspb.Message.prototype.getJsPbMessageId,
        ),
        (jspb.Message.getIndex_ = function (e, t) {
          return t + e.arrayIndexOffset_;
        }),
        (jspb.Message.hiddenES6Property_ = function () {}),
        (jspb.Message.getFieldNumber_ = function (e, t) {
          return t - e.arrayIndexOffset_;
        }),
        (jspb.Message.initialize = function (e, t, r, n, o, i) {
          if (
            ((e.wrappers_ = null),
            t || (t = r ? [r] : []),
            (e.messageId_ = r ? String(r) : void 0),
            (e.arrayIndexOffset_ = 0 === r ? -1 : 0),
            (e.array = t),
            jspb.Message.initPivotAndExtensionObject_(e, n),
            (e.convertedPrimitiveFields_ = {}),
            jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS ||
              (e.repeatedFields = o),
            o)
          )
            for (t = 0; t < o.length; t++)
              (r = o[t]) < e.pivot_
                ? ((r = jspb.Message.getIndex_(e, r)),
                  (e.array[r] =
                    e.array[r] || jspb.Message.EMPTY_LIST_SENTINEL_))
                : (jspb.Message.maybeInitEmptyExtensionObject_(e),
                  (e.extensionObject_[r] =
                    e.extensionObject_[r] ||
                    jspb.Message.EMPTY_LIST_SENTINEL_));
          if (i && i.length)
            for (t = 0; t < i.length; t++)
              jspb.Message.computeOneofCase(e, i[t]);
        }),
        goog.exportProperty(
          jspb.Message,
          "initialize",
          jspb.Message.initialize,
        ),
        (jspb.Message.EMPTY_LIST_SENTINEL_ =
          goog.DEBUG && Object.freeze ? Object.freeze([]) : []),
        (jspb.Message.isArray_ = function (e) {
          return jspb.Message.ASSUME_LOCAL_ARRAYS
            ? e instanceof Array
            : Array.isArray(e);
        }),
        (jspb.Message.isExtensionObject_ = function (e) {
          return !(
            null === e ||
            "object" != typeof e ||
            jspb.Message.isArray_(e) ||
            (jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array)
          );
        }),
        (jspb.Message.initPivotAndExtensionObject_ = function (e, t) {
          var r = e.array.length,
            n = -1;
          if (
            r &&
            ((n = r - 1), (r = e.array[n]), jspb.Message.isExtensionObject_(r))
          )
            return (
              (e.pivot_ = jspb.Message.getFieldNumber_(e, n)),
              void (e.extensionObject_ = r)
            );
          -1 < t
            ? ((e.pivot_ = Math.max(t, jspb.Message.getFieldNumber_(e, n + 1))),
              (e.extensionObject_ = null))
            : (e.pivot_ = Number.MAX_VALUE);
        }),
        (jspb.Message.maybeInitEmptyExtensionObject_ = function (e) {
          var t = jspb.Message.getIndex_(e, e.pivot_);
          e.array[t] || (e.extensionObject_ = e.array[t] = {});
        }),
        (jspb.Message.toObjectList = function (e, t, r) {
          for (var n = [], o = 0; o < e.length; o++)
            n[o] = t.call(e[o], r, e[o]);
          return n;
        }),
        goog.exportProperty(
          jspb.Message,
          "toObjectList",
          jspb.Message.toObjectList,
        ),
        (jspb.Message.toObjectExtension = function (e, t, r, n, o) {
          for (var i in r) {
            var a = r[i],
              s = n.call(e, a);
            if (null != s) {
              for (var l in a.fieldName)
                if (a.fieldName.hasOwnProperty(l)) break;
              t[l] = a.toObjectFn
                ? a.isRepeated
                  ? jspb.Message.toObjectList(s, a.toObjectFn, o)
                  : a.toObjectFn(o, s)
                : s;
            }
          }
        }),
        goog.exportProperty(
          jspb.Message,
          "toObjectExtension",
          jspb.Message.toObjectExtension,
        ),
        (jspb.Message.serializeBinaryExtensions = function (e, t, r, n) {
          for (var o in r) {
            var i = r[o],
              a = i.fieldInfo;
            if (!i.binaryWriterFn)
              throw Error(
                "Message extension present that was generated without binary serialization support",
              );
            var s = n.call(e, a);
            if (null != s)
              if (a.isMessageType()) {
                if (!i.binaryMessageSerializeFn)
                  throw Error(
                    "Message extension present holding submessage without binary support enabled, and message is being serialized to binary format",
                  );
                i.binaryWriterFn.call(
                  t,
                  a.fieldIndex,
                  s,
                  i.binaryMessageSerializeFn,
                );
              } else i.binaryWriterFn.call(t, a.fieldIndex, s);
          }
        }),
        goog.exportProperty(
          jspb.Message,
          "serializeBinaryExtensions",
          jspb.Message.serializeBinaryExtensions,
        ),
        (jspb.Message.readBinaryExtension = function (e, t, r, n, o) {
          var i = r[t.getFieldNumber()];
          if (i) {
            if (((r = i.fieldInfo), !i.binaryReaderFn))
              throw Error(
                "Deserializing extension whose generated code does not support binary format",
              );
            if (r.isMessageType()) {
              var a = new r.ctor();
              i.binaryReaderFn.call(t, a, i.binaryMessageDeserializeFn);
            } else a = i.binaryReaderFn.call(t);
            r.isRepeated && !i.isPacked
              ? (t = n.call(e, r))
                ? t.push(a)
                : o.call(e, r, [a])
              : o.call(e, r, a);
          } else t.skipField();
        }),
        goog.exportProperty(
          jspb.Message,
          "readBinaryExtension",
          jspb.Message.readBinaryExtension,
        ),
        (jspb.Message.getField = function (e, t) {
          if (t < e.pivot_) {
            t = jspb.Message.getIndex_(e, t);
            var r = e.array[t];
            return r === jspb.Message.EMPTY_LIST_SENTINEL_
              ? (e.array[t] = [])
              : r;
          }
          if (e.extensionObject_)
            return (r = e.extensionObject_[t]) ===
              jspb.Message.EMPTY_LIST_SENTINEL_
              ? (e.extensionObject_[t] = [])
              : r;
        }),
        goog.exportProperty(jspb.Message, "getField", jspb.Message.getField),
        (jspb.Message.getRepeatedField = function (e, t) {
          return jspb.Message.getField(e, t);
        }),
        goog.exportProperty(
          jspb.Message,
          "getRepeatedField",
          jspb.Message.getRepeatedField,
        ),
        (jspb.Message.getOptionalFloatingPointField = function (e, t) {
          return null == (e = jspb.Message.getField(e, t)) ? e : +e;
        }),
        goog.exportProperty(
          jspb.Message,
          "getOptionalFloatingPointField",
          jspb.Message.getOptionalFloatingPointField,
        ),
        (jspb.Message.getBooleanField = function (e, t) {
          return null == (e = jspb.Message.getField(e, t)) ? e : !!e;
        }),
        goog.exportProperty(
          jspb.Message,
          "getBooleanField",
          jspb.Message.getBooleanField,
        ),
        (jspb.Message.getRepeatedFloatingPointField = function (e, t) {
          var r = jspb.Message.getRepeatedField(e, t);
          if (
            (e.convertedPrimitiveFields_ || (e.convertedPrimitiveFields_ = {}),
            !e.convertedPrimitiveFields_[t])
          ) {
            for (var n = 0; n < r.length; n++) r[n] = +r[n];
            e.convertedPrimitiveFields_[t] = !0;
          }
          return r;
        }),
        goog.exportProperty(
          jspb.Message,
          "getRepeatedFloatingPointField",
          jspb.Message.getRepeatedFloatingPointField,
        ),
        (jspb.Message.getRepeatedBooleanField = function (e, t) {
          var r = jspb.Message.getRepeatedField(e, t);
          if (
            (e.convertedPrimitiveFields_ || (e.convertedPrimitiveFields_ = {}),
            !e.convertedPrimitiveFields_[t])
          ) {
            for (var n = 0; n < r.length; n++) r[n] = !!r[n];
            e.convertedPrimitiveFields_[t] = !0;
          }
          return r;
        }),
        goog.exportProperty(
          jspb.Message,
          "getRepeatedBooleanField",
          jspb.Message.getRepeatedBooleanField,
        ),
        (jspb.Message.bytesAsB64 = function (e) {
          return null == e || "string" == typeof e
            ? e
            : jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array
              ? goog.crypt.base64.encodeByteArray(e)
              : (jspb.asserts.fail(
                  "Cannot coerce to b64 string: " + goog.typeOf(e),
                ),
                null);
        }),
        goog.exportProperty(
          jspb.Message,
          "bytesAsB64",
          jspb.Message.bytesAsB64,
        ),
        (jspb.Message.bytesAsU8 = function (e) {
          return null == e || e instanceof Uint8Array
            ? e
            : "string" == typeof e
              ? goog.crypt.base64.decodeStringToUint8Array(e)
              : (jspb.asserts.fail(
                  "Cannot coerce to Uint8Array: " + goog.typeOf(e),
                ),
                null);
        }),
        goog.exportProperty(jspb.Message, "bytesAsU8", jspb.Message.bytesAsU8),
        (jspb.Message.bytesListAsB64 = function (e) {
          return (
            jspb.Message.assertConsistentTypes_(e),
            e.length && "string" != typeof e[0]
              ? goog.array.map(e, jspb.Message.bytesAsB64)
              : e
          );
        }),
        goog.exportProperty(
          jspb.Message,
          "bytesListAsB64",
          jspb.Message.bytesListAsB64,
        ),
        (jspb.Message.bytesListAsU8 = function (e) {
          return (
            jspb.Message.assertConsistentTypes_(e),
            !e.length || e[0] instanceof Uint8Array
              ? e
              : goog.array.map(e, jspb.Message.bytesAsU8)
          );
        }),
        goog.exportProperty(
          jspb.Message,
          "bytesListAsU8",
          jspb.Message.bytesListAsU8,
        ),
        (jspb.Message.assertConsistentTypes_ = function (e) {
          if (goog.DEBUG && e && 1 < e.length) {
            var t = goog.typeOf(e[0]);
            goog.array.forEach(e, function (e) {
              goog.typeOf(e) != t &&
                jspb.asserts.fail(
                  "Inconsistent type in JSPB repeated field array. Got " +
                    goog.typeOf(e) +
                    " expected " +
                    t,
                );
            });
          }
        }),
        (jspb.Message.getFieldWithDefault = function (e, t, r) {
          return null == (e = jspb.Message.getField(e, t)) ? r : e;
        }),
        goog.exportProperty(
          jspb.Message,
          "getFieldWithDefault",
          jspb.Message.getFieldWithDefault,
        ),
        (jspb.Message.getBooleanFieldWithDefault = function (e, t, r) {
          return null == (e = jspb.Message.getBooleanField(e, t)) ? r : e;
        }),
        goog.exportProperty(
          jspb.Message,
          "getBooleanFieldWithDefault",
          jspb.Message.getBooleanFieldWithDefault,
        ),
        (jspb.Message.getFloatingPointFieldWithDefault = function (e, t, r) {
          return null == (e = jspb.Message.getOptionalFloatingPointField(e, t))
            ? r
            : e;
        }),
        goog.exportProperty(
          jspb.Message,
          "getFloatingPointFieldWithDefault",
          jspb.Message.getFloatingPointFieldWithDefault,
        ),
        (jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault),
        goog.exportProperty(
          jspb.Message,
          "getFieldProto3",
          jspb.Message.getFieldProto3,
        ),
        (jspb.Message.getMapField = function (e, t, r, n) {
          if ((e.wrappers_ || (e.wrappers_ = {}), t in e.wrappers_))
            return e.wrappers_[t];
          var o = jspb.Message.getField(e, t);
          if (!o) {
            if (r) return;
            (o = []), jspb.Message.setField(e, t, o);
          }
          return (e.wrappers_[t] = new jspb.Map(o, n));
        }),
        goog.exportProperty(
          jspb.Message,
          "getMapField",
          jspb.Message.getMapField,
        ),
        (jspb.Message.setField = function (e, t, r) {
          return (
            jspb.asserts.assertInstanceof(e, jspb.Message),
            t < e.pivot_
              ? (e.array[jspb.Message.getIndex_(e, t)] = r)
              : (jspb.Message.maybeInitEmptyExtensionObject_(e),
                (e.extensionObject_[t] = r)),
            e
          );
        }),
        goog.exportProperty(jspb.Message, "setField", jspb.Message.setField),
        (jspb.Message.setProto3IntField = function (e, t, r) {
          return jspb.Message.setFieldIgnoringDefault_(e, t, r, 0);
        }),
        goog.exportProperty(
          jspb.Message,
          "setProto3IntField",
          jspb.Message.setProto3IntField,
        ),
        (jspb.Message.setProto3FloatField = function (e, t, r) {
          return jspb.Message.setFieldIgnoringDefault_(e, t, r, 0);
        }),
        goog.exportProperty(
          jspb.Message,
          "setProto3FloatField",
          jspb.Message.setProto3FloatField,
        ),
        (jspb.Message.setProto3BooleanField = function (e, t, r) {
          return jspb.Message.setFieldIgnoringDefault_(e, t, r, !1);
        }),
        goog.exportProperty(
          jspb.Message,
          "setProto3BooleanField",
          jspb.Message.setProto3BooleanField,
        ),
        (jspb.Message.setProto3StringField = function (e, t, r) {
          return jspb.Message.setFieldIgnoringDefault_(e, t, r, "");
        }),
        goog.exportProperty(
          jspb.Message,
          "setProto3StringField",
          jspb.Message.setProto3StringField,
        ),
        (jspb.Message.setProto3BytesField = function (e, t, r) {
          return jspb.Message.setFieldIgnoringDefault_(e, t, r, "");
        }),
        goog.exportProperty(
          jspb.Message,
          "setProto3BytesField",
          jspb.Message.setProto3BytesField,
        ),
        (jspb.Message.setProto3EnumField = function (e, t, r) {
          return jspb.Message.setFieldIgnoringDefault_(e, t, r, 0);
        }),
        goog.exportProperty(
          jspb.Message,
          "setProto3EnumField",
          jspb.Message.setProto3EnumField,
        ),
        (jspb.Message.setProto3StringIntField = function (e, t, r) {
          return jspb.Message.setFieldIgnoringDefault_(e, t, r, "0");
        }),
        goog.exportProperty(
          jspb.Message,
          "setProto3StringIntField",
          jspb.Message.setProto3StringIntField,
        ),
        (jspb.Message.setFieldIgnoringDefault_ = function (e, t, r, n) {
          return (
            jspb.asserts.assertInstanceof(e, jspb.Message),
            r !== n
              ? jspb.Message.setField(e, t, r)
              : t < e.pivot_
                ? (e.array[jspb.Message.getIndex_(e, t)] = null)
                : (jspb.Message.maybeInitEmptyExtensionObject_(e),
                  delete e.extensionObject_[t]),
            e
          );
        }),
        (jspb.Message.addToRepeatedField = function (e, t, r, n) {
          return (
            jspb.asserts.assertInstanceof(e, jspb.Message),
            (t = jspb.Message.getRepeatedField(e, t)),
            null != n ? t.splice(n, 0, r) : t.push(r),
            e
          );
        }),
        goog.exportProperty(
          jspb.Message,
          "addToRepeatedField",
          jspb.Message.addToRepeatedField,
        ),
        (jspb.Message.setOneofField = function (e, t, r, n) {
          return (
            jspb.asserts.assertInstanceof(e, jspb.Message),
            (r = jspb.Message.computeOneofCase(e, r)) &&
              r !== t &&
              void 0 !== n &&
              (e.wrappers_ && r in e.wrappers_ && (e.wrappers_[r] = void 0),
              jspb.Message.setField(e, r, void 0)),
            jspb.Message.setField(e, t, n)
          );
        }),
        goog.exportProperty(
          jspb.Message,
          "setOneofField",
          jspb.Message.setOneofField,
        ),
        (jspb.Message.computeOneofCase = function (e, t) {
          for (var r, n, o = 0; o < t.length; o++) {
            var i = t[o],
              a = jspb.Message.getField(e, i);
            null != a &&
              ((r = i), (n = a), jspb.Message.setField(e, i, void 0));
          }
          return r ? (jspb.Message.setField(e, r, n), r) : 0;
        }),
        goog.exportProperty(
          jspb.Message,
          "computeOneofCase",
          jspb.Message.computeOneofCase,
        ),
        (jspb.Message.getWrapperField = function (e, t, r, n) {
          if ((e.wrappers_ || (e.wrappers_ = {}), !e.wrappers_[r])) {
            var o = jspb.Message.getField(e, r);
            (n || o) && (e.wrappers_[r] = new t(o));
          }
          return e.wrappers_[r];
        }),
        goog.exportProperty(
          jspb.Message,
          "getWrapperField",
          jspb.Message.getWrapperField,
        ),
        (jspb.Message.getRepeatedWrapperField = function (e, t, r) {
          return (
            jspb.Message.wrapRepeatedField_(e, t, r),
            (t = e.wrappers_[r]) == jspb.Message.EMPTY_LIST_SENTINEL_ &&
              (t = e.wrappers_[r] = []),
            t
          );
        }),
        goog.exportProperty(
          jspb.Message,
          "getRepeatedWrapperField",
          jspb.Message.getRepeatedWrapperField,
        ),
        (jspb.Message.wrapRepeatedField_ = function (e, t, r) {
          if ((e.wrappers_ || (e.wrappers_ = {}), !e.wrappers_[r])) {
            for (
              var n = jspb.Message.getRepeatedField(e, r), o = [], i = 0;
              i < n.length;
              i++
            )
              o[i] = new t(n[i]);
            e.wrappers_[r] = o;
          }
        }),
        (jspb.Message.setWrapperField = function (e, t, r) {
          jspb.asserts.assertInstanceof(e, jspb.Message),
            e.wrappers_ || (e.wrappers_ = {});
          var n = r ? r.toArray() : r;
          return (e.wrappers_[t] = r), jspb.Message.setField(e, t, n);
        }),
        goog.exportProperty(
          jspb.Message,
          "setWrapperField",
          jspb.Message.setWrapperField,
        ),
        (jspb.Message.setOneofWrapperField = function (e, t, r, n) {
          jspb.asserts.assertInstanceof(e, jspb.Message),
            e.wrappers_ || (e.wrappers_ = {});
          var o = n ? n.toArray() : n;
          return (e.wrappers_[t] = n), jspb.Message.setOneofField(e, t, r, o);
        }),
        goog.exportProperty(
          jspb.Message,
          "setOneofWrapperField",
          jspb.Message.setOneofWrapperField,
        ),
        (jspb.Message.setRepeatedWrapperField = function (e, t, r) {
          jspb.asserts.assertInstanceof(e, jspb.Message),
            e.wrappers_ || (e.wrappers_ = {}),
            (r = r || []);
          for (var n = [], o = 0; o < r.length; o++) n[o] = r[o].toArray();
          return (e.wrappers_[t] = r), jspb.Message.setField(e, t, n);
        }),
        goog.exportProperty(
          jspb.Message,
          "setRepeatedWrapperField",
          jspb.Message.setRepeatedWrapperField,
        ),
        (jspb.Message.addToRepeatedWrapperField = function (e, t, r, n, o) {
          jspb.Message.wrapRepeatedField_(e, n, t);
          var i = e.wrappers_[t];
          return (
            i || (i = e.wrappers_[t] = []),
            (r = r || new n()),
            (e = jspb.Message.getRepeatedField(e, t)),
            null != o
              ? (i.splice(o, 0, r), e.splice(o, 0, r.toArray()))
              : (i.push(r), e.push(r.toArray())),
            r
          );
        }),
        goog.exportProperty(
          jspb.Message,
          "addToRepeatedWrapperField",
          jspb.Message.addToRepeatedWrapperField,
        ),
        (jspb.Message.toMap = function (e, t, r, n) {
          for (var o = {}, i = 0; i < e.length; i++)
            o[t.call(e[i])] = r ? r.call(e[i], n, e[i]) : e[i];
          return o;
        }),
        goog.exportProperty(jspb.Message, "toMap", jspb.Message.toMap),
        (jspb.Message.prototype.syncMapFields_ = function () {
          if (this.wrappers_)
            for (var e in this.wrappers_) {
              var t = this.wrappers_[e];
              if (Array.isArray(t))
                for (var r = 0; r < t.length; r++) t[r] && t[r].toArray();
              else t && t.toArray();
            }
        }),
        (jspb.Message.prototype.toArray = function () {
          return this.syncMapFields_(), this.array;
        }),
        goog.exportProperty(
          jspb.Message.prototype,
          "toArray",
          jspb.Message.prototype.toArray,
        ),
        jspb.Message.GENERATE_TO_STRING &&
          (jspb.Message.prototype.toString = function () {
            return this.syncMapFields_(), this.array.toString();
          }),
        (jspb.Message.prototype.getExtension = function (e) {
          if (this.extensionObject_) {
            this.wrappers_ || (this.wrappers_ = {});
            var t = e.fieldIndex;
            if (e.isRepeated) {
              if (e.isMessageType())
                return (
                  this.wrappers_[t] ||
                    (this.wrappers_[t] = goog.array.map(
                      this.extensionObject_[t] || [],
                      function (t) {
                        return new e.ctor(t);
                      },
                    )),
                  this.wrappers_[t]
                );
            } else if (e.isMessageType())
              return (
                !this.wrappers_[t] &&
                  this.extensionObject_[t] &&
                  (this.wrappers_[t] = new e.ctor(this.extensionObject_[t])),
                this.wrappers_[t]
              );
            return this.extensionObject_[t];
          }
        }),
        goog.exportProperty(
          jspb.Message.prototype,
          "getExtension",
          jspb.Message.prototype.getExtension,
        ),
        (jspb.Message.prototype.setExtension = function (e, t) {
          this.wrappers_ || (this.wrappers_ = {}),
            jspb.Message.maybeInitEmptyExtensionObject_(this);
          var r = e.fieldIndex;
          return (
            e.isRepeated
              ? ((t = t || []),
                e.isMessageType()
                  ? ((this.wrappers_[r] = t),
                    (this.extensionObject_[r] = goog.array.map(t, function (e) {
                      return e.toArray();
                    })))
                  : (this.extensionObject_[r] = t))
              : e.isMessageType()
                ? ((this.wrappers_[r] = t),
                  (this.extensionObject_[r] = t ? t.toArray() : t))
                : (this.extensionObject_[r] = t),
            this
          );
        }),
        goog.exportProperty(
          jspb.Message.prototype,
          "setExtension",
          jspb.Message.prototype.setExtension,
        ),
        (jspb.Message.difference = function (e, t) {
          if (!(e instanceof t.constructor))
            throw Error("Messages have different types.");
          var r = e.toArray();
          t = t.toArray();
          var n = [],
            o = 0,
            i = r.length > t.length ? r.length : t.length;
          for (
            e.getJsPbMessageId() && ((n[0] = e.getJsPbMessageId()), (o = 1));
            o < i;
            o++
          )
            jspb.Message.compareFields(r[o], t[o]) || (n[o] = t[o]);
          return new e.constructor(n);
        }),
        goog.exportProperty(
          jspb.Message,
          "difference",
          jspb.Message.difference,
        ),
        (jspb.Message.equals = function (e, t) {
          return (
            e == t ||
            (!(!e || !t) &&
              e instanceof t.constructor &&
              jspb.Message.compareFields(e.toArray(), t.toArray()))
          );
        }),
        goog.exportProperty(jspb.Message, "equals", jspb.Message.equals),
        (jspb.Message.compareExtensions = function (e, t) {
          (e = e || {}), (t = t || {});
          var r,
            n = {};
          for (r in e) n[r] = 0;
          for (r in t) n[r] = 0;
          for (r in n) if (!jspb.Message.compareFields(e[r], t[r])) return !1;
          return !0;
        }),
        goog.exportProperty(
          jspb.Message,
          "compareExtensions",
          jspb.Message.compareExtensions,
        ),
        (jspb.Message.compareFields = function (e, t) {
          if (e == t) return !0;
          if (!goog.isObject(e) || !goog.isObject(t))
            return (
              !!(
                ("number" == typeof e && isNaN(e)) ||
                ("number" == typeof t && isNaN(t))
              ) && String(e) == String(t)
            );
          if (e.constructor != t.constructor) return !1;
          if (
            jspb.Message.SUPPORTS_UINT8ARRAY_ &&
            e.constructor === Uint8Array
          ) {
            if (e.length != t.length) return !1;
            for (var r = 0; r < e.length; r++) if (e[r] != t[r]) return !1;
            return !0;
          }
          if (e.constructor === Array) {
            var n = void 0,
              o = void 0,
              i = Math.max(e.length, t.length);
            for (r = 0; r < i; r++) {
              var a = e[r],
                s = t[r];
              if (
                (a &&
                  a.constructor == Object &&
                  (jspb.asserts.assert(void 0 === n),
                  jspb.asserts.assert(r === e.length - 1),
                  (n = a),
                  (a = void 0)),
                s &&
                  s.constructor == Object &&
                  (jspb.asserts.assert(void 0 === o),
                  jspb.asserts.assert(r === t.length - 1),
                  (o = s),
                  (s = void 0)),
                !jspb.Message.compareFields(a, s))
              )
                return !1;
            }
            return (
              (!n && !o) ||
              ((n = n || {}),
              (o = o || {}),
              jspb.Message.compareExtensions(n, o))
            );
          }
          if (e.constructor === Object)
            return jspb.Message.compareExtensions(e, t);
          throw Error("Invalid type in JSPB array");
        }),
        goog.exportProperty(
          jspb.Message,
          "compareFields",
          jspb.Message.compareFields,
        ),
        (jspb.Message.prototype.cloneMessage = function () {
          return jspb.Message.cloneMessage(this);
        }),
        goog.exportProperty(
          jspb.Message.prototype,
          "cloneMessage",
          jspb.Message.prototype.cloneMessage,
        ),
        (jspb.Message.prototype.clone = function () {
          return jspb.Message.cloneMessage(this);
        }),
        goog.exportProperty(
          jspb.Message.prototype,
          "clone",
          jspb.Message.prototype.clone,
        ),
        (jspb.Message.clone = function (e) {
          return jspb.Message.cloneMessage(e);
        }),
        goog.exportProperty(jspb.Message, "clone", jspb.Message.clone),
        (jspb.Message.cloneMessage = function (e) {
          return new e.constructor(jspb.Message.clone_(e.toArray()));
        }),
        (jspb.Message.copyInto = function (e, t) {
          jspb.asserts.assertInstanceof(e, jspb.Message),
            jspb.asserts.assertInstanceof(t, jspb.Message),
            jspb.asserts.assert(
              e.constructor == t.constructor,
              "Copy source and target message should have the same type.",
            ),
            (e = jspb.Message.clone(e));
          for (
            var r = t.toArray(), n = e.toArray(), o = (r.length = 0);
            o < n.length;
            o++
          )
            r[o] = n[o];
          (t.wrappers_ = e.wrappers_),
            (t.extensionObject_ = e.extensionObject_);
        }),
        goog.exportProperty(jspb.Message, "copyInto", jspb.Message.copyInto),
        (jspb.Message.clone_ = function (e) {
          if (Array.isArray(e)) {
            for (var t = Array(e.length), r = 0; r < e.length; r++) {
              var n = e[r];
              null != n &&
                (t[r] =
                  "object" == typeof n
                    ? jspb.Message.clone_(jspb.asserts.assert(n))
                    : n);
            }
            return t;
          }
          if (jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array)
            return new Uint8Array(e);
          for (r in ((t = {}), e))
            null != (n = e[r]) &&
              (t[r] =
                "object" == typeof n
                  ? jspb.Message.clone_(jspb.asserts.assert(n))
                  : n);
          return t;
        }),
        (jspb.Message.registerMessageType = function (e, t) {
          t.messageId = e;
        }),
        goog.exportProperty(
          jspb.Message,
          "registerMessageType",
          jspb.Message.registerMessageType,
        ),
        (jspb.Message.messageSetExtensions = {}),
        (jspb.Message.messageSetExtensionsBinary = {}),
        (jspb.Export = {}),
        "object" == typeof exports &&
          ((exports.Map = jspb.Map),
          (exports.Message = jspb.Message),
          (exports.BinaryReader = jspb.BinaryReader),
          (exports.BinaryWriter = jspb.BinaryWriter),
          (exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo),
          (exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo),
          (exports.exportSymbol = goog.exportSymbol),
          (exports.inherits = goog.inherits),
          (exports.object = { extend: goog.object.extend }),
          (exports.typeOf = goog.typeOf));
    },
    3288: (e, t, r) => {
      "use strict";
      r.d(t, { PA: () => L });
      var n = r(4947),
        o = r(626);
      if (!o.useState)
        throw new Error("mobx-react-lite requires React with Hooks support");
      if (!n.Gn)
        throw new Error(
          "mobx-react-lite@3 requires mobx at least version 6 to be available",
        );
      var i = r(2739);
      function a(e) {
        e();
      }
      function s(e) {
        return (0, n.yl)(e);
      }
      var l = !1;
      function u() {
        return l;
      }
      var g = (function () {
          function e(e) {
            var t = this;
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
                value: function (e) {
                  void 0 === e && (e = 1e4),
                    clearTimeout(t.sweepTimeout),
                    (t.sweepTimeout = void 0);
                  var r = Date.now();
                  t.registrations.forEach(function (n, o) {
                    r - n.registeredAt >= e &&
                      (t.finalize(n.value), t.registrations.delete(o));
                  }),
                    t.registrations.size > 0 && t.scheduleSweep();
                },
              }),
              Object.defineProperty(this, "finalizeAllImmediately", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  t.sweep(0);
                },
              });
          }
          return (
            Object.defineProperty(e.prototype, "register", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r) {
                this.registrations.set(r, {
                  value: t,
                  registeredAt: Date.now(),
                }),
                  this.scheduleSweep();
              },
            }),
            Object.defineProperty(e.prototype, "unregister", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                this.registrations.delete(e);
              },
            }),
            Object.defineProperty(e.prototype, "scheduleSweep", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                void 0 === this.sweepTimeout &&
                  (this.sweepTimeout = setTimeout(this.sweep, 1e4));
              },
            }),
            e
          );
        })(),
        c = new (
          "undefined" != typeof FinalizationRegistry ? FinalizationRegistry : g
        )(function (e) {
          var t;
          null === (t = e.reaction) || void 0 === t || t.dispose(),
            (e.reaction = null);
        }),
        p = r(1702),
        f = function () {};
      function d(e) {
        e.reaction = new n.qT("observer".concat(e.name), function () {
          var t;
          (e.stateVersion = Symbol()),
            null === (t = e.onStoreChange) || void 0 === t || t.call(e);
        });
      }
      function h(e, t) {
        if ((void 0 === t && (t = "observed"), u())) return e();
        var r = o.useRef(null);
        if (!r.current) {
          var n = {
            reaction: null,
            onStoreChange: null,
            stateVersion: Symbol(),
            name: t,
            subscribe: function (e) {
              return (
                c.unregister(n),
                (n.onStoreChange = e),
                n.reaction || (d(n), (n.stateVersion = Symbol())),
                function () {
                  var e;
                  (n.onStoreChange = null),
                    null === (e = n.reaction) || void 0 === e || e.dispose(),
                    (n.reaction = null);
                }
              );
            },
            getSnapshot: function () {
              return n.stateVersion;
            },
          };
          r.current = n;
        }
        var i,
          a,
          l = r.current;
        if (
          (l.reaction || (d(l), c.register(r, l, l)),
          o.useDebugValue(l.reaction, s),
          (0, p.useSyncExternalStore)(l.subscribe, l.getSnapshot, f),
          l.reaction.track(function () {
            try {
              i = e();
            } catch (e) {
              a = e;
            }
          }),
          a)
        )
          throw a;
        return i;
      }
      var y = "function" == typeof Symbol && Symbol.for,
        b = y
          ? Symbol.for("react.forward_ref")
          : "function" == typeof o.forwardRef &&
            (0, o.forwardRef)(function (e) {
              return null;
            }).$$typeof,
        m = y
          ? Symbol.for("react.memo")
          : "function" == typeof o.memo &&
            (0, o.memo)(function (e) {
              return null;
            }).$$typeof;
      function _(e, t) {
        var r;
        if (m && e.$$typeof === m)
          throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
          );
        if (u()) return e;
        var n =
            null !== (r = null == t ? void 0 : t.forwardRef) &&
            void 0 !== r &&
            r,
          i = e,
          a = e.displayName || e.name;
        if (
          b &&
          e.$$typeof === b &&
          ((n = !0), "function" != typeof (i = e.render))
        )
          throw new Error(
            "[mobx-react-lite] `render` property of ForwardRef was not a function",
          );
        var s,
          l,
          g = function (e, t) {
            return h(function () {
              return i(e, t);
            }, a);
          };
        return (
          (g.displayName = e.displayName),
          Object.defineProperty(g, "name", {
            value: e.name,
            writable: !0,
            configurable: !0,
          }),
          e.contextTypes && (g.contextTypes = e.contextTypes),
          n && (g = (0, o.forwardRef)(g)),
          (g = (0, o.memo)(g)),
          (s = e),
          (l = g),
          Object.keys(s).forEach(function (e) {
            v[e] ||
              Object.defineProperty(
                l,
                e,
                Object.getOwnPropertyDescriptor(s, e),
              );
          }),
          g
        );
      }
      var v = {
        $$typeof: !0,
        render: !0,
        compare: !0,
        type: !0,
        displayName: !0,
      };
      var S, E;
      (E = i.unstable_batchedUpdates) || (E = a),
        (0, n.jK)({ reactionScheduler: E });
      S = c.finalizeAllImmediately;
      function T(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      }
      var A = Symbol("patchMixins"),
        w = Symbol("patchedDefinition");
      function j(e, t) {
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
      function O(e, t) {
        return function () {
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          j.call.apply(j, [this, e, t].concat(n));
        };
      }
      function R(e, t, r) {
        var n = (function (e, t) {
          var r = (e[A] = e[A] || {}),
            n = (r[t] = r[t] || {});
          return (n.locks = n.locks || 0), (n.methods = n.methods || []), n;
        })(e, t);
        n.methods.indexOf(r) < 0 && n.methods.push(r);
        var o = Object.getOwnPropertyDescriptor(e, t);
        if (!o || !o[w]) {
          var i = e[t],
            a = C(e, t, o ? o.enumerable : void 0, n, i);
          Object.defineProperty(e, t, a);
        }
      }
      function C(e, t, r, n, o) {
        var i,
          a = O(o, n);
        return (
          ((i = {})[w] = !0),
          (i.get = function () {
            return a;
          }),
          (i.set = function (o) {
            if (this === e) a = O(o, n);
            else {
              var i = C(this, t, r, n, o);
              Object.defineProperty(this, t, i);
            }
          }),
          (i.configurable = !0),
          (i.enumerable = r),
          i
        );
      }
      var N = Symbol("ObserverAdministration"),
        P = Symbol("isMobXReactObserver");
      function I(e) {
        var t;
        return null != (t = e[N])
          ? t
          : (e[N] = {
              reaction: null,
              mounted: !1,
              reactionInvalidatedBeforeMount: !1,
              forceUpdate: null,
              name: x(e.constructor),
              state: void 0,
              props: void 0,
              context: void 0,
            });
      }
      function x(e) {
        return e.displayName || e.name || "<component>";
      }
      function k(e) {
        var t = e.bind(this),
          r = I(this);
        return function () {
          r.reaction ||
            ((r.reaction = (function (e) {
              return new n.qT(e.name + ".render()", function () {
                if (e.mounted)
                  try {
                    null == e.forceUpdate || e.forceUpdate();
                  } catch (r) {
                    var t;
                    null == (t = e.reaction) || t.dispose(),
                      (e.reaction = null);
                  }
                else e.reactionInvalidatedBeforeMount = !0;
              });
            })(r)),
            r.mounted || c.register(this, r, this));
          var e = void 0,
            o = void 0;
          if (
            (r.reaction.track(function () {
              try {
                o = (0, n.vx)(!1, t);
              } catch (t) {
                e = t;
              }
            }),
            e)
          )
            throw e;
          return o;
        };
      }
      function M(e, t) {
        return (
          u() &&
            console.warn(
              "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.",
            ),
          this.state !== t ||
            !(function (e, t) {
              if (T(e, t)) return !0;
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
                if (
                  !Object.hasOwnProperty.call(t, r[o]) ||
                  !T(e[r[o]], t[r[o]])
                )
                  return !1;
              return !0;
            })(this.props, e)
        );
      }
      function L(e, t) {
        if (t && "class" !== t.kind)
          throw new Error(
            "The @observer decorator can be used on classes only",
          );
        return (
          !0 === e.isMobxInjector &&
            console.warn(
              "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
            ),
          Object.prototype.isPrototypeOf.call(o.Component, e) ||
          Object.prototype.isPrototypeOf.call(o.PureComponent, e)
            ? (function (e) {
                var t = e.prototype;
                if (e[P]) {
                  var r = x(e);
                  throw new Error(
                    "The provided component class (" +
                      r +
                      ") has already been declared as an observer component.",
                  );
                }
                if (((e[P] = !0), t.componentWillReact))
                  throw new Error(
                    "The componentWillReact life-cycle event is no longer supported",
                  );
                if (e.__proto__ !== o.PureComponent)
                  if (t.shouldComponentUpdate) {
                    if (t.shouldComponentUpdate !== M)
                      throw new Error(
                        "It is not allowed to use shouldComponentUpdate in observer based components.",
                      );
                  } else t.shouldComponentUpdate = M;
                var n = t.render;
                if ("function" != typeof n) {
                  var i = x(e);
                  throw new Error(
                    "[mobx-react] class component (" +
                      i +
                      ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
                  );
                }
                t.render = function () {
                  return (
                    Object.defineProperty(this, "render", {
                      configurable: !1,
                      writable: !1,
                      value: u() ? n : k.call(this, n),
                    }),
                    this.render()
                  );
                };
                var a = t.componentDidMount;
                return (
                  (t.componentDidMount = function () {
                    var e = this,
                      t = I(this);
                    return (
                      (t.mounted = !0),
                      c.unregister(this),
                      (t.forceUpdate = function () {
                        return e.forceUpdate();
                      }),
                      (t.reaction && !t.reactionInvalidatedBeforeMount) ||
                        t.forceUpdate(),
                      null == a ? void 0 : a.apply(this, arguments)
                    );
                  }),
                  R(t, "componentWillUnmount", function () {
                    var e;
                    if (!u()) {
                      var t = I(this);
                      null == (e = t.reaction) || e.dispose(),
                        (t.reaction = null),
                        (t.forceUpdate = null),
                        (t.mounted = !1),
                        (t.reactionInvalidatedBeforeMount = !1);
                    }
                  }),
                  e
                );
              })(e)
            : _(e)
        );
      }
      o.version.split(".")[0];
      if (!o.Component)
        throw new Error("mobx-react requires React to be available");
      if (!n.sH) throw new Error("mobx-react requires mobx to be available");
    },
    4947: (e, t, r) => {
      "use strict";
      r.d(t, {
        EW: () => Be,
        Fq: () => Nr,
        Gn: () => mr,
        O8: () => at,
        OB: () => Kr,
        XI: () => Ut,
        jK: () => Xt,
        qT: () => Tt,
        sH: () => Me,
        uz: () => Mr,
        vx: () => Ye,
        yl: () => Zt,
      });
      function n(e) {
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        throw new Error(
          "number" == typeof e
            ? "[MobX] minified error nr: " +
                e +
                (r.length ? " " + r.map(String).join(",") : "") +
                ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
            : "[MobX] " + e,
        );
      }
      var o = {};
      function i() {
        return "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
            ? window
            : void 0 !== r.g
              ? r.g
              : "undefined" != typeof self
                ? self
                : o;
      }
      var a = Object.assign,
        s = Object.getOwnPropertyDescriptor,
        l = Object.defineProperty,
        u = Object.prototype,
        g = [];
      Object.freeze(g);
      var c = {};
      Object.freeze(c);
      var p = "undefined" != typeof Proxy,
        f = Object.toString();
      function d() {
        p || n("Proxy not available");
      }
      function h(e) {
        var t = !1;
        return function () {
          if (!t) return (t = !0), e.apply(this, arguments);
        };
      }
      var y = function () {};
      function b(e) {
        return "function" == typeof e;
      }
      function m(e) {
        switch (typeof e) {
          case "string":
          case "symbol":
          case "number":
            return !0;
        }
        return !1;
      }
      function _(e) {
        return null !== e && "object" == typeof e;
      }
      function v(e) {
        if (!_(e)) return !1;
        var t = Object.getPrototypeOf(e);
        if (null == t) return !0;
        var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
        return "function" == typeof r && r.toString() === f;
      }
      function S(e) {
        var t = null == e ? void 0 : e.constructor;
        return (
          !!t &&
          ("GeneratorFunction" === t.name ||
            "GeneratorFunction" === t.displayName)
        );
      }
      function E(e, t, r) {
        l(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
      }
      function T(e, t, r) {
        l(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
      }
      function A(e, t) {
        var r = "isMobX" + e;
        return (
          (t.prototype[r] = !0),
          function (e) {
            return _(e) && !0 === e[r];
          }
        );
      }
      function w(e) {
        return (
          null != e && "[object Map]" === Object.prototype.toString.call(e)
        );
      }
      function j(e) {
        return (
          null != e && "[object Set]" === Object.prototype.toString.call(e)
        );
      }
      var O = void 0 !== Object.getOwnPropertySymbols;
      var R =
        "undefined" != typeof Reflect && Reflect.ownKeys
          ? Reflect.ownKeys
          : O
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e),
                );
              }
            : Object.getOwnPropertyNames;
      function C(e) {
        return null === e ? null : "object" == typeof e ? "" + e : e;
      }
      function N(e, t) {
        return u.hasOwnProperty.call(e, t);
      }
      var P =
        Object.getOwnPropertyDescriptors ||
        function (e) {
          var t = {};
          return (
            R(e).forEach(function (r) {
              t[r] = s(e, r);
            }),
            t
          );
        };
      function I(e, t) {
        return !!(e & t);
      }
      function x(e, t, r) {
        return r ? (e |= t) : (e &= ~t), e;
      }
      function k(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function M(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, W(n.key), n);
        }
      }
      function L(e, t, r) {
        return (
          t && M(e.prototype, t),
          r && M(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function U(e, t) {
        var r =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (r) return (r = r.call(e)).next.bind(r);
        if (
          Array.isArray(e) ||
          (r = (function (e, t) {
            if (e) {
              if ("string" == typeof e) return k(e, t);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? k(e, t)
                    : void 0
              );
            }
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          r && (e = r);
          var n = 0;
          return function () {
            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }
      function D() {
        return (
          (D = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          D.apply(null, arguments)
        );
      }
      function B(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          F(e, t);
      }
      function F(e, t) {
        return (
          (F = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          F(e, t)
        );
      }
      function W(e) {
        var t = (function (e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : t + "";
      }
      var H = Symbol("mobx-stored-annotations");
      function V(e) {
        return Object.assign(function (t, r) {
          if (G(r)) return e.decorate_20223_(t, r);
          z(t, r, e);
        }, e);
      }
      function z(e, t, r) {
        N(e, H) || E(e, H, D({}, e[H])),
          (function (e) {
            return e.annotationType_ === J;
          })(r) || (e[H][t] = r);
      }
      function G(e) {
        return "object" == typeof e && "string" == typeof e.kind;
      }
      var Y = Symbol("mobx administration"),
        K = (function () {
          function e(e) {
            void 0 === e && (e = "Atom"),
              (this.name_ = void 0),
              (this.flags_ = 0),
              (this.observers_ = new Set()),
              (this.lastAccessedBy_ = 0),
              (this.lowestObserverState_ = Qe.NOT_TRACKING_),
              (this.onBOL = void 0),
              (this.onBUOL = void 0),
              (this.name_ = e);
          }
          var t = e.prototype;
          return (
            (t.onBO = function () {
              this.onBOL &&
                this.onBOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.onBUO = function () {
              this.onBUOL &&
                this.onBUOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.reportObserved = function () {
              return St(this);
            }),
            (t.reportChanged = function () {
              _t(), Et(this), vt();
            }),
            (t.toString = function () {
              return this.name_;
            }),
            L(e, [
              {
                key: "isBeingObserved",
                get: function () {
                  return I(this.flags_, e.isBeingObservedMask_);
                },
                set: function (t) {
                  this.flags_ = x(this.flags_, e.isBeingObservedMask_, t);
                },
              },
              {
                key: "isPendingUnobservation",
                get: function () {
                  return I(this.flags_, e.isPendingUnobservationMask_);
                },
                set: function (t) {
                  this.flags_ = x(
                    this.flags_,
                    e.isPendingUnobservationMask_,
                    t,
                  );
                },
              },
              {
                key: "diffValue",
                get: function () {
                  return I(this.flags_, e.diffValueMask_) ? 1 : 0;
                },
                set: function (t) {
                  this.flags_ = x(this.flags_, e.diffValueMask_, 1 === t);
                },
              },
            ])
          );
        })();
      (K.isBeingObservedMask_ = 1),
        (K.isPendingUnobservationMask_ = 2),
        (K.diffValueMask_ = 4);
      var $ = A("Atom", K);
      function q(e, t, r) {
        void 0 === t && (t = y), void 0 === r && (r = y);
        var n,
          o = new K(e);
        return t !== y && Yt(Vt, o, t, n), r !== y && Gt(o, r), o;
      }
      var X = {
        identity: function (e, t) {
          return e === t;
        },
        structural: function (e, t) {
          return dn(e, t);
        },
        default: function (e, t) {
          return Object.is
            ? Object.is(e, t)
            : e === t
              ? 0 !== e || 1 / e == 1 / t
              : e != e && t != t;
        },
        shallow: function (e, t) {
          return dn(e, t, 1);
        },
      };
      function Q(e, t, r) {
        return lr(e)
          ? e
          : Array.isArray(e)
            ? Me.array(e, { name: r })
            : v(e)
              ? Me.object(e, void 0, { name: r })
              : w(e)
                ? Me.map(e, { name: r })
                : j(e)
                  ? Me.set(e, { name: r })
                  : "function" != typeof e || Bt(e) || ar(e)
                    ? e
                    : S(e)
                      ? or(e)
                      : Dt(r, e);
      }
      function Z(e) {
        return e;
      }
      var J = "override";
      function ee(e, t) {
        return {
          annotationType_: e,
          options_: t,
          make_: te,
          extend_: re,
          decorate_20223_: ne,
        };
      }
      function te(e, t, r, n) {
        var o;
        if (null != (o = this.options_) && o.bound)
          return null === this.extend_(e, t, r, !1) ? 0 : 1;
        if (n === e.target_) return null === this.extend_(e, t, r, !1) ? 0 : 2;
        if (Bt(r.value)) return 1;
        var i = oe(e, this, t, r, !1);
        return l(n, t, i), 2;
      }
      function re(e, t, r, n) {
        var o = oe(e, this, t, r);
        return e.defineProperty_(t, o, n);
      }
      function ne(e, t) {
        var r,
          o = t.kind,
          i = t.name,
          a = t.addInitializer,
          s = this,
          l = function (e) {
            var t, r, n, o;
            return ze(
              null != (t = null == (r = s.options_) ? void 0 : r.name)
                ? t
                : i.toString(),
              e,
              null != (n = null == (o = s.options_) ? void 0 : o.autoAction) &&
                n,
            );
          };
        return "field" == o
          ? function (e) {
              var t,
                r = e;
              return (
                Bt(r) || (r = l(r)),
                null != (t = s.options_) &&
                  t.bound &&
                  ((r = r.bind(this)).isMobxAction = !0),
                r
              );
            }
          : "method" == o
            ? (Bt(e) || (e = l(e)),
              null != (r = this.options_) &&
                r.bound &&
                a(function () {
                  var e = this,
                    t = e[i].bind(e);
                  (t.isMobxAction = !0), (e[i] = t);
                }),
              e)
            : void n(
                "Cannot apply '" +
                  s.annotationType_ +
                  "' to '" +
                  String(i) +
                  "' (kind: " +
                  o +
                  "):\n'" +
                  s.annotationType_ +
                  "' can only be used on properties with a function value.",
              );
      }
      function oe(e, t, r, n, o) {
        var i, a, s, l, u, g, c, p;
        void 0 === o && (o = ht.safeDescriptors),
          (p = n),
          t.annotationType_,
          p.value;
        var f,
          d = n.value;
        null != (i = t.options_) &&
          i.bound &&
          (d = d.bind(null != (f = e.proxy_) ? f : e.target_));
        return {
          value: ze(
            null != (a = null == (s = t.options_) ? void 0 : s.name)
              ? a
              : r.toString(),
            d,
            null != (l = null == (u = t.options_) ? void 0 : u.autoAction) && l,
            null != (g = t.options_) && g.bound
              ? null != (c = e.proxy_)
                ? c
                : e.target_
              : void 0,
          ),
          configurable: !o || e.isPlainObject_,
          enumerable: !1,
          writable: !o,
        };
      }
      function ie(e, t) {
        return {
          annotationType_: e,
          options_: t,
          make_: ae,
          extend_: se,
          decorate_20223_: le,
        };
      }
      function ae(e, t, r, n) {
        var o;
        if (n === e.target_) return null === this.extend_(e, t, r, !1) ? 0 : 2;
        if (
          null != (o = this.options_) &&
          o.bound &&
          (!N(e.target_, t) || !ar(e.target_[t])) &&
          null === this.extend_(e, t, r, !1)
        )
          return 0;
        if (ar(r.value)) return 1;
        var i = ue(e, this, t, r, !1, !1);
        return l(n, t, i), 2;
      }
      function se(e, t, r, n) {
        var o,
          i = ue(e, this, t, r, null == (o = this.options_) ? void 0 : o.bound);
        return e.defineProperty_(t, i, n);
      }
      function le(e, t) {
        var r;
        var n = t.name,
          o = t.addInitializer;
        return (
          ar(e) || (e = or(e)),
          null != (r = this.options_) &&
            r.bound &&
            o(function () {
              var e = this,
                t = e[n].bind(e);
              (t.isMobXFlow = !0), (e[n] = t);
            }),
          e
        );
      }
      function ue(e, t, r, n, o, i) {
        var a;
        void 0 === i && (i = ht.safeDescriptors),
          (a = n),
          t.annotationType_,
          a.value;
        var s,
          l = n.value;
        (ar(l) || (l = or(l)), o) &&
          ((l = l.bind(null != (s = e.proxy_) ? s : e.target_)).isMobXFlow =
            !0);
        return {
          value: l,
          configurable: !i || e.isPlainObject_,
          enumerable: !1,
          writable: !i,
        };
      }
      function ge(e, t) {
        return {
          annotationType_: e,
          options_: t,
          make_: ce,
          extend_: pe,
          decorate_20223_: fe,
        };
      }
      function ce(e, t, r) {
        return null === this.extend_(e, t, r, !1) ? 0 : 1;
      }
      function pe(e, t, r, n) {
        return (
          (function (e, t, r, n) {
            t.annotationType_, n.get;
            0;
          })(0, this, 0, r),
          e.defineComputedProperty_(
            t,
            D({}, this.options_, { get: r.get, set: r.set }),
            n,
          )
        );
      }
      function fe(e, t) {
        var r = this,
          n = t.name;
        return (
          (0, t.addInitializer)(function () {
            var t = zr(this)[Y],
              o = D({}, r.options_, { get: e, context: this });
            o.name || (o.name = "ObservableObject." + n.toString()),
              t.values_.set(n, new Xe(o));
          }),
          function () {
            return this[Y].getObservablePropValue_(n);
          }
        );
      }
      function de(e, t) {
        return {
          annotationType_: e,
          options_: t,
          make_: he,
          extend_: ye,
          decorate_20223_: be,
        };
      }
      function he(e, t, r) {
        return null === this.extend_(e, t, r, !1) ? 0 : 1;
      }
      function ye(e, t, r, n) {
        var o, i;
        return (
          (function (e, t, r, n) {
            t.annotationType_;
            0;
          })(0, this),
          e.defineObservableProperty_(
            t,
            r.value,
            null != (o = null == (i = this.options_) ? void 0 : i.enhancer)
              ? o
              : Q,
            n,
          )
        );
      }
      function be(e, t) {
        var r = this,
          n = t.kind,
          o = t.name,
          i = new WeakSet();
        function a(e, t) {
          var n,
            a,
            s = zr(e)[Y],
            l = new qe(
              t,
              null != (n = null == (a = r.options_) ? void 0 : a.enhancer)
                ? n
                : Q,
              "ObservableObject." + o.toString(),
              !1,
            );
          s.values_.set(o, l), i.add(e);
        }
        if ("accessor" == n)
          return {
            get: function () {
              return (
                i.has(this) || a(this, e.get.call(this)),
                this[Y].getObservablePropValue_(o)
              );
            },
            set: function (e) {
              return (
                i.has(this) || a(this, e), this[Y].setObservablePropValue_(o, e)
              );
            },
            init: function (e) {
              return i.has(this) || a(this, e), e;
            },
          };
      }
      var me = "true",
        _e = ve();
      function ve(e) {
        return {
          annotationType_: me,
          options_: e,
          make_: Se,
          extend_: Ee,
          decorate_20223_: Te,
        };
      }
      function Se(e, t, r, n) {
        var o, i, a, s;
        if (r.get) return Be.make_(e, t, r, n);
        if (r.set) {
          var u = Bt(r.set) ? r.set : ze(t.toString(), r.set);
          return n === e.target_
            ? null ===
              e.defineProperty_(t, {
                configurable: !ht.safeDescriptors || e.isPlainObject_,
                set: u,
              })
              ? 0
              : 2
            : (l(n, t, { configurable: !0, set: u }), 2);
        }
        if (n !== e.target_ && "function" == typeof r.value)
          return S(r.value)
            ? (null != (s = this.options_) && s.autoBind ? or.bound : or).make_(
                e,
                t,
                r,
                n,
              )
            : (null != (a = this.options_) && a.autoBind ? Dt.bound : Dt).make_(
                e,
                t,
                r,
                n,
              );
        var g,
          c =
            !1 === (null == (o = this.options_) ? void 0 : o.deep)
              ? Me.ref
              : Me;
        "function" == typeof r.value &&
          null != (i = this.options_) &&
          i.autoBind &&
          (r.value = r.value.bind(null != (g = e.proxy_) ? g : e.target_));
        return c.make_(e, t, r, n);
      }
      function Ee(e, t, r, n) {
        var o, i, a;
        if (r.get) return Be.extend_(e, t, r, n);
        if (r.set)
          return e.defineProperty_(
            t,
            {
              configurable: !ht.safeDescriptors || e.isPlainObject_,
              set: ze(t.toString(), r.set),
            },
            n,
          );
        "function" == typeof r.value &&
          null != (o = this.options_) &&
          o.autoBind &&
          (r.value = r.value.bind(null != (a = e.proxy_) ? a : e.target_));
        return (
          !1 === (null == (i = this.options_) ? void 0 : i.deep) ? Me.ref : Me
        ).extend_(e, t, r, n);
      }
      function Te(e, t) {
        n("'" + this.annotationType_ + "' cannot be used as a decorator");
      }
      var Ae = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
      function we(e) {
        return e || Ae;
      }
      Object.freeze(Ae);
      var je = de("observable"),
        Oe = de("observable.ref", { enhancer: Z }),
        Re = de("observable.shallow", {
          enhancer: function (e, t, r) {
            return null == e || Kr(e) || Nr(e) || Mr(e) || Br(e)
              ? e
              : Array.isArray(e)
                ? Me.array(e, { name: r, deep: !1 })
                : v(e)
                  ? Me.object(e, void 0, { name: r, deep: !1 })
                  : w(e)
                    ? Me.map(e, { name: r, deep: !1 })
                    : j(e)
                      ? Me.set(e, { name: r, deep: !1 })
                      : void 0;
          },
        }),
        Ce = de("observable.struct", {
          enhancer: function (e, t) {
            return dn(e, t) ? t : e;
          },
        }),
        Ne = V(je);
      function Pe(e) {
        return !0 === e.deep
          ? Q
          : !1 === e.deep
            ? Z
            : (t = e.defaultDecorator) &&
                null != (r = null == (n = t.options_) ? void 0 : n.enhancer)
              ? r
              : Q;
        var t, r, n;
      }
      function Ie(e, t, r) {
        return G(t)
          ? je.decorate_20223_(e, t)
          : m(t)
            ? void z(e, t, je)
            : lr(e)
              ? e
              : v(e)
                ? Me.object(e, t, r)
                : Array.isArray(e)
                  ? Me.array(e, t)
                  : w(e)
                    ? Me.map(e, t)
                    : j(e)
                      ? Me.set(e, t)
                      : "object" == typeof e && null !== e
                        ? e
                        : Me.box(e, t);
      }
      a(Ie, Ne);
      var xe,
        ke,
        Me = a(Ie, {
          box: function (e, t) {
            var r = we(t);
            return new qe(e, Pe(r), r.name, !0, r.equals);
          },
          array: function (e, t) {
            var r = we(t);
            return (!1 === ht.useProxies || !1 === r.proxy ? sn : Tr)(
              e,
              Pe(r),
              r.name,
            );
          },
          map: function (e, t) {
            var r = we(t);
            return new kr(e, Pe(r), r.name);
          },
          set: function (e, t) {
            var r = we(t);
            return new Dr(e, Pe(r), r.name);
          },
          object: function (e, t, r) {
            return cn(function () {
              return Qt(
                !1 === ht.useProxies || !1 === (null == r ? void 0 : r.proxy)
                  ? zr({}, r)
                  : (function (e, t) {
                      var r, n;
                      return (
                        d(),
                        (e = zr(e, t)),
                        null != (n = (r = e[Y]).proxy_)
                          ? n
                          : (r.proxy_ = new Proxy(e, cr))
                      );
                    })({}, r),
                e,
                t,
              );
            });
          },
          ref: V(Oe),
          shallow: V(Re),
          deep: Ne,
          struct: V(Ce),
        }),
        Le = "computed",
        Ue = ge(Le),
        De = ge("computed.struct", { equals: X.structural }),
        Be = function (e, t) {
          if (G(t)) return Ue.decorate_20223_(e, t);
          if (m(t)) return z(e, t, Ue);
          if (v(e)) return V(ge(Le, e));
          var r = v(t) ? t : {};
          return (r.get = e), r.name || (r.name = e.name || ""), new Xe(r);
        };
      Object.assign(Be, Ue), (Be.struct = V(De));
      var Fe = 0,
        We = 1,
        He =
          null !=
            (xe =
              null == (ke = s(function () {}, "name"))
                ? void 0
                : ke.configurable) && xe,
        Ve = {
          value: "action",
          configurable: !0,
          writable: !1,
          enumerable: !1,
        };
      function ze(e, t, r, n) {
        function o() {
          return Ge(e, r, t, n || this, arguments);
        }
        return (
          void 0 === r && (r = !1),
          (o.isMobxAction = !0),
          (o.toString = function () {
            return t.toString();
          }),
          He && ((Ve.value = e), l(o, "name", Ve)),
          o
        );
      }
      function Ge(e, t, r, o, i) {
        var a = (function (e, t, r, n) {
          var o = !1,
            i = 0;
          0;
          var a = ht.trackingDerivation,
            s = !t || !a;
          _t();
          var l = ht.allowStateChanges;
          s && (st(), (l = Ke(!0)));
          var u = ut(!0),
            g = {
              runAsAction_: s,
              prevDerivation_: a,
              prevAllowStateChanges_: l,
              prevAllowStateReads_: u,
              notifySpy_: o,
              startTime_: i,
              actionId_: We++,
              parentActionId_: Fe,
            };
          return (Fe = g.actionId_), g;
        })(0, t);
        try {
          return r.apply(o, i);
        } catch (e) {
          throw ((a.error_ = e), e);
        } finally {
          !(function (e) {
            Fe !== e.actionId_ && n(30);
            (Fe = e.parentActionId_),
              void 0 !== e.error_ && (ht.suppressReactionErrors = !0);
            $e(e.prevAllowStateChanges_),
              gt(e.prevAllowStateReads_),
              vt(),
              e.runAsAction_ && lt(e.prevDerivation_);
            0;
            ht.suppressReactionErrors = !1;
          })(a);
        }
      }
      function Ye(e, t) {
        var r = Ke(e);
        try {
          return t();
        } finally {
          $e(r);
        }
      }
      function Ke(e) {
        var t = ht.allowStateChanges;
        return (ht.allowStateChanges = e), t;
      }
      function $e(e) {
        ht.allowStateChanges = e;
      }
      var qe = (function (e) {
          function t(t, r, n, o, i) {
            var a;
            return (
              void 0 === n && (n = "ObservableValue"),
              void 0 === o && (o = !0),
              void 0 === i && (i = X.default),
              ((a = e.call(this, n) || this).enhancer = void 0),
              (a.name_ = void 0),
              (a.equals = void 0),
              (a.hasUnreportedChange_ = !1),
              (a.interceptors_ = void 0),
              (a.changeListeners_ = void 0),
              (a.value_ = void 0),
              (a.dehancer = void 0),
              (a.enhancer = r),
              (a.name_ = n),
              (a.equals = i),
              (a.value_ = r(t, void 0, n)),
              a
            );
          }
          B(t, e);
          var r = t.prototype;
          return (
            (r.dehanceValue = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (r.set = function (e) {
              this.value_;
              if ((e = this.prepareNewValue_(e)) !== ht.UNCHANGED) {
                0, this.setNewValue_(e);
              }
            }),
            (r.prepareNewValue_ = function (e) {
              if ((nt(this), pr(this))) {
                var t = dr(this, { object: this, type: vr, newValue: e });
                if (!t) return ht.UNCHANGED;
                e = t.newValue;
              }
              return (
                (e = this.enhancer(e, this.value_, this.name_)),
                this.equals(this.value_, e) ? ht.UNCHANGED : e
              );
            }),
            (r.setNewValue_ = function (e) {
              var t = this.value_;
              (this.value_ = e),
                this.reportChanged(),
                hr(this) &&
                  br(this, {
                    type: vr,
                    object: this,
                    newValue: e,
                    oldValue: t,
                  });
            }),
            (r.get = function () {
              return this.reportObserved(), this.dehanceValue(this.value_);
            }),
            (r.intercept_ = function (e) {
              return fr(this, e);
            }),
            (r.observe_ = function (e, t) {
              return (
                t &&
                  e({
                    observableKind: "value",
                    debugObjectName: this.name_,
                    object: this,
                    type: vr,
                    newValue: this.value_,
                    oldValue: void 0,
                  }),
                yr(this, e)
              );
            }),
            (r.raw = function () {
              return this.value_;
            }),
            (r.toJSON = function () {
              return this.get();
            }),
            (r.toString = function () {
              return this.name_ + "[" + this.value_ + "]";
            }),
            (r.valueOf = function () {
              return C(this.get());
            }),
            (r[Symbol.toPrimitive] = function () {
              return this.valueOf();
            }),
            t
          );
        })(K),
        Xe = (function () {
          function e(e) {
            (this.dependenciesState_ = Qe.NOT_TRACKING_),
              (this.observing_ = []),
              (this.newObserving_ = null),
              (this.observers_ = new Set()),
              (this.runId_ = 0),
              (this.lastAccessedBy_ = 0),
              (this.lowestObserverState_ = Qe.UP_TO_DATE_),
              (this.unboundDepsCount_ = 0),
              (this.value_ = new et(null)),
              (this.name_ = void 0),
              (this.triggeredBy_ = void 0),
              (this.flags_ = 0),
              (this.derivation = void 0),
              (this.setter_ = void 0),
              (this.isTracing_ = Ze.NONE),
              (this.scope_ = void 0),
              (this.equals_ = void 0),
              (this.requiresReaction_ = void 0),
              (this.keepAlive_ = void 0),
              (this.onBOL = void 0),
              (this.onBUOL = void 0),
              e.get || n(31),
              (this.derivation = e.get),
              (this.name_ = e.name || "ComputedValue"),
              e.set && (this.setter_ = ze("ComputedValue-setter", e.set)),
              (this.equals_ =
                e.equals ||
                (e.compareStructural || e.struct ? X.structural : X.default)),
              (this.scope_ = e.context),
              (this.requiresReaction_ = e.requiresReaction),
              (this.keepAlive_ = !!e.keepAlive);
          }
          var t = e.prototype;
          return (
            (t.onBecomeStale_ = function () {
              !(function (e) {
                if (e.lowestObserverState_ !== Qe.UP_TO_DATE_) return;
                (e.lowestObserverState_ = Qe.POSSIBLY_STALE_),
                  e.observers_.forEach(function (e) {
                    e.dependenciesState_ === Qe.UP_TO_DATE_ &&
                      ((e.dependenciesState_ = Qe.POSSIBLY_STALE_),
                      e.onBecomeStale_());
                  });
              })(this);
            }),
            (t.onBO = function () {
              this.onBOL &&
                this.onBOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.onBUO = function () {
              this.onBUOL &&
                this.onBUOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.get = function () {
              if (
                (this.isComputing && n(32, this.name_, this.derivation),
                0 !== ht.inBatch ||
                  0 !== this.observers_.size ||
                  this.keepAlive_)
              ) {
                if ((St(this), rt(this))) {
                  var e = ht.trackingContext;
                  this.keepAlive_ && !e && (ht.trackingContext = this),
                    this.trackAndCompute() &&
                      (function (e) {
                        if (e.lowestObserverState_ === Qe.STALE_) return;
                        (e.lowestObserverState_ = Qe.STALE_),
                          e.observers_.forEach(function (t) {
                            t.dependenciesState_ === Qe.POSSIBLY_STALE_
                              ? (t.dependenciesState_ = Qe.STALE_)
                              : t.dependenciesState_ === Qe.UP_TO_DATE_ &&
                                (e.lowestObserverState_ = Qe.UP_TO_DATE_);
                          });
                      })(this),
                    (ht.trackingContext = e);
                }
              } else
                rt(this) &&
                  (this.warnAboutUntrackedRead_(),
                  _t(),
                  (this.value_ = this.computeValue_(!1)),
                  vt());
              var t = this.value_;
              if (tt(t)) throw t.cause;
              return t;
            }),
            (t.set = function (e) {
              if (this.setter_) {
                this.isRunningSetter && n(33, this.name_),
                  (this.isRunningSetter = !0);
                try {
                  this.setter_.call(this.scope_, e);
                } finally {
                  this.isRunningSetter = !1;
                }
              } else n(34, this.name_);
            }),
            (t.trackAndCompute = function () {
              var e = this.value_,
                t = this.dependenciesState_ === Qe.NOT_TRACKING_,
                r = this.computeValue_(!0),
                n = t || tt(e) || tt(r) || !this.equals_(e, r);
              return n && (this.value_ = r), n;
            }),
            (t.computeValue_ = function (e) {
              this.isComputing = !0;
              var t,
                r = Ke(!1);
              if (e) t = ot(this, this.derivation, this.scope_);
              else if (!0 === ht.disableErrorBoundaries)
                t = this.derivation.call(this.scope_);
              else
                try {
                  t = this.derivation.call(this.scope_);
                } catch (e) {
                  t = new et(e);
                }
              return $e(r), (this.isComputing = !1), t;
            }),
            (t.suspend_ = function () {
              this.keepAlive_ || (it(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
              var r = this,
                n = !0,
                o = void 0;
              return Ft(function () {
                var i = r.get();
                if (!n || t) {
                  var a = st();
                  e({
                    observableKind: "computed",
                    debugObjectName: r.name_,
                    type: vr,
                    object: r,
                    newValue: i,
                    oldValue: o,
                  }),
                    lt(a);
                }
                (n = !1), (o = i);
              });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
              return this.name_ + "[" + this.derivation.toString() + "]";
            }),
            (t.valueOf = function () {
              return C(this.get());
            }),
            (t[Symbol.toPrimitive] = function () {
              return this.valueOf();
            }),
            L(e, [
              {
                key: "isComputing",
                get: function () {
                  return I(this.flags_, e.isComputingMask_);
                },
                set: function (t) {
                  this.flags_ = x(this.flags_, e.isComputingMask_, t);
                },
              },
              {
                key: "isRunningSetter",
                get: function () {
                  return I(this.flags_, e.isRunningSetterMask_);
                },
                set: function (t) {
                  this.flags_ = x(this.flags_, e.isRunningSetterMask_, t);
                },
              },
              {
                key: "isBeingObserved",
                get: function () {
                  return I(this.flags_, e.isBeingObservedMask_);
                },
                set: function (t) {
                  this.flags_ = x(this.flags_, e.isBeingObservedMask_, t);
                },
              },
              {
                key: "isPendingUnobservation",
                get: function () {
                  return I(this.flags_, e.isPendingUnobservationMask_);
                },
                set: function (t) {
                  this.flags_ = x(
                    this.flags_,
                    e.isPendingUnobservationMask_,
                    t,
                  );
                },
              },
              {
                key: "diffValue",
                get: function () {
                  return I(this.flags_, e.diffValueMask_) ? 1 : 0;
                },
                set: function (t) {
                  this.flags_ = x(this.flags_, e.diffValueMask_, 1 === t);
                },
              },
            ])
          );
        })();
      (Xe.isComputingMask_ = 1),
        (Xe.isRunningSetterMask_ = 2),
        (Xe.isBeingObservedMask_ = 4),
        (Xe.isPendingUnobservationMask_ = 8),
        (Xe.diffValueMask_ = 16);
      var Qe,
        Ze,
        Je = A("ComputedValue", Xe);
      !(function (e) {
        (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
          (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
          (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
          (e[(e.STALE_ = 2)] = "STALE_");
      })(Qe || (Qe = {})),
        (function (e) {
          (e[(e.NONE = 0)] = "NONE"),
            (e[(e.LOG = 1)] = "LOG"),
            (e[(e.BREAK = 2)] = "BREAK");
        })(Ze || (Ze = {}));
      var et = function (e) {
        (this.cause = void 0), (this.cause = e);
      };
      function tt(e) {
        return e instanceof et;
      }
      function rt(e) {
        switch (e.dependenciesState_) {
          case Qe.UP_TO_DATE_:
            return !1;
          case Qe.NOT_TRACKING_:
          case Qe.STALE_:
            return !0;
          case Qe.POSSIBLY_STALE_:
            for (
              var t = ut(!0), r = st(), n = e.observing_, o = n.length, i = 0;
              i < o;
              i++
            ) {
              var a = n[i];
              if (Je(a)) {
                if (ht.disableErrorBoundaries) a.get();
                else
                  try {
                    a.get();
                  } catch (e) {
                    return lt(r), gt(t), !0;
                  }
                if (e.dependenciesState_ === Qe.STALE_) return lt(r), gt(t), !0;
              }
            }
            return ct(e), lt(r), gt(t), !1;
        }
      }
      function nt(e) {}
      function ot(e, t, r) {
        var n = ut(!0);
        ct(e),
          (e.newObserving_ = new Array(
            0 === e.runId_ ? 100 : e.observing_.length,
          )),
          (e.unboundDepsCount_ = 0),
          (e.runId_ = ++ht.runId);
        var o,
          i = ht.trackingDerivation;
        if (
          ((ht.trackingDerivation = e),
          ht.inBatch++,
          !0 === ht.disableErrorBoundaries)
        )
          o = t.call(r);
        else
          try {
            o = t.call(r);
          } catch (e) {
            o = new et(e);
          }
        return (
          ht.inBatch--,
          (ht.trackingDerivation = i),
          (function (e) {
            for (
              var t = e.observing_,
                r = (e.observing_ = e.newObserving_),
                n = Qe.UP_TO_DATE_,
                o = 0,
                i = e.unboundDepsCount_,
                a = 0;
              a < i;
              a++
            ) {
              var s = r[a];
              0 === s.diffValue &&
                ((s.diffValue = 1), o !== a && (r[o] = s), o++),
                s.dependenciesState_ > n && (n = s.dependenciesState_);
            }
            (r.length = o), (e.newObserving_ = null), (i = t.length);
            for (; i--; ) {
              var l = t[i];
              0 === l.diffValue && bt(l, e), (l.diffValue = 0);
            }
            for (; o--; ) {
              var u = r[o];
              1 === u.diffValue && ((u.diffValue = 0), yt(u, e));
            }
            n !== Qe.UP_TO_DATE_ &&
              ((e.dependenciesState_ = n), e.onBecomeStale_());
          })(e),
          gt(n),
          o
        );
      }
      function it(e) {
        var t = e.observing_;
        e.observing_ = [];
        for (var r = t.length; r--; ) bt(t[r], e);
        e.dependenciesState_ = Qe.NOT_TRACKING_;
      }
      function at(e) {
        var t = st();
        try {
          return e();
        } finally {
          lt(t);
        }
      }
      function st() {
        var e = ht.trackingDerivation;
        return (ht.trackingDerivation = null), e;
      }
      function lt(e) {
        ht.trackingDerivation = e;
      }
      function ut(e) {
        var t = ht.allowStateReads;
        return (ht.allowStateReads = e), t;
      }
      function gt(e) {
        ht.allowStateReads = e;
      }
      function ct(e) {
        if (e.dependenciesState_ !== Qe.UP_TO_DATE_) {
          e.dependenciesState_ = Qe.UP_TO_DATE_;
          for (var t = e.observing_, r = t.length; r--; )
            t[r].lowestObserverState_ = Qe.UP_TO_DATE_;
        }
      }
      var pt = function () {
          (this.version = 6),
            (this.UNCHANGED = {}),
            (this.trackingDerivation = null),
            (this.trackingContext = null),
            (this.runId = 0),
            (this.mobxGuid = 0),
            (this.inBatch = 0),
            (this.pendingUnobservations = []),
            (this.pendingReactions = []),
            (this.isRunningReactions = !1),
            (this.allowStateChanges = !1),
            (this.allowStateReads = !0),
            (this.enforceActions = !0),
            (this.spyListeners = []),
            (this.globalReactionErrorHandlers = []),
            (this.computedRequiresReaction = !1),
            (this.reactionRequiresObservable = !1),
            (this.observableRequiresReaction = !1),
            (this.disableErrorBoundaries = !1),
            (this.suppressReactionErrors = !1),
            (this.useProxies = !0),
            (this.verifyProxies = !1),
            (this.safeDescriptors = !0);
        },
        ft = !0,
        dt = !1,
        ht = (function () {
          var e = i();
          return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ft = !1),
            e.__mobxGlobals &&
              e.__mobxGlobals.version !== new pt().version &&
              (ft = !1),
            ft
              ? e.__mobxGlobals
                ? ((e.__mobxInstanceCount += 1),
                  e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                  e.__mobxGlobals)
                : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new pt()))
              : (setTimeout(function () {
                  dt || n(35);
                }, 1),
                new pt())
          );
        })();
      function yt(e, t) {
        e.observers_.add(t),
          e.lowestObserverState_ > t.dependenciesState_ &&
            (e.lowestObserverState_ = t.dependenciesState_);
      }
      function bt(e, t) {
        e.observers_.delete(t), 0 === e.observers_.size && mt(e);
      }
      function mt(e) {
        !1 === e.isPendingUnobservation &&
          ((e.isPendingUnobservation = !0), ht.pendingUnobservations.push(e));
      }
      function _t() {
        ht.inBatch++;
      }
      function vt() {
        if (0 == --ht.inBatch) {
          jt();
          for (var e = ht.pendingUnobservations, t = 0; t < e.length; t++) {
            var r = e[t];
            (r.isPendingUnobservation = !1),
              0 === r.observers_.size &&
                (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
                r instanceof Xe && r.suspend_());
          }
          ht.pendingUnobservations = [];
        }
      }
      function St(e) {
        var t = ht.trackingDerivation;
        return null !== t
          ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved &&
                ht.trackingContext &&
                ((e.isBeingObserved = !0), e.onBO())),
            e.isBeingObserved)
          : (0 === e.observers_.size && ht.inBatch > 0 && mt(e), !1);
      }
      function Et(e) {
        e.lowestObserverState_ !== Qe.STALE_ &&
          ((e.lowestObserverState_ = Qe.STALE_),
          e.observers_.forEach(function (e) {
            e.dependenciesState_ === Qe.UP_TO_DATE_ && e.onBecomeStale_(),
              (e.dependenciesState_ = Qe.STALE_);
          }));
      }
      var Tt = (function () {
        function e(e, t, r, n) {
          void 0 === e && (e = "Reaction"),
            (this.name_ = void 0),
            (this.onInvalidate_ = void 0),
            (this.errorHandler_ = void 0),
            (this.requiresObservable_ = void 0),
            (this.observing_ = []),
            (this.newObserving_ = []),
            (this.dependenciesState_ = Qe.NOT_TRACKING_),
            (this.runId_ = 0),
            (this.unboundDepsCount_ = 0),
            (this.flags_ = 0),
            (this.isTracing_ = Ze.NONE),
            (this.name_ = e),
            (this.onInvalidate_ = t),
            (this.errorHandler_ = r),
            (this.requiresObservable_ = n);
        }
        var t = e.prototype;
        return (
          (t.onBecomeStale_ = function () {
            this.schedule_();
          }),
          (t.schedule_ = function () {
            this.isScheduled ||
              ((this.isScheduled = !0), ht.pendingReactions.push(this), jt());
          }),
          (t.runReaction_ = function () {
            if (!this.isDisposed) {
              _t(), (this.isScheduled = !1);
              var e = ht.trackingContext;
              if (((ht.trackingContext = this), rt(this))) {
                this.isTrackPending = !0;
                try {
                  this.onInvalidate_();
                } catch (e) {
                  this.reportExceptionInDerivation_(e);
                }
              }
              (ht.trackingContext = e), vt();
            }
          }),
          (t.track = function (e) {
            if (!this.isDisposed) {
              _t();
              0, (this.isRunning = !0);
              var t = ht.trackingContext;
              ht.trackingContext = this;
              var r = ot(this, e, void 0);
              (ht.trackingContext = t),
                (this.isRunning = !1),
                (this.isTrackPending = !1),
                this.isDisposed && it(this),
                tt(r) && this.reportExceptionInDerivation_(r.cause),
                vt();
            }
          }),
          (t.reportExceptionInDerivation_ = function (e) {
            var t = this;
            if (this.errorHandler_) this.errorHandler_(e, this);
            else {
              if (ht.disableErrorBoundaries) throw e;
              var r = "[mobx] uncaught error in '" + this + "'";
              ht.suppressReactionErrors || console.error(r, e),
                ht.globalReactionErrorHandlers.forEach(function (r) {
                  return r(e, t);
                });
            }
          }),
          (t.dispose = function () {
            this.isDisposed ||
              ((this.isDisposed = !0),
              this.isRunning || (_t(), it(this), vt()));
          }),
          (t.getDisposer_ = function (e) {
            var t = this,
              r = function r() {
                t.dispose(),
                  null == e ||
                    null == e.removeEventListener ||
                    e.removeEventListener("abort", r);
              };
            return (
              null == e ||
                null == e.addEventListener ||
                e.addEventListener("abort", r),
              (r[Y] = this),
              "dispose" in Symbol &&
                "symbol" == typeof Symbol.dispose &&
                (r[Symbol.dispose] = r),
              r
            );
          }),
          (t.toString = function () {
            return "Reaction[" + this.name_ + "]";
          }),
          (t.trace = function (e) {
            void 0 === e && (e = !1);
          }),
          L(e, [
            {
              key: "isDisposed",
              get: function () {
                return I(this.flags_, e.isDisposedMask_);
              },
              set: function (t) {
                this.flags_ = x(this.flags_, e.isDisposedMask_, t);
              },
            },
            {
              key: "isScheduled",
              get: function () {
                return I(this.flags_, e.isScheduledMask_);
              },
              set: function (t) {
                this.flags_ = x(this.flags_, e.isScheduledMask_, t);
              },
            },
            {
              key: "isTrackPending",
              get: function () {
                return I(this.flags_, e.isTrackPendingMask_);
              },
              set: function (t) {
                this.flags_ = x(this.flags_, e.isTrackPendingMask_, t);
              },
            },
            {
              key: "isRunning",
              get: function () {
                return I(this.flags_, e.isRunningMask_);
              },
              set: function (t) {
                this.flags_ = x(this.flags_, e.isRunningMask_, t);
              },
            },
            {
              key: "diffValue",
              get: function () {
                return I(this.flags_, e.diffValueMask_) ? 1 : 0;
              },
              set: function (t) {
                this.flags_ = x(this.flags_, e.diffValueMask_, 1 === t);
              },
            },
          ])
        );
      })();
      (Tt.isDisposedMask_ = 1),
        (Tt.isScheduledMask_ = 2),
        (Tt.isTrackPendingMask_ = 4),
        (Tt.isRunningMask_ = 8),
        (Tt.diffValueMask_ = 16);
      var At = 100,
        wt = function (e) {
          return e();
        };
      function jt() {
        ht.inBatch > 0 || ht.isRunningReactions || wt(Ot);
      }
      function Ot() {
        ht.isRunningReactions = !0;
        for (var e = ht.pendingReactions, t = 0; e.length > 0; ) {
          ++t === At &&
            (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
          for (var r = e.splice(0), n = 0, o = r.length; n < o; n++)
            r[n].runReaction_();
        }
        ht.isRunningReactions = !1;
      }
      var Rt = A("Reaction", Tt);
      var Ct = "action",
        Nt = "autoAction",
        Pt = "<unnamed action>",
        It = ee(Ct),
        xt = ee("action.bound", { bound: !0 }),
        kt = ee(Nt, { autoAction: !0 }),
        Mt = ee("autoAction.bound", { autoAction: !0, bound: !0 });
      function Lt(e) {
        return function (t, r) {
          return b(t)
            ? ze(t.name || Pt, t, e)
            : b(r)
              ? ze(t, r, e)
              : G(r)
                ? (e ? kt : It).decorate_20223_(t, r)
                : m(r)
                  ? z(t, r, e ? kt : It)
                  : m(t)
                    ? V(ee(e ? Nt : Ct, { name: t, autoAction: e }))
                    : void 0;
        };
      }
      var Ut = Lt(!1);
      Object.assign(Ut, It);
      var Dt = Lt(!0);
      function Bt(e) {
        return b(e) && !0 === e.isMobxAction;
      }
      function Ft(e, t) {
        var r, n, o, i;
        void 0 === t && (t = c);
        var a,
          s = null != (r = null == (n = t) ? void 0 : n.name) ? r : "Autorun";
        if (!t.scheduler && !t.delay)
          a = new Tt(
            s,
            function () {
              this.track(g);
            },
            t.onError,
            t.requiresObservable,
          );
        else {
          var l = Ht(t),
            u = !1;
          a = new Tt(
            s,
            function () {
              u ||
                ((u = !0),
                l(function () {
                  (u = !1), a.isDisposed || a.track(g);
                }));
            },
            t.onError,
            t.requiresObservable,
          );
        }
        function g() {
          e(a);
        }
        return (
          (null != (o = t) && null != (o = o.signal) && o.aborted) ||
            a.schedule_(),
          a.getDisposer_(null == (i = t) ? void 0 : i.signal)
        );
      }
      Object.assign(Dt, kt), (Ut.bound = V(xt)), (Dt.bound = V(Mt));
      var Wt = function (e) {
        return e();
      };
      function Ht(e) {
        return e.scheduler
          ? e.scheduler
          : e.delay
            ? function (t) {
                return setTimeout(t, e.delay);
              }
            : Wt;
      }
      var Vt = "onBO",
        zt = "onBUO";
      function Gt(e, t, r) {
        return Yt(zt, e, t, r);
      }
      function Yt(e, t, r, n) {
        var o = "function" == typeof n ? ln(t, r) : ln(t),
          i = b(n) ? n : r,
          a = e + "L";
        return (
          o[a] ? o[a].add(i) : (o[a] = new Set([i])),
          function () {
            var e = o[a];
            e && (e.delete(i), 0 === e.size && delete o[a]);
          }
        );
      }
      var Kt = "never",
        $t = "always",
        qt = "observed";
      function Xt(e) {
        !0 === e.isolateGlobalState &&
          (function () {
            if (
              ((ht.pendingReactions.length ||
                ht.inBatch ||
                ht.isRunningReactions) &&
                n(36),
              (dt = !0),
              ft)
            ) {
              var e = i();
              0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0),
                (ht = new pt());
            }
          })();
        var t,
          r,
          o = e.useProxies,
          a = e.enforceActions;
        if (
          (void 0 !== o &&
            (ht.useProxies =
              o === $t || (o !== Kt && "undefined" != typeof Proxy)),
          "ifavailable" === o && (ht.verifyProxies = !0),
          void 0 !== a)
        ) {
          var s = a === $t ? $t : a === qt;
          (ht.enforceActions = s),
            (ht.allowStateChanges = !0 !== s && s !== $t);
        }
        [
          "computedRequiresReaction",
          "reactionRequiresObservable",
          "observableRequiresReaction",
          "disableErrorBoundaries",
          "safeDescriptors",
        ].forEach(function (t) {
          t in e && (ht[t] = !!e[t]);
        }),
          (ht.allowStateReads = !ht.observableRequiresReaction),
          e.reactionScheduler &&
            ((t = e.reactionScheduler),
            (r = wt),
            (wt = function (e) {
              return t(function () {
                return r(e);
              });
            }));
      }
      function Qt(e, t, r, n) {
        var o = P(t);
        return (
          cn(function () {
            var t = zr(e, n)[Y];
            R(o).forEach(function (e) {
              t.extend_(e, o[e], !r || !(e in r) || r[e]);
            });
          }),
          e
        );
      }
      function Zt(e, t) {
        return Jt(ln(e, t));
      }
      function Jt(e) {
        var t,
          r = { name: e.name_ };
        return (
          e.observing_ &&
            e.observing_.length > 0 &&
            (r.dependencies = ((t = e.observing_), Array.from(new Set(t))).map(
              Jt,
            )),
          r
        );
      }
      var er = 0;
      function tr() {
        this.message = "FLOW_CANCELLED";
      }
      tr.prototype = Object.create(Error.prototype);
      var rr = ie("flow"),
        nr = ie("flow.bound", { bound: !0 }),
        or = Object.assign(function (e, t) {
          if (G(t)) return rr.decorate_20223_(e, t);
          if (m(t)) return z(e, t, rr);
          var r = e,
            n = r.name || "<unnamed flow>",
            o = function () {
              var e,
                t = arguments,
                o = ++er,
                i = Ut(n + " - runid: " + o + " - init", r).apply(this, t),
                a = void 0,
                s = new Promise(function (t, r) {
                  var s = 0;
                  function l(e) {
                    var t;
                    a = void 0;
                    try {
                      t = Ut(
                        n + " - runid: " + o + " - yield " + s++,
                        i.next,
                      ).call(i, e);
                    } catch (e) {
                      return r(e);
                    }
                    g(t);
                  }
                  function u(e) {
                    var t;
                    a = void 0;
                    try {
                      t = Ut(
                        n + " - runid: " + o + " - yield " + s++,
                        i.throw,
                      ).call(i, e);
                    } catch (e) {
                      return r(e);
                    }
                    g(t);
                  }
                  function g(e) {
                    if (!b(null == e ? void 0 : e.then))
                      return e.done
                        ? t(e.value)
                        : (a = Promise.resolve(e.value)).then(l, u);
                    e.then(g, r);
                  }
                  (e = r), l(void 0);
                });
              return (
                (s.cancel = Ut(n + " - runid: " + o + " - cancel", function () {
                  try {
                    a && ir(a);
                    var t = i.return(void 0),
                      r = Promise.resolve(t.value);
                    r.then(y, y), ir(r), e(new tr());
                  } catch (t) {
                    e(t);
                  }
                })),
                s
              );
            };
          return (o.isMobXFlow = !0), o;
        }, rr);
      function ir(e) {
        b(e.cancel) && e.cancel();
      }
      function ar(e) {
        return !0 === (null == e ? void 0 : e.isMobXFlow);
      }
      function sr(e, t) {
        return (
          !!e &&
          (void 0 !== t
            ? !!Kr(e) && e[Y].values_.has(t)
            : Kr(e) || !!e[Y] || $(e) || Rt(e) || Je(e))
        );
      }
      function lr(e) {
        return sr(e);
      }
      function ur(e, t) {
        void 0 === t && (t = void 0), _t();
        try {
          return e.apply(t);
        } finally {
          vt();
        }
      }
      function gr(e) {
        return e[Y];
      }
      or.bound = V(nr);
      var cr = {
        has: function (e, t) {
          return gr(e).has_(t);
        },
        get: function (e, t) {
          return gr(e).get_(t);
        },
        set: function (e, t, r) {
          var n;
          return !!m(t) && (null == (n = gr(e).set_(t, r, !0)) || n);
        },
        deleteProperty: function (e, t) {
          var r;
          return !!m(t) && (null == (r = gr(e).delete_(t, !0)) || r);
        },
        defineProperty: function (e, t, r) {
          var n;
          return null == (n = gr(e).defineProperty_(t, r)) || n;
        },
        ownKeys: function (e) {
          return gr(e).ownKeys_();
        },
        preventExtensions: function (e) {
          n(13);
        },
      };
      function pr(e) {
        return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
      }
      function fr(e, t) {
        var r = e.interceptors_ || (e.interceptors_ = []);
        return (
          r.push(t),
          h(function () {
            var e = r.indexOf(t);
            -1 !== e && r.splice(e, 1);
          })
        );
      }
      function dr(e, t) {
        var r = st();
        try {
          for (
            var o = [].concat(e.interceptors_ || []), i = 0, a = o.length;
            i < a && ((t = o[i](t)) && !t.type && n(14), t);
            i++
          );
          return t;
        } finally {
          lt(r);
        }
      }
      function hr(e) {
        return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
      }
      function yr(e, t) {
        var r = e.changeListeners_ || (e.changeListeners_ = []);
        return (
          r.push(t),
          h(function () {
            var e = r.indexOf(t);
            -1 !== e && r.splice(e, 1);
          })
        );
      }
      function br(e, t) {
        var r = st(),
          n = e.changeListeners_;
        if (n) {
          for (var o = 0, i = (n = n.slice()).length; o < i; o++) n[o](t);
          lt(r);
        }
      }
      function mr(e, t, r) {
        return (
          cn(function () {
            var n = zr(e, r)[Y];
            null != t ||
              (t = (function (e) {
                return N(e, H) || E(e, H, D({}, e[H])), e[H];
              })(e)),
              R(t).forEach(function (e) {
                return n.make_(e, t[e]);
              });
          }),
          e
        );
      }
      var _r = "splice",
        vr = "update",
        Sr = {
          get: function (e, t) {
            var r = e[Y];
            return t === Y
              ? r
              : "length" === t
                ? r.getArrayLength_()
                : "string" != typeof t || isNaN(t)
                  ? N(Ar, t)
                    ? Ar[t]
                    : e[t]
                  : r.get_(parseInt(t));
          },
          set: function (e, t, r) {
            var n = e[Y];
            return (
              "length" === t && n.setArrayLength_(r),
              "symbol" == typeof t || isNaN(t)
                ? (e[t] = r)
                : n.set_(parseInt(t), r),
              !0
            );
          },
          preventExtensions: function () {
            n(15);
          },
        },
        Er = (function () {
          function e(e, t, r, n) {
            void 0 === e && (e = "ObservableArray"),
              (this.owned_ = void 0),
              (this.legacyMode_ = void 0),
              (this.atom_ = void 0),
              (this.values_ = []),
              (this.interceptors_ = void 0),
              (this.changeListeners_ = void 0),
              (this.enhancer_ = void 0),
              (this.dehancer = void 0),
              (this.proxy_ = void 0),
              (this.lastKnownLength_ = 0),
              (this.owned_ = r),
              (this.legacyMode_ = n),
              (this.atom_ = new K(e)),
              (this.enhancer_ = function (e, r) {
                return t(e, r, "ObservableArray[..]");
              });
          }
          var t = e.prototype;
          return (
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.dehanceValues_ = function (e) {
              return void 0 !== this.dehancer && e.length > 0
                ? e.map(this.dehancer)
                : e;
            }),
            (t.intercept_ = function (e) {
              return fr(this, e);
            }),
            (t.observe_ = function (e, t) {
              return (
                void 0 === t && (t = !1),
                t &&
                  e({
                    observableKind: "array",
                    object: this.proxy_,
                    debugObjectName: this.atom_.name_,
                    type: "splice",
                    index: 0,
                    added: this.values_.slice(),
                    addedCount: this.values_.length,
                    removed: [],
                    removedCount: 0,
                  }),
                yr(this, e)
              );
            }),
            (t.getArrayLength_ = function () {
              return this.atom_.reportObserved(), this.values_.length;
            }),
            (t.setArrayLength_ = function (e) {
              ("number" != typeof e || isNaN(e) || e < 0) &&
                n("Out of range: " + e);
              var t = this.values_.length;
              if (e !== t)
                if (e > t) {
                  for (var r = new Array(e - t), o = 0; o < e - t; o++)
                    r[o] = void 0;
                  this.spliceWithArray_(t, 0, r);
                } else this.spliceWithArray_(e, t - e);
            }),
            (t.updateArrayLength_ = function (e, t) {
              e !== this.lastKnownLength_ && n(16),
                (this.lastKnownLength_ += t),
                this.legacyMode_ && t > 0 && an(e + t + 1);
            }),
            (t.spliceWithArray_ = function (e, t, r) {
              var n = this;
              this.atom_;
              var o = this.values_.length;
              if (
                (void 0 === e
                  ? (e = 0)
                  : e > o
                    ? (e = o)
                    : e < 0 && (e = Math.max(0, o + e)),
                (t =
                  1 === arguments.length
                    ? o - e
                    : null == t
                      ? 0
                      : Math.max(0, Math.min(t, o - e))),
                void 0 === r && (r = g),
                pr(this))
              ) {
                var i = dr(this, {
                  object: this.proxy_,
                  type: _r,
                  index: e,
                  removedCount: t,
                  added: r,
                });
                if (!i) return g;
                (t = i.removedCount), (r = i.added);
              }
              if (
                ((r =
                  0 === r.length
                    ? r
                    : r.map(function (e) {
                        return n.enhancer_(e, void 0);
                      })),
                this.legacyMode_)
              ) {
                var a = r.length - t;
                this.updateArrayLength_(o, a);
              }
              var s = this.spliceItemsIntoValues_(e, t, r);
              return (
                (0 === t && 0 === r.length) || this.notifyArraySplice_(e, r, s),
                this.dehanceValues_(s)
              );
            }),
            (t.spliceItemsIntoValues_ = function (e, t, r) {
              var n;
              if (r.length < 1e4)
                return (n = this.values_).splice.apply(n, [e, t].concat(r));
              var o = this.values_.slice(e, e + t),
                i = this.values_.slice(e + t);
              this.values_.length += r.length - t;
              for (var a = 0; a < r.length; a++) this.values_[e + a] = r[a];
              for (var s = 0; s < i.length; s++)
                this.values_[e + r.length + s] = i[s];
              return o;
            }),
            (t.notifyArrayChildUpdate_ = function (e, t, r) {
              var n = !this.owned_ && !1,
                o = hr(this),
                i =
                  o || n
                    ? {
                        observableKind: "array",
                        object: this.proxy_,
                        type: vr,
                        debugObjectName: this.atom_.name_,
                        index: e,
                        newValue: t,
                        oldValue: r,
                      }
                    : null;
              this.atom_.reportChanged(), o && br(this, i);
            }),
            (t.notifyArraySplice_ = function (e, t, r) {
              var n = !this.owned_ && !1,
                o = hr(this),
                i =
                  o || n
                    ? {
                        observableKind: "array",
                        object: this.proxy_,
                        debugObjectName: this.atom_.name_,
                        type: _r,
                        index: e,
                        removed: r,
                        added: t,
                        removedCount: r.length,
                        addedCount: t.length,
                      }
                    : null;
              this.atom_.reportChanged(), o && br(this, i);
            }),
            (t.get_ = function (e) {
              if (!(this.legacyMode_ && e >= this.values_.length))
                return (
                  this.atom_.reportObserved(),
                  this.dehanceValue_(this.values_[e])
                );
              console.warn("[mobx] Out of bounds read: " + e);
            }),
            (t.set_ = function (e, t) {
              var r = this.values_;
              if (
                (this.legacyMode_ && e > r.length && n(17, e, r.length),
                e < r.length)
              ) {
                this.atom_;
                var o = r[e];
                if (pr(this)) {
                  var i = dr(this, {
                    type: vr,
                    object: this.proxy_,
                    index: e,
                    newValue: t,
                  });
                  if (!i) return;
                  t = i.newValue;
                }
                (t = this.enhancer_(t, o)) !== o &&
                  ((r[e] = t), this.notifyArrayChildUpdate_(e, t, o));
              } else {
                for (
                  var a = new Array(e + 1 - r.length), s = 0;
                  s < a.length - 1;
                  s++
                )
                  a[s] = void 0;
                (a[a.length - 1] = t), this.spliceWithArray_(r.length, 0, a);
              }
            }),
            e
          );
        })();
      function Tr(e, t, r, n) {
        return (
          void 0 === r && (r = "ObservableArray"),
          void 0 === n && (n = !1),
          d(),
          cn(function () {
            var o = new Er(r, t, n, !1);
            T(o.values_, Y, o);
            var i = new Proxy(o.values_, Sr);
            return (
              (o.proxy_ = i), e && e.length && o.spliceWithArray_(0, 0, e), i
            );
          })
        );
      }
      var Ar = {
        clear: function () {
          return this.splice(0);
        },
        replace: function (e) {
          var t = this[Y];
          return t.spliceWithArray_(0, t.values_.length, e);
        },
        toJSON: function () {
          return this.slice();
        },
        splice: function (e, t) {
          for (
            var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2;
            o < r;
            o++
          )
            n[o - 2] = arguments[o];
          var i = this[Y];
          switch (arguments.length) {
            case 0:
              return [];
            case 1:
              return i.spliceWithArray_(e);
            case 2:
              return i.spliceWithArray_(e, t);
          }
          return i.spliceWithArray_(e, t, n);
        },
        spliceWithArray: function (e, t, r) {
          return this[Y].spliceWithArray_(e, t, r);
        },
        push: function () {
          for (
            var e = this[Y], t = arguments.length, r = new Array(t), n = 0;
            n < t;
            n++
          )
            r[n] = arguments[n];
          return e.spliceWithArray_(e.values_.length, 0, r), e.values_.length;
        },
        pop: function () {
          return this.splice(Math.max(this[Y].values_.length - 1, 0), 1)[0];
        },
        shift: function () {
          return this.splice(0, 1)[0];
        },
        unshift: function () {
          for (
            var e = this[Y], t = arguments.length, r = new Array(t), n = 0;
            n < t;
            n++
          )
            r[n] = arguments[n];
          return e.spliceWithArray_(0, 0, r), e.values_.length;
        },
        reverse: function () {
          return (
            ht.trackingDerivation && n(37, "reverse"),
            this.replace(this.slice().reverse()),
            this
          );
        },
        sort: function () {
          ht.trackingDerivation && n(37, "sort");
          var e = this.slice();
          return e.sort.apply(e, arguments), this.replace(e), this;
        },
        remove: function (e) {
          var t = this[Y],
            r = t.dehanceValues_(t.values_).indexOf(e);
          return r > -1 && (this.splice(r, 1), !0);
        },
      };
      function wr(e, t) {
        "function" == typeof Array.prototype[e] && (Ar[e] = t(e));
      }
      function jr(e) {
        return function () {
          var t = this[Y];
          t.atom_.reportObserved();
          var r = t.dehanceValues_(t.values_);
          return r[e].apply(r, arguments);
        };
      }
      function Or(e) {
        return function (t, r) {
          var n = this,
            o = this[Y];
          return (
            o.atom_.reportObserved(),
            o.dehanceValues_(o.values_)[e](function (e, o) {
              return t.call(r, e, o, n);
            })
          );
        };
      }
      function Rr(e) {
        return function () {
          var t = this,
            r = this[Y];
          r.atom_.reportObserved();
          var n = r.dehanceValues_(r.values_),
            o = arguments[0];
          return (
            (arguments[0] = function (e, r, n) {
              return o(e, r, n, t);
            }),
            n[e].apply(n, arguments)
          );
        };
      }
      wr("at", jr),
        wr("concat", jr),
        wr("flat", jr),
        wr("includes", jr),
        wr("indexOf", jr),
        wr("join", jr),
        wr("lastIndexOf", jr),
        wr("slice", jr),
        wr("toString", jr),
        wr("toLocaleString", jr),
        wr("toSorted", jr),
        wr("toSpliced", jr),
        wr("with", jr),
        wr("every", Or),
        wr("filter", Or),
        wr("find", Or),
        wr("findIndex", Or),
        wr("findLast", Or),
        wr("findLastIndex", Or),
        wr("flatMap", Or),
        wr("forEach", Or),
        wr("map", Or),
        wr("some", Or),
        wr("toReversed", Or),
        wr("reduce", Rr),
        wr("reduceRight", Rr);
      var Cr = A("ObservableArrayAdministration", Er);
      function Nr(e) {
        return _(e) && Cr(e[Y]);
      }
      var Pr = {},
        Ir = "add",
        xr = "delete",
        kr = (function () {
          function e(e, t, r) {
            var o = this;
            void 0 === t && (t = Q),
              void 0 === r && (r = "ObservableMap"),
              (this.enhancer_ = void 0),
              (this.name_ = void 0),
              (this[Y] = Pr),
              (this.data_ = void 0),
              (this.hasMap_ = void 0),
              (this.keysAtom_ = void 0),
              (this.interceptors_ = void 0),
              (this.changeListeners_ = void 0),
              (this.dehancer = void 0),
              (this.enhancer_ = t),
              (this.name_ = r),
              b(Map) || n(18),
              cn(function () {
                (o.keysAtom_ = q("ObservableMap.keys()")),
                  (o.data_ = new Map()),
                  (o.hasMap_ = new Map()),
                  e && o.merge(e);
              });
          }
          var t = e.prototype;
          return (
            (t.has_ = function (e) {
              return this.data_.has(e);
            }),
            (t.has = function (e) {
              var t = this;
              if (!ht.trackingDerivation) return this.has_(e);
              var r = this.hasMap_.get(e);
              if (!r) {
                var n = (r = new qe(this.has_(e), Z, "ObservableMap.key?", !1));
                this.hasMap_.set(e, n),
                  Gt(n, function () {
                    return t.hasMap_.delete(e);
                  });
              }
              return r.get();
            }),
            (t.set = function (e, t) {
              var r = this.has_(e);
              if (pr(this)) {
                var n = dr(this, {
                  type: r ? vr : Ir,
                  object: this,
                  newValue: t,
                  name: e,
                });
                if (!n) return this;
                t = n.newValue;
              }
              return r ? this.updateValue_(e, t) : this.addValue_(e, t), this;
            }),
            (t.delete = function (e) {
              var t = this;
              if (
                (this.keysAtom_, pr(this)) &&
                !dr(this, { type: xr, object: this, name: e })
              )
                return !1;
              if (this.has_(e)) {
                var r = hr(this),
                  n = r
                    ? {
                        observableKind: "map",
                        debugObjectName: this.name_,
                        type: xr,
                        object: this,
                        oldValue: this.data_.get(e).value_,
                        name: e,
                      }
                    : null;
                return (
                  ur(function () {
                    var r;
                    t.keysAtom_.reportChanged(),
                      null == (r = t.hasMap_.get(e)) || r.setNewValue_(!1),
                      t.data_.get(e).setNewValue_(void 0),
                      t.data_.delete(e);
                  }),
                  r && br(this, n),
                  !0
                );
              }
              return !1;
            }),
            (t.updateValue_ = function (e, t) {
              var r = this.data_.get(e);
              if ((t = r.prepareNewValue_(t)) !== ht.UNCHANGED) {
                var n = hr(this),
                  o = n
                    ? {
                        observableKind: "map",
                        debugObjectName: this.name_,
                        type: vr,
                        object: this,
                        oldValue: r.value_,
                        name: e,
                        newValue: t,
                      }
                    : null;
                0, r.setNewValue_(t), n && br(this, o);
              }
            }),
            (t.addValue_ = function (e, t) {
              var r = this;
              this.keysAtom_,
                ur(function () {
                  var n,
                    o = new qe(t, r.enhancer_, "ObservableMap.key", !1);
                  r.data_.set(e, o),
                    (t = o.value_),
                    null == (n = r.hasMap_.get(e)) || n.setNewValue_(!0),
                    r.keysAtom_.reportChanged();
                });
              var n = hr(this),
                o = n
                  ? {
                      observableKind: "map",
                      debugObjectName: this.name_,
                      type: Ir,
                      object: this,
                      name: e,
                      newValue: t,
                    }
                  : null;
              n && br(this, o);
            }),
            (t.get = function (e) {
              return this.has(e)
                ? this.dehanceValue_(this.data_.get(e).get())
                : this.dehanceValue_(void 0);
            }),
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.keys = function () {
              return this.keysAtom_.reportObserved(), this.data_.keys();
            }),
            (t.values = function () {
              var e = this,
                t = this.keys();
              return Lr({
                next: function () {
                  var r = t.next(),
                    n = r.done,
                    o = r.value;
                  return { done: n, value: n ? void 0 : e.get(o) };
                },
              });
            }),
            (t.entries = function () {
              var e = this,
                t = this.keys();
              return Lr({
                next: function () {
                  var r = t.next(),
                    n = r.done,
                    o = r.value;
                  return { done: n, value: n ? void 0 : [o, e.get(o)] };
                },
              });
            }),
            (t[Symbol.iterator] = function () {
              return this.entries();
            }),
            (t.forEach = function (e, t) {
              for (var r, n = U(this); !(r = n()).done; ) {
                var o = r.value,
                  i = o[0],
                  a = o[1];
                e.call(t, a, i, this);
              }
            }),
            (t.merge = function (e) {
              var t = this;
              return (
                Mr(e) && (e = new Map(e)),
                ur(function () {
                  var r, o, i;
                  v(e)
                    ? (function (e) {
                        var t = Object.keys(e);
                        if (!O) return t;
                        var r = Object.getOwnPropertySymbols(e);
                        return r.length
                          ? [].concat(
                              t,
                              r.filter(function (t) {
                                return u.propertyIsEnumerable.call(e, t);
                              }),
                            )
                          : t;
                      })(e).forEach(function (r) {
                        return t.set(r, e[r]);
                      })
                    : Array.isArray(e)
                      ? e.forEach(function (e) {
                          var r = e[0],
                            n = e[1];
                          return t.set(r, n);
                        })
                      : w(e)
                        ? ((r = e),
                          (o = Object.getPrototypeOf(r)),
                          (i = Object.getPrototypeOf(o)),
                          null !== Object.getPrototypeOf(i) && n(19, e),
                          e.forEach(function (e, r) {
                            return t.set(r, e);
                          }))
                        : null != e && n(20, e);
                }),
                this
              );
            }),
            (t.clear = function () {
              var e = this;
              ur(function () {
                at(function () {
                  for (var t, r = U(e.keys()); !(t = r()).done; ) {
                    var n = t.value;
                    e.delete(n);
                  }
                });
              });
            }),
            (t.replace = function (e) {
              var t = this;
              return (
                ur(function () {
                  for (
                    var r,
                      o = (function (e) {
                        if (w(e) || Mr(e)) return e;
                        if (Array.isArray(e)) return new Map(e);
                        if (v(e)) {
                          var t = new Map();
                          for (var r in e) t.set(r, e[r]);
                          return t;
                        }
                        return n(21, e);
                      })(e),
                      i = new Map(),
                      a = !1,
                      s = U(t.data_.keys());
                    !(r = s()).done;
                  ) {
                    var l = r.value;
                    if (!o.has(l))
                      if (t.delete(l)) a = !0;
                      else {
                        var u = t.data_.get(l);
                        i.set(l, u);
                      }
                  }
                  for (var g, c = U(o.entries()); !(g = c()).done; ) {
                    var p = g.value,
                      f = p[0],
                      d = p[1],
                      h = t.data_.has(f);
                    if ((t.set(f, d), t.data_.has(f))) {
                      var y = t.data_.get(f);
                      i.set(f, y), h || (a = !0);
                    }
                  }
                  if (!a)
                    if (t.data_.size !== i.size) t.keysAtom_.reportChanged();
                    else
                      for (
                        var b = t.data_.keys(),
                          m = i.keys(),
                          _ = b.next(),
                          S = m.next();
                        !_.done;
                      ) {
                        if (_.value !== S.value) {
                          t.keysAtom_.reportChanged();
                          break;
                        }
                        (_ = b.next()), (S = m.next());
                      }
                  t.data_ = i;
                }),
                this
              );
            }),
            (t.toString = function () {
              return "[object ObservableMap]";
            }),
            (t.toJSON = function () {
              return Array.from(this);
            }),
            (t.observe_ = function (e, t) {
              return yr(this, e);
            }),
            (t.intercept_ = function (e) {
              return fr(this, e);
            }),
            L(e, [
              {
                key: "size",
                get: function () {
                  return this.keysAtom_.reportObserved(), this.data_.size;
                },
              },
              {
                key: Symbol.toStringTag,
                get: function () {
                  return "Map";
                },
              },
            ])
          );
        })(),
        Mr = A("ObservableMap", kr);
      function Lr(e) {
        return (e[Symbol.toStringTag] = "MapIterator"), mn(e);
      }
      var Ur = {},
        Dr = (function () {
          function e(e, t, r) {
            var o = this;
            void 0 === t && (t = Q),
              void 0 === r && (r = "ObservableSet"),
              (this.name_ = void 0),
              (this[Y] = Ur),
              (this.data_ = new Set()),
              (this.atom_ = void 0),
              (this.changeListeners_ = void 0),
              (this.interceptors_ = void 0),
              (this.dehancer = void 0),
              (this.enhancer_ = void 0),
              (this.name_ = r),
              b(Set) || n(22),
              (this.enhancer_ = function (e, n) {
                return t(e, n, r);
              }),
              cn(function () {
                (o.atom_ = q(o.name_)), e && o.replace(e);
              });
          }
          var t = e.prototype;
          return (
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
              var e = this;
              ur(function () {
                at(function () {
                  for (var t, r = U(e.data_.values()); !(t = r()).done; ) {
                    var n = t.value;
                    e.delete(n);
                  }
                });
              });
            }),
            (t.forEach = function (e, t) {
              for (var r, n = U(this); !(r = n()).done; ) {
                var o = r.value;
                e.call(t, o, o, this);
              }
            }),
            (t.add = function (e) {
              var t = this;
              if ((this.atom_, pr(this))) {
                var r = dr(this, { type: Ir, object: this, newValue: e });
                if (!r) return this;
                e = r.newValue;
              }
              if (!this.has(e)) {
                ur(function () {
                  t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged();
                });
                var n = !1,
                  o = hr(this),
                  i = o
                    ? {
                        observableKind: "set",
                        debugObjectName: this.name_,
                        type: Ir,
                        object: this,
                        newValue: e,
                      }
                    : null;
                n, o && br(this, i);
              }
              return this;
            }),
            (t.delete = function (e) {
              var t = this;
              if (
                pr(this) &&
                !dr(this, { type: xr, object: this, oldValue: e })
              )
                return !1;
              if (this.has(e)) {
                var r = hr(this),
                  n = r
                    ? {
                        observableKind: "set",
                        debugObjectName: this.name_,
                        type: xr,
                        object: this,
                        oldValue: e,
                      }
                    : null;
                return (
                  ur(function () {
                    t.atom_.reportChanged(), t.data_.delete(e);
                  }),
                  r && br(this, n),
                  !0
                );
              }
              return !1;
            }),
            (t.has = function (e) {
              return (
                this.atom_.reportObserved(),
                this.data_.has(this.dehanceValue_(e))
              );
            }),
            (t.entries = function () {
              var e = this.values();
              return Fr({
                next: function () {
                  var t = e.next(),
                    r = t.value,
                    n = t.done;
                  return n
                    ? { value: void 0, done: n }
                    : { value: [r, r], done: n };
                },
              });
            }),
            (t.keys = function () {
              return this.values();
            }),
            (t.values = function () {
              this.atom_.reportObserved();
              var e = this,
                t = this.data_.values();
              return Fr({
                next: function () {
                  var r = t.next(),
                    n = r.value,
                    o = r.done;
                  return o
                    ? { value: void 0, done: o }
                    : { value: e.dehanceValue_(n), done: o };
                },
              });
            }),
            (t.intersection = function (e) {
              return j(e) && !Br(e)
                ? e.intersection(this)
                : new Set(this).intersection(e);
            }),
            (t.union = function (e) {
              return j(e) && !Br(e) ? e.union(this) : new Set(this).union(e);
            }),
            (t.difference = function (e) {
              return new Set(this).difference(e);
            }),
            (t.symmetricDifference = function (e) {
              return j(e) && !Br(e)
                ? e.symmetricDifference(this)
                : new Set(this).symmetricDifference(e);
            }),
            (t.isSubsetOf = function (e) {
              return new Set(this).isSubsetOf(e);
            }),
            (t.isSupersetOf = function (e) {
              return new Set(this).isSupersetOf(e);
            }),
            (t.isDisjointFrom = function (e) {
              return j(e) && !Br(e)
                ? e.isDisjointFrom(this)
                : new Set(this).isDisjointFrom(e);
            }),
            (t.replace = function (e) {
              var t = this;
              return (
                Br(e) && (e = new Set(e)),
                ur(function () {
                  Array.isArray(e) || j(e)
                    ? (t.clear(),
                      e.forEach(function (e) {
                        return t.add(e);
                      }))
                    : null != e && n("Cannot initialize set from " + e);
                }),
                this
              );
            }),
            (t.observe_ = function (e, t) {
              return yr(this, e);
            }),
            (t.intercept_ = function (e) {
              return fr(this, e);
            }),
            (t.toJSON = function () {
              return Array.from(this);
            }),
            (t.toString = function () {
              return "[object ObservableSet]";
            }),
            (t[Symbol.iterator] = function () {
              return this.values();
            }),
            L(e, [
              {
                key: "size",
                get: function () {
                  return this.atom_.reportObserved(), this.data_.size;
                },
              },
              {
                key: Symbol.toStringTag,
                get: function () {
                  return "Set";
                },
              },
            ])
          );
        })(),
        Br = A("ObservableSet", Dr);
      function Fr(e) {
        return (e[Symbol.toStringTag] = "SetIterator"), mn(e);
      }
      var Wr = Object.create(null),
        Hr = "remove",
        Vr = (function () {
          function e(e, t, r, n) {
            void 0 === t && (t = new Map()),
              void 0 === n && (n = _e),
              (this.target_ = void 0),
              (this.values_ = void 0),
              (this.name_ = void 0),
              (this.defaultAnnotation_ = void 0),
              (this.keysAtom_ = void 0),
              (this.changeListeners_ = void 0),
              (this.interceptors_ = void 0),
              (this.proxy_ = void 0),
              (this.isPlainObject_ = void 0),
              (this.appliedAnnotations_ = void 0),
              (this.pendingKeys_ = void 0),
              (this.target_ = e),
              (this.values_ = t),
              (this.name_ = r),
              (this.defaultAnnotation_ = n),
              (this.keysAtom_ = new K("ObservableObject.keys")),
              (this.isPlainObject_ = v(this.target_));
          }
          var t = e.prototype;
          return (
            (t.getObservablePropValue_ = function (e) {
              return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
              var r = this.values_.get(e);
              if (r instanceof Xe) return r.set(t), !0;
              if (pr(this)) {
                var n = dr(this, {
                  type: vr,
                  object: this.proxy_ || this.target_,
                  name: e,
                  newValue: t,
                });
                if (!n) return null;
                t = n.newValue;
              }
              if ((t = r.prepareNewValue_(t)) !== ht.UNCHANGED) {
                var o = hr(this),
                  i = o
                    ? {
                        type: vr,
                        observableKind: "object",
                        debugObjectName: this.name_,
                        object: this.proxy_ || this.target_,
                        oldValue: r.value_,
                        name: e,
                        newValue: t,
                      }
                    : null;
                0, r.setNewValue_(t), o && br(this, i);
              }
              return !0;
            }),
            (t.get_ = function (e) {
              return (
                ht.trackingDerivation && !N(this.target_, e) && this.has_(e),
                this.target_[e]
              );
            }),
            (t.set_ = function (e, t, r) {
              return (
                void 0 === r && (r = !1),
                N(this.target_, e)
                  ? this.values_.has(e)
                    ? this.setObservablePropValue_(e, t)
                    : r
                      ? Reflect.set(this.target_, e, t)
                      : ((this.target_[e] = t), !0)
                  : this.extend_(
                      e,
                      {
                        value: t,
                        enumerable: !0,
                        writable: !0,
                        configurable: !0,
                      },
                      this.defaultAnnotation_,
                      r,
                    )
              );
            }),
            (t.has_ = function (e) {
              if (!ht.trackingDerivation) return e in this.target_;
              this.pendingKeys_ || (this.pendingKeys_ = new Map());
              var t = this.pendingKeys_.get(e);
              return (
                t ||
                  ((t = new qe(
                    e in this.target_,
                    Z,
                    "ObservableObject.key?",
                    !1,
                  )),
                  this.pendingKeys_.set(e, t)),
                t.get()
              );
            }),
            (t.make_ = function (e, t) {
              if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                if ((qr(this, t, e), !(e in this.target_))) {
                  var r;
                  if (null != (r = this.target_[H]) && r[e]) return;
                  n(1, t.annotationType_, this.name_ + "." + e.toString());
                }
                for (var o = this.target_; o && o !== u; ) {
                  var i = s(o, e);
                  if (i) {
                    var a = t.make_(this, e, i, o);
                    if (0 === a) return;
                    if (1 === a) break;
                  }
                  o = Object.getPrototypeOf(o);
                }
                $r(this, t, e);
              }
            }),
            (t.extend_ = function (e, t, r, n) {
              if (
                (void 0 === n && (n = !1),
                !0 === r && (r = this.defaultAnnotation_),
                !1 === r)
              )
                return this.defineProperty_(e, t, n);
              qr(this, r, e);
              var o = r.extend_(this, e, t, n);
              return o && $r(this, r, e), o;
            }),
            (t.defineProperty_ = function (e, t, r) {
              void 0 === r && (r = !1), this.keysAtom_;
              try {
                _t();
                var n = this.delete_(e);
                if (!n) return n;
                if (pr(this)) {
                  var o = dr(this, {
                    object: this.proxy_ || this.target_,
                    name: e,
                    type: Ir,
                    newValue: t.value,
                  });
                  if (!o) return null;
                  var i = o.newValue;
                  t.value !== i && (t = D({}, t, { value: i }));
                }
                if (r) {
                  if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                } else l(this.target_, e, t);
                this.notifyPropertyAddition_(e, t.value);
              } finally {
                vt();
              }
              return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, r, n) {
              void 0 === n && (n = !1), this.keysAtom_;
              try {
                _t();
                var o = this.delete_(e);
                if (!o) return o;
                if (pr(this)) {
                  var i = dr(this, {
                    object: this.proxy_ || this.target_,
                    name: e,
                    type: Ir,
                    newValue: t,
                  });
                  if (!i) return null;
                  t = i.newValue;
                }
                var a = Yr(e),
                  s = {
                    configurable: !ht.safeDescriptors || this.isPlainObject_,
                    enumerable: !0,
                    get: a.get,
                    set: a.set,
                  };
                if (n) {
                  if (!Reflect.defineProperty(this.target_, e, s)) return !1;
                } else l(this.target_, e, s);
                var u = new qe(t, r, "ObservableObject.key", !1);
                this.values_.set(e, u),
                  this.notifyPropertyAddition_(e, u.value_);
              } finally {
                vt();
              }
              return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, r) {
              void 0 === r && (r = !1), this.keysAtom_;
              try {
                _t();
                var n = this.delete_(e);
                if (!n) return n;
                if (pr(this))
                  if (
                    !dr(this, {
                      object: this.proxy_ || this.target_,
                      name: e,
                      type: Ir,
                      newValue: void 0,
                    })
                  )
                    return null;
                t.name || (t.name = "ObservableObject.key"),
                  (t.context = this.proxy_ || this.target_);
                var o = Yr(e),
                  i = {
                    configurable: !ht.safeDescriptors || this.isPlainObject_,
                    enumerable: !1,
                    get: o.get,
                    set: o.set,
                  };
                if (r) {
                  if (!Reflect.defineProperty(this.target_, e, i)) return !1;
                } else l(this.target_, e, i);
                this.values_.set(e, new Xe(t)),
                  this.notifyPropertyAddition_(e, void 0);
              } finally {
                vt();
              }
              return !0;
            }),
            (t.delete_ = function (e, t) {
              if (
                (void 0 === t && (t = !1), this.keysAtom_, !N(this.target_, e))
              )
                return !0;
              if (
                pr(this) &&
                !dr(this, {
                  object: this.proxy_ || this.target_,
                  name: e,
                  type: Hr,
                })
              )
                return null;
              try {
                var r;
                _t();
                var n,
                  o = hr(this),
                  i = this.values_.get(e),
                  a = void 0;
                if (!i && o)
                  a = null == (n = s(this.target_, e)) ? void 0 : n.value;
                if (t) {
                  if (!Reflect.deleteProperty(this.target_, e)) return !1;
                } else delete this.target_[e];
                if (
                  (i &&
                    (this.values_.delete(e),
                    i instanceof qe && (a = i.value_),
                    Et(i)),
                  this.keysAtom_.reportChanged(),
                  null == (r = this.pendingKeys_) ||
                    null == (r = r.get(e)) ||
                    r.set(e in this.target_),
                  o)
                ) {
                  var l = {
                    type: Hr,
                    observableKind: "object",
                    object: this.proxy_ || this.target_,
                    debugObjectName: this.name_,
                    oldValue: a,
                    name: e,
                  };
                  0, o && br(this, l);
                }
              } finally {
                vt();
              }
              return !0;
            }),
            (t.observe_ = function (e, t) {
              return yr(this, e);
            }),
            (t.intercept_ = function (e) {
              return fr(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
              var r,
                n = hr(this);
              if (n) {
                var o = n
                  ? {
                      type: Ir,
                      observableKind: "object",
                      debugObjectName: this.name_,
                      object: this.proxy_ || this.target_,
                      name: e,
                      newValue: t,
                    }
                  : null;
                0, n && br(this, o);
              }
              null == (r = this.pendingKeys_) ||
                null == (r = r.get(e)) ||
                r.set(!0),
                this.keysAtom_.reportChanged();
            }),
            (t.ownKeys_ = function () {
              return this.keysAtom_.reportObserved(), R(this.target_);
            }),
            (t.keys_ = function () {
              return this.keysAtom_.reportObserved(), Object.keys(this.target_);
            }),
            e
          );
        })();
      function zr(e, t) {
        var r;
        if (N(e, Y)) return e;
        var n =
            null != (r = null == t ? void 0 : t.name) ? r : "ObservableObject",
          o = new Vr(
            e,
            new Map(),
            String(n),
            (function (e) {
              var t;
              return e
                ? null != (t = e.defaultDecorator)
                  ? t
                  : ve(e)
                : void 0;
            })(t),
          );
        return E(e, Y, o), e;
      }
      var Gr = A("ObservableObjectAdministration", Vr);
      function Yr(e) {
        return (
          Wr[e] ||
          (Wr[e] = {
            get: function () {
              return this[Y].getObservablePropValue_(e);
            },
            set: function (t) {
              return this[Y].setObservablePropValue_(e, t);
            },
          })
        );
      }
      function Kr(e) {
        return !!_(e) && Gr(e[Y]);
      }
      function $r(e, t, r) {
        var n;
        null == (n = e.target_[H]) || delete n[r];
      }
      function qr(e, t, r) {}
      var Xr,
        Qr,
        Zr = nn(0),
        Jr = (function () {
          var e = !1,
            t = {};
          return (
            Object.defineProperty(t, "0", {
              set: function () {
                e = !0;
              },
            }),
            (Object.create(t)[0] = 1),
            !1 === e
          );
        })(),
        en = 0,
        tn = function () {};
      (Xr = tn),
        (Qr = Array.prototype),
        Object.setPrototypeOf
          ? Object.setPrototypeOf(Xr.prototype, Qr)
          : void 0 !== Xr.prototype.__proto__
            ? (Xr.prototype.__proto__ = Qr)
            : (Xr.prototype = Qr);
      var rn = (function (e) {
        function t(t, r, n, o) {
          var i;
          return (
            void 0 === n && (n = "ObservableArray"),
            void 0 === o && (o = !1),
            (i = e.call(this) || this),
            cn(function () {
              var e = new Er(n, r, o, !0);
              (e.proxy_ = i),
                T(i, Y, e),
                t && t.length && i.spliceWithArray(0, 0, t),
                Jr && Object.defineProperty(i, "0", Zr);
            }),
            i
          );
        }
        B(t, e);
        var r = t.prototype;
        return (
          (r.concat = function () {
            this[Y].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
            return Array.prototype.concat.apply(
              this.slice(),
              t.map(function (e) {
                return Nr(e) ? e.slice() : e;
              }),
            );
          }),
          (r[Symbol.iterator] = function () {
            var e = this,
              t = 0;
            return mn({
              next: function () {
                return t < e.length
                  ? { value: e[t++], done: !1 }
                  : { done: !0, value: void 0 };
              },
            });
          }),
          L(t, [
            {
              key: "length",
              get: function () {
                return this[Y].getArrayLength_();
              },
              set: function (e) {
                this[Y].setArrayLength_(e);
              },
            },
            {
              key: Symbol.toStringTag,
              get: function () {
                return "Array";
              },
            },
          ])
        );
      })(tn);
      function nn(e) {
        return {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return this[Y].get_(e);
          },
          set: function (t) {
            this[Y].set_(e, t);
          },
        };
      }
      function on(e) {
        l(rn.prototype, "" + e, nn(e));
      }
      function an(e) {
        if (e > en) {
          for (var t = en; t < e + 100; t++) on(t);
          en = e;
        }
      }
      function sn(e, t, r) {
        return new rn(e, t, r);
      }
      function ln(e, t) {
        if ("object" == typeof e && null !== e) {
          if (Nr(e)) return void 0 !== t && n(23), e[Y].atom_;
          if (Br(e)) return e.atom_;
          if (Mr(e)) {
            if (void 0 === t) return e.keysAtom_;
            var r = e.data_.get(t) || e.hasMap_.get(t);
            return r || n(25, t, gn(e)), r;
          }
          if (Kr(e)) {
            if (!t) return n(26);
            var o = e[Y].values_.get(t);
            return o || n(27, t, gn(e)), o;
          }
          if ($(e) || Je(e) || Rt(e)) return e;
        } else if (b(e) && Rt(e[Y])) return e[Y];
        n(28);
      }
      function un(e, t) {
        return (
          e || n(29),
          void 0 !== t
            ? un(ln(e, t))
            : $(e) || Je(e) || Rt(e) || Mr(e) || Br(e)
              ? e
              : e[Y]
                ? e[Y]
                : void n(24, e)
        );
      }
      function gn(e, t) {
        var r;
        if (void 0 !== t) r = ln(e, t);
        else {
          if (Bt(e)) return e.name;
          r = Kr(e) || Mr(e) || Br(e) ? un(e) : ln(e);
        }
        return r.name_;
      }
      function cn(e) {
        var t = st(),
          r = Ke(!0);
        _t();
        try {
          return e();
        } finally {
          vt(), $e(r), lt(t);
        }
      }
      Object.entries(Ar).forEach(function (e) {
        var t = e[0],
          r = e[1];
        "concat" !== t && E(rn.prototype, t, r);
      }),
        an(1e3);
      var pn,
        fn = u.toString;
      function dn(e, t, r) {
        return void 0 === r && (r = -1), hn(e, t, r);
      }
      function hn(e, t, r, n, o) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return !1;
        if (e != e) return t != t;
        var i = typeof e;
        if ("function" !== i && "object" !== i && "object" != typeof t)
          return !1;
        var a = fn.call(e);
        if (a !== fn.call(t)) return !1;
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
        (e = yn(e)), (t = yn(t));
        var s = "[object Array]" === a;
        if (!s) {
          if ("object" != typeof e || "object" != typeof t) return !1;
          var l = e.constructor,
            u = t.constructor;
          if (
            l !== u &&
            !(b(l) && l instanceof l && b(u) && u instanceof u) &&
            "constructor" in e &&
            "constructor" in t
          )
            return !1;
        }
        if (0 === r) return !1;
        r < 0 && (r = -1), (o = o || []);
        for (var g = (n = n || []).length; g--; )
          if (n[g] === e) return o[g] === t;
        if ((n.push(e), o.push(t), s)) {
          if ((g = e.length) !== t.length) return !1;
          for (; g--; ) if (!hn(e[g], t[g], r - 1, n, o)) return !1;
        } else {
          var c = Object.keys(e),
            p = c.length;
          if (Object.keys(t).length !== p) return !1;
          for (var f = 0; f < p; f++) {
            var d = c[f];
            if (!N(t, d) || !hn(e[d], t[d], r - 1, n, o)) return !1;
          }
        }
        return n.pop(), o.pop(), !0;
      }
      function yn(e) {
        return Nr(e)
          ? e.slice()
          : w(e) || Mr(e) || j(e) || Br(e)
            ? Array.from(e.entries())
            : e;
      }
      var bn = (null == (pn = i().Iterator) ? void 0 : pn.prototype) || {};
      function mn(e) {
        return (e[Symbol.iterator] = _n), Object.assign(Object.create(bn), e);
      }
      function _n() {
        return this;
      }
      ["Symbol", "Map", "Set"].forEach(function (e) {
        void 0 === i()[e] &&
          n("MobX requires global '" + e + "' to be available or polyfilled");
      }),
        "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
          __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
              return (
                console.warn("[mobx.spy] Is a no-op in production builds"),
                function () {}
              );
            },
            extras: { getDebugName: gn },
            $mobx: Y,
          });
    },
    241: (e, t, r) => {
      "use strict";
      var n = r(1016),
        o = r(626),
        i = r(2739);
      /**
       * @license React
       * react-dom-client.production.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ function a(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
          t += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var r = 2; r < arguments.length; r++)
            t += "&args[]=" + encodeURIComponent(arguments[r]);
        }
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      function s(e) {
        return !(
          !e ||
          (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
        );
      }
      function l(e) {
        var t = e,
          r = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            0 != (4098 & (t = e).flags) && (r = t.return), (e = t.return);
          } while (e);
        }
        return 3 === t.tag ? r : null;
      }
      function u(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (
            (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
            null !== t)
          )
            return t.dehydrated;
        }
        return null;
      }
      function g(e) {
        if (l(e) !== e) throw Error(a(188));
      }
      function c(e) {
        var t = e.tag;
        if (5 === t || 26 === t || 27 === t || 6 === t) return e;
        for (e = e.child; null !== e; ) {
          if (null !== (t = c(e))) return t;
          e = e.sibling;
        }
        return null;
      }
      var p = Object.assign,
        f = Symbol.for("react.element"),
        d = Symbol.for("react.transitional.element"),
        h = Symbol.for("react.portal"),
        y = Symbol.for("react.fragment"),
        b = Symbol.for("react.strict_mode"),
        m = Symbol.for("react.profiler"),
        _ = Symbol.for("react.provider"),
        v = Symbol.for("react.consumer"),
        S = Symbol.for("react.context"),
        E = Symbol.for("react.forward_ref"),
        T = Symbol.for("react.suspense"),
        A = Symbol.for("react.suspense_list"),
        w = Symbol.for("react.memo"),
        j = Symbol.for("react.lazy");
      Symbol.for("react.scope");
      var O = Symbol.for("react.activity");
      Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
      var R = Symbol.for("react.memo_cache_sentinel");
      Symbol.for("react.view_transition");
      var C = Symbol.iterator;
      function N(e) {
        return null === e || "object" != typeof e
          ? null
          : "function" == typeof (e = (C && e[C]) || e["@@iterator"])
            ? e
            : null;
      }
      var P = Symbol.for("react.client.reference");
      function I(e) {
        if (null == e) return null;
        if ("function" == typeof e)
          return e.$$typeof === P ? null : e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
          case y:
            return "Fragment";
          case m:
            return "Profiler";
          case b:
            return "StrictMode";
          case T:
            return "Suspense";
          case A:
            return "SuspenseList";
          case O:
            return "Activity";
        }
        if ("object" == typeof e)
          switch (e.$$typeof) {
            case h:
              return "Portal";
            case S:
              return (e.displayName || "Context") + ".Provider";
            case v:
              return (e._context.displayName || "Context") + ".Consumer";
            case E:
              var t = e.render;
              return (
                (e = e.displayName) ||
                  (e =
                    "" !== (e = t.displayName || t.name || "")
                      ? "ForwardRef(" + e + ")"
                      : "ForwardRef"),
                e
              );
            case w:
              return null !== (t = e.displayName || null)
                ? t
                : I(e.type) || "Memo";
            case j:
              (t = e._payload), (e = e._init);
              try {
                return I(e(t));
              } catch (e) {}
          }
        return null;
      }
      var x = Array.isArray,
        k = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        M = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        L = { pending: !1, data: null, method: null, action: null },
        U = [],
        D = -1;
      function B(e) {
        return { current: e };
      }
      function F(e) {
        0 > D || ((e.current = U[D]), (U[D] = null), D--);
      }
      function W(e, t) {
        D++, (U[D] = e.current), (e.current = t);
      }
      var H = B(null),
        V = B(null),
        z = B(null),
        G = B(null);
      function Y(e, t) {
        switch ((W(z, t), W(V, e), W(H, null), t.nodeType)) {
          case 9:
          case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? oc(e) : 0;
            break;
          default:
            if (((e = t.tagName), (t = t.namespaceURI))) e = ic((t = oc(t)), e);
            else
              switch (e) {
                case "svg":
                  e = 1;
                  break;
                case "math":
                  e = 2;
                  break;
                default:
                  e = 0;
              }
        }
        F(H), W(H, e);
      }
      function K() {
        F(H), F(V), F(z);
      }
      function $(e) {
        null !== e.memoizedState && W(G, e);
        var t = H.current,
          r = ic(t, e.type);
        t !== r && (W(V, e), W(H, r));
      }
      function q(e) {
        V.current === e && (F(H), F(V)),
          G.current === e && (F(G), ($c._currentValue = L));
      }
      var X = Object.prototype.hasOwnProperty,
        Q = n.unstable_scheduleCallback,
        Z = n.unstable_cancelCallback,
        J = n.unstable_shouldYield,
        ee = n.unstable_requestPaint,
        te = n.unstable_now,
        re = n.unstable_getCurrentPriorityLevel,
        ne = n.unstable_ImmediatePriority,
        oe = n.unstable_UserBlockingPriority,
        ie = n.unstable_NormalPriority,
        ae = n.unstable_LowPriority,
        se = n.unstable_IdlePriority,
        le = n.log,
        ue = n.unstable_setDisableYieldValue,
        ge = null,
        ce = null;
      function pe(e) {
        if (
          ("function" == typeof le && ue(e),
          ce && "function" == typeof ce.setStrictMode)
        )
          try {
            ce.setStrictMode(ge, e);
          } catch (e) {}
      }
      var fe = Math.clz32
          ? Math.clz32
          : function (e) {
              return 0 === (e >>>= 0) ? 32 : (31 - ((de(e) / he) | 0)) | 0;
            },
        de = Math.log,
        he = Math.LN2;
      var ye = 256,
        be = 4194304;
      function me(e) {
        var t = 42 & e;
        if (0 !== t) return t;
        switch (e & -e) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
            return 64;
          case 128:
            return 128;
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return 4194048 & e;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return 62914560 & e;
          case 67108864:
            return 67108864;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 0;
          default:
            return e;
        }
      }
      function _e(e, t, r) {
        var n = e.pendingLanes;
        if (0 === n) return 0;
        var o = 0,
          i = e.suspendedLanes,
          a = e.pingedLanes;
        e = e.warmLanes;
        var s = 134217727 & n;
        return (
          0 !== s
            ? 0 !== (n = s & ~i)
              ? (o = me(n))
              : 0 !== (a &= s)
                ? (o = me(a))
                : r || (0 !== (r = s & ~e) && (o = me(r)))
            : 0 !== (s = n & ~i)
              ? (o = me(s))
              : 0 !== a
                ? (o = me(a))
                : r || (0 !== (r = n & ~e) && (o = me(r))),
          0 === o
            ? 0
            : 0 !== t &&
                t !== o &&
                0 == (t & i) &&
                ((i = o & -o) >= (r = t & -t) ||
                  (32 === i && 0 != (4194048 & r)))
              ? t
              : o
        );
      }
      function ve(e, t) {
        return 0 == (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
      }
      function Se(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 4:
          case 8:
          case 64:
            return t + 250;
          case 16:
          case 32:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return t + 5e3;
          default:
            return -1;
        }
      }
      function Ee() {
        var e = ye;
        return 0 == (4194048 & (ye <<= 1)) && (ye = 256), e;
      }
      function Te() {
        var e = be;
        return 0 == (62914560 & (be <<= 1)) && (be = 4194304), e;
      }
      function Ae(e) {
        for (var t = [], r = 0; 31 > r; r++) t.push(e);
        return t;
      }
      function we(e, t) {
        (e.pendingLanes |= t),
          268435456 !== t &&
            ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
      }
      function je(e, t, r) {
        (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
        var n = 31 - fe(t);
        (e.entangledLanes |= t),
          (e.entanglements[n] =
            1073741824 | e.entanglements[n] | (4194090 & r));
      }
      function Oe(e, t) {
        var r = (e.entangledLanes |= t);
        for (e = e.entanglements; r; ) {
          var n = 31 - fe(r),
            o = 1 << n;
          (o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o);
        }
      }
      function Re(e) {
        switch (e) {
          case 2:
            e = 1;
            break;
          case 8:
            e = 4;
            break;
          case 32:
            e = 16;
            break;
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            e = 128;
            break;
          case 268435456:
            e = 134217728;
            break;
          default:
            e = 0;
        }
        return e;
      }
      function Ce(e) {
        return 2 < (e &= -e)
          ? 8 < e
            ? 0 != (134217727 & e)
              ? 32
              : 268435456
            : 8
          : 2;
      }
      function Ne() {
        var e = M.p;
        return 0 !== e ? e : void 0 === (e = window.event) ? 32 : up(e.type);
      }
      var Pe = Math.random().toString(36).slice(2),
        Ie = "__reactFiber$" + Pe,
        xe = "__reactProps$" + Pe,
        ke = "__reactContainer$" + Pe,
        Me = "__reactEvents$" + Pe,
        Le = "__reactListeners$" + Pe,
        Ue = "__reactHandles$" + Pe,
        De = "__reactResources$" + Pe,
        Be = "__reactMarker$" + Pe;
      function Fe(e) {
        delete e[Ie], delete e[xe], delete e[Me], delete e[Le], delete e[Ue];
      }
      function We(e) {
        var t = e[Ie];
        if (t) return t;
        for (var r = e.parentNode; r; ) {
          if ((t = r[ke] || r[Ie])) {
            if (
              ((r = t.alternate),
              null !== t.child || (null !== r && null !== r.child))
            )
              for (e = _c(e); null !== e; ) {
                if ((r = e[Ie])) return r;
                e = _c(e);
              }
            return t;
          }
          r = (e = r).parentNode;
        }
        return null;
      }
      function He(e) {
        if ((e = e[Ie] || e[ke])) {
          var t = e.tag;
          if (5 === t || 6 === t || 13 === t || 26 === t || 27 === t || 3 === t)
            return e;
        }
        return null;
      }
      function Ve(e) {
        var t = e.tag;
        if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
        throw Error(a(33));
      }
      function ze(e) {
        var t = e[De];
        return (
          t ||
            (t = e[De] =
              { hoistableStyles: new Map(), hoistableScripts: new Map() }),
          t
        );
      }
      function Ge(e) {
        e[Be] = !0;
      }
      var Ye = new Set(),
        Ke = {};
      function $e(e, t) {
        qe(e, t), qe(e + "Capture", t);
      }
      function qe(e, t) {
        for (Ke[e] = t, e = 0; e < t.length; e++) Ye.add(t[e]);
      }
      var Xe,
        Qe,
        Ze = RegExp(
          "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
        ),
        Je = {},
        et = {};
      function tt(e, t, r) {
        if (
          ((o = t),
          X.call(et, o) ||
            (!X.call(Je, o) && (Ze.test(o) ? (et[o] = !0) : ((Je[o] = !0), 0))))
        )
          if (null === r) e.removeAttribute(t);
          else {
            switch (typeof r) {
              case "undefined":
              case "function":
              case "symbol":
                return void e.removeAttribute(t);
              case "boolean":
                var n = t.toLowerCase().slice(0, 5);
                if ("data-" !== n && "aria-" !== n)
                  return void e.removeAttribute(t);
            }
            e.setAttribute(t, "" + r);
          }
        var o;
      }
      function rt(e, t, r) {
        if (null === r) e.removeAttribute(t);
        else {
          switch (typeof r) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
              return void e.removeAttribute(t);
          }
          e.setAttribute(t, "" + r);
        }
      }
      function nt(e, t, r, n) {
        if (null === n) e.removeAttribute(r);
        else {
          switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
              return void e.removeAttribute(r);
          }
          e.setAttributeNS(t, r, "" + n);
        }
      }
      function ot(e) {
        if (void 0 === Xe)
          try {
            throw Error();
          } catch (e) {
            var t = e.stack.trim().match(/\n( *(at )?)/);
            (Xe = (t && t[1]) || ""),
              (Qe =
                -1 < e.stack.indexOf("\n    at")
                  ? " (<anonymous>)"
                  : -1 < e.stack.indexOf("@")
                    ? "@unknown:0:0"
                    : "");
          }
        return "\n" + Xe + e + Qe;
      }
      var it = !1;
      function at(e, t) {
        if (!e || it) return "";
        it = !0;
        var r = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          var n = {
            DetermineComponentFrameRoot: function () {
              try {
                if (t) {
                  var r = function () {
                    throw Error();
                  };
                  if (
                    (Object.defineProperty(r.prototype, "props", {
                      set: function () {
                        throw Error();
                      },
                    }),
                    "object" == typeof Reflect && Reflect.construct)
                  ) {
                    try {
                      Reflect.construct(r, []);
                    } catch (e) {
                      var n = e;
                    }
                    Reflect.construct(e, [], r);
                  } else {
                    try {
                      r.call();
                    } catch (e) {
                      n = e;
                    }
                    e.call(r.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (e) {
                    n = e;
                  }
                  (r = e()) &&
                    "function" == typeof r.catch &&
                    r.catch(function () {});
                }
              } catch (e) {
                if (e && n && "string" == typeof e.stack)
                  return [e.stack, n.stack];
              }
              return [null, null];
            },
          };
          n.DetermineComponentFrameRoot.displayName =
            "DetermineComponentFrameRoot";
          var o = Object.getOwnPropertyDescriptor(
            n.DetermineComponentFrameRoot,
            "name",
          );
          o &&
            o.configurable &&
            Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
              value: "DetermineComponentFrameRoot",
            });
          var i = n.DetermineComponentFrameRoot(),
            a = i[0],
            s = i[1];
          if (a && s) {
            var l = a.split("\n"),
              u = s.split("\n");
            for (
              o = n = 0;
              n < l.length && !l[n].includes("DetermineComponentFrameRoot");
            )
              n++;
            for (
              ;
              o < u.length && !u[o].includes("DetermineComponentFrameRoot");
            )
              o++;
            if (n === l.length || o === u.length)
              for (
                n = l.length - 1, o = u.length - 1;
                1 <= n && 0 <= o && l[n] !== u[o];
              )
                o--;
            for (; 1 <= n && 0 <= o; n--, o--)
              if (l[n] !== u[o]) {
                if (1 !== n || 1 !== o)
                  do {
                    if ((n--, 0 > --o || l[n] !== u[o])) {
                      var g = "\n" + l[n].replace(" at new ", " at ");
                      return (
                        e.displayName &&
                          g.includes("<anonymous>") &&
                          (g = g.replace("<anonymous>", e.displayName)),
                        g
                      );
                    }
                  } while (1 <= n && 0 <= o);
                break;
              }
          }
        } finally {
          (it = !1), (Error.prepareStackTrace = r);
        }
        return (r = e ? e.displayName || e.name : "") ? ot(r) : "";
      }
      function st(e) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            return ot(e.type);
          case 16:
            return ot("Lazy");
          case 13:
            return ot("Suspense");
          case 19:
            return ot("SuspenseList");
          case 0:
          case 15:
            return at(e.type, !1);
          case 11:
            return at(e.type.render, !1);
          case 1:
            return at(e.type, !0);
          case 31:
            return ot("Activity");
          default:
            return "";
        }
      }
      function lt(e) {
        try {
          var t = "";
          do {
            (t += st(e)), (e = e.return);
          } while (e);
          return t;
        } catch (e) {
          return "\nError generating stack: " + e.message + "\n" + e.stack;
        }
      }
      function ut(e) {
        switch (typeof e) {
          case "bigint":
          case "boolean":
          case "number":
          case "string":
          case "undefined":
          case "object":
            return e;
          default:
            return "";
        }
      }
      function gt(e) {
        var t = e.type;
        return (
          (e = e.nodeName) &&
          "input" === e.toLowerCase() &&
          ("checkbox" === t || "radio" === t)
        );
      }
      function ct(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = gt(e) ? "checked" : "value",
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
      function pt(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var r = t.getValue(),
          n = "";
        return (
          e && (n = gt(e) ? (e.checked ? "true" : "false") : e.value),
          (e = n) !== r && (t.setValue(e), !0)
        );
      }
      function ft(e) {
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
      var dt = /[\n"\\]/g;
      function ht(e) {
        return e.replace(dt, function (e) {
          return "\\" + e.charCodeAt(0).toString(16) + " ";
        });
      }
      function yt(e, t, r, n, o, i, a, s) {
        (e.name = ""),
          null != a &&
          "function" != typeof a &&
          "symbol" != typeof a &&
          "boolean" != typeof a
            ? (e.type = a)
            : e.removeAttribute("type"),
          null != t
            ? "number" === a
              ? ((0 === t && "" === e.value) || e.value != t) &&
                (e.value = "" + ut(t))
              : e.value !== "" + ut(t) && (e.value = "" + ut(t))
            : ("submit" !== a && "reset" !== a) || e.removeAttribute("value"),
          null != t
            ? mt(e, a, ut(t))
            : null != r
              ? mt(e, a, ut(r))
              : null != n && e.removeAttribute("value"),
          null == o && null != i && (e.defaultChecked = !!i),
          null != o &&
            (e.checked = o && "function" != typeof o && "symbol" != typeof o),
          null != s &&
          "function" != typeof s &&
          "symbol" != typeof s &&
          "boolean" != typeof s
            ? (e.name = "" + ut(s))
            : e.removeAttribute("name");
      }
      function bt(e, t, r, n, o, i, a, s) {
        if (
          (null != i &&
            "function" != typeof i &&
            "symbol" != typeof i &&
            "boolean" != typeof i &&
            (e.type = i),
          null != t || null != r)
        ) {
          if (("submit" === i || "reset" === i) && null == t) return;
          (r = null != r ? "" + ut(r) : ""),
            (t = null != t ? "" + ut(t) : r),
            s || t === e.value || (e.value = t),
            (e.defaultValue = t);
        }
        (n =
          "function" != typeof (n = null != n ? n : o) &&
          "symbol" != typeof n &&
          !!n),
          (e.checked = s ? e.checked : !!n),
          (e.defaultChecked = !!n),
          null != a &&
            "function" != typeof a &&
            "symbol" != typeof a &&
            "boolean" != typeof a &&
            (e.name = a);
      }
      function mt(e, t, r) {
        ("number" === t && ft(e.ownerDocument) === e) ||
          e.defaultValue === "" + r ||
          (e.defaultValue = "" + r);
      }
      function _t(e, t, r, n) {
        if (((e = e.options), t)) {
          t = {};
          for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
          for (r = 0; r < e.length; r++)
            (o = t.hasOwnProperty("$" + e[r].value)),
              e[r].selected !== o && (e[r].selected = o),
              o && n && (e[r].defaultSelected = !0);
        } else {
          for (r = "" + ut(r), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === r)
              return (
                (e[o].selected = !0), void (n && (e[o].defaultSelected = !0))
              );
            null !== t || e[o].disabled || (t = e[o]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function vt(e, t, r) {
        null == t || ((t = "" + ut(t)) !== e.value && (e.value = t), null != r)
          ? (e.defaultValue = null != r ? "" + ut(r) : "")
          : e.defaultValue !== t && (e.defaultValue = t);
      }
      function St(e, t, r, n) {
        if (null == t) {
          if (null != n) {
            if (null != r) throw Error(a(92));
            if (x(n)) {
              if (1 < n.length) throw Error(a(93));
              n = n[0];
            }
            r = n;
          }
          null == r && (r = ""), (t = r);
        }
        (r = ut(t)),
          (e.defaultValue = r),
          (n = e.textContent) === r && "" !== n && null !== n && (e.value = n);
      }
      function Et(e, t) {
        if (t) {
          var r = e.firstChild;
          if (r && r === e.lastChild && 3 === r.nodeType)
            return void (r.nodeValue = t);
        }
        e.textContent = t;
      }
      var Tt = new Set(
        "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
          " ",
        ),
      );
      function At(e, t, r) {
        var n = 0 === t.indexOf("--");
        null == r || "boolean" == typeof r || "" === r
          ? n
            ? e.setProperty(t, "")
            : "float" === t
              ? (e.cssFloat = "")
              : (e[t] = "")
          : n
            ? e.setProperty(t, r)
            : "number" != typeof r || 0 === r || Tt.has(t)
              ? "float" === t
                ? (e.cssFloat = r)
                : (e[t] = ("" + r).trim())
              : (e[t] = r + "px");
      }
      function wt(e, t, r) {
        if (null != t && "object" != typeof t) throw Error(a(62));
        if (((e = e.style), null != r)) {
          for (var n in r)
            !r.hasOwnProperty(n) ||
              (null != t && t.hasOwnProperty(n)) ||
              (0 === n.indexOf("--")
                ? e.setProperty(n, "")
                : "float" === n
                  ? (e.cssFloat = "")
                  : (e[n] = ""));
          for (var o in t)
            (n = t[o]), t.hasOwnProperty(o) && r[o] !== n && At(e, o, n);
        } else for (var i in t) t.hasOwnProperty(i) && At(e, i, t[i]);
      }
      function jt(e) {
        if (-1 === e.indexOf("-")) return !1;
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
      var Ot = new Map([
          ["acceptCharset", "accept-charset"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
          ["crossOrigin", "crossorigin"],
          ["accentHeight", "accent-height"],
          ["alignmentBaseline", "alignment-baseline"],
          ["arabicForm", "arabic-form"],
          ["baselineShift", "baseline-shift"],
          ["capHeight", "cap-height"],
          ["clipPath", "clip-path"],
          ["clipRule", "clip-rule"],
          ["colorInterpolation", "color-interpolation"],
          ["colorInterpolationFilters", "color-interpolation-filters"],
          ["colorProfile", "color-profile"],
          ["colorRendering", "color-rendering"],
          ["dominantBaseline", "dominant-baseline"],
          ["enableBackground", "enable-background"],
          ["fillOpacity", "fill-opacity"],
          ["fillRule", "fill-rule"],
          ["floodColor", "flood-color"],
          ["floodOpacity", "flood-opacity"],
          ["fontFamily", "font-family"],
          ["fontSize", "font-size"],
          ["fontSizeAdjust", "font-size-adjust"],
          ["fontStretch", "font-stretch"],
          ["fontStyle", "font-style"],
          ["fontVariant", "font-variant"],
          ["fontWeight", "font-weight"],
          ["glyphName", "glyph-name"],
          ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
          ["glyphOrientationVertical", "glyph-orientation-vertical"],
          ["horizAdvX", "horiz-adv-x"],
          ["horizOriginX", "horiz-origin-x"],
          ["imageRendering", "image-rendering"],
          ["letterSpacing", "letter-spacing"],
          ["lightingColor", "lighting-color"],
          ["markerEnd", "marker-end"],
          ["markerMid", "marker-mid"],
          ["markerStart", "marker-start"],
          ["overlinePosition", "overline-position"],
          ["overlineThickness", "overline-thickness"],
          ["paintOrder", "paint-order"],
          ["panose-1", "panose-1"],
          ["pointerEvents", "pointer-events"],
          ["renderingIntent", "rendering-intent"],
          ["shapeRendering", "shape-rendering"],
          ["stopColor", "stop-color"],
          ["stopOpacity", "stop-opacity"],
          ["strikethroughPosition", "strikethrough-position"],
          ["strikethroughThickness", "strikethrough-thickness"],
          ["strokeDasharray", "stroke-dasharray"],
          ["strokeDashoffset", "stroke-dashoffset"],
          ["strokeLinecap", "stroke-linecap"],
          ["strokeLinejoin", "stroke-linejoin"],
          ["strokeMiterlimit", "stroke-miterlimit"],
          ["strokeOpacity", "stroke-opacity"],
          ["strokeWidth", "stroke-width"],
          ["textAnchor", "text-anchor"],
          ["textDecoration", "text-decoration"],
          ["textRendering", "text-rendering"],
          ["transformOrigin", "transform-origin"],
          ["underlinePosition", "underline-position"],
          ["underlineThickness", "underline-thickness"],
          ["unicodeBidi", "unicode-bidi"],
          ["unicodeRange", "unicode-range"],
          ["unitsPerEm", "units-per-em"],
          ["vAlphabetic", "v-alphabetic"],
          ["vHanging", "v-hanging"],
          ["vIdeographic", "v-ideographic"],
          ["vMathematical", "v-mathematical"],
          ["vectorEffect", "vector-effect"],
          ["vertAdvY", "vert-adv-y"],
          ["vertOriginX", "vert-origin-x"],
          ["vertOriginY", "vert-origin-y"],
          ["wordSpacing", "word-spacing"],
          ["writingMode", "writing-mode"],
          ["xmlnsXlink", "xmlns:xlink"],
          ["xHeight", "x-height"],
        ]),
        Rt =
          /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
      function Ct(e) {
        return Rt.test("" + e)
          ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
          : e;
      }
      var Nt = null;
      function Pt(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement &&
            (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      var It = null,
        xt = null;
      function kt(e) {
        var t = He(e);
        if (t && (e = t.stateNode)) {
          var r = e[xe] || null;
          e: switch (((e = t.stateNode), t.type)) {
            case "input":
              if (
                (yt(
                  e,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name,
                ),
                (t = r.name),
                "radio" === r.type && null != t)
              ) {
                for (r = e; r.parentNode; ) r = r.parentNode;
                for (
                  r = r.querySelectorAll(
                    'input[name="' + ht("" + t) + '"][type="radio"]',
                  ),
                    t = 0;
                  t < r.length;
                  t++
                ) {
                  var n = r[t];
                  if (n !== e && n.form === e.form) {
                    var o = n[xe] || null;
                    if (!o) throw Error(a(90));
                    yt(
                      n,
                      o.value,
                      o.defaultValue,
                      o.defaultValue,
                      o.checked,
                      o.defaultChecked,
                      o.type,
                      o.name,
                    );
                  }
                }
                for (t = 0; t < r.length; t++)
                  (n = r[t]).form === e.form && pt(n);
              }
              break e;
            case "textarea":
              vt(e, r.value, r.defaultValue);
              break e;
            case "select":
              null != (t = r.value) && _t(e, !!r.multiple, t, !1);
          }
        }
      }
      var Mt = !1;
      function Lt(e, t, r) {
        if (Mt) return e(t, r);
        Mt = !0;
        try {
          return e(t);
        } finally {
          if (
            ((Mt = !1),
            (null !== It || null !== xt) &&
              (Wu(), It && ((t = It), (e = xt), (xt = It = null), kt(t), e)))
          )
            for (t = 0; t < e.length; t++) kt(e[t]);
        }
      }
      function Ut(e, t) {
        var r = e.stateNode;
        if (null === r) return null;
        var n = r[xe] || null;
        if (null === n) return null;
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
          case "onMouseEnter":
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
      var Dt = !(
          "undefined" == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
        ),
        Bt = !1;
      if (Dt)
        try {
          var Ft = {};
          Object.defineProperty(Ft, "passive", {
            get: function () {
              Bt = !0;
            },
          }),
            window.addEventListener("test", Ft, Ft),
            window.removeEventListener("test", Ft, Ft);
        } catch (e) {
          Bt = !1;
        }
      var Wt = null,
        Ht = null,
        Vt = null;
      function zt() {
        if (Vt) return Vt;
        var e,
          t,
          r = Ht,
          n = r.length,
          o = "value" in Wt ? Wt.value : Wt.textContent,
          i = o.length;
        for (e = 0; e < n && r[e] === o[e]; e++);
        var a = n - e;
        for (t = 1; t <= a && r[n - t] === o[i - t]; t++);
        return (Vt = o.slice(e, 1 < t ? 1 - t : void 0));
      }
      function Gt(e) {
        var t = e.keyCode;
        return (
          "charCode" in e
            ? 0 === (e = e.charCode) && 13 === t && (e = 13)
            : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      function Yt() {
        return !0;
      }
      function Kt() {
        return !1;
      }
      function $t(e) {
        function t(t, r, n, o, i) {
          for (var a in ((this._reactName = t),
          (this._targetInst = n),
          (this.type = r),
          (this.nativeEvent = o),
          (this.target = i),
          (this.currentTarget = null),
          e))
            e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(o) : o[a]));
          return (
            (this.isDefaultPrevented = (
              null != o.defaultPrevented
                ? o.defaultPrevented
                : !1 === o.returnValue
            )
              ? Yt
              : Kt),
            (this.isPropagationStopped = Kt),
            this
          );
        }
        return (
          p(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e &&
                (e.preventDefault
                  ? e.preventDefault()
                  : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                (this.isDefaultPrevented = Yt));
            },
            stopPropagation: function () {
              var e = this.nativeEvent;
              e &&
                (e.stopPropagation
                  ? e.stopPropagation()
                  : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                (this.isPropagationStopped = Yt));
            },
            persist: function () {},
            isPersistent: Yt,
          }),
          t
        );
      }
      var qt,
        Xt,
        Qt,
        Zt = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        Jt = $t(Zt),
        er = p({}, Zt, { view: 0, detail: 0 }),
        tr = $t(er),
        rr = p({}, er, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: fr,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return void 0 === e.relatedTarget
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget;
          },
          movementX: function (e) {
            return "movementX" in e
              ? e.movementX
              : (e !== Qt &&
                  (Qt && "mousemove" === e.type
                    ? ((qt = e.screenX - Qt.screenX),
                      (Xt = e.screenY - Qt.screenY))
                    : (Xt = qt = 0),
                  (Qt = e)),
                qt);
          },
          movementY: function (e) {
            return "movementY" in e ? e.movementY : Xt;
          },
        }),
        nr = $t(rr),
        or = $t(p({}, rr, { dataTransfer: 0 })),
        ir = $t(p({}, er, { relatedTarget: 0 })),
        ar = $t(
          p({}, Zt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        ),
        sr = $t(
          p({}, Zt, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
        ),
        lr = $t(p({}, Zt, { data: 0 })),
        ur = {
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
        gr = {
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
        cr = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey",
        };
      function pr(e) {
        var t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : !!(e = cr[e]) && !!t[e];
      }
      function fr() {
        return pr;
      }
      var dr = $t(
          p({}, er, {
            key: function (e) {
              if (e.key) {
                var t = ur[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = Gt(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? gr[e.keyCode] || "Unidentified"
                  : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: fr,
            charCode: function (e) {
              return "keypress" === e.type ? Gt(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? Gt(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
            },
          }),
        ),
        hr = $t(
          p({}, rr, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
          }),
        ),
        yr = $t(
          p({}, er, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: fr,
          }),
        ),
        br = $t(
          p({}, Zt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        ),
        mr = $t(
          p({}, rr, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
        ),
        _r = $t(p({}, Zt, { newState: 0, oldState: 0 })),
        vr = [9, 13, 27, 32],
        Sr = Dt && "CompositionEvent" in window,
        Er = null;
      Dt && "documentMode" in document && (Er = document.documentMode);
      var Tr = Dt && "TextEvent" in window && !Er,
        Ar = Dt && (!Sr || (Er && 8 < Er && 11 >= Er)),
        wr = String.fromCharCode(32),
        jr = !1;
      function Or(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== vr.indexOf(t.keyCode);
          case "keydown":
            return 229 !== t.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return !0;
          default:
            return !1;
        }
      }
      function Rr(e) {
        return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
      }
      var Cr = !1;
      var Nr = {
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
      function Pr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Nr[e.type] : "textarea" === t;
      }
      function Ir(e, t, r, n) {
        It ? (xt ? xt.push(n) : (xt = [n])) : (It = n),
          0 < (t = zg(t, "onChange")).length &&
            ((r = new Jt("onChange", "change", null, r, n)),
            e.push({ event: r, listeners: t }));
      }
      var xr = null,
        kr = null;
      function Mr(e) {
        Lg(e, 0);
      }
      function Lr(e) {
        if (pt(Ve(e))) return e;
      }
      function Ur(e, t) {
        if ("change" === e) return t;
      }
      var Dr = !1;
      if (Dt) {
        var Br;
        if (Dt) {
          var Fr = "oninput" in document;
          if (!Fr) {
            var Wr = document.createElement("div");
            Wr.setAttribute("oninput", "return;"),
              (Fr = "function" == typeof Wr.oninput);
          }
          Br = Fr;
        } else Br = !1;
        Dr = Br && (!document.documentMode || 9 < document.documentMode);
      }
      function Hr() {
        xr && (xr.detachEvent("onpropertychange", Vr), (kr = xr = null));
      }
      function Vr(e) {
        if ("value" === e.propertyName && Lr(kr)) {
          var t = [];
          Ir(t, kr, e, Pt(e)), Lt(Mr, t);
        }
      }
      function zr(e, t, r) {
        "focusin" === e
          ? (Hr(), (kr = r), (xr = t).attachEvent("onpropertychange", Vr))
          : "focusout" === e && Hr();
      }
      function Gr(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e)
          return Lr(kr);
      }
      function Yr(e, t) {
        if ("click" === e) return Lr(t);
      }
      function Kr(e, t) {
        if ("input" === e || "change" === e) return Lr(t);
      }
      var $r =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            };
      function qr(e, t) {
        if ($r(e, t)) return !0;
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
        for (n = 0; n < r.length; n++) {
          var o = r[n];
          if (!X.call(t, o) || !$r(e[o], t[o])) return !1;
        }
        return !0;
      }
      function Xr(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function Qr(e, t) {
        var r,
          n = Xr(e);
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
          n = Xr(n);
        }
      }
      function Zr(e, t) {
        return (
          !(!e || !t) &&
          (e === t ||
            ((!e || 3 !== e.nodeType) &&
              (t && 3 === t.nodeType
                ? Zr(e, t.parentNode)
                : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
        );
      }
      function Jr(e) {
        for (
          var t = ft(
            (e =
              null != e &&
              null != e.ownerDocument &&
              null != e.ownerDocument.defaultView
                ? e.ownerDocument.defaultView
                : window).document,
          );
          t instanceof e.HTMLIFrameElement;
        ) {
          try {
            var r = "string" == typeof t.contentWindow.location.href;
          } catch (e) {
            r = !1;
          }
          if (!r) break;
          t = ft((e = t.contentWindow).document);
        }
        return t;
      }
      function en(e) {
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
      var tn = Dt && "documentMode" in document && 11 >= document.documentMode,
        rn = null,
        nn = null,
        on = null,
        an = !1;
      function sn(e, t, r) {
        var n =
          r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
        an ||
          null == rn ||
          rn !== ft(n) ||
          ("selectionStart" in (n = rn) && en(n)
            ? (n = { start: n.selectionStart, end: n.selectionEnd })
            : (n = {
                anchorNode: (n = (
                  (n.ownerDocument && n.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset,
              }),
          (on && qr(on, n)) ||
            ((on = n),
            0 < (n = zg(nn, "onSelect")).length &&
              ((t = new Jt("onSelect", "select", null, t, r)),
              e.push({ event: t, listeners: n }),
              (t.target = rn))));
      }
      function ln(e, t) {
        var r = {};
        return (
          (r[e.toLowerCase()] = t.toLowerCase()),
          (r["Webkit" + e] = "webkit" + t),
          (r["Moz" + e] = "moz" + t),
          r
        );
      }
      var un = {
          animationend: ln("Animation", "AnimationEnd"),
          animationiteration: ln("Animation", "AnimationIteration"),
          animationstart: ln("Animation", "AnimationStart"),
          transitionrun: ln("Transition", "TransitionRun"),
          transitionstart: ln("Transition", "TransitionStart"),
          transitioncancel: ln("Transition", "TransitionCancel"),
          transitionend: ln("Transition", "TransitionEnd"),
        },
        gn = {},
        cn = {};
      function pn(e) {
        if (gn[e]) return gn[e];
        if (!un[e]) return e;
        var t,
          r = un[e];
        for (t in r) if (r.hasOwnProperty(t) && t in cn) return (gn[e] = r[t]);
        return e;
      }
      Dt &&
        ((cn = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete un.animationend.animation,
          delete un.animationiteration.animation,
          delete un.animationstart.animation),
        "TransitionEvent" in window || delete un.transitionend.transition);
      var fn = pn("animationend"),
        dn = pn("animationiteration"),
        hn = pn("animationstart"),
        yn = pn("transitionrun"),
        bn = pn("transitionstart"),
        mn = pn("transitioncancel"),
        _n = pn("transitionend"),
        vn = new Map(),
        Sn =
          "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " ",
          );
      function En(e, t) {
        vn.set(e, t), $e(t, [e]);
      }
      Sn.push("scrollEnd");
      var Tn = new WeakMap();
      function An(e, t) {
        if ("object" == typeof e && null !== e) {
          var r = Tn.get(e);
          return void 0 !== r
            ? r
            : ((t = { value: e, source: t, stack: lt(t) }), Tn.set(e, t), t);
        }
        return { value: e, source: t, stack: lt(t) };
      }
      var wn = [],
        jn = 0,
        On = 0;
      function Rn() {
        for (var e = jn, t = (On = jn = 0); t < e; ) {
          var r = wn[t];
          wn[t++] = null;
          var n = wn[t];
          wn[t++] = null;
          var o = wn[t];
          wn[t++] = null;
          var i = wn[t];
          if (((wn[t++] = null), null !== n && null !== o)) {
            var a = n.pending;
            null === a ? (o.next = o) : ((o.next = a.next), (a.next = o)),
              (n.pending = o);
          }
          0 !== i && In(r, o, i);
        }
      }
      function Cn(e, t, r, n) {
        (wn[jn++] = e),
          (wn[jn++] = t),
          (wn[jn++] = r),
          (wn[jn++] = n),
          (On |= n),
          (e.lanes |= n),
          null !== (e = e.alternate) && (e.lanes |= n);
      }
      function Nn(e, t, r, n) {
        return Cn(e, t, r, n), xn(e);
      }
      function Pn(e, t) {
        return Cn(e, null, null, t), xn(e);
      }
      function In(e, t, r) {
        e.lanes |= r;
        var n = e.alternate;
        null !== n && (n.lanes |= r);
        for (var o = !1, i = e.return; null !== i; )
          (i.childLanes |= r),
            null !== (n = i.alternate) && (n.childLanes |= r),
            22 === i.tag &&
              (null === (e = i.stateNode) || 1 & e._visibility || (o = !0)),
            (e = i),
            (i = i.return);
        return 3 === e.tag
          ? ((i = e.stateNode),
            o &&
              null !== t &&
              ((o = 31 - fe(r)),
              null === (n = (e = i.hiddenUpdates)[o])
                ? (e[o] = [t])
                : n.push(t),
              (t.lane = 536870912 | r)),
            i)
          : null;
      }
      function xn(e) {
        if (50 < Iu) throw ((Iu = 0), (xu = null), Error(a(185)));
        for (var t = e.return; null !== t; ) t = (e = t).return;
        return 3 === e.tag ? e.stateNode : null;
      }
      var kn = {};
      function Mn(e, t, r, n) {
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
          (this.refCleanup = this.ref = null),
          (this.pendingProps = t),
          (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
              null),
          (this.mode = n),
          (this.subtreeFlags = this.flags = 0),
          (this.deletions = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null);
      }
      function Ln(e, t, r, n) {
        return new Mn(e, t, r, n);
      }
      function Un(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function Dn(e, t) {
        var r = e.alternate;
        return (
          null === r
            ? (((r = Ln(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (r.type = e.type),
              (r.stateNode = e.stateNode),
              (r.alternate = e),
              (e.alternate = r))
            : ((r.pendingProps = t),
              (r.type = e.type),
              (r.flags = 0),
              (r.subtreeFlags = 0),
              (r.deletions = null)),
          (r.flags = 65011712 & e.flags),
          (r.childLanes = e.childLanes),
          (r.lanes = e.lanes),
          (r.child = e.child),
          (r.memoizedProps = e.memoizedProps),
          (r.memoizedState = e.memoizedState),
          (r.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (r.dependencies =
            null === t
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext }),
          (r.sibling = e.sibling),
          (r.index = e.index),
          (r.ref = e.ref),
          (r.refCleanup = e.refCleanup),
          r
        );
      }
      function Bn(e, t) {
        e.flags &= 65011714;
        var r = e.alternate;
        return (
          null === r
            ? ((e.childLanes = 0),
              (e.lanes = t),
              (e.child = null),
              (e.subtreeFlags = 0),
              (e.memoizedProps = null),
              (e.memoizedState = null),
              (e.updateQueue = null),
              (e.dependencies = null),
              (e.stateNode = null))
            : ((e.childLanes = r.childLanes),
              (e.lanes = r.lanes),
              (e.child = r.child),
              (e.subtreeFlags = 0),
              (e.deletions = null),
              (e.memoizedProps = r.memoizedProps),
              (e.memoizedState = r.memoizedState),
              (e.updateQueue = r.updateQueue),
              (e.type = r.type),
              (t = r.dependencies),
              (e.dependencies =
                null === t
                  ? null
                  : { lanes: t.lanes, firstContext: t.firstContext })),
          e
        );
      }
      function Fn(e, t, r, n, o, i) {
        var s = 0;
        if (((n = e), "function" == typeof e)) Un(e) && (s = 1);
        else if ("string" == typeof e)
          s = (function (e, t, r) {
            if (1 === r || null != t.itemProp) return !1;
            switch (e) {
              case "meta":
              case "title":
                return !0;
              case "style":
                if (
                  "string" != typeof t.precedence ||
                  "string" != typeof t.href ||
                  "" === t.href
                )
                  break;
                return !0;
              case "link":
                if (
                  "string" != typeof t.rel ||
                  "string" != typeof t.href ||
                  "" === t.href ||
                  t.onLoad ||
                  t.onError
                )
                  break;
                return (
                  "stylesheet" !== t.rel ||
                  ((e = t.disabled),
                  "string" == typeof t.precedence && null == e)
                );
              case "script":
                if (
                  t.async &&
                  "function" != typeof t.async &&
                  "symbol" != typeof t.async &&
                  !t.onLoad &&
                  !t.onError &&
                  t.src &&
                  "string" == typeof t.src
                )
                  return !0;
            }
            return !1;
          })(e, r, H.current)
            ? 26
            : "html" === e || "head" === e || "body" === e
              ? 27
              : 5;
        else
          e: switch (e) {
            case O:
              return ((e = Ln(31, r, t, o)).elementType = O), (e.lanes = i), e;
            case y:
              return Wn(r.children, o, i, t);
            case b:
              (s = 8), (o |= 24);
              break;
            case m:
              return (
                ((e = Ln(12, r, t, 2 | o)).elementType = m), (e.lanes = i), e
              );
            case T:
              return ((e = Ln(13, r, t, o)).elementType = T), (e.lanes = i), e;
            case A:
              return ((e = Ln(19, r, t, o)).elementType = A), (e.lanes = i), e;
            default:
              if ("object" == typeof e && null !== e)
                switch (e.$$typeof) {
                  case _:
                  case S:
                    s = 10;
                    break e;
                  case v:
                    s = 9;
                    break e;
                  case E:
                    s = 11;
                    break e;
                  case w:
                    s = 14;
                    break e;
                  case j:
                    (s = 16), (n = null);
                    break e;
                }
              (s = 29),
                (r = Error(a(130, null === e ? "null" : typeof e, ""))),
                (n = null);
          }
        return (
          ((t = Ln(s, r, t, o)).elementType = e), (t.type = n), (t.lanes = i), t
        );
      }
      function Wn(e, t, r, n) {
        return ((e = Ln(7, e, n, t)).lanes = r), e;
      }
      function Hn(e, t, r) {
        return ((e = Ln(6, e, null, t)).lanes = r), e;
      }
      function Vn(e, t, r) {
        return (
          ((t = Ln(4, null !== e.children ? e.children : [], e.key, t)).lanes =
            r),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
          }),
          t
        );
      }
      var zn = [],
        Gn = 0,
        Yn = null,
        Kn = 0,
        $n = [],
        qn = 0,
        Xn = null,
        Qn = 1,
        Zn = "";
      function Jn(e, t) {
        (zn[Gn++] = Kn), (zn[Gn++] = Yn), (Yn = e), (Kn = t);
      }
      function eo(e, t, r) {
        ($n[qn++] = Qn), ($n[qn++] = Zn), ($n[qn++] = Xn), (Xn = e);
        var n = Qn;
        e = Zn;
        var o = 32 - fe(n) - 1;
        (n &= ~(1 << o)), (r += 1);
        var i = 32 - fe(t) + o;
        if (30 < i) {
          var a = o - (o % 5);
          (i = (n & ((1 << a) - 1)).toString(32)),
            (n >>= a),
            (o -= a),
            (Qn = (1 << (32 - fe(t) + o)) | (r << o) | n),
            (Zn = i + e);
        } else (Qn = (1 << i) | (r << o) | n), (Zn = e);
      }
      function to(e) {
        null !== e.return && (Jn(e, 1), eo(e, 1, 0));
      }
      function ro(e) {
        for (; e === Yn; )
          (Yn = zn[--Gn]), (zn[Gn] = null), (Kn = zn[--Gn]), (zn[Gn] = null);
        for (; e === Xn; )
          (Xn = $n[--qn]),
            ($n[qn] = null),
            (Zn = $n[--qn]),
            ($n[qn] = null),
            (Qn = $n[--qn]),
            ($n[qn] = null);
      }
      var no = null,
        oo = null,
        io = !1,
        ao = null,
        so = !1,
        lo = Error(a(519));
      function uo(e) {
        throw (yo(An(Error(a(418, "")), e)), lo);
      }
      function go(e) {
        var t = e.stateNode,
          r = e.type,
          n = e.memoizedProps;
        switch (((t[Ie] = e), (t[xe] = n), r)) {
          case "dialog":
            Ug("cancel", t), Ug("close", t);
            break;
          case "iframe":
          case "object":
          case "embed":
            Ug("load", t);
            break;
          case "video":
          case "audio":
            for (r = 0; r < kg.length; r++) Ug(kg[r], t);
            break;
          case "source":
            Ug("error", t);
            break;
          case "img":
          case "image":
          case "link":
            Ug("error", t), Ug("load", t);
            break;
          case "details":
            Ug("toggle", t);
            break;
          case "input":
            Ug("invalid", t),
              bt(
                t,
                n.value,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
                !0,
              ),
              ct(t);
            break;
          case "select":
            Ug("invalid", t);
            break;
          case "textarea":
            Ug("invalid", t), St(t, n.value, n.defaultValue, n.children), ct(t);
        }
        ("string" != typeof (r = n.children) &&
          "number" != typeof r &&
          "bigint" != typeof r) ||
        t.textContent === "" + r ||
        !0 === n.suppressHydrationWarning ||
        Xg(t.textContent, r)
          ? (null != n.popover && (Ug("beforetoggle", t), Ug("toggle", t)),
            null != n.onScroll && Ug("scroll", t),
            null != n.onScrollEnd && Ug("scrollend", t),
            null != n.onClick && (t.onclick = Qg),
            (t = !0))
          : (t = !1),
          t || uo(e);
      }
      function co(e) {
        for (no = e.return; no; )
          switch (no.tag) {
            case 5:
            case 13:
              return void (so = !1);
            case 27:
            case 3:
              return void (so = !0);
            default:
              no = no.return;
          }
      }
      function po(e) {
        if (e !== no) return !1;
        if (!io) return co(e), (io = !0), !1;
        var t,
          r = e.tag;
        if (
          ((t = 3 !== r && 27 !== r) &&
            ((t = 5 === r) &&
              (t =
                !("form" !== (t = e.type) && "button" !== t) ||
                ac(e.type, e.memoizedProps)),
            (t = !t)),
          t && oo && uo(e),
          co(e),
          13 === r)
        ) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
            throw Error(a(317));
          e: {
            for (e = e.nextSibling, r = 0; e; ) {
              if (8 === e.nodeType)
                if ("/$" === (t = e.data)) {
                  if (0 === r) {
                    oo = bc(e.nextSibling);
                    break e;
                  }
                  r--;
                } else ("$" !== t && "$!" !== t && "$?" !== t) || r++;
              e = e.nextSibling;
            }
            oo = null;
          }
        } else
          27 === r
            ? ((r = oo),
              fc(e.type) ? ((e = mc), (mc = null), (oo = e)) : (oo = r))
            : (oo = no ? bc(e.stateNode.nextSibling) : null);
        return !0;
      }
      function fo() {
        (oo = no = null), (io = !1);
      }
      function ho() {
        var e = ao;
        return (
          null !== e &&
            (null === _u ? (_u = e) : _u.push.apply(_u, e), (ao = null)),
          e
        );
      }
      function yo(e) {
        null === ao ? (ao = [e]) : ao.push(e);
      }
      var bo = B(null),
        mo = null,
        _o = null;
      function vo(e, t, r) {
        W(bo, t._currentValue), (t._currentValue = r);
      }
      function So(e) {
        (e._currentValue = bo.current), F(bo);
      }
      function Eo(e, t, r) {
        for (; null !== e; ) {
          var n = e.alternate;
          if (
            ((e.childLanes & t) !== t
              ? ((e.childLanes |= t), null !== n && (n.childLanes |= t))
              : null !== n && (n.childLanes & t) !== t && (n.childLanes |= t),
            e === r)
          )
            break;
          e = e.return;
        }
      }
      function To(e, t, r, n) {
        var o = e.child;
        for (null !== o && (o.return = e); null !== o; ) {
          var i = o.dependencies;
          if (null !== i) {
            var s = o.child;
            i = i.firstContext;
            e: for (; null !== i; ) {
              var l = i;
              i = o;
              for (var u = 0; u < t.length; u++)
                if (l.context === t[u]) {
                  (i.lanes |= r),
                    null !== (l = i.alternate) && (l.lanes |= r),
                    Eo(i.return, r, e),
                    n || (s = null);
                  break e;
                }
              i = l.next;
            }
          } else if (18 === o.tag) {
            if (null === (s = o.return)) throw Error(a(341));
            (s.lanes |= r),
              null !== (i = s.alternate) && (i.lanes |= r),
              Eo(s, r, e),
              (s = null);
          } else s = o.child;
          if (null !== s) s.return = o;
          else
            for (s = o; null !== s; ) {
              if (s === e) {
                s = null;
                break;
              }
              if (null !== (o = s.sibling)) {
                (o.return = s.return), (s = o);
                break;
              }
              s = s.return;
            }
          o = s;
        }
      }
      function Ao(e, t, r, n) {
        e = null;
        for (var o = t, i = !1; null !== o; ) {
          if (!i)
            if (0 != (524288 & o.flags)) i = !0;
            else if (0 != (262144 & o.flags)) break;
          if (10 === o.tag) {
            var s = o.alternate;
            if (null === s) throw Error(a(387));
            if (null !== (s = s.memoizedProps)) {
              var l = o.type;
              $r(o.pendingProps.value, s.value) ||
                (null !== e ? e.push(l) : (e = [l]));
            }
          } else if (o === G.current) {
            if (null === (s = o.alternate)) throw Error(a(387));
            s.memoizedState.memoizedState !== o.memoizedState.memoizedState &&
              (null !== e ? e.push($c) : (e = [$c]));
          }
          o = o.return;
        }
        null !== e && To(t, e, r, n), (t.flags |= 262144);
      }
      function wo(e) {
        for (e = e.firstContext; null !== e; ) {
          if (!$r(e.context._currentValue, e.memoizedValue)) return !0;
          e = e.next;
        }
        return !1;
      }
      function jo(e) {
        (mo = e),
          (_o = null),
          null !== (e = e.dependencies) && (e.firstContext = null);
      }
      function Oo(e) {
        return Co(mo, e);
      }
      function Ro(e, t) {
        return null === mo && jo(e), Co(e, t);
      }
      function Co(e, t) {
        var r = t._currentValue;
        if (((t = { context: t, memoizedValue: r, next: null }), null === _o)) {
          if (null === e) throw Error(a(308));
          (_o = t),
            (e.dependencies = { lanes: 0, firstContext: t }),
            (e.flags |= 524288);
        } else _o = _o.next = t;
        return r;
      }
      var No =
          "undefined" != typeof AbortController
            ? AbortController
            : function () {
                var e = [],
                  t = (this.signal = {
                    aborted: !1,
                    addEventListener: function (t, r) {
                      e.push(r);
                    },
                  });
                this.abort = function () {
                  (t.aborted = !0),
                    e.forEach(function (e) {
                      return e();
                    });
                };
              },
        Po = n.unstable_scheduleCallback,
        Io = n.unstable_NormalPriority,
        xo = {
          $$typeof: S,
          Consumer: null,
          Provider: null,
          _currentValue: null,
          _currentValue2: null,
          _threadCount: 0,
        };
      function ko() {
        return { controller: new No(), data: new Map(), refCount: 0 };
      }
      function Mo(e) {
        e.refCount--,
          0 === e.refCount &&
            Po(Io, function () {
              e.controller.abort();
            });
      }
      var Lo = null,
        Uo = 0,
        Do = 0,
        Bo = null;
      function Fo() {
        if (0 == --Uo && null !== Lo) {
          null !== Bo && (Bo.status = "fulfilled");
          var e = Lo;
          (Lo = null), (Do = 0), (Bo = null);
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
      }
      var Wo = k.S;
      k.S = function (e, t) {
        "object" == typeof t &&
          null !== t &&
          "function" == typeof t.then &&
          (function (e, t) {
            if (null === Lo) {
              var r = (Lo = []);
              (Uo = 0),
                (Do = Cg()),
                (Bo = {
                  status: "pending",
                  value: void 0,
                  then: function (e) {
                    r.push(e);
                  },
                });
            }
            Uo++, t.then(Fo, Fo);
          })(0, t),
          null !== Wo && Wo(e, t);
      };
      var Ho = B(null);
      function Vo() {
        var e = Ho.current;
        return null !== e ? e : nu.pooledCache;
      }
      function zo(e, t) {
        W(Ho, null === t ? Ho.current : t.pool);
      }
      function Go() {
        var e = Vo();
        return null === e ? null : { parent: xo._currentValue, pool: e };
      }
      var Yo = Error(a(460)),
        Ko = Error(a(474)),
        $o = Error(a(542)),
        qo = { then: function () {} };
      function Xo(e) {
        return "fulfilled" === (e = e.status) || "rejected" === e;
      }
      function Qo() {}
      function Zo(e, t, r) {
        switch (
          (void 0 === (r = e[r])
            ? e.push(t)
            : r !== t && (t.then(Qo, Qo), (t = r)),
          t.status)
        ) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw (ti((e = t.reason)), e);
          default:
            if ("string" == typeof t.status) t.then(Qo, Qo);
            else {
              if (null !== (e = nu) && 100 < e.shellSuspendCounter)
                throw Error(a(482));
              ((e = t).status = "pending"),
                e.then(
                  function (e) {
                    if ("pending" === t.status) {
                      var r = t;
                      (r.status = "fulfilled"), (r.value = e);
                    }
                  },
                  function (e) {
                    if ("pending" === t.status) {
                      var r = t;
                      (r.status = "rejected"), (r.reason = e);
                    }
                  },
                );
            }
            switch (t.status) {
              case "fulfilled":
                return t.value;
              case "rejected":
                throw (ti((e = t.reason)), e);
            }
            throw ((Jo = t), Yo);
        }
      }
      var Jo = null;
      function ei() {
        if (null === Jo) throw Error(a(459));
        var e = Jo;
        return (Jo = null), e;
      }
      function ti(e) {
        if (e === Yo || e === $o) throw Error(a(483));
      }
      var ri = !1;
      function ni(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, lanes: 0, hiddenCallbacks: null },
          callbacks: null,
        };
      }
      function oi(e, t) {
        (e = e.updateQueue),
          t.updateQueue === e &&
            (t.updateQueue = {
              baseState: e.baseState,
              firstBaseUpdate: e.firstBaseUpdate,
              lastBaseUpdate: e.lastBaseUpdate,
              shared: e.shared,
              callbacks: null,
            });
      }
      function ii(e) {
        return { lane: e, tag: 0, payload: null, callback: null, next: null };
      }
      function ai(e, t, r) {
        var n = e.updateQueue;
        if (null === n) return null;
        if (((n = n.shared), 0 != (2 & ru))) {
          var o = n.pending;
          return (
            null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
            (n.pending = t),
            (t = xn(e)),
            In(e, null, r),
            t
          );
        }
        return Cn(e, n, t, r), xn(e);
      }
      function si(e, t, r) {
        if (
          null !== (t = t.updateQueue) &&
          ((t = t.shared), 0 != (4194048 & r))
        ) {
          var n = t.lanes;
          (r |= n &= e.pendingLanes), (t.lanes = r), Oe(e, r);
        }
      }
      function li(e, t) {
        var r = e.updateQueue,
          n = e.alternate;
        if (null !== n && r === (n = n.updateQueue)) {
          var o = null,
            i = null;
          if (null !== (r = r.firstBaseUpdate)) {
            do {
              var a = {
                lane: r.lane,
                tag: r.tag,
                payload: r.payload,
                callback: null,
                next: null,
              };
              null === i ? (o = i = a) : (i = i.next = a), (r = r.next);
            } while (null !== r);
            null === i ? (o = i = t) : (i = i.next = t);
          } else o = i = t;
          return (
            (r = {
              baseState: n.baseState,
              firstBaseUpdate: o,
              lastBaseUpdate: i,
              shared: n.shared,
              callbacks: n.callbacks,
            }),
            void (e.updateQueue = r)
          );
        }
        null === (e = r.lastBaseUpdate)
          ? (r.firstBaseUpdate = t)
          : (e.next = t),
          (r.lastBaseUpdate = t);
      }
      var ui = !1;
      function gi() {
        if (ui) {
          if (null !== Bo) throw Bo;
        }
      }
      function ci(e, t, r, n) {
        ui = !1;
        var o = e.updateQueue;
        ri = !1;
        var i = o.firstBaseUpdate,
          a = o.lastBaseUpdate,
          s = o.shared.pending;
        if (null !== s) {
          o.shared.pending = null;
          var l = s,
            u = l.next;
          (l.next = null), null === a ? (i = u) : (a.next = u), (a = l);
          var g = e.alternate;
          null !== g &&
            (s = (g = g.updateQueue).lastBaseUpdate) !== a &&
            (null === s ? (g.firstBaseUpdate = u) : (s.next = u),
            (g.lastBaseUpdate = l));
        }
        if (null !== i) {
          var c = o.baseState;
          for (a = 0, g = u = l = null, s = i; ; ) {
            var f = -536870913 & s.lane,
              d = f !== s.lane;
            if (d ? (iu & f) === f : (n & f) === f) {
              0 !== f && f === Do && (ui = !0),
                null !== g &&
                  (g = g.next =
                    {
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: null,
                      next: null,
                    });
              e: {
                var h = e,
                  y = s;
                f = t;
                var b = r;
                switch (y.tag) {
                  case 1:
                    if ("function" == typeof (h = y.payload)) {
                      c = h.call(b, c, f);
                      break e;
                    }
                    c = h;
                    break e;
                  case 3:
                    h.flags = (-65537 & h.flags) | 128;
                  case 0:
                    if (
                      null ==
                      (f =
                        "function" == typeof (h = y.payload)
                          ? h.call(b, c, f)
                          : h)
                    )
                      break e;
                    c = p({}, c, f);
                    break e;
                  case 2:
                    ri = !0;
                }
              }
              null !== (f = s.callback) &&
                ((e.flags |= 64),
                d && (e.flags |= 8192),
                null === (d = o.callbacks) ? (o.callbacks = [f]) : d.push(f));
            } else
              (d = {
                lane: f,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null,
              }),
                null === g ? ((u = g = d), (l = c)) : (g = g.next = d),
                (a |= f);
            if (null === (s = s.next)) {
              if (null === (s = o.shared.pending)) break;
              (s = (d = s).next),
                (d.next = null),
                (o.lastBaseUpdate = d),
                (o.shared.pending = null);
            }
          }
          null === g && (l = c),
            (o.baseState = l),
            (o.firstBaseUpdate = u),
            (o.lastBaseUpdate = g),
            null === i && (o.shared.lanes = 0),
            (fu |= a),
            (e.lanes = a),
            (e.memoizedState = c);
        }
      }
      function pi(e, t) {
        if ("function" != typeof e) throw Error(a(191, e));
        e.call(t);
      }
      function fi(e, t) {
        var r = e.callbacks;
        if (null !== r)
          for (e.callbacks = null, e = 0; e < r.length; e++) pi(r[e], t);
      }
      var di = B(null),
        hi = B(0);
      function yi(e, t) {
        W(hi, (e = cu)), W(di, t), (cu = e | t.baseLanes);
      }
      function bi() {
        W(hi, cu), W(di, di.current);
      }
      function mi() {
        (cu = hi.current), F(di), F(hi);
      }
      var _i = 0,
        vi = null,
        Si = null,
        Ei = null,
        Ti = !1,
        Ai = !1,
        wi = !1,
        ji = 0,
        Oi = 0,
        Ri = null,
        Ci = 0;
      function Ni() {
        throw Error(a(321));
      }
      function Pi(e, t) {
        if (null === t) return !1;
        for (var r = 0; r < t.length && r < e.length; r++)
          if (!$r(e[r], t[r])) return !1;
        return !0;
      }
      function Ii(e, t, r, n, o, i) {
        return (
          (_i = i),
          (vi = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.lanes = 0),
          (k.H = null === e || null === e.memoizedState ? Ya : Ka),
          (wi = !1),
          (i = r(n, o)),
          (wi = !1),
          Ai && (i = ki(t, r, n, o)),
          xi(e),
          i
        );
      }
      function xi(e) {
        k.H = Ga;
        var t = null !== Si && null !== Si.next;
        if (
          ((_i = 0), (Ei = Si = vi = null), (Ti = !1), (Oi = 0), (Ri = null), t)
        )
          throw Error(a(300));
        null === e ||
          Os ||
          (null !== (e = e.dependencies) && wo(e) && (Os = !0));
      }
      function ki(e, t, r, n) {
        vi = e;
        var o = 0;
        do {
          if ((Ai && (Ri = null), (Oi = 0), (Ai = !1), 25 <= o))
            throw Error(a(301));
          if (((o += 1), (Ei = Si = null), null != e.updateQueue)) {
            var i = e.updateQueue;
            (i.lastEffect = null),
              (i.events = null),
              (i.stores = null),
              null != i.memoCache && (i.memoCache.index = 0);
          }
          (k.H = $a), (i = t(r, n));
        } while (Ai);
        return i;
      }
      function Mi() {
        var e = k.H,
          t = e.useState()[0];
        return (
          (t = "function" == typeof t.then ? Wi(t) : t),
          (e = e.useState()[0]),
          (null !== Si ? Si.memoizedState : null) !== e && (vi.flags |= 1024),
          t
        );
      }
      function Li() {
        var e = 0 !== ji;
        return (ji = 0), e;
      }
      function Ui(e, t, r) {
        (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~r);
      }
      function Di(e) {
        if (Ti) {
          for (e = e.memoizedState; null !== e; ) {
            var t = e.queue;
            null !== t && (t.pending = null), (e = e.next);
          }
          Ti = !1;
        }
        (_i = 0), (Ei = Si = vi = null), (Ai = !1), (Oi = ji = 0), (Ri = null);
      }
      function Bi() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
        };
        return (
          null === Ei ? (vi.memoizedState = Ei = e) : (Ei = Ei.next = e), Ei
        );
      }
      function Fi() {
        if (null === Si) {
          var e = vi.alternate;
          e = null !== e ? e.memoizedState : null;
        } else e = Si.next;
        var t = null === Ei ? vi.memoizedState : Ei.next;
        if (null !== t) (Ei = t), (Si = e);
        else {
          if (null === e) {
            if (null === vi.alternate) throw Error(a(467));
            throw Error(a(310));
          }
          (e = {
            memoizedState: (Si = e).memoizedState,
            baseState: Si.baseState,
            baseQueue: Si.baseQueue,
            queue: Si.queue,
            next: null,
          }),
            null === Ei ? (vi.memoizedState = Ei = e) : (Ei = Ei.next = e);
        }
        return Ei;
      }
      function Wi(e) {
        var t = Oi;
        return (
          (Oi += 1),
          null === Ri && (Ri = []),
          (e = Zo(Ri, e, t)),
          (t = vi),
          null === (null === Ei ? t.memoizedState : Ei.next) &&
            ((t = t.alternate),
            (k.H = null === t || null === t.memoizedState ? Ya : Ka)),
          e
        );
      }
      function Hi(e) {
        if (null !== e && "object" == typeof e) {
          if ("function" == typeof e.then) return Wi(e);
          if (e.$$typeof === S) return Oo(e);
        }
        throw Error(a(438, String(e)));
      }
      function Vi(e) {
        var t = null,
          r = vi.updateQueue;
        if ((null !== r && (t = r.memoCache), null == t)) {
          var n = vi.alternate;
          null !== n &&
            null !== (n = n.updateQueue) && null != (n = n.memoCache) &&
            (t = {
              data: n.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            });
        }
        if (
          (null == t && (t = { data: [], index: 0 }),
          null === r &&
            ((r = {
              lastEffect: null,
              events: null,
              stores: null,
              memoCache: null,
            }),
            (vi.updateQueue = r)),
          (r.memoCache = t),
          void 0 === (r = t.data[t.index]))
        )
          for (r = t.data[t.index] = Array(e), n = 0; n < e; n++) r[n] = R;
        return t.index++, r;
      }
      function zi(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      function Gi(e) {
        return Yi(Fi(), Si, e);
      }
      function Yi(e, t, r) {
        var n = e.queue;
        if (null === n) throw Error(a(311));
        n.lastRenderedReducer = r;
        var o = e.baseQueue,
          i = n.pending;
        if (null !== i) {
          if (null !== o) {
            var s = o.next;
            (o.next = i.next), (i.next = s);
          }
          (t.baseQueue = o = i), (n.pending = null);
        }
        if (((i = e.baseState), null === o)) e.memoizedState = i;
        else {
          var l = (s = null),
            u = null,
            g = (t = o.next),
            c = !1;
          do {
            var p = -536870913 & g.lane;
            if (p !== g.lane ? (iu & p) === p : (_i & p) === p) {
              var f = g.revertLane;
              if (0 === f)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      revertLane: 0,
                      action: g.action,
                      hasEagerState: g.hasEagerState,
                      eagerState: g.eagerState,
                      next: null,
                    }),
                  p === Do && (c = !0);
              else {
                if ((_i & f) === f) {
                  (g = g.next), f === Do && (c = !0);
                  continue;
                }
                (p = {
                  lane: 0,
                  revertLane: g.revertLane,
                  action: g.action,
                  hasEagerState: g.hasEagerState,
                  eagerState: g.eagerState,
                  next: null,
                }),
                  null === u ? ((l = u = p), (s = i)) : (u = u.next = p),
                  (vi.lanes |= f),
                  (fu |= f);
              }
              (p = g.action),
                wi && r(i, p),
                (i = g.hasEagerState ? g.eagerState : r(i, p));
            } else
              (f = {
                lane: p,
                revertLane: g.revertLane,
                action: g.action,
                hasEagerState: g.hasEagerState,
                eagerState: g.eagerState,
                next: null,
              }),
                null === u ? ((l = u = f), (s = i)) : (u = u.next = f),
                (vi.lanes |= p),
                (fu |= p);
            g = g.next;
          } while (null !== g && g !== t);
          if (
            (null === u ? (s = i) : (u.next = l),
            !$r(i, e.memoizedState) && ((Os = !0), c && null !== (r = Bo)))
          )
            throw r;
          (e.memoizedState = i),
            (e.baseState = s),
            (e.baseQueue = u),
            (n.lastRenderedState = i);
        }
        return null === o && (n.lanes = 0), [e.memoizedState, n.dispatch];
      }
      function Ki(e) {
        var t = Fi(),
          r = t.queue;
        if (null === r) throw Error(a(311));
        r.lastRenderedReducer = e;
        var n = r.dispatch,
          o = r.pending,
          i = t.memoizedState;
        if (null !== o) {
          r.pending = null;
          var s = (o = o.next);
          do {
            (i = e(i, s.action)), (s = s.next);
          } while (s !== o);
          $r(i, t.memoizedState) || (Os = !0),
            (t.memoizedState = i),
            null === t.baseQueue && (t.baseState = i),
            (r.lastRenderedState = i);
        }
        return [i, n];
      }
      function $i(e, t, r) {
        var n = vi,
          o = Fi(),
          i = io;
        if (i) {
          if (void 0 === r) throw Error(a(407));
          r = r();
        } else r = t();
        var s = !$r((Si || o).memoizedState, r);
        if (
          (s && ((o.memoizedState = r), (Os = !0)),
          (o = o.queue),
          ba(2048, 8, Qi.bind(null, n, o, e), [e]),
          o.getSnapshot !== t || s || (null !== Ei && 1 & Ei.memoizedState.tag))
        ) {
          if (
            ((n.flags |= 2048),
            da(
              9,
              { destroy: void 0, resource: void 0 },
              Xi.bind(null, n, o, r, t),
              null,
            ),
            null === nu)
          )
            throw Error(a(349));
          i || 0 != (124 & _i) || qi(n, t, r);
        }
        return r;
      }
      function qi(e, t, r) {
        (e.flags |= 16384),
          (e = { getSnapshot: t, value: r }),
          null === (t = vi.updateQueue)
            ? ((t = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (vi.updateQueue = t),
              (t.stores = [e]))
            : null === (r = t.stores)
              ? (t.stores = [e])
              : r.push(e);
      }
      function Xi(e, t, r, n) {
        (t.value = r), (t.getSnapshot = n), Zi(t) && Ji(e);
      }
      function Qi(e, t, r) {
        return r(function () {
          Zi(t) && Ji(e);
        });
      }
      function Zi(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !$r(e, r);
        } catch (e) {
          return !0;
        }
      }
      function Ji(e) {
        var t = Pn(e, 2);
        null !== t && Lu(t, e, 2);
      }
      function ea(e) {
        var t = Bi();
        if ("function" == typeof e) {
          var r = e;
          if (((e = r()), wi)) {
            pe(!0);
            try {
              r();
            } finally {
              pe(!1);
            }
          }
        }
        return (
          (t.memoizedState = t.baseState = e),
          (t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: zi,
            lastRenderedState: e,
          }),
          t
        );
      }
      function ta(e, t, r, n) {
        return (e.baseState = r), Yi(e, Si, "function" == typeof n ? n : zi);
      }
      function ra(e, t, r, n, o) {
        if (Ha(e)) throw Error(a(485));
        if (null !== (e = t.action)) {
          var i = {
            payload: o,
            action: e,
            next: null,
            isTransition: !0,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function (e) {
              i.listeners.push(e);
            },
          };
          null !== k.T ? r(!0) : (i.isTransition = !1),
            n(i),
            null === (r = t.pending)
              ? ((i.next = t.pending = i), na(t, i))
              : ((i.next = r.next), (t.pending = r.next = i));
        }
      }
      function na(e, t) {
        var r = t.action,
          n = t.payload,
          o = e.state;
        if (t.isTransition) {
          var i = k.T,
            a = {};
          k.T = a;
          try {
            var s = r(o, n),
              l = k.S;
            null !== l && l(a, s), oa(e, t, s);
          } catch (r) {
            aa(e, t, r);
          } finally {
            k.T = i;
          }
        } else
          try {
            oa(e, t, (i = r(o, n)));
          } catch (r) {
            aa(e, t, r);
          }
      }
      function oa(e, t, r) {
        null !== r && "object" == typeof r && "function" == typeof r.then
          ? r.then(
              function (r) {
                ia(e, t, r);
              },
              function (r) {
                return aa(e, t, r);
              },
            )
          : ia(e, t, r);
      }
      function ia(e, t, r) {
        (t.status = "fulfilled"),
          (t.value = r),
          sa(t),
          (e.state = r),
          null !== (t = e.pending) &&
            ((r = t.next) === t
              ? (e.pending = null)
              : ((r = r.next), (t.next = r), na(e, r)));
      }
      function aa(e, t, r) {
        var n = e.pending;
        if (((e.pending = null), null !== n)) {
          n = n.next;
          do {
            (t.status = "rejected"), (t.reason = r), sa(t), (t = t.next);
          } while (t !== n);
        }
        e.action = null;
      }
      function sa(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
      function la(e, t) {
        return t;
      }
      function ua(e, t) {
        if (io) {
          var r = nu.formState;
          if (null !== r) {
            e: {
              var n = vi;
              if (io) {
                if (oo) {
                  t: {
                    for (var o = oo, i = so; 8 !== o.nodeType; ) {
                      if (!i) {
                        o = null;
                        break t;
                      }
                      if (null === (o = bc(o.nextSibling))) {
                        o = null;
                        break t;
                      }
                    }
                    o = "F!" === (i = o.data) || "F" === i ? o : null;
                  }
                  if (o) {
                    (oo = bc(o.nextSibling)), (n = "F!" === o.data);
                    break e;
                  }
                }
                uo(n);
              }
              n = !1;
            }
            n && (t = r[0]);
          }
        }
        return (
          ((r = Bi()).memoizedState = r.baseState = t),
          (n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: la,
            lastRenderedState: t,
          }),
          (r.queue = n),
          (r = Ba.bind(null, vi, n)),
          (n.dispatch = r),
          (n = ea(!1)),
          (i = Wa.bind(null, vi, !1, n.queue)),
          (o = { state: t, dispatch: null, action: e, pending: null }),
          ((n = Bi()).queue = o),
          (r = ra.bind(null, vi, o, i, r)),
          (o.dispatch = r),
          (n.memoizedState = e),
          [t, r, !1]
        );
      }
      function ga(e) {
        return ca(Fi(), Si, e);
      }
      function ca(e, t, r) {
        if (
          ((t = Yi(e, t, la)[0]),
          (e = Gi(zi)[0]),
          "object" == typeof t && null !== t && "function" == typeof t.then)
        )
          try {
            var n = Wi(t);
          } catch (e) {
            if (e === Yo) throw $o;
            throw e;
          }
        else n = t;
        var o = (t = Fi()).queue,
          i = o.dispatch;
        return (
          r !== t.memoizedState &&
            ((vi.flags |= 2048),
            da(
              9,
              { destroy: void 0, resource: void 0 },
              pa.bind(null, o, r),
              null,
            )),
          [n, i, e]
        );
      }
      function pa(e, t) {
        e.action = t;
      }
      function fa(e) {
        var t = Fi(),
          r = Si;
        if (null !== r) return ca(t, r, e);
        Fi(), (t = t.memoizedState);
        var n = (r = Fi()).queue.dispatch;
        return (r.memoizedState = e), [t, n, !1];
      }
      function da(e, t, r, n) {
        return (
          (e = { tag: e, create: r, deps: n, inst: t, next: null }),
          null === (t = vi.updateQueue) &&
            ((t = {
              lastEffect: null,
              events: null,
              stores: null,
              memoCache: null,
            }),
            (vi.updateQueue = t)),
          null === (r = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e)),
          e
        );
      }
      function ha() {
        return Fi().memoizedState;
      }
      function ya(e, t, r, n) {
        var o = Bi();
        (n = void 0 === n ? null : n),
          (vi.flags |= e),
          (o.memoizedState = da(
            1 | t,
            { destroy: void 0, resource: void 0 },
            r,
            n,
          ));
      }
      function ba(e, t, r, n) {
        var o = Fi();
        n = void 0 === n ? null : n;
        var i = o.memoizedState.inst;
        null !== Si && null !== n && Pi(n, Si.memoizedState.deps)
          ? (o.memoizedState = da(t, i, r, n))
          : ((vi.flags |= e), (o.memoizedState = da(1 | t, i, r, n)));
      }
      function ma(e, t) {
        ya(8390656, 8, e, t);
      }
      function _a(e, t) {
        ba(2048, 8, e, t);
      }
      function va(e, t) {
        return ba(4, 2, e, t);
      }
      function Sa(e, t) {
        return ba(4, 4, e, t);
      }
      function Ea(e, t) {
        if ("function" == typeof t) {
          e = e();
          var r = t(e);
          return function () {
            "function" == typeof r ? r() : t(null);
          };
        }
        if (null != t)
          return (
            (e = e()),
            (t.current = e),
            function () {
              t.current = null;
            }
          );
      }
      function Ta(e, t, r) {
        (r = null != r ? r.concat([e]) : null),
          ba(4, 4, Ea.bind(null, t, e), r);
      }
      function Aa() {}
      function wa(e, t) {
        var r = Fi();
        t = void 0 === t ? null : t;
        var n = r.memoizedState;
        return null !== t && Pi(t, n[1])
          ? n[0]
          : ((r.memoizedState = [e, t]), e);
      }
      function ja(e, t) {
        var r = Fi();
        t = void 0 === t ? null : t;
        var n = r.memoizedState;
        if (null !== t && Pi(t, n[1])) return n[0];
        if (((n = e()), wi)) {
          pe(!0);
          try {
            e();
          } finally {
            pe(!1);
          }
        }
        return (r.memoizedState = [n, t]), n;
      }
      function Oa(e, t, r) {
        return void 0 === r || 0 != (1073741824 & _i)
          ? (e.memoizedState = t)
          : ((e.memoizedState = r), (e = Mu()), (vi.lanes |= e), (fu |= e), r);
      }
      function Ra(e, t, r, n) {
        return $r(r, t)
          ? r
          : null !== di.current
            ? ((e = Oa(e, r, n)), $r(e, t) || (Os = !0), e)
            : 0 == (42 & _i)
              ? ((Os = !0), (e.memoizedState = r))
              : ((e = Mu()), (vi.lanes |= e), (fu |= e), t);
      }
      function Ca(e, t, r, n, o) {
        var i = M.p;
        M.p = 0 !== i && 8 > i ? i : 8;
        var a,
          s,
          l,
          u = k.T,
          g = {};
        (k.T = g), Wa(e, !1, t, r);
        try {
          var c = o(),
            p = k.S;
          if (
            (null !== p && p(g, c),
            null !== c && "object" == typeof c && "function" == typeof c.then)
          )
            Fa(
              e,
              t,
              ((a = n),
              (s = []),
              (l = {
                status: "pending",
                value: null,
                reason: null,
                then: function (e) {
                  s.push(e);
                },
              }),
              c.then(
                function () {
                  (l.status = "fulfilled"), (l.value = a);
                  for (var e = 0; e < s.length; e++) (0, s[e])(a);
                },
                function (e) {
                  for (
                    l.status = "rejected", l.reason = e, e = 0;
                    e < s.length;
                    e++
                  )
                    (0, s[e])(void 0);
                },
              ),
              l),
              ku(),
            );
          else Fa(e, t, n, ku());
        } catch (r) {
          Fa(
            e,
            t,
            { then: function () {}, status: "rejected", reason: r },
            ku(),
          );
        } finally {
          (M.p = i), (k.T = u);
        }
      }
      function Na() {}
      function Pa(e, t, r, n) {
        if (5 !== e.tag) throw Error(a(476));
        var o = Ia(e).queue;
        Ca(
          e,
          o,
          t,
          L,
          null === r
            ? Na
            : function () {
                return xa(e), r(n);
              },
        );
      }
      function Ia(e) {
        var t = e.memoizedState;
        if (null !== t) return t;
        var r = {};
        return (
          ((t = {
            memoizedState: L,
            baseState: L,
            baseQueue: null,
            queue: {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: zi,
              lastRenderedState: L,
            },
            next: null,
          }).next = {
            memoizedState: r,
            baseState: r,
            baseQueue: null,
            queue: {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: zi,
              lastRenderedState: r,
            },
            next: null,
          }),
          (e.memoizedState = t),
          null !== (e = e.alternate) && (e.memoizedState = t),
          t
        );
      }
      function xa(e) {
        Fa(e, Ia(e).next.queue, {}, ku());
      }
      function ka() {
        return Oo($c);
      }
      function Ma() {
        return Fi().memoizedState;
      }
      function La() {
        return Fi().memoizedState;
      }
      function Ua(e) {
        for (var t = e.return; null !== t; ) {
          switch (t.tag) {
            case 24:
            case 3:
              var r = ku(),
                n = ai(t, (e = ii(r)), r);
              return (
                null !== n && (Lu(n, t, r), si(n, t, r)),
                (t = { cache: ko() }),
                void (e.payload = t)
              );
          }
          t = t.return;
        }
      }
      function Da(e, t, r) {
        var n = ku();
        (r = {
          lane: n,
          revertLane: 0,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
          Ha(e)
            ? Va(t, r)
            : null !== (r = Nn(e, t, r, n)) && (Lu(r, e, n), za(r, t, n));
      }
      function Ba(e, t, r) {
        Fa(e, t, r, ku());
      }
      function Fa(e, t, r, n) {
        var o = {
          lane: n,
          revertLane: 0,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
        if (Ha(e)) Va(t, o);
        else {
          var i = e.alternate;
          if (
            0 === e.lanes &&
            (null === i || 0 === i.lanes) &&
            null !== (i = t.lastRenderedReducer)
          )
            try {
              var a = t.lastRenderedState,
                s = i(a, r);
              if (((o.hasEagerState = !0), (o.eagerState = s), $r(s, a)))
                return Cn(e, t, o, 0), null === nu && Rn(), !1;
            } catch (e) {}
          if (null !== (r = Nn(e, t, o, n)))
            return Lu(r, e, n), za(r, t, n), !0;
        }
        return !1;
      }
      function Wa(e, t, r, n) {
        if (
          ((n = {
            lane: 2,
            revertLane: Cg(),
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
          Ha(e))
        ) {
          if (t) throw Error(a(479));
        } else null !== (t = Nn(e, r, n, 2)) && Lu(t, e, 2);
      }
      function Ha(e) {
        var t = e.alternate;
        return e === vi || (null !== t && t === vi);
      }
      function Va(e, t) {
        Ai = Ti = !0;
        var r = e.pending;
        null === r ? (t.next = t) : ((t.next = r.next), (r.next = t)),
          (e.pending = t);
      }
      function za(e, t, r) {
        if (0 != (4194048 & r)) {
          var n = t.lanes;
          (r |= n &= e.pendingLanes), (t.lanes = r), Oe(e, r);
        }
      }
      var Ga = {
          readContext: Oo,
          use: Hi,
          useCallback: Ni,
          useContext: Ni,
          useEffect: Ni,
          useImperativeHandle: Ni,
          useLayoutEffect: Ni,
          useInsertionEffect: Ni,
          useMemo: Ni,
          useReducer: Ni,
          useRef: Ni,
          useState: Ni,
          useDebugValue: Ni,
          useDeferredValue: Ni,
          useTransition: Ni,
          useSyncExternalStore: Ni,
          useId: Ni,
          useHostTransitionStatus: Ni,
          useFormState: Ni,
          useActionState: Ni,
          useOptimistic: Ni,
          useMemoCache: Ni,
          useCacheRefresh: Ni,
        },
        Ya = {
          readContext: Oo,
          use: Hi,
          useCallback: function (e, t) {
            return (Bi().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: Oo,
          useEffect: ma,
          useImperativeHandle: function (e, t, r) {
            (r = null != r ? r.concat([e]) : null),
              ya(4194308, 4, Ea.bind(null, t, e), r);
          },
          useLayoutEffect: function (e, t) {
            return ya(4194308, 4, e, t);
          },
          useInsertionEffect: function (e, t) {
            ya(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var r = Bi();
            t = void 0 === t ? null : t;
            var n = e();
            if (wi) {
              pe(!0);
              try {
                e();
              } finally {
                pe(!1);
              }
            }
            return (r.memoizedState = [n, t]), n;
          },
          useReducer: function (e, t, r) {
            var n = Bi();
            if (void 0 !== r) {
              var o = r(t);
              if (wi) {
                pe(!0);
                try {
                  r(t);
                } finally {
                  pe(!1);
                }
              }
            } else o = t;
            return (
              (n.memoizedState = n.baseState = o),
              (e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: o,
              }),
              (n.queue = e),
              (e = e.dispatch = Da.bind(null, vi, e)),
              [n.memoizedState, e]
            );
          },
          useRef: function (e) {
            return (e = { current: e }), (Bi().memoizedState = e);
          },
          useState: function (e) {
            var t = (e = ea(e)).queue,
              r = Ba.bind(null, vi, t);
            return (t.dispatch = r), [e.memoizedState, r];
          },
          useDebugValue: Aa,
          useDeferredValue: function (e, t) {
            return Oa(Bi(), e, t);
          },
          useTransition: function () {
            var e = ea(!1);
            return (
              (e = Ca.bind(null, vi, e.queue, !0, !1)),
              (Bi().memoizedState = e),
              [!1, e]
            );
          },
          useSyncExternalStore: function (e, t, r) {
            var n = vi,
              o = Bi();
            if (io) {
              if (void 0 === r) throw Error(a(407));
              r = r();
            } else {
              if (((r = t()), null === nu)) throw Error(a(349));
              0 != (124 & iu) || qi(n, t, r);
            }
            o.memoizedState = r;
            var i = { value: r, getSnapshot: t };
            return (
              (o.queue = i),
              ma(Qi.bind(null, n, i, e), [e]),
              (n.flags |= 2048),
              da(
                9,
                { destroy: void 0, resource: void 0 },
                Xi.bind(null, n, i, r, t),
                null,
              ),
              r
            );
          },
          useId: function () {
            var e = Bi(),
              t = nu.identifierPrefix;
            if (io) {
              var r = Zn;
              (t =
                "«" +
                t +
                "R" +
                (r = (Qn & ~(1 << (32 - fe(Qn) - 1))).toString(32) + r)),
                0 < (r = ji++) && (t += "H" + r.toString(32)),
                (t += "»");
            } else t = "«" + t + "r" + (r = Ci++).toString(32) + "»";
            return (e.memoizedState = t);
          },
          useHostTransitionStatus: ka,
          useFormState: ua,
          useActionState: ua,
          useOptimistic: function (e) {
            var t = Bi();
            t.memoizedState = t.baseState = e;
            var r = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: null,
              lastRenderedState: null,
            };
            return (
              (t.queue = r),
              (t = Wa.bind(null, vi, !0, r)),
              (r.dispatch = t),
              [e, t]
            );
          },
          useMemoCache: Vi,
          useCacheRefresh: function () {
            return (Bi().memoizedState = Ua.bind(null, vi));
          },
        },
        Ka = {
          readContext: Oo,
          use: Hi,
          useCallback: wa,
          useContext: Oo,
          useEffect: _a,
          useImperativeHandle: Ta,
          useInsertionEffect: va,
          useLayoutEffect: Sa,
          useMemo: ja,
          useReducer: Gi,
          useRef: ha,
          useState: function () {
            return Gi(zi);
          },
          useDebugValue: Aa,
          useDeferredValue: function (e, t) {
            return Ra(Fi(), Si.memoizedState, e, t);
          },
          useTransition: function () {
            var e = Gi(zi)[0],
              t = Fi().memoizedState;
            return ["boolean" == typeof e ? e : Wi(e), t];
          },
          useSyncExternalStore: $i,
          useId: Ma,
          useHostTransitionStatus: ka,
          useFormState: ga,
          useActionState: ga,
          useOptimistic: function (e, t) {
            return ta(Fi(), 0, e, t);
          },
          useMemoCache: Vi,
          useCacheRefresh: La,
        },
        $a = {
          readContext: Oo,
          use: Hi,
          useCallback: wa,
          useContext: Oo,
          useEffect: _a,
          useImperativeHandle: Ta,
          useInsertionEffect: va,
          useLayoutEffect: Sa,
          useMemo: ja,
          useReducer: Ki,
          useRef: ha,
          useState: function () {
            return Ki(zi);
          },
          useDebugValue: Aa,
          useDeferredValue: function (e, t) {
            var r = Fi();
            return null === Si ? Oa(r, e, t) : Ra(r, Si.memoizedState, e, t);
          },
          useTransition: function () {
            var e = Ki(zi)[0],
              t = Fi().memoizedState;
            return ["boolean" == typeof e ? e : Wi(e), t];
          },
          useSyncExternalStore: $i,
          useId: Ma,
          useHostTransitionStatus: ka,
          useFormState: fa,
          useActionState: fa,
          useOptimistic: function (e, t) {
            var r = Fi();
            return null !== Si
              ? ta(r, 0, e, t)
              : ((r.baseState = e), [e, r.queue.dispatch]);
          },
          useMemoCache: Vi,
          useCacheRefresh: La,
        },
        qa = null,
        Xa = 0;
      function Qa(e) {
        var t = Xa;
        return (Xa += 1), null === qa && (qa = []), Zo(qa, e, t);
      }
      function Za(e, t) {
        (t = t.props.ref), (e.ref = void 0 !== t ? t : null);
      }
      function Ja(e, t) {
        if (t.$$typeof === f) throw Error(a(525));
        throw (
          ((e = Object.prototype.toString.call(t)),
          Error(
            a(
              31,
              "[object Object]" === e
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : e,
            ),
          ))
        );
      }
      function es(e) {
        return (0, e._init)(e._payload);
      }
      function ts(e) {
        function t(t, r) {
          if (e) {
            var n = t.deletions;
            null === n ? ((t.deletions = [r]), (t.flags |= 16)) : n.push(r);
          }
        }
        function r(r, n) {
          if (!e) return null;
          for (; null !== n; ) t(r, n), (n = n.sibling);
          return null;
        }
        function n(e) {
          for (var t = new Map(); null !== e; )
            null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
              (e = e.sibling);
          return t;
        }
        function o(e, t) {
          return ((e = Dn(e, t)).index = 0), (e.sibling = null), e;
        }
        function i(t, r, n) {
          return (
            (t.index = n),
            e
              ? null !== (n = t.alternate)
                ? (n = n.index) < r
                  ? ((t.flags |= 67108866), r)
                  : n
                : ((t.flags |= 67108866), r)
              : ((t.flags |= 1048576), r)
          );
        }
        function s(t) {
          return e && null === t.alternate && (t.flags |= 67108866), t;
        }
        function l(e, t, r, n) {
          return null === t || 6 !== t.tag
            ? (((t = Hn(r, e.mode, n)).return = e), t)
            : (((t = o(t, r)).return = e), t);
        }
        function u(e, t, r, n) {
          var i = r.type;
          return i === y
            ? c(e, t, r.props.children, n, r.key)
            : null !== t &&
                (t.elementType === i ||
                  ("object" == typeof i &&
                    null !== i &&
                    i.$$typeof === j &&
                    es(i) === t.type))
              ? (Za((t = o(t, r.props)), r), (t.return = e), t)
              : (Za((t = Fn(r.type, r.key, r.props, null, e.mode, n)), r),
                (t.return = e),
                t);
        }
        function g(e, t, r, n) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== r.containerInfo ||
            t.stateNode.implementation !== r.implementation
            ? (((t = Vn(r, e.mode, n)).return = e), t)
            : (((t = o(t, r.children || [])).return = e), t);
        }
        function c(e, t, r, n, i) {
          return null === t || 7 !== t.tag
            ? (((t = Wn(r, e.mode, n, i)).return = e), t)
            : (((t = o(t, r)).return = e), t);
        }
        function p(e, t, r) {
          if (
            ("string" == typeof t && "" !== t) ||
            "number" == typeof t ||
            "bigint" == typeof t
          )
            return ((t = Hn("" + t, e.mode, r)).return = e), t;
          if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
              case d:
                return (
                  Za((r = Fn(t.type, t.key, t.props, null, e.mode, r)), t),
                  (r.return = e),
                  r
                );
              case h:
                return ((t = Vn(t, e.mode, r)).return = e), t;
              case j:
                return p(e, (t = (0, t._init)(t._payload)), r);
            }
            if (x(t) || N(t))
              return ((t = Wn(t, e.mode, r, null)).return = e), t;
            if ("function" == typeof t.then) return p(e, Qa(t), r);
            if (t.$$typeof === S) return p(e, Ro(e, t), r);
            Ja(e, t);
          }
          return null;
        }
        function f(e, t, r, n) {
          var o = null !== t ? t.key : null;
          if (
            ("string" == typeof r && "" !== r) ||
            "number" == typeof r ||
            "bigint" == typeof r
          )
            return null !== o ? null : l(e, t, "" + r, n);
          if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
              case d:
                return r.key === o ? u(e, t, r, n) : null;
              case h:
                return r.key === o ? g(e, t, r, n) : null;
              case j:
                return f(e, t, (r = (o = r._init)(r._payload)), n);
            }
            if (x(r) || N(r)) return null !== o ? null : c(e, t, r, n, null);
            if ("function" == typeof r.then) return f(e, t, Qa(r), n);
            if (r.$$typeof === S) return f(e, t, Ro(e, r), n);
            Ja(e, r);
          }
          return null;
        }
        function b(e, t, r, n, o) {
          if (
            ("string" == typeof n && "" !== n) ||
            "number" == typeof n ||
            "bigint" == typeof n
          )
            return l(t, (e = e.get(r) || null), "" + n, o);
          if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
              case d:
                return u(
                  t,
                  (e = e.get(null === n.key ? r : n.key) || null),
                  n,
                  o,
                );
              case h:
                return g(
                  t,
                  (e = e.get(null === n.key ? r : n.key) || null),
                  n,
                  o,
                );
              case j:
                return b(e, t, r, (n = (0, n._init)(n._payload)), o);
            }
            if (x(n) || N(n)) return c(t, (e = e.get(r) || null), n, o, null);
            if ("function" == typeof n.then) return b(e, t, r, Qa(n), o);
            if (n.$$typeof === S) return b(e, t, r, Ro(t, n), o);
            Ja(t, n);
          }
          return null;
        }
        function m(l, u, g, c) {
          if (
            ("object" == typeof g &&
              null !== g &&
              g.type === y &&
              null === g.key &&
              (g = g.props.children),
            "object" == typeof g && null !== g)
          ) {
            switch (g.$$typeof) {
              case d:
                e: {
                  for (var _ = g.key; null !== u; ) {
                    if (u.key === _) {
                      if ((_ = g.type) === y) {
                        if (7 === u.tag) {
                          r(l, u.sibling),
                            ((c = o(u, g.props.children)).return = l),
                            (l = c);
                          break e;
                        }
                      } else if (
                        u.elementType === _ ||
                        ("object" == typeof _ &&
                          null !== _ &&
                          _.$$typeof === j &&
                          es(_) === u.type)
                      ) {
                        r(l, u.sibling),
                          Za((c = o(u, g.props)), g),
                          (c.return = l),
                          (l = c);
                        break e;
                      }
                      r(l, u);
                      break;
                    }
                    t(l, u), (u = u.sibling);
                  }
                  g.type === y
                    ? (((c = Wn(g.props.children, l.mode, c, g.key)).return =
                        l),
                      (l = c))
                    : (Za((c = Fn(g.type, g.key, g.props, null, l.mode, c)), g),
                      (c.return = l),
                      (l = c));
                }
                return s(l);
              case h:
                e: {
                  for (_ = g.key; null !== u; ) {
                    if (u.key === _) {
                      if (
                        4 === u.tag &&
                        u.stateNode.containerInfo === g.containerInfo &&
                        u.stateNode.implementation === g.implementation
                      ) {
                        r(l, u.sibling),
                          ((c = o(u, g.children || [])).return = l),
                          (l = c);
                        break e;
                      }
                      r(l, u);
                      break;
                    }
                    t(l, u), (u = u.sibling);
                  }
                  ((c = Vn(g, l.mode, c)).return = l), (l = c);
                }
                return s(l);
              case j:
                return m(l, u, (g = (_ = g._init)(g._payload)), c);
            }
            if (x(g))
              return (function (o, a, s, l) {
                for (
                  var u = null, g = null, c = a, d = (a = 0), h = null;
                  null !== c && d < s.length;
                  d++
                ) {
                  c.index > d ? ((h = c), (c = null)) : (h = c.sibling);
                  var y = f(o, c, s[d], l);
                  if (null === y) {
                    null === c && (c = h);
                    break;
                  }
                  e && c && null === y.alternate && t(o, c),
                    (a = i(y, a, d)),
                    null === g ? (u = y) : (g.sibling = y),
                    (g = y),
                    (c = h);
                }
                if (d === s.length) return r(o, c), io && Jn(o, d), u;
                if (null === c) {
                  for (; d < s.length; d++)
                    null !== (c = p(o, s[d], l)) &&
                      ((a = i(c, a, d)),
                      null === g ? (u = c) : (g.sibling = c),
                      (g = c));
                  return io && Jn(o, d), u;
                }
                for (c = n(c); d < s.length; d++)
                  null !== (h = b(c, o, d, s[d], l)) &&
                    (e &&
                      null !== h.alternate &&
                      c.delete(null === h.key ? d : h.key),
                    (a = i(h, a, d)),
                    null === g ? (u = h) : (g.sibling = h),
                    (g = h));
                return (
                  e &&
                    c.forEach(function (e) {
                      return t(o, e);
                    }),
                  io && Jn(o, d),
                  u
                );
              })(l, u, g, c);
            if (N(g)) {
              if ("function" != typeof (_ = N(g))) throw Error(a(150));
              return (function (o, s, l, u) {
                if (null == l) throw Error(a(151));
                for (
                  var g = null,
                    c = null,
                    d = s,
                    h = (s = 0),
                    y = null,
                    m = l.next();
                  null !== d && !m.done;
                  h++, m = l.next()
                ) {
                  d.index > h ? ((y = d), (d = null)) : (y = d.sibling);
                  var _ = f(o, d, m.value, u);
                  if (null === _) {
                    null === d && (d = y);
                    break;
                  }
                  e && d && null === _.alternate && t(o, d),
                    (s = i(_, s, h)),
                    null === c ? (g = _) : (c.sibling = _),
                    (c = _),
                    (d = y);
                }
                if (m.done) return r(o, d), io && Jn(o, h), g;
                if (null === d) {
                  for (; !m.done; h++, m = l.next())
                    null !== (m = p(o, m.value, u)) &&
                      ((s = i(m, s, h)),
                      null === c ? (g = m) : (c.sibling = m),
                      (c = m));
                  return io && Jn(o, h), g;
                }
                for (d = n(d); !m.done; h++, m = l.next())
                  null !== (m = b(d, o, h, m.value, u)) &&
                    (e &&
                      null !== m.alternate &&
                      d.delete(null === m.key ? h : m.key),
                    (s = i(m, s, h)),
                    null === c ? (g = m) : (c.sibling = m),
                    (c = m));
                return (
                  e &&
                    d.forEach(function (e) {
                      return t(o, e);
                    }),
                  io && Jn(o, h),
                  g
                );
              })(l, u, (g = _.call(g)), c);
            }
            if ("function" == typeof g.then) return m(l, u, Qa(g), c);
            if (g.$$typeof === S) return m(l, u, Ro(l, g), c);
            Ja(l, g);
          }
          return ("string" == typeof g && "" !== g) ||
            "number" == typeof g ||
            "bigint" == typeof g
            ? ((g = "" + g),
              null !== u && 6 === u.tag
                ? (r(l, u.sibling), ((c = o(u, g)).return = l), (l = c))
                : (r(l, u), ((c = Hn(g, l.mode, c)).return = l), (l = c)),
              s(l))
            : r(l, u);
        }
        return function (e, t, r, n) {
          try {
            Xa = 0;
            var o = m(e, t, r, n);
            return (qa = null), o;
          } catch (t) {
            if (t === Yo || t === $o) throw t;
            var i = Ln(29, t, null, e.mode);
            return (i.lanes = n), (i.return = e), i;
          }
        };
      }
      var rs = ts(!0),
        ns = ts(!1),
        os = B(null),
        is = null;
      function as(e) {
        var t = e.alternate;
        W(gs, 1 & gs.current),
          W(os, e),
          null === is &&
            (null === t || null !== di.current || null !== t.memoizedState) &&
            (is = e);
      }
      function ss(e) {
        if (22 === e.tag) {
          if ((W(gs, gs.current), W(os, e), null === is)) {
            var t = e.alternate;
            null !== t && null !== t.memoizedState && (is = e);
          }
        } else ls();
      }
      function ls() {
        W(gs, gs.current), W(os, os.current);
      }
      function us(e) {
        F(os), is === e && (is = null), F(gs);
      }
      var gs = B(0);
      function cs(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var r = t.memoizedState;
            if (
              null !== r &&
              (null === (r = r.dehydrated) || "$?" === r.data || yc(r))
            )
              return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 != (128 & t.flags)) return t;
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
      function ps(e, t, r, n) {
        (r = null == (r = r(n, (t = e.memoizedState))) ? t : p({}, t, r)),
          (e.memoizedState = r),
          0 === e.lanes && (e.updateQueue.baseState = r);
      }
      var fs = {
        enqueueSetState: function (e, t, r) {
          e = e._reactInternals;
          var n = ku(),
            o = ii(n);
          (o.payload = t),
            null != r && (o.callback = r),
            null !== (t = ai(e, o, n)) && (Lu(t, e, n), si(t, e, n));
        },
        enqueueReplaceState: function (e, t, r) {
          e = e._reactInternals;
          var n = ku(),
            o = ii(n);
          (o.tag = 1),
            (o.payload = t),
            null != r && (o.callback = r),
            null !== (t = ai(e, o, n)) && (Lu(t, e, n), si(t, e, n));
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          var r = ku(),
            n = ii(r);
          (n.tag = 2),
            null != t && (n.callback = t),
            null !== (t = ai(e, n, r)) && (Lu(t, e, r), si(t, e, r));
        },
      };
      function ds(e, t, r, n, o, i, a) {
        return "function" == typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(n, i, a)
          : !t.prototype ||
              !t.prototype.isPureReactComponent ||
              !qr(r, n) ||
              !qr(o, i);
      }
      function hs(e, t, r, n) {
        (e = t.state),
          "function" == typeof t.componentWillReceiveProps &&
            t.componentWillReceiveProps(r, n),
          "function" == typeof t.UNSAFE_componentWillReceiveProps &&
            t.UNSAFE_componentWillReceiveProps(r, n),
          t.state !== e && fs.enqueueReplaceState(t, t.state, null);
      }
      function ys(e, t) {
        var r = t;
        if ("ref" in t)
          for (var n in ((r = {}), t)) "ref" !== n && (r[n] = t[n]);
        if ((e = e.defaultProps))
          for (var o in (r === t && (r = p({}, r)), e))
            void 0 === r[o] && (r[o] = e[o]);
        return r;
      }
      var bs =
        "function" == typeof reportError
          ? reportError
          : function (e) {
              if (
                "object" == typeof window &&
                "function" == typeof window.ErrorEvent
              ) {
                var t = new window.ErrorEvent("error", {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    "object" == typeof e &&
                    null !== e &&
                    "string" == typeof e.message
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                "object" == typeof process &&
                "function" == typeof process.emit
              )
                return void process.emit("uncaughtException", e);
              console.error(e);
            };
      function ms(e) {
        bs(e);
      }
      function _s(e) {
        console.error(e);
      }
      function vs(e) {
        bs(e);
      }
      function Ss(e, t) {
        try {
          (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
        } catch (e) {
          setTimeout(function () {
            throw e;
          });
        }
      }
      function Es(e, t, r) {
        try {
          (0, e.onCaughtError)(r.value, {
            componentStack: r.stack,
            errorBoundary: 1 === t.tag ? t.stateNode : null,
          });
        } catch (e) {
          setTimeout(function () {
            throw e;
          });
        }
      }
      function Ts(e, t, r) {
        return (
          ((r = ii(r)).tag = 3),
          (r.payload = { element: null }),
          (r.callback = function () {
            Ss(e, t);
          }),
          r
        );
      }
      function As(e) {
        return ((e = ii(e)).tag = 3), e;
      }
      function ws(e, t, r, n) {
        var o = r.type.getDerivedStateFromError;
        if ("function" == typeof o) {
          var i = n.value;
          (e.payload = function () {
            return o(i);
          }),
            (e.callback = function () {
              Es(t, r, n);
            });
        }
        var a = r.stateNode;
        null !== a &&
          "function" == typeof a.componentDidCatch &&
          (e.callback = function () {
            Es(t, r, n),
              "function" != typeof o &&
                (null === Au ? (Au = new Set([this])) : Au.add(this));
            var e = n.stack;
            this.componentDidCatch(n.value, {
              componentStack: null !== e ? e : "",
            });
          });
      }
      var js = Error(a(461)),
        Os = !1;
      function Rs(e, t, r, n) {
        t.child = null === e ? ns(t, null, r, n) : rs(t, e.child, r, n);
      }
      function Cs(e, t, r, n, o) {
        r = r.render;
        var i = t.ref;
        if ("ref" in n) {
          var a = {};
          for (var s in n) "ref" !== s && (a[s] = n[s]);
        } else a = n;
        return (
          jo(t),
          (n = Ii(e, t, r, a, i, o)),
          (s = Li()),
          null === e || Os
            ? (io && s && to(t), (t.flags |= 1), Rs(e, t, n, o), t.child)
            : (Ui(e, t, o), qs(e, t, o))
        );
      }
      function Ns(e, t, r, n, o) {
        if (null === e) {
          var i = r.type;
          return "function" != typeof i ||
            Un(i) ||
            void 0 !== i.defaultProps ||
            null !== r.compare
            ? (((e = Fn(r.type, null, n, t, t.mode, o)).ref = t.ref),
              (e.return = t),
              (t.child = e))
            : ((t.tag = 15), (t.type = i), Ps(e, t, i, n, o));
        }
        if (((i = e.child), !Xs(e, o))) {
          var a = i.memoizedProps;
          if ((r = null !== (r = r.compare) ? r : qr)(a, n) && e.ref === t.ref)
            return qs(e, t, o);
        }
        return (
          (t.flags |= 1),
          ((e = Dn(i, n)).ref = t.ref),
          (e.return = t),
          (t.child = e)
        );
      }
      function Ps(e, t, r, n, o) {
        if (null !== e) {
          var i = e.memoizedProps;
          if (qr(i, n) && e.ref === t.ref) {
            if (((Os = !1), (t.pendingProps = n = i), !Xs(e, o)))
              return (t.lanes = e.lanes), qs(e, t, o);
            0 != (131072 & e.flags) && (Os = !0);
          }
        }
        return Ms(e, t, r, n, o);
      }
      function Is(e, t, r) {
        var n = t.pendingProps,
          o = n.children,
          i = null !== e ? e.memoizedState : null;
        if ("hidden" === n.mode) {
          if (0 != (128 & t.flags)) {
            if (((n = null !== i ? i.baseLanes | r : r), null !== e)) {
              for (o = t.child = e.child, i = 0; null !== o; )
                (i = i | o.lanes | o.childLanes), (o = o.sibling);
              t.childLanes = i & ~n;
            } else (t.childLanes = 0), (t.child = null);
            return xs(e, t, n, r);
          }
          if (0 == (536870912 & r))
            return (
              (t.lanes = t.childLanes = 536870912),
              xs(e, t, null !== i ? i.baseLanes | r : r, r)
            );
          (t.memoizedState = { baseLanes: 0, cachePool: null }),
            null !== e && zo(0, null !== i ? i.cachePool : null),
            null !== i ? yi(t, i) : bi(),
            ss(t);
        } else
          null !== i
            ? (zo(0, i.cachePool), yi(t, i), ls(), (t.memoizedState = null))
            : (null !== e && zo(0, null), bi(), ls());
        return Rs(e, t, o, r), t.child;
      }
      function xs(e, t, r, n) {
        var o = Vo();
        return (
          (o = null === o ? null : { parent: xo._currentValue, pool: o }),
          (t.memoizedState = { baseLanes: r, cachePool: o }),
          null !== e && zo(0, null),
          bi(),
          ss(t),
          null !== e && Ao(e, t, n, !0),
          null
        );
      }
      function ks(e, t) {
        var r = t.ref;
        if (null === r) null !== e && null !== e.ref && (t.flags |= 4194816);
        else {
          if ("function" != typeof r && "object" != typeof r)
            throw Error(a(284));
          (null !== e && e.ref === r) || (t.flags |= 4194816);
        }
      }
      function Ms(e, t, r, n, o) {
        return (
          jo(t),
          (r = Ii(e, t, r, n, void 0, o)),
          (n = Li()),
          null === e || Os
            ? (io && n && to(t), (t.flags |= 1), Rs(e, t, r, o), t.child)
            : (Ui(e, t, o), qs(e, t, o))
        );
      }
      function Ls(e, t, r, n, o, i) {
        return (
          jo(t),
          (t.updateQueue = null),
          (r = ki(t, n, r, o)),
          xi(e),
          (n = Li()),
          null === e || Os
            ? (io && n && to(t), (t.flags |= 1), Rs(e, t, r, i), t.child)
            : (Ui(e, t, i), qs(e, t, i))
        );
      }
      function Us(e, t, r, n, o) {
        if ((jo(t), null === t.stateNode)) {
          var i = kn,
            a = r.contextType;
          "object" == typeof a && null !== a && (i = Oo(a)),
            (i = new r(n, i)),
            (t.memoizedState =
              null !== i.state && void 0 !== i.state ? i.state : null),
            (i.updater = fs),
            (t.stateNode = i),
            (i._reactInternals = t),
            ((i = t.stateNode).props = n),
            (i.state = t.memoizedState),
            (i.refs = {}),
            ni(t),
            (a = r.contextType),
            (i.context = "object" == typeof a && null !== a ? Oo(a) : kn),
            (i.state = t.memoizedState),
            "function" == typeof (a = r.getDerivedStateFromProps) &&
              (ps(t, r, a, n), (i.state = t.memoizedState)),
            "function" == typeof r.getDerivedStateFromProps ||
              "function" == typeof i.getSnapshotBeforeUpdate ||
              ("function" != typeof i.UNSAFE_componentWillMount &&
                "function" != typeof i.componentWillMount) ||
              ((a = i.state),
              "function" == typeof i.componentWillMount &&
                i.componentWillMount(),
              "function" == typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              a !== i.state && fs.enqueueReplaceState(i, i.state, null),
              ci(t, n, i, o),
              gi(),
              (i.state = t.memoizedState)),
            "function" == typeof i.componentDidMount && (t.flags |= 4194308),
            (n = !0);
        } else if (null === e) {
          i = t.stateNode;
          var s = t.memoizedProps,
            l = ys(r, s);
          i.props = l;
          var u = i.context,
            g = r.contextType;
          (a = kn), "object" == typeof g && null !== g && (a = Oo(g));
          var c = r.getDerivedStateFromProps;
          (g =
            "function" == typeof c ||
            "function" == typeof i.getSnapshotBeforeUpdate),
            (s = t.pendingProps !== s),
            g ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((s || u !== a) && hs(t, i, n, a)),
            (ri = !1);
          var p = t.memoizedState;
          (i.state = p),
            ci(t, n, i, o),
            gi(),
            (u = t.memoizedState),
            s || p !== u || ri
              ? ("function" == typeof c &&
                  (ps(t, r, c, n), (u = t.memoizedState)),
                (l = ri || ds(t, r, l, n, p, u, a))
                  ? (g ||
                      ("function" != typeof i.UNSAFE_componentWillMount &&
                        "function" != typeof i.componentWillMount) ||
                      ("function" == typeof i.componentWillMount &&
                        i.componentWillMount(),
                      "function" == typeof i.UNSAFE_componentWillMount &&
                        i.UNSAFE_componentWillMount()),
                    "function" == typeof i.componentDidMount &&
                      (t.flags |= 4194308))
                  : ("function" == typeof i.componentDidMount &&
                      (t.flags |= 4194308),
                    (t.memoizedProps = n),
                    (t.memoizedState = u)),
                (i.props = n),
                (i.state = u),
                (i.context = a),
                (n = l))
              : ("function" == typeof i.componentDidMount &&
                  (t.flags |= 4194308),
                (n = !1));
        } else {
          (i = t.stateNode),
            oi(e, t),
            (g = ys(r, (a = t.memoizedProps))),
            (i.props = g),
            (c = t.pendingProps),
            (p = i.context),
            (u = r.contextType),
            (l = kn),
            "object" == typeof u && null !== u && (l = Oo(u)),
            (u =
              "function" == typeof (s = r.getDerivedStateFromProps) ||
              "function" == typeof i.getSnapshotBeforeUpdate) ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((a !== c || p !== l) && hs(t, i, n, l)),
            (ri = !1),
            (p = t.memoizedState),
            (i.state = p),
            ci(t, n, i, o),
            gi();
          var f = t.memoizedState;
          a !== c ||
          p !== f ||
          ri ||
          (null !== e && null !== e.dependencies && wo(e.dependencies))
            ? ("function" == typeof s &&
                (ps(t, r, s, n), (f = t.memoizedState)),
              (g =
                ri ||
                ds(t, r, g, n, p, f, l) ||
                (null !== e && null !== e.dependencies && wo(e.dependencies)))
                ? (u ||
                    ("function" != typeof i.UNSAFE_componentWillUpdate &&
                      "function" != typeof i.componentWillUpdate) ||
                    ("function" == typeof i.componentWillUpdate &&
                      i.componentWillUpdate(n, f, l),
                    "function" == typeof i.UNSAFE_componentWillUpdate &&
                      i.UNSAFE_componentWillUpdate(n, f, l)),
                  "function" == typeof i.componentDidUpdate && (t.flags |= 4),
                  "function" == typeof i.getSnapshotBeforeUpdate &&
                    (t.flags |= 1024))
                : ("function" != typeof i.componentDidUpdate ||
                    (a === e.memoizedProps && p === e.memoizedState) ||
                    (t.flags |= 4),
                  "function" != typeof i.getSnapshotBeforeUpdate ||
                    (a === e.memoizedProps && p === e.memoizedState) ||
                    (t.flags |= 1024),
                  (t.memoizedProps = n),
                  (t.memoizedState = f)),
              (i.props = n),
              (i.state = f),
              (i.context = l),
              (n = g))
            : ("function" != typeof i.componentDidUpdate ||
                (a === e.memoizedProps && p === e.memoizedState) ||
                (t.flags |= 4),
              "function" != typeof i.getSnapshotBeforeUpdate ||
                (a === e.memoizedProps && p === e.memoizedState) ||
                (t.flags |= 1024),
              (n = !1));
        }
        return (
          (i = n),
          ks(e, t),
          (n = 0 != (128 & t.flags)),
          i || n
            ? ((i = t.stateNode),
              (r =
                n && "function" != typeof r.getDerivedStateFromError
                  ? null
                  : i.render()),
              (t.flags |= 1),
              null !== e && n
                ? ((t.child = rs(t, e.child, null, o)),
                  (t.child = rs(t, null, r, o)))
                : Rs(e, t, r, o),
              (t.memoizedState = i.state),
              (e = t.child))
            : (e = qs(e, t, o)),
          e
        );
      }
      function Ds(e, t, r, n) {
        return fo(), (t.flags |= 256), Rs(e, t, r, n), t.child;
      }
      var Bs = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null,
      };
      function Fs(e) {
        return { baseLanes: e, cachePool: Go() };
      }
      function Ws(e, t, r) {
        return (e = null !== e ? e.childLanes & ~r : 0), t && (e |= yu), e;
      }
      function Hs(e, t, r) {
        var n,
          o = t.pendingProps,
          i = !1,
          s = 0 != (128 & t.flags);
        if (
          ((n = s) ||
            (n =
              (null === e || null !== e.memoizedState) &&
              0 != (2 & gs.current)),
          n && ((i = !0), (t.flags &= -129)),
          (n = 0 != (32 & t.flags)),
          (t.flags &= -33),
          null === e)
        ) {
          if (io) {
            if ((i ? as(t) : ls(), io)) {
              var l,
                u = oo;
              if ((l = u)) {
                e: {
                  for (l = u, u = so; 8 !== l.nodeType; ) {
                    if (!u) {
                      u = null;
                      break e;
                    }
                    if (null === (l = bc(l.nextSibling))) {
                      u = null;
                      break e;
                    }
                  }
                  u = l;
                }
                null !== u
                  ? ((t.memoizedState = {
                      dehydrated: u,
                      treeContext:
                        null !== Xn ? { id: Qn, overflow: Zn } : null,
                      retryLane: 536870912,
                      hydrationErrors: null,
                    }),
                    ((l = Ln(18, null, null, 0)).stateNode = u),
                    (l.return = t),
                    (t.child = l),
                    (no = t),
                    (oo = null),
                    (l = !0))
                  : (l = !1);
              }
              l || uo(t);
            }
            if (null !== (u = t.memoizedState) && null !== (u = u.dehydrated))
              return yc(u) ? (t.lanes = 32) : (t.lanes = 536870912), null;
            us(t);
          }
          return (
            (u = o.children),
            (o = o.fallback),
            i
              ? (ls(),
                (u = zs({ mode: "hidden", children: u }, (i = t.mode))),
                (o = Wn(o, i, r, null)),
                (u.return = t),
                (o.return = t),
                (u.sibling = o),
                (t.child = u),
                ((i = t.child).memoizedState = Fs(r)),
                (i.childLanes = Ws(e, n, r)),
                (t.memoizedState = Bs),
                o)
              : (as(t), Vs(t, u))
          );
        }
        if (null !== (l = e.memoizedState) && null !== (u = l.dehydrated)) {
          if (s)
            256 & t.flags
              ? (as(t), (t.flags &= -257), (t = Gs(e, t, r)))
              : null !== t.memoizedState
                ? (ls(), (t.child = e.child), (t.flags |= 128), (t = null))
                : (ls(),
                  (i = o.fallback),
                  (u = t.mode),
                  (o = zs({ mode: "visible", children: o.children }, u)),
                  ((i = Wn(i, u, r, null)).flags |= 2),
                  (o.return = t),
                  (i.return = t),
                  (o.sibling = i),
                  (t.child = o),
                  rs(t, e.child, null, r),
                  ((o = t.child).memoizedState = Fs(r)),
                  (o.childLanes = Ws(e, n, r)),
                  (t.memoizedState = Bs),
                  (t = i));
          else if ((as(t), yc(u))) {
            if ((n = u.nextSibling && u.nextSibling.dataset)) var g = n.dgst;
            (n = g),
              ((o = Error(a(419))).stack = ""),
              (o.digest = n),
              yo({ value: o, source: null, stack: null }),
              (t = Gs(e, t, r));
          } else if (
            (Os || Ao(e, t, r, !1), (n = 0 != (r & e.childLanes)), Os || n)
          ) {
            if (
              null !== (n = nu) &&
              0 !==
                (o =
                  0 !=
                  ((o = 0 != (42 & (o = r & -r)) ? 1 : Re(o)) &
                    (n.suspendedLanes | r))
                    ? 0
                    : o) &&
              o !== l.retryLane
            )
              throw ((l.retryLane = o), Pn(e, o), Lu(n, e, o), js);
            "$?" === u.data || Ku(), (t = Gs(e, t, r));
          } else
            "$?" === u.data
              ? ((t.flags |= 192), (t.child = e.child), (t = null))
              : ((e = l.treeContext),
                (oo = bc(u.nextSibling)),
                (no = t),
                (io = !0),
                (ao = null),
                (so = !1),
                null !== e &&
                  (($n[qn++] = Qn),
                  ($n[qn++] = Zn),
                  ($n[qn++] = Xn),
                  (Qn = e.id),
                  (Zn = e.overflow),
                  (Xn = t)),
                ((t = Vs(t, o.children)).flags |= 4096));
          return t;
        }
        return i
          ? (ls(),
            (i = o.fallback),
            (u = t.mode),
            (g = (l = e.child).sibling),
            ((o = Dn(l, {
              mode: "hidden",
              children: o.children,
            })).subtreeFlags = 65011712 & l.subtreeFlags),
            null !== g ? (i = Dn(g, i)) : ((i = Wn(i, u, r, null)).flags |= 2),
            (i.return = t),
            (o.return = t),
            (o.sibling = i),
            (t.child = o),
            (o = i),
            (i = t.child),
            null === (u = e.child.memoizedState)
              ? (u = Fs(r))
              : (null !== (l = u.cachePool)
                  ? ((g = xo._currentValue),
                    (l = l.parent !== g ? { parent: g, pool: g } : l))
                  : (l = Go()),
                (u = { baseLanes: u.baseLanes | r, cachePool: l })),
            (i.memoizedState = u),
            (i.childLanes = Ws(e, n, r)),
            (t.memoizedState = Bs),
            o)
          : (as(t),
            (e = (r = e.child).sibling),
            ((r = Dn(r, { mode: "visible", children: o.children })).return = t),
            (r.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = r),
            (t.memoizedState = null),
            r);
      }
      function Vs(e, t) {
        return (
          ((t = zs({ mode: "visible", children: t }, e.mode)).return = e),
          (e.child = t)
        );
      }
      function zs(e, t) {
        return (
          ((e = Ln(22, e, null, t)).lanes = 0),
          (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
          e
        );
      }
      function Gs(e, t, r) {
        return (
          rs(t, e.child, null, r),
          ((e = Vs(t, t.pendingProps.children)).flags |= 2),
          (t.memoizedState = null),
          e
        );
      }
      function Ys(e, t, r) {
        e.lanes |= t;
        var n = e.alternate;
        null !== n && (n.lanes |= t), Eo(e.return, t, r);
      }
      function Ks(e, t, r, n, o) {
        var i = e.memoizedState;
        null === i
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: n,
              tail: r,
              tailMode: o,
            })
          : ((i.isBackwards = t),
            (i.rendering = null),
            (i.renderingStartTime = 0),
            (i.last = n),
            (i.tail = r),
            (i.tailMode = o));
      }
      function $s(e, t, r) {
        var n = t.pendingProps,
          o = n.revealOrder,
          i = n.tail;
        if ((Rs(e, t, n.children, r), 0 != (2 & (n = gs.current))))
          (n = (1 & n) | 2), (t.flags |= 128);
        else {
          if (null !== e && 0 != (128 & e.flags))
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && Ys(e, r, t);
              else if (19 === e.tag) Ys(e, r, t);
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
        switch ((W(gs, n), o)) {
          case "forwards":
            for (r = t.child, o = null; null !== r; )
              null !== (e = r.alternate) && null === cs(e) && (o = r),
                (r = r.sibling);
            null === (r = o)
              ? ((o = t.child), (t.child = null))
              : ((o = r.sibling), (r.sibling = null)),
              Ks(t, !1, o, r, i);
            break;
          case "backwards":
            for (r = null, o = t.child, t.child = null; null !== o; ) {
              if (null !== (e = o.alternate) && null === cs(e)) {
                t.child = o;
                break;
              }
              (e = o.sibling), (o.sibling = r), (r = o), (o = e);
            }
            Ks(t, !0, r, null, i);
            break;
          case "together":
            Ks(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
        return t.child;
      }
      function qs(e, t, r) {
        if (
          (null !== e && (t.dependencies = e.dependencies),
          (fu |= t.lanes),
          0 == (r & t.childLanes))
        ) {
          if (null === e) return null;
          if ((Ao(e, t, r, !1), 0 == (r & t.childLanes))) return null;
        }
        if (null !== e && t.child !== e.child) throw Error(a(153));
        if (null !== t.child) {
          for (
            r = Dn((e = t.child), e.pendingProps), t.child = r, r.return = t;
            null !== e.sibling;
          )
            (e = e.sibling),
              ((r = r.sibling = Dn(e, e.pendingProps)).return = t);
          r.sibling = null;
        }
        return t.child;
      }
      function Xs(e, t) {
        return 0 != (e.lanes & t) || !(null === (e = e.dependencies) || !wo(e));
      }
      function Qs(e, t, r) {
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps) Os = !0;
          else {
            if (!Xs(e, r) && 0 == (128 & t.flags))
              return (
                (Os = !1),
                (function (e, t, r) {
                  switch (t.tag) {
                    case 3:
                      Y(t, t.stateNode.containerInfo),
                        vo(0, xo, e.memoizedState.cache),
                        fo();
                      break;
                    case 27:
                    case 5:
                      $(t);
                      break;
                    case 4:
                      Y(t, t.stateNode.containerInfo);
                      break;
                    case 10:
                      vo(0, t.type, t.memoizedProps.value);
                      break;
                    case 13:
                      var n = t.memoizedState;
                      if (null !== n)
                        return null !== n.dehydrated
                          ? (as(t), (t.flags |= 128), null)
                          : 0 != (r & t.child.childLanes)
                            ? Hs(e, t, r)
                            : (as(t),
                              null !== (e = qs(e, t, r)) ? e.sibling : null);
                      as(t);
                      break;
                    case 19:
                      var o = 0 != (128 & e.flags);
                      if (
                        ((n = 0 != (r & t.childLanes)) ||
                          (Ao(e, t, r, !1), (n = 0 != (r & t.childLanes))),
                        o)
                      ) {
                        if (n) return $s(e, t, r);
                        t.flags |= 128;
                      }
                      if (
                        (null !== (o = t.memoizedState) &&
                          ((o.rendering = null),
                          (o.tail = null),
                          (o.lastEffect = null)),
                        W(gs, gs.current),
                        n)
                      )
                        break;
                      return null;
                    case 22:
                    case 23:
                      return (t.lanes = 0), Is(e, t, r);
                    case 24:
                      vo(0, xo, e.memoizedState.cache);
                  }
                  return qs(e, t, r);
                })(e, t, r)
              );
            Os = 0 != (131072 & e.flags);
          }
        else (Os = !1), io && 0 != (1048576 & t.flags) && eo(t, Kn, t.index);
        switch (((t.lanes = 0), t.tag)) {
          case 16:
            e: {
              e = t.pendingProps;
              var n = t.elementType,
                o = n._init;
              if (((n = o(n._payload)), (t.type = n), "function" != typeof n)) {
                if (null != n) {
                  if ((o = n.$$typeof) === E) {
                    (t.tag = 11), (t = Cs(null, t, n, e, r));
                    break e;
                  }
                  if (o === w) {
                    (t.tag = 14), (t = Ns(null, t, n, e, r));
                    break e;
                  }
                }
                throw ((t = I(n) || n), Error(a(306, t, "")));
              }
              Un(n)
                ? ((e = ys(n, e)), (t.tag = 1), (t = Us(null, t, n, e, r)))
                : ((t.tag = 0), (t = Ms(null, t, n, e, r)));
            }
            return t;
          case 0:
            return Ms(e, t, t.type, t.pendingProps, r);
          case 1:
            return Us(e, t, (n = t.type), (o = ys(n, t.pendingProps)), r);
          case 3:
            e: {
              if ((Y(t, t.stateNode.containerInfo), null === e))
                throw Error(a(387));
              n = t.pendingProps;
              var i = t.memoizedState;
              (o = i.element), oi(e, t), ci(t, n, null, r);
              var s = t.memoizedState;
              if (
                ((n = s.cache),
                vo(0, xo, n),
                n !== i.cache && To(t, [xo], r, !0),
                gi(),
                (n = s.element),
                i.isDehydrated)
              ) {
                if (
                  ((i = { element: n, isDehydrated: !1, cache: s.cache }),
                  (t.updateQueue.baseState = i),
                  (t.memoizedState = i),
                  256 & t.flags)
                ) {
                  t = Ds(e, t, n, r);
                  break e;
                }
                if (n !== o) {
                  yo((o = An(Error(a(424)), t))), (t = Ds(e, t, n, r));
                  break e;
                }
                if (9 === (e = t.stateNode.containerInfo).nodeType) e = e.body;
                else e = "HTML" === e.nodeName ? e.ownerDocument.body : e;
                for (
                  oo = bc(e.firstChild),
                    no = t,
                    io = !0,
                    ao = null,
                    so = !0,
                    r = ns(t, null, n, r),
                    t.child = r;
                  r;
                )
                  (r.flags = (-3 & r.flags) | 4096), (r = r.sibling);
              } else {
                if ((fo(), n === o)) {
                  t = qs(e, t, r);
                  break e;
                }
                Rs(e, t, n, r);
              }
              t = t.child;
            }
            return t;
          case 26:
            return (
              ks(e, t),
              null === e
                ? (r = Rc(t.type, null, t.pendingProps, null))
                  ? (t.memoizedState = r)
                  : io ||
                    ((r = t.type),
                    (e = t.pendingProps),
                    ((n = nc(z.current).createElement(r))[Ie] = t),
                    (n[xe] = e),
                    ec(n, r, e),
                    Ge(n),
                    (t.stateNode = n))
                : (t.memoizedState = Rc(
                    t.type,
                    e.memoizedProps,
                    t.pendingProps,
                    e.memoizedState,
                  )),
              null
            );
          case 27:
            return (
              $(t),
              null === e &&
                io &&
                ((n = t.stateNode = vc(t.type, t.pendingProps, z.current)),
                (no = t),
                (so = !0),
                (o = oo),
                fc(t.type) ? ((mc = o), (oo = bc(n.firstChild))) : (oo = o)),
              Rs(e, t, t.pendingProps.children, r),
              ks(e, t),
              null === e && (t.flags |= 4194304),
              t.child
            );
          case 5:
            return (
              null === e &&
                io &&
                ((o = n = oo) &&
                  (null !==
                  (n = (function (e, t, r, n) {
                    for (; 1 === e.nodeType; ) {
                      var o = r;
                      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                        if (
                          !n &&
                          ("INPUT" !== e.nodeName || "hidden" !== e.type)
                        )
                          break;
                      } else if (n) {
                        if (!e[Be])
                          switch (t) {
                            case "meta":
                              if (!e.hasAttribute("itemprop")) break;
                              return e;
                            case "link":
                              if (
                                "stylesheet" === (i = e.getAttribute("rel")) &&
                                e.hasAttribute("data-precedence")
                              )
                                break;
                              if (
                                i !== o.rel ||
                                e.getAttribute("href") !==
                                  (null == o.href || "" === o.href
                                    ? null
                                    : o.href) ||
                                e.getAttribute("crossorigin") !==
                                  (null == o.crossOrigin
                                    ? null
                                    : o.crossOrigin) ||
                                e.getAttribute("title") !==
                                  (null == o.title ? null : o.title)
                              )
                                break;
                              return e;
                            case "style":
                              if (e.hasAttribute("data-precedence")) break;
                              return e;
                            case "script":
                              if (
                                ((i = e.getAttribute("src")) !==
                                  (null == o.src ? null : o.src) ||
                                  e.getAttribute("type") !==
                                    (null == o.type ? null : o.type) ||
                                  e.getAttribute("crossorigin") !==
                                    (null == o.crossOrigin
                                      ? null
                                      : o.crossOrigin)) &&
                                i &&
                                e.hasAttribute("async") &&
                                !e.hasAttribute("itemprop")
                              )
                                break;
                              return e;
                            default:
                              return e;
                          }
                      } else {
                        if ("input" !== t || "hidden" !== e.type) return e;
                        var i = null == o.name ? null : "" + o.name;
                        if ("hidden" === o.type && e.getAttribute("name") === i)
                          return e;
                      }
                      if (null === (e = bc(e.nextSibling))) break;
                    }
                    return null;
                  })(n, t.type, t.pendingProps, so))
                    ? ((t.stateNode = n),
                      (no = t),
                      (oo = bc(n.firstChild)),
                      (so = !1),
                      (o = !0))
                    : (o = !1)),
                o || uo(t)),
              $(t),
              (o = t.type),
              (i = t.pendingProps),
              (s = null !== e ? e.memoizedProps : null),
              (n = i.children),
              ac(o, i) ? (n = null) : null !== s && ac(o, s) && (t.flags |= 32),
              null !== t.memoizedState &&
                ((o = Ii(e, t, Mi, null, null, r)), ($c._currentValue = o)),
              ks(e, t),
              Rs(e, t, n, r),
              t.child
            );
          case 6:
            return (
              null === e &&
                io &&
                ((e = r = oo) &&
                  (null !==
                  (r = (function (e, t, r) {
                    if ("" === t) return null;
                    for (; 3 !== e.nodeType; ) {
                      if (
                        (1 !== e.nodeType ||
                          "INPUT" !== e.nodeName ||
                          "hidden" !== e.type) &&
                        !r
                      )
                        return null;
                      if (null === (e = bc(e.nextSibling))) return null;
                    }
                    return e;
                  })(r, t.pendingProps, so))
                    ? ((t.stateNode = r), (no = t), (oo = null), (e = !0))
                    : (e = !1)),
                e || uo(t)),
              null
            );
          case 13:
            return Hs(e, t, r);
          case 4:
            return (
              Y(t, t.stateNode.containerInfo),
              (n = t.pendingProps),
              null === e ? (t.child = rs(t, null, n, r)) : Rs(e, t, n, r),
              t.child
            );
          case 11:
            return Cs(e, t, t.type, t.pendingProps, r);
          case 7:
            return Rs(e, t, t.pendingProps, r), t.child;
          case 8:
          case 12:
            return Rs(e, t, t.pendingProps.children, r), t.child;
          case 10:
            return (
              (n = t.pendingProps),
              vo(0, t.type, n.value),
              Rs(e, t, n.children, r),
              t.child
            );
          case 9:
            return (
              (o = t.type._context),
              (n = t.pendingProps.children),
              jo(t),
              (n = n((o = Oo(o)))),
              (t.flags |= 1),
              Rs(e, t, n, r),
              t.child
            );
          case 14:
            return Ns(e, t, t.type, t.pendingProps, r);
          case 15:
            return Ps(e, t, t.type, t.pendingProps, r);
          case 19:
            return $s(e, t, r);
          case 31:
            return (
              (n = t.pendingProps),
              (r = t.mode),
              (n = { mode: n.mode, children: n.children }),
              null === e
                ? (((r = zs(n, r)).ref = t.ref),
                  (t.child = r),
                  (r.return = t),
                  (t = r))
                : (((r = Dn(e.child, n)).ref = t.ref),
                  (t.child = r),
                  (r.return = t),
                  (t = r)),
              t
            );
          case 22:
            return Is(e, t, r);
          case 24:
            return (
              jo(t),
              (n = Oo(xo)),
              null === e
                ? (null === (o = Vo()) &&
                    ((o = nu),
                    (i = ko()),
                    (o.pooledCache = i),
                    i.refCount++,
                    null !== i && (o.pooledCacheLanes |= r),
                    (o = i)),
                  (t.memoizedState = { parent: n, cache: o }),
                  ni(t),
                  vo(0, xo, o))
                : (0 != (e.lanes & r) && (oi(e, t), ci(t, null, null, r), gi()),
                  (o = e.memoizedState),
                  (i = t.memoizedState),
                  o.parent !== n
                    ? ((o = { parent: n, cache: n }),
                      (t.memoizedState = o),
                      0 === t.lanes &&
                        (t.memoizedState = t.updateQueue.baseState = o),
                      vo(0, xo, n))
                    : ((n = i.cache),
                      vo(0, xo, n),
                      n !== o.cache && To(t, [xo], r, !0))),
              Rs(e, t, t.pendingProps.children, r),
              t.child
            );
          case 29:
            throw t.pendingProps;
        }
        throw Error(a(156, t.tag));
      }
      function Zs(e) {
        e.flags |= 4;
      }
      function Js(e, t) {
        if ("stylesheet" !== t.type || 0 != (4 & t.state.loading))
          e.flags &= -16777217;
        else if (((e.flags |= 16777216), !Wc(t))) {
          if (
            null !== (t = os.current) &&
            ((4194048 & iu) === iu
              ? null !== is
              : ((62914560 & iu) !== iu && 0 == (536870912 & iu)) || t !== is)
          )
            throw ((Jo = qo), Ko);
          e.flags |= 8192;
        }
      }
      function el(e, t) {
        null !== t && (e.flags |= 4),
          16384 & e.flags &&
            ((t = 22 !== e.tag ? Te() : 536870912), (e.lanes |= t), (bu |= t));
      }
      function tl(e, t) {
        if (!io)
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
      function rl(e) {
        var t = null !== e.alternate && e.alternate.child === e.child,
          r = 0,
          n = 0;
        if (t)
          for (var o = e.child; null !== o; )
            (r |= o.lanes | o.childLanes),
              (n |= 65011712 & o.subtreeFlags),
              (n |= 65011712 & o.flags),
              (o.return = e),
              (o = o.sibling);
        else
          for (o = e.child; null !== o; )
            (r |= o.lanes | o.childLanes),
              (n |= o.subtreeFlags),
              (n |= o.flags),
              (o.return = e),
              (o = o.sibling);
        return (e.subtreeFlags |= n), (e.childLanes = r), t;
      }
      function nl(e, t, r) {
        var n = t.pendingProps;
        switch ((ro(t), t.tag)) {
          case 31:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
          case 1:
            return rl(t), null;
          case 3:
            return (
              (r = t.stateNode),
              (n = null),
              null !== e && (n = e.memoizedState.cache),
              t.memoizedState.cache !== n && (t.flags |= 2048),
              So(xo),
              K(),
              r.pendingContext &&
                ((r.context = r.pendingContext), (r.pendingContext = null)),
              (null !== e && null !== e.child) ||
                (po(t)
                  ? Zs(t)
                  : null === e ||
                    (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                    ((t.flags |= 1024), ho())),
              rl(t),
              null
            );
          case 26:
            return (
              (r = t.memoizedState),
              null === e
                ? (Zs(t),
                  null !== r
                    ? (rl(t), Js(t, r))
                    : (rl(t), (t.flags &= -16777217)))
                : r
                  ? r !== e.memoizedState
                    ? (Zs(t), rl(t), Js(t, r))
                    : (rl(t), (t.flags &= -16777217))
                  : (e.memoizedProps !== n && Zs(t),
                    rl(t),
                    (t.flags &= -16777217)),
              null
            );
          case 27:
            q(t), (r = z.current);
            var o = t.type;
            if (null !== e && null != t.stateNode)
              e.memoizedProps !== n && Zs(t);
            else {
              if (!n) {
                if (null === t.stateNode) throw Error(a(166));
                return rl(t), null;
              }
              (e = H.current),
                po(t) ? go(t) : ((e = vc(o, n, r)), (t.stateNode = e), Zs(t));
            }
            return rl(t), null;
          case 5:
            if ((q(t), (r = t.type), null !== e && null != t.stateNode))
              e.memoizedProps !== n && Zs(t);
            else {
              if (!n) {
                if (null === t.stateNode) throw Error(a(166));
                return rl(t), null;
              }
              if (((e = H.current), po(t))) go(t);
              else {
                switch (((o = nc(z.current)), e)) {
                  case 1:
                    e = o.createElementNS("http://www.w3.org/2000/svg", r);
                    break;
                  case 2:
                    e = o.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      r,
                    );
                    break;
                  default:
                    switch (r) {
                      case "svg":
                        e = o.createElementNS("http://www.w3.org/2000/svg", r);
                        break;
                      case "math":
                        e = o.createElementNS(
                          "http://www.w3.org/1998/Math/MathML",
                          r,
                        );
                        break;
                      case "script":
                        ((e = o.createElement("div")).innerHTML =
                          "<script></script>"),
                          (e = e.removeChild(e.firstChild));
                        break;
                      case "select":
                        (e =
                          "string" == typeof n.is
                            ? o.createElement("select", { is: n.is })
                            : o.createElement("select")),
                          n.multiple
                            ? (e.multiple = !0)
                            : n.size && (e.size = n.size);
                        break;
                      default:
                        e =
                          "string" == typeof n.is
                            ? o.createElement(r, { is: n.is })
                            : o.createElement(r);
                    }
                }
                (e[Ie] = t), (e[xe] = n);
                e: for (o = t.child; null !== o; ) {
                  if (5 === o.tag || 6 === o.tag) e.appendChild(o.stateNode);
                  else if (4 !== o.tag && 27 !== o.tag && null !== o.child) {
                    (o.child.return = o), (o = o.child);
                    continue;
                  }
                  if (o === t) break e;
                  for (; null === o.sibling; ) {
                    if (null === o.return || o.return === t) break e;
                    o = o.return;
                  }
                  (o.sibling.return = o.return), (o = o.sibling);
                }
                t.stateNode = e;
                e: switch ((ec(e, r, n), r)) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    e = !!n.autoFocus;
                    break e;
                  case "img":
                    e = !0;
                    break e;
                  default:
                    e = !1;
                }
                e && Zs(t);
              }
            }
            return rl(t), (t.flags &= -16777217), null;
          case 6:
            if (e && null != t.stateNode) e.memoizedProps !== n && Zs(t);
            else {
              if ("string" != typeof n && null === t.stateNode)
                throw Error(a(166));
              if (((e = z.current), po(t))) {
                if (
                  ((e = t.stateNode),
                  (r = t.memoizedProps),
                  (n = null),
                  null !== (o = no))
                )
                  switch (o.tag) {
                    case 27:
                    case 5:
                      n = o.memoizedProps;
                  }
                (e[Ie] = t),
                  (e = !!(
                    e.nodeValue === r ||
                    (null !== n && !0 === n.suppressHydrationWarning) ||
                    Xg(e.nodeValue, r)
                  )) || uo(t);
              } else ((e = nc(e).createTextNode(n))[Ie] = t), (t.stateNode = e);
            }
            return rl(t), null;
          case 13:
            if (
              ((n = t.memoizedState),
              null === e ||
                (null !== e.memoizedState &&
                  null !== e.memoizedState.dehydrated))
            ) {
              if (((o = po(t)), null !== n && null !== n.dehydrated)) {
                if (null === e) {
                  if (!o) throw Error(a(318));
                  if (
                    !(o = null !== (o = t.memoizedState) ? o.dehydrated : null)
                  )
                    throw Error(a(317));
                  o[Ie] = t;
                } else
                  fo(),
                    0 == (128 & t.flags) && (t.memoizedState = null),
                    (t.flags |= 4);
                rl(t), (o = !1);
              } else
                (o = ho()),
                  null !== e &&
                    null !== e.memoizedState &&
                    (e.memoizedState.hydrationErrors = o),
                  (o = !0);
              if (!o) return 256 & t.flags ? (us(t), t) : (us(t), null);
            }
            if ((us(t), 0 != (128 & t.flags))) return (t.lanes = r), t;
            if (
              ((r = null !== n),
              (e = null !== e && null !== e.memoizedState),
              r)
            ) {
              (o = null),
                null !== (n = t.child).alternate &&
                  null !== n.alternate.memoizedState &&
                  null !== n.alternate.memoizedState.cachePool &&
                  (o = n.alternate.memoizedState.cachePool.pool);
              var i = null;
              null !== n.memoizedState &&
                null !== n.memoizedState.cachePool &&
                (i = n.memoizedState.cachePool.pool),
                i !== o && (n.flags |= 2048);
            }
            return (
              r !== e && r && (t.child.flags |= 8192),
              el(t, t.updateQueue),
              rl(t),
              null
            );
          case 4:
            return (
              K(), null === e && Fg(t.stateNode.containerInfo), rl(t), null
            );
          case 10:
            return So(t.type), rl(t), null;
          case 19:
            if ((F(gs), null === (o = t.memoizedState))) return rl(t), null;
            if (((n = 0 != (128 & t.flags)), null === (i = o.rendering)))
              if (n) tl(o, !1);
              else {
                if (0 !== pu || (null !== e && 0 != (128 & e.flags)))
                  for (e = t.child; null !== e; ) {
                    if (null !== (i = cs(e))) {
                      for (
                        t.flags |= 128,
                          tl(o, !1),
                          e = i.updateQueue,
                          t.updateQueue = e,
                          el(t, e),
                          t.subtreeFlags = 0,
                          e = r,
                          r = t.child;
                        null !== r;
                      )
                        Bn(r, e), (r = r.sibling);
                      return W(gs, (1 & gs.current) | 2), t.child;
                    }
                    e = e.sibling;
                  }
                null !== o.tail &&
                  te() > Eu &&
                  ((t.flags |= 128), (n = !0), tl(o, !1), (t.lanes = 4194304));
              }
            else {
              if (!n)
                if (null !== (e = cs(i))) {
                  if (
                    ((t.flags |= 128),
                    (n = !0),
                    (e = e.updateQueue),
                    (t.updateQueue = e),
                    el(t, e),
                    tl(o, !0),
                    null === o.tail &&
                      "hidden" === o.tailMode &&
                      !i.alternate &&
                      !io)
                  )
                    return rl(t), null;
                } else
                  2 * te() - o.renderingStartTime > Eu &&
                    536870912 !== r &&
                    ((t.flags |= 128),
                    (n = !0),
                    tl(o, !1),
                    (t.lanes = 4194304));
              o.isBackwards
                ? ((i.sibling = t.child), (t.child = i))
                : (null !== (e = o.last) ? (e.sibling = i) : (t.child = i),
                  (o.last = i));
            }
            return null !== o.tail
              ? ((t = o.tail),
                (o.rendering = t),
                (o.tail = t.sibling),
                (o.renderingStartTime = te()),
                (t.sibling = null),
                (e = gs.current),
                W(gs, n ? (1 & e) | 2 : 1 & e),
                t)
              : (rl(t), null);
          case 22:
          case 23:
            return (
              us(t),
              mi(),
              (n = null !== t.memoizedState),
              null !== e
                ? (null !== e.memoizedState) !== n && (t.flags |= 8192)
                : n && (t.flags |= 8192),
              n
                ? 0 != (536870912 & r) &&
                  0 == (128 & t.flags) &&
                  (rl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                : rl(t),
              null !== (r = t.updateQueue) && el(t, r.retryQueue),
              (r = null),
              null !== e &&
                null !== e.memoizedState &&
                null !== e.memoizedState.cachePool &&
                (r = e.memoizedState.cachePool.pool),
              (n = null),
              null !== t.memoizedState &&
                null !== t.memoizedState.cachePool &&
                (n = t.memoizedState.cachePool.pool),
              n !== r && (t.flags |= 2048),
              null !== e && F(Ho),
              null
            );
          case 24:
            return (
              (r = null),
              null !== e && (r = e.memoizedState.cache),
              t.memoizedState.cache !== r && (t.flags |= 2048),
              So(xo),
              rl(t),
              null
            );
          case 25:
          case 30:
            return null;
        }
        throw Error(a(156, t.tag));
      }
      function ol(e, t) {
        switch ((ro(t), t.tag)) {
          case 1:
            return 65536 & (e = t.flags)
              ? ((t.flags = (-65537 & e) | 128), t)
              : null;
          case 3:
            return (
              So(xo),
              K(),
              0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null
            );
          case 26:
          case 27:
          case 5:
            return q(t), null;
          case 13:
            if (
              (us(t), null !== (e = t.memoizedState) && null !== e.dehydrated)
            ) {
              if (null === t.alternate) throw Error(a(340));
              fo();
            }
            return 65536 & (e = t.flags)
              ? ((t.flags = (-65537 & e) | 128), t)
              : null;
          case 19:
            return F(gs), null;
          case 4:
            return K(), null;
          case 10:
            return So(t.type), null;
          case 22:
          case 23:
            return (
              us(t),
              mi(),
              null !== e && F(Ho),
              65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
          case 24:
            return So(xo), null;
          default:
            return null;
        }
      }
      function il(e, t) {
        switch ((ro(t), t.tag)) {
          case 3:
            So(xo), K();
            break;
          case 26:
          case 27:
          case 5:
            q(t);
            break;
          case 4:
            K();
            break;
          case 13:
            us(t);
            break;
          case 19:
            F(gs);
            break;
          case 10:
            So(t.type);
            break;
          case 22:
          case 23:
            us(t), mi(), null !== e && F(Ho);
            break;
          case 24:
            So(xo);
        }
      }
      function al(e, t) {
        try {
          var r = t.updateQueue,
            n = null !== r ? r.lastEffect : null;
          if (null !== n) {
            var o = n.next;
            r = o;
            do {
              if ((r.tag & e) === e) {
                n = void 0;
                var i = r.create,
                  a = r.inst;
                (n = i()), (a.destroy = n);
              }
              r = r.next;
            } while (r !== o);
          }
        } catch (e) {
          gg(t, t.return, e);
        }
      }
      function sl(e, t, r) {
        try {
          var n = t.updateQueue,
            o = null !== n ? n.lastEffect : null;
          if (null !== o) {
            var i = o.next;
            n = i;
            do {
              if ((n.tag & e) === e) {
                var a = n.inst,
                  s = a.destroy;
                if (void 0 !== s) {
                  (a.destroy = void 0), (o = t);
                  var l = r,
                    u = s;
                  try {
                    u();
                  } catch (e) {
                    gg(o, l, e);
                  }
                }
              }
              n = n.next;
            } while (n !== i);
          }
        } catch (e) {
          gg(t, t.return, e);
        }
      }
      function ll(e) {
        var t = e.updateQueue;
        if (null !== t) {
          var r = e.stateNode;
          try {
            fi(t, r);
          } catch (t) {
            gg(e, e.return, t);
          }
        }
      }
      function ul(e, t, r) {
        (r.props = ys(e.type, e.memoizedProps)), (r.state = e.memoizedState);
        try {
          r.componentWillUnmount();
        } catch (r) {
          gg(e, t, r);
        }
      }
      function gl(e, t) {
        try {
          var r = e.ref;
          if (null !== r) {
            switch (e.tag) {
              case 26:
              case 27:
              case 5:
                var n = e.stateNode;
                break;
              default:
                n = e.stateNode;
            }
            "function" == typeof r ? (e.refCleanup = r(n)) : (r.current = n);
          }
        } catch (r) {
          gg(e, t, r);
        }
      }
      function cl(e, t) {
        var r = e.ref,
          n = e.refCleanup;
        if (null !== r)
          if ("function" == typeof n)
            try {
              n();
            } catch (r) {
              gg(e, t, r);
            } finally {
              (e.refCleanup = null),
                null != (e = e.alternate) && (e.refCleanup = null);
            }
          else if ("function" == typeof r)
            try {
              r(null);
            } catch (r) {
              gg(e, t, r);
            }
          else r.current = null;
      }
      function pl(e) {
        var t = e.type,
          r = e.memoizedProps,
          n = e.stateNode;
        try {
          e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              r.autoFocus && n.focus();
              break e;
            case "img":
              r.src ? (n.src = r.src) : r.srcSet && (n.srcset = r.srcSet);
          }
        } catch (t) {
          gg(e, e.return, t);
        }
      }
      function fl(e, t, r) {
        try {
          var n = e.stateNode;
          !(function (e, t, r, n) {
            switch (t) {
              case "div":
              case "span":
              case "svg":
              case "path":
              case "a":
              case "g":
              case "p":
              case "li":
                break;
              case "input":
                var o = null,
                  i = null,
                  s = null,
                  l = null,
                  u = null,
                  g = null,
                  c = null;
                for (d in r) {
                  var p = r[d];
                  if (r.hasOwnProperty(d) && null != p)
                    switch (d) {
                      case "checked":
                      case "value":
                        break;
                      case "defaultValue":
                        u = p;
                      default:
                        n.hasOwnProperty(d) || Zg(e, t, d, null, n, p);
                    }
                }
                for (var f in n) {
                  var d = n[f];
                  if (
                    ((p = r[f]),
                    n.hasOwnProperty(f) && (null != d || null != p))
                  )
                    switch (f) {
                      case "type":
                        i = d;
                        break;
                      case "name":
                        o = d;
                        break;
                      case "checked":
                        g = d;
                        break;
                      case "defaultChecked":
                        c = d;
                        break;
                      case "value":
                        s = d;
                        break;
                      case "defaultValue":
                        l = d;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (null != d) throw Error(a(137, t));
                        break;
                      default:
                        d !== p && Zg(e, t, f, d, n, p);
                    }
                }
                return void yt(e, s, l, u, g, c, i, o);
              case "select":
                for (i in ((d = s = l = f = null), r))
                  if (((u = r[i]), r.hasOwnProperty(i) && null != u))
                    switch (i) {
                      case "value":
                        break;
                      case "multiple":
                        d = u;
                      default:
                        n.hasOwnProperty(i) || Zg(e, t, i, null, n, u);
                    }
                for (o in n)
                  if (
                    ((i = n[o]),
                    (u = r[o]),
                    n.hasOwnProperty(o) && (null != i || null != u))
                  )
                    switch (o) {
                      case "value":
                        f = i;
                        break;
                      case "defaultValue":
                        l = i;
                        break;
                      case "multiple":
                        s = i;
                      default:
                        i !== u && Zg(e, t, o, i, n, u);
                    }
                return (
                  (t = l),
                  (r = s),
                  (n = d),
                  void (null != f
                    ? _t(e, !!r, f, !1)
                    : !!n != !!r &&
                      (null != t
                        ? _t(e, !!r, t, !0)
                        : _t(e, !!r, r ? [] : "", !1)))
                );
              case "textarea":
                for (l in ((d = f = null), r))
                  if (
                    ((o = r[l]),
                    r.hasOwnProperty(l) && null != o && !n.hasOwnProperty(l))
                  )
                    switch (l) {
                      case "value":
                      case "children":
                        break;
                      default:
                        Zg(e, t, l, null, n, o);
                    }
                for (s in n)
                  if (
                    ((o = n[s]),
                    (i = r[s]),
                    n.hasOwnProperty(s) && (null != o || null != i))
                  )
                    switch (s) {
                      case "value":
                        f = o;
                        break;
                      case "defaultValue":
                        d = o;
                        break;
                      case "children":
                        break;
                      case "dangerouslySetInnerHTML":
                        if (null != o) throw Error(a(91));
                        break;
                      default:
                        o !== i && Zg(e, t, s, o, n, i);
                    }
                return void vt(e, f, d);
              case "option":
                for (var h in r)
                  if (
                    ((f = r[h]),
                    r.hasOwnProperty(h) && null != f && !n.hasOwnProperty(h))
                  )
                    if ("selected" === h) e.selected = !1;
                    else Zg(e, t, h, null, n, f);
                for (u in n)
                  if (
                    ((f = n[u]),
                    (d = r[u]),
                    n.hasOwnProperty(u) && f !== d && (null != f || null != d))
                  )
                    if ("selected" === u)
                      e.selected =
                        f && "function" != typeof f && "symbol" != typeof f;
                    else Zg(e, t, u, f, n, d);
                return;
              case "img":
              case "link":
              case "area":
              case "base":
              case "br":
              case "col":
              case "embed":
              case "hr":
              case "keygen":
              case "meta":
              case "param":
              case "source":
              case "track":
              case "wbr":
              case "menuitem":
                for (var y in r)
                  (f = r[y]),
                    r.hasOwnProperty(y) &&
                      null != f &&
                      !n.hasOwnProperty(y) &&
                      Zg(e, t, y, null, n, f);
                for (g in n)
                  if (
                    ((f = n[g]),
                    (d = r[g]),
                    n.hasOwnProperty(g) && f !== d && (null != f || null != d))
                  )
                    switch (g) {
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (null != f) throw Error(a(137, t));
                        break;
                      default:
                        Zg(e, t, g, f, n, d);
                    }
                return;
              default:
                if (jt(t)) {
                  for (var b in r)
                    (f = r[b]),
                      r.hasOwnProperty(b) &&
                        void 0 !== f &&
                        !n.hasOwnProperty(b) &&
                        Jg(e, t, b, void 0, n, f);
                  for (c in n)
                    (f = n[c]),
                      (d = r[c]),
                      !n.hasOwnProperty(c) ||
                        f === d ||
                        (void 0 === f && void 0 === d) ||
                        Jg(e, t, c, f, n, d);
                  return;
                }
            }
            for (var m in r)
              (f = r[m]),
                r.hasOwnProperty(m) &&
                  null != f &&
                  !n.hasOwnProperty(m) &&
                  Zg(e, t, m, null, n, f);
            for (p in n)
              (f = n[p]),
                (d = r[p]),
                !n.hasOwnProperty(p) ||
                  f === d ||
                  (null == f && null == d) ||
                  Zg(e, t, p, f, n, d);
          })(n, e.type, r, t),
            (n[xe] = t);
        } catch (t) {
          gg(e, e.return, t);
        }
      }
      function dl(e) {
        return (
          5 === e.tag ||
          3 === e.tag ||
          26 === e.tag ||
          (27 === e.tag && fc(e.type)) ||
          4 === e.tag
        );
      }
      function hl(e) {
        e: for (;;) {
          for (; null === e.sibling; ) {
            if (null === e.return || dl(e.return)) return null;
            e = e.return;
          }
          for (
            e.sibling.return = e.return, e = e.sibling;
            5 !== e.tag && 6 !== e.tag && 18 !== e.tag;
          ) {
            if (27 === e.tag && fc(e.type)) continue e;
            if (2 & e.flags) continue e;
            if (null === e.child || 4 === e.tag) continue e;
            (e.child.return = e), (e = e.child);
          }
          if (!(2 & e.flags)) return e.stateNode;
        }
      }
      function yl(e, t, r) {
        var n = e.tag;
        if (5 === n || 6 === n)
          (e = e.stateNode),
            t
              ? (9 === r.nodeType
                  ? r.body
                  : "HTML" === r.nodeName
                    ? r.ownerDocument.body
                    : r
                ).insertBefore(e, t)
              : ((t =
                  9 === r.nodeType
                    ? r.body
                    : "HTML" === r.nodeName
                      ? r.ownerDocument.body
                      : r).appendChild(e),
                null != (r = r._reactRootContainer) ||
                  null !== t.onclick ||
                  (t.onclick = Qg));
        else if (
          4 !== n &&
          (27 === n && fc(e.type) && ((r = e.stateNode), (t = null)),
          null !== (e = e.child))
        )
          for (yl(e, t, r), e = e.sibling; null !== e; )
            yl(e, t, r), (e = e.sibling);
      }
      function bl(e, t, r) {
        var n = e.tag;
        if (5 === n || 6 === n)
          (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
        else if (
          4 !== n &&
          (27 === n && fc(e.type) && (r = e.stateNode), null !== (e = e.child))
        )
          for (bl(e, t, r), e = e.sibling; null !== e; )
            bl(e, t, r), (e = e.sibling);
      }
      function ml(e) {
        var t = e.stateNode,
          r = e.memoizedProps;
        try {
          for (var n = e.type, o = t.attributes; o.length; )
            t.removeAttributeNode(o[0]);
          ec(t, n, r), (t[Ie] = e), (t[xe] = r);
        } catch (t) {
          gg(e, e.return, t);
        }
      }
      var _l = !1,
        vl = !1,
        Sl = !1,
        El = "function" == typeof WeakSet ? WeakSet : Set,
        Tl = null;
      function Al(e, t, r) {
        var n = r.flags;
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            Ul(e, r), 4 & n && al(5, r);
            break;
          case 1:
            if ((Ul(e, r), 4 & n))
              if (((e = r.stateNode), null === t))
                try {
                  e.componentDidMount();
                } catch (e) {
                  gg(r, r.return, e);
                }
              else {
                var o = ys(r.type, t.memoizedProps);
                t = t.memoizedState;
                try {
                  e.componentDidUpdate(
                    o,
                    t,
                    e.__reactInternalSnapshotBeforeUpdate,
                  );
                } catch (e) {
                  gg(r, r.return, e);
                }
              }
            64 & n && ll(r), 512 & n && gl(r, r.return);
            break;
          case 3:
            if ((Ul(e, r), 64 & n && null !== (e = r.updateQueue))) {
              if (((t = null), null !== r.child))
                switch (r.child.tag) {
                  case 27:
                  case 5:
                  case 1:
                    t = r.child.stateNode;
                }
              try {
                fi(e, t);
              } catch (e) {
                gg(r, r.return, e);
              }
            }
            break;
          case 27:
            null === t && 4 & n && ml(r);
          case 26:
          case 5:
            Ul(e, r), null === t && 4 & n && pl(r), 512 & n && gl(r, r.return);
            break;
          case 12:
            Ul(e, r);
            break;
          case 13:
            Ul(e, r),
              4 & n && Nl(e, r),
              64 & n &&
                null !== (e = r.memoizedState) && null !== (e = e.dehydrated) &&
                (function (e, t) {
                  var r = e.ownerDocument;
                  if ("$?" !== e.data || "complete" === r.readyState) t();
                  else {
                    var n = function () {
                      t(), r.removeEventListener("DOMContentLoaded", n);
                    };
                    r.addEventListener("DOMContentLoaded", n),
                      (e._reactRetry = n);
                  }
                })(e, (r = dg.bind(null, r)));
            break;
          case 22:
            if (!(n = null !== r.memoizedState || _l)) {
              (t = (null !== t && null !== t.memoizedState) || vl), (o = _l);
              var i = vl;
              (_l = n),
                (vl = t) && !i
                  ? Bl(e, r, 0 != (8772 & r.subtreeFlags))
                  : Ul(e, r),
                (_l = o),
                (vl = i);
            }
            break;
          case 30:
            break;
          default:
            Ul(e, r);
        }
      }
      function wl(e) {
        var t = e.alternate;
        null !== t && ((e.alternate = null), wl(t)),
          (e.child = null),
          (e.deletions = null),
          (e.sibling = null),
          5 === e.tag && null !== (t = e.stateNode) && Fe(t),
          (e.stateNode = null),
          (e.return = null),
          (e.dependencies = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.stateNode = null),
          (e.updateQueue = null);
      }
      var jl = null,
        Ol = !1;
      function Rl(e, t, r) {
        for (r = r.child; null !== r; ) Cl(e, t, r), (r = r.sibling);
      }
      function Cl(e, t, r) {
        if (ce && "function" == typeof ce.onCommitFiberUnmount)
          try {
            ce.onCommitFiberUnmount(ge, r);
          } catch (e) {}
        switch (r.tag) {
          case 26:
            vl || cl(r, t),
              Rl(e, t, r),
              r.memoizedState
                ? r.memoizedState.count--
                : r.stateNode && (r = r.stateNode).parentNode.removeChild(r);
            break;
          case 27:
            vl || cl(r, t);
            var n = jl,
              o = Ol;
            fc(r.type) && ((jl = r.stateNode), (Ol = !1)),
              Rl(e, t, r),
              Sc(r.stateNode),
              (jl = n),
              (Ol = o);
            break;
          case 5:
            vl || cl(r, t);
          case 6:
            if (
              ((n = jl),
              (o = Ol),
              (jl = null),
              Rl(e, t, r),
              (Ol = o),
              null !== (jl = n))
            )
              if (Ol)
                try {
                  (9 === jl.nodeType
                    ? jl.body
                    : "HTML" === jl.nodeName
                      ? jl.ownerDocument.body
                      : jl
                  ).removeChild(r.stateNode);
                } catch (e) {
                  gg(r, t, e);
                }
              else
                try {
                  jl.removeChild(r.stateNode);
                } catch (e) {
                  gg(r, t, e);
                }
            break;
          case 18:
            null !== jl &&
              (Ol
                ? (dc(
                    9 === (e = jl).nodeType
                      ? e.body
                      : "HTML" === e.nodeName
                        ? e.ownerDocument.body
                        : e,
                    r.stateNode,
                  ),
                  Op(e))
                : dc(jl, r.stateNode));
            break;
          case 4:
            (n = jl),
              (o = Ol),
              (jl = r.stateNode.containerInfo),
              (Ol = !0),
              Rl(e, t, r),
              (jl = n),
              (Ol = o);
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            vl || sl(2, r, t), vl || sl(4, r, t), Rl(e, t, r);
            break;
          case 1:
            vl ||
              (cl(r, t),
              "function" == typeof (n = r.stateNode).componentWillUnmount &&
                ul(r, t, n)),
              Rl(e, t, r);
            break;
          case 21:
            Rl(e, t, r);
            break;
          case 22:
            (vl = (n = vl) || null !== r.memoizedState), Rl(e, t, r), (vl = n);
            break;
          default:
            Rl(e, t, r);
        }
      }
      function Nl(e, t) {
        if (
          null === t.memoizedState &&
          null !== (e = t.alternate) && null !== (e = e.memoizedState) &&
          null !== (e = e.dehydrated)
        )
          try {
            Op(e);
          } catch (e) {
            gg(t, t.return, e);
          }
      }
      function Pl(e, t) {
        var r = (function (e) {
          switch (e.tag) {
            case 13:
            case 19:
              var t = e.stateNode;
              return null === t && (t = e.stateNode = new El()), t;
            case 22:
              return (
                null === (t = (e = e.stateNode)._retryCache) &&
                  (t = e._retryCache = new El()),
                t
              );
            default:
              throw Error(a(435, e.tag));
          }
        })(e);
        t.forEach(function (t) {
          var n = hg.bind(null, e, t);
          r.has(t) || (r.add(t), t.then(n, n));
        });
      }
      function Il(e, t) {
        var r = t.deletions;
        if (null !== r)
          for (var n = 0; n < r.length; n++) {
            var o = r[n],
              i = e,
              s = t,
              l = s;
            e: for (; null !== l; ) {
              switch (l.tag) {
                case 27:
                  if (fc(l.type)) {
                    (jl = l.stateNode), (Ol = !1);
                    break e;
                  }
                  break;
                case 5:
                  (jl = l.stateNode), (Ol = !1);
                  break e;
                case 3:
                case 4:
                  (jl = l.stateNode.containerInfo), (Ol = !0);
                  break e;
              }
              l = l.return;
            }
            if (null === jl) throw Error(a(160));
            Cl(i, s, o),
              (jl = null),
              (Ol = !1),
              null !== (i = o.alternate) && (i.return = null),
              (o.return = null);
          }
        if (13878 & t.subtreeFlags)
          for (t = t.child; null !== t; ) kl(t, e), (t = t.sibling);
      }
      var xl = null;
      function kl(e, t) {
        var r = e.alternate,
          n = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Il(t, e),
              Ml(e),
              4 & n && (sl(3, e, e.return), al(3, e), sl(5, e, e.return));
            break;
          case 1:
            Il(t, e),
              Ml(e),
              512 & n && (vl || null === r || cl(r, r.return)),
              64 & n &&
                _l &&
                null !== (e = e.updateQueue) && null !== (n = e.callbacks) &&
                ((r = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = null === r ? n : r.concat(n)));
            break;
          case 26:
            var o = xl;
            if (
              (Il(t, e),
              Ml(e),
              512 & n && (vl || null === r || cl(r, r.return)),
              4 & n)
            ) {
              var i = null !== r ? r.memoizedState : null;
              if (((n = e.memoizedState), null === r))
                if (null === n)
                  if (null === e.stateNode) {
                    e: {
                      (n = e.type),
                        (r = e.memoizedProps),
                        (o = o.ownerDocument || o);
                      t: switch (n) {
                        case "title":
                          (!(i = o.getElementsByTagName("title")[0]) ||
                            i[Be] ||
                            i[Ie] ||
                            "http://www.w3.org/2000/svg" === i.namespaceURI ||
                            i.hasAttribute("itemprop")) &&
                            ((i = o.createElement(n)),
                            o.head.insertBefore(
                              i,
                              o.querySelector("head > title"),
                            )),
                            ec(i, n, r),
                            (i[Ie] = e),
                            Ge(i),
                            (n = i);
                          break e;
                        case "link":
                          var s = Bc("link", "href", o).get(n + (r.href || ""));
                          if (s)
                            for (var l = 0; l < s.length; l++)
                              if (
                                (i = s[l]).getAttribute("href") ===
                                  (null == r.href || "" === r.href
                                    ? null
                                    : r.href) &&
                                i.getAttribute("rel") ===
                                  (null == r.rel ? null : r.rel) &&
                                i.getAttribute("title") ===
                                  (null == r.title ? null : r.title) &&
                                i.getAttribute("crossorigin") ===
                                  (null == r.crossOrigin ? null : r.crossOrigin)
                              ) {
                                s.splice(l, 1);
                                break t;
                              }
                          ec((i = o.createElement(n)), n, r),
                            o.head.appendChild(i);
                          break;
                        case "meta":
                          if (
                            (s = Bc("meta", "content", o).get(
                              n + (r.content || ""),
                            ))
                          )
                            for (l = 0; l < s.length; l++)
                              if (
                                (i = s[l]).getAttribute("content") ===
                                  (null == r.content ? null : "" + r.content) &&
                                i.getAttribute("name") ===
                                  (null == r.name ? null : r.name) &&
                                i.getAttribute("property") ===
                                  (null == r.property ? null : r.property) &&
                                i.getAttribute("http-equiv") ===
                                  (null == r.httpEquiv ? null : r.httpEquiv) &&
                                i.getAttribute("charset") ===
                                  (null == r.charSet ? null : r.charSet)
                              ) {
                                s.splice(l, 1);
                                break t;
                              }
                          ec((i = o.createElement(n)), n, r),
                            o.head.appendChild(i);
                          break;
                        default:
                          throw Error(a(468, n));
                      }
                      (i[Ie] = e), Ge(i), (n = i);
                    }
                    e.stateNode = n;
                  } else Fc(o, e.type, e.stateNode);
                else e.stateNode = kc(o, n, e.memoizedProps);
              else
                i !== n
                  ? (null === i
                      ? null !== r.stateNode &&
                        (r = r.stateNode).parentNode.removeChild(r)
                      : i.count--,
                    null === n
                      ? Fc(o, e.type, e.stateNode)
                      : kc(o, n, e.memoizedProps))
                  : null === n &&
                    null !== e.stateNode &&
                    fl(e, e.memoizedProps, r.memoizedProps);
            }
            break;
          case 27:
            Il(t, e),
              Ml(e),
              512 & n && (vl || null === r || cl(r, r.return)),
              null !== r && 4 & n && fl(e, e.memoizedProps, r.memoizedProps);
            break;
          case 5:
            if (
              (Il(t, e),
              Ml(e),
              512 & n && (vl || null === r || cl(r, r.return)),
              32 & e.flags)
            ) {
              o = e.stateNode;
              try {
                Et(o, "");
              } catch (t) {
                gg(e, e.return, t);
              }
            }
            4 & n &&
              null != e.stateNode &&
              fl(e, (o = e.memoizedProps), null !== r ? r.memoizedProps : o),
              1024 & n && (Sl = !0);
            break;
          case 6:
            if ((Il(t, e), Ml(e), 4 & n)) {
              if (null === e.stateNode) throw Error(a(162));
              (n = e.memoizedProps), (r = e.stateNode);
              try {
                r.nodeValue = n;
              } catch (t) {
                gg(e, e.return, t);
              }
            }
            break;
          case 3:
            if (
              ((Dc = null),
              (o = xl),
              (xl = Ac(t.containerInfo)),
              Il(t, e),
              (xl = o),
              Ml(e),
              4 & n && null !== r && r.memoizedState.isDehydrated)
            )
              try {
                Op(t.containerInfo);
              } catch (t) {
                gg(e, e.return, t);
              }
            Sl && ((Sl = !1), Ll(e));
            break;
          case 4:
            (n = xl),
              (xl = Ac(e.stateNode.containerInfo)),
              Il(t, e),
              Ml(e),
              (xl = n);
            break;
          case 12:
          default:
            Il(t, e), Ml(e);
            break;
          case 13:
            Il(t, e),
              Ml(e),
              8192 & e.child.flags &&
                (null !== e.memoizedState) !=
                  (null !== r && null !== r.memoizedState) &&
                (Su = te()),
              4 & n &&
                null !== (n = e.updateQueue) &&
                ((e.updateQueue = null), Pl(e, n));
            break;
          case 22:
            o = null !== e.memoizedState;
            var u = null !== r && null !== r.memoizedState,
              g = _l,
              c = vl;
            if (
              ((_l = g || o),
              (vl = c || u),
              Il(t, e),
              (vl = c),
              (_l = g),
              Ml(e),
              8192 & n)
            )
              e: for (
                t = e.stateNode,
                  t._visibility = o ? -2 & t._visibility : 1 | t._visibility,
                  o && (null === r || u || _l || vl || Dl(e)),
                  r = null,
                  t = e;
                ;
              ) {
                if (5 === t.tag || 26 === t.tag) {
                  if (null === r) {
                    u = r = t;
                    try {
                      if (((i = u.stateNode), o))
                        "function" == typeof (s = i.style).setProperty
                          ? s.setProperty("display", "none", "important")
                          : (s.display = "none");
                      else {
                        l = u.stateNode;
                        var p = u.memoizedProps.style,
                          f =
                            null != p && p.hasOwnProperty("display")
                              ? p.display
                              : null;
                        l.style.display =
                          null == f || "boolean" == typeof f
                            ? ""
                            : ("" + f).trim();
                      }
                    } catch (e) {
                      gg(u, u.return, e);
                    }
                  }
                } else if (6 === t.tag) {
                  if (null === r) {
                    u = t;
                    try {
                      u.stateNode.nodeValue = o ? "" : u.memoizedProps;
                    } catch (e) {
                      gg(u, u.return, e);
                    }
                  }
                } else if (
                  ((22 !== t.tag && 23 !== t.tag) ||
                    null === t.memoizedState ||
                    t === e) &&
                  null !== t.child
                ) {
                  (t.child.return = t), (t = t.child);
                  continue;
                }
                if (t === e) break e;
                for (; null === t.sibling; ) {
                  if (null === t.return || t.return === e) break e;
                  r === t && (r = null), (t = t.return);
                }
                r === t && (r = null),
                  (t.sibling.return = t.return),
                  (t = t.sibling);
              }
            4 & n &&
              null !== (n = e.updateQueue) && null !== (r = n.retryQueue) &&
              ((n.retryQueue = null), Pl(e, r));
            break;
          case 19:
            Il(t, e),
              Ml(e),
              4 & n &&
                null !== (n = e.updateQueue) &&
                ((e.updateQueue = null), Pl(e, n));
          case 30:
          case 21:
        }
      }
      function Ml(e) {
        var t = e.flags;
        if (2 & t) {
          try {
            for (var r, n = e.return; null !== n; ) {
              if (dl(n)) {
                r = n;
                break;
              }
              n = n.return;
            }
            if (null == r) throw Error(a(160));
            switch (r.tag) {
              case 27:
                var o = r.stateNode;
                bl(e, hl(e), o);
                break;
              case 5:
                var i = r.stateNode;
                32 & r.flags && (Et(i, ""), (r.flags &= -33)), bl(e, hl(e), i);
                break;
              case 3:
              case 4:
                var s = r.stateNode.containerInfo;
                yl(e, hl(e), s);
                break;
              default:
                throw Error(a(161));
            }
          } catch (t) {
            gg(e, e.return, t);
          }
          e.flags &= -3;
        }
        4096 & t && (e.flags &= -4097);
      }
      function Ll(e) {
        if (1024 & e.subtreeFlags)
          for (e = e.child; null !== e; ) {
            var t = e;
            Ll(t),
              5 === t.tag && 1024 & t.flags && t.stateNode.reset(),
              (e = e.sibling);
          }
      }
      function Ul(e, t) {
        if (8772 & t.subtreeFlags)
          for (t = t.child; null !== t; )
            Al(e, t.alternate, t), (t = t.sibling);
      }
      function Dl(e) {
        for (e = e.child; null !== e; ) {
          var t = e;
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              sl(4, t, t.return), Dl(t);
              break;
            case 1:
              cl(t, t.return);
              var r = t.stateNode;
              "function" == typeof r.componentWillUnmount && ul(t, t.return, r),
                Dl(t);
              break;
            case 27:
              Sc(t.stateNode);
            case 26:
            case 5:
              cl(t, t.return), Dl(t);
              break;
            case 22:
              null === t.memoizedState && Dl(t);
              break;
            default:
              Dl(t);
          }
          e = e.sibling;
        }
      }
      function Bl(e, t, r) {
        for (r = r && 0 != (8772 & t.subtreeFlags), t = t.child; null !== t; ) {
          var n = t.alternate,
            o = e,
            i = t,
            a = i.flags;
          switch (i.tag) {
            case 0:
            case 11:
            case 15:
              Bl(o, i, r), al(4, i);
              break;
            case 1:
              if (
                (Bl(o, i, r),
                "function" == typeof (o = (n = i).stateNode).componentDidMount)
              )
                try {
                  o.componentDidMount();
                } catch (e) {
                  gg(n, n.return, e);
                }
              if (null !== (o = (n = i).updateQueue)) {
                var s = n.stateNode;
                try {
                  var l = o.shared.hiddenCallbacks;
                  if (null !== l)
                    for (
                      o.shared.hiddenCallbacks = null, o = 0;
                      o < l.length;
                      o++
                    )
                      pi(l[o], s);
                } catch (e) {
                  gg(n, n.return, e);
                }
              }
              r && 64 & a && ll(i), gl(i, i.return);
              break;
            case 27:
              ml(i);
            case 26:
            case 5:
              Bl(o, i, r), r && null === n && 4 & a && pl(i), gl(i, i.return);
              break;
            case 12:
              Bl(o, i, r);
              break;
            case 13:
              Bl(o, i, r), r && 4 & a && Nl(o, i);
              break;
            case 22:
              null === i.memoizedState && Bl(o, i, r), gl(i, i.return);
              break;
            case 30:
              break;
            default:
              Bl(o, i, r);
          }
          t = t.sibling;
        }
      }
      function Fl(e, t) {
        var r = null;
        null !== e &&
          null !== e.memoizedState &&
          null !== e.memoizedState.cachePool &&
          (r = e.memoizedState.cachePool.pool),
          (e = null),
          null !== t.memoizedState &&
            null !== t.memoizedState.cachePool &&
            (e = t.memoizedState.cachePool.pool),
          e !== r && (null != e && e.refCount++, null != r && Mo(r));
      }
      function Wl(e, t) {
        (e = null),
          null !== t.alternate && (e = t.alternate.memoizedState.cache),
          (t = t.memoizedState.cache) !== e &&
            (t.refCount++, null != e && Mo(e));
      }
      function Hl(e, t, r, n) {
        if (10256 & t.subtreeFlags)
          for (t = t.child; null !== t; ) Vl(e, t, r, n), (t = t.sibling);
      }
      function Vl(e, t, r, n) {
        var o = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Hl(e, t, r, n), 2048 & o && al(9, t);
            break;
          case 1:
          case 13:
          default:
            Hl(e, t, r, n);
            break;
          case 3:
            Hl(e, t, r, n),
              2048 & o &&
                ((e = null),
                null !== t.alternate && (e = t.alternate.memoizedState.cache),
                (t = t.memoizedState.cache) !== e &&
                  (t.refCount++, null != e && Mo(e)));
            break;
          case 12:
            if (2048 & o) {
              Hl(e, t, r, n), (e = t.stateNode);
              try {
                var i = t.memoizedProps,
                  a = i.id,
                  s = i.onPostCommit;
                "function" == typeof s &&
                  s(
                    a,
                    null === t.alternate ? "mount" : "update",
                    e.passiveEffectDuration,
                    -0,
                  );
              } catch (e) {
                gg(t, t.return, e);
              }
            } else Hl(e, t, r, n);
            break;
          case 23:
            break;
          case 22:
            (i = t.stateNode),
              (a = t.alternate),
              null !== t.memoizedState
                ? 2 & i._visibility
                  ? Hl(e, t, r, n)
                  : Gl(e, t)
                : 2 & i._visibility
                  ? Hl(e, t, r, n)
                  : ((i._visibility |= 2),
                    zl(e, t, r, n, 0 != (10256 & t.subtreeFlags))),
              2048 & o && Fl(a, t);
            break;
          case 24:
            Hl(e, t, r, n), 2048 & o && Wl(t.alternate, t);
        }
      }
      function zl(e, t, r, n, o) {
        for (
          o = o && 0 != (10256 & t.subtreeFlags), t = t.child;
          null !== t;
        ) {
          var i = e,
            a = t,
            s = r,
            l = n,
            u = a.flags;
          switch (a.tag) {
            case 0:
            case 11:
            case 15:
              zl(i, a, s, l, o), al(8, a);
              break;
            case 23:
              break;
            case 22:
              var g = a.stateNode;
              null !== a.memoizedState
                ? 2 & g._visibility
                  ? zl(i, a, s, l, o)
                  : Gl(i, a)
                : ((g._visibility |= 2), zl(i, a, s, l, o)),
                o && 2048 & u && Fl(a.alternate, a);
              break;
            case 24:
              zl(i, a, s, l, o), o && 2048 & u && Wl(a.alternate, a);
              break;
            default:
              zl(i, a, s, l, o);
          }
          t = t.sibling;
        }
      }
      function Gl(e, t) {
        if (10256 & t.subtreeFlags)
          for (t = t.child; null !== t; ) {
            var r = e,
              n = t,
              o = n.flags;
            switch (n.tag) {
              case 22:
                Gl(r, n), 2048 & o && Fl(n.alternate, n);
                break;
              case 24:
                Gl(r, n), 2048 & o && Wl(n.alternate, n);
                break;
              default:
                Gl(r, n);
            }
            t = t.sibling;
          }
      }
      var Yl = 8192;
      function Kl(e) {
        if (e.subtreeFlags & Yl)
          for (e = e.child; null !== e; ) $l(e), (e = e.sibling);
      }
      function $l(e) {
        switch (e.tag) {
          case 26:
            Kl(e),
              e.flags & Yl &&
                null !== e.memoizedState &&
                (function (e, t, r) {
                  if (null === Hc) throw Error(a(475));
                  var n = Hc;
                  if (
                    "stylesheet" === t.type &&
                    ("string" != typeof r.media ||
                      !1 !== matchMedia(r.media).matches) &&
                    0 == (4 & t.state.loading)
                  ) {
                    if (null === t.instance) {
                      var o = Cc(r.href),
                        i = e.querySelector(Nc(o));
                      if (i)
                        return (
                          null !== (e = i._p) &&
                            "object" == typeof e &&
                            "function" == typeof e.then &&
                            (n.count++, (n = zc.bind(n)), e.then(n, n)),
                          (t.state.loading |= 4),
                          (t.instance = i),
                          void Ge(i)
                        );
                      (i = e.ownerDocument || e),
                        (r = Pc(r)),
                        (o = Ec.get(o)) && Lc(r, o),
                        Ge((i = i.createElement("link")));
                      var s = i;
                      (s._p = new Promise(function (e, t) {
                        (s.onload = e), (s.onerror = t);
                      })),
                        ec(i, "link", r),
                        (t.instance = i);
                    }
                    null === n.stylesheets && (n.stylesheets = new Map()),
                      n.stylesheets.set(t, e),
                      (e = t.state.preload) &&
                        0 == (3 & t.state.loading) &&
                        (n.count++,
                        (t = zc.bind(n)),
                        e.addEventListener("load", t),
                        e.addEventListener("error", t));
                  }
                })(xl, e.memoizedState, e.memoizedProps);
            break;
          case 5:
          default:
            Kl(e);
            break;
          case 3:
          case 4:
            var t = xl;
            (xl = Ac(e.stateNode.containerInfo)), Kl(e), (xl = t);
            break;
          case 22:
            null === e.memoizedState &&
              (null !== (t = e.alternate) && null !== t.memoizedState
                ? ((t = Yl), (Yl = 16777216), Kl(e), (Yl = t))
                : Kl(e));
        }
      }
      function ql(e) {
        var t = e.alternate;
        if (null !== t && null !== (e = t.child)) {
          t.child = null;
          do {
            (t = e.sibling), (e.sibling = null), (e = t);
          } while (null !== e);
        }
      }
      function Xl(e) {
        var t = e.deletions;
        if (0 != (16 & e.flags)) {
          if (null !== t)
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (Tl = n), Jl(n, e);
            }
          ql(e);
        }
        if (10256 & e.subtreeFlags)
          for (e = e.child; null !== e; ) Ql(e), (e = e.sibling);
      }
      function Ql(e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            Xl(e), 2048 & e.flags && sl(9, e, e.return);
            break;
          case 3:
          case 12:
          default:
            Xl(e);
            break;
          case 22:
            var t = e.stateNode;
            null !== e.memoizedState &&
            2 & t._visibility &&
            (null === e.return || 13 !== e.return.tag)
              ? ((t._visibility &= -3), Zl(e))
              : Xl(e);
        }
      }
      function Zl(e) {
        var t = e.deletions;
        if (0 != (16 & e.flags)) {
          if (null !== t)
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (Tl = n), Jl(n, e);
            }
          ql(e);
        }
        for (e = e.child; null !== e; ) {
          switch ((t = e).tag) {
            case 0:
            case 11:
            case 15:
              sl(8, t, t.return), Zl(t);
              break;
            case 22:
              2 & (r = t.stateNode)._visibility &&
                ((r._visibility &= -3), Zl(t));
              break;
            default:
              Zl(t);
          }
          e = e.sibling;
        }
      }
      function Jl(e, t) {
        for (; null !== Tl; ) {
          var r = Tl;
          switch (r.tag) {
            case 0:
            case 11:
            case 15:
              sl(8, r, t);
              break;
            case 23:
            case 22:
              if (
                null !== r.memoizedState &&
                null !== r.memoizedState.cachePool
              ) {
                var n = r.memoizedState.cachePool.pool;
                null != n && n.refCount++;
              }
              break;
            case 24:
              Mo(r.memoizedState.cache);
          }
          if (null !== (n = r.child)) (n.return = r), (Tl = n);
          else
            e: for (r = e; null !== Tl; ) {
              var o = (n = Tl).sibling,
                i = n.return;
              if ((wl(n), n === r)) {
                Tl = null;
                break e;
              }
              if (null !== o) {
                (o.return = i), (Tl = o);
                break e;
              }
              Tl = i;
            }
        }
      }
      var eu = {
          getCacheForType: function (e) {
            var t = Oo(xo),
              r = t.data.get(e);
            return void 0 === r && ((r = e()), t.data.set(e, r)), r;
          },
        },
        tu = "function" == typeof WeakMap ? WeakMap : Map,
        ru = 0,
        nu = null,
        ou = null,
        iu = 0,
        au = 0,
        su = null,
        lu = !1,
        uu = !1,
        gu = !1,
        cu = 0,
        pu = 0,
        fu = 0,
        du = 0,
        hu = 0,
        yu = 0,
        bu = 0,
        mu = null,
        _u = null,
        vu = !1,
        Su = 0,
        Eu = 1 / 0,
        Tu = null,
        Au = null,
        wu = 0,
        ju = null,
        Ou = null,
        Ru = 0,
        Cu = 0,
        Nu = null,
        Pu = null,
        Iu = 0,
        xu = null;
      function ku() {
        if (0 != (2 & ru) && 0 !== iu) return iu & -iu;
        if (null !== k.T) {
          return 0 !== Do ? Do : Cg();
        }
        return Ne();
      }
      function Mu() {
        0 === yu && (yu = 0 == (536870912 & iu) || io ? Ee() : 536870912);
        var e = os.current;
        return null !== e && (e.flags |= 32), yu;
      }
      function Lu(e, t, r) {
        ((e !== nu || (2 !== au && 9 !== au)) &&
          null === e.cancelPendingCommit) ||
          (Vu(e, 0), Fu(e, iu, yu, !1)),
          we(e, r),
          (0 != (2 & ru) && e === nu) ||
            (e === nu &&
              (0 == (2 & ru) && (du |= r), 4 === pu && Fu(e, iu, yu, !1)),
            Eg(e));
      }
      function Uu(e, t, r) {
        if (0 != (6 & ru)) throw Error(a(327));
        for (
          var n =
              (!r && 0 == (124 & t) && 0 == (t & e.expiredLanes)) || ve(e, t),
            o = n
              ? (function (e, t) {
                  var r = ru;
                  ru |= 2;
                  var n = Gu(),
                    o = Yu();
                  nu !== e || iu !== t
                    ? ((Tu = null), (Eu = te() + 500), Vu(e, t))
                    : (uu = ve(e, t));
                  e: for (;;)
                    try {
                      if (0 !== au && null !== ou) {
                        t = ou;
                        var i = su;
                        t: switch (au) {
                          case 1:
                            (au = 0), (su = null), Ju(e, t, i, 1);
                            break;
                          case 2:
                          case 9:
                            if (Xo(i)) {
                              (au = 0), (su = null), Zu(t);
                              break;
                            }
                            (t = function () {
                              (2 !== au && 9 !== au) || nu !== e || (au = 7),
                                Eg(e);
                            }),
                              i.then(t, t);
                            break e;
                          case 3:
                            au = 7;
                            break e;
                          case 4:
                            au = 5;
                            break e;
                          case 7:
                            Xo(i)
                              ? ((au = 0), (su = null), Zu(t))
                              : ((au = 0), (su = null), Ju(e, t, i, 7));
                            break;
                          case 5:
                            var s = null;
                            switch (ou.tag) {
                              case 26:
                                s = ou.memoizedState;
                              case 5:
                              case 27:
                                var l = ou;
                                if (!s || Wc(s)) {
                                  (au = 0), (su = null);
                                  var u = l.sibling;
                                  if (null !== u) ou = u;
                                  else {
                                    var g = l.return;
                                    null !== g
                                      ? ((ou = g), eg(g))
                                      : (ou = null);
                                  }
                                  break t;
                                }
                            }
                            (au = 0), (su = null), Ju(e, t, i, 5);
                            break;
                          case 6:
                            (au = 0), (su = null), Ju(e, t, i, 6);
                            break;
                          case 8:
                            Hu(), (pu = 6);
                            break e;
                          default:
                            throw Error(a(462));
                        }
                      }
                      Xu();
                      break;
                    } catch (t) {
                      zu(e, t);
                    }
                  return (
                    (_o = mo = null),
                    (k.H = n),
                    (k.A = o),
                    (ru = r),
                    null !== ou ? 0 : ((nu = null), (iu = 0), Rn(), pu)
                  );
                })(e, t)
              : $u(e, t, !0),
            i = n;
          ;
        ) {
          if (0 === o) {
            uu && !n && Fu(e, t, 0, !1);
            break;
          }
          if (((r = e.current.alternate), !i || Bu(r))) {
            if (2 === o) {
              if (((i = t), e.errorRecoveryDisabledLanes & i)) var s = 0;
              else
                s =
                  0 !== (s = -536870913 & e.pendingLanes)
                    ? s
                    : 536870912 & s
                      ? 536870912
                      : 0;
              if (0 !== s) {
                t = s;
                e: {
                  var l = e;
                  o = mu;
                  var u = l.current.memoizedState.isDehydrated;
                  if (
                    (u && (Vu(l, s).flags |= 256), 2 !== (s = $u(l, s, !1)))
                  ) {
                    if (gu && !u) {
                      (l.errorRecoveryDisabledLanes |= i), (du |= i), (o = 4);
                      break e;
                    }
                    (i = _u),
                      (_u = o),
                      null !== i &&
                        (null === _u ? (_u = i) : _u.push.apply(_u, i));
                  }
                  o = s;
                }
                if (((i = !1), 2 !== o)) continue;
              }
            }
            if (1 === o) {
              Vu(e, 0), Fu(e, t, 0, !0);
              break;
            }
            e: {
              switch (((n = e), (i = o))) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 4:
                  if ((4194048 & t) !== t) break;
                case 6:
                  Fu(n, t, yu, !lu);
                  break e;
                case 2:
                  _u = null;
                  break;
                case 3:
                case 5:
                  break;
                default:
                  throw Error(a(329));
              }
              if ((62914560 & t) === t && 10 < (o = Su + 300 - te())) {
                if ((Fu(n, t, yu, !lu), 0 !== _e(n, 0, !0))) break e;
                n.timeoutHandle = lc(
                  Du.bind(
                    null,
                    n,
                    r,
                    _u,
                    Tu,
                    vu,
                    t,
                    yu,
                    du,
                    bu,
                    lu,
                    i,
                    2,
                    -0,
                    0,
                  ),
                  o,
                );
              } else Du(n, r, _u, Tu, vu, t, yu, du, bu, lu, i, 0, -0, 0);
            }
            break;
          }
          (o = $u(e, t, !1)), (i = !1);
        }
        Eg(e);
      }
      function Du(e, t, r, n, o, i, s, l, u, g, c, p, f, d) {
        if (
          ((e.timeoutHandle = -1),
          (8192 & (p = t.subtreeFlags) || 16785408 == (16785408 & p)) &&
            ((Hc = { stylesheets: null, count: 0, unsuspend: Vc }),
            $l(t),
            null !==
              (p = (function () {
                if (null === Hc) throw Error(a(475));
                var e = Hc;
                return (
                  e.stylesheets && 0 === e.count && Yc(e, e.stylesheets),
                  0 < e.count
                    ? function (t) {
                        var r = setTimeout(function () {
                          if (
                            (e.stylesheets && Yc(e, e.stylesheets), e.unsuspend)
                          ) {
                            var t = e.unsuspend;
                            (e.unsuspend = null), t();
                          }
                        }, 6e4);
                        return (
                          (e.unsuspend = t),
                          function () {
                            (e.unsuspend = null), clearTimeout(r);
                          }
                        );
                      }
                    : null
                );
              })())))
        )
          return (
            (e.cancelPendingCommit = p(
              rg.bind(null, e, t, i, r, n, o, s, l, u, c, 1, f, d),
            )),
            void Fu(e, i, s, !g)
          );
        rg(e, t, i, r, n, o, s, l, u);
      }
      function Bu(e) {
        for (var t = e; ; ) {
          var r = t.tag;
          if (
            (0 === r || 11 === r || 15 === r) &&
            16384 & t.flags &&
            null !== (r = t.updateQueue) &&
            null !== (r = r.stores)
          )
            for (var n = 0; n < r.length; n++) {
              var o = r[n],
                i = o.getSnapshot;
              o = o.value;
              try {
                if (!$r(i(), o)) return !1;
              } catch (e) {
                return !1;
              }
            }
          if (((r = t.child), 16384 & t.subtreeFlags && null !== r))
            (r.return = t), (t = r);
          else {
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return !0;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return !0;
      }
      function Fu(e, t, r, n) {
        (t &= ~hu),
          (t &= ~du),
          (e.suspendedLanes |= t),
          (e.pingedLanes &= ~t),
          n && (e.warmLanes |= t),
          (n = e.expirationTimes);
        for (var o = t; 0 < o; ) {
          var i = 31 - fe(o),
            a = 1 << i;
          (n[i] = -1), (o &= ~a);
        }
        0 !== r && je(e, r, t);
      }
      function Wu() {
        return 0 != (6 & ru) || (Tg(0, !1), !1);
      }
      function Hu() {
        if (null !== ou) {
          if (0 === au) var e = ou.return;
          else (_o = mo = null), Di((e = ou)), (qa = null), (Xa = 0), (e = ou);
          for (; null !== e; ) il(e.alternate, e), (e = e.return);
          ou = null;
        }
      }
      function Vu(e, t) {
        var r = e.timeoutHandle;
        -1 !== r && ((e.timeoutHandle = -1), uc(r)),
          null !== (r = e.cancelPendingCommit) &&
            ((e.cancelPendingCommit = null), r()),
          Hu(),
          (nu = e),
          (ou = r = Dn(e.current, null)),
          (iu = t),
          (au = 0),
          (su = null),
          (lu = !1),
          (uu = ve(e, t)),
          (gu = !1),
          (bu = yu = hu = du = fu = pu = 0),
          (_u = mu = null),
          (vu = !1),
          0 != (8 & t) && (t |= 32 & t);
        var n = e.entangledLanes;
        if (0 !== n)
          for (e = e.entanglements, n &= t; 0 < n; ) {
            var o = 31 - fe(n),
              i = 1 << o;
            (t |= e[o]), (n &= ~i);
          }
        return (cu = t), Rn(), r;
      }
      function zu(e, t) {
        (vi = null),
          (k.H = Ga),
          t === Yo || t === $o
            ? ((t = ei()), (au = 3))
            : t === Ko
              ? ((t = ei()), (au = 4))
              : (au =
                  t === js
                    ? 8
                    : null !== t &&
                        "object" == typeof t &&
                        "function" == typeof t.then
                      ? 6
                      : 1),
          (su = t),
          null === ou && ((pu = 1), Ss(e, An(t, e.current)));
      }
      function Gu() {
        var e = k.H;
        return (k.H = Ga), null === e ? Ga : e;
      }
      function Yu() {
        var e = k.A;
        return (k.A = eu), e;
      }
      function Ku() {
        (pu = 4),
          lu || ((4194048 & iu) !== iu && null !== os.current) || (uu = !0),
          (0 == (134217727 & fu) && 0 == (134217727 & du)) ||
            null === nu ||
            Fu(nu, iu, yu, !1);
      }
      function $u(e, t, r) {
        var n = ru;
        ru |= 2;
        var o = Gu(),
          i = Yu();
        (nu === e && iu === t) || ((Tu = null), Vu(e, t)), (t = !1);
        var a = pu;
        e: for (;;)
          try {
            if (0 !== au && null !== ou) {
              var s = ou,
                l = su;
              switch (au) {
                case 8:
                  Hu(), (a = 6);
                  break e;
                case 3:
                case 2:
                case 9:
                case 6:
                  null === os.current && (t = !0);
                  var u = au;
                  if (((au = 0), (su = null), Ju(e, s, l, u), r && uu)) {
                    a = 0;
                    break e;
                  }
                  break;
                default:
                  (u = au), (au = 0), (su = null), Ju(e, s, l, u);
              }
            }
            qu(), (a = pu);
            break;
          } catch (t) {
            zu(e, t);
          }
        return (
          t && e.shellSuspendCounter++,
          (_o = mo = null),
          (ru = n),
          (k.H = o),
          (k.A = i),
          null === ou && ((nu = null), (iu = 0), Rn()),
          a
        );
      }
      function qu() {
        for (; null !== ou; ) Qu(ou);
      }
      function Xu() {
        for (; null !== ou && !J(); ) Qu(ou);
      }
      function Qu(e) {
        var t = Qs(e.alternate, e, cu);
        (e.memoizedProps = e.pendingProps), null === t ? eg(e) : (ou = t);
      }
      function Zu(e) {
        var t = e,
          r = t.alternate;
        switch (t.tag) {
          case 15:
          case 0:
            t = Ls(r, t, t.pendingProps, t.type, void 0, iu);
            break;
          case 11:
            t = Ls(r, t, t.pendingProps, t.type.render, t.ref, iu);
            break;
          case 5:
            Di(t);
          default:
            il(r, t), (t = Qs(r, (t = ou = Bn(t, cu)), cu));
        }
        (e.memoizedProps = e.pendingProps), null === t ? eg(e) : (ou = t);
      }
      function Ju(e, t, r, n) {
        (_o = mo = null), Di(t), (qa = null), (Xa = 0);
        var o = t.return;
        try {
          if (
            (function (e, t, r, n, o) {
              if (
                ((r.flags |= 32768),
                null !== n &&
                  "object" == typeof n &&
                  "function" == typeof n.then)
              ) {
                if (
                  (null !== (t = r.alternate) && Ao(t, r, o, !0),
                  null !== (r = os.current))
                ) {
                  switch (r.tag) {
                    case 13:
                      return (
                        null === is
                          ? Ku()
                          : null === r.alternate && 0 === pu && (pu = 3),
                        (r.flags &= -257),
                        (r.flags |= 65536),
                        (r.lanes = o),
                        n === qo
                          ? (r.flags |= 16384)
                          : (null === (t = r.updateQueue)
                              ? (r.updateQueue = new Set([n]))
                              : t.add(n),
                            cg(e, n, o)),
                        !1
                      );
                    case 22:
                      return (
                        (r.flags |= 65536),
                        n === qo
                          ? (r.flags |= 16384)
                          : (null === (t = r.updateQueue)
                              ? ((t = {
                                  transitions: null,
                                  markerInstances: null,
                                  retryQueue: new Set([n]),
                                }),
                                (r.updateQueue = t))
                              : null === (r = t.retryQueue)
                                ? (t.retryQueue = new Set([n]))
                                : r.add(n),
                            cg(e, n, o)),
                        !1
                      );
                  }
                  throw Error(a(435, r.tag));
                }
                return cg(e, n, o), Ku(), !1;
              }
              if (io)
                return (
                  null !== (t = os.current)
                    ? (0 == (65536 & t.flags) && (t.flags |= 256),
                      (t.flags |= 65536),
                      (t.lanes = o),
                      n !== lo && yo(An((e = Error(a(422), { cause: n })), r)))
                    : (n !== lo && yo(An((t = Error(a(423), { cause: n })), r)),
                      ((e = e.current.alternate).flags |= 65536),
                      (o &= -o),
                      (e.lanes |= o),
                      (n = An(n, r)),
                      li(e, (o = Ts(e.stateNode, n, o))),
                      4 !== pu && (pu = 2)),
                  !1
                );
              var i = Error(a(520), { cause: n });
              if (
                ((i = An(i, r)),
                null === mu ? (mu = [i]) : mu.push(i),
                4 !== pu && (pu = 2),
                null === t)
              )
                return !0;
              (n = An(n, r)), (r = t);
              do {
                switch (r.tag) {
                  case 3:
                    return (
                      (r.flags |= 65536),
                      (e = o & -o),
                      (r.lanes |= e),
                      li(r, (e = Ts(r.stateNode, n, e))),
                      !1
                    );
                  case 1:
                    if (
                      ((t = r.type),
                      (i = r.stateNode),
                      0 == (128 & r.flags) &&
                        ("function" == typeof t.getDerivedStateFromError ||
                          (null !== i &&
                            "function" == typeof i.componentDidCatch &&
                            (null === Au || !Au.has(i)))))
                    )
                      return (
                        (r.flags |= 65536),
                        (o &= -o),
                        (r.lanes |= o),
                        ws((o = As(o)), e, r, n),
                        li(r, o),
                        !1
                      );
                }
                r = r.return;
              } while (null !== r);
              return !1;
            })(e, o, t, r, iu)
          )
            return (pu = 1), Ss(e, An(r, e.current)), void (ou = null);
        } catch (t) {
          if (null !== o) throw ((ou = o), t);
          return (pu = 1), Ss(e, An(r, e.current)), void (ou = null);
        }
        32768 & t.flags
          ? (io || 1 === n
              ? (e = !0)
              : uu || 0 != (536870912 & iu)
                ? (e = !1)
                : ((lu = e = !0),
                  (2 === n || 9 === n || 3 === n || 6 === n) &&
                    null !== (n = os.current) && 13 === n.tag &&
                    (n.flags |= 16384)),
            tg(t, e))
          : eg(t);
      }
      function eg(e) {
        var t = e;
        do {
          if (0 != (32768 & t.flags)) return void tg(t, lu);
          e = t.return;
          var r = nl(t.alternate, t, cu);
          if (null !== r) return void (ou = r);
          if (null !== (t = t.sibling)) return void (ou = t);
          ou = t = e;
        } while (null !== t);
        0 === pu && (pu = 5);
      }
      function tg(e, t) {
        do {
          var r = ol(e.alternate, e);
          if (null !== r) return (r.flags &= 32767), void (ou = r);
          if (
            (null !== (r = e.return) &&
              ((r.flags |= 32768), (r.subtreeFlags = 0), (r.deletions = null)),
            !t && null !== (e = e.sibling))
          )
            return void (ou = e);
          ou = e = r;
        } while (null !== e);
        (pu = 6), (ou = null);
      }
      function rg(e, t, r, n, o, i, s, l, u) {
        e.cancelPendingCommit = null;
        do {
          sg();
        } while (0 !== wu);
        if (0 != (6 & ru)) throw Error(a(327));
        if (null !== t) {
          if (t === e.current) throw Error(a(177));
          if (
            ((i = t.lanes | t.childLanes),
            (function (e, t, r, n, o, i) {
              var a = e.pendingLanes;
              (e.pendingLanes = r),
                (e.suspendedLanes = 0),
                (e.pingedLanes = 0),
                (e.warmLanes = 0),
                (e.expiredLanes &= r),
                (e.entangledLanes &= r),
                (e.errorRecoveryDisabledLanes &= r),
                (e.shellSuspendCounter = 0);
              var s = e.entanglements,
                l = e.expirationTimes,
                u = e.hiddenUpdates;
              for (r = a & ~r; 0 < r; ) {
                var g = 31 - fe(r),
                  c = 1 << g;
                (s[g] = 0), (l[g] = -1);
                var p = u[g];
                if (null !== p)
                  for (u[g] = null, g = 0; g < p.length; g++) {
                    var f = p[g];
                    null !== f && (f.lane &= -536870913);
                  }
                r &= ~c;
              }
              0 !== n && je(e, n, 0),
                0 !== i &&
                  0 === o &&
                  0 !== e.tag &&
                  (e.suspendedLanes |= i & ~(a & ~t));
            })(e, r, (i |= On), s, l, u),
            e === nu && ((ou = nu = null), (iu = 0)),
            (Ou = t),
            (ju = e),
            (Ru = r),
            (Cu = i),
            (Nu = o),
            (Pu = n),
            0 != (10256 & t.subtreeFlags) || 0 != (10256 & t.flags)
              ? ((e.callbackNode = null),
                (e.callbackPriority = 0),
                Q(ie, function () {
                  return lg(), null;
                }))
              : ((e.callbackNode = null), (e.callbackPriority = 0)),
            (n = 0 != (13878 & t.flags)),
            0 != (13878 & t.subtreeFlags) || n)
          ) {
            (n = k.T), (k.T = null), (o = M.p), (M.p = 2), (s = ru), (ru |= 4);
            try {
              !(function (e, t) {
                if (((e = e.containerInfo), (tc = rp), en((e = Jr(e))))) {
                  if ("selectionStart" in e)
                    var r = { start: e.selectionStart, end: e.selectionEnd };
                  else
                    e: {
                      var n =
                        (r = ((r = e.ownerDocument) && r.defaultView) || window)
                          .getSelection && r.getSelection();
                      if (n && 0 !== n.rangeCount) {
                        r = n.anchorNode;
                        var o = n.anchorOffset,
                          i = n.focusNode;
                        n = n.focusOffset;
                        try {
                          r.nodeType, i.nodeType;
                        } catch (e) {
                          r = null;
                          break e;
                        }
                        var s = 0,
                          l = -1,
                          u = -1,
                          g = 0,
                          c = 0,
                          p = e,
                          f = null;
                        t: for (;;) {
                          for (
                            var d;
                            p !== r ||
                              (0 !== o && 3 !== p.nodeType) ||
                              (l = s + o),
                              p !== i ||
                                (0 !== n && 3 !== p.nodeType) ||
                                (u = s + n),
                              3 === p.nodeType && (s += p.nodeValue.length),
                              null !== (d = p.firstChild);
                          )
                            (f = p), (p = d);
                          for (;;) {
                            if (p === e) break t;
                            if (
                              (f === r && ++g === o && (l = s),
                              f === i && ++c === n && (u = s),
                              null !== (d = p.nextSibling))
                            )
                              break;
                            f = (p = f).parentNode;
                          }
                          p = d;
                        }
                        r = -1 === l || -1 === u ? null : { start: l, end: u };
                      } else r = null;
                    }
                  r = r || { start: 0, end: 0 };
                } else r = null;
                for (
                  rc = { focusedElem: e, selectionRange: r }, rp = !1, Tl = t;
                  null !== Tl;
                )
                  if (
                    ((e = (t = Tl).child),
                    0 != (1024 & t.subtreeFlags) && null !== e)
                  )
                    (e.return = t), (Tl = e);
                  else
                    for (; null !== Tl; ) {
                      switch (
                        ((i = (t = Tl).alternate), (e = t.flags), t.tag)
                      ) {
                        case 0:
                        case 11:
                        case 15:
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                          break;
                        case 1:
                          if (0 != (1024 & e) && null !== i) {
                            (e = void 0),
                              (r = t),
                              (o = i.memoizedProps),
                              (i = i.memoizedState),
                              (n = r.stateNode);
                            try {
                              var h = ys(r.type, o, (r.elementType, r.type));
                              (e = n.getSnapshotBeforeUpdate(h, i)),
                                (n.__reactInternalSnapshotBeforeUpdate = e);
                            } catch (e) {
                              gg(r, r.return, e);
                            }
                          }
                          break;
                        case 3:
                          if (0 != (1024 & e))
                            if (
                              9 ===
                              (r = (e = t.stateNode.containerInfo).nodeType)
                            )
                              hc(e);
                            else if (1 === r)
                              switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                  hc(e);
                                  break;
                                default:
                                  e.textContent = "";
                              }
                          break;
                        default:
                          if (0 != (1024 & e)) throw Error(a(163));
                      }
                      if (null !== (e = t.sibling)) {
                        (e.return = t.return), (Tl = e);
                        break;
                      }
                      Tl = t.return;
                    }
              })(e, t);
            } finally {
              (ru = s), (M.p = o), (k.T = n);
            }
          }
          (wu = 1), ng(), og(), ig();
        }
      }
      function ng() {
        if (1 === wu) {
          wu = 0;
          var e = ju,
            t = Ou,
            r = 0 != (13878 & t.flags);
          if (0 != (13878 & t.subtreeFlags) || r) {
            (r = k.T), (k.T = null);
            var n = M.p;
            M.p = 2;
            var o = ru;
            ru |= 4;
            try {
              kl(t, e);
              var i = rc,
                a = Jr(e.containerInfo),
                s = i.focusedElem,
                l = i.selectionRange;
              if (
                a !== s &&
                s &&
                s.ownerDocument &&
                Zr(s.ownerDocument.documentElement, s)
              ) {
                if (null !== l && en(s)) {
                  var u = l.start,
                    g = l.end;
                  if ((void 0 === g && (g = u), "selectionStart" in s))
                    (s.selectionStart = u),
                      (s.selectionEnd = Math.min(g, s.value.length));
                  else {
                    var c = s.ownerDocument || document,
                      p = (c && c.defaultView) || window;
                    if (p.getSelection) {
                      var f = p.getSelection(),
                        d = s.textContent.length,
                        h = Math.min(l.start, d),
                        y = void 0 === l.end ? h : Math.min(l.end, d);
                      !f.extend && h > y && ((a = y), (y = h), (h = a));
                      var b = Qr(s, h),
                        m = Qr(s, y);
                      if (
                        b &&
                        m &&
                        (1 !== f.rangeCount ||
                          f.anchorNode !== b.node ||
                          f.anchorOffset !== b.offset ||
                          f.focusNode !== m.node ||
                          f.focusOffset !== m.offset)
                      ) {
                        var _ = c.createRange();
                        _.setStart(b.node, b.offset),
                          f.removeAllRanges(),
                          h > y
                            ? (f.addRange(_), f.extend(m.node, m.offset))
                            : (_.setEnd(m.node, m.offset), f.addRange(_));
                      }
                    }
                  }
                }
                for (c = [], f = s; (f = f.parentNode); )
                  1 === f.nodeType &&
                    c.push({
                      element: f,
                      left: f.scrollLeft,
                      top: f.scrollTop,
                    });
                for (
                  "function" == typeof s.focus && s.focus(), s = 0;
                  s < c.length;
                  s++
                ) {
                  var v = c[s];
                  (v.element.scrollLeft = v.left),
                    (v.element.scrollTop = v.top);
                }
              }
              (rp = !!tc), (rc = tc = null);
            } finally {
              (ru = o), (M.p = n), (k.T = r);
            }
          }
          (e.current = t), (wu = 2);
        }
      }
      function og() {
        if (2 === wu) {
          wu = 0;
          var e = ju,
            t = Ou,
            r = 0 != (8772 & t.flags);
          if (0 != (8772 & t.subtreeFlags) || r) {
            (r = k.T), (k.T = null);
            var n = M.p;
            M.p = 2;
            var o = ru;
            ru |= 4;
            try {
              Al(e, t.alternate, t);
            } finally {
              (ru = o), (M.p = n), (k.T = r);
            }
          }
          wu = 3;
        }
      }
      function ig() {
        if (4 === wu || 3 === wu) {
          (wu = 0), ee();
          var e = ju,
            t = Ou,
            r = Ru,
            n = Pu;
          0 != (10256 & t.subtreeFlags) || 0 != (10256 & t.flags)
            ? (wu = 5)
            : ((wu = 0), (Ou = ju = null), ag(e, e.pendingLanes));
          var o = e.pendingLanes;
          if (
            (0 === o && (Au = null),
            Ce(r),
            (t = t.stateNode),
            ce && "function" == typeof ce.onCommitFiberRoot)
          )
            try {
              ce.onCommitFiberRoot(
                ge,
                t,
                void 0,
                128 == (128 & t.current.flags),
              );
            } catch (e) {}
          if (null !== n) {
            (t = k.T), (o = M.p), (M.p = 2), (k.T = null);
            try {
              for (var i = e.onRecoverableError, a = 0; a < n.length; a++) {
                var s = n[a];
                i(s.value, { componentStack: s.stack });
              }
            } finally {
              (k.T = t), (M.p = o);
            }
          }
          0 != (3 & Ru) && sg(),
            Eg(e),
            (o = e.pendingLanes),
            0 != (4194090 & r) && 0 != (42 & o)
              ? e === xu
                ? Iu++
                : ((Iu = 0), (xu = e))
              : (Iu = 0),
            Tg(0, !1);
        }
      }
      function ag(e, t) {
        0 == (e.pooledCacheLanes &= t) &&
          null != (t = e.pooledCache) &&
          ((e.pooledCache = null), Mo(t));
      }
      function sg(e) {
        return ng(), og(), ig(), lg();
      }
      function lg() {
        if (5 !== wu) return !1;
        var e = ju,
          t = Cu;
        Cu = 0;
        var r = Ce(Ru),
          n = k.T,
          o = M.p;
        try {
          (M.p = 32 > r ? 32 : r), (k.T = null), (r = Nu), (Nu = null);
          var i = ju,
            s = Ru;
          if (((wu = 0), (Ou = ju = null), (Ru = 0), 0 != (6 & ru)))
            throw Error(a(331));
          var l = ru;
          if (
            ((ru |= 4),
            Ql(i.current),
            Vl(i, i.current, s, r),
            (ru = l),
            Tg(0, !1),
            ce && "function" == typeof ce.onPostCommitFiberRoot)
          )
            try {
              ce.onPostCommitFiberRoot(ge, i);
            } catch (e) {}
          return !0;
        } finally {
          (M.p = o), (k.T = n), ag(e, t);
        }
      }
      function ug(e, t, r) {
        (t = An(r, t)),
          null !== (e = ai(e, (t = Ts(e.stateNode, t, 2)), 2)) &&
            (we(e, 2), Eg(e));
      }
      function gg(e, t, r) {
        if (3 === e.tag) ug(e, e, r);
        else
          for (; null !== t; ) {
            if (3 === t.tag) {
              ug(t, e, r);
              break;
            }
            if (1 === t.tag) {
              var n = t.stateNode;
              if (
                "function" == typeof t.type.getDerivedStateFromError ||
                ("function" == typeof n.componentDidCatch &&
                  (null === Au || !Au.has(n)))
              ) {
                (e = An(r, e)),
                  null !== (n = ai(t, (r = As(2)), 2)) &&
                    (ws(r, n, t, e), we(n, 2), Eg(n));
                break;
              }
            }
            t = t.return;
          }
      }
      function cg(e, t, r) {
        var n = e.pingCache;
        if (null === n) {
          n = e.pingCache = new tu();
          var o = new Set();
          n.set(t, o);
        } else void 0 === (o = n.get(t)) && ((o = new Set()), n.set(t, o));
        o.has(r) ||
          ((gu = !0), o.add(r), (e = pg.bind(null, e, t, r)), t.then(e, e));
      }
      function pg(e, t, r) {
        var n = e.pingCache;
        null !== n && n.delete(t),
          (e.pingedLanes |= e.suspendedLanes & r),
          (e.warmLanes &= ~r),
          nu === e &&
            (iu & r) === r &&
            (4 === pu || (3 === pu && (62914560 & iu) === iu && 300 > te() - Su)
              ? 0 == (2 & ru) && Vu(e, 0)
              : (hu |= r),
            bu === iu && (bu = 0)),
          Eg(e);
      }
      function fg(e, t) {
        0 === t && (t = Te()), null !== (e = Pn(e, t)) && (we(e, t), Eg(e));
      }
      function dg(e) {
        var t = e.memoizedState,
          r = 0;
        null !== t && (r = t.retryLane), fg(e, r);
      }
      function hg(e, t) {
        var r = 0;
        switch (e.tag) {
          case 13:
            var n = e.stateNode,
              o = e.memoizedState;
            null !== o && (r = o.retryLane);
            break;
          case 19:
            n = e.stateNode;
            break;
          case 22:
            n = e.stateNode._retryCache;
            break;
          default:
            throw Error(a(314));
        }
        null !== n && n.delete(t), fg(e, r);
      }
      var yg = null,
        bg = null,
        mg = !1,
        _g = !1,
        vg = !1,
        Sg = 0;
      function Eg(e) {
        e !== bg &&
          null === e.next &&
          (null === bg ? (yg = bg = e) : (bg = bg.next = e)),
          (_g = !0),
          mg ||
            ((mg = !0),
            cc(function () {
              0 != (6 & ru) ? Q(ne, Ag) : wg();
            }));
      }
      function Tg(e, t) {
        if (!vg && _g) {
          vg = !0;
          do {
            for (var r = !1, n = yg; null !== n; ) {
              if (!t)
                if (0 !== e) {
                  var o = n.pendingLanes;
                  if (0 === o) var i = 0;
                  else {
                    var a = n.suspendedLanes,
                      s = n.pingedLanes;
                    (i = (1 << (31 - fe(42 | e) + 1)) - 1),
                      (i =
                        201326741 & (i &= o & ~(a & ~s))
                          ? (201326741 & i) | 1
                          : i
                            ? 2 | i
                            : 0);
                  }
                  0 !== i && ((r = !0), Rg(n, i));
                } else
                  (i = iu),
                    0 ==
                      (3 &
                        (i = _e(
                          n,
                          n === nu ? i : 0,
                          null !== n.cancelPendingCommit ||
                            -1 !== n.timeoutHandle,
                        ))) ||
                      ve(n, i) ||
                      ((r = !0), Rg(n, i));
              n = n.next;
            }
          } while (r);
          vg = !1;
        }
      }
      function Ag() {
        wg();
      }
      function wg() {
        _g = mg = !1;
        var e = 0;
        0 !== Sg &&
          ((function () {
            var e = window.event;
            if (e && "popstate" === e.type) return e !== sc && ((sc = e), !0);
            return (sc = null), !1;
          })() && (e = Sg),
          (Sg = 0));
        for (var t = te(), r = null, n = yg; null !== n; ) {
          var o = n.next,
            i = jg(n, t);
          0 === i
            ? ((n.next = null),
              null === r ? (yg = o) : (r.next = o),
              null === o && (bg = r))
            : ((r = n), (0 !== e || 0 != (3 & i)) && (_g = !0)),
            (n = o);
        }
        Tg(e, !1);
      }
      function jg(e, t) {
        for (
          var r = e.suspendedLanes,
            n = e.pingedLanes,
            o = e.expirationTimes,
            i = -62914561 & e.pendingLanes;
          0 < i;
        ) {
          var a = 31 - fe(i),
            s = 1 << a,
            l = o[a];
          -1 === l
            ? (0 != (s & r) && 0 == (s & n)) || (o[a] = Se(s, t))
            : l <= t && (e.expiredLanes |= s),
            (i &= ~s);
        }
        if (
          ((r = iu),
          (r = _e(
            e,
            e === (t = nu) ? r : 0,
            null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
          )),
          (n = e.callbackNode),
          0 === r ||
            (e === t && (2 === au || 9 === au)) ||
            null !== e.cancelPendingCommit)
        )
          return (
            null !== n && null !== n && Z(n),
            (e.callbackNode = null),
            (e.callbackPriority = 0)
          );
        if (0 == (3 & r) || ve(e, r)) {
          if ((t = r & -r) === e.callbackPriority) return t;
          switch ((null !== n && Z(n), Ce(r))) {
            case 2:
            case 8:
              r = oe;
              break;
            case 32:
            default:
              r = ie;
              break;
            case 268435456:
              r = se;
          }
          return (
            (n = Og.bind(null, e)),
            (r = Q(r, n)),
            (e.callbackPriority = t),
            (e.callbackNode = r),
            t
          );
        }
        return (
          null !== n && null !== n && Z(n),
          (e.callbackPriority = 2),
          (e.callbackNode = null),
          2
        );
      }
      function Og(e, t) {
        if (0 !== wu && 5 !== wu)
          return (e.callbackNode = null), (e.callbackPriority = 0), null;
        var r = e.callbackNode;
        if (sg() && e.callbackNode !== r) return null;
        var n = iu;
        return 0 ===
          (n = _e(
            e,
            e === nu ? n : 0,
            null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
          ))
          ? null
          : (Uu(e, n, t),
            jg(e, te()),
            null != e.callbackNode && e.callbackNode === r
              ? Og.bind(null, e)
              : null);
      }
      function Rg(e, t) {
        if (sg()) return null;
        Uu(e, t, !0);
      }
      function Cg() {
        return 0 === Sg && (Sg = Ee()), Sg;
      }
      function Ng(e) {
        return null == e || "symbol" == typeof e || "boolean" == typeof e
          ? null
          : "function" == typeof e
            ? e
            : Ct("" + e);
      }
      function Pg(e, t) {
        var r = t.ownerDocument.createElement("input");
        return (
          (r.name = t.name),
          (r.value = t.value),
          e.id && r.setAttribute("form", e.id),
          t.parentNode.insertBefore(r, t),
          (e = new FormData(e)),
          r.parentNode.removeChild(r),
          e
        );
      }
      for (var Ig = 0; Ig < Sn.length; Ig++) {
        var xg = Sn[Ig];
        En(xg.toLowerCase(), "on" + (xg[0].toUpperCase() + xg.slice(1)));
      }
      En(fn, "onAnimationEnd"),
        En(dn, "onAnimationIteration"),
        En(hn, "onAnimationStart"),
        En("dblclick", "onDoubleClick"),
        En("focusin", "onFocus"),
        En("focusout", "onBlur"),
        En(yn, "onTransitionRun"),
        En(bn, "onTransitionStart"),
        En(mn, "onTransitionCancel"),
        En(_n, "onTransitionEnd"),
        qe("onMouseEnter", ["mouseout", "mouseover"]),
        qe("onMouseLeave", ["mouseout", "mouseover"]),
        qe("onPointerEnter", ["pointerout", "pointerover"]),
        qe("onPointerLeave", ["pointerout", "pointerover"]),
        $e(
          "onChange",
          "change click focusin focusout input keydown keyup selectionchange".split(
            " ",
          ),
        ),
        $e(
          "onSelect",
          "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
            " ",
          ),
        ),
        $e("onBeforeInput", [
          "compositionend",
          "keypress",
          "textInput",
          "paste",
        ]),
        $e(
          "onCompositionEnd",
          "compositionend focusout keydown keypress keyup mousedown".split(" "),
        ),
        $e(
          "onCompositionStart",
          "compositionstart focusout keydown keypress keyup mousedown".split(
            " ",
          ),
        ),
        $e(
          "onCompositionUpdate",
          "compositionupdate focusout keydown keypress keyup mousedown".split(
            " ",
          ),
        );
      var kg =
          "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " ",
          ),
        Mg = new Set(
          "beforetoggle cancel close invalid load scroll scrollend toggle"
            .split(" ")
            .concat(kg),
        );
      function Lg(e, t) {
        t = 0 != (4 & t);
        for (var r = 0; r < e.length; r++) {
          var n = e[r],
            o = n.event;
          n = n.listeners;
          e: {
            var i = void 0;
            if (t)
              for (var a = n.length - 1; 0 <= a; a--) {
                var s = n[a],
                  l = s.instance,
                  u = s.currentTarget;
                if (((s = s.listener), l !== i && o.isPropagationStopped()))
                  break e;
                (i = s), (o.currentTarget = u);
                try {
                  i(o);
                } catch (e) {
                  bs(e);
                }
                (o.currentTarget = null), (i = l);
              }
            else
              for (a = 0; a < n.length; a++) {
                if (
                  ((l = (s = n[a]).instance),
                  (u = s.currentTarget),
                  (s = s.listener),
                  l !== i && o.isPropagationStopped())
                )
                  break e;
                (i = s), (o.currentTarget = u);
                try {
                  i(o);
                } catch (e) {
                  bs(e);
                }
                (o.currentTarget = null), (i = l);
              }
          }
        }
      }
      function Ug(e, t) {
        var r = t[Me];
        void 0 === r && (r = t[Me] = new Set());
        var n = e + "__bubble";
        r.has(n) || (Wg(t, e, 2, !1), r.add(n));
      }
      function Dg(e, t, r) {
        var n = 0;
        t && (n |= 4), Wg(r, e, n, t);
      }
      var Bg = "_reactListening" + Math.random().toString(36).slice(2);
      function Fg(e) {
        if (!e[Bg]) {
          (e[Bg] = !0),
            Ye.forEach(function (t) {
              "selectionchange" !== t &&
                (Mg.has(t) || Dg(t, !1, e), Dg(t, !0, e));
            });
          var t = 9 === e.nodeType ? e : e.ownerDocument;
          null === t || t[Bg] || ((t[Bg] = !0), Dg("selectionchange", !1, t));
        }
      }
      function Wg(e, t, r, n) {
        switch (up(t)) {
          case 2:
            var o = np;
            break;
          case 8:
            o = op;
            break;
          default:
            o = ip;
        }
        (r = o.bind(null, t, r, e)),
          (o = void 0),
          !Bt ||
            ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
            (o = !0),
          n
            ? void 0 !== o
              ? e.addEventListener(t, r, { capture: !0, passive: o })
              : e.addEventListener(t, r, !0)
            : void 0 !== o
              ? e.addEventListener(t, r, { passive: o })
              : e.addEventListener(t, r, !1);
      }
      function Hg(e, t, r, n, o) {
        var i = n;
        if (0 == (1 & t) && 0 == (2 & t) && null !== n)
          e: for (;;) {
            if (null === n) return;
            var a = n.tag;
            if (3 === a || 4 === a) {
              var s = n.stateNode.containerInfo;
              if (s === o) break;
              if (4 === a)
                for (a = n.return; null !== a; ) {
                  var u = a.tag;
                  if ((3 === u || 4 === u) && a.stateNode.containerInfo === o)
                    return;
                  a = a.return;
                }
              for (; null !== s; ) {
                if (null === (a = We(s))) return;
                if (5 === (u = a.tag) || 6 === u || 26 === u || 27 === u) {
                  n = i = a;
                  continue e;
                }
                s = s.parentNode;
              }
            }
            n = n.return;
          }
        Lt(function () {
          var n = i,
            o = Pt(r),
            a = [];
          e: {
            var s = vn.get(e);
            if (void 0 !== s) {
              var u = Jt,
                g = e;
              switch (e) {
                case "keypress":
                  if (0 === Gt(r)) break e;
                case "keydown":
                case "keyup":
                  u = dr;
                  break;
                case "focusin":
                  (g = "focus"), (u = ir);
                  break;
                case "focusout":
                  (g = "blur"), (u = ir);
                  break;
                case "beforeblur":
                case "afterblur":
                  u = ir;
                  break;
                case "click":
                  if (2 === r.button) break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  u = nr;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  u = or;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  u = yr;
                  break;
                case fn:
                case dn:
                case hn:
                  u = ar;
                  break;
                case _n:
                  u = br;
                  break;
                case "scroll":
                case "scrollend":
                  u = tr;
                  break;
                case "wheel":
                  u = mr;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  u = sr;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  u = hr;
                  break;
                case "toggle":
                case "beforetoggle":
                  u = _r;
              }
              var c = 0 != (4 & t),
                p = !c && ("scroll" === e || "scrollend" === e),
                f = c ? (null !== s ? s + "Capture" : null) : s;
              c = [];
              for (var d, h = n; null !== h; ) {
                var y = h;
                if (
                  ((d = y.stateNode),
                  (5 !== (y = y.tag) && 26 !== y && 27 !== y) ||
                    null === d ||
                    null === f ||
                    (null != (y = Ut(h, f)) && c.push(Vg(h, y, d))),
                  p)
                )
                  break;
                h = h.return;
              }
              0 < c.length &&
                ((s = new u(s, g, null, r, o)),
                a.push({ event: s, listeners: c }));
            }
          }
          if (0 == (7 & t)) {
            if (
              ((u = "mouseout" === e || "pointerout" === e),
              (!(s = "mouseover" === e || "pointerover" === e) ||
                r === Nt ||
                !(g = r.relatedTarget || r.fromElement) ||
                (!We(g) && !g[ke])) &&
                (u || s) &&
                ((s =
                  o.window === o
                    ? o
                    : (s = o.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                u
                  ? ((u = n),
                    null !==
                      (g = (g = r.relatedTarget || r.toElement)
                        ? We(g)
                        : null) &&
                      ((p = l(g)),
                      (c = g.tag),
                      g !== p || (5 !== c && 27 !== c && 6 !== c)) &&
                      (g = null))
                  : ((u = null), (g = n)),
                u !== g))
            ) {
              if (
                ((c = nr),
                (y = "onMouseLeave"),
                (f = "onMouseEnter"),
                (h = "mouse"),
                ("pointerout" !== e && "pointerover" !== e) ||
                  ((c = hr),
                  (y = "onPointerLeave"),
                  (f = "onPointerEnter"),
                  (h = "pointer")),
                (p = null == u ? s : Ve(u)),
                (d = null == g ? s : Ve(g)),
                ((s = new c(y, h + "leave", u, r, o)).target = p),
                (s.relatedTarget = d),
                (y = null),
                We(o) === n &&
                  (((c = new c(f, h + "enter", g, r, o)).target = d),
                  (c.relatedTarget = p),
                  (y = c)),
                (p = y),
                u && g)
              )
                e: {
                  for (f = g, h = 0, d = c = u; d; d = Gg(d)) h++;
                  for (d = 0, y = f; y; y = Gg(y)) d++;
                  for (; 0 < h - d; ) (c = Gg(c)), h--;
                  for (; 0 < d - h; ) (f = Gg(f)), d--;
                  for (; h--; ) {
                    if (c === f || (null !== f && c === f.alternate)) break e;
                    (c = Gg(c)), (f = Gg(f));
                  }
                  c = null;
                }
              else c = null;
              null !== u && Yg(a, s, u, c, !1),
                null !== g && null !== p && Yg(a, p, g, c, !0);
            }
            if (
              "select" ===
                (u =
                  (s = n ? Ve(n) : window).nodeName &&
                  s.nodeName.toLowerCase()) ||
              ("input" === u && "file" === s.type)
            )
              var b = Ur;
            else if (Pr(s))
              if (Dr) b = Kr;
              else {
                b = Gr;
                var m = zr;
              }
            else
              !(u = s.nodeName) ||
              "input" !== u.toLowerCase() ||
              ("checkbox" !== s.type && "radio" !== s.type)
                ? n && jt(n.elementType) && (b = Ur)
                : (b = Yr);
            switch (
              (b && (b = b(e, n))
                ? Ir(a, b, r, o)
                : (m && m(e, s, n),
                  "focusout" === e &&
                    n &&
                    "number" === s.type &&
                    null != n.memoizedProps.value &&
                    mt(s, "number", s.value)),
              (m = n ? Ve(n) : window),
              e)
            ) {
              case "focusin":
                (Pr(m) || "true" === m.contentEditable) &&
                  ((rn = m), (nn = n), (on = null));
                break;
              case "focusout":
                on = nn = rn = null;
                break;
              case "mousedown":
                an = !0;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                (an = !1), sn(a, r, o);
                break;
              case "selectionchange":
                if (tn) break;
              case "keydown":
              case "keyup":
                sn(a, r, o);
            }
            var _;
            if (Sr)
              e: {
                switch (e) {
                  case "compositionstart":
                    var v = "onCompositionStart";
                    break e;
                  case "compositionend":
                    v = "onCompositionEnd";
                    break e;
                  case "compositionupdate":
                    v = "onCompositionUpdate";
                    break e;
                }
                v = void 0;
              }
            else
              Cr
                ? Or(e, r) && (v = "onCompositionEnd")
                : "keydown" === e &&
                  229 === r.keyCode &&
                  (v = "onCompositionStart");
            v &&
              (Ar &&
                "ko" !== r.locale &&
                (Cr || "onCompositionStart" !== v
                  ? "onCompositionEnd" === v && Cr && (_ = zt())
                  : ((Ht = "value" in (Wt = o) ? Wt.value : Wt.textContent),
                    (Cr = !0))),
              0 < (m = zg(n, v)).length &&
                ((v = new lr(v, e, null, r, o)),
                a.push({ event: v, listeners: m }),
                _ ? (v.data = _) : null !== (_ = Rr(r)) && (v.data = _))),
              (_ = Tr
                ? (function (e, t) {
                    switch (e) {
                      case "compositionend":
                        return Rr(t);
                      case "keypress":
                        return 32 !== t.which ? null : ((jr = !0), wr);
                      case "textInput":
                        return (e = t.data) === wr && jr ? null : e;
                      default:
                        return null;
                    }
                  })(e, r)
                : (function (e, t) {
                    if (Cr)
                      return "compositionend" === e || (!Sr && Or(e, t))
                        ? ((e = zt()), (Vt = Ht = Wt = null), (Cr = !1), e)
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
                        return Ar && "ko" !== t.locale ? null : t.data;
                    }
                  })(e, r)) &&
                0 < (v = zg(n, "onBeforeInput")).length &&
                ((m = new lr("onBeforeInput", "beforeinput", null, r, o)),
                a.push({ event: m, listeners: v }),
                (m.data = _)),
              (function (e, t, r, n, o) {
                if ("submit" === t && r && r.stateNode === o) {
                  var i = Ng((o[xe] || null).action),
                    a = n.submitter;
                  a &&
                    null !==
                      (t = (t = a[xe] || null)
                        ? Ng(t.formAction)
                        : a.getAttribute("formAction")) &&
                    ((i = t), (a = null));
                  var s = new Jt("action", "action", null, n, o);
                  e.push({
                    event: s,
                    listeners: [
                      {
                        instance: null,
                        listener: function () {
                          if (n.defaultPrevented) {
                            if (0 !== Sg) {
                              var e = a ? Pg(o, a) : new FormData(o);
                              Pa(
                                r,
                                {
                                  pending: !0,
                                  data: e,
                                  method: o.method,
                                  action: i,
                                },
                                null,
                                e,
                              );
                            }
                          } else
                            "function" == typeof i &&
                              (s.preventDefault(),
                              (e = a ? Pg(o, a) : new FormData(o)),
                              Pa(
                                r,
                                {
                                  pending: !0,
                                  data: e,
                                  method: o.method,
                                  action: i,
                                },
                                i,
                                e,
                              ));
                        },
                        currentTarget: o,
                      },
                    ],
                  });
                }
              })(a, e, n, r, o);
          }
          Lg(a, t);
        });
      }
      function Vg(e, t, r) {
        return { instance: e, listener: t, currentTarget: r };
      }
      function zg(e, t) {
        for (var r = t + "Capture", n = []; null !== e; ) {
          var o = e,
            i = o.stateNode;
          if (
            ((5 !== (o = o.tag) && 26 !== o && 27 !== o) ||
              null === i ||
              (null != (o = Ut(e, r)) && n.unshift(Vg(e, o, i)),
              null != (o = Ut(e, t)) && n.push(Vg(e, o, i))),
            3 === e.tag)
          )
            return n;
          e = e.return;
        }
        return [];
      }
      function Gg(e) {
        if (null === e) return null;
        do {
          e = e.return;
        } while (e && 5 !== e.tag && 27 !== e.tag);
        return e || null;
      }
      function Yg(e, t, r, n, o) {
        for (var i = t._reactName, a = []; null !== r && r !== n; ) {
          var s = r,
            l = s.alternate,
            u = s.stateNode;
          if (((s = s.tag), null !== l && l === n)) break;
          (5 !== s && 26 !== s && 27 !== s) ||
            null === u ||
            ((l = u),
            o
              ? null != (u = Ut(r, i)) && a.unshift(Vg(r, u, l))
              : o || (null != (u = Ut(r, i)) && a.push(Vg(r, u, l)))),
            (r = r.return);
        }
        0 !== a.length && e.push({ event: t, listeners: a });
      }
      var Kg = /\r\n?/g,
        $g = /\u0000|\uFFFD/g;
      function qg(e) {
        return ("string" == typeof e ? e : "" + e)
          .replace(Kg, "\n")
          .replace($g, "");
      }
      function Xg(e, t) {
        return (t = qg(t)), qg(e) === t;
      }
      function Qg() {}
      function Zg(e, t, r, n, o, i) {
        switch (r) {
          case "children":
            "string" == typeof n
              ? "body" === t || ("textarea" === t && "" === n) || Et(e, n)
              : ("number" == typeof n || "bigint" == typeof n) &&
                "body" !== t &&
                Et(e, "" + n);
            break;
          case "className":
            rt(e, "class", n);
            break;
          case "tabIndex":
            rt(e, "tabindex", n);
            break;
          case "dir":
          case "role":
          case "viewBox":
          case "width":
          case "height":
            rt(e, r, n);
            break;
          case "style":
            wt(e, n, i);
            break;
          case "data":
            if ("object" !== t) {
              rt(e, "data", n);
              break;
            }
          case "src":
          case "href":
            if ("" === n && ("a" !== t || "href" !== r)) {
              e.removeAttribute(r);
              break;
            }
            if (
              null == n ||
              "function" == typeof n ||
              "symbol" == typeof n ||
              "boolean" == typeof n
            ) {
              e.removeAttribute(r);
              break;
            }
            (n = Ct("" + n)), e.setAttribute(r, n);
            break;
          case "action":
          case "formAction":
            if ("function" == typeof n) {
              e.setAttribute(
                r,
                "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
              );
              break;
            }
            if (
              ("function" == typeof i &&
                ("formAction" === r
                  ? ("input" !== t && Zg(e, t, "name", o.name, o, null),
                    Zg(e, t, "formEncType", o.formEncType, o, null),
                    Zg(e, t, "formMethod", o.formMethod, o, null),
                    Zg(e, t, "formTarget", o.formTarget, o, null))
                  : (Zg(e, t, "encType", o.encType, o, null),
                    Zg(e, t, "method", o.method, o, null),
                    Zg(e, t, "target", o.target, o, null))),
              null == n || "symbol" == typeof n || "boolean" == typeof n)
            ) {
              e.removeAttribute(r);
              break;
            }
            (n = Ct("" + n)), e.setAttribute(r, n);
            break;
          case "onClick":
            null != n && (e.onclick = Qg);
            break;
          case "onScroll":
            null != n && Ug("scroll", e);
            break;
          case "onScrollEnd":
            null != n && Ug("scrollend", e);
            break;
          case "dangerouslySetInnerHTML":
            if (null != n) {
              if ("object" != typeof n || !("__html" in n)) throw Error(a(61));
              if (null != (r = n.__html)) {
                if (null != o.children) throw Error(a(60));
                e.innerHTML = r;
              }
            }
            break;
          case "multiple":
            e.multiple = n && "function" != typeof n && "symbol" != typeof n;
            break;
          case "muted":
            e.muted = n && "function" != typeof n && "symbol" != typeof n;
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
          case "defaultValue":
          case "defaultChecked":
          case "innerHTML":
          case "ref":
          case "autoFocus":
            break;
          case "xlinkHref":
            if (
              null == n ||
              "function" == typeof n ||
              "boolean" == typeof n ||
              "symbol" == typeof n
            ) {
              e.removeAttribute("xlink:href");
              break;
            }
            (r = Ct("" + n)),
              e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r);
            break;
          case "contentEditable":
          case "spellCheck":
          case "draggable":
          case "value":
          case "autoReverse":
          case "externalResourcesRequired":
          case "focusable":
          case "preserveAlpha":
            null != n && "function" != typeof n && "symbol" != typeof n
              ? e.setAttribute(r, "" + n)
              : e.removeAttribute(r);
            break;
          case "inert":
          case "allowFullScreen":
          case "async":
          case "autoPlay":
          case "controls":
          case "default":
          case "defer":
          case "disabled":
          case "disablePictureInPicture":
          case "disableRemotePlayback":
          case "formNoValidate":
          case "hidden":
          case "loop":
          case "noModule":
          case "noValidate":
          case "open":
          case "playsInline":
          case "readOnly":
          case "required":
          case "reversed":
          case "scoped":
          case "seamless":
          case "itemScope":
            n && "function" != typeof n && "symbol" != typeof n
              ? e.setAttribute(r, "")
              : e.removeAttribute(r);
            break;
          case "capture":
          case "download":
            !0 === n
              ? e.setAttribute(r, "")
              : !1 !== n &&
                  null != n &&
                  "function" != typeof n &&
                  "symbol" != typeof n
                ? e.setAttribute(r, n)
                : e.removeAttribute(r);
            break;
          case "cols":
          case "rows":
          case "size":
          case "span":
            null != n &&
            "function" != typeof n &&
            "symbol" != typeof n &&
            !isNaN(n) &&
            1 <= n
              ? e.setAttribute(r, n)
              : e.removeAttribute(r);
            break;
          case "rowSpan":
          case "start":
            null == n ||
            "function" == typeof n ||
            "symbol" == typeof n ||
            isNaN(n)
              ? e.removeAttribute(r)
              : e.setAttribute(r, n);
            break;
          case "popover":
            Ug("beforetoggle", e), Ug("toggle", e), tt(e, "popover", n);
            break;
          case "xlinkActuate":
            nt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
            break;
          case "xlinkArcrole":
            nt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
            break;
          case "xlinkRole":
            nt(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
            break;
          case "xlinkShow":
            nt(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
            break;
          case "xlinkTitle":
            nt(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
            break;
          case "xlinkType":
            nt(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
            break;
          case "xmlBase":
            nt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
            break;
          case "xmlLang":
            nt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
            break;
          case "xmlSpace":
            nt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
            break;
          case "is":
            tt(e, "is", n);
            break;
          case "innerText":
          case "textContent":
            break;
          default:
            (!(2 < r.length) ||
              ("o" !== r[0] && "O" !== r[0]) ||
              ("n" !== r[1] && "N" !== r[1])) &&
              tt(e, (r = Ot.get(r) || r), n);
        }
      }
      function Jg(e, t, r, n, o, i) {
        switch (r) {
          case "style":
            wt(e, n, i);
            break;
          case "dangerouslySetInnerHTML":
            if (null != n) {
              if ("object" != typeof n || !("__html" in n)) throw Error(a(61));
              if (null != (r = n.__html)) {
                if (null != o.children) throw Error(a(60));
                e.innerHTML = r;
              }
            }
            break;
          case "children":
            "string" == typeof n
              ? Et(e, n)
              : ("number" == typeof n || "bigint" == typeof n) && Et(e, "" + n);
            break;
          case "onScroll":
            null != n && Ug("scroll", e);
            break;
          case "onScrollEnd":
            null != n && Ug("scrollend", e);
            break;
          case "onClick":
            null != n && (e.onclick = Qg);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
          case "innerHTML":
          case "ref":
          case "innerText":
          case "textContent":
            break;
          default:
            Ke.hasOwnProperty(r) ||
              ("o" !== r[0] ||
              "n" !== r[1] ||
              ((o = r.endsWith("Capture")),
              (t = r.slice(2, o ? r.length - 7 : void 0)),
              "function" ==
                typeof (i = null != (i = e[xe] || null) ? i[r] : null) &&
                e.removeEventListener(t, i, o),
              "function" != typeof n)
                ? r in e
                  ? (e[r] = n)
                  : !0 === n
                    ? e.setAttribute(r, "")
                    : tt(e, r, n)
                : ("function" != typeof i &&
                    null !== i &&
                    (r in e
                      ? (e[r] = null)
                      : e.hasAttribute(r) && e.removeAttribute(r)),
                  e.addEventListener(t, n, o)));
        }
      }
      function ec(e, t, r) {
        switch (t) {
          case "div":
          case "span":
          case "svg":
          case "path":
          case "a":
          case "g":
          case "p":
          case "li":
            break;
          case "img":
            Ug("error", e), Ug("load", e);
            var n,
              o = !1,
              i = !1;
            for (n in r)
              if (r.hasOwnProperty(n)) {
                var s = r[n];
                if (null != s)
                  switch (n) {
                    case "src":
                      o = !0;
                      break;
                    case "srcSet":
                      i = !0;
                      break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(a(137, t));
                    default:
                      Zg(e, t, n, s, r, null);
                  }
              }
            return (
              i && Zg(e, t, "srcSet", r.srcSet, r, null),
              void (o && Zg(e, t, "src", r.src, r, null))
            );
          case "input":
            Ug("invalid", e);
            var l = (n = s = i = null),
              u = null,
              g = null;
            for (o in r)
              if (r.hasOwnProperty(o)) {
                var c = r[o];
                if (null != c)
                  switch (o) {
                    case "name":
                      i = c;
                      break;
                    case "type":
                      s = c;
                      break;
                    case "checked":
                      u = c;
                      break;
                    case "defaultChecked":
                      g = c;
                      break;
                    case "value":
                      n = c;
                      break;
                    case "defaultValue":
                      l = c;
                      break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                      if (null != c) throw Error(a(137, t));
                      break;
                    default:
                      Zg(e, t, o, c, r, null);
                  }
              }
            return bt(e, n, l, u, g, s, i, !1), void ct(e);
          case "select":
            for (i in (Ug("invalid", e), (o = s = n = null), r))
              if (r.hasOwnProperty(i) && null != (l = r[i]))
                switch (i) {
                  case "value":
                    n = l;
                    break;
                  case "defaultValue":
                    s = l;
                    break;
                  case "multiple":
                    o = l;
                  default:
                    Zg(e, t, i, l, r, null);
                }
            return (
              (t = n),
              (r = s),
              (e.multiple = !!o),
              void (null != t
                ? _t(e, !!o, t, !1)
                : null != r && _t(e, !!o, r, !0))
            );
          case "textarea":
            for (s in (Ug("invalid", e), (n = i = o = null), r))
              if (r.hasOwnProperty(s) && null != (l = r[s]))
                switch (s) {
                  case "value":
                    o = l;
                    break;
                  case "defaultValue":
                    i = l;
                    break;
                  case "children":
                    n = l;
                    break;
                  case "dangerouslySetInnerHTML":
                    if (null != l) throw Error(a(91));
                    break;
                  default:
                    Zg(e, t, s, l, r, null);
                }
            return St(e, o, i, n), void ct(e);
          case "option":
            for (u in r)
              if (r.hasOwnProperty(u) && null != (o = r[u]))
                if ("selected" === u)
                  e.selected =
                    o && "function" != typeof o && "symbol" != typeof o;
                else Zg(e, t, u, o, r, null);
            return;
          case "dialog":
            Ug("beforetoggle", e),
              Ug("toggle", e),
              Ug("cancel", e),
              Ug("close", e);
            break;
          case "iframe":
          case "object":
            Ug("load", e);
            break;
          case "video":
          case "audio":
            for (o = 0; o < kg.length; o++) Ug(kg[o], e);
            break;
          case "image":
            Ug("error", e), Ug("load", e);
            break;
          case "details":
            Ug("toggle", e);
            break;
          case "embed":
          case "source":
          case "link":
            Ug("error", e), Ug("load", e);
          case "area":
          case "base":
          case "br":
          case "col":
          case "hr":
          case "keygen":
          case "meta":
          case "param":
          case "track":
          case "wbr":
          case "menuitem":
            for (g in r)
              if (r.hasOwnProperty(g) && null != (o = r[g]))
                switch (g) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(a(137, t));
                  default:
                    Zg(e, t, g, o, r, null);
                }
            return;
          default:
            if (jt(t)) {
              for (c in r)
                r.hasOwnProperty(c) &&
                  void 0 !== (o = r[c]) &&
                  Jg(e, t, c, o, r, void 0);
              return;
            }
        }
        for (l in r)
          r.hasOwnProperty(l) && null != (o = r[l]) && Zg(e, t, l, o, r, null);
      }
      var tc = null,
        rc = null;
      function nc(e) {
        return 9 === e.nodeType ? e : e.ownerDocument;
      }
      function oc(e) {
        switch (e) {
          case "http://www.w3.org/2000/svg":
            return 1;
          case "http://www.w3.org/1998/Math/MathML":
            return 2;
          default:
            return 0;
        }
      }
      function ic(e, t) {
        if (0 === e)
          switch (t) {
            case "svg":
              return 1;
            case "math":
              return 2;
            default:
              return 0;
          }
        return 1 === e && "foreignObject" === t ? 0 : e;
      }
      function ac(e, t) {
        return (
          "textarea" === e ||
          "noscript" === e ||
          "string" == typeof t.children ||
          "number" == typeof t.children ||
          "bigint" == typeof t.children ||
          ("object" == typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var sc = null;
      var lc = "function" == typeof setTimeout ? setTimeout : void 0,
        uc = "function" == typeof clearTimeout ? clearTimeout : void 0,
        gc = "function" == typeof Promise ? Promise : void 0,
        cc =
          "function" == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== gc
              ? function (e) {
                  return gc.resolve(null).then(e).catch(pc);
                }
              : lc;
      function pc(e) {
        setTimeout(function () {
          throw e;
        });
      }
      function fc(e) {
        return "head" === e;
      }
      function dc(e, t) {
        var r = t,
          n = 0,
          o = 0;
        do {
          var i = r.nextSibling;
          if ((e.removeChild(r), i && 8 === i.nodeType))
            if ("/$" === (r = i.data)) {
              if (0 < n && 8 > n) {
                r = n;
                var a = e.ownerDocument;
                if (
                  (1 & r && Sc(a.documentElement), 2 & r && Sc(a.body), 4 & r)
                )
                  for (Sc((r = a.head)), a = r.firstChild; a; ) {
                    var s = a.nextSibling,
                      l = a.nodeName;
                    a[Be] ||
                      "SCRIPT" === l ||
                      "STYLE" === l ||
                      ("LINK" === l && "stylesheet" === a.rel.toLowerCase()) ||
                      r.removeChild(a),
                      (a = s);
                  }
              }
              if (0 === o) return e.removeChild(i), void Op(t);
              o--;
            } else
              "$" === r || "$?" === r || "$!" === r
                ? o++
                : (n = r.charCodeAt(0) - 48);
          else n = 0;
          r = i;
        } while (r);
        Op(t);
      }
      function hc(e) {
        var t = e.firstChild;
        for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
          var r = t;
          switch (((t = t.nextSibling), r.nodeName)) {
            case "HTML":
            case "HEAD":
            case "BODY":
              hc(r), Fe(r);
              continue;
            case "SCRIPT":
            case "STYLE":
              continue;
            case "LINK":
              if ("stylesheet" === r.rel.toLowerCase()) continue;
          }
          e.removeChild(r);
        }
      }
      function yc(e) {
        return (
          "$!" === e.data ||
          ("$?" === e.data && "complete" === e.ownerDocument.readyState)
        );
      }
      function bc(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
          if (8 === t) {
            if (
              "$" === (t = e.data) ||
              "$!" === t ||
              "$?" === t ||
              "F!" === t ||
              "F" === t
            )
              break;
            if ("/$" === t) return null;
          }
        }
        return e;
      }
      var mc = null;
      function _c(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var r = e.data;
            if ("$" === r || "$!" === r || "$?" === r) {
              if (0 === t) return e;
              t--;
            } else "/$" === r && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      function vc(e, t, r) {
        switch (((t = nc(r)), e)) {
          case "html":
            if (!(e = t.documentElement)) throw Error(a(452));
            return e;
          case "head":
            if (!(e = t.head)) throw Error(a(453));
            return e;
          case "body":
            if (!(e = t.body)) throw Error(a(454));
            return e;
          default:
            throw Error(a(451));
        }
      }
      function Sc(e) {
        for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
        Fe(e);
      }
      var Ec = new Map(),
        Tc = new Set();
      function Ac(e) {
        return "function" == typeof e.getRootNode
          ? e.getRootNode()
          : 9 === e.nodeType
            ? e
            : e.ownerDocument;
      }
      var wc = M.d;
      M.d = {
        f: function () {
          var e = wc.f(),
            t = Wu();
          return e || t;
        },
        r: function (e) {
          var t = He(e);
          null !== t && 5 === t.tag && "form" === t.type ? xa(t) : wc.r(e);
        },
        D: function (e) {
          wc.D(e), Oc("dns-prefetch", e, null);
        },
        C: function (e, t) {
          wc.C(e, t), Oc("preconnect", e, t);
        },
        L: function (e, t, r) {
          wc.L(e, t, r);
          var n = jc;
          if (n && e && t) {
            var o = 'link[rel="preload"][as="' + ht(t) + '"]';
            "image" === t && r && r.imageSrcSet
              ? ((o += '[imagesrcset="' + ht(r.imageSrcSet) + '"]'),
                "string" == typeof r.imageSizes &&
                  (o += '[imagesizes="' + ht(r.imageSizes) + '"]'))
              : (o += '[href="' + ht(e) + '"]');
            var i = o;
            switch (t) {
              case "style":
                i = Cc(e);
                break;
              case "script":
                i = Ic(e);
            }
            Ec.has(i) ||
              ((e = p(
                {
                  rel: "preload",
                  href: "image" === t && r && r.imageSrcSet ? void 0 : e,
                  as: t,
                },
                r,
              )),
              Ec.set(i, e),
              null !== n.querySelector(o) ||
                ("style" === t && n.querySelector(Nc(i))) ||
                ("script" === t && n.querySelector(xc(i))) ||
                (ec((t = n.createElement("link")), "link", e),
                Ge(t),
                n.head.appendChild(t)));
          }
        },
        m: function (e, t) {
          wc.m(e, t);
          var r = jc;
          if (r && e) {
            var n = t && "string" == typeof t.as ? t.as : "script",
              o =
                'link[rel="modulepreload"][as="' +
                ht(n) +
                '"][href="' +
                ht(e) +
                '"]',
              i = o;
            switch (n) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                i = Ic(e);
            }
            if (
              !Ec.has(i) &&
              ((e = p({ rel: "modulepreload", href: e }, t)),
              Ec.set(i, e),
              null === r.querySelector(o))
            ) {
              switch (n) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  if (r.querySelector(xc(i))) return;
              }
              ec((n = r.createElement("link")), "link", e),
                Ge(n),
                r.head.appendChild(n);
            }
          }
        },
        X: function (e, t) {
          wc.X(e, t);
          var r = jc;
          if (r && e) {
            var n = ze(r).hoistableScripts,
              o = Ic(e),
              i = n.get(o);
            i ||
              ((i = r.querySelector(xc(o))) ||
                ((e = p({ src: e, async: !0 }, t)),
                (t = Ec.get(o)) && Uc(e, t),
                Ge((i = r.createElement("script"))),
                ec(i, "link", e),
                r.head.appendChild(i)),
              (i = { type: "script", instance: i, count: 1, state: null }),
              n.set(o, i));
          }
        },
        S: function (e, t, r) {
          wc.S(e, t, r);
          var n = jc;
          if (n && e) {
            var o = ze(n).hoistableStyles,
              i = Cc(e);
            t = t || "default";
            var a = o.get(i);
            if (!a) {
              var s = { loading: 0, preload: null };
              if ((a = n.querySelector(Nc(i)))) s.loading = 5;
              else {
                (e = p(
                  { rel: "stylesheet", href: e, "data-precedence": t },
                  r,
                )),
                  (r = Ec.get(i)) && Lc(e, r);
                var l = (a = n.createElement("link"));
                Ge(l),
                  ec(l, "link", e),
                  (l._p = new Promise(function (e, t) {
                    (l.onload = e), (l.onerror = t);
                  })),
                  l.addEventListener("load", function () {
                    s.loading |= 1;
                  }),
                  l.addEventListener("error", function () {
                    s.loading |= 2;
                  }),
                  (s.loading |= 4),
                  Mc(a, t, n);
              }
              (a = { type: "stylesheet", instance: a, count: 1, state: s }),
                o.set(i, a);
            }
          }
        },
        M: function (e, t) {
          wc.M(e, t);
          var r = jc;
          if (r && e) {
            var n = ze(r).hoistableScripts,
              o = Ic(e),
              i = n.get(o);
            i ||
              ((i = r.querySelector(xc(o))) ||
                ((e = p({ src: e, async: !0, type: "module" }, t)),
                (t = Ec.get(o)) && Uc(e, t),
                Ge((i = r.createElement("script"))),
                ec(i, "link", e),
                r.head.appendChild(i)),
              (i = { type: "script", instance: i, count: 1, state: null }),
              n.set(o, i));
          }
        },
      };
      var jc = "undefined" == typeof document ? null : document;
      function Oc(e, t, r) {
        var n = jc;
        if (n && "string" == typeof t && t) {
          var o = ht(t);
          (o = 'link[rel="' + e + '"][href="' + o + '"]'),
            "string" == typeof r && (o += '[crossorigin="' + r + '"]'),
            Tc.has(o) ||
              (Tc.add(o),
              (e = { rel: e, crossOrigin: r, href: t }),
              null === n.querySelector(o) &&
                (ec((t = n.createElement("link")), "link", e),
                Ge(t),
                n.head.appendChild(t)));
        }
      }
      function Rc(e, t, r, n) {
        var o,
          i,
          s,
          l,
          u = (u = z.current) ? Ac(u) : null;
        if (!u) throw Error(a(446));
        switch (e) {
          case "meta":
          case "title":
            return null;
          case "style":
            return "string" == typeof r.precedence && "string" == typeof r.href
              ? ((t = Cc(r.href)),
                (n = (r = ze(u).hoistableStyles).get(t)) ||
                  ((n = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  r.set(t, n)),
                n)
              : { type: "void", instance: null, count: 0, state: null };
          case "link":
            if (
              "stylesheet" === r.rel &&
              "string" == typeof r.href &&
              "string" == typeof r.precedence
            ) {
              e = Cc(r.href);
              var g = ze(u).hoistableStyles,
                c = g.get(e);
              if (
                (c ||
                  ((u = u.ownerDocument || u),
                  (c = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: { loading: 0, preload: null },
                  }),
                  g.set(e, c),
                  (g = u.querySelector(Nc(e))) &&
                    !g._p &&
                    ((c.instance = g), (c.state.loading = 5)),
                  Ec.has(e) ||
                    ((r = {
                      rel: "preload",
                      as: "style",
                      href: r.href,
                      crossOrigin: r.crossOrigin,
                      integrity: r.integrity,
                      media: r.media,
                      hrefLang: r.hrefLang,
                      referrerPolicy: r.referrerPolicy,
                    }),
                    Ec.set(e, r),
                    g ||
                      ((o = u),
                      (i = e),
                      (s = r),
                      (l = c.state),
                      o.querySelector(
                        'link[rel="preload"][as="style"][' + i + "]",
                      )
                        ? (l.loading = 1)
                        : ((i = o.createElement("link")),
                          (l.preload = i),
                          i.addEventListener("load", function () {
                            return (l.loading |= 1);
                          }),
                          i.addEventListener("error", function () {
                            return (l.loading |= 2);
                          }),
                          ec(i, "link", s),
                          Ge(i),
                          o.head.appendChild(i))))),
                t && null === n)
              )
                throw Error(a(528, ""));
              return c;
            }
            if (t && null !== n) throw Error(a(529, ""));
            return null;
          case "script":
            return (
              (t = r.async),
              "string" == typeof (r = r.src) &&
              t &&
              "function" != typeof t &&
              "symbol" != typeof t
                ? ((t = Ic(r)),
                  (n = (r = ze(u).hoistableScripts).get(t)) ||
                    ((n = {
                      type: "script",
                      instance: null,
                      count: 0,
                      state: null,
                    }),
                    r.set(t, n)),
                  n)
                : { type: "void", instance: null, count: 0, state: null }
            );
          default:
            throw Error(a(444, e));
        }
      }
      function Cc(e) {
        return 'href="' + ht(e) + '"';
      }
      function Nc(e) {
        return 'link[rel="stylesheet"][' + e + "]";
      }
      function Pc(e) {
        return p({}, e, { "data-precedence": e.precedence, precedence: null });
      }
      function Ic(e) {
        return '[src="' + ht(e) + '"]';
      }
      function xc(e) {
        return "script[async]" + e;
      }
      function kc(e, t, r) {
        if ((t.count++, null === t.instance))
          switch (t.type) {
            case "style":
              var n = e.querySelector('style[data-href~="' + ht(r.href) + '"]');
              if (n) return (t.instance = n), Ge(n), n;
              var o = p({}, r, {
                "data-href": r.href,
                "data-precedence": r.precedence,
                href: null,
                precedence: null,
              });
              return (
                Ge((n = (e.ownerDocument || e).createElement("style"))),
                ec(n, "style", o),
                Mc(n, r.precedence, e),
                (t.instance = n)
              );
            case "stylesheet":
              o = Cc(r.href);
              var i = e.querySelector(Nc(o));
              if (i) return (t.state.loading |= 4), (t.instance = i), Ge(i), i;
              (n = Pc(r)),
                (o = Ec.get(o)) && Lc(n, o),
                Ge((i = (e.ownerDocument || e).createElement("link")));
              var s = i;
              return (
                (s._p = new Promise(function (e, t) {
                  (s.onload = e), (s.onerror = t);
                })),
                ec(i, "link", n),
                (t.state.loading |= 4),
                Mc(i, r.precedence, e),
                (t.instance = i)
              );
            case "script":
              return (
                (i = Ic(r.src)),
                (o = e.querySelector(xc(i)))
                  ? ((t.instance = o), Ge(o), o)
                  : ((n = r),
                    (o = Ec.get(i)) && Uc((n = p({}, r)), o),
                    Ge(
                      (o = (e = e.ownerDocument || e).createElement("script")),
                    ),
                    ec(o, "link", n),
                    e.head.appendChild(o),
                    (t.instance = o))
              );
            case "void":
              return null;
            default:
              throw Error(a(443, t.type));
          }
        else
          "stylesheet" === t.type &&
            0 == (4 & t.state.loading) &&
            ((n = t.instance), (t.state.loading |= 4), Mc(n, r.precedence, e));
        return t.instance;
      }
      function Mc(e, t, r) {
        for (
          var n = r.querySelectorAll(
              'link[rel="stylesheet"][data-precedence],style[data-precedence]',
            ),
            o = n.length ? n[n.length - 1] : null,
            i = o,
            a = 0;
          a < n.length;
          a++
        ) {
          var s = n[a];
          if (s.dataset.precedence === t) i = s;
          else if (i !== o) break;
        }
        i
          ? i.parentNode.insertBefore(e, i.nextSibling)
          : (t = 9 === r.nodeType ? r.head : r).insertBefore(e, t.firstChild);
      }
      function Lc(e, t) {
        null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
          null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
          null == e.title && (e.title = t.title);
      }
      function Uc(e, t) {
        null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
          null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
          null == e.integrity && (e.integrity = t.integrity);
      }
      var Dc = null;
      function Bc(e, t, r) {
        if (null === Dc) {
          var n = new Map(),
            o = (Dc = new Map());
          o.set(r, n);
        } else (n = (o = Dc).get(r)) || ((n = new Map()), o.set(r, n));
        if (n.has(e)) return n;
        for (
          n.set(e, null), r = r.getElementsByTagName(e), o = 0;
          o < r.length;
          o++
        ) {
          var i = r[o];
          if (
            !(
              i[Be] ||
              i[Ie] ||
              ("link" === e && "stylesheet" === i.getAttribute("rel"))
            ) &&
            "http://www.w3.org/2000/svg" !== i.namespaceURI
          ) {
            var a = i.getAttribute(t) || "";
            a = e + a;
            var s = n.get(a);
            s ? s.push(i) : n.set(a, [i]);
          }
        }
        return n;
      }
      function Fc(e, t, r) {
        (e = e.ownerDocument || e).head.insertBefore(
          r,
          "title" === t ? e.querySelector("head > title") : null,
        );
      }
      function Wc(e) {
        return "stylesheet" !== e.type || 0 != (3 & e.state.loading);
      }
      var Hc = null;
      function Vc() {}
      function zc() {
        if ((this.count--, 0 === this.count))
          if (this.stylesheets) Yc(this, this.stylesheets);
          else if (this.unsuspend) {
            var e = this.unsuspend;
            (this.unsuspend = null), e();
          }
      }
      var Gc = null;
      function Yc(e, t) {
        (e.stylesheets = null),
          null !== e.unsuspend &&
            (e.count++,
            (Gc = new Map()),
            t.forEach(Kc, e),
            (Gc = null),
            zc.call(e));
      }
      function Kc(e, t) {
        if (!(4 & t.state.loading)) {
          var r = Gc.get(e);
          if (r) var n = r.get(null);
          else {
            (r = new Map()), Gc.set(e, r);
            for (
              var o = e.querySelectorAll(
                  "link[data-precedence],style[data-precedence]",
                ),
                i = 0;
              i < o.length;
              i++
            ) {
              var a = o[i];
              ("LINK" !== a.nodeName &&
                "not all" === a.getAttribute("media")) ||
                (r.set(a.dataset.precedence, a), (n = a));
            }
            n && r.set(null, n);
          }
          (a = (o = t.instance).getAttribute("data-precedence")),
            (i = r.get(a) || n) === n && r.set(null, o),
            r.set(a, o),
            this.count++,
            (n = zc.bind(this)),
            o.addEventListener("load", n),
            o.addEventListener("error", n),
            i
              ? i.parentNode.insertBefore(o, i.nextSibling)
              : (e = 9 === e.nodeType ? e.head : e).insertBefore(
                  o,
                  e.firstChild,
                ),
            (t.state.loading |= 4);
        }
      }
      var $c = {
        $$typeof: S,
        Provider: null,
        Consumer: null,
        _currentValue: L,
        _currentValue2: L,
        _threadCount: 0,
      };
      function qc(e, t, r, n, o, i, a, s) {
        (this.tag = 1),
          (this.containerInfo = e),
          (this.pingCache = this.current = this.pendingChildren = null),
          (this.timeoutHandle = -1),
          (this.callbackNode =
            this.next =
            this.pendingContext =
            this.context =
            this.cancelPendingCommit =
              null),
          (this.callbackPriority = 0),
          (this.expirationTimes = Ae(-1)),
          (this.entangledLanes =
            this.shellSuspendCounter =
            this.errorRecoveryDisabledLanes =
            this.expiredLanes =
            this.warmLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
              0),
          (this.entanglements = Ae(0)),
          (this.hiddenUpdates = Ae(null)),
          (this.identifierPrefix = n),
          (this.onUncaughtError = o),
          (this.onCaughtError = i),
          (this.onRecoverableError = a),
          (this.pooledCache = null),
          (this.pooledCacheLanes = 0),
          (this.formState = s),
          (this.incompleteTransitions = new Map());
      }
      function Xc(e, t, r, n, o, i, a, s, l, u, g, c) {
        return (
          (e = new qc(e, t, r, a, s, l, u, c)),
          (t = 1),
          !0 === i && (t |= 24),
          (i = Ln(3, null, null, t)),
          (e.current = i),
          (i.stateNode = e),
          (t = ko()).refCount++,
          (e.pooledCache = t),
          t.refCount++,
          (i.memoizedState = { element: n, isDehydrated: r, cache: t }),
          ni(i),
          e
        );
      }
      function Qc(e) {
        return e ? (e = kn) : kn;
      }
      function Zc(e, t, r, n, o, i) {
        (o = Qc(o)),
          null === n.context ? (n.context = o) : (n.pendingContext = o),
          ((n = ii(t)).payload = { element: r }),
          null !== (i = void 0 === i ? null : i) && (n.callback = i),
          null !== (r = ai(e, n, t)) && (Lu(r, 0, t), si(r, e, t));
      }
      function Jc(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var r = e.retryLane;
          e.retryLane = 0 !== r && r < t ? r : t;
        }
      }
      function ep(e, t) {
        Jc(e, t), (e = e.alternate) && Jc(e, t);
      }
      function tp(e) {
        if (13 === e.tag) {
          var t = Pn(e, 67108864);
          null !== t && Lu(t, 0, 67108864), ep(e, 67108864);
        }
      }
      var rp = !0;
      function np(e, t, r, n) {
        var o = k.T;
        k.T = null;
        var i = M.p;
        try {
          (M.p = 2), ip(e, t, r, n);
        } finally {
          (M.p = i), (k.T = o);
        }
      }
      function op(e, t, r, n) {
        var o = k.T;
        k.T = null;
        var i = M.p;
        try {
          (M.p = 8), ip(e, t, r, n);
        } finally {
          (M.p = i), (k.T = o);
        }
      }
      function ip(e, t, r, n) {
        if (rp) {
          var o = ap(n);
          if (null === o) Hg(e, t, n, sp, r), mp(e, n);
          else if (
            (function (e, t, r, n, o) {
              switch (t) {
                case "focusin":
                  return (cp = _p(cp, e, t, r, n, o)), !0;
                case "dragenter":
                  return (pp = _p(pp, e, t, r, n, o)), !0;
                case "mouseover":
                  return (fp = _p(fp, e, t, r, n, o)), !0;
                case "pointerover":
                  var i = o.pointerId;
                  return dp.set(i, _p(dp.get(i) || null, e, t, r, n, o)), !0;
                case "gotpointercapture":
                  return (
                    (i = o.pointerId),
                    hp.set(i, _p(hp.get(i) || null, e, t, r, n, o)),
                    !0
                  );
              }
              return !1;
            })(o, e, t, r, n)
          )
            n.stopPropagation();
          else if ((mp(e, n), 4 & t && -1 < bp.indexOf(e))) {
            for (; null !== o; ) {
              var i = He(o);
              if (null !== i)
                switch (i.tag) {
                  case 3:
                    if ((i = i.stateNode).current.memoizedState.isDehydrated) {
                      var a = me(i.pendingLanes);
                      if (0 !== a) {
                        var s = i;
                        for (s.pendingLanes |= 2, s.entangledLanes |= 2; a; ) {
                          var l = 1 << (31 - fe(a));
                          (s.entanglements[1] |= l), (a &= ~l);
                        }
                        Eg(i), 0 == (6 & ru) && ((Eu = te() + 500), Tg(0, !1));
                      }
                    }
                    break;
                  case 13:
                    null !== (s = Pn(i, 2)) && Lu(s, 0, 2), Wu(), ep(i, 2);
                }
              if ((null === (i = ap(n)) && Hg(e, t, n, sp, r), i === o)) break;
              o = i;
            }
            null !== o && n.stopPropagation();
          } else Hg(e, t, n, null, r);
        }
      }
      function ap(e) {
        return lp((e = Pt(e)));
      }
      var sp = null;
      function lp(e) {
        if (((sp = null), null !== (e = We(e)))) {
          var t = l(e);
          if (null === t) e = null;
          else {
            var r = t.tag;
            if (13 === r) {
              if (null !== (e = u(t))) return e;
              e = null;
            } else if (3 === r) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          }
        }
        return (sp = e), null;
      }
      function up(e) {
        switch (e) {
          case "beforetoggle":
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "toggle":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 2;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 8;
          case "message":
            switch (re()) {
              case ne:
                return 2;
              case oe:
                return 8;
              case ie:
              case ae:
                return 32;
              case se:
                return 268435456;
              default:
                return 32;
            }
          default:
            return 32;
        }
      }
      var gp = !1,
        cp = null,
        pp = null,
        fp = null,
        dp = new Map(),
        hp = new Map(),
        yp = [],
        bp =
          "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
            " ",
          );
      function mp(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            cp = null;
            break;
          case "dragenter":
          case "dragleave":
            pp = null;
            break;
          case "mouseover":
          case "mouseout":
            fp = null;
            break;
          case "pointerover":
          case "pointerout":
            dp.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            hp.delete(t.pointerId);
        }
      }
      function _p(e, t, r, n, o, i) {
        return null === e || e.nativeEvent !== i
          ? ((e = {
              blockedOn: t,
              domEventName: r,
              eventSystemFlags: n,
              nativeEvent: i,
              targetContainers: [o],
            }),
            null !== t && null !== (t = He(t)) && tp(t),
            e)
          : ((e.eventSystemFlags |= n),
            (t = e.targetContainers),
            null !== o && -1 === t.indexOf(o) && t.push(o),
            e);
      }
      function vp(e) {
        var t = We(e.target);
        if (null !== t) {
          var r = l(t);
          if (null !== r)
            if (13 === (t = r.tag)) {
              if (null !== (t = u(r)))
                return (
                  (e.blockedOn = t),
                  void (function (e, t) {
                    var r = M.p;
                    try {
                      return (M.p = e), t();
                    } finally {
                      M.p = r;
                    }
                  })(e.priority, function () {
                    if (13 === r.tag) {
                      var e = ku();
                      e = Re(e);
                      var t = Pn(r, e);
                      null !== t && Lu(t, 0, e), ep(r, e);
                    }
                  })
                );
            } else if (
              3 === t &&
              r.stateNode.current.memoizedState.isDehydrated
            )
              return void (e.blockedOn =
                3 === r.tag ? r.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }
      function Sp(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
          var r = ap(e.nativeEvent);
          if (null !== r)
            return null !== (t = He(r)) && tp(t), (e.blockedOn = r), !1;
          var n = new (r = e.nativeEvent).constructor(r.type, r);
          (Nt = n), r.target.dispatchEvent(n), (Nt = null), t.shift();
        }
        return !0;
      }
      function Ep(e, t, r) {
        Sp(e) && r.delete(t);
      }
      function Tp() {
        (gp = !1),
          null !== cp && Sp(cp) && (cp = null),
          null !== pp && Sp(pp) && (pp = null),
          null !== fp && Sp(fp) && (fp = null),
          dp.forEach(Ep),
          hp.forEach(Ep);
      }
      function Ap(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null),
          gp ||
            ((gp = !0),
            n.unstable_scheduleCallback(n.unstable_NormalPriority, Tp)));
      }
      var wp = null;
      function jp(e) {
        wp !== e &&
          ((wp = e),
          n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
            wp === e && (wp = null);
            for (var t = 0; t < e.length; t += 3) {
              var r = e[t],
                n = e[t + 1],
                o = e[t + 2];
              if ("function" != typeof n) {
                if (null === lp(n || r)) continue;
                break;
              }
              var i = He(r);
              null !== i &&
                (e.splice(t, 3),
                (t -= 3),
                Pa(
                  i,
                  { pending: !0, data: o, method: r.method, action: n },
                  n,
                  o,
                ));
            }
          }));
      }
      function Op(e) {
        function t(t) {
          return Ap(t, e);
        }
        null !== cp && Ap(cp, e),
          null !== pp && Ap(pp, e),
          null !== fp && Ap(fp, e),
          dp.forEach(t),
          hp.forEach(t);
        for (var r = 0; r < yp.length; r++) {
          var n = yp[r];
          n.blockedOn === e && (n.blockedOn = null);
        }
        for (; 0 < yp.length && null === (r = yp[0]).blockedOn; )
          vp(r), null === r.blockedOn && yp.shift();
        if (null != (r = (e.ownerDocument || e).$$reactFormReplay))
          for (n = 0; n < r.length; n += 3) {
            var o = r[n],
              i = r[n + 1],
              a = o[xe] || null;
            if ("function" == typeof i) a || jp(r);
            else if (a) {
              var s = null;
              if (i && i.hasAttribute("formAction")) {
                if (((o = i), (a = i[xe] || null))) s = a.formAction;
                else if (null !== lp(o)) continue;
              } else s = a.action;
              "function" == typeof s
                ? (r[n + 1] = s)
                : (r.splice(n, 3), (n -= 3)),
                jp(r);
            }
          }
      }
      function Rp(e) {
        this._internalRoot = e;
      }
      function Cp(e) {
        this._internalRoot = e;
      }
      (Cp.prototype.render = Rp.prototype.render =
        function (e) {
          var t = this._internalRoot;
          if (null === t) throw Error(a(409));
          Zc(t.current, ku(), e, t, null, null);
        }),
        (Cp.prototype.unmount = Rp.prototype.unmount =
          function () {
            var e = this._internalRoot;
            if (null !== e) {
              this._internalRoot = null;
              var t = e.containerInfo;
              Zc(e.current, 2, null, e, null, null), Wu(), (t[ke] = null);
            }
          }),
        (Cp.prototype.unstable_scheduleHydration = function (e) {
          if (e) {
            var t = Ne();
            e = { blockedOn: null, target: e, priority: t };
            for (
              var r = 0;
              r < yp.length && 0 !== t && t < yp[r].priority;
              r++
            );
            yp.splice(r, 0, e), 0 === r && vp(e);
          }
        });
      var Np = o.version;
      if ("19.1.1" !== Np) throw Error(a(527, Np, "19.1.1"));
      M.findDOMNode = function (e) {
        var t = e._reactInternals;
        if (void 0 === t) {
          if ("function" == typeof e.render) throw Error(a(188));
          throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
        }
        return (
          (e = (function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = l(e))) throw Error(a(188));
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
                  if (i === r) return g(o), e;
                  if (i === n) return g(o), t;
                  i = i.sibling;
                }
                throw Error(a(188));
              }
              if (r.return !== n.return) (r = o), (n = i);
              else {
                for (var s = !1, u = o.child; u; ) {
                  if (u === r) {
                    (s = !0), (r = o), (n = i);
                    break;
                  }
                  if (u === n) {
                    (s = !0), (n = o), (r = i);
                    break;
                  }
                  u = u.sibling;
                }
                if (!s) {
                  for (u = i.child; u; ) {
                    if (u === r) {
                      (s = !0), (r = i), (n = o);
                      break;
                    }
                    if (u === n) {
                      (s = !0), (n = i), (r = o);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!s) throw Error(a(189));
                }
              }
              if (r.alternate !== n) throw Error(a(190));
            }
            if (3 !== r.tag) throw Error(a(188));
            return r.stateNode.current === r ? e : t;
          })(t)),
          (e = null === (e = null !== e ? c(e) : null) ? null : e.stateNode)
        );
      };
      var Pp = {
        bundleType: 0,
        version: "19.1.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: k,
        reconcilerVersion: "19.1.1",
      };
      if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var Ip = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Ip.isDisabled && Ip.supportsFiber)
          try {
            (ge = Ip.inject(Pp)), (ce = Ip);
          } catch (e) {}
      }
      t.createRoot = function (e, t) {
        if (!s(e)) throw Error(a(299));
        var r = !1,
          n = "",
          o = ms,
          i = _s,
          l = vs;
        return (
          null != t &&
            (!0 === t.unstable_strictMode && (r = !0),
            void 0 !== t.identifierPrefix && (n = t.identifierPrefix),
            void 0 !== t.onUncaughtError && (o = t.onUncaughtError),
            void 0 !== t.onCaughtError && (i = t.onCaughtError),
            void 0 !== t.onRecoverableError && (l = t.onRecoverableError),
            void 0 !== t.unstable_transitionCallbacks &&
              t.unstable_transitionCallbacks),
          (t = Xc(e, 1, !1, null, 0, r, n, o, i, l, 0, null)),
          (e[ke] = t.current),
          Fg(e),
          new Rp(t)
        );
      };
    },
    1259: (e, t, r) => {
      "use strict";
      /**
       * @license React
       * react-dom.production.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(626);
      function o(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
          t += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var r = 2; r < arguments.length; r++)
            t += "&args[]=" + encodeURIComponent(arguments[r]);
        }
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      function i() {}
      var a = {
          d: {
            f: i,
            r: function () {
              throw Error(o(522));
            },
            D: i,
            C: i,
            L: i,
            m: i,
            X: i,
            S: i,
            M: i,
          },
          p: 0,
          findDOMNode: null,
        },
        s = Symbol.for("react.portal");
      var l = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      function u(e, t) {
        return "font" === e
          ? ""
          : "string" == typeof t
            ? "use-credentials" === t
              ? t
              : ""
            : void 0;
      }
      (t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a),
        (t.createPortal = function (e, t) {
          var r =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          if (!t || (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType))
            throw Error(o(299));
          return (function (e, t, r) {
            var n =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return {
              $$typeof: s,
              key: null == n ? null : "" + n,
              children: e,
              containerInfo: t,
              implementation: r,
            };
          })(e, t, null, r);
        }),
        (t.flushSync = function (e) {
          var t = l.T,
            r = a.p;
          try {
            if (((l.T = null), (a.p = 2), e)) return e();
          } finally {
            (l.T = t), (a.p = r), a.d.f();
          }
        }),
        (t.preconnect = function (e, t) {
          "string" == typeof e &&
            (t
              ? (t =
                  "string" == typeof (t = t.crossOrigin)
                    ? "use-credentials" === t
                      ? t
                      : ""
                    : void 0)
              : (t = null),
            a.d.C(e, t));
        }),
        (t.prefetchDNS = function (e) {
          "string" == typeof e && a.d.D(e);
        }),
        (t.preinit = function (e, t) {
          if ("string" == typeof e && t && "string" == typeof t.as) {
            var r = t.as,
              n = u(r, t.crossOrigin),
              o = "string" == typeof t.integrity ? t.integrity : void 0,
              i = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
            "style" === r
              ? a.d.S(
                  e,
                  "string" == typeof t.precedence ? t.precedence : void 0,
                  { crossOrigin: n, integrity: o, fetchPriority: i },
                )
              : "script" === r &&
                a.d.X(e, {
                  crossOrigin: n,
                  integrity: o,
                  fetchPriority: i,
                  nonce: "string" == typeof t.nonce ? t.nonce : void 0,
                });
          }
        }),
        (t.preinitModule = function (e, t) {
          if ("string" == typeof e)
            if ("object" == typeof t && null !== t) {
              if (null == t.as || "script" === t.as) {
                var r = u(t.as, t.crossOrigin);
                a.d.M(e, {
                  crossOrigin: r,
                  integrity:
                    "string" == typeof t.integrity ? t.integrity : void 0,
                  nonce: "string" == typeof t.nonce ? t.nonce : void 0,
                });
              }
            } else null == t && a.d.M(e);
        }),
        (t.preload = function (e, t) {
          if (
            "string" == typeof e &&
            "object" == typeof t &&
            null !== t &&
            "string" == typeof t.as
          ) {
            var r = t.as,
              n = u(r, t.crossOrigin);
            a.d.L(e, r, {
              crossOrigin: n,
              integrity: "string" == typeof t.integrity ? t.integrity : void 0,
              nonce: "string" == typeof t.nonce ? t.nonce : void 0,
              type: "string" == typeof t.type ? t.type : void 0,
              fetchPriority:
                "string" == typeof t.fetchPriority ? t.fetchPriority : void 0,
              referrerPolicy:
                "string" == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
              imageSrcSet:
                "string" == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
              imageSizes:
                "string" == typeof t.imageSizes ? t.imageSizes : void 0,
              media: "string" == typeof t.media ? t.media : void 0,
            });
          }
        }),
        (t.preloadModule = function (e, t) {
          if ("string" == typeof e)
            if (t) {
              var r = u(t.as, t.crossOrigin);
              a.d.m(e, {
                as:
                  "string" == typeof t.as && "script" !== t.as ? t.as : void 0,
                crossOrigin: r,
                integrity:
                  "string" == typeof t.integrity ? t.integrity : void 0,
              });
            } else a.d.m(e);
        }),
        (t.requestFormReset = function (e) {
          a.d.r(e);
        }),
        (t.unstable_batchedUpdates = function (e, t) {
          return e(t);
        }),
        (t.useFormState = function (e, t, r) {
          return l.H.useFormState(e, t, r);
        }),
        (t.useFormStatus = function () {
          return l.H.useHostTransitionStatus();
        }),
        (t.version = "19.1.1");
    },
    4844: (e, t, r) => {
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
        (e.exports = r(241));
    },
    2739: (e, t, r) => {
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
        (e.exports = r(1259));
    },
    3741: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => E });
      var n = r(8584),
        o = r(1115),
        i = r(5033);
      function a(e, t) {
        return e
          .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      var s = r(626),
        l = r(2739);
      const u = !1;
      var g = r(8679),
        c = function (e) {
          return e.scrollTop;
        },
        p = "unmounted",
        f = "exited",
        d = "entering",
        h = "entered",
        y = "exiting",
        b = (function (e) {
          function t(t, r) {
            var n;
            n = e.call(this, t, r) || this;
            var o,
              i = r && !r.isMounting ? t.enter : t.appear;
            return (
              (n.appearStatus = null),
              t.in
                ? i
                  ? ((o = f), (n.appearStatus = d))
                  : (o = h)
                : (o = t.unmountOnExit || t.mountOnEnter ? p : f),
              (n.state = { status: o }),
              (n.nextCallback = null),
              n
            );
          }
          (0, i.A)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === p ? { status: f } : null;
            });
          var r = t.prototype;
          return (
            (r.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (r.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var r = this.state.status;
                this.props.in
                  ? r !== d && r !== h && (t = d)
                  : (r !== d && r !== h) || (t = y);
              }
              this.updateStatus(!1, t);
            }),
            (r.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (r.getTimeouts = function () {
              var e,
                t,
                r,
                n = this.props.timeout;
              return (
                (e = t = r = n),
                null != n &&
                  "number" != typeof n &&
                  ((e = n.exit),
                  (t = n.enter),
                  (r = void 0 !== n.appear ? n.appear : t)),
                { exit: e, enter: t, appear: r }
              );
            }),
            (r.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t))
                if ((this.cancelNextCallback(), t === d)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var r = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : l.findDOMNode(this);
                    r && c(r);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === f &&
                  this.setState({ status: p });
            }),
            (r.performEnter = function (e) {
              var t = this,
                r = this.props.enter,
                n = this.context ? this.context.isMounting : e,
                o = this.props.nodeRef ? [n] : [l.findDOMNode(this), n],
                i = o[0],
                a = o[1],
                s = this.getTimeouts(),
                g = n ? s.appear : s.enter;
              (!e && !r) || u
                ? this.safeSetState({ status: h }, function () {
                    t.props.onEntered(i);
                  })
                : (this.props.onEnter(i, a),
                  this.safeSetState({ status: d }, function () {
                    t.props.onEntering(i, a),
                      t.onTransitionEnd(g, function () {
                        t.safeSetState({ status: h }, function () {
                          t.props.onEntered(i, a);
                        });
                      });
                  }));
            }),
            (r.performExit = function () {
              var e = this,
                t = this.props.exit,
                r = this.getTimeouts(),
                n = this.props.nodeRef ? void 0 : l.findDOMNode(this);
              t && !u
                ? (this.props.onExit(n),
                  this.safeSetState({ status: y }, function () {
                    e.props.onExiting(n),
                      e.onTransitionEnd(r.exit, function () {
                        e.safeSetState({ status: f }, function () {
                          e.props.onExited(n);
                        });
                      });
                  }))
                : this.safeSetState({ status: f }, function () {
                    e.props.onExited(n);
                  });
            }),
            (r.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (r.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (r.setNextCallback = function (e) {
              var t = this,
                r = !0;
              return (
                (this.nextCallback = function (n) {
                  r && ((r = !1), (t.nextCallback = null), e(n));
                }),
                (this.nextCallback.cancel = function () {
                  r = !1;
                }),
                this.nextCallback
              );
            }),
            (r.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var r = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : l.findDOMNode(this),
                n = null == e && !this.props.addEndListener;
              if (r && !n) {
                if (this.props.addEndListener) {
                  var o = this.props.nodeRef
                      ? [this.nextCallback]
                      : [r, this.nextCallback],
                    i = o[0],
                    a = o[1];
                  this.props.addEndListener(i, a);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (r.render = function () {
              var e = this.state.status;
              if (e === p) return null;
              var t = this.props,
                r = t.children,
                n =
                  (t.in,
                  t.mountOnEnter,
                  t.unmountOnExit,
                  t.appear,
                  t.enter,
                  t.exit,
                  t.timeout,
                  t.addEndListener,
                  t.onEnter,
                  t.onEntering,
                  t.onEntered,
                  t.onExit,
                  t.onExiting,
                  t.onExited,
                  t.nodeRef,
                  (0, o.A)(t, [
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
                  ]));
              return s.createElement(
                g.A.Provider,
                { value: null },
                "function" == typeof r
                  ? r(e, n)
                  : s.cloneElement(s.Children.only(r), n),
              );
            }),
            t
          );
        })(s.Component);
      function m() {}
      (b.contextType = g.A),
        (b.propTypes = {}),
        (b.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: m,
          onEntering: m,
          onEntered: m,
          onExit: m,
          onExiting: m,
          onExited: m,
        }),
        (b.UNMOUNTED = p),
        (b.EXITED = f),
        (b.ENTERING = d),
        (b.ENTERED = h),
        (b.EXITING = y);
      const _ = b;
      var v = function (e, t) {
          return (
            e &&
            t &&
            t.split(" ").forEach(function (t) {
              return (
                (n = t),
                void ((r = e).classList
                  ? r.classList.remove(n)
                  : "string" == typeof r.className
                    ? (r.className = a(r.className, n))
                    : r.setAttribute(
                        "class",
                        a((r.className && r.className.baseVal) || "", n),
                      ))
              );
              var r, n;
            })
          );
        },
        S = (function (e) {
          function t() {
            for (
              var t, r = arguments.length, n = new Array(r), o = 0;
              o < r;
              o++
            )
              n[o] = arguments[o];
            return (
              ((t = e.call.apply(e, [this].concat(n)) || this).appliedClasses =
                { appear: {}, enter: {}, exit: {} }),
              (t.onEnter = function (e, r) {
                var n = t.resolveArguments(e, r),
                  o = n[0],
                  i = n[1];
                t.removeClasses(o, "exit"),
                  t.addClass(o, i ? "appear" : "enter", "base"),
                  t.props.onEnter && t.props.onEnter(e, r);
              }),
              (t.onEntering = function (e, r) {
                var n = t.resolveArguments(e, r),
                  o = n[0],
                  i = n[1] ? "appear" : "enter";
                t.addClass(o, i, "active"),
                  t.props.onEntering && t.props.onEntering(e, r);
              }),
              (t.onEntered = function (e, r) {
                var n = t.resolveArguments(e, r),
                  o = n[0],
                  i = n[1] ? "appear" : "enter";
                t.removeClasses(o, i),
                  t.addClass(o, i, "done"),
                  t.props.onEntered && t.props.onEntered(e, r);
              }),
              (t.onExit = function (e) {
                var r = t.resolveArguments(e)[0];
                t.removeClasses(r, "appear"),
                  t.removeClasses(r, "enter"),
                  t.addClass(r, "exit", "base"),
                  t.props.onExit && t.props.onExit(e);
              }),
              (t.onExiting = function (e) {
                var r = t.resolveArguments(e)[0];
                t.addClass(r, "exit", "active"),
                  t.props.onExiting && t.props.onExiting(e);
              }),
              (t.onExited = function (e) {
                var r = t.resolveArguments(e)[0];
                t.removeClasses(r, "exit"),
                  t.addClass(r, "exit", "done"),
                  t.props.onExited && t.props.onExited(e);
              }),
              (t.resolveArguments = function (e, r) {
                return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, r];
              }),
              (t.getClassNames = function (e) {
                var r = t.props.classNames,
                  n = "string" == typeof r,
                  o = n ? "" + (n && r ? r + "-" : "") + e : r[e];
                return {
                  baseClassName: o,
                  activeClassName: n ? o + "-active" : r[e + "Active"],
                  doneClassName: n ? o + "-done" : r[e + "Done"],
                };
              }),
              t
            );
          }
          (0, i.A)(t, e);
          var r = t.prototype;
          return (
            (r.addClass = function (e, t, r) {
              var n = this.getClassNames(t)[r + "ClassName"],
                o = this.getClassNames("enter").doneClassName;
              "appear" === t && "done" === r && o && (n += " " + o),
                "active" === r && e && c(e),
                n &&
                  ((this.appliedClasses[t][r] = n),
                  (function (e, t) {
                    e &&
                      t &&
                      t.split(" ").forEach(function (t) {
                        return (
                          (n = t),
                          void ((r = e).classList
                            ? r.classList.add(n)
                            : (function (e, t) {
                                return e.classList
                                  ? !!t && e.classList.contains(t)
                                  : -1 !==
                                      (
                                        " " +
                                        (e.className.baseVal || e.className) +
                                        " "
                                      ).indexOf(" " + t + " ");
                              })(r, n) ||
                              ("string" == typeof r.className
                                ? (r.className = r.className + " " + n)
                                : r.setAttribute(
                                    "class",
                                    ((r.className && r.className.baseVal) ||
                                      "") +
                                      " " +
                                      n,
                                  )))
                        );
                        var r, n;
                      });
                  })(e, n));
            }),
            (r.removeClasses = function (e, t) {
              var r = this.appliedClasses[t],
                n = r.base,
                o = r.active,
                i = r.done;
              (this.appliedClasses[t] = {}),
                n && v(e, n),
                o && v(e, o),
                i && v(e, i);
            }),
            (r.render = function () {
              var e = this.props,
                t = (e.classNames, (0, o.A)(e, ["classNames"]));
              return s.createElement(
                _,
                (0, n.A)({}, t, {
                  onEnter: this.onEnter,
                  onEntered: this.onEntered,
                  onEntering: this.onEntering,
                  onExit: this.onExit,
                  onExiting: this.onExiting,
                  onExited: this.onExited,
                }),
              );
            }),
            t
          );
        })(s.Component);
      (S.defaultProps = { classNames: "" }), (S.propTypes = {});
      const E = S;
    },
    2630: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => f });
      var n = r(1115),
        o = r(8584);
      var i = r(5033),
        a = r(626),
        s = r(8679);
      function l(e, t) {
        var r = Object.create(null);
        return (
          e &&
            a.Children.map(e, function (e) {
              return e;
            }).forEach(function (e) {
              r[e.key] = (function (e) {
                return t && (0, a.isValidElement)(e) ? t(e) : e;
              })(e);
            }),
          r
        );
      }
      function u(e, t, r) {
        return null != r[t] ? r[t] : e.props[t];
      }
      function g(e, t, r) {
        var n = l(e.children),
          o = (function (e, t) {
            function r(r) {
              return r in t ? t[r] : e[r];
            }
            (e = e || {}), (t = t || {});
            var n,
              o = Object.create(null),
              i = [];
            for (var a in e)
              a in t ? i.length && ((o[a] = i), (i = [])) : i.push(a);
            var s = {};
            for (var l in t) {
              if (o[l])
                for (n = 0; n < o[l].length; n++) {
                  var u = o[l][n];
                  s[o[l][n]] = r(u);
                }
              s[l] = r(l);
            }
            for (n = 0; n < i.length; n++) s[i[n]] = r(i[n]);
            return s;
          })(t, n);
        return (
          Object.keys(o).forEach(function (i) {
            var s = o[i];
            if ((0, a.isValidElement)(s)) {
              var l = i in t,
                g = i in n,
                c = t[i],
                p = (0, a.isValidElement)(c) && !c.props.in;
              !g || (l && !p)
                ? g || !l || p
                  ? g &&
                    l &&
                    (0, a.isValidElement)(c) &&
                    (o[i] = (0, a.cloneElement)(s, {
                      onExited: r.bind(null, s),
                      in: c.props.in,
                      exit: u(s, "exit", e),
                      enter: u(s, "enter", e),
                    }))
                  : (o[i] = (0, a.cloneElement)(s, { in: !1 }))
                : (o[i] = (0, a.cloneElement)(s, {
                    onExited: r.bind(null, s),
                    in: !0,
                    exit: u(s, "exit", e),
                    enter: u(s, "enter", e),
                  }));
            }
          }),
          o
        );
      }
      var c =
          Object.values ||
          function (e) {
            return Object.keys(e).map(function (t) {
              return e[t];
            });
          },
        p = (function (e) {
          function t(t, r) {
            var n,
              o = (n = e.call(this, t, r) || this).handleExited.bind(
                (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return e;
                })(n),
              );
            return (
              (n.state = {
                contextValue: { isMounting: !0 },
                handleExited: o,
                firstRender: !0,
              }),
              n
            );
          }
          (0, i.A)(t, e);
          var r = t.prototype;
          return (
            (r.componentDidMount = function () {
              (this.mounted = !0),
                this.setState({ contextValue: { isMounting: !1 } });
            }),
            (r.componentWillUnmount = function () {
              this.mounted = !1;
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              var r,
                n,
                o = t.children,
                i = t.handleExited;
              return {
                children: t.firstRender
                  ? ((r = e),
                    (n = i),
                    l(r.children, function (e) {
                      return (0, a.cloneElement)(e, {
                        onExited: n.bind(null, e),
                        in: !0,
                        appear: u(e, "appear", r),
                        enter: u(e, "enter", r),
                        exit: u(e, "exit", r),
                      });
                    }))
                  : g(e, o, i),
                firstRender: !1,
              };
            }),
            (r.handleExited = function (e, t) {
              var r = l(this.props.children);
              e.key in r ||
                (e.props.onExited && e.props.onExited(t),
                this.mounted &&
                  this.setState(function (t) {
                    var r = (0, o.A)({}, t.children);
                    return delete r[e.key], { children: r };
                  }));
            }),
            (r.render = function () {
              var e = this.props,
                t = e.component,
                r = e.childFactory,
                o = (0, n.A)(e, ["component", "childFactory"]),
                i = this.state.contextValue,
                l = c(this.state.children).map(r);
              return (
                delete o.appear,
                delete o.enter,
                delete o.exit,
                null === t
                  ? a.createElement(s.A.Provider, { value: i }, l)
                  : a.createElement(
                      s.A.Provider,
                      { value: i },
                      a.createElement(t, o, l),
                    )
              );
            }),
            t
          );
        })(a.Component);
      (p.propTypes = {}),
        (p.defaultProps = {
          component: "div",
          childFactory: function (e) {
            return e;
          },
        });
      const f = p;
    },
    8679: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      const n = r(626).createContext(null);
    },
    2851: (e, t) => {
      "use strict";
      /**
       * @license React
       * react.production.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = Symbol.for("react.transitional.element"),
        n = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        s = Symbol.for("react.consumer"),
        l = Symbol.for("react.context"),
        u = Symbol.for("react.forward_ref"),
        g = Symbol.for("react.suspense"),
        c = Symbol.for("react.memo"),
        p = Symbol.for("react.lazy"),
        f = Symbol.iterator;
      var d = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        h = Object.assign,
        y = {};
      function b(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = y),
          (this.updater = r || d);
      }
      function m() {}
      function _(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = y),
          (this.updater = r || d);
      }
      (b.prototype.isReactComponent = {}),
        (b.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "takes an object of state variables to update or a function which returns an object of state variables.",
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (b.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (m.prototype = b.prototype);
      var v = (_.prototype = new m());
      (v.constructor = _), h(v, b.prototype), (v.isPureReactComponent = !0);
      var S = Array.isArray,
        E = { H: null, A: null, T: null, S: null, V: null },
        T = Object.prototype.hasOwnProperty;
      function A(e, t, n, o, i, a) {
        return (
          (n = a.ref),
          {
            $$typeof: r,
            type: e,
            key: t,
            ref: void 0 !== n ? n : null,
            props: a,
          }
        );
      }
      function w(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r;
      }
      var j = /\/+/g;
      function O(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? ((r = "" + e.key),
            (n = { "=": "=0", ":": "=2" }),
            "$" +
              r.replace(/[=:]/g, function (e) {
                return n[e];
              }))
          : t.toString(36);
        var r, n;
      }
      function R() {}
      function C(e, t, o, i, a) {
        var s = typeof e;
        ("undefined" !== s && "boolean" !== s) || (e = null);
        var l,
          u,
          g = !1;
        if (null === e) g = !0;
        else
          switch (s) {
            case "bigint":
            case "string":
            case "number":
              g = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case r:
                case n:
                  g = !0;
                  break;
                case p:
                  return C((g = e._init)(e._payload), t, o, i, a);
              }
          }
        if (g)
          return (
            (a = a(e)),
            (g = "" === i ? "." + O(e, 0) : i),
            S(a)
              ? ((o = ""),
                null != g && (o = g.replace(j, "$&/") + "/"),
                C(a, t, o, "", function (e) {
                  return e;
                }))
              : null != a &&
                (w(a) &&
                  ((l = a),
                  (u =
                    o +
                    (null == a.key || (e && e.key === a.key)
                      ? ""
                      : ("" + a.key).replace(j, "$&/") + "/") +
                    g),
                  (a = A(l.type, u, void 0, 0, 0, l.props))),
                t.push(a)),
            1
          );
        g = 0;
        var c,
          d = "" === i ? "." : i + ":";
        if (S(e))
          for (var h = 0; h < e.length; h++)
            g += C((i = e[h]), t, o, (s = d + O(i, h)), a);
        else if (
          "function" ==
          typeof (h =
            null === (c = e) || "object" != typeof c
              ? null
              : "function" == typeof (c = (f && c[f]) || c["@@iterator"])
                ? c
                : null)
        )
          for (e = h.call(e), h = 0; !(i = e.next()).done; )
            g += C((i = i.value), t, o, (s = d + O(i, h++)), a);
        else if ("object" === s) {
          if ("function" == typeof e.then)
            return C(
              (function (e) {
                switch (e.status) {
                  case "fulfilled":
                    return e.value;
                  case "rejected":
                    throw e.reason;
                  default:
                    switch (
                      ("string" == typeof e.status
                        ? e.then(R, R)
                        : ((e.status = "pending"),
                          e.then(
                            function (t) {
                              "pending" === e.status &&
                                ((e.status = "fulfilled"), (e.value = t));
                            },
                            function (t) {
                              "pending" === e.status &&
                                ((e.status = "rejected"), (e.reason = t));
                            },
                          )),
                      e.status)
                    ) {
                      case "fulfilled":
                        return e.value;
                      case "rejected":
                        throw e.reason;
                    }
                }
                throw e;
              })(e),
              t,
              o,
              i,
              a,
            );
          throw (
            ((t = String(e)),
            Error(
              "Objects are not valid as a React child (found: " +
                ("[object Object]" === t
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t) +
                "). If you meant to render a collection of children, use an array instead.",
            ))
          );
        }
        return g;
      }
      function N(e, t, r) {
        if (null == e) return e;
        var n = [],
          o = 0;
        return (
          C(e, n, "", "", function (e) {
            return t.call(r, e, o++);
          }),
          n
        );
      }
      function P(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()).then(
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 2), (e._result = t));
            },
          ),
            -1 === e._status && ((e._status = 0), (e._result = t));
        }
        if (1 === e._status) return e._result.default;
        throw e._result;
      }
      var I =
        "function" == typeof reportError
          ? reportError
          : function (e) {
              if (
                "object" == typeof window &&
                "function" == typeof window.ErrorEvent
              ) {
                var t = new window.ErrorEvent("error", {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    "object" == typeof e &&
                    null !== e &&
                    "string" == typeof e.message
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                "object" == typeof process &&
                "function" == typeof process.emit
              )
                return void process.emit("uncaughtException", e);
              console.error(e);
            };
      function x() {}
      (t.Children = {
        map: N,
        forEach: function (e, t, r) {
          N(
            e,
            function () {
              t.apply(this, arguments);
            },
            r,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            N(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            N(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!w(e))
            throw Error(
              "React.Children.only expected to receive a single React element child.",
            );
          return e;
        },
      }),
        (t.Component = b),
        (t.Fragment = o),
        (t.Profiler = a),
        (t.PureComponent = _),
        (t.StrictMode = i),
        (t.Suspense = g),
        (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = E),
        (t.__COMPILER_RUNTIME = {
          __proto__: null,
          c: function (e) {
            return E.H.useMemoCache(e);
          },
        }),
        (t.cache = function (e) {
          return function () {
            return e.apply(null, arguments);
          };
        }),
        (t.cloneElement = function (e, t, r) {
          if (null == e)
            throw Error(
              "The argument must be a React element, but you passed " + e + ".",
            );
          var n = h({}, e.props),
            o = e.key;
          if (null != t)
            for (i in (void 0 !== t.ref && void 0,
            void 0 !== t.key && (o = "" + t.key),
            t))
              !T.call(t, i) ||
                "key" === i ||
                "__self" === i ||
                "__source" === i ||
                ("ref" === i && void 0 === t.ref) ||
                (n[i] = t[i]);
          var i = arguments.length - 2;
          if (1 === i) n.children = r;
          else if (1 < i) {
            for (var a = Array(i), s = 0; s < i; s++) a[s] = arguments[s + 2];
            n.children = a;
          }
          return A(e.type, o, void 0, 0, 0, n);
        }),
        (t.createContext = function (e) {
          return (
            ((e = {
              $$typeof: l,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = e),
            (e.Consumer = { $$typeof: s, _context: e }),
            e
          );
        }),
        (t.createElement = function (e, t, r) {
          var n,
            o = {},
            i = null;
          if (null != t)
            for (n in (void 0 !== t.key && (i = "" + t.key), t))
              T.call(t, n) &&
                "key" !== n &&
                "__self" !== n &&
                "__source" !== n &&
                (o[n] = t[n]);
          var a = arguments.length - 2;
          if (1 === a) o.children = r;
          else if (1 < a) {
            for (var s = Array(a), l = 0; l < a; l++) s[l] = arguments[l + 2];
            o.children = s;
          }
          if (e && e.defaultProps)
            for (n in (a = e.defaultProps)) void 0 === o[n] && (o[n] = a[n]);
          return A(e, i, void 0, 0, 0, o);
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: u, render: e };
        }),
        (t.isValidElement = w),
        (t.lazy = function (e) {
          return {
            $$typeof: p,
            _payload: { _status: -1, _result: e },
            _init: P,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: c, type: e, compare: void 0 === t ? null : t };
        }),
        (t.startTransition = function (e) {
          var t = E.T,
            r = {};
          E.T = r;
          try {
            var n = e(),
              o = E.S;
            null !== o && o(r, n),
              "object" == typeof n &&
                null !== n &&
                "function" == typeof n.then &&
                n.then(x, I);
          } catch (e) {
            I(e);
          } finally {
            E.T = t;
          }
        }),
        (t.unstable_useCacheRefresh = function () {
          return E.H.useCacheRefresh();
        }),
        (t.use = function (e) {
          return E.H.use(e);
        }),
        (t.useActionState = function (e, t, r) {
          return E.H.useActionState(e, t, r);
        }),
        (t.useCallback = function (e, t) {
          return E.H.useCallback(e, t);
        }),
        (t.useContext = function (e) {
          return E.H.useContext(e);
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e, t) {
          return E.H.useDeferredValue(e, t);
        }),
        (t.useEffect = function (e, t, r) {
          var n = E.H;
          if ("function" == typeof r)
            throw Error(
              "useEffect CRUD overload is not enabled in this build of React.",
            );
          return n.useEffect(e, t);
        }),
        (t.useId = function () {
          return E.H.useId();
        }),
        (t.useImperativeHandle = function (e, t, r) {
          return E.H.useImperativeHandle(e, t, r);
        }),
        (t.useInsertionEffect = function (e, t) {
          return E.H.useInsertionEffect(e, t);
        }),
        (t.useLayoutEffect = function (e, t) {
          return E.H.useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return E.H.useMemo(e, t);
        }),
        (t.useOptimistic = function (e, t) {
          return E.H.useOptimistic(e, t);
        }),
        (t.useReducer = function (e, t, r) {
          return E.H.useReducer(e, t, r);
        }),
        (t.useRef = function (e) {
          return E.H.useRef(e);
        }),
        (t.useState = function (e) {
          return E.H.useState(e);
        }),
        (t.useSyncExternalStore = function (e, t, r) {
          return E.H.useSyncExternalStore(e, t, r);
        }),
        (t.useTransition = function () {
          return E.H.useTransition();
        }),
        (t.version = "19.1.1");
    },
    626: (e, t, r) => {
      "use strict";
      e.exports = r(2851);
    },
    7219: (e, t) => {
      "use strict";
      /**
       * @license React
       * scheduler.production.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ function r(e, t) {
        var r = e.length;
        e.push(t);
        e: for (; 0 < r; ) {
          var n = (r - 1) >>> 1,
            o = e[n];
          if (!(0 < i(o, t))) break e;
          (e[n] = t), (e[r] = o), (r = n);
        }
      }
      function n(e) {
        return 0 === e.length ? null : e[0];
      }
      function o(e) {
        if (0 === e.length) return null;
        var t = e[0],
          r = e.pop();
        if (r !== t) {
          e[0] = r;
          e: for (var n = 0, o = e.length, a = o >>> 1; n < a; ) {
            var s = 2 * (n + 1) - 1,
              l = e[s],
              u = s + 1,
              g = e[u];
            if (0 > i(l, r))
              u < o && 0 > i(g, l)
                ? ((e[n] = g), (e[u] = r), (n = u))
                : ((e[n] = l), (e[s] = r), (n = s));
            else {
              if (!(u < o && 0 > i(g, r))) break e;
              (e[n] = g), (e[u] = r), (n = u);
            }
          }
        }
        return t;
      }
      function i(e, t) {
        var r = e.sortIndex - t.sortIndex;
        return 0 !== r ? r : e.id - t.id;
      }
      if (
        ((t.unstable_now = void 0),
        "object" == typeof performance && "function" == typeof performance.now)
      ) {
        var a = performance;
        t.unstable_now = function () {
          return a.now();
        };
      } else {
        var s = Date,
          l = s.now();
        t.unstable_now = function () {
          return s.now() - l;
        };
      }
      var u = [],
        g = [],
        c = 1,
        p = null,
        f = 3,
        d = !1,
        h = !1,
        y = !1,
        b = !1,
        m = "function" == typeof setTimeout ? setTimeout : null,
        _ = "function" == typeof clearTimeout ? clearTimeout : null,
        v = "undefined" != typeof setImmediate ? setImmediate : null;
      function S(e) {
        for (var t = n(g); null !== t; ) {
          if (null === t.callback) o(g);
          else {
            if (!(t.startTime <= e)) break;
            o(g), (t.sortIndex = t.expirationTime), r(u, t);
          }
          t = n(g);
        }
      }
      function E(e) {
        if (((y = !1), S(e), !h))
          if (null !== n(u)) (h = !0), A || ((A = !0), T());
          else {
            var t = n(g);
            null !== t && I(E, t.startTime - e);
          }
      }
      var T,
        A = !1,
        w = -1,
        j = 5,
        O = -1;
      function R() {
        return !!b || !(t.unstable_now() - O < j);
      }
      function C() {
        if (((b = !1), A)) {
          var e = t.unstable_now();
          O = e;
          var r = !0;
          try {
            e: {
              (h = !1), y && ((y = !1), _(w), (w = -1)), (d = !0);
              var i = f;
              try {
                t: {
                  for (
                    S(e), p = n(u);
                    null !== p && !(p.expirationTime > e && R());
                  ) {
                    var a = p.callback;
                    if ("function" == typeof a) {
                      (p.callback = null), (f = p.priorityLevel);
                      var s = a(p.expirationTime <= e);
                      if (((e = t.unstable_now()), "function" == typeof s)) {
                        (p.callback = s), S(e), (r = !0);
                        break t;
                      }
                      p === n(u) && o(u), S(e);
                    } else o(u);
                    p = n(u);
                  }
                  if (null !== p) r = !0;
                  else {
                    var l = n(g);
                    null !== l && I(E, l.startTime - e), (r = !1);
                  }
                }
                break e;
              } finally {
                (p = null), (f = i), (d = !1);
              }
              r = void 0;
            }
          } finally {
            r ? T() : (A = !1);
          }
        }
      }
      if ("function" == typeof v)
        T = function () {
          v(C);
        };
      else if ("undefined" != typeof MessageChannel) {
        var N = new MessageChannel(),
          P = N.port2;
        (N.port1.onmessage = C),
          (T = function () {
            P.postMessage(null);
          });
      } else
        T = function () {
          m(C, 0);
        };
      function I(e, r) {
        w = m(function () {
          e(t.unstable_now());
        }, r);
      }
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
              )
            : (j = 0 < e ? Math.floor(1e3 / e) : 5);
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return f;
        }),
        (t.unstable_next = function (e) {
          switch (f) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = f;
          }
          var r = f;
          f = t;
          try {
            return e();
          } finally {
            f = r;
          }
        }),
        (t.unstable_requestPaint = function () {
          b = !0;
        }),
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
          var r = f;
          f = e;
          try {
            return t();
          } finally {
            f = r;
          }
        }),
        (t.unstable_scheduleCallback = function (e, o, i) {
          var a = t.unstable_now();
          switch (
            ("object" == typeof i && null !== i
              ? (i = "number" == typeof (i = i.delay) && 0 < i ? a + i : a)
              : (i = a),
            e)
          ) {
            case 1:
              var s = -1;
              break;
            case 2:
              s = 250;
              break;
            case 5:
              s = 1073741823;
              break;
            case 4:
              s = 1e4;
              break;
            default:
              s = 5e3;
          }
          return (
            (e = {
              id: c++,
              callback: o,
              priorityLevel: e,
              startTime: i,
              expirationTime: (s = i + s),
              sortIndex: -1,
            }),
            i > a
              ? ((e.sortIndex = i),
                r(g, e),
                null === n(u) &&
                  e === n(g) &&
                  (y ? (_(w), (w = -1)) : (y = !0), I(E, i - a)))
              : ((e.sortIndex = s),
                r(u, e),
                h || d || ((h = !0), A || ((A = !0), T()))),
            e
          );
        }),
        (t.unstable_shouldYield = R),
        (t.unstable_wrapCallback = function (e) {
          var t = f;
          return function () {
            var r = f;
            f = t;
            try {
              return e.apply(this, arguments);
            } finally {
              f = r;
            }
          };
        });
    },
    1016: (e, t, r) => {
      "use strict";
      e.exports = r(7219);
    },
    7315: (e, t, r) => {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim.production.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(626);
      var o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        i = n.useState,
        a = n.useEffect,
        s = n.useLayoutEffect,
        l = n.useDebugValue;
      function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !o(e, r);
        } catch (e) {
          return !0;
        }
      }
      var g =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var r = t(),
                n = i({ inst: { value: r, getSnapshot: t } }),
                o = n[0].inst,
                g = n[1];
              return (
                s(
                  function () {
                    (o.value = r), (o.getSnapshot = t), u(o) && g({ inst: o });
                  },
                  [e, r, t],
                ),
                a(
                  function () {
                    return (
                      u(o) && g({ inst: o }),
                      e(function () {
                        u(o) && g({ inst: o });
                      })
                    );
                  },
                  [e],
                ),
                l(r),
                r
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : g;
    },
    1702: (e, t, r) => {
      "use strict";
      e.exports = r(7315);
    },
    8584: (e, t, r) => {
      "use strict";
      function n() {
        return (
          (n = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          n.apply(null, arguments)
        );
      }
      r.d(t, { A: () => n });
    },
    5033: (e, t, r) => {
      "use strict";
      function n(e, t) {
        return (
          (n = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          n(e, t)
        );
      }
      function o(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          n(e, t);
      }
      r.d(t, { A: () => o });
    },
    1115: (e, t, r) => {
      "use strict";
      function n(e, t) {
        if (null == e) return {};
        var r = {};
        for (var n in e)
          if ({}.hasOwnProperty.call(e, n)) {
            if (-1 !== t.indexOf(n)) continue;
            r[n] = e[n];
          }
        return r;
      }
      r.d(t, { A: () => n });
    },
    4629: (e, t, r) => {
      "use strict";
      r.d(t, { Cg: () => n });
      function n(e, t, r, n) {
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
          for (var s = e.length - 1; s >= 0; s--)
            (o = e[s]) &&
              (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
        return i > 3 && a && Object.defineProperty(t, r, a), a;
      }
      Object.create;
      Object.create;
      "function" == typeof SuppressedError && SuppressedError;
    },
  },
]);
