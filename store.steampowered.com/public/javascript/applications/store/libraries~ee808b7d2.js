/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5979],
  {
    11838: function (i, e, t) {
      var s;
      !(function (r, o) {
        "use strict";
        var a = "function",
          n = "undefined",
          b = "object",
          u = "string",
          l = "major",
          w = "model",
          c = "name",
          d = "type",
          h = "vendor",
          p = "version",
          m = "architecture",
          f = "console",
          v = "mobile",
          g = "tablet",
          k = "smarttv",
          x = "wearable",
          y = "embedded",
          q = "Amazon",
          O = "Apple",
          R = "ASUS",
          _ = "BlackBerry",
          E = "Browser",
          S = "Chrome",
          C = "Firefox",
          T = "Google",
          z = "Huawei",
          N = "LG",
          U = "Microsoft",
          A = "Motorola",
          M = "Opera",
          j = "Samsung",
          P = "Sharp",
          Q = "Sony",
          B = "Xiaomi",
          H = "Zebra",
          L = "Facebook",
          D = "Chromium OS",
          I = "Mac OS",
          V = " Browser",
          $ = function (i) {
            for (var e = {}, t = 0; t < i.length; t++)
              e[i[t].toUpperCase()] = i[t];
            return e;
          },
          G = function (i, e) {
            return typeof i === u && -1 !== Z(e).indexOf(Z(i));
          },
          Z = function (i) {
            return i.toLowerCase();
          },
          F = function (i, e) {
            if (typeof i === u)
              return (
                (i = i.replace(/^\s\s*/, "")),
                typeof e === n ? i : i.substring(0, 500)
              );
          },
          W = function (i, e) {
            for (var t, s, r, n, u, l, w = 0; w < e.length && !u; ) {
              var c = e[w],
                d = e[w + 1];
              for (t = s = 0; t < c.length && !u && c[t]; )
                if ((u = c[t++].exec(i)))
                  for (r = 0; r < d.length; r++)
                    (l = u[++s]),
                      typeof (n = d[r]) === b && n.length > 0
                        ? 2 === n.length
                          ? typeof n[1] == a
                            ? (this[n[0]] = n[1].call(this, l))
                            : (this[n[0]] = n[1])
                          : 3 === n.length
                            ? typeof n[1] !== a || (n[1].exec && n[1].test)
                              ? (this[n[0]] = l ? l.replace(n[1], n[2]) : o)
                              : (this[n[0]] = l ? n[1].call(this, l, n[2]) : o)
                            : 4 === n.length &&
                              (this[n[0]] = l
                                ? n[3].call(this, l.replace(n[1], n[2]))
                                : o)
                        : (this[n] = l || o);
              w += 2;
            }
          },
          X = function (i, e) {
            for (var t in e)
              if (typeof e[t] === b && e[t].length > 0) {
                for (var s = 0; s < e[t].length; s++)
                  if (G(e[t][s], i)) return "?" === t ? o : t;
              } else if (G(e[t], i)) return "?" === t ? o : t;
            return e.hasOwnProperty("*") ? e["*"] : i;
          },
          K = {
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
          J = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [p, [c, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [p, [c, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [c, p],
              [/opios[\/ ]+([\w\.]+)/i],
              [p, [c, M + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [p, [c, M + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [p, [c, M]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [p, [c, "Baidu"]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i,
                /(heytap|ovi)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [c, p],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [p, [c, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [p, [c, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [p, [c, "UC" + E]],
              [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i,
                /micromessenger\/([\w\.]+)/i,
              ],
              [p, [c, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [p, [c, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [p, [c, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [p, [c, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [p, [c, "Smart Lenovo " + E]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[c, /(.+)/, "$1 Secure " + E], p],
              [/\bfocus\/([\w\.]+)/i],
              [p, [c, C + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [p, [c, M + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [p, [c, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [p, [c, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [p, [c, M + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [p, [c, "MIUI " + E]],
              [/fxios\/([-\w\.]+)/i],
              [p, [c, C]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[c, "360" + V]],
              [/\b(qq)\/([\w\.]+)/i],
              [[c, /(.+)/, "$1Browser"], p],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [[c, /(.+)/, "$1" + V], p],
              [/samsungbrowser\/([\w\.]+)/i],
              [p, [c, j + " Internet"]],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[c, /_/g, " "], p],
              [/metasr[\/ ]?([\d\.]+)/i],
              [p, [c, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [[c, "Sogou Mobile"], p],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [c, p],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [c],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[c, L], p],
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
              [c, p],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [p, [c, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [p, [c, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [p, [c, S + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[c, S + " WebView"], p],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [p, [c, "Android " + E]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [c, p],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [p, [c, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [p, c],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                c,
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
              [c, p],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[c, "Netscape"], p],
              [/(wolvic)\/([\w\.]+)/i],
              [c, p],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [p, [c, C + " Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
              ],
              [c, [p, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [c, [p, /master.|lts./, ""]],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[m, "amd64"]],
              [/(ia32(?=;))/i],
              [[m, Z]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[m, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[m, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[m, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[m, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[m, /ower/, "", Z]],
              [/(sun4\w)[;\)]/i],
              [[m, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[m, Z]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [w, [h, j], [d, g]],
              [
                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [w, [h, j], [d, v]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [w, [h, O], [d, v]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [w, [h, O], [d, g]],
              [/(macintosh);/i],
              [w, [h, O]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [w, [h, P], [d, v]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [w, [h, z], [d, g]],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [w, [h, z], [d, v]],
              [
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
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
              [w, [h, A], [d, v]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [w, [h, A], [d, g]],
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
              [w, [h, T], [d, g]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [w, [h, T], [d, v]],
              [
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [w, [h, Q], [d, v]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [w, "Xperia Tablet"],
                [h, Q],
                [d, g],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [w, [h, "OnePlus"], [d, v]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [w, [h, q], [d, g]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [w, /(.+)/g, "Fire Phone $1"],
                [h, q],
                [d, v],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [w, h, [d, g]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [w, [h, _], [d, v]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [w, [h, R], [d, g]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [w, [h, R], [d, v]],
              [/(nexus 9)/i],
              [w, [h, "HTC"], [d, g]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [h, [w, /_/g, " "], [d, v]],
              [
                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
              ],
              [w, [h, "TCL"], [d, g]],
              [/(itel) ((\w+))/i],
              [
                [h, Z],
                w,
                [d, X, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [w, [h, "Acer"], [d, g]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [w, [h, "Meizu"], [d, v]],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [w, [h, "Ulefone"], [d, v]],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [w, [h, "Nothing"], [d, v]],
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
              [w, [h, U], [d, g]],
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
                [h, U],
                [d, v],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [w, [h, H], [d, g]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [w, [h, H], [d, v]],
              [/smart-tv.+(samsung)/i],
              [h, [d, k]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [w, /^/, "SmartTV"],
                [h, j],
                [d, k],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [h, N],
                [d, k],
              ],
              [/(apple) ?tv/i],
              [h, [w, O + " TV"], [d, k]],
              [/crkey/i],
              [
                [w, S + "cast"],
                [h, T],
                [d, k],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [w, [h, q], [d, k]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [w, [h, P], [d, k]],
              [/(bravia[\w ]+)( bui|\))/i],
              [w, [h, Q], [d, k]],
              [/(mitv-\w{5}) bui/i],
              [w, [h, B], [d, k]],
              [/Hbbtv.*(technisat) (.*);/i],
              [h, w, [d, k]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [h, F],
                [w, F],
                [d, k],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[d, k]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [h, w, [d, f]],
              [/droid.+; (shield) bui/i],
              [w, [h, "Nvidia"], [d, f]],
              [/(playstation [345portablevi]+)/i],
              [w, [h, Q], [d, f]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [w, [h, U], [d, f]],
              [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
              [w, [h, j], [d, x]],
              [/((pebble))app/i],
              [h, w, [d, x]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [w, [h, O], [d, x]],
              [/droid.+; (glass) \d/i],
              [w, [h, T], [d, x]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [w, [h, H], [d, x]],
              [/(quest( \d| pro)?)/i],
              [w, [h, L], [d, x]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [h, [d, y]],
              [/(aeobc)\b/i],
              [w, [h, q], [d, y]],
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
              [p, [c, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [p, [c, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [c, p],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [p, c],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [c, p],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [c, [p, X, K]],
              [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
              ],
              [
                [p, X, K],
                [c, "Windows"],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [p, /_/g, "."],
                [c, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [c, I],
                [p, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [p, c],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [c, p],
              [/\(bb(10);/i],
              [p, [c, _]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [p, [c, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [p, [c, C + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [p, [c, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [p, [c, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [p, [c, S + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[c, D], p],
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
              [c, p],
              [/(sunos) ?([\w\.\d]*)/i],
              [[c, "Solaris"], p],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [c, p],
            ],
          },
          Y = function (i, e) {
            if ((typeof i === b && ((e = i), (i = o)), !(this instanceof Y)))
              return new Y(i, e).getResult();
            var t = typeof r !== n && r.navigator ? r.navigator : o,
              s = i || (t && t.userAgent ? t.userAgent : ""),
              f = t && t.userAgentData ? t.userAgentData : o,
              k = e
                ? (function (i, e) {
                    var t = {};
                    for (var s in i)
                      e[s] && e[s].length % 2 == 0
                        ? (t[s] = e[s].concat(i[s]))
                        : (t[s] = i[s]);
                    return t;
                  })(J, e)
                : J,
              x = t && t.userAgent == s;
            return (
              (this.getBrowser = function () {
                var i,
                  e = {};
                return (
                  (e[c] = o),
                  (e[p] = o),
                  W.call(e, s, k.browser),
                  (e[l] =
                    typeof (i = e[p]) === u
                      ? i.replace(/[^\d\.]/g, "").split(".")[0]
                      : o),
                  x &&
                    t &&
                    t.brave &&
                    typeof t.brave.isBrave == a &&
                    (e[c] = "Brave"),
                  e
                );
              }),
              (this.getCPU = function () {
                var i = {};
                return (i[m] = o), W.call(i, s, k.cpu), i;
              }),
              (this.getDevice = function () {
                var i = {};
                return (
                  (i[h] = o),
                  (i[w] = o),
                  (i[d] = o),
                  W.call(i, s, k.device),
                  x && !i[d] && f && f.mobile && (i[d] = v),
                  x &&
                    "Macintosh" == i[w] &&
                    t &&
                    typeof t.standalone !== n &&
                    t.maxTouchPoints &&
                    t.maxTouchPoints > 2 &&
                    ((i[w] = "iPad"), (i[d] = g)),
                  i
                );
              }),
              (this.getEngine = function () {
                var i = {};
                return (i[c] = o), (i[p] = o), W.call(i, s, k.engine), i;
              }),
              (this.getOS = function () {
                var i = {};
                return (
                  (i[c] = o),
                  (i[p] = o),
                  W.call(i, s, k.os),
                  x &&
                    !i[c] &&
                    f &&
                    f.platform &&
                    "Unknown" != f.platform &&
                    (i[c] = f.platform
                      .replace(/chrome os/i, D)
                      .replace(/macos/i, I)),
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
                return s;
              }),
              (this.setUA = function (i) {
                return (
                  (s = typeof i === u && i.length > 500 ? F(i, 500) : i), this
                );
              }),
              this.setUA(s),
              this
            );
          };
        (Y.VERSION = "1.0.39"),
          (Y.BROWSER = $([c, p, l])),
          (Y.CPU = $([m])),
          (Y.DEVICE = $([w, h, d, f, v, k, g, x, y])),
          (Y.ENGINE = Y.OS = $([c, p])),
          typeof e !== n
            ? (i.exports && (e = i.exports = Y), (e.UAParser = Y))
            : t.amdO
              ? (s = function () {
                  return Y;
                }.call(e, t, e, i)) === o || (i.exports = s)
              : typeof r !== n && (r.UAParser = Y);
        var ii = typeof r !== n && (r.jQuery || r.Zepto);
        if (ii && !ii.ua) {
          var ei = new Y();
          (ii.ua = ei.getResult()),
            (ii.ua.get = function () {
              return ei.getUA();
            }),
            (ii.ua.set = function (i) {
              ei.setUA(i);
              var e = ei.getResult();
              for (var t in e) ii.ua[t] = e[t];
            });
        }
      })("object" == typeof window ? window : this);
    },
    59768: (i, e, t) => {
      "use strict";
      t.d(e, { E: () => m });
      var s = t(90626),
        r = t(14097),
        o = t(45839),
        a = t(52368),
        n = t(70996);
      function b(i, e) {
        return i.filter((i) => !e.includes(i));
      }
      var u = class extends a.Q {
          #i;
          #e;
          #t;
          #s;
          #r;
          #o;
          #a;
          #n;
          constructor(i, e, t) {
            super(),
              (this.#i = i),
              (this.#s = t),
              (this.#t = []),
              (this.#r = []),
              (this.#e = []),
              this.setQueries(e);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#r.forEach((i) => {
                i.subscribe((e) => {
                  this.#b(i, e);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#r.forEach((i) => {
                i.destroy();
              });
          }
          setQueries(i, e, t) {
            (this.#t = i),
              (this.#s = e),
              r.j.batch(() => {
                const i = this.#r,
                  e = this.#u(this.#t);
                e.forEach((i) =>
                  i.observer.setOptions(i.defaultedQueryOptions, t),
                );
                const s = e.map((i) => i.observer),
                  r = s.map((i) => i.getCurrentResult()),
                  o = s.some((e, t) => e !== i[t]);
                (i.length !== s.length || o) &&
                  ((this.#r = s),
                  (this.#e = r),
                  this.hasListeners() &&
                    (b(i, s).forEach((i) => {
                      i.destroy();
                    }),
                    b(s, i).forEach((i) => {
                      i.subscribe((e) => {
                        this.#b(i, e);
                      });
                    }),
                    this.#l()));
              });
          }
          getCurrentResult() {
            return this.#e;
          }
          getQueries() {
            return this.#r.map((i) => i.getCurrentQuery());
          }
          getObservers() {
            return this.#r;
          }
          getOptimisticResult(i, e) {
            const t = this.#u(i).map((i) =>
              i.observer.getOptimisticResult(i.defaultedQueryOptions),
            );
            return [t, (i) => this.#w(i ?? t, e), () => this.#c(t, i)];
          }
          #c(i, e) {
            const t = this.#u(e);
            return t.map((e, s) => {
              const r = i[s];
              return e.defaultedQueryOptions.notifyOnChangeProps
                ? r
                : e.observer.trackResult(r, (i) => {
                    t.forEach((e) => {
                      e.observer.trackProp(i);
                    });
                  });
            });
          }
          #w(i, e) {
            return e
              ? ((this.#o && this.#e === this.#n && e === this.#a) ||
                  ((this.#a = e),
                  (this.#n = this.#e),
                  (this.#o = (0, n.BH)(this.#o, e(i)))),
                this.#o)
              : i;
          }
          #u(i) {
            const e = new Map(this.#r.map((i) => [i.options.queryHash, i])),
              t = [];
            return (
              i.forEach((i) => {
                const s = this.#i.defaultQueryOptions(i),
                  r = e.get(s.queryHash);
                if (r) t.push({ defaultedQueryOptions: s, observer: r });
                else {
                  const i = this.#r.find(
                    (i) => i.options.queryHash === s.queryHash,
                  );
                  t.push({
                    defaultedQueryOptions: s,
                    observer: i ?? new o.$(this.#i, s),
                  });
                }
              }),
              t.sort(
                (e, t) =>
                  i.findIndex(
                    (i) => i.queryHash === e.defaultedQueryOptions.queryHash,
                  ) -
                  i.findIndex(
                    (i) => i.queryHash === t.defaultedQueryOptions.queryHash,
                  ),
              )
            );
          }
          #b(i, e) {
            const t = this.#r.indexOf(i);
            -1 !== t &&
              ((this.#e = (function (i, e, t) {
                const s = i.slice(0);
                return (s[e] = t), s;
              })(this.#e, t, e)),
              this.#l());
          }
          #l() {
            if (this.hasListeners()) {
              this.#o !==
                this.#w(this.#c(this.#e, this.#t), this.#s?.combine) &&
                r.j.batch(() => {
                  this.listeners.forEach((i) => {
                    i(this.#e);
                  });
                });
            }
          }
        },
        l = t(75233),
        w = t(22730),
        c = t(43424),
        d = t(19086),
        h = t(44407),
        p = t(19866);
      function m({ queries: i, ...e }, t) {
        const a = (0, l.jE)(t),
          n = (0, w.w)(),
          b = (0, c.h)(),
          m = s.useMemo(
            () =>
              i.map((i) => {
                const e = a.defaultQueryOptions(i);
                return (
                  (e._optimisticResults = n ? "isRestoring" : "optimistic"), e
                );
              }),
            [i, a, n],
          );
        m.forEach((i) => {
          (0, h.jv)(i), (0, d.LJ)(i, b);
        }),
          (0, d.wZ)(b);
        const [f] = s.useState(() => new u(a, m, e)),
          [v, g, k] = f.getOptimisticResult(m, e.combine);
        s.useSyncExternalStore(
          s.useCallback(
            (i) => (n ? p.l : f.subscribe(r.j.batchCalls(i))),
            [f, n],
          ),
          () => f.getCurrentResult(),
          () => f.getCurrentResult(),
        ),
          s.useEffect(() => {
            f.setQueries(m, e, { listeners: !1 });
          }, [m, e, f]);
        const x = v.some((i, e) => (0, h.EU)(m[e], i))
          ? v.flatMap((i, e) => {
              const t = m[e];
              if (t) {
                const e = new o.$(a, t);
                if ((0, h.EU)(t, i)) return (0, h.iL)(t, e, b);
                (0, h.nE)(i, n) && (0, h.iL)(t, e, b);
              }
              return [];
            })
          : [];
        if (x.length > 0) throw Promise.all(x);
        const y = v.find((i, e) => {
          const t = m[e];
          return (
            t &&
            (0, d.$1)({
              result: i,
              errorResetBoundary: b,
              throwOnError: t.throwOnError,
              query: a.getQueryCache().get(t.queryHash),
            })
          );
        });
        if (y?.error) throw y.error;
        return g(k());
      }
    },
  },
]);
