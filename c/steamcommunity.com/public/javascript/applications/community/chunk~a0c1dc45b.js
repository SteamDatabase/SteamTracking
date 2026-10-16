"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [23877],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _() {
          return (0, _._)().languages.map((_) => _(_.strISOCode));
        }
        function _(_) {
          return _.length == 2 && _._.COUNTRY ? `${_}-${_._.COUNTRY}` : _;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        const _ = {};
        (_.arabic = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 6696, 19))),
          (_.brazilian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 58906, 19))),
          (_.bulgarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 53473, 19))),
          (_.czech = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 83899, 19))),
          (_.danish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 84925, 19))),
          (_.dutch = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 69902, 19))),
          (_.english = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 80716, 19))),
          (_.finnish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 81663, 19))),
          (_.french = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 48484, 19))),
          (_.german = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 66810, 19))),
          (_.greek = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 13744, 19))),
          (_.hungarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 62101, 19))),
          (_.indonesian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 68948, 19))),
          (_.italian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 2916, 19))),
          (_.japanese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 40195, 19))),
          (_.koreana = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 84259, 19))),
          (_.latam = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 24475, 19))),
          (_.malay = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 60580, 19))),
          (_.norwegian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 36884, 19))),
          (_.polish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 15269, 19))),
          (_.portuguese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 96865, 19))),
          (_.romanian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 71391, 19))),
          (_.russian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 64933, 19))),
          (_.sc_schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 27503, 19))),
          (_.schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 44768, 19))),
          (_.spanish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 20876, 19))),
          (_.swedish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 75181, 19))),
          (_.tchinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 89779, 19))),
          (_.thai = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 98970, 19))),
          (_.turkish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 87996, 19))),
          (_.ukrainian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 47306, 19))),
          (_.vietnamese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 72539, 19)));
        async function _(_) {
          if (_[_]) return _[_]();
        }
        var _ = __webpack_require__("chunkid");
        const _ = (0, _._)(_);
        var _ = __webpack_require__("chunkid"),
          _ = ((_) => (
            (_[(_.None = 0)] = "None"),
            (_[(_.Ago = 1)] = "Ago"),
            (_[(_.Remaining = 2)] = "Remaining"),
            _
          ))(_ || {});
        function _(_, _) {
          const _ = Date.now() / 1e3 - _;
          return _(_, _);
        }
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
            _ >= Seconds.PerYear * 2)
          )
            return PkgLocalization.Localize(
              `#${_}XYears`,
              _(_ / Seconds.PerYear),
            );
          if (_ >= Seconds.PerYear)
            return (
              (_ -= Seconds.PerYear),
              _ >= Seconds.PerMonth * 2 && !_.bForceSingleUnits
                ? PkgLocalization.Localize(
                    `#${_}1YearXMonths`,
                    _(_ / Seconds.PerMonth),
                  )
                : PkgLocalization.Localize(`#${_}1Year`)
            );
          if (_ >= Seconds.PerMonth * 2)
            return PkgLocalization.Localize(
              `#${_}XMonths`,
              _(_ / Seconds.PerMonth),
            );
          if (_ >= Seconds.PerWeek * 2)
            return PkgLocalization.Localize(
              `#${_}XWeeks`,
              _(_ / Seconds.PerWeek),
            );
          if (_ >= Seconds.PerWeek)
            return PkgLocalization.Localize(
              `#${_}1Week`,
              _(_ / Seconds.PerWeek),
            );
          if (_ >= Seconds.PerDay * 2)
            return PkgLocalization.Localize(
              `#${_}XDays`,
              _(_ / Seconds.PerDay),
            );
          if (_ >= Seconds.PerDay)
            return (
              (_ -= Seconds.PerDay),
              _ >= Seconds.PerHour * 2 && !_.bForceSingleUnits
                ? PkgLocalization.Localize(
                    `#${_}1DayXHours`,
                    _(_ / Seconds.PerHour),
                  )
                : PkgLocalization.Localize(`#${_}1Day`)
            );
          if (_ >= Seconds.PerHour * 2)
            return PkgLocalization.Localize(
              `#${_}XHours`,
              _(_ / Seconds.PerHour),
            );
          if (_ >= Seconds.PerHour)
            return (
              (_ -= Seconds.PerHour),
              _ >= Seconds.PerMinute * 2 && !_.bForceSingleUnits
                ? PkgLocalization.Localize(
                    `#${_}1HourXMinutes`,
                    _(_ / Seconds.PerMinute),
                  )
                : PkgLocalization.Localize(`#${_}1Hour`)
            );
          if (_ >= Seconds.PerMinute * 2) {
            const _ = Math.floor(_ / Seconds.PerMinute),
              _ = _ % Seconds.PerMinute;
            return !_.bHighGranularity || _ == 0
              ? PkgLocalization.Localize(
                  `#${_}XMinutes`,
                  _(_ / Seconds.PerMinute),
                )
              : _ == 1
                ? PkgLocalization.Localize(`#${_}XMinutes1Second`, _)
                : PkgLocalization.Localize(`#${_}XMinutesXSeconds`, _, _);
          } else if (_ >= Seconds.PerMinute) {
            const _ = _ % Seconds.PerMinute;
            return !_.bHighGranularity || _ == 0
              ? PkgLocalization.Localize(`#${_}1Minute`)
              : _ == 1
                ? PkgLocalization.Localize(`#${_}1Minute1Second`)
                : PkgLocalization.Localize(`#${_}1MinuteXSeconds`, _);
          } else
            return _.bHighGranularity
              ? _ == 1
                ? PkgLocalization.Localize(`#${_}1Second`)
                : PkgLocalization.Localize(`#${_}XSeconds`, _)
              : PkgLocalization.Localize(`#${_}LessThanAMinute`);
        }
        function _(_, _, _) {
          let _;
          _ === void 0 || _ === !0 || _ === !1
            ? (_ = {
                weekday: _ ? "long" : "short",
                year: _ ? void 0 : "numeric",
              })
            : (_ = _);
          let _ = new Date(_ * 1e3);
          const _ = {
            weekday: "short",
            month: "long",
            day: "numeric",
            year: "numeric",
            ..._,
          };
          return _.toLocaleDateString((0, _._)(), _);
        }
        function _(_, _) {
          let _ = new Date(_ * 1e3),
            _ = new Date(_ * 1e3);
          return _.getFullYear() != _.getFullYear() ||
            _.getMonth() != _.getMonth() ||
            _.getDate() != _.getDate()
            ? _(_, _)
            : _(_) + " - " + _(_);
        }
        function _(_, _) {
          let _ = new Date(_ * 1e3),
            _ = new Date(_ * 1e3);
          const _ = new Date();
          if (
            _.getFullYear() != _.getFullYear() ||
            _.getFullYear() == _.getFullYear()
          )
            return `${_(_)} - ${_(_)}`;
          const _ = {
              month: "short",
              day: "numeric",
            },
            _ = _.toLocaleDateString(GetPreferredLocales(), _) + " - ";
          if (_.getMonth() == _.getMonth()) {
            const _ = {
              day: "numeric",
            };
            return _ + _.toLocaleDateString(GetPreferredLocales(), _);
          } else return _ + _.toLocaleDateString(GetPreferredLocales(), _);
        }
        function _(_, _) {
          let _ = new Date(_ * 1e3);
          const _ = {
            year: "numeric",
            month: "short",
            day: "numeric",
            ..._,
          };
          return _.toLocaleDateString((0, _._)(), _);
        }
        function _(_, _) {
          const {
              fullmonthname: _ = !1,
              bUseRelativeNames: _ = !0,
              bIncludeDayName: _ = !1,
            } = _ != null ? _ : {},
            _ = new Date(),
            _ = new Date(_ * 1e3);
          if (_.getFullYear() != _.getFullYear())
            return _(_, {
              month: _ ? "long" : "short",
            });
          const _ = new Date();
          if ((_.setHours(0, 0, 0, 0), _)) {
            if (_ >= _) {
              if ((_.setDate(_.getDate() + 1), _ < _))
                return _.Localize("#Time_Today");
              if ((_.setDate(_.getDate() + 1), _ < _))
                return _.Localize("#Time_Tomorrow");
            } else if ((_.setDate(_.getDate() - 1), _ >= _))
              return _.Localize("#Time_Yesterday");
          }
          const _ = {
            month: _ ? "long" : "short",
            day: "numeric",
          };
          return _ && (_.weekday = "long"), _.toLocaleDateString((0, _._)(), _);
        }
        function _(_) {
          let _ = new Date(_ * 1e3);
          return _(_);
        }
        function _(_) {
          let _ = new Date(_ * 1e3);
          return _(_);
        }
        function _(_) {
          const _ = new Date();
          _.setHours(15);
          const _ = _.toLocaleTimeString(_, {
              hour: "numeric",
            }),
            _ = _.toLocaleTimeString(_, {
              hour: "numeric",
              hour12: !1,
            });
          return _ == _;
        }
        function _(_, _, _) {
          const _ = new Date(_ * 1e3),
            _ = {
              hour: "numeric",
              minute: "2-digit",
              hourCycle: "h23",
            },
            _ = {
              hour: "numeric",
              minute: "2-digit",
            },
            _ = (0, _._)(),
            _ = {
              ...((_ == null ? void 0 : _.bForce24HourClock) || _(_[0])
                ? _
                : _),
              ..._,
            };
          return _.toLocaleTimeString(_, _);
        }
        function _(_, _, _) {
          const _ = new Date(_ * 1e3);
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
          const _ = {
            weekday: _ ? "long" : "short",
            day: "numeric",
            month: _ ? "long" : "short",
          };
          return _.toLocaleDateString((0, _._)(), _);
        }
        function _(_) {
          return _.toLocaleDateString((0, _._)(), {
            weekday: "long",
          });
        }
        function _(_) {
          return _.toLocaleDateString(GetPreferredLocales(), {
            month: "long",
          });
        }
        function _(_) {
          return _.toLocaleDateString(GetPreferredLocales(), {
            month: "short",
          });
        }
        function _(_) {
          return _.toLocaleDateString((0, _._)(), {
            year: "numeric",
          });
        }
        function _(_) {
          return _.toLocaleDateString((0, _._)(), {
            month: "long",
            year: "numeric",
          });
        }
        function _(_, _) {
          switch (_.getUTCMonth()) {
            case 0:
            case 1:
            case 2:
              return _.Localize(
                _
                  ? "#Time_QuarterOfYear_Expanded_Q1"
                  : "#Time_QuarterOfYear_Q1",
                _.getUTCFullYear(),
              );
            case 3:
            case 4:
            case 5:
              return _.Localize(
                _
                  ? "#Time_QuarterOfYear_Expanded_Q2"
                  : "#Time_QuarterOfYear_Q2",
                _.getUTCFullYear(),
              );
            case 6:
            case 7:
            case 8:
              return _.Localize(
                _
                  ? "#Time_QuarterOfYear_Expanded_Q3"
                  : "#Time_QuarterOfYear_Q3",
                _.getUTCFullYear(),
              );
            default:
              return _.Localize(
                _
                  ? "#Time_QuarterOfYear_Expanded_Q4"
                  : "#Time_QuarterOfYear_Q4",
                _.getUTCFullYear(),
              );
          }
        }
        function _(_) {
          const _ = Math.floor(_ / _._.PerYear),
            _ = Math.floor(_ / _._.PerMonth),
            _ = Math.floor((_ % _._.PerMonth) / _._.PerDay),
            _ = Math.floor((_ % _._.PerDay) / _._.PerHour),
            _ = Math.floor((_ % _._.PerHour) / _._.PerMinute);
          return (
            (_ = _ % _._.PerMinute),
            _ > 0
              ? _.Localize("#TimeRemaining_MoreThanOneYear")
              : _ > 0
                ? _.Localize("#TimeRemaining_MonthsDays", _, _)
                : _ > 0
                  ? _.Localize(
                      "#TimeRemaining_DaysHoursMinutes",
                      _,
                      _.toString().padStart(2, "0"),
                      _.toString().padStart(2, "0"),
                    )
                  : _ > 0
                    ? _.Localize(
                        "#TimeRemaining_HoursMinutesSeconds",
                        _.toString().padStart(2, "0"),
                        _.toString().padStart(2, "0"),
                        _.toString().padStart(2, "0"),
                      )
                    : _.Localize(
                        "#TimeRemaining_MinutesSeconds",
                        _.toString().padStart(2, "0"),
                        _.toString().padStart(2, "0"),
                      )
          );
        }
        function _(_, _, _) {
          for (; _.length < _; ) _ = _ + _;
          return _;
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
        function _(_, _, _) {
          let _ = _ < 0;
          _ = _ ? 0 - _ : _;
          const _ = _(_),
            _ = _.fraction.toFixed(2).split(".")[1],
            _ = _ != null ? _ : !0;
          let _ = !_ || _ == "00";
          _ &&
            _.hours == 0 &&
            _.minutes == 0 &&
            _.seconds == 0 &&
            _ &&
            (_ = !1);
          let _ = "";
          if (_.hours) {
            const _ = _.hours.toString(),
              _ = _(_.minutes.toString(), 2, "0"),
              _ = _(_.seconds.toString(), 2, "0"),
              _ = _
                ? "#Duration_Abbreviation_HourMinuteSecondMillisecond"
                : "#Duration_Abbreviation_HourMinuteSecond";
            _ = PkgLocalization.Localize(_, _, _, _, _);
          } else if (_.minutes) {
            const _ = _.minutes.toString(),
              _ = _(_.seconds.toString(), 2, "0"),
              _ = _
                ? "#Duration_Abbreviation_MinuteSecondMillisecond"
                : "#Duration_Abbreviation_MinuteSecond";
            _ = PkgLocalization.Localize(_, _, _, _);
          } else if (_.seconds) {
            const _ = _.seconds.toString(),
              _ = _
                ? "#Duration_Abbreviation_SecondMillisecond"
                : "#Duration_Abbreviation_Second";
            _ = PkgLocalization.Localize(_, _, _);
          }
          return (
            _ &&
              (_
                ? (_ = PkgLocalization.Localize("#Duration_WrittenNegation", _))
                : (_ = "-" + _)),
            _
          );
        }
        function _(_, _, _) {
          let _ = _ < 0;
          _ = _ ? 0 - _ : _;
          const _ = _(_),
            _ = _(_.seconds.toString(), 2, "0"),
            _ = _.fraction.toFixed(2).split(".")[1],
            _ = _ != null ? _ : !0;
          let _ = !_ || _ == "00";
          _ &&
            _.hours == 0 &&
            _.minutes == 0 &&
            _.seconds == 0 &&
            _ &&
            (_ = !1);
          let _ = "";
          if (_.hours) {
            const _ = _(_.minutes.toString(), 2, "0"),
              _ = _
                ? "#Duration_HourMinuteSecondMillisecond"
                : "#Duration_HourMinuteSecond";
            _ = PkgLocalization.Localize(_, _.hours, _, _, _);
          } else {
            const _ = _.minutes.toString(),
              _ = _
                ? "#Duration_MinuteSecondMillisecond"
                : "#Duration_MinuteSecond";
            _ = PkgLocalization.Localize(_, _, _, _);
          }
          return (
            _ &&
              (_
                ? (_ = PkgLocalization.Localize("#Duration_WrittenNegation", _))
                : (_ = "-" + _)),
            _
          );
        }
        function _(_) {
          const _ = _(_),
            _ = _.hours * 60 + _.minutes,
            _ = _.hours,
            _ = Math.floor(_.hours / 24),
            _ = Math.floor(_ / 30);
          return _ > 1
            ? PkgLocalization.Localize("#ReadableDuration_Months", _)
            : _ === 1
              ? PkgLocalization.Localize("#ReadableDuration_OneMonth")
              : _ > 1
                ? PkgLocalization.Localize("#ReadableDuration_Days", _)
                : _ > 2
                  ? PkgLocalization.Localize("#ReadableDuration_Hours", _)
                  : _ > 2
                    ? PkgLocalization.Localize("#ReadableDuration_Minutes", _)
                    : _ > 1
                      ? PkgLocalization.Localize("#ReadableDuration_OneMinute")
                      : PkgLocalization.Localize(
                          "#ReadableDuration_LessThanOneMinute",
                        );
        }
        function _(_) {
          if (_ >= 120) {
            const _ = (Math.round((_ / 60) * 10) / 10).toLocaleString(
              GetPreferredLocales(),
              {
                minimumFractionDigits: 0,
                maximumFractionDigits: 1,
              },
            );
            return PkgLocalization.Localize("#Playtime_Hours", _);
          }
          return PkgLocalization.Localize(
            "#Playtime_Minutes",
            _.toLocaleString(GetPreferredLocales()),
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        const _ = {
          PerYear: 31536e3,
          PerMonth: 2628e3,
          PerWeek: 604800,
          PerDay: 86400,
          PerHour: 3600,
          PerMinute: 60,
        };
        function _(_, _) {
          return (
            _.getFullYear() == _.getFullYear() &&
            _.getMonth() == _.getMonth() &&
            _.getDate() == _.getDate()
          );
        }
        function _(_, _) {
          let _ = new Date(_);
          return _.setDate(_.getDate() - 1), _(_, _);
        }
        function _(_, _) {
          return _.getFullYear() == _.getFullYear();
        }
        function _(_) {
          return new Date(
            _.getFullYear(),
            _.getMonth(),
            _.getDate(),
            _.getHours(),
            0,
            0,
            0,
          );
        }
        function _(_) {
          return new Date(
            _.getFullYear(),
            _.getMonth(),
            _.getDate(),
            0,
            0,
            0,
            0,
          );
        }
        function _(_) {
          return new Date(_.getFullYear(), _.getMonth(), 1, 0, 0, 0, 0);
        }
        function _(_) {
          return new Promise((_) => setTimeout(_, _));
        }
        function _() {
          return Math.floor(Date.now() / 1e3);
        }
        function _(_) {
          return Math.floor(_.getTime() / 1e3);
        }
        function _(_) {
          const _ = Math.round(_ / 1e3),
            _ = Math.floor(_ % 60),
            _ = Math.floor((_ / 60) % 60),
            _ = Math.floor(_ / 3600);
          let _ = !1,
            _ = "";
          return (
            _ > 0 && ((_ += _ + ":"), (_ = !0)),
            (_ += _ && _ < 10 ? "0" + _ + ":" : _ + ":"),
            (_ += _ < 10 ? "0" + _ : _),
            _
          );
        }
      },
    },
  ]);
})();
