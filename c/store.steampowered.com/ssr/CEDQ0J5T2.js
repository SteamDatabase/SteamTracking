var _ = _(_(), 1);
new Set(
  `sc_schinese.schinese.tchinese.japanese.koreana.thai.arabic.indonesian.malay.bulgarian.czech.danish.german.english.spanish.latam.greek.french.italian.hungarian.dutch.norwegian.polish.portuguese.brazilian.romanian.russian.finnish.swedish.turkish.vietnamese.ukrainian`.split(
    `.`,
  ),
);
var _ = new Map([
    [`en`, `english`],
    [`de`, `german`],
    [`fr`, `french`],
    [`it`, `italian`],
    [`ko`, `koreana`],
    [`es-419`, `latam`],
    [`es`, `spanish`],
    [`zh`, `schinese`],
    [`zh-cn`, `schinese`],
    [`zh-tw`, `tchinese`],
    [`ru`, `russian`],
    [`ar`, `arabic`],
    [`th`, `thai`],
    [`ja`, `japanese`],
    [`pt-br`, `brazilian`],
    [`pt`, `portuguese`],
    [`pl`, `polish`],
    [`da`, `danish`],
    [`nl`, `dutch`],
    [`fi`, `finnish`],
    [`nb`, `norwegian`],
    [`no`, `norwegian`],
    [`sv`, `swedish`],
    [`hu`, `hungarian`],
    [`cs`, `czech`],
    [`ro`, `romanian`],
    [`tr`, `turkish`],
    [`bg`, `bulgarian`],
    [`el`, `greek`],
    [`uk`, `ukrainian`],
    [`vn`, `vietnamese`],
    [`vi`, `vietnamese`],
    [`id`, `indonesian`],
    [`ms`, `malay`],
  ]),
  _ = new Map();
for (let [_, _] of _.entries()) _.set(_, _);
_.set(`sc_schinese`, _.get(`schinese`)), _.set(`korean`, _.get(`koreana`));
function _(_) {
  return _.get(_);
}
function _(_) {
  if (_ !== `english`) return _ === `sc_schinese` ? `schinese` : `english`;
}
function _(_) {
  return _ === `arabic`;
}
function _(_, ..._) {
  return (
    _.length == 0 ||
      (_ = _.replace(/%(?:(\d+)\$)?s/g, function (_, _) {
        if (_ <= _.length && _ >= 1) {
          let _ = _[_ - 1];
          return String(_ ?? ``);
        }
        return _;
      })),
    _
  );
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
          if (!_) {
            console.error(`Project loc failed to load language ${_}, got ${_}`);
            return;
          }
          let _ = new Map();
          for (let [_, _] of Object.entries(_)) _.set(`#` + _, _);
          _.set(_, _);
        }),
      ),
    );
  }
  let _ = _(),
    _ = !1,
    _ = !1;
  _.then(() => (_ = !0)).catch((_) => {
    console.error(`LoadStrings error`, _), (_ = !0);
  }),
    _(_);
  function _(_, _) {
    let [_, ..._] = _,
      _ =
        _.get(_.strLanguage)?.get(_) ??
        _.get(_(_.strLanguage) ?? `english`)?.get(_);
    if (_ !== void 0) return _;
    if (_.length === 0) {
      if (_)
        return (
          console.warn(
            `Couldn't find localization key ${_} after erroring loading strings`,
          ),
          _
        );
      if (!_) throw _;
      return (
        _().ReportError(Error(`Couldn't find localization key ${_}`), {
          bIncludeMessageInIdentifier: !0,
        }),
        console.warn(`Couldn't find localization key ${_}`),
        _
      );
    }
    return _(_, _);
  }
  function _(_, ..._) {
    let _ = _().languages;
    return _(_(_, _), ..._);
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
      return _.push(_.slice(_)), _.createElement(_.Fragment, null, ..._);
    },
    LocalizePlural(_, _, ..._) {
      return _(_ === 1 || _ === `1` ? _ : _ + `_Plural`, _, ..._);
    },
    GetAppTypeLocKey(_, _) {
      switch (_) {
        case 5:
          return _ + `_Guide`;
        case 10:
          return _ + `_Hardware`;
        case 4:
          return _ + `_DLC`;
        case 11:
          return _ + `_Music`;
        case 8:
          return _ + `_Series`;
        case 1:
          return _ + `_Demo`;
        case 6:
          return _ + `_Software`;
        case 7:
          return _ + `_Video`;
        default:
          return _;
      }
    },
    GetAppTypePluralLocKey(_, _) {
      switch (_) {
        case 6:
          return _ + `_Software`;
        case 7:
          return _ + `_Video`;
        default:
          return _;
      }
    },
    LocalizeInSpecificLang(_, _, ..._) {
      return _(_(_, [_]), ..._);
    },
    Ready() {
      return _;
    },
    IsReady() {
      return _;
    },
    HasKey(_) {
      let _ = _().languages,
        _ = [..._.map((_) => _.strLanguage), _(_[0].strLanguage)];
      for (let _ of _) {
        if (!_) continue;
        let _ = _.get(_);
        if (_ && _.has(_)) return !0;
      }
      return !1;
    },
  };
}
function _() {
  if (!(`SSR` in window)) throw `SSR missing`;
  return (
    window.SSR.renderContext?.localizationSettings ?? {
      languages: [
        {
          strLanguage: `english`,
          eSource: 5,
          strISOCode: `en`,
        },
      ],
    }
  );
}
export { _, _, _, _ };
