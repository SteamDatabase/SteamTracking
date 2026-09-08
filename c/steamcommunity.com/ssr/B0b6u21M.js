var _ = {};
(_.arabic = () => _(() => import(`./D1iwsC252.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./Bj5XJ9R_2.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./D3Yklhqb2.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./BTymFB292.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./D_hWGIfH.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./B06TzitI.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./Ctut-GDX.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./b9RqUZv8.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./Bm6yXjG6.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./C8xlV1zo.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./CMnDrB_h.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./Dq3GbgvE.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./CHcjDFvT.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./C4KkfZp8.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./CPuYpI-t.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./p_twQwdo.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./ChcOKKmV.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./CnZBA5RF.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./FOWSoEbT.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./Bb44Fxxf.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./DHj0UTbl.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./DmMZobIO.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./BkDJVBrt.js`), [], import.meta.url)),
  (_.sc_schinese = () => _(() => import(`./DOwCrGXH.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./Dgz7EVHb.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./DAQHcjG1.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./DP7HibfS.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./dyhgLe72.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./BuYKxy1t.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./DiZQVTiy.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./QkejXQ6o.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./d2fCSddo.js`), [], import.meta.url));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);
function _(_, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      year: `numeric`,
      month: `short`,
      day: `numeric`,
      ..._,
    };
  return _.toLocaleDateString(_(), _);
}
function _(_, _) {
  let {
      fullmonthname: _ = !1,
      bUseRelativeNames: _ = !0,
      bIncludeDayName: _ = !1,
    } = _ ?? {},
    _ = new Date(),
    _ = new Date(_ * 1e3);
  if (_.getFullYear() != _.getFullYear())
    return _(_, {
      month: _ ? `long` : `short`,
    });
  let _ = new Date();
  if ((_.setHours(0, 0, 0, 0), _)) {
    if (_ >= _) {
      if ((_.setDate(_.getDate() + 1), _ < _)) return _.Localize(`#Time_Today`);
      if ((_.setDate(_.getDate() + 1), _ < _))
        return _.Localize(`#Time_Tomorrow`);
    } else if ((_.setDate(_.getDate() - 1), _ >= _))
      return _.Localize(`#Time_Yesterday`);
  }
  let _ = {
    month: _ ? `long` : `short`,
    day: `numeric`,
  };
  return _ && (_.weekday = `long`), _.toLocaleDateString(_(), _);
}
function _(_) {
  let _ = new Date();
  return (
    _.setHours(15),
    _.toLocaleTimeString(_, {
      hour: `numeric`,
    }) ==
      _.toLocaleTimeString(_, {
        hour: `numeric`,
        hour12: !1,
      })
  );
}
function _(_, _, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      hour: `numeric`,
      minute: `2-digit`,
      hourCycle: `h23`,
    },
    _ = {
      hour: `numeric`,
      minute: `2-digit`,
    },
    _ = _(),
    _ = {
      ...(_?.bForce24HourClock || _(_[0]) ? _ : _),
      ..._,
    };
  return _.toLocaleTimeString(_, _);
}
function _(_, _, _) {
  return (
    _(new Date(_ * 1e3), !1, !1) +
    ` ` +
    _(_, {
      bForce24HourClock: _,
    }) +
    ` ` +
    _
  );
}
function _(_, _ = !1, _ = !0) {
  let _ = {
    weekday: _ ? `long` : `short`,
    day: `numeric`,
    month: _ ? `long` : `short`,
  };
  return _.toLocaleDateString(_(), _);
}
function _(_) {
  return (
    (_ === void 0 || isNaN(_)) && (_ = 0),
    {
      hours: Math.floor(_ / 3600),
      minutes: Math.floor((_ % 3600) / 60),
      seconds: Math.floor(_ % 60),
      fraction: _ - Math.floor(_),
    }
  );
}
function _(_) {
  let _ = _(_),
    _ = _.hours * 60 + _.minutes,
    _ = _.hours,
    _ = Math.floor(_.hours / 24),
    _ = Math.floor(_ / 30);
  return _ > 1
    ? _.Localize(`#ReadableDuration_Months`, _)
    : _ === 1
      ? _.Localize(`#ReadableDuration_OneMonth`)
      : _ > 1
        ? _.Localize(`#ReadableDuration_Days`, _)
        : _ > 2
          ? _.Localize(`#ReadableDuration_Hours`, _)
          : _ > 2
            ? _.Localize(`#ReadableDuration_Minutes`, _)
            : _ > 1
              ? _.Localize(`#ReadableDuration_OneMinute`)
              : _.Localize(`#ReadableDuration_LessThanOneMinute`);
}
export { _, _, _, _, _ };
