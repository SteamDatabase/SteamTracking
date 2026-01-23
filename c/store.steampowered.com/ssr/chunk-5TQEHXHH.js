import { _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_(), 1),
  _ = _(_(), 1);
function _(_) {
  let [_, _] = (0, _.useState)(!1);
  return (
    (0, _.useEffect)(() => {
      (0, _.startTransition)(() => _(!0));
    }, []),
    (0, _.jsx)(_.Provider, {
      value: _,
      children: _.children,
    })
  );
}
var _ = (0, _.createContext)(!1);
var _ = Intl.DateTimeFormat().resolvedOptions().timeZone,
  _ = document.cookie
    .split(";")
    .find((_) => _.trim().startsWith("timezoneName"))
    ?.split("=")[1],
  _ = _ && decodeURIComponent(_);
function _() {
  document.cookie = `timezoneName=${_};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`;
}
_();
var _ = _(_());
var _ = [
    "sc_schinese",
    "schinese",
    "tchinese",
    "japanese",
    "koreana",
    "thai",
    "arabic",
    "bulgarian",
    "czech",
    "danish",
    "german",
    "english",
    "spanish",
    "latam",
    "greek",
    "french",
    "italian",
    "indonesian",
    "hungarian",
    "dutch",
    "norwegian",
    "polish",
    "portuguese",
    "brazilian",
    "romanian",
    "russian",
    "finnish",
    "swedish",
    "turkish",
    "vietnamese",
    "ukrainian",
  ],
  _ = new Set(_);
