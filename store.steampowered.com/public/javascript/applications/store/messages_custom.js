/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [938],
  {
    45933: (e) => {
      "use strict";
      var t,
        r = (function () {
          function e(e, t) {
            if ("function" != typeof e)
              throw new TypeError(
                "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " +
                  e +
                  "."
              );
            (this._batchLoadFn = e),
              (this._maxBatchSize = (function (e) {
                var t = !e || !1 !== e.batch;
                if (!t) return 1;
                var r = e && e.maxBatchSize;
                if (void 0 === r) return 1 / 0;
                if ("number" != typeof r || r < 1)
                  throw new TypeError(
                    "maxBatchSize must be a positive number: " + r
                  );
                return r;
              })(t)),
              (this._batchScheduleFn = (function (e) {
                var t = e && e.batchScheduleFn;
                if (void 0 === t) return n;
                if ("function" != typeof t)
                  throw new TypeError(
                    "batchScheduleFn must be a function: " + t
                  );
                return t;
              })(t)),
              (this._cacheKeyFn = (function (e) {
                var t = e && e.cacheKeyFn;
                if (void 0 === t)
                  return function (e) {
                    return e;
                  };
                if ("function" != typeof t)
                  throw new TypeError("cacheKeyFn must be a function: " + t);
                return t;
              })(t)),
              (this._cacheMap = (function (e) {
                var t = !e || !1 !== e.cache;
                if (!t) return null;
                var r = e && e.cacheMap;
                if (void 0 === r) return new Map();
                if (null !== r) {
                  var n = ["get", "set", "delete", "clear"].filter(function (
                    e
                  ) {
                    return r && "function" != typeof r[e];
                  });
                  if (0 !== n.length)
                    throw new TypeError(
                      "Custom cacheMap missing methods: " + n.join(", ")
                    );
                }
                return r;
              })(t)),
              (this._batch = null);
          }
          var t = e.prototype;
          return (
            (t.load = function (e) {
              if (null == e)
                throw new TypeError(
                  "The loader.load() function must be called with a value, but got: " +
                    String(e) +
                    "."
                );
              var t = (function (e) {
                  var t = e._batch;
                  if (
                    null !== t &&
                    !t.hasDispatched &&
                    t.keys.length < e._maxBatchSize &&
                    (!t.cacheHits || t.cacheHits.length < e._maxBatchSize)
                  )
                    return t;
                  var r = { hasDispatched: !1, keys: [], callbacks: [] };
                  return (
                    (e._batch = r),
                    e._batchScheduleFn(function () {
                      !(function (e, t) {
                        if (((t.hasDispatched = !0), 0 === t.keys.length))
                          return void c(t);
                        var r = e._batchLoadFn(t.keys);
                        if (!r || "function" != typeof r.then)
                          return a(
                            e,
                            t,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " +
                                String(r) +
                                "."
                            )
                          );
                        r.then(function (e) {
                          if (!o(e))
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " +
                                String(e) +
                                "."
                            );
                          if (e.length !== t.keys.length)
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n" +
                                String(t.keys) +
                                "\n\nValues:\n" +
                                String(e)
                            );
                          c(t);
                          for (var r = 0; r < t.callbacks.length; r++) {
                            var n = e[r];
                            n instanceof Error
                              ? t.callbacks[r].reject(n)
                              : t.callbacks[r].resolve(n);
                          }
                        }).catch(function (r) {
                          a(e, t, r);
                        });
                      })(e, r);
                    }),
                    r
                  );
                })(this),
                r = this._cacheMap,
                n = this._cacheKeyFn(e);
              if (r) {
                var i = r.get(n);
                if (i) {
                  var s = t.cacheHits || (t.cacheHits = []);
                  return new Promise(function (e) {
                    s.push(function () {
                      e(i);
                    });
                  });
                }
              }
              t.keys.push(e);
              var u = new Promise(function (e, r) {
                t.callbacks.push({ resolve: e, reject: r });
              });
              return r && r.set(n, u), u;
            }),
            (t.loadMany = function (e) {
              if (!o(e))
                throw new TypeError(
                  "The loader.loadMany() function must be called with Array<key> but got: " +
                    e +
                    "."
                );
              for (var t = [], r = 0; r < e.length; r++)
                t.push(
                  this.load(e[r]).catch(function (e) {
                    return e;
                  })
                );
              return Promise.all(t);
            }),
            (t.clear = function (e) {
              var t = this._cacheMap;
              if (t) {
                var r = this._cacheKeyFn(e);
                t.delete(r);
              }
              return this;
            }),
            (t.clearAll = function () {
              var e = this._cacheMap;
              return e && e.clear(), this;
            }),
            (t.prime = function (e, t) {
              var r = this._cacheMap;
              if (r) {
                var n,
                  a = this._cacheKeyFn(e);
                if (void 0 === r.get(a))
                  t instanceof Error
                    ? (n = Promise.reject(t)).catch(function () {})
                    : (n = Promise.resolve(t)),
                    r.set(a, n);
              }
              return this;
            }),
            e
          );
        })(),
        n =
          "object" == typeof process && "function" == typeof process.nextTick
            ? function (e) {
                t || (t = Promise.resolve()),
                  t.then(function () {
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
      function a(e, t, r) {
        c(t);
        for (var n = 0; n < t.keys.length; n++)
          e.clear(t.keys[n]), t.callbacks[n].reject(r);
      }
      function c(e) {
        if (e.cacheHits)
          for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
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
      e.exports = r;
    },
    34031: (e) => {
      e.exports = {
        Frame: "replay2022_Frame_1C1Yh",
        SteamLogo: "replay2022_SteamLogo_1pv40",
        ReplayLogo: "replay2022_ReplayLogo_3dizB",
        Content: "replay2022_Content_2snHz",
        Avatar: "replay2022_Avatar_1UrOy",
        DataBlock: "replay2022_DataBlock_1RIqD",
        PersonaName: "replay2022_PersonaName_npXR-",
        ViewPageButton: "replay2022_ViewPageButton_3epsf",
        Description: "replay2022_Description_NyKPE",
      };
    },
    40307: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => C });
      var n = r(67294),
        a = r(34031),
        c = r(70655),
        o = r(9669),
        i = r.n(o),
        s = r(45933),
        u = r.n(s),
        l = r(88767),
        h = (r(92398), r(3389)),
        f = (r(82946), r(93976)),
        p = r(90666);
      const d = new (u())(
          (e) =>
            (function (e) {
              var t, r, n, a;
              return (0, c.mG)(this, void 0, void 0, function* () {
                if (!e || 0 == e.length) return [];
                if (1 == e.length) {
                  const n = { accountid: e[0], origin: self.origin },
                    a = yield i().get(
                      `${p.De.COMMUNITY_BASE_URL}actions/ajaxgetavatarpersona`,
                      { params: n }
                    );
                  if (
                    !a ||
                    200 != a.status ||
                    1 !=
                      (null === (t = a.data) || void 0 === t
                        ? void 0
                        : t.success) ||
                    !(null === (r = a.data) || void 0 === r
                      ? void 0
                      : r.userinfo)
                  )
                    throw `Load single avatar/persona failed ${
                      (0, f.l)(a).strErrorMsg
                    }`;
                  return [a.data.userinfo];
                }
                {
                  const t = { accountids: e.join(","), origin: self.origin },
                    r = yield i().get(
                      `${p.De.COMMUNITY_BASE_URL}actions/ajaxgetmultiavatarpersona`,
                      { params: t }
                    );
                  if (
                    !r ||
                    200 != r.status ||
                    1 !=
                      (null === (n = r.data) || void 0 === n
                        ? void 0
                        : n.success) ||
                    !(null === (a = r.data) || void 0 === a
                      ? void 0
                      : a.userinfos)
                  )
                    throw `Load single avatar/persona failed ${
                      (0, f.l)(r).strErrorMsg
                    }`;
                  const c = new Map();
                  return (
                    r.data.userinfos.forEach((e) =>
                      c.set(new h.K(e.steamid).GetAccountID(), e)
                    ),
                    e.map((e) => c.get(e))
                  );
                }
              });
            })(e),
          { cache: !1 }
        ),
        m = "avatarandpersonas";
      var y = r(41311),
        v = r(35921),
        g = r(65924),
        _ = r(53622),
        w = r(71198);
      function C(e) {
        return n.createElement(
          "div",
          { className: a.Frame },
          n.createElement(k, { className: a.SteamLogo }),
          n.createElement(
            "div",
            { className: a.Content },
            n.createElement(b, null),
            n.createElement(E, null),
            n.createElement(
              "div",
              { className: a.Description },
              (0, y.Xx)("#YIR_MM_Generic_Desc")
            )
          )
        );
      }
      function b() {
        const e = (function (e) {
          const { data: t, isLoading: r } = (0, l.useQuery)([m, e], () =>
            d.load(e)
          );
          return r ? null : t;
        })(p.L7.accountid);
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            "div",
            { className: a.Avatar },
            e &&
              e.avatar_url &&
              n.createElement("img", {
                src: e.avatar_url.replace(/\.jpg$/, "_full.jpg"),
              })
          ),
          n.createElement(
            "div",
            { className: a.DataBlock },
            (0, y.yu)(
              "<1>%1$s,</1> You did something great this year.".replace(
                "%1$s",
                e ? e.persona_name : ""
              ),
              n.createElement("div", { className: a.PersonaName })
            )
          )
        );
      }
      function E() {
        const e = (function () {
          const e = (0, w.U)().GetTemplateVars();
          let t = (0, g.YR)(e.linkurl);
          t.startsWith("steam://") || (t = `steam://openurl/${t}`);
          return n.useCallback(
            (e) => {
              (0, _.RA)(e).location.href = t;
            },
            [t]
          );
        })();
        return n.createElement(
          v.s,
          { className: a.ViewPageButton, onActivate: e },
          (0, y.Xx)("#YIR_MM_Generic_Action")
        );
      }
      function k(e) {
        return n.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 476 600",
              fill: "none",
            },
            e
          ),
          n.createElement("path", {
            fill: "currentColor",
            d: "M120.149 -86.0844C-66.5487 -86.0844 -219.429 57.91 -234 240.963L-43.5621 319.782C-27.4326 308.711 -7.95244 302.318 13.0861 302.318C14.9562 302.318 16.8263 302.318 18.6964 302.474L103.396 179.608C103.396 179.062 103.396 178.438 103.396 177.892C103.396 103.985 163.551 43.7991 237.419 43.7991C311.288 43.7991 371.443 103.985 371.443 177.892C371.443 251.8 311.288 311.986 237.419 311.986C236.406 311.986 235.394 311.986 234.381 311.986L113.604 398.211C113.604 399.77 113.682 401.407 113.682 402.966C113.682 458.475 68.5656 503.614 13.0861 503.614C-35.6142 503.614 -76.2888 468.844 -85.5613 422.769L-221.766 366.325C-179.611 515.542 -42.5491 625 120.149 625C316.431 625 475.467 465.803 475.467 269.497C475.467 73.1904 316.353 -86.0844 120.149 -86.0844Z",
            fillOpacity: "0.15",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M-11.3061 453.406L-54.9417 435.397C-47.2275 451.535 -33.8252 465.022 -16.0593 472.429C22.3556 488.411 66.6145 470.168 82.6661 431.733C90.3802 413.1 90.4582 392.596 82.744 373.964C75.1078 355.331 60.6146 340.752 41.9915 333.034C23.5244 325.316 3.73256 325.628 -13.6437 332.176L31.4723 350.809C59.8354 362.659 73.2377 395.169 61.3938 423.547C49.6278 451.925 17.057 465.334 -11.3061 453.484V453.406Z",
            fillOpacity: "0.15",
          }),
          n.createElement("path", {
            fill: "currentColor",
            d: "M326.71 177.812C326.71 128.541 286.659 88.4688 237.413 88.4688C188.167 88.4688 148.116 128.541 148.116 177.812C148.116 227.084 188.167 267.156 237.413 267.156C286.659 267.156 326.71 227.084 326.71 177.812ZM170.479 177.656C170.479 140.625 200.557 110.532 237.569 110.532C274.581 110.532 304.658 140.547 304.658 177.656C304.658 214.766 274.659 244.781 237.569 244.781C200.479 244.781 170.479 214.766 170.479 177.656Z",
            fillOpacity: "0.15",
          })
        );
      }
    },
  },
]);
