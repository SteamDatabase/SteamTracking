/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5979],
  {
    11838: function (i, e, o) {
      var a;
      !(function (r, n) {
        "use strict";
        var t = "function",
          s = "undefined",
          b = "object",
          w = "string",
          l = "major",
          d = "model",
          c = "name",
          u = "type",
          m = "vendor",
          p = "version",
          h = "architecture",
          f = "console",
          v = "mobile",
          g = "tablet",
          k = "smarttv",
          x = "wearable",
          y = "embedded",
          _ = "Amazon",
          T = "Apple",
          S = "ASUS",
          q = "BlackBerry",
          z = "Browser",
          N = "Chrome",
          A = "Firefox",
          C = "Google",
          O = "Huawei",
          E = "LG",
          U = "Microsoft",
          P = "Motorola",
          j = "Opera",
          B = "Samsung",
          M = "Sharp",
          R = "Sony",
          D = "Xiaomi",
          V = "Zebra",
          I = "Facebook",
          G = "Chromium OS",
          L = "Mac OS",
          H = " Browser",
          F = function (i) {
            for (var e = {}, o = 0; o < i.length; o++)
              e[i[o].toUpperCase()] = i[o];
            return e;
          },
          Z = function (i, e) {
            return typeof i === w && -1 !== $(e).indexOf($(i));
          },
          $ = function (i) {
            return i.toLowerCase();
          },
          W = function (i, e) {
            if (typeof i === w)
              return (
                (i = i.replace(/^\s\s*/, "")),
                typeof e === s ? i : i.substring(0, 500)
              );
          },
          X = function (i, e) {
            for (var o, a, r, s, w, l, d = 0; d < e.length && !w; ) {
              var c = e[d],
                u = e[d + 1];
              for (o = a = 0; o < c.length && !w && c[o]; )
                if ((w = c[o++].exec(i)))
                  for (r = 0; r < u.length; r++)
                    (l = w[++a]),
                      typeof (s = u[r]) === b && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == t
                            ? (this[s[0]] = s[1].call(this, l))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                            ? typeof s[1] !== t || (s[1].exec && s[1].test)
                              ? (this[s[0]] = l ? l.replace(s[1], s[2]) : n)
                              : (this[s[0]] = l ? s[1].call(this, l, s[2]) : n)
                            : 4 === s.length &&
                              (this[s[0]] = l
                                ? s[3].call(this, l.replace(s[1], s[2]))
                                : n)
                        : (this[s] = l || n);
              d += 2;
            }
          },
          K = function (i, e) {
            for (var o in e)
              if (typeof e[o] === b && e[o].length > 0) {
                for (var a = 0; a < e[o].length; a++)
                  if (Z(e[o][a], i)) return "?" === o ? n : o;
              } else if (Z(e[o], i)) return "?" === o ? n : o;
            return e.hasOwnProperty("*") ? e["*"] : i;
          },
          Q = {
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
          Y = {
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
              [p, [c, j + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [p, [c, j + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [p, [c, j]],
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
              [p, [c, A + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [p, [c, j + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [p, [c, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [p, [c, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [p, [c, j + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [p, [c, "MIUI" + H]],
              [/fxios\/([\w\.-]+)/i],
              [p, [c, A]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [p, [c, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [[c, /(.+)/, "$1Browser"], p],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [[c, /(.+)/, "$1" + H], p],
              [/samsungbrowser\/([\w\.]+)/i],
              [p, [c, B + " Internet"]],
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
              [[c, I], p],
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
              [p, [c, N + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[c, N + " WebView"], p],
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
                  K,
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
              [p, [c, A + " Reality"]],
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
              [[h, "amd64"]],
              [/(ia32(?=;))/i],
              [[h, $]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[h, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[h, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[h, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[h, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[h, /ower/, "", $]],
              [/(sun4\w)[;\)]/i],
              [[h, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[h, $]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [d, [m, B], [u, g]],
              [
                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [d, [m, B], [u, v]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [d, [m, T], [u, v]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [d, [m, T], [u, g]],
              [/(macintosh);/i],
              [d, [m, T]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [d, [m, M], [u, v]],
              [/(?:honor)([-\w ]+)[;\)]/i],
              [d, [m, "Honor"], [u, v]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [d, [m, O], [u, g]],
              [
                /(?:huawei)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [d, [m, O], [u, v]],
              [
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
              ],
              [
                [d, /_/g, " "],
                [m, D],
                [u, v],
              ],
              [
                /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
                /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
              ],
              [
                [d, /_/g, " "],
                [m, D],
                [u, g],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [d, [m, "OPPO"], [u, v]],
              [/\b(opd2\d{3}a?) bui/i],
              [d, [m, "OPPO"], [u, g]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [d, [m, "Vivo"], [u, v]],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [d, [m, "Realme"], [u, v]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [d, [m, P], [u, v]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [d, [m, P], [u, g]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [d, [m, E], [u, g]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [d, [m, E], [u, v]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [d, [m, "Lenovo"], [u, g]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [d, /_/g, " "],
                [m, "Nokia"],
                [u, v],
              ],
              [/(pixel c)\b/i],
              [d, [m, C], [u, g]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [d, [m, C], [u, v]],
              [
                /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [d, [m, R], [u, v]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [d, "Xperia Tablet"],
                [m, R],
                [u, g],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [d, [m, "OnePlus"], [u, v]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [d, [m, _], [u, g]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [d, /(.+)/g, "Fire Phone $1"],
                [m, _],
                [u, v],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [d, m, [u, g]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [d, [m, q], [u, v]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [d, [m, S], [u, g]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [d, [m, S], [u, v]],
              [/(nexus 9)/i],
              [d, [m, "HTC"], [u, g]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [m, [d, /_/g, " "], [u, v]],
              [
                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
              ],
              [d, [m, "TCL"], [u, g]],
              [/(itel) ((\w+))/i],
              [
                [m, $],
                d,
                [u, K, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [d, [m, "Acer"], [u, g]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [d, [m, "Meizu"], [u, v]],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [d, [m, "Ulefone"], [u, v]],
              [
                /; (energy ?\w+)(?: bui|\))/i,
                /; energizer ([\w ]+)(?: bui|\))/i,
              ],
              [d, [m, "Energizer"], [u, v]],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [d, [m, "Cat"], [u, v]],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [d, [m, "Smartfren"], [u, v]],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [d, [m, "Nothing"], [u, v]],
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
              [m, d, [u, v]],
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
              [m, d, [u, g]],
              [/(surface duo)/i],
              [d, [m, U], [u, g]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [d, [m, "Fairphone"], [u, v]],
              [/(u304aa)/i],
              [d, [m, "AT&T"], [u, v]],
              [/\bsie-(\w*)/i],
              [d, [m, "Siemens"], [u, v]],
              [/\b(rct\w+) b/i],
              [d, [m, "RCA"], [u, g]],
              [/\b(venue[\d ]{2,7}) b/i],
              [d, [m, "Dell"], [u, g]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [d, [m, "Verizon"], [u, g]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [d, [m, "Barnes & Noble"], [u, g]],
              [/\b(tm\d{3}\w+) b/i],
              [d, [m, "NuVision"], [u, g]],
              [/\b(k88) b/i],
              [d, [m, "ZTE"], [u, g]],
              [/\b(nx\d{3}j) b/i],
              [d, [m, "ZTE"], [u, v]],
              [/\b(gen\d{3}) b.+49h/i],
              [d, [m, "Swiss"], [u, v]],
              [/\b(zur\d{3}) b/i],
              [d, [m, "Swiss"], [u, g]],
              [/\b((zeki)?tb.*\b) b/i],
              [d, [m, "Zeki"], [u, g]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[m, "Dragon Touch"], d, [u, g]],
              [/\b(ns-?\w{0,9}) b/i],
              [d, [m, "Insignia"], [u, g]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [d, [m, "NextBook"], [u, g]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[m, "Voice"], d, [u, v]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[m, "LvTel"], d, [u, v]],
              [/\b(ph-1) /i],
              [d, [m, "Essential"], [u, v]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [d, [m, "Envizen"], [u, g]],
              [/\b(trio[-\w\. ]+) b/i],
              [d, [m, "MachSpeed"], [u, g]],
              [/\btu_(1491) b/i],
              [d, [m, "Rotor"], [u, g]],
              [/(shield[\w ]+) b/i],
              [d, [m, "Nvidia"], [u, g]],
              [/(sprint) (\w+)/i],
              [m, d, [u, v]],
              [/(kin\.[onetw]{3})/i],
              [
                [d, /\./g, " "],
                [m, U],
                [u, v],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [d, [m, V], [u, g]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [d, [m, V], [u, v]],
              [/smart-tv.+(samsung)/i],
              [m, [u, k]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [d, /^/, "SmartTV"],
                [m, B],
                [u, k],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [m, E],
                [u, k],
              ],
              [/(apple) ?tv/i],
              [m, [d, T + " TV"], [u, k]],
              [/crkey/i],
              [
                [d, N + "cast"],
                [m, C],
                [u, k],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [d, [m, _], [u, k]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [d, [m, M], [u, k]],
              [/(bravia[\w ]+)( bui|\))/i],
              [d, [m, R], [u, k]],
              [/(mitv-\w{5}) bui/i],
              [d, [m, D], [u, k]],
              [/Hbbtv.*(technisat) (.*);/i],
              [m, d, [u, k]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [m, W],
                [d, W],
                [u, k],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[u, k]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [m, d, [u, f]],
              [/droid.+; (shield) bui/i],
              [d, [m, "Nvidia"], [u, f]],
              [/(playstation [345portablevi]+)/i],
              [d, [m, R], [u, f]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [d, [m, U], [u, f]],
              [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
              [d, [m, B], [u, x]],
              [/((pebble))app/i],
              [m, d, [u, x]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [d, [m, T], [u, x]],
              [/droid.+; (glass) \d/i],
              [d, [m, C], [u, x]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [d, [m, V], [u, x]],
              [/droid.+; (glass) \d/i],
              [d, [m, C], [u, x]],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [m, d, [u, x]],
              [/; (quest( \d| pro)?)/i],
              [d, [m, I], [u, x]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [m, [u, y]],
              [/(aeobc)\b/i],
              [d, [m, _], [u, y]],
              [
                /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
              ],
              [d, [u, v]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [d, [u, g]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[u, g]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[u, v]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [d, [m, "Generic"]],
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
              [c, [p, K, Q]],
              [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
              ],
              [
                [p, K, Q],
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
                [c, L],
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
              [p, [c, q]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [p, [c, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [p, [c, A + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [p, [c, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [p, [c, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [p, [c, N + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[c, G], p],
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
          J = function (i, e) {
            if ((typeof i === b && ((e = i), (i = n)), !(this instanceof J)))
              return new J(i, e).getResult();
            var o = typeof r !== s && r.navigator ? r.navigator : n,
              a = i || (o && o.userAgent ? o.userAgent : ""),
              f = o && o.userAgentData ? o.userAgentData : n,
              k = e
                ? (function (i, e) {
                    var o = {};
                    for (var a in i)
                      e[a] && e[a].length % 2 == 0
                        ? (o[a] = e[a].concat(i[a]))
                        : (o[a] = i[a]);
                    return o;
                  })(Y, e)
                : Y,
              x = o && o.userAgent == a;
            return (
              (this.getBrowser = function () {
                var i,
                  e = {};
                return (
                  (e[c] = n),
                  (e[p] = n),
                  X.call(e, a, k.browser),
                  (e[l] =
                    typeof (i = e[p]) === w
                      ? i.replace(/[^\d\.]/g, "").split(".")[0]
                      : n),
                  x &&
                    o &&
                    o.brave &&
                    typeof o.brave.isBrave == t &&
                    (e[c] = "Brave"),
                  e
                );
              }),
              (this.getCPU = function () {
                var i = {};
                return (i[h] = n), X.call(i, a, k.cpu), i;
              }),
              (this.getDevice = function () {
                var i = {};
                return (
                  (i[m] = n),
                  (i[d] = n),
                  (i[u] = n),
                  X.call(i, a, k.device),
                  x && !i[u] && f && f.mobile && (i[u] = v),
                  x &&
                    "Macintosh" == i[d] &&
                    o &&
                    typeof o.standalone !== s &&
                    o.maxTouchPoints &&
                    o.maxTouchPoints > 2 &&
                    ((i[d] = "iPad"), (i[u] = g)),
                  i
                );
              }),
              (this.getEngine = function () {
                var i = {};
                return (i[c] = n), (i[p] = n), X.call(i, a, k.engine), i;
              }),
              (this.getOS = function () {
                var i = {};
                return (
                  (i[c] = n),
                  (i[p] = n),
                  X.call(i, a, k.os),
                  x &&
                    !i[c] &&
                    f &&
                    f.platform &&
                    "Unknown" != f.platform &&
                    (i[c] = f.platform
                      .replace(/chrome os/i, G)
                      .replace(/macos/i, L)),
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
                  (a = typeof i === w && i.length > 500 ? W(i, 500) : i), this
                );
              }),
              this.setUA(a),
              this
            );
          };
        (J.VERSION = "1.0.40"),
          (J.BROWSER = F([c, p, l])),
          (J.CPU = F([h])),
          (J.DEVICE = F([d, m, u, f, v, k, g, x, y])),
          (J.ENGINE = J.OS = F([c, p])),
          typeof e !== s
            ? (i.exports && (e = i.exports = J), (e.UAParser = J))
            : o.amdO
              ? (a = function () {
                  return J;
                }.call(e, o, e, i)) === n || (i.exports = a)
              : typeof r !== s && (r.UAParser = J);
        var ii = typeof r !== s && (r.jQuery || r.Zepto);
        if (ii && !ii.ua) {
          var ei = new J();
          (ii.ua = ei.getResult()),
            (ii.ua.get = function () {
              return ei.getUA();
            }),
            (ii.ua.set = function (i) {
              ei.setUA(i);
              var e = ei.getResult();
              for (var o in e) ii.ua[o] = e[o];
            });
        }
      })("object" == typeof window ? window : this);
    },
  },
]);
