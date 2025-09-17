(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5979],
  {
    chunkid: function (module, module_exports, __webpack_require__) {
      var _;
      !(function (_, _) {
        "use strict";
        var _ = "function",
          _ = "undefined",
          _ = "object",
          _ = "string",
          _ = "major",
          _ = "model",
          _ = "name",
          _ = "type",
          _ = "vendor",
          _ = "version",
          _ = "architecture",
          _ = "console",
          _ = "mobile",
          _ = "tablet",
          _ = "smarttv",
          _ = "wearable",
          _ = "embedded",
          _ = "Amazon",
          _ = "Apple",
          _ = "ASUS",
          _ = "BlackBerry",
          _ = "Browser",
          _ = "Chrome",
          _ = "Firefox",
          _ = "Google",
          _ = "Honor",
          _ = "Huawei",
          _ = "LG",
          _ = "Microsoft",
          _ = "Motorola",
          _ = "Nvidia",
          _ = "OnePlus",
          _ = "Opera",
          _ = "OPPO",
          _ = "Samsung",
          _ = "Sharp",
          _ = "Sony",
          _ = "Xiaomi",
          _ = "Zebra",
          _ = "Facebook",
          _ = "Chromium OS",
          _ = "Mac OS",
          _ = " Browser",
          _ = function (_) {
            for (var _ = {}, _ = 0; _ < _.length; _++)
              _[_[_].toUpperCase()] = _[_];
            return _;
          },
          _ = function (_, _) {
            return typeof _ === _ && -1 !== _(_).indexOf(_(_));
          },
          _ = function (_) {
            return _.toLowerCase();
          },
          _ = function (_, _) {
            if (typeof _ === _)
              return (
                (_ = _.replace(/^\s\s*/, "")),
                typeof _ === _ ? _ : _.substring(0, 500)
              );
          },
          _ = function (_, _) {
            for (var _, _, _, _, _, _, _ = 0; _ < _.length && !_; ) {
              var _ = _[_],
                _ = _[_ + 1];
              for (_ = _ = 0; _ < _.length && !_ && _[_]; )
                if ((_ = _[_++].exec(_)))
                  for (_ = 0; _ < _.length; _++)
                    (_ = _[++_]),
                      typeof (_ = _[_]) === _ && _.length > 0
                        ? 2 === _.length
                          ? typeof _[1] == _
                            ? (this[_[0]] = _[1].call(this, _))
                            : (this[_[0]] = _[1])
                          : 3 === _.length
                            ? typeof _[1] !== _ || (_[1].exec && _[1].test)
                              ? (this[_[0]] = _ ? _.replace(_[1], _[2]) : _)
                              : (this[_[0]] = _ ? _[1].call(this, _, _[2]) : _)
                            : 4 === _.length &&
                              (this[_[0]] = _
                                ? _[3].call(this, _.replace(_[1], _[2]))
                                : _)
                        : (this[_] = _ || _);
              _ += 2;
            }
          },
          _ = function (_, _) {
            for (var _ in _)
              if (typeof _[_] === _ && _[_].length > 0) {
                for (var _ = 0; _ < _[_].length; _++)
                  if (_(_[_][_], _)) return "?" === _ ? _ : _;
              } else if (_(_[_], _)) return "?" === _ ? _ : _;
            return _.hasOwnProperty("*") ? _["*"] : _;
          },
          _ = {
            _: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            _: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            _: "ARM",
          },
          _ = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [_, [_, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [_, [_, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [_, _],
              [/opios[\/ ]+([\w\.]+)/i],
              [_, [_, _ + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [_, [_, _ + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [_, [_, _]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [_, [_, "Baidu"]],
              [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
              [_, [_, "Maxthon"]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
                /(heytap|ovi|115)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [_, _],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [_, [_, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [_, [_, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [_, [_, "UC" + _]],
              [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i,
                /micromessenger\/([\w\.]+)/i,
              ],
              [_, [_, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [_, [_, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [_, [_, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [_, [_, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [_, [_, "Smart Lenovo " + _]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[_, /(.+)/, "$1 Secure " + _], _],
              [/\bfocus\/([\w\.]+)/i],
              [_, [_, _ + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [_, [_, _ + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [_, [_, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [_, [_, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [_, [_, _ + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [_, [_, "MIUI" + _]],
              [/fxios\/([\w\.-]+)/i],
              [_, [_, _]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [_, [_, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [[_, /(.+)/, "$1Browser"], _],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [[_, /(.+)/, "$1" + _], _],
              [/samsungbrowser\/([\w\.]+)/i],
              [_, [_, _ + " Internet"]],
              [/metasr[\/ ]?([\d\.]+)/i],
              [_, [_, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [[_, "Sogou Mobile"], _],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
              ],
              [_, _],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [_],
              [
                /ome\/([\w\.]+) \w* ?(iron) saf/i,
                /ome\/([\w\.]+).+qihu (360)[es]e/i,
              ],
              [_, _],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[_, _], _],
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
              [_, _],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [_, [_, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [_, [_, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [_, [_, _ + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[_, _ + " WebView"], _],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [_, [_, "Android " + _]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [_, _],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [_, [_, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [_, _],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                _,
                [
                  _,
                  _,
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
              [_, _],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[_, "Netscape"], _],
              [/(wolvic|librewolf)\/([\w\.]+)/i],
              [_, _],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [_, [_, _ + " Reality"]],
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
              [_, [_, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [_, [_, /master.|lts./, ""]],
            ],
            cpu: [
              [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
              [[_, "amd64"]],
              [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
              [[_, "ia32"]],
              [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
              [[_, "arm64"]],
              [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
              [[_, "armhf"]],
              [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
              [[_, "arm"]],
              [/((ppc|powerpc)(64)?)( mac|;|\))/i],
              [[_, /ower/, "", _]],
              [/ sun4\w[;\)]/i],
              [[_, "sparc"]],
              [
                /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
              ],
              [[_, _]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [_, [_, _], [_, _]],
              [
                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [_, [_, _], [_, _]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [_, [_, _], [_, _]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [_, [_, _], [_, _]],
              [/(macintosh);/i],
              [_, [_, _]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [_, [_, _], [_, _]],
              [
                /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i,
              ],
              [_, [_, _], [_, _]],
              [/honor([-\w ]+)[;\)]/i],
              [_, [_, _], [_, _]],
              [
                /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i,
              ],
              [_, [_, _], [_, _]],
              [
                /(?:huawei)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [_, [_, _], [_, _]],
              [
                /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
                /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i,
              ],
              [
                [_, /_/g, " "],
                [_, _],
                [_, _],
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
                [_, /_/g, " "],
                [_, _],
                [_, _],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [_, [_, _], [_, _]],
              [/\b(opd2(\d{3}a?))(?: bui|\))/i],
              [
                _,
                [
                  _,
                  _,
                  {
                    OnePlus: ["304", "403", "203"],
                    "*": _,
                  },
                ],
                [_, _],
              ],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [_, [_, "Vivo"], [_, _]],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [_, [_, "Realme"], [_, _]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [_, [_, _], [_, _]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [_, [_, _], [_, _]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [_, [_, _], [_, _]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [_, [_, _], [_, _]],
              [
                /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
                /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i,
              ],
              [_, [_, "Lenovo"], [_, _]],
              [/(nokia) (t[12][01])/i],
              [_, _, [_, _]],
              [
                /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
                /nokia[-_ ]?(([-\w\. ]*))/i,
              ],
              [
                [_, /_/g, " "],
                [_, _],
                [_, "Nokia"],
              ],
              [/(pixel (c|tablet))\b/i],
              [_, [_, _], [_, _]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [_, [_, _], [_, _]],
              [
                /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [_, [_, _], [_, _]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [_, "Xperia Tablet"],
                [_, _],
                [_, _],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [_, [_, _], [_, _]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [_, [_, _], [_, _]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [_, /(.+)/g, "Fire Phone $1"],
                [_, _],
                [_, _],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [_, _, [_, _]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [_, [_, _], [_, _]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [_, [_, _], [_, _]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [_, [_, _], [_, _]],
              [/(nexus 9)/i],
              [_, [_, "HTC"], [_, _]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [_, [_, /_/g, " "], [_, _]],
              [
                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
              ],
              [_, [_, "TCL"], [_, _]],
              [/(itel) ((\w+))/i],
              [
                [_, _],
                _,
                [
                  _,
                  _,
                  {
                    tablet: ["p10001l", "w7001"],
                    "*": "mobile",
                  },
                ],
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [_, [_, "Acer"], [_, _]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [_, [_, "Meizu"], [_, _]],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [_, [_, "Ulefone"], [_, _]],
              [
                /; (energy ?\w+)(?: bui|\))/i,
                /; energizer ([\w ]+)(?: bui|\))/i,
              ],
              [_, [_, "Energizer"], [_, _]],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [_, [_, "Cat"], [_, _]],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [_, [_, "Smartfren"], [_, _]],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [_, [_, "Nothing"], [_, _]],
              [
                /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
                /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i,
              ],
              [_, [_, "Archos"], [_, _]],
              [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
              [_, [_, "Archos"], [_, _]],
              [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
              [_, _, [_, _]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
                /; (hmd|imo) ([\w ]+?)(?: bui|\))/i,
                /(hp) ([\w ]+\w)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [_, _, [_, _]],
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
              [_, _, [_, _]],
              [/(surface duo)/i],
              [_, [_, _], [_, _]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [_, [_, "Fairphone"], [_, _]],
              [/(u304aa)/i],
              [_, [_, "AT&T"], [_, _]],
              [/\bsie-(\w*)/i],
              [_, [_, "Siemens"], [_, _]],
              [/\b(rct\w+) b/i],
              [_, [_, "RCA"], [_, _]],
              [/\b(venue[\d ]{2,7}) b/i],
              [_, [_, "Dell"], [_, _]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [_, [_, "Verizon"], [_, _]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [_, [_, "Barnes & Noble"], [_, _]],
              [/\b(tm\d{3}\w+) b/i],
              [_, [_, "NuVision"], [_, _]],
              [/\b(k88) b/i],
              [_, [_, "ZTE"], [_, _]],
              [/\b(nx\d{3}j) b/i],
              [_, [_, "ZTE"], [_, _]],
              [/\b(gen\d{3}) b.+49h/i],
              [_, [_, "Swiss"], [_, _]],
              [/\b(zur\d{3}) b/i],
              [_, [_, "Swiss"], [_, _]],
              [/\b((zeki)?tb.*\b) b/i],
              [_, [_, "Zeki"], [_, _]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[_, "Dragon Touch"], _, [_, _]],
              [/\b(ns-?\w{0,9}) b/i],
              [_, [_, "Insignia"], [_, _]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [_, [_, "NextBook"], [_, _]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[_, "Voice"], _, [_, _]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[_, "LvTel"], _, [_, _]],
              [/\b(ph-1) /i],
              [_, [_, "Essential"], [_, _]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [_, [_, "Envizen"], [_, _]],
              [/\b(trio[-\w\. ]+) b/i],
              [_, [_, "MachSpeed"], [_, _]],
              [/\btu_(1491) b/i],
              [_, [_, "Rotor"], [_, _]],
              [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
              [_, [_, _], [_, _]],
              [/(sprint) (\w+)/i],
              [_, _, [_, _]],
              [/(kin\.[onetw]{3})/i],
              [
                [_, /\./g, " "],
                [_, _],
                [_, _],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [_, [_, _], [_, _]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [_, [_, _], [_, _]],
              [/smart-tv.+(samsung)/i],
              [_, [_, _]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [_, /^/, "SmartTV"],
                [_, _],
                [_, _],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [_, _],
                [_, _],
              ],
              [/(apple) ?tv/i],
              [_, [_, _ + " TV"], [_, _]],
              [/crkey/i],
              [
                [_, _ + "cast"],
                [_, _],
                [_, _],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [_, [_, _], [_, _]],
              [/(shield \w+ tv)/i],
              [_, [_, _], [_, _]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [_, [_, _], [_, _]],
              [/(bravia[\w ]+)( bui|\))/i],
              [_, [_, _], [_, _]],
              [/(mi(tv|box)-?\w+) bui/i],
              [_, [_, _], [_, _]],
              [/Hbbtv.*(technisat) (.*);/i],
              [_, _, [_, _]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [_, _],
                [_, _],
                [_, _],
              ],
              [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
              [_, [_, _]],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[_, _]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [_, _, [_, _]],
              [/droid.+; (shield)( bui|\))/i],
              [_, [_, _], [_, _]],
              [/(playstation \w+)/i],
              [_, [_, _], [_, _]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [_, [_, _], [_, _]],
              [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
              [_, [_, _], [_, _]],
              [
                /((pebble))app/i,
                /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i,
              ],
              [_, _, [_, _]],
              [/(ow(?:19|20)?we?[1-3]{1,3})/i],
              [_, [_, _], [_, _]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [_, [_, _], [_, _]],
              [/(opwwe\d{3})/i],
              [_, [_, _], [_, _]],
              [/(moto 360)/i],
              [_, [_, _], [_, _]],
              [/(smartwatch 3)/i],
              [_, [_, _], [_, _]],
              [/(g watch r)/i],
              [_, [_, _], [_, _]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [_, [_, _], [_, _]],
              [/droid.+; (glass) \d/i],
              [_, [_, _], [_, _]],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [_, _, [_, _]],
              [/; (quest( \d| pro)?)/i],
              [_, [_, _], [_, _]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [_, [_, _]],
              [/(aeobc)\b/i],
              [_, [_, _], [_, _]],
              [/(homepod).+mac os/i],
              [_, [_, _], [_, _]],
              [/windows iot/i],
              [[_, _]],
              [
                /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
              ],
              [_, [_, _]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [_, [_, _]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[_, _]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[_, _]],
              [/droid .+?; ([\w\. -]+)( bui|\))/i],
              [_, [_, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [_, [_, "EdgeHTML"]],
              [/(arkweb)\/([\w\.]+)/i],
              [_, _],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [_, [_, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [_, _],
              [/ladybird\//i],
              [[_, "LibWeb"]],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [_, _],
            ],
            _: [
              [/microsoft (windows) (vista|xp)/i],
              [_, _],
              [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
              [_, [_, _, _]],
              [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
              ],
              [
                [_, _, _],
                [_, "Windows"],
              ],
              [
                /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [_, /_/g, "."],
                [_, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [_, _],
                [_, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [_, _],
              [/(ubuntu) ([\w\.]+) like android/i],
              [[_, /(.+)/, "$1 Touch"], _],
              [
                /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i,
              ],
              [_, _],
              [/\(bb(10);/i],
              [_, [_, _]],
              [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
              [_, [_, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [_, [_, _ + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [_, [_, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [_, [_, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [_, [_, _ + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[_, _], _],
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
              [_, _],
              [/(sunos) ?([\w\.\d]*)/i],
              [[_, "Solaris"], _],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [_, _],
            ],
          },
          _ = function (_, _) {
            if ((typeof _ === _ && ((_ = _), (_ = _)), !(this instanceof _)))
              return new _(_, _).getResult();
            var _ = typeof _ !== _ && _.navigator ? _.navigator : _,
              _ = _ || (_ && _.userAgent ? _.userAgent : ""),
              _ = _ && _.userAgentData ? _.userAgentData : _,
              _ = _
                ? (function (_, _) {
                    var _ = {};
                    for (var _ in _)
                      _[_] && _[_].length % 2 == 0
                        ? (_[_] = _[_].concat(_[_]))
                        : (_[_] = _[_]);
                    return _;
                  })(_, _)
                : _,
              _ = _ && _.userAgent == _;
            return (
              (this.getBrowser = function () {
                var _,
                  _ = {};
                return (
                  (_[_] = _),
                  (_[_] = _),
                  _.call(_, _, _.browser),
                  (_[_] =
                    typeof (_ = _[_]) === _
                      ? _.replace(/[^\d\.]/g, "").split(".")[0]
                      : _),
                  _ &&
                    _ &&
                    _.brave &&
                    typeof _.brave.isBrave == _ &&
                    (_[_] = "Brave"),
                  _
                );
              }),
              (this.getCPU = function () {
                var _ = {};
                return (_[_] = _), _.call(_, _, _.cpu), _;
              }),
              (this.getDevice = function () {
                var _ = {};
                return (
                  (_[_] = _),
                  (_[_] = _),
                  (_[_] = _),
                  _.call(_, _, _.device),
                  _ && !_[_] && _ && _.mobile && (_[_] = _),
                  _ &&
                    "Macintosh" == _[_] &&
                    _ &&
                    typeof _.standalone !== _ &&
                    _.maxTouchPoints &&
                    _.maxTouchPoints > 2 &&
                    ((_[_] = "iPad"), (_[_] = _)),
                  _
                );
              }),
              (this.getEngine = function () {
                var _ = {};
                return (_[_] = _), (_[_] = _), _.call(_, _, _.engine), _;
              }),
              (this.getOS = function () {
                var _ = {};
                return (
                  (_[_] = _),
                  (_[_] = _),
                  _.call(_, _, _._),
                  _ &&
                    !_[_] &&
                    _ &&
                    _.platform &&
                    "Unknown" != _.platform &&
                    (_[_] = _.platform
                      .replace(/chrome os/i, _)
                      .replace(/macos/i, _)),
                  _
                );
              }),
              (this.getResult = function () {
                return {
                  _: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  _: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return _;
              }),
              (this.setUA = function (_) {
                return (
                  (_ = typeof _ === _ && _.length > 500 ? _(_, 500) : _), this
                );
              }),
              this.setUA(_),
              this
            );
          };
        (_.VERSION = "1.0.41"),
          (_.BROWSER = _([_, _, _])),
          (_.CPU = _([_])),
          (_.DEVICE = _([_, _, _, _, _, _, _, _, _])),
          (_.ENGINE = _._ = _([_, _])),
          typeof _ !== _
            ? (_.exports && (_ = _.exports = _), (_.UAParser = _))
            : __webpack_require__.amdO
              ? (_ = function () {
                  return _;
                }.call(_, __webpack_require__, _, _)) === _ || (_.exports = _)
              : typeof _ !== _ && (_.UAParser = _);
        var _ = typeof _ !== _ && (_.jQuery || _.Zepto);
        if (_ && !_._) {
          var _ = new _();
          (_._ = _.getResult()),
            (_._.get = function () {
              return _.getUA();
            }),
            (_._.set = function (_) {
              _.setUA(_);
              var _ = _.getResult();
              for (var _ in _) _._[_] = _[_];
            });
        }
      })("object" == typeof window ? window : this);
    },
  },
]);
