/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [7948],
  {
    75436: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("af", {
          months:
            "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split(
            "_",
          ),
          weekdays:
            "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split(
              "_",
            ),
          weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
          weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
          meridiemParse: /vm|nm/i,
          isPM: function (e) {
            return /^nm$/i.test(e);
          },
          meridiem: function (e, a, t) {
            return e < 12 ? (t ? "vm" : "VM") : t ? "nm" : "NM";
          },
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Vandag om] LT",
            nextDay: "[Môre om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[Gister om] LT",
            lastWeek: "[Laas] dddd [om] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "oor %s",
            past: "%s gelede",
            s: "'n paar sekondes",
            ss: "%d sekondes",
            m: "'n minuut",
            mm: "%d minute",
            h: "'n uur",
            hh: "%d ure",
            d: "'n dag",
            dd: "%d dae",
            M: "'n maand",
            MM: "%d maande",
            y: "'n jaar",
            yy: "%d jaar",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function (e) {
            return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    73578: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = function (e) {
            return 0 === e
              ? 0
              : 1 === e
                ? 1
                : 2 === e
                  ? 2
                  : e % 100 >= 3 && e % 100 <= 10
                    ? 3
                    : e % 100 >= 11
                      ? 4
                      : 5;
          },
          t = {
            s: [
              "أقل من ثانية",
              "ثانية واحدة",
              ["ثانيتان", "ثانيتين"],
              "%d ثوان",
              "%d ثانية",
              "%d ثانية",
            ],
            m: [
              "أقل من دقيقة",
              "دقيقة واحدة",
              ["دقيقتان", "دقيقتين"],
              "%d دقائق",
              "%d دقيقة",
              "%d دقيقة",
            ],
            h: [
              "أقل من ساعة",
              "ساعة واحدة",
              ["ساعتان", "ساعتين"],
              "%d ساعات",
              "%d ساعة",
              "%d ساعة",
            ],
            d: [
              "أقل من يوم",
              "يوم واحد",
              ["يومان", "يومين"],
              "%d أيام",
              "%d يومًا",
              "%d يوم",
            ],
            M: [
              "أقل من شهر",
              "شهر واحد",
              ["شهران", "شهرين"],
              "%d أشهر",
              "%d شهرا",
              "%d شهر",
            ],
            y: [
              "أقل من عام",
              "عام واحد",
              ["عامان", "عامين"],
              "%d أعوام",
              "%d عامًا",
              "%d عام",
            ],
          },
          n = function (e) {
            return function (n, s, r, i) {
              var d = a(n),
                _ = t[e][a(n)];
              return 2 === d && (_ = _[s ? 0 : 1]), _.replace(/%d/i, n);
            };
          },
          s = [
            "جانفي",
            "فيفري",
            "مارس",
            "أفريل",
            "ماي",
            "جوان",
            "جويلية",
            "أوت",
            "سبتمبر",
            "أكتوبر",
            "نوفمبر",
            "ديسمبر",
          ];
        e.defineLocale("ar-dz", {
          months: s,
          monthsShort: s,
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_",
          ),
          weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/‏M/‏YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          meridiemParse: /ص|م/,
          isPM: function (e) {
            return "م" === e;
          },
          meridiem: function (e, a, t) {
            return e < 12 ? "ص" : "م";
          },
          calendar: {
            sameDay: "[اليوم عند الساعة] LT",
            nextDay: "[غدًا عند الساعة] LT",
            nextWeek: "dddd [عند الساعة] LT",
            lastDay: "[أمس عند الساعة] LT",
            lastWeek: "dddd [عند الساعة] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "بعد %s",
            past: "منذ %s",
            s: n("s"),
            ss: n("s"),
            m: n("m"),
            mm: n("m"),
            h: n("h"),
            hh: n("h"),
            d: n("d"),
            dd: n("d"),
            M: n("M"),
            MM: n("M"),
            y: n("y"),
            yy: n("y"),
          },
          postformat: function (e) {
            return e.replace(/,/g, "،");
          },
          week: { dow: 0, doy: 4 },
        });
      })(t(37485));
    },
    79535: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ar-kw", {
          months:
            "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
              "_",
            ),
          monthsShort:
            "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
              "_",
            ),
          weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_",
          ),
          weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            ss: "%d ثانية",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات",
          },
          week: { dow: 0, doy: 12 },
        });
      })(t(37485));
    },
    45801: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0",
          },
          t = function (e) {
            return 0 === e
              ? 0
              : 1 === e
                ? 1
                : 2 === e
                  ? 2
                  : e % 100 >= 3 && e % 100 <= 10
                    ? 3
                    : e % 100 >= 11
                      ? 4
                      : 5;
          },
          n = {
            s: [
              "أقل من ثانية",
              "ثانية واحدة",
              ["ثانيتان", "ثانيتين"],
              "%d ثوان",
              "%d ثانية",
              "%d ثانية",
            ],
            m: [
              "أقل من دقيقة",
              "دقيقة واحدة",
              ["دقيقتان", "دقيقتين"],
              "%d دقائق",
              "%d دقيقة",
              "%d دقيقة",
            ],
            h: [
              "أقل من ساعة",
              "ساعة واحدة",
              ["ساعتان", "ساعتين"],
              "%d ساعات",
              "%d ساعة",
              "%d ساعة",
            ],
            d: [
              "أقل من يوم",
              "يوم واحد",
              ["يومان", "يومين"],
              "%d أيام",
              "%d يومًا",
              "%d يوم",
            ],
            M: [
              "أقل من شهر",
              "شهر واحد",
              ["شهران", "شهرين"],
              "%d أشهر",
              "%d شهرا",
              "%d شهر",
            ],
            y: [
              "أقل من عام",
              "عام واحد",
              ["عامان", "عامين"],
              "%d أعوام",
              "%d عامًا",
              "%d عام",
            ],
          },
          s = function (e) {
            return function (a, s, r, i) {
              var d = t(a),
                _ = n[e][t(a)];
              return 2 === d && (_ = _[s ? 0 : 1]), _.replace(/%d/i, a);
            };
          },
          r = [
            "يناير",
            "فبراير",
            "مارس",
            "أبريل",
            "مايو",
            "يونيو",
            "يوليو",
            "أغسطس",
            "سبتمبر",
            "أكتوبر",
            "نوفمبر",
            "ديسمبر",
          ];
        e.defineLocale("ar-ly", {
          months: r,
          monthsShort: r,
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_",
          ),
          weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/‏M/‏YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          meridiemParse: /ص|م/,
          isPM: function (e) {
            return "م" === e;
          },
          meridiem: function (e, a, t) {
            return e < 12 ? "ص" : "م";
          },
          calendar: {
            sameDay: "[اليوم عند الساعة] LT",
            nextDay: "[غدًا عند الساعة] LT",
            nextWeek: "dddd [عند الساعة] LT",
            lastDay: "[أمس عند الساعة] LT",
            lastWeek: "dddd [عند الساعة] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "بعد %s",
            past: "منذ %s",
            s: s("s"),
            ss: s("s"),
            m: s("m"),
            mm: s("m"),
            h: s("h"),
            hh: s("h"),
            d: s("d"),
            dd: s("d"),
            M: s("M"),
            MM: s("M"),
            y: s("y"),
            yy: s("y"),
          },
          preparse: function (e) {
            return e.replace(/،/g, ",");
          },
          postformat: function (e) {
            return e
              .replace(/\d/g, function (e) {
                return a[e];
              })
              .replace(/,/g, "،");
          },
          week: { dow: 6, doy: 12 },
        });
      })(t(37485));
    },
    64784: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ar-ma", {
          months:
            "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
              "_",
            ),
          monthsShort:
            "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
              "_",
            ),
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_",
          ),
          weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            ss: "%d ثانية",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات",
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    86701: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠",
          },
          t = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0",
          };
        e.defineLocale("ar-ps", {
          months:
            "كانون الثاني_شباط_آذار_نيسان_أيّار_حزيران_تمّوز_آب_أيلول_تشري الأوّل_تشرين الثاني_كانون الأوّل".split(
              "_",
            ),
          monthsShort:
            "ك٢_شباط_آذار_نيسان_أيّار_حزيران_تمّوز_آب_أيلول_ت١_ت٢_ك١".split(
              "_",
            ),
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_",
          ),
          weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          meridiemParse: /ص|م/,
          isPM: function (e) {
            return "م" === e;
          },
          meridiem: function (e, a, t) {
            return e < 12 ? "ص" : "م";
          },
          calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            ss: "%d ثانية",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات",
          },
          preparse: function (e) {
            return e
              .replace(/[٣٤٥٦٧٨٩٠]/g, function (e) {
                return t[e];
              })
              .split("")
              .reverse()
              .join("")
              .replace(/[١٢](?![\u062a\u0643])/g, function (e) {
                return t[e];
              })
              .split("")
              .reverse()
              .join("")
              .replace(/،/g, ",");
          },
          postformat: function (e) {
            return e
              .replace(/\d/g, function (e) {
                return a[e];
              })
              .replace(/,/g, "،");
          },
          week: { dow: 0, doy: 6 },
        });
      })(t(37485));
    },
    59050: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠",
          },
          t = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0",
          };
        e.defineLocale("ar-sa", {
          months:
            "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
              "_",
            ),
          monthsShort:
            "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
              "_",
            ),
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_",
          ),
          weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          meridiemParse: /ص|م/,
          isPM: function (e) {
            return "م" === e;
          },
          meridiem: function (e, a, t) {
            return e < 12 ? "ص" : "م";
          },
          calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            ss: "%d ثانية",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات",
          },
          preparse: function (e) {
            return e
              .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                return t[e];
              })
              .replace(/،/g, ",");
          },
          postformat: function (e) {
            return e
              .replace(/\d/g, function (e) {
                return a[e];
              })
              .replace(/,/g, "،");
          },
          week: { dow: 0, doy: 6 },
        });
      })(t(37485));
    },
    62042: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ar-tn", {
          months:
            "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
              "_",
            ),
          monthsShort:
            "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
              "_",
            ),
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_",
          ),
          weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            ss: "%d ثانية",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات",
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    27662: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠",
          },
          t = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0",
          },
          n = function (e) {
            return 0 === e
              ? 0
              : 1 === e
                ? 1
                : 2 === e
                  ? 2
                  : e % 100 >= 3 && e % 100 <= 10
                    ? 3
                    : e % 100 >= 11
                      ? 4
                      : 5;
          },
          s = {
            s: [
              "أقل من ثانية",
              "ثانية واحدة",
              ["ثانيتان", "ثانيتين"],
              "%d ثوان",
              "%d ثانية",
              "%d ثانية",
            ],
            m: [
              "أقل من دقيقة",
              "دقيقة واحدة",
              ["دقيقتان", "دقيقتين"],
              "%d دقائق",
              "%d دقيقة",
              "%d دقيقة",
            ],
            h: [
              "أقل من ساعة",
              "ساعة واحدة",
              ["ساعتان", "ساعتين"],
              "%d ساعات",
              "%d ساعة",
              "%d ساعة",
            ],
            d: [
              "أقل من يوم",
              "يوم واحد",
              ["يومان", "يومين"],
              "%d أيام",
              "%d يومًا",
              "%d يوم",
            ],
            M: [
              "أقل من شهر",
              "شهر واحد",
              ["شهران", "شهرين"],
              "%d أشهر",
              "%d شهرا",
              "%d شهر",
            ],
            y: [
              "أقل من عام",
              "عام واحد",
              ["عامان", "عامين"],
              "%d أعوام",
              "%d عامًا",
              "%d عام",
            ],
          },
          r = function (e) {
            return function (a, t, r, i) {
              var d = n(a),
                _ = s[e][n(a)];
              return 2 === d && (_ = _[t ? 0 : 1]), _.replace(/%d/i, a);
            };
          },
          i = [
            "يناير",
            "فبراير",
            "مارس",
            "أبريل",
            "مايو",
            "يونيو",
            "يوليو",
            "أغسطس",
            "سبتمبر",
            "أكتوبر",
            "نوفمبر",
            "ديسمبر",
          ];
        e.defineLocale("ar", {
          months: i,
          monthsShort: i,
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
            "_",
          ),
          weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/‏M/‏YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          meridiemParse: /ص|م/,
          isPM: function (e) {
            return "م" === e;
          },
          meridiem: function (e, a, t) {
            return e < 12 ? "ص" : "م";
          },
          calendar: {
            sameDay: "[اليوم عند الساعة] LT",
            nextDay: "[غدًا عند الساعة] LT",
            nextWeek: "dddd [عند الساعة] LT",
            lastDay: "[أمس عند الساعة] LT",
            lastWeek: "dddd [عند الساعة] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "بعد %s",
            past: "منذ %s",
            s: r("s"),
            ss: r("s"),
            m: r("m"),
            mm: r("m"),
            h: r("h"),
            hh: r("h"),
            d: r("d"),
            dd: r("d"),
            M: r("M"),
            MM: r("M"),
            y: r("y"),
            yy: r("y"),
          },
          preparse: function (e) {
            return e
              .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                return t[e];
              })
              .replace(/،/g, ",");
          },
          postformat: function (e) {
            return e
              .replace(/\d/g, function (e) {
                return a[e];
              })
              .replace(/,/g, "،");
          },
          week: { dow: 6, doy: 12 },
        });
      })(t(37485));
    },
    11071: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
          1: "-inci",
          5: "-inci",
          8: "-inci",
          70: "-inci",
          80: "-inci",
          2: "-nci",
          7: "-nci",
          20: "-nci",
          50: "-nci",
          3: "-üncü",
          4: "-üncü",
          100: "-üncü",
          6: "-ncı",
          9: "-uncu",
          10: "-uncu",
          30: "-uncu",
          60: "-ıncı",
          90: "-ıncı",
        };
        e.defineLocale("az", {
          months:
            "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split(
              "_",
            ),
          monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split(
            "_",
          ),
          weekdays:
            "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split(
              "_",
            ),
          weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
          weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[bugün saat] LT",
            nextDay: "[sabah saat] LT",
            nextWeek: "[gələn həftə] dddd [saat] LT",
            lastDay: "[dünən] LT",
            lastWeek: "[keçən həftə] dddd [saat] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s sonra",
            past: "%s əvvəl",
            s: "bir neçə saniyə",
            ss: "%d saniyə",
            m: "bir dəqiqə",
            mm: "%d dəqiqə",
            h: "bir saat",
            hh: "%d saat",
            d: "bir gün",
            dd: "%d gün",
            M: "bir ay",
            MM: "%d ay",
            y: "bir il",
            yy: "%d il",
          },
          meridiemParse: /gecə|səhər|gündüz|axşam/,
          isPM: function (e) {
            return /^(gündüz|axşam)$/.test(e);
          },
          meridiem: function (e, a, t) {
            return e < 4
              ? "gecə"
              : e < 12
                ? "səhər"
                : e < 17
                  ? "gündüz"
                  : "axşam";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
          ordinal: function (e) {
            if (0 === e) return e + "-ıncı";
            var t = e % 10,
              n = (e % 100) - t,
              s = e >= 100 ? 100 : null;
            return e + (a[t] || a[n] || a[s]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    48369: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a) {
          var t = e.split("_");
          return a % 10 == 1 && a % 100 != 11
            ? t[0]
            : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)
              ? t[1]
              : t[2];
        }
        function t(e, t, n) {
          return "m" === n
            ? t
              ? "хвіліна"
              : "хвіліну"
            : "h" === n
              ? t
                ? "гадзіна"
                : "гадзіну"
              : e +
                " " +
                a(
                  {
                    ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                    mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                    hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                    dd: "дзень_дні_дзён",
                    MM: "месяц_месяцы_месяцаў",
                    yy: "год_гады_гадоў",
                  }[n],
                  +e,
                );
        }
        e.defineLocale("be", {
          months: {
            format:
              "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split(
                "_",
              ),
            standalone:
              "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split(
                "_",
              ),
          },
          monthsShort:
            "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split(
              "_",
            ),
          weekdays: {
            format:
              "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split(
                "_",
              ),
            standalone:
              "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split(
                "_",
              ),
            isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/,
          },
          weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
          weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., HH:mm",
            LLLL: "dddd, D MMMM YYYY г., HH:mm",
          },
          calendar: {
            sameDay: "[Сёння ў] LT",
            nextDay: "[Заўтра ў] LT",
            lastDay: "[Учора ў] LT",
            nextWeek: function () {
              return "[У] dddd [ў] LT";
            },
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                  return "[У мінулую] dddd [ў] LT";
                case 1:
                case 2:
                case 4:
                  return "[У мінулы] dddd [ў] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "праз %s",
            past: "%s таму",
            s: "некалькі секунд",
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: "дзень",
            dd: t,
            M: "месяц",
            MM: t,
            y: "год",
            yy: t,
          },
          meridiemParse: /ночы|раніцы|дня|вечара/,
          isPM: function (e) {
            return /^(дня|вечара)$/.test(e);
          },
          meridiem: function (e, a, t) {
            return e < 4
              ? "ночы"
              : e < 12
                ? "раніцы"
                : e < 17
                  ? "дня"
                  : "вечара";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
          ordinal: function (e, a) {
            switch (a) {
              case "M":
              case "d":
              case "DDD":
              case "w":
              case "W":
                return (e % 10 != 2 && e % 10 != 3) ||
                  e % 100 == 12 ||
                  e % 100 == 13
                  ? e + "-ы"
                  : e + "-і";
              case "D":
                return e + "-га";
              default:
                return e;
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    37874: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("bg", {
          months:
            "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split(
              "_",
            ),
          monthsShort: "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split(
            "_",
          ),
          weekdays:
            "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
          weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
          weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[Днес в] LT",
            nextDay: "[Утре в] LT",
            nextWeek: "dddd [в] LT",
            lastDay: "[Вчера в] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                case 3:
                case 6:
                  return "[Миналата] dddd [в] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[Миналия] dddd [в] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "след %s",
            past: "преди %s",
            s: "няколко секунди",
            ss: "%d секунди",
            m: "минута",
            mm: "%d минути",
            h: "час",
            hh: "%d часа",
            d: "ден",
            dd: "%d дена",
            w: "седмица",
            ww: "%d седмици",
            M: "месец",
            MM: "%d месеца",
            y: "година",
            yy: "%d години",
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
          ordinal: function (e) {
            var a = e % 10,
              t = e % 100;
            return 0 === e
              ? e + "-ев"
              : 0 === t
                ? e + "-ен"
                : t > 10 && t < 20
                  ? e + "-ти"
                  : 1 === a
                    ? e + "-ви"
                    : 2 === a
                      ? e + "-ри"
                      : 7 === a || 8 === a
                        ? e + "-ми"
                        : e + "-ти";
          },
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    88393: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("bm", {
          months:
            "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split(
              "_",
            ),
          monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split(
            "_",
          ),
          weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
          weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
          weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "MMMM [tile] D [san] YYYY",
            LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
            LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
          },
          calendar: {
            sameDay: "[Bi lɛrɛ] LT",
            nextDay: "[Sini lɛrɛ] LT",
            nextWeek: "dddd [don lɛrɛ] LT",
            lastDay: "[Kunu lɛrɛ] LT",
            lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s kɔnɔ",
            past: "a bɛ %s bɔ",
            s: "sanga dama dama",
            ss: "sekondi %d",
            m: "miniti kelen",
            mm: "miniti %d",
            h: "lɛrɛ kelen",
            hh: "lɛrɛ %d",
            d: "tile kelen",
            dd: "tile %d",
            M: "kalo kelen",
            MM: "kalo %d",
            y: "san kelen",
            yy: "san %d",
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    70643: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "১",
            2: "২",
            3: "৩",
            4: "৪",
            5: "৫",
            6: "৬",
            7: "৭",
            8: "৮",
            9: "৯",
            0: "০",
          },
          t = {
            "১": "1",
            "২": "2",
            "৩": "3",
            "৪": "4",
            "৫": "5",
            "৬": "6",
            "৭": "7",
            "৮": "8",
            "৯": "9",
            "০": "0",
          };
        e.defineLocale("bn-bd", {
          months:
            "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split(
              "_",
            ),
          monthsShort:
            "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split(
              "_",
            ),
          weekdays:
            "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split(
              "_",
            ),
          weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
          weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
          longDateFormat: {
            LT: "A h:mm সময়",
            LTS: "A h:mm:ss সময়",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm সময়",
            LLLL: "dddd, D MMMM YYYY, A h:mm সময়",
          },
          calendar: {
            sameDay: "[আজ] LT",
            nextDay: "[আগামীকাল] LT",
            nextWeek: "dddd, LT",
            lastDay: "[গতকাল] LT",
            lastWeek: "[গত] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s পরে",
            past: "%s আগে",
            s: "কয়েক সেকেন্ড",
            ss: "%d সেকেন্ড",
            m: "এক মিনিট",
            mm: "%d মিনিট",
            h: "এক ঘন্টা",
            hh: "%d ঘন্টা",
            d: "এক দিন",
            dd: "%d দিন",
            M: "এক মাস",
            MM: "%d মাস",
            y: "এক বছর",
            yy: "%d বছর",
          },
          preparse: function (e) {
            return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
              return t[e];
            });
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (e) {
              return a[e];
            });
          },
          meridiemParse: /রাত|ভোর|সকাল|দুপুর|বিকাল|সন্ধ্যা|রাত/,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              "রাত" === a
                ? e < 4
                  ? e
                  : e + 12
                : "ভোর" === a || "সকাল" === a
                  ? e
                  : "দুপুর" === a
                    ? e >= 3
                      ? e
                      : e + 12
                    : "বিকাল" === a || "সন্ধ্যা" === a
                      ? e + 12
                      : void 0
            );
          },
          meridiem: function (e, a, t) {
            return e < 4
              ? "রাত"
              : e < 6
                ? "ভোর"
                : e < 12
                  ? "সকাল"
                  : e < 15
                    ? "দুপুর"
                    : e < 18
                      ? "বিকাল"
                      : e < 20
                        ? "সন্ধ্যা"
                        : "রাত";
          },
          week: { dow: 0, doy: 6 },
        });
      })(t(37485));
    },
    92722: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "১",
            2: "২",
            3: "৩",
            4: "৪",
            5: "৫",
            6: "৬",
            7: "৭",
            8: "৮",
            9: "৯",
            0: "০",
          },
          t = {
            "১": "1",
            "২": "2",
            "৩": "3",
            "৪": "4",
            "৫": "5",
            "৬": "6",
            "৭": "7",
            "৮": "8",
            "৯": "9",
            "০": "0",
          };
        e.defineLocale("bn", {
          months:
            "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split(
              "_",
            ),
          monthsShort:
            "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split(
              "_",
            ),
          weekdays:
            "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split(
              "_",
            ),
          weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
          weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
          longDateFormat: {
            LT: "A h:mm সময়",
            LTS: "A h:mm:ss সময়",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm সময়",
            LLLL: "dddd, D MMMM YYYY, A h:mm সময়",
          },
          calendar: {
            sameDay: "[আজ] LT",
            nextDay: "[আগামীকাল] LT",
            nextWeek: "dddd, LT",
            lastDay: "[গতকাল] LT",
            lastWeek: "[গত] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s পরে",
            past: "%s আগে",
            s: "কয়েক সেকেন্ড",
            ss: "%d সেকেন্ড",
            m: "এক মিনিট",
            mm: "%d মিনিট",
            h: "এক ঘন্টা",
            hh: "%d ঘন্টা",
            d: "এক দিন",
            dd: "%d দিন",
            M: "এক মাস",
            MM: "%d মাস",
            y: "এক বছর",
            yy: "%d বছর",
          },
          preparse: function (e) {
            return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
              return t[e];
            });
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (e) {
              return a[e];
            });
          },
          meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              ("রাত" === a && e >= 4) ||
              ("দুপুর" === a && e < 5) ||
              "বিকাল" === a
                ? e + 12
                : e
            );
          },
          meridiem: function (e, a, t) {
            return e < 4
              ? "রাত"
              : e < 10
                ? "সকাল"
                : e < 17
                  ? "দুপুর"
                  : e < 20
                    ? "বিকাল"
                    : "রাত";
          },
          week: { dow: 0, doy: 6 },
        });
      })(t(37485));
    },
    85165: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "༡",
            2: "༢",
            3: "༣",
            4: "༤",
            5: "༥",
            6: "༦",
            7: "༧",
            8: "༨",
            9: "༩",
            0: "༠",
          },
          t = {
            "༡": "1",
            "༢": "2",
            "༣": "3",
            "༤": "4",
            "༥": "5",
            "༦": "6",
            "༧": "7",
            "༨": "8",
            "༩": "9",
            "༠": "0",
          };
        e.defineLocale("bo", {
          months:
            "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split(
              "_",
            ),
          monthsShort:
            "ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split(
              "_",
            ),
          monthsShortRegex: /^(ཟླ་\d{1,2})/,
          monthsParseExact: !0,
          weekdays:
            "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split(
              "_",
            ),
          weekdaysShort:
            "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
          weekdaysMin: "ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"),
          longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm",
          },
          calendar: {
            sameDay: "[དི་རིང] LT",
            nextDay: "[སང་ཉིན] LT",
            nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
            lastDay: "[ཁ་སང] LT",
            lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s ལ་",
            past: "%s སྔན་ལ",
            s: "ལམ་སང",
            ss: "%d སྐར་ཆ།",
            m: "སྐར་མ་གཅིག",
            mm: "%d སྐར་མ",
            h: "ཆུ་ཚོད་གཅིག",
            hh: "%d ཆུ་ཚོད",
            d: "ཉིན་གཅིག",
            dd: "%d ཉིན་",
            M: "ཟླ་བ་གཅིག",
            MM: "%d ཟླ་བ",
            y: "ལོ་གཅིག",
            yy: "%d ལོ",
          },
          preparse: function (e) {
            return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
              return t[e];
            });
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (e) {
              return a[e];
            });
          },
          meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              ("མཚན་མོ" === a && e >= 4) ||
              ("ཉིན་གུང" === a && e < 5) ||
              "དགོང་དག" === a
                ? e + 12
                : e
            );
          },
          meridiem: function (e, a, t) {
            return e < 4
              ? "མཚན་མོ"
              : e < 10
                ? "ཞོགས་ཀས"
                : e < 17
                  ? "ཉིན་གུང"
                  : e < 20
                    ? "དགོང་དག"
                    : "མཚན་མོ";
          },
          week: { dow: 0, doy: 6 },
        });
      })(t(37485));
    },
    96645: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t) {
          return e + " " + s({ mm: "munutenn", MM: "miz", dd: "devezh" }[t], e);
        }
        function t(e) {
          switch (n(e)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
              return e + " bloaz";
            default:
              return e + " vloaz";
          }
        }
        function n(e) {
          return e > 9 ? n(e % 10) : e;
        }
        function s(e, a) {
          return 2 === a ? r(e) : e;
        }
        function r(e) {
          var a = { m: "v", b: "v", d: "z" };
          return void 0 === a[e.charAt(0)]
            ? e
            : a[e.charAt(0)] + e.substring(1);
        }
        var i = [
            /^gen/i,
            /^c[ʼ\']hwe/i,
            /^meu/i,
            /^ebr/i,
            /^mae/i,
            /^(mez|eve)/i,
            /^gou/i,
            /^eos/i,
            /^gwe/i,
            /^her/i,
            /^du/i,
            /^ker/i,
          ],
          d =
            /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
          _ =
            /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
          o = /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
          u = [
            /^sul/i,
            /^lun/i,
            /^meurzh/i,
            /^merc[ʼ\']her/i,
            /^yaou/i,
            /^gwener/i,
            /^sadorn/i,
          ],
          m = [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
          l = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
        e.defineLocale("br", {
          months:
            "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split(
              "_",
            ),
          monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split(
            "_",
          ),
          weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
          weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
          weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
          weekdaysParse: l,
          fullWeekdaysParse: u,
          shortWeekdaysParse: m,
          minWeekdaysParse: l,
          monthsRegex: d,
          monthsShortRegex: d,
          monthsStrictRegex: _,
          monthsShortStrictRegex: o,
          monthsParse: i,
          longMonthsParse: i,
          shortMonthsParse: i,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [a viz] MMMM YYYY",
            LLL: "D [a viz] MMMM YYYY HH:mm",
            LLLL: "dddd, D [a viz] MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Hiziv da] LT",
            nextDay: "[Warcʼhoazh da] LT",
            nextWeek: "dddd [da] LT",
            lastDay: "[Decʼh da] LT",
            lastWeek: "dddd [paset da] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "a-benn %s",
            past: "%s ʼzo",
            s: "un nebeud segondennoù",
            ss: "%d eilenn",
            m: "ur vunutenn",
            mm: a,
            h: "un eur",
            hh: "%d eur",
            d: "un devezh",
            dd: a,
            M: "ur miz",
            MM: a,
            y: "ur bloaz",
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
          ordinal: function (e) {
            return e + (1 === e ? "añ" : "vet");
          },
          week: { dow: 1, doy: 4 },
          meridiemParse: /a.m.|g.m./,
          isPM: function (e) {
            return "g.m." === e;
          },
          meridiem: function (e, a, t) {
            return e < 12 ? "a.m." : "g.m.";
          },
        });
      })(t(37485));
    },
    15870: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t, n) {
          if ("m" === t)
            return a ? "jedna minuta" : n ? "jednu minutu" : "jedne minute";
        }
        function t(e, a, t) {
          var n = e + " ";
          switch (t) {
            case "ss":
              return (n +=
                1 === e
                  ? "sekunda"
                  : 2 === e || 3 === e || 4 === e
                    ? "sekunde"
                    : "sekundi");
            case "mm":
              return (n +=
                1 === e
                  ? "minuta"
                  : 2 === e || 3 === e || 4 === e
                    ? "minute"
                    : "minuta");
            case "h":
              return "jedan sat";
            case "hh":
              return (n +=
                1 === e
                  ? "sat"
                  : 2 === e || 3 === e || 4 === e
                    ? "sata"
                    : "sati");
            case "dd":
              return (n += 1 === e ? "dan" : "dana");
            case "MM":
              return (n +=
                1 === e
                  ? "mjesec"
                  : 2 === e || 3 === e || 4 === e
                    ? "mjeseca"
                    : "mjeseci");
            case "yy":
              return (n +=
                1 === e
                  ? "godina"
                  : 2 === e || 3 === e || 4 === e
                    ? "godine"
                    : "godina");
          }
        }
        e.defineLocale("bs", {
          months:
            "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split(
              "_",
            ),
          monthsShort:
            "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
              "_",
            ),
          weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[u] [nedjelju] [u] LT";
                case 3:
                  return "[u] [srijedu] [u] LT";
                case 6:
                  return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[u] dddd [u] LT";
              }
            },
            lastDay: "[jučer u] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                case 3:
                  return "[prošlu] dddd [u] LT";
                case 6:
                  return "[prošle] [subote] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[prošli] dddd [u] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            ss: t,
            m: a,
            mm: t,
            h: t,
            hh: t,
            d: "dan",
            dd: t,
            M: "mjesec",
            MM: t,
            y: "godinu",
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    3993: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ca", {
          months: {
            standalone:
              "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split(
                "_",
              ),
            format:
              "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split(
                "_",
              ),
            isFormat: /D[oD]?(\s)+MMMM/,
          },
          monthsShort:
            "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split(
              "_",
            ),
          weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
          weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [de] YYYY",
            ll: "D MMM YYYY",
            LLL: "D MMMM [de] YYYY [a les] H:mm",
            lll: "D MMM YYYY, H:mm",
            LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
            llll: "ddd D MMM YYYY, H:mm",
          },
          calendar: {
            sameDay: function () {
              return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            nextDay: function () {
              return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            nextWeek: function () {
              return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            lastDay: function () {
              return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            lastWeek: function () {
              return (
                "[el] dddd [passat a " +
                (1 !== this.hours() ? "les" : "la") +
                "] LT"
              );
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "d'aquí %s",
            past: "fa %s",
            s: "uns segons",
            ss: "%d segons",
            m: "un minut",
            mm: "%d minuts",
            h: "una hora",
            hh: "%d hores",
            d: "un dia",
            dd: "%d dies",
            M: "un mes",
            MM: "%d mesos",
            y: "un any",
            yy: "%d anys",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
          ordinal: function (e, a) {
            var t =
              1 === e
                ? "r"
                : 2 === e
                  ? "n"
                  : 3 === e
                    ? "r"
                    : 4 === e
                      ? "t"
                      : "è";
            return ("w" !== a && "W" !== a) || (t = "a"), e + t;
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    3627: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            standalone:
              "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split(
                "_",
              ),
            format:
              "ledna_února_března_dubna_května_června_července_srpna_září_října_listopadu_prosince".split(
                "_",
              ),
            isFormat: /DD?[o.]?(\[[^\[\]]*\]|\s)+MMMM/,
          },
          t = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
          n = [
            /^led/i,
            /^úno/i,
            /^bře/i,
            /^dub/i,
            /^kvě/i,
            /^(čvn|červen$|června)/i,
            /^(čvc|červenec|července)/i,
            /^srp/i,
            /^zář/i,
            /^říj/i,
            /^lis/i,
            /^pro/i,
          ],
          s =
            /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
        function r(e) {
          return e > 1 && e < 5 && 1 != ~~(e / 10);
        }
        function i(e, a, t, n) {
          var s = e + " ";
          switch (t) {
            case "s":
              return a || n ? "pár sekund" : "pár sekundami";
            case "ss":
              return a || n
                ? s + (r(e) ? "sekundy" : "sekund")
                : s + "sekundami";
            case "m":
              return a ? "minuta" : n ? "minutu" : "minutou";
            case "mm":
              return a || n ? s + (r(e) ? "minuty" : "minut") : s + "minutami";
            case "h":
              return a ? "hodina" : n ? "hodinu" : "hodinou";
            case "hh":
              return a || n ? s + (r(e) ? "hodiny" : "hodin") : s + "hodinami";
            case "d":
              return a || n ? "den" : "dnem";
            case "dd":
              return a || n ? s + (r(e) ? "dny" : "dní") : s + "dny";
            case "M":
              return a || n ? "měsíc" : "měsícem";
            case "MM":
              return a || n ? s + (r(e) ? "měsíce" : "měsíců") : s + "měsíci";
            case "y":
              return a || n ? "rok" : "rokem";
            case "yy":
              return a || n ? s + (r(e) ? "roky" : "let") : s + "lety";
          }
        }
        e.defineLocale("cs", {
          months: a,
          monthsShort: t,
          monthsRegex: s,
          monthsShortRegex: s,
          monthsStrictRegex:
            /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
          monthsShortStrictRegex:
            /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
          monthsParse: n,
          longMonthsParse: n,
          shortMonthsParse: n,
          weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split(
            "_",
          ),
          weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
          weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm",
            l: "D. M. YYYY",
          },
          calendar: {
            sameDay: "[dnes v] LT",
            nextDay: "[zítra v] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[v neděli v] LT";
                case 1:
                case 2:
                  return "[v] dddd [v] LT";
                case 3:
                  return "[ve středu v] LT";
                case 4:
                  return "[ve čtvrtek v] LT";
                case 5:
                  return "[v pátek v] LT";
                case 6:
                  return "[v sobotu v] LT";
              }
            },
            lastDay: "[včera v] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[minulou neděli v] LT";
                case 1:
                case 2:
                  return "[minulé] dddd [v] LT";
                case 3:
                  return "[minulou středu v] LT";
                case 4:
                case 5:
                  return "[minulý] dddd [v] LT";
                case 6:
                  return "[minulou sobotu v] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "před %s",
            s: i,
            ss: i,
            m: i,
            mm: i,
            h: i,
            hh: i,
            d: i,
            dd: i,
            M: i,
            MM: i,
            y: i,
            yy: i,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    58957: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("cv", {
          months:
            "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split(
              "_",
            ),
          monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split(
            "_",
          ),
          weekdays:
            "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split(
              "_",
            ),
          weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
          weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
            LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
            LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
          },
          calendar: {
            sameDay: "[Паян] LT [сехетре]",
            nextDay: "[Ыран] LT [сехетре]",
            lastDay: "[Ӗнер] LT [сехетре]",
            nextWeek: "[Ҫитес] dddd LT [сехетре]",
            lastWeek: "[Иртнӗ] dddd LT [сехетре]",
            sameElse: "L",
          },
          relativeTime: {
            future: function (e) {
              return (
                e +
                (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
              );
            },
            past: "%s каялла",
            s: "пӗр-ик ҫеккунт",
            ss: "%d ҫеккунт",
            m: "пӗр минут",
            mm: "%d минут",
            h: "пӗр сехет",
            hh: "%d сехет",
            d: "пӗр кун",
            dd: "%d кун",
            M: "пӗр уйӑх",
            MM: "%d уйӑх",
            y: "пӗр ҫул",
            yy: "%d ҫул",
          },
          dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
          ordinal: "%d-мӗш",
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    55770: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("cy", {
          months:
            "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split(
              "_",
            ),
          monthsShort:
            "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
          weekdays:
            "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split(
              "_",
            ),
          weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
          weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Heddiw am] LT",
            nextDay: "[Yfory am] LT",
            nextWeek: "dddd [am] LT",
            lastDay: "[Ddoe am] LT",
            lastWeek: "dddd [diwethaf am] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "mewn %s",
            past: "%s yn ôl",
            s: "ychydig eiliadau",
            ss: "%d eiliad",
            m: "munud",
            mm: "%d munud",
            h: "awr",
            hh: "%d awr",
            d: "diwrnod",
            dd: "%d diwrnod",
            M: "mis",
            MM: "%d mis",
            y: "blwyddyn",
            yy: "%d flynedd",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
          ordinal: function (e) {
            var a = "";
            return (
              e > 20
                ? (a =
                    40 === e || 50 === e || 60 === e || 80 === e || 100 === e
                      ? "fed"
                      : "ain")
                : e > 0 &&
                  (a = [
                    "",
                    "af",
                    "il",
                    "ydd",
                    "ydd",
                    "ed",
                    "ed",
                    "ed",
                    "fed",
                    "fed",
                    "fed",
                    "eg",
                    "fed",
                    "eg",
                    "eg",
                    "fed",
                    "eg",
                    "eg",
                    "fed",
                    "eg",
                    "fed",
                  ][e]),
              e + a
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    54649: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("da", {
          months:
            "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split(
              "_",
            ),
          monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split(
            "_",
          ),
          weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split(
            "_",
          ),
          weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
          weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm",
          },
          calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "på dddd [kl.] LT",
            lastDay: "[i går kl.] LT",
            lastWeek: "[i] dddd[s kl.] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "få sekunder",
            ss: "%d sekunder",
            m: "et minut",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dage",
            M: "en måned",
            MM: "%d måneder",
            y: "et år",
            yy: "%d år",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    28709: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t, n) {
          var s = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [e + " Tage", e + " Tagen"],
            w: ["eine Woche", "einer Woche"],
            M: ["ein Monat", "einem Monat"],
            MM: [e + " Monate", e + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [e + " Jahre", e + " Jahren"],
          };
          return a ? s[t][0] : s[t][1];
        }
        e.defineLocale("de-at", {
          months:
            "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
              "_",
            ),
          monthsShort:
            "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
              "_",
            ),
          weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
          weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]",
          },
          relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: a,
            mm: "%d Minuten",
            h: a,
            hh: "%d Stunden",
            d: a,
            dd: a,
            w: a,
            ww: "%d Wochen",
            M: a,
            MM: a,
            y: a,
            yy: a,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    21320: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t, n) {
          var s = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [e + " Tage", e + " Tagen"],
            w: ["eine Woche", "einer Woche"],
            M: ["ein Monat", "einem Monat"],
            MM: [e + " Monate", e + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [e + " Jahre", e + " Jahren"],
          };
          return a ? s[t][0] : s[t][1];
        }
        e.defineLocale("de-ch", {
          months:
            "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
              "_",
            ),
          monthsShort:
            "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
              "_",
            ),
          weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]",
          },
          relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: a,
            mm: "%d Minuten",
            h: a,
            hh: "%d Stunden",
            d: a,
            dd: a,
            w: a,
            ww: "%d Wochen",
            M: a,
            MM: a,
            y: a,
            yy: a,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    89084: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t, n) {
          var s = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [e + " Tage", e + " Tagen"],
            w: ["eine Woche", "einer Woche"],
            M: ["ein Monat", "einem Monat"],
            MM: [e + " Monate", e + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [e + " Jahre", e + " Jahren"],
          };
          return a ? s[t][0] : s[t][1];
        }
        e.defineLocale("de", {
          months:
            "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
              "_",
            ),
          monthsShort:
            "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
              "_",
            ),
          weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
          weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]",
          },
          relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: a,
            mm: "%d Minuten",
            h: a,
            hh: "%d Stunden",
            d: a,
            dd: a,
            w: a,
            ww: "%d Wochen",
            M: a,
            MM: a,
            y: a,
            yy: a,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    63575: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = [
            "ޖެނުއަރީ",
            "ފެބްރުއަރީ",
            "މާރިޗު",
            "އޭޕްރީލު",
            "މޭ",
            "ޖޫން",
            "ޖުލައި",
            "އޯގަސްޓު",
            "ސެޕްޓެމްބަރު",
            "އޮކްޓޯބަރު",
            "ނޮވެމްބަރު",
            "ޑިސެމްބަރު",
          ],
          t = [
            "އާދިއްތަ",
            "ހޯމަ",
            "އަންގާރަ",
            "ބުދަ",
            "ބުރާސްފަތި",
            "ހުކުރު",
            "ހޮނިހިރު",
          ];
        e.defineLocale("dv", {
          months: a,
          monthsShort: a,
          weekdays: t,
          weekdaysShort: t,
          weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/M/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          meridiemParse: /މކ|މފ/,
          isPM: function (e) {
            return "މފ" === e;
          },
          meridiem: function (e, a, t) {
            return e < 12 ? "މކ" : "މފ";
          },
          calendar: {
            sameDay: "[މިއަދު] LT",
            nextDay: "[މާދަމާ] LT",
            nextWeek: "dddd LT",
            lastDay: "[އިއްޔެ] LT",
            lastWeek: "[ފާއިތުވި] dddd LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "ތެރޭގައި %s",
            past: "ކުރިން %s",
            s: "ސިކުންތުކޮޅެއް",
            ss: "d% ސިކުންތު",
            m: "މިނިޓެއް",
            mm: "މިނިޓު %d",
            h: "ގަޑިއިރެއް",
            hh: "ގަޑިއިރު %d",
            d: "ދުވަހެއް",
            dd: "ދުވަސް %d",
            M: "މަހެއް",
            MM: "މަސް %d",
            y: "އަހަރެއް",
            yy: "އަހަރު %d",
          },
          preparse: function (e) {
            return e.replace(/،/g, ",");
          },
          postformat: function (e) {
            return e.replace(/,/g, "،");
          },
          week: { dow: 7, doy: 12 },
        });
      })(t(37485));
    },
    56395: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        function a(e) {
          return (
            ("undefined" != typeof Function && e instanceof Function) ||
            "[object Function]" === Object.prototype.toString.call(e)
          );
        }
        e.defineLocale("el", {
          monthsNominativeEl:
            "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split(
              "_",
            ),
          monthsGenitiveEl:
            "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split(
              "_",
            ),
          months: function (e, a) {
            return e
              ? "string" == typeof a &&
                /D/.test(a.substring(0, a.indexOf("MMMM")))
                ? this._monthsGenitiveEl[e.month()]
                : this._monthsNominativeEl[e.month()]
              : this._monthsNominativeEl;
          },
          monthsShort:
            "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
          weekdays:
            "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
          weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
          weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
          meridiem: function (e, a, t) {
            return e > 11 ? (t ? "μμ" : "ΜΜ") : t ? "πμ" : "ΠΜ";
          },
          isPM: function (e) {
            return "μ" === (e + "").toLowerCase()[0];
          },
          meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A",
          },
          calendarEl: {
            sameDay: "[Σήμερα {}] LT",
            nextDay: "[Αύριο {}] LT",
            nextWeek: "dddd [{}] LT",
            lastDay: "[Χθες {}] LT",
            lastWeek: function () {
              return 6 === this.day()
                ? "[το προηγούμενο] dddd [{}] LT"
                : "[την προηγούμενη] dddd [{}] LT";
            },
            sameElse: "L",
          },
          calendar: function (e, t) {
            var n = this._calendarEl[e],
              s = t && t.hours();
            return (
              a(n) && (n = n.apply(t)),
              n.replace("{}", s % 12 == 1 ? "στη" : "στις")
            );
          },
          relativeTime: {
            future: "σε %s",
            past: "%s πριν",
            s: "λίγα δευτερόλεπτα",
            ss: "%d δευτερόλεπτα",
            m: "ένα λεπτό",
            mm: "%d λεπτά",
            h: "μία ώρα",
            hh: "%d ώρες",
            d: "μία μέρα",
            dd: "%d μέρες",
            M: "ένας μήνας",
            MM: "%d μήνες",
            y: "ένας χρόνος",
            yy: "%d χρόνια",
          },
          dayOfMonthOrdinalParse: /\d{1,2}η/,
          ordinal: "%dη",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    93826: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-au", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_",
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_",
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (e) {
            var a = e % 10;
            return (
              e +
              (1 == ~~((e % 100) / 10)
                ? "th"
                : 1 === a
                  ? "st"
                  : 2 === a
                    ? "nd"
                    : 3 === a
                      ? "rd"
                      : "th")
            );
          },
          week: { dow: 0, doy: 4 },
        });
      })(t(37485));
    },
    13769: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-ca", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_",
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_",
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "YYYY-MM-DD",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (e) {
            var a = e % 10;
            return (
              e +
              (1 == ~~((e % 100) / 10)
                ? "th"
                : 1 === a
                  ? "st"
                  : 2 === a
                    ? "nd"
                    : 3 === a
                      ? "rd"
                      : "th")
            );
          },
        });
      })(t(37485));
    },
    24155: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-gb", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_",
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_",
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (e) {
            var a = e % 10;
            return (
              e +
              (1 == ~~((e % 100) / 10)
                ? "th"
                : 1 === a
                  ? "st"
                  : 2 === a
                    ? "nd"
                    : 3 === a
                      ? "rd"
                      : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    1518: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-ie", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_",
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_",
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (e) {
            var a = e % 10;
            return (
              e +
              (1 == ~~((e % 100) / 10)
                ? "th"
                : 1 === a
                  ? "st"
                  : 2 === a
                    ? "nd"
                    : 3 === a
                      ? "rd"
                      : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    24043: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-il", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_",
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_",
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (e) {
            var a = e % 10;
            return (
              e +
              (1 == ~~((e % 100) / 10)
                ? "th"
                : 1 === a
                  ? "st"
                  : 2 === a
                    ? "nd"
                    : 3 === a
                      ? "rd"
                      : "th")
            );
          },
        });
      })(t(37485));
    },
    18404: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-in", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_",
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_",
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (e) {
            var a = e % 10;
            return (
              e +
              (1 == ~~((e % 100) / 10)
                ? "th"
                : 1 === a
                  ? "st"
                  : 2 === a
                    ? "nd"
                    : 3 === a
                      ? "rd"
                      : "th")
            );
          },
          week: { dow: 0, doy: 6 },
        });
      })(t(37485));
    },
    79220: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-nz", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_",
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_",
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (e) {
            var a = e % 10;
            return (
              e +
              (1 == ~~((e % 100) / 10)
                ? "th"
                : 1 === a
                  ? "st"
                  : 2 === a
                    ? "nd"
                    : 3 === a
                      ? "rd"
                      : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    29133: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("en-sg", {
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
            "_",
          ),
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_",
            ),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (e) {
            var a = e % 10;
            return (
              e +
              (1 == ~~((e % 100) / 10)
                ? "th"
                : 1 === a
                  ? "st"
                  : 2 === a
                    ? "nd"
                    : 3 === a
                      ? "rd"
                      : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    48648: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("eo", {
          months:
            "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split(
              "_",
            ),
          monthsShort:
            "jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec".split("_"),
          weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split(
            "_",
          ),
          weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
          weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "[la] D[-an de] MMMM, YYYY",
            LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
            LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
            llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm",
          },
          meridiemParse: /[ap]\.t\.m/i,
          isPM: function (e) {
            return "p" === e.charAt(0).toLowerCase();
          },
          meridiem: function (e, a, t) {
            return e > 11 ? (t ? "p.t.m." : "P.T.M.") : t ? "a.t.m." : "A.T.M.";
          },
          calendar: {
            sameDay: "[Hodiaŭ je] LT",
            nextDay: "[Morgaŭ je] LT",
            nextWeek: "dddd[n je] LT",
            lastDay: "[Hieraŭ je] LT",
            lastWeek: "[pasintan] dddd[n je] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "post %s",
            past: "antaŭ %s",
            s: "kelkaj sekundoj",
            ss: "%d sekundoj",
            m: "unu minuto",
            mm: "%d minutoj",
            h: "unu horo",
            hh: "%d horoj",
            d: "unu tago",
            dd: "%d tagoj",
            M: "unu monato",
            MM: "%d monatoj",
            y: "unu jaro",
            yy: "%d jaroj",
          },
          dayOfMonthOrdinalParse: /\d{1,2}a/,
          ordinal: "%da",
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    16734: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a =
            "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
              "_",
            ),
          t = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          n = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i,
          ],
          s =
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-do", {
          months:
            "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
              "_",
            ),
          monthsShort: function (e, n) {
            return e ? (/-MMM-/.test(n) ? t[e.month()] : a[e.month()]) : a;
          },
          monthsRegex: s,
          monthsShortRegex: s,
          monthsStrictRegex:
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex:
            /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: n,
          longMonthsParse: n,
          shortMonthsParse: n,
          weekdays:
            "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
          weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
          weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY h:mm A",
            LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A",
          },
          calendar: {
            sameDay: function () {
              return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextDay: function () {
              return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextWeek: function () {
              return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastDay: function () {
              return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastWeek: function () {
              return (
                "[el] dddd [pasado a la" +
                (1 !== this.hours() ? "s" : "") +
                "] LT"
              );
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            w: "una semana",
            ww: "%d semanas",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años",
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    31910: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a =
            "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
              "_",
            ),
          t = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          n = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i,
          ],
          s =
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-mx", {
          months:
            "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
              "_",
            ),
          monthsShort: function (e, n) {
            return e ? (/-MMM-/.test(n) ? t[e.month()] : a[e.month()]) : a;
          },
          monthsRegex: s,
          monthsShortRegex: s,
          monthsStrictRegex:
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex:
            /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: n,
          longMonthsParse: n,
          shortMonthsParse: n,
          weekdays:
            "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
          weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
          weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
          },
          calendar: {
            sameDay: function () {
              return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextDay: function () {
              return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextWeek: function () {
              return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastDay: function () {
              return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastWeek: function () {
              return (
                "[el] dddd [pasado a la" +
                (1 !== this.hours() ? "s" : "") +
                "] LT"
              );
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            w: "una semana",
            ww: "%d semanas",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años",
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 0, doy: 4 },
          invalidDate: "Fecha inválida",
        });
      })(t(37485));
    },
    67093: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a =
            "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
              "_",
            ),
          t = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          n = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i,
          ],
          s =
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-us", {
          months:
            "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
              "_",
            ),
          monthsShort: function (e, n) {
            return e ? (/-MMM-/.test(n) ? t[e.month()] : a[e.month()]) : a;
          },
          monthsRegex: s,
          monthsShortRegex: s,
          monthsStrictRegex:
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex:
            /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: n,
          longMonthsParse: n,
          shortMonthsParse: n,
          weekdays:
            "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
          weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
          weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "MM/DD/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY h:mm A",
            LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A",
          },
          calendar: {
            sameDay: function () {
              return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextDay: function () {
              return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextWeek: function () {
              return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastDay: function () {
              return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastWeek: function () {
              return (
                "[el] dddd [pasado a la" +
                (1 !== this.hours() ? "s" : "") +
                "] LT"
              );
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            w: "una semana",
            ww: "%d semanas",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años",
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 0, doy: 6 },
        });
      })(t(37485));
    },
    68465: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a =
            "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
              "_",
            ),
          t = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
          n = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i,
          ],
          s =
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es", {
          months:
            "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
              "_",
            ),
          monthsShort: function (e, n) {
            return e ? (/-MMM-/.test(n) ? t[e.month()] : a[e.month()]) : a;
          },
          monthsRegex: s,
          monthsShortRegex: s,
          monthsStrictRegex:
            /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex:
            /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: n,
          longMonthsParse: n,
          shortMonthsParse: n,
          weekdays:
            "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
          weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
          weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
          },
          calendar: {
            sameDay: function () {
              return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextDay: function () {
              return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextWeek: function () {
              return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastDay: function () {
              return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastWeek: function () {
              return (
                "[el] dddd [pasado a la" +
                (1 !== this.hours() ? "s" : "") +
                "] LT"
              );
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            w: "una semana",
            ww: "%d semanas",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años",
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 },
          invalidDate: "Fecha inválida",
        });
      })(t(37485));
    },
    53742: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t, n) {
          var s = {
            s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
            ss: [e + "sekundi", e + "sekundit"],
            m: ["ühe minuti", "üks minut"],
            mm: [e + " minuti", e + " minutit"],
            h: ["ühe tunni", "tund aega", "üks tund"],
            hh: [e + " tunni", e + " tundi"],
            d: ["ühe päeva", "üks päev"],
            M: ["kuu aja", "kuu aega", "üks kuu"],
            MM: [e + " kuu", e + " kuud"],
            y: ["ühe aasta", "aasta", "üks aasta"],
            yy: [e + " aasta", e + " aastat"],
          };
          return a ? (s[t][2] ? s[t][2] : s[t][1]) : n ? s[t][0] : s[t][1];
        }
        e.defineLocale("et", {
          months:
            "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split(
              "_",
            ),
          monthsShort:
            "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split(
              "_",
            ),
          weekdays:
            "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split(
              "_",
            ),
          weekdaysShort: "P_E_T_K_N_R_L".split("_"),
          weekdaysMin: "P_E_T_K_N_R_L".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[Täna,] LT",
            nextDay: "[Homme,] LT",
            nextWeek: "[Järgmine] dddd LT",
            lastDay: "[Eile,] LT",
            lastWeek: "[Eelmine] dddd LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s pärast",
            past: "%s tagasi",
            s: a,
            ss: a,
            m: a,
            mm: a,
            h: a,
            hh: a,
            d: a,
            dd: "%d päeva",
            M: a,
            MM: a,
            y: a,
            yy: a,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    41088: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("eu", {
          months:
            "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split(
              "_",
            ),
          monthsShort:
            "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split(
              "_",
            ),
          weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
          weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY[ko] MMMM[ren] D[a]",
            LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
            LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
            l: "YYYY-M-D",
            ll: "YYYY[ko] MMM D[a]",
            lll: "YYYY[ko] MMM D[a] HH:mm",
            llll: "ddd, YYYY[ko] MMM D[a] HH:mm",
          },
          calendar: {
            sameDay: "[gaur] LT[etan]",
            nextDay: "[bihar] LT[etan]",
            nextWeek: "dddd LT[etan]",
            lastDay: "[atzo] LT[etan]",
            lastWeek: "[aurreko] dddd LT[etan]",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s barru",
            past: "duela %s",
            s: "segundo batzuk",
            ss: "%d segundo",
            m: "minutu bat",
            mm: "%d minutu",
            h: "ordu bat",
            hh: "%d ordu",
            d: "egun bat",
            dd: "%d egun",
            M: "hilabete bat",
            MM: "%d hilabete",
            y: "urte bat",
            yy: "%d urte",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    13554: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "۱",
            2: "۲",
            3: "۳",
            4: "۴",
            5: "۵",
            6: "۶",
            7: "۷",
            8: "۸",
            9: "۹",
            0: "۰",
          },
          t = {
            "۱": "1",
            "۲": "2",
            "۳": "3",
            "۴": "4",
            "۵": "5",
            "۶": "6",
            "۷": "7",
            "۸": "8",
            "۹": "9",
            "۰": "0",
          };
        e.defineLocale("fa", {
          months:
            "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
              "_",
            ),
          monthsShort:
            "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
              "_",
            ),
          weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split(
            "_",
          ),
          weekdaysShort:
            "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
          weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          meridiemParse: /قبل از ظهر|بعد از ظهر/,
          isPM: function (e) {
            return /بعد از ظهر/.test(e);
          },
          meridiem: function (e, a, t) {
            return e < 12 ? "قبل از ظهر" : "بعد از ظهر";
          },
          calendar: {
            sameDay: "[امروز ساعت] LT",
            nextDay: "[فردا ساعت] LT",
            nextWeek: "dddd [ساعت] LT",
            lastDay: "[دیروز ساعت] LT",
            lastWeek: "dddd [پیش] [ساعت] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "در %s",
            past: "%s پیش",
            s: "چند ثانیه",
            ss: "%d ثانیه",
            m: "یک دقیقه",
            mm: "%d دقیقه",
            h: "یک ساعت",
            hh: "%d ساعت",
            d: "یک روز",
            dd: "%d روز",
            M: "یک ماه",
            MM: "%d ماه",
            y: "یک سال",
            yy: "%d سال",
          },
          preparse: function (e) {
            return e
              .replace(/[۰-۹]/g, function (e) {
                return t[e];
              })
              .replace(/،/g, ",");
          },
          postformat: function (e) {
            return e
              .replace(/\d/g, function (e) {
                return a[e];
              })
              .replace(/,/g, "،");
          },
          dayOfMonthOrdinalParse: /\d{1,2}م/,
          ordinal: "%dم",
          week: { dow: 6, doy: 12 },
        });
      })(t(37485));
    },
    3996: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a =
            "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(
              " ",
            ),
          t = [
            "nolla",
            "yhden",
            "kahden",
            "kolmen",
            "neljän",
            "viiden",
            "kuuden",
            a[7],
            a[8],
            a[9],
          ];
        function n(e, a, t, n) {
          var r = "";
          switch (t) {
            case "s":
              return n ? "muutaman sekunnin" : "muutama sekunti";
            case "ss":
              r = n ? "sekunnin" : "sekuntia";
              break;
            case "m":
              return n ? "minuutin" : "minuutti";
            case "mm":
              r = n ? "minuutin" : "minuuttia";
              break;
            case "h":
              return n ? "tunnin" : "tunti";
            case "hh":
              r = n ? "tunnin" : "tuntia";
              break;
            case "d":
              return n ? "päivän" : "päivä";
            case "dd":
              r = n ? "päivän" : "päivää";
              break;
            case "M":
              return n ? "kuukauden" : "kuukausi";
            case "MM":
              r = n ? "kuukauden" : "kuukautta";
              break;
            case "y":
              return n ? "vuoden" : "vuosi";
            case "yy":
              r = n ? "vuoden" : "vuotta";
          }
          return (r = s(e, n) + " " + r);
        }
        function s(e, n) {
          return e < 10 ? (n ? t[e] : a[e]) : e;
        }
        e.defineLocale("fi", {
          months:
            "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split(
              "_",
            ),
          monthsShort:
            "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split(
              "_",
            ),
          weekdays:
            "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split(
              "_",
            ),
          weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
          weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "Do MMMM[ta] YYYY",
            LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
            LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
            l: "D.M.YYYY",
            ll: "Do MMM YYYY",
            lll: "Do MMM YYYY, [klo] HH.mm",
            llll: "ddd, Do MMM YYYY, [klo] HH.mm",
          },
          calendar: {
            sameDay: "[tänään] [klo] LT",
            nextDay: "[huomenna] [klo] LT",
            nextWeek: "dddd [klo] LT",
            lastDay: "[eilen] [klo] LT",
            lastWeek: "[viime] dddd[na] [klo] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s päästä",
            past: "%s sitten",
            s: n,
            ss: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: n,
            dd: n,
            M: n,
            MM: n,
            y: n,
            yy: n,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    20368: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("fil", {
          months:
            "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split(
              "_",
            ),
          monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split(
            "_",
          ),
          weekdays:
            "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
          weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
          weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "MM/D/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY HH:mm",
            LLLL: "dddd, MMMM DD, YYYY HH:mm",
          },
          calendar: {
            sameDay: "LT [ngayong araw]",
            nextDay: "[Bukas ng] LT",
            nextWeek: "LT [sa susunod na] dddd",
            lastDay: "LT [kahapon]",
            lastWeek: "LT [noong nakaraang] dddd",
            sameElse: "L",
          },
          relativeTime: {
            future: "sa loob ng %s",
            past: "%s ang nakalipas",
            s: "ilang segundo",
            ss: "%d segundo",
            m: "isang minuto",
            mm: "%d minuto",
            h: "isang oras",
            hh: "%d oras",
            d: "isang araw",
            dd: "%d araw",
            M: "isang buwan",
            MM: "%d buwan",
            y: "isang taon",
            yy: "%d taon",
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: function (e) {
            return e;
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    36132: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("fo", {
          months:
            "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split(
              "_",
            ),
          monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split(
            "_",
          ),
          weekdays:
            "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split(
              "_",
            ),
          weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
          weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D. MMMM, YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Í dag kl.] LT",
            nextDay: "[Í morgin kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[Í gjár kl.] LT",
            lastWeek: "[síðstu] dddd [kl] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "um %s",
            past: "%s síðani",
            s: "fá sekund",
            ss: "%d sekundir",
            m: "ein minuttur",
            mm: "%d minuttir",
            h: "ein tími",
            hh: "%d tímar",
            d: "ein dagur",
            dd: "%d dagar",
            M: "ein mánaður",
            MM: "%d mánaðir",
            y: "eitt ár",
            yy: "%d ár",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    31467: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("fr-ca", {
          months:
            "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
              "_",
            ),
          monthsShort:
            "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
            "_",
          ),
          weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
          weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Aujourd’hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
          ordinal: function (e, a) {
            switch (a) {
              default:
              case "M":
              case "Q":
              case "D":
              case "DDD":
              case "d":
                return e + (1 === e ? "er" : "e");
              case "w":
              case "W":
                return e + (1 === e ? "re" : "e");
            }
          },
        });
      })(t(37485));
    },
    98279: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("fr-ch", {
          months:
            "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
              "_",
            ),
          monthsShort:
            "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
            "_",
          ),
          weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
          weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Aujourd’hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
          ordinal: function (e, a) {
            switch (a) {
              default:
              case "M":
              case "Q":
              case "D":
              case "DDD":
              case "d":
                return e + (1 === e ? "er" : "e");
              case "w":
              case "W":
                return e + (1 === e ? "re" : "e");
            }
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    71265: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a =
            /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
          t =
            /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,
          n =
            /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
          s = [
            /^janv/i,
            /^févr/i,
            /^mars/i,
            /^avr/i,
            /^mai/i,
            /^juin/i,
            /^juil/i,
            /^août/i,
            /^sept/i,
            /^oct/i,
            /^nov/i,
            /^déc/i,
          ];
        e.defineLocale("fr", {
          months:
            "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
              "_",
            ),
          monthsShort:
            "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
              "_",
            ),
          monthsRegex: n,
          monthsShortRegex: n,
          monthsStrictRegex: a,
          monthsShortStrictRegex: t,
          monthsParse: s,
          longMonthsParse: s,
          shortMonthsParse: s,
          weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
            "_",
          ),
          weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
          weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Aujourd’hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            w: "une semaine",
            ww: "%d semaines",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
          ordinal: function (e, a) {
            switch (a) {
              case "D":
                return e + (1 === e ? "er" : "");
              default:
              case "M":
              case "Q":
              case "DDD":
              case "d":
                return e + (1 === e ? "er" : "e");
              case "w":
              case "W":
                return e + (1 === e ? "re" : "e");
            }
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    88841: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a =
            "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split(
              "_",
            ),
          t = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        e.defineLocale("fy", {
          months:
            "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split(
              "_",
            ),
          monthsShort: function (e, n) {
            return e ? (/-MMM-/.test(n) ? t[e.month()] : a[e.month()]) : a;
          },
          monthsParseExact: !0,
          weekdays:
            "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
          weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
          weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[hjoed om] LT",
            nextDay: "[moarn om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[juster om] LT",
            lastWeek: "[ôfrûne] dddd [om] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "oer %s",
            past: "%s lyn",
            s: "in pear sekonden",
            ss: "%d sekonden",
            m: "ien minút",
            mm: "%d minuten",
            h: "ien oere",
            hh: "%d oeren",
            d: "ien dei",
            dd: "%d dagen",
            M: "ien moanne",
            MM: "%d moannen",
            y: "ien jier",
            yy: "%d jierren",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function (e) {
            return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    65254: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = [
            "Eanáir",
            "Feabhra",
            "Márta",
            "Aibreán",
            "Bealtaine",
            "Meitheamh",
            "Iúil",
            "Lúnasa",
            "Meán Fómhair",
            "Deireadh Fómhair",
            "Samhain",
            "Nollaig",
          ],
          t = [
            "Ean",
            "Feabh",
            "Márt",
            "Aib",
            "Beal",
            "Meith",
            "Iúil",
            "Lún",
            "M.F.",
            "D.F.",
            "Samh",
            "Noll",
          ],
          n = [
            "Dé Domhnaigh",
            "Dé Luain",
            "Dé Máirt",
            "Dé Céadaoin",
            "Déardaoin",
            "Dé hAoine",
            "Dé Sathairn",
          ],
          s = ["Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"],
          r = ["Do", "Lu", "Má", "Cé", "Dé", "A", "Sa"];
        e.defineLocale("ga", {
          months: a,
          monthsShort: t,
          monthsParseExact: !0,
          weekdays: n,
          weekdaysShort: s,
          weekdaysMin: r,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Inniu ag] LT",
            nextDay: "[Amárach ag] LT",
            nextWeek: "dddd [ag] LT",
            lastDay: "[Inné ag] LT",
            lastWeek: "dddd [seo caite] [ag] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "i %s",
            past: "%s ó shin",
            s: "cúpla soicind",
            ss: "%d soicind",
            m: "nóiméad",
            mm: "%d nóiméad",
            h: "uair an chloig",
            hh: "%d uair an chloig",
            d: "lá",
            dd: "%d lá",
            M: "mí",
            MM: "%d míonna",
            y: "bliain",
            yy: "%d bliain",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
          ordinal: function (e) {
            return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh");
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    72520: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = [
            "Am Faoilleach",
            "An Gearran",
            "Am Màrt",
            "An Giblean",
            "An Cèitean",
            "An t-Ògmhios",
            "An t-Iuchar",
            "An Lùnastal",
            "An t-Sultain",
            "An Dàmhair",
            "An t-Samhain",
            "An Dùbhlachd",
          ],
          t = [
            "Faoi",
            "Gear",
            "Màrt",
            "Gibl",
            "Cèit",
            "Ògmh",
            "Iuch",
            "Lùn",
            "Sult",
            "Dàmh",
            "Samh",
            "Dùbh",
          ],
          n = [
            "Didòmhnaich",
            "Diluain",
            "Dimàirt",
            "Diciadain",
            "Diardaoin",
            "Dihaoine",
            "Disathairne",
          ],
          s = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
          r = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];
        e.defineLocale("gd", {
          months: a,
          monthsShort: t,
          monthsParseExact: !0,
          weekdays: n,
          weekdaysShort: s,
          weekdaysMin: r,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[An-diugh aig] LT",
            nextDay: "[A-màireach aig] LT",
            nextWeek: "dddd [aig] LT",
            lastDay: "[An-dè aig] LT",
            lastWeek: "dddd [seo chaidh] [aig] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "ann an %s",
            past: "bho chionn %s",
            s: "beagan diogan",
            ss: "%d diogan",
            m: "mionaid",
            mm: "%d mionaidean",
            h: "uair",
            hh: "%d uairean",
            d: "latha",
            dd: "%d latha",
            M: "mìos",
            MM: "%d mìosan",
            y: "bliadhna",
            yy: "%d bliadhna",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
          ordinal: function (e) {
            return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh");
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    94898: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("gl", {
          months:
            "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split(
              "_",
            ),
          monthsShort:
            "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split(
            "_",
          ),
          weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
          weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
          },
          calendar: {
            sameDay: function () {
              return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT";
            },
            nextDay: function () {
              return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT";
            },
            nextWeek: function () {
              return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT";
            },
            lastDay: function () {
              return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT";
            },
            lastWeek: function () {
              return (
                "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
              );
            },
            sameElse: "L",
          },
          relativeTime: {
            future: function (e) {
              return 0 === e.indexOf("un") ? "n" + e : "en " + e;
            },
            past: "hai %s",
            s: "uns segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "unha hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un ano",
            yy: "%d anos",
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    35171: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t, n) {
          var s = {
            s: ["थोडया सॅकंडांनी", "थोडे सॅकंड"],
            ss: [e + " सॅकंडांनी", e + " सॅकंड"],
            m: ["एका मिणटान", "एक मिनूट"],
            mm: [e + " मिणटांनी", e + " मिणटां"],
            h: ["एका वरान", "एक वर"],
            hh: [e + " वरांनी", e + " वरां"],
            d: ["एका दिसान", "एक दीस"],
            dd: [e + " दिसांनी", e + " दीस"],
            M: ["एका म्हयन्यान", "एक म्हयनो"],
            MM: [e + " म्हयन्यानी", e + " म्हयने"],
            y: ["एका वर्सान", "एक वर्स"],
            yy: [e + " वर्सांनी", e + " वर्सां"],
          };
          return n ? s[t][0] : s[t][1];
        }
        e.defineLocale("gom-deva", {
          months: {
            standalone:
              "जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split(
                "_",
              ),
            format:
              "जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split(
                "_",
              ),
            isFormat: /MMMM(\s)+D[oD]?/,
          },
          monthsShort:
            "जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split(
            "_",
          ),
          weekdaysShort: "आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split("_"),
          weekdaysMin: "आ_सो_मं_बु_ब्रे_सु_शे".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "A h:mm [वाजतां]",
            LTS: "A h:mm:ss [वाजतां]",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY A h:mm [वाजतां]",
            LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]",
            llll: "ddd, D MMM YYYY, A h:mm [वाजतां]",
          },
          calendar: {
            sameDay: "[आयज] LT",
            nextDay: "[फाल्यां] LT",
            nextWeek: "[फुडलो] dddd[,] LT",
            lastDay: "[काल] LT",
            lastWeek: "[फाटलो] dddd[,] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s",
            past: "%s आदीं",
            s: a,
            ss: a,
            m: a,
            mm: a,
            h: a,
            hh: a,
            d: a,
            dd: a,
            M: a,
            MM: a,
            y: a,
            yy: a,
          },
          dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
          ordinal: function (e, a) {
            return "D" === a ? e + "वेर" : e;
          },
          week: { dow: 0, doy: 3 },
          meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              "राती" === a
                ? e < 4
                  ? e
                  : e + 12
                : "सकाळीं" === a
                  ? e
                  : "दनपारां" === a
                    ? e > 12
                      ? e
                      : e + 12
                    : "सांजे" === a
                      ? e + 12
                      : void 0
            );
          },
          meridiem: function (e, a, t) {
            return e < 4
              ? "राती"
              : e < 12
                ? "सकाळीं"
                : e < 16
                  ? "दनपारां"
                  : e < 20
                    ? "सांजे"
                    : "राती";
          },
        });
      })(t(37485));
    },
    63681: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t, n) {
          var s = {
            s: ["thoddea sekondamni", "thodde sekond"],
            ss: [e + " sekondamni", e + " sekond"],
            m: ["eka mintan", "ek minut"],
            mm: [e + " mintamni", e + " mintam"],
            h: ["eka voran", "ek vor"],
            hh: [e + " voramni", e + " voram"],
            d: ["eka disan", "ek dis"],
            dd: [e + " disamni", e + " dis"],
            M: ["eka mhoinean", "ek mhoino"],
            MM: [e + " mhoineamni", e + " mhoine"],
            y: ["eka vorsan", "ek voros"],
            yy: [e + " vorsamni", e + " vorsam"],
          };
          return n ? s[t][0] : s[t][1];
        }
        e.defineLocale("gom-latn", {
          months: {
            standalone:
              "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split(
                "_",
              ),
            format:
              "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split(
                "_",
              ),
            isFormat: /MMMM(\s)+D[oD]?/,
          },
          monthsShort:
            "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
          weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
          weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "A h:mm [vazta]",
            LTS: "A h:mm:ss [vazta]",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY A h:mm [vazta]",
            LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
            llll: "ddd, D MMM YYYY, A h:mm [vazta]",
          },
          calendar: {
            sameDay: "[Aiz] LT",
            nextDay: "[Faleam] LT",
            nextWeek: "[Fuddlo] dddd[,] LT",
            lastDay: "[Kal] LT",
            lastWeek: "[Fattlo] dddd[,] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s",
            past: "%s adim",
            s: a,
            ss: a,
            m: a,
            mm: a,
            h: a,
            hh: a,
            d: a,
            dd: a,
            M: a,
            MM: a,
            y: a,
            yy: a,
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er)/,
          ordinal: function (e, a) {
            return "D" === a ? e + "er" : e;
          },
          week: { dow: 0, doy: 3 },
          meridiemParse: /rati|sokallim|donparam|sanje/,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              "rati" === a
                ? e < 4
                  ? e
                  : e + 12
                : "sokallim" === a
                  ? e
                  : "donparam" === a
                    ? e > 12
                      ? e
                      : e + 12
                    : "sanje" === a
                      ? e + 12
                      : void 0
            );
          },
          meridiem: function (e, a, t) {
            return e < 4
              ? "rati"
              : e < 12
                ? "sokallim"
                : e < 16
                  ? "donparam"
                  : e < 20
                    ? "sanje"
                    : "rati";
          },
        });
      })(t(37485));
    },
    32613: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "૧",
            2: "૨",
            3: "૩",
            4: "૪",
            5: "૫",
            6: "૬",
            7: "૭",
            8: "૮",
            9: "૯",
            0: "૦",
          },
          t = {
            "૧": "1",
            "૨": "2",
            "૩": "3",
            "૪": "4",
            "૫": "5",
            "૬": "6",
            "૭": "7",
            "૮": "8",
            "૯": "9",
            "૦": "0",
          };
        e.defineLocale("gu", {
          months:
            "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split(
              "_",
            ),
          monthsShort:
            "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
          weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
          weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
          longDateFormat: {
            LT: "A h:mm વાગ્યે",
            LTS: "A h:mm:ss વાગ્યે",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm વાગ્યે",
            LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે",
          },
          calendar: {
            sameDay: "[આજ] LT",
            nextDay: "[કાલે] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ગઇકાલે] LT",
            lastWeek: "[પાછલા] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s મા",
            past: "%s પહેલા",
            s: "અમુક પળો",
            ss: "%d સેકંડ",
            m: "એક મિનિટ",
            mm: "%d મિનિટ",
            h: "એક કલાક",
            hh: "%d કલાક",
            d: "એક દિવસ",
            dd: "%d દિવસ",
            M: "એક મહિનો",
            MM: "%d મહિનો",
            y: "એક વર્ષ",
            yy: "%d વર્ષ",
          },
          preparse: function (e) {
            return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (e) {
              return t[e];
            });
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (e) {
              return a[e];
            });
          },
          meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              "રાત" === a
                ? e < 4
                  ? e
                  : e + 12
                : "સવાર" === a
                  ? e
                  : "બપોર" === a
                    ? e >= 10
                      ? e
                      : e + 12
                    : "સાંજ" === a
                      ? e + 12
                      : void 0
            );
          },
          meridiem: function (e, a, t) {
            return e < 4
              ? "રાત"
              : e < 10
                ? "સવાર"
                : e < 17
                  ? "બપોર"
                  : e < 20
                    ? "સાંજ"
                    : "રાત";
          },
          week: { dow: 0, doy: 6 },
        });
      })(t(37485));
    },
    42716: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("he", {
          months:
            "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split(
              "_",
            ),
          monthsShort:
            "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split(
              "_",
            ),
          weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
          weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
          weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [ב]MMMM YYYY",
            LLL: "D [ב]MMMM YYYY HH:mm",
            LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
            l: "D/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[היום ב־]LT",
            nextDay: "[מחר ב־]LT",
            nextWeek: "dddd [בשעה] LT",
            lastDay: "[אתמול ב־]LT",
            lastWeek: "[ביום] dddd [האחרון בשעה] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "בעוד %s",
            past: "לפני %s",
            s: "מספר שניות",
            ss: "%d שניות",
            m: "דקה",
            mm: "%d דקות",
            h: "שעה",
            hh: function (e) {
              return 2 === e ? "שעתיים" : e + " שעות";
            },
            d: "יום",
            dd: function (e) {
              return 2 === e ? "יומיים" : e + " ימים";
            },
            M: "חודש",
            MM: function (e) {
              return 2 === e ? "חודשיים" : e + " חודשים";
            },
            y: "שנה",
            yy: function (e) {
              return 2 === e
                ? "שנתיים"
                : e % 10 == 0 && 10 !== e
                  ? e + " שנה"
                  : e + " שנים";
            },
          },
          meridiemParse:
            /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
          isPM: function (e) {
            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e);
          },
          meridiem: function (e, a, t) {
            return e < 5
              ? "לפנות בוקר"
              : e < 10
                ? "בבוקר"
                : e < 12
                  ? t
                    ? 'לפנה"צ'
                    : "לפני הצהריים"
                  : e < 18
                    ? t
                      ? 'אחה"צ'
                      : "אחרי הצהריים"
                    : "בערב";
          },
        });
      })(t(37485));
    },
    71315: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०",
          },
          t = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0",
          },
          n = [
            /^जन/i,
            /^फ़र|फर/i,
            /^मार्च/i,
            /^अप्रै/i,
            /^मई/i,
            /^जून/i,
            /^जुल/i,
            /^अग/i,
            /^सितं|सित/i,
            /^अक्टू/i,
            /^नव|नवं/i,
            /^दिसं|दिस/i,
          ],
          s = [
            /^जन/i,
            /^फ़र/i,
            /^मार्च/i,
            /^अप्रै/i,
            /^मई/i,
            /^जून/i,
            /^जुल/i,
            /^अग/i,
            /^सित/i,
            /^अक्टू/i,
            /^नव/i,
            /^दिस/i,
          ];
        e.defineLocale("hi", {
          months: {
            format:
              "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split(
                "_",
              ),
            standalone:
              "जनवरी_फरवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितंबर_अक्टूबर_नवंबर_दिसंबर".split(
                "_",
              ),
          },
          monthsShort:
            "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split(
              "_",
            ),
          weekdays:
            "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
          weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
          weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
          longDateFormat: {
            LT: "A h:mm बजे",
            LTS: "A h:mm:ss बजे",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm बजे",
            LLLL: "dddd, D MMMM YYYY, A h:mm बजे",
          },
          monthsParse: n,
          longMonthsParse: n,
          shortMonthsParse: s,
          monthsRegex:
            /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
          monthsShortRegex:
            /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
          monthsStrictRegex:
            /^(जनवरी?|फ़रवरी|फरवरी?|मार्च?|अप्रैल?|मई?|जून?|जुलाई?|अगस्त?|सितम्बर|सितंबर|सित?\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर?|दिसम्बर|दिसंबर?)/i,
          monthsShortStrictRegex:
            /^(जन\.?|फ़र\.?|मार्च?|अप्रै\.?|मई?|जून?|जुल\.?|अग\.?|सित\.?|अक्टू\.?|नव\.?|दिस\.?)/i,
          calendar: {
            sameDay: "[आज] LT",
            nextDay: "[कल] LT",
            nextWeek: "dddd, LT",
            lastDay: "[कल] LT",
            lastWeek: "[पिछले] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s में",
            past: "%s पहले",
            s: "कुछ ही क्षण",
            ss: "%d सेकंड",
            m: "एक मिनट",
            mm: "%d मिनट",
            h: "एक घंटा",
            hh: "%d घंटे",
            d: "एक दिन",
            dd: "%d दिन",
            M: "एक महीने",
            MM: "%d महीने",
            y: "एक वर्ष",
            yy: "%d वर्ष",
          },
          preparse: function (e) {
            return e.replace(/[१२३४५६७८९०]/g, function (e) {
              return t[e];
            });
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (e) {
              return a[e];
            });
          },
          meridiemParse: /रात|सुबह|दोपहर|शाम/,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              "रात" === a
                ? e < 4
                  ? e
                  : e + 12
                : "सुबह" === a
                  ? e
                  : "दोपहर" === a
                    ? e >= 10
                      ? e
                      : e + 12
                    : "शाम" === a
                      ? e + 12
                      : void 0
            );
          },
          meridiem: function (e, a, t) {
            return e < 4
              ? "रात"
              : e < 10
                ? "सुबह"
                : e < 17
                  ? "दोपहर"
                  : e < 20
                    ? "शाम"
                    : "रात";
          },
          week: { dow: 0, doy: 6 },
        });
      })(t(37485));
    },
    14577: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t) {
          var n = e + " ";
          switch (t) {
            case "ss":
              return (n +=
                1 === e
                  ? "sekunda"
                  : 2 === e || 3 === e || 4 === e
                    ? "sekunde"
                    : "sekundi");
            case "m":
              return a ? "jedna minuta" : "jedne minute";
            case "mm":
              return (n +=
                1 === e
                  ? "minuta"
                  : 2 === e || 3 === e || 4 === e
                    ? "minute"
                    : "minuta");
            case "h":
              return a ? "jedan sat" : "jednog sata";
            case "hh":
              return (n +=
                1 === e
                  ? "sat"
                  : 2 === e || 3 === e || 4 === e
                    ? "sata"
                    : "sati");
            case "dd":
              return (n += 1 === e ? "dan" : "dana");
            case "MM":
              return (n +=
                1 === e
                  ? "mjesec"
                  : 2 === e || 3 === e || 4 === e
                    ? "mjeseca"
                    : "mjeseci");
            case "yy":
              return (n +=
                1 === e
                  ? "godina"
                  : 2 === e || 3 === e || 4 === e
                    ? "godine"
                    : "godina");
          }
        }
        e.defineLocale("hr", {
          months: {
            format:
              "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split(
                "_",
              ),
            standalone:
              "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split(
                "_",
              ),
          },
          monthsShort:
            "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
              "_",
            ),
          weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "Do MMMM YYYY",
            LLL: "Do MMMM YYYY H:mm",
            LLLL: "dddd, Do MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[u] [nedjelju] [u] LT";
                case 3:
                  return "[u] [srijedu] [u] LT";
                case 6:
                  return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[u] dddd [u] LT";
              }
            },
            lastDay: "[jučer u] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[prošlu] [nedjelju] [u] LT";
                case 3:
                  return "[prošlu] [srijedu] [u] LT";
                case 6:
                  return "[prošle] [subote] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[prošli] dddd [u] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            ss: a,
            m: a,
            mm: a,
            h: a,
            hh: a,
            d: "dan",
            dd: a,
            M: "mjesec",
            MM: a,
            y: "godinu",
            yy: a,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    26736: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a =
          "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(
            " ",
          );
        function t(e, a, t, n) {
          var s = e;
          switch (t) {
            case "s":
              return n || a ? "néhány másodperc" : "néhány másodperce";
            case "ss":
              return s + (n || a) ? " másodperc" : " másodperce";
            case "m":
              return "egy" + (n || a ? " perc" : " perce");
            case "mm":
              return s + (n || a ? " perc" : " perce");
            case "h":
              return "egy" + (n || a ? " óra" : " órája");
            case "hh":
              return s + (n || a ? " óra" : " órája");
            case "d":
              return "egy" + (n || a ? " nap" : " napja");
            case "dd":
              return s + (n || a ? " nap" : " napja");
            case "M":
              return "egy" + (n || a ? " hónap" : " hónapja");
            case "MM":
              return s + (n || a ? " hónap" : " hónapja");
            case "y":
              return "egy" + (n || a ? " év" : " éve");
            case "yy":
              return s + (n || a ? " év" : " éve");
          }
          return "";
        }
        function n(e) {
          return (e ? "" : "[múlt] ") + "[" + a[this.day()] + "] LT[-kor]";
        }
        e.defineLocale("hu", {
          months:
            "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split(
              "_",
            ),
          monthsShort:
            "jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split(
            "_",
          ),
          weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
          weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY. MMMM D.",
            LLL: "YYYY. MMMM D. H:mm",
            LLLL: "YYYY. MMMM D., dddd H:mm",
          },
          meridiemParse: /de|du/i,
          isPM: function (e) {
            return "u" === e.charAt(1).toLowerCase();
          },
          meridiem: function (e, a, t) {
            return e < 12 ? (!0 === t ? "de" : "DE") : !0 === t ? "du" : "DU";
          },
          calendar: {
            sameDay: "[ma] LT[-kor]",
            nextDay: "[holnap] LT[-kor]",
            nextWeek: function () {
              return n.call(this, !0);
            },
            lastDay: "[tegnap] LT[-kor]",
            lastWeek: function () {
              return n.call(this, !1);
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "%s múlva",
            past: "%s",
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    3417: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("hy-am", {
          months: {
            format:
              "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split(
                "_",
              ),
            standalone:
              "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split(
                "_",
              ),
          },
          monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split(
            "_",
          ),
          weekdays:
            "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split(
              "_",
            ),
          weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
          weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY թ.",
            LLL: "D MMMM YYYY թ., HH:mm",
            LLLL: "dddd, D MMMM YYYY թ., HH:mm",
          },
          calendar: {
            sameDay: "[այսօր] LT",
            nextDay: "[վաղը] LT",
            lastDay: "[երեկ] LT",
            nextWeek: function () {
              return "dddd [օրը ժամը] LT";
            },
            lastWeek: function () {
              return "[անցած] dddd [օրը ժամը] LT";
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "%s հետո",
            past: "%s առաջ",
            s: "մի քանի վայրկյան",
            ss: "%d վայրկյան",
            m: "րոպե",
            mm: "%d րոպե",
            h: "ժամ",
            hh: "%d ժամ",
            d: "օր",
            dd: "%d օր",
            M: "ամիս",
            MM: "%d ամիս",
            y: "տարի",
            yy: "%d տարի",
          },
          meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
          isPM: function (e) {
            return /^(ցերեկվա|երեկոյան)$/.test(e);
          },
          meridiem: function (e) {
            return e < 4
              ? "գիշերվա"
              : e < 12
                ? "առավոտվա"
                : e < 17
                  ? "ցերեկվա"
                  : "երեկոյան";
          },
          dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
          ordinal: function (e, a) {
            switch (a) {
              case "DDD":
              case "w":
              case "W":
              case "DDDo":
                return 1 === e ? e + "-ին" : e + "-րդ";
              default:
                return e;
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    18890: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("id", {
          months:
            "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split(
            "_",
          ),
          weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
          weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
          weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
          },
          meridiemParse: /pagi|siang|sore|malam/,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              "pagi" === a
                ? e
                : "siang" === a
                  ? e >= 11
                    ? e
                    : e + 12
                  : "sore" === a || "malam" === a
                    ? e + 12
                    : void 0
            );
          },
          meridiem: function (e, a, t) {
            return e < 11
              ? "pagi"
              : e < 15
                ? "siang"
                : e < 19
                  ? "sore"
                  : "malam";
          },
          calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Besok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kemarin pukul] LT",
            lastWeek: "dddd [lalu pukul] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "dalam %s",
            past: "%s yang lalu",
            s: "beberapa detik",
            ss: "%d detik",
            m: "semenit",
            mm: "%d menit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun",
          },
          week: { dow: 0, doy: 6 },
        });
      })(t(37485));
    },
    14468: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        function a(e) {
          return e % 100 == 11 || e % 10 != 1;
        }
        function t(e, t, n, s) {
          var r = e + " ";
          switch (n) {
            case "s":
              return t || s ? "nokkrar sekúndur" : "nokkrum sekúndum";
            case "ss":
              return a(e)
                ? r + (t || s ? "sekúndur" : "sekúndum")
                : r + "sekúnda";
            case "m":
              return t ? "mínúta" : "mínútu";
            case "mm":
              return a(e)
                ? r + (t || s ? "mínútur" : "mínútum")
                : t
                  ? r + "mínúta"
                  : r + "mínútu";
            case "hh":
              return a(e)
                ? r + (t || s ? "klukkustundir" : "klukkustundum")
                : r + "klukkustund";
            case "d":
              return t ? "dagur" : s ? "dag" : "degi";
            case "dd":
              return a(e)
                ? t
                  ? r + "dagar"
                  : r + (s ? "daga" : "dögum")
                : t
                  ? r + "dagur"
                  : r + (s ? "dag" : "degi");
            case "M":
              return t ? "mánuður" : s ? "mánuð" : "mánuði";
            case "MM":
              return a(e)
                ? t
                  ? r + "mánuðir"
                  : r + (s ? "mánuði" : "mánuðum")
                : t
                  ? r + "mánuður"
                  : r + (s ? "mánuð" : "mánuði");
            case "y":
              return t || s ? "ár" : "ári";
            case "yy":
              return a(e)
                ? r + (t || s ? "ár" : "árum")
                : r + (t || s ? "ár" : "ári");
          }
        }
        e.defineLocale("is", {
          months:
            "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split(
              "_",
            ),
          monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split(
            "_",
          ),
          weekdays:
            "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split(
              "_",
            ),
          weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
          weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd, D. MMMM YYYY [kl.] H:mm",
          },
          calendar: {
            sameDay: "[í dag kl.] LT",
            nextDay: "[á morgun kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[í gær kl.] LT",
            lastWeek: "[síðasta] dddd [kl.] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "eftir %s",
            past: "fyrir %s síðan",
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: "klukkustund",
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    64064: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("it-ch", {
          months:
            "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
              "_",
            ),
          monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split(
            "_",
          ),
          weekdays:
            "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split(
              "_",
            ),
          weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
          weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Oggi alle] LT",
            nextDay: "[Domani alle] LT",
            nextWeek: "dddd [alle] LT",
            lastDay: "[Ieri alle] LT",
            lastWeek: function () {
              return 0 === this.day()
                ? "[la scorsa] dddd [alle] LT"
                : "[lo scorso] dddd [alle] LT";
            },
            sameElse: "L",
          },
          relativeTime: {
            future: function (e) {
              return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e;
            },
            past: "%s fa",
            s: "alcuni secondi",
            ss: "%d secondi",
            m: "un minuto",
            mm: "%d minuti",
            h: "un'ora",
            hh: "%d ore",
            d: "un giorno",
            dd: "%d giorni",
            M: "un mese",
            MM: "%d mesi",
            y: "un anno",
            yy: "%d anni",
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    45652: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("it", {
          months:
            "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
              "_",
            ),
          monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split(
            "_",
          ),
          weekdays:
            "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split(
              "_",
            ),
          weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
          weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: function () {
              return (
                "[Oggi a" +
                (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
                "]LT"
              );
            },
            nextDay: function () {
              return (
                "[Domani a" +
                (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
                "]LT"
              );
            },
            nextWeek: function () {
              return (
                "dddd [a" +
                (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
                "]LT"
              );
            },
            lastDay: function () {
              return (
                "[Ieri a" +
                (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
                "]LT"
              );
            },
            lastWeek: function () {
              return 0 === this.day()
                ? "[La scorsa] dddd [a" +
                    (this.hours() > 1
                      ? "lle "
                      : 0 === this.hours()
                        ? " "
                        : "ll'") +
                    "]LT"
                : "[Lo scorso] dddd [a" +
                    (this.hours() > 1
                      ? "lle "
                      : 0 === this.hours()
                        ? " "
                        : "ll'") +
                    "]LT";
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "tra %s",
            past: "%s fa",
            s: "alcuni secondi",
            ss: "%d secondi",
            m: "un minuto",
            mm: "%d minuti",
            h: "un'ora",
            hh: "%d ore",
            d: "un giorno",
            dd: "%d giorni",
            w: "una settimana",
            ww: "%d settimane",
            M: "un mese",
            MM: "%d mesi",
            y: "un anno",
            yy: "%d anni",
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    44511: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ja", {
          eras: [
            {
              since: "2019-05-01",
              offset: 1,
              name: "令和",
              narrow: "㋿",
              abbr: "R",
            },
            {
              since: "1989-01-08",
              until: "2019-04-30",
              offset: 1,
              name: "平成",
              narrow: "㍻",
              abbr: "H",
            },
            {
              since: "1926-12-25",
              until: "1989-01-07",
              offset: 1,
              name: "昭和",
              narrow: "㍼",
              abbr: "S",
            },
            {
              since: "1912-07-30",
              until: "1926-12-24",
              offset: 1,
              name: "大正",
              narrow: "㍽",
              abbr: "T",
            },
            {
              since: "1873-01-01",
              until: "1912-07-29",
              offset: 6,
              name: "明治",
              narrow: "㍾",
              abbr: "M",
            },
            {
              since: "0001-01-01",
              until: "1873-12-31",
              offset: 1,
              name: "西暦",
              narrow: "AD",
              abbr: "AD",
            },
            {
              since: "0000-12-31",
              until: -1 / 0,
              offset: 1,
              name: "紀元前",
              narrow: "BC",
              abbr: "BC",
            },
          ],
          eraYearOrdinalRegex: /(元|\d+)年/,
          eraYearOrdinalParse: function (e, a) {
            return "元" === a[1] ? 1 : parseInt(a[1] || e, 10);
          },
          months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
            "_",
          ),
          monthsShort:
            "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split(
            "_",
          ),
          weekdaysShort: "日_月_火_水_木_金_土".split("_"),
          weekdaysMin: "日_月_火_水_木_金_土".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日 HH:mm",
            LLLL: "YYYY年M月D日 dddd HH:mm",
            l: "YYYY/MM/DD",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日(ddd) HH:mm",
          },
          meridiemParse: /午前|午後/i,
          isPM: function (e) {
            return "午後" === e;
          },
          meridiem: function (e, a, t) {
            return e < 12 ? "午前" : "午後";
          },
          calendar: {
            sameDay: "[今日] LT",
            nextDay: "[明日] LT",
            nextWeek: function (e) {
              return e.week() !== this.week() ? "[来週]dddd LT" : "dddd LT";
            },
            lastDay: "[昨日] LT",
            lastWeek: function (e) {
              return this.week() !== e.week() ? "[先週]dddd LT" : "dddd LT";
            },
            sameElse: "L",
          },
          dayOfMonthOrdinalParse: /\d{1,2}日/,
          ordinal: function (e, a) {
            switch (a) {
              case "y":
                return 1 === e ? "元年" : e + "年";
              case "d":
              case "D":
              case "DDD":
                return e + "日";
              default:
                return e;
            }
          },
          relativeTime: {
            future: "%s後",
            past: "%s前",
            s: "数秒",
            ss: "%d秒",
            m: "1分",
            mm: "%d分",
            h: "1時間",
            hh: "%d時間",
            d: "1日",
            dd: "%d日",
            M: "1ヶ月",
            MM: "%dヶ月",
            y: "1年",
            yy: "%d年",
          },
        });
      })(t(37485));
    },
    63069: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("jv", {
          months:
            "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split(
            "_",
          ),
          weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
          weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
          weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
          },
          meridiemParse: /enjing|siyang|sonten|ndalu/,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              "enjing" === a
                ? e
                : "siyang" === a
                  ? e >= 11
                    ? e
                    : e + 12
                  : "sonten" === a || "ndalu" === a
                    ? e + 12
                    : void 0
            );
          },
          meridiem: function (e, a, t) {
            return e < 11
              ? "enjing"
              : e < 15
                ? "siyang"
                : e < 19
                  ? "sonten"
                  : "ndalu";
          },
          calendar: {
            sameDay: "[Dinten puniko pukul] LT",
            nextDay: "[Mbenjang pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kala wingi pukul] LT",
            lastWeek: "dddd [kepengker pukul] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "wonten ing %s",
            past: "%s ingkang kepengker",
            s: "sawetawis detik",
            ss: "%d detik",
            m: "setunggal menit",
            mm: "%d menit",
            h: "setunggal jam",
            hh: "%d jam",
            d: "sedinten",
            dd: "%d dinten",
            M: "sewulan",
            MM: "%d wulan",
            y: "setaun",
            yy: "%d taun",
          },
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    75258: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ka", {
          months:
            "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split(
              "_",
            ),
          monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split(
            "_",
          ),
          weekdays: {
            standalone:
              "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split(
                "_",
              ),
            format:
              "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split(
                "_",
              ),
            isFormat: /(წინა|შემდეგ)/,
          },
          weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
          weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[დღეს] LT[-ზე]",
            nextDay: "[ხვალ] LT[-ზე]",
            lastDay: "[გუშინ] LT[-ზე]",
            nextWeek: "[შემდეგ] dddd LT[-ზე]",
            lastWeek: "[წინა] dddd LT-ზე",
            sameElse: "L",
          },
          relativeTime: {
            future: function (e) {
              return e.replace(
                /(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/,
                function (e, a, t) {
                  return "ი" === t ? a + "ში" : a + t + "ში";
                },
              );
            },
            past: function (e) {
              return /(წამი|წუთი|საათი|დღე|თვე)/.test(e)
                ? e.replace(/(ი|ე)$/, "ის წინ")
                : /წელი/.test(e)
                  ? e.replace(/წელი$/, "წლის წინ")
                  : e;
            },
            s: "რამდენიმე წამი",
            ss: "%d წამი",
            m: "წუთი",
            mm: "%d წუთი",
            h: "საათი",
            hh: "%d საათი",
            d: "დღე",
            dd: "%d დღე",
            M: "თვე",
            MM: "%d თვე",
            y: "წელი",
            yy: "%d წელი",
          },
          dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
          ordinal: function (e) {
            return 0 === e
              ? e
              : 1 === e
                ? e + "-ლი"
                : e < 20 || (e <= 100 && e % 20 == 0) || e % 100 == 0
                  ? "მე-" + e
                  : e + "-ე";
          },
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    77086: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
          0: "-ші",
          1: "-ші",
          2: "-ші",
          3: "-ші",
          4: "-ші",
          5: "-ші",
          6: "-шы",
          7: "-ші",
          8: "-ші",
          9: "-шы",
          10: "-шы",
          20: "-шы",
          30: "-шы",
          40: "-шы",
          50: "-ші",
          60: "-шы",
          70: "-ші",
          80: "-ші",
          90: "-шы",
          100: "-ші",
        };
        e.defineLocale("kk", {
          months:
            "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split(
              "_",
            ),
          monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split(
            "_",
          ),
          weekdays:
            "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split(
              "_",
            ),
          weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
          weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Бүгін сағат] LT",
            nextDay: "[Ертең сағат] LT",
            nextWeek: "dddd [сағат] LT",
            lastDay: "[Кеше сағат] LT",
            lastWeek: "[Өткен аптаның] dddd [сағат] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s ішінде",
            past: "%s бұрын",
            s: "бірнеше секунд",
            ss: "%d секунд",
            m: "бір минут",
            mm: "%d минут",
            h: "бір сағат",
            hh: "%d сағат",
            d: "бір күн",
            dd: "%d күн",
            M: "бір ай",
            MM: "%d ай",
            y: "бір жыл",
            yy: "%d жыл",
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
          ordinal: function (e) {
            var t = e % 10,
              n = e >= 100 ? 100 : null;
            return e + (a[e] || a[t] || a[n]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    84125: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "១",
            2: "២",
            3: "៣",
            4: "៤",
            5: "៥",
            6: "៦",
            7: "៧",
            8: "៨",
            9: "៩",
            0: "០",
          },
          t = {
            "១": "1",
            "២": "2",
            "៣": "3",
            "៤": "4",
            "៥": "5",
            "៦": "6",
            "៧": "7",
            "៨": "8",
            "៩": "9",
            "០": "0",
          };
        e.defineLocale("km", {
          months:
            "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
              "_",
            ),
          monthsShort:
            "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
              "_",
            ),
          weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
          weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
          weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          meridiemParse: /ព្រឹក|ល្ងាច/,
          isPM: function (e) {
            return "ល្ងាច" === e;
          },
          meridiem: function (e, a, t) {
            return e < 12 ? "ព្រឹក" : "ល្ងាច";
          },
          calendar: {
            sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
            nextDay: "[ស្អែក ម៉ោង] LT",
            nextWeek: "dddd [ម៉ោង] LT",
            lastDay: "[ម្សិលមិញ ម៉ោង] LT",
            lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%sទៀត",
            past: "%sមុន",
            s: "ប៉ុន្មានវិនាទី",
            ss: "%d វិនាទី",
            m: "មួយនាទី",
            mm: "%d នាទី",
            h: "មួយម៉ោង",
            hh: "%d ម៉ោង",
            d: "មួយថ្ងៃ",
            dd: "%d ថ្ងៃ",
            M: "មួយខែ",
            MM: "%d ខែ",
            y: "មួយឆ្នាំ",
            yy: "%d ឆ្នាំ",
          },
          dayOfMonthOrdinalParse: /ទី\d{1,2}/,
          ordinal: "ទី%d",
          preparse: function (e) {
            return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function (e) {
              return t[e];
            });
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (e) {
              return a[e];
            });
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    37197: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "೧",
            2: "೨",
            3: "೩",
            4: "೪",
            5: "೫",
            6: "೬",
            7: "೭",
            8: "೮",
            9: "೯",
            0: "೦",
          },
          t = {
            "೧": "1",
            "೨": "2",
            "೩": "3",
            "೪": "4",
            "೫": "5",
            "೬": "6",
            "೭": "7",
            "೮": "8",
            "೯": "9",
            "೦": "0",
          };
        e.defineLocale("kn", {
          months:
            "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split(
              "_",
            ),
          monthsShort:
            "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split(
              "_",
            ),
          weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
          weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
          longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm",
          },
          calendar: {
            sameDay: "[ಇಂದು] LT",
            nextDay: "[ನಾಳೆ] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ನಿನ್ನೆ] LT",
            lastWeek: "[ಕೊನೆಯ] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s ನಂತರ",
            past: "%s ಹಿಂದೆ",
            s: "ಕೆಲವು ಕ್ಷಣಗಳು",
            ss: "%d ಸೆಕೆಂಡುಗಳು",
            m: "ಒಂದು ನಿಮಿಷ",
            mm: "%d ನಿಮಿಷ",
            h: "ಒಂದು ಗಂಟೆ",
            hh: "%d ಗಂಟೆ",
            d: "ಒಂದು ದಿನ",
            dd: "%d ದಿನ",
            M: "ಒಂದು ತಿಂಗಳು",
            MM: "%d ತಿಂಗಳು",
            y: "ಒಂದು ವರ್ಷ",
            yy: "%d ವರ್ಷ",
          },
          preparse: function (e) {
            return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (e) {
              return t[e];
            });
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (e) {
              return a[e];
            });
          },
          meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              "ರಾತ್ರಿ" === a
                ? e < 4
                  ? e
                  : e + 12
                : "ಬೆಳಿಗ್ಗೆ" === a
                  ? e
                  : "ಮಧ್ಯಾಹ್ನ" === a
                    ? e >= 10
                      ? e
                      : e + 12
                    : "ಸಂಜೆ" === a
                      ? e + 12
                      : void 0
            );
          },
          meridiem: function (e, a, t) {
            return e < 4
              ? "ರಾತ್ರಿ"
              : e < 10
                ? "ಬೆಳಿಗ್ಗೆ"
                : e < 17
                  ? "ಮಧ್ಯಾಹ್ನ"
                  : e < 20
                    ? "ಸಂಜೆ"
                    : "ರಾತ್ರಿ";
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
          ordinal: function (e) {
            return e + "ನೇ";
          },
          week: { dow: 0, doy: 6 },
        });
      })(t(37485));
    },
    65508: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ko", {
          months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split(
            "_",
          ),
          monthsShort:
            "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
          weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split(
            "_",
          ),
          weekdaysShort: "일_월_화_수_목_금_토".split("_"),
          weekdaysMin: "일_월_화_수_목_금_토".split("_"),
          longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY년 MMMM D일",
            LLL: "YYYY년 MMMM D일 A h:mm",
            LLLL: "YYYY년 MMMM D일 dddd A h:mm",
            l: "YYYY.MM.DD.",
            ll: "YYYY년 MMMM D일",
            lll: "YYYY년 MMMM D일 A h:mm",
            llll: "YYYY년 MMMM D일 dddd A h:mm",
          },
          calendar: {
            sameDay: "오늘 LT",
            nextDay: "내일 LT",
            nextWeek: "dddd LT",
            lastDay: "어제 LT",
            lastWeek: "지난주 dddd LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s 후",
            past: "%s 전",
            s: "몇 초",
            ss: "%d초",
            m: "1분",
            mm: "%d분",
            h: "한 시간",
            hh: "%d시간",
            d: "하루",
            dd: "%d일",
            M: "한 달",
            MM: "%d달",
            y: "일 년",
            yy: "%d년",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
          ordinal: function (e, a) {
            switch (a) {
              case "d":
              case "D":
              case "DDD":
                return e + "일";
              case "M":
                return e + "월";
              case "w":
              case "W":
                return e + "주";
              default:
                return e;
            }
          },
          meridiemParse: /오전|오후/,
          isPM: function (e) {
            return "오후" === e;
          },
          meridiem: function (e, a, t) {
            return e < 12 ? "오전" : "오후";
          },
        });
      })(t(37485));
    },
    53905: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t, n) {
          var s = {
            s: ["çend sanîye", "çend sanîyeyan"],
            ss: [e + " sanîye", e + " sanîyeyan"],
            m: ["deqîqeyek", "deqîqeyekê"],
            mm: [e + " deqîqe", e + " deqîqeyan"],
            h: ["saetek", "saetekê"],
            hh: [e + " saet", e + " saetan"],
            d: ["rojek", "rojekê"],
            dd: [e + " roj", e + " rojan"],
            w: ["hefteyek", "hefteyekê"],
            ww: [e + " hefte", e + " hefteyan"],
            M: ["mehek", "mehekê"],
            MM: [e + " meh", e + " mehan"],
            y: ["salek", "salekê"],
            yy: [e + " sal", e + " salan"],
          };
          return a ? s[t][0] : s[t][1];
        }
        function t(e) {
          var a = (e = "" + e).substring(e.length - 1),
            t = e.length > 1 ? e.substring(e.length - 2) : "";
          return 12 == t ||
            13 == t ||
            ("2" != a && "3" != a && "50" != t && "70" != a && "80" != a)
            ? "ê"
            : "yê";
        }
        e.defineLocale("ku-kmr", {
          months:
            "Rêbendan_Sibat_Adar_Nîsan_Gulan_Hezîran_Tîrmeh_Tebax_Îlon_Cotmeh_Mijdar_Berfanbar".split(
              "_",
            ),
          monthsShort: "Rêb_Sib_Ada_Nîs_Gul_Hez_Tîr_Teb_Îlo_Cot_Mij_Ber".split(
            "_",
          ),
          monthsParseExact: !0,
          weekdays: "Yekşem_Duşem_Sêşem_Çarşem_Pêncşem_În_Şemî".split("_"),
          weekdaysShort: "Yek_Du_Sê_Çar_Pên_În_Şem".split("_"),
          weekdaysMin: "Ye_Du_Sê_Ça_Pê_În_Şe".split("_"),
          meridiem: function (e, a, t) {
            return e < 12 ? (t ? "bn" : "BN") : t ? "pn" : "PN";
          },
          meridiemParse: /bn|BN|pn|PN/,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "Do MMMM[a] YYYY[an]",
            LLL: "Do MMMM[a] YYYY[an] HH:mm",
            LLLL: "dddd, Do MMMM[a] YYYY[an] HH:mm",
            ll: "Do MMM[.] YYYY[an]",
            lll: "Do MMM[.] YYYY[an] HH:mm",
            llll: "ddd[.], Do MMM[.] YYYY[an] HH:mm",
          },
          calendar: {
            sameDay: "[Îro di saet] LT [de]",
            nextDay: "[Sibê di saet] LT [de]",
            nextWeek: "dddd [di saet] LT [de]",
            lastDay: "[Duh di saet] LT [de]",
            lastWeek: "dddd[a borî di saet] LT [de]",
            sameElse: "L",
          },
          relativeTime: {
            future: "di %s de",
            past: "berî %s",
            s: a,
            ss: a,
            m: a,
            mm: a,
            h: a,
            hh: a,
            d: a,
            dd: a,
            w: a,
            ww: a,
            M: a,
            MM: a,
            y: a,
            yy: a,
          },
          dayOfMonthOrdinalParse: /\d{1,2}(?:yê|ê|\.)/,
          ordinal: function (e, a) {
            var n = a.toLowerCase();
            return n.includes("w") || n.includes("m") ? e + "." : e + t(e);
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    18195: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "١",
            2: "٢",
            3: "٣",
            4: "٤",
            5: "٥",
            6: "٦",
            7: "٧",
            8: "٨",
            9: "٩",
            0: "٠",
          },
          t = {
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "٠": "0",
          },
          n = [
            "کانونی دووەم",
            "شوبات",
            "ئازار",
            "نیسان",
            "ئایار",
            "حوزەیران",
            "تەمموز",
            "ئاب",
            "ئەیلوول",
            "تشرینی یەكەم",
            "تشرینی دووەم",
            "كانونی یەکەم",
          ];
        e.defineLocale("ku", {
          months: n,
          monthsShort: n,
          weekdays:
            "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split(
              "_",
            ),
          weekdaysShort:
            "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split(
              "_",
            ),
          weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          meridiemParse: /ئێواره‌|به‌یانی/,
          isPM: function (e) {
            return /ئێواره‌/.test(e);
          },
          meridiem: function (e, a, t) {
            return e < 12 ? "به‌یانی" : "ئێواره‌";
          },
          calendar: {
            sameDay: "[ئه‌مرۆ كاتژمێر] LT",
            nextDay: "[به‌یانی كاتژمێر] LT",
            nextWeek: "dddd [كاتژمێر] LT",
            lastDay: "[دوێنێ كاتژمێر] LT",
            lastWeek: "dddd [كاتژمێر] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "له‌ %s",
            past: "%s",
            s: "چه‌ند چركه‌یه‌ك",
            ss: "چركه‌ %d",
            m: "یه‌ك خوله‌ك",
            mm: "%d خوله‌ك",
            h: "یه‌ك كاتژمێر",
            hh: "%d كاتژمێر",
            d: "یه‌ك ڕۆژ",
            dd: "%d ڕۆژ",
            M: "یه‌ك مانگ",
            MM: "%d مانگ",
            y: "یه‌ك ساڵ",
            yy: "%d ساڵ",
          },
          preparse: function (e) {
            return e
              .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                return t[e];
              })
              .replace(/،/g, ",");
          },
          postformat: function (e) {
            return e
              .replace(/\d/g, function (e) {
                return a[e];
              })
              .replace(/,/g, "،");
          },
          week: { dow: 6, doy: 12 },
        });
      })(t(37485));
    },
    83971: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
          0: "-чү",
          1: "-чи",
          2: "-чи",
          3: "-чү",
          4: "-чү",
          5: "-чи",
          6: "-чы",
          7: "-чи",
          8: "-чи",
          9: "-чу",
          10: "-чу",
          20: "-чы",
          30: "-чу",
          40: "-чы",
          50: "-чү",
          60: "-чы",
          70: "-чи",
          80: "-чи",
          90: "-чу",
          100: "-чү",
        };
        e.defineLocale("ky", {
          months:
            "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split(
              "_",
            ),
          monthsShort:
            "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
          weekdays:
            "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split(
              "_",
            ),
          weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
          weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Бүгүн саат] LT",
            nextDay: "[Эртең саат] LT",
            nextWeek: "dddd [саат] LT",
            lastDay: "[Кечээ саат] LT",
            lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s ичинде",
            past: "%s мурун",
            s: "бирнече секунд",
            ss: "%d секунд",
            m: "бир мүнөт",
            mm: "%d мүнөт",
            h: "бир саат",
            hh: "%d саат",
            d: "бир күн",
            dd: "%d күн",
            M: "бир ай",
            MM: "%d ай",
            y: "бир жыл",
            yy: "%d жыл",
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
          ordinal: function (e) {
            var t = e % 10,
              n = e >= 100 ? 100 : null;
            return e + (a[e] || a[t] || a[n]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    79651: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t, n) {
          var s = {
            m: ["eng Minutt", "enger Minutt"],
            h: ["eng Stonn", "enger Stonn"],
            d: ["een Dag", "engem Dag"],
            M: ["ee Mount", "engem Mount"],
            y: ["ee Joer", "engem Joer"],
          };
          return a ? s[t][0] : s[t][1];
        }
        function t(e) {
          return s(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e;
        }
        function n(e) {
          return s(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e;
        }
        function s(e) {
          if (((e = parseInt(e, 10)), isNaN(e))) return !1;
          if (e < 0) return !0;
          if (e < 10) return 4 <= e && e <= 7;
          if (e < 100) {
            var a = e % 10;
            return s(0 === a ? e / 10 : a);
          }
          if (e < 1e4) {
            for (; e >= 10; ) e /= 10;
            return s(e);
          }
          return s((e /= 1e3));
        }
        e.defineLocale("lb", {
          months:
            "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split(
              "_",
            ),
          monthsShort:
            "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split(
              "_",
            ),
          weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
          weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm [Auer]",
            LTS: "H:mm:ss [Auer]",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm [Auer]",
            LLLL: "dddd, D. MMMM YYYY H:mm [Auer]",
          },
          calendar: {
            sameDay: "[Haut um] LT",
            sameElse: "L",
            nextDay: "[Muer um] LT",
            nextWeek: "dddd [um] LT",
            lastDay: "[Gëschter um] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 2:
                case 4:
                  return "[Leschten] dddd [um] LT";
                default:
                  return "[Leschte] dddd [um] LT";
              }
            },
          },
          relativeTime: {
            future: t,
            past: n,
            s: "e puer Sekonnen",
            ss: "%d Sekonnen",
            m: a,
            mm: "%d Minutten",
            h: a,
            hh: "%d Stonnen",
            d: a,
            dd: "%d Deeg",
            M: a,
            MM: "%d Méint",
            y: a,
            yy: "%d Joer",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    58072: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("lo", {
          months:
            "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split(
              "_",
            ),
          monthsShort:
            "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split(
              "_",
            ),
          weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
          weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
          weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "ວັນdddd D MMMM YYYY HH:mm",
          },
          meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
          isPM: function (e) {
            return "ຕອນແລງ" === e;
          },
          meridiem: function (e, a, t) {
            return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ";
          },
          calendar: {
            sameDay: "[ມື້ນີ້ເວລາ] LT",
            nextDay: "[ມື້ອື່ນເວລາ] LT",
            nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
            lastDay: "[ມື້ວານນີ້ເວລາ] LT",
            lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "ອີກ %s",
            past: "%sຜ່ານມາ",
            s: "ບໍ່ເທົ່າໃດວິນາທີ",
            ss: "%d ວິນາທີ",
            m: "1 ນາທີ",
            mm: "%d ນາທີ",
            h: "1 ຊົ່ວໂມງ",
            hh: "%d ຊົ່ວໂມງ",
            d: "1 ມື້",
            dd: "%d ມື້",
            M: "1 ເດືອນ",
            MM: "%d ເດືອນ",
            y: "1 ປີ",
            yy: "%d ປີ",
          },
          dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
          ordinal: function (e) {
            return "ທີ່" + e;
          },
        });
      })(t(37485));
    },
    62146: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
          ss: "sekundė_sekundžių_sekundes",
          m: "minutė_minutės_minutę",
          mm: "minutės_minučių_minutes",
          h: "valanda_valandos_valandą",
          hh: "valandos_valandų_valandas",
          d: "diena_dienos_dieną",
          dd: "dienos_dienų_dienas",
          M: "mėnuo_mėnesio_mėnesį",
          MM: "mėnesiai_mėnesių_mėnesius",
          y: "metai_metų_metus",
          yy: "metai_metų_metus",
        };
        function t(e, a, t, n) {
          return a
            ? "kelios sekundės"
            : n
              ? "kelių sekundžių"
              : "kelias sekundes";
        }
        function n(e, a, t, n) {
          return a ? r(t)[0] : n ? r(t)[1] : r(t)[2];
        }
        function s(e) {
          return e % 10 == 0 || (e > 10 && e < 20);
        }
        function r(e) {
          return a[e].split("_");
        }
        function i(e, a, t, i) {
          var d = e + " ";
          return 1 === e
            ? d + n(e, a, t[0], i)
            : a
              ? d + (s(e) ? r(t)[1] : r(t)[0])
              : i
                ? d + r(t)[1]
                : d + (s(e) ? r(t)[1] : r(t)[2]);
        }
        e.defineLocale("lt", {
          months: {
            format:
              "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split(
                "_",
              ),
            standalone:
              "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split(
                "_",
              ),
            isFormat:
              /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,
          },
          monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split(
            "_",
          ),
          weekdays: {
            format:
              "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split(
                "_",
              ),
            standalone:
              "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split(
                "_",
              ),
            isFormat: /dddd HH:mm/,
          },
          weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
          weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY [m.] MMMM D [d.]",
            LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
            l: "YYYY-MM-DD",
            ll: "YYYY [m.] MMMM D [d.]",
            lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]",
          },
          calendar: {
            sameDay: "[Šiandien] LT",
            nextDay: "[Rytoj] LT",
            nextWeek: "dddd LT",
            lastDay: "[Vakar] LT",
            lastWeek: "[Praėjusį] dddd LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "po %s",
            past: "prieš %s",
            s: t,
            ss: i,
            m: n,
            mm: i,
            h: n,
            hh: i,
            d: n,
            dd: i,
            M: n,
            MM: i,
            y: n,
            yy: i,
          },
          dayOfMonthOrdinalParse: /\d{1,2}-oji/,
          ordinal: function (e) {
            return e + "-oji";
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    84824: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
          ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
          m: "minūtes_minūtēm_minūte_minūtes".split("_"),
          mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
          h: "stundas_stundām_stunda_stundas".split("_"),
          hh: "stundas_stundām_stunda_stundas".split("_"),
          d: "dienas_dienām_diena_dienas".split("_"),
          dd: "dienas_dienām_diena_dienas".split("_"),
          M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
          MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
          y: "gada_gadiem_gads_gadi".split("_"),
          yy: "gada_gadiem_gads_gadi".split("_"),
        };
        function t(e, a, t) {
          return t
            ? a % 10 == 1 && a % 100 != 11
              ? e[2]
              : e[3]
            : a % 10 == 1 && a % 100 != 11
              ? e[0]
              : e[1];
        }
        function n(e, n, s) {
          return e + " " + t(a[s], e, n);
        }
        function s(e, n, s) {
          return t(a[s], e, n);
        }
        function r(e, a) {
          return a ? "dažas sekundes" : "dažām sekundēm";
        }
        e.defineLocale("lv", {
          months:
            "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split(
              "_",
            ),
          monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split(
            "_",
          ),
          weekdays:
            "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split(
              "_",
            ),
          weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
          weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY.",
            LL: "YYYY. [gada] D. MMMM",
            LLL: "YYYY. [gada] D. MMMM, HH:mm",
            LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm",
          },
          calendar: {
            sameDay: "[Šodien pulksten] LT",
            nextDay: "[Rīt pulksten] LT",
            nextWeek: "dddd [pulksten] LT",
            lastDay: "[Vakar pulksten] LT",
            lastWeek: "[Pagājušā] dddd [pulksten] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "pēc %s",
            past: "pirms %s",
            s: r,
            ss: n,
            m: s,
            mm: n,
            h: s,
            hh: n,
            d: s,
            dd: n,
            M: s,
            MM: n,
            y: s,
            yy: n,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    49674: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
          words: {
            ss: ["sekund", "sekunda", "sekundi"],
            m: ["jedan minut", "jednog minuta"],
            mm: ["minut", "minuta", "minuta"],
            h: ["jedan sat", "jednog sata"],
            hh: ["sat", "sata", "sati"],
            dd: ["dan", "dana", "dana"],
            MM: ["mjesec", "mjeseca", "mjeseci"],
            yy: ["godina", "godine", "godina"],
          },
          correctGrammaticalCase: function (e, a) {
            return 1 === e ? a[0] : e >= 2 && e <= 4 ? a[1] : a[2];
          },
          translate: function (e, t, n) {
            var s = a.words[n];
            return 1 === n.length
              ? t
                ? s[0]
                : s[1]
              : e + " " + a.correctGrammaticalCase(e, s);
          },
        };
        e.defineLocale("me", {
          months:
            "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
              "_",
            ),
          monthsShort:
            "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
              "_",
            ),
          weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sjutra u] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[u] [nedjelju] [u] LT";
                case 3:
                  return "[u] [srijedu] [u] LT";
                case 6:
                  return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[u] dddd [u] LT";
              }
            },
            lastDay: "[juče u] LT",
            lastWeek: function () {
              return [
                "[prošle] [nedjelje] [u] LT",
                "[prošlog] [ponedjeljka] [u] LT",
                "[prošlog] [utorka] [u] LT",
                "[prošle] [srijede] [u] LT",
                "[prošlog] [četvrtka] [u] LT",
                "[prošlog] [petka] [u] LT",
                "[prošle] [subote] [u] LT",
              ][this.day()];
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "nekoliko sekundi",
            ss: a.translate,
            m: a.translate,
            mm: a.translate,
            h: a.translate,
            hh: a.translate,
            d: "dan",
            dd: a.translate,
            M: "mjesec",
            MM: a.translate,
            y: "godinu",
            yy: a.translate,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    56500: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("mi", {
          months:
            "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split(
              "_",
            ),
          monthsShort:
            "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split(
              "_",
            ),
          monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
          weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split(
            "_",
          ),
          weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
          weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [i] HH:mm",
            LLLL: "dddd, D MMMM YYYY [i] HH:mm",
          },
          calendar: {
            sameDay: "[i teie mahana, i] LT",
            nextDay: "[apopo i] LT",
            nextWeek: "dddd [i] LT",
            lastDay: "[inanahi i] LT",
            lastWeek: "dddd [whakamutunga i] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "i roto i %s",
            past: "%s i mua",
            s: "te hēkona ruarua",
            ss: "%d hēkona",
            m: "he meneti",
            mm: "%d meneti",
            h: "te haora",
            hh: "%d haora",
            d: "he ra",
            dd: "%d ra",
            M: "he marama",
            MM: "%d marama",
            y: "he tau",
            yy: "%d tau",
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    85111: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("mk", {
          months:
            "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split(
              "_",
            ),
          monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split(
            "_",
          ),
          weekdays:
            "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
          weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
          weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[Денес во] LT",
            nextDay: "[Утре во] LT",
            nextWeek: "[Во] dddd [во] LT",
            lastDay: "[Вчера во] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                case 3:
                case 6:
                  return "[Изминатата] dddd [во] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[Изминатиот] dddd [во] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "за %s",
            past: "пред %s",
            s: "неколку секунди",
            ss: "%d секунди",
            m: "една минута",
            mm: "%d минути",
            h: "еден час",
            hh: "%d часа",
            d: "еден ден",
            dd: "%d дена",
            M: "еден месец",
            MM: "%d месеци",
            y: "една година",
            yy: "%d години",
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
          ordinal: function (e) {
            var a = e % 10,
              t = e % 100;
            return 0 === e
              ? e + "-ев"
              : 0 === t
                ? e + "-ен"
                : t > 10 && t < 20
                  ? e + "-ти"
                  : 1 === a
                    ? e + "-ви"
                    : 2 === a
                      ? e + "-ри"
                      : 7 === a || 8 === a
                        ? e + "-ми"
                        : e + "-ти";
          },
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    55597: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ml", {
          months:
            "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split(
              "_",
            ),
          monthsShort:
            "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split(
              "_",
            ),
          weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
          weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
          longDateFormat: {
            LT: "A h:mm -നു",
            LTS: "A h:mm:ss -നു",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm -നു",
            LLLL: "dddd, D MMMM YYYY, A h:mm -നു",
          },
          calendar: {
            sameDay: "[ഇന്ന്] LT",
            nextDay: "[നാളെ] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ഇന്നലെ] LT",
            lastWeek: "[കഴിഞ്ഞ] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s കഴിഞ്ഞ്",
            past: "%s മുൻപ്",
            s: "അൽപ നിമിഷങ്ങൾ",
            ss: "%d സെക്കൻഡ്",
            m: "ഒരു മിനിറ്റ്",
            mm: "%d മിനിറ്റ്",
            h: "ഒരു മണിക്കൂർ",
            hh: "%d മണിക്കൂർ",
            d: "ഒരു ദിവസം",
            dd: "%d ദിവസം",
            M: "ഒരു മാസം",
            MM: "%d മാസം",
            y: "ഒരു വർഷം",
            yy: "%d വർഷം",
          },
          meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              ("രാത്രി" === a && e >= 4) ||
              "ഉച്ച കഴിഞ്ഞ്" === a ||
              "വൈകുന്നേരം" === a
                ? e + 12
                : e
            );
          },
          meridiem: function (e, a, t) {
            return e < 4
              ? "രാത്രി"
              : e < 12
                ? "രാവിലെ"
                : e < 17
                  ? "ഉച്ച കഴിഞ്ഞ്"
                  : e < 20
                    ? "വൈകുന്നേരം"
                    : "രാത്രി";
          },
        });
      })(t(37485));
    },
    83610: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t, n) {
          switch (t) {
            case "s":
              return a ? "хэдхэн секунд" : "хэдхэн секундын";
            case "ss":
              return e + (a ? " секунд" : " секундын");
            case "m":
            case "mm":
              return e + (a ? " минут" : " минутын");
            case "h":
            case "hh":
              return e + (a ? " цаг" : " цагийн");
            case "d":
            case "dd":
              return e + (a ? " өдөр" : " өдрийн");
            case "M":
            case "MM":
              return e + (a ? " сар" : " сарын");
            case "y":
            case "yy":
              return e + (a ? " жил" : " жилийн");
            default:
              return e;
          }
        }
        e.defineLocale("mn", {
          months:
            "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split(
              "_",
            ),
          monthsShort:
            "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
          weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
          weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY оны MMMMын D",
            LLL: "YYYY оны MMMMын D HH:mm",
            LLLL: "dddd, YYYY оны MMMMын D HH:mm",
          },
          meridiemParse: /ҮӨ|ҮХ/i,
          isPM: function (e) {
            return "ҮХ" === e;
          },
          meridiem: function (e, a, t) {
            return e < 12 ? "ҮӨ" : "ҮХ";
          },
          calendar: {
            sameDay: "[Өнөөдөр] LT",
            nextDay: "[Маргааш] LT",
            nextWeek: "[Ирэх] dddd LT",
            lastDay: "[Өчигдөр] LT",
            lastWeek: "[Өнгөрсөн] dddd LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s дараа",
            past: "%s өмнө",
            s: a,
            ss: a,
            m: a,
            mm: a,
            h: a,
            hh: a,
            d: a,
            dd: a,
            M: a,
            MM: a,
            y: a,
            yy: a,
          },
          dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
          ordinal: function (e, a) {
            switch (a) {
              case "d":
              case "D":
              case "DDD":
                return e + " өдөр";
              default:
                return e;
            }
          },
        });
      })(t(37485));
    },
    47565: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०",
          },
          t = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0",
          };
        function n(e, a, t, n) {
          var s = "";
          if (a)
            switch (t) {
              case "s":
                s = "काही सेकंद";
                break;
              case "ss":
                s = "%d सेकंद";
                break;
              case "m":
                s = "एक मिनिट";
                break;
              case "mm":
                s = "%d मिनिटे";
                break;
              case "h":
                s = "एक तास";
                break;
              case "hh":
                s = "%d तास";
                break;
              case "d":
                s = "एक दिवस";
                break;
              case "dd":
                s = "%d दिवस";
                break;
              case "M":
                s = "एक महिना";
                break;
              case "MM":
                s = "%d महिने";
                break;
              case "y":
                s = "एक वर्ष";
                break;
              case "yy":
                s = "%d वर्षे";
            }
          else
            switch (t) {
              case "s":
                s = "काही सेकंदां";
                break;
              case "ss":
                s = "%d सेकंदां";
                break;
              case "m":
                s = "एका मिनिटा";
                break;
              case "mm":
                s = "%d मिनिटां";
                break;
              case "h":
                s = "एका तासा";
                break;
              case "hh":
                s = "%d तासां";
                break;
              case "d":
                s = "एका दिवसा";
                break;
              case "dd":
                s = "%d दिवसां";
                break;
              case "M":
                s = "एका महिन्या";
                break;
              case "MM":
                s = "%d महिन्यां";
                break;
              case "y":
                s = "एका वर्षा";
                break;
              case "yy":
                s = "%d वर्षां";
            }
          return s.replace(/%d/i, e);
        }
        e.defineLocale("mr", {
          months:
            "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split(
              "_",
            ),
          monthsShort:
            "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
          weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
          weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
          longDateFormat: {
            LT: "A h:mm वाजता",
            LTS: "A h:mm:ss वाजता",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm वाजता",
            LLLL: "dddd, D MMMM YYYY, A h:mm वाजता",
          },
          calendar: {
            sameDay: "[आज] LT",
            nextDay: "[उद्या] LT",
            nextWeek: "dddd, LT",
            lastDay: "[काल] LT",
            lastWeek: "[मागील] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%sमध्ये",
            past: "%sपूर्वी",
            s: n,
            ss: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: n,
            dd: n,
            M: n,
            MM: n,
            y: n,
            yy: n,
          },
          preparse: function (e) {
            return e.replace(/[१२३४५६७८९०]/g, function (e) {
              return t[e];
            });
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (e) {
              return a[e];
            });
          },
          meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              "पहाटे" === a || "सकाळी" === a
                ? e
                : "दुपारी" === a || "सायंकाळी" === a || "रात्री" === a
                  ? e >= 12
                    ? e
                    : e + 12
                  : void 0
            );
          },
          meridiem: function (e, a, t) {
            return e >= 0 && e < 6
              ? "पहाटे"
              : e < 12
                ? "सकाळी"
                : e < 17
                  ? "दुपारी"
                  : e < 20
                    ? "सायंकाळी"
                    : "रात्री";
          },
          week: { dow: 0, doy: 6 },
        });
      })(t(37485));
    },
    64736: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ms-my", {
          months:
            "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split(
            "_",
          ),
          weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
          weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
          weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
          },
          meridiemParse: /pagi|tengahari|petang|malam/,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              "pagi" === a
                ? e
                : "tengahari" === a
                  ? e >= 11
                    ? e
                    : e + 12
                  : "petang" === a || "malam" === a
                    ? e + 12
                    : void 0
            );
          },
          meridiem: function (e, a, t) {
            return e < 11
              ? "pagi"
              : e < 15
                ? "tengahari"
                : e < 19
                  ? "petang"
                  : "malam";
          },
          calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            ss: "%d saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun",
          },
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    7918: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ms", {
          months:
            "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split(
            "_",
          ),
          weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
          weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
          weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
          },
          meridiemParse: /pagi|tengahari|petang|malam/,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              "pagi" === a
                ? e
                : "tengahari" === a
                  ? e >= 11
                    ? e
                    : e + 12
                  : "petang" === a || "malam" === a
                    ? e + 12
                    : void 0
            );
          },
          meridiem: function (e, a, t) {
            return e < 11
              ? "pagi"
              : e < 15
                ? "tengahari"
                : e < 19
                  ? "petang"
                  : "malam";
          },
          calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            ss: "%d saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun",
          },
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    5947: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("mt", {
          months:
            "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split(
              "_",
            ),
          monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split(
            "_",
          ),
          weekdays:
            "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split(
              "_",
            ),
          weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
          weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Illum fil-]LT",
            nextDay: "[Għada fil-]LT",
            nextWeek: "dddd [fil-]LT",
            lastDay: "[Il-bieraħ fil-]LT",
            lastWeek: "dddd [li għadda] [fil-]LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "f’ %s",
            past: "%s ilu",
            s: "ftit sekondi",
            ss: "%d sekondi",
            m: "minuta",
            mm: "%d minuti",
            h: "siegħa",
            hh: "%d siegħat",
            d: "ġurnata",
            dd: "%d ġranet",
            M: "xahar",
            MM: "%d xhur",
            y: "sena",
            yy: "%d sni",
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    55624: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "၁",
            2: "၂",
            3: "၃",
            4: "၄",
            5: "၅",
            6: "၆",
            7: "၇",
            8: "၈",
            9: "၉",
            0: "၀",
          },
          t = {
            "၁": "1",
            "၂": "2",
            "၃": "3",
            "၄": "4",
            "၅": "5",
            "၆": "6",
            "၇": "7",
            "၈": "8",
            "၉": "9",
            "၀": "0",
          };
        e.defineLocale("my", {
          months:
            "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split(
              "_",
            ),
          monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split(
            "_",
          ),
          weekdays:
            "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
          weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
          weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[ယနေ.] LT [မှာ]",
            nextDay: "[မနက်ဖြန်] LT [မှာ]",
            nextWeek: "dddd LT [မှာ]",
            lastDay: "[မနေ.က] LT [မှာ]",
            lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
            sameElse: "L",
          },
          relativeTime: {
            future: "လာမည့် %s မှာ",
            past: "လွန်ခဲ့သော %s က",
            s: "စက္ကန်.အနည်းငယ်",
            ss: "%d စက္ကန့်",
            m: "တစ်မိနစ်",
            mm: "%d မိနစ်",
            h: "တစ်နာရီ",
            hh: "%d နာရီ",
            d: "တစ်ရက်",
            dd: "%d ရက်",
            M: "တစ်လ",
            MM: "%d လ",
            y: "တစ်နှစ်",
            yy: "%d နှစ်",
          },
          preparse: function (e) {
            return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
              return t[e];
            });
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (e) {
              return a[e];
            });
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    98607: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("nb", {
          months:
            "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
              "_",
            ),
          monthsShort:
            "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split(
            "_",
          ),
          weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
          weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
          },
          calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[i går kl.] LT",
            lastWeek: "[forrige] dddd [kl.] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "noen sekunder",
            ss: "%d sekunder",
            m: "ett minutt",
            mm: "%d minutter",
            h: "én time",
            hh: "%d timer",
            d: "én dag",
            dd: "%d dager",
            w: "én uke",
            ww: "%d uker",
            M: "én måned",
            MM: "%d måneder",
            y: "ett år",
            yy: "%d år",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    85457: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०",
          },
          t = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0",
          };
        e.defineLocale("ne", {
          months:
            "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split(
              "_",
            ),
          monthsShort:
            "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
          weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
          weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "Aको h:mm बजे",
            LTS: "Aको h:mm:ss बजे",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, Aको h:mm बजे",
            LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे",
          },
          preparse: function (e) {
            return e.replace(/[१२३४५६७८९०]/g, function (e) {
              return t[e];
            });
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (e) {
              return a[e];
            });
          },
          meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              "राति" === a
                ? e < 4
                  ? e
                  : e + 12
                : "बिहान" === a
                  ? e
                  : "दिउँसो" === a
                    ? e >= 10
                      ? e
                      : e + 12
                    : "साँझ" === a
                      ? e + 12
                      : void 0
            );
          },
          meridiem: function (e, a, t) {
            return e < 3
              ? "राति"
              : e < 12
                ? "बिहान"
                : e < 16
                  ? "दिउँसो"
                  : e < 20
                    ? "साँझ"
                    : "राति";
          },
          calendar: {
            sameDay: "[आज] LT",
            nextDay: "[भोलि] LT",
            nextWeek: "[आउँदो] dddd[,] LT",
            lastDay: "[हिजो] LT",
            lastWeek: "[गएको] dddd[,] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%sमा",
            past: "%s अगाडि",
            s: "केही क्षण",
            ss: "%d सेकेण्ड",
            m: "एक मिनेट",
            mm: "%d मिनेट",
            h: "एक घण्टा",
            hh: "%d घण्टा",
            d: "एक दिन",
            dd: "%d दिन",
            M: "एक महिना",
            MM: "%d महिना",
            y: "एक बर्ष",
            yy: "%d बर्ष",
          },
          week: { dow: 0, doy: 6 },
        });
      })(t(37485));
    },
    3439: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a =
            "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
              "_",
            ),
          t = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
          n = [
            /^jan/i,
            /^feb/i,
            /^(maart|mrt\.?)$/i,
            /^apr/i,
            /^mei$/i,
            /^jun[i.]?$/i,
            /^jul[i.]?$/i,
            /^aug/i,
            /^sep/i,
            /^okt/i,
            /^nov/i,
            /^dec/i,
          ],
          s =
            /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl-be", {
          months:
            "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
              "_",
            ),
          monthsShort: function (e, n) {
            return e ? (/-MMM-/.test(n) ? t[e.month()] : a[e.month()]) : a;
          },
          monthsRegex: s,
          monthsShortRegex: s,
          monthsStrictRegex:
            /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
          monthsShortStrictRegex:
            /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
          monthsParse: n,
          longMonthsParse: n,
          shortMonthsParse: n,
          weekdays:
            "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
              "_",
            ),
          weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
          weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            ss: "%d seconden",
            m: "één minuut",
            mm: "%d minuten",
            h: "één uur",
            hh: "%d uur",
            d: "één dag",
            dd: "%d dagen",
            M: "één maand",
            MM: "%d maanden",
            y: "één jaar",
            yy: "%d jaar",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function (e) {
            return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    54041: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a =
            "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
              "_",
            ),
          t = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
          n = [
            /^jan/i,
            /^feb/i,
            /^(maart|mrt\.?)$/i,
            /^apr/i,
            /^mei$/i,
            /^jun[i.]?$/i,
            /^jul[i.]?$/i,
            /^aug/i,
            /^sep/i,
            /^okt/i,
            /^nov/i,
            /^dec/i,
          ],
          s =
            /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl", {
          months:
            "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
              "_",
            ),
          monthsShort: function (e, n) {
            return e ? (/-MMM-/.test(n) ? t[e.month()] : a[e.month()]) : a;
          },
          monthsRegex: s,
          monthsShortRegex: s,
          monthsStrictRegex:
            /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
          monthsShortStrictRegex:
            /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
          monthsParse: n,
          longMonthsParse: n,
          shortMonthsParse: n,
          weekdays:
            "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
              "_",
            ),
          weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
          weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            ss: "%d seconden",
            m: "één minuut",
            mm: "%d minuten",
            h: "één uur",
            hh: "%d uur",
            d: "één dag",
            dd: "%d dagen",
            w: "één week",
            ww: "%d weken",
            M: "één maand",
            MM: "%d maanden",
            y: "één jaar",
            yy: "%d jaar",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function (e) {
            return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    82457: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("nn", {
          months:
            "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
              "_",
            ),
          monthsShort:
            "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split(
            "_",
          ),
          weekdaysShort: "su._må._ty._on._to._fr._lau.".split("_"),
          weekdaysMin: "su_må_ty_on_to_fr_la".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
          },
          calendar: {
            sameDay: "[I dag klokka] LT",
            nextDay: "[I morgon klokka] LT",
            nextWeek: "dddd [klokka] LT",
            lastDay: "[I går klokka] LT",
            lastWeek: "[Føregåande] dddd [klokka] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "om %s",
            past: "%s sidan",
            s: "nokre sekund",
            ss: "%d sekund",
            m: "eit minutt",
            mm: "%d minutt",
            h: "ein time",
            hh: "%d timar",
            d: "ein dag",
            dd: "%d dagar",
            w: "ei veke",
            ww: "%d veker",
            M: "ein månad",
            MM: "%d månader",
            y: "eit år",
            yy: "%d år",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    26236: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("oc-lnc", {
          months: {
            standalone:
              "genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split(
                "_",
              ),
            format:
              "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split(
                "_",
              ),
            isFormat: /D[oD]?(\s)+MMMM/,
          },
          monthsShort:
            "gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split(
              "_",
            ),
          weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
          weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [de] YYYY",
            ll: "D MMM YYYY",
            LLL: "D MMMM [de] YYYY [a] H:mm",
            lll: "D MMM YYYY, H:mm",
            LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
            llll: "ddd D MMM YYYY, H:mm",
          },
          calendar: {
            sameDay: "[uèi a] LT",
            nextDay: "[deman a] LT",
            nextWeek: "dddd [a] LT",
            lastDay: "[ièr a] LT",
            lastWeek: "dddd [passat a] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "d'aquí %s",
            past: "fa %s",
            s: "unas segondas",
            ss: "%d segondas",
            m: "una minuta",
            mm: "%d minutas",
            h: "una ora",
            hh: "%d oras",
            d: "un jorn",
            dd: "%d jorns",
            M: "un mes",
            MM: "%d meses",
            y: "un an",
            yy: "%d ans",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
          ordinal: function (e, a) {
            var t =
              1 === e
                ? "r"
                : 2 === e
                  ? "n"
                  : 3 === e
                    ? "r"
                    : 4 === e
                      ? "t"
                      : "è";
            return ("w" !== a && "W" !== a) || (t = "a"), e + t;
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    38772: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "੧",
            2: "੨",
            3: "੩",
            4: "੪",
            5: "੫",
            6: "੬",
            7: "੭",
            8: "੮",
            9: "੯",
            0: "੦",
          },
          t = {
            "੧": "1",
            "੨": "2",
            "੩": "3",
            "੪": "4",
            "੫": "5",
            "੬": "6",
            "੭": "7",
            "੮": "8",
            "੯": "9",
            "੦": "0",
          };
        e.defineLocale("pa-in", {
          months:
            "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split(
              "_",
            ),
          monthsShort:
            "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split(
              "_",
            ),
          weekdays:
            "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
          weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
          weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
          longDateFormat: {
            LT: "A h:mm ਵਜੇ",
            LTS: "A h:mm:ss ਵਜੇ",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
            LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ",
          },
          calendar: {
            sameDay: "[ਅਜ] LT",
            nextDay: "[ਕਲ] LT",
            nextWeek: "[ਅਗਲਾ] dddd, LT",
            lastDay: "[ਕਲ] LT",
            lastWeek: "[ਪਿਛਲੇ] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s ਵਿੱਚ",
            past: "%s ਪਿਛਲੇ",
            s: "ਕੁਝ ਸਕਿੰਟ",
            ss: "%d ਸਕਿੰਟ",
            m: "ਇਕ ਮਿੰਟ",
            mm: "%d ਮਿੰਟ",
            h: "ਇੱਕ ਘੰਟਾ",
            hh: "%d ਘੰਟੇ",
            d: "ਇੱਕ ਦਿਨ",
            dd: "%d ਦਿਨ",
            M: "ਇੱਕ ਮਹੀਨਾ",
            MM: "%d ਮਹੀਨੇ",
            y: "ਇੱਕ ਸਾਲ",
            yy: "%d ਸਾਲ",
          },
          preparse: function (e) {
            return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
              return t[e];
            });
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (e) {
              return a[e];
            });
          },
          meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              "ਰਾਤ" === a
                ? e < 4
                  ? e
                  : e + 12
                : "ਸਵੇਰ" === a
                  ? e
                  : "ਦੁਪਹਿਰ" === a
                    ? e >= 10
                      ? e
                      : e + 12
                    : "ਸ਼ਾਮ" === a
                      ? e + 12
                      : void 0
            );
          },
          meridiem: function (e, a, t) {
            return e < 4
              ? "ਰਾਤ"
              : e < 10
                ? "ਸਵੇਰ"
                : e < 17
                  ? "ਦੁਪਹਿਰ"
                  : e < 20
                    ? "ਸ਼ਾਮ"
                    : "ਰਾਤ";
          },
          week: { dow: 0, doy: 6 },
        });
      })(t(37485));
    },
    43219: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a =
            "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split(
              "_",
            ),
          t =
            "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split(
              "_",
            ),
          n = [
            /^sty/i,
            /^lut/i,
            /^mar/i,
            /^kwi/i,
            /^maj/i,
            /^cze/i,
            /^lip/i,
            /^sie/i,
            /^wrz/i,
            /^paź/i,
            /^lis/i,
            /^gru/i,
          ];
        function s(e) {
          return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
        }
        function r(e, a, t) {
          var n = e + " ";
          switch (t) {
            case "ss":
              return n + (s(e) ? "sekundy" : "sekund");
            case "m":
              return a ? "minuta" : "minutę";
            case "mm":
              return n + (s(e) ? "minuty" : "minut");
            case "h":
              return a ? "godzina" : "godzinę";
            case "hh":
              return n + (s(e) ? "godziny" : "godzin");
            case "ww":
              return n + (s(e) ? "tygodnie" : "tygodni");
            case "MM":
              return n + (s(e) ? "miesiące" : "miesięcy");
            case "yy":
              return n + (s(e) ? "lata" : "lat");
          }
        }
        e.defineLocale("pl", {
          months: function (e, n) {
            return e ? (/D MMMM/.test(n) ? t[e.month()] : a[e.month()]) : a;
          },
          monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split(
            "_",
          ),
          monthsParse: n,
          longMonthsParse: n,
          shortMonthsParse: n,
          weekdays:
            "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split(
              "_",
            ),
          weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
          weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Dziś o] LT",
            nextDay: "[Jutro o] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[W niedzielę o] LT";
                case 2:
                  return "[We wtorek o] LT";
                case 3:
                  return "[W środę o] LT";
                case 6:
                  return "[W sobotę o] LT";
                default:
                  return "[W] dddd [o] LT";
              }
            },
            lastDay: "[Wczoraj o] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[W zeszłą niedzielę o] LT";
                case 3:
                  return "[W zeszłą środę o] LT";
                case 6:
                  return "[W zeszłą sobotę o] LT";
                default:
                  return "[W zeszły] dddd [o] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "%s temu",
            s: "kilka sekund",
            ss: r,
            m: r,
            mm: r,
            h: r,
            hh: r,
            d: "1 dzień",
            dd: "%d dni",
            w: "tydzień",
            ww: r,
            M: "miesiąc",
            MM: r,
            y: "rok",
            yy: r,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    10376: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("pt-br", {
          months:
            "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
              "_",
            ),
          monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split(
            "_",
          ),
          weekdays:
            "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split(
              "_",
            ),
          weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
          weekdaysMin: "do_2ª_3ª_4ª_5ª_6ª_sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm",
          },
          calendar: {
            sameDay: "[Hoje às] LT",
            nextDay: "[Amanhã às] LT",
            nextWeek: "dddd [às] LT",
            lastDay: "[Ontem às] LT",
            lastWeek: function () {
              return 0 === this.day() || 6 === this.day()
                ? "[Último] dddd [às] LT"
                : "[Última] dddd [às] LT";
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "em %s",
            past: "há %s",
            s: "poucos segundos",
            ss: "%d segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um mês",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos",
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          invalidDate: "Data inválida",
        });
      })(t(37485));
    },
    31071: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("pt", {
          months:
            "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
              "_",
            ),
          monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split(
            "_",
          ),
          weekdays:
            "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split(
              "_",
            ),
          weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
          weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Hoje às] LT",
            nextDay: "[Amanhã às] LT",
            nextWeek: "dddd [às] LT",
            lastDay: "[Ontem às] LT",
            lastWeek: function () {
              return 0 === this.day() || 6 === this.day()
                ? "[Último] dddd [às] LT"
                : "[Última] dddd [às] LT";
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "em %s",
            past: "há %s",
            s: "segundos",
            ss: "%d segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            w: "uma semana",
            ww: "%d semanas",
            M: "um mês",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos",
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: "%dº",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    43551: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t) {
          var n = " ";
          return (
            (e % 100 >= 20 || (e >= 100 && e % 100 == 0)) && (n = " de "),
            e +
              n +
              {
                ss: "secunde",
                mm: "minute",
                hh: "ore",
                dd: "zile",
                ww: "săptămâni",
                MM: "luni",
                yy: "ani",
              }[t]
          );
        }
        e.defineLocale("ro", {
          months:
            "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split(
              "_",
            ),
          monthsShort:
            "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split(
            "_",
          ),
          weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
          weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[azi la] LT",
            nextDay: "[mâine la] LT",
            nextWeek: "dddd [la] LT",
            lastDay: "[ieri la] LT",
            lastWeek: "[fosta] dddd [la] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "peste %s",
            past: "%s în urmă",
            s: "câteva secunde",
            ss: a,
            m: "un minut",
            mm: a,
            h: "o oră",
            hh: a,
            d: "o zi",
            dd: a,
            w: "o săptămână",
            ww: a,
            M: "o lună",
            MM: a,
            y: "un an",
            yy: a,
          },
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    878: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a) {
          var t = e.split("_");
          return a % 10 == 1 && a % 100 != 11
            ? t[0]
            : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)
              ? t[1]
              : t[2];
        }
        function t(e, t, n) {
          return "m" === n
            ? t
              ? "минута"
              : "минуту"
            : e +
                " " +
                a(
                  {
                    ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                    mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                    hh: "час_часа_часов",
                    dd: "день_дня_дней",
                    ww: "неделя_недели_недель",
                    MM: "месяц_месяца_месяцев",
                    yy: "год_года_лет",
                  }[n],
                  +e,
                );
        }
        var n = [
          /^янв/i,
          /^фев/i,
          /^мар/i,
          /^апр/i,
          /^ма[йя]/i,
          /^июн/i,
          /^июл/i,
          /^авг/i,
          /^сен/i,
          /^окт/i,
          /^ноя/i,
          /^дек/i,
        ];
        e.defineLocale("ru", {
          months: {
            format:
              "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split(
                "_",
              ),
            standalone:
              "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split(
                "_",
              ),
          },
          monthsShort: {
            format:
              "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split(
                "_",
              ),
            standalone:
              "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split(
                "_",
              ),
          },
          weekdays: {
            standalone:
              "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split(
                "_",
              ),
            format:
              "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split(
                "_",
              ),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/,
          },
          weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
          weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
          monthsParse: n,
          longMonthsParse: n,
          shortMonthsParse: n,
          monthsRegex:
            /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
          monthsShortRegex:
            /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
          monthsStrictRegex:
            /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
          monthsShortStrictRegex:
            /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., H:mm",
            LLLL: "dddd, D MMMM YYYY г., H:mm",
          },
          calendar: {
            sameDay: "[Сегодня, в] LT",
            nextDay: "[Завтра, в] LT",
            lastDay: "[Вчера, в] LT",
            nextWeek: function (e) {
              if (e.week() === this.week())
                return 2 === this.day()
                  ? "[Во] dddd, [в] LT"
                  : "[В] dddd, [в] LT";
              switch (this.day()) {
                case 0:
                  return "[В следующее] dddd, [в] LT";
                case 1:
                case 2:
                case 4:
                  return "[В следующий] dddd, [в] LT";
                case 3:
                case 5:
                case 6:
                  return "[В следующую] dddd, [в] LT";
              }
            },
            lastWeek: function (e) {
              if (e.week() === this.week())
                return 2 === this.day()
                  ? "[Во] dddd, [в] LT"
                  : "[В] dddd, [в] LT";
              switch (this.day()) {
                case 0:
                  return "[В прошлое] dddd, [в] LT";
                case 1:
                case 2:
                case 4:
                  return "[В прошлый] dddd, [в] LT";
                case 3:
                case 5:
                case 6:
                  return "[В прошлую] dddd, [в] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "через %s",
            past: "%s назад",
            s: "несколько секунд",
            ss: t,
            m: t,
            mm: t,
            h: "час",
            hh: t,
            d: "день",
            dd: t,
            w: "неделя",
            ww: t,
            M: "месяц",
            MM: t,
            y: "год",
            yy: t,
          },
          meridiemParse: /ночи|утра|дня|вечера/i,
          isPM: function (e) {
            return /^(дня|вечера)$/.test(e);
          },
          meridiem: function (e, a, t) {
            return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
          ordinal: function (e, a) {
            switch (a) {
              case "M":
              case "d":
              case "DDD":
                return e + "-й";
              case "D":
                return e + "-го";
              case "w":
              case "W":
                return e + "-я";
              default:
                return e;
            }
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    93332: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = [
            "جنوري",
            "فيبروري",
            "مارچ",
            "اپريل",
            "مئي",
            "جون",
            "جولاءِ",
            "آگسٽ",
            "سيپٽمبر",
            "آڪٽوبر",
            "نومبر",
            "ڊسمبر",
          ],
          t = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
        e.defineLocale("sd", {
          months: a,
          monthsShort: a,
          weekdays: t,
          weekdaysShort: t,
          weekdaysMin: t,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd، D MMMM YYYY HH:mm",
          },
          meridiemParse: /صبح|شام/,
          isPM: function (e) {
            return "شام" === e;
          },
          meridiem: function (e, a, t) {
            return e < 12 ? "صبح" : "شام";
          },
          calendar: {
            sameDay: "[اڄ] LT",
            nextDay: "[سڀاڻي] LT",
            nextWeek: "dddd [اڳين هفتي تي] LT",
            lastDay: "[ڪالهه] LT",
            lastWeek: "[گزريل هفتي] dddd [تي] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s پوء",
            past: "%s اڳ",
            s: "چند سيڪنڊ",
            ss: "%d سيڪنڊ",
            m: "هڪ منٽ",
            mm: "%d منٽ",
            h: "هڪ ڪلاڪ",
            hh: "%d ڪلاڪ",
            d: "هڪ ڏينهن",
            dd: "%d ڏينهن",
            M: "هڪ مهينو",
            MM: "%d مهينا",
            y: "هڪ سال",
            yy: "%d سال",
          },
          preparse: function (e) {
            return e.replace(/،/g, ",");
          },
          postformat: function (e) {
            return e.replace(/,/g, "،");
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    55268: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("se", {
          months:
            "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split(
              "_",
            ),
          monthsShort:
            "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split(
              "_",
            ),
          weekdays:
            "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split(
              "_",
            ),
          weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
          weekdaysMin: "s_v_m_g_d_b_L".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "MMMM D. [b.] YYYY",
            LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
            LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm",
          },
          calendar: {
            sameDay: "[otne ti] LT",
            nextDay: "[ihttin ti] LT",
            nextWeek: "dddd [ti] LT",
            lastDay: "[ikte ti] LT",
            lastWeek: "[ovddit] dddd [ti] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s geažes",
            past: "maŋit %s",
            s: "moadde sekunddat",
            ss: "%d sekunddat",
            m: "okta minuhta",
            mm: "%d minuhtat",
            h: "okta diimmu",
            hh: "%d diimmut",
            d: "okta beaivi",
            dd: "%d beaivvit",
            M: "okta mánnu",
            MM: "%d mánut",
            y: "okta jahki",
            yy: "%d jagit",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    87050: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("si", {
          months:
            "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split(
              "_",
            ),
          monthsShort:
            "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
          weekdays:
            "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split(
              "_",
            ),
          weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
          weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "a h:mm",
            LTS: "a h:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY MMMM D",
            LLL: "YYYY MMMM D, a h:mm",
            LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss",
          },
          calendar: {
            sameDay: "[අද] LT[ට]",
            nextDay: "[හෙට] LT[ට]",
            nextWeek: "dddd LT[ට]",
            lastDay: "[ඊයේ] LT[ට]",
            lastWeek: "[පසුගිය] dddd LT[ට]",
            sameElse: "L",
          },
          relativeTime: {
            future: "%sකින්",
            past: "%sකට පෙර",
            s: "තත්පර කිහිපය",
            ss: "තත්පර %d",
            m: "මිනිත්තුව",
            mm: "මිනිත්තු %d",
            h: "පැය",
            hh: "පැය %d",
            d: "දිනය",
            dd: "දින %d",
            M: "මාසය",
            MM: "මාස %d",
            y: "වසර",
            yy: "වසර %d",
          },
          dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
          ordinal: function (e) {
            return e + " වැනි";
          },
          meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
          isPM: function (e) {
            return "ප.ව." === e || "පස් වරු" === e;
          },
          meridiem: function (e, a, t) {
            return e > 11 ? (t ? "ප.ව." : "පස් වරු") : t ? "පෙ.ව." : "පෙර වරු";
          },
        });
      })(t(37485));
    },
    46201: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a =
            "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split(
              "_",
            ),
          t = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
        function n(e) {
          return e > 1 && e < 5;
        }
        function s(e, a, t, s) {
          var r = e + " ";
          switch (t) {
            case "s":
              return a || s ? "pár sekúnd" : "pár sekundami";
            case "ss":
              return a || s
                ? r + (n(e) ? "sekundy" : "sekúnd")
                : r + "sekundami";
            case "m":
              return a ? "minúta" : s ? "minútu" : "minútou";
            case "mm":
              return a || s ? r + (n(e) ? "minúty" : "minút") : r + "minútami";
            case "h":
              return a ? "hodina" : s ? "hodinu" : "hodinou";
            case "hh":
              return a || s ? r + (n(e) ? "hodiny" : "hodín") : r + "hodinami";
            case "d":
              return a || s ? "deň" : "dňom";
            case "dd":
              return a || s ? r + (n(e) ? "dni" : "dní") : r + "dňami";
            case "M":
              return a || s ? "mesiac" : "mesiacom";
            case "MM":
              return a || s
                ? r + (n(e) ? "mesiace" : "mesiacov")
                : r + "mesiacmi";
            case "y":
              return a || s ? "rok" : "rokom";
            case "yy":
              return a || s ? r + (n(e) ? "roky" : "rokov") : r + "rokmi";
          }
        }
        e.defineLocale("sk", {
          months: a,
          monthsShort: t,
          weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split(
            "_",
          ),
          weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
          weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[dnes o] LT",
            nextDay: "[zajtra o] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[v nedeľu o] LT";
                case 1:
                case 2:
                  return "[v] dddd [o] LT";
                case 3:
                  return "[v stredu o] LT";
                case 4:
                  return "[vo štvrtok o] LT";
                case 5:
                  return "[v piatok o] LT";
                case 6:
                  return "[v sobotu o] LT";
              }
            },
            lastDay: "[včera o] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[minulú nedeľu o] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[minulý] dddd [o] LT";
                case 3:
                  return "[minulú stredu o] LT";
                case 6:
                  return "[minulú sobotu o] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "pred %s",
            s,
            ss: s,
            m: s,
            mm: s,
            h: s,
            hh: s,
            d: s,
            dd: s,
            M: s,
            MM: s,
            y: s,
            yy: s,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    96675: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t, n) {
          var s = e + " ";
          switch (t) {
            case "s":
              return a || n ? "nekaj sekund" : "nekaj sekundami";
            case "ss":
              return (s +=
                1 === e
                  ? a
                    ? "sekundo"
                    : "sekundi"
                  : 2 === e
                    ? a || n
                      ? "sekundi"
                      : "sekundah"
                    : e < 5
                      ? a || n
                        ? "sekunde"
                        : "sekundah"
                      : "sekund");
            case "m":
              return a ? "ena minuta" : "eno minuto";
            case "mm":
              return (s +=
                1 === e
                  ? a
                    ? "minuta"
                    : "minuto"
                  : 2 === e
                    ? a || n
                      ? "minuti"
                      : "minutama"
                    : e < 5
                      ? a || n
                        ? "minute"
                        : "minutami"
                      : a || n
                        ? "minut"
                        : "minutami");
            case "h":
              return a ? "ena ura" : "eno uro";
            case "hh":
              return (s +=
                1 === e
                  ? a
                    ? "ura"
                    : "uro"
                  : 2 === e
                    ? a || n
                      ? "uri"
                      : "urama"
                    : e < 5
                      ? a || n
                        ? "ure"
                        : "urami"
                      : a || n
                        ? "ur"
                        : "urami");
            case "d":
              return a || n ? "en dan" : "enim dnem";
            case "dd":
              return (s +=
                1 === e
                  ? a || n
                    ? "dan"
                    : "dnem"
                  : 2 === e
                    ? a || n
                      ? "dni"
                      : "dnevoma"
                    : a || n
                      ? "dni"
                      : "dnevi");
            case "M":
              return a || n ? "en mesec" : "enim mesecem";
            case "MM":
              return (s +=
                1 === e
                  ? a || n
                    ? "mesec"
                    : "mesecem"
                  : 2 === e
                    ? a || n
                      ? "meseca"
                      : "mesecema"
                    : e < 5
                      ? a || n
                        ? "mesece"
                        : "meseci"
                      : a || n
                        ? "mesecev"
                        : "meseci");
            case "y":
              return a || n ? "eno leto" : "enim letom";
            case "yy":
              return (s +=
                1 === e
                  ? a || n
                    ? "leto"
                    : "letom"
                  : 2 === e
                    ? a || n
                      ? "leti"
                      : "letoma"
                    : e < 5
                      ? a || n
                        ? "leta"
                        : "leti"
                      : a || n
                        ? "let"
                        : "leti");
          }
        }
        e.defineLocale("sl", {
          months:
            "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split(
              "_",
            ),
          monthsShort:
            "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split(
            "_",
          ),
          weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
          weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD. MM. YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm",
          },
          calendar: {
            sameDay: "[danes ob] LT",
            nextDay: "[jutri ob] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[v] [nedeljo] [ob] LT";
                case 3:
                  return "[v] [sredo] [ob] LT";
                case 6:
                  return "[v] [soboto] [ob] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[v] dddd [ob] LT";
              }
            },
            lastDay: "[včeraj ob] LT",
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[prejšnjo] [nedeljo] [ob] LT";
                case 3:
                  return "[prejšnjo] [sredo] [ob] LT";
                case 6:
                  return "[prejšnjo] [soboto] [ob] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[prejšnji] dddd [ob] LT";
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "čez %s",
            past: "pred %s",
            s: a,
            ss: a,
            m: a,
            mm: a,
            h: a,
            hh: a,
            d: a,
            dd: a,
            M: a,
            MM: a,
            y: a,
            yy: a,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    27632: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("sq", {
          months:
            "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split(
              "_",
            ),
          monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split(
            "_",
          ),
          weekdays:
            "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split(
              "_",
            ),
          weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
          weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
          weekdaysParseExact: !0,
          meridiemParse: /PD|MD/,
          isPM: function (e) {
            return "M" === e.charAt(0);
          },
          meridiem: function (e, a, t) {
            return e < 12 ? "PD" : "MD";
          },
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Sot në] LT",
            nextDay: "[Nesër në] LT",
            nextWeek: "dddd [në] LT",
            lastDay: "[Dje në] LT",
            lastWeek: "dddd [e kaluar në] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "në %s",
            past: "%s më parë",
            s: "disa sekonda",
            ss: "%d sekonda",
            m: "një minutë",
            mm: "%d minuta",
            h: "një orë",
            hh: "%d orë",
            d: "një ditë",
            dd: "%d ditë",
            M: "një muaj",
            MM: "%d muaj",
            y: "një vit",
            yy: "%d vite",
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    40617: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
          words: {
            ss: ["секунда", "секунде", "секунди"],
            m: ["један минут", "једног минута"],
            mm: ["минут", "минута", "минута"],
            h: ["један сат", "једног сата"],
            hh: ["сат", "сата", "сати"],
            d: ["један дан", "једног дана"],
            dd: ["дан", "дана", "дана"],
            M: ["један месец", "једног месеца"],
            MM: ["месец", "месеца", "месеци"],
            y: ["једну годину", "једне године"],
            yy: ["годину", "године", "година"],
          },
          correctGrammaticalCase: function (e, a) {
            return e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
              ? e % 10 == 1
                ? a[0]
                : a[1]
              : a[2];
          },
          translate: function (e, t, n, s) {
            var r,
              i = a.words[n];
            return 1 === n.length
              ? "y" === n && t
                ? "једна година"
                : s || t
                  ? i[0]
                  : i[1]
              : ((r = a.correctGrammaticalCase(e, i)),
                "yy" === n && t && "годину" === r
                  ? e + " година"
                  : e + " " + r);
          },
        };
        e.defineLocale("sr-cyrl", {
          months:
            "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split(
              "_",
            ),
          monthsShort:
            "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split(
            "_",
          ),
          weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
          weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D. M. YYYY.",
            LL: "D. MMMM YYYY.",
            LLL: "D. MMMM YYYY. H:mm",
            LLLL: "dddd, D. MMMM YYYY. H:mm",
          },
          calendar: {
            sameDay: "[данас у] LT",
            nextDay: "[сутра у] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[у] [недељу] [у] LT";
                case 3:
                  return "[у] [среду] [у] LT";
                case 6:
                  return "[у] [суботу] [у] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[у] dddd [у] LT";
              }
            },
            lastDay: "[јуче у] LT",
            lastWeek: function () {
              return [
                "[прошле] [недеље] [у] LT",
                "[прошлог] [понедељка] [у] LT",
                "[прошлог] [уторка] [у] LT",
                "[прошле] [среде] [у] LT",
                "[прошлог] [четвртка] [у] LT",
                "[прошлог] [петка] [у] LT",
                "[прошле] [суботе] [у] LT",
              ][this.day()];
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "за %s",
            past: "пре %s",
            s: "неколико секунди",
            ss: a.translate,
            m: a.translate,
            mm: a.translate,
            h: a.translate,
            hh: a.translate,
            d: a.translate,
            dd: a.translate,
            M: a.translate,
            MM: a.translate,
            y: a.translate,
            yy: a.translate,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    83419: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
          words: {
            ss: ["sekunda", "sekunde", "sekundi"],
            m: ["jedan minut", "jednog minuta"],
            mm: ["minut", "minuta", "minuta"],
            h: ["jedan sat", "jednog sata"],
            hh: ["sat", "sata", "sati"],
            d: ["jedan dan", "jednog dana"],
            dd: ["dan", "dana", "dana"],
            M: ["jedan mesec", "jednog meseca"],
            MM: ["mesec", "meseca", "meseci"],
            y: ["jednu godinu", "jedne godine"],
            yy: ["godinu", "godine", "godina"],
          },
          correctGrammaticalCase: function (e, a) {
            return e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
              ? e % 10 == 1
                ? a[0]
                : a[1]
              : a[2];
          },
          translate: function (e, t, n, s) {
            var r,
              i = a.words[n];
            return 1 === n.length
              ? "y" === n && t
                ? "jedna godina"
                : s || t
                  ? i[0]
                  : i[1]
              : ((r = a.correctGrammaticalCase(e, i)),
                "yy" === n && t && "godinu" === r
                  ? e + " godina"
                  : e + " " + r);
          },
        };
        e.defineLocale("sr", {
          months:
            "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
              "_",
            ),
          monthsShort:
            "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
          weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D. M. YYYY.",
            LL: "D. MMMM YYYY.",
            LLL: "D. MMMM YYYY. H:mm",
            LLLL: "dddd, D. MMMM YYYY. H:mm",
          },
          calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function () {
              switch (this.day()) {
                case 0:
                  return "[u] [nedelju] [u] LT";
                case 3:
                  return "[u] [sredu] [u] LT";
                case 6:
                  return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[u] dddd [u] LT";
              }
            },
            lastDay: "[juče u] LT",
            lastWeek: function () {
              return [
                "[prošle] [nedelje] [u] LT",
                "[prošlog] [ponedeljka] [u] LT",
                "[prošlog] [utorka] [u] LT",
                "[prošle] [srede] [u] LT",
                "[prošlog] [četvrtka] [u] LT",
                "[prošlog] [petka] [u] LT",
                "[prošle] [subote] [u] LT",
              ][this.day()];
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "za %s",
            past: "pre %s",
            s: "nekoliko sekundi",
            ss: a.translate,
            m: a.translate,
            mm: a.translate,
            h: a.translate,
            hh: a.translate,
            d: a.translate,
            dd: a.translate,
            M: a.translate,
            MM: a.translate,
            y: a.translate,
            yy: a.translate,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    65321: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ss", {
          months:
            "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split(
              "_",
            ),
          monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split(
            "_",
          ),
          weekdays:
            "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split(
              "_",
            ),
          weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
          weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A",
          },
          calendar: {
            sameDay: "[Namuhla nga] LT",
            nextDay: "[Kusasa nga] LT",
            nextWeek: "dddd [nga] LT",
            lastDay: "[Itolo nga] LT",
            lastWeek: "dddd [leliphelile] [nga] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "nga %s",
            past: "wenteka nga %s",
            s: "emizuzwana lomcane",
            ss: "%d mzuzwana",
            m: "umzuzu",
            mm: "%d emizuzu",
            h: "lihora",
            hh: "%d emahora",
            d: "lilanga",
            dd: "%d emalanga",
            M: "inyanga",
            MM: "%d tinyanga",
            y: "umnyaka",
            yy: "%d iminyaka",
          },
          meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
          meridiem: function (e, a, t) {
            return e < 11
              ? "ekuseni"
              : e < 15
                ? "emini"
                : e < 19
                  ? "entsambama"
                  : "ebusuku";
          },
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              "ekuseni" === a
                ? e
                : "emini" === a
                  ? e >= 11
                    ? e
                    : e + 12
                  : "entsambama" === a || "ebusuku" === a
                    ? 0 === e
                      ? 0
                      : e + 12
                    : void 0
            );
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: "%d",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    52765: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("sv", {
          months:
            "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split(
              "_",
            ),
          monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split(
            "_",
          ),
          weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split(
            "_",
          ),
          weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
          weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd D MMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Idag] LT",
            nextDay: "[Imorgon] LT",
            lastDay: "[Igår] LT",
            nextWeek: "[På] dddd LT",
            lastWeek: "[I] dddd[s] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "om %s",
            past: "för %s sedan",
            s: "några sekunder",
            ss: "%d sekunder",
            m: "en minut",
            mm: "%d minuter",
            h: "en timme",
            hh: "%d timmar",
            d: "en dag",
            dd: "%d dagar",
            M: "en månad",
            MM: "%d månader",
            y: "ett år",
            yy: "%d år",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
          ordinal: function (e) {
            var a = e % 10;
            return (
              e +
              (1 == ~~((e % 100) / 10)
                ? ":e"
                : 1 === a || 2 === a
                  ? ":a"
                  : ":e")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    32831: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("sw", {
          months:
            "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split(
              "_",
            ),
          monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split(
            "_",
          ),
          weekdays:
            "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split(
              "_",
            ),
          weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
          weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "hh:mm A",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[leo saa] LT",
            nextDay: "[kesho saa] LT",
            nextWeek: "[wiki ijayo] dddd [saat] LT",
            lastDay: "[jana] LT",
            lastWeek: "[wiki iliyopita] dddd [saat] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s baadaye",
            past: "tokea %s",
            s: "hivi punde",
            ss: "sekunde %d",
            m: "dakika moja",
            mm: "dakika %d",
            h: "saa limoja",
            hh: "masaa %d",
            d: "siku moja",
            dd: "siku %d",
            M: "mwezi mmoja",
            MM: "miezi %d",
            y: "mwaka mmoja",
            yy: "miaka %d",
          },
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    77530: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
            1: "௧",
            2: "௨",
            3: "௩",
            4: "௪",
            5: "௫",
            6: "௬",
            7: "௭",
            8: "௮",
            9: "௯",
            0: "௦",
          },
          t = {
            "௧": "1",
            "௨": "2",
            "௩": "3",
            "௪": "4",
            "௫": "5",
            "௬": "6",
            "௭": "7",
            "௮": "8",
            "௯": "9",
            "௦": "0",
          };
        e.defineLocale("ta", {
          months:
            "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split(
              "_",
            ),
          monthsShort:
            "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split(
              "_",
            ),
          weekdays:
            "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split(
              "_",
            ),
          weekdaysShort:
            "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
          weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, HH:mm",
            LLLL: "dddd, D MMMM YYYY, HH:mm",
          },
          calendar: {
            sameDay: "[இன்று] LT",
            nextDay: "[நாளை] LT",
            nextWeek: "dddd, LT",
            lastDay: "[நேற்று] LT",
            lastWeek: "[கடந்த வாரம்] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s இல்",
            past: "%s முன்",
            s: "ஒரு சில விநாடிகள்",
            ss: "%d விநாடிகள்",
            m: "ஒரு நிமிடம்",
            mm: "%d நிமிடங்கள்",
            h: "ஒரு மணி நேரம்",
            hh: "%d மணி நேரம்",
            d: "ஒரு நாள்",
            dd: "%d நாட்கள்",
            M: "ஒரு மாதம்",
            MM: "%d மாதங்கள்",
            y: "ஒரு வருடம்",
            yy: "%d ஆண்டுகள்",
          },
          dayOfMonthOrdinalParse: /\d{1,2}வது/,
          ordinal: function (e) {
            return e + "வது";
          },
          preparse: function (e) {
            return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
              return t[e];
            });
          },
          postformat: function (e) {
            return e.replace(/\d/g, function (e) {
              return a[e];
            });
          },
          meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
          meridiem: function (e, a, t) {
            return e < 2
              ? " யாமம்"
              : e < 6
                ? " வைகறை"
                : e < 10
                  ? " காலை"
                  : e < 14
                    ? " நண்பகல்"
                    : e < 18
                      ? " எற்பாடு"
                      : e < 22
                        ? " மாலை"
                        : " யாமம்";
          },
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              "யாமம்" === a
                ? e < 2
                  ? e
                  : e + 12
                : "வைகறை" === a || "காலை" === a || ("நண்பகல்" === a && e >= 10)
                  ? e
                  : e + 12
            );
          },
          week: { dow: 0, doy: 6 },
        });
      })(t(37485));
    },
    26726: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("te", {
          months:
            "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split(
              "_",
            ),
          monthsShort:
            "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split(
              "_",
            ),
          weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
          weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
          longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm",
          },
          calendar: {
            sameDay: "[నేడు] LT",
            nextDay: "[రేపు] LT",
            nextWeek: "dddd, LT",
            lastDay: "[నిన్న] LT",
            lastWeek: "[గత] dddd, LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s లో",
            past: "%s క్రితం",
            s: "కొన్ని క్షణాలు",
            ss: "%d సెకన్లు",
            m: "ఒక నిమిషం",
            mm: "%d నిమిషాలు",
            h: "ఒక గంట",
            hh: "%d గంటలు",
            d: "ఒక రోజు",
            dd: "%d రోజులు",
            M: "ఒక నెల",
            MM: "%d నెలలు",
            y: "ఒక సంవత్సరం",
            yy: "%d సంవత్సరాలు",
          },
          dayOfMonthOrdinalParse: /\d{1,2}వ/,
          ordinal: "%dవ",
          meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              "రాత్రి" === a
                ? e < 4
                  ? e
                  : e + 12
                : "ఉదయం" === a
                  ? e
                  : "మధ్యాహ్నం" === a
                    ? e >= 10
                      ? e
                      : e + 12
                    : "సాయంత్రం" === a
                      ? e + 12
                      : void 0
            );
          },
          meridiem: function (e, a, t) {
            return e < 4
              ? "రాత్రి"
              : e < 10
                ? "ఉదయం"
                : e < 17
                  ? "మధ్యాహ్నం"
                  : e < 20
                    ? "సాయంత్రం"
                    : "రాత్రి";
          },
          week: { dow: 0, doy: 6 },
        });
      })(t(37485));
    },
    35763: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("tet", {
          months:
            "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split(
              "_",
            ),
          monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split(
            "_",
          ),
          weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split(
            "_",
          ),
          weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
          weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Ohin iha] LT",
            nextDay: "[Aban iha] LT",
            nextWeek: "dddd [iha] LT",
            lastDay: "[Horiseik iha] LT",
            lastWeek: "dddd [semana kotuk] [iha] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "iha %s",
            past: "%s liuba",
            s: "segundu balun",
            ss: "segundu %d",
            m: "minutu ida",
            mm: "minutu %d",
            h: "oras ida",
            hh: "oras %d",
            d: "loron ida",
            dd: "loron %d",
            M: "fulan ida",
            MM: "fulan %d",
            y: "tinan ida",
            yy: "tinan %d",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function (e) {
            var a = e % 10;
            return (
              e +
              (1 == ~~((e % 100) / 10)
                ? "th"
                : 1 === a
                  ? "st"
                  : 2 === a
                    ? "nd"
                    : 3 === a
                      ? "rd"
                      : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    48165: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
          0: "-ум",
          1: "-ум",
          2: "-юм",
          3: "-юм",
          4: "-ум",
          5: "-ум",
          6: "-ум",
          7: "-ум",
          8: "-ум",
          9: "-ум",
          10: "-ум",
          12: "-ум",
          13: "-ум",
          20: "-ум",
          30: "-юм",
          40: "-ум",
          50: "-ум",
          60: "-ум",
          70: "-ум",
          80: "-ум",
          90: "-ум",
          100: "-ум",
        };
        e.defineLocale("tg", {
          months: {
            format:
              "январи_феврали_марти_апрели_майи_июни_июли_августи_сентябри_октябри_ноябри_декабри".split(
                "_",
              ),
            standalone:
              "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split(
                "_",
              ),
          },
          monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split(
            "_",
          ),
          weekdays:
            "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
          weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
          weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Имрӯз соати] LT",
            nextDay: "[Фардо соати] LT",
            lastDay: "[Дирӯз соати] LT",
            nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
            lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "баъди %s",
            past: "%s пеш",
            s: "якчанд сония",
            m: "як дақиқа",
            mm: "%d дақиқа",
            h: "як соат",
            hh: "%d соат",
            d: "як рӯз",
            dd: "%d рӯз",
            M: "як моҳ",
            MM: "%d моҳ",
            y: "як сол",
            yy: "%d сол",
          },
          meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              "шаб" === a
                ? e < 4
                  ? e
                  : e + 12
                : "субҳ" === a
                  ? e
                  : "рӯз" === a
                    ? e >= 11
                      ? e
                      : e + 12
                    : "бегоҳ" === a
                      ? e + 12
                      : void 0
            );
          },
          meridiem: function (e, a, t) {
            return e < 4
              ? "шаб"
              : e < 11
                ? "субҳ"
                : e < 16
                  ? "рӯз"
                  : e < 19
                    ? "бегоҳ"
                    : "шаб";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
          ordinal: function (e) {
            var t = e % 10,
              n = e >= 100 ? 100 : null;
            return e + (a[e] || a[t] || a[n]);
          },
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    99496: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("th", {
          months:
            "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split(
              "_",
            ),
          monthsShort:
            "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
          weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split(
            "_",
          ),
          weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY เวลา H:mm",
            LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm",
          },
          meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
          isPM: function (e) {
            return "หลังเที่ยง" === e;
          },
          meridiem: function (e, a, t) {
            return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง";
          },
          calendar: {
            sameDay: "[วันนี้ เวลา] LT",
            nextDay: "[พรุ่งนี้ เวลา] LT",
            nextWeek: "dddd[หน้า เวลา] LT",
            lastDay: "[เมื่อวานนี้ เวลา] LT",
            lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "อีก %s",
            past: "%sที่แล้ว",
            s: "ไม่กี่วินาที",
            ss: "%d วินาที",
            m: "1 นาที",
            mm: "%d นาที",
            h: "1 ชั่วโมง",
            hh: "%d ชั่วโมง",
            d: "1 วัน",
            dd: "%d วัน",
            w: "1 สัปดาห์",
            ww: "%d สัปดาห์",
            M: "1 เดือน",
            MM: "%d เดือน",
            y: "1 ปี",
            yy: "%d ปี",
          },
        });
      })(t(37485));
    },
    58573: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
          1: "'inji",
          5: "'inji",
          8: "'inji",
          70: "'inji",
          80: "'inji",
          2: "'nji",
          7: "'nji",
          20: "'nji",
          50: "'nji",
          3: "'ünji",
          4: "'ünji",
          100: "'ünji",
          6: "'njy",
          9: "'unjy",
          10: "'unjy",
          30: "'unjy",
          60: "'ynjy",
          90: "'ynjy",
        };
        e.defineLocale("tk", {
          months:
            "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split(
              "_",
            ),
          monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split(
            "_",
          ),
          weekdays:
            "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split("_"),
          weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),
          weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[bugün sagat] LT",
            nextDay: "[ertir sagat] LT",
            nextWeek: "[indiki] dddd [sagat] LT",
            lastDay: "[düýn] LT",
            lastWeek: "[geçen] dddd [sagat] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s soň",
            past: "%s öň",
            s: "birnäçe sekunt",
            m: "bir minut",
            mm: "%d minut",
            h: "bir sagat",
            hh: "%d sagat",
            d: "bir gün",
            dd: "%d gün",
            M: "bir aý",
            MM: "%d aý",
            y: "bir ýyl",
            yy: "%d ýyl",
          },
          ordinal: function (e, t) {
            switch (t) {
              case "d":
              case "D":
              case "Do":
              case "DD":
                return e;
              default:
                if (0 === e) return e + "'unjy";
                var n = e % 10,
                  s = (e % 100) - n,
                  r = e >= 100 ? 100 : null;
                return e + (a[n] || a[s] || a[r]);
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    74742: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("tl-ph", {
          months:
            "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split(
              "_",
            ),
          monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split(
            "_",
          ),
          weekdays:
            "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
          weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
          weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "MM/D/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY HH:mm",
            LLLL: "dddd, MMMM DD, YYYY HH:mm",
          },
          calendar: {
            sameDay: "LT [ngayong araw]",
            nextDay: "[Bukas ng] LT",
            nextWeek: "LT [sa susunod na] dddd",
            lastDay: "LT [kahapon]",
            lastWeek: "LT [noong nakaraang] dddd",
            sameElse: "L",
          },
          relativeTime: {
            future: "sa loob ng %s",
            past: "%s ang nakalipas",
            s: "ilang segundo",
            ss: "%d segundo",
            m: "isang minuto",
            mm: "%d minuto",
            h: "isang oras",
            hh: "%d oras",
            d: "isang araw",
            dd: "%d araw",
            M: "isang buwan",
            MM: "%d buwan",
            y: "isang taon",
            yy: "%d taon",
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: function (e) {
            return e;
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    24780: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
        function t(e) {
          var a = e;
          return (a =
            -1 !== e.indexOf("jaj")
              ? a.slice(0, -3) + "leS"
              : -1 !== e.indexOf("jar")
                ? a.slice(0, -3) + "waQ"
                : -1 !== e.indexOf("DIS")
                  ? a.slice(0, -3) + "nem"
                  : a + " pIq");
        }
        function n(e) {
          var a = e;
          return (a =
            -1 !== e.indexOf("jaj")
              ? a.slice(0, -3) + "Hu’"
              : -1 !== e.indexOf("jar")
                ? a.slice(0, -3) + "wen"
                : -1 !== e.indexOf("DIS")
                  ? a.slice(0, -3) + "ben"
                  : a + " ret");
        }
        function s(e, a, t, n) {
          var s = r(e);
          switch (t) {
            case "ss":
              return s + " lup";
            case "mm":
              return s + " tup";
            case "hh":
              return s + " rep";
            case "dd":
              return s + " jaj";
            case "MM":
              return s + " jar";
            case "yy":
              return s + " DIS";
          }
        }
        function r(e) {
          var t = Math.floor((e % 1e3) / 100),
            n = Math.floor((e % 100) / 10),
            s = e % 10,
            r = "";
          return (
            t > 0 && (r += a[t] + "vatlh"),
            n > 0 && (r += ("" !== r ? " " : "") + a[n] + "maH"),
            s > 0 && (r += ("" !== r ? " " : "") + a[s]),
            "" === r ? "pagh" : r
          );
        }
        e.defineLocale("tlh", {
          months:
            "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split(
              "_",
            ),
          monthsShort:
            "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
              "_",
            ),
          weekdaysShort:
            "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
              "_",
            ),
          weekdaysMin:
            "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
              "_",
            ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[DaHjaj] LT",
            nextDay: "[wa’leS] LT",
            nextWeek: "LLL",
            lastDay: "[wa’Hu’] LT",
            lastWeek: "LLL",
            sameElse: "L",
          },
          relativeTime: {
            future: t,
            past: n,
            s: "puS lup",
            ss: s,
            m: "wa’ tup",
            mm: s,
            h: "wa’ rep",
            hh: s,
            d: "wa’ jaj",
            dd: s,
            M: "wa’ jar",
            MM: s,
            y: "wa’ DIS",
            yy: s,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    80835: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = {
          1: "'inci",
          5: "'inci",
          8: "'inci",
          70: "'inci",
          80: "'inci",
          2: "'nci",
          7: "'nci",
          20: "'nci",
          50: "'nci",
          3: "'üncü",
          4: "'üncü",
          100: "'üncü",
          6: "'ncı",
          9: "'uncu",
          10: "'uncu",
          30: "'uncu",
          60: "'ıncı",
          90: "'ıncı",
        };
        e.defineLocale("tr", {
          months:
            "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split(
              "_",
            ),
          monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split(
            "_",
          ),
          weekdays:
            "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
          weekdaysShort: "Paz_Pzt_Sal_Çar_Per_Cum_Cmt".split("_"),
          weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
          meridiem: function (e, a, t) {
            return e < 12 ? (t ? "öö" : "ÖÖ") : t ? "ös" : "ÖS";
          },
          meridiemParse: /öö|ÖÖ|ös|ÖS/,
          isPM: function (e) {
            return "ös" === e || "ÖS" === e;
          },
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[bugün saat] LT",
            nextDay: "[yarın saat] LT",
            nextWeek: "[gelecek] dddd [saat] LT",
            lastDay: "[dün] LT",
            lastWeek: "[geçen] dddd [saat] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s sonra",
            past: "%s önce",
            s: "birkaç saniye",
            ss: "%d saniye",
            m: "bir dakika",
            mm: "%d dakika",
            h: "bir saat",
            hh: "%d saat",
            d: "bir gün",
            dd: "%d gün",
            w: "bir hafta",
            ww: "%d hafta",
            M: "bir ay",
            MM: "%d ay",
            y: "bir yıl",
            yy: "%d yıl",
          },
          ordinal: function (e, t) {
            switch (t) {
              case "d":
              case "D":
              case "Do":
              case "DD":
                return e;
              default:
                if (0 === e) return e + "'ıncı";
                var n = e % 10,
                  s = (e % 100) - n,
                  r = e >= 100 ? 100 : null;
                return e + (a[n] || a[s] || a[r]);
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    2840: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a, t, n) {
          var s = {
            s: ["viensas secunds", "'iensas secunds"],
            ss: [e + " secunds", e + " secunds"],
            m: ["'n míut", "'iens míut"],
            mm: [e + " míuts", e + " míuts"],
            h: ["'n þora", "'iensa þora"],
            hh: [e + " þoras", e + " þoras"],
            d: ["'n ziua", "'iensa ziua"],
            dd: [e + " ziuas", e + " ziuas"],
            M: ["'n mes", "'iens mes"],
            MM: [e + " mesen", e + " mesen"],
            y: ["'n ar", "'iens ar"],
            yy: [e + " ars", e + " ars"],
          };
          return n || a ? s[t][0] : s[t][1];
        }
        e.defineLocale("tzl", {
          months:
            "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split(
              "_",
            ),
          monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split(
            "_",
          ),
          weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split(
            "_",
          ),
          weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
          weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM [dallas] YYYY",
            LLL: "D. MMMM [dallas] YYYY HH.mm",
            LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm",
          },
          meridiemParse: /d\'o|d\'a/i,
          isPM: function (e) {
            return "d'o" === e.toLowerCase();
          },
          meridiem: function (e, a, t) {
            return e > 11 ? (t ? "d'o" : "D'O") : t ? "d'a" : "D'A";
          },
          calendar: {
            sameDay: "[oxhi à] LT",
            nextDay: "[demà à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[ieiri à] LT",
            lastWeek: "[sür el] dddd [lasteu à] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "osprei %s",
            past: "ja%s",
            s: a,
            ss: a,
            m: a,
            mm: a,
            h: a,
            hh: a,
            d: a,
            dd: a,
            M: a,
            MM: a,
            y: a,
            yy: a,
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: "%d.",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    70442: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("tzm-latn", {
          months:
            "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split(
              "_",
            ),
          monthsShort:
            "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split(
              "_",
            ),
          weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split(
            "_",
          ),
          weekdaysShort:
            "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
          weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split(
            "_",
          ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[asdkh g] LT",
            nextDay: "[aska g] LT",
            nextWeek: "dddd [g] LT",
            lastDay: "[assant g] LT",
            lastWeek: "dddd [g] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "dadkh s yan %s",
            past: "yan %s",
            s: "imik",
            ss: "%d imik",
            m: "minuḍ",
            mm: "%d minuḍ",
            h: "saɛa",
            hh: "%d tassaɛin",
            d: "ass",
            dd: "%d ossan",
            M: "ayowr",
            MM: "%d iyyirn",
            y: "asgas",
            yy: "%d isgasn",
          },
          week: { dow: 6, doy: 12 },
        });
      })(t(37485));
    },
    66757: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("tzm", {
          months:
            "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split(
              "_",
            ),
          monthsShort:
            "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split(
              "_",
            ),
          weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split(
            "_",
          ),
          weekdaysShort:
            "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
          weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split(
            "_",
          ),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
            nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
            nextWeek: "dddd [ⴴ] LT",
            lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
            lastWeek: "dddd [ⴴ] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
            past: "ⵢⴰⵏ %s",
            s: "ⵉⵎⵉⴽ",
            ss: "%d ⵉⵎⵉⴽ",
            m: "ⵎⵉⵏⵓⴺ",
            mm: "%d ⵎⵉⵏⵓⴺ",
            h: "ⵙⴰⵄⴰ",
            hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
            d: "ⴰⵙⵙ",
            dd: "%d oⵙⵙⴰⵏ",
            M: "ⴰⵢoⵓⵔ",
            MM: "%d ⵉⵢⵢⵉⵔⵏ",
            y: "ⴰⵙⴳⴰⵙ",
            yy: "%d ⵉⵙⴳⴰⵙⵏ",
          },
          week: { dow: 6, doy: 12 },
        });
      })(t(37485));
    },
    64413: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("ug-cn", {
          months:
            "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split(
              "_",
            ),
          monthsShort:
            "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split(
              "_",
            ),
          weekdays:
            "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
          weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
          weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
            LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
            LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
          },
          meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              "يېرىم كېچە" === a || "سەھەر" === a || "چۈشتىن بۇرۇن" === a
                ? e
                : "چۈشتىن كېيىن" === a || "كەچ" === a
                  ? e + 12
                  : e >= 11
                    ? e
                    : e + 12
            );
          },
          meridiem: function (e, a, t) {
            var n = 100 * e + a;
            return n < 600
              ? "يېرىم كېچە"
              : n < 900
                ? "سەھەر"
                : n < 1130
                  ? "چۈشتىن بۇرۇن"
                  : n < 1230
                    ? "چۈش"
                    : n < 1800
                      ? "چۈشتىن كېيىن"
                      : "كەچ";
          },
          calendar: {
            sameDay: "[بۈگۈن سائەت] LT",
            nextDay: "[ئەتە سائەت] LT",
            nextWeek: "[كېلەركى] dddd [سائەت] LT",
            lastDay: "[تۆنۈگۈن] LT",
            lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s كېيىن",
            past: "%s بۇرۇن",
            s: "نەچچە سېكونت",
            ss: "%d سېكونت",
            m: "بىر مىنۇت",
            mm: "%d مىنۇت",
            h: "بىر سائەت",
            hh: "%d سائەت",
            d: "بىر كۈن",
            dd: "%d كۈن",
            M: "بىر ئاي",
            MM: "%d ئاي",
            y: "بىر يىل",
            yy: "%d يىل",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
          ordinal: function (e, a) {
            switch (a) {
              case "d":
              case "D":
              case "DDD":
                return e + "-كۈنى";
              case "w":
              case "W":
                return e + "-ھەپتە";
              default:
                return e;
            }
          },
          preparse: function (e) {
            return e.replace(/،/g, ",");
          },
          postformat: function (e) {
            return e.replace(/,/g, "،");
          },
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    64800: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        function a(e, a) {
          var t = e.split("_");
          return a % 10 == 1 && a % 100 != 11
            ? t[0]
            : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)
              ? t[1]
              : t[2];
        }
        function t(e, t, n) {
          return "m" === n
            ? t
              ? "хвилина"
              : "хвилину"
            : "h" === n
              ? t
                ? "година"
                : "годину"
              : e +
                " " +
                a(
                  {
                    ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                    mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                    hh: t ? "година_години_годин" : "годину_години_годин",
                    dd: "день_дні_днів",
                    MM: "місяць_місяці_місяців",
                    yy: "рік_роки_років",
                  }[n],
                  +e,
                );
        }
        function n(e, a) {
          var t = {
            nominative:
              "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split(
                "_",
              ),
            accusative:
              "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split(
                "_",
              ),
            genitive:
              "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split(
                "_",
              ),
          };
          return !0 === e
            ? t.nominative.slice(1, 7).concat(t.nominative.slice(0, 1))
            : e
              ? t[
                  /(\[[ВвУу]\]) ?dddd/.test(a)
                    ? "accusative"
                    : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(a)
                      ? "genitive"
                      : "nominative"
                ][e.day()]
              : t.nominative;
        }
        function s(e) {
          return function () {
            return e + "о" + (11 === this.hours() ? "б" : "") + "] LT";
          };
        }
        e.defineLocale("uk", {
          months: {
            format:
              "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split(
                "_",
              ),
            standalone:
              "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split(
                "_",
              ),
          },
          monthsShort:
            "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
          weekdays: n,
          weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
          weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY р.",
            LLL: "D MMMM YYYY р., HH:mm",
            LLLL: "dddd, D MMMM YYYY р., HH:mm",
          },
          calendar: {
            sameDay: s("[Сьогодні "),
            nextDay: s("[Завтра "),
            lastDay: s("[Вчора "),
            nextWeek: s("[У] dddd ["),
            lastWeek: function () {
              switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                  return s("[Минулої] dddd [").call(this);
                case 1:
                case 2:
                case 4:
                  return s("[Минулого] dddd [").call(this);
              }
            },
            sameElse: "L",
          },
          relativeTime: {
            future: "за %s",
            past: "%s тому",
            s: "декілька секунд",
            ss: t,
            m: t,
            mm: t,
            h: "годину",
            hh: t,
            d: "день",
            dd: t,
            M: "місяць",
            MM: t,
            y: "рік",
            yy: t,
          },
          meridiemParse: /ночі|ранку|дня|вечора/,
          isPM: function (e) {
            return /^(дня|вечора)$/.test(e);
          },
          meridiem: function (e, a, t) {
            return e < 4
              ? "ночі"
              : e < 12
                ? "ранку"
                : e < 17
                  ? "дня"
                  : "вечора";
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
          ordinal: function (e, a) {
            switch (a) {
              case "M":
              case "d":
              case "DDD":
              case "w":
              case "W":
                return e + "-й";
              case "D":
                return e + "-го";
              default:
                return e;
            }
          },
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    99706: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        var a = [
            "جنوری",
            "فروری",
            "مارچ",
            "اپریل",
            "مئی",
            "جون",
            "جولائی",
            "اگست",
            "ستمبر",
            "اکتوبر",
            "نومبر",
            "دسمبر",
          ],
          t = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
        e.defineLocale("ur", {
          months: a,
          monthsShort: a,
          weekdays: t,
          weekdaysShort: t,
          weekdaysMin: t,
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd، D MMMM YYYY HH:mm",
          },
          meridiemParse: /صبح|شام/,
          isPM: function (e) {
            return "شام" === e;
          },
          meridiem: function (e, a, t) {
            return e < 12 ? "صبح" : "شام";
          },
          calendar: {
            sameDay: "[آج بوقت] LT",
            nextDay: "[کل بوقت] LT",
            nextWeek: "dddd [بوقت] LT",
            lastDay: "[گذشتہ روز بوقت] LT",
            lastWeek: "[گذشتہ] dddd [بوقت] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s بعد",
            past: "%s قبل",
            s: "چند سیکنڈ",
            ss: "%d سیکنڈ",
            m: "ایک منٹ",
            mm: "%d منٹ",
            h: "ایک گھنٹہ",
            hh: "%d گھنٹے",
            d: "ایک دن",
            dd: "%d دن",
            M: "ایک ماہ",
            MM: "%d ماہ",
            y: "ایک سال",
            yy: "%d سال",
          },
          preparse: function (e) {
            return e.replace(/،/g, ",");
          },
          postformat: function (e) {
            return e.replace(/,/g, "،");
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    63337: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("uz-latn", {
          months:
            "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split(
              "_",
            ),
          monthsShort:
            "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
          weekdays:
            "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split(
              "_",
            ),
          weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
          weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm",
          },
          calendar: {
            sameDay: "[Bugun soat] LT [da]",
            nextDay: "[Ertaga] LT [da]",
            nextWeek: "dddd [kuni soat] LT [da]",
            lastDay: "[Kecha soat] LT [da]",
            lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
            sameElse: "L",
          },
          relativeTime: {
            future: "Yaqin %s ichida",
            past: "Bir necha %s oldin",
            s: "soniya",
            ss: "%d soniya",
            m: "bir daqiqa",
            mm: "%d daqiqa",
            h: "bir soat",
            hh: "%d soat",
            d: "bir kun",
            dd: "%d kun",
            M: "bir oy",
            MM: "%d oy",
            y: "bir yil",
            yy: "%d yil",
          },
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    37448: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("uz", {
          months:
            "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split(
              "_",
            ),
          monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split(
            "_",
          ),
          weekdays:
            "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
          weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
          weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm",
          },
          calendar: {
            sameDay: "[Бугун соат] LT [да]",
            nextDay: "[Эртага] LT [да]",
            nextWeek: "dddd [куни соат] LT [да]",
            lastDay: "[Кеча соат] LT [да]",
            lastWeek: "[Утган] dddd [куни соат] LT [да]",
            sameElse: "L",
          },
          relativeTime: {
            future: "Якин %s ичида",
            past: "Бир неча %s олдин",
            s: "фурсат",
            ss: "%d фурсат",
            m: "бир дакика",
            mm: "%d дакика",
            h: "бир соат",
            hh: "%d соат",
            d: "бир кун",
            dd: "%d кун",
            M: "бир ой",
            MM: "%d ой",
            y: "бир йил",
            yy: "%d йил",
          },
          week: { dow: 1, doy: 7 },
        });
      })(t(37485));
    },
    83528: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("vi", {
          months:
            "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split(
              "_",
            ),
          monthsShort:
            "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
          weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
          weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
          weekdaysParseExact: !0,
          meridiemParse: /sa|ch/i,
          isPM: function (e) {
            return /^ch$/i.test(e);
          },
          meridiem: function (e, a, t) {
            return e < 12 ? (t ? "sa" : "SA") : t ? "ch" : "CH";
          },
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [năm] YYYY",
            LLL: "D MMMM [năm] YYYY HH:mm",
            LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
            l: "DD/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[Hôm nay lúc] LT",
            nextDay: "[Ngày mai lúc] LT",
            nextWeek: "dddd [tuần tới lúc] LT",
            lastDay: "[Hôm qua lúc] LT",
            lastWeek: "dddd [tuần trước lúc] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "%s tới",
            past: "%s trước",
            s: "vài giây",
            ss: "%d giây",
            m: "một phút",
            mm: "%d phút",
            h: "một giờ",
            hh: "%d giờ",
            d: "một ngày",
            dd: "%d ngày",
            w: "một tuần",
            ww: "%d tuần",
            M: "một tháng",
            MM: "%d tháng",
            y: "một năm",
            yy: "%d năm",
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: function (e) {
            return e;
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    581: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("x-pseudo", {
          months:
            "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split(
              "_",
            ),
          monthsShort:
            "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split(
              "_",
            ),
          monthsParseExact: !0,
          weekdays:
            "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split(
              "_",
            ),
          weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
          weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
          weekdaysParseExact: !0,
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
          },
          calendar: {
            sameDay: "[T~ódá~ý át] LT",
            nextDay: "[T~ómó~rró~w át] LT",
            nextWeek: "dddd [át] LT",
            lastDay: "[Ý~ést~érdá~ý át] LT",
            lastWeek: "[L~ást] dddd [át] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "í~ñ %s",
            past: "%s á~gó",
            s: "á ~féw ~sécó~ñds",
            ss: "%d s~écóñ~ds",
            m: "á ~míñ~úté",
            mm: "%d m~íñú~tés",
            h: "á~ñ hó~úr",
            hh: "%d h~óúrs",
            d: "á ~dáý",
            dd: "%d d~áýs",
            M: "á ~móñ~th",
            MM: "%d m~óñt~hs",
            y: "á ~ýéár",
            yy: "%d ý~éárs",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function (e) {
            var a = e % 10;
            return (
              e +
              (1 == ~~((e % 100) / 10)
                ? "th"
                : 1 === a
                  ? "st"
                  : 2 === a
                    ? "nd"
                    : 3 === a
                      ? "rd"
                      : "th")
            );
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    7658: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("yo", {
          months:
            "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split(
              "_",
            ),
          monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split(
            "_",
          ),
          weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
          weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
          weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A",
          },
          calendar: {
            sameDay: "[Ònì ni] LT",
            nextDay: "[Ọ̀la ni] LT",
            nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
            lastDay: "[Àna ni] LT",
            lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
            sameElse: "L",
          },
          relativeTime: {
            future: "ní %s",
            past: "%s kọjá",
            s: "ìsẹjú aayá die",
            ss: "aayá %d",
            m: "ìsẹjú kan",
            mm: "ìsẹjú %d",
            h: "wákati kan",
            hh: "wákati %d",
            d: "ọjọ́ kan",
            dd: "ọjọ́ %d",
            M: "osù kan",
            MM: "osù %d",
            y: "ọdún kan",
            yy: "ọdún %d",
          },
          dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
          ordinal: "ọjọ́ %d",
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    55526: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("zh-cn", {
          months:
            "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
              "_",
            ),
          monthsShort:
            "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
            "_",
          ),
          weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
          weekdaysMin: "日_一_二_三_四_五_六".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日Ah点mm分",
            LLLL: "YYYY年M月D日ddddAh点mm分",
            l: "YYYY/M/D",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日dddd HH:mm",
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              "凌晨" === a || "早上" === a || "上午" === a
                ? e
                : "下午" === a || "晚上" === a
                  ? e + 12
                  : e >= 11
                    ? e
                    : e + 12
            );
          },
          meridiem: function (e, a, t) {
            var n = 100 * e + a;
            return n < 600
              ? "凌晨"
              : n < 900
                ? "早上"
                : n < 1130
                  ? "上午"
                  : n < 1230
                    ? "中午"
                    : n < 1800
                      ? "下午"
                      : "晚上";
          },
          calendar: {
            sameDay: "[今天]LT",
            nextDay: "[明天]LT",
            nextWeek: function (e) {
              return e.week() !== this.week() ? "[下]dddLT" : "[本]dddLT";
            },
            lastDay: "[昨天]LT",
            lastWeek: function (e) {
              return this.week() !== e.week() ? "[上]dddLT" : "[本]dddLT";
            },
            sameElse: "L",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
          ordinal: function (e, a) {
            switch (a) {
              case "d":
              case "D":
              case "DDD":
                return e + "日";
              case "M":
                return e + "月";
              case "w":
              case "W":
                return e + "周";
              default:
                return e;
            }
          },
          relativeTime: {
            future: "%s后",
            past: "%s前",
            s: "几秒",
            ss: "%d 秒",
            m: "1 分钟",
            mm: "%d 分钟",
            h: "1 小时",
            hh: "%d 小时",
            d: "1 天",
            dd: "%d 天",
            w: "1 周",
            ww: "%d 周",
            M: "1 个月",
            MM: "%d 个月",
            y: "1 年",
            yy: "%d 年",
          },
          week: { dow: 1, doy: 4 },
        });
      })(t(37485));
    },
    32809: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("zh-hk", {
          months:
            "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
              "_",
            ),
          monthsShort:
            "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
            "_",
          ),
          weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
          weekdaysMin: "日_一_二_三_四_五_六".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日 HH:mm",
            LLLL: "YYYY年M月D日dddd HH:mm",
            l: "YYYY/M/D",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日dddd HH:mm",
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              "凌晨" === a || "早上" === a || "上午" === a
                ? e
                : "中午" === a
                  ? e >= 11
                    ? e
                    : e + 12
                  : "下午" === a || "晚上" === a
                    ? e + 12
                    : void 0
            );
          },
          meridiem: function (e, a, t) {
            var n = 100 * e + a;
            return n < 600
              ? "凌晨"
              : n < 900
                ? "早上"
                : n < 1200
                  ? "上午"
                  : 1200 === n
                    ? "中午"
                    : n < 1800
                      ? "下午"
                      : "晚上";
          },
          calendar: {
            sameDay: "[今天]LT",
            nextDay: "[明天]LT",
            nextWeek: "[下]ddddLT",
            lastDay: "[昨天]LT",
            lastWeek: "[上]ddddLT",
            sameElse: "L",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
          ordinal: function (e, a) {
            switch (a) {
              case "d":
              case "D":
              case "DDD":
                return e + "日";
              case "M":
                return e + "月";
              case "w":
              case "W":
                return e + "週";
              default:
                return e;
            }
          },
          relativeTime: {
            future: "%s後",
            past: "%s前",
            s: "幾秒",
            ss: "%d 秒",
            m: "1 分鐘",
            mm: "%d 分鐘",
            h: "1 小時",
            hh: "%d 小時",
            d: "1 天",
            dd: "%d 天",
            M: "1 個月",
            MM: "%d 個月",
            y: "1 年",
            yy: "%d 年",
          },
        });
      })(t(37485));
    },
    57892: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("zh-mo", {
          months:
            "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
              "_",
            ),
          monthsShort:
            "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
            "_",
          ),
          weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
          weekdaysMin: "日_一_二_三_四_五_六".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日 HH:mm",
            LLLL: "YYYY年M月D日dddd HH:mm",
            l: "D/M/YYYY",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日dddd HH:mm",
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              "凌晨" === a || "早上" === a || "上午" === a
                ? e
                : "中午" === a
                  ? e >= 11
                    ? e
                    : e + 12
                  : "下午" === a || "晚上" === a
                    ? e + 12
                    : void 0
            );
          },
          meridiem: function (e, a, t) {
            var n = 100 * e + a;
            return n < 600
              ? "凌晨"
              : n < 900
                ? "早上"
                : n < 1130
                  ? "上午"
                  : n < 1230
                    ? "中午"
                    : n < 1800
                      ? "下午"
                      : "晚上";
          },
          calendar: {
            sameDay: "[今天] LT",
            nextDay: "[明天] LT",
            nextWeek: "[下]dddd LT",
            lastDay: "[昨天] LT",
            lastWeek: "[上]dddd LT",
            sameElse: "L",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
          ordinal: function (e, a) {
            switch (a) {
              case "d":
              case "D":
              case "DDD":
                return e + "日";
              case "M":
                return e + "月";
              case "w":
              case "W":
                return e + "週";
              default:
                return e;
            }
          },
          relativeTime: {
            future: "%s內",
            past: "%s前",
            s: "幾秒",
            ss: "%d 秒",
            m: "1 分鐘",
            mm: "%d 分鐘",
            h: "1 小時",
            hh: "%d 小時",
            d: "1 天",
            dd: "%d 天",
            M: "1 個月",
            MM: "%d 個月",
            y: "1 年",
            yy: "%d 年",
          },
        });
      })(t(37485));
    },
    79204: function (e, a, t) {
      !(function (e) {
        "use strict";
        //! moment.js locale configuration
        e.defineLocale("zh-tw", {
          months:
            "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
              "_",
            ),
          monthsShort:
            "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
            "_",
          ),
          weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
          weekdaysMin: "日_一_二_三_四_五_六".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日 HH:mm",
            LLLL: "YYYY年M月D日dddd HH:mm",
            l: "YYYY/M/D",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日dddd HH:mm",
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function (e, a) {
            return (
              12 === e && (e = 0),
              "凌晨" === a || "早上" === a || "上午" === a
                ? e
                : "中午" === a
                  ? e >= 11
                    ? e
                    : e + 12
                  : "下午" === a || "晚上" === a
                    ? e + 12
                    : void 0
            );
          },
          meridiem: function (e, a, t) {
            var n = 100 * e + a;
            return n < 600
              ? "凌晨"
              : n < 900
                ? "早上"
                : n < 1130
                  ? "上午"
                  : n < 1230
                    ? "中午"
                    : n < 1800
                      ? "下午"
                      : "晚上";
          },
          calendar: {
            sameDay: "[今天] LT",
            nextDay: "[明天] LT",
            nextWeek: "[下]dddd LT",
            lastDay: "[昨天] LT",
            lastWeek: "[上]dddd LT",
            sameElse: "L",
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
          ordinal: function (e, a) {
            switch (a) {
              case "d":
              case "D":
              case "DDD":
                return e + "日";
              case "M":
                return e + "月";
              case "w":
              case "W":
                return e + "週";
              default:
                return e;
            }
          },
          relativeTime: {
            future: "%s後",
            past: "%s前",
            s: "幾秒",
            ss: "%d 秒",
            m: "1 分鐘",
            mm: "%d 分鐘",
            h: "1 小時",
            hh: "%d 小時",
            d: "1 天",
            dd: "%d 天",
            M: "1 個月",
            MM: "%d 個月",
            y: "1 年",
            yy: "%d 年",
          },
        });
      })(t(37485));
    },
    37485: function (e, a, t) {
      (e = t.nmd(e)).exports = (function () {
        "use strict";
        var a, n;
        function s() {
          return a.apply(null, arguments);
        }
        function r(e) {
          a = e;
        }
        function i(e) {
          return (
            e instanceof Array ||
            "[object Array]" === Object.prototype.toString.call(e)
          );
        }
        function d(e) {
          return (
            null != e && "[object Object]" === Object.prototype.toString.call(e)
          );
        }
        function _(e, a) {
          return Object.prototype.hasOwnProperty.call(e, a);
        }
        function o(e) {
          if (Object.getOwnPropertyNames)
            return 0 === Object.getOwnPropertyNames(e).length;
          var a;
          for (a in e) if (_(e, a)) return !1;
          return !0;
        }
        function u(e) {
          return void 0 === e;
        }
        function m(e) {
          return (
            "number" == typeof e ||
            "[object Number]" === Object.prototype.toString.call(e)
          );
        }
        function l(e) {
          return (
            e instanceof Date ||
            "[object Date]" === Object.prototype.toString.call(e)
          );
        }
        function M(e, a) {
          var t,
            n = [],
            s = e.length;
          for (t = 0; t < s; ++t) n.push(a(e[t], t));
          return n;
        }
        function h(e, a) {
          for (var t in a) _(a, t) && (e[t] = a[t]);
          return (
            _(a, "toString") && (e.toString = a.toString),
            _(a, "valueOf") && (e.valueOf = a.valueOf),
            e
          );
        }
        function c(e, a, t, n) {
          return Bt(e, a, t, n, !0).utc();
        }
        function L() {
          return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1,
          };
        }
        function Y(e) {
          return null == e._pf && (e._pf = L()), e._pf;
        }
        function y(e) {
          var a = null,
            t = !1,
            s = e._d && !isNaN(e._d.getTime());
          return (
            s &&
              ((a = Y(e)),
              (t = n.call(a.parsedDateParts, function (e) {
                return null != e;
              })),
              (s =
                a.overflow < 0 &&
                !a.empty &&
                !a.invalidEra &&
                !a.invalidMonth &&
                !a.invalidWeekday &&
                !a.weekdayMismatch &&
                !a.nullInput &&
                !a.invalidFormat &&
                !a.userInvalidated &&
                (!a.meridiem || (a.meridiem && t))),
              e._strict &&
                (s =
                  s &&
                  0 === a.charsLeftOver &&
                  0 === a.unusedTokens.length &&
                  void 0 === a.bigHour)),
            null != Object.isFrozen && Object.isFrozen(e)
              ? s
              : ((e._isValid = s), e._isValid)
          );
        }
        function f(e) {
          var a = c(NaN);
          return null != e ? h(Y(a), e) : (Y(a).userInvalidated = !0), a;
        }
        n = Array.prototype.some
          ? Array.prototype.some
          : function (e) {
              var a,
                t = Object(this),
                n = t.length >>> 0;
              for (a = 0; a < n; a++)
                if (a in t && e.call(this, t[a], a, t)) return !0;
              return !1;
            };
        var k = (s.momentProperties = []),
          p = !1;
        function D(e, a) {
          var t,
            n,
            s,
            r = k.length;
          if (
            (u(a._isAMomentObject) || (e._isAMomentObject = a._isAMomentObject),
            u(a._i) || (e._i = a._i),
            u(a._f) || (e._f = a._f),
            u(a._l) || (e._l = a._l),
            u(a._strict) || (e._strict = a._strict),
            u(a._tzm) || (e._tzm = a._tzm),
            u(a._isUTC) || (e._isUTC = a._isUTC),
            u(a._offset) || (e._offset = a._offset),
            u(a._pf) || (e._pf = Y(a)),
            u(a._locale) || (e._locale = a._locale),
            r > 0)
          )
            for (t = 0; t < r; t++) u((s = a[(n = k[t])])) || (e[n] = s);
          return e;
        }
        function T(e) {
          D(this, e),
            (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
            this.isValid() || (this._d = new Date(NaN)),
            !1 === p && ((p = !0), s.updateOffset(this), (p = !1));
        }
        function g(e) {
          return e instanceof T || (null != e && null != e._isAMomentObject);
        }
        function w(e) {
          !1 === s.suppressDeprecationWarnings &&
            "undefined" != typeof console &&
            console.warn &&
            console.warn("Deprecation warning: " + e);
        }
        function v(e, a) {
          var t = !0;
          return h(function () {
            if (
              (null != s.deprecationHandler && s.deprecationHandler(null, e), t)
            ) {
              var n,
                r,
                i,
                d = [],
                o = arguments.length;
              for (r = 0; r < o; r++) {
                if (((n = ""), "object" == typeof arguments[r])) {
                  for (i in ((n += "\n[" + r + "] "), arguments[0]))
                    _(arguments[0], i) &&
                      (n += i + ": " + arguments[0][i] + ", ");
                  n = n.slice(0, -2);
                } else n = arguments[r];
                d.push(n);
              }
              w(
                e +
                  "\nArguments: " +
                  Array.prototype.slice.call(d).join("") +
                  "\n" +
                  new Error().stack,
              ),
                (t = !1);
            }
            return a.apply(this, arguments);
          }, a);
        }
        var b,
          H = {};
        function S(e, a) {
          null != s.deprecationHandler && s.deprecationHandler(e, a),
            H[e] || (w(a), (H[e] = !0));
        }
        function j(e) {
          return (
            ("undefined" != typeof Function && e instanceof Function) ||
            "[object Function]" === Object.prototype.toString.call(e)
          );
        }
        function x(e) {
          var a, t;
          for (t in e)
            _(e, t) && (j((a = e[t])) ? (this[t] = a) : (this["_" + t] = a));
          (this._config = e),
            (this._dayOfMonthOrdinalParseLenient = new RegExp(
              (this._dayOfMonthOrdinalParse.source ||
                this._ordinalParse.source) +
                "|" +
                /\d{1,2}/.source,
            ));
        }
        function P(e, a) {
          var t,
            n = h({}, e);
          for (t in a)
            _(a, t) &&
              (d(e[t]) && d(a[t])
                ? ((n[t] = {}), h(n[t], e[t]), h(n[t], a[t]))
                : null != a[t]
                  ? (n[t] = a[t])
                  : delete n[t]);
          for (t in e) _(e, t) && !_(a, t) && d(e[t]) && (n[t] = h({}, n[t]));
          return n;
        }
        function O(e) {
          null != e && this.set(e);
        }
        (s.suppressDeprecationWarnings = !1),
          (s.deprecationHandler = null),
          (b = Object.keys
            ? Object.keys
            : function (e) {
                var a,
                  t = [];
                for (a in e) _(e, a) && t.push(a);
                return t;
              });
        var W = {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        };
        function A(e, a, t) {
          var n = this._calendar[e] || this._calendar.sameElse;
          return j(n) ? n.call(a, t) : n;
        }
        function E(e, a, t) {
          var n = "" + Math.abs(e),
            s = a - n.length;
          return (
            (e >= 0 ? (t ? "+" : "") : "-") +
            Math.pow(10, Math.max(0, s)).toString().substr(1) +
            n
          );
        }
        var F =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          z = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          N = {},
          J = {};
        function R(e, a, t, n) {
          var s = n;
          "string" == typeof n &&
            (s = function () {
              return this[n]();
            }),
            e && (J[e] = s),
            a &&
              (J[a[0]] = function () {
                return E(s.apply(this, arguments), a[1], a[2]);
              }),
            t &&
              (J[t] = function () {
                return this.localeData().ordinal(s.apply(this, arguments), e);
              });
        }
        function C(e) {
          return e.match(/\[[\s\S]/)
            ? e.replace(/^\[|\]$/g, "")
            : e.replace(/\\/g, "");
        }
        function I(e) {
          var a,
            t,
            n = e.match(F);
          for (a = 0, t = n.length; a < t; a++)
            J[n[a]] ? (n[a] = J[n[a]]) : (n[a] = C(n[a]));
          return function (a) {
            var s,
              r = "";
            for (s = 0; s < t; s++) r += j(n[s]) ? n[s].call(a, e) : n[s];
            return r;
          };
        }
        function U(e, a) {
          return e.isValid()
            ? ((a = G(a, e.localeData())), (N[a] = N[a] || I(a)), N[a](e))
            : e.localeData().invalidDate();
        }
        function G(e, a) {
          var t = 5;
          function n(e) {
            return a.longDateFormat(e) || e;
          }
          for (z.lastIndex = 0; t >= 0 && z.test(e); )
            (e = e.replace(z, n)), (z.lastIndex = 0), (t -= 1);
          return e;
        }
        var V = {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A",
        };
        function q(e) {
          var a = this._longDateFormat[e],
            t = this._longDateFormat[e.toUpperCase()];
          return a || !t
            ? a
            : ((this._longDateFormat[e] = t
                .match(F)
                .map(function (e) {
                  return "MMMM" === e ||
                    "MM" === e ||
                    "DD" === e ||
                    "dddd" === e
                    ? e.slice(1)
                    : e;
                })
                .join("")),
              this._longDateFormat[e]);
        }
        var B = "Invalid date";
        function K() {
          return this._invalidDate;
        }
        var Z = "%d",
          $ = /\d{1,2}/;
        function Q(e) {
          return this._ordinal.replace("%d", e);
        }
        var X = {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          w: "a week",
          ww: "%d weeks",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        };
        function ee(e, a, t, n) {
          var s = this._relativeTime[t];
          return j(s) ? s(e, a, t, n) : s.replace(/%d/i, e);
        }
        function ae(e, a) {
          var t = this._relativeTime[e > 0 ? "future" : "past"];
          return j(t) ? t(a) : t.replace(/%s/i, a);
        }
        var te = {
          D: "date",
          dates: "date",
          date: "date",
          d: "day",
          days: "day",
          day: "day",
          e: "weekday",
          weekdays: "weekday",
          weekday: "weekday",
          E: "isoWeekday",
          isoweekdays: "isoWeekday",
          isoweekday: "isoWeekday",
          DDD: "dayOfYear",
          dayofyears: "dayOfYear",
          dayofyear: "dayOfYear",
          h: "hour",
          hours: "hour",
          hour: "hour",
          ms: "millisecond",
          milliseconds: "millisecond",
          millisecond: "millisecond",
          m: "minute",
          minutes: "minute",
          minute: "minute",
          M: "month",
          months: "month",
          month: "month",
          Q: "quarter",
          quarters: "quarter",
          quarter: "quarter",
          s: "second",
          seconds: "second",
          second: "second",
          gg: "weekYear",
          weekyears: "weekYear",
          weekyear: "weekYear",
          GG: "isoWeekYear",
          isoweekyears: "isoWeekYear",
          isoweekyear: "isoWeekYear",
          w: "week",
          weeks: "week",
          week: "week",
          W: "isoWeek",
          isoweeks: "isoWeek",
          isoweek: "isoWeek",
          y: "year",
          years: "year",
          year: "year",
        };
        function ne(e) {
          return "string" == typeof e ? te[e] || te[e.toLowerCase()] : void 0;
        }
        function se(e) {
          var a,
            t,
            n = {};
          for (t in e) _(e, t) && (a = ne(t)) && (n[a] = e[t]);
          return n;
        }
        var re = {
          date: 9,
          day: 11,
          weekday: 11,
          isoWeekday: 11,
          dayOfYear: 4,
          hour: 13,
          millisecond: 16,
          minute: 14,
          month: 8,
          quarter: 7,
          second: 15,
          weekYear: 1,
          isoWeekYear: 1,
          week: 5,
          isoWeek: 5,
          year: 1,
        };
        function ie(e) {
          var a,
            t = [];
          for (a in e) _(e, a) && t.push({ unit: a, priority: re[a] });
          return (
            t.sort(function (e, a) {
              return e.priority - a.priority;
            }),
            t
          );
        }
        var de,
          _e = /\d/,
          oe = /\d\d/,
          ue = /\d{3}/,
          me = /\d{4}/,
          le = /[+-]?\d{6}/,
          Me = /\d\d?/,
          he = /\d\d\d\d?/,
          ce = /\d\d\d\d\d\d?/,
          Le = /\d{1,3}/,
          Ye = /\d{1,4}/,
          ye = /[+-]?\d{1,6}/,
          fe = /\d+/,
          ke = /[+-]?\d+/,
          pe = /Z|[+-]\d\d:?\d\d/gi,
          De = /Z|[+-]\d\d(?::?\d\d)?/gi,
          Te = /[+-]?\d+(\.\d{1,3})?/,
          ge =
            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
          we = /^[1-9]\d?/,
          ve = /^([1-9]\d|\d)/;
        function be(e, a, t) {
          de[e] = j(a)
            ? a
            : function (e, n) {
                return e && t ? t : a;
              };
        }
        function He(e, a) {
          return _(de, e) ? de[e](a._strict, a._locale) : new RegExp(Se(e));
        }
        function Se(e) {
          return je(
            e
              .replace("\\", "")
              .replace(
                /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                function (e, a, t, n, s) {
                  return a || t || n || s;
                },
              ),
          );
        }
        function je(e) {
          return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        function xe(e) {
          return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
        }
        function Pe(e) {
          var a = +e,
            t = 0;
          return 0 !== a && isFinite(a) && (t = xe(a)), t;
        }
        de = {};
        var Oe = {};
        function We(e, a) {
          var t,
            n,
            s = a;
          for (
            "string" == typeof e && (e = [e]),
              m(a) &&
                (s = function (e, t) {
                  t[a] = Pe(e);
                }),
              n = e.length,
              t = 0;
            t < n;
            t++
          )
            Oe[e[t]] = s;
        }
        function Ae(e, a) {
          We(e, function (e, t, n, s) {
            (n._w = n._w || {}), a(e, n._w, n, s);
          });
        }
        function Ee(e, a, t) {
          null != a && _(Oe, e) && Oe[e](a, t._a, t, e);
        }
        function Fe(e) {
          return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
        }
        var ze = 0,
          Ne = 1,
          Je = 2,
          Re = 3,
          Ce = 4,
          Ie = 5,
          Ue = 6,
          Ge = 7,
          Ve = 8;
        function qe(e) {
          return Fe(e) ? 366 : 365;
        }
        R("Y", 0, 0, function () {
          var e = this.year();
          return e <= 9999 ? E(e, 4) : "+" + e;
        }),
          R(0, ["YY", 2], 0, function () {
            return this.year() % 100;
          }),
          R(0, ["YYYY", 4], 0, "year"),
          R(0, ["YYYYY", 5], 0, "year"),
          R(0, ["YYYYYY", 6, !0], 0, "year"),
          be("Y", ke),
          be("YY", Me, oe),
          be("YYYY", Ye, me),
          be("YYYYY", ye, le),
          be("YYYYYY", ye, le),
          We(["YYYYY", "YYYYYY"], ze),
          We("YYYY", function (e, a) {
            a[ze] = 2 === e.length ? s.parseTwoDigitYear(e) : Pe(e);
          }),
          We("YY", function (e, a) {
            a[ze] = s.parseTwoDigitYear(e);
          }),
          We("Y", function (e, a) {
            a[ze] = parseInt(e, 10);
          }),
          (s.parseTwoDigitYear = function (e) {
            return Pe(e) + (Pe(e) > 68 ? 1900 : 2e3);
          });
        var Be,
          Ke = $e("FullYear", !0);
        function Ze() {
          return Fe(this.year());
        }
        function $e(e, a) {
          return function (t) {
            return null != t
              ? (Xe(this, e, t), s.updateOffset(this, a), this)
              : Qe(this, e);
          };
        }
        function Qe(e, a) {
          if (!e.isValid()) return NaN;
          var t = e._d,
            n = e._isUTC;
          switch (a) {
            case "Milliseconds":
              return n ? t.getUTCMilliseconds() : t.getMilliseconds();
            case "Seconds":
              return n ? t.getUTCSeconds() : t.getSeconds();
            case "Minutes":
              return n ? t.getUTCMinutes() : t.getMinutes();
            case "Hours":
              return n ? t.getUTCHours() : t.getHours();
            case "Date":
              return n ? t.getUTCDate() : t.getDate();
            case "Day":
              return n ? t.getUTCDay() : t.getDay();
            case "Month":
              return n ? t.getUTCMonth() : t.getMonth();
            case "FullYear":
              return n ? t.getUTCFullYear() : t.getFullYear();
            default:
              return NaN;
          }
        }
        function Xe(e, a, t) {
          var n, s, r, i, d;
          if (e.isValid() && !isNaN(t)) {
            switch (((n = e._d), (s = e._isUTC), a)) {
              case "Milliseconds":
                return void (s
                  ? n.setUTCMilliseconds(t)
                  : n.setMilliseconds(t));
              case "Seconds":
                return void (s ? n.setUTCSeconds(t) : n.setSeconds(t));
              case "Minutes":
                return void (s ? n.setUTCMinutes(t) : n.setMinutes(t));
              case "Hours":
                return void (s ? n.setUTCHours(t) : n.setHours(t));
              case "Date":
                return void (s ? n.setUTCDate(t) : n.setDate(t));
              case "FullYear":
                break;
              default:
                return;
            }
            (r = t),
              (i = e.month()),
              (d = 29 !== (d = e.date()) || 1 !== i || Fe(r) ? d : 28),
              s ? n.setUTCFullYear(r, i, d) : n.setFullYear(r, i, d);
          }
        }
        function ea(e) {
          return j(this[(e = ne(e))]) ? this[e]() : this;
        }
        function aa(e, a) {
          if ("object" == typeof e) {
            var t,
              n = ie((e = se(e))),
              s = n.length;
            for (t = 0; t < s; t++) this[n[t].unit](e[n[t].unit]);
          } else if (j(this[(e = ne(e))])) return this[e](a);
          return this;
        }
        function ta(e, a) {
          return ((e % a) + a) % a;
        }
        function na(e, a) {
          if (isNaN(e) || isNaN(a)) return NaN;
          var t = ta(a, 12);
          return (
            (e += (a - t) / 12),
            1 === t ? (Fe(e) ? 29 : 28) : 31 - ((t % 7) % 2)
          );
        }
        (Be = Array.prototype.indexOf
          ? Array.prototype.indexOf
          : function (e) {
              var a;
              for (a = 0; a < this.length; ++a) if (this[a] === e) return a;
              return -1;
            }),
          R("M", ["MM", 2], "Mo", function () {
            return this.month() + 1;
          }),
          R("MMM", 0, 0, function (e) {
            return this.localeData().monthsShort(this, e);
          }),
          R("MMMM", 0, 0, function (e) {
            return this.localeData().months(this, e);
          }),
          be("M", Me, we),
          be("MM", Me, oe),
          be("MMM", function (e, a) {
            return a.monthsShortRegex(e);
          }),
          be("MMMM", function (e, a) {
            return a.monthsRegex(e);
          }),
          We(["M", "MM"], function (e, a) {
            a[Ne] = Pe(e) - 1;
          }),
          We(["MMM", "MMMM"], function (e, a, t, n) {
            var s = t._locale.monthsParse(e, n, t._strict);
            null != s ? (a[Ne] = s) : (Y(t).invalidMonth = e);
          });
        var sa =
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_",
            ),
          ra = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          ia = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          da = ge,
          _a = ge;
        function oa(e, a) {
          return e
            ? i(this._months)
              ? this._months[e.month()]
              : this._months[
                  (this._months.isFormat || ia).test(a)
                    ? "format"
                    : "standalone"
                ][e.month()]
            : i(this._months)
              ? this._months
              : this._months.standalone;
        }
        function ua(e, a) {
          return e
            ? i(this._monthsShort)
              ? this._monthsShort[e.month()]
              : this._monthsShort[ia.test(a) ? "format" : "standalone"][
                  e.month()
                ]
            : i(this._monthsShort)
              ? this._monthsShort
              : this._monthsShort.standalone;
        }
        function ma(e, a, t) {
          var n,
            s,
            r,
            i = e.toLocaleLowerCase();
          if (!this._monthsParse)
            for (
              this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = [],
                n = 0;
              n < 12;
              ++n
            )
              (r = c([2e3, n])),
                (this._shortMonthsParse[n] = this.monthsShort(
                  r,
                  "",
                ).toLocaleLowerCase()),
                (this._longMonthsParse[n] = this.months(
                  r,
                  "",
                ).toLocaleLowerCase());
          return t
            ? "MMM" === a
              ? -1 !== (s = Be.call(this._shortMonthsParse, i))
                ? s
                : null
              : -1 !== (s = Be.call(this._longMonthsParse, i))
                ? s
                : null
            : "MMM" === a
              ? -1 !== (s = Be.call(this._shortMonthsParse, i)) ||
                -1 !== (s = Be.call(this._longMonthsParse, i))
                ? s
                : null
              : -1 !== (s = Be.call(this._longMonthsParse, i)) ||
                  -1 !== (s = Be.call(this._shortMonthsParse, i))
                ? s
                : null;
        }
        function la(e, a, t) {
          var n, s, r;
          if (this._monthsParseExact) return ma.call(this, e, a, t);
          for (
            this._monthsParse ||
              ((this._monthsParse = []),
              (this._longMonthsParse = []),
              (this._shortMonthsParse = [])),
              n = 0;
            n < 12;
            n++
          ) {
            if (
              ((s = c([2e3, n])),
              t &&
                !this._longMonthsParse[n] &&
                ((this._longMonthsParse[n] = new RegExp(
                  "^" + this.months(s, "").replace(".", "") + "$",
                  "i",
                )),
                (this._shortMonthsParse[n] = new RegExp(
                  "^" + this.monthsShort(s, "").replace(".", "") + "$",
                  "i",
                ))),
              t ||
                this._monthsParse[n] ||
                ((r =
                  "^" + this.months(s, "") + "|^" + this.monthsShort(s, "")),
                (this._monthsParse[n] = new RegExp(r.replace(".", ""), "i"))),
              t && "MMMM" === a && this._longMonthsParse[n].test(e))
            )
              return n;
            if (t && "MMM" === a && this._shortMonthsParse[n].test(e)) return n;
            if (!t && this._monthsParse[n].test(e)) return n;
          }
        }
        function Ma(e, a) {
          if (!e.isValid()) return e;
          if ("string" == typeof a)
            if (/^\d+$/.test(a)) a = Pe(a);
            else if (!m((a = e.localeData().monthsParse(a)))) return e;
          var t = a,
            n = e.date();
          return (
            (n = n < 29 ? n : Math.min(n, na(e.year(), t))),
            e._isUTC ? e._d.setUTCMonth(t, n) : e._d.setMonth(t, n),
            e
          );
        }
        function ha(e) {
          return null != e
            ? (Ma(this, e), s.updateOffset(this, !0), this)
            : Qe(this, "Month");
        }
        function ca() {
          return na(this.year(), this.month());
        }
        function La(e) {
          return this._monthsParseExact
            ? (_(this, "_monthsRegex") || ya.call(this),
              e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            : (_(this, "_monthsShortRegex") || (this._monthsShortRegex = da),
              this._monthsShortStrictRegex && e
                ? this._monthsShortStrictRegex
                : this._monthsShortRegex);
        }
        function Ya(e) {
          return this._monthsParseExact
            ? (_(this, "_monthsRegex") || ya.call(this),
              e ? this._monthsStrictRegex : this._monthsRegex)
            : (_(this, "_monthsRegex") || (this._monthsRegex = _a),
              this._monthsStrictRegex && e
                ? this._monthsStrictRegex
                : this._monthsRegex);
        }
        function ya() {
          function e(e, a) {
            return a.length - e.length;
          }
          var a,
            t,
            n,
            s,
            r = [],
            i = [],
            d = [];
          for (a = 0; a < 12; a++)
            (t = c([2e3, a])),
              (n = je(this.monthsShort(t, ""))),
              (s = je(this.months(t, ""))),
              r.push(n),
              i.push(s),
              d.push(s),
              d.push(n);
          r.sort(e),
            i.sort(e),
            d.sort(e),
            (this._monthsRegex = new RegExp("^(" + d.join("|") + ")", "i")),
            (this._monthsShortRegex = this._monthsRegex),
            (this._monthsStrictRegex = new RegExp(
              "^(" + i.join("|") + ")",
              "i",
            )),
            (this._monthsShortStrictRegex = new RegExp(
              "^(" + r.join("|") + ")",
              "i",
            ));
        }
        function fa(e, a, t, n, s, r, i) {
          var d;
          return (
            e < 100 && e >= 0
              ? ((d = new Date(e + 400, a, t, n, s, r, i)),
                isFinite(d.getFullYear()) && d.setFullYear(e))
              : (d = new Date(e, a, t, n, s, r, i)),
            d
          );
        }
        function ka(e) {
          var a, t;
          return (
            e < 100 && e >= 0
              ? (((t = Array.prototype.slice.call(arguments))[0] = e + 400),
                (a = new Date(Date.UTC.apply(null, t))),
                isFinite(a.getUTCFullYear()) && a.setUTCFullYear(e))
              : (a = new Date(Date.UTC.apply(null, arguments))),
            a
          );
        }
        function pa(e, a, t) {
          var n = 7 + a - t;
          return (-(7 + ka(e, 0, n).getUTCDay() - a) % 7) + n - 1;
        }
        function Da(e, a, t, n, s) {
          var r,
            i,
            d = 1 + 7 * (a - 1) + ((7 + t - n) % 7) + pa(e, n, s);
          return (
            d <= 0
              ? (i = qe((r = e - 1)) + d)
              : d > qe(e)
                ? ((r = e + 1), (i = d - qe(e)))
                : ((r = e), (i = d)),
            { year: r, dayOfYear: i }
          );
        }
        function Ta(e, a, t) {
          var n,
            s,
            r = pa(e.year(), a, t),
            i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
          return (
            i < 1
              ? (n = i + ga((s = e.year() - 1), a, t))
              : i > ga(e.year(), a, t)
                ? ((n = i - ga(e.year(), a, t)), (s = e.year() + 1))
                : ((s = e.year()), (n = i)),
            { week: n, year: s }
          );
        }
        function ga(e, a, t) {
          var n = pa(e, a, t),
            s = pa(e + 1, a, t);
          return (qe(e) - n + s) / 7;
        }
        function wa(e) {
          return Ta(e, this._week.dow, this._week.doy).week;
        }
        R("w", ["ww", 2], "wo", "week"),
          R("W", ["WW", 2], "Wo", "isoWeek"),
          be("w", Me, we),
          be("ww", Me, oe),
          be("W", Me, we),
          be("WW", Me, oe),
          Ae(["w", "ww", "W", "WW"], function (e, a, t, n) {
            a[n.substr(0, 1)] = Pe(e);
          });
        var va = { dow: 0, doy: 6 };
        function ba() {
          return this._week.dow;
        }
        function Ha() {
          return this._week.doy;
        }
        function Sa(e) {
          var a = this.localeData().week(this);
          return null == e ? a : this.add(7 * (e - a), "d");
        }
        function ja(e) {
          var a = Ta(this, 1, 4).week;
          return null == e ? a : this.add(7 * (e - a), "d");
        }
        function xa(e, a) {
          return "string" != typeof e
            ? e
            : isNaN(e)
              ? "number" == typeof (e = a.weekdaysParse(e))
                ? e
                : null
              : parseInt(e, 10);
        }
        function Pa(e, a) {
          return "string" == typeof e
            ? a.weekdaysParse(e) % 7 || 7
            : isNaN(e)
              ? null
              : e;
        }
        function Oa(e, a) {
          return e.slice(a, 7).concat(e.slice(0, a));
        }
        R("d", 0, "do", "day"),
          R("dd", 0, 0, function (e) {
            return this.localeData().weekdaysMin(this, e);
          }),
          R("ddd", 0, 0, function (e) {
            return this.localeData().weekdaysShort(this, e);
          }),
          R("dddd", 0, 0, function (e) {
            return this.localeData().weekdays(this, e);
          }),
          R("e", 0, 0, "weekday"),
          R("E", 0, 0, "isoWeekday"),
          be("d", Me),
          be("e", Me),
          be("E", Me),
          be("dd", function (e, a) {
            return a.weekdaysMinRegex(e);
          }),
          be("ddd", function (e, a) {
            return a.weekdaysShortRegex(e);
          }),
          be("dddd", function (e, a) {
            return a.weekdaysRegex(e);
          }),
          Ae(["dd", "ddd", "dddd"], function (e, a, t, n) {
            var s = t._locale.weekdaysParse(e, n, t._strict);
            null != s ? (a.d = s) : (Y(t).invalidWeekday = e);
          }),
          Ae(["d", "e", "E"], function (e, a, t, n) {
            a[n] = Pe(e);
          });
        var Wa =
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_",
            ),
          Aa = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          Ea = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          Fa = ge,
          za = ge,
          Na = ge;
        function Ja(e, a) {
          var t = i(this._weekdays)
            ? this._weekdays
            : this._weekdays[
                e && !0 !== e && this._weekdays.isFormat.test(a)
                  ? "format"
                  : "standalone"
              ];
          return !0 === e ? Oa(t, this._week.dow) : e ? t[e.day()] : t;
        }
        function Ra(e) {
          return !0 === e
            ? Oa(this._weekdaysShort, this._week.dow)
            : e
              ? this._weekdaysShort[e.day()]
              : this._weekdaysShort;
        }
        function Ca(e) {
          return !0 === e
            ? Oa(this._weekdaysMin, this._week.dow)
            : e
              ? this._weekdaysMin[e.day()]
              : this._weekdaysMin;
        }
        function Ia(e, a, t) {
          var n,
            s,
            r,
            i = e.toLocaleLowerCase();
          if (!this._weekdaysParse)
            for (
              this._weekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._minWeekdaysParse = [],
                n = 0;
              n < 7;
              ++n
            )
              (r = c([2e3, 1]).day(n)),
                (this._minWeekdaysParse[n] = this.weekdaysMin(
                  r,
                  "",
                ).toLocaleLowerCase()),
                (this._shortWeekdaysParse[n] = this.weekdaysShort(
                  r,
                  "",
                ).toLocaleLowerCase()),
                (this._weekdaysParse[n] = this.weekdays(
                  r,
                  "",
                ).toLocaleLowerCase());
          return t
            ? "dddd" === a
              ? -1 !== (s = Be.call(this._weekdaysParse, i))
                ? s
                : null
              : "ddd" === a
                ? -1 !== (s = Be.call(this._shortWeekdaysParse, i))
                  ? s
                  : null
                : -1 !== (s = Be.call(this._minWeekdaysParse, i))
                  ? s
                  : null
            : "dddd" === a
              ? -1 !== (s = Be.call(this._weekdaysParse, i)) ||
                -1 !== (s = Be.call(this._shortWeekdaysParse, i)) ||
                -1 !== (s = Be.call(this._minWeekdaysParse, i))
                ? s
                : null
              : "ddd" === a
                ? -1 !== (s = Be.call(this._shortWeekdaysParse, i)) ||
                  -1 !== (s = Be.call(this._weekdaysParse, i)) ||
                  -1 !== (s = Be.call(this._minWeekdaysParse, i))
                  ? s
                  : null
                : -1 !== (s = Be.call(this._minWeekdaysParse, i)) ||
                    -1 !== (s = Be.call(this._weekdaysParse, i)) ||
                    -1 !== (s = Be.call(this._shortWeekdaysParse, i))
                  ? s
                  : null;
        }
        function Ua(e, a, t) {
          var n, s, r;
          if (this._weekdaysParseExact) return Ia.call(this, e, a, t);
          for (
            this._weekdaysParse ||
              ((this._weekdaysParse = []),
              (this._minWeekdaysParse = []),
              (this._shortWeekdaysParse = []),
              (this._fullWeekdaysParse = [])),
              n = 0;
            n < 7;
            n++
          ) {
            if (
              ((s = c([2e3, 1]).day(n)),
              t &&
                !this._fullWeekdaysParse[n] &&
                ((this._fullWeekdaysParse[n] = new RegExp(
                  "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
                  "i",
                )),
                (this._shortWeekdaysParse[n] = new RegExp(
                  "^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$",
                  "i",
                )),
                (this._minWeekdaysParse[n] = new RegExp(
                  "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
                  "i",
                ))),
              this._weekdaysParse[n] ||
                ((r =
                  "^" +
                  this.weekdays(s, "") +
                  "|^" +
                  this.weekdaysShort(s, "") +
                  "|^" +
                  this.weekdaysMin(s, "")),
                (this._weekdaysParse[n] = new RegExp(r.replace(".", ""), "i"))),
              t && "dddd" === a && this._fullWeekdaysParse[n].test(e))
            )
              return n;
            if (t && "ddd" === a && this._shortWeekdaysParse[n].test(e))
              return n;
            if (t && "dd" === a && this._minWeekdaysParse[n].test(e)) return n;
            if (!t && this._weekdaysParse[n].test(e)) return n;
          }
        }
        function Ga(e) {
          if (!this.isValid()) return null != e ? this : NaN;
          var a = Qe(this, "Day");
          return null != e
            ? ((e = xa(e, this.localeData())), this.add(e - a, "d"))
            : a;
        }
        function Va(e) {
          if (!this.isValid()) return null != e ? this : NaN;
          var a = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return null == e ? a : this.add(e - a, "d");
        }
        function qa(e) {
          if (!this.isValid()) return null != e ? this : NaN;
          if (null != e) {
            var a = Pa(e, this.localeData());
            return this.day(this.day() % 7 ? a : a - 7);
          }
          return this.day() || 7;
        }
        function Ba(e) {
          return this._weekdaysParseExact
            ? (_(this, "_weekdaysRegex") || $a.call(this),
              e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            : (_(this, "_weekdaysRegex") || (this._weekdaysRegex = Fa),
              this._weekdaysStrictRegex && e
                ? this._weekdaysStrictRegex
                : this._weekdaysRegex);
        }
        function Ka(e) {
          return this._weekdaysParseExact
            ? (_(this, "_weekdaysRegex") || $a.call(this),
              e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            : (_(this, "_weekdaysShortRegex") ||
                (this._weekdaysShortRegex = za),
              this._weekdaysShortStrictRegex && e
                ? this._weekdaysShortStrictRegex
                : this._weekdaysShortRegex);
        }
        function Za(e) {
          return this._weekdaysParseExact
            ? (_(this, "_weekdaysRegex") || $a.call(this),
              e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            : (_(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Na),
              this._weekdaysMinStrictRegex && e
                ? this._weekdaysMinStrictRegex
                : this._weekdaysMinRegex);
        }
        function $a() {
          function e(e, a) {
            return a.length - e.length;
          }
          var a,
            t,
            n,
            s,
            r,
            i = [],
            d = [],
            _ = [],
            o = [];
          for (a = 0; a < 7; a++)
            (t = c([2e3, 1]).day(a)),
              (n = je(this.weekdaysMin(t, ""))),
              (s = je(this.weekdaysShort(t, ""))),
              (r = je(this.weekdays(t, ""))),
              i.push(n),
              d.push(s),
              _.push(r),
              o.push(n),
              o.push(s),
              o.push(r);
          i.sort(e),
            d.sort(e),
            _.sort(e),
            o.sort(e),
            (this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i")),
            (this._weekdaysShortRegex = this._weekdaysRegex),
            (this._weekdaysMinRegex = this._weekdaysRegex),
            (this._weekdaysStrictRegex = new RegExp(
              "^(" + _.join("|") + ")",
              "i",
            )),
            (this._weekdaysShortStrictRegex = new RegExp(
              "^(" + d.join("|") + ")",
              "i",
            )),
            (this._weekdaysMinStrictRegex = new RegExp(
              "^(" + i.join("|") + ")",
              "i",
            ));
        }
        function Qa() {
          return this.hours() % 12 || 12;
        }
        function Xa() {
          return this.hours() || 24;
        }
        function et(e, a) {
          R(e, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), a);
          });
        }
        function at(e, a) {
          return a._meridiemParse;
        }
        function tt(e) {
          return "p" === (e + "").toLowerCase().charAt(0);
        }
        R("H", ["HH", 2], 0, "hour"),
          R("h", ["hh", 2], 0, Qa),
          R("k", ["kk", 2], 0, Xa),
          R("hmm", 0, 0, function () {
            return "" + Qa.apply(this) + E(this.minutes(), 2);
          }),
          R("hmmss", 0, 0, function () {
            return (
              "" + Qa.apply(this) + E(this.minutes(), 2) + E(this.seconds(), 2)
            );
          }),
          R("Hmm", 0, 0, function () {
            return "" + this.hours() + E(this.minutes(), 2);
          }),
          R("Hmmss", 0, 0, function () {
            return (
              "" + this.hours() + E(this.minutes(), 2) + E(this.seconds(), 2)
            );
          }),
          et("a", !0),
          et("A", !1),
          be("a", at),
          be("A", at),
          be("H", Me, ve),
          be("h", Me, we),
          be("k", Me, we),
          be("HH", Me, oe),
          be("hh", Me, oe),
          be("kk", Me, oe),
          be("hmm", he),
          be("hmmss", ce),
          be("Hmm", he),
          be("Hmmss", ce),
          We(["H", "HH"], Re),
          We(["k", "kk"], function (e, a, t) {
            var n = Pe(e);
            a[Re] = 24 === n ? 0 : n;
          }),
          We(["a", "A"], function (e, a, t) {
            (t._isPm = t._locale.isPM(e)), (t._meridiem = e);
          }),
          We(["h", "hh"], function (e, a, t) {
            (a[Re] = Pe(e)), (Y(t).bigHour = !0);
          }),
          We("hmm", function (e, a, t) {
            var n = e.length - 2;
            (a[Re] = Pe(e.substr(0, n))),
              (a[Ce] = Pe(e.substr(n))),
              (Y(t).bigHour = !0);
          }),
          We("hmmss", function (e, a, t) {
            var n = e.length - 4,
              s = e.length - 2;
            (a[Re] = Pe(e.substr(0, n))),
              (a[Ce] = Pe(e.substr(n, 2))),
              (a[Ie] = Pe(e.substr(s))),
              (Y(t).bigHour = !0);
          }),
          We("Hmm", function (e, a, t) {
            var n = e.length - 2;
            (a[Re] = Pe(e.substr(0, n))), (a[Ce] = Pe(e.substr(n)));
          }),
          We("Hmmss", function (e, a, t) {
            var n = e.length - 4,
              s = e.length - 2;
            (a[Re] = Pe(e.substr(0, n))),
              (a[Ce] = Pe(e.substr(n, 2))),
              (a[Ie] = Pe(e.substr(s)));
          });
        var nt = /[ap]\.?m?\.?/i,
          st = $e("Hours", !0);
        function rt(e, a, t) {
          return e > 11 ? (t ? "pm" : "PM") : t ? "am" : "AM";
        }
        var it,
          dt = {
            calendar: W,
            longDateFormat: V,
            invalidDate: B,
            ordinal: Z,
            dayOfMonthOrdinalParse: $,
            relativeTime: X,
            months: sa,
            monthsShort: ra,
            week: va,
            weekdays: Wa,
            weekdaysMin: Ea,
            weekdaysShort: Aa,
            meridiemParse: nt,
          },
          _t = {},
          ot = {};
        function ut(e, a) {
          var t,
            n = Math.min(e.length, a.length);
          for (t = 0; t < n; t += 1) if (e[t] !== a[t]) return t;
          return n;
        }
        function mt(e) {
          return e ? e.toLowerCase().replace("_", "-") : e;
        }
        function lt(e) {
          for (var a, t, n, s, r = 0; r < e.length; ) {
            for (
              a = (s = mt(e[r]).split("-")).length,
                t = (t = mt(e[r + 1])) ? t.split("-") : null;
              a > 0;

            ) {
              if ((n = ht(s.slice(0, a).join("-")))) return n;
              if (t && t.length >= a && ut(s, t) >= a - 1) break;
              a--;
            }
            r++;
          }
          return it;
        }
        function Mt(e) {
          return !(!e || !e.match("^[^/\\\\]*$"));
        }
        function ht(a) {
          var n = null;
          if (void 0 === _t[a] && e && e.exports && Mt(a))
            try {
              (n = it._abbr), t(95126)("./" + a), ct(n);
            } catch (e) {
              _t[a] = null;
            }
          return _t[a];
        }
        function ct(e, a) {
          var t;
          return (
            e &&
              ((t = u(a) ? yt(e) : Lt(e, a))
                ? (it = t)
                : "undefined" != typeof console &&
                  console.warn &&
                  console.warn(
                    "Locale " + e + " not found. Did you forget to load it?",
                  )),
            it._abbr
          );
        }
        function Lt(e, a) {
          if (null !== a) {
            var t,
              n = dt;
            if (((a.abbr = e), null != _t[e]))
              S(
                "defineLocaleOverride",
                "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.",
              ),
                (n = _t[e]._config);
            else if (null != a.parentLocale)
              if (null != _t[a.parentLocale]) n = _t[a.parentLocale]._config;
              else {
                if (null == (t = ht(a.parentLocale)))
                  return (
                    ot[a.parentLocale] || (ot[a.parentLocale] = []),
                    ot[a.parentLocale].push({ name: e, config: a }),
                    null
                  );
                n = t._config;
              }
            return (
              (_t[e] = new O(P(n, a))),
              ot[e] &&
                ot[e].forEach(function (e) {
                  Lt(e.name, e.config);
                }),
              ct(e),
              _t[e]
            );
          }
          return delete _t[e], null;
        }
        function Yt(e, a) {
          if (null != a) {
            var t,
              n,
              s = dt;
            null != _t[e] && null != _t[e].parentLocale
              ? _t[e].set(P(_t[e]._config, a))
              : (null != (n = ht(e)) && (s = n._config),
                (a = P(s, a)),
                null == n && (a.abbr = e),
                ((t = new O(a)).parentLocale = _t[e]),
                (_t[e] = t)),
              ct(e);
          } else
            null != _t[e] &&
              (null != _t[e].parentLocale
                ? ((_t[e] = _t[e].parentLocale), e === ct() && ct(e))
                : null != _t[e] && delete _t[e]);
          return _t[e];
        }
        function yt(e) {
          var a;
          if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
            return it;
          if (!i(e)) {
            if ((a = ht(e))) return a;
            e = [e];
          }
          return lt(e);
        }
        function ft() {
          return b(_t);
        }
        function kt(e) {
          var a,
            t = e._a;
          return (
            t &&
              -2 === Y(e).overflow &&
              ((a =
                t[Ne] < 0 || t[Ne] > 11
                  ? Ne
                  : t[Je] < 1 || t[Je] > na(t[ze], t[Ne])
                    ? Je
                    : t[Re] < 0 ||
                        t[Re] > 24 ||
                        (24 === t[Re] &&
                          (0 !== t[Ce] || 0 !== t[Ie] || 0 !== t[Ue]))
                      ? Re
                      : t[Ce] < 0 || t[Ce] > 59
                        ? Ce
                        : t[Ie] < 0 || t[Ie] > 59
                          ? Ie
                          : t[Ue] < 0 || t[Ue] > 999
                            ? Ue
                            : -1),
              Y(e)._overflowDayOfYear && (a < ze || a > Je) && (a = Je),
              Y(e)._overflowWeeks && -1 === a && (a = Ge),
              Y(e)._overflowWeekday && -1 === a && (a = Ve),
              (Y(e).overflow = a)),
            e
          );
        }
        var pt =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          Dt =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          Tt = /Z|[+-]\d\d(?::?\d\d)?/,
          gt = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/],
            ["YYYYMM", /\d{6}/, !1],
            ["YYYY", /\d{4}/, !1],
          ],
          wt = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/],
          ],
          vt = /^\/?Date\((-?\d+)/i,
          bt =
            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
          Ht = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480,
          };
        function St(e) {
          var a,
            t,
            n,
            s,
            r,
            i,
            d = e._i,
            _ = pt.exec(d) || Dt.exec(d),
            o = gt.length,
            u = wt.length;
          if (_) {
            for (Y(e).iso = !0, a = 0, t = o; a < t; a++)
              if (gt[a][1].exec(_[1])) {
                (s = gt[a][0]), (n = !1 !== gt[a][2]);
                break;
              }
            if (null == s) return void (e._isValid = !1);
            if (_[3]) {
              for (a = 0, t = u; a < t; a++)
                if (wt[a][1].exec(_[3])) {
                  r = (_[2] || " ") + wt[a][0];
                  break;
                }
              if (null == r) return void (e._isValid = !1);
            }
            if (!n && null != r) return void (e._isValid = !1);
            if (_[4]) {
              if (!Tt.exec(_[4])) return void (e._isValid = !1);
              i = "Z";
            }
            (e._f = s + (r || "") + (i || "")), Rt(e);
          } else e._isValid = !1;
        }
        function jt(e, a, t, n, s, r) {
          var i = [
            xt(e),
            ra.indexOf(a),
            parseInt(t, 10),
            parseInt(n, 10),
            parseInt(s, 10),
          ];
          return r && i.push(parseInt(r, 10)), i;
        }
        function xt(e) {
          var a = parseInt(e, 10);
          return a <= 49 ? 2e3 + a : a <= 999 ? 1900 + a : a;
        }
        function Pt(e) {
          return e
            .replace(/\([^()]*\)|[\n\t]/g, " ")
            .replace(/(\s\s+)/g, " ")
            .replace(/^\s\s*/, "")
            .replace(/\s\s*$/, "");
        }
        function Ot(e, a, t) {
          return (
            !e ||
            Aa.indexOf(e) === new Date(a[0], a[1], a[2]).getDay() ||
            ((Y(t).weekdayMismatch = !0), (t._isValid = !1), !1)
          );
        }
        function Wt(e, a, t) {
          if (e) return Ht[e];
          if (a) return 0;
          var n = parseInt(t, 10),
            s = n % 100;
          return ((n - s) / 100) * 60 + s;
        }
        function At(e) {
          var a,
            t = bt.exec(Pt(e._i));
          if (t) {
            if (((a = jt(t[4], t[3], t[2], t[5], t[6], t[7])), !Ot(t[1], a, e)))
              return;
            (e._a = a),
              (e._tzm = Wt(t[8], t[9], t[10])),
              (e._d = ka.apply(null, e._a)),
              e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
              (Y(e).rfc2822 = !0);
          } else e._isValid = !1;
        }
        function Et(e) {
          var a = vt.exec(e._i);
          null === a
            ? (St(e),
              !1 === e._isValid &&
                (delete e._isValid,
                At(e),
                !1 === e._isValid &&
                  (delete e._isValid,
                  e._strict
                    ? (e._isValid = !1)
                    : s.createFromInputFallback(e))))
            : (e._d = new Date(+a[1]));
        }
        function Ft(e, a, t) {
          return null != e ? e : null != a ? a : t;
        }
        function zt(e) {
          var a = new Date(s.now());
          return e._useUTC
            ? [a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()]
            : [a.getFullYear(), a.getMonth(), a.getDate()];
        }
        function Nt(e) {
          var a,
            t,
            n,
            s,
            r,
            i = [];
          if (!e._d) {
            for (
              n = zt(e),
                e._w && null == e._a[Je] && null == e._a[Ne] && Jt(e),
                null != e._dayOfYear &&
                  ((r = Ft(e._a[ze], n[ze])),
                  (e._dayOfYear > qe(r) || 0 === e._dayOfYear) &&
                    (Y(e)._overflowDayOfYear = !0),
                  (t = ka(r, 0, e._dayOfYear)),
                  (e._a[Ne] = t.getUTCMonth()),
                  (e._a[Je] = t.getUTCDate())),
                a = 0;
              a < 3 && null == e._a[a];
              ++a
            )
              e._a[a] = i[a] = n[a];
            for (; a < 7; a++)
              e._a[a] = i[a] = null == e._a[a] ? (2 === a ? 1 : 0) : e._a[a];
            24 === e._a[Re] &&
              0 === e._a[Ce] &&
              0 === e._a[Ie] &&
              0 === e._a[Ue] &&
              ((e._nextDay = !0), (e._a[Re] = 0)),
              (e._d = (e._useUTC ? ka : fa).apply(null, i)),
              (s = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
              null != e._tzm &&
                e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
              e._nextDay && (e._a[Re] = 24),
              e._w &&
                void 0 !== e._w.d &&
                e._w.d !== s &&
                (Y(e).weekdayMismatch = !0);
          }
        }
        function Jt(e) {
          var a, t, n, s, r, i, d, _, o;
          null != (a = e._w).GG || null != a.W || null != a.E
            ? ((r = 1),
              (i = 4),
              (t = Ft(a.GG, e._a[ze], Ta(Kt(), 1, 4).year)),
              (n = Ft(a.W, 1)),
              ((s = Ft(a.E, 1)) < 1 || s > 7) && (_ = !0))
            : ((r = e._locale._week.dow),
              (i = e._locale._week.doy),
              (o = Ta(Kt(), r, i)),
              (t = Ft(a.gg, e._a[ze], o.year)),
              (n = Ft(a.w, o.week)),
              null != a.d
                ? ((s = a.d) < 0 || s > 6) && (_ = !0)
                : null != a.e
                  ? ((s = a.e + r), (a.e < 0 || a.e > 6) && (_ = !0))
                  : (s = r)),
            n < 1 || n > ga(t, r, i)
              ? (Y(e)._overflowWeeks = !0)
              : null != _
                ? (Y(e)._overflowWeekday = !0)
                : ((d = Da(t, n, s, r, i)),
                  (e._a[ze] = d.year),
                  (e._dayOfYear = d.dayOfYear));
        }
        function Rt(e) {
          if (e._f !== s.ISO_8601)
            if (e._f !== s.RFC_2822) {
              (e._a = []), (Y(e).empty = !0);
              var a,
                t,
                n,
                r,
                i,
                d,
                _,
                o = "" + e._i,
                u = o.length,
                m = 0;
              for (
                _ = (n = G(e._f, e._locale).match(F) || []).length, a = 0;
                a < _;
                a++
              )
                (r = n[a]),
                  (t = (o.match(He(r, e)) || [])[0]) &&
                    ((i = o.substr(0, o.indexOf(t))).length > 0 &&
                      Y(e).unusedInput.push(i),
                    (o = o.slice(o.indexOf(t) + t.length)),
                    (m += t.length)),
                  J[r]
                    ? (t ? (Y(e).empty = !1) : Y(e).unusedTokens.push(r),
                      Ee(r, t, e))
                    : e._strict && !t && Y(e).unusedTokens.push(r);
              (Y(e).charsLeftOver = u - m),
                o.length > 0 && Y(e).unusedInput.push(o),
                e._a[Re] <= 12 &&
                  !0 === Y(e).bigHour &&
                  e._a[Re] > 0 &&
                  (Y(e).bigHour = void 0),
                (Y(e).parsedDateParts = e._a.slice(0)),
                (Y(e).meridiem = e._meridiem),
                (e._a[Re] = Ct(e._locale, e._a[Re], e._meridiem)),
                null !== (d = Y(e).era) &&
                  (e._a[ze] = e._locale.erasConvertYear(d, e._a[ze])),
                Nt(e),
                kt(e);
            } else At(e);
          else St(e);
        }
        function Ct(e, a, t) {
          var n;
          return null == t
            ? a
            : null != e.meridiemHour
              ? e.meridiemHour(a, t)
              : null != e.isPM
                ? ((n = e.isPM(t)) && a < 12 && (a += 12),
                  n || 12 !== a || (a = 0),
                  a)
                : a;
        }
        function It(e) {
          var a,
            t,
            n,
            s,
            r,
            i,
            d = !1,
            _ = e._f.length;
          if (0 === _)
            return (Y(e).invalidFormat = !0), void (e._d = new Date(NaN));
          for (s = 0; s < _; s++)
            (r = 0),
              (i = !1),
              (a = D({}, e)),
              null != e._useUTC && (a._useUTC = e._useUTC),
              (a._f = e._f[s]),
              Rt(a),
              y(a) && (i = !0),
              (r += Y(a).charsLeftOver),
              (r += 10 * Y(a).unusedTokens.length),
              (Y(a).score = r),
              d
                ? r < n && ((n = r), (t = a))
                : (null == n || r < n || i) &&
                  ((n = r), (t = a), i && (d = !0));
          h(e, t || a);
        }
        function Ut(e) {
          if (!e._d) {
            var a = se(e._i),
              t = void 0 === a.day ? a.date : a.day;
            (e._a = M(
              [a.year, a.month, t, a.hour, a.minute, a.second, a.millisecond],
              function (e) {
                return e && parseInt(e, 10);
              },
            )),
              Nt(e);
          }
        }
        function Gt(e) {
          var a = new T(kt(Vt(e)));
          return a._nextDay && (a.add(1, "d"), (a._nextDay = void 0)), a;
        }
        function Vt(e) {
          var a = e._i,
            t = e._f;
          return (
            (e._locale = e._locale || yt(e._l)),
            null === a || (void 0 === t && "" === a)
              ? f({ nullInput: !0 })
              : ("string" == typeof a && (e._i = a = e._locale.preparse(a)),
                g(a)
                  ? new T(kt(a))
                  : (l(a) ? (e._d = a) : i(t) ? It(e) : t ? Rt(e) : qt(e),
                    y(e) || (e._d = null),
                    e))
          );
        }
        function qt(e) {
          var a = e._i;
          u(a)
            ? (e._d = new Date(s.now()))
            : l(a)
              ? (e._d = new Date(a.valueOf()))
              : "string" == typeof a
                ? Et(e)
                : i(a)
                  ? ((e._a = M(a.slice(0), function (e) {
                      return parseInt(e, 10);
                    })),
                    Nt(e))
                  : d(a)
                    ? Ut(e)
                    : m(a)
                      ? (e._d = new Date(a))
                      : s.createFromInputFallback(e);
        }
        function Bt(e, a, t, n, s) {
          var r = {};
          return (
            (!0 !== a && !1 !== a) || ((n = a), (a = void 0)),
            (!0 !== t && !1 !== t) || ((n = t), (t = void 0)),
            ((d(e) && o(e)) || (i(e) && 0 === e.length)) && (e = void 0),
            (r._isAMomentObject = !0),
            (r._useUTC = r._isUTC = s),
            (r._l = t),
            (r._i = e),
            (r._f = a),
            (r._strict = n),
            Gt(r)
          );
        }
        function Kt(e, a, t, n) {
          return Bt(e, a, t, n, !1);
        }
        (s.createFromInputFallback = v(
          "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
          function (e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
          },
        )),
          (s.ISO_8601 = function () {}),
          (s.RFC_2822 = function () {});
        var Zt = v(
            "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
              var e = Kt.apply(null, arguments);
              return this.isValid() && e.isValid()
                ? e < this
                  ? this
                  : e
                : f();
            },
          ),
          $t = v(
            "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
              var e = Kt.apply(null, arguments);
              return this.isValid() && e.isValid()
                ? e > this
                  ? this
                  : e
                : f();
            },
          );
        function Qt(e, a) {
          var t, n;
          if ((1 === a.length && i(a[0]) && (a = a[0]), !a.length)) return Kt();
          for (t = a[0], n = 1; n < a.length; ++n)
            (a[n].isValid() && !a[n][e](t)) || (t = a[n]);
          return t;
        }
        function Xt() {
          return Qt("isBefore", [].slice.call(arguments, 0));
        }
        function en() {
          return Qt("isAfter", [].slice.call(arguments, 0));
        }
        var an = function () {
            return Date.now ? Date.now() : +new Date();
          },
          tn = [
            "year",
            "quarter",
            "month",
            "week",
            "day",
            "hour",
            "minute",
            "second",
            "millisecond",
          ];
        function nn(e) {
          var a,
            t,
            n = !1,
            s = tn.length;
          for (a in e)
            if (
              _(e, a) &&
              (-1 === Be.call(tn, a) || (null != e[a] && isNaN(e[a])))
            )
              return !1;
          for (t = 0; t < s; ++t)
            if (e[tn[t]]) {
              if (n) return !1;
              parseFloat(e[tn[t]]) !== Pe(e[tn[t]]) && (n = !0);
            }
          return !0;
        }
        function sn() {
          return this._isValid;
        }
        function rn() {
          return Sn(NaN);
        }
        function dn(e) {
          var a = se(e),
            t = a.year || 0,
            n = a.quarter || 0,
            s = a.month || 0,
            r = a.week || a.isoWeek || 0,
            i = a.day || 0,
            d = a.hour || 0,
            _ = a.minute || 0,
            o = a.second || 0,
            u = a.millisecond || 0;
          (this._isValid = nn(a)),
            (this._milliseconds = +u + 1e3 * o + 6e4 * _ + 1e3 * d * 60 * 60),
            (this._days = +i + 7 * r),
            (this._months = +s + 3 * n + 12 * t),
            (this._data = {}),
            (this._locale = yt()),
            this._bubble();
        }
        function _n(e) {
          return e instanceof dn;
        }
        function on(e) {
          return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
        }
        function un(e, a, t) {
          var n,
            s = Math.min(e.length, a.length),
            r = Math.abs(e.length - a.length),
            i = 0;
          for (n = 0; n < s; n++)
            ((t && e[n] !== a[n]) || (!t && Pe(e[n]) !== Pe(a[n]))) && i++;
          return i + r;
        }
        function mn(e, a) {
          R(e, 0, 0, function () {
            var e = this.utcOffset(),
              t = "+";
            return (
              e < 0 && ((e = -e), (t = "-")),
              t + E(~~(e / 60), 2) + a + E(~~e % 60, 2)
            );
          });
        }
        mn("Z", ":"),
          mn("ZZ", ""),
          be("Z", De),
          be("ZZ", De),
          We(["Z", "ZZ"], function (e, a, t) {
            (t._useUTC = !0), (t._tzm = Mn(De, e));
          });
        var ln = /([\+\-]|\d\d)/gi;
        function Mn(e, a) {
          var t,
            n,
            s = (a || "").match(e);
          return null === s
            ? null
            : 0 ===
                (n =
                  60 *
                    (t = ((s[s.length - 1] || []) + "").match(ln) || [
                      "-",
                      0,
                      0,
                    ])[1] +
                  Pe(t[2]))
              ? 0
              : "+" === t[0]
                ? n
                : -n;
        }
        function hn(e, a) {
          var t, n;
          return a._isUTC
            ? ((t = a.clone()),
              (n =
                (g(e) || l(e) ? e.valueOf() : Kt(e).valueOf()) - t.valueOf()),
              t._d.setTime(t._d.valueOf() + n),
              s.updateOffset(t, !1),
              t)
            : Kt(e).local();
        }
        function cn(e) {
          return -Math.round(e._d.getTimezoneOffset());
        }
        function Ln(e, a, t) {
          var n,
            r = this._offset || 0;
          if (!this.isValid()) return null != e ? this : NaN;
          if (null != e) {
            if ("string" == typeof e) {
              if (null === (e = Mn(De, e))) return this;
            } else Math.abs(e) < 16 && !t && (e *= 60);
            return (
              !this._isUTC && a && (n = cn(this)),
              (this._offset = e),
              (this._isUTC = !0),
              null != n && this.add(n, "m"),
              r !== e &&
                (!a || this._changeInProgress
                  ? Wn(this, Sn(e - r, "m"), 1, !1)
                  : this._changeInProgress ||
                    ((this._changeInProgress = !0),
                    s.updateOffset(this, !0),
                    (this._changeInProgress = null))),
              this
            );
          }
          return this._isUTC ? r : cn(this);
        }
        function Yn(e, a) {
          return null != e
            ? ("string" != typeof e && (e = -e), this.utcOffset(e, a), this)
            : -this.utcOffset();
        }
        function yn(e) {
          return this.utcOffset(0, e);
        }
        function fn(e) {
          return (
            this._isUTC &&
              (this.utcOffset(0, e),
              (this._isUTC = !1),
              e && this.subtract(cn(this), "m")),
            this
          );
        }
        function kn() {
          if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
          else if ("string" == typeof this._i) {
            var e = Mn(pe, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
          }
          return this;
        }
        function pn(e) {
          return (
            !!this.isValid() &&
            ((e = e ? Kt(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0)
          );
        }
        function Dn() {
          return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
          );
        }
        function Tn() {
          if (!u(this._isDSTShifted)) return this._isDSTShifted;
          var e,
            a = {};
          return (
            D(a, this),
            (a = Vt(a))._a
              ? ((e = a._isUTC ? c(a._a) : Kt(a._a)),
                (this._isDSTShifted =
                  this.isValid() && un(a._a, e.toArray()) > 0))
              : (this._isDSTShifted = !1),
            this._isDSTShifted
          );
        }
        function gn() {
          return !!this.isValid() && !this._isUTC;
        }
        function wn() {
          return !!this.isValid() && this._isUTC;
        }
        function vn() {
          return !!this.isValid() && this._isUTC && 0 === this._offset;
        }
        s.updateOffset = function () {};
        var bn = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
          Hn =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        function Sn(e, a) {
          var t,
            n,
            s,
            r = e,
            i = null;
          return (
            _n(e)
              ? (r = { ms: e._milliseconds, d: e._days, M: e._months })
              : m(e) || !isNaN(+e)
                ? ((r = {}), a ? (r[a] = +e) : (r.milliseconds = +e))
                : (i = bn.exec(e))
                  ? ((t = "-" === i[1] ? -1 : 1),
                    (r = {
                      y: 0,
                      d: Pe(i[Je]) * t,
                      h: Pe(i[Re]) * t,
                      m: Pe(i[Ce]) * t,
                      s: Pe(i[Ie]) * t,
                      ms: Pe(on(1e3 * i[Ue])) * t,
                    }))
                  : (i = Hn.exec(e))
                    ? ((t = "-" === i[1] ? -1 : 1),
                      (r = {
                        y: jn(i[2], t),
                        M: jn(i[3], t),
                        w: jn(i[4], t),
                        d: jn(i[5], t),
                        h: jn(i[6], t),
                        m: jn(i[7], t),
                        s: jn(i[8], t),
                      }))
                    : null == r
                      ? (r = {})
                      : "object" == typeof r &&
                        ("from" in r || "to" in r) &&
                        ((s = Pn(Kt(r.from), Kt(r.to))),
                        ((r = {}).ms = s.milliseconds),
                        (r.M = s.months)),
            (n = new dn(r)),
            _n(e) && _(e, "_locale") && (n._locale = e._locale),
            _n(e) && _(e, "_isValid") && (n._isValid = e._isValid),
            n
          );
        }
        function jn(e, a) {
          var t = e && parseFloat(e.replace(",", "."));
          return (isNaN(t) ? 0 : t) * a;
        }
        function xn(e, a) {
          var t = {};
          return (
            (t.months = a.month() - e.month() + 12 * (a.year() - e.year())),
            e.clone().add(t.months, "M").isAfter(a) && --t.months,
            (t.milliseconds = +a - +e.clone().add(t.months, "M")),
            t
          );
        }
        function Pn(e, a) {
          var t;
          return e.isValid() && a.isValid()
            ? ((a = hn(a, e)),
              e.isBefore(a)
                ? (t = xn(e, a))
                : (((t = xn(a, e)).milliseconds = -t.milliseconds),
                  (t.months = -t.months)),
              t)
            : { milliseconds: 0, months: 0 };
        }
        function On(e, a) {
          return function (t, n) {
            var s;
            return (
              null === n ||
                isNaN(+n) ||
                (S(
                  a,
                  "moment()." +
                    a +
                    "(period, number) is deprecated. Please use moment()." +
                    a +
                    "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.",
                ),
                (s = t),
                (t = n),
                (n = s)),
              Wn(this, Sn(t, n), e),
              this
            );
          };
        }
        function Wn(e, a, t, n) {
          var r = a._milliseconds,
            i = on(a._days),
            d = on(a._months);
          e.isValid() &&
            ((n = null == n || n),
            d && Ma(e, Qe(e, "Month") + d * t),
            i && Xe(e, "Date", Qe(e, "Date") + i * t),
            r && e._d.setTime(e._d.valueOf() + r * t),
            n && s.updateOffset(e, i || d));
        }
        (Sn.fn = dn.prototype), (Sn.invalid = rn);
        var An = On(1, "add"),
          En = On(-1, "subtract");
        function Fn(e) {
          return "string" == typeof e || e instanceof String;
        }
        function zn(e) {
          return g(e) || l(e) || Fn(e) || m(e) || Jn(e) || Nn(e) || null == e;
        }
        function Nn(e) {
          var a,
            t,
            n = d(e) && !o(e),
            s = !1,
            r = [
              "years",
              "year",
              "y",
              "months",
              "month",
              "M",
              "days",
              "day",
              "d",
              "dates",
              "date",
              "D",
              "hours",
              "hour",
              "h",
              "minutes",
              "minute",
              "m",
              "seconds",
              "second",
              "s",
              "milliseconds",
              "millisecond",
              "ms",
            ],
            i = r.length;
          for (a = 0; a < i; a += 1) (t = r[a]), (s = s || _(e, t));
          return n && s;
        }
        function Jn(e) {
          var a = i(e),
            t = !1;
          return (
            a &&
              (t =
                0 ===
                e.filter(function (a) {
                  return !m(a) && Fn(e);
                }).length),
            a && t
          );
        }
        function Rn(e) {
          var a,
            t,
            n = d(e) && !o(e),
            s = !1,
            r = [
              "sameDay",
              "nextDay",
              "lastDay",
              "nextWeek",
              "lastWeek",
              "sameElse",
            ];
          for (a = 0; a < r.length; a += 1) (t = r[a]), (s = s || _(e, t));
          return n && s;
        }
        function Cn(e, a) {
          var t = e.diff(a, "days", !0);
          return t < -6
            ? "sameElse"
            : t < -1
              ? "lastWeek"
              : t < 0
                ? "lastDay"
                : t < 1
                  ? "sameDay"
                  : t < 2
                    ? "nextDay"
                    : t < 7
                      ? "nextWeek"
                      : "sameElse";
        }
        function In(e, a) {
          1 === arguments.length &&
            (arguments[0]
              ? zn(arguments[0])
                ? ((e = arguments[0]), (a = void 0))
                : Rn(arguments[0]) && ((a = arguments[0]), (e = void 0))
              : ((e = void 0), (a = void 0)));
          var t = e || Kt(),
            n = hn(t, this).startOf("day"),
            r = s.calendarFormat(this, n) || "sameElse",
            i = a && (j(a[r]) ? a[r].call(this, t) : a[r]);
          return this.format(i || this.localeData().calendar(r, this, Kt(t)));
        }
        function Un() {
          return new T(this);
        }
        function Gn(e, a) {
          var t = g(e) ? e : Kt(e);
          return (
            !(!this.isValid() || !t.isValid()) &&
            ("millisecond" === (a = ne(a) || "millisecond")
              ? this.valueOf() > t.valueOf()
              : t.valueOf() < this.clone().startOf(a).valueOf())
          );
        }
        function Vn(e, a) {
          var t = g(e) ? e : Kt(e);
          return (
            !(!this.isValid() || !t.isValid()) &&
            ("millisecond" === (a = ne(a) || "millisecond")
              ? this.valueOf() < t.valueOf()
              : this.clone().endOf(a).valueOf() < t.valueOf())
          );
        }
        function qn(e, a, t, n) {
          var s = g(e) ? e : Kt(e),
            r = g(a) ? a : Kt(a);
          return (
            !!(this.isValid() && s.isValid() && r.isValid()) &&
            ("(" === (n = n || "()")[0]
              ? this.isAfter(s, t)
              : !this.isBefore(s, t)) &&
            (")" === n[1] ? this.isBefore(r, t) : !this.isAfter(r, t))
          );
        }
        function Bn(e, a) {
          var t,
            n = g(e) ? e : Kt(e);
          return (
            !(!this.isValid() || !n.isValid()) &&
            ("millisecond" === (a = ne(a) || "millisecond")
              ? this.valueOf() === n.valueOf()
              : ((t = n.valueOf()),
                this.clone().startOf(a).valueOf() <= t &&
                  t <= this.clone().endOf(a).valueOf()))
          );
        }
        function Kn(e, a) {
          return this.isSame(e, a) || this.isAfter(e, a);
        }
        function Zn(e, a) {
          return this.isSame(e, a) || this.isBefore(e, a);
        }
        function $n(e, a, t) {
          var n, s, r;
          if (!this.isValid()) return NaN;
          if (!(n = hn(e, this)).isValid()) return NaN;
          switch (
            ((s = 6e4 * (n.utcOffset() - this.utcOffset())), (a = ne(a)))
          ) {
            case "year":
              r = Qn(this, n) / 12;
              break;
            case "month":
              r = Qn(this, n);
              break;
            case "quarter":
              r = Qn(this, n) / 3;
              break;
            case "second":
              r = (this - n) / 1e3;
              break;
            case "minute":
              r = (this - n) / 6e4;
              break;
            case "hour":
              r = (this - n) / 36e5;
              break;
            case "day":
              r = (this - n - s) / 864e5;
              break;
            case "week":
              r = (this - n - s) / 6048e5;
              break;
            default:
              r = this - n;
          }
          return t ? r : xe(r);
        }
        function Qn(e, a) {
          if (e.date() < a.date()) return -Qn(a, e);
          var t = 12 * (a.year() - e.year()) + (a.month() - e.month()),
            n = e.clone().add(t, "months");
          return (
            -(
              t +
              (a - n < 0
                ? (a - n) / (n - e.clone().add(t - 1, "months"))
                : (a - n) / (e.clone().add(t + 1, "months") - n))
            ) || 0
          );
        }
        function Xn() {
          return this.clone()
            .locale("en")
            .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        }
        function es(e) {
          if (!this.isValid()) return null;
          var a = !0 !== e,
            t = a ? this.clone().utc() : this;
          return t.year() < 0 || t.year() > 9999
            ? U(
                t,
                a
                  ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                  : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ",
              )
            : j(Date.prototype.toISOString)
              ? a
                ? this.toDate().toISOString()
                : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                    .toISOString()
                    .replace("Z", U(t, "Z"))
              : U(
                  t,
                  a
                    ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                    : "YYYY-MM-DD[T]HH:mm:ss.SSSZ",
                );
        }
        function as() {
          if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
          var e,
            a,
            t,
            n,
            s = "moment",
            r = "";
          return (
            this.isLocal() ||
              ((s = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
              (r = "Z")),
            (e = "[" + s + '("]'),
            (a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
            (t = "-MM-DD[T]HH:mm:ss.SSS"),
            (n = r + '[")]'),
            this.format(e + a + t + n)
          );
        }
        function ts(e) {
          e || (e = this.isUtc() ? s.defaultFormatUtc : s.defaultFormat);
          var a = U(this, e);
          return this.localeData().postformat(a);
        }
        function ns(e, a) {
          return this.isValid() && ((g(e) && e.isValid()) || Kt(e).isValid())
            ? Sn({ to: this, from: e }).locale(this.locale()).humanize(!a)
            : this.localeData().invalidDate();
        }
        function ss(e) {
          return this.from(Kt(), e);
        }
        function rs(e, a) {
          return this.isValid() && ((g(e) && e.isValid()) || Kt(e).isValid())
            ? Sn({ from: this, to: e }).locale(this.locale()).humanize(!a)
            : this.localeData().invalidDate();
        }
        function is(e) {
          return this.to(Kt(), e);
        }
        function ds(e) {
          var a;
          return void 0 === e
            ? this._locale._abbr
            : (null != (a = yt(e)) && (this._locale = a), this);
        }
        (s.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
          (s.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
        var _s = v(
          "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
          function (e) {
            return void 0 === e ? this.localeData() : this.locale(e);
          },
        );
        function os() {
          return this._locale;
        }
        var us = 1e3,
          ms = 60 * us,
          ls = 60 * ms,
          Ms = 3506328 * ls;
        function hs(e, a) {
          return ((e % a) + a) % a;
        }
        function cs(e, a, t) {
          return e < 100 && e >= 0
            ? new Date(e + 400, a, t) - Ms
            : new Date(e, a, t).valueOf();
        }
        function Ls(e, a, t) {
          return e < 100 && e >= 0
            ? Date.UTC(e + 400, a, t) - Ms
            : Date.UTC(e, a, t);
        }
        function Ys(e) {
          var a, t;
          if (void 0 === (e = ne(e)) || "millisecond" === e || !this.isValid())
            return this;
          switch (((t = this._isUTC ? Ls : cs), e)) {
            case "year":
              a = t(this.year(), 0, 1);
              break;
            case "quarter":
              a = t(this.year(), this.month() - (this.month() % 3), 1);
              break;
            case "month":
              a = t(this.year(), this.month(), 1);
              break;
            case "week":
              a = t(this.year(), this.month(), this.date() - this.weekday());
              break;
            case "isoWeek":
              a = t(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1),
              );
              break;
            case "day":
            case "date":
              a = t(this.year(), this.month(), this.date());
              break;
            case "hour":
              (a = this._d.valueOf()),
                (a -= hs(a + (this._isUTC ? 0 : this.utcOffset() * ms), ls));
              break;
            case "minute":
              (a = this._d.valueOf()), (a -= hs(a, ms));
              break;
            case "second":
              (a = this._d.valueOf()), (a -= hs(a, us));
          }
          return this._d.setTime(a), s.updateOffset(this, !0), this;
        }
        function ys(e) {
          var a, t;
          if (void 0 === (e = ne(e)) || "millisecond" === e || !this.isValid())
            return this;
          switch (((t = this._isUTC ? Ls : cs), e)) {
            case "year":
              a = t(this.year() + 1, 0, 1) - 1;
              break;
            case "quarter":
              a = t(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
              break;
            case "month":
              a = t(this.year(), this.month() + 1, 1) - 1;
              break;
            case "week":
              a =
                t(this.year(), this.month(), this.date() - this.weekday() + 7) -
                1;
              break;
            case "isoWeek":
              a =
                t(
                  this.year(),
                  this.month(),
                  this.date() - (this.isoWeekday() - 1) + 7,
                ) - 1;
              break;
            case "day":
            case "date":
              a = t(this.year(), this.month(), this.date() + 1) - 1;
              break;
            case "hour":
              (a = this._d.valueOf()),
                (a +=
                  ls -
                  hs(a + (this._isUTC ? 0 : this.utcOffset() * ms), ls) -
                  1);
              break;
            case "minute":
              (a = this._d.valueOf()), (a += ms - hs(a, ms) - 1);
              break;
            case "second":
              (a = this._d.valueOf()), (a += us - hs(a, us) - 1);
          }
          return this._d.setTime(a), s.updateOffset(this, !0), this;
        }
        function fs() {
          return this._d.valueOf() - 6e4 * (this._offset || 0);
        }
        function ks() {
          return Math.floor(this.valueOf() / 1e3);
        }
        function ps() {
          return new Date(this.valueOf());
        }
        function Ds() {
          var e = this;
          return [
            e.year(),
            e.month(),
            e.date(),
            e.hour(),
            e.minute(),
            e.second(),
            e.millisecond(),
          ];
        }
        function Ts() {
          var e = this;
          return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds(),
          };
        }
        function gs() {
          return this.isValid() ? this.toISOString() : null;
        }
        function ws() {
          return y(this);
        }
        function vs() {
          return h({}, Y(this));
        }
        function bs() {
          return Y(this).overflow;
        }
        function Hs() {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
          };
        }
        function Ss(e, a) {
          var t,
            n,
            r,
            i = this._eras || yt("en")._eras;
          for (t = 0, n = i.length; t < n; ++t)
            switch (
              ("string" == typeof i[t].since &&
                ((r = s(i[t].since).startOf("day")),
                (i[t].since = r.valueOf())),
              typeof i[t].until)
            ) {
              case "undefined":
                i[t].until = 1 / 0;
                break;
              case "string":
                (r = s(i[t].until).startOf("day").valueOf()),
                  (i[t].until = r.valueOf());
            }
          return i;
        }
        function js(e, a, t) {
          var n,
            s,
            r,
            i,
            d,
            _ = this.eras();
          for (e = e.toUpperCase(), n = 0, s = _.length; n < s; ++n)
            if (
              ((r = _[n].name.toUpperCase()),
              (i = _[n].abbr.toUpperCase()),
              (d = _[n].narrow.toUpperCase()),
              t)
            )
              switch (a) {
                case "N":
                case "NN":
                case "NNN":
                  if (i === e) return _[n];
                  break;
                case "NNNN":
                  if (r === e) return _[n];
                  break;
                case "NNNNN":
                  if (d === e) return _[n];
              }
            else if ([r, i, d].indexOf(e) >= 0) return _[n];
        }
        function xs(e, a) {
          var t = e.since <= e.until ? 1 : -1;
          return void 0 === a
            ? s(e.since).year()
            : s(e.since).year() + (a - e.offset) * t;
        }
        function Ps() {
          var e,
            a,
            t,
            n = this.localeData().eras();
          for (e = 0, a = n.length; e < a; ++e) {
            if (
              ((t = this.clone().startOf("day").valueOf()),
              n[e].since <= t && t <= n[e].until)
            )
              return n[e].name;
            if (n[e].until <= t && t <= n[e].since) return n[e].name;
          }
          return "";
        }
        function Os() {
          var e,
            a,
            t,
            n = this.localeData().eras();
          for (e = 0, a = n.length; e < a; ++e) {
            if (
              ((t = this.clone().startOf("day").valueOf()),
              n[e].since <= t && t <= n[e].until)
            )
              return n[e].narrow;
            if (n[e].until <= t && t <= n[e].since) return n[e].narrow;
          }
          return "";
        }
        function Ws() {
          var e,
            a,
            t,
            n = this.localeData().eras();
          for (e = 0, a = n.length; e < a; ++e) {
            if (
              ((t = this.clone().startOf("day").valueOf()),
              n[e].since <= t && t <= n[e].until)
            )
              return n[e].abbr;
            if (n[e].until <= t && t <= n[e].since) return n[e].abbr;
          }
          return "";
        }
        function As() {
          var e,
            a,
            t,
            n,
            r = this.localeData().eras();
          for (e = 0, a = r.length; e < a; ++e)
            if (
              ((t = r[e].since <= r[e].until ? 1 : -1),
              (n = this.clone().startOf("day").valueOf()),
              (r[e].since <= n && n <= r[e].until) ||
                (r[e].until <= n && n <= r[e].since))
            )
              return (this.year() - s(r[e].since).year()) * t + r[e].offset;
          return this.year();
        }
        function Es(e) {
          return (
            _(this, "_erasNameRegex") || Is.call(this),
            e ? this._erasNameRegex : this._erasRegex
          );
        }
        function Fs(e) {
          return (
            _(this, "_erasAbbrRegex") || Is.call(this),
            e ? this._erasAbbrRegex : this._erasRegex
          );
        }
        function zs(e) {
          return (
            _(this, "_erasNarrowRegex") || Is.call(this),
            e ? this._erasNarrowRegex : this._erasRegex
          );
        }
        function Ns(e, a) {
          return a.erasAbbrRegex(e);
        }
        function Js(e, a) {
          return a.erasNameRegex(e);
        }
        function Rs(e, a) {
          return a.erasNarrowRegex(e);
        }
        function Cs(e, a) {
          return a._eraYearOrdinalRegex || fe;
        }
        function Is() {
          var e,
            a,
            t,
            n,
            s,
            r = [],
            i = [],
            d = [],
            _ = [],
            o = this.eras();
          for (e = 0, a = o.length; e < a; ++e)
            (t = je(o[e].name)),
              (n = je(o[e].abbr)),
              (s = je(o[e].narrow)),
              i.push(t),
              r.push(n),
              d.push(s),
              _.push(t),
              _.push(n),
              _.push(s);
          (this._erasRegex = new RegExp("^(" + _.join("|") + ")", "i")),
            (this._erasNameRegex = new RegExp("^(" + i.join("|") + ")", "i")),
            (this._erasAbbrRegex = new RegExp("^(" + r.join("|") + ")", "i")),
            (this._erasNarrowRegex = new RegExp("^(" + d.join("|") + ")", "i"));
        }
        function Us(e, a) {
          R(0, [e, e.length], 0, a);
        }
        function Gs(e) {
          return $s.call(
            this,
            e,
            this.week(),
            this.weekday() + this.localeData()._week.dow,
            this.localeData()._week.dow,
            this.localeData()._week.doy,
          );
        }
        function Vs(e) {
          return $s.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
        }
        function qs() {
          return ga(this.year(), 1, 4);
        }
        function Bs() {
          return ga(this.isoWeekYear(), 1, 4);
        }
        function Ks() {
          var e = this.localeData()._week;
          return ga(this.year(), e.dow, e.doy);
        }
        function Zs() {
          var e = this.localeData()._week;
          return ga(this.weekYear(), e.dow, e.doy);
        }
        function $s(e, a, t, n, s) {
          var r;
          return null == e
            ? Ta(this, n, s).year
            : (a > (r = ga(e, n, s)) && (a = r), Qs.call(this, e, a, t, n, s));
        }
        function Qs(e, a, t, n, s) {
          var r = Da(e, a, t, n, s),
            i = ka(r.year, 0, r.dayOfYear);
          return (
            this.year(i.getUTCFullYear()),
            this.month(i.getUTCMonth()),
            this.date(i.getUTCDate()),
            this
          );
        }
        function Xs(e) {
          return null == e
            ? Math.ceil((this.month() + 1) / 3)
            : this.month(3 * (e - 1) + (this.month() % 3));
        }
        R("N", 0, 0, "eraAbbr"),
          R("NN", 0, 0, "eraAbbr"),
          R("NNN", 0, 0, "eraAbbr"),
          R("NNNN", 0, 0, "eraName"),
          R("NNNNN", 0, 0, "eraNarrow"),
          R("y", ["y", 1], "yo", "eraYear"),
          R("y", ["yy", 2], 0, "eraYear"),
          R("y", ["yyy", 3], 0, "eraYear"),
          R("y", ["yyyy", 4], 0, "eraYear"),
          be("N", Ns),
          be("NN", Ns),
          be("NNN", Ns),
          be("NNNN", Js),
          be("NNNNN", Rs),
          We(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, a, t, n) {
            var s = t._locale.erasParse(e, n, t._strict);
            s ? (Y(t).era = s) : (Y(t).invalidEra = e);
          }),
          be("y", fe),
          be("yy", fe),
          be("yyy", fe),
          be("yyyy", fe),
          be("yo", Cs),
          We(["y", "yy", "yyy", "yyyy"], ze),
          We(["yo"], function (e, a, t, n) {
            var s;
            t._locale._eraYearOrdinalRegex &&
              (s = e.match(t._locale._eraYearOrdinalRegex)),
              t._locale.eraYearOrdinalParse
                ? (a[ze] = t._locale.eraYearOrdinalParse(e, s))
                : (a[ze] = parseInt(e, 10));
          }),
          R(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100;
          }),
          R(0, ["GG", 2], 0, function () {
            return this.isoWeekYear() % 100;
          }),
          Us("gggg", "weekYear"),
          Us("ggggg", "weekYear"),
          Us("GGGG", "isoWeekYear"),
          Us("GGGGG", "isoWeekYear"),
          be("G", ke),
          be("g", ke),
          be("GG", Me, oe),
          be("gg", Me, oe),
          be("GGGG", Ye, me),
          be("gggg", Ye, me),
          be("GGGGG", ye, le),
          be("ggggg", ye, le),
          Ae(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, a, t, n) {
            a[n.substr(0, 2)] = Pe(e);
          }),
          Ae(["gg", "GG"], function (e, a, t, n) {
            a[n] = s.parseTwoDigitYear(e);
          }),
          R("Q", 0, "Qo", "quarter"),
          be("Q", _e),
          We("Q", function (e, a) {
            a[Ne] = 3 * (Pe(e) - 1);
          }),
          R("D", ["DD", 2], "Do", "date"),
          be("D", Me, we),
          be("DD", Me, oe),
          be("Do", function (e, a) {
            return e
              ? a._dayOfMonthOrdinalParse || a._ordinalParse
              : a._dayOfMonthOrdinalParseLenient;
          }),
          We(["D", "DD"], Je),
          We("Do", function (e, a) {
            a[Je] = Pe(e.match(Me)[0]);
          });
        var er = $e("Date", !0);
        function ar(e) {
          var a =
            Math.round(
              (this.clone().startOf("day") - this.clone().startOf("year")) /
                864e5,
            ) + 1;
          return null == e ? a : this.add(e - a, "d");
        }
        R("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
          be("DDD", Le),
          be("DDDD", ue),
          We(["DDD", "DDDD"], function (e, a, t) {
            t._dayOfYear = Pe(e);
          }),
          R("m", ["mm", 2], 0, "minute"),
          be("m", Me, ve),
          be("mm", Me, oe),
          We(["m", "mm"], Ce);
        var tr = $e("Minutes", !1);
        R("s", ["ss", 2], 0, "second"),
          be("s", Me, ve),
          be("ss", Me, oe),
          We(["s", "ss"], Ie);
        var nr,
          sr,
          rr = $e("Seconds", !1);
        for (
          R("S", 0, 0, function () {
            return ~~(this.millisecond() / 100);
          }),
            R(0, ["SS", 2], 0, function () {
              return ~~(this.millisecond() / 10);
            }),
            R(0, ["SSS", 3], 0, "millisecond"),
            R(0, ["SSSS", 4], 0, function () {
              return 10 * this.millisecond();
            }),
            R(0, ["SSSSS", 5], 0, function () {
              return 100 * this.millisecond();
            }),
            R(0, ["SSSSSS", 6], 0, function () {
              return 1e3 * this.millisecond();
            }),
            R(0, ["SSSSSSS", 7], 0, function () {
              return 1e4 * this.millisecond();
            }),
            R(0, ["SSSSSSSS", 8], 0, function () {
              return 1e5 * this.millisecond();
            }),
            R(0, ["SSSSSSSSS", 9], 0, function () {
              return 1e6 * this.millisecond();
            }),
            be("S", Le, _e),
            be("SS", Le, oe),
            be("SSS", Le, ue),
            nr = "SSSS";
          nr.length <= 9;
          nr += "S"
        )
          be(nr, fe);
        function ir(e, a) {
          a[Ue] = Pe(1e3 * ("0." + e));
        }
        for (nr = "S"; nr.length <= 9; nr += "S") We(nr, ir);
        function dr() {
          return this._isUTC ? "UTC" : "";
        }
        function _r() {
          return this._isUTC ? "Coordinated Universal Time" : "";
        }
        (sr = $e("Milliseconds", !1)),
          R("z", 0, 0, "zoneAbbr"),
          R("zz", 0, 0, "zoneName");
        var or = T.prototype;
        function ur(e) {
          return Kt(1e3 * e);
        }
        function mr() {
          return Kt.apply(null, arguments).parseZone();
        }
        function lr(e) {
          return e;
        }
        (or.add = An),
          (or.calendar = In),
          (or.clone = Un),
          (or.diff = $n),
          (or.endOf = ys),
          (or.format = ts),
          (or.from = ns),
          (or.fromNow = ss),
          (or.to = rs),
          (or.toNow = is),
          (or.get = ea),
          (or.invalidAt = bs),
          (or.isAfter = Gn),
          (or.isBefore = Vn),
          (or.isBetween = qn),
          (or.isSame = Bn),
          (or.isSameOrAfter = Kn),
          (or.isSameOrBefore = Zn),
          (or.isValid = ws),
          (or.lang = _s),
          (or.locale = ds),
          (or.localeData = os),
          (or.max = $t),
          (or.min = Zt),
          (or.parsingFlags = vs),
          (or.set = aa),
          (or.startOf = Ys),
          (or.subtract = En),
          (or.toArray = Ds),
          (or.toObject = Ts),
          (or.toDate = ps),
          (or.toISOString = es),
          (or.inspect = as),
          "undefined" != typeof Symbol &&
            null != Symbol.for &&
            (or[Symbol.for("nodejs.util.inspect.custom")] = function () {
              return "Moment<" + this.format() + ">";
            }),
          (or.toJSON = gs),
          (or.toString = Xn),
          (or.unix = ks),
          (or.valueOf = fs),
          (or.creationData = Hs),
          (or.eraName = Ps),
          (or.eraNarrow = Os),
          (or.eraAbbr = Ws),
          (or.eraYear = As),
          (or.year = Ke),
          (or.isLeapYear = Ze),
          (or.weekYear = Gs),
          (or.isoWeekYear = Vs),
          (or.quarter = or.quarters = Xs),
          (or.month = ha),
          (or.daysInMonth = ca),
          (or.week = or.weeks = Sa),
          (or.isoWeek = or.isoWeeks = ja),
          (or.weeksInYear = Ks),
          (or.weeksInWeekYear = Zs),
          (or.isoWeeksInYear = qs),
          (or.isoWeeksInISOWeekYear = Bs),
          (or.date = er),
          (or.day = or.days = Ga),
          (or.weekday = Va),
          (or.isoWeekday = qa),
          (or.dayOfYear = ar),
          (or.hour = or.hours = st),
          (or.minute = or.minutes = tr),
          (or.second = or.seconds = rr),
          (or.millisecond = or.milliseconds = sr),
          (or.utcOffset = Ln),
          (or.utc = yn),
          (or.local = fn),
          (or.parseZone = kn),
          (or.hasAlignedHourOffset = pn),
          (or.isDST = Dn),
          (or.isLocal = gn),
          (or.isUtcOffset = wn),
          (or.isUtc = vn),
          (or.isUTC = vn),
          (or.zoneAbbr = dr),
          (or.zoneName = _r),
          (or.dates = v("dates accessor is deprecated. Use date instead.", er)),
          (or.months = v(
            "months accessor is deprecated. Use month instead",
            ha,
          )),
          (or.years = v("years accessor is deprecated. Use year instead", Ke)),
          (or.zone = v(
            "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
            Yn,
          )),
          (or.isDSTShifted = v(
            "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
            Tn,
          ));
        var Mr = O.prototype;
        function hr(e, a, t, n) {
          var s = yt(),
            r = c().set(n, a);
          return s[t](r, e);
        }
        function cr(e, a, t) {
          if ((m(e) && ((a = e), (e = void 0)), (e = e || ""), null != a))
            return hr(e, a, t, "month");
          var n,
            s = [];
          for (n = 0; n < 12; n++) s[n] = hr(e, n, t, "month");
          return s;
        }
        function Lr(e, a, t, n) {
          "boolean" == typeof e
            ? (m(a) && ((t = a), (a = void 0)), (a = a || ""))
            : ((t = a = e),
              (e = !1),
              m(a) && ((t = a), (a = void 0)),
              (a = a || ""));
          var s,
            r = yt(),
            i = e ? r._week.dow : 0,
            d = [];
          if (null != t) return hr(a, (t + i) % 7, n, "day");
          for (s = 0; s < 7; s++) d[s] = hr(a, (s + i) % 7, n, "day");
          return d;
        }
        function Yr(e, a) {
          return cr(e, a, "months");
        }
        function yr(e, a) {
          return cr(e, a, "monthsShort");
        }
        function fr(e, a, t) {
          return Lr(e, a, t, "weekdays");
        }
        function kr(e, a, t) {
          return Lr(e, a, t, "weekdaysShort");
        }
        function pr(e, a, t) {
          return Lr(e, a, t, "weekdaysMin");
        }
        (Mr.calendar = A),
          (Mr.longDateFormat = q),
          (Mr.invalidDate = K),
          (Mr.ordinal = Q),
          (Mr.preparse = lr),
          (Mr.postformat = lr),
          (Mr.relativeTime = ee),
          (Mr.pastFuture = ae),
          (Mr.set = x),
          (Mr.eras = Ss),
          (Mr.erasParse = js),
          (Mr.erasConvertYear = xs),
          (Mr.erasAbbrRegex = Fs),
          (Mr.erasNameRegex = Es),
          (Mr.erasNarrowRegex = zs),
          (Mr.months = oa),
          (Mr.monthsShort = ua),
          (Mr.monthsParse = la),
          (Mr.monthsRegex = Ya),
          (Mr.monthsShortRegex = La),
          (Mr.week = wa),
          (Mr.firstDayOfYear = Ha),
          (Mr.firstDayOfWeek = ba),
          (Mr.weekdays = Ja),
          (Mr.weekdaysMin = Ca),
          (Mr.weekdaysShort = Ra),
          (Mr.weekdaysParse = Ua),
          (Mr.weekdaysRegex = Ba),
          (Mr.weekdaysShortRegex = Ka),
          (Mr.weekdaysMinRegex = Za),
          (Mr.isPM = tt),
          (Mr.meridiem = rt),
          ct("en", {
            eras: [
              {
                since: "0001-01-01",
                until: 1 / 0,
                offset: 1,
                name: "Anno Domini",
                narrow: "AD",
                abbr: "AD",
              },
              {
                since: "0000-12-31",
                until: -1 / 0,
                offset: 1,
                name: "Before Christ",
                narrow: "BC",
                abbr: "BC",
              },
            ],
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
              var a = e % 10;
              return (
                e +
                (1 === Pe((e % 100) / 10)
                  ? "th"
                  : 1 === a
                    ? "st"
                    : 2 === a
                      ? "nd"
                      : 3 === a
                        ? "rd"
                        : "th")
              );
            },
          }),
          (s.lang = v(
            "moment.lang is deprecated. Use moment.locale instead.",
            ct,
          )),
          (s.langData = v(
            "moment.langData is deprecated. Use moment.localeData instead.",
            yt,
          ));
        var Dr = Math.abs;
        function Tr() {
          var e = this._data;
          return (
            (this._milliseconds = Dr(this._milliseconds)),
            (this._days = Dr(this._days)),
            (this._months = Dr(this._months)),
            (e.milliseconds = Dr(e.milliseconds)),
            (e.seconds = Dr(e.seconds)),
            (e.minutes = Dr(e.minutes)),
            (e.hours = Dr(e.hours)),
            (e.months = Dr(e.months)),
            (e.years = Dr(e.years)),
            this
          );
        }
        function gr(e, a, t, n) {
          var s = Sn(a, t);
          return (
            (e._milliseconds += n * s._milliseconds),
            (e._days += n * s._days),
            (e._months += n * s._months),
            e._bubble()
          );
        }
        function wr(e, a) {
          return gr(this, e, a, 1);
        }
        function vr(e, a) {
          return gr(this, e, a, -1);
        }
        function br(e) {
          return e < 0 ? Math.floor(e) : Math.ceil(e);
        }
        function Hr() {
          var e,
            a,
            t,
            n,
            s,
            r = this._milliseconds,
            i = this._days,
            d = this._months,
            _ = this._data;
          return (
            (r >= 0 && i >= 0 && d >= 0) ||
              (r <= 0 && i <= 0 && d <= 0) ||
              ((r += 864e5 * br(jr(d) + i)), (i = 0), (d = 0)),
            (_.milliseconds = r % 1e3),
            (e = xe(r / 1e3)),
            (_.seconds = e % 60),
            (a = xe(e / 60)),
            (_.minutes = a % 60),
            (t = xe(a / 60)),
            (_.hours = t % 24),
            (i += xe(t / 24)),
            (d += s = xe(Sr(i))),
            (i -= br(jr(s))),
            (n = xe(d / 12)),
            (d %= 12),
            (_.days = i),
            (_.months = d),
            (_.years = n),
            this
          );
        }
        function Sr(e) {
          return (4800 * e) / 146097;
        }
        function jr(e) {
          return (146097 * e) / 4800;
        }
        function xr(e) {
          if (!this.isValid()) return NaN;
          var a,
            t,
            n = this._milliseconds;
          if ("month" === (e = ne(e)) || "quarter" === e || "year" === e)
            switch (
              ((a = this._days + n / 864e5), (t = this._months + Sr(a)), e)
            ) {
              case "month":
                return t;
              case "quarter":
                return t / 3;
              case "year":
                return t / 12;
            }
          else
            switch (((a = this._days + Math.round(jr(this._months))), e)) {
              case "week":
                return a / 7 + n / 6048e5;
              case "day":
                return a + n / 864e5;
              case "hour":
                return 24 * a + n / 36e5;
              case "minute":
                return 1440 * a + n / 6e4;
              case "second":
                return 86400 * a + n / 1e3;
              case "millisecond":
                return Math.floor(864e5 * a) + n;
              default:
                throw new Error("Unknown unit " + e);
            }
        }
        function Pr(e) {
          return function () {
            return this.as(e);
          };
        }
        var Or = Pr("ms"),
          Wr = Pr("s"),
          Ar = Pr("m"),
          Er = Pr("h"),
          Fr = Pr("d"),
          zr = Pr("w"),
          Nr = Pr("M"),
          Jr = Pr("Q"),
          Rr = Pr("y"),
          Cr = Or;
        function Ir() {
          return Sn(this);
        }
        function Ur(e) {
          return (e = ne(e)), this.isValid() ? this[e + "s"]() : NaN;
        }
        function Gr(e) {
          return function () {
            return this.isValid() ? this._data[e] : NaN;
          };
        }
        var Vr = Gr("milliseconds"),
          qr = Gr("seconds"),
          Br = Gr("minutes"),
          Kr = Gr("hours"),
          Zr = Gr("days"),
          $r = Gr("months"),
          Qr = Gr("years");
        function Xr() {
          return xe(this.days() / 7);
        }
        var ei = Math.round,
          ai = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
        function ti(e, a, t, n, s) {
          return s.relativeTime(a || 1, !!t, e, n);
        }
        function ni(e, a, t, n) {
          var s = Sn(e).abs(),
            r = ei(s.as("s")),
            i = ei(s.as("m")),
            d = ei(s.as("h")),
            _ = ei(s.as("d")),
            o = ei(s.as("M")),
            u = ei(s.as("w")),
            m = ei(s.as("y")),
            l =
              (r <= t.ss && ["s", r]) ||
              (r < t.s && ["ss", r]) ||
              (i <= 1 && ["m"]) ||
              (i < t.m && ["mm", i]) ||
              (d <= 1 && ["h"]) ||
              (d < t.h && ["hh", d]) ||
              (_ <= 1 && ["d"]) ||
              (_ < t.d && ["dd", _]);
          return (
            null != t.w &&
              (l = l || (u <= 1 && ["w"]) || (u < t.w && ["ww", u])),
            ((l = l ||
              (o <= 1 && ["M"]) ||
              (o < t.M && ["MM", o]) ||
              (m <= 1 && ["y"]) || ["yy", m])[2] = a),
            (l[3] = +e > 0),
            (l[4] = n),
            ti.apply(null, l)
          );
        }
        function si(e) {
          return void 0 === e ? ei : "function" == typeof e && ((ei = e), !0);
        }
        function ri(e, a) {
          return (
            void 0 !== ai[e] &&
            (void 0 === a
              ? ai[e]
              : ((ai[e] = a), "s" === e && (ai.ss = a - 1), !0))
          );
        }
        function ii(e, a) {
          if (!this.isValid()) return this.localeData().invalidDate();
          var t,
            n,
            s = !1,
            r = ai;
          return (
            "object" == typeof e && ((a = e), (e = !1)),
            "boolean" == typeof e && (s = e),
            "object" == typeof a &&
              ((r = Object.assign({}, ai, a)),
              null != a.s && null == a.ss && (r.ss = a.s - 1)),
            (n = ni(this, !s, r, (t = this.localeData()))),
            s && (n = t.pastFuture(+this, n)),
            t.postformat(n)
          );
        }
        var di = Math.abs;
        function _i(e) {
          return (e > 0) - (e < 0) || +e;
        }
        function oi() {
          if (!this.isValid()) return this.localeData().invalidDate();
          var e,
            a,
            t,
            n,
            s,
            r,
            i,
            d,
            _ = di(this._milliseconds) / 1e3,
            o = di(this._days),
            u = di(this._months),
            m = this.asSeconds();
          return m
            ? ((e = xe(_ / 60)),
              (a = xe(e / 60)),
              (_ %= 60),
              (e %= 60),
              (t = xe(u / 12)),
              (u %= 12),
              (n = _ ? _.toFixed(3).replace(/\.?0+$/, "") : ""),
              (s = m < 0 ? "-" : ""),
              (r = _i(this._months) !== _i(m) ? "-" : ""),
              (i = _i(this._days) !== _i(m) ? "-" : ""),
              (d = _i(this._milliseconds) !== _i(m) ? "-" : ""),
              s +
                "P" +
                (t ? r + t + "Y" : "") +
                (u ? r + u + "M" : "") +
                (o ? i + o + "D" : "") +
                (a || e || _ ? "T" : "") +
                (a ? d + a + "H" : "") +
                (e ? d + e + "M" : "") +
                (_ ? d + n + "S" : ""))
            : "P0D";
        }
        var ui = dn.prototype;
        return (
          (ui.isValid = sn),
          (ui.abs = Tr),
          (ui.add = wr),
          (ui.subtract = vr),
          (ui.as = xr),
          (ui.asMilliseconds = Or),
          (ui.asSeconds = Wr),
          (ui.asMinutes = Ar),
          (ui.asHours = Er),
          (ui.asDays = Fr),
          (ui.asWeeks = zr),
          (ui.asMonths = Nr),
          (ui.asQuarters = Jr),
          (ui.asYears = Rr),
          (ui.valueOf = Cr),
          (ui._bubble = Hr),
          (ui.clone = Ir),
          (ui.get = Ur),
          (ui.milliseconds = Vr),
          (ui.seconds = qr),
          (ui.minutes = Br),
          (ui.hours = Kr),
          (ui.days = Zr),
          (ui.weeks = Xr),
          (ui.months = $r),
          (ui.years = Qr),
          (ui.humanize = ii),
          (ui.toISOString = oi),
          (ui.toString = oi),
          (ui.toJSON = oi),
          (ui.locale = ds),
          (ui.localeData = os),
          (ui.toIsoString = v(
            "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
            oi,
          )),
          (ui.lang = _s),
          R("X", 0, 0, "unix"),
          R("x", 0, 0, "valueOf"),
          be("x", ke),
          be("X", Te),
          We("X", function (e, a, t) {
            t._d = new Date(1e3 * parseFloat(e));
          }),
          We("x", function (e, a, t) {
            t._d = new Date(Pe(e));
          }),
          //! moment.js
          (s.version = "2.30.1"),
          r(Kt),
          (s.fn = or),
          (s.min = Xt),
          (s.max = en),
          (s.now = an),
          (s.utc = c),
          (s.unix = ur),
          (s.months = Yr),
          (s.isDate = l),
          (s.locale = ct),
          (s.invalid = f),
          (s.duration = Sn),
          (s.isMoment = g),
          (s.weekdays = fr),
          (s.parseZone = mr),
          (s.localeData = yt),
          (s.isDuration = _n),
          (s.monthsShort = yr),
          (s.weekdaysMin = pr),
          (s.defineLocale = Lt),
          (s.updateLocale = Yt),
          (s.locales = ft),
          (s.weekdaysShort = kr),
          (s.normalizeUnits = ne),
          (s.relativeTimeRounding = si),
          (s.relativeTimeThreshold = ri),
          (s.calendarFormat = Cn),
          (s.prototype = or),
          (s.HTML5_FMT = {
            DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
            DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
            DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
            DATE: "YYYY-MM-DD",
            TIME: "HH:mm",
            TIME_SECONDS: "HH:mm:ss",
            TIME_MS: "HH:mm:ss.SSS",
            WEEK: "GGGG-[W]WW",
            MONTH: "YYYY-MM",
          }),
          s
        );
      })();
    },
  },
]);
