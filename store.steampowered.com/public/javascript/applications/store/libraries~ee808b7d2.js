/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5979],
  {
    11838: function (i, e, t) {
      var r;
      !(function (o, s) {
        "use strict";
        var a = "function",
          n = "undefined",
          b = "object",
          u = "string",
          l = "major",
          w = "model",
          c = "name",
          d = "type",
          p = "vendor",
          h = "version",
          m = "architecture",
          f = "console",
          v = "mobile",
          g = "tablet",
          k = "smarttv",
          x = "wearable",
          y = "embedded",
          O = "Amazon",
          q = "Apple",
          _ = "ASUS",
          E = "BlackBerry",
          S = "Browser",
          R = "Chrome",
          C = "Firefox",
          T = "Google",
          z = "Huawei",
          N = "LG",
          U = "Microsoft",
          A = "Motorola",
          M = "Opera",
          Q = "Samsung",
          j = "Sharp",
          P = "Sony",
          B = "Xiaomi",
          H = "Zebra",
          D = "Facebook",
          L = "Chromium OS",
          V = "Mac OS",
          I = function (i) {
            for (var e = {}, t = 0; t < i.length; t++)
              e[i[t].toUpperCase()] = i[t];
            return e;
          },
          G = function (i, e) {
            return typeof i === u && -1 !== $(e).indexOf($(i));
          },
          $ = function (i) {
            return i.toLowerCase();
          },
          Z = function (i, e) {
            if (typeof i === u)
              return (
                (i = i.replace(/^\s\s*/, "")),
                typeof e === n ? i : i.substring(0, 500)
              );
          },
          F = function (i, e) {
            for (var t, r, o, n, u, l, w = 0; w < e.length && !u; ) {
              var c = e[w],
                d = e[w + 1];
              for (t = r = 0; t < c.length && !u && c[t]; )
                if ((u = c[t++].exec(i)))
                  for (o = 0; o < d.length; o++)
                    (l = u[++r]),
                      typeof (n = d[o]) === b && n.length > 0
                        ? 2 === n.length
                          ? typeof n[1] == a
                            ? (this[n[0]] = n[1].call(this, l))
                            : (this[n[0]] = n[1])
                          : 3 === n.length
                            ? typeof n[1] !== a || (n[1].exec && n[1].test)
                              ? (this[n[0]] = l ? l.replace(n[1], n[2]) : s)
                              : (this[n[0]] = l ? n[1].call(this, l, n[2]) : s)
                            : 4 === n.length &&
                              (this[n[0]] = l
                                ? n[3].call(this, l.replace(n[1], n[2]))
                                : s)
                        : (this[n] = l || s);
              w += 2;
            }
          },
          W = function (i, e) {
            for (var t in e)
              if (typeof e[t] === b && e[t].length > 0) {
                for (var r = 0; r < e[t].length; r++)
                  if (G(e[t][r], i)) return "?" === t ? s : t;
              } else if (G(e[t], i)) return "?" === t ? s : t;
            return i;
          },
          X = {
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
          K = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [h, [c, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [h, [c, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [c, h],
              [/opios[\/ ]+([\w\.]+)/i],
              [h, [c, M + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [h, [c, M + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [h, [c, M]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [h, [c, "Baidu"]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                /(heytap|ovi)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [c, h],
              [/\bddg\/([\w\.]+)/i],
              [h, [c, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [h, [c, "UC" + S]],
              [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i,
                /micromessenger\/([\w\.]+)/i,
              ],
              [h, [c, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [h, [c, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [h, [c, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [h, [c, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [h, [c, "Smart Lenovo " + S]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[c, /(.+)/, "$1 Secure " + S], h],
              [/\bfocus\/([\w\.]+)/i],
              [h, [c, C + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [h, [c, M + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [h, [c, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [h, [c, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [h, [c, M + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [h, [c, "MIUI " + S]],
              [/fxios\/([-\w\.]+)/i],
              [h, [c, C]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[c, "360 " + S]],
              [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
              [[c, /(.+)/, "$1 " + S], h],
              [/samsungbrowser\/([\w\.]+)/i],
              [h, [c, Q + " Internet"]],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[c, /_/g, " "], h],
              [/metasr[\/ ]?([\d\.]+)/i],
              [h, [c, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [[c, "Sogou Mobile"], h],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [c, h],
              [/(lbbrowser)/i, /\[(linkedin)app\]/i],
              [c],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[c, D], h],
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
              [c, h],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [h, [c, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [h, [c, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [h, [c, R + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[c, R + " WebView"], h],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [h, [c, "Android " + S]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [c, h],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [h, [c, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [h, c],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                c,
                [
                  h,
                  W,
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
              [c, h],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[c, "Netscape"], h],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [h, [c, C + " Reality"]],
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
              [c, h],
              [/(cobalt)\/([\w\.]+)/i],
              [c, [h, /master.|lts./, ""]],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[m, "amd64"]],
              [/(ia32(?=;))/i],
              [[m, $]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[m, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[m, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[m, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[m, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[m, /ower/, "", $]],
              [/(sun4\w)[;\)]/i],
              [[m, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[m, $]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [w, [p, Q], [d, g]],
              [
                /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [w, [p, Q], [d, v]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [w, [p, q], [d, v]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [w, [p, q], [d, g]],
              [/(macintosh);/i],
              [w, [p, q]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [w, [p, j], [d, v]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [w, [p, z], [d, g]],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [w, [p, z], [d, v]],
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
                [p, B],
                [d, v],
              ],
              [
                /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
                /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
              ],
              [
                [w, /_/g, " "],
                [p, B],
                [d, g],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [w, [p, "OPPO"], [d, v]],
              [/\b(opd2\d{3}a?) bui/i],
              [w, [p, "OPPO"], [d, g]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [w, [p, "Vivo"], [d, v]],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [w, [p, "Realme"], [d, v]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [w, [p, A], [d, v]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [w, [p, A], [d, g]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [w, [p, N], [d, g]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [w, [p, N], [d, v]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [w, [p, "Lenovo"], [d, g]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [w, /_/g, " "],
                [p, "Nokia"],
                [d, v],
              ],
              [/(pixel c)\b/i],
              [w, [p, T], [d, g]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [w, [p, T], [d, v]],
              [
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [w, [p, P], [d, v]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [w, "Xperia Tablet"],
                [p, P],
                [d, g],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [w, [p, "OnePlus"], [d, v]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [w, [p, O], [d, g]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [w, /(.+)/g, "Fire Phone $1"],
                [p, O],
                [d, v],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [w, p, [d, g]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [w, [p, E], [d, v]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [w, [p, _], [d, g]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [w, [p, _], [d, v]],
              [/(nexus 9)/i],
              [w, [p, "HTC"], [d, g]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [p, [w, /_/g, " "], [d, v]],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [w, [p, "Acer"], [d, g]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [w, [p, "Meizu"], [d, v]],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [w, [p, "Ulefone"], [d, v]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [p, w, [d, v]],
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
              [p, w, [d, g]],
              [/(surface duo)/i],
              [w, [p, U], [d, g]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [w, [p, "Fairphone"], [d, v]],
              [/(u304aa)/i],
              [w, [p, "AT&T"], [d, v]],
              [/\bsie-(\w*)/i],
              [w, [p, "Siemens"], [d, v]],
              [/\b(rct\w+) b/i],
              [w, [p, "RCA"], [d, g]],
              [/\b(venue[\d ]{2,7}) b/i],
              [w, [p, "Dell"], [d, g]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [w, [p, "Verizon"], [d, g]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [w, [p, "Barnes & Noble"], [d, g]],
              [/\b(tm\d{3}\w+) b/i],
              [w, [p, "NuVision"], [d, g]],
              [/\b(k88) b/i],
              [w, [p, "ZTE"], [d, g]],
              [/\b(nx\d{3}j) b/i],
              [w, [p, "ZTE"], [d, v]],
              [/\b(gen\d{3}) b.+49h/i],
              [w, [p, "Swiss"], [d, v]],
              [/\b(zur\d{3}) b/i],
              [w, [p, "Swiss"], [d, g]],
              [/\b((zeki)?tb.*\b) b/i],
              [w, [p, "Zeki"], [d, g]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[p, "Dragon Touch"], w, [d, g]],
              [/\b(ns-?\w{0,9}) b/i],
              [w, [p, "Insignia"], [d, g]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [w, [p, "NextBook"], [d, g]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[p, "Voice"], w, [d, v]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[p, "LvTel"], w, [d, v]],
              [/\b(ph-1) /i],
              [w, [p, "Essential"], [d, v]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [w, [p, "Envizen"], [d, g]],
              [/\b(trio[-\w\. ]+) b/i],
              [w, [p, "MachSpeed"], [d, g]],
              [/\btu_(1491) b/i],
              [w, [p, "Rotor"], [d, g]],
              [/(shield[\w ]+) b/i],
              [w, [p, "Nvidia"], [d, g]],
              [/(sprint) (\w+)/i],
              [p, w, [d, v]],
              [/(kin\.[onetw]{3})/i],
              [
                [w, /\./g, " "],
                [p, U],
                [d, v],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [w, [p, H], [d, g]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [w, [p, H], [d, v]],
              [/smart-tv.+(samsung)/i],
              [p, [d, k]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [w, /^/, "SmartTV"],
                [p, Q],
                [d, k],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [p, N],
                [d, k],
              ],
              [/(apple) ?tv/i],
              [p, [w, q + " TV"], [d, k]],
              [/crkey/i],
              [
                [w, R + "cast"],
                [p, T],
                [d, k],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [w, [p, O], [d, k]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [w, [p, j], [d, k]],
              [/(bravia[\w ]+)( bui|\))/i],
              [w, [p, P], [d, k]],
              [/(mitv-\w{5}) bui/i],
              [w, [p, B], [d, k]],
              [/Hbbtv.*(technisat) (.*);/i],
              [p, w, [d, k]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [p, Z],
                [w, Z],
                [d, k],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[d, k]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [p, w, [d, f]],
              [/droid.+; (shield) bui/i],
              [w, [p, "Nvidia"], [d, f]],
              [/(playstation [345portablevi]+)/i],
              [w, [p, P], [d, f]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [w, [p, U], [d, f]],
              [/((pebble))app/i],
              [p, w, [d, x]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [w, [p, q], [d, x]],
              [/droid.+; (glass) \d/i],
              [w, [p, T], [d, x]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [w, [p, H], [d, x]],
              [/(quest( \d| pro)?)/i],
              [w, [p, D], [d, x]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [p, [d, y]],
              [/(aeobc)\b/i],
              [w, [p, O], [d, y]],
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
              [w, [p, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [h, [c, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [h, [c, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [c, h],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [h, c],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [c, h],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [c, [h, W, X]],
              [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
              ],
              [
                [h, W, X],
                [c, "Windows"],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [h, /_/g, "."],
                [c, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [c, V],
                [h, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [h, c],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [c, h],
              [/\(bb(10);/i],
              [h, [c, E]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [h, [c, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [h, [c, C + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [h, [c, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [h, [c, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [h, [c, R + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[c, L], h],
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
              [c, h],
              [/(sunos) ?([\w\.\d]*)/i],
              [[c, "Solaris"], h],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [c, h],
            ],
          },
          J = function (i, e) {
            if ((typeof i === b && ((e = i), (i = s)), !(this instanceof J)))
              return new J(i, e).getResult();
            var t = typeof o !== n && o.navigator ? o.navigator : s,
              r = i || (t && t.userAgent ? t.userAgent : ""),
              f = t && t.userAgentData ? t.userAgentData : s,
              k = e
                ? (function (i, e) {
                    var t = {};
                    for (var r in i)
                      e[r] && e[r].length % 2 == 0
                        ? (t[r] = e[r].concat(i[r]))
                        : (t[r] = i[r]);
                    return t;
                  })(K, e)
                : K,
              x = t && t.userAgent == r;
            return (
              (this.getBrowser = function () {
                var i,
                  e = {};
                return (
                  (e[c] = s),
                  (e[h] = s),
                  F.call(e, r, k.browser),
                  (e[l] =
                    typeof (i = e[h]) === u
                      ? i.replace(/[^\d\.]/g, "").split(".")[0]
                      : s),
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
                return (i[m] = s), F.call(i, r, k.cpu), i;
              }),
              (this.getDevice = function () {
                var i = {};
                return (
                  (i[p] = s),
                  (i[w] = s),
                  (i[d] = s),
                  F.call(i, r, k.device),
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
                return (i[c] = s), (i[h] = s), F.call(i, r, k.engine), i;
              }),
              (this.getOS = function () {
                var i = {};
                return (
                  (i[c] = s),
                  (i[h] = s),
                  F.call(i, r, k.os),
                  x &&
                    !i[c] &&
                    f &&
                    f.platform &&
                    "Unknown" != f.platform &&
                    (i[c] = f.platform
                      .replace(/chrome os/i, L)
                      .replace(/macos/i, V)),
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
                return r;
              }),
              (this.setUA = function (i) {
                return (
                  (r = typeof i === u && i.length > 500 ? Z(i, 500) : i), this
                );
              }),
              this.setUA(r),
              this
            );
          };
        (J.VERSION = "1.0.38"),
          (J.BROWSER = I([c, h, l])),
          (J.CPU = I([m])),
          (J.DEVICE = I([w, p, d, f, v, k, g, x, y])),
          (J.ENGINE = J.OS = I([c, h])),
          typeof e !== n
            ? (i.exports && (e = i.exports = J), (e.UAParser = J))
            : t.amdO
              ? (r = function () {
                  return J;
                }.call(e, t, e, i)) === s || (i.exports = r)
              : typeof o !== n && (o.UAParser = J);
        var Y = typeof o !== n && (o.jQuery || o.Zepto);
        if (Y && !Y.ua) {
          var ii = new J();
          (Y.ua = ii.getResult()),
            (Y.ua.get = function () {
              return ii.getUA();
            }),
            (Y.ua.set = function (i) {
              ii.setUA(i);
              var e = ii.getResult();
              for (var t in e) Y.ua[t] = e[t];
            });
        }
      })("object" == typeof window ? window : this);
    },
    54806: (i, e, t) => {
      "use strict";
      t.d(e, { E: () => h });
      var r = t(90626),
        o = t(86709),
        s = t(45747),
        a = t(74500),
        n = t(57168);
      function b(i, e) {
        return i.filter((i) => !e.includes(i));
      }
      var u = class extends a.Q {
          #i;
          #e;
          #t;
          #r;
          #o;
          #s;
          #a;
          constructor(i, e, t) {
            super(),
              (this.#i = i),
              (this.#t = []),
              (this.#r = []),
              (this.#e = []),
              this.setQueries(e);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#r.forEach((i) => {
                i.subscribe((e) => {
                  this.#n(i, e);
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
              o.j.batch(() => {
                const i = this.#r,
                  e = this.#b(this.#t);
                e.forEach((i) =>
                  i.observer.setOptions(i.defaultedQueryOptions, t),
                );
                const r = e.map((i) => i.observer),
                  o = r.map((i) => i.getCurrentResult()),
                  s = r.some((e, t) => e !== i[t]);
                (i.length !== r.length || s) &&
                  ((this.#r = r),
                  (this.#e = o),
                  this.hasListeners() &&
                    (b(i, r).forEach((i) => {
                      i.destroy();
                    }),
                    b(r, i).forEach((i) => {
                      i.subscribe((e) => {
                        this.#n(i, e);
                      });
                    }),
                    this.#u()));
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
            const t = this.#b(i),
              r = t.map((i) =>
                i.observer.getOptimisticResult(i.defaultedQueryOptions),
              );
            return [
              r,
              (i) => this.#l(i ?? r, e),
              () =>
                t.map((i, e) => {
                  const o = r[e];
                  return i.defaultedQueryOptions.notifyOnChangeProps
                    ? o
                    : i.observer.trackResult(o, (i) => {
                        t.forEach((e) => {
                          e.observer.trackProp(i);
                        });
                      });
                }),
            ];
          }
          #l(i, e) {
            return e
              ? ((this.#o && this.#e === this.#a && e === this.#s) ||
                  ((this.#s = e),
                  (this.#a = this.#e),
                  (this.#o = (0, n.BH)(this.#o, e(i)))),
                this.#o)
              : i;
          }
          #b(i) {
            const e = this.#r,
              t = new Map(e.map((i) => [i.options.queryHash, i])),
              r = i.map((i) => this.#i.defaultQueryOptions(i)),
              o = r.flatMap((i) => {
                const e = t.get(i.queryHash);
                return null != e
                  ? [{ defaultedQueryOptions: i, observer: e }]
                  : [];
              }),
              a = new Set(o.map((i) => i.defaultedQueryOptions.queryHash)),
              n = r.filter((i) => !a.has(i.queryHash)),
              b = (i) => {
                const e = this.#i.defaultQueryOptions(i);
                return (
                  this.#r.find((i) => i.options.queryHash === e.queryHash) ??
                  new s.$(this.#i, e)
                );
              },
              u = n.map((i) => ({ defaultedQueryOptions: i, observer: b(i) }));
            return o
              .concat(u)
              .sort(
                (i, e) =>
                  r.indexOf(i.defaultedQueryOptions) -
                  r.indexOf(e.defaultedQueryOptions),
              );
          }
          #n(i, e) {
            const t = this.#r.indexOf(i);
            -1 !== t &&
              ((this.#e = (function (i, e, t) {
                const r = i.slice(0);
                return (r[e] = t), r;
              })(this.#e, t, e)),
              this.#u());
          }
          #u() {
            o.j.batch(() => {
              this.listeners.forEach((i) => {
                i(this.#e);
              });
            });
          }
        },
        l = t(75233),
        w = t(22730),
        c = t(43424),
        d = t(19086),
        p = t(44407);
      function h({ queries: i, ...e }, t) {
        const a = (0, l.jE)(t),
          n = (0, w.w)(),
          b = (0, c.h)(),
          h = r.useMemo(
            () =>
              i.map((i) => {
                const e = a.defaultQueryOptions(i);
                return (
                  (e._optimisticResults = n ? "isRestoring" : "optimistic"), e
                );
              }),
            [i, a, n],
          );
        h.forEach((i) => {
          (0, p.tu)(i), (0, d.LJ)(i, b);
        }),
          (0, d.wZ)(b);
        const [m] = r.useState(() => new u(a, h, e)),
          [f, v, g] = m.getOptimisticResult(h, e.combine);
        r.useSyncExternalStore(
          r.useCallback(
            (i) => (n ? () => {} : m.subscribe(o.j.batchCalls(i))),
            [m, n],
          ),
          () => m.getCurrentResult(),
          () => m.getCurrentResult(),
        ),
          r.useEffect(() => {
            m.setQueries(h, e, { listeners: !1 });
          }, [h, e, m]);
        const k = f.some((i, e) => (0, p.EU)(h[e], i))
          ? f.flatMap((i, e) => {
              const t = h[e];
              if (t) {
                const e = new s.$(a, t);
                if ((0, p.EU)(t, i)) return (0, p.iL)(t, e, b);
                (0, p.nE)(i, n) && (0, p.iL)(t, e, b);
              }
              return [];
            })
          : [];
        if (k.length > 0) throw Promise.all(k);
        const x = f.find((i, e) => {
          const t = h[e];
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
        if (x?.error) throw x.error;
        return v(g());
      }
    },
  },
]);
