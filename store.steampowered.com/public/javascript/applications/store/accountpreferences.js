/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2634],
  {
    61359: (e) => {
      e.exports = {
        AuthorizedDeviceHeader: "_2OcGChel9mKKDiT5UYgL8I",
        SectionDescription: "_2INQL8oKYSG91_gqx2zvnV",
        AuthorizedDeviceGroup: "_20iEFcT5JyJPhTjbaJ0ajE",
        DeviceGroup: "_2mir-ym1kKS06jV0W7mtUx",
        AuthorizedDevicesRecentHeader: "_35lIIoiD4gnKLmNL3H9zAo",
        DeviceContainer: "_173r5KvavKBUk01FwZftvC",
        ActiveDevice: "_2eItHkwsCAtMw7E-EF_YG_",
        ThisDevice: "_3o3paJd8GOTYKXh7Rd3Br8",
        DeviceContent: "_3fcDKsMFeSrukc_lptL5k6",
        DeviceHeaderRow: "_366kraIS4n5agiJpxnOSL2",
        DeviceNameContainer: "_2thyM-IiBuBfn44nW5anSY",
        DeviceName: "e-cYNmgoRYobtL32PBDvh",
        LocationSuspicious: "_2wFj-skWKPalSQ4MHk27Wr",
        LastSeenRow: "_2Q1XRSo_YDuNplXJSPKtsq",
        LastActive: "CKNbt1mIaNAep7MwHG6eX",
        NewDevice: "_10WUgZtyhPN8XWybruXSY9",
        AuthorizedDeviceDetails: "Zq-YGng4xfhI7CCwSN6UF",
        DetailsToggleContainer: "_2h6gzZPnXmr8pFVxduqp_k",
        DetailsToggle: "_2-E69gxiszxb3lmuoV7yYi",
        Selected: "JQwtQncjBu_1UajTl86pS",
        ActiveNow: "aR0IvXuy6BAh7MauaSs5j",
        ActiveNowDot: "_2sNYH7uxn-CGdZCk4lGMAg",
        DeviceLogo: "_3u6D3tBNr6Pd8scEAu0WHh",
        RemoveDevicesRow: "_3EYcq6Ow2WM7bGuzWyQRMN",
      };
    },
    72518: (e) => {
      e.exports = {
        AllButton: "_24Y_0sMrz5EywcAsFUstI1",
        ButtonHighlight: "_3OVHZhM_IefZqAOIsPxatj",
        CookieSettingsHeader: "_3R3iiUuAhP-0M-rdtCANeY",
        ButtonGroup: "YPn6VOod44mu0w34xdzDC",
        CookieGroup: "_25H3qBQ1Lfsfq8nwc3M0Fk",
        CookieSection: "_3IKt4dLdwzyZtMqAwvawdG",
        SectionDescription: "GA-wFr-pPreiaNq3wRump",
        NecessaryGroup: "_24o8cEsvGK0bE4hHyUGhfh",
        NecessaryTitle: "_3if8ZNUUN7eSTxlCJbdgav",
        NecessaryDesc: "_9NmWi9VzZyFLjcu_GW_70",
      };
    },
    6695: (e) => {
      e.exports = {
        NotificationSettingsHeader: "_2XOzkA8bF8HiEtnoYSLHGC",
        SectionDescription: "_3K5HBHn_mMUrazI_oUH12q",
        NotificationGroup: "_1_kCY5Jc71QX_9j4Q7brk",
        NotificationSection: "_3Sbby9pYJeX9b2Dcjx1Gbc",
        NotificationFeedToggle: "_30Nc3G1cpcJeZAQulOQYHB",
        NotificationSendWhen: "_3YstFVBT36qZA8FvdzEAF",
        NotificationDescription: "_3FSzSTDALgYgSmsyvkISnG",
        NotificationPrefDetails: "_152HTE3xZ88Xk7LEEPFE68",
        PrefDetailsToggle: "_3XAMDDm5D1pSZpakvjyRPk",
        Selected: "_3yrEIJRje6XiWe9BiIGY7P",
      };
    },
    11838: function (e, t, i) {
      var r;
      !(function (a, n) {
        "use strict";
        var o = "function",
          s = "undefined",
          c = "object",
          l = "string",
          m = "major",
          d = "model",
          _ = "name",
          u = "type",
          p = "vendor",
          f = "version",
          w = "architecture",
          h = "console",
          b = "mobile",
          v = "tablet",
          g = "smarttv",
          k = "wearable",
          y = "embedded",
          E = "Amazon",
          P = "Apple",
          N = "ASUS",
          T = "BlackBerry",
          S = "Browser",
          C = "Chrome",
          D = "Firefox",
          A = "Google",
          x = "Huawei",
          z = "LG",
          G = "Microsoft",
          R = "Motorola",
          B = "Opera",
          U = "Samsung",
          I = "Sharp",
          O = "Sony",
          L = "Xiaomi",
          M = "Zebra",
          H = "Facebook",
          q = "Chromium OS",
          F = "Mac OS",
          j = function (e) {
            for (var t = {}, i = 0; i < e.length; i++)
              t[e[i].toUpperCase()] = e[i];
            return t;
          },
          Y = function (e, t) {
            return typeof e === l && -1 !== V(t).indexOf(V(e));
          },
          V = function (e) {
            return e.toLowerCase();
          },
          W = function (e, t) {
            if (typeof e === l)
              return (
                (e = e.replace(/^\s\s*/, "")),
                typeof t === s ? e : e.substring(0, 500)
              );
          },
          K = function (e, t) {
            for (var i, r, a, s, l, m, d = 0; d < t.length && !l; ) {
              var _ = t[d],
                u = t[d + 1];
              for (i = r = 0; i < _.length && !l && _[i]; )
                if ((l = _[i++].exec(e)))
                  for (a = 0; a < u.length; a++)
                    (m = l[++r]),
                      typeof (s = u[a]) === c && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == o
                            ? (this[s[0]] = s[1].call(this, m))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                            ? typeof s[1] !== o || (s[1].exec && s[1].test)
                              ? (this[s[0]] = m ? m.replace(s[1], s[2]) : n)
                              : (this[s[0]] = m ? s[1].call(this, m, s[2]) : n)
                            : 4 === s.length &&
                              (this[s[0]] = m
                                ? s[3].call(this, m.replace(s[1], s[2]))
                                : n)
                        : (this[s] = m || n);
              d += 2;
            }
          },
          X = function (e, t) {
            for (var i in t)
              if (typeof t[i] === c && t[i].length > 0) {
                for (var r = 0; r < t[i].length; r++)
                  if (Y(t[i][r], e)) return "?" === i ? n : i;
              } else if (Y(t[i], e)) return "?" === i ? n : i;
            return e;
          },
          Z = {
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
              [f, [_, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [f, [_, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [_, f],
              [/opios[\/ ]+([\w\.]+)/i],
              [f, [_, B + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [f, [_, B + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [f, [_, B]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [f, [_, "Baidu"]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                /(heytap|ovi)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [_, f],
              [/\bddg\/([\w\.]+)/i],
              [f, [_, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [f, [_, "UC" + S]],
              [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i,
                /micromessenger\/([\w\.]+)/i,
              ],
              [f, [_, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [f, [_, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [f, [_, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [f, [_, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [f, [_, "Smart Lenovo " + S]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[_, /(.+)/, "$1 Secure " + S], f],
              [/\bfocus\/([\w\.]+)/i],
              [f, [_, D + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [f, [_, B + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [f, [_, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [f, [_, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [f, [_, B + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [f, [_, "MIUI " + S]],
              [/fxios\/([-\w\.]+)/i],
              [f, [_, D]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[_, "360 " + S]],
              [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
              [[_, /(.+)/, "$1 " + S], f],
              [/samsungbrowser\/([\w\.]+)/i],
              [f, [_, U + " Internet"]],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[_, /_/g, " "], f],
              [/metasr[\/ ]?([\d\.]+)/i],
              [f, [_, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [[_, "Sogou Mobile"], f],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [_, f],
              [/(lbbrowser)/i, /\[(linkedin)app\]/i],
              [_],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[_, H], f],
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
              [_, f],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [f, [_, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [f, [_, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [f, [_, C + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[_, C + " WebView"], f],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [f, [_, "Android " + S]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [_, f],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [f, [_, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [f, _],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                _,
                [
                  f,
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
              [_, f],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[_, "Netscape"], f],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [f, [_, D + " Reality"]],
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
              [_, f],
              [/(cobalt)\/([\w\.]+)/i],
              [_, [f, /master.|lts./, ""]],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[w, "amd64"]],
              [/(ia32(?=;))/i],
              [[w, V]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[w, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[w, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[w, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[w, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[w, /ower/, "", V]],
              [/(sun4\w)[;\)]/i],
              [[w, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[w, V]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [d, [p, U], [u, v]],
              [
                /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [d, [p, U], [u, b]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [d, [p, P], [u, b]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [d, [p, P], [u, v]],
              [/(macintosh);/i],
              [d, [p, P]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [d, [p, I], [u, b]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [d, [p, x], [u, v]],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [d, [p, x], [u, b]],
              [
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
              ],
              [
                [d, /_/g, " "],
                [p, L],
                [u, b],
              ],
              [
                /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
                /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
              ],
              [
                [d, /_/g, " "],
                [p, L],
                [u, v],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [d, [p, "OPPO"], [u, b]],
              [/\b(opd2\d{3}a?) bui/i],
              [d, [p, "OPPO"], [u, v]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [d, [p, "Vivo"], [u, b]],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [d, [p, "Realme"], [u, b]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [d, [p, R], [u, b]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [d, [p, R], [u, v]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [d, [p, z], [u, v]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [d, [p, z], [u, b]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [d, [p, "Lenovo"], [u, v]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [d, /_/g, " "],
                [p, "Nokia"],
                [u, b],
              ],
              [/(pixel c)\b/i],
              [d, [p, A], [u, v]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [d, [p, A], [u, b]],
              [
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [d, [p, O], [u, b]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [d, "Xperia Tablet"],
                [p, O],
                [u, v],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [d, [p, "OnePlus"], [u, b]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [d, [p, E], [u, v]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [d, /(.+)/g, "Fire Phone $1"],
                [p, E],
                [u, b],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [d, p, [u, v]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [d, [p, T], [u, b]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [d, [p, N], [u, v]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [d, [p, N], [u, b]],
              [/(nexus 9)/i],
              [d, [p, "HTC"], [u, v]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [p, [d, /_/g, " "], [u, b]],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [d, [p, "Acer"], [u, v]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [d, [p, "Meizu"], [u, b]],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [d, [p, "Ulefone"], [u, b]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [p, d, [u, b]],
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
              [p, d, [u, v]],
              [/(surface duo)/i],
              [d, [p, G], [u, v]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [d, [p, "Fairphone"], [u, b]],
              [/(u304aa)/i],
              [d, [p, "AT&T"], [u, b]],
              [/\bsie-(\w*)/i],
              [d, [p, "Siemens"], [u, b]],
              [/\b(rct\w+) b/i],
              [d, [p, "RCA"], [u, v]],
              [/\b(venue[\d ]{2,7}) b/i],
              [d, [p, "Dell"], [u, v]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [d, [p, "Verizon"], [u, v]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [d, [p, "Barnes & Noble"], [u, v]],
              [/\b(tm\d{3}\w+) b/i],
              [d, [p, "NuVision"], [u, v]],
              [/\b(k88) b/i],
              [d, [p, "ZTE"], [u, v]],
              [/\b(nx\d{3}j) b/i],
              [d, [p, "ZTE"], [u, b]],
              [/\b(gen\d{3}) b.+49h/i],
              [d, [p, "Swiss"], [u, b]],
              [/\b(zur\d{3}) b/i],
              [d, [p, "Swiss"], [u, v]],
              [/\b((zeki)?tb.*\b) b/i],
              [d, [p, "Zeki"], [u, v]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[p, "Dragon Touch"], d, [u, v]],
              [/\b(ns-?\w{0,9}) b/i],
              [d, [p, "Insignia"], [u, v]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [d, [p, "NextBook"], [u, v]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[p, "Voice"], d, [u, b]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[p, "LvTel"], d, [u, b]],
              [/\b(ph-1) /i],
              [d, [p, "Essential"], [u, b]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [d, [p, "Envizen"], [u, v]],
              [/\b(trio[-\w\. ]+) b/i],
              [d, [p, "MachSpeed"], [u, v]],
              [/\btu_(1491) b/i],
              [d, [p, "Rotor"], [u, v]],
              [/(shield[\w ]+) b/i],
              [d, [p, "Nvidia"], [u, v]],
              [/(sprint) (\w+)/i],
              [p, d, [u, b]],
              [/(kin\.[onetw]{3})/i],
              [
                [d, /\./g, " "],
                [p, G],
                [u, b],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [d, [p, M], [u, v]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [d, [p, M], [u, b]],
              [/smart-tv.+(samsung)/i],
              [p, [u, g]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [d, /^/, "SmartTV"],
                [p, U],
                [u, g],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [p, z],
                [u, g],
              ],
              [/(apple) ?tv/i],
              [p, [d, P + " TV"], [u, g]],
              [/crkey/i],
              [
                [d, C + "cast"],
                [p, A],
                [u, g],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [d, [p, E], [u, g]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [d, [p, I], [u, g]],
              [/(bravia[\w ]+)( bui|\))/i],
              [d, [p, O], [u, g]],
              [/(mitv-\w{5}) bui/i],
              [d, [p, L], [u, g]],
              [/Hbbtv.*(technisat) (.*);/i],
              [p, d, [u, g]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [p, W],
                [d, W],
                [u, g],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[u, g]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [p, d, [u, h]],
              [/droid.+; (shield) bui/i],
              [d, [p, "Nvidia"], [u, h]],
              [/(playstation [345portablevi]+)/i],
              [d, [p, O], [u, h]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [d, [p, G], [u, h]],
              [/((pebble))app/i],
              [p, d, [u, k]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [d, [p, P], [u, k]],
              [/droid.+; (glass) \d/i],
              [d, [p, A], [u, k]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [d, [p, M], [u, k]],
              [/(quest( \d| pro)?)/i],
              [d, [p, H], [u, k]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [p, [u, y]],
              [/(aeobc)\b/i],
              [d, [p, E], [u, y]],
              [
                /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
              ],
              [d, [u, b]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [d, [u, v]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[u, v]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[u, b]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [d, [p, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [f, [_, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [f, [_, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [_, f],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [f, _],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [_, f],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [_, [f, X, Z]],
              [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
              ],
              [
                [f, X, Z],
                [_, "Windows"],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [f, /_/g, "."],
                [_, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [_, F],
                [f, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [f, _],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [_, f],
              [/\(bb(10);/i],
              [f, [_, T]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [f, [_, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [f, [_, D + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [f, [_, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [f, [_, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [f, [_, C + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[_, q], f],
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
              [_, f],
              [/(sunos) ?([\w\.\d]*)/i],
              [[_, "Solaris"], f],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [_, f],
            ],
          },
          $ = function (e, t) {
            if ((typeof e === c && ((t = e), (e = n)), !(this instanceof $)))
              return new $(e, t).getResult();
            var i = typeof a !== s && a.navigator ? a.navigator : n,
              r = e || (i && i.userAgent ? i.userAgent : ""),
              h = i && i.userAgentData ? i.userAgentData : n,
              g = t
                ? (function (e, t) {
                    var i = {};
                    for (var r in e)
                      t[r] && t[r].length % 2 == 0
                        ? (i[r] = t[r].concat(e[r]))
                        : (i[r] = e[r]);
                    return i;
                  })(J, t)
                : J,
              k = i && i.userAgent == r;
            return (
              (this.getBrowser = function () {
                var e,
                  t = {};
                return (
                  (t[_] = n),
                  (t[f] = n),
                  K.call(t, r, g.browser),
                  (t[m] =
                    typeof (e = t[f]) === l
                      ? e.replace(/[^\d\.]/g, "").split(".")[0]
                      : n),
                  k &&
                    i &&
                    i.brave &&
                    typeof i.brave.isBrave == o &&
                    (t[_] = "Brave"),
                  t
                );
              }),
              (this.getCPU = function () {
                var e = {};
                return (e[w] = n), K.call(e, r, g.cpu), e;
              }),
              (this.getDevice = function () {
                var e = {};
                return (
                  (e[p] = n),
                  (e[d] = n),
                  (e[u] = n),
                  K.call(e, r, g.device),
                  k && !e[u] && h && h.mobile && (e[u] = b),
                  k &&
                    "Macintosh" == e[d] &&
                    i &&
                    typeof i.standalone !== s &&
                    i.maxTouchPoints &&
                    i.maxTouchPoints > 2 &&
                    ((e[d] = "iPad"), (e[u] = v)),
                  e
                );
              }),
              (this.getEngine = function () {
                var e = {};
                return (e[_] = n), (e[f] = n), K.call(e, r, g.engine), e;
              }),
              (this.getOS = function () {
                var e = {};
                return (
                  (e[_] = n),
                  (e[f] = n),
                  K.call(e, r, g.os),
                  k &&
                    !e[_] &&
                    h &&
                    h.platform &&
                    "Unknown" != h.platform &&
                    (e[_] = h.platform
                      .replace(/chrome os/i, q)
                      .replace(/macos/i, F)),
                  e
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
              (this.setUA = function (e) {
                return (
                  (r = typeof e === l && e.length > 500 ? W(e, 500) : e), this
                );
              }),
              this.setUA(r),
              this
            );
          };
        ($.VERSION = "1.0.38"),
          ($.BROWSER = j([_, f, m])),
          ($.CPU = j([w])),
          ($.DEVICE = j([d, p, u, h, b, g, v, k, y])),
          ($.ENGINE = $.OS = j([_, f])),
          typeof t !== s
            ? (e.exports && (t = e.exports = $), (t.UAParser = $))
            : i.amdO
              ? (r = function () {
                  return $;
                }.call(t, i, t, e)) === n || (e.exports = r)
              : typeof a !== s && (a.UAParser = $);
        var Q = typeof a !== s && (a.jQuery || a.Zepto);
        if (Q && !Q.ua) {
          var ee = new $();
          (Q.ua = ee.getResult()),
            (Q.ua.get = function () {
              return ee.getUA();
            }),
            (Q.ua.set = function (e) {
              ee.setUA(e);
              var t = ee.getResult();
              for (var i in t) Q.ua[i] = t[i];
            });
        }
      })("object" == typeof window ? window : this);
    },
    55909: (e, t, i) => {
      "use strict";
      i.d(t, { u: () => l });
      var r = i(90626),
        a = i(71513),
        n = i(93007),
        o = i(56093),
        s = i(78327),
        c = i(61712);
      function l(e) {
        const { children: t, navTreeRef: i, ...l } = e,
          m = r.useRef(),
          d = (0, o.Ue)(m, i),
          _ = (0, s.Qn)(),
          u = window.__virtual_keyboard_client;
        if (_) {
          const e = window.__nav_tree_root;
          return r.createElement(
            a.B2,
            { ...l, navTreeRef: d, secondary: !0, parentEmbeddedNavTree: e },
            r.createElement(
              c.F6,
              { factory: u },
              r.createElement(n.q, null, t),
            ),
          );
        }
        return r.createElement(r.Fragment, null, t);
      }
    },
    42018: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { AccountPreferencesRoutes: () => ee, default: () => te });
      var r = i(90626),
        a = i(92757),
        n = i(34629),
        o = i(14947),
        s = (i(68797), i(78327)),
        c = i(41735),
        l = i.n(c),
        m = i(61859);
      class d {
        m_Preferences = void 0;
        constructor(e) {
          (0, o.Gn)(this),
            (this.m_Preferences = e),
            (this.m_Preferences.content_customization &&
              !Array.isArray(this.m_Preferences.content_customization)) ||
              (this.m_Preferences.content_customization = {}),
            (this.m_Preferences.third_party_analytics &&
              !Array.isArray(this.m_Preferences.third_party_analytics)) ||
              (this.m_Preferences.third_party_analytics = {}),
            (this.m_Preferences.third_party_content &&
              !Array.isArray(this.m_Preferences.third_party_content)) ||
              (this.m_Preferences.third_party_content = {}),
            (this.m_Preferences.valve_analytics &&
              !Array.isArray(this.m_Preferences.valve_analytics)) ||
              (this.m_Preferences.valve_analytics = {}),
            (void 0 !== this.m_Preferences.utm_enabled &&
              null !== this.m_Preferences.utm_enabled) ||
              (this.m_Preferences.utm_enabled = !0),
            (0 != this.m_Preferences.preference_state &&
              1 != this.m_Preferences.preference_state) ||
              ((this.m_Preferences.valve_analytics.product_impressions_tracking =
                !0),
              (this.m_Preferences.content_customization.recentapps = !0),
              (this.m_Preferences.third_party_analytics.google_analytics = !0),
              (this.m_Preferences.third_party_content.sketchfab = !0),
              (this.m_Preferences.third_party_content.twitter = !0),
              (this.m_Preferences.third_party_content.vimeo = !0),
              (this.m_Preferences.third_party_content.youtube = !0)),
            0 == this.m_Preferences.version && (this.m_Preferences.version = 1);
        }
        GetVersion() {
          return this.m_Preferences.version;
        }
        GetPreferenceState() {
          return this.m_Preferences.preference_state;
        }
        BIsAllowAll() {
          return (
            1 == this.m_Preferences.preference_state ||
            0 == this.m_Preferences.preference_state
          );
        }
        BIsRejectAll() {
          return 2 == this.m_Preferences.preference_state;
        }
        SetPreferenceState(e) {
          if (this.m_Preferences.preference_state != e) {
            if (((this.m_Preferences.preference_state = e), 1 == e || 2 == e)) {
              let t = 1 == e;
              (this.m_Preferences.content_customization.recentapps = t),
                (this.m_Preferences.third_party_analytics.google_analytics = t),
                (this.m_Preferences.third_party_content.sketchfab = t),
                (this.m_Preferences.third_party_content.twitter = t),
                (this.m_Preferences.third_party_content.vimeo = t),
                (this.m_Preferences.third_party_content.youtube = t),
                (this.m_Preferences.valve_analytics.product_impressions_tracking =
                  t);
            }
            this.PostCookieSettings();
          }
        }
        GetRecentApps() {
          return this.m_Preferences.content_customization.recentapps;
        }
        ToggleRecentApps() {
          (this.m_Preferences.content_customization.recentapps =
            !this.m_Preferences.content_customization.recentapps),
            this.ProcessToggle();
        }
        GetImpressions() {
          return this.m_Preferences.valve_analytics
            .product_impressions_tracking;
        }
        ToggleImpressions() {
          (this.m_Preferences.valve_analytics.product_impressions_tracking =
            !this.m_Preferences.valve_analytics.product_impressions_tracking),
            this.ProcessToggle();
        }
        GetSketchfab() {
          return this.m_Preferences.third_party_content.sketchfab;
        }
        ToggleSketchfab() {
          (this.m_Preferences.third_party_content.sketchfab =
            !this.m_Preferences.third_party_content.sketchfab),
            this.ProcessToggle();
        }
        GetVimeo() {
          return this.m_Preferences.third_party_content.vimeo;
        }
        ToggleVimeo() {
          (this.m_Preferences.third_party_content.vimeo =
            !this.m_Preferences.third_party_content.vimeo),
            this.ProcessToggle();
        }
        GetYouTube() {
          return this.m_Preferences.third_party_content.youtube;
        }
        ToggleYouTube() {
          (this.m_Preferences.third_party_content.youtube =
            !this.m_Preferences.third_party_content.youtube),
            this.ProcessToggle();
        }
        GetUTMEnabled() {
          return this.m_Preferences.utm_enabled;
        }
        ToggleUTMEnabled() {
          (this.m_Preferences.utm_enabled = !this.m_Preferences.utm_enabled),
            this.PostCookieSettings();
        }
        ProcessToggle() {
          (this.m_Preferences.preference_state = 3), this.PostCookieSettings();
        }
        async PostCookieSettings() {
          const e = s.TS.STORE_BASE_URL + "account/ajaxsetcookiepreferences",
            t = new FormData();
          t.set("sessionid", s.TS.SESSIONID),
            t.append("cookiepreferences", JSON.stringify(this.m_Preferences));
          try {
            let i = await l().post(e, t, { withCredentials: !0 });
            if (200 != i.status || 1 != i?.data?.success)
              window.ShowAlertDialog(
                (0, m.we)("#CookiePref_Error"),
                (0, m.we)("#CookiePref_ErrorNotSaved"),
              );
            else if (1 == i?.data?.success) {
              0;
              const { transfer_urls: e, transfer_params: t } = i.data;
              e && t && this.TransferCookiePreferencesToSites(e, t);
            }
          } catch (e) {
            0,
              window.ShowAlertDialog(
                (0, m.we)("#CookiePref_Error"),
                (0, m.we)("#CookiePref_ErrorNotSaved"),
              );
          }
        }
        TransferCookiePreferencesToSites(e, t) {
          const i = new FormData();
          i.set("transfer_params", t);
          for (const t of e) l().post(t, i);
        }
      }
      (0, n.Cg)([o.sH], d.prototype, "m_Preferences", void 0);
      var _ = i(75844),
        u = i(7068),
        p = i(72518),
        f = i(52038),
        w = i(32381),
        h = i(25855),
        b = i(55909),
        v = i(71513);
      let g;
      const k = (0, _.PA)(() => {
          let e = (function () {
            if (!g) {
              let e = (0, s.Tc)("cookiepreferences", "application_config");
              g = new d(e);
            }
            return g;
          })();
          const t = (0, h.A)(),
            i = (0, r.useCallback)(() => {
              e.SetPreferenceState(1);
            }, [e]),
            a = (0, r.useCallback)(() => {
              e.SetPreferenceState(2);
            }, [e]);
          return r.createElement(
            b.u,
            { navID: "StoreCookiesSettings", NavigationManager: t },
            r.createElement(
              "div",
              {
                className: (0, f.A)(
                  p.CookieSettingsHeader,
                  "account_header_line noicon",
                ),
              },
              r.createElement(
                "div",
                null,
                (0, m.we)("#CookiePref_OptionalCookies_Title"),
              ),
            ),
            r.createElement(
              "div",
              { className: "account_settings_container" },
              r.createElement(
                w.Z,
                { "flow-children": "row", className: p.ButtonGroup },
                r.createElement(
                  v.ml,
                  {
                    className: (0, f.A)(
                      p.AllButton,
                      e.BIsRejectAll() ? p.ButtonHighlight : "",
                    ),
                    onClick: a,
                  },
                  (0, m.we)("#CookiePref_RejectAll"),
                ),
                r.createElement(
                  v.ml,
                  {
                    className: (0, f.A)(
                      p.AllButton,
                      e.BIsAllowAll() ? p.ButtonHighlight : "",
                    ),
                    onClick: i,
                  },
                  (0, m.we)("#CookiePref_AcceptAll"),
                ),
              ),
              r.createElement(y, { settings: e }),
              r.createElement(E, { settings: e }),
              r.createElement(P, { settings: e }),
            ),
            r.createElement(
              "div",
              {
                className: (0, f.A)(
                  p.CookieSettingsHeader,
                  "account_header_line noicon",
                ),
              },
              r.createElement(
                "div",
                null,
                (0, m.we)("#CookiePref_TechnicallyNeccesary_Title"),
              ),
            ),
            r.createElement(
              "div",
              { className: "account_settings_container" },
              r.createElement(
                "p",
                null,
                (0, m.we)("#CookiePref_TechnicallyNeccesary_Desc"),
              ),
              r.createElement(
                "div",
                { className: p.CookieGroup },
                r.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  r.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, m.we)("#CookiePref_SessionID_Title"),
                  ),
                  r.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, m.we)("#CookiePref_SessionID_Desc"),
                  ),
                ),
                r.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  r.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, m.we)("#CookiePref_ShoppingCart_Title"),
                  ),
                  r.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, m.we)("#CookiePref_ShoppingCart_Desc"),
                  ),
                ),
                r.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  r.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, m.we)("#CookiePref_SteamCountry_Title"),
                  ),
                  r.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, m.we)("#CookiePref_SteamCountry_Desc"),
                  ),
                ),
                r.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  r.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, m.we)("#CookiePref_Timezone_Title"),
                  ),
                  r.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, m.we)("#CookiePref_Timezone_Desc"),
                  ),
                ),
                r.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  r.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, m.we)("#CookiePref_BirthTime_Title"),
                  ),
                  r.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, m.we)("#CookiePref_BirthTime_Desc"),
                  ),
                ),
                r.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  r.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, m.we)("#CookiePref_Login_Title"),
                  ),
                  r.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, m.we)("#CookiePref_Login_Desc"),
                  ),
                ),
                r.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  r.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, m.we)("#CookiePref_Language_Title"),
                  ),
                  r.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, m.we)("#CookiePref_Language_Desc"),
                  ),
                ),
                r.createElement(
                  "div",
                  { className: p.NecessaryGroup },
                  r.createElement(
                    "span",
                    { className: p.NecessaryTitle },
                    (0, m.we)("#CookiePref_CookieSettings_Title"),
                  ),
                  r.createElement(
                    "span",
                    { className: p.NecessaryDesc },
                    (0, m.we)("#CookiePref_CookieSettings_Desc"),
                  ),
                ),
              ),
            ),
            r.createElement(
              "div",
              {
                className: (0, f.A)(
                  p.CookieSettingsHeader,
                  "account_header_line noicon",
                ),
              },
              r.createElement(
                "div",
                null,
                (0, m.we)("#PrivacySettings_Marketing_Header"),
              ),
            ),
            r.createElement(
              "div",
              { className: "account_settings_container" },
              r.createElement(N, { settings: e }),
            ),
            null,
          );
        }),
        y = (0, _.PA)((e) => {
          const { settings: t } = e,
            i = (0, r.useCallback)(() => {
              t.ToggleRecentApps();
            }, [t]);
          return r.createElement(
            "div",
            { className: p.CookieGroup },
            r.createElement(
              "div",
              { className: p.CookieSection },
              r.createElement(
                "h2",
                null,
                (0, m.we)("#CookiePref_Content_Title"),
              ),
              r.createElement(
                "p",
                { className: p.SectionDescription },
                (0, m.we)("#CookiePref_Content_Desc"),
              ),
              r.createElement(u.RF, {
                onChange: i,
                label: (0, m.we)("#CookiePref_Content_ToggleTitle"),
                checked: t.GetRecentApps(),
                description: (0, m.we)("#CookiePref_Content_ToggleDesc"),
              }),
            ),
          );
        }),
        E = (0, _.PA)((e) => {
          const { settings: t } = e,
            i = (0, r.useCallback)(() => {
              t.ToggleImpressions();
            }, [t]);
          return r.createElement(
            "div",
            { className: p.CookieGroup },
            r.createElement(
              "div",
              { className: p.CookieSection },
              r.createElement(
                "h2",
                null,
                (0, m.we)("#CookiePref_ValveAnalytics_Title"),
              ),
              r.createElement(
                "p",
                { className: p.SectionDescription },
                (0, m.we)("#CookiePref_ValveAnalytics_Desc"),
              ),
              r.createElement(u.RF, {
                onChange: i,
                label: (0, m.we)("#CookiePref_ValveAnalytics_ToggleTitle"),
                checked: t.GetImpressions(),
                description: (0, m.we)("#CookiePref_ValveAnalytics_ToggleDesc"),
              }),
            ),
          );
        }),
        P = (0, _.PA)((e) => {
          const { settings: t } = e,
            i = (0, r.useCallback)(() => {
              t.ToggleYouTube();
            }, [t]),
            a = (0, r.useCallback)(() => {
              t.ToggleVimeo();
            }, [t]),
            n = (0, r.useCallback)(() => {
              t.ToggleSketchfab();
            }, [t]);
          return r.createElement(
            "div",
            { className: p.CookieGroup },
            r.createElement(
              "div",
              { className: p.CookieSection },
              r.createElement(
                "h2",
                null,
                (0, m.we)("#CookiePref_ThirdParty_Title"),
              ),
              r.createElement(
                "p",
                { className: p.SectionDescription },
                (0, m.we)("#CookiePref_ThirdParty_Desc"),
              ),
              r.createElement(u.RF, {
                onChange: i,
                label: (0, m.we)("#CookiePref_YouTube_Title"),
                checked: t.GetYouTube(),
                description: (0, m.PP)(
                  "#CookiePref_YouTube_Desc",
                  r.createElement(
                    "a",
                    {
                      href: "https://policies.google.com/privacy",
                      target: "_blank",
                    },
                    (0, m.we)("#CookiePref_YouTube_TogglePolicyName"),
                  ),
                ),
              }),
              r.createElement(u.RF, {
                onChange: a,
                label: (0, m.we)("#CookiePref_Vimeo_Title"),
                checked: t.GetVimeo(),
                description: (0, m.PP)(
                  "#CookiePref_Vimeo_Desc",
                  r.createElement(
                    "a",
                    { href: "https://vimeo.com/privacy", target: "_blank" },
                    (0, m.we)("#CookiePref_Vimeo_TogglePolicyName"),
                  ),
                ),
              }),
              r.createElement(u.RF, {
                onChange: n,
                label: (0, m.we)("#CookiePref_Sketchfab_Title"),
                checked: t.GetSketchfab(),
                description: (0, m.PP)(
                  "#CookiePref_Sketchfab_Desc",
                  r.createElement(
                    "a",
                    { href: "https://sketchfab.com/privacy", target: "_blank" },
                    (0, m.we)("#CookiePref_Sketchfab_TogglePolicyName"),
                  ),
                ),
              }),
            ),
          );
        }),
        N = (0, _.PA)((e) => {
          const { settings: t } = e,
            i = (0, r.useCallback)(() => {
              t.ToggleUTMEnabled();
            }, [t]);
          return r.createElement(
            "div",
            { className: p.CookieGroup },
            r.createElement(
              "div",
              { className: p.CookieSection },
              r.createElement(
                "h2",
                null,
                (0, m.we)("#PrivacySettings_Marketing_Title"),
              ),
              r.createElement(
                "p",
                { className: p.SectionDescription },
                (0, m.we)("#PrivacySettings_Marketing_Desc"),
              ),
              r.createElement(u.RF, {
                onChange: i,
                label: (0, m.we)("#PrivacySettings_UTM_ToggleLabel"),
                checked: t.GetUTMEnabled(),
                description: (0, m.we)("#PrivacySettings_UTM_ToggleDesc"),
              }),
            ),
          );
        });
      class T {
        m_Preferences = void 0;
        m_bUpdating = !1;
        constructor(e) {
          (0, o.Gn)(this), (this.m_Preferences = e);
        }
        GetPreferences() {
          return this.m_Preferences;
        }
        BUpdatingPreferences() {
          return this.m_bUpdating;
        }
        ToggleTargetPreference(e, t) {
          this.m_bUpdating = !0;
          let i = !1;
          for (let r of this.m_Preferences)
            if (t.notification_type == r.notification_type) {
              (r.notification_targets ^= e),
                1 != (1 & r.notification_targets) &&
                  (r.notification_targets = 0),
                (i = !0);
              break;
            }
          i && this.PostNotificationSettings(), (this.m_bUpdating = !1);
        }
        async PostNotificationSettings() {
          const e = s.TS.STORE_BASE_URL + "account/ajaxsetnotificationsettings",
            t = new FormData();
          t.set("sessionid", s.TS.SESSIONID),
            t.append(
              "notificationpreferences",
              JSON.stringify(this.m_Preferences),
            );
          try {
            let i = await l().post(e, t, { withCredentials: !0 });
            (200 == i.status && 1 == i?.data?.success) ||
              window.ShowAlertDialog(
                (0, m.we)("#NotificationPref_Error"),
                (0, m.we)("#NotificationPref_ErrorNotSaved"),
              );
          } catch (e) {
            0,
              window.ShowAlertDialog(
                (0, m.we)("#NotificationPref_Error"),
                (0, m.we)("#NotificationPref_ErrorNotSaved"),
              );
          }
        }
      }
      (0, n.Cg)([o.sH], T.prototype, "m_Preferences", void 0),
        (0, n.Cg)([o.sH], T.prototype, "m_bUpdating", void 0);
      var S = i(6695),
        C = i(4869);
      let D;
      function A() {
        if (!D) {
          let e = (0, s.Tc)("notificationpreferences", "application_config");
          D = new T(e);
        }
        return D;
      }
      const x = (0, _.PA)(() => {
          let e = A();
          const t = (0, h.A)();
          let i = [];
          for (const t of e.GetPreferences())
            i.push(r.createElement(z, { preferenceSetting: t }));
          return r.createElement(
            b.u,
            { navID: "StoreNotificationSettings", NavigationManager: t },
            r.createElement(
              "div",
              {
                className: (0, f.A)(
                  S.NotificationSettingsHeader,
                  "account_header_line noicon",
                ),
              },
              r.createElement(
                "div",
                null,
                (0, m.we)("#NotificationSettings_Title"),
              ),
            ),
            r.createElement(
              "div",
              { className: "account_settings_container" },
              r.createElement(
                "p",
                { className: S.SectionDescription },
                (0, m.we)("#NotificationSettings_Desc1"),
              ),
              r.createElement(
                "p",
                { className: S.SectionDescription },
                (0, m.we)("#NotificationSettings_Desc2"),
              ),
              r.createElement(
                "div",
                { className: "notification_settings_container" },
                r.createElement(
                  "div",
                  { className: S.NotificationSendWhen },
                  (0, m.we)("#NotificationSettings_SendMeWhen"),
                ),
                i,
              ),
            ),
          );
        }),
        z = (0, _.PA)((e) => {
          const { preferenceSetting: t } = e;
          let i = A();
          const a = (0, r.useCallback)(() => {
              i.ToggleTargetPreference(1, t);
            }, [t, i]),
            n = (0, r.useCallback)(() => {
              i.ToggleTargetPreference(8, t);
            }, [t, i]),
            o = (0, r.useCallback)(() => {
              i.ToggleTargetPreference(2, t);
            }, [t, i]),
            [s, c] = (0, r.useState)(!1),
            l = i.BUpdatingPreferences(),
            d = 1 == (1 & t.notification_targets),
            _ = 2 == (2 & t.notification_targets),
            p = 8 == (8 & t.notification_targets),
            w =
              ((h = t.notification_type),
              (0, m.c9)("#SteamNotificationTypeDesc_" + h)
                ? (0, m.we)("#SteamNotificationTypeDesc_" + h)
                : null);
          var h;
          return w
            ? r.createElement(
                "div",
                { className: S.NotificationGroup },
                r.createElement(
                  "div",
                  { className: S.NotificationSection },
                  r.createElement(u.y4, {
                    className: S.NotificationFeedToggle,
                    padding: "compact",
                    onChange: a,
                    disabled: l,
                    bottomSeparator: "none",
                    checked: d,
                  }),
                  r.createElement(
                    "p",
                    { className: S.NotificationDescription },
                    w,
                  ),
                  r.createElement(
                    u.wl,
                    {
                      className: (0, f.A)({
                        [S.PrefDetailsToggle]: !0,
                        [S.Selected]: s,
                      }),
                      onClick: () => c(!s),
                    },
                    r.createElement(C.b8_, { direction: "down" }),
                  ),
                ),
                s &&
                  r.createElement(
                    "div",
                    { className: S.NotificationPrefDetails },
                    r.createElement(u.Yh, {
                      label: (0, m.we)("#NotificationSettings_SendToast"),
                      disabled: l || !d,
                      checked: p,
                      onChange: n,
                    }),
                    r.createElement(u.Yh, {
                      label: (0, m.we)(
                        "#NotificationSettings_PushNotification",
                      ),
                      disabled: l || !d,
                      checked: _,
                      onChange: o,
                    }),
                  ),
              )
            : null;
        });
      var G = i(6813),
        R = i(61359);
      class B {
        m_rgDevices = [];
        m_rgRecentDevices = [];
        m_strKBArticleURL;
        static s_AuthorizedDevicesStore;
        constructor() {
          (0, o.Gn)(this);
        }
        static Get() {
          return (
            B.s_AuthorizedDevicesStore ||
              ((B.s_AuthorizedDevicesStore = new B()),
              B.s_AuthorizedDevicesStore.Init()),
            B.s_AuthorizedDevicesStore
          );
        }
        Init() {
          (this.m_rgDevices = (0, s.Tc)("devices", "application_config")),
            (this.m_rgRecentDevices = (0, s.Tc)(
              "recent_devices",
              "application_config",
            )),
            (this.m_strKBArticleURL = (0, s.Tc)(
              "kb_article",
              "application_config",
            ));
        }
        GetDevices() {
          return this.m_rgDevices;
        }
        GetRecentDevices() {
          return this.m_rgRecentDevices;
        }
        GetKBArticleURL() {
          return this.m_strKBArticleURL;
        }
      }
      (0, n.Cg)([o.sH], B.prototype, "m_rgDevices", void 0),
        (0, n.Cg)([o.sH], B.prototype, "m_rgRecentDevices", void 0);
      var U,
        I = i(12155);
      !(function (e) {
        (e[(e.k_EPlatformTypeUnknown = 0)] = "k_EPlatformTypeUnknown"),
          (e[(e.k_EPlatformTypeWin32 = 1)] = "k_EPlatformTypeWin32"),
          (e[(e.k_EPlatformTypeWin64 = 2)] = "k_EPlatformTypeWin64"),
          (e[(e.k_EPlatformTypeLinux64 = 3)] = "k_EPlatformTypeLinux64"),
          (e[(e.k_EPlatformTypeOSX = 4)] = "k_EPlatformTypeOSX"),
          (e[(e.k_EPlatformTypePS3 = 5)] = "k_EPlatformTypePS3"),
          (e[(e.k_EPlatformTypeLinux32 = 6)] = "k_EPlatformTypeLinux32"),
          (e[(e.k_EPlatformTypeAndroid32 = 7)] = "k_EPlatformTypeAndroid32"),
          (e[(e.k_EPlatformTypeAndroid64 = 8)] = "k_EPlatformTypeAndroid64"),
          (e[(e.k_EPlatformTypeIOS32 = 9)] = "k_EPlatformTypeIOS32"),
          (e[(e.k_EPlatformTypeIOS64 = 10)] = "k_EPlatformTypeIOS64"),
          (e[(e.k_EPlatformTypeTVOS = 11)] = "k_EPlatformTypeTVOS"),
          (e[(e.k_EPlatformTypeEmbeddedClient = 12)] =
            "k_EPlatformTypeEmbeddedClient"),
          (e[(e.k_EPlatformTypeBrowser = 13)] = "k_EPlatformTypeBrowser"),
          (e[(e.k_EPlatformTypeMax = 14)] = "k_EPlatformTypeMax");
      })(U || (U = {}));
      var O = i(91675),
        L = i(22837),
        M = i(738),
        H = i(56011),
        q = i(14771),
        F = i(32754),
        j = i(11838);
      const Y = (0, _.PA)(() => {
        let e = B.Get();
        const t = (0, h.A)(),
          i = (function () {
            const [e] = r.useState(() =>
              (0, s.Tc)("requesting_token_id", "application_config"),
            );
            return e;
          })(),
          a = Date.now() / 1e3,
          n = Z(
            e
              .GetRecentDevices()
              .find((e) => e.logged_in && e.last_seen?.time > a - 900) ??
              e.GetRecentDevices()[0],
          ).country;
        let o = [],
          c = [];
        for (const t of e.GetRecentDevices()) {
          const e = t.logged_in && t.last_seen?.time > a - 900,
            s = r.createElement(V, {
              device: t,
              key: t.token_id,
              bActiveNow: e,
              bCurrentDevice: i == t.token_id,
              strActiveCountry: n,
            });
          e ? o.push(s) : c.push(s);
        }
        let l = [];
        for (const t of e.GetDevices())
          l.push(
            r.createElement(V, {
              device: t,
              key: t.token_id,
              strActiveCountry: n,
            }),
          );
        return r.createElement(
          b.u,
          { navID: "StoreAuthorizedDevices", NavigationManager: t },
          r.createElement(
            "div",
            {
              className: (0, f.A)(
                R.AuthorizedDeviceHeader,
                "account_header_line noicon",
              ),
            },
            r.createElement(
              "div",
              null,
              (0, m.we)("#accountpreferences_authorized_devices_header"),
            ),
          ),
          r.createElement(
            "div",
            { className: "account_settings_container" },
            r.createElement(
              "div",
              { className: R.SectionDescription },
              (0, m.PP)(
                "#accountpreferences_authorized_devices_description",
                r.createElement("p", null),
              ),
            ),
            r.createElement(
              "div",
              { className: R.AuthorizedDeviceGroup },
              r.createElement(
                "div",
                { className: R.DeviceGroup },
                r.createElement(
                  "div",
                  { className: R.ActiveNow },
                  r.createElement(I.jlt, { className: R.ActiveNowDot }),
                  (0, m.we)("#accountpreferences_authorized_device_active_now"),
                ),
                o,
              ),
              Boolean(c.length) &&
                r.createElement(
                  "div",
                  { className: R.DeviceGroup },
                  r.createElement(
                    "div",
                    { className: R.AuthorizedDevicesRecentHeader },
                    (0, m.we)(
                      "#accountpreferences_authorized_devices_recent_heading",
                    ),
                  ),
                  c,
                ),
              Boolean(l.length) &&
                r.createElement(
                  "div",
                  { className: R.DeviceGroup },
                  r.createElement(
                    "div",
                    { className: R.AuthorizedDevicesRecentHeader },
                    (0, m.we)(
                      "#accountpreferences_authorized_devices_other_heading",
                    ),
                  ),
                  l,
                ),
              r.createElement(
                "div",
                { className: R.DeviceGroup },
                r.createElement(
                  "div",
                  { className: R.AuthorizedDevicesRecentHeader },
                  (0, m.we)(
                    "#accountpreferences_authorized_devices_remove_header",
                  ),
                ),
                r.createElement(
                  "div",
                  { className: R.RemoveDevicesRow },
                  r.createElement(
                    "div",
                    null,
                    (0, m.we)(
                      "#accountpreferences_authorized_devices_remove_desc",
                    ),
                  ),
                  r.createElement(
                    u.wl,
                    {
                      onClick: (e) => {
                        (0, M.pg)(r.createElement($, null), (0, H.uX)(e));
                      },
                    },
                    (0, m.we)(
                      "#accountpreferences_authorized_devices_remove_button",
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      });
      function V(e) {
        const {
            device: t,
            bActiveNow: i,
            bCurrentDevice: a,
            strActiveCountry: n,
          } = e,
          [o, s] = (0, r.useState)(!1);
        let c = (function (e) {
          if (2 == e.platform_type) {
            let t = new j.UAParser(e.token_description).getResult();
            return t.browser.name && t.os.name
              ? "WebKit" == t.browser.name
                ? t.os.name
                : (0, m.we)(
                    "#accountpreferences_authorized_devices_browser_on_os",
                    t.browser.name,
                    t.os.name,
                  )
              : (0, m.we)(
                  "#accountpreferences_authorized_devices_browser_unmatched",
                );
          }
          return e.token_description;
        })(t);
        c.length && (c = ' - "' + c + '"');
        const l = Z(t);
        let d = null;
        return (
          (d =
            l.country && n && n != l.country
              ? r.createElement(
                  F.he,
                  {
                    className: R.Tooltip,
                    toolTipContent: (0, m.we)(
                      "#accountpreferences_authorized_devices_suspicous_tooltip",
                    ),
                    direction: "top",
                  },
                  r.createElement(
                    "div",
                    { className: R.LocationSuspicious },
                    l.location,
                    r.createElement(C.$$j, null),
                  ),
                )
              : r.createElement(
                  "div",
                  { className: R.LocationNotSuspicious },
                  l.location,
                )),
          r.createElement(
            "div",
            {
              className: (0, f.A)(R.DeviceContainer, i && R.ActiveDevice),
              key: "id_" + t.token_id,
              onClick: () => s(!o),
            },
            r.createElement(X, { device: t }),
            r.createElement(
              "div",
              { className: R.DeviceContent },
              r.createElement(
                "div",
                { className: R.DeviceHeaderRow },
                r.createElement(
                  "div",
                  { className: R.DeviceNameContainer },
                  r.createElement(
                    "div",
                    { className: R.DeviceName },
                    r.createElement(J, { device: t }),
                    c,
                  ),
                  a &&
                    r.createElement(
                      "div",
                      { className: R.ThisDevice },
                      (0, m.we)(
                        "#accountpreferences_authorized_devices_this_device",
                      ),
                    ),
                ),
                r.createElement(
                  "div",
                  { className: R.DetailsToggleContainer },
                  d,
                  r.createElement(
                    "div",
                    { className: R.DetailsToggle },
                    r.createElement(
                      u.wl,
                      {
                        className: (0, f.A)({
                          [R.DetailsToggle]: !0,
                          [R.Selected]: o,
                        }),
                      },
                      r.createElement(C.b8_, { direction: "down" }),
                    ),
                  ),
                ),
              ),
              !i && r.createElement(W, { device: t }),
              o && r.createElement(K, { device: t }),
            ),
          )
        );
      }
      function W(e) {
        const { device: t } = e,
          i =
            t.first_seen?.time &&
            t.first_seen.time + 2 * q.Kp.PerWeek > Date.now() / 1e3;
        return r.createElement(
          "div",
          { className: R.LastSeenRow },
          !!t.last_seen?.time &&
            r.createElement(
              "div",
              null,
              r.createElement(
                "span",
                { className: R.LastActive },
                (0, m.we)(
                  "#accountpreferences_authorized_devices_last_seen_title",
                ),
              ),
              (0, O.Nm)(t.last_seen.time),
            ),
          i &&
            r.createElement(
              "div",
              { className: R.NewDevice },
              (0, m.we)("#accountpreferences_authorized_devices_new_device"),
            ),
        );
      }
      function K(e) {
        const { device: t } = e;
        return r.createElement(
          "div",
          { className: R.AuthorizedDeviceDetails },
          (0, m.we)(
            (function (e, t) {
              if (2 == e) return "#authorized_devices_default_qr";
              switch (t) {
                case 2:
                  return "#authorized_devices_emailcode_password";
                case 3:
                  return "#authorized_devices_devicecode_password";
                case 4:
                case 5:
                  return "#authorized_devices_mobileconf_password";
                case 6:
                  return "#authorized_devices_machinetoken_password";
                default:
                  return "#authorized_devices_default_password";
              }
            })(t.authentication_type, t.auth_type),
            (0, m.TW)(t.first_seen.time) + " @ " + (0, O.KC)(t.first_seen.time),
          ),
        );
      }
      function X(e) {
        const { device: t } = e;
        if (2 == t.platform_type)
          return r.createElement(C.FH7, { className: R.DeviceLogo });
        if (
          1 == t.platform_type &&
          t.gaming_device_type === L.zm.k_EGamingDeviceType_SteamDeck
        )
          return r.createElement(C.oEi, { className: R.DeviceLogo });
        switch (t.os_platform) {
          case U.k_EPlatformTypeWin32:
          case U.k_EPlatformTypeWin64:
            return r.createElement(C.TV, { className: R.DeviceLogo });
          case U.k_EPlatformTypeAndroid32:
          case U.k_EPlatformTypeAndroid64:
          case U.k_EPlatformTypeLinux32:
          case U.k_EPlatformTypeLinux64:
          case U.k_EPlatformTypeIOS32:
          case U.k_EPlatformTypeIOS64:
          case U.k_EPlatformTypeOSX:
            return r.createElement(I.rfv, { className: R.DeviceLogo });
          default:
            return null;
        }
      }
      function Z(e) {
        const t = e.last_seen ?? e.first_seen;
        return t && t.city && t.country
          ? { location: t.city + ", " + t.country, country: t.country }
          : {
              location: (0, m.we)(
                "#accountpreferences_authorized_devices_loc_unknown",
              ),
              country: "",
            };
      }
      function J(e) {
        const { device: t } = e;
        switch (t.platform_type) {
          case 3:
            return (0, m.we)(
              "#accountpreferences_authorized_devices_type_mobile",
            );
          case 1:
            return t.gaming_device_type === L.zm.k_EGamingDeviceType_SteamDeck
              ? (0, m.we)(
                  "#accountpreferences_authorized_devices_type_steamdeck",
                )
              : (0, m.we)(
                  "#accountpreferences_authorized_devices_type_desktop",
                );
          case 2:
            return (0, m.we)(
              "#accountpreferences_authorized_devices_type_browser",
            );
          default:
            return (0, m.we)(
              "#accountpreferences_authorized_devices_type_unknown",
            );
        }
      }
      function $(e) {
        const { closeModal: t } = e;
        return r.createElement(
          M.x_,
          { onEscKeypress: t },
          r.createElement(
            u.UC,
            null,
            r.createElement(
              u.Y9,
              null,
              (0, m.we)("#authorized_devices_deauthorize_title"),
            ),
            r.createElement(
              u.nB,
              null,
              r.createElement(
                u.a3,
                null,
                (0, m.we)("#authorized_devices_deauthorize_msg"),
              ),
              r.createElement(
                u.wi,
                null,
                r.createElement(u.CB, {
                  strOKText: (0, m.we)(
                    "#authorized_devices_deauthorize_proceed",
                  ),
                  onOK: async () => {
                    const e = new FormData();
                    e.set("action", "deauthorize"),
                      e.set("sessionid", s.TS.SESSIONID),
                      await l().post(
                        s.TS.STORE_BASE_URL + "twofactor/manage_action",
                        e,
                      );
                    const t = document.createElement("form");
                    (t.method = "POST"),
                      (t.action = s.TS.STORE_BASE_URL + "logout");
                    const i = document.createElement("input");
                    (i.type = "hidden"),
                      (i.name = "sessionid"),
                      (i.value = s.TS.SESSIONID),
                      t.appendChild(i),
                      document.body.appendChild(t),
                      t.submit();
                  },
                  onCancel: t,
                }),
              ),
            ),
          ),
        );
      }
      const Q = r.lazy(() =>
          Promise.all([
            i.e(8970),
            i.e(6597),
            i.e(2298),
            i.e(576),
            i.e(2797),
            i.e(4717),
            i.e(6769),
            i.e(7403),
            i.e(582),
            i.e(140),
            i.e(5578),
            i.e(1006),
            i.e(1471),
            i.e(5717),
            i.e(9239),
            i.e(8567),
            i.e(7072),
          ]).then(i.bind(i, 42048)),
        ),
        ee = {
          CookieSettings: () => "/cookiepreferences",
          NotificationSettings: () => "/notificationsettings",
          ...{ FamilyManagement: () => "/familymanagement" },
          AuthorizedDevices: () => "/authorizeddevices",
        },
        te = (e) => {
          const t = e.match.url,
            i = ee;
          return r.createElement(
            a.dO,
            null,
            r.createElement(a.qh, {
              path: `${t}${i.CookieSettings()}`,
              render: () =>
                r.createElement(G.X, {
                  config: {
                    "cookie-preferences": () => r.createElement(k, null),
                  },
                }),
            }),
            r.createElement(a.qh, {
              path: `${t}${i.NotificationSettings()}`,
              render: () =>
                r.createElement(G.X, {
                  config: {
                    "notification-settings": () => r.createElement(x, null),
                  },
                }),
            }),
            r.createElement(a.qh, {
              path: `${t}${i.FamilyManagement()}`,
              render: () =>
                r.createElement(G.X, {
                  config: {
                    "family-management": () => r.createElement(Q, null),
                  },
                }),
            }),
            r.createElement(a.qh, {
              path: `${t}${i.AuthorizedDevices()}`,
              render: () =>
                r.createElement(G.X, {
                  config: {
                    "authorized-devices": () => r.createElement(Y, null),
                  },
                }),
            }),
          );
        };
    },
  },
]);
