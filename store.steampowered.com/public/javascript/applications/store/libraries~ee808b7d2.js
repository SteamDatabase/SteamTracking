/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5979],
  {
    58632: (i) => {
      "use strict";
      var e,
        r = (function () {
          function i(i, e) {
            if ("function" != typeof i)
              throw new TypeError(
                "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " +
                  i +
                  ".",
              );
            (this._batchLoadFn = i),
              (this._maxBatchSize = (function (i) {
                var e = !i || !1 !== i.batch;
                if (!e) return 1;
                var r = i && i.maxBatchSize;
                if (void 0 === r) return 1 / 0;
                if ("number" != typeof r || r < 1)
                  throw new TypeError(
                    "maxBatchSize must be a positive number: " + r,
                  );
                return r;
              })(e)),
              (this._batchScheduleFn = (function (i) {
                var e = i && i.batchScheduleFn;
                if (void 0 === e) return o;
                if ("function" != typeof e)
                  throw new TypeError(
                    "batchScheduleFn must be a function: " + e,
                  );
                return e;
              })(e)),
              (this._cacheKeyFn = (function (i) {
                var e = i && i.cacheKeyFn;
                if (void 0 === e)
                  return function (i) {
                    return i;
                  };
                if ("function" != typeof e)
                  throw new TypeError("cacheKeyFn must be a function: " + e);
                return e;
              })(e)),
              (this._cacheMap = (function (i) {
                var e = !i || !1 !== i.cache;
                if (!e) return null;
                var r = i && i.cacheMap;
                if (void 0 === r) return new Map();
                if (null !== r) {
                  var o = ["get", "set", "delete", "clear"].filter(
                    function (i) {
                      return r && "function" != typeof r[i];
                    },
                  );
                  if (0 !== o.length)
                    throw new TypeError(
                      "Custom cacheMap missing methods: " + o.join(", "),
                    );
                }
                return r;
              })(e)),
              (this._batch = null),
              (this.name = (function (i) {
                if (i && i.name) return i.name;
                return null;
              })(e));
          }
          var e = i.prototype;
          return (
            (e.load = function (i) {
              if (null == i)
                throw new TypeError(
                  "The loader.load() function must be called with a value, but got: " +
                    String(i) +
                    ".",
                );
              var e = (function (i) {
                  var e = i._batch;
                  if (
                    null !== e &&
                    !e.hasDispatched &&
                    e.keys.length < i._maxBatchSize
                  )
                    return e;
                  var r = { hasDispatched: !1, keys: [], callbacks: [] };
                  return (
                    (i._batch = r),
                    i._batchScheduleFn(function () {
                      !(function (i, e) {
                        if (((e.hasDispatched = !0), 0 === e.keys.length))
                          return void a(e);
                        var r;
                        try {
                          r = i._batchLoadFn(e.keys);
                        } catch (r) {
                          return t(
                            i,
                            e,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " +
                                String(r) +
                                ".",
                            ),
                          );
                        }
                        if (!r || "function" != typeof r.then)
                          return t(
                            i,
                            e,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " +
                                String(r) +
                                ".",
                            ),
                          );
                        r.then(function (i) {
                          if (!n(i))
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " +
                                String(i) +
                                ".",
                            );
                          if (i.length !== e.keys.length)
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n" +
                                String(e.keys) +
                                "\n\nValues:\n" +
                                String(i),
                            );
                          a(e);
                          for (var r = 0; r < e.callbacks.length; r++) {
                            var o = i[r];
                            o instanceof Error
                              ? e.callbacks[r].reject(o)
                              : e.callbacks[r].resolve(o);
                          }
                        }).catch(function (r) {
                          t(i, e, r);
                        });
                      })(i, r);
                    }),
                    r
                  );
                })(this),
                r = this._cacheMap,
                o = this._cacheKeyFn(i);
              if (r) {
                var s = r.get(o);
                if (s) {
                  var c = e.cacheHits || (e.cacheHits = []);
                  return new Promise(function (i) {
                    c.push(function () {
                      i(s);
                    });
                  });
                }
              }
              e.keys.push(i);
              var b = new Promise(function (i, r) {
                e.callbacks.push({ resolve: i, reject: r });
              });
              return r && r.set(o, b), b;
            }),
            (e.loadMany = function (i) {
              if (!n(i))
                throw new TypeError(
                  "The loader.loadMany() function must be called with Array<key> but got: " +
                    i +
                    ".",
                );
              for (var e = [], r = 0; r < i.length; r++)
                e.push(
                  this.load(i[r]).catch(function (i) {
                    return i;
                  }),
                );
              return Promise.all(e);
            }),
            (e.clear = function (i) {
              var e = this._cacheMap;
              if (e) {
                var r = this._cacheKeyFn(i);
                e.delete(r);
              }
              return this;
            }),
            (e.clearAll = function () {
              var i = this._cacheMap;
              return i && i.clear(), this;
            }),
            (e.prime = function (i, e) {
              var r = this._cacheMap;
              if (r) {
                var o,
                  t = this._cacheKeyFn(i);
                if (void 0 === r.get(t))
                  e instanceof Error
                    ? (o = Promise.reject(e)).catch(function () {})
                    : (o = Promise.resolve(e)),
                    r.set(t, o);
              }
              return this;
            }),
            i
          );
        })(),
        o =
          "object" == typeof process && "function" == typeof process.nextTick
            ? function (i) {
                e || (e = Promise.resolve()),
                  e.then(function () {
                    process.nextTick(i);
                  });
              }
            : "function" == typeof setImmediate
              ? function (i) {
                  setImmediate(i);
                }
              : function (i) {
                  setTimeout(i);
                };
      function t(i, e, r) {
        a(e);
        for (var o = 0; o < e.keys.length; o++)
          i.clear(e.keys[o]), e.callbacks[o].reject(r);
      }
      function a(i) {
        if (i.cacheHits)
          for (var e = 0; e < i.cacheHits.length; e++) i.cacheHits[e]();
      }
      function n(i) {
        return (
          "object" == typeof i &&
          null !== i &&
          "number" == typeof i.length &&
          (0 === i.length ||
            (i.length > 0 &&
              Object.prototype.hasOwnProperty.call(i, i.length - 1)))
        );
      }
      i.exports = r;
    },
    11838: function (i, e, r) {
      var o;
      !(function (t, a) {
        "use strict";
        var n = "function",
          s = "undefined",
          c = "object",
          b = "string",
          u = "major",
          w = "model",
          l = "name",
          d = "type",
          h = "vendor",
          p = "version",
          f = "architecture",
          m = "console",
          v = "mobile",
          g = "tablet",
          y = "smarttv",
          k = "wearable",
          x = "embedded",
          _ = "Amazon",
          T = "Apple",
          S = "ASUS",
          A = "BlackBerry",
          E = "Browser",
          P = "Chrome",
          z = "Firefox",
          q = "Google",
          M = "Huawei",
          N = "LG",
          j = "Microsoft",
          O = "Motorola",
          C = "Opera",
          D = "Samsung",
          F = "Sharp",
          U = "Sony",
          B = "Xiaomi",
          L = "Zebra",
          R = "Facebook",
          V = "Chromium OS",
          H = "Mac OS",
          I = function (i) {
            for (var e = {}, r = 0; r < i.length; r++)
              e[i[r].toUpperCase()] = i[r];
            return e;
          },
          K = function (i, e) {
            return typeof i === b && -1 !== G(e).indexOf(G(i));
          },
          G = function (i) {
            return i.toLowerCase();
          },
          Z = function (i, e) {
            if (typeof i === b)
              return (
                (i = i.replace(/^\s\s*/, "")),
                typeof e === s ? i : i.substring(0, 500)
              );
          },
          W = function (i, e) {
            for (var r, o, t, s, b, u, w = 0; w < e.length && !b; ) {
              var l = e[w],
                d = e[w + 1];
              for (r = o = 0; r < l.length && !b && l[r]; )
                if ((b = l[r++].exec(i)))
                  for (t = 0; t < d.length; t++)
                    (u = b[++o]),
                      typeof (s = d[t]) === c && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == n
                            ? (this[s[0]] = s[1].call(this, u))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                            ? typeof s[1] !== n || (s[1].exec && s[1].test)
                              ? (this[s[0]] = u ? u.replace(s[1], s[2]) : a)
                              : (this[s[0]] = u ? s[1].call(this, u, s[2]) : a)
                            : 4 === s.length &&
                              (this[s[0]] = u
                                ? s[3].call(this, u.replace(s[1], s[2]))
                                : a)
                        : (this[s] = u || a);
              w += 2;
            }
          },
          X = function (i, e) {
            for (var r in e)
              if (typeof e[r] === c && e[r].length > 0) {
                for (var o = 0; o < e[r].length; o++)
                  if (K(e[r][o], i)) return "?" === r ? a : r;
              } else if (K(e[r], i)) return "?" === r ? a : r;
            return i;
          },
          $ = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          Q = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [p, [l, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [p, [l, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [l, p],
              [/opios[\/ ]+([\w\.]+)/i],
              [p, [l, C + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [p, [l, C + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [p, [l, C]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [p, [l, "Baidu"]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                /(heytap|ovi)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [l, p],
              [/\bddg\/([\w\.]+)/i],
              [p, [l, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [p, [l, "UC" + E]],
              [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i,
                /micromessenger\/([\w\.]+)/i,
              ],
              [p, [l, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [p, [l, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [p, [l, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [p, [l, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [p, [l, "Smart Lenovo " + E]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[l, /(.+)/, "$1 Secure " + E], p],
              [/\bfocus\/([\w\.]+)/i],
              [p, [l, z + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [p, [l, C + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [p, [l, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [p, [l, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [p, [l, C + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [p, [l, "MIUI " + E]],
              [/fxios\/([-\w\.]+)/i],
              [p, [l, z]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[l, "360 " + E]],
              [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
              [[l, /(.+)/, "$1 " + E], p],
              [/samsungbrowser\/([\w\.]+)/i],
              [p, [l, D + " Internet"]],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[l, /_/g, " "], p],
              [/metasr[\/ ]?([\d\.]+)/i],
              [p, [l, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [[l, "Sogou Mobile"], p],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [l, p],
              [/(lbbrowser)/i, /\[(linkedin)app\]/i],
              [l],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[l, R], p],
              [
                /(Klarna)\/([\w\.]+)/i,
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(alipay)client\/([\w\.]+)/i,
                /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
              ],
              [l, p],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [p, [l, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [p, [l, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [p, [l, P + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[l, P + " WebView"], p],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [p, [l, "Android " + E]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [l, p],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [p, [l, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [p, l],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                l,
                [
                  p,
                  X,
                  {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [l, p],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[l, "Netscape"], p],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [p, [l, z + " Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
                /panasonic;(viera)/i,
              ],
              [l, p],
              [/(cobalt)\/([\w\.]+)/i],
              [l, [p, /master.|lts./, ""]],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[f, "amd64"]],
              [/(ia32(?=;))/i],
              [[f, G]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[f, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[f, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[f, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[f, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[f, /ower/, "", G]],
              [/(sun4\w)[;\)]/i],
              [[f, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[f, G]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [w, [h, D], [d, g]],
              [
                /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [w, [h, D], [d, v]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [w, [h, T], [d, v]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [w, [h, T], [d, g]],
              [/(macintosh);/i],
              [w, [h, T]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [w, [h, F], [d, v]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [w, [h, M], [d, g]],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [w, [h, M], [d, v]],
              [
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
              ],
              [
                [w, /_/g, " "],
                [h, B],
                [d, v],
              ],
              [
                /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
                /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
              ],
              [
                [w, /_/g, " "],
                [h, B],
                [d, g],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [w, [h, "OPPO"], [d, v]],
              [/\b(opd2\d{3}a?) bui/i],
              [w, [h, "OPPO"], [d, g]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [w, [h, "Vivo"], [d, v]],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [w, [h, "Realme"], [d, v]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [w, [h, O], [d, v]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [w, [h, O], [d, g]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [w, [h, N], [d, g]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [w, [h, N], [d, v]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [w, [h, "Lenovo"], [d, g]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [w, /_/g, " "],
                [h, "Nokia"],
                [d, v],
              ],
              [/(pixel c)\b/i],
              [w, [h, q], [d, g]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [w, [h, q], [d, v]],
              [
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [w, [h, U], [d, v]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [w, "Xperia Tablet"],
                [h, U],
                [d, g],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [w, [h, "OnePlus"], [d, v]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [w, [h, _], [d, g]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [w, /(.+)/g, "Fire Phone $1"],
                [h, _],
                [d, v],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [w, h, [d, g]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [w, [h, A], [d, v]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [w, [h, S], [d, g]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [w, [h, S], [d, v]],
              [/(nexus 9)/i],
              [w, [h, "HTC"], [d, g]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [h, [w, /_/g, " "], [d, v]],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [w, [h, "Acer"], [d, g]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [w, [h, "Meizu"], [d, v]],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [w, [h, "Ulefone"], [d, v]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [h, w, [d, v]],
              [
                /(kobo)\s(ereader|touch)/i,
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [h, w, [d, g]],
              [/(surface duo)/i],
              [w, [h, j], [d, g]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [w, [h, "Fairphone"], [d, v]],
              [/(u304aa)/i],
              [w, [h, "AT&T"], [d, v]],
              [/\bsie-(\w*)/i],
              [w, [h, "Siemens"], [d, v]],
              [/\b(rct\w+) b/i],
              [w, [h, "RCA"], [d, g]],
              [/\b(venue[\d ]{2,7}) b/i],
              [w, [h, "Dell"], [d, g]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [w, [h, "Verizon"], [d, g]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [w, [h, "Barnes & Noble"], [d, g]],
              [/\b(tm\d{3}\w+) b/i],
              [w, [h, "NuVision"], [d, g]],
              [/\b(k88) b/i],
              [w, [h, "ZTE"], [d, g]],
              [/\b(nx\d{3}j) b/i],
              [w, [h, "ZTE"], [d, v]],
              [/\b(gen\d{3}) b.+49h/i],
              [w, [h, "Swiss"], [d, v]],
              [/\b(zur\d{3}) b/i],
              [w, [h, "Swiss"], [d, g]],
              [/\b((zeki)?tb.*\b) b/i],
              [w, [h, "Zeki"], [d, g]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[h, "Dragon Touch"], w, [d, g]],
              [/\b(ns-?\w{0,9}) b/i],
              [w, [h, "Insignia"], [d, g]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [w, [h, "NextBook"], [d, g]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[h, "Voice"], w, [d, v]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[h, "LvTel"], w, [d, v]],
              [/\b(ph-1) /i],
              [w, [h, "Essential"], [d, v]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [w, [h, "Envizen"], [d, g]],
              [/\b(trio[-\w\. ]+) b/i],
              [w, [h, "MachSpeed"], [d, g]],
              [/\btu_(1491) b/i],
              [w, [h, "Rotor"], [d, g]],
              [/(shield[\w ]+) b/i],
              [w, [h, "Nvidia"], [d, g]],
              [/(sprint) (\w+)/i],
              [h, w, [d, v]],
              [/(kin\.[onetw]{3})/i],
              [
                [w, /\./g, " "],
                [h, j],
                [d, v],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [w, [h, L], [d, g]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [w, [h, L], [d, v]],
              [/smart-tv.+(samsung)/i],
              [h, [d, y]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [w, /^/, "SmartTV"],
                [h, D],
                [d, y],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [h, N],
                [d, y],
              ],
              [/(apple) ?tv/i],
              [h, [w, T + " TV"], [d, y]],
              [/crkey/i],
              [
                [w, P + "cast"],
                [h, q],
                [d, y],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [w, [h, _], [d, y]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [w, [h, F], [d, y]],
              [/(bravia[\w ]+)( bui|\))/i],
              [w, [h, U], [d, y]],
              [/(mitv-\w{5}) bui/i],
              [w, [h, B], [d, y]],
              [/Hbbtv.*(technisat) (.*);/i],
              [h, w, [d, y]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [h, Z],
                [w, Z],
                [d, y],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[d, y]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [h, w, [d, m]],
              [/droid.+; (shield) bui/i],
              [w, [h, "Nvidia"], [d, m]],
              [/(playstation [345portablevi]+)/i],
              [w, [h, U], [d, m]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [w, [h, j], [d, m]],
              [/((pebble))app/i],
              [h, w, [d, k]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [w, [h, T], [d, k]],
              [/droid.+; (glass) \d/i],
              [w, [h, q], [d, k]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [w, [h, L], [d, k]],
              [/(quest( \d| pro)?)/i],
              [w, [h, R], [d, k]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [h, [d, x]],
              [/(aeobc)\b/i],
              [w, [h, _], [d, x]],
              [
                /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
              ],
              [w, [d, v]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [w, [d, g]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[d, g]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[d, v]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [w, [h, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [p, [l, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [p, [l, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [l, p],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [p, l],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [l, p],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [l, [p, X, $]],
              [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
              ],
              [
                [p, X, $],
                [l, "Windows"],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [p, /_/g, "."],
                [l, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [l, H],
                [p, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [p, l],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [l, p],
              [/\(bb(10);/i],
              [p, [l, A]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [p, [l, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [p, [l, z + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [p, [l, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [p, [l, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [p, [l, P + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[l, V], p],
              [
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [l, p],
              [/(sunos) ?([\w\.\d]*)/i],
              [[l, "Solaris"], p],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [l, p],
            ],
          },
          Y = function (i, e) {
            if ((typeof i === c && ((e = i), (i = a)), !(this instanceof Y)))
              return new Y(i, e).getResult();
            var r = typeof t !== s && t.navigator ? t.navigator : a,
              o = i || (r && r.userAgent ? r.userAgent : ""),
              m = r && r.userAgentData ? r.userAgentData : a,
              y = e
                ? (function (i, e) {
                    var r = {};
                    for (var o in i)
                      e[o] && e[o].length % 2 == 0
                        ? (r[o] = e[o].concat(i[o]))
                        : (r[o] = i[o]);
                    return r;
                  })(Q, e)
                : Q,
              k = r && r.userAgent == o;
            return (
              (this.getBrowser = function () {
                var i,
                  e = {};
                return (
                  (e[l] = a),
                  (e[p] = a),
                  W.call(e, o, y.browser),
                  (e[u] =
                    typeof (i = e[p]) === b
                      ? i.replace(/[^\d\.]/g, "").split(".")[0]
                      : a),
                  k &&
                    r &&
                    r.brave &&
                    typeof r.brave.isBrave == n &&
                    (e[l] = "Brave"),
                  e
                );
              }),
              (this.getCPU = function () {
                var i = {};
                return (i[f] = a), W.call(i, o, y.cpu), i;
              }),
              (this.getDevice = function () {
                var i = {};
                return (
                  (i[h] = a),
                  (i[w] = a),
                  (i[d] = a),
                  W.call(i, o, y.device),
                  k && !i[d] && m && m.mobile && (i[d] = v),
                  k &&
                    "Macintosh" == i[w] &&
                    r &&
                    typeof r.standalone !== s &&
                    r.maxTouchPoints &&
                    r.maxTouchPoints > 2 &&
                    ((i[w] = "iPad"), (i[d] = g)),
                  i
                );
              }),
              (this.getEngine = function () {
                var i = {};
                return (i[l] = a), (i[p] = a), W.call(i, o, y.engine), i;
              }),
              (this.getOS = function () {
                var i = {};
                return (
                  (i[l] = a),
                  (i[p] = a),
                  W.call(i, o, y.os),
                  k &&
                    !i[l] &&
                    m &&
                    m.platform &&
                    "Unknown" != m.platform &&
                    (i[l] = m.platform
                      .replace(/chrome os/i, V)
                      .replace(/macos/i, H)),
                  i
                );
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return o;
              }),
              (this.setUA = function (i) {
                return (
                  (o = typeof i === b && i.length > 500 ? Z(i, 500) : i), this
                );
              }),
              this.setUA(o),
              this
            );
          };
        (Y.VERSION = "1.0.38"),
          (Y.BROWSER = I([l, p, u])),
          (Y.CPU = I([f])),
          (Y.DEVICE = I([w, h, d, m, v, y, g, k, x])),
          (Y.ENGINE = Y.OS = I([l, p])),
          typeof e !== s
            ? (i.exports && (e = i.exports = Y), (e.UAParser = Y))
            : r.amdO
              ? (o = function () {
                  return Y;
                }.call(e, r, e, i)) === a || (i.exports = o)
              : typeof t !== s && (t.UAParser = Y);
        var J = typeof t !== s && (t.jQuery || t.Zepto);
        if (J && !J.ua) {
          var ii = new Y();
          (J.ua = ii.getResult()),
            (J.ua.get = function () {
              return ii.getUA();
            }),
            (J.ua.set = function (i) {
              ii.setUA(i);
              var e = ii.getResult();
              for (var r in e) J.ua[r] = e[r];
            });
        }
      })("object" == typeof window ? window : this);
    },
  },
]);
