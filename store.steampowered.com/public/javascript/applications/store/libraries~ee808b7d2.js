/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5979],
  {
    11838: function (i, e, o) {
      var a;
      !(function (r, t) {
        "use strict";
        var n = "function",
          s = "undefined",
          b = "object",
          w = "string",
          d = "major",
          l = "model",
          c = "name",
          u = "type",
          m = "vendor",
          p = "version",
          h = "architecture",
          f = "console",
          g = "mobile",
          v = "tablet",
          k = "smarttv",
          x = "wearable",
          y = "embedded",
          _ = "Amazon",
          T = "Apple",
          S = "ASUS",
          q = "BlackBerry",
          z = "Browser",
          A = "Chrome",
          N = "Firefox",
          C = "Google",
          j = "Honor",
          O = "Huawei",
          E = "LG",
          U = "Microsoft",
          P = "Motorola",
          B = "Nvidia",
          M = "OnePlus",
          R = "Opera",
          D = "OPPO",
          V = "Samsung",
          I = "Sharp",
          L = "Sony",
          G = "Xiaomi",
          H = "Zebra",
          $ = "Facebook",
          F = "Chromium OS",
          W = "Mac OS",
          Z = " Browser",
          X = function (i) {
            for (var e = {}, o = 0; o < i.length; o++)
              e[i[o].toUpperCase()] = i[o];
            return e;
          },
          K = function (i, e) {
            return typeof i === w && -1 !== Q(e).indexOf(Q(i));
          },
          Q = function (i) {
            return i.toLowerCase();
          },
          Y = function (i, e) {
            if (typeof i === w)
              return (
                (i = i.replace(/^\s\s*/, "")),
                typeof e === s ? i : i.substring(0, 500)
              );
          },
          J = function (i, e) {
            for (var o, a, r, s, w, d, l = 0; l < e.length && !w; ) {
              var c = e[l],
                u = e[l + 1];
              for (o = a = 0; o < c.length && !w && c[o]; )
                if ((w = c[o++].exec(i)))
                  for (r = 0; r < u.length; r++)
                    (d = w[++a]),
                      typeof (s = u[r]) === b && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == n
                            ? (this[s[0]] = s[1].call(this, d))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                            ? typeof s[1] !== n || (s[1].exec && s[1].test)
                              ? (this[s[0]] = d ? d.replace(s[1], s[2]) : t)
                              : (this[s[0]] = d ? s[1].call(this, d, s[2]) : t)
                            : 4 === s.length &&
                              (this[s[0]] = d
                                ? s[3].call(this, d.replace(s[1], s[2]))
                                : t)
                        : (this[s] = d || t);
              l += 2;
            }
          },
          ii = function (i, e) {
            for (var o in e)
              if (typeof e[o] === b && e[o].length > 0) {
                for (var a = 0; a < e[o].length; a++)
                  if (K(e[o][a], i)) return "?" === o ? t : o;
              } else if (K(e[o], i)) return "?" === o ? t : o;
            return e.hasOwnProperty("*") ? e["*"] : i;
          },
          ei = {
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
          oi = {
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
              [p, [c, R + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [p, [c, R + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [p, [c, R]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [p, [c, "Baidu"]],
              [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
              [p, [c, "Maxthon"]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
                /(heytap|ovi|115)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [c, p],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [p, [c, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [p, [c, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [p, [c, "UC" + z]],
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
              [p, [c, "Smart Lenovo " + z]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[c, /(.+)/, "$1 Secure " + z], p],
              [/\bfocus\/([\w\.]+)/i],
              [p, [c, N + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [p, [c, R + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [p, [c, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [p, [c, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [p, [c, R + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [p, [c, "MIUI" + Z]],
              [/fxios\/([\w\.-]+)/i],
              [p, [c, N]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [p, [c, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [[c, /(.+)/, "$1Browser"], p],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [[c, /(.+)/, "$1" + Z], p],
              [/samsungbrowser\/([\w\.]+)/i],
              [p, [c, V + " Internet"]],
              [/metasr[\/ ]?([\d\.]+)/i],
              [p, [c, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [[c, "Sogou Mobile"], p],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
              ],
              [c, p],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [c],
              [
                /ome\/([\w\.]+) \w* ?(iron) saf/i,
                /ome\/([\w\.]+).+qihu (360)[es]e/i,
              ],
              [p, c],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[c, $], p],
              [
                /(Klarna)\/([\w\.]+)/i,
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /(daum)apps[\/ ]([\w\.]+)/i,
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
              [p, [c, A + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[c, A + " WebView"], p],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [p, [c, "Android " + z]],
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
                  ii,
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
              [/(wolvic|librewolf)\/([\w\.]+)/i],
              [c, p],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [p, [c, N + " Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /\b(links) \(([\w\.]+)/i,
              ],
              [c, [p, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [c, [p, /master.|lts./, ""]],
            ],
            cpu: [
              [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
              [[h, "amd64"]],
              [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
              [[h, "ia32"]],
              [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
              [[h, "arm64"]],
              [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
              [[h, "armhf"]],
              [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
              [[h, "arm"]],
              [/((ppc|powerpc)(64)?)( mac|;|\))/i],
              [[h, /ower/, "", Q]],
              [/ sun4\w[;\)]/i],
              [[h, "sparc"]],
              [
                /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
              ],
              [[h, Q]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [l, [m, V], [u, v]],
              [
                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [l, [m, V], [u, g]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [l, [m, T], [u, g]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [l, [m, T], [u, v]],
              [/(macintosh);/i],
              [l, [m, T]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [l, [m, I], [u, g]],
              [
                /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i,
              ],
              [l, [m, j], [u, v]],
              [/honor([-\w ]+)[;\)]/i],
              [l, [m, j], [u, g]],
              [
                /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i,
              ],
              [l, [m, O], [u, v]],
              [
                /(?:huawei)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [l, [m, O], [u, g]],
              [
                /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
                /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i,
              ],
              [
                [l, /_/g, " "],
                [m, G],
                [u, v],
              ],
              [
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
                / ([\w ]+) miui\/v?\d/i,
              ],
              [
                [l, /_/g, " "],
                [m, G],
                [u, g],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [l, [m, D], [u, g]],
              [/\b(opd2(\d{3}a?))(?: bui|\))/i],
              [l, [m, ii, { OnePlus: ["304", "403", "203"], "*": D }], [u, v]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [l, [m, "Vivo"], [u, g]],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [l, [m, "Realme"], [u, g]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [l, [m, P], [u, g]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [l, [m, P], [u, v]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [l, [m, E], [u, v]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [l, [m, E], [u, g]],
              [
                /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
                /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i,
              ],
              [l, [m, "Lenovo"], [u, v]],
              [/(nokia) (t[12][01])/i],
              [m, l, [u, v]],
              [
                /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
                /nokia[-_ ]?(([-\w\. ]*))/i,
              ],
              [
                [l, /_/g, " "],
                [u, g],
                [m, "Nokia"],
              ],
              [/(pixel (c|tablet))\b/i],
              [l, [m, C], [u, v]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [l, [m, C], [u, g]],
              [
                /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [l, [m, L], [u, g]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [l, "Xperia Tablet"],
                [m, L],
                [u, v],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [l, [m, M], [u, g]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [l, [m, _], [u, v]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [l, /(.+)/g, "Fire Phone $1"],
                [m, _],
                [u, g],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [l, m, [u, v]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [l, [m, q], [u, g]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [l, [m, S], [u, v]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [l, [m, S], [u, g]],
              [/(nexus 9)/i],
              [l, [m, "HTC"], [u, v]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [m, [l, /_/g, " "], [u, g]],
              [
                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
              ],
              [l, [m, "TCL"], [u, v]],
              [/(itel) ((\w+))/i],
              [
                [m, Q],
                l,
                [u, ii, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [l, [m, "Acer"], [u, v]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [l, [m, "Meizu"], [u, g]],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [l, [m, "Ulefone"], [u, g]],
              [
                /; (energy ?\w+)(?: bui|\))/i,
                /; energizer ([\w ]+)(?: bui|\))/i,
              ],
              [l, [m, "Energizer"], [u, g]],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [l, [m, "Cat"], [u, g]],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [l, [m, "Smartfren"], [u, g]],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [l, [m, "Nothing"], [u, g]],
              [
                /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
                /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i,
              ],
              [l, [m, "Archos"], [u, v]],
              [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
              [l, [m, "Archos"], [u, g]],
              [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
              [m, l, [u, v]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
                /; (hmd|imo) ([\w ]+?)(?: bui|\))/i,
                /(hp) ([\w ]+\w)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [m, l, [u, g]],
              [
                /(kobo)\s(ereader|touch)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [m, l, [u, v]],
              [/(surface duo)/i],
              [l, [m, U], [u, v]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [l, [m, "Fairphone"], [u, g]],
              [/(u304aa)/i],
              [l, [m, "AT&T"], [u, g]],
              [/\bsie-(\w*)/i],
              [l, [m, "Siemens"], [u, g]],
              [/\b(rct\w+) b/i],
              [l, [m, "RCA"], [u, v]],
              [/\b(venue[\d ]{2,7}) b/i],
              [l, [m, "Dell"], [u, v]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [l, [m, "Verizon"], [u, v]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [l, [m, "Barnes & Noble"], [u, v]],
              [/\b(tm\d{3}\w+) b/i],
              [l, [m, "NuVision"], [u, v]],
              [/\b(k88) b/i],
              [l, [m, "ZTE"], [u, v]],
              [/\b(nx\d{3}j) b/i],
              [l, [m, "ZTE"], [u, g]],
              [/\b(gen\d{3}) b.+49h/i],
              [l, [m, "Swiss"], [u, g]],
              [/\b(zur\d{3}) b/i],
              [l, [m, "Swiss"], [u, v]],
              [/\b((zeki)?tb.*\b) b/i],
              [l, [m, "Zeki"], [u, v]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[m, "Dragon Touch"], l, [u, v]],
              [/\b(ns-?\w{0,9}) b/i],
              [l, [m, "Insignia"], [u, v]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [l, [m, "NextBook"], [u, v]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[m, "Voice"], l, [u, g]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[m, "LvTel"], l, [u, g]],
              [/\b(ph-1) /i],
              [l, [m, "Essential"], [u, g]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [l, [m, "Envizen"], [u, v]],
              [/\b(trio[-\w\. ]+) b/i],
              [l, [m, "MachSpeed"], [u, v]],
              [/\btu_(1491) b/i],
              [l, [m, "Rotor"], [u, v]],
              [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
              [l, [m, B], [u, v]],
              [/(sprint) (\w+)/i],
              [m, l, [u, g]],
              [/(kin\.[onetw]{3})/i],
              [
                [l, /\./g, " "],
                [m, U],
                [u, g],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [l, [m, H], [u, v]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [l, [m, H], [u, g]],
              [/smart-tv.+(samsung)/i],
              [m, [u, k]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [l, /^/, "SmartTV"],
                [m, V],
                [u, k],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [m, E],
                [u, k],
              ],
              [/(apple) ?tv/i],
              [m, [l, T + " TV"], [u, k]],
              [/crkey/i],
              [
                [l, A + "cast"],
                [m, C],
                [u, k],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [l, [m, _], [u, k]],
              [/(shield \w+ tv)/i],
              [l, [m, B], [u, k]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [l, [m, I], [u, k]],
              [/(bravia[\w ]+)( bui|\))/i],
              [l, [m, L], [u, k]],
              [/(mi(tv|box)-?\w+) bui/i],
              [l, [m, G], [u, k]],
              [/Hbbtv.*(technisat) (.*);/i],
              [m, l, [u, k]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [m, Y],
                [l, Y],
                [u, k],
              ],
              [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
              [l, [u, k]],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[u, k]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [m, l, [u, f]],
              [/droid.+; (shield)( bui|\))/i],
              [l, [m, B], [u, f]],
              [/(playstation \w+)/i],
              [l, [m, L], [u, f]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [l, [m, U], [u, f]],
              [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
              [l, [m, V], [u, x]],
              [
                /((pebble))app/i,
                /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i,
              ],
              [m, l, [u, x]],
              [/(ow(?:19|20)?we?[1-3]{1,3})/i],
              [l, [m, D], [u, x]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [l, [m, T], [u, x]],
              [/(opwwe\d{3})/i],
              [l, [m, M], [u, x]],
              [/(moto 360)/i],
              [l, [m, P], [u, x]],
              [/(smartwatch 3)/i],
              [l, [m, L], [u, x]],
              [/(g watch r)/i],
              [l, [m, E], [u, x]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [l, [m, H], [u, x]],
              [/droid.+; (glass) \d/i],
              [l, [m, C], [u, x]],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [m, l, [u, x]],
              [/; (quest( \d| pro)?)/i],
              [l, [m, $], [u, x]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [m, [u, y]],
              [/(aeobc)\b/i],
              [l, [m, _], [u, y]],
              [/(homepod).+mac os/i],
              [l, [m, T], [u, y]],
              [/windows iot/i],
              [[u, y]],
              [
                /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
              ],
              [l, [u, g]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [l, [u, v]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[u, v]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[u, g]],
              [/droid .+?; ([\w\. -]+)( bui|\))/i],
              [l, [m, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [p, [c, "EdgeHTML"]],
              [/(arkweb)\/([\w\.]+)/i],
              [c, p],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [p, [c, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [c, p],
              [/ladybird\//i],
              [[c, "LibWeb"]],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [p, c],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [c, p],
              [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
              [c, [p, ii, ei]],
              [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
              ],
              [
                [p, ii, ei],
                [c, "Windows"],
              ],
              [
                /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
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
                [c, W],
                [p, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [p, c],
              [/(ubuntu) ([\w\.]+) like android/i],
              [[c, /(.+)/, "$1 Touch"], p],
              [
                /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i,
              ],
              [c, p],
              [/\(bb(10);/i],
              [p, [c, q]],
              [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
              [p, [c, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [p, [c, N + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [p, [c, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [p, [c, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [p, [c, A + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[c, F], p],
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
                /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,
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
          ai = function (i, e) {
            if ((typeof i === b && ((e = i), (i = t)), !(this instanceof ai)))
              return new ai(i, e).getResult();
            var o = typeof r !== s && r.navigator ? r.navigator : t,
              a = i || (o && o.userAgent ? o.userAgent : ""),
              f = o && o.userAgentData ? o.userAgentData : t,
              k = e
                ? (function (i, e) {
                    var o = {};
                    for (var a in i)
                      e[a] && e[a].length % 2 == 0
                        ? (o[a] = e[a].concat(i[a]))
                        : (o[a] = i[a]);
                    return o;
                  })(oi, e)
                : oi,
              x = o && o.userAgent == a;
            return (
              (this.getBrowser = function () {
                var i,
                  e = {};
                return (
                  (e[c] = t),
                  (e[p] = t),
                  J.call(e, a, k.browser),
                  (e[d] =
                    typeof (i = e[p]) === w
                      ? i.replace(/[^\d\.]/g, "").split(".")[0]
                      : t),
                  x &&
                    o &&
                    o.brave &&
                    typeof o.brave.isBrave == n &&
                    (e[c] = "Brave"),
                  e
                );
              }),
              (this.getCPU = function () {
                var i = {};
                return (i[h] = t), J.call(i, a, k.cpu), i;
              }),
              (this.getDevice = function () {
                var i = {};
                return (
                  (i[m] = t),
                  (i[l] = t),
                  (i[u] = t),
                  J.call(i, a, k.device),
                  x && !i[u] && f && f.mobile && (i[u] = g),
                  x &&
                    "Macintosh" == i[l] &&
                    o &&
                    typeof o.standalone !== s &&
                    o.maxTouchPoints &&
                    o.maxTouchPoints > 2 &&
                    ((i[l] = "iPad"), (i[u] = v)),
                  i
                );
              }),
              (this.getEngine = function () {
                var i = {};
                return (i[c] = t), (i[p] = t), J.call(i, a, k.engine), i;
              }),
              (this.getOS = function () {
                var i = {};
                return (
                  (i[c] = t),
                  (i[p] = t),
                  J.call(i, a, k.os),
                  x &&
                    !i[c] &&
                    f &&
                    f.platform &&
                    "Unknown" != f.platform &&
                    (i[c] = f.platform
                      .replace(/chrome os/i, F)
                      .replace(/macos/i, W)),
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
                return a;
              }),
              (this.setUA = function (i) {
                return (
                  (a = typeof i === w && i.length > 500 ? Y(i, 500) : i), this
                );
              }),
              this.setUA(a),
              this
            );
          };
        (ai.VERSION = "1.0.41"),
          (ai.BROWSER = X([c, p, d])),
          (ai.CPU = X([h])),
          (ai.DEVICE = X([l, m, u, f, g, k, v, x, y])),
          (ai.ENGINE = ai.OS = X([c, p])),
          typeof e !== s
            ? (i.exports && (e = i.exports = ai), (e.UAParser = ai))
            : o.amdO
              ? (a = function () {
                  return ai;
                }.call(e, o, e, i)) === t || (i.exports = a)
              : typeof r !== s && (r.UAParser = ai);
        var ri = typeof r !== s && (r.jQuery || r.Zepto);
        if (ri && !ri.ua) {
          var ti = new ai();
          (ri.ua = ti.getResult()),
            (ri.ua.get = function () {
              return ti.getUA();
            }),
            (ri.ua.set = function (i) {
              ti.setUA(i);
              var e = ti.getResult();
              for (var o in e) ri.ua[o] = e[o];
            });
        }
      })("object" == typeof window ? window : this);
    },
  },
]);
