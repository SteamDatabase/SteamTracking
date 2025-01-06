/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5979],
  {
    11838: function (i, e, r) {
      var o;
      !(function (s, t) {
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
            for (var e = {}, r = 0; r < i.length; r++)
              e[i[r].toUpperCase()] = i[r];
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
            for (var r, o, s, n, u, l, w = 0; w < e.length && !u; ) {
              var c = e[w],
                d = e[w + 1];
              for (r = o = 0; r < c.length && !u && c[r]; )
                if ((u = c[r++].exec(i)))
                  for (s = 0; s < d.length; s++)
                    (l = u[++o]),
                      typeof (n = d[s]) === b && n.length > 0
                        ? 2 === n.length
                          ? typeof n[1] == a
                            ? (this[n[0]] = n[1].call(this, l))
                            : (this[n[0]] = n[1])
                          : 3 === n.length
                            ? typeof n[1] !== a || (n[1].exec && n[1].test)
                              ? (this[n[0]] = l ? l.replace(n[1], n[2]) : t)
                              : (this[n[0]] = l ? n[1].call(this, l, n[2]) : t)
                            : 4 === n.length &&
                              (this[n[0]] = l
                                ? n[3].call(this, l.replace(n[1], n[2]))
                                : t)
                        : (this[n] = l || t);
              w += 2;
            }
          },
          X = function (i, e) {
            for (var r in e)
              if (typeof e[r] === b && e[r].length > 0) {
                for (var o = 0; o < e[r].length; o++)
                  if (G(e[r][o], i)) return "?" === r ? t : r;
              } else if (G(e[r], i)) return "?" === r ? t : r;
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
              [p, [c, "MIUI" + V]],
              [/fxios\/([\w\.-]+)/i],
              [p, [c, C]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [p, [c, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [[c, /(.+)/, "$1Browser"], p],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [[c, /(.+)/, "$1" + V], p],
              [/samsungbrowser\/([\w\.]+)/i],
              [p, [c, j + " Internet"]],
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
              [/(wolvic|librewolf)\/([\w\.]+)/i],
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
              [/(?:honor)([-\w ]+)[;\)]/i],
              [w, [h, "Honor"], [d, v]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [w, [h, z], [d, g]],
              [
                /(?:huawei)([-\w ]+)[;\)]/i,
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
                /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
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
              [
                /; (energy ?\w+)(?: bui|\))/i,
                /; energizer ([\w ]+)(?: bui|\))/i,
              ],
              [w, [h, "Energizer"], [d, v]],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [w, [h, "Cat"], [d, v]],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [w, [h, "Smartfren"], [d, v]],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [w, [h, "Nothing"], [d, v]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
                /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [h, w, [d, v]],
              [
                /(imo) (tab \w+)/i,
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
              [/droid.+; (glass) \d/i],
              [w, [h, T], [d, x]],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [h, w, [d, x]],
              [/; (quest( \d| pro)?)/i],
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
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i,
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
            if ((typeof i === b && ((e = i), (i = t)), !(this instanceof Y)))
              return new Y(i, e).getResult();
            var r = typeof s !== n && s.navigator ? s.navigator : t,
              o = i || (r && r.userAgent ? r.userAgent : ""),
              f = r && r.userAgentData ? r.userAgentData : t,
              k = e
                ? (function (i, e) {
                    var r = {};
                    for (var o in i)
                      e[o] && e[o].length % 2 == 0
                        ? (r[o] = e[o].concat(i[o]))
                        : (r[o] = i[o]);
                    return r;
                  })(J, e)
                : J,
              x = r && r.userAgent == o;
            return (
              (this.getBrowser = function () {
                var i,
                  e = {};
                return (
                  (e[c] = t),
                  (e[p] = t),
                  W.call(e, o, k.browser),
                  (e[l] =
                    typeof (i = e[p]) === u
                      ? i.replace(/[^\d\.]/g, "").split(".")[0]
                      : t),
                  x &&
                    r &&
                    r.brave &&
                    typeof r.brave.isBrave == a &&
                    (e[c] = "Brave"),
                  e
                );
              }),
              (this.getCPU = function () {
                var i = {};
                return (i[m] = t), W.call(i, o, k.cpu), i;
              }),
              (this.getDevice = function () {
                var i = {};
                return (
                  (i[h] = t),
                  (i[w] = t),
                  (i[d] = t),
                  W.call(i, o, k.device),
                  x && !i[d] && f && f.mobile && (i[d] = v),
                  x &&
                    "Macintosh" == i[w] &&
                    r &&
                    typeof r.standalone !== n &&
                    r.maxTouchPoints &&
                    r.maxTouchPoints > 2 &&
                    ((i[w] = "iPad"), (i[d] = g)),
                  i
                );
              }),
              (this.getEngine = function () {
                var i = {};
                return (i[c] = t), (i[p] = t), W.call(i, o, k.engine), i;
              }),
              (this.getOS = function () {
                var i = {};
                return (
                  (i[c] = t),
                  (i[p] = t),
                  W.call(i, o, k.os),
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
                return o;
              }),
              (this.setUA = function (i) {
                return (
                  (o = typeof i === u && i.length > 500 ? F(i, 500) : i), this
                );
              }),
              this.setUA(o),
              this
            );
          };
        (Y.VERSION = "1.0.40"),
          (Y.BROWSER = $([c, p, l])),
          (Y.CPU = $([m])),
          (Y.DEVICE = $([w, h, d, f, v, k, g, x, y])),
          (Y.ENGINE = Y.OS = $([c, p])),
          typeof e !== n
            ? (i.exports && (e = i.exports = Y), (e.UAParser = Y))
            : r.amdO
              ? (o = function () {
                  return Y;
                }.call(e, r, e, i)) === t || (i.exports = o)
              : typeof s !== n && (s.UAParser = Y);
        var ii = typeof s !== n && (s.jQuery || s.Zepto);
        if (ii && !ii.ua) {
          var ei = new Y();
          (ii.ua = ei.getResult()),
            (ii.ua.get = function () {
              return ei.getUA();
            }),
            (ii.ua.set = function (i) {
              ei.setUA(i);
              var e = ei.getResult();
              for (var r in e) ii.ua[r] = e[r];
            });
        }
      })("object" == typeof window ? window : this);
    },
    54806: (i, e, r) => {
      "use strict";
      r.d(e, { E: () => m });
      var o = r(90626),
        s = r(86709),
        t = r(45747),
        a = r(74500),
        n = r(57168);
      function b(i, e) {
        return i.filter((i) => !e.includes(i));
      }
      var u = class extends a.Q {
          #i;
          #e;
          #r;
          #o;
          #s;
          #t;
          #a;
          #n;
          constructor(i, e, r) {
            super(),
              (this.#i = i),
              (this.#o = r),
              (this.#r = []),
              (this.#s = []),
              (this.#e = []),
              this.setQueries(e);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#s.forEach((i) => {
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
              this.#s.forEach((i) => {
                i.destroy();
              });
          }
          setQueries(i, e, r) {
            (this.#r = i),
              (this.#o = e),
              s.j.batch(() => {
                const i = this.#s,
                  e = this.#u(this.#r);
                e.forEach((i) =>
                  i.observer.setOptions(i.defaultedQueryOptions, r),
                );
                const o = e.map((i) => i.observer),
                  s = o.map((i) => i.getCurrentResult()),
                  t = o.some((e, r) => e !== i[r]);
                (i.length !== o.length || t) &&
                  ((this.#s = o),
                  (this.#e = s),
                  this.hasListeners() &&
                    (b(i, o).forEach((i) => {
                      i.destroy();
                    }),
                    b(o, i).forEach((i) => {
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
            return this.#s.map((i) => i.getCurrentQuery());
          }
          getObservers() {
            return this.#s;
          }
          getOptimisticResult(i, e) {
            const r = this.#u(i).map((i) =>
              i.observer.getOptimisticResult(i.defaultedQueryOptions),
            );
            return [r, (i) => this.#w(i ?? r, e), () => this.#c(r, i)];
          }
          #c(i, e) {
            const r = this.#u(e);
            return r.map((e, o) => {
              const s = i[o];
              return e.defaultedQueryOptions.notifyOnChangeProps
                ? s
                : e.observer.trackResult(s, (i) => {
                    r.forEach((e) => {
                      e.observer.trackProp(i);
                    });
                  });
            });
          }
          #w(i, e) {
            return e
              ? ((this.#t && this.#e === this.#n && e === this.#a) ||
                  ((this.#a = e),
                  (this.#n = this.#e),
                  (this.#t = (0, n.BH)(this.#t, e(i)))),
                this.#t)
              : i;
          }
          #u(i) {
            const e = new Map(this.#s.map((i) => [i.options.queryHash, i])),
              r = [];
            return (
              i.forEach((i) => {
                const o = this.#i.defaultQueryOptions(i),
                  s = e.get(o.queryHash);
                if (s) r.push({ defaultedQueryOptions: o, observer: s });
                else {
                  const i = this.#s.find(
                    (i) => i.options.queryHash === o.queryHash,
                  );
                  r.push({
                    defaultedQueryOptions: o,
                    observer: i ?? new t.$(this.#i, o),
                  });
                }
              }),
              r.sort(
                (e, r) =>
                  i.findIndex(
                    (i) => i.queryHash === e.defaultedQueryOptions.queryHash,
                  ) -
                  i.findIndex(
                    (i) => i.queryHash === r.defaultedQueryOptions.queryHash,
                  ),
              )
            );
          }
          #b(i, e) {
            const r = this.#s.indexOf(i);
            -1 !== r &&
              ((this.#e = (function (i, e, r) {
                const o = i.slice(0);
                return (o[e] = r), o;
              })(this.#e, r, e)),
              this.#l());
          }
          #l() {
            if (this.hasListeners()) {
              this.#t !==
                this.#w(this.#c(this.#e, this.#r), this.#o?.combine) &&
                s.j.batch(() => {
                  this.listeners.forEach((i) => {
                    i(this.#e);
                  });
                });
            }
          }
        },
        l = r(75233),
        w = r(22730),
        c = r(43424),
        d = r(19086),
        h = r(44407),
        p = r(19866);
      function m({ queries: i, ...e }, r) {
        const a = (0, l.jE)(r),
          n = (0, w.w)(),
          b = (0, c.h)(),
          m = o.useMemo(
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
        const [f] = o.useState(() => new u(a, m, e)),
          [v, g, k] = f.getOptimisticResult(m, e.combine);
        o.useSyncExternalStore(
          o.useCallback(
            (i) => (n ? p.l : f.subscribe(s.j.batchCalls(i))),
            [f, n],
          ),
          () => f.getCurrentResult(),
          () => f.getCurrentResult(),
        ),
          o.useEffect(() => {
            f.setQueries(m, e, { listeners: !1 });
          }, [m, e, f]);
        const x = v.some((i, e) => (0, h.EU)(m[e], i))
          ? v.flatMap((i, e) => {
              const r = m[e];
              if (r) {
                const e = new t.$(a, r);
                if ((0, h.EU)(r, i)) return (0, h.iL)(r, e, b);
                (0, h.nE)(i, n) && (0, h.iL)(r, e, b);
              }
              return [];
            })
          : [];
        if (x.length > 0) throw Promise.all(x);
        const y = v.find((i, e) => {
          const r = m[e];
          return (
            r &&
            (0, d.$1)({
              result: i,
              errorResetBoundary: b,
              throwOnError: r.throwOnError,
              query: a.getQueryCache().get(r.queryHash),
            })
          );
        });
        if (y?.error) throw y.error;
        return g(k());
      }
    },
  },
]);
