import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_(), 1);
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
  return _.length == 2 ? `${_}-${_.COUNTRY}` : _;
}
export { _, _, _, _, _, _, _ };
