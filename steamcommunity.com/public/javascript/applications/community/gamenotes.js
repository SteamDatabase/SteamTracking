/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6838],
  {
    71543: (e) => {
      e.exports = {
        Page: "gamenotes_Page_ZUB8z",
        Content: "gamenotes_Content_1aZdz",
      };
    },
    2508: (e) => {
      e.exports = {
        LoadingWrapper: "throbber_LoadingWrapper_3Z36h",
        Static: "throbber_Static_kwzRJ",
        none: "throbber_none_2iT5l",
        bottomCircle: "throbber_bottomCircle_3-sjx",
        noString: "throbber_noString_M4pF_",
        Throbber: "throbber_Throbber_7MdwT",
        throbber_small: "throbber_throbber_small_29-XT",
        throbber_medium: "throbber_throbber_medium_1yqSo",
        throbber_large: "throbber_throbber_large_1u2tL",
        throbber_center_wrapper: "throbber_throbber_center_wrapper_Yi4EM",
        ThrobberText: "throbber_ThrobberText_1Zlvf",
        blur: "throbber_blur_3ebLc",
        ThrobberRoundLoop: "throbber_ThrobberRoundLoop_3SEk8",
        roundOuterOutline: "throbber_roundOuterOutline_3M8Ar",
        roundOuter: "throbber_roundOuter_3H7At",
        roundFill: "throbber_roundFill_2FWWt",
        ThrobberFillLoop: "throbber_ThrobberFillLoop_1-rlb",
        topCircle: "throbber_topCircle_3znUF",
        circlePulse: "throbber_circlePulse_1oQUO",
        ThrobberTopCircleLoop: "throbber_ThrobberTopCircleLoop_3oqZE",
        ThrobberBottomCircleLoop: "throbber_ThrobberBottomCircleLoop_3veQr",
        roundThrobber15: "throbber_roundThrobber15_1gQte",
        roundThrobber14: "throbber_roundThrobber14_3DXeR",
        roundThrobber13: "throbber_roundThrobber13_5VEyI",
        roundThrobber12: "throbber_roundThrobber12_wOdFm",
        roundThrobber11: "throbber_roundThrobber11_3Jmyz",
        roundThrobber10: "throbber_roundThrobber10_3QwXn",
        roundThrobber09: "throbber_roundThrobber09_2Yhvq",
        roundThrobber08: "throbber_roundThrobber08_3HcIU",
        roundThrobber07: "throbber_roundThrobber07__2fn3",
        roundThrobber06: "throbber_roundThrobber06_2gCCI",
        roundThrobber05: "throbber_roundThrobber05_1SrtW",
        roundThrobber04: "throbber_roundThrobber04_2P5xs",
        roundThrobber03: "throbber_roundThrobber03_3zYDa",
        roundThrobber02: "throbber_roundThrobber02_2_KYJ",
        roundThrobber01: "throbber_roundThrobber01_3N41H",
        ThrobberRoundLoopThickness: "throbber_ThrobberRoundLoopThickness_1wAwc",
        throbber_xlarge: "throbber_throbber_xlarge_2jzZM",
        throbber_xxlarge: "throbber_throbber_xxlarge_1DFOT",
        ThrobberDelayAppear: "throbber_ThrobberDelayAppear_34XSs",
        Visible: "throbber_Visible_1ziaT",
      };
    },
    92994: (e) => {
      "use strict";
      var r,
        t = (function () {
          function e(e, r) {
            if ("function" != typeof e)
              throw new TypeError(
                "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " +
                  e +
                  "."
              );
            (this._batchLoadFn = e),
              (this._maxBatchSize = (function (e) {
                var r = !e || !1 !== e.batch;
                if (!r) return 1;
                var t = e && e.maxBatchSize;
                if (void 0 === t) return 1 / 0;
                if ("number" != typeof t || t < 1)
                  throw new TypeError(
                    "maxBatchSize must be a positive number: " + t
                  );
                return t;
              })(r)),
              (this._batchScheduleFn = (function (e) {
                var r = e && e.batchScheduleFn;
                if (void 0 === r) return i;
                if ("function" != typeof r)
                  throw new TypeError(
                    "batchScheduleFn must be a function: " + r
                  );
                return r;
              })(r)),
              (this._cacheKeyFn = (function (e) {
                var r = e && e.cacheKeyFn;
                if (void 0 === r)
                  return function (e) {
                    return e;
                  };
                if ("function" != typeof r)
                  throw new TypeError("cacheKeyFn must be a function: " + r);
                return r;
              })(r)),
              (this._cacheMap = (function (e) {
                var r = !e || !1 !== e.cache;
                if (!r) return null;
                var t = e && e.cacheMap;
                if (void 0 === t) return new Map();
                if (null !== t) {
                  var i = ["get", "set", "delete", "clear"].filter(function (
                    e
                  ) {
                    return t && "function" != typeof t[e];
                  });
                  if (0 !== i.length)
                    throw new TypeError(
                      "Custom cacheMap missing methods: " + i.join(", ")
                    );
                }
                return t;
              })(r)),
              (this._batch = null),
              (this.name = (function (e) {
                if (e && e.name) return e.name;
                return null;
              })(r));
          }
          var r = e.prototype;
          return (
            (r.load = function (e) {
              if (null == e)
                throw new TypeError(
                  "The loader.load() function must be called with a value, but got: " +
                    String(e) +
                    "."
                );
              var r = (function (e) {
                  var r = e._batch;
                  if (
                    null !== r &&
                    !r.hasDispatched &&
                    r.keys.length < e._maxBatchSize
                  )
                    return r;
                  var t = { hasDispatched: !1, keys: [], callbacks: [] };
                  return (
                    (e._batch = t),
                    e._batchScheduleFn(function () {
                      !(function (e, r) {
                        if (((r.hasDispatched = !0), 0 === r.keys.length))
                          return void a(r);
                        var t;
                        try {
                          t = e._batchLoadFn(r.keys);
                        } catch (t) {
                          return n(
                            e,
                            r,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " +
                                String(t) +
                                "."
                            )
                          );
                        }
                        if (!t || "function" != typeof t.then)
                          return n(
                            e,
                            r,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " +
                                String(t) +
                                "."
                            )
                          );
                        t.then(function (e) {
                          if (!o(e))
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " +
                                String(e) +
                                "."
                            );
                          if (e.length !== r.keys.length)
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n" +
                                String(r.keys) +
                                "\n\nValues:\n" +
                                String(e)
                            );
                          a(r);
                          for (var t = 0; t < r.callbacks.length; t++) {
                            var i = e[t];
                            i instanceof Error
                              ? r.callbacks[t].reject(i)
                              : r.callbacks[t].resolve(i);
                          }
                        }).catch(function (t) {
                          n(e, r, t);
                        });
                      })(e, t);
                    }),
                    t
                  );
                })(this),
                t = this._cacheMap,
                i = this._cacheKeyFn(e);
              if (t) {
                var s = t.get(i);
                if (s) {
                  var c = r.cacheHits || (r.cacheHits = []);
                  return new Promise(function (e) {
                    c.push(function () {
                      e(s);
                    });
                  });
                }
              }
              r.keys.push(e);
              var l = new Promise(function (e, t) {
                r.callbacks.push({ resolve: e, reject: t });
              });
              return t && t.set(i, l), l;
            }),
            (r.loadMany = function (e) {
              if (!o(e))
                throw new TypeError(
                  "The loader.loadMany() function must be called with Array<key> but got: " +
                    e +
                    "."
                );
              for (var r = [], t = 0; t < e.length; t++)
                r.push(
                  this.load(e[t]).catch(function (e) {
                    return e;
                  })
                );
              return Promise.all(r);
            }),
            (r.clear = function (e) {
              var r = this._cacheMap;
              if (r) {
                var t = this._cacheKeyFn(e);
                r.delete(t);
              }
              return this;
            }),
            (r.clearAll = function () {
              var e = this._cacheMap;
              return e && e.clear(), this;
            }),
            (r.prime = function (e, r) {
              var t = this._cacheMap;
              if (t) {
                var i,
                  n = this._cacheKeyFn(e);
                if (void 0 === t.get(n))
                  r instanceof Error
                    ? (i = Promise.reject(r)).catch(function () {})
                    : (i = Promise.resolve(r)),
                    t.set(n, i);
              }
              return this;
            }),
            e
          );
        })(),
        i =
          "object" == typeof process && "function" == typeof process.nextTick
            ? function (e) {
                r || (r = Promise.resolve()),
                  r.then(function () {
                    process.nextTick(e);
                  });
              }
            : "function" == typeof setImmediate
            ? function (e) {
                setImmediate(e);
              }
            : function (e) {
                setTimeout(e);
              };
      function n(e, r, t) {
        a(r);
        for (var i = 0; i < r.keys.length; i++)
          e.clear(r.keys[i]), r.callbacks[i].reject(t);
      }
      function a(e) {
        if (e.cacheHits)
          for (var r = 0; r < e.cacheHits.length; r++) e.cacheHits[r]();
      }
      function o(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "number" == typeof e.length &&
          (0 === e.length ||
            (e.length > 0 &&
              Object.prototype.hasOwnProperty.call(e, e.length - 1)))
        );
      }
      e.exports = t;
    },
    15642: (e, r, t) => {
      "use strict";
      t.d(r, { V: () => s });
      var i = t(89526),
        n = t(13806),
        a = t(2508),
        o = t.n(a);
      const s = i.memo(function (e) {
        const {
          className: r,
          size: t,
          string: a,
          position: s,
          static: u,
          msDelayAppear: b,
        } = e;
        let h = [o().LoadingWrapper, "SteamLogoThrobber", c(t)];
        const [m, f] = i.useState(!b);
        return (
          (0, i.useEffect)(() => {
            if (m) return;
            const e = setTimeout(() => f(!0), b);
            return () => clearTimeout(e);
          }, [b, m]),
          void 0 === a && h.push(o().noString),
          r && h.push(r),
          u && h.push(o().Static),
          i.createElement(
            "div",
            {
              className: (0, n.Z)(
                "center" == s && o().throbber_center_wrapper,
                b && o().ThrobberDelayAppear,
                m && o().Visible
              ),
            },
            m &&
              i.createElement(
                "div",
                { className: h.join(" ") },
                i.createElement(
                  "div",
                  { className: o().Throbber },
                  i.createElement(l, { className: o().base }),
                  i.createElement(l, { className: o().blur })
                )
              ),
            Boolean(a) &&
              i.createElement("div", { className: o().ThrobberText }, a)
          )
        );
      });
      function c(e) {
        switch (e) {
          case "small":
            return o().throbber_small;
          case "medium":
            return o().throbber_medium;
          case "xlarge":
            return o().throbber_xlarge;
          case "xxlarge":
            return o().throbber_xxlarge;
          default:
            return o().throbber_large;
        }
      }
      function l(e) {
        let r = "SVGIcon_Button SVGIcon_Throbber ";
        return (
          e.className && (r += e.className),
          i.createElement(
            "svg",
            {
              version: "1.1",
              id: "base",
              xmlns: "http://www.w3.org/2000/svg",
              className: r,
              x: "0px",
              y: "0px",
              width: "256px",
              height: "256px",
              viewBox: "0 0 256 256",
            },
            i.createElement(
              "g",
              { className: o().partCircle },
              i.createElement("path", {
                className: o().roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
              }),
              i.createElement("path", {
                className: o().roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M201.432,101.166",
              }),
              i.createElement("path", {
                className: o().roundOuter,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
              })
            ),
            i.createElement(
              "g",
              { className: o().mainOutline },
              i.createElement("path", {
                className: o().roundFill,
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: o().roundOuterOutline,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: o().roundThrobber01,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: o().roundThrobber02,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: o().roundThrobber03,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: o().roundThrobber04,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: o().roundThrobber05,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: o().roundThrobber06,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: o().roundThrobber07,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: o().roundThrobber08,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: o().roundThrobber09,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: o().roundThrobber10,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: o().roundThrobber11,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: o().roundThrobber12,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: o().roundThrobber13,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: o().roundThrobber14,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              }),
              i.createElement("path", {
                className: o().roundThrobber15,
                strokeLinecap: "butt",
                fill: "none",
                stroke: "#ffffff",
                strokeWidth: "6",
                strokeMiterlimit: "10",
                d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
              })
            ),
            i.createElement(
              "g",
              { className: o().bottomCircle },
              i.createElement("path", {
                fill: "#ffffff",
                d: "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
              })
            ),
            i.createElement(
              "g",
              { className: o().topCircle },
              i.createElement("circle", {
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
    },
    88870: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, { default: () => C });
      var i = t(89526),
        n = t(59934);
      const a = {
        List: () => "/notes/list",
        AppNotes: (e, r) => `/notes/app/${e}/${null != r ? r : ""}`,
      };
      var o = t(565),
        s = t(33940),
        c = t(5615),
        l = t(17922),
        u = t(60209),
        b = t(45878),
        h = t(19320);
      const m = b.Message;
      class f extends m {
        constructor(e = null) {
          super(),
            f.prototype.id || h.aR(f.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  id: { n: 1, br: h.FE.readString, bw: h.Xc.writeString },
                  appid: { n: 2, br: h.FE.readUint32, bw: h.Xc.writeUint32 },
                  shortcut_name: {
                    n: 3,
                    br: h.FE.readString,
                    bw: h.Xc.writeString,
                  },
                  shortcutid: {
                    n: 4,
                    br: h.FE.readUint32,
                    bw: h.Xc.writeUint32,
                  },
                  ordinal: { n: 5, br: h.FE.readUint32, bw: h.Xc.writeUint32 },
                  time_created: {
                    n: 6,
                    br: h.FE.readUint32,
                    bw: h.Xc.writeUint32,
                  },
                  time_modified: {
                    n: 7,
                    br: h.FE.readUint32,
                    bw: h.Xc.writeUint32,
                  },
                  title: { n: 8, br: h.FE.readString, bw: h.Xc.writeString },
                  content: { n: 9, br: h.FE.readString, bw: h.Xc.writeString },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = h.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return h.TA(f.M(), e, r);
        }
        static fromObject(e) {
          return h.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new b.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return h.F(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          h.l2(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNote";
        }
      }
      class d extends m {
        constructor(e = null) {
          super(),
            d.prototype.appid || h.aR(d.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  appid: { n: 1, br: h.FE.readUint32, bw: h.Xc.writeUint32 },
                  shortcut_name: {
                    n: 2,
                    br: h.FE.readString,
                    bw: h.Xc.writeString,
                  },
                  shortcutid: {
                    n: 3,
                    br: h.FE.readUint32,
                    bw: h.Xc.writeUint32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = h.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return h.TA(d.M(), e, r);
        }
        static fromObject(e) {
          return h.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new b.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return h.F(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          h.l2(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetNotesForGame_Request";
        }
      }
      class p extends m {
        constructor(e = null) {
          super(),
            p.prototype.notes || h.aR(p.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { notes: { n: 1, c: f, r: !0, q: !0 } },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = h.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return h.TA(p.M(), e, r);
        }
        static fromObject(e) {
          return h.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new b.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return h.F(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          h.l2(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetNotesForGame_Response";
        }
      }
      class _ extends m {
        constructor(e = null) {
          super(),
            _.prototype.note_id || h.aR(_.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  note_id: { n: 1, br: h.FE.readString, bw: h.Xc.writeString },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = h.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return h.TA(_.M(), e, r);
        }
        static fromObject(e) {
          return h.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new b.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return h.F(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          h.l2(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_SaveNote_Response";
        }
      }
      class y extends m {
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new y();
        }
        static deserializeBinary(e) {
          let r = new b.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_DeleteNote_Response";
        }
      }
      class g extends m {
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new g();
        }
        static deserializeBinary(e) {
          let r = new b.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Request";
        }
      }
      class B extends m {
        constructor(e = null) {
          super(),
            B.prototype.games_with_notes || h.aR(B.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: { games_with_notes: { n: 1, c: w, r: !0, q: !0 } },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = h.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return h.TA(B.M(), e, r);
        }
        static fromObject(e) {
          return h.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new b.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return h.F(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          h.l2(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Response";
        }
      }
      class w extends m {
        constructor(e = null) {
          super(),
            w.prototype.appid || h.aR(w.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  appid: { n: 1, br: h.FE.readUint32, bw: h.Xc.writeUint32 },
                  shortcutid: {
                    n: 2,
                    br: h.FE.readUint32,
                    bw: h.Xc.writeUint32,
                  },
                  shortcut_name: {
                    n: 3,
                    br: h.FE.readString,
                    bw: h.Xc.writeString,
                  },
                  last_modified: {
                    n: 4,
                    br: h.FE.readUint32,
                    bw: h.Xc.writeUint32,
                  },
                  note_count: {
                    n: 5,
                    br: h.FE.readUint32,
                    bw: h.Xc.writeUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = h.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return h.TA(w.M(), e, r);
        }
        static fromObject(e) {
          return h.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new b.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return h.F(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new b.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          h.l2(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new b.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserGameNotes_GetGamesWithNotes_Response_GameWithNotes";
        }
      }
      var T;
      !(function (e) {
        (e.GetNotesForGame = function (e, r) {
          return e.SendMsg("UserGameNotes.GetNotesForGame#1", r, p, {
            ePrivilege: 1,
          });
        }),
          (e.SaveNote = function (e, r) {
            return e.SendMsg("UserGameNotes.SaveNote#1", r, _, {
              ePrivilege: 1,
            });
          }),
          (e.DeleteNote = function (e, r) {
            return e.SendMsg("UserGameNotes.DeleteNote#1", r, y, {
              ePrivilege: 1,
            });
          }),
          (e.GetGamesWithNotes = function (e, r) {
            return e.SendMsg("UserGameNotes.GetGamesWithNotes#1", r, B, {
              ePrivilege: 1,
            });
          });
      })(T || (T = {}));
      class k {
        static GetGamesWithNotes(e) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            const r = l.gA.Init(g);
            return (yield T.GetGamesWithNotes(e, r))
              .Body()
              .toObject().games_with_notes;
          });
        }
        static GetGameNotesList(e, r) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            const t = l.gA.Init(d);
            t.Body().set_appid(r);
            return (yield T.GetNotesForGame(e, t)).Body().toObject().notes;
          });
        }
      }
      var M = t(92994),
        v = t.n(M),
        z = (t(38800), t(67737), t(67237)),
        E = t(5545),
        N = t(6960);
      let S;
      const F = 864e5;
      function W(e) {
        return `appinfo_${e}_${E.De.LANGUAGE}`;
      }
      function L(e) {
        return Boolean(e && Date.now() - e.timeCached < F);
      }
      function G(e) {
        const r = (0, u.bY)(),
          t = (0, u.y$)();
        return (0, c.useQuery)(
          ["appinfo", e],
          () =>
            (0, s.mG)(this, void 0, void 0, function* () {
              return (function (e, r) {
                return (
                  S ||
                    (S = new (v())(
                      (t) =>
                        (0, s.mG)(this, void 0, void 0, function* () {
                          const i = new Map();
                          (yield Promise.all(t.map((e) => r.GetObject(W(e)))))
                            .filter(L)
                            .forEach(({ value: e }) => i.set(e.appid, e));
                          const n = t.slice().filter((e) => !i.has(e));
                          if (n.length) {
                            const t = l.gA.Init(z.Fi);
                            t.Body().set_language((0, N.jM)(E.De.LANGUAGE)),
                              t.Body().set_appids(n);
                            const a = yield z.AE.GetApps(e, t);
                            if (1 != a.GetEResult()) throw a.GetErrorMessage();
                            a.Body()
                              .toObject()
                              .apps.forEach((e) => {
                                r.StoreObject(W(e.appid), {
                                  timeCached: Date.now(),
                                  value: e,
                                }),
                                  i.set(e.appid, e);
                              });
                          }
                          return t.map((e) => i.get(e));
                        }),
                      { cache: !1 }
                    )),
                  S
                );
              })(r, t).load(e);
            }),
          { staleTime: F, enabled: !!e }
        ).data;
      }
      var R = t(15642);
      function O() {
        const { data: e, isLoading: r } = (function () {
          const e = (0, u.bY)();
          return (0, c.useQuery)(["GameNotes", "GamesWithNotes"], () =>
            k.GetGamesWithNotes(e)
          );
        })();
        return r
          ? i.createElement(R.V, { msDelayAppear: 300 })
          : i.createElement(
              "div",
              null,
              i.createElement("h1", null, "Notes"),
              i.createElement(
                "ul",
                null,
                e.map((e) => i.createElement(j, { key: e.appid, game: e }))
              )
            );
      }
      function j(e) {
        const { game: r } = e,
          t = G(r.appid);
        return i.createElement(
          "li",
          null,
          i.createElement(
            o.rU,
            { to: a.AppNotes(r.appid) },
            null == t ? void 0 : t.name
          )
        );
      }
      var A = t(71543);
      function U() {
        const e = (0, n.$B)(),
          r = Number(e.params.appid),
          t = e.params.noteid,
          { data: s } = (function (e) {
            const r = (0, u.bY)();
            return (0, c.useQuery)(
              ["GameNotes", "NotesByAppID", e],
              () => k.GetGameNotesList(r, e),
              { enabled: !!e }
            );
          })(r);
        let l;
        s && t && (l = s.find((e) => e.id === t));
        const b = (0, n.k6)();
        return (
          i.useLayoutEffect(() => {
            !t && s && s.length && s[0].id && b.replace(a.AppNotes(r, s[0].id));
          }, [b, r, t, s]),
          i.createElement(
            "div",
            { className: A.Page },
            i.createElement(
              "div",
              { className: A.Content },
              l && i.createElement(x, { note: l })
            ),
            i.createElement(
              "div",
              { className: A.NoteList },
              i.createElement(o.rU, { to: a.List() }, "< Back to games list"),
              i.createElement(
                "ul",
                null,
                null == s
                  ? void 0
                  : s.map((e) =>
                      i.createElement(
                        "li",
                        { key: e.id },
                        i.createElement(
                          o.rU,
                          { to: a.AppNotes(r, e.id) },
                          e.title
                        )
                      )
                    )
              )
            )
          )
        );
      }
      function x(e) {
        const { note: r } = e;
        return i.createElement(
          "div",
          { style: { whiteSpace: "pre-wrap" } },
          r.content
        );
      }
      function C(e) {
        return i.createElement(
          n.rs,
          null,
          i.createElement(n.AW, { path: a.List() }, i.createElement(O, null)),
          i.createElement(
            n.AW,
            { path: a.AppNotes(":appid", ":noteid?") },
            i.createElement(U, null)
          ),
          i.createElement(
            n.AW,
            null,
            i.createElement(n.l_, { to: `${a.List()}` })
          )
        );
      }
    },
  },
]);