var _ = new Map([
  ["en", "english"],
  ["de", "german"],
  ["fr", "french"],
  ["it", "italian"],
  ["ko", "koreana"],
  ["es-419", "latam"],
  ["es", "spanish"],
  ["zh", "schinese"],
  ["zh-cn", "schinese"],
  ["zh-tw", "tchinese"],
  ["ru", "russian"],
  ["ar", "arabic"],
  ["th", "thai"],
  ["ja", "japanese"],
  ["pt-br", "brazilian"],
  ["pt", "portuguese"],
  ["pl", "polish"],
  ["da", "danish"],
  ["nl", "dutch"],
  ["fi", "finnish"],
  ["nb", "norwegian"],
  ["no", "norwegian"],
  ["sv", "swedish"],
  ["hu", "hungarian"],
  ["cs", "czech"],
  ["ro", "romanian"],
  ["tr", "turkish"],
  ["bg", "bulgarian"],
  ["el", "greek"],
  ["uk", "ukrainian"],
  ["vn", "vietnamese"],
  ["vi", "vietnamese"],
  ["id", "indonesian"],
]);
var _ = new Map();
for (let [_, _] of _.entries()) _.set(_, _);
_.set("sc_schinese", _.get("schinese"));
_.set("korean", _.get("koreana"));
function _(_) {
  return _.get(_);
}
function _(_) {
  if (_ !== "english") return _ === "sc_schinese" ? "schinese" : "english";
}
function _(_) {
  return _ === "arabic";
}
function _(_, ..._) {
  return (
    _.length == 0 ||
      (_ = _.replace(/%(?:(\d+)\$)?s/g, function (_, _) {
        if (_ <= _.length && _ >= 1) {
          let _ = _[_ - 1];
          return String(_ ?? "");
        }
        return _;
      })),
    _
  );
}
var _;
_ ??= new Set();
async function _() {
  await Promise.all(_);
}
function _(_) {
  (_ ??= new Set()), _.add(_);
}
function _(_) {
  let _ = new Map();
  async function _() {
    await _();
    let _ = _(),
      _ = new Set([]);
    for (let _ of _.languages) {
      _.add(_.strLanguage);
      let _ = _(_.strLanguage);
      _ && _.add(_);
    }
    return Promise.all(
      Array.from(_).map((_) =>
        _(_).then((_) => {
          if (!_) return;
          let _ = new Map();
          for (let [_, _] of Object.entries(_)) _.set("#" + _, _);
          _.set(_, _);
        }),
      ),
    );
  }
  let _ = _(),
    _ = !1;
  _.then(() => (_ = !0)), _(_);
  function _(_, _) {
    let [_, ..._] = _,
      _ =
        _.get(_.strLanguage)?.get(_) ??
        _.get(_(_.strLanguage) ?? "english")?.get(_);
    return (
      _ ||
      (_.length === 0
        ? (console.error("Couldn't find localization key", _), _)
        : _(_, _))
    );
  }
  function _(_, ..._) {
    let _ = _().languages,
      _ = _(_, _);
    return _(_, ..._);
  }
  return {
    Localize(_, ..._) {
      return _(_, ..._);
    },
    LocalizeReact(_, ..._) {
      let _ = this.Localize(_);
      if (_ === _) return _;
      let _ = [],
        _ = /(.*?)%(\d+)\$s/g,
        _ = 0,
        _;
      for (; (_ = _.exec(_)); ) {
        (_ += _[0].length), _.push(_[1]);
        let _ = parseInt(_[2]);
        _ >= 1 && _ <= _.length && _.push(_[_ - 1]);
      }
      return (
        _.push(_.slice(_)),
        _.default.createElement(_.default.Fragment, null, ..._)
      );
    },
    LocalizePlural(_, _, ..._) {
      return _ === 1 || _ === "1" ? _(_, _, ..._) : _(_ + "_Plural", _, ..._);
    },
    LocalizeInSpecificLang(_, _, ..._) {
      let _ = _(_, [_]);
      return _(_, ..._);
    },
    Ready() {
      return _;
    },
    IsReady() {
      return _;
    },
  };
}
function _() {
  if (!("SSR" in window)) throw "SSR missing";
  return (
    window.SSR.renderContext?.localizationSettings ?? {
      languages: [
        {
          strLanguage: "english",
          eSource: 5,
          strISOCode: "en",
        },
      ],
    }
  );
}
function _() {
  return _().languages.map((_) => _(_.strISOCode));
}
function _(_) {
  return _.length == 2 && _.COUNTRY ? `${_}-${_.COUNTRY}` : _;
}
var _ = "./localization_arabic-XXXXXXXX.json";
var _ = "./localization_brazilian-XXXXXXXX.json";
var _ = "./localization_bulgarian-XXXXXXXX.json";
var _ = "./localization_czech-XXXXXXXX.json";
var _ = "./localization_danish-XXXXXXXX.json";
var _ = "./localization_dutch-XXXXXXXX.json";
var _ = "./localization_english-XXXXXXXX.json";
var _ = "./localization_finnish-XXXXXXXX.json";
var _ = "./localization_french-XXXXXXXX.json";
var _ = "./localization_german-XXXXXXXX.json";
var _ = "./localization_greek-XXXXXXXX.json";
var _ = "./localization_hungarian-XXXXXXXX.json";
var _ = "./localization_indonesian-XXXXXXXX.json";
var _ = "./localization_italian-XXXXXXXX.json";
var _ = "./localization_japanese-XXXXXXXX.json";
var _ = "./localization_koreana-XXXXXXXX.json";
var _ = "./localization_latam-XXXXXXXX.json";
var _ = "./localization_norwegian-XXXXXXXX.json";
var _ = "./localization_polish-XXXXXXXX.json";
var _ = "./localization_portuguese-XXXXXXXX.json";
var _ = "./localization_romanian-XXXXXXXX.json";
var _ = "./localization_russian-XXXXXXXX.json";
var _ = "./localization_sc_schinese-XXXXXXXX.json";
var _ = "./localization_schinese-XXXXXXXX.json";
var _ = "./localization_spanish-XXXXXXXX.json";
var _ = "./localization_swedish-XXXXXXXX.json";
var _ = "./localization_tchinese-XXXXXXXX.json";
var _ = "./localization_thai-XXXXXXXX.json";
var _ = "./localization_turkish-XXXXXXXX.json";
var _ = "./localization_ukrainian-XXXXXXXX.json";
var _ = "./localization_vietnamese-XXXXXXXX.json";
var _ = {};
_.arabic = _;
_.brazilian = _;
_.bulgarian = _;
_.czech = _;
_.danish = _;
_.dutch = _;
_.english = _;
_.finnish = _;
_.french = _;
_.german = _;
_.greek = _;
_.hungarian = _;
_.indonesian = _;
_.italian = _;
_.japanese = _;
_.koreana = _;
_.latam = _;
_.norwegian = _;
_.polish = _;
_.portuguese = _;
_.romanian = _;
_.russian = _;
_.sc_schinese = _;
_.schinese = _;
_.spanish = _;
_.swedish = _;
_.tchinese = _;
_.thai = _;
_.turkish = _;
_.ukrainian = _;
_.vietnamese = _;
async function _(_) {
  if (_[_]) return (await fetch(new URL(_[_], import.meta.url))).json();
}
var _ = _(_(), 1);
function _(_, ..._) {
  let _ = [],
    _ = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs"),
    _ = 0,
    _;
  for (; (_ = _.exec(_)); ) {
    (_ += _[0].length), _.push(_[1]);
    let _ = parseInt(_[2]),
      _ = _[3] || "",
      _ = _(_, ..._),
      _ = (_ >= 1 && _ <= _.length ? _[_ - 1] : null)
        ? _.default.cloneElement(_[_ - 1], {}, _ ? _ : null)
        : _;
    _.push(_);
  }
  return (
    _.push(_.substr(_)), _.default.createElement(_.default.Fragment, null, ..._)
  );
}
function _(_) {
  return _.toLocaleString(_());
}
var _ = {
  PerYear: 31536e3,
  PerMonth: 2628e3,
  PerWeek: 604800,
  PerDay: 86400,
  PerHour: 3600,
  PerMinute: 60,
};
function _() {
  return _().languages[0];
}
var _ = _(_);
function _(_, _, _) {
  let _;
  typeof _ == "boolean"
    ? (_ = {
        eSuffix: _ ? 0 : 1,
        bForceSingleUnits: _,
        bHighGranularity: !1,
      })
    : (_ = {
        eSuffix: 1,
        bForceSingleUnits: !1,
        bHighGranularity: !1,
        ..._,
      });
  let _ = "TimeInterval_";
  _.eSuffix == 1
    ? (_ = "TimeSince_")
    : _.eSuffix == 2 && (_ = "TimeRemaining_");
  let _ = (_) => Math.floor(_);
  if (
    (_.bAllowDecimal && (_ = (_) => Math.round(_ * 10) / 10),
    _ >= _.PerYear * 2)
  )
    return _.Localize(`#${_}XYears`, _(_ / _.PerYear));
  if (_ >= _.PerYear)
    return (
      (_ -= _.PerYear),
      _ >= _.PerMonth * 2 && !_.bForceSingleUnits
        ? _.Localize(`#${_}1YearXMonths`, _(_ / _.PerMonth))
        : _.Localize(`#${_}1Year`)
    );
  if (_ >= _.PerMonth * 2) return _.Localize(`#${_}XMonths`, _(_ / _.PerMonth));
  if (_ >= _.PerWeek * 2) return _.Localize(`#${_}XWeeks`, _(_ / _.PerWeek));
  if (_ >= _.PerWeek) return _.Localize(`#${_}1Week`, _(_ / _.PerWeek));
  if (_ >= _.PerDay * 2) return _.Localize(`#${_}XDays`, _(_ / _.PerDay));
  if (_ >= _.PerDay)
    return (
      (_ -= _.PerDay),
      _ >= _.PerHour * 2 && !_.bForceSingleUnits
        ? _.Localize(`#${_}1DayXHours`, _(_ / _.PerHour))
        : _.Localize(`#${_}1Day`)
    );
  if (_ >= _.PerHour * 2) return _.Localize(`#${_}XHours`, _(_ / _.PerHour));
  if (_ >= _.PerHour)
    return (
      (_ -= _.PerHour),
      _ >= _.PerMinute * 2 && !_.bForceSingleUnits
        ? _.Localize(`#${_}1HourXMinutes`, _(_ / _.PerMinute))
        : _.Localize(`#${_}1Hour`)
    );
  if (_ >= _.PerMinute * 2) {
    let _ = Math.floor(_ / _.PerMinute),
      _ = _ % _.PerMinute;
    return !_.bHighGranularity || _ == 0
      ? _.Localize(`#${_}XMinutes`, _(_ / _.PerMinute))
      : _ == 1
        ? _.Localize(`#${_}XMinutes1Second`, _)
        : _.Localize(`#${_}XMinutesXSeconds`, _, _);
  } else if (_ >= _.PerMinute) {
    let _ = _ % _.PerMinute;
    return !_.bHighGranularity || _ == 0
      ? _.Localize(`#${_}1Minute`)
      : _ == 1
        ? _.Localize(`#${_}1Minute1Second`)
        : _.Localize(`#${_}1MinuteXSeconds`, _);
  } else
    return _.bHighGranularity
      ? _ == 1
        ? _.Localize(`#${_}1Second`)
        : _.Localize(`#${_}XSeconds`, _)
      : _.Localize(`#${_}LessThanAMinute`);
}
function _(_, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      year: "numeric",
      month: "short",
      day: "numeric",
      ..._,
    };
  return _.toLocaleDateString(_(), _);
}
function _(_) {
  let _ = new Date();
  _.setHours(15);
  let _ = _.toLocaleTimeString(_, {
      hour: "numeric",
    }),
    _ = _.toLocaleTimeString(_, {
      hour: "numeric",
      hour12: !1,
    });
  return _ == _;
}
function _(_, _, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      hour: "numeric",
      minute: "2-digit",
      hourCycle: "h23",
    },
    _ = {
      hour: "numeric",
      minute: "2-digit",
    },
    _ = _(),
    _ = {
      ...(_?.bForce24HourClock || _(_[0]) ? _ : _),
      ..._,
    };
  return _.toLocaleTimeString(_, _);
}
function _(_, _, _) {
  let _ = new Date(_ * 1e3);
  return (
    _(_, !1, !1) +
    " " +
    _(_, {
      bForce24HourClock: _,
    }) +
    " " +
    _
  );
}
function _(_, _ = !1, _ = !0) {
  let _ = {
    weekday: _ ? "long" : "short",
    day: "numeric",
    month: _ ? "long" : "short",
  };
  return _.toLocaleDateString(_(), _);
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
